import { PLACEHOLDER_RULES, NPC_ENTER_EXIT_RULES, OUTPUT_RULES } from './chapterRules';
import { episodeOutline, type NetshortEpisode } from './chapterGenNetshort';
import { bossCallText, getStyle, scenarioMood, type StoryStyle } from './storyStyle';

export { buildScenarioTool } from './scenarioTool';

/**
 * 로맨스 5화 이야기 romance_test/<key>/story.json 한 화 → 게임 시나리오 대사 (방 1,3,5,9,15).
 * 틀: 두 NPC 의 가짜 연애를 히어로 넷이 지켜 준다. 1~4화마다 들킬 위기 → 방 15 에서 막는 싸움 → win 에서 두 사람 마음이 한 걸음 진짜가 됨.
 * 5화: 최종 인물에게 먼저 묻고 싸움, 화해·고백으로 끝남.
 * 방 구조·줄거리 정리(episodeOutline)는 넷쇼트·cozy 와 같다 (8→9, 10→15). 출력 예시는 넣지 않는다 (예시를 베낀다).
 */

export type RomanceStory = {
	id: string;
	title: string;
	theme: string;
	style?: string;
	tone?: string;
	world: string;
	/** 함께 다니는 NPC 둘 (풀 key, 직업) */
	npcs: { key: string; role: string }[];
	design: {
		goal: string;
		contract: string[];
		/** 1~4화: 누가 어떤 위기를 만드는지 → 이긴 뒤 두 사람 마음이 어떻게 한 걸음 가까워지는지 */
		crises: { order: number; who: string; crisis: string; heart: string }[];
		final: { name: string; look: string; actual: string; want: string };
	};
	prologue: string;
	episodes: {
		order: number;
		place: string;
		boss: string;
		rooms: Record<string, string | { before_battle: string; win: string; lose: string }>;
		epilogue?: string;
	}[];
};

export function buildScenarioRomancePrompt(
	story: RomanceStory,
	order: number,
	npcNames: Record<string, string>,
	style: StoryStyle = getStyle('romance'),
	tone?: string
): string {
	const ep = story.episodes.find((e) => e.order === order)!;
	const isFinale = order === 5;
	const final = story.design.final;
	const c = story.design.crises.find((x) => x.order === order);
	const prev = story.design.crises.filter((x) => x.order < order);
	const [a, b] = story.npcs.map((n) => ({ ...n, name: npcNames[n.key] ?? n.key }));
	const outline = (e: RomanceStory['episodes'][number]) => episodeOutline(e as unknown as NetshortEpisode);

	// 다른 화 줄거리 (흐름 맞추기용). 1~4화에는 5화를 숨긴다
	const others = story.episodes
		.filter((e) => e.order !== order && (isFinale || e.order <= 4))
		.map((e) => `### ${e.order}화 (${e.place}, 상대: ${e.boss})\n${outline(e)}`)
		.join('\n\n');

	const SYSTEM = `당신은 ${style.scenarioWriter}입니다. 이미 완성된 5화짜리 이야기의 ${order}화를 게임 시나리오 대사(방 5개: 1, 3, 5, 9, 15)로 옮깁니다.

# 쓰는 법
- USER 의 "이번 화 줄거리"가 원본이다. 방마다 적힌 사건을 같은 방에, 같은 차례로 대사로 풀어 쓴다. 사건을 빼거나 큰 사건을 새로 만들지 않는다
- 줄거리 문장을 그대로 옮기지 않는다. 인물이 그 상황에서 실제로 할 법한 말과 짧은 narrator 지문으로 바꾼다
- 줄거리에 큰따옴표로 적힌 말(카드·기록지 문구, 인물의 핵심 대사)은 뜻을 바꾸지 않는다
- 방마다 6~12줄. 한 대사는 말풍선 하나, 1~2문장
- 대사만 훑어봐도 무슨 일이 있었는지 알 수 있게 쓴다
- 같은 물건·인물은 줄거리와 같은 이름으로 부른다. 줄거리에 없는 소품·설정을 덧붙이지 않는다
- 방 사이에는 다른 이벤트가 끼어든다. 각 방은 앞 방의 마지막 대사를 기억한다고 가정하지 않는다
- 방 안에서 꺼낸 질문은 그 방 안에서 답한다
- direction 의 focus 는 쓰지 않는다 (enter·exit 등 필요한 연출만)
- prologue·epilogue 는 3인칭. "나는·내가·우리는" 같은 1인칭을 쓰지 않는다
- 분위기: ${scenarioMood(style, tone)}
- 대사·지문을 따옴표로 감싸지 않는다

# 설명은 누가 하나
- NPC 둘: 자기 사정과 계약 이야기를 대사로 직접 말한다
- narrator: 눈에 보이는 것을 지문으로 설명한다. 카드·기록지에 적힌 글, 손짓·눈길, 무엇이 어떻게 됐는지
- 새 소식·상황은 narrator 지문이나 NPC 대사로 알린다. 파티는 그에 반응하고 결정만 한다
- 파티 줄(character_any·character_1~4)은 세 줄 이상 연달아 쓰지 않는다. 두 줄 뒤에는 narrator·NPC·상대 줄을 넣는다

# 화자
- narrator: 장면·행동 묘사. 3인칭으로만. 목록에 없는 인물(하객·하인 등)의 말은 지문 안 따옴표로 담는다
- character_any: 파티(히어로들)가 하는 중요한 말 (작전·결론·결심). 줄마다 살아있는 파티원 중 한 명이 무작위로 말한다
  - 누가 말해도 말이 되는 한 줄로 쓴다. character_any 끼리 묻고 답하지 않는다 (NPC 에게 묻는 건 된다)
  - 파티가 1명일 수도 있다. 다른 파티원에게 제안하지 않고("~하는 게 어때?"), 결정은 한 줄로 말한다
- 파티(character_any·character_1~4)는 사람이 입으로 하는 말투로 쓴다. 짧은 반말 구어체 ("~야", "~어", "~지", "~겠어", "~해!")
  - "~다"로 끝나는 글말은 narrator 만 쓴다. 파티 대사는 "~다"로 끝내지 않는다
- character_1~4: 짧은 감정 반응 한 마디. 질문·핵심 정보를 넣지 않는다. 방마다 0~2줄. 두 NPC 사이 기류를 눈치채는 반응은 좋다
- NPC 는 ${a.key}(${a.name}, ${a.role})와 ${b.key}(${b.name}, ${b.role}) 둘뿐이다. speaker 는 "${a.key}", "${b.key}". 다른 NPC 는 쓰지 않는다
${
	isFinale
		? `- boss: 이 화의 상대 "${final.name}". speaker 'boss' 는 방 15 에서만 쓴다 (방 15 에서는 자동 등장, enter 불필요). 방 1~9 에서는 narrator 지문으로 그리고, 그의 말은 지문 안 따옴표로 담는다
- 5화에는 random_boss 를 쓰지 않는다`
		: `- random_boss: 이 화의 상대 "${ep.boss}". speaker 'random_boss' 는 방 15 에서만 쓴다 (방 15 에서는 자동 등장, enter 불필요). 방 1~9 에서는 narrator 지문으로 그리고, 그의 말은 지문 안 따옴표로 담는다
  - 게임에서 얼굴·이름은 런타임에 정해진다. 고유 이름을 붙이지 말고 "${ep.boss}", ${bossCallText(style)}처럼 호칭으로만 부른다. {random_boss} 자리표시도 쓰지 않는다
  - 키·체형·얼굴을 묘사하지 않는다. 들고 있는 물건·행동·말투로만 그린다
- boss 는 1~4화에 쓰지 않는다. 5화 인물 이름 "${final.name}" 도 1~4화에는 쓰지 않는다 (그냥 "약혼자"로 부른다)`
}

# 지켜야 할 줄거리 규칙
- 히어로 넷은 두 사람의 가짜 연애를 지켜 주는 작전팀이다. 방마다 파티가 맡은 일(말 맞추기·시선 돌리기·길 막기 등)이 대사나 지문으로 보인다
- 두 사람 마음은 "좋아한다"고 직접 말하지 않는다. 손짓·눈길·말끝·머뭇거림으로 보여준다${order >= 3 ? ' (줄거리에 적힌 카드 문구·"가짜 아니에요" 같은 말은 그대로 쓴다)' : ''}
${
	isFinale
		? `- 히어로들은 싸우기 전에 ${final.name}에게 먼저 묻는다 (줄거리 방 15 전투 전). 그 질문은 파티(character_any)가 스스로 한다
- 1~4화에 두 사람 마음이 어떻게 진짜가 됐는지 파티나 NPC 가 한두 줄로 떠올린다. 같은 말을 되풀이하지 않는다
- 방 15 dialogue: speaker 'boss' 가 먼저 말하며 막아선다. 싸움은 다치게 하려는 싸움이 아니라 두 사람 마음이 진짜인지 확인하는 겨루기라는 것이 대사로 보인다
- 방 15 win_dialogue: 줄거리대로 끝난다. ${final.name}의 실제 사정과 바란 것을 그가 직접 말한다. 계약서가 찢기고, 첫 데이트 약속이 나온다
- 방 15 lose_dialogue: 두 NPC 가 히어로들을 일으켜 세우며 같이 버티겠다고 한다`
		: `- 방 1~9 에서 이번 화 위기(USER 의 "위기")가 점점 커진다. 파티가 위기를 막으려고 무엇을 하는지 보여준다
- 방 15 dialogue: 상대(random_boss)가 막아서고, 파티가 두 사람을 지키려고 싸움을 건다. 싸움은 가볍게 (다치게 하려는 말 금지)
- 방 15 win_dialogue: 위기를 넘긴 뒤 USER 의 "마음이 한 걸음"을 장면으로 보여준다. 파티는 눈치채는 반응만 하고 대신 말해 주지 않는다. 상대(random_boss)도 물러나며 한 줄 말한다
- 방 15 lose_dialogue: NPC 하나가 히어로들을 일으켜 세운다. 짧게${
				prev.length
					? `
- 히어로들은 앞 화를 기억한다. 방 1~5 에서 파티나 NPC 가 앞 화 일(USER 의 "앞 화")을 한 줄 떠올린다. 앞 화와 똑같은 말을 되풀이하지 않는다`
					: ''
			}${
				order === 3
					? `
- 이 화에서 파티 의견이 갈린다. character_1~4 가 짧은 한 마디로 각자 ${a.name} 편·${b.name} 편을 드러낸다 (질문 금지). 결정은 character_any 한 줄로`
					: ''
			}`
}
- 대사·지문에 게임 용어 "보스" 를 쓰지 않는다. 금액 숫자·한자를 쓰지 않는다

# 게임 데이터 형식 (반드시 지킬 것)
${PLACEHOLDER_RULES}

${NPC_ENTER_EXIT_RULES}

## 방 15
- dialogue(전투 전) + win_dialogue + lose_dialogue 를 모두 쓴다
- 다른 방(1,3,5,9)은 dialogue 만 쓴다

${OUTPUT_RULES}`;

	const USER = `# 이야기: ${story.title}

## 세계
- 무대: ${story.world}
- 히어로들이 이곳에 온 이유: ${story.design.goal}${order === 1 ? ' (방 1 에서 밝힌다)' : ''}
- 가짜 연애 계약 조건: ${story.design.contract.map((x, i) => `${i + 1}) ${x}`).join(' / ')}
- 함께 다니는 NPC: ${a.key} = ${a.name} (${a.role}), ${b.key} = ${b.name} (${b.role}). 1~5화 내내 히어로들과 함께 다닌다. 말하는 방(블록)마다 enter 를 먼저 쓴다

${
	isFinale
		? `## 이번 화 상대
- ${final.name}
- 모습: ${final.look}
- 실제 사정: ${final.actual}
- 바란 것: ${final.want}

## 1~4화에 두 사람 마음이 진짜가 된 과정 (떠올릴 것)
${story.design.crises.map((x) => `- ${x.order}화 ${x.who}: ${x.heart}`).join('\n')}`
		: `## 이번 화
- 상대: ${ep.boss}
- 위기: ${c?.crisis ?? ''}
- 마음이 한 걸음 (방 15 win_dialogue): ${c?.heart ?? ''}${prev.length ? `\n- 앞 화: ${prev.map((x) => `${x.order}화 ${x.who} — ${x.heart}`).join(' / ')}` : ''}`
}

## 이야기 prologue (원본, 참고용)
${story.prologue}

## 이번 화 줄거리 (${order}화, 장소: ${ep.place})
${outline(ep)}${isFinale && ep.epilogue ? `\n- epilogue: ${ep.epilogue}` : ''}

## 다른 화 줄거리 (흐름 맞추기용. 이 사건들을 이번 화에 다시 일으키지 않는다)
${others}`;

	return `${SYSTEM}\n\n---\n\n${USER}`;
}
