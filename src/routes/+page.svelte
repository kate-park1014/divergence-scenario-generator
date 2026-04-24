<script lang="ts">
	import { goto } from '$app/navigation';
	import { storyarcRegistry } from '$lib/data/storyarc';
</script>

<h1>Divergence Scenario Generator</h1>

<p class="subtitle">스토리아크를 선택해 시나리오를 생성하세요.</p>

<ul class="arc-list">
	{#each storyarcRegistry as arc}
		<li>
			<button class="arc-item" onclick={() => goto(`/geminiTest?storyarc=${arc.id}`)}>
				<span class="arc-name">{arc.chapter_name.korean}</span>
				<span class="arc-id">{arc.id}</span>
				<span class="arrow">→</span>
			</button>
		</li>
	{/each}
	<li>
		<button class="arc-item special" onclick={() => goto('/randomEvent')}>
			<span class="arc-name">무작위 이벤트</span>
			<span class="arc-id">randomEvent</span>
			<span class="arrow">→</span>
		</button>
	</li>
	<li>
		<button class="arc-item generator" onclick={() => goto('/storyarcGen')}>
			<span class="arc-name">StoryArc 생성기</span>
			<span class="arc-id">storyarcGen</span>
			<span class="arrow">→</span>
		</button>
	</li>
</ul>

<style>
	h1 {
		margin-bottom: 0.25rem;
	}

	.subtitle {
		color: #888;
		margin-bottom: 2rem;
	}

	.arc-list {
		list-style: none;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		max-width: 480px;
	}

	.arc-item {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 1rem 1.25rem;
		width: 100%;
		border: 1px solid #333;
		border-radius: 6px;
		background: transparent;
		color: inherit;
		cursor: pointer;
		text-align: left;
		transition: border-color 0.15s, background 0.15s;
	}

	.arc-item:hover {
		border-color: #666;
		background: #111;
	}

	.arc-name {
		font-weight: 600;
		font-size: 1rem;
	}

	.arc-id {
		font-family: monospace;
		font-size: 0.75rem;
		color: #666;
		flex: 1;
	}

	.arrow {
		color: #555;
	}

	.arc-item.special {
		border-color: #2a3a2a;
	}

	.arc-item.special:hover {
		border-color: #4caf50;
		background: #0d1f0d;
	}

	.arc-item.special .arc-name {
		color: #4caf50;
	}

	.arc-item.generator {
		border-color: #2a2518;
	}

	.arc-item.generator:hover {
		border-color: #c8a85a;
		background: #1a1508;
	}

	.arc-item.generator .arc-name {
		color: #c8a85a;
	}
</style>
