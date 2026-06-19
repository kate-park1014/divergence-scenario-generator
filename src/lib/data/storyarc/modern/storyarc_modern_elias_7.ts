import type { StoryArc } from '$lib/types';

export const storyarc_modern_elias_7: StoryArc = {
	"id": "modern_elias_7",
	"level": 7,
	"chapter_name": {
		"english": "Dawn Convenience Store, Shadow of Forgotten Atonement",
		"thai": "ร้านสะดวกซื้อรุ่งอรุณ เงาแห่งการไถ่บาปที่ถูกลืม",
		"french": "Le dépanneur de l'aube, l'ombre de l'expiation oubliée",
		"japanese": "夜明けのコンビニ、忘れられた贖罪の影",
		"korean": "새벽녘 편의점, 잊혀진 속죄의 그림자",
		"vietnamese": "Cửa hàng tiện lợi bình minh, bóng tối của sự chuộc tội bị lãng quên",
		"spanish": "Tienda de conveniencia al amanecer, la sombra de la expiación olvidada",
		"chinese": "黎明便利店，被遗忘的赎罪之影",
		"hindi": "भोर का सुविधा स्टोर, भूले हुए प्रायश्चित की छाया"
	},
	"theme": "modern",
	"rising_count": 3,
	"world": {
		"rule": "이 도시는 과거의 부패한 조직범죄와 관련된 어두운 비밀을 품고 있으며, 그 비밀은 때때로 현실에 기묘한 형태로 발현된다. 사람들은 그 존재를 인지하지 못하지만, 불길한 징후들을 통해 무의식적으로 불안감을 느낀다.",
		"secret": "도시의 그림자 아래에는 과거 끔찍한 사건으로 잊혀진 이들의 핏값과 함께, 죽음 직전의 회한이 깃들어 있다는 소문이 돌고 있다. 그 회한은 특정 인물에게 들러붙어 알 수 없는 형태로 속죄를 요구한다.",
		"setting": "밤이 깊은 도시, 오래된 편의점과 그 주변을 둘러싼 어둡고 음울한 분위기. 도시의 활기는 사라지고 잊혀진 과거의 흔적들이 곳곳에 스며들어 있다."
	},
	"protagonist_goal": "밤늦게까지 문을 여는 편의점에서 마주친 미스터리한 청년 엘리아스를 둘러싼 기묘한 현상과 그의 무기력함 뒤에 숨겨진 비밀을 파헤치고, 도시의 어두운 진실을 밝혀낸다.",
	"act_tone": {
		"rising": {
			"narrative_role": "단서 발견 및 갈등 심화",
			"tension": 3,
			"mood": "점점 고조되는 긴장감과 의심"
		},
		"climax_finale": {
			"mood": "강렬한 감정적 폭발과 충격적 암시",
			"tension": 5,
			"narrative_role": "진실의 일부 노출과 다음 편 예고"
		},
		"intro": {
			"mood": "불안하고 미스터리한",
			"tension": 1,
			"narrative_role": "사건의 시작과 분위기 조성"
		}
	},
	"final_boss": {
		"appearance": "A gaunt young man guarding the convenience store counter at dawn. His perpetually tired eyes and slumped shoulders hint at an unknown burden. A large, worn hoodie envelops his frail frame, and a faint metallic scent, like rainwater mixed with blood, subtly blends with the bustling city's odors, creating an odd disharmony.",
		"twist": "탐험대가 엘리아스를 추궁하자, 그의 몸에서 희미하게 붉은 기운이 피어오르고 목소리에 미묘한 변화가 감지된다. 고통스러운 표정으로 심장을 움켜쥔 엘리아스의 눈빛은 이내 짧지만 강렬한 서늘함으로 물든다. 그는 자신을 붙잡던 탐험대의 손을 뿌리치려는 듯 허공에 손을 뻗으며, 알 수 없는 절규를 내뱉는다.",
		"id": "ForgottenDebt_Elias_V1",
		"name": "Elias",
		"true_identity": "그는 평범한 편의점 알바생처럼 보이지만, 그의 몸에는 잊혀진 과거의 비극적인 그림자가 깃들어 있다. 자신도 모르게 '속죄'를 대리하고 있는 듯한 기묘한 존재.",
		"motivation": "자신의 의지와 무관하게 몸에 깃든 알 수 없는 '회한'의 이끌림에 따라, 무의식적으로 과거의 흔적을 좇고 있다. 진정한 의미도 모른 채 고통스러운 속죄의 여정을 이어가려는 듯하다.",
		"surface_identity": "한밤의 편의점에서 홀로 카운터를 지키는, 숫기 없고 병약해 보이는 청년. 무기력하고 고독한 모습으로 늘 공허한 눈빛을 하고 있다."
	},
	"global_foreshadowing": [
		{
			"plant_act": "intro",
			"plant_room": 1,
			"reveal_act": "climax_finale",
			"reveal_context": "엘리아스의 몸에서 피어나는 붉은 기운과 함께, 쇠 비린내가 과거의 핏값과 연결될 것임을 암시.",
			"reveal_room": 5,
			"hint": "엘리아스에게서 나는 희미한 쇠 비린내",
			"id": "Elias_MetallicScent"
		},
		{
			"plant_act": "rising",
			"reveal_room": 4,
			"reveal_context": "엘리아스의 피로가 알 수 없는 '회한'의 무거운 짐 때문임을 희미하게 드러냄.",
			"plant_room": 2,
			"reveal_act": "climax_finale",
			"hint": "그의 극심한 피로감과 공허한 눈빛",
			"id": "Elias_FatigueEyes"
		},
		{
			"hint": "가끔 보이는 이해할 수 없는 짧은 망설임이나 반응",
			"id": "Elias_Hesitation",
			"reveal_context": "엘리아스 내면의 갈등, 즉 다른 존재가 그의 의식을 지배하려 함을 암시.",
			"reveal_room": 3,
			"plant_room": 3,
			"reveal_act": "climax_finale",
			"plant_act": "rising"
		},
		{
			"hint": "도시 내 과거 조직폭력배 사건에 대한 스쳐 지나가는 뉴스나 소문",
			"id": "City_PastRumors",
			"reveal_context": "도시의 어두운 과거가 엘리아스의 정체와 밀접하게 연관되어 있음을 암시.",
			"reveal_room": 2,
			"plant_room": 4,
			"reveal_act": "climax_finale",
			"plant_act": "rising"
		}
	],
	"npc_roles": {
		"kai": {
			"role": "감성적 조력자",
			"arc": "이번 편에서는 엘리아스의 무기력함과 공허한 눈빛에서 깊은 고독을 느끼고, 인간적인 연결을 시도한다. 시리즈 연결: 다음 편에서는 엘리아스의 내면적 고통에 공감하며, 그가 속죄를 통해 평화를 찾도록 돕고 그의 트위스트에 가장 큰 충격을 받는다."
		},
		"bex": {
			"arc": "이번 편에서는 엘리아스에게서 나는 쇠 비린내와 편의점 주변의 불길한 기운을 포착하며 초기 조사를 시작한다. 시리즈 연결: 다음 편에서는 과거 조직폭력배 사건의 단서를 파헤쳐 엘리아스의 진정한 정체를 밝히는 데 결정적인 기여를 한다.",
			"role": "탐정/분석가"
		},
		"dax": {
			"arc": "이번 편에서는 엘리아스의 무기력함이 단순한 피로가 아니라 도시의 특정 에너지가 투영된 결과일 수 있다는 직관적인 가설을 제시한다. 시리즈 연결: 다음 편에서는 엘리아스에게 깃든 '회한'의 본질과 그것이 발현되는 메커니즘을 과학적으로 분석해 팀의 이해를 돕는다.",
			"role": "직관적 통찰가"
		}
	},
	"scenarioOutline": [
		{
			"order": 1,
			"summary": "탐험대가 늦은 밤 편의점에 들르고, 카이는 계산을 하는 엘리아스에게서 묘한 무기력함과 공허한 눈빛을 발견한다. 엘리아스에게서 희미한 쇠 비린내가 스쳐 지나가 카이는 알 수 없는 불안감을 느낀다. 카이는 엘리아스의 고독한 모습에 연민을 느끼고 그에게 조심스럽게 말을 건넨다.",
			"boss": "random_boss",
			"act": "intro",
			"npc": "kai",
			"title": "심야 편의점의 그림자"
		},
		{
			"summary": "탐험대는 편의점 주변에서 이상한 사건들이 반복되고 있다는 도시의 스쳐 지나가는 소문들을 접한다. 벡스는 엘리아스에게서 나는 쇠 비린내와 더불어, 그가 종종 보이는 극심한 피로감과 혼잣말 같은 중얼거림을 포착하며 조사를 시작한다.",
			"order": 2,
			"act": "rising",
			"boss": "random_boss",
			"title": "의문의 징후와 도시의 소문",
			"npc": "bex"
		},
		{
			"summary": "닥스는 엘리아스의 무기력함과 도시의 쇠퇴한 분위기, 그리고 스쳐 지나가는 불길한 소문들이 단순한 우연이 아니며, 어떤 연결고리가 있을 것이라는 직관적인 가설을 제시한다. 그는 엘리아스가 가끔 보이는 이해할 수 없는 짧은 망설임이나 반응을 주목한다.",
			"order": 3,
			"act": "rising",
			"boss": "random_boss",
			"title": "직관적 가설과 숨겨진 비밀",
			"npc": "dax"
		},
		{
			"order": 4,
			"summary": "벡스는 도시의 과거 조직폭력배 사건에 대한 뉴스 기사를 찾아보고, 편의점 근처에서 발생했던 잊혀진 사건들과 엘리아스 주변의 이상 현상들 사이에서 미묘한 연관성을 발견한다. 팀은 엘리아스가 무언가에 얽매여 있다는 강한 의심을 품기 시작한다.",
			"npc": "bex",
			"title": "증폭되는 의심, 과거의 흔적",
			"boss": "random_boss",
			"act": "rising"
		},
		{
			"boss": "pool_ForgottenDebt_Elias_V1",
			"act": "climax_finale",
			"npc": "kai",
			"title": "균열의 시작, 잊혀진 속죄의 서곡",
			"order": 5,
			"summary": "탐험대는 엘리아스를 다시 찾아가 그의 정체에 대해 조심스럽게 추궁한다. 카이가 엘리아스의 피로와 고독에 대해 진심으로 염려를 표하자, 엘리아스는 갑자기 고통스러운 표정으로 심장을 움켜쥔다. 그의 몸에서 희미하게 붉은 기운이 피어오르며 목소리에 짧지만 섬뜩한 변화가 감지된다. 엘리아스의 눈빛은 이내 차갑고 낯선 서늘함으로 물들고, 그는 탐험대의 손을 뿌리치려는 듯 허공에 손을 뻗으며 알 수 없는 절규를 내뱉는다. 탐험대는 그의 표면적 정체 뒤에 감춰진 거대한 비밀의 첫 균열을 목격하며 충격에 휩싸인다."
		}
	],
	"act_summary": {
		"climax_finale": "탐험대의 추궁과 카이의 진심 어린 염려가 엘리아스 내면의 무언가를 자극한다. 엘리아스는 고통스러워하며 몸에서 붉은 기운을 내뿜고, 그의 목소리와 눈빛이 섬뜩하게 변하는 모습을 통해 탐험대는 그의 진짜 정체가 단순한 편의점 알바생이 아님을 깨닫는다. 이는 잊혀진 속죄의 서막을 알리는 충격적인 암시로, 다음 이야기에 대한 강렬한 궁금증을 남긴다.",
		"intro": "탐험대는 늦은 밤 편의점에서 무기력하고 공허한 눈빛의 엘리아스와 처음 마주한다. 그에게서 풍기는 미스터리한 쇠 비린내와 그의 고독한 모습은 알 수 없는 불안감과 연민을 동시에 불러일으키며 사건의 시작을 알린다.",
		"rising": "편의점 주변에서 발생하는 기이한 사건들과 도시의 어두운 소문들이 엘리아스와 얽혀있음이 드러나고, 벡스와 닥스는 엘리아스의 극심한 피로와 특이한 반응들에서 깊은 의심을 품기 시작한다. 과거 조직범죄와 관련된 단서들이 발견되며, 엘리아스의 표면 아래 숨겨진 진실에 대한 가설들이 제기된다."
	}
};
