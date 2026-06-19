<script lang="ts">
	import {
		buildBossGen2Prompt,
		bossGen2Tool,
		WORLD_PRESETS,
		BOSS_TONES,
		type BossCard2,
		type BossTone
	} from '$lib/prompts/bossGen2';

	// "전체" = 6개 톤을 하나씩 일괄 생성하는 특수 선택지
	const ALL_TONE = { id: 'all', label: '전체 (톤별 6개)' };

	let selectedIndex = $state(0);
	let selectedToneId = $state(BOSS_TONES[0].id);
	let count = $state(1);

	const isAll = $derived(selectedToneId === ALL_TONE.id);

	// 카드에 톤 라벨을 붙여 표시만 한다 (저장 시 제거)
	type DisplayCard = BossCard2 & { _tone: string };

	let generating = $state(false);
	let progress = $state('');
	let error = $state('');
	let results = $state<DisplayCard[]>([]);

	let saving = $state(false);
	let saveSuccess = $state('');

	const selected = $derived(WORLD_PRESETS[selectedIndex]);

	async function generate() {
		error = '';
		saveSuccess = '';
		results = [];

		const { world_view, theme } = selected;

		// 생성할 톤 목록(jobs) 구성:
		// - 전체: 6개 톤을 하나씩
		// - 단일 톤: 선택한 톤을 개수만큼
		let jobs: BossTone[];
		if (isAll) {
			jobs = [...BOSS_TONES];
		} else {
			const tone = BOSS_TONES.find((t) => t.id === selectedToneId) ?? BOSS_TONES[0];
			const n = Math.max(1, Math.floor(count) || 1);
			jobs = Array.from({ length: n }, () => tone);
		}

		generating = true;
		const cards: DisplayCard[] = [];

		try {
			for (let i = 0; i < jobs.length; i++) {
				const tone = jobs[i];
				progress = `${jobs.length}개 중 ${i + 1}번째 생성 중... (${world_view} · ${theme} · ${tone.label})`;

				const res = await fetch('/api/gemini', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						message: buildBossGen2Prompt(
							world_view,
							theme,
							tone,
							cards.map((c) => `${c.name} — ${c.true_identity.slice(0, 50)}`)
						),
						tools: bossGen2Tool,
						tool_choice: { type: 'function', function: { name: 'generate_boss2' } }
					})
				});

				const data = await res.json();
				if (data.error) {
					error = `${i + 1}번째 생성 실패: ${data.error}`;
					break;
				}

				const gen = data.tool_result as Record<string, string>;
				cards.push({
					id: gen.id ?? '',
					name: gen.name ?? '',
					appearance: gen.appearance ?? '',
					face: gen.face ?? '',
					hair: gen.hair ?? '',
					surface_identity: gen.surface_identity ?? '',
					true_identity: gen.true_identity ?? '',
					motivation: gen.motivation ?? '',
					twist: gen.twist ?? '',
					_tone: tone.label
				});
				results = [...cards];
			}

			if (cards.length > 0) {
				await save(cards);
			}
		} catch (e) {
			error = String(e);
		} finally {
			generating = false;
			progress = '';
		}
	}

	async function save(cards: DisplayCard[]) {
		saving = true;
		// 표시용 _tone 필드는 저장에서 제외
		const bosses: BossCard2[] = cards.map(({ _tone, ...boss }) => boss);
		try {
			const res = await fetch('/api/boss/save', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ theme: selected.theme, bosses })
			});
			const data = await res.json();
			if (data.error) {
				error = data.error;
			} else {
				saveSuccess = `저장 완료: boss_list/${data.filename} (${data.count}개)`;
			}
		} catch (e) {
			error = String(e);
		} finally {
			saving = false;
		}
	}

	function copyCard(card: DisplayCard) {
		const { _tone, ...boss } = card;
		navigator.clipboard.writeText(JSON.stringify(boss, null, 2));
	}
</script>

<div class="page">
	<h1>Boss 생성기 v2</h1>
	<p class="subtitle">
		세계관과 테마만 선택하면 AI가 보스를 처음부터 끝까지 창작합니다. (입력 데이터 불필요)
	</p>

	<div class="layout">
		<div class="input-panel">
			<!-- 세계관·테마 프리셋 -->
			<section class="section">
				<h2>세계관 · 테마</h2>
				<div class="preset-buttons">
					{#each WORLD_PRESETS as preset, i}
						<button
							class="preset-btn"
							class:active={selectedIndex === i}
							onclick={() => (selectedIndex = i)}
						>
							<span class="wv">{preset.world_view}</span>
							<span class="dot">·</span>
							<span class="th">{preset.theme}</span>
						</button>
					{/each}
				</div>
			</section>

			<!-- 보스 톤(느낌) -->
			<section class="section">
				<h2>보스 톤 (느낌)</h2>
				<div class="tone-buttons">
					{#each BOSS_TONES as tone}
						<button
							class="tone-btn"
							class:active={selectedToneId === tone.id}
							title={tone.guide}
							onclick={() => (selectedToneId = tone.id)}
						>
							{tone.label}
						</button>
					{/each}
					<button
						class="tone-btn all"
						class:active={isAll}
						title="6개 톤을 하나씩, 총 6개를 일괄 생성합니다."
						onclick={() => (selectedToneId = ALL_TONE.id)}
					>
						{ALL_TONE.label}
					</button>
				</div>
			</section>

			<!-- 생성 개수 -->
			<section class="section">
				<h2>생성 개수</h2>
				<input class="count-input" type="number" min="1" bind:value={count} disabled={isAll} />
				{#if isAll}
					<p class="count-hint">전체 선택 시 톤별 1개씩 총 6개가 생성됩니다.</p>
				{/if}
			</section>

			<button class="generate-btn" onclick={generate} disabled={generating}>
				{generating ? '생성 중...' : '보스 생성'}
			</button>

			{#if progress}
				<p class="progress">{progress}</p>
			{/if}
			{#if saveSuccess}
				<p class="save-success">{saveSuccess}</p>
			{/if}
			{#if error}
				<p class="error">{error}</p>
			{/if}
		</div>

		<!-- 결과 패널 -->
		<div class="result-panel">
			{#if results.length > 0}
				{#each results as card}
					<div class="boss-card">
						<div class="card-header">
							<h3>{card.name}<span class="tone-badge">{card._tone}</span></h3>
							<button class="copy-btn" onclick={() => copyCard(card)}>JSON 복사</button>
						</div>
						<div class="field"><span class="key">id</span><span class="mono">{card.id}</span></div>
						<div class="field"><span class="key">appearance</span><span>{card.appearance}</span></div>
						<div class="field"><span class="key">face</span><span>{card.face}</span></div>
						<div class="field"><span class="key">hair</span><span>{card.hair}</span></div>
						<div class="field"><span class="key">surface</span><span>{card.surface_identity}</span></div>
						<div class="field"><span class="key">true</span><span>{card.true_identity}</span></div>
						<div class="field"><span class="key">motivation</span><span>{card.motivation}</span></div>
						<div class="field"><span class="key">twist</span><span>{card.twist}</span></div>
					</div>
				{/each}
			{:else if generating}
				<div class="loading"><p>Gemini가 보스를 설계 중입니다...</p></div>
			{:else}
				<div class="empty"><p>세계관·테마를 선택하고 생성 버튼을 누르세요.</p></div>
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

	.section h2 {
		font-size: 0.85rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: #888;
		margin-bottom: 0.75rem;
	}

	.preset-buttons {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.preset-btn {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.6rem 1rem;
		border: 1px solid #333;
		border-radius: 4px;
		background: transparent;
		color: #aaa;
		cursor: pointer;
		font-size: 0.9rem;
		transition: all 0.15s;
		text-align: left;
	}

	.preset-btn.active,
	.preset-btn:hover {
		border-color: #c8a85a;
		color: #c8a85a;
		background: #1a1508;
	}

	.preset-btn .wv {
		font-weight: 700;
	}

	.preset-btn .dot {
		color: #555;
	}

	.preset-btn .th {
		color: #888;
	}

	.preset-btn.active .th {
		color: #c8a85a;
	}

	.tone-buttons {
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
	}

	.tone-btn {
		padding: 0.4rem 1rem;
		border: 1px solid #333;
		border-radius: 4px;
		background: transparent;
		color: #aaa;
		cursor: pointer;
		font-size: 0.85rem;
		transition: all 0.15s;
	}

	.tone-btn.active,
	.tone-btn:hover {
		border-color: #c8a85a;
		color: #c8a85a;
		background: #1a1508;
	}

	.tone-btn.all {
		border-style: dashed;
	}

	.count-hint {
		color: #888;
		font-size: 0.78rem;
		margin-top: 0.4rem;
	}

	.count-input:disabled {
		opacity: 0.4;
		cursor: not-allowed;
	}

	.tone-badge {
		margin-left: 0.5rem;
		padding: 0.1rem 0.5rem;
		border: 1px solid #c8a85a;
		border-radius: 999px;
		color: #c8a85a;
		font-size: 0.68rem;
		font-weight: 500;
		vertical-align: middle;
	}

	.count-input {
		width: 100px;
		box-sizing: border-box;
		background: #111;
		border: 1px solid #333;
		border-radius: 4px;
		color: #ccc;
		padding: 0.5rem 0.75rem;
		font-size: 0.9rem;
	}

	.count-input:focus {
		outline: none;
		border-color: #555;
	}

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

	.progress {
		color: #c8a85a;
		font-size: 0.85rem;
		margin-top: 0.5rem;
	}

	.save-success {
		color: #4caf50;
		font-size: 0.85rem;
		margin-top: 0.5rem;
	}

	.error {
		color: #e06c75;
		font-size: 0.85rem;
		margin-top: 0.5rem;
	}

	.result-panel {
		border: 1px solid #222;
		border-radius: 8px;
		padding: 1.5rem;
		min-height: 400px;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.loading,
	.empty {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 200px;
		color: #555;
	}

	.boss-card {
		border: 1px solid #222;
		border-left: 3px solid #c8a85a;
		border-radius: 6px;
		padding: 1rem;
		background: #111;
	}

	.card-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 0.75rem;
	}

	.card-header h3 {
		margin: 0;
		font-size: 1.1rem;
	}

	.copy-btn {
		padding: 0.35rem 0.8rem;
		border: 1px solid #444;
		border-radius: 4px;
		background: transparent;
		color: #aaa;
		cursor: pointer;
		font-size: 0.78rem;
		transition: all 0.15s;
	}

	.copy-btn:hover {
		border-color: #c8a85a;
		color: #c8a85a;
	}

	.field {
		display: flex;
		gap: 0.75rem;
		padding: 0.35rem 0;
		font-size: 0.85rem;
		line-height: 1.5;
		border-top: 1px solid #1a1a1a;
	}

	.key {
		flex-shrink: 0;
		width: 90px;
		color: #666;
		font-size: 0.72rem;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		padding-top: 0.1rem;
	}

	.mono {
		font-family: monospace;
		color: #c8a85a;
	}
</style>
