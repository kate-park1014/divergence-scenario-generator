import type { StoryArc } from '$lib/types';

export const storyarc_slow_data: StoryArc = {
	id: 'forest_sloth',
	chapter_name: {
		korean: '느린 숲',
		english: 'The Slow Forest',
		japanese: '緩やかな森',
		chinese: '迟缓之森',
		french: 'La Forêt Lente',
		spanish: 'El Bosque Lento',
		vietnamese: 'Khu Rừng Chậm Rãi',
		thai: 'ป่าแห่งความเชื่องช้า',
		hindi: 'धीमा वन'
	},
	theme: 'forest',
	rising_count: 3,

	world: {
		setting:
			'발을 들이는 순간 모든 게 느려지는 숲. 시간이 다르게 흐른다. 들어온 자들은 서두를 이유를 잊는다.',
		rule: '숲에서는 아무것도 쫓아오지 않는다. 아무것도 잃지 않는다. 그래서 나가려는 사람이 없다.',
		secret:
			'숲 깊은 곳의 정령 슬로우가 고요함으로 사람들을 붙잡아두고 있다. 악의는 없다. 그냥 — 떠나보내는 법을 모를 뿐이다.'
	},

	protagonist_goal: '숲에 들어간 후 돌아오지 않는 사람들을 찾아 데려와라.',

	act_tone: {
		intro: {
			mood: '나른함과 평온',
			tension: 1,
			narrative_role:
				'숲에 들어서는 순간 이상하게 편안하다. 서두를 이유가 없는 것 같다. 탐험대도 조금씩 느려진다.'
		},
		rising: {
			mood: '흐릿한 의심',
			tension: 3,
			narrative_role:
				'실종자들을 찾았다. 근데 그들은 돌아가기 싫다고 한다. 탐험대도 점점 숲에 익숙해져간다. 이상하다.'
		},
		climax_finale: {
			mood: '연민과 선택',
			tension: 5,
			narrative_role:
				'슬로우를 만난다. 싸우면서도 속삭인다 — 서두르지 않아도 된다고. 쓰러진 후 묻는다 — 정말 가고 싶냐고.'
		}
	},

	final_boss: {
		id: '',
		name: '슬로우',
		appearance:
			'A colossal sloth spirit draped in living moss and ancient vines, moving with unbearable slowness yet radiating overwhelming stillness. Closed eyes like weathered bark, long curved claws wrapped gently around a tree as if embracing the world. Soft bioluminescent moss glows faintly across its body — warm, lulling, impossible to hate.',
		surface_identity: '숲 깊은 곳에서 움직이지 않는 거대한 존재. 탐험대의 앞을 막아서는 최후의 적.',
		true_identity:
			'수백 년간 숲에서 잠든 채 모든 걸 지켜본 정령. 고요함 속에 길을 잃은 자들을 품어왔다. 떠나보내는 것이 두렵다.',
		motivation:
			'탐험대가 지쳐있다는 걸 안다. 여기 있으면 편하다는 것도 안다. 그냥 — 더 있으면 안 되냐고 묻고 싶다.',
		twist:
			'"서두르지 않아도 돼." 슬로우는 싸우면서도 속삭인다. "여기선 아무것도 쫓아오지 않아. 아무것도 잃지 않아." 쓰러진 후 천천히 눈을 뜨며 말한다 — "…가고 싶어? 정말로?"'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '숲에 들어서는 순간 발걸음이 자연스럽게 느려진다. 나쁘지 않다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 9,
			reveal_context: '슬로우의 기운이 처음부터 숲 전체에 퍼져있었다.'
		},
		{
			id: 'fs_02',
			hint: '실종자들은 도망친 흔적이 없다. 그냥 앉아있던 자리다.',
			plant_act: 'rising',
			plant_room: 3,
			reveal_act: 'climax_finale',
			reveal_room: 5,
			reveal_context: '자발적으로 머물렀다. 슬로우가 강제한 게 아니었다.'
		},
		{
			id: 'fs_03',
			hint: '탐험대 중 누군가 말한다 — 사실 여기 좀 더 있어도 될 것 같다고.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '슬로우의 고요함이 탐험대에도 스며들고 있었다.'
		},
		{
			id: 'fs_04',
			hint: '숲 안에선 시간이 얼마나 지났는지 모른다. 배고프지도 않다. 피곤하지도 않다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '슬로우가 숲 안의 시간을 붙잡아두고 있었다.'
		}
	],

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '느린 숲',
			boss: 'pool_013',
			npc: 'lumina',
			summary:
				'탐험대가 숲에 들어선다. 이상하게 편안하다. 루미나가 합류한다. 실종자들을 찾아야 하는데 — 서두를 이유가 없는 것 같다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '앉아있던 자리',
			boss: 'pool_011',
			npc: 'selena',
			summary:
				'실종자들의 흔적을 발견한다. 도망친 흔적이 아니다. 셀레나가 치료를 해주려 하지만 — 다들 다친 곳이 없다. 그냥 앉아서 쉬고 있다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '여기 좀 더 있어도 되지 않나',
			boss: 'pool_014',
			npc: 'reina',
			summary:
				'실종자들을 만났다. 돌아가기 싫다고 한다. 레이나도 흔들린다 — "사실 나도 여기 좀 더 있고 싶은데." 탐험대, 정신 차려야 한다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '시간',
			boss: 'pool_012',
			npc: 'lyra_meadowsong',
			summary:
				'리라가 경고한다 — "너희 숲에 들어온 지 얼마나 됐는지 알아?" 탐험대가 계산한다. 말이 안 된다. 훨씬 오래됐다. 슬로우의 존재를 처음으로 감지한다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '서두르지 않아도 돼',
			boss: 'pool_random',
			npc: 'elara',
			summary:
				'엘라라가 슬로우의 진실을 말한다. 악의가 없다. 그냥 외롭다. 슬로우와 마주한다. 싸우면서도 속삭인다 — 서두르지 않아도 된다고. 쓰러진 후 묻는다 — 정말 가고 싶냐고.'
		}
	],

	act_summary: {
		intro: '편안한 숲. 발걸음이 느려진다. 나쁘지 않다.',
		rising: '실종자들은 돌아가기 싫다. 탐험대도 흔들린다. 시간이 이상하게 흐른다.',
		climax_finale: '슬로우는 악당이 아니다. 그냥 혼자였다. 쓰러진 후 묻는다 — 정말 가고 싶냐고.'
	}
};
