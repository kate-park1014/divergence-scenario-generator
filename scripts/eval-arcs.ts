// 프롬프트 회귀 테스트: 고정 보스 세트로 스토리아크·시나리오를 새로 만들어 eval/runs/<시각>/ 에만 저장한다.
// output_list·src/lib/data/generated·테마 디렉토리는 건드리지 않는다 (스토리아크는 임시 _eval 폴더에 썼다가 지운다).
// 결과 <key>.md 를 story-tester 에이전트로 eval/checklist.md 와 함께 평가해 이전 run 과 비교한다 (체크리스트 통과 수가 주 지표).
//
//   npm run dev &                          # 5178 (/api/gemini, /api/storyarc/bulk 사용)
//   npm run eval:arcs                      # 스토리아크부터 새로 (스토리아크·시나리오 프롬프트 둘 다 테스트)
//   npm run eval:arcs -- --keep-arc        # 등록된 기존 아크로 시나리오만 (시나리오 프롬프트만 테스트)
//   npm run eval:arcs -- --boss=carnivex   # 세트 중 일부만
//   npm run eval:arcs -- --arc-only        # 시나리오 없이 아크만 (<key>.arc.ts + <key>.boss.json → eval/checklist_arc.md 로 평가)

import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { buildScenarioPrompt, buildScenarioTool } from '$lib/prompts/chapter/chapterGen';
import { buildScenarioBase } from '$lib/data/sample/scenarioBase';
import { getStoryarc } from '$lib/data/storyarc';
import { ensureNpcEnter } from '$lib/server/ensureNpcEnter';
import type { StoryArc } from '$lib/types';

// 고정 테스트 세트. 바꾸면 이전 run 과 비교할 수 없으니 늘리기만 한다
const EVAL_SET = [
	{ theme: 'desert', bossList: 'boss_list/bulk/desert_20261116_114401.json', bossId: 'GlassCalamity_Aserah_V1', key: 'aserah', arcId: 'desert_aserah_41' }, // tragic: 사죄로 푸는 결말
	{ theme: 'desert', bossList: 'boss_list/bulk/desert_20261116_114401.json', bossId: 'BoneScab_Carnivex_V1', key: 'carnivex', arcId: 'desert_carnivex_42' }, // horror: 겉모습(길잡이) 반전
	// 아래 3개: 1화 위기를 지어낸 장치로 만들던 보스 (서리 봉인·태엽 열쇠·봉인 주술)
	{ theme: 'hell', bossList: 'eval/fixtures/hell_philomel_1118.json', bossId: 'MartyrCradle_Philomel_V1', key: 'philomel', arcId: 'hell_philomel_39' }, // 탐험대와 얽히는 이유가 없던 11/18 카드
	{ theme: 'hell', bossList: 'boss_list/bulk/hell_20261116_164915.json', bossId: 'Jester_Razzle_V1', key: 'razzle', arcId: 'hell_razzle_34' },
	{ theme: 'hell', bossList: 'boss_list/bulk/hell_20261116_164915.json', bossId: 'SoulBroker_Vane_V1', key: 'vane', arcId: 'hell_vane_35' }
];

const BASE = process.env.BASE ?? 'http://localhost:5178';
const args = process.argv.slice(2);
const keepArc = args.includes('--keep-arc');
const arcOnly = args.includes('--arc-only');
const only = args.find((a) => a.startsWith('--boss='))?.slice('--boss='.length).split(',');
const ROOT = process.cwd();
const runDir = join(ROOT, 'eval/runs', new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19));

type Line = { type?: string; speaker?: string; action?: string; direction?: string; content?: { korean?: string } };
type Room = { id: number; dialogue?: Line[]; win_dialogue?: Line[]; lose_dialogue?: Line[] };

async function post(path: string, body: unknown) {
	const res = await fetch(BASE + path, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
	const data = await res.json().catch(() => null);
	if (!res.ok) throw new Error(`${path} ${res.status}: ${data?.error ?? ''}`);
	return data;
}

// bulk-pipeline 과 같은 재생성 조건 (빈 대사·placeholder 글자)
const badSpeech = (rooms: Room[]) =>
	rooms
		.flatMap((r) => [...(r.dialogue ?? []), ...(r.win_dialogue ?? []), ...(r.lose_dialogue ?? [])])
		.filter((x) => x.type === 'speech' && (!x.content?.korean || /character_(any|[1-4])/.test(x.content.korean))).length;

const loadBoss = (item: (typeof EVAL_SET)[number]) =>
	JSON.parse(readFileSync(join(ROOT, item.bossList), 'utf8')).bosses.find((b: { id: string }) => b.id === item.bossId);

async function makeArc(item: (typeof EVAL_SET)[number]): Promise<StoryArc> {
	if (keepArc) return getStoryarc(item.arcId)!;
	const boss = loadBoss(item);
	const outDirName = `_eval_${item.key}`;
	const r = await post('/api/storyarc/bulk', { theme: item.theme, bosses: [boss], mapping: [{ key: item.key, pool: `pool_${item.bossId}` }], outDirName, concurrency: 1 });
	if (r.failedCount) throw new Error(JSON.stringify(r.failed));
	const dir = join(ROOT, 'src/lib/data/storyarc', outDirName);
	const file = join(dir, `storyarc_${item.theme}_${item.key}_0.ts`);
	const text = readFileSync(file, 'utf8');
	rmSync(dir, { recursive: true });
	return JSON.parse(text.slice(text.indexOf('= {') + 2).trim().replace(/;$/, ''));
}

async function makeScenario(arc: StoryArc, order: number) {
	let result: { rooms?: Room[] } | undefined;
	for (let attempt = 0; attempt < 3; attempt++) {
		const data = await post('/api/gemini', {
			message: buildScenarioPrompt(order, arc),
			tools: [buildScenarioTool(order)],
			tool_choice: { type: 'function', function: { name: 'generate_scenario_content' } }
		});
		result = data?.tool_result;
		if (result && badSpeech(result.rooms ?? []) === 0) break;
	}
	const scenario = { ...buildScenarioBase(order, arc), ...result } as { rooms: Room[] } & Record<string, unknown>;
	const isNpc = (s: string) => !['narrator', 'boss', 'random_boss'].includes(s) && !s.startsWith('character_');
	ensureNpcEnter(scenario.rooms as never, isNpc);
	return scenario;
}

// story-tester 가 읽을 md: 아크 요약 + 화별 대사
function toMarkdown(arc: StoryArc, scenarios: ({ rooms: Room[] } & Record<string, unknown>)[]) {
	const out = [`# ${arc.chapter_name?.korean ?? arc.id}`, '', `목표: ${arc.protagonist_goal}`, ''];
	for (const [i, s] of scenarios.entries()) {
		const outline = arc.scenarioOutline[i];
		out.push(`## ${i + 1}화 ${outline.title}`, '', `> ${outline.summary}`, '');
		const pro = (s.prologue as { korean?: string[] })?.korean;
		if (pro) out.push(...pro.map((l) => `_${l}_`), '');
		for (const room of s.rooms) {
			for (const block of ['dialogue', 'win_dialogue', 'lose_dialogue'] as const) {
				if (!room[block]?.length) continue;
				out.push(`### 방 ${room.id}${block === 'dialogue' ? '' : ` (${block === 'win_dialogue' ? '승리' : '패배'})`}`);
				for (const l of room[block]!) {
					out.push(l.type === 'speech' ? `- **${l.speaker}**: ${l.content?.korean ?? ''}` : `- _[${l.speaker} ${l.action}${l.direction ? ` ${l.direction}` : ''}]_`);
				}
				out.push('');
			}
		}
		const epi = (s.epilogue as { korean?: string[] })?.korean;
		if (epi) out.push('### 에필로그', ...epi.map((l) => `_${l}_`), '');
	}
	return out.join('\n');
}

mkdirSync(runDir, { recursive: true });
const targets = EVAL_SET.filter((x) => !only || only.includes(x.key));
await Promise.all(
	targets.map(async (item) => {
		try {
			const arc = await makeArc(item);
			if (arcOnly) {
				const { id, name, appearance, surface_identity, true_identity, motivation, twist, tone } = loadBoss(item);
				writeFileSync(join(runDir, `${item.key}.arc.ts`), `export const arc = ${JSON.stringify(arc, null, '\t')};\n`);
				writeFileSync(join(runDir, `${item.key}.boss.json`), JSON.stringify({ id, name, appearance, surface_identity, true_identity, motivation, twist, tone }, null, '\t'));
				console.log('ok', item.key);
				return;
			}
			const scenarios = await Promise.all([1, 2, 3, 4, 5].map((o) => makeScenario(arc, o)));
			writeFileSync(join(runDir, `${item.key}.json`), JSON.stringify({ arc, scenarios }, null, '\t'));
			writeFileSync(join(runDir, `${item.key}.md`), toMarkdown(arc, scenarios));
			console.log('ok', item.key);
		} catch (e) {
			console.log('failed', item.key, e instanceof Error ? e.message : e);
		}
	})
);
console.log(runDir);
