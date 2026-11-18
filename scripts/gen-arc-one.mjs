#!/usr/bin/env node
// boss_list 의 보스 한 명을 원하는 level 로 스토리아크 생성 (업로드 모드, /api/storyarc/bulk).
// level = 배열 인덱스라서, 앞자리를 더미로 채워 원하는 level 에 보스를 둔다.
//
// 사용: node scripts/gen-arc-one.mjs <bossListFile> <theme> <BossName> <key> <level> [--dry]
//   예: node scripts/gen-arc-one.mjs boss_list/bulk/hell_20261116_164915.json hell Stampy stampy 30
// 결과: src/lib/data/storyarc/<theme>/storyarc_<theme>_<key>_<level>.ts (덮어씀). pool = 'pool_' + 보스 id.
// 생성 후 index.ts 등록:
//   curl -s -X POST localhost:5178/api/storyarc/bulk -H 'Content-Type: application/json' \
//     -d '{"action":"register","theme":"<theme>","outDirName":"<theme>","entries":[{"key":"<key>","level":<level>}]}'
import { readFileSync } from 'node:fs';
import http from 'node:http';

const [file, theme, name, key, levelS] = process.argv.slice(2);
if (!file || !theme || !name || !key || levelS === undefined) {
	console.error('사용: node scripts/gen-arc-one.mjs <bossListFile> <theme> <BossName> <key> <level> [--dry]');
	process.exit(1);
}
const level = Number(levelS);
const dry = process.argv.includes('--dry');
const d = JSON.parse(readFileSync(file, 'utf8'));
const b = d.bosses.find((x) => x.name === name);
if (!b) throw new Error('boss_list 에 없는 보스: ' + name);
const bosses = Array.from({ length: level + 1 }, (_, i) => (i === level ? b : d.bosses[0]));
const mapping = Array.from({ length: level + 1 }, (_, i) =>
	i === level ? { key, pool: 'pool_' + b.id } : { key: `dummy${i}`, pool: 'x' }
);
const body = JSON.stringify({ theme, bosses, mapping, outDirName: theme, bossIndices: [level], dryRun: dry });
const req = http.request(
	{ hostname: 'localhost', port: 5178, path: '/api/storyarc/bulk', method: 'POST', headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(body) }, timeout: 0 },
	(res) => {
		let s = '';
		res.on('data', (c) => (s += c));
		res.on('end', () => console.log(res.statusCode, s.slice(0, 600)));
	}
);
req.on('error', (e) => console.error(e));
req.end(body);
