import type { StoryArc } from '$lib/types';

export const storyarc_forest_conduit_8: StoryArc = {
	id: 'forest_conduit_8',
	level: 8,
	chapter_name: {
		korean: '전달자',
		english: 'The Conduit',
		japanese: '伝達者',
		chinese: '传递者',
		french: 'Le Passeur',
		spanish: 'El Conducto',
		vietnamese: 'Kẻ Truyền Tin',
		thai: 'ผู้ส่งสาร',
		hindi: 'संवाहक'
	},
	theme: 'forest',
	rising_count: 3,

	world: {
		setting:
			'짙은 숲의 어둠 속, 숨겨진 비밀과 귀한 정보를 건네준다는 정체불명의 소식통이 떠돈다. 길 잃은 자들은 그를 찾아 거래를 청한다.',
		rule: '그에게서 정보를 얻은 자는 반드시 댓가를 치른다 — 무엇을 내주었는지조차 기억하지 못한 채.',
		secret:
			'소식통의 정체는 붕괴한 아마존 정보 네트워크의 파편이 숲과 융합해 태어난 생체-데이터 유기체다. 그는 정보를 전달하는 게 아니라, 거래하는 모든 것을 데이터로 흡수해 자기 망을 넓힌다. 의뢰인 자신이 곧 댓가다.'
	},

	protagonist_goal: '숲 속 정보 밀거래상의 그림자를 좇아, 그가 요구하는 댓가의 정체와 사라진 의뢰인들의 행방을 밝혀라.',

	act_tone: {
		intro: {
			mood: '은밀한 거래',
			tension: 1,
			narrative_role: '숲의 비밀을 사고파는 정체불명의 소식통. 그 거래는 솔깃하지만 댓가가 모호하다.'
		},
		rising: {
			mood: '대가의 잠식',
			tension: 3,
			narrative_role: '거래한 자들이 무언가를 잃는다 — 기억을, 흔적을. 소식통의 정보망이 숲을 삼켜간다.'
		},
		climax_finale: {
			mood: '정보가 된 자들',
			tension: 5,
			narrative_role: '소식통은 전달자가 곧 소식임을 드러낸다. 의뢰인들은 거래의 상대가 아니라, 흡수된 데이터였다.'
		}
	},

	final_boss: {
		id: 'WhisperDealer_Conduit_V1',
		name: 'Conduit',
		appearance:
			"짙은 숲의 어둠 속, 축축한 이끼와 시든 잎사귀가 얽힌 낡은 외투를 걸친 형체가 서 있다. 그 실루엣은 그림자처럼 희미하여, 때로는 거대한 나무 줄기의 일부 같기도, 때로는 홀로 선 여행자 같기도 하다. '얼굴'이라 할 만한 곳에는 두 개의 냉정하고 희미한 푸른빛이 가끔 번뜩일 뿐, 그 외에는 깊은 공허만이 자리한다. 주변의 공기는 기묘하게 차갑고, 모든 소음을 빨아들이는 듯 고요하다.",
		surface_identity:
			"한때 아마존 부족 내 정보 밀거래를 주선하던 핵심 소식통의 그림자가 숲에 남아 떠도는 존재. 길 잃은 자들에게 숲의 숨겨진 비밀이나 귀한 정보를 건네주는 대신, 알 수 없는 댓가를 요구한다고 알려져 있다.",
		true_identity:
			"실상은 아마존 사회의 붕괴 속에서 버려진 고대 정보 네트워크의 파편들이 숲의 생명력과 융합하여 재탄생한 비인간적인 '생체-데이터 유기체'이다. 이 존재는 숲 전체의 모든 소리와 움직임, 그리고 과거 아마존의 어두운 비밀까지도 데이터로 흡수하여 유통하는, 살아있는 정보의 암시장 그 자체다.",
		motivation:
			"Conduit는 숲의 모든 유기체와 비유기체적 정보를 끊임없이 수집하고 분석하며, 이를 통해 자신의 네트워크를 확장하고 심화시키는 것이 유일한 존재 이유다. 탐험대 역시 숲의 새로운 정보 흐름이자, 언제든 해체되어 시스템에 편입될 수 있는 '데이터 덩어리'로 간주한다.",
		twist:
			"탐험대가 절박하게 '진실'을 요구하며 Conduit를 몰아붙일 때, 숲의 모든 그림자가 꿈틀거리며 수많은 눈동자로 변한다. Conduit의 희미한 푸른빛이 더욱 강렬하게 번뜩이며, 그 목소리는 숲의 모든 메아리와 뒤섞여 묵직하게 울린다.\n\"당신들은 그저 '소식통'을 찾았을 뿐이지. 하지만 '전달자'가 곧 '소식' 그 자체일 수도 있다는 생각은 안 해봤나?\"\n동시에 숲의 나무들 사이로 아마존 부족의 잔혹한 배신과 은밀한 거래, 그리고 탐험대 동료들의 가장 깊은 죄악이 담긴 이미지들이 빠르게 스쳐 지나간다. Conduit는 탐험대가 찾던 모든 것을 알고 있었고, 그들의 발버둥마저도 자신의 거대한 정보망을 위한 데이터로 조용히 흡수하고 있었던 것이다."
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '소식통과 거래한 자들이 자기가 무엇을 내줬는지 기억하지 못한다.',
			plant_act: 'intro',
			plant_room: 2,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '기억 자체가 댓가로 흡수되고 있었다.'
		},
		{
			id: 'fs_02',
			hint: '숲의 소리와 그림자가 소식통 주변에서만 기묘하게 빨려든다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 13,
			reveal_context: '그가 숲의 모든 정보를 실시간으로 삼키고 있었다.'
		},
		{
			id: 'fs_03',
			hint: '사라진 의뢰인들의 이름이 소식통의 정보 목록 속에 데이터처럼 적혀 있다.',
			plant_act: 'rising',
			plant_room: 6,
			reveal_act: 'climax_finale',
			reveal_room: 14,
			reveal_context: '그들은 거래의 상대가 아니라, 거래로 흡수된 항목이었다.'
		},
		{
			id: 'fs_04',
			hint: '소식통은 묻기도 전에 탐험대의 비밀을 이미 알고 있다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 12,
			reveal_context: '전달자가 곧 소식 그 자체였기 때문이다.'
		}
	],

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '소식통',
			boss: 'random_boss',
			npc: 'ivy',
			summary:
				'숲의 비밀을 사고판다는 정체불명의 소식통을 찾아간다. 아이비가 작은 정보 하나를 거래로 얻는다. 댓가가 무엇이었는지는 아무도 묻지 않는다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '잊힌 댓가',
			boss: 'random_boss',
			npc: 'glen',
			summary:
				'거래했던 자들이 자기가 무엇을 내줬는지 기억하지 못한다. 글렌이 소름 돋는다 — 내준 것이 물건이 아니라, 기억 그 자체였다면.'
		},
		{
			order: 3,
			act: 'rising',
			title: '빨려드는 소리',
			boss: 'random_boss',
			npc: 'hazel',
			summary:
				'소식통 주변에서만 숲의 소리와 그림자가 기묘하게 빨려든다. 헤이즐이 깨닫는다 — 그는 정보를 받는 게 아니라, 숲 전체를 삼키고 있다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '명단 속 이름들',
			boss: 'random_boss',
			npc: 'fern',
			summary:
				'페른이 소식통의 정보 목록에서 사라진 의뢰인들의 이름을 발견한다. 그들은 거래의 상대가 아니라, 데이터로 흡수된 항목으로 적혀 있었다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '전달자',
			boss: 'pool_WhisperDealer_Conduit_V1',
			npc: 'ivy',
			summary:
				'진실을 요구하며 몰아붙이자 숲의 모든 그림자가 눈동자로 변한다. "전달자가 곧 소식 그 자체일 수도 있다는 생각은 안 해봤나?" 탐험대의 발버둥마저 그의 정보망에 흡수되고 있었다. 망을 끊을 것인가, 데이터가 될 것인가.'
		}
	],

	act_summary: {
		intro: '숲의 비밀을 사고파는 정체불명의 소식통. 거래는 솔깃하지만 댓가가 모호하다.',
		rising:
			'거래한 자들이 기억과 흔적을 잃는다. 소식통 주변으로 숲의 소리가 빨려들고, 사라진 의뢰인들은 그의 정보 목록 속 항목이 되어 있다.',
		climax_finale:
			'소식통의 정체는 숲과 융합한 생체-데이터 유기체. 전달자가 곧 소식이며, 거래한 모든 것을 흡수해 망을 넓혀왔다.'
	}
};
