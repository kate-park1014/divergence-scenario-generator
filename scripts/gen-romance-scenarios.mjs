#!/usr/bin/env node
// 로맨스 story.json(src/lib/data/storyarc/styles/romance_test/<key>/) → 게임 시나리오 5화 (시험용). /api/scenario/romance 호출.
// 결과: romance_test/<key>/ (story.json 옆) scenario_0N.json, script_0N.md, script.md, polish_0N.json
//
//   npm run dev &
//   npm run gen:romance-scenarios -- --keys=contract
//   npm run gen:romance-scenarios -- --keys=contract --orders=1
// 옵션: --keys=a,b (필수) / --orders / --no-polish / --base=URL
//       --style=이름 (기본: story.json 의 style, 없으면 romance. 스타일 파일 src/lib/data/storyarc/styles/<이름>.md)

import http from 'node:http';

const args = Object.fromEntries(
	process.argv.slice(2).map((a) => a.match(/^--([^=]+)(?:=(.*))?$/)).filter(Boolean).map((m) => [m[1], m[2] ?? true])
);
const base = args.base ?? 'http://localhost:5178';
const body = {};
if (args.keys) body.keys = String(args.keys).split(',').map((s) => s.trim()).filter(Boolean);
if (args.orders) body.orders = String(args.orders).split(',').map(Number);
if (args['no-polish']) body.polish = false;
if (args.style) body.style = args.style;

function postJson(urlStr, payloadObj) {
	return new Promise((resolve, reject) => {
		const u = new URL(urlStr);
		const payload = JSON.stringify(payloadObj);
		const req = http.request(
			{ hostname: u.hostname, port: u.port, path: u.pathname, method: 'POST', headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(payload) } },
			(res) => {
				let buf = '';
				res.on('data', (c) => (buf += c));
				res.on('end', () => {
					let data;
					try { data = JSON.parse(buf); } catch { data = { error: buf.slice(0, 500) }; }
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

console.log(`[romance-scenario] ${body.keys?.join(', ') ?? '전부'} → ${base}/api/scenario/romance`);
const t0 = Date.now();
const { status, data } = await postJson(`${base}/api/scenario/romance`, body);
if (status !== 200) {
	console.error(`실패 (${status}):`, data?.error ?? data);
	process.exit(1);
}
let bad = 0;
for (const a of data.arcs) {
	console.log(`\n${a.id} → ${a.dir}/script.md`);
	for (const r of a.results) {
		if (r.error) { bad++; console.log(`  ✗ ${r.order}화: ${r.error}`); continue; }
		const pol = r.polished === undefined ? '' : r.reverted ? ' · 다듬기 되돌림' : ` · 다듬은 줄 ${r.polished}`;
		console.log(`  ✓ ${r.order}화${pol}${r.errors?.length ? ` (남은 오류 ${r.errors.length})` : ''}`);
		for (const e of r.errors ?? []) console.log(`     - ${e}`);
	}
}
for (const f of data.failed ?? []) { bad++; console.log(`✗ ${f.id}: ${f.error}`); }
console.log(`\n완료 (${((Date.now() - t0) / 1000).toFixed(1)}s)`);
process.exit(bad ? 1 : 0);
