import { json } from '@sveltejs/kit';
import { buildScenarioPrompt, buildScenarioTool } from '$lib/prompts/chapterGen';
import { buildScenarioBase } from '$lib/data/sample/scenarioBase';
import { getStoryarc, storyarcRegistry } from '$lib/data/storyarc';
import type { StoryArc } from '$lib/types';
import type { RequestHandler } from './$types';

type Failure = { id: string; step: string; order?: number; error: string };

/**
 * snowy 풀 파이프라인 일괄 실행: 생성 → process-actors → translate(다국어) → output/save.
 *
 * body:
 *  - storyarcIds?: string[]    대상 storyarc id 목록
 *  - idPrefix?: string         id 접두사로 대상 선택
 *  - concurrency?: number      아크 단위 동시 실행 수 (기본 3, 1~10)
 *  - skipGenerate?: boolean    이미 생성된 .ts 재사용 (생성 단계 건너뜀)
 *
 * chapter_order = difficulty_level = (arc.level ?? 0) + 1.
 * 아크끼리는 병렬, 아크 내부는 단계 순차 + 단계 내 5씬 병렬.
 */
export const POST: RequestHandler = async ({ request, fetch }) => {
	const { storyarcIds, idPrefix, concurrency, skipGenerate } = await request.json();

	let arcs: StoryArc[];
	if (Array.isArray(storyarcIds) && storyarcIds.length > 0) {
		arcs = storyarcIds
			.map((id: string) => getStoryarc(id))
			.filter((a: StoryArc | undefined): a is StoryArc => !!a);
	} else if (typeof idPrefix === 'string' && idPrefix.length > 0) {
		arcs = storyarcRegistry.filter((s) => s.id.startsWith(idPrefix));
	} else {
		return json({ error: 'storyarcIds 또는 idPrefix가 필요합니다.' }, { status: 400 });
	}
	if (arcs.length === 0) {
		return json({ error: '대상 storyarc가 없습니다.' }, { status: 400 });
	}

	const failed: Failure[] = [];
	const ok: string[] = [];

	const fileFor = (id: string, order: number) =>
		`scenario_${id}_${String(order).padStart(2, '0')}.ts`;

	async function postJson(url: string, body: unknown) {
		const res = await fetch(url, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(body)
		});
		const data = await res.json().catch(() => null);
		return { res, data };
	}

	async function processArc(arc: StoryArc): Promise<void> {
		const orderCount = arc.scenarioOutline?.length ?? 5;
		const orders = Array.from({ length: orderCount }, (_, i) => i + 1);
		const chapterValue = (arc.level ?? 0) + 1;
		let arcFailed = false;

		// 1) 생성 (skipGenerate면 생략)
		if (!skipGenerate) {
			const results = await Promise.all(
				orders.map(async (order) => {
					try {
						const base = buildScenarioBase(order, arc);
						const message = buildScenarioPrompt(order, arc);
						const { res, data } = await postJson('/api/gemini', {
							message,
							tools: [buildScenarioTool(order)],
							tool_choice: { type: 'function', function: { name: 'generate_scenario_content' } }
						});
						if (!data?.tool_result) {
							failed.push({ id: arc.id, step: 'generate', order, error: data?.error ?? `gemini ${res.status}` });
							return false;
						}
						const merged = { ...base, ...data.tool_result };
						const save = await postJson('/api/scenario/save', { order, data: merged, storyarcId: arc.id });
						if (!save.res.ok) {
							failed.push({ id: arc.id, step: 'save', order, error: save.data?.error ?? save.res.statusText });
							return false;
						}
						return true;
					} catch (e) {
						failed.push({ id: arc.id, step: 'generate', order, error: e instanceof Error ? e.message : String(e) });
						return false;
					}
				})
			);
			if (results.some((r) => !r)) arcFailed = true;
		}
		if (arcFailed) return;

		// 2) process-actors (로컬, LLM 아님)
		const actorRes = await Promise.all(
			orders.map(async (order) => {
				const { res, data } = await postJson('/api/scenario/process-actors', { filename: fileFor(arc.id, order) });
				if (!res.ok || !data?.ok) {
					failed.push({ id: arc.id, step: 'process-actors', order, error: data?.error ?? res.statusText });
					return false;
				}
				return true;
			})
		);
		if (actorRes.some((r) => !r)) return;

		// 3) translate (다국어, LLM)
		const transRes = await Promise.all(
			orders.map(async (order) => {
				const { res, data } = await postJson('/api/translate', { filename: fileFor(arc.id, order) });
				if (!res.ok) {
					failed.push({ id: arc.id, step: 'translate', order, error: data?.error ?? res.statusText });
					return false;
				}
				return true;
			})
		);
		if (transRes.some((r) => !r)) return;

		// 4) output/save
		const out = await postJson('/api/output/save', {
			chapterOrder: chapterValue,
			difficultyLevel: chapterValue,
			storyarcId: arc.id,
			archiveSource: true
		});
		if (!out.res.ok || !out.data?.ok) {
			failed.push({ id: arc.id, step: 'output', error: out.data?.error ?? out.res.statusText });
			return;
		}
		ok.push(arc.id);
	}

	// 아크 단위 병렬 워커 풀
	const limit = Math.max(1, Math.min(10, Number(concurrency) || 3));
	let cursor = 0;
	async function worker(): Promise<void> {
		while (cursor < arcs.length) {
			const arc = arcs[cursor++];
			await processArc(arc);
		}
	}
	await Promise.all(Array.from({ length: limit }, () => worker()));

	return json({ arcs: arcs.length, okCount: ok.length, ok, failedCount: failed.length, failed });
};
