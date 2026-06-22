import { json } from '@sveltejs/kit';
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import {
	buildStoryarcPrompt,
	storyarcGenTool,
	type BossInput,
	type NpcInput
} from '$lib/prompts/storyarcGen';
import { BOSS_POOL_MAP, BOSS_LIST_FILE, OUT_DIR } from '$lib/data/storyarc/boss_pool_map';
import { npc_by_theme } from '$lib/data/sample/npc_pool';
import type { RequestHandler } from './$types';

/**
 * boss_list 기반 스토리아크 일괄 생성 → 테마 디렉토리 덮어쓰기.
 * 보스당 1개 아크(단발). 보스끼리는 병렬.
 * level = bossIndex. order5.boss = 보스 pool (결정론적 주입).
 *
 * body:
 *  - theme?: 'snowy'|'modern'|'desert'   (기본 snowy)
 *  - concurrency?: number                보스 동시 실행 수 (기본 3, 1~10)
 *  - bossIndices?: number[]              생성할 보스 인덱스 부분집합 (스모크 테스트용)
 *  - dryRun?: boolean                    LLM 호출 없이 대상/매핑만 반환
 *  - bossListFile?: string               boss_list 경로 오버라이드 (선택)
 */

type Failure = { boss: string; step: string; error: string };

export const POST: RequestHandler = async ({ request, fetch }) => {
	const body = await request.json();
	const theme: string = body.theme ?? 'snowy';
	const concurrency = Math.max(1, Math.min(10, Number(body.concurrency) || 3));
	const dryRun: boolean = Boolean(body.dryRun);
	const bossIndices: number[] | undefined = Array.isArray(body.bossIndices)
		? body.bossIndices.map(Number)
		: undefined;

	const SERIES = BOSS_POOL_MAP[theme as keyof typeof BOSS_POOL_MAP];
	const npcPool = npc_by_theme[theme as keyof typeof npc_by_theme];
	if (!SERIES || !npcPool) {
		return json({ error: `지원하지 않는 테마: ${theme} (snowy, modern, desert 만 가능)` }, { status: 400 });
	}
	const defaultBossList = BOSS_LIST_FILE[theme as keyof typeof BOSS_LIST_FILE];
	const outDir = OUT_DIR[theme as keyof typeof OUT_DIR];

	// boss_list 로드
	let bosses: BossInput[];
	try {
		const raw = await readFile(join(process.cwd(), body.bossListFile ?? defaultBossList), 'utf-8');
		bosses = JSON.parse(raw).bosses;
	} catch (e) {
		return json({ error: `boss_list 로드 실패: ${e instanceof Error ? e.message : String(e)}` }, { status: 500 });
	}
	if (!Array.isArray(bosses) || bosses.length !== SERIES.length) {
		return json({ error: `boss_list 보스 수(${bosses?.length})가 매핑(${SERIES.length})과 다릅니다.` }, { status: 400 });
	}

	const npcs: NpcInput[] = npcPool.map((n) => ({
		key: n.key,
		name_korean: n.name.korean,
		name_english: n.name.english
	}));

	const fileFor = (key: string, level: number) => `storyarc_${theme}_${key}_${level}.ts`;

	// 대상 인덱스
	const targets = SERIES.map((_, i) => i).filter((i) => !bossIndices || bossIndices.includes(i));

	// dry-run: 대상/매핑만
	if (dryRun) {
		const plan = targets.map((i) => ({
			bossIndex: i,
			boss_id: bosses[i].id,
			boss_name: bosses[i].name,
			key: SERIES[i].key,
			pool: SERIES[i].pool,
			level: i,
			file: fileFor(SERIES[i].key, i)
		}));
		return json({ dryRun: true, theme, count: targets.length, plan });
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

	async function processBoss(idx: number): Promise<void> {
		const boss = bosses[idx];
		const { key, pool } = SERIES[idx];
		const level = idx;
		const id = `${theme}_${key}_${level}`;
		const exportName = `storyarc_${theme}_${key}_${level}`;

		try {
			const gen = await gemini(
				buildStoryarcPrompt(boss, npcs, theme),
				storyarcGenTool,
				'generate_storyarc'
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
				theme,
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
			await writeFile(join(process.cwd(), outDir, fileFor(key, level)), content, 'utf-8');

			ok.push(id);
		} catch (e) {
			failed.push({ boss: key, step: 'generate', error: e instanceof Error ? e.message : String(e) });
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

	return json({ theme, bosses: targets.length, okCount: ok.length, ok, failedCount: failed.length, failed });
};
