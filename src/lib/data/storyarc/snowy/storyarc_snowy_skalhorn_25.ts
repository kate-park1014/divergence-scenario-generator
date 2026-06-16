import type { StoryArc } from '$lib/types';

// SkalHorn 시리즈 3편 (level 25) — 이성을 좀먹는 한기
export const storyarc_snowy_skalhorn_25: StoryArc = {
	id: 'snowy_skalhorn_25',
	level: 25,
	chapter_name: {
		korean: '얼어붙는 정신',
		english: 'The Freezing Mind',
		japanese: '凍りつく精神',
		chinese: '冻结的心智',
		french: 'L Esprit qui Gèle',
		spanish: 'La Mente que se Congela',
		vietnamese: 'Tâm Trí Đóng Băng',
		thai: 'จิตใจที่กลายเป็นน้ำแข็ง',
		hindi: 'जमता हुआ मन'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'뿔잔에서 뻗어 나온 한기가 눈밭 전체를 장악했다. 공기는 칼날처럼 차갑고, 그 차가움은 살갗을 넘어 정신까지 파고든다. 오래 머문 자는 점점 멍해지며 노래에 몸을 맡기게 된다.',
		rule: '이 한기 속에서 잡념과 두려움은 천천히 얼어붙어 사라진다. 그것이 평온처럼 느껴지지만, 사실은 의지가 마비되는 과정이다.',
		secret:
			'한기는 단순한 추위가 아니라 이성을 좀먹는 권능이다. 잔은 사람의 의지를 얼려 노래에 순응시키고, 끝내 자신의 합창단에 끌어들이려 한다.'
	},

	protagonist_goal: '정신을 얼리는 뿔잔의 한기에 맞서, 그 권능의 정체를 파헤쳐라.',

	act_tone: {
		intro: {
			mood: '나른한 마비',
			tension: 1,
			narrative_role: '한기가 정신을 어루만진다. 두려움도 잡념도 가라앉으며, 거짓된 평온이 찾아온다.'
		},
		rising: {
			mood: '흐려지는 의지',
			tension: 3,
			narrative_role:
				'동행단의 판단이 둔해지고, 발걸음이 자꾸 뿔잔 쪽으로 향한다. 멍하니 노래를 흥얼거리는 시간이 길어진다.'
		},
		climax_finale: {
			mood: '얼어붙기 직전',
			tension: 5,
			narrative_role:
				'한기가 정점에 이르러, 동행단 중 하나가 거의 잔에 손을 뻗는다. 그 평온이 사실은 의지가 얼어붙는 마비였음이 드러난다.'
		}
	},

	final_boss: {
		id: 'MadFeast_SkalHorn_V1',
		name: 'SkalHorn',
		appearance:
			'A colossal ceremonial drinking horn radiating a creeping field of frost across an entire snowfield, the air around it crystallizing into drifting ice motes. Pale blue tendrils of cold seep outward, frost climbing over everything they touch. Faint distorted faces flicker within the glowing rim. Cold numbing snowy lighting, oppressive and hypnotic high-fantasy aesthetic.',
		surface_identity:
			'주위에 거룩한 한기를 퍼뜨리는 거대한 뿔잔. 그 차가움은 마치 성스러운 정화처럼 잡념과 두려움을 가라앉히는 듯하다.',
		true_identity:
			'잔이 뿜는 한기는 정화가 아니라 이성을 좀먹는 권능이다. 의지를 얼려 노래에 순응시키고, 다가온 자를 천천히 자신의 합창단으로 끌어들인다.',
		motivation:
			'뿔잔은 거부하거나 두려워하는 마음을 얼려 없애려 한다. 모두가 평온히 노래에 몸을 맡기기를 — 그것을 진정한 축복이라 믿는 듯하다.',
		twist:
			'한기가 정점에 이르자 동행단 중 하나가 멍하니 잔을 향해 손을 뻗는다. 그 평온이 사실은 의지가 얼어붙는 마비였음이 드러나고, 잔 안의 푸른 광채가 만족한 듯 일렁인다. 거룩한 정화로 위장한 한기의 진짜 정체 — 정신을 잠식하는 권능이 처음으로 또렷이 모습을 드러낸다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '한기 속에 머물수록 두려움과 잡념이 거짓말처럼 가라앉는다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 평온은 마음이 정화된 것이 아니라 의지가 얼어붙기 시작한 것이었다.'
		},
		{
			id: 'fs_02',
			hint: '동행단의 발걸음이 자꾸 저도 모르게 뿔잔 쪽으로 향한다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '한기가 의지를 마비시켜, 잔이 부르는 대로 몸을 움직이게 하고 있었다.'
		},
		{
			id: 'fs_03',
			hint: '멍하니 노래를 흥얼거리는 시간이 점점 길어진다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '흥얼거림이 길어질수록 그 사람은 합창단에 한 발씩 가까워지고 있었다.'
		},
		{
			id: 'fs_04',
			hint: '얼어붙은 숨결마다 잔 안의 푸른 광채가 흡족한 듯 일렁인다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '잔은 얼어가는 의지를 양분 삼아 더욱 또렷이 깨어나고 있었다.'
		}
	],

	npc_roles: {
		eira: {
			role: '한기를 기록하는 자',
			arc: '3편: 정신을 마비시키는 한기의 양상을 침착히 관찰하고, 그것이 단순한 추위가 아님을 기록한다.'
		},
		ivar: {
			role: '의지로 맞서는 전사',
			arc: '3편: 흐려지는 정신을 강한 자존심으로 버텨내며, 한기에 굴복하지 않으려 이를 악문다.'
		},
		boris: {
			role: '마비를 깨우는 회의주의자',
			arc: '3편: 거짓 평온을 의심하며, 잔에 손을 뻗는 동료를 흔들어 깨우고 한기의 정체를 폭로한다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '거짓된 평온',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'한기가 눈밭을 장악한다. 에이라가 그 차가움이 잡념과 두려움을 가라앉히는 기이한 평온을 가져옴을 첫 단서로 기록한다. 그러나 그 평온이 마음에 걸린다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '이를 악물고',
			boss: 'random_boss',
			npc: 'ivar',
			summary:
				'이바르가 흐려지는 정신과 싸운다. 발걸음이 자꾸 잔 쪽으로 향하는 것을 자존심으로 버틴다. "강함의 끝이 이런 마비라면, 나는 끝까지 깨어 있겠다."'
		},
		{
			order: 3,
			act: 'rising',
			title: '이 평온이 수상하다',
			boss: 'random_boss',
			npc: 'boris',
			summary:
				'보리스가 거짓 평온을 의심한다. "두려움이 사라지는 게 좋은 거라고? 천만에. 이건 정신을 얼리는 거야." 멍해진 동료를 흔들어 정신 들게 한다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '단순한 추위가 아니다',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 한기의 양상을 분석한다. 살갗이 아니라 정신을 파고드는 차가움. 이것은 자연의 추위가 아니라 의지를 좀먹는 권능이다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '얼어붙는 의지',
			boss: 'pool_110',
			npc: 'boris',
			summary:
				'한기가 정점에 이르고, 동행단 중 하나가 멍하니 잔에 손을 뻗는다. 보리스가 그를 깨워내며 한기의 정체 — 정신을 잠식하는 권능을 폭로한다. 그 순간 잔의 광채가 일렁이고 결전이 벌어진다.'
		}
	],

	act_summary: {
		intro: '한기가 눈밭을 장악하고 거짓된 평온이 찾아온다. 에이라가 그 차가움을 기록한다.',
		rising: '의지로 버티는 이바르, 평온을 의심하는 보리스, 권능임을 간파하는 에이라. 추위가 정신을 좀먹고 있다.',
		climax_finale: '동료가 잔에 손을 뻗는 순간, 한기가 의지를 마비시키는 권능이었음이 드러나며 결전이 벌어진다.'
	}
};
