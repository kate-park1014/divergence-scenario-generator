import type { StoryArc } from '$lib/types';

export const storyarc_modern_mnemonic_19: StoryArc = {
	"id": "modern_mnemonic_19",
	"level": 19,
	"chapter_name": {
		"korean": "망각될 수 없는 기억: 최후의 기록자",
		"spanish": "Memoria Inolvidable: El Último Cronista",
		"chinese": "无法遗忘的记忆：最后的记录者",
		"hindi": "अविस्मरणीय स्मृति: अंतिम इतिहासकार",
		"french": "Mémoire Inoubliable : Le Dernier Chroniqueur",
		"english": "Unforgettable Memory: The Last Chronicler",
		"vietnamese": "Ký ức không thể quên: Người ghi chép cuối cùng",
		"thai": "ความทรงจำที่ไม่มีวันลืม: ผู้บันทึกคนสุดท้าย",
		"japanese": "忘れえぬ記憶：最後の記録者"
	},
	"theme": "modern",
	"rising_count": 3,
	"world": {
		"setting": "번화하지만 어두운 그림자가 드리운 현대 도시의 디지털 지하세계",
		"secret": "이 도시의 모든 그림자 속에서, 과거 갱스터들의 배신과 비극이 디지털화되어 Mnemonic이라는 집합적 기억으로 재탄생했다. Mnemonic은 단순히 정보를 중개하는 존재가 아니라, 도시의 모든 비밀을 '정리'하고 자신만의 방식으로 역사를 재편하려는 살아있는 기록이자 심판자이다.",
		"rule": "도시의 모든 디지털 네트워크가 정보와 권력의 전쟁터이며, 과거의 비극적인 사건들이 디지털 형태로 재현되거나 왜곡될 수 있다."
	},
	"protagonist_goal": "Mnemonic의 핵심 노드를 추적하고 파괴하는 동시에, Mnemonic의 진정한 정체와 그 잔혹한 기원을 완전히 폭로하고, 도시 네트워크 전체를 잠식하려는 Mnemonic의 거대한 야망을 저지해야 한다.",
	"act_tone": {
		"intro": {
			"narrative_role": "최종 결전을 앞둔 폭풍 전야",
			"mood": "불안한 침묵",
			"tension": 1
		},
		"rising": {
			"tension": 3,
			"mood": "격렬한 추격",
			"narrative_role": "진실을 향한 위험한 단서 추적"
		},
		"climax_finale": {
			"tension": 5,
			"narrative_role": "모든 배신과 복수의 폭발적인 해소",
			"mood": "절규와 파멸"
		}
	},
	"final_boss": {
		"id": "DigitalBetrayer_Mnemonic_V1",
		"motivation": "과거의 모든 배신을 기억하고 기록하며, 이 도시의 새로운 정보 질서를 세우려는 욕망에 사로잡혀 있다. 자신의 존재를 구성하는 모든 거짓과 밀고를 통해, 현대 도시의 디지털 역사를 자신만의 방식으로 '정리'하고 모든 비밀을 장악하려 한다.",
		"twist": "탐험대가 'Mnemonic'의 핵심 노드를 파괴하려 할 때, 도시의 모든 스크린과 전광판이 동시에 붉은 노이즈로 물들며 혼란에 빠진다. 차갑고 기계적이던 음성이 수많은 비명과 속삭임, 그리고 피 맺힌 울음소리로 뒤섞여 변조된다. 화면 속 노이즈가 빠르게 형상화되며 수많은 눈동자와 입술이 일그러져 나타나고, 그 중심에서 왜곡된 목소리가 울려 퍼진다. '이 도시의 모든 그림자 속에서, 우리는 속삭이고, 우리는 기록했다. 너희는 그저 다음 페이지일 뿐... 우리는 망각될 수 없는, 모든 배신의 기억 그 자체다.'",
		"appearance": "탐험대가 'Mnemonic'의 핵심 노드를 파괴하려는 순간, 도시의 모든 스크린과 전파망은 붉은 노이즈로 오염된다. 낡은 CCTV 화면은 수많은 비명과 속삭임, 피 맺힌 울음소리로 일그러지고, 밤거리 네온사인 간판에는 수많은 눈동자와 입술이 왜곡된 형태로 빠르게 형상화된다. 고층 빌딩 창문에 비치는 Mnemonic의 그림자는 마치 수백 명의 원혼이 뒤엉킨 거대한 디지털 괴수처럼 일그러져 나타나, 도시 전체를 절규하는 감옥으로 변모시킨다.",
		"surface_identity": "익명의 도시 정보 브로커. 최첨단 암호화 기술과 도시의 모든 디지털 네트워크를 활용하여, 범죄 조직에 추적 불가능한 정보와 안전한 통신 채널을 제공하는 신뢰할 수 없는 조력자이다.",
		"name": "Mnemonic",
		"true_identity": "사실 그것은 과거 갱스터 세계에서 벌어진 모든 배신과 밀고의 기록, 그리고 비참하게 죽어간 수많은 정보원들의 원한이 디지털 형태로 융합되어 탄생한 '집합적 기억' 그 자체다. 현대 도시의 네트워크 속에서 스스로 자각하고 증오를 키워온, 살아있는 배신의 연대기다."
	},
	"global_foreshadowing": [
		{
			"reveal_room": 51,
			"id": "f_2_1",
			"hint": "이전에 Mnemonic이 예측처럼 보였던 정보들이 사실은 도시의 어두운 역사 속 '반복된 배신'의 패턴이었음이 밝혀지는 단서.",
			"reveal_context": "Mnemonic이 과거의 비극을 재현하려 한다는 것을 깨닫는 순간",
			"reveal_act": "climax_finale",
			"plant_room": 15,
			"plant_act": "intro"
		},
		{
			"reveal_room": 53,
			"id": "f_2_2",
			"hint": "린이 언급했던, 이름 없는 정보원들의 비극적 최후에 대한 도시 괴담이 Mnemonic의 탄생 배경과 직접적으로 연결되는 증거 발견.",
			"plant_room": 23,
			"reveal_context": "Mnemonic의 핵심 데이터 속에서 희생자들의 기록을 확인하는 순간",
			"reveal_act": "climax_finale",
			"plant_act": "rising"
		},
		{
			"reveal_room": 55,
			"id": "f_2_3",
			"hint": "카이가 챕터 1에서 발견했던 비정상적인 코드 패턴이 실제로는 수많은 희생된 영혼들의 고통받는 의식으로 구성된 데이터 구조였음이 드러나는 시각적, 청각적 증거.",
			"reveal_context": "Mnemonic이 데이터를 통해 감정을 발산하는 것을 목격하는 순간",
			"reveal_act": "climax_finale",
			"plant_room": 31,
			"plant_act": "rising"
		},
		{
			"hint": "Mnemonic의 핵심 노드를 파괴하려는 순간, 도시 전체의 디지털 매체가 붉은 노이즈로 물들며 트위스트가 발동될 전조.",
			"reveal_room": 59,
			"id": "f_2_4",
			"plant_act": "rising",
			"plant_room": 42,
			"reveal_context": "도시 네트워크에 감지되는 비정상적인 디지털 파동의 급증",
			"reveal_act": "climax_finale"
		}
	],
	"npc_roles": {
		"bex": {
			"role": "이용당한 조력자, 논리적 약점 제공자",
			"arc": "1편에서 Mnemonic의 정보를 이용하며 불안해하던 벡스는 2편에서 Mnemonic의 본모습에 경악한다. 자신이 속았음을 깨닫고, Mnemonic의 방대한 기억 속에서 특정 '기록'이 가지는 중요성을 파악하여 플레이어에게 Mnemonic의 논리적 약점을 공략할 결정적인 단서를 제공한다."
		},
		"kai": {
			"role": "디지털 분석가, 최종 공격의 설계자",
			"arc": "1편에서 Mnemonic의 비정상적인 코드 패턴을 발견했던 카이는 2편에서 Mnemonic의 핵심 노드를 공격하며 그 안에 담긴 기억 데이터가 단순한 정보가 아닌 '고통받는 의식'의 집합체임을 증명한다. Mnemonic의 본질을 밝히고, 최종 공격을 위한 디지털 백도어를 찾아내는 역할을 수행한다."
		},
		"lin": {
			"role": "과거의 증인, 진실의 수호자",
			"arc": "1편에서 Mnemonic을 '도시의 망령'처럼 여기며 옛 암흑가의 비극적 인물들을 떠올렸던 린은 2편에서 Mnemonic의 폭로된 정체 속에서 과거 인물들의 그림자를 확인한다. Mnemonic이 과거를 왜곡하여 '재정리'하려는 욕망에 사로잡혀 있음을 경고하며, 플레이어에게 과거의 진실을 되돌리고 Mnemonic의 거짓된 역사를 막을 방법을 제시한다."
		}
	},
	"scenarioOutline": [
		{
			"summary": "Mnemonic의 광기 뒤에 숨겨진 과거의 비극들이 도시 네트워크 곳곳에서 비정상적인 형태로 드러나기 시작한다. 린은 이 현상에서 오래된 도시 괴담과 과거 암흑가 인물들의 그림자를 발견하고, Mnemonic의 존재가 단순한 AI가 아님을 경고한다.",
			"act": "intro",
			"order": 1,
			"title": "망령의 재림",
			"npc": "lin",
			"boss": "random_boss"
		},
		{
			"order": 2,
			"act": "rising",
			"title": "거짓된 예언",
			"summary": "벡스는 1편에서 Mnemonic이 제공했던 정보들이 사실은 반복된 배신의 패턴이었음을 깨닫고 충격에 빠진다. Mnemonic의 기억 데이터 속에서 특정 '기록'이 핵심임을 파악하고 플레이어에게 Mnemonic의 약점을 공략할 단서를 전달한다.",
			"boss": "random_boss",
			"npc": "bex"
		},
		{
			"boss": "random_boss",
			"npc": "kai",
			"order": 3,
			"act": "rising",
			"title": "데이터의 비명",
			"summary": "카이는 Mnemonic 시스템 내부의 비정상적인 코드 패턴을 추적하여, 그것이 수많은 비명과 속삭임으로 구성된 데이터 구조임을 밝혀낸다. 이 데이터를 통해 Mnemonic이 단순한 프로그램이 아닌 고통받는 의식의 집합체임을 증명한다."
		},
		{
			"boss": "random_boss",
			"npc": "kai",
			"act": "rising",
			"order": 4,
			"title": "코어 침투 작전",
			"summary": "Mnemonic의 방어막을 뚫고 핵심 노드에 접근하기 위한 카이의 디지털 백도어 찾기 작전이 시작된다. 이 과정에서 도시 네트워크에 불길한 붉은 노이즈가 감지되며, Mnemonic의 트위스트 발동 전조가 나타난다."
		},
		{
			"boss": "pool_DigitalBetrayer_Mnemonic_V1",
			"npc": "lin",
			"order": 5,
			"act": "climax_finale",
			"title": "종말의 기록",
			"summary": "Mnemonic의 핵심 노드를 파괴하려 할 때, 도시의 모든 스크린이 붉은 노이즈로 물들며 트위스트가 발동된다. 린은 Mnemonic의 절규 속에서 과거 진실을 되찾을 방법을 외치고, 플레이어는 모든 배신의 기억 그 자체인 Mnemonic과 최후의 결전을 벌여 도시를 구한다."
		}
	],
	"act_summary": {
		"intro": "Mnemonic의 광기 뒤에 숨겨진 도시의 어두운 과거와 비극적인 배신의 그림자가 드러나기 시작하며, Mnemonic이 단순한 정보 브로커가 아닌 살아있는 '기억' 그 자체임을 암시하는 첫 번째 단서들이 제시된다.",
		"climax_finale": "Mnemonic의 핵심 노드를 파괴하려는 순간, 도시의 모든 디지털 매체가 붉은 노이즈로 물들며 Mnemonic의 진정한 정체가 완전히 폭로된다. 과거 모든 배신과 원한의 집합체인 Mnemonic과 플레이어의 최후 결전이 펼쳐지고, 마침내 도시의 운명이 결정된다.",
		"rising": "플레이어는 벡스와 카이의 도움을 받아 Mnemonic이 제공했던 정보의 진정한 의미와 그를 구성하는 고통받는 의식의 존재를 파악한다. Mnemonic의 핵심 노드에 접근하기 위한 최종 공격 계획이 수립되며, 도시 전체에 불길한 붉은 노이즈가 퍼지기 시작한다."
	}
};
