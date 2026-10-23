#!/usr/bin/env node
// 성향 변주 스토리 → 카드 14장 + additions 생성 러너 (Gemini).
// /api/scenario/card-pipeline 1번 호출: 조합마다 01→05 차례대로, 조합끼리는 동시에.
// 결과는 .env 의 WEBFRONT_DATA_DIR (webfront 의 test/adventure/data) 아래 cards/, additions/ 에 바로 씀.
//
// 사용법:
//   npm run dev                                              # 먼저 dev 서버(포트 5178) 실행
//   npm run gen:cards -- --story=modern_evannext_1           # 스토리의 조합 전체
//   npm run gen:cards -- --story=modern_evannext_1 --combos=FIR,HCR --orders=1,2
//
// 옵션:
//   --story=<id>          (필수) output_list/axis_test/<id>/ 의 스토리
//   --combos=A,B          대상 조합 (기본: 전체)
//   --orders=1,2          대상 시나리오 번호 (기본: 1~5)
//   --concurrency=N       조합 동시 실행 수 (기본 4, 1~8)
//   --portraits=<name>    얼굴 풀 (기본 modern_whisperweb_0)
//   --model=<name>        Gemini 모델 (기본 gemini-2.5-flash)
//   --base=URL            기본 http://localhost:5178
//
// 끝나면 webfront 에서: npx vitest run --project=unit "src/routes/(app)/test/adventure/data.test.ts"

import http from 'node:http';

// node:http 기반 POST (전역 fetch 의 headers 타임아웃 ~5분 회피, 타임아웃 0)
function postJson(urlStr, body) {
	return new Promise((resolve, reject) => {
		const u = new URL(urlStr);
		const payload = JSON.stringify(body);
		const req = http.request(
			{
				hostname: u.hostname,
				port: u.port,
				path: u.pathname,
				method: 'POST',
				headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(payload) }
			},
			(res) => {
				let buf = '';
				res.on('data', (c) => (buf += c));
				res.on('end', () => {
					let data = null;
					try {
						data = JSON.parse(buf);
					} catch {
						/* non-json */
					}
					resolve({ status: res.statusCode, data });
				});
			}
		);
		req.on('error', reject);
		req.setTimeout(0);
		req.write(payload);
		req.end();
	});
}

const args = Object.fromEntries(
	process.argv
		.slice(2)
		.map((a) => a.match(/^--([^=]+)(?:=(.*))?$/))
		.filter(Boolean)
		.map((m) => [m[1], m[2] ?? true])
);
const list = (v) => (typeof v === 'string' ? v.split(',').map((x) => x.trim()) : undefined);

if (!args.story) {
	console.error('--story=<id> 가 필요합니다. 예: --story=modern_evannext_1');
	process.exit(1);
}
const BASE = args.base ?? 'http://localhost:5178';
const body = {
	storyId: args.story,
	combos: list(args.combos),
	orders: list(args.orders)?.map(Number),
	concurrency: args.concurrency ? Number(args.concurrency) : undefined,
	portraits: args.portraits,
	model: args.model
};

console.log(`카드 생성: ${JSON.stringify(body)}`);
const started = Date.now();
const { status, data } = await postJson(`${BASE}/api/scenario/card-pipeline`, body);
if (status !== 200) {
	console.error(`HTTP ${status}: ${data?.error ?? ''}`);
	process.exit(1);
}
console.log(`\n완료 (${Math.round((Date.now() - started) / 1000)}초): ok=${data.okCount} failed=${data.failedCount}`);
for (const o of data.ok)
	console.log(`  ✓ ${o.scenario} 카드 ${o.cards}장, 재요청 ${o.retries}번${o.rewritten.length ? `, 다시 쓴 카드 ${o.rewritten.join(', ')}` : ''}`);
for (const f of data.failed) console.log(`  ✗ ${f.scenario} [${f.step}] ${f.error}`);
console.log(`\n저장 위치: ${data.out}`);
