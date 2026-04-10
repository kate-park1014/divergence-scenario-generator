<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { scenarios } from '$lib/stores/scenarioStore.svelte';

	const order = $derived(Number($page.params.order));
	const data = $derived(scenarios[order]);
	const maxOrder = 5;

	function nextScenario() {
		goto(`/geminiTest?order=${order + 1}`);
	}
</script>

<h1>{order}번 시나리오</h1>

{#if data}
	<pre><code>{JSON.stringify(data, null, 2)}</code></pre>

	{#if order < maxOrder}
		<button onclick={nextScenario}>
			{order + 1}번 시나리오 만들기 →
		</button>
	{:else}
		<p>모든 시나리오가 완료되었습니다.</p>
	{/if}
{:else}
	<p>데이터가 없습니다. 생성 페이지로 돌아가세요.</p>
	<button onclick={() => goto('/geminiTest')}>← 생성 페이지</button>
{/if}
