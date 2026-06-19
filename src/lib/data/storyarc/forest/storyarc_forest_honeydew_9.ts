import type { StoryArc } from '$lib/types';

export const storyarc_forest_honeydew_9: StoryArc = {
	id: 'forest_honeydew_9',
	level: 9,
	chapter_name: {
		korean: '달콤한 봉인',
		english: 'The Sweet Seal',
		japanese: '甘い封印',
		chinese: '甜蜜的封印',
		french: 'Le Doux Sceau',
		spanish: 'El Dulce Sello',
		vietnamese: 'Dấu Niêm Phong Ngọt Ngào',
		thai: 'ตราประทับอันหอมหวาน',
		hindi: 'मीठी मुहर'
	},
	theme: 'forest',
	rising_count: 3,

	world: {
		setting:
			'숲의 풍요를 상징하는 양봉의 정령이 산다. 그녀는 길 잃고 굶주린 자들에게 황금빛 꿀을 나누어 주는 자애로운 어머니로 전해진다.',
		rule: '그녀의 꿀을 먹은 자는 허기도 아픔도 잊고 깊은 평온에 든다 — 그리고 다시는 깨어나지 않는다.',
		secret:
			'정령은 기근 속 부족을 먹이던 식량 관리인 하니듀의 변질된 잔영이다. 나누는 법을 잊고 저장하고 가두는 본능만 남은 그녀는, 모든 생명을 꿀 속에 박제해 영원히 굶주리지 않게 봉인하는 것을 자비라 믿는다.'
	},

	protagonist_goal: '달콤한 꿀로 굶주린 자들을 달랜다는 양봉의 정령을 찾아, 그 꿀에 잠긴 자들의 진실을 밝히고 깨워내라.',

	act_tone: {
		intro: {
			mood: '달콤한 환대',
			tension: 1,
			narrative_role: '굶주린 자에게 황금빛 꿀을 나누어 주는 자애로운 양봉의 정령. 그 환대는 거절하기 힘들 만큼 달콤하다.'
		},
		rising: {
			mood: '나른한 함정',
			tension: 3,
			narrative_role: '꿀을 먹은 자들이 행복하게 잠든 채 깨어나지 않는다. 달콤한 평온이 서서히 함정으로 드러난다.'
		},
		climax_finale: {
			mood: '꿀에 잠긴 자장가',
			tension: 5,
			narrative_role: '밀랍이 깨지자 꿀에 박제된 자들이 드러난다. 그녀는 자장가를 부르며 모두를 영원한 단잠에 가두려 한다.'
		}
	},

	final_boss: {
		id: 'Beekeeper_Honeydew_V1',
		name: 'Honeydew',
		appearance:
			"거대한 고목의 텅 빈 줄기를 통째로 둥지로 삼은 채, 수만 마리의 벌이 빚어낸 황금빛 밀랍 갑옷을 두른 형체. 머리라 할 곳에는 부서진 도자기 가면이 박혀 있고, 그 틈새로 끈적한 꿀이 눈물처럼 흘러내린다. 양팔 대신 벌집이 주렁주렁 매달린 거대한 가지가 뻗어 있으며, 그 주위를 윙윙거리는 황금빛 벌떼가 후광처럼 맴돈다. 다가서면 달콤하다 못해 머리가 어질해지는 꿀 냄새가 코를 찌른다.",
		surface_identity:
			"숲의 풍요를 상징하는 온화한 양봉의 정령으로 알려져 있다. 길 잃은 자들에게 달콤한 꿀을 나누어 주며 허기와 상처를 달래주는, 자애로운 숲의 어머니라 전해진다.",
		true_identity:
			"기근에 시달리던 아마존 부족의 식량 관리인이었던 '하니듀'의 변질된 잔영이다. 굶주리는 부족을 먹이기 위해 숲의 모든 단 것을 끌어모으던 그녀는, 금지된 의식으로 벌떼와 자신의 영혼을 묶어 영원히 꿀을 만들어 내는 존재가 되었으나, 그 대가로 '나누는 법'을 잊고 오직 '저장하고 가두는' 본능만 남게 되었다.",
		motivation:
			"숲의 모든 생명을 자신의 밀랍 속에 달콤하게 봉인하여 영원히 '굶주리지 않게' 보호하려 한다. 부패하지 않는 꿀 속에 박제하는 것이야말로 진정한 자비이자 풍요라 믿으며, 도망치려는 자들을 배은망덕한 굶주린 아이로 여겨 쫓는다.",
		twist:
			"탐험대가 밀랍 갑옷을 깨뜨리자, 그 안에서 꿀에 잠긴 채 평온히 잠든 수많은 작은 동물과 사람들의 형상이 드러난다. 그들은 죽은 것이 아니라, 영원히 깨어나지 못하는 달콤한 꿈에 갇혀 있을 뿐이다. 도자기 가면이 쩍 갈라지며 꿀에 젖은 목소리가 흘러나온다.\n\"…쉿, 울지 마렴, 아가야… 이제 다시는 배고프지 않을 거야… 이 따뜻하고 달콤한 곳에서… 엄마와 함께… 영원히… 영원히 잠들면 되는 거란다…\"\n벌떼가 일제히 탐험대를 향해 황금빛 폭풍처럼 쏟아지고, 발밑으로는 끈적한 꿀이 차올라 발을 옭아매기 시작한다."
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '꿀을 먹은 자들이 행복하게 웃으며 잠들고는 깨어나지 않는다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 잠은 죽음이 아니라, 영원히 깨지 않는 꿀 속의 봉인이었다.'
		},
		{
			id: 'fs_02',
			hint: '정령 주변 고목 줄기 속에서 황금빛 형상들이 어렴풋이 비친다.',
			plant_act: 'rising',
			plant_room: 3,
			reveal_act: 'climax_finale',
			reveal_room: 14,
			reveal_context: '꿀에 잠긴 채 박제된 동물과 사람들이었다.'
		},
		{
			id: 'fs_03',
			hint: '그녀는 도망치는 자를 배은망덕한 굶주린 아이라 부르며 쫓는다.',
			plant_act: 'rising',
			plant_room: 5,
			reveal_act: 'climax_finale',
			reveal_room: 13,
			reveal_context: '그녀에게 거절은 곧 굶주림으로의 회귀, 막아야 할 위협이었다.'
		},
		{
			id: 'fs_04',
			hint: '부서진 도자기 가면 틈으로 꿀이 눈물처럼 흐른다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 12,
			reveal_context: '인간이었던 하니듀의 회한이 아직 남아 있었다.'
		}
	],

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '황금빛 환대',
			boss: 'random_boss',
			npc: 'cedar',
			summary:
				'굶주린 자에게 꿀을 나누어 준다는 양봉의 정령을 찾아간다. 시더가 달콤한 꿀에 허기를 잊는다. 정령의 환대는 따뜻하고, 거절하기엔 너무 달다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '깨지 않는 잠',
			boss: 'random_boss',
			npc: 'ela',
			summary:
				'꿀을 먹은 자들이 행복하게 웃으며 잠들고는 깨어나지 않는다. 엘라가 흔들어 깨우려 하지만 소용없다. 평온이 너무 깊다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '줄기 속 형상',
			boss: 'random_boss',
			npc: 'briar',
			summary:
				'고목 줄기 속에서 황금빛 형상들이 어렴풋이 비친다. 브라이어가 들여다본다 — 꿀에 잠긴 채 박제된 동물과 사람들이다. 잠든 게 아니라 갇힌 것이다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '굶주린 아이',
			boss: 'random_boss',
			npc: 'bracken',
			summary:
				'도망치려 하자 정령이 브라켄을 "배은망덕한 굶주린 아이"라 부르며 쫓는다. 그녀에게 거절은 곧 굶주림으로의 회귀 — 막아야 할 위협이다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '달콤한 봉인',
			boss: 'pool_Beekeeper_Honeydew_V1',
			npc: 'cedar',
			summary:
				'밀랍 갑옷이 깨지자 꿀에 박제된 자들이 드러난다. 하니듀는 자장가를 부르며 모두를 영원한 단잠에 가두려 한다. "이제 다시는 배고프지 않을 거야." 그 자비를 끝낼 것인가, 달콤한 꿈에 잠길 것인가.'
		}
	],

	act_summary: {
		intro: '굶주린 자에게 황금빛 꿀을 나누어 주는 자애로운 양봉의 정령. 그 환대는 달콤하다.',
		rising:
			'꿀을 먹은 자들이 깨어나지 않는다. 고목 줄기 속엔 꿀에 박제된 자들이 비치고, 정령은 도망치는 자를 굶주린 아이라 부르며 쫓는다.',
		climax_finale:
			'정령은 부족을 먹이던 식량 관리인 하니듀. 나누는 법을 잊은 그녀는 모든 생명을 꿀에 봉인하는 것을 자비라 믿는다.'
	}
};
