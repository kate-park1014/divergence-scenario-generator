import { storyarc_false_spring } from './storyarc_false_spring';
import { storyarc_slow_data } from './storyarc_slow';
import { storyarc_snowy_penguin } from './storyarc_snowy_penguin';
import { storyarc_snowy_queen } from './storyarc_snowy_queen';
import { storyarc_snowy_stitcher } from './storyarc_snowy_stitcher';
import { storyarc_desert_mirage_chef } from './storyarc_desert_mirage_chef';
import { storyarc_desert_ceasefirephantom_v0 } from './storyarc_desert_ceasefirephantom_v0';
import { storyarc_desert_dunewitness_v0 } from './storyarc_desert_dunewitness_v0';
import { storyarc_hell_noctis } from './storyarc_hell_noctis';
import { storyarc_hell_lumen } from './storyarc_hell_lumen';
import { storyarc_hell_arkhain } from './storyarc_hell_arkhain';
import { storyarc_modern_evan } from './storyarc_modern_evan';
import { storyarc_modern_minsu } from './storyarc_modern_minsu';
import { storyarc_modern_otto } from './storyarc_modern_otto';
import type { StoryArc } from '$lib/types';

export const storyarcRegistry: StoryArc[] = [
	storyarc_false_spring,
	storyarc_slow_data,
	storyarc_snowy_penguin,
	storyarc_snowy_queen,
	storyarc_snowy_stitcher,
	storyarc_desert_mirage_chef,
	storyarc_desert_ceasefirephantom_v0,
	storyarc_desert_dunewitness_v0,
	storyarc_hell_noctis,
	storyarc_hell_lumen,
	storyarc_hell_arkhain,
	storyarc_modern_evan,
	storyarc_modern_minsu,
	storyarc_modern_otto
];

export function getStoryarc(id: string): StoryArc | undefined {
	return storyarcRegistry.find((s) => s.id === id);
}
