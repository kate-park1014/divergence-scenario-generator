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
	pickCautions,
	pickSeeds,
	usedStoryOf,
	victimNpcOf,
	type NetshortNpc,
	type NetshortStory,
	type PickedSeeds,
	type StorySeeds,
	type UsedStory
} from '$lib/prompts/netshortStory';
import { buildNetshortJudgePrompt, netshortJudgeMarkdown, netshortJudgeTool, readNetshortJudge, type NetshortJudgeResult } from '$lib/prompts/netshortJudge';
import type { RequestHandler } from './$types';

/**
 * 넷쇼트 스타일 5화 스토리 (netshort_test/story-prompt.md).
 * story-seeds.json 에서 재료를 랜덤으로 뽑아 → 한 번에 story.json.
 *
 * body:
 *  - ids?: string[]         이미 만든 이야기 id. <outDir>/<id>/seeds.json 의 재료 그대로 다시 씀
 *  - count?: number         ids 가 없을 때 새로 만들 개수 (기본 1). id 는 <world.key>_<시각>_<n>
 *  - seedsFile?: string     기본 src/lib/data/storyarc/netshort_test/story-seeds.json
 *  - outDir?: string        기본 src/lib/data/storyarc/netshort_test → <outDir>/<id>/seeds.json, story.json, story.md
 *  - concurrency?: number   동시 실행 (기본 2)
 *  - temperature?: number   기본 0.8
 *  - judge?: boolean        저장 뒤 채점 (기본 true). 결과 <id>/judge.json + story.md 끝
 *  - judgeOnly?: boolean    ids 의 기존 story.json 을 채점만 (생성·used_stories 갱신 없음)
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
	const concurrency = Math.max(1, Math.min(10, Number(body.concurrency) || 2));
	const temperature = body.temperature !== undefined ? Number(body.temperature) : 0.8;
	const judgeOnly = body.judgeOnly === true;
	const judgeOn = judgeOnly || body.judge !== false;
	if (judgeOnly && !(Array.isArray(body.ids) && body.ids.length)) return json({ error: 'judgeOnly 는 ids 가 필요합니다.' }, { status: 400 });

	// 새로 만들 것: id → 재료. 다시 쓸 것: 저장된 seeds.json
	const jobs: { id: string; picked?: PickedSeeds }[] = [];
	const ids: string[] = Array.isArray(body.ids) ? body.ids.map(String) : [];
	if (ids.length) for (const id of ids) jobs.push({ id });
	else {
		const stamp = new Date().toISOString().replace(/\D/g, '').slice(0, 14);
		const count = Math.max(1, Math.min(20, Number(body.count) || 1));
		for (let i = 1; i <= count; i++) {
			const picked = pickSeeds(seeds);
			jobs.push({ id: `${picked.world.key}_${stamp}_${i}`, picked });
		}
	}

	const pool = ((npc_by_theme[seeds.theme as keyof typeof npc_by_theme] ?? []) as readonly NpcSource[]).map((n): NetshortNpc => {
		const persona = n.persona ?? getNpcPersona(n.key);
		return persona ? { id: n.key, name: n.name.korean, persona } : { id: n.key, name: n.name.korean };
	});
	if (!pool.length) return json({ error: `테마 ${seeds.theme} 의 NPC 풀이 없습니다.` }, { status: 400 });
	const poolIds = pool.map((n) => n.id);

	async function gemini(message: string, tool: { function: { name: string } }, busy = 0, temp = temperature): Promise<unknown> {
		const res = await fetch('/api/gemini', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ message, tools: [tool], tool_choice: { type: 'function', function: { name: tool.function.name } }, temperature: temp })
		});
		const data = await res.json().catch(() => null);
		// Gemini 과부하(503)·한도(429)는 잠깐 기다렸다 다시 (최대 4번)
		if ((res.status === 503 || res.status === 429) && busy < 4) {
			await new Promise((r) => setTimeout(r, 5000 * (busy + 1)));
			return gemini(message, tool, busy + 1, temp);
		}
		const out = data?.tool_result;
		if (!res.ok || !out) throw new Error(data?.error ?? `gemini ${res.status}`);
		return out;
	}

	// 채점 1콜 (temperature 0). 실패하면 1번 더. 그래도 실패면 null (이야기 저장에는 영향 없음)
	async function judge(story: NetshortStory, picked: PickedSeeds): Promise<NetshortJudgeResult[] | null> {
		for (let i = 0; i < 2; i++) {
			try {
				return readNetshortJudge(await gemini(buildNetshortJudgePrompt(story, picked), netshortJudgeTool, 0, 0), story);
			} catch {
				/* 다시 */
			}
		}
		return null;
	}

	async function saveJudge(dir: string, story: NetshortStory, picked: PickedSeeds) {
		if (!judgeOn) return null;
		const results = await judge(story, picked);
		if (!results) return null;
		const abs = (f: string) => join(process.cwd(), dir, f);
		await writeFile(abs('judge.json'), JSON.stringify(results, null, 2));
		await writeFile(abs('story.md'), netshortToMarkdown(story, picked) + netshortJudgeMarkdown(results));
		return results;
	}

	async function judgeOne(id: string) {
		const dir = join(outDir, id);
		const abs = (f: string) => join(process.cwd(), dir, f);
		const story = JSON.parse(await readFile(abs('story.json'), 'utf-8')) as NetshortStory;
		const picked = JSON.parse(await readFile(abs('seeds.json'), 'utf-8')) as PickedSeeds;
		// 채점 기준 장치 문장은 그 이야기를 만들 때 쓴 것 (story.design) — 지금 seeds 로 바꾸지 않는다
		const d = story.design ?? ({} as NetshortStory['design']);
		picked.device = { ...picked.device, object: d.device ?? picked.device.object, rule: d.how ?? picked.device.rule, effect: d.visible_effect ?? picked.device.effect, wrong_action: d.wrong_action ?? picked.device.wrong_action, right_action: d.right_action ?? picked.device.right_action };
		const judged = await saveJudge(dir, story, picked);
		if (!judged) throw new Error('채점 실패');
		return { id, dir, title: story.title, errors: [] as string[], tries: 0, used: usedStoryOf(story, picked), judge: judged };
	}

	async function runOne(id: string, given?: PickedSeeds) {
		if (judgeOnly) return judgeOne(id);
		const dir = join(outDir, id);
		const abs = (f: string) => join(process.cwd(), dir, f);
		await mkdir(join(process.cwd(), dir), { recursive: true });
		const picked = given ?? (JSON.parse(await readFile(abs('seeds.json'), 'utf-8')) as PickedSeeds);
		// 예전 seeds.json(장치 형태 device_form 만 있음)은 그 무대의 장치를 새로 뽑아 넣는다
		const before = JSON.stringify(picked);
		if (!picked.device) picked.device = pickDevice(seeds, picked.world.key);
		// 장치 문장(harm·wrong/right_action 포함)은 늘 지금 story-seeds.json 의 것으로
		picked.device = seeds.devices.find((x) => x.key === picked.device.key) ?? picked.device;
		// 전투와 안 맞는 장치(battle: false)는 그 무대의 다른 장치로. 무대에 맞는 게 없으면 무대도 다시
		if (picked.device.battle === false) {
			const next = pickDevice(seeds, picked.world.key);
			if (next.worlds?.includes(picked.world.key)) picked.device = next;
			else {
				const fresh = pickSeeds(seeds);
				Object.assign(picked, { world: fresh.world, device: fresh.device });
			}
		}
		// 예전 재료(모티프·화별 이유·소품 낱말)는 지금 쓰지 않으니 뺀다
		delete picked.motif;
		delete picked.reasons;
		delete picked.random_words;
		// 2~4화 조심하는 방식: 없으면 새로 뽑고(예전 seeds.json), 있으면 문구만 지금 seeds 것으로
		if (!picked.cautions?.length) picked.cautions = pickCautions(seeds);
		else picked.cautions = picked.cautions.map((c) => seeds.caution_types?.find((x) => x.key === c.key) ?? c);
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
		const judged = await saveJudge(dir, out, picked);
		return { id, dir, title: out.title, errors, tries, used: usedStoryOf(out, picked), judge: judged };
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
	if (arcs.length && !judgeOnly) {
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
