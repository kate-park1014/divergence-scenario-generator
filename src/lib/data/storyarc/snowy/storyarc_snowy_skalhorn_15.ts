import type { StoryArc } from '$lib/types';

// SkalHorn 시리즈 2편 (level 15) — 웅얼거리는 축제의 노래
export const storyarc_snowy_skalhorn_15: StoryArc = {
	id: 'snowy_skalhorn_15',
	level: 15,
	chapter_name: {
		korean: '웅얼거리는 축제',
		english: 'The Murmuring Feast',
		japanese: 'つぶやく祝祭',
		chinese: '低语的盛宴',
		french: 'Le Festin Murmurant',
		spanish: 'El Festín que Murmura',
		vietnamese: 'Bữa Tiệc Thì Thầm',
		thai: 'งานเลี้ยงที่กระซิบ',
		hindi: 'फुसफुसाता उत्सव'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'뿔잔을 둘러싼 눈밭이 점점 넓어진다. 어디선가 끊임없이 웅얼거리는 축제의 노랫소리가 들려오고, 발걸음을 옮길 때마다 그 가락이 머릿속에 들러붙는다.',
		rule: '뿔잔의 노래를 오래 듣는 자는 흥얼거리며 따라하게 된다. 동행단은 서로의 입가에서 낯선 가락이 새어 나오는 것을 알아챈다.',
		secret:
			'그 노래는 잔 안에 갇힌 수많은 목소리가 하나로 뒤섞인 합창이다. 즐거운 축제 찬가처럼 들리지만, 가락의 틈새마다 누군가의 흐느낌이 섞여 있다.'
	},

	protagonist_goal: '눈밭에 끝없이 울려 퍼지는 축제의 노래가 어디서 오는지 밝혀내라.',

	act_tone: {
		intro: {
			mood: '귀에 들러붙는 가락',
			tension: 1,
			narrative_role: '눈밭에 웅얼거리는 축제의 노래가 낮게 깔린다. 정겨운 듯하면서도 자꾸 신경을 긁는다.'
		},
		rising: {
			mood: '스며드는 위화감',
			tension: 3,
			narrative_role:
				'노랫소리가 점점 또렷해지고, 동행단의 입가에서 자기도 모르게 낯선 가락이 새어 나온다. 즐거운 찬가 속에 흐느낌이 섞여 있다.'
		},
		climax_finale: {
			mood: '뒤섞인 합창의 정체',
			tension: 5,
			narrative_role:
				'노래의 근원을 좇자 뿔잔이 또렷이 진동하며, 한 가락이 아니라 수많은 목소리가 뒤엉킨 합창임이 드러난다. 그 안에 분명한 비명이 섞여 있다.'
		}
	},

	final_boss: {
		id: 'MadFeast_SkalHorn_V1',
		name: 'SkalHorn',
		appearance:
			'A colossal ceremonial drinking horn glowing with cold pale light in a widening snowfield, faint translucent strands of song rippling out from its rim like frozen breath. The ritual runes on its surface seem to vibrate softly. Within the crystalline rim, blurred suggestions of many faces shimmer for an instant. Hushed eerie snowy lighting, sacred yet unsettling high-fantasy aesthetic.',
		surface_identity:
			'끝없이 축제의 노래를 흘려보내는 거대한 뿔잔. 여전히 거룩한 유물처럼 보이며, 그 가락은 마치 옛 축제의 흥겨움을 되살리는 듯하다.',
		true_identity:
			'잔 안에서 새어 나오는 노래는 하나의 목소리가 아니다. 수많은 목소리가 뒤섞인 합창이며, 그 틈새마다 흐느낌과 비명이 깃들어 있다.',
		motivation:
			'뿔잔은 다가오는 자들을 노래로 붙들어두려 한다. 한 사람이라도 더 그 가락에 젖어들기를, 함께 흥얼거려주기를 바라는 듯하다.',
		twist:
			'노래의 근원을 좇아 뿔잔에 다가서자, 잔이 또렷이 진동한다. 정겹게 들리던 축제 찬가가 갈라지며, 그것이 한 가락이 아니라 수많은 목소리가 뒤엉킨 합창임이 드러난다. 가락의 틈새마다 분명한 비명과 흐느낌이 섞여 있고, 주위 공기가 한층 더 얼어붙는다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '눈밭에 낮게 깔린 축제의 노랫소리가 자꾸 머릿속에 들러붙는다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 가락은 듣는 이를 잔의 합창에 끌어들이려는 유혹이었다.'
		},
		{
			id: 'fs_02',
			hint: '동행단의 입가에서 자기도 모르게 낯선 가락이 새어 나온다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '노래는 듣는 자의 의지를 천천히 갉아 자신의 합창단으로 만들고 있었다.'
		},
		{
			id: 'fs_03',
			hint: '흥겨운 가락의 틈새마다 누군가의 흐느낌 같은 소리가 끼어든다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '흐느낌은 잔 안에 갇힌 자들이 즐거운 척 부르는 노래의 진짜 얼굴이었다.'
		},
		{
			id: 'fs_04',
			hint: '노랫소리가 커질수록 발밑의 눈이 더 단단히 얼어붙는다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '노래와 한기는 한 몸이었다 — 가락이 짙어질수록 빙설의 권능도 함께 퍼졌다.'
		}
	],

	npc_roles: {
		eira: {
			role: '가락의 기록자',
			arc: '2편: 웅얼거리는 노래를 받아 적으며, 그것이 한 목소리가 아닌 여러 목소리의 합창임을 알아챈다.'
		},
		ivar: {
			role: '가락에 홀린 전사',
			arc: '2편: 흥겨운 축제 노래에 호승심과 흥취가 일다가, 입가에서 새어 나오는 낯선 가락에 흠칫 놀란다.'
		},
		boris: {
			role: '귀를 막는 회의주의자',
			arc: '2편: 정겨운 노래일수록 더 의심하며, 가락의 틈새에 섞인 흐느낌을 끝까지 놓치지 않는다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '들러붙는 가락',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 노랫소리를 따라 눈밭을 나아간다. 에이라가 웅얼거리는 축제의 가락을 받아 적으며, 그것이 뿔잔에서 흘러나옴을 첫 단서로 기록한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '나도 모르게',
			boss: 'random_boss',
			npc: 'ivar',
			summary:
				'이바르가 흥겨운 가락에 절로 흥취가 오른다. 그러나 문득 자기 입가에서 낯선 노래가 새어 나오는 것을 깨닫고 흠칫 놀란다. "…내가 왜 이걸 흥얼거리고 있지?"'
		},
		{
			order: 3,
			act: 'rising',
			title: '흐느낌이 섞였다',
			boss: 'random_boss',
			npc: 'boris',
			summary:
				'보리스가 정겨운 노래를 의심하며 귀를 곤두세운다. "이거… 즐거운 노래가 아니야. 사이사이에 누가 울고 있어." 가락 틈새의 흐느낌을 짚어낸다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '하나가 아닌 목소리',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 받아 적은 가락을 분석한다. 한 사람의 노래가 아니라 수많은 목소리가 겹쳐 있다. 단순한 유물이 부를 수 없는 합창이다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '뒤엉킨 합창',
			boss: 'pool_110',
			npc: 'boris',
			summary:
				'노래의 근원에 다다르자 뿔잔이 또렷이 진동하고, 정겹던 찬가가 갈라지며 수많은 목소리와 비명이 뒤엉킨 합창임이 드러난다. 흐느낌을 놓치지 않던 보리스가 그 진실 앞에서 결전을 맞는다.'
		}
	],

	act_summary: {
		intro: '눈밭에 들러붙는 축제의 노래를 따라간다. 에이라가 그 근원이 뿔잔임을 기록한다.',
		rising: '가락에 홀린 이바르, 흐느낌을 짚어내는 보리스, 합창임을 알아채는 에이라. 정겨운 노래에 비명이 섞여 있다.',
		climax_finale: '뿔잔이 진동하며 노래가 수많은 목소리와 비명의 합창이었음이 드러나고, 공기가 더욱 얼어붙는다.'
	}
};
