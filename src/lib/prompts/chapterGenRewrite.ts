import { PLACEHOLDER_RULES, NPC_ENTER_EXIT_RULES, OUTPUT_RULES } from './chapterRules';
import { getNpcPersona } from '$lib/data/sample/npc';
import { npc_by_theme } from '$lib/data/sample/npc_pool';
import type { StoryArc } from '$lib/types';
import { actionOf, hiddenLinkOf, lessonOf, traceOf } from './arcEpisode';

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
// prevParty: 앞 화들에서 파티(character_any)가 한 말. 같은 행동·반응을 되풀이하지 않게 넘긴다 (히어로 성장)
export function buildScenarioRewritePrompt(
	order: number,
	arc: StoryArc,
	prevParty: { order: number; lines: string[] }[] = []
): string {
	const scenario = arc.scenarioOutline[order - 1];
	const isFinale = order === 5;
	const boss = arc.boss_name_korean ?? arc.final_boss.name;
	// 그 화 일반 보스 직업 (예전 storyarc 는 집단 이름)
	const rbTitle = scenario.random_boss_title ?? arc.random_boss_role ?? '일반 보스';
	// 그 화 일반 보스의 편 (warn: 틀린 행동을 경고하며 막음 / ally: 최종보스 편). 예전 storyarc 에는 없음 → ally
	const rbWarns = scenario.random_boss_side === 'warn';
	const anyWarn = arc.scenarioOutline.some((s) => s.order <= 4 && s.random_boss_side === 'warn');
	// 화별 값: 이번 화 행동·흔적, 앞 화에서 배운 것 (2~4화는 1화와 겉모습이 다른 행동을 하고, 흔적도 화마다 다르다)
	const action = actionOf(arc, order);
	const trace = traceOf(arc, order) || '흔적';
	const lesson = lessonOf(arc, order);
	// 이어지는 이야기 형식(화별 lesson 있음)인지. 예전 storyarc 는 매화 같은 행동·같은 흔적
	const continuous = !!arc.story_spine?.some((l) => l.lesson?.trim());
	const later = continuous && order >= 2 && !isFinale;
	// 그 화 속는 방식 (예전 storyarc 에는 없음 → direct). 화마다 장면 흐름이 달라진다
	const mode = scenario.deceive_mode ?? 'direct';
	const npcName0 = scenario.npc;
	const modeScene: Record<string, string> = {
		direct: `${boss}가 ${trace}을 통해 이번 화 행동을 친절한 해결책처럼 권하고, 파티가 그 말을 믿고 누군가를 돕기 위해 이번 화 행동을 한다`,
		verify: `파티가 앞 화에서 배운 대로 바로 하지 않고 먼저 확인·시험한다 (무엇으로 어떻게 확인하는지 장면으로). 그 확인 수단이 ${trace}이고, 안전하다는 답이 나온다. 파티는 안심하고 이번 화 행동을 한다`,
		npc_acts: `파티는 ${trace}의 말을 의심해 멈추자고 말한다. 그런데 주 NPC(${npcName0})가 ${trace}을 보고 파티가 말리기 전에 혼자 먼저 이번 화 행동을 시작해 버린다. 반쯤 된 일을 그대로 두면 NPC 가 위험해 보여서 파티가 함께 마무리한다`,
		avoid: `파티는 앞 화와 비슷해 보이는 일을 일부러 피하려 한다. ${trace}이 "그건 위험하니 대신 이렇게 하라"고 친절한 경고처럼 말한다. 파티는 피하려고 그 말대로 이번 화 행동을 한다`,
		pressure: `파티는 ${trace}의 말이 수상하다고 대사로 말한다. 그러나 눈앞에서 누군가 위험해 시간이 없다. 파티는 의심을 남긴 채 다른 방법이 없어 이번 화 행동을 한다`,
		undo: `파티는 앞 화가 남긴 피해를 원래대로 되돌리려 한다. ${trace}이 되돌리는 방법을 알려 주고, 파티는 앞 화 실수를 취소한다고 믿으며 그 방법대로 이번 화 행동을 한다. 되돌린 것처럼 보이지만 피해는 더 커진다`,
		tradeoff: `${trace}이 이번 방법에는 작은 대가가 있다고 먼저 솔직하게 말한다. 파티는 그 대가를 두고 의논한 뒤, 더 큰 피해를 막으려고 감수하기로 하고 이번 화 행동을 한다. 진짜 대가는 말한 것보다 훨씬 크다`,
		bait: `${trace}이 먼저 위기처럼 보이는 일을 꾸며 보여 준다. 파티는 ${trace}을 경계하지만 그 위기는 ${trace}과 상관없어 보인다. 파티는 위기를 막으려고 서둘러 이번 화 행동을 한다. 이번 화 끝에 위기는 처음부터 없었다는 것이 드러난다`,
		piecemeal: `파티는 위험할까 봐 한 번에 하지 않고 작은 단계로 나눠서 한다 (단계마다 장면으로). ${trace}이 단계마다 "여기까지는 괜찮다"고 확인해 준다. 다 마친 뒤에야 단계들이 합쳐져 이번 화 행동이 되었다는 것이 보인다`,
		gift: `${trace}이 먼저 파티의 작은 문제 하나를 조건 없이 해결해 준다 (진짜 도움). 파티는 의심을 조금 내려놓는다. 이어 ${trace}이 다른 사람을 위한 작은 부탁처럼 이번 화 행동을 권하고, 파티는 받은 도움도 있고 그 사람을 돕고 싶어 들어준다`
	};

	const prevActions = [1, 2, 3, 4]
		.filter((o) => o < order)
		.map((o) => `- ${o}화: ${actionOf(arc, o)} (흔적: ${traceOf(arc, o)})`);
	// 5화: 1~4화 행동이 사실은 모두 같은 일이었다는 연결 (1~4화에는 넘기지 않는다 — 대사에 새어 나온다)
	const links = [1, 2, 3, 4].map(
		(o) =>
			`- ${o}화 "${actionOf(arc, o)}" (흔적: ${traceOf(arc, o)}): ${hiddenLinkOf(arc, o) || '-'}`
	);

	const themePool = (npc_by_theme[arc.theme as keyof typeof npc_by_theme] ?? []) as readonly {
		key: string;
		name: { korean: string };
	}[];
	const npcKeys = [
		...new Set([...Object.keys(arc.npc_roles ?? {}), ...arc.scenarioOutline.map((s) => s.npc)])
	];
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
	const forThisOrder = <T>(items: T[]) =>
		scenario.act === 'rising' ? items.filter((_, i) => i % 3 === order - 2) : items;
	const plants = forThisOrder(
		arc.global_foreshadowing.filter((f) => f.plant_act === scenario.act)
	).map((f) => `- ${f.hint}`);
	const reveals = forThisOrder(
		arc.global_foreshadowing.filter((f) => f.reveal_act === scenario.act)
	).map((f) => `- ${f.reveal_context}`);

	const scenes = isFinale
		? `- 방 1: 첫 줄은 narrator 가 지금 상황을 한 문장으로 알려 준다. 앞 화들의 나쁜 결과가 쌓인 모습이 보인다
- 방 3~9: 파티가 1~4화에 한 행동들이 겉모습만 달랐을 뿐 모두 같은 일(${arc.wrong_action ?? ''})이었고, 화마다 다르던 흔적이 모두 ${boss}였다는 것을 깨닫는다 (아래 "1~4화 행동의 숨은 연결"). 그 계기 장면을 보여 준다
- 그 다음 정답 쪽으로 움직인다. 정답 행동은 파티(character_any)가 스스로 깨달아 처음 말한다. NPC 가 먼저 정답을 알려 주지 않는다. ${anyWarn ? '앞 화들에서 일반 보스에게 들은 경고가 맞았다는 것을 깨닫는 것도 계기가 될 수 있다.' : ''} ${boss}는 ${trace}을 통해 마지막으로 막으려 한다 (어느 방에 둘지는 이야기에 맞게)
- 방 15: ${boss}가 처음으로 모습을 드러내며 막아선다 → 전투
  - win_dialogue: 주인공이 정답 행동을 해낸다 → ${boss}가 무너진다 → 망가졌던 것이 눈에 보이게 돌아온다
  - lose_dialogue: 짧게
- epilogue: 돌아온 무대의 모습으로 끝낸다`
		: `- 방 1: 첫 줄은 narrator 가 지금 상황을 한 문장으로 알려 준다
${
	later
		? `- 방 1~3 어딘가: 앞 화가 남긴 피해가 보인다. 파티가 앞 화에서 배운 것(아래 "앞 화에서 배운 것")은 말보다 행동으로 보여 준다. "지난번처럼 ~" 같은 회상 대사를 매화 되풀이하지 않는다. 앞 화의 행동은 다시 하지 않는다
`
		: ''
}- 방 1~9 어딘가: 주 NPC 가 나온다 / 이번 화의 새 의문 하나가 나온다 / 이번 화 행동을 하고, 당장은 효과를 본다
- 이번 화에 속는 방식: ${modeScene[mode] ?? modeScene.direct}
${
	later
		? `  - 파티는 두 번 당하지 않으려고 조심한다. "이번엔 다르니까 괜찮아" 같은 핑계 대사로 넘어가지 않는다. 조심하는 모습이 위 방식대로 장면에 보인다
`
		: ''
}- 나쁜 결과는 그 뒤에 드러난다 (늦어도 방 15 win_dialogue). 이번 화 행동을 하자마자 수상한 일이 생기게 쓰지 않는다
- 나쁜 결과가 드러난 뒤, 왜 그렇게 됐는지(USER "왜 그렇게 되는지")를 NPC 나 파티가 눈앞의 일로 확인하고 쉬운 말 한 줄로 말한다. 플레이어가 대본을 한 번 읽고 원인을 알 수 있게
- 파티가 아는 것과 모르는 것
  - 이번 화 행동이 나쁜 결과를 낳았다는 것은 알아도 된다 (다음 화에서 이 행동은 다시 하지 않는다)
  - 모르는 것: ${later ? `${trace}이 앞 화의 흔적과 같은 존재라는 것 / 이번 행동이 사실은 앞 화와 같은 일이라는 것 / ` : ''}1~4화의 일들이 모두 한 존재의 짓이라는 것. 이것들은 5화에 깨닫는다. 파티가 이것을 짐작하거나 말하지 않는다
- ${boss}의 말(${trace})은 친절한 조언처럼 들린다. 지문이 그 말을 "수상한·기분 나쁜·섬뜩한" 목소리로 그리지 않는다 (파티가 알고도 따르는 사람이 된다)${later ? `. 파티가 대사로 의심하는 것은 된다` : ''}
- 주인공이 틀린 행동을 하기 전에는 prologue·지문이 그 행동의 나쁜 결과(세계 규칙)를 알려 주지 않는다. 경고문·전단지·표지판 같은 경고도 쓰지 않는다 (경고는 일반 보스만${mode === 'avoid' ? `. ${trace}의 "대신 이렇게 하라"는 말은 된다` : ''}${mode === 'tradeoff' ? `. ${trace}이 작은 대가를 미리 말하는 것은 된다 (진짜 결과는 말하지 않는다)` : ''})
  - 어느 방에서 무엇을 할지는 이야기에 맞게 정한다. 앞 화와 같은 순서·같은 장면이 되지 않게 한다
- 방 15: 일반 보스가 ${rbWarns ? '주인공이 이번 화 행동을 (더) 하지 못하게' : '주인공이 더 캐거나 나아가지 못하게'} 막아선다 → 전투
  - win_dialogue: 나쁜 결과는 남아 있다. 파티가 그 결과 앞에서 앞 화와 다르게 움직인다 (아래 "히어로 성장"). 다음 화로 이어지는 기미 한 줄
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
- 1~4화 prologue 는 장소·인물·분위기만 쓴다. 핵심 물건으로 무엇을 하면 어떻게 되는지 쓰지 않는다

# 이번 화 장면
${scenes}

# 히어로 성장 (파티는 화마다 자란다)
- 파티는 매화 같은 사람이 아니다. 앞 화에서 배운 것을 꼭 써먹지 않아도 되지만, 앞 화와 같은 행동·반응·말을 되풀이하지 않는다${prevParty.length ? ' (USER "앞 화에서 파티가 한 말")' : ''}
- 화마다 아래 셋이 앞 화와 달라야 한다
  - 일반 보스를 대하는 법 (같은 핑계로 뿌리치기를 매화 되풀이하지 않는다. 설득하기, 조건을 걸기, 피해 가기, 시간을 벌기 등 화마다 다른 방법)
  - 나쁜 결과를 봤을 때 하는 일 (자책·한탄만 하지 않는다. 다친 사람을 챙기기, 직접 수습하기, 피해를 기록하기 등 손으로 하는 일)
  - 방 15 win_dialogue 를 끝맺는 말 ("이겼지만…", "또 우리가 잘못했다", "다음엔 반드시…" 같은 자책·다짐으로 매화 끝내지 않는다)
- 화가 갈수록 파티는 더 침착하고 능숙해진다. 앞 화에서 처음 해 본 일은 이번 화에 익숙하게 하고, 새로운 일을 하나 더 해 본다
${isFinale ? '- 5화의 파티는 1~4화를 거치며 달라진 모습으로 정답 행동을 해낸다. 1화 때처럼 허둥대거나 한탄하지 않는다\n' : ''}
# 화자
- narrator: 장면·행동 묘사. 짧고 건조한 "~다" 문체
- character_any: 파티가 하는 중요한 말 (단서·결론·결심). 줄마다 살아있는 파티원 중 한 명이 무작위로 말한다
  - 누가 말해도 말이 되는 한 줄로 쓴다. character_any 끼리 묻고 답하지 않고, 한 사람의 말을 여러 줄로 잇지 않는다
  - 파티가 1명일 수도 있다. 파티 대사는 파티원끼리의 대화가 아니다. 다른 파티원에게 제안하지 않고("~하는 게 어때?"), 바로 앞 파티 대사에 동의·의심·반대하지 않는다. 결정은 한 줄로 말한다 (예: "[누구]를 위해 해 보자")
- character_1~4: 짧은 감정 반응 한 마디. 그 파티원이 죽었으면 줄이 빠진다
  - 지워도 흐름이 이어지게 쓴다. 질문(물음표)·핵심 정보·묘사를 넣지 않고, 이 줄에 누가 대답하지 않는다. 혼잣말로도 말이 되게 쓴다
- NPC: 아래 NPC 목록의 key 를 speaker 로 쓴다. 목록에 없는 NPC 는 쓰지 않는다
- random_boss: 1~4화의 일반 보스 (방 15 밖에서는 방 하나에만 나온다). 그 화의 직업으로 부르고, 이름·외형·사연은 쓰지 않는다. 그 화의 편(아래 "일반 보스")대로 막는 말을 한다. 이름이 꼭 필요하면 {random_boss}
- boss: 5화 방 15 에서만. 1~4화에는 쓰지 않는다. 5화에는 random_boss 를 쓰지 않는다
- 주고받는 대화는 character_any ↔ NPC / random_boss / boss 사이에서 한다

# 최종보스 ${boss}
${
	isFinale
		? `- 방 9 까지는 ${trace}을 통해서만 드러나고, 방 15 에서 처음으로 모습을 드러낸다 (speaker 'boss')
- 끝까지 정답 행동을 막다가 진다. 정답을 반기거나 돕지 않는다`
		: `- 이번 화에는 얼굴·몸이 나오지 않는다. 말은 ${trace}을 통해서만 전해진다
- 그 말은 narrator 지문 안에 따옴표로 담거나, NPC 가 전해 준다
- 일반 보스와 다른 존재다. 섞지 않는다`
}
${
	isFinale
		? `- 이름 소개: 파티는 처음에 "${boss}"라는 이름을 모른다. 이름을 처음 꺼낼 때는 NPC 가 전하거나 ${trace}에 이름이 드러나는 장면으로 소개하고, 파티가 반응한다. 파티·prologue 가 이름을 먼저 쓰지 않는다`
		: `- 이번 화에는 "${boss}"라는 이름을 대사·지문·prologue 어디에도 쓰지 않는다. ${trace}으로만 부른다`
}

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
- 이 세계에서는: ${arc.world.rule}${arc.world.how ? `\n- 왜 그렇게 되는지: ${arc.world.how}` : ''}

## 줄거리${isFinale ? '' : ' (5화는 아직 비밀)'}
${spine}

## 이번 화에 일어나는 일${scenario.place ? `\n- 장소: ${scenario.place}` : ''}
${scenario.summary}

## 핵심 물건과 주인공의 행동
- 핵심 물건: ${arc.key_object ?? ''}
- ${isFinale ? `이번 화 주인공의 행동 (정답): ${arc.right_action ?? ''}` : `이번 화 주인공의 행동 (틀린 행동): ${action}`}
${
	isFinale
		? `
## 1~4화 행동의 숨은 연결 (이번 화에 파티가 깨닫는 것)
- 겉모습은 달랐지만 모두 "${arc.wrong_action ?? ''}"과 같은 일이었다
${links.join('\n')}`
		: `- (이번 화에는 아무도 하지 않는 정답 행동: ${arc.right_action ?? ''})${
				prevActions.length
					? `\n- 앞 화들에서 주인공이 한 행동 (이번 화에는 다시 하지 않는다):\n${prevActions.join('\n')}`
					: ''
			}${lesson ? `\n\n## 앞 화에서 배운 것\n- ${lesson}` : ''}`
}

## 최종보스
- ${boss} (호칭 없이 이 이름으로만 부른다)
- 이번 화에 드러나는 방법: ${trace}
${
	isFinale
		? `- 모습: ${arc.final_boss.appearance_boss ?? arc.final_boss.appearance ?? ''}
- 정체: ${arc.final_boss.true_identity}
- 마지막 장면: ${arc.final_boss.twist}${arc.final_boss.want ? `\n- 보스가 이 일로 얻으려던 것 (보스가 대사로 직접 밝힌다): ${arc.final_boss.want}` : ''}`
		: `- 사람들이 아는 모습: ${arc.final_boss.surface_identity}`
}
${
	isFinale
		? ''
		: `\n## 일반 보스\n- ${rbTitle}. 이 직업답게 말하고 주인공을 막아선다 (다른 화의 일반 보스와는 다른 사람)
${
	rbWarns
		? `- 이 화 일반 보스는 최종보스 편이 아니다. 경고하는 쪽이다. 주인공이 "${action}"를 하지 못하게 막으며 그러면 나쁜 일이 생긴다고 경고한다. 경고 내용은 맞다
- 다만 막는 까닭이 자기 사정(자기 일·구역·물건·규칙)처럼 들려서 파티는 경고를 믿지 않는다. 파티가 왜 믿지 않는지 대사로 말한다 (이번 화 속는 방식에 맞게: 확인해 보니 안전했다, 동료가 이미 시작했다, 지금 사람이 위험하다 등)
- 틀린 행동 전에는 한 번만 경고한다 (같은 경고를 되풀이하지 않는다). 그 뒤에는 결과를 보고 탓하거나 방 15 에서 막아선다
- 파티는 경고를 비웃거나 깔보지 않는다 ("잔소리", "예민하다" 같은 말 금지). 대신 왜 지금 이 사람을 도와야 하는지를 말한다
- 최종보스의 말(${trace})을 따르라고 하지 않는다`
		: `- 이 화 일반 보스는 최종보스 편이다. 주인공이 의심하거나, 캐묻거나, 더 나아가는 것을 막는다
- 주인공의 이번 화 행동("${action}")을 말리지 않는다. 핵심 물건에 손대지 말라는 경고를 하지 않는다`
}
- 정답 행동(${arc.right_action ?? ''})은 말하지 않는다\n`
}
## 인물의 입장
- 주인공(파티) = 플레이어 = 히어로다. 주인공은 속는 사람이지 고집부리는 사람이 아니다. 틀린 행동은 그 순간 파티가 아는 것으로는 옳은 선택으로 보여야 한다
- 파티가 이번 화 행동을 할 때는 누구를 왜 도우려는지 대사로 말한다 (선한 이유). 효율·아까움·호기심·명령이라서 하지 않는다. 경고를 들었다면 왜 믿지 않는지도
- NPC 는 파티가 이번 화 행동을 하기 전에 말리지 않는다 (도움을 청하거나, 권하거나, 함께 속는다${mode === 'npc_acts' ? '. 이번 화에는 주 NPC 가 먼저 혼자 시작해 버린다' : ''}). 결과를 보고 놀라거나 의심하는 것은 된다
- NPC 는 앞에서 한 말과 같은 입장에서 반응한다. 틀린 행동을 부추기거나 그 소문을 전한 NPC 가 나쁜 결과를 보고 갑자기 주인공을 탓하지 않는다 (같이 당황하거나 놀란다). 마음을 바꾸는 NPC 는 그 계기 장면을 먼저 보여 준다

## NPC
- 이번 화의 주 NPC: ${scenario.npc} = ${nameOf(scenario.npc)}${mainRole?.title ? ` (${mainRole.title})` : ''}
${persona ? `- 성격: ${persona}\n` : ''}${mainRole ? `- 이 이야기에서: ${mainRole.role}\n` : ''}${
		turner
			? `- 이번 화에 ${nameOf(turner)}이(가) 마음을 바꾼다. 계기: ${arc.npc_roles?.[turner]?.turn_scene ?? ''}\n`
			: ''
	}- 등장할 수 있는 NPC:
${npcList}
${plants.length ? `\n## 이번 화에 흘릴 단서 (자연스럽게. 틀린 행동과 이어지는 이상 징후라면 주인공이 틀린 행동을 한 뒤에 흘린다)\n${plants.join('\n')}\n` : ''}${reveals.length ? `\n## 이번 화에 밝혀질 것\n${reveals.join('\n')}\n` : ''}
## 분위기
${arc.act_tone[scenario.act as keyof typeof arc.act_tone]?.mood ?? ''}${
		prevParty.length
			? `\n\n## 앞 화에서 파티가 한 말 (이 행동·반응·표현을 되풀이하지 않는다. 파티는 그 뒤로 자랐다)\n${prevParty
					.map((p) => `### ${p.order}화\n${p.lines.slice(0, 30).map((l) => `- ${l}`).join('\n')}`)
					.join('\n')}`
			: ''
	}`;

	return `${SYSTEM}\n\n---\n\n${USER}`;
}
