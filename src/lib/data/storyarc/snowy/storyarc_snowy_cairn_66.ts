import type { StoryArc } from '$lib/types';

// Cairn 시리즈 7편 (level 66) — 시험받는 맹세
export const storyarc_snowy_cairn_66: StoryArc = {
	id: 'snowy_cairn_66',
	level: 66,
	chapter_name: {
		korean: '시험받는 맹세',
		english: 'The Oath on Trial',
		japanese: '試される誓い',
		chinese: '受审的誓言',
		french: 'Le Serment Mis à l’Épreuve',
		spanish: 'El Juramento a Prueba',
		vietnamese: 'Lời Thề Bị Thử Thách',
		thai: 'คำสาบานที่ถูกทดสอบ',
		hindi: 'परीक्षा में पड़ी शपथ'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'돌무덤 둘레에 옛 서약의 룬이 깨진 채 흩어진 구역. 한때 굳게 맺어졌을 맹세들이 모두 중간에서 끊겨 있다. 돌무덤은 탐험대가 서로 나누는 약속 한 마디 한 마디에 미세하게 반응한다.',
		rule: '돌무덤 곁에서 맺은 약속은 시험에 든다. 진심이 아닌 맹세는 곧 깨진 룬처럼 끊어지고, 돌무덤이 그것을 가려낸다.',
		secret:
			'Cairn은 길 표식도 무덤도 아니다. 수백 년간 깨어진 약속과 배신, 잊힌 맹세가 응축된 살아있는 결실이며, 곁에 선 자들의 맹세가 진짜인지 끊임없이 시험한다.'
	},

	protagonist_goal: '돌무덤이 탐험대의 약속에 반응하는 이유, 시험의 정체를 밝혀라.',

	act_tone: {
		intro: {
			mood: '끊긴 서약',
			tension: 1,
			narrative_role: '돌무덤 둘레에 깨진 서약의 룬이 흩어져 있다. 모든 맹세가 중간에서 끊겨 있다.'
		},
		rising: {
			mood: '반응하는 돌',
			tension: 3,
			narrative_role:
				'탐험대가 약속을 나눌 때마다 돌무덤이 미세하게 반응한다. 그것은 맹세의 진위를 가려내고 있었다.'
		},
		climax_finale: {
			mood: '가려지는 진심',
			tension: 5,
			narrative_role:
				'탐험대가 시험의 정체를 알아내자, 돌무덤이 낮게 울린다. "…너희의 맹세는 진짜인가? 깨진 약속만이 이곳에 쌓여왔다."'
		}
	},

	final_boss: {
		id: 'FrozenVow_Cairn_V1',
		name: 'Cairn',
		appearance:
			'A cairn surrounded by shattered runes of old vows scattered across the snow, every oath broken off midway. The stone mound reacts with faint blue glints to each promise spoken nearby, weighing whether it is true. Cinematic cold judging blue lighting, austere high-fantasy aesthetic.',
		surface_identity:
			'길 잃지 않게 쌓은 표식, 혹은 잊힌 탐험가의 무덤처럼 보이는 돌무덤. 그러나 그것은 약속에 반응한다.',
		true_identity:
			'Cairn은 표식도 무덤도 아니다. 수백 년간 깨어진 약속과 배신, 잊힌 맹세가 응축된 살아있는 결실이며, 곁에 선 자들의 맹세가 진짜인지 끊임없이 시험한다.',
		motivation:
			'배신이라는 본질에 따라, 곁에 선 자들의 약속과 신의를 시험한다. 진심이 아닌 맹세를 가려내, 깨질 것을 미리 드러내려 한다.',
		twist:
			'탐험대가 시험의 정체를 알아내자, 돌무덤이 낮게 울린다. "…너희의 맹세는 진짜인가? 깨진 약속만이 이곳에 쌓여왔다." 길 표식이 아니라, 깨어진 맹세를 가려내는 차가운 시험관이었다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '돌무덤 둘레의 룬 서약이 하나같이 중간에서 끊겨 있다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '끊긴 서약들은 모두 지켜지지 못한 맹세였다 — 깨어진 약속의 무덤.'
		},
		{
			id: 'fs_02',
			hint: '탐험대가 약속을 나눌 때마다 돌무덤이 미세하게 진동한다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '진동은 맹세의 진위를 저울질하는 반응이었다.'
		},
		{
			id: 'fs_03',
			hint: '진심 없이 내뱉은 약속의 룬은 새겨지자마자 금이 간다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '거짓 맹세는 곧 깨졌다 — 돌무덤은 진심만을 가려냈다.'
		},
		{
			id: 'fs_04',
			hint: '돌 틈새의 어둠이 마치 수많은 눈동자처럼 약속을 지켜보고 있다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '지켜보는 눈동자는 배신을 가려내는 시험관의 시선이었다.'
		}
	],

	npc_roles: {
		eira: {
			role: '서약을 읽는 자',
			arc: '7편: 깨진 룬 서약들을 해독해, 돌무덤이 맹세의 진위를 가려내는 시험관임을 밝힌다.'
		},
		ivar: {
			role: '신의를 증명하는 전사',
			arc: '7편: 전사의 명예를 걸고, 자신의 맹세가 진심임을 시험 앞에 떳떳이 내건다.'
		},
		anuk: {
			role: '맹세의 무게를 재는 자',
			arc: '7편: 약속 한 마디의 무게를 가늠하며, 진심 없는 맹세가 어떻게 깨지는지 동료들에게 일러준다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '끊긴 서약의 룬',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 돌무덤 둘레에 흩어진 깨진 서약의 룬을 발견한다. 에이라가 모든 맹세가 중간에서 끊겨 있음을 읽기 시작한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '반응하는 돌',
			boss: 'random_boss',
			npc: 'anuk',
			summary:
				'아누크가 탐험대가 약속을 나눌 때마다 돌무덤이 미세하게 진동함을 알아챈다. "이건… 우리 약속을 저울질하고 있어. 한 마디의 무게를 재는 거야."'
		},
		{
			order: 3,
			act: 'rising',
			title: '금이 가는 약속',
			boss: 'random_boss',
			npc: 'ivar',
			summary:
				'이바르가 진심 없이 내뱉은 약속의 룬이 새겨지자마자 금이 가는 것을 본다. 전사의 명예를 걸고 자신의 맹세가 진심임을 떳떳이 내건다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '지켜보는 눈',
			boss: 'random_boss',
			npc: 'anuk',
			summary:
				'아누크가 돌 틈새의 어둠이 수많은 눈동자처럼 약속을 지켜보고 있음을 본다. 배신을 가려내는 시험관의 시선이다. "방심하지 마. 거짓은 전부 들켜."'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '너희의 맹세는 진짜인가',
			boss: 'pool_111',
			npc: 'ivar',
			summary:
				'탐험대가 시험의 정체를 알아내자 돌무덤이 낮게 울린다. "너희의 맹세는 진짜인가? 깨진 약속만이 이곳에 쌓여왔다." 길 표식이 아니라 깨어진 맹세를 가려내는 시험관임이 드러나고, 신의를 증명해온 이바르와 함께 전투가 이어진다.'
		}
	],

	act_summary: {
		intro: '돌무덤 둘레에 중간에서 끊긴 서약의 룬이 흩어져 있다. 에이라가 읽기 시작한다.',
		rising: '반응하는 돌을 알아챈 아누크, 신의를 증명하는 이바르, 지켜보는 눈을 본 아누크. 돌무덤은 맹세를 시험하고 있었다.',
		climax_finale: '"너희의 맹세는 진짜인가?" 길 표식은 깨어진 맹세를 가려내는 차가운 시험관이었다.'
	}
};
