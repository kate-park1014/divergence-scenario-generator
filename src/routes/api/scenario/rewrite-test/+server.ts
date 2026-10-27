import { json } from '@sveltejs/kit';
import { mkdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import { buildScenarioRewritePrompt, buildScenarioTool } from '$lib/prompts/chapterGenRewrite';
import { buildScenarioBase } from '$lib/data/sample/scenarioBase';
import { npc_by_theme } from '$lib/data/sample/npc_pool';
import type { StoryArc } from '$lib/types';
import { actionOf, traceOf, verbStem } from '$lib/prompts/arcEpisode';
import { registersOf } from '$lib/prompts/cardGenSeq';
import { similarity } from '$lib/server/cardCheck';
import {
	REVIEW_ITEMS,
	applyEdits,
	buildScenarioEditPrompt,
	buildScenarioReviewPrompt,
	buildScenarioVerifyPrompt,
	listChapter,
	scenarioEditTool,
	scenarioReviewTool,
	scenarioVerifyTool,
	type NewProblem,
	type ReviewIssue,
	type VerifyResult,
	type ScenarioEdit
} from '$lib/prompts/scenarioReview';
import type { RequestHandler } from './$types';

/**
 * 재작업 storyarc(rewrite_test) → 새 프롬프트(chapterGenRewrite.ts)로 시나리오 생성 (시험용).
 * 기존 파이프라인(bulk-pipeline)과 섞이지 않게 생성만 하고 별도 폴더에 저장한다. 번역·output 저장은 하지 않는다.
 *
 * body:
 *  - ids: string[]            storyarc id (storyarcDir 의 storyarc_<id>.ts)
 *  - orders?: number[]        만들 화 (기본 1~5)
 *  - storyarcDir?: string     기본 src/lib/data/storyarc/rewrite_test
 *  - outDir?: string          기본 output_list/rewrite_test  → <outDir>/<id>/scenario_0N.json, script.md
 *  - concurrency?: number     아크 동시 실행 (기본 2). 아크 안 5화는 동시에
 *  - review?: boolean         기본 true. 생성 뒤 검토자(1~5화 전체)·수정자(문제 줄만)를 1번 돌림 → <outDir>/<id>/review/
 *  - reviewOnly?: boolean     true 면 생성 없이 기존 scenario_0N.json 을 검토·수정
 */

const DEFAULT_ARC_DIR = 'src/lib/data/storyarc/rewrite_test';
const DEFAULT_OUT_DIR = 'output_list/rewrite_test';
const ROOM_IDS = [1, 3, 5, 9, 15];
const SYSTEM_SPEAKERS = ['narrator', 'random_boss', 'boss', 'character_any', 'character_1', 'character_2', 'character_3', 'character_4'];
const PLACEHOLDER_IN_TEXT = /character_(any|[1-4])/;
// 파티원에게 하는 제안형 물음 ("~하는 게 어때?", "~하는 건 어때요?", "~할래?")
const PARTY_PROPOSAL = /(게|건|는 것은|는 거) 어때(요)?\s*[?？]|할래(요)?\s*[?？]/;
const FIRST_PERSON = /(^|[\s'"“‘(])(나는|내가|나를|나의|나에게|내 |우리는|우리가|우리를|우리의)/;

type Gen = Record<string, unknown>;
type Entry = { type?: string; speaker?: string; action?: string; content?: { korean?: string } };
type OrderResult = { order: number; file?: string; errors?: string[]; error?: string };
type ReviewSummary = {
	error?: string;
	before?: number; // 검토가 찾은 문제 수
	after?: number; // 고친 뒤 확인: 풀리지 않은 문제 + 고친 줄이 새로 만든 문제
	unresolved?: number;
	newProblems?: number;
	edited?: number[]; // 고친 화
	reverted?: { order: number; errors: string[] }[]; // 고친 뒤 코드 검사에 새 오류가 생겨 원래대로 둔 화
	byItem?: Record<string, { before: number; after: number }>; // after = 풀리지 않은 수
};

const blocksOf = (room: Gen): [string, Entry[]][] =>
	(['dialogue', 'win_dialogue', 'lose_dialogue'] as const)
		.filter((k) => Array.isArray(room[k]))
		.map((k) => [k, room[k] as Entry[]]);

// Gemini 가 대사 줄을 type 'direction' 으로 내는 경우가 있다 (action 없이 content 만) → speech 로 고친다
function normalizeScenario(out: Gen): Gen {
	for (const room of (Array.isArray(out.rooms) ? out.rooms : []) as Gen[])
		for (const [, entries] of blocksOf(room))
			for (const e of entries) if (e.type === 'direction' && !e.action && e.content?.korean) e.type = 'speech';
	return out;
}

// 화면이 깨지거나 규칙을 어기는 것 (다시 요청)
// 파티(character_any) 대사 목록 — 다음 화에 넘겨 같은 말·반응을 되풀이하지 않게 (히어로 성장)
function partyLines(out: Gen): string[] {
	const lines: string[] = [];
	for (const room of (Array.isArray(out.rooms) ? out.rooms : []) as Gen[])
		for (const [, es] of blocksOf(room))
			for (const e of es) if (e.type === 'speech' && e.speaker === 'character_any' && e.content?.korean) lines.push(String(e.content.korean));
	return lines;
}

// 앞 화 파티 대사와 거의 같은 줄 (짧은 줄은 우연히 비슷할 수 있어 10자 이상만)
const REPEAT_SIM = 0.7;
function repeatErrors(out: Gen, prevParty: { order: number; lines: string[] }[]): string[] {
	const errors: string[] = [];
	for (const line of partyLines(out)) {
		if (line.length < 10) continue;
		for (const p of prevParty) {
			const hit = p.lines.find((l) => l.length >= 10 && similarity(line, l) >= REPEAT_SIM);
			if (hit) {
				errors.push(`파티 대사 "${line}" 가 ${p.order}화의 "${hit}" 와 거의 같습니다. 파티는 화마다 자란다 — 앞 화와 다른 행동·반응으로 바꿀 것`);
				break;
			}
		}
	}
	return errors;
}

function checkScenario(out: Gen, order: number, arc: StoryArc, npcKeys: string[], prevParty: { order: number; lines: string[] }[] = []): string[] {
	const errors: string[] = repeatErrors(out, prevParty);
	const rooms = (Array.isArray(out.rooms) ? out.rooms : []) as Gen[];
	const ids = rooms.map((r) => Number(r.id));
	if (ids.join(',') !== ROOM_IDS.join(',')) errors.push(`rooms 의 id 는 1,3,5,9,15 차례여야 합니다. (지금: ${ids.join(',')})`);

	const allText: string[] = [];
	const rightVerb = (arc.right_action ?? '').replace(arc.key_object ?? '', '').trim().split(/\s+/).pop() ?? '';
	const rightStem = rightVerb.length >= 2 ? rightVerb.slice(0, 2) : '';
	// 이번 화 행동 (2~4화는 1화와 겉모습이 다른 행동) / 이번 화 흔적
	const action = actionOf(arc, order);
	const trace = traceOf(arc, order);
	const wrongStem = order <= 4 ? verbStem(action, arc.key_object ?? '') : '';
	const bossWarns = arc.scenarioOutline[order - 1]?.random_boss_side === 'warn';
	// NPC 한국어 이름 (파티가 NPC 에게 하는 제안인지 볼 때)
	const npcPool = (npc_by_theme[arc.theme as keyof typeof npc_by_theme] ?? []) as readonly { key: string; name: { korean: string } }[];
	const npcNames = npcKeys.map((k) => npcPool.find((n) => n.key === k)?.name.korean ?? '');
	for (const room of rooms) {
		const rid = Number(room.id);
		for (const [block, entries] of blocksOf(room)) {
			const entered = new Set<string>();
			entries.forEach((e, i) => {
				const sp = String(e.speaker ?? '');
				const text = String(e.content?.korean ?? '');
				if (text) allText.push(text);
				if (e.type === 'direction' && e.action === 'enter') entered.add(sp);
				if (e.type !== 'speech') return;
				if (!SYSTEM_SPEAKERS.includes(sp) && !npcKeys.includes(sp))
					errors.push(`방 ${rid} ${block} ${i}번: speaker "${sp}" 는 쓸 수 없습니다 (NPC 는 ${npcKeys.join(', ')})`);
				if (npcKeys.includes(sp) && !entered.has(sp))
					errors.push(`방 ${rid} ${block} ${i}번: NPC ${sp} 가 enter 없이 말합니다. 그 방에서 enter 를 먼저 쓸 것`);
				if (PLACEHOLDER_IN_TEXT.test(text))
					errors.push(`방 ${rid} ${block} ${i}번: 대사 안에 placeholder 글자가 있습니다: "${text}"`);
				if (/이번 화|[\[\]]/.test(text))
					errors.push(`방 ${rid} ${block} ${i}번: 메모 표시("이번 화", 대괄호)가 대사에 남았습니다. 자연스러운 말로 쓸 것: "${text}"`);
				for (const act of [action, arc.wrong_action, arc.right_action])
					if (act && text.replace(/[.!?。]/g, '').trim() === act.replace(/[.!?。]/g, '').trim())
						errors.push(`방 ${rid} ${block} ${i}번: 행동 메모를 대사로 그대로 읽었습니다("${text}"). 지문으로 보여 주거나 말에 녹일 것`);
				// 파티 대사는 파티원끼리의 대화가 아니다: 제안형 물음은 NPC 이름이 있을 때만 (NPC 에게 하는 제안)
				if (sp === 'character_any' && PARTY_PROPOSAL.test(text) && !npcNames.some((n) => n && text.includes(n)))
					errors.push(`방 ${rid} ${block} ${i}번: 파티 대사가 다른 파티원에게 제안합니다("~하는 게 어때?"). 파티가 1명일 수도 있다. 결정은 한 줄로 말할 것 (예: "…를 위해 해 보자"): "${text}"`);
				if (/^character_[1-4]$/.test(sp) && /[?？]/.test(text))
					errors.push(`방 ${rid} ${block} ${i}번: ${sp} 는 감정 반응 전용이라 질문하지 않습니다(그 파티원이 죽으면 질문이 사라진다): "${text}"`);
				// 일반 보스는 틀린 쪽: 정답 행동을 권하지 않는다 (정답 행동 동사의 앞 두 글자로 확인, 예: "찢어버린다" → "찢어")
				if (sp === 'random_boss' && rightStem && text.includes(rightStem))
					errors.push(`방 ${rid} ${block} ${i}번: 일반 보스가 정답 행동("${arc.right_action}")을 말합니다. 일반 보스는 최종보스 쪽이다: "${text}"`);
				// 최종보스 편(ally) 일반 보스는 틀린 행동을 말리지 않는다 (틀린 행동 동사 앞 두 글자로 확인, 예: "재활용한다" → "재활")
				if (sp === 'random_boss' && !bossWarns && wrongStem && text.includes(wrongStem))
					errors.push(`방 ${rid} ${block} ${i}번: 이 화 일반 보스는 최종보스 편이라 이번 화 행동("${action}")을 말리거나 꺼내지 않습니다. 주인공의 의심·전진을 막는 말로 쓸 것: "${text}"`);
				if (sp === 'random_boss' && /^\s*\{random_boss\}\s*[:：]/.test(text))
					errors.push(`방 ${rid} ${block} ${i}번: 일반 보스 대사 앞에 "{random_boss}:" 를 붙였습니다. 화자는 speaker 로만 정하고 대사만 쓸 것: "${text}"`);
				if (order === 5 && sp === 'random_boss')
					errors.push(`방 ${rid} ${block} ${i}번: 5화에는 일반 보스(random_boss)가 나오지 않습니다: "${text}"`);
				if (order === 5 && sp === 'boss' && rid !== 15)
					errors.push(`방 ${rid} ${block} ${i}번: 5화 최종보스(speaker 'boss')는 방 15 에서 처음 나옵니다. 그 전에는 ${trace || '흔적'}으로만 (narrator 지문 속 따옴표): "${text}"`);
				if (order <= 4 && sp === 'boss')
					errors.push(`방 ${rid} ${block} ${i}번: 1~4화에는 speaker 'boss' 를 쓰지 않습니다. 최종보스의 말은 narrator 지문 안에 따옴표로 담거나 NPC 가 전한다`);
			});
		}
	}

	// 일반 보스는 방 15 밖에서는 방 하나에만 (여러 방에서 경고를 되풀이하면 파티가 고집쟁이처럼 보인다)
	if (order <= 4) {
		const rbRooms = rooms
			.filter((r) => Number(r.id) !== 15 && blocksOf(r).some(([, es]) => es.some((e) => e.speaker === 'random_boss')))
			.map((r) => r.id);
		if (rbRooms.length > 1)
			errors.push(`일반 보스가 방 15 밖의 여러 방(${rbRooms.join(', ')})에 나옵니다. 방 15 밖에서는 방 하나에만 나오게 할 것`);
	}

	// 이어지는 파티(character_any) 대사끼리 존댓말·반말이 섞이면 안 된다 (파티가 1명이면 한 사람이 말투를 바꾸는 것처럼 들림)
	for (const room of rooms)
		for (const [block, entries] of blocksOf(room)) {
			let prev: { reg: string; text: string } | null = null;
			for (const e of entries) {
				if (e.type !== 'speech') continue;
				if (e.speaker !== 'character_any') {
					prev = null;
					continue;
				}
				const text = String(e.content?.korean ?? '');
				const regs = registersOf(text);
				const reg = regs.length && regs.every((r) => r === regs[0]) ? regs[0] : '';
				if (reg && prev && prev.reg !== reg)
					errors.push(`방 ${room.id} ${block}: 이어지는 파티(character_any) 대사의 말투가 다릅니다(존댓말·반말). 파티가 1명이면 한 사람이 말투를 바꾸는 것처럼 들린다. 맞출 것: "${prev.text}" / "${text}"`);
				if (reg) prev = { reg, text };
			}
		}

	// prologue·epilogue 는 3인칭
	for (const key of ['prologue', 'epilogue'] as const) {
		const lines = (((out[key] as Gen | undefined)?.korean ?? []) as string[]).filter((l) => FIRST_PERSON.test(l));
		for (const l of lines) errors.push(`${key} 가 1인칭입니다. 3인칭으로 쓸 것: "${l}"`);
	}

	// 최종보스 이름: 1~4화에는 쓰지 않고, 5화에는 소개한 뒤에만 (처음 나오는 곳이 파티 대사나 prologue 면 안 된다)
	const bossName = (arc.boss_name_korean ?? arc.final_boss.name ?? '').replace(/\s+/g, '');
	// 1~4화: 이름을 아예 쓰지 않는다 (흔적으로만. 이름은 5화에 처음 나온다)
	const hidesName = order <= 4;
	if (bossName && hidesName) {
		const has = (t: string) => t.replace(/\s+/g, '').includes(bossName);
		for (const l of ((out.prologue as Gen | undefined)?.korean ?? []) as string[])
			if (has(l)) errors.push(`${order}화 prologue 에 최종보스 이름 "${bossName}" 이 있습니다. 1~4화에는 이름을 쓰지 않는다 (${trace || '흔적'}으로만): "${l}"`);
		for (const room of rooms)
			for (const [block, entries] of blocksOf(room))
				entries.forEach((e, i) => {
					const text = String(e.content?.korean ?? '');
					if (has(text))
						errors.push(`방 ${room.id} ${block} ${i}번: ${order}화에 최종보스 이름 "${bossName}" 이 나옵니다. 1~4화에는 이름을 쓰지 않는다 (${trace || '흔적'}으로만): "${text}"`);
				});
	} else if (bossName) {
		const has = (t: string) => t.replace(/\s+/g, '').includes(bossName);
		const pro = ((out.prologue as Gen | undefined)?.korean ?? []) as string[];
		const proHit = pro.find(has);
		if (proHit) errors.push(`prologue 에서 최종보스 이름 "${bossName}" 을 소개 없이 씁니다. 이름은 방 안에서 NPC·일반 보스·흔적으로 먼저 소개할 것: "${proHit}"`);
		else {
			first: for (const room of rooms)
				for (const [block, entries] of blocksOf(room))
					for (const [i, e] of entries.entries()) {
						const text = String(e.content?.korean ?? '');
						if (e.type !== 'speech' || !has(text)) continue;
						if (/^character_(any|[1-4])$/.test(String(e.speaker)))
							errors.push(`방 ${room.id} ${block} ${i}번: 최종보스 이름 "${bossName}" 이 소개 없이 파티 대사에서 처음 나옵니다. 파티는 이름을 모른다. NPC·일반 보스가 전하거나 흔적에 이름이 뜨는 장면으로 먼저 소개하고 파티가 반응할 것: "${text}"`);
						break first;
					}
		}
	}

	// 5화 정답 행동은 파티가 스스로 깨닫는다: 정답 동사가 처음 나오는 대사가 NPC 면 안 된다
	if (order === 5 && rightStem) {
		first5: for (const room of rooms)
			for (const [block, entries] of blocksOf(room))
				for (const [i, e] of entries.entries()) {
					const text = String(e.content?.korean ?? '');
					if (e.type !== 'speech' || !text.includes(rightStem)) continue;
					if (npcKeys.includes(String(e.speaker)))
						errors.push(`방 ${room.id} ${block} ${i}번: 정답 행동("${arc.right_action}")을 NPC 가 먼저 말합니다. 정답은 파티(character_any)가 스스로 깨달아 처음 말한다: "${text}"`);
					break first5;
				}
	}

	// 1~4화 prologue 는 틀린 행동을 꺼내지 않는다 (하기 전에 결과를 알려 주면 주인공이 알고도 하는 사람이 된다)
	if (order <= 4 && wrongStem)
		for (const l of ((out.prologue as Gen | undefined)?.korean ?? []) as string[])
			if (l.includes(wrongStem))
				errors.push(`1~4화 prologue 에서 이번 화 행동("${action}")을 꺼냅니다. prologue 는 장소·인물·분위기만 쓰고, 그 행동과 결과는 방 안에서 보여 줄 것: "${l}"`);

	// 첫 방 첫 줄은 narrator 상황 한 줄
	const first = rooms.find((r) => Number(r.id) === 1);
	const firstEntry = first ? ((first.dialogue as Entry[] | undefined) ?? [])[0] : undefined;
	if (!firstEntry || firstEntry.type !== 'speech' || firstEntry.speaker !== 'narrator')
		errors.push('방 1 의 첫 줄은 narrator 의 상황 한 줄이어야 합니다.');

	// 이름은 중심 낱말(마지막 낱말)만 확인 — 자연스럽게 줄여 불러도 되게
	const joined = allText.join('\n');
	const headOf = (x: string) => x.trim().split(/\s+/).pop() ?? '';
	if (arc.key_object && !joined.includes(headOf(arc.key_object)))
		errors.push(`핵심 물건 "${arc.key_object}" 가 대사·지문에 나오지 않습니다.`);
	// 보스 흔적: 매체 이름의 낱말(2글자 이상) 중 하나라도 나오면 통과 ("대기실 스피커 방송" → "스피커" 만 써도 됨)
	const traceWords = trace.split(/\s+/).filter((w) => w.length >= 2);
	if (order <= 4 && traceWords.length && !traceWords.some((w) => joined.includes(w)))
		errors.push(`최종보스가 드러나는 방법 "${trace}" 이 대사·지문에 나오지 않습니다. 이번 화에 보스는 이것으로 드러난다`);
	if (order === 5) {
		const r15 = rooms.find((r) => Number(r.id) === 15);
		const bossSpeaks = r15 ? blocksOf(r15).some(([, es]) => es.some((e) => e.speaker === 'boss')) : false;
		if (!bossSpeaks) errors.push("5화 방 15 에서 최종보스(speaker 'boss')가 말하지 않습니다.");
		if (!Array.isArray((out.epilogue as Gen | undefined)?.korean)) errors.push('5화에는 epilogue 가 필요합니다.');
	}
	return errors;
}

// 사람이 읽는 대본
function toScript(order: number, arc: StoryArc, out: Gen, names: Record<string, string>): string {
	const who = (sp: string) => names[sp] ?? sp;
	const lines: string[] = [`## ${order}화 — ${arc.scenarioOutline[order - 1]?.title ?? ''}`, ''];
	const pro = ((out.prologue as Gen | undefined)?.korean ?? []) as string[];
	if (pro.length) lines.push('**prologue**', ...pro.map((l) => `> ${l}`), '');
	for (const room of (out.rooms ?? []) as Gen[]) {
		for (const [block, entries] of blocksOf(room)) {
			if (!entries.length) continue; // 방 15 밖의 빈 win/lose 칸은 대본에 안 씀
			lines.push(`**방 ${room.id}${block === 'dialogue' ? '' : ` · ${block}`}**`);
			for (const e of entries) {
				if (e.type === 'direction') lines.push(`- _(${e.action}: ${who(String(e.speaker ?? ''))})_`);
				else {
					const sp = String(e.speaker ?? '');
					const rb = arc.scenarioOutline[order - 1]?.random_boss_title;
					lines.push(`- **${sp === 'random_boss' && rb ? `일반 보스(${rb})` : who(sp)}**: ${e.content?.korean ?? ''}`);
				}
			}
			lines.push('');
		}
	}
	const epi = ((out.epilogue as Gen | undefined)?.korean ?? []) as string[];
	if (epi.length) lines.push('**epilogue**', ...epi.map((l) => `> ${l}`), '');
	return lines.join('\n');
}

export const POST: RequestHandler = async ({ request, fetch }) => {
	const body = await request.json();
	const ids: string[] = Array.isArray(body.ids) ? body.ids.map(String) : [];
	if (!ids.length) return json({ error: 'ids 가 필요합니다.' }, { status: 400 });
	const orders: number[] = Array.isArray(body.orders) ? body.orders.map(Number) : [1, 2, 3, 4, 5];
	const arcDir: string = body.storyarcDir ?? DEFAULT_ARC_DIR;
	const outDir: string = body.outDir ?? DEFAULT_OUT_DIR;
	const concurrency = Math.max(1, Math.min(10, Number(body.concurrency) || 2));
	const reviewOnly = body.reviewOnly === true;
	const withReview = reviewOnly || body.review !== false;

	async function geminiTool(message: string, tools: unknown[], name: string): Promise<Gen> {
		const res = await fetch('/api/gemini', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ message, tools, tool_choice: { type: 'function', function: { name } }, temperature: 0 })
		});
		const data = await res.json().catch(() => null);
		if (!res.ok || !data?.tool_result) throw new Error(data?.error ?? `gemini ${res.status}`);
		return data.tool_result as Gen;
	}

	// 검토자: 1~5화 전체를 읽고 문제 줄 목록. 인용이 그 화 원문에 있는지 코드로 대조(quote_found)
	async function reviewOnce(arc: StoryArc, chapters: Map<number, Gen>, names: Record<string, string>): Promise<ReviewIssue[]> {
		const listed = [...chapters.entries()]
			.sort(([a], [b]) => a - b)
			.map(([o, out]) => listChapter(o, out, names, arc.scenarioOutline[o - 1]?.title ?? '', arc.scenarioOutline[o - 1]?.random_boss_title));
		let res: Gen | undefined;
		for (let t = 0; t < 2 && !res; t++) {
			try {
				res = await geminiTool(buildScenarioReviewPrompt(arc, listed), scenarioReviewTool, 'review_scenario');
			} catch (e) {
				if (t === 1) throw e;
			}
		}
		const norm = (x: string) => x.replace(/\s+/g, '');
		return ((res?.issues ?? []) as ReviewIssue[]).map((x) => {
			const out = chapters.get(Number(x.order));
			const text = out ? JSON.stringify(out) : '';
			return { ...x, quote_found: !!x.quote && norm(text).includes(norm(x.quote)) };
		});
	}

	async function reviewArc(
		arc: StoryArc,
		gens: { order: number; out?: Gen; errors?: string[] }[],
		dir: string,
		names: Record<string, string>,
		speakers: string[],
		npcKeys: string[]
	): Promise<ReviewSummary> {
		const pad = (o: number) => String(o).padStart(2, '0');
		const rdir = join(dir, 'review');
		await mkdir(join(process.cwd(), rdir), { recursive: true });

		// 검토는 1~5화 전체를 본다. 이번에 안 만든 화는 기존 파일을 맥락으로만 (고치지 않음)
		const chapters = new Map<number, Gen>();
		for (const g of gens) if (g.out) chapters.set(g.order, g.out);
		for (const o of [1, 2, 3, 4, 5]) {
			if (chapters.has(o)) continue;
			try {
				const f = JSON.parse(await readFile(join(process.cwd(), dir, `scenario_${pad(o)}.json`), 'utf-8')) as Gen;
				chapters.set(o, { prologue: f.prologue, rooms: f.rooms, ...(f.epilogue ? { epilogue: f.epilogue } : {}) });
			} catch {
				/* 없으면 뺌 */
			}
		}
		const editable = new Set(gens.filter((g) => g.out).map((g) => g.order));
		const scriptOf = (m: Map<number, Gen>) =>
			[...m.entries()].sort(([a], [b]) => a - b).map(([o, out]) => toScript(o, arc, out, names)).join('\n');
		await writeFile(join(process.cwd(), rdir, 'script_before.md'), scriptOf(chapters), 'utf-8');

		const issues = await reviewOnce(arc, chapters, names);
		await writeFile(join(process.cwd(), rdir, 'review.json'), JSON.stringify(issues, null, 2), 'utf-8');

		// 수정자: 화마다 그 화 문제만, 줄 단위로
		const edited: number[] = [];
		const changedLines = new Map<number, string[]>();
		const reverted: { order: number; errors: string[] }[] = [];
		await Promise.all(
			[...editable].map(async (order) => {
				const mine = issues.filter((x) => Number(x.order) === order);
				const g = gens.find((x) => x.order === order)!;
				const before = g.out!;
				// 다시 생성해도 남은 코드 검사 오류도 수정자에게 넘긴다
				const codeErrors = checkScenario(before, order, arc, npcKeys);
				if (!mine.length && !codeErrors.length) return;
				const editPrompt = buildScenarioEditPrompt(
					arc,
					order,
					listChapter(order, before, names, arc.scenarioOutline[order - 1]?.title ?? '', arc.scenarioOutline[order - 1]?.random_boss_title),
					mine,
					speakers,
					codeErrors
				);
				// 고친 결과에 코드 검사 오류가 새로 생기면, 그 오류를 알려 주고 원본에서 1번 더 고침. 그래도 생기면 원래대로
				const attempts: { edits: ScenarioEdit[]; skipped: string[]; newErrors: string[] }[] = [];
				let after: Gen | undefined;
				let errAfter: string[] = [];
				let edits: ScenarioEdit[] = [];
				for (let t = 0; t < 2; t++) {
					const prev = attempts[t - 1];
					const prompt = prev
						? `${editPrompt}\n\n---\n\n## 이전 고치기가 새로 만든 오류 — 이 오류가 생기지 않게 원본 대본에서 다시 고칠 것\n${prev.newErrors.map((e) => `- ${e}`).join('\n')}\n\n## 이전 고치기\n\`\`\`json\n${JSON.stringify(prev.edits, null, 2)}\n\`\`\``
						: editPrompt;
					const res = await geminiTool(prompt, scenarioEditTool, 'edit_scenario');
					const tryEdits = ((res.edits ?? []) as ScenarioEdit[]).filter((e) => e && typeof e.index === 'number');
					const applied = applyEdits(before, tryEdits, speakers);
					const errs = checkScenario(applied.out, order, arc, npcKeys);
					const newErrors = errs.filter((e) => !codeErrors.includes(e));
					attempts.push({ edits: tryEdits, skipped: applied.skipped, newErrors });
					if (!newErrors.length) {
						after = applied.out;
						errAfter = errs;
						edits = tryEdits;
						break;
					}
				}
				await writeFile(
					join(process.cwd(), rdir, `edits_${pad(order)}.json`),
					JSON.stringify({ issues: mine, codeErrors, attempts, kept: !!after, codeErrorsAfter: errAfter }, null, 2),
					'utf-8'
				);
				if (!after) {
					reverted.push({ order, errors: attempts[attempts.length - 1]?.newErrors ?? [] });
					return;
				}
				g.out = after;
				g.errors = errAfter;
				changedLines.set(
					order,
					edits.filter((e) => e.op !== 'delete' && e.text).map((e) => String(e.text))
				);
				chapters.set(order, after);
				edited.push(order);
			})
		);

		// 고친 뒤 확인: 처음 찾은 문제가 풀렸는지 + 고친 줄이 새 문제를 만들었는지만 (다시 고치지는 않음)
		const unresolvedIdx = new Set(issues.map((_, n) => n));
		let newProblems: NewProblem[] = [];
		if (edited.length) {
			const changed = edited.map((order) => ({ order, lines: changedLines.get(order) ?? [] }));
			const listed = [...chapters.entries()]
				.sort(([a], [b]) => a - b)
				.map(([o, out]) => listChapter(o, out, names, arc.scenarioOutline[o - 1]?.title ?? '', arc.scenarioOutline[o - 1]?.random_boss_title));
			const res = await geminiTool(buildScenarioVerifyPrompt(arc, listed, issues, changed), scenarioVerifyTool, 'verify_scenario');
			for (const r of (res.results ?? []) as VerifyResult[]) if (r.resolved) unresolvedIdx.delete(Number(r.n));
			newProblems = (res.new_problems ?? []) as NewProblem[];
			await writeFile(
				join(process.cwd(), rdir, 'verify.json'),
				JSON.stringify({ results: res.results ?? [], new_problems: newProblems }, null, 2),
				'utf-8'
			);
		}
		const byItem: Record<string, { before: number; after: number }> = {};
		for (const it of REVIEW_ITEMS)
			byItem[it.id] = {
				before: issues.filter((x) => x.item === it.id).length,
				after: issues.filter((x, n) => x.item === it.id && unresolvedIdx.has(n)).length
			};
		return {
			before: issues.length,
			unresolved: unresolvedIdx.size,
			newProblems: newProblems.length,
			after: unresolvedIdx.size + newProblems.length,
			edited: edited.sort(),
			reverted,
			byItem
		};

	}

	async function gemini(message: string, order: number): Promise<Gen> {
		const res = await fetch('/api/gemini', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				message,
				tools: [buildScenarioTool(order)],
				tool_choice: { type: 'function', function: { name: 'generate_scenario_content' } }
			})
		});
		const data = await res.json().catch(() => null);
		if (!res.ok || !data?.tool_result) throw new Error(data?.error ?? `gemini ${res.status}`);
		return normalizeScenario(data.tool_result as Gen);
	}

	async function runArc(id: string) {
		const text = await readFile(join(process.cwd(), arcDir, `storyarc_${id}.ts`), 'utf-8');
		const arc = JSON.parse(text.slice(text.indexOf('= {') + 2, text.lastIndexOf('}') + 1)) as StoryArc;
		const pool = (npc_by_theme[arc.theme as keyof typeof npc_by_theme] ?? []) as readonly Record<string, unknown>[];
		const npcKeys = [...new Set([...Object.keys(arc.npc_roles ?? {}), ...arc.scenarioOutline.map((s) => s.npc)])];
		const names: Record<string, string> = {
			narrator: '나레이션',
			character_any: '파티(아무나)',
			random_boss: '일반 보스',
			boss: `최종보스(${arc.boss_name_korean ?? arc.final_boss.name})`
		};
		for (const k of npcKeys) names[k] = String((pool.find((n) => n.key === k)?.name as { korean?: string } | undefined)?.korean ?? k);
		const dir = join(outDir, id);
		await mkdir(join(process.cwd(), dir), { recursive: true });

		const pad = (o: number) => String(o).padStart(2, '0');
		const speakers = [...SYSTEM_SPEAKERS, ...npcKeys];

		// 1) 생성 (reviewOnly 면 기존 scenario_0N.json 의 대사 부분을 읽음)
		type Gen1 = { order: number; out?: Gen; errors?: string[]; error?: string };
		// 앞 화 파티 대사: 이번 실행에서 만든 것, 없으면 저장된 파일에서
		const madeParty = new Map<number, string[]>();
		const prevPartyOf = async (order: number) => {
			const list: { order: number; lines: string[] }[] = [];
			for (let o = 1; o < order; o++) {
				let lines = madeParty.get(o);
				if (!lines) {
					try {
						lines = partyLines(JSON.parse(await readFile(join(process.cwd(), dir, `scenario_${pad(o)}.json`), 'utf-8')) as Gen);
					} catch {
						continue;
					}
				}
				if (lines.length) list.push({ order: o, lines });
			}
			return list;
		};
		const genOne = async (order: number): Promise<Gen1> => {
			try {
				if (reviewOnly) {
					const f = JSON.parse(await readFile(join(process.cwd(), dir, `scenario_${pad(order)}.json`), 'utf-8')) as Gen;
					const out: Gen = { prologue: f.prologue, rooms: f.rooms, ...(f.epilogue ? { epilogue: f.epilogue } : {}) };
					return { order, out, errors: checkScenario(out, order, arc, npcKeys) };
				}
				const prevParty = await prevPartyOf(order);
				const prompt = buildScenarioRewritePrompt(order, arc, prevParty);
				let out = await gemini(prompt, order);
				let errors = checkScenario(out, order, arc, npcKeys, prevParty);
				for (let retry = 0; retry < 2 && errors.length; retry++) {
					out = await gemini(
						`${prompt}\n\n---\n\n## 이전 출력의 오류 — 고쳐서 다시 출력할 것\n${errors.map((e) => `- ${e}`).join('\n')}\n\n## 이전 출력\n\`\`\`json\n${JSON.stringify(out, null, 2)}\n\`\`\``,
						order
					);
					errors = checkScenario(out, order, arc, npcKeys, prevParty);
				}
				madeParty.set(order, partyLines(out));
				return { order, out, errors };
			} catch (e) {
				return { order, error: e instanceof Error ? e.message : String(e) };
			}
		};
		// 생성은 1→5화 차례대로 (앞 화 파티 대사를 다음 화에 넘긴다). 검토만 할 때는 동시에
		let gens: Gen1[];
		if (reviewOnly) gens = await Promise.all(orders.map(genOne));
		else {
			gens = [];
			for (const order of [...orders].sort((a, b) => a - b)) gens.push(await genOne(order));
		}

		// 2) 검토·수정: 1~5화 전체를 읽고 문제 줄만 줄 단위로 고침 (1번). 고친 뒤 코드 검사에 새 오류가 생기면 그 화는 원래대로
		let review: ReviewSummary | undefined;
		if (withReview) {
			try {
				review = await reviewArc(arc, gens, dir, names, speakers, npcKeys);
			} catch (e) {
				review = { error: e instanceof Error ? e.message : String(e) };
			}
		}

		// 3) 저장
		const results: OrderResult[] = await Promise.all(
			gens.map(async (g): Promise<OrderResult> => {
				if (!g.out) return { order: g.order, error: g.error ?? '생성 실패' };
				const { order, out, errors } = g;
				try {
					// focus 연출은 쓰지 않는다 — 프롬프트로 막고, 남아 있으면 지운다
					for (const room of (out.rooms ?? []) as Gen[])
						for (const [block, es] of blocksOf(room))
							room[block] = es.filter((e) => !(e.type === 'direction' && e.action === 'focus'));

					// 대사에 나온 NPC 를 actors 에 넣는다 (주 NPC 외)
					const base = buildScenarioBase(order, arc) as Gen & { actors: Record<string, unknown> };
					const used = new Set<string>();
					for (const room of (out.rooms ?? []) as Gen[])
						for (const [, es] of blocksOf(room)) for (const e of es) if (npcKeys.includes(String(e.speaker))) used.add(String(e.speaker));
					for (const k of used) {
						if (base.actors[k]) continue;
						const n = pool.find((p) => p.key === k);
						if (n)
							base.actors[k] = {
								id: n.id,
								name: { ...(n.name as object) },
								description: (n.description as string) ?? '',
								face_image_url: n.face_image_url,
								battle_sprite_url: n.battle_sprite_url ?? n.base_image_url
							};
					}

					// NPC 직업 → actors.<key>.role (storyarc npc_roles.<key>.title 에서). name 과 같은 다국어 모양 (한국어만, 번역은 나중에)
					for (const [k, actor] of Object.entries(base.actors)) {
						const job = arc.npc_roles?.[k]?.title;
						if (job) (actor as Gen).role = { korean: job };
					}

					// 1~4화 일반 보스 직업 → boss.role (actors 의 role 과 같은 다국어 모양, 한국어만)
					const rbTitle = arc.scenarioOutline[order - 1]?.random_boss_title;
					if (order <= 4 && rbTitle) (base as Gen).boss = { ...((base as Gen).boss as Gen), role: { korean: rbTitle } };

					const file = join(dir, `scenario_${pad(order)}.json`);
					await writeFile(join(process.cwd(), file), JSON.stringify({ ...base, ...out }, null, 2), 'utf-8');
					await writeFile(join(process.cwd(), dir, `script_${pad(order)}.md`), toScript(order, arc, out, names), 'utf-8');
					return { order, file, errors };
				} catch (e) {
					return { order, error: e instanceof Error ? e.message : String(e) };
				}
			})
		);

		// 화별 대본을 하나로 합친 script.md
		const parts: string[] = [`# ${arc.chapter_name?.korean ?? id} (${id})`, '', `장르: ${arc.genre ?? ''} · 무대: ${arc.stage ?? ''} · 핵심 물건: ${arc.key_object ?? ''}`, ''];
		// 이번에 안 만든 화도 기존 script_0N.md 가 있으면 함께 넣는다 (--orders 로 일부만 다시 만들 때)
		for (const o of [1, 2, 3, 4, 5]) {
			try {
				parts.push(await readFile(join(process.cwd(), dir, `script_${String(o).padStart(2, '0')}.md`), 'utf-8'));
			} catch {
				if (orders.includes(o)) parts.push(`## ${o}화 — (생성 실패)`, '');
			}
		}
		await writeFile(join(process.cwd(), dir, 'script.md'), parts.join('\n'), 'utf-8');
		return { id, dir, results: results.sort((a, b) => a.order - b.order), review };
	}

	const all: Awaited<ReturnType<typeof runArc>>[] = [];
	const failed: { id: string; error: string }[] = [];
	let cursor = 0;
	async function worker() {
		while (cursor < ids.length) {
			const id = ids[cursor++];
			try {
				all.push(await runArc(id));
			} catch (e) {
				failed.push({ id, error: e instanceof Error ? e.message : String(e) });
			}
		}
	}
	await Promise.all(Array.from({ length: concurrency }, () => worker()));
	return json({ outDir, arcs: all, failed });
};
