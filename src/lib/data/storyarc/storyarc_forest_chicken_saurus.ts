import type { StoryArc } from '$lib/types';

export const storyarc_forest_chicken_saurus: StoryArc = {
	act_tone: {
		intro: {
			tension: 1,
			mood: '호기심 가득한, 그러나 불길한 예감',
			narrative_role: '미지의 세계로의 발걸음'
		},
		rising: {
			narrative_role: '진실에 다가서는 위험한 여정',
			tension: 3,
			mood: '점진적인 위협, 혼란과 갈등'
		},
		climax_finale: {
			narrative_role: '모든 진실이 드러나고 운명이 결정되는 순간',
			tension: 5,
			mood: '절망적인 대결, 복수와 생존'
		}
	},
	chapter_name: {
		hindi: 'जंगल की छोटी मुर्गी, प्राचीन डायनासोर की छाया',
		english: 'The Little Forest Chicken, Shadow of an Ancient Dinosaur',
		japanese: '森の小さな鶏、古代恐竜の影',
		french: "La Petite Poule de la Forêt, l'Ombre d'un Dinosaure Ancien",
		chinese: '森林小鸡，远古恐龙之影',
		thai: 'ไก่ป่าตัวน้อย, เงาของไดโนเสาร์โบราณ',
		vietnamese: 'Gà Rừng Nhỏ, Bóng Dáng Khủng Long Cổ Đại',
		spanish: 'El Pequeño Pollo del Bosque, Sombra de un Dinosaurio Antiguo',
		korean: '숲의 작은 닭, 고대 공룡의 그림자'
	},
	scenarioOutline: [
		{
			boss: 'random_boss',
			summary:
				'탐험대는 숲에 도착하고, 평화로운 분위기 속에서 숲의 자연을 즐긴다. NPC 브라켄은 숲의 역사를 설명해주며, 숲에서 발견된 고대 문양의 조각상(f_gfs_01)을 보고 단순한 유물이라고 생각한다. 그때, 탐험대와 함께 온 평범한 닭 한 마리가 다른 작은 동물들을 섬뜩한 눈빛으로 쪼아대는 순간(f_gfs_02)을 목격하지만, 모두 일시적인 현상이라 치부한다.',
			title: '숲의 이상한 평화, 그리고 첫 의문',
			npc: 'bracken',
			act: 'intro',
			order: 1
		},
		{
			boss: 'random_boss',
			summary:
				'탐험대는 숲 속에서 실종된 동물들의 흔적을 쫓는다. NPC 엘라는 숲의 생태계에 대한 지식을 바탕으로 단서를 찾으려 하지만, 일반적인 맹수의 소행으로 보기 힘든 기묘한 상황에 당황한다. 숲의 오래된 전설(f_gfs_03)이 다시금 언급되기 시작한다. 작고 무해해 보이는 존재가 사실은 강력한 고대 존재의 화신이라는 내용이 탐험대원들 사이에 퍼진다.',
			title: '사라지는 그림자, 그리고 고대 전설의 속삭임',
			npc: 'ela',
			act: 'rising',
			order: 2
		},
		{
			order: 3,
			act: 'rising',
			npc: 'cedar',
			title: '감춰진 위협, 드러나는 단서들',
			boss: 'random_boss',
			summary:
				'탐험대는 숲의 깊은 곳으로 더 들어가고, 특정 구역에서 이상하리만큼 동물의 흔적이 적고 오래된 뼈 조각들(f_gfs_04)을 발견한다. NPC 시더는 이 뼈들이 일반적인 맹수가 아닌, 훨씬 거대하고 고대적인 존재의 것임을 직감한다. 숲 깊은 곳에서 고대 문양의 또 다른 조각상(f_gfs_01 reveal)을 발견하고, 이것이 단순한 장식이 아닌 변신을 암시하는 것임을 깨닫는다. 긴장감이 고조된다.'
		},
		{
			order: 4,
			act: 'rising',
			npc: 'ivy',
			title: '배신자의 그림자, 그리고 뒤바뀐 운명',
			boss: 'random_boss',
			summary:
				'숲의 이상 현상에 대한 조사를 계속하던 중, NPC 아이비는 탐험대 사이에 숨어있는 닭의 기이한 행동을 포착한다. 닭이 단순한 동물이 아니라, 자신들을 감시하고 있다는 섬뜩한 의심이 싹튼다. 탐험대는 고대 생명체의 존재에 대한 확신을 가지게 되며, 닭에 대한 의심이 증폭되지만, 증거를 찾기 어렵다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			npc: 'bracken',
			title: '복수의 시간, 고대 공룡의 포효',
			boss: 'pool_017',
			summary:
				"탐험대는 숲의 가장 깊은 곳, 거대한 원시 유적에 도달한다. NPC 브라켄은 유적의 봉인을 해제하려던 중, 갑자기 닭이 이상한 울음소리를 내며 거대한 '치킨-사우루스'로 변신한다. 과거 닭의 섬뜩한 눈빛(f_gfs_02 reveal)이 바로 지금 이 순간을 위한 것이었음을 깨닫는다. 브라켄이 이야기했던 숲의 오래된 전설(f_gfs_03 reveal)이 단순한 미신이 아니라, 눈앞의 치킨-사우루스를 예언한 것임을 확인한다. 치킨-사우루스의 본거지에서 발견된 거대한 육식 공룡의 뼈(f_gfs_04 reveal)는 닭이 단순한 동물이 아님을 명백히 보여주는 증거였다. 생존을 위한 처절한 싸움이 시작된다."
		}
	],
	protagonist_goal:
		'숲의 평화를 지키고 숨겨진 위협으로부터 동료들을 보호한다. 동시에 숲에 숨겨진 진실과 고대 생명체의 비밀을 파헤친다.',
	id: 'Chicken_saurus',
	rising_count: 3,
	final_boss: {
		appearance_npc:
			'A small, unremarkable chicken wandering the forest floor. Fluffy white feathers, beady black eyes, pecking at the ground. Completely harmless. Nobody gives it a second glance',
		name: 'Chicken-Saurus',
		id: 'chicke-saurus',
		surface_identity: '숲을 돌아다니는 평범한 닭. 탐험대와 함께 걸어온 무해한 존재',
		twist:
			'“꼬끼오.” 쿠는 변신 직전까지 그냥 닭이다. 탐험대가 방심한 순간 — 변신. “그동안 잘도 치킨을 먹어왔지. 이번엔 내가 너희를 먹을 차례다.',
		motivation: '그동안 잘도 먹어왔지. 이번엔 내 차례다',
		true_identity:
			'수천 년 전 공룡의 마지막 후손. 인간에게 포식당해온 세월을 기억하는 존재. 복수의 때를 기다려왔다',
		appearance_boss:
			'거대한 육식 공룡의 모습으로 변모. 날카로운 발톱과 이빨, 압도적인 크기로 숲을 뒤흔드는 위협적인 존재.'
	},
	act_summary: {
		intro:
			'평화로워 보이는 숲에 도착한 탐험대. 숲의 역사를 들으며 고대 문양의 조각상을 보지만, 그 의미를 알지 못한다. 그러나 우연히 목격한 닭의 섬뜩한 모습은 미묘한 불길함을 드리운다.',
		climax_finale:
			"탐험대는 숲의 가장 깊은 원시 유적에 도달하고, 그곳에서 평범해 보이던 닭이 고대 공룡 '치킨-사우루스'로 변신하는 충격적인 진실을 마주한다. 모든 복선이 회수되며, 인간에 대한 복수를 꿈꾸는 치킨-사우러스와의 처절한 생존 싸움이 시작된다.",
		rising:
			'숲 속에서 동물들이 사라지는 기이한 현상과 함께 오래된 전설이 떠돈다. 탐험대는 숲 깊은 곳에서 거대한 존재의 흔적과 고대 조각상을 발견하며, 닭에 대한 의심을 키워나간다. 점차 진실에 다가가며 긴장감이 고조된다.'
	},
	global_foreshadowing: [
		{
			id: 'f_gfs_01',
			reveal_act: 'rising',
			hint: '숲에서 발견된 고대 문양의 조각상. 닭 모양과 알 모양의 기묘한 조화가 돋보인다.',
			reveal_room: 7,
			reveal_context:
				'숲 깊은 곳에서 발견된 또 다른 조각상. 이 조각상이 단순한 장식이 아니라, 고대 생명체의 변신을 암시하는 것임을 깨닫는다.',
			plant_act: 'intro',
			plant_room: 3
		},
		{
			hint: '평화로운 닭이 다른 작은 동물들을 위협하듯 쪼아대는 순간 목격. 섬뜩한 눈빛이 스쳐 지나간다.',
			reveal_room: 9,
			reveal_context:
				'최종 보스가 변신하는 순간, 과거 닭의 섬뜩한 눈빛이 바로 지금 이 순간을 위한 것이었음을 깨닫는다.',
			plant_act: 'intro',
			plant_room: 5,
			id: 'f_gfs_02',
			reveal_act: 'climax_finale'
		},
		{
			reveal_act: 'climax_finale',
			id: 'f_gfs_03',
			plant_room: 2,
			plant_act: 'rising',
			reveal_room: 10,
			reveal_context:
				'브라켄이 이야기했던 전설이 단순한 미신이 아니라, 눈앞의 치킨-사우루스를 예언한 것임을 깨닫는다.',
			hint: '숲의 오래된 전설에 대한 이야기. 작고 무해해 보이는 존재가 사실은 강력한 고대 존재의 화신이라는 내용.'
		},
		{
			id: 'f_gfs_04',
			reveal_act: 'climax_finale',
			reveal_room: 8,
			reveal_context:
				'치킨-사우루스의 본거지에서 발견된 거대한 육식 공룡의 뼈. 닭이 단순한 동물이 아님을 명백히 보여주는 증거.',
			hint: '숲의 특정 구역에서 이상하리만큼 동물의 흔적이 적고, 오래된 뼈 조각들이 발견된다.',
			plant_room: 4,
			plant_act: 'rising'
		}
	],
	world: {
		rule: '숲의 포식자와 피식자 관계는 언제든 뒤바뀔 수 있다. 보이는 것이 전부가 아니며, 약해 보이는 존재 속에 상상할 수 없는 힘이 숨겨져 있을 수 있다.',
		setting:
			'울창한 숲, 겉으로는 평화롭지만 고대 생명체의 숨결이 살아 숨 쉬는 곳. 인간의 발길이 닿지 않는 깊은 곳에는 원시적인 신비가 가득하다.',
		secret:
			'수천 년 전 멸종된 줄 알았던 고대 공룡의 마지막 후손이 숲에 숨어 지내며 인간에 대한 복수의 때를 기다리고 있다. 그들은 평범한 동물로 위장하여 살아왔다.'
	},
	npc_roles: {
		ivy: {
			role: '예리한 관찰자, 숨겨진 진실 추적',
			arc: '4화에서 탐험대 사이에 숨어있는 닭의 기이한 행동을 포착하고, 보스의 정체에 대한 의심을 처음으로 제기하는 역할.'
		},
		ela: {
			role: '숲의 생태학자, 과학적 접근의 한계',
			arc: '2화에서 실종된 동물들의 흔적을 과학적으로 분석하려 하지만, 기묘한 상황에 부딪히며 과학적 설명의 한계를 느끼는 역할.'
		},
		bracken: {
			role: '숲의 안내자이자 고대 지식의 수호자',
			arc: '1화에서 숲의 역사를 설명하며 고대 유물에 대한 무지를 보여주지만, 5화에서 유적의 봉인을 해제하려다 보스의 변신을 목격하고 전설의 진실을 깨닫는 역할.'
		},
		cedar: {
			role: '직감적인 탐색가, 위험 감지 능력',
			arc: '3화에서 숲 깊은 곳의 이상한 뼈 조각과 고대 조각상을 발견하고, 직감적으로 위험을 감지하며 탐험대가 진실에 다가가도록 돕는 역할.'
		}
	},
	theme: 'forest'
};
