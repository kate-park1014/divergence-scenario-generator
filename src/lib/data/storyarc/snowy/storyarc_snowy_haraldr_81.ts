import type { StoryArc } from '$lib/types';

// Haraldr 시리즈 9편 (level 81) — 색색깔 시럽의 폭주
export const storyarc_snowy_haraldr_81: StoryArc = {
	id: 'snowy_haraldr_81',
	level: 81,
	chapter_name: {
		korean: '색색깔 시럽의 폭주',
		english: 'The Rampage of Rainbow Syrup',
		japanese: '色とりどりシロップの暴走',
		chinese: '七彩糖浆的暴走',
		french: 'La Furie du Sirop Multicolore',
		spanish: 'El Frenesí del Jarabe de Colores',
		vietnamese: 'Cơn Cuồng Nộ Của Siro Sắc Màu',
		thai: 'การอาละวาดของไซรัปหลากสี',
		hindi: 'रंग-बिरंगी चाशनी का उन्माद'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'본명을 되찾은 Haraldr의 마지막 점포. 이제 그의 몸이 통제를 잃고 빨강·초록·파랑 시럽을 사방으로 뿜어낸다. 설원이 끈적한 색으로 물들어 간다.',
		rule: '시럽에 닿은 것은 얼어붙어 그의 "재고"가 된다. 폭주가 멈추지 않으면 설원 전체가 그의 점포가 된다.',
		secret:
			'시럽의 폭주는 그가 더는 광기를 억누르지 못한다는 신호다. 장사꾼과 광전사, 두 자아가 그의 안에서 마지막으로 충돌하고 있다.'
	},

	protagonist_goal: '통제를 잃고 폭주하는 Haraldr의 시럽을 막고, 그의 마지막 충돌을 멈춰라.',

	act_tone: {
		intro: {
			mood: '끈적한 불길함',
			tension: 1,
			narrative_role: '설원이 색색깔 시럽으로 물들기 시작한다. Haraldr의 말투가 장사꾼과 광전사 사이를 오간다.'
		},
		rising: {
			mood: '터져 나오는 광기',
			tension: 3,
			narrative_role:
				'시럽 분출이 거세진다. "어서 오세요"와 "각오해라"가 한 문장 안에서 뒤섞인다. 두 자아의 충돌이 격해진다.'
		},
		climax_finale: {
			mood: '자아의 충돌',
			tension: 5,
			narrative_role:
				'시럽이 완전히 폭주하며 Haraldr의 몸이 부풀어 오른다. 장사꾼의 가면과 광전사의 본능이 마지막으로 격렬히 부딪친다.'
		}
	},

	final_boss: {
		id: 'SnowViking_Haraldr_V1',
		name: 'Haraldr',
		appearance:
			'A snow-and-ice humanoid losing control as torrents of red, green, and blue fruit syrup burst from cracks all over its swelling body, freezing the snow around it into sticky colored mounds. Its face flickers between a merchant grin and a berserker snarl. Cinematic chaotic snowy scene, intense high-fantasy aesthetic.',
		surface_identity:
			'마지막 점포를 지키려는 장사꾼. 그러나 그의 몸은 이미 통제를 잃고 시럽을 사방으로 뿜어낸다.',
		true_identity:
			'시럽의 폭주는 광기를 더는 억누르지 못한다는 신호다. 장사꾼과 광전사, 두 자아가 그의 안에서 마지막으로 충돌하고 있다.',
		motivation:
			'장사꾼으로 남고 싶지만, 깨어난 광전사의 본능이 모든 것을 "전리품"으로 삼키려 든다. 두 욕망 사이에서 그는 산산이 갈라지고 있다.',
		twist:
			'"어서 오세요 — 각오해라!" 두 목소리가 한 입에서 동시에 터진다. 시럽이 폭주하며 Haraldr의 몸이 부풀어 오른다. "내가… 누구였는지 모르겠어!" 장사꾼의 가면과 광전사의 본능이 격렬히 부딪치고, 색색깔 시럽 분수가 탐험대를 덮친다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: 'Haraldr의 한 문장 안에서 "어서 오세요"와 "각오해라"가 뒤섞인다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '두 자아가 동시에 말하고 있었다. 장사꾼과 광전사가.'
		},
		{
			id: 'fs_02',
			hint: '시럽에 닿은 사물이 얼어붙어 "재고"라는 얼음 딱지가 붙는다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '폭주한 그에게는 모든 것이 삼켜야 할 전리품이자 재고였다.'
		},
		{
			id: 'fs_03',
			hint: 'Haraldr가 제 팔을 붙잡고 떨며 무언가를 억누르려 한다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그는 깨어난 광기를 스스로 막으려 안간힘을 쓰고 있었다.'
		},
		{
			id: 'fs_04',
			hint: '폭주하는 와중에도 그가 한순간 "…사 줘서 고마웠다"고 중얼거린다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '광기 속에서도 장사꾼이었던 그의 자아가 인카에게 마지막으로 남긴 진심이었다.'
		}
	],

	npc_roles: {
		eira: {
			role: '충돌의 기록자',
			arc: '9편: 장사꾼과 광전사, 두 자아가 충돌하는 폭주의 순간을 기록한다.'
		},
		ivar: {
			role: '방패가 된 전사',
			arc: '9편: 폭주하는 시럽으로부터 동료들을 막아서는 방패가 된다.'
		},
		inka: {
			role: '손 내미는 자',
			arc: '9편: 폭주 속에서도 손을 내민다 — Haraldr가 "사 줘서 고마웠다"고 중얼거린 상대가 인카다. (연민의 정점)'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '물드는 설원',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 Haraldr의 마지막 점포에 다다른다. 에이라가 "어서 오세요"와 "각오해라"가 한 문장에 뒤섞이는 것을 듣고 두 자아의 충돌을 기록한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '막아서는 자',
			boss: 'random_boss',
			npc: 'ivar',
			summary:
				'이바르가 사방으로 터지는 시럽으로부터 동료들을 막아선다. "뒤로 물러서!" 한때 싸움을 갈망하던 그가 이제는 지키기 위해 선다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '떨리는 팔',
			boss: 'random_boss',
			npc: 'inka',
			summary:
				'인카가 제 팔을 붙잡고 떨며 광기를 억누르려는 Haraldr를 본다. 그를 향해 조용히 손을 내민다. "…괜찮아요. 멈출 수 있어요."'
		},
		{
			order: 4,
			act: 'rising',
			title: '재고가 되는 것들',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 시럽에 닿은 사물마다 "재고" 딱지가 붙는 것을 기록한다. 두 자아의 충돌이 점점 더 격해진다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '내가 누구였는지 모르겠어',
			boss: 'pool_106',
			npc: 'inka',
			summary:
				'"어서 오세요 — 각오해라!" 두 목소리가 터진다. 폭주 속 한순간 Haraldr가 인카에게 "…사 줘서 고마웠다"고 중얼거린다. "내가 누구였는지 모르겠어!" 인카가 그 진심을 받으며 최종 변모 직전의 그와 마주한다.'
		}
	],

	act_summary: {
		intro: '설원이 색색깔 시럽으로 물든다. 에이라가 두 자아가 한 문장에 섞이는 것을 기록한다.',
		rising: '동료를 지키는 이바르, 손을 내미는 인카, 충돌을 기록하는 에이라. 두 자아가 격렬히 부딪친다.',
		climax_finale: '"내가 누구였는지 모르겠어!" 폭주 속 인카에게 남긴 진심과 함께, 최종 변모 직전의 충돌이 폭발한다.'
	}
};
