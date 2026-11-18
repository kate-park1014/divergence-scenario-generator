import type { StoryArc } from '$lib/types';

export const storyarc_desert_encore_49: StoryArc = {
	"id": "desert_encore_49",
	"level": 49,
	"chapter_name": {
		"japanese": "砂漠の舞台",
		"french": "Scène désert",
		"thai": "เวทีทราย",
		"spanish": "Teatro arena",
		"chinese": "沙漠舞台",
		"hindi": "रेत का मंच",
		"vietnamese": "Sân khấu cát",
		"english": "Desert Stage",
		"korean": "사막 무대"
	},
	"theme": "desert",
	"world": {
		"rule": "대본을 펼쳐 들면 대본에 이름이 새겨져 연극이 끝날 때까지 사막을 벗어날 수 없다.",
		"how": "극단장이 연극의 비극 결말을 완성하기 위해 대본에 마법 계약을 걸어두었기 때문이다.",
		"setting": "사막 한복판에 있는 진홍빛 천막 무대",
		"secret": "앙코르가 보여준 연극 단원과 관객은 모두 사막 마력으로 만든 가짜 환영이라는 사실을 알게 된다. 앙코르는 실제 결투 경험이 전혀 없는 사기꾼이다."
	},
	"protagonist_goal": "연극이 끝나기 전에 대본을 덮어 계약을 파기해야 한다. 대본에 이름이 묶인 채 연극의 희생양이 되면 사막 밖으로 영영 나갈 수 없기 때문이다.",
	"boss_name_korean": "앙코르",
	"act_tone": {
		"rising": {
			"tension": 3,
			"mood": "진실을 추적하는 탐색",
			"narrative_role": "환영의 정체와 대본 해제법 파악"
		},
		"climax_finale": {
			"tension": 5,
			"mood": "황당하지만 긴박한 결전",
			"narrative_role": "가짜 관객 앞에서의 대본 파기"
		},
		"intro": {
			"narrative_role": "계약의 시작과 사막의 경고",
			"tension": 1,
			"mood": "의구심이 드는 긴장감"
		}
	},
	"final_boss": {
		"id": "MirageTroupe_Encore_V1",
		"name": "Encore",
		"appearance_boss": "한쪽 눈에 외알 안경을 쓰고 깃털 모자를 쓴 극단장이 모래빛 연미복을 입은 채 놋쇠 레이피어를 들고 서 있다.",
		"surface_identity": "사막을 떠돌며 검무 공연을 펼치는 유랑 극단의 극단장이다. 수다스러운 입담과 화려한 볼거리로 사막의 여행자들을 즐겁게 해준다.",
		"true_identity": "사실 그는 환상 무대 위에서만 싸워 온 사기꾼이다. 실제 결투는 해본 적이 없으며 극단원도 모두 사막의 환영이다.",
		"motivation": "새 연극의 마지막 장면을 완성하기 위해 진짜로 쓰러져 줄 사람이 필요하다. 그래서 연극을 보러 온 탐험대를 무대 위 희생양으로 삼으려 한다.",
		"motive_scene": "앙코르가 연극의 마지막 결말을 완성하지 못해 관객들에게 야유를 받자 사막 환영으로 가짜 관객과 단원을 만들고 쓰러질 희생양을 찾아 나섰다.",
		"want": "연극의 비극 결말을 완성하기 위해 자신 대신 진짜로 쓰러져 줄 희생양을 얻고 싶어 한다.",
		"twist": "천막이 사라지자 사막 위에 수많은 환상 속 관객들이 나타나 탐험대를 둘러싼다. 극단장이 정중하게 모자를 벗으며 인사한다. \"연기는 제가 할 테니 여러분은 진짜로 쓰러지기만 하시면 됩니다.\""
	},
	"global_foreshadowing": [
		{
			"reveal_context": "무대 바닥에서 서투르게 그어진 레이피어 흔적을 확인한다.",
			"reveal_room": 1,
			"id": "fg_1",
			"hint": "모래바람 언덕에서 놋쇠 레이피어로 그은 자국을 발견한다.",
			"plant_room": 1,
			"plant_order": 1
		},
		{
			"plant_order": 2,
			"hint": "오아시스에서 모래빛 깃털 모자 조각을 발견한다.",
			"plant_room": 3,
			"reveal_room": 3,
			"reveal_context": "무대 소품함 옆에서 모자 깃털 조각을 확인한다.",
			"id": "fg_2"
		},
		{
			"reveal_context": "무대 조명대 아래에서 떨어진 안경 테를 확인한다.",
			"id": "fg_3",
			"hint": "붉은 모래 바위굴에서 떨어진 외알 안경 테를 발견한다.",
			"plant_room": 5,
			"plant_order": 3,
			"reveal_room": 5
		},
		{
			"plant_room": 9,
			"id": "fg_4",
			"plant_order": 4,
			"hint": "빛바랜 비단 무대터에서 찢어진 모래빛 연미복 자락을 발견한다.",
			"reveal_room": 15,
			"reveal_context": "앙코르가 입은 바래진 연미복 옷자락임을 확인하고 그가 무대 위에서만 검을 들던 사기꾼임을 깨닫는다."
		}
	],
	"npc_roles": {
		"kasai": {
			"role": "단원들의 정체를 밝히는 학자",
			"arc": "4화에서 무대 위 단원들에게 그림자가 없음을 보여주며 가짜 환영임을 알려준다."
		},
		"ferro": {
			"role": "대본 파기 방법을 알려주는 대장장이",
			"arc": "3화에서 연극이 끝나기 전에 대본을 덮어야 계약이 파기된다고 일러준다."
		},
		"dune": {
			"role": "주인공과 함께 무대에 오르는 사막 길잡이",
			"arc": "1화에서 연극 대본을 떨어뜨려 주인공을 계약에 얽히게 만들고, 5화에서 주인공과 함께 앙코르의 무대에 올라간다."
		},
		"amir": {
			"role": "극단장의 소문을 전하는 오아시스 상인",
			"arc": "2화에서 극단장이 스스로 검을 휘두르지 않는다는 소문을 알려준다."
		}
	},
	"scenarioOutline": [
		{
			"order": 1,
			"act": "intro",
			"title": "사막 무대의 서막",
			"boss": "random_boss",
			"npc": "dune",
			"summary": "주인공은 사막 탈출 지도를 얻으려고 길잡이 듄을 만난다. 듄이 떨군 연극 대본을 주인공이 실수로 펼쳐 들자 대본에 이름이 새겨진다. 사막 도적이 그 대본에 얽히면 목숨을 잃는다고 경고하며 공격해 오자 주인공은 싸워 제압한다.",
			"place": "모래바람 언덕",
			"random_boss_title": "사막 도적",
			"random_boss_side": "warn",
			"boss_trace": "놋쇠 레이피어 자국"
		},
		{
			"order": 2,
			"act": "rising",
			"title": "일렁이는 환영",
			"boss": "random_boss",
			"npc": "amir",
			"summary": "대본의 주연 구속을 풀려고 오아시스로 간 주인공은 상인 아미르를 만난다. 아미르는 극단장이 결투를 해본 적이 없는 인물이라는 소문을 알려준다. 극단장에게 돈을 받은 모래 전갈 사냥꾼이 길을 막아서자 주인공은 맞서 싸운다.",
			"place": "바랜 천막 오아시스",
			"random_boss_title": "모래 전갈 사냥꾼",
			"random_boss_side": "ally",
			"boss_trace": "깃털 모자 조각"
		},
		{
			"order": 3,
			"act": "rising",
			"title": "그림자 없는 단원들",
			"boss": "random_boss",
			"npc": "ferro",
			"summary": "계약을 해제할 방법을 찾기 위해 바위굴로 이동한 주인공은 대장장이 페로를 만난다. 페로는 연극 대본의 마지막 장을 덮으면 계약이 파기된다고 말한다. 모래 마법사가 사막의 마력이 위험해진다며 폭주하자 주인공은 싸워서 제압한다.",
			"place": "붉은 모래 바위굴",
			"random_boss_title": "모래 마법사",
			"random_boss_side": "warn",
			"boss_trace": "외알 안경 테"
		},
		{
			"order": 4,
			"act": "rising",
			"title": "은밀한 비단 무대",
			"boss": "random_boss",
			"npc": "kasai",
			"summary": "대본을 끝낼 장소로 가기 위해 무대터로 향한 주인공은 학자 카사이를 만난다. 카사이는 무대 위 단원들에게 그림자가 없음을 보여주며 환상이라 알려준다. 진실을 덮으려는 사막 호위병이 덤벼들자 주인공은 칼을 뽑아 물리친다.",
			"place": "빛바랜 비단 무대터",
			"random_boss_title": "사막 호위병",
			"random_boss_side": "ally",
			"boss_trace": "모래빛 연미복 자락"
		},
		{
			"order": 5,
			"act": "climax_finale",
			"title": "막이 내리는 결전",
			"boss": "pool_MirageTroupe_Encore_V1",
			"npc": "dune",
			"summary": "주인공은 듄과 함께 진홍빛 천막 무대에 올라가 최종보스 앙코르와 마주한다. 앙코르는 천막을 거두어 수많은 환상 관객을 보여주며 자신을 위해 진짜로 쓰러져 달라고 요청한다. 주인공은 앙코르의 엉성한 레이피어 공격을 피하고 대본을 덮어 환상 무대를 깨뜨린다.",
			"place": "진홍빛 천막 무대"
		}
	],
	"act_summary": {
		"climax_finale": "진홍빛 천막 무대에서 앙코르가 환상 관객을 불러내며 진짜로 쓰러져 달라고 요구하자, 주인공은 공격을 피하고 대본을 덮어 무대를 깨뜨린다.",
		"rising": "주인공은 극단장이 결투를 해본 적 없는 사기꾼이며 단원들이 그림자 없는 환영임을 알고, 계약을 해제하려면 대본을 덮어야 한다는 사실을 알아낸다.",
		"intro": "주인공은 사막 탈출 지도를 구하다 길잡이가 떨군 연극 대본을 펼치는 바람에 대본에 이름이 새겨지고, 사막 도적의 공격을 제압한다."
	}
};
