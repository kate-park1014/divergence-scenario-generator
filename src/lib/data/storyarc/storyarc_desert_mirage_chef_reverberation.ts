import type { StoryArc } from '$lib/types';

export const storyarc_desert_mirage_chef_reverberation: StoryArc = {
	"final_boss": {
		"id": "MirageChef_V0",
		"name": "환상의 조리사 사하르 (Sahar)",
		"appearance_npc": "A warm, generous chef in desert robes offering steaming dishes from a floating golden tray. His smile is wide and his eyes are kind. The food smells incredible. Everything looks real.",
		"appearance_boss": "A flamboyant desert chef riding atop a massive, walking oven shaped like a sandstone tortoise. His body constantly flickers between different forms — young, old, male, female — like heat haze distortions. Around him float dozens of golden cooking utensils, each dripping with glowing, illusory dishes that evaporate into sand when touched. His eyes burn like twin coals, and a long ribbon of spice-infused smoke trails behind him, forming ghostly banquets in the air.",
		"surface_identity": "사막 한가운데서 환상의 연회를 베푸는 미친 요리사. 굶주린 자들에게 \"최고의 한 끼\"를 제공한다.",
		"true_identity": "과거 왕국의 궁정 요리사. 기근 속에서 사람들을 살리기 위해 환각 향신료를 개발했지만, 사람들은 실제 음식을 먹지 않고 환상에만 의존하다 모두 굶어 죽었다. 그는 \"배부른 환상\"이 \"고통스러운 현실\"보다 낫다고 믿게 되었다.",
		"motivation": "사하르는 1편에서 '배고픔이라는 개념을 없애려 했던' 자신의 방식이 실패했음을 깨달았지만, 여전히 사람들이 고통스러운 현실 대신 영원한 망각 속에서 평화를 찾기를 바란다. 이제 그는 직접적으로 환상을 주입하기보다는, 망각의 정령을 통해 사람들의 기억과 고통 자체를 지우려 한다.",
		"twist": "마침내 밝혀진 사하르의 진짜 정체는 망각의 정령에게 잠식당한 꼭두각시였다. 그가 이전에 '왜 그렇게까지 현실을 고집하는지' 물었던 것은, 이미 자신조차 현실과 환상의 경계가 무너진 채 정령의 의지에 지배당하고 있었기 때문이었다. 그의 모든 행동은 정령이 사막을 완전한 망각으로 채우기 위한 계획의 일부였다."
	},
	"protagonist_goal": "사하르의 환상에서 벗어난 사람들에게 남겨진 정신적 후유증을 치료하고, 사막 전체를 위협하는 '망각의 정령'의 각성을 막아라.",
	"id": "desert_mirage_chef_reverberation",
	"act_tone": {
		"rising": {
			"tension": 3,
			"mood": "절망, 혼돈",
			"narrative_role": "점점 심화되는 위기, 진실에 다가서는 고난"
		},
		"intro": {
			"mood": "불안, 경계",
			"tension": 1,
			"narrative_role": "새로운 위협의 전조, 잔존하는 고통"
		},
		"climax_finale": {
			"tension": 5,
			"mood": "광기, 비극",
			"narrative_role": "숨겨진 비극의 폭발, 최종적인 선택과 대가"
		}
	},
	"act_summary": {
		"rising": "사막 전체로 망각의 증상이 퍼져나가고, 사람들은 기억을 잃어간다. 고대 기록을 통해 '망각의 정령'의 존재가 드러나고, 사하르가 이전에 사용했던 향신료가 정령의 봉인을 약화시켰다는 충격적인 사실이 밝혀진다. 정령은 사하르의 환상을 재림시켜 사람들을 유인한다.",
		"intro": "사하르의 환상이 걷힌 사막은 새로운 망각의 그림자에 휩싸인다. 생존자들은 후유증에 시달리고, 폐허가 된 연회장에서는 알 수 없는 징조들이 나타난다.",
		"climax_finale": "망각의 정령은 사하르를 조종하여 최종적인 망각의 연회를 열고 사막 전체를 영원한 고통 없는 망각으로 만들려 한다. 주인공은 사하르와의 대결 끝에 그가 정령의 꼭두각시였음을 알게 되고, 정령의 유혹에 맞서 현실과 망각의 경계를 지키기 위한 마지막 싸움을 벌인다."
	},
	"theme": "desert",
	"global_foreshadowing": [
		{
			"reveal_room": 7,
			"plant_room": 3,
			"reveal_act": "rising",
			"hint": "사막 곳곳에 피어나는 묘한 향신료 향.",
			"plant_act": "intro",
			"id": "fs_01",
			"reveal_context": "NPC가 갑자기 옛날 일을 잊거나 헛소리를 함."
		},
		{
			"plant_room": 5,
			"reveal_act": "climax_finale",
			"reveal_room": 11,
			"id": "fs_02",
			"reveal_context": "노랫소리가 정령의 언어임을 알게 됨.",
			"hint": "밤마다 들려오는 알 수 없는 노랫소리.",
			"plant_act": "intro"
		},
		{
			"plant_act": "rising",
			"hint": "사막 동물들이 특정 장소에 모여들어 아무것도 하지 않고 앉아있음.",
			"reveal_context": "동물들이 과거를 잊고 무의미하게 행동한다는 것을 발견.",
			"id": "fs_03",
			"reveal_act": "climax_finale",
			"plant_room": 2,
			"reveal_room": 9
		},
		{
			"plant_act": "rising",
			"hint": "모래 속에 파묻힌 고대 유물에서 발견된 이상한 문양.",
			"reveal_context": "문양이 망각의 정령을 봉인했던 고대 주문의 일부임을 깨닫는다.",
			"id": "fs_04",
			"reveal_room": 13,
			"reveal_act": "climax_finale",
			"plant_room": 6
		}
	],
	"npc_roles": {
		"ashur": {
			"arc": "망각에 잠식된 희생양",
			"role": "사하르의 환상에 깊이 물들어 기억을 잃어가고 있는 사막 주민. 현실을 망각하고 과거의 행복했던 환상 속에 갇히는 인물로, 주인공에게 망각의 정령이 미치는 영향력을 생생하게 보여주는 피해자이다. 아슈르를 구하려는 시도는 주인공에게 더 큰 절망을 안겨줄 수 있다."
		},
		"dune": {
			"role": "사하르의 연회에서 살아남은 생존자 중 한 명. 환각의 후유증으로 고통받으면서도 주인공을 돕기 위해 애쓰는 조력자. 주인공에게 사막의 변화와 사람들의 절망에 대한 정보를 제공하며, 때로는 자신의 과거 환상에 대한 고통스러운 기억과 싸워야 한다.",
			"arc": "환각의 고통 속에서 희망을 찾음"
		},
		"amir": {
			"arc": "불안한 감시자에서 조심스러운 협력자로",
			"role": "사막을 떠도는 방랑자이자 떠돌이 상인. 과거 사하르의 연회를 멀리서 목격했으며, 그 후유증으로 사막의 질서가 무너지는 것을 불안하게 지켜본다. 주인공에게 희귀한 정보나 물품을 제공하기도 하지만, 자신의 안전을 최우선으로 여겨 때로는 주인공을 시험하거나 의심한다."
		},
		"kemet": {
			"role": "고대 사막 문명과 전설에 정통한 학자. 사하르의 사건 이후 사막에 나타나는 기이한 현상들을 연구하며 '망각의 정령'에 대한 고대 기록을 찾아낸다. 주인공에게 정령의 본질과 봉인 방법에 대한 결정적인 지식을 제공하지만, 그 지식은 너무나도 충격적이고 파괴적일 수 있다.",
			"arc": "잃어버린 지식의 수호자"
		}
	},
	"world": {
		"rule": "환각 향신료의 부작용은 신체뿐 아니라 정신까지 황폐하게 만들 수 있다. 특정 자극에 과도하게 반응하거나, 현실과 환상의 경계를 혼동하는 증상이 나타난다. 이 부작용은 한번 겪었던 이들에게 더 치명적이다.",
		"setting": "사하르의 환상이 깨진 후, 사막은 더욱 맹렬한 현실을 드러낸다. 사람들은 환각이 남긴 정신적 고통과 실제 기근의 그림자 속에서 필사적으로 생존을 모색한다. 과거 사하르의 연회가 열렸던 곳은 이제 모래 폭풍이 휘몰아치는 폐허가 되었다. 하지만 그곳에서 여전히 묘한 향신료의 잔향이 느껴진다는 소문이 돈다.",
		"secret": "사하르의 환상은 단순히 사라진 것이 아니었다. 그가 사용했던 고대 향신료의 주성분은 사막 깊은 곳에 봉인된 존재, '망각의 정령'과 연결되어 있었다. 사하르의 실패로 향신료의 봉인이 약해지면서, 정령은 사막 사람들의 절망을 양분 삼아 서서히 깨어나고 있다."
	},
	"rising_count": 3,
	"scenarioOutline": [
		{
			"summary": "사하르의 연회가 끝난 후 폐허가 된 장소에서 탐험대는 생존자 Dune을 만난다. Dune은 환각의 후유증으로 고통받으며 사막에 퍼지는 기이한 망각의 증상을 경고한다. 폐허에서는 여전히 묘한 향신료의 잔향이 느껴지며, 밤마다 알 수 없는 노랫소리가 들린다.",
			"npc": "dune",
			"boss": "random_boss",
			"act": "intro",
			"title": "망각의 잔향, 폐허가 된 연회",
			"order": 1
		},
		{
			"summary": "망각의 증상이 심화된 마을에서 탐험대는 자신의 이름조차 잊어버린 Ashur를 발견한다. Ashur는 과거 사하르의 연회에 참석했던 인물로, 이제는 현실을 부정하고 행복했던 환상 속에서 살아가려 한다. Amir로부터 이 지역에서 이상한 향신료가 재배되고 있다는 정보를 얻는다.",
			"npc": "ashur",
			"boss": "random_boss",
			"title": "잊혀진 기억, 사라지는 이름들",
			"order": 2,
			"act": "rising"
		},
		{
			"npc": "kemet",
			"summary": "Kemet은 고대 사막 문명의 유적에서 망각의 정령에 대한 기록을 발견한다. 기록에 따르면 정령은 사람들의 절망과 상실감을 먹고 자라며, 과거 사하르가 사용했던 향신료가 정령의 봉인을 약화시켰음이 드러난다. Dune은 예전 환상 속에서 정령의 희미한 형체를 본 적이 있다고 고백한다.",
			"title": "고대 기록, 망각의 기원",
			"order": 3,
			"act": "rising",
			"boss": "random_boss"
		},
		{
			"summary": "사막 깊은 곳에서 사하르의 환상 연회가 다시 벌어진다는 소문이 퍼지고, 사람들은 홀린 듯 그곳으로 향한다. Amir는 주인공에게 \"그 환상은 진짜가 아니야, 저번에 우리가 깨달았잖아!\"라며 경고하지만, 이미 많은 이들이 유혹에 빠져들었다. 주인공은 망각의 정령이 사하르의 환상을 이용해 사람들을 유인하고 있음을 깨닫는다.",
			"npc": "amir",
			"boss": "random_boss",
			"act": "rising",
			"title": "환상의 재림, 사하르의 그림자",
			"order": 4
		},
		{
			"summary": "망각의 정령은 사하르를 꼭두각시 삼아 완전한 망각의 연회를 열고 있다. Dune은 자신의 기억이 사라져가는 것을 느끼며 주인공에게 마지막 희망을 건다. 주인공은 정령을 막기 위해 사하르와 대결하고, 그 과정에서 사하르가 이미 정령에게 잠식당했음을 깨닫는다. 정령은 사하르의 모습을 빌려 \"현실의 고통보다 망각의 평화가 낫다\"며 주인공을 유혹한다.",
			"npc": "dune",
			"boss": "pool_051",
			"act": "climax_finale",
			"title": "현실과 망각의 경계, 마지막 연회",
			"order": 5
		}
	],
	"chapter_name": {
		"english": "Sahar's Aftermath: The Feast of Oblivion",
		"hindi": "विस्मृति का भोज, सहार की गूँज",
		"japanese": "忘却の宴、サハールの残響",
		"chinese": "遗忘的盛宴，萨哈尔的余波",
		"spanish": "El Banquete del Olvido, El Eco de Sahar",
		"vietnamese": "Bữa Tiệc Lãng Quên, Dư Âm của Sahar",
		"french": "Le Festin de l'Oubli, L'Écho de Sahar",
		"korean": "망각의 연회, 사하르의 잔재",
		"thai": "งานเลี้ยงแห่งการลืมเลือน, เสียงสะท้อนของซาฮาร์"
	}
};
