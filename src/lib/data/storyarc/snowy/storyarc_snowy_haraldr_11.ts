import type { StoryArc } from '$lib/types';

// Haraldr 시리즈 2편 (level 11) — 공짜 시식의 함정
export const storyarc_snowy_haraldr_11: StoryArc = {
	id: 'snowy_haraldr_11',
	level: 11,
	chapter_name: {
		korean: '공짜 시식의 함정',
		english: 'The Free Sample Trap',
		japanese: '無料試食の罠',
		chinese: '免费试吃的陷阱',
		french: 'Le Piège de l’Échantillon Gratuit',
		spanish: 'La Trampa de la Muestra Gratis',
		vietnamese: 'Cái Bẫy Nếm Thử Miễn Phí',
		thai: 'กับดักชิมฟรี',
		hindi: 'मुफ़्त नमूने का जाल'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'1편의 좌판을 지나 더 깊은 설원. 이제 Haraldr는 "공짜 시식"을 외치며 탐험대를 붙잡는다. 곳곳에 색색깔 시럽이 묻은 얼음 잔이 버려져 있다.',
		rule: '"시식"을 받은 자는 반드시 그의 눈 결정을 사야 한다. 공짜는 곧 빚이다.',
		secret:
			'그의 "시식"은 사실 그의 몸에서 짜낸 시럽이다. 한 입 받아 든 자는 그의 "고객 명단"에 영원히 묶인다.'
	},

	protagonist_goal: 'Haraldr의 "공짜 시식"이 무엇으로 만들어지는지 알아내라.',

	act_tone: {
		intro: {
			mood: '집요한 호객',
			tension: 1,
			narrative_role: 'Haraldr가 "딱 한 입만!"을 외치며 탐험대를 쫓아온다. 거절해도 좀처럼 물러서지 않는다.'
		},
		rising: {
			mood: '끈적한 압박',
			tension: 3,
			narrative_role:
				'시럽 잔이 늘어간다. 한 입 받아 든 자에게 Haraldr가 집요하게 결제를 요구한다. 거절의 횟수가 쌓일수록 그의 한기가 짙어진다.'
		},
		climax_finale: {
			mood: '굶주린 영업',
			tension: 5,
			narrative_role:
				'공짜 시식을 거부당하자 Haraldr의 몸에서 시럽이 더 거세게 번진다. "공짜는 빚이다. 갚지 않는 자는… 내가 직접 받아내지."'
		}
	},

	final_boss: {
		id: 'SnowViking_Haraldr_V1',
		name: 'Haraldr',
		appearance:
			'A clumsy snow-and-ice humanoid with crude Viking runes, an unstable ice horn, and a dripping icicle nose, now thrusting a cup of glistening red-green-blue fruit syrup toward the viewer. Discarded syrup-stained ice cups litter the snow around it. Faint hunger gleams in its hollow eyes. Cinematic snowy blizzard, semi-comedic high-fantasy aesthetic.',
		surface_identity:
			'"공짜 시식"을 외치며 탐험대를 붙잡는 끈질긴 장사꾼. 한 입만 맛보라며 색색깔 시럽 잔을 들이민다.',
		true_identity:
			'그의 "시식"은 자신의 몸에서 짜낸 시럽이다. 아직 그 사실을 숨기지만, 시럽을 짜낼 때 그의 표정에 굶주린 광기가 잠시 비친다.',
		motivation:
			'설원을 지나는 모든 자를 "고객"으로 묶고 싶어 한다. 공짜로 맛본 자는 반드시 대가를 치러야 하며, 갚지 않으면 직접 받아낸다.',
		twist:
			'"공짜는 빚이다!" Haraldr가 외치며 자기 몸을 쥐어짜자 빨강·초록·파랑 시럽이 분수처럼 솟는다. "갚지 않는 자는, 내가 직접 받아내지." 그 순간 그의 어설픈 미소 뒤로 광전사의 굶주림이 처음으로 또렷하게 드러난다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: 'Haraldr가 시럽 잔을 채울 때, 잔이 아니라 자기 몸에서 시럽을 짜낸다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '시식의 정체는 그 자신이었다. 그는 자기 몸을 팔고 있었던 것이다.'
		},
		{
			id: 'fs_02',
			hint: '버려진 시럽 잔마다 작은 이빨 자국이 남아 있다. 누군가 허겁지겁 먹은 흔적이다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 이빨 자국은 Haraldr 자신의 것이다. 굶주림을 못 이겨 제 상품을 먹어치운 것.'
		},
		{
			id: 'fs_03',
			hint: '시럽을 짜낼 때마다 Haraldr의 눈에 굶주린 광기가 번뜩인다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '판매 욕구의 정체는 채워지지 않는 허기였다.'
		},
		{
			id: 'fs_04',
			hint: '"고객 명단"이라 적힌 얼음판에 수많은 이름이 얼어붙어 있다. 모두 돌아오지 못한 자들이다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '명단의 이름들은 그가 "빚"을 받아낸 자들이었다.'
		}
	],

	npc_roles: {
		eira: {
			role: '명단의 기록자',
			arc: '2편: 돌아오지 못한 자들의 "고객 명단"을 발견해 그 이름들을 기록한다.'
		},
		ivar: {
			role: '비웃는 전사',
			arc: '2편: "전사가 장사치 흉내라니" 비웃지만, 시럽을 짜내는 그 손이 전사의 것임을 언뜻 본다.'
		},
		inka: {
			role: '공감하는 시식자',
			arc: '2편: 공짜 시식을 받아 들고, 끈질긴 호객 뒤의 외로움에 처음으로 공감한다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '딱 한 입만!',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 더 깊은 설원으로 들어선다. 에이라가 곳곳에 버려진 시럽 잔을 발견하고 기록한다. "공짜 시식!" 외치는 소리가 점점 가까워진다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '왜 이렇게까지',
			boss: 'random_boss',
			npc: 'inka',
			summary:
				'인카가 공짜 시식을 받아 든다. 색색깔 시럽을 맛보며 끈질긴 호객 뒤의 외로움을 느낀다. "…왜 이렇게까지 팔려고 해요?" Haraldr가 잠시 말을 잃는다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '장사치 흉내',
			boss: 'random_boss',
			npc: 'ivar',
			summary:
				'이바르가 "전사가 장사치 흉내라니" 비웃는다. 그러나 Haraldr가 시럽을 짜낼 때, 그 손놀림이 분명 전사의 것임을 언뜻 본다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '고객 명단',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 "고객 명단" 얼음판을 발견한다. 수많은 이름이 얼어붙어 있고, 그들은 돌아오지 못했다. 조용히 기록한다. "…공짜가 아니었어."'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '공짜는 빚이다',
			boss: 'pool_106',
			npc: 'inka',
			summary:
				'시식을 거부당한 Haraldr가 제 몸을 쥐어짜 시럽을 분수처럼 솟구친다. "공짜는 빚이다. 갚지 않는 자는 내가 직접 받아내지." 그에게 공감했던 인카가 광전사의 굶주림과 정면으로 마주한다.'
		}
	],

	act_summary: {
		intro: 'Haraldr가 "공짜 시식"을 외치며 색색깔 시럽 잔을 끈질기게 들이민다.',
		rising: '시식에 공감하는 인카, 전사의 손을 알아본 이바르, 고객 명단을 기록하는 에이라. 공짜는 빚이었다.',
		climax_finale: '거부당하자 시럽이 분수처럼 솟고, 어설픈 미소 뒤 광전사의 굶주림이 또렷이 드러난다.'
	}
};
