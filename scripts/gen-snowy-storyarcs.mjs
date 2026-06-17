#!/usr/bin/env node
// boss_list 기반 snowy 시리즈 스토리아크 생성 러너 (→ snowy_test 덮어쓰기).
// /api/storyarc/bulk-series 호출: 보스당 비트시트 → 편 N개. 보스끼리 병렬.
//
// 사용법:
//   npm run dev                                  # dev 서버(5178) 먼저
//   npm run gen:snowy-storyarc                   # 전체 10보스 × N편
//   npm run gen:snowy-storyarc -- --boss=haraldr # 스모크: 한 보스만
//   npm run gen:snowy-storyarc -- --dry-run      # 대상/매핑만(네트워크 0)
//
// 옵션 (인자 또는 env):
//   --base=URL        (env BASE)        기본 http://localhost:5178
//   --chapters=N      (env CHAPTERS)    보스당 편수, 기본 3
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

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const BOSS_LIST = join(ROOT, 'boss_list/snowy_20260612_144438.json');

// boss_list 순서(=bossIndex)와 동일. 엔드포인트 SNOWY_SERIES 와 일치해야 함.
const SERIES = [
	{ key: 'haraldr', pool: 'pool_106' },
	{ key: 'skuld', pool: 'pool_107' },
	{ key: 'skaalbane', pool: 'pool_108' },
	{ key: 'anya', pool: 'pool_109' },
	{ key: 'skalhorn', pool: 'pool_110' },
	{ key: 'cairn', pool: 'pool_111' },
	{ key: 'fenrir', pool: 'pool_112' },
	{ key: 'bellus', pool: 'pool_035' },
	{ key: 'astrielle', pool: 'pool_034' },
	{ key: 'finn', pool: 'pool_033' }
];

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
const BASE = args.base ?? process.env.BASE ?? 'http://localhost:5178';
const CHAPTERS = Math.max(1, Number(args.chapters ?? process.env.CHAPTERS ?? 3));
const CONCURRENCY = Math.max(1, Math.min(10, Number(args.concurrency ?? process.env.CONCURRENCY ?? 3)));
const BATCH = Math.max(1, Number(args.batch ?? process.env.BATCH ?? 3));
const DRY_RUN = Boolean(args['dry-run']);

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

const levelFor = (idx, chapter) => idx + (chapter - 1) * 10;
const targets = SERIES.map((_, i) => i).filter((i) => !bossIndices || bossIndices.includes(i));
const batches = chunk(targets, BATCH);

const bosses = JSON.parse(readFileSync(BOSS_LIST, 'utf-8')).bosses;

console.log(`대상 보스: ${targets.length}개 × ${CHAPTERS}편  (요청당 ${BATCH}보스, 배치 ${batches.length}개)`);
console.log(`설정: base=${BASE} chapters=${CHAPTERS} concurrency=${CONCURRENCY}`);
for (const i of targets) {
	const levels = Array.from({ length: CHAPTERS }, (_, k) => levelFor(i, k + 1)).join(',');
	console.log(`  [${i}] ${SERIES[i].key.padEnd(10)} ${SERIES[i].pool}  ${bosses?.[i]?.name ?? '?'}  → level ${levels}`);
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
		const { status, data } = await postJson(`${BASE}/api/storyarc/bulk-series`, {
			theme: 'snowy',
			chapters: CHAPTERS,
			concurrency: CONCURRENCY,
			bossIndices: batchIdx
		});
		if (status !== 200) throw new Error(`HTTP ${status}: ${data?.error ?? ''}`);
		allOk.push(...(data.ok ?? []));
		allFailed.push(...(data.failed ?? []));
		console.log(`  완료: ok=${data.okCount ?? 0} failed=${data.failedCount ?? 0}`);
		if (data.failed?.length) for (const f of data.failed) console.log(`    ✗ ${f.boss} [${f.step}${f.chapter ? ` ch${f.chapter}` : ''}] ${f.error}`);
	} catch (e) {
		console.error(`  배치 실패: ${e instanceof Error ? e.message : String(e)}`);
		batchIdx.forEach((i) => allFailed.push({ boss: SERIES[i].key, step: 'batch', error: String(e) }));
	}
}

console.log(`\n=== 전체 결과 ===`);
console.log(`성공 편: ${allOk.length}  실패: ${allFailed.length}`);
if (allFailed.length) process.exitCode = 1;
