import { json } from '@sveltejs/kit';
import { mkdir, readdir, readFile, rename, writeFile } from 'fs/promises';
import { join } from 'path';
import { buildScenarioTool } from '$lib/prompts/chapterGen';
import { buildScenarioBase } from '$lib/data/sample/scenarioBase';
import { parseScenarioFile } from '$lib/server/parseScenarioFile';
import { axisVariantRegistry, getAxisStoryarc } from '$lib/data/storyarc/axis_test';
import {
	AXIS_COMBOS,
	buildAxisScenarioPrompt,
	formatPreviousScenario,
	type AxisCombo
} from '$lib/prompts/axisVariantGen';
import type { StoryArc } from '$lib/types';
import type { RequestHandler } from './$types';

type Failure = { combo: string; step: string; order?: number; error: string };

/**
 * 성향 변주 storyarc(axis_test) → 조합별 챕터(시나리오) 생성. 번역 단계 없음(한국어만).
 * 생성(chapterGen + 변주 문체 규칙, 01→05 순차) → process-actors → output.
 *
 * body:
 *  - sourceId: string        원본 storyarc id (axisVariantRegistry 에 등록된 것)
 *  - combos?: AxisCombo[]    대상 조합 부분집합 (기본: 세트에 있는 조합 전체)
 *  - concurrency?: number    조합 단위 동시 실행 수 (기본 4, 1~8)
 *  - skipGenerate?: boolean  이미 생성된 .ts 재사용 (생성 단계 건너뜀)
 *  - provider?: 'gemini' | 'deepseek'  생성 모델 (기본 gemini)
 *
 * 출력: output_list/axis_test/<sourceId>/<combo>.json
 * 소스 .ts: archived_scenarios/axis_test/<sourceId>_<combo>/ 로 이동
 * deepseek: 두 경로 모두 axis_test/deepseek/ 아래. scenario_id 에 `_ds` 추가 (gemini 결과와 구분)
 *  - 예: modern_whisperweb_0_FIR_01 → modern_whisperweb_0_ds_FIR_01
 */

const GEN_DIR = 'src/lib/data/generated';
const PROVIDERS = ['gemini', 'deepseek'] as const;

// DeepSeek 가 가끔 direction 줄을 type:'speech' 로 내거나, speaker:'direction' 인 빈 speech 를 끼워 넣음
// → process-actors 가 speaker 'direction' 을 못 찾아 실패. 저장 전에 정리
function sanitizeLines(lines: unknown): unknown {
	if (!Array.isArray(lines)) return lines;
	return lines
		.map((l) =>
			l?.type === 'speech' && l.action && !l.content?.korean ? { ...l, type: 'direction' } : l
		)
		.filter((l) => !(l?.speaker === 'direction' || (l?.type === 'speech' && !l.content?.korean)));
}

// 방 15 를 dialogue / win_dialogue / lose_dialogue 별로 쪼개서 내기도 함 (id 가 빠진 조각도 있음)
// → 같은 id 끼리, id 없는 조각은 바로 앞 방에 합침
function mergeRooms(rooms: Record<string, any>[]): Record<string, any>[] {
	const byId = new Map<unknown, Record<string, any>>();
	let last: Record<string, any> | undefined;
	for (const r of rooms) {
		const prev = r.id == null ? last : byId.get(r.id);
		if (!prev) byId.set(r.id, (last = { ...r }));
		else
			for (const k of ['dialogue', 'win_dialogue', 'lose_dialogue'])
				if (Array.isArray(r[k])) prev[k] = [...(prev[k] ?? []), ...r[k]];
	}
	return [...byId.values()];
}

function sanitizeScenario(s: Record<string, any>): Record<string, any> {
	if (!Array.isArray(s.rooms)) return s;
	return {
		...s,
		rooms: mergeRooms(s.rooms).map((r) => ({
			...r,
			dialogue: sanitizeLines(r.dialogue),
			...(r.win_dialogue && { win_dialogue: sanitizeLines(r.win_dialogue) }),
			...(r.lose_dialogue && { lose_dialogue: sanitizeLines(r.lose_dialogue) })
		}))
	};
}

export const POST: RequestHandler = async ({ request, fetch }) => {
	const body = await request.json();
	const sourceId = String(body.sourceId ?? '');
	const set = axisVariantRegistry[sourceId];
	if (!set) return json({ error: `axis 변주 세트 없음: ${sourceId}` }, { status: 400 });

	const available = AXIS_COMBOS.filter((c) => set.variants[c]);
	const combos: AxisCombo[] = Array.isArray(body.combos)
		? available.filter((c) => body.combos.includes(c))
		: available;
	if (combos.length === 0) return json({ error: '대상 조합이 없습니다.' }, { status: 400 });
	const concurrency = Math.max(1, Math.min(8, Number(body.concurrency) || 4));
	const skipGenerate = !!body.skipGenerate;
	const provider = PROVIDERS.includes(body.provider)
		? (body.provider as (typeof PROVIDERS)[number])
		: 'gemini';
	const sub = provider === 'gemini' ? '' : `/${provider}`;
	const OUT_DIR = `output_list/axis_test${sub}`;
	const ARCHIVE_DIR = `archived_scenarios/axis_test${sub}`;

	const failed: Failure[] = [];
	const ok: string[] = [];

	const fileFor = (id: string, order: number) =>
		`scenario_${id}_${String(order).padStart(2, '0')}.ts`;

	async function postJson(url: string, payload: unknown) {
		const res = await fetch(url, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload)
		});
		const data = await res.json().catch(() => null);
		return { res, data };
	}

	async function processCombo(combo: AxisCombo): Promise<void> {
		const arc = getAxisStoryarc(sourceId, combo) as StoryArc;
		const orders = Array.from({ length: arc.scenarioOutline.length }, (_, i) => i + 1);

		// 1) 생성 — 01 → 05 차례대로. 앞 시나리오 대사를 다음 프롬프트에 넣어 사건을 이어 감
		if (!skipGenerate) {
			const facts = set.variants[combo]?.facts ?? [];
			const previous: string[] = [];
			for (const order of orders) {
				try {
					const base = buildScenarioBase(order, arc);
					const { res, data } = await postJson(`/api/${provider}`, {
						message: buildAxisScenarioPrompt(order, arc, facts, previous),
						tools: [buildScenarioTool(order)],
						tool_choice: { type: 'function', function: { name: 'generate_scenario_content' } }
					});
					if (!data?.tool_result) {
						failed.push({
							combo,
							step: 'generate',
							order,
							error: data?.error ?? `${provider} ${res.status}`
						});
						return;
					}
					const save = await postJson('/api/scenario/save', {
						order,
						data: { ...base, ...sanitizeScenario(data.tool_result) },
						storyarcId: arc.id
					});
					if (!save.res.ok) {
						failed.push({
							combo,
							step: 'save',
							order,
							error: save.data?.error ?? save.res.statusText
						});
						return;
					}
					previous.push(formatPreviousScenario(order, sanitizeScenario(data.tool_result)));
				} catch (e) {
					failed.push({
						combo,
						step: 'generate',
						order,
						error: e instanceof Error ? e.message : String(e)
					});
					return;
				}
			}
		}

		// 2) process-actors (로컬)
		const actorRes = await Promise.all(
			orders.map(async (order) => {
				const { res, data } = await postJson('/api/scenario/process-actors', {
					filename: fileFor(arc.id, order)
				});
				if (!res.ok || !data?.ok) {
					failed.push({
						combo,
						step: 'process-actors',
						order,
						error: data?.error ?? res.statusText
					});
					return false;
				}
				return true;
			})
		);
		if (actorRes.some((r) => !r)) return;

		// 3) output (번역 없이 한국어 그대로) + 소스 아카이브
		try {
			const genDir = join(process.cwd(), GEN_DIR);
			const files = orders.map((o) => fileFor(arc.id, o));
			const scenarios = await Promise.all(
				files.map(async (f) => parseScenarioFile(await readFile(join(genDir, f), 'utf-8')))
			);
			if (provider === 'deepseek')
				for (const s of scenarios)
					s.scenario_id = String(s.scenario_id).replace(`${sourceId}_`, `${sourceId}_ds_`);
			const chapterValue = (arc.level ?? 0) + 1;
			const outDir = join(process.cwd(), OUT_DIR, sourceId);
			await mkdir(outDir, { recursive: true });
			await writeFile(
				join(outDir, `${combo}.json`),
				JSON.stringify(
					{
						chapter_order: chapterValue,
						difficulty_level: chapterValue,
						chapter_name: arc.chapter_name ?? null,
						axis_combo: combo,
						variant_note: set.variants[combo]?.variant_note ?? '',
						scenarios
					},
					null,
					'\t'
				),
				'utf-8'
			);

			const archiveDir = join(process.cwd(), ARCHIVE_DIR, arc.id);
			await mkdir(archiveDir, { recursive: true });
			const existing = new Set(await readdir(genDir));
			for (const f of files)
				if (existing.has(f)) await rename(join(genDir, f), join(archiveDir, f));
			ok.push(combo);
		} catch (e) {
			failed.push({ combo, step: 'output', error: e instanceof Error ? e.message : String(e) });
		}
	}

	let cursor = 0;
	await Promise.all(
		Array.from({ length: concurrency }, async () => {
			while (cursor < combos.length) await processCombo(combos[cursor++]);
		})
	);

	return json({
		sourceId,
		provider,
		out: `${OUT_DIR}/${sourceId}/`,
		combos: combos.length,
		okCount: ok.length,
		ok,
		failedCount: failed.length,
		failed
	});
};
