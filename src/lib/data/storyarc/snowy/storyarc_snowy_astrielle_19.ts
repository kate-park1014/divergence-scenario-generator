import type { StoryArc } from '$lib/types';

// Astrielle 시리즈 2편 (level 19) — 심화: 폭풍 너머의 어긋난 결
export const storyarc_snowy_astrielle_19: StoryArc = {
	id: 'snowy_astrielle_19',
	level: 19,
	chapter_name: {
		korean: '서리 너머의 그림자',
		english: 'The Shadow Beyond the Frost',
		japanese: '霜の向こうの影',
		chinese: '寒霜之外的身影',
		french: 'L Ombre au-delà du Givre',
		spanish: 'La Sombra Más Allá de la Escarcha',
		vietnamese: 'Bóng Hình Sau Lớp Sương Giá',
		thai: 'เงาที่อยู่เหนือเกล็ดน้ำแข็ง',
		hindi: 'पाले के पार की परछाईं'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'얼음 궁전으로 이어지는 서리의 회랑. 탐험대는 한 걸음 더 깊이 들어선다. 사방 벽에는 얼어붙은 정원과, 누군가 손길을 뻗다 만 듯한 서리의 흔적들이 새겨져 있다.',
		rule: '여왕은 폭풍으로 침입자를 거듭 돌려세운다. 그러나 그 폭풍은 정확히 사람을 비껴가며, 다만 길만을 막아설 뿐이다.',
		secret:
			'폭풍이 사람을 피해 가는 것은 우연이 아니다. 그것은 해치지 않으려는 안간힘이며, 여왕은 자신의 힘이 누군가에게 닿는 것을 무엇보다 두려워하고 있다.'
	},

	protagonist_goal: '여왕의 폭풍이 어째서 사람을 비껴가는지, 그 어긋난 결의 까닭을 더듬어라.',

	act_tone: {
		intro: {
			mood: '얼어붙은 정적',
			tension: 2,
			narrative_role:
				'서리의 회랑이 끝없이 이어진다. 벽마다 손길을 뻗다 만 듯한 흔적이 새겨져 있어, 탐험대는 알 수 없는 애틋함을 느낀다.'
		},
		rising: {
			mood: '의심에서 연민으로',
			tension: 3,
			narrative_role:
				'여왕의 폭풍이 거세지지만, 자세히 보면 사람을 정확히 비껴간다. 무너지는 것은 길뿐, 누구도 다치지 않는다. 정복자의 공격이라기엔 너무 조심스럽다.'
		},
		climax_finale: {
			mood: '드러나는 어긋남',
			tension: 5,
			narrative_role:
				'Astrielle가 거대한 서리 장벽을 세워 길을 막는다. 그러나 한 동행이 발을 헛디뎌 미끄러지는 순간, 그녀의 폭풍이 멈칫하더니 도리어 그를 떠받친다.'
		}
	},

	final_boss: {
		id: 'AstrielleWinterSovereign',
		name: 'Astrielle',
		appearance:
			'A majestic and unearthly woman with flowing platinum-white hair within a cathedral-like ice palace corridor, raising a wall of frost that curves precisely around the intruders rather than striking them. Her fragile frost gown trembles, her frozen-star eyes betray fear rather than fury, and absolute-zero mist coils protectively. Ice flowers bloom and shatter along the walls. Cinematic cold sacred lighting, sorrowful high-fantasy aesthetic.',
		surface_identity:
			'침입자를 폭풍으로 거듭 몰아내는 냉혹한 겨울 여왕. 그녀의 서리 장벽은 어떤 발걸음도 안으로 들이지 않는다.',
		true_identity:
			'진실은 여전히 안개에 가려져 있으나, 그 폭풍이 사람을 정확히 비껴가는 모습에서 정복자가 아닌 무언가가 드러나기 시작한다.',
		motivation:
			'침입자를 영역 밖으로 몰아내려 하지만, 그 어떤 폭풍도 사람의 살갗에는 닿지 않게 한다. 길을 막을 뿐, 결코 해치지는 않으려 한다.',
		twist:
			'서리 장벽 앞에서 한 동행이 빙판에 미끄러진다. 그 찰나, 길을 막던 Astrielle의 폭풍이 멈칫하더니 부드러운 눈더미로 변해 그를 떠받친다. "…괜찮… 아니, 가세요. 제발." 그녀의 거절 속에, 해치고 싶지 않은 마음이 처음으로 새어 나온다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '회랑 벽마다 누군가 손길을 뻗다 만 듯한 서리의 흔적이 새겨져 있다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '닿지 못한 손길의 흔적은, 누군가에게 다가가고 싶었으나 그러지 못한 그녀의 갈망이었다.'
		},
		{
			id: 'fs_02',
			hint: '여왕의 폭풍이 사람을 정확히 비껴가며, 무너지는 것은 오직 길뿐이다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '비껴가는 폭풍은, 결코 해치지 않으려는 그녀의 안간힘이었다.'
		},
		{
			id: 'fs_03',
			hint: '서리 장벽이 두꺼워질수록, 그 너머 여왕의 그림자는 더 작게 웅크린다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '벽을 높일수록 작아지는 그림자는, 힘을 휘두를수록 더 깊이 자신을 가두는 그녀였다.'
		},
		{
			id: 'fs_04',
			hint: '동행이 미끄러지자 폭풍이 멈칫하더니, 그를 떠받치는 눈더미로 변한다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 순간의 망설임은, 그녀가 단 한 사람도 다치게 하고 싶지 않다는 진심이었다.'
		}
	],

	npc_roles: {
		eira: {
			role: '흔적을 읽는 자',
			arc: '2편: 회랑 벽의 닿지 못한 손길의 흔적을 해독하며, 여왕에게 누군가를 향한 갈망이 있었음을 읽어낸다.'
		},
		inka: {
			role: '비껴가는 폭풍을 본 자',
			arc: '2편: 폭풍이 사람을 비껴간다는 사실을 가장 먼저 알아채고, 이것이 공격이 아닐 수 있음을 동료들에게 전한다.'
		},
		bran: {
			role: '미끄러진 발을 떠받쳐진 자',
			arc: '2편: 빙판에 미끄러지는 순간 폭풍이 그를 떠받치는 것을 직접 겪고, 길잡이로서 이 안의 존재가 결코 적이 아님을 확신한다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '서리의 회랑',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 궁전으로 이어지는 서리의 회랑에 들어선다. 에이라가 벽마다 새겨진, 손길을 뻗다 만 흔적들을 발견하고 기록한다. 정복자의 궁전이라기엔 너무 애틋하다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '닿지 못한 손길',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 흔적을 해독한다. "이건… 누군가에게 닿으려다 멈춘 손이에요." 냉혹한 여왕에게 누군가를 향한 갈망이 있었음이 처음으로 비친다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '폭풍은 비껴간다',
			boss: 'random_boss',
			npc: 'inka',
			summary:
				'인카가 거센 폭풍 속에서 한 가지를 알아챈다. "보세요, 무너지는 건 길뿐이에요. 우린 다치지 않았어요." 폭풍이 사람을 정확히 비껴간다는 사실을 동료들에게 전한다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '웅크리는 그림자',
			boss: 'random_boss',
			npc: 'bran',
			summary:
				'브란이 서리 장벽 너머를 살핀다. 벽이 높아질수록 여왕의 그림자는 더 작게 웅크린다. "막아설수록… 스스로를 더 가두는군." 길잡이로서 그 모순이 마음에 걸린다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '제발, 가세요',
			boss: 'pool_034',
			npc: 'bran',
			summary:
				'서리 장벽 앞에서 브란이 빙판에 미끄러진다. 그 찰나 폭풍이 멈칫하더니 눈더미로 변해 그를 떠받친다. "…가세요. 제발." 해치고 싶지 않은 마음이 새어 나온 거절이었으나, 여왕은 곧 더 거센 폭풍으로 길을 닫는다.'
		}
	],

	act_summary: {
		intro: '서리의 회랑과 닿지 못한 손길의 흔적들. 정복자의 궁전이라기엔 너무 애틋하다.',
		rising: '갈망을 읽는 에이라, 비껴가는 폭풍을 본 인카, 웅크리는 그림자를 본 브란. 셋은 이것이 공격이 아닐 수 있음을 느낀다.',
		climax_finale:
			'미끄러진 브란을 떠받친 폭풍. "제발, 가세요." 해치고 싶지 않은 마음이 처음으로 거절 속에 새어 나온다.'
	}
};
