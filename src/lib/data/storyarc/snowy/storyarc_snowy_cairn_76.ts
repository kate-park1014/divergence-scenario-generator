import type { StoryArc } from '$lib/types';

// Cairn 시리즈 8편 (level 76) — 응축된 배신
export const storyarc_snowy_cairn_76: StoryArc = {
	id: 'snowy_cairn_76',
	level: 76,
	chapter_name: {
		korean: '응축된 배신',
		english: 'Condensed Betrayal',
		japanese: '凝縮された裏切り',
		chinese: '凝结的背叛',
		french: 'La Trahison Condensée',
		spanish: 'La Traición Condensada',
		vietnamese: 'Sự Phản Bội Cô Đọng',
		thai: 'การทรยศที่ถูกอัดแน่น',
		hindi: 'संघनित विश्वासघात'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'돌무덤의 화강암 조각을 하나씩 들여다보면, 각 조각마다 옛 배신의 장면이 얼어붙어 새겨져 있다. 형제가 형제를, 동지가 동지를 등진 순간들이 돌이 되어 켜켜이 쌓였다.',
		rule: '돌 조각의 장면을 읽은 자는 이 돌무덤이 무엇으로 쌓였는지 알게 된다. 그러나 그 장면을 오래 보면, 제 안의 이기심이 들춰진다.',
		secret:
			'Cairn을 이룬 돌 하나하나가 깨어진 맹세와 배신의 순간이다. 수백 년간 북부 설원에서 등을 돌린 자들의 기록이 응축되어, 이 차가운 심판자가 형성되었다.'
	},

	protagonist_goal: '돌무덤을 이룬 조각들이 무엇을 새기고 있는지, 응축된 배신의 정체를 밝혀라.',

	act_tone: {
		intro: {
			mood: '돌이 된 순간들',
			tension: 1,
			narrative_role: '화강암 조각마다 옛 배신의 장면이 얼어붙어 새겨져 있다.'
		},
		rising: {
			mood: '들춰지는 이기심',
			tension: 3,
			narrative_role:
				'장면을 들여다볼수록, 돌무덤이 보는 이의 숨은 이기심까지 비춰낸다. 배신은 남의 일이 아니었다.'
		},
		climax_finale: {
			mood: '쌓인 등돌림',
			tension: 5,
			narrative_role:
				'탐험대가 응축된 배신의 정체를 알아내자, 돌무덤이 무겁게 운다. "…나는 등돌린 모든 순간으로 쌓였다. 너희의 마음 한구석도, 다르지 않으리라."'
		}
	},

	final_boss: {
		id: 'FrozenVow_Cairn_V1',
		name: 'Cairn',
		appearance:
			'A cairn whose granite stones each hold a frozen scene of old betrayal carved within, brother turning on brother, comrade abandoning comrade, layered one atop another. Dark gaps between the stones seem to reflect the hidden selfishness of any who look too long. Cinematic grim accusing blue lighting, severe high-fantasy aesthetic.',
		surface_identity:
			'그저 쌓인 돌무더기처럼 보이는 존재. 그러나 그 돌 하나하나엔 배신의 순간이 새겨져 있다.',
		true_identity:
			'Cairn을 이룬 돌 하나하나가 깨어진 맹세와 배신의 순간이다. 수백 년간 북부 설원에서 등을 돌린 자들의 기록이 응축되어, 이 차가운 심판자가 형성되었다.',
		motivation:
			'배신으로 쌓인 존재이기에, 곁에 선 자들의 숨겨진 이기심과 불순한 동기를 끄집어내려 한다. 누구의 마음에도 등돌림의 씨앗이 있음을 드러내려 한다.',
		twist:
			'탐험대가 응축된 배신의 정체를 알아내자, 돌무덤이 무겁게 운다. "…나는 등돌린 모든 순간으로 쌓였다. 너희의 마음 한구석도, 다르지 않으리라." 돌무더기가 아니라, 수백 년의 배신이 굳어 만들어진 심판자였다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '돌 조각마다 등을 돌리는 두 사람의 형상이 얼어붙어 있다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '얼어붙은 형상들은 배신의 순간이었다 — 돌 하나가 곧 등돌림 하나.'
		},
		{
			id: 'fs_02',
			hint: '장면을 오래 본 자가 까닭 없이 제 마음속 옛일을 떠올리며 흠칫한다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '돌무덤은 보는 이의 숨은 이기심을 비췄다 — 배신은 남의 일이 아니었다.'
		},
		{
			id: 'fs_03',
			hint: '가장 아래 돌일수록 장면이 닳아 형체를 알아보기 어렵다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '닳은 돌은 가장 오래된 배신이었다 — 수백 년 쌓인 등돌림의 토대.'
		},
		{
			id: 'fs_04',
			hint: '돌무덤이 탐험대 중 누군가를 향할 때 유독 또렷이 빛난다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '또렷한 빛은 숨은 불순한 동기를 짚어내는 심판자의 손가락이었다.'
		}
	],

	npc_roles: {
		eira: {
			role: '배신을 읽는 자',
			arc: '8편: 돌 조각마다 새겨진 배신의 장면을 읽어, 돌무덤이 등돌림으로 쌓인 심판자임을 밝힌다.'
		},
		ivar: {
			role: '제 마음을 마주하는 전사',
			arc: '8편: 돌무덤이 비춰낸 제 안의 이기심을 흠칫 마주하고, 전사로서 그것을 외면하지 않는다.'
		},
		anuk: {
			role: '이기심을 경계하는 자',
			arc: '8편: 누구의 마음에도 등돌림의 씨앗이 있음을 알고, 동료들이 시험에 흔들리지 않도록 일깨운다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '돌에 새겨진 장면',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 돌무덤의 화강암 조각을 하나씩 들여다본다. 에이라가 조각마다 형제가 형제를, 동지가 동지를 등진 배신의 장면이 얼어붙어 있음을 읽기 시작한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '들춰지는 옛일',
			boss: 'random_boss',
			npc: 'ivar',
			summary:
				'이바르가 장면을 오래 보다, 까닭 없이 제 마음속 옛일을 떠올리며 흠칫한다. 돌무덤이 제 안의 이기심을 비춰낸 것이다. 전사로서 그것을 외면하지 않는다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '가장 오래된 등돌림',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 가장 아래 닳은 돌일수록 장면이 흐려져 있음을 본다. 수백 년 쌓인 가장 오래된 배신이다. "이 토대부터… 전부 등돌림으로 쌓였어."'
		},
		{
			order: 4,
			act: 'rising',
			title: '향하는 손가락',
			boss: 'random_boss',
			npc: 'anuk',
			summary:
				'아누크가 돌무덤이 탐험대 중 누군가를 향할 때 유독 또렷이 빛남을 본다. 숨은 동기를 짚는 손가락이다. "누구든 흔들릴 수 있어. 마음을 단단히 해."'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '너희의 마음 한구석도 다르지 않으리라',
			boss: 'pool_111',
			npc: 'anuk',
			summary:
				'탐험대가 응축된 배신의 정체를 알아내자 돌무덤이 무겁게 운다. "나는 등돌린 모든 순간으로 쌓였다. 너희의 마음 한구석도, 다르지 않으리라." 수백 년의 배신이 굳은 심판자임이 드러나고, 이기심을 경계해온 아누크와 함께 전투가 이어진다.'
		}
	],

	act_summary: {
		intro: '화강암 조각마다 배신의 장면이 얼어붙어 있다. 에이라가 그 돌들을 읽기 시작한다.',
		rising: '제 옛일을 마주한 이바르, 가장 오래된 등돌림을 본 에이라, 향하는 손가락을 경계하는 아누크. 돌무덤은 배신으로 쌓였다.',
		climax_finale: '"너희의 마음 한구석도 다르지 않으리라." 돌무더기는 수백 년의 배신이 굳은 심판자였다.'
	}
};
