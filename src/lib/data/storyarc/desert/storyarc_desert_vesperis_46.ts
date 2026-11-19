import type { StoryArc } from '$lib/types';

export const storyarc_desert_vesperis_46: StoryArc = {
	"id": "desert_vesperis_46",
	"level": 46,
	"chapter_name": {
		"spanish": "Arca Sellada",
		"chinese": "封印圣柜",
		"thai": "หีบศิลา",
		"french": "L'Arche",
		"japanese": "封印の聖櫃",
		"vietnamese": "Hòm Phong Ấn",
		"english": "Sealed Ark",
		"korean": "봉인된 성궤",
		"hindi": "गुप्त संदूक"
	},
	"theme": "desert",
	"world": {
		"setting": "사막에 있는 버려진 사원",
		"how": "베스페리스가 사원의 무기를 모두 삼켜 봉인하고 있기 때문이다.",
		"secret": "성궤에 갇힌 수도승 베스페리스는 싸움에 절망하여 스스로 성궤가 된 검객이다. 검을 땅에 꽂고 손을 떼야만 사원의 문이 열린다.",
		"rule": "검을 칼집에서 뽑아 들면 사원 전체가 진동하고 입구가 굳게 닫힌다."
	},
	"protagonist_goal": "사원의 굳게 닫힌 입구를 열고 탈출해야 한다. 사원에 갇힌 채 탈출구를 찾지 못하면 모래 폭풍 속에서 굶어 죽기 때문이다.",
	"boss_name_korean": "베스페리스",
	"act_tone": {
		"intro": {
			"narrative_role": "사원에 갇혀 중심부로 향하는 단계",
			"mood": "혼란스럽고 막막한 분위기",
			"tension": 1
		},
		"rising": {
			"mood": "의구심과 전설이 얽힌 분위기",
			"narrative_role": "성궤의 진짜 소문과 해법을 파악하는 단계",
			"tension": 3
		},
		"climax_finale": {
			"narrative_role": "검을 내려놓아 베스페리스의 분노를 가라앉히는 단계",
			"tension": 5,
			"mood": "비통하고 치열한 분위기"
		}
	},
	"final_boss": {
		"id": "GoldenReliquary_Vesperis_V1",
		"name": "Vesperis",
		"appearance_boss": "바랜 사암과 라피스라줄리로 장식된 거대한 성궤를 짊어진 수도승의 모습이다. 수도승의 몸은 성궤와 하나로 굳어 있고 주변으로 부서진 검 조각이 떠돈다.",
		"surface_identity": "사막의 버려진 사원에 놓인 성궤와 이를 지키는 수도승입니다. 자격을 갖춘 자에게 무적의 힘과 가호를 내려주는 성물로 알려져 있습니다.",
		"true_identity": "과거 최고의 경지에 올랐지만 검이 부르는 비극에 절망해 사막으로 떠나온 검객입니다. 세상의 모든 검을 삼켜 봉인하기 위해 스스로 성궤와 한몸이 되었습니다.",
		"motivation": "검을 쥔 자들이 일으킬 피비린내 나는 싸움을 미리 끊어내고 싶어 합니다. 그래서 사원에 발을 들이는 검객들의 무기를 빼앗아 영원히 봉인하려고 합니다.",
		"motive_scene": "검객들이 무참히 서로를 베어 넘기는 현장에서 베스페리스는 비통함에 젖어 세상의 무기를 삼키는 성궤가 되었다.",
		"want": "세상의 모든 무기를 성궤에 삼켜 영원히 봉인하는 것이다.",
		"twist": "은혜를 구하려 다가서면 성궤가 열리며 갇혀 있던 수천 자루의 검 파편이 폭풍처럼 뿜어져 나옵니다. 수도승이 비통한 목소리로 마지막 경고를 내뱉습니다. \"네가 바라는 기적은 이곳에 없다. 네 칼 역시 이 궤에 묻혀 영원히 잠들 것이다!\""
	},
	"global_foreshadowing": [
		{
			"plant_order": 1,
			"reveal_context": "사암 틈에서 새어 나오는 금빛 잔상과 같은 성분임을 확인한다.",
			"id": "foreshadowing_1",
			"reveal_room": 3,
			"hint": "사원 입구의 무기에 금빛 먼지가 묻어 있는 것을 본다.",
			"plant_room": 1
		},
		{
			"id": "foreshadowing_2",
			"hint": "수도승이 가호를 내리기 전에 모든 무기를 바치게 만든다는 소문을 듣는다.",
			"plant_order": 2,
			"reveal_room": 5,
			"reveal_context": "성궤 앞에서 검을 땅에 꽂아야 분노가 멈춘다는 비문을 발견한다.",
			"plant_room": 3
		},
		{
			"plant_room": 5,
			"reveal_room": 9,
			"reveal_context": "검자루가 굳은 묵주와 마찬가지로 무기가 봉인된 흔적임을 확인한다.",
			"plant_order": 3,
			"hint": "라피스라줄리로 단단하게 굳어버린 검을 발견한다.",
			"id": "foreshadowing_3"
		},
		{
			"reveal_context": "성궤와 한몸이 된 보스 베스페리스가 바로 그 전설의 검객임을 확인한다.",
			"id": "foreshadowing_4",
			"plant_room": 9,
			"hint": "수도승이 과거 전쟁을 누비던 최강의 검객이었다는 전설을 듣는다.",
			"reveal_room": 15,
			"plant_order": 4
		}
	],
	"npc_roles": {
		"ashur": {
			"role": "유적의 비문을 읽는 학자",
			"arc": "3화에서 검을 땅에 꽂아야 비극이 멈춘다는 기록을 해석한다."
		},
		"kasai": {
			"role": "오아시스의 정보상",
			"arc": "2화에서 수도승이 방문자의 무기를 바치게 만든다는 소문을 알려준다."
		},
		"dune": {
			"role": "성물의 소문을 전하는 안내자",
			"arc": "1화에서 무기의 소문을 전하고 5화에서 가호를 원하며 성궤로 다가선다."
		},
		"amir": {
			"role": "전설을 들려주는 용병",
			"arc": "4화에서 수도승이 과거 최강의 검객이었다는 전설을 알려준다."
		}
	},
	"scenarioOutline": [
		{
			"order": 1,
			"act": "intro",
			"title": "성물의 소문",
			"boss": "random_boss",
			"npc": "dune",
			"summary": "주인공은 모래 폭풍을 피해 들어온 바위굴에서 성물의 소문을 전하는 듄을 만난다. 듄의 안내로 입구 제단에 꽂힌 검을 뽑아 들자 사원 전체가 진동하며 입구가 굳게 닫힌다. 사원을 지나던 약초꾼은 무모하게 검을 뽑아 사원의 분노를 불렀다며 주인공을 공격한다. 갇혀버린 주인공은 갇힌 길을 열고 사막을 벗어나기 위해 사원의 중심부로 향한다.",
			"place": "사원의 입구 바위굴",
			"random_boss_title": "약초꾼",
			"random_boss_side": "warn",
			"boss_trace": "금빛 먼지가 묻은 무기"
		},
		{
			"order": 2,
			"act": "rising",
			"title": "붉은 모래 계곡",
			"boss": "random_boss",
			"npc": "kasai",
			"summary": "주인공은 탈출구를 찾으려고 오아시스로 이동해 정보상 카사이를 만난다. 카사이는 수도승이 은혜를 베풀기 전 방문자의 무기를 바치게 만든다고 일러준다. 이곳의 사냥꾼은 성궤가 준 가호라며 진실을 덮으려 주인공의 무기를 빼앗으려 든다. 주인공은 성궤가 단순히 가호를 주는 성물이 아닐지도 모른다는 의심을 품는다.",
			"place": "메마른 오아시스",
			"random_boss_title": "사냥꾼",
			"random_boss_side": "ally",
			"boss_trace": "검 문양이 새겨진 사암"
		},
		{
			"order": 3,
			"act": "rising",
			"title": "잿빛 유적 광장",
			"boss": "random_boss",
			"npc": "ashur",
			"summary": "오아시스를 지나 유적 광장에 도달한 주인공은 학자 아슈르를 마주친다. 아슈르가 해석한 비문에는 성궤 앞에서 검을 땅에 꽂고 손을 떼야 비극을 멈춘다고 적혀 있다. 광장의 상인은 검을 지닌 자는 재앙을 부른다며 길을 막아서며 달려든다. 주인공은 검을 내려놓는 법을 되새기며 중앙 사원으로 발걸음을 옮긴다.",
			"place": "모래 유적 광장",
			"random_boss_title": "상인",
			"random_boss_side": "warn",
			"boss_trace": "라피스라줄리로 굳은 검"
		},
		{
			"order": 4,
			"act": "rising",
			"title": "굳어버린 회랑",
			"boss": "random_boss",
			"npc": "amir",
			"summary": "중앙 사원으로 이어지는 통로에서 주인공은 용병 아미르를 만난다. 아미르는 이 사원의 수도승이 실은 싸움에 절망하여 스스로 사원에 들어간 전설적인 검객이라는 소문을 들려준다. 회랑을 지키는 문지기는 수도승의 성궤를 보호하겠다며 주인공의 무기를 내놓으라고 공격한다. 주인공은 그 검객이 세상의 모든 무기를 삼키려 한다는 사실을 예감한다.",
			"place": "통곡의 회랑",
			"random_boss_title": "문지기",
			"random_boss_side": "ally",
			"boss_trace": "검자루가 굳은 묵주"
		},
		{
			"order": 5,
			"act": "climax_finale",
			"title": "영원의 봉인",
			"boss": "pool_411",
			"npc": "dune",
			"summary": "제단에 다다르자 따라온 듄이 성궤를 향해 가호를 청하고 성궤가 열리며 수천 자루의 검 파편이 폭풍처럼 뿜어져 나온다. 성궤와 한몸이 된 검객 베스페리스가 비통한 눈빛으로 무기를 탐내는 주인공을 향해 사납게 검기를 쏟아낸다. 주인공은 치열한 격투 끝에 검을 땅에 꽂고 손을 뗀다. 베스페리스의 분노가 가라앉고 굳게 닫혔던 사원의 문이 천천히 열린다.",
			"place": "성궤의 제단"
		}
	],
	"act_summary": {
		"rising": "주인공은 성궤에 얽힌 소문과 비문을 접하며 검을 내려놓아야 분노를 멈출 수 있음을 깨닫는다.",
		"climax_finale": "주인공은 성궤에서 뿜어져 나오는 검기를 견뎌내고 검을 땅에 꽂아 닫힌 문을 연다.",
		"intro": "주인공은 제단의 검을 뽑았다가 사원에 갇히고 탈출구를 찾아 중심부로 향한다."
	}
};
