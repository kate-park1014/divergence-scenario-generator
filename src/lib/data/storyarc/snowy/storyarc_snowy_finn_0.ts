import type { StoryArc } from '$lib/types';

// Archduke Finn 시리즈 1편 (level 0) — 무서운 왕 행세와 카드보드 팻말
export const storyarc_snowy_finn_0: StoryArc = {
	id: 'snowy_finn_0',
	level: 0,
	chapter_name: {
		korean: 'SCARY BOSS 팻말',
		english: 'The SCARY BOSS Sign',
		japanese: 'SCARY BOSS の看板',
		chinese: 'SCARY BOSS 牌子',
		french: 'La Pancarte SCARY BOSS',
		spanish: 'El Cartel de SCARY BOSS',
		vietnamese: 'Tấm Biển SCARY BOSS',
		thai: 'ป้าย SCARY BOSS',
		hindi: 'SCARY BOSS का बोर्ड'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'설산 초입. 탐험대는 "설산의 진정한 왕이 침입자를 무자비한 얼음 처형에 처한다"는 소문을 듣고 올라왔다. 그러나 눈밭에 박힌 것은 삐뚤빼뚤한 글씨의 카드보드 팻말 — "SCARY BOSS"와 "BE AFRAID" — 그리고 그 뒤를 종종거리는 작은 펭귄들이다.',
		rule: '설산을 지나려는 자는 "진정한 왕"의 위엄 앞에 머리를 조아려야 한다고 전해진다. 적어도 왕은 그렇게 우긴다.',
		secret:
			'옥좌라는 것은 얼음 큐브를 위태롭게 쌓아 올린 더미이고, 그 위에 앉은 둥근 펭귄은 자기 몸보다 큰 왕관이 자꾸 한쪽 눈을 가리는 통에 위엄을 부리려다 자꾸 균형을 잃는다.'
	},

	protagonist_goal: '"무자비한 얼음 처형"을 예고하는 설산의 왕이 정말 그런 존재인지 그 정체를 확인하라.',

	act_tone: {
		intro: {
			mood: '우스꽝스러운 긴장',
			tension: 1,
			narrative_role: '눈밭에 박힌 카드보드 팻말과 작은 펭귄들이 보인다. 어딘가 무섭기보다 귀엽다.'
		},
		rising: {
			mood: '의아함과 호기심',
			tension: 2,
			narrative_role:
				'왕은 목청을 높여 얼음 처형을 예고하지만, 왕관은 자꾸 흘러내리고 옥좌는 흔들리며 협박은 자꾸 우스워진다.'
		},
		climax_finale: {
			mood: '코미디 속 첫 호통',
			tension: 4,
			narrative_role:
				'탐험대가 겁먹지 않자, 왕은 발을 동동 구르며 "감히 짐의 위엄을 무시하다니!" 하고 호통친다. 그 순간 네온 스키고글 너머로 살짝 떨리는 눈빛이 스친다.'
		}
	},

	final_boss: {
		id: 'ArchdukeFinnTheChilly',
		name: 'Archduke Finn',
		appearance:
			'A round plump penguin perched atop a wobbly throne of stacked ice cubes and frozen sardines, wrapped in a moth-eaten purple velvet cape held by a giant golden safety pin, wearing a crown far too large that keeps sliding over one eye. It sports bright neon ski goggles and a thick hand-knitted wool muffler, gripping a half-eaten frozen popsicle like a royal scepter. Around it, tiny penguin minions hold up crooked cardboard signs reading SCARY BOSS and BE AFRAID. Glittering snowy tundra background, soft cinematic 3D animation style, vibrant colors, warm and funny festive atmosphere.',
		surface_identity:
			'설산의 진정한 왕이라 자칭하는 둥근 지배자. 옥좌에 앉아 침입자에게 "무자비한 얼음 처형"을 예고하며 머리를 조아릴 것을 명한다.',
		true_identity:
			'아직은 그저 위엄을 부리는 우스꽝스러운 펭귄으로 보인다. 그러나 흘러내리는 왕관과 카드보드 팻말은, 이 "왕"이 무언가를 필사적으로 흉내 내고 있음을 어렴풋이 암시한다.',
		motivation:
			'침입자에게 자신의 위엄을 인정받고 싶어 한다. 겁먹지 않는 자는 곧 "짐의 권위를 무시하는 자"다.',
		twist:
			'"감히 짐 앞에서 떨지도 않다니!" Finn이 옥좌에서 발을 동동 구르자 얼음 큐브가 위태롭게 흔들린다. 너무 큰 왕관이 또 한쪽 눈을 덮고, 작은 펭귄들이 황급히 팻말을 고쳐 든다. 호통치는 그 목소리 끝에, 처음으로 아주 작은 떨림이 묻어난다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '왕의 옥좌 곁 작은 펭귄들이 "SCARY BOSS" 카드보드 팻말을 떨리는 날개로 받쳐 들고 있다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '무서운 왕이라는 인상은 손수 만든 카드보드 팻말로 떠받쳐진 연출이었다.'
		},
		{
			id: 'fs_02',
			hint: '왕관이 너무 커서 자꾸 한쪽 눈을 가리고, 그때마다 위엄 있는 호통이 어색하게 끊긴다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '맞지 않는 왕관은 그가 진짜 왕이 아님을, 그저 왕 노릇을 하고 있음을 보여준다.'
		},
		{
			id: 'fs_03',
			hint: '"무자비한 얼음 처형"을 예고하면서도, 그는 두꺼운 털목도리를 단단히 여민다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '추위를 호령하는 왕이 정작 누구보다 추위에 떨고 있었다.'
		},
		{
			id: 'fs_04',
			hint: '겁먹지 않는 탐험대를 보자, 네온 스키고글 너머 눈빛이 잠시 떨린다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '무시당하는 순간의 떨림은, 그가 두려운 것이 아니라 외로운 존재임을 알리는 첫 신호였다.'
		}
	],

	npc_roles: {
		eira: {
			role: '연출을 간파하는 기록자',
			arc: '1편: 카드보드 팻말과 흘러내리는 왕관을 침착히 살피며, "무서운 왕" 연출의 첫 단서를 기록한다.'
		},
		inka: {
			role: '먼저 가엾어하는 자',
			arc: '1편: 호통치는 왕보다 덜덜 떠는 작은 몸짓을 먼저 알아보고, 적의 없이 가만히 바라본다.'
		},
		frost: {
			role: '한기를 읽는 자',
			arc: '1편: 왕이 목도리를 단단히 여미는 모습에서 그가 추위에 약한 존재임을 직감한다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '카드보드 팻말 앞에서',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 설산 초입에 들어선다. 눈밭에 "SCARY BOSS"와 "BE AFRAID" 카드보드 팻말이 삐뚤빼뚤 박혀 있고, 작은 펭귄들이 그것을 받쳐 든다. 에이라가 이 어설픈 연출을 조용히 기록한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '머리를 조아려라',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'옥좌의 왕이 목청을 높인다. "감히 짐 앞에서! 무자비한 얼음 처형을 면하려거든 머리를 조아려라!" 그러나 너무 큰 왕관이 또 한쪽 눈을 덮어 호통이 어색하게 끊긴다. 에이라가 그 어긋남을 기록한다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '저 작은 떨림',
			boss: 'random_boss',
			npc: 'inka',
			summary:
				'인카가 호통 너머 덜덜 떠는 작은 몸짓을 먼저 알아본다. 무섭다기보다 어쩐지 가엾다. 적의 없이 가만히 왕을 바라본다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '목도리를 여미는 왕',
			boss: 'random_boss',
			npc: 'frost',
			summary:
				'프로스트가 추위를 호령하는 왕이 정작 두꺼운 털목도리를 단단히 여미는 모습을 본다. "…저 왕, 누구보다 추위를 타는데." 동병상련의 눈빛으로 그를 살핀다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '감히 짐을 무시하다니',
			boss: 'pool_033',
			npc: 'eira',
			summary:
				'탐험대가 겁먹지 않자 Finn이 옥좌에서 발을 동동 구른다. "감히 짐의 위엄을 무시하다니!" 얼음 큐브가 흔들리고 왕관이 또 눈을 덮는다. 네온 고글 너머 떨리는 눈빛을 에이라가 놓치지 않고 기록하며 첫 충돌이 벌어진다.'
		}
	],

	act_summary: {
		intro: '설산 초입, "SCARY BOSS" 카드보드 팻말과 작은 펭귄들. 무섭기보다 귀여운 위엄 앞에 동행단(에이라·인카·프로스트)이 마주 선다.',
		rising: '머리를 조아리라 호통치지만 왕관이 자꾸 눈을 덮는다. 떨림을 알아보는 인카, 목도리를 보는 프로스트, 어긋남을 기록하는 에이라.',
		climax_finale: '무시당한 왕이 발을 구르며 호통치고, 고글 너머 떨리는 눈빛이 처음으로 스친다.'
	}
};
