import type { StoryArc } from '$lib/types';

// Skaalbane 시리즈 9편 (level 83) — 박동하는 핵
export const storyarc_snowy_skaalbane_83: StoryArc = {
	id: 'snowy_skaalbane_83',
	level: 83,
	chapter_name: {
		korean: '박동하는 핵',
		english: 'The Beating Core',
		japanese: '脈打つ核',
		chinese: '搏动的核心',
		french: 'Le Cœur Battant',
		spanish: 'El Núcleo Palpitante',
		vietnamese: 'Lõi Đập Rộn',
		thai: 'แกนกลางที่เต้นระริก',
		hindi: 'धड़कता हुआ केंद्र'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'탑의 가장 깊은 안쪽, 핵에 다가서는 구역. 푸른빛이 멀리서 심장처럼 규칙적으로 박동한다. 가까워질수록 그 박동이 발밑의 얼음을 통해 온몸으로 전해진다.',
		rule: '핵에 다가설수록 박동이 거세진다. 그 리듬에 호흡을 맞추는 순간, 탑이 그를 제 일부로 여기기 시작한다.',
		secret:
			'탑의 핵은 흡수한 모든 것이 모여 하나로 박동하는 거대한 얼음 심장이다. 그것은 살아있는 듯 뛰지만, 그 박동은 끝없이 새 온기를 빨아들이려는 굶주림의 맥박이다.'
	},

	protagonist_goal: '탑의 핵에서 박동하는 것이 무엇인지, 그 심장의 정체에 한 걸음 더 다가서라.',

	act_tone: {
		intro: {
			mood: '멀리서 오는 박동',
			tension: 1,
			narrative_role: '푸른빛이 심장처럼 규칙적으로 박동한다. 그 리듬이 얼음을 통해 발밑으로 전해진다.'
		},
		rising: {
			mood: '거세지는 맥박',
			tension: 3,
			narrative_role:
				'핵에 가까워질수록 박동이 온몸을 울린다. 그 리듬은 흡수한 모든 것이 하나로 뛰는 굶주림의 맥박이었다.'
		},
		climax_finale: {
			mood: '심장 앞에서',
			tension: 5,
			narrative_role:
				'탐험대가 핵 앞에 서자, 거대한 얼음 심장이 격렬히 박동하며 빛을 토한다. "…느껴지니… 우리의 심장이… 너희의 온기를 원하는 소리가…"'
		}
	},

	final_boss: {
		id: 'EchoHarvester_Skaalbane_V1',
		name: 'Skaalbane',
		appearance:
			'The innermost depth of the tower approaching its core, where blue light pulses like a giant beating heart, the rhythm transmitted through the ice into the floor. Rusted iron and frozen remains tremble with each beat as the core swells closer. Cinematic pulsing deep-blue lighting, foreboding high-fantasy aesthetic.',
		surface_identity:
			'핵에서 규칙적으로 박동하는 푸른빛. 처음엔 탑 깊은 곳에 잠든 어떤 유물의 맥동처럼 보인다.',
		true_identity:
			'탑의 핵은 흡수한 모든 것이 모여 하나로 박동하는 거대한 얼음 심장이다. 살아있는 듯 뛰지만, 그 박동은 끝없이 새 온기를 빨아들이려는 굶주림의 맥박이다.',
		motivation:
			'박동으로 산 자를 제 리듬에 동화시키려 한다. 그 맥박에 호흡을 맞추는 자는, 어느새 탑의 일부가 되어간다.',
		twist:
			'탐험대가 핵 앞에 서자, 거대한 얼음 심장이 격렬히 박동하며 빛을 토한다. "…느껴지니… 우리의 심장이… 너희의 온기를 원하는 소리가…" 살아있는 심장이 아니라, 흡수한 모든 죽음이 하나로 뛰는 굶주림의 맥박이었다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '핵의 박동이 탐험대의 심장 박동과 점점 같은 리듬으로 맞춰진다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '리듬을 맞추는 순간 동화가 시작된다 — 박동은 흡수의 첫 단계였다.'
		},
		{
			id: 'fs_02',
			hint: '박동이 거세질 때마다 얼음 속 얼굴들이 함께 들썩인다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '흡수된 얼굴들이 핵의 박동에 함께 뛰었다 — 모두가 하나의 심장이었다.'
		},
		{
			id: 'fs_03',
			hint: '박동 사이사이, 아주 짧게 빛이 멎으며 텅 빈 침묵이 깃든다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '박동 사이의 침묵은 굶주림의 공복이었다 — 다음 온기를 삼키기 전의 텅 빔.'
		},
		{
			id: 'fs_04',
			hint: '핵에 가까운 얼음일수록 사람의 온기처럼 미지근하다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '핵의 미지근함은 흡수한 온기였다 — 빼앗은 따스함으로 심장이 뛰고 있었다.'
		}
	],

	npc_roles: {
		eira: {
			role: '맥박을 읽는 자',
			arc: '9편: 핵의 박동 리듬을 분석해, 그것이 흡수한 모든 죽음이 하나로 뛰는 굶주림의 맥박임을 밝힌다.'
		},
		inka: {
			role: '리듬에 맞서는 자',
			arc: '9편: 동료들의 심장이 핵의 박동에 동화되려는 것을 알아채고, 서로의 손을 맞잡아 제 리듬을 지키게 한다.'
		},
		frost: {
			role: '미지근함을 경계하는 자',
			arc: '9편: 핵에 가까운 얼음이 사람 온기처럼 미지근함을 감지하고, 그 빼앗긴 따스함의 정체에 경계를 세운다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '발밑의 박동',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 핵에 다가서는 구역에 들어선다. 에이라가 푸른빛이 심장처럼 박동하며 그 리듬이 얼음을 통해 발밑으로 전해짐을 기록한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '같아지는 리듬',
			boss: 'random_boss',
			npc: 'inka',
			summary:
				'인카가 동료들의 심장 박동이 핵의 리듬과 점점 같아짐을 알아챈다. 서로의 손을 맞잡게 해 제 리듬을 지키게 한다. "각자 심장 소리를 기억해요. 저것에 맞추면 안 돼요."'
		},
		{
			order: 3,
			act: 'rising',
			title: '함께 뛰는 얼굴들',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 박동이 거세질 때마다 얼음 속 얼굴들이 함께 들썩이는 것을 본다. 흡수된 모두가 하나의 심장이었다. "전부… 하나로 뛰고 있어."'
		},
		{
			order: 4,
			act: 'rising',
			title: '빼앗긴 온기',
			boss: 'random_boss',
			npc: 'frost',
			summary:
				'프로스트가 핵에 가까운 얼음이 사람 온기처럼 미지근함을 감지한다. "이 따뜻함… 빼앗은 거야. 저 심장은 우리한테서 훔친 온기로 뛰고 있어."'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '우리의 심장이 너희 온기를 원한다',
			boss: 'pool_108',
			npc: 'eira',
			summary:
				'탐험대가 핵 앞에 서자 거대한 얼음 심장이 격렬히 박동하며 빛을 토한다. "느껴지니… 우리의 심장이… 너희의 온기를 원하는 소리가…" 흡수한 모든 죽음이 하나로 뛰는 굶주림의 맥박임이 드러나며 전투가 이어진다.'
		}
	],

	act_summary: {
		intro: '핵에서 심장처럼 박동하는 푸른빛. 에이라가 그 리듬이 발밑으로 전해짐을 기록한다.',
		rising: '리듬에 맞서는 인카, 함께 뛰는 얼굴들을 본 에이라, 빼앗긴 온기를 경계하는 프로스트. 박동은 굶주림의 맥박이었다.',
		climax_finale: '"우리의 심장이 너희 온기를 원한다." 거대한 얼음 심장이 흡수한 모든 죽음으로 박동한다.'
	}
};
