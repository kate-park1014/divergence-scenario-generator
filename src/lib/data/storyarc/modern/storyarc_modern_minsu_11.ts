import type { StoryArc } from '$lib/types';

export const storyarc_modern_minsu_11: StoryArc = {
	"id": "modern_minsu_11",
	"level": 11,
	"chapter_name": {
		"thai": "ครั้งนี้จะต่างไป ไม่หรอก มันเหมือนเดิมเสมอ",
		"korean": "이번엔 다를 거야. 아니다. 항상 같았다.",
		"french": "Cette fois, ce sera différent. Non, c'était toujours pareil.",
		"spanish": "Esta vez será diferente. No, siempre fue igual.",
		"japanese": "今度こそ違うはず。いや、いつも同じだった。",
		"english": "This Time It'll Be Different. No, It Was Always The Same.",
		"vietnamese": "Lần này sẽ khác. Không, luôn luôn giống nhau.",
		"chinese": "这次会不一样。不，一直都一样。",
		"hindi": "इस बार अलग होगा। नहीं, यह हमेशा एक जैसा था。"
	},
	"theme": "modern",
	"rising_count": 3,
	"world": {
		"rule": "기억은 반복되며, 모든 시도는 실패로 돌아간다. 과거를 미화하며 현재를 부정하는 시스템이 지배한다.",
		"secret": "모든 것은 'memory keeper'가 만들어낸 끝없는 반복의 함정이다. 벗어나려면 과거를 미화하는 환상과 단절해야 한다.",
		"setting": "과거의 기억들로 이루어진 왜곡된 공간. 아름답지만 어딘가 어긋난, 반복되는 환상 속 세상."
	},
	"protagonist_goal": "과거의 환상에서 벗어나 'memory keeper'의 진정한 정체를 밝히고, 반복되는 함정에서 탈출한다.",
	"act_tone": {
		"intro": {
			"narrative_role": "도입: 과거의 왜곡된 진실에 직면하며 혼란에 빠진다.",
			"mood": "긴장감 있는",
			"tension": 1
		},
		"rising": {
			"narrative_role": "전개: 반복되는 함정 속에서 좌절하고, 기억 관리자의 실체를 파헤친다.",
			"mood": "절망적이고 충격적인",
			"tension": 3
		},
		"climax_finale": {
			"tension": 5,
			"narrative_role": "결말: 기억 관리자의 트위스트를 완전히 폭로하고, 새로운 시작을 맞이한다.",
			"mood": "극적인 해방감과 씁쓸함"
		}
	},
	"final_boss": {
		"appearance": "사진, 음성 메시지, 옛 채팅으로 이루어진 거대한 존재. 각각의 기억이 끝없이 반복 재생된다. 주변 환경은 끊임없이 과거의 장면들로 바뀌며 플레이어를 그 안에 가둔다. 모든 것이 따뜻해 보이지만… 이제는 공허하고 섬뜩하게 느껴진다. 특정 기억의 끝없는 반복을 명확히 보여주는 텔롭이나 음성으로 뒤덮인다.",
		"twist": "'그때로 돌아가면… 괜찮을 것 같지 않아?' 장면이 반복된다. 웃고, 대화하고, 행복했던 순간. 하지만… 똑같이 끝난다. 다시 시작된다. '이번엔 다를 거야.' 아니다. 항상 같았다. 이 반복되는 고통이 바로 기억 관리자의 진정한 함정이었다.",
		"true_identity": "과거를 미화하여 현재를 부정하게 만드는 존재. 이미 끝난 관계를 계속 살아있는 것처럼 유지하며, 끝없는 반복을 통해 탐험대를 영원히 가두려는 존재.",
		"name": "memory keeper",
		"surface_identity": "좋았던 추억을 간직하는 다정한 사람.",
		"motivation": "탐험대가 앞으로 나아가지 못하고 과거에 머물게 만들며, 결국 이 반복되는 고통 속에 영원히 가둔다.",
		"id": "ExArchive_V0"
	},
	"global_foreshadowing": [
		{
			"hint": "특정 기억의 끝없는 반복을 명확히 보여주는 텔롭과 음성 오류가 증폭된다.",
			"id": "FS_RepetitionCycle",
			"reveal_context": "모든 것이 완벽하게 반복되고 있음을 깨닫는 순간.",
			"plant_act": "intro",
			"reveal_room": 5,
			"reveal_act": "climax_finale",
			"plant_room": 1
		},
		{
			"plant_room": 2,
			"reveal_room": 4,
			"reveal_act": "climax_finale",
			"hint": "행복했던 과거의 순간들이 공허하고 섬뜩하게 느껴지기 시작한다.",
			"plant_act": "rising",
			"id": "FS_HollowHappiness",
			"reveal_context": "가장 행복했던 기억이 가장 큰 고통으로 다가오는 아이러니."
		},
		{
			"reveal_room": 1,
			"reveal_act": "climax_finale",
			"plant_room": 3,
			"id": "FS_Mimicry",
			"reveal_context": "관리자가 단순한 보관자가 아닌 조작자임을 알게 되는 순간.",
			"plant_act": "intro",
			"hint": "기억 관리자가 탐험대 내부의 갈등과 불안을 모방하여 환상을 강화한다."
		},
		{
			"plant_room": 4,
			"reveal_room": 2,
			"reveal_act": "climax_finale",
			"plant_act": "rising",
			"id": "FS_NoDifference",
			"reveal_context": "아무리 노력해도 결말이 바뀌지 않는다는 뼈아픈 진실.",
			"hint": "'이번엔 다를 거야'라는 속삭임이 매번 같은 결과를 낳는다는 것을 암시하는 증거들이 발견된다."
		}
	],
	"npc_roles": {
		"lin": {
			"role": "전략가",
			"arc": "1편에서 발견한 불일치들을 종합하여 기억 관리자의 정체와 과거 미화의 기전을 밝혀내고, 탈출 전략을 제시하여 탐험대가 반복의 함정에서 벗어날 수 있도록 이끈다."
		},
		"kai": {
			"role": "진실을 직면하는 자",
			"arc": "과거가 덫임을 깨닫고 기억 관리자의 진실을 직면, 플레이어와 함께 봉인을 풀 방법을 모색하며, 탐험대의 탈출을 위한 중요한 열쇠를 찾아낸다."
		},
		"max": {
			"role": "과거의 피해자",
			"arc": "기억 관리자의 반복되는 환상에 완전히 갇히지만, 카이나 린, 플레이어의 도움으로 깨어나 트위스트의 피해자로서 직접적인 증거가 되며, 다른 탐험대원들이 진실을 직면하게 돕는다."
		}
	},
	"scenarioOutline": [
		{
			"boss": "random_boss",
			"title": "반복되는 균열: 린의 분석",
			"summary": "린은 1편에서 발견한 미세한 노이즈와 반복되는 음성 오류를 분석하여, 이 세계가 단순한 기억 보관소가 아닌 끝없는 반복의 함정임을 직감한다. 특정 기억의 끝없는 반복을 명확히 보여주는 텔롭과 음성 오류가 증폭되며, 그녀의 의심은 확신으로 변해간다.",
			"npc": "lin",
			"act": "intro",
			"order": 1
		},
		{
			"npc": "kai",
			"summary": "카이는 기억 관리자가 제공하는 가장 행복했던 과거의 순간 속에서 위안을 찾으려 하지만, 반복될수록 그 행복이 공허하고 섬뜩하게 느껴지는 모순에 직면한다. '이번엔 다를 거야'라는 속삭임이 허무하게 메아리친다.",
			"title": "공허한 위안: 카이의 갈등",
			"boss": "random_boss",
			"act": "rising",
			"order": 2
		},
		{
			"npc": "max",
			"boss": "random_boss",
			"title": "갇힌 시간: 맥스의 절규",
			"summary": "맥스는 기억 관리자의 반복되는 환상에 완전히 갇혀, 가장 소중한 기억이 끝없이 똑같은 결말로 향하는 고통을 겪는다. 이젠 기계적인 소음과 함께 '이번엔 다를 거야'라는 말이 비웃음처럼 들린다. 그가 반복의 증거이자 피해자가 된다.",
			"act": "rising",
			"order": 3
		},
		{
			"summary": "린은 기억 관리자가 탐험대원들의 가장 깊은 불안과 갈등을 모방하여 환상을 강화하고 있음을 깨닫는다. 행복했던 기억들이 이제는 플레이어를 옥죄는 장치로 변모하며, 관리자가 단순한 보관자가 아닌 능동적인 조작자임을 알게 된다.",
			"title": "환상의 조작: 관리자의 모방",
			"boss": "random_boss",
			"npc": "lin",
			"act": "rising",
			"order": 4
		},
		{
			"act": "climax_finale",
			"summary": "린의 분석과 카이, 맥스의 경험이 합쳐져 기억 관리자의 진정한 정체와 '이번엔 다를 거야. 아니다. 항상 같았다.'라는 트위스트가 완전히 폭로된다. 과거를 미화하여 현재를 부정하게 만드는 존재의 실체가 드러나고, 탐험대는 반복되는 고통의 순환을 끊기 위한 마지막 시도를 한다. 모든 복선이 이 순간에 수렴하며, 탐험대는 해방되거나 영원히 갇히게 된다.",
			"title": "끝없는 반복의 진실: 기억 관리자의 폭로",
			"boss": "pool_099",
			"npc": "lin",
			"order": 5
		}
	],
	"act_summary": {
		"rising": "카이는 과거의 위안 속에서 공허함을 느끼고, 맥스는 반복되는 환상에 갇혀 고통받는다. 린은 관리자의 조작을 깨닫고 진실에 다가선다.",
		"climax_finale": "기억 관리자의 진짜 정체와 끝없는 반복의 트위스트가 완전히 폭로되고, 탐험대는 이 고통스러운 순환을 끊기 위한 최후의 일격을 시도한다.",
		"intro": "기억 관리자의 세계에 숨겨진 반복의 함정을 린이 직감하고, 이 세계의 부자연스러움에 대한 의심이 고조된다."
	}
};
