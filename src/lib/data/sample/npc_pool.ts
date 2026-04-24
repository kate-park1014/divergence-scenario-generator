import { desert_npc_pool } from './npc/desert_npc_pool';
import { forest_npc_pool } from './npc/forest_npc_pool';
import { npc_2_pools } from './npc/snowy_npc_pool';

export const npc_by_theme = {
	forest: forest_npc_pool,
	snowy: npc_2_pools,
	desert: desert_npc_pool
} as const;
