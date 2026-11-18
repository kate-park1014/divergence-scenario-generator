import type { StoryArc } from '$lib/types';

export const storyarc_hell_philomel_39: StoryArc = {
	"id": "hell_philomel_39",
	"level": 39,
	"chapter_name": {
		"spanish": "Corazón",
		"hindi": "नरक का दिल",
		"thai": "หัวใจขุมนรก",
		"english": "Hell Heart",
		"korean": "지옥의 심장",
		"japanese": "地獄の心臓",
		"vietnamese": "Tim địa ngục",
		"chinese": "地狱之心",
		"french": "Cœur d'enfer"
	},
	"theme": "hell",
	"world": {
		"how": "집행자가 대륙으로 번지는 지옥불을 자기 몸에 가두고 서리 봉인으로 묶어 두었기 때문이다.",
		"setting": "마법 대륙 입구에 있는 불타는 지옥",
		"rule": "갑옷의 서리 봉인을 떼어내면 지옥의 불길이 치솟아 마법 대륙 입구까지 터져 나온다.",
		"secret": "거대한 집행자는 마법 대륙을 지키려고 지옥불을 몸에 삼킨 별빛 정령이다. 정령은 불길이 사람들에게 번질까 봐 일부러 사납게 굴어 사람들을 쫓아냈다."
	},
	"protagonist_goal": "집행자의 불꽃 코어에 별빛 서리 수정을 넣어야 한다. 지옥의 불길이 마법 대륙 입구까지 터져 나올 위기에 처했기 때문이다.",
	"boss_name_korean": "필로멜",
	"act_tone": {
		"climax_finale": {
			"tension": 5,
			"mood": "비장하고 안타까운 분위기",
			"narrative_role": "진실 밝혀짐과 사건의 해결"
		},
		"rising": {
			"mood": "진지하고 혼란스러운 분위기",
			"tension": 3,
			"narrative_role": "진실 추적과 보스전 준비"
		},
		"intro": {
			"mood": "위태롭고 긴박한 분위기",
			"narrative_role": "사건의 발단과 위기 발생",
			"tension": 1
		}
	},
	"final_boss": {
		"id": "MartyrCradle_Philomel_V1",
		"name": "Philomel",
		"appearance_boss": "거대한 갑옷을 두른 집행자가 핫핑크빛 날개를 펼치고 서 있다. 금 간 투구 아래로 형광빛 눈물을 흘리며 불을 뿜는다.",
		"surface_identity": "지옥 깊은 곳에서 불을 뿜으며 들어오는 자를 짓밟는 거대한 집행자입니다. 지옥에 들어온 모든 생명을 가리지 않고 공격합니다.",
		"true_identity": "본래 마법 대륙에서 억울하게 죽은 영혼을 달래던 작은 별빛 정령입니다. 지옥 불길이 마법 대륙으로 번지지 않도록 그 불을 자기 몸에 삼켜 가두고, 무거운 갑옷 속에 스스로를 묶었습니다.",
		"motivation": "몸 안에 가둔 불이 새어 나와 탐험대까지 태울까 봐 두려워합니다. 그래서 일부러 사납게 굴어 탐험대를 지옥 밖으로 쫓아내려 합니다.",
		"motive_scene": "작은 별빛 정령이 마법 대륙으로 번지는 지옥불을 삼키고 집행자의 무거운 갑옷 속에 자신을 스스로 가두었다.",
		"want": "몸 안의 지옥불이 다른 사람에게 번지지 않도록 사람들을 지옥 밖으로 쫓아내는 것이다.",
		"twist": "탐험대가 가까이 다가가자 갑옷 틈으로 불이 새어 나오기 시작합니다. 집행자는 스스로 투구를 벗어 던지고, 텅 빈 갑옷 속에서 불꽃 코어를 끌어안은 작은 별빛 정령이 떨며 외칩니다. \"제발 더 가까이 오지 마세요. 제 안의 불이 새어 나오면 당신들까지 재가 돼요. 어서 도망치세요!\""
	},
	"global_foreshadowing": [
		{
			"plant_room": 1,
			"hint": "바위에 남은 형광 빛깔 눈물 자국",
			"reveal_context": "눈물 자국에 지옥의 불길 대신 차가운 기운이 서려 있음을 확인한다.",
			"id": "hint_1",
			"reveal_room": 1,
			"plant_order": 1
		},
		{
			"plant_room": 3,
			"reveal_context": "깃털에 지옥의 열 대신 따뜻한 별빛 온기가 남아 있음을 확인한다.",
			"id": "hint_2",
			"reveal_room": 3,
			"plant_order": 2,
			"hint": "집행자가 떨어뜨린 핫핑크빛 깃털 하나"
		},
		{
			"id": "hint_3",
			"hint": "바닥에 떨어진 깨진 흑요석 투구 조각",
			"plant_room": 5,
			"reveal_context": "투구 안쪽에 무거운 봉인 흔적이 남아 있음을 확인한다.",
			"plant_order": 3,
			"reveal_room": 5
		},
		{
			"reveal_context": "집행자가 투구를 벗자 텅 빈 갑옷 속 작은 별빛 정령의 깃털임이 밝혀진다.",
			"id": "hint_4",
			"hint": "바닥에서 발견한 청록빛 수정 깃털",
			"plant_room": 9,
			"plant_order": 4,
			"reveal_room": 15
		}
	],
	"npc_roles": {
		"brim": {
			"role": "붉은 바위 골짜기의 길잡이",
			"arc": "2화에서 주인공에게 집행자가 남긴 흔적과 별빛 온기에 대해 알려준다."
		},
		"ash": {
			"role": "지옥불 위험을 연구하는 연구원",
			"arc": "1화에서 지옥 입구에서 주인공과 만나고 4화에서 지옥불을 식힐 별빛 서리 수정을 전달한다."
		},
		"cinder": {
			"role": "용암 동굴의 대장장이",
			"arc": "3화에서 주인공과 함께 깨진 흑요석 투구 조각을 조사한다."
		}
	},
	"scenarioOutline": [
		{
			"order": 1,
			"act": "intro",
			"title": "지옥의 문을 열다",
			"boss": "random_boss",
			"npc": "ash",
			"summary": "주인공은 지옥의 열기를 막기 위해 절벽을 오르던 중 연구원 애쉬를 만난다. 주인공은 바위에 꽂혀 있던 갑옷의 서리 봉인을 실수로 떼어낸다. 그러자 지옥의 불길이 치솟으며 마법 대륙 입구까지 터져 나올 위기에 처한다. 지옥 사냥꾼이 나타나 지옥의 생태를 망쳤다며 주인공을 공격한다.",
			"place": "지옥 입구 절벽",
			"random_boss_title": "지옥 사냥꾼",
			"random_boss_side": "warn",
			"boss_trace": "형광 빛깔 눈물 자국"
		},
		{
			"order": 2,
			"act": "rising",
			"title": "붉은 바위 골짜기",
			"boss": "random_boss",
			"npc": "brim",
			"summary": "지옥불의 확산을 막기 위해 주인공은 붉은 바위 골짜기로 이동한다. 길목에서 길잡이 브림을 만나 집행자가 남긴 흔적에 대해 듣는다. 불꽃 약탈자가 나타나 집행자의 결정을 방해하지 말라며 길을 막고 싸움을 걸어온다. 주인공은 약탈자를 물리친 뒤 집행자가 떨어뜨린 핫핑크빛 깃털에서 온기를 느낀다.",
			"place": "붉은 바위 골짜기",
			"random_boss_title": "불꽃 약탈자",
			"random_boss_side": "ally",
			"boss_trace": "핫핑크빛 깃털 하나"
		},
		{
			"order": 3,
			"act": "rising",
			"title": "용암 흐르는 동굴",
			"boss": "random_boss",
			"npc": "cinder",
			"summary": "열기의 원인을 찾기 위해 주인공은 용암 동굴 깊숙이 들어간다. 동굴 안에서 대장장이 신더를 만나 깨진 흑요석 투구 조각을 조사한다. 용암 파수꾼이 더 깊이 들어가면 불길에 태워질 것이라며 주인공을 막아선다. 주인공은 파수꾼을 제압한 뒤 집행자가 밀쳐낸 사람들이 무사히 도망쳤다는 말을 듣는다.",
			"place": "용암 동굴",
			"random_boss_title": "용암 파수꾼",
			"random_boss_side": "warn",
			"boss_trace": "깨진 흑요석 투구 조각"
		},
		{
			"order": 4,
			"act": "rising",
			"title": "검은 제단",
			"boss": "random_boss",
			"npc": "ash",
			"summary": "대륙으로 퍼지는 불길을 잠재우기 위해 주인공은 검은 제단으로 향한다. 다시 만난 애쉬는 지옥불을 식힐 핵심 물건인 별빛 서리 수정을 전달한다. 악마 주술사가 나타나 집행자 님의 고통을 가로채지 말라며 주문을 외운다. 주인공은 주술사를 제압하고 수정을 불꽃 코어에 집어넣어야 열기가 잠든다는 것을 깨닫는다.",
			"place": "검은 제단",
			"random_boss_title": "악마 주술사",
			"random_boss_side": "ally",
			"boss_trace": "청록빛 수정 깃털"
		},
		{
			"order": 5,
			"act": "climax_finale",
			"title": "지옥의 심장부",
			"boss": "pool_MartyrCradle_Philomel_V1",
			"npc": "ash",
			"summary": "주인공은 지옥불 폭발을 멈추기 위해 지옥 심장부로 들어선다. 거대한 집행자 필로멜이 무서운 기세로 불을 뿜으며 다가온다. 주인공이 가까이 접근하자 필로멜은 투구를 벗어 던지고, 텅 빈 갑옷 속 작은 별빛 정령이 도망치라며 눈물을 흘린다. 주인공은 떨리는 불꽃 코어에 별빛 서리 수정을 밀어 넣어 불길을 식힌다.",
			"place": "지옥 심장부"
		}
	],
	"act_summary": {
		"climax_finale": "지옥 심장부에서 집행자 필로멜의 정체를 확인한 주인공은 불꽃 코어에 별빛 서리 수정을 넣어 지옥불 폭발을 막아낸다.",
		"rising": "주인공은 불길을 막으려 흔적을 추적하며 집행자가 사람들을 보호하려 했다는 정황을 발견하고 수정을 얻는다.",
		"intro": "주인공이 실수로 서리 봉인을 떼어내어 지옥불이 마법 대륙으로 터져 나올 위기에 처한다."
	}
};
