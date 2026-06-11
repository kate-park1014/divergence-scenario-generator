import type { StoryArc } from '../types';

export type BossInput = {
	id: string;
	name: string;
	appearance: string;
	surface_identity: string;
	true_identity: string;
	motivation: string;
	twist: string;
	zodiac_sign?: string;
};

export type NpcInput = {
	key: string;
	name_korean: string;
	name_english: string;
};

export function buildStoryarcPrompt(boss: BossInput, npcs: NpcInput[], theme: string): string {
	const npcList = npcs
		.map((n) => `- key: "${n.key}" | 이름: ${n.name_korean} (${n.name_english})`)
		.join('\n');

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
- scenarioOutline order 1~4: boss는 반드시 'random_boss' 고정 (중간보스 — 런타임에 임의 배정되므로 미리 지정하지 않는다)
- scenarioOutline order 5 (climax_finale): boss는 입력으로 받은 지정 보스의 id를 그대로 사용 (USER 섹션의 "보스 캐릭터 > id" 값. final_boss와 동일 인물)
- act_tone.tension: intro=1, rising=3, climax_finale=5
- chapter_name은 9개 언어 모두 작성 (korean, english, japanese, chinese, french, spanish, vietnamese, thai, hindi)
- npc_roles: 등장하는 모든 NPC에 대해 role(역할 레이블)과 arc(서사 연결 설명) 작성
  - arc는 "N화에서 ~하는 인물. M화에서 ~하며 연결되는 역할" 형태로 등장 간 연결 명시

# 복선(global_foreshadowing) 분산 규칙
- 4개 복선의 (plant_act, plant_room) 페어는 **서로 모두 달라야** 한다 — 두 복선이 같은 act+room에서 동시에 심어지면 안 됨
- 4개 복선의 (reveal_act, reveal_room) 페어도 **서로 모두 달라야** 한다
- reveal_act는 가능한 한 **climax_finale로 몰아서** 임팩트를 강화 (최소 plant_act보다 늦은 act여야 함)
- plant_room·reveal_room은 다양한 값으로 분산 (예: 3, 5, 7, 9, 10 같은 식으로 흩뿌릴 것 — 1·1·1·1처럼 한 방에 몰면 안 됨)
- 모든 room은 **양의 정수** (1, 2, 3, … — 소수점 절대 금지)

# NPC 배정 규칙
- 주어진 NPC 목록에서만 선택
- NPC는 한 시나리오에 한 명. 같은 NPC가 여러 시나리오에 나와도 무방
- intro와 climax_finale에 같은 NPC를 배정해 처음-끝 연결을 만들 것을 권장`;

	const USER = `다음 보스 정보와 NPC 목록으로 완성된 StoryArc를 생성해주세요.

## 테마
${theme}

## 보스 캐릭터
id: ${boss.id}
name: ${boss.name}${boss.zodiac_sign ? `\nzodiac_sign: ${boss.zodiac_sign}` : ''}
appearance: ${boss.appearance}
surface_identity: ${boss.surface_identity}
true_identity: ${boss.true_identity}
motivation: ${boss.motivation}
twist: ${boss.twist}

## 사용 가능한 NPC 목록
${npcList}

## 요구사항
- scenarioOutline order 1~4의 boss는 모두 'random_boss', order 5의 boss는 "${boss.id}" (지정 보스)로 설정
- id는 "${theme}_${boss.id.toLowerCase().replace(/[^a-z0-9]/g, '_')}" 형식으로 생성
- 보스의 true_identity에서 세계관 secret을 도출
- global_foreshadowing의 hint는 실제 시나리오 summary에 녹아들 수 있는 자연스러운 복선
- npc_roles는 scenarioOutline에 등장하는 모든 NPC에 대해 빠짐없이 작성${
		boss.zodiac_sign
			? `
- (선택) 보스의 별자리 "${boss.zodiac_sign}" 성향을 final_boss의 motivation·twist와 act_tone의 분위기에 은근히 반영. 별자리를 직접 언급하지 말고 보스가 받은 zodiac_sign 값은 final_boss.zodiac_sign 필드에 그대로 보존할 것`
			: ''
	}`;

	return `${SYSTEM}\n\n---\n\n${USER}`;
}

export function buildSequelPrompt(source: StoryArc, npcs: NpcInput[]): string {
	const npcList = npcs
		.map((n) => `- key: "${n.key}" | 이름: ${n.name_korean} (${n.name_english})`)
		.join('\n');

	const lockedFinalBossFields = JSON.stringify(
		{
			id: source.final_boss.id,
			name: source.final_boss.name,
			appearance_npc: source.final_boss.appearance_npc,
			appearance_boss: source.final_boss.appearance_boss,
			surface_identity: source.final_boss.surface_identity,
			true_identity: source.final_boss.true_identity
		},
		null,
		2
	);
	const previousMotivationTwist = JSON.stringify(
		{
			motivation: source.final_boss.motivation,
			twist: source.final_boss.twist
		},
		null,
		2
	);
	const lockedBossRefs = source.scenarioOutline
		.map((s) => `- order ${s.order} (${s.act}): boss = "${s.boss}"  // 원작 제목: ${s.title}`)
		.join('\n');

	const SYSTEM = `당신은 막장 웹툰 스타일의 게임 스토리아크 설계자입니다.
지금은 기존 스토리아크의 **후속편(Sequel)**을 설계합니다.

# 시퀄 시점 원칙
- 소스 이야기의 모든 사건은 이미 벌어졌고, 비밀(world.secret)도 폭로된 후입니다
- 1편의 보스 동기(motivation)와 클라이맥스 반전(twist)은 **이미 끝난 사건**입니다
- 새 이야기는 "그 후 세계가 어떻게 달라졌는가"에서 출발합니다
- 주인공/세계가 1편의 결과를 짊어진 상태에서 새로운 갈등이 시작됩니다

# 핵심 원칙 (1편과 동일)
- 막장 웹툰 분위기. 반전, 복선, 강렬한 감정선
- NPC들은 각자 고유한 서사적 역할 — npc_roles 필수
- 같은 NPC가 여러 시나리오에 등장할 때 서사가 연결되어야 한다
- scenarioOutline은 5개: intro 1개, rising 3개, climax_finale 1개
- global_foreshadowing은 4개. 자연스럽게, 티 내지 말 것
- rising_count는 항상 3
- act_tone.tension: intro=1, rising=3, climax_finale=5
- chapter_name은 9개 언어 모두 작성 (korean, english, japanese, chinese, french, spanish, vietnamese, thai, hindi)

# 🔒 하드 락 — 절대 수정 금지
1. **final_boss의 6개 필드**: id, name, appearance_npc, appearance_boss, surface_identity, true_identity — USER 섹션의 "락 필드" JSON을 한 글자도 바꾸지 말고 그대로 반환. 보스의 "존재 자체"는 1편과 동일합니다.
2. **scenarioOutline의 boss 필드**: 5개 항목 각각의 boss 필드는 USER 섹션에 주어진 순서대로 정확히 동일한 값을 사용. order 1의 boss는 주어진 첫 번째, order 2는 두 번째 …식으로.

# ✍️ final_boss.motivation, final_boss.twist — 새로 작성 (필수)
1편의 motivation·twist는 **이미 해결·폭로된 사건**입니다. 시퀄에서는 두 필드를 새로 작성하세요.
- 새 motivation: 1편 결말 이후의 새로운 상황·갈등에서 도출 (같은 동기를 다시 쓰지 말 것)
- 새 twist: 시퀄 클라이맥스의 새 반전
- **반드시 포함**: 두 필드 안에 1편의 핵심 인물·사건에 대한 **짧은 회상·언급 1~2문장**을 자연스럽게 녹일 것
  - 예시 톤: "이전에 ○○의 조종을 받았지", "○○가 나를 깨웠지", "그때 ○○가 흘려보낸 분노가 아직도…" 같은 1~2문장
  - ○○에는 USER 섹션에 명시된 1편 보스의 관련 인물/사건(예: 1편 twist에 등장하는 흑막의 이름)을 사용
- 새 motivation·twist는 surface_identity·true_identity(락된 보스의 정체)와 모순되지 않아야 함

# 🔓 그 외 새로 작성할 부분
- id: 소스 id와 **반드시 다른** 새 id (예: 소스가 'forest_kain'이면 'forest_kain_aftermath', 'forest_titan_echo' 등 자유롭게)
- chapter_name: 9개 언어 모두 새로 작명 (후속편 느낌 살릴 것)
- theme: 소스와 동일하게 (아래 명시)
- world.setting: "1편 종료 후 변화한 세계" 묘사
- world.rule: 동일 세계관이므로 큰 틀은 유지하되 1편 사건 이후 변화 반영 가능
- world.secret: 폭로된 1차 비밀의 여파, 혹은 새로 드러나는 2차 비밀
- protagonist_goal: 1편의 후폭풍에서 자연스럽게 도출
- act_tone: 새 분위기
- scenarioOutline의 title/summary/npc: 새로 작성 (boss 필드는 락)
- global_foreshadowing: 새로 (1편 어휘/사건 재참조 OK)
- act_summary: 새로
- npc_roles: 아래 npc 목록에서만 선택해 작성

# 복선(global_foreshadowing) 분산 규칙
- 4개 복선의 (plant_act, plant_room) 페어는 **서로 모두 달라야** 한다 — 두 복선이 같은 act+room에서 동시에 심어지면 안 됨
- 4개 복선의 (reveal_act, reveal_room) 페어도 **서로 모두 달라야** 한다
- reveal_act는 가능한 한 **climax_finale로 몰아서** 임팩트를 강화 (최소 plant_act보다 늦은 act여야 함)
- plant_room·reveal_room은 다양한 값으로 분산 (예: 3, 5, 7, 9, 10 같은 식으로 흩뿌릴 것 — 1·1·1·1처럼 한 방에 몰면 안 됨)
- 모든 room은 **양의 정수** (1, 2, 3, … — 소수점 절대 금지)

# NPC 배정 규칙
- 주어진 NPC 목록에서만 선택
- NPC는 한 시나리오에 한 명. 같은 NPC가 여러 시나리오에 등장 가능
- intro와 climax_finale에 같은 NPC를 배정해 처음-끝 연결을 만들 것을 권장`;

	const USER = `다음 소스 스토리아크의 **후속편(시퀄)**을 생성해주세요.

## 테마 (소스와 동일하게 유지)
${source.theme}

## 소스 스토리아크 요약
- id: ${source.id}
- chapter_name (korean): ${source.chapter_name.korean}
- protagonist_goal: ${source.protagonist_goal}

### world
- setting: ${source.world.setting}
- rule: ${source.world.rule}
- secret: ${source.world.secret}

### act_summary
- intro: ${source.act_summary.intro}
- rising: ${source.act_summary.rising}
- climax_finale: ${source.act_summary.climax_finale}

## 🔒 final_boss 락 필드 — 한 글자도 바꾸지 말고 그대로 출력
\`\`\`json
${lockedFinalBossFields}
\`\`\`

## 📜 1편의 motivation·twist — 이미 해결된 내용 (새로 쓰지 말 것, 흔적 참조용)
이 두 필드는 시퀄에서 **새로 작성**합니다. 아래는 1편에서 어떤 동기/반전이 이미 끝났는지 알려주는 참고 자료입니다. 새 motivation·twist를 쓸 때 이 내용에 등장하는 인물·사건을 회상·언급에 활용하세요.
\`\`\`json
${previousMotivationTwist}
\`\`\`

## 🔒 scenarioOutline의 boss 필드 — 순서대로 락
${lockedBossRefs}

## 사용 가능한 NPC 목록 (이 중에서만 선택)
${npcList}

## 요구사항
- 위 "final_boss 락 필드" 6개를 한 글자도 바꾸지 말고 그대로 반환
- final_boss.motivation, final_boss.twist는 **새로 작성** (1편 흔적 1~2문장 포함)
- scenarioOutline 5개 항목의 boss 필드를 위 락 목록 순서대로 정확히 사용
- 그 외 모든 필드(id, chapter_name, world, protagonist_goal, act_tone, npc_roles, global_foreshadowing, scenarioOutline의 boss 외 필드, act_summary)는 후속편답게 새로 작성
- id는 소스 id "${source.id}"와 반드시 다르게`;

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
	required: [
		'korean',
		'english',
		'japanese',
		'chinese',
		'french',
		'spanish',
		'vietnamese',
		'thai',
		'hindi'
	]
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
							twist: { type: 'string' },
							zodiac_sign: {
								type: 'string',
								description: '보스 별자리. 입력에 주어진 경우 그대로 보존 (선택). 없으면 생략.'
							}
						},
						required: [
							'id',
							'name',
							'appearance_npc',
							'appearance_boss',
							'surface_identity',
							'true_identity',
							'motivation',
							'twist'
						]
					},
					global_foreshadowing: {
						type: 'array',
						items: {
							type: 'object',
							properties: {
								id: { type: 'string' },
								hint: { type: 'string' },
								plant_act: { type: 'string', enum: ['intro', 'rising', 'climax_finale'] },
								plant_room: { type: 'integer', description: '정수만 허용. 소수점 금지.' },
								reveal_act: { type: 'string', enum: ['intro', 'rising', 'climax_finale'] },
								reveal_room: { type: 'integer', description: '정수만 허용. 소수점 금지.' },
								reveal_context: { type: 'string' }
							},
							required: [
								'id',
								'hint',
								'plant_act',
								'plant_room',
								'reveal_act',
								'reveal_room',
								'reveal_context'
							]
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
					'id',
					'chapter_name',
					'theme',
					'rising_count',
					'world',
					'protagonist_goal',
					'act_tone',
					'final_boss',
					'global_foreshadowing',
					'npc_roles',
					'scenarioOutline',
					'act_summary'
				]
			}
		}
	}
];
