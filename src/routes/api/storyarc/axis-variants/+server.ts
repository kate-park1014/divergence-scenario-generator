import { json } from '@sveltejs/kit';
import { mkdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import { getStoryarc } from '$lib/data/storyarc';
import { npc_by_theme } from '$lib/data/sample/npc_pool';
import {
	AXIS_COMBOS,
	GENRE_POOL,
	axisVariantTool,
	buildAxisVariantPrompt,
	buildGenreAssignPrompt,
	findGenre,
	genreAssignTool,
	type AxisCombo,
	type AxisVariant,
	type AxisVariantSet
} from '$lib/prompts/axisVariantGen';
import type { NpcInput } from '$lib/prompts/storyarcGen';
import type { RequestHandler } from './$types';

/**
 * 기존 storyarc 1개 → 성향 3축 조합(8종)별 변주 storyarc 생성.
 * intro(order1)·world·final_boss·복선은 원본 고정, rising 3씬 + climax summary 만 교체.
 * 조합마다 장르(GENRE_POOL)를 겹치지 않게 배정: 직접 지정 > 기존 세트의 배정 > LLM 배정(1콜).
 *
 * body:
 *  - sourceId: string            원본 storyarc id (예: 'modern_whisperweb_0')
 *  - combos?: AxisCombo[]        생성할 조합 부분집합 (기본 8종 전체)
 *  - genres?: { [combo]: 장르 이름 }  장르 직접 지정 (GENRE_POOL 이름). 나머지는 자동 배정
 *  - concurrency?: number        동시 실행 수 (기본 4, 1~8)
 *  - temperature?: number        기본 1.0
 *  - dryRun?: boolean
 *
 * 출력: src/lib/data/storyarc/axis_test/axis_<sourceId>.ts (원본 참조 + 조합별 차이분만 담은 단일 파일)
 */

const OUT_DIR = 'src/lib/data/storyarc/axis_test';

export const POST: RequestHandler = async ({ request, fetch }) => {
	const body = await request.json();
	const source = getStoryarc(String(body.sourceId ?? ''));
	if (!source) return json({ error: `storyarc 없음: ${body.sourceId}` }, { status: 400 });

	const combos: AxisCombo[] = Array.isArray(body.combos)
		? body.combos.filter((c: string) => (AXIS_COMBOS as readonly string[]).includes(c))
		: [...AXIS_COMBOS];
	const concurrency = Math.max(1, Math.min(8, Number(body.concurrency) || 4));
	const temperature: number = body.temperature !== undefined ? Number(body.temperature) : 1.0;

	const npcPool = npc_by_theme[source.theme as keyof typeof npc_by_theme];
	if (!npcPool) return json({ error: `NPC 풀 없음: ${source.theme}` }, { status: 400 });
	// 출연진은 원본 아크 그대로 (원본 outline·npc_roles 에 나온 NPC 만). 보스는 제외
	const cast = new Set([
		...source.scenarioOutline.map((s) => s.npc),
		...Object.keys(source.npc_roles ?? {})
	]);
	const npcs: NpcInput[] = npcPool
		.filter((n) => cast.has(n.key))
		.map((n) => ({
			key: n.key,
			name_korean: n.name.korean,
			name_english: n.name.english
		}));
	const npcKeys = new Set(npcs.map((n) => n.key));

	const setName = `axis_${source.id}`;
	const setPath = join(process.cwd(), OUT_DIR, `${setName}.ts`);
	if (body.dryRun) {
		return json({ dryRun: true, sourceId: source.id, combos, file: `${OUT_DIR}/${setName}.ts` });
	}

	async function gemini(
		message: string,
		tools: { function: { name: string } }[] = axisVariantTool
	) {
		const res = await fetch('/api/gemini', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				message,
				tools,
				tool_choice: { type: 'function', function: { name: tools[0].function.name } },
				temperature
			})
		});
		const data = await res.json().catch(() => null);
		if (!res.ok || !data?.tool_result) throw new Error(data?.error ?? `gemini ${res.status}`);
		return data.tool_result as Record<string, any>;
	}

	// 기존 세트 파일이 있으면 이어서 갱신 (부분 조합 재생성 시 나머지 보존)
	const set: AxisVariantSet = { sourceId: source.id, variants: {} };
	try {
		const prev = await readFile(setPath, 'utf-8');
		Object.assign(
			set.variants,
			JSON.parse(prev.match(/: AxisVariantSet = (\{[\s\S]*\});/)![1]).variants
		);
	} catch {
		/* 새 세트 */
	}

	// 장르 배정: 직접 지정 > 이번에 안 건드리는 조합의 기존 배정(겹침 방지용) > LLM
	const genres: Partial<Record<AxisCombo, NonNullable<AxisVariant['genre']>>> = {};
	for (const [c, name] of Object.entries(body.genres ?? {})) {
		const g = findGenre(String(name));
		if (!g) return json({ error: `장르 풀에 없음: ${name}` }, { status: 400 });
		if ((AXIS_COMBOS as readonly string[]).includes(c)) genres[c as AxisCombo] = g;
	}
	for (const c of AXIS_COMBOS) {
		const prev = set.variants[c]?.genre;
		if (!genres[c] && prev && !combos.includes(c)) genres[c] = prev;
	}
	const toAssign = combos.filter((c) => !genres[c]);
	if (toAssign.length) {
		const fixed = Object.fromEntries(Object.entries(genres).map(([c, g]) => [c, g!.name]));
		try {
			const res = await gemini(buildGenreAssignPrompt(source, toAssign, fixed), genreAssignTool);
			const used = new Set(Object.values(genres).map((g) => g!.name));
			for (const a of Array.isArray(res.assignments) ? res.assignments : []) {
				const g = findGenre(String(a.genre));
				if (!g || used.has(g.name) || !toAssign.includes(a.combo) || genres[a.combo as AxisCombo])
					continue;
				genres[a.combo as AxisCombo] = { ...g, reason: String(a.reason ?? '') };
				used.add(g.name);
			}
		} catch {
			/* 아래에서 남은 조합을 풀 순서대로 채움 */
		}
		// LLM 이 빠뜨리거나 중복 배정한 조합은 안 쓴 장르로 채움
		const used = new Set(Object.values(genres).map((g) => g!.name));
		for (const c of toAssign) {
			if (genres[c]) continue;
			const g = GENRE_POOL.find((x) => !used.has(x.name))!;
			genres[c] = findGenre(g.name)!;
			used.add(g.name);
		}
	}

	const ok: string[] = [];
	const failed: { combo: string; error: string }[] = [];

	async function processCombo(combo: AxisCombo) {
		try {
			const gen = await gemini(buildAxisVariantPrompt(source!, combo, npcs, genres[combo]));
			const rising: Record<string, any>[] = Array.isArray(gen.rising) ? gen.rising : [];
			if (rising.length !== 3) throw new Error(`rising 씬 수 ${rising.length} (3 필요)`);
			const orig = [...source!.scenarioOutline].sort((a, b) => a.order - b.order);

			set.variants[combo] = {
				variant_note: String(gen.variant_note ?? ''),
				genre: genres[combo],
				facts: Array.isArray(gen.facts) ? gen.facts.map(String) : [],
				rising: rising.map((r, i) => {
					const s = orig[i + 1]; // order 2,3,4
					return {
						order: s.order,
						title: String(r.title),
						npc: npcKeys.has(r.npc) ? r.npc : s.npc,
						summary: String(r.summary),
						axis_focus: String(r.axis_focus ?? '')
					};
				}),
				climax_summary: String(gen.climax_summary),
				act_summary: {
					rising: String(gen.act_summary?.rising ?? source!.act_summary.rising),
					climax_finale: String(gen.act_summary?.climax_finale ?? source!.act_summary.climax_finale)
				},
				npc_roles: Object.fromEntries(
					Object.entries(gen.npc_roles ?? {}).filter(([k]) => npcKeys.has(k))
				) as AxisVariant['npc_roles']
			};
			ok.push(combo);
		} catch (e) {
			failed.push({ combo, error: e instanceof Error ? e.message : String(e) });
		}
	}

	let cursor = 0;
	await Promise.all(
		Array.from({ length: concurrency }, async () => {
			while (cursor < combos.length) await processCombo(combos[cursor++]);
		})
	);

	// 조합 순서 고정해서 저장
	const ordered: AxisVariantSet = { sourceId: source.id, variants: {} };
	for (const c of AXIS_COMBOS) if (set.variants[c]) ordered.variants[c] = set.variants[c];
	await mkdir(join(process.cwd(), OUT_DIR), { recursive: true });
	await writeFile(
		setPath,
		`import type { AxisVariantSet } from '$lib/prompts/axisVariantGen';\n\nexport const ${setName}: AxisVariantSet = ${JSON.stringify(ordered, null, '\t')};\n`,
		'utf-8'
	);

	return json({
		sourceId: source.id,
		file: `${OUT_DIR}/${setName}.ts`,
		genres: Object.fromEntries(combos.map((c) => [c, genres[c]?.name])),
		okCount: ok.length,
		ok,
		failedCount: failed.length,
		failed
	});
};
