import { json } from '@sveltejs/kit';
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import { npc_by_theme } from '$lib/data/sample/npc_pool';
import { buildScenarioCozyPrompt, buildScenarioTool } from '$lib/prompts/chapterGenCozy';
import type { CozyPremise, CozyStory } from '$lib/prompts/cozyStory';
import { applyEdits, listChapter } from '$lib/prompts/scenarioReview';
import { buildPolishPrompt, polishTool, type PolishFix } from '$lib/prompts/netshortPolish';
import { bossCallText, getStyle, type StoryStyle } from '$lib/prompts/storyStyle';
import type { RequestHandler } from './$types';

/**
 * cozy_test/<key>/story.json → 게임 시나리오 5화 (시험용). 생성만 하고 번역·output 저장은 하지 않는다.
 * 넷쇼트 대본 단계(/api/scenario/netshort)와 같은 흐름: 5화 동시 생성 → 코드 검사(최대 2번 다시) → 다듬기 1콜.
 *
 * body:
 *  - keys: string[]         cozy_test/<key>/story.json
 *  - orders?: number[]      기본 1~5
 *  - dir?: string           기본 src/lib/data/storyarc/styles/cozy_test (story.json 옆에 scenario_0N.json, script_0N.md, script.md)
 *  - polish?: boolean       기본 true (netshortPolish.ts). 고친 뒤 코드 검사 오류가 새로 생기면 되돌림. 기록 polish_0N.json
 *  - style?: string         스타일 파일 key (styles/<key>.md). 기본: cast.json 의 style (이야기 단계에서 쓴 것), 없으면 cozy
 */

const DIR = 'src/lib/data/storyarc/styles/cozy_test';
const ROOM_IDS = [1, 3, 5, 9, 15];
const SYSTEM_SPEAKERS = ['narrator', 'random_boss', 'boss', 'character_any', 'character_1', 'character_2', 'character_3', 'character_4'];
const PLACEHOLDER_IN_TEXT = /character_(any|[1-4])/;
const FIRST_PERSON = /(^|[\s'"“‘(])(나는|내가|나를|나의|나에게|내 |우리는|우리가|우리를|우리의)/;
const PARTY_PROPOSAL = /(게|건|는 것은|는 거) 어때(요)?\s*[?？]|할래(요)?\s*[?？]/;

type Gen = Record<string, unknown>;
type Entry = { type?: string; speaker?: string; action?: string; content?: { korean?: string } };
type NpcSrc = { key: string; id?: string; name: { korean: string }; description?: string; face_image_url?: string; battle_sprite_url?: string; base_image_url?: string };

const blocksOf = (room: Gen): [string, Entry[]][] =>
	(['dialogue', 'win_dialogue', 'lose_dialogue'] as const).filter((k) => Array.isArray(room[k])).map((k) => [k, room[k] as Entry[]]);

function normalize(out: Gen): Gen {
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
	return out;
}

function checkScenario(out: Gen, order: number, story: CozyStory, npcKey: string, npcName: string, calls: string): string[] {
	const errors: string[] = [];
	const rooms = (Array.isArray(out.rooms) ? out.rooms : []) as Gen[];
	const ids = rooms.map((r) => Number(r.id));
	if (ids.join(',') !== ROOM_IDS.join(',')) errors.push(`rooms 의 id 는 1,3,5,9,15 차례여야 합니다. (지금: ${ids.join(',')})`);
	const finalName = (story.design.final?.name ?? '').replace(/\s+/g, '');

	for (const room of rooms) {
		const rid = Number(room.id);
		if (rid === 15 && !['dialogue', 'win_dialogue', 'lose_dialogue'].every((k) => Array.isArray(room[k]) && (room[k] as unknown[]).length))
			errors.push('방 15 에는 dialogue·win_dialogue·lose_dialogue 가 모두 있어야 합니다.');
		for (const [block, entries] of blocksOf(room)) {
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
				if (finalName && order <= 4 && text.replace(/\s+/g, '').includes(finalName))
					errors.push(`${at}: 1~4화에는 5화 인물 "${story.design.final.name}" 을 쓰지 않습니다: "${text}"`);
				if (/[一-鿿]/.test(text)) errors.push(`${at}: 한자를 쓰지 않습니다: "${text}"`);
				if (/보스/.test(text)) errors.push(`${at}: 대사·지문에 게임 용어 "보스" 를 쓰지 않습니다. 호칭으로 부를 것: "${text}"`);
				if (text.includes('{random_boss}')) errors.push(`${at}: {random_boss} 는 쓰지 않습니다. 호칭(${calls})으로 부를 것: "${text}"`);
				if (e.type !== 'speech') return;
				if (!SYSTEM_SPEAKERS.includes(sp) && sp !== npcKey) errors.push(`${at}: speaker "${sp}" 는 쓸 수 없습니다 (NPC 는 ${npcKey} 뿐)`);
				if (sp === npcKey && !entered.has(sp)) errors.push(`${at}: NPC ${sp} 가 enter 없이 말합니다. 그 방(블록)에서 enter 를 먼저 쓸 것`);
				if (PLACEHOLDER_IN_TEXT.test(text)) errors.push(`${at}: 대사 안에 placeholder 글자가 있습니다: "${text}"`);
				if (sp === 'character_any' && PARTY_PROPOSAL.test(text) && !text.includes(npcName))
					errors.push(`${at}: 파티 대사가 다른 파티원에게 제안합니다. 결정은 한 줄로 말할 것: "${text}"`);
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
				if ((sp === 'random_boss' || sp === 'boss') && rid !== 15)
					errors.push(`${at}: speaker '${sp}' 는 방 15 에서만. 그 전에는 narrator 지문 속 따옴표로`);
				if (order <= 4 && sp === 'boss') errors.push(`${at}: 1~4화에는 speaker 'boss' 를 쓰지 않습니다 (상대는 random_boss)`);
				if (order === 5 && sp === 'random_boss') errors.push(`${at}: 5화에는 random_boss 가 나오지 않습니다 (상대는 boss)`);
			});
		}
	}
	for (const key of ['prologue', 'epilogue'] as const)
		for (const l of (((out[key] as Gen | undefined)?.korean ?? []) as string[]).filter((x) => FIRST_PERSON.test(x)))
			errors.push(`${key} 가 1인칭입니다. 3인칭으로 쓸 것: "${l}"`);
	if (finalName && order <= 4)
		for (const l of ((out.prologue as Gen | undefined)?.korean ?? []) as string[])
			if (l.replace(/\s+/g, '').includes(finalName)) errors.push(`prologue 에 5화 인물 "${story.design.final.name}" 이 있습니다: "${l}"`);
	const firstEntry = ((rooms.find((r) => Number(r.id) === 1)?.dialogue as Entry[] | undefined) ?? [])[0];
	if (!firstEntry || firstEntry.type !== 'speech' || firstEntry.speaker !== 'narrator') errors.push('방 1 의 첫 줄은 narrator 의 상황 한 줄이어야 합니다.');
	// 방 15: 상대가 전투 전에 말하고, win 에서 사정을 말한다
	const r15 = rooms.find((r) => Number(r.id) === 15);
	const foe = order === 5 ? 'boss' : 'random_boss';
	if (r15) {
		if (!((r15.dialogue as Entry[] | undefined) ?? []).some((e) => e.speaker === foe)) errors.push(`방 15 dialogue(전투 전)에서 상대(speaker '${foe}')가 말하지 않습니다.`);
		if (!((r15.win_dialogue as Entry[] | undefined) ?? []).some((e) => e.speaker === foe)) errors.push(`방 15 win_dialogue 에서 상대(speaker '${foe}')가 자기 사정을 말하지 않습니다.`);
	}
	if (order === 5 && !Array.isArray((out.epilogue as Gen | undefined)?.korean)) errors.push('5화에는 epilogue 가 필요합니다.');
	return errors;
}

function toScript(order: number, ep: CozyStory['episodes'][number], out: Gen, names: Record<string, string>): string {
	const who = (sp: string) => (sp === 'random_boss' ? `상대(${ep.boss})` : (names[sp] ?? sp));
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
	const dirRoot: string = body.dir ?? DIR;
	const seeds = JSON.parse(await readFile(join(process.cwd(), DIR, 'premises.json'), 'utf-8')) as { theme: string; premises: CozyPremise[] };
	const keys: string[] = Array.isArray(body.keys) && body.keys.length ? body.keys.map(String) : seeds.premises.map((p) => p.key);
	const orders: number[] = Array.isArray(body.orders) ? body.orders.map(Number) : [1, 2, 3, 4, 5];
	const polishOn = body.polish !== false;
	const theme = seeds.theme ?? 'modern';
	const pool = (npc_by_theme[theme as keyof typeof npc_by_theme] ?? []) as readonly NpcSrc[];

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

	/** 다듬기: 걸리는 줄만 고침. 인용이 그 줄과 다르면 건너뜀, 코드 검사 오류가 새로 생기면 통째로 되돌림 (넷쇼트와 같음) */
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
		const dir = join(dirRoot, key);
		const story = JSON.parse(await readFile(join(process.cwd(), dir, 'story.json'), 'utf-8')) as CozyStory;
		const premise = seeds.premises.find((p) => p.key === key);
		const npcKey = story.episodes[0]?.npc.name ?? '';
		const npc = pool.find((n) => n.key === npcKey);
		const npcName = npc?.name.korean ?? npcKey;
		const names: Record<string, string> = { narrator: '나레이션', character_any: '파티(아무나)', boss: story.design.final?.name ?? '', [npcKey]: npcName };
		const speakers = [...SYSTEM_SPEAKERS, npcKey];
		const pad = (o: number) => String(o).padStart(2, '0');
		// 스타일·톤은 이야기 단계가 cast.json 에 저장한 것 (--style 이 있으면 그것)
		const cast = JSON.parse(await readFile(join(process.cwd(), dir, 'cast.json'), 'utf-8').catch(() => '{}')) as { style?: string; tone?: string };
		const style: StoryStyle = getStyle(body.style ?? cast.style ?? 'cozy');
		const calls = bossCallText(style);

		const results = await Promise.all(
			orders.map(async (order) => {
				const ep = story.episodes.find((e) => e.order === order);
				if (!ep) return { order, error: `${order}화가 story.json 에 없습니다` };
				try {
					const check = (o: Gen) => checkScenario(o, order, story, npcKey, npcName, calls);
					const prompt = buildScenarioCozyPrompt(story, premise, order, npcName, style, cast.tone);
					const tool = buildScenarioTool(order);
					let out = normalize(await geminiTool(prompt, tool));
					let errors = check(out);
					for (let retry = 0; retry < 2 && errors.length; retry++) {
						out = normalize(
							await geminiTool(
								`${prompt}\n\n---\n\n## 이전 출력의 오류 — 오류 난 곳만 고치고 나머지는 그대로 다시 출력할 것\n${errors.map((e) => `- ${e}`).join('\n')}\n\n## 이전 출력\n\`\`\`json\n${JSON.stringify(out, null, 2)}\n\`\`\``,
								tool
							)
						);
						errors = check(out);
					}
					let polishLog: Awaited<ReturnType<typeof polish>>['log'] | null = null;
					if (polishOn) {
						try {
							const r = await polish(out, check, listChapter(order, out, names, ep.place ?? '', ep.boss ?? ''), speakers);
							out = r.out;
							polishLog = r.log;
							errors = check(out);
							await writeFile(join(process.cwd(), dir, `polish_${pad(order)}.json`), JSON.stringify(r.log, null, 2), 'utf-8');
						} catch {
							/* 다듬기 실패는 생성 결과에 영향 없음 */
						}
					}
					const actors: Record<string, unknown> = npc
						? {
								[npcKey]: {
									id: npc.id,
									name: { ...npc.name },
									description: npc.description ?? '',
									face_image_url: npc.face_image_url,
									battle_sprite_url: npc.battle_sprite_url ?? npc.base_image_url,
									role: { korean: ep.npc.role }
								}
							}
						: {};
					const isFinale = order === 5;
					const base = {
						scenario_id: `cozy_${key}_${pad(order)}`,
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

		const parts = [`# ${story.title} (${key})`, '', `함께 다니는 NPC: ${npcName} · 5화 상대: ${story.design.final?.name ?? ''}`, ''];
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
	// 이야기는 차례로 (화 5개는 동시에)
	for (const k of keys) {
		try {
			arcs.push(await runStory(k));
		} catch (e) {
			failed.push({ id: k, error: e instanceof Error ? e.message : String(e) });
		}
	}
	return json({ arcs, failed });
};
