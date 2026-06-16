import type { StoryArc } from '$lib/types';

// Cairn 시리즈 9편 (level 86) — 온정 없는 심판
export const storyarc_snowy_cairn_86: StoryArc = {
	id: 'snowy_cairn_86',
	level: 86,
	chapter_name: {
		korean: '온정 없는 심판',
		english: 'Judgment Without Mercy',
		japanese: '情けなき審判',
		chinese: '无情的审判',
		french: 'Le Jugement Sans Pitié',
		spanish: 'El Juicio Sin Piedad',
		vietnamese: 'Phán Xét Không Khoan Nhượng',
		thai: 'การพิพากษาที่ไร้ความปรานี',
		hindi: 'निर्मम न्याय'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'돌무덤이 거대한 심판의 자리로 변한 구역. 주위에 깨어진 맹세로 얼어붙은 자들의 형상이 늘어서 있다. 모두 약속을 어긴 순간 그대로 얼음이 되었고, 어떤 변명도 통하지 않은 듯하다.',
		rule: '심판의 자리에서는 어떤 사정도 참작되지 않는다. 깨어진 맹세는 그 까닭과 상관없이 반드시 대가를 치른다.',
		secret:
			'Cairn은 오직 신의 없는 자들을 가려 단죄하기 위해 존재한다. 그 심판엔 어떤 온정도, 사정에 대한 이해도 없다 — 깨어진 약속은 무조건 얼음의 형벌을 받을 뿐이다.'
	},

	protagonist_goal: '돌무덤의 심판이 어떤 자비도 없이 작동하는 이유, 그 냉혹함의 정체를 밝혀라.',

	act_tone: {
		intro: {
			mood: '늘어선 형벌',
			tension: 1,
			narrative_role: '깨어진 맹세로 얼어붙은 자들의 형상이 심판의 자리를 둘러싸고 있다.'
		},
		rising: {
			mood: '참작 없는 저울',
			tension: 3,
			narrative_role:
				'얼어붙은 자들의 사연을 들여다볼수록, 어떤 변명도 통하지 않았음이 드러난다. 심판엔 온정이 없었다.'
		},
		climax_finale: {
			mood: '냉혹한 선고',
			tension: 5,
			narrative_role:
				'탐험대가 심판의 냉혹함을 알아내자, 돌무덤이 선고하듯 울린다. "…사정은 묻지 않는다. 깨어진 맹세는, 그저 대가를 치를 뿐이다."'
		}
	},

	final_boss: {
		id: 'FrozenVow_Cairn_V1',
		name: 'Cairn',
		appearance:
			'The cairn risen into a great seat of judgment, surrounded by figures frozen at the exact moment they broke their vows, no plea having spared them. The blue light falls like a cold verdict over the silent ranks of the condemned. Cinematic merciless tribunal blue lighting, forbidding high-fantasy aesthetic.',
		surface_identity:
			'깨어진 맹세를 벌하는 심판의 자리. 그러나 그 심판엔 어떤 사정도 헤아려지지 않는다.',
		true_identity:
			'Cairn은 오직 신의 없는 자들을 가려 단죄하기 위해 존재한다. 그 심판엔 어떤 온정도, 사정에 대한 이해도 없다 — 깨어진 약속은 무조건 얼음의 형벌을 받을 뿐이다.',
		motivation:
			'깨어진 맹세에 반드시 대가를 치르게 하는 것, 그것이 존재의 유일한 목적이다. 어떤 사정도 참작하지 않으며, 자비를 약함이라 여긴다.',
		twist:
			'탐험대가 심판의 냉혹함을 알아내자, 돌무덤이 선고하듯 울린다. "…사정은 묻지 않는다. 깨어진 맹세는, 그저 대가를 치를 뿐이다." 그 단죄엔 어떤 온정도 없었다 — 오직 차가운 저울만이 있었다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '얼어붙은 자들이 모두 무언가 변명하려는 자세 그대로 굳어 있다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '변명하려던 자세 그대로 얼었다 — 어떤 사정도 통하지 않았다.'
		},
		{
			id: 'fs_02',
			hint: '얼어붙은 자들 중엔 어쩔 수 없이 약속을 어긴 듯한 안타까운 사연도 있다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '안타까운 사정조차 참작되지 않았다 — 심판은 까닭을 묻지 않았다.'
		},
		{
			id: 'fs_03',
			hint: '돌무덤의 푸른빛엔 분노도 슬픔도 없이, 그저 차가운 무표정만 있다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '감정 없는 빛은 온정 없는 심판 그 자체였다.'
		},
		{
			id: 'fs_04',
			hint: '심판의 자리 어디에도 용서받고 풀려난 자의 흔적은 없다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '용서는 단 한 번도 없었다 — 깨어진 맹세는 예외 없이 벌을 받았다.'
		}
	],

	npc_roles: {
		eira: {
			role: '심판을 읽는 자',
			arc: '9편: 얼어붙은 자들의 사연을 읽어, 이 심판이 어떤 사정도 참작하지 않는 냉혹한 것임을 밝힌다.'
		},
		ivar: {
			role: '자비를 묻는 전사',
			arc: '9편: 어쩔 수 없이 맹세를 어긴 안타까운 사연 앞에서, 자비 없는 심판이 과연 옳은가를 되묻는다.'
		},
		anuk: {
			role: '법의 무게를 아는 자',
			arc: '9편: 약속을 어긴 대가의 무게를 알면서도, 까닭을 묻지 않는 단죄의 위험을 동료들에게 일러준다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '얼어붙은 자들',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 거대한 심판의 자리에 들어선다. 에이라가 깨어진 맹세로 얼어붙은 자들이, 무언가 변명하려는 자세 그대로 굳어 있음을 읽기 시작한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '안타까운 사연',
			boss: 'random_boss',
			npc: 'ivar',
			summary:
				'이바르가 얼어붙은 자들 중 어쩔 수 없이 약속을 어긴 듯한 안타까운 사연을 본다. "이 사람은… 사정이 있었잖아. 그런데도 똑같이 얼려버린 건가." 자비 없는 심판을 되묻는다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '무표정한 빛',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 돌무덤의 푸른빛에 분노도 슬픔도 없이 차가운 무표정만 있음을 본다. "감정이 없어. 이건… 온정 없는 심판 그 자체야."'
		},
		{
			order: 4,
			act: 'rising',
			title: '용서 없는 자리',
			boss: 'random_boss',
			npc: 'anuk',
			summary:
				'아누크가 심판의 자리 어디에도 용서받고 풀려난 자의 흔적이 없음을 확인한다. "단 한 번의 예외도 없었어. 까닭을 묻지 않는 단죄는… 그 자체로 위험해."'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '사정은 묻지 않는다',
			boss: 'pool_111',
			npc: 'anuk',
			summary:
				'탐험대가 심판의 냉혹함을 알아내자 돌무덤이 선고하듯 울린다. "사정은 묻지 않는다. 깨어진 맹세는, 그저 대가를 치를 뿐이다." 어떤 온정도 없는 차가운 저울임이 드러나고, 법의 무게를 아는 아누크와 함께 전투가 이어진다.'
		}
	],

	act_summary: {
		intro: '깨어진 맹세로 얼어붙은 자들이 심판의 자리를 둘러싼다. 에이라가 그 사연을 읽기 시작한다.',
		rising: '자비를 되묻는 이바르, 무표정한 빛을 본 에이라, 용서 없는 자리를 확인한 아누크. 심판엔 온정이 없었다.',
		climax_finale: '"사정은 묻지 않는다." 그 단죄엔 어떤 온정도 없이, 오직 차가운 저울만 있었다.'
	}
};
