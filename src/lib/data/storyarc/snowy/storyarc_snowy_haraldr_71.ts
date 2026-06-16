import type { StoryArc } from '$lib/types';

// Haraldr 시리즈 8편 (level 71) — 피굶주린 자의 이름
export const storyarc_snowy_haraldr_71: StoryArc = {
	id: 'snowy_haraldr_71',
	level: 71,
	chapter_name: {
		korean: '피굶주린 자의 이름',
		english: 'The Name of the Blood-Starved',
		japanese: '飢えに渇いた者の名',
		chinese: '嗜血饥者之名',
		french: 'Le Nom de l’Affamé de Sang',
		spanish: 'El Nombre del Hambriento de Sangre',
		vietnamese: 'Cái Tên Của Kẻ Khát Máu',
		thai: 'นามแห่งผู้กระหายเลือด',
		hindi: 'रक्त-भूखे का नाम'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'폭풍의 핵을 지나, 옛 바이킹 전설이 잠든 영웅의 전당. 얼어붙은 비석마다 위대한 전사들의 이름이 새겨져 있다. 그중 하나가 지워진 채 비어 있다.',
		rule: '전당에서 잊힌 이름을 부르는 자는 그 전사의 기억을 깨운다. 깨어난 기억은 진실을 강요한다.',
		secret:
			'지워진 비석의 주인이 바로 Haraldr — 한때 전설적인 바이킹 광전사 "Haraldr the Blood-Starved(피굶주린 자)"였다. 영원한 싸움과 전리품을 탐하다 모두에게 잊힌 이름.'
	},

	protagonist_goal: '지워진 비석의 주인, Haraldr의 본래 이름과 전설을 되찾아라.',

	act_tone: {
		intro: {
			mood: '잊힌 영광',
			tension: 1,
			narrative_role: '영웅의 전당에 들어선다. 비석들 사이에서 Haraldr가 유독 한 빈 비석을 피한다.'
		},
		rising: {
			mood: '깨어나는 전설',
			tension: 3,
			narrative_role:
				'지워진 이름의 조각이 하나씩 맞춰진다. 우스꽝스러운 장사꾼이 사실 두려움의 대상이던 광전사였음이 드러난다.'
		},
		climax_finale: {
			mood: '본명을 마주하다',
			tension: 5,
			narrative_role:
				'탐험대가 잊힌 이름 "Haraldr the Blood-Starved"를 부른다. 봉인된 기억이 깨어나고, 장사꾼의 탈 아래 진짜 광전사가 모습을 드러낸다.'
		}
	},

	final_boss: {
		id: 'SnowViking_Haraldr_V1',
		name: 'Haraldr',
		appearance:
			'A snow-and-ice humanoid standing in a hall of frozen Viking memorial steles, one stele blank with a scratched-out name. Its merchant guise is cracking, revealing glimpses of a towering berserker beneath, eyes burning with ancient hunger. Multicolor syrup veins now glow like old battle scars. Cinematic solemn icy hall, epic high-fantasy aesthetic.',
		surface_identity:
			'영웅의 전당을 "최대 규모 점포 부지"라 우기는 장사꾼. 그러나 한 빈 비석만은 한사코 외면한다.',
		true_identity:
			'지워진 비석의 주인. 한때 전설적인 바이킹 광전사 "Haraldr the Blood-Starved(피굶주린 자)"였다. 영원한 싸움과 전리품을 탐하다 모두에게 잊힌 이름이다.',
		motivation:
			'잊힌 이름을 되찾으면 잊고 싶던 광기까지 함께 돌아온다. 그는 장사꾼으로 남아 자신의 본모습을 끝내 부정하려 한다.',
		twist:
			'탐험대가 잊힌 이름을 부른다 — "Haraldr the Blood-Starved." 빈 비석에 이름이 되살아나고, 봉인된 기억이 깨어난다. 장사꾼의 탈이 부서지며 두려움의 대상이던 광전사가 일어선다. "…그래. 그게 나였다. 모두가 두려워하던, 결코 만족하지 못하던 자."'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: 'Haraldr가 유독 한 빈 비석 앞에서는 농담을 멈춘다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 빈 비석이 그 자신의 것이었기 때문이다.'
		},
		{
			id: 'fs_02',
			hint: '다른 전사들의 비문이 하나같이 "그를 두려워하라"는 경고로 끝난다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '경고의 대상은 동료조차 두려워하던 Haraldr였다.'
		},
		{
			id: 'fs_03',
			hint: '지워진 이름의 첫 글자가 Haraldr의 어설픈 룬과 일치한다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '제 몸에 새긴 룬은 잊지 않으려던 자기 이름의 흔적이었다.'
		},
		{
			id: 'fs_04',
			hint: '"피굶주린(Blood-Starved)"이라는 단어가 비석마다 칼로 긁혀 지워져 있다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 이름을 지운 것은 다름 아닌 Haraldr 자신이었다. 광기를 잊으려는 몸부림.'
		}
	],

	npc_roles: {
		eira: {
			role: '이름의 복원자',
			arc: '8편: 긁혀 지워진 이름 "Haraldr the Blood-Starved"를 복원한다 — 기록자 역할의 절정.'
		},
		ivar: {
			role: '교훈을 새기는 전사',
			arc: '8편: "그를 두려워하라"는 경고를 적이 아닌 자신을 향한 교훈으로 받아들인다.'
		},
		inka: {
			role: '이름을 부르는 자',
			arc: '8편: 되찾은 이름을 직접 불러, 괴물을 한 사람으로 마주한다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '영웅의 전당',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 폭풍의 핵을 지나 영웅의 전당에 들어선다. 에이라가 비석들을 읽으며, Haraldr가 유독 외면하는 한 빈 비석에 주목한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '그를 두려워하라',
			boss: 'random_boss',
			npc: 'ivar',
			summary:
				'이바르가 "그를 두려워하라"는 비문들을 읽는다. 그 경고를 적이 아닌 자신을 향한 교훈으로 받아들인다. "…나도 새겨두마. 강함의 끝을."'
		},
		{
			order: 3,
			act: 'rising',
			title: '맞춰지는 이름',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 칼로 긁혀 지워진 이름의 조각을 하나씩 맞춘다. 첫 글자가 Haraldr 몸의 룬과 일치한다. 기록자로서 잊힌 이름을 되살린다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '이름을 불러보다',
			boss: 'random_boss',
			npc: 'inka',
			summary:
				'인카가 되살아난 이름을 보고 직접 그 이름을 조용히 불러본다 — 괴물이 아니라 한 사람으로. Haraldr가 흠칫 멈춘다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '그게 나였다',
			boss: 'pool_106',
			npc: 'eira',
			summary:
				'탐험대가 잊힌 이름을 부른다 — "Haraldr the Blood-Starved." 빈 비석에 이름이 되살아나고 봉인이 풀린다. 장사꾼의 탈이 부서지며 광전사가 일어선다. 에이라가 그 이름과 전설을 기록에 새긴다. "그게 나였다."'
		}
	],

	act_summary: {
		intro: '영웅의 전당. 에이라가 Haraldr가 외면하는 한 빈 비석에 주목한다.',
		rising: '경고를 교훈으로 받는 이바르, 이름을 복원하는 에이라, 그 이름을 불러보는 인카. 잊힌 광전사의 이름이 떠오른다.',
		climax_finale: '"Haraldr the Blood-Starved." 본명을 부르자 봉인이 풀리고, 장사꾼의 탈 아래 진짜 광전사가 일어선다.'
	}
};
