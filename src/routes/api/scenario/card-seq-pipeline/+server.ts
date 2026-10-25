import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { mkdir, readdir, readFile, rm, writeFile } from 'fs/promises';
import { join } from 'path';
import {
	assembleCards,
	textBatches,
	toWebfrontAdditions,
	type CardDesign,
	type CardScenario,
	type CardText,
	type Portrait
} from '$lib/prompts/cardGen';
import {
	normalizeDesign,
	finalizeDesign,
	buildSeqAdditionsPrompt,
	buildSeqDesignPrompt,
	buildSeqTextPrompt,
	seqCardsMarkdown,
	slotsOf,
	type SeqArc,
	type SeqInput
} from '$lib/prompts/cardGenSeq';
import { checkAdditions, checkSeqDesign, checkSeqText, similarCards, type CardLike } from '$lib/server/cardCheck';
import type { RequestHandler } from './$types';

/**
 * 재작업 시나리오(rewrite_test) → 칸 고정 카드 16장 + additions (Gemini, cardGenSeq 3단계). 성향 조합 없음.
 * 설계 → 대사 2묶음 → 유사도 → additions. 단계마다 검사, 걸리면 오류를 붙여 다시 요청(MAX_RETRY).
 *
 * body:
 *  - storyId: string       예: modern_whisperweb_0 (output_list/rewrite_test/<storyId>/scenario_0N.json)
 *  - orders?: number[]     기본 1~5. 차례대로 (앞 설계표의 제목·인물을 다음 프롬프트에 넘김). 실패하면 뒤 번호는 진행 안 함
 *  - portraits?: string    얼굴 풀 이름 (기본 modern_whisperweb_0 → <webfront data>/portraits/<이름>.json)
 *  - model?: string        Gemini 모델 (기본: /api/gemini 의 기본값)
 *
 * 출력 (output_list/rewrite_test/<storyId>/cards/):
 *  - 0N/card_*.json (카드 1장당 1파일), 0N/additions.json   webfront 형식
 *  - 0N/steps/design.json, text_0.json, text_1.json, rewrite.json, additions_raw.json, *_failed.json(실패한 단계의 시도별 오류)   단계별 결과
 *  - cards_0N.md   읽기용 (스토리 방 사이에 칸별 후보 카드)
 */

const MAX_RETRY = 3;
const STORY_DIR = 'output_list/rewrite_test';
const ARC_DIR = 'src/lib/data/storyarc/rewrite_test';
const WEBFRONT_DATA = '../project-mj-webfront/src/routes/(app)/test/adventure/data';

type Failure = { scenario: string; step: string; error: string };
type Done = { scenario: string; cards: number; retries: number; rewritten: string[] };

/** Gemini 답에서 JSON 하나를 꺼냄 (```json 감싸기 허용) */
function parseReply(reply: string): any {
	const s = reply.replace(/^[\s\S]*?```(?:json)?\s*/, '').replace(/```[\s\S]*$/, '');
	const body = s.includes('{') ? s : reply;
	return JSON.parse(body.slice(body.indexOf('{'), body.lastIndexOf('}') + 1));
}

const retryNote = (errors: string[], prev: string) =>
	`\n\n# 이전 출력의 오류\n- 아래 오류가 난 곳만 고치고, 나머지는 이전 출력 그대로 둔 채 전체를 다시 출력\n${errors.map((e) => `- ${e}`).join('\n')}\n\n# 이전 출력\n${prev}`;

const readJson = async (f: string) => JSON.parse(await readFile(f, 'utf-8').catch(() => 'null'));

export const POST: RequestHandler = async ({ request, fetch }) => {
	const body = await request.json();
	const storyId = String(body.storyId ?? '');
	const storyDir = join(process.cwd(), STORY_DIR, storyId);
	const outDir = join(storyDir, 'cards');
	const orders: number[] = Array.isArray(body.orders) ? body.orders.map(Number) : [1, 2, 3, 4, 5];
	const dataDir = env.WEBFRONT_DATA_DIR || join(process.cwd(), WEBFRONT_DATA);
	const portraits: Portrait[] | null = await readJson(
		join(dataDir, 'portraits', `${body.portraits ?? 'modern_whisperweb_0'}.json`)
	);
	if (!portraits) return json({ error: `얼굴 풀 없음: ${dataDir}/portraits` }, { status: 500 });
	// storyarc .ts 의 객체 부분은 JSON 그대로 (키에 따옴표)
	const arcText = await readFile(join(process.cwd(), ARC_DIR, `storyarc_${storyId}.ts`), 'utf-8').catch(() => '');
	const arc: Record<string, any> = arcText
		? JSON.parse(arcText.slice(arcText.indexOf('{', arcText.indexOf('= ')), arcText.lastIndexOf('}') + 1))
		: {};
	const arcOf = (order: number): SeqArc => {
		const o = arc.scenarioOutline?.find((x: any) => x.order === order);
		return {
			stage: arc.stage,
			setting: arc.world?.setting,
			rule: arc.world?.rule,
			place: o?.place,
			summary: o?.summary,
			keyObject: arc.key_object,
			action: arc.story_spine?.find((x: any) => x.order === order)?.protagonist_action,
			bossTrace: arc.boss_trace
		};
	};

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
	async function generate<T>(prompt: string, check: (r: T) => string[], count: { n: number }, failFile?: string): Promise<T> {
		let message = prompt;
		const tries: string[][] = [];
		for (let i = 0; ; i++) {
			let result: T;
			let errors: string[];
			try {
				result = await gemini(message);
				errors = check(result);
			} catch (e) {
				tries.push([`요청·파싱 실패: ${e instanceof Error ? e.message : e}`]);
				if (i >= MAX_RETRY) throw e;
				count.n++;
				continue;
			}
			tries.push(errors);
			if (!errors.length) return result;
			if (i >= MAX_RETRY) {
				if (failFile) await writeFile(failFile, JSON.stringify({ tries, result }, null, '\t') + '\n', 'utf-8');
				throw new Error(errors.slice(0, 10).join(' / '));
			}
			count.n++;
			message = prompt + retryNote(errors, JSON.stringify(result));
		}
	}

	// 이 스토리 일반 보스 호칭 전부 (scenario_0N.json 의 boss.role)
	const bossTitles: string[] = [];
	for (const o of [1, 2, 3, 4, 5]) {
		const t = (await readJson(join(storyDir, `scenario_0${o}.json`)))?.boss?.role?.korean;
		if (t) bossTitles.push(t);
	}

	for (const order of orders) {
		const sc = `0${order}`;
		const scenario: CardScenario | null = await readJson(join(storyDir, `scenario_${sc}.json`));
		if (!scenario) {
			failed.push({ scenario: sc, step: 'load', error: `scenario_${sc}.json 없음` });
			break;
		}
		// 앞 시나리오 설계표·카드 (겹침 방지·유사도 비교)
		const previous: NonNullable<SeqInput['previous']> = [];
		const prevNames: string[] = [];
		const others: CardLike[] = [];
		for (const o of [1, 2, 3, 4, 5].filter((x) => x !== order)) {
			const d: CardDesign | null = await readJson(join(outDir, `0${o}`, 'steps', 'design.json'));
			if (!d) continue;
			if (o < order)
				previous.push({
					scenario_id: `${storyId}_0${o}`,
					titles: d.cards.map((c) => c.title?.korean ?? c.id),
					actors: Object.values(d.actors).map((a) => `${a.name.korean}(${a.role})`)
				});
			if (o < order) prevNames.push(...Object.values(d.actors).map((a) => a.name.korean));
			const dir = join(outDir, `0${o}`);
			for (const f of await readdir(dir).catch(() => [] as string[]))
				if (f.startsWith('card_') && f.endsWith('.json')) others.push(await readJson(join(dir, f)));
		}
		const input: SeqInput = { scenario, genre: arc.genre, arc: arcOf(order), previous, bossTitles, portraits };
		const known = Object.keys(scenario.actors);
		const isFinal = !!scenario.boss?.pool_id && scenario.boss.pool_id !== 'random_boss';
		// 칸마다 앞 방의 마지막 대사 (첫 줄 베끼기 검사)
		const prevLast: Record<string, string> = {};
		for (const g of slotsOf(scenario)) {
			const lines = scenario.rooms.find((r) => r.id === g.after)!.dialogue.filter((l) => l.content?.korean);
			prevLast[g.key] = lines.at(-1)?.content?.korean ?? '';
		}
		const textOpts = { bossTitles, prevLast };
		const cardDir = join(outDir, sc);
		const work = join(cardDir, 'steps');
		await mkdir(work, { recursive: true });
		const save = (name: string, v: unknown) => writeFile(join(work, name), JSON.stringify(v, null, '\t') + '\n', 'utf-8');
		const count = { n: 0 };
		let step = 'design';
		try {
			// 1) 설계 → slot 을 after_story / before_story 로, id 앞에 card_0N_
			const design = await generate<CardDesign>(
				buildSeqDesignPrompt(input),
				(d) => (normalizeDesign(d), checkSeqDesign(d, known, { isFinal, bossTitles, prevNames })),
				count,
				join(work, 'design_failed.json')
			);
			finalizeDesign(design, scenario);
			await save('design.json', design);

			// 2) 대사 — 묶음 0(심기+회수) → 묶음 1(일반)
			step = 'text';
			const texts: CardText[] = [];
			for (const [i, ids] of textBatches(design).entries()) {
				const r = await generate<{ cards: CardText[] }>(
					buildSeqTextPrompt(input, design, ids, [...texts]),
					(x) => checkSeqText(x?.cards, design, ids, textOpts),
					count,
					join(work, `text_${i}_failed.json`)
				);
				texts.push(...r.cards.filter((c) => ids.includes(c.id)));
				await save(`text_${i}.json`, r);
			}

			// 2-1) 유사도 — 앞뒤 시나리오 카드와 겹치는 카드만 1번 다시 씀
			step = 'similarity';
			let cards = assembleCards(design, texts);
			const similar = similarCards(cards, others);
			if (similar.length) {
				const ids = similar.map((x) => x.id);
				const note =
					`\n\n# 다시 쓰기 (같은 스토리의 다른 카드와 겹침. 장면·문장을 새로 쓸 것)\n` +
					similar.map((x) => `- ${x.id}: ${x.reason}`).join('\n') +
					`\n- 제목이 겹친 카드는 카드마다 \`"title": { "korean": "<새 제목>" }\` 도 함께 출력`;
				const r = await generate<{ cards: (CardText & { title?: { korean: string } })[] }>(
					buildSeqTextPrompt(input, design, ids, texts.filter((t) => !ids.includes(t.id))) + note,
					(x) => checkSeqText(x?.cards, design, ids, textOpts),
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
				buildSeqAdditionsPrompt(input, design, cards),
				(a) => checkAdditions(a, design, scenario.scenario_id),
				count,
				join(work, 'additions_failed.json')
			);
			await save('additions_raw.json', additions);

			// 4) 저장 (카드 폴더는 새로 씀)
			step = 'write';
			for (const f of await readdir(cardDir)) if (f.endsWith('.json')) await rm(join(cardDir, f));
			const put = (name: string, v: unknown) =>
				writeFile(join(cardDir, name), JSON.stringify(v, null, '\t') + '\n', 'utf-8');
			for (const c of cards) await put(`${c.id}.json`, c);
			await put('additions.json', toWebfrontAdditions(additions, portraits));
			await save('design.json', design); // 유사도 단계에서 바뀐 제목 반영
			await writeFile(join(outDir, `cards_${sc}.md`), seqCardsMarkdown(scenario, cards, design), 'utf-8');
			ok.push({ scenario: sc, cards: cards.length, retries: count.n, rewritten: similar.map((x) => x.id) });
		} catch (e) {
			failed.push({ scenario: sc, step, error: e instanceof Error ? e.message : String(e) });
			break;
		}
	}

	return json({ storyId, out: outDir, okCount: ok.length, ok, failedCount: failed.length, failed });
};
