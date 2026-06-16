import { json } from '@sveltejs/kit';
import { buildScenarioPrompt, buildScenarioTool } from '$lib/prompts/chapterGen';
import { buildScenarioBase } from '$lib/data/sample/scenarioBase';
import { getStoryarc, storyarcRegistry } from '$lib/data/storyarc';
import type { StoryArc } from '$lib/types';
import type { RequestHandler } from './$types';

type Failure = { id: string; order: number; error: string };

/**
 * snowy chapterGen 일괄 생성기 (생성 단계만).
 *
 * body:
 *  - storyarcIds?: string[]  대상 storyarc id 목록 (명시)
 *  - idPrefix?: string       id 접두사로 대상 선택 (예: "snowy_haraldr_")
 *  - concurrency?: number    동시 실행 작업 수 (기본 5, 1~20). 너무 크면 LLM rate limit(429) 위험
 *
 * 각 storyarc × order(1~scenarioOutline.length)를 하나의 작업으로 큐에 넣고,
 * concurrency개의 워커가 병렬로 소비한다. 작업: buildScenarioPrompt → /api/gemini → /api/scenario/save.
 */
export const POST: RequestHandler = async ({ request, fetch }) => {
	const { storyarcIds, idPrefix, concurrency } = await request.json();

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

	// 작업 큐: storyarc × order
	const tasks: { arc: StoryArc; order: number }[] = [];
	for (const arc of arcs) {
		const count = arc.scenarioOutline?.length ?? 5;
		for (let order = 1; order <= count; order++) tasks.push({ arc, order });
	}

	const failed: Failure[] = [];
	let generated = 0;

	async function runTask(arc: StoryArc, order: number): Promise<void> {
		try {
			const base = buildScenarioBase(order, arc);
			const message = buildScenarioPrompt(order, arc);

			const res = await fetch('/api/gemini', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					message,
					tools: [buildScenarioTool(order)],
					tool_choice: { type: 'function', function: { name: 'generate_scenario_content' } }
				})
			});
			const result = await res.json().catch(() => null);

			if (!result?.tool_result) {
				failed.push({ id: arc.id, order, error: result?.error ?? `gemini 실패 (${res.status})` });
				return;
			}

			const merged = { ...base, ...result.tool_result };
			const saveRes = await fetch('/api/scenario/save', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ order, data: merged, storyarcId: arc.id })
			});
			if (!saveRes.ok) {
				const e = await saveRes.json().catch(() => ({}));
				failed.push({ id: arc.id, order, error: `save 실패: ${e.error ?? saveRes.statusText}` });
				return;
			}

			generated++;
		} catch (e) {
			failed.push({ id: arc.id, order, error: e instanceof Error ? e.message : String(e) });
		}
	}

	// 동시 실행 개수 제한 워커 풀
	const limit = Math.max(1, Math.min(20, Number(concurrency) || 5));
	let cursor = 0;
	async function worker(): Promise<void> {
		while (cursor < tasks.length) {
			const task = tasks[cursor++];
			await runTask(task.arc, task.order);
		}
	}
	await Promise.all(Array.from({ length: limit }, () => worker()));

	return json({
		total: tasks.length,
		arcs: arcs.length,
		generated,
		failedCount: failed.length,
		failed
	});
};
