#!/usr/bin/env node
// boss_pool_map.js 의 각 보스 entry `pool` 값을 monster_pool_map.json 의 pool_id(pool_NNN) 로 교체.
//
// BOSS_POOL_MAP[theme] = [{ key, pool }, ...]. key 는 정규화된 보스명이므로
// monster_pool_map 의 normalize(boss_name) 과 매칭(exact → prefix 유니크 폴백, theme 경계 유지).
// 교체는 pool 리터럴 1개씩 타깃 치환 → 포맷/주석/diff 최소 보존.
//
// 사용법: node scripts/apply-pool-ids-to-bossmap.mjs [--dry-run]

import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const FILE = join(ROOT, 'src/lib/data/storyarc/boss_pool_map.js');
const DRY = process.argv.includes('--dry-run');

const norm = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, '');

const mp = JSON.parse(readFileSync(join(ROOT, 'boss_list/monster_pool_map.json'), 'utf8'));
const poolByTheme = {};
for (const e of mp) (poolByTheme[e.theme] ??= {})[norm(e.boss_name)] = e.pool_id;
const themes = new Set(Object.keys(poolByTheme));

function resolve(theme, key) {
	const pool = poolByTheme[theme] || {};
	if (pool[key]) return pool[key];
	const cands = Object.keys(pool).filter((k) => k.startsWith(key));
	return cands.length === 1 ? pool[cands[0]] : null;
}

const lines = readFileSync(FILE, 'utf8').split('\n');
const errors = [];
let theme = null, changed = 0;

const out = lines.map((line) => {
	const h = line.match(/^\t(\w+):\s*\[/);
	if (h && themes.has(h[1])) { theme = h[1]; return line; }
	const m = line.match(/(\{\s*key:\s*')([^']+)(',\s*pool:\s*')([^']+)('\s*\}.*)/);
	if (!m || !theme) return line;
	const key = m[2];
	const pool = resolve(theme, key);
	if (!pool) { errors.push(`[${theme}] 매칭 실패: key="${key}"`); return line; }
	if (pool !== m[4]) changed++;
	return `${m[1]}${key}${m[3]}${pool}${m[5]}`;
});

if (errors.length) {
	console.error(`매칭 실패 ${errors.length}건:`);
	for (const e of errors) console.error('  - ' + e);
	process.exit(1);
}
if (!DRY) writeFileSync(FILE, out.join('\n'));
console.log(`${DRY ? '[DRY] ' : ''}boss_pool_map.js pool 교체: ${changed}건, 실패 0건.`);
