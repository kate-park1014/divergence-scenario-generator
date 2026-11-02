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
		boss_want?: string;
		finale_logic?: string;
		deceptions?: { order: number; believed?: string; actual_victim?: string; link?: string; seen?: string; caution?: string }[];
		goal?: string;
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

/** 2~4화: 앞 화 피해자가 NPC 면 그 key (그 화 내내 함께 다님). 2화의 앞 화 피해자는 1화의 모르는 사람이라 없음 */
export function companionOf(story: NetshortStory, order: number): string | undefined {
	if (order < 3 || order > 4) return undefined;
	const key = story.episodes.find((e) => e.order === order - 2)?.npc.name;
	const main = story.episodes.find((e) => e.order === order)?.npc.name;
	return key && key !== main ? key : undefined;
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
	const deception = isFinale ? undefined : d.deceptions?.find((x) => x.order === order);
	const prevVictim = order >= 2 && order <= 4 ? d.deceptions?.find((x) => x.order === order - 1)?.actual_victim : undefined;
	const companion = companionOf(story, order);
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
- USER 의 "이번 화 줄거리"가 원본이다. 방마다 적힌 사건을 같은 방에, 같은 차례로 대사로 풀어 쓴다. 사건을 빼거나 큰 사건을 새로 만들지 않는다
- 줄거리 문장을 그대로 옮기지 않는다. 인물이 그 상황에서 실제로 할 법한 말과 짧은 narrator 지문으로 바꾼다
- 줄거리가 "설명한다·경고한다·둘러본다"처럼 내용 없이 적힌 곳은 그 내용을 채운다. 무엇을 설명했는지, 누가 왜 위협하는지, 히어로들이 무엇을 하려는지를 읽는 사람이 알 수 있게 쓴다

# 설명은 누가 하나
- NPC: 자기가 아는 것(장치 작동법, 위협하는 무리, 동네 사정)을 대사로 직접 말한다
- narrator: 눈에 보이는 것을 지문으로 설명한다. 쪽지·화면에 적힌 글, 인물이 누구인지, 무엇이 어떻게 됐는지
- 파티(character_any)는 NPC 에게 물을 수 있다. 그 답은 같은 방 안에서 NPC 나 narrator 가 한다
- 새 소식·상황(누가 쫓아온다, 무엇이 무너졌다)은 narrator 지문이나 NPC 대사로 알린다. 파티는 그에 반응하고 결정만 한다
- 파티 줄(character_any·character_1~4)은 세 줄 이상 연달아 쓰지 않는다. 두 줄 뒤에는 narrator·NPC·보스 줄을 넣는다
- 방마다 6~12줄. 한 대사는 말풍선 하나, 1~2문장
- 대사만 훑어봐도 무슨 일이 있었는지 알 수 있게 쓴다. 이유는 대사로 직접 말한다
- 같은 물건·인물은 줄거리와 같은 이름으로 부른다
- 핵심 장치는 하나뿐이다. 다른 기계·물건을 장치처럼 말하지 않는다
- 줄거리에 없는 소품·설정을 억지로 덧붙이지 않는다. 장치의 생김새·부품·문양도 줄거리에 적힌 것만 쓴다
- 방 사이에는 다른 이벤트가 끼어든다. 각 방은 앞 방의 마지막 대사를 기억한다고 가정하지 않는다
- 방 안에서 꺼낸 질문은 그 방 안에서 답한다
- direction 의 focus 는 쓰지 않는다 (enter·exit 등 필요한 연출만)
- prologue·epilogue 는 3인칭. "나는·내가·우리는" 같은 1인칭을 쓰지 않는다
- 분위기: ${tone ?? '하드보일드'}. narrator 는 짧고 건조한 현재형 "~다"
- 대사·지문을 따옴표로 감싸지 않는다

# 화자
- narrator: 장면·행동 묘사. 3인칭으로만 ("내 방" 대신 "히어로들의 방"). 인물의 말·비명은 그 인물 대사로, 목록에 없는 인물이면 지문 안 따옴표로 (예: 101호에서 "살려주세요!" 하는 비명이 터진다)
- character_any: 파티(히어로들)가 하는 중요한 말 (단서·결론·결심). 줄마다 살아있는 파티원 중 한 명이 무작위로 말한다
  - 누가 말해도 말이 되는 한 줄로 쓴다. character_any 끼리 묻고 답하지 않는다 (NPC 에게 묻는 건 된다)
  - 파티가 1명일 수도 있다. 다른 파티원에게 제안하지 않고("~하는 게 어때?"), 결정은 한 줄로 말한다
- 파티(character_any·character_1~4)는 사람이 입으로 하는 말투로 쓴다. 짧은 반말 구어체 ("~야", "~어", "~지", "~군", "~겠어", "~해!")
  - "~다"로 끝나는 글말("한계다", "필요하다", "쓰지 않는다", "버틴다")은 narrator 만 쓴다. 파티 대사는 "~다"로 끝내지 않는다
- character_1~4: 짧은 감정 반응 한 마디. 질문·핵심 정보를 넣지 않는다. 지워도 흐름이 이어지게. 방마다 0~2줄. 분위기 감상("정적이 감돈다", "심상치 않다")만 하는 줄은 쓰지 않는다
- NPC: 아래 NPC 목록의 key 를 speaker 로 쓴다. 목록에 없는 NPC 는 쓰지 않는다
${
	isFinale
		? `- boss: 최종보스 ${boss}. speaker 'boss' 는 방 15 에서만 쓴다. 방 9 에서 처음 모습을 드러낼 때는 narrator 지문으로 그리고, 그의 말은 지문 안 따옴표로 담는다
- 5화에는 random_boss 를 쓰지 않는다`
		: `- random_boss: 이 화의 일반 보스. 줄거리의 "${ep.boss}" 이다. 이름은 런타임에 정해지므로 대사·지문에 "${ep.boss}" 같은 이름을 쓰지 않는다. {random_boss} 자리표시도 쓰지 않는다 (이름의 받침을 몰라 조사가 어긋남). 대사·지문에서는 "놈", "그 사내"처럼 부른다
  - 외형(체형·복장)을 묘사하지 않는다. 무기·말투로 성격만 드러낸다
- boss 는 1~4화에 쓰지 않는다. 최종보스 "${boss}" 의 이름도 1~4화에는 어디에도 쓰지 않는다`
}

# 지켜야 할 줄거리 규칙
- 히어로들은 속는 사람이다. 장치를 쓰는 순간에는 그 선택이 옳아 보여야 하고, 왜 쓰는지(누구를 지키려는지, 무엇을 믿었는지) 대사로 말한다
${
	isFinale
		? `- 최종보스의 정체를 나타내는 낱말("${identityWord}")과 정체의 내용은 방 9 전에 쓰지 않는다
- 정답 행동은 파티(character_any)가 스스로 처음 말한다. NPC 가 먼저 알려 주지 않는다
- 방 9: ${boss}가 처음 모습을 드러내며 정체와 자기가 원하는 것(USER 의 "보스가 원하는 것")을 지문 속 따옴표로 직접 말한다. 1~4화에 히어로들이 장치를 쓸 때마다 무슨 일이 있었는지 이어 준다
- 방 15 dialogue: speaker 'boss' 가 먼저 말한다. 히어로들에게 장치를 한 번 더 쓰라고 권한다. 파티는 앞 화 피해자들을 떠올리며 거절한다
- 정답 행동은 방 15 dialogue(전투 전) 끝에서 한다. 방 15 win_dialogue 는 전투가 끝난 뒤, 그 행동의 결과로 ${boss}가 무너지는 장면이다. 무너지는 이유는 USER 의 "보스가 무너지는 이유" 그대로 보여준다. 작동법에 없는 일(기계가 멈춘다, 숨은 힘이 터진다)을 지어내지 않는다`
		: `- 장치는 방 15 dialogue(전투 전) 끝에서 한 번만 쓴다. 방 1~9 와 win_dialogue 에서는 쓰지 않는다
- 장치를 쓰는 이유는 random_boss 와 싸우며 입을 상처를 대신 받게 하려는 것이다. 장치를 다 쓴 뒤에 싸움을 시작한다 ("싸우면서 장치를 쓴다"고 쓰지 않는다)
- 장치를 쓰기 전(방 9 또는 방 15 dialogue)에 히어로들이 누구 이름을 넣을지, 왜 그 이름이면 아무도 안 다친다고 믿는지 대사로 말한다
- win_dialogue 는 전투가 끝난 뒤의 결과 장면이다. 공격이 다시 날아오거나 장치를 새로 쓰는 장면을 넣지 않는다. 싸우는 동안 히어로들이 맞은 상처는 히어로들 몸에 없고, 그 상처가 누구 몸에 생겼는지만 보여준다
- 실제 피해자(USER 의 "이번 화 속는 방식")는 방 15 전에 한 번 먼저 보이게 한다. NPC 가 아니면 narrator 지문으로 등장시킨다
- win_dialogue 에서 실제 피해자가 다치고, 파티가 그걸 알아챈다. 믿은 대상과 실제 피해자가 왜 이어지는지 USER 의 "피해가 그 사람에게 간 이유" 그대로 NPC 나 narrator 가 한 줄로 밝힌다. 작동법 밖의 이유(옆에 있었다 등)를 지어내지 않는다${
	prevVictim
		? `
- 히어로들은 앞 화를 기억한다. 방 1~5 에서 앞 화 피해자(${prevVictim})의 지금 모습을 보여주고, 파티가 앞 화 일을 대사로 떠올린다${
				companion
					? `
- 앞 화 피해자 ${npcNames[companion] ?? companion}(${companion})는 이번 화 내내 파티와 함께 다닌다 (코드가 방마다 enter 를 넣는다). 그를 두고 떠나거나 "먼저 가라"며 남는 장면을 쓰지 않는다`
					: ''
			}
- 그래서 이번엔 USER 의 "이번에 조심하는 방법"대로 조심한다. 그 조심을 방 9 전에 대사·행동으로 보여주고, 방 15 에서 장치를 쓸 때도 그 조심을 한 뒤에 쓴다
- 조심했는데도 피해가 간 이유는 win_dialogue 에서 드러난다. 앞 화와 똑같은 말("이 이름이면 아무도 안 다친다")만 되풀이하지 않는다`
		: ''
}
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
${d.goal ? `- 히어로들이 이곳에 온 이유: ${d.goal}${order === 1 ? ' (방 1 에서 밝힌다)' : ''}\n` : ''}- 장치: ${d.device ?? ''}
- 작동법: ${d.how ?? ''}
- 눈에 보이는 결과: ${d.visible_effect ?? ''}
${isFinale ? `- 1~4화에 히어로들이 한 행동: ${d.wrong_action ?? ''}\n- 이번 화 정답 행동: ${d.right_action ?? ''}` : `- 이번 화 방 15 전투 전에 히어로들이 하는 행동: ${d.wrong_action ?? ''}`}
- 최종보스의 흔적 (1~4화에 보스 대신 나오는 것): ${d.boss_trace ?? ''}
${
	isFinale
		? `- 최종보스: ${boss}\n- 모습: ${d.boss_look ?? ''}\n- 정체: ${d.true_identity ?? ''}\n- 반전: ${d.twist ?? ''}\n- 숨겨진 과거: ${d.original_sin ?? ''}\n- 보스가 원하는 것 (히어로들이 장치를 쓸 때마다 얻은 것): ${d.boss_want ?? ''}\n- 보스가 무너지는 이유: ${d.finale_logic ?? ''}`
		: ''
}

${deception ? `## 이번 화 속는 방식\n- 히어로들이 믿은 대상 (이 이름을 넣으면 아무도 안 다친다고 믿음): ${deception.believed ?? ''}\n- 실제 피해자: ${deception.actual_victim ?? ''}\n${deception.seen ? `- 히어로들이 그렇게 믿게 된 장면 (방 15 전에 보여준다): ${deception.seen}\n` : ''}${deception.link ? `- 피해가 그 사람에게 간 이유: ${deception.link}\n` : ''}${prevVictim ? `- 앞 화 피해자: ${prevVictim}\n` : ''}${deception.caution ? `- 이번에 조심하는 방법 (앞 화에서 배운 것): ${deception.caution}\n` : ''}\n` : ''}## 이야기 prologue (원본, 참고용)
${story.prologue}

## 이번 화 줄거리 (${order}화, 장소: ${ep.place ?? ''})
${episodeOutline(ep)}${isFinale && ep.epilogue ? `\n- epilogue: ${ep.epilogue}` : ''}

## 주 NPC
- ${ep.npc.name} = ${npcNames[ep.npc.name] ?? ep.npc.name} (${ep.npc.role})${persona ? `\n- 성격: ${persona}` : ''}

## 등장할 수 있는 NPC (줄거리에 나오는 사람만)
${npcList}

## 다른 화 줄거리 (흐름 맞추기용. 이 사건들을 이번 화에 다시 일으키지 않는다. 앞 화에 있었던 일을 떠올리는 대사는 쓴다)
${others}`;

	return `${SYSTEM}\n\n---\n\n${USER}`;
}
