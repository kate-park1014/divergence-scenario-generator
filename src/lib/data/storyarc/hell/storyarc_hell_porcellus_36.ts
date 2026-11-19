import type { StoryArc } from '$lib/types';

export const storyarc_hell_porcellus_36: StoryArc = {
	"id": "hell_porcellus_36",
	"level": 36,
	"chapter_name": {
		"chinese": "地獄豬精靈",
		"spanish": "Cerdo Diablo",
		"vietnamese": "Heo Địa Ngục",
		"french": "Cochon Enfer",
		"hindi": "नरक का सूअर",
		"english": "Hell Piggy",
		"korean": "지옥의 돼지 정령",
		"japanese": "地獄の豚精霊",
		"thai": "หมูขุมนรก"
	},
	"theme": "hell",
	"world": {
		"secret": "억울하게 갇힌 돼지 정령 포르셀루스가 사실은 속임수 동전으로 영혼을 빼앗는 지옥 도박판의 주인이라는 사실이다.",
		"rule": "영혼 동전을 저금통 슬릿에 넣으면 지옥 차단막이 건드려져 지옥 문이 잠겨 버린다.",
		"setting": "지옥 용암 바다에 있는 도박장과 동굴",
		"how": "저금통 슬릿에 동전이 들어가면 지옥의 방어 장치가 작동하기 때문이다."
	},
	"protagonist_goal": "저금통 바닥의 마개를 열어 영혼 동전을 빼내야 한다. 그러지 않으면 지옥 문이 잠긴 채 영영 탈출하지 못하기 때문이다.",
	"boss_name_korean": "포르셀루스",
	"act_tone": {
		"climax_finale": {
			"mood": "유쾌하고 치열한 분위기",
			"tension": 5,
			"narrative_role": "보스의 속임수를 파헤치고 탈출하는 단계"
		},
		"rising": {
			"narrative_role": "돼지 정령의 정체와 해결책을 밝히는 단계",
			"tension": 3,
			"mood": "수상하고 긴장되는 분위기"
		},
		"intro": {
			"tension": 1,
			"narrative_role": "지옥에 갇혀 탐험을 시작하는 단계",
			"mood": "불안하고 황당한 분위기"
		}
	},
	"final_boss": {
		"id": "SoulVault_Porcellus_V1",
		"name": "Porcellus",
		"appearance_boss": "용암 위를 떠다니는 앙증맞은 오팔빛 금속 돼지 저금통 모양의 정령이다. 온몸에서 강렬한 무지갯빛 마법 오라가 뿜어져 나온다.",
		"surface_identity": "억울하게 지옥에 떨어졌다며 꺼내 달라고 떼쓰는 귀여운 돼지 저금통 정령입니다. 눈물을 글썽이며, 탈출을 도와주면 배 속의 동전을 나눠 주겠다고 조릅니다.",
		"true_identity": "원래 마법 대륙 사원의 헌금 저금통이었는데, 헌금을 몰래 내기에 걸다 들켜 쫓겨났습니다. 지옥에서는 악마들과 내기를 벌여 영혼을 따먹는 지옥 도박판의 주인입니다.",
		"motivation": "내기에서 이겨 탐험대의 무기와 영혼을 몽땅 따내려 합니다. 저금통을 영혼 동전으로 꽉 채우는 것이 유일한 꿈이기 때문입니다.",
		"motive_scene": "사원의 신관들이 저금통 안에서 내기용 속임수 동전이 쏟아지자 포르셀루스를 지옥 구덩이에 던져 버렸다.",
		"want": "내기에서 이겨 주인공 일행의 영혼과 무기를 몽땅 빼앗는 것이다.",
		"twist": "저금통이 깔깔 웃으며 금빛 동전 하나를 튕겨 올립니다. 떨어진 동전은 앞면도 뒷면도 똑같은 돼지 얼굴입니다. \"자, 마지막 판! 앞면이면 내가 이기고, 뒷면이면 너희가 지는 거야. 너희 영혼, 내가 다 땄다! 꿀!\""
	},
	"global_foreshadowing": [
		{
			"id": "foreshadow_1",
			"plant_order": 1,
			"plant_room": 1,
			"reveal_room": 3,
			"reveal_context": "돼지 저금통 정령이 콧구멍에서 뿜어내는 연기임을 확인한다.",
			"hint": "분홍색 하트 연기"
		},
		{
			"plant_room": 3,
			"reveal_room": 5,
			"reveal_context": "돼지 저금통 정령이 발을 움직일 때 나는 소리임을 확인한다.",
			"id": "foreshadow_2",
			"plant_order": 2,
			"hint": "금속 동전 짤랑이는 소리"
		},
		{
			"id": "foreshadow_3",
			"reveal_context": "돼지 저금통 정령의 몸체 피부 조각임을 확인한다.",
			"hint": "오팔빛 금속 조각",
			"reveal_room": 9,
			"plant_room": 5,
			"plant_order": 3
		},
		{
			"plant_order": 4,
			"reveal_context": "돼지 저금통 등덜미 슬릿에서 새어 나오는 마법 광채임을 확인한다.",
			"reveal_room": 15,
			"hint": "마젠타색 무지개 광채",
			"plant_room": 9,
			"id": "foreshadow_4"
		}
	],
	"npc_roles": {
		"mara": {
			"role": "도박장 조사꾼",
			"arc": "4화에서 돼지 정령과의 내기에서 이긴 자가 없다는 소문을 전한다."
		},
		"drox": {
			"role": "검은 벼랑 대장장이",
			"arc": "3화에서 저금통 마개를 열어야 영혼 동전을 빼낸다고 일러준다."
		},
		"cinder": {
			"role": "유황 동굴 채굴꾼",
			"arc": "2화에서 돼지 정령이 사원에서 쫓겨났다는 소문을 전한다."
		},
		"ash": {
			"role": "지옥 길잡이",
			"arc": "1화에서 쪽지를 읽고 5화에서 주인공과 함께 지옥을 탈출한다."
		}
	},
	"scenarioOutline": [
		{
			"order": 1,
			"act": "intro",
			"title": "지옥의 입구",
			"boss": "random_boss",
			"npc": "ash",
			"summary": "주인공은 지옥의 유황 용암 강가에서 길을 아는 애쉬를 만난다. 애쉬가 강가에 떨어진 돼지 저금통 쪽지를 읽자, 주인공은 억울하게 갇혔다는 저금통을 돕기 위해 영혼 동전을 저금통 슬릿에 넣는다. 동전이 들어가자 지옥 문이 잠겨 버리고, 덤벼든 지옥 경비원은 무모하게 동전을 넣어 차단막을 건드렸다며 공격해온다. 주인공은 갇혀 버린 지옥에서 탈출하기 위해 분홍색 하트 연기가 피어오르는 방향으로 향한다.",
			"place": "유황 용암 강가",
			"random_boss_title": "지옥 경비원",
			"random_boss_side": "warn",
			"boss_trace": "분홍색 하트 연기"
		},
		{
			"order": 2,
			"act": "rising",
			"title": "유황 굴의 소문",
			"boss": "random_boss",
			"npc": "cinder",
			"summary": "지옥에 갇힌 채 탈출구를 찾기 위해 주인공은 유황 보석 동굴로 이동한다. 동굴 안에서 보석을 채굴하던 신더를 처음 만난다. 신더는 벽 건너편에서 울리는 금속 동전 짤랑이는 소리를 가리키며 돼지 정령이 과거 사원에서 쫓겨났다는 소문을 전한다. 이때 난입한 용암 약초꾼은 돼지 정령이 행운을 줄 거라며 주인공을 유혹하고 길을 막아서서 전투가 벌어진다.",
			"place": "유황 보석 동굴",
			"random_boss_title": "용암 약초꾼",
			"random_boss_side": "ally",
			"boss_trace": "금속 동전 짤랑이는 소리"
		},
		{
			"order": 3,
			"act": "rising",
			"title": "검은 벼랑의 단서",
			"boss": "random_boss",
			"npc": "drox",
			"summary": "잠긴 지옥 문을 열 열쇠를 찾으려고 주인공은 검은 벼랑 기둥으로 진입한다. 벼랑 위에서 장비를 정비하던 드록스를 만나 이야기를 시작한다. 드록스는 오팔빛 금속 조각을 줍더니 저금통 바닥의 마개를 열어야 영혼 동전을 빼낼 수 있다는 해결법을 알려준다. 그러나 지옥 흑철 대장장이가 함부로 깊은 곳에 가다간 영혼을 잃는다고 경고하며 망치를 들고 덤벼든다.",
			"place": "검은 벼랑 기둥",
			"random_boss_title": "지옥 흑철 대장장이",
			"random_boss_side": "warn",
			"boss_trace": "오팔빛 금속 조각"
		},
		{
			"order": 4,
			"act": "rising",
			"title": "도박장의 그늘",
			"boss": "random_boss",
			"npc": "mara",
			"summary": "지옥을 벗어나기 위한 통로를 찾아 주인공은 붉은 도박장 입구에 다다른다. 입구에서 단서를 조사하던 마라를 마주친다. 마라는 바닥에 남은 마젠타색 무지개 광채를 살피며, 돼지 정령과 내기를 한 자들은 한 판도 이기지 못하고 영혼을 잃었다는 소문을 전한다. 지옥 뱃사공은 돼지 정령에게 영혼을 내놓아야 배를 타고 나갈 수 있다며 주인공을 속이고 공격한다.",
			"place": "붉은 도박장 입구",
			"random_boss_title": "지옥 뱃사공",
			"random_boss_side": "ally",
			"boss_trace": "마젠타색 무지개 광채"
		},
		{
			"order": 5,
			"act": "climax_finale",
			"title": "최종 내기판",
			"boss": "pool_421",
			"npc": "ash",
			"summary": "주인공이 지옥 도박판 중앙에 도달하자 포르셀루스가 나타나 양면이 돼지 얼굴인 동전을 튕기며 영혼을 건 내기를 신청한다. 포르셀루스가 이겼다며 깔깔대고 영혼을 빼앗으려 하자 주인공은 칼을 뽑아 치열한 전투를 시작한다. 보스를 제압한 직후 주인공은 저금통 바닥의 마개를 열어 영혼 동전을 빼낸다. 영혼 동전이 쏟아져 나오자 잠겼던 지옥 문이 마침내 열리고, 주인공은 애쉬와 함께 지옥을 탈출한다.",
			"place": "지옥 도박판 중앙"
		}
	],
	"act_summary": {
		"climax_finale": "주인공은 지옥 도박판에서 속임수 동전을 쓰는 포르셀루스를 제압하고 마개를 열어 영혼 동전을 빼낸 뒤 지옥을 탈출한다.",
		"rising": "주인공은 지옥 동굴과 벼랑을 탐험하며 돼지 정령의 과거 소문과 저금통 마개를 열어야 한다는 해결법을 알아낸다.",
		"intro": "주인공은 지옥 용암 강가에서 돼지 저금통을 도우려 영혼 동전을 넣었다가 지옥 문이 잠겨 갇히게 된다."
	}
};
