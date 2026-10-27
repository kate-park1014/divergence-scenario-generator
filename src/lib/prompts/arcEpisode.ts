import type { StoryArc } from '$lib/types';

// storyarc 의 화별 값 읽기. 예전 storyarc(화별 필드 없음)는 아크 하나짜리 값으로 대신한다.

/** 그 화 주인공의 행동 (1화=wrong_action, 2~4화=겉모습이 다른 행동, 5화=right_action) */
export function actionOf(arc: StoryArc, order: number): string {
	const a = arc.story_spine?.find((l) => l.order === order)?.protagonist_action?.trim();
	return a || (order <= 4 ? (arc.wrong_action ?? '') : (arc.right_action ?? ''));
}

/** 그 화에 최종보스가 드러나는 매체 (화마다 다름) */
export function traceOf(arc: StoryArc, order: number): string {
	return arc.scenarioOutline[order - 1]?.boss_trace?.trim() || (arc.boss_trace ?? '');
}

/** 2~4화: 주인공이 앞 화에서 배운 것 */
export function lessonOf(arc: StoryArc, order: number): string {
	return arc.story_spine?.find((l) => l.order === order)?.lesson?.trim() ?? '';
}

/** 1~4화: 그 행동이 사실은 왜 wrong_action 과 같은 일인지 (5화에만 쓴다) */
export function hiddenLinkOf(arc: StoryArc, order: number): string {
	return arc.story_spine?.find((l) => l.order === order)?.hidden_link?.trim() ?? '';
}

/** 행동의 동사 앞 두 글자 ("네온 조각을 끼워 넣는다" → 핵심 물건을 빼고 마지막 낱말 "넣는다" → "넣는") */
export function verbStem(action: string, keyObject = ''): string {
	const verb = (keyObject ? action.replace(keyObject, '') : action).trim().split(/\s+/).pop() ?? '';
	return verb.length >= 2 ? verb.slice(0, 2) : '';
}
