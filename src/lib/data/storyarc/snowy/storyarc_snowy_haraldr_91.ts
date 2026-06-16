import type { StoryArc } from '$lib/types';

// Haraldr 시리즈 10편 (level 91) — 궁극의 전리품 (시리즈 피날레)
export const storyarc_snowy_haraldr_91: StoryArc = {
	id: 'snowy_haraldr_91',
	level: 91,
	chapter_name: {
		korean: '궁극의 전리품',
		english: 'The Ultimate Trophy',
		japanese: '究極の戦利品',
		chinese: '终极战利品',
		french: 'Le Trophée Ultime',
		spanish: 'El Trofeo Definitivo',
		vietnamese: 'Chiến Lợi Phẩm Tối Thượng',
		thai: 'ของรางวัลสูงสุด',
		hindi: 'परम विजय-चिह्न'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'시리즈의 끝. 본명도, 과거도, 폭주도 모두 마주한 Haraldr가 마지막으로 탐험대를 기다린다. 그의 어설픈 좌판은 텅 비었고, 남은 상품은 오직 그 자신뿐이다.',
		rule: '이 마지막 거래에서 거부는 곧 전투다. 그는 더 팔 것이 없고, 그래서 자신의 몸을 "궁극의 전리품"으로 내놓는다.',
		secret:
			'Haraldr는 처음부터 알고 있었다. 자신이 결코 만족할 수 없음을. 그가 진정 원한 것은 명예도 부도 아닌, 단 한 번이라도 누군가 자신을 받아주는 것이었다.'
	},

	protagonist_goal: 'Haraldr의 마지막 거래를 마주하고, 그의 끝없는 굶주림에 종지부를 찍어라.',

	act_tone: {
		intro: {
			mood: '텅 빈 좌판',
			tension: 1,
			narrative_role: '모든 점포가 사라지고 텅 빈 좌판만 남았다. Haraldr가 조용히 탐험대를 기다린다.'
		},
		rising: {
			mood: '마지막 호객',
			tension: 3,
			narrative_role:
				'그가 마지막 상품을 내놓는다 — 자기 자신. 1편부터의 모든 복선이 이 마지막 거래로 수렴한다.'
		},
		climax_finale: {
			mood: '비극의 정점',
			tension: 5,
			narrative_role:
				'거부당한 Haraldr가 자기 몸을 "궁극의 전리품"으로 내던지며 거대한 색색깔 빙수 괴물로 변모한다. 시리즈의 모든 비극이 이 순간에 폭발한다.'
		}
	},

	final_boss: {
		id: 'SnowViking_Haraldr_V1',
		name: 'Haraldr',
		appearance:
			'A snow-and-ice humanoid before an empty merchant stall, its body about to tear apart as crimson, green, and azure fruit syrup erupts from within like boiling blood. Mid-transformation into a colossal monstrous shaved-ice creature, ripping off its own arm to fling sticky syrup, rune-covered ice shattering everywhere. Cinematic climactic blizzard, tragic and ferocious high-fantasy aesthetic.',
		surface_identity:
			'마지막으로 탐험대를 기다리는 장사꾼. 좌판은 텅 비었고, 그는 단 하나 남은 상품 — 자기 자신을 팔려 한다.',
		true_identity:
			'오래전 전설적인 바이킹 광전사 "Haraldr the Blood-Starved(피굶주린 자)". 빙원에서 얼어 죽은 뒤, 채워지지 않는 허기와 열망이 눈과 합쳐져 "맛있는 눈 결정"을 파는 강박적 장사꾼으로 환생한 존재. 그가 팔던 전리품은 늘 그 자신의 일부였다.',
		motivation:
			'그가 진정 원한 것은 명예도 부도 아니었다. 단 한 번이라도 누군가 자신을, 자신의 전리품을 받아주는 것. 끝내 거부당하자, 그는 자기 몸 전체를 마지막 전리품으로 내던진다.',
		twist:
			'탐험대가 그의 얼음 전리품을 거부하자, Haraldr가 얼음 뿔피리를 바닥에 내팽개친다. 몸을 감싸던 눈과 얼음이 거칠게 부서지고, 피가 끓듯 빨강·초록·파랑 시럽이 분출한다. "흥! 이럴 줄 알았지! 어차피 내 몸이 곧 궁극의 전리품이다! 각오해라! 내 영혼까지 짜낸 열정의 라즈베리 빙수 맛을 보여주마! 내 프랜차이즈 확장을 막는 자는… 전부 공짜로 시식시켜주마! 맛있게 죽어라! 하하하핫!" 그는 제 팔을 뜯어내며 시럽을 흩뿌리고, 몸을 부풀려 거대한 색색깔 빙수 괴물로 변모한다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: 'Haraldr의 좌판이 처음으로 텅 비어 있다. 팔 것이 더는 없다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '남은 마지막 상품은 그 자신뿐이었다. 처음부터 그는 자기 몸을 팔아왔다.'
		},
		{
			id: 'fs_02',
			hint: '그가 1편의 그 "삐-빅" 뿔피리를 손에 꼭 쥐고 있다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '시리즈 내내 들고 다닌 뿔피리. 그것을 내던지는 순간이 그의 마지막 변모의 신호였다.'
		},
		{
			id: 'fs_03',
			hint: '그가 "이번엔 사 줄 거지?" 하고 처음으로 간절하게 묻는다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그가 진정 원한 것은 거래가 아니라, 단 한 번 받아들여지는 것이었다.'
		},
		{
			id: 'fs_04',
			hint: '그의 몸 곳곳에서 빨강·초록·파랑 시럽이 끓어오르기 시작한다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '끓어오르는 시럽은 곧 터져 나올 "궁극의 전리품" — 그의 모든 것이었다.'
		}
	],

	npc_roles: {
		eira: {
			role: '이름을 기억하는 자',
			arc: '10편: 그의 본명을 불러 똑바로 마주한다 — 끝까지 잊지 않고 기억하는 자로서.'
		},
		ivar: {
			role: '되지 않기로 한 전사',
			arc: '10편: "그처럼 되지 않기로 한 전사"로서, 끝없는 굶주림에 맞서 동료들과 함께 선다.'
		},
		inka: {
			role: '받아들이는 자',
			arc: '10편: 그를 한 존재로 끝까지 받아들인다. 그러나 그의 죽음(궁극의 전리품)까지 살 수는 없기에, 변모를 슬픔으로 지켜본다. (3인 throughline 수렴)'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '텅 빈 마지막 좌판',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 시리즈의 끝, Haraldr의 마지막 좌판에 다다른다. 에이라가 좌판이 처음으로 텅 비어 있음을 본다. 남은 상품은 그 자신뿐이다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '이번엔 사 줄 거지?',
			boss: 'random_boss',
			npc: 'inka',
			summary:
				'인카가 Haraldr의 손에 1편의 "삐-빅" 뿔피리가 꼭 쥐어진 것을 본다. 그가 처음으로 간절히 묻는다. "이번엔… 사 줄 거지?" 인카는 그가 원한 것이 거래가 아님을 안다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '되지 않기로 한 자',
			boss: 'random_boss',
			npc: 'ivar',
			summary:
				'이바르가 끓어오르는 시럽 앞에 선다. 더는 영광을 위해서가 아니라, "그처럼 되지 않기로 한 전사"로서 동료들 앞을 막아선다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '당신은 잊히지 않았어',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 그의 본명을 다시 한 번 부른다. "Haraldr. 당신은 잊히지 않았어." 기록자로서 그의 이름을 끝까지 기억하겠다 약속한다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '맛있게 죽어라',
			boss: 'pool_106',
			npc: 'inka',
			summary:
				'인카가 그를 한 사람으로 받아들이지만, 그의 죽음을 "살" 수는 없다. 거부당한 Haraldr가 뿔피리를 내팽개치고 시럽이 피처럼 분출한다. "어차피 내 몸이 곧 궁극의 전리품이다! 맛있게 죽어라!" 거대한 색색깔 빙수 괴물로 변모한다. 인카의 슬픔, 에이라가 새긴 이름, 이바르의 결의 — 3인의 여정이 수렴하며 그를 안식으로 보내는 최종 결전이 벌어진다.'
		}
	],

	act_summary: {
		intro: '시리즈의 끝. 텅 빈 좌판 앞에서 Haraldr가 조용히 기다린다. 남은 상품은 자기 자신뿐이다.',
		rising: '간절함을 받는 인카, 그처럼 되지 않기로 한 이바르, 이름을 기억하는 에이라. 그가 원한 것은 받아들여지는 것이었다.',
		climax_finale: '거부당한 그가 자기 몸을 "궁극의 전리품"으로 내던지며 거대한 빙수 괴물로 변모한다. 3인의 여정이 수렴하는 시리즈 피날레.'
	}
};
