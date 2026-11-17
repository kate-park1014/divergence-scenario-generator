#!/usr/bin/env node
// Ash No.7 (modern boss index 3 = key 'rohan', pool_101) 전용 풀 파이프라인 러너.
// 1) storyarc 생성: /api/storyarc/bulk (theme=modern, bossIndices=[3])
//    → src/lib/data/storyarc/modern/storyarc_modern_rohan_3.ts 덮어쓰기
// 2) 시나리오 파이프라인: /api/scenario/bulk-pipeline (생성→actors→번역→output)
//    → output_list/modern_chapter_04.json
//
// 사용법:
//   npm run dev                 # 포트 5178 (이미 떠 있으면 생략)
//   node scripts/gen-modern-ash.mjs
//
// 옵션(인자 또는 env):
//   --base=URL  (env BASE)         기본 http://localhost:5178
//   --skip-storyarc                storyarc 생성 건너뛰고 기존 .ts로 시나리오만
//   --skip-generate                시나리오 생성 단계 건너뜀(기존 .ts 재사용)

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

// node:http POST (전역 fetch headers 타임아웃 회피, 타임아웃 0)
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

const args = parseArgs(process.argv.slice(2));
const BASE = args.base ?? process.env.BASE ?? 'http://localhost:5178';
const SKIP_STORYARC = Boolean(args['skip-storyarc']);
const SKIP_GENERATE = Boolean(args['skip-generate']);

const THEME = 'modern';
const BOSS_INDEX = 3; // Ash No.7 → level 3
// bulk가 ok로 돌려주는 id와 동일. 생성 건너뛸 때를 위한 폴백.
let storyarcIds = ['modern_rohan_3'];

async function main() {
	console.log(`=== Ash No.7 (modern idx ${BOSS_INDEX}) 풀 파이프라인 ===`);
	console.log(`base=${BASE} skipStoryarc=${SKIP_STORYARC} skipGenerate=${SKIP_GENERATE}\n`);

	// 1) storyarc 생성
	if (!SKIP_STORYARC) {
		console.log('▶ [1/2] storyarc 생성 (bulk)...');
		const { status, data } = await postJson(`${BASE}/api/storyarc/bulk`, {
			theme: THEME,
			concurrency: 1,
			bossIndices: [BOSS_INDEX]
		});
		if (status !== 200) throw new Error(`storyarc HTTP ${status}: ${data?.error ?? ''}`);
		console.log(`  ok=${data.okCount ?? 0} failed=${data.failedCount ?? 0}`);
		if (data.failed?.length) for (const f of data.failed) console.log(`    ✗ ${f.boss} [${f.step}] ${f.error}`);
		if (Array.isArray(data.ok) && data.ok.length) storyarcIds = data.ok;
		if (!storyarcIds.length) throw new Error('storyarc 생성 결과 id 없음 — 중단');
		console.log(`  생성 id: ${storyarcIds.join(', ')}\n`);
		// Vite HMR이 새 .ts를 반영하도록 잠깐 대기
		await new Promise((r) => setTimeout(r, 3000));
	} else {
		console.log('▶ [1/2] storyarc 생성 건너뜀 (기존 .ts 사용)\n');
	}

	// 2) 시나리오 풀 파이프라인 (생성→actors→번역→output)
	console.log(`▶ [2/2] 시나리오 파이프라인 (bulk-pipeline): ${storyarcIds.join(', ')}`);
	const { status, data } = await postJson(`${BASE}/api/scenario/bulk-pipeline`, {
		storyarcIds,
		concurrency: 2,
		skipGenerate: SKIP_GENERATE
	});
	if (status !== 200) throw new Error(`pipeline HTTP ${status}: ${data?.error ?? ''}`);
	console.log(`  ok=${data.okCount ?? 0}/${data.arcs ?? 0} failed=${data.failedCount ?? 0}`);
	if (data.failed?.length) for (const f of data.failed) console.log(`    ✗ ${f.id} [${f.step}${f.order ? ` order ${f.order}` : ''}] ${f.error}`);

	console.log('\n=== 완료 ===');
	console.log('출력: output_list/modern_chapter_04.json');
	if (data.failedCount) process.exitCode = 1;
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
