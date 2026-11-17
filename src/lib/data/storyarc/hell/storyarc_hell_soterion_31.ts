import type { StoryArc } from '$lib/types';

export const storyarc_hell_soterion_31: StoryArc = {
	"id": "hell_soterion_31",
	"level": 31,
	"chapter_name": {
		"chinese": "伪善之火",
		"korean": "위선의 성화",
		"french": "Hypocrisie",
		"japanese": "偽りの聖火",
		"english": "Hypocrisy",
		"spanish": "Hipocresía",
		"vietnamese": "Thánh Hỏa",
		"hindi": "पाखंड की",
		"thai": "เพลิงจอมปลอม"
	},
	"theme": "hell",
	"world": {
		"rule": "연옥 신전에 흩어진 신들의 죄악 장부 조각 10개를 훼손하면 가해자가 지옥 용암 바닥으로 즉시 추락해 사지가 불탄다.",
		"setting": "백금빛 신전 파편과 검붉은 유황 용암이 섞여 신성함과 오물이 기괴하게 공존하는 연옥의 하수구 신전",
		"secret": "소테리온은 신들의 성물 판관이 아니라 천상 신들이 자신들의 비리와 오물을 강제로 집어넣고 버린 희생양 기폭 장치다.",
		"how": "신들의 오물과 금기 주술이 담긴 소테리온의 가슴 크리스털에 오팔 심판 열쇠를 꽂으면 억제 장치가 깨지며 천상과 연옥 전체를 삼키는 형광 유황 폭발이 일어난다."
	},
	"protagonist_goal": "신들의 위선적인 죄악 단서를 수집하여 소테리온의 동귀어진 폭발을 막고 연옥과 천상의 비리를 고발한다.",
	"boss_name_korean": "소테리온",
	"act_tone": {
		"climax_finale": {
			"mood": "폭발 직전의 극심한 분노와 파멸적 긴장감",
			"narrative_role": "흑막의 조종을 파쇄하고 희생양 구조의 폭주를 막는 결전",
			"tension": 5
		},
		"intro": {
			"mood": "풍자적 멸시와 묘한 조소의 분위기",
			"tension": 1,
			"narrative_role": "신들의 위선과 희생양 시스템의 단서 수집 시작"
		},
		"rising": {
			"mood": "격앙되는 사회적 혐오와 고발의 분위기",
			"tension": 3,
			"narrative_role": "신들의 죄악 장부 수집 및 희생양 폭탄의 단계적 개방"
		}
	},
	"final_boss": {
		"motivation": "신들에게 이용당하고 하수구로 버려진 피조물로서, 탐험대의 손에 가슴의 크리스털 죄악 핵이 베어지게 만들어 연옥과 천상 전체를 형광 화염으로 동귀어진 파멸시키고자 함.",
		"twist": "\"나를 거룩한 집행자라 칭송하며 꿇어엎드리지 마라! 이 빛나는 오팔 껍데기 아래 펄떡이는 것은, 그대가 숭배하는 천상의 신들이 씻어내어 나에게 버린 추악한 거짓과 오물뿐이다! …오라, 나를 베어내라! 내 가슴이 깨어지는 날, 이 지옥뿐 아니라 저 오만한 천상 또한 내 죄업의 유황불에 함께 타오르리라!\"",
		"id": "Scapegoat_Soterion_V1",
		"name": "Soterion",
		"true_identity": "Mystics 세계 신들이 자신들의 끔찍한 금기 주술과 뇌물·죄악 찌꺼기를 감추기 위해 오물과 집행 권한을 강제로 욱여넣어 만든 신성한 희생양이자 천상의 하수구",
		"want": "주인공이 오팔 심판 열쇠로 가슴의 크리스털 억제 래치를 해제하고 공격하게 만들어 천상과 지옥을 동시에 잿더미로 날려버리는 것",
		"appearance_boss": "지옥의 검붉은 유황 용암 바닥 위에 좌정하고 있는 이 보스는 백금과 오팔 빛깔의 고대 신전 파편을 옥좌 삼아 웅장하게 우뚝 서 있습니다. 머리 위에는 찬란하게 발광하는 형광 에메랄드빛 후광이 맴돌며, 온몸은 마그마에 달아오른 붉은 루비와 무지갯빛 보석 결정으로 조각된 거대한 날개들로 덮여 있습니다. 가슴 중앙은 투명한 크리스털 구조로 이루어져 있어, 그 내부에서 신들의 부정한 죄악을 집어삼킨 검푸른 오물과 지옥의 유황불이 기괴하게 섞여 형광 청록색과 진홍빛 광채를 동시에 내뿜습니다. 12개의 보석 날개를 펼칠 때마다 무지갯빛 보석 가루와 형광 화염의 파편들이 폭포수처럼 흩날리며 지옥의 어둠을 장엄하게 침식합니다."
	},
	"global_foreshadowing": [
		{
			"reveal_room": 15,
			"reveal_context": "5화 소테리온의 가슴 크리스털 속 뇌물 찌꺼기가 장부 목록과 정확히 일치함이 확인된다.",
			"id": "hint_bribery_ledger",
			"reveal_act": "climax_finale",
			"plant_act": "intro",
			"plant_room": 1,
			"hint": "1화 하수 신전 바닥에서 '천상 뇌물 수수 일자 100건'이 적힌 찌그러진 오팔 장부 조각을 발견한다."
		},
		{
			"reveal_room": 9,
			"reveal_act": "climax_finale",
			"plant_act": "rising",
			"id": "hint_brim_detonator",
			"reveal_context": "5화 브림이 신들의 명령을 받고 소테리온의 폭발을 유도하려던 천상의 비밀 세척관임을 드러낸다.",
			"hint": "3화 연옥 회의실에서 브림이 소테리온 전용 파멸 기폭 전선을 품속에서 만지작거리는 것을 본다.",
			"plant_room": 3
		},
		{
			"reveal_room": 15,
			"reveal_act": "climax_finale",
			"plant_act": "rising",
			"reveal_context": "5화 열쇠를 꽂는 즉시 억제 장치가 풀려 폭발 스위치가 켜지는 기믹임이 드러난다.",
			"hint": "4화 용암 분향소에서 소테리온의 12개 날개 사이로 신들의 금기 주술 낙인이 새겨진 오팔 억제 장치를 발견한다.",
			"id": "hint_taboo_seal",
			"plant_room": 5
		},
		{
			"plant_act": "rising",
			"id": "hint_scapegoat_order",
			"reveal_act": "climax_finale",
			"reveal_context": "5화 소테리온이 왜 탐험대에게 베어지길 갈구했는지 사본의 원본 묵서가 공개된다.",
			"reveal_room": 5,
			"hint": "2화 유황 징집소에서 신더가 소테리온에게 죄를 전가한 천상 신들의 '하수구 전가 승인서' 사본 1장을 주인공에게 전달한다.",
			"plant_room": 9
		}
	],
	"npc_roles": {
		"cinder": {
			"role": "고발자 NPC",
			"arc": "2화에서 천상의 무기징집 비리 서류를 분석하며 4화에서 소테리온의 가슴 억제 기믹에 대한 위험 경고를 전달함."
		},
		"soot": {
			"role": "단서 기록원",
			"arc": "3화에서 신들의 뇌물 장부 조각 3개를 모아 정리해 주는 현장 기록원 역할."
		},
		"brim": {
			"role": "흑막 조력자",
			"arc": "1화에서 주인공을 돕는 유황 학자로 등장하여 단서 수집을 인도하지만, 5화에서 신들의 더러운 입막음을 위해 소테리온 폭발을 유도하는 천상의 비밀 흑막으로 밝혀짐."
		}
	},
	"scenarioOutline": [
		{
			"boss_trace": "소테리온의 환영 성화",
			"boss": "random_boss",
			"title": "위선의 하수구",
			"act": "intro",
			"random_boss_title": "신성 파수꾼",
			"place": "연옥 하수 신전",
			"npc": "brim",
			"random_boss_side": "ally",
			"summary": "주인공이 유황 학자 브림과 함께 연옥 하수 신전에 들어가 소테리온의 환영 성화 메시지를 확인하고 찌그러진 오팔 장부 조각 1개를 습득한 뒤 오팔 심판 열쇠를 소테리온의 가슴에 꽂는 일을 시도하려 관문을 연다.",
			"order": 1
		},
		{
			"random_boss_side": "warn",
			"random_boss_title": "연옥 감사관",
			"place": "유황 징집소",
			"npc": "cinder",
			"summary": "주인공이 연옥 고발자 신더를 만나 천상 신들의 강제 징집과 비리 장부 서류 5장을 수집하고, 브림의 권유에 따라 다음 방 이동을 위해 오팔 심판 열쇠를 소테리온의 가슴에 꽂는 일을 모방하여 징집소 붉은 문을 해제한다.",
			"boss": "random_boss",
			"order": 2,
			"title": "비리 장부 수집",
			"act": "rising",
			"boss_trace": "신성 뇌물 장부"
		},
		{
			"title": "신들의 정체",
			"boss": "random_boss",
			"random_boss_title": "천상 집행관",
			"summary": "주인공이 기록원 그을음에게 신들의 금기 주술 낙인이 적힌 결재 문서 3권을 받으며 단서를 완성하고, 브림이 품속에서 폭발 기폭 전선을 꺼내는 장면을 목격한 상태에서 오팔 심판 열쇠를 소테리온의 가슴에 꽂는 일의 단계로 중앙 장치를 작동시킨다.",
			"random_boss_side": "ally",
			"act": "rising",
			"place": "연옥 회의실",
			"order": 3,
			"boss_trace": "금기 주술 낙인",
			"npc": "soot"
		},
		{
			"random_boss_title": "연옥 세척관",
			"npc": "cinder",
			"title": "폭발의 전야",
			"random_boss_side": "warn",
			"order": 4,
			"boss_trace": "오팔 억제 장치",
			"summary": "주인공이 소테리온의 날개에 새겨진 오팔 억제 장치를 확인하자 신더가 열쇠를 꽂으면 폭탄이 작동한다고 비명을 지르며 경고하지만, 브림의 거짓 설득으로 주인공이 오팔 심판 열쇠를 소테리온의 가슴에 꽂는 일을 제단 석상에 진행한다.",
			"place": "용암 분향소",
			"boss": "random_boss",
			"act": "rising"
		},
		{
			"act": "climax_finale",
			"title": "위선의 파괴",
			"order": 5,
			"summary": "신들의 하수구로 쓰인 소테리온이 동귀어진 폭발을 원하고 흑막 브림이 소테리온의 가슴에 오팔 심판 열쇠를 강제로 꽂으려 발악하자, 주인공이 오팔 심판 열쇠를 분쇄틀에 넣어 파괴하는 일로 폭발 기믹을 영구 봉인하고 수집한 뇌물 장부 100건을 지옥 전체 환영창에 상영해 신들의 위선을 폭로한다.",
			"boss": "pool_Scapegoat_Soterion_V1",
			"place": "유황 용암 옥좌",
			"npc": "brim"
		}
	],
	"act_summary": {
		"climax_finale": "소테리온의 가슴속 죄악 폭탄을 터뜨리려던 흑막 브림의 음모를 파악한 주인공이 오팔 심판 열쇠를 분쇄틀에 넣어 파괴하는 일로 동귀어진 폭발을 막아내고 신들의 비리를 지옥 전체에 폭로한다.",
		"intro": "연옥의 하수 신전에 도착한 주인공이 조력자 브림의 안내로 신들의 죄악 증거를 찾기 시작하며 오팔 심판 열쇠를 소테리온의 가슴에 꽂는 일의 위험한 신호탄을 쏘아 올린다.",
		"rising": "연옥의 3개 구역을 수색하며 신들의 비리와 뇌물 장부를 단서로 수집하고, 브림의 부추김에 속아 오팔 심판 열쇠로 구역별 봉인을 차례로 해제한다."
	}
};
