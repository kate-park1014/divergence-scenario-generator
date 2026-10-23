// 카드 생성 결과 검사 (card-pipeline 용)
// - checkDesign: 1단계 설계표의 구성 규칙
// - checkText: 2단계 대사 (한 줄 60자, 카드·선택지 수)
// - checkAdditions: 3단계 additions 의 기억·표시 누락
// - similarCards: 같은 스토리의 다른 시나리오 카드와 첫 대사·제목 비교
import type { AxisCombo } from '$lib/prompts/axisVariantGen';
import type { CardDesign, CardText } from '$lib/prompts/cardGen';

const EVENTS = ['campsite', 'meet_stranger', 'minigame_slot', 'minigame_timing', 'minigame_cup'];
// 칸: A(1~3) B(3~5) C(5~9) D(9~15). after<=시작, before>=끝이면 그 칸에 나옴
const SLOTS: [string, number, number, number][] = [
	['A', 1, 3, 4],
	['B', 3, 5, 4],
	['C', 5, 9, 3],
	['D', 9, 15, 2]
];

/** 1단계 설계표 검사. 오류 문장 배열 (빈 배열 = 통과) */
export function checkDesign(d: CardDesign, combo: AxisCombo, companion: string): string[] {
	const err: string[] = [];
	if (!Array.isArray(d?.cards)) return ['cards 배열 없음'];
	const seeds = d.seeds ?? {};
	const flags = d.flags ?? {};
	const actors = d.actors ?? {};
	const side: Record<string, string> = {
		fighting: combo[0] === 'F' ? '-' : '+',
		community: combo[1] === 'I' ? '-' : '+',
		reason: combo[2] === 'R' ? '-' : '+'
	};
	const cb = d.cards.filter((c) => c.callback);
	const plant = d.cards.filter((c) => !c.callback && c.choices?.some((ch) => ch.seed));
	const normal = d.cards.filter((c) => !cb.includes(c) && !plant.includes(c));
	if (plant.length !== 3 || normal.length !== 6 || cb.length !== 5)
		err.push(`구성 심기/일반/회수 = ${plant.length}/${normal.length}/${cb.length} (3/6/5 이어야 함)`);
	for (const c of plant)
		if (c.after_story !== 1 || ![5, 9].includes(c.before_story))
			err.push(`${c.id}: 심기 카드는 after_story 1, before_story 5 또는 9`);
	for (const c of cb) {
		if (
			![5, 9].includes(c.after_story) ||
			![9, 15].includes(c.before_story) ||
			c.before_story <= c.after_story ||
			c.leaning
		)
			err.push(`${c.id}: 회수 카드는 after_story 5·9, before_story 9·15, leaning 없음`);
		if (!c.choices.every((ch) => ch.flag)) err.push(`${c.id}: 회수 카드 선택지마다 flag 필요`);
	}
	const shown = [...plant, ...normal];
	for (const [k, a, b, need] of SLOTS) {
		const n = shown.filter((c) => c.after_story <= a && c.before_story >= b).length;
		if (n < need) err.push(`카드 ${k} 칸: ${n}장 (최소 ${need}장)`);
	}
	const on: Record<string, number> = {};
	const off: Record<string, number> = {};
	for (const c of shown) {
		const l = c.leaning as string | undefined;
		if (!l) continue;
		const axis = l.slice(0, -1);
		const bucket = side[axis] === l.slice(-1) ? on : off;
		bucket[axis] = (bucket[axis] ?? 0) + 1;
	}
	if (Object.keys(side).some((a) => on[a] !== 2 || off[a] !== 1))
		err.push(`leaning: 성향 쪽 ${JSON.stringify(on)} / 반대쪽 ${JSON.stringify(off)} (축마다 2 / 1)`);

	const ev: Record<string, number> = {};
	for (const c of d.cards) {
		const all = [...c.choices, ...(c.forced ?? [])];
		const es = all.filter((ch) => ch.event).map((ch) => ch.event as string);
		if (es.length > 1) err.push(`${c.id}: 이벤트 ${es.length}개 (카드당 1개까지)`);
		for (const e of es) ev[e] = (ev[e] ?? 0) + 1;
		all.forEach((ch, i) => {
			const at = `${c.id}[${i}]`;
			if (ch.event && ch.reward) err.push(`${at}: reward 와 event 함께 사용`);
			if (!ch.reward?.length && !ch.effects?.gold && !ch.event) err.push(`${at}: reward·gold·event 없음`);
			if (!('seed' in ch)) err.push(`${at}: seed 키 없음`);
			if (ch.seed && !seeds[ch.seed]) err.push(`${at}: seeds 에 없는 기억 ${ch.seed}`);
			if (ch.flag && !flags[ch.flag]) err.push(`${at}: flags 에 없는 표시 ${ch.flag}`);
			if (typeof ch.mbti !== 'string' || ch.mbti.length !== 2) err.push(`${at}: mbti 2글자 아님`);
			if (ch.effects && 'spread' in ch.effects) err.push(`${at}: spread 사용`);
			if (!ch.effects || !Object.keys(ch.effects).length) err.push(`${at}: effects 비어 있음`);
		});
		const ms = all.map((ch) => ch.mbti);
		if (new Set(ms).size !== ms.length) err.push(`${c.id}: 같은 mbti 반복 ${ms.join(',')}`);
		if (c.choices.filter((ch) => !ch.require).length < 2) err.push(`${c.id}: require 없는 선택지 2개 미만`);
		for (const p of (c.people as string[] | undefined) ?? [])
			if (!actors[p] && p !== companion) err.push(`${c.id}: actors 에 없는 인물 ${p}`);
	}
	if (EVENTS.some((e) => ev[e] !== 2) || Object.keys(ev).length !== 5)
		err.push(`이벤트 ${JSON.stringify(ev)} (5종 × 2개)`);
	const forced = d.cards.filter((c) => c.forced?.length);
	if (forced.length !== 1) err.push(`강제 사건 카드 ${forced.length}장 (1장이어야 함)`);
	const planted = new Set(plant.flatMap((c) => c.choices.map((ch) => ch.seed).filter(Boolean)));
	if (planted.size !== 5) err.push(`기억 ${planted.size}개 (5개여야 함)`);
	const recalled = new Set(cb.map((c) => c.callback.seed));
	if (planted.size !== recalled.size || [...planted].some((s) => !recalled.has(s)))
		err.push('심은 기억과 회수 카드의 기억이 다름');
	const lock = shown.filter((c) => c.choices.some((ch) => ch.require?.mbti)).length;
	if (lock < 4 || lock > 5) err.push(`MBTI 잠금 카드 ${lock}장 (4~5장)`);
	return err;
}

function koreanLines(v: unknown): string[] {
	if (Array.isArray(v)) return v.flatMap(koreanLines);
	if (v && typeof v === 'object') {
		const o = v as Record<string, any>;
		const own = typeof o.content?.korean === 'string' ? [o.content.korean as string] : [];
		return [...own, ...Object.entries(o).flatMap(([k, x]) => (k === 'content' ? [] : koreanLines(x)))];
	}
	return [];
}

/** 2단계 대사 검사. ids = 이번 묶음 카드 id */
export function checkText(cards: CardText[], design: CardDesign, ids: string[]): string[] {
	if (!Array.isArray(cards)) return ['cards 배열 없음'];
	const err: string[] = [];
	for (const id of ids) {
		const t = cards.find((c) => c.id === id);
		const d = design.cards.find((c) => c.id === id)!;
		if (!t) {
			err.push(`${id}: 대사 없음`);
			continue;
		}
		if (t.choices?.length !== d.choices.length)
			err.push(`${id}: 선택지 ${t.choices?.length ?? 0}개 (설계표 ${d.choices.length}개)`);
		if ((t.forced?.length ?? 0) !== (d.forced?.length ?? 0)) err.push(`${id}: forced 수가 설계표와 다름`);
	}
	for (const c of cards)
		for (const l of koreanLines(c)) if (l.length > 60) err.push(`${c.id}: ${l.length}자 "${l}" (60자 이내)`);
	return err;
}

/** 3단계 additions 검사: 설계표의 기억·표시가 모두 있는지 */
export function checkAdditions(a: Record<string, any>, design: CardDesign, scenarioId: string): string[] {
	const err: string[] = [];
	if (a?.scenario_id !== scenarioId) err.push(`scenario_id 가 ${scenarioId} 가 아님`);
	for (const s of Object.keys(design.seeds)) if (!a?.seeds?.[s]?.korean) err.push(`seeds.${s} 없음`);
	for (const f of Object.keys(design.flags)) if (!a?.flags?.[f]?.label?.korean) err.push(`flags.${f} 없음`);
	if (!a?.rooms || typeof a.rooms !== 'object') err.push('rooms 없음');
	return err;
}

// ── 유사도 ──────────────────────────────────────────────────

/** 두 문자열의 일치 비율 (Python difflib.SequenceMatcher.ratio 와 같은 방식, junk 처리 없음) */
export function similarity(a: string, b: string): number {
	if (!a.length && !b.length) return 1;
	const matched = (alo: number, ahi: number, blo: number, bhi: number): number => {
		let best = 0;
		let bi = 0;
		let bj = 0;
		let prev = new Array<number>(bhi - blo + 1).fill(0);
		for (let i = alo; i < ahi; i++) {
			const cur = new Array<number>(bhi - blo + 1).fill(0);
			for (let j = blo; j < bhi; j++)
				if (a[i] === b[j]) {
					const k = (cur[j - blo + 1] = prev[j - blo] + 1);
					if (k > best) [best, bi, bj] = [k, i - k + 1, j - k + 1];
				}
			prev = cur;
		}
		if (!best) return 0;
		return best + matched(alo, bi, blo, bj) + matched(bi + best, ahi, bj + best, bhi);
	};
	return (2 * matched(0, a.length, 0, b.length)) / (a.length + b.length);
}

export type CardLike = Record<string, any>;
const dialogueOf = (c: CardLike) =>
	((c.dialogue ?? []) as { content?: { korean?: string } }[]).map((l) => l.content?.korean ?? '').join(' ');

/** 새 카드 중 다른 카드와 첫 대사가 0.6 이상 같거나 제목이 같은 것 */
export function similarCards(mine: CardLike[], others: CardLike[]): { id: string; reason: string }[] {
	const out: { id: string; reason: string }[] = [];
	for (const c of mine) {
		const title = c.title?.korean;
		const same = others.find((o) => o.title?.korean === title);
		if (same) {
			out.push({ id: c.id, reason: `제목 "${title}" 이(가) ${same.id} 와 같음` });
			continue;
		}
		const d = dialogueOf(c);
		let best = { r: 0, id: '' };
		for (const o of others) {
			const r = similarity(d, dialogueOf(o));
			if (r > best.r) best = { r, id: o.id };
		}
		if (best.r >= 0.6) out.push({ id: c.id, reason: `첫 대사가 ${best.id} 와 ${best.r.toFixed(2)} 같음` });
	}
	return out;
}
