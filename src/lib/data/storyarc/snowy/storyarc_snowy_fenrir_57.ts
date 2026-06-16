import type { StoryArc } from '$lib/types';

// Fenrir 시리즈 6편 (level 57) — 동행단 막간: 공허를 마주 보며
export const storyarc_snowy_fenrir_57: StoryArc = {
	id: 'snowy_fenrir_57',
	level: 57,
	chapter_name: {
		korean: '공허를 마주 보며',
		english: 'Facing the Void Together',
		japanese: '虚空を見つめて',
		chinese: '直面虚空',
		french: 'Face au Vide, Ensemble',
		spanish: 'Frente al Vacío, Juntos',
		vietnamese: 'Cùng Đối Diện Hư Không',
		thai: 'เผชิญความว่างเปล่าด้วยกัน',
		hindi: 'शून्य का सामना, साथ मिलकर'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'늑대의 동공이 끌어당기는 힘이 잠시 가라앉은 골에서, 동행단이 그 텅 빈 어둠을 마주 보며 숨을 고른다. 전반부의 굶주림의 단서가 멎고, 세 사람은 채워지지 않는 것, 미움 없는 연민, 그리고 끝을 응시한다는 것에 대해 이야기한다.',
		rule: '막간의 시간. 늑대의 진실은 잠시 미뤄지고, 동행단이 공허를 어떻게 마주하는지가 드러난다.',
		secret:
			'글라세는 끝을 담담히 응시하고, 인카는 미움 없이 가엾어하며, 에이라는 이름 없는 무리를 기록하려 한다. 이 시간이 후반부, 결코 채워지지 않는 굶주림을 연민으로 마주할 셋의 마음을 단단히 한다.'
	},

	protagonist_goal: '끌어당김이 가라앉은 틈에, 동행단이 공허를 마주하는 각자의 태도를 나누게 하라.',

	act_tone: {
		intro: {
			mood: '가라앉은 끌어당김',
			tension: 1,
			narrative_role: '동공의 끌어당기는 힘이 잠시 가라앉는다. 동행단이 그 텅 빈 어둠을 마주 보며 숨을 고른다.'
		},
		rising: {
			mood: '끝을 말하다',
			tension: 2,
			narrative_role:
				'세 사람이 채워지지 않는 것, 미움 없는 연민, 끝을 응시한다는 것에 대해 이야기한다. 관조와 연민과 기록이 오간다.'
		},
		climax_finale: {
			mood: '막간의 끝',
			tension: 4,
			narrative_role:
				'끌어당김이 다시 차오를 무렵, 동공 속에서 가냘픈 신음 한 자락이 새어 나온다. 그것을 미움 없이 받아낸 셋은 후반부의 진실을 향해 발을 옮긴다.'
		}
	},

	final_boss: {
		id: 'HollowHowl_Fenrir_V1',
		name: 'Fenrir',
		appearance:
			'Three companions sitting before the hollow eye-voids of the great wolf in a moment when its pull has subsided, gazing calmly into the emptiness, a faint moan drifting from within. The mood is still and contemplative against the vast void. Cinematic quiet hollow snowy lighting, character-focused high-fantasy aesthetic.',
		surface_identity:
			'끌어당김이 잠시 가라앉은 늑대의 텅 빈 동공. 막간의 고요 속에서도 그 공허가 어른거린다.',
		true_identity:
			'아직 늑대의 진실은 절반만 드러났다. 이 시간은 보스보다 동행단이 공허를 어떻게 마주하는지에 초점이 맞춰진다.',
		motivation:
			'동공은 가라앉은 틈에도 어둠을 머금는다. 그 공허가 동행단에게 채워지지 않는 것과 연민에 대해 곱씹게 만든다.',
		twist:
			'끌어당김이 다시 차오를 무렵, 동공 속에서 가냘픈 신음 한 자락이 새어 나온다. 위협이 아니라 굶주림에 지친 소리였다. 그것을 미움 없이 받아낸 셋은 — 관조와 연민과 기록을 품고 — 후반부의 진실을 향해 발을 옮긴다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '글라세가 "공허는 미워할 대상이 아니라 응시할 대상"이라고 담담히 말한다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '글라세의 태도는, 후반부 끝없는 공허를 흔들림 없이 마주할 토대였다.'
		},
		{
			id: 'fs_02',
			hint: '인카가 "미워할 수 없는 적"을 어떻게 대해야 할지 조용히 묻는다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '인카의 물음은, 후반부 굶주림의 고통을 연민으로 받아낼 마음이었다.'
		},
		{
			id: 'fs_03',
			hint: '에이라가 이름조차 없는 무리를 어떻게 기록할지 고심한다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 고심은, 후반부 이름 없는 무리의 마지막 신음을 남길 에이라의 준비였다.'
		},
		{
			id: 'fs_04',
			hint: '가라앉은 동공에서도 아주 약하게 끌어당기는 기운이 가시지 않는다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '가시지 않는 기운은, 굶주림이 막간조차 멈추지 못함을 알렸다.'
		}
	],

	npc_roles: {
		eira: {
			role: '이름 없는 것의 기록자',
			arc: '6편(막간): 이름조차 없는 무리를 어떻게 기록할지 고심하며, 끝내 남기려는 신념을 다진다.'
		},
		inka: {
			role: '미움 없는 연민',
			arc: '6편(막간): "미워할 수 없는 적"을 어떻게 대해야 할지 물으며, 연민으로 마주할 마음을 다진다.'
		},
		glace: {
			role: '공허의 응시자',
			arc: '6편(막간): "공허는 미워할 대상이 아니라 응시할 대상"이라 말하며, 흔들림 없는 태도를 보인다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '텅 빈 어둠 앞에',
			boss: 'random_boss',
			npc: 'glace',
			summary:
				'동공의 끌어당기는 힘이 잠시 가라앉은 골에서 동행단이 그 텅 빈 어둠을 마주 본다. 글라세가 "공허는 미워할 대상이 아니라 응시할 대상"이라 담담히 말한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '미워할 수 없는 적',
			boss: 'random_boss',
			npc: 'inka',
			summary:
				'인카가 조용히 묻는다. "미워할 수도 없는 적은… 어떻게 대해야 할까요." 연민으로 마주할 마음을 다진다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '이름 없는 것을 적다',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 이름조차 없는 무리를 어떻게 기록할지 고심한다. "이름이 없어도… 여기 있었다는 건 남겨야죠." 끝내 남기려는 신념을 다진다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '응시한다는 것',
			boss: 'random_boss',
			npc: 'glace',
			summary:
				'글라세가 공허를 응시한다는 것의 의미를 말한다. "끝을 똑바로 봐야, 휩쓸리지 않아. 두려워하면 빨려 들어가." 셋의 마음이 단단해진다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '새어 나온 신음',
			boss: 'pool_112',
			npc: 'inka',
			summary:
				'끌어당김이 다시 차오를 무렵 동공 속에서 가냘픈 신음 한 자락이 새어 나온다. 위협이 아니라 굶주림에 지친 소리였다. 그것을 미움 없이 받아낸 셋이 관조·연민·기록을 품고 후반부의 진실을 향해 나아간다.'
		}
	],

	act_summary: {
		intro: '끌어당김이 가라앉은 틈, 동행단이 텅 빈 어둠을 마주 본다. 글라세가 응시할 대상이라 말한다.',
		rising: '미워할 수 없는 적을 묻는 인카, 이름 없는 것을 적는 에이라, 응시의 의미를 말하는 글라세. 셋이 공허를 마주한다.',
		climax_finale: '새어 나온 가냘픈 신음을 미움 없이 받아낸 셋이 후반부 진실로 나아간다.'
	}
};
