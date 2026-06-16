import type { StoryArc } from '$lib/types';

// Astrielle 시리즈 3편 (level 29) — 심화: 폭풍은 거절이자 울음
export const storyarc_snowy_astrielle_29: StoryArc = {
	id: 'snowy_astrielle_29',
	level: 29,
	chapter_name: {
		korean: '울음을 닮은 폭풍',
		english: 'A Storm That Resembles Weeping',
		japanese: '泣き声に似た嵐',
		chinese: '宛如哭声的风暴',
		french: 'Une Tempête qui Ressemble à des Pleurs',
		spanish: 'Una Tormenta que Parece Llanto',
		vietnamese: 'Cơn Bão Tựa Như Tiếng Khóc',
		thai: 'พายุที่คล้ายเสียงร่ำไห้',
		hindi: 'रुदन जैसा तूफ़ान'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'궁전 외정의 얼어붙은 분수와 정원. 한때 누군가 가꾸었을 흔적이 서리 아래 잠들어 있다. 탐험대가 다가설 때마다 사방에서 폭풍이 일어 그들을 에워싼다.',
		rule: '여왕의 폭풍은 다가오는 자가 가까워질수록 거세진다. 그러나 그 굉음 속에는 분노의 외침이 아니라, 무언가를 애원하는 음색이 섞여 있다.',
		secret:
			'폭풍은 공격이 아니라 거절이며, 그 거절은 실은 울음이다. 여왕은 다가오는 온기가 두려워, 그것을 밀어내는 것으로 자신을 지키고 있다.'
	},

	protagonist_goal: '여왕의 폭풍 속에 섞인 음색의 정체를 듣고, 그것이 분노인지 울음인지 분간하라.',

	act_tone: {
		intro: {
			mood: '잠든 정원의 슬픔',
			tension: 2,
			narrative_role:
				'얼어붙은 분수와 정원이 서리 아래 잠들어 있다. 한때 생명이 가득했을 흔적이, 지금은 침묵 속에 박제되어 있다.'
		},
		rising: {
			mood: '귀를 기울이는 마음',
			tension: 4,
			narrative_role:
				'폭풍이 거세질수록 그 굉음 속의 음색이 또렷해진다. 분노의 외침이 아니라, 애원하는 듯한 떨림. 인카가 가장 먼저 그 소리에 귀를 기울인다.'
		},
		climax_finale: {
			mood: '거절 속의 울음',
			tension: 5,
			narrative_role:
				'탐험대가 한 걸음 더 다가서자 Astrielle가 가장 거센 폭풍을 일으킨다. "가까이… 오지 마요!" 그러나 그 외침은 공격이 아니라, 끝내 참지 못하고 터져 나온 울음에 가까웠다.'
		}
	},

	final_boss: {
		id: 'AstrielleWinterSovereign',
		name: 'Astrielle',
		appearance:
			'A majestic platinum-haired woman in a shattering frost gown, conjuring a vast swirling blizzard around herself within a frozen palace garden of icebound fountains. Her frozen-star eyes glisten as if holding back tears, and the howling storm seems to carry the sound of weeping rather than wrath. Ice flowers bloom and crumble at her feet. Cinematic cold sorrowful lighting, heartbreaking high-fantasy aesthetic.',
		surface_identity:
			'다가올수록 더 거센 폭풍을 일으키는 겨울 여왕. 그 굉음은 침입자를 짓누르는 분노처럼 들린다.',
		true_identity:
			'진실은 아직 다 드러나지 않았으나, 폭풍 속에 섞인 애원의 음색이 그녀의 분노가 실은 다른 감정의 가면임을 암시한다.',
		motivation:
			'다가오는 온기가 두려워 그것을 폭풍으로 밀어낸다. 그러나 밀어낼수록 그 거절은 더 깊은 슬픔을 닮아간다.',
		twist:
			'탐험대가 한 걸음 더 다가서자 Astrielle가 온 하늘을 뒤덮는 폭풍을 부른다. "가까이… 오지 마요!" 그러나 인카는 그 외침이 분노가 아님을 듣는다 — 그것은 거절의 형태를 빌린 울음이었다. 폭풍 한가운데, 그녀의 뺨을 타고 흐른 무언가가 떨어지기도 전에 얼어붙는다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '얼어붙은 정원에 한때 누군가 정성껏 가꾼 흔적이 서리 아래 남아 있다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '가꾸어진 정원의 흔적은, 그녀가 한때 사랑하는 이들과 온기를 나누었던 시절의 잔영이었다.'
		},
		{
			id: 'fs_02',
			hint: '폭풍의 굉음 속에 분노가 아닌, 애원하는 듯한 음색이 섞여 있다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '애원의 음색은, 거절의 가면을 쓴 그녀의 울음소리였다.'
		},
		{
			id: 'fs_03',
			hint: '가까워질수록 폭풍이 거세진다. 마치 다가오는 온기를 가장 두려워하듯.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '온기가 다가올수록 거세지는 폭풍은, 그녀가 가장 두려워하는 것이 바로 그 온기임을 알렸다.'
		},
		{
			id: 'fs_04',
			hint: '폭풍 한가운데, 여왕의 뺨을 타고 흐른 무언가가 떨어지기 전에 얼어붙는다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '얼어붙은 그것은 눈물이었다. 그녀의 폭풍은 처음부터 우는 것이었다.'
		}
	],

	npc_roles: {
		eira: {
			role: '정원의 잔영을 읽는 자',
			arc: '3편: 얼어붙은 정원의 흔적을 해독하며, 여왕이 한때 온기를 나누었던 시절이 있었음을 단서로 남긴다.'
		},
		inka: {
			role: '울음을 알아듣는 자',
			arc: '3편: 폭풍 속 음색이 분노가 아닌 울음임을 가장 먼저 알아듣고, 두려워 말고 귀 기울이자고 동료들을 다독인다.'
		},
		bran: {
			role: '한 걸음을 내딛는 자',
			arc: '3편: 폭풍에 맞서기보다, 길잡이로서 그녀를 밖으로 이끌 한 걸음을 조심스레 가늠한다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '얼어붙은 정원',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 서리 아래 잠든 분수와 정원에 다다른다. 에이라가 한때 누군가 정성껏 가꾼 흔적을 발견하고, 여왕에게도 온기의 시절이 있었음을 기록한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '굉음 속의 음색',
			boss: 'random_boss',
			npc: 'inka',
			summary:
				'폭풍이 거세지자 인카가 귀를 기울인다. "…저 소리, 화내는 게 아니에요. 애원하고 있어요." 굉음 속에 섞인 애원의 음색을 가장 먼저 알아챈다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '두려운 온기',
			boss: 'random_boss',
			npc: 'bran',
			summary:
				'브란이 다가설수록 폭풍이 거세지는 것을 본다. "가까워질수록 더 막아서는군… 우리 온기를 두려워하는 거야." 길잡이로서 그녀를 어떻게 밖으로 이끌지 고민한다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '얼어붙은 한 방울',
			boss: 'random_boss',
			npc: 'inka',
			summary:
				'인카가 폭풍 한가운데, 여왕의 뺨을 타고 흐른 무언가가 떨어지기 전에 얼어붙는 것을 본다. "…우는 거예요. 저 폭풍은, 울음이에요." 거절의 정체를 확신한다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '가까이 오지 마요',
			boss: 'pool_034',
			npc: 'inka',
			summary:
				'한 걸음 더 다가서자 Astrielle가 온 하늘을 덮는 폭풍을 부른다. "가까이… 오지 마요!" 인카는 그것이 분노가 아닌 울음임을 듣는다. 거절의 형태를 빌린 그녀의 슬픔이 폭풍으로 터져 나온다.'
		}
	],

	act_summary: {
		intro: '서리 아래 잠든 정원. 한때 온기로 가꾸어졌던 흔적이 여왕의 다른 얼굴을 암시한다.',
		rising: '굉음 속 음색을 듣는 인카, 두려운 온기를 읽는 브란, 정원의 잔영을 남기는 에이라. 폭풍이 울음일지 모른다는 의심이 짙어진다.',
		climax_finale: '가장 거센 폭풍과 함께 터진 "가까이 오지 마요." 그 거절은 분노가 아니라, 끝내 참지 못한 울음이었다.'
	}
};
