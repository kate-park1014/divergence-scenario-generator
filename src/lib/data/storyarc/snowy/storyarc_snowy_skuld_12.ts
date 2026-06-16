import type { StoryArc } from '$lib/types';

// Skuld 시리즈 2편 (level 12) — 얼음 속 선체의 흔적
export const storyarc_snowy_skuld_12: StoryArc = {
	id: 'snowy_skuld_12',
	level: 12,
	chapter_name: {
		korean: '얼음 속의 용머리',
		english: 'The Dragon-Head in the Ice',
		japanese: '氷中の龍頭',
		chinese: '冰中的龙首',
		french: 'La Tête de Dragon dans la Glace',
		spanish: 'La Cabeza de Dragón en el Hielo',
		vietnamese: 'Đầu Rồng Trong Băng',
		thai: 'หัวมังกรในน้ำแข็ง',
		hindi: 'बर्फ़ में ड्रैगन-शीर्ष'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'빙하의 그늘이 길게 드리운 설원. 탐험대가 더 깊이 들어서자, 빙하 표면 곳곳에 거대한 선박의 윤곽이 어렴풋이 비친다. 용머리 뱃머리 조각이 얼음 속에 비틀린 채 묻혀 있다.',
		rule: '빙하의 흔적을 더듬는 자에게는 침범자를 향한 한기가 더욱 거세진다. 무언가를 들여다볼수록 빙하는 경계한다.',
		secret:
			'이 빙하 정령은 단순히 얼음으로 빚어진 것이 아니다. 그 중심에는 좌초되어 얼어붙은 고대 바이킹 선박의 잔해가 숨어 있다. 빙하와 선체가 하나로 엉겨 있다.'
	},

	protagonist_goal: '빙하 속에 묻힌 거대한 선체의 정체를 밝혀내라.',

	act_tone: {
		intro: {
			mood: '서늘한 발견',
			tension: 1,
			narrative_role: '빙하 표면에 거대한 선박의 윤곽이 비친다. 얼음 너머로 용머리 뱃머리가 어렴풋하다.'
		},
		rising: {
			mood: '깊어지는 의혹',
			tension: 3,
			narrative_role:
				'얼음 속에서 노와 방패, 부서진 돛대의 잔해가 차례로 드러난다. 빙하는 살아 있는 자연이 아니라, 무언가의 무덤처럼 보인다.'
		},
		climax_finale: {
			mood: '경계의 폭발',
			tension: 5,
			narrative_role:
				'선체를 들여다보려는 탐험대를 향해 빙하가 격렬한 한기를 뿜는다. "그 안을 보지 마라." 처음으로 정령의 목소리에 두려움 비슷한 떨림이 섞인다.'
		}
	},

	final_boss: {
		id: 'GlacialOath_Skuld_V1',
		name: 'Skuld',
		appearance:
			'A towering glacial ice spirit with the unmistakable silhouette of an ancient longship buried and twisted within its translucent blue body, a carved dragon-head prow emerging from the frost. Broken oars, shields and a shattered mast are frozen inside the ice. Pale blue light pulses from deep within. Cinematic cold snowy lighting, eerie and solemn high-fantasy aesthetic.',
		surface_identity:
			'여전히 냉혹한 빙하 정령으로 보인다. 그러나 그 몸 안에 묻힌 거대한 선박의 윤곽이 점점 또렷해진다.',
		true_identity:
			'이 빙하의 중심에는 좌초되어 얼어붙은 고대 바이킹 선박이 숨어 있다. 빙하 정령은 단순한 자연이 아니라, 그 선체와 하나로 엉긴 무언가다.',
		motivation:
			'그 안을 들여다보려는 자를 거세게 밀어낸다. 마치 보여서는 안 될 무언가를 지키려는 듯, 선체에 다가설수록 한기가 매섭게 휘몰아친다.',
		twist:
			'탐험대가 얼음 속 용머리 뱃머리에 손을 뻗자, 빙하 전체가 격렬하게 떨며 한기를 분출한다. "…그 안을 보지 마라." 냉혹하던 목소리에 처음으로 두려움 비슷한 떨림이 섞인다. 무언가를 들킬까 두려워하는 자의 목소리였다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '빙하 표면에 거대한 선박의 윤곽이 어렴풋이 비친다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 윤곽은 빙하 안에 통째로 묻힌 고대 바이킹 선박의 것이었다.'
		},
		{
			id: 'fs_02',
			hint: '얼음 속에서 부서진 노와 방패, 돛대의 잔해가 드러난다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 잔해들은 격렬한 좌초의 흔적 — 이 배가 평온히 가라앉은 것이 아님을 말한다.'
		},
		{
			id: 'fs_03',
			hint: '용머리 뱃머리에 다가설수록 빙하의 한기가 매섭게 거세진다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 거센 한기는 무언가를 들킬까 두려워하는 자의 방어였다.'
		},
		{
			id: 'fs_04',
			hint: '선체 곳곳에 새겨진 룬이 빙하 정령의 표면 문양과 똑같다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '같은 룬이 새겨진 이유 — 빙하 정령과 선체는 본래 하나의 존재였다.'
		}
	],

	npc_roles: {
		eira: {
			role: '선체의 기록자',
			arc: '2편: 얼음 속 선박의 윤곽과 룬을 대조해, 빙하와 선체가 하나임을 처음으로 추론하고 기록한다.'
		},
		ivar: {
			role: '잔해를 살피는 전사',
			arc: '2편: 부서진 노와 방패를 보고, 이것이 평범한 침몰이 아닌 격렬한 좌초의 흔적임을 알아본다.'
		},
		hild: {
			role: '무덤의 증언자',
			arc: '2편: 빙하가 자연이 아니라 누군가의 무덤임을 직감하고, 그 안에 잠든 이를 기린다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '얼음에 비친 윤곽',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 빙하 깊은 곳으로 들어선다. 에이라가 얼음 표면에 비친 거대한 선박의 윤곽을 발견하고, 용머리 뱃머리를 기록하기 시작한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '부서진 노',
			boss: 'random_boss',
			npc: 'ivar',
			summary:
				'이바르가 얼음 속 부서진 노와 방패, 돛대 잔해를 살핀다. "이건 그냥 가라앉은 게 아니야. 무언가에 부딪혀… 격렬하게 좌초된 거다."'
		},
		{
			order: 3,
			act: 'rising',
			title: '누군가의 무덤',
			boss: 'random_boss',
			npc: 'hild',
			summary:
				'힐드가 빙하가 자연이 아니라 무덤임을 직감한다. 차가운 얼음 앞에서 그녀는 망자를 기리는 의례를 조용히 올린다. "여기 잠든 이여, 그대의 이름을 듣고 싶구나."'
		},
		{
			order: 4,
			act: 'rising',
			title: '같은 룬',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 선체의 룬과 빙하 정령 표면의 문양이 똑같음을 발견한다. 빙하와 선체는 하나다. 그녀가 그 추론을 기록에 새긴다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '그 안을 보지 마라',
			boss: 'pool_107',
			npc: 'eira',
			summary:
				'에이라가 용머리 뱃머리에 손을 뻗자 빙하가 격렬히 떨며 한기를 분출한다. "그 안을 보지 마라." 냉혹하던 목소리에 처음으로 두려움 비슷한 떨림이 섞이고, 들킬까 두려워하는 자의 방어가 폭발한다.'
		}
	],

	act_summary: {
		intro: '빙하 표면에 거대한 선박의 윤곽이 비친다. 에이라가 용머리 뱃머리를 기록하기 시작한다.',
		rising: '격렬한 좌초의 흔적을 읽는 이바르, 무덤을 기리는 힐드, 같은 룬을 발견한 에이라. 빙하는 자연이 아니라 누군가의 무덤이다.',
		climax_finale: '"그 안을 보지 마라." 선체를 들여다보려는 탐험대를 향해, 두려움이 섞인 한기가 폭발한다.'
	}
};
