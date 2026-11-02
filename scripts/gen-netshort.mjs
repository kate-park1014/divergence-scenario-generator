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
//   npm run gen:netshort -- --id=a,b --judge-only   # 기존 이야기를 채점만
//   npm run gen:netshort -- --judge-only       # 폴더의 모든 이야기를 채점만
//
// 저장 뒤 채점(N1~N7, netshortJudge.ts)을 하고 통과율 표를 출력한다. --no-judge 로 끔.
//
// 옵션: --count (기본 1), --id=a,b, --seeds=FILE,
//       --concurrency=N (기본 2), --temperature (기본 0.8), --out=DIR, --base=URL (기본 http://localhost:5178)

import http from 'node:http';
import { readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

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
let ids = String(args.id ?? '')
	.split(',')
	.map((s) => s.trim())
	.filter(Boolean);
// --judge-only 에 id 가 없으면 폴더의 story.json 이 있는 이야기 모두
if (args['judge-only'] && !ids.length) {
	const dir = args.out ?? 'src/lib/data/storyarc/netshort_test';
	ids = readdirSync(dir).filter((d) => existsSync(join(dir, d, 'story.json')) && existsSync(join(dir, d, 'seeds.json')));
}
const base = args.base ?? 'http://localhost:5178';
const body = { ids };
if (args.count) body.count = Number(args.count);
if (args.seeds) body.seedsFile = args.seeds;
if (args.concurrency) body.concurrency = Number(args.concurrency);
if (args.temperature) body.temperature = Number(args.temperature);
if (args.out) body.outDir = args.out;
if (args['judge-only']) body.judgeOnly = true;
if (args['no-judge']) body.judge = false;

console.log(`[netshort] ${body.judgeOnly ? `채점만: ${ids.length}개` : ids.length ? `다시 쓰기: ${ids.join(', ')}` : `새 이야기 ${body.count ?? 1}개`} → ${base}/api/storyarc/netshort`);
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
// 채점표: 이야기 × 항목, 항목별 통과율
const judged = data.arcs.filter((a) => a.judge?.length);
if (judged.length) {
	const itemIds = judged[0].judge.map((r) => r.id);
	const w = Math.max(...judged.map((a) => a.id.length));
	console.log(`\n[채점] ${'id'.padEnd(w)}  ${itemIds.join('  ')}  통과`);
	for (const a of judged) {
		const n = a.judge.filter((r) => r.pass).length;
		console.log(`       ${a.id.padEnd(w)}  ${a.judge.map((r) => (r.pass ? '✓ ' : '✗ ').padEnd(r.id.length)).join('  ')}  ${n}/${a.judge.length}`);
	}
	const rate = itemIds.map((id) => `${id} ${judged.filter((a) => a.judge.find((r) => r.id === id)?.pass).length}/${judged.length}`);
	console.log(`       항목별: ${rate.join(' · ')}`);
	for (const a of judged)
		for (const r of a.judge.filter((x) => !x.pass)) console.log(`   ✗ ${a.id} ${r.id} ${r.name}: ${r.reason}${r.quote ? `\n       > ${r.quote}${r.quote_found === false ? ' (인용이 원문에 없음)' : ''}` : ''}`);
} else if (!args['no-judge']) console.log('\n[채점] 결과 없음 (채점 실패)');
for (const f of data.failed ?? []) {
	bad++;
	console.log(`✗ ${f.id}: ${f.error}`);
}
console.log(`\n[netshort] 완료 (${((Date.now() - t0) / 1000).toFixed(1)}s)`);
process.exit(bad ? 1 : 0);
