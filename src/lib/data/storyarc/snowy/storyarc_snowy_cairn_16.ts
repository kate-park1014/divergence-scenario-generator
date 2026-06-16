import type { StoryArc } from '$lib/types';

// Cairn 시리즈 2편 (level 16) — 지켜보는 침묵
export const storyarc_snowy_cairn_16: StoryArc = {
	id: 'snowy_cairn_16',
	level: 16,
	chapter_name: {
		korean: '지켜보는 침묵',
		english: 'The Watching Silence',
		japanese: '見つめる沈黙',
		chinese: '注视的沉默',
		french: 'Le Silence qui Observe',
		spanish: 'El Silencio que Observa',
		vietnamese: 'Sự Im Lặng Dõi Theo',
		thai: 'ความเงียบที่จับจ้อง',
		hindi: 'देखता हुआ सन्नाटा'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'돌무덤을 지나친 줄 알았던 탐험대가, 설원 곳곳에서 같은 형상의 돌무덤들과 다시 마주친다. 어디로 향하든 차가운 침묵이 그림자처럼 따라붙는다.',
		rule: '돌무덤은 곁을 지나는 자들의 말을 듣는다. 특히 서로 주고받는 약속과 다짐에 귀를 기울이는 듯하다.',
		secret:
			'그것은 같은 돌무덤이다. 탐험대가 멀어진 만큼, 돌무덤도 어느새 그들 앞에 다시 서 있다. 무언가가 그들을 지켜보며 따라오고 있다.'
	},

	protagonist_goal: '설원 곳곳에서 거듭 마주치는 돌무덤과 그 지켜보는 침묵의 정체를 살펴라.',

	act_tone: {
		intro: {
			mood: '되풀이되는 불안',
			tension: 2,
			narrative_role: '분명 지나쳤던 돌무덤이 다시 길 앞에 서 있다. 우연이라기엔 너무 똑같다.'
		},
		rising: {
			mood: '지켜보는 듯한 어둠',
			tension: 4,
			narrative_role:
				'어디로 가든 차가운 침묵이 따라붙는다. 탐험대가 서로 다짐을 주고받을 때마다, 돌무덤의 푸른빛이 조금씩 또렷해진다.'
		},
		climax_finale: {
			mood: '시선을 확인하다',
			tension: 6,
			narrative_role:
				'탐험대가 서로 한 약속을 입에 올린 순간, 돌무덤이 둔하게 진동한다. 그것이 분명 자신들을 지켜보고 있었음을 깨닫는다.'
		}
	},

	final_boss: {
		id: 'FrozenVow_Cairn_V1',
		name: 'Cairn',
		appearance:
			'The same ancient stone cairn reappearing across a snowfield at dusk, its runes now glowing faintly with cold blue light. Long shadows stretch from the stacked rocks though no sun is visible. Drifting snow seems to part around it. Cinematic eerie twilight snowy lighting, watchful ominous high-fantasy aesthetic.',
		surface_identity:
			'설원 곳곳에서 거듭 나타나는 같은 형상의 돌무덤. 분명 지나쳤는데도 어느새 다시 길 앞에 서 있다.',
		true_identity:
			'그것은 하나의 같은 돌무덤이다. 탐험대를 지켜보며 따라오고, 그들이 주고받는 약속과 다짐에 가만히 귀를 기울인다.',
		motivation:
			'곁을 지나는 자들의 말을, 특히 서로에게 건네는 약속을 가늠하려 한다. 그 말의 무게가 진실한지 시험하려는 듯하다.',
		twist:
			'탐험대가 서로 한 약속을 다시 입에 올린 순간, 돌무덤이 둔하게 진동하고 룬이 차가운 푸른빛으로 일렁인다. 바람조차 그것을 비켜 흐른다. 그제야 그들은 깨닫는다 — 이 침묵은 처음부터 자신들을 지켜보고 있었다는 것을.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '분명 지나쳤던 돌무덤이 다시 길 앞에 서 있다. 돌의 배열까지 똑같다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그것은 여러 개가 아니라 하나의 같은 돌무덤이, 탐험대를 따라온 것이었다.'
		},
		{
			id: 'fs_02',
			hint: '탐험대가 서로 다짐을 주고받을 때마다, 돌무덤의 룬이 한 톤씩 더 또렷하게 빛난다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '돌무덤은 약속이라는 말에 반응했다. 그것이 듣고자 한 것은 바로 맹세였다.'
		},
		{
			id: 'fs_03',
			hint: '드리운 그림자가 해의 방향과 맞지 않는다. 그림자는 늘 탐험대 쪽을 향한다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 그림자는 햇빛이 아니라, 돌무덤의 시선이 만들어낸 것이었다.'
		},
		{
			id: 'fs_04',
			hint: '날리던 눈발이 돌무덤 둘레에서만 비켜 흐른다. 마치 무언가 보이지 않는 형체가 거기 있는 듯하다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '눈이 비켜 가는 그 자리에, 깨어나려는 의식의 윤곽이 자리 잡고 있었다.'
		}
	],

	npc_roles: {
		eira: {
			role: '되풀이를 알아챈 자',
			arc: '2편: 돌무덤의 배열까지 똑같음을 기록으로 대조해, 그것이 같은 하나임을 처음 짚어낸다.'
		},
		ivar: {
			role: '시선에 맞서는 자',
			arc: '2편: 따라붙는 침묵을 호기롭게 무시하려 하지만, 지켜보는 시선의 압박에 처음으로 등골이 서늘해진다.'
		},
		anuk: {
			role: '약속을 경계하는 자',
			arc: '2편: 돌무덤이 약속이라는 말에 반응함을 알아채고, 함부로 다짐을 입에 올리지 말 것을 경고한다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '다시 그 자리에',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'설원을 한참 나아갔다 여긴 탐험대 앞에, 지나쳤던 것과 똑같은 돌무덤이 다시 서 있다. 에이라가 기록을 대조해 돌의 배열까지 같음을 짚는다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '무시하려 했으나',
			boss: 'random_boss',
			npc: 'ivar',
			summary:
				'이바르가 따라붙는 침묵을 호기롭게 무시하려 한다. "돌무더기 하나에 겁먹을 줄 알았나." 그러나 지켜보는 시선의 압박에 처음으로 등골이 서늘해진다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '약속을 입에 올리지 마',
			boss: 'random_boss',
			npc: 'anuk',
			summary:
				'아누크가 돌무덤의 룬이 다짐을 주고받을 때마다 또렷해짐을 알아챈다. "함부로 약속을 입에 올리지 마. 저것이 듣고 있어." 율법가다운 경계가 깊어진다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '비켜 가는 눈발',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 돌무덤 둘레에서만 눈발이 비켜 흐르고, 그림자가 늘 탐험대 쪽을 향함을 기록한다. 보이지 않는 형체가 거기 있는 듯하다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '지켜보고 있었다',
			boss: 'pool_111',
			npc: 'anuk',
			summary:
				'탐험대가 무심코 서로 한 약속을 다시 입에 올린다. 그 순간 돌무덤이 둔하게 진동하고 룬이 푸르게 일렁인다. 약속을 경계해온 아누크가 확신한다 — 이 침묵은 처음부터 우리를 지켜보고 있었다.'
		}
	],

	act_summary: {
		intro: '지나쳤던 돌무덤이 다시 길 앞에 선다. 에이라가 그것이 같은 하나임을 짚는다.',
		rising: '시선에 서늘해진 이바르, 약속을 경계하는 아누크, 비켜 가는 눈발을 기록하는 에이라. 어디로 가든 침묵이 따라붙는다.',
		climax_finale: '약속을 입에 올리자 돌무덤이 진동한다. 그것이 처음부터 우리를 지켜보고 있었음을 깨닫는다.'
	}
};
