import { npc_2_pools } from './snowy_npc_pool';
import { desert_npc_pool } from './desert_npc_pool';
import { forest_npc_pool } from './forest_npc_pool';
import { hell_npc_pool } from './hell_npc_pool';
import { modern_npc_pool } from './modern_npc_pool';

/**
 * NPC 고정 페르소나의 단일 출처.
 * 각 NPC의 변하지 않는 정체성(성격·역할)은 테마별 NPC 풀의 `persona` 필드에 1회만 정의하고,
 * 여기서 key → persona 로 집약한다. storyarc는 그 편에서의 역할(npc_roles.role)과
 * 서사(arc)만 다루고, 페르소나는 이 출처에서 끌어온다.
 */
type NpcPersonaSource = { key: string; persona?: string };

const allNpcPools: NpcPersonaSource[] = [
	...npc_2_pools,
	...desert_npc_pool,
	...forest_npc_pool,
	...hell_npc_pool,
	...modern_npc_pool
];

export const npcPersonaByKey: Record<string, string> = {};
for (const npc of allNpcPools) {
	if (npc.persona) npcPersonaByKey[npc.key] = npc.persona;
}

/** 주어진 NPC key의 고정 페르소나를 반환한다. 정의되지 않았으면 undefined. */
export function getNpcPersona(key: string): string | undefined {
	return npcPersonaByKey[key];
}
