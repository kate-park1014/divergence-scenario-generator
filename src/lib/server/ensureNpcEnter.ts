// NPC 등장(enter) 자동 보정. LLM 이 enter 를 빼먹으면 렌더링이 깨지므로 코드로 채운다.
// 규칙 (chapterRules.ts NPC_ENTER_EXIT_RULES):
// - NPC 는 방 단위로 존재한다. 방에서 처음 말하기 전에 enter 가 있어야 한다
// - exit 한 뒤 다시 말하면 다시 enter
// - 15번 방 win/lose_dialogue 는 그 방 dialogue 끝 상태에서 이어진다 (새로 나오는 NPC 만 enter)

type DialogueItem = Record<string, unknown> & { type?: string; speaker?: string; action?: string; spot?: number[] };
type Room = Record<string, unknown> & { dialogue?: DialogueItem[]; win_dialogue?: DialogueItem[]; lose_dialogue?: DialogueItem[] };

// openrpg 챕터에서 가장 많이 쓰는 enter 위치 순서
const ENTER_SPOTS: [number, number][] = [
	[3, 2],
	[4, 3],
	[2, 3],
	[4, 2],
	[5, 2],
	[2, 2]
];

/** action 빠진 direction 을 고치고, 빠진 enter 를 그 NPC 의 첫 대사 앞에 넣는다. 고친 개수를 돌려준다 (rooms 를 직접 고친다) */
export function ensureNpcEnter(rooms: Room[], isNpc: (speaker: string) => boolean): number {
	let inserted = 0;

	// present: 지금 방에 있는 NPC → 그 위치
	const runBlock = (block: DialogueItem[] | undefined, start: Map<string, string>) => {
		const present = new Map(start);
		if (!block) return { items: block, present };
		const items: DialogueItem[] = [];
		for (const item of block) {
			const speaker = item.speaker;
			// LLM 이 action 을 빼먹은 direction: spot 이 있으면 enter, 없으면 exit.
			// openrpg 에는 퇴장 방향 필드가 없으므로 direction 은 항상 지운다
			if (item.type === 'direction') {
				if (!item.action) {
					item.action = item.spot ? 'enter' : 'exit';
					inserted++;
				}
				delete item.direction;
			}
			if (item.action === 'enter' && speaker) {
				present.set(speaker, String(item.spot ?? ''));
			} else if (item.action === 'exit' && speaker) {
				present.delete(speaker);
			} else if (item.type === 'speech' && speaker && isNpc(speaker) && !present.has(speaker)) {
				const used = new Set(present.values());
				const spot = ENTER_SPOTS.find((s) => !used.has(String(s))) ?? ENTER_SPOTS[0];
				items.push({ type: 'direction', speaker, action: 'enter', spot: [...spot], duration_ms: 500 });
				present.set(speaker, String(spot));
				inserted++;
			}
			items.push(item);
		}
		return { items, present };
	};

	for (const room of rooms) {
		const main = runBlock(room.dialogue, new Map());
		if (room.dialogue) room.dialogue = main.items;
		for (const key of ['win_dialogue', 'lose_dialogue'] as const) {
			if (room[key]) room[key] = runBlock(room[key], main.present).items;
		}
	}
	return inserted;
}
