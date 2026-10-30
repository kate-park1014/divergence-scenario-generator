import { PLACEHOLDER_RULES, NPC_ENTER_EXIT_RULES, OUTPUT_RULES } from './chapterRules';
import { getNpcPersona } from '$lib/data/sample/npc';

export { buildScenarioTool } from './scenarioTool';

/**
 * 넷쇼트 story.json(netshort_test/<id>/story.json) 한 화 → 게임 시나리오 대사.
 * story.json 의 방 1,3,5,8,10 이 이미 줄거리라서, 사건은 그대로 두고 대사로 풀어 쓰게 한다.
 * 방 번호는 게임 형식에 맞춰 8→9, 10→15 로 옮긴다.
 * 출력 예시는 넣지 않는다 (예시를 베낀다). 형식은 출력 스키마(scenarioTool)가 강제한다.
 */

export type NetshortRoom10 = { before_battle?: string; win?: string; lose?: string };
export type NetshortEpisode = {
	order: number;
	boss: string;
	place?: string;
	npc: { name: string; role: string };
	rooms: Record<string, string | NetshortRoom10>;
	epilogue?: string;
};
export type NetshortStory = {
	id: string;
	title: string;
	prologue: string;
	design: Record<string, unknown> & {
		device?: string;
		how?: string;
		visible_effect?: string;
		wrong_action?: string;
		right_action?: string;
		original_sin?: string;
		boss_trace?: string;
		boss_name?: string;
		boss_look?: string;
		true_identity?: string;
		twist?: string;
	};
	episodes: NetshortEpisode[];
};

export const ROOM_MAP: Record<string, number> = { '1': 1, '3': 3, '5': 5, '8': 9, '10': 15 };

const roomText = (ep: NetshortEpisode, k: string) => {
	const r = ep.rooms[k];
	if (!r) return '';
	if (typeof r === 'string') return r;
	return [
		r.before_battle ? `  - 전투 전(dialogue): ${r.before_battle}` : '',
		r.win ? `  - 이겼을 때(win_dialogue): ${r.win}` : '',
		r.lose ? `  - 졌을 때(lose_dialogue): ${r.lose}` : ''
	]
		.filter(Boolean)
		.join('\n');
};

export function episodeOutline(ep: NetshortEpisode): string {
	return Object.keys(ROOM_MAP)
		.map((k) => {
			const t = roomText(ep, k);
			return t.includes('\n') || t.startsWith('  -') ? `- 방 ${ROOM_MAP[k]}:\n${t}` : `- 방 ${ROOM_MAP[k]}: ${t}`;
		})
		.join('\n');
}

export function buildScenarioNetshortPrompt(
	story: NetshortStory,
	order: number,
	npcNames: Record<string, string>,
	tone?: string
): string {
	const ep = story.episodes.find((e) => e.order === order)!;
	const isFinale = order === 5;
	const d = story.design;
	const boss = d.boss_name ?? '최종보스';
	const persona = getNpcPersona(ep.npc.name);
	const identityWord = (d.true_identity ?? '').replace(/[.。]$/, '').trim().split(/\s+/).pop() ?? '';

	// 같은 이야기의 다른 화 줄거리 (흐름 맞추기용). 1~4화에는 5화를 숨긴다
	const others = story.episodes
		.filter((e) => e.order !== order && (isFinale || e.order <= 4))
		.map((e) => `### ${e.order}화 (${e.place ?? ''}, NPC ${npcNames[e.npc.name] ?? e.npc.name})\n${episodeOutline(e)}`)
		.join('\n\n');

	const npcList = [...new Map(story.episodes.map((e) => [e.npc.name, e.npc.role])).entries()]
		.map(([k, role]) => `- ${k} = ${npcNames[k] ?? k} (${role})`)
		.join('\n');

	const SYSTEM = `당신은 웹툰 작가입니다. 이미 완성된 5화짜리 이야기의 ${order}화를 게임 시나리오 대사(방 5개: 1, 3, 5, 9, 15)로 옮깁니다.

# 쓰는 법
- USER 의 "이번 화 줄거리"가 원본이다. 방마다 적힌 사건을 같은 방에, 같은 차례로 대사로 풀어 쓴다. 사건을 빼거나 새 사건·새 인물을 지어내지 않는다
- 줄거리 문장을 그대로 옮기지 않는다. 인물이 그 상황에서 실제로 할 법한 말과 짧은 narrator 지문으로 바꾼다
- 방마다 6~12줄. 한 대사는 말풍선 하나, 1~2문장
- 대사만 훑어봐도 무슨 일이 있었는지 알 수 있게 쓴다. 이유는 대사로 직접 말한다
- 같은 물건·인물은 줄거리와 같은 이름으로 부른다
- 방 사이에는 다른 이벤트가 끼어든다. 각 방은 앞 방의 마지막 대사를 기억한다고 가정하지 않는다
- 방 안에서 꺼낸 질문은 그 방 안에서 답한다
- direction 의 focus 는 쓰지 않는다 (enter·exit 등 필요한 연출만)
- prologue·epilogue 는 3인칭. "나는·내가·우리는" 같은 1인칭을 쓰지 않는다
- 분위기: ${tone ?? '하드보일드'}. narrator 는 짧고 건조한 현재형 "~다"

# 화자
- narrator: 장면·행동 묘사
- character_any: 파티(히어로들)가 하는 중요한 말 (단서·결론·결심). 줄마다 살아있는 파티원 중 한 명이 무작위로 말한다
  - 누가 말해도 말이 되는 한 줄로 쓴다. character_any 끼리 묻고 답하지 않는다
  - 파티가 1명일 수도 있다. 다른 파티원에게 제안하지 않고("~하는 게 어때?"), 결정은 한 줄로 말한다
- character_1~4: 짧은 감정 반응 한 마디. 질문·핵심 정보를 넣지 않는다. 지워도 흐름이 이어지게
- NPC: 아래 NPC 목록의 key 를 speaker 로 쓴다. 목록에 없는 NPC 는 쓰지 않는다
${
	isFinale
		? `- boss: 최종보스 ${boss}. speaker 'boss' 는 방 15 에서만 쓴다. 방 9 에서 처음 모습을 드러낼 때는 narrator 지문으로 그리고, 그의 말은 지문 안 따옴표로 담는다
- 5화에는 random_boss 를 쓰지 않는다`
		: `- random_boss: 이 화의 일반 보스. 줄거리의 "${ep.boss}" 이다. 이름은 런타임에 정해지므로 대사·지문에 "${ep.boss}" 같은 이름을 쓰지 않는다. 이름이 꼭 필요하면 {random_boss}
  - 외형(체형·복장)을 묘사하지 않는다. 무기·말투로 성격만 드러낸다
- boss 는 1~4화에 쓰지 않는다. 최종보스 "${boss}" 의 이름도 1~4화에는 어디에도 쓰지 않는다`
}

# 지켜야 할 줄거리 규칙
- 히어로들은 속는 사람이다. 장치를 쓰는 순간에는 그 선택이 옳아 보여야 하고, 왜 쓰는지(누구를 지키려는지, 무엇을 믿었는지) 대사로 말한다
${
	isFinale
		? `- 최종보스의 정체를 나타내는 낱말("${identityWord}")과 정체의 내용은 방 9 전에 쓰지 않는다
- 정답 행동은 파티(character_any)가 스스로 처음 말한다. NPC 가 먼저 알려 주지 않는다
- 방 15 win_dialogue: 히어로들이 정답 행동을 해내고 ${boss}가 무너진다`
		: `- 장치는 방 15 win_dialogue 에서 한 번만 쓴다. 그 전 방에서는 장치를 쓰지 않는다
- win_dialogue 에서 실제로 피해를 입는 사람은 줄거리대로다. 히어로들이 믿은 대상과 다르다는 것이 눈에 보이게 쓴다
- 1~4화 win_dialogue 에서 "뒤늦게" 경고하는 대사를 넣지 않는다`
}
- 금액(원·만 원 등) 숫자를 쓰지 않는다. 한자를 쓰지 않는다

# 게임 데이터 형식 (반드시 지킬 것)
${PLACEHOLDER_RULES}

${NPC_ENTER_EXIT_RULES}

## 방 15 (보스 룸)
- dialogue(전투 전) + win_dialogue + lose_dialogue 를 모두 쓴다
- 다른 방(1,3,5,9)은 dialogue 만 쓴다

${OUTPUT_RULES}`;

	const USER = `# 이야기: ${story.title}

## 세계와 장치
- 장치: ${d.device ?? ''}
- 작동법: ${d.how ?? ''}
- 눈에 보이는 결과: ${d.visible_effect ?? ''}
${isFinale ? `- 1~4화에 히어로들이 한 행동: ${d.wrong_action ?? ''}\n- 이번 화 정답 행동: ${d.right_action ?? ''}` : `- 이번 화 win 에서 히어로들이 하는 행동: ${d.wrong_action ?? ''}`}
- 최종보스의 흔적 (1~4화에 보스 대신 나오는 것): ${d.boss_trace ?? ''}
${
	isFinale
		? `- 최종보스: ${boss}\n- 모습: ${d.boss_look ?? ''}\n- 정체: ${d.true_identity ?? ''}\n- 반전: ${d.twist ?? ''}\n- 숨겨진 과거: ${d.original_sin ?? ''}`
		: ''
}

## 이야기 prologue (원본, 참고용)
${story.prologue}

## 이번 화 줄거리 (${order}화, 장소: ${ep.place ?? ''})
${episodeOutline(ep)}${isFinale && ep.epilogue ? `\n- epilogue: ${ep.epilogue}` : ''}

## 주 NPC
- ${ep.npc.name} = ${npcNames[ep.npc.name] ?? ep.npc.name} (${ep.npc.role})${persona ? `\n- 성격: ${persona}` : ''}

## 등장할 수 있는 NPC (줄거리에 나오는 사람만)
${npcList}

## 다른 화 줄거리 (흐름 맞추기용. 이 사건들은 이번 화에 쓰지 않는다)
${others}`;

	return `${SYSTEM}\n\n---\n\n${USER}`;
}
