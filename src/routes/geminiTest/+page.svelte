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
</script>

<h1>시나리오 생성 <span class="arc-label">{storyarc.chapter_name.korean}</span></h1>

<div class="top-bar">
	<p class="summary">{existsCount} / {scenarios.length} 생성됨</p>
	<button onclick={generateAll} disabled={generatingAll}>
		{generatingAll ? '전체 생성 중...' : '전체 생성'}
	</button>
</div>

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
