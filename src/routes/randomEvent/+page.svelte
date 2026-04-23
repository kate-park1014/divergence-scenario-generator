<script lang="ts">
	import {
		RANDOM_EVENT_THEMES,
		RANDOM_EVENT_SCENARIO_TYPES,
		buildRandomEventBatchPrompt,
		buildRandomEventBatchTool,
		type RandomEventTheme,
		type ScenarioTypeOption
	} from '$lib/prompts/randomEventGen';
	import type { RandomEvent, RandomEventScenarioType } from '$lib/types';

	let selectedTheme = $state<RandomEventTheme | null>(null);
	let selectedScenarioType = $state<RandomEventScenarioType>('trade_off');
	let generating = $state(false);
	let events = $state<RandomEvent[]>([]);
	let generateError = $state('');

	let saving = $state(false);
	let savedFilename = $state('');
	let saveError = $state('');

	let localizing = $state(false);
	let localizedFilename = $state('');
	let localizeError = $state('');

	function resetResults() {
		events = [];
		generateError = '';
		savedFilename = '';
		saveError = '';
		localizedFilename = '';
		localizeError = '';
	}

	function selectTheme(theme: RandomEventTheme) {
		if (selectedTheme?.id === theme.id) return;
		selectedTheme = theme;
		resetResults();
	}

	function selectScenarioType(type: ScenarioTypeOption) {
		if (selectedScenarioType === type.id) return;
		selectedScenarioType = type.id;
		resetResults();
	}

	async function generate() {
		if (!selectedTheme) return;

		generating = true;
		generateError = '';
		events = [];
		savedFilename = '';
		localizedFilename = '';

		const message = buildRandomEventBatchPrompt(selectedTheme, selectedScenarioType);

		const res = await fetch('/api/gemini', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				message,
				tools: [buildRandomEventBatchTool(selectedScenarioType)],
				tool_choice: { type: 'function', function: { name: 'generate_random_events_batch' } }
			})
		});

		const data = await res.json();

		if (data.tool_result?.events) {
			events = (data.tool_result.events as RandomEvent[]).map((e) => ({
				...e,
				scenarioType: e.scenarioType ?? selectedScenarioType,
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
			body: JSON.stringify({
				theme: selectedTheme.id,
				scenarioType: selectedScenarioType,
				events
			})
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
<p class="subtitle">테마와 시나리오 타입을 선택한 뒤 10개의 이벤트를 생성하세요.</p>

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

<!-- ── 시나리오 타입 선택 ── -->
<section class="section">
	<h2>시나리오 타입 선택</h2>
	<ul class="type-grid">
		{#each RANDOM_EVENT_SCENARIO_TYPES as type}
			<li>
				<button
					class="theme-item"
					class:selected={selectedScenarioType === type.id}
					onclick={() => selectScenarioType(type)}
				>
					<span class="theme-label">{type.label}</span>
					<span class="theme-desc">{type.description}</span>
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
				<span class="divider">·</span>
				타입: <strong>{RANDOM_EVENT_SCENARIO_TYPES.find((t) => t.id === selectedScenarioType)?.label}</strong>
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
							<span class="type-badge type-badge-{event.scenarioType}">
								{event.scenarioType === 'trade_off'
									? '트레이드오프'
									: event.scenarioType === 'probability_upgrade'
										? '확률 업'
										: '랜덤 히든'}
							</span>
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
											<span class="choice-role">
												{#if event.scenarioType === 'trade_off'}
													{ci === 0 ? '고가치 트레이드오프' : '안전한 확정 보상'}
												{:else if event.scenarioType === 'probability_upgrade'}
													{ci === 0 ? '확정 보상' : '확률 업그레이드'}
												{:else}
													{ci === 0 ? '리스크 감수 (70/30)' : '리스크 회피'}
												{/if}
											</span>
										</div>
										{#if choice.postSuccess !== undefined}
											<p class="choice-post">
												<span class="post-label success">성공</span>{choice.postSuccess}
											</p>
											<p class="choice-post">
												<span class="post-label fail">실패</span>{choice.postFail}
											</p>
										{:else}
											<p class="choice-post">{choice.post}</p>
										{/if}
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

	/* ── 테마 / 타입 그리드 ── */
	.theme-grid {
		list-style: none;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 0.5rem;
	}

	.type-grid {
		list-style: none;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
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
		border-color: #a8d8b9;
		background: #2a3d32;
		color: #d4ead9;
	}

	.theme-item.selected .theme-desc {
		color: #a8c4ad;
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

	.divider {
		color: #444;
		margin: 0 0.35rem;
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
		border: 1px solid #f2e4cf;
		border-radius: 6px;
		overflow: hidden;
		background: #fdf6ec;
		color: #3a342b;
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
		border-bottom: 1px solid #f2e4cf;
		background: #fff9ee;
	}

	.event-num {
		font-size: 0.75rem;
		color: #b89a6a;
		font-family: monospace;
		min-width: 18px;
	}

	.event-title {
		font-weight: 600;
		font-size: 0.9rem;
		color: #3a342b;
	}

	.event-id {
		font-family: monospace;
		font-size: 0.72rem;
		color: #b89a6a;
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
		background: #c9d8ea;
		color: #4a5d78;
		font-family: monospace;
	}

	.type-badge {
		font-size: 0.68rem;
		padding: 0.12rem 0.5rem;
		border-radius: 4px;
		font-weight: 600;
		letter-spacing: 0.02em;
	}

	.type-badge-trade_off {
		background: #f5d4c0;
		color: #8a4a2a;
		border: 1px solid #e8b89a;
	}

	.type-badge-probability_upgrade {
		background: #c9dff0;
		color: #3a6a8a;
		border: 1px solid #a8c4de;
	}

	.type-badge-random_hidden {
		background: #e0d4ea;
		color: #5a3d7a;
		border: 1px solid #c9b8d8;
	}

	.choice-role {
		margin-left: auto;
		font-size: 0.7rem;
		color: #a88a5a;
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
		color: #4a4238;
		font-size: 0.88rem;
		line-height: 1.6;
	}

	.choices {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.choice {
		border: 1px solid #f2e4cf;
		border-radius: 5px;
		padding: 0.6rem 0.85rem;
		background: #fffcf5;
	}

	.choice-header {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 0.3rem;
	}

	.choice-num {
		font-size: 0.68rem;
		color: #b89a6a;
		font-family: monospace;
	}

	.choice-text {
		font-weight: 600;
		font-size: 0.88rem;
		color: #3a342b;
	}

	.choice-post {
		margin: 0;
		font-size: 0.83rem;
		color: #5a5048;
		line-height: 1.55;
	}

	.post-label {
		display: inline-block;
		font-size: 0.72rem;
		font-weight: 600;
		border-radius: 3px;
		padding: 0 5px;
		margin-right: 6px;
		vertical-align: middle;
	}

	.post-label.success {
		background: #e6f4ea;
		color: #2e7d32;
	}

	.post-label.fail {
		background: #fce8e6;
		color: #c62828;
	}
</style>
