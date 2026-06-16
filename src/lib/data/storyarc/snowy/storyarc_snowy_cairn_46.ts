import type { StoryArc } from '$lib/types';

// Cairn 시리즈 5편 (level 46) — 깨어진 맹세의 기록
export const storyarc_snowy_cairn_46: StoryArc = {
	id: 'snowy_cairn_46',
	level: 46,
	chapter_name: {
		korean: '깨어진 맹세의 기록',
		english: 'The Record of Broken Oaths',
		japanese: '破られた誓いの記録',
		chinese: '破碎誓言的记录',
		french: 'Le Registre des Serments Brisés',
		spanish: 'El Registro de los Juramentos Rotos',
		vietnamese: 'Ký Lục Của Những Lời Thề Tan Vỡ',
		thai: 'บันทึกแห่งคำสาบานที่แตกสลาย',
		hindi: 'टूटी शपथों का अभिलेख'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'돌무덤 안쪽으로 이어진 얼음 동굴. 벽면 가득 새겨진 룬이 수백 년에 걸친 맹세와 배신의 기록을 담고 있다. 가장 안쪽엔 다른 무엇보다 차가운 푸른빛의 핵이 고동친다.',
		rule: '이 기록을 해독한 자는 돌무덤의 본질을 알게 된다. 그것은 결코 위안을 주는 진실이 아니다.',
		secret:
			'돌무덤은 수백 년간 북부 설원에서 깨어진 약속과 배신, 잊힌 맹세들이 응축되어 형성된 살아있는 존재다. 벽의 룬은 그 모든 깨어진 맹세의 명부였다.'
	},

	protagonist_goal: '돌무덤 안쪽 얼음 동굴에 새겨진 깨어진 맹세의 기록을 해독하라.',

	act_tone: {
		intro: {
			mood: '기록의 무게',
			tension: 3,
			narrative_role: '벽을 가득 메운 룬. 수백 년에 걸친 누군가들의 맹세와 그 끝이 빼곡히 새겨져 있다.'
		},
		rising: {
			mood: '응축된 배신',
			tension: 5,
			narrative_role:
				'룬이 하나씩 해독될수록, 이 모든 깨어진 맹세가 한곳에 응축되어 무언가를 이루었음이 드러난다.'
		},
		climax_finale: {
			mood: '본질을 마주하다',
			tension: 7,
			narrative_role:
				'마지막 명부가 읽히는 순간, 푸른빛의 핵이 고동친다. 돌무덤이 깨어진 맹세들의 응축체임이 처음으로 분명해진다.'
		}
	},

	final_boss: {
		id: 'FrozenVow_Cairn_V1',
		name: 'Cairn',
		appearance:
			'The interior of the cairn revealed as an ice cave, walls densely carved with centuries of runic oaths, a cold blue core pulsing at the deepest point. Frozen fragments of weapons and tokens are embedded throughout, each marking a broken promise. Cinematic glacial cavern lighting, heavy ominous high-fantasy aesthetic.',
		surface_identity:
			'돌무덤 안쪽으로 이어진 얼음 동굴. 벽 가득한 룬이 수백 년의 맹세와 배신을 기록하고 있다.',
		true_identity:
			'수백 년간 북부 설원에서 깨어진 약속과 배신, 잊힌 맹세들이 응축되어 형성된 살아있는 존재. 벽의 룬은 그 모든 깨어진 맹세의 명부다.',
		motivation:
			'배신이라는 본질에 따라, 자신을 이룬 모든 깨어진 맹세를 명부에 새겨 기억한다. 그 무게가 곧 자신의 존재 이유임을 드러내려 한다.',
		twist:
			'마지막 명부가 해독되는 순간, 동굴 가장 안쪽 푸른빛의 핵이 깊게 고동친다. 벽의 모든 룬이 일제히 차갑게 빛나며 하나로 이어진다. 이 돌무덤은 무덤도 표식도 아니라, 수백 년간 깨어진 맹세들이 응축되어 깨어난 살아있는 존재였음이 처음으로 분명해진다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '동굴 벽의 룬이 모두 누군가의 이름과 그가 어긴 약속으로 끝난다. 끝없이 이어진 명부다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 명부는 돌무덤을 이룬 재료였다. 깨어진 맹세 하나하나가 그것의 일부가 되었다.'
		},
		{
			id: 'fs_02',
			hint: '오래된 룬일수록 깊고 또렷하고, 최근의 것일수록 얕다. 무언가 계속 자라나고 있다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '돌무덤은 지금도 깨어진 맹세를 먹고 자라고 있었다. 명부는 아직 닫히지 않았다.'
		},
		{
			id: 'fs_03',
			hint: '동굴 깊은 곳의 푸른빛 핵이, 새로운 룬이 새겨질 때마다 한 번씩 고동친다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 핵은 돌무덤의 심장이었고, 깨어진 맹세를 양분 삼아 박동하고 있었다.'
		},
		{
			id: 'fs_04',
			hint: '벽의 룬 사이사이에, 3편에서 보았던 갈라진 신표와 같은 문양이 반복된다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '갈라진 신표의 문양은 곧 배신의 표식이었다. 돌무덤은 배신만을 골라 기록해 왔다.'
		}
	],

	npc_roles: {
		eira: {
			role: '명부를 해독하는 자',
			arc: '5편: 동굴 벽의 룬 명부를 해독해, 돌무덤이 깨어진 맹세들의 응축체임을 밝힌다 — 기록자 역할의 정수.'
		},
		ivar: {
			role: '이름을 알아보는 자',
			arc: '5편: 명부에서 자신이 흠모하던 옛 전사의 이름이 배신자로 새겨진 것을 보고 충격에 잠긴다.'
		},
		anuk: {
			role: '본질을 짚는 자',
			arc: '5편: 명부가 오직 배신만을 골라 기록함을 알아채고, 이 존재의 본질이 배신의 심판임을 처음으로 짚는다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '룬으로 뒤덮인 동굴',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 돌무덤 안쪽 얼음 동굴에 들어선다. 벽을 가득 메운 룬이 수백 년의 맹세를 담고 있다. 에이라가 명부의 해독을 시작한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '명부 속 그 이름',
			boss: 'random_boss',
			npc: 'ivar',
			summary:
				'이바르가 명부에서 자신이 흠모하던 옛 전사의 이름을 발견한다. 그러나 그 이름은 배신자로 새겨져 있다. "…그분이, 약속을 어겼다고?" 충격에 잠긴다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '배신만을 골라',
			boss: 'random_boss',
			npc: 'anuk',
			summary:
				'아누크가 명부가 오직 깨어진 맹세, 배신만을 골라 기록함을 알아챈다. "지킨 약속은 한 줄도 없어. 이건 배신의 명부야." 이 존재의 본질을 처음으로 짚는다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '고동치는 핵',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 새 룬이 새겨질 때마다 동굴 깊은 곳 푸른빛 핵이 고동침을 기록한다. 그 핵은 깨어진 맹세를 양분 삼아 박동하는 심장이었다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '응축된 존재',
			boss: 'pool_111',
			npc: 'eira',
			summary:
				'에이라가 마지막 명부를 해독해낸다. 푸른빛 핵이 깊게 고동치고 벽의 모든 룬이 하나로 이어진다. 이 돌무덤은 무덤도 표식도 아닌, 수백 년의 깨어진 맹세가 응축되어 깨어난 살아있는 존재였다.'
		}
	],

	act_summary: {
		intro: '돌무덤 안쪽 얼음 동굴, 벽 가득한 룬 명부. 에이라가 해독을 시작한다.',
		rising: '옛 전사의 이름을 배신자로 발견한 이바르, 배신만을 골라 기록함을 짚는 아누크, 고동치는 핵을 기록하는 에이라. 깨어진 맹세가 응축되어 있었다.',
		climax_finale: '마지막 명부가 읽히는 순간, 돌무덤이 수백 년의 깨어진 맹세가 응축되어 깨어난 살아있는 존재임이 분명해진다.'
	}
};
