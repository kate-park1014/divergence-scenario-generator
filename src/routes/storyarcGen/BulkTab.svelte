<script lang="ts">
	import { onMount } from 'svelte';
	import { npc_by_theme } from '$lib/data/npc/npc_pool';
	import type { BossInput } from '$lib/prompts/storyarc/storyarcGen';

	// boss_list JSON 파일 → 보스당 1아크 생성 (/api/storyarc/bulk 업로드 모드).
	// 보스당 1요청으로 쪼개 클라이언트에서 병렬 → 행별 진행/재시도.
	// index.ts 등록은 전 보스 완료 후 1회 (index.ts 변경 시 Vite 가 페이지를 리로드하므로).

	type Theme = keyof typeof npc_by_theme;
	type Status = 'idle' | 'running' | 'ok' | 'failed';
	type Row = { boss: BossInput; key: string; pool: string; status: Status; error: string };

	// 다음 단계(시나리오 벌크)로 넘길 storyarc id 목록
	let { onnext }: { onnext?: (ids: string[]) => void } = $props();

	const THEMES = Object.keys(npc_by_theme) as Theme[];
	const RESTORE_KEY = 'storyarcBulk:lastRun';

	let folderDir = $state('boss_list/bulk');
	let folderFiles = $state<{ file: string; theme: string; count: number; invalid?: boolean }[]>([]);
	let selectedFile = $state('');
	let fileName = $state('');
	let theme = $state<Theme>('desert');
	let outDirName = $state('');
	let concurrency = $state(3);
	let register = $state(true);
	let rows = $state<Row[]>([]);
	let running = $state(false);
	let error = $state('');
	let notice = $state('');

	const okCount = $derived(rows.filter((r) => r.status === 'ok').length);
	const failedCount = $derived(rows.filter((r) => r.status === 'failed').length);
	const keyError = $derived.by(() => {
		const keys = rows.map((r) => r.key);
		if (keys.some((k) => !/^[a-z0-9]+$/.test(k))) return 'key 는 영소문자/숫자만 가능합니다.';
		if (new Set(keys).size !== keys.length) return 'key 가 중복됩니다.';
		if (rows.some((r) => !r.pool.trim())) return 'pool 을 모두 입력하세요.';
		return '';
	});
	const dirError = $derived(/^[a-z0-9_]+$/.test(outDirName) ? '' : '출력 폴더명은 영소문자/숫자/_ 만 가능합니다.');

	const toKey = (name: string) => name.toLowerCase().replace(/[^a-z0-9]/g, '');

	onMount(() => {
		loadFolder();
		// 등록 직후 Vite 리로드로 사라진 결과 복원
		try {
			const saved = sessionStorage.getItem(RESTORE_KEY);
			if (!saved) return;
			sessionStorage.removeItem(RESTORE_KEY);
			const s = JSON.parse(saved);
			fileName = s.fileName;
			theme = s.theme;
			outDirName = s.outDirName;
			rows = s.rows;
			notice = s.notice;
		} catch {
			/* 복원 실패는 무시 */
		}
	});

	async function loadFolder() {
		try {
			const res = await fetch('/api/storyarc/bulk');
			const data = await res.json();
			if (!res.ok) throw new Error(data?.error ?? `HTTP ${res.status}`);
			folderDir = data.dir;
			folderFiles = data.files;
		} catch (err) {
			error = `boss_list 폴더 조회 실패: ${err instanceof Error ? err.message : String(err)}`;
		}
	}

	async function onSelect() {
		if (!selectedFile) return;
		error = '';
		try {
			const res = await fetch(`/api/storyarc/bulk?file=${encodeURIComponent(selectedFile)}`);
			const data = await res.json();
			if (!res.ok) throw new Error(data?.error ?? `HTTP ${res.status}`);
			loadBossList(selectedFile, data);
		} catch (err) {
			rows = [];
			error = `파일 로드 실패: ${err instanceof Error ? err.message : String(err)}`;
		}
	}

	async function onFile(e: Event) {
		const file = (e.currentTarget as HTMLInputElement).files?.[0];
		if (!file) return;
		selectedFile = '';
		try {
			loadBossList(file.name, JSON.parse(await file.text()));
		} catch (err) {
			rows = [];
			error = `파일 파싱 실패: ${err instanceof Error ? err.message : String(err)}`;
		}
	}

	function loadBossList(name: string, data: { theme?: string; bosses?: BossInput[] }) {
		error = '';
		notice = '';
		try {
			const bosses = data.bosses;
			if (!Array.isArray(bosses) || !bosses.length) throw new Error('bosses 배열이 없습니다.');
			const missing = bosses.findIndex((b) => !b?.id || !b?.name);
			if (missing >= 0) throw new Error(`bosses[${missing}] 에 id/name 이 없습니다.`);

			fileName = name;
			if (data.theme && data.theme in npc_by_theme) theme = data.theme as Theme;
			outDirName = name.replace(/\.json$/i, '').toLowerCase().replace(/[^a-z0-9_]/g, '_');
			const seen = new Set<string>();
			rows = bosses.map((boss, i): Row => {
				let key = toKey(boss.name) || `boss${i}`;
				while (seen.has(key)) key += i;
				seen.add(key);
				// pool 미정 → pool_<보스id> placeholder (hell 매핑과 같은 관례). 표에서 수정 가능.
				return { boss, key, pool: `pool_${boss.id}`, status: 'idle', error: '' };
			});
		} catch (err) {
			rows = [];
			error = `파일 파싱 실패: ${err instanceof Error ? err.message : String(err)}`;
		}
	}

	async function generateOne(idx: number, bosses: BossInput[], mapping: { key: string; pool: string }[]) {
		const row = rows[idx];
		row.status = 'running';
		row.error = '';
		try {
			const res = await fetch('/api/storyarc/bulk', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ theme, bosses, mapping, outDirName, bossIndices: [idx], concurrency: 1 })
			});
			const data = await res.json().catch(() => null);
			if (!res.ok) throw new Error(data?.error ?? `HTTP ${res.status}`);
			if (data.failedCount) throw new Error(data.failed[0]?.error ?? '생성 실패');
			row.status = 'ok';
		} catch (err) {
			row.status = 'failed';
			row.error = err instanceof Error ? err.message : String(err);
		}
	}

	async function run(onlyFailed = false) {
		if (keyError || dirError || running) return;
		running = true;
		error = '';
		notice = '';
		const bosses = rows.map((r) => $state.snapshot(r.boss));
		const mapping = rows.map((r) => ({ key: r.key, pool: r.pool.trim() }));
		const targets = rows
			.map((r, i) => ({ r, i }))
			.filter(({ r }) => (onlyFailed ? r.status === 'failed' : r.status !== 'ok'))
			.map(({ i }) => i);

		let cursor = 0;
		const worker = async () => {
			while (cursor < targets.length) await generateOne(targets[cursor++], bosses, mapping);
		};
		await Promise.all(Array.from({ length: Math.max(1, Math.min(10, concurrency)) }, worker));

		const done = rows.map((r, level) => ({ key: r.key, level, ok: r.status === 'ok' })).filter((e) => e.ok);
		const summary = `생성 완료: 성공 ${okCount} / 실패 ${failedCount} → src/lib/data/storyarc/${outDirName}/`;

		if (register && done.length && failedCount === 0) {
			// 리로드 전에 결과 저장 → onMount 에서 복원
			const registeredNotice = `${summary}\nindex.ts 등록 완료 (${done.length}개). 홈/시리즈 탭 목록에 반영됩니다.`;
			try {
				sessionStorage.setItem(
					RESTORE_KEY,
					JSON.stringify({ fileName, theme, outDirName, rows: $state.snapshot(rows), notice: registeredNotice })
				);
			} catch {
				/* 저장 불가 환경은 무시 */
			}
			try {
				const res = await fetch('/api/storyarc/bulk', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ action: 'register', theme, outDirName, entries: done.map(({ key, level }) => ({ key, level })) })
				});
				const data = await res.json().catch(() => null);
				if (!res.ok) throw new Error(data?.error ?? `HTTP ${res.status}`);
				notice = registeredNotice;
			} catch (err) {
				error = `index.ts 등록 실패: ${err instanceof Error ? err.message : String(err)}`;
			}
		} else {
			notice = failedCount
				? `${summary}\n실패한 보스를 재시도한 뒤 전부 성공하면 index.ts 에 등록됩니다.`
				: summary;
		}
		running = false;
	}
</script>

<div class="bulk">
	<section class="section">
		<h2>boss_list 파일 <span class="count">({folderDir}/ · {folderFiles.length}개)</span></h2>
		<div class="folder-pick">
			<select class="file-select" bind:value={selectedFile} onchange={onSelect} disabled={running}>
				<option value="">— 파일 선택 —</option>
				{#each folderFiles as f}
					<option value={f.file} disabled={f.invalid || !f.count}>
						{f.file} · {f.invalid ? 'JSON 오류' : `${f.theme || '?'} · ${f.count}보스`}
					</option>
				{/each}
			</select>
			<button class="refresh-btn" onclick={loadFolder} disabled={running} title="폴더 다시 읽기">새로고침</button>
		</div>
		<label class="file-pick">
			<input type="file" accept=".json,application/json" onchange={onFile} disabled={running} />
			<span>또는 다른 위치의 JSON 직접 선택</span>
		</label>
		<p class="hint-text">
			{folderDir}/ 에 boss_list JSON 을 넣고 새로고침하면 목록에 나타납니다.
			{#if fileName}<br />현재: <span class="mono">{fileName}</span>{/if}
			<br />보스당 스토리아크 1개 생성 · level = 보스 순서(0부터) · order5 boss = pool
		</p>
	</section>

	{#if rows.length}
		<section class="section options">
			<label>
				<span>테마 (NPC 풀)</span>
				<select bind:value={theme} disabled={running}>
					{#each THEMES as t}<option value={t}>{t}</option>{/each}
				</select>
			</label>
			<label>
				<span>출력 폴더 (src/lib/data/storyarc/…)</span>
				<input bind:value={outDirName} disabled={running} />
			</label>
			<label>
				<span>동시 실행</span>
				<input type="number" min="1" max="10" bind:value={concurrency} disabled={running} />
			</label>
			<label class="check">
				<input type="checkbox" bind:checked={register} disabled={running} />
				<span>완료 후 index.ts 등록</span>
			</label>
		</section>

		<section class="section">
			<h2>보스 <span class="count">({rows.length}명 · 성공 {okCount} · 실패 {failedCount})</span></h2>
			<table class="boss-table">
				<thead>
					<tr><th>lv</th><th>보스</th><th>key</th><th>pool</th><th>표면 정체성</th><th>상태</th></tr>
				</thead>
				<tbody>
					{#each rows as row, i}
						<tr class={row.status}>
							<td class="mono">{i}</td>
							<td>
								<div class="boss-name">{row.boss.name}</div>
								<div class="mono dim">{row.boss.id}</div>
							</td>
							<td><input class="mono" bind:value={row.key} disabled={running || row.status === 'ok'} /></td>
							<td>
								<input
									class="mono"
									class:placeholder={row.pool === `pool_${row.boss.id}`}
									bind:value={row.pool}
									disabled={running || row.status === 'ok'}
								/>
							</td>
							<td class="surface">{row.boss.surface_identity}</td>
							<td class="status">
								{#if row.status === 'idle'}대기
								{:else if row.status === 'running'}생성 중…
								{:else if row.status === 'ok'}✓ 완료
								{:else}<span title={row.error}>✗ 실패</span><div class="row-error">{row.error}</div>
								{/if}
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
			<p class="hint-text">
				주황색 pool 은 placeholder(<span class="mono">pool_&lt;보스id&gt;</span>)입니다. 실제 pool 번호가 있으면 바꿔 넣으세요.
				파일명: <span class="mono">storyarc_{theme}_&lt;key&gt;_&lt;lv&gt;.ts</span> (같은 폴더에 있으면 덮어씀)
			</p>
		</section>

		<div class="actions">
			<button class="generate-btn" onclick={() => run()} disabled={running || !!keyError || !!dirError || okCount === rows.length}>
				{running ? `생성 중… (${okCount}/${rows.length})` : okCount ? '남은 보스 생성' : `${rows.length}개 스토리아크 생성`}
			</button>
			{#if failedCount && !running}
				<button class="retry-btn" onclick={() => run(true)}>실패 {failedCount}개 재시도</button>
			{/if}
		</div>
		{#if keyError || dirError}<p class="error">{keyError || dirError}</p>{/if}
	{/if}

	{#if notice}<p class="notice">{notice}</p>{/if}
	{#if error}<p class="error">{error}</p>{/if}

	{#if rows.length && okCount === rows.length && !running && register && onnext}
		<button
			class="next-btn"
			onclick={() => onnext(rows.map((r, i) => `${theme}_${r.key}_${i}`))}
		>
			다음 → 시나리오 생성 ({rows.length}개 아크)
		</button>
	{/if}
</div>

<style>
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

	.count {
		color: #555;
		font-weight: normal;
		text-transform: none;
	}

	.folder-pick {
		display: flex;
		gap: 0.5rem;
		margin-bottom: 0.5rem;
	}

	.file-select {
		flex: 1;
		max-width: 520px;
		padding: 0.5rem;
		font-family: monospace;
		font-size: 0.85rem;
	}

	.refresh-btn {
		padding: 0.5rem 0.9rem;
		background: transparent;
		color: #aaa;
		border: 1px solid #444;
		border-radius: 4px;
		cursor: pointer;
		font-size: 0.8rem;
	}

	.refresh-btn:hover:not(:disabled) {
		border-color: #c8a85a;
		color: #c8a85a;
	}

	.file-pick {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 0.5rem 0.75rem;
		max-width: 520px;
		border: 1px dashed #333;
		border-radius: 6px;
		cursor: pointer;
		color: #777;
		font-size: 0.8rem;
	}

	.file-pick:hover {
		border-color: #c8a85a;
		color: #c8a85a;
	}

	.file-pick input {
		max-width: 110px;
	}

	.hint-text {
		color: #666;
		font-size: 0.8rem;
		margin-top: 0.5rem;
	}

	.options {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		align-items: flex-end;
	}

	.options label {
		display: flex;
		flex-direction: column;
		gap: 0.3rem;
	}

	.options label span {
		font-size: 0.8rem;
		color: #888;
	}

	.options label.check {
		flex-direction: row;
		align-items: center;
		padding-bottom: 0.4rem;
	}

	.options input[type='number'] {
		width: 4rem;
	}

	.options input:not([type]),
	.options select {
		min-width: 14rem;
	}

	.boss-table {
		width: 100%;
		border-collapse: collapse;
		font-size: 0.85rem;
	}

	.boss-table th {
		text-align: left;
		color: #666;
		font-weight: 600;
		font-size: 0.75rem;
		padding: 0.4rem 0.5rem;
		border-bottom: 1px solid #333;
	}

	.boss-table td {
		padding: 0.5rem;
		border-bottom: 1px solid #1e1e1e;
		vertical-align: top;
	}

	.boss-table td input {
		width: 100%;
		min-width: 8rem;
		box-sizing: border-box;
	}

	.boss-table input.placeholder {
		color: #e0a050;
	}

	.boss-name {
		font-weight: 600;
	}

	.mono {
		font-family: monospace;
	}

	.dim {
		color: #666;
		font-size: 0.75rem;
	}

	.surface {
		color: #999;
		max-width: 420px;
		font-size: 0.8rem;
		line-height: 1.4;
	}

	.status {
		white-space: nowrap;
		color: #888;
	}

	tr.running .status {
		color: #c8a85a;
	}

	tr.ok .status {
		color: #4caf50;
	}

	tr.failed .status {
		color: #e06c75;
	}

	.row-error {
		white-space: normal;
		font-size: 0.75rem;
		max-width: 200px;
	}

	.actions {
		display: flex;
		gap: 0.75rem;
	}

	.generate-btn {
		flex: 1;
		padding: 0.75rem;
		background: #c8a85a;
		color: #000;
		border: none;
		border-radius: 6px;
		font-size: 1rem;
		font-weight: 700;
		cursor: pointer;
	}

	.generate-btn:hover:not(:disabled) {
		background: #e0c070;
	}

	.generate-btn:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.retry-btn {
		padding: 0.75rem 1.25rem;
		background: transparent;
		color: #e06c75;
		border: 1px solid #e06c75;
		border-radius: 6px;
		font-weight: 700;
		cursor: pointer;
	}

	.next-btn {
		width: 100%;
		margin-top: 1rem;
		padding: 0.75rem;
		background: #4caf50;
		color: #000;
		border: none;
		border-radius: 6px;
		font-size: 1rem;
		font-weight: 700;
		cursor: pointer;
	}

	.next-btn:hover {
		background: #66bb6a;
	}

	.notice {
		color: #4caf50;
		font-size: 0.85rem;
		margin-top: 0.75rem;
		white-space: pre-line;
	}

	.error {
		color: #e06c75;
		font-size: 0.85rem;
		margin-top: 0.5rem;
		white-space: pre-line;
	}
</style>
