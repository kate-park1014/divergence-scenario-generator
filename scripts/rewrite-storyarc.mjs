#!/usr/bin/env node
// 기존 storyarc 를 모호하지 않게 다시 쓰는 러너. /api/storyarc/rewrite 호출.
// 원본은 그대로 두고 src/lib/data/storyarc/rewrite_test/ 에 새 파일로 저장한다.
//
// 사용법:
//   npm run dev &                                              # dev 서버(5178) 먼저
//   npm run rewrite:storyarc -- --id=modern_evannext_1
//   npm run rewrite:storyarc -- --id=a,b --out=src/lib/data/storyarc/rewrite_test2
//
// 옵션:
//   --id=a,b          다시 쓸 storyarc id (필수, 쉼표로 여러 개)
//   --out=DIR         저장 폴더 (기본 src/lib/data/storyarc/rewrite_test)
//   --temperature=N   기본 0.8
//   --concurrency=N   기본 3
//   --no-judge        재작업 뒤 Gemini 채점을 건너뜀
//   --judge-only      재작업 없이 기존 재작업본만 다시 채점
//   --base=URL        기본 http://localhost:5178

import http from 'node:http';
import https from 'node:https';

function parseArgs(argv) {
	const o = {};
	for (const a of argv) {
		const m = a.match(/^--([^=]+)(?:=(.*))?$/);
		if (m) o[m[1]] = m[2] ?? true;
	}
	return o;
}

// 전역 fetch 의 헤더 타임아웃(~5분)을 피하려고 node:http 로 요청 (타임아웃 0)
function postJson(urlStr, body) {
	return new Promise((resolve, reject) => {
		const u = new URL(urlStr);
		const lib = u.protocol === 'https:' ? https : http;
		const payload = JSON.stringify(body);
		const req = lib.request(
			{
				hostname: u.hostname,
				port: u.port,
				path: u.pathname + u.search,
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
						data = { error: buf.slice(0, 500) };
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

const args = parseArgs(process.argv.slice(2));
const ids = String(args.id ?? '')
	.split(',')
	.map((s) => s.trim())
	.filter(Boolean);
if (!ids.length) {
	console.error('--id=<storyarc id> 가 필요합니다.');
	process.exit(1);
}
const base = args.base ?? process.env.BASE ?? 'http://localhost:5178';
const body = { ids };
if (args.out) body.outDir = args.out;
if (args.temperature !== undefined) body.temperature = Number(args.temperature);
if (args.concurrency !== undefined) body.concurrency = Number(args.concurrency);
if (args['no-judge']) body.judge = false;
if (args['judge-only']) body.judgeOnly = true;

console.log(`[rewrite] ${ids.join(', ')} → ${base}/api/storyarc/rewrite`);
const t0 = Date.now();
const { status, data } = await postJson(`${base}/api/storyarc/rewrite`, body);
if (status !== 200) {
	console.error(`[rewrite] 실패 (${status}):`, data?.error ?? data);
	process.exit(1);
}
let failed = 0;
for (const r of data.results) {
	if (r.error) {
		failed++;
		console.log(`✗ ${r.id}: ${r.error}`);
		continue;
	}
	console.log(`✓ ${r.id} → ${r.file}`);
	for (const e of r.errors ?? []) console.log(`   [남은 오류] ${e}`);
	if (r.judgeError) console.log(`   [채점 실패] ${r.judgeError}`);
	for (const j of r.judge ?? []) {
		if (j.pass) continue;
		const qf = j.quote_found === false ? ' (인용이 원문에 없음)' : '';
		console.log(`   [채점 ✗ ${j.id} ${j.name}] ${j.reason}${j.quote ? `\n        "${j.quote}"${qf}` : ''}`);
	}
}

// 채점 항목별 통과 수
const judged = data.results.filter((r) => r.judge);
if (judged.length) {
	console.log(`\n[채점 요약] ${judged.length}개 storyarc`);
	for (const it of judged[0].judge) {
		const ok = judged.filter((r) => r.judge.find((j) => j.id === it.id)?.pass).length;
		console.log(`  ${it.id} ${it.name}: ${ok}/${judged.length} 통과`);
	}
	const errCount = data.results.filter((r) => r.errors?.length).length;
	console.log(`  코드 검사 남은 오류가 있는 storyarc: ${errCount}/${data.results.length}`);
}
console.log(`[rewrite] 완료 ${data.results.length - failed}/${data.results.length} (${((Date.now() - t0) / 1000).toFixed(1)}s)`);
process.exit(failed ? 1 : 0);
