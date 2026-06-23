import type { StoryArc } from '$lib/types';

export const storyarc_forest_aureliabloom_36: StoryArc = {
	"id": "forest_aureliabloom_36",
	"level": 36,
	"chapter_name": {
		"english": "Sylvan Cry",
		"korean": "숲의 비명",
		"chinese": "森林尖叫",
		"spanish": "Grito Bosque",
		"vietnamese": "Tiếng Hét",
		"thai": "เสียงกรีดป่า",
		"french": "Bois",
		"japanese": "森の叫び",
		"hindi": "जंगल चीख"
	},
	"theme": "forest",
	"rising_count": 3,
	"world": {
		"secret": "The forest itself is a living memorial to a lost civilization, sustained by the tormented soul of its last queen.",
		"setting": "A mystical, ancient forest, imbued with potent, ethereal magic and a melancholic aura.",
		"rule": "Ancient spirits and forgotten magic govern the forest's life and death cycles. Disturbing artifacts can awaken dormant powers but at a great cost."
	},
	"protagonist_goal": "Recover the ancient artifact from the heart of the forest to unravel its mysteries, unaware of the tragic consequences.",
	"act_tone": {
		"rising": {
			"mood": "Action-packed, tense",
			"narrative_role": "Escalating challenges and uncovering fragmented clues.",
			"tension": 3
		},
		"climax_finale": {
			"mood": "Melancholic, poignant, action",
			"tension": 5,
			"narrative_role": "Confronting the truth and facing a bittersweet victory."
		},
		"intro": {
			"tension": 1,
			"narrative_role": "Setting the stage for a perilous journey.",
			"mood": "Mysterious, anticipation"
		}
	},
	"final_boss": {
		"motivation": "자신의 심장에 박힌 고대 유물을 찾으려는 탐험대를 막으려 한다. 이 유물은 그녀의 존재를 지탱하는 마지막 조각이자, 숲과 아마존의 과거를 잇는 유일한 고리이며, 그것이 사라지면 숲과 함께 그녀의 고통스러운 존재마저 소멸할 것이기 때문이다. 그녀는 고통 속에서도 필사적으로 자신의 '기억'을 지키려 한다.",
		"id": "SylvanOracle_AureliaBloom_V1",
		"appearance_boss": "콜로설하고 찬란한 수목의 형상이지만, 고결한 여왕의 위엄을 간직한 채 숲 속에 서 있다. 옥과 자수정처럼 매끄럽게 윤이 나는 껍질은 내면의 에메랄드빛 광채를 머금고 있으며, 황금과 은빛 수액의 맥박이 그 표면을 따라 흐른다. 머리 위로는 무지갯빛 잎사귀와 빛나는 꽃가루가 소용돌이치며 끊임없이 형상을 바꾸고, 속삭이는 듯한 소리를 낸다. 그 주변의 대기는 희미한 무지개 아우라로 물들어 아련히 빛난다.",
		"name": "Aurelia Bloom",
		"twist": "탐험대가 그녀의 심장에 가까이 다가가자, 거대한 나무 형상이 점차 옅어지며 비통한 여인의 형상이 잠시 비친다. 그녀의 눈에서는 빛나는 보랏빛 눈물이 쏟아지고, 숲 전체가 고대의 비명으로 울부짖는다. 마침내 유물이 뽑히는 순간, 숲은 빛을 잃고 그녀는 흩어지는 빛무리가 되어 마지막 말을 남긴다. '…오랜 세월… 내가 지키고자 했던 것은… 잊힌 기억뿐이 아니었음을… 그저… 나 자신조차… 기억하고 싶었던 것이었음을… 이제… 모든 것이… 사라지는구나…'",
		"appearance_npc": "A towering, ancient tree spirit, emanating an aura of wisdom and serenity, guiding lost souls.",
		"surface_identity": "이 깊은 숲의 고요를 지키는, 신비로운 고목의 정령. 고대 아마존의 지혜를 간직한 존재로 여겨지며, 길 잃은 자들에게 환영과 계시를 통해 나아갈 길을 가르치는 성스러운 수호자.",
		"true_identity": "사실 그녀는 멸망 직전의 아마존 부족의 마지막 예언자이자 여왕이었다. 부족의 모든 기억과 미래를 품고 영원히 보존하고자 스스로를 태고의 숲 정령과 결합시켰으나, 그 과정에서 육신은 숲의 일부가 되고 영혼은 찢겨나가 영원히 고통받는 존재가 되었다. 그녀는 숲의 망령이 되어 자신의 목적조차 잊은 채 숲에 갇힌 채 살아간다."
	},
	"global_foreshadowing": [
		{
			"reveal_context": "오라클이 숲과 하나가 되며 느끼는 고통의 울음소리이자, 숲 전체가 유물의 힘으로 고통받고 있음을 암시한다.",
			"reveal_room": 12,
			"hint": "숲의 특정 지역에서 희미하고 슬픈 울부짖음과 함께 땅의 떨림이 간헐적으로 감지된다.",
			"plant_room": 3,
			"reveal_act": "climax_finale",
			"plant_act": "intro",
			"id": "GF_SylvanOracle_01"
		},
		{
			"reveal_room": 10,
			"reveal_context": "오라클의 본래 모습과 그녀가 숲의 정령이 된 비극적인 과정을 직접적으로 보여주는 복선이다.",
			"plant_act": "rising",
			"plant_room": 5,
			"reveal_act": "climax_finale",
			"id": "GF_SylvanOracle_02",
			"hint": "숲 속 버려진 유적에서 고대 여왕이 거대한 나무와 합쳐지며 빛나는 보랏빛 눈물을 흘리는 벽화가 발견된다."
		},
		{
			"reveal_context": "오라클의 생명력과 고통이 숲의 식물들과 연결되어 있음을 보여주며, 숲의 생명력이 그녀에게서 비롯되었음을 암시한다.",
			"reveal_room": 9,
			"hint": "숲의 깊은 곳으로 갈수록 일부 희귀 식물들이 슬픈 빛을 발하며 맥박처럼 깜빡이는 현상이 나타난다.",
			"plant_act": "rising",
			"reveal_act": "climax_finale",
			"plant_room": 7,
			"id": "GF_SylvanOracle_03"
		},
		{
			"hint": "숲의 중심부를 향해 나아갈수록 희미하지만 반복적으로 슬픈 자장가 같은 멜로디가 들려오는 것을 감지한다.",
			"id": "GF_SylvanOracle_04",
			"reveal_act": "climax_finale",
			"plant_room": 2,
			"plant_act": "intro",
			"reveal_context": "오라클의 잃어버린 기억이자 그녀가 여왕이었을 때 불렀던 자장가로, 숲과 자신의 존재를 지키려는 마지막 노력을 나타낸다.",
			"reveal_room": 11
		}
	],
	"npc_roles": {
		"glen": {
			"role": "경험 많은 탐험가 및 경고자",
			"arc": "4화에서 숲의 수호자들과의 대치 중 이들이 숲의 일부임을 경고하며, 불필요한 파괴를 만류하려는 역할."
		},
		"bracken": {
			"arc": "2화에서 식물 괴물과의 전투에서 길을 찾아주고 약점을 공략하는 데 기여하는 역할.",
			"role": "전투 전문 가이드"
		},
		"fern": {
			"role": "초반 길잡이 및 마지막 증인",
			"arc": "1화에서 숲의 징후와 위험을 경고하며 탐험대를 돕는 인물. 5화에서 유물이 뽑히는 순간의 비극적인 진실을 목격하며 주인공과 함께 허무함을 느끼는 역할."
		},
		"hazel": {
			"role": "회의론자 및 과거 해석자",
			"arc": "3화에서 숲의 환영에 대해 회의적인 시각을 가지지만, 고대 벽화의 비극적인 내용을 해석하여 숲의 진실에 대한 통찰을 제공하는 역할."
		}
	},
	"scenarioOutline": [
		{
			"boss": "random_boss",
			"order": 1,
			"act": "intro",
			"npc": "fern",
			"summary": "고대 유물을 찾아 신비로운 숲에 들어선 탐험대는 숲의 정령 페른의 경고 속에서 첫 번째 단서를 발견하고, 숲의 기묘한 징후들을 접하며 여정을 시작한다.",
			"title": "잊힌 기억의 숲 입구"
		},
		{
			"summary": "숲 깊이 들어선 탐험대는 괴이한 식물 괴물들의 습격에 맞서 싸운다. 브라켄은 이 식물들이 숲의 심장부와 비정상적으로 연결되어 있음을 밝히고, 탐험대는 유물이 숨겨진 폐허로 향하는 지도 조각을 발견한다.",
			"title": "심장의 고동",
			"npc": "bracken",
			"boss": "random_boss",
			"act": "rising",
			"order": 2
		},
		{
			"title": "거짓된 환영의 길",
			"summary": "숲의 마법이 짙어지며 환영에 휩싸인다. 헤이즐은 환영을 통해 과거의 비극적인 그림자를 보게 되고, 숲의 아름다움 뒤에 감춰진 고통을 느끼게 된다. 고대 여왕이 숲과 합쳐지는 벽화를 발견한다.",
			"order": 3,
			"act": "rising",
			"boss": "random_boss",
			"npc": "hazel"
		},
		{
			"npc": "glen",
			"order": 4,
			"act": "rising",
			"boss": "random_boss",
			"title": "속삭이는 존재",
			"summary": "탐험대는 유물을 지키는 고대 수호자들과 마주한다. 글렌은 이들이 숲의 일부이며, 이들을 이기는 것이 숲을 해치는 것과 같다고 경고한다. 숲의 깊은 곳에서 슬픈 자장가 같은 멜로디가 들려오고, 특정 식물들이 슬픈 빛을 발하는 것을 목격한다."
		},
		{
			"summary": "숲의 심장부에 도달한 탐험대는 실반 오라클, 아우렐리아 블룸과 마주한다. 그녀의 고통스러운 저항을 뚫고 유물을 뽑아내자, 숲은 죽음의 침묵에 잠기고 오라클은 잊힌 기억의 파편을 흘리며 소멸한다. 페른은 이 공허한 승리에 대한 허무함을 느낀다.",
			"title": "비극의 심장",
			"boss": "pool_SylvanOracle_AureliaBloom_V1",
			"act": "climax_finale",
			"order": 5,
			"npc": "fern"
		}
	],
	"act_summary": {
		"climax_finale": "숲의 심장부에서 고통받는 오라클, 아우렐리아 블룸과 최종 대결. 유물을 획득하는 순간 숲과 오라클이 소멸하며, 탐험대는 승리 속에서 공허함과 비극적인 진실을 마주한다.",
		"rising": "숲의 깊은 곳으로 향하며 식물 괴물과의 전투, 환영 속에서 과거의 비극적 흔적을 발견한다. 브라켄, 헤이즐, 글렌과 함께 숲의 마법과 수호자들과 대치하며 유물의 실체에 다가가지만, 숲의 고통에 대한 이해도 깊어진다.",
		"intro": "고대 유물을 찾아 신비로운 숲에 들어선 탐험대는 숲의 정령 페른의 경고 속에서 첫 번째 단서를 발견하고, 숲의 기묘한 징후들을 접하며 여정을 시작한다."
	}
};
