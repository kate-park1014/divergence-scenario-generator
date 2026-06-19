import type { StoryArc } from '$lib/types';

export const storyarc_hell_kismet_4: StoryArc = {
	id: 'hell_kismet_4',
	level: 4,
	chapter_name: {
		korean: '운명의 그림자',
		english: 'The Shadow of Fate',
		japanese: '運命の影',
		chinese: '命运之影',
		french: "L'Ombre du Destin",
		spanish: 'La Sombra del Destino',
		vietnamese: 'Bóng Tối Của Số Phận',
		thai: 'เงาแห่งโชคชะตา',
		hindi: 'नियति की छाया'
	},
	theme: 'hell',
	rising_count: 3,

	world: {
		setting:
			'지옥의 심연, 끝없이 이어진 검은 실타래와 찢긴 천 조각들 사이에서 거대한 직조자가 죄인들의 절망을 엮어낸다. 그 실은 죽은 자들의 비명을 담아 비극을 끝없이 재현하는 듯하다.',
		rule: '지옥에서 한 번 엮인 운명은 결코 풀리지 않는다 전해진다.',
		secret:
			'직조자 키스멧은 우주의 운명을 직조하던 원초적 존재의 잔재다. 예정된 대재앙을 뒤집으려다 실패해 그 업보로 지옥에 유폐되었다. 그가 필사적으로 엮으려는 것은 저주가 아니라, 너무 참혹해 스스로 끊어내려 했던 인류의 미래다.'
	},

	protagonist_goal: '죄인들의 절망을 영원히 엮어낸다는 지옥의 직조자를 찾아, 그 실타래에 담긴 운명의 진실을 밝혀라.',

	act_tone: {
		intro: {
			mood: '음울한 경외',
			tension: 1,
			narrative_role: '지옥 심연에서 끝없이 실을 엮는 거대한 직조자. 그 모습은 저주의 화신처럼 두렵다.'
		},
		rising: {
			mood: '뒤엉키는 비탄',
			tension: 3,
			narrative_role: '엮이는 실마다 누군가의 비극이 재현된다. 그러나 직조자의 손길엔 악의보다 처절한 슬픔이 배어 있다.'
		},
		climax_finale: {
			mood: '비극적 진실',
			tension: 5,
			narrative_role: '직조기가 부서지며 실이 아닌 핏빛 눈물과 부서진 별자리가 쏟아진다. 그가 엮으려던 운명의 진짜 정체가 드러난다.'
		}
	},

	final_boss: {
		// NOTE: Kismet은 final boss pool_id가 아직 존재하지 않음 — 추후 실제 pool_id 생성 후 아래 order5 boss와 함께 교체 필요
		id: 'FatedWeaver_Kismet_V1',
		name: 'Kismet',
		appearance:
			'지옥의 심연 속, 끝없이 이어진 검은 실타래와 찢긴 천 조각들 사이로 거대한 그림자 형체가 드리워져 있다. 형체는 여러 갈래의 뼈다귀 팔을 뻗어 마치 직조기처럼 허공의 실을 엮고 있으며, 그 몸에는 희미하게 빛나는 별자리 문양이 새겨져 있다. 눈은 흐릿한 잿빛으로, 과거의 모든 예언이 담긴 무한한 슬픔을 담고 있는 듯하다.',
		surface_identity:
			"지옥의 어둠 속에서 영원히 죄인들의 절망을 엮어내는 저주의 직공, '운명의 그림자'라 불리는 존재. 그 실타래는 죽은 자들의 비명을 담아 지옥의 비극을 끝없이 재현하는 듯하다.",
		true_identity:
			'태초의 신비 세계에서 우주의 운명과 모든 예언을 직조하던 원초적 직조자, 키스멧의 산산이 부서진 잔재. 감히 예정된 대재앙을 뒤집으려다 실패하고, 그 업보로 운명의 실타래와 함께 지옥에 유폐되어 버린 비극적인 존재이다.',
		motivation:
			"키스멧은 악의가 아닌, 필사적인 광기 속에서 행동한다. 파괴된 예언의 파편들 속에서 과거의 '진정한' 운명을 재구성하려 애쓰며, 탐험대가 지닌 알 수 없는 '흐트러진 실타래'가 자신의 임무를 완성할 마지막 조각이라 믿어 집착한다.",
		twist:
			"키스멧과의 싸움이 극에 달해 그 형체가 갈라질 때, 거대한 직조기는 부서지고 그 안에서 흘러나오는 것은 실이 아닌 핏빛 눈물과 함께 산산조각 난 별자리의 잔해들이다. 그것이 필사적으로 엮으려 했던 것은 저주가 아니라, 너무나 참혹하여 스스로 파괴하려 했던 인류의 미래라는 사실이 드러난다.\n\"오… 결국 이 파편들마저… 무의미했는가. 내가 끊어내려 했던 운명이… 너희의 진정한 미래였음을… 어리석은 자들… 내가 보았던 것은… 너희의 피로 물든 최후였다!\""
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '직조자가 엮는 실타래 속에서, 아직 일어나지도 않은 탐험대의 미래가 언뜻언뜻 비친다.',
			plant_act: 'intro',
			plant_room: 2,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그는 과거가 아니라 다가올 미래를 엮고 있었다.'
		},
		{
			id: 'fs_02',
			hint: '그의 손길은 죄인을 옥죄면서도, 어쩐지 망설이고 떨린다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 14,
			reveal_context: '악의가 아니라, 끊어내야 할 것을 차마 끊지 못하는 비탄이었다.'
		},
		{
			id: 'fs_03',
			hint: '몸에 새겨진 별자리 문양 중 하나가 군데군데 끊기고 어긋나 있다.',
			plant_act: 'rising',
			plant_room: 6,
			reveal_act: 'climax_finale',
			reveal_room: 13,
			reveal_context: '예정된 대재앙을 뒤집으려다 실패한, 부서진 운명의 흔적이었다.'
		},
		{
			id: 'fs_04',
			hint: '직조자는 탐험대가 지닌 무언가를 "마지막 조각"이라 부르며 애타게 손을 뻗는다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 12,
			reveal_context: '그것이 끊어진 예언을 다시 엮을 마지막 실이라 믿었기 때문이다.'
		}
	],

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '운명의 직공',
			boss: 'random_boss',
			npc: 'pyre',
			summary:
				'지옥 심연에서 죄인들의 절망을 엮는 거대한 직조자와 마주친다. 파이어가 그 실타래를 들여다보다 멈칫한다 — 아직 일어나지도 않은 자신의 미래가 비친다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '엮이는 절망',
			boss: 'random_boss',
			npc: 'mire',
			summary:
				'실이 엮일 때마다 누군가의 비극이 재현된다. 그러나 마이어는 본다 — 죄인을 옥죄는 그 손길이, 어쩐지 망설이며 떨리고 있다는 것을.'
		},
		{
			order: 3,
			act: 'rising',
			title: '흐트러진 실타래',
			boss: 'random_boss',
			npc: 'ash',
			summary:
				'직조자 몸에 새겨진 별자리 문양 하나가 군데군데 끊기고 어긋나 있다. 애쉬가 직감한다 — 이 존재는 무언가를 엮는 게 아니라, 한때 무언가를 끊어내려 했다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '마지막 조각',
			boss: 'random_boss',
			npc: 'char',
			summary:
				'직조자가 차르가 지닌 무언가를 "마지막 조각"이라 부르며 애타게 손을 뻗는다. 그 눈빛엔 적의가 아니라, 무언가를 완성하려는 처절한 갈망이 담겨 있다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '운명의 그림자',
			boss: 'pool_FatedWeaver_Kismet_V1', // NOTE: placeholder — Kismet의 실제 final boss pool_id 미존재, 추후 교체 필요
			npc: 'pyre',
			summary:
				'직조기가 부서지며 실이 아닌 핏빛 눈물과 부서진 별자리가 쏟아진다. "내가 끊어내려 했던 운명이 너희의 진정한 미래였음을…" 그는 인류의 참혹한 최후를 막으려다 유폐된 직조자였다. 그 비극의 실타래를 끊을 것인가, 그가 본 미래를 받아들일 것인가.'
		}
	],

	act_summary: {
		intro: '지옥 심연에서 죄인들의 절망을 엮는 거대한 직조자. 그 실타래엔 일어나지도 않은 미래가 비친다.',
		rising:
			'엮이는 실마다 비극이 재현되지만, 직조자의 손길엔 악의보다 망설임과 슬픔이 배어 있다. 그의 별자리는 끊기고 어긋나 있다.',
		climax_finale:
			'키스멧은 인류의 참혹한 미래를 뒤집으려다 실패해 유폐된 원초적 직조자였다. 그가 엮으려던 건 저주가 아니라, 끊어내려 했던 운명이었다.'
	}
};
