import type { StoryArc } from '$lib/types';

// Cairn 시리즈 10편 (level 96) — 맹세의 무게 (시리즈 피날레)
export const storyarc_snowy_cairn_96: StoryArc = {
	id: 'snowy_cairn_96',
	level: 96,
	chapter_name: {
		korean: '맹세의 무게',
		english: 'The Weight of the Vow',
		japanese: '誓いの重さ',
		chinese: '誓言的重量',
		french: 'Le Poids du Serment',
		spanish: 'El Peso del Juramento',
		vietnamese: 'Sức Nặng Của Lời Thề',
		thai: 'น้ำหนักของคำสาบาน',
		hindi: 'शपथ का भार'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'시리즈의 끝. 시험도, 응축된 배신도, 온정 없는 심판도 모두 마주한 끝에 탐험대는 돌무덤 앞에서 서로에게 마지막 중요한 맹세를 나누거나, 위태로운 거래를 매듭지으려 한다. 돌무덤이 그 순간을 기다려온 듯 둔탁하게 떨기 시작한다.',
		rule: '이 마지막 맹세의 진위가 시험되는 순간, 돌무덤이 최후의 심판을 내린다. 배신을 품은 자는 그 자리에서 얼어붙는다.',
		secret:
			'Cairn은 깨어진 약속과 배신, 잊힌 맹세가 응축된 차가운 심판자다. 탐험대가 진짜 신의를 시험받는 마지막 순간, 그 본모습으로 깨어나 모든 약속의 무게를 저울질한다.'
	},

	protagonist_goal: '돌무덤의 마지막 심판 앞에서, 서로의 맹세가 진짜임을 증명하고 살아남아라.',

	act_tone: {
		intro: {
			mood: '기다려온 순간',
			tension: 1,
			narrative_role: '탐험대가 마지막 맹세를 나누려 하자, 돌무덤이 그 순간을 기다린 듯 둔탁하게 떤다.'
		},
		rising: {
			mood: '회수되는 시험',
			tension: 3,
			narrative_role:
				'끊긴 서약도, 응축된 배신도, 온정 없는 심판도 — 시리즈 내내 본 모든 것이 이 마지막 맹세로 수렴한다.'
		},
		climax_finale: {
			mood: '산산조각 나는 약속',
			tension: 5,
			narrative_role:
				'돌무덤이 본모습을 드러내며 최후의 심판을 내린다. 배신을 품은 자가 얼어붙고, 탐험대의 모든 약속이 저울에 오른다.'
		}
	},

	final_boss: {
		id: 'FrozenVow_Cairn_V1',
		name: 'Cairn',
		appearance:
			'The cairn shifting and rising, granite shards bursting upward like ice crystals with shrill cries, the whole mound blazing an eerie blue. At its core a cold voice weighs every vow as a would-be betrayer begins to freeze and all promises threaten to shatter at once. Cinematic climactic judging blue blizzard, merciless and grand high-fantasy aesthetic.',
		surface_identity:
			'눈 덮인 황야에 홀로 선 오래된 돌무덤, 길 표식이나 잊힌 무덤처럼 보였던 존재.',
		true_identity:
			'수백 년간 북부의 혹독한 설원에서 무수히 깨어진 약속과 배신, 그리고 잊힌 맹세들이 응축되어 형성된 살아있는 얼어붙은 맹세의 결실이다. 바이킹들의 피와 영광을 노래했던 수많은 서약들이 차가운 배신의 무게에 짓눌려 돌처럼 굳어버린, 냉혹한 심판자 그 자체다. 오직 신의 없는 자들을 가려내고 단죄하기 위해 존재한다.',
		motivation:
			'자신을 형성한 배신이라는 차가운 본질에 따라, 탐험대 사이의 약속과 신의를 시험하고, 그들의 숨겨진 이기심과 불순한 동기를 끄집어내는 것이 이 존재의 유일한 목적이다. 깨어진 맹세는 반드시 대가를 치르게 할 뿐, 어떤 온정도 허용하지 않는다.',
		twist:
			'탐험대가 힘든 여정 끝에 서로에게 중요한 맹세를 하거나, 혹은 외부의 누군가와 위태로운 거래를 성사시키려 할 때, 돌무덤이 둔탁한 진동과 함께 서서히 그 형태를 바꾼다. 돌 조각들이 얼음 결정처럼 솟아나며 날카로운 비명을 지르고, 무덤 전체가 섬뜩한 푸른빛을 발한다. 이내 얼어붙은 돌무덤의 중심부에서 차가운 목소리가 울려 퍼진다. "…탐욕은 언제나 눈보라보다 빠르게 녹아내리지. 너희의 맹세, 그 무게는 대체 얼마였을까?" 그 순간, 배신을 계획하던 자의 몸이 얼어붙기 시작하며, 탐험대의 모든 약속이 산산이 조각나는 광경이 펼쳐진다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '탐험대가 마지막 맹세를 입에 올리려 하자 돌무덤이 둔탁하게 떨기 시작한다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '떨림은 최후의 심판을 위해 본모습을 드러낼 전조였다.'
		},
		{
			id: 'fs_02',
			hint: '돌 조각들이 얼음 결정처럼 솟아오를 듯 미세하게 들뜬다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '들뜬 돌은 곧 비명을 지르며 솟아날 심판자의 몸이었다.'
		},
		{
			id: 'fs_03',
			hint: '탐험대 중 마음 한구석에 불순한 셈을 품은 자의 손끝에 서리가 맺힌다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '맺힌 서리는 배신을 품은 자가 얼어붙기 시작하는 징후였다.'
		},
		{
			id: 'fs_04',
			hint: '나눈 약속의 말들이 허공에서 얼어 깨질 듯 위태롭게 굳어간다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '굳어가는 약속은 곧 산산조각 날 시험대 위의 맹세였다.'
		}
	],

	npc_roles: {
		eira: {
			role: '심판을 매듭짓는 자',
			arc: '10편: 시리즈 내내 읽어온 배신과 심판의 진실을 매듭짓고, 깨어진 맹세들의 기록을 끝까지 남긴다.'
		},
		ivar: {
			role: '진짜 신의를 거는 전사',
			arc: '10편: 마지막 심판 앞에서 전사의 명예를 걸고 동료와의 맹세가 진짜임을 증명해, 그 무게로 시험에 맞선다. (3인 throughline 수렴)'
		},
		anuk: {
			role: '맹세의 무게를 증언하는 자',
			arc: '10편: 약속의 무게를 가장 잘 아는 자로서, 탐험대의 신의가 거짓이 아님을 심판자 앞에 증언한다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '마지막 맹세 앞에서',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 시리즈의 끝, 돌무덤 앞에서 서로에게 마지막 중요한 맹세를 나누려 한다. 에이라가 돌무덤이 그 순간을 기다린 듯 둔탁하게 떨기 시작함을 본다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '들뜨는 돌',
			boss: 'random_boss',
			npc: 'anuk',
			summary:
				'아누크가 돌 조각들이 얼음 결정처럼 솟아오를 듯 들뜨는 것을 본다. 곧 본모습을 드러낼 심판자다. "맹세의 무게를 증명할 순간이야. 진심이 아니면 깨져."'
		},
		{
			order: 3,
			act: 'rising',
			title: '손끝의 서리',
			boss: 'random_boss',
			npc: 'ivar',
			summary:
				'이바르가 마음 한구석에 불순한 셈을 품은 자의 손끝에 서리가 맺히는 것을 본다. 배신이 얼어붙기 시작하는 징후다. 전사의 명예를 걸고 제 맹세가 진짜임을 내건다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '위태로운 약속',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 나눈 약속의 말들이 허공에서 얼어 깨질 듯 굳어가는 것을 본다. 시험대 위의 맹세다. "거의 다 왔어 — 이 맹세의 무게가, 곧 시험돼."'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '너희의 맹세, 그 무게는 얼마였을까',
			boss: 'pool_111',
			npc: 'ivar',
			summary:
				'돌무덤이 둔탁한 진동과 함께 형태를 바꾼다. 돌 조각이 얼음 결정처럼 솟으며 비명을 지르고 섬뜩한 푸른빛을 발한다. "탐욕은 언제나 눈보라보다 빠르게 녹아내리지. 너희의 맹세, 그 무게는 대체 얼마였을까?" 배신을 품은 자가 얼어붙고 모든 약속이 산산조각 나는 가운데, 진짜 신의를 건 이바르와 3인의 여정이 수렴하는 최종 결전이 벌어진다.'
		}
	],

	act_summary: {
		intro: '마지막 맹세를 나누려 하자 돌무덤이 둔탁하게 떨기 시작한다. 에이라가 그 전조를 본다.',
		rising: '들뜨는 돌을 본 아누크, 손끝의 서리에 맞서는 이바르, 위태로운 약속을 읽는 에이라. 모든 시험이 이 맹세로 수렴한다.',
		climax_finale: '"너희의 맹세, 그 무게는 대체 얼마였을까?" 배신이 얼어붙고 약속이 산산조각 나는 최후의 심판 — 시리즈 피날레.'
	}
};
