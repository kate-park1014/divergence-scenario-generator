import { json } from '@sveltejs/kit';
import { mkdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import { npc_by_theme } from '$lib/data/sample/npc_pool';
import { getNpcPersona } from '$lib/data/sample/npc';
import {
	assignCast,
	buildNetshortPrompt,
	checkNetshortStory,
	netshortStoryTool,
	netshortToMarkdown,
	pickDevice,
	pickSeeds,
	usedStoryOf,
	victimNpcOf,
	type NetshortNpc,
	type NetshortStory,
	type PickedSeeds,
	type StorySeeds,
	type UsedStory
} from '$lib/prompts/netshortStory';
import type { RequestHandler } from './$types';

/**
 * 넷쇼트 스타일 5화 스토리 (netshort_test/story-prompt.md).
 * story-seeds.json 에서 재료를 랜덤으로 뽑아 → 한 번에 story.json.
 *
 * body:
 *  - ids?: string[]         이미 만든 이야기 id. <outDir>/<id>/seeds.json 의 재료 그대로 다시 씀
 *  - count?: number         ids 가 없을 때 새로 만들 개수 (기본 1). id 는 <world.key>_<시각>_<n>
 *  - words?: boolean        random_words 두 개를 장면 소품으로 씀 (기본 true)
 *  - seedsFile?: string     기본 src/lib/data/storyarc/netshort_test/story-seeds.json
 *  - outDir?: string        기본 src/lib/data/storyarc/netshort_test → <outDir>/<id>/seeds.json, story.json, story.md
 *  - concurrency?: number   동시 실행 (기본 2)
 *  - temperature?: number   기본 0.8
 * 코드 검사에 걸리면 오류를 붙여 최대 2번 다시 요청. 그래도 남으면 저장하고 errors 로 돌려줌.
 * 저장한 이야기는 seedsFile 의 used_stories 에 추가 (같은 id 면 바꿔 씀).
 */

const DEFAULT_SEEDS = 'src/lib/data/storyarc/netshort_test/story-seeds.json';
const DEFAULT_OUT_DIR = 'src/lib/data/storyarc/netshort_test';
const MAX_RETRY = 2;

type NpcSource = { key: string; name: { korean: string }; persona?: string };

export const POST: RequestHandler = async ({ request, fetch }) => {
	const body = await request.json();
	const seedsFile = join(process.cwd(), body.seedsFile ?? DEFAULT_SEEDS);
	const seeds = JSON.parse(await readFile(seedsFile, 'utf-8')) as StorySeeds;
	const outDir: string = body.outDir ?? DEFAULT_OUT_DIR;
	const words = body.words !== false;
	const concurrency = Math.max(1, Math.min(10, Number(body.concurrency) || 2));
	const temperature = body.temperature !== undefined ? Number(body.temperature) : 0.8;

	// 새로 만들 것: id → 재료. 다시 쓸 것: 저장된 seeds.json
	const jobs: { id: string; picked?: PickedSeeds }[] = [];
	const ids: string[] = Array.isArray(body.ids) ? body.ids.map(String) : [];
	if (ids.length) for (const id of ids) jobs.push({ id });
	else {
		const stamp = new Date().toISOString().replace(/\D/g, '').slice(0, 14);
		const count = Math.max(1, Math.min(20, Number(body.count) || 1));
		for (let i = 1; i <= count; i++) {
			const picked = pickSeeds(seeds, { words });
			jobs.push({ id: `${picked.world.key}_${stamp}_${i}`, picked });
		}
	}

	const pool = ((npc_by_theme[seeds.theme as keyof typeof npc_by_theme] ?? []) as readonly NpcSource[]).map((n): NetshortNpc => {
		const persona = n.persona ?? getNpcPersona(n.key);
		return persona ? { id: n.key, name: n.name.korean, persona } : { id: n.key, name: n.name.korean };
	});
	if (!pool.length) return json({ error: `테마 ${seeds.theme} 의 NPC 풀이 없습니다.` }, { status: 400 });
	const poolIds = pool.map((n) => n.id);

	async function gemini(message: string, tool: { function: { name: string } }, busy = 0): Promise<unknown> {
		const res = await fetch('/api/gemini', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ message, tools: [tool], tool_choice: { type: 'function', function: { name: tool.function.name } }, temperature })
		});
		const data = await res.json().catch(() => null);
		// Gemini 과부하(503)·한도(429)는 잠깐 기다렸다 다시 (최대 4번)
		if ((res.status === 503 || res.status === 429) && busy < 4) {
			await new Promise((r) => setTimeout(r, 5000 * (busy + 1)));
			return gemini(message, tool, busy + 1);
		}
		const out = data?.tool_result;
		if (!res.ok || !out) throw new Error(data?.error ?? `gemini ${res.status}`);
		return out;
	}

	async function runOne(id: string, given?: PickedSeeds) {
		const dir = join(outDir, id);
		const abs = (f: string) => join(process.cwd(), dir, f);
		await mkdir(join(process.cwd(), dir), { recursive: true });
		const picked = given ?? (JSON.parse(await readFile(abs('seeds.json'), 'utf-8')) as PickedSeeds);
		// 예전 seeds.json(장치 형태 device_form 만 있음)은 그 무대의 장치를 새로 뽑아 넣는다
		const before = JSON.stringify(picked);
		if (!picked.device) picked.device = pickDevice(seeds, picked.world.key);
		// 장치 문장(harm·wrong/right_action 포함)은 늘 지금 story-seeds.json 의 것으로
		picked.device = seeds.devices.find((x) => x.key === picked.device.key) ?? picked.device;
		// 화별 이유 문구도 지금 seeds 것으로 (key 는 그대로)
		picked.reasons = picked.reasons.map((r) => seeds.reason_types.find((x) => x.key === r.key) ?? r);
		// NPC·흔적 화가 없으면 코드가 정함 (예전 seeds.json 포함)
		const cast = picked.npcs?.length === 5 && picked.npcs.every((n) => poolIds.includes(n)) && picked.trace_orders?.length ? null : assignCast(poolIds);
		if (cast) Object.assign(picked, cast);
		if (given || JSON.stringify(picked) !== before) await writeFile(abs('seeds.json'), JSON.stringify(picked, null, 2));
		const npcs = picked.npcs!;
		const korean = (npcId: string) => pool.find((n) => n.id === npcId)?.name ?? npcId;
		// 코드가 정한 값은 Gemini 출력 위에 덮어씀: 장치 문장·행동, 화별 NPC, 2~4화 실제 피해자
		const fixDevice = (o: NetshortStory) => {
			if (!o || typeof o !== 'object') return o;
			const dv = picked.device;
			o.design = { ...(o.design ?? {}), device: dv.object, how: dv.rule, visible_effect: dv.effect, wrong_action: dv.wrong_action, right_action: dv.right_action } as NetshortStory['design'];
			for (const x of o.design.deceptions ?? []) if (victimNpcOf(npcs, x?.order)) x.actual_victim = korean(victimNpcOf(npcs, x.order));
			for (const e of o.episodes ?? []) if (e?.order >= 1 && e.order <= 5) e.npc = { ...(e.npc ?? { role: '' }), name: npcs[e.order - 1] };
			return o;
		};

		const prompt = buildNetshortPrompt(id, picked, {
			themeDescription: seeds.theme_description,
			npcPool: pool,
			banned: seeds.banned_cliches ?? [],
			used: (seeds.used_stories ?? []).filter((u) => u.id !== id)
		});
		// 오류가 있으면 오류와 이전 출력을 붙여 다시 요청
		let out = fixDevice((await gemini(prompt, netshortStoryTool)) as NetshortStory);
		let errors = checkNetshortStory(out, picked.trace_orders);
		let tries = 1;
		while (errors.length && tries <= MAX_RETRY) {
			out = fixDevice((await gemini(
				`${prompt}

---

[이전 출력]
${JSON.stringify(out, null, 2)}

[고칠 것]
${errors.map((e) => `- ${e}`).join('\n')}

위 오류만 고치고 나머지는 그대로 두어 다시 답하라.`,
				netshortStoryTool
			)) as NetshortStory);
			errors = checkNetshortStory(out, picked.trace_orders);
			tries++;
		}
		out.id = id;
		await writeFile(abs('story.json'), JSON.stringify(out, null, 2));
		await writeFile(abs('story.md'), netshortToMarkdown(out, picked));
		return { id, dir, title: out.title, errors, tries, used: usedStoryOf(out, picked) };
	}

	const arcs: Awaited<ReturnType<typeof runOne>>[] = [];
	const failed: { id: string; error: string }[] = [];
	const queue = [...jobs];
	await Promise.all(
		Array.from({ length: Math.min(concurrency, jobs.length) }, async () => {
			for (let job = queue.shift(); job; job = queue.shift()) {
				try {
					arcs.push(await runOne(job.id, job.picked));
				} catch (e) {
					failed.push({ id: job.id, error: e instanceof Error ? e.message : String(e) });
				}
			}
		})
	);

	// used_stories 에 추가 (다 끝난 뒤 한 번에). 파일의 다른 부분 모양은 그대로 두고 used_stories 배열만 다시 씀
	if (arcs.length) {
		const text = await readFile(seedsFile, 'utf-8');
		const current = (JSON.parse(text) as StorySeeds).used_stories ?? [];
		const added = arcs.map((a) => a.used);
		const used: UsedStory[] = [...current.filter((u) => !added.some((a) => a.id && a.id === u.id)), ...added];
		const at = text.lastIndexOf('"used_stories"');
		const arr = JSON.stringify(used, null, '\t').replace(/\n/g, '\n\t');
		await writeFile(seedsFile, at >= 0 ? `${text.slice(0, at)}"used_stories": ${arr}\n}\n` : text);
	}
	return json({ arcs, failed });
};
