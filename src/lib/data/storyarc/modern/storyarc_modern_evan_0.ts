import type { StoryArc } from '$lib/types';

export const storyarc_modern_evan_0: StoryArc = {
	"id": "modern_evan_0",
	"level": 0,
	"chapter_name": {
		"hindi": "अनंत प्रतीक्षा कक्ष",
		"english": "The Endless Waiting Room",
		"chinese": "无尽的等候室",
		"vietnamese": "Phòng Chờ Vô Tận",
		"japanese": "終わりのない待合室",
		"spanish": "La Sala de Espera Infinita",
		"korean": "끝없는 대기실",
		"french": "La Salle d'Attente Infinie",
		"thai": "ห้องรอคอยที่ไม่มีที่สิ้นสุด"
	},
	"theme": "modern",
	"rising_count": 3,
	"world": {
		"rule": "오직 '준비'와 '다음 기회'만이 존재한다. 모든 과정은 무한히 반복되며, 진정한 '시작'이나 '끝'은 도달할 수 없다.",
		"setting": "끝없는 대기실, 반복되는 면접장과 심사 공간으로 이루어진 세계. 모든 것이 '다음'을 향해 준비 중이며, 정체된 듯한 묘한 분위기가 흐른다.",
		"secret": "이 세계는 사실 '다음'이라는 명목하에 모든 것을 영원히 유예시키는 거대한 순환 고리이며, 진정한 진전은 존재하지 않는다."
	},
	"protagonist_goal": "이 지루하고 반복되는 대기실을 벗어나 다음 단계로 진출하여 마침내 합격하거나 새로운 시작을 하는 것.",
	"act_tone": {
		"intro": {
			"mood": "기대와 불안",
			"narrative_role": "세계와 주인공의 상황 소개",
			"tension": 1
		},
		"rising": {
			"tension": 3,
			"mood": "노력과 혼란",
			"narrative_role": "반복되는 시련과 미묘한 이상함에 대한 인지"
		},
		"climax_finale": {
			"narrative_role": "결말의 반전 암시 및 다음 챕터의 갈등 고조",
			"mood": "불안정한 희망",
			"tension": 5
		}
	},
	"final_boss": {
		"id": "EndlessApplicant_V0",
		"motivation": "다른 이들도 자신처럼 '준비'와 '기다림'의 미덕을 통해 '다음'을 향해 나아가도록 돕는 것이라고 스스로 믿고 있다.",
		"surface_identity": "결코 포기하지 않는, 다음 기회를 향해 늘 준비된 성실한 지원자.",
		"name": "Evan Next",
		"true_identity": "어쩌면 그는 '다음 기회'라는 말에 자신조차 속아 영원한 유예에 갇힌 존재일지도 모른다.",
		"appearance": "An eerie entity composed of countless stacked resumes and certificates, continuously printing new documents from its own body. Dozens of mouths whisper 'next opportunity,' 'next round,' 'next time.' Rejection letters fall like snow, only to be immediately picked up and rewritten. The battlefield is an endlessly repeating waiting room, yet slightly more pristine and hopeful at the start.",
		"twist": "에반이 만족스러운 미소를 지으며 '거의 다 왔어요'라고 말한다. 하지만 그 말을 듣는 순간, 주인공은 문득 이 모든 과정이 기시감처럼 느껴진다."
	},
	"global_foreshadowing": [
		{
			"id": "evan_resume_repetition",
			"reveal_context": "주인공은 에반의 이력서를 자세히 보며 그의 열정에 감탄하지만, 문득 모든 내용이 미묘하게 비슷한 패턴으로 반복되고 있음을 깨닫는다.",
			"plant_act": "intro",
			"hint": "에반의 이력서 내용이 매번 미묘하게 비슷하다는 점.",
			"plant_room": 1,
			"reveal_act": "climax_finale",
			"reveal_room": 5
		},
		{
			"plant_room": 2,
			"reveal_act": "climax_finale",
			"reveal_room": 4,
			"hint": "'다음 기회'라는 말이 반복되지만 실질적인 진전은 없다는 묘사.",
			"id": "next_opportunity_emptiness",
			"reveal_context": "반복되는 면접과정에서 에반과 주변인들이 '다음 기회'를 계속 언급하지만, 주인공은 어쩐지 제자리걸음만 하고 있다는 느낌을 지울 수 없다.",
			"plant_act": "rising"
		},
		{
			"hint": "대기실의 풍경이 미묘하게 비현실적으로 반복되는 느낌.",
			"id": "waiting_room_unreality",
			"reveal_context": "주인공은 대기실의 특정 장식이나 인물들의 배치가 매번 똑같거나 미묘하게 변한다는 것을 인지하고 소름 끼치는 느낌을 받는다.",
			"plant_act": "rising",
			"plant_room": 3,
			"reveal_act": "climax_finale",
			"reveal_room": 2
		},
		{
			"hint": "에반의 긍정적인 태도 속에 드러나는 공허함.",
			"plant_act": "intro",
			"reveal_context": "에반의 한없이 긍정적인 미소에서 주인공은 순간적으로 깊은 공허함을 엿본다.",
			"id": "evan_smile_hollowness",
			"plant_room": 2,
			"reveal_room": 3,
			"reveal_act": "climax_finale"
		}
	],
	"npc_roles": {
		"bex": {
			"role": "동료 지원자로 등장, 에반의 긍정적인 면에 감탄하며 함께 준비하는 모습을 보임.",
			"arc": "1편: 에반의 긍정적인 면에 감탄하며 함께 준비하는 모습을 보임. (시리즈 연결: 2편에서 자신도 루프에 갇혔음을 깨닫고 절망하며 후회함)"
		},
		"kai": {
			"role": "면접관으로 등장, 에반의 '성실함'을 칭찬하며 다음 기회를 계속 제공하는 역할.",
			"arc": "1편: 에반의 '성실함'을 칭찬하며 다음 기회를 계속 제공하는 역할. (시리즈 연결: 2편에서 에반을 루프에 가둔 행위를 깨닫고 충격받음)"
		},
		"nia": {
			"role": "합격자 또는 선배로 등장, 에반에게 격려와 조언을 주지만, 에반이 끝없이 '준비'만 하는 것에 의아함을 느낌.",
			"arc": "1편: 에반에게 격려와 조언을 주지만, 에반이 끝없이 '준비'만 하는 것에 의아함을 느낌. (시리즈 연결: 2편에서 에반의 '다음'이 속박임을 직시하고 플레이어와 함께 루프 탈출을 모색함)"
		}
	},
	"scenarioOutline": [
		{
			"act": "intro",
			"boss": "random_boss",
			"title": "첫 만남, 끝없는 대기실의 시작",
			"summary": "주인공이 '다음 기회'를 향한 설렘을 안고 대기실에 들어선다. 면접관 카이가 에반 넥스트를 '성실한 지원자'로 소개하며 그의 이력서 내용에 대해 칭찬한다. 에반은 밝게 웃으며 '늘 준비되어 있다'고 말하지만, 주인공은 그의 이력서 내용이 왠지 모르게 익숙하다는 느낌을 받는다.",
			"npc": "kai",
			"order": 1
		},
		{
			"npc": "bex",
			"boss": "random_boss",
			"title": "반복되는 준비, 엇갈리는 조언",
			"summary": "주인공은 동료 지원자 벡스와 함께 다음 라운드를 준비한다. 벡스는 에반의 긍정적인 태도에 감탄하며 함께 스터디하자고 제안한다. 하지만 주인공은 계속되는 준비 과정 속에서 미묘한 기시감과 함께 '다음 기회'라는 말이 공허하게 들리기 시작한다.",
			"act": "rising",
			"order": 2
		},
		{
			"order": 3,
			"act": "rising",
			"npc": "nia",
			"title": "선배의 의문, 대기실의 비현실성",
			"summary": "합격자 선배 니아가 에반에게 격려와 조언을 건네지만, 에반이 끝없이 '준비'만 하는 모습에 의아함을 표한다. 니아는 문득 대기실의 특정 장식이 매번 같은 자리에 놓여있는 것에 대해 '이상하다'는 혼잣말을 한다. 주인공은 대기실의 풍경이 미묘하게 비현실적으로 반복되는 것을 깨닫는다.",
			"boss": "random_boss"
		},
		{
			"npc": "bex",
			"title": "에반의 미소, 공허함의 그림자",
			"summary": "주인공은 벡스와 함께 다시 한번 다음 라운드에 도전한다. 에반은 여전히 밝은 미소를 지으며 '거의 다 왔어요'라고 말한다. 주인공은 그의 변함없는 긍정적인 모습에 감탄하지만, 찰나의 순간 그의 눈빛에서 깊은 공허함을 엿본다. 면접관 카이가 다시 나타나 이번에도 '다음 기회'를 언급한다.",
			"boss": "random_boss",
			"act": "rising",
			"order": 4
		},
		{
			"order": 5,
			"title": "균열의 시작, 끝나지 않는 '다음'",
			"summary": "주인공은 최종 라운드에 도달했다고 생각한다. 면접관 카이가 에반을 칭찬하며 '최종 면접' 문을 열어준다. 에반은 '거의 다 왔어요. 이번엔 진짜로 느껴져요.'라며 기쁨을 표현한다. 하지만 문이 열린 곳은 또 다른 '다음 라운드' 문으로 이어진다. 주인공은 에반의 이력서가 매번 미묘하게 반복되는 패턴으로 채워져 있음을 다시금 확인하고, 이 '다음'이라는 순환에 미묘한 균열이 생기는 것을 느낀다. 에반은 여전히 희망에 차 있지만, 주인공은 이 모든 것이 영원한 유예에 갇힌 반복임을 어렴풋이 암시받는다.",
			"boss": "pool_098",
			"npc": "kai",
			"act": "climax_finale"
		}
	],
	"act_summary": {
		"rising": "동료 지원자 벡스와 선배 니아를 만나며 반복되는 준비 과정 속에서 미묘한 기시감과 함께 '다음 기회'라는 말이 공허하게 들리기 시작한다. 대기실 환경의 비현실적인 반복과 에반의 긍정적인 미소 속에 숨겨진 공허함을 인지하며 불안감이 고조된다.",
		"climax_finale": "주인공은 최종 라운드에 도달했다고 생각하지만, 면접관 카이가 열어준 문은 또 다른 '다음 라운드'로 이어진다. 에반은 여전히 희망적이지만, 주인공은 이 모든 것이 끝없는 반복임을 어렴풋이 암시받으며, '다음'이라는 순환의 균열을 느낀다.",
		"intro": "주인공이 '다음 기회'가 가득한 끝없는 대기실에 들어서고, 성실한 지원자 에반 넥스트와 면접관 카이를 만난다. 새로운 시작에 대한 기대와 함께 에반의 이력서에서 미묘한 반복을 느끼기 시작한다."
	}
};
