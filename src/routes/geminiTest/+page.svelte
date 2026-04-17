<script lang="ts">
	import { untrack } from 'svelte';
	import { goto } from '$app/navigation';
	import { buildScenarioPrompt, buildScenarioTool } from '$lib/prompts/chapterGen';
	import { buildScenarioBase } from '$lib/data/sample/scenarioBase';
	import { setScenario } from '$lib/stores/scenarioStore.svelte';
	import { getStoryarc, storyarcRegistry } from '$lib/data/storyarc';
	import type { ScenarioInfo } from './+page.server';

	let { data }: { data: { scenarios: ScenarioInfo[]; storyarcId: string } } = $props();

	const storyarc = untrack(() => getStoryarc(data.storyarcId) ?? storyarcRegistry[0]);

	let scenarios = $state(untrack(() => data.scenarios.map((s) => ({ ...s }))));

	let generating = $state<Record<number, boolean>>({});
	let errors = $state<Record<number, string>>({});

	async function generate(order: number) {
		generating[order] = true;
		errors[order] = '';

		const base = buildScenarioBase(order, storyarc);
		const message = buildScenarioPrompt(order, storyarc);

		const res = await fetch('/api/gemini', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				message,
				tools: [buildScenarioTool(order)],
				tool_choice: { type: 'function', function: { name: 'generate_scenario_content' } }
			})
		});

		const result = await res.json();

		if (result.tool_result) {
			const merged = { ...base, ...result.tool_result };
			setScenario(order, merged);

			await fetch('/api/scenario/save', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					order,
					data: merged,
					storyarcId: storyarc.id
				})
			});

			const scenario = scenarios.find((s) => s.order === order);
			if (scenario) scenario.exists = true;
		} else {
			errors[order] = result.error ?? '오류 발생';
		}

		generating[order] = false;
	}

	let existsCount = $derived(scenarios.filter((s) => s.exists).length);
	let generatingAll = $state(false);

	async function generateAll() {
		generatingAll = true;
		await Promise.all(scenarios.map((s) => generate(s.order)));
		generatingAll = false;
	}

	type PipelineStep = 'idle' | 'generating' | 'translating' | 'saving' | 'done' | 'error';
	let pipelineStep = $state<PipelineStep>('idle');
	let translatingOrder = $state<number | null>(null);
	let pipelineError = $state<string | null>(null);
	let chapterOrder = $state(1);
	let difficultyLevel = $state(1);
	let savedFilename = $state<string | null>(null);

	let pipelineBusy = $derived(
		pipelineStep === 'generating' ||
			pipelineStep === 'translating' ||
			pipelineStep === 'saving'
	);

	let pipelineStatus = $derived.by(() => {
		if (pipelineStep === 'generating') return `생성 중... ${existsCount}/${scenarios.length}`;
		if (pipelineStep === 'translating')
			return `번역 중... ${translatingOrder ?? '?'}/${scenarios.length}`;
		if (pipelineStep === 'saving') return '최종 JSON 저장 중...';
		if (pipelineStep === 'done') return `완료: ${savedFilename}`;
		if (pipelineStep === 'error') return `에러: ${pipelineError}`;
		return '';
	});

	async function runPipeline() {
		if (chapterOrder < 1) {
			pipelineError = 'chapter_order는 1 이상이어야 합니다.';
			pipelineStep = 'error';
			return;
		}

		pipelineError = null;
		savedFilename = null;

		// 1. 생성
		pipelineStep = 'generating';
		await generateAll();
		const allGenerated = scenarios.every((s) => s.exists);
		if (!allGenerated) {
			pipelineError = '일부 시나리오 생성 실패';
			pipelineStep = 'error';
			return;
		}

		// 2. 번역 (순차)
		pipelineStep = 'translating';
		for (const s of scenarios) {
			translatingOrder = s.order;
			const res = await fetch('/api/translate', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ filename: s.filename })
			});
			if (!res.ok) {
				const err = await res.json().catch(() => ({ error: '번역 실패' }));
				pipelineError = `번역 실패 (order ${s.order}): ${err.error ?? res.statusText}`;
				pipelineStep = 'error';
				translatingOrder = null;
				return;
			}
		}
		translatingOrder = null;

		// 3. 최종 JSON 저장
		pipelineStep = 'saving';
		const res = await fetch('/api/output/save', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				chapterOrder,
				difficultyLevel,
				storyarcId: storyarc.id,
				archiveSource: true
			})
		});
		if (!res.ok) {
			const err = await res.json().catch(() => ({ error: '저장 실패' }));
			pipelineError = `저장 실패: ${err.error ?? res.statusText}`;
			pipelineStep = 'error';
			return;
		}
		const result = await res.json();
		savedFilename = result.filename;
		pipelineStep = 'done';
	}
</script>

<h1>시나리오 생성 <span class="arc-label">{storyarc.chapter_name.korean}</span></h1>

<label class="storyarc-selector">
	스토리아크
	<select
		value={data.storyarcId}
		onchange={(e) => goto(`/geminiTest?storyarc=${(e.target as HTMLSelectElement).value}`)}
		disabled={pipelineBusy || generatingAll}
	>
		{#each storyarcRegistry as arc (arc.id)}
			<option value={arc.id}>{arc.chapter_name.korean} ({arc.id})</option>
		{/each}
	</select>
</label>

<div class="top-bar">
	<p class="summary">{existsCount} / {scenarios.length} 생성됨</p>
	<div class="actions">
		<button onclick={generateAll} disabled={generatingAll || pipelineBusy}>
			{generatingAll ? '전체 생성 중...' : '전체 생성'}
		</button>
		<label class="order-input">
			chapter_order
			<input type="number" min="1" bind:value={chapterOrder} disabled={pipelineBusy} />
		</label>
		<label class="order-input">
			difficulty_level
			<input type="number" min="1" bind:value={difficultyLevel} disabled={pipelineBusy} />
		</label>
		<button onclick={runPipeline} disabled={pipelineBusy}>
			{pipelineBusy ? '파이프라인 실행 중...' : '전체 파이프라인 실행'}
		</button>
	</div>
</div>

{#if pipelineStatus}
	<p class="pipeline-status" class:error={pipelineStep === 'error'} class:done={pipelineStep === 'done'}>
		{pipelineStatus}
	</p>
{/if}

<ul class="scenario-list">
	{#each scenarios as scenario (scenario.order)}
		<li class="scenario-item">
			<div class="scenario-info">
				<span class="label">시나리오 {scenario.order}번</span>
				<span class="filename">{scenario.filename}</span>
				<span class="badge" class:done={scenario.exists}>
					{scenario.exists ? '생성됨' : '미생성'}
				</span>
			</div>

			<div class="actions">
				<button onclick={() => generate(scenario.order)} disabled={generating[scenario.order]}>
					{generating[scenario.order] ? '생성 중...' : scenario.exists ? '재생성' : '생성'}
				</button>

				{#if scenario.exists}
					<button class="secondary" onclick={() => goto(`/scenario/${scenario.order}`)}>
						Import →
					</button>
				{/if}
			</div>

			{#if errors[scenario.order]}
				<p class="error">{errors[scenario.order]}</p>
			{/if}
		</li>
	{/each}
</ul>

<style>
	h1 {
		margin-bottom: 0.25rem;
	}

	.arc-label {
		font-size: 0.85rem;
		font-weight: 400;
		color: #888;
		margin-left: 0.5rem;
	}

	.storyarc-selector {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		color: #aaa;
		font-size: 0.85rem;
		margin-bottom: 1rem;
	}

	.storyarc-selector select {
		padding: 0.35rem 0.5rem;
		background: #111;
		color: #fff;
		border: 1px solid #555;
		border-radius: 4px;
		min-width: 20rem;
	}

	.top-bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 1.5rem;
	}

	.summary {
		color: #888;
		margin: 0;
	}

	.top-bar .actions {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.order-input {
		display: flex;
		align-items: center;
		gap: 0.4rem;
		color: #aaa;
		font-size: 0.85rem;
	}

	.order-input input {
		width: 4rem;
		padding: 0.3rem 0.4rem;
		background: #111;
		color: #fff;
		border: 1px solid #555;
		border-radius: 4px;
	}

	.pipeline-status {
		margin: 0 0 1rem;
		padding: 0.5rem 0.75rem;
		background: #1a1a2a;
		border: 1px solid #334;
		border-radius: 4px;
		color: #aab;
		font-size: 0.85rem;
	}

	.pipeline-status.done {
		background: #1a3a1a;
		border-color: #285c28;
		color: #4caf50;
	}

	.pipeline-status.error {
		background: #3a1a1a;
		border-color: #5c2828;
		color: #e57373;
	}

	.scenario-list {
		list-style: none;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.scenario-item {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 0.75rem 1rem;
		border: 1px solid #333;
		border-radius: 6px;
		flex-wrap: wrap;
	}

	.scenario-info {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		flex: 1;
	}

	.label {
		font-weight: 600;
		white-space: nowrap;
	}

	.filename {
		font-family: monospace;
		font-size: 0.8rem;
		color: #888;
	}

	.badge {
		font-size: 0.75rem;
		padding: 0.15rem 0.5rem;
		border-radius: 999px;
		background: #333;
		color: #aaa;
		white-space: nowrap;
	}

	.badge.done {
		background: #1a3a1a;
		color: #4caf50;
	}

	.actions {
		display: flex;
		gap: 0.5rem;
	}

	button {
		padding: 0.4rem 0.9rem;
		border-radius: 4px;
		border: 1px solid #555;
		background: #222;
		color: #fff;
		cursor: pointer;
		white-space: nowrap;
	}

	button:disabled {
		opacity: 0.4;
		cursor: not-allowed;
	}

	button.secondary {
		border-color: #444;
		color: #aaa;
	}

	.error {
		width: 100%;
		color: #e57373;
		font-size: 0.8rem;
		margin: 0;
	}
</style>
