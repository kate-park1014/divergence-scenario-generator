// 갱스터 카드 공용: 인자, NPC 이름, 모델 호출(직접, dev 서버 필요 없음), 카드 문체 규칙
// side_test/lib.mjs 와 cardGen.ts·cardGenSeq.ts 에서 갱스터 카드가 쓰는 것만 옮겨 옴 (원본은 _legacy/)
// 실행: node --no-warnings --experimental-strip-types --import ./scripts/gangster/ts-register.mjs scripts/gangster/cards.mjs
import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';

export const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../..');

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

/** NPC key → 한국어 이름 (테마 NPC 풀) */
export async function npcNames(theme) {
	const m = await import(path.join(ROOT, 'src/lib/data/sample/npc_pool.ts'));
	return Object.fromEntries((m.npc_by_theme?.[theme] ?? []).map((n) => [n.key, n.name?.korean ?? n.key]));
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
			res.setEncoding('utf8'); // 조각 경계에서 한글이 깨지지 않게 (Buffer 를 문자열로 바로 이으면 3바이트 글자가 잘림)
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

export const S = { type: 'string' };

// ── 카드 문체 (cardGen.ts STYLE, cardGenSeq.ts BELITTLE·META) ──

export const STYLE = `# 문체
- 사람·장소·물건·사건은 이 스토리 원문에서 출발. 원문에 없는 큰 설정(새 조직·초능력) 금지. 작은 사항(시간·숫자·물건)은 추가 가능
- 장르의 분위기로. 단 비유 금지: "그림자", "심연", "집어삼키다", "광기" 대신 실제 물건·장소·숫자
  - 원문에 실제로 나오는 물건·현상은 그 단어 그대로 써도 됨 (예: 원문의 "겹쳐진 그림자")
- narrator 는 눈에 보이는 일만. 감정·의미 해석 금지
- 같은 사건·같은 선택지 문장 반복 금지. 앞 시나리오 카드와 제목·사건 겹치지 말 것`;

/** 선택지를 깎아내리는 말 (easy 를 바보 같은 선택으로 만듦). 검사에서도 씀 */
export const BELITTLE = ['무작정', '현혹', '알아채지 못', '맹목', '어리석', '생각 없이', '무턱대고', '덮어놓고'];
/** 이야기 밖 설명투 */
export const META = ['언급된', '앞 방', '다음 방', '이 카드'];
