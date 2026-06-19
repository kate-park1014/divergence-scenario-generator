import type { StoryArc } from '$lib/types';

export const storyarc_modern_whisper_6: StoryArc = {
	"id": "modern_whisper_6",
	"level": 6,
	"chapter_name": {
		"french": "Ombre dans la Ruelle : Première Rencontre avec Whisper",
		"chinese": "暗巷之影：与低语者的初次邂逅",
		"english": "Shadow in the Alley: First Encounter with Whisper",
		"korean": "어둠 속 그림자: Whisper의 첫 만남",
		"vietnamese": "Bóng Tối Trong Hẻm: Lần Đầu Gặp Gỡ Whisper",
		"spanish": "Sombra en el Callejón: Primer Encuentro con Whisper",
		"hindi": "गली में छाया: फुसफुसाहट से पहली मुलाकात",
		"thai": "เงาในตรอก: การพบกันครั้งแรกกับวิสเปอร์",
		"japanese": "闇の中の影: ウィスパーとの最初の遭遇"
	},
	"theme": "modern",
	"rising_count": 3,
	"world": {
		"setting": "버려지고 잊혀진 도시의 뒷골목, 불길한 기운이 감도는 현대 도시의 어둠 속.",
		"secret": "이 도시의 깊은 어둠 속에는 과거 잔혹했던 갱단의 광기와 고통이 응축되어, 살아있는 악몽의 잔재로 남아있다. 그 존재는 애처로운 모습으로 위장한 채 먹잇감을 기다린다.",
		"rule": "도시의 전설과 잊혀진 비극은 현실의 위협으로 발현된다. 모든 과거의 고통은 흡수되어 새로운 형태로 존재한다."
	},
	"protagonist_goal": "버려진 뒷골목을 맴도는 기묘한 유기견과 주변에서 발생하는 불길한 현상들의 미스터리를 파헤친다.",
	"act_tone": {
		"climax_finale": {
			"tension": 5,
			"mood": "unnerving",
			"narrative_role": "진정한 존재의 첫 대면과 충격적인 암시"
		},
		"rising": {
			"narrative_role": "불안감과 위협의 점진적 고조",
			"tension": 3,
			"mood": "suspenseful"
		},
		"intro": {
			"narrative_role": "미스터리 설정 및 분위기 조성",
			"mood": "eerie",
			"tension": 1
		}
	},
	"final_boss": {
		"name": "Whisper",
		"true_identity": "잊힌 갱단의 광기와 고통이 응축되어 동물 형태를 취한 채, 도시의 어둠 속에서 먹잇감을 기다리는 존재 (암시적)",
		"id": "UrbanHorror_Whisper_V1",
		"motivation": "자신이 흡수한 과거의 공포와 절망을 끊임없이 재현하고, 새로운 희생자들의 비명과 혼란을 통해 그 존재를 더욱 공고히 하려는 뒤틀린 본능 (암시적)",
		"surface_identity": "도시의 버려진 뒷골목을 배회하는, 사람의 온기를 그리워하는 듯한 굶주린 유기견. 가까이 다가가면 으르렁거리지도 않고 그저 멍하니 응시하며, 도움을 바라는 듯한 애처로운 분위기를 풍긴다.",
		"appearance": "낡고 해진 갈색 털은 군데군데 빠져나가 붉은 속살을 드러내며, 마른 몸통에는 앙상한 갈비뼈가 도드라져 보인다. 그 움직임은 뼈가 기괴하게 뒤틀려 있거나, 몸속에서 뭔가가 끊임없이 꿈틀거리는 듯 불쾌하게 어긋나 있어 단순한 유기견이 아님을 암시한다. 녀석의 눈은 검은 구멍처럼 깊고 공허하며, 도움을 바라는 듯 애처로운 시선 뒤에 섬뜩한 무언가를 숨기고 있다. 코에서는 오래된 피와 곰팡내 같은 역한 냄새가 희미하게 풍긴다.",
		"twist": "탐험대가 녀석의 기묘한 변화를 목격하며, 'Whisper'의 애처로운 모습 뒤에 숨겨진 진짜 정체와 관련된 불길한 징조가 처음으로 나타난다. 주변의 그림자들이 마치 살아있는 듯 꿈틀거리고, 잊혀진 갱단의 잔혹한 과거가 스며든 듯한 차가운 기운이 공간을 감돈다. 이는 단순한 유기견이 아닌, 과거의 악몽이 형상화된 존재라는 첫 균열을 암시한다."
	},
	"global_foreshadowing": [
		{
			"id": "Foreshadow_Ch1_1",
			"hint": "Whisper의 몸에서 나는 오래된 피와 곰팡내",
			"reveal_act": "climax_finale",
			"reveal_context": "Whisper의 진정한 정체가 드러나기 직전, 녀석에게서 풍기는 역한 냄새가 더욱 강렬해지며 과거의 비극을 암시한다.",
			"plant_room": 1,
			"plant_act": "intro",
			"reveal_room": 10
		},
		{
			"id": "Foreshadow_Ch1_2",
			"hint": "Whisper의 기괴하고 뒤틀린 움직임",
			"reveal_act": "climax_finale",
			"reveal_context": "Whisper가 공격적으로 변하며, 뼈가 뒤틀리는 듯한 움직임으로 공포를 증폭시키고, 단순한 동물이 아님을 강조한다.",
			"plant_room": 3,
			"plant_act": "rising",
			"reveal_room": 12
		},
		{
			"plant_act": "rising",
			"reveal_room": 15,
			"reveal_act": "climax_finale",
			"reveal_context": "Whisper의 불길한 기운과 '검은 새벽'의 흔적이 기묘하게 연결되어 있음을 깨닫고, 잊혀진 과거의 그림자가 드리워진다.",
			"id": "Foreshadow_Ch1_3",
			"hint": "도시 뒷골목에서 발견되는 '검은 새벽' 갱단의 희미한 흔적",
			"plant_room": 5
		},
		{
			"reveal_room": 18,
			"plant_act": "rising",
			"plant_room": 7,
			"reveal_act": "climax_finale",
			"reveal_context": "악몽 속 비명 소리가 현실 속 Whisper의 기이한 울음소리와 겹쳐지며, 과거의 고통이 현재에 영향을 미치고 있음을 암시하며 혼란을 가중시킨다.",
			"id": "Foreshadow_Ch1_4",
			"hint": "탐험대원들이 꾸는 악몽 속에서 들려오는 정체불명의 비명 소리"
		}
	],
	"npc_roles": {
		"bex": {
			"arc": "유기견 'Whisper'에게 연민을 느끼고 도움을 주려 하지만, 녀석의 기이한 행동에 의문을 품기 시작한다. 1편에서는 Whisper의 애처로운 모습에 이끌리지만, 점차 드러나는 불길한 징조에 혼란을 겪으며 위험에 처하게 된다. 시리즈 전체에서는 Whisper의 진실에 충격을 받고 과거의 고통에 사로잡힌 존재를 마주하며 탐험대를 보호하려 고군분투한다.",
			"role": "감성적인 탐험대원"
		},
		"dax": {
			"role": "냉철한 분석가",
			"arc": "'Whisper' 주변에서 감지되는 비정상적인 기운과 도시의 오래된 범죄 기록 사이의 미묘한 연관성을 의심한다. 1편에서는 Whisper의 불길한 기운을 감지하고 과거 범죄와의 연결고리를 찾으려 한다. 시리즈 전체에서는 Whisper가 과거의 공포를 재현하는 방식과 약점을 파악하고, 팀이 현실로 돌아올 방법을 모색한다."
		},
		"echo": {
			"role": "음향 분석 전문가",
			"arc": "'Whisper' 주변의 소리 없는 공간 왜곡 현상과 알 수 없는 비명 소리를 녹음하며 분석을 시도한다. 1편에서는 Whisper 주변의 기이한 소리를 탐지하고, 그 소리가 과거의 비극과 연관되어 있음을 암시하는 단서를 찾는다. 시리즈 전체에서는 '검은 새벽' 갱단의 마지막 아지트와 관련된 결정적인 단서를 찾아내 'Whisper'의 정체와 능력을 밝히는 데 결정적인 역할을 한다."
		}
	},
	"scenarioOutline": [
		{
			"boss": "random_boss",
			"title": "어둠 속 그림자: 애처로운 눈빛의 유기견",
			"summary": "도시의 버려진 뒷골목을 탐사하던 중, 탐험대는 굶주리고 애처로운 눈빛을 한 유기견 'Whisper'를 발견한다. Bex는 녀석에게 연민을 느끼고 먹이를 주려 다가간다. 이때, Whisper의 몸에서 희미하게 오래된 피와 곰팡내 같은 역한 냄새가 풍겨온다.",
			"order": 1,
			"npc": "bex",
			"act": "intro"
		},
		{
			"order": 2,
			"boss": "random_boss",
			"summary": "Whisper는 Bex가 준 음식을 거부하고 기이하게 뒤틀린 움직임으로 뒷골목을 배회한다. Dax는 녀석 주변에서 감지되는 비정상적인 기운에 촉각을 곤두세우며, 이 동물이 단순한 유기견이 아님을 직감한다.",
			"title": "뒤틀린 움직임: 기묘한 징조의 시작",
			"act": "rising",
			"npc": "dax"
		},
		{
			"npc": "echo",
			"act": "rising",
			"summary": "탐험대는 Whisper를 따라 오래된 건물들 사이를 지나다, 벽에 희미하게 남아있는 '검은 새벽'이라는 갱단의 낙서를 발견한다. Echo는 Whisper 주변의 소리 없는 공간 왜곡 현상과 알 수 없는 비명 소리를 녹음하며 분석을 시도한다.",
			"title": "잊혀진 악명: 도시의 그림자 속 낙서",
			"boss": "random_boss",
			"order": 3
		},
		{
			"act": "rising",
			"npc": "echo",
			"order": 4,
			"title": "밤의 그림자: 악몽 속의 비명",
			"summary": "밤이 깊어지고, 탐험대원들은 각자 기괴한 악몽에 시달린다. 악몽 속에서는 정체불명의 비명 소리가 끊임없이 들려오고, Echo는 잠결에도 그 소리를 녹음하려 애쓴다. Whisper는 멀리서 탐험대를 응시하는 듯한 시선으로 그림자 속에 서 있다.",
			"boss": "random_boss"
		},
		{
			"npc": "bex",
			"act": "climax_finale",
			"title": "첫 균열: 애처로움 뒤의 공포",
			"summary": "Bex가 Whisper에게 다시 다가가려 할 때, 녀석의 애처롭던 눈빛은 순식간에 차가운 공허함으로 변하고, 몸에서 풍기던 역한 냄새가 더욱 강렬해진다. Whisper는 뼈가 뒤틀리는 듯한 기괴한 움직임으로 뒷걸음질 치며 사라지는 듯하더니, 탐험대 주변의 그림자들이 마치 살아있는 것처럼 꿈틀거린다. 탐험대는 도시의 잊혀진 갱단 '검은 새벽'에 대한 희미한 소문이 단순히 소문이 아님을 직감하고, 악몽 속 비명 소리가 현실 속 Whisper의 기이한 울음소리와 겹쳐지며, 녀석의 진짜 정체에 대한 첫 균열을 마주한다.",
			"boss": "pool_UrbanHorror_Whisper_V1",
			"order": 5
		}
	],
	"act_summary": {
		"intro": "탐험대는 도시의 버려진 뒷골목에서 애처로운 모습의 유기견 'Whisper'를 발견하지만, 녀석에게서 풍기는 기묘한 냄새와 불길한 기운에 불안감을 느낀다.",
		"climax_finale": "Whisper의 애처로운 가면이 벗겨지고 차가운 공포를 드러내며, 녀석의 진짜 정체에 대한 첫 균열이 나타난다. 탐험대 주변의 그림자들이 살아 움직이는 듯한 현상과 악몽 속 비명 소리가 현실과 겹쳐지며, 잊혀진 비극의 시작을 암시하는 충격적인 순간을 맞이한다.",
		"rising": "Whisper의 기괴한 움직임과 주변에서 감지되는 비정상적인 현상에 탐험대는 의문을 품기 시작한다. 잊혀진 갱단 '검은 새벽'의 흔적을 발견하고, 밤마다 악몽에 시달리며 알 수 없는 비명 소리에 괴로워한다."
	}
};
