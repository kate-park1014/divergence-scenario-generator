// 시리즈 스토리아크 생성기.
// 보스 1명을 N편(도입→…→엔딩)에 걸쳐 점진적으로 풀어내는 시리즈를 만든다.
// 2단계: ① buildSeriesPlanPrompt(비트시트) → ② buildSeriesChapterPrompt(편별).
// storyarcGen.ts(단일 아크/시퀄)와 별개. orchestrator가 id/level/pool 등 결정론적 필드를 주입한다.

export type SeriesBossInput = {
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

function npcListText(npcs: NpcInput[]): string {
	return npcs.map((n) => `- key: "${n.key}" | 이름: ${n.name_korean} (${n.name_english})`).join('\n');
}

function bossBlock(boss: SeriesBossInput): string {
	return `id: ${boss.id}
name: ${boss.name}
appearance: ${boss.appearance}
surface_identity: ${boss.surface_identity}
true_identity: ${boss.true_identity}
motivation: ${boss.motivation}
twist: ${boss.twist}`;
}

// ─────────────────────────────────────────────────────────────
// ① 비트시트 (시리즈 전체 설계)
// ─────────────────────────────────────────────────────────────
export function buildSeriesPlanPrompt(
	boss: SeriesBossInput,
	npcs: NpcInput[],
	theme: string,
	totalChapters: number
): string {
	const SYSTEM = `당신은 막장 웹툰 스타일의 게임 시리즈 설계자입니다.
보스 한 명의 이야기를 ${totalChapters}편짜리 시리즈로 설계하는 "비트시트"를 만듭니다.

# 시리즈 설계 원칙
- 핵심 드라마는 surface_identity(처음 보이는 모습)와 true_identity(진짜 정체)의 갭이다.
- ${totalChapters}편에 걸쳐 reveal을 점진적으로: 1편은 surface 위주, 중간편은 true_identity 단서가 서서히, 마지막 ${totalChapters}편에서 twist가 완전히 터진다.
- NPC throughline: 같은 NPC들이 편을 가로질러 하나의 호(arc)를 그린다. 각 편에서 역할이 조금씩 발전해 마지막 편에서 수렴한다.
- 복선(foreshadowing): 앞 편에서 심고 뒤 편(특히 마지막)에서 회수되도록 배분.
- 주어진 NPC 목록에서만 고른다. 한 시리즈에 핵심 NPC 3명 안팎을 일관되게 쓰는 것을 권장.`;

	const USER = `다음 보스로 ${totalChapters}편 시리즈 비트시트를 설계해주세요.

## 테마
${theme}

## 보스 캐릭터 (정체 정보의 원천 — 이 내용을 ${totalChapters}편에 배분)
${bossBlock(boss)}

## 사용 가능한 NPC 목록
${npcListText(npcs)}

## 요구사항
- chapters 배열은 정확히 ${totalChapters}개 (chapter: 1..${totalChapters}).
- 각 chapter: focus(이 편의 핵심), reveal_level(이 편에서 true_identity가 얼마나 드러나는지: 0~1 또는 짧은 설명), npc_throughline(이 편에 등장하는 NPC key별 역할 한 줄), foreshadow_notes(이 편에서 심거나 회수할 복선).
- 마지막 ${totalChapters}편의 reveal_level이 가장 높고 twist가 완결되어야 한다.
- npc_throughline의 key는 위 목록의 key만 사용.`;

	return `${SYSTEM}\n\n---\n\n${USER}`;
}

export const seriesPlanTool = [
	{
		type: 'function',
		function: {
			name: 'generate_series_plan',
			description: '보스 한 명의 N편 시리즈 비트시트를 생성합니다.',
			parameters: {
				type: 'object',
				properties: {
					chapters: {
						type: 'array',
						description: '편별 설계. 길이는 totalChapters와 동일.',
						items: {
							type: 'object',
							properties: {
								chapter: { type: 'integer' },
								focus: { type: 'string' },
								reveal_level: { type: 'string', description: '이 편의 true_identity 공개 정도(예: "암시만", "절반 공개", "완전 폭로")' },
								npc_throughline: {
									type: 'object',
									description: '이 편 NPC key별 역할 한 줄. 키는 NPC key.',
									additionalProperties: { type: 'string' }
								},
								foreshadow_notes: { type: 'string' }
							},
							required: ['chapter', 'focus', 'reveal_level', 'npc_throughline', 'foreshadow_notes']
						}
					}
				},
				required: ['chapters']
			}
		}
	}
];

// ─────────────────────────────────────────────────────────────
// ② 편별 StoryArc 생성
// ─────────────────────────────────────────────────────────────
export function buildSeriesChapterPrompt(
	boss: SeriesBossInput,
	npcs: NpcInput[],
	theme: string,
	plan: unknown,
	chapterIndex: number,
	totalChapters: number,
	prevSummaries: string[]
): string {
	const isFinale = chapterIndex === totalChapters;
	const stage = chapterIndex === 1 ? '도입' : isFinale ? '엔딩(피날레)' : '전개';

	const prevBlock = prevSummaries.length
		? prevSummaries.map((s, i) => `### ${i + 1}편 요약\n${s}`).join('\n\n')
		: '(없음 — 이번이 1편)';

	const SYSTEM = `당신은 막장 웹툰 스타일의 게임 스토리아크 설계자입니다.
지금은 ${totalChapters}편 시리즈 중 **${chapterIndex}편(${stage})**의 완성된 StoryArc 데이터를 생성합니다.

# 핵심 원칙
- 막장 웹툰 분위기. 반전, 복선, 강렬한 감정선.
- 보스의 surface_identity와 true_identity 사이의 갭이 핵심 드라마.
- 이 편은 ${chapterIndex}/${totalChapters}편이다. ${
		chapterIndex === 1
			? 'surface 위주로 첫 조우를 그리되, 끝에서 진짜 정체의 첫 균열을 암시한다.'
			: isFinale
				? '비트시트와 이전 편들을 이어받아 twist를 완전히 터뜨리고 시리즈를 매듭짓는다. final_boss.twist는 boss_list의 twist를 이 장면에서 실현한다.'
				: 'true_identity·motivation의 단서를 더 깊이 드러낸다. 단, twist의 완전 폭로는 마지막 편을 위해 아껴둔다.'
	}
- NPC throughline: 비트시트의 이 편 계획대로 NPC 역할을 잇는다. 이전 편 요약과 모순되지 않게 연결.

# 구성 규칙
- scenarioOutline은 5개: intro 1개(order 1), rising 3개(order 2~4), climax_finale 1개(order 5).
- rising_count는 3.
- act_tone.tension: intro=1, rising=3, climax_finale=5.
- chapter_name은 9개 언어 모두 작성 (korean, english, japanese, chinese, french, spanish, vietnamese, thai, hindi).
- npc_roles: scenarioOutline에 등장하는 모든 NPC에 대해 role + arc(이번 편 + 시리즈 연결 설명) 작성. 주어진 NPC 목록의 key만 사용.
- scenarioOutline 각 항목의 npc 필드는 **NPC key 하나만** 넣는다 (쉼표로 여러 명 금지 — 한 씬에 한 NPC). intro(order 1)와 climax_finale(order 5)에 같은 NPC를 배정해 처음-끝 연결을 권장.
- final_boss: id/name은 입력값 그대로. surface_identity는 boss_list 그대로 유지. true_identity·motivation·twist는 **이 편의 공개 수준에 맞게** 작성(1편은 암시적, 마지막 편은 완전). appearance는 boss_list appearance를 이 편 장면에 맞게 변주(영문 photoreal 프롬프트 유지).
- scenarioOutline의 boss 필드는 일단 order 1~4는 'random_boss', order 5는 final_boss.id로 둔다 (orchestrator가 pool로 치환함).

# 복선(global_foreshadowing) 분산 규칙
- 4개. (plant_act, plant_room) 페어는 서로 모두 다르게, (reveal_act, reveal_room) 페어도 서로 모두 다르게.
- reveal_act는 가능한 한 climax_finale로 몰아 임팩트 강화(최소 plant_act보다 늦은 act).
- plant_room·reveal_room은 다양한 양의 정수로 분산(소수점 금지).`;

	const USER = `다음 정보로 ${chapterIndex}편(${stage}) StoryArc를 생성해주세요.

## 테마
${theme}

## 보스 캐릭터 (정체 정보의 원천)
${bossBlock(boss)}

## 시리즈 비트시트 (전체 ${totalChapters}편 설계)
${JSON.stringify(plan, null, 2)}

## 이전 편 요약 (연속성 유지용)
${prevBlock}

## 사용 가능한 NPC 목록
${npcListText(npcs)}

## 이번 편 요구사항
- 이번은 ${chapterIndex}/${totalChapters}편(${stage}). 비트시트의 chapter ${chapterIndex} 계획과 이전 편 요약을 반영.
- world.secret은 boss의 true_identity에서 도출하되, 이번 편 공개 수준에 맞게.
- global_foreshadowing의 hint는 scenarioOutline summary에 자연스럽게 녹을 복선.
- npc_roles는 scenarioOutline에 등장하는 모든 NPC에 대해 빠짐없이.`;

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

export const seriesChapterTool = [
	{
		type: 'function',
		function: {
			name: 'generate_series_chapter',
			description: '시리즈 한 편의 완성된 StoryArc 데이터를 생성합니다.',
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
							appearance: { type: 'string' },
							surface_identity: { type: 'string' },
							true_identity: { type: 'string' },
							motivation: { type: 'string' },
							twist: { type: 'string' }
						},
						required: ['id', 'name', 'appearance', 'surface_identity', 'true_identity', 'motivation', 'twist']
					},
					global_foreshadowing: {
						type: 'array',
						items: {
							type: 'object',
							properties: {
								id: { type: 'string' },
								hint: { type: 'string' },
								plant_act: { type: 'string', enum: ['intro', 'rising', 'climax_finale'] },
								plant_room: { type: 'integer', description: '정수만. 소수점 금지.' },
								reveal_act: { type: 'string', enum: ['intro', 'rising', 'climax_finale'] },
								reveal_room: { type: 'integer', description: '정수만. 소수점 금지.' },
								reveal_context: { type: 'string' }
							},
							required: ['id', 'hint', 'plant_act', 'plant_room', 'reveal_act', 'reveal_room', 'reveal_context']
						}
					},
					npc_roles: {
						type: 'object',
						description: '등장하는 모든 NPC의 서사적 역할. 키는 NPC key.',
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
								npc: { type: 'string', description: 'NPC key 하나만 (쉼표로 여러 명 금지).' },
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
