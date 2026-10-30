import type { Act, Clue, Foreshadowing, ScenarioOutlineItem, StoryArc } from '$lib/types';

// storyarc 의 화별 값 읽기.
// 지금 형식: 화별 값(line·protagonist_action·lesson·hidden_link·clues)이 scenarioOutline[] 항목 안에 있다.
// 예전 형식: story_spine[] / global_foreshadowing[] 에 따로 있다 → 그것을 읽는다.
// 더 예전 storyarc(화별 필드 없음)는 아크 하나짜리 값으로 대신한다.

type SpineLine = NonNullable<StoryArc['story_spine']>[number];

function outlineOf(arc: StoryArc, order: number): ScenarioOutlineItem | undefined {
	return arc.scenarioOutline.find((s) => s.order === order) ?? arc.scenarioOutline[order - 1];
}

function spineOf(arc: StoryArc, order: number): SpineLine | undefined {
	return arc.story_spine?.find((l) => l.order === order);
}

/** 화 항목에 값이 있으면 그것, 없으면 예전 story_spine 값 */
function episodeField(arc: StoryArc, order: number, key: 'line' | 'protagonist_action' | 'lesson' | 'hidden_link'): string {
	return (outlineOf(arc, order)?.[key] ?? spineOf(arc, order)?.[key] ?? '').trim();
}

/** 그 화의 뼈대 1~2문장 */
export function lineOf(arc: StoryArc, order: number): string {
	return episodeField(arc, order, 'line');
}

/** 화별 뼈대가 있는 화 번호들 (차례대로) */
export function lineOrders(arc: StoryArc): number[] {
	return [1, 2, 3, 4, 5].filter((o) => lineOf(arc, o));
}

/** 그 화 주인공의 행동 (1화=wrong_action, 2~4화=겉모습이 다른 행동, 5화=right_action) */
export function actionOf(arc: StoryArc, order: number): string {
	return episodeField(arc, order, 'protagonist_action') || (order <= 4 ? (arc.wrong_action ?? '') : (arc.right_action ?? ''));
}

/** 그 화에 최종보스가 드러나는 매체 (화마다 다름) */
export function traceOf(arc: StoryArc, order: number): string {
	return outlineOf(arc, order)?.boss_trace?.trim() || (arc.boss_trace ?? '');
}

/** 2~4화: 주인공이 앞 화에서 배운 것 */
export function lessonOf(arc: StoryArc, order: number): string {
	return episodeField(arc, order, 'lesson');
}

/** 1~4화: 그 행동이 사실은 왜 wrong_action 과 같은 일인지 (5화에만 쓴다) */
export function hiddenLinkOf(arc: StoryArc, order: number): string {
	return episodeField(arc, order, 'hidden_link');
}

/** 복선 하나 (심는 화 번호 포함) */
export type ArcClue = Clue & { plant_order: number };

const ORDER_OF_ACT: Record<Act, number> = { intro: 1, rising: 2, climax_finale: 5 };

/**
 * 예전 global_foreshadowing(act 단위) → 화 번호 단위.
 * intro=1화, climax_finale=5화. rising 은 2~4화가 같은 act 라서 나온 차례대로 2·3·4화에 나눈다
 * (예전 시나리오 프롬프트가 나누던 방식 그대로).
 */
export function cluesFromForeshadowing(list: Foreshadowing[]): ArcClue[] {
	let plantRising = 0;
	let revealRising = 0;
	return list.map((f) => ({
		id: f.id,
		plant_order: f.plant_act === 'rising' ? 2 + (plantRising++ % 3) : ORDER_OF_ACT[f.plant_act],
		room: f.plant_room,
		hint: f.hint,
		reveal_order: f.reveal_act === 'rising' ? 2 + (revealRising++ % 3) : ORDER_OF_ACT[f.reveal_act],
		reveal_room: f.reveal_room,
		reveal: f.reveal_context
	}));
}

/** 아크의 모든 복선 (심는 화 차례대로). 화 항목의 clues 가 없으면 예전 global_foreshadowing 을 바꿔 읽는다 */
export function cluesOf(arc: StoryArc): ArcClue[] {
	const merged = arc.scenarioOutline.flatMap((s) => (s.clues ?? []).map((c) => ({ ...c, plant_order: s.order })));
	if (merged.length) return merged;
	return cluesFromForeshadowing(arc.global_foreshadowing ?? []);
}

const OUTLINE_KEY_ORDER = [
	'order',
	'act',
	'boss',
	'npc',
	'place',
	'title',
	'line',
	'summary',
	'protagonist_action',
	'lesson',
	'hidden_link',
	'boss_trace',
	'random_boss_title',
	'random_boss_side',
	'deceive_mode',
	'clues'
];

/**
 * story_spine·global_foreshadowing 을 scenarioOutline 항목 안으로 합친 아크를 돌려준다.
 * 복선은 심는 화 항목의 clues 로 들어간다. 이미 합쳐진 아크는 그대로.
 * 복선을 화 번호로 받은 경우(plant_order/reveal_order)는 그 번호를 그대로 쓴다.
 */
export function mergeArcEpisodes<T extends StoryArc>(arc: T): T {
	const raw = (arc.global_foreshadowing ?? []) as (Foreshadowing & { plant_order?: number; reveal_order?: number })[];
	const byOrder = raw.some((f) => f.plant_order !== undefined);
	const clues: ArcClue[] = byOrder
		? raw.map((f) => ({
				id: f.id,
				plant_order: Number(f.plant_order),
				room: Number(f.plant_room),
				hint: f.hint,
				reveal_order: Number(f.reveal_order),
				reveal_room: Number(f.reveal_room),
				reveal: f.reveal_context
			}))
		: cluesFromForeshadowing(raw);

	const scenarioOutline = arc.scenarioOutline.map((s) => {
		const sp = spineOf(arc, s.order);
		const mine = clues.filter((c) => c.plant_order === s.order).map(({ plant_order: _o, ...c }) => c);
		const item: Record<string, unknown> = { ...s };
		for (const key of ['line', 'protagonist_action', 'lesson', 'hidden_link'] as const) {
			const v = s[key] ?? sp?.[key];
			if (v !== undefined) item[key] = v;
		}
		if (mine.length || s.clues) item.clues = [...(s.clues ?? []), ...mine];
		// 읽기 좋은 순서: 뼈대 → 자세한 내용 → 행동 → 게임 값 → 복선
		const sorted: Record<string, unknown> = {};
		for (const key of OUTLINE_KEY_ORDER) if (key in item) sorted[key] = item[key];
		for (const [key, v] of Object.entries(item)) if (!(key in sorted)) sorted[key] = v;
		return sorted as ScenarioOutlineItem;
	});

	const { story_spine: _s, global_foreshadowing: _g, ...rest } = arc;
	return { ...rest, scenarioOutline } as T;
}

/** 행동의 동사 앞 두 글자 ("네온 조각을 끼워 넣는다" → 핵심 물건을 빼고 마지막 낱말 "넣는다" → "넣는") */
export function verbStem(action: string, keyObject = ''): string {
	const verb = (keyObject ? action.replace(keyObject, '') : action).trim().split(/\s+/).pop() ?? '';
	return verb.length >= 2 ? verb.slice(0, 2) : '';
}
