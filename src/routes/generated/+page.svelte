<script lang="ts">
	import { untrack } from 'svelte';
	import type { FileInfo } from './+page.server';

	let { data }: { data: { files: FileInfo[] } } = $props();

	// untrack: data는 초기값만 캡처, 이후 로컬 상태로 독립 관리
	let files = $state(untrack(() => data.files.map((f) => ({ ...f }))));

	// 파일별 번역 진행 상태
	let translating = $state<Record<string, boolean>>({});
	let errors = $state<Record<string, string>>({});

	async function translate(filename: string) {
		translating[filename] = true;
		errors[filename] = '';

		const res = await fetch('/api/translate', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ filename })
		});

		const result = await res.json();

		if (result.ok) {
			const file = files.find((f) => f.filename === filename);
			if (file) file.isTranslated = true;
		} else {
			errors[filename] = result.error ?? '알 수 없는 오류';
		}

		translating[filename] = false;
	}

	let totalCount = $derived(files.length);
	let translatedCount = $derived(files.filter((f) => f.isTranslated).length);
</script>

<h1>생성된 시나리오 파일</h1>

<p class="summary">{translatedCount} / {totalCount} 번역 완료</p>

<ul class="file-list">
	{#each files as file (file.filename)}
		<li class="file-item">
			<div class="file-info">
				<span class="filename">{file.varName}</span>
				{#if file.order !== null}
					<span class="order">#{file.order}</span>
				{/if}
				<span class="badge" class:done={file.isTranslated}>
					{file.isTranslated ? '번역 완료' : '미번역'}
				</span>
			</div>

			<button
				onclick={() => translate(file.filename)}
				disabled={translating[file.filename] || file.isTranslated}
			>
				{#if translating[file.filename]}
					번역 중...
				{:else if file.isTranslated}
					완료
				{:else}
					다국어 변환
				{/if}
			</button>

			{#if errors[file.filename]}
				<p class="error">{errors[file.filename]}</p>
			{/if}
		</li>
	{/each}
</ul>

<style>
	h1 {
		margin-bottom: 0.25rem;
	}

	.summary {
		color: #888;
		margin-bottom: 1.5rem;
	}

	.file-list {
		list-style: none;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.file-item {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 0.75rem 1rem;
		border: 1px solid #333;
		border-radius: 6px;
	}

	.file-info {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		flex: 1;
	}

	.filename {
		font-family: monospace;
		font-size: 0.9rem;
	}

	.order {
		color: #888;
		font-size: 0.8rem;
	}

	.badge {
		font-size: 0.75rem;
		padding: 0.15rem 0.5rem;
		border-radius: 999px;
		background: #333;
		color: #aaa;
	}

	.badge.done {
		background: #1a3a1a;
		color: #4caf50;
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

	.error {
		color: #e57373;
		font-size: 0.8rem;
		margin: 0;
	}
</style>
