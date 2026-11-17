import { npc_by_theme } from '../npc/npc_pool';
import type { StoryArc } from '$lib/types';

export function buildScenarioBase(order: number, storyarc: StoryArc) {
	const item = storyarc.scenarioOutline[order - 1];
	const theme_pool = npc_by_theme[storyarc.theme as keyof typeof npc_by_theme] ?? [];
	const npc = theme_pool.find((n) => n.key === item.npc);

	const actors: Record<string, unknown> = {};
	if (npc) {
		const n = npc as Record<string, unknown>;
		actors[item.npc] = {
			id: n.id,
			name: { ...(npc.name as object) },
			description: (n.description as string) ?? '',
			face_image_url: n.face_image_url,
			battle_sprite_url: n.battle_sprite_url ?? n.base_image_url
		};
	}

	return {
		scenario_id: `${storyarc.id}_${String(order).padStart(2, '0')}`,
		order,
		// 1~4화 일반 보스의 직업. korean 만 넣고 번역 단계가 나머지 언어를 채운다 (5화 최종보스는 없음)
		...(item.boss === 'random_boss' && item.random_boss_title
			? { random_boss_title: { korean: item.random_boss_title } }
			: {}),
		act: item.act,
		theme: storyarc.theme,
		actors,
		boss: { pool_id: item.boss }
	};
}
