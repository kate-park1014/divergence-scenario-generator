// ─────────────────────────────────────────
// 공통
// ─────────────────────────────────────────

export type Theme = 'forest' | string;

export type Act = 'intro' | 'rising' | 'climax_finale';

export type Difficulty = 'boss' | 'elite' | 'normal';

export type Emotion = 'base' | 'happy' | 'sad' | 'angry';

/** 다국어 텍스트 (문자열) */
export type MultiLangText = {
	korean: string;
	english: string;
	japanese: string;
	chinese: string;
	french: string;
	spanish: string;
	vietnamese: string;
	thai: string;
	hindi: string;
};

/** 다국어 텍스트 (문자열 배열 — 대사/프롤로그 등) */
export type MultiLangTextArray = {
	korean: string[];
	english: string[];
	japanese: string[];
	chinese: string[];
	french: string[];
	spanish: string[];
	vietnamese: string[];
	thai: string[];
	hindi: string[];
};

// ─────────────────────────────────────────
// StoryArc
// ─────────────────────────────────────────

export type World = {
	setting: string;
	rule: string;
	how?: string; // 왜 나쁜 결과가 생기는지: 핵심 물건이 어떻게 작동하는지 한 문장 (재작업본)
	secret: string;
};

export type ActTone = {
	mood: string;
	tension: number; // 1~5
	narrative_role: string;
};

export type FinalBoss = {
	id: string;
	name: string;
	appearance?: string;
	appearance_npc?: string;
	appearance_boss?: string;
	surface_identity?: string; // 새 아크에는 저장하지 않는다 (챕터 생성이 안 읽음)
	true_identity: string;
	motivation: string;
	want?: string; // 보스가 이 일로 얻는 구체적인 이득 한 문장 (재작업본)
	twist: string;
	zodiac_sign?: string;
};

/**
 * 아크 복선. 공개는 항상 5화.
 * chapterGen: 1~4화엔 plant_order 가 그 화인 것만 (reveal_context 뺌), 5화엔 전부 넘긴다.
 * plant_order 가 없는 예전 아크는 plant_act 로 화를 정할 수 없어 1~4화마다 전부 넘긴다.
 */
export type Foreshadowing = {
	id: string;
	hint: string;
	plant_order?: number; // 심는 화 (1~4)
	plant_act?: Act; // (예전 형식) rising 이면 2~4화 중 어느 화인지 정해지지 않음
	plant_room: number; // 심는 방 (1, 3, 5, 9, 15)
	reveal_act?: Act; // (예전 형식) 지금은 항상 5화
	reveal_room: number; // 5화에서 밝히는 방
	reveal_context: string;
};

/**
 * boss 필드 값:
 * - 'random_boss': 런타임에 임의 배정되는 중간보스 (order 1~4). 이 시나리오에는 final_boss가 등장하지 않는다.
 * - `pool_${string}` (예: 'pool_033'): 스토리아크의 final_boss로 지정된 보스 pool_id (order 5 전용).
 */
export type BossRef = 'random_boss' | `pool_${string}`;

export type NpcArcItem = {
	role: string;
	arc: string;
	title?: string; // summary 에서 이 NPC 를 부르는 호칭
	turn_order?: number; // 마음을 바꾸는 화 번호 (0 = 안 바꿈)
	turn_scene?: string; // 마음을 바꾸는 이유 장면 (그 화 summary 에 그대로 들어감)
};

export type ScenarioOutlineItem = {
	order: number;
	act: Act;
	title: string;
	boss: BossRef;
	npc: string; // npc key
	summary: string;
	random_boss_title?: string; // 1~4화: 그 화 일반 보스의 직업 (화마다 다름)
	random_boss_side?: 'warn' | 'ally'; // 1~4화: 일반 보스의 편. warn = 틀린 행동을 경고하며 막음 / ally = 최종보스 편. 없으면 ally
	place?: string; // 이 화의 장소: 무대 안의 한 구역 (화마다 다름)
	boss_trace?: string; // 1~4화: 그 화에 최종보스가 얼굴 없이 드러나는 매체 (화마다 다름. 주인공은 같은 존재인 줄 모름)
};

export type ActSummary = {
	intro: string;
	rising: string;
	climax_finale: string;
};

export type StoryArc = {
	id: string;
	level?: number; // 시리즈 레벨 (예: Haraldr boss index 1 → 11,21,...,91)
	chapter_name: MultiLangText;
	theme: Theme;
	rising_count?: number; // 읽는 곳 없음. 새 아크에는 저장하지 않는다
	world: World;
	protagonist_goal: string;
	// story_spine·stage·key_object·wrong_action·right_action·최상위 boss_trace 는 생성 단계 뼈대라 저장하지 않는다 (storyarcGen.ts 툴 스키마 참고)
	boss_name_korean?: string; // 최종보스 이름의 한국어 발음
	act_tone: {
		intro: ActTone;
		rising: ActTone;
		climax_finale: ActTone;
	};
	final_boss: FinalBoss;
	global_foreshadowing?: Foreshadowing[];
	npc_roles?: Record<string, NpcArcItem>;
	scenarioOutline: ScenarioOutlineItem[];
	act_summary: ActSummary;
};

/** side_test storyarc (scripts/side_test 입력). 안 쓰는 필드를 뺀 StoryArc */
export type SideTestStoryArc = Omit<
	StoryArc,
	'rising_count' | 'protagonist_goal' | 'boss_trace' | 'act_summary' | 'world' | 'act_tone' | 'scenarioOutline'
> & {
	world: Omit<World, 'secret'>;
	act_tone: Record<Act, Pick<ActTone, 'mood'>>;
	scenarioOutline: Omit<ScenarioOutlineItem, 'act'>[];
};

// ─────────────────────────────────────────
// Monster Pool
// ─────────────────────────────────────────

export type MonsterPoolItem = {
	pool_id: string;
	chapter: 'all' | string;
	difficulty: Difficulty;
	theme: Theme;
	monster_ids: string[];
};

export type MonsterPools = Record<string, MonsterPoolItem>;

// ─────────────────────────────────────────
// NPC
// ─────────────────────────────────────────

export type NpcRole = {
	type: string;
	weapon?: string;
};

export type NPC = {
	id: string;
	key: string;
	name: MultiLangText;
	description: string;
	face_image_url: string;
	battle_sprite_url: string;
	attack_sprite_url: string;
	role: NpcRole;
};

// ─────────────────────────────────────────
// Final Chapter (씬 데이터)
// ─────────────────────────────────────────

export type Actor = {
	id: string;
	name: MultiLangText;
	description: string;
	face_image_url: string;
	battle_sprite_url: string;
};

export type FinalChapter = {
	scenario_id: string;
	chapter_order: number;
	order: number;
	act: Act;
	theme: Theme;
	actors: Record<string, Actor>;
	prologue: MultiLangTextArray;
	epilogue?: MultiLangTextArray;
};

// ─────────────────────────────────────────
// Random Event
// ─────────────────────────────────────────

export type RandomEventScenarioType = 'trade_off' | 'probability_upgrade' | 'random_hidden';

export type RandomEventChoice = {
	text: string;
	post?: string;
	post_success?: string;
	post_fail?: string;
};

export type RandomEvent = {
	id: string;
	title: string;
	narration: string;
	tags: string[];
	scenario_type: RandomEventScenarioType;
	choices: [RandomEventChoice, RandomEventChoice];
};

export type LocalizedRandomEventChoice = {
	text: MultiLangText;
	post?: MultiLangText;
	post_success?: MultiLangText;
	post_fail?: MultiLangText;
};

export type LocalizedRandomEvent = {
	id: string;
	title: MultiLangText;
	narration: MultiLangText;
	tags: string[];
	scenario_type: RandomEventScenarioType;
	choices: [LocalizedRandomEventChoice, LocalizedRandomEventChoice];
};
