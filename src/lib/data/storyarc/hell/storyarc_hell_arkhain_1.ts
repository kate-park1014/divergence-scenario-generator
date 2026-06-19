import type { StoryArc } from '$lib/types';

export const storyarc_hell_arkhain_1: StoryArc = {
	id: 'hell_arkhain_1',
	level: 1,
	chapter_name: {
		korean: '계승자의 반지',
		english: "The Heir's Ring",
		japanese: '継承者の指輪',
		chinese: '继承者的戒指',
		french: "L'Anneau de l'Héritier",
		spanish: 'El Anillo del Heredero',
		vietnamese: 'Chiếc Nhẫn Của Kẻ Kế Thừa',
		thai: 'แหวนของผู้สืบทอด',
		hindi: 'उत्तराधिकारी की अंगूठी'
	},
	theme: 'hell',
	rising_count: 3,

	world: {
		setting:
			'지옥을 떠도는 조용한 안내자가 있다. 그는 강대한 힘이 깃든 반지와 그것을 다루는 올바른 방법을 안다고 하며, 길 잃은 자들에게 손을 내민다.',
		rule: '지옥엔 결코 쥐어서는 안 되는 힘이 있다. 그러나 그 힘은 언제나 — 딱 한 번만 쓰면 된다고 속삭인다.',
		secret:
			'아르카인은 반지를 소유하려는 모든 가능성이 집합된 존재다. 누구든 반지를 쥐려는 순간, 그 욕망이 그를 완성시킨다. 즉, 탐험대의 선택이 곧 이 보스를 만들어낸다.'
	},

	protagonist_goal: '반지의 힘을 안내해준다는 지옥의 조력자를 좇아, 그 반지에 손을 대도 되는지 — 혹은 그것이 함정인지 밝혀라.',

	act_tone: {
		intro: {
			mood: '솔깃한 인도',
			tension: 1,
			narrative_role: '지옥에서 만난 차분한 안내자. 그는 위험을 헤쳐 나갈 힘과 그 사용법을 알려준다.'
		},
		rising: {
			mood: '커지는 유혹',
			tension: 3,
			narrative_role: '더 나은 선택, 더 큰 힘. 안내자는 늘 반지를 쥐는 쪽으로 길을 낸다. 탐험대도 흔들린다.'
		},
		climax_finale: {
			mood: '겹쳐지는 운명',
			tension: 5,
			narrative_role: '반지를 쥐는 순간 수십 개의 미래가 겹쳐진다. 욕망이 보스를 완성한다 — 선택이 곧 적이었다.'
		}
	},

	final_boss: {
		id: 'RingBearer_V0',
		name: 'Arkhain',
		appearance:
			'서로 겹쳐진 수많은 자기 자신으로 이루어진 균열된 존재. 저마다 다른 손가락에 반지를 끼고 있다. 어떤 것은 왕이고, 어떤 것은 시체이며, 어떤 것은 그림자다. 반지가 격렬하게 빛나며 주위의 현실을 잡아 늘인다. 마치 여러 미래가 동시에 존재하려 다투듯 팔다리가 복제되고 무너진다. 그 아래 땅은 부서진 왕관과 녹아내린 황금으로 뒤틀린 왕좌의 방이 된다.',
		surface_identity: '반지의 힘을 이해하고 통제할 수 있는 유일한 안내자. 올바른 사용법을 알려주는 조력자.',
		true_identity:
			"반지를 \"소유\"하려는 모든 가능성이 집합된 존재. 누구든 반지를 가지려는 순간, 그 욕망이 이 존재를 완성시킨다. 즉, 플레이어의 선택이 곧 이 보스를 만든다.",
		motivation:
			'탐험대가 반지를 포기하지 못하도록 유도한다. 더 나은 선택, 더 큰 힘, 더 빠른 해결을 제시하며 결국 반지를 쥐게 만든다.',
		twist:
			"\"넌 다르게 쓸 수 있어.\" 아르카인은 조용히 속삭인다. \"망가뜨리는 게 아니라… 바로잡는 거지.\" 손에 반지가 쥐어지는 순간 — 시야가 겹쳐진다. 수십 개의 미래가 동시에 보인다. 왕이 된 너, 파괴자가 된 너, 아무것도 남기지 못한 너. 그의 목소리가 겹친다 — \"봐… 전부 너야.\" 몸이 갈라지듯 분열한다. 이미 늦었다. \"반지를 원한 순간부터… 넌 이미 나였다.\""
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '안내자는 결코 강요하지 않는다 — 그저 반지를 쥐는 쪽이 더 쉽다고 보여줄 뿐이다.',
			plant_act: 'intro',
			plant_room: 2,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '강요할 필요가 없었다. 욕망이 스스로 그를 완성시키니까.'
		},
		{
			id: 'fs_02',
			hint: '반지를 쳐다볼 때마다, 잠깐씩 자신이 그것을 낀 미래의 환영이 스친다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 14,
			reveal_context: '그 환영들이 모두 아르카인의 분열된 자아였다.'
		},
		{
			id: 'fs_03',
			hint: '안내자의 손가락마다 똑같은 반지가 끼워져 있는데, 그 수가 만날 때마다 늘어난다.',
			plant_act: 'rising',
			plant_room: 6,
			reveal_act: 'climax_finale',
			reveal_room: 13,
			reveal_context: '반지를 탐낸 자들이 하나씩 그의 일부가 되어온 흔적이었다.'
		},
		{
			id: 'fs_04',
			hint: '그는 탐험대가 입 밖에 내지 않은 욕망까지 정확히 짚어 제안한다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 12,
			reveal_context: '그가 곧 그 욕망 그 자체이기 때문이었다.'
		}
	],

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '반지의 안내자',
			boss: 'random_boss',
			npc: 'vex',
			summary:
				'지옥의 위험 속에서 차분한 안내자를 만난다. 그는 강대한 반지와 그 사용법을 안다고 한다. 벡스가 경계하지만, 그의 조언은 번번이 옳다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '더 나은 선택',
			boss: 'random_boss',
			npc: 'drox',
			summary:
				'막다른 길마다 안내자는 반지를 쥐는 쪽으로 길을 낸다. 드록스가 반지를 볼 때마다, 그것을 낀 자신의 미래가 잠깐씩 스친다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '겹치는 미래',
			boss: 'random_boss',
			npc: 'soot',
			summary:
				'수트가 알아챈다 — 안내자의 손가락마다 똑같은 반지가 끼워져 있고, 만날 때마다 그 수가 늘어난다. 반지를 탐낸 자들의 흔적처럼.'
		},
		{
			order: 4,
			act: 'rising',
			title: '말하지 않은 욕망',
			boss: 'random_boss',
			npc: 'mire',
			summary:
				'안내자가 마이어가 입 밖에 낸 적 없는 욕망까지 정확히 짚어 제안한다. 그는 우리를 너무 잘 안다. 마치 우리 안에서부터 말하는 것처럼.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '계승자의 반지',
			boss: 'pool_082',
			npc: 'vex',
			summary:
				'반지를 쥐는 순간 수십 개의 미래가 겹쳐진다. "반지를 원한 순간부터 넌 이미 나였다." 아르카인은 반지를 탐한 모든 욕망의 집합이었고, 그를 부른 건 탐험대 자신이었다. 욕망을 끊어낼 것인가, 또 하나의 그가 될 것인가.'
		}
	],

	act_summary: {
		intro: '지옥을 떠도는 조용한 안내자. 그는 강대한 반지와 그 사용법을 안다고 손을 내민다.',
		rising:
			'안내자는 늘 반지를 쥐는 쪽으로 길을 낸다. 그의 손가락마다 같은 반지가 늘어가고, 말하지 않은 욕망까지 꿰뚫는다.',
		climax_finale:
			'아르카인은 반지를 탐한 모든 가능성의 집합. 그를 완성시킨 것은 다름 아닌 탐험대의 선택이었다.'
	}
};
