import type { StoryArc } from '$lib/types';

// Archduke Finn 시리즈 3편 (level 20) — 탐나는 핫팩
export const storyarc_snowy_finn_20: StoryArc = {
	id: 'snowy_finn_20',
	level: 20,
	chapter_name: {
		korean: '왕의 시선이 머무는 곳',
		english: 'Where the King Keeps Looking',
		japanese: '王の視線が止まる場所',
		chinese: '王的目光停留之处',
		french: 'Là où le Roi Regarde Sans Cesse',
		spanish: 'Donde la Mirada del Rey se Detiene',
		vietnamese: 'Nơi Ánh Mắt Vua Dừng Lại',
		thai: 'ที่ที่สายตาราชาจับจ้อง',
		hindi: 'जहाँ राजा की नज़र टिकी रहती है'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'왕의 보물 창고라 불리는 얼음 방. 정작 안에는 빈 사르딘 깡통, 짝이 안 맞는 장갑, 닳아빠진 담요뿐이다. 그리고 왕의 시선은 자꾸 탐험대의 배낭, 정확히는 거기 매달린 핫팩으로 향한다.',
		rule: '왕의 보물 앞에서는 탐욕을 부려선 안 된다고 한다. 정작 가장 탐욕스러운 눈은 왕 자신의 것이다.',
		secret:
			'그가 진정 탐내는 것은 황금도 보석도 아니다. 따뜻한 핫팩 한 장, 방한 장비 한 벌이면 충분하다. 위엄을 부리다가도 그의 눈은 자꾸 그 따뜻한 것들로 미끄러진다.'
	},

	protagonist_goal: '왕이 자꾸 무언가를 곁눈질하는 이유를 살피며, 그가 진짜로 원하는 것이 무엇인지 알아내라.',

	act_tone: {
		intro: {
			mood: '들키는 곁눈질',
			tension: 1,
			narrative_role: '위엄을 부리는 와중에도 왕의 시선이 자꾸 한곳으로 미끄러진다.'
		},
		rising: {
			mood: '귀여운 탐심',
			tension: 2,
			narrative_role:
				'왕은 보물을 자랑하려다 말고 탐험대의 핫팩을 흘끔거린다. 위엄과 탐심 사이에서 부리가 자꾸 움찔거린다.'
		},
		climax_finale: {
			mood: '들통난 탐심',
			tension: 4,
			narrative_role:
				'핫팩을 들킨 왕이 화들짝 헛기침하며 "짐은 그딴 것에 관심 없다!"고 외치지만, 날개는 어느새 슬며시 그쪽으로 뻗어 있다.'
		}
	},

	final_boss: {
		id: 'ArchdukeFinnTheChilly',
		name: 'Archduke Finn',
		appearance:
			'A round plump penguin on a wobbly ice-cube throne inside a frosty treasure room filled with empty sardine cans, mismatched mittens, and a worn blanket, its eyes secretly drifting toward something warm offscreen. It wears an oversized sliding crown, neon ski goggles, a moth-eaten purple cape with a giant safety pin, and a thick wool muffler, holding a half-eaten frozen popsicle. Soft cinematic 3D animation style, glittering snow, vibrant warm and funny atmosphere.',
		surface_identity:
			'보물 창고에서 위엄을 과시하는 설산의 왕. 자신의 보물 앞에서 탐욕을 부리지 말라 경고한다.',
		true_identity:
			'그의 보물이라는 것은 초라하다. 정작 그의 눈은 탐험대의 따뜻한 장비로 자꾸 미끄러진다 — 그가 원하는 것은 황금이 아니다.',
		motivation:
			'탐험대가 가진 핫팩과 방한 장비가 너무 탐난다. 그러나 위엄을 지키려 애쓰느라 차마 솔직히 달라고 하지 못한다.',
		twist:
			'탐험대의 핫팩을 흘끔거리다 들킨 Finn이 화들짝 헛기침을 한다. "흠흠! 짐은 그딴 것에 일말의 관심도 없다!" 그러나 그의 날개는 어느새 슬며시 핫팩 쪽으로 뻗어 있고, 부리는 추위에 또 가늘게 떨린다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '왕의 보물 창고에 들어찬 것은 빈 깡통과 닳은 담요뿐이다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그의 보물은 따뜻함을 갈망하며 그러모은 초라한 살림이었다.'
		},
		{
			id: 'fs_02',
			hint: '위엄을 부리는 와중에도 왕의 시선이 자꾸 탐험대의 핫팩으로 미끄러진다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그가 진정 탐낸 것은 보석이 아니라 따뜻한 핫팩 한 장이었다.'
		},
		{
			id: 'fs_03',
			hint: '담요를 두른 작은 펭귄들이 서로 몸을 바짝 붙이고 떨고 있다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '왕도 신하도, 모두 추위에 떠는 무리였다.'
		},
		{
			id: 'fs_04',
			hint: '"짐은 관심 없다"고 외치면서도 그의 날개가 따뜻한 쪽으로 슬며시 움직인다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '말과 몸이 따로 놀았다. 위엄은 거짓이고, 따뜻함을 향한 갈망은 진심이었다.'
		}
	],

	npc_roles: {
		eira: {
			role: '시선을 좇는 기록자',
			arc: '3편: 왕의 시선이 자꾸 핫팩으로 미끄러지는 것을 기록하며, 그가 원하는 것이 보물이 아님을 짚어낸다.'
		},
		frost: {
			role: '온기의 가치를 아는 자',
			arc: '3편: 추위에 떠는 무리를 보고, 핫팩 한 장이 그들에게 보물보다 귀함을 헤아린다.'
		},
		inka: {
			role: '마음을 읽는 자',
			arc: '3편: "짐은 관심 없다"는 말 뒤의 슬며시 뻗은 날개에서, 차마 못 한 부탁을 읽어낸다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '초라한 보물 창고',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 왕의 보물 창고에 든다. 안에는 빈 사르딘 깡통과 닳은 담요뿐이다. 에이라가 그 초라함과, 자꾸 한곳으로 미끄러지는 왕의 시선을 기록한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '곁눈질하는 왕',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'왕이 보물을 자랑하려다 말고 탐험대의 핫팩을 흘끔거린다. 에이라가 그의 시선이 보석이 아니라 따뜻한 장비로 향함을 짚는다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '담요를 두른 무리',
			boss: 'random_boss',
			npc: 'frost',
			summary:
				'프로스트가 담요를 두르고 떠는 작은 펭귄들을 본다. "핫팩 한 장이 저들에겐 보물보다 귀하겠어." 온기의 가치를 헤아린다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '못 한 부탁',
			boss: 'random_boss',
			npc: 'inka',
			summary:
				'인카가 위엄 뒤에 차마 못 한 부탁을 읽는다. "그냥… 달라고 하면 될 텐데." 왕은 그 말에 화들짝 헛기침을 한다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '짐은 관심 없다',
			boss: 'pool_033',
			npc: 'frost',
			summary:
				'핫팩을 흘끔거리다 들킨 Finn이 "짐은 그딴 것에 관심 없다!"고 외치지만, 날개는 슬며시 그쪽으로 뻗어 있고 부리는 떨린다. 프로스트가 그 떨림을 마주한 채 세 번째 충돌이 벌어진다.'
		}
	],

	act_summary: {
		intro: '초라한 보물 창고. 왕의 시선이 자꾸 탐험대의 핫팩으로 미끄러진다.',
		rising: '곁눈질하는 왕, 떠는 작은 무리, 차마 못 한 부탁. 온기를 헤아리는 프로스트, 마음을 읽는 인카, 시선을 좇는 에이라.',
		climax_finale: '핫팩을 들킨 왕이 "관심 없다"고 우기지만 날개는 따뜻한 쪽으로 뻗는다. 세 번째 충돌.'
	}
};
