import type { StoryArc } from '$lib/types';

export const storyarc_hell_kirantej_2: StoryArc = {
	id: 'hell_kirantej_2',
	level: 2,
	chapter_name: {
		korean: '지옥의 대마법사: 뒤틀린 별자리',
		english: 'Archmage of Hell: The Twisted Constellation',
		japanese: '地獄の大魔法使い：歪んだ星座',
		chinese: '地狱的大魔法师：扭曲的星座',
		french: "L'Archimage de l'Enfer : La Constellation Tordue",
		spanish: 'El Archimago del Infierno: La Constelación Retorcida',
		vietnamese: 'Đại Pháp Sư Địa Ngục: Chòm Sao Méo Mó',
		thai: 'จอมเวทแห่งนรก: กลุ่มดาวที่บิดเบี้ยว',
		hindi: 'नरक का महाजादूगर: मुड़ा हुआ नक्षत्र'
	},
	theme: 'hell',
	rising_count: 3,

	world: {
		setting:
			'지옥 가장 깊은 곳의 끝없는 서고. 길 잃은 영혼들에게 힘으로 향하는 길과 탈출의 지식을 약속하는 자비로운 대마법사가 그곳을 지킨다.',
		rule: '지옥의 지식은 결코 공짜가 아니다. 가르침을 받은 자는 자신도 모르게 무언가를 내준다.',
		secret:
			'대마법사는 우주의 법칙을 다시 쓰려다 추방당한 천상의 찬탈자다. 그가 인도하는 자들의 정수를 수확해 그 절망을 연료 삼아, 지옥에서 승천하여 모든 차원을 정복하려 한다.'
	},

	protagonist_goal: '힘과 탈출의 길을 알려준다는 지옥 서고의 대마법사를 찾아, 그가 베푸는 지식의 진짜 댓가를 밝혀라.',

	act_tone: {
		intro: {
			mood: '경외와 호기심',
			tension: 1,
			narrative_role: '지옥 서고를 지키는 박식한 대마법사. 그는 탈출의 실마리를 아는 유일한 자처럼 보인다.'
		},
		rising: {
			mood: '잠식되는 대가',
			tension: 3,
			narrative_role: '가르침을 받을수록 무언가 빠져나간다. 별빛 같던 영혼들이 그의 곁에서 시들어간다.'
		},
		climax_finale: {
			mood: '우주적 오만',
			tension: 5,
			narrative_role: '자비로운 학자의 가면이 부서지고, 차원을 집어삼키려는 찬탈자의 본모습이 드러난다.'
		}
	},

	final_boss: {
		id: 'pool_105',
		name: 'Kiran Tej',
		appearance:
			'수많은 저주받은 영혼들의 정수 한가운데 서서, 그는 구원이 아니라 움켜쥐기 위해 천천히 손을 뻗는다. 평온한 가면이 순수한 지적 악의로 부서지며, 금단의 지식을 상징하는 빛나는 문양과 그림자에 휩싸인 거대한 우주적 권능의 존재가 모습을 드러낸다.',
		surface_identity:
			'지옥 서고의 대마법사. 길 잃은 영혼들에게 인도와 어둠의 지식을 베푸는 듯한 자비로운 학자로, 지옥의 미궁 같은 심연 속에서 힘이나 탈출로 향하는 길을 약속한다.',
		true_identity:
			"천상의 찬탈자. 한때 창조와 파괴의 우주 법칙을 다시 쓰려 했던 추방당한 대신비가다. 오만함의 죄로 지옥에 던져진 그는, 이제 자신이 '인도하는' 자들의 정수를 면밀히 수확하여 그들의 절망을 연료 삼아, 지옥의 심연에서 승천하여 옛 우주적 고향을 포함한 모든 차원을 정복하려는 뒤틀린 의식을 행한다.",
		motivation:
			'존재의 근본 구조를 이해하고 조작하려 한 죄로 지옥에 추방된 그는, 이제 자신의 영역에 들어오는 모든 자의 파멸을 설계한다. 균형을 회복하기 위해서가 아니라, 지옥의 문을 찢어 열고 궁극의 우주 설계자로서 자신의 자리를 되찾기 위해 — 모든 차원을 자신의 완벽하게 질서 잡힌, 그러나 더없이 뒤틀린 의지에 굴복시킬 만큼의 힘을 축적하기 위해 영혼과 지식을 면밀히 수집한다.',
		twist:
			"수많은 저주받은 영혼들의 정수 한가운데 서서, 그는 구원이 아니라 움켜쥐기 위해 천천히 손을 뻗는다. '어리석은 필멸자들,' 그가 비웃는다. 평온한 가면이 순수한 지적 악의로 부서진다. '우주의 대신비가가 정녕 이런 곳에 갇혀 있으리라 믿었느냐? 이곳은… 그저 나의 다음 관측소일 뿐. 그리고 너희는, 내 위대한 설계의 마지막이자 핵심이 될 별이지!'"
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '대마법사에게 지식을 얻은 영혼들이, 그 직후부터 별빛이 꺼지듯 희미해진다.',
			plant_act: 'intro',
			plant_room: 2,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '가르침의 댓가로 그들의 정수가 그에게 수확되고 있었다.'
		},
		{
			id: 'fs_02',
			hint: '서고의 천장에 새겨진 별자리가, 볼 때마다 조금씩 자리를 옮겨 뒤틀려 간다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 14,
			reveal_context: '그가 우주의 법칙 자체를 자기 설계대로 다시 쓰고 있다는 징후였다.'
		},
		{
			id: 'fs_03',
			hint: '그는 지옥에 갇힌 자라기엔, 이곳을 너무나 편안하게 자기 집처럼 여긴다.',
			plant_act: 'rising',
			plant_room: 6,
			reveal_act: 'climax_finale',
			reveal_room: 13,
			reveal_context: '지옥은 그에게 감옥이 아니라, 승천을 준비하는 다음 관측소였다.'
		},
		{
			id: 'fs_04',
			hint: '그는 탐험대를 "마지막 한 조각"이라 부르며 유독 반긴다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 12,
			reveal_context: '탐험대의 정수가 그의 의식을 완성할 마지막 별이었기 때문이다.'
		}
	],

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '서고의 학자',
			boss: 'random_boss',
			npc: 'ash',
			summary:
				'지옥 깊은 곳 서고에서 박식한 대마법사를 만난다. 그는 탈출의 길을 아는 유일한 자처럼 친절히 지식을 내어준다. 애쉬가 그 호의에 솔깃해한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '지식의 댓가',
			boss: 'random_boss',
			npc: 'brim',
			summary:
				'가르침을 받은 영혼들이 그 직후부터 별빛 꺼지듯 희미해진다. 브림이 불안해한다 — 공짜처럼 보였던 지식에, 보이지 않는 값이 매겨져 있다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '뒤틀리는 별자리',
			boss: 'random_boss',
			npc: 'mara',
			summary:
				'서고 천장의 별자리가 볼 때마다 자리를 옮겨 뒤틀려 간다. 마라가 깨닫는다 — 그는 지식을 읽는 게 아니라, 법칙 자체를 자기 손으로 고쳐 쓰고 있다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '마지막 한 조각',
			boss: 'random_boss',
			npc: 'vex',
			summary:
				'대마법사가 탐험대를 "마지막 한 조각"이라 부르며 유독 반긴다. 벡스가 소름 돋는다. 이 환대는 손님을 위한 게 아니라, 재료를 위한 것이다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '지옥의 대마법사',
			boss: 'pool_105',
			npc: 'ash',
			summary:
				'자비로운 학자의 가면이 부서지며 우주적 권능의 본모습이 드러난다. "너희는 내 위대한 설계의 마지막이자 핵심이 될 별이지!" 그는 추방당한 천상의 찬탈자였고, 정수를 모아 승천하려 했다. 그 설계를 끊을 것인가, 그의 별이 될 것인가.'
		}
	],

	act_summary: {
		intro: '지옥 서고를 지키는 박식한 대마법사. 그는 탈출의 길을 아는 유일한 자처럼 지식을 내어준다.',
		rising:
			'가르침을 받은 영혼들이 별빛처럼 꺼져간다. 서고의 별자리는 뒤틀리고, 그는 지옥을 감옥이 아닌 자기 집처럼 여긴다.',
		climax_finale:
			'대마법사는 추방당한 천상의 찬탈자. 정수를 수확해 승천하여 모든 차원을 정복하려 했고, 탐험대는 그 의식의 마지막 별이었다.'
	}
};
