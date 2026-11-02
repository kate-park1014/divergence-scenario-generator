import { json } from '@sveltejs/kit';
import { mkdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import { npc_by_theme } from '$lib/data/sample/npc_pool';
import {
	buildScenarioNetshortPrompt,
	buildScenarioTool,
	companionOf,
	type NetshortStory
} from '$lib/prompts/chapterGenNetshort';
import { applyEdits, listChapter } from '$lib/prompts/scenarioReview';
import { injuredNameErrors } from '$lib/prompts/netshortStory';
import { buildPolishPrompt, polishTool, type PolishFix } from '$lib/prompts/netshortPolish';
import type { RequestHandler } from './$types';

/**
 * 넷쇼트 story.json → 게임 시나리오 5화 (시험용). 생성만 하고 번역·output 저장은 하지 않는다.
 *
 * body:
 *  - ids: string[]          netshort_test/<id>/story.json
 *  - orders?: number[]      기본 1~5
 *  - storyDir?: string      기본 src/lib/data/storyarc/netshort_test
 *  - outDir?: string        기본 src/lib/data/storyarc/netshort_test (story.json 옆) → <outDir>/<id>/scenario_0N.json, script.md
 *  - polish?: boolean       코드 검사 뒤 화마다 다듬기 1콜 (기본 true): 뜻이 안 통하거나 앞뒤와 어긋나는 줄만 고침 (netshortPolish.ts).
 *                           고친 뒤 코드 검사 오류가 새로 생기면 되돌림. 기록 <id>/polish_0N.json
 *  - polishOnly?: boolean   기존 scenario_0N.json 을 다듬기만 (생성 없음)
 */

const DEFAULT_STORY_DIR = 'src/lib/data/storyarc/netshort_test';
const DEFAULT_OUT_DIR = DEFAULT_STORY_DIR;
const ROOM_IDS = [1, 3, 5, 9, 15];
const SYSTEM_SPEAKERS = ['narrator', 'random_boss', 'boss', 'character_any', 'character_1', 'character_2', 'character_3', 'character_4'];
const PLACEHOLDER_IN_TEXT = /character_(any|[1-4])/;
const FIRST_PERSON = /(^|[\s'"“‘(])(나는|내가|나를|나의|나에게|내 |우리는|우리가|우리를|우리의)/;
const PARTY_PROPOSAL = /(게|건|는 것은|는 거) 어때(요)?\s*[?？]|할래(요)?\s*[?？]/;
/** 장치에 붙인 장식·부품 (줄거리에 없는 설정) */
const DEVICE_DECOR = /문양|새겨|각인|장착|부착|박혀|박힌|달려 있|달린 /;

type Gen = Record<string, unknown>;
type Entry = { type?: string; speaker?: string; action?: string; content?: { korean?: string } };
type NpcSrc = { key: string; id?: string; name: { korean: string }; description?: string; face_image_url?: string; battle_sprite_url?: string; base_image_url?: string };

const blocksOf = (room: Gen): [string, Entry[]][] =>
	(['dialogue', 'win_dialogue', 'lose_dialogue'] as const)
		.filter((k) => Array.isArray(room[k]))
		.map((k) => [k, room[k] as Entry[]]);

function normalize(out: Gen): Gen {
	for (const room of (Array.isArray(out.rooms) ? out.rooms : []) as Gen[])
		for (const [block, entries] of blocksOf(room)) {
			for (const e of entries) {
				if (e.type === 'direction' && !e.action && e.content?.korean) e.type = 'speech';
				// 대사·지문 전체를 감싼 따옴표는 뗀다
				const t = e.content?.korean;
				if (t) {
					const m = t.trim().match(/^["“](.*)["”]$/s);
					if (m && !/["“”]/.test(m[1])) e.content!.korean = m[1].trim();
				}
			}
			// focus 연출, 내용이 빈 대사는 뺀다
			room[block] = entries.filter((e) => !(e.type === 'direction' && e.action === 'focus') && !(e.type === 'speech' && !String(e.content?.korean ?? '').trim()));
		}
	return out;
}

function checkScenario(out: Gen, order: number, story: NetshortStory, npcKeys: string[], npcNames: string[]): string[] {
	const errors: string[] = [];
	const rooms = (Array.isArray(out.rooms) ? out.rooms : []) as Gen[];
	const ids = rooms.map((r) => Number(r.id));
	if (ids.join(',') !== ROOM_IDS.join(',')) errors.push(`rooms 의 id 는 1,3,5,9,15 차례여야 합니다. (지금: ${ids.join(',')})`);
	const bossName = (story.design.boss_name ?? '').replace(/\s+/g, '');
	const ep = story.episodes.find((e) => e.order === order);
	const rbName = (ep?.boss ?? '').trim().split(/\s+/).pop() ?? '';
	const deviceHead = (story.design.device ?? '').trim().split(/\s+/).pop() ?? '';
	const identityWord = (story.design.true_identity ?? '').replace(/[.。]$/, '').trim().split(/\s+/).pop() ?? '';
	// 피해자 이름 뒤바뀜: 방 15 win 전에는 앞 화까지 다친 사람만, win 에서는 이 화 피해자까지
	const hurt = (story.design.deceptions ?? []).map((x) => ({ order: x.order, name: String(x.actual_victim ?? '').trim().split(/\s+/).pop() ?? '' })).filter((x) => x.name);
	const cast = hurt.map((x) => x.name);
	const hurtUntil = (o: number) => hurt.filter((x) => x.order <= o).map((x) => x.name);

	for (const room of rooms) {
		const rid = Number(room.id);
		if (rid === 15 && !['dialogue', 'win_dialogue', 'lose_dialogue'].every((k) => Array.isArray(room[k]) && (room[k] as unknown[]).length))
			errors.push('방 15 에는 dialogue·win_dialogue·lose_dialogue 가 모두 있어야 합니다.');
		for (const [block, entries] of blocksOf(room)) {
			const entered = new Set<string>();
			// 파티 줄은 두 줄까지만 연달아
			let run = 0;
			for (const e of entries) {
				if (e.type !== 'speech') continue;
				run = /^character_(any|[1-4])$/.test(String(e.speaker ?? '')) ? run + 1 : 0;
				if (run === 3) errors.push(`방 ${rid} ${block}: 파티 줄이 세 줄 이상 연달아 나옵니다. 새 소식·설명은 narrator 나 NPC 로 옮기고, 파티는 두 줄까지만 연달아 쓸 것: "${e.content?.korean ?? ''}"`);
			}
			entries.forEach((e, i) => {
				const sp = String(e.speaker ?? '');
				const text = String(e.content?.korean ?? '');
				const at = `방 ${rid} ${block} ${i}번`;
				if (e.type === 'direction' && e.action === 'enter') entered.add(sp);
				if (bossName && order <= 4 && text.replace(/\s+/g, '').includes(bossName))
					errors.push(`${at}: 1~4화에는 최종보스 이름 "${bossName}" 을 쓰지 않습니다: "${text}"`);
				if (order <= 4 && rbName.length >= 2 && text.includes(rbName))
					errors.push(`${at}: 일반 보스 이름 "${rbName}" 은 쓰지 않습니다 (런타임에 정해짐). 필요하면 {random_boss}: "${text}"`);
				if (order === 5 && rid < 9 && identityWord.length >= 2 && text.includes(identityWord))
					errors.push(`${at}: 정체 낱말 "${identityWord}" 은 방 9 전에 쓰지 않습니다: "${text}"`);
				if (/[一-鿿]/.test(text)) errors.push(`${at}: 한자를 쓰지 않습니다: "${text}"`);
				if (/보스/.test(text)) errors.push(`${at}: 대사·지문에 게임 용어 "보스" 를 쓰지 않습니다. 이름·직업·"놈"으로 부를 것: "${text}"`);
				if (text) errors.push(...injuredNameErrors(text, at, cast, hurtUntil(block === 'win_dialogue' ? order : order - 1)));
				const decor = deviceHead && (text.includes('장치') || text.includes(deviceHead)) ? text.match(DEVICE_DECOR)?.[0] : undefined;
				if (decor) errors.push(`${at}: 핵심 장치에 줄거리에 없는 "${decor}" 를 덧붙였습니다. 장치는 줄거리에 적힌 모습만: "${text}"`);
				if (e.type !== 'speech') return;
				if (!SYSTEM_SPEAKERS.includes(sp) && !npcKeys.includes(sp))
					errors.push(`${at}: speaker "${sp}" 는 쓸 수 없습니다 (NPC 는 ${npcKeys.join(', ')})`);
				if (npcKeys.includes(sp) && !entered.has(sp))
					errors.push(`${at}: NPC ${sp} 가 enter 없이 말합니다. 그 방(블록)에서 enter 를 먼저 쓸 것`);
				if (PLACEHOLDER_IN_TEXT.test(text)) errors.push(`${at}: 대사 안에 placeholder 글자가 있습니다: "${text}"`);
				if (sp === 'character_any' && PARTY_PROPOSAL.test(text) && !npcNames.some((n) => n && text.includes(n)))
					errors.push(`${at}: 파티 대사가 다른 파티원에게 제안합니다. 결정은 한 줄로 말할 것: "${text}"`);
				// 파티 대사는 입말: "~다"로 끝나는 글말 금지 ("~니다" 존댓말은 허용)
				if (/^character_(any|[1-4])$/.test(sp)) {
					const bad = text.split(/(?<=[.!?…])\s+/).find((x) => /[^니]다[.!?…~]*$/.test(x.trim()));
					if (bad) errors.push(`${at}: 파티 대사가 "~다"로 끝나는 글말입니다. 사람이 입으로 하는 짧은 반말로 쓸 것 ("~야", "~어", "~지", "~겠어"): "${text}"`);
				}
				// narrator 는 3인칭 지문만. 인물의 말·비명은 그 인물 대사로 (목록에 없는 인물은 지문 안 따옴표)
				if (sp === 'narrator') {
					const bare = text.replace(/["“'‘][^"”'’]*["”'’]/g, '').trim();
					if (FIRST_PERSON.test(` ${bare}`)) errors.push(`${at}: narrator 가 1인칭("내·우리")입니다. "히어로들은 자신들의 ~"처럼 3인칭으로: "${text}"`);
					else if (bare && bare === text.trim() && bare.split(/(?<=[.!?…])\s+/).every((x) => /[!?]$/.test(x.trim())))
						errors.push(`${at}: narrator 가 인물의 말·비명을 그대로 씁니다. 그 인물 speaker 로 쓰거나, 지문 안에 따옴표로 담을 것: "${text}"`);
				}
				if (text.includes('{random_boss}'))
					errors.push(`${at}: {random_boss} 는 쓰지 않습니다 (이름의 받침을 몰라 조사가 어긋남). "놈", "그 사내"처럼 부를 것: "${text}"`);
				if (/^character_[1-4]$/.test(sp) && /[?？]/.test(text))
					errors.push(`${at}: ${sp} 는 감정 반응 전용이라 질문하지 않습니다: "${text}"`);
				if (order <= 4 && sp === 'boss') errors.push(`${at}: 1~4화에는 speaker 'boss' 를 쓰지 않습니다 (일반 보스는 random_boss)`);
				if (order === 5 && sp === 'random_boss') errors.push(`${at}: 5화에는 random_boss 가 나오지 않습니다`);
				if (order === 5 && sp === 'boss' && rid !== 15) errors.push(`${at}: speaker 'boss' 는 방 15 에서만. 그 전에는 narrator 지문 속 따옴표로`);
			});
		}
	}
	for (const key of ['prologue', 'epilogue'] as const)
		for (const l of (((out[key] as Gen | undefined)?.korean ?? []) as string[]).filter((x) => FIRST_PERSON.test(x)))
			errors.push(`${key} 가 1인칭입니다. 3인칭으로 쓸 것: "${l}"`);
	if (bossName && order <= 4)
		for (const l of ((out.prologue as Gen | undefined)?.korean ?? []) as string[])
			if (l.replace(/\s+/g, '').includes(bossName)) errors.push(`prologue 에 최종보스 이름 "${bossName}" 이 있습니다: "${l}"`);
	const first = rooms.find((r) => Number(r.id) === 1);
	const firstEntry = first ? ((first.dialogue as Entry[] | undefined) ?? [])[0] : undefined;
	if (!firstEntry || firstEntry.type !== 'speech' || firstEntry.speaker !== 'narrator')
		errors.push('방 1 의 첫 줄은 narrator 의 상황 한 줄이어야 합니다.');
	// 1~4화: 실제 피해자는 방 15 전에 먼저 보이고, win_dialogue 에서 다친다
	const victim = (story.design.deceptions?.find((x) => x.order === order)?.actual_victim ?? '').trim().split(/\s+/).pop() ?? '';
	if (order <= 4 && victim.length >= 2) {
		const mentions = (es: Entry[]) => es.some((e) => String(e.content?.korean ?? '').includes(victim) || npcNames[npcKeys.indexOf(String(e.speaker ?? ''))] === victim);
		const before = rooms.filter((r) => Number(r.id) < 15).some((r) => blocksOf(r).some(([, es]) => mentions(es)));
		if (!before) errors.push(`실제 피해자 "${victim}" 가 방 15 전에 한 번도 나오지 않습니다. 앞 방에 NPC 대사나 narrator 지문으로 먼저 보이게 할 것`);
		const win = rooms.find((r) => Number(r.id) === 15)?.win_dialogue as Entry[] | undefined;
		if (!win || !mentions(win)) errors.push(`방 15 win_dialogue 에 실제 피해자 "${victim}" 가 없습니다`);
	}
	// 2~4화: 앞 화 피해자를 방 1~9 에서 떠올린다
	const prev = (story.design.deceptions?.find((x) => x.order === order - 1)?.actual_victim ?? '').trim().split(/\s+/).pop() ?? '';
	if (order >= 2 && order <= 4 && prev.length >= 2) {
		const said = rooms.filter((r) => Number(r.id) < 15).some((r) => blocksOf(r).some(([, es]) => es.some((e) => String(e.content?.korean ?? '').includes(prev))));
		if (!said) errors.push(`앞 화 피해자 "${prev}" 가 방 1~9 에 나오지 않습니다. 앞 화에서 다친 그 사람의 지금 모습을 보여주고 파티가 그 일을 떠올리게 할 것`);
	}
	if (order === 5) {
		const r15 = rooms.find((r) => Number(r.id) === 15);
		if (!r15 || !((r15.dialogue as Entry[] | undefined) ?? []).some((e) => e.speaker === 'boss'))
			errors.push("5화 방 15 dialogue(전투 전)에서 최종보스(speaker 'boss')가 말하지 않습니다. 원하는 것을 말하고 장치를 한 번 더 쓰라고 권할 것.");
		if (!Array.isArray((out.epilogue as Gen | undefined)?.korean)) errors.push('5화에는 epilogue 가 필요합니다.');
	}
	return errors;
}

/** 앞 화 피해자(NPC)는 그 화 내내 함께 다닌다 → 방마다 dialogue 앞에 enter (방 1 은 narrator 첫 줄 뒤) */
function addCompanionEnters(out: Gen, key: string | undefined) {
	if (!key) return;
	for (const room of (Array.isArray(out.rooms) ? out.rooms : []) as Gen[]) {
		const es = room.dialogue as Entry[] | undefined;
		if (!Array.isArray(es) || es.some((e) => e.type === 'direction' && e.action === 'enter' && e.speaker === key)) continue;
		const at = Number(room.id) === 1 && es[0]?.speaker === 'narrator' ? 1 : 0;
		es.splice(at, 0, { type: 'direction', action: 'enter', speaker: key, spot: [700, 750], duration_ms: 500 } as Entry);
	}
}

function toScript(order: number, ep: NetshortStory['episodes'][number], out: Gen, names: Record<string, string>): string {
	const who = (sp: string) => (sp === 'random_boss' ? `일반 보스(${ep.boss})` : (names[sp] ?? sp));
	const lines: string[] = [`## ${order}화 — ${ep.place ?? ''}`, ''];
	const pro = ((out.prologue as Gen | undefined)?.korean ?? []) as string[];
	if (pro.length) lines.push('**prologue**', ...pro.map((l) => `> ${l}`), '');
	for (const room of (out.rooms ?? []) as Gen[])
		for (const [block, entries] of blocksOf(room)) {
			if (!entries.length) continue;
			lines.push(`**방 ${room.id}${block === 'dialogue' ? '' : ` · ${block}`}**`);
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
	const ids: string[] = Array.isArray(body.ids) ? body.ids.map(String) : [];
	if (!ids.length) return json({ error: 'ids 가 필요합니다.' }, { status: 400 });
	const orders: number[] = Array.isArray(body.orders) ? body.orders.map(Number) : [1, 2, 3, 4, 5];
	const storyDir: string = body.storyDir ?? DEFAULT_STORY_DIR;
	const outDir: string = body.outDir ?? DEFAULT_OUT_DIR;
	const polishOnly = body.polishOnly === true;
	const polishOn = polishOnly || body.polish !== false;

	// Gemini 과부하(503·429)는 잠시 뒤 다시 (최대 5번)
	async function gemini(message: string, order: number): Promise<Gen> {
		return normalize(await geminiTool(message, buildScenarioTool(order)));
	}

	async function geminiTool(message: string, tool: { function: { name: string } }, temperature?: number): Promise<Gen> {
		for (let t = 0; ; t++) {
			try {
				return await geminiOnce(message, tool, temperature);
			} catch (e) {
				const msg = e instanceof Error ? e.message : String(e);
				if (t >= 4 || !/503|429|UNAVAILABLE|RESOURCE_EXHAUSTED|overloaded|high demand/i.test(msg)) throw e;
				await new Promise((r) => setTimeout(r, 10000 * (t + 1)));
			}
		}
	}

	async function geminiOnce(message: string, tool: { function: { name: string } }, temperature?: number): Promise<Gen> {
		const res = await fetch('/api/gemini', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				message,
				tools: [tool],
				tool_choice: { type: 'function', function: { name: tool.function.name } },
				...(temperature !== undefined ? { temperature } : {})
			})
		});
		const data = await res.json().catch(() => null);
		if (!res.ok || !data?.tool_result) throw new Error(data?.error ?? `gemini ${res.status}`);
		return data.tool_result as Gen;
	}

	/** 다듬기: 걸리는 줄만 고침. 인용이 그 줄과 다르면 건너뜀, 코드 검사 오류가 새로 생기면 통째로 되돌림 */
	async function polish(out: Gen, check: (o: Gen) => string[], listing: string, speakers: string[]) {
		const res = (await geminiTool(buildPolishPrompt(listing), polishTool, 0.3)) as { fixes?: PolishFix[] };
		const squash = (t: string) => t.replace(/\s+/g, '');
		const lineOf = (f: PolishFix): string => {
			if (f.block === 'prologue' || f.block === 'epilogue') return String(((out[f.block] as Gen | undefined)?.korean as string[] | undefined)?.[f.index] ?? '');
			const room = ((out.rooms ?? []) as Gen[]).find((r) => Number(r.id) === Number(f.room));
			return String(((room?.[f.block] as Entry[] | undefined)?.[f.index])?.content?.korean ?? '');
		};
		// 줄 주소의 화자 표시("narrator(나레이션): ")를 그대로 붙여 오는 일이 있어 뗀다
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

	async function runStory(id: string) {
		const sdir = join(process.cwd(), storyDir, id);
		const story = JSON.parse(await readFile(join(sdir, 'story.json'), 'utf-8')) as NetshortStory;
		const seeds = JSON.parse(await readFile(join(sdir, 'seeds.json'), 'utf-8').catch(() => '{}')) as { theme?: string; tone?: string };
		const theme = seeds.theme ?? 'modern';
		const pool = (npc_by_theme[theme as keyof typeof npc_by_theme] ?? []) as readonly NpcSrc[];
		const npcKeys = [...new Set(story.episodes.map((e) => e.npc.name))];
		const roleOf = Object.fromEntries(story.episodes.map((e) => [e.npc.name, e.npc.role]));
		const npcNames: Record<string, string> = {};
		for (const k of npcKeys) npcNames[k] = pool.find((n) => n.key === k)?.name.korean ?? k;
		const names: Record<string, string> = {
			narrator: '나레이션',
			character_any: '파티(아무나)',
			boss: `최종보스(${story.design.boss_name ?? ''})`,
			...npcNames
		};
		const dir = join(outDir, id);
		await mkdir(join(process.cwd(), dir), { recursive: true });
		const pad = (o: number) => String(o).padStart(2, '0');

		const results = await Promise.all(
			orders.map(async (order) => {
				const ep = story.episodes.find((e) => e.order === order);
				if (!ep) return { order, error: `${order}화가 story.json 에 없습니다` };
				try {
					const check = (o: Gen) => checkScenario(o, order, story, npcKeys, Object.values(npcNames));
					const speakers = [...SYSTEM_SPEAKERS, ...npcKeys];
					const doPolish = async (o: Gen) => {
						const r = await polish(o, check, listChapter(order, o, names, ep.place ?? '', ep.boss ?? ''), speakers);
						await writeFile(join(process.cwd(), dir, `polish_${pad(order)}.json`), JSON.stringify(r.log, null, 2), 'utf-8');
						return r;
					};
					if (polishOnly) {
						const file = join(dir, `scenario_${pad(order)}.json`);
						const saved = JSON.parse(await readFile(join(process.cwd(), file), 'utf-8')) as Gen;
						const { out: polished, log } = await doPolish(saved);
						await writeFile(join(process.cwd(), file), JSON.stringify(polished, null, 2), 'utf-8');
						await writeFile(join(process.cwd(), dir, `script_${pad(order)}.md`), toScript(order, ep, polished, names), 'utf-8');
						return { order, file, errors: check(polished), polished: log.applied.length, reverted: !!log.reverted };
					}
					const prompt = buildScenarioNetshortPrompt(story, order, npcNames, seeds.tone);
					let out = await gemini(prompt, order);
					let errors = checkScenario(out, order, story, npcKeys, Object.values(npcNames));
					for (let retry = 0; retry < 2 && errors.length; retry++) {
						out = await gemini(
							`${prompt}\n\n---\n\n## 이전 출력의 오류 — 오류 난 곳만 고치고 나머지는 그대로 다시 출력할 것\n${errors.map((e) => `- ${e}`).join('\n')}\n\n## 이전 출력\n\`\`\`json\n${JSON.stringify(out, null, 2)}\n\`\`\``,
							order
						);
						errors = checkScenario(out, order, story, npcKeys, Object.values(npcNames));
					}

					addCompanionEnters(out, companionOf(story, order));
					let polishLog: Awaited<ReturnType<typeof polish>>['log'] | null = null;
					if (polishOn) {
						try {
							const r = await doPolish(out);
							out = r.out;
							polishLog = r.log;
							errors = check(out);
						} catch {
							/* 다듬기 실패는 생성 결과에 영향 없음 */
						}
					}

					// 대사에 나온 NPC → actors (직업은 role)
					const used = new Set<string>([ep.npc.name]);
					for (const room of (out.rooms ?? []) as Gen[])
						for (const [, es] of blocksOf(room)) for (const e of es) if (npcKeys.includes(String(e.speaker))) used.add(String(e.speaker));
					const actors: Record<string, unknown> = {};
					for (const k of used) {
						const n = pool.find((p) => p.key === k);
						if (!n) continue;
						actors[k] = {
							id: n.id,
							name: { ...n.name },
							description: n.description ?? '',
							face_image_url: n.face_image_url,
							battle_sprite_url: n.battle_sprite_url ?? n.base_image_url,
							role: { korean: roleOf[k] }
						};
					}
					const isFinale = order === 5;
					const base = {
						scenario_id: `${id}_${pad(order)}`,
						order,
						act: order === 1 ? 'intro' : isFinale ? 'climax_finale' : 'rising',
						theme,
						actors,
						boss: isFinale
							? { pool_id: null, name: { korean: story.design.boss_name ?? '' }, appearance: story.design.boss_look ?? '' }
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

		const parts = [`# ${story.title} (${id})`, '', `장치: ${story.design.device ?? ''} · 최종보스: ${story.design.boss_name ?? ''}`, ''];
		for (const o of [1, 2, 3, 4, 5]) {
			try {
				parts.push(await readFile(join(process.cwd(), dir, `script_${pad(o)}.md`), 'utf-8'));
			} catch {
				if (orders.includes(o)) parts.push(`## ${o}화 — (생성 실패)`, '');
			}
		}
		await writeFile(join(process.cwd(), dir, 'script.md'), parts.join('\n'), 'utf-8');
		return { id, dir, results: results.sort((a, b) => a.order - b.order) };
	}

	const arcs = [];
	const failed: { id: string; error: string }[] = [];
	for (const id of ids) {
		try {
			arcs.push(await runStory(id));
		} catch (e) {
			failed.push({ id, error: e instanceof Error ? e.message : String(e) });
		}
	}
	return json({ outDir, arcs, failed });
};
