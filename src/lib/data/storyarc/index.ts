import { storyarc_false_spring } from './storyarc_false_spring';
import { storyarc_slow_data } from './storyarc_slow';
import type { StoryArc } from '$lib/types';

export const storyarcRegistry: StoryArc[] = [
	storyarc_false_spring,
	storyarc_slow_data
];

export function getStoryarc(id: string): StoryArc | undefined {
	return storyarcRegistry.find((s) => s.id === id);
}
