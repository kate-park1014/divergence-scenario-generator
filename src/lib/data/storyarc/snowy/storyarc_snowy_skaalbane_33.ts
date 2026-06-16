import type { StoryArc } from '$lib/types';

// Skaalbane 시리즈 4편 (level 33) — 몸부림의 메아리
export const storyarc_snowy_skaalbane_33: StoryArc = {
	id: 'snowy_skaalbane_33',
	level: 33,
	chapter_name: {
		korean: '얼음에 갇힌 몸부림',
		english: 'The Struggle Sealed in Ice',
		japanese: '氷に閉ざされた足掻き',
		chinese: '封冻在冰中的挣扎',
		french: 'La Lutte Scellée dans la Glace',
		spanish: 'El Forcejeo Sellado en el Hielo',
		vietnamese: 'Sự Giãy Giụa Bị Niêm Phong Trong Băng',
		thai: 'การดิ้นรนที่ถูกผนึกในน้ำแข็ง',
		hindi: 'बर्फ़ में बंद छटपटाहट'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'공동을 지나 잔해탑의 중심부에 가까운 거대한 빙실. 얼음 속에 수많은 바이킹이 절규하는 자세 그대로 갇혀 있다. 입을 벌리고, 손을 뻗고, 도망치려 발버둥치던 순간 그대로 얼어붙었다.',
		rule: '이 빙실에서는 얼음에 갇힌 자들의 마지막 순간이 메아리처럼 되풀이된다. 가만히 귀 기울이면, 그들이 죽어가며 외친 절규가 들려온다.',
		secret:
			'얼음 속 절규는 단순한 메아리가 아니다. 무언가가 그 절규를 양분 삼아 자라왔고, 빙실 자체가 그 절규로 이루어진 거대한 위장(胃腸)이다.'
	},

	protagonist_goal: '잔해탑 중심부의 빙실에서, 얼어붙은 절규의 메아리가 무엇을 먹여 살리고 있는지 밝혀라.',

	act_tone: {
		intro: {
			mood: '얼어붙은 비명',
			tension: 2,
			narrative_role: '수많은 바이킹이 절규하는 자세 그대로 얼음에 갇혀 있다. 빙실은 비명의 박물관 같다.'
		},
		rising: {
			mood: '되풀이되는 단말마',
			tension: 4,
			narrative_role:
				'귀 기울이면 그들이 죽어가며 외친 절규가 메아리처럼 되풀이된다. 그 소리가 빙실의 푸른 빛을 더 밝게 키운다.'
		},
		climax_finale: {
			mood: '비명을 먹는 것',
			tension: 5,
			narrative_role:
				'절규가 한순간 거대한 합창으로 부풀고, 빙실 전체가 그 소리를 삼키듯 수축한다. 무언가가 비명을 먹이로 자라고 있음이 드러난다.'
		}
	},

	final_boss: {
		id: 'EchoHarvester_Skaalbane_V1',
		name: 'Skaalbane',
		appearance:
			'A vast ice chamber near the heart of the wreck-tower, countless Viking warriors frozen in mid-scream within the blue ice, mouths open and hands outstretched as if forever struggling to escape. Their frozen cries seem to echo and feed the brightening blue glow at the chamber center. Cinematic harrowing blue lighting, nightmarish high-fantasy aesthetic.',
		surface_identity:
			'영웅과 함께 최후를 맞은 전사들이 잠든 곳이라 여겨지는, 절규하는 형상이 가득한 빙실.',
		true_identity:
			'얼음 속 절규는 안식이 아니다. 무언가가 그 단말마를 메아리처럼 되풀이시키며 양분으로 삼아왔다. 빙실 자체가 그 절규로 자라는 거대한 기관이다.',
		motivation:
			'무언가는 죽어가는 자들의 절규와 공포를 먹고 자란다. 그 메아리가 끊이지 않도록, 갇힌 자들의 마지막 순간을 영원히 되풀이시킨다.',
		twist:
			'얼음 속 절규가 한순간 거대한 합창으로 부풀어 오른다. 빙실 전체가 그 소리를 삼키듯 수축하고, 푸른 빛이 한층 밝아진다. "…우리의 비명을… 멈추게 해줘… 아니, 우리와 함께 비명을 질러줘…" 절규를 먹는 무언가의 정체가 어렴풋이 드러난다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '얼음에 갇힌 바이킹들이 모두 절규하거나 도망치려 발버둥치는 자세로 굳어 있다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그들은 안식한 것이 아니라, 마지막 공포의 순간에 그대로 얼어붙은 것이었다.'
		},
		{
			id: 'fs_02',
			hint: '귀 기울이면 얼음 속에서 죽어가던 자들의 절규가 메아리처럼 되풀이된다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 절규는 흘러간 메아리가 아니라, 무언가가 양분 삼아 끊임없이 되풀이시키는 먹이였다.'
		},
		{
			id: 'fs_03',
			hint: '절규가 커질 때마다 빙실 중심의 푸른 빛이 더 밝아진다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '빛이 밝아진 만큼 무언가가 절규를 삼켜 자랐다 — 비명이 곧 그것의 양식이었다.'
		},
		{
			id: 'fs_04',
			hint: '갇힌 자들의 입이 모두 빙실 중심을 향해 벌어져 있다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그들의 절규가 모두 한 점, 빙실 중심으로 빨려 들어가고 있었다 — 그곳에 무언가가 있었다.'
		}
	],

	npc_roles: {
		eira: {
			role: '절규의 해독자',
			arc: '4편: 얼음 속 절규에서 옛 바이킹 말의 조각을 읽어, 이 비명이 양분으로 되풀이되고 있음을 밝힌다.'
		},
		inka: {
			role: '비명에 응답하는 자',
			arc: '4편: 되풀이되는 단말마에 등 돌리지 않고, 갇힌 자들의 공포와 고독에 마음으로 응답한다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '절규하는 빙실',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 잔해탑 중심부의 빙실에 들어선다. 수많은 바이킹이 절규하는 자세 그대로 얼음에 갇혀 있다. 에이라가 그들의 굳은 표정과 자세를 기록한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '되풀이되는 메아리',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 얼음 속에서 되풀이되는 절규에 귀 기울인다. 옛 바이킹 말의 조각들이 섞여 있다. "이 비명은… 흘러간 게 아니야. 누군가 계속 되풀이시키고 있어."'
		},
		{
			order: 3,
			act: 'rising',
			title: '등 돌리지 않는 마음',
			boss: 'random_boss',
			npc: 'inka',
			summary:
				'인카가 되풀이되는 단말마에 귀를 막지 않는다. 갇힌 자들의 공포와 고독에 마음으로 응답한다. "무서웠죠… 외로웠죠. 저는 도망치지 않을게요."'
		},
		{
			order: 4,
			act: 'rising',
			title: '한 점으로 빨려가는 비명',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 갇힌 자들의 입이 모두 빙실 중심을 향해 벌어진 것을 알아챈다. 절규가 한 점으로 빨려 들어간다. 절규가 커질수록 중심의 빛이 밝아진다. "비명을… 먹고 있어, 무언가가."'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '비명을 먹는 것',
			boss: 'pool_108',
			npc: 'inka',
			summary:
				'절규가 거대한 합창으로 부풀고 빙실이 그 소리를 삼키듯 수축한다. "…우리와 함께 비명을 질러줘…" 절규를 먹는 무언가의 정체가 어렴풋이 드러난다. 갇힌 자들에게 마음으로 응답해온 인카가, 그 고독에 맞서 탐험대와 함께 전투를 맞는다.'
		}
	],

	act_summary: {
		intro: '잔해탑 중심부의 빙실, 절규하는 자세 그대로 얼어붙은 수많은 바이킹. 에이라가 그 마지막 순간을 기록한다.',
		rising: '되풀이되는 절규를 해독하는 에이라, 갇힌 자들의 공포에 응답하는 인카. 비명이 한 점으로 빨려들며 빛을 키운다.',
		climax_finale: '절규가 거대한 합창으로 부풀고, 빙실이 그 소리를 삼키며 절규를 먹는 무언가의 정체가 어렴풋이 드러난다.'
	}
};
