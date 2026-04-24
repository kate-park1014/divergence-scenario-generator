import type { StoryArc } from '$lib/types';

export const storyarc_desert_mirage_chef: StoryArc = {
	id: 'desert_mirage_chef',
	theme: 'desert',
	chapter_name: {
		korean: '환상의 조리사 사하르',
		english: 'Sahar, the Mirage Chef',
		japanese: '幻想の料理人サハル',
		chinese: '幻象厨师萨哈尔',
		french: 'Sahar, le Chef du Mirage',
		spanish: 'Sahar, el Chef del Espejismo',
		vietnamese: 'Sahar, Đầu Bếp Ảo Ảnh',
		thai: 'ซาฮาร์ เชฟแห่งภาพลวงตา',
		hindi: 'साहर, मृगतृष्णा का रसोइया'
	},
	rising_count: 3,

	world: {
		setting:
			'끝없는 사막. 탐험대는 목이 마르고 지쳐간다. 신기루처럼 저 멀리 황금빛 빛이 일렁인다.',
		rule:
			'사막에는 오래전부터 "기적의 요리사"에 대한 전설이 전해진다. 굶주린 자에게 완벽한 한 끼를 대접한다는 이야기.',
		secret:
			'그 요리사는 기근 속에서 사람들을 살리기 위해 환각 향신료를 개발했다. 하지만 사람들은 환상에만 의존하다 모두 굶어 죽었다. 그는 여전히 연회를 연다 — 아무도 죽지 않는다고 믿으며.'
	},

	protagonist_goal: '사막 한가운데서 발생한 기묘한 실종 사건의 원인을 추적하라.',

	act_tone: {
		intro: {
			mood: '갈증과 기대',
			tension: 1,
			narrative_role:
				'사막을 헤매던 탐험대 앞에 환상적인 연회가 펼쳐진다. 황금빛 요리와 향신료 냄새. 아무도 의심하지 않는다.'
		},
		rising: {
			mood: '황홀함과 균열',
			tension: 3,
			narrative_role:
				'요리는 완벽하지만 뭔가 이상하다. 배가 부른 느낌인데 실제로 아무것도 먹지 않은 것 같다. 환상과 현실의 경계가 흔들린다.'
		},
		climax_finale: {
			mood: '공허와 각성',
			tension: 5,
			narrative_role:
				'음식이 손에 닿는 순간 모래로 부서진다. 사하르의 진실이 드러난다. "배고픔이라는 개념을 없애면 배고프지 않지."'
		}
	},

	final_boss: {
		id: 'MirageChef_V0',
		name: '환상의 조리사 사하르 (Sahar)',
		appearance_npc:
			'A warm, generous chef in desert robes offering steaming dishes from a floating golden tray. His smile is wide and his eyes are kind. The food smells incredible. Everything looks real.',
		appearance_boss:
			'A flamboyant desert chef riding atop a massive, walking oven shaped like a sandstone tortoise. His body constantly flickers between different forms — young, old, male, female — like heat haze distortions. Around him float dozens of golden cooking utensils, each dripping with glowing, illusory dishes that evaporate into sand when touched. His eyes burn like twin coals, and a long ribbon of spice-infused smoke trails behind him, forming ghostly banquets in the air.',
		surface_identity: '사막 한가운데서 환상의 연회를 베푸는 미친 요리사. 굶주린 자들에게 "최고의 한 끼"를 제공한다.',
		true_identity:
			'과거 왕국의 궁정 요리사. 기근 속에서 사람들을 살리기 위해 환각 향신료를 개발했지만, 사람들은 실제 음식을 먹지 않고 환상에만 의존하다 모두 굶어 죽었다. 그는 "배부른 환상"이 "고통스러운 현실"보다 낫다고 믿게 되었다.',
		motivation:
			'탐험대에게 현실의 고통 대신 완벽한 환상을 먹이려 한다. "굶주림도, 갈증도 느끼지 않는 세계"로 초대하려 한다.',
		twist:
			'"이건 진짜보다 더 진짜야." 사하르는 미소 지으며 접시를 내민다. 하지만 그것은 손에 닿자마자 모래로 부서진다. "배고픔을 없애는 방법은 간단하지. 배고픔이라는 개념을 없애면 되니까." 쓰러지며 그는 속삭인다 — "…너희는… 왜 그렇게까지 현실을 고집하지…?"'
	},

	global_foreshadowing: [
		{
			id: 'mc_01',
			hint: '연회장 바닥에 모래가 조금씩 섞여 있다. 요리사가 서둘러 쓸어낸다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 5,
			reveal_context: '모든 음식은 처음부터 모래였다.'
		},
		{
			id: 'mc_02',
			hint: '탐험대 중 아무도 실제로 음식을 삼키는 장면이 없다. 먹은 것 같은 느낌만 있다.',
			plant_act: 'rising',
			plant_room: 2,
			reveal_act: 'climax_finale',
			reveal_room: 5,
			reveal_context: '환각 향신료가 포만감의 감각 자체를 만들어낸다.'
		},
		{
			id: 'mc_03',
			hint: '사하르의 몸이 가끔 흔들린다. 노인처럼 보였다가 다시 젊어진다.',
			plant_act: 'rising',
			plant_room: 3,
			reveal_act: 'climax_finale',
			reveal_room: 5,
			reveal_context: '그는 수백 년째 이 사막을 돌며 연회를 열고 있다.'
		},
		{
			id: 'mc_04',
			hint: '연회에 참석한 다른 손님들이 눈을 감은 채 미소 짓고만 있다. 한 번도 움직이지 않는다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 5,
			reveal_context: '그들은 이미 오래전에 환상 속에서 굶어 죽었다.'
		}
	],

	npc_roles: {
		Zafir: {
			role: '첫 번째 유혹의 목격자',
			arc: '1화에서 연회에 가장 먼저 달려가는 낙천적 동료. 5화에서 환상의 붕괴를 가장 먼저 직시하며 충격받는 인물. 처음과 끝을 연결하는 목격자.'
		},
		Naira: {
			role: '현실 감각의 균열자',
			arc: '2화에서 맛의 이상함을 처음으로 눈치채는 인물. 의심의 씨앗을 심는 역할.'
		},
		Zahra_Pyra: {
			role: '침묵하는 증거',
			arc: '3화에서 움직이지 않는 손님들에 주목하며 이미 굶어 죽은 피해자들의 존재를 폭로하는 역할.'
		},
		Donkey: {
			role: '진실의 방아쇠',
			arc: '4화에서 실수로 접시를 떨어뜨려 모래임을 폭로. 무심코 환상의 균열을 만든 인물.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '황금빛 연기',
			boss: 'pool_021',
			npc: 'Zafir',
			summary:
				'사막을 헤매던 탐험대 앞에 갑자기 연회장이 나타난다. 자피르가 먼저 달려간다. 사하르가 웃으며 맞이한다. "오셨군요. 마침 요리가 다 됐습니다."'
		},
		{
			order: 2,
			act: 'rising',
			title: '완벽한 한 끼',
			boss: 'pool_022',
			npc: 'Naira',
			summary:
				'황금빛 요리들이 차례로 나온다. 먹으면 배가 부른 것 같다. 나이라가 이상함을 느낀다 — "나 분명히 먹었는데… 왜 아무 맛도 기억이 안 나지?" 사하르가 웃으며 더 권한다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '움직이지 않는 손님들',
			boss: 'pool_023',
			npc: 'Zahra_Pyra',
			summary:
				'자흐라가 다른 손님들을 살핀다. 모두 눈을 감고 미소만 짓고 있다. "저분들… 숨은 쉬고 있어요?" 사하르가 화제를 돌린다. "디저트를 가져올게요."'
		},
		{
			order: 4,
			act: 'rising',
			title: '모래 맛',
			boss: 'pool_024',
			npc: 'Donkey',
			summary:
				'당키가 실수로 접시를 떨어뜨린다. 산산조각 나며 모래가 쏟아진다. 다른 접시도 집어보자 손에서 모래로 부서진다. "이거… 다 가짜야." 사하르의 표정이 굳는다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '배고픔이라는 개념',
			boss: 'random_boss',
			npc: 'Zafir',
			summary:
				'사하르의 진실이 드러난다. 환각 향신료가 공기 중에 퍼진다. "배고픔을 없애는 방법은 간단해. 배고픔이라는 개념을 없애면 되니까." 쓰러지며 속삭인다 — "…너희는… 왜 그렇게까지 현실을 고집하지…?"'
		}
	],

	act_summary: {
		intro: '사막 한가운데 나타난 환상의 연회. 의심할 이유가 없다.',
		rising: '배부른 것 같은데 아무것도 먹지 않았다. 손님들은 움직이지 않는다. 접시는 모래다.',
		climax_finale: '모든 것이 환상이었다. 사하르는 그것이 자비라고 믿는다.'
	}
};
