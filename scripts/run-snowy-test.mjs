#!/usr/bin/env node
// snowy_test 30개 storyarc 챕터 생성 러너.
// /api/scenario/bulk-pipeline 를 배치로 호출: 생성(chapterGen) → process-actors → translate → output/save.
// chapter_order = difficulty_level = (arc.level ?? 0) + 1 (bulk-pipeline에서 계산).
//
// 사용법:
//   npm run dev                         # 먼저 dev 서버(포트 5178) 실행
//   npm run gen:snowy-test              # 전체 30개 실행
//   npm run gen:snowy-test -- --dry-run # 네트워크 호출 없이 대상 id/배치만 출력
//
// 옵션 (인자 또는 env):
//   --base=URL          (env BASE)         기본 http://localhost:5178
//   --concurrency=N     (env CONCURRENCY)  bulk-pipeline 아크 동시 실행 수, 기본 3 (1~10)
//   --batch=N           (env BATCH)        한 요청당 아크 수, 기본 5
//   --skip-generate     (env SKIP_GENERATE) 생성 단계 건너뜀(기존 .ts 재사용 — 실패 재시도용)
//   --dry-run                              대상만 출력하고 종료

import { readdirSync } from 'node:fs';
import http from 'node:http';
import https from 'node:https';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

// node:http 기반 POST (전역 fetch의 headers 타임아웃 ~5분 회피, 타임아웃 0)
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

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

function parseArgs(argv) {
	const opts = {};
	for (const a of argv) {
		const m = a.match(/^--([^=]+)(?:=(.*))?$/);
		if (m) opts[m[1]] = m[2] ?? true;
	}
	return opts;
}

const args = parseArgs(process.argv.slice(2));
const BASE = args.base ?? process.env.BASE ?? 'http://localhost:5178';
// 테마: snowy → snowy_test 디렉토리, 그 외(desert/forest/hell/modern) → 동명 서브디렉토리
const THEME = args.theme ?? process.env.THEME ?? 'snowy';
const STORYARC_DIR =
	THEME === 'snowy'
		? join(ROOT, 'src/lib/data/storyarc/snowy_test')
		: join(ROOT, 'src/lib/data/storyarc', THEME);
const CONCURRENCY = Math.max(1, Math.min(10, Number(args.concurrency ?? process.env.CONCURRENCY ?? 3)));
const BATCH = Math.max(1, Number(args.batch ?? process.env.BATCH ?? 5));
const SKIP_GENERATE = Boolean(args['skip-generate'] ?? process.env.SKIP_GENERATE);
const DRY_RUN = Boolean(args['dry-run']);

// 파일명 → storyarc id 파싱, level 오름차순 정렬 (chapter 1→N 순)
function collectIds() {
	const files = readdirSync(STORYARC_DIR).filter(
		(f) => f.startsWith(`storyarc_${THEME}_`) && f.endsWith('.ts')
	);
	const ids = files.map((f) => f.replace(/^storyarc_/, '').replace(/\.ts$/, '')); // <theme>_<boss>_<level>
	const levelOf = (id) => Number(id.match(/_(\d+)$/)?.[1] ?? 0);
	return ids.sort((a, b) => levelOf(a) - levelOf(b));
}

function chunk(arr, size) {
	const out = [];
	for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
	return out;
}

async function runBatch(storyarcIds) {
	const { status, data } = await postJson(`${BASE}/api/scenario/bulk-pipeline`, {
		storyarcIds,
		concurrency: CONCURRENCY,
		skipGenerate: SKIP_GENERATE
	});
	if (status !== 200) throw new Error(`HTTP ${status}: ${data?.error ?? ''}`);
	return data;
}

async function main() {
	const ids = collectIds();
	const batches = chunk(ids, BATCH);

	console.log(`대상 storyarc: ${ids.length}개`);
	console.log(`설정: base=${BASE} concurrency=${CONCURRENCY} batch=${BATCH} skipGenerate=${SKIP_GENERATE}`);
	batches.forEach((b, i) => console.log(`  배치 ${i + 1}/${batches.length}: ${b.join(', ')}`));

	if (DRY_RUN) {
		console.log('\n[dry-run] 네트워크 호출 없이 종료.');
		return;
	}

	const allOk = [];
	const allFailed = [];
	for (let i = 0; i < batches.length; i++) {
		process.stdout.write(`\n▶ 배치 ${i + 1}/${batches.length} 실행 중...\n`);
		try {
			const data = await runBatch(batches[i]);
			allOk.push(...(data.ok ?? []));
			allFailed.push(...(data.failed ?? []));
			console.log(`  완료: ok=${data.okCount ?? 0} failed=${data.failedCount ?? 0}`);
			if (data.failed?.length) {
				for (const f of data.failed) console.log(`    ✗ ${f.id} [${f.step}${f.order ? ` order ${f.order}` : ''}] ${f.error}`);
			}
		} catch (e) {
			console.error(`  배치 실패: ${e instanceof Error ? e.message : String(e)}`);
			batches[i].forEach((id) => allFailed.push({ id, step: 'batch', error: String(e) }));
		}
	}

	console.log(`\n=== 전체 요약 ===`);
	console.log(`성공 아크: ${allOk.length}/${ids.length}`);
	console.log(`실패: ${allFailed.length}`);
	if (allFailed.length) {
		console.log('실패 재시도: npm run gen:snowy-test -- --skip-generate (생성 결과 재사용)');
		process.exitCode = 1;
	}
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
