import type { StoryArc } from '$lib/types';

export const storyarc_desert_vesperis_46: StoryArc = {
	"id": "desert_vesperis_46",
	"level": 46,
	"chapter_name": {
		"korean": "사막 사원의 봉인",
		"english": "Temple Seal",
		"japanese": "神殿の封印",
		"chinese": "神殿的封印",
		"french": "Sceau Temple",
		"spanish": "Sello Templo",
		"vietnamese": "Phong Ấn Đền",
		"thai": "ตราวิหาร",
		"hindi": "मंदिर सील"
	},
	"theme": "desert",
	"world": {
		"how": "베스페리스가 피비린내 나는 싸움을 끊기 위해 무기를 삼키는 성궤와 합쳐졌기 때문이다.",
		"secret": "베스페리스는 과거 싸움에 절망해 스스로 성궤와 합쳐진 최고의 검객이었다. 그가 무기를 빼앗으려 한 까닭은 피비린내 나는 싸움을 끊어내기 위해서였다.",
		"setting": "사막에 있는 고대 사원과 주변 유적",
		"rule": "검을 칼집에서 빼들면 무기를 성궤에 강제로 빼앗겨 영원히 갇히게 된다."
	},
	"protagonist_goal": "사막의 버려진 사원 깊은 곳으로 가 무적의 힘과 가호를 얻는 것이다.",
	"boss_name_korean": "베스페리스",
	"act_tone": {
		"intro": {
			"narrative_role": "여정의 시작과 사원의 소문 전달",
			"mood": "호기심과 긴장감",
			"tension": 1
		},
		"rising": {
			"narrative_role": "성궤와 베스페리스에 관한 진실이 밝혀짐",
			"tension": 3,
			"mood": "의혹과 고조되는 위기감"
		},
		"climax_finale": {
			"narrative_role": "베스페리스와의 전투 및 칼집에 검을 넣는 화해",
			"tension": 5,
			"mood": "격정적인 대립과 애틋한 해소"
		}
	},
	"final_boss": {
		"id": "GoldenReliquary_Vesperis_V1",
		"name": "Vesperis",
		"appearance_boss": "순금으로 장식된 거대한 성궤를 짊어진 수도승의 모습이다. 성궤와 몸이 하나로 굳어 메말라 있다.",
		"true_identity": "과거 최고의 경지에 올랐지만 검이 부르는 비극에 절망해 사막으로 떠나온 검객입니다. 세상의 모든 검을 삼켜 봉인하기 위해 스스로 성궤와 한몸이 되었습니다.",
		"motivation": "검을 쥔 자들이 일으킬 피비린내 나는 싸움을 미리 끊어내고 싶어 합니다. 그래서 사원에 발을 들이는 검객들의 무기를 빼앗아 영원히 봉인하려고 합니다.",
		"want": "세상의 모든 검을 성궤에 삼켜 봉인하고 피비린내 나는 싸움을 끊어내는 것이다.",
		"twist": "은혜를 구하려 다가서면 성궤가 열리며 갇혀 있던 수천 자루의 검 파편이 폭풍처럼 뿜어져 나옵니다. 수도승이 비통한 목소리로 마지막 경고를 내뱉습니다. \"네가 바라는 기적은 이곳에 없다. 네 칼 역시 이 궤에 묻혀 영원히 잠들 것이다!\""
	},
	"global_foreshadowing": [
		{
			"id": "foreshadow_1",
			"hint": "사막 입구 근처에서 부서진 검 조각을 발견한다.",
			"plant_order": 1,
			"plant_room": 1,
			"reveal_room": 15,
			"reveal_context": "성궤에 갇혀 있다가 폭풍처럼 뿜어져 나온 검의 파편임이 밝혀진다."
		},
		{
			"id": "foreshadow_2",
			"hint": "골짜기에서 공기 중에 흔들리는 금빛 광선의 잔상을 목격한다.",
			"plant_order": 2,
			"plant_room": 3,
			"reveal_room": 9,
			"reveal_context": "성궤 틈새로 삼켜진 명검들의 잔상이 새어 나오는 빛이었음이 밝혀진다."
		},
		{
			"id": "foreshadow_3",
			"hint": "용병이 쓰러진 자리에서 짙은 라피스라줄리 조각을 줍는다.",
			"plant_order": 3,
			"plant_room": 5,
			"reveal_room": 5,
			"reveal_context": "베스페리스가 짊어진 성궤 표면에 새겨진 보석 파편이었음이 밝혀진다."
		},
		{
			"id": "foreshadow_4",
			"hint": "부서진 기둥 사이에서 굳어 버린 사암 성궤의 파편을 발견한다.",
			"plant_order": 4,
			"plant_room": 9,
			"reveal_room": 3,
			"reveal_context": "베스페리스의 몸과 합쳐진 사암 성궤의 일부분이었음이 밝혀진다."
		}
	],
	"npc_roles": {
		"amir": {
			"role": "사원 안내자",
			"arc": "1화에서 주인공을 사원 근처로 안내하고 5화에서 제단까지 동행한다."
		},
		"ferro": {
			"role": "골짜기의 조력자",
			"arc": "2화에서 성물이 무기를 쥔 자의 무기를 강제로 빼앗는다는 사실을 전한다."
		},
		"kasai": {
			"role": "회랑의 동료",
			"arc": "4화에서 베스페리스가 검을 봉인하려고 성궤와 한몸이 되었다는 진실을 알려준다."
		},
		"dune": {
			"role": "오아시스 조사관",
			"arc": "3화에서 베스페리스가 싸움에 절망해 사막으로 떠나온 검객이었음을 알려준다."
		}
	},
	"scenarioOutline": [
		{
			"order": 1,
			"act": "intro",
			"title": "사막 사원의 소문",
			"boss": "random_boss",
			"npc": "amir",
			"summary": "주인공은 무적의 힘을 얻기 위해 아미르의 안내를 받아 사원에 가까워진다. 아미르는 사원 깊은 곳에 가호를 내려주는 성물이 있다고 일러준다. 자신을 보호하려는 주인공은 챙겨 온 검을 칼집에서 빼든다. 사막 도적이 전방의 위험을 경고하며 막아서지만 주인공은 그를 제압한다.",
			"place": "바람 부는 사막 입구",
			"random_boss_title": "사막 도적",
			"random_boss_side": "warn",
			"boss_trace": "부서진 검 조각"
		},
		{
			"order": 2,
			"act": "rising",
			"title": "모래 속에 묻힌 진실",
			"boss": "random_boss",
			"npc": "ferro",
			"summary": "주인공은 골짜기에서 만난 페로에게 붉은 검을 보여준다. 페로는 성물이 무기를 쥔 자의 무기를 강제로 빼앗아 궤 속에 가둔다는 사실을 전한다. 모래 주술사가 성물의 가호를 받아 무기를 바치라며 거짓 길로 이끌자 주인공이 그를 무찌른다. 공기 중에 흔들리는 금빛 광선의 잔상이 사원 깊은 곳을 가리킨다.",
			"place": "메마른 사암 골짜기",
			"random_boss_title": "모래 주술사",
			"random_boss_side": "ally",
			"boss_trace": "금빛 광선의 잔상"
		},
		{
			"order": 3,
			"act": "rising",
			"title": "피비린내 나는 비극",
			"boss": "random_boss",
			"npc": "dune",
			"summary": "주인공은 오아시스 폐허에서 옛 기록을 조사하는 듄을 만난다. 듄은 수도승 베스페리스가 피비린내 나는 싸움에 절망해 사막으로 떠나온 최고의 검객이었음을 밝힌다. 오아시스 용병이 피비린내를 품은 무기는 위험하다며 접근을 저지하지만 주인공은 그를 넘어선다. 용병이 쓰러진 자리에는 짙은 라피스라줄리 조각이 떨어져 있다.",
			"place": "바랜 오아시스 폐허",
			"random_boss_title": "오아시스 용병",
			"random_boss_side": "warn",
			"boss_trace": "라피스라줄리 조각"
		},
		{
			"order": 4,
			"act": "rising",
			"title": "성궤의 굳은 맹세",
			"boss": "random_boss",
			"npc": "kasai",
			"summary": "사원 회랑에 다다른 주인공은 카사이로부터 끔찍한 사실을 듣는다. 베스페리스는 세상의 모든 검을 삼켜 봉인하고자 스스로 성궤와 한몸이 되었다. 보물 사냥꾼이 성물에서 보물을 빼앗자며 주인공을 부추기지만 주인공은 미혹에 빠지지 않고 그를 제압한다. 부서진 기둥 사이로 굳어 버린 사암 성궤의 파편이 흩어진다.",
			"place": "고대 사원 앞 회랑",
			"random_boss_title": "보물 사냥꾼",
			"random_boss_side": "ally",
			"boss_trace": "사암 성궤의 파편"
		},
		{
			"order": 5,
			"act": "climax_finale",
			"title": "영원한 봉인",
			"boss": "pool_GoldenReliquary_Vesperis_V1",
			"npc": "amir",
			"summary": "주인공은 아미르와 함께 제단으로 들어가 성궤와 합쳐진 베스페리스와 직면한다. 베스페리스는 성궤를 열어 갇혀 있던 검 파편을 폭풍처럼 뿜어내며 격렬히 공격한다. 싸움 도중 그의 슬픈 눈빛을 본 주인공은 싸울 뜻이 없음을 알리며 검을 칼집에 넣는다. 그러자 베스페리스는 눈물을 흘리며 비통한 한숨과 함께 조용히 제단 아래로 가라앉는다.",
			"place": "고대 사원의 제단"
		}
	],
	"act_summary": {
		"climax_finale": "주인공은 제단에서 베스페리스의 공격을 받지만 검을 칼집에 넣어 마음을 전하고 그를 조용히 잠들게 만든다.",
		"rising": "주인공은 여정 중에 성물과 베스페리스의 비극적인 과거를 알게 되고 사원 깊은 곳으로 발걸음을 옮긴다.",
		"intro": "주인공은 무적의 힘을 얻으려고 아미르의 안내를 받아 사원에 다가가며 자신을 가로막는 도적을 제압한다."
	}
};
