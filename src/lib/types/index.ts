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
	appearance: string;
	surface_identity: string;
	true_identity: string;
	motivation: string;
	twist: string;
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

export type ScenarioOutlineItem = {
	order: number;
	act: Act;
	title: string;
	boss: string; // pool_id 또는 'random_boss'
	npc: string; // npc key
	summary: string;
};

export type ActSummary = {
	intro: string;
	rising: string;
	climax_finale: string;
};

export type StoryArc = {
	id: string;
	chapter_name: MultiLangText;
	theme: Theme;
	rising_count: number;
	world: World;
	protagonist_goal: string;
	act_tone: {
		intro: ActTone;
		rising: ActTone;
		climax_finale: ActTone;
	};
	final_boss: FinalBoss;
	global_foreshadowing: Foreshadowing[];
	scenarioOutline: ScenarioOutlineItem[];
	act_summary: ActSummary;
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
