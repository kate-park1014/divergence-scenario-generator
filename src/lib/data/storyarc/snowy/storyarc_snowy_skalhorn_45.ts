import type { StoryArc } from '$lib/types';

// SkalHorn 시리즈 5편 (level 45) — 룬에 새겨진 금기의 계약
export const storyarc_snowy_skalhorn_45: StoryArc = {
	id: 'snowy_skalhorn_45',
	level: 45,
	chapter_name: {
		korean: '금기의 계약',
		english: 'The Forbidden Pact',
		japanese: '禁忌の契約',
		chinese: '禁忌的契约',
		french: 'Le Pacte Interdit',
		spanish: 'El Pacto Prohibido',
		vietnamese: 'Khế Ước Cấm Kỵ',
		thai: 'พันธสัญญาต้องห้าม',
		hindi: 'निषिद्ध अनुबंध'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'뿔잔 표면의 의식 문양이 또렷이 빛나기 시작한다. 그 문양은 신을 향한 기도가 아니라, 빙설 정령과 맺은 계약의 조항을 새긴 것이었다. 잔 둘레로 옛 주술의 흔적이 떠오른다.',
		rule: '계약의 문양을 해독한 자는 그 약속이 이루어지는 광경을 환영으로 본다. 한 주술사가 정령 앞에 무릎 꿇고 무언가를 바치고 있다.',
		secret:
			'뿔잔의 시작은 혹독한 겨울로부터 부족을 구하려던 한 주술사였다. 그는 빙설 정령과 금기의 계약을 맺었고, 그 대가로 자신과 마을 전부를 잔에 바치게 된다.'
	},

	protagonist_goal: '뿔잔에 새겨진 의식의 정체 — 빙설 정령과 맺은 금기의 계약을 해독하라.',

	act_tone: {
		intro: {
			mood: '드러나는 의식',
			tension: 1,
			narrative_role: '거룩한 기도처럼 보이던 문양이 또렷해지며, 그것이 누군가와 맺은 약속의 기록임을 드러낸다.'
		},
		rising: {
			mood: '대가의 윤곽',
			tension: 3,
			narrative_role:
				'계약의 조항이 한 줄씩 해독된다. 한 주술사가 정령에게 무언가를 바치는 광경이 환영으로 떠오르고, 그 대가의 무게가 점점 무거워진다.'
		},
		climax_finale: {
			mood: '금기의 정체',
			tension: 5,
			narrative_role:
				'마지막 조항이 읽힌다 — 주술사는 부족을 구하려 자신과 마을 전부를 잔에 바쳤다. 거룩한 의식이 금기의 계약이었음이 드러난다.'
		}
	},

	final_boss: {
		id: 'MadFeast_SkalHorn_V1',
		name: 'SkalHorn',
		appearance:
			'A colossal ceremonial drinking horn with its ritual runes now blazing in cold blue light, the carvings depicting a robed shaman kneeling before a towering frost spirit. Spectral images of an ancient bargain shimmer around the rim. Frozen offerings and bound figures appear etched into the surface. Solemn revelatory snowy lighting, ominous and tragic high-fantasy aesthetic.',
		surface_identity:
			'표면의 문양이 또렷이 빛나는 거대한 뿔잔. 그 의식은 여전히 잊힌 신께 바치는 거룩한 기도처럼 보인다.',
		true_identity:
			'문양은 신을 향한 기도가 아니라, 혹독한 겨울로부터 부족을 구하려던 광신적 주술사가 빙설 정령과 맺은 금기의 계약이었다. 그 대가로 그는 자신과 마을 전부를 잔에 바쳤다.',
		motivation:
			'뿔잔은 그 계약을 거룩한 희생이자 영광스러운 약속으로 여긴다. 부족을 영원한 겨울의 품에 들이는 것 — 그것이 주술사가 바란 구원이었다.',
		twist:
			'계약의 마지막 조항이 해독된다. 주술사는 부족을 혹독한 겨울로부터 구하려 빙설 정령 앞에 무릎 꿇었고, 그 대가로 자신과 마을 사람들 전부를 잔에 바쳤다. 거룩한 의식처럼 보이던 문양이 사실은 금기의 계약이었음이 드러나고, 환영 속 주술사의 얼굴이 광기로 일그러진다. 잔의 푸른 광채가 그 진실을 비추며 거세게 타오른다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '거룩한 기도처럼 보이던 문양이 사실은 누군가와의 약속을 새긴 것이다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 약속은 신을 향한 기도가 아니라 빙설 정령과 맺은 금기의 계약이었다.'
		},
		{
			id: 'fs_02',
			hint: '환영 속에서 한 주술사가 정령 앞에 무릎 꿇고 무언가를 바치고 있다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그가 바친 것은 제물이 아니라, 자기 자신과 마을 사람들 전부였다.'
		},
		{
			id: 'fs_03',
			hint: '계약의 조항마다 혹독한 겨울과 그것을 막으려는 절박함이 배어 있다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '주술사는 부족을 겨울로부터 구하려 했고, 그 절박함이 금기를 넘게 만들었다.'
		},
		{
			id: 'fs_04',
			hint: '환영 속 주술사의 표정이 갈수록 광기 어린 황홀로 물든다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '구원의 절박함은 어느새 영원한 겨울을 향한 광신으로 변질되어 있었다.'
		}
	],

	npc_roles: {
		eira: {
			role: '계약을 해독하는 자',
			arc: '5편: 뿔잔에 새겨진 계약의 조항을 한 줄씩 해독해, 금기의 약속과 바쳐진 대가를 밝혀낸다 — 기록자 역할의 정수.'
		},
		ivar: {
			role: '절박함을 헤아리는 전사',
			arc: '5편: 부족을 구하려던 주술사의 절박함을 헤아리면서도, 그 신념이 어디서 어긋났는지를 곱씹는다.'
		},
		boris: {
			role: '대가를 따지는 회의주의자',
			arc: '5편: 거룩한 희생이라는 포장을 의심하며, 계약이 치른 진짜 대가가 무엇인지 냉정히 캐묻는다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '기도가 아니었다',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'표면의 문양이 또렷이 빛난다. 에이라가 그것을 살피다 거룩한 기도가 아니라 누군가와 맺은 약속의 기록임을 첫 단서로 짚어낸다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '무릎 꿇은 주술사',
			boss: 'random_boss',
			npc: 'ivar',
			summary:
				'환영 속에서 한 주술사가 거대한 빙설 정령 앞에 무릎 꿇은 광경이 떠오른다. 이바르가 부족을 위한 그 절박함을 헤아리며 마음이 무거워진다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '대가가 뭐지',
			boss: 'random_boss',
			npc: 'boris',
			summary:
				'보리스가 거룩한 희생이라는 포장을 의심한다. "정령과 거래를 했다면, 대가가 있었을 거야. 그 대가가 뭐였지?" 계약의 조항을 냉정히 캐묻는다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '조항을 따라',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 계약의 조항을 한 줄씩 해독한다. 혹독한 겨울을 막는 대가로 바쳐야 할 것의 윤곽이 드러나기 시작한다. 그 무게가 점점 무거워진다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '바쳐진 마을',
			boss: 'pool_110',
			npc: 'eira',
			summary:
				'에이라가 마지막 조항을 읽어낸다 — 주술사는 부족을 구하려 자신과 마을 전부를 잔에 바쳤다. 거룩한 의식이 금기의 계약이었음이 드러나고, 환영 속 주술사의 얼굴이 광기로 일그러지며 결전이 벌어진다.'
		}
	],

	act_summary: {
		intro: '표면의 문양이 거룩한 기도가 아니라 누군가와의 약속임이 드러난다. 에이라가 해독을 시작한다.',
		rising: '절박함을 헤아리는 이바르, 대가를 캐묻는 보리스, 조항을 해독하는 에이라. 거룩한 의식 뒤에 무거운 거래가 있다.',
		climax_finale: '주술사가 부족을 구하려 자신과 마을 전부를 바쳤음이 드러나며, 금기의 계약이 모습을 드러낸다.'
	}
};
