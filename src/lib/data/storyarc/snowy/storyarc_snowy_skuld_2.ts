import type { StoryArc } from '$lib/types';

// Skuld 시리즈 1편 (level 2) — 첫 조우: 냉혹한 빙하 정령으로 오인
export const storyarc_snowy_skuld_2: StoryArc = {
	id: 'snowy_skuld_2',
	level: 2,
	chapter_name: {
		korean: '얼어붙은 수호자',
		english: 'The Frozen Guardian',
		japanese: '凍れる守護者',
		chinese: '冰封的守护者',
		french: 'Le Gardien Gelé',
		spanish: 'El Guardián Congelado',
		vietnamese: 'Người Bảo Hộ Băng Giá',
		thai: 'ผู้พิทักษ์เยือกแข็ง',
		hindi: 'जमा हुआ संरक्षक'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'북방의 잊힌 설원 깊은 곳. 끝없는 눈보라 너머로 푸른빛이 감도는 거대한 빙하가 솟아 있다. 탐험대는 "이 설원을 침범하는 자를 얼려버리는 태고의 정령이 있다"는 소문을 듣고 올라왔다. 빙하의 심장부에서 옅은 안개 같은 푸른 빛이 새어 나온다.',
		rule: '이 설원에 발을 들인 자는 빙하의 수호자에게 시험받는다. 침범자로 판단되면 모든 것이 얼어붙는다고 전해진다.',
		secret:
			'그 빙하 정령은 단순한 자연의 의지가 아니다. 투명한 얼음 덩어리 곳곳에는 고대 바이킹 선박의 용머리 조각과 룬 문양이 아스라이 새겨져 있다. 무언가가 그 안에 잠들어 있다.'
	},

	protagonist_goal: '설원을 얼려버린다는 태고의 빙하 정령의 정체를 확인하라.',

	act_tone: {
		intro: {
			mood: '장엄한 적막',
			tension: 1,
			narrative_role: '눈보라 너머 거대한 빙하가 모습을 드러낸다. 압도적이지만, 어딘가 쓸쓸한 기운이 감돈다.'
		},
		rising: {
			mood: '경외와 의혹',
			tension: 3,
			narrative_role:
				'빙하의 표면에 새겨진 용머리 조각과 룬 문양이 눈에 들어온다. 단순한 자연의 정령이라기엔 너무 정교한 흔적이다.'
		},
		climax_finale: {
			mood: '냉혹함 속 첫 균열',
			tension: 5,
			narrative_role:
				'탐험대가 빙하에 다가서자, 거대한 얼음 덩어리가 느리지만 압도적인 무게로 움직인다. 침범자를 용서치 않는 한기가 휘몰아치며 첫 시험이 시작된다.'
		}
	},

	final_boss: {
		id: 'GlacialOath_Skuld_V1',
		name: 'Skuld',
		appearance:
			'A colossal translucent figure of blue glacial ice rising from the heart of an endless snowfield, faint ancient Viking dragon-head carvings and worn runes embedded deep within the crystalline mass. Sharp blade-like surfaces glint, and a pale blue light radiates from inside, exhaling thin mist. Its movement is slow yet carries the overwhelming weight of a moving mountain of ice. Cinematic majestic snowy lighting, solemn and lonely high-fantasy aesthetic.',
		surface_identity:
			'북방의 잊힌 땅을 떠도는 태고의 빙하 정령. 모든 것을 얼리고 삼키려는 냉혹한 자연의 의지 그 자체로 여겨지며, 침범자를 용서치 않는 얼음의 수호자.',
		true_identity:
			'아직은 그저 거대한 얼음 정령처럼 보인다. 그러나 그 표면에 새겨진 용머리 조각과 정교한 룬 문양은, 이 존재가 단순한 자연의 일부가 아님을 어렴풋이 암시한다.',
		motivation:
			'침범자를 응징하고 설원을 얼어붙은 정적 속에 가두려 한다. 그러나 그 냉혹함 뒤에는 무언가를 지키려는, 혹은 기다리는 듯한 기운이 옅게 배어 있다.',
		twist:
			'탐험대가 빙하에 손을 대자, 거대한 얼음 덩어리가 느리게 움직이며 한기를 뿜는다. "…물러가라, 침범자여." 그 목소리에는 분노가 아니라, 수천 년을 견뎌온 자의 깊은 피로가 스며 있다. 빙하 깊은 곳에서 잠시, 룬 문양 하나가 푸르게 빛났다 사라진다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '빙하 표면에 옛 바이킹 선박의 용머리 조각이 아스라이 새겨져 있다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 용머리는 이 빙하가 단순한 얼음이 아니라, 한때 바다를 가르던 무언가였음을 가리킨다.'
		},
		{
			id: 'fs_02',
			hint: '얼음 깊은 곳에서 옅은 푸른빛이 안개처럼 피어오른다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 빛은 빙하 안에 갇힌 어떤 의지가 아직 깨어 있음을 보여주는 신호다.'
		},
		{
			id: 'fs_03',
			hint: '빙하가 움직일 때, 그 무게감이 자연의 정령이라기엔 너무도 거대한 선체의 그것을 닮았다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 거대한 무게는 빙하와 하나가 된 고대 선박의 무게였다.'
		},
		{
			id: 'fs_04',
			hint: '침범자를 응징하면서도, 그 한기에 분노보다 깊은 피로가 배어 있다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 피로는 수천 년을 홀로 견뎌온 존재만이 지닐 수 있는 것이었다.'
		}
	],

	npc_roles: {
		eira: {
			role: '첫 룬의 관찰자',
			arc: '1편: 동행단의 안내자로서 빙하에 새겨진 용머리와 룬 문양을 침착히 관찰하고 첫 단서를 기록한다.'
		},
		ivar: {
			role: '도전자',
			arc: '1편: 침범자를 용서치 않는다는 빙하 수호자의 위세에 호승심이 일어 그 힘을 시험하려 든다.'
		},
		hild: {
			role: '기운을 읽는 자',
			arc: '1편: 빙하의 냉혹함 속에 깃든 깊은 쓸쓸함과 비탄의 기운을 가장 먼저 감지한다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '빙하의 그림자 아래',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 눈보라를 뚫고 잊힌 설원에 들어선다. 동행단의 안내자 에이라가 빙하 표면의 용머리 조각과 룬 문양을 발견하고 첫 단서를 조용히 기록한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '수호자를 시험하다',
			boss: 'random_boss',
			npc: 'ivar',
			summary:
				'이바르가 침범자를 용서치 않는다는 빙하의 위세에 호승심을 느낀다. "그렇게 강하다면, 그 힘을 내게 보여라." 그러나 빙하는 느리고 무거운 한기로만 응답한다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '쓸쓸한 한기',
			boss: 'random_boss',
			npc: 'hild',
			summary:
				'힐드가 빙하의 한기 속에 깃든 깊은 쓸쓸함을 감지한다. "…이건 분노가 아니야. 무언가를… 너무 오래 견뎌온 자의 슬픔이야."'
		},
		{
			order: 4,
			act: 'rising',
			title: '깨어 있는 빛',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 얼음 깊은 곳에서 안개처럼 피어오르는 푸른빛을 기록한다. 빙하 안에 무언가가 아직 깨어 있다. 단순한 자연의 정령이 아니다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '물러가라, 침범자여',
			boss: 'pool_107',
			npc: 'ivar',
			summary:
				'빙하가 거대한 무게로 움직이며 한기를 뿜는다. "물러가라, 침범자여." 그 목소리엔 분노가 아닌 깊은 피로가 스민다. 호승심에 나섰던 이바르가 첫 시험을 맞고, 룬 하나가 잠시 푸르게 빛났다 사라진다.'
		}
	],

	act_summary: {
		intro: '잊힌 설원 깊은 곳, 용머리 조각이 새겨진 거대한 빙하가 솟아 있다. 동행단(에이라·이바르·힐드)이 함께 마주한다.',
		rising: '힘을 시험하려는 이바르, 쓸쓸함을 감지한 힐드, 깨어 있는 빛을 기록한 에이라. 단순한 자연의 정령이라기엔 너무도 정교한 흔적들이 보인다.',
		climax_finale: '"물러가라, 침범자여." 빙하의 한기에 분노가 아닌 피로가 스미고, 룬 하나가 잠시 푸르게 빛난다.'
	}
};
