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
	surface_identity: string;
	true_identity: string;
	motivation: string;
	want?: string; // 보스가 이 일로 얻는 구체적인 이득 한 문장 (재작업본)
	twist: string;
	zodiac_sign?: string;
};

export type Foreshadowing = {
	id: string;
	hint: string;
	plant_act: Act;
	plant_room: number;
	reveal_act: Act;
	reveal_room: number;
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
	// 1~4화: 주인공이 속는 방식 (코드가 id 로 고정, 화마다 다름). 후보·설명은 storyarcGen.ts 의 DECEIVE_MODE_POOL / DECEIVE_MODE_LABEL
	deceive_mode?:
		| 'direct'
		| 'verify'
		| 'npc_acts'
		| 'avoid'
		| 'pressure'
		| 'undo'
		| 'tradeoff'
		| 'bait'
		| 'piecemeal'
		| 'gift';
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
	rising_count: number;
	world: World;
	protagonist_goal: string;
	// 이야기 전체를 단순하게 줄인 뼈대 (5화 문장에 결말 포함)
	// protagonist_action: 그 화 주인공의 행동 (1화=wrong_action, 2~4화=겉모습이 다른 행동, 5화=right_action)
	// lesson: 2~4화. 주인공이 앞 화에서 배운 것과, 그래서 이번 행동이 안전해 보이는 이유
	// hidden_link: 1~4화. 그 행동이 사실은 왜 wrong_action 과 같은 일인지 (5화에 드러남, 1~4화 대사에는 안 씀)
	story_spine?: { order: number; line: string; protagonist_action?: string; lesson?: string; hidden_link?: string }[];
	stage?: string; // 이야기의 무대: 보스가 있는 한 장소
	genre?: string; // 재작업 때 배정된 장르
	key_object?: string; // 1~5화에 계속 나오고 5화 결말에서 쓰이는 핵심 물건
	wrong_action?: string; // 1~4화 행동이 사실은 모두 하는 일 (1화에는 그대로 한다). 핵심 물건에 대한 틀린 행동
	right_action?: string; // 5화의 핵심 물건에 대한 정답 행동 (결말 행동)
	random_boss_role?: string; // (예전 필드) 1~4화 일반 보스 집단 이름 — 지금은 scenarioOutline[].random_boss_title 을 쓴다
	boss_name_korean?: string; // 최종보스 이름의 한국어 발음
	boss_human_title?: string; // (예전 필드) 최종보스 호칭 — 지금은 쓰지 않음. 최종보스는 이름으로만 부른다
	boss_trace?: string; // 1화에 최종보스가 얼굴 없이 드러나는 매체 (목소리·글자·물건). 2~4화는 scenarioOutline[].boss_trace
	act_tone: {
		intro: ActTone;
		rising: ActTone;
		climax_finale: ActTone;
	};
	final_boss: FinalBoss;
	global_foreshadowing: Foreshadowing[];
	npc_roles?: Record<string, NpcArcItem>;
	scenarioOutline: ScenarioOutlineItem[];
	act_summary: ActSummary;
};

/** side_test storyarc (tmp/side10 입력). side10 이 안 쓰는 필드를 뺀 StoryArc */
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
