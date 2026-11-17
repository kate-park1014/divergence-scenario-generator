<script lang="ts">
	import { untrack } from 'svelte';
	import { storyarcRegistry } from '$lib/data/storyarc';
	import type { StoryArc } from '$lib/types';
	import ScenarioScript, { LANGS, toLines, toText, type Chapter } from './ScenarioScript.svelte';

	// 스토리아크 → 시나리오 벌크 (/api/scenario/bulk-pipeline: 생성 → process-actors → output/save, 번역은 건너뜀).
	// 번역은 output 확인 후 별도 버튼 (/api/output/translate: output_list JSON 을 직접 번역).
	// 아크당 1요청으로 쪼개 클라이언트에서 병렬 → 아크별 진행/재시도.
	// 생성 이후 단계에서 실패한 아크는 skipGenerate 로 재시도 (이미 생성된 .ts 재사용, LLM 생성 비용 절약).

	type Status = 'idle' | 'running' | 'ok' | 'failed';
	type RunState = { status: Status; error: string; generated: boolean };

	let { initialIds = [] }: { initialIds?: string[] } = $props();

	const THEMES = [...new Set(storyarcRegistry.map((a) => a.theme as string))].sort();

	let theme = $state(
		untrack(() => storyarcRegistry.find((a) => a.id === initialIds[0])?.theme ?? 'desert')
	);
	let checked = $state<Record<string, boolean>>(
		untrack(() => Object.fromEntries(initialIds.map((id) => [id, true])))
	);
	let concurrency = $state(2);
	let runs = $state<Record<string, RunState>>({});
	let trans = $state<Record<string, { status: Status; error: string }>>({});
	let running = $state(false);
	let scriptLang = $state('korean');
	// id 클릭 → 아래 행 펼침: 대본 / 시나리오 JSON / 스토리아크 JSON
	type View = 'script' | 'scenario' | 'arc';
	type Output = { state: 'loading' | 'missing' | 'error' | 'ok'; data?: Chapter; error?: string };
	let expanded = $state<Record<string, boolean>>({});
	let views = $state<Record<string, View>>({});
	let outputs = $state<Record<string, Output>>({});
	// 피날레(order5) boss 덮어쓰기. boss_pool 기본값 = 아크 scenarioOutline 의 보스 pool, monster_id 는 비우면 생략
	let bossPools = $state<Record<string, string>>({});
	let monsterIds = $state<Record<string, string>>({});

	const finalePool = (arc: StoryArc) => arc.scenarioOutline?.find((i) => i.boss !== 'random_boss')?.boss ?? '';
	const bossPoolOf = (arc: StoryArc) => bossPools[arc.id] ?? finalePool(arc);

	const outputName = (level: number | undefined) =>
		`${theme}_chapter_${String(chapterOf(level)).padStart(2, '0')}.json`;

	async function loadOutput(arc: StoryArc) {
		outputs[arc.id] = { state: 'loading' };
		try {
			const res = await fetch(`/api/output?file=${encodeURIComponent(outputName(arc.level))}`);
			const data = await res.json().catch(() => null);
			if (res.status === 404) outputs[arc.id] = { state: 'missing' };
			else if (!res.ok) throw new Error(data?.error ?? `HTTP ${res.status}`);
			// 같은 chapter 번호를 다른 아크가 썼을 수 있으니 scenario_id 로 확인
			else if (!String(data?.scenarios?.[0]?.scenario_id ?? '').startsWith(`${arc.id}_`))
				outputs[arc.id] = { state: 'error', error: `다른 아크의 output 입니다 (${data?.scenarios?.[0]?.scenario_id ?? '?'})` };
			else outputs[arc.id] = { state: 'ok', data };
		} catch (err) {
			outputs[arc.id] = { state: 'error', error: err instanceof Error ? err.message : String(err) };
		}
	}

	function toggle(arc: StoryArc) {
		expanded[arc.id] = !expanded[arc.id];
		if (expanded[arc.id] && !outputs[arc.id]) loadOutput(arc);
	}

	const viewOf = (id: string): View => views[id] ?? (outputs[id]?.state === 'ok' ? 'script' : 'arc');

	const chapterOf = (level: number | undefined) => (level ?? 0) + 1;
	const outputFile = (level: number | undefined) =>
		`output_list/${theme}_chapter_${String(chapterOf(level)).padStart(2, '0')}.json`;

	const arcs = $derived(
		storyarcRegistry.filter((a) => a.theme === theme).sort((a, b) => (a.level ?? 0) - (b.level ?? 0))
	);
	const selected = $derived(arcs.filter((a) => checked[a.id]));
	// 같은 테마에서 level 이 겹치면 output 파일이 덮어써진다
	const dupError = $derived.by(() => {
		const seen = new Map<number, string>();
		for (const a of selected) {
			const ch = chapterOf(a.level);
			if (seen.has(ch)) return `chapter ${ch} 가 겹칩니다: ${seen.get(ch)} / ${a.id} (output 덮어씀)`;
			seen.set(ch, a.id);
		}
		return '';
	});
	const okCount = $derived(selected.filter((a) => runs[a.id]?.status === 'ok').length);
	const transOkCount = $derived(selected.filter((a) => trans[a.id]?.status === 'ok').length);
	const transFailedIds = $derived(selected.filter((a) => trans[a.id]?.status === 'failed').map((a) => a.id));
	const failedIds = $derived(selected.filter((a) => runs[a.id]?.status === 'failed').map((a) => a.id));

	function toggleAll(on: boolean) {
		for (const a of arcs) checked[a.id] = on;
	}

	async function runOne(id: string) {
		const prev = runs[id];
		const skipGenerate = prev?.generated ?? false;
		runs[id] = { status: 'running', error: '', generated: skipGenerate };
		const arc = arcs.find((a) => a.id === id);
		try {
			const res = await fetch('/api/scenario/bulk-pipeline', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					storyarcIds: [id],
					concurrency: 1,
					skipGenerate,
					skipTranslate: true,
					bosses: arc && { [id]: { pool_id: bossPoolOf(arc).trim(), monster_id: (monsterIds[id] ?? '').trim() } }
				})
			});
			const data = await res.json().catch(() => null);
			if (!res.ok) throw new Error(data?.error ?? `HTTP ${res.status}`);
			if (data.okCount) {
				runs[id] = { status: 'ok', error: '', generated: true };
				// 새 output 반영 (펼쳐져 있으면 다시 읽기)
				delete outputs[id];
				if (arc && expanded[id]) loadOutput(arc);
				return;
			}
			const fails: { step: string; order?: number; error: string }[] = data.failed ?? [];
			const genFailed = fails.some((f) => f.step === 'generate' || f.step === 'save');
			runs[id] = {
				status: 'failed',
				error: fails.map((f) => `[${f.step}${f.order ? ` ${f.order}화` : ''}] ${f.error}`).join('\n') || '실패',
				generated: skipGenerate || !genFailed
			};
		} catch (err) {
			runs[id] = { status: 'failed', error: err instanceof Error ? err.message : String(err), generated: skipGenerate };
		}
	}

	async function translateOne(id: string) {
		const arc = arcs.find((a) => a.id === id);
		if (!arc) return;
		trans[id] = { status: 'running', error: '' };
		try {
			const res = await fetch('/api/output/translate', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ file: outputName(arc.level), storyarcId: id })
			});
			const data = await res.json().catch(() => null);
			if (!res.ok) throw new Error(data?.error ?? `HTTP ${res.status}`);
			trans[id] = { status: 'ok', error: '' };
			delete outputs[id];
			if (expanded[id]) loadOutput(arc);
		} catch (err) {
			trans[id] = { status: 'failed', error: err instanceof Error ? err.message : String(err) };
		}
	}

	// 아크 단위 워커풀 (생성·번역 공용)
	async function pool(ids: string[], fn: (id: string) => Promise<void>) {
		if (running || dupError || !ids.length) return;
		running = true;
		let cursor = 0;
		const worker = async () => {
			while (cursor < ids.length) await fn(ids[cursor++]);
		};
		await Promise.all(Array.from({ length: Math.max(1, Math.min(10, concurrency)) }, worker));
		running = false;
	}
	const run = (ids: string[]) => pool(ids, runOne);
	const translate = (ids: string[]) => pool(ids, translateOne);
</script>

<div class="scenario-bulk">
	<section class="section options">
		<label>
			<span>테마</span>
			<select bind:value={theme} disabled={running}>
				{#each THEMES as t}<option value={t}>{t}</option>{/each}
			</select>
		</label>
		<label>
			<span>동시 실행 (아크)</span>
			<input type="number" min="1" max="10" bind:value={concurrency} disabled={running} />
		</label>
		<div class="bulk-select">
			<button onclick={() => toggleAll(true)} disabled={running}>전체 선택</button>
			<button onclick={() => toggleAll(false)} disabled={running}>전체 해제</button>
		</div>
	</section>
	<p class="hint-text">
		① 시나리오 생성: 아크당 5화 생성 → process-actors → output 저장 (chapter = level + 1).
		② 번역: 저장된 output 을 8개 언어로 번역해 같은 파일에 덮어씀.
		동시 실행 1 = 아크 1개(내부 5화 병렬)씩이라 LLM 호출은 대략 동시 실행 × 5.
	</p>

	<section class="section">
		<h2>스토리아크 <span class="count">({arcs.length}개 · 선택 {selected.length} · 완료 {okCount} · 실패 {failedIds.length})</span></h2>
		<table class="arc-table">
			<thead>
				<tr><th></th><th>lv</th><th>id</th><th>제목</th><th>boss_pool</th><th>monster_id</th><th>output</th><th>상태</th></tr>
			</thead>
			<tbody>
				{#each arcs as arc (arc.id)}
					{@const r = runs[arc.id]}
					<tr class={r?.status ?? 'idle'} class:checked={checked[arc.id]}>
						<td><input type="checkbox" bind:checked={checked[arc.id]} disabled={running} /></td>
						<td class="mono">{arc.level ?? 0}</td>
						<td>
							<button class="id-toggle mono" onclick={() => toggle(arc)}>
								<span class="caret">{expanded[arc.id] ? '▾' : '▸'}</span>{arc.id}
							</button>
						</td>
						<td>{arc.chapter_name?.korean}</td>
						<td>
							<input
								class="field mono"
								value={bossPoolOf(arc)}
								oninput={(e) => (bossPools[arc.id] = e.currentTarget.value)}
								placeholder="pool_..."
								disabled={running}
							/>
						</td>
						<td>
							<input class="field mono" bind:value={monsterIds[arc.id]} placeholder="mon_..." disabled={running} />
						</td>
						<td class="mono dim">{outputFile(arc.level)}</td>
						<td class="status">
							{#if !r}{checked[arc.id] ? '대기' : ''}
							{:else if r.status === 'running'}진행 중…{r.generated ? ' (생성 건너뜀)' : ''}
							{:else if r.status === 'ok'}✓ 완료
							{:else}✗ 실패<div class="row-error">{r.error}</div>
							{/if}
							{#if trans[arc.id]}
								{@const t = trans[arc.id]}
								<div class="trans {t.status}">
									{#if t.status === 'running'}번역 중…
									{:else if t.status === 'ok'}✓ 번역 완료
									{:else}✗ 번역 실패<div class="row-error">{t.error}</div>
									{/if}
								</div>
							{/if}
						</td>
					</tr>
					{#if expanded[arc.id]}
						{@const out = outputs[arc.id]}
						{@const view = viewOf(arc.id)}
						<tr class="detail">
							<td colspan="8">
								<div class="detail-head">
									<div class="sub-tabs">
										<button class:active={view === 'script'} onclick={() => (views[arc.id] = 'script')}>대본</button>
										<button class:active={view === 'scenario'} onclick={() => (views[arc.id] = 'scenario')}>시나리오 JSON</button>
										<button class:active={view === 'arc'} onclick={() => (views[arc.id] = 'arc')}>스토리아크 JSON</button>
									</div>
									<div class="detail-actions">
										{#if view === 'script'}
											<select class="lang-select" bind:value={scriptLang}>
												{#each LANGS as l}<option value={l}>{l}</option>{/each}
											</select>
										{/if}
										{#if view !== 'arc'}
											<button class="copy-btn" onclick={() => loadOutput(arc)}>다시 읽기</button>
										{/if}
										{#if view === 'arc'}
											<button class="copy-btn" onclick={() => navigator.clipboard.writeText(JSON.stringify(arc, null, '\t'))}>JSON 복사</button>
										{:else if out?.state === 'ok' && out.data}
											{@const chapter = out.data}
											<button
												class="copy-btn"
												onclick={() =>
													navigator.clipboard.writeText(
														view === 'script' ? toText(toLines(chapter, arc, scriptLang)) : JSON.stringify(chapter, null, '\t')
													)}
											>
												{view === 'script' ? '텍스트 복사' : 'JSON 복사'}
											</button>
										{/if}
									</div>
								</div>

								{#if view === 'arc'}
									<pre class="arc-json">{JSON.stringify(arc, null, 2)}</pre>
								{:else if !out || out.state === 'loading'}
									<p class="hint-text">output 읽는 중…</p>
								{:else if out.state === 'missing'}
									<p class="hint-text">아직 시나리오가 없습니다 (output_list/{outputName(arc.level)}). 생성 후 표시됩니다.</p>
								{:else if out.state === 'error'}
									<p class="error">{out.error}</p>
								{:else if out.data && view === 'script'}
									<ScenarioScript chapter={out.data} {arc} lang={scriptLang} />
								{:else}
									<pre class="arc-json">{JSON.stringify(out.data, null, 2)}</pre>
								{/if}
							</td>
						</tr>
					{/if}
				{/each}
			</tbody>
		</table>
	</section>

	<div class="actions">
		<button
			class="generate-btn"
			onclick={() => run(selected.filter((a) => runs[a.id]?.status !== 'ok').map((a) => a.id))}
			disabled={running || !!dupError || !selected.length || okCount === selected.length}
		>
			{running ? `시나리오 생성 중… (${okCount}/${selected.length})` : `선택한 ${selected.length}개 아크 시나리오 생성`}
		</button>
		{#if failedIds.length && !running}
			<button class="retry-btn" onclick={() => run(failedIds)}>실패 {failedIds.length}개 재시도</button>
		{/if}
	</div>
	<div class="actions">
		<button
			class="translate-btn"
			onclick={() => translate(selected.filter((a) => trans[a.id]?.status !== 'ok').map((a) => a.id))}
			disabled={running || !!dupError || !selected.length || transOkCount === selected.length}
		>
			{running && Object.values(trans).some((t) => t.status === 'running')
				? `번역 중… (${transOkCount}/${selected.length})`
				: `선택한 ${selected.length}개 아크 번역 (8개 언어)`}
		</button>
		{#if transFailedIds.length && !running}
			<button class="retry-btn" onclick={() => translate(transFailedIds)}>번역 실패 {transFailedIds.length}개 재시도</button>
		{/if}
	</div>
	{#if dupError}<p class="error">{dupError}</p>{/if}
	{#if !running && selected.length && okCount === selected.length}
		<p class="notice">완료: {okCount}개 아크 → output_list/ 에 저장, 원본 시나리오는 archived_scenarios/ 로 이동됨. 이제 번역을 돌리세요.</p>
	{/if}
	{#if !running && selected.length && transOkCount === selected.length}
		<p class="notice">번역 완료: {transOkCount}개 아크 (output_list/ 덮어씀). 대본에서 언어를 바꿔 확인할 수 있습니다.</p>
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

	.options {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		align-items: flex-end;
		margin-bottom: 0.5rem;
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

	.options select {
		min-width: 10rem;
	}

	.options input[type='number'] {
		width: 4rem;
	}

	.bulk-select {
		display: flex;
		gap: 0.5rem;
	}

	.bulk-select button {
		padding: 0.35rem 0.75rem;
		background: transparent;
		color: #aaa;
		border: 1px solid #444;
		border-radius: 4px;
		cursor: pointer;
		font-size: 0.8rem;
	}

	.hint-text {
		color: #666;
		font-size: 0.8rem;
		margin-bottom: 1rem;
	}

	.arc-table {
		width: 100%;
		border-collapse: collapse;
		font-size: 0.85rem;
	}

	.arc-table th {
		text-align: left;
		color: #666;
		font-weight: 600;
		font-size: 0.75rem;
		padding: 0.4rem 0.5rem;
		border-bottom: 1px solid #333;
	}

	.arc-table td {
		padding: 0.4rem 0.5rem;
		border-bottom: 1px solid #1e1e1e;
		vertical-align: top;
		color: #777;
	}

	.arc-table tr.checked td {
		color: #ccc;
	}

	.mono {
		font-family: monospace;
	}

	.id-toggle {
		background: none;
		border: none;
		padding: 0;
		color: inherit;
		font-size: inherit;
		cursor: pointer;
		text-align: left;
	}

	.id-toggle:hover {
		color: #c8a85a;
	}

	.caret {
		display: inline-block;
		width: 1rem;
		color: #666;
	}

	.arc-table tr.detail td {
		background: #0d0d0d;
		padding: 0.75rem;
	}

	.detail-head {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 0.5rem;
	}

	.sub-tabs {
		display: flex;
		border: 1px solid #333;
		border-radius: 4px;
		overflow: hidden;
	}

	.sub-tabs button {
		padding: 0.25rem 0.75rem;
		background: transparent;
		border: none;
		border-right: 1px solid #333;
		color: #777;
		cursor: pointer;
		font-size: 0.78rem;
	}

	.sub-tabs button:last-child {
		border-right: none;
	}

	.sub-tabs button.active {
		background: #222;
		color: #c8a85a;
	}

	.detail-actions {
		display: flex;
		gap: 0.4rem;
	}

	.copy-btn {
		padding: 0.25rem 0.65rem;
		background: transparent;
		color: #aaa;
		border: 1px solid #444;
		border-radius: 4px;
		cursor: pointer;
		font-size: 0.75rem;
	}

	.copy-btn:hover {
		border-color: #c8a85a;
		color: #c8a85a;
	}

	.arc-json {
		margin: 0;
		max-height: 480px;
		overflow: auto;
		font-family: monospace;
		font-size: 0.78rem;
		line-height: 1.45;
		color: #bbb;
		white-space: pre-wrap;
		word-break: break-word;
	}

	.dim {
		font-size: 0.75rem;
	}

	.field {
		width: 100%;
		min-width: 8rem;
		padding: 0.2rem 0.4rem;
		background: #111;
		color: #ccc;
		border: 1px solid #333;
		border-radius: 4px;
		font-size: 0.75rem;
	}

	.field:focus {
		outline: none;
		border-color: #c8a85a;
	}

	.status {
		white-space: nowrap;
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
		white-space: pre-line;
		font-size: 0.75rem;
		max-width: 280px;
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

	.translate-btn {
		flex: 1;
		margin-top: 0.75rem;
		padding: 0.75rem;
		background: transparent;
		color: #61afef;
		border: 1px solid #61afef;
		border-radius: 6px;
		font-size: 1rem;
		font-weight: 700;
		cursor: pointer;
	}

	.translate-btn:hover:not(:disabled) {
		background: #0d1a26;
	}

	.translate-btn:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.trans {
		margin-top: 0.2rem;
		font-size: 0.78rem;
		color: #888;
	}

	.trans.running {
		color: #61afef;
	}

	.trans.ok {
		color: #4caf50;
	}

	.trans.failed {
		color: #e06c75;
	}

	.lang-select {
		font-size: 0.75rem;
		padding: 0.2rem 0.3rem;
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

	.notice {
		color: #4caf50;
		font-size: 0.85rem;
		margin-top: 0.75rem;
	}

	.error {
		color: #e06c75;
		font-size: 0.85rem;
		margin-top: 0.5rem;
	}
</style>
