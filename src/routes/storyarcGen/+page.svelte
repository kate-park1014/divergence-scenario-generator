<script lang="ts">
	import { npc_by_theme } from '$lib/data/sample/npc_pool';
	import { buildStoryarcPrompt, storyarcGenTool } from '$lib/prompts/storyarcGen';

	type Theme = keyof typeof npc_by_theme;

	const THEMES: Theme[] = ['forest', 'snowy', 'desert'];

	let selectedTheme: Theme = $state('desert');
	let generating = $state(false);
	let result = $state<Record<string, unknown> | null>(null);
	let error = $state('');
	let inputMode = $state<'form' | 'json'>('form');

	// Boss 입력 필드 (form mode)
	let bossId = $state('');
	let bossName = $state('');
	let bossAppearance = $state('');
	let bossSurfaceIdentity = $state('');
	let bossTrueIdentity = $state('');
	let bossMotivation = $state('');
	let bossTwist = $state('');

	// JSON mode
	let bossJson = $state('');
	let jsonParseError = $state('');

	function syncFormToJson() {
		const obj = {
			id: bossId,
			name: bossName,
			appearance: bossAppearance,
			surface_identity: bossSurfaceIdentity,
			true_identity: bossTrueIdentity,
			motivation: bossMotivation,
			twist: bossTwist
		};
		bossJson = JSON.stringify(obj, null, 2);
	}

	function parseBossInput(raw: string): Record<string, unknown> {
		try {
			return JSON.parse(raw);
		} catch {
			// JS 객체 리터럴 (작은따옴표, 키 따옴표 없음) 허용
			return new Function('return (' + raw + ')')();
		}
	}

	function syncJsonToForm(json: string) {
		try {
			const obj = parseBossInput(json);
			const s = (v: unknown) => String(v ?? '');
			bossId = s(obj.id);
			bossName = s(obj.name);
			bossAppearance = s(obj.appearance);
			bossSurfaceIdentity = s(obj.surface_identity);
			bossTrueIdentity = s(obj.true_identity);
			bossMotivation = s(obj.motivation);
			bossTwist = s(obj.twist);
			jsonParseError = '';
		} catch {
			jsonParseError = 'JSON 또는 JS 객체 형식이 올바르지 않습니다.';
		}
	}

	function switchMode(mode: 'form' | 'json') {
		if (mode === 'json' && inputMode === 'form') syncFormToJson();
		if (mode === 'form' && inputMode === 'json') syncJsonToForm(bossJson);
		inputMode = mode;
	}

	const npcs = $derived(
		npc_by_theme[selectedTheme].map((n) => ({
			key: n.key,
			name_korean: n.name.korean,
			name_english: n.name.english
		}))
	);

	async function generate() {
		let boss: { id: string; name: string; appearance: string; surface_identity: string; true_identity: string; motivation: string; twist: string };

		if (inputMode === 'json') {
			try {
				const obj = parseBossInput(bossJson);
				const s = (v: unknown) => String(v ?? '');
				boss = {
					id: s(obj.id),
					name: s(obj.name),
					appearance: s(obj.appearance),
					surface_identity: s(obj.surface_identity),
					true_identity: s(obj.true_identity),
					motivation: s(obj.motivation),
					twist: s(obj.twist)
				};
			} catch {
				error = 'JSON 또는 JS 객체 형식이 올바르지 않습니다.';
				return;
			}
		} else {
			boss = {
				id: bossId,
				name: bossName,
				appearance: bossAppearance,
				surface_identity: bossSurfaceIdentity,
				true_identity: bossTrueIdentity,
				motivation: bossMotivation,
				twist: bossTwist
			};
		}

		if (!boss.id || !boss.name) {
			error = 'Boss ID와 이름은 필수입니다.';
			return;
		}
		error = '';
		generating = true;
		result = null;

		const prompt = buildStoryarcPrompt(boss, npcs, selectedTheme);

		try {
			const res = await fetch('/api/gemini', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					message: prompt,
					tools: storyarcGenTool,
					tool_choice: { type: 'function', function: { name: 'generate_storyarc' } }
				})
			});

			const data = await res.json();
			if (data.error) {
				error = data.error;
			} else {
				result = data.tool_result;
				await fetch('/api/storyarc/save', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ storyarc: result })
				});
			}
		} catch (e) {
			error = String(e);
		} finally {
			generating = false;
		}
	}

	function toTsCode(arc: Record<string, unknown>): string {
		const json = JSON.stringify(arc, null, '\t');
		return `import type { StoryArc } from '$lib/types';\n\nexport const storyarc_${arc.id}: StoryArc = ${json};`;
	}

	function copyToClipboard() {
		if (!result) return;
		navigator.clipboard.writeText(toTsCode(result));
	}

	let saving = $state(false);
	let saveSuccess = $state('');

	async function saveStoryarc() {
		if (!result) return;
		saving = true;
		saveSuccess = '';
		error = '';
		try {
			const res = await fetch('/api/storyarc/save', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ storyarc: result })
			});
			const data = await res.json();
			if (data.error) {
				error = data.error;
			} else {
				saveSuccess = `저장 완료: ${data.filename}`;
			}
		} catch (e) {
			error = String(e);
		} finally {
			saving = false;
		}
	}
</script>

<div class="page">
	<h1>StoryArc 생성기</h1>
	<p class="subtitle">보스 정보와 NPC 풀을 입력하면 완성된 StoryArc를 생성합니다.</p>

	<div class="layout">
		<div class="input-panel">
			<!-- 테마 선택 -->
			<section class="section">
				<h2>테마</h2>
				<div class="theme-buttons">
					{#each THEMES as theme}
						<button
							class="theme-btn"
							class:active={selectedTheme === theme}
							onclick={() => (selectedTheme = theme)}
						>
							{theme}
						</button>
					{/each}
				</div>
			</section>

			<!-- NPC 목록 -->
			<section class="section">
				<h2>사용 가능한 NPC <span class="count">({npcs.length}명)</span></h2>
				<ul class="npc-list">
					{#each npcs as npc}
						<li class="npc-item">
							<span class="npc-key">{npc.key}</span>
							<span class="npc-name">{npc.name_korean} ({npc.name_english})</span>
						</li>
					{/each}
				</ul>
			</section>

			<!-- 보스 정보 -->
			<section class="section">
				<div class="section-header">
					<h2>보스 정보</h2>
					<div class="mode-toggle">
						<button class:active={inputMode === 'form'} onclick={() => switchMode('form')}>폼</button>
						<button class:active={inputMode === 'json'} onclick={() => switchMode('json')}>JSON</button>
					</div>
				</div>

				{#if inputMode === 'form'}
					<div class="form">
						<label>
							<span>ID <span class="required">*</span></span>
							<input bind:value={bossId} placeholder="예: MirageChef_V0" />
						</label>
						<label>
							<span>이름 <span class="required">*</span></span>
							<input bind:value={bossName} placeholder="예: 환상의 조리사 사하르 (Sahar)" />
						</label>
						<label>
							<span>외형 (Appearance)</span>
							<textarea bind:value={bossAppearance} rows={3} placeholder="보스의 외형 묘사 (영문 권장)"></textarea>
						</label>
						<label>
							<span>표면 정체성</span>
							<textarea bind:value={bossSurfaceIdentity} rows={2} placeholder="처음에 드러나는 정체"></textarea>
						</label>
						<label>
							<span>진짜 정체성</span>
							<textarea bind:value={bossTrueIdentity} rows={3} placeholder="숨겨진 진짜 정체 (반전의 핵심)"></textarea>
						</label>
						<label>
							<span>동기</span>
							<textarea bind:value={bossMotivation} rows={2} placeholder="탐험대를 노리는 이유"></textarea>
						</label>
						<label>
							<span>트위스트 대사</span>
							<textarea bind:value={bossTwist} rows={3} placeholder="클라이맥스에서 드러나는 반전 대사/행동"></textarea>
						</label>
					</div>
				{:else}
					<textarea
						class="json-input"
						bind:value={bossJson}
						rows={16}
						placeholder={`{\n  "id": "MirageChef_V0",\n  "name": "환상의 조리사 사하르",\n  "appearance": "...",\n  "surface_identity": "...",\n  "true_identity": "...",\n  "motivation": "...",\n  "twist": "..."\n}`}
						oninput={() => { jsonParseError = ''; }}
					></textarea>
					{#if jsonParseError}
						<p class="json-error">{jsonParseError}</p>
					{/if}
				{/if}
			</section>

			<button class="generate-btn" onclick={generate} disabled={generating}>
				{generating ? '생성 중...' : 'StoryArc 생성'}
			</button>

			{#if error}
				<p class="error">{error}</p>
			{/if}
		</div>

		<!-- 결과 패널 -->
		<div class="result-panel">
			{#if generating}
				<div class="loading">
					<p>Gemini가 스토리아크를 설계 중입니다...</p>
				</div>
			{:else if result}
				<div class="result-header">
					<h2>{(result.chapter_name as Record<string, string>)?.korean ?? result.id}</h2>
					<button class="copy-btn" onclick={copyToClipboard}>TS 코드 복사</button>
				</div>

				<!-- 요약 정보 -->
				<div class="summary-grid">
					<div class="summary-item">
						<span class="label">ID</span>
						<span class="value mono">{result.id}</span>
					</div>
					<div class="summary-item">
						<span class="label">테마</span>
						<span class="value">{result.theme}</span>
					</div>
					<div class="summary-item">
						<span class="label">목표</span>
						<span class="value">{result.protagonist_goal}</span>
					</div>
				</div>

				<!-- NPC 역할 -->
				<section class="result-section">
					<h3>NPC 역할</h3>
					{#each Object.entries(result.npc_roles as Record<string, { role: string; arc: string }>) as [key, info]}
						<div class="npc-role-item">
							<div class="npc-role-header">
								<span class="npc-key">{key}</span>
								<span class="role-label">{info.role}</span>
							</div>
							<p class="arc-text">{info.arc}</p>
						</div>
					{/each}
				</section>

				<!-- 시나리오 아웃라인 -->
				<section class="result-section">
					<h3>시나리오 아웃라인</h3>
					{#each result.scenarioOutline as unknown[] as scenario}
						{@const s = scenario as { order: number; act: string; title: string; npc: string; summary: string }}
						<div class="scenario-item">
							<div class="scenario-header">
								<span class="order">#{s.order}</span>
								<span class="act-badge act-{s.act}">{s.act}</span>
								<span class="title">{s.title}</span>
								<span class="npc-tag">{s.npc}</span>
							</div>
							<p class="summary">{s.summary}</p>
						</div>
					{/each}
				</section>

				<!-- 복선 -->
				<section class="result-section">
					<h3>복선</h3>
					{#each result.global_foreshadowing as unknown[] as f}
						{@const item = f as { id: string; hint: string; plant_act: string; reveal_act: string; reveal_context: string }}
						<div class="foreshadow-item">
							<div class="foreshadow-header">
								<span class="fs-id mono">{item.id}</span>
								<span class="fs-acts">{item.plant_act} → {item.reveal_act}</span>
							</div>
							<p class="hint">복선: {item.hint}</p>
							<p class="reveal">폭로: {item.reveal_context}</p>
						</div>
					{/each}
				</section>

				<!-- Raw TS 코드 -->
				<section class="result-section">
					<h3>TypeScript 코드</h3>
					<pre class="ts-code">{toTsCode(result)}</pre>
				</section>
			{:else}
				<div class="empty">
					<p>보스 정보를 입력하고 생성 버튼을 누르세요.</p>
				</div>
			{/if}
		</div>
	</div>
</div>

<style>
	.page {
		max-width: 1400px;
		margin: 0 auto;
		padding: 2rem;
	}

	h1 {
		margin-bottom: 0.25rem;
	}

	.subtitle {
		color: #888;
		margin-bottom: 2rem;
	}

	.layout {
		display: grid;
		grid-template-columns: 420px 1fr;
		gap: 2rem;
		align-items: start;
	}

	.section {
		margin-bottom: 1.5rem;
	}

	.section-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 0.75rem;
	}

	.section-header h2 {
		margin: 0;
	}

	.section h2 {
		font-size: 0.85rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: #888;
		margin-bottom: 0.75rem;
	}

	.mode-toggle {
		display: flex;
		gap: 0;
		border: 1px solid #333;
		border-radius: 4px;
		overflow: hidden;
	}

	.mode-toggle button {
		padding: 0.2rem 0.65rem;
		background: transparent;
		border: none;
		color: #666;
		cursor: pointer;
		font-size: 0.75rem;
		transition: all 0.15s;
	}

	.mode-toggle button:first-child {
		border-right: 1px solid #333;
	}

	.mode-toggle button.active {
		background: #222;
		color: #c8a85a;
	}

	.json-input {
		width: 100%;
		box-sizing: border-box;
		font-family: monospace;
		font-size: 0.82rem;
		line-height: 1.5;
	}

	.json-error {
		color: #e06c75;
		font-size: 0.8rem;
		margin-top: 0.4rem;
	}

	.count {
		color: #555;
		font-weight: normal;
		text-transform: none;
	}

	/* 테마 버튼 */
	.theme-buttons {
		display: flex;
		gap: 0.5rem;
	}

	.theme-btn {
		padding: 0.4rem 1rem;
		border: 1px solid #333;
		border-radius: 4px;
		background: transparent;
		color: #aaa;
		cursor: pointer;
		font-size: 0.85rem;
		transition: all 0.15s;
	}

	.theme-btn.active,
	.theme-btn:hover {
		border-color: #c8a85a;
		color: #c8a85a;
		background: #1a1508;
	}

	/* NPC 목록 */
	.npc-list {
		list-style: none;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.npc-item {
		display: flex;
		gap: 0.75rem;
		align-items: center;
		padding: 0.3rem 0.5rem;
		border-radius: 4px;
		background: #111;
	}

	.npc-key {
		font-family: monospace;
		font-size: 0.8rem;
		color: #c8a85a;
		min-width: 100px;
	}

	.npc-name {
		font-size: 0.85rem;
		color: #aaa;
	}

	/* 폼 */
	.form {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	label {
		display: flex;
		flex-direction: column;
		gap: 0.3rem;
	}

	label span {
		font-size: 0.8rem;
		color: #888;
	}

	.required {
		color: #e06c75;
	}

	input,
	textarea {
		background: #111;
		border: 1px solid #333;
		border-radius: 4px;
		color: #ccc;
		padding: 0.5rem 0.75rem;
		font-size: 0.9rem;
		font-family: inherit;
		resize: vertical;
		transition: border-color 0.15s;
	}

	input:focus,
	textarea:focus {
		outline: none;
		border-color: #555;
	}

	/* 생성 버튼 */
	.generate-btn {
		width: 100%;
		padding: 0.75rem;
		background: #c8a85a;
		color: #000;
		border: none;
		border-radius: 6px;
		font-size: 1rem;
		font-weight: 700;
		cursor: pointer;
		transition: background 0.15s;
	}

	.generate-btn:hover:not(:disabled) {
		background: #e0c070;
	}

	.generate-btn:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.error {
		color: #e06c75;
		font-size: 0.85rem;
		margin-top: 0.5rem;
	}

	/* 결과 패널 */
	.result-panel {
		border: 1px solid #222;
		border-radius: 8px;
		padding: 1.5rem;
		min-height: 400px;
	}

	.loading,
	.empty {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 200px;
		color: #555;
	}

	.result-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 1.25rem;
		gap: 1rem;
	}

	.result-header h2 {
		margin: 0;
		font-size: 1.25rem;
	}

	.copy-btn {
		padding: 0.4rem 0.9rem;
		border: 1px solid #444;
		border-radius: 4px;
		background: transparent;
		color: #aaa;
		cursor: pointer;
		font-size: 0.8rem;
		white-space: nowrap;
		transition: all 0.15s;
	}

	.copy-btn:hover {
		border-color: #c8a85a;
		color: #c8a85a;
	}

	.summary-grid {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
		margin-bottom: 1.5rem;
		padding: 0.75rem;
		background: #111;
		border-radius: 6px;
	}

	.summary-item {
		display: flex;
		gap: 0.75rem;
		align-items: baseline;
	}

	.label {
		font-size: 0.75rem;
		color: #666;
		min-width: 50px;
	}

	.value {
		font-size: 0.9rem;
		color: #ccc;
	}

	.mono {
		font-family: monospace;
		color: #c8a85a;
	}

	.result-section {
		margin-bottom: 1.5rem;
	}

	.result-section h3 {
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: #666;
		margin-bottom: 0.75rem;
		border-bottom: 1px solid #1e1e1e;
		padding-bottom: 0.4rem;
	}

	/* NPC 역할 */
	.npc-role-item {
		margin-bottom: 0.75rem;
		padding: 0.75rem;
		background: #111;
		border-radius: 6px;
		border-left: 3px solid #c8a85a;
	}

	.npc-role-header {
		display: flex;
		gap: 0.75rem;
		align-items: center;
		margin-bottom: 0.35rem;
	}

	.role-label {
		font-size: 0.85rem;
		color: #c8a85a;
		font-weight: 600;
	}

	.arc-text {
		font-size: 0.85rem;
		color: #888;
		margin: 0;
		line-height: 1.5;
	}

	/* 시나리오 */
	.scenario-item {
		margin-bottom: 0.75rem;
		padding: 0.75rem;
		background: #111;
		border-radius: 6px;
	}

	.scenario-header {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		margin-bottom: 0.4rem;
		flex-wrap: wrap;
	}

	.order {
		font-family: monospace;
		font-size: 0.8rem;
		color: #555;
		min-width: 24px;
	}

	.act-badge {
		font-size: 0.7rem;
		padding: 0.15rem 0.5rem;
		border-radius: 3px;
		font-weight: 600;
	}

	.act-intro {
		background: #1a2a1a;
		color: #4caf50;
	}

	.act-rising {
		background: #2a2a1a;
		color: #ffc107;
	}

	.act-climax_finale {
		background: #2a1a1a;
		color: #e06c75;
	}

	.title {
		font-weight: 600;
		font-size: 0.95rem;
		flex: 1;
	}

	.npc-tag {
		font-family: monospace;
		font-size: 0.75rem;
		color: #c8a85a;
		background: #1a1508;
		padding: 0.1rem 0.4rem;
		border-radius: 3px;
	}

	.summary {
		font-size: 0.85rem;
		color: #888;
		margin: 0;
		line-height: 1.5;
	}

	/* 복선 */
	.foreshadow-item {
		margin-bottom: 0.6rem;
		padding: 0.6rem 0.75rem;
		background: #111;
		border-radius: 6px;
	}

	.foreshadow-header {
		display: flex;
		gap: 0.75rem;
		margin-bottom: 0.3rem;
		align-items: center;
	}

	.fs-id {
		font-size: 0.75rem;
		color: #555;
	}

	.fs-acts {
		font-size: 0.75rem;
		color: #666;
	}

	.hint,
	.reveal {
		font-size: 0.82rem;
		margin: 0.15rem 0;
	}

	.hint {
		color: #888;
	}

	.reveal {
		color: #c8a85a;
	}

	/* TS 코드 */
	.ts-code {
		background: #0d0d0d;
		border: 1px solid #222;
		border-radius: 6px;
		padding: 1rem;
		font-family: monospace;
		font-size: 0.78rem;
		color: #ccc;
		overflow-x: auto;
		white-space: pre;
		line-height: 1.5;
		max-height: 500px;
		overflow-y: auto;
	}
</style>
