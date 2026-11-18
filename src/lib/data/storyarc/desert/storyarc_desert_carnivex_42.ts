import type { StoryArc } from '$lib/types';

export const storyarc_desert_carnivex_42: StoryArc = {
	"id": "desert_carnivex_42",
	"level": 42,
	"chapter_name": {
		"french": "Os du désert",
		"chinese": "沙漠之骨",
		"vietnamese": "Xương sa mạc",
		"english": "Desert Bones",
		"spanish": "Huesos",
		"korean": "사막의 뼈",
		"japanese": "砂漠の骨",
		"thai": "กระดูกทราย",
		"hindi": "रेत की हड्डी"
	},
	"theme": "desert",
	"world": {
		"setting": "뜨거운 사막 아래에 있는 지하 뼈 동굴",
		"how": "노란 물은 거대한 지네 괴물 카르니벡스가 쓰러진 검객들의 골수를 삼키고 내뱉은 독성 진액이기 때문이다.",
		"rule": "노란 물을 받아 마시면 마신 사람의 뼈가 녹아 바닥에 쓰러진다.",
		"secret": "친절했던 모래 길잡이의 정체는 사람의 골수를 먹고 자란 거대한 지네 괴물이다. 놈은 지나가는 사람들에게 골수가 녹는 물을 마시게 한 뒤 뼈를 삼켜 자기 갑옷을 단단하게 만들고 있었다."
	},
	"protagonist_goal": "주인공은 사막 독을 풀 치료법을 찾고 카르니벡스의 노란 물병을 깨부수어야 한다. 독을 풀지 못하면 노란 물을 마신 동료 아미르가 목숨을 잃기 때문이다.",
	"boss_name_korean": "카르니벡스",
	"act_tone": {
		"climax_finale": {
			"tension": 5,
			"mood": "기괴하고 섬뜩한 공포",
			"narrative_role": "정체를 드러낸 괴물과의 최종 결전"
		},
		"rising": {
			"tension": 3,
			"narrative_role": "단서를 모으며 괴물의 정체에 접근",
			"mood": "조여오는 불안감"
		},
		"intro": {
			"narrative_role": "모란 물의 위험성과 위기의 시작",
			"mood": "메마르고 불길한 분위기",
			"tension": 1
		}
	},
	"final_boss": {
		"id": "BoneScab_Carnivex_V1",
		"name": "Carnivex",
		"appearance_boss": "백골빛 껍질과 청동 갑각이 마디마디 이어진 거대한 지네 모습이다. 마디마다 부러진 칼날이 돋아 있고 등껍질 아래로 삼킨 해골 그림자가 비친다.",
		"true_identity": "전장에서 쓰러진 검객들의 뼈에 기생하던 곤충 괴물입니다. 먹이가 떨어지자 사막 모래 아래 숨어들어 묻힌 유골의 골수를 먹고 거대해졌습니다.",
		"motivation": "껍질을 더 거대하고 단단하게 만들기 위해 탐험대의 골수를 노립니다.",
		"want": "사람들의 골수를 삼켜 자기 껍질을 더 거대하고 단단하게 만드는 것이다.",
		"twist": "친절했던 길잡이가 거대한 지네 괴물로 뒤틀리며 본색을 드러냅니다. \"당신들이 마신 물은 녹아내린 검객들의 골수였답니다! 이제 당신들의 뼈도 내 갑옷으로 만들어 줄게요!\""
	},
	"global_foreshadowing": [
		{
			"reveal_context": "2화 석조 폐허에서 상인 카사이를 만나 그 자국이 뼈를 녹이는 독물이라는 사실을 확인한다.",
			"hint": "호박색 진액 자국",
			"reveal_room": 3,
			"id": "foreshadowing_1",
			"plant_room": 1,
			"plant_order": 1
		},
		{
			"hint": "백골빛 껍질 조각",
			"id": "foreshadowing_2",
			"plant_order": 2,
			"reveal_context": "3화 협곡 동굴에서 그 껍질 조각이 유골의 골수를 먹고 자란 곤충 괴물의 껍질임을 알게 된다.",
			"reveal_room": 5,
			"plant_room": 3
		},
		{
			"id": "foreshadowing_3",
			"hint": "부러진 청동 칼날",
			"plant_order": 3,
			"reveal_context": "4화 모래 구덩이에서 그 칼날이 괴물에게 희생당한 옛 전사들의 무기라는 사실을 확인한다.",
			"plant_room": 5,
			"reveal_room": 9
		},
		{
			"reveal_context": "5화 지하 동굴에서 뼈마디가 긁힌 자국을 낸 거대한 지네 괴물 카르니벡스가 나타난다.",
			"plant_order": 4,
			"id": "foreshadowing_4",
			"hint": "뼈마디가 긁힌 자국",
			"reveal_room": 15,
			"plant_room": 9
		}
	],
	"npc_roles": {
		"dune": {
			"role": "협곡 동굴의 거주자",
			"arc": "3화에서 길잡이가 유골의 골수를 먹고 자란 곤충 괴물이라는 진실을 밝힌다."
		},
		"kemet": {
			"role": "모래 구덩이의 파수꾼",
			"arc": "4화에서 바닥의 자국이 괴물의 발자국이며 골수로 갑옷을 다듬는다고 알려준다."
		},
		"amir": {
			"role": "독에 중독된 동료",
			"arc": "1화에서 노란 물을 마시고 쓰러졌다가 5화에서 주인공과 함께 지하 동굴로 들어간다."
		},
		"kasai": {
			"role": "석조 폐허의 상인",
			"arc": "2화에서 껍질 조각을 살펴본 뒤 노란 물이 뼈를 녹이는 독임을 알려준다."
		}
	},
	"scenarioOutline": [
		{
			"order": 1,
			"act": "intro",
			"title": "사막의 물병",
			"boss": "random_boss",
			"npc": "amir",
			"summary": "주인공과 아미르는 목이 말라 오아시스를 찾다가 모래 길잡이가 놓아둔 노란 물병을 발견한다. 지친 아미르가 덥석 노란 물을 받아 마시자 모래 도굴꾼이 나타나 위험한 물을 마셨다며 몽둥이를 휘두른다. 주인공은 도굴꾼을 쓰러뜨리지만 아미르는 곧 다리 뼈가 녹는 통증을 느끼며 바닥에 쓰러진다. 아미르의 발밑에 호박색 진액 자국이 희미하게 남아 있자, 주인공은 친구를 살릴 해독제를 찾아 사막 깊은 곳으로 떠난다.",
			"place": "뜨거운 사막 언덕",
			"random_boss_title": "모래 도굴꾼",
			"random_boss_side": "warn",
			"boss_trace": "호박색 진액 자국"
		},
		{
			"order": 2,
			"act": "rising",
			"title": "폐허의 상인",
			"boss": "random_boss",
			"npc": "kasai",
			"summary": "주인공은 친구 아미르의 다리를 고치기 위해 상인 카사이를 찾아서 잊힌 석조 폐허로 들어간다. 오아시스 파수꾼이 나타나 길잡이의 물은 신성한 영약이라며 거짓말로 주인공을 속이고 칼을 빼든다. 주인공은 파수꾼을 제압하고 바닥에 떨어진 백골빛 껍질 조각을 카사이에게 보여준다. 카사이는 껍질 조각을 살펴보더니 길잡이가 준 노란 물이 사람의 뼈를 녹이는 무서운 독이라고 알려준다.",
			"place": "잊힌 석조 폐허",
			"random_boss_title": "오아시스 파수꾼",
			"random_boss_side": "ally",
			"boss_trace": "백골빛 껍질 조각"
		},
		{
			"order": 3,
			"act": "rising",
			"title": "협곡의 전설",
			"boss": "random_boss",
			"npc": "dune",
			"summary": "주인공은 독의 치료법을 아는 주술사를 찾아 바위 협곡 동굴로 걸음을 옮긴다. 동굴 입구를 지키던 바람 현자가 괴물의 영역이라 위험하다며 기도를 읊고 주인공을 공격한다. 주인공은 바람 현자를 제압한 뒤 동굴 구석에서 부러진 청동 칼날을 발견한다. 동굴 안에 거주하던 듄은 그 칼날이 옛 전사들의 무기이며, 길잡이가 유골의 골수를 먹고 자란 곤충 괴물이라는 진실을 밝힌다.",
			"place": "바위 협곡 동굴",
			"random_boss_title": "바람 현자",
			"random_boss_side": "warn",
			"boss_trace": "부러진 청동 칼날"
		},
		{
			"order": 4,
			"act": "rising",
			"title": "모래 구덩이",
			"boss": "random_boss",
			"npc": "kemet",
			"summary": "해독 샘물의 위치를 알아내기 위해 주인공은 붉은 모래 구덩이로 이동한다. 모래 약탈자가 나타나 길잡이가 기다리고 있다며 거짓 기쁨을 노래하고 주인공의 목을 노린다. 주인공은 약탈자를 격퇴한 뒤 바닥에 섬뜩하게 패인 뼈마디가 긁힌 자국을 관찰한다. 구덩이를 지키던 케메트는 그 자국이 괴물의 발자국이며, 놈이 뼈에서 골수를 뽑아 자기 갑옷을 단단하게 다듬는다고 털어놓는다.",
			"place": "붉은 모래 구덩이",
			"random_boss_title": "모래 약탈자",
			"random_boss_side": "ally",
			"boss_trace": "뼈마디가 긁힌 자국"
		},
		{
			"order": 5,
			"act": "climax_finale",
			"title": "카르니벡스",
			"boss": "pool_BoneScab_Carnivex_V1",
			"npc": "amir",
			"summary": "주인공은 몸을 추스른 아미르와 함께 뼈가 가득 쌓인 지하 동굴로 들어가 길잡이 카르니벡스와 마주한다. 친절했던 길잡이는 백골빛 껍질을 가진 거대한 지네 괴물로 뒤틀리더니, 당신들이 마신 물은 검객의 골수였다며 소름 끼치게 웃어댄다. 치열한 전투 끝에 주인공은 카르니벡스의 마디 사이에 무기를 찔러 넣고 괴물을 정복한다. 주인공은 놈이 골수를 탐하지 못하도록 바닥에 떨어진 노란 물병을 깨부순다.",
			"place": "지하 뼈 동굴"
		}
	],
	"act_summary": {
		"climax_finale": "지하 뼈 동굴에서 친절했던 길잡이가 본색을 드러내며 거대한 지네 괴물 카르니벡스로 변한다. 주인공은 괴물의 마디 사이를 공격해 물리치고 노란 물병을 깨부순다.",
		"intro": "주인공과 아미르는 사막에서 오아시스를 찾다가 모래 길잡이가 놓아둔 노란 물병을 발견한다. 물을 마신 아미르의 다리 뼈가 녹기 시작하자 주인공은 친구를 살릴 해독제를 찾아 떠난다.",
		"rising": "주인공은 석조 폐허, 바위 협곡, 모래 구덩이를 차례로 탐험한다. 그 과정에서 카사이, 듄, 케메트를 만나 길잡이가 골수를 먹는 곤충 괴물이라는 사실을 알아낸다."
	}
};
