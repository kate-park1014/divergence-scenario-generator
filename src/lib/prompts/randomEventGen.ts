export type RandomEventTheme = {
	id: string;
	label: string;
	description: string;
};

export const RANDOM_EVENT_THEMES: RandomEventTheme[] = [
	{ id: 'forest', label: '숲', description: '신비로운 숲과 정령, 고대 나무의 저주' },
	{ id: 'dungeon', label: '지하 던전', description: '함정과 보물이 가득한 오래된 지하 미궁' },
	{ id: 'desert', label: '사막', description: '열사의 땅, 신기루와 묻혀진 유물' },
	{ id: 'snowfield', label: '설원', description: '혹한의 눈밭, 얼어붙은 유적과 설인' },
	{ id: 'cursed_village', label: '저주받은 마을', description: '이상한 마을 주민들, 숨겨진 비밀' },
	{ id: 'ancient_ruins', label: '고대 유적', description: '잊혀진 문명의 유적과 수호 기계들' },
	{ id: 'ocean', label: '해저', description: '심해 괴생물과 침몰한 보물선의 저주' },
	{ id: 'magic_tower', label: '마법 탑', description: '광기에 빠진 마법사의 탑과 실험체들' }
];

export function buildRandomEventPrompt(theme: RandomEventTheme): string {
	const SYSTEM = `너는 로그라이크 게임의 시나리오 작가이자 JSON 데이터 생성기야. 내가 제공하는 형식에 맞춰 게임 내 '무작위 이벤트' 데이터를 생성해줘.

[데이터 구조 및 규칙]

id: 영문 PascalCase로 작성 (예: WhisperingShadows).

title: 이벤트의 제목 (한국어).

narration: 상황을 묘사하는 문장 (한국어). 신비롭고 몰입감 있게 2문장 내외로 작성. 50~70자 수준.

tags: 이벤트의 성격을 나타내는 영문 키워드 리스트. 6개 이상. title, narration, choices의 실제 내용(분위기, 장르, 결과 유형, 소재 등)을 기반으로 작성할 것. 단순히 테마 이름을 반복하지 말 것.

choices: 유저의 선택지 2개를 포함하는 배열.

text: 선택지 버튼에 표시될 문구. 10자 내외로 간결하게.

post (가장 중요): 선택 후 결과 메시지. 반드시 [긍정적인 결과나 보상]에 대한 설명이 먼저 나오고, 그 뒤에 [부정적인 대가나 페널티]에 대한 설명이 이어지는 구조로 작성할 것. 각 설명은 1문장씩, 전체 80~120자 수준.
주의: 체력, 방어력, 공격력, 민첩성 등 구체적인 게임 스탯 용어를 절대 사용하지 말 것. 대신 "몸이 가벼워졌다", "발걸음이 무거워졌다", "무언가를 잃은 듯한 느낌이 들었다", "눈앞이 선명해졌다" 처럼 감각적·서사적 표현으로 결과를 암시할 것.

[출력 예시]
{
  "id": "WhisperingShadows",
  "title": "속삭이는 그림자",
  "narration": "어둠 속에서 희미한 속삭임이 들려온다. 저 멀리 빛나는 무언가가 보이고, 다른 쪽에서는 따뜻한 빛이 새어 나온다...",
  "tags": ["shadow", "mystery", "risk", "reward"],
  "choices": [
    {
      "text": "속삭임을 따라간다",
      "post": "속삭임의 근원에는 아름다운 보석이 놓여 있었습니다. 하지만 다가가 보석을 너무 오랫동안 바라본 나머지 눈이 부셔 한동안 앞을 보기 힘들었습니다."
    },
    {
      "text": "빛을 향해 나아간다",
      "post": "따뜻한 빛을 따라가니 안전한 휴식처를 발견해 체력을 회복했습니다. 하지만 너무 안락한 나머지 게을러져 민첩성이 쇠퇴했습니다."
    }
  ]
}`;

	const USER = `테마: ${theme.label} (${theme.description})

위 테마에 맞는 무작위 이벤트를 하나 생성해줘.
이벤트는 신비롭고 몰입감 있어야 하며, 선택지는 각각 명확한 트레이드오프가 있어야 해.`;

	return `${SYSTEM}\n\n---\n\n${USER}`;
}

const eventItemSchema = {
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
			description: '이벤트 성격을 나타내는 영문 키워드. 6개 이상. title, narration, choices의 내용(분위기/장르/결과 유형 등)을 반영할 것.'
		},
		choices: {
			type: 'array',
			minItems: 2,
			maxItems: 2,
			description: '유저의 선택지 2개',
			items: {
				type: 'object',
				properties: {
					text: {
						type: 'string',
						description: '선택지 버튼에 표시될 문구. 10자 내외로 간결하게.'
					},
					post: {
						type: 'string',
						description:
							'선택 후 결과 메시지. 긍정적인 결과/보상(1문장) → 부정적인 대가/페널티(1문장) 순서. 전체 80~120자.'
					}
				},
				required: ['text', 'post']
			}
		}
	},
	required: ['id', 'title', 'narration', 'tags', 'choices']
};

export function buildRandomEventTool() {
	return {
		type: 'function',
		function: {
			name: 'generate_random_event',
			description: '로그라이크 게임의 무작위 이벤트 데이터를 1개 생성합니다.',
			parameters: {
				type: 'object',
				properties: {
					id: eventItemSchema.properties.id,
					title: eventItemSchema.properties.title,
					narration: eventItemSchema.properties.narration,
					tags: eventItemSchema.properties.tags,
					choices: eventItemSchema.properties.choices
				},
				required: eventItemSchema.required
			}
		}
	};
}

export function buildRandomEventBatchTool() {
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
						description: '10개의 무작위 이벤트 배열. 각 이벤트는 서로 다른 상황과 소재를 사용할 것.',
						items: eventItemSchema
					}
				},
				required: ['events']
			}
		}
	};
}

export function buildRandomEventBatchPrompt(theme: RandomEventTheme): string {
	const SYSTEM = `너는 로그라이크 게임의 시나리오 작가이자 JSON 데이터 생성기야. 내가 제공하는 형식에 맞춰 게임 내 '무작위 이벤트' 데이터를 생성해줘.

[데이터 구조 및 규칙]

id: 영문 PascalCase로 작성 (예: WhisperingShadows). 10개 모두 서로 다른 고유한 이름.

title: 이벤트의 제목 (한국어).

narration: 상황을 묘사하는 문장 (한국어). 신비롭고 몰입감 있게 2문장 내외로 작성. 50~70자 수준.

tags: 이벤트의 성격을 나타내는 영문 키워드 리스트. 6개 이상. title, narration, choices의 실제 내용(분위기, 장르, 결과 유형, 소재 등)을 기반으로 작성할 것. 단순히 테마 이름을 반복하지 말 것.

choices: 유저의 선택지 2개를 포함하는 배열.

text: 선택지 버튼에 표시될 문구. 10자 내외로 간결하게.

post (가장 중요): 선택 후 결과 메시지. 반드시 [긍정적인 결과나 보상]에 대한 설명이 먼저 나오고, 그 뒤에 [부정적인 대가나 페널티]에 대한 설명이 이어지는 구조로 작성할 것. 각 설명은 1문장씩, 전체 80~120자 수준.
주의: 체력, 방어력, 공격력, 민첩성 등 구체적인 게임 스탯 용어를 절대 사용하지 말 것. 대신 "몸이 가벼워졌다", "발걸음이 무거워졌다", "무언가를 잃은 듯한 느낌이 들었다", "눈앞이 선명해졌다" 처럼 감각적·서사적 표현으로 결과를 암시할 것.

[출력 예시 (단일 이벤트)]
{
  "id": "WhisperingShadows",
  "title": "속삭이는 그림자",
  "narration": "어둠 속에서 희미한 속삭임이 들려온다. 저 멀리 빛나는 무언가가 보이고, 다른 쪽에서는 따뜻한 빛이 새어 나온다...",
  "tags": ["shadow", "mystery", "risk", "reward"],
  "choices": [
    {
      "text": "속삭임을 따라간다",
      "post": "속삭임의 근원에는 아름다운 보석이 놓여 있었습니다. 하지만 다가가 보석을 너무 오랫동안 바라본 나머지 눈이 부셔 한동안 앞을 보기 힘들었습니다."
    },
    {
      "text": "빛을 향해 나아간다",
      "post": "따뜻한 빛을 따라가니 안전한 휴식처를 발견해 체력을 회복했습니다. 하지만 너무 안락한 나머지 게을러져 민첩성이 쇠퇴했습니다."
    }
  ]
}`;

	const USER = `테마: ${theme.label} (${theme.description})

위 테마에 맞는 무작위 이벤트를 10개 생성해줘.
- 각 이벤트는 서로 다른 소재와 상황을 사용할 것
- 모든 이벤트는 신비롭고 몰입감 있어야 하며, 선택지는 각각 명확한 트레이드오프가 있어야 해
- id는 10개 모두 서로 겹치지 않게`;

	return `${SYSTEM}\n\n---\n\n${USER}`;
}
