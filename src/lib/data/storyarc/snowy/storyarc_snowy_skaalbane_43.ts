import type { StoryArc } from '$lib/types';

// Skaalbane 시리즈 5편 (level 43) — 기생하는 이름
export const storyarc_snowy_skaalbane_43: StoryArc = {
	id: 'snowy_skaalbane_43',
	level: 43,
	chapter_name: {
		korean: '스칼베인이라 불린 것',
		english: 'The Thing Named Skaalbane',
		japanese: 'スカールベインと呼ばれしもの',
		chinese: '被称作斯卡尔贝恩之物',
		french: 'La Chose Nommée Skaalbane',
		spanish: 'La Cosa Llamada Skaalbane',
		vietnamese: 'Thứ Được Gọi Là Skaalbane',
		thai: 'สิ่งที่ถูกเรียกว่าสกาลเบน',
		hindi: 'स्काल्बेन नामक वस्तु'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'빙실을 지나, 잔해탑의 가장 오래된 층. 가장 처음 난파된 배의 잔해가 다른 모든 것의 토대를 이루고 있다. 그 가장 깊은 룬 비석에 한 단어가 거듭 새겨져 있다 — Skaalbane.',
		rule: '이 층의 비석을 읽은 자는 탑의 진짜 이름을 알게 된다. 그러나 그 이름을 입에 올리는 순간, 무언가가 부름을 받은 듯 더 또렷이 응답한다.',
		secret:
			'Skaalbane는 영웅도, 배도, 무덤도 아니다. 그것은 혹독한 추위에 갇힌 바이킹들의 절규와 죽어가는 의식을 먹이 삼아 자란 기생 정신체다. 탑은 그것의 몸이고, 시신들은 그것의 일부다.'
	},

	protagonist_goal: '잔해탑 가장 깊은 층의 비석을 해독해, 거듭 새겨진 이름 Skaalbane의 정체를 밝혀라.',

	act_tone: {
		intro: {
			mood: '태고의 기록',
			tension: 2,
			narrative_role: '가장 처음 난파된 배가 모든 것의 토대를 이룬 가장 오래된 층. 비석에 한 단어가 거듭 새겨져 있다.'
		},
		rising: {
			mood: '드러나는 본질',
			tension: 4,
			narrative_role:
				'비석의 룬이 해독될수록, Skaalbane가 영웅이 아니라 절규를 먹고 자란 무언가임이 드러난다. 이름을 부를수록 탑이 응답한다.'
		},
		climax_finale: {
			mood: '응답하는 이름',
			tension: 5,
			narrative_role:
				'에이라가 마침내 그 이름을 소리 내어 읽자, 탑 전체가 응답하듯 진동한다. Skaalbane — 죽은 자가 아니라, 죽음을 먹고 사는 것의 이름이었다.'
		}
	},

	final_boss: {
		id: 'EchoHarvester_Skaalbane_V1',
		name: 'Skaalbane',
		appearance:
			'The oldest layer of the wreck-tower, where the first shipwreck forms the foundation of all the rest, encased in ancient blue ice. A deep rune-carved stone repeats a single word again and again across its surface. Faint blue light threads through the carvings as if the name itself were alive. Cinematic ancient solemn blue lighting, revelatory high-fantasy aesthetic.',
		surface_identity:
			'비석에 거듭 새겨진 이름 Skaalbane. 처음엔 이곳에 잠든 위대한 영웅의 이름이라 여겨진다.',
		true_identity:
			'Skaalbane는 영웅의 이름이 아니다. 혹독한 추위에 갇힌 바이킹들의 절규와 죽어가는 의식을 먹이 삼아 자란 기생 정신체. 수천 년간 난파선과 얼어붙은 시신을 흡수하며 자라온 차가운 공포다.',
		motivation:
			'Skaalbane는 죽음과 절규를 양분으로 존재를 키워왔다. 이제 그 양분이 메말라가자, 살아있는 자들의 따뜻한 생명력을 새로운 먹이로 갈구한다.',
		twist:
			'에이라가 비석의 이름을 소리 내어 읽는다 — Skaalbane. 그 순간 탑 전체가 부름을 받은 듯 진동한다. "…그래… 그게 내 이름이다… 너희가 불러주니… 더 또렷해지는구나…" 죽은 영웅이 아니라, 죽음을 먹고 자란 정신체가 처음으로 또렷이 응답한다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '가장 오래된 층의 비석에 Skaalbane라는 한 단어가 수백 번 거듭 새겨져 있다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '거듭 새겨진 이름은 영웅을 기리는 것이 아니라, 그 정신체가 제 이름을 각인시키며 자라온 흔적이었다.'
		},
		{
			id: 'fs_02',
			hint: '비석의 룬은 여러 시대, 여러 사람의 필체가 겹쳐져 있다. 한 명이 새긴 것이 아니다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '수천 년에 걸쳐 흡수된 자들이 차례로 그 이름을 새겼다 — Skaalbane는 흡수한 자들의 손을 빌려 자라왔다.'
		},
		{
			id: 'fs_03',
			hint: '이름을 입에 올릴 때마다 탑이 미세하게 응답하듯 진동한다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '이름은 단순한 글자가 아니라, 그 존재를 또렷하게 불러내는 주문이었다.'
		},
		{
			id: 'fs_04',
			hint: '가장 깊은 비석에 영웅의 무덤이 아니라 무언가가 잠에서 자라났다는 구절이 새겨져 있다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '잠에서 자라난 무언가가 곧 Skaalbane였다 — 죽은 자가 아니라, 죽음을 먹고 사는 기생체였다.'
		}
	],

	npc_roles: {
		eira: {
			role: '이름을 밝히는 자',
			arc: '5편: 가장 오래된 비석을 해독해 Skaalbane가 영웅이 아니라 절규를 먹고 자란 정신체임을 밝힌다 — 기록자 역할의 정수.'
		},
		frost: {
			role: '응답을 경계하는 자',
			arc: '5편: 이름을 부를 때마다 한기가 짙어지는 것을 감지하고, 그 이름이 위협을 불러낸다는 사실에 경계를 곤두세운다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '가장 오래된 층',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 가장 처음 난파된 배가 토대를 이룬 가장 오래된 층에 다다른다. 에이라가 깊은 룬 비석에서 거듭 새겨진 한 단어 — Skaalbane를 발견하고 해독을 시작한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '겹쳐진 필체',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 비석의 룬이 여러 시대, 여러 사람의 필체가 겹쳐진 것임을 알아챈다. 한 명이 새긴 것이 아니다. "수많은 손이… 같은 이름을 새겼어. 시대를 넘어서."'
		},
		{
			order: 3,
			act: 'rising',
			title: '이름이 부르는 한기',
			boss: 'random_boss',
			npc: 'frost',
			summary:
				'프로스트가 이름을 입에 올릴 때마다 한기가 짙어지는 것을 감지한다. "그 이름을 말할 때마다… 추위가 우리한테 더 가까워져. 부르지 마. 부를수록 또렷해져."'
		},
		{
			order: 4,
			act: 'rising',
			title: '잠에서 자라난 것',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 가장 깊은 비석의 구절을 해독한다 — 이곳은 영웅의 무덤이 아니라, 잠에서 무언가가 자라난 자리다. "Skaalbane는… 죽은 자가 아니야. 죽음을 먹고 자란 거야."'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '그게 내 이름이다',
			boss: 'pool_108',
			npc: 'frost',
			summary:
				'에이라가 마침내 이름을 소리 내어 읽자 탑 전체가 응답하듯 진동한다. "…그게 내 이름이다… 불러주니 더 또렷해지는구나…" 죽음을 먹고 자란 정신체가 처음으로 또렷이 응답한다. 이름이 위협을 부른다 경계해온 프로스트가 앞장서 전투를 맞는다.'
		}
	],

	act_summary: {
		intro: '가장 오래된 층의 비석에 거듭 새겨진 이름 Skaalbane. 에이라가 해독을 시작한다.',
		rising: '겹쳐진 필체를 읽는 에이라, 이름이 부르는 한기를 경계하는 프로스트. Skaalbane가 영웅이 아니라 죽음을 먹고 자란 것임이 드러난다.',
		climax_finale: '이름을 소리 내어 읽자 탑이 응답하고, 기생 정신체 Skaalbane가 처음으로 또렷이 자신을 드러낸다.'
	}
};
