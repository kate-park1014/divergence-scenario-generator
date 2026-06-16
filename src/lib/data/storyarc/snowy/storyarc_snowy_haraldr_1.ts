import type { StoryArc } from '$lib/types';

// Haraldr 시리즈 1편 (level 1) — 첫 조우: 어설픈 눈사람 장사꾼
export const storyarc_snowy_haraldr_1: StoryArc = {
	id: 'snowy_haraldr_1',
	level: 1,
	chapter_name: {
		korean: '삐-빅, 눈의 망치',
		english: 'Beep-Bip, the Hammer of Snow',
		japanese: 'ピーッ、雪のハンマー',
		chinese: '哔——叽，雪之锤',
		french: 'Bip-Bip, le Marteau de Neige',
		spanish: 'Bip-Bip, el Martillo de Nieve',
		vietnamese: 'Bíp-Bíp, Búa Tuyết',
		thai: 'บี๊บ-บิ๊บ ค้อนแห่งหิมะ',
		hindi: 'बीप-बिप, बर्फ़ का हथौड़ा'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'끝없는 눈보라가 휘몰아치는 설원 초입. 탐험대는 "눈 결정 전리품을 파는 위대한 전사"가 있다는 우스꽝스러운 소문을 듣고 올라왔다. 멀리서 바람 빠진 뿔피리 소리가 "삐-빅" 들려온다.',
		rule: '설원을 지나려는 자는 "북녘의 위대한 전사"에게 통행세 대신 그의 "영광스러운 눈 결정"을 사야 한다고 전해진다.',
		secret:
			'그 위대한 전사라는 것은 어설프게 사람 형상을 한 눈과 얼음 덩어리일 뿐이다. 정수리에는 얼음 뿔이 불안하게 흔들리고, 코 고드름에서는 물방울이 뚝뚝 떨어진다.'
	},

	protagonist_goal: '설원에서 "눈 결정 전리품"을 판다는 수상한 장사꾼의 정체를 확인하라.',

	act_tone: {
		intro: {
			mood: '우스꽝스러운 의아함',
			tension: 1,
			narrative_role: '바람 빠진 뿔피리 소리가 설원에 울린다. 위엄을 부리려 애쓰는데, 어딘가 전부 엉성하다.'
		},
		rising: {
			mood: '어이없음과 호기심',
			tension: 3,
			narrative_role:
				'엉성하게 조각된 룬 문양, 흘러내리는 코 고드름. 장사꾼은 자꾸 "전리품"을 강매하려 들고, 거절당할 때마다 묘하게 표정이 굳는다.'
		},
		climax_finale: {
			mood: '코미디 속 첫 균열',
			tension: 5,
			narrative_role:
				'탐험대가 눈 결정을 거부하자, Haraldr의 몸 어딘가에서 처음으로 색색깔 시럽 자국이 번뜩였다 사라진다. "…안 산다고? 영업 방해는… 용서 못 한다."'
		}
	},

	final_boss: {
		id: 'SnowViking_Haraldr_V1',
		name: 'Haraldr',
		appearance:
			'A clumsy humanoid figure of packed snow and ice standing in a swirling blizzard, crudely carved Viking runes covering its body, a single unstable spike of ice as a horn on top of its head. A small icicle nose drips water endlessly. Faint stains of red, green, and blue frozen fruit syrup occasionally bloom and vanish across its torso. It holds a tiny ice horn like a merchant trumpet. Cinematic snowy lighting, slightly comedic high-fantasy aesthetic.',
		surface_identity:
			'자칭 "북녘의 위대한 전사, 눈의 망치 Haraldr". 다짜고짜 뿔피리를 불며 자신의 "영광스러운 눈 결정 전리품"을 팔려 든다.',
		true_identity:
			'아직은 그저 눈과 얼음으로 된 어설픈 장사꾼처럼 보인다. 그러나 그 엉성한 룬 문양과 흘러내리는 시럽은, 이 존재가 단순한 눈사람이 아님을 어렴풋이 암시한다.',
		motivation:
			'최고의 "눈 결정 전리품"을 팔아 "명예와 부"를 얻고 싶어 한다. 자신의 상품을 사지 않는 자는 곧 "영업 방해자"다.',
		twist:
			'"흥, 안 산다고? 내 눈 결정의 가치를 모르는군!" Haraldr가 뿔피리를 불지만 "삐-빅" 바람 빠진 소리만 난다. 그 순간 그의 몸 표면에 빨강, 초록, 파랑 시럽 자국이 번뜩였다 사라진다. "…영업 방해는, 용서 못 한다." 처음으로 그의 목소리에 광전사의 한기가 스친다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '장사꾼의 몸통에서 빨강, 초록, 파랑 시럽 자국이 잠깐 돋아났다가 사라진다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 시럽은 그의 내면에 잠재된 "전리품"의 정체였다. 그의 몸 자체가 상품이다.'
		},
		{
			id: 'fs_02',
			hint: '온몸을 뒤덮은 룬 문양이 어설프게 조각되어 있다. 마치 무언가를 흉내 낸 듯하다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '룬 문양은 그가 전사였던 시절의 흔적을 더듬어 새긴 것이었다.'
		},
		{
			id: 'fs_03',
			hint: '뿔피리를 불 때마다 "삐-빅" 바람 빠진 소리만 난다. 정작 본인은 위풍당당하다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '한때 전장을 호령했을 뿔피리. 지금은 소리조차 제대로 나지 않는다.'
		},
		{
			id: 'fs_04',
			hint: '거절당할 때마다 그의 코 고드름에서 떨어지던 물방울이 잠시 멈춘다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '거절은 그에게 단순한 손해가 아니다. 그것은 "영업 방해", 곧 싸움의 신호다.'
		}
	],

	npc_roles: {
		eira: {
			role: '첫 단서의 관찰자',
			arc: '1편: 동행단의 안내자로서 장사꾼의 정체를 침착히 관찰하고 첫 단서를 기록한다.'
		},
		ivar: {
			role: '도전자',
			arc: '1편: "북녘의 위대한 전사"라는 자칭에 호승심이 일어 한 판 붙어보려 든다.'
		},
		inka: {
			role: '딱하게 보는 자',
			arc: '1편: 어설픈 눈사람 장사꾼을 딱하게 여기며 적의 없이 다가가 말을 건다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '삐-빅 소리를 따라',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 설원 초입에 들어선다. 동행단의 안내자 에이라가 "삐-빅" 소리를 따라 길을 잡는다. 눈밭에 엉성한 좌판이 차려져 있고, 에이라가 첫 단서를 조용히 기록한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '한 판 붙어보겠나',
			boss: 'random_boss',
			npc: 'ivar',
			summary:
				'이바르가 "위대한 전사"라는 자칭을 듣고 호승심에 나선다. "그렇게 위대하다면, 나와 한 판 붙어보겠나?" 그러나 장사꾼은 얼음 조각을 전리품이라며 내밀 뿐이다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '정말 전사 맞아요?',
			boss: 'random_boss',
			npc: 'inka',
			summary:
				'인카가 흘러내리는 코 고드름과 어설픈 룬을 보고 그를 딱하게 여긴다. 적의 없이 다가가 말을 건다. "…당신, 정말 전사 맞아요?" 장사꾼이 잠시 머뭇거린다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '번뜩이는 시럽',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 장사꾼의 몸에 빨강·초록·파랑 시럽 자국이 번뜩였다 사라지는 것을 기록한다. 무언가 단순한 눈사람이 아니다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '영업 방해는 용서 못 한다',
			boss: 'pool_106',
			npc: 'ivar',
			summary:
				'Haraldr가 뿔피리를 불지만 "삐-빅" 소리뿐이다. 거절당한 그의 몸에서 시럽이 번뜩이며 처음으로 광전사의 한기가 스민다. "…영업 방해는, 용서 못 한다." 호승심에 나섰던 이바르가 첫 전투를 맞는다.'
		}
	],

	act_summary: {
		intro: '설원 초입, "삐-빅" 뿔피리 소리를 따라가니 엉성한 눈 결정 좌판이 있다. 동행단(에이라·이바르·인카)이 함께 마주한다.',
		rising: '한 판 붙자는 이바르, 딱하게 여기는 인카, 단서를 기록하는 에이라. 위대한 전사라기엔 너무 우스꽝스럽다.',
		climax_finale: '거절당하자 시럽 자국이 번뜩이고, 장사꾼의 목소리에 처음으로 광전사의 한기가 스민다.'
	}
};
