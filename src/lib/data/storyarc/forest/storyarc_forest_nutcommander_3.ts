import type { StoryArc } from '$lib/types';

export const storyarc_forest_nutcommander_3: StoryArc = {
	id: 'forest_nutcommander_3',
	level: 3,
	chapter_name: {
		korean: '도토리 요새의 장군',
		english: 'The General of the Acorn Fortress',
		japanese: 'どんぐり要塞の将軍',
		chinese: '橡果要塞的将军',
		french: 'Le Général de la Forteresse de Glands',
		spanish: 'El General de la Fortaleza de Bellotas',
		vietnamese: 'Vị Tướng của Pháo Đài Hạt Sồi',
		thai: 'นายพลแห่งป้อมลูกโอ๊ก',
		hindi: 'बलूत के किले का सेनापति'
	},
	theme: 'forest',
	rising_count: 3,

	world: {
		setting:
			'도토리와 열매가 유난히 풍성하던 숲. 어느 날부터 도토리가 모조리 사라지고, 작은 동물들이 굶주린 채 숲 밖으로 쫓겨나기 시작했다.',
		rule: '숲의 정령들은 가끔 맹세를 어긴 자에게 장난스러운 저주를 내린다고 전해진다.',
		secret:
			'숲을 교란하는 자는 사실 정령의 저주로 딱정벌레가 된 전설의 아마존 사냥꾼 칼리다. 그는 본래의 몸을 되찾아 자신을 저주한 정령에게 복수하기 위해, 도토리를 \'전략 자원\'으로 비축하고 있다.'
	},

	protagonist_goal:
		'숲의 작은 동물들을 쫓아내고 도토리를 싹쓸이하는 정체불명의 교란자를 찾아내, 숲의 균형을 되돌려라.',

	act_tone: {
		intro: {
			mood: '풍요 속 불안',
			tension: 1,
			narrative_role: '풍요롭던 숲에서 도토리가 사라진다. 굶주린 동물들의 흔적. 탐험대가 조사에 나선다.'
		},
		rising: {
			mood: '추적과 황당함',
			tension: 3,
			narrative_role:
				'동물들은 \'거대한 장군\'을 두려워한다. 흔적을 쫓을수록 위협의 정체가 우스꽝스러워진다. 그러나 비축된 도토리의 규모는 섬뜩하다.'
		},
		climax_finale: {
			mood: '허세와 비애',
			tension: 5,
			narrative_role:
				'도토리 요새의 주인은 엄지손가락만 한 딱정벌레. 그러나 그 안에는 저주받은 인간의 자아가 갇혀 있다. 허세 뒤의 비극.'
		}
	},

	final_boss: {
		id: 'Amazonian_NutCommander_V1',
		name: 'NutCommander',
		appearance:
			'울창한 숲 바닥을 기어 다니는, 엄지손가락만 한 검은 갑충. 딱정벌레치고는 꽤나 비대한 몸집에, 나뭇잎으로 대충 만든 미니어처 투구와 마른 풀잎을 엮은 망토를 두르고 있다. 여섯 개의 짧은 다리로 종종걸음 치며 바쁘게 움직이는 모습은 언뜻 보면 무해한 숲속 곤충으로 보이지만, 반짝이는 작은 눈에는 알 수 없는 투지와 광기가 서려 있다.',
		surface_identity:
			'숲 속의 평화로운 생태계를 교란하는, 유난히 공격적이고 영역 의식이 강한 덩치 큰 딱정벌레. 끊임없이 주변의 도토리를 자기 영역으로 쓸어 담으며 다른 작은 동물들을 쫓아낸다.',
		true_identity:
			'과거 전설적인 아마존족 사냥꾼 \'칼리\'였다. 희귀한 숲의 짐승을 쫓아 \'숲과 하나가 되게 해달라\'는 맹세를 했다가, 장난기 많은 숲 정령에게 말 그대로 \'딱정벌레\'로 변해버린 아마존 전사의 기구한 최후다.',
		motivation:
			'자신의 \'영토\'인 숲 바닥의 도토리와 열매들을 \'전략적 자원\'으로 확보하여, 언젠가 본래의 몸을 되찾고 자신을 딱정벌레로 만든 숲 정령에게 복수할 기회를 엿보고 있다.',
		twist:
			'탐험대가 도토리를 긁어모으는 딱정벌레를 제지하자, 녀석이 갑자기 앞발을 들고 부들부들 떨더니 입을 연다. "흥, 미개한 침입자들이 감히 이 \'도토리 요새\'를 넘본단 말인가! 내 본명은 \'칼리\', 아마존 최강의 사냥꾼이었다! 이 볼품없는 몸뚱이에 갇혔을 뿐, 내 영혼은 여전히 불타오른다! 네놈들이 나의 전리품... 아니, 나의 전략적 비축량에 손을 대려 한다면... 죽음을 맛보게 될 것이다! 크와아아앙!" 딱정벌레의 작은 입에서 상상할 수 없는 포효가 터져 나오지만, 정작 주변의 나뭇잎 하나 흔들리지 않는다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '사라진 도토리들이 한 방향으로 끌려간 자국이 있다 — 누군가 \'비축\'하고 있다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 자국의 끝에 거대한 도토리 더미 — \'요새\'가 있었다.'
		},
		{
			id: 'fs_02',
			hint: '굶주린 다람쥐들이 \'장군님\'을 입에 올리며 벌벌 떤다.',
			plant_act: 'rising',
			plant_room: 3,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '동물들이 두려워한 \'위대한 장군\'은 엄지손가락만 한 딱정벌레였다.'
		},
		{
			id: 'fs_03',
			hint: '도토리 더미 사이에서 아마존 문양이 새겨진 낡은 사냥 도구 조각이 나온다.',
			plant_act: 'rising',
			plant_room: 5,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그것은 저주받기 전, 사냥꾼 \'칼리\'였던 시절의 유품이었다.'
		},
		{
			id: 'fs_04',
			hint: '딱정벌레는 공격보다 \'연설\'을 한다 — 마치 누군가에게 말을 거는 듯이.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '벌레의 껍데기 안에 인간의 자아가 그대로 갇혀 있었기 때문이다.'
		}
	],

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '사라진 도토리',
			boss: 'random_boss',
			npc: 'bracken',
			summary:
				'풍요롭던 숲에서 도토리가 한 톨도 남김없이 사라졌다. 브라켄이 굶주린 동물들의 흔적을 보여준다. 도토리들이 한 방향으로 끌려간 자국이 보인다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '굶주린 자들',
			boss: 'random_boss',
			npc: 'briar',
			summary:
				'쫓겨난 동물들이 무리 지어 떨고 있다. 브라이어가 통역하듯 전한다 — "다들 \'장군님\'을 무서워해." 거대한 무언가가 영역을 넓히고 있다는 소문.'
		},
		{
			order: 3,
			act: 'rising',
			title: '도토리 요새',
			boss: 'random_boss',
			npc: 'cedar',
			summary:
				'흔적의 끝에서 산더미 같은 도토리 \'요새\'를 발견한다. 시더가 그 사이에서 아마존 문양이 새겨진 낡은 사냥 도구를 집어 든다. 누군가 오래전 여기 있었다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '장군의 그림자',
			boss: 'random_boss',
			npc: 'ela',
			summary:
				'요새를 지키는 작은 그림자가 끊임없이 무언가를 연설하듯 외친다. 엘라가 귀를 기울인다 — 위협이 아니라, 잃어버린 무언가를 향한 절규처럼 들린다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '도토리 요새의 장군',
			boss: 'pool_Amazonian_NutCommander_V1',
			npc: 'bracken',
			summary:
				'요새의 주인은 엄지손가락만 한 딱정벌레였다. 녀석은 거창하게 자신을 \'아마존 최강의 사냥꾼 칼리\'라 외친다. 허세에 웃던 탐험대는, 그 작은 몸에 갇힌 저주받은 인간의 자아를 마주하고 멈칫한다. 비웃을 것인가, 가엾이 여길 것인가.'
		}
	],

	act_summary: {
		intro: '풍요롭던 숲에서 도토리가 사라졌다. 동물들이 굶주린 채 쫓겨난다.',
		rising: '동물들이 두려워하는 \'장군\'. 흔적을 쫓으니 거대한 도토리 요새와 오래된 아마존의 유품이 나온다.',
		climax_finale: '요새의 주인은 엄지손가락만 한 딱정벌레. 그러나 그 안엔 저주받은 전사의 영혼이 갇혀 있었다. 허세인가, 비극인가.'
	}
};
