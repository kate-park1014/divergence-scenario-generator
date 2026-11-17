#!/usr/bin/env node
// 넷쇼트 story.json(src/lib/data/storyarc/styles/netshort_test/<id>/) → 게임 시나리오 5화 (시험용). /api/scenario/netshort 호출.
// 결과: src/lib/data/storyarc/styles/netshort_test/<id>/ (story.json 옆) scenario_0N.json, script_0N.md, script.md
//
//   npm run dev &
//   npm run gen:netshort-scenarios -- --id=arcade_20261030083249_3
//   npm run gen:netshort-scenarios -- --id=<id> --orders=1,5
//   npm run gen:netshort-scenarios -- --id=<id> --polish-only   # 기존 대본을 다듬기만
//   npm run gen:netshort-scenarios -- --id=<id> --enters-only   # 빠진 NPC enter 만 넣기 (Gemini 없음)
// 옵션: --id=a,b (필수) / --orders / --out=DIR / --story-dir=DIR / --base=URL
//       --no-polish (다듬기 끔) / --polish-only. 다듬기 기록은 <id>/polish_0N.json
//       --style=이름 (기본: 이야기 단계가 seeds.json 에 저장한 것, 없으면 netshort. 스타일 파일 src/lib/data/storyarc/styles/<이름>.md)

import http from 'node:http';

const args = Object.fromEntries(
	process.argv.slice(2).map((a) => a.match(/^--([^=]+)(?:=(.*))?$/)).filter(Boolean).map((m) => [m[1], m[2] ?? true])
);
const ids = String(args.id ?? '').split(',').map((s) => s.trim()).filter(Boolean);
if (!ids.length) {
	console.error('--id=<netshort id> 가 필요합니다.');
	process.exit(1);
}
const base = args.base ?? 'http://localhost:5178';
const body = { ids };
if (args.orders) body.orders = String(args.orders).split(',').map(Number);
if (args.out) body.outDir = args.out;
if (args['story-dir']) body.storyDir = args['story-dir'];
if (args['no-polish']) body.polish = false;
if (args['polish-only']) body.polishOnly = true;
if (args['enters-only']) body.entersOnly = true;
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

console.log(`[netshort-scenario] ${ids.join(', ')} → ${base}/api/scenario/netshort`);
const t0 = Date.now();
const { status, data } = await postJson(`${base}/api/scenario/netshort`, body);
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
