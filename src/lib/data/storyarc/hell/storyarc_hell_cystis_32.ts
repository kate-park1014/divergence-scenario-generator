import type { StoryArc } from '$lib/types';

export const storyarc_hell_cystis_32: StoryArc = {
	"id": "hell_cystis_32",
	"level": 32,
	"chapter_name": {
		"korean": "지옥의 옥빛 연꽃",
		"vietnamese": "Sen địa ngục",
		"hindi": "नरक का कमल",
		"english": "Hell Lotus",
		"japanese": "地獄の玉蓮",
		"thai": "ดอกบัวนรก",
		"chinese": "地狱玉莲",
		"french": "Lotus",
		"spanish": "Loto"
	},
	"theme": "hell",
	"world": {
		"rule": "연꽃 약을 마시면 배 속에서 기생충 알이 깨어나 몸을 깨뜨린다.",
		"secret": "치료 약을 주던 구원자는 기생충으로 불사를 연구하는 연금술사였다. 약은 기생충 알이었다.",
		"how": "나눠 준 연꽃 약이 몸속에서 기생충 알로 자라나기 때문이다.",
		"setting": "지옥 구역에 있는 유황 웅덩이"
	},
	"protagonist_goal": "지옥의 열기에 쓰러진 동료를 치료해야 한다. 제때 치료하지 않으면 동료가 살아 돌아가지 못하기 때문이다.",
	"boss_name_korean": "시스티스",
	"act_tone": {
		"climax_finale": {
			"narrative_role": "기생충의 원인을 태워 보스를 격퇴함",
			"mood": "소름 돋고 기괴한 분위기",
			"tension": 5
		},
		"intro": {
			"narrative_role": "동료를 구하려 약을 마시는 출발점",
			"mood": "불길하고 불안한 분위기",
			"tension": 1
		},
		"rising": {
			"mood": "엽기적이고 의심스러운 분위기",
			"tension": 3,
			"narrative_role": "구원자와 약에 숨겨진 기생충의 비밀을 파헤침"
		}
	},
	"final_boss": {
		"id": "NeonParasite_Cystis_V1",
		"name": "Cystis",
		"appearance_boss": "유황 웅덩이 위에 뜬 옥빛 상반신의 연꽃이다. 연꽃 뒤로 수천 개의 노란 눈알과 이빨 구멍이 박동한다.",
		"surface_identity": "지옥 불길 속에서 아파하는 이들의 상처를 치료해 주는 구원자입니다. 맑은 약과 연꽃을 나눠 주며 고통을 덜어 줍니다.",
		"true_identity": "영원히 사는 약을 만들다 마법 대륙에서 쫓겨난 미친 연금술사입니다. 그가 나눠 준 약은 사실 몸속에서 기생충을 깨어나게 하는 알입니다.",
		"motivation": "탐험대처럼 튼튼한 몸에 기생충 알을 심으려 합니다. 튼튼한 몸이 영원히 사는 약을 키울 가장 좋은 둥지라고 믿기 때문입니다.",
		"motive_scene": "마법 대륙의 학자들이 불사약을 연구하던 연금술사의 실험실을 덮쳐 기생충 항아리를 지옥 웅덩이에 던져 버렸다.",
		"want": "주인공처럼 튼튼한 몸을 기생충의 둥지로 만드는 것",
		"twist": "약을 마신 사람의 배 속에서 무언가 꿈틀거립니다. 맑던 얼굴 뒤로 눈알과 이빨이 빼곡한 구멍들이 열리며 보스가 웃습니다. \"배 속에서 내 아이들이 움직이는 게 느껴지니? 이제 네 몸이 내 둥지야!\""
	},
	"global_foreshadowing": [
		{
			"id": "hint_lotus_bottle",
			"reveal_context": "5화에서 보스가 기생충 알을 담아 퍼뜨리던 약병이었음이 밝혀진다.",
			"plant_order": 1,
			"plant_room": 1,
			"hint": "유황 구덩이에서 옥빛 연꽃 모양 약병을 얻는다.",
			"reveal_room": 3
		},
		{
			"plant_order": 2,
			"plant_room": 3,
			"reveal_room": 5,
			"hint": "싸움터 바닥에서 형광빛 기생충 껍질을 발견한다.",
			"reveal_context": "5화에서 보스가 키워낸 기생충의 허물이었음이 밝혀진다.",
			"id": "hint_parasite_shell"
		},
		{
			"reveal_room": 9,
			"reveal_context": "5화에서 보스의 연꽃 뒤편에 돋아난 눈알 덩어리 일부임이 밝혀진다.",
			"plant_order": 3,
			"hint": "시체 수집가를 제압한 뒤 노란 눈알 모양 장신구를 줍는다.",
			"plant_room": 5,
			"id": "hint_eye_ornament"
		},
		{
			"reveal_context": "5화에서 보스의 입과 이빨 구멍에서 뜯겨 나온 흔적임이 밝혀진다.",
			"reveal_room": 15,
			"hint": "호위병을 물리치고 징그러운 이빨 자국이 남은 잔을 본다.",
			"id": "hint_teeth_cup",
			"plant_order": 4,
			"plant_room": 9
		}
	],
	"npc_roles": {
		"cinder": {
			"role": "제단의 단서를 파악하는 추적자",
			"arc": "4화에서 강한 몸일수록 알이 일찍 깨어난다는 단서를 알려준다."
		},
		"brim": {
			"role": "소문을 전하는 골짜기의 정찰꾼",
			"arc": "2화에서 약의 부작용을 경고하고 약병을 불태우는 방법을 알려준다."
		},
		"ash": {
			"role": "주인공을 안내하는 길잡이",
			"arc": "1화에서 약병을 건네고 5화에서 연꽃 웅덩이까지 함께 이동한다."
		},
		"mara": {
			"role": "기록을 조사하는 강가의 정보원",
			"arc": "3화에서 연금술사에 대한 문서를 보여준다."
		}
	},
	"scenarioOutline": [
		{
			"order": 1,
			"act": "intro",
			"title": "유황 구덩이의 만남",
			"boss": "random_boss",
			"npc": "ash",
			"summary": "주인공은 열병으로 쓰러진 동료를 구하기 위해 유황 구덩이에서 애쉬를 만난다. 애쉬는 불길 속 구원자가 다친 이들을 고쳐 준다며 옥빛 연꽃 모양 약병을 건넨다. 파수꾼이 외부인이 지옥 약을 함부로 쓰면 재앙이 온다며 몽둥이를 휘두른다. 주인공은 파수꾼을 무찌른 뒤 동료를 살리기 위해 연꽃 약을 마신다.",
			"place": "유황 열기 구덩이",
			"random_boss_title": "지옥 파수꾼",
			"random_boss_side": "warn",
			"boss_trace": "옥빛 연꽃 모양 약병"
		},
		{
			"order": 2,
			"act": "rising",
			"title": "뼈 골짜기의 소문",
			"boss": "random_boss",
			"npc": "brim",
			"summary": "주인공은 쓰러진 동료를 짊어지고 치료법을 찾기 위해 골짜기에서 브림을 만난다. 브림은 약을 마신 이들이 배를 움켜쥐며 사라졌고 그 약은 배 속을 끓게 만든다는 말을 전한다. 구원자를 따르는 뼈 사냥꾼이 은혜를 의심하지 말라며 가하려는 길을 막고 공격한다. 주인공은 싸움터 바닥에서 형광빛 기생충 껍질을 발견하고, 브림에게 연꽃 약병을 불길에 던져야 독성이 태워진다는 말을 듣는다.",
			"place": "통곡의 뼈 골짜기",
			"random_boss_title": "뼈 사냥꾼",
			"random_boss_side": "ally",
			"boss_trace": "형광빛 기생충 껍질"
		},
		{
			"order": 3,
			"act": "rising",
			"title": "검은 연못의 흔적",
			"boss": "random_boss",
			"npc": "mara",
			"summary": "주인공은 배 속에서 무언가 꿈틀거리는 통증을 느끼며 마라가 머무는 강가로 이동한다. 마라는 구원자가 불사약을 연구하다 마법 대륙에서 쫓겨난 연금술사라는 소문이 적힌 문서를 보여 준다. 연못을 지키는 시체 수집가가 시체가 썩기 전에 속이 비어 버린다며 접근을 차단한다. 수집가를 제압한 자리에서 노란 눈알 모양 장신구가 굴러떨어진다.",
			"place": "검은 연못 강가",
			"random_boss_title": "시체 수집가",
			"random_boss_side": "warn",
			"boss_trace": "노란 눈알 장신구"
		},
		{
			"order": 4,
			"act": "rising",
			"title": "붉은 제단의 진실",
			"boss": "random_boss",
			"npc": "cinder",
			"summary": "주인공은 붉은 제단에서 신더를 만나 정체 모를 기운의 진실을 물어본다. 신더는 탐험대처럼 강인한 몸일수록 몸속에 심어진 알이 더 빨리 깨어난다는 단서를 밝힌다. 제단을 지키는 호위병이 구원자의 둥지를 방해하지 말라며 도끼를 휘두른다. 호위병을 물리친 주인공은 징그러운 이빨 자국이 남은 잔을 발견한다.",
			"place": "자홍색 붉은 제단",
			"random_boss_title": "광신도 호위병",
			"random_boss_side": "ally",
			"boss_trace": "이빨 자국 남은 잔"
		},
		{
			"order": 5,
			"act": "climax_finale",
			"title": "옥빛 연꽃의 제단",
			"boss": "pool_417",
			"npc": "ash",
			"summary": "주인공은 애쉬와 함께 마침내 구원자 시스티스가 있는 연꽃 웅덩이에 도착한다. 시스티스는 옥빛 상반신 뒤로 눈알과 이빨 구멍을 드러내며 튼튼한 둥지가 완성되었다고 비웃는다. 주인공은 덤벼드는 시스티스에 맞서 싸우며 가지고 있던 연꽃 약병을 불길에 던져 태운다. 약병이 태워지자 배 속 기생충들이 비명을 지르며 잿더미로 변한다.",
			"place": "지옥 연꽃 웅덩이"
		}
	],
	"act_summary": {
		"climax_finale": "시스티스의 본 모습을 확인한 주인공은 연꽃 약병을 불길에 태워 기생충을 퇴치한다.",
		"intro": "주인공은 열병으로 쓰러진 동료를 고치려고 유황 구덩이에서 연꽃 약을 마신다.",
		"rising": "골짜기와 강가를 지나며 주인공은 연꽃 약의 정체가 배 속에서 자라는 기생충 알임을 깨닫는다."
	}
};
