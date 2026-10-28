import type { StoryArc } from '$lib/types';
import { getStoryarc } from '$lib/data/storyarc';
import {
	applyAxisVariant,
	comboFromTendency,
	type AxisCombo,
	type AxisVariantSet,
	type Tendency
} from '$lib/prompts/axisVariantGen';
import { axis_modern_evannext_1 } from './axis_modern_evannext_1';

export const axisVariantRegistry: Record<string, AxisVariantSet> = {
	[axis_modern_evannext_1.sourceId]: axis_modern_evannext_1
};

/** 원본 id + 조합 코드 → 변주가 적용된 StoryArc. */
export function getAxisStoryarc(sourceId: string, combo: AxisCombo): StoryArc | undefined {
	const source = getStoryarc(sourceId);
	if (!source) return undefined;
	return applyAxisVariant(source, combo, axisVariantRegistry[sourceId]?.variants[combo]);
}

/** 원본 id + 플레이어 성향 → 변주가 적용된 StoryArc. */
export function getAxisStoryarcByTendency(sourceId: string, t: Tendency): StoryArc | undefined {
	return getAxisStoryarc(sourceId, comboFromTendency(t));
}
