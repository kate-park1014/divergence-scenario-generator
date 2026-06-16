import type { StoryArc } from '$lib/types';

// Cairn 시리즈 3편 (level 26) — 얼어붙는 약속
export const storyarc_snowy_cairn_26: StoryArc = {
	id: 'snowy_cairn_26',
	level: 26,
	chapter_name: {
		korean: '얼어붙는 약속',
		english: 'The Freezing Vow',
		japanese: '凍りつく誓い',
		chinese: '冻结的誓言',
		french: 'Le Serment qui Gèle',
		spanish: 'El Juramento que se Congela',
		vietnamese: 'Lời Thề Đóng Băng',
		thai: 'คำสาบานที่แข็งตัว',
		hindi: 'जमती हुई शपथ'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'돌무덤 둘레에 옛 탐험가들이 두고 간 물건들이 얼음에 박혀 있다. 깨진 검, 반으로 갈라진 신표, 손을 맞잡은 채 얼어붙은 두 사람의 형상. 모두 어떤 약속의 잔해처럼 보인다.',
		rule: '이 자리에서 맺어진 약속은 그 무게만큼의 대가를 요구한다. 가벼운 다짐은 얼어붙고, 진실한 맹세만이 온전히 남는다.',
		secret:
			'얼음에 박힌 잔해들은 모두 이곳에서 맺어졌다 깨어진 약속의 결과다. 약속을 어긴 자들의 마지막 모습이, 그대로 얼어붙어 보존되어 있다.'
	},

	protagonist_goal: '돌무덤 둘레에 얼어붙은 약속의 잔해들을 살피고, 그 시험의 의미를 가늠하라.',

	act_tone: {
		intro: {
			mood: '잔해의 서늘함',
			tension: 2,
			narrative_role: '얼음에 박힌 깨진 검과 갈라진 신표. 누군가의 약속이 여기서 무너졌음을 보여준다.'
		},
		rising: {
			mood: '얼어붙는 다짐',
			tension: 4,
			narrative_role:
				'탐험대가 무심코 건넨 다짐 한마디가 입김째로 얼어붙는다. 약속의 무게가 곧 대가임을 몸으로 느끼기 시작한다.'
		},
		climax_finale: {
			mood: '시험대 위에서',
			tension: 6,
			narrative_role:
				'동행단이 서로에게 다짐을 건네야 하는 순간, 돌무덤의 푸른빛이 그 말의 무게를 저울질하듯 일렁인다. 이곳이 신의를 시험하는 자리임이 분명해진다.'
		}
	},

	final_boss: {
		id: 'FrozenVow_Cairn_V1',
		name: 'Cairn',
		appearance:
			'The stone cairn surrounded by relics frozen in ice, a shattered sword, a token split in two, two figures locked hand in hand and frozen mid-gesture. Cold blue runes pulse along the stones as if weighing every word spoken nearby. Frost spreads across the ground in delicate cracks. Cinematic frozen snowy lighting, solemn ominous high-fantasy aesthetic.',
		surface_identity:
			'옛 탐험가들의 깨진 검과 갈라진 신표를 둘레에 거느린 돌무덤. 얼어붙은 잔해들이 어떤 약속의 끝을 말해준다.',
		true_identity:
			'곁을 지나는 자들의 약속과 신의를 시험하는 존재. 얼음에 박힌 잔해는 모두 이곳에서 약속을 어긴 자들의 마지막 모습이다.',
		motivation:
			'약속의 무게를 저울질한다. 가벼운 다짐은 얼려 버리고, 진실한 맹세인지 거듭 시험하며 신의 없는 자를 가려내려 한다.',
		twist:
			'동행단이 서로에게 다짐을 건네야 하는 순간, 돌무덤의 푸른빛이 그 말의 무게를 저울질하듯 천천히 일렁인다. 무심코 던진 가벼운 다짐 한마디가 허공에서 얼어붙어 바닥에 떨어진다. 이곳이 신의를 시험하는 자리임을, 그리고 시험에 든 것은 다름 아닌 자신들임을 깨닫는다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '얼음 속에 두 사람이 손을 맞잡은 채 얼어붙어 있다. 한쪽 손이 뒤에 칼을 숨기고 있다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그들은 맹세를 나누는 척하며 서로를 배신하려 한 자들이었다. 그 순간 그대로 얼어붙었다.'
		},
		{
			id: 'fs_02',
			hint: '탐험대가 가볍게 건넨 다짐 한마디가, 입김과 함께 허공에서 얼어붙는다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '얼어붙는 것은 무게 없는 약속이었다. 진실하지 않은 말은 이곳에서 형체를 얻고 굳어버린다.'
		},
		{
			id: 'fs_03',
			hint: '깨진 검과 갈라진 신표가 모두 정확히 둘로 나뉘어 있다. 마치 누군가 약속을 깨뜨린 흔적처럼.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '둘로 갈라진 신표는 깨어진 맹세의 표식이었다. 약속을 어긴 대가가 그 형태로 남았다.'
		},
		{
			id: 'fs_04',
			hint: '돌무덤의 푸른빛이, 진실한 말 앞에서는 잔잔하고 거짓된 말 앞에서는 날카롭게 일렁인다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 빛은 말의 진실함을 가늠하는 저울이었다. 돌무덤은 신의를 시험하고 있었다.'
		}
	],

	npc_roles: {
		eira: {
			role: '잔해를 해독하는 자',
			arc: '3편: 얼어붙은 잔해와 갈라진 신표를 살펴, 이것들이 깨어진 약속의 흔적임을 읽어낸다.'
		},
		ivar: {
			role: '시험에 발끈하는 자',
			arc: '3편: 자신의 다짐이 얼어붙어 떨어지자 자존심이 상해 발끈하지만, 전사의 명예가 시험당함을 느낀다.'
		},
		anuk: {
			role: '대가를 가늠하는 자',
			arc: '3편: 약속의 무게가 곧 대가임을 가장 먼저 이해하고, 함부로 맹세하지 말 것을 냉철히 짚는다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '얼어붙은 잔해',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 돌무덤 둘레에서 얼음에 박힌 깨진 검과 갈라진 신표, 손을 맞잡은 채 얼어붙은 두 사람을 발견한다. 에이라가 이것들이 깨어진 약속의 흔적임을 읽기 시작한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '얼어붙은 다짐',
			boss: 'random_boss',
			npc: 'ivar',
			summary:
				'이바르가 가볍게 다짐 한마디를 던지자, 그 말이 입김째로 얼어붙어 바닥에 떨어진다. 자존심이 상한 그가 발끈하지만, 전사의 명예가 시험당하고 있음을 느낀다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '약속의 무게',
			boss: 'random_boss',
			npc: 'anuk',
			summary:
				'아누크가 약속의 무게가 곧 대가임을 짚는다. "지키지 못할 말은 여기서 얼어붙어. 함부로 맹세하지 마." 갈라진 신표를 들어 깨어진 약속의 의미를 가늠한다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '저울질하는 빛',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 돌무덤의 푸른빛이 진실한 말 앞에서는 잔잔하고 거짓된 말 앞에서는 날카롭게 일렁임을 기록한다. 그 빛은 말의 진실함을 가늠하는 저울이었다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '시험에 든 자들',
			boss: 'pool_111',
			npc: 'anuk',
			summary:
				'동행단이 서로에게 다짐을 건네야 하는 순간, 돌무덤의 푸른빛이 그 무게를 저울질하듯 일렁이고 가벼운 말은 얼어붙는다. 대가를 가늠해온 아누크가 확신한다 — 이곳은 신의를 시험하는 자리이며, 시험에 든 것은 우리 자신이다.'
		}
	],

	act_summary: {
		intro: '돌무덤 둘레에 얼어붙은 약속의 잔해들. 에이라가 깨어진 약속의 흔적을 읽어낸다.',
		rising: '다짐이 얼어붙어 발끈하는 이바르, 약속의 무게를 짚는 아누크, 저울질하는 빛을 기록하는 에이라. 약속의 무게가 곧 대가임이 드러난다.',
		climax_finale: '다짐을 건네는 순간 빛이 말의 무게를 저울질한다. 이곳이 신의를 시험하는 자리이며, 시험에 든 것은 자신들임을 깨닫는다.'
	}
};
