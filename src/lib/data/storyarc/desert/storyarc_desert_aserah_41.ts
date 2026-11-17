import type { StoryArc } from '$lib/types';

export const storyarc_desert_aserah_41: StoryArc = {
	"id": "desert_aserah_41",
	"level": 41,
	"chapter_name": {
		"korean": "사막의 검정령",
		"english": "Sword Spirit",
		"japanese": "剣の精霊",
		"chinese": "剑之精灵",
		"french": "Esprit Épée",
		"spanish": "Alma Espada",
		"vietnamese": "Kiếm Linh",
		"thai": "วิญญาณดาบ",
		"hindi": "तलवार आत्मा"
	},
	"theme": "desert",
	"world": {
		"how": "검객들에게 배신당한 정령 아세라가 복수하기 위해 신전에 저주를 내렸기 때문이다.",
		"rule": "보석 조각상을 부수면 곁에 있는 사람의 몸이 단단한 보석으로 변한다.",
		"setting": "황량한 사막에 있는 여신 아세라의 신전",
		"secret": "여신 아세라는 검객들의 탐욕에 배신당해 타락한 검의 정령이었다. 보석 조각상에 진심으로 사죄하면 저주를 풀 수 있다."
	},
	"protagonist_goal": "저주에 걸린 동료 아미르를 구하기 위해 여신의 신전으로 향해야 한다. 구하지 못하면 아미르의 몸이 영원히 보석으로 굳어버리기 때문이다.",
	"boss_name_korean": "아세라",
	"act_tone": {
		"climax_finale": {
			"narrative_role": "아세라와의 결전과 검의 사죄를 통한 구원",
			"mood": "비장하고 애틋한 분위기",
			"tension": 5
		},
		"rising": {
			"mood": "쓸쓸하고 안타까운 분위기",
			"tension": 3,
			"narrative_role": "사라진 검객들과 여신에게 얽힌 진실 추적"
		},
		"intro": {
			"mood": "혼란스럽고 긴박한 분위기",
			"tension": 1,
			"narrative_role": "저주의 발동과 동료를 구하기 위한 여정의 시작"
		}
	},
	"final_boss": {
		"id": "GlassCalamity_Aserah_V1",
		"name": "Aserah",
		"appearance_boss": "붉은 오팔빛 유리가 뒤얽힌 십여 미터 높이의 칼날 거상이다. 등 뒤에서는 여덟 자루의 거대한 유리 대검이 후광처럼 회전한다.",
		"true_identity": "본래 검객들이 흘리는 피에 지쳐 사막으로 도망친 검의 정령입니다. 자신을 쫓아온 검객들의 탐욕에 물들고 배신당하면서 칼날 괴물로 타락했습니다.",
		"motivation": "자신을 이용하고 버린 검객들에게 복수하려고 합니다. 사막에 들어온 검객들을 보석 조각상으로 만들어 영원히 갇히게 만드는 것이 목표입니다.",
		"want": "자신을 배신한 검객들에게 복수하고 사막의 사람들을 보석 조각상으로 만드는 것이다.",
		"twist": "여신의 자애로운 후광이 사라지자 가면이 쪼개지며 뜨거운 모래가 쏟아집니다. 칼날 환영이 쏟아지는 가운데 괴물로 변한 정령이 웅장한 목소리로 말합니다. \"너희가 휘두른 검의 무게를 깨달아라. 뛰어난 검객들도 모두 조각상이 되었으니, 네 검 역시 이 사막의 장식이 될 것이다!\""
	},
	"global_foreshadowing": [
		{
			"reveal_room": 3,
			"hint": "보석 조각상에 꽂힌 오팔빛 유리 파편",
			"plant_order": 1,
			"id": "foreshadowing_1",
			"plant_room": 1,
			"reveal_context": "오팔빛 유리가 칼날 거상 피부를 이루는 조각임을 확인한다."
		},
		{
			"reveal_context": "백금빛 갑옷 조각이 거상의 전신을 감싼 갑주 파편임을 확인한다.",
			"id": "foreshadowing_2",
			"plant_order": 2,
			"plant_room": 3,
			"reveal_room": 5,
			"hint": "오아시스 근처에서 발견한 백금빛 갑옷 조각"
		},
		{
			"id": "foreshadowing_3",
			"plant_room": 5,
			"plant_order": 3,
			"hint": "골짜기 바닥에 남아 있는 붉은 모래 마그마 자국",
			"reveal_room": 9,
			"reveal_context": "붉은 모래 마그마 자국이 거상 몸체에서 흐르는 물질의 흔적임을 알게 된다."
		},
		{
			"reveal_room": 15,
			"reveal_context": "여덟 자루 유리의 흔적이 아세라 등 뒤에서 회전하는 대검임을 깨닫는다.",
			"hint": "신전 벽화에 새겨진 여덟 자루 유리의 흔적",
			"id": "foreshadowing_4",
			"plant_order": 4,
			"plant_room": 9
		}
	],
	"npc_roles": {
		"amir": {
			"role": "저주에 걸린 주인공의 동료",
			"arc": "1화에서 보석 저주에 걸리고 5화에서 주인공이 조각상에 사죄하자 저주에서 풀려난다."
		},
		"ember": {
			"role": "유적 신전을 알려주는 조력자",
			"arc": "4화에서 단서를 찾는 주인공에게 버려진 유적 신전의 위치를 일러준다."
		},
		"kasai": {
			"role": "오아시스로 이끄는 길잡이",
			"arc": "2화에서 저주받은 아미르를 살리기 위해 주인공을 말라붙은 오아시스로 안내한다."
		},
		"dune": {
			"role": "골짜기 길을 알려주는 조력자",
			"arc": "3화에서 아미르의 저주를 풀기 위해 주인공에게 바람의 모래 골짜기로 가라고 조언한다."
		}
	},
	"scenarioOutline": [
		{
			"order": 1,
			"act": "intro",
			"title": "저주의 시작",
			"boss": "random_boss",
			"npc": "amir",
			"summary": "주인공과 아미르는 사막을 지나다 오팔빛 유리 파편이 꽂힌 보석 조각상을 발견한다. 주인공은 길을 가로막는 보석 조각상을 부순다. 그러자 저주가 발동하여 아미르의 다리가 단단한 보석으로 변하기 시작한다. 현장을 덮친 사막 도적이 주인공을 공격하지만 주인공은 도적을 물리치고 아미르를 구하기 위해 여신의 신전으로 향한다.",
			"place": "붉은 모래 언덕",
			"random_boss_title": "사막 도적",
			"random_boss_side": "ally",
			"boss_trace": "오팔빛 유리 파편"
		},
		{
			"order": 2,
			"act": "rising",
			"title": "사라진 검객들",
			"boss": "random_boss",
			"npc": "kasai",
			"summary": "저주받아 변해가는 아미르를 살리기 위해 카사이의 안내로 말라붙은 오아시스에 도착한다. 약초상은 사막 깊은 곳은 위험하다며 주인공의 길을 막고 다짜고짜 공격한다. 주인공은 약초상을 제압한 뒤 백금빛 갑옷 조각 근처에서 여신에게 검을 배운 검객들이 모두 사라졌다는 사실을 알게 된다.",
			"place": "말라붙은 오아시스",
			"random_boss_title": "약초상",
			"random_boss_side": "warn",
			"boss_trace": "백금빛 갑옷 조각"
		},
		{
			"order": 3,
			"act": "rising",
			"title": "정령의 슬픔",
			"boss": "random_boss",
			"npc": "dune",
			"summary": "아미르의 몸이 계속 굳어가자 주인공은 듄의 조언을 받아 바람의 모래 골짜기로 들어선다. 용병 대장은 여신의 축복을 혼자 차지하겠다며 주인공에게 칼을 휘두른다. 주인공은 용병 대장을 넘어뜨린 후 붉은 모래 마그마 자국 옆에서 여신이 검객들에게 배신당한 검의 정령이라는 사실을 알아낸다.",
			"place": "바람의 모래 골짜기",
			"random_boss_title": "용병 대장",
			"random_boss_side": "ally",
			"boss_trace": "붉은 모래 마그마 자국"
		},
		{
			"order": 4,
			"act": "rising",
			"title": "분노의 진실",
			"boss": "random_boss",
			"npc": "ember",
			"summary": "아미르를 온전히 돌려놓을 단서를 구하려 앰버가 일러준 버려진 유적 신전으로 이동한다. 주술사는 신전에 잠든 분노를 깨우지 말라며 주술을 쏘아보낸다. 주술사를 물리친 주인공은 여덟 자루 유리의 흔적이 남은 벽화에서 여신 아세라가 복수심으로 검객들을 보석 조각상에 가두어왔음을 깨닫는다.",
			"place": "버려진 유적 신전",
			"random_boss_title": "주술사",
			"random_boss_side": "warn",
			"boss_trace": "여덟 자루 유리의 흔적"
		},
		{
			"order": 5,
			"act": "climax_finale",
			"title": "검의 사죄",
			"boss": "pool_GlassCalamity_Aserah_V1",
			"npc": "amir",
			"summary": "신전 깊은 곳에서 거대한 칼날 거상 아세라가 분노를 터뜨리며 유리 대검을 휘둘러 격렬하게 싸운다. 전투 끝에 자애로운 가면이 깨지고 타락한 정령의 슬픈 목소리가 온 신전에 울려 퍼진다. 주인공은 억울하게 갇힌 이들을 기억하며 보석 조각상에 검을 숙여 사죄한다. 그러자 아세라의 복수심이 가라앉으며 아미르의 저주가 풀리고 사막에 평화가 찾아온다.",
			"place": "아세라의 유구한 신전"
		}
	],
	"act_summary": {
		"climax_finale": "주인공은 신전 깊은 곳에서 아세라와 맞서 싸운 뒤 보석 조각상에 진심으로 사죄하여 저주를 풀고 사막을 구한다.",
		"intro": "주인공이 길을 막는 보석 조각상을 부수자 동료 아미르가 저주에 걸리고, 주인공은 그를 구하려 여신의 신전으로 향한다.",
		"rising": "주인공은 오아시스와 골짜기를 거치며 여신 아세라가 검객들에게 배신당해 복수를 시작한 검의 정령임을 알게 된다."
	}
};
