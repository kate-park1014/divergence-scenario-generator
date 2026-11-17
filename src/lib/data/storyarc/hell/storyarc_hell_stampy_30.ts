import type { StoryArc } from '$lib/types';

export const storyarc_hell_stampy_30: StoryArc = {
	"id": "hell_stampy_30",
	"level": 30,
	"chapter_name": {
		"chinese": "地狱",
		"vietnamese": "Vé VIP Miễn",
		"japanese": "地獄の無料VIP",
		"french": "Pass VIP",
		"english": "Hell Free",
		"thai": "บัตร VIP",
		"spanish": "Pase VIP",
		"hindi": "नर्क मुफ़्त",
		"korean": "지옥 VIP 무료"
	},
	"theme": "hell",
	"world": {
		"setting": "붉은 용암이 흐르고 폭발하는 결제 청구서와 관료주의 행정 서류가 뒤얽힌 지옥 관청 대지",
		"rule": "지옥 관청에서는 발급받은 통행권을 반납 수수료 창구에 정식 제출하면 모든 결제 계약이 소급하여 무효화된다. 이 금기를 무시하고 도장만 모으면 영혼이 압류된다.",
		"how": "핫핑크 통행권에 도장이 찍힐 때마다 9,999번째 숨겨진 세부 조항이 자동 승인되어 영혼 담보 연체 이자가 폭발적으로 늘어난다.",
		"secret": "스탬피는 대마법 대륙으로 복귀하기 위한 실적 점수 5점을 채우려고 무료 통행권의 세부 조항을 조작해 영혼을 징수하고 있었다."
	},
	"protagonist_goal": "부조리한 지옥 관청의 수수료 징수를 저지하고 통행권 결제를 무효화하여 탈출한다.",
	"boss_name_korean": "스탬피",
	"act_tone": {
		"climax_finale": {
			"mood": "황당하면서도 대폭발하는 통쾌함",
			"narrative_role": "부조리한 관료 시스템을 결제 반납 한 방으로 파괴하는 대반전 결말",
			"tension": 5
		},
		"rising": {
			"mood": "소동극과 관료주의 폭로가 교차하는 회상극",
			"tension": 3,
			"narrative_role": "피해자들의 불만과 수수료 조항의 허점이 드러나는 비선형 서사"
		},
		"intro": {
			"narrative_role": "친절한 무료 혜택 속에 숨겨진 부조리한 지옥 관청의 시작",
			"tension": 1,
			"mood": "경쾌하고 위트 있는 블랙코미디"
		}
	},
	"final_boss": {
		"appearance_boss": "머리에 도장 손잡이가 달린 거대한 마젠타빛 젤리 정령으로 붉은 관리 띠와 굵은 금 사슬을 감고 인주를 흘리며 청구서 폭풍을 일으킨다.",
		"want": "탐험대에게 100만 장짜리 동의서를 받아내어 관청 실적 점수 5점을 채운다.",
		"true_identity": "억울한 영혼들에게 수억 장의 폭발성 청구서를 발급해 영혼을 징수하는 지옥 관료주의 징수 폭군",
		"name": "Stampy",
		"id": "MysticStamp_Stampy_V1",
		"motivation": "실수로 지옥 대출 계약서에 도장이 찍혀 추방된 후 실적 점수 5점을 채워 대마법 대륙으로 복귀하려 한다.",
		"twist": "무료 혜택이라고 속여 도장을 찍게 한 뒤 9,999번째 세부 조항을 근거로 영혼과 골드를 갈취하려 했다."
	},
	"global_foreshadowing": [
		{
			"plant_act": "intro",
			"reveal_context": "5화 결말에서 반납 창구 규칙을 적용해 결제 승인을 통째로 취소시키는 근거가 된다.",
			"id": "gf_1",
			"plant_room": 1,
			"reveal_room": 15,
			"reveal_act": "climax_finale",
			"hint": "1화 관문 입구 반납 창구에 'VIP 통행권 즉시 반납 시 수수료 0원'이라는 문구가 찍혀 있다."
		},
		{
			"plant_act": "rising",
			"id": "gf_2",
			"reveal_context": "4화 회상에서 주인공이 도장을 찍은 순간부터 영혼 담보 청구가 시작되었음을 깨닫는다.",
			"hint": "3화 수수료 창구 서류 더미 속에 '도장을 받으면 자동 연체 승인'이라는 붉은 직인이 찍혀 있다.",
			"plant_room": 3,
			"reveal_room": 9,
			"reveal_act": "climax_finale"
		},
		{
			"reveal_context": "스탬피의 서류 폭풍 공격 직전에 그가 오직 실적 점수에만 목매고 있음을 폭로한다.",
			"reveal_room": 5,
			"hint": "5화 과거 회상에서 스탬피가 대마법 대륙 복귀 실적 5점을 채우기 위해 핫핑크 통행권을 조작하는 장면이 보인다.",
			"id": "gf_3",
			"plant_room": 5,
			"plant_act": "rising",
			"reveal_act": "climax_finale"
		},
		{
			"hint": "9화 영혼 서류함 뒤쪽에 반납 신청서 단 한 장으로 전체 계약을 무효로 만드는 취소 도장이 숨겨져 있다.",
			"reveal_room": 1,
			"reveal_act": "climax_finale",
			"reveal_context": "최후의 순간 반납 창구에 통행권을 던져 넣어 수수료 정산 자체를 파기한다.",
			"plant_room": 9,
			"plant_act": "rising",
			"id": "gf_4"
		}
	],
	"npc_roles": {
		"brim": {
			"role": "관청 실무자",
			"arc": "2화에서 행정 조교로 나오며 주인공에게 승인 도장을 받으라고 경고한다. 5화에서 반납 서류를 받아준다."
		},
		"ash": {
			"role": "피해 영혼",
			"arc": "1화에서 통행권을 받고 억울하게 수수료를 뜯기는 영혼으로 등장. 5화에서 반납 절차의 증인이 된다."
		}
	},
	"scenarioOutline": [
		{
			"order": 1,
			"random_boss_title": "관문 검문관",
			"act": "intro",
			"boss": "random_boss",
			"place": "지옥 관문 입구",
			"title": "무료 VIP 통행권의 함정",
			"summary": "주인공은 친절한 마스코트 스탬피에게 핫핑크 통행권을 받은 뒤 관문 검문관의 경고를 무시하고 통행권에 도장을 받아 입장을 완료한다.",
			"npc": "ash",
			"boss_trace": "핫핑크 마젠타 인주 자국",
			"random_boss_side": "warn"
		},
		{
			"random_boss_side": "ally",
			"npc": "brim",
			"random_boss_title": "서류 정리관",
			"order": 2,
			"act": "rising",
			"boss": "random_boss",
			"boss_trace": "핫핑크 서류 봉투",
			"summary": "주인공은 지옥 1서류실에서 행정 징수조교 브림의 조언을 받아 서류 정리관에게 핫핑크 통행권을 제시하고 추가 승인 도장을 받는다.",
			"title": "추가 승인 도장의 부조리",
			"place": "지옥 1서류실"
		},
		{
			"place": "수수료 정산소",
			"title": "억만 골드 청구서의 비극",
			"act": "rising",
			"boss_trace": "핫핑크 영수증 타워",
			"summary": "과거 회상이 교차하며 주인공은 정산 감독관에게 영혼 연체료 억만 골드를 청구받고 핫핑크 통행권을 보여주며 최종 승인 도장을 요구한다.",
			"random_boss_title": "정산 감독관",
			"boss": "random_boss",
			"random_boss_side": "warn",
			"order": 3,
			"npc": "ash"
		},
		{
			"act": "rising",
			"random_boss_side": "ally",
			"order": 4,
			"random_boss_title": "지옥 심사관",
			"boss": "random_boss",
			"place": "지옥 심사청",
			"title": "100만 장 동의서의 흑막",
			"npc": "brim",
			"summary": "주인공은 지옥 심사관이 제시한 100만 장짜리 동의서에 밀려 핫핑크 통행권을 심사대에 올리고 마지막 결제 도장을 받아낸다.",
			"boss_trace": "핫핑크 인주 항아리"
		},
		{
			"title": "반납 수수료 창구의 반전",
			"place": "용암 대지 중앙 관청",
			"act": "climax_finale",
			"summary": "스탬피가 본색을 드러내어 폭발성 청구서 폭풍을 퍼붓자 주인공은 핫핑크 통행권을 반납 수수료 창구에 제출하는 행동으로 결제를 전면 취소시키고, 억류되었던 영혼들의 청구서가 모두 폭발하여 스탬피의 관청 실적 점수가 0점으로 파기된다.",
			"boss": "pool_MysticStamp_Stampy_V1",
			"order": 5,
			"npc": "ash"
		}
	],
	"act_summary": {
		"intro": "지옥 길목에 들어선 주인공은 스탬피의 친절한 언변에 속아 핫핑크 통행권을 받아 관청 관문을 통과한다.",
		"climax_finale": "주인공은 핫핑크 통행권을 반납 수수료 창구에 제출하여 스탬피의 결제 정산 계약을 무효화하고 지옥 행정 폭주를 저지한다.",
		"rising": "관청 내부의 여러 보충 시험과 수수료 요구 속에서 계약의 숨겨진 세부 조항과 억울한 연체료 시스템의 진실이 밝혀진다."
	}
};
