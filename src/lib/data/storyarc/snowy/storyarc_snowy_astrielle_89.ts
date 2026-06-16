import type { StoryArc } from '$lib/types';

// Astrielle 시리즈 9편 (level 89) — 진실 회수: 지키려는 거절
export const storyarc_snowy_astrielle_89: StoryArc = {
	id: 'snowy_astrielle_89',
	level: 89,
	chapter_name: {
		korean: '지키기 위한 거절',
		english: 'A Refusal Meant to Protect',
		japanese: '守るための拒絶',
		chinese: '为守护而拒绝',
		french: 'Un Refus pour Protéger',
		spanish: 'Un Rechazo para Proteger',
		vietnamese: 'Sự Cự Tuyệt Để Bảo Vệ',
		thai: 'การปฏิเสธเพื่อปกป้อง',
		hindi: 'रक्षा के लिए किया गया इनकार'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'옥좌의 방으로 이어지는 마지막 회랑. 여왕의 봉인이 한계에 다다라, 절대영도의 안개와 얼음꽃이 사방에서 미친 듯 피고 부서진다. 그녀는 마지막 힘을 다해 탐험대를 밀어내려 한다.',
		rule: '여왕의 거절이 가장 거세지는 곳. 그러나 그 모든 폭풍은 여전히 사람을 비껴가며, 다만 그들을 안식처 밖으로 몰아내려 할 뿐이다.',
		secret:
			'여왕은 자신의 힘이 또다시 누군가를 해치기 전에, 탐험대를 이 얼어붙은 안식처에서 몰아내어 그들을 지키고 싶어 한다. 그녀의 모든 거절은 사랑하는 이를 지키려는 마지막 보호의 몸짓이다.'
	},

	protagonist_goal: '여왕의 가장 거센 거절을 마주하고, 그 거절이 실은 무엇을 지키기 위한 것인지 확인하라.',

	act_tone: {
		intro: {
			mood: '한계에 다다른 봉인',
			tension: 3,
			narrative_role:
				'마지막 회랑. 봉인이 한계에 다다라 안개와 얼음꽃이 미친 듯 피고 부서진다. 여왕이 마지막 힘으로 탐험대를 밀어내려 한다.'
		},
		rising: {
			mood: '드러나는 보호의 몸짓',
			tension: 4,
			narrative_role:
				'가장 거센 폭풍 속에서도 사람은 비껴간다. 그녀는 해치려는 것이 아니라, 자신이 그들을 해치기 전에 안식처 밖으로 몰아내려 하고 있다. 거절이 곧 보호임이 또렷해진다.'
		},
		climax_finale: {
			mood: '지키려는 절규',
			tension: 5,
			narrative_role:
				'Astrielle가 마지막 힘을 쥐어짜 폭풍을 일으킨다. "나가요! 제가… 당신들마저 다치게 하기 전에!" 그 절규가 공격이 아니라, 그들을 지키려는 거절임이 마침내 온전히 드러난다.'
		}
	},

	final_boss: {
		id: 'AstrielleWinterSovereign',
		name: 'Astrielle',
		appearance:
			'A majestic platinum-haired woman straining at the limit of her power in a final corridor, absolute-zero mist and ice flowers blooming and shattering wildly around her, yet every gust curving away from the intruders to drive them out rather than harm them. Her fragile frost gown is fraying and her frozen-star eyes are desperate with protective fear. Cinematic cold climactic lighting, heartbreaking high-fantasy aesthetic.',
		surface_identity:
			'마지막 회랑에서 가장 거센 폭풍을 일으키는 겨울 여왕. 그녀는 온 힘을 다해 탐험대를 밀어낸다.',
		true_identity:
			'자신의 힘이 또다시 누군가를 해치기 전에, 탐험대를 안식처 밖으로 몰아내어 지키려는 비운의 계승자. 그녀의 거절은 처음부터 끝까지 보호의 몸짓이었다.',
		motivation:
			'탐험대가 다가오는 것이 두렵다. 자신의 힘이 또다시 누군가를 해치기 전에, 그들을 이 얼어붙은 안식처에서 몰아내어 지키고 싶다.',
		twist:
			'Astrielle가 봉인의 한계에서 마지막 힘을 쥐어짜 폭풍을 일으킨다. "나가요! 제가… 당신들마저 다치게 하기 전에!" 그러나 그 폭풍은 여전히 사람을 비껴간다. 그녀의 거절은 공격이 아니라, 자신이 해치기 전에 그들을 지키려는 마지막 보호의 몸짓이었음이 온전히 드러난다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '봉인이 한계에 다다라, 얼음꽃이 미친 듯 피고 부서지기를 반복한다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '한계에 다다른 봉인은, 더는 자신을 다스리기 어려워진 그녀의 절박함이었다.'
		},
		{
			id: 'fs_02',
			hint: '가장 거센 폭풍 속에서도 사람은 한 번도 다치지 않는다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '끝까지 사람을 비껴가는 폭풍은, 그녀의 거절이 처음부터 보호였음을 증명했다.'
		},
		{
			id: 'fs_03',
			hint: '여왕이 거듭 외친다 — 나가요. 그러나 그 말끝마다 슬픔이 짙게 묻어난다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '슬픔이 묻은 추방의 외침은, 곁에 두고 싶으나 그럴 수 없는 그녀의 모순이었다.'
		},
		{
			id: 'fs_04',
			hint: '인카가 폭풍 한가운데로 한 걸음 더 들어서도, 폭풍은 그녀를 감싸기만 할 뿐 해치지 않는다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '감싸기만 하는 폭풍은, 마지막 순간까지 온기를 차마 해치지 못하는 그녀의 마음이었다.'
		}
	],

	npc_roles: {
		eira: {
			role: '거절의 의미를 새기는 자',
			arc: '9편: 모든 거절이 보호의 몸짓이었음을 해독하여, 여왕의 진심을 기록으로 또렷이 새긴다.'
		},
		inka: {
			role: '폭풍 속으로 들어서는 자',
			arc: '9편: 비껴가는 폭풍을 믿고 그 한가운데로 들어서, 그녀의 거절이 보호임을 온몸으로 증명하며 온기를 건넨다.'
		},
		bran: {
			role: '몰아냄을 거스르는 길잡이',
			arc: '9편: 안식처 밖으로 몰아내려는 그녀에게, 길잡이로서 오히려 그녀를 밖으로 데려가겠다며 발을 멈추지 않는다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '한계의 회랑',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 옥좌로 이어지는 마지막 회랑에 들어선다. 봉인이 한계에 다다라 얼음꽃이 미친 듯 피고 부서진다. 에이라가 여왕의 절박함을 읽어낸다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '비껴가는 마지막 폭풍',
			boss: 'random_boss',
			npc: 'inka',
			summary:
				'인카가 가장 거센 폭풍 속에서도 누구도 다치지 않음을 본다. "보세요, 끝까지 우릴 비껴가요. 이건 지키려는 거예요." 비껴가는 폭풍을 믿고 한 걸음 더 들어선다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '나가요, 라는 슬픔',
			boss: 'random_boss',
			npc: 'bran',
			summary:
				'브란이, 여왕의 추방의 외침 끝마다 묻어나는 슬픔을 듣는다. "곁에 두고 싶은데 그럴 수 없는 거야." 몰아냄을 거스르고 그녀를 밖으로 데려가겠다며 발을 멈추지 않는다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '감싸기만 하는 폭풍',
			boss: 'random_boss',
			npc: 'inka',
			summary:
				'인카가 폭풍 한가운데로 더 깊이 들어선다. 폭풍은 그녀를 감싸기만 할 뿐 해치지 않는다. "마지막까지… 차마 못 해치는 거예요." 거절이 보호임을 온몸으로 증명한다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '다치게 하기 전에',
			boss: 'pool_034',
			npc: 'eira',
			summary:
				'Astrielle가 마지막 힘을 쥐어짜 폭풍을 일으킨다. "나가요! 제가… 당신들마저 다치게 하기 전에!" 그러나 폭풍은 끝까지 사람을 비껴간다. 에이라가 그 진심을 새긴다 — 그녀의 거절은 처음부터 보호였다.'
		}
	],

	act_summary: {
		intro: '한계에 다다른 봉인의 마지막 회랑. 얼음꽃이 미친 듯 피고 부서지며 여왕이 마지막 힘으로 밀어낸다.',
		rising: '비껴가는 폭풍을 믿는 인카, 슬픔을 듣는 브란, 감싸기만 하는 폭풍을 증명하는 인카. 거절이 곧 보호임이 또렷해진다.',
		climax_finale: '"당신들마저 다치게 하기 전에!" 가장 거센 절규조차 사람을 비껴간다. 그녀의 거절은 끝까지 지키려는 몸짓이었다.'
	}
};
