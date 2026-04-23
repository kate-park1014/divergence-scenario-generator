import type { RandomEventScenarioType } from '$lib/types';

export type RandomEventTheme = {
	id: string;
	label: string;
	description: string;
};

export const RANDOM_EVENT_THEMES: RandomEventTheme[] = [
	{ id: 'forest', label: '숲', description: '신비로운 숲과 정령, 고대 나무의 저주' },
	{ id: 'dungeon', label: '지하 던전', description: '함정과 보물이 가득한 오래된 지하 미궁' },
	{ id: 'desert', label: '사막', description: '열사의 땅, 신기루와 묻혀진 유물' },
	{ id: 'snowy', label: '설원', description: '혹한의 눈밭, 얼어붙은 유적과 설인' },
	{ id: 'cursed_village', label: '저주받은 마을', description: '이상한 마을 주민들, 숨겨진 비밀' },
	{ id: 'ancient_ruins', label: '고대 유적', description: '잊혀진 문명의 유적과 수호 기계들' },
	{ id: 'ocean', label: '해저', description: '심해 괴생물과 침몰한 보물선의 저주' },
	{ id: 'magic_tower', label: '마법 탑', description: '광기에 빠진 마법사의 탑과 실험체들' }
];

export type ScenarioTypeOption = {
	id: RandomEventScenarioType;
	label: string;
	description: string;
};

export const RANDOM_EVENT_SCENARIO_TYPES: ScenarioTypeOption[] = [
	{
		id: 'trade_off',
		label: '확정 트레이드오프형',
		description: '손해 감수 고가치 vs 작지만 확실한 보상'
	},
	{
		id: 'probability_upgrade',
		label: '확률 업그레이드형',
		description: '확정 보상 vs 리스크 없는 확률 업'
	},
	{
		id: 'random_hidden',
		label: '랜덤 히든형',
		description: '결과 미공개·힌트만 — 감수 vs 회피'
	}
];

const COMMON_RULES = `id: 영문 PascalCase로 작성 (예: WhisperingShadows). 10개 모두 서로 다른 고유한 이름.

title: 이벤트의 제목 (한국어).

narration: 상황을 묘사하는 문장 (한국어). 신비롭고 몰입감 있게 2문장 내외로 작성. 50~70자 수준.

tags: 이벤트의 성격을 나타내는 영문 키워드 리스트. 6개 이상. title, narration, choices의 실제 내용(분위기, 장르, 결과 유형, 소재 등)을 기반으로 작성할 것. 단순히 테마 이름을 반복하지 말 것.

scenario_type: 이 배치의 시나리오 타입. 모든 이벤트에 동일한 값을 넣을 것.

choices: 유저의 선택지 2개를 포함하는 배열.

text: 선택지 버튼에 표시될 문구. 10자 내외로 간결하게.

[공통 금지 사항]
- 체력, 방어력, 공격력, 민첩성 등 구체적인 게임 스탯 용어를 절대 사용하지 말 것
- 대신 "몸이 가벼워졌다", "발걸음이 무거워졌다", "무언가를 잃은 듯한 느낌이 들었다", "눈앞이 선명해졌다" 처럼 감각적·서사적 표현으로 결과를 암시할 것`;

const TRADE_OFF_RULES = `[시나리오 타입: trade_off — 확정 트레이드오프형]

이 타입은 "손해를 감수하고 확정적인 고가치 보상을 얻는" 구조다. 두 선택지가 서로 다른 리스크/보상 구조를 가진다.

choice[0] (고가치 트레이드오프):
  post = [확실한 부정 대가/페널티(1문장)] → [높은 등급의 긍정 보상/결과(1문장)]
  전체 80~120자. 부정이 먼저, 긍정이 뒤.

choice[1] (안전한 소규모 보상):
  post = [작지만 확실한 긍정 효과(1~2문장)]
  전체 40~90자. 부정적인 서술 금지. 순수하게 긍정적인 결과만.

[출력 예시 (단일 이벤트)]
{
  "id": "WhisperingShadows",
  "title": "속삭이는 그림자",
  "narration": "어둠 속에서 희미한 속삭임이 들려온다. 저 멀리 빛나는 무언가가 보이고, 다른 쪽에서는 따뜻한 빛이 새어 나온다...",
  "tags": ["shadow", "mystery", "risk", "reward", "trade_off", "temptation"],
  "scenario_type": "trade_off",
  "choices": [
    {
      "text": "속삭임을 따라간다",
      "post": "너무 오래 응시한 탓에 눈앞이 한동안 어지럽게 흐려졌다. 하지만 손끝엔 오래된 보석이 차갑게 쥐어져 있었다."
    },
    {
      "text": "빛을 향해 나아간다",
      "post": "따뜻한 빛 아래에서 잠시 쉬자 기운이 맑게 차올랐다."
    }
  ]
}`;

const PROBABILITY_UPGRADE_RULES = `[시나리오 타입: probability_upgrade — 확률 업그레이드형]

이 타입은 "리스크 없이 보상의 질을 확률로 상승시키는" 구조다. 두 선택지 모두 부정적 대가가 없고, 다만 한쪽은 확정적인 보상, 다른 쪽은 확률적으로 더 좋은 보상이다.

choice[0] (안전한 확정 보상):
  post = [확정적인 긍정 보상(1~2문장)]
  전체 40~90자. 부정적인 서술 절대 금지.

choice[1] (확률 업그레이드):
  post 필드를 사용하지 말 것. 대신 post_success와 post_fail을 각각 작성.

  post_success = [높은 등급 보상을 받은 서사적 결과(1~2문장)]
    전체 40~90자. 명확히 긍정적인 감각 표현. 부정 서술 금지. % 숫자 금지.

  post_fail = [아무 보상도 받지 못한 결과(1문장)]
    전체 30~70자. 중립~경미한 아쉬움 표현 가능. 손해나 페널티 서술 금지. % 숫자 금지.
    예: "기운이 모였다가 흩어졌다. 아무것도 남지 않았다."

[출력 예시 (단일 이벤트)]
{
  "id": "WhisperingShadows",
  "title": "속삭이는 그림자",
  "narration": "어둠 속에서 희미한 속삭임이 들려온다. 저 멀리 빛나는 무언가가 보이고, 다른 쪽에서는 따뜻한 빛이 새어 나온다...",
  "tags": ["shadow", "mystery", "chance", "reward", "probability_upgrade", "fortune"],
  "scenario_type": "probability_upgrade",
  "choices": [
    {
      "text": "빛을 받아들인다",
      "post": "따뜻한 빛이 스며들어 마음 한 켠이 단단해지는 감각이 남았다."
    },
    {
      "text": "속삭임에 귀 기울인다",
      "post_success": "귓가에 스친 이름이 선명해지더니 오래된 힘이 온몸에 스며드는 감각이 남았다.",
      "post_fail": "기운이 잠시 맴돌다 조용히 사라졌다. 아무것도 남지 않았다."
    }
  ]
}`;

const RANDOM_HIDDEN_RULES = `[시나리오 타입: random_hidden — 랜덤 히든형]

이 타입은 narration에서 **힌트만** 제공하고, 긍정처럼 보이지만 위험 요소가 숨어 있음을 암시한다. choice[0]은 서버에서 70% 긍정 / 30% 부정 확률로 결과가 결정되며, 각 결과에 맞는 post_success와 post_fail을 모두 작성한다.

narration 특수 규칙:
  겉보기에는 매혹적이거나 탐스럽게 보이되, 미묘한 위화감·경고·불길한 디테일을 한 겹 숨겨 둘 것.
  예: "보석함에서 달콤한 향이 스며 나온다. 뚜껑엔 긁힌 자국이 희미하게 남아 있다."

choice[0] (선택한다 — 리스크 감수):
  text = "선택한다" / "집는다" / "받아들인다" / "열어본다" 류. 10자 내외.
  post 필드를 사용하지 말 것. 대신 post_success와 post_fail을 각각 작성.

  post_success = [긍정적 결과 서사(1~2문장)]
    전체 40~90자. 보상을 얻거나 좋은 변화가 생긴 감각 표현. 부정 서술 금지. % 숫자 금지.

  post_fail = [부정적 결과 서사(1~2문장)]
    전체 40~90자. 손해·불쾌감·무언가를 잃은 느낌 표현. 치명적 서술은 피할 것. % 숫자 금지.

choice[1] (지나간다 — 리스크 회피):
  text = "지나간다" / "돌아간다" / "외면한다" / "발길을 돌린다" 류. 10자 내외.
  post = 아무 일도 일어나지 않은 정적인 서술(1문장). 전체 30~70자.
    - 부정적 서술 금지. 긍정적 보상 서술도 금지. 중립적 통과 묘사만.
    - 예: "눈길을 돌리고 지나쳤다. 등 뒤에서 어떤 기척도 따라오지 않았다."

[출력 예시 (단일 이벤트)]
{
  "id": "VelvetBoxOffering",
  "title": "벨벳 상자의 권유",
  "narration": "길목 한가운데 놓인 벨벳 상자. 뚜껑 틈새로 달콤한 향이 새어 나오고, 모서리엔 긁힌 자국이 희미하다.",
  "tags": ["hidden", "temptation", "risk", "mystery", "random_hidden", "unknown"],
  "scenario_type": "random_hidden",
  "choices": [
    {
      "text": "열어본다",
      "post_success": "뚜껑을 들추자 달콤한 향과 함께 따뜻한 기운이 스며들었다. 손끝에 무언가 남은 듯한 감각이 오래 머물렀다.",
      "post_fail": "향이 훅 퍼지는 순간 어지러움이 밀려왔다. 무언가 빠져나간 듯 몸이 잠시 무거워졌다."
    },
    {
      "text": "지나간다",
      "post": "시선을 거두고 발걸음을 옮겼다. 상자는 그대로 놓여 있었다."
    }
  ]
}`;

function rulesFor(scenarioType: RandomEventScenarioType): string {
	if (scenarioType === 'trade_off') return TRADE_OFF_RULES;
	if (scenarioType === 'probability_upgrade') return PROBABILITY_UPGRADE_RULES;
	return RANDOM_HIDDEN_RULES;
}

export function buildRandomEventPrompt(
	theme: RandomEventTheme,
	scenarioType: RandomEventScenarioType
): string {
	const SYSTEM = `너는 로그라이크 게임의 시나리오 작가이자 JSON 데이터 생성기야. 내가 제공하는 형식에 맞춰 게임 내 '무작위 이벤트' 데이터를 생성해줘.

[데이터 구조 및 규칙]

${COMMON_RULES}

${rulesFor(scenarioType)}`;

	const USER = `테마: ${theme.label} (${theme.description})
시나리오 타입: ${scenarioType}

위 테마에 맞는 무작위 이벤트를 하나 생성해줘.
- 테마의 소재와 분위기를 narration, choice.text, post에 자연스럽게 녹일 것
- 시나리오 타입 규칙을 엄격히 지킬 것 (특히 choice별 post 구조)
- scenario_type 필드에는 반드시 "${scenarioType}" 값을 넣을 것`;

	return `${SYSTEM}\n\n---\n\n${USER}`;
}

function eventItemSchema(scenarioType: RandomEventScenarioType) {
	let choice0Desc: string;
	let choice1Desc: string;

	if (scenarioType === 'trade_off') {
		choice0Desc =
			'선택 후 결과 메시지. [부정 대가(1문장)] → [높은 등급 긍정 보상(1문장)] 순서. 전체 80~120자.';
		choice1Desc = '선택 후 결과 메시지. 작지만 확실한 긍정 효과만. 부정 서술 금지. 전체 40~90자.';
	} else if (scenarioType === 'probability_upgrade') {
		choice0Desc = '선택 후 결과 메시지. 확정적인 긍정 보상만. 부정 서술 금지. 전체 40~90자.';
		choice1Desc =
			'post 필드 사용 금지. post_success: 높은 등급 보상 획득 서사 (40~90자, 긍정만). post_fail: 보상 없음 서사 (30~70자, 손해 서술 금지). % 숫자 금지.';
	} else {
		// random_hidden
		choice0Desc =
			'post 필드 사용 금지. post_success: 긍정적 결과 서사 (40~90자, 보상/좋은 변화). post_fail: 부정적 결과 서사 (40~90자, 손해/불쾌감, 치명적 표현 금지). % 숫자 금지.';
		choice1Desc =
			'선택 후 결과 메시지. 중립적 통과 묘사. 긍정/부정 보상 서술 모두 금지. 전체 30~70자.';
	}

	return {
		type: 'object',
		properties: {
			id: {
				type: 'string',
				description: '영문 PascalCase 이벤트 ID (예: WhisperingShadows)'
			},
			title: {
				type: 'string',
				description: '이벤트 제목 (한국어)'
			},
			narration: {
				type: 'string',
				description: '상황을 묘사하는 문장 (한국어). 신비롭고 몰입감 있게, 2문장 내외 50~70자 수준.'
			},
			tags: {
				type: 'array',
				minItems: 6,
				items: { type: 'string' },
				description:
					'이벤트 성격을 나타내는 영문 키워드. 6개 이상. title, narration, choices의 내용(분위기/장르/결과 유형 등)을 반영할 것.'
			},
			scenario_type: {
				type: 'string',
				enum: [scenarioType],
				description: `이 배치의 시나리오 타입. 반드시 "${scenarioType}".`
			},
			choices: {
				type: 'array',
				minItems: 2,
				maxItems: 2,
				description: '유저의 선택지 2개. [0]과 [1]의 post 구조가 서로 다름.',
				items: {
					type: 'object',
					properties: {
						text: {
							type: 'string',
							description: '선택지 버튼에 표시될 문구. 10자 내외로 간결하게.'
						},
						post: {
							type: 'string',
							description: `choice[0]: ${choice0Desc}${scenarioType === 'probability_upgrade' ? ' / choice[1]에서는 사용 금지.' : ` / choice[1]: ${choice1Desc}`}`
						},
						post_success: {
							type: 'string',
							description:
								'probability_upgrade choice[1] / random_hidden choice[0] 전용 — 성공 시 서사.'
						},
						post_fail: {
							type: 'string',
							description:
								'probability_upgrade choice[1] / random_hidden choice[0] 전용 — 실패 시 서사.'
						}
					},
					required: ['text']
				}
			}
		},
		required: ['id', 'title', 'narration', 'tags', 'scenario_type', 'choices']
	};
}

export function buildRandomEventTool(scenarioType: RandomEventScenarioType) {
	const schema = eventItemSchema(scenarioType);
	return {
		type: 'function',
		function: {
			name: 'generate_random_event',
			description: '로그라이크 게임의 무작위 이벤트 데이터를 1개 생성합니다.',
			parameters: {
				type: 'object',
				properties: schema.properties,
				required: schema.required
			}
		}
	};
}

export function buildRandomEventBatchTool(scenarioType: RandomEventScenarioType) {
	return {
		type: 'function',
		function: {
			name: 'generate_random_events_batch',
			description: '로그라이크 게임의 무작위 이벤트 데이터를 10개 생성합니다.',
			parameters: {
				type: 'object',
				properties: {
					events: {
						type: 'array',
						minItems: 10,
						maxItems: 10,
						description:
							'10개의 무작위 이벤트 배열. 각 이벤트는 서로 다른 상황과 소재를 사용할 것. 모두 동일한 scenario_type.',
						items: eventItemSchema(scenarioType)
					}
				},
				required: ['events']
			}
		}
	};
}

export function buildRandomEventBatchPrompt(
	theme: RandomEventTheme,
	scenarioType: RandomEventScenarioType
): string {
	const SYSTEM = `너는 로그라이크 게임의 시나리오 작가이자 JSON 데이터 생성기야. 내가 제공하는 형식에 맞춰 게임 내 '무작위 이벤트' 데이터를 생성해줘.

[데이터 구조 및 규칙]

${COMMON_RULES}

${rulesFor(scenarioType)}`;

	const USER = `테마: ${theme.label} (${theme.description})
시나리오 타입: ${scenarioType}

위 테마에 맞는 무작위 이벤트를 10개 생성해줘.
- 각 이벤트는 서로 다른 소재와 상황을 사용할 것
- 테마의 소재와 분위기를 narration, choice.text, post에 자연스럽게 녹일 것
- 10개 모두 시나리오 타입 규칙을 엄격히 지킬 것 (특히 choice별 post 구조)
- scenario_type 필드에는 반드시 "${scenarioType}" 값을 넣을 것
- id는 10개 모두 서로 겹치지 않게`;

	return `${SYSTEM}\n\n---\n\n${USER}`;
}
