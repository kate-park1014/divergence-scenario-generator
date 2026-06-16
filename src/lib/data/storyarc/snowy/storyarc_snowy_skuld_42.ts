import type { StoryArc } from '$lib/types';

// Skuld 시리즈 5편 (level 42) — 족장 라그나르의 유언
export const storyarc_snowy_skuld_42: StoryArc = {
	id: 'snowy_skuld_42',
	level: 42,
	chapter_name: {
		korean: '라그나르의 유언',
		english: 'The Last Will of Ragnar',
		japanese: 'ラグナルの遺言',
		chinese: '拉格纳的遗言',
		french: 'Les Dernières Volontés de Ragnar',
		spanish: 'La Última Voluntad de Ragnar',
		vietnamese: 'Di Ngôn Của Ragnar',
		thai: 'พินัยกรรมสุดท้ายของรากนาร์',
		hindi: 'राग्नार का अंतिम वचन'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'척후선의 심장부, 빙하 가장 깊은 곳. 갑판 한가운데 족장의 자리가 얼어붙어 있고, 그 곁에 거대한 룬 비석이 서 있다. 비석에는 한 족장의 마지막 명령이 새겨져 있다.',
		rule: '족장의 유언을 읽는 자는 스쿌드를 옭아맨 맹세의 무게를 알게 된다. 그 맹세는 수천 년이 지나도 풀리지 않았다.',
		secret:
			'스쿌드는 족장 라그나르에게서 마지막 유언을 맹세받았다 — "미드가르드에 드리운 어둠을 멸하고, 나의 검은 반드시 아스가르드로 돌아가리라." 그 맹세가 스쿌드를 빙하 속에 묶어둔 사슬이었다.'
	},

	protagonist_goal: '척후선 스쿌드가 받든 족장 라그나르의 유언을 해독하라.',

	act_tone: {
		intro: {
			mood: '엄숙한 무게',
			tension: 1,
			narrative_role: '빙하 가장 깊은 곳, 얼어붙은 족장의 자리와 거대한 룬 비석이 모습을 드러낸다.'
		},
		rising: {
			mood: '드러나는 맹세',
			tension: 3,
			narrative_role:
				'비석의 룬이 한 줄씩 해독된다. 한 족장이 자신의 가장 빠른 척후선에게 남긴 마지막 명령 — 그것은 영광이자 저주였다.'
		},
		climax_finale: {
			mood: '맹세의 사슬',
			tension: 5,
			narrative_role:
				'탐험대가 유언을 마저 읽자, 빙하가 깊이 신음한다. "…나는 그 맹세를 지켜야 한다. 그것이 내게 남은 전부이니."'
		}
	},

	final_boss: {
		id: 'GlacialOath_Skuld_V1',
		name: 'Skuld',
		appearance:
			'At the deepest heart of the glacier, a frozen chieftain seat upon an ancient deck beside a towering rune-carved memorial stone. The vast scout-ship hull encloses the chamber, blue light pulsing from the stone as each rune of a final command glows. Skuld manifests faintly around the seat, bound and weary. Cinematic solemn cavern lighting, reverent and sorrowful high-fantasy aesthetic.',
		surface_identity:
			'한때 북해를 호령하던 척후선 스쿌드. 그러나 그를 움직이는 것은 자유 의지가 아니라, 한 족장의 마지막 명령이다.',
		true_identity:
			'스쿌드는 족장 라그나르에게서 마지막 유언을 맹세받았다 — "미드가르드에 드리운 어둠을 멸하고, 나의 검은 반드시 아스가르드로 돌아가리라." 그 맹세가 스쿌드를 빙하 속에 묶어둔 사슬이었다.',
		motivation:
			'족장의 유언을 지키려는 맹목적인 의무감. 어둠을 멸하고 족장의 검을 돌려보내겠다는 약속 하나로, 스쿌드는 수천 년을 빙하 속에 갇힌 채 견뎌왔다.',
		twist:
			'탐험대가 룬 비석의 유언을 마저 읽어낸다. 빙하가 깊이 신음한다. "나는 그 맹세를 지켜야 한다. 그것이 내게 남은 전부이니." 자유 의지가 아니라 한 줄의 명령이 그를 이 얼음 속에 영원히 붙들고 있었다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '갑판 한가운데 얼어붙은 족장의 자리가 비어 있다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '비어 있는 그 자리의 주인이 바로 족장 라그나르였다.'
		},
		{
			id: 'fs_02',
			hint: '룬 비석에 "어둠을 멸하라"는 명령이 새겨져 있다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그것은 라그나르가 스쿌드에게 맹세시킨 유언의 첫 구절이었다.'
		},
		{
			id: 'fs_03',
			hint: '비석에 "검은 반드시 아스가르드로 돌아가리라"는 구절이 이어진다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '족장의 검을 돌려보내겠다는 그 약속이, 스쿌드를 빙하에 붙든 사슬이었다.'
		},
		{
			id: 'fs_04',
			hint: '유언을 읽을수록 빙하의 한기가 무겁고 깊은 신음으로 바뀐다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 신음은 지키지 못한 맹세의 무게에 짓눌린 자의 비탄이었다.'
		}
	],

	npc_roles: {
		eira: {
			role: '유언의 해독자',
			arc: '5편: 룬 비석에 새겨진 족장 라그나르의 유언을 한 줄씩 해독한다 — 기록자 역할의 정수.'
		},
		ivar: {
			role: '명령에 묶인 자를 보는 전사',
			arc: '5편: 자유 의지가 아닌 명령 하나로 수천 년을 견딘 스쿌드를 보며, 전사의 의무란 무엇인가를 마주한다.'
		},
		hild: {
			role: '맹세의 증언자',
			arc: '5편: 망자의 약속에 깊이 공명하며, 지키지 못한 유언의 무게를 가장 깊이 느낀다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '비어 있는 족장의 자리',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 빙하 가장 깊은 곳, 척후선의 심장부에 다다른다. 에이라가 얼어붙은 족장의 빈 자리와 거대한 룬 비석을 발견하고 해독을 시작한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '어둠을 멸하라',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 비석의 첫 구절을 읽는다. "미드가르드에 드리운 어둠을 멸하라…" 한 족장이 자신의 척후선에게 남긴 명령이다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '의무란 무엇인가',
			boss: 'random_boss',
			npc: 'ivar',
			summary:
				'이바르가 명령 하나로 수천 년을 견딘 스쿌드를 본다. "강함도 영광도 아니라… 그저 명령 하나를 지키려고 이 얼음 속에서. 전사의 의무란, 이런 건가."'
		},
		{
			order: 4,
			act: 'rising',
			title: '아스가르드로 돌아가리라',
			boss: 'random_boss',
			npc: 'hild',
			summary:
				'힐드가 비석의 마지막 구절에 공명한다. "나의 검은 반드시 아스가르드로 돌아가리라…" 그녀는 망자의 약속이 지닌 무게에 깊이 떤다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '내게 남은 전부',
			boss: 'pool_107',
			npc: 'hild',
			summary:
				'힐드가 유언 전문을 읽어내자 빙하가 깊이 신음한다. "나는 그 맹세를 지켜야 한다. 그것이 내게 남은 전부이니." 한 줄의 명령이 스쿌드를 이 얼음에 영원히 붙들고 있었음이 드러난다.'
		}
	],

	act_summary: {
		intro: '빙하 가장 깊은 곳, 얼어붙은 족장의 자리와 거대한 룬 비석이 드러난다. 에이라가 해독을 시작한다.',
		rising: '유언을 읽는 에이라, 의무를 되묻는 이바르, 약속에 공명하는 힐드. 라그나르의 마지막 명령이 한 줄씩 드러난다.',
		climax_finale: '"나는 그 맹세를 지켜야 한다. 그것이 내게 남은 전부이니." 명령 하나가 스쿌드를 영원히 붙들고 있었다.'
	}
};
