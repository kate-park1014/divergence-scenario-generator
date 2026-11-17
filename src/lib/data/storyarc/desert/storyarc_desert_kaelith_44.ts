import type { StoryArc } from '$lib/types';

export const storyarc_desert_kaelith_44: StoryArc = {
	"id": "desert_kaelith_44",
	"level": 44,
	"chapter_name": {
		"korean": "태양을 벤 유리 검객",
		"english": "Sun Slasher",
		"japanese": "ガラスの剣客",
		"chinese": "玻璃剑客",
		"french": "Coupe-Soleil",
		"spanish": "Corta Sol",
		"vietnamese": "Kính Kiếm",
		"thai": "ดาบผ่าตะวัน",
		"hindi": "कांच तलवार"
	},
	"theme": "desert",
	"world": {
		"how": "피의 온도로 검술을 완성하려는 유리 괴수가 그 열기를 느끼고 반응하기 때문이다.",
		"rule": "뜨거운 피를 쏟아붓는 행동을 하면 사막의 끔찍한 존재가 다가온다.",
		"secret": "카엘리스는 태양을 베려다 몸이 유리로 굳어 버린 검객이다. 그는 탐험대의 피로 자신의 미완성 검술을 완성하려 한다.",
		"setting": "뜨거운 모래가 몰아치는 사막에 있는 타오르는 유리 제단"
	},
	"protagonist_goal": "사막을 위협하는 유리 괴수 카엘리스를 물리치고 재앙을 막는다.",
	"boss_name_korean": "카엘리스",
	"act_tone": {
		"rising": {
			"tension": 3,
			"mood": "서늘함과 긴장감이 늘어나는 분위기",
			"narrative_role": "괴수의 정체와 숨겨진 목적을 파악하는 단계"
		},
		"intro": {
			"mood": "스산하고 조마조마한 분위기",
			"narrative_role": "사막의 위협과 기괴한 흔적을 만나는 단계",
			"tension": 1
		},
		"climax_finale": {
			"tension": 5,
			"narrative_role": "유리 괴수와 맞서 결전을 벌이는 단계",
			"mood": "치열하고 긴박한 분위기"
		}
	},
	"final_boss": {
		"id": "MoltenGlass_Kaelith_V1",
		"name": "Kaelith",
		"appearance_boss": "검은 껍질과 유리가 섞인 거대한 인형 형태를 하고 있다. 몸 틈새로 날카로운 유리 칼날과 불티를 뿜어낸다.",
		"true_identity": "태양을 베려다 금기 검술의 여파로 온몸이 모래와 함께 유리로 굳어 버린 검객입니다. 그는 자신의 몸이 아직 완성되지 않은 검의 자국이라는 환상에 빠져 있습니다.",
		"motivation": "자신의 검술이 완성되지 않은 이유가 피의 온도가 부족해서라고 믿습니다. 탐험대의 뜨거운 피를 몸에 쏟아부어 마침내 완벽한 일격을 완성하고 싶어 합니다.",
		"want": "사람들의 뜨거운 피를 모아 완성되지 않은 검술을 완벽하게 마치고 싶어 한다.",
		"twist": "갑자기 자신의 머리를 쾅쾅 때리며 껍질을 부수자 온몸이 거대한 유리 괴수로 뒤틀립니다. \"네놈들의 피를 뿌려야 내 검이 비로소 완성된다!\""
	},
	"global_foreshadowing": [
		{
			"id": "foreshadow_1",
			"hint": "붉은 모래 언덕 바닥에 뜨거운 열기를 뿜는 검게 굳은 유리 조각이 박혀 있다.",
			"plant_order": 1,
			"plant_room": 1,
			"reveal_room": 15,
			"reveal_context": "카엘리스의 몸을 덮고 있던 검은 껍질 파편이었음이 밝혀진다."
		},
		{
			"id": "foreshadow_2",
			"hint": "사막 골짜기 바닥에 거대한 검 자국이 깊게 새겨져 있다.",
			"plant_order": 2,
			"plant_room": 3,
			"reveal_room": 9,
			"reveal_context": "태양을 베려던 카엘리스의 금기 검술 흔적이었음을 깨닫는다."
		},
		{
			"id": "foreshadow_3",
			"hint": "신전 벽화에 태양을 베려다 금기 검술로 굳어 버린 검객이 그려져 있다.",
			"plant_order": 3,
			"plant_room": 5,
			"reveal_room": 5,
			"reveal_context": "그 검객이 현재 사막에 나타난 상인 카엘리스임을 알게 된다."
		},
		{
			"id": "foreshadow_4",
			"hint": "제단에 피의 온도로 검술을 완성하려 한다는 붉은 글귀가 새겨져 있다.",
			"plant_order": 4,
			"plant_room": 9,
			"reveal_room": 3,
			"reveal_context": "카엘리스가 탐험대의 뜨거운 피를 노린 이유였음이 드러난다."
		}
	],
	"npc_roles": {
		"jasper": {
			"role": "옛 문자를 풀어 주는 동료",
			"arc": "3화에서 신전 벽면에 새겨진 옛 문자를 주인공에게 풀어서 읽어 준다."
		},
		"kasai": {
			"role": "골짜기를 함께 조사하는 동료",
			"arc": "2화에서 주인공과 함께 유리 모래 골짜기의 호박색 유리 칼날을 조사한다."
		},
		"ashur": {
			"role": "피를 흘리며 넘어진 동료",
			"arc": "1화에서 모래 언덕에 넘어졌다가 치료받고 5화에서 제단까지 주인공과 동행한다."
		},
		"ember": {
			"role": "검흔 환영을 가리키는 동료",
			"arc": "4화에서 주인공에게 바닥의 검흔 환영을 가리키며 불안해한다."
		}
	},
	"scenarioOutline": [
		{
			"order": 1,
			"act": "intro",
			"title": "사막의 흔적",
			"boss": "random_boss",
			"npc": "ashur",
			"summary": "주인공은 모래 언덕에서 피를 흘리며 쓰러진 아슈르를 발견한다. 아슈르를 치료하던 중 주인공은 모래 바닥에 뜨거운 피를 쏟아붓는다. 사막 도적이 나타나 함부로 피를 흘리면 사막의 끔찍한 존재를 부른다며 칼을 겨눈다. 사막 도적을 제압하자 바닥에 검게 굳은 유리 조각이 열기를 뿜으며 박혀 있다.",
			"place": "붉은 모래 언덕",
			"random_boss_title": "사막 도적",
			"random_boss_side": "warn",
			"boss_trace": "검게 굳은 유리 조각"
		},
		{
			"order": 2,
			"act": "rising",
			"title": "유리 골짜기",
			"boss": "random_boss",
			"npc": "kasai",
			"summary": "주인공은 카사이와 함께 골짜기 바닥에 꽂힌 호박색 유리 칼날을 조사한다. 오아시스 상인이 나타나 사막 신의 축복이라며 골짜기 안쪽으로 갈 것을 부추긴다. 주인공은 상인을 떼어내고 안쪽 절벽을 확인한다. 그러자 사막 바닥에 거대한 검 자국을 새기며 다니는 존재가 있다는 사실을 알게 된다.",
			"place": "유리 모래 골짜기",
			"random_boss_title": "오아시스 상인",
			"random_boss_side": "ally",
			"boss_trace": "호박색 유리 칼날"
		},
		{
			"order": 3,
			"act": "rising",
			"title": "태양의 신전",
			"boss": "random_boss",
			"npc": "jasper",
			"summary": "재스퍼는 신전 벽면에 새겨진 옛 문자를 주인공에게 풀어 준다. 오렌지빛 아지랑이가 사방에서 피어오르자 유적 탐사꾼이 나타나 위험하다고 막아선다. 주인공은 탐사꾼을 물리치고 벽화의 기록을 끝까지 읽어 낸다. 오래 전 한 검객이 태양을 베려다 금기 검술의 여파로 굳어 버렸음을 알아낸다.",
			"place": "붉은 태양 신전",
			"random_boss_title": "유적 탐사꾼",
			"random_boss_side": "warn",
			"boss_trace": "오렌지빛 아지랑이"
		},
		{
			"order": 4,
			"act": "rising",
			"title": "식어 버린 검터",
			"boss": "random_boss",
			"npc": "ember",
			"summary": "앰버는 바닥에서 솟구치는 이글거리는 검흔 환영을 가리키며 불안해한다. 모래 주술사가 접근해 사막의 정령에게 온기를 바쳐야 재앙이 멈춘다고 다가온다. 주인공은 주술사를 제압하고 제단에 새겨진 붉은 글귀를 확인한다. 그래서 그 괴수가 피의 온도를 이용해 미완성된 검술을 완성하려 한다는 사실을 확신한다.",
			"place": "식어 버린 검터",
			"random_boss_title": "모래 주술사",
			"random_boss_side": "ally",
			"boss_trace": "이글거리는 검흔 환영"
		},
		{
			"order": 5,
			"act": "climax_finale",
			"title": "마지막 일격",
			"boss": "pool_MoltenGlass_Kaelith_V1",
			"npc": "ashur",
			"summary": "주인공과 아슈르가 제단에 들어서자 방랑 상인 카엘리스가 기괴한 소리를 내며 막아선다. 카엘리스는 자신의 머리를 쾅쾅 때려 껍질을 부수더니 거대한 유리 괴수로 변해 공격한다. 주인공은 카엘리스의 칼날을 치켜쳐 막고 제단으로 흐르는 뜨거운 피를 차갑게 식힌다. 열기를 잃은 카엘리스의 몸은 비명을 지르며 산산조각 난다.",
			"place": "타오르는 유리 제단"
		}
	],
	"act_summary": {
		"climax_finale": "주인공은 제단에서 카엘리스와 맞서 싸우고 피를 식혀 그 몸을 산산조각 낸다.",
		"rising": "주인공은 사막을 조사하며 태양을 베려다 굳은 검객이 피의 온도를 노린다는 사실을 알아낸다.",
		"intro": "주인공은 쓰러진 아슈르를 구하던 중 사막의 위험한 존재와 검은 유리 조각을 발견한다."
	}
};
