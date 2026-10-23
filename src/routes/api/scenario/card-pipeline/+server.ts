import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { mkdir, readdir, readFile, rm, writeFile } from 'fs/promises';
import { join } from 'path';
import { AXIS_COMBOS, type AxisCombo } from '$lib/prompts/axisVariantGen';
import {
	assembleCards,
	buildAdditionsPrompt,
	buildCardDesignPrompt,
	buildCardTextPrompt,
	textBatches,
	toWebfrontAdditions,
	type CardDesign,
	type CardScenario,
	type CardSetInput,
	type CardText,
	type Portrait
} from '$lib/prompts/cardGen';
import { checkAdditions, checkDesign, checkText, similarCards, type CardLike } from '$lib/server/cardCheck';
import type { RequestHandler } from './$types';

/**
 * 성향 변주 시나리오 → 카드 14장 + additions 생성 (Gemini, cardGen 3단계).
 * 설계 → 대사 2묶음 → additions. 단계마다 cardCheck 검사, 걸리면 오류를 붙여 다시 요청(MAX_RETRY).
 * 대사 뒤 같은 스토리의 다른 카드와 유사도 비교, 걸린 카드만 1번 다시 씀.
 *
 * body:
 *  - storyId: string          예: modern_evannext_1 (output_list/axis_test/<storyId>/<combo>.json)
 *  - combos?: AxisCombo[]     기본: 스토리 파일이 있는 조합 전체
 *  - orders?: number[]        기본: 1~5. 조합 안에서는 차례대로 (앞 설계표의 제목·인물을 다음 프롬프트에 넘김)
 *  - concurrency?: number     조합 단위 동시 실행 수 (기본 4, 1~8)
 *  - portraits?: string       얼굴 풀 이름 (기본 modern_whisperweb_0 → <WEBFRONT_DATA_DIR>/portraits/<이름>.json)
 *  - model?: string           Gemini 모델 (기본: /api/gemini 의 기본값 gemini-2.5-flash)
 *
 * 출력: <WEBFRONT_DATA_DIR>/cards/<storyId>/<combo>/<combo>_0N/card_*.json, additions/<storyId>/<combo>/<combo>_0N.json
 * 단계별 결과: output_list/cards/<storyId>/<combo>_0N/ (design.json, text_0.json, text_1.json, additions.json)
 */

const MAX_RETRY = 2;
const STORY_DIR = 'output_list/axis_test';
const WORK_DIR = 'output_list/cards';

type Failure = { scenario: string; step: string; error: string };
type Done = { scenario: string; cards: number; retries: number; rewritten: string[] };

/** Gemini 답에서 JSON 하나를 꺼냄 (```json 감싸기 허용) */
function parseReply(reply: string): any {
	const s = reply.replace(/^[\s\S]*?```(?:json)?\s*/, '').replace(/```[\s\S]*$/, '');
	const body = s.includes('{') ? s : reply;
	return JSON.parse(body.slice(body.indexOf('{'), body.lastIndexOf('}') + 1));
}

const retryNote = (errors: string[], prev: string) =>
	`\n\n# 이전 출력의 오류 (모두 고쳐서 처음부터 다시 출력)\n${errors.map((e) => `- ${e}`).join('\n')}\n\n# 이전 출력\n${prev}`;

export const POST: RequestHandler = async ({ request, fetch }) => {
	const body = await request.json();
	const dataDir = env.WEBFRONT_DATA_DIR;
	if (!dataDir) return json({ error: '.env 에 WEBFRONT_DATA_DIR 없음' }, { status: 500 });
	const storyId = String(body.storyId ?? '');
	const storyDir = join(process.cwd(), STORY_DIR, storyId);
	const files = await readdir(storyDir).catch(() => [] as string[]);
	const available = AXIS_COMBOS.filter((c) => files.includes(`${c}.json`));
	const combos: AxisCombo[] = Array.isArray(body.combos)
		? available.filter((c) => body.combos.includes(c))
		: available;
	if (!combos.length) return json({ error: `스토리 파일 없음: ${STORY_DIR}/${storyId}` }, { status: 400 });
	const orders: number[] = Array.isArray(body.orders) ? body.orders.map(Number) : [1, 2, 3, 4, 5];
	const concurrency = Math.max(1, Math.min(8, Number(body.concurrency) || 4));
	const portraits: Portrait[] = JSON.parse(
		await readFile(join(dataDir, 'portraits', `${body.portraits ?? 'modern_whisperweb_0'}.json`), 'utf-8')
	);

	const failed: Failure[] = [];
	const ok: Done[] = [];

	async function gemini(message: string): Promise<any> {
		const res = await fetch('/api/gemini', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ message, model: body.model })
		});
		const data = await res.json().catch(() => null);
		if (!data?.reply) throw new Error(data?.error ?? `gemini ${res.status}`);
		return parseReply(data.reply);
	}

	/** 요청 → 검사 → 오류가 있으면 오류와 이전 출력을 붙여 다시 요청 */
	async function generate<T>(prompt: string, check: (r: T) => string[], count: { n: number }): Promise<T> {
		let message = prompt;
		for (let i = 0; ; i++) {
			let result: T;
			let errors: string[];
			try {
				result = await gemini(message);
				errors = check(result);
			} catch (e) {
				if (i >= MAX_RETRY) throw e;
				count.n++;
				continue;
			}
			if (!errors.length) return result;
			if (i >= MAX_RETRY) throw new Error(errors.slice(0, 10).join(' / '));
			count.n++;
			message = prompt + retryNote(errors, JSON.stringify(result));
		}
	}

	/** 같은 스토리의 다른 시나리오 카드 (유사도 비교 대상) */
	async function otherCards(sc: string): Promise<CardLike[]> {
		const root = join(dataDir!, 'cards', storyId);
		const out: CardLike[] = [];
		for (const combo of await readdir(root).catch(() => [] as string[]))
			for (const dir of await readdir(join(root, combo)).catch(() => [] as string[])) {
				if (dir === sc) continue;
				for (const f of await readdir(join(root, combo, dir)).catch(() => [] as string[]))
					if (f.endsWith('.json')) out.push(JSON.parse(await readFile(join(root, combo, dir, f), 'utf-8')));
			}
		return out;
	}

	async function processCombo(combo: AxisCombo) {
		const story = JSON.parse(await readFile(join(storyDir, `${combo}.json`), 'utf-8'));
		// 같은 조합의 앞 시나리오 설계표 (저장된 design.json) → 제목·인물. 중간 번호부터 다시 돌려도 이어짐
		const previousOf = async (order: number) => {
			const out: NonNullable<CardSetInput['previous']> = [];
			for (const s of story.scenarios.filter((x: CardScenario) => x.order < order)) {
				const f = join(process.cwd(), WORK_DIR, storyId, `${combo}_0${s.order}`, 'design.json');
				const d: CardDesign | null = JSON.parse(await readFile(f, 'utf-8').catch(() => 'null'));
				if (d)
					out.push({
						scenario_id: s.scenario_id,
						titles: d.cards.map((c) => c.title?.korean ?? c.id),
						actors: Object.values(d.actors).map((a) => `${a.name.korean}(${a.role})`)
					});
			}
			return out;
		};
		for (const order of orders) {
			const scenario: CardScenario | undefined = story.scenarios.find((s: CardScenario) => s.order === order);
			const sc = `${combo}_0${order}`;
			if (!scenario) {
				failed.push({ scenario: sc, step: 'load', error: '스토리에 해당 order 없음' });
				continue;
			}
			const companion = Object.keys(scenario.actors)[0];
			const input: CardSetInput = {
				scenario,
				combo,
				genre: story.genre ?? undefined,
				variantNote: story.variant_note,
				portraits,
				previous: await previousOf(order)
			};
			const work = join(process.cwd(), WORK_DIR, storyId, sc);
			await mkdir(work, { recursive: true });
			const save = (name: string, v: unknown) =>
				writeFile(join(work, name), JSON.stringify(v, null, '\t') + '\n', 'utf-8');
			const count = { n: 0 };
			let step = 'design';
			try {
				// 1) 설계
				const design = await generate<CardDesign>(
					buildCardDesignPrompt(input),
					(d) => checkDesign(d, combo, companion),
					count
				);
				await save('design.json', design);

				// 2) 대사 — 묶음 0(심기+회수) → 묶음 1(일반). 묶음 1에는 묶음 0 결과를 넘김
				step = 'text';
				const texts: CardText[] = [];
				for (const [i, ids] of textBatches(design).entries()) {
					const r = await generate<{ cards: CardText[] }>(
						buildCardTextPrompt(input, design, ids, [...texts]),
						(x) => checkText(x?.cards, design, ids),
						count
					);
					texts.push(...r.cards.filter((c) => ids.includes(c.id)));
					await save(`text_${i}.json`, r);
				}

				// 2-1) 유사도 — 걸린 카드만 1번 다시 씀 (제목이 같으면 새 제목도)
				step = 'similarity';
				let cards = assembleCards(design, texts);
				const similar = similarCards(cards, await otherCards(sc));
				if (similar.length) {
					const ids = similar.map((x) => x.id);
					const note =
						`\n\n# 다시 쓰기 (같은 스토리의 다른 카드와 겹침. 장면·문장을 새로 쓸 것)\n` +
						similar.map((x) => `- ${x.id}: ${x.reason}`).join('\n') +
						`\n- 제목이 겹친 카드는 카드마다 \`"title": { "korean": "<새 제목>" }\` 도 함께 출력`;
					const r = await generate<{ cards: (CardText & { title?: { korean: string } })[] }>(
						buildCardTextPrompt(input, design, ids, texts.filter((t) => !ids.includes(t.id))) + note,
						(x) => checkText(x?.cards, design, ids),
						count
					);
					for (const t of r.cards.filter((c) => ids.includes(c.id))) {
						texts.splice(texts.findIndex((x) => x.id === t.id), 1, t);
						const d = design.cards.find((c) => c.id === t.id)!;
						if (t.title?.korean) d.title = t.title;
					}
					cards = assembleCards(design, texts);
					await save('rewrite.json', r);
				}

				// 3) additions
				step = 'additions';
				const additions = await generate<Record<string, any>>(
					buildAdditionsPrompt(input, design, cards),
					(a) => checkAdditions(a, design, scenario.scenario_id),
					count
				);
				await save('additions.json', additions);

				// 4) webfront 에 저장 (그 시나리오 카드 폴더는 새로 씀)
				step = 'write';
				const cardDir = join(dataDir!, 'cards', storyId, combo, sc);
				const addDir = join(dataDir!, 'additions', storyId, combo);
				await rm(cardDir, { recursive: true, force: true });
				await mkdir(cardDir, { recursive: true });
				await mkdir(addDir, { recursive: true });
				for (const c of cards)
					await writeFile(join(cardDir, `${c.id}.json`), JSON.stringify(c, null, '\t') + '\n', 'utf-8');
				await writeFile(
					join(addDir, `${sc}.json`),
					JSON.stringify(toWebfrontAdditions(additions, portraits), null, '\t') + '\n',
					'utf-8'
				);

				await save('design.json', design); // 유사도 단계에서 바뀐 제목 반영
				ok.push({ scenario: sc, cards: cards.length, retries: count.n, rewritten: similar.map((x) => x.id) });
			} catch (e) {
				// 앞 시나리오가 실패하면 겹침 정보가 빠지므로 그 조합의 뒤 시나리오는 진행하지 않음
				failed.push({ scenario: sc, step, error: e instanceof Error ? e.message : String(e) });
				return;
			}
		}
	}

	let cursor = 0;
	await Promise.all(
		Array.from({ length: concurrency }, async () => {
			while (cursor < combos.length) await processCombo(combos[cursor++]);
		})
	);

	return json({
		storyId,
		out: join(dataDir, 'cards', storyId),
		okCount: ok.length,
		ok,
		failedCount: failed.length,
		failed
	});
};
