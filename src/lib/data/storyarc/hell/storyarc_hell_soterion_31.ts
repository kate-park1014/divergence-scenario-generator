import type { StoryArc } from '$lib/types';

export const storyarc_hell_soterion_31: StoryArc = {
	"id": "hell_soterion_31",
	"level": 31,
	"chapter_name": {
		"hindi": "देवों का पाप",
		"korean": "신들의 죄",
		"japanese": "神々の罪",
		"thai": "บาปแห่งเทพ",
		"english": "Gods' Sin",
		"vietnamese": "Tội của thần",
		"french": "Crime divin",
		"chinese": "众神之罪",
		"spanish": "El Pecado"
	},
	"theme": "hell",
	"world": {
		"setting": "유황 지옥에 있는 용암 지대와 신전들",
		"secret": "소테리온은 신들이 자기들의 죄를 감추려고 만든 피조물이다. 신들은 자기 죄를 그의 가슴에 밀어 넣고 지옥 바닥에 던져 버렸다.",
		"rule": "가슴의 크리스털을 결계로 감싸 보호하면 지옥 문이 더 강하게 닫히고 동료들이 용암 지대에 갇힌다.",
		"how": "결계가 지열을 자극하여 지옥 문을 더 강하게 닫기 때문이다."
	},
	"protagonist_goal": "소테리온의 가슴속 크리스털을 검으로 베어 지옥 문을 열어야 한다. 무너진 지옥 문을 열지 못하면 용암 지대에 갇힌 동료들이 목숨을 잃기 때문이다.",
	"boss_name_korean": "소테리온",
	"act_tone": {
		"climax_finale": {
			"narrative_role": "최종 결전과 진실의 폭발",
			"mood": "비장하고 격정적인 분위기",
			"tension": 5
		},
		"rising": {
			"mood": "어둡고 의혹에 찬 분위기",
			"tension": 3,
			"narrative_role": "단서 수집과 의심의 심화"
		},
		"intro": {
			"mood": "위태롭고 혼란스러운 분위기",
			"narrative_role": "사건의 발단과 위기 조성",
			"tension": 1
		}
	},
	"final_boss": {
		"id": "Scapegoat_Soterion_V1",
		"name": "Soterion",
		"appearance_boss": "머리 위에 에메랄드빛 후광이 맴돌며 거대한 보석 날개를 펼치고 있다. 가슴 중앙에는 내부가 들여다보이는 투명한 크리스털 구조가 자리한다.",
		"surface_identity": "지옥에 내려와 죄인들을 엄하게 벌하는 신성한 재판관입니다. 신들의 명령을 받고 죄를 심판한다고 알려져 있습니다.",
		"true_identity": "사실은 마법 대륙의 신들이 자기들의 죄와 더러운 저주를 감추려고 만든 피조물입니다. 신들은 그 죄를 모두 그의 가슴속에 밀어 넣고 지옥 바닥에 버렸습니다.",
		"motivation": "누군가 자기 가슴을 베어 주기를 바랍니다. 가슴이 깨지면 갇혀 있던 죄가 터져 나와 자신을 버린 신들에게 되돌아가기 때문에, 강한 탐험대에게 일부러 싸움을 겁니다.",
		"motive_scene": "신들이 자신들의 죄와 더러운 저주를 피조물의 가슴에 모아 쑤셔 넣은 뒤 지옥의 유황 바닥에 던져 버렸다.",
		"want": "누군가 자신의 가슴속 크리스털을 검으로 베어 깨뜨려 주기를 바란다.",
		"twist": "그의 가슴 껍데기에 금이 가자, 신들이 감춰 온 죄가 새어 나오기 시작합니다. \"나를 베어라! 내 가슴이 깨지는 날, 나를 버린 신들도 함께 무너질 것이다!\""
	},
	"global_foreshadowing": [
		{
			"hint": "지옥 입구 바닥에서 에메랄드빛 형광 가루를 발견한다.",
			"plant_room": 1,
			"plant_order": 1,
			"id": "foreshadowing_1",
			"reveal_context": "에메랄드빛 가루가 소테리온의 머리 위 후광에서 떨어진 조각임을 확인한다.",
			"reveal_room": 1
		},
		{
			"reveal_context": "붉은 보석 깃털이 소테리온의 거대한 날개에서 떨어진 조각임을 확인한다.",
			"reveal_room": 3,
			"plant_room": 3,
			"id": "foreshadowing_2",
			"hint": "절벽 아래에 떨어진 붉은 보석 깃털을 건네받는다.",
			"plant_order": 2
		},
		{
			"reveal_context": "기록화의 인장이 신들이 그를 피조물로 봉인할 때 새긴 문양임을 확인한다.",
			"id": "foreshadowing_3",
			"plant_order": 3,
			"reveal_room": 5,
			"plant_room": 5,
			"hint": "신전 벽면에서 소테리온의 인장이 찍힌 고대 기록화를 발견한다."
		},
		{
			"plant_room": 9,
			"reveal_room": 15,
			"reveal_context": "오팔 빛 조각이 소테리온이 앉아 있던 신전 옥좌의 파편임을 알게 된다.",
			"hint": "깨진 오팔 빛 조각 곁에 세워진 비석을 조사한다.",
			"id": "foreshadowing_4",
			"plant_order": 4
		}
	],
	"npc_roles": {
		"ash": {
			"role": "주인공의 동행 길잡이",
			"arc": "1화에서 입구를 안내하고 4화에서 가슴을 베어야 한다는 단서를 전하며 5화에서 보스전까지 동행한다."
		},
		"brim": {
			"role": "고서적 연구가",
			"arc": "3화에서 신전 기록화를 발견하여 주인공에게 보여 준다."
		},
		"cinder": {
			"role": "죄수 탈출 조력자",
			"arc": "2화에서 주인공에게 보석 깃털을 건네며 재판관 소문을 전한다."
		}
	},
	"scenarioOutline": [
		{
			"order": 1,
			"act": "intro",
			"title": "재판관의 벼락",
			"boss": "random_boss",
			"npc": "ash",
			"summary": "주인공은 지옥 입구에서 길잡이 애쉬를 만나 용암 지대로 들어선다. 재판관 소테리온이 내린 벼락으로 지옥 문이 막히자 주인공은 바닥의 가슴의 크리스털을 결계로 감싸 보호한다. 결계가 펼쳐지자 지옥 문이 더 강하게 닫히고 동료들은 용암 지대에 갇힌다. 용암 파수꾼이 무모한 결계가 지열을 자극한다고 경고하며 공격해 오자 주인공은 그를 제압한다.",
			"place": "유황 지옥 입구",
			"random_boss_title": "용암 파수꾼",
			"random_boss_side": "warn",
			"boss_trace": "에메랄드빛 형광 가루"
		},
		{
			"order": 2,
			"act": "rising",
			"title": "붉은 깃털의 소문",
			"boss": "random_boss",
			"npc": "cinder",
			"summary": "동료들을 구하려고 통곡의 유황 절벽에 도착한 주인공은 죄수 탈출을 돕는 신더를 만난다. 신더는 절벽 아래 떨어진 붉은 보석 깃털을 건네며 재판관이 신들의 명령을 수행 중이라 전한다. 주인공은 소테리온이 벌한 죄인들이 모두 신들의 비리를 아는 자들이라는 소문을 듣는다. 재판관 편인 지옥 옥사장이 의심을 품지 말라며 몽둥이를 휘두르자 주인공은 그를 물리친다.",
			"place": "통곡의 유황 절벽",
			"random_boss_title": "지옥 옥사장",
			"random_boss_side": "ally",
			"boss_trace": "붉은 보석 깃털"
		},
		{
			"order": 3,
			"act": "rising",
			"title": "신전의 기록화",
			"boss": "random_boss",
			"npc": "brim",
			"summary": "동료들의 탈출 방법을 찾고자 묵시의 죄악 신전에 도달한 주인공은 고서적을 조사하던 브림을 만난다. 브림은 신전 벽면에서 소테리온의 인장이 찍힌 고대 기록화를 발견해 보여준다. 주인공은 엄정한 재판관이 지옥의 죄인이 아니라 신들이 만든 피조물일지 모른다는 의심을 품는다. 흑암의 기사가 신전의 금기를 건드리면 신전이 무너진다고 경고하며 무기를 들자 주인공은 그를 제압한다.",
			"place": "묵시의 죄악 신전",
			"random_boss_title": "흑암의 기사",
			"random_boss_side": "warn",
			"boss_trace": "신성한 재판관 인장"
		},
		{
			"order": 4,
			"act": "rising",
			"title": "부서진 비석의 단서",
			"boss": "random_boss",
			"npc": "ash",
			"summary": "갇힌 동료들을 살릴 단서를 쫓아 용암 신전 폐허로 간 주인공은 먼저 도착한 애쉬와 다시 만난다. 애쉬는 깨진 오팔 빛 조각 곁의 비석을 해석하여 재판관의 가슴을 베어 깨뜨려야만 문이 열린다는 사실을 알려준다. 진실을 가리려는 유황 연금술사가 연막탄을 던지며 방해하자 주인공은 그를 물리친다. 주인공은 동료들을 구하기 위해 소테리온이 있는 심연으로 발걸음을 옮긴다.",
			"place": "용암 신전 폐허",
			"random_boss_title": "유황 연금술사",
			"random_boss_side": "ally",
			"boss_trace": "깨진 오팔 빛 조각"
		},
		{
			"order": 5,
			"act": "climax_finale",
			"title": "깨어진 크리스털",
			"boss": "pool_416",
			"npc": "ash",
			"summary": "애쉬와 함께 지옥 심연의 옥좌에 도달한 주인공은 마침내 소테리온과 맞선다. 소테리온은 거대한 날개를 펼치며 일부러 사납게 공격을 퍼부어 주인공의 검을 유도한다. 주인공은 애쉬가 일러준 대로 검에 힘을 실어 소테리온의 가슴의 크리스털을 검으로 베어 깨뜨린다. 가슴속에서 신들의 죄악이 터져 나오며 닫혔던 지옥 문이 열리고 갇혔던 동료들이 무사히 구출된다.",
			"place": "지옥 심연의 옥좌"
		}
	],
	"act_summary": {
		"intro": "주인공은 유황 지옥 입구에서 결계를 펼쳤다가 지옥 문이 닫혀 동료들이 용암 지대에 갇히는 위기를 겪는다.",
		"climax_finale": "주인공은 심연의 옥좌에서 소테리온의 가슴속 크리스털을 검으로 베어 깨뜨리고 지옥 문을 열어 동료들을 구한다.",
		"rising": "주인공은 동료를 구할 단서를 찾아 신전을 탐색하며 재판관 소테리온이 신들이 만든 피조물이라는 진실에 다가선다."
	}
};
