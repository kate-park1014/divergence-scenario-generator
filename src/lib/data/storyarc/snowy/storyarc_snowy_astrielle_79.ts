import type { StoryArc } from '$lib/types';

// Astrielle 시리즈 8편 (level 79) — 진실 회수: 감정을 얼린 까닭
export const storyarc_snowy_astrielle_79: StoryArc = {
	id: 'snowy_astrielle_79',
	level: 79,
	chapter_name: {
		korean: '감정을 얼린 까닭',
		english: 'Why She Froze Her Heart',
		japanese: '感情を凍らせた理由',
		chinese: '冰封情感的缘由',
		french: 'Pourquoi Elle a Gelé son Cœur',
		spanish: 'Por Qué Congeló su Corazón',
		vietnamese: 'Vì Sao Nàng Đóng Băng Trái Tim',
		thai: 'เหตุใดนางจึงเยือกแข็งหัวใจ',
		hindi: 'उसने अपना हृदय क्यों जमा लिया'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'궁전 중심부, 여왕의 심장과도 같은 얼어붙은 옥좌의 방. 옥좌를 둘러싼 서리 사슬은 그녀의 손목과 발목을 묶고 있다 — 그러나 그 사슬을 채운 것은 그녀 자신이었다.',
		rule: '옥좌의 방에서는 여왕의 힘이 가장 강대하다. 그러나 다가서는 온기 앞에서 그 힘은 통제를 잃을 듯 떨리고, 그녀는 그것을 두려워해 더 깊이 자신을 얼린다.',
		secret:
			'여왕은 폭주하는 힘으로부터 사랑하는 이들을 지키기 위해, 스스로를 얼음 성에 가두고 감정마저 얼려버렸다. 감정이 흔들리면 힘도 폭주하기에, 아무것도 느끼지 않는 것만이 그녀가 아는 유일한 보호였다.'
	},

	protagonist_goal: '여왕이 어째서 감정마저 얼려버렸는지, 그 스스로 채운 사슬의 까닭을 마주하라.',

	act_tone: {
		intro: {
			mood: '얼어붙은 심장',
			tension: 2,
			narrative_role:
				'여왕의 심장 같은 옥좌의 방. 그녀의 손목과 발목을 묶은 서리 사슬이, 스스로 채운 것임을 탐험대가 알아본다.'
		},
		rising: {
			mood: '흔들리는 봉인',
			tension: 4,
			narrative_role:
				'다가서는 온기 앞에서 여왕의 힘이 통제를 잃을 듯 떨린다. 감정이 흔들리면 힘도 폭주하기에, 그녀는 더 깊이 자신을 얼리려 한다. 인카의 온기가 그 봉인을 흔든다.'
		},
		climax_finale: {
			mood: '얼린 까닭의 고백',
			tension: 5,
			narrative_role:
				'인카가 손을 뻗자 Astrielle의 힘이 폭주할 듯 일렁인다. "느끼면… 무너져요. 아무것도 느끼지 않아야, 아무도 다치지 않아요." 감정을 얼린 까닭이 그 떨리는 고백 속에 드러난다.'
		}
	},

	final_boss: {
		id: 'AstrielleWinterSovereign',
		name: 'Astrielle',
		appearance:
			'A majestic platinum-haired woman bound to a frozen throne by frost chains she clasped upon herself, at the heart of a cathedral-like ice chamber. Her fragile frost gown trembles and her frozen-star eyes waver as approaching warmth threatens to unleash her power. Ice flowers bloom and shatter around the throne. Cinematic cold intimate lighting, sorrowful trembling high-fantasy aesthetic.',
		surface_identity:
			'옥좌의 방에서 가장 강대한 힘을 휘두르는 겨울 여왕. 다가서는 자를 더 거센 서리로 밀어낸다.',
		true_identity:
			'폭주하는 힘으로부터 사랑하는 이들을 지키려, 스스로를 얼음 성에 가두고 감정마저 얼려버린 비운의 계승자. 그녀를 묶은 사슬은 그녀 자신이 채운 것이다.',
		motivation:
			'감정이 흔들리면 힘도 폭주하기에, 아무것도 느끼지 않는 것만이 누군가를 다치게 하지 않는 유일한 길이라 믿는다. 그래서 그녀는 감정마저 얼려버렸다.',
		twist:
			'인카가 옥좌를 향해 손을 뻗자 Astrielle의 힘이 폭주할 듯 일렁인다. 그녀가 떨리는 목소리로 고백한다. "느끼면… 무너져요. 아무것도 느끼지 않아야, 아무도 다치지 않아요." 그녀가 감정마저 얼려버린 까닭 — 폭주하는 힘으로부터 사랑하는 이들을 지키려는 마음이, 마침내 드러난다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '여왕의 손목과 발목을 묶은 서리 사슬은, 안쪽에서 그녀 자신이 채운 것이다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '스스로 채운 사슬은, 힘이 폭주하지 못하도록 자신을 묶어둔 그녀의 안간힘이었다.'
		},
		{
			id: 'fs_02',
			hint: '온기가 다가설 때마다 여왕의 힘이 통제를 잃을 듯 거칠게 떨린다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '온기에 떨리는 힘은, 감정이 흔들리면 폭주하는 그녀의 저주의 본질이었다.'
		},
		{
			id: 'fs_03',
			hint: '여왕은 흔들릴 때마다 더 깊이, 더 차갑게 자신을 얼리려 한다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '더 차갑게 얼리는 것은, 아무것도 느끼지 않는 것만이 안전이라 믿은 그녀의 선택이었다.'
		},
		{
			id: 'fs_04',
			hint: '옥좌 둘레의 서리에, 미처 다 얼지 못한 따스한 무언가의 잔열이 어렴풋이 남아 있다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '다 얼지 못한 잔열은, 끝내 완전히 얼리지 못한 그녀의 그리움이었다.'
		}
	],

	npc_roles: {
		eira: {
			role: '사슬의 내력을 읽는 자',
			arc: '8편: 스스로 채운 서리 사슬과 옥좌의 흔적을 해독하여, 여왕이 힘을 묶어두려 자신을 봉인한 내력을 밝힌다.'
		},
		inka: {
			role: '온기로 봉인을 흔드는 자',
			arc: '8편: 옥좌를 향해 온기를 건네어, 감정을 얼린 여왕의 봉인을 흔든다. 그녀가 까닭을 고백하게 만드는 온기의 손길.'
		},
		bran: {
			role: '사슬을 끊으려는 길잡이',
			arc: '8편: 스스로 채운 사슬을 본 브란이, 그녀를 묶은 것은 힘이 아니라 두려움임을 깨닫고 그 사슬을 끊어 밖으로 이끌려 한다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '얼어붙은 옥좌',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 여왕의 심장 같은 옥좌의 방에 다다른다. 에이라가 여왕을 묶은 서리 사슬이 안쪽에서, 그녀 자신의 손으로 채워졌음을 알아보고 기록한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '흔들리는 힘',
			boss: 'random_boss',
			npc: 'inka',
			summary:
				'인카가 온기를 건네려 다가서자 여왕의 힘이 통제를 잃을 듯 떨린다. "감정이 흔들리면… 힘도 흔들리는 거예요." 인카가 그 연결을 알아챈다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '더 차갑게',
			boss: 'random_boss',
			npc: 'bran',
			summary:
				'브란이, 흔들릴 때마다 여왕이 더 깊이 자신을 얼리는 것을 본다. "스스로 채운 사슬이야. 그녀를 묶은 건 힘이 아니라 두려움이지." 그 사슬을 끊어 밖으로 이끌려 한다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '다 얼지 못한 잔열',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 옥좌 둘레 서리에 미처 다 얼지 못한 따스한 잔열이 남아 있음을 발견한다. "완전히는… 얼리지 못한 거예요. 그리움이 남아 있어요." 봉인의 틈을 읽어낸다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '느끼면 무너져요',
			boss: 'pool_034',
			npc: 'inka',
			summary:
				'인카가 옥좌를 향해 손을 뻗자 Astrielle의 힘이 폭주할 듯 일렁인다. "느끼면… 무너져요. 아무것도 느끼지 않아야, 아무도 다치지 않아요." 감정을 얼린 까닭 — 사랑하는 이들을 지키려는 마음이 떨리는 고백으로 드러난다.'
		}
	],

	act_summary: {
		intro: '여왕의 심장 같은 옥좌의 방. 그녀를 묶은 서리 사슬은 그녀 자신이 채운 것이었다.',
		rising: '흔들리는 힘을 알아챈 인카, 두려움의 사슬을 본 브란, 다 얼지 못한 잔열을 읽은 에이라. 감정을 얼린 까닭이 비친다.',
		climax_finale: '"아무것도 느끼지 않아야, 아무도 다치지 않아요." 폭주하는 힘으로부터 사랑하는 이들을 지키려 감정마저 얼린 까닭이 드러난다.'
	}
};
