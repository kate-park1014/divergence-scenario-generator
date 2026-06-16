import type { StoryArc } from '$lib/types';

// Anya 시리즈 6편 (level 54) — 동행단 막간: 작은 빛 곁에서
export const storyarc_snowy_anya_54: StoryArc = {
	id: 'snowy_anya_54',
	level: 54,
	chapter_name: {
		korean: '작은 빛 곁에서',
		english: 'Beside the Little Light',
		japanese: '小さな光のそばで',
		chinese: '在小小的光旁',
		french: 'Auprès de la Petite Lumière',
		spanish: 'Junto a la Pequeña Luz',
		vietnamese: 'Bên Cạnh Ánh Sáng Nhỏ',
		thai: 'ข้างแสงน้อยดวงนั้น',
		hindi: 'नन्ही रोशनी के पास'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'기다림의 흔적을 좇던 동행단이, 안야의 작은 빛이 머무는 자리에 잠시 함께 앉는다. 전반부의 서글픈 단서가 멎고, 세 사람은 기다림과 가족, 그리고 길을 잃는다는 것에 대해 조용히 이야기한다.',
		rule: '막간의 시간. 안야의 진실은 잠시 미뤄지고, 동행단이 길 잃은 이를 어떻게 대하는지가 드러난다.',
		secret:
			'브란은 길 잃은 이를 집으로 돌려보내는 일을 말하고, 인카는 작은 빛의 외로움에 마음을 연다. 에이라는 사라진 정착민의 이야기를 기록한다. 이 시간이 후반부, 안야의 영원한 작별을 함께할 셋의 마음을 정한다.'
	},

	protagonist_goal: '작은 빛 곁에서 잠시 머물며, 동행단이 길 잃은 이를 대하는 마음을 나누게 하라.',

	act_tone: {
		intro: {
			mood: '곁에 앉다',
			tension: 1,
			narrative_role: '동행단이 안야의 작은 빛이 머무는 자리에 잠시 함께 앉는다.'
		},
		rising: {
			mood: '기다림을 말하다',
			tension: 2,
			narrative_role:
				'세 사람이 기다림과 가족, 길을 잃는다는 것에 대해 조용히 이야기한다. 길잡이와 연민과 기록이 오간다.'
		},
		climax_finale: {
			mood: '막간의 끝',
			tension: 4,
			narrative_role:
				'작은 빛이 셋의 곁에 한참 머물다 다시 맴도는 자리로 돌아간다. 그 애처로움을 가슴에 담은 셋은 후반부의 진실을 향해 발을 옮긴다.'
		}
	},

	final_boss: {
		id: 'GlacialBeacon_Anya_V1',
		name: 'Anya',
		appearance:
			'A faint blue child-light hovering close to three companions who sit quietly beside it in the snow, frost flowers blooming softly around them. The mood is gentle and sorrowful, the little light lingering as if reluctant to leave. Cinematic tender blue lighting, character-focused high-fantasy aesthetic.',
		surface_identity:
			'동행단 곁에 한참 머무는 작은 빛. 막간의 고요 속에서 그 외로움이 어렴풋이 비친다.',
		true_identity:
			'아직 안야의 진실은 절반만 드러났다. 이 밤은 보스보다 동행단이 길 잃은 이를 어떻게 대하는지에 초점이 맞춰진다.',
		motivation:
			'작은 빛은 곁에 머무는 온기를 떠나기 아쉬워한다. 그 애처로움이 동행단에게 기다림과 작별의 무게를 곱씹게 만든다.',
		twist:
			'작은 빛이 셋의 곁에 한참 머물다, 이내 다시 맴도는 자리로 돌아간다. 떠나기 아쉬운 듯 몇 번이고 돌아보는 그 모습을 보며 — 길잡이와 연민과 기록을 품은 셋은 — 후반부의 진실을 향해 발을 옮긴다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '브란이 "길 잃은 이는 집을 알려주면 돌아갈 수 있다"고 조용히 말한다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '브란의 말은, 후반부 끝내 가족 대신 안야를 안식으로 인도할 마음의 준비였다.'
		},
		{
			id: 'fs_02',
			hint: '인카가 작은 빛에게 제 이야기를 들려주듯 가만히 말을 건다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '말을 건 그 다정함은, 후반부 안야의 작별을 함께할 인카의 마음이었다.'
		},
		{
			id: 'fs_03',
			hint: '에이라가 사라진 정착민에 대한 옛이야기 한 토막을 적어둔다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '적어둔 옛이야기는, 후반부 안야와 가족의 진실로 이어질 단서였다.'
		},
		{
			id: 'fs_04',
			hint: '작은 빛이 셋이 떠나려 할 때마다 한 발짝 따라왔다 멈춘다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '따라왔다 멈추는 망설임은, 곁의 온기를 떠나보내기 두려운 아이의 마음이었다.'
		}
	],

	npc_roles: {
		eira: {
			role: '옛이야기의 기록자',
			arc: '6편(막간): 사라진 정착민의 옛이야기를 적으며, 잊힌 이를 기억으로 남기려는 신념을 다진다.'
		},
		inka: {
			role: '말을 건네는 자',
			arc: '6편(막간): 작은 빛에게 제 이야기를 들려주듯 다정히 말을 건네며, 그 외로움에 마음을 연다.'
		},
		bran: {
			role: '집을 아는 길잡이',
			arc: '6편(막간): 길 잃은 이를 집으로 돌려보내는 일에 대해 말하며, 안야를 인도할 마음을 다진다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '빛 곁에 앉아',
			boss: 'random_boss',
			npc: 'bran',
			summary:
				'기다림의 흔적을 좇던 동행단이 안야의 작은 빛이 머무는 자리에 잠시 함께 앉는다. 브란이 "길 잃은 이는 집을 알려주면 돌아갈 수 있다"고 조용히 말한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '건네는 말',
			boss: 'random_boss',
			npc: 'inka',
			summary:
				'인카가 작은 빛에게 제 이야기를 들려주듯 가만히 말을 건다. "춥지 않아? 우리 잠깐 같이 있어 줄게." 그 외로움에 마음을 연다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '사라진 정착민',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 사라진 정착민에 대한 옛이야기 한 토막을 적어둔다. "이 근처에… 눈보라에 사라진 마을이 있었다고 해요." 잊힌 이를 남기려는 신념을 다진다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '집으로 돌려보내려면',
			boss: 'random_boss',
			npc: 'bran',
			summary:
				'브란이 길 잃은 이를 집으로 돌려보내는 일에 대해 말한다. "기다리게 두는 게 친절은 아니야. 때론… 보내주는 게 인도하는 거지." 셋의 마음이 단단해진다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '돌아보는 작은 빛',
			boss: 'pool_109',
			npc: 'inka',
			summary:
				'작은 빛이 셋의 곁에 한참 머물다 이내 맴도는 자리로 돌아간다. 떠나기 아쉬운 듯 몇 번이고 돌아보는 그 모습을 보며, 길잡이·연민·기록을 품은 셋이 후반부의 진실을 향해 발을 옮긴다.'
		}
	],

	act_summary: {
		intro: '동행단이 안야의 작은 빛 곁에 잠시 앉는다. 브란이 길 잃은 이를 집으로 보내는 일을 말한다.',
		rising: '말을 건네는 인카, 옛이야기를 적는 에이라, 인도의 의미를 말하는 브란. 셋이 마음을 나눈다.',
		climax_finale: '몇 번이고 돌아보는 작은 빛. 그 애처로움을 품은 셋이 후반부 진실로 나아간다.'
	}
};
