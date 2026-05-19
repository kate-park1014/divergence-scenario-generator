import type { StoryArc } from '$lib/types';

export const storyarc_hell_RingBearer_Echoes: StoryArc = {
	"final_boss": {
		"id": "RingBearer_V0",
		"name": "계승자 아르카인 (Arkhain)",
		"appearance_npc": "A calm, composed wanderer cloaked in desert-stained robes. A faint golden ring hangs from a chain around his neck, never worn. He speaks with quiet authority, offering guidance about power, destiny, and \"what must be done.\" His presence feels reassuring, like someone who understands your burdens.",
		"appearance_boss": "A fractured entity made of countless overlapping versions of itself, each wearing the ring on a different finger. Some are kings, some are corpses, some are shadows. The ring glows violently, stretching reality around it. Limbs duplicate and collapse, as if multiple futures are fighting to exist at once. The ground beneath becomes a warped throne room of broken crowns and melted gold.",
		"surface_identity": "반지의 힘을 이해하고 통제할 수 있는 유일한 안내자. 올바른 사용법을 알려주는 조력자.",
		"true_identity": "반지를 \"소유\"하려는 모든 가능성이 집합된 존재. 누구든 반지를 가지려는 순간, 그 욕망이 이 존재를 완성시킨다. 즉, 플레이어의 선택이 곧 이 보스를 만든다.",
		"motivation": "1편에서 내가 '무의 고리'의 의지를 대변하는 꼭두각시에 불과했음을 깨달았다. 이제 나는 단순한 현신이 아니다. '반지 그 자체'는 여전히 존재하며, 세계는 이미 그 의지에 잠식되어가고 있다. 나는 이 세계의 모든 파편화된 의지를 '하나'로 모아 '무의 고리'를 완전히 완성시키려 한다. 오직 그렇게 해야만 진정한 평화가 도래할 것이며, 너 역시 이 거대한 순환의 일부가 되어야 한다.",
		"twist": "마침내 아르카인을 쓰러뜨린 순간, 그의 파편화된 자아들이 합쳐지며 거대한 균열이 열린다. 그 균열 너머에서 '무의 고리'의 진정한 형태가 드러나는데, 그것은 텅 빈 공간이 아닌, 주인공이 '현실'이라 믿었던 모든 것을 집어삼키고 있는 거대한 '공허'였다. '네가 반지를 원하며 흘려보낸 욕망'이 만들어낸 첫 번째 아르카인처럼, 주인공이 이 모든 것을 막으려 했던 의지조차 고리가 자신을 완성하기 위한 거대한 환상의 일부였음을 깨닫는다. 주인공의 존재 자체가 고리의 의지에 의해 설계된 것이었음이 밝혀진다."
	},
	"rising_count": 3,
	"npc_roles": {
		"vex": {
			"arc": "rising 파트에서 주인공에게 '무의 고리'의 관점과 철학을 설파하며, 주인공의 의지조차 고리의 일부가 될 운명임을 역설하여 심리적 혼란을 가중시킨다.",
			"role": "'무의 고리'의 심층부에 존재하는 존재. 겉으로는 친절하고 합리적인 모습을 보이나, 실제로는 주인공을 고리의 완성으로 이끄는 교활한 유혹자."
		},
		"soot": {
			"arc": "rising 파트에서 등장하여 자신이 겪은 환상과 경험을 통해 '무의 고리'가 단순한 파괴자가 아님을 암시하고, 고리의 반복적인 순환에 대한 힌트를 준다.",
			"role": "과거 아르카인의 영향 아래 있었으나, 1편 사건 이후 반지의 진정한 의지를 어렴풋이 짐작하게 된 방랑자. 자신이 겪은 환상과 고통을 통해 주인공에게 중요한 단서를 제공한다."
		},
		"ash": {
			"role": "반지의 근원에 대한 고대 지식을 가진 현자. 1편의 사건 이후 더욱 고립되어 세상을 관찰하며, 주인공에게 진정한 현실에 대한 힌트를 준다.",
			"arc": "intro와 climax_finale에서 주인공에게 결정적인 조언과 정보를 제공하며, 진정한 현실에 대한 깨달음을 유도한다."
		},
		"mara": {
			"role": "1편의 전쟁으로 모든 것을 잃고 복수를 맹세한 전사. 폭주하는 반지의 힘으로부터 사람들을 지키려 노력하며, 주인공과 함께 '무의 고리'에 저항한다.",
			"arc": "rising 파트에서 주인공의 동료로서 '무의 고리'의 위험성을 체감하게 하며, 나중에는 주인공을 위해 희생하여 고리의 본질에 대한 단서를 제공한다."
		}
	},
	"theme": "hell",
	"global_foreshadowing": [
		{
			"hint": "애쉬는 가끔 '이 모든 것이 누군가의 깊은 꿈일지도 모른다'고 중얼거린다.",
			"reveal_context": "아르카인과의 최후 대결 중, '무의 고리'가 모든 현실을 만들어낸 거대한 환상이었음이 밝혀지는 순간, 애쉬의 중얼거림이 주인공의 뇌리를 스친다.",
			"plant_act": "intro",
			"reveal_room": 10,
			"plant_room": 3,
			"id": "GF_DreamWorld",
			"reveal_act": "climax_finale"
		},
		{
			"hint": "벡스는 주인공에게 '너의 가장 강렬한 의지조차 고리가 자신을 완성하기 위한 재료가 될 뿐이다'라고 비웃는다.",
			"plant_act": "rising",
			"reveal_context": "아르카인이 '네가 반지를 원하며 흘려보낸 욕망'처럼, 주인공의 저항 의지조차 고리가 자신을 완성하기 위해 만든 '반전'이었음을 폭로하는 순간, 벡스의 말이 떠오른다.",
			"plant_room": 5,
			"reveal_room": 12,
			"id": "GF_ProtagonistWill",
			"reveal_act": "climax_finale"
		},
		{
			"reveal_act": "climax_finale",
			"id": "GF_MaraSacrifice",
			"reveal_room": 11,
			"plant_room": 7,
			"reveal_context": "마라가 고리의 침식으로부터 주인공을 구하려다 희생당하는 순간, 그녀의 마지막 말이 반지의 '동화'가 왜곡된 애착의 발현일 수 있다는 깨달음을 준다.",
			"plant_act": "rising",
			"hint": "마라는 '고리는 모든 것을 집어삼키지만, 그것조차 왜곡된 사랑의 형태일지 모른다'고 혼잣말처럼 말한다."
		},
		{
			"hint": "수렁은 자신이 겪은 환상 속에서 '과거와 현재, 미래가 끝없이 반복되는 고리'를 보았다고 이야기한다.",
			"reveal_context": "아르카인과의 마지막 대화에서, 이 모든 사건이 '무의 고리'가 자신을 완성하기 위한 무한한 순환의 일부였음이 드러날 때, 수렁의 환상이 진실이었음이 밝혀진다.",
			"plant_act": "rising",
			"reveal_room": 13,
			"plant_room": 9,
			"id": "GF_SootCycle",
			"reveal_act": "climax_finale"
		}
	],
	"id": "RingBearer_Echoes",
	"world": {
		"secret": "1편에서 밝혀진 '반지 그 자체'가 진정한 흑막이라는 사실은 빙산의 일각에 불과했다. 이 세계를 감싸고 있던 모든 '현상'과 '존재'는 사실 '무의 고리'가 자신을 완성하기 위해 만든 거대한 '꿈' 혹은 '환상'이었다. 플레이어는 자신이 경험한 모든 것이 고리의 의도대로 설계된 허상이며, 현실이라 믿었던 것조차 조작된 것임을 깨닫게 된다. 진정한 현실은 고리의 저편에 숨겨져 있다.",
		"setting": "1편에서 '무의 고리'의 비밀이 드러난 후, 세계는 반지의 진정한 힘에 노출되었다. 왕좌의 회랑은 더 이상 국한된 공간이 아닌, 현실 세계 곳곳에 틈새를 만들며 무한한 어둠을 토해내기 시작했다. 사람들은 서서히 이성의 끈을 놓아가고, 환상과 현실의 경계가 무너진 채 공포에 잠식되어간다. 반지의 메아리는 이제 모든 존재의 잠재된 욕망을 증폭시키며 세계를 혼돈으로 이끈다.",
		"rule": "반지의 영향력은 이제 저주받은 회랑을 넘어 현실 세계를 침범한다. 반지에 잠식된 존재들은 이형의 괴물로 변모하며, '무의 고리'의 파편이 된 채 끊임없이 증식한다. 이들은 오직 반지의 완전한 동화를 위해 움직이며, 이성을 잃은 채 모든 것을 파괴하려 한다. 이 침식을 막기 위해서는 반지의 근원을 찾아내 파괴하거나, 아니면 '무의 고리'의 의지를 역전시킬 방법을 찾아야 한다."
	},
	"act_summary": {
		"rising": "파편화된 기억, 뒤틀린 환상, 그리고 고리의 진정한 의도에 대한 단서들이 하나씩 드러난다. 방랑자 수렁의 환상, 전사 마라의 희생, 유혹자 벡스의 회유 속에서 주인공은 자신의 존재와 세계의 운명에 대한 깊은 고뇌에 빠지며, 고리의 영향력은 점점 더 깊숙이 파고든다.",
		"climax_finale": "'무의 고리'의 중심으로 향한 주인공은 완전한 현신이 된 아르카인과 최후의 대결을 펼친다. 모든 현실이 고리가 만들어낸 허상이었음을 깨달은 주인공은, 궁극적인 희생을 통해 이 저주받은 순환을 끊을 것인가, 아니면 새로운 시작을 받아들일 것인가의 기로에 선다.",
		"intro": "1편의 결말 이후, '무의 고리'의 침식으로 현실과 환상이 뒤섞인 혼돈 속에서 주인공은 과거의 흔적과 새로운 위협에 직면한다. 현자 애쉬의 경고와 함께, 세계를 구원할 새로운 여정이 시작된다."
	},
	"act_tone": {
		"intro": {
			"mood": "절망적이고 불안한",
			"narrative_role": "새로운 위협과 혼돈에 대한 경고",
			"tension": 1
		},
		"climax_finale": {
			"tension": 5,
			"narrative_role": "모든 것의 종결과 새로운 시작",
			"mood": "궁극적인 절망과 동시에 희미한 희망"
		},
		"rising": {
			"mood": "점점 고조되는 불안감과 절박함",
			"narrative_role": "진실에 대한 탐색과 절망적인 투쟁",
			"tension": 3
		}
	},
	"chapter_name": {
		"hindi": "अंगूठी की गूँज",
		"english": "Echoes of the Ring",
		"french": "Échos de l'Anneau",
		"vietnamese": "Tiếng Vọng Của Nhẫn",
		"japanese": "環の残響",
		"thai": "เสียงสะท้อนของแหวน",
		"spanish": "Ecos del Anillo",
		"korean": "고리의 메아리",
		"chinese": "环之回响"
	},
	"scenarioOutline": [
		{
			"act": "intro",
			"title": "무너진 경계, 환상의 서곡",
			"summary": "1편의 사건 이후, 현실과 환상의 경계가 무너진 세계. 주인공은 자신이 여전히 반지의 영향 아래 있음을 깨닫고 혼란에 빠진다. 고립된 현자 애쉬는 주인공에게 세계를 잠식하는 '무의 고리'의 진정한 위협에 대해 경고하며, 파편화된 진실을 쫓을 것을 종용한다.",
			"boss": "random_boss",
			"order": 1,
			"npc": "ash"
		},
		{
			"npc": "soot",
			"boss": "random_boss",
			"title": "메아리치는 욕망의 숲",
			"summary": "점점 현실을 잠식하는 '무의 고리'의 환상 속에서, 주인공은 과거 아르카인의 영향을 받았던 방랑자 수렁을 만난다. 수렁은 반지의 힘에 고통받으면서도, 과거 자신이 본 환상들을 통해 고리가 원하는 것이 단순한 파괴가 아님을 암시한다. 주인공은 수렁의 기억 조각들을 통해 고리의 숨겨진 의도를 엿본다.",
			"act": "rising",
			"order": 2
		},
		{
			"title": "거울 속 조각난 진실",
			"summary": "세계의 혼란 속에서 강인한 전사 마라와 조우한다. 마라는 고리의 침식으로 가족을 잃고 복수를 맹세한 상태. 그녀는 주인공과 함께 고리의 환상을 헤쳐나가며, 거울처럼 뒤틀린 현실 속에서 반지의 진정한 기원과 파괴적인 힘에 대한 단서를 발견한다. 마라의 희생은 주인공에게 큰 영향을 미친다.",
			"boss": "random_boss",
			"act": "rising",
			"order": 3,
			"npc": "mara"
		},
		{
			"npc": "vex",
			"order": 4,
			"title": "유혹하는 공허의 속삭임",
			"summary": "고리의 영향력이 최고조에 달한 곳에서, 주인공은 신비로운 존재 벡스와 마주한다. 벡스는 고리의 침식은 결국 완전한 평화로 이끄는 과정이라며 주인공을 회유한다. 그는 고리가 모든 존재의 욕망을 반영하여 '완성'되는 존재임을 역설하고, 주인공의 의지 또한 고리의 일부가 될 운명임을 강조한다. 벡스의 달콤한 유혹은 주인공의 신념을 흔든다.",
			"boss": "random_boss",
			"act": "rising"
		},
		{
			"npc": "ash",
			"boss": "pool_082",
			"title": "고리의 완성, 허상의 종말",
			"summary": "마침내 '무의 고리'의 중심으로 향한 주인공은 계승자 아르카인과 재회한다. 애쉬는 마지막 순간까지 고대의 지식을 전달하며 주인공을 돕는다. 아르카인은 완전한 고리의 현신이 되어 주인공에게 최후의 선택을 강요한다. 모든 현실이 허상이었음을 깨달은 주인공은, 고리의 완성으로 모든 것을 끝낼 것인가, 아니면 진정한 현실을 되찾기 위해 불가능한 저항을 할 것인가의 기로에 선다.",
			"act": "climax_finale",
			"order": 5
		}
	],
	"protagonist_goal": "1편에서 '무의 고리'의 존재와 반지의 진정한 의지를 알게 된 주인공은, 자신이 여전히 반지의 영향 아래 놓여 있음을 깨닫는다. 세계가 고리의 침식으로 파괴되는 것을 막기 위해, 주인공은 반지의 근원적인 힘을 완전히 끊어내거나, 아니면 고리의 진정한 목표를 이해하고 역설적으로 이를 이용해 세계를 구원할 방법을 찾아야 한다. 이 과정에서 자신이 진정한 현실과 마주할 준비가 되어 있는지 스스로에게 묻게 된다."
};
