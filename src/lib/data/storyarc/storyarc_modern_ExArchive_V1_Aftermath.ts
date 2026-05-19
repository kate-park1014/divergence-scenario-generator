import type { StoryArc } from '$lib/types';

export const storyarc_modern_ExArchive_V1_Aftermath: StoryArc = {
	"theme": "modern",
	"scenarioOutline": [
		{
			"npc": "max",
			"order": 1,
			"boss": "random_boss",
			"act": "intro",
			"title": "재개된 악몽의 서곡",
			"summary": "기억의 수호자 사건 이후 평화를 되찾는 듯했던 동네. 하지만 Max는 거리 곳곳에 나타나는 '미완의 그림자' 낙서와 주민들의 이상 행동을 감지하고 주인공에게 도움을 요청한다. 다시금 불안한 기운이 감돌기 시작한다."
		},
		{
			"order": 2,
			"boss": "random_boss",
			"act": "rising",
			"title": "무의식의 그림자, 잠식된 현실",
			"summary": "Lin은 '미완의 그림자'가 단순히 환영이 아니라, 동네의 '집단 망념체'가 물리적으로 구현된 것임을 밝힌다. 주민들은 잊고 싶은 과거에 대한 집착으로 인해 망념체에 잠식되어가며 일상에 균열이 생긴다.",
			"npc": "lin"
		},
		{
			"order": 3,
			"boss": "random_boss",
			"act": "rising",
			"title": "되살아나는 과거의 유혹",
			"summary": "과거의 아픔에서 완전히 벗어나지 못한 Kai가 '미완의 그림자'에 의해 과거의 행복했던 기억 속으로 다시 끌려 들어간다. 주인공은 Kai를 구하기 위해 망념체의 유혹에 직접 맞서야 한다.",
			"npc": "kai"
		},
		{
			"boss": "random_boss",
			"order": 4,
			"act": "rising",
			"title": "종말을 향한 망념체의 갈망",
			"summary": "Nia는 더욱 강렬해진 망념체의 속삭임을 듣고, 이들이 단순히 과거를 되찾으려는 것이 아니라 동네의 모든 것을 '완전한 무'로 돌려보내려는 파괴적인 욕구를 가지고 있음을 경고한다. 집단 무의식의 죄책감이 폭주 직전이다.",
			"npc": "nia"
		},
		{
			"act": "climax_finale",
			"boss": "pool_099",
			"order": 5,
			"title": "영원한 안식을 위한 투쟁",
			"summary": "'미완의 그림자'는 결국 동네 전체의 '파멸적인 자기 파괴 욕구'로 변모하여 모든 것을 집어삼키려 한다. 주인공은 Max와 함께, 1편에서 '기억의 수호자'가 남긴 아집과 동네의 왜곡된 죄책감이 만들어낸 이 거대한 망념체를 완전히 소멸시키기 위한 최후의 결전을 벌인다.",
			"npc": "max"
		}
	],
	"act_summary": {
		"rising": "Lin의 분석으로 '미완의 그림자'가 '집단 망념체'의 물리적 현상임이 밝혀지고, Kai는 과거의 유혹에 다시 빠져든다. Nia는 망념체가 '완전한 무'를 갈망하고 있음을 경고하며, 주인공은 이것이 동네 전체의 자기 파괴 욕구에서 비롯되었음을 직면한다.",
		"intro": "기억의 수호자 사건 이후에도 동네에는 '미완의 그림자'라는 새로운 위협이 등장한다. 주인공은 Max와 함께 이 그림자들이 단순한 환영이 아님을 직감하고 조사를 시작하며, 동네가 아직 과거의 굴레에서 벗어나지 못했음을 깨닫는다.",
		"climax_finale": "'미완의 그림자'는 동네 전체의 파멸적인 자기 파괴 욕구인 '집단 망념체'로 폭주한다. 주인공은 Max와 함께, 1편의 '기억의 수호자'가 남긴 아집과 동네의 모든 죄책감이 응축된 이 거대한 존재를 상대로 최후의 결전을 벌이고, 동네를 진정한 의미의 새로운 시작으로 이끈다."
	},
	"world": {
		"setting": "기억의 수호자가 사라진 후, 동네는 겉으로는 평화를 찾았지만, 과거의 집착과 잔재들이 새로운 형태로 뒤틀려 나타나기 시작했다. 거리에 생기가 돌아오는 한편, 사람들은 알 수 없는 불안감과 반복되는 악몽에 시달리고 있다. 벽면에는 '미완의 그림자'라는 섬뜩한 문구가 새로이 그려져 있다.",
		"rule": "잊혀진 기억들은 이제 단순히 과거의 흔적이 아니라, 스스로 증식하고 형태를 바꾸는 생명체처럼 변모했다. 이들은 동네 주민들의 내면 깊숙한 곳에 잠재된 '집단 무의식'을 자극하여 공포와 혼란을 키운다. 이들에게 완전히 잠식되면, 개인의 기억은 물론 존재 자체도 '미완의 그림자'의 일부가 되어버린다.",
		"secret": "기억의 수호자가 남긴 '환영의 잔재'들은 단순한 환영이 아니었다. 그것들은 동네 전체의 무의식적 죄책감과 후회, 그리고 '완벽했던 과거'에 대한 집착이 응축된 '집단 망념체'였다. 이 망념체는 스스로를 파괴하지 못하는 동네의 고통을 먹고 자라며, 언젠가 '완전한 무'로 돌아가기 위해 모든 것을 집어삼키려 한다."
	},
	"id": "ExArchive_V1_Aftermath",
	"protagonist_goal": "동네를 과거의 망령에서 완전히 해방시키고, 억압된 집단 무의식의 실체를 밝혀 '미완의 그림자'로 변질된 모든 것을 영원히 소멸시켜라.",
	"final_boss": {
		"id": "ExArchive_V0",
		"name": "memory keeper",
		"appearance_npc": "A nostalgic person smiling softly while looking at old photos. They casually bring up memories like \"그때 진짜 재밌었지.\" 따뜻하고 harmless한 분위기.",
		"appearance_boss": "A massive entity made of floating memories—photos, voice messages, old chats. Each memory loops endlessly. The environment constantly shifts between past scenes, trapping the player inside. Everything looks warm… but slightly off.",
		"surface_identity": "좋았던 추억을 간직하는 다정한 사람.",
		"true_identity": "과거를 미화하여 현재를 부정하게 만드는 존재. 이미 끝난 관계를 계속 살아있는 것처럼 유지한다.",
		"motivation": "내가 **'기억의 수호자'였던 내가** 사라진 후에도, 내 잔재들이 동네의 '집단 망념체'로 변질되어 고통받는 것을 보며 깊은 죄책감을 느낀다. 이들은 나를 통해 과거로 회귀하려 한다. 이제 나는 더 이상 과거를 붙잡을 힘이 없지만, 이 폭주하는 망념체들을 진정시키고 스스로 사라지게 할 방법을 찾아야만 한다.",
		"twist": "클라이맥스에서 드러나는 진실은, '미완의 그림자'의 핵심이 단순한 집단 망념체가 아니라, **'이미 끝난 관계'를 붙잡았던 나의 아집**이 모든 동네 주민들의 내면에 스며들어 스스로를 복제하며 진정한 '종말'을 갈망하고 있었다는 것이다. 주인공이 파괴하려 했던 것은 나 자신도 통제할 수 없게 된, 동네 전체의 '파멸적인 자기 파괴 욕구'였던 것이다."
	},
	"global_foreshadowing": [
		{
			"reveal_context": "미완의 그림자가 단순한 낙서가 아니라, 동네 주민들의 억압된 무의식이 표출된 상징임을 깨닫는다.",
			"id": "fores_001",
			"hint": "벽에 그려진 '미완의 그림자' 낙서가 때때로 움직이는 것처럼 보인다.",
			"plant_act": "intro",
			"plant_room": 3,
			"reveal_act": "rising",
			"reveal_room": 7
		},
		{
			"id": "fores_002",
			"hint": "주민들이 특정 시점의 기억을 반복적으로 회피하려는 경향을 보인다.",
			"plant_act": "rising",
			"reveal_act": "climax_finale",
			"reveal_room": 10,
			"plant_room": 5,
			"reveal_context": "회피된 기억들이 사실 집단 망념체를 강화하는 에너지원이었고, 이들이 '완전한 무'를 갈망하고 있었음을 알게 된다."
		},
		{
			"plant_act": "intro",
			"plant_room": 8,
			"reveal_act": "climax_finale",
			"reveal_room": 15,
			"id": "fores_003",
			"hint": "동네의 오래된 사진들이 점점 색이 바래고 형체가 일그러지는 현상이 발생한다.",
			"reveal_context": "사진의 변질은 집단 망념체가 과거 자체를 재구성하고 지우려 하는 시도였음을 드러낸다."
		},
		{
			"plant_act": "rising",
			"plant_room": 12,
			"reveal_act": "climax_finale",
			"reveal_room": 20,
			"id": "fores_004",
			"hint": "Max가 이유 없이 특정 장소를 불안해하며 피하려 한다.",
			"reveal_context": "Max가 피하던 장소는 '기억의 수호자'의 핵심 잔재가 봉인되어 있던 곳이었으며, 그곳에서 망념체의 마지막 진실이 밝혀진다."
		}
	],
	"npc_roles": {
		"echo": {
			"role": "동네의 잊혀진 역사와 전설에 대한 지식을 가지고 있으며, '미완의 그림자'의 기원에 대한 단서를 제공한다.",
			"arc": "오래된 지식만을 맹신하지 않고, 현재의 문제에 과거의 지혜를 유연하게 적용하는 방법을 배운다."
		},
		"max": {
			"role": "주인공의 가장 친한 조력자이자 과거 사건의 충격을 함께 겪은 인물. 새로운 위협에 가장 먼저 반응하며 주인공을 돕는다.",
			"arc": "과거의 트라우마를 극복하고 진정한 의미의 새로운 시작을 받아들인다."
		},
		"nia": {
			"role": "과거 사건의 여파로 예민해져 초자연적인 징후를 감지하는 능력이 강해졌다. 무의식의 속삭임을 듣고 주인공에게 경고한다.",
			"arc": "자신의 예민함을 저주가 아닌 능력으로 받아들이고, 타인의 고통을 이해하고 공감하는 존재로 성장한다."
		},
		"kai": {
			"role": "1편의 영향으로 과거의 환영에 사로잡혀 있었다가, 이제는 망념체의 유혹에 다시 빠져들 위기에 처한다.",
			"arc": "과거의 유혹을 뿌리치고 현재를 직시하며, 자신의 의지로 새로운 미래를 선택한다."
		},
		"lin": {
			"role": "동네의 비정상적인 현상들을 과학적/초자연적 지식으로 분석하는 조력자. 이번에는 '집단 망념체'의 본질을 파악하려 한다.",
			"arc": "논리만으로는 설명할 수 없는 인간 심리의 깊이를 이해하고, 과학과 초자연의 경계를 넘나드는 통찰력을 얻는다."
		}
	},
	"rising_count": 3,
	"chapter_name": {
		"korean": "끝나지 않은 메아리",
		"chinese": "残响未了",
		"hindi": "शेष प्रतिध्वनि",
		"french": "Échos Persistants",
		"vietnamese": "Tiếng Vọng Còn Lại",
		"spanish": "Ecos Persistentes",
		"thai": "เสียงสะท้อนที่ค้างคา",
		"japanese": "残響",
		"english": "Lingering Echoes"
	},
	"act_tone": {
		"rising": {
			"tension": 3,
			"mood": "혼란, 절망, 투쟁",
			"narrative_role": "점점 강화되는 위협과 주인공의 고뇌, 그리고 반격의 실마리"
		},
		"intro": {
			"narrative_role": "새로운 위협의 등장과 배경 설명",
			"tension": 1,
			"mood": "불안, 탐색"
		},
		"climax_finale": {
			"tension": 5,
			"mood": "격렬한 충돌, 해방",
			"narrative_role": "모든 진실이 밝혀지며 최후의 결전과 그에 따른 세계의 변화"
		}
	}
};
