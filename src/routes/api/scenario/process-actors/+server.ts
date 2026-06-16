import { json } from '@sveltejs/kit';
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import { parseScenarioFile } from '$lib/server/parseScenarioFile';
import { hell_bosses } from '$lib/data/sample/boss/hell_boss';
import { modern_bosses } from '$lib/data/sample/boss/modern_boss';
import { desert_npc_pool } from '$lib/data/sample/npc/desert_npc_pool';
import { forest_npc_pool } from '$lib/data/sample/npc/forest_npc_pool';
import { hell_npc_pool } from '$lib/data/sample/npc/hell_npc_pool';
import { modern_npc_pool } from '$lib/data/sample/npc/modern_npc_pool';
import { npc_2_pools } from '$lib/data/sample/npc/snowy_npc_pool';
import { storyarcRegistry } from '$lib/data/storyarc';
import type { RequestHandler } from './$types';

// snowy 보스에는 별도 TS 보스 풀이 없어, storyarc들의 final_boss.name으로 보스 맵을 구성한다.
// (rising 장면에서 LLM이 보스를 이름으로 부를 때 actor 해석이 되도록)
const snowy_bosses: Record<string, { name: string }> = {};
for (const arc of storyarcRegistry) {
	if (arc.theme === 'snowy' && arc.final_boss?.name) {
		snowy_bosses[arc.final_boss.name] = { name: arc.final_boss.name };
	}
}

const SYSTEM_SPEAKERS = new Set(['narrator', 'random_boss', 'boss', 'character_any']);

const BOSS_BY_THEME: Record<string, Record<string, unknown>> = {
	hell: hell_bosses,
	modern: modern_bosses,
	snowy: snowy_bosses
};

type NpcPoolItem = {
	key?: string;
	id?: string;
	monster_id?: string;
	name?: unknown;
	face_image_url?: string;
	battle_sprite_url?: string;
};

const NPC_BY_THEME: Record<string, NpcPoolItem[]> = {
	desert: desert_npc_pool,
	forest: forest_npc_pool,
	hell: hell_npc_pool,
	modern: modern_npc_pool,
	snowy: npc_2_pools
};

type DialogueItem = { speaker?: string; type?: string };
type Room = {
	dialogue?: DialogueItem[];
	win_dialogue?: DialogueItem[];
	lose_dialogue?: DialogueItem[];
};

function isSystemSpeaker(speaker: string): boolean {
	if (SYSTEM_SPEAKERS.has(speaker)) return true;
	if (/^character_\d+$/.test(speaker)) return true;
	return false;
}

function collectSpeakers(rooms: Room[]): Set<string> {
	const speakers = new Set<string>();
	for (const room of rooms) {
		for (const block of [room.dialogue, room.win_dialogue, room.lose_dialogue]) {
			if (!block) continue;
			for (const item of block) {
				if (item.speaker) speakers.add(item.speaker);
			}
		}
	}
	return speakers;
}

function buildBossActorEntry(boss: Record<string, unknown>): Record<string, unknown> {
	const entry: Record<string, unknown> = {};
	if (boss.monster_id) entry.monster_id = boss.monster_id;
	entry.name = boss.name;
	if (boss.face_image_url) entry.face_image_url = boss.face_image_url;
	if (boss.battle_sprite_url) entry.battle_sprite_url = boss.battle_sprite_url;
	return entry;
}

function buildNpcActorEntry(npc: NpcPoolItem): Record<string, unknown> {
	const entry: Record<string, unknown> = {};
	entry.name = npc.name;
	entry.description = '';
	if (npc.face_image_url) entry.face_image_url = npc.face_image_url;
	if (npc.battle_sprite_url) entry.battle_sprite_url = npc.battle_sprite_url;
	return entry;
}

export const POST: RequestHandler = async ({ request }) => {
	const { filename } = await request.json();

	if (!filename || typeof filename !== 'string') {
		return json({ error: 'filename이 필요합니다.' }, { status: 400 });
	}

	const filepath = join(process.cwd(), 'src/lib/data/generated', filename);

	let raw: string;
	try {
		raw = await readFile(filepath, 'utf-8');
	} catch {
		return json({ error: `파일을 찾을 수 없습니다: ${filename}` }, { status: 404 });
	}

	const data = parseScenarioFile(raw);
	const theme = data.theme as string | undefined;
	const actors = (data.actors as Record<string, unknown>) ?? {};
	const rooms = (data.rooms as Room[]) ?? [];

	const bossPool = theme ? BOSS_BY_THEME[theme] : undefined;
	const npcPool = theme ? NPC_BY_THEME[theme] : undefined;

	const actorsLower = new Set(Object.keys(actors).map((k) => k.toLowerCase()));
	const bossLowerMap: Record<string, string> = {};
	if (bossPool) {
		for (const key of Object.keys(bossPool)) {
			bossLowerMap[key.toLowerCase()] = key;
		}
	}
	const npcLowerMap: Record<string, NpcPoolItem> = {};
	if (npcPool) {
		for (const npc of npcPool) {
			if (npc.key) npcLowerMap[npc.key.toLowerCase()] = npc;
		}
	}

	const allSpeakers = collectSpeakers(rooms);
	const missing: string[] = [];
	const added: string[] = [];

	for (const speaker of allSpeakers) {
		if (isSystemSpeaker(speaker)) continue;
		const speakerLower = speaker.toLowerCase();
		if (actorsLower.has(speakerLower)) continue;

		const bossKey = bossLowerMap[speakerLower];
		const boss = bossKey ? (bossPool?.[bossKey] as Record<string, unknown>) : undefined;
		if (boss) {
			actors[speaker] = buildBossActorEntry(boss);
			actorsLower.add(speakerLower);
			added.push(speaker);
			continue;
		}

		const npc = npcLowerMap[speakerLower];
		if (npc) {
			actors[speaker] = buildNpcActorEntry(npc);
			actorsLower.add(speakerLower);
			added.push(speaker);
			continue;
		}

		missing.push(speaker);
	}

	if (missing.length > 0) {
		return json(
			{
				error: `actors에 없고 ${theme ?? '?'} 테마 boss/npc에서도 찾을 수 없는 speaker: ${missing.join(', ')}`,
				missing
			},
			{ status: 400 }
		);
	}

	if (added.length === 0) {
		return json({ ok: true, added: [], message: '추가할 actor가 없습니다.' });
	}

	data.actors = actors;

	const varMatch = raw.match(/^export const (\w+) = /);
	const varName = varMatch?.[1] ?? filename.replace('.ts', '');
	const content = `export const ${varName} = ${JSON.stringify(data, null, '\t')} as const;\n`;
	await writeFile(filepath, content, 'utf-8');

	return json({ ok: true, added });
};
