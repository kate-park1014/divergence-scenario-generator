<script lang="ts">
	let reply = $state('');
	let loading = $state(false);

	async function ask() {
		loading = true;
		reply = '';

		const res = await fetch('/api/gemini', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ message: '오늘 날씨는 어때?' })
		});

		const data = await res.json();
		reply = data.reply ?? data.error ?? '오류 발생';
		loading = false;
	}
</script>

<h1>Gemini 테스트</h1>

<button onclick={ask} disabled={loading}>
	{loading ? '요청 중...' : '오늘 날씨는 어때?'}
</button>

{#if reply}
	<p>{reply}</p>
{/if}
