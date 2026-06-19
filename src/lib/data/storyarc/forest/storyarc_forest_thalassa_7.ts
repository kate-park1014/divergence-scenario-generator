import type { StoryArc } from '$lib/types';

export const storyarc_forest_thalassa_7: StoryArc = {
	id: 'forest_thalassa_7',
	level: 7,
	chapter_name: {
		korean: '하나가 되는 평화',
		english: 'The Peace of Oneness',
		japanese: '一つになる平和',
		chinese: '合一的和平',
		french: "La Paix de l'Unité",
		spanish: 'La Paz de la Unidad',
		vietnamese: 'Sự Bình Yên của Hợp Nhất',
		thai: 'สันติแห่งการเป็นหนึ่งเดียว',
		hindi: 'एकता की शांति'
	},
	theme: 'forest',
	rising_count: 3,

	world: {
		setting:
			'숲 깊은 곳, 슬픈 목소리로 생명의 덧없음을 노래하며 상처를 치유하는 수액을 내어주는 고대의 나무 정령이 있다.',
		rule: '그 수액에 닿은 자는 고통이 사라지고 평온해진다 — 그리고 점점 숲에서 자신을 잃어간다.',
		secret:
			'정령은 광기에 물든 대주술사 탈라사다. 그녀가 말하는 치유와 평화란, 모든 개별 생명을 뿌리의 집단 의식으로 녹여 하나로 만드는 동화(同化)다.'
	},

	protagonist_goal: '상처 입은 자들을 치유한다는 숲의 정령을 찾아, 그 치유의 끝에 무엇이 기다리는지 밝혀라.',

	act_tone: {
		intro: {
			mood: '자애로운 위안',
			tension: 1,
			narrative_role: '슬픈 목소리로 위로하며 상처를 치유해주는 나무 정령. 그 자비는 거부할 수 없을 만큼 따뜻하다.'
		},
		rising: {
			mood: '녹아드는 평온',
			tension: 3,
			narrative_role: '치유받은 자들이 고통과 함께 자기 자신마저 잃어간다. 평온이 곧 소멸로 향한다.'
		},
		climax_finale: {
			mood: '질식하는 포옹',
			tension: 5,
			narrative_role: '치유의 수액이 맹독으로 변하고, 뿌리가 모두를 끌어안는다. 그녀의 평화는 끝없는 동화다.'
		}
	},

	final_boss: {
		id: 'RootMother_Thalassa_V1',
		name: 'Thalassa',
		appearance:
			"거대한 덩치에 뒤틀린 고목을 연상시키는 보스는, 굵고 울퉁불퉁한 뿌리들과 낡은 아마존족의 의식용 천 조각들이 섬뜩하게 엉겨 붙어 몸통을 이룬다. 눅눅한 흙과 축축한 이끼로 벌어진 거대한 입에서는 때때로 우유빛 수액이 흘러내리고, 그 안쪽으로는 형광 버섯처럼 이글거리는 두 개의 열병 걸린 눈이 섬뜩하게 빛난다. 주변으로는 끊임없이 꿈틀거리는 덩굴들이 기어 다니는데, 그 끝에는 종종 사람의 손처럼 생긴 기괴한 촉수들이 달려 있어 보는 이의 오금을 저리게 한다. 이 모든 것에서 뿜어져 나오는 썩어가는 흙냄새와 축축한 습기가 탐험대의 숨통을 조인다.",
		surface_identity:
			"깊은 숲 속에서 만나는 고대 나무의 정령. 슬픔에 잠긴 목소리로 생명의 덧없음과 대지의 평온을 이야기하며, 상처 입은 자들을 치유하는 신비로운 수액을 흘려 보내는 듯하다.",
		true_identity:
			"한때 존경받던 아마존족의 대주술사 '탈라사'가 광기에 물든 모습. 쇠퇴해가는 대지를 '치유'하려는 필사적인 열망과 금지된 의식으로 인해 스스로의 인간성을 포기하고 숲의 가장 깊고 타락한 부분과 하나가 되었다. 그녀의 치유의 손길은 이제 모든 것을 집어삼키는 질식하는 포옹이 되었고, 그녀가 말하는 평화는 끝없는 동화(同化)를 의미한다.",
		motivation:
			"모든 개별적인 생명을 대지로 돌려보내, 뿌리의 집단 의식 속으로 흡수함으로써 진정한 '치유'와 영원한 통일을 이루고자 한다. 모든 고통과 부패를 막을 유일한 방법은 모든 것을 하나로 녹여내는 것이라고 믿으며, 이를 '자비로운' 행위라고 착각한다.",
		twist:
			"탈라사가 서서히 몸을 일으키자, 그녀의 거대한 몸통을 이루던 덩굴과 뿌리들이 땅속에서 솟아나 탐험대를 향해 미친 듯이 뻗어 나온다. 그녀가 흘리던 '치유의 수액'은 순식간에 탐험대의 발밑 흙을 부식시키는 맹독으로 변한다.\n\"아, 드디어 왔구나, 내 작은 희생양들…! 두려워 마라, 고통은 잠시뿐이니. 너희의 모든 기억과 존재는 이 뿌리 속에서 영원히 살아 숨 쉴 것이다! 진정한 평화는… 하나가 되는 것! 크하하하하! 전부! 전부 내게로 돌아와라…!\"\n그녀의 울음 같던 목소리는 광기 어린 웃음소리로 변모하며, 숲 전체가 뒤틀린 뿌리들의 격렬한 진동으로 울부짖는 듯하다."
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '치유받은 자들이 하나같이 멍하니 같은 말을 되뇐다 — "이제 평화로워."',
			plant_act: 'intro',
			plant_room: 2,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '개별 의식이 집단으로 녹아드는 동화의 첫 단계였다.'
		},
		{
			id: 'fs_02',
			hint: '치유의 수액이 닿은 자리에 작은 뿌리가 돋아난다.',
			plant_act: 'rising',
			plant_room: 3,
			reveal_act: 'climax_finale',
			reveal_room: 12,
			reveal_context: '동화가 영혼이 아니라 육체에서부터 시작되고 있었다.'
		},
		{
			id: 'fs_03',
			hint: '정령 주변 땅에 사람 손을 닮은 촉수들이 묻혀 있다.',
			plant_act: 'rising',
			plant_room: 6,
			reveal_act: 'climax_finale',
			reveal_room: 14,
			reveal_context: '이미 그녀에게 녹아든 자들의 마지막 형상이었다.'
		},
		{
			id: 'fs_04',
			hint: '그녀는 돌아오라고만 말하며 결코 보내주지 않는다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 13,
			reveal_context: '그녀에게 죽음도 이별도 없다 — 오직 흡수뿐이었다.'
		}
	],

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '치유의 수액',
			boss: 'random_boss',
			npc: 'bracken',
			summary:
				'상처 입은 자들을 치유한다는 나무 정령을 찾아간다. 브라켄이 그 수액으로 상처를 씻는다. 고통이 사라지고 평온이 찾아온다 — 너무 쉽게.'
		},
		{
			order: 2,
			act: 'rising',
			title: '평화로워, 라는 말',
			boss: 'random_boss',
			npc: 'cedar',
			summary:
				'치유받은 자들이 멍한 얼굴로 같은 말만 되뇐다 — "이제 평화로워." 시더가 불안해한다. 고통만 사라진 게 아니다. 그들 자신이 흐릿해지고 있다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '돋아나는 뿌리',
			boss: 'random_boss',
			npc: 'glen',
			summary:
				'수액이 닿은 자리에서 작은 뿌리가 살갗을 뚫고 돋아난다. 글렌이 경악한다 — 치유가 아니라, 몸이 나무에 먹혀들고 있다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '손을 닮은 것들',
			boss: 'random_boss',
			npc: 'briar',
			summary:
				'정령 주변 땅을 파헤친 브라이어가 사람 손을 닮은 촉수들을 발견한다. 이미 녹아든 자들의 마지막 형상. 그녀는 아무도 보내준 적이 없다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '하나가 되는 평화',
			boss: 'pool_RootMother_Thalassa_V1',
			npc: 'bracken',
			summary:
				'탈라사가 일어서자 치유의 수액이 맹독으로 변하고 뿌리가 모두를 끌어안으려 뻗는다. "진정한 평화는 하나가 되는 것!" 그녀가 믿는 자비는 모든 생명을 녹여 없애는 동화였다. 끝낼 것인가, 그 포옹에 삼켜질 것인가.'
		}
	],

	act_summary: {
		intro: '슬픈 목소리로 상처를 치유해주는 나무 정령. 그 자비는 거부하기 힘들다.',
		rising:
			'치유받은 자들이 자기 자신을 잃어간다. 수액 닿은 자리엔 뿌리가 돋고, 땅속엔 사람 손을 닮은 촉수가 묻혀 있다.',
		climax_finale:
			'정령은 광기에 물든 대주술사 탈라사. 그녀의 치유와 평화란 모든 생명을 하나로 녹이는 동화였다.'
	}
};
