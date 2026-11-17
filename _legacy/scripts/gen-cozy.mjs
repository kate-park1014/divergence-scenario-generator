#!/usr/bin/env node
// 편안한 5화 이야기 (cozy_test/premises.json 의 기획안). /api/storyarc/cozy 호출.
// 결과: src/lib/data/storyarc/styles/cozy_test/<key>/story.json, story.md, cast.json(주 NPC)
//
//   npm run dev &
//   npm run gen:cozy                       # 기획안 전부
//   npm run gen:cozy -- --keys=market      # 하나만
//   npm run gen:cozy -- --keys=market --style=netshort   # 다른 스타일로 (스타일 파일 src/lib/data/storyarc/styles/<이름>.md)
// 옵션: --keys=a,b / --style=이름 (기본: cast.json 에 저장된 것, 없으면 cozy) / --temperature / --out=DIR / --base=URL (기본 http://localhost:5178)

import http from 'node:http';

const args = Object.fromEntries(
	process.argv.slice(2).map((a) => a.match(/^--([^=]+)(?:=(.*))?$/)).filter(Boolean).map((m) => [m[1], m[2] ?? true])
);
const base = args.base ?? 'http://localhost:5178';
const body = {};
if (args.keys) body.keys = String(args.keys).split(',').map((s) => s.trim()).filter(Boolean);
if (args.temperature) body.temperature = Number(args.temperature);
if (args.out) body.outDir = args.out;
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

console.log(`[cozy] ${body.keys ? body.keys.join(', ') : '기획안 전부'}${body.style ? ` (스타일 ${body.style})` : ''} → ${base}/api/storyarc/cozy`);
const t0 = Date.now();
const { status, data } = await postJson(`${base}/api/storyarc/cozy`, body);
if (status !== 200) {
	console.error(`실패 (${status}):`, data?.error ?? data);
	process.exit(1);
}
for (const a of data.arcs) {
	console.log(`\n${a.key} "${a.title}" (NPC ${a.npc}) → ${a.dir}/story.md (요청 ${a.tries}번)${a.errors.length ? ` — 남은 오류 ${a.errors.length}` : ''}`);
	for (const e of a.errors) console.log(`   - ${e}`);
}
for (const f of data.failed ?? []) console.log(`✗ ${f.key}: ${f.error}`);
console.log(`\n완료 (${((Date.now() - t0) / 1000).toFixed(1)}s)`);
process.exit(data.failed?.length ? 1 : 0);
