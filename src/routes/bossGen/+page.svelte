<script lang="ts">
	import { buildBossPrompt, bossGenTool, type BossSourceInput } from '$lib/prompts/bossGen';

	const THEMES = ['modern', 'forest', 'snowy', 'desert', 'hell'];

	type BossCard = {
		id: string;
		name: string;
		appearance: string;
		face: string;
		hair: string;
		surface_identity: string;
		true_identity: string;
		motivation: string;
		twist: string;
		zodiac_sign?: string;
	};

	let selectedTheme = $state('modern');
	let sourceJson = $state('');
	let jsonParseError = $state('');

	let generating = $state(false);
	let progress = $state('');
	let error = $state('');
	let results = $state<BossCard[]>([]);

	let saving = $state(false);
	let saveSuccess = $state('');

	function parseInput(raw: string): unknown {
		try {
			return JSON.parse(raw);
		} catch {
			// JS 객체 리터럴 (작은따옴표, 키 따옴표 없음) 허용
			return new Function('return (' + raw + ')')();
		}
	}

	// 다양한 입력 형식을 [key, monster] 목록으로 정규화
	// ① pool_xxx 래퍼 맵  ② 단일 몬스터 객체  ③ 배열
	function normalizeEntries(parsed: unknown): [string, Record<string, unknown>][] {
		const isObj = (v: unknown): v is Record<string, unknown> => !!v && typeof v === 'object';
		const keyOf = (v: Record<string, unknown>) => String(v.monster_id ?? v.id ?? '');

		if (Array.isArray(parsed)) {
			return parsed.filter(isObj).map((v) => [keyOf(v), v]);
		}
		if (!isObj(parsed)) return [];

		// 단일 몬스터 객체 (pool 래퍼 없음): monster_id/profile 가 최상위에 존재
		if ('monster_id' in parsed || 'profile' in parsed) {
			return [[keyOf(parsed), parsed]];
		}

		// pool_xxx → 몬스터 맵
		return Object.entries(parsed).filter(
			(e): e is [string, Record<string, unknown>] => isObj(e[1])
		);
	}

	function toSource(key: string, entry: Record<string, unknown>): BossSourceInput {
		const profile = (entry.profile ?? {}) as Record<string, unknown>;
		const s = (v: unknown) => String(v ?? '');
		// 값이 profile 안에 있든 최상위에 있든 읽기
		const pick = (k: string) => s(profile[k] ?? entry[k]);
		// 변경된 형식: 최상위 키가 pool_xxx → storyarc boss ref(pool_XXX)로 그대로 사용
		const id = /^pool[_-]/i.test(key) ? key : s(entry.monster_id ?? entry.id ?? key);
		return {
			id,
			name: s(entry.name ?? profile.monster_name),
			world_view: pick('world_view'),
			introduction: pick('introduction'),
			description: pick('description'),
			background: pick('background'),
			gender: pick('gender'),
			zodiac_sign: pick('zodiac_sign') || undefined
		};
	}

	async function generate() {
		error = '';
		saveSuccess = '';
		jsonParseError = '';
		results = [];

		let parsed: unknown;
		try {
			parsed = parseInput(sourceJson);
		} catch {
			jsonParseError = 'JSON 또는 JS 객체 형식이 올바르지 않습니다.';
			return;
		}

		// 단일 몬스터 객체 / pool_xxx 맵 / 배열 모두 지원
		const entries = normalizeEntries(parsed);

		if (entries.length === 0) {
			error = '몬스터 데이터를 찾을 수 없습니다. (단일 몬스터 객체 또는 pool_xxx 맵)';
			return;
		}

		generating = true;
		const cards: BossCard[] = [];

		try {
			for (let i = 0; i < entries.length; i++) {
				const [key, entry] = entries[i];
				const src = toSource(key, entry);
				progress = `${entries.length}개 중 ${i + 1}번째 생성 중... (${src.name || src.id})`;

				if (!src.id || !src.name) {
					error = `${i + 1}번째 항목에 monster_id 또는 name이 없습니다.`;
					break;
				}

				const res = await fetch('/api/gemini', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						message: buildBossPrompt(src, selectedTheme),
						tools: bossGenTool,
						tool_choice: { type: 'function', function: { name: 'generate_boss' } }
					})
				});

				const data = await res.json();
				if (data.error) {
					error = `${src.name} 생성 실패: ${data.error}`;
					break;
				}

				const gen = data.tool_result as Record<string, string>;
				const zodiac = gen.zodiac_sign || src.zodiac_sign;
				cards.push({
					id: src.id,
					name: src.name,
					appearance: gen.appearance ?? '',
					face: gen.face ?? '',
					hair: gen.hair ?? '',
					surface_identity: gen.surface_identity ?? '',
					true_identity: gen.true_identity ?? '',
					motivation: gen.motivation ?? '',
					twist: gen.twist ?? '',
					...(zodiac ? { zodiac_sign: zodiac } : {})
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

	async function save(bosses: BossCard[]) {
		saving = true;
		try {
			const res = await fetch('/api/boss/save', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ theme: selectedTheme, bosses })
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

	function copyCard(card: BossCard) {
		navigator.clipboard.writeText(JSON.stringify(card, null, 2));
	}
</script>

<div class="page">
	<h1>Boss 생성기</h1>
	<p class="subtitle">
		몬스터 프로필(boss_info.json)을 입력하면 StoryArc 생성기에 바로 넣을 수 있는 보스 카드를 생성합니다.
	</p>

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

			<!-- 입력 -->
			<section class="section">
				<h2>몬스터 프로필 JSON</h2>
				<textarea
					class="json-input"
					bind:value={sourceJson}
					rows={22}
					placeholder={`{\n  "pool_101": {\n    "monster_id": "mon_...",\n    "name": "Rohan Khanna",\n    "profile": {\n      "introduction": "...",\n      "description": "...",\n      "background": "...",\n      "gender": "male",\n      "world_view": "Gangsters"\n    }\n  }\n}`}
					oninput={() => {
						jsonParseError = '';
					}}
				></textarea>
				{#if jsonParseError}
					<p class="json-error">{jsonParseError}</p>
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
							<h3>{card.name}</h3>
							<button class="copy-btn" onclick={() => copyCard(card)}>JSON 복사</button>
						</div>
						<div class="field"><span class="key">id</span><span class="mono">{card.id}</span></div>
						{#if card.zodiac_sign}
							<div class="field"><span class="key">zodiac</span><span>{card.zodiac_sign}</span></div>
						{/if}
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
				<div class="empty"><p>몬스터 프로필 JSON을 입력하고 생성 버튼을 누르세요.</p></div>
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

	.theme-buttons {
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
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

	.json-input {
		width: 100%;
		box-sizing: border-box;
		background: #111;
		border: 1px solid #333;
		border-radius: 4px;
		color: #ccc;
		padding: 0.5rem 0.75rem;
		font-family: monospace;
		font-size: 0.82rem;
		line-height: 1.5;
		resize: vertical;
	}

	.json-input:focus {
		outline: none;
		border-color: #555;
	}

	.json-error {
		color: #e06c75;
		font-size: 0.8rem;
		margin-top: 0.4rem;
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
