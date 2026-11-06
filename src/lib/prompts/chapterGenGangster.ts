import { PLACEHOLDER_RULES, NPC_ENTER_EXIT_RULES, OUTPUT_RULES } from './chapterRules';
import { buildScenarioTool as baseScenarioTool } from './scenarioTool';
import { getNpcPersona } from '$lib/data/sample/npc';
import { bossCallText, getStyle, scenarioMood, type StoryStyle } from './storyStyle';

/**
 * 갱스터 5화 이야기 gangster_test/<key>/story.json 한 화 → 게임 시나리오 대사 (방 6개: 1, 3, 5, 7, 9, 10).
 * story.json 은 사람이 쓴 것이고, 방 번호가 시나리오 방 번호와 같다 (옮겨 적지 않음).
 * 한 화는 "상대를 만나러 가는 여정": 방 1 떠나는 이유 → 방 3·5·7 가는 길 → 방 9 휴식 전 대화 → 야영지 이벤트(게임) → 휴식 뒤 상대를 만나 이유를 들음 → 방 10 싸움.
 * 방 9 는 게임의 야영지(campsite) 휴식 방. 시나리오 방 9 = { event: 'campsite', before_event_dialogue: 휴식 전, dialogue: 휴식 뒤 }.
 *   지금 webfront 엔진은 dialogue 를 이벤트 뒤에 틀고, before_event_dialogue 는 아직 읽지 않는다.
 * 출력 예시는 넣지 않는다 (예시를 베낀다). 형식은 출력 스키마가 강제한다.
 */

export const GANGSTER_ROOM_IDS = [1, 3, 5, 7, 9, 10];
export const GANGSTER_BOSS_ROOM = 10;
export const GANGSTER_MEET_ROOM = 9;
/** 한 방(블록)에 들어가는 대사(speech) 최대 줄 수. 방 9 휴식 전·휴식 뒤는 따로 센다 */
export const GANGSTER_MAX_LINES = 15;
/** 방 9 야영지 이벤트 앞에 나오는 대화 블록 */
export const REST_BLOCK = 'before_event_dialogue';

type Room9 = { rest: string; after_rest: string };
type Room10 = { before_battle: string; win: string; lose: string };

export type GangsterStory = {
	id: string;
	title: string;
	hook?: string;
	theme: string;
	style?: string;
	tone?: string;
	world: string;
	/** 함께 다니는 NPC (풀 key, 직업). 첫째가 주 NPC */
	npcs: { key: string; role: string }[];
	design: {
		goal: string;
		frame?: string;
		/** 이야기마다 1~4화 설계 칸 이름이 다르다 (plan / rumors). who 와 반전(twist)만 읽는다 */
		plan?: { order: number; who: string; beat?: string; twist?: string }[];
		rumors?: { order: number; who: string; rumor?: string; caution?: string; twist?: string }[];
		final: { name: string; look: string; actual: string; want: string };
	};
	prologue: string;
	episodes: {
		order: number;
		place: string;
		boss: string;
		line: string;
		/** 방 1 에서 밝힐, 히어로들이 이번 화에 떠나는 이유 */
		why_go: string;
		/** 방 9 에서 상대가 직접 말하는 이유 (1~4화는 겉으로 내세우는 이유, 진짜 사정은 방 10 win) */
		foe_reason: string;
		rooms: Record<string, string | Room9 | Room10>;
		epilogue?: string;
	}[];
};

type Episode = GangsterStory['episodes'][number];

const planOf = (story: GangsterStory) => story.design.plan ?? story.design.rumors ?? [];

/** 1~4화 상대 호칭의 마지막 낱말 ("백상어파 경리부장" → "경리부장"). 지문에서 상대를 부르는 짧은 이름 */
export const shortTitle = (title: string) => title.trim().split(/\s+/).pop() ?? title;

export function gangsterOutline(ep: Episode): string {
	return GANGSTER_ROOM_IDS.map((id) => {
		const r = ep.rooms[String(id)];
		if (!r) return `- 방 ${id}: (없음)`;
		if (typeof r === 'string') return `- 방 ${id}: ${r}`;
		if ('rest' in r)
			return `- 방 ${id}:\n  - 휴식 전 (${REST_BLOCK}): ${r.rest}\n  - (야영지 이벤트: 게임이 휴식 화면을 띄운다)\n  - 휴식 뒤 (dialogue): ${r.after_rest}`;
		return `- 방 ${id}:\n  - 전투 전 (dialogue): ${r.before_battle}\n  - 이긴 뒤 (win_dialogue): ${r.win}\n  - 진 뒤 (lose_dialogue): ${r.lose}`;
	}).join('\n');
}

/** 방 번호가 1,3,5,7,9,10 인 출력 스키마 (scenarioTool 의 방 설명만 바꿈) */
export function buildGangsterScenarioTool(order: number) {
	const tool = JSON.parse(JSON.stringify(baseScenarioTool(order)));
	const rooms = tool.function.parameters.properties.rooms;
	rooms.description = `id: ${GANGSTER_ROOM_IDS.join(', ')} 순서로 ${GANGSTER_ROOM_IDS.length}개. 방마다 대사(speech) ${GANGSTER_MAX_LINES}줄 이하`;
	rooms.items.properties[REST_BLOCK] = {
		type: 'array',
		description: `방 ${GANGSTER_MEET_ROOM} 전용 — 야영지 휴식 이벤트 앞 대화 (잠깐 쉬자는 대화)`,
		items: { $ref: '#/$defs/dialogueEntry' }
	};
	rooms.items.properties.dialogue.description = `전투 전 대화. 방 ${GANGSTER_MEET_ROOM} 은 야영지 휴식 이벤트 뒤 대화`;
	rooms.items.properties.win_dialogue.description = `방 ${GANGSTER_BOSS_ROOM} 전용 — 승리 시 대화`;
	rooms.items.properties.lose_dialogue.description = `방 ${GANGSTER_BOSS_ROOM} 전용 — 패배 시 대화`;
	return tool;
}

/** 공용 NPC 등장 규칙의 방 번호(1,3,5,9,15)를 이 이야기의 방 번호로 바꾼다 */
const ENTER_RULES = NPC_ENTER_EXIT_RULES.replaceAll('1 → 3 → 5 → 9 → 15', GANGSTER_ROOM_IDS.join(' → '))
	.replaceAll('id: 1, 3, 5, 9, 15', `id: ${GANGSTER_ROOM_IDS.join(', ')}`)
	.replaceAll('보스 룸 15', `보스 룸 ${GANGSTER_BOSS_ROOM}`)
	.replaceAll('(id: 15)', `(id: ${GANGSTER_BOSS_ROOM})`);

export function buildScenarioGangsterPrompt(
	story: GangsterStory,
	order: number,
	npcName: string,
	style: StoryStyle = getStyle('gangster'),
	tone?: string
): string {
	const ep = story.episodes.find((e) => e.order === order)!;
	const isFinale = order === 5;
	const final = story.design.final;
	const npc = story.npcs[0];
	const persona = getNpcPersona(npc.key);
	const plan = planOf(story);
	const prev = story.episodes.filter((e) => e.order < order);
	const foe = isFinale ? 'boss' : 'random_boss';

	// 다른 화 줄거리 (흐름 맞추기용). 1~4화에는 5화를 숨긴다
	const others = story.episodes
		.filter((e) => e.order !== order && (isFinale || e.order <= 4))
		.map((e) => `### ${e.order}화 (${e.place}, 상대: ${e.boss})\n- 떠난 이유: ${e.why_go}\n${gangsterOutline(e)}`)
		.join('\n\n');

	const SYSTEM = `당신은 ${style.scenarioWriter}입니다. 이미 완성된 5화짜리 이야기의 ${order}화를 게임 시나리오 대사(방 6개: ${GANGSTER_ROOM_IDS.join(', ')})로 옮깁니다.

# 한 화의 흐름
한 화는 이번 화 상대(보스)를 만나러 가는 여정이다. 방 10 이 보스전이다 (1~4화는 그 화의 일반 보스, 5화는 이야기의 최종 보스). 방 1 부터 히어로들은 그 상대에게 가고 있다. 대사·지문에는 "보스" 낱말 대신 호칭을 쓴다
- 방 1: 히어로들이 이번 화에 왜 떠나는지 분명하게 보여준다 (USER 의 "이번 화에 떠나는 이유")${order === 1 ? '. 1화이므로 히어로들이 이 일을 맡은 이유(USER 의 "히어로들이 이곳에 온 이유")도 함께 밝힌다' : ''}
- 방 3·5·7: 상대에게 가는 길. 상대는 아직 만나지 않는다. 소문·흔적·남이 전하는 말·멀리서 보이는 그림자로만 나온다
- 방 ${GANGSTER_MEET_ROOM}: 게임의 야영지(휴식) 방이다. 세 단계로 흘러간다
  1. ${REST_BLOCK} (휴식 전): 방 7 흐름을 이어받아 여기서 잠깐 쉬자고 이야기한다 (USER 줄거리의 "휴식 전"). 3~6줄. 곧 상대를 만난다는 것, 다음 싸움에 대비해 숨을 고른다는 것이 대사로 보이고, 마지막 줄은 "여기서 잠깐 쉬자"처럼 쉬기로 하는 말이다 (바로 뛰어들자는 말로 끝내지 않는다). 상대는 아직 나오지 않는다
  2. 야영지 이벤트: 게임이 휴식 화면을 띄운다. 이 부분은 쓰지 않는다
  3. dialogue (휴식 뒤): 쉬고 나서 상대를 처음 만난다. 상대가 자기가 왜 이러는지 직접 말한다 (USER 의 "방 ${GANGSTER_MEET_ROOM} 에서 상대가 말하는 이유"). 첫 줄은 쉬고 일어났다는 것을 narrator 가 짧게 알린다
  - 휴식 전·휴식 뒤 대사에 "스탯·체력·회복·이벤트" 같은 게임 용어를 쓰지 않는다 (숨을 고른다, 몸을 푼다처럼)
- 방 ${GANGSTER_BOSS_ROOM}: 싸움. dialogue(전투 전) + win_dialogue + lose_dialogue

# 쓰는 법
- USER 의 "이번 화 줄거리"가 원본이다. 방마다 적힌 사건을 같은 방에, 같은 차례로 대사로 풀어 쓴다. 사건을 빼거나 큰 사건을 새로 만들지 않는다
- 줄거리 문장을 그대로 옮기지 않는다. 인물이 그 상황에서 실제로 할 법한 말과 짧은 narrator 지문으로 바꾼다
- 줄거리에 큰따옴표로 적힌 말(쪽지·화면 글자, 인물의 핵심 대사)은 뜻을 바꾸지 않는다
- 줄거리가 "알려 준다·털어놓는다·묻는다"처럼 내용 없이 적힌 곳은 그 내용을 채운다. 무엇을 물었고 무슨 답을 들었는지 읽는 사람이 알 수 있게 쓴다
- 방마다 6~12줄. 어떤 방(블록)도 대사(speech)가 ${GANGSTER_MAX_LINES}줄을 넘으면 안 된다 (direction 은 세지 않음. 방 ${GANGSTER_MEET_ROOM} 은 휴식 전·휴식 뒤를 따로 센다). 한 대사는 말풍선 하나, 1~2문장
- 대사만 훑어봐도 무슨 일이 있었는지 알 수 있게 쓴다. 이유는 대사로 직접 말한다
- 인물의 감정·행동(겁이 났다, 숨겼다, 화가 났다, 막아선다)을 쓸 때는 왜 그런지(무엇이 걱정돼서, 무엇을 지키려고)를 같은 줄이나 바로 다음 줄에서 말한다
- 같은 물건·인물은 줄거리와 같은 이름으로 부른다. 줄거리에 없는 소품·설정을 덧붙이지 않는다
- 방 사이에는 다른 이벤트가 끼어든다. 각 방은 앞 방의 마지막 대사를 기억한다고 가정하지 않는다
- 방 안에서 꺼낸 질문은 그 방 안에서 답한다
- direction 의 focus 는 쓰지 않는다 (enter·exit 등 필요한 연출만)
- prologue·epilogue 는 3인칭. "나는·내가·우리는" 같은 1인칭을 쓰지 않는다
- 분위기: ${scenarioMood(style, tone)}
- 대사·지문을 따옴표로 감싸지 않는다

# 설명은 누가 하나
- NPC: 자기가 아는 것(동네 사정, 그 사람이 누구인지)을 대사로 직접 말한다
- narrator: 눈에 보이는 것을 지문으로 설명한다. 쪽지·화면에 적힌 글, 인물의 행동, 무엇이 어떻게 됐는지
- 파티(character_any)는 NPC 에게 물을 수 있다. 그 답은 같은 방 안에서 NPC 나 narrator 가 한다
- 새 소식·상황은 narrator 지문이나 NPC 대사로 알린다. 파티는 그에 반응하고 결정만 한다
- 파티 줄(character_any·character_1~4)은 세 줄 이상 연달아 쓰지 않는다. 두 줄 뒤에는 narrator·NPC·상대 줄을 넣는다

# 화자
- narrator: 장면·행동 묘사. 3인칭으로만. 목록에 없는 인물(이모·상인·간부·앞 화 상대 등)의 말은 지문 안 따옴표로 담는다
- character_any: 파티(히어로들)가 하는 중요한 말 (단서·결론·결심). 줄마다 살아있는 파티원 중 한 명이 무작위로 말한다
  - 누가 말해도 말이 되는 한 줄로 쓴다. character_any 끼리 묻고 답하지 않는다 (NPC·상대에게 묻는 건 된다)
  - 파티가 1명일 수도 있다. 다른 파티원에게 제안하지 않고("~하는 게 어때?"), 결정은 한 줄로 말한다
- 파티(character_any·character_1~4)는 사람이 입으로 하는 말투로 쓴다. 짧은 반말 구어체 ("~야", "~어", "~지", "~겠어", "~해!")
  - "~다"로 끝나는 글말은 narrator 만 쓴다. 파티 대사는 "~다"로 끝내지 않는다
- character_1~4: 짧은 감정 반응 한 마디. 질문·핵심 정보를 넣지 않는다. 방마다 0~2줄. 분위기 감상만 하는 줄은 쓰지 않는다
- NPC: ${npc.key} 한 명뿐이다. speaker 는 "${npc.key}". 다른 NPC 는 쓰지 않는다
${
	isFinale
		? `- boss: 이 화의 상대 "${final.name}". speaker 'boss' 는 방 ${GANGSTER_MEET_ROOM} 휴식 뒤(dialogue)·방 ${GANGSTER_BOSS_ROOM} 에서만 쓴다. 방 ${GANGSTER_MEET_ROOM} 에서는 첫 대사 앞에 enter 를 쓴다 (방 ${GANGSTER_BOSS_ROOM} 은 자동 등장, enter 불필요). 방 1~7 에서는 말하지 않는다
- 5화에는 random_boss 를 쓰지 않는다`
		: `- random_boss: 이 화의 상대 "${ep.boss}". speaker 'random_boss' 는 방 ${GANGSTER_MEET_ROOM} 휴식 뒤(dialogue)·방 ${GANGSTER_BOSS_ROOM} 에서만 쓴다. 방 ${GANGSTER_MEET_ROOM} 에서는 첫 대사 앞에 enter 를 쓴다 (방 ${GANGSTER_BOSS_ROOM} 은 자동 등장, enter 불필요). 방 1~7 에서는 말하지 않는다
  - 게임에서 얼굴·이름은 런타임에 정해진다. 고유 이름을 붙이지 않는다. {random_boss} 자리표시도 쓰지 않는다
  - narrator 지문은 상대를 "${ep.boss}" 또는 줄여서 "${shortTitle(ep.boss)}"로 부른다. "사내·남자·여자·그자" 같은 말로 부르지 않는다. 대사에서는 ${bossCallText(style)}처럼 불러도 된다
  - 키·체형·얼굴을 묘사하지 않는다. 들고 있는 물건·행동·말투로만 그린다
- boss 는 1~4화에 쓰지 않는다. 5화 인물 이름 "${final.name}" 도 1~4화에는 쓰지 않는다`
}

# 지켜야 할 줄거리 규칙
- 방 1 에서 떠나는 이유는 파티나 NPC 가 대사로 직접 말한다. 무엇을 하러, 왜 가는지 둘 다 보여야 한다
- 방 3·5·7 과 방 ${GANGSTER_MEET_ROOM} 휴식 전에서는 상대(${foe})가 speaker 로 나오지 않는다. 상대 이야기는 NPC·narrator 가 전한다
- 방 ${GANGSTER_MEET_ROOM} 휴식 뒤(dialogue): 상대(speaker '${foe}')가 나와 자기 이유를 자기 입으로 말한다. narrator 가 대신 요약하지 않는다. 파티는 그 이유를 듣고 반응한다
${
	isFinale
		? `- 5화 상대는 방 ${GANGSTER_MEET_ROOM} 에서 실제 사정과 바라는 것을 모두 말한다 (USER 의 "이번 화 상대"). 히어로들은 1~4화에서 배운 대로, 싸우기 전에 먼저 이유를 묻는다. 그 질문은 파티(character_any)가 스스로 한다
- 1~4화에 있었던 일을 파티나 NPC 가 한두 줄로 떠올린다. 같은 말을 되풀이하지 않는다
- 방 ${GANGSTER_BOSS_ROOM} dialogue: speaker 'boss' 가 말하며 막아선다. 싸움은 서로 다치게 하려는 싸움이 아니라는 것이 대사로 보인다
- 방 ${GANGSTER_BOSS_ROOM} win_dialogue: 줄거리대로 끝난다. ${final.name}가 한 줄 이상 말한다
- 방 ${GANGSTER_BOSS_ROOM} lose_dialogue: ${npcName}가 히어로들을 일으켜 세운다. 짧게`
		: `- 1~4화 상대가 방 ${GANGSTER_MEET_ROOM} 에서 말하는 이유는 겉으로 내세우는 이유다. 이번 화 반전(USER 의 "방 ${GANGSTER_BOSS_ROOM} 이긴 뒤에 드러나는 것")은 win_dialogue 전에 밝히지 않는다
- 방 ${GANGSTER_BOSS_ROOM} dialogue: 상대(random_boss)가 막아서고, 파티가 싸움을 건다. 싸움은 가볍게 (다치게 하려는 말 금지)
- 방 ${GANGSTER_BOSS_ROOM} win_dialogue: 줄거리대로 반전이 눈에 보이게 드러난다 (narrator 지문). 상대도 한 줄 이상 말한다
- 방 ${GANGSTER_BOSS_ROOM} lose_dialogue: ${npcName}가 히어로들을 일으켜 세운다. 짧게${
				prev.length
					? `
- 히어로들은 앞 화를 기억한다. 방 1~5 에서 파티나 NPC 가 앞 화 일(USER 의 "앞 화")을 한 줄 떠올리고, 이번엔 줄거리대로 다르게 움직인다. 앞 화와 똑같은 말을 되풀이하지 않는다`
					: ''
			}`
}
- 대사·지문에 게임 용어 "보스" 를 쓰지 않는다. 금액 숫자·한자를 쓰지 않는다

# 게임 데이터 형식 (반드시 지킬 것)
${PLACEHOLDER_RULES}

${ENTER_RULES}

## 방 ${GANGSTER_MEET_ROOM}
- ${REST_BLOCK}(휴식 전) + dialogue(휴식 뒤) 를 모두 쓴다. 두 블록은 따로 재생되므로 NPC 는 두 블록 모두에서 말하기 전에 enter 를 쓴다

## 방 ${GANGSTER_BOSS_ROOM}
- dialogue(전투 전) + win_dialogue + lose_dialogue 를 모두 쓴다
- 다른 방(${GANGSTER_ROOM_IDS.filter((x) => x !== GANGSTER_BOSS_ROOM && x !== GANGSTER_MEET_ROOM).join(',')})은 dialogue 만 쓴다

${OUTPUT_RULES}`;

	const twist = plan.find((x) => x.order === order)?.twist;
	const USER = `# 이야기: ${story.title}

## 세계
- 무대: ${story.world}
- 히어로들이 이곳에 온 이유: ${story.design.goal}${order === 1 ? ' (방 1 에서 밝힌다)' : ''}
- 함께 다니는 NPC: ${npc.key} = ${npcName} (${npc.role}). 1~5화 내내 히어로들과 함께 다닌다. 말하는 방(블록)마다 enter 를 먼저 쓴다${persona ? `\n- ${npcName} 성격: ${persona}` : ''}

## 이번 화 (${order}화)
- 이번 화에 떠나는 이유 (방 1): ${ep.why_go}
- 방 ${GANGSTER_MEET_ROOM} 에서 상대가 말하는 이유: ${ep.foe_reason}
${
	isFinale
		? `
## 이번 화 상대
- ${final.name}
- 모습: ${final.look}
- 실제 사정: ${final.actual}
- 바라는 것: ${final.want}`
		: `- 상대: ${ep.boss}${twist ? `\n- 방 ${GANGSTER_BOSS_ROOM} 이긴 뒤에 드러나는 것: ${twist}` : ''}${
				prev.length ? `\n- 앞 화: ${prev.map((e) => `${e.order}화 ${e.boss} — ${e.line}`).join(' / ')}` : ''
			}`
}

## 이야기 prologue (원본, 참고용)
${story.prologue}

## 이번 화 줄거리 (${order}화, 장소: ${ep.place})
${gangsterOutline(ep)}${isFinale && ep.epilogue ? `\n- epilogue: ${ep.epilogue}` : ''}

## 다른 화 줄거리 (흐름 맞추기용. 이 사건들을 이번 화에 다시 일으키지 않는다)
${others}`;

	return `${SYSTEM}\n\n---\n\n${USER}`;
}
