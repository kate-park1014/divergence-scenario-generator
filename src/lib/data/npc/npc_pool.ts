import { desert_npc_pool } from './desert_npc_pool';
import { forest_npc_pool } from './forest_npc_pool';
import { hell_npc_pool } from './hell_npc_pool';
import { modern_npc_pool } from './modern_npc_pool';
import { npc_2_pools } from './snowy_npc_pool';

export const npc_by_theme = {
	forest: forest_npc_pool,
	snowy: npc_2_pools,
	desert: desert_npc_pool,
	hell: hell_npc_pool,
	modern: modern_npc_pool
} as const;
