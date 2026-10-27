// tmp/room10 공용: 인자 읽기, storyarc 읽기, Gemini 호출, 저장
import fs from 'node:fs';
import path from 'node:path';

export const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../..');
export const STORY_ROOMS = [1, 3, 5, 7, 10];
export const CARD_ROOMS = [2, 4, 6, 8];

export function args() {
	const out = {};
	for (const a of process.argv.slice(2)) {
		const m = a.match(/^--([^=]+)(?:=(.*))?$/);
		if (m) out[m[1]] = m[2] ?? true;
	}
	return out;
}

// --arc-dir=DIR: 읽을 storyarc 폴더 (기본 rewrite_test) / --out=DIR: 저장 폴더 (기본 tmp/room10/out)
const ARGV = args();
export const ARC_DIR = ARGV['arc-dir'] ?? 'src/lib/data/storyarc/rewrite_test';
export const OUT_ROOT = ARGV.out ?? 'tmp/room10/out';

/** storyarc .ts 에서 객체 부분만 잘라 JSON 으로 읽음 */
export function loadArc(id) {
	const file = path.join(ROOT, ARC_DIR, `storyarc_${id}.ts`);
	const src = fs.readFileSync(file, 'utf8');
	const start = src.indexOf('= {') + 2;
	const end = src.lastIndexOf('};') + 1;
	return JSON.parse(src.slice(start, end));
}

/** 그 화에 필요한 값만 모음 */
export function episode(arc, order) {
	const spine = arc.story_spine.find((s) => s.order === order) ?? {};
	const out = arc.scenarioOutline.find((s) => s.order === order) ?? {};
	const npc = arc.npc_roles?.[out.npc] ?? {};
	const prev = order > 1 ? arc.scenarioOutline.find((s) => s.order === order - 1) : null;
	return {
		order,
		stage: arc.stage,
		setting: arc.world?.setting,
		rule: arc.world?.rule,
		key_object: arc.key_object,
		wrong_action: arc.wrong_action,
		right_action: arc.right_action,
		boss_name: arc.boss_name_korean,
		genre: arc.genre,
		title: out.title,
		place: out.place,
		summary: out.summary,
		boss_trace: out.boss_trace,
		random_boss_title: out.random_boss_title,
		random_boss_side: out.random_boss_side,
		deceive_mode: out.deceive_mode,
		npc_key: out.npc,
		npc_title: npc.title,
		protagonist_action: spine.protagonist_action,
		lesson: spine.lesson,
		prev_summary: prev?.summary ?? ''
	};
}

export function outDir(id, order) {
	const dir = path.join(ROOT, OUT_ROOT, id, String(order).padStart(2, '0'));
	fs.mkdirSync(dir, { recursive: true });
	return dir;
}

export function save(dir, name, data) {
	const file = path.join(dir, name);
	fs.writeFileSync(file, typeof data === 'string' ? data : JSON.stringify(data, null, 2));
	return file;
}

export async function gemini(message, tool, { base = 'http://localhost:5178', temperature = 0.8 } = {}) {
	const res = await fetch(`${base}/api/gemini`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			message,
			temperature,
			tools: [{ type: 'function', function: tool }],
			tool_choice: { type: 'function', function: { name: tool.name } }
		})
	});
	const data = await res.json();
	if (data.error || !data.tool_result) throw new Error(JSON.stringify(data).slice(0, 500));
	return data.tool_result;
}
