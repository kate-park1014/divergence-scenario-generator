<script lang="ts">
	import { untrack } from 'svelte';

	let { data } = $props<{
		data: {
			chapterName: Record<string, string> | null;
			storyarcId: string;
			scenarios: Record<string, unknown>[];
		};
	}>();

	let chapterOrder = $state(1);
	let difficultyLevel = $derived(chapterOrder);
	let saving = $state(false);
	let savedFilename = $state('');
	let error = $state('');

	const chapterName = untrack(() => data.chapterName);
	const scenarios = untrack(() => data.scenarios);
	const storyarcId = untrack(() => data.storyarcId);

	async function save() {
		saving = true;
		savedFilename = '';
		error = '';

		const res = await fetch('/api/output/save', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				chapterOrder,
				difficultyLevel,
				chapterName,
				storyarcId,
				scenarios,
				archiveSource: true
			})
		});

		const result = await res.json();

		if (result.ok) {
			savedFilename = result.filename;
		} else {
			error = result.error ?? '저장 오류';
		}

		saving = false;
	}
</script>

<h1>Output 생성</h1>

<section class="meta">
	<div class="field">
		<label>
			chapter_order
			<input type="number" min="1" bind:value={chapterOrder} />
		</label>
	</div>

	<div class="field">
		<span class="field-label">difficulty_level</span>
		<span class="mono">{difficultyLevel}</span>
	</div>

	<div class="field">
		<span class="field-label">chapter_name</span>
		<div class="lang-grid">
			{#if chapterName}
				{#each Object.entries(chapterName) as [lang, value]}
					<span class="lang-tag">{lang}</span>
					<span class="lang-value">{value}</span>
				{/each}
			{:else}
				<span class="lang-tag" style="color:#e57373">—</span>
			{/if}
		</div>
	</div>

	<div class="field">
		<span class="field-label">storyarc_id</span>
		<span class="mono">{storyarcId}</span>
	</div>
</section>

<section class="scenarios">
	<h2>scenarios <span class="count">({scenarios.length}개)</span></h2>
	<ul>
		{#each scenarios as scenario, i}
			<li>
				<span class="order">#{scenario.order ?? i + 1}</span>
				<span class="mono">{scenario.scenario_id}</span>
				<span class="badge" class:has-epilogue={!!scenario.epilogue}>
					{scenario.epilogue ? 'epilogue 포함' : ''}
				</span>
			</li>
		{/each}
	</ul>
</section>

<div class="actions">
	<button onclick={save} disabled={saving || scenarios.length === 0}>
		{saving ? '저장 중...' : '💾 output_list에 저장'}
	</button>

	{#if savedFilename}
		<p class="success">✓ 저장됨: output_list/{savedFilename}</p>
	{/if}
	{#if error}
		<p class="error">{error}</p>
	{/if}
</div>

<style>
	h1 {
		margin-bottom: 1.5rem;
	}

	section {
		margin-bottom: 2rem;
	}

	.meta {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1rem;
		border: 1px solid #333;
		border-radius: 6px;
	}

	.field {
		display: flex;
		align-items: flex-start;
		gap: 1rem;
	}

	.field label {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.field-label {
		min-width: 120px;
		color: #888;
		font-size: 0.85rem;
		padding-top: 0.1rem;
	}

	input[type='number'] {
		width: 80px;
		padding: 0.3rem 0.5rem;
		background: #111;
		border: 1px solid #444;
		border-radius: 4px;
		color: #fff;
	}

	.lang-grid {
		display: grid;
		grid-template-columns: 90px 1fr;
		gap: 0.2rem 0.5rem;
		font-size: 0.85rem;
	}

	.lang-tag {
		color: #888;
	}

	.mono {
		font-family: monospace;
		font-size: 0.85rem;
		color: #ccc;
	}

	.scenarios ul {
		list-style: none;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.scenarios li {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 0.5rem 0.75rem;
		border: 1px solid #2a2a2a;
		border-radius: 4px;
	}

	.order {
		color: #888;
		font-size: 0.85rem;
		min-width: 24px;
	}

	.count {
		font-weight: normal;
		color: #888;
		font-size: 0.9rem;
	}

	.badge {
		font-size: 0.72rem;
		color: #4caf50;
	}

	.actions {
		display: flex;
		align-items: center;
		gap: 1rem;
		flex-wrap: wrap;
	}

	button {
		padding: 0.5rem 1.2rem;
		border-radius: 4px;
		border: 1px solid #555;
		background: #222;
		color: #fff;
		cursor: pointer;
		font-size: 0.95rem;
	}

	button:disabled {
		opacity: 0.4;
		cursor: not-allowed;
	}

	.success {
		color: #4caf50;
		font-size: 0.85rem;
		margin: 0;
		font-family: monospace;
	}

	.error {
		color: #e57373;
		font-size: 0.85rem;
		margin: 0;
	}
</style>
