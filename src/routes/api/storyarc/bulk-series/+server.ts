import { json } from '@sveltejs/kit';
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import {
	buildSeriesPlanPrompt,
	buildSeriesChapterPrompt,
	seriesPlanTool,
	seriesChapterTool,
	type SeriesBossInput,
	type NpcInput
} from '$lib/prompts/seriesGen';
import { npc_by_theme } from '$lib/data/sample/npc_pool';
import type { RequestHandler } from './$types';

/**
 * boss_list 기반 시리즈 스토리아크 일괄 생성 → snowy_test 덮어쓰기.
 * 보스당: 비트시트 1회 → 편 N개(순차). 보스끼리는 병렬.
 * level = bossIndex + (chapter-1)*10. order5.boss = 보스 pool (결정론적 주입).
 *
 * body:
 *  - theme?: 'snowy'            (기본 snowy)
 *  - chapters?: number          편수 N (기본 3)
 *  - concurrency?: number       보스 동시 실행 수 (기본 3, 1~10)
 *  - bossIndices?: number[]     생성할 보스 인덱스 부분집합 (스모크 테스트용)
 *  - dryRun?: boolean           LLM 호출 없이 대상/매핑만 반환
 */

// boss_list 순서(=bossIndex)에 맞춘 고정 매핑. pool 은 보스 정체성에 종속.
const SNOWY_SERIES: { key: string; pool: string }[] = [
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

const DEFAULT_BOSS_LIST = 'boss_list/snowy_20260612_144438.json';
const SNOWY_TEST_DIR = 'src/lib/data/storyarc/snowy_test';

type Failure = { boss: string; step: string; chapter?: number; error: string };

export const POST: RequestHandler = async ({ request, fetch }) => {
	const body = await request.json();
	const theme: string = body.theme ?? 'snowy';
	const chapters: number = Math.max(1, Number(body.chapters) || 3);
	const concurrency = Math.max(1, Math.min(10, Number(body.concurrency) || 3));
	const dryRun: boolean = Boolean(body.dryRun);
	const bossIndices: number[] | undefined = Array.isArray(body.bossIndices)
		? body.bossIndices.map(Number)
		: undefined;

	if (theme !== 'snowy') {
		return json({ error: 'snowy 외 테마는 아직 지원하지 않습니다.' }, { status: 400 });
	}

	// boss_list 로드
	let bosses: SeriesBossInput[];
	try {
		const raw = await readFile(join(process.cwd(), body.bossListFile ?? DEFAULT_BOSS_LIST), 'utf-8');
		bosses = JSON.parse(raw).bosses;
	} catch (e) {
		return json({ error: `boss_list 로드 실패: ${e instanceof Error ? e.message : String(e)}` }, { status: 500 });
	}
	if (!Array.isArray(bosses) || bosses.length !== SNOWY_SERIES.length) {
		return json({ error: `boss_list 보스 수(${bosses?.length})가 매핑(${SNOWY_SERIES.length})과 다릅니다.` }, { status: 400 });
	}

	const npcs: NpcInput[] = npc_by_theme.snowy.map((n) => ({
		key: n.key,
		name_korean: n.name.korean,
		name_english: n.name.english
	}));

	const levelFor = (idx: number, chapter: number) => idx + (chapter - 1) * 10;
	const fileFor = (key: string, level: number) => `storyarc_snowy_${key}_${level}.ts`;

	// 대상 인덱스
	const targets = SNOWY_SERIES.map((_, i) => i).filter((i) => !bossIndices || bossIndices.includes(i));

	// dry-run: 대상/매핑만
	if (dryRun) {
		const plan = targets.map((i) => ({
			bossIndex: i,
			boss_id: bosses[i].id,
			boss_name: bosses[i].name,
			key: SNOWY_SERIES[i].key,
			pool: SNOWY_SERIES[i].pool,
			chapters: Array.from({ length: chapters }, (_, k) => ({
				chapter: k + 1,
				level: levelFor(i, k + 1),
				file: fileFor(SNOWY_SERIES[i].key, levelFor(i, k + 1))
			}))
		}));
		return json({ dryRun: true, theme, chapters, count: targets.length, plan });
	}

	const failed: Failure[] = [];
	const ok: string[] = [];

	async function gemini(message: string, tools: unknown, fnName: string) {
		const res = await fetch('/api/gemini', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ message, tools, tool_choice: { type: 'function', function: { name: fnName } } })
		});
		const data = await res.json().catch(() => null);
		if (!res.ok || !data?.tool_result) {
			throw new Error(data?.error ?? `gemini ${res.status}`);
		}
		return data.tool_result as Record<string, unknown>;
	}

	function summarize(arc: Record<string, unknown>): string {
		const cn = (arc.chapter_name as Record<string, string>)?.korean ?? '';
		const as = arc.act_summary as Record<string, string> | undefined;
		return `${cn} — ${as?.intro ?? ''} / ${as?.rising ?? ''} / ${as?.climax_finale ?? ''}`;
	}

	async function processBoss(idx: number): Promise<void> {
		const boss = bosses[idx];
		const { key, pool } = SNOWY_SERIES[idx];

		// 1) 비트시트
		let plan: Record<string, unknown>;
		try {
			plan = await gemini(buildSeriesPlanPrompt(boss, npcs, theme, chapters), seriesPlanTool, 'generate_series_plan');
		} catch (e) {
			failed.push({ boss: key, step: 'plan', error: e instanceof Error ? e.message : String(e) });
			return;
		}

		// 2) 편별 (순차 — 이전 편 요약 누적)
		const prevSummaries: string[] = [];
		for (let chapter = 1; chapter <= chapters; chapter++) {
			const level = levelFor(idx, chapter);
			const id = `snowy_${key}_${level}`;
			const exportName = `storyarc_snowy_${key}_${level}`;
			try {
				const gen = await gemini(
					buildSeriesChapterPrompt(boss, npcs, theme, plan, chapter, chapters, prevSummaries),
					seriesChapterTool,
					'generate_series_chapter'
				);

				// 결정론적 필드 주입
				const fb = (gen.final_boss ?? {}) as Record<string, unknown>;
				const outline = Array.isArray(gen.scenarioOutline) ? (gen.scenarioOutline as Record<string, unknown>[]) : [];
				outline.forEach((s) => {
					s.boss = s.order === 5 ? pool : 'random_boss';
				});
				const at = (gen.act_tone ?? {}) as Record<string, Record<string, unknown>>;
				if (at.intro) at.intro.tension = 1;
				if (at.rising) at.rising.tension = 3;
				if (at.climax_finale) at.climax_finale.tension = 5;

				const arc = {
					id,
					level,
					chapter_name: gen.chapter_name,
					theme: 'snowy',
					rising_count: 3,
					world: gen.world,
					protagonist_goal: gen.protagonist_goal,
					act_tone: at,
					final_boss: { ...fb, id: boss.id, name: boss.name },
					global_foreshadowing: gen.global_foreshadowing,
					npc_roles: gen.npc_roles,
					scenarioOutline: outline,
					act_summary: gen.act_summary
				};

				const content = `import type { StoryArc } from '$lib/types';\n\nexport const ${exportName}: StoryArc = ${JSON.stringify(arc, null, '\t')};\n`;
				await writeFile(join(process.cwd(), SNOWY_TEST_DIR, fileFor(key, level)), content, 'utf-8');

				prevSummaries.push(summarize(arc));
				ok.push(id);
			} catch (e) {
				failed.push({ boss: key, step: 'chapter', chapter, error: e instanceof Error ? e.message : String(e) });
				// 이후 편은 이전 편 맥락이 비므로 계속하되 실패 기록
			}
		}
	}

	// 보스 단위 병렬 워커풀
	let cursor = 0;
	async function worker(): Promise<void> {
		while (cursor < targets.length) {
			const i = targets[cursor++];
			await processBoss(i);
		}
	}
	await Promise.all(Array.from({ length: concurrency }, () => worker()));

	return json({ theme, chapters, bosses: targets.length, okCount: ok.length, ok, failedCount: failed.length, failed });
};
