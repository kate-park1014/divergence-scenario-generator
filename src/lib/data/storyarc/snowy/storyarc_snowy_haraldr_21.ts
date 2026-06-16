import type { StoryArc } from '$lib/types';

// Haraldr 시리즈 3편 (level 21) — 녹지 않는 미소
export const storyarc_snowy_haraldr_21: StoryArc = {
	id: 'snowy_haraldr_21',
	level: 21,
	chapter_name: {
		korean: '녹지 않는 미소',
		english: 'The Smile That Never Melts',
		japanese: '溶けない笑顔',
		chinese: '不会融化的微笑',
		french: 'Le Sourire Qui Ne Fond Jamais',
		spanish: 'La Sonrisa Que Nunca Se Derrite',
		vietnamese: 'Nụ Cười Không Bao Giờ Tan',
		thai: 'รอยยิ้มที่ไม่มีวันละลาย',
		hindi: 'वह मुस्कान जो कभी नहीं पिघलती'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'설원 한복판, Haraldr의 "임시 점포"가 늘어선 거리. 얼음 간판마다 그의 웃는 얼굴이 새겨져 있다. 그러나 그 미소는 한 번도 변하지 않는다.',
		rule: '점포 거리에서는 누구나 웃어야 한다. 웃지 않는 손님은 "불만 고객"으로 분류된다.',
		secret:
			'그의 미소는 얼어붙어 굳은 것이다. 웃고 싶어서가 아니라, 굶주림을 감추기 위해 억지로 얼려놓은 표정이다.'
	},

	protagonist_goal: 'Haraldr의 변하지 않는 미소 뒤에 무엇이 숨어 있는지 밝혀라.',

	act_tone: {
		intro: {
			mood: '과장된 친절',
			tension: 1,
			narrative_role: '얼음 간판마다 똑같은 미소. Haraldr가 지나치게 친절하게 탐험대를 맞이한다.'
		},
		rising: {
			mood: '어긋나는 미소',
			tension: 3,
			narrative_role:
				'친절한 말과 달리 그의 행동은 점점 거칠어진다. 미소는 그대로인데 목소리에는 굶주림이 배어 나온다.'
		},
		climax_finale: {
			mood: '미소 아래의 허기',
			tension: 5,
			narrative_role:
				'거래가 결렬되자 Haraldr의 얼어붙은 미소가 처음으로 갈라진다. 그 틈으로 채워지지 않는 허기가 새어 나온다.'
		}
	},

	final_boss: {
		id: 'SnowViking_Haraldr_V1',
		name: 'Haraldr',
		appearance:
			'A clumsy snow-and-ice humanoid wearing a permanently frozen, too-wide grin carved into its face, standing among rows of ice signboards all bearing the same smiling portrait. Crude Viking runes and faint multicolor syrup veins run beneath the surface. The grin shows a hairline crack near one corner. Cinematic snowy market street, eerie semi-comedic high-fantasy aesthetic.',
		surface_identity:
			'한없이 친절한 "프랜차이즈 사장". 얼음 간판마다 똑같은 미소를 새겨두고 손님을 맞이한다.',
		true_identity:
			'그의 미소는 굶주림을 감추려 억지로 얼려놓은 가면이다. 친절할수록 그 안의 허기는 더 깊어진다.',
		motivation:
			'손님이 떠나지 못하게, 늘 웃는 얼굴로 붙잡아 두려 한다. 미소가 통하지 않으면 본색을 드러낸다.',
		twist:
			'"왜… 웃지 않지?" Haraldr의 얼어붙은 미소에 금이 간다. 갈라진 틈으로 시럽이 흘러내리고, 처음으로 그의 진짜 얼굴 — 채워지지 않는 허기에 일그러진 광전사의 얼굴이 드러난다. "나는… 아직도 배가 고프다."'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '얼음 간판의 미소와 Haraldr의 실제 표정이 한순간 어긋난다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '간판의 미소는 그가 보여주고 싶은 모습, 갈라진 미소는 그의 진짜 모습이었다.'
		},
		{
			id: 'fs_02',
			hint: '친절한 인사 끝에 그의 손이 무의식적으로 손님의 보따리를 향한다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '친절은 미끼였다. 그의 본능은 늘 "전리품"을 향해 있었다.'
		},
		{
			id: 'fs_03',
			hint: '점포 뒤편에 손도 대지 않은 음식들이 산처럼 쌓여 얼어 있다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '무엇을 쌓아도 그의 허기는 채워지지 않았다. 그래서 점점 더 모으기만 했다.'
		},
		{
			id: 'fs_04',
			hint: '"불만 고객"이라 적힌 얼음 우리 안에 누군가의 그림자가 갇혀 있다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '웃지 않은 손님들의 말로였다. 미소를 강요하던 친절의 끝.'
		}
	],

	npc_roles: {
		eira: {
			role: '가면의 해독자',
			arc: '3편: 친절의 가면 뒤에 숨은 "채워지지 않는 허기"라는 진실을 해독한다.'
		},
		ivar: {
			role: '자존심을 알아본 자',
			arc: '3편: 얼어붙은 미소 뒤에 숨은 전사의 자존심을 알아보고 불편해한다.'
		},
		inka: {
			role: '두둔하는 자',
			arc: '3편: "그냥 배고픈 거야"라며 그를 두둔하고 끝까지 사람으로 대한다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '똑같은 미소의 거리',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 Haraldr의 점포 거리에 들어선다. 에이라가 똑같은 미소의 간판들을 관찰하며 기록한다. Haraldr가 과장되게 친절히 맞이한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '보따리를 향한 손',
			boss: 'random_boss',
			npc: 'ivar',
			summary:
				'이바르가 친절한 인사 끝에 Haraldr의 손이 슬며시 보따리로 향하는 것을 본다. 그 미소 뒤에 전사의 자존심이 숨어 있음을 알아보고 불편해한다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '그냥 배고픈 거야',
			boss: 'random_boss',
			npc: 'inka',
			summary:
				'인카가 점포 뒤편에 산처럼 쌓인 음식과 굶주린 그를 본다. "그냥 배고픈 거야." 그를 괴물이 아닌 한 사람으로 두둔한다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '불만 고객',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 "불만 고객"이라 적힌 얼음 우리를 발견한다. 웃지 않은 손님의 그림자가 갇혀 있다. 친절이 가면이었음을 기록한다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '나는 아직도 배가 고프다',
			boss: 'pool_106',
			npc: 'eira',
			summary:
				'거래가 결렬되자 Haraldr의 얼어붙은 미소에 금이 간다. 갈라진 틈으로 허기에 일그러진 광전사의 얼굴이 드러난다. "나는 아직도 배가 고프다." 에이라가 그 허기의 정체를 기록하고, 두둔하던 인카가 침묵한다.'
		}
	],

	act_summary: {
		intro: '똑같은 미소의 간판이 늘어선 점포 거리. Haraldr가 과장되게 친절히 맞이한다.',
		rising: '전사의 자존심을 알아본 이바르, 그를 두둔하는 인카, 가면을 기록하는 에이라. 친절 뒤에 다른 것이 있다.',
		climax_finale: '얼어붙은 미소가 갈라지고, 채워지지 않는 허기에 일그러진 광전사의 얼굴이 드러난다.'
	}
};
