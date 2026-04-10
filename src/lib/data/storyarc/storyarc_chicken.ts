export const storyarc_forest_chicken_saurus = {
	id: 'forest_chicken_saurus',
	title: '꼬끼오의 복수',
	theme: 'forest',
	rising_count: 3,

	world: {
		setting:
			'평화로운 숲 마을. 탐험대는 숲 깊은 곳의 이상 현상을 조사하러 왔다. 어딘가에서 기묘한 울음소리가 들린다.',
		rule: '숲에는 오래전부터 닭 한 마리가 살고 있다. 마을 사람들은 그 닭을 행운의 상징으로 여긴다.',
		secret:
			'그 닭은 수천 년 전 공룡의 마지막 후손이다. 인간에게 포식당해온 세월을 기억하며 복수의 때를 기다려왔다.'
	},

	protagonist_goal: '숲 깊은 곳에서 발생하는 이상 현상의 원인을 찾아라.',

	act_tone: {
		intro: {
			mood: '일상과 불안',
			tension: 1,
			narrative_role:
				'평범한 탐험. 귀여운 닭 한 마리가 탐험대를 졸졸 따라다닌다. 아무도 신경 쓰지 않는다.'
		},
		rising: {
			mood: '혼란과 의심',
			tension: 3,
			narrative_role:
				'이상 현상이 심해진다. 닭은 여전히 따라다닌다. 가끔 눈빛이 이상하다. 설마 싶다.'
		},
		climax_finale: {
			mood: '경악과 분노',
			tension: 5,
			narrative_role: '탐험대가 방심한 순간. 꼬끼오. 변신. 치킨의 복수가 시작된다.'
		}
	},

	final_boss: {
		id: '',
		name: 'Chicken-Saurus',
		appearance_npc:
			'A small, unremarkable chicken wandering the forest floor. Fluffy white feathers, beady black eyes, pecking at the ground. Completely harmless. Nobody gives it a second glance.',
		appearance_boss:
			'A towering ancient raptor erupting from feathers and fury — serrated teeth, massive clawed limbs, eyes burning with prehistoric rage. The white feathers remain, scattered across armored scales like a cruel joke. The ground cracks under each step.',
		surface_identity: '숲을 돌아다니는 평범한 닭. 탐험대와 함께 걸어온 무해한 존재.',
		true_identity:
			'수천 년 전 공룡의 마지막 후손. 인간에게 포식당해온 세월을 기억하는 존재. 복수의 때를 기다려왔다.',
		motivation: '그동안 잘도 먹어왔지. 이번엔 내 차례다.',
		twist:
			'"꼬끼오." 탐험대가 방심한 순간 — 변신. "그동안 잘도 치킨을 먹어왔지. 이번엔 내가 너희를 먹을 차례다."'
	},

	global_foreshadowing: [
		{
			id: 'fc_01',
			hint: '닭이 탐험대를 졸졸 따라다닌다. 귀엽다고 생각한다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '처음부터 탐험대를 관찰하고 있었다. 때를 기다리면서.'
		},
		{
			id: 'fc_02',
			hint: '숲 곳곳에 거대한 발자국이 있다. 공룡 같다고 농담처럼 말한다.',
			plant_act: 'rising',
			plant_room: 3,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '농담이 아니었다.'
		},
		{
			id: 'fc_03',
			hint: '닭이 치킨 냄새를 맡으면 눈빛이 달라진다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '수천 년의 기억이 반응한 것이었다.'
		},
		{
			id: 'fc_04',
			hint: '탐험대 중 누군가 치킨 먹은 얘기를 꺼낸다. 닭이 멈추고 쳐다본다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 순간 복수를 결심했다.'
		}
	],

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '졸졸졸',
			boss: 'pool_013',
			npc: 'lumina',
			summary:
				'탐험대가 숲에 들어선다. 귀여운 닭 한 마리가 나타나 졸졸 따라온다. 루미나가 합류한다. 아무도 닭을 신경 쓰지 않는다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '발자국',
			boss: 'pool_011',
			npc: 'selena',
			summary:
				'숲 곳곳에 거대한 발자국이 나타난다. 셀레나가 겁먹는다. 닭은 여전히 따라다닌다. 가끔 눈빛이 이상하지만 기분 탓이라고 한다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '치킨 냄새',
			boss: 'pool_014',
			npc: 'reina',
			summary:
				'탐험대 중 누군가 어젯밤 치킨 먹은 얘기를 꺼낸다. 닭이 멈추고 쳐다본다. 레이나가 눈치챈다 — "저 닭 좀 이상한 것 같아." 무시한다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '눈빛',
			boss: 'pool_012',
			npc: 'lyra_meadowsong',
			summary:
				'리라가 경고한다 — "저 닭 오래됐어. 엄청 오래됐어." 탐험대는 웃어넘긴다. 닭이 탐험대를 빤히 쳐다보고 있다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '꼬끼오',
			boss: 'random_boss',
			npc: 'lumina',
			summary:
				'탐험대가 방심한 순간. 꼬끼오. 닭이 변신한다. "그동안 잘도 치킨을 먹어왔지. 이번엔 내가 너희를 먹을 차례다." 치킨의 복수가 시작된다.'
		}
	],

	act_summary: {
		intro: '귀여운 닭이 졸졸 따라온다. 아무도 신경 쓰지 않는다.',
		rising: '발자국, 눈빛, 치킨 냄새. 뭔가 이상하다. 근데 설마 닭이겠어.',
		climax_finale: '꼬끼오. 변신. 치킨의 복수. 설마가 사람 잡는다.'
	}
};
