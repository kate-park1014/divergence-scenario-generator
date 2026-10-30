import { json } from '@sveltejs/kit';
import { mkdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import { npc_by_theme } from '$lib/data/sample/npc_pool';
import {
	buildScenarioNetshortPrompt,
	buildScenarioTool,
	type NetshortStory
} from '$lib/prompts/chapterGenNetshort';
import type { RequestHandler } from './$types';

/**
 * 넷쇼트 story.json → 게임 시나리오 5화 (시험용). 생성만 하고 번역·output 저장은 하지 않는다.
 *
 * body:
 *  - ids: string[]          netshort_test/<id>/story.json
 *  - orders?: number[]      기본 1~5
 *  - storyDir?: string      기본 src/lib/data/storyarc/netshort_test
 *  - outDir?: string        기본 src/lib/data/storyarc/netshort_test (story.json 옆) → <outDir>/<id>/scenario_0N.json, script.md
 */

const DEFAULT_STORY_DIR = 'src/lib/data/storyarc/netshort_test';
const DEFAULT_OUT_DIR = DEFAULT_STORY_DIR;
const ROOM_IDS = [1, 3, 5, 9, 15];
const SYSTEM_SPEAKERS = ['narrator', 'random_boss', 'boss', 'character_any', 'character_1', 'character_2', 'character_3', 'character_4'];
const PLACEHOLDER_IN_TEXT = /character_(any|[1-4])/;
const FIRST_PERSON = /(^|[\s'"“‘(])(나는|내가|나를|나의|나에게|내 |우리는|우리가|우리를|우리의)/;
const PARTY_PROPOSAL = /(게|건|는 것은|는 거) 어때(요)?\s*[?？]|할래(요)?\s*[?？]/;

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
			for (const e of entries) if (e.type === 'direction' && !e.action && e.content?.korean) e.type = 'speech';
			room[block] = entries.filter((e) => !(e.type === 'direction' && e.action === 'focus'));
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
	const identityWord = (story.design.true_identity ?? '').replace(/[.。]$/, '').trim().split(/\s+/).pop() ?? '';

	for (const room of rooms) {
		const rid = Number(room.id);
		if (rid === 15 && !['dialogue', 'win_dialogue', 'lose_dialogue'].every((k) => Array.isArray(room[k]) && (room[k] as unknown[]).length))
			errors.push('방 15 에는 dialogue·win_dialogue·lose_dialogue 가 모두 있어야 합니다.');
		for (const [block, entries] of blocksOf(room)) {
			const entered = new Set<string>();
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
				if (e.type !== 'speech') return;
				if (!SYSTEM_SPEAKERS.includes(sp) && !npcKeys.includes(sp))
					errors.push(`${at}: speaker "${sp}" 는 쓸 수 없습니다 (NPC 는 ${npcKeys.join(', ')})`);
				if (npcKeys.includes(sp) && !entered.has(sp))
					errors.push(`${at}: NPC ${sp} 가 enter 없이 말합니다. 그 방(블록)에서 enter 를 먼저 쓸 것`);
				if (PLACEHOLDER_IN_TEXT.test(text)) errors.push(`${at}: 대사 안에 placeholder 글자가 있습니다: "${text}"`);
				if (sp === 'character_any' && PARTY_PROPOSAL.test(text) && !npcNames.some((n) => n && text.includes(n)))
					errors.push(`${at}: 파티 대사가 다른 파티원에게 제안합니다. 결정은 한 줄로 말할 것: "${text}"`);
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
	if (order === 5) {
		const r15 = rooms.find((r) => Number(r.id) === 15);
		if (!r15 || !blocksOf(r15).some(([, es]) => es.some((e) => e.speaker === 'boss')))
			errors.push("5화 방 15 에서 최종보스(speaker 'boss')가 말하지 않습니다.");
		if (!Array.isArray((out.epilogue as Gen | undefined)?.korean)) errors.push('5화에는 epilogue 가 필요합니다.');
	}
	return errors;
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

	// Gemini 과부하(503·429)는 잠시 뒤 다시 (최대 5번)
	async function gemini(message: string, order: number): Promise<Gen> {
		for (let t = 0; ; t++) {
			try {
				return await geminiOnce(message, order);
			} catch (e) {
				const msg = e instanceof Error ? e.message : String(e);
				if (t >= 4 || !/503|429|UNAVAILABLE|RESOURCE_EXHAUSTED|overloaded|high demand/i.test(msg)) throw e;
				await new Promise((r) => setTimeout(r, 10000 * (t + 1)));
			}
		}
	}

	async function geminiOnce(message: string, order: number): Promise<Gen> {
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
		return normalize(data.tool_result as Gen);
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
					return { order, file, errors };
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
