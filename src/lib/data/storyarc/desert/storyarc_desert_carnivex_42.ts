import type { StoryArc } from '$lib/types';

export const storyarc_desert_carnivex_42: StoryArc = {
	"id": "desert_carnivex_42",
	"level": 42,
	"chapter_name": {
		"korean": "사막의 백골 길",
		"english": "Bone Path",
		"japanese": "白骨の道",
		"chinese": "白骨之路",
		"french": "Voie des Os",
		"spanish": "Camino Óseo",
		"vietnamese": "Bạch Cốt Đạo",
		"thai": "ทางกระดูก",
		"hindi": "अस्थि मार्ग"
	},
	"theme": "desert",
	"world": {
		"setting": "메마른 사막에 있는 괴물의 굴",
		"how": "그 물이 괴물이 사람들의 뼈에서 뽑아낸 골수이기 때문이다.",
		"secret": "길잡이가 준 노란 물은 사람들의 뼈에서 뽑아낸 골수였다. 괴물은 사람들의 골수를 먹어 자기 껍질을 단단하게 만든다.",
		"rule": "노란 물병의 물을 마시면 뼈가 녹아내린다."
	},
	"protagonist_goal": "모래 길잡이의 정체를 파헤치고 사막의 괴물 카르니벡스를 물리친다.",
	"boss_name_korean": "카르니벡스",
	"act_tone": {
		"rising": {
			"mood": "조여오는 불안감의 분위기",
			"tension": 3,
			"narrative_role": "비밀의 단서를 모으며 정체를 파악함"
		},
		"intro": {
			"tension": 1,
			"mood": "의심스러운 목마름의 분위기",
			"narrative_role": "사막 탐험과 이상한 물병과의 첫 만남"
		},
		"climax_finale": {
			"mood": "긴박하고 서늘한 분위기",
			"tension": 5,
			"narrative_role": "본색을 드러낸 보스와의 최종 결전"
		}
	},
	"final_boss": {
		"id": "BoneScab_Carnivex_V1",
		"name": "Carnivex",
		"appearance_boss": "백골빛 껍질과 날카로운 칼날 가시가 돋은 거대한 지네 모습이다. 껍질 틈새로 호박색 진액이 흘러나온다.",
		"true_identity": "전장에서 쓰러진 검객들의 뼈에 기생하던 곤충 괴물입니다. 먹이가 떨어지자 사막 모래 아래 숨어들어 묻힌 유골의 골수를 먹고 거대해졌습니다.",
		"motivation": "껍질을 더 거대하고 단단하게 만들기 위해 탐험대의 골수를 노립니다.",
		"want": "사람들의 골수를 빼앗아 자기 껍질을 단단하게 만드는 것이다.",
		"twist": "친절했던 길잡이가 거대한 지네 괴물로 뒤틀리며 본색을 드러냅니다. \"당신들이 마신 물은 녹아내린 검객들의 골수였답니다! 이제 당신들의 뼈도 내 갑옷으로 만들어 줄게요!\""
	},
	"global_foreshadowing": [
		{
			"id": "foreshadow_1",
			"hint": "바닥에 남겨진 끈적이는 호박색 진액 자국을 발견한다.",
			"plant_order": 1,
			"plant_room": 1,
			"reveal_room": 5,
			"reveal_context": "그 진액이 지네 괴물의 몸에서 흘러나오는 체액임을 알게 된다."
		},
		{
			"id": "foreshadow_2",
			"hint": "모래 속에 파묻힌 부러진 칼날들을 찾아낸다.",
			"plant_order": 2,
			"plant_room": 3,
			"reveal_room": 9,
			"reveal_context": "부러진 칼날들이 괴물의 등껍질에 가시처럼 박혀 있음을 확인한다."
		},
		{
			"id": "foreshadow_3",
			"hint": "모래 아래에서 뼈가 긁히는 섬뜩한 소리를 듣는다.",
			"plant_order": 3,
			"plant_room": 5,
			"reveal_room": 15,
			"reveal_context": "그 소리가 모래 밑을 기어 다니는 거대 지네의 마찰음임을 깨닫는다."
		},
		{
			"id": "foreshadow_4",
			"hint": "딱딱하게 바래버린 백골빛 껍질 조각을 줍는다.",
			"plant_order": 4,
			"plant_room": 9,
			"reveal_room": 1,
			"reveal_context": "그 껍질이 사람들의 골수를 삼켜 굳힌 괴물의 갑옷임을 깨닫는다."
		}
	],
	"npc_roles": {
		"kemet": {
			"role": "파묻힌 유골을 조사하는 학자",
			"arc": "2화에서 유골을 조사하며 길잡이의 물을 마신 이들의 뼈가 녹았다는 사실을 발견한다."
		},
		"kasai": {
			"role": "오아시스의 정찰꾼",
			"arc": "3화에서 괴물이 다가온다며 비명을 지르고 경고한다."
		},
		"jasper": {
			"role": "버려진 사원을 지키는 수호자",
			"arc": "4화에서 길잡이의 거처가 적힌 지도를 건네고 진실을 알린다."
		},
		"amir": {
			"role": "주인공에게 노란 물병을 전해주는 상인",
			"arc": "1화에서 주인공에게 노란 물병을 건네고 5화에서 괴물의 굴에 사로잡힌다."
		}
	},
	"scenarioOutline": [
		{
			"order": 1,
			"act": "intro",
			"title": "사막의 목마름",
			"boss": "random_boss",
			"npc": "amir",
			"summary": "목마름에 지친 주인공은 상인 아미르가 건넨 짐 속에서 노란 물병을 발견한다. 길잡이가 남긴 선물이라는 말에 주인공은 의심 없이 노란 물병의 물을 마신다. 그 모습을 본 도적이 독을 마셨다며 위협적으로 덤벼들어 격퇴한다. 싸움이 끝난 바닥에서 주인공은 끈적이는 호박색 진액 자국을 찾아낸다.",
			"place": "메마른 모래 언덕",
			"random_boss_title": "도적",
			"random_boss_side": "warn",
			"boss_trace": "호박색 진액 자국"
		},
		{
			"order": 2,
			"act": "rising",
			"title": "협곡의 경고",
			"boss": "random_boss",
			"npc": "kemet",
			"summary": "주인공은 협곡에서 학자 케메트와 함께 파묻힌 유골들을 조사한다. 기도를 올리던 주술사는 모래 속 부러진 칼날을 보여주며 조사를 막기 위해 덤벼든다. 주인공은 주술사를 제압한 후 케메트의 책에서 길잡이의 물을 마신 이들의 뼈가 녹았다는 사실을 알아낸다.",
			"place": "붉은 암석 협곡",
			"random_boss_title": "주술사",
			"random_boss_side": "ally",
			"boss_trace": "모래 속 부러진 칼날"
		},
		{
			"order": 3,
			"act": "rising",
			"title": "오아시스의 소리",
			"boss": "random_boss",
			"npc": "kasai",
			"summary": "오아시스에 도착한 주인공은 정찰꾼 카사이가 괴물이 다가온다며 비명을 지르는 모습을 본다. 용병은 위험한 모래 구덩이에 접근하지 말라며 주인공의 길을 가로막고 공격한다. 주인공은 용병을 물리치고 모래 아래에서 울리는 뼈 긁히는 소리를 듣고 길잡이가 유골의 골수를 먹는 곤충 괴물임을 깨닫는다.",
			"place": "바람 부는 오아시스",
			"random_boss_title": "용병",
			"random_boss_side": "warn",
			"boss_trace": "뼈 긁히는 소리"
		},
		{
			"order": 4,
			"act": "rising",
			"title": "사원의 수수께끼",
			"boss": "random_boss",
			"npc": "jasper",
			"summary": "사원에 들어선 주인공은 수호자 재스퍼에게 길잡이의 거처가 적힌 지도를 받는다. 사원 지기는 백골빛 껍질 조각을 내보이며 길잡이를 수호신이라 속이고 공격을 시작한다. 주인공은 사원 지기를 쓰러뜨린 뒤 재스퍼를 통해 길잡이가 껍질을 단단하게 만들려고 골수를 훔친다는 진실을 파악한다.",
			"place": "버려진 모래 사원",
			"random_boss_title": "사원 지기",
			"random_boss_side": "ally",
			"boss_trace": "백골빛 껍질 조각"
		},
		{
			"order": 5,
			"act": "climax_finale",
			"title": "최종 결전",
			"boss": "pool_BoneScab_Carnivex_V1",
			"npc": "amir",
			"summary": "주인공은 굴속에 사로잡힌 아미르를 구하러 갔다가 거대한 지네 괴물 카르니벡스를 만난다. 카르니벡스는 마신 물이 골수였다며 백골빛 껍질을 흔들고 날카로운 칼날 가시로 기습한다. 주인공은 기괴한 본색에 맞서 남은 노란 물병을 땅에 깨부순다. 그러자 괴물의 비명과 함께 갑옷이 약해진 틈을 타 카르니벡스를 베어 넘어뜨린다.",
			"place": "카르니벡스의 굴"
		}
	],
	"act_summary": {
		"rising": "주인공은 협곡과 오아시스, 사원을 탐험하며 친절한 길잡이가 사람들의 골수를 삼키는 괴물임을 알아낸다.",
		"climax_finale": "주인공은 괴물의 굴로 찾아가 노란 물병을 깨부수어 괴물의 갑옷을 약화시키고 카르니벡스를 물리친다.",
		"intro": "주인공은 상인 아미르에게 노란 물병을 받아 마시고 덤벼드는 도적을 퇴치한 뒤 호박색 진액을 발견한다."
	}
};
