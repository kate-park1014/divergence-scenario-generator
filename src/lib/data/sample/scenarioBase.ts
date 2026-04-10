import { npc_pool } from './npc_pool';
import type { StoryArc } from '$lib/types';

export function buildScenarioBase(order: number, storyarc: StoryArc) {
	const item = storyarc.scenarioOutline[order - 1];
	const npc = npc_pool.find((n) => n.key === item.npc);

	const actors: Record<string, unknown> = {};
	if (npc) {
		actors[item.npc] = {
			id: npc.id,
			name: { ...npc.name },
			description: npc.description,
			face_image_url: npc.face_image_url,
			battle_sprite_url: npc.battle_sprite_url
		};
	}

	return {
		scenario_id: `${storyarc.id}_${String(order).padStart(2, '0')}`,
		order,
		act: item.act,
		theme: storyarc.theme,
		actors,
		boss: { pool_id: item.boss }
	};
}
