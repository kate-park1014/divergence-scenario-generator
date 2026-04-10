export const storyarc_sample = {
	id: 'forest_seal',
	title: '봉인의 숲',
	theme: 'forest',
	rising_count: 3,

	world: {
		setting: '수백 년간 저주받은 숲. 숲 안의 생명들이 고통받고 있다. 탐험대는 저주를 풀러 왔다.',
		rule: '숲 중심에 거대한 봉인이 있다. 봉인을 풀면 저주가 해제된다고 전해진다.',
		secret:
			'봉인 안에 갇힌 건 저주가 아니라 고대의 재앙이다. 봉인을 지키던 수호자가 스스로 저주처럼 보이게 만들었다. 탐험대가 봉인을 풀면 진짜 재앙이 세상에 풀린다.'
	},

	protagonist_goal: '숲의 저주를 풀어라. 고통받는 생명들을 구해라.',

	act_tone: {
		intro: {
			mood: '연민과 사명감',
			tension: 1,
			narrative_role: '숲이 아프다. 생명들이 고통받는다. 탐험대, 저주를 풀기로 결심한다.'
		},
		rising: {
			mood: '의심과 균열',
			tension: 3,
			narrative_role: '봉인에 가까워질수록 뭔가 이상하다. 저주를 풀지 말라는 존재들이 나타난다.'
		},
		climax_finale: {
			mood: '후회와 선택',
			tension: 5,
			narrative_role:
				'봉인의 진실이 드러난다. 수호자는 재앙을 막으려 수백 년을 버텨왔다. 탐험대는 선택해야 한다.'
		}
	},

	final_boss: {
		id: 'mon_a3f8c2d1-4e7b-4a9f-b6c3-d2e1f0a8b5c4',
		name: '아르',
		appearance:
			'Ancient humanoid silhouette wrapped in cracked bark, hollow glowing eyes dimmed with exhaustion, moss-covered shoulders, countless deep scars across the body — evidence of centuries of battle.',
		surface_identity: '봉인을 지키는 거대한 존재. 탐험대의 앞을 막아서는 최후의 적.',
		true_identity:
			'수백 년 전 재앙을 막기 위해 스스로 봉인 안에 갇힌 수호자. 오랜 시간에 지쳐 형체가 일그러졌다.',
		motivation: '재앙이 세상에 풀리는 걸 막으려 한다. 탐험대를 막아야 한다. 근데 너무 지쳤다.',
		twist:
			'"제발 그러지 마." 아르는 싸우면서도 계속 애원한다. 쓰러진 후 말한다 — "이제 막을 수가 없어. 미안해."'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '고통받는 동물들이 봉인 근처에는 가지 않는다 — 오히려 피한다',
			plant_act: 'intro',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 5,
			reveal_context: '봉인이 재앙을 막고 있다는 걸 동물들은 본능적으로 알고 있었다'
		},
		{
			id: 'fs_02',
			hint: '숲 곳곳에 "열지 마라"고 새겨진 고대 문자가 있다',
			plant_act: 'rising',
			plant_room: 3,
			reveal_act: 'climax_finale',
			reveal_room: 3,
			reveal_context: '수호자 아르가 수백 년 전 직접 새긴 경고였다'
		},
		{
			id: 'fs_03',
			hint: '저주를 풀면 행복해질 거라는 예언 — 출처를 아무도 모른다',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 7,
			reveal_context: '예언은 재앙이 봉인 안에서 퍼뜨린 거짓이었다'
		},
		{
			id: 'fs_04',
			hint: '아르는 싸우면서도 탐험대를 죽이지 않는다',
			plant_act: 'rising',
			plant_room: 12,
			reveal_act: 'climax_finale',
			reveal_room: 9,
			reveal_context: '막고 싶었지만 해치고 싶지는 않았다. 수호자였으니까.'
		}
	],

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '저주받은 숲',
			boss: 'pool_011',
			npc: 'selena',
			summary:
				'탐험대, 저주받은 숲에 들어선다. 고통받는 동물들, 시들어가는 나무들. 셀레나가 합류해 저주를 풀어야 한다고 말한다. 봉인을 향해 출발한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '경고',
			boss: 'pool_012',
			npc: 'lyra_meadowsong',
			summary:
				'요정 리라가 나타나 막아선다 — "봉인을 풀면 안 돼." 탐험대는 무시한다. 고통받는 생명들이 눈앞에 있는데 멈출 수 없다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '균열',
			boss: 'pool_013',
			npc: 'reina',
			summary:
				'봉인에 가까워질수록 이상한 일이 생긴다. 레이나가 말한다 — "저 봉인, 뭔가 안에서 밀어내고 있어." 근데 저주받은 생명들의 고통이 더 심해진다. 멈출 수 없다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '진실의 문턱',
			boss: 'pool_014',
			npc: 'elara',
			summary:
				'장로 엘라라가 마지막 경고를 한다 — "봉인 안에 있는 건 저주가 아니야. 열면 세상이 끝나." 탐험대는 흔들린다. 근데 고통받는 숲이 눈앞에 있다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '봉인의 수호자',
			boss: 'random_boss',
			npc: 'elara',
			summary:
				'봉인 앞. 아르가 막아선다. 싸우면서도 "제발 그러지 마"라고 애원한다. 진실이 밝혀진다 — 봉인 안은 재앙이었다. 아르는 수백 년을 버텨온 수호자. 탐험대가 이미 봉인을 약하게 만들었다. 아르가 쓰러지며 말한다 — "이제 막을 수가 없어. 미안해."'
		}
	],

	act_summary: {
		intro: '저주받은 숲. 고통받는 생명들. 탐험대, 저주를 풀러 간다.',
		rising: '경고를 무시하며 봉인에 다가간다. 뭔가 이상하다. 근데 멈출 수 없다.',
		climax_finale: '봉인의 진실. 아르는 적이 아니었다. 탐험대가 재앙을 풀었다.'
	}
};
