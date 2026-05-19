import type { StoryArc } from '$lib/types';

export const storyarc_desert_oblivion_spirit_sequel: StoryArc = {
	"chapter_name": {
		"hindi": "विस्मृति का पाताल, आत्मा का गीत",
		"vietnamese": "Vực Thẳm Lãng Quên, Khúc Ca Thần Linh",
		"japanese": "忘却の深淵、精霊の歌",
		"chinese": "遗忘深渊，精灵之歌",
		"english": "Abyss of Oblivion, Song of the Spirit",
		"korean": "망각의 심연, 정령의 노래",
		"spanish": "El Abismo del Olvido, El Canto del Espíritu",
		"thai": "ห้วงลึกแห่งการลืมเลือน, เพลงขับของวิญญาณ",
		"french": "L'Abîme de l'Oubli, Le Chant de l'Esprit"
	},
	"global_foreshadowing": [
		{
			"id": "AncientEchoes",
			"hint": "사막 고대 문명의 문양과 언어가 망각의 정령의 흔적과 유사하다는 것을 발견한다.",
			"reveal_context": "사라진 줄 알았던 고대 문명이 사실은 망각의 정령을 봉인하기 위해 존재했다는 사실이 밝혀진다.",
			"plant_room": 3,
			"plant_act": "intro",
			"reveal_act": "rising",
			"reveal_room": 7
		},
		{
			"id": "SpiceResonance",
			"hint": "사하르가 사용했던 향신료의 잔향이 특정 지역에서 유난히 강하게 느껴지고, 그곳에서 사람들이 더 빨리 기억을 잃는다.",
			"plant_room": 5,
			"reveal_context": "향신료의 잔향이 망각의 정령을 봉인했던 고대 유물의 파편과 공명하여 정령의 힘을 증폭시키고 있었음이 드러난다.",
			"reveal_room": 9,
			"reveal_act": "climax_finale",
			"plant_act": "rising"
		},
		{
			"plant_room": 8,
			"reveal_context": "그들의 반복적인 행동은 망각의 정령에게 대항했던 고대 문명의 마지막 저항 의식이었음이 밝혀진다.",
			"id": "ForgottenMemories",
			"hint": "기억을 잃은 사람들이 무의식중에 특정 단어나 행동을 반복하며 알 수 없는 고통을 호소한다.",
			"reveal_act": "climax_finale",
			"reveal_room": 11,
			"plant_act": "intro"
		},
		{
			"id": "SaharVestige",
			"hint": "폐허가 된 연회장에서 사하르의 흔적과 함께, 그가 숨겨두었던 듯한 오래된 조리 도구가 발견된다.",
			"reveal_context": "그 조리 도구는 사하르가 정령에게 잠식당하기 직전, 스스로의 의지로 정령의 힘을 약화시킬 방법을 기록해두었던 일종의 암호 해독기였다.",
			"plant_room": 4,
			"plant_act": "rising",
			"reveal_act": "climax_finale",
			"reveal_room": 10
		}
	],
	"theme": "desert",
	"world": {
		"rule": "망각의 정령의 힘은 사람들의 기억을 조작하고 삭제할 수 있다. 기억을 잃은 자들은 정령의 꼭두각시가 되어 무의미한 환상을 쫓거나 폭력적으로 변한다. 정령의 영향력 아래에서는 현실과 환상의 경계가 더욱 모호해지며, 잃어버린 기억은 쉽게 되찾을 수 없다.",
		"secret": "망각의 정령은 사막의 고대 문명이 금지했던 존재였다. 사하르가 사용했던 향신료는 사실 정령의 봉인에 쓰였던 유물이었고, 사하르의 실패로 봉인이 풀린 것이 아니라, 봉인이 풀린 정령이 사하르를 조종해 자신의 부활을 위한 제물로 삼으려 했던 것이었다. 정령은 사하르의 잔재를 이용해 완전히 부활하려 한다.",
		"setting": "사하르의 환상이 걷힌 후 사막은 황폐해졌지만, 사람들의 정신에는 깊은 상흔이 남았다. '망각의 정령'의 영향으로 사막 전역에 환각과 기억 상실이 만연하고 있으며, 정령은 사하르가 남긴 '환각 향신료'의 잔향을 통해 자신의 힘을 증폭시키려 한다. 사막의 오아시스조차 그 영향에서 벗어나지 못하고 있다."
	},
	"id": "desert_oblivion_spirit_sequel",
	"act_tone": {
		"intro": {
			"narrative_role": "새로운 위협의 등장과 주인공의 고뇌",
			"tension": 1,
			"mood": "쓸쓸함, 상실감"
		},
		"climax_finale": {
			"narrative_role": "모든 것을 건 최후의 대결과 새로운 시작",
			"mood": "절망, 희망, 격렬함",
			"tension": 5
		},
		"rising": {
			"mood": "불안, 절박함, 의심",
			"tension": 3,
			"narrative_role": "점점 커지는 위협 속에서 진실을 파헤치는 여정"
		}
	},
	"act_summary": {
		"rising": "망각의 정령의 영향력이 사막 전역으로 퍼져나가고, 기억을 잃은 자들이 늘어난다. 주인공은 고대 문명의 후예 앰버를 만나 정령의 기원과 봉인 방법을 추적하며, 무역상 페로의 욕망이 정령의 힘을 증폭시키는 것을 막아야 한다. 사하르가 남긴 향신료의 잔향이 정령의 부활과 연결되어 있음을 알게 된다.",
		"climax_finale": "망각의 정령은 사하르의 잔재와 향신료의 힘을 이용해 '심연의 연회'를 열어 사막 전체의 기억을 영원히 지우려 한다. 주인공은 아미르의 조언과 사하르의 마지막 단서를 통해 정령의 약점을 파악하고, 모든 것을 건 최후의 대결에서 정령을 다시 봉인하여 사막에 진정한 평화를 가져오기 위해 싸운다.",
		"intro": "사하르의 환상이 사라진 후에도 사막은 '망각의 정령'이라는 새로운 위협에 직면한다. 사람들은 기억을 잃고 혼란에 빠지며, 주인공은 의사 아미르의 경고를 통해 정령의 존재를 알게 되고 그 위협에 맞설 결심을 한다."
	},
	"protagonist_goal": "망각의 정령이 사막 전체를 잠식하기 전에 그 힘을 약화시키고, 사람들의 잃어버린 기억을 되찾아 주며, 정령을 다시 봉인할 방법을 찾아 사막의 진정한 평화를 회복하라.",
	"npc_roles": {
		"ember": {
			"arc": "정령의 역사와 약점에 대한 고대 지식을 전해주어 주인공이 봉인 방법을 찾도록 돕는다. 자신의 운명을 받아들이고 지식을 공유하게 된다.",
			"role": "과거 사막에서 망각의 정령을 연구했던 고대 문명의 후예. 정령을 봉인할 수 있는 유일한 방법을 알고 있으나, 그 지식이 저주받았다고 여겨 숨기고 있다."
		},
		"ashur": {
			"arc": "망각의 정령의 피해를 가장 직접적으로 보여주는 인물. 주인공이 정령의 힘을 깨닫고 위험성을 인지하게 하는 계기가 된다.",
			"role": "사하르의 환상에 깊이 빠졌다가 겨우 벗어났지만, 망각의 정령의 영향으로 다시 기억을 잃어가는 방랑자. 정령의 유혹에 취약하며 주인공의 경고가 된다."
		},
		"amir": {
			"role": "주인공을 돕는 유일한 의술사이자 사막의 고대 지식에 해박한 현자. 망각의 정령에 대한 단서를 제공하며, 기억을 잃은 사람들을 치료하려 노력한다.",
			"arc": "망각의 정령의 위협을 알리고, 봉인 방법을 찾는 데 핵심적인 역할을 한다. 최후의 대결에서 주인공에게 결정적인 조언을 제공한다."
		},
		"ferro": {
			"role": "사막의 무역상. 망각의 정령의 영향으로 사막의 상업이 마비되자, 이 상황을 이용해 이득을 취하려는 기회주의자. 정령의 힘을 오용하려다 위험에 처한다.",
			"arc": "정령의 힘을 탐하다가 스스로 망각에 빠질 위기에 처하고, 이를 통해 정령의 위험성을 주인공에게 다시 한번 각인시킨다. 나중에는 회개하고 주인공을 돕기도 한다."
		}
	},
	"rising_count": 3,
	"scenarioOutline": [
		{
			"boss": "random_boss",
			"summary": "사하르의 환상이 걷힌 후에도 사막은 여전히 고통받는다. 사람들은 기억을 잃어가고, 폐허가 된 연회장에서는 알 수 없는 환영이 나타난다. 주인공은 의사 아미르로부터 '망각의 정령'에 대한 경고를 듣는다.",
			"title": "잊혀진 약속, 폐허의 메아리",
			"order": 1,
			"npc": "amir",
			"act": "intro"
		},
		{
			"summary": "망각의 정령의 영향력이 사막 전역으로 확산되고, 방랑자 아슈르는 기억을 잃고 헤맨다. 주인공은 아슈르를 쫓아 정령의 힘이 발원하는 곳에 다다르지만, 그곳은 이미 환상과 현실이 뒤섞인 아비규환이다.",
			"boss": "random_boss",
			"order": 2,
			"act": "rising",
			"npc": "ashur",
			"title": "모래 속의 망각, 방랑자의 고뇌"
		},
		{
			"title": "고대 서판, 봉인의 비밀",
			"act": "rising",
			"npc": "ember",
			"order": 3,
			"boss": "random_boss",
			"summary": "주인공은 망각의 정령에 대항할 방법을 찾기 위해 고대 기록을 추적하고, 정령을 봉인했던 고대 문명의 후예 앰버와 마주한다. 앰버는 봉인에 대한 충격적인 진실을 털어놓는다."
		},
		{
			"title": "향신료의 유혹, 상인의 거래",
			"npc": "ferro",
			"act": "rising",
			"order": 4,
			"boss": "random_boss",
			"summary": "망각의 정령은 사하르가 남긴 향신료의 잔향을 이용해 사람들을 유혹하고, 무역상 페로는 정령의 힘을 이용해 이득을 취하려 한다. 주인공은 페로의 위험한 거래를 막고 향신료의 진짜 용도를 파악한다."
		},
		{
			"act": "climax_finale",
			"npc": "amir",
			"order": 5,
			"title": "심연의 연회, 기억의 파편",
			"summary": "망각의 정령은 사하르의 잔재를 이용해 '심연의 연회'를 열고 사막 전체를 영원한 망각으로 만들려 한다. 주인공은 아미르의 도움으로 정령의 봉인을 시도하고, 사하르의 마지막 메시지를 통해 정령의 약점을 깨닫는다. 현실과 망각 사이의 마지막 대결이 펼쳐진다.",
			"boss": "pool_051"
		}
	],
	"final_boss": {
		"id": "MirageChef_V0",
		"name": "환상의 조리사 사하르 (Sahar)",
		"appearance_npc": "A warm, generous chef in desert robes offering steaming dishes from a floating golden tray. His smile is wide and his eyes are kind. The food smells incredible. Everything looks real.",
		"appearance_boss": "A flamboyant desert chef riding atop a massive, walking oven shaped like a sandstone tortoise. His body constantly flickers between different forms — young, old, male, female — like heat haze distortions. Around him float dozens of golden cooking utensils, each dripping with glowing, illusory dishes that evaporate into sand when touched. His eyes burn like twin coals, and a long ribbon of spice-infused smoke trails behind him, forming ghostly banquets in the air.",
		"surface_identity": "사막 한가운데서 환상의 연회를 베푸는 미친 요리사. 굶주린 자들에게 \"최고의 한 끼\"를 제공한다.",
		"true_identity": "과거 왕국의 궁정 요리사. 기근 속에서 사람들을 살리기 위해 환각 향신료를 개발했지만, 사람들은 실제 음식을 먹지 않고 환상에만 의존하다 모두 굶어 죽었다. 그는 \"배부른 환상\"이 \"고통스러운 현실\"보다 낫다고 믿게 되었다.",
		"motivation": "나는 망각의 정령에게 잠식당하며 모든 것을 잃었던 과거를 되풀이하지 않을 것이다. 이제 사람들은 환상 대신 망각으로 고통에서 해방될 것이다. 예전처럼 고통스러운 현실을 굳이 붙잡으려 했던 어리석음은 더 이상 없을 것이다.",
		"twist": "사하르는 사실 완전히 정령에게 흡수된 것이 아니었다. 그는 정령에게 저항하며 주인공에게 단 하나의 진실을 보여주기 위해 스스로 망각 속에서 환영으로 존재했다. 그의 마지막 요리는 '현실을 기억하라'는 침묵의 외침이었다. 과거 망각의 정령이 나를 조종해 사람들을 환상으로 이끌었던 것처럼, 이번에는 '망각' 그 자체를 통해 영원한 안식을 주려 한다."
	}
};
