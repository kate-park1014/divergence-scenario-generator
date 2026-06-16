import type { StoryArc } from '$lib/types';

// SkalHorn 시리즈 4편 (level 35) — 표면에 떠오르는 얼굴들
export const storyarc_snowy_skalhorn_35: StoryArc = {
	id: 'snowy_skalhorn_35',
	level: 35,
	chapter_name: {
		korean: '수정 속의 얼굴들',
		english: 'Faces Within the Crystal',
		japanese: '水晶の中の顔',
		chinese: '水晶中的面孔',
		french: 'Les Visages dans le Cristal',
		spanish: 'Los Rostros en el Cristal',
		vietnamese: 'Những Gương Mặt Trong Pha Lê',
		thai: 'ใบหน้าในผลึก',
		hindi: 'स्फटिक के भीतर के चेहरे'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'뿔잔의 수정 같은 표면이 점점 투명해진다. 깊은 곳을 들여다보면, 얼음에 갇힌 듯한 일그러진 얼굴들이 어른거린다. 노래와 한기의 근원이 그 안에 있다.',
		rule: '잔의 표면을 똑바로 들여다본 자는 그 얼굴들과 눈이 마주친다. 그 순간 갇힌 자들의 기억 한 조각이 머릿속을 스친다.',
		secret:
			'표면에 비치는 얼굴들은 한때 살아 있던 사람들이다. 그들의 절규와 노래가 잔 속에 함께 봉인되어, 끝없는 축제의 합창을 이루고 있다.'
	},

	protagonist_goal: '뿔잔의 표면 속에 어른거리는 얼굴들의 정체를 밝혀내라.',

	act_tone: {
		intro: {
			mood: '서늘한 응시',
			tension: 1,
			narrative_role: '투명해진 표면 깊은 곳에서 무언가가 어른거린다. 들여다보면, 그것은 사람의 얼굴 같다.'
		},
		rising: {
			mood: '갇힌 자들의 시선',
			tension: 3,
			narrative_role:
				'얼굴들이 하나둘 또렷해진다. 일그러진 표정으로 무언가를 호소하는 듯하고, 눈이 마주치면 낯선 기억이 스친다.'
		},
		climax_finale: {
			mood: '봉인된 절규',
			tension: 5,
			narrative_role:
				'표면 속 얼굴들이 일제히 입을 벌리고, 노래와 절규가 한 몸이었음이 드러난다. 그들은 갇힌 사람들이며, 축제의 찬가는 그들의 비명이었다.'
		}
	},

	final_boss: {
		id: 'MadFeast_SkalHorn_V1',
		name: 'SkalHorn',
		appearance:
			'A colossal ceremonial drinking horn whose crystalline surface has turned eerily translucent, revealing dozens of contorted human faces frozen and suspended within the ice. The faces seem to mouth a silent song, eyes wide and pleading. A cold blue glow pulses behind them. Haunting frozen snowy lighting, sorrowful and uncanny high-fantasy aesthetic.',
		surface_identity:
			'표면이 투명해진 거대한 뿔잔. 그 안에 어른거리는 형상들은 마치 유물에 깃든 옛 영령이나 신성한 환영처럼 보인다.',
		true_identity:
			'표면 속 얼굴들은 한때 살아 있던 사람들이다. 그들의 절규와 노래가 잔 속에 함께 봉인되어, 끝없는 축제의 합창을 이루고 있다.',
		motivation:
			'뿔잔은 갇힌 얼굴들을 새 손님에게 보여주며, 그들이 누리는 영원한 축제에 함께하라 권한다. 거부하는 자는 이 환대를 모르는 무례한 자일 뿐이다.',
		twist:
			'표면 속 얼굴들이 일제히 입을 벌린다. 정겹던 노래가 그 순간 절규로 갈라지고, 노래와 비명이 본디 한 몸이었음이 드러난다. 그들은 신성한 환영이 아니라 잔에 갇힌 사람들이며, 끝없는 축제의 찬가는 그들이 빠져나오지 못한 채 부르는 비명이었다. 잔의 한기가 그 진실 위로 더욱 거세게 몰아친다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '투명해진 표면 깊은 곳에서 사람의 얼굴 같은 형상이 어른거린다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 형상들은 환영이 아니라 잔에 갇힌 실제 사람들의 얼굴이었다.'
		},
		{
			id: 'fs_02',
			hint: '얼굴과 눈이 마주치면 낯선 기억 한 조각이 머릿속을 스친다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 기억은 갇힌 자들이 마지막으로 본 광경 — 얼어붙던 자기 마을의 모습이었다.'
		},
		{
			id: 'fs_03',
			hint: '얼굴들이 하나같이 일그러진 표정으로 무언가를 호소하는 듯하다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 호소는 함께하자는 권유가 아니라, 빠져나가게 해달라는 절규였다.'
		},
		{
			id: 'fs_04',
			hint: '얼굴이 또렷해질 때마다 노래의 가락이 미세하게 비명처럼 갈라진다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '노래와 비명은 처음부터 한 몸이었다 — 축제의 찬가는 갇힌 자들의 절규였다.'
		}
	],

	npc_roles: {
		eira: {
			role: '얼굴을 읽는 기록자',
			arc: '4편: 표면 속 얼굴들과 그들이 전하는 기억을 해독하며, 이들이 실재했던 사람들임을 밝혀낸다.'
		},
		ivar: {
			role: '연민하는 전사',
			arc: '4편: 호소하는 얼굴들 앞에서, 영광을 좇던 마음 대신 갇힌 자들을 향한 분노와 연민을 느낀다.'
		},
		boris: {
			role: '환영을 의심하는 회의주의자',
			arc: '4편: 신성한 환영이라는 겉모습을 의심하며, 얼굴들이 실제 사람일 가능성을 끝까지 파고든다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '투명해진 표면',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'뿔잔의 표면이 투명해진다. 에이라가 그 깊은 곳에서 어른거리는 얼굴 같은 형상을 발견하고 첫 단서로 기록한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '눈이 마주쳤다',
			boss: 'random_boss',
			npc: 'boris',
			summary:
				'보리스가 표면을 똑바로 들여다본다. 얼굴과 눈이 마주친 순간 낯선 기억이 스친다. "환영이 아니야. 이건… 실제로 있었던 사람이야."'
		},
		{
			order: 3,
			act: 'rising',
			title: '호소하는 얼굴',
			boss: 'random_boss',
			npc: 'ivar',
			summary:
				'이바르가 일그러진 채 무언가를 호소하는 얼굴들을 마주한다. 영광을 좇던 마음이 가라앉고, 갇힌 자들을 향한 연민과 분노가 차오른다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '갇힌 자들의 기억',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 얼굴들이 전하는 기억을 해독한다. 얼어붙던 마을, 흩어지던 비명. 이들은 분명 한때 살아 있던 사람들이다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '노래였던 비명',
			boss: 'pool_110',
			npc: 'eira',
			summary:
				'표면 속 얼굴들이 일제히 입을 벌리고, 노래가 절규로 갈라진다. 에이라가 그 진실을 읽어낸다 — 축제의 찬가는 갇힌 자들의 비명이었다. 한기가 거세게 몰아치며 결전이 벌어진다.'
		}
	],

	act_summary: {
		intro: '뿔잔의 표면이 투명해지고, 그 안에서 사람의 얼굴 같은 형상이 어른거린다. 에이라가 기록한다.',
		rising: '실재를 간파하는 보리스, 연민하는 이바르, 기억을 해독하는 에이라. 얼굴들은 한때 살아 있던 사람들이다.',
		climax_finale: '얼굴들이 입을 벌리고 노래가 절규로 갈라지며, 축제의 찬가가 갇힌 자들의 비명이었음이 드러난다.'
	}
};
