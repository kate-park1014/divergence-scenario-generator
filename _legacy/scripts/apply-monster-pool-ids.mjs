#!/usr/bin/env node
// monster_pool_map.json 의 pool_id(pool_NNN) 를 storyarc/output 의 climax 보스에 일괄 적용.
//
// - storyarc(.ts): scenarioOutline 마지막 항목의 "boss" 값(비-random_boss, 파일당 1개)을
//   final_boss.name → monster_pool_map 매칭 pool_id 로 치환.
// - output(.json): 마지막 씬의 boss.pool_id(비-random_boss, 파일당 1개)를 동일 pool_id 로 치환.
//   output 은 storyarc 에서 만든 key→pool_id 맵으로 매핑(파일명/scenario_id 의 key 정합 100%).
//
// 전체 파일에서 교체 대상이 항상 정확히 1개임이 검증되어, 전체 재직렬화 없이 타깃 문자열 치환만 수행
// (들여쓰기/포맷/diff 최소 보존).
//
// 사용법:
//   node scripts/apply-monster-pool-ids.mjs [--dry-run] [--theme=snowy,modern,...]

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

const STORYARC_DIR = (theme) => join(ROOT, 'src/lib/data/storyarc', theme);
const OUTPUT_DIR = {
	snowy: join(ROOT, 'output_list/snowy_01-100'),
	modern: join(ROOT, 'output_list/modern_01-80'),
	hell: join(ROOT, 'output_list/hell_01-32'),
	forest: join(ROOT, 'output_list/forest'),
	desert: join(ROOT, 'output_list/desert_01-40')
};
const THEMES = ['snowy', 'modern', 'hell', 'forest', 'desert'];

// ---- args ----
const args = process.argv.slice(2);
const DRY = args.includes('--dry-run');
const themeArg = args.find((a) => a.startsWith('--theme='));
const themes = themeArg ? themeArg.slice('--theme='.length).split(',').map((s) => s.trim()).filter(Boolean) : THEMES;
for (const t of themes) {
	if (!THEMES.includes(t)) {
		console.error(`알 수 없는 theme: ${t} (가능: ${THEMES.join(', ')})`);
		process.exit(2);
	}
}

const norm = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, '');

// ---- monster_pool_map.json → theme별 normalize(name) → pool_id ----
const mp = JSON.parse(readFileSync(join(ROOT, 'boss_list/monster_pool_map.json'), 'utf8'));
const poolByTheme = {}; // theme -> { normName: pool_id }
for (const e of mp) {
	(poolByTheme[e.theme] ??= {})[norm(e.boss_name)] = e.pool_id;
}

// final_boss.name 추출: "final_boss" 블록 안 첫 "name" 키.
function extractFinalBossName(txt) {
	const m = txt.match(/"final_boss"\s*:\s*\{[\s\S]*?"name"\s*:\s*"([^"]+)"/);
	return m ? m[1] : null;
}

// normalize(name) → pool_id. exact → prefix 유니크 폴백.
function resolvePool(theme, name) {
	const pool = poolByTheme[theme] || {};
	const n = norm(name);
	if (pool[n]) return pool[n];
	const cands = Object.keys(pool).filter((k) => k.startsWith(n));
	if (cands.length === 1) return pool[cands[0]];
	return null; // 0건 또는 2건 이상 → 에러
}

// 비-random_boss 인 `"<field>": "..."` 가 정확히 1개임을 확인하고 newPool 로 치환.
function replaceSingleBoss(txt, field, newPool) {
	const re = new RegExp(`("${field}"\\s*:\\s*")(?!random_boss")([^"]+)(")`, 'g');
	const matches = [...txt.matchAll(re)];
	if (matches.length !== 1) return { ok: false, count: matches.length };
	const out = txt.replace(re, `$1${newPool}$3`);
	return { ok: true, out, old: matches[0][2] };
}

const errors = [];
const summary = {};

for (const theme of themes) {
	const keyToPool = {};
	let saCount = 0, outCount = 0;

	// ---- storyarc 패스 ----
	const saDir = STORYARC_DIR(theme);
	for (const file of readdirSync(saDir).filter((f) => f.endsWith('.ts'))) {
		const full = join(saDir, file);
		const km = basename(file, '.ts').match(new RegExp(`^storyarc_${theme}_(.+)_(\\d+)$`));
		if (!km) { errors.push(`[${theme}] 파일명 파싱 실패: ${file}`); continue; }
		const key = km[1];

		const txt = readFileSync(full, 'utf8');
		const name = extractFinalBossName(txt);
		if (!name) { errors.push(`[${theme}] final_boss.name 미발견: ${file}`); continue; }

		const pool = resolvePool(theme, name);
		if (!pool) { errors.push(`[${theme}] pool 매칭 실패: ${file} (name="${name}")`); continue; }
		keyToPool[key] = pool;

		const r = replaceSingleBoss(txt, 'boss', pool);
		if (!r.ok) { errors.push(`[${theme}] storyarc boss 치환 대상 ${r.count}개(≠1): ${file}`); continue; }
		if (r.old !== pool) {
			if (!DRY) writeFileSync(full, r.out);
			saCount++;
		}
	}

	// ---- output 패스 ----
	const outDir = OUTPUT_DIR[theme];
	for (const file of readdirSync(outDir).filter((f) => f.endsWith('.json'))) {
		const full = join(outDir, file);
		const txt = readFileSync(full, 'utf8');
		const sid = txt.match(/"scenario_id"\s*:\s*"([^"]+)"/);
		if (!sid) { errors.push(`[${theme}] scenario_id 미발견: ${file}`); continue; }
		const km = sid[1].match(new RegExp(`^${theme}_(.+)_(\\d+)_(\\d+)$`));
		if (!km) { errors.push(`[${theme}] scenario_id 파싱 실패: ${file} (${sid[1]})`); continue; }
		const key = km[1];

		const pool = keyToPool[key];
		if (!pool) { errors.push(`[${theme}] output key→pool 미매칭: ${file} (key="${key}")`); continue; }

		const r = replaceSingleBoss(txt, 'pool_id', pool);
		if (!r.ok) { errors.push(`[${theme}] output pool_id 치환 대상 ${r.count}개(≠1): ${file}`); continue; }
		if (r.old !== pool) {
			if (!DRY) writeFileSync(full, r.out);
			outCount++;
		}
	}

	summary[theme] = { storyarc: saCount, output: outCount };
}

// ---- 요약 ----
console.log(DRY ? '== DRY RUN (쓰기 없음) ==' : '== 적용 완료 ==');
let totalSa = 0, totalOut = 0;
for (const theme of themes) {
	const s = summary[theme];
	totalSa += s.storyarc;
	totalOut += s.output;
	console.log(`  ${theme.padEnd(7)} storyarc=${s.storyarc}  output=${s.output}`);
}
console.log(`  ${'TOTAL'.padEnd(7)} storyarc=${totalSa}  output=${totalOut}`);

if (errors.length) {
	console.error(`\n매칭/치환 실패 ${errors.length}건:`);
	for (const e of errors) console.error('  - ' + e);
	process.exit(1);
}
console.log('\n실패 0건.');
