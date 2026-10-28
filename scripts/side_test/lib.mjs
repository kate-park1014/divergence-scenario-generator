// side_test 공용: 인자, storyarc 읽기, Gemini 호출(직접, dev 서버 필요 없음), 저장, 방 배치
// 실행: node --no-warnings --import ./scripts/side_test/ts-register.mjs scripts/side_test/<단계>.mjs
import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';

export const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../..');

// 방 10개: 스토리 1·3·5·7·10 / 카드 2·4·6·8 (칸 A~D) / 방 9 휴식
export const STORY_ROOMS = [1, 3, 5, 7, 10];
export const SLOTS = [
	{ key: 'A', room: 2, after: 1, before: 3 },
	{ key: 'B', room: 4, after: 3, before: 5 },
	{ key: 'C', room: 6, after: 5, before: 7 },
	{ key: 'D', room: 8, after: 7, before: 10 }
];
export const MAX_LEN = 60;

function args() {
	const out = {};
	for (const a of process.argv.slice(2)) {
		const m = a.match(/^--([^=]+)(?:=(.*))?$/);
		if (m) out[m[1]] = m[2] ?? true;
	}
	return out;
}

export const ARGV = args();
export const ID = ARGV.id ?? 'modern_evannext_1';
export const ORDER = Number(ARGV.order ?? 1);
export const BASE = ARGV.base ?? 'http://localhost:5178';
export const OUT = path.join(ROOT, 'output_list/side_test', ID, String(ORDER).padStart(2, '0'));

export async function loadArc(id = ID) {
	const m = await import(path.join(ROOT, 'src/lib/data/storyarc/side_test', `storyarc_${id}.ts`));
	return m[`storyarc_${id}`];
}

/** NPC key → 한국어 이름 (테마 NPC 풀) */
export async function npcNames(theme) {
	const m = await import(path.join(ROOT, 'src/lib/data/sample/npc_pool.ts'));
	return Object.fromEntries((m.npc_by_theme?.[theme] ?? []).map((n) => [n.key, n.name?.korean ?? n.key]));
}

export function save(name, data) {
	const f = path.join(OUT, name);
	fs.mkdirSync(path.dirname(f), { recursive: true });
	fs.writeFileSync(f, typeof data === 'string' ? data : JSON.stringify(data, null, '\t') + '\n');
	return f;
}

export function readJson(name) {
	const f = path.join(OUT, name);
	if (!fs.existsSync(f)) throw new Error(`${f} 없음 — 앞 단계를 먼저 실행`);
	return JSON.parse(fs.readFileSync(f, 'utf8'));
}

// Gemini 를 직접 부름 (dev 서버 /api/gemini 와 같은 요청·응답). dev 서버를 거치면 Node fetch 가 응답을 5분까지만 기다려서
// pro 로 카드 6장을 다시 쓰는 요청이 끊김 → node:https 로 8분까지 기다림 (그보다 길면 멈춘 것으로 보고 다시 요청)
// 모델 이름이 deepseek 로 시작하면 DeepSeek (OpenAI 호환, src/routes/api/deepseek 와 같은 설정), 아니면 Gemini
const envKey = (name) => process.env[name] ?? fs.readFileSync(path.join(ROOT, '.env'), 'utf8').match(new RegExp(`^${name}=(.*)$`, 'm'))?.[1]?.trim().replace(/^["']|["']$/g, '');
const PROVIDER = {
	gemini: { url: 'https://generativelanguage.googleapis.com/v1beta/openai/chat/completions', key: 'GEMINI_API_KEY' },
	deepseek: { url: 'https://api.deepseek.com/chat/completions', key: 'DEEPSEEK_API_KEY', alt: 'DEEP_SEEK_KEY' }
};
const providerOf = (model) => (/^deepseek/.test(model ?? '') ? 'deepseek' : 'gemini');
function post(body) {
	const pv = PROVIDER[providerOf(body.model)];
	const KEY = envKey(pv.key) || (pv.alt && envKey(pv.alt));
	if (!KEY) throw new Error(`${pv.key}${pv.alt ? ` (또는 ${pv.alt})` : ''} 가 .env 에 없음`);
	const data = Buffer.from(JSON.stringify(body));
	return new Promise((resolve, reject) => {
		const req = https.request(pv.url, { method: 'POST', headers: { 'Content-Type': 'application/json', 'Content-Length': data.length, Authorization: `Bearer ${KEY}` } }, (res) => {
			let d = '';
			res.on('data', (c) => (d += c));
			res.on('end', () => resolve({ status: res.statusCode, text: d }));
		});
		req.on('error', reject);
		req.setTimeout(8 * 60 * 1000, () => req.destroy(new Error('timed out')));
		req.end(data);
	});
}

/** tool 강제 호출. 일시 오류(503·429 등)는 기다렸다 다시 */
export async function gemini(message, tool, temperature, model = ARGV.model) {
	for (let busy = 0; ; busy++) {
		try {
			const m = model ?? 'gemini-2.5-flash';
			const body = {
				model: m,
				messages: [{ role: 'user', content: message }],
				...(temperature !== undefined && { temperature }),
				tools: [{ type: 'function', function: tool }],
				tool_choice: { type: 'function', function: { name: tool.name } },
				// DeepSeek: 기본 출력 상한이면 카드 JSON 이 잘림 / 함수 지정 tool_choice 는 thinking 모드에서 거부됨
				...(providerOf(m) === 'deepseek' && { max_tokens: Number(ARGV['max-tokens'] ?? 16384), thinking: { type: 'disabled' } })
			};
			const { status, text } = await post(body);
			if (status !== 200) throw new Error(`${status} ${text.slice(0, 400)}`);
			const args = JSON.parse(text).choices?.[0]?.message?.tool_calls?.[0]?.function?.arguments;
			if (!args) throw new Error(`tool 결과 없음: ${text.slice(0, 400)}`);
			try {
				return typeof args === 'string' ? JSON.parse(args) : args;
			} catch (e) {
				// DeepSeek: tool 인자 JSON 이 가끔 한 군데 깨짐 → 다시 요청 / 잘렸으면 finish_reason length
				throw new Error(`tool 인자 JSON 파싱 실패 (finish_reason ${JSON.parse(text).choices?.[0]?.finish_reason}): ${e.message} — retry`);
			}
		} catch (e) {
			// 서버 혼잡(503)은 몇 분씩 이어짐 → 최대 8번, 15초부터 늘려 60초까지 기다림 (모두 합쳐 약 6분)
			if (busy < 8 && /503|429|500|502|UNAVAILABLE|RESOURCE_EXHAUSTED|Internal|timed out|ECONNRESET|socket hang up|— retry/i.test(String(e))) {
				const wait = Math.min(60, 15 * (busy + 1));
				console.log(`  일시 오류, ${wait}초 뒤 다시 (${busy + 1}/8): ${String(e).slice(0, 80)}`);
				await new Promise((r) => setTimeout(r, wait * 1000));
				continue;
			}
			throw e;
		}
	}
}

/** 요청 → 형식 검사 → 깨졌으면 오류를 붙여 1번만 다시 (1차는 빠르게). { out, errors } */
export async function generate(prompt, tool, check, { label = '', temperature = 0.8, model = ARGV.model, tries = 2 } = {}) {
	let out = null;
	let errors = [];
	for (let i = 0; i < tries; i++) {
		const msg = errors.length
			? `${prompt}\n\n## 지난 출력의 형식 오류 (이것만 고치고 나머지는 그대로)\n${errors.map((x) => `- ${x}`).join('\n')}\n\n지난 출력:\n${JSON.stringify(out)}`
			: prompt;
		out = await gemini(msg, tool, temperature, model);
		errors = check(out);
		console.log(`${label} 시도 ${i + 1}: 형식 오류 ${errors.length}개`);
		errors.slice(0, 8).forEach((x) => console.log('  - ' + x));
		if (!errors.length) break;
	}
	return { out, errors };
}

export const S = { type: 'string' };
