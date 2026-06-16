import type { StoryArc } from '$lib/types';

// SkalHorn 시리즈 7편 (level 65) — 금기의 계약
export const storyarc_snowy_skalhorn_65: StoryArc = {
	id: 'snowy_skalhorn_65',
	level: 65,
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
			'뿔잔이 박힌 고원 아래, 얼음에 봉인된 옛 제단의 흔적이 드러난 구역. 제단에는 한 주술사가 빙설 정령과 손을 맞잡은 형상이 새겨져 있다. 그 둘레로 계약의 문장이 얼어붙어 있다.',
		rule: '제단의 계약 문장을 읽은 자는 뿔잔이 어떻게 태어났는지 알게 된다. 그러나 그 계약은 부족을 구하려다 모든 것을 얼린 거래였다.',
		secret:
			'SkalHorn은 본디 의식용 뿔잔이 아니다. 혹독한 겨울로부터 부족을 구하려던 광신적 주술사가 빙설 정령과 맺은 금기의 계약으로 변질된 그릇이다.'
	},

	protagonist_goal: '얼음에 봉인된 제단을 해독해, 뿔잔이 어떤 계약으로 태어났는지 밝혀라.',

	act_tone: {
		intro: {
			mood: '봉인된 제단',
			tension: 1,
			narrative_role: '얼음 속 제단에 주술사와 빙설 정령이 손을 맞잡은 형상이 새겨져 있다.'
		},
		rising: {
			mood: '구원을 가장한 거래',
			tension: 3,
			narrative_role:
				'계약 문장이 해독될수록, 부족을 구하려던 기도가 금기의 거래로 변질되었음이 드러난다.'
		},
		climax_finale: {
			mood: '얼어붙은 대가',
			tension: 5,
			narrative_role:
				'탐험대가 계약의 전말을 읽어내자, 뿔잔이 낮게 웅얼거린다. "…나는 부족을 구하려 했다. 허나 정령은 구원이 아니라, 영원한 얼음을 주었지."'
		}
	},

	final_boss: {
		id: 'MadFeast_SkalHorn_V1',
		name: 'SkalHorn',
		appearance:
			'An ancient altar sealed in ice beneath the highland, carved with a shaman clasping hands with a frost spirit, a frozen contract inscribed around them. The buried horn-vessel glows faintly above, its blue light flickering over the bargain that birthed it. Cinematic solemn frozen blue lighting, ominous high-fantasy aesthetic.',
		surface_identity:
			'고귀한 의식용 뿔잔처럼 보이는 존재. 그러나 그 아래 제단은 그것이 어떻게 태어났는지를 증언한다.',
		true_identity:
			'SkalHorn은 의식용 뿔잔이 아니다. 혹독한 겨울로부터 부족을 구하려던 광신적 주술사가 빙설 정령과 맺은 금기의 계약으로 변질된 그릇이다.',
		motivation:
			'부족을 구하려던 기도가 정령의 권능에 뒤틀려, 모든 것을 얼리는 것으로 부족을 지키려 한다. 구원과 파멸의 경계가 그에겐 사라졌다.',
		twist:
			'탐험대가 계약의 전말을 읽어내자, 뿔잔이 낮게 웅얼거린다. "…나는 부족을 구하려 했다. 허나 정령은 구원이 아니라, 영원한 얼음을 주었지." 고귀한 유물이 아니라, 구원을 가장한 금기의 거래가 빚어낸 그릇이었다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '제단에 주술사와 정령이 손을 맞잡은 형상이 새겨져 있다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '맞잡은 손은 구원의 기도가 아니라 금기의 거래였다.'
		},
		{
			id: 'fs_02',
			hint: '계약 문장에 "부족을 구하라"는 기도와 "모든 것을 얼리라"는 응답이 나란히 새겨져 있다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '구원의 기도에 정령은 영원한 얼음으로 답했다 — 뒤틀린 응답이었다.'
		},
		{
			id: 'fs_03',
			hint: '제단 둘레에 부족 사람들의 작은 형상이 빼곡히 얼어 새겨져 있다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '얼어붙은 형상들은 그 계약으로 함께 얼려진 부족이었다.'
		},
		{
			id: 'fs_04',
			hint: '주술사의 형상만이 점점 뿔잔의 모양으로 일그러져 있다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '주술사 자신이 계약의 대가로 뿔잔이 되었다 — 그가 곧 SkalHorn이었다.'
		}
	],

	npc_roles: {
		eira: {
			role: '계약을 해독하는 자',
			arc: '7편: 제단의 계약 문장을 해독해, 뿔잔이 부족을 구하려던 금기의 거래에서 태어났음을 밝힌다.'
		},
		ivar: {
			role: '신념을 가늠하는 전사',
			arc: '7편: 부족을 위해 금기마저 넘은 주술사를 보며, 신념이 어디까지 정당한가를 가늠한다.'
		},
		boris: {
			role: '거룩함을 의심하는 자',
			arc: '7편: 고귀한 유물이라는 겉모습을 의심하고, 제단의 거래가 결코 거룩하지 않았음을 냉정히 짚는다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '얼음 속 제단',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 뿔잔 아래 봉인된 옛 제단의 흔적을 발견한다. 에이라가 주술사와 빙설 정령이 손을 맞잡은 형상과 계약의 문장을 해독하기 시작한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '뒤틀린 응답',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 계약 문장을 읽는다. "부족을 구하라"는 기도에 정령은 "모든 것을 얼리라"고 답했다. 구원의 기도가 뒤틀린 거래로 변했음이 드러난다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '거룩하지 않은 거래',
			boss: 'random_boss',
			npc: 'boris',
			summary:
				'보리스가 고귀한 유물이라는 겉모습을 의심한다. "거룩한 의식이라고? 천만에. 이건 그냥 절박한 거래였어. 그것도 아주 위험한." 제단의 거래를 냉정히 짚는다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '얼어붙은 부족',
			boss: 'random_boss',
			npc: 'ivar',
			summary:
				'이바르가 제단 둘레에 빼곡히 얼어 새겨진 부족 사람들의 형상을 본다. 구하려던 부족이 함께 얼려졌다. "구하려다… 다 같이 얼려버린 건가."'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '구원이 아니라 영원한 얼음',
			boss: 'pool_110',
			npc: 'boris',
			summary:
				'탐험대가 계약의 전말을 읽어내자 뿔잔이 낮게 웅얼거린다. "나는 부족을 구하려 했다. 허나 정령은 구원이 아니라, 영원한 얼음을 주었지." 고귀한 유물이 아니라 구원을 가장한 금기의 거래였음이 드러나며, 그 거짓을 의심해온 보리스와 함께 전투가 이어진다.'
		}
	],

	act_summary: {
		intro: '얼음 속 제단에 주술사와 빙설 정령이 손을 맞잡은 형상. 에이라가 계약을 해독한다.',
		rising: '뒤틀린 응답을 읽는 에이라, 거래를 의심하는 보리스, 얼어붙은 부족을 본 이바르. 뿔잔은 금기의 거래에서 태어났다.',
		climax_finale: '"정령은 구원이 아니라 영원한 얼음을 주었지." 고귀한 유물은 구원을 가장한 금기의 거래였다.'
	}
};
