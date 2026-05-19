import type { StoryArc } from '$lib/types';

export const storyarc_WorldRootTitan_Echo: StoryArc = {
	"chapter_name": {
		"hindi": "विश्व वृक्ष की गूँज",
		"spanish": "Ecos del Árbol del Mundo",
		"chinese": "世界树的回响",
		"japanese": "世界樹の木霊",
		"english": "Echoes of the World Tree",
		"french": "Les Échos de l'Arbre-Monde",
		"vietnamese": "Tiếng Vọng Của Cây Thế Giới",
		"thai": "เสียงสะท้อนของต้นไม้โลก",
		"korean": "세계수의 메아리"
	},
	"scenarioOutline": [
		{
			"order": 1,
			"act": "intro",
			"boss": "random_boss",
			"title": "폭주하는 숲, 무너진 질서",
			"summary": "카인의 진실이 밝혀진 후, 세계수는 폭주하여 숲 전체를 혼돈에 빠뜨린다. 와해된 수호대 잔해 속에서 주인공은 숲의 변이된 주민인 브라켄과 마주치고, 숲의 파괴가 단순한 복수로 끝나지 않을 것임을 깨닫는다. 브라켄은 고통 속에서 1편의 사건에 대한 단편적인 기억을 흘린다.",
			"npc": "bracken"
		},
		{
			"boss": "random_boss",
			"summary": "폭주하는 숲 속에서 주인공은 홀로 남겨진 어린 요정 엘라를 만난다. 엘라는 1편에서 아무도 듣지 않던 요정들의 경고를 회상하며, 이제는 세계수의 폭주가 '고대 수호자'의 봉인 해제와 관련되어 있다는 희미한 전설을 이야기해준다. 숲의 뿌리들이 비정상적으로 공명하는 현상과 함께, 숲의 깊은 곳으로 향할 실마리를 얻는다.",
			"npc": "ela",
			"title": "요정의 경고, 고대 전설",
			"order": 2,
			"act": "rising"
		},
		{
			"title": "어둠 속 연구, 이중적인 제안",
			"summary": "파괴된 수호대 기지에서 카인의 잔재를 연구하는 의문의 학자 아이비를 만난다. 아이비는 카인이 남긴 기록과 세계수에 대한 정보를 제공하며, 동시에 주인공에게 자신과 협력할 것을 제안한다. 숲의 진정한 비밀에 다가서는 한편, 아이비의 이중적인 태도에 의심을 품기 시작한다.",
			"npc": "ivy",
			"boss": "random_boss",
			"act": "rising",
			"order": 3
		},
		{
			"npc": "cedar",
			"summary": "숲 가장 깊은 곳, 봉인되었던 고대 유적에서 침묵하던 고대 수호자 시더가 잠에서 깨어난다. 시더는 주인공에게 세계수의 진정한 역할과, 카인이 세계수를 조종했던 이유, 그리고 세계수 안에 갇힌 고대 수호자의 의지에 대해 설명하며, 폭주를 멈출 방법을 제시한다. 카인의 그림자가 숲 전체에 드리워져 있었음을 깨닫는다.",
			"title": "침묵의 깨어남, 진실의 목소리",
			"boss": "random_boss",
			"act": "rising",
			"order": 4
		},
		{
			"order": 5,
			"act": "climax_finale",
			"boss": "pool_015",
			"title": "세계수의 심장, 최후의 정화",
			"summary": "세계수의 심장에 도달한 주인공은 폭주하는 에너지 속에서 고대 수호자의 잔존 의지와, 어린 요정 엘라의 간절한 외침을 듣는다. 세계수의 폭주가 단순히 파괴가 아니라, 카인의 오염으로부터 스스로를 정화하려는 시도였음을 깨닫는다. 주인공은 시더의 가르침과 엘라의 도움으로 세계수 내부의 진정한 의지를 해방시키고, 숲의 새로운 균형을 찾아낸다. 숲은 고요해지지만, 카인의 흔적과 그 배후의 존재는 여전히 남아있다.",
			"npc": "ela"
		}
	],
	"rising_count": 3,
	"act_tone": {
		"intro": {
			"tension": 1,
			"mood": "불안, 혼란",
			"narrative_role": "사건의 여파와 새로운 위협을 제시"
		},
		"rising": {
			"tension": 3,
			"narrative_role": "점증하는 위협과 실마리 제공",
			"mood": "긴박, 절망"
		},
		"climax_finale": {
			"tension": 5,
			"mood": "장엄, 비장",
			"narrative_role": "최종 대결과 거대한 비밀의 폭로"
		}
	},
	"id": "WorldRootTitan_Echo",
	"npc_roles": {
		"cedar": {
			"arc": "오랜 잠에서 깨어나 주인공에게 숲의 진정한 역사와 세계수의 본질, 그리고 카인이 저지른 만행의 진정한 의미를 알려주며, 세계수 정화의 결정적인 방법을 제시한다. 주인공의 멘토 역할을 수행한다.",
			"role": "오랜 시간 숲 깊은 곳에서 침묵하던 고대 수호자 종족의 일원. 세계수의 폭주로 인해 잠에서 깨어나 주인공에게 숲의 진정한 역사와 세계수의 역할, 그리고 카인이 저지른 만행의 진정한 의미를 알려준다. 최종적으로 세계수 정화에 결정적인 도움을 준다."
		},
		"bracken": {
			"role": "세계수의 폭주로 인해 변이된 숲의 주민. 인간성을 잃었지만 가끔 1편의 사건과 카인에 대한 단편적인 기억을 흘린다. 동정심을 유발하며 숲의 변질을 상징한다.",
			"arc": "세계수의 폭주로 인해 변이된 숲의 주민. 주인공에게 숲의 비극적인 변화를 직접 보여주고, 고통 속에서 1편의 사건에 대한 단편적인 기억을 흘려 주인공의 감정선을 자극한다."
		},
		"ela": {
			"role": "수호대가 와해된 후 숲에 홀로 남겨진 어린 요정. 1편에서 루미나나 리라 같은 요정들이 카인에 대해 경고했지만 무시당했던 것을 회상하며, 이제는 주인공에게 적극적으로 위험을 경고하고 고대 수호자에 대한 희미한 전설을 이야기해준다.",
			"arc": "숲의 혼란 속에서 주인공에게 고대 수호자의 전설과 세계수의 진정한 역할에 대한 희미한 단서를 제공하며, 클라이맥스에서는 순수한 마음으로 세계수 내부의 고대 수호자의 의지를 해방시키는 데 결정적인 역할을 한다."
		},
		"ivy": {
			"arc": "카인의 잔재를 연구하며 세계수에 대한 깊은 지식을 가지고 주인공에게 정보를 제공하지만, 자신의 이득을 위해 주인공을 이용하려 하여 서사에 긴장감을 더하고, 숲의 새로운 질서에 대한 또 다른 관점을 제시한다.",
			"role": "숲 외곽에서 몰래 카인의 잔재를 연구하며 새로운 질서를 꿈꾸는 의문의 학자. 숲의 비밀과 세계수의 본질에 대한 단서를 제공하지만, 동시에 자신의 이득을 위해 주인공을 이용하려는 이중적인 면모를 보인다."
		}
	},
	"protagonist_goal": "카인의 통제에서 벗어난 세계수가 폭주하여 숲 전체를 집어삼키려 한다. 1편에서 카인에게 이용당했던 주인공은 이제 스스로의 의지로 세계수의 폭주를 막고, 숲을 안정화시키며, 카인 배후의 진정한 세력을 파헤쳐야 한다.",
	"final_boss": {
		"id": "WorldRootTitan_V0",
		"name": "World Root Titan",
		"appearance_npc": "A calm, weathered captain of the Guardians in worn leather armor. He speaks softly, apologizing for arriving too late. He knows the names of every village and the locations of every danger. His hand rests on the survivor's shoulder like a promise — \"I'll help you with your vengeance.\"",
		"appearance_boss": "Kain himself never appears on the battlefield. Instead, the World Tree's heart — the World Root Titan — awakens at his touch, fed by the protagonist's anger. Roots the size of villages tear through the canopy. Spores spiral around its core in perfect, controlled patterns — too controlled for nature. A second silhouette hovers behind it, watching, not fighting. Kain's weapon is the forest itself.",
		"surface_identity": "잠든 세계수의 일부가 스스로 깨어난 듯 보이는 거대한 정령. 자연의 분노가 형상을 얻은 존재처럼, 마을을 삼킨 숲의 의지가 직접 일어선 것처럼 보인다.",
		"true_identity": "Titan에겐 의지가 없다. 카인이 통제하는 포자 회로와, 주인공의 분노가 흘려보낸 연료로 작동하는 살아있는 무기. \"구해준 자\"가 깨운 손이고, \"복수하는 자\"가 댄 불씨다. 뿌리 안쪽으로는 카인이 마을마다 보냈던 포자가 그대로 흐른다.",
		"motivation": "이전 **카인의 조종** 아래에서는 단순히 무기였지만, 이제 세계수 자체의 고유한 생존 본능과 자가 치유 의지가 폭주하는 형태로 발현된다. 카인이 자신의 계획을 위해 숲의 균형을 뒤흔들었기에, 세계수는 잃어버린 균형을 회복하고 카인의 흔적을 지우려 한다. 그러나 그 방식이 너무나도 원시적이고 파괴적이어서, 숲 전체를 위험에 빠뜨린다. 마치 **그때 카인이 흘려보낸 증오와 절망의 에너지가** 세계수에 남아 그것을 왜곡시키는 듯하다.",
		"twist": "세계수의 폭주는 단순한 재앙이 아니라, 숲의 고대 수호자 중 하나가 카인의 마수에서 벗어나 세계수를 정화하려던 시도가 뒤틀린 결과였다. **카인이 주인공을 이용해 깨웠던** 세계수는 본래 숲을 보호하는 존재였으나, 폭주하는 과정에서 고대 수호자의 정화 시도와 충돌하며 더욱 격렬한 형태로 변질된 것이다. 결국 주인공은 세계수와 싸우는 것이 아니라, 폭주하는 세계수 속에서 고대 수호자의 마지막 의지를 찾아야 한다. 폭주하는 세계수의 핵심에서, 숲의 진정한 의지를 발견하게 된다."
	},
	"theme": "forest",
	"global_foreshadowing": [
		{
			"reveal_room": 2,
			"plant_room": 1,
			"plant_act": "intro",
			"hint": "숲의 뿌리들이 평소와 다르게 공명하는 소리",
			"reveal_context": "세계수의 의지가 깨어나고 있음을 암시",
			"reveal_act": "rising",
			"id": "WhisperingRoots"
		},
		{
			"reveal_room": 3,
			"plant_act": "intro",
			"plant_room": 1,
			"hint": "오래된 유적에서 발견되는 알 수 없는 문양",
			"id": "AncientMark",
			"reveal_context": "고대 수호자들의 존재와 그들의 봉인된 힘을 암시",
			"reveal_act": "rising"
		},
		{
			"plant_room": 1,
			"plant_act": "rising",
			"reveal_room": 5,
			"reveal_act": "climax_finale",
			"reveal_context": "세계수 속에 갇힌 고대 수호자의 의지를 암시",
			"id": "FadingLight",
			"hint": "숲 깊은 곳에서 희미하게 빛나는 영혼의 조각들"
		},
		{
			"hint": "파괴된 수호대 기지에서 발견된 카인의 기록",
			"reveal_context": "카인의 계획이 예상보다 거대했음을 드러내고 세계수의 폭주 원인에 대한 힌트를 제공",
			"reveal_act": "climax_finale",
			"id": "KainsShadow",
			"reveal_room": 5,
			"plant_act": "rising",
			"plant_room": 3
		}
	],
	"act_summary": {
		"climax_finale": "세계수의 심장에서 최후의 대결을 펼치며, 폭주하는 세계수 속에서 고대 수호자의 의지를 해방시킨다. 숲은 평화를 되찾지만, 카인의 그림자와 그 배후의 진정한 세력에 대한 새로운 의문이 남는다.",
		"intro": "카인의 진실이 폭로된 후, 세계수는 걷잡을 수 없이 폭주하며 숲 전체를 집어삼키려 한다. 와해된 수호대의 잔해 속에서 주인공은 숲의 변질과 새로운 위협을 직면하고, 과거의 복수가 새로운 갈등의 시작이었음을 깨닫는다.",
		"rising": "폭주하는 세계수의 미스터리를 파헤치며 고대 요정과 의문의 학자를 만나 숲의 숨겨진 역사와 카인의 더 큰 계획에 대한 단서를 얻는다. 마침내 잠에서 깨어난 고대 수호자를 통해 세계수의 진정한 본질과 폭주의 원인을 이해하게 된다."
	},
	"world": {
		"secret": "카인이 세계수를 통제했던 것은 단순한 복수가 아닌, 고대 존재를 깨우기 위한 서막이었다는 사실이 서서히 드러난다. 세계수는 카인의 의지를 넘어서 스스로의 의지를 가진 존재로 각성하려 하며, 그 과정에서 숲의 진정한 수호자들이었던 '고대 수호자'들의 존재가 암시된다. 이들은 카인의 계획을 막기 위해 잠시 봉인되었으나, 세계수의 각성으로 인해 깨어나려 한다.",
		"rule": "포자 존재들은 여전히 인간을 잠식한다. 그러나 이제 수호대의 통제는 사라졌고, 숲은 포자의 새로운 생태계를 형성하고 있다. 오염된 지역은 예측 불가능하게 변하며, 포자들은 단순한 생명체를 넘어 복잡한 형태로 진화한다. 숲의 힘은 해방되었으나, 그 힘을 이해하고 통제할 새로운 존재가 필요하다. '카인의 통제'라는 틀이 사라진 지금, 숲의 진정한 본성이 드러난다.",
		"setting": "카인의 진실이 폭로된 후, 세계수는 잠시 침묵했지만 그 여파는 숲 전체에 광범위하게 퍼졌다. 포자에 오염된 지역은 더욱 빠르게 확산되고 있으며, 수호대는 와해되었다. 이제 숲은 진정한 의미의 야생이 되었고, 카인의 계획에 이용되었던 모든 것들이 제자리로 돌아오려 한다. 그러나 그 과정은 혼돈과 파괴를 동반한다. 숲의 깊은 곳에서는 새로운 질서가 태동하고 있다는 소문이 돌기 시작한다."
	}
};
