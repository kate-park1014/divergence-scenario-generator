#!/usr/bin/env node
// 재작업 시나리오(rewrite_test) → 칸 고정 카드 16장 + additions 생성 러너 (Gemini). 성향 조합 없음.
// /api/scenario/card-seq-pipeline 1번 호출: 시나리오 01→05 차례대로.
// 결과: output_list/rewrite_test/<id>/cards/ (0N/card/*.json, 0N/additions.json, cards_0N.md)
//
// 사용법:
//   npm run dev                                                   # 먼저 dev 서버(포트 5178) 실행
//   npm run gen:cards-seq -- --story=modern_whisperweb_0          # 01~05
//   npm run gen:cards-seq -- --story=modern_whisperweb_0 --orders=1
//
// 옵션:
//   --story=<id>          (필수) output_list/rewrite_test/<id>/ 의 스토리
//   --orders=1,2          대상 시나리오 번호 (기본: 1~5)
//   --portraits=<name>    얼굴 풀 (기본 modern_whisperweb_0)
//   --model=<name>        Gemini 모델 (기본 gemini-2.5-flash)
//   --base=URL            기본 http://localhost:5178

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
	console.error('--story=<id> 가 필요합니다. 예: --story=modern_whisperweb_0');
	process.exit(1);
}
const BASE = args.base ?? 'http://localhost:5178';
const body = {
	storyId: args.story,
	orders: list(args.orders)?.map(Number),
	portraits: args.portraits,
	model: args.model
};

console.log(`칸 고정 카드 생성: ${JSON.stringify(body)}`);
const started = Date.now();
const { status, data } = await postJson(`${BASE}/api/scenario/card-seq-pipeline`, body);
if (status !== 200) {
	console.error(`HTTP ${status}: ${data?.error ?? ''}`);
	process.exit(1);
}
console.log(`\n완료 (${Math.round((Date.now() - started) / 1000)}초): ok=${data.okCount} failed=${data.failedCount}`);
for (const o of data.ok)
	console.log(`  ✓ ${o.scenario} 카드 ${o.cards}장, 재요청 ${o.retries}번${o.rewritten.length ? `, 다시 쓴 카드 ${o.rewritten.join(', ')}` : ''}`);
for (const f of data.failed) console.log(`  ✗ ${f.scenario} [${f.step}] ${f.error}`);
console.log(`\n저장 위치: ${data.out}`);
