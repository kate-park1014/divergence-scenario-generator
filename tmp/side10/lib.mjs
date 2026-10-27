// tmp/side10 공용: 인자, storyarc 읽기, Gemini 호출, 저장, 방 배치
import fs from 'node:fs';
import path from 'node:path';

export const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../..');

// 방 10개: 스토리 1·3·5·7·10 / 카드 2·4·6·8 / 방 9 휴식
export const STORY_ROOMS = [1, 3, 5, 7, 10];
export const SLOTS = [
	{ room: 2, after: 1, before: 3 },
	{ room: 4, after: 3, before: 5 },
	{ room: 6, after: 5, before: 7 },
	{ room: 8, after: 7, before: 10 }
];
export const BOSS_ROOM = 10;
export const MAX_LEN = 60;
// 어렵고 흐린 말
export const VAGUE = ['잔상', '파편', '속삭', '메아리', '그림자', '심연', '운명', '기운', '무언가', '알 수 없는', '광기'];

export function args() {
	const out = {};
	for (const a of process.argv.slice(2)) {
		const m = a.match(/^--([^=]+)(?:=(.*))?$/);
		if (m) out[m[1]] = m[2] ?? true;
	}
	return out;
}

const ARGV = args();
export const ID = ARGV.id ?? 'modern_whisperweb_0';
export const ARC_DIR = ARGV['arc-dir'] ?? 'src/lib/data/storyarc/side_test';
export const OUT = path.join(ROOT, ARGV.out ?? 'tmp/side10/out', ID);
export const ORDERS = String(ARGV.order ?? '1,2,3,4,5').split(',').map(Number);
export const BASE = ARGV.base ?? 'http://localhost:5178';

/** storyarc .ts 에서 객체 부분만 잘라 JSON 으로 읽음 */
export function loadArc(id = ID) {
	const src = fs.readFileSync(path.join(ROOT, ARC_DIR, `storyarc_${id}.ts`), 'utf8');
	return JSON.parse(src.slice(src.indexOf('= {') + 2, src.lastIndexOf('};') + 1));
}

/** NPC key → 한국어 이름 (테마 NPC 풀) */
export async function npcNames(theme) {
	try {
		const m = await import(`../../src/lib/data/sample/npc/${theme}_npc_pool.ts`);
		return Object.fromEntries((m[`${theme}_npc_pool`] ?? []).map((n) => [n.key, n.name?.korean ?? n.key]));
	} catch {
		return {};
	}
}

export const epDir = (order) => {
	const d = path.join(OUT, String(order).padStart(2, '0'));
	fs.mkdirSync(d, { recursive: true });
	return d;
};

export function save(dir, name, data) {
	fs.mkdirSync(dir, { recursive: true });
	const f = path.join(dir, name);
	fs.writeFileSync(f, typeof data === 'string' ? data : JSON.stringify(data, null, '\t') + '\n');
	return f;
}

export const readJson = (f) => (fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, 'utf8')) : null);

/** /api/gemini 를 tool 강제 호출로. 서버 쪽 일시 오류(503·429)는 기다렸다 다시 */
export async function gemini(message, tool, { temperature = 0.8 } = {}) {
	for (let busy = 0; ; busy++) {
		try {
			const res = await fetch(`${BASE}/api/gemini`, {
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
			if (data.error || !data.tool_result) throw new Error(JSON.stringify(data).slice(0, 400));
			return data.tool_result;
		} catch (e) {
			if (busy < 3 && /503|429|500|UNAVAILABLE|RESOURCE_EXHAUSTED|timed out|fetch failed/i.test(String(e))) {
				await new Promise((r) => setTimeout(r, 5000 * (busy + 1)));
				continue;
			}
			throw e;
		}
	}
}

/** 요청 → 검사 → 오류가 있으면 오류와 지난 출력을 붙여 다시 (최대 3번). { out, errors } */
export async function generate(prompt, tool, check, { tries = 3, temperature = 0.8, label = '' } = {}) {
	let out = null;
	let errors = [];
	for (let i = 0; i < tries; i++) {
		const msg = errors.length
			? `${prompt}\n\n## 지난 출력의 오류 (이것만 고치고 나머지는 그대로)\n${errors.map((x) => `- ${x}`).join('\n')}\n\n지난 출력:\n${JSON.stringify(out)}`
			: prompt;
		out = await gemini(msg, tool, { temperature });
		errors = check(out);
		console.log(`${label} 시도 ${i + 1}: 오류 ${errors.length}개`);
		errors.slice(0, 8).forEach((x) => console.log('  - ' + x));
		if (!errors.length) break;
	}
	return { out, errors };
}

export const S = { type: 'string' };

/** "깨뜨린다" → "깨뜨" 처럼 행동 동사의 앞부분 (메모에 그 행동이 있는지 볼 때) */
export function verbStem(action) {
	let v = (action ?? '').replace(/[.\s]+$/, '').split(' ').pop().replace(/(한다|는다|다)$/, '');
	const last = v.charCodeAt(v.length - 1) - 0xac00;
	if (v.length > 1 && last >= 0 && last % 28 === 4) v = v.slice(0, -1);
	return v;
}
