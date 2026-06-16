import type { StoryArc } from '$lib/types';

// Skuld 시리즈 6편 (level 52) — 동행단 막간: 빙하 곁의 밤샘
export const storyarc_snowy_skuld_52: StoryArc = {
	id: 'snowy_skuld_52',
	level: 52,
	chapter_name: {
		korean: '빙하 곁의 밤샘',
		english: 'A Vigil by the Glacier',
		japanese: '氷河の傍らの夜伽',
		chinese: '冰河旁的守夜',
		french: 'Une Veillée au Bord du Glacier',
		spanish: 'Una Vigilia junto al Glaciar',
		vietnamese: 'Đêm Thức Canh Bên Sông Băng',
		thai: 'การเฝ้ายามข้างธารน้ำแข็ง',
		hindi: 'हिमनद के पास रतजगा'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'좌초의 기록을 좇던 동행단이, 빙하의 낮은 신음을 들으며 그 곁에서 밤을 새운다. 전반부의 단서들이 잠시 멎고, 세 사람은 맹세와 죽음, 그리고 기억에 대해 서로의 생각을 나눈다.',
		rule: '막간의 밤샘. 빙하의 진실은 잠시 미뤄지고, 동행단이 맹세를 어떻게 대하는지가 드러난다.',
		secret:
			'세 사람은 맹세를 다르게 본다. 이바르는 충성의 무게를, 힐드는 망자를 기리는 의무를, 에이라는 잊힌 이름을 남기는 일을 말한다. 이 밤이 후반부, 스쿌드의 유언과 외로움을 마주할 셋의 마음을 정한다.'
	},

	protagonist_goal: '빙하의 신음을 들으며 밤을 새우는 동안, 동행단이 맹세에 대한 각자의 신념을 나누게 하라.',

	act_tone: {
		intro: {
			mood: '낮은 신음',
			tension: 1,
			narrative_role: '동행단이 빙하의 낮은 신음을 들으며 그 곁에서 밤을 새운다.'
		},
		rising: {
			mood: '맹세를 말하다',
			tension: 2,
			narrative_role:
				'세 사람이 맹세와 죽음, 기억에 대해 서로의 생각을 나눈다. 충성, 추모, 기록 — 제각각의 신념이 오간다.'
		},
		climax_finale: {
			mood: '밤샘의 끝',
			tension: 4,
			narrative_role:
				'동이 트기 전, 빙하가 한 줄기 더 또렷한 신음을 흘린다. 그 슬픔의 결을 알아챈 셋은 후반부의 진실을 향해 발을 옮긴다.'
		}
	},

	final_boss: {
		id: 'GlacialOath_Skuld_V1',
		name: 'Skuld',
		appearance:
			'A vast glacier groaning softly in the dark as three companions keep vigil beside it, faint dragon-head carvings and runes glowing under the moonlit ice. The scene is quiet and reflective, the cold immense yet sorrowful. Cinematic somber moonlit blue lighting, character-focused high-fantasy aesthetic.',
		surface_identity:
			'밤새 낮게 신음하는 빙하. 막간의 어둠 속에서 그 슬픔의 결이 어렴풋이 비친다.',
		true_identity:
			'아직 스쿌드의 진실은 절반만 드러났다. 이 밤은 보스보다 동행단이 맹세를 어떻게 대하는지에 초점이 맞춰진다.',
		motivation:
			'빙하는 밤에도 멈추지 못하고 신음한다. 그 소리가 동행단에게 맹세와 죽음의 무게를 곱씹게 만든다.',
		twist:
			'동이 트기 전, 빙하가 한 줄기 더 또렷한 신음을 흘린다. 그것은 위협이 아니라 슬픔에 가까웠다. 그 결을 알아챈 셋은 — 충성과 추모와 기록을 각자 가슴에 품고 — 후반부의 진실을 향해 발을 옮긴다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '이바르가 "지킬 수 없는 맹세도 맹세인가"를 자문하며 검 자루를 매만진다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '이바르의 물음은 후반부, 이행할 수 없는 유언에 묶인 스쿌드를 마주할 복선이었다.'
		},
		{
			id: 'fs_02',
			hint: '힐드가 빙하를 향해 낮은 추모의 노래를 흥얼거린다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '힐드의 추모가는, 후반부 망자가 된 한 척의 배를 기릴 마음의 준비였다.'
		},
		{
			id: 'fs_03',
			hint: '에이라가 해독하지 못한 룬 조각 하나를 따로 적어 품는다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '미해독 룬은 후반부 라그나르의 이름으로 풀릴 마지막 조각이었다.'
		},
		{
			id: 'fs_04',
			hint: '빙하의 신음이 셋이 침묵할 때면 함께 잦아든다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '신음이 침묵에 반응한 것은, 빙하가 누군가 들어주기를 기다려 왔음을 암시했다.'
		}
	],

	npc_roles: {
		eira: {
			role: '밤의 기록자',
			arc: '6편(막간): 해독하지 못한 룬 조각을 품으며, 잊힌 이름을 끝내 남기려는 자신의 신념을 말한다.'
		},
		ivar: {
			role: '맹세를 자문하는 전사',
			arc: '6편(막간): "지킬 수 없는 맹세도 맹세인가"를 자문하며, 충성의 무게를 동료들과 나눈다.'
		},
		hild: {
			role: '망자를 기리는 자',
			arc: '6편(막간): 빙하를 향해 낮은 추모가를 흥얼거리며, 죽은 것을 기리는 의무에 대해 이야기한다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '빙하 곁에서',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'좌초의 기록을 좇던 동행단이 빙하의 낮은 신음을 들으며 그 곁에서 밤을 새운다. 에이라가 해독하지 못한 룬 조각을 따로 적어 품는다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '지킬 수 없는 맹세',
			boss: 'random_boss',
			npc: 'ivar',
			summary:
				'이바르가 검 자루를 매만지며 자문한다. "지킬 수 없는 맹세도… 맹세인가." 충성의 무게를 동료들과 나눈다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '낮은 추모가',
			boss: 'random_boss',
			npc: 'hild',
			summary:
				'힐드가 빙하를 향해 낮은 추모의 노래를 흥얼거린다. "죽은 것에도 이름이 있어. 누군가는 기려야지." 망자를 기리는 의무를 이야기한다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '남겨야 할 이름',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 잊힌 이름을 끝내 남기려는 자신의 신념을 말한다. "기록이 없으면, 아무 일도 없던 게 돼요. 그건 너무 외로운 일이잖아요." 셋의 마음이 단단해진다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '슬픔의 결',
			boss: 'pool_107',
			npc: 'hild',
			summary:
				'동이 트기 전, 빙하가 한 줄기 더 또렷한 신음을 흘린다. 그것은 위협이 아니라 슬픔에 가까웠다. 힐드가 그 결을 알아채고, 충성과 추모와 기록을 각자 품은 셋이 후반부의 진실을 향해 발을 옮긴다.'
		}
	],

	act_summary: {
		intro: '동행단이 빙하의 낮은 신음을 들으며 밤을 새운다. 에이라가 미해독 룬을 품는다.',
		rising: '맹세를 자문하는 이바르, 추모가를 흥얼거리는 힐드, 기록의 신념을 말하는 에이라. 셋이 맹세를 나눈다.',
		climax_finale: '슬픔에 가까운 빙하의 신음. 충성·추모·기록을 품은 셋이 후반부 진실로 나아간다.'
	}
};
