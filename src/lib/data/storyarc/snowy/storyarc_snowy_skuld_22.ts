import type { StoryArc } from '$lib/types';

// Skuld 시리즈 3편 (level 22) — 처음 읽히는 룬 조각
export const storyarc_snowy_skuld_22: StoryArc = {
	id: 'snowy_skuld_22',
	level: 22,
	chapter_name: {
		korean: '흩어진 룬의 조각',
		english: 'Scattered Fragments of Runes',
		japanese: '散らばったルーンの欠片',
		chinese: '散落的符文碎片',
		french: 'Fragments Épars de Runes',
		spanish: 'Fragmentos Dispersos de Runas',
		vietnamese: 'Những Mảnh Rune Rải Rác',
		thai: 'เศษอักษรรูนที่กระจัดกระจาย',
		hindi: 'रूनों के बिखरे टुकड़े'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'빙하의 측면에 거대한 균열이 나 있다. 그 갈라진 틈을 따라 선체의 룬 문자가 끊긴 채 드러난다. 탐험대는 흩어진 룬 조각들을 모아 그 의미를 더듬기 시작한다.',
		rule: '룬을 읽으려는 자에게 빙하는 더욱 격렬히 저항한다. 그러나 동시에, 읽힌 룬 한 조각마다 빙하의 한기가 잠시 흔들린다.',
		secret:
			'룬에는 이름 하나가 거듭 새겨져 있다 — "스쿌드". 그것은 정령의 이름이 아니라, 한때 바다를 호령하던 어떤 배의 이름이다.'
	},

	protagonist_goal: '빙하의 균열을 따라 드러난 선체의 룬 조각을 해독하라.',

	act_tone: {
		intro: {
			mood: '조심스러운 해독',
			tension: 1,
			narrative_role: '빙하의 균열을 따라 끊긴 룬 문자가 드러난다. 에이라가 조심스레 첫 글자를 더듬는다.'
		},
		rising: {
			mood: '드러나는 이름',
			tension: 3,
			narrative_role:
				'흩어진 룬 조각을 맞추자 한 단어가 떠오른다 — "스쿌드". 그것이 정령의 이름인지, 다른 무언가인지 아직은 분명치 않다.'
		},
		climax_finale: {
			mood: '이름이 불린 순간',
			tension: 5,
			narrative_role:
				'탐험대가 "스쿌드"라는 이름을 입에 올리자, 빙하 전체가 격렬히 진동한다. 한기 속에서 처음으로 명료한 목소리가 울린다 — "…그 이름을, 어찌 아느냐."'
		}
	},

	final_boss: {
		id: 'GlacialOath_Skuld_V1',
		name: 'Skuld',
		appearance:
			'A vast glacial spirit cracked along its flank, ancient broken runes glowing faintly along the fissure, the buried longship hull more clearly visible within the blue ice. A single repeated rune-name shimmers across the cracked surface. Pale mist rises from the deepening fractures. Cinematic somber snowy lighting, mysterious and mournful high-fantasy aesthetic.',
		surface_identity:
			'냉혹한 빙하 정령으로 보이지만, 이제 그 표면의 룬이 한 이름을 거듭 가리킨다 — "스쿌드".',
		true_identity:
			'"스쿌드"는 정령의 이름이 아니라, 한때 북해를 호령하던 어떤 배의 이름이다. 빙하 정령은 그 배 자체이거나, 그 배와 하나가 된 존재다.',
		motivation:
			'자신의 이름을 아는 자를 경계하면서도 동요한다. 수천 년간 아무도 부르지 않던 이름이 입에 오르는 순간, 냉혹함이 흔들린다.',
		twist:
			'탐험대가 룬을 맞춰 "스쿌드"라는 이름을 부른다. 빙하 전체가 격렬히 진동하며, 한기 속에서 처음으로 명료한 목소리가 울린다. "…그 이름을, 어찌 아느냐." 그것은 분노가 아니라, 잊힌 이름이 불린 자의 깊은 떨림이었다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '빙하의 균열을 따라 끊긴 룬 문자가 드러난다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 끊긴 룬들은 좌초의 충격으로 부서진 한 기록의 잔해였다.'
		},
		{
			id: 'fs_02',
			hint: '흩어진 룬 조각마다 같은 단어가 반복된다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '반복되는 그 단어는 "스쿌드" — 이 존재의 본래 이름이었다.'
		},
		{
			id: 'fs_03',
			hint: '룬 한 조각이 읽힐 때마다 빙하의 한기가 잠시 흔들린다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '한기가 흔들린 이유 — 잊혔던 기억이 룬과 함께 깨어나고 있었기 때문이다.'
		},
		{
			id: 'fs_04',
			hint: '룬 사이에 "선단"과 "심장"을 뜻하는 옛 문자가 섞여 있다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 문자들은 "피오르드의 심장"이라는 어떤 선단의 이름을 가리키고 있었다.'
		}
	],

	npc_roles: {
		eira: {
			role: '이름을 읽는 자',
			arc: '3편: 흩어진 룬 조각을 맞춰 "스쿌드"라는 이름을 처음으로 읽어낸다 — 기록자 역할의 핵심.'
		},
		ivar: {
			role: '조각을 모으는 전사',
			arc: '3편: 균열 속 위험한 룬 조각들을 직접 회수하며, 빙하의 저항을 몸으로 막아낸다.'
		},
		hild: {
			role: '이름을 부르는 자',
			arc: '3편: 읽어낸 이름을 처음으로 소리 내어 부른다. 망자의 이름을 부르는 그녀의 의례가 빙하를 흔든다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '균열을 따라서',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 빙하 측면의 거대한 균열을 발견한다. 에이라가 그 틈을 따라 끊긴 채 드러난 룬 문자를 조심스레 더듬기 시작한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '위험한 회수',
			boss: 'random_boss',
			npc: 'ivar',
			summary:
				'이바르가 균열 속 위험한 룬 조각들을 직접 회수한다. 빙하의 거센 한기를 몸으로 막아내며 동료들이 해독할 조각을 모은다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '반복되는 단어',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 흩어진 조각을 맞추자 한 단어가 거듭 떠오른다. "스쿌드… 같은 이름이 계속 반복돼. 이건 정령이 아니라… 어떤 배의 이름이야."'
		},
		{
			order: 4,
			act: 'rising',
			title: '피오르드의 심장',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'룬 사이에 "선단"과 "심장"을 뜻하는 옛 문자가 섞여 있다. 에이라가 그것이 "피오르드의 심장"이라는 선단을 가리킴을 기록한다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '그 이름을, 어찌 아느냐',
			boss: 'pool_107',
			npc: 'hild',
			summary:
				'힐드가 망자를 부르듯 "스쿌드"라는 이름을 소리 내어 부른다. 빙하 전체가 격렬히 진동하며 처음으로 명료한 목소리가 울린다. "그 이름을, 어찌 아느냐." 분노가 아닌, 잊힌 이름이 불린 자의 깊은 떨림이었다.'
		}
	],

	act_summary: {
		intro: '빙하 균열을 따라 끊긴 룬이 드러난다. 에이라가 첫 글자를 더듬기 시작한다.',
		rising: '조각을 회수하는 이바르, 이름을 읽어낸 에이라, "피오르드의 심장"이라는 선단의 단서까지. "스쿌드"는 배의 이름이다.',
		climax_finale: '"그 이름을, 어찌 아느냐." 힐드가 그 이름을 부르자, 잊힌 이름이 불린 자의 떨림이 빙하를 뒤흔든다.'
	}
};
