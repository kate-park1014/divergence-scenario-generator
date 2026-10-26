#!/usr/bin/env node
// 칸 고정 카드(card-seq-pipeline 출력) → webfront 모험 테스트 화면 데이터로 복사.
// 네트워크 없음. webfront 쪽 파일을 덮어씀 (webfront 는 git 으로 되돌릴 수 있음).
//
//   npm run to:webfront -- --story=modern_solace_3 --tab=new_solace
//   npm run to:webfront -- --story=modern_whisperweb_0 --tab=new_whisperweb --orders=1,2
//
// 옵션:
//   --story=<id>     (필수) output_list/rewrite_test/<id>/ 의 스토리
//   --tab=<이름>     webfront 스토리 탭 폴더 (data/stories/test/<탭>/scenarios.json). 기본 new_<스토리 이름>
//   --orders=1,2     카드·additions 를 옮길 시나리오 (기본: 카드가 있는 것 전부). 스토리 파일은 항상 5개 전부
//   --dry-run        쓰지 않고 바꿀 내용만 출력
//
// 옮기면서 고치는 것 (webfront data.test.ts 규칙):
//   - tags 문자열 → 배열
//   - effects 에 들어간 보상 이름 → reward 로 옮김 (event 가 있으면 버림), 없는 수치는 버림
//   - reward 의 gold 는 버림 (effects.gold 로 처리)
//   - additions: 같은 얼굴을 두 인물이 쓰면 뒤 인물을 portrait_needed 로
// 끝나면 webfront 의 data.test.ts 를 돌려 확인할 것

import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const args = Object.fromEntries(
	process.argv
		.slice(2)
		.map((a) => a.match(/^--([^=]+)(?:=(.*))?$/))
		.filter(Boolean)
		.map((m) => [m[1], m[2] ?? true])
);
if (!args.story) {
	console.error('--story=<id> 가 필요합니다');
	process.exit(1);
}
const story = String(args.story);
const tab = String(args.tab ?? `new_${story.split('_')[1]}`);
const dry = !!args['dry-run'];
const SRC = join('output_list/rewrite_test', story);
const WEB = process.env.WEBFRONT_DATA_DIR || '../project-mj-webfront/src/routes/(app)/test/adventure/data';
const engine = readFileSync(join(WEB, '..', 'engine.svelte.ts'), 'utf-8');

// webfront 엔진의 수치·보상 이름
const block = (name) => engine.slice(engine.indexOf(`export const ${name}`), engine.indexOf('};', engine.indexOf(`export const ${name}`)));
const keys = (b) => [...b.matchAll(/^\t(\w+):/gm)].map((m) => m[1]);
const STATS = keys(block('LABEL'));
const REWARDS = keys(block('REWARD'));

const read = (f) => JSON.parse(readFileSync(f, 'utf-8'));
const fixes = [];

function fixChoice(ch, at) {
	if (!ch) return;
	const reward = (Array.isArray(ch.reward) ? ch.reward : ch.reward ? [ch.reward] : []).filter((r) => {
		if (r === 'gold') fixes.push(`${at}: reward 의 gold 버림`);
		return r !== 'gold';
	});
	for (const k of Object.keys(ch.effects ?? {})) {
		if (STATS.includes(k)) continue;
		if (REWARDS.includes(k) && !ch.event && !reward.includes(k)) reward.push(k);
		fixes.push(`${at}: effects.${k} → ${REWARDS.includes(k) && !ch.event ? 'reward' : '버림'}`);
		delete ch.effects[k];
	}
	if (reward.length && !ch.event) ch.reward = reward;
	else delete ch.reward;
	if (ch.event_options?.avoid) fixChoice(ch.event_options.avoid, `${at}.avoid`);
}

// 1) 스토리 탭: 시나리오 5개
const scenarios = [1, 2, 3, 4, 5].map((o) => join(SRC, `scenario_0${o}.json`)).filter(existsSync).map(read);
const storyFile = join(WEB, 'stories/test', tab, 'scenarios.json');
console.log(`스토리 ${scenarios.length}개 → ${storyFile}`);
if (!dry) {
	mkdirSync(join(WEB, 'stories/test', tab), { recursive: true });
	writeFileSync(storyFile, JSON.stringify({ scenarios }, null, '\t') + '\n');
}

// 2) 카드·additions
const orders = typeof args.orders === 'string' ? args.orders.split(',').map(Number) : [1, 2, 3, 4, 5];
for (const o of orders) {
	const dir = join(SRC, 'cards', `0${o}`);
	if (!existsSync(join(dir, 'additions.json'))) {
		console.log(`0${o}: 카드 없음 — 건너뜀`);
		continue;
	}
	const sid = `${story}_0${o}`;
	const files = readdirSync(dir).filter((f) => f.startsWith('card_') && f.endsWith('.json'));
	const out = join(WEB, 'cards', sid);
	if (!dry) {
		rmSync(out, { recursive: true, force: true });
		mkdirSync(out, { recursive: true });
	}
	for (const f of files) {
		const c = read(join(dir, f));
		if (typeof c.tags === 'string') {
			c.tags = [c.tags];
			fixes.push(`${c.id}: tags 문자열 → 배열`);
		}
		(c.choices ?? []).forEach((ch, i) => fixChoice(ch, `${c.id}[${i}]`));
		(c.forced ?? []).forEach((ch, i) => fixChoice(ch, `${c.id}.forced[${i}]`));
		if (!dry) writeFileSync(join(out, f), JSON.stringify(c, null, '\t') + '\n');
	}
	const a = read(join(dir, 'additions.json'));
	const faces = new Map();
	for (const [id, x] of Object.entries(a.actors ?? {})) {
		if (!x.base_image_url) continue;
		if (faces.has(x.base_image_url)) {
			const other = faces.get(x.base_image_url);
			delete x.base_image_url;
			delete x.base_image_nobg_url;
			x.portrait_needed = { korean: `${x.name?.korean ?? id} (${other} 와 얼굴이 겹쳐 새 얼굴 필요)` };
			fixes.push(`${sid} additions: ${id} 얼굴이 겹쳐 portrait_needed`);
		} else faces.set(x.base_image_url, id);
	}
	if (!dry) writeFileSync(join(WEB, 'additions', `${sid}.json`), JSON.stringify(a, null, '\t') + '\n');
	console.log(`0${o}: 카드 ${files.length}장 → ${out}, additions → additions/${sid}.json`);
}
console.log(fixes.length ? `\n고친 것 ${fixes.length}개:\n${fixes.map((x) => `  - ${x}`).join('\n')}` : '\n고친 것 없음');
console.log(`\n확인: (cd ../project-mj-webfront && npx vitest run "src/routes/(app)/test/adventure/data.test.ts")`);
