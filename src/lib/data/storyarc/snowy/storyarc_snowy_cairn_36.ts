import type { StoryArc } from '$lib/types';

// Cairn 시리즈 4편 (level 36) — 시험당하는 신의
export const storyarc_snowy_cairn_36: StoryArc = {
	id: 'snowy_cairn_36',
	level: 36,
	chapter_name: {
		korean: '시험당하는 신의',
		english: 'Faith on Trial',
		japanese: '試される信義',
		chinese: '受考验的信义',
		french: 'La Foi à l Épreuve',
		spanish: 'La Fe Puesta a Prueba',
		vietnamese: 'Lòng Trung Tín Bị Thử Thách',
		thai: 'ความซื่อสัตย์ที่ถูกทดสอบ',
		hindi: 'परीक्षा में निष्ठा'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'돌무덤이 만든 얼음의 미로. 갈림길마다 탐험대는 누구를 믿고 누구를 앞세울지 정해야 한다. 선택 하나하나에 차가운 푸른빛이 응답하듯 번뜩인다.',
		rule: '미로를 빠져나가려면 동행단이 서로를 믿고 신의를 지켜야 한다. 의심하거나 등을 돌리는 순간, 길은 막히고 얼음이 갈라진다.',
		secret:
			'미로 자체가 돌무덤의 시험이다. 그것은 탐험대의 신의를 끝까지 몰아붙여, 숨겨진 이기심과 불순한 동기가 드러나는지 지켜보고 있다.'
	},

	protagonist_goal: '돌무덤이 펼친 얼음 미로에서 서로의 신의를 지키며 길을 찾아라.',

	act_tone: {
		intro: {
			mood: '갈라지는 길',
			tension: 2,
			narrative_role: '얼음 미로의 갈림길마다 선택이 강요된다. 누구를 믿고 누구를 앞세울 것인가.'
		},
		rising: {
			mood: '의심의 틈',
			tension: 4,
			narrative_role:
				'시험이 거듭될수록 동행단 사이에 작은 의심이 비집고 든다. 돌무덤은 그 틈을 노리듯 푸른빛으로 길을 흔든다.'
		},
		climax_finale: {
			mood: '드러나는 동기',
			tension: 7,
			narrative_role:
				'마지막 갈림길에서 누군가의 숨겨진 동기가 시험대에 오른다. 돌무덤이 그 불순함을 끌어내려 하고, 신의가 진짜 시험에 든다.'
		}
	},

	final_boss: {
		id: 'FrozenVow_Cairn_V1',
		name: 'Cairn',
		appearance:
			'The stone cairn at the heart of a labyrinth of towering blue ice walls, its runes flaring cold whenever a choice is made nearby. Forking icy corridors stretch into mist, frost creeping along every wall. The cairn watches from the center like a silent judge. Cinematic maze-like frozen lighting, tense ominous high-fantasy aesthetic.',
		surface_identity:
			'얼음 미로의 중심에 자리한 돌무덤. 갈림길마다 탐험대의 선택에 푸른빛으로 응답한다.',
		true_identity:
			'미로 자체가 그것의 시험이다. 탐험대의 신의를 끝까지 몰아붙여, 숨겨진 이기심과 불순한 동기가 드러나는지 지켜보는 심판자의 전조.',
		motivation:
			'탐험대의 약속과 신의를 시험하고, 의심과 압박 속에서 그들이 끝까지 서로를 믿을 수 있는지, 혹은 이기심에 무너지는지 가려내려 한다.',
		twist:
			'마지막 갈림길에서 돌무덤이 동행단 한 사람의 숨겨진 동기를 끌어내려 푸른빛을 그에게 집중한다. 길이 갈라지고 얼음이 비명을 지르듯 갈라진다. 신의를 지킬 것인가, 이기심에 굴할 것인가 — 시험의 본질이 비로소 또렷이 드러난다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '갈림길마다 탐험대의 선택에 맞춰 돌무덤의 푸른빛이 번뜩인다. 마치 채점하듯이.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 빛은 선택마다 신의의 점수를 매기고 있었다. 미로는 곧 시험지였다.'
		},
		{
			id: 'fs_02',
			hint: '서로를 의심하는 말을 주고받을수록, 미로의 길이 좁아지고 얼음벽이 솟아오른다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '의심은 길을 막았다. 돌무덤은 신의가 무너지는 만큼 출구를 닫아 갔다.'
		},
		{
			id: 'fs_03',
			hint: '얼음벽에 탐험대 각자의 그림자가 비치는데, 어떤 그림자는 본인과 다른 행동을 한다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 그림자는 각자가 숨긴 속내였다. 돌무덤이 불순한 동기를 벽에 비춰 끌어내고 있었다.'
		},
		{
			id: 'fs_04',
			hint: '미로 중심으로 갈수록, 돌무덤의 푸른빛이 동행단 중 한 사람에게만 유독 머문다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 빛이 머문 자리에, 돌무덤이 끌어내려는 숨겨진 동기가 있었다.'
		}
	],

	npc_roles: {
		eira: {
			role: '길을 읽는 자',
			arc: '4편: 미로의 푸른빛이 선택마다 신의를 채점함을 읽어내, 출구가 곧 신뢰임을 밝힌다.'
		},
		ivar: {
			role: '앞장서는 자',
			arc: '4편: 동료를 믿고 위험한 길을 앞장서며, 전사의 신의를 행동으로 증명하려 한다.'
		},
		anuk: {
			role: '동기를 직시하는 자',
			arc: '4편: 벽에 비친 속내를 마주하고, 숨겨진 이기심을 인정하는 것이야말로 시험을 통과하는 길임을 짚는다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '얼음 미로',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 돌무덤이 펼친 얼음 미로에 들어선다. 갈림길마다 선택이 강요된다. 에이라가 선택에 맞춰 번뜩이는 푸른빛이 신의를 채점하고 있음을 읽어낸다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '앞장서는 신의',
			boss: 'random_boss',
			npc: 'ivar',
			summary:
				'이바르가 동료를 믿고 위험한 길을 앞장선다. "내가 먼저 간다. 너희는 나를 믿고 따라와." 전사의 신의를 행동으로 증명하려 한다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '벽에 비친 속내',
			boss: 'random_boss',
			npc: 'anuk',
			summary:
				'아누크가 얼음벽에 비친 그림자가 본인과 다른 행동을 함을 알아챈다. 그것이 각자 숨긴 속내임을 직시하며, 이기심을 인정하는 것이 시험을 통과하는 길임을 짚는다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '한 사람에게 머문 빛',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 미로 중심으로 갈수록 돌무덤의 푸른빛이 동행단 한 사람에게만 유독 머무름을 기록한다. 그곳에 끌어내려는 숨겨진 동기가 있다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '믿을 것인가, 굴할 것인가',
			boss: 'pool_111',
			npc: 'anuk',
			summary:
				'마지막 갈림길에서 돌무덤이 한 사람의 숨겨진 동기에 푸른빛을 집중하고, 얼음이 비명을 지르듯 갈라진다. 동기를 직시해온 아누크가 시험의 본질을 꿰뚫는다 — 신의를 지킬 것인가, 이기심에 굴할 것인가.'
		}
	],

	act_summary: {
		intro: '돌무덤이 펼친 얼음 미로. 에이라가 푸른빛이 선택마다 신의를 채점함을 읽어낸다.',
		rising: '앞장서 신의를 증명하는 이바르, 벽에 비친 속내를 직시하는 아누크, 한 사람에게 머문 빛을 기록하는 에이라. 의심의 틈이 시험을 키운다.',
		climax_finale: '마지막 갈림길에서 한 사람의 숨겨진 동기가 시험대에 오른다. 신의를 지킬 것인가, 이기심에 굴할 것인가.'
	}
};
