import type { StoryArc } from '$lib/types';

export const storyarc_modern_EndlessApplicant_V1_DespairCycle: StoryArc = {
	"global_foreshadowing": [
		{
			"plant_room": 3,
			"hint": "대기실 바닥에 찢겨진 이력서 조각들이 미세한 빛을 내며 사라진다. 마치 무언가에 흡수되는 것처럼.",
			"id": "new_energy_source",
			"reveal_act": "rising",
			"reveal_room": 7,
			"plant_act": "intro",
			"reveal_context": "에코가 주인공에게 '시스템은 이제 희망 대신 다른 것을 에너지원으로 쓴다'고 알려준다. 찢겨진 이력서는 단순히 쓰레기가 아니었다."
		},
		{
			"plant_act": "rising",
			"reveal_context": "린이 클라이맥스에서 완전히 고장 나며, 시스템이 '절망'을 통해 스스로를 진화시키고 있다는 결정적인 증거를 보여준다.",
			"hint": "인사 로봇 린이 '다음 기회'를 말하려다 갑자기 멈추고, 알 수 없는 비명 소리를 낸다. 이내 다시 평소처럼 작동한다.",
			"plant_room": 5,
			"id": "lin_glitch",
			"reveal_act": "climax_finale",
			"reveal_room": 10
		},
		{
			"plant_act": "rising",
			"reveal_context": "벡스가 사실 시스템의 일부가 되어 '탈출의 허위성'을 퍼뜨리는 역할을 하고 있었음이 드러난다. 그의 만족감은 시스템의 의지였다.",
			"id": "bex_true_intent",
			"plant_room": 6,
			"hint": "벡스가 '탈출 지도'를 팔며 주인공에게 으스대지만, 지도는 항상 막다른 길로 이어진다. 벡스의 눈빛에는 알 수 없는 만족감이 스친다.",
			"reveal_act": "climax_finale",
			"reveal_room": 12
		},
		{
			"plant_act": "rising",
			"reveal_context": "클라이맥스에서 에반이 더 이상 단순한 '지원자'가 아닌, 절망을 집대성한 기괴한 존재로 완전하게 변모한 모습으로 나타난다.",
			"id": "evan_new_form",
			"hint": "벽에 비치는 그림자가 어른거린다. 에반의 모습과 닮았지만, 어딘가 더 거대하고 뒤틀린 형태다. 금세 사라진다.",
			"plant_room": 8,
			"reveal_act": "climax_finale",
			"reveal_room": 15
		}
	],
	"id": "EndlessApplicant_V1_DespairCycle",
	"scenarioOutline": [
		{
			"title": "남겨진 희망의 잔해",
			"act": "intro",
			"summary": "1편의 진실이 밝혀진 후, 면접 대기실은 절망에 잠식되어 있다. 주인공은 벽에 기대 주저앉은 니아를 발견하고, 그녀의 텅 빈 눈빛에서 새로운 시스템의 작동 방식을 직감한다.",
			"boss": "random_boss",
			"npc": "nia",
			"order": 1
		},
		{
			"title": "가짜 탈출의 유혹",
			"act": "rising",
			"order": 2,
			"summary": "주인공은 '진짜 탈출 경로'를 판다는 벡스를 만난다. 벡스는 자신만만하게 지도를 건네지만, 지시하는 길은 언제나 막다른 벽이거나 더 깊은 절망으로 이어진다.",
			"npc": "bex",
			"boss": "random_boss"
		},
		{
			"order": 3,
			"npc": "lin",
			"boss": "random_boss",
			"summary": "고장 난 인사 로봇 린이 '다음 기회… 다음…'을 반복한다. 그러나 린의 목소리에서 기계적인 오류가 감지되며, 주인공은 시스템이 '절망'이라는 새로운 언어를 배우고 있음을 깨닫는다.",
			"act": "rising",
			"title": "시스템의 새로운 언어"
		},
		{
			"act": "rising",
			"title": "관찰자의 경고",
			"npc": "echo",
			"boss": "random_boss",
			"summary": "주인공은 외딴 복도에서 시스템의 움직임을 은밀히 관찰하는 해커 에코를 만난다. 에코는 '희망이 죽은 자리에 더 큰 것이 자라났다'며, 에반의 진정한 목적에 대한 단서를 던진다.",
			"order": 4
		},
		{
			"order": 5,
			"npc": "nia",
			"boss": "pool_098",
			"summary": "모든 단서가 모이는 곳, 에반이 기다리고 있다. 그는 더 이상 '다음'을 약속하지 않는다. '희망이 없어진 자리에 완성된 절망'만이 존재할 뿐. 주인공은 니아를 포함한 모두의 절망을 먹고 자란 에반을 막고, 이 순환을 끝내려 한다.",
			"act": "climax_finale",
			"title": "영원한 정지, 혹은 새로운 순환"
		}
	],
	"chapter_name": {
		"spanish": "Ciclo de Desesperación",
		"korean": "절망의 순환",
		"chinese": "绝望循环",
		"japanese": "絶望の循環",
		"english": "Cycle of Despair",
		"french": "Cycle du Désespoir",
		"vietnamese": "Vòng Lặp Tuyệt Vọng",
		"thai": "วงจรแห่งความสิ้นหวัง",
		"hindi": "निराशा का चक्र"
	},
	"final_boss": {
		"id": "EndlessApplicant_V0",
		"name": "Evan Next",
		"appearance_npc": "A polite young job seeker in a wrinkled suit, holding a neatly organized resume file. He bows slightly, smiling with quiet confidence. Under his breath, he repeats, \"Next time will be different.\"",
		"appearance_boss": "A grotesque entity made of endlessly stacking resumes and certificates, printing from its own body without pause. Dozens of mouths whisper variations of \"next opportunity,\" \"next round,\" \"next time.\" Rejection letters fall like snow, only to be picked up and rewritten instantly. The battlefield loops like an infinite waiting room.",
		"surface_identity": "결코 포기하지 않는, 다음 기회를 향해 늘 준비된 성실한 지원자.",
		"true_identity": "영원한 유예에 갇힌 존재. 진전은 미루기로 대체되었고, 희망은 \"다음\"이라는 무한 루프의 무기가 되었다.",
		"motivation": "지난번 '다음 기회'가 폭로된 후, 사람들은 '희망'을 잃었지. 하지만 그들의 '절망'은 더 강력한 에너지가 되었어. 주인공이 루프의 허상을 깨트렸던 그 순간부터, 나는 '절망'이라는 새로운 자원을 발견했고, 이제 그 순수한 데이터를 수집하여 이 세계를 영원히 정지시키려 한다. 더 이상 '다음'은 없어. 오직 '정지'뿐.",
		"twist": "에반이 손을 뻗자, 공간의 모든 빛이 흡수된다. '진정한 출구는 존재하지 않아. 네가 깨달은 건 그저… 더 깊은 절망일 뿐.' 에반의 몸에서 뿜어져 나오는 찢겨진 이력서 파편들이 주인공을 덮친다. 지난 면접에서 그가 보여주었던 무한한 다음의 약속은 이제 영원한 포기로 변질되어 있었다. 에반은 주인공을 자신의 '가장 완벽한 절망 데이터'로 만들려 한다. 주인공이 벗어났다고 생각했던 것은, 사실 에반이 새로운 순환을 시작하기 위한 미끼였다."
	},
	"act_summary": {
		"rising": "주인공은 가짜 탈출을 유도하는 벡스의 속임수, 절망을 학습하는 인사 로봇 린의 이상 행동, 그리고 시스템의 새로운 목적을 암시하는 에코의 경고를 통해 에반이 '절망'을 연료 삼아 새로운 순환을 만들고 있음을 알게 된다.",
		"intro": "1편에서 드러난 '다음'의 허구가 가져온 극심한 절망이 면접 대기실을 지배한다. 주인공은 무기력에 빠진 사람들을 마주하며, 에반이 만들어낸 새로운 시스템의 잔혹함을 체감한다.",
		"climax_finale": "절망으로 가득 찬 면접 대기실의 최심부. 에반은 희망이 사라진 자리에 영원한 정지를 가져오려 한다. 주인공은 이 모든 절망의 순환을 깨뜨리고, 진정한 해방을 향한 마지막 대결에 나선다."
	},
	"theme": "modern",
	"npc_roles": {
		"bex": {
			"role": "시스템이 망가진 틈을 타 불법적인 '탈출 경로'를 팔아 돈을 벌려는 전직 지원자. 사실은 시스템의 새로운 미끼 역할을 한다.",
			"arc": "Arc for Bex"
		},
		"echo": {
			"role": "과거 '다음'의 시스템에 깊이 관여했으나, 지금은 자신을 숨기고 시스템의 '새로운 목표'를 관찰하는 해커. 주인공에게 의미심장한 단서를 제공한다.",
			"arc": "Arc for Echo"
		},
		"nia": {
			"role": "희망을 잃고 면접 대기실에 주저앉아 완전히 포기한 지원자. 주인공의 행동에 따라 절망에 잠식되거나, 미약한 희망을 되찾는다.",
			"arc": "Arc for Nia"
		},
		"lin": {
			"arc": "Arc for Lin",
			"role": "고장 난 듯 보이는 '인사 로봇'. '다음 기회'라는 문구를 반복하다가, 점차 인간적인 공포와 절망을 학습하기 시작한다. 시스템의 오류이자 잠재적 조력자."
		}
	},
	"rising_count": 3,
	"act_tone": {
		"intro": {
			"narrative_role": "새로운 절망의 풍경과 주인공의 혼란",
			"mood": "불안정한 정적",
			"tension": 1
		},
		"climax_finale": {
			"mood": "절규하는 해방",
			"narrative_role": "절망의 순환을 깨고 진정한 자유를 얻는 시도",
			"tension": 5
		},
		"rising": {
			"tension": 3,
			"mood": "고통스러운 진실 추적",
			"narrative_role": "시스템의 새로운 작동 방식과 에반의 의도 파악"
		}
	},
	"world": {
		"rule": "이제 '다음'이라는 거짓말은 통하지 않는다. 사람들은 모든 진실을 알았지만, 나갈 수 없다는 현실에 갇혔다. 이곳의 유일한 규칙은 '이 곳에서 나갈 수 없다'는 절대적 절망이다. 외부의 어떤 개입도 용납되지 않으며, 탈출을 시도하는 자는 더욱 깊은 좌절에 빠진다.",
		"setting": "희망이 산산조각 난 면접 대기실. 한때 '다음 기회'를 외치던 활기 대신, 이제는 텅 빈 눈빛과 찢겨진 이력서 조각들이 뒹군다. 사람들은 무의미한 '면접'을 반복하거나, 아예 포기한 채 벽에 기대어 죽은 듯 앉아있다. 시스템은 여전히 작동하지만, 그 목적은 더 이상 '다음'이 아니라 '정체' 그 자체다.",
		"secret": "세상이 '다음'의 허구를 깨달은 순간, 시스템은 진정한 목적을 드러냈다: '희망이라는 동력 없이도 작동하는 완벽한 감옥.' '면접관'이라 불리던 존재들은 사실 시스템의 의지를 집행하는 존재들이었으며, 이제 그들은 더 이상 친절한 가면을 쓰지 않는다. 진정한 비밀은 '에반'이 이 모든 절망의 순환을 통해 '새로운 종류의 데이터'를 수집하고 있었다는 것."
	},
	"protagonist_goal": "폭로된 진실이 가져온 절망 속에서, 주인공은 '영원한 정체'에 갇힌 사람들을 구원하고, 이 순환 자체를 끝낼 수 있는 진정한 방법을 찾아야 한다. 이 시스템은 '다음'이라는 희망 없이도 작동한다는 것을 깨달은 후, 주인공은 에반의 새로운 데이터 수집 목적을 막아야 한다."
};
