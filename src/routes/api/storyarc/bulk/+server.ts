import { json } from '@sveltejs/kit';
import { access, mkdir, readdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import {
	buildStoryPrompt,
	storyTool,
	buildFieldsPrompt,
	fieldsTool,
	mergeStoryarc,
	type BossInput,
	type NpcInput,
	type StoryResult
} from '$lib/prompts/storyarc/storyarcGen';
import { BOSS_POOL_MAP, BOSS_LIST_FILE, OUT_DIR } from '$lib/data/storyarc/boss_pool_map';
import { npc_by_theme } from '$lib/data/npc/npc_pool';
import { clampChapterName } from '$lib/server/storyarcUtil';
import type { RequestHandler } from './$types';

/**
 * boss_list 기반 스토리아크 일괄 생성 → 테마 디렉토리 덮어쓰기.
 * 보스당 1개 아크. 보스당 LLM 2콜(이야기 → 필드), 보스끼리는 병렬.
 * level = bossIndex. order5.boss = 보스 pool (결정론적 주입).
 *
 * body:
 *  - theme?: 'snowy'|'modern'|'desert'   (기본 snowy)
 *  - concurrency?: number                보스 동시 실행 수 (기본 3, 1~10)
 *  - bossIndices?: number[]              생성할 보스 인덱스 부분집합 (스모크 테스트용)
 *  - dryRun?: boolean                    LLM 호출 없이 대상/매핑만 반환
 *  - bossListFile?: string               boss_list 경로 오버라이드 (선택)
 *
 * 업로드 모드 (UI 파일 selector, /storyarcGen 벌크 탭):
 *  - bosses?: BossInput[]                boss_list.bosses 를 직접 전달 (파일 읽기 생략)
 *  - mapping?: {key,pool}[]              bosses 와 같은 순서의 key↔pool (BOSS_POOL_MAP 대체)
 *  - outDirName?: string                 src/lib/data/storyarc/<outDirName> 에 저장 (기본: 테마 디렉토리)
 *
 * 등록 (action='register'): 생성은 하지 않고 이미 쓰인 파일을 index.ts 의 storyarcRegistry 에 등록.
 *  - entries: {key, level}[]  + theme, outDirName
 *  index.ts 변경은 Vite 리로드를 유발하므로 UI 는 전 보스 생성이 끝난 뒤 1회만 호출한다.
 */

type Failure = { boss: string; step: string; error: string };

const STORYARC_ROOT = 'src/lib/data/storyarc';
// UI 벌크 탭이 select 로 보여주는 boss_list 폴더
const BULK_BOSS_LIST_DIR = 'boss_list/bulk';

/**
 * GET           → BULK_BOSS_LIST_DIR 의 boss_list 목록 [{file, theme, count}]
 * GET ?file=x   → 그 파일의 JSON 원문
 */
export const GET: RequestHandler = async ({ url }) => {
	const dir = join(process.cwd(), BULK_BOSS_LIST_DIR);
	const file = url.searchParams.get('file');
	try {
		if (file) {
			if (!/^[\w.-]+\.json$/.test(file)) return json({ error: `잘못된 파일명: ${file}` }, { status: 400 });
			return json(JSON.parse(await readFile(join(dir, file), 'utf-8')));
		}
		const names = (await readdir(dir).catch(() => [] as string[])).filter((n) => n.endsWith('.json')).sort();
		const files = await Promise.all(
			names.map(async (name) => {
				try {
					const data = JSON.parse(await readFile(join(dir, name), 'utf-8'));
					return { file: name, theme: data.theme ?? '', count: Array.isArray(data.bosses) ? data.bosses.length : 0 };
				} catch {
					return { file: name, theme: '', count: 0, invalid: true };
				}
			})
		);
		return json({ dir: BULK_BOSS_LIST_DIR, files });
	} catch (e) {
		return json({ error: e instanceof Error ? e.message : String(e) }, { status: 500 });
	}
};

// index.ts 에 import + storyarcRegistry 항목 추가. 이미 있는 export 는 import 경로만 갱신.
async function registerInIndex(entries: { exportName: string; importPath: string }[]): Promise<void> {
	const indexPath = join(process.cwd(), STORYARC_ROOT, 'index.ts');
	let src = await readFile(indexPath, 'utf-8');
	for (const { exportName, importPath } of entries) {
		const importLine = `import { ${exportName} } from '${importPath}';`;
		const existingImportRe = new RegExp(`^import \\{ ${exportName} \\} from '[^']+';$`, 'm');
		if (existingImportRe.test(src)) {
			src = src.replace(existingImportRe, importLine);
			continue;
		}
		src = src.replace(/^(import type \{ StoryArc \} from '\$lib\/types';)$/m, `${importLine}\n$1`);
		const start = src.indexOf('export const storyarcRegistry');
		const end = src.indexOf('\n];', start);
		if (start < 0 || end < 0) throw new Error('index.ts 에서 storyarcRegistry 배열을 찾지 못함');
		src = `${src.slice(0, end)}\n\t${exportName},${src.slice(end)}`;
	}
	await writeFile(indexPath, src, 'utf-8');
}

export const POST: RequestHandler = async ({ request, fetch }) => {
	const body = await request.json();
	const theme: string = body.theme ?? 'snowy';
	const concurrency = Math.max(1, Math.min(10, Number(body.concurrency) || 3));
	const dryRun: boolean = Boolean(body.dryRun);
	// 이야기 단계 temperature (기본 1.0, body로 override). 필드 단계는 0.5 고정.
	const temperature: number = body.temperature !== undefined ? Number(body.temperature) : 1.0;
	const bossIndices: number[] | undefined = Array.isArray(body.bossIndices)
		? body.bossIndices.map(Number)
		: undefined;

	if (body.action === 'register') {
		const outDirName = String(body.outDirName ?? '');
		const entries: { key: string; level: number }[] = Array.isArray(body.entries) ? body.entries : [];
		if (!/^[a-z0-9_]+$/.test(outDirName) || !/^[a-z0-9_]+$/.test(theme)) {
			return json({ error: 'theme / outDirName 은 영소문자/숫자/_ 만 가능' }, { status: 400 });
		}
		if (!entries.length || entries.some((e) => !/^[a-z0-9]+$/.test(e?.key ?? '') || !Number.isInteger(e?.level))) {
			return json({ error: 'entries 는 {key, level}[] 이어야 합니다.' }, { status: 400 });
		}
		try {
			const resolved = [];
			for (const { key, level } of entries) {
				const base = `storyarc_${theme}_${key}_${level}`;
				await access(join(process.cwd(), STORYARC_ROOT, outDirName, `${base}.ts`));
				resolved.push({ exportName: base, importPath: `./${outDirName}/${base}` });
			}
			await registerInIndex(resolved);
			return json({ registered: resolved.map((r) => r.exportName) });
		} catch (e) {
			return json({ error: `등록 실패: ${e instanceof Error ? e.message : String(e)}` }, { status: 500 });
		}
	}

	const uploaded = Array.isArray(body.bosses);
	const seriesIn: { key: string; pool: string }[] | undefined = uploaded
		? body.mapping
		: BOSS_POOL_MAP[theme as keyof typeof BOSS_POOL_MAP];
	const npcPool = npc_by_theme[theme as keyof typeof npc_by_theme];
	if (!npcPool) {
		return json({ error: `NPC 풀이 없는 테마: ${theme}` }, { status: 400 });
	}
	if (!Array.isArray(seriesIn)) {
		return json(
			{ error: uploaded ? 'mapping 이 필요합니다 (bosses 와 같은 순서의 {key,pool}[])' : `pool 매핑이 없는 테마: ${theme}` },
			{ status: 400 }
		);
	}
	const SERIES = seriesIn;
	if (SERIES.some((s) => !/^[a-z0-9]+$/.test(s?.key ?? '') || !s?.pool)) {
		return json({ error: 'mapping 의 key 는 영소문자/숫자만, pool 은 필수입니다.' }, { status: 400 });
	}
	if (uploaded && new Set(SERIES.map((s) => s.key)).size !== SERIES.length) {
		return json({ error: 'mapping 의 key 가 중복됩니다.' }, { status: 400 });
	}
	const outDirName: string | undefined = body.outDirName ? String(body.outDirName) : undefined;
	if (outDirName !== undefined && !/^[a-z0-9_]+$/.test(outDirName)) {
		return json({ error: `outDirName 은 영소문자/숫자/_ 만 가능: ${outDirName}` }, { status: 400 });
	}
	const outDir = outDirName ? `${STORYARC_ROOT}/${outDirName}` : OUT_DIR[theme as keyof typeof OUT_DIR];
	if (!outDir) {
		return json({ error: `출력 디렉토리가 없는 테마: ${theme} (outDirName 지정 필요)` }, { status: 400 });
	}

	// boss_list 로드
	let bosses: BossInput[];
	if (uploaded) {
		bosses = body.bosses;
	} else {
		const defaultBossList = BOSS_LIST_FILE[theme as keyof typeof BOSS_LIST_FILE];
		try {
			const raw = await readFile(join(process.cwd(), body.bossListFile ?? defaultBossList), 'utf-8');
			bosses = JSON.parse(raw).bosses;
		} catch (e) {
			return json({ error: `boss_list 로드 실패: ${e instanceof Error ? e.message : String(e)}` }, { status: 500 });
		}
	}
	// 매핑은 boss_list 순서의 prefix 부분집합 허용(예: hell 은 boss0 1개만 매핑).
	// 매핑이 boss_list 보다 길면 정렬이 어긋난 것이므로 오류.
	if (!Array.isArray(bosses) || SERIES.length > bosses.length) {
		return json({ error: `매핑 보스 수(${SERIES.length})가 boss_list(${bosses?.length})보다 많습니다.` }, { status: 400 });
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
	// chapter_name 12단어 초과 비-치명 경고(파일은 저장). 공백 split 기준 → 중/일/태 등 비-공백 언어는 자연 통과.
	const warnings: { id: string; lang: string; words: number }[] = [];
	const WORD_LIMIT = 12;

	async function gemini(message: string, tools: unknown, fnName: string, temperature: number) {
		const res = await fetch('/api/gemini', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ message, tools, tool_choice: { type: 'function', function: { name: fnName } }, temperature })
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
			const story = (await gemini(buildStoryPrompt(boss, npcs, theme), storyTool, 'write_story', temperature)) as StoryResult;
			const fields = await gemini(buildFieldsPrompt(boss, story), fieldsTool, 'fill_storyarc_fields', 0.5);
			const gen = mergeStoryarc(boss, story, fields) as Record<string, unknown>;

			// 결정론적 필드 주입
			const fb = gen.final_boss as Record<string, unknown>;
			const npcRoles = Object.fromEntries(
				Object.entries((gen.npc_roles ?? {}) as Record<string, Record<string, unknown>>).map(([k, v]) => [
					k,
					{ role: v.role, arc: v.arc }
				])
			);
			const outline = Array.isArray(gen.scenarioOutline) ? (gen.scenarioOutline as Record<string, unknown>[]) : [];
			outline.forEach((s) => {
				s.boss = s.order === 5 ? pool : 'random_boss';
				// 툴 스키마는 5화에 '' 를 허용하지만 StoryArc 타입은 'warn'|'ally' 만 → 빈 값은 제거
				if (!s.random_boss_side) delete s.random_boss_side;
				if (!s.random_boss_title) delete s.random_boss_title;
				if (!s.boss_trace) delete s.boss_trace;
			});
			const at = (gen.act_tone ?? {}) as Record<string, Record<string, unknown>>;
			if (at.intro) at.intro.tension = 1;
			if (at.rising) at.rising.tension = 3;
			if (at.climax_finale) at.climax_finale.tension = 5;

			const arc = {
				id,
				level,
				chapter_name: clampChapterName(gen.chapter_name),
				theme,
				world: gen.world,
				protagonist_goal: gen.protagonist_goal,
				boss_name_korean: gen.boss_name_korean,
				act_tone: at,
				final_boss: { ...fb, id: boss.id, name: boss.name },
				global_foreshadowing: gen.global_foreshadowing,
				npc_roles: npcRoles,
				scenarioOutline: outline,
				act_summary: gen.act_summary
			};

			const content = `import type { StoryArc } from '$lib/types';\n\nexport const ${exportName}: StoryArc = ${JSON.stringify(arc, null, '\t')};\n`;
			await mkdir(join(process.cwd(), outDir), { recursive: true });
			await writeFile(join(process.cwd(), outDir, fileFor(key, level)), content, 'utf-8');

			// chapter_name 12단어 제한 검사(비-치명)
			for (const [lang, text] of Object.entries((gen.chapter_name ?? {}) as Record<string, string>)) {
				const words = String(text).trim().split(/\s+/).filter(Boolean).length;
				if (words > WORD_LIMIT) warnings.push({ id, lang, words });
			}

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

	return json({ theme, bosses: targets.length, okCount: ok.length, ok, failedCount: failed.length, failed, warnings });
};
