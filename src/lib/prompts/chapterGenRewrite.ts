import { PLACEHOLDER_RULES, NPC_ENTER_EXIT_RULES, OUTPUT_RULES } from './chapterRules';
import { getNpcPersona } from '$lib/data/sample/npc';
import { npc_by_theme } from '$lib/data/sample/npc_pool';
import type { StoryArc } from '$lib/types';

export { scenarioTool, buildScenarioTool } from './scenarioTool';

/**
 * 재작업된 storyarc(rewrite_test) 전용 시나리오 프롬프트.
 * - storyarc 의 새 필드(story_spine, key_object, wrong/right_action, stage, boss_trace …)는 "무슨 일이 일어나는지" 메모로 넘기고,
 *   대사는 자연스러운 말로 쓰게 한다 (필드 문구를 대사에 그대로 옮기지 않게)
 * - 방 배치는 꼭 필요한 장면만 고정한다 (전부 고정하면 매화 같은 틀이 나온다)
 * - 게임 데이터 형식 규칙(placeholder, enter/exit, 출력)만 chapterRules.ts 에서 가져온다
 * - 출력 예시는 넣지 않는다 (예시 문장을 베낀다). 형식은 출력 스키마(scenarioTool)가 강제한다
 * 기존 storyarc(새 필드 없음)에는 chapterGen.ts 를 쓴다.
 */
export function buildScenarioRewritePrompt(order: number, arc: StoryArc): string {
	const scenario = arc.scenarioOutline[order - 1];
	const isFinale = order === 5;
	const boss = arc.boss_name_korean ?? arc.final_boss.name;
	// 그 화 일반 보스 직업 (예전 storyarc 는 집단 이름)
	const rbTitle = scenario.random_boss_title ?? arc.random_boss_role ?? '일반 보스';

	const themePool = (npc_by_theme[arc.theme as keyof typeof npc_by_theme] ?? []) as readonly {
		key: string;
		name: { korean: string };
	}[];
	const npcKeys = [...new Set([...Object.keys(arc.npc_roles ?? {}), ...arc.scenarioOutline.map((s) => s.npc)])];
	const nameOf = (key: string) => themePool.find((n) => n.key === key)?.name.korean ?? key;
	const npcList = npcKeys
		.map((key) => {
			const r = arc.npc_roles?.[key];
			return `- ${key} = ${nameOf(key)}${r?.title ? ` (${r.title})` : ''}${r?.role ? `: ${r.role}` : ''}`;
		})
		.join('\n');

	const turner = npcKeys.find((k) => arc.npc_roles?.[k]?.turn_order === order);
	const persona = getNpcPersona(scenario.npc);
	const mainRole = arc.npc_roles?.[scenario.npc];

	// 1~4화는 5화 결말을 숨긴다 (결말을 알면 앞 화 대사에 반전을 흘리기 쉽다)
	const spine = (arc.story_spine ?? [])
		.filter((l) => isFinale || l.order <= 4)
		.map((l) => `- ${l.order}화${l.order === order ? ' ← 이번 화' : ''}: ${l.line}`)
		.join('\n');

	// 단서: 2~4화(rising)는 같은 act 라서, 단서를 화마다 나눠 준다 (같은 단서가 세 화에 반복되지 않게)
	const forThisOrder = <T,>(items: T[]) =>
		scenario.act === 'rising' ? items.filter((_, i) => i % 3 === order - 2) : items;
	const plants = forThisOrder(arc.global_foreshadowing.filter((f) => f.plant_act === scenario.act)).map((f) => `- ${f.hint}`);
	const reveals = forThisOrder(arc.global_foreshadowing.filter((f) => f.reveal_act === scenario.act)).map(
		(f) => `- ${f.reveal_context}`
	);

	const scenes = isFinale
		? `- 방 1: 첫 줄은 narrator 가 지금 상황을 한 문장으로 알려 준다. 앞 화들의 나쁜 결과가 쌓인 모습이 보인다
- 방 3~9: 주인공이 무엇이 정답인지 알게 되는 계기가 나오고, 정답 쪽으로 움직인다. 앞 화들에서 들은 경고(틀린 행동을 하면 나쁜 일이 생긴다)가 맞았다는 것을 깨닫는 것도 계기가 될 수 있다. ${boss}는 ${arc.boss_trace ?? '흔적'}을 통해 마지막으로 막으려 한다 (어느 방에 둘지는 이야기에 맞게)
- 방 15: ${boss}가 처음으로 모습을 드러내며 막아선다 → 전투
  - win_dialogue: 주인공이 정답 행동을 해낸다 → ${boss}가 무너진다 → 망가졌던 것이 눈에 보이게 돌아온다
  - lose_dialogue: 짧게
- epilogue: 돌아온 무대의 모습으로 끝낸다`
		: `- 방 1: 첫 줄은 narrator 가 지금 상황을 한 문장으로 알려 준다
- 방 1~9 어딘가: ${boss}가 ${arc.boss_trace ?? '흔적'}을 통해 틀린 행동을 권한다 / 주 NPC 가 나온다 / 이번 화의 새 의문 하나가 나온다 / 주인공이 틀린 행동을 하고 그 결과를 눈으로 본다
  - 어느 방에서 무엇을 할지는 이야기에 맞게 정한다. 앞 화와 같은 순서·같은 장면이 되지 않게 한다
- 방 15: 일반 보스가 주인공이 틀린 행동을 (더) 하지 못하게 막아선다 → 전투
  - win_dialogue: 이겼지만 나쁜 결과는 남아 있다. 다음 화로 이어지는 기미 한 줄
  - lose_dialogue: 짧게`;

	const SYSTEM = `당신은 웹툰 작가입니다. 스토리아크의 ${order}화 시나리오(방 5개: 1, 3, 5, 9, 15)를 대사로 씁니다.

# 쓰는 법
- USER 섹션은 "이번 화에 무슨 일이 일어나는지" 적은 메모다. 그 사건만 쓰고, 새 사건·새 인물을 지어내지 않는다
- 메모의 문장을 대사에 그대로 옮기지 않는다. 인물이 그 상황에서 실제로 할 법한 말로 바꿔 쓴다
  - 행동 메모("○○을 ○○한다")를 대사로 읽지 않는다. 행동은 narrator 지문으로 보여 주거나 인물의 말에 녹인다
  - "이번 화", 대괄호, 필드 이름을 대사·지문에 쓰지 않는다
- 같은 물건·인물은 메모와 같은 이름으로 부른다 (다른 이름을 새로 붙이지 않는다)
- 장르답게 쓴다. 한 대사는 말풍선 하나, 1~2문장
- 대사만 훑어봐도 무슨 일이 있었는지 알 수 있게 쓴다. 이유는 대사로 직접 말한다
- 방 사이에는 다른 이벤트가 끼어든다. 각 방은 앞 방의 마지막 대사를 기억한다고 가정하지 않는다
- 방 안에서 꺼낸 질문은 그 방 안에서 답한다
- 같은 말·같은 감정을 되풀이하지 않는다. 앞 화에서 나온 장면을 다시 쓰지 않는다
- direction 의 focus 는 쓰지 않는다 (enter·exit 등 필요한 연출만)
- prologue·epilogue 는 3인칭으로 쓴다. "나는·내가·우리는" 같은 1인칭을 쓰지 않는다

# 이번 화 장면
${scenes}

# 화자
- narrator: 장면·행동 묘사. 짧고 건조한 "~다" 문체
- character_any: 파티가 하는 중요한 말 (단서·결론·결심). 줄마다 살아있는 파티원 중 한 명이 무작위로 말한다
  - 누가 말해도 말이 되는 한 줄로 쓴다. character_any 끼리 묻고 답하지 않고, 한 사람의 말을 여러 줄로 잇지 않는다
- character_1~4: 짧은 감정 반응 한 마디. 그 파티원이 죽었으면 줄이 빠진다
  - 지워도 흐름이 이어지게 쓴다. 질문(물음표)·핵심 정보·묘사를 넣지 않고, 이 줄에 누가 대답하지 않는다. 혼잣말로도 말이 되게 쓴다
- NPC: 아래 NPC 목록의 key 를 speaker 로 쓴다. 목록에 없는 NPC 는 쓰지 않는다
- random_boss: 1~4화의 일반 보스 (방 15 밖에 나와도 된다). 그 화의 직업으로 부르고, 이름·외형·사연은 쓰지 않는다. 주인공이 틀린 행동을 못 하게 막고 경고하는 말을 한다. 이름이 꼭 필요하면 {random_boss}
- boss: 5화 방 15 에서만. 1~4화에는 쓰지 않는다
- 주고받는 대화는 character_any ↔ NPC / random_boss / boss 사이에서 한다

# 최종보스 ${boss}
${
	isFinale
		? `- 방 9 까지는 ${arc.boss_trace ?? '흔적'}을 통해서만 드러나고, 방 15 에서 처음으로 모습을 드러낸다 (speaker 'boss')
- 끝까지 정답 행동을 막다가 진다. 정답을 반기거나 돕지 않는다`
		: `- 이번 화에는 얼굴·몸이 나오지 않는다. 말은 ${arc.boss_trace ?? '흔적'}을 통해서만 전해진다
- 그 말은 narrator 지문 안에 따옴표로 담거나, NPC 가 전해 준다
- 일반 보스와 다른 존재다. 섞지 않는다`
}
- 이름 소개: 파티는 처음에 "${boss}"라는 이름을 모른다. 이 화에서 이름을 처음 꺼낼 때는 NPC·일반 보스가 전하거나 ${arc.boss_trace ?? '흔적'}에 이름이 드러나는 장면으로 소개하고, 파티가 그게 무엇인지 묻거나 반응한다. 소개한 뒤에는 이름으로 불러도 된다
- 파티(character_any·character_1~4)가 이름을 먼저 꺼내지 않는다. prologue 에서도 이름을 먼저 쓰지 않는다
- 이름을 꼭 꺼내지 않아도 된다. 그때는 ${arc.boss_trace ?? '흔적'}으로 부른다

# 게임 데이터 형식 (반드시 지킬 것)
${PLACEHOLDER_RULES}

${NPC_ENTER_EXIT_RULES}

## 방 15 (보스 룸)
- dialogue(전투 전) + win_dialogue + lose_dialogue 를 모두 쓴다

${OUTPUT_RULES}`;

	const USER = `# 이번 화 메모 (${order}화)

## 이 이야기
- 장르: ${arc.genre ?? ''}
- 무대: ${arc.stage ?? ''} — ${arc.world.setting}
- 이 세계에서는: ${arc.world.rule}

## 줄거리${isFinale ? '' : ' (5화는 아직 비밀)'}
${spine}

## 이번 화에 일어나는 일${scenario.place ? `\n- 장소: ${scenario.place}` : ''}
${scenario.summary}

## 핵심 물건과 주인공의 행동
- 핵심 물건: ${arc.key_object ?? ''}
- ${isFinale ? `이번 화 주인공의 행동 (정답): ${arc.right_action ?? ''}` : `이번 화 주인공의 행동 (틀린 행동): ${arc.wrong_action ?? ''}`}
${isFinale ? `- 1~4화에 주인공이 해 온 틀린 행동: ${arc.wrong_action ?? ''}` : `- (이번 화에는 아무도 하지 않는 정답 행동: ${arc.right_action ?? ''})`}

## 최종보스
- ${boss} (호칭 없이 이 이름으로만 부른다)
- 드러나는 방법: ${arc.boss_trace ?? ''}
${
	isFinale
		? `- 모습: ${arc.final_boss.appearance_boss ?? arc.final_boss.appearance ?? ''}
- 정체: ${arc.final_boss.true_identity}
- 마지막 장면: ${arc.final_boss.twist}`
		: `- 사람들이 아는 모습: ${arc.final_boss.surface_identity}`
}
${isFinale ? '' : `\n## 일반 보스\n- ${rbTitle}. 이 직업답게 말하고 주인공을 막아선다 (다른 화의 일반 보스와는 다른 사람)
- 최종보스 편이 아니다. 경고하는 쪽이다. 주인공이 "${arc.wrong_action ?? ''}"를 하지 못하게 막으며 그러면 나쁜 일이 생긴다고 경고한다. 경고 내용은 맞다
- 다만 막는 까닭이 자기 사정(자기 일·구역·물건·규칙)처럼 들려서 파티는 경고를 믿지 않는다. 파티가 왜 믿지 않는지 대사로 말한다
- 정답 행동(${arc.right_action ?? ''})은 말하지 않는다. 최종보스의 말(${arc.boss_trace ?? '흔적'})을 따르라고 하지 않는다\n`}
## 인물의 입장
- 주인공이 경고를 듣고도 틀린 행동을 하거나 계속할 때는, 왜 그게 해결책이라고 믿는지 대사로 말한다 (흔적의 말, 소문, 급한 사정 등)
- NPC 는 앞에서 한 말과 같은 입장에서 반응한다. 틀린 행동을 부추기거나 그 소문을 전한 NPC 가 나쁜 결과를 보고 갑자기 주인공을 탓하지 않는다 (같이 당황하거나 놀란다). 마음을 바꾸는 NPC 는 그 계기 장면을 먼저 보여 준다

## NPC
- 이번 화의 주 NPC: ${scenario.npc} = ${nameOf(scenario.npc)}${mainRole?.title ? ` (${mainRole.title})` : ''}
${persona ? `- 성격: ${persona}\n` : ''}${mainRole ? `- 이 이야기에서: ${mainRole.role}\n` : ''}${
		turner ? `- 이번 화에 ${nameOf(turner)}이(가) 마음을 바꾼다. 계기: ${arc.npc_roles?.[turner]?.turn_scene ?? ''}\n` : ''
	}- 등장할 수 있는 NPC:
${npcList}
${plants.length ? `\n## 이번 화에 흘릴 단서 (자연스럽게)\n${plants.join('\n')}\n` : ''}${reveals.length ? `\n## 이번 화에 밝혀질 것\n${reveals.join('\n')}\n` : ''}
## 분위기
${arc.act_tone[scenario.act as keyof typeof arc.act_tone]?.mood ?? ''}`;

	return `${SYSTEM}\n\n---\n\n${USER}`;
}
