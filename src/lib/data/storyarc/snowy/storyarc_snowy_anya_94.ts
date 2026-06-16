import type { StoryArc } from '$lib/types';

// Anya 시리즈 10편 (level 94) — 안야는 여기 있어요 (시리즈 피날레)
export const storyarc_snowy_anya_94: StoryArc = {
	id: 'snowy_anya_94',
	level: 94,
	chapter_name: {
		korean: '안야는 여기 있어요',
		english: 'Anya Is Here',
		japanese: 'アーニャはここにいます',
		chinese: '安雅在这里',
		french: 'Anya Est Ici',
		spanish: 'Anya Está Aquí',
		vietnamese: 'Anya Ở Đây',
		thai: 'อันยาอยู่ตรงนี้',
		hindi: 'अन्या यहाँ है'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'시리즈의 끝. 맴도는 기다림도, 떠나간 가족도, 절벽 끝의 몸도 모두 마주한 끝에 탐험대는 안야의 빛과 그 얼어붙은 몸 사이에 선다. 빛이 점차 투명한 얼음 조각상처럼 굳어간다.',
		rule: '안야가 제 죽음을 마주하는 순간, 그 빛은 영원한 작별로 굳어간다. 이 마지막 자리에서 멈출 수 있는 것은 아무것도 없다.',
		secret:
			'안야는 수백 년 전 눈보라 속에서 사라진 바이킹 정착민의 어린아이다. 길을 잃고 얼어 죽은 영혼이, 사라진 가족을 기다리며 마지막 불꽃을 지펴온 것이다.'
	},

	protagonist_goal: '안야가 마지막으로 마주하는 진실 앞에 함께 서서, 그 영원한 작별을 지켜라.',

	act_tone: {
		intro: {
			mood: '굳어가는 빛',
			tension: 1,
			narrative_role: '안야의 빛이 점차 투명한 얼음 조각상처럼 굳어간다. 마지막 진실이 코앞이다.'
		},
		rising: {
			mood: '회수되는 기다림',
			tension: 3,
			narrative_role:
				'맴돌던 발자국도, 떠난 가족도, 묻힌 몸도 — 시리즈 내내 본 모든 것이 이 마지막 자리로 모인다.'
		},
		climax_finale: {
			mood: '영원한 작별',
			tension: 5,
			narrative_role:
				'안야가 마침내 제 얼어붙은 몸을 알아본다. 작은 손이 사라져가는 환영을 향해 애처롭게 뻗어진다. 속삭임이 눈보라에 흩어진다.'
		}
	},

	final_boss: {
		id: 'GlacialBeacon_Anya_V1',
		name: 'Anya',
		appearance:
			'The child-light hardening into a translucent ice statue at the cliff edge, the small frozen figure within slowly becoming clear. A tiny hand reaches out toward fading apparitions of a family that is no longer there, frost crystals falling like tears. Cinematic climactic fragile blue blizzard, heartbreaking high-fantasy aesthetic.',
		surface_identity:
			'조난자를 인도하던 작은 수호 빛처럼 보였던 존재. 그러나 그 빛은 누군가를 기다리던 한 아이의 영혼이었다.',
		true_identity:
			'수백 년 전 혹독한 눈보라 속에서 사라진 바이킹 정착민의 어린아이, 안야의 영혼이 혹한의 마법으로 얼어붙어 형상화된 존재다. 길을 잃고 얼어붙은 몸을 찾아 영원히 떠돌며, 멀리 사라진 가족을 기다리며 마지막 불꽃을 지피고 있었을 뿐이다.',
		motivation:
			'자신을 두고 떠난 가족이 혹한 속에서 길을 헤맬까 두려워, 그들이 돌아올 길을 밝히고 무사히 따뜻한 고향으로 인도하기 위함이다. 자신을 따르는 이들이 어쩌면 사라진 가족의 흔적일지도 모른다는 덧없는 희망을 품고 있다.',
		twist:
			'탐험대가 빛을 따라 절벽 끝에 다다랐을 때, 빛의 형상은 점차 투명한 얼음 조각상처럼 굳어간다. 그 안에 갇힌 어린아이의 형상이 희미하게 드러나며, 작은 손이 멀리 사라져가는 환영을 향해 애처롭게 뻗어진다. "…아빠, 엄마… 어디 계세요? 안야는… 여기 있어요… 추워요…" 얼음 속에서 속삭이는 목소리는 눈보라에 흩어지며 영원한 작별의 비극을 알린다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '안야의 빛이 점차 투명한 얼음 조각상처럼 굳어가기 시작한다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '굳어가는 빛은 안야가 마침내 제 죽음을 마주하는 순간의 전조였다.'
		},
		{
			id: 'fs_02',
			hint: '멀리 눈보라 속에 흐릿한 사람 형상들의 환영이 어른거린다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '흐릿한 환영은 떠나간 가족이었다 — 끝내 돌아오지 않을, 사라져가는 모습.'
		},
		{
			id: 'fs_03',
			hint: '얼음 속 아이의 작은 손이 천천히 바깥을 향해 펴지기 시작한다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '뻗는 손은 사라져가는 가족을 붙잡으려는 마지막 몸짓이었다.'
		},
		{
			id: 'fs_04',
			hint: '안야의 속삭임이 점점 작아지며 눈보라에 섞여 흩어진다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '흩어지는 속삭임은 영원한 작별의 인사였다 — "안야는 여기 있어요."'
		}
	],

	npc_roles: {
		eira: {
			role: '작별을 기록하는 자',
			arc: '10편: 안야의 마지막 진실과 그 이름을, 잊히지 않도록 기록에 새긴다 — 한 아이가 여기 있었음을.'
		},
		inka: {
			role: '마지막을 함께하는 자',
			arc: '10편: 제 죽음을 마주한 안야 곁에 끝까지 머물며, 홀로 보내지 않고 그 작별을 함께한다. (3인 throughline 수렴)'
		},
		bran: {
			role: '집으로 인도하려는 자',
			arc: '10편: 길잡이로서, 끝내 돌아오지 못한 가족 대신 안야를 마지막 안식으로 인도하려 한다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '굳어가는 조각상',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 시리즈의 끝, 안야의 빛과 그 얼어붙은 몸 사이에 선다. 에이라가 빛이 점차 투명한 얼음 조각상처럼 굳어가기 시작함을 본다. 마지막 진실이 코앞이다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '흐릿한 환영',
			boss: 'random_boss',
			npc: 'bran',
			summary:
				'브란이 멀리 눈보라 속에 흐릿한 사람 형상들의 환영이 어른거림을 본다. 끝내 돌아오지 않을, 사라져가는 가족이다. 그 대신 안야를 안식으로 인도하려 마음먹는다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '뻗는 작은 손',
			boss: 'random_boss',
			npc: 'inka',
			summary:
				'인카가 얼음 속 아이의 작은 손이 천천히 바깥을 향해 펴지는 것을 본다. 사라져가는 가족을 붙잡으려는 마지막 몸짓이다. 그 곁을 끝까지 떠나지 않는다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '흩어지는 속삭임',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 안야의 속삭임이 점점 작아지며 눈보라에 섞여 흩어짐을 듣는다. 영원한 작별의 인사임을 알고, 그 이름을 잊히지 않도록 기록에 새긴다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '안야는 여기 있어요, 추워요',
			boss: 'pool_109',
			npc: 'inka',
			summary:
				'안야가 마침내 제 얼어붙은 몸을 알아본다. 작은 손이 사라져가는 환영을 향해 뻗어진다. "아빠, 엄마… 어디 계세요? 안야는… 여기 있어요… 추워요…" 속삭임이 눈보라에 흩어지며 영원한 작별이 드러나고, 끝까지 곁을 지킨 인카와 3인의 여정이 수렴하는 최종 결전이 벌어진다.'
		}
	],

	act_summary: {
		intro: '안야의 빛이 투명한 얼음 조각상처럼 굳어간다. 에이라가 마지막 진실의 전조를 본다.',
		rising: '흐릿한 환영을 본 브란, 뻗는 손 곁을 지킨 인카, 흩어지는 속삭임을 기록하는 에이라. 모든 기다림이 이 자리로 모인다.',
		climax_finale: '"안야는 여기 있어요… 추워요…" 제 죽음을 마주한 아이의 영원한 작별 — 시리즈 피날레.'
	}
};
