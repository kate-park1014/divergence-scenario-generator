import type { StoryArc } from '$lib/types';

// Archduke Finn 시리즈 2편 (level 10) — 흔들리는 옥좌
export const storyarc_snowy_finn_10: StoryArc = {
	id: 'snowy_finn_10',
	level: 10,
	chapter_name: {
		korean: '흔들리는 얼음 옥좌',
		english: 'The Wobbly Ice Throne',
		japanese: '揺れる氷の玉座',
		chinese: '摇晃的冰之王座',
		french: 'Le Trône de Glace Branlant',
		spanish: 'El Tambaleante Trono de Hielo',
		vietnamese: 'Ngai Băng Lung Lay',
		thai: 'บัลลังก์น้ำแข็งที่โยกเยก',
		hindi: 'डगमगाता बर्फ़ का सिंहासन'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'왕의 알현실로 향하는 얼음 회랑. 곳곳에 "무릎 꿇어라" 따위의 카드보드 팻말이 붙어 있지만, 글씨는 점점 삐뚤어지고 한 장은 "제발 좀 무서워해줘"라고 쓰다 만 흔적이 비친다.',
		rule: '왕의 옥좌 앞에서는 누구도 고개를 들어선 안 된다고 한다. 정작 왕 자신은 옥좌 위에서 끊임없이 균형을 잡느라 바쁘다.',
		secret:
			'얼음 큐브 옥좌는 조금만 움직여도 위태롭게 흔들린다. 왕은 위엄을 지키려 꼿꼿이 앉아 있으려 애쓰지만, 그럴수록 더 자주 미끄러질 뻔한다.'
	},

	protagonist_goal: '위엄을 부리는 왕의 알현실로 나아가, 그 어설픔 뒤에 무엇이 숨었는지 더 가까이 살펴라.',

	act_tone: {
		intro: {
			mood: '점점 새어 나오는 어설픔',
			tension: 1,
			narrative_role: '회랑의 팻말들이 점점 솔직해진다. 위엄의 가면에 작은 금이 비친다.'
		},
		rising: {
			mood: '안쓰러운 호기심',
			tension: 2,
			narrative_role:
				'왕은 옥좌 위에서 자꾸 균형을 잃을 뻔하면서도 위엄을 지키려 한다. 협박은 점점 안쓰러워진다.'
		},
		climax_finale: {
			mood: '코미디 속 흔들림',
			tension: 4,
			narrative_role:
				'위엄을 부리려 벌떡 일어선 순간 옥좌가 크게 흔들린다. 왕은 양팔을 허우적대며 겨우 버티고, "…짐은, 짐은 흔들리지 않는다!"고 우긴다.'
		}
	},

	final_boss: {
		id: 'ArchdukeFinnTheChilly',
		name: 'Archduke Finn',
		appearance:
			'A round plump penguin teetering atop a wobbly throne of stacked ice cubes and frozen sardines, flapping its little wings to keep balance while trying to look majestic, an oversized crown sliding over one eye. It wears a moth-eaten purple velvet cape pinned with a giant golden safety pin, neon ski goggles, and a thick wool muffler, gripping a half-eaten frozen popsicle as a scepter. Crooked cardboard signs lean nearby. Glittering snowy hall, soft cinematic 3D animation style, vibrant warm and funny atmosphere.',
		surface_identity:
			'옥좌 위에서 흔들림 없는 위엄을 과시하려는 설산의 왕. 침입자에게 무릎 꿇기를 명한다.',
		true_identity:
			'위엄의 가면이 점점 헐거워진다. 흔들리는 옥좌 위에서 균형을 잡느라 바쁜 그는, 진짜 왕이라기엔 어딘가 너무 안쓰럽다.',
		motivation:
			'옥좌 위의 위엄을 끝까지 지켜내고 싶어 한다. 그러나 그럴수록 옥좌는 더 위태롭게 흔들린다.',
		twist:
			'위엄을 부리려 벌떡 일어선 순간, 얼음 큐브 옥좌가 크게 휘청인다. Finn은 양팔을 허우적대며 겨우 버티고, 왕관은 또 한쪽 눈을 덮는다. "…짐은! 짐은 결코 흔들리지 않는다!" 새빨개진 부리 끝이 그 외침과 어긋난다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '회랑 팻말 한 장에 "제발 좀 무서워해줘"라고 쓰다 만 흔적이 남아 있다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '협박조차 부탁에 가까웠다. 그는 무서운 존재가 되고 싶었던 것이 아니라 외면당하기 싫었을 뿐이다.'
		},
		{
			id: 'fs_02',
			hint: '왕이 위엄을 부릴수록 옥좌가 더 크게 흔들린다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '쌓아 올린 위엄은 얼음 큐브처럼 위태로웠다. 진짜가 아니기에 흔들렸다.'
		},
		{
			id: 'fs_03',
			hint: '명령을 외치는 사이사이 그의 부리가 추위에 가늘게 떨린다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '왕의 위엄 아래에는 추위에 떠는 작은 몸이 있었다.'
		},
		{
			id: 'fs_04',
			hint: '작은 펭귄 하나가 흘러내린 왕관을 슬그머니 다시 올려준다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '신하라기보다 친구에 가까운 펭귄들. 그는 무리를 모아 곁을 채우고 있었다.'
		}
	],

	npc_roles: {
		eira: {
			role: '가면의 금을 읽는 자',
			arc: '2편: 회랑 팻말의 솔직한 흔적과 흔들리는 옥좌를 기록하며, 위엄의 가면에 난 금을 짚어낸다.'
		},
		inka: {
			role: '안쓰러워하는 자',
			arc: '2편: 균형을 잡느라 허우적대는 왕을 보며, 협박보다 안쓰러움을 먼저 느낀다.'
		},
		frost: {
			role: '떨림을 알아채는 자',
			arc: '2편: 명령 사이사이 떨리는 부리에서 그가 견디는 한기를 읽어낸다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '솔직해지는 팻말',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 얼음 회랑에 들어선다. "무릎 꿇어라" 팻말 사이에 "제발 좀 무서워해줘"라고 쓰다 만 한 장이 섞여 있다. 에이라가 위엄의 가면에 난 금을 기록한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '흔들리지 않는다',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'왕이 위엄을 부릴수록 옥좌가 더 흔들린다. "짐은 흔들리지 않는다!" 그러나 얼음 큐브는 위태롭다. 에이라가 그 어긋남을 짚는다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '허우적대는 위엄',
			boss: 'random_boss',
			npc: 'inka',
			summary:
				'인카가 균형을 잡느라 양팔을 허우적대는 왕을 본다. 협박은 점점 안쓰러워진다. "…저 사람, 무섭게 보이고 싶은 거지 무섭진 않아요."'
		},
		{
			order: 4,
			act: 'rising',
			title: '떨리는 부리',
			boss: 'random_boss',
			npc: 'frost',
			summary:
				'프로스트가 명령 사이사이 가늘게 떨리는 왕의 부리를 알아챈다. "위엄 아래, 추위에 떠는 몸이 있어." 동병상련이 깊어진다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '짐은 흔들리지 않는다',
			boss: 'pool_033',
			npc: 'inka',
			summary:
				'위엄을 부리려 벌떡 일어선 Finn의 옥좌가 크게 휘청인다. 허우적대며 겨우 버틴 그가 "짐은 결코 흔들리지 않는다!"고 우긴다. 인카가 안쓰러운 눈으로 지켜보는 가운데 두 번째 충돌이 벌어진다.'
		}
	],

	act_summary: {
		intro: '얼음 회랑의 팻말이 점점 솔직해진다. "제발 좀 무서워해줘". 위엄의 가면에 금이 비친다.',
		rising: '흔들리는 옥좌, 허우적대는 위엄, 떨리는 부리. 안쓰러워하는 인카, 한기를 읽는 프로스트, 금을 기록하는 에이라.',
		climax_finale: '벌떡 일어선 왕의 옥좌가 휘청이고, 그는 "흔들리지 않는다"고 우기며 새빨간 부리로 두 번째 충돌을 맞는다.'
	}
};
