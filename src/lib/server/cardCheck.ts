// 카드 생성 결과 검사 (card-pipeline 용)
// - checkDesign: 1단계 설계표의 구성 규칙
// - checkSeqDesign / checkSeqText: 칸 고정 카드(cardGenSeq) 설계표·대사
// - checkText: 2단계 대사 (한 줄 60자, 카드·선택지 수)
// - checkAdditions: 3단계 additions 의 기억·표시 누락
// - similarCards: 같은 스토리의 다른 시나리오 카드와 첫 대사·제목 비교
import type { AxisCombo } from '$lib/prompts/axisVariantGen';
import type { CardDesign, CardText } from '$lib/prompts/cardGen';
import type { CardScenario } from '$lib/prompts/cardGen';
import { BELITTLE, META, registersOf, type Register } from '$lib/prompts/cardGenSeq';

const REG_NAME: Record<Register, string> = { polite: '존댓말', plain: '반말' };
/** 원문 말투와 다른 문장이 있으면 오류 한 줄 */
function registerError(
	speaker: string,
	text: string,
	registers: Record<string, Register>
): string | null {
	const want = registers[speaker];
	if (!want) return null;
	const got = registersOf(text);
	if (!got.some((g) => g !== want)) return null;
	return `${speaker} 말투가 원문(${REG_NAME[want]})과 다름 — ${text}`;
}

const EVENTS = ['campsite', 'meet_stranger', 'minigame_slot', 'minigame_timing', 'minigame_cup'];
// 칸: A(1~3) B(3~5) C(5~9) D(9~15). after<=시작, before>=끝이면 그 칸에 나옴
const SLOTS: [string, number, number, number][] = [
	['A', 1, 3, 4],
	['B', 3, 5, 4],
	['C', 5, 9, 3],
	['D', 9, 15, 2]
];

/** 카드마다 선택지 공통 검사 (이벤트 수, reward·gold·event, seed·flag 이름, mbti, require 없는 선택지, 인물) */
function choiceErrors(
	d: CardDesign,
	known: string[]
): { err: string[]; ev: Record<string, number> } {
	const err: string[] = [];
	const seeds = d.seeds ?? {};
	const flags = d.flags ?? {};
	const actors = d.actors ?? {};
	const ev: Record<string, number> = {};
	for (const c of d.cards) {
		const all = [...c.choices, ...(c.forced ?? [])];
		const es = all.filter((ch) => ch.event).map((ch) => ch.event as string);
		if (es.length > 1) err.push(`${c.id}: 이벤트 ${es.length}개 (카드당 1개까지)`);
		for (const e of es) ev[e] = (ev[e] ?? 0) + 1;
		all.forEach((ch, i) => {
			const at = `${c.id}[${i}]`;
			if (ch.event && ch.reward) err.push(`${at}: reward 와 event 함께 사용`);
			if (!ch.reward?.length && !ch.effects?.gold && !ch.event)
				err.push(`${at}: reward·gold·event 없음`);
			if (!('seed' in ch)) err.push(`${at}: seed 키 없음`);
			if (ch.seed && !seeds[ch.seed]) err.push(`${at}: seeds 에 없는 기억 ${ch.seed}`);
			if (ch.flag && !flags[ch.flag]) err.push(`${at}: flags 에 없는 표시 ${ch.flag}`);
			if (typeof ch.mbti !== 'string' || ch.mbti.length !== 2) err.push(`${at}: mbti 2글자 아님`);
			if (ch.effects && 'spread' in ch.effects) err.push(`${at}: spread 사용`);
			if (!ch.effects || !Object.keys(ch.effects).length) err.push(`${at}: effects 비어 있음`);
		});
		const ms = all.map((ch) => ch.mbti);
		if (new Set(ms).size !== ms.length) err.push(`${c.id}: 같은 mbti 반복 ${ms.join(',')}`);
		if (c.choices.filter((ch) => !ch.require).length < 2)
			err.push(`${c.id}: require 없는 선택지 2개 미만`);
		for (const p of (c.people as string[] | undefined) ?? [])
			if (!actors[p] && !known.includes(p)) err.push(`${c.id}: actors 에 없는 인물 ${p}`);
	}
	return { err, ev };
}

/** 1단계 설계표 검사. 오류 문장 배열 (빈 배열 = 통과) */
export function checkDesign(d: CardDesign, combo: AxisCombo, companion: string): string[] {
	const err: string[] = [];
	if (!Array.isArray(d?.cards)) return ['cards 배열 없음'];
	const side: Record<string, string> = {
		fighting: combo[0] === 'F' ? '-' : '+',
		community: combo[1] === 'I' ? '-' : '+',
		reason: combo[2] === 'R' ? '-' : '+'
	};
	const cb = d.cards.filter((c) => c.callback);
	const plant = d.cards.filter((c) => !c.callback && c.choices?.some((ch) => ch.seed));
	const normal = d.cards.filter((c) => !cb.includes(c) && !plant.includes(c));
	if (plant.length !== 3 || normal.length !== 6 || cb.length !== 5)
		err.push(
			`구성 심기/일반/회수 = ${plant.length}/${normal.length}/${cb.length} (3/6/5 이어야 함)`
		);
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
		err.push(
			`leaning: 성향 쪽 ${JSON.stringify(on)} / 반대쪽 ${JSON.stringify(off)} (축마다 2 / 1)`
		);

	const { err: choiceErr, ev } = choiceErrors(d, [companion]);
	err.push(...choiceErr);
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

const DIRECTIONS = ['fighting+', 'fighting-', 'community+', 'community-', 'reason+', 'reason-'];
// 칸 고정 카드(cardGenSeq): 칸마다 [심기, 일반, 회수] 장수
const SEQ_LAYOUT: Record<string, [number, number, number]> = {
	A: [1, 2, 0],
	B: [1, 2, 0],
	C: [0, 3, 2],
	D: [0, 3, 2]
};

export type SeqCheckOpts = {
	/** 최종 보스 시나리오 (일반 보스 카드 없음) */
	isFinal: boolean;
	/** 이 스토리 일반 보스 호칭 (카드 인물 이름·대사 금지) */
	bossTitles: string[];
	/** 앞 시나리오 카드 인물 이름 (다시 쓰지 않음) */
	prevNames: string[];
	/** 동행 한국어 이름 (동행이 사건의 당사자가 되는지 검사) */
	companionName?: string;
};

/** 동행이 사건의 당사자가 되는 서술 (예: "닥스의 앞을 막아섰다", "닥스의 장비") */
export function companionTarget(line: string, name?: string): boolean {
	if (!name) return false;
	return new RegExp(
		`${name}(의 (앞|길|작업|장비|자리|공간|물건)|(을|를|에게) ?(막|가로막|요구|따지))`
	).test(line);
}
const DUEL = /대결|겨루|덤벼|덤비|붙어|맞붙|한판|승부|결투|싸우자|싸워|상대해/;
/** 이벤트 소개·대결 고르기 글 검사 (종류별로 실제로 하는 일이 보이는지, 비유·섞임 없는지) */
function eventTextErrors(id: string, event: string, ch: Record<string, any>): string[] {
	const err: string[] = [];
	const intro = ((ch.event_intro ?? []) as any[]).map((l) => l?.content?.korean ?? '').join(' ');
	if (!intro.trim()) return [`${id}: ${event} 선택지에 event_intro 없음`];
	if (/(컵|슬롯머신|룰렛|야바위)(처럼|같이|인 듯)/.test(intro))
		err.push(`${id}: event_intro 가 미니게임에 빗댐 — ${intro}`);
	if (event === 'meet_stranger') {
		if (!intro.includes('{actor}') || !DUEL.test(intro))
			err.push(`${id}: meet_stranger 소개에 {actor} 와 1:1 대결을 거는 말이 있어야 함 — ${intro}`);
		const o = ch.event_options;
		if (
			!o?.fight?.text?.korean?.includes('{actor}') ||
			!o?.fight?.win?.length ||
			!o?.fight?.lose?.length
		)
			err.push(`${id}: event_options.fight 에 text({actor})·win·lose 필요`);
		if (!o?.avoid?.text?.korean || !o?.avoid?.result?.length)
			err.push(`${id}: event_options.avoid 에 text·result 필요`);
	} else if (ch.event_options) err.push(`${id}: meet_stranger 가 아닌데 event_options`);
	if (event === 'minigame_timing' && !/세 ?번|세 차례|세 군데|세 개|셋|3번/.test(intro))
		err.push(`${id}: minigame_timing 소개에 세 번 연달아 맞춰야 하는 상황이 없음 — ${intro}`);
	if (event === 'minigame_slot' && /타이밍|정확한 순간|박자/.test(intro))
		err.push(`${id}: minigame_slot 소개에 타이밍 게임 말 — ${intro}`);
	if (event === 'minigame_cup' && !/컵|잔|그릇|상자|통|주머니|숨기|숨겼|숨긴|감춘|감췄/.test(intro))
		err.push(`${id}: minigame_cup 소개에 숨긴 물건 고르기가 없음 — ${intro}`);
	return err;
}

/** 동행이 자기 목표를 세우는 말 (예: "내가 작업할 공간이 필요하다고") */
const COMPANION_GOAL = /(내|제) ?(작업|장비|공간|자리)|(내가|제가)[^.?!]{0,15}필요/;

/** 칸 고정 카드(cardGenSeq) 설계표 검사. known = 설계표 actors 밖에서 말할 수 있는 인물 (원문 인물, 첫 번째가 동행) */
export function checkSeqDesign(d: CardDesign, known: string[], opts: SeqCheckOpts): string[] {
	if (!Array.isArray(d?.cards)) return ['cards 배열 없음'];
	const err: string[] = [];
	if (!opts.isFinal) known = [...known, 'random_boss'];
	const hasBoss = (c: CardDesign['cards'][number]) =>
		((c.people as string[] | undefined) ?? []).some((p) => p === 'random_boss' || p === 'boss');
	const bossCards = d.cards.filter(hasBoss);
	if (opts.isFinal) {
		if (bossCards.length)
			err.push(
				`보스가 나오는 카드 ${bossCards.map((c) => c.id).join(', ')} (최종 보스 시나리오는 0장)`
			);
	} else if (bossCards.length !== 1 || bossCards[0].slot !== 'D' || bossCards[0].kind !== 'normal')
		err.push(
			`일반 보스 카드 ${bossCards.map((c) => `${c.id}(${c.slot},${c.kind})`).join(', ') || '없음'} (칸 D 일반 카드 정확히 1장, people 에 random_boss)`
		);
	for (const [id, a] of Object.entries(d.actors ?? {})) {
		const name = String(a?.name?.korean ?? '');
		if (['random_boss', 'boss'].includes(id))
			err.push(`actors 에 ${id} (일반 보스는 actors 에 넣지 않음)`);
		const t = opts.bossTitles.find((x) => name.includes(x) || x.includes(name));
		if (t) err.push(`인물 ${id} "${name}": 일반 보스 호칭 "${t}" 와 겹침`);
		if (opts.prevNames.includes(name)) err.push(`인물 ${id} "${name}": 앞 시나리오에서 쓴 인물`);
		if (name.includes('보스')) err.push(`인물 ${id} "${name}": "보스" 낱말`);
	}
	const flags = d.flags ?? {};
	const of = (slot: string, kind: string) =>
		d.cards.filter((c) => c.slot === slot && c.kind === kind);
	for (const c of d.cards) {
		const title = String(c.title?.korean ?? '');
		const tt = opts.bossTitles.find(
			(x) => title.includes(x) || title.includes(x.split(' ').at(-1)!)
		);
		if (title.includes('보스') || tt)
			err.push(`${c.id}: 제목 "${title}" 에 "보스" 또는 일반 보스 호칭`);
		if (!SEQ_LAYOUT[c.slot]) err.push(`${c.id}: slot 이 A~D 가 아님 (${c.slot})`);
		if (!['plant', 'normal', 'callback'].includes(c.kind))
			err.push(`${c.id}: kind 가 plant/normal/callback 아님`);
		if (!c.bridge) err.push(`${c.id}: bridge 없음`);
		if (d.cards.filter((x) => x.id === c.id).length > 1) err.push(`${c.id}: 카드 id 중복`);
		const others = ((c.people as string[] | undefined) ?? []).filter((p) => p !== known[0]);
		if (!others.length) err.push(`${c.id}: 동행 말고 다른 인물이 없음 (people 에 1명 이상)`);
		// 이름의 낱말(2글자 이상) 하나만 있어도 됨 (예: "견습 해커" → "견습" 또는 "해커")
		const names = others.map((p) => String(d.actors?.[p]?.name?.korean ?? p));
		const words = names.flatMap((n) => n.split(' ').filter((w) => w.length >= 2));
		if (others.length && !hasBoss(c) && !words.some((w) => String(c.summary ?? '').includes(w)))
			err.push(`${c.id}: summary 에 인물(${names.join(', ')})이 없음 — "${c.summary}"`);
		const summary = String(c.summary ?? '');
		if (c.kind !== 'callback' && !summary.includes('당신'))
			err.push(`${c.id}: summary 의 상대가 주인공이 아님 ("당신에게 ~" 로) — "${summary}"`);
		if (companionTarget(summary, opts.companionName))
			err.push(
				`${c.id}: summary 에서 동행 ${opts.companionName} 이(가) 사건의 당사자 — "${summary}" (상대는 주인공)`
			);
		[...c.choices, ...(c.forced ?? [])].forEach((ch, i) => {
			if (!ch.path) err.push(`${c.id}[${i}]: path 없음`);
			const w = BELITTLE.find((x) => String(ch.summary ?? '').includes(x));
			if (w) err.push(`${c.id}[${i}]: 선택지를 깎아내리는 말 "${w}"`);
		});
	}
	for (const [slot, [p, n, cb]] of Object.entries(SEQ_LAYOUT)) {
		const got = [of(slot, 'plant').length, of(slot, 'normal').length, of(slot, 'callback').length];
		if (got[0] !== p || got[1] !== n || got[2] !== cb)
			err.push(`카드 ${slot} 칸 심기/일반/회수 = ${got.join('/')} (${p}/${n}/${cb} 이어야 함)`);
	}

	// 심기·일반: easy 1 + hard 1 (require 없음)
	const shown = d.cards.filter((c) => c.kind !== 'callback');
	for (const c of shown) {
		const easy = c.choices.filter((ch) => ch.path === 'easy');
		const hard = c.choices.filter((ch) => ch.path === 'hard');
		if (easy.length !== 1 || hard.length !== 1) {
			err.push(`${c.id}: easy ${easy.length}개 / hard ${hard.length}개 (1개씩이어야 함)`);
			continue;
		}
		if (easy[0].require || hard[0].require) err.push(`${c.id}: easy·hard 에 require 가 있음`);
		if (c.kind === 'normal' && c.choices.some((ch) => ch.seed))
			err.push(`${c.id}: 일반 카드에 seed 가 있음`);
		if (c.kind === 'plant' && (!easy[0].seed || !hard[0].seed || easy[0].seed === hard[0].seed))
			err.push(`${c.id}: 심기 카드는 easy·hard 가 서로 다른 기억을 남겨야 함`);
		if (c.kind === 'plant' && c.intensity !== 'calm')
			err.push(`${c.id}: 심기 카드는 intensity calm`);
	}

	// 기억 → 회수: 칸 A 심기 → 칸 C 회수, 칸 B 심기 → 칸 D 회수
	for (const [from, to] of [
		['A', 'C'],
		['B', 'D']
	]) {
		for (const p of of(from, 'plant')) {
			const easySeed = p.choices.find((ch) => ch.path === 'easy')?.seed;
			const seeds = new Set(p.choices.map((ch) => ch.seed).filter(Boolean));
			const backs = of(to, 'callback');
			const recalled = new Set(backs.map((c) => c.callback?.seed));
			if (
				seeds.size !== 2 ||
				[...seeds].some((s) => !recalled.has(s)) ||
				recalled.size !== backs.length
			)
				err.push(
					`칸 ${from} 심기 카드의 기억 ${[...seeds].join(',')} 과 칸 ${to} 회수 카드의 기억 ${[...recalled].join(',')} 이 맞지 않음`
				);
			for (const c of backs) {
				if (c.callback?.min_rooms_after !== 2) err.push(`${c.id}: callback.min_rooms_after 2 필요`);
				if (c.leaning) err.push(`${c.id}: 회수 카드에 leaning 있음`);
				if (!c.choices.every((ch) => ch.flag)) {
					err.push(`${c.id}: 회수 카드 선택지마다 flag 필요`);
					continue;
				}
				// 쉬운 길 기억: bad 1개 이상 + good 1개 이상 / 어려운 길 기억: 모두 good
				const free = c.choices.filter((ch) => !ch.require).map((ch) => flags[ch.flag]?.kind);
				const fromEasy = c.callback?.seed === easySeed;
				const okFlags = fromEasy
					? free.includes('bad') && free.includes('good')
					: free.length >= 2 && free.every((k) => k === 'good');
				if (!okFlags)
					err.push(
						`${c.id}: 조건 없는 선택지의 표시가 ${free.join(',')} (${fromEasy ? 'bad 1개 이상 + good 1개 이상' : '모두 good'} 이어야 함)`
					);
			}
		}
	}

	// 이벤트: 이유 한 줄, 낯선 자는 피했을 때 패널티
	for (const c of d.cards)
		[...c.choices, ...(c.forced ?? [])].forEach((ch, i) => {
			if (!ch.event) return;
			if (!String(ch.event_reason ?? '').trim())
				err.push(`${c.id}[${i}]: event 가 있는데 event_reason 없음`);
			if (ch.event === 'meet_stranger') {
				const a = ch.event_avoid ?? {};
				const bad = (a.reward ?? []).filter((r: string) => !r.endsWith('_down'));
				const neg = Object.values(a.effects ?? {}).some((v) => Number(v) < 0);
				if ((!a.reward?.length && !neg) || bad.length)
					err.push(
						`${c.id}[${i}]: meet_stranger 는 event_avoid 에 작은 패널티 (reward *_down 1개, echo -5 가능)`
					);
			}
		});

	// 사건 종류 고루: "막" 이 들어간 요약(길을 막음 등)은 칸마다 1장까지
	for (const slot of Object.keys(SEQ_LAYOUT)) {
		const block = d.cards.filter((c) => c.slot === slot && /막/.test(String(c.summary ?? '')));
		if (block.length > 1)
			err.push(
				`카드 ${slot} 칸 "막는" 카드 ${block.length}장 (${block.map((c) => c.id).join(', ')}) — 1장만 남기고 부탁·거래·다툼·분실물 등 다른 사건으로`
			);
	}

	// leaning (normalizeDesign 이 easy 선택지로 정함): 같은 칸 3장은 방향이 서로 다름
	if (shown.some((c) => !DIRECTIONS.includes(c.leaning)))
		err.push('easy 선택지에 fighting·community·reason 값이 없는 카드가 있음');
	for (const slot of Object.keys(SEQ_LAYOUT)) {
		const dirs = shown.filter((c) => c.slot === slot).map((c) => String(c.leaning));
		if (new Set(dirs).size !== dirs.length)
			err.push(
				`카드 ${slot} 칸 easy 방향이 겹침 (${dirs.join(',')}) — 겹친 카드의 easy 선택지가 다른 축·부호를 움직이게`
			);
	}

	const { err: choiceErr, ev } = choiceErrors(d, known);
	err.push(...choiceErr);
	const evTotal = Object.values(ev).reduce((a, b) => a + b, 0);
	if (
		EVENTS.some((e) => !ev[e] || ev[e] > 4) ||
		Object.keys(ev).length !== 5 ||
		evTotal < 8 ||
		evTotal > 14
	)
		err.push(`이벤트 ${JSON.stringify(ev)} (5종 모두 1~4개, 합 8~14개)`);
	const forced = d.cards.filter((c) => c.forced?.length);
	if (forced.length !== 1 || forced[0].kind !== 'normal')
		err.push(`강제 사건 카드 ${forced.length}장 (일반 카드 1장이어야 함)`);
	const lock = shown.filter((c) => c.choices.some((ch) => ch.require?.mbti)).length;
	if (lock < 3 || lock > 6) err.push(`MBTI 잠금 카드 ${lock}장 (3~6장)`);
	return err;
}

function koreanLines(v: unknown): string[] {
	if (Array.isArray(v)) return v.flatMap(koreanLines);
	if (v && typeof v === 'object') {
		const o = v as Record<string, any>;
		const own = typeof o.content?.korean === 'string' ? [o.content.korean as string] : [];
		return [
			...own,
			...Object.entries(o).flatMap(([k, x]) => (k === 'content' ? [] : koreanLines(x)))
		];
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
		if ((t.forced?.length ?? 0) !== (d.forced?.length ?? 0))
			err.push(`${id}: forced 수가 설계표와 다름`);
	}
	for (const c of cards)
		for (const l of koreanLines(c))
			if (l.length > 60) err.push(`${c.id}: ${l.length}자 "${l}" (60자 이내)`);
	// 같은 묶음 안에서 event_intro 문장 되풀이 금지
	const intros = new Map<string, string>();
	for (const c of cards)
		for (const ch of [...(c.choices ?? []), ...(c.forced ?? [])])
			for (const l of (ch.event_intro ?? []) as any[]) {
				const t = String(l?.content?.korean ?? '').trim();
				if (!t) continue;
				if (intros.has(t) && intros.get(t) !== c.id)
					err.push(`${c.id}: event_intro 가 ${intros.get(t)} 와 같음 — ${t}`);
				intros.set(t, c.id);
			}
	return err;
}

/** 두 문장이 n 글자 이상 연속으로 같은 부분이 있는지 (공백 무시) */
function sharesRun(a: string, b: string, n: number): boolean {
	const x = a.replace(/\s/g, '');
	const y = b.replace(/\s/g, '');
	for (let i = 0; i + n <= x.length; i++) if (y.includes(x.slice(i, i + n))) return true;
	return false;
}

/** 칸 고정 카드 대사 검사: checkText + 선택지를 깎아내리는 말 + 설명투 + "보스"·일반 보스 호칭 + 첫 줄 베끼기 + 일반 보스 화자.
 * prevLast = 칸(A~D) → 그 칸 앞 방의 마지막 대사 */
export function checkSeqText(
	cards: CardText[],
	design: CardDesign,
	ids: string[],
	opts: {
		bossTitles: string[];
		prevLast: Record<string, string>;
		companion?: string;
		companionName?: string;
		/** 원문 인물 말투 (storyRegisters) */
		registers?: Record<string, Register>;
	}
): string[] {
	const err = checkText(cards, design, ids);
	if (!Array.isArray(cards)) return err;
	for (const c of cards) {
		const d = design.cards.find((x) => x.id === c.id);
		const bossCard = ((d?.people as string[] | undefined) ?? []).includes('random_boss');
		const speaksBoss = (c.dialogue ?? []).some((l) => l.speaker === 'random_boss');
		if (bossCard && !speaksBoss)
			err.push(`${c.id}: 일반 보스 카드인데 dialogue 에 speaker random_boss 줄이 없음`);
		const allLines = [
			c.dialogue,
			...(c.choices ?? []).map((x) => x.result),
			...(c.forced ?? []).map((x) => x.result)
		].flat();
		if (!bossCard && allLines.some((l) => l?.speaker === 'random_boss' || l?.speaker === 'boss'))
			err.push(`${c.id}: 일반 보스 카드가 아닌데 보스가 말함`);
		for (const l of koreanLines(c)) {
			if (/\{random_boss\}(이\(가|은\(는|을\(를)(?!\))/.test(l))
				err.push(`${c.id}: 조사 괄호가 닫히지 않음 — ${l}`);
			if (l.includes('보스')) err.push(`${c.id}: "보스" 낱말 — ${l}`);
			const t = opts.bossTitles.find((x) => l.includes(x));
			if (t) err.push(`${c.id}: 일반 보스 호칭 "${t}" — ${l} (일반 보스는 {random_boss})`);
		}
		for (const l of allLines) {
			const t = l?.content?.korean ?? '';
			if (l?.speaker === 'narrator' && companionTarget(t, opts.companionName))
				err.push(`${c.id}: 서술에서 동행이 사건의 당사자 — ${t} (사건은 "당신" 앞에서)`);
			if (opts.companion && l?.speaker === opts.companion && COMPANION_GOAL.test(t))
				err.push(`${c.id}: 동행이 자기 목표를 세움 — ${t} (동행은 거들기만, 문제는 주인공의 것)`);
			const re = l?.speaker && opts.registers ? registerError(l.speaker, t, opts.registers) : null;
			if (re) err.push(`${c.id}: ${re}`);
			// 서술은 "~했다" 체 (존댓말 서술 금지)
			if (
				l?.speaker === 'narrator' &&
				registersOf(t.replace(/“[^”]*”|"[^"]*"/g, '')).includes('polite')
			)
				err.push(`${c.id}: narrator 말투가 원문(~다 서술)과 다름 — ${t}`);
		}
		[...(c.choices ?? []), ...(c.forced ?? [])].forEach((ch, i) => {
			const dc = [...(d?.choices ?? []), ...(d?.forced ?? [])][i];
			if (dc?.event) err.push(...eventTextErrors(c.id, dc.event, ch));
		});
		const first = c.dialogue?.[0]?.content?.korean ?? '';
		const prev = d?.slot ? opts.prevLast[d.slot] : undefined;
		if (/던 그때|한 직후|난 직후|던 순간/.test(first) || (prev && sharesRun(first, prev, 8)))
			err.push(`${c.id}: 첫 줄이 앞 방 대사를 다시 말함 — ${first}`);
		for (const ch of [...(c.choices ?? []), ...(c.forced ?? [])]) {
			const w = BELITTLE.find((x) => (ch.text?.korean ?? '').includes(x));
			if (w) err.push(`${c.id}: 선택지를 깎아내리는 말 "${w}" — ${ch.text?.korean}`);
			if ((ch.text?.korean ?? '').includes('보스'))
				err.push(`${c.id}: 선택지에 "보스" 낱말 — ${ch.text?.korean}`);
			if (/(니다|요)[.!?]?$/.test((ch.text?.korean ?? '').trim()))
				err.push(`${c.id}: 선택지 말투가 원문(~한다)과 다름 — ${ch.text?.korean}`);
		}
		for (const l of koreanLines(c)) {
			const w = META.find((x) => l.includes(x));
			if (w) err.push(`${c.id}: 설명투 "${w}" — ${l}`);
		}
	}
	return err;
}

/** 3단계 additions 검사: 설계표의 기억·표시가 모두 있는지.
 * scenario 를 주면 방 LLM 줄도 검사: 방·after_line 범위, 화자가 그 방 원문 인물인지, 말투, 보스가 카드 인물 이름을 말하는지 */
export function checkAdditions(
	a: Record<string, any>,
	design: CardDesign,
	scenarioId: string,
	opts?: { scenario: CardScenario; registers: Record<string, Register> }
): string[] {
	const err: string[] = [];
	if (a?.scenario_id !== scenarioId) err.push(`scenario_id 가 ${scenarioId} 가 아님`);
	for (const s of Object.keys(design.seeds))
		if (!a?.seeds?.[s]?.korean) err.push(`seeds.${s} 없음`);
	for (const f of Object.keys(design.flags))
		if (!a?.flags?.[f]?.label?.korean) err.push(`flags.${f} 없음`);
	if (!a?.rooms || typeof a.rooms !== 'object') err.push('rooms 없음');
	if (!opts || !a?.rooms) return err;
	// 카드 인물 이름: 전체 이름 + 낱말(2글자 이상). 원문에도 나오는 흔한 낱말("정보" 등)은 뺌
	const storyText = opts.scenario.rooms
		.flatMap((r) => r.dialogue.map((l) => l.content?.korean ?? ''))
		.join(' ');
	const names = Object.values(design.actors ?? {})
		.flatMap((x) => {
			const full = String(x?.name?.korean ?? '');
			return [
				full,
				...full.split(' ').filter((w) => w.length >= 2 && w !== full && !storyText.includes(w))
			];
		})
		.filter(Boolean);
	let count = 0;
	for (const [rid, room] of Object.entries(a.rooms as Record<string, any>)) {
		const orig = opts.scenario.rooms.find((r) => String(r.id) === rid);
		if (!orig) {
			err.push(`rooms.${rid}: 원문에 없는 방`);
			continue;
		}
		const inRoom = new Set([
			'character_any',
			...orig.dialogue.map((l) => l.speaker).filter(Boolean)
		]);
		for (const [i, x] of ((room?.dialogue ?? []) as any[]).entries()) {
			count++;
			const at = `rooms.${rid}.dialogue[${i}]`;
			const sp = String(x?.line?.speaker ?? '');
			const ex = String(x?.line?.example?.korean ?? '');
			if (
				typeof x?.after_line !== 'number' ||
				x.after_line < 0 ||
				x.after_line > orig.dialogue.length
			)
				err.push(`${at}: after_line ${x?.after_line} (0~${orig.dialogue.length})`);
			if (!inRoom.has(sp))
				err.push(`${at}: 화자 ${sp} 는 방 ${rid} 원문에 없음 (${[...inRoom].join(', ')} 중에서)`);
			const re = registerError(sp, ex, opts.registers);
			if (re) err.push(`${at}: ${re}`);
			if (['random_boss', 'boss'].includes(sp)) {
				const w = names.find((n) => ex.includes(n));
				if (w)
					err.push(`${at}: 보스가 카드 인물 "${w}" 을(를) 말함 (보스는 카드 인물을 모름) — ${ex}`);
			}
		}
	}
	if (count !== 4) err.push(`방 LLM 줄 ${count}개 (4개여야 함)`);
	for (const [id, x] of Object.entries((a.actors ?? {}) as Record<string, any>)) {
		const want = opts.registers[id];
		const style = String(x?.style?.korean ?? '');
		if (want === 'polite' && style.includes('반말'))
			err.push(`actors.${id}.style "${style}": 원문은 존댓말`);
		if (want === 'plain' && style.includes('존댓말'))
			err.push(`actors.${id}.style "${style}": 원문은 반말`);
	}
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
	((c.dialogue ?? []) as { content?: { korean?: string } }[])
		.map((l) => l.content?.korean ?? '')
		.join(' ');

/** 새 카드 중 다른 카드와 첫 대사가 0.6 이상 같거나 제목이 같은 것 */
export function similarCards(
	mine: CardLike[],
	others: CardLike[]
): { id: string; reason: string }[] {
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
		if (best.r >= 0.6)
			out.push({ id: c.id, reason: `첫 대사가 ${best.id} 와 ${best.r.toFixed(2)} 같음` });
	}
	return out;
}
