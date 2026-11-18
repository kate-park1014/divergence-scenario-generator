import type { StoryArc } from '$lib/types';

export const storyarc_hell_vane_35: StoryArc = {
	"id": "hell_vane_35",
	"level": 35,
	"chapter_name": {
		"french": "Éclat d'âme",
		"spanish": "Fragmento",
		"chinese": "灵魂碎片",
		"korean": "영혼의 조각",
		"japanese": "魂の欠片",
		"thai": "เศษวิญญาณ",
		"hindi": "आत्मा अंश",
		"vietnamese": "Mảnh hồn",
		"english": "Soul Shard"
	},
	"theme": "hell",
	"world": {
		"how": "탐험대원의 몸속에 금지된 주술로 쪼개진 마법사의 영혼 조각이 숨어 있기 때문이다.",
		"setting": "지옥의 핏빛 안개 속에 있는 영혼의 심연",
		"secret": "베인이 모아 온 영혼들은 모두 베인 자신의 영혼 조각이었다. 베인이 쫓던 마지막 조각은 마라의 몸속에 있었다.",
		"rule": "탐험대원의 몸에 걸린 영혼 봉인 주술을 풀면 영혼이 파열하고 모두 지옥 안개 속에 갇힌다."
	},
	"protagonist_goal": "탐험대원에게 영혼 봉인 주술을 다시 걸어 영혼을 고정해야 한다. 하지 않으면 탐험대원의 영혼이 파열하여 모두 지옥 안개 속에 영원히 갇히기 때문이다.",
	"boss_name_korean": "베인",
	"act_tone": {
		"climax_finale": {
			"narrative_role": "진실의 밝혀짐과 최종 결전",
			"tension": 5,
			"mood": "비장하고 치열한 분위기"
		},
		"rising": {
			"mood": "긴장되고 의혹이 심화하는 분위기",
			"tension": 3,
			"narrative_role": "단서 추적과 베인의 행적 파악"
		},
		"intro": {
			"narrative_role": "사건의 시작과 위기 발생",
			"mood": "위태롭고 혼란스러운 분위기",
			"tension": 1
		}
	},
	"final_boss": {
		"id": "SoulBroker_Vane_V1",
		"name": "Vane",
		"appearance_boss": "핏빛 안개 속에서 보랏빛 턱시도를 입은 남자가 서 있다. 양손에는 은빛 리볼버 마도구를 들고 있다.",
		"surface_identity": "지옥에서 달아난 영혼을 쫓아 거둬들이는 서늘한 현상금 사냥꾼입니다. 은빛 마법 리볼버와 그림자 사슬로 한 번 노린 영혼은 놓친 적이 없다고 알려져 있습니다.",
		"true_identity": "사실 그가 거둬 온 영혼들은 모두 그 자신의 영혼 조각입니다. 오래전 마법 대륙에서 더 큰 마법을 얻으려고 금지된 주술로 자기 영혼을 조각냈고, 흩어진 조각들을 지옥에서 하나씩 되찾아 왔습니다.",
		"motivation": "마지막 남은 조각 하나가 탐험대 중 한 사람의 몸에 숨어들었다고 믿습니다. 그 조각을 되찾아 온전한 자신으로 돌아가려고 탐험대를 쫓습니다.",
		"motive_scene": "마법사가 강대한 마법을 얻으려고 금지된 주술로 제 영혼을 여덟 조각으로 쪼개 지옥으로 던졌다.",
		"want": "탐험대원의 몸속에 숨은 마지막 영혼 조각을 되찾아 온전한 자신으로 돌아가는 것이다.",
		"twist": "그가 모아 온 영혼 보관함들이 한꺼번에 열리자, 안에 든 영혼들이 모두 그의 얼굴을 하고 있습니다. \"내가 거둔 영혼은 전부 나였다. 이제 하나 남았지. 마지막 조각은… 네 안에 있다.\""
	},
	"global_foreshadowing": [
		{
			"plant_room": 1,
			"reveal_context": "사슬 자국이 영혼을 묶는 베인의 사슬 흔적임을 확인한다.",
			"id": "foreshadowing_1",
			"reveal_room": 3,
			"plant_order": 1,
			"hint": "바닥에 길게 남아 있는 라임 빛 형광 사슬 자국을 본다."
		},
		{
			"reveal_context": "보석 조각에 특정한 마법 인이 깃들어 있음을 확인한다.",
			"hint": "지옥 파수꾼이 떨군 오팔빛 보석 조각을 주워 확인한다.",
			"reveal_room": 5,
			"plant_order": 2,
			"plant_room": 3,
			"id": "foreshadowing_2"
		},
		{
			"reveal_context": "시가 재에서 은은한 마법 연기가 피어오르는 것을 확인한다.",
			"plant_room": 5,
			"hint": "제단 구석에서 식지 않은 붉은 시가 재를 주운다.",
			"reveal_room": 9,
			"plant_order": 3,
			"id": "foreshadowing_3"
		},
		{
			"reveal_room": 15,
			"plant_order": 4,
			"plant_room": 9,
			"reveal_context": "은빛 리볼버 마도구가 찍어 남긴 마법진 문양임을 확인한다.",
			"id": "foreshadowing_4",
			"hint": "파괴된 벽면에 새겨진 은빛 마법진 각인을 확인한다."
		}
	],
	"npc_roles": {
		"cinder": {
			"role": "제단의 주술사",
			"arc": "3화에서 영혼 봉인을 다시 거는 고대 비법을 전해준다."
		},
		"vex": {
			"role": "회랑의 기록관",
			"arc": "4화에서 고대 서적을 뒤적이며 베인의 행적을 함께 추적한다."
		},
		"mara": {
			"role": "영혼 봉인이 풀린 탐험대원",
			"arc": "1화에서 주술이 풀어져 괴로워하고 5화에서 영혼 봉인 주술이 다시 걸려 구출된다."
		},
		"brim": {
			"role": "폐허에서 만난 길잡이",
			"arc": "2화에서 베인을 쫓아야 영혼을 다스릴 수 있다고 알려준다."
		}
	},
	"scenarioOutline": [
		{
			"order": 1,
			"act": "intro",
			"title": "지옥의 입구",
			"boss": "random_boss",
			"npc": "mara",
			"summary": "주인공은 핏빛 안개 언덕에서 괴로워하는 탐험대원 마라를 처음 만난다. 주인공은 마라의 고통을 줄이려고 그녀의 몸에 걸린 영혼 봉인 주술을 풀어 버린다. 마라의 영혼이 파열할 위기에 처하고 탐험대 전체가 지옥 안개에 갇힐 위험이 생기자, 주인공은 일을 경고하며 막아서는 지옥 문지기를 격퇴한다. 싸움이 끝난 바닥에는 라임 빛 형광 사슬 자국이 길게 남아 있다.",
			"place": "핏빛 안개 언덕",
			"random_boss_title": "지옥 문지기",
			"random_boss_side": "warn",
			"boss_trace": "라임 빛 형광 사슬"
		},
		{
			"order": 2,
			"act": "rising",
			"title": "비명 지르는 골짜기",
			"boss": "random_boss",
			"npc": "brim",
			"summary": "탐험대의 영혼이 지옥 안개에 갇히는 재앙을 막고자 주인공은 통곡의 폐허로 급히 이동한다. 폐허에서 만난 길잡이 브림은 현상금 사냥꾼 베인의 뒤를 쫓아야 영혼을 다스릴 길을 얻는다고 알려준다. 사냥꾼 편을 들며 단서를 덮으려는 지옥 파수꾼이 공격해 오자 주인공은 그를 물리친다. 파수꾼이 떨군 오팔빛 보석 조각을 주운 주인공은, 베인이 거두는 영혼들이 탈옥수가 아닌 마법의 인이 찍힌 존재라는 소문을 듣는다.",
			"place": "통곡의 폐허",
			"random_boss_title": "지옥 파수꾼",
			"random_boss_side": "ally",
			"boss_trace": "오팔빛 보석 조각"
		},
		{
			"order": 3,
			"act": "rising",
			"title": "용암 재 둔덕",
			"boss": "random_boss",
			"npc": "cinder",
			"summary": "마라의 영혼 파열을 저지하기 위해 주인공은 마법의 인을 조사하러 낙인 제단으로 향한다. 제단에서 주술사 신더를 새로 만난 주인공은 영혼 봉인을 다시 거는 고대 비법을 전해 듣는다. 제단의 위험성을 경고하며 접근을 불허하는 영혼 제련사가 덤벼들자 주인공은 마력을 발산하여 그를 쓰러뜨린다. 제단 구석에서 식지 않은 붉은 시가 재를 발견한 주인공은, 베인이 영혼들을 보관함에 모으고 있음을 의심하게 된다.",
			"place": "낙인 제단",
			"random_boss_title": "영혼 제련사",
			"random_boss_side": "warn",
			"boss_trace": "붉은 시가 재"
		},
		{
			"order": 4,
			"act": "rising",
			"title": "검은 사원의 틈",
			"boss": "random_boss",
			"npc": "vex",
			"summary": "마라에게 닥친 영혼 파열의 원인을 해제하고자 주인공은 지옥 회랑으로 달려간다. 회랑에서 만난 기록관 벡스와 함께 고대 서적을 뒤적이며 베인의 행적을 추적한다. 베인의 진실을 감추려는 지옥 참회자가 습격해 오지만 주인공은 칼을 휘둘러 제압한다. 파괴된 벽면에 새겨진 은빛 마법진 각인을 확인한 주인공은, 베인이 왜 하필 마라를 쫓는지 의심을 품는다.",
			"place": "지옥 회랑",
			"random_boss_title": "지옥 참회자",
			"random_boss_side": "ally",
			"boss_trace": "은빛 마법진 각인"
		},
		{
			"order": 5,
			"act": "climax_finale",
			"title": "핏빛 결전",
			"boss": "pool_SoulBroker_Vane_V1",
			"npc": "mara",
			"summary": "마라를 구하고 지옥 안개의 귀속을 끊어 내기 위해 주인공은 영혼의 심연으로 들어선다. 현상금 사냥꾼 베인이 나타나 마라의 영혼 조각을 빼앗으려 은빛 마도 리볼버를 겨누며 무자비하게 공격해 온다. 격렬한 싸움 끝에 베인의 영혼 보관함들이 깨지자, 그 안에서 피어오른 영혼들이 전부 베인 자신의 얼굴을 하고 있는 반전이 드러난다. 주인공은 싸움 속에서 마라에게 영혼 봉인 주술을 다시 걸어 영혼 조각을 고정하고 베인을 격퇴한다.",
			"place": "영혼의 심연"
		}
	],
	"act_summary": {
		"intro": "주인공이 마라의 영혼 봉인 주술을 풀어 버려 탐험대 전체가 지옥 안개에 갇힐 위기에 처한다.",
		"climax_finale": "영혼의 심연에서 베인의 정체를 밝혀내고 마라의 영혼을 다시 봉인하여 구출한다.",
		"rising": "주인공은 위기를 막으려고 여러 장소를 탐색하며 현상금 사냥꾼 베인의 흔적을 추적한다."
	}
};
