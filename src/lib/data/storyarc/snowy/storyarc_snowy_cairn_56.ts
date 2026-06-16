import type { StoryArc } from '$lib/types';

// Cairn 시리즈 6편 (level 56) — 동행단 막간: 서로에게 건 맹세
export const storyarc_snowy_cairn_56: StoryArc = {
	id: 'snowy_cairn_56',
	level: 56,
	chapter_name: {
		korean: '서로에게 건 맹세',
		english: 'A Vow Made to Each Other',
		japanese: '互いに交わした誓い',
		chinese: '彼此立下的誓言',
		french: 'Un Serment Échangé',
		spanish: 'Un Juramento Mutuo',
		vietnamese: 'Lời Thề Trao Nhau',
		thai: 'คำสาบานที่ให้แก่กัน',
		hindi: 'एक-दूसरे से ली शपथ'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'돌무덤의 시험을 잠시 벗어난 골에서, 동행단이 서로에게 작은 맹세를 건넨다 — 끝까지 함께 가겠다고. 전반부의 차가운 시험이 멎고, 세 사람은 약속의 무게와 신의에 대해 진심을 나눈다.',
		rule: '막간의 시간. 돌무덤의 진실은 잠시 미뤄지고, 동행단이 서로의 맹세를 어떻게 지키는지가 드러난다.',
		secret:
			'아누크는 약속의 무게를 경고하고, 이바르는 전사의 명예를 걸며, 에이라는 그 맹세를 기록으로 새긴다. 진심으로 건넨 이 맹세가 후반부, 배신을 가려내는 심판 앞에서 셋을 지킨다.'
	},

	protagonist_goal: '시험을 벗어난 틈에, 동행단이 서로에게 진심 어린 맹세를 건네고 그 무게를 새기게 하라.',

	act_tone: {
		intro: {
			mood: '벗어난 틈',
			tension: 1,
			narrative_role: '돌무덤의 시험을 잠시 벗어난 골에서 동행단이 숨을 고른다.'
		},
		rising: {
			mood: '맹세를 건네다',
			tension: 2,
			narrative_role:
				'세 사람이 약속의 무게와 신의에 대해 진심을 나눈다. 경고와 명예와 기록이 오간다.'
		},
		climax_finale: {
			mood: '막간의 끝',
			tension: 4,
			narrative_role:
				'셋이 서로에게 작은 맹세를 건네는 순간, 멀리 돌무덤이 둔탁하게 한 번 울린다. 진심을 확인한 셋은 후반부의 진실을 향해 발을 옮긴다.'
		}
	},

	final_boss: {
		id: 'FrozenVow_Cairn_V1',
		name: 'Cairn',
		appearance:
			'Three companions clasping hands in a sheltered hollow away from the cairn, exchanging a quiet vow, a single distant blue glint pulsing from the stone mound far behind them. The mood is solemn and intimate. Cinematic quiet solemn blue lighting, character-focused high-fantasy aesthetic.',
		surface_identity:
			'멀리서 한 번 둔탁하게 울리는 돌무덤. 막간의 맹세조차 그 저울 위에 오른다.',
		true_identity:
			'아직 Cairn의 진실은 절반만 드러났다. 이 시간은 보스보다 동행단이 서로의 맹세를 어떻게 지키는지에 초점이 맞춰진다.',
		motivation:
			'돌무덤은 막간의 맹세에도 반응한다. 그 울림이 동행단에게 약속의 무게를 곱씹게 만든다.',
		twist:
			'셋이 서로에게 작은 맹세를 건네는 순간, 멀리 돌무덤이 둔탁하게 한 번 울린다 — 허나 금이 가지 않는다. 진심이었기 때문이다. 경고와 명예와 기록을 품은 셋은, 그 맹세의 무게를 안고 후반부의 진실을 향해 발을 옮긴다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '아누크가 "맹세는 입에 올리기 전에 그 무게부터 재라"고 일러준다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '아누크의 경고는, 후반부 심판 앞에서 셋을 지킬 무게의 기준이었다.'
		},
		{
			id: 'fs_02',
			hint: '이바르가 동료들에게 "끝까지 함께 간다"는 약속을 가장 먼저 건넨다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '먼저 건넨 그 맹세는, 후반부 심판 앞에서 금가지 않을 진심이었다.'
		},
		{
			id: 'fs_03',
			hint: '에이라가 셋이 건넨 맹세를 한 줄 한 줄 기록으로 새긴다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '새긴 맹세는, 깨어진 약속만 쌓인 돌무덤과 대비될 진실한 서약이었다.'
		},
		{
			id: 'fs_04',
			hint: '맹세를 건넬 때 멀리 돌무덤의 푸른빛이 미세하게 깜빡인다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '깜빡임은, 돌무덤이 막간의 맹세조차 저울에 올리고 있음을 알렸다.'
		}
	],

	npc_roles: {
		eira: {
			role: '맹세의 기록자',
			arc: '6편(막간): 셋이 건넨 맹세를 한 줄씩 기록으로 새기며, 진실한 서약을 남긴다.'
		},
		ivar: {
			role: '먼저 맹세하는 전사',
			arc: '6편(막간): "끝까지 함께 간다"는 약속을 가장 먼저 건네며, 전사의 명예를 진심으로 내건다.'
		},
		anuk: {
			role: '무게를 일러주는 자',
			arc: '6편(막간): "맹세는 그 무게부터 재라"고 일러주며, 진심 없는 약속의 위험을 경계시킨다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '시험을 벗어나',
			boss: 'random_boss',
			npc: 'anuk',
			summary:
				'돌무덤의 시험을 잠시 벗어난 골에서 동행단이 숨을 고른다. 아누크가 "맹세는 입에 올리기 전에 그 무게부터 재라"고 일러준다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '끝까지 함께',
			boss: 'random_boss',
			npc: 'ivar',
			summary:
				'이바르가 동료들에게 "끝까지 함께 간다"는 약속을 가장 먼저 건넨다. 전사의 명예를 걸고 진심을 내건다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '새기는 서약',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 셋이 건넨 맹세를 한 줄 한 줄 기록으로 새긴다. "이건 깨어진 약속과는 달라요. 진심이니까요." 진실한 서약을 남긴다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '무게를 재다',
			boss: 'random_boss',
			npc: 'anuk',
			summary:
				'아누크가 그 맹세의 무게를 가만히 잰다. "가볍지 않군. 이 정도면… 저 돌무덤도 깨뜨리지 못해." 셋의 신의가 단단해진다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '금가지 않는 맹세',
			boss: 'pool_111',
			npc: 'ivar',
			summary:
				'셋이 서로에게 작은 맹세를 건네는 순간 멀리 돌무덤이 둔탁하게 한 번 울린다 — 허나 금이 가지 않는다. 진심이었기 때문이다. 경고·명예·기록을 품은 셋이 그 맹세의 무게를 안고 후반부의 진실을 향해 나아간다.'
		}
	],

	act_summary: {
		intro: '시험을 벗어난 골에서 동행단이 숨을 고른다. 아누크가 맹세의 무게부터 재라 일러준다.',
		rising: '먼저 약속하는 이바르, 서약을 새기는 에이라, 무게를 재는 아누크. 셋이 진심을 나눈다.',
		climax_finale: '돌무덤이 울려도 금가지 않는 진심의 맹세. 그 무게를 안고 셋이 후반부 진실로 나아간다.'
	}
};
