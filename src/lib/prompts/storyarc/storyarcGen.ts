import { BOSS_TONES } from '$lib/prompts/boss/bossGen2';

export type BossInput = {
	id: string;
	name: string;
	appearance: string;
	surface_identity: string;
	true_identity: string;
	motivation: string;
	twist: string;
	tone?: string; // BOSS_TONES 의 id (comic·classic·horror·tragic·madness·noir)
	zodiac_sign?: string;
};

export type NpcInput = {
	key: string;
	name_korean: string;
	name_english: string;
};

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

// ── 스토리아크 생성 (2단계) ─────────────────────────────────────
// 1단계(writeStory): 필드 없이 5화 이야기만 쓴다. 게임 구조 제약은 여기서 지킨다.
// 2단계(fillFields): 완성된 이야기를 보고 나머지 필드를 채운다. 이야기는 바꾸지 않는다.
// mergeStoryarc 가 둘을 합친다. summary 는 1단계 story 그대로, final_boss 서사는 보스 카드 그대로.

const STORY_STYLE = `# 문체
- 쉬운 말로 쓴다. 한 번 읽고 바로 이해되어야 한다. 한 문장에 정보 하나
- 명사 앞 꾸밈말은 2개까지. 나쁜 예: "음산하고 거대한 핏빛 안개의 폐허 등대" / 좋은 예: "바닷가 절벽 위의 낡은 등대"
- 색·빛 형용사는 한 문장에 하나까지. 보스 외형(appearance)의 긴 묘사를 옮겨 쓰지 않는다
- 만든 말·칭호·어려운 한자어를 쓰지 않는다 (보스 이름·기술 이름은 예외)
- 흐린 말을 쓰지 않는다: "묘한", "알 수 없는", "애매한", "어딘가", "~같은 느낌", "암시", "진정한", "새로운 시작"`;

function bossCard(boss: BossInput): string {
	const tone = BOSS_TONES.find((t) => t.id === boss.tone);
	return `name: ${boss.name}
tone: ${tone ? `${tone.label} — ${tone.guide}` : '보스 설명의 톤을 따른다'}
appearance: ${boss.appearance}
surface_identity: ${boss.surface_identity}
true_identity: ${boss.true_identity}
motivation: ${boss.motivation}
twist: ${boss.twist}`;
}

export function buildStoryPrompt(boss: BossInput, npcs: NpcInput[], theme: string): string {
	const npcList = npcs.map((n) => `- key: "${n.key}" | 이름: ${n.name_korean}`).join('\n');
	return `당신은 웹툰 스타일 게임의 이야기 작가입니다. 보스 카드와 NPC 목록을 받아 5화짜리 짧은 이야기를 씁니다.

# 게임 구조 (반드시 지킨다)
- 5화: 1화 시작, 2~4화 전개, 5화 결말
- 1~4화에는 최종보스가 직접 나오지 않는다. 화마다 최종보스의 흔적(boss_trace: 물건·소리·자국 등) 하나가 나온다. 주인공은 아직 그게 누구 것인지 모른다
  - 보스 외형의 눈에 띄는 특징(흉터·무기·옷·장신구)을 흔적으로 써도 좋다
  - twist 가 보스의 겉모습(surface_identity)을 뒤집는다면, 1~4화에서 독자가 그 겉모습을 믿게 만든다. 보스가 직접 나올 수 없으므로 다른 인물의 말(그를 겪은 이야기)이나 그가 남긴 물건·쪽지로 보여준다. 한 번도 느껴보지 못한 겉모습은 뒤집혀도 놀랍지 않다
  - 겉모습은 surface_identity 에 적힌 그대로 보여준다. 착하게 바꾸거나 무섭게 바꾸지 않는다 (나쁜 예: "안 사면 협박하는 상인"을 "장신구를 나눠 주는 친절한 상인"으로 쓴다)
- 1~4화마다 일반 보스가 한 명 있고, 그 화 안에서 주인공과 싸운다. 일반 보스는 최종보스가 아니고 NPC 목록의 인물도 아니다. 직업으로 부른다 (random_boss_title, 화마다 다름)
  - 일반 보스의 직업은 최종보스의 정체(예: 최종보스가 연금술사면 연금술사)나 그 화 NPC 의 역할과 겹치지 않는다. 주 NPC 의 역할도 최종보스의 겉모습(surface_identity)과 겹치지 않는다 (나쁜 예: 최종보스가 길잡이인데 NPC 도 길잡이)
  - random_boss_side: warn = 주인공의 그 화 행동이 위험하다고 경고하며 막는다 / ally = 최종보스 편이다. 진실을 덮거나 주인공을 엉뚱한 쪽으로 몬다
  - 싸움은 일반 보스가 주인공을 막거나 공격해서 일어난다. 왜 공격하는지 한마디를 쓴다. 주인공이 관심 없는 물건(예: 거절한 물건)을 지키려고 싸우지 않는다
  - 그 이유는 일반 보스가 그 장소에서 지키거나 얻으려는 것 하나다 (warn: 주인공이 하려는 일이 무엇을 망치는지 / ally: 최종보스에게서 무엇을 받았는지). 말과 행동이 어긋나지 않는다 (나쁜 예: "저리 가라"면서 가려는 길을 막는다)
- 화마다 주 NPC 가 한 명 있다 (NPC 목록의 key). 주 NPC 는 사건을 움직이는 행동을 하나 한다. 주인공 옆에 있기만 하지 않는다. 같은 NPC 가 여러 화에 나와도 된다. 1화와 5화에 같은 NPC 를 두면 좋다
  - 주 NPC 를 처음 만나는 장면은 그 화 안에 쓴다. 이미 만난 상태로 화를 시작하지 않는다 (나쁜 예: "듄의 조언을 받아 골짜기로 들어선다")
- 5화는 최종보스와 싸우는 화다. 실제로 싸우는 장면이 있고, 결말 행동(right_action)은 싸움 도중이나 이긴 직후에 한다

# 이야기 규칙
- logline 을 먼저 쓴다: "[주인공]이 [무대]에서 [무엇을 하다가] [보스의 진짜 정체]를 알게 되는 이야기" 한 문장. 다섯 화는 모두 이 문장에서 나온다
- 톤은 보스 카드의 tone 을 따른다. 보스의 동기는 motivation 하나이고, 반전은 twist 를 따른다. 보스 설정을 바꾸거나 덧붙이지 않는다
  - motive_scene: 보스 카드의 동기를 만든 사건을 누가 무엇을 했는지 한 장면으로 정한다 ("배신당했다"를 장면으로 보여주는 것이지 설정을 덧붙이는 게 아니다). 2~4화의 흔적·NPC 말에 그 일부가 나온다
- key_object·wrong_action·right_action 은 보스의 motivation 에서 정한다. 보스가 원하는 것이나 화나는 이유에 직접 걸린 물건과 행동이다
  - 예: 등대 불이 꺼지는 것을 못 견디는 보스 → key_object=등불, wrong_action=등불을 끈다, right_action=등불을 다시 켠다
  - 1화에 주인공은 wrong_action 을 한다 (아직 아무것도 모르니까). 2~4화는 그 결과를 겪으며 의심하고 알아내는 과정이다. 5화에 right_action 을 한다
  - right_action 이 무엇을 풀거나 멈추는지는 2~4화 중 한 화에서 NPC 의 말이나 물건으로 먼저 알려준다. 5화에 처음 나오는 해결법은 쓰지 않는다
  - 주인공은 위험하다고 알게 된 일을 다시 하지 않는다. 2~4화에 wrong_action 이 또 나온다면 주인공이 아직 모르는 상태이거나, 다른 인물이 하는 것이다
  - 1~4화에 핵심 물건이 어디서 나오는지 쓴다 (누가 왜 건넸는지, 어디에 있었는지). 최종보스가 직접 건네지 않는다
- 사건 줄기는 하나다. 보스와 상관없는 곁가지 사건이나 장치 조작을 만들지 않는다
- 2~4화마다 주인공이 최종보스에 대해 새로 알게 되는 사실(new_fact)이 하나씩 있다. 같은 일을 반복하지 않고, 화가 지날수록 정체에 가까워진다
  - true_identity·motivation 을 확정하는 것은 5화다. 2~4화의 new_fact 는 소문·의심·단서까지만 쓴다 (나쁜 예: 3화 "주인공은 상인이 사실 검객이라는 사실을 깨닫는다")
- 주인공의 행동에는 이유가 있다: 무엇을 보고, 누구 말을 듣고 그렇게 하는지 쓴다
- 주인공이 이 일을 끝까지 쫓는 이유(stakes)를 1화에서 만든다. 쫓지 않으면 주인공이나 동료가 잃는 것이 있어야 한다 (길이 막힌다, 동료가 다친다, 돌아갈 수 없다 등). 호기심만으로 쫓지 않는다
  - 2~4화의 첫 문장은 이 이유 때문에 다음 장소로 가는 것으로 시작한다. "소문을 따라 이동한다"처럼 이유 없이 옮겨 가지 않는다
  - 이 사건의 원인을 보스에게 둘 때 억지 동기(예: 서운해서 길을 막는다)를 만들지 않는다. 사고나 보스의 평소 행동이 낳은 결과면 충분하다
- 보스는 자기가 직접 보거나 겪은 일에만 반응한다. 보스가 없는 곳에서 일어난 일(예: 다른 사람이 건넨 물건을 주인공이 거절함)을 보스가 알고 화내게 하지 않는다
- story 는 3~4문장. 문장마다 앞 문장의 결과로 이어진다. "그러자"·"그래서"로 시작하는 문장은 story 하나에 한 번까지
- 화마다 사건 구성을 다르게 한다. "건넨다 → 거절한다 → 싸운다 → 알게 된다" 같은 같은 틀을 매 화 반복하지 않는다
- 이야기 안에서 "1화", "앞 화" 같은 화 번호나 "최종보스 편", "일반 보스" 같은 설정 용어를 쓰지 않는다
- 주인공은 이름 없이 "주인공"으로 부른다. 최종보스는 boss_name_korean(이름의 한국어 발음)으로 부른다
- 문장은 "~한다" 꼴의 현재형으로 쓴다

${STORY_STYLE}

---

## 테마
${theme}

## 보스 카드
${bossCard(boss)}

## NPC 목록
${npcList}`;
}

export const storyTool = [
	{
		type: 'function',
		function: {
			name: 'write_story',
			description: '보스 카드로 5화 이야기를 쓴다.',
			parameters: {
				type: 'object',
				properties: {
					logline: { type: 'string' },
					boss_name_korean: { type: 'string', description: '최종보스 이름의 한국어 발음. 이야기에서는 이 이름만 쓴다.' },
					key_object: { type: 'string', description: '보스 motivation 에 걸린 핵심 물건. 10자 이내.' },
					wrong_action: { type: 'string' },
					right_action: { type: 'string' },
					stakes: { type: 'string', description: '주인공이 끝까지 쫓는 이유: 쫓지 않으면 잃는 것. 1화에서 생긴다. 한 문장.' },
					motive_scene: {
						type: 'string',
						description: '보스의 동기를 만든 사건 한 장면. 누가 무엇을 했는지 1~2문장 (예: "검객들이 정령의 몸을 쪼개 여덟 자루 검을 만들어 나눠 가졌다"). "배신당했다" 같은 말로 끝내지 않는다.'
					},
					episodes: {
						type: 'array',
						description: '5개. order 1~5.',
						items: {
							type: 'object',
							properties: {
								order: { type: 'integer' },
								title: { type: 'string', description: '화 제목. 12자 이내.' },
								place: { type: 'string', description: '이 화의 장소. 15자 이내. 화마다 다름.' },
								npc: { type: 'string', description: '주 NPC key' },
								random_boss_title: { type: 'string', description: '1~4화 일반 보스 직업. 5화는 빈 문자열.' },
								random_boss_side: { type: 'string', enum: ['warn', 'ally', ''] },
								boss_trace: { type: 'string', description: '1~4화 최종보스 흔적. 15자 이내. 5화는 빈 문자열.' },
								new_fact: { type: 'string', description: '2~4화: 주인공이 최종보스에 대해 새로 알게 되는 사실. 1·5화는 빈 문자열.' },
								story: { type: 'string', description: '3~4문장 이야기.' }
							},
							required: ['order', 'title', 'place', 'npc', 'random_boss_title', 'random_boss_side', 'boss_trace', 'new_fact', 'story']
						}
					}
				},
				required: ['logline', 'boss_name_korean', 'key_object', 'wrong_action', 'right_action', 'stakes', 'motive_scene', 'episodes']
			}
		}
	}
];

export type StoryResult = {
	logline: string;
	boss_name_korean: string;
	key_object: string;
	wrong_action: string;
	right_action: string;
	stakes: string;
	motive_scene: string;
	episodes: {
		order: number;
		title: string;
		place: string;
		npc: string;
		random_boss_title: string;
		random_boss_side: 'warn' | 'ally' | '';
		boss_trace: string;
		new_fact: string;
		story: string;
	}[];
};

export function buildFieldsPrompt(boss: BossInput, story: StoryResult): string {
	return `당신은 게임 스토리아크 편집자입니다. 완성된 5화 이야기를 받아 게임 데이터 필드를 채웁니다. 이야기 내용은 바꾸지 않고, 이야기에 없는 사건이나 설정을 지어내지 않습니다.

# 채울 필드
- chapter_name: korean 제목을 먼저 정한다 (12자 이내, 콜론·대시 부제 없음). 나머지 8개 언어는 그 korean 제목을 같은 뜻으로 번역한다
  - 모든 언어가 12자(공백 포함) 이내여야 한다. 넘으면 기계적으로 잘려 뜻이 깨진다. 직역이 길면 핵심 단어만 남겨 짧게 옮긴다 (예: "사막의 검정령" → english "Sword Spirit")
- world.setting: 무대를 한 문장으로 "[어디]에 있는 [무엇]"
- world.rule: wrong_action 을 하면 무슨 일이 일어나는지 한 문장
- world.how: 왜 그런 일이 일어나는지 한 문장
- world.secret: 주인공이 5화에서 알게 되는 사실 1~2문장. 보스 카드 문장을 옮기지 말고 쉬운 말로
- protagonist_goal: "[무엇을] 해야 한다. [하지 않으면 생기는 일] 때문이다" 꼴의 두 문장. 이야기의 stakes 를 쓴다
- act_tone: intro(1화)·rising(2~4화)·climax_finale(5화)마다 mood(분위기 한 구), narrative_role(그 부분의 역할 한 구)
- final_boss.appearance_boss: 5화 보스전에 나타나는 모습 1~2문장. 보스 외형에서 눈에 띄는 특징만
- final_boss.want: 보스가 얻고 싶은 것 한 문장
- global_foreshadowing: 4개. 1~4화 이야기에 실제로 나오는 장면(boss_trace·new_fact)에서 고른다
  - hint 는 그 장면 그대로, 주인공이 직접 보거나 겪는 일. reveal_context 는 5화에서 그 흔적의 정체(누구의 것·무엇이었는지)가 밝혀지는 것. 보스의 속마음은 쓰지 않는다
  - reveal_context 에 1~4화 장소 이름을 쓰지 않는다. 밝혀지는 곳은 늘 5화다 (나쁜 예: "바람의 골짜기에서 …임을 확인한다")
  - reveal_room 이 15 가 아니면 보스가 나오기 전이다. 그 방에서 눈으로 확인할 수 있는 것만 쓰고, 보스만 아는 사실(왜·어떻게 그렇게 됐는지)은 쓰지 않는다
  - plant_order 는 그 장면이 나오는 화 번호(1~4). 4개를 여러 화에 나눈다
  - plant_room 은 그 화에서 심는 방, reveal_room 은 5화에서 밝히는 방. 둘 다 1, 3, 5, 9, 15 중 하나. reveal_room 은 4개가 서로 다르다
- npc_roles: 이야기에 나오는 NPC 마다 role(역할 한 구)과 arc(이야기에서 실제로 하는 일, "N화에서 ~한다" 꼴). 이야기와 다르게 쓰지 않는다
- act_summary: intro·rising·climax_finale 마다 이야기를 1~2문장으로 줄인 것

${STORY_STYLE}

---

## 보스 카드
${bossCard(boss)}

## 이야기
${JSON.stringify(story, null, 2)}`;
}

export const fieldsTool = [
	{
		type: 'function',
		function: {
			name: 'fill_storyarc_fields',
			description: '완성된 이야기로 스토리아크 필드를 채운다.',
			parameters: {
				type: 'object',
				properties: {
					chapter_name: multiLangTextSchema,
					world: {
						type: 'object',
						properties: {
							setting: { type: 'string' },
							rule: { type: 'string' },
							how: { type: 'string' },
							secret: { type: 'string' }
						},
						required: ['setting', 'rule', 'how', 'secret']
					},
					protagonist_goal: { type: 'string' },
					act_tone: {
						type: 'object',
						properties: { intro: actToneSchema, rising: actToneSchema, climax_finale: actToneSchema },
						required: ['intro', 'rising', 'climax_finale']
					},
					final_boss: {
						type: 'object',
						properties: { appearance_boss: { type: 'string' }, want: { type: 'string' } },
						required: ['appearance_boss', 'want']
					},
					global_foreshadowing: {
						type: 'array',
						items: {
							type: 'object',
							properties: {
								id: { type: 'string' },
								hint: { type: 'string' },
								plant_order: { type: 'integer', description: '심는 화 (1~4)' },
								plant_room: { type: 'integer', description: '심는 방 (1, 3, 5, 9, 15)' },
								reveal_room: { type: 'integer', description: '5화에서 밝히는 방 (1, 3, 5, 9, 15)' },
								reveal_context: { type: 'string' }
							},
							required: ['id', 'hint', 'plant_order', 'plant_room', 'reveal_room', 'reveal_context']
						}
					},
					npc_roles: {
						type: 'object',
						description: '키는 NPC key.',
						additionalProperties: {
							type: 'object',
							properties: { role: { type: 'string' }, arc: { type: 'string' } },
							required: ['role', 'arc']
						}
					},
					act_summary: {
						type: 'object',
						properties: { intro: { type: 'string' }, rising: { type: 'string' }, climax_finale: { type: 'string' } },
						required: ['intro', 'rising', 'climax_finale']
					}
				},
				required: [
					'chapter_name',
					'world',
					'protagonist_goal',
					'act_tone',
					'final_boss',
					'global_foreshadowing',
					'npc_roles',
					'act_summary'
				]
			}
		}
	}
];

/** 1·2단계 결과를 storyarc 모양으로 합친다. id·level·pool 같은 결정론 필드는 호출하는 쪽이 넣는다 */
export function mergeStoryarc(boss: BossInput, story: StoryResult, fields: Record<string, unknown>) {
	const fb = (fields.final_boss ?? {}) as Record<string, unknown>;
	return {
		...fields,
		boss_name_korean: story.boss_name_korean,
		final_boss: {
			id: boss.id,
			name: boss.name,
			appearance_boss: fb.appearance_boss,
			surface_identity: boss.surface_identity,
			true_identity: boss.true_identity,
			motivation: boss.motivation,
			motive_scene: story.motive_scene,
			want: fb.want,
			twist: boss.twist
		},
		scenarioOutline: story.episodes.map((e) => ({
			order: e.order,
			act: e.order === 1 ? 'intro' : e.order === 5 ? 'climax_finale' : 'rising',
			title: e.title,
			boss: e.order === 5 ? boss.id : 'random_boss',
			npc: e.npc,
			summary: e.story,
			place: e.place,
			random_boss_title: e.random_boss_title,
			random_boss_side: e.random_boss_side,
			boss_trace: e.boss_trace
		}))
	};
}
