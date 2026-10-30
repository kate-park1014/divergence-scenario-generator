#!/usr/bin/env node
// 넷쇼트 스타일 5화 스토리 (netshort_test/story-prompt.md). /api/storyarc/netshort 호출.
// 재료는 netshort_test/story-seeds.json 에서 코드가 랜덤으로 뽑는다.
// 결과: src/lib/data/storyarc/netshort_test/<id>/seeds.json (뽑은 재료), story.json, story.md
// 저장한 이야기는 story-seeds.json 의 used_stories 에 추가된다.
//
// 사용법:
//   npm run dev &
//   npm run gen:netshort                       # 새 이야기 1개
//   npm run gen:netshort -- --count=3          # 새 이야기 3개
//   npm run gen:netshort -- --id=<id>          # 그 이야기의 seeds.json 재료로 다시 씀
//
// 옵션: --count (기본 1), --id=a,b, --no-words (random_words 안 씀), --seeds=FILE,
//       --concurrency=N (기본 2), --temperature (기본 0.8), --out=DIR, --base=URL (기본 http://localhost:5178)

import http from 'node:http';

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
const base = args.base ?? 'http://localhost:5178';
const body = { ids };
if (args.count) body.count = Number(args.count);
if (args['no-words']) body.words = false;
if (args.seeds) body.seedsFile = args.seeds;
if (args.concurrency) body.concurrency = Number(args.concurrency);
if (args.temperature) body.temperature = Number(args.temperature);
if (args.out) body.outDir = args.out;

console.log(`[netshort] ${ids.length ? `다시 쓰기: ${ids.join(', ')}` : `새 이야기 ${body.count ?? 1}개`} → ${base}/api/storyarc/netshort`);
const t0 = Date.now();
const { status, data } = await postJson(`${base}/api/storyarc/netshort`, body);
if (status !== 200) {
	console.error(`[netshort] 실패 (${status}):`, data?.error ?? data);
	process.exit(1);
}
let bad = 0;
for (const a of data.arcs) {
	console.log(`\n${a.id} "${a.title}" → ${a.dir}/ (요청 ${a.tries}번)${a.errors.length ? ` — 남은 오류 ${a.errors.length}` : ''}`);
	for (const e of a.errors) console.log(`   - ${e}`);
	console.log(`   장치: ${a.used.device} / 반전: ${a.used.twist}`);
}
for (const f of data.failed ?? []) {
	bad++;
	console.log(`✗ ${f.id}: ${f.error}`);
}
console.log(`\n[netshort] 완료 (${((Date.now() - t0) / 1000).toFixed(1)}s)`);
process.exit(bad ? 1 : 0);
