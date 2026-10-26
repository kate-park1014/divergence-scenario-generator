import { json } from '@sveltejs/kit';
import { mkdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import { buildScenarioRewritePrompt, buildScenarioTool } from '$lib/prompts/chapterGenRewrite';
import { buildScenarioBase } from '$lib/data/sample/scenarioBase';
import { npc_by_theme } from '$lib/data/sample/npc_pool';
import type { StoryArc } from '$lib/types';
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
 */

const DEFAULT_ARC_DIR = 'src/lib/data/storyarc/rewrite_test';
const DEFAULT_OUT_DIR = 'output_list/rewrite_test';
const ROOM_IDS = [1, 3, 5, 9, 15];
const SYSTEM_SPEAKERS = ['narrator', 'random_boss', 'boss', 'character_any', 'character_1', 'character_2', 'character_3', 'character_4'];
const PLACEHOLDER_IN_TEXT = /character_(any|[1-4])/;
const FIRST_PERSON = /(^|[\s'"“‘(])(나는|내가|나를|나의|나에게|내 |우리는|우리가|우리를|우리의)/;

type Gen = Record<string, unknown>;
type Entry = { type?: string; speaker?: string; action?: string; content?: { korean?: string } };
type OrderResult = { order: number; file?: string; errors?: string[]; error?: string };

const blocksOf = (room: Gen): [string, Entry[]][] =>
	(['dialogue', 'win_dialogue', 'lose_dialogue'] as const)
		.filter((k) => Array.isArray(room[k]))
		.map((k) => [k, room[k] as Entry[]]);

// 화면이 깨지거나 규칙을 어기는 것 (다시 요청)
function checkScenario(out: Gen, order: number, arc: StoryArc, npcKeys: string[]): string[] {
	const errors: string[] = [];
	const rooms = (Array.isArray(out.rooms) ? out.rooms : []) as Gen[];
	const ids = rooms.map((r) => Number(r.id));
	if (ids.join(',') !== ROOM_IDS.join(',')) errors.push(`rooms 의 id 는 1,3,5,9,15 차례여야 합니다. (지금: ${ids.join(',')})`);

	const allText: string[] = [];
	const rightVerb = (arc.right_action ?? '').replace(arc.key_object ?? '', '').trim().split(/\s+/).pop() ?? '';
	const rightStem = rightVerb.length >= 2 ? rightVerb.slice(0, 2) : '';
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
				for (const action of [arc.wrong_action, arc.right_action])
					if (action && text.replace(/[.!?。]/g, '').trim() === action.replace(/[.!?。]/g, '').trim())
						errors.push(`방 ${rid} ${block} ${i}번: 행동 메모를 대사로 그대로 읽었습니다("${text}"). 지문으로 보여 주거나 말에 녹일 것`);
				if (/^character_[1-4]$/.test(sp) && /[?？]/.test(text))
					errors.push(`방 ${rid} ${block} ${i}번: ${sp} 는 감정 반응 전용이라 질문하지 않습니다(그 파티원이 죽으면 질문이 사라진다): "${text}"`);
				// 일반 보스는 틀린 쪽: 정답 행동을 권하지 않는다 (정답 행동 동사의 앞 두 글자로 확인, 예: "찢어버린다" → "찢어")
				if (sp === 'random_boss' && rightStem && text.includes(rightStem))
					errors.push(`방 ${rid} ${block} ${i}번: 일반 보스가 정답 행동("${arc.right_action}")을 말합니다. 일반 보스는 최종보스 쪽이다: "${text}"`);
				if (order <= 4 && sp === 'boss')
					errors.push(`방 ${rid} ${block} ${i}번: 1~4화에는 speaker 'boss' 를 쓰지 않습니다. 최종보스의 말은 narrator 지문 안에 따옴표로 담거나 NPC 가 전한다`);
			});
		}
	}

	// prologue·epilogue 는 3인칭
	for (const key of ['prologue', 'epilogue'] as const) {
		const lines = (((out[key] as Gen | undefined)?.korean ?? []) as string[]).filter((l) => FIRST_PERSON.test(l));
		for (const l of lines) errors.push(`${key} 가 1인칭입니다. 3인칭으로 쓸 것: "${l}"`);
	}

	// 최종보스 이름은 소개한 뒤에만: 이 화에서 이름이 처음 나오는 곳이 파티 대사나 prologue 면 안 된다
	// (파티는 이름을 모른다. NPC·일반 보스가 전하거나 흔적에 이름이 뜨는 장면으로 소개)
	const bossName = (arc.boss_name_korean ?? arc.final_boss.name ?? '').replace(/\s+/g, '');
	if (bossName) {
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
	const traceWords = (arc.boss_trace ?? '').split(/\s+/).filter((w) => w.length >= 2);
	if (order <= 4 && traceWords.length && !traceWords.some((w) => joined.includes(w)))
		errors.push(`최종보스가 드러나는 방법 "${arc.boss_trace}" 이 대사·지문에 나오지 않습니다. 1~4화에 보스는 이것으로 드러난다`);
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
		return data.tool_result as Gen;
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

		const results: OrderResult[] = await Promise.all(
			orders.map(async (order): Promise<OrderResult> => {
				try {
					const prompt = buildScenarioRewritePrompt(order, arc);
					let out = await gemini(prompt, order);
					let errors = checkScenario(out, order, arc, npcKeys);
					for (let retry = 0; retry < 2 && errors.length; retry++) {
						out = await gemini(
							`${prompt}\n\n---\n\n## 이전 출력의 오류 — 고쳐서 다시 출력할 것\n${errors.map((e) => `- ${e}`).join('\n')}\n\n## 이전 출력\n\`\`\`json\n${JSON.stringify(out, null, 2)}\n\`\`\``,
							order
						);
						errors = checkScenario(out, order, arc, npcKeys);
					}

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

					const file = join(dir, `scenario_${String(order).padStart(2, '0')}.json`);
					await writeFile(join(process.cwd(), file), JSON.stringify({ ...base, ...out }, null, 2), 'utf-8');
					await writeFile(
						join(process.cwd(), dir, `script_${String(order).padStart(2, '0')}.md`),
						toScript(order, arc, out, names),
						'utf-8'
					);
					return { order, file, errors };
				} catch (e) {
					return { order, error: e instanceof Error ? e.message : String(e) };
				}
			})
		);

		// 화별 대본을 하나로 합친 script.md
		const parts: string[] = [`# ${arc.chapter_name?.korean ?? id} (${id})`, '', `장르: ${arc.genre ?? ''} · 무대: ${arc.stage ?? ''} · 핵심 물건: ${arc.key_object ?? ''}`, ''];
		for (const o of [...orders].sort((a, b) => a - b)) {
			try {
				parts.push(await readFile(join(process.cwd(), dir, `script_${String(o).padStart(2, '0')}.md`), 'utf-8'));
			} catch {
				parts.push(`## ${o}화 — (생성 실패)`, '');
			}
		}
		await writeFile(join(process.cwd(), dir, 'script.md'), parts.join('\n'), 'utf-8');
		return { id, dir, results: results.sort((a, b) => a.order - b.order) };
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
