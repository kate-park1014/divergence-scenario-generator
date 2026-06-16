import type { StoryArc } from '$lib/types';

// Archduke Finn 시리즈 9편 (level 80) — 진심으로 한 판
export const storyarc_snowy_finn_80: StoryArc = {
	id: 'snowy_finn_80',
	level: 80,
	chapter_name: {
		korean: '진심으로 한 판',
		english: 'One Honest Round',
		japanese: '本気で一勝負',
		chinese: '认真地来一场',
		french: 'Une Manche Sincère',
		spanish: 'Una Ronda de Verdad',
		vietnamese: 'Một Trận Thật Lòng',
		thai: 'หนึ่งตาแบบจริงใจ',
		hindi: 'एक सच्चा मुक़ाबला'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'설산 정상으로 오르는 마지막 비탈. 왕은 더 이상 골방의 진실을 감추지 못하고, 그래도 마지막 위엄을 부리려 옥좌를 비탈 위에 끌고 와 탐험대를 기다린다. 작은 펭귄들이 그 곁을 둥글게 에워싸고 있다.',
		rule: '마지막 비탈에서 왕은 단 하나를 청한다 — 진심으로 한 판 붙어달라는 것. 그것이 이기기 위한 결투가 아님을, 이제는 모두가 안다.',
		secret:
			'왕은 처음부터 이기고 싶었던 적이 없다. 그가 바란 것은 단 한 번, 누군가 자신을 진지하게 상대해주는 것이었다. 진실이 모두 드러난 지금, 그는 마지막으로 그 한 판을 청하려 한다.'
	},

	protagonist_goal: '진실이 모두 드러난 왕이 청하는 마지막 한 판의 의미를 받아들이고, 그를 진심으로 마주하라.',

	act_tone: {
		intro: {
			mood: '드러난 진심',
			tension: 2,
			narrative_role: '감출 것이 없어진 왕이 마지막 비탈에서 옥좌를 끌고 와 탐험대를 기다린다.'
		},
		rising: {
			mood: '서툰 솔직함',
			tension: 3,
			narrative_role:
				'왕은 위엄과 솔직함 사이에서 오락가락한다. "짐과… 한 판, 어떤가" 하고 청하면서도 끝까지 왕 노릇을 놓지 못한다.'
		},
		climax_finale: {
			mood: '마지막 청 직전',
			tension: 5,
			narrative_role:
				'왕이 옥좌에서 내려와 짧은 날개를 활짝 편다. "이번엔… 진심으로 한 판 붙어다오." 피날레를 앞둔 그의 청은, 친구가 되어달라는 부탁에 가깝다.'
		}
	},

	final_boss: {
		id: 'ArchdukeFinnTheChilly',
		name: 'Archduke Finn',
		appearance:
			'A round plump penguin standing down from its ice-cube throne on a final snowy slope, wings spread wide in an earnest challenge, tiny penguin minions gathered in a circle around it. The oversized crown sits crooked, neon ski goggles catch the light, and it still wears the moth-eaten purple cape with a giant safety pin and a thick wool muffler. Soft cinematic 3D animation style, sincere warm tone, glittering snow under a wide sky, vibrant colors.',
		surface_identity:
			'마지막 비탈에서 옥좌를 끌고 와 탐험대를 기다리는 왕. 그래도 마지막 위엄을 부리려 애쓴다.',
		true_identity:
			'감출 진실이 더는 없는 길 잃은 펭귄. 그가 청하는 마지막 한 판은, 이기기 위한 결투가 아니라 진심으로 상대해줄 친구를 향한 부탁이다.',
		motivation:
			'처음부터 이기고 싶었던 적이 없다. 단 한 번, 누군가 자신을 진지하게 상대해주기를 바랐다. 이제 그는 마지막으로 그 한 판을 청하려 한다.',
		twist:
			'왕이 옥좌에서 내려와 짧은 날개를 활짝 편다. 위엄을 부리려다 끝내 솔직해진 목소리로 청한다. "이번엔… 진심으로 한 판 붙어다오." 그 청은 더 이상 처형도 정복도 아닌, 친구가 되어달라는 서툰 부탁이다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '왕이 무거운 얼음 옥좌를 굳이 마지막 비탈까지 끌고 와 두었다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '끝까지 옥좌를 끌고 온 것은, 마지막까지 위엄을 놓지 못한 그의 서툰 자존심이었다.'
		},
		{
			id: 'fs_02',
			hint: '"한 판, 어떤가"라고 청하면서도 왕이 자꾸 헛기침으로 위엄을 수습한다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '오락가락하는 청은, 솔직해지고 싶지만 왕 노릇이 익숙해 버린 마음의 갈등이었다.'
		},
		{
			id: 'fs_03',
			hint: '작은 펭귄들이 왕의 곁을 둥글게 에워싸고 응원하듯 종종거린다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '둥글게 에워싼 무리는, 왕이 이미 외롭지만은 않음을 — 그래도 더 큰 한 판을 바람을 — 보여줬다.'
		},
		{
			id: 'fs_04',
			hint: '날개를 활짝 펴는 순간, 왕의 부리가 추위가 아닌 설렘으로 떨린다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '설렘으로 떠는 부리는, 마지막 청이 친구가 되어달라는 부탁임을 알렸다.'
		}
	],

	npc_roles: {
		eira: {
			role: '이야기를 매듭짓는 자',
			arc: '9편: 1편부터의 모든 단서를 하나의 이야기로 매듭지으며, 마지막 한 판의 진짜 의미를 기록으로 남긴다.'
		},
		inka: {
			role: '청을 받아들이는 자',
			arc: '9편: 왕의 서툰 청이 친구가 되어달라는 부탁임을 알고, 진심으로 그 한 판을 받아들일 마음을 낸다.'
		},
		frost: {
			role: '나란히 서는 자',
			arc: '9편: 추위를 함께 견뎌온 동병상련으로, 마지막 한 판에 진심으로 나란히 선다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '끌고 온 옥좌',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 설산 정상의 마지막 비탈에 오른다. 왕이 무거운 얼음 옥좌를 굳이 끌고 와 기다린다. 에이라가 그 서툰 자존심을 기록한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '한 판, 어떤가',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'왕이 "짐과 한 판, 어떤가" 청하면서도 자꾸 헛기침으로 위엄을 수습한다. 에이라가 솔직해지고 싶은 마음과 왕 노릇 사이의 갈등을 짚는다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '둥글게 모인 무리',
			boss: 'random_boss',
			npc: 'frost',
			summary:
				'프로스트가 왕을 둥글게 에워싼 작은 펭귄들을 본다. "혼자가 아닌데도… 더 큰 한 판을 바라는구나." 추위를 함께 견뎌온 자로서 나란히 설 마음을 낸다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '설렘으로 떠는 부리',
			boss: 'random_boss',
			npc: 'inka',
			summary:
				'인카가 날개를 펴는 왕의 부리가 추위가 아닌 설렘으로 떠는 것을 알아본다. "이건 결투가 아니라… 친구가 되어달라는 부탁이에요."'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '진심으로 한 판 붙어다오',
			boss: 'pool_033',
			npc: 'inka',
			summary:
				'Finn이 옥좌에서 내려와 짧은 날개를 활짝 편다. "이번엔… 진심으로 한 판 붙어다오." 친구가 되어달라는 서툰 청을 인카가 받아들이며, 피날레로 향하는 마지막 충돌이 벌어진다.'
		}
	],

	act_summary: {
		intro: '마지막 비탈, 감출 것 없어진 왕이 옥좌를 끌고 와 탐험대를 기다린다.',
		rising: '오락가락하는 청, 둥글게 모인 무리, 설렘으로 떠는 부리. 매듭짓는 에이라, 나란히 서는 프로스트, 청을 받아들이는 인카.',
		climax_finale: '날개를 활짝 편 왕이 "진심으로 한 판 붙어다오" 청하고, 그 부탁을 받아들이며 피날레로 향하는 충돌이 벌어진다.'
	}
};
