// NPC 등장(enter) 자동 보정. LLM 이 enter 를 빼먹으면 렌더링이 깨지므로 코드로 채운다.
// 규칙 (chapterRules.ts NPC_ENTER_EXIT_RULES):
// - NPC 는 방 단위로 존재한다. 방에서 처음 말하기 전에 enter 가 있어야 한다
// - exit 한 뒤 다시 말하면 다시 enter
// - 15번 방 win/lose_dialogue 는 그 방 dialogue 끝 상태에서 이어진다 (새로 나오는 NPC 만 enter)
// - direction(up/down): exit 는 나가는 쪽(없으면 up), 앞서 exit 한 인물의 enter 는 그 exit 와 같은 쪽
// - 마지막 방(보스 룸)의 boss/random_boss 는 이미 방에 있으므로 enter 를 지운다. 중간 방에서는 NPC 처럼 enter 를 채운다
// - 이미 방에 있는 인물의 enter 는 지운다. spot·duration_ms 가 빠진 enter 는 채운다
// - 괄호로만 된 speech("(물병을 깨뜨린다)")는 지문이므로 narrator 로 바꾼다

type DialogueItem = Record<string, unknown> & {
	type?: string;
	speaker?: string;
	action?: string;
	spot?: number[];
	direction?: unknown;
};
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

const isBossSpeaker = (speaker: string | undefined) => speaker === 'boss' || speaker === 'random_boss';

/** action·direction 을 고치고, 빠진 enter 를 그 NPC 의 첫 대사 앞에 넣는다. 고친 개수를 돌려준다 (rooms 를 직접 고친다) */
export function ensureNpcEnter(rooms: Room[], isNpc: (speaker: string) => boolean): number {
	let fixed = 0;
	// 시나리오 안에서 인물별 마지막 exit 방향 (방을 넘어 이어진다)
	const lastExit = new Map<string, 'up' | 'down'>();

	// present: 지금 방에 있는 NPC → 그 위치
	const runBlock = (block: DialogueItem[] | undefined, start: Map<string, string>, isBossRoom: boolean) => {
		const present = new Map(start);
		if (!block) return { items: block, present };
		const items: DialogueItem[] = [];
		for (const item of block) {
			if (item.type === 'speech') {
				const content = item.content as { korean?: string } | undefined;
				const m = content?.korean?.match(/^\s*[(（](.+)[)）]\s*$/);
				if (content && m) {
					content.korean = m[1].trim();
					item.speaker = 'narrator';
					fixed++;
				}
			}
			const speaker = item.speaker;
			if (item.type === 'direction') {
				// LLM 이 action 을 빼먹은 direction: spot 이 있으면 enter, 없으면 exit
				if (!item.action) {
					item.action = item.spot ? 'enter' : 'exit';
					fixed++;
				}
				const isMove = item.action === 'enter' || item.action === 'exit';
				// 게임은 enter/exit 만 재생한다 (move·shake 등은 무시되므로 지운다)
				if (!isMove) {
					fixed++;
					continue;
				}
				if (item.direction !== undefined && (!isMove || (item.direction !== 'up' && item.direction !== 'down'))) {
					delete item.direction;
					fixed++;
				}
			}
			if (item.action === 'enter' && speaker) {
				if ((isBossRoom && isBossSpeaker(speaker)) || present.has(speaker)) {
					fixed++;
					continue;
				}
				if (!Array.isArray(item.spot) || item.spot.length !== 2) {
					const used = new Set(present.values());
					item.spot = [...(ENTER_SPOTS.find((s) => !used.has(String(s))) ?? ENTER_SPOTS[0])];
					fixed++;
				}
				if (typeof item.duration_ms !== 'number') {
					item.duration_ms = 500;
					fixed++;
				}
				const prev = lastExit.get(speaker);
				if (prev && item.direction !== prev) {
					item.direction = prev;
					fixed++;
				}
				lastExit.delete(speaker);
				present.set(speaker, String(item.spot ?? ''));
			} else if (item.action === 'exit' && speaker) {
				if (item.direction !== 'up' && item.direction !== 'down') {
					item.direction = 'up';
					fixed++;
				}
				lastExit.set(speaker, item.direction as 'up' | 'down');
				present.delete(speaker);
			} else if (
				item.type === 'speech' &&
				speaker &&
				(isNpc(speaker) || (!isBossRoom && isBossSpeaker(speaker))) &&
				!present.has(speaker)
			) {
				const used = new Set(present.values());
				const spot = ENTER_SPOTS.find((s) => !used.has(String(s))) ?? ENTER_SPOTS[0];
				const enter: DialogueItem = { type: 'direction', speaker, action: 'enter', spot: [...spot], duration_ms: 500 };
				const prev = lastExit.get(speaker);
				if (prev) enter.direction = prev;
				lastExit.delete(speaker);
				items.push(enter);
				present.set(speaker, String(spot));
				fixed++;
			}
			items.push(item);
		}
		return { items, present };
	};

	rooms.forEach((room, i) => {
		const isBossRoom = i === rooms.length - 1;
		const main = runBlock(room.dialogue, new Map(), isBossRoom);
		if (room.dialogue) room.dialogue = main.items;
		// win/lose 는 둘 중 하나만 재생되므로 같은 시작 상태(dialogue 끝)에서 따로 돈다
		const afterMain = new Map(lastExit);
		for (const key of ['win_dialogue', 'lose_dialogue'] as const) {
			lastExit.clear();
			afterMain.forEach((v, k) => lastExit.set(k, v));
			if (room[key]) room[key] = runBlock(room[key], main.present, isBossRoom).items;
		}
	});
	return fixed;
}
