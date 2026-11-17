import type { StoryArc } from '$lib/types';

export const storyarc_hell_porcellus_36: StoryArc = {
	"id": "hell_porcellus_36",
	"level": 36,
	"chapter_name": {
		"spanish": "El Acreedor",
		"french": "Créancier",
		"english": "Hell Banker",
		"thai": "เจ้าหนี้นรก",
		"chinese": "地狱债权人",
		"vietnamese": "Chủ Nợ Địa",
		"korean": "지옥의 채권자",
		"japanese": "地獄の債権者",
		"hindi": "नरक का"
	},
	"theme": "hell",
	"world": {
		"rule": "압류 영수증에 영수증 도장을 찍으면 지옥 이용료 청구가 성립되어 소유권이 포르셀루스에게 강제 이전된다.",
		"secret": "포르셀루스는 염라대왕과 지옥 전체를 담보로 잡아 압류했으며, 도장이 찍힐 때마다 대상의 생명력을 적금 통장에 적립한다.",
		"how": "영수증 도장이 찍힌 청구 서류가 저금통 등덜미 슬릿으로 들어가서 영혼과 생명력을 강제로 축적하고 압류한다.",
		"setting": "죄인들과 악마들의 영혼이 담보로 잡혀 끝없이 이자를 갚아야 하는 지옥 채권 압류소."
	},
	"protagonist_goal": "지옥 채권 압류소의 강제 채권 계약을 파기하고 포르셀루스에게 억류된 영혼들을 풀어준다.",
	"boss_name_korean": "포르셀루스",
	"act_tone": {
		"climax_finale": {
			"narrative_role": "최종 진실 폭발 및 영혼 해방",
			"mood": "기괴하고 절망적인 부조리함이 폭발하는 폭로의 순간",
			"tension": 5
		},
		"rising": {
			"mood": "수집되는 단서 속에 드러나는 끔찍한 채권의 진실",
			"narrative_role": "단서 수집 및 속임수 누적",
			"tension": 3
		},
		"intro": {
			"narrative_role": "사건의 시작 및 징수 계약 체결",
			"mood": "귀여운 저금통 뒤에 숨겨진 기괴한 압박감",
			"tension": 1
		}
	},
	"final_boss": {
		"want": "지옥을 찾은 자들의 생명력과 영혼을 강제 적립하여 지옥 전체의 소유권을 영구히 독점하는 것.",
		"name": "Porcellus",
		"twist": "어머~ 오빠들! 지옥 구경 재미있으셨어요? 그럼 이제 지옥 산소 호흡세, 용암 감상료, 흙밟기 과태료 계산서 청구할게요! 앙증맞은 저금통이라고 놀렸어? 지옥 염라대왕도 나한테 300년 만기 영혼 담보 대출받아서 지옥 운영하는 거 몰라?! 지금 당장 너희 생명력 전부 짤랑짤랑 적금 통장에 강제 압류다, 꿀!!!",
		"true_identity": "지옥에 떨어진 직후 유황불을 처먹고 불멸의 금속 몸매로 진화하여 지옥 악마들과 염라대왕의 영혼까지 영혼 대출 담보로 잡고 지옥 전체를 압류해 버린 지옥 최대의 삥뜯기 채권자이자 영혼 압류 집행관.",
		"id": "SoulVault_Porcellus_V1",
		"appearance_boss": "지옥의 펄펄 끓는 유황 용암 위를 앙증맞게 동동 떠다니는 핫핑크색과 형광 연두색의 영롱한 오팔빛 금속 돼지 저금통 형상의 정령입니다. 온몸에서 강렬한 무지갯빛 마법 오라와 황금색 빛줄기가 뿜어져 나오며, 콧구멍에서는 유황 연기 대신 형광 핑크색 하트 모양 연기가 퐁퐁 뿜어져 나옵니다. 앙증맞은 둔부에는 보석으로 장식된 스프링 꼬리가 팽팽하게 감겨 있고, 등덜미의 동전 입구 슬릿에서는 지옥의 악업이 뭉친 마그젠타색 무지개 광채가 쉼 없이 새어나옵니다. 작은 발을 꼼지락거릴 때마다 찌르르한 금속성 동전 짤랑이는 소리가 지옥 천장을 흔들 정도로 웅장하게 울려 퍼집니다.",
		"motivation": "탐험대가 지옥 바닥을 밟고 숨을 쉰 행위를 지옥 시설 무단 이용으로 규정하고, 이들이 가진 목숨과 마력을 억류하여 자신의 영혼 만기 적금 통장에 강제 납입시키려 합니다."
	},
	"global_foreshadowing": [
		{
			"reveal_context": "포르셀루스가 건넨 부조리한 지옥 이용료 청구서의 근거로 밝혀진다.",
			"plant_act": "intro",
			"reveal_room": 9,
			"plant_room": 1,
			"id": "gf_1",
			"hint": "노역 서류 하단에 작게 적힌 지옥 산소 호흡세 징수 조항 글자",
			"reveal_act": "climax_finale"
		},
		{
			"reveal_room": 15,
			"hint": "장부 표지에 찍힌 핑크색 하트 모양의 담보 압류 인장",
			"reveal_act": "climax_finale",
			"plant_room": 3,
			"plant_act": "rising",
			"id": "gf_2",
			"reveal_context": "모든 지옥 시설과 영혼이 포르셀루스에게 담보로 잡힌 표시였음이 드러난다."
		},
		{
			"reveal_act": "climax_finale",
			"hint": "염라대왕의 직인이 찍힌 300년 만기 영혼 대출 각서 조각",
			"plant_room": 5,
			"reveal_room": 5,
			"reveal_context": "지옥 통치자조차 포르셀루스의 채무자에 불과하다는 끔찍한 진실이 확인된다.",
			"plant_act": "rising",
			"id": "gf_3"
		},
		{
			"hint": "수납함 구석에 쌓인 죄수들의 영혼 수액 병",
			"id": "gf_4",
			"reveal_room": 1,
			"reveal_act": "climax_finale",
			"plant_room": 9,
			"plant_act": "rising",
			"reveal_context": "도장이 찍힐 때마다 죄인들의 생명력이 저금통에 강제 적립되던 원리임이 밝혀진다."
		}
	],
	"npc_roles": {
		"ash": {
			"role": "방관자",
			"arc": "4화에서 포르셀루스에게 지옥 소유권을 빼앗긴 채 이자 수납 업무를 도맡는 늙은 압류관으로 등장. 4화에서 주인공이 도장을 찍도록 유도한다."
		},
		"pyre": {
			"role": "조력자",
			"arc": "3화에서 염라대왕 직속 집행관이었으나 빚더미에 앉은 상황을 경고하는 인물로 등장한다."
		},
		"cinder": {
			"role": "피해자",
			"arc": "1화에서 유황 먼지 채굴장에서 노역 중인 불쌍한 죄수로 등장해 주인공에게 노직 확인 서명을 요청한다. 5화에서 포르셀루스의 채권 계약이 파기되자 용기를 얻고 굴레에서 벗어난다."
		},
		"soot": {
			"role": "제보자",
			"arc": "2화에서 지옥 장부를 관리하며 부조리한 채권 조항을 발견하고 주인공에게 증거를 제시하는 인물로 등장한다."
		}
	},
	"scenarioOutline": [
		{
			"npc": "cinder",
			"summary": "주인공은 유황 먼지 채굴장에서 노역 죄수 신더를 만나 억울한 사정을 듣고 노직 확인서에 영수증 도장을 찍는다. 저금통 짤랑이는 소리가 울리며 징수 계약이 체결된다.",
			"random_boss_side": "ally",
			"place": "유황 먼지 채굴장",
			"random_boss_title": "채굴 감독관",
			"boss": "random_boss",
			"title": "유황 채굴장의 억울한 죄수",
			"boss_trace": "저금통 짤랑이는 소리",
			"order": 1,
			"act": "intro"
		},
		{
			"npc": "soot",
			"boss": "random_boss",
			"random_boss_title": "창고 관리인",
			"boss_trace": "핑크색 하트 연기",
			"order": 2,
			"place": "장부 보관창고",
			"random_boss_side": "warn",
			"summary": "주인공은 장부 보관창고에서 장부 서기 그을음을 만나 기괴한 지옥 이용료 조항이 적힌 장부를 조사하고 서류에 영수증 도장을 찍는다. 공중에 핑크색 하트 연기가 피어오른다.",
			"title": "기괴한 장부의 비밀",
			"act": "rising"
		},
		{
			"random_boss_side": "ally",
			"random_boss_title": "대출 집행관",
			"summary": "주인공은 영혼 대출 집행실에서 하급 집행관 화염을 만나 염라대왕의 영혼 담보 각서를 확인하고 담보서에 영수증 도장을 찍는다. 저금통 몸체의 오팔빛 동전 슬릿이 빛난다.",
			"act": "rising",
			"boss": "random_boss",
			"npc": "pyre",
			"order": 3,
			"title": "염라대왕의 담보 각서",
			"boss_trace": "오팔빛 동전 슬릿",
			"place": "영혼 대출 집행실"
		},
		{
			"random_boss_side": "warn",
			"boss": "random_boss",
			"npc": "ash",
			"random_boss_title": "수납 검사관",
			"boss_trace": "마젠타색 광채 영수증",
			"order": 4,
			"place": "황금 이자 수납처",
			"act": "rising",
			"summary": "주인공은 황금 이자 수납처에서 늙은 압류관 애쉬를 만나 수납 확인서에 영수증 도장을 찍는다. 마젠타색 광채 영수증이 발행되며 영혼 생명력이 납입된다.",
			"title": "끝없는 이자 징수"
		},
		{
			"act": "climax_finale",
			"boss": "pool_SoulVault_Porcellus_V1",
			"npc": "cinder",
			"summary": "주인공은 핫핑크 용암 중앙 제단에서 핫핑크 돼지 저금통 정령 포르셀루스의 정체를 밝히고 영수증 도장을 부순다. 지옥 영혼 청구 계약이 파기되고 억류되었던 영혼들이 저금통 밖으로 복구된다.",
			"order": 5,
			"title": "지옥 영혼 적금의 종말",
			"place": "핫핑크 용암 중앙 제단"
		}
	],
	"act_summary": {
		"rising": "주인공은 장부 서기 그을음, 하급 집행관 화염, 늙은 압류관 애쉬를 만나며 지옥 장부와 담보 대출 서류를 조사한다. 주인공은 이들을 돕기 위해 서류마다 영수증 도장을 찍지만, 이 행동이 죄인들의 생명력을 포르셀루스의 적금 통장에 적립하는 행위였음을 알게 된다.",
		"climax_finale": "주인공은 포르셀루스가 핫핑크색 저금통 몸체에 염라대왕과 지옥 죄수들의 영혼을 담보로 잡고 지옥 전체를 압류한 진실을 파악한다. 주인공이 영수증 도장을 부수자 강제 체결되었던 지옥 이용료 채권 계약이 즉시 파기되고, 저금통 슬릿에서 억류되었던 영혼들이 밖으로 뿜어져 나와 본래의 지옥 형벌 구역으로 복구된다.",
		"intro": "주인공은 지옥의 유황 먼지 채굴장에서 노역 죄수 신더를 만나 억울한 사정을 듣고 노직 확인서에 영수증 도장을 찍는다. 저금통 짤랑이는 소리가 울리며 징수 계약이 성립된다."
	}
};
