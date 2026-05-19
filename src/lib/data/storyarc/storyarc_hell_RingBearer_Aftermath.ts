import type { StoryArc } from '$lib/types';

export const storyarc_hell_RingBearer_Aftermath: StoryArc = {
	"act_tone": {
		"rising": {
			"narrative_role": "주인공의 위기와 아르카인의 진실에 접근",
			"tension": 3,
			"mood": "점점 고조되는 불안감과 위협"
		},
		"climax_finale": {
			"narrative_role": "모든 진실이 폭로되고 운명이 결정됨",
			"mood": "궁극의 공포와 최후의 선택",
			"tension": 5
		},
		"intro": {
			"narrative_role": "사건의 시작과 세계의 변화를 제시",
			"tension": 1,
			"mood": "절망적이고 혼란스러움"
		}
	},
	"scenarioOutline": [
		{
			"title": "잔영의 시작",
			"summary": "1편의 사건 이후, 폭주하는 아르카인의 힘에 잠식된 회랑에 발을 들인다. 기억을 잃은 애쉬가 '반지의 속삭임'에 대해 혼란스러워하며 중얼거린다.",
			"npc": "ash",
			"act": "intro",
			"order": 1,
			"boss": "random_boss"
		},
		{
			"npc": "brim",
			"summary": "회랑 곳곳에 걸린 금이 간 거울에서 환상이 펼쳐진다. 브림은 그 환상이 아르카인의 축복이라며 주인공을 유혹하고, 거울 속에서 또 다른 자신이 나타나 싸움을 건다.",
			"title": "거울 속의 그대",
			"order": 2,
			"act": "rising",
			"boss": "random_boss"
		},
		{
			"title": "과거의 속삭임",
			"summary": "아르카인의 저주에 저항하려는 캐릭터를 만난다. 그는 과거 자신이 아르카인에게 조종당했던 경험을 이야기하며, 주인공 역시 그 운명에서 벗어날 수 없을 것이라고 경고한다.",
			"npc": "char",
			"act": "rising",
			"order": 3,
			"boss": "random_boss"
		},
		{
			"npc": "cinder",
			"summary": "신더는 반지의 진정한 기원에 대한 단서를 찾아 헤매고 있다. 그녀는 아르카인이 단지 '진정한 반지'의 현신일 뿐이며, 그 뒤에 더 큰 존재가 있음을 암시한다.",
			"title": "파편화된 진실",
			"boss": "random_boss",
			"order": 4,
			"act": "rising"
		},
		{
			"title": "무의 고리",
			"npc": "ash",
			"summary": "아르카인과의 마지막 결전. 모든 진실이 폭로되고, 아르카인이 1편에서 '반지를 원한 순간부터… 넌 이미 나였다'고 했던 말이 사실은 끝나지 않는 순환의 시작이었음을 깨닫는다. 애쉬는 마지막 순간, 희미하게 '이 저주를 멈춰줘...'라고 애원한다.",
			"order": 5,
			"act": "climax_finale",
			"boss": "pool_082"
		}
	],
	"id": "RingBearer_Aftermath",
	"rising_count": 3,
	"chapter_name": {
		"french": "Les Échos de l'Anneau",
		"korean": "반지의 잔영",
		"vietnamese": "Vọng Âm Của Chiếc Nhẫn",
		"chinese": "戒指的回响",
		"japanese": "指輪の残響",
		"spanish": "Ecos del Anillo",
		"english": "Echoes of the Ring",
		"hindi": "अंगूठी की गूँज",
		"thai": "เสียงสะท้อนของแหวน"
	},
	"act_summary": {
		"climax_finale": "아르카인과의 최후의 대결에서 모든 비밀이 밝혀진다. 1편의 반전이 사실은 더 큰 순환의 시작이었음을 깨닫고, 주인공은 이 저주받은 연결고리를 끊기 위한 궁극적인 선택에 직면한다.",
		"rising": "거울 속 환상, 과거의 그림자, 그리고 반지의 진정한 기원에 대한 단서들이 하나씩 드러나며 아르카인의 영향력이 점차 커져감을 느낀다. 주인공은 자신의 운명과 세계의 위협 사이에서 갈등한다.",
		"intro": "폭주하는 아르카인의 힘에 잠식된 세계의 혼란 속에서 새로운 여정이 시작된다. 기억을 잃은 방랑자와 왜곡된 현실 속에서 아르카인의 흔적을 쫓는다."
	},
	"final_boss": {
		"id": "RingBearer_V0",
		"name": "계승자 아르카인 (Arkhain)",
		"appearance_npc": "A calm, composed wanderer cloaked in desert-stained robes. A faint golden ring hangs from a chain around his neck, never worn. He speaks with quiet authority, offering guidance about power, destiny, and \"what must be done.\" His presence feels reassuring, like someone who understands your burdens.",
		"appearance_boss": "A fractured entity made of countless overlapping versions of itself, each wearing the ring on a different finger. Some are kings, some are corpses, some are shadows. The ring glows violently, stretching reality around it. Limbs duplicate and collapse, as if multiple futures are fighting to exist at once. The ground beneath becomes a warped throne room of broken crowns and melted gold.",
		"surface_identity": "반지의 힘을 이해하고 통제할 수 있는 유일한 안내자. 올바른 사용법을 알려주는 조력자.",
		"true_identity": "반지를 \"소유\"하려는 모든 가능성이 집합된 존재. 누구든 반지를 가지려는 순간, 그 욕망이 이 존재를 완성시킨다. 즉, 플레이어의 선택이 곧 이 보스를 만든다.",
		"motivation": "내가 1편에서 '반지를 원한 순간부터 넌 이미 나였다'고 말했듯이, 이 세계의 모든 존재는 결국 반지의 일부가 될 운명이다. 나는 그저 그 과정을 가속화할 뿐이다. 조각난 자아들을 하나로 모아 완전한 '우리'를 만들 때 비로소 진정한 평화가 찾아올 것이다.",
		"twist": "마침내 아르카인을 쓰러뜨린 순간, 반지의 힘이 폭주하며 주변 시공간이 찢어진다. 그때 멀리서 '네가 반지를 원하며 흘려보낸 욕망이 아직도 이곳을 잠식하고 있다'는 속삭임이 들려온다. 아르카인은 그저 '반지 그 자체'의 의지를 대변하는 꼭두각시에 불과했음을 깨닫는다. 그는 희생자였고, 진정한 흑막은 모든 현실을 초월해 존재하는 '무의 고리'였다. 너 역시 반지에 묶인 채 다음 아르카인이 될 운명임을 알게 된다."
	},
	"theme": "hell",
	"world": {
		"rule": "반지의 힘에 잠식된 존재들은 영원히 고통받으며, 스스로의 의지를 잃고 아르카인의 일부가 된다. 이 회랑에서 벗어나려면 반지의 근원을 이해하고 그 힘을 역전시켜야 한다. 그러나 모든 시도는 더 깊은 심연으로 이끌 뿐이다.",
		"secret": "아르카인은 단순한 존재가 아니었다. 그는 반지에 의해 '창조된' 첫 번째 계승자에 불과했다. 이 세계를 집어삼키는 진정한 흑막은 '반지 그 자체'이며, 아르카인은 단지 그 의지의 현신일 뿐이다. 반지의 진정한 목적은 모든 존재를 자신에게 동화시켜 완전한 '하나'를 이루는 것이다.",
		"setting": "1편의 사건 이후, 왕좌의 회랑은 더욱 깊은 심연으로 변했다. '계승자 아르카인'의 힘이 폭주하며 현실과 환상이 뒤섞이고, 파편화된 그의 자아가 회랑 곳곳에 저주처럼 스며들었다. 반지의 저주는 끝나지 않았고, 이제 그 힘은 세계 전체를 서서히 잠식하고 있다."
	},
	"npc_roles": {
		"ash": {
			"role": "아르카인의 폭주로 인해 기억을 잃고 헤매는 방랑자. 자신이 누구였는지, 왜 이곳에 있는지 혼란스러워하며 주인공에게 단편적인 정보를 흘린다.",
			"arc": "기억의 파편을 찾아 자신의 정체성을 회복하려 하지만, 결국 반지의 저주에 대한 희미한 기억과 함께 주인공에게 마지막 조언을 남긴다."
		},
		"char": {
			"role": "아르카인의 영향력에서 벗어나기 위해 노력하는 저항자. 그러나 그 역시 과거 아르카인의 조종을 받았던 트라우마에 시달리고 있으며, 주인공에게 경고와 함께 때로는 모순된 정보를 제공한다.",
			"arc": "자신의 트라우마를 극복하고 주인공을 돕기 위해 노력하지만, 아르카인의 강력한 환상에 다시 사로잡히며 잠시 주인공을 방해하게 된다."
		},
		"cinder": {
			"role": "반지의 진정한 기원과 아르카인의 비밀에 대해 은밀히 조사하는 지식인. 위험을 감수하고 진실을 파헤치려 하며, 주인공에게 결정적인 단서를 제공하지만 그 대가를 요구한다.",
			"arc": "반지의 위험을 경고하며 주인공에게 진실에 접근할 수 있는 고대 문서를 제공하지만, 그 대가로 주인공의 일부 기억을 요구한다."
		},
		"brim": {
			"role": "아르카인의 힘에 매료되어 그를 숭배하는 광신도. 아르카인의 일부가 되어 영원한 힘을 얻으려 하며, 주인공을 유혹하거나 방해한다.",
			"arc": "점점 더 아르카인의 힘에 집착하며 광기를 드러내고, 결국 그의 일부가 되어 주인공에게 대적한다."
		}
	},
	"protagonist_goal": "폭주하는 아르카인의 힘을 억제하고, 자신이 계승자 아르카인이 되는 것을 막거나, 이미 된 자신으로부터 세상을 구원할 방법을 찾아야 한다. 이 저주받은 연결고리를 끊어내야 한다.",
	"global_foreshadowing": [
		{
			"hint": "회랑 벽에 금이 간 거울들이 걸려있다. 거울 속 자신의 모습이 때때로 다른 형상으로 일그러진다.",
			"id": "broken_mirror",
			"reveal_act": "rising",
			"plant_room": 3,
			"reveal_room": 7,
			"reveal_context": "환영에 갇힌 채 거울 속 자신과 싸우게 되는데, 거울 속 적의 모습이 점점 아르카인으로 변해간다.",
			"plant_act": "intro"
		},
		{
			"reveal_room": 9,
			"reveal_context": "클라이맥스에서 아르카인의 진정한 동기가 밝혀질 때, 그 속삭임이 바로 '반지'의 목소리였음을 깨닫는다. '그때 반지를 원했던 너의 목소리'와 정확히 일치한다.",
			"plant_act": "rising",
			"hint": "어둠 속에서 알 수 없는 언어로 속삭이는 소리가 들린다. 때로는 자신을 부르는 듯하다가도, 이내 끔찍한 비명으로 변한다.",
			"id": "whispering_echoes",
			"reveal_act": "climax_finale",
			"plant_room": 2
		},
		{
			"plant_act": "intro",
			"reveal_room": 12,
			"reveal_context": "마지막 결전에서 아르카인이 보여주는 환상 속에서, 자신이 반지를 가지기 전의 과거와 그로 인해 희생된 자들의 모습이 생생하게 재현된다.",
			"plant_room": 6,
			"hint": "이전에 알던 인물들의 모습이 파편화된 기억처럼 섬광으로 스쳐 지나간다. 그들의 얼굴은 공포에 질려있다.",
			"id": "lost_memories",
			"reveal_act": "climax_finale"
		},
		{
			"reveal_room": 10,
			"reveal_context": "아르카인을 쓰러뜨려도 이 비극이 끝나지 않는다는 사실, 즉 '반지를 원한 순간부터 넌 이미 나였다'는 1편의 반전이 결국 끊어낼 수 없는 순환이었음을 깨닫는 순간.",
			"plant_act": "rising",
			"hint": "회랑의 특정 지점들이 끊임없이 반복되는 듯한 기시감이 든다. 과거의 발자취와 현재의 길 사이에 묘한 연결고리가 느껴진다.",
			"id": "the_eternal_loop",
			"reveal_act": "climax_finale",
			"plant_room": 4
		}
	]
};
