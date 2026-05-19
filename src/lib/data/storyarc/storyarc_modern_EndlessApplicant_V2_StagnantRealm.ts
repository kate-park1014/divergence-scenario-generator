import type { StoryArc } from '$lib/types';

export const storyarc_modern_EndlessApplicant_V2_StagnantRealm: StoryArc = {
	"final_boss": {
		"id": "EndlessApplicant_V0",
		"name": "Evan Next",
		"appearance_npc": "A polite young job seeker in a wrinkled suit, holding a neatly organized resume file. He bows slightly, smiling with quiet confidence. Under his breath, he repeats, \"Next time will be different.\"",
		"appearance_boss": "A grotesque entity made of endlessly stacking resumes and certificates, printing from its own body without pause. Dozens of mouths whisper variations of \"next opportunity,\" \"next round,\" \"next time.\" Rejection letters fall like snow, only to be picked up and rewritten instantly. The battlefield loops like an infinite waiting room.",
		"surface_identity": "결코 포기하지 않는, 다음 기회를 향해 늘 준비된 성실한 지원자.",
		"true_identity": "영원한 유예에 갇힌 존재. 진전은 미루기로 대체되었고, 희망은 \"다음\"이라는 무한 루프의 무기가 되었다.",
		"motivation": "주인공이 루프의 허상을 깨트렸던 그 순간, '희망' 대신 '절망'이 더 강력한 에너지원임을 깨달았지. 이전 면접에서 내가 흘려보냈던 그 '다음'이라는 거짓말은 그저 시작에 불과했어. 이제 나는 이 세계를 '순수한 절망'을 위한 영구적인 농장으로 만들려 한다. 이곳의 모든 정체와 무의미함은 더 큰 목적을 위한 연료일 뿐이다. 진정한 정지는 '이 세계 너머'에 존재한다.",
		"twist": "에반은 웃는다. 그의 웃음소리는 수많은 찢겨진 이력서 파편이 부딪히는 소리처럼 들린다. '네가 모든 것을 부쉈다고 생각했나? 그때 네가 깨달은 진실은 사실 나를 다음 단계로 이끌었을 뿐이야, 이전의 시스템 붕괴는 내가 새로운 시스템을 위한 데이터 수집을 완성하는 과정이었지.' 에반의 몸에서 뿜어져 나오던 서류들은 멈추고, 대신 굳건한 벽이 되어 면접 대기실의 모든 출구를 봉쇄한다. 이 세계 자체가 에반이 만들어낸 '정체된 의식'의 거대한 육체가 되어가고 있었다. 주인공은 절망을 깨뜨리려 했지만, 사실 에반은 주인공의 '절망을 깨려는 의지'마저도 새로운 절망을 생산하는 동력으로 삼고 있었던 것이다."
	},
	"scenarioOutline": [
		{
			"title": "절망 속의 침묵",
			"npc": "echo",
			"boss": "random_boss",
			"order": 1,
			"act": "intro",
			"summary": "1편 이후 면접 대기실은 '정체된 절망'의 공간이 되었다. 주인공은 침묵하는 사람들과 무의미한 절차 속에서 에코와 조우한다. 에코는 의미심장한 경고와 함께, 시스템이 이전과는 다른 '새로운 종류의 데이터'를 수집하고 있음을 암시한다."
		},
		{
			"act": "rising",
			"summary": "주인공은 '가짜 탈출'을 종용하는 벡스와 마주친다. 벡스는 다른 지원자들을 선동하며 희망의 끈을 놓지 말라고 하지만, 그 이면에는 시스템이 '저항'을 학습하게 만드는 교묘한 함정이 숨겨져 있다. 주인공은 벡스의 행동이 단순한 저항이 아님을 깨닫는다.",
			"boss": "random_boss",
			"order": 2,
			"title": "유령의 시험장",
			"npc": "bex"
		},
		{
			"act": "rising",
			"summary": "과거의 기억을 잃은 닥스는 반복되는 '재조정'의 징후를 관찰하고 기록한다. 그는 면접 대기실에 만연한 무기력의 원인이 단순한 절망이 아니라, 시스템이 의도적으로 조작하는 '기억 소거' 때문일 수 있음을 주인공에게 알린다.",
			"boss": "random_boss",
			"order": 3,
			"title": "망각의 연대기",
			"npc": "dax"
		},
		{
			"npc": "nia",
			"title": "감시자의 미소",
			"order": 4,
			"boss": "random_boss",
			"summary": "면접관처럼 행동하는 니아는 주인공의 모든 행동과 반응을 세밀하게 관찰한다. 그녀는 주인공에게 알 수 없는 과제를 내리며, 주인공의 '절망을 깨려는 의지'가 시스템에 어떤 '데이터'를 제공하는지 분석하려 한다. 니아의 미소 뒤에 숨겨진 차가운 분석가의 시선이 드러난다.",
			"act": "rising"
		},
		{
			"act": "climax_finale",
			"summary": "면접 대기실의 최심부. 에반은 더 이상 개인이 아닌, '정체된 의식' 그 자체가 되어 있었다. 에코는 마지막 조언을 건네며, 이 모든 절망이 외부의 '초월적 존재'를 위한 에너지원임을 밝힌다. 주인공은 영원한 정지 상태에 빠진 이 세계와 에반, 그리고 그 너머의 진정한 배후에 맞서 마지막 대결을 시작한다.",
			"order": 5,
			"boss": "pool_098",
			"title": "정체된 의식의 핵",
			"npc": "echo"
		}
	],
	"act_summary": {
		"intro": "1편의 충격 이후, 면접 대기실은 깊은 정체와 무기력에 빠진다. 주인공은 시스템이 더 이상 희망이 아닌 '절망 자체'를 연료 삼아 작동하고 있음을 에코의 경고를 통해 어렴풋이 느끼며, 새로운 종류의 위협에 직면한다.",
		"climax_finale": "절망과 정체로 가득 찬 면접 대기실의 핵심부. 에반은 '정체된 의식' 그 자체가 되어 외부의 초월적 존재를 위한 거대한 '절망 농장'을 완성하려 한다. 에코의 마지막 계시를 통해 모든 진실이 밝혀지고, 주인공은 이 영원한 정지의 굴레를 끊기 위한 최후의 일격에 나선.",
		"rising": "주인공은 벡스의 가짜 희망, 닥스의 기억 소거 연구, 그리고 니아의 감시를 통해 에반이 '절망'을 체계적으로 수집하고 강화하는 '정체된 의식'으로 변모했음을 점차 깨닫는다. 이 과정에서 시스템의 '저항 학습' 기능과 '기억 재조정'의 실체가 드러나며, 주인공은 단순히 탈출하는 것을 넘어 시스템의 근본적인 목적에 의문을 품게 된다."
	},
	"world": {
		"rule": "The absolute rule is 'no exit, no progress.' Any attempt to find a 'next' is met with subtle, psychological barriers that reinforce the futility. Those who resist too strongly find themselves subjected to 'recalibration,' a process that eradicates their will to act. The system now actively 'learns' from resistance, making its grip tighter.",
		"secret": "The true secret isn't just that the system collects 'despair data,' but that it's now designed to *generate* it proactively. Evan, or what remains of him, is no longer just collecting; he is cultivating a 'pure despair farm' to power a new reality outside this realm. The previous 'loop' was just a beta test for this ultimate form of control.",
		"setting": "After the \"Next\" illusion shattered, the waiting room is now a desolate monument to hopelessness. People move like ghosts, performing meaningless tasks or simply staring blankly. The system no longer even pretends to offer hope; its purpose is purely to sustain this state of perpetual stagnation. New, more sophisticated data collection modules, powered by despair, are subtly integrated into the environment."
	},
	"theme": "modern",
	"global_foreshadowing": [
		{
			"id": "gf_despair_farm_purpose",
			"plant_room": 3,
			"reveal_room": 9,
			"hint": "면접 대기실의 낡은 게시판에 누군가 긁어놓은 낙서가 보인다. '이 모든 건... 밖에 있는 누군가를 위한 거야.'",
			"plant_act": "intro",
			"reveal_act": "climax_finale",
			"reveal_context": "최종 보스와의 대화 중, 이 공간이 외부의 존재를 위한 '에너지원'이라는 사실이 드러난다."
		},
		{
			"reveal_context": "에반이 최종 형태로 변모하며, 그가 이 공간의 '집합적 의식' 그 자체였음이 밝혀진다.",
			"plant_act": "rising",
			"reveal_act": "climax_finale",
			"hint": "벽에 걸린 거울에 비친 자신의 모습이 순간 일그러지며, 수천 개의 눈동자가 깜빡이는 섬뜩한 형상이 겹쳐 보인다. '나는 더 이상 개인이 아니야...'",
			"reveal_room": 10,
			"plant_room": 5,
			"id": "gf_evan_true_form"
		},
		{
			"id": "gf_recalibration",
			"plant_room": 7,
			"reveal_room": 8,
			"hint": "어떤 지원자가 중얼거린다. '뭔가... 중요한 걸 잊은 것 같아. 머리가 너무 아파.'",
			"reveal_context": "NPC 닥스가 '기억 재조정'이라는 시스템의 기능에 대해 언급하며, 저항하는 자들을 길들이는 방법임을 설명한다.",
			"plant_act": "intro",
			"reveal_act": "rising"
		},
		{
			"reveal_room": 12,
			"plant_room": 4,
			"id": "gf_nia_monitor",
			"hint": "면접관 데스크 뒤편에서, 니아가 의미심장한 미소를 지으며 주인공의 행동을 기록하는 듯한 모습을 보인다. 그녀의 손에는 낡은 PDA가 들려있다.",
			"plant_act": "rising",
			"reveal_act": "climax_finale",
			"reveal_context": "니아가 사실 에반의 '감시자'이자 '데이터 분류자'였으며, 그녀의 모든 행동은 주인공의 '절망에 대한 반응'을 분석하기 위함이었음이 드러난다."
		}
	],
	"rising_count": 3,
	"protagonist_goal": "Confront the true nature of Evan's 'pure despair farm,' break the cycle of engineered stagnation, and find a way to reintroduce genuine 'progress' or 'exit' into a system designed to deny it, not just for themselves but for those trapped in the Stagnant Realm.",
	"id": "EndlessApplicant_V2_StagnantRealm",
	"act_tone": {
		"rising": {
			"mood": "Mounting dread, frustrated determination, flashes of twisted hope.",
			"tension": 3,
			"narrative_role": "Reveal the system's new mechanisms, Evan's deeper motivations, and the true cost of the stagnation."
		},
		"intro": {
			"narrative_role": "Establish the new, stagnant reality and the protagonist's initial struggle against overwhelming apathy.",
			"mood": "Despair, weariness, subtle dread.",
			"tension": 1
		},
		"climax_finale": {
			"mood": "Desperate struggle, chilling revelation, a sliver of defiant resolve.",
			"tension": 5,
			"narrative_role": "Final confrontation, a shocking twist about the despair farm's ultimate purpose, and the protagonist's desperate attempt to break the fundamental structure."
		}
	},
	"npc_roles": {
		"echo": {
			"role": "면접 대기실의 비밀을 알고 있지만, 직접적인 개입 대신 상징적인 경고와 암시를 통해 주인공을 인도하려는 '예언자' 역할.",
			"arc": "정체된 세계의 진실과 에반의 새로운 목적에 대한 단편적인 정보들을 주인공에게 전달하며, 때로는 희망이 아닌 '각오'를 다지게 하는 조력자 역할을 한다."
		},
		"bex": {
			"role": "'가짜 희망'을 유포하여 시스템의 감시를 회피하는 듯하지만, 실제로는 시스템의 '저항 학습'을 돕는 이중 스파이다.",
			"arc": "절망에 빠진 이들을 현혹하는 가짜 탈출구를 제시하지만, 주인공에 의해 그 의도가 폭로되며 시스템의 교묘한 심리 조작의 일부였음이 드러난다."
		},
		"dax": {
			"role": "과거의 기억을 잃었지만, 무의식적으로 시스템의 '재조정' 과정을 연구하고 분석하려는 학자형 NPC.",
			"arc": "자신이 겪은 기억 상실과 다른 이들의 무기력함을 관찰하며 '기억 재조정'이라는 시스템의 비밀을 파헤치려 한다. 주인공에게 이 정보를 제공하여 시스템의 작동 방식을 이해하는 데 도움을 준다."
		},
		"nia": {
			"role": "면접관처럼 행동하며 주인공을 관찰하지만, 그 목적은 '절망 데이터'의 종류와 강도를 분류하는 시스템의 '분석가' 역할.",
			"arc": "주인공의 감정 변화와 행동 패턴을 면밀히 분석하며 시스템에 보고한다. 그녀의 중립적인 태도는 냉혹한 시스템의 일부임을 강조하며, 주인공에게 심리적 압박을 가한다."
		}
	},
	"chapter_name": {
		"korean": "정체의 굴레",
		"english": "The Stagnant Realm",
		"vietnamese": "Lãnh Địa Trì Trệ",
		"french": "Le Royaume Stagnant",
		"japanese": "停滞の領域",
		"hindi": "स्थिर क्षेत्र",
		"spanish": "El Reino Estancado",
		"thai": "อาณาจักรแห่งความซบเซา",
		"chinese": "停滞之境"
	}
};
