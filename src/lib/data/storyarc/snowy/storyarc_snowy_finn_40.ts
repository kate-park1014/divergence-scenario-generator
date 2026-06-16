import type { StoryArc } from '$lib/types';

// Archduke Finn 시리즈 5편 (level 40) — 눈싸움 한 판, 어떤가
export const storyarc_snowy_finn_40: StoryArc = {
	id: 'snowy_finn_40',
	level: 40,
	chapter_name: {
		korean: '눈싸움 한 판, 어떤가',
		english: 'Care for a Snowball Fight',
		japanese: '雪合戦を一勝負どうだ',
		chinese: '来一场雪仗如何',
		french: 'Une Bataille de Boules de Neige',
		spanish: 'Una Pelea de Bolas de Nieve',
		vietnamese: 'Một Trận Ném Tuyết Nhé',
		thai: 'มาปาหิมะกันสักตั้งไหม',
		hindi: 'एक बर्फ़-युद्ध हो जाए'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'왕의 연무장이라 불리는 눈밭. 침입자를 처형한다더니, 왕은 슬그머니 눈덩이를 빚어 쌓아두고 있다. 처형의 위협과 놀이의 설렘 사이에서 그의 부리가 자꾸 씰룩거린다.',
		rule: '왕은 침입자에게 "무자비한 결투"를 명한다. 그러나 그가 준비한 무기는 잘 뭉친 눈덩이뿐이다.',
		secret:
			'그가 진짜 바라는 것은 처형이 아니라 눈싸움 한 판이다. 누군가와 진심으로 눈을 던지고 까르르 웃어본 지가 너무 오래되었다.'
	},

	protagonist_goal: '결투를 명하는 왕이 정작 빚어둔 눈덩이를 보며, 그가 진짜로 바라는 한 가지를 알아내라.',

	act_tone: {
		intro: {
			mood: '들뜬 위협',
			tension: 1,
			narrative_role: '처형을 예고하면서도 왕이 슬그머니 눈덩이를 빚어 쌓아둔다.'
		},
		rising: {
			mood: '설렘과 위엄 사이',
			tension: 2,
			narrative_role:
				'무자비한 결투를 명하는데, 정작 무기는 잘 뭉친 눈덩이뿐이다. 위협과 놀이 사이에서 부리가 씰룩거린다.'
		},
		climax_finale: {
			mood: '들켜버린 설렘',
			tension: 4,
			narrative_role:
				'탐험대가 눈덩이를 집어 들자 왕의 눈이 반짝인다. "그, 그래! 짐의 무자비한 결투를 받아라!" 그러나 그 외침은 처형보다 놀이의 초대에 가깝게 들린다.'
		}
	},

	final_boss: {
		id: 'ArchdukeFinnTheChilly',
		name: 'Archduke Finn',
		appearance:
			'A round plump penguin on a wobbly ice-cube throne in a snowy training yard, a neat pile of carefully packed snowballs hidden behind the throne, its eyes sparkling with poorly concealed excitement. It wears an oversized sliding crown, neon ski goggles, a moth-eaten purple cape with a giant safety pin, and a thick wool muffler, holding a half-eaten frozen popsicle. Soft cinematic 3D animation style, playful warm tone, glittering snow, vibrant colors.',
		surface_identity:
			'침입자에게 무자비한 결투를 명하는 설산의 왕. 누구도 살아 돌아가지 못하리라 으름장을 놓는다.',
		true_identity:
			'그가 준비한 무기는 잘 뭉친 눈덩이뿐이다. 처형의 위협 뒤로, 함께 놀고 싶은 설렘이 자꾸 비어져 나온다.',
		motivation:
			'솔직히 말해서, 그냥 누가 자기랑 눈싸움 한 판만 진심으로 해줬으면 좋겠다. 처형은 핑계고, 함께 웃을 한순간이 그립다.',
		twist:
			'탐험대가 눈덩이를 집어 들자 Finn의 눈이 반짝인다. "그, 그래! 짐의 무자비한 결투를 받아라!" 그러나 들뜬 목소리도, 신나게 흔들리는 짧은 날개도, 처형보다 놀이의 초대에 한참 가깝다. 그는 화들짝 헛기침으로 위엄을 수습하려 든다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '옥좌 뒤에 잘 뭉친 눈덩이들이 가지런히 쌓여 있다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '정성껏 빚어둔 눈덩이는 처형 도구가 아니라 눈싸움 준비물이었다.'
		},
		{
			id: 'fs_02',
			hint: '결투를 명하는 와중에 왕의 짧은 날개가 신나게 들썩인다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '들썩이는 날개는 위협이 아니라 설렘의 신호였다.'
		},
		{
			id: 'fs_03',
			hint: '작은 펭귄들도 어느새 눈덩이를 하나씩 쥐고 들떠 있다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '무리 전체가 바란 것은 결투가 아니라 다 함께 어울려 노는 한순간이었다.'
		},
		{
			id: 'fs_04',
			hint: '"무자비한 결투"라는 말끝이 자꾸 들뜬 웃음으로 흐려진다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '협박조차 놀이의 초대였다. 그는 외로움을 눈싸움으로 달래고 싶었다.'
		}
	],

	npc_roles: {
		eira: {
			role: '의도를 읽는 기록자',
			arc: '5편: 가지런한 눈덩이 더미와 들썩이는 날개를 기록하며, 결투의 명령 뒤에 숨은 놀이의 의도를 짚어낸다.'
		},
		frost: {
			role: '온기를 권하는 자',
			arc: '5편: 함께 노는 한순간의 온기가 추위를 잊게 함을 알기에, 눈싸움의 초대에 가만히 응할 마음을 낸다.'
		},
		inka: {
			role: '설렘을 알아보는 자',
			arc: '5편: 들뜬 목소리와 짧은 날개의 떨림에서, 처형이 아니라 같이 놀자는 부탁임을 알아본다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '쌓여 있는 눈덩이',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 왕의 연무장 눈밭에 든다. 처형을 예고한다더니 옥좌 뒤에 잘 뭉친 눈덩이가 가지런히 쌓여 있다. 에이라가 그 어긋남을 기록한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '무자비한 결투',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'왕이 무자비한 결투를 명하지만 무기는 눈덩이뿐이고 짧은 날개가 신나게 들썩인다. 에이라가 놀이의 의도를 짚는다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '눈덩이를 쥔 무리',
			boss: 'random_boss',
			npc: 'inka',
			summary:
				'인카가 어느새 눈덩이를 쥐고 들뜬 작은 펭귄들을 본다. "이건 결투가 아니라… 같이 놀자는 거예요." 설렘을 알아본다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '함께 노는 온기',
			boss: 'random_boss',
			npc: 'frost',
			summary:
				'프로스트가 함께 노는 한순간의 온기를 떠올린다. "추위는 혼자일 때 가장 매서워." 눈싸움의 초대에 응할 마음을 낸다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '결투를 받아라',
			boss: 'pool_033',
			npc: 'frost',
			summary:
				'탐험대가 눈덩이를 집자 Finn의 눈이 반짝인다. "짐의 무자비한 결투를 받아라!" 그러나 그 외침은 놀이의 초대에 가깝다. 프로스트가 가만히 응하는 가운데 다섯 번째 충돌이 눈싸움처럼 벌어진다.'
		}
	],

	act_summary: {
		intro: '연무장 눈밭, 옥좌 뒤에 가지런히 쌓인 눈덩이. 처형의 위협과 놀이의 설렘이 뒤섞인다.',
		rising: '무기는 눈덩이뿐, 들썩이는 날개, 들뜬 무리. 설렘을 알아보는 인카, 온기를 권하는 프로스트, 의도를 읽는 에이라.',
		climax_finale: '눈덩이를 집어 든 탐험대 앞에서 왕의 눈이 반짝이고, 결투를 가장한 눈싸움 같은 다섯 번째 충돌이 벌어진다.'
	}
};
