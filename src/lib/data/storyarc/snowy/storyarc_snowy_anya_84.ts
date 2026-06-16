import type { StoryArc } from '$lib/types';

// Anya 시리즈 9편 (level 84) — 절벽 끝의 빛
export const storyarc_snowy_anya_84: StoryArc = {
	id: 'snowy_anya_84',
	level: 84,
	chapter_name: {
		korean: '절벽 끝의 빛',
		english: 'The Light at the Cliff’s Edge',
		japanese: '崖の縁の光',
		chinese: '悬崖边的光',
		french: 'La Lumière au Bord de la Falaise',
		spanish: 'La Luz al Borde del Acantilado',
		vietnamese: 'Ánh Sáng Bên Mép Vực',
		thai: 'แสงที่ขอบหน้าผา',
		hindi: 'चट्टान के किनारे की रोशनी'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'안야의 빛이 마지막으로 향하는 곳, 눈보라 너머 가파른 절벽 끝. 그 끝에 작고 투명한 얼음 무언가가 묻혀 있다. 빛은 그곳에 가까워질수록 점점 더 흐려지고, 점점 더 차가워진다.',
		rule: '절벽 끝에 다다른 자는 안야의 얼어붙은 몸을 보게 된다. 그러나 안야 자신은 그 몸을 한 번도 마주한 적이 없다.',
		secret:
			'절벽 끝에 묻힌 작은 얼음덩이가 바로 안야의 얼어붙은 몸이다. 길을 잃고 얼어 죽은 그날 이후, 영혼은 제 몸이 묻힌 자리조차 알지 못한 채 가족을 기다리며 떠돌아왔다.'
	},

	protagonist_goal: '안야의 빛이 향하는 절벽 끝에 무엇이 있는지, 그 마지막 자리를 확인하라.',

	act_tone: {
		intro: {
			mood: '흐려지는 빛',
			tension: 1,
			narrative_role: '안야의 빛이 절벽 끝으로 향한다. 가까워질수록 빛이 흐려지고 한기가 짙어진다.'
		},
		rising: {
			mood: '얼어붙은 무언가',
			tension: 3,
			narrative_role:
				'절벽 끝에 작고 투명한 얼음이 묻혀 있다. 그 안에 무언가 작은 형체가 어렴풋이 비친다.'
		},
		climax_finale: {
			mood: '제 몸 앞에서',
			tension: 5,
			narrative_role:
				'탐험대가 얼음 속 형체를 알아보자, 안야의 빛이 그 앞에서 멈칫한다. "…저게… 누구예요? 왜… 나처럼 작아요?"'
		}
	},

	final_boss: {
		id: 'GlacialBeacon_Anya_V1',
		name: 'Anya',
		appearance:
			'A steep cliff edge beyond the blizzard where something small and translucent is buried in the ice, a tiny figure faintly visible within. Anya light grows dimmer and colder as it nears, hovering uncertainly before the frozen shape it does not recognize. Cinematic fragile fading blue lighting, deeply melancholic high-fantasy aesthetic.',
		surface_identity:
			'절벽 끝으로 향하는 작은 빛. 그러나 그곳엔 빛이 한 번도 마주한 적 없는 무언가가 묻혀 있다.',
		true_identity:
			'절벽 끝에 묻힌 작은 얼음덩이가 안야의 얼어붙은 몸이다. 길을 잃고 얼어 죽은 그날 이후, 영혼은 제 몸이 묻힌 자리조차 알지 못한 채 가족을 기다리며 떠돌아왔다.',
		motivation:
			'절벽 끝으로 자꾸 이끌리면서도, 그곳에 있는 것이 무엇인지 마주하기를 두려워한다. 그것을 알아보는 순간, 자신이 이미 죽었음을 인정해야 하기 때문이다.',
		twist:
			'탐험대가 얼음 속 형체를 알아보자, 안야의 빛이 그 앞에서 멈칫한다. "…저게… 누구예요? 왜… 나처럼 작아요?" 자신이 기다려온 가족이 아니라, 자신의 얼어붙은 몸이 그곳에 묻혀 있었다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '빛이 절벽 끝에 가까워질수록 흐려지고 차가워진다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '제 몸이 묻힌 자리에 가까워질수록, 영혼은 흩어지고 시려졌다.'
		},
		{
			id: 'fs_02',
			hint: '절벽 끝 얼음 속에 작은 형체가 어렴풋이 비친다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '작은 형체는 어린아이였다 — 안야 자신의 얼어붙은 몸.'
		},
		{
			id: 'fs_03',
			hint: '얼음 속 형체의 옷차림이 안야의 빛이 두른 형상과 똑같다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '같은 옷차림 — 빛과 몸은 한 아이의 것이었다.'
		},
		{
			id: 'fs_04',
			hint: '안야의 빛이 그 얼음 앞에서만은 더 다가가지 못하고 머뭇거린다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '머뭇거림은 두려움이었다 — 그것을 알아보면, 죽음을 인정해야 했으니까.'
		}
	],

	npc_roles: {
		eira: {
			role: '마지막 자리를 읽는 자',
			arc: '9편: 절벽 끝 얼음 속 형체를 살펴, 그것이 안야 자신의 얼어붙은 몸임을 조심스레 밝힌다.'
		},
		inka: {
			role: '곁을 지키는 자',
			arc: '9편: 제 몸 앞에서 머뭇거리는 안야의 빛 곁을 떠나지 않고, 두려움을 함께 견뎌준다.'
		},
		bran: {
			role: '끝으로 인도하는 자',
			arc: '9편: 길잡이로서 빛이 향하는 절벽 끝까지 안전히 인도하되, 그 끝에 무엇이 있을지 마음을 졸인다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '절벽으로 향하는 빛',
			boss: 'random_boss',
			npc: 'bran',
			summary:
				'안야의 빛이 눈보라 너머 절벽 끝으로 향한다. 브란이 길잡이로서 그 끝까지 안전히 인도하지만, 빛이 가까워질수록 흐려지고 차가워짐을 본다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '얼음 속 형체',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 절벽 끝 얼음 속에 작은 형체가 어렴풋이 비치는 것을 발견한다. 조심스레 살피니, 그것은 어린아이의 모습이다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '똑같은 옷차림',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 얼음 속 형체의 옷차림이 안야의 빛이 두른 형상과 똑같음을 확인한다. 빛과 몸은 한 아이의 것이었다. "…저건, 안야 너야."'
		},
		{
			order: 4,
			act: 'rising',
			title: '머뭇거리는 빛',
			boss: 'random_boss',
			npc: 'inka',
			summary:
				'인카가 안야의 빛이 그 얼음 앞에서만은 더 다가가지 못하고 머뭇거림을 본다. 그 두려움을 알아채고 곁을 떠나지 않는다. "괜찮아. 천천히 봐도 돼."'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '왜 나처럼 작아요',
			boss: 'pool_109',
			npc: 'inka',
			summary:
				'탐험대가 얼음 속 형체를 알아보자 안야의 빛이 그 앞에서 멈칫한다. "저게… 누구예요? 왜… 나처럼 작아요?" 기다려온 가족이 아니라 제 얼어붙은 몸이 묻혀 있었음이 드러나고, 곁을 지킨 인카와 함께 전투가 이어진다.'
		}
	],

	act_summary: {
		intro: '절벽 끝으로 향하는 안야의 빛. 가까워질수록 흐려지고 차가워진다. 브란이 그 끝까지 인도한다.',
		rising: '얼음 속 형체를 발견한 에이라, 똑같은 옷차림을 확인한 에이라, 머뭇거리는 빛 곁을 지킨 인카. 그것은 안야 자신이었다.',
		climax_finale: '"왜 나처럼 작아요?" 기다려온 가족이 아니라, 안야의 얼어붙은 몸이 절벽 끝에 묻혀 있었다.'
	}
};
