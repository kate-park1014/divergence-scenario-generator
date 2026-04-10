import type { StoryArc } from '../../types';

export const storyarc_false_spring: StoryArc = {
	id: 'forest_false_spring',
	chapter_name: {
		korean: '거짓 봄',
		english: 'False Spring',
		japanese: '偽りの春',
		chinese: '虚假的春天',
		french: 'Faux Printemps',
		spanish: 'Falsa Primavera',
		vietnamese: 'Mùa Xuân Giả',
		thai: 'ฤดูใบไม้ผลิปลอม',
		hindi: 'झूठी बसंत'
	},
	theme: 'forest',
	rising_count: 3,

	world: {
		setting:
			'한겨울에도 꽃이 피는 숲. 마을 사람들은 그 숲을 신성하게 여겼다. 하지만 숲에 들어간 자는 돌아오지 않는다.',
		rule: '숲 깊은 곳에 봄의 정령이 산다. 정령의 가호로 숲은 겨울에도 꽃을 피운다고 전해진다.',
		secret:
			'정령은 외로움에 미쳐 사람들의 영혼을 붙잡아두고 있다. 붙잡힌 영혼들은 행복한 꿈속에 갇혀 있다. 문제는 — 그들이 나오고 싶지 않다는 것이다.'
	},

	protagonist_goal: '사라진 마을 사람들을 찾아 데려와라.',

	act_tone: {
		intro: {
			mood: '의혹과 설렘',
			tension: 1,
			narrative_role:
				'한겨울에 꽃 피는 숲. 아름답지만 사람들이 사라진다. 탐험대, 실종자들을 찾아 숲에 들어선다.'
		},
		rising: {
			mood: '혼란과 유혹',
			tension: 3,
			narrative_role:
				'숲 안은 따뜻하고 아름답다. 실종자들의 흔적이 있지만 — 그들은 도망치지 않았다. 탐험대도 조금씩 숲에 끌린다.'
		},
		climax_finale: {
			mood: '연민과 결별',
			tension: 5,
			narrative_role:
				'정령의 진실. 실종자들은 행복하다. 데려가려면 그 행복을 깨야 한다. 정령은 그저 외로웠다.'
		}
	},

	final_boss: {
		id: '',
		name: '플로라',
		appearance:
			'A luminous spirit woven from flower petals and moonlight, her form constantly blooming and wilting — beautiful and terrifying at once. Tears of pollen stream from hollow eyes.',
		surface_identity: '봄의 정령. 숲을 지키는 존재. 침입자를 막아서는 최후의 적.',
		true_identity: '수백 년 전 사람들에게 버려진 후 홀로 숲을 지켜온 정령. 외로움이 집착이 되었다.',
		motivation: '사람들을 붙잡아 두고 싶다. 혼자이고 싶지 않다. 떠나보내는 법을 모른다.',
		twist:
			'"여기가 더 행복하잖아." 플로라는 묻는다. "왜 데려가려 해? 저들이 원하는 건지 물어봤어?" 실종자들은 실제로 돌아가기 싫어한다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '숲에 들어갈수록 발걸음이 가벼워진다. 기분이 좋아진다.',
			plant_act: 'intro',
			plant_room: 2,
			reveal_act: 'climax_finale',
			reveal_room: 3,
			reveal_context: '플로라가 퍼뜨리는 꽃가루다. 숲에 묶어두는 마법이다.'
		},
		{
			id: 'fs_02',
			hint: '실종자들의 흔적 — 도망친 흔적이 아니라 그냥 앉아있던 흔적이다',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 2,
			reveal_context: '그들은 자발적으로 머물렀다. 강제가 아니었다.'
		},
		{
			id: 'fs_03',
			hint: '숲 곳곳에 이름이 새겨진 나무들이 있다 — 사람 이름 같다',
			plant_act: 'rising',
			plant_room: 6,
			reveal_act: 'climax_finale',
			reveal_room: 5,
			reveal_context: '플로라가 기억하고 싶어 새긴 이름들이다. 수백 년치.'
		},
		{
			id: 'fs_04',
			hint: '플로라는 탐험대를 공격하지 않는다 — 그냥 붙잡으려 한다',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 8,
			reveal_context: '해치고 싶지 않다. 그냥 같이 있고 싶을 뿐이다.'
		}
	],

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '겨울 꽃',
			boss: 'pool_013',
			npc: 'lumina',
			summary:
				'한겨울, 꽃 피는 숲. 마을 사람 셋이 사라졌다. 루미나가 탐험대를 안내한다. 숲은 아름답다. 하지만 뭔가 이상하다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '달콤한 함정',
			boss: 'pool_014',
			npc: 'lyra_meadowsong',
			summary:
				'실종자 흔적을 발견한다. 도망친 흔적이 아니다. 리라가 경고한다 — "이 숲은 당신을 원해." 탐험대도 조금씩 숲에 취해간다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '이름의 나무',
			boss: 'pool_011',
			npc: 'selena',
			summary:
				'수백 개의 이름이 새겨진 나무를 발견한다. 셀레나가 읽는다 — 전부 사라진 사람들의 이름이다. 수백 년치. 플로라의 모습이 보이기 시작한다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '그들의 선택',
			boss: 'pool_012',
			npc: 'reina',
			summary:
				'실종자들을 찾았다. 그들은 행복하다. 돌아가기 싫다고 한다. 레이나가 흔들린다 — "억지로 데려가야 해?" 탐험대, 선택의 기로에 선다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '봄의 정령',
			boss: 'pool_random',
			npc: 'lumina',
			summary:
				'플로라가 나타난다. "왜 데려가려 해?" 싸우면서도 애원한다. 진실이 밝혀진다 — 그녀는 수백 년을 혼자였다. 탐험대는 선택해야 한다. 실종자들을 억지로 데려갈 것인가, 플로라의 외로움과 함께 남겨둘 것인가.'
		}
	],

	act_summary: {
		intro: '한겨울 꽃 피는 숲. 아름답다. 사람들이 사라진다.',
		rising: '그들은 도망치지 않았다. 숲이 좋아서 머물고 있다. 탐험대도 흔들린다.',
		climax_finale: '플로라는 외로웠다. 실종자들은 행복하다. 구출인가, 침해인가.'
	}
};
