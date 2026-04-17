import type { StoryArc } from '../../types';
import { snowy_pools } from '../sample/monster';

export const storyarc_snowy_queen: StoryArc = {
	id: 'snowy_astrielle_sovereign',
	chapter_name: {
		korean: '얼어붙은 약속',
		english: 'The Frozen Vow',
		japanese: '凍てついた約束',
		chinese: '冻结的誓约',
		french: 'Le Serment Gelé',
		spanish: 'El Juramento Congelado',
		vietnamese: 'Lời Thề Đóng Băng',
		thai: 'คำสัญญาที่แข็งเยือก',
		hindi: 'जमी हुई शपथ'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'북방 설산 깊은 곳에 솟아오른 얼음 성. 수년 전 마법 아카데미에서 한 계승자가 제 힘을 통제하지 못한 사고가 있었다. 그날 이후 그녀는 사라졌고, 사람들은 "겨울의 여왕"이라 부른다. 탐험대에 합류한 아스트리는 — 그 아카데미의 동문이다.',
		rule:
			'여왕의 성에 다가간 자는 얼어붙는다. 아카데미는 그녀의 이름을 기록에서 지웠다. 그녀를 입에 올리는 것은 금기다.',
		secret:
			'여왕은 그 사고의 당사자다. 그리고 아스트리는 그 사고 현장에 있었다 — 함께 맞설 수 있었지만, 도망쳤다. 여왕은 그날 이후 아스트리의 죄책감까지도 자기 탓이라 여긴다.'
	},

	protagonist_goal: '얼음 성의 여왕이 누구인지 확인하고, 그때 못 한 말을 전하라.',

	act_tone: {
		intro: {
			mood: '되돌아온 한기',
			tension: 1,
			narrative_role:
				'아스트리가 성을 올려다보다 멈춘다. 피부에 닿는 한기가 너무 익숙하다. 오래전 실습실에서 느꼈던 바로 그 한기.'
		},
		rising: {
			mood: '외면해온 진실',
			tension: 3,
			narrative_role:
				'성 내부 곳곳에 아카데미 흔적이 있다. 아스트리는 자꾸 걸음이 무거워진다. 폭풍은 탐험대 전체가 아니라 그녀 한 사람에게만 집중된다.'
		},
		climax_finale: {
			mood: '마주함과 용서',
			tension: 5,
			narrative_role:
				'옥좌 앞. 여왕이 아스트리를 알아본다 — "…너는 왜 왔어, 아스트리." 폭풍이 거세진다. 아스트리는 발을 떼며 말한다 — "그때 도망쳐서 미안해. 네 옆에 서줬어야 했어."'
		}
	},

	final_boss: {
		id: 'AstrielleWinterSovereign',
		name: '아스트리엘 (Astrielle)',
		appearance:
			'A majestic and ethereal woman with flowing, platinum-white hair like tattered silk, standing in the heart of a grand, cathedral-like ice palace. She wears a gown intricately woven from unbreakable frost and shimmering, razor-sharp ice crystals that refract light into cool blues and violets. Her expression is a mix of sorrow and regal determination, with eyes like frozen stars. A subtle, swirling aura of absolute zero mist surrounds her, and fragile ice flowers bloom and shatter with every step she takes. Cinematic lighting with bioluminescent frost reflections, photorealistic style, high-fantasy aesthetic.',
		surface_identity:
			'영원한 겨울의 여왕. 그녀가 지난 자리는 모든 생명이 얼어붙어 침묵에 잠긴다. 세상을 하얗게 얼려버리려는 냉혹한 지배자.',
		true_identity:
			'본의 아니게 폭주하는 강력한 얼음의 힘을 가진 비운의 계승자. 사랑하는 이들을 제 힘으로 다치게 할까 봐 두려워, 스스로를 거대한 얼음 성에 가두고 감정을 얼려버렸다.',
		motivation:
			'탐험대가 자신에게 다가오는 것이 두렵다. 자신의 힘이 또다시 누군가를 해치기 전에, 그들을 이 얼어붙은 안식처에서 몰아내어 지키고 싶다.',
		twist:
			'"가까이 오지 마… 제발." 아스트리엘은 아름답지만 슬픈 목소리로 외치며 더 강력한 얼음 폭풍을 불러일으킨다. 그것은 공격이 아닌, 그녀의 간절한 거절이자 울음소리였다. 쓰러진 후 그녀의 성이 녹아내리기 시작할 때, 눈물이 얼어붙은 결정을 떨어뜨리며 속삭인다 — "…따뜻해. 너희의 온기가… 두려웠지만, 사실은… 아주 많이 그리웠어."'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '성 입구 얼음 기둥에 아카데미 문양이 깊이 새겨져 있다. 아스트리가 숨을 멈춘다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그녀가 마지막으로 남긴 표식이었다. 자기가 누구였는지 잊지 않으려고.'
		},
		{
			id: 'fs_02',
			hint: '복도에 찢어진 실습복 조각이 얼어붙어 있다. 아스트리가 그 표식을 알아본다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그날 사고 현장에서 아스트리가 남기고 간 조각이다. 여왕은 그것을 주워왔다.'
		},
		{
			id: 'fs_03',
			hint: '아스트리의 손목에 작은 얼음 결정이 맺힌다. 그녀는 어떤 패턴을 알아본다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그날 사고 때 힘의 파편이 아스트리에게 스며들었던 흔적. 여왕은 지금도 그녀를 알아본다.'
		},
		{
			id: 'fs_04',
			hint: '옥좌 방 앞 얼음 벽에 두 사람의 그림자 자국이 나란히 남아 있다. 한쪽은 또렷하고, 한쪽은 얕다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '또렷한 쪽은 남은 사람, 얕은 쪽은 도망친 사람. 그날의 두 사람이다.'
		}
	],

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '익숙한 한기',
			boss: 'random_boss',
			npc: 'Astri',
			summary:
				'탐험대가 얼음 성 앞에 선다. 아스트리가 멈춰 선다. "…이 한기, 나 알아." 입구 기둥에 낯익은 문양이 새겨져 있다. 아스트리는 말을 잃는다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '주워온 흔적',
			boss: 'random_boss',
			npc: 'Astri',
			summary:
				'성 내부. 얼음에 실습복 조각이 박혀 있다. 아스트리가 그것을 본 순간 얼굴이 굳는다 — 자기 것이다. 누군가 그날, 주워 와 보관해온 것이다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '너도 기억하는구나',
			boss: 'random_boss',
			npc: 'Astri',
			summary:
				'복도가 길어진다. 아스트리의 손목에 작은 얼음 결정이 맺히기 시작한다 — 옛 사고 때와 같은 패턴. 폭풍이 오직 그녀만을 때린다. "…아직도 날 알아보는구나."'
		},
		{
			order: 4,
			act: 'rising',
			title: '두 개의 그림자',
			boss: 'random_boss',
			npc: 'Astri',
			summary:
				'옥좌 방 앞. 벽에 나란한 두 그림자 자국. 한쪽은 깊고, 한쪽은 얕다. 아스트리가 얕은 쪽에 손을 얹는다 — "이건 그날의 나. 돌아서서 뛴 나." 숨을 고르고 다시 나아간다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '그때 도망쳐서 미안해',
			boss: snowy_pools.pool_034.pool_id as `pool_${string}`,
			npc: 'Astri',
			summary:
				'옥좌의 여왕이 아스트리를 알아본다 — "…너는 왜 왔어." 거대한 얼음 폭풍이 탐험대를 밀어낸다. "가까이 오지 마… 제발." 아스트리는 그 바람 속을 한 걸음씩 나아간다. "그때 도망쳐서 미안해. 네 옆에 서줬어야 했어." 왕관에 균열이 간다. 여왕이 무너지며 속삭인다 — "…미안해할 사람은 나야. 너를 다치게 할까 봐, 나는 너마저 밀어냈어."'
		}
	],

	act_summary: {
		intro: '설산의 한기가 너무 익숙하다. 아스트리는 자신이 외면해온 과거 앞에 선다.',
		rising: '아카데미 문양, 실습복 조각, 옛 결정 무늬. 여왕은 아스트리를 한 번도 잊지 않았다. 아스트리도 마찬가지다.',
		climax_finale: '"그때 도망쳐서 미안해." "미안해할 사람은 나야." 두 개의 사과가 교차하며 성이 녹는다.'
	}
};
