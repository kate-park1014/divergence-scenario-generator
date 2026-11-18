#!/usr/bin/env node
// 챕터 JSON(output_list) 을 플레이테스트용 텍스트로 뽑는다: 한국어 대사 + 짝 스토리아크.
// chapter-playtester 에이전트가 JSON 전체(이미지 URL·번역·actors) 대신 이걸 읽어 토큰을 줄인다.
//
// 사용법: node scripts/chapter-script.mjs output_list/desert_chapter_43.json
// 대사 번호는 JSON 배열 인덱스 그대로다 (리뷰에서 위치 인용용).

import { readFileSync, existsSync } from 'node:fs';
import { basename } from 'node:path';

const file = process.argv[2];
if (!file) {
	console.error('사용법: node scripts/chapter-script.mjs <chapter.json>');
	process.exit(1);
}
const ch = JSON.parse(readFileSync(file, 'utf8'));
const out = [];

// 짝 아크: scenario_id 에서 끝의 _NN 을 뗀 것이 아크 id
const arcId = ch.scenarios[0].scenario_id.replace(/_\d+$/, '');
const arcPath = `src/lib/data/storyarc/${ch.scenarios[0].theme}/storyarc_${arcId}.ts`;

out.push(`# 챕터: ${ch.chapter_name?.korean ?? ''} (${basename(file)})`);
out.push(`# 아크: ${existsSync(arcPath) ? arcPath : `(없음: ${arcPath})`}`);

if (existsSync(arcPath)) {
	const src = readFileSync(arcPath, 'utf8');
	try {
		const arc = JSON.parse(src.slice(src.indexOf('= {') + 2, src.lastIndexOf('}') + 1));
		const { world, protagonist_goal, final_boss, global_foreshadowing, npc_roles, scenarioOutline, act_summary } = arc;
		out.push('', '## 아크 (작가의 의도 — 플레이어는 못 봄)');
		const keep = { world, protagonist_goal, final_boss, global_foreshadowing, npc_roles, scenarioOutline, act_summary };
		for (const [k, v] of Object.entries(keep)) if (v !== undefined) out.push(`${k}: ${JSON.stringify(v)}`);
	} catch {
		out.push('(아크를 JSON 으로 못 읽음 — 아크 파일을 직접 Read 할 것)');
	}
}

const line = (l, i) => {
	if (l.type === 'direction') {
		const dir = l.direction ? ` ${l.direction}` : '';
		return `${i} [${l.speaker} ${l.action}${dir}]`;
	}
	return `${i} ${l.speaker}(${l.emotion ?? 'base'}): ${l.content?.korean ?? ''}`;
};

out.push('', '## 대본 (플레이어가 보는 것)');
for (const s of ch.scenarios) {
	const title = s.random_boss_title?.korean ? ` 일반보스:${s.random_boss_title.korean}` : '';
	out.push('', `=== ${s.order}화 (${s.scenario_id}) boss:${s.boss?.pool_id ?? s.boss}${title}`);
	(s.prologue?.korean ?? []).forEach((t, i) => out.push(`[prologue ${i}] ${t}`));
	for (const r of s.rooms) {
		for (const key of ['dialogue', 'win_dialogue', 'lose_dialogue']) {
			if (!r[key]) continue;
			out.push(`-- 방 ${r.id}${key === 'dialogue' ? '' : ` ${key.replace('_dialogue', '')}`}`);
			r[key].forEach((l, i) => out.push(line(l, i)));
		}
	}
	(s.epilogue?.korean ?? []).forEach((t, i) => out.push(`[epilogue ${i}] ${t}`));
}

console.log(out.join('\n'));
