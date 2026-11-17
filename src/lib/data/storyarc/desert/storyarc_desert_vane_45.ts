import type { StoryArc } from '$lib/types';

export const storyarc_desert_vane_45: StoryArc = {
	"id": "desert_vane_45",
	"level": 45,
	"chapter_name": {
		"korean": "사막 오아시스의 비밀",
		"english": "Oasis Secret",
		"japanese": "オアシスの秘密",
		"chinese": "绿洲的秘密",
		"french": "Secret Oasis",
		"spanish": "Oasis Oculto",
		"vietnamese": "Bí Mật Oasis",
		"thai": "โอเอซิสลับ",
		"hindi": "ओएसिस रहस्य"
	},
	"theme": "desert",
	"world": {
		"how": "샘물에 도망자들의 생명을 갉아먹는 계약서의 기운이 담겨 있기 때문이다.",
		"rule": "오아시스 샘물을 마시면 몸이 무거워지고 베인에게 목숨과 무기를 빼앗긴다.",
		"secret": "베인은 도망자들의 생명을 빼앗는 계약서 괴물이며 오아시스 샘물을 모래에 쏟아야 빚의 사슬이 풀린다.",
		"setting": "메마른 사막에 있는 오아시스."
	},
	"protagonist_goal": "괴물 베인의 계약에서 도망자들을 구하고 베인을 물리치는 것이다.",
	"boss_name_korean": "베인",
	"act_tone": {
		"climax_finale": {
			"narrative_role": "샘물을 쏟아 빚의 사슬을 끊고 베인을 소멸시키는 절정부",
			"mood": "긴박하고 치열한 분위기",
			"tension": 5
		},
		"rising": {
			"tension": 3,
			"narrative_role": "통행증과 계약서의 진실을 파헤치는 전개부",
			"mood": "의구심과 위기감이 고조되는 분위기"
		},
		"intro": {
			"narrative_role": "사막에서 목을 축이려 샘물을 마시는 도입부",
			"tension": 1,
			"mood": "목마름과 불안감이 감도는 분위기"
		}
	},
	"final_boss": {
		"id": "BloodLedger_Vane_V1",
		"name": "Vane",
		"appearance_boss": "검은 가죽 코트를 입고 뼈대처럼 돋아난 흑요석 결정을 가진 형태다. 코트가 찢어지면 날카로운 가시가 솟아나 목을 조른다.",
		"true_identity": "사실 그는 인간이 아니라 검객들이 목숨을 담보로 쓴 계약서들이 사막의 기운과 섞여 태어난 괴물입니다. 오아시스를 찾은 이들의 생명과 무기를 빼앗는 포식자입니다.",
		"motivation": "탐험대의 무기와 생명을 영원히 빼앗기 위해 그들에게 갚을 수 없는 엄청난 빚을 지우려 합니다.",
		"want": "도망자들에게 갚을 수 없는 빚을 지워 그들의 생명과 무기를 빼앗는 것이다.",
		"twist": "그가 바닥에 시가를 던지자 오아시스 전체가 계약서 글귀가 적힌 가시덤불로 뒤덮입니다. \"이 오아시스의 물을 마신 순간부터 너희 목숨과 무기는 전부 내 거다.\" 코트가 찢어지며 날카로운 가시들이 탐험대의 목을 조여옵니다."
	},
	"global_foreshadowing": [
		{
			"id": "foreshadowing_1",
			"hint": "사막에서 붉은 잉크가 묻은 가죽을 발견한다.",
			"plant_order": 1,
			"plant_room": 1,
			"reveal_room": 15,
			"reveal_context": "베인이 계약서에 쓰인 붉은 잉크로 사람들의 생명을 노린 흔적이었음이 드러난다."
		},
		{
			"id": "foreshadowing_2",
			"hint": "베인의 통행증을 받은 도망자들이 사라졌다는 소문을 듣는다.",
			"plant_order": 2,
			"plant_room": 3,
			"reveal_room": 9,
			"reveal_context": "베인이 도망자들을 모아 생명을 빼앗아왔음이 밝혀진다."
		},
		{
			"id": "foreshadowing_3",
			"hint": "서약서에 번진 붉은 잉크가 사람의 생명을 갉아먹는다는 사실을 확인한다.",
			"plant_order": 3,
			"plant_room": 5,
			"reveal_room": 5,
			"reveal_context": "오아시스의 물을 마신 행동이 베인에게 생명을 갉아먹히는 계약이 되었음이 밝혀진다."
		},
		{
			"id": "foreshadowing_4",
			"hint": "베인이 인간이 아니라 계약서 뭉치가 변한 괴물임을 알아낸다.",
			"plant_order": 4,
			"plant_room": 9,
			"reveal_room": 3,
			"reveal_context": "베인의 진짜 정체가 인간의 생명을 빼앗는 계약서 괴물임이 완전히 드러난다."
		}
	],
	"npc_roles": {
		"ember": {
			"role": "서약서를 들고 떨던 도망자",
			"arc": "3화에서 붉은 잉크가 번진 서약서 뭉치를 들고 나와 떨고 있다."
		},
		"ashur": {
			"role": "베인을 칭송하는 도망자",
			"arc": "2화에서 베인이 도망자들을 돕는 독지가라 칭송하며 주인공에게 통행증을 보여준다."
		},
		"amir": {
			"role": "위기에 처해 구출되는 도망자",
			"arc": "1화에서 강도들에게 쫓기다 구출되고, 5화에서 위험에 처하자 주인공이 샘물을 쏟아 그를 구한다."
		},
		"kasai": {
			"role": "베인을 옹호하는 도망자",
			"arc": "4화에서 베인의 통행증 덕분에 사막에서 살아남았다며 베인을 옹호한다."
		}
	},
	"scenarioOutline": [
		{
			"order": 1,
			"act": "intro",
			"title": "사막의 갈증",
			"boss": "random_boss",
			"npc": "amir",
			"summary": "주인공은 사막을 지나다 갈증에 못 이겨 목이 타들어 간다. 아미르가 사막 강도들에게 쫓기는 모습을 보고 주인공은 검을 뽑아 강도들을 물리친다. 강도는 이 오아시스의 물을 함부로 마시면 안 된다고 경고한다. 주인공은 경고를 무시하고 목을 축이려 오아시스 샘물을 마신다.",
			"place": "모래바람 언덕",
			"random_boss_title": "사막 강도",
			"random_boss_side": "warn",
			"boss_trace": "붉은 잉크가 묻은 가죽"
		},
		{
			"order": 2,
			"act": "rising",
			"title": "암석 골짜기의 소문",
			"boss": "random_boss",
			"npc": "ashur",
			"summary": "주인공은 물을 마신 후부터 몸이 무겁고 가슴이 답답해진다. 아슈르가 은신처 통행증을 보여주며 정보상 베인이 도망자들을 돕는 독지가라고 칭송한다. 골짜기를 막아선 현금사냥꾼은 베인의 훌륭한 통행증을 얻었으니 순순히 지나가라며 길을 열어준다. 주인공은 베인에게 통행증을 받은 검객들이 전부 행방불명되었다는 사실을 듣게 된다.",
			"place": "붉은 암석 골짜기",
			"random_boss_title": "현금사냥꾼",
			"random_boss_side": "ally",
			"boss_trace": "보랏빛 연기 냄새"
		},
		{
			"order": 3,
			"act": "rising",
			"title": "피로 쓴 계약서",
			"boss": "random_boss",
			"npc": "ember",
			"summary": "주인공은 사라진 검객들의 행방을 찾아 지하 은신처 입구로 향한다. 앰버가 붉은 잉크가 번진 기묘한 서약서 뭉치를 들고 나와 벌벌 떤다. 은신처 주술사가 나타나 계약의 비밀을 더 파헤치면 목숨을 잃는다고 위협하며 공격한다. 주인공은 주술사를 제압한 뒤 계약서의 잉크가 서명한 사람의 생명을 갉아먹는다는 사실을 깨닫는다.",
			"place": "지하 은신처 입구",
			"random_boss_title": "은신처 주술사",
			"random_boss_side": "warn",
			"boss_trace": "검게 그을린 유리 조각"
		},
		{
			"order": 4,
			"act": "rising",
			"title": "검문소의 진실",
			"boss": "random_boss",
			"npc": "kasai",
			"summary": "주인공은 검문소에서 억류된 도망자들을 발견하고 그들을 구하기로 결심한다. 카사이는 베인이 준 은신처 통행증 덕분에 사막에서 살아남았다며 베인을 옹호한다. 검문소 경비대장은 베인 님의 통행증을 가진 자는 감히 건드릴 수 없다며 주인공을 엉뚱한 길로 유도한다. 주인공은 경비대장을 물리치고 정보상 베인이 인간이 아니라 계약서들이 뭉쳐 탄생한 괴물임을 알아낸다.",
			"place": "통행증 검문소",
			"random_boss_title": "검문소 경비대장",
			"random_boss_side": "ally",
			"boss_trace": "호박색 잉크 펜촉"
		},
		{
			"order": 5,
			"act": "climax_finale",
			"title": "오아시스의 결판",
			"boss": "pool_BloodLedger_Vane_V1",
			"npc": "amir",
			"summary": "주인공은 도망자들을 조종하는 베인을 찾아 오아시스 샘터로 들어선다. 베인은 코트를 찢어내며 사막 전체를 계약서 가시덤불로 물들이고 주인공의 목을 조른다. 아미르가 위험에 처하자 주인공은 몸에 남은 빚을 끊어내기 위해 오아시스 샘물을 모래에 쏟아버린다. 빚의 사슬이 풀리며 괴물 베인은 비명을 지르고 검게 그을려 모래 속으로 소멸한다.",
			"place": "신성한 오아시스 샘터"
		}
	],
	"act_summary": {
		"climax_finale": "주인공은 오아시스 샘터에서 베인과 대립하고 샘물을 모래에 쏟아 빚의 사슬을 끊어 베인을 소멸시킨다.",
		"intro": "주인공은 사막에서 목이 말라 아미르를 구한 뒤 경고를 무시하고 오아시스 샘물을 마신다.",
		"rising": "주인공은 몸이 무거워지는 것을 느끼고 도망자들을 돕는 베인이 사실 생명을 갉아먹는 계약서 괴물임을 밝혀낸다."
	}
};
