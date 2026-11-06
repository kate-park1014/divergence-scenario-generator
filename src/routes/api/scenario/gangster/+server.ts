import { json } from '@sveltejs/kit';
import { readdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import { npc_by_theme } from '$lib/data/sample/npc_pool';
import {
	buildGangsterScenarioTool,
	buildScenarioGangsterPrompt,
	GANGSTER_BOSS_ROOM,
	GANGSTER_MAX_LINES,
	GANGSTER_MEET_ROOM,
	GANGSTER_ROOM_IDS,
	REST_BLOCK,
	shortTitle,
	type GangsterStory
} from '$lib/prompts/chapterGenGangster';
import { applyEdits } from '$lib/prompts/scenarioReview';
import { buildPolishPrompt, polishTool as basePolishTool, type PolishFix } from '$lib/prompts/netshortPolish';
import { bossCallText, getStyle } from '$lib/prompts/storyStyle';
import type { RequestHandler } from './$types';

/**
 * gangster_test/<key>/story.json → 게임 시나리오 5화 (시험용). 생성만 하고 번역·output 저장은 하지 않는다.
 * romance 대본 단계(/api/scenario/romance)와 같은 흐름: 5화 동시 생성 → 코드 검사(최대 2번 다시) → 다듬기 1콜.
 * 방은 1,3,5,7,9,10 (story.json 방 번호 그대로). 방 9 는 야영지 휴식 방: before_event_dialogue(휴식 전) → 야영지 이벤트(게임) → dialogue(휴식 뒤, 상대를 처음 만남).
 * 방 10 에서 싸운다. 방(블록)마다 대사 15줄 이하 (방 9 휴식 전·휴식 뒤는 따로 셈).
 *
 * body:
 *  - keys?: string[]        gangster_test/<key>/story.json. 없으면 폴더 안 이야기 전부
 *  - orders?: number[]      기본 1~5
 *  - polish?: boolean       기본 true (netshortPolish.ts). 고친 뒤 코드 검사 오류가 새로 생기면 되돌림. 기록 polish_0N.json
 *  - style?: string         스타일 파일 key. 기본: story.json 의 style, 없으면 gangster
 *  - dry_run?: boolean      Gemini 를 부르지 않고 프롬프트만 돌려줌 (파일 안 씀)
 */

const DIR = 'src/lib/data/storyarc/styles/gangster_test';
const ROOM_IDS = GANGSTER_ROOM_IDS;
const BOSS_ROOM = GANGSTER_BOSS_ROOM;
const MEET_ROOM = GANGSTER_MEET_ROOM;
const SYSTEM_SPEAKERS = ['narrator', 'random_boss', 'boss', 'character_any', 'character_1', 'character_2', 'character_3', 'character_4'];
const PLACEHOLDER_IN_TEXT = /character_(any|[1-4])/;
// 문장 처음·쉼표 뒤·따옴표 안에서만 ("김이 나는 컵라면" 의 '나는' 은 1인칭이 아님)
const FIRST_PERSON = /(^\s*|[.!?,]\s*|\s["“‘(]|^["“‘(])(나는|내가|나를|나의|나에게|내 |우리는|우리가|우리를|우리의)/;
/** 1~4화 지문에서 상대를 흐리게 부르는 말 (호칭으로 불러야 함) */
const VAGUE_FOE = /(^|[^가-힣])(사내|그 남자|그 여자|남자가|여자가|그자)/;
const PARTY_PROPOSAL = /(게|건|는 것은|는 거) 어때(요)?\s*[?？]|할래(요)?\s*[?？]/;

type Gen = Record<string, unknown>;
type Entry = { type?: string; speaker?: string; action?: string; content?: { korean?: string } };
type NpcSrc = { key: string; id?: string; name: { korean: string }; description?: string; face_image_url?: string; battle_sprite_url?: string; base_image_url?: string };

const BLOCKS = [REST_BLOCK, 'dialogue', 'win_dialogue', 'lose_dialogue'] as const;
const blocksOf = (room: Gen): [string, Entry[]][] => BLOCKS.filter((k) => Array.isArray(room[k])).map((k) => [k, room[k] as Entry[]]);
const BLOCK_LABEL: Record<string, string> = { [REST_BLOCK]: '휴식 전', dialogue: '', win_dialogue: '이긴 뒤', lose_dialogue: '진 뒤' };

/** 다듬기 도구: 휴식 전 블록도 고칠 수 있게 block 목록을 넓힘 */
const polishTool = (() => {
	const t = JSON.parse(JSON.stringify(basePolishTool));
	t.function.parameters.properties.fixes.items.properties.block.enum = [...BLOCKS, 'prologue', 'epilogue'];
	return t;
})();

/** 다듬기용 대본 펼치기 (scenarioReview.listChapter 와 같은 주소 형식 + 휴식 전 블록) */
function listGangster(order: number, out: Gen, names: Record<string, string>, place: string, rbTitle: string): string {
	const label: Record<string, string> = { ...names, random_boss: rbTitle || '그 화 상대' };
	const who = (sp: string) => (label[sp] ? `${sp}(${label[sp]})` : sp);
	const lines: string[] = [`## ${order}화${place ? ` — ${place}` : ''}`];
	(((out.prologue as Gen | undefined)?.korean ?? []) as string[]).forEach((l, i) => lines.push(`[방 0 prologue #${i}] ${l}`));
	for (const room of (out.rooms ?? []) as Gen[])
		for (const [block, es] of blocksOf(room)) {
			if (block === 'dialogue' && Number(room.id) === MEET_ROOM) lines.push(`(방 ${MEET_ROOM}: 여기서 야영지 휴식 이벤트가 끝나고 이어짐)`);
			es.forEach((e, i) => {
				const at = `[방 ${room.id} ${block} #${i}]`;
				lines.push(e.type === 'direction' ? `${at} (${e.action}: ${who(String(e.speaker ?? ''))})` : `${at} ${who(String(e.speaker ?? ''))}: ${e.content?.korean ?? ''}`);
			});
		}
	(((out.epilogue as Gen | undefined)?.korean ?? []) as string[]).forEach((l, i) => lines.push(`[방 0 epilogue #${i}] ${l}`));
	return lines.join('\n');
}

/** 말하는데 그 블록에 enter 가 없으면 첫 대사 앞에 넣는다 (NPC 는 모든 블록, 상대는 방 9 만. 방 10 상대는 자동 등장) */
function addEnters(out: Gen, npcKeys: string[], foe: string) {
	for (const room of (Array.isArray(out.rooms) ? out.rooms : []) as Gen[])
		for (const [, es] of blocksOf(room)) {
			const need = Number(room.id) === MEET_ROOM ? [...npcKeys, foe] : npcKeys;
			const entered = new Set<string>();
			for (let i = 0; i < es.length; i++) {
				const e = es[i];
				const sp = String(e.speaker ?? '');
				if (e.type === 'direction') {
					if (e.action === 'enter') entered.add(sp);
					continue;
				}
				if (!need.includes(sp) || entered.has(sp)) continue;
				es.splice(i, 0, { type: 'direction', action: 'enter', speaker: sp, spot: [3, 5], duration_ms: 500 } as Entry);
				entered.add(sp);
				i++;
			}
		}
}

function normalize(out: Gen, npcKeys: string[], foe: string): Gen {
	for (const room of (Array.isArray(out.rooms) ? out.rooms : []) as Gen[])
		for (const [block, entries] of blocksOf(room)) {
			for (const e of entries) {
				if (e.type === 'direction' && !e.action && e.content?.korean) e.type = 'speech';
				const t = e.content?.korean;
				if (t) {
					const m = t.trim().match(/^["“](.*)["”]$/s);
					if (m && !/["“”]/.test(m[1])) e.content!.korean = m[1].trim();
				}
			}
			room[block] = entries.filter((e) => !(e.type === 'direction' && e.action === 'focus') && !(e.type === 'speech' && !String(e.content?.korean ?? '').trim()));
		}
	// 방 1 이 enter 연출로 시작하면, 연출 바로 뒤의 narrator 첫 줄을 맨 앞으로
	const room1 = ((Array.isArray(out.rooms) ? out.rooms : []) as Gen[]).find((r) => Number(r.id) === 1);
	const es = room1?.dialogue as Entry[] | undefined;
	if (es?.length) {
		const k = es.findIndex((e) => e.type !== 'direction');
		if (k > 0 && es[k].speaker === 'narrator') es.unshift(...es.splice(k, 1));
	}
	addEnters(out, npcKeys, foe);
	// 방 9 는 야영지 휴식 방 (게임이 휴식 화면을 띄움). 키 차례: id, event, 휴식 전, 휴식 뒤
	const rooms = (Array.isArray(out.rooms) ? out.rooms : []) as Gen[];
	const i9 = rooms.findIndex((r) => Number(r.id) === MEET_ROOM);
	if (i9 >= 0) {
		const { id, [REST_BLOCK]: rest, dialogue, ...others } = rooms[i9];
		rooms[i9] = { id, event: 'campsite', [REST_BLOCK]: rest ?? [], dialogue: dialogue ?? [], ...others };
	}
	return out;
}

function checkScenario(out: Gen, order: number, story: GangsterStory, npcKeys: string[], calls: string): string[] {
	const errors: string[] = [];
	const rooms = (Array.isArray(out.rooms) ? out.rooms : []) as Gen[];
	const ids = rooms.map((r) => Number(r.id));
	if (ids.join(',') !== ROOM_IDS.join(',')) errors.push(`rooms 의 id 는 ${ROOM_IDS.join(',')} 차례여야 합니다. (지금: ${ids.join(',')})`);
	// 이름 앞이 한글이 아닐 때만 (띄어쓰기를 지우고 비교하면 "말이 안 통하니" 가 "이안" 으로 걸림)
	const finalName = (story.design.final?.name ?? '').trim();
	const ep = story.episodes.find((e) => e.order === order);
	const hasFinal = (t: string) => !!finalName && new RegExp(`(^|[^가-힣])${finalName}`).test(t);

	for (const room of rooms) {
		const rid = Number(room.id);
		if (rid === BOSS_ROOM && !['dialogue', 'win_dialogue', 'lose_dialogue'].every((k) => Array.isArray(room[k]) && (room[k] as unknown[]).length))
			errors.push(`방 ${BOSS_ROOM} 에는 dialogue·win_dialogue·lose_dialogue 가 모두 있어야 합니다.`);
		if (rid !== BOSS_ROOM && (Array.isArray(room.win_dialogue) || Array.isArray(room.lose_dialogue)))
			errors.push(`방 ${rid}: win_dialogue·lose_dialogue 는 방 ${BOSS_ROOM} 에만 씁니다.`);
		if (rid !== MEET_ROOM && Array.isArray(room[REST_BLOCK]) && (room[REST_BLOCK] as unknown[]).length)
			errors.push(`방 ${rid}: ${REST_BLOCK}(휴식 전 대화)는 방 ${MEET_ROOM} 에만 씁니다.`);
		if (rid === MEET_ROOM) {
			const rest = ((room[REST_BLOCK] as Entry[] | undefined) ?? []).filter((e) => e.type === 'speech');
			if (rest.length < 3)
				errors.push(`방 ${MEET_ROOM} ${REST_BLOCK}(휴식 전 대화)가 ${rest.length}줄입니다. 3~6줄로, 여기서 잠깐 쉬자고 이야기하는 대화를 쓸 것`);
			for (const e of rest)
				if (/스탯|체력|회복|이벤트|야영지/.test(String(e.content?.korean ?? '')))
					errors.push(`방 ${MEET_ROOM} ${REST_BLOCK}: 게임 용어(스탯·체력·회복·이벤트·야영지)를 쓰지 않습니다. 숨을 고른다·몸을 푼다처럼: "${e.content?.korean ?? ''}"`);
		}
		for (const [block, entries] of blocksOf(room)) {
			const speeches = entries.filter((e) => e.type === 'speech').length;
			if (speeches > GANGSTER_MAX_LINES)
				errors.push(`방 ${rid} ${block}: 대사가 ${speeches}줄입니다. ${GANGSTER_MAX_LINES}줄 이하로 줄일 것 (같은 뜻을 되풀이하는 줄·감정 반응 줄부터 뺄 것)`);
			const entered = new Set<string>();
			let run = 0;
			for (const e of entries) {
				if (e.type !== 'speech') continue;
				run = /^character_(any|[1-4])$/.test(String(e.speaker ?? '')) ? run + 1 : 0;
				if (run === 3) errors.push(`방 ${rid} ${block}: 파티 줄이 세 줄 이상 연달아 나옵니다. 새 소식·설명은 narrator 나 NPC 로 옮길 것: "${e.content?.korean ?? ''}"`);
			}
			entries.forEach((e, i) => {
				const sp = String(e.speaker ?? '');
				const text = String(e.content?.korean ?? '');
				const at = `방 ${rid} ${block} ${i}번`;
				if (e.type === 'direction' && e.action === 'enter') entered.add(sp);
				if (order <= 4 && hasFinal(text))
					errors.push(`${at}: 1~4화에는 5화 인물 이름 "${story.design.final.name}" 을 쓰지 않습니다: "${text}"`);
				if (/[一-鿿]/.test(text)) errors.push(`${at}: 한자를 쓰지 않습니다: "${text}"`);
				if (/보스/.test(text)) errors.push(`${at}: 대사·지문에 게임 용어 "보스" 를 쓰지 않습니다. 호칭으로 부를 것: "${text}"`);
				if (text.includes('{random_boss}')) errors.push(`${at}: {random_boss} 는 쓰지 않습니다. 호칭(${calls})으로 부를 것: "${text}"`);
				if (e.type !== 'speech') return;
				if (order <= 4 && sp === 'narrator' && (rid === MEET_ROOM || rid === BOSS_ROOM) && VAGUE_FOE.test(text))
					errors.push(`${at}: 지문이 상대를 "사내·남자" 같은 말로 부릅니다. "${ep?.boss}" 또는 "${shortTitle(ep?.boss ?? '')}"로 부를 것: "${text}"`);
				if (!SYSTEM_SPEAKERS.includes(sp) && !npcKeys.includes(sp)) errors.push(`${at}: speaker "${sp}" 는 쓸 수 없습니다 (NPC 는 ${npcKeys.join('·')} 뿐)`);
				if (npcKeys.includes(sp) && !entered.has(sp)) errors.push(`${at}: NPC ${sp} 가 enter 없이 말합니다. 그 방(블록)에서 enter 를 먼저 쓸 것`);
				if (PLACEHOLDER_IN_TEXT.test(text)) errors.push(`${at}: 대사 안에 placeholder 글자가 있습니다: "${text}"`);
				if (sp === 'character_any' && PARTY_PROPOSAL.test(text)) errors.push(`${at}: 파티 대사가 다른 파티원에게 제안합니다. 결정은 한 줄로 말할 것: "${text}"`);
				if (/^character_(any|[1-4])$/.test(sp)) {
					const bad = text.split(/(?<=[.!?…])\s+/).find((x) => /[^니]다[.!?…~]*$/.test(x.trim()));
					if (bad) errors.push(`${at}: 파티 대사가 "~다"로 끝나는 글말입니다. 짧은 반말 입말로 ("~야", "~어", "~지", "~겠어"): "${text}"`);
				}
				if (/^character_[1-4]$/.test(sp) && /[?？]/.test(text)) errors.push(`${at}: ${sp} 는 감정 반응 전용이라 질문하지 않습니다: "${text}"`);
				if (sp === 'narrator') {
					const bare = text.replace(/["“'‘][^"”'’]*["”'’]/g, '').trim();
					if (FIRST_PERSON.test(` ${bare}`)) errors.push(`${at}: narrator 가 1인칭입니다. 3인칭으로: "${text}"`);
					else if (bare && bare === text.trim() && bare.split(/(?<=[.!?…])\s+/).every((x) => /[!?]$/.test(x.trim())))
						errors.push(`${at}: narrator 가 인물의 말을 그대로 씁니다. 그 인물 speaker 로 쓰거나 지문 안에 따옴표로 담을 것: "${text}"`);
				}
				if ((sp === 'random_boss' || sp === 'boss') && ((rid !== MEET_ROOM && rid !== BOSS_ROOM) || block === REST_BLOCK))
					errors.push(`${at}: speaker '${sp}' 는 방 ${MEET_ROOM} 휴식 뒤(dialogue)·방 ${BOSS_ROOM} 에서만. 그 전에는 상대를 만나지 않습니다 (소문·흔적은 narrator·NPC 로)`);
				if (order <= 4 && sp === 'boss') errors.push(`${at}: 1~4화에는 speaker 'boss' 를 쓰지 않습니다 (상대는 random_boss)`);
				if (order === 5 && sp === 'random_boss') errors.push(`${at}: 5화에는 random_boss 가 나오지 않습니다 (상대는 boss)`);
			});
		}
	}
	for (const key of ['prologue', 'epilogue'] as const)
		for (const l of (((out[key] as Gen | undefined)?.korean ?? []) as string[]).filter((x) => FIRST_PERSON.test(x)))
			errors.push(`${key} 가 1인칭입니다. 3인칭으로 쓸 것: "${l}"`);
	if (order <= 4)
		for (const l of ((out.prologue as Gen | undefined)?.korean ?? []) as string[])
			if (hasFinal(l)) errors.push(`prologue 에 5화 인물 이름 "${story.design.final.name}" 이 있습니다: "${l}"`);
	const firstEntry = ((rooms.find((r) => Number(r.id) === 1)?.dialogue as Entry[] | undefined) ?? [])[0];
	if (!firstEntry || firstEntry.type !== 'speech' || firstEntry.speaker !== 'narrator') errors.push('방 1 의 첫 줄은 narrator 의 상황 한 줄이어야 합니다.');
	// 방 9: 상대를 처음 만나 이유를 말한다 / 방 10: 상대가 전투 전과 win 에서 말한다
	const foe = order === 5 ? 'boss' : 'random_boss';
	// 방 9 지문이 상대를 그 화 호칭으로 한 번은 부른다 (1~4화. 5화는 이름)
	const title = order <= 4 ? shortTitle(ep?.boss ?? '') : finalName;
	const room9Text = (((rooms.find((r) => Number(r.id) === MEET_ROOM)?.dialogue as Entry[] | undefined) ?? []).filter((e) => e.speaker === 'narrator').map((e) => e.content?.korean ?? '')).join(' ');
	if (title && !room9Text.includes(title))
		errors.push(`방 ${MEET_ROOM} 휴식 뒤(dialogue) narrator 지문에 상대 호칭 "${title}" 이 없습니다. 처음 만나는 장면에서 누구인지 알 수 있게 "${order <= 4 ? ep?.boss : finalName}"(으)로 부를 것`);
	const speaksIn = (rid: number, block: string) =>
		(((rooms.find((r) => Number(r.id) === rid)?.[block] as Entry[] | undefined) ?? []).filter((e) => e.type === 'speech' && e.speaker === foe)).length;
	if (speaksIn(MEET_ROOM, 'dialogue') < 2)
		errors.push(`방 ${MEET_ROOM} 휴식 뒤(dialogue)에서 상대(speaker '${foe}')가 두 줄 이상 말해야 합니다. 상대가 자기가 왜 이러는지 직접 말할 것`);
	if (!speaksIn(BOSS_ROOM, 'dialogue')) errors.push(`방 ${BOSS_ROOM} dialogue(전투 전)에서 상대(speaker '${foe}')가 말하지 않습니다.`);
	if (!speaksIn(BOSS_ROOM, 'win_dialogue')) errors.push(`방 ${BOSS_ROOM} win_dialogue 에서 상대(speaker '${foe}')가 말하지 않습니다.`);
	if (order === 5 && !Array.isArray((out.epilogue as Gen | undefined)?.korean)) errors.push('5화에는 epilogue 가 필요합니다.');
	return errors;
}

function toScript(order: number, ep: GangsterStory['episodes'][number], out: Gen, names: Record<string, string>): string {
	const who = (sp: string) => (sp === 'random_boss' ? `보스(${ep.boss})` : sp === 'boss' ? `보스(${names.boss})` : (names[sp] ?? sp));
	const lines: string[] = [`## ${order}화 — ${ep.place ?? ''}`, ''];
	const pro = ((out.prologue as Gen | undefined)?.korean ?? []) as string[];
	if (pro.length) lines.push('**prologue**', ...pro.map((l) => `> ${l}`), '');
	for (const room of (out.rooms ?? []) as Gen[])
		for (const [block, entries] of blocksOf(room)) {
			if (!entries.length) continue;
			const isMeet = Number(room.id) === MEET_ROOM;
			if (isMeet && block === 'dialogue') lines.push(`**방 ${room.id} · 야영지 이벤트** _(게임이 휴식 화면을 띄운다)_`, '');
			const label = isMeet && block === 'dialogue' ? '휴식 뒤' : BLOCK_LABEL[block];
			lines.push(`**방 ${room.id}${label ? ` · ${label}` : ''}**`);
			for (const e of entries)
				lines.push(e.type === 'direction' ? `- _(${e.action}: ${who(String(e.speaker ?? ''))})_` : `- **${who(String(e.speaker ?? ''))}**: ${e.content?.korean ?? ''}`);
			lines.push('');
		}
	const epi = ((out.epilogue as Gen | undefined)?.korean ?? []) as string[];
	if (epi.length) lines.push('**epilogue**', ...epi.map((l) => `> ${l}`), '');
	return lines.join('\n');
}

export const POST: RequestHandler = async ({ request, fetch }) => {
	const body = await request.json();
	let keys: string[] = Array.isArray(body.keys) && body.keys.length ? body.keys.map(String) : [];
	if (!keys.length) {
		const entries = await readdir(join(process.cwd(), DIR), { withFileTypes: true });
		const dirs = entries.filter((d) => d.isDirectory()).map((d) => d.name).sort();
		const has = await Promise.all(dirs.map((d) => readFile(join(process.cwd(), DIR, d, 'story.json')).then(() => true, () => false)));
		keys = dirs.filter((_, i) => has[i]);
	}
	if (!keys.length) return json({ error: `${DIR} 에 story.json 이 있는 이야기가 없습니다` }, { status: 400 });
	const orders: number[] = Array.isArray(body.orders) ? body.orders.map(Number) : [1, 2, 3, 4, 5];
	const polishOn = body.polish !== false;

	// Gemini 과부하(503·429)는 잠시 뒤 다시 (최대 5번)
	async function geminiTool(message: string, tool: { function: { name: string } }, temperature?: number): Promise<Gen> {
		for (let t = 0; ; t++) {
			const res = await fetch('/api/gemini', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ message, tools: [tool], tool_choice: { type: 'function', function: { name: tool.function.name } }, ...(temperature !== undefined ? { temperature } : {}) })
			});
			const data = await res.json().catch(() => null);
			if (res.ok && data?.tool_result) return data.tool_result as Gen;
			const msg = String(data?.error ?? `gemini ${res.status}`);
			if (t >= 4 || !(res.status === 503 || res.status === 429 || /503|429|UNAVAILABLE|RESOURCE_EXHAUSTED|overloaded|high demand/i.test(msg))) throw new Error(msg);
			await new Promise((r) => setTimeout(r, 10000 * (t + 1)));
		}
	}

	/** 다듬기: 걸리는 줄만 고침. 인용이 그 줄과 다르면 건너뜀, 코드 검사 오류가 새로 생기면 통째로 되돌림 (cozy 와 같음) */
	async function polish(out: Gen, check: (o: Gen) => string[], listing: string, speakers: string[]) {
		const res = (await geminiTool(buildPolishPrompt(listing), polishTool, 0.3)) as { fixes?: PolishFix[] };
		const squash = (t: string) => t.replace(/\s+/g, '');
		const lineOf = (f: PolishFix): string => {
			if (f.block === 'prologue' || f.block === 'epilogue') return String(((out[f.block] as Gen | undefined)?.korean as string[] | undefined)?.[f.index] ?? '');
			const room = ((out.rooms ?? []) as Gen[]).find((r) => Number(r.id) === Number(f.room));
			return String(((room?.[f.block] as Entry[] | undefined)?.[f.index])?.content?.korean ?? '');
		};
		const unlabel = (t: string) => String(t ?? '').replace(/^\s*[a-z_0-9]+(\([^)]*\))?\s*:\s*/, '');
		const fixes = (res.fixes ?? []).map((f) => ({ ...f, quote: unlabel(f.quote), text: unlabel(f.text), before: lineOf(f) }));
		const ok = fixes.filter((f) => f.before && squash(f.quote) === squash(f.before) && squash(f.text ?? '') && squash(f.text) !== squash(f.before));
		const { out: next, skipped } = applyEdits(out, ok.map((f) => ({ room: f.room, block: f.block, index: f.index, op: 'replace' as const, text: f.text })), speakers);
		const before = new Set(check(out));
		const added = check(next).filter((e) => !before.has(e));
		const log = {
			applied: added.length ? [] : ok.map(({ room, block, index, before, text, problem }) => ({ room, block, index, before, after: text, problem })),
			skipped: [...fixes.filter((f) => !ok.includes(f)).map((f) => ({ room: f.room, block: f.block, index: f.index, quote: f.quote, reason: '인용이 그 줄과 다르거나 바뀐 게 없음' })), ...skipped],
			reverted: added.length ? { reason: '고친 뒤 코드 검사 오류가 새로 생김', errors: added } : null
		};
		return { out: added.length ? out : next, log };
	}

	async function runStory(key: string) {
		const dir = join(DIR, key);
		const story = JSON.parse(await readFile(join(process.cwd(), dir, 'story.json'), 'utf-8')) as GangsterStory;
		const theme = story.theme ?? 'modern';
		const pool = (npc_by_theme[theme as keyof typeof npc_by_theme] ?? []) as readonly NpcSrc[];
		const npcKeys = story.npcs.map((n) => n.key);
		const npcNames = Object.fromEntries(story.npcs.map((n) => [n.key, pool.find((p) => p.key === n.key)?.name.korean ?? n.key]));
		const names: Record<string, string> = { narrator: '나레이션', character_any: '파티(아무나)', boss: story.design.final?.name ?? '', ...npcNames };
		const speakers = [...SYSTEM_SPEAKERS, ...npcKeys];
		const pad = (o: number) => String(o).padStart(2, '0');
		const style = getStyle(body.style ?? story.style ?? 'gangster');
		const calls = bossCallText(style);
		const actors: Record<string, unknown> = {};
		for (const n of story.npcs) {
			const src = pool.find((p) => p.key === n.key);
			if (src)
				actors[n.key] = {
					id: src.id,
					name: { ...src.name },
					description: src.description ?? '',
					face_image_url: src.face_image_url,
					battle_sprite_url: src.battle_sprite_url ?? src.base_image_url,
					role: { korean: n.role }
				};
		}

		if (body.dry_run)
			return {
				id: key,
				dir,
				results: orders.map((order) => {
					const ok = story.episodes.some((e) => e.order === order);
					return ok
						? { order, prompt: buildScenarioGangsterPrompt(story, order, npcNames[npcKeys[0]] ?? npcKeys[0], style, story.tone) }
						: { order, error: `${order}화가 story.json 에 없습니다` };
				})
			};

		const results = await Promise.all(
			orders.map(async (order) => {
				const ep = story.episodes.find((e) => e.order === order);
				if (!ep) return { order, error: `${order}화가 story.json 에 없습니다` };
				try {
					const check = (o: Gen) => checkScenario(o, order, story, npcKeys, calls);
					const foe = order === 5 ? 'boss' : 'random_boss';
					const prompt = buildScenarioGangsterPrompt(story, order, npcNames[npcKeys[0]] ?? npcKeys[0], style, story.tone);
					const tool = buildGangsterScenarioTool(order);
					let out = normalize(await geminiTool(prompt, tool), npcKeys, foe);
					let errors = check(out);
					for (let retry = 0; retry < 2 && errors.length; retry++) {
						out = normalize(
							await geminiTool(
								`${prompt}\n\n---\n\n## 이전 출력의 오류 — 오류 난 곳만 고치고 나머지는 그대로 다시 출력할 것\n${errors.map((e) => `- ${e}`).join('\n')}\n\n## 이전 출력\n\`\`\`json\n${JSON.stringify(out, null, 2)}\n\`\`\``,
								tool
							),
							npcKeys,
							foe
						);
						errors = check(out);
					}
					let polishLog: Awaited<ReturnType<typeof polish>>['log'] | null = null;
					if (polishOn) {
						try {
							const r = await polish(out, check, listGangster(order, out, names, ep.place ?? '', ep.boss ?? ''), speakers);
							out = r.out;
							polishLog = r.log;
							errors = check(out);
							await writeFile(join(process.cwd(), dir, `polish_${pad(order)}.json`), JSON.stringify(r.log, null, 2), 'utf-8');
						} catch {
							/* 다듬기 실패는 생성 결과에 영향 없음 */
						}
					}
					const isFinale = order === 5;
					const base = {
						scenario_id: `gangster_${key}_${pad(order)}`,
						order,
						act: order === 1 ? 'intro' : isFinale ? 'climax_finale' : 'rising',
						theme,
						actors,
						boss: isFinale
							? { pool_id: null, name: { korean: story.design.final?.name ?? '' }, appearance: story.design.final?.look ?? '' }
							: { pool_id: 'random_boss', role: { korean: ep.boss } }
					};
					const file = join(dir, `scenario_${pad(order)}.json`);
					await writeFile(join(process.cwd(), file), JSON.stringify({ ...base, ...out }, null, 2), 'utf-8');
					await writeFile(join(process.cwd(), dir, `script_${pad(order)}.md`), toScript(order, ep, out, names), 'utf-8');
					return { order, file, errors, ...(polishLog ? { polished: polishLog.applied.length, reverted: !!polishLog.reverted } : {}) };
				} catch (e) {
					return { order, error: e instanceof Error ? e.message : String(e) };
				}
			})
		);

		const parts = [`# ${story.title} (${key})`, '', `함께 다니는 NPC: ${Object.values(npcNames).join('·')} · 5화 상대: ${story.design.final?.name ?? ''}`, ''];
		for (const o of [1, 2, 3, 4, 5]) {
			try {
				parts.push(await readFile(join(process.cwd(), dir, `script_${pad(o)}.md`), 'utf-8'));
			} catch {
				if (orders.includes(o)) parts.push(`## ${o}화 — (생성 실패)`, '');
			}
		}
		await writeFile(join(process.cwd(), dir, 'script.md'), parts.join('\n'), 'utf-8');
		return { id: key, dir, results: results.sort((a, b) => a.order - b.order) };
	}

	const arcs: Awaited<ReturnType<typeof runStory>>[] = [];
	const failed: { id: string; error: string }[] = [];
	for (const k of keys) {
		try {
			arcs.push(await runStory(k));
		} catch (e) {
			failed.push({ id: k, error: e instanceof Error ? e.message : String(e) });
		}
	}
	return json({ arcs, failed });
};
