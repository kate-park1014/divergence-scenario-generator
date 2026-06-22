#!/usr/bin/env node
// boss_list 기반 스토리아크 생성 러너 (→ 테마 디렉토리 덮어쓰기).
// /api/storyarc/bulk 호출: 보스당 1개 아크(단발). 보스끼리 병렬.
//
// 사용법:
//   npm run dev                                       # dev 서버(5178) 먼저
//   npm run gen:storyarc                              # snowy 전체 10보스
//   npm run gen:storyarc -- --theme=modern           # modern 전체
//   npm run gen:storyarc -- --theme=snowy --boss=haraldr  # 스모크: 한 보스만
//   npm run gen:storyarc -- --dry-run                # 대상/매핑만(네트워크 0)
//
// 옵션 (인자 또는 env):
//   --theme=snowy|modern|desert (env THEME)       기본 snowy
//   --base=URL        (env BASE)        기본 http://localhost:5178
//   --concurrency=N   (env CONCURRENCY) 보스 동시 실행, 기본 3 (1~10)
//   --batch=N         (env BATCH)       한 요청당 보스 수, 기본 3 (요청 분할 → 실패 격리)
//   --boss=key|idx                      일부 보스만 (쉼표로 여러 개: --boss=haraldr,finn)
//   --dry-run                           네트워크 호출 없이 대상만 출력
//
// 주의: node 전역 fetch 의 headers 타임아웃(~5분) 회피를 위해 node:http 로 요청(타임아웃 0).

import { readFileSync } from 'node:fs';
import http from 'node:http';
import https from 'node:https';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { BOSS_POOL_MAP, BOSS_LIST_FILE } from '../src/lib/data/storyarc/boss_pool_map.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

function parseArgs(argv) {
	const o = {};
	for (const a of argv) {
		const m = a.match(/^--([^=]+)(?:=(.*))?$/);
		if (m) o[m[1]] = m[2] ?? true;
	}
	return o;
}

// node:http 기반 POST (전역 fetch의 headers 타임아웃 회피, 타임아웃 0)
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
		req.setTimeout(0); // 응답 무제한 대기
		req.write(payload);
		req.end();
	});
}

function chunk(arr, size) {
	const out = [];
	for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
	return out;
}

const args = parseArgs(process.argv.slice(2));
const THEME = args.theme ?? process.env.THEME ?? 'snowy';
const BASE = args.base ?? process.env.BASE ?? 'http://localhost:5178';
const CONCURRENCY = Math.max(1, Math.min(10, Number(args.concurrency ?? process.env.CONCURRENCY ?? 3)));
const BATCH = Math.max(1, Number(args.batch ?? process.env.BATCH ?? 3));
const DRY_RUN = Boolean(args['dry-run']);

const SERIES = BOSS_POOL_MAP[THEME];
if (!SERIES) {
	console.error(`알 수 없는 theme: "${THEME}" (snowy, modern, desert 만 가능)`);
	process.exit(1);
}

// --boss 해석 → bossIndices
let bossIndices;
if (args.boss) {
	bossIndices = String(args.boss)
		.split(',')
		.map((tok) => {
			const t = tok.trim();
			if (/^\d+$/.test(t)) return Number(t);
			const idx = SERIES.findIndex((s) => s.key === t);
			if (idx < 0) throw new Error(`알 수 없는 boss: "${t}" (key 또는 인덱스)`);
			return idx;
		});
}

const targets = SERIES.map((_, i) => i).filter((i) => !bossIndices || bossIndices.includes(i));
const batches = chunk(targets, BATCH);

const bosses = JSON.parse(readFileSync(join(ROOT, BOSS_LIST_FILE[THEME]), 'utf-8')).bosses;

console.log(`테마: ${THEME}  대상 보스: ${targets.length}개  (요청당 ${BATCH}보스, 배치 ${batches.length}개)`);
console.log(`설정: base=${BASE} concurrency=${CONCURRENCY}`);
for (const i of targets) {
	console.log(`  [${i}] ${SERIES[i].key.padEnd(10)} ${SERIES[i].pool}  ${bosses?.[i]?.name ?? '?'}  → level ${i}  storyarc_${THEME}_${SERIES[i].key}_${i}.ts`);
}

if (DRY_RUN) {
	console.log('\n[dry-run] 네트워크 호출 없이 종료.');
	process.exit(0);
}

const allOk = [];
const allFailed = [];
for (let bi = 0; bi < batches.length; bi++) {
	const batchIdx = batches[bi];
	process.stdout.write(`\n▶ 배치 ${bi + 1}/${batches.length} (보스 ${batchIdx.map((i) => SERIES[i].key).join(', ')}) 생성 중...\n`);
	try {
		const { status, data } = await postJson(`${BASE}/api/storyarc/bulk`, {
			theme: THEME,
			concurrency: CONCURRENCY,
			bossIndices: batchIdx
		});
		if (status !== 200) throw new Error(`HTTP ${status}: ${data?.error ?? ''}`);
		allOk.push(...(data.ok ?? []));
		allFailed.push(...(data.failed ?? []));
		console.log(`  완료: ok=${data.okCount ?? 0} failed=${data.failedCount ?? 0}`);
		if (data.failed?.length) for (const f of data.failed) console.log(`    ✗ ${f.boss} [${f.step}] ${f.error}`);
	} catch (e) {
		console.error(`  배치 실패: ${e instanceof Error ? e.message : String(e)}`);
		batchIdx.forEach((i) => allFailed.push({ boss: SERIES[i].key, step: 'batch', error: String(e) }));
	}
}

console.log(`\n=== 전체 결과 ===`);
console.log(`성공: ${allOk.length}  실패: ${allFailed.length}`);
if (allFailed.length) process.exitCode = 1;
