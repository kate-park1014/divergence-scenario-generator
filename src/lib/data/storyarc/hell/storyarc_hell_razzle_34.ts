import type { StoryArc } from '$lib/types';

export const storyarc_hell_razzle_34: StoryArc = {
	"id": "hell_razzle_34",
	"level": 34,
	"chapter_name": {
		"chinese": "地狱魔术秀",
		"hindi": "नरक सर्कस",
		"spanish": "Gran Circo",
		"korean": "지옥 마술쇼",
		"french": "Magie Enfer",
		"thai": "มายาขุมนรก",
		"vietnamese": "Ảo Thuật Quỷ",
		"english": "Hell Magic",
		"japanese": "地獄の奇術"
	},
	"theme": "hell",
	"world": {
		"setting": "유황 연기가 자욱하고 피로 물든 관람석이 둘러싼 지옥의 마술 서커스장.",
		"rule": "마술쇼 무대에서 종소리를 울리는 자는 환상 속에 갇히며 결코 제 발로 무대를 벗어날 수 없다.",
		"how": "은빛 마술 종을 흔들 때마다 은폐 장치가 작동하여 3미터 마술 상자 내부의 가시 톱니 회전 속도가 두 배로 빨라지고 영혼을 찢어 발긴다.",
		"secret": "마술 상자 안에는 탈출구가 없으며, 은빛 마술 종을 흔들 때마다 살점 분쇄 톱니가 강화되어 영혼을 갈아버린다. 종을 깨뜨려 환상을 부수는 것만이 살점 분쇄기를 멈추는 유일한 방법이다."
	},
	"protagonist_goal": "은빛 마술 종을 바닥에 깨뜨려 환영을 부순다",
	"boss_name_korean": "라즐",
	"act_tone": {
		"climax_finale": {
			"mood": "광기 어리고 비극적임",
			"tension": 5,
			"narrative_role": "라즐의 참혹한 구원관 폭로와 최종 결전"
		},
		"rising": {
			"narrative_role": "과거의 기억 교차와 서커스 단원들의 잔혹한 추격",
			"mood": "치열하고 씁쓸함",
			"tension": 3
		},
		"intro": {
			"tension": 1,
			"narrative_role": "지옥 마술 서커스의 등장과 기괴한 초대",
			"mood": "박진감 넘치고 긴박함"
		}
	},
	"final_boss": {
		"want": "탐험가들의 육신을 톱니로 분쇄하여 천국으로 승천시키는 성불 마술 쇼를 완성한다.",
		"true_identity": "지옥의 지독한 유황 독기에 뇌와 신성이 완전히 타버린 광기의 영혼 도살자. 마술 상자 내부의 가시 톱니로 살점을 짓뭉개 영혼을 강제로 정화하는 형벌 기계로 전락했습니다.",
		"twist": "낄낄낄! 왜 도망쳐, 왜?! 내가 네 썩은 가죽을 가시로 예쁘게 찔러서 무지갯빛 영혼 비단으로 바꿔준다는데! 자, 이 상자 속으로 쏙 들어와! 칼날이 창자를 콕! 콕! 쑤실 때마다 넌 천국에 한 걸음씩 가까워지는 거라고! 히히힉! 준비하시라, 내 인생 최고의 성불 마술 쇼를!",
		"motivation": "필멸자들의 육신을 가시 톱니로 찢어발겨야만 영혼이 정화되어 천국으로 갈 수 있다는 미친 구원관에 사로잡혀 있으며, 절규를 성불의 환호로 착각함.",
		"id": "Jester_Razzle_V1",
		"name": "Razzle",
		"appearance_boss": "지옥의 칠흑 같은 유황 구름 속에서 형광 핑크와 네온 옐로 광선이 튀어 오르는 3미터 크기의 마술 상자 형태. 내부에서 자수정 톱니바퀴와 프리즘 촉수가 무참히 움직임."
	},
	"global_foreshadowing": [
		{
			"hint": "1화 서커스 입구에서 은빛 마술 종을 흔들자 무대 구석의 보석 톱니에서 기계 마찰음이 울린다.",
			"reveal_act": "climax_finale",
			"reveal_context": "15화 보스전에서 은빛 마술 종을 울릴 때마다 마술 상자의 가시 톱니가 갈리는 소리였음이 밝혀진다.",
			"plant_room": 1,
			"id": "gf_1",
			"plant_act": "intro",
			"reveal_room": 15
		},
		{
			"plant_room": 3,
			"id": "gf_2",
			"hint": "3화 무대에서 피 묻은 마술 티켓에 적힌 구원이라는 글자 밑에 찢어진 살점 자국이 비친다.",
			"reveal_room": 9,
			"reveal_act": "climax_finale",
			"reveal_context": "9화 무대 뒤편에서 티켓의 구원이 영혼을 톱니로 갈아버리는 형벌이었음이 드러난다.",
			"plant_act": "rising"
		},
		{
			"plant_act": "rising",
			"plant_room": 5,
			"reveal_room": 5,
			"reveal_act": "climax_finale",
			"id": "gf_3",
			"reveal_context": "5화 라즐의 상자에서 영혼 비단이 억울하게 죽은 탐험가들의 찢긴 살점이었음이 밝혀진다.",
			"hint": "5화 유황 무대에서 피에로 인형의 배 속에서 잘려 나간 무지갯빛 영혼 비단 조각이 떨어진다."
		},
		{
			"reveal_context": "3화 환영 장막 뒤에 갇혔던 영혼들이 톱니 칼날에 도살당했음을 깨닫는다.",
			"reveal_room": 3,
			"hint": "9화 무대 뒤편 통로에서 잘린 금속 칼날 조각 3개가 보석 바퀴 주변에 떨어진다.",
			"id": "gf_4",
			"plant_room": 9,
			"reveal_act": "climax_finale",
			"plant_act": "rising"
		}
	],
	"npc_roles": {
		"ash": {
			"role": "길잡이",
			"arc": "1화에서 은빛 마술 종의 위험을 안내하는 인물. 5화에서 마술 상자에 갇혀 주인공이 종을 깨부수는 계기가 되며 연결되는 역할"
		},
		"vex": {
			"role": "조력자",
			"arc": "3화에서 유황 통로에서 기습을 함께 막는 인물. 4화에서 톱니 소리의 위험성을 알리며 연결되는 역할"
		},
		"pyre": {
			"role": "희생자",
			"arc": "1화에서 입구를 지키다 희생되는 인물. 5화에서 영혼 비단으로 바뀐 희생자로 발견되며 연결되는 역할"
		},
		"cinder": {
			"role": "감시자",
			"arc": "2화에서 과거 라즐의 마술쇼를 회상하는 인물. 4화에서 피 묻은 기계 톱니를 목격하고 라즐의 진실을 증언하며 연결되는 역할"
		}
	},
	"scenarioOutline": [
		{
			"order": 1,
			"title": "서커스장의 초대를 받다",
			"boss_trace": "피 묻은 마술 티켓",
			"npc": "ash",
			"place": "서커스 입구",
			"random_boss_title": "불타는 문지기",
			"act": "intro",
			"boss": "random_boss",
			"summary": "주인공은 서커스 입구에서 불타는 문지기에게 막히자, 은빛 마술 종을 흔들어 환영 열쇠를 소환한다. 피 묻은 마술 티켓을 주운 애쉬가 입장을 경고하지만 주인공은 서커스장 안으로 들어간다.",
			"random_boss_side": "warn"
		},
		{
			"summary": "주인공은 관람석 무대에서 과거 회상을 목격하며 사슬 곡예사와 맞선다. 주인공은 은빛 마술 종으로 관람석의 화염 구슬을 울린다. 신더는 라즐이 옛날에도 손님들을 탈출시킨 적이 없다고 경고한다.",
			"boss": "random_boss",
			"act": "rising",
			"place": "관람석 무대",
			"random_boss_title": "사슬 곡예사",
			"title": "불타는 무대의 회상",
			"npc": "cinder",
			"random_boss_side": "ally",
			"boss_trace": "부러진 환영 지팡이",
			"order": 2
		},
		{
			"random_boss_side": "warn",
			"random_boss_title": "독기 마술사",
			"act": "rising",
			"boss_trace": "찢어진 무지개 망토",
			"summary": "주인공은 유황 통로에서 독기 마술사의 환영 기습을 받자, 은빛 마술 종을 공중에 던져 환영 징검다리를 만든다. 벡스는 주변의 은빛 종소리가 날카로운 톱니 소리와 겹친다며 피 눈물을 흘린다.",
			"npc": "vex",
			"order": 3,
			"place": "유황 통로",
			"boss": "random_boss",
			"title": "칼날 무대의 기습"
		},
		{
			"random_boss_side": "ally",
			"summary": "주인공은 무대 뒤편에서 가시 조종사를 쓰러뜨리기 위해 은빛 마술 종의 공명으로 환영 장막을 찢는다. 신더는 마음을 바꾸어 피 묻은 기계 톱니를 직접 목격하고 라즐의 참극을 증언한다.",
			"boss_trace": "녹슨 톱니 바퀴",
			"boss": "random_boss",
			"random_boss_title": "가시 조종사",
			"npc": "cinder",
			"title": "무대 뒤편의 진실",
			"place": "무대 뒤편",
			"act": "rising",
			"order": 4
		},
		{
			"npc": "ash",
			"title": "최후의 구원 마술쇼",
			"boss": "pool_Jester_Razzle_V1",
			"place": "마술 상자 중앙 무대",
			"order": 5,
			"act": "climax_finale",
			"summary": "주인공은 마술 상자 중앙 무대에서 3미터 마술 상자로 변한 라즐과 대면한다. 라즐이 애쉬를 가시 톱니 상자 속에 넣고 짓뭉개려 하자, 주인공은 은빛 마술 종을 바닥에 깨뜨려 환영을 부순다. 마술 상자의 가시 톱니가 산산조각 나며 갇혀 있던 영혼들이 눈에 보이게 풀려난다."
		}
	],
	"act_summary": {
		"rising": "주인공은 지옥 단원들과 싸우며 과거 라즐의 마술쇼 기억을 교차해 목격하고, 종을 흔들수록 동료들의 몸이 찢기는 씁쓸한 진실을 발견한다.",
		"intro": "주인공은 은빛 마술 종을 흔들어 환영 열쇠를 소환하며 탈출 시도를 시작하지만 서커스장의 광기에 휘말린다.",
		"climax_finale": "주인공은 마술 상자의 참혹한 분쇄 톱니 진실을 깨닫고, 은빛 마술 종을 바닥에 깨뜨려 환영을 부순다."
	}
};
