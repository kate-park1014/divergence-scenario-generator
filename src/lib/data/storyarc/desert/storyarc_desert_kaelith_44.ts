import type { StoryArc } from '$lib/types';

export const storyarc_desert_kaelith_44: StoryArc = {
	"id": "desert_kaelith_44",
	"level": 44,
	"chapter_name": {
		"hindi": "कांच खड्ग",
		"vietnamese": "Lưỡi kính",
		"english": "Glass Blade",
		"thai": "คมดาบแก้ว",
		"chinese": "玻璃之刃",
		"japanese": "ガラスの刃",
		"french": "Lame verre",
		"korean": "유리 칼날",
		"spanish": "Hoja vidrio"
	},
	"theme": "desert",
	"world": {
		"rule": "유리 장신구에 피를 묻히면 모래 바닥이 뜨겁게 달아오르며 열기가 퍼진다.",
		"setting": "뜨거운 열기가 이글거리는 사막에 있는 용융된 태양의 제단",
		"secret": "사막 상인의 정체는 태양을 베려다 온몸이 유리로 굳어 버린 검객이다. 유리 장신구에 묻은 피를 찬물로 씻어내면 열기를 잃고 산산조각 난다.",
		"how": "유리 장신구가 피의 온도를 흡수하여 검객의 뜨거운 열기를 불러일으키기 때문이다."
	},
	"protagonist_goal": "유리 장신구를 찬물에 헹구어 카엘리스를 물리쳐야 한다. 사막에서 오아시스를 찾지 못하면 동료들과 함께 말라 죽기 때문이다.",
	"boss_name_korean": "카엘리스",
	"act_tone": {
		"intro": {
			"mood": "뜨겁고 불안한 분위기",
			"narrative_role": "사건의 시작과 여정의 출발",
			"tension": 1
		},
		"climax_finale": {
			"mood": "소름 돋고 위태로운 분위기",
			"narrative_role": "최후의 결전과 위기 극복",
			"tension": 5
		},
		"rising": {
			"narrative_role": "위협의 구체화와 정체 파악",
			"mood": "기괴하고 긴박한 분위기",
			"tension": 3
		}
	},
	"final_boss": {
		"id": "MoltenGlass_Kaelith_V1",
		"name": "Kaelith",
		"appearance_boss": "온몸이 검은 껍질로 뒤덮인 거대한 인형 모습을 하고 있다. 껍질 틈새로 붉은 용암이 일렁이며 날카로운 유리 칼날이 돋아나 있다.",
		"surface_identity": "뜨거운 사막에서 녹은 유리 장신구를 파는 방랑 상인입니다. 웃으며 물건을 내밀다가 사지 않으면 혀를 자르겠다고 위협하며 강제로 팔려 합니다.",
		"true_identity": "태양을 베려다 금기 검술의 여파로 온몸이 모래와 함께 유리로 굳어 버린 검객입니다. 그는 자신의 몸이 아직 완성되지 않은 검의 자국이라는 환상에 빠져 있습니다.",
		"motivation": "자신의 검술이 완성되지 않은 이유가 피의 온도가 부족해서라고 믿습니다. 탐험대의 뜨거운 피를 몸에 쏟아부어 마침내 완벽한 일격을 완성하고 싶어 합니다.",
		"motive_scene": "카엘리스가 태양을 베려고 금기 검술을 휘두르다 모래와 함께 몸이 뜨거운 유리로 굳었다.",
		"want": "탐험대의 뜨거운 피를 몸에 쏟아부어 완벽한 일격을 완성하고 싶어 한다.",
		"twist": "갑자기 자신의 머리를 쾅쾅 때리며 껍질을 부수자 온몸이 거대한 유리 괴수로 뒤틀립니다. \"네놈들의 피를 뿌려야 내 검이 비로소 완성된다!\""
	},
	"global_foreshadowing": [
		{
			"plant_room": 1,
			"reveal_context": "이 조각이 뜨거운 유리 상인의 장신구 파편임을 확인한다.",
			"plant_order": 1,
			"id": "foreshadow_1",
			"reveal_room": 1,
			"hint": "모래 속에서 붉은 유리 조각을 발견한다."
		},
		{
			"hint": "동굴에서 검게 그을린 칼자루를 발견한다.",
			"plant_room": 3,
			"reveal_context": "이 칼자루가 태양을 베려다 실패한 검객의 칼자루임을 알아낸다.",
			"plant_order": 2,
			"id": "foreshadow_2",
			"reveal_room": 3
		},
		{
			"plant_order": 3,
			"plant_room": 5,
			"hint": "신전에서 검은 슬래그 껍질을 만진다.",
			"reveal_room": 5,
			"reveal_context": "이 껍질이 몸이 유리로 뒤틀린 괴수의 껍질임을 파악한다.",
			"id": "foreshadow_3"
		},
		{
			"plant_order": 4,
			"reveal_context": "카엘리스의 가슴과 팔다리에서 돋아난 호박색 유리 칼날이었음이 밝혀진다.",
			"reveal_room": 15,
			"id": "foreshadow_4",
			"plant_room": 9,
			"hint": "공방 벽에 꽂힌 호박색 유리 칼날을 본다."
		}
	],
	"npc_roles": {
		"amir": {
			"role": "사막의 길안내자",
			"arc": "1화에서 모래 속 장신구를 줍는 주인공을 안내하고 5화에서 사막 상인의 모습을 한 카엘리스를 가리킨다."
		},
		"dune": {
			"role": "유적을 탐사하는 탐사원",
			"arc": "2화에서 검게 그을린 칼자루를 가리키며 상인의 소문을 전하고 4화에서 유리 칼날이 꽂힌 벽을 보여주며 경고한다."
		},
		"ashur": {
			"role": "약초를 구하는 약초꾼",
			"arc": "3화에서 신전에 들어온 주인공에게 유리 장신구를 찬물에 헹궈야 열기가 식는다고 일러준다."
		}
	},
	"scenarioOutline": [
		{
			"order": 1,
			"act": "intro",
			"title": "뜨거운 모래 언덕",
			"boss": "random_boss",
			"npc": "amir",
			"summary": "주인공은 길을 안내하는 아미르를 만나 모래 속에서 떨어진 유리 장신구를 줍는다. 주인공이 손가락에 난 상처로 유리 장신구에 피를 묻히자 모래 언덕이 뜨겁게 달아오른다. 도적이 이 행동이 사막의 마물을 부른다며 공격하자 주인공은 칼을 빼어 물리친다. 하지만 열기로 오아시스로 가는 길이 붕괴되어 동료들과 살기 위해 깊은 사막으로 향한다.",
			"place": "이글거리는 모래 언덕",
			"random_boss_title": "도적",
			"random_boss_side": "warn",
			"boss_trace": "붉은 유리 조각"
		},
		{
			"order": 2,
			"act": "rising",
			"title": "검은 껍질의 동굴",
			"boss": "random_boss",
			"npc": "dune",
			"summary": "오아시스로 향하는 다른 통로를 찾으려고 들어선 동굴에서 유적을 탐사하던 듄을 마주친다. 듄은 검게 그을린 칼자루를 가리키며 붉은 장신구를 팔던 상인의 소문을 말한다. 상인의 편을 들며 유적을 독점하려는 광부가 덤벼들자 주인공은 싸워서 제압한다. 주인공은 장신구의 주인이 웃으며 물건을 팔다가 사지 않으면 혀를 자르겠다고 위협하던 상인임을 알게 된다.",
			"place": "녹아내린 동굴",
			"random_boss_title": "광부",
			"random_boss_side": "ally",
			"boss_trace": "검게 그을린 칼자루"
		},
		{
			"order": 3,
			"act": "rising",
			"title": "신전의 그늘",
			"boss": "random_boss",
			"npc": "ashur",
			"summary": "탈진을 막기 위해 그늘을 찾아 신전으로 들어간 주인공은 약초를 구하던 아슈르를 만난다. 아슈르는 뜨거운 유리 장신구를 찬물에 헹궈야 열기가 식고 안전해진다고 일러준다. 신전의 주술사가 함부로 열기를 건드리면 사막 전체가 위험해진다며 공격해 오자 주인공은 맞서 싸운다. 주인공은 무서운 상인이 사실 태양을 베려다 온몸이 유리로 굳어 버린 검객이라는 사실을 깨닫는다.",
			"place": "붉은 모래 신전",
			"random_boss_title": "주술사",
			"random_boss_side": "warn",
			"boss_trace": "검은 슬래그 껍질"
		},
		{
			"order": 4,
			"act": "rising",
			"title": "버려진 공방",
			"boss": "random_boss",
			"npc": "dune",
			"summary": "수원을 찾아 가던 주인공은 모래바람을 피해 공방으로 들어가 듄과 다시 만난다. 듄은 호박색 유리 칼날이 꽂힌 벽을 보여주며 이 장소에 유리의 열기가 모이고 있다고 경고한다. 상인의 편을 들어 주인공을 추격하던 추적자가 길을 막아서자 주인공은 검을 휘둘러 꺾는다. 주인공은 유리 검객이 자신의 검술을 완성하기 위해 사람들의 피를 노리고 있음을 알아낸다.",
			"place": "버려진 유리 공방",
			"random_boss_title": "추적자",
			"random_boss_side": "ally",
			"boss_trace": "호박색 유리 칼날"
		},
		{
			"order": 5,
			"act": "climax_finale",
			"title": "최후의 제단",
			"boss": "pool_409",
			"npc": "amir",
			"summary": "제단 끝에 도달하자 아미르가 사막 상인의 모습을 한 카엘리스를 가리킨다. 카엘리스는 갑자기 자신의 머리를 때려 껍질을 부수더니 유리 괴수로 뒤틀려 피를 빼앗으려 덤벼든다. 주인공은 카엘리스의 맹렬한 공격을 막아내며 유리 장신구를 찬물에 헹궈 피를 털어낸다. 열기를 잃은 카엘리스의 몸이 비명을 지르며 산산이 깨져 내린다.",
			"place": "용융된 태양의 제단"
		}
	],
	"act_summary": {
		"intro": "주인공은 모래 언덕에서 유리 장신구를 줍고 도적을 물리치지만 길이 붕괴되어 깊은 사막으로 향한다.",
		"rising": "동굴과 신전을 지나며 뜨거운 상인의 정체가 태양을 베려다 온몸이 유리로 굳은 검객임을 알아낸다.",
		"climax_finale": "주인공은 제단에서 카엘리스를 마주하고 유리 장신구를 찬물에 헹궈 괴수를 산산이 깨뜨린다."
	}
};
