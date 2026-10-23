#!/usr/bin/env node
// 재작업 storyarc(rewrite_test) → 새 프롬프트로 시나리오 생성 (시험용). /api/scenario/rewrite-test 호출.
// 결과: output_list/rewrite_test/<id>/scenario_0N.json, script_0N.md, script.md (사람이 읽는 대본)
//
// 사용법:
//   npm run dev &
//   npm run gen:rewrite-scenarios -- --id=modern_evannext_1
//   npm run gen:rewrite-scenarios -- --id=modern_evannext_1 --orders=1,5
//
// 옵션:
//   --id=a,b          storyarc id (필수)
//   --orders=1,2      만들 화 (기본 1~5)
//   --concurrency=N   아크 동시 실행 (기본 2)
//   --out=DIR         저장 폴더 (기본 output_list/rewrite_test)
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

function postJson(urlStr, body) {
	return new Promise((resolve, reject) => {
		const u = new URL(urlStr);
		const lib = u.protocol === 'https:' ? https : http;
		const payload = JSON.stringify(body);
		const req = lib.request(
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
					let data;
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
const base = args.base ?? 'http://localhost:5178';
const body = { ids };
if (args.orders) body.orders = String(args.orders).split(',').map(Number);
if (args.concurrency) body.concurrency = Number(args.concurrency);
if (args.out) body.outDir = args.out;

console.log(`[scenario] ${ids.join(', ')} → ${base}/api/scenario/rewrite-test`);
const t0 = Date.now();
const { status, data } = await postJson(`${base}/api/scenario/rewrite-test`, body);
if (status !== 200) {
	console.error(`[scenario] 실패 (${status}):`, data?.error ?? data);
	process.exit(1);
}
let bad = 0;
for (const a of data.arcs) {
	console.log(`\n${a.id} → ${a.dir}/script.md`);
	for (const r of a.results) {
		if (r.error) {
			bad++;
			console.log(`  ✗ ${r.order}화: ${r.error}`);
			continue;
		}
		console.log(`  ✓ ${r.order}화${r.errors?.length ? ` (남은 오류 ${r.errors.length})` : ''}`);
		for (const e of r.errors ?? []) console.log(`     - ${e}`);
	}
}
for (const f of data.failed ?? []) {
	bad++;
	console.log(`✗ ${f.id}: ${f.error}`);
}
console.log(`\n[scenario] 완료 (${((Date.now() - t0) / 1000).toFixed(1)}s)`);
process.exit(bad ? 1 : 0);
