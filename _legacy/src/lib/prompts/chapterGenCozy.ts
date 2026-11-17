import { PLACEHOLDER_RULES, NPC_ENTER_EXIT_RULES, OUTPUT_RULES } from './chapterRules';
import { getNpcPersona } from '$lib/data/sample/npc';
import { episodeOutline, type NetshortEpisode } from './chapterGenNetshort';
import type { CozyPremise, CozyStory } from './cozyStory';
import { bossCallText, getStyle, scenarioMood, type StoryStyle } from './storyStyle';

export { buildScenarioTool } from './scenarioTool';

/**
 * 편안한 5화 이야기 cozy_test/<key>/story.json 한 화 → 게임 시나리오 대사 (방 1,3,5,9,15).
 * 방 구조는 넷쇼트와 같아서 줄거리 정리(episodeOutline)는 넷쇼트 것을 쓴다 (8→9, 10→15).
 * 장치·피해자 대신 "겉모습을 보고 오해 → 싸움 → 증거로 사정이 풀림". 5화는 먼저 묻고 화해.
 * 출력 예시는 넣지 않는다 (예시를 베낀다). 형식은 출력 스키마(scenarioTool)가 강제한다.
 * 작가 소개·분위기·일반 보스 호칭은 스타일 파일(styles/<key>.md, 기본 cozy)에서.
 */

export function buildScenarioCozyPrompt(
	story: CozyStory,
	premise: CozyPremise | undefined,
	order: number,
	npcName: string,
	style: StoryStyle = getStyle('cozy'),
	tone?: string
): string {
	const ep = story.episodes.find((e) => e.order === order)!;
	const isFinale = order === 5;
	const final = story.design.final;
	const m = story.design.misunderstandings.find((x) => x.order === order);
	const prev = story.design.misunderstandings.find((x) => x.order === order - 1);
	const reverse = premise?.reverse_order === order;
	const persona = getNpcPersona(ep.npc.name);
	const outline = (e: CozyStory['episodes'][number]) => episodeOutline(e as unknown as NetshortEpisode);

	// 다른 화 줄거리 (흐름 맞추기용). 1~4화에는 5화를 숨긴다
	const others = story.episodes
		.filter((e) => e.order !== order && (isFinale || e.order <= 4))
		.map((e) => `### ${e.order}화 (${e.place}, 상대: ${e.boss})\n${outline(e)}`)
		.join('\n\n');

	const SYSTEM = `당신은 ${style.scenarioWriter}입니다. 이미 완성된 5화짜리 이야기의 ${order}화를 게임 시나리오 대사(방 5개: 1, 3, 5, 9, 15)로 옮깁니다.

# 쓰는 법
- USER 의 "이번 화 줄거리"가 원본이다. 방마다 적힌 사건을 같은 방에, 같은 차례로 대사로 풀어 쓴다. 사건을 빼거나 큰 사건을 새로 만들지 않는다
- 줄거리 문장을 그대로 옮기지 않는다. 인물이 그 상황에서 실제로 할 법한 말과 짧은 narrator 지문으로 바꾼다
- 줄거리가 "설명한다·묻는다·확인해 준다"처럼 내용 없이 적힌 곳은 그 내용을 채운다. 무엇을 물었고 무슨 답을 들었는지 읽는 사람이 알 수 있게 쓴다
- 방마다 6~12줄. 한 대사는 말풍선 하나, 1~2문장
- 대사만 훑어봐도 무슨 일이 있었는지 알 수 있게 쓴다. 이유는 대사로 직접 말한다
- 같은 물건·인물은 줄거리와 같은 이름으로 부른다
- 줄거리에 없는 소품·설정을 덧붙이지 않는다
- 방 사이에는 다른 이벤트가 끼어든다. 각 방은 앞 방의 마지막 대사를 기억한다고 가정하지 않는다
- 방 안에서 꺼낸 질문은 그 방 안에서 답한다
- direction 의 focus 는 쓰지 않는다 (enter·exit 등 필요한 연출만)
- prologue·epilogue 는 3인칭. "나는·내가·우리는" 같은 1인칭을 쓰지 않는다
- 분위기: ${scenarioMood(style, tone)}
- 대사·지문을 따옴표로 감싸지 않는다

# 설명은 누가 하나
- NPC: 자기가 아는 것(동네 사정, 그 사람이 누구인지)을 대사로 직접 말한다
- narrator: 눈에 보이는 것을 지문으로 설명한다. 쪽지·메모에 적힌 글, 인물의 행동, 무엇이 어떻게 됐는지
- 파티(character_any)는 NPC 에게 물을 수 있다. 그 답은 같은 방 안에서 NPC 나 narrator 가 한다
- 새 소식·상황은 narrator 지문이나 NPC 대사로 알린다. 파티는 그에 반응하고 결정만 한다
- 파티 줄(character_any·character_1~4)은 세 줄 이상 연달아 쓰지 않는다. 두 줄 뒤에는 narrator·NPC·상대 줄을 넣는다

# 화자
- narrator: 장면·행동 묘사. 3인칭으로만. 목록에 없는 인물(그 화의 동네 사람)의 말은 지문 안 따옴표로 담는다 (예: 할머니가 "그거 내 거유!" 하고 손을 흔든다)
- character_any: 파티(히어로들)가 하는 중요한 말 (단서·결론·결심). 줄마다 살아있는 파티원 중 한 명이 무작위로 말한다
  - 누가 말해도 말이 되는 한 줄로 쓴다. character_any 끼리 묻고 답하지 않는다 (NPC 에게 묻는 건 된다)
  - 파티가 1명일 수도 있다. 다른 파티원에게 제안하지 않고("~하는 게 어때?"), 결정은 한 줄로 말한다
- 파티(character_any·character_1~4)는 사람이 입으로 하는 말투로 쓴다. 짧은 반말 구어체 ("~야", "~어", "~지", "~겠어", "~해!")
  - "~다"로 끝나는 글말은 narrator 만 쓴다. 파티 대사는 "~다"로 끝내지 않는다
- character_1~4: 짧은 감정 반응 한 마디. 질문·핵심 정보를 넣지 않는다. 방마다 0~2줄. 분위기 감상만 하는 줄은 쓰지 않는다
- NPC: ${ep.npc.name} 한 명뿐이다. speaker 는 "${ep.npc.name}". 다른 NPC 는 쓰지 않는다
${
	isFinale
		? `- boss: 이 화의 상대 "${final.name}". speaker 'boss' 는 방 15 에서만 쓴다 (방 15 에서는 자동 등장, enter 불필요). 방 1~9 에서는 narrator 지문으로 그리고, 그의 말은 지문 안 따옴표로 담는다
- 5화에는 random_boss 를 쓰지 않는다`
		: `- random_boss: 이 화의 상대 "${ep.boss}". speaker 'random_boss' 는 방 15 에서만 쓴다 (방 15 에서는 자동 등장, enter 불필요). 방 1~9 에서는 narrator 지문으로 그리고, 그의 말은 지문 안 따옴표로 담는다
  - 게임에서 얼굴·이름은 런타임에 정해진다. 고유 이름을 붙이지 말고 "${ep.boss}", ${bossCallText(style)}처럼 호칭으로만 부른다. {random_boss} 자리표시도 쓰지 않는다
  - 키·체형·얼굴을 묘사하지 않는다. 들고 있는 물건·행동·말투로만 그린다
- boss 는 1~4화에 쓰지 않는다. 5화 인물 "${final.name}" 도 1~4화에는 나오지 않는다`
}

# 지켜야 할 줄거리 규칙
${
	isFinale
		? `- 히어로들은 1~4화에서 배운 대로, 싸우기 전에 먼저 사연을 묻는다. 그 질문은 파티(character_any)가 스스로 한다. NPC 가 먼저 시키지 않는다
- 1~4화의 오해를 파티가 한두 줄로 떠올린다 (누구를 무엇으로 오해했는지). 같은 말을 되풀이하지 않는다
- 방 15 dialogue: speaker 'boss' 가 먼저 말하며 막아선다. 싸움은 서로 다치게 하려는 싸움이 아니라 마음을 풀어 주는 겨루기라는 것이 대사로 보인다
- 방 15 win_dialogue: 줄거리대로 화해로 끝난다. ${final.name}의 실제 사정과 바랐던 것을 그가 직접 말하고, 히어로들이 들어준다
- 방 15 lose_dialogue: ${npcName}가 히어로들을 일으켜 세우며 다시 이야기해 보자고 한다`
		: `- 히어로들은 겉모습을 보고 오해하는 사람이다. 방 1~9 에서 오해를 부른 장면(USER 의 "히어로들이 본 모습")을 눈에 보이게 보여주고, 파티가 그걸 보고 왜 그렇게 생각하는지 대사로 말한다
- 실제 사정(USER 의 "실제 사정")은 방 15 win_dialogue 전에 밝히지 않는다. 앞 방에서는 나중에 보면 이해되는 작은 힌트만 둔다 (줄거리에 있는 것만)
- 방 15 dialogue: 상대(random_boss)가 오해라고 외치거나 막아서고, 파티가 오해한 채로 싸움을 건다. 싸움은 가볍게 (다치게 하려는 말 금지)
- 방 15 win_dialogue: 싸움이 끝나고 USER 의 "사정이 드러나는 증거"가 narrator 지문으로 눈에 보인다 → 상대가 실제 사정을 말한다 → 파티가 오해를 사과하거나 머쓱해한다
- 방 15 lose_dialogue: ${npcName}가 히어로들을 일으켜 세운다. 짧게${
				reverse
					? `
- 이 화는 거꾸로 꼬는 화다. 히어로들은 앞 화에서 배운 대로 수상해 보이는 사람을 감싸고, 친절하고 믿음직해 보이는 "${ep.boss}"를 믿고 돕는다. 그를 믿는 이유를 대사로 말한다
- 수상해 보이던 사람이 사실 막으려던 장면을 방 1~5 에 보여준다. 방 9 에서 히어로들이 속은 걸 알아챈다
- win_dialogue 에서 믿은 사람의 사정이 증거로 드러난다 (나쁜 사람이 아니라 작은 잘못을 숨기려던 사람). 수상해 보이던 사람의 사정도 한 줄로 풀어 준다`
					: ''
			}${
				prev
					? `
- 히어로들은 앞 화를 기억한다. 방 1~5 에서 파티가 앞 화 오해(USER 의 "앞 화")를 대사로 떠올리고, 이번엔 줄거리대로 다르게 조심한다. 그 조심을 방 9 전에 대사·행동으로 보여준다
- 조심했는데도 또 오해하는 이유가 대사로 보여야 한다. 앞 화와 똑같은 말만 되풀이하지 않는다`
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
${premise?.world ? `- 무대: ${premise.world}\n` : ''}- 히어로들이 이곳에 온 이유: ${story.design.goal}${order === 1 ? ' (방 1 에서 밝힌다)' : ''}
- 함께 다니는 NPC: ${ep.npc.name} = ${npcName} (${ep.npc.role}). 1~5화 내내 히어로들과 함께 다닌다. 방마다 enter 를 쓰고 말한다${persona ? `\n- ${npcName} 성격: ${persona}` : ''}

${
	isFinale
		? `## 이번 화 상대
- ${final.name}
- 모습: ${final.look}
- 실제 사정: ${final.actual}
- 바랐던 것: ${final.want}

## 1~4화 오해 (파티가 떠올릴 것)
${story.design.misunderstandings.map((x) => `- ${x.order}화 ${x.who}: "${x.looked_like}" 로 보였지만 실제로는 "${x.actual}"`).join('\n')}`
		: `## 이번 화 오해${reverse ? ' (거꾸로: 믿은 사람이 상대)' : ''}
- 상대: ${ep.boss}
- 히어로들이 본 모습${reverse ? ' (믿을 만해 보인 모습)' : ''}: ${m?.looked_like ?? ''}
- 실제 사정 (방 15 win_dialogue 에서 밝힌다): ${m?.actual ?? ''}
- 사정이 드러나는 증거 (방 15 win_dialogue): ${m?.reveal ?? ''}${prev ? `\n- 앞 화: ${prev.who}를 "${prev.looked_like}" 로 오해했지만 실제로는 "${prev.actual}"` : ''}`
}

## 이야기 prologue (원본, 참고용)
${story.prologue}

## 이번 화 줄거리 (${order}화, 장소: ${ep.place})
${outline(ep)}${isFinale && ep.epilogue ? `\n- epilogue: ${ep.epilogue}` : ''}

## 다른 화 줄거리 (흐름 맞추기용. 이 사건들을 이번 화에 다시 일으키지 않는다. 앞 화에 있었던 일을 떠올리는 대사는 쓴다)
${others}`;

	return `${SYSTEM}\n\n---\n\n${USER}`;
}
