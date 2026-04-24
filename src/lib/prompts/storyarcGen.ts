export type BossInput = {
	id: string;
	name: string;
	appearance: string;
	surface_identity: string;
	true_identity: string;
	motivation: string;
	twist: string;
};

export type NpcInput = {
	key: string;
	name_korean: string;
	name_english: string;
};

export function buildStoryarcPrompt(boss: BossInput, npcs: NpcInput[], theme: string): string {
	const npcList = npcs.map((n) => `- key: "${n.key}" | 이름: ${n.name_korean} (${n.name_english})`).join('\n');

	const SYSTEM = `당신은 막장 웹툰 스타일의 게임 스토리아크 설계자입니다.
보스 캐릭터 정보와 NPC 목록을 받아 완성된 StoryArc 데이터를 생성합니다.

# 핵심 원칙
- 막장 웹툰 분위기. 반전, 복선, 강렬한 감정선
- 보스의 surface_identity와 true_identity 사이의 갭이 핵심 드라마
- NPC들은 각자 고유한 서사적 역할을 가진다 — npc_roles 필수
- 같은 NPC가 여러 시나리오에 등장할 때 서사가 연결되어야 한다
- scenarioOutline은 5개: intro 1개, rising 3개, climax_finale 1개
- global_foreshadowing은 4개: 복선은 자연스럽게, 티 내지 말 것

# 구성 규칙
- rising_count는 항상 3
- scenarioOutline order 1~4: boss는 'pool_XXX' 형식 (예: pool_021)
- scenarioOutline order 5 (climax_finale): boss는 'random_boss'
- act_tone.tension: intro=1, rising=3, climax_finale=5
- chapter_name은 9개 언어 모두 작성 (korean, english, japanese, chinese, french, spanish, vietnamese, thai, hindi)
- npc_roles: 등장하는 모든 NPC에 대해 role(역할 레이블)과 arc(서사 연결 설명) 작성
  - arc는 "N화에서 ~하는 인물. M화에서 ~하며 연결되는 역할" 형태로 등장 간 연결 명시

# NPC 배정 규칙
- 주어진 NPC 목록에서만 선택
- NPC는 한 시나리오에 한 명. 같은 NPC가 여러 시나리오에 나와도 무방
- intro와 climax_finale에 같은 NPC를 배정해 처음-끝 연결을 만들 것을 권장`;

	const USER = `다음 보스 정보와 NPC 목록으로 완성된 StoryArc를 생성해주세요.

## 테마
${theme}

## 보스 캐릭터
id: ${boss.id}
name: ${boss.name}
appearance: ${boss.appearance}
surface_identity: ${boss.surface_identity}
true_identity: ${boss.true_identity}
motivation: ${boss.motivation}
twist: ${boss.twist}

## 사용 가능한 NPC 목록
${npcList}

## 요구사항
- id는 "${theme}_${boss.id.toLowerCase().replace(/[^a-z0-9]/g, '_')}" 형식으로 생성
- 보스의 true_identity에서 세계관 secret을 도출
- global_foreshadowing의 hint는 실제 시나리오 summary에 녹아들 수 있는 자연스러운 복선
- npc_roles는 scenarioOutline에 등장하는 모든 NPC에 대해 빠짐없이 작성`;

	return `${SYSTEM}\n\n---\n\n${USER}`;
}

const multiLangTextSchema = {
	type: 'object',
	properties: {
		korean: { type: 'string' },
		english: { type: 'string' },
		japanese: { type: 'string' },
		chinese: { type: 'string' },
		french: { type: 'string' },
		spanish: { type: 'string' },
		vietnamese: { type: 'string' },
		thai: { type: 'string' },
		hindi: { type: 'string' }
	},
	required: ['korean', 'english', 'japanese', 'chinese', 'french', 'spanish', 'vietnamese', 'thai', 'hindi']
};

const actToneSchema = {
	type: 'object',
	properties: {
		mood: { type: 'string' },
		tension: { type: 'number' },
		narrative_role: { type: 'string' }
	},
	required: ['mood', 'tension', 'narrative_role']
};

export const storyarcGenTool = [
	{
		type: 'function',
		function: {
			name: 'generate_storyarc',
			description: '보스와 NPC 정보를 바탕으로 완성된 StoryArc 데이터를 생성합니다.',
			parameters: {
				type: 'object',
				properties: {
					id: { type: 'string' },
					chapter_name: multiLangTextSchema,
					theme: { type: 'string' },
					rising_count: { type: 'number' },
					world: {
						type: 'object',
						properties: {
							setting: { type: 'string' },
							rule: { type: 'string' },
							secret: { type: 'string' }
						},
						required: ['setting', 'rule', 'secret']
					},
					protagonist_goal: { type: 'string' },
					act_tone: {
						type: 'object',
						properties: {
							intro: actToneSchema,
							rising: actToneSchema,
							climax_finale: actToneSchema
						},
						required: ['intro', 'rising', 'climax_finale']
					},
					final_boss: {
						type: 'object',
						properties: {
							id: { type: 'string' },
							name: { type: 'string' },
							appearance_npc: { type: 'string' },
							appearance_boss: { type: 'string' },
							surface_identity: { type: 'string' },
							true_identity: { type: 'string' },
							motivation: { type: 'string' },
							twist: { type: 'string' }
						},
						required: ['id', 'name', 'appearance_npc', 'appearance_boss', 'surface_identity', 'true_identity', 'motivation', 'twist']
					},
					global_foreshadowing: {
						type: 'array',
						items: {
							type: 'object',
							properties: {
								id: { type: 'string' },
								hint: { type: 'string' },
								plant_act: { type: 'string', enum: ['intro', 'rising', 'climax_finale'] },
								plant_room: { type: 'number' },
								reveal_act: { type: 'string', enum: ['intro', 'rising', 'climax_finale'] },
								reveal_room: { type: 'number' },
								reveal_context: { type: 'string' }
							},
							required: ['id', 'hint', 'plant_act', 'plant_room', 'reveal_act', 'reveal_room', 'reveal_context']
						}
					},
					npc_roles: {
						type: 'object',
						description: '등장하는 모든 NPC의 서사적 역할. 키는 NPC key값.',
						additionalProperties: {
							type: 'object',
							properties: {
								role: { type: 'string' },
								arc: { type: 'string' }
							},
							required: ['role', 'arc']
						}
					},
					scenarioOutline: {
						type: 'array',
						items: {
							type: 'object',
							properties: {
								order: { type: 'number' },
								act: { type: 'string', enum: ['intro', 'rising', 'climax_finale'] },
								title: { type: 'string' },
								boss: { type: 'string' },
								npc: { type: 'string' },
								summary: { type: 'string' }
							},
							required: ['order', 'act', 'title', 'boss', 'npc', 'summary']
						}
					},
					act_summary: {
						type: 'object',
						properties: {
							intro: { type: 'string' },
							rising: { type: 'string' },
							climax_finale: { type: 'string' }
						},
						required: ['intro', 'rising', 'climax_finale']
					}
				},
				required: [
					'id', 'chapter_name', 'theme', 'rising_count', 'world',
					'protagonist_goal', 'act_tone', 'final_boss', 'global_foreshadowing',
					'npc_roles', 'scenarioOutline', 'act_summary'
				]
			}
		}
	}
];
