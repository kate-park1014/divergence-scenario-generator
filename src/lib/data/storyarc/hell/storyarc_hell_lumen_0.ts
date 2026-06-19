import type { StoryArc } from '$lib/types';

export const storyarc_hell_lumen_0: StoryArc = {
	id: 'hell_lumen_0',
	level: 0,
	chapter_name: {
		korean: '자비의 손길',
		english: 'The Merciful Touch',
		japanese: '慈悲の手',
		chinese: '慈悲之手',
		french: 'La Main Miséricordieuse',
		spanish: 'La Mano Misericordiosa',
		vietnamese: 'Bàn Tay Từ Bi',
		thai: 'สัมผัสแห่งความเมตตา',
		hindi: 'दया का स्पर्श'
	},
	theme: 'hell',
	rising_count: 3,

	world: {
		setting:
			'고통받는 영혼들이 끝없이 신음하는 지옥 한가운데, 상처를 어루만지고 기도해주는 따뜻한 사제가 있다. 그의 손길이 닿은 자는 거짓말처럼 평온해진다.',
		rule: '지옥에서 고통은 곧 살아있다는 증거다. 그 고통을 덜어준다는 자는 성자처럼 떠받들어진다.',
		secret:
			'사제 루멘은 고통을 없애는 유일한 길이 의지 자체를 제거하는 것이라 믿는다. 그가 베푸는 구원이란 감정도 선택도 모두 지워버린 완전한 순종 상태다.'
	},

	protagonist_goal: '고통받는 영혼들을 치유한다는 지옥의 사제를 찾아, 그 자비로운 손길이 정말 구원인지 밝혀라.',

	act_tone: {
		intro: {
			mood: '따뜻한 안식',
			tension: 1,
			narrative_role: '지옥 한복판에서 상처를 치유해주는 사제. 그 온기는 이 지옥에 어울리지 않을 만큼 따뜻하다.'
		},
		rising: {
			mood: '사라지는 감정',
			tension: 3,
			narrative_role: '구원받은 자들이 고통과 함께 기쁨도, 자기 자신도 잃어간다. 평온이 곧 공허로 드러난다.'
		},
		climax_finale: {
			mood: '완전한 순종',
			tension: 5,
			narrative_role: '사제의 가면이 갈라지고, 의지를 지운 구원의 진짜 얼굴이 드러난다. 고통 없는 평온인가, 존재의 말살인가.'
		}
	},

	final_boss: {
		id: 'KindPriest_V0',
		name: 'Lumen',
		appearance:
			"수십 개의 길게 늘어진 팔을 가진 기괴한 세라핌 같은 존재. 각각의 팔이 몸부림치는 영혼들에게 '구원'을 강요한다. 그 얼굴은 여러 개의 평온한 가면으로 갈라져 있고, 모두가 부자연스럽게 미소 짓는다. 눈을 멀게 하는 성스러운 빛이 불처럼 타오르고, 경전의 사슬이 모든 것을 제자리에 결박한다.",
		surface_identity: '상처 입은 자들을 치유하고 기도해주는 따뜻한 사제.',
		true_identity:
			"고통을 제거하는 가장 확실한 방법은 \"의지 자체를 제거하는 것\"이라 믿는 존재. 모든 존재를 순종하는 상태로 \"구원\"하려 한다.",
		motivation: '탐험대의 고통과 선택을 없애고 완벽한 평온 속에 가두려 한다.',
		twist:
			"\"이제 괜찮습니다.\" 루멘은 미소 지으며 손을 얹는다. 순간, 감정이 사라진다. 고통도, 기쁨도. \"보세요. 아무것도 느끼지 않으니… 괴롭지 않죠?\" 그의 얼굴이 갈라진다 — \"이것이… 완전한 구원입니다.\""
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '사제에게 치유받은 자들이 하나같이 잔잔하게 웃지만, 눈빛엔 아무것도 담겨 있지 않다.',
			plant_act: 'intro',
			plant_room: 2,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '고통과 함께 감정과 의지까지 지워진 자들이었다.'
		},
		{
			id: 'fs_02',
			hint: '구원받은 자는 더 이상 아무것도 원하지 않는다 — 배고픔도, 두려움도, 탈출조차도.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 14,
			reveal_context: '의지를 지우는 것이 곧 루멘이 말하는 구원이었다.'
		},
		{
			id: 'fs_03',
			hint: '사제의 얼굴이 빛에 반사될 때마다, 평온한 가면 아래로 또 다른 가면이 겹쳐 보인다.',
			plant_act: 'rising',
			plant_room: 6,
			reveal_act: 'climax_finale',
			reveal_room: 13,
			reveal_context: '그에게 진짜 얼굴은 없다. 미소 짓는 가면만이 끝없이 갈라질 뿐이다.'
		},
		{
			id: 'fs_04',
			hint: '경전의 구절이 적힌 사슬이 치유받은 자들의 손목을 부드럽게 휘감고 있다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 12,
			reveal_context: '치유가 아니라, 영혼을 제자리에 결박하는 구속이었다.'
		}
	],

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '지옥의 사제',
			boss: 'random_boss',
			npc: 'char',
			summary:
				'고통의 비명이 가득한 지옥에서 뜻밖의 온기를 만난다. 차르가 상처를 사제에게 맡긴다. 손길이 닿자 고통이 사라진다 — 너무 쉽게, 너무 완전하게.'
		},
		{
			order: 2,
			act: 'rising',
			title: '평온해진 자들',
			boss: 'random_boss',
			npc: 'mara',
			summary:
				'구원받았다는 자들이 잔잔히 웃지만 눈은 텅 비어 있다. 마라가 그들에게 말을 걸어보지만, 아무도 무언가를 원하지 않는다. 고통만 사라진 게 아니다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '감정을 잃다',
			boss: 'random_boss',
			npc: 'cinder',
			summary:
				'신더가 시험 삼아 구원받은 자를 위협해본다. 두려움도, 분노도 없다. 기쁨도. 고통과 함께 그 무엇도 느끼지 못하는 껍데기만 남았다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '미소의 정체',
			boss: 'random_boss',
			npc: 'pyre',
			summary:
				'파이어가 사제의 얼굴을 똑바로 본다. 빛이 흔들릴 때마다 평온한 가면 아래 또 다른 가면이 겹친다. 그에겐 진짜 얼굴이 없다 — 돌이킬 수 없는 곳에 와 있다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '완전한 구원',
			boss: 'pool_081',
			npc: 'char',
			summary:
				'사제의 가면이 갈라지고 수십 개의 팔이 뻗어 나온다. "보세요. 아무것도 느끼지 않으니 괴롭지 않죠?" 그가 베푸는 구원은 의지 자체의 말살이었다. 고통을 안고 살아남을 것인가, 평온한 무(無)가 될 것인가.'
		}
	],

	act_summary: {
		intro: '지옥 한복판에서 상처를 치유해주는 따뜻한 사제. 그 온기가 이 지옥에 어울리지 않는다.',
		rising:
			'구원받은 자들이 감정도 욕망도 잃어간다. 사제의 얼굴은 가면이 겹겹이 갈라지고, 경전의 사슬이 그들을 묶고 있다.',
		climax_finale: '루멘이 베푸는 구원은 의지 자체를 지운 완전한 순종이었다. 평온인가, 존재의 말살인가.'
	}
};
