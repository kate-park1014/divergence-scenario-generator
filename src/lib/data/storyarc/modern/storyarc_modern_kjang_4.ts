import type { StoryArc } from '$lib/types';

export const storyarc_modern_kjang_4: StoryArc = {
	"id": "modern_kjang_4",
	"level": 4,
	"chapter_name": {
		"hindi": "सुविधा स्टोर का छाया लेखाकार",
		"japanese": "コンビニの影の会計士",
		"vietnamese": "Kế Toán Bóng Đêm Của Cửa Hàng Tiện Lợi",
		"spanish": "El Contable en la Sombra de la Tienda de Conveniencia",
		"chinese": "便利店里的影子会计师",
		"thai": "นักบัญชีเงาในร้านสะดวกซื้อ",
		"korean": "편의점의 그림자 회계사",
		"french": "Le Comptable Fantôme du Dépanneur",
		"english": "The Shadow Accountant of the Convenience Store"
	},
	"theme": "modern",
	"rising_count": 3,
	"world": {
		"setting": "낡고 허름한 편의점. 겉으로는 평범해 보이지만 미묘하게 어긋나는 질서와 숨겨진 감시의 눈길이 느껴진다. 진부한 상품들 사이에 낡은 장부와 계산기가 놓여 있다.",
		"rule": "이 편의점에서는 모든 거래가 기록되며, 심지어 작은 재고의 불일치도 큰 파장을 일으킬 수 있다. 겉으로 보이는 소심한 점원이 사실은 모든 숫자를 통제하는 존재일 수 있다.",
		"secret": "이 편의점은 단순한 상점이 아니다. 과거 거대 범죄 조직의 자금 세탁 및 정보 교환 거점이었으며, 지금도 '현금 흐름'을 감시하는 눈이 존재할 수 있다. 점원으로 보이는 인물이 사실은 조직의 중요한 인물일 수 있다는 암시가 있다."
	},
	"protagonist_goal": "편의점 점원 Mr. K-jang의 수상한 행동과 편의점 내의 미묘하게 어긋나는 질서를 파악하고, 그 이면에 숨겨진 진실을 밝혀내는 것.",
	"act_tone": {
		"rising": {
			"mood": "의심과 관찰",
			"tension": 3,
			"narrative_role": "주변 인물들의 의심을 통해 점차 커지는 미스터리"
		},
		"climax_finale": {
			"mood": "숨겨진 진실의 그림자",
			"tension": 5,
			"narrative_role": "보스의 진짜 정체에 대한 충격적인 암시와 긴장감 최고조"
		},
		"intro": {
			"mood": "불안한 일상",
			"tension": 1,
			"narrative_role": "사소한 불일치에서 오는 불편함과 불안감 조성"
		}
	},
	"final_boss": {
		"name": "Mr. K-jang",
		"surface_identity": "편의점 '알바'라고 부르기도 민망한, 존재감 없는 점원. 계산 실수라도 할까 봐 전전긍긍하며, 늘 손님들에게 죄송하다고 말하는 소심한 중년 남성.",
		"motivation": "자신의 편의점(이자 위장 거점) 내의 '완벽한' 질서와 숫자에 단 한 점의 오차도 허용할 수 없다. 플레이어들이 그의 '사업'에 방해가 될 사소한 행동(예: 재고 불일치)을 보이자, 그는 내면의 광적인 집착을 드러내기 시작한다.",
		"twist": "탐험대가 그의 편의점에서 어떤 중요한 단서(혹은 단순히 재고가 안 맞는 상품)를 발견하자, 평소의 쭈글한 표정은 순간 사라지고 눈빛이 섬뜩하게 변한다. 그는 계산대 아래에서 낡은 서류철을 꺼내들며 중얼거린다. '젠장, 재고가 안 맞아! 내 장부의 조화를 깨뜨린 대가는… ‘미수금’으로 처리될 걸세.' 그는 서류철을 펼치지만, 그 안의 내용은 아직 온전히 드러나지 않고 그저 복잡한 숫자들만 보여 혼란을 준다. 그의 손에 들린 볼펜 끝이 날카롭게 빛나는 듯한 착각을 불러일으킨다.",
		"id": "Spreadsheet_Accountant_V1",
		"appearance": "어둡고 칙칙한 편의점의 계산대 뒤, 허름한 유니폼 위로 삐져나온 셔츠 깃과 늘 초점 없는 눈빛이 감도는 중년 남성. 구부정한 어깨와 낡은 장부, 볼펜을 든 손이 그가 밤낮으로 숫자에 파묻혀 있음을 보여준다. 피곤에 지친 얼굴에는 계산 실수라도 할까 봐 전전긍긍하는 소심함이 역력하다.",
		"true_identity": "과거 거대 조폭 조직 '삼일회'의 전설적인 자금 관리사 '회계사'일 수도 있다는 암시가 드러나는 인물. 아직은 그저 숫자에 비정상적으로 집착하는 소심한 편의점 점원으로 보이지만, 그 이면에 숨겨진 냉철하고 광적인 면모가 살짝 비친다."
	},
	"global_foreshadowing": [
		{
			"id": "foreshadow_K-jang_ledger_pen",
			"reveal_room": 5,
			"reveal_act": "climax_finale",
			"plant_act": "intro",
			"reveal_context": "K-jang의 손에 들린 볼펜이 칼처럼 빛나고, 낡은 장부가 평범하지 않음이 암시된다.",
			"hint": "K-jang이 손에서 놓지 않는 낡은 장부와 볼펜이 그의 '도구'이자 '진실'을 담고 있다는 암시.",
			"plant_room": 1
		},
		{
			"plant_room": 2,
			"reveal_context": "재고 불일치에 K-jang이 광적으로 반응하며 숫자에 대한 비정상적인 집착이 드러난다.",
			"hint": "K-jang의 계산 실수에 대한 과도한 불안감과 숫자에 대한 비정상적인 집착.",
			"plant_act": "rising",
			"id": "foreshadow_K-jang_obsession",
			"reveal_room": 4,
			"reveal_act": "climax_finale"
		},
		{
			"plant_room": 3,
			"reveal_context": "플레이어가 발견한 재고 불일치 상품이 K-jang의 광기를 촉발하는 직접적인 계기가 된다.",
			"hint": "편의점 내의 특정 재고가 불확실하게 기록되어 있거나 실제와 맞지 않는 부분.",
			"plant_act": "rising",
			"id": "foreshadow_store_discrepancy",
			"reveal_room": 6,
			"reveal_act": "climax_finale"
		},
		{
			"plant_act": "intro",
			"reveal_act": "rising",
			"id": "foreshadow_Nia_Ren_suspicion",
			"reveal_room": 1,
			"plant_room": 0,
			"reveal_context": "Nia와 Ren이 K-jang에게 의문을 제기하며 플레이어의 의심을 증폭시킨다.",
			"hint": "Nia의 의심스러운 시선과 Ren의 의문 제기가 K-jang의 정체를 향한 첫 단서가 될 것."
		}
	],
	"npc_roles": {
		"ren": {
			"role": "편의점의 불일치하는 질서에 의문을 제기하는 분석가.",
			"arc": "편의점 물품 배열이나 가격표의 미묘한 이상함을 눈치채고 K-jang에게 조심스럽게 의문을 제기하려 한다. (시리즈 연결: 2편에서 K-jang의 낡은 장부에서 '삼일회' 문양과 자금 흐름도를 발견하고, 그가 평범한 알바가 아님을 확신하며 플레이어를 돕는다.)"
		},
		"nia": {
			"role": "수상한 거래 동향을 포착하고 K-jang을 은밀히 관찰하는 정보원.",
			"arc": "K-jang이 운영하는 편의점 주변에서 심상치 않은 움직임을 감지하고 K-jang을 주시하기 시작한다. (시리즈 연결: 2편에서 K-jang이 '삼일회'와 관련되었을 것이라는 결정적인 정보를 제공하며 플레이어와 협력한다.)"
		},
		"kai": {
			"role": "K-jang에게 동정심을 느끼지만 그의 이중성을 목격하는 목격자.",
			"arc": "K-jang을 그저 불쌍한 편의점 점원으로 여겨 작은 친절을 베풀지만, 계산 중 K-jang의 눈빛이 순간 섬뜩하게 변하는 것을 목격하고 불안감을 느낀다. (시리즈 연결: 2편에서 K-jang의 광적인 변모에 충격과 공포를 느끼면서도 과거의 인간적인 면모를 떠올리며 혼란에 빠진다.)"
		}
	},
	"scenarioOutline": [
		{
			"npc": "kai",
			"title": "초점 없는 눈, 낡은 장부",
			"order": 1,
			"boss": "random_boss",
			"act": "intro",
			"summary": "플레이어는 허름한 편의점에서 Mr. K-jang을 처음 만난다. 그는 계산 실수에 전전긍긍하며 손님들에게 연신 죄송하다고 말하는 소심한 알바 점원이다. 카이는 그에게 동정심을 느끼며 사소한 친절을 베푼다."
		},
		{
			"boss": "random_boss",
			"order": 2,
			"title": "수상한 시선, 감춰진 움직임",
			"npc": "nia",
			"summary": "편의점 근처에서 Nia가 K-jang을 은밀히 관찰한다. 그녀는 편의점 주변에서 일어나는 수상한 거래 동향을 포착하고, K-jang의 소심한 태도 뒤에 무언가 숨겨져 있을 것이라 의심한다.",
			"act": "rising"
		},
		{
			"summary": "Ren은 편의점의 물품 배열이나 가격표가 일반적이지 않음을 느끼고 K-jang에게 의문을 제기하려 한다. K-jang은 당황하며 계산 실수를 변명하지만, 그의 눈빛은 순간적으로 날카롭게 변한다.",
			"act": "rising",
			"title": "이상한 재고, 어긋난 질서",
			"npc": "ren",
			"boss": "random_boss",
			"order": 3
		},
		{
			"summary": "Kai는 K-jang이 재고를 맞추기 위해 낡은 장부를 들고 숫자에 비정상적으로 집착하는 모습을 목격한다. K-jang은 작은 숫자의 불일치에도 과도하게 불안해하며, 그의 눈빛에서 섬뜩한 광기가 스쳐 지나간다.",
			"act": "rising",
			"title": "숫자의 광기, 섬뜩한 눈빛",
			"npc": "kai",
			"boss": "random_boss",
			"order": 4
		},
		{
			"summary": "플레이어는 편의점에서 재고가 맞지 않는 수상한 상품을 발견한다. 이를 본 K-jang은 평소의 쭈글한 표정은 사라지고 눈빛이 광적으로 변하며 계산대 아래에서 낡은 서류철을 꺼낸다. 그는 '미수금'을 언급하며 섬뜩하게 웃지만, 서류철의 진짜 내용은 아직 완전히 드러나지 않고 혼란스러운 숫자들만이 보인다. Kai는 이 충격적인 변화를 목격한다.",
			"act": "climax_finale",
			"boss": "pool_Spreadsheet_Accountant_V1",
			"order": 5,
			"title": "장부의 비밀, 미수금의 경고",
			"npc": "kai"
		}
	],
	"act_summary": {
		"intro": "플레이어는 소심한 편의점 알바 Mr. K-jang을 만나며 일상적인 상호작용을 시작하지만, 그의 지나친 숫자에 대한 집착과 편의점 내의 미묘한 불일치를 어렴풋이 느끼게 된다.",
		"climax_finale": "플레이어는 편의점 내에서 결정적인 단서인 재고 불일치 상품을 발견하고, 이로 인해 K-jang의 숨겨진 광기가 폭발하는 순간을 목격한다. 그의 낡은 서류철이 펼쳐지며 심상치 않은 '미수금' 발언과 함께 그의 진짜 정체에 대한 충격적인 암시가 드리워진다.",
		"rising": "Nia와 Ren은 K-jang과 편의점을 각자의 방식으로 관찰하며 수상한 점을 발견한다. K-jang의 행동과 그의 편의점 운영 방식에서 심상치 않은 기운을 감지하며 미스터리가 증폭된다."
	}
};
