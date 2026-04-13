<script lang="ts">
	import {
		RANDOM_EVENT_THEMES,
		buildRandomEventBatchPrompt,
		buildRandomEventBatchTool,
		type RandomEventTheme
	} from '$lib/prompts/randomEventGen';
	import type { RandomEvent } from '$lib/types';

	let selectedTheme = $state<RandomEventTheme | null>(null);
	let generating = $state(false);
	let events = $state<RandomEvent[]>([]);
	let generateError = $state('');

	let saving = $state(false);
	let savedFilename = $state('');
	let saveError = $state('');

	let localizing = $state(false);
	let localizedFilename = $state('');
	let localizeError = $state('');

	function selectTheme(theme: RandomEventTheme) {
		if (selectedTheme?.id === theme.id) return;
		selectedTheme = theme;
		events = [];
		generateError = '';
		savedFilename = '';
		saveError = '';
		localizedFilename = '';
		localizeError = '';
	}

	async function generate() {
		if (!selectedTheme) return;

		generating = true;
		generateError = '';
		events = [];
		savedFilename = '';
		localizedFilename = '';

		const message = buildRandomEventBatchPrompt(selectedTheme);

		const res = await fetch('/api/gemini', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				message,
				tools: [buildRandomEventBatchTool()],
				tool_choice: { type: 'function', function: { name: 'generate_random_events_batch' } }
			})
		});

		const data = await res.json();

		if (data.tool_result?.events) {
			events = (data.tool_result.events as RandomEvent[]).map((e) => ({
				...e,
				tags: [
					selectedTheme!.id,
					...new Set(
						e.tags.map((t) => t.toLowerCase()).filter((t) => t !== selectedTheme!.id)
					)
				]
			}));
		} else {
			generateError = data.error ?? '이벤트 생성에 실패했습니다.';
		}

		generating = false;
	}

	async function save() {
		if (!selectedTheme || events.length === 0) return;

		saving = true;
		saveError = '';
		savedFilename = '';
		localizedFilename = '';

		const res = await fetch('/api/randomEvent/save', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ theme: selectedTheme.id, events })
		});

		const result = await res.json();

		if (result.ok) {
			savedFilename = result.filename;
		} else {
			saveError = result.error ?? '저장 실패';
		}

		saving = false;
	}

	async function localize() {
		if (!savedFilename) return;

		localizing = true;
		localizeError = '';
		localizedFilename = '';

		const res = await fetch('/api/randomEvent/localize', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ filename: savedFilename })
		});

		const result = await res.json();

		if (result.ok) {
			localizedFilename = result.filename;
		} else {
			localizeError = result.error ?? '다국어 변환 실패';
		}

		localizing = false;
	}
</script>

<h1>무작위 이벤트 생성</h1>
<p class="subtitle">테마를 선택한 뒤 10개의 이벤트를 생성하세요.</p>

<!-- ── 테마 선택 ── -->
<section class="section">
	<h2>테마 선택</h2>
	<ul class="theme-grid">
		{#each RANDOM_EVENT_THEMES as theme}
			<li>
				<button
					class="theme-item"
					class:selected={selectedTheme?.id === theme.id}
					onclick={() => selectTheme(theme)}
				>
					<span class="theme-label">{theme.label}</span>
					<span class="theme-desc">{theme.description}</span>
				</button>
			</li>
		{/each}
	</ul>
</section>

<!-- ── 생성 ── -->
{#if selectedTheme}
	<section class="section">
		<div class="action-bar">
			<span class="selected-label">
				선택된 테마: <strong>{selectedTheme.label}</strong>
			</span>
			<button onclick={generate} disabled={generating}>
				{generating ? '생성 중...' : '10개 생성'}
			</button>
		</div>
		{#if generateError}
			<p class="error">{generateError}</p>
		{/if}
	</section>
{/if}

<!-- ── 결과 목록 ── -->
{#if events.length > 0}
	<section class="section">
		<div class="result-header">
			<h2>생성된 이벤트 <span class="count">({events.length}개)</span></h2>
			<div class="result-actions">
				<button onclick={save} disabled={saving || !!savedFilename}>
					{saving ? '저장 중...' : savedFilename ? '저장됨' : 'randomEvent_list에 저장'}
				</button>
				{#if savedFilename && !localizedFilename}
					<button class="localize-btn" onclick={localize} disabled={localizing}>
						{localizing ? '변환 중...' : '다국어 변환'}
					</button>
				{/if}
			</div>
		</div>

		{#if saveError}
			<p class="error">{saveError}</p>
		{/if}
		{#if savedFilename}
			<p class="success">저장됨: randomEvent_list/{savedFilename}</p>
		{/if}
		{#if localizeError}
			<p class="error">{localizeError}</p>
		{/if}
		{#if localizedFilename}
			<p class="success">다국어 변환 완료: randomEvent_list_localized/{localizedFilename}</p>
		{/if}

		<ul class="event-list">
			{#each events as event, i}
				<li class="event-item">
					<details>
						<summary>
							<span class="event-num">{i + 1}</span>
							<span class="event-title">{event.title}</span>
							<span class="event-id">{event.id}</span>
							<div class="tags">
								{#each event.tags as tag}
									<span class="tag">{tag}</span>
								{/each}
							</div>
						</summary>

						<div class="event-detail">
							<p class="narration">{event.narration}</p>
							<div class="choices">
								{#each event.choices as choice, ci}
									<div class="choice">
										<div class="choice-header">
											<span class="choice-num">선택 {ci + 1}</span>
											<span class="choice-text">{choice.text}</span>
										</div>
										<p class="choice-post">{choice.post}</p>
									</div>
								{/each}
							</div>
						</div>
					</details>
				</li>
			{/each}
		</ul>
	</section>
{/if}

<style>
	h1 {
		margin-bottom: 0.25rem;
	}

	h2 {
		font-size: 0.85rem;
		color: #888;
		margin-bottom: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.subtitle {
		color: #888;
		margin-bottom: 2rem;
	}

	.section {
		margin-bottom: 2rem;
	}

	/* ── 테마 그리드 ── */
	.theme-grid {
		list-style: none;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 0.5rem;
	}

	.theme-item {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		padding: 0.75rem 1rem;
		width: 100%;
		border: 1px solid #333;
		border-radius: 6px;
		background: transparent;
		color: inherit;
		cursor: pointer;
		text-align: left;
		transition:
			border-color 0.15s,
			background 0.15s;
	}

	.theme-item:hover {
		border-color: #666;
		background: #111;
	}

	.theme-item.selected {
		border-color: #4caf50;
		background: #0d1f0d;
	}

	.theme-label {
		font-weight: 600;
		font-size: 0.95rem;
	}

	.theme-desc {
		font-size: 0.75rem;
		color: #777;
	}

	/* ── 액션 바 ── */
	.action-bar {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.selected-label {
		color: #aaa;
		font-size: 0.9rem;
	}

	.selected-label strong {
		color: #fff;
	}

	button {
		padding: 0.4rem 0.9rem;
		border-radius: 4px;
		border: 1px solid #555;
		background: #222;
		color: #fff;
		cursor: pointer;
		white-space: nowrap;
		font-size: 0.9rem;
	}

	button:disabled {
		opacity: 0.4;
		cursor: not-allowed;
	}

	.localize-btn {
		border-color: #3a4a8a;
		background: #0d1230;
		color: #8ab4f8;
	}

	.localize-btn:not(:disabled):hover {
		border-color: #5a7ae0;
		background: #111e4a;
	}

	.error {
		color: #e57373;
		font-size: 0.85rem;
		margin-top: 0.5rem;
	}

	.success {
		color: #4caf50;
		font-size: 0.82rem;
		font-family: monospace;
		margin-top: 0.35rem;
	}

	/* ── 결과 헤더 ── */
	.result-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-bottom: 0.75rem;
	}

	.result-header h2 {
		margin: 0;
	}

	.result-actions {
		display: flex;
		gap: 0.5rem;
	}

	.count {
		font-weight: normal;
		color: #666;
	}

	/* ── 이벤트 목록 ── */
	.event-list {
		list-style: none;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	.event-item {
		border: 1px solid #2a2a2a;
		border-radius: 6px;
		overflow: hidden;
	}

	.event-item details > summary {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		padding: 0.65rem 1rem;
		cursor: pointer;
		user-select: none;
		list-style: none;
		flex-wrap: wrap;
	}

	.event-item details > summary::-webkit-details-marker {
		display: none;
	}

	.event-item details[open] > summary {
		border-bottom: 1px solid #2a2a2a;
		background: #0d0d0d;
	}

	.event-num {
		font-size: 0.75rem;
		color: #555;
		font-family: monospace;
		min-width: 18px;
	}

	.event-title {
		font-weight: 600;
		font-size: 0.9rem;
	}

	.event-id {
		font-family: monospace;
		font-size: 0.72rem;
		color: #555;
	}

	.tags {
		display: flex;
		gap: 0.3rem;
		flex-wrap: wrap;
		margin-left: auto;
	}

	.tag {
		font-size: 0.68rem;
		padding: 0.1rem 0.4rem;
		border-radius: 999px;
		background: #1a2a3a;
		color: #6ab0e0;
		font-family: monospace;
	}

	/* ── 이벤트 상세 ── */
	.event-detail {
		padding: 0.75rem 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.narration {
		margin: 0;
		color: #ccc;
		font-size: 0.88rem;
		line-height: 1.6;
	}

	.choices {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.choice {
		border: 1px solid #222;
		border-radius: 5px;
		padding: 0.6rem 0.85rem;
		background: #080808;
	}

	.choice-header {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 0.3rem;
	}

	.choice-num {
		font-size: 0.68rem;
		color: #555;
		font-family: monospace;
	}

	.choice-text {
		font-weight: 600;
		font-size: 0.88rem;
	}

	.choice-post {
		margin: 0;
		font-size: 0.83rem;
		color: #999;
		line-height: 1.55;
	}
</style>
