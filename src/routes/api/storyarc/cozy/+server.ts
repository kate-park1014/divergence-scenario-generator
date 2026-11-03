import { json } from '@sveltejs/kit';
import { mkdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import { npc_by_theme } from '$lib/data/sample/npc_pool';
import { getNpcPersona } from '$lib/data/sample/npc';
import { buildCozyPrompt, checkCozyStory, cozyStoryTool, cozyToMarkdown, type CozyNpc, type CozyPremise, type CozyStory } from '$lib/prompts/cozyStory';
import { getStyle, keepTone, type StoryStyle } from '$lib/prompts/storyStyle';
import type { RequestHandler } from './$types';

/**
 * 편안한 5화 이야기 (cozy_test). premises.json 의 기획안마다 story.json 하나.
 *
 * body:
 *  - keys?: string[]   만들 기획안 key (기본: 전부)
 *  - outDir?: string   기본 src/lib/data/storyarc/styles/cozy_test → <outDir>/<key>/story.json, story.md, cast.json
 *  - temperature?: number  기본 0.8
 *  - style?: string        스타일 파일 key (styles/<key>.md). 기본: cast.json 의 style, 없으면 cozy
 * 코드 검사(모양만)에 걸리면 오류를 붙여 최대 2번 다시 요청. 주 NPC 는 처음 만들 때 뽑아 cast.json 에 저장, 다시 만들 때 그대로.
 * 스타일·톤(스타일에 톤 목록이 있을 때)도 cast.json 에 저장해 대본 단계가 같은 것을 씀.
 */

const DIR = 'src/lib/data/storyarc/styles/cozy_test';
type NpcSource = { key: string; name: { korean: string }; persona?: string };

export const POST: RequestHandler = async ({ request, fetch }) => {
	const body = await request.json();
	const outDir: string = body.outDir ?? DIR;
	const temperature = body.temperature !== undefined ? Number(body.temperature) : 0.8;
	const seeds = JSON.parse(await readFile(join(process.cwd(), DIR, 'premises.json'), 'utf-8')) as { theme: string; theme_description: string; premises: CozyPremise[] };
	const keys: string[] = Array.isArray(body.keys) && body.keys.length ? body.keys.map(String) : seeds.premises.map((p) => p.key);
	const pool = ((npc_by_theme[seeds.theme as keyof typeof npc_by_theme] ?? []) as readonly NpcSource[]).map((n): CozyNpc => {
		const persona = n.persona ?? getNpcPersona(n.key);
		return persona ? { id: n.key, name: n.name.korean, persona } : { id: n.key, name: n.name.korean };
	});
	if (!pool.length) return json({ error: `테마 ${seeds.theme} 의 NPC 풀이 없습니다.` }, { status: 400 });
	const styleOf = (key?: string): StoryStyle => getStyle(body.style ?? key ?? 'cozy');
	try {
		styleOf();
	} catch (e) {
		return json({ error: e instanceof Error ? e.message : String(e) }, { status: 400 });
	}

	async function gemini(message: string, busy = 0): Promise<CozyStory> {
		const res = await fetch('/api/gemini', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ message, tools: [cozyStoryTool], tool_choice: { type: 'function', function: { name: 'cozy_story' } }, temperature })
		});
		const data = await res.json().catch(() => null);
		if ((res.status === 503 || res.status === 429) && busy < 4) {
			await new Promise((r) => setTimeout(r, 5000 * (busy + 1)));
			return gemini(message, busy + 1);
		}
		if (!res.ok || !data?.tool_result) throw new Error(data?.error ?? `gemini ${res.status}`);
		return data.tool_result as CozyStory;
	}

	// 이야기마다 다른 NPC (겹치지 않게)
	const used = new Set<string>();
	async function runOne(key: string) {
		const p = seeds.premises.find((x) => x.key === key);
		if (!p) throw new Error(`premises.json 에 ${key} 가 없습니다.`);
		const dir = join(process.cwd(), outDir, key);
		await mkdir(dir, { recursive: true });
		let npc: CozyNpc | undefined;
		let saved: { npc?: string; style?: string; tone?: string } = {};
		try {
			saved = JSON.parse(await readFile(join(dir, 'cast.json'), 'utf-8'));
			npc = pool.find((n) => n.id === saved.npc);
		} catch {
			/* 처음 */
		}
		if (!npc) {
			const free = pool.filter((n) => !used.has(n.id));
			npc = free[Math.floor(Math.random() * free.length)] ?? pool[0];
			used.add(npc.id); // 동시에 도는 다른 이야기가 같은 NPC 를 뽑지 않게 바로 표시
		}
		used.add(npc.id);
		// 스타일: --style 이 있으면 그것, 없으면 저장된 것. 톤은 그 스타일 목록에 있으면 그대로, 아니면 다시 뽑음
		const style = styleOf(saved.style);
		const tone = keepTone(style, saved.tone);
		const cast = { npc: npc.id, style: style.key, ...(tone ? { tone } : {}) };
		if (JSON.stringify(cast) !== JSON.stringify(saved)) await writeFile(join(dir, 'cast.json'), JSON.stringify(cast, null, 2));
		const prompt = buildCozyPrompt(key, p, seeds.theme_description, npc, style, tone);
		let out = await gemini(prompt);
		let errors = checkCozyStory(out, npc.id);
		let tries = 1;
		while (errors.length && tries <= 2) {
			out = await gemini(`${prompt}\n\n---\n\n[이전 출력]\n${JSON.stringify(out, null, 2)}\n\n[고칠 것]\n${errors.map((e) => `- ${e}`).join('\n')}\n\n위 오류만 고치고 나머지는 그대로 두어 다시 답하라.`);
			errors = checkCozyStory(out, npc.id);
			tries++;
		}
		out.id = key;
		await writeFile(join(dir, 'story.json'), JSON.stringify(out, null, 2));
		await writeFile(join(dir, 'story.md'), cozyToMarkdown(out, p, npc, style.key, tone));
		return { key, dir: join(outDir, key), title: out.title, npc: npc.name, errors, tries };
	}

	const arcs: Awaited<ReturnType<typeof runOne>>[] = [];
	const failed: { key: string; error: string }[] = [];
	await Promise.all(
		keys.map(async (k) => {
			try {
				arcs.push(await runOne(k));
			} catch (e) {
				failed.push({ key: k, error: e instanceof Error ? e.message : String(e) });
			}
		})
	);
	return json({ arcs, failed });
};
