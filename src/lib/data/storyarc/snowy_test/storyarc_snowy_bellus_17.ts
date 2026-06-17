import type { StoryArc } from '$lib/types';

export const storyarc_snowy_bellus_17: StoryArc = {
	"id": "snowy_bellus_17",
	"level": 17,
	"chapter_name": {
		"spanish": "El Coleccionista de Recuerdos Congelados",
		"vietnamese": "Người Sưu Tầm Ký Ức Đóng Băng",
		"french": "Le Collectionneur de Souvenirs Gelés",
		"japanese": "凍結した記憶の収集家",
		"thai": "นักสะสมความทรงจำที่ถูกแช่แข็ง",
		"hindi": "जमी हुई यादों का संग्राहक",
		"english": "The Collector of Frozen Memories",
		"korean": "얼어붙은 기억의 수집가",
		"chinese": "冰冻记忆的收藏家"
	},
	"theme": "snowy",
	"rising_count": 3,
	"world": {
		"setting": "모든 것이 멈춰버린 영원의 설원. 과거의 시간 집찰관이 얼어붙은 순간들을 수집하며 지배하는 곳. 고요하고 아름답지만, 그 이면에는 왜곡된 보존의 광기가 흐른다.",
		"rule": "시간은 한 방향으로 흐르지 않는다. 벨루스에게 붙잡힌 존재는 가장 행복한 순간에 영원히 박제되며, 그의 의지에 따라 그 '기억 파편'은 재배치되거나 소멸할 수 있다. 오직 그의 선로 위에서만 시간이 의미를 갖는다.",
		"secret": "세상을 구하기 위해 '가장 아름다운 순간'을 얼려 영구 보존하려는 벨루스의 왜곡된 신념이 이 세계의 근원이다. 파괴되는 미래에 대한 두려움이 그를 광기의 수집가로 만들었다."
	},
	"protagonist_goal": "벨루스의 진짜 목적을 파악하고, 그가 얼린 시간을 다시 흐르게 할 방법을 찾아 세상을 본래의 모습으로 되돌린다.",
	"act_tone": {
		"climax_finale": {
			"narrative_role": "벨루스와의 대치, 그의 광기 어린 신념의 심화, 다음 편을 위한 충격적 복선",
			"tension": 5,
			"mood": "절망 속 희망과 반전의 암시"
		},
		"rising": {
			"tension": 3,
			"mood": "고조되는 긴장과 진실의 파편",
			"narrative_role": "벨루스의 과거와 동기, 세계의 비밀에 대한 단서 탐색"
		},
		"intro": {
			"narrative_role": "새로운 미스터리의 제시와 인물들의 동요",
			"mood": "혼돈과 의문",
			"tension": 1
		}
	},
	"final_boss": {
		"twist": "벨루스는 탐험대의 행동을 '파괴'로 단정하며, 자신의 '보존'이 궁극적인 구원이라 광적으로 믿는다. 그는 탐험대가 '영원한 행복'을 거부하고 '결국 흉해질 지옥'으로 돌아가려 한다고 비난하며, 다음 편에서 드러날 비극적인 진실의 조각들을 뿌린다.",
		"name": "Bellus",
		"appearance": "A colossal, surreal Victorian-style train engine, crafted from polished obsidian and brass. Its cowcatchers are replaced by gigantic clock hands, slowly reversing. Hundreds of long, spindly sewing needles made of glistening silver ice extend as its 'limbs,' meticulously stitching shimmering frozen memory-shards into an impossibly vast, translucent rail that floats in the frigid air. The engine's 'face' is a colossal, glowing clock face, visible behind a cracked, frozen glass dome, its hands moving backward erratically. It trails ethereal blue spectral afterimages of people, perfectly preserved in their most ecstatic moments, echoing with faint, joyous laughter. Photorealistic steampunk, emphasizing the eerie elegance and the unsettling contrast between the cold blue ice and the warm, frantically ticking gold mechanisms.",
		"true_identity": "과거에 시간을 배달하던 집찰관. 모든 것이 파괴되는 미래를 보았고, 세상을 구하는 유일한 방법은 '가장 아름다운 지금 이 순간'을 얼려서 영구 보존하는 것이라 믿게 된 광기 어린 수집가.",
		"id": "ChronosStitcher_V0",
		"motivation": "탐험대가 시간을 다시 흐르게 하려는 것을 '파괴'라고 생각한다. 그들이 나이를 먹고, 병들고, 결국 죽는 것을 막기 위해—그들의 시간을 여기서 '가져가' 주려 한다.",
		"surface_identity": "멈춰버린 세상의 선로 위를 달리는 유령 열차. 그에게 닿은 자들은 영원히 얼어붙은 채 가장 아름다운 순간에 박제된다."
	},
	"global_foreshadowing": [
		{
			"hint": "벨루스가 과거 시간을 관리했던 존재임을 암시하는 오래된 표식 또는 기록 조각.",
			"reveal_room": 3,
			"id": "Foreshadow_Bellus_PastRole_02",
			"plant_act": "intro",
			"reveal_context": "브란이 고대 유적에서 발견한 기록을 통해 벨루스의 과거 직책에 대한 단서를 해석한다.",
			"plant_room": 1,
			"reveal_act": "rising"
		},
		{
			"id": "Foreshadow_FrozenMemories_DualNature_02",
			"hint": "얼어붙은 기억 파편들이 보이는 경이로운 아름다움과 그 뒤에 숨겨진 벨루스의 광기 어린 집착 사이의 괴리.",
			"reveal_room": 5,
			"reveal_context": "에이라가 사랑하는 이의 박제된 모습을 보며 아름다움과 고통 사이에서 갈등하고, 벨루스의 행동에 대한 복잡한 감정을 느낀다.",
			"reveal_act": "climax_finale",
			"plant_room": 2,
			"plant_act": "rising"
		},
		{
			"reveal_act": "climax_finale",
			"plant_room": 4,
			"reveal_context": "클라이맥스에서 벨루스와의 접촉 중, 에이라가 벨루스의 과거 시점에서 본 비극적인 미래의 잔상을 경험하고 혼란에 빠진다.",
			"plant_act": "rising",
			"id": "Foreshadow_FutureDestruction_Vision_02",
			"reveal_room": 10,
			"hint": "탐험대 중 한 명이 벨루스가 보았던 '파괴되는 미래'의 파편적인 환상을 잠깐 보게 된다."
		},
		{
			"plant_act": "rising",
			"reveal_context": "벨루스가 탐험대를 공격하며 '너희를 지키려는 것'이라는 뉘앙스의 말을 중얼거린다. 에이라가 이를 어렴풋이 듣고 충격을 받는다.",
			"reveal_act": "climax_finale",
			"plant_room": 3,
			"hint": "벨루스의 수집 행위가 단순한 파괴가 아닌, 그 자신의 논리 속에서 '구원'의 행위임을 암시하는 대사 또는 환경적 연출.",
			"reveal_room": 7,
			"id": "Foreshadow_Bellus_Salvation_02"
		}
	],
	"npc_roles": {
		"bran": {
			"arc": "1편에서 현상의 미스터리에 집중했던 것에서 나아가, 2편에서는 벨루스의 과거와 행동 원리에 대한 구체적인 단서들을 발굴하고 해석하는 역할을 맡는다. 그의 지식은 탐험대가 벨루스의 진정한 정체와 동기를 이해하는 데 필수적인 기반이 되며, 3편에서 벨루스의 취약점을 파악하는 데 기여할 정보를 축적한다.",
			"role": "조각난 고대 전설들과 기록들을 파헤쳐 '시간을 꿰매는 자' 혹은 '순간의 수집가'에 대한 이야기를 찾아낸다. 벨루스가 단순한 괴물이 아닌, 특정 목적을 가진 존재임을 추론하며 탐험대의 지적 가이드 역할을 수행한다."
		},
		"eira": {
			"role": "벨루스에게 사랑하는 이를 잃었지만, 얼어붙은 기억 속 사랑하는 이의 행복한 순간을 마주하며 벨루스의 행동이 단순한 파괴가 아닌 뒤틀린 보존임을 어렴풋이 이해하기 시작한다. 복수심과 함께 혼란과 이해하려는 감정이 교차하며, 벨루스의 동기에 대한 의문을 던지는 역할을 한다.",
			"arc": "개인적인 상실감에서 시작된 복수심이 벨루스의 의도를 이해하려는 복잡한 감정으로 발전하며, 단순한 선악 구도를 넘어선 존재로 벨루스를 인식하게 된다. 이 과정에서 그녀는 유한한 삶의 가치에 대한 숙고를 시작하며, 다음 편에서 벨루스의 신념에 맞서는 주동자로 성장할 발판을 마련한다."
		},
		"ivar": {
			"role": "벨루스의 이동 경로와 얼어붙은 구역에서 발견되는 고대 유물이나 기록을 통해, 파괴된 미래에 대한 예언과 그로부터 세상을 지키려 했던 존재에 대한 단서를 발견한다.",
			"arc": "1편에서 현실적 위협에 집중하고 실용적인 해결책을 찾으려던 태도에서 벗어나, 2편에서는 벨루스의 행동 이면에 숨겨진 비극적인 동기와 관련된 고대 예언의 흔적들을 발견한다. 그는 벨루스가 본 파괴된 미래에 대한 정보를 제공하며, 3편에서 벨루스의 시간 보존 장치를 해체하는 데 핵심적인 역할을 할 지식의 조각을 모은다."
		}
	},
	"scenarioOutline": [
		{
			"npc": "eira",
			"boss": "random_boss",
			"title": "얼어붙은 기억의 파편들",
			"act": "intro",
			"order": 1,
			"summary": "탐험대는 벨루스가 얼린 기억의 공간에 깊숙이 진입한다. 에이라는 그곳에서 사랑하는 이의 가장 행복했던 순간이 박제된 파편을 발견하고, 공포와 함께 알 수 없는 감동을 느낀다. 동시에 벨루스가 과거 '시간을 관리했던 존재'임을 암시하는 오래된 표식이 희미하게 보인다. (Foreshadow_Bellus_PastRole_02 plant - plant_room 1)"
		},
		{
			"summary": "브란은 탐험 도중 발견한 오래된 기록 보관소에서 '시간을 꿰매는 자'에 대한 전설 조각들을 찾아낸다. 그는 벨루스가 단순히 파괴자가 아닌, 얼어붙은 기억 파편들이 보이는 경이로운 아름다움에 광기 어린 집착을 가진 존재임을 추론한다. (Foreshadow_FrozenMemories_DualNature_02 plant - plant_room 2)",
			"order": 2,
			"act": "rising",
			"title": "얼어붙은 아름다움, 왜곡된 집착",
			"boss": "random_boss",
			"npc": "bran"
		},
		{
			"npc": "ivar",
			"act": "rising",
			"boss": "random_boss",
			"title": "구원의 그림자",
			"summary": "이바르는 벨루스의 이동 경로에서 고대 문명의 유물들을 발견한다. 유물 속 기록들은 벨루스의 수집 행위가 단순한 파괴가 아닌, 그 자신의 논리 속에서 '구원'의 행위임을 암시하는 내용을 담고 있으며, '파괴되는 미래'에 대한 짧은 환상을 경험한다. (Foreshadow_Bellus_Salvation_02 plant - plant_room 3)",
			"order": 3
		},
		{
			"boss": "random_boss",
			"title": "집찰관의 비극",
			"act": "rising",
			"npc": "bran",
			"order": 4,
			"summary": "브란은 수집된 단서들을 통해 벨루스가 과거 '시간을 배달하던 집찰관'이었음을 확신하고, 그가 본 파괴되는 미래에 대한 더 깊은 정보를 발견한다. (Foreshadow_Bellus_PastRole_02 reveal - reveal_room 3). 이 정보는 벨루스의 행동이 비극적인 신념에서 비롯되었음을 명확히 보여준다. (Foreshadow_FutureDestruction_Vision_02 plant - plant_room 4)"
		},
		{
			"summary": "벨루스와의 치열한 대치 속에서, 에이라는 사랑하는 이의 박제된 행복을 보며 벨루스의 광기 어린 집착과 얼어붙은 기억의 아름다움 사이에서 복합적인 감정에 휩싸인다. (Foreshadow_FrozenMemories_DualNature_02 reveal - reveal_room 5). 벨루스는 그녀를 향해 '왜 도망치니? 한 걸음만 더 가면 늙지도, 잊혀지지도 않는 영원이 있는데'라고 속삭이며 '너희를 지키려는 것'이라 주장한다. (Foreshadow_Bellus_Salvation_02 reveal - reveal_room 7) 이 순간, 에이라는 벨루스가 보았던 '모든 것이 흉해질 미래'의 파편적인 환상에 휩싸이며 충격에 빠진다. (Foreshadow_FutureDestruction_Vision_02 reveal - reveal_room 10) 벨루스의 진실이 절반 드러나며, 탐험대는 거대한 비극의 중심에 선다.",
			"order": 5,
			"act": "climax_finale",
			"title": "뒤틀린 영원의 노래",
			"boss": "pool_035",
			"npc": "eira"
		}
	],
	"act_summary": {
		"climax_finale": "벨루스와의 대치 속에서 에이라는 얼어붙은 행복의 아름다움과 그 뒤에 숨겨진 광기 사이에서 갈등한다. 벨루스는 탐험대를 '지키려는' 목적을 드러내며 자신의 뒤틀린 구원론을 설파하고, 에이라는 벨루스가 본 비극적인 미래의 환상에 휩싸인다. 벨루스의 진짜 동기가 절반 공개되며 다음 편을 위한 충격적인 반전의 실마리가 던져진다.",
		"rising": "브란은 '시간을 꿰매는 자' 전설을 통해 벨루스의 목적을 추론하고, 이바르는 고대 유물에서 벨루스의 '구원'이라는 왜곡된 동기를 엿본다. 벨루스가 본 '파괴되는 미래'의 단서들이 하나둘 드러나며 그의 진짜 정체에 대한 궁금증이 고조된다.",
		"intro": "탐험대는 벨루스가 만든 얼어붙은 기억의 공간에 진입한다. 에이라는 사랑하는 이의 박제된 행복 속에서 벨루스의 광기 어린 집착의 서막을 느끼고, 벨루스가 과거 시간을 관리했던 존재임을 암시하는 표식이 발견되며 미스터리가 심화된다."
	}
};
