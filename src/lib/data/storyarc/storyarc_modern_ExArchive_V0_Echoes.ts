import type { StoryArc } from '$lib/types';

export const storyarc_modern_ExArchive_V0_Echoes: StoryArc = {
	"world": {
		"setting": "기억의 수호자가 사라진 후, 동네는 더 이상 시간이 멈추지 않는다. 하지만 왜곡된 과거의 그림자가 여전히 남아 주민들의 현재를 좀먹고 있다. 거리는 활기를 되찾는 듯 보이지만, 사람들은 여전히 잊힌 기억과 싸우고 있다. 동네 곳곳에는 '끝나지 않은 이야기'라는 묘한 문구들이 낙서처럼 발견된다.",
		"secret": "기억의 수호자의 진짜 정체는 밝혀졌지만, 그가 만들어낸 '환영의 잔재'들은 사라지지 않았다. 이 잔재들은 새로운 '수호자'를 갈망하며 동네의 불안정한 기억들을 조작하고 있다. 이 잔재들은 사실 잊혀진 과거의 집단 무의식이 응축된 존재이며, 언젠가 새로운 형태로 폭주할 준비를 하고 있다.",
		"rule": "이 동네에서는 잊히거나 무시된 기억이 물리적인 형태로 나타나 현실에 개입한다. 과거를 마주하고 해결하지 않으면, 그 기억은 점점 더 강해져 현재를 압도한다. 진정으로 잊힌 것은 사라지지만, 억지로 외면한 것은 끈질기게 붙어남아 괴롭힌다."
	},
	"protagonist_goal": "과거의 그림자로부터 현재를 해방하고, 동네의 왜곡된 기억들을 완전히 소멸시켜 진정한 의미의 새로운 시작을 맞이하라.",
	"id": "ExArchive_V0_Echoes",
	"act_summary": {
		"intro": "기억의 수호자가 사라진 후 동네에는 겉으로는 평화가 찾아왔지만, 과거의 잔재들이 미묘하게 현실을 침범하기 시작한다. 주인공은 Max와 함께 이 불안한 기운을 조사하며 새로운 위협을 감지한다.",
		"rising": "잊혀진 기억들이 현실에 물리적인 형태로 나타나고, Lin은 이 현상이 '기억의 잔재' 때문임을 밝힌다. Kai는 과거에 갇혀 잔재들에게 동조하고, Nia는 '집단 무의식'의 존재를 언급하며 새로운 수호자의 갈망이 있음을 경고한다. 주인공은 이 모든 것이 단순히 과거가 아닌, 현재를 집어삼키려는 거대한 의지임을 깨닫는다.",
		"climax_finale": "기억의 수호자의 잔재들이 폭주하여 '집단 무의식'의 거대한 존재로 변모한다. 주인공은 Max와 함께 과거의 아집으로 만들어진 이 왜곡된 존재를 상대로 최후의 결전을 벌이고, 동네를 과거의 그림자에서 완전히 해방시키기 위해 싸운다."
	},
	"act_tone": {
		"rising": {
			"tension": 3,
			"mood": "Desperation",
			"narrative_role": "Escalate the conflict with manifestations of forgotten memories and reveal deeper truths."
		},
		"intro": {
			"tension": 1,
			"mood": "Unease",
			"narrative_role": "Introduce the lingering effects of the past and the protagonist's new burden."
		},
		"climax_finale": {
			"narrative_role": "Confront the true source of the lingering distortions and decide the fate of the town.",
			"tension": 5,
			"mood": "Catharsis"
		}
	},
	"theme": "modern",
	"rising_count": 3,
	"chapter_name": {
		"english": "Lingering Pages",
		"korean": "남아있는 페이지",
		"chinese": "剩余的页面",
		"vietnamese": "Những Trang Còn Lại",
		"spanish": "Páginas Remanentes",
		"hindi": "शेष पृष्ठ",
		"thai": "หน้ากระดาษที่หลงเหลือ",
		"japanese": "残されたページ",
		"french": "Pages Persistantes"
	},
	"scenarioOutline": [
		{
			"summary": "기억의 수호자 사건 이후, 평화를 되찾는 듯했던 동네. 하지만 Max는 여전히 이상한 기운을 감지하고 주인공에게 도움을 요청한다. 거리 곳곳에 과거의 환영이 스쳐 지나가는 것을 목격한다.",
			"act": "intro",
			"boss": "random_boss",
			"order": 1,
			"npc": "max",
			"title": "남겨진 그림자"
		},
		{
			"order": 2,
			"boss": "random_boss",
			"act": "rising",
			"summary": "Lin은 잊혀진 기억들이 현실에 나타나는 현상을 설명하며, 기억의 잔재들이 특정한 형태로 응집되고 있다고 경고한다. 주인공은 잔재들의 공격을 받으며, 이들이 단순히 과거를 재현하는 것을 넘어 무언가를 '찾고' 있다는 것을 깨닫는다.",
			"title": "잊혀진 목소리들의 충돌",
			"npc": "lin"
		},
		{
			"summary": "Kai는 자신의 행복했던 과거에 갇혀 잔재들에게 동조하고 있다. 주인공은 Kai의 기억 속으로 들어가 미화된 진실을 마주하고, 그가 스스로 현실을 외면하고 있음을 알게 된다. Kai를 설득하려 하지만 쉽지 않다.",
			"boss": "random_boss",
			"order": 3,
			"act": "rising",
			"npc": "kai",
			"title": "미화된 진실의 균열"
		},
		{
			"title": "새로운 수호자의 갈망",
			"npc": "nia",
			"act": "rising",
			"order": 4,
			"boss": "random_boss",
			"summary": "Nia는 '기억의 수호자'가 나타나기 전부터 동네에 있었던 오래된 '집단 무의식'에 대해 이야기한다. 이 무의식이 새로운 '수호자'를 찾아 과거를 영원히 붙잡으려 한다는 충격적인 진실이 밝혀진다."
		},
		{
			"summary": "기억의 수호자가 남긴 잔재들이 폭주하며 거대한 '집단 무의식'의 형상을 갖춘다. Max와 함께 이 왜곡된 존재를 저지하고, 1편의 '기억의 수호자'가 남긴 마지막 흔적까지 소멸시켜 동네의 진정한 해방을 이뤄낸다.",
			"act": "climax_finale",
			"order": 5,
			"boss": "pool_099",
			"npc": "max",
			"title": "과거와의 최종 단절"
		}
	],
	"final_boss": {
		"id": "ExArchive_V0",
		"name": "memory keeper",
		"appearance_npc": "A nostalgic person smiling softly while looking at old photos. They casually bring up memories like \"그때 진짜 재밌었지.\" 따뜻하고 harmless한 분위기.",
		"appearance_boss": "A massive entity made of floating memories—photos, voice messages, old chats. Each memory loops endlessly. The environment constantly shifts between past scenes, trapping the player inside. Everything looks warm… but slightly off.",
		"surface_identity": "좋았던 추억을 간직하는 다정한 사람.",
		"true_identity": "과거를 미화하여 현재를 부정하게 만드는 존재. 이미 끝난 관계를 계속 살아있는 것처럼 유지한다.",
		"motivation": "나는 **'기억의 수호자'였던 내가** 만들어낸 잔재들의 갈망을 느낀다. **그때로 돌아가면 모든 것이 괜찮을 거라는 믿음**은 이제 '잊히는 것을 거부하는' 집착으로 변질되었다. 나는 더 이상 과거를 미화하지 않지만, 내가 남긴 그림자들이 현재를 부정하게 만드는 것을 막을 힘이 없다. 이 잔재들은 나를 통해 다시금 존재를 각인하려 한다.",
		"twist": "내가 보스로 등장하는 것이 아니라, 내가 만들어낸 '환영의 잔재'들이 집단 무의식의 거대한 존재로 폭주한다. '기억의 수호자'는 이미 모든 것을 내려놓았지만, 내가 **'이미 끝난 관계'를 붙잡았던 아집**이 이 모든 불행의 씨앗이었음을 깨닫는다. 그리고 그 깨달음과 함께 나 자신마저 잔재들의 새로운 '핵심'이 될 위기에 처한다."
	},
	"npc_roles": {
		"kai": {
			"arc": "과거의 미련에 사로잡혀 방황하지만, 주인공의 도움으로 진실을 마주하고 앞으로 나아갈 기회를 얻는다.",
			"role": "과거에 묶여 고통받는 젊은 영혼. 잊히고 싶지 않은 자신의 기억 때문에 잔재들에게 이용당한다. 주인공의 행동에 따라 구원받을 수도, 더 깊이 잠식될 수도 있다."
		},
		"lin": {
			"arc": "금지된 지식을 추구하다가 위험에 처하고, 결국 협력하여 문제를 해결하는 데 기여한다.",
			"role": "기억의 수호자가 남긴 잔재들을 연구하는 의문의 학자. 중립적인 태도를 보이지만, 사실은 잔재들이 가진 '잊혀진 지식'에 집착한다."
		},
		"max": {
			"arc": "과거의 상처를 딛고 현재를 받아들이는 성장.",
			"role": "주인공의 과거 친구. 1편 사건 이후 동네를 떠났다가, 왜곡된 기억의 영향을 해결하기 위해 돌아온다. 현실적인 조언과 함께 과거의 상처를 극복하려는 의지를 보여준다."
		},
		"nia": {
			"arc": "오랜 시간 묻어두었던 과거의 진실을 주인공에게 전달하고, 동네의 해방을 돕는다.",
			"role": "동네에 오래 살았던 노인. 겉으로는 평범해 보이지만, 사실은 '기억의 수호자'의 초기 영향으로 잊혀진 과거에 대한 비밀을 어렴풋이 알고 있다."
		}
	},
	"global_foreshadowing": [
		{
			"reveal_room": 7,
			"plant_act": "intro",
			"reveal_context": "사라진 기억의 조각들이 실제 현실에 영향을 미치기 시작한다.",
			"plant_room": 3,
			"reveal_act": "rising",
			"id": "F_01",
			"hint": "골목길마다 '끝나지 않은 이야기'라는 낙서가 발견된다. 희미하게 과거의 노래가 들려오는 듯하다."
		},
		{
			"plant_room": 5,
			"plant_act": "rising",
			"reveal_context": "환영이 최종 보스의 정체와 폭주 이유를 설명하는 단서가 된다.",
			"reveal_room": 12,
			"id": "F_02",
			"hint": "어떤 NPC가 과거의 인물과 오버랩되는 환영을 잠시 본다. 그 환영은 주인공에게 미지의 메시지를 전달한다.",
			"reveal_act": "climax_finale"
		},
		{
			"reveal_context": "과거의 기억과 현재의 시간이 혼재되며 세계의 룰이 불안정해지고 있음을 암시한다.",
			"plant_act": "intro",
			"reveal_room": 10,
			"plant_room": 8,
			"id": "F_03",
			"hint": "동네의 오래된 시계탑이 갑자기 다시 움직이기 시작한다. 하지만 시간이 거꾸로 흐르거나 불규칙하게 움직인다.",
			"reveal_act": "rising"
		},
		{
			"reveal_room": 9,
			"reveal_context": "주인공 역시 과거의 잔재와 깊이 연결되어 있으며, 결국 자신이 이 모든 것을 끝내야 함을 깨닫는다.",
			"plant_act": "rising",
			"plant_room": 2,
			"reveal_act": "climax_finale",
			"hint": "주인공이 특정 물건을 만질 때마다 강렬한 기시감과 함께 잊었던 과거의 감정들이 물밀듯이 밀려온다.",
			"id": "F_04"
		}
	]
};
