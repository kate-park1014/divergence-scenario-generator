import type { StoryArc } from '$lib/types';

// Skuld 시리즈 8편 (level 72) — 떠도는 업보
export const storyarc_snowy_skuld_72: StoryArc = {
	id: 'snowy_skuld_72',
	level: 72,
	chapter_name: {
		korean: '떠도는 업보',
		english: 'The Wandering Burden',
		japanese: 'さまよう業',
		chinese: '游荡的业障',
		french: 'Le Fardeau Errant',
		spanish: 'La Carga Errante',
		vietnamese: 'Gánh Nặng Lang Thang',
		thai: 'บาปกรรมที่เร่ร่อน',
		hindi: 'भटकता हुआ कर्मभार'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'좌초의 자리를 지나, 빙하가 같은 자리를 끝없이 맴돈 흔적이 새겨진 구역. 얼음 바닥에 거대한 원형의 자취가 겹겹이 패여 있다. 스쿌드는 수천 년 동안 이 설원을 떠돌며 무언가를 찾아 헤맸다.',
		rule: '빙하가 맴돈 자취를 따라가면, 그가 무엇을 찾아 헤매는지 알게 된다. 그러나 그 길은 어디에도 닿지 못한다.',
		secret:
			'스쿌드는 라그나르의 유언을 이행하려 어둠의 잔재를 찾아 영원히 떠돌아 왔다. 허나 미드가르드는 멀고, 검은 돌려보낼 수 없으며, 약속은 끝내 지켜지지 못한다. 떠도는 것 자체가 그의 업보가 되었다.'
	},

	protagonist_goal: '빙하가 수천 년 같은 자리를 맴돈 이유, 스쿌드가 짊어진 업보의 정체를 밝혀라.',

	act_tone: {
		intro: {
			mood: '끝없는 맴돎',
			tension: 1,
			narrative_role: '얼음 바닥에 겹겹이 패인 거대한 원형의 자취. 빙하는 수천 년 같은 곳을 맴돌아 왔다.'
		},
		rising: {
			mood: '닿지 못하는 길',
			tension: 3,
			narrative_role:
				'자취를 따라갈수록, 그 길이 어디에도 닿지 못함이 드러난다. 어둠을 찾아 헤맸으나, 미드가르드는 멀고 검은 돌아갈 곳이 없다.'
		},
		climax_finale: {
			mood: '업보의 무게',
			tension: 5,
			narrative_role:
				'탐험대가 맴돎의 끝을 마주하자, 빙하가 무겁게 신음한다. "…나는 약속을 이행하려 떠돌았다. 허나 떠도는 것이, 어느새 나의 벌이 되었구나."'
		}
	},

	final_boss: {
		id: 'GlacialOath_Skuld_V1',
		name: 'Skuld',
		appearance:
			'A vast glacier scarred with enormous overlapping circular tracks gouged into the ice, evidence of millennia spent wandering the same ground. Faint longship carvings drift along the ice, forever circling without arrival. Skuld looms within, weary and immense, dragging the weight of an unkept oath. Cinematic endless cold lighting, sorrowful high-fantasy aesthetic.',
		surface_identity:
			'설원을 영원히 떠도는 빙하. 그러나 그 자취는 같은 자리를 끝없이 맴돈 자국이다.',
		true_identity:
			'스쿌드는 라그나르의 유언을 이행하려 어둠의 잔재를 찾아 떠돌아 왔다. 허나 미드가르드는 멀고 검은 돌려보낼 수 없으며, 약속은 끝내 지켜지지 못한다. 떠도는 것 자체가 그의 업보가 되었다.',
		motivation:
			'유언을 지키지 못한 자신을 용서하지 못한다. 그래서 멈추지 못하고, 어둠을 찾아 영원히 같은 설원을 맴돈다.',
		twist:
			'탐험대가 맴돎의 끝을 마주하자 빙하가 무겁게 신음한다. "나는 약속을 이행하려 떠돌았다. 허나 떠도는 것이, 어느새 나의 벌이 되었구나." 유언을 좇던 의무가, 어디에도 닿지 못한 채 영원한 업보로 굳어버린 것이다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '얼음 바닥의 자취가 출발점도 끝점도 없이 거대한 원을 이룬다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '원을 이룬 자취는 그가 어디에도 닿지 못한 채 같은 자리를 맴돌아 왔음을 뜻했다.'
		},
		{
			id: 'fs_02',
			hint: '룬이 "어둠은 어디에도 없고, 검은 돌아갈 곳이 없다"고 거듭 새겨진다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '이행할 길 없는 유언이, 그를 영원한 헤맴 속에 가두었다.'
		},
		{
			id: 'fs_03',
			hint: '맴돈 자취 곳곳에 스쿌드가 멈춰 섰다 다시 떠난 흔적이 남아 있다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '멈추고 싶었으나 멈추지 못했다 — 약속을 지키지 못한 자신을 용서할 수 없었기에.'
		},
		{
			id: 'fs_04',
			hint: '자취의 한가운데에 아무것도 없다. 그저 텅 빈 얼음 벌판뿐이다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '맴돎의 중심엔 어떤 목적지도 없었다. 떠도는 것이 곧 그의 벌이었다.'
		}
	],

	npc_roles: {
		eira: {
			role: '자취의 해독자',
			arc: '8편: 빙하가 맴돈 원형의 자취를 해독해, 그것이 어디에도 닿지 못한 헤맴임을 밝힌다.'
		},
		ivar: {
			role: '의무를 되묻는 전사',
			arc: '8편: 이행할 수 없는 의무에 영원히 묶인 모습을 보며, 맹목적 의무란 무엇인가를 되묻는다.'
		},
		hild: {
			role: '업보를 헤아리는 자',
			arc: '8편: 약속을 지키지 못한 자의 업보를 헤아리고, 그 무거운 헤맴을 망자의 죄처럼 애도한다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '겹겹이 패인 원',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 빙하가 맴돈 자취 구역에 들어선다. 에이라가 얼음 바닥에 겹겹이 패인 거대한 원형의 자취를 발견하고 해독을 시작한다. 출발점도 끝점도 없다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '돌아갈 곳 없는 검',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 룬을 읽는다. "어둠은 어디에도 없고, 검은 돌아갈 곳이 없다…" 이행할 길 없는 유언이 그를 영원한 헤맴에 가두었음이 드러난다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '맹목의 의무',
			boss: 'random_boss',
			npc: 'ivar',
			summary:
				'이바르가 멈췄다 다시 떠난 흔적들을 본다. "지킬 수 없는 명령에 영원히 묶이다니… 그게 충성인가, 아니면 그저 벌인가." 전사의 의무를 되묻는다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '텅 빈 중심',
			boss: 'random_boss',
			npc: 'hild',
			summary:
				'힐드가 자취의 한가운데에 다다른다. 그곳엔 아무 목적지도 없는 텅 빈 얼음뿐이다. 그 헤맴의 업보를 헤아리며 망자의 죄처럼 애도한다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '떠도는 것이 나의 벌이었다',
			boss: 'pool_107',
			npc: 'hild',
			summary:
				'탐험대가 맴돎의 끝을 마주하자 빙하가 무겁게 신음한다. "나는 약속을 이행하려 떠돌았다. 허나 떠도는 것이, 어느새 나의 벌이 되었구나." 닿지 못한 의무가 영원한 업보로 굳었음이 드러나며 전투가 이어진다.'
		}
	],

	act_summary: {
		intro: '얼음에 겹겹이 패인 거대한 원형의 자취. 에이라가 그 맴돎의 흔적을 해독하기 시작한다.',
		rising: '돌아갈 곳 없는 검을 읽는 에이라, 맹목의 의무를 되묻는 이바르, 텅 빈 중심을 애도하는 힐드. 그 헤맴은 어디에도 닿지 못했다.',
		climax_finale: '"떠도는 것이, 어느새 나의 벌이 되었구나." 이행할 수 없는 유언이 영원한 업보가 되었다.'
	}
};
