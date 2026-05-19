import type { StoryArc } from '$lib/types';

export const storyarc_hell_Noctis_V2_EchoesOfBalance: StoryArc = {
	"world": {
		"setting": "녹티스의 심판과 고대 존재의 각성 이후, 세계는 '불완전한 균형'의 저주에 시달린다. 심연의 균열은 더욱 깊어져 현실 세계의 근간을 침식하고, 영혼들은 계약의 속박에서 벗어나려 몸부림치며 기이한 현상들을 일으킨다. 지상은 끝없이 부유하는 심연의 섬들과 뒤섞여 예측 불가능한 미궁이 되었고, 고대 존재의 영향으로 '진정한 자유'를 갈망하는 이들이 늘어났다. 그러나 그 갈망은 종종 광기로 변질된다.",
		"secret": "1편에서 녹티스가 '균형의 수호자'이며 고대 존재의 부활이 균형을 유지하려는 시도였음이 폭로되었다. 하지만 이 2차 비밀조차 완전한 진실은 아니었다. 사실 고대 존재는 균형을 '유지'하는 것이 아니라, 특정 조건에서만 발동하는 '변화'의 매개체이며, 녹티스는 이 변화를 인위적으로 막으려다 더 큰 균형 붕괴를 초래했다는 사실이 밝혀진다. 진정한 균형은 '정지'가 아닌 '흐름'에 있었다.",
		"rule": "녹티스의 등불은 이제 더 이상 진실만을 비추지 않는다. 고대 존재의 힘이 뒤섞여 진실과 거짓의 경계가 모호해졌고, 등불은 때때로 왜곡된 환영을 보여주며 혼란을 가중시킨다. 계약은 형태를 바꾸어 '불완전한 균형'을 유지하려는 강박적인 의식처럼 작용하며, 계약 파기는 현실에 즉각적인 파멸을 불러온다. '핵심 영혼'을 가진 자만이 심연의 영향을 잠시 거스를 수 있다."
	},
	"scenarioOutline": [
		{
			"order": 1,
			"title": "불완전한 균형의 저주",
			"summary": "녹티스의 심판 이후 세계는 불완전한 균형의 저주에 갇혔다. 균열 속에서 애쉬를 만나 새로운 위협과 '핵심 영혼'의 존재에 대한 단서를 얻고, 뒤틀린 구원자의 흔적을 쫓기 시작한다.",
			"npc": "ash",
			"boss": "random_boss",
			"act": "intro"
		},
		{
			"boss": "random_boss",
			"act": "rising",
			"summary": "그림자를 잃은 전사 드록스가 고대 존재의 힘에 매료되어 타락의 길을 걷고 있음을 발견한다. 그와의 대결을 통해 불완전한 균형이 영혼에 미치는 악영향과 고대 존재의 유혹을 목격한다.",
			"title": "타락한 그림자의 유혹",
			"order": 2,
			"npc": "drox"
		},
		{
			"title": "슬픔에 잠긴 영혼의 외침",
			"summary": "심연의 가장 깊은 곳에서 마라를 다시 만나, 그녀의 비극적인 노래를 통해 불완전한 균형 속에 갇힌 수많은 영혼들의 고통과 녹티스의 행위가 가져온 절망을 체감한다.",
			"order": 3,
			"npc": "mara",
			"boss": "random_boss",
			"act": "rising"
		},
		{
			"order": 4,
			"summary": "세계의 경계에서 미지의 존재 샤르와 마주한다. 샤르는 '균형'이 정지가 아닌 '변화'에 있음을 암시하며, 녹티스의 노력이 사실은 더 큰 불균형을 초래했다는 충격적인 진실의 조각을 던진다.",
			"title": "변화의 서곡: 뒤틀린 진실",
			"npc": "char",
			"boss": "random_boss",
			"act": "rising"
		},
		{
			"npc": "ash",
			"summary": "마침내 '최후의 균열' 앞에서 녹티스의 진정한 목적과 고대 존재가 균형을 '변화'시키는 매개체였음이 밝혀진다. 애쉬의 도움으로 '진정한 균형'의 실마리를 잡은 주인공은, 모든 진실 속에서 세계의 운명을 건 최후의 결전을 치르고 심연의 흐름을 해방시킨다.",
			"title": "심연의 해방자, 새로운 균형",
			"order": 5,
			"act": "climax_finale",
			"boss": "pool_080"
		}
	],
	"theme": "hell",
	"id": "Noctis_V2_EchoesOfBalance",
	"final_boss": {
		"id": "Noctis_V1",
		"name": "심연의 재판관 녹티스 (Noctis)",
		"appearance_npc": "A silent judge dressed in elegant black robes, carrying a lantern filled with pale blue souls. Wherever he walks, distant bells echo through the darkness. He politely greets the party and offers to guide them toward the \"final gate.\"",
		"appearance_boss": "An enormous underworld monarch suspended above an endless abyss. His body is split vertically like two different beings stitched together — one side skeletal and burned, the other unnaturally serene. Behind him float thousands of giant courtroom scales, each holding screaming souls instead of weights.",
		"surface_identity": "길 잃은 자들을 심판하고 출구로 인도하는 재판관.",
		"true_identity": "그는 탈출을 돕는 존재가 아니다. 탐험자들이 스스로 죄를 고백하게 만들어, 영혼을 심연에 귀속시키는 계약의 신이다.",
		"motivation": "고대 존재가 깨어난 후, 심연의 균형은 예측 불가능한 혼돈에 빠졌다. 그는 '고대 존재'의 폭주를 막고, 자신이 일으킨 파멸을 되돌리기 위해 더 많은 '핵심 영혼'을 흡수하여 새로운 인위적인 균형을 재조정해야 한다고 믿는다.",
		"twist": "심연의 진정한 주인이라고 여겨졌던 고대 존재의 뒤에는, 사실 녹티스 자신마저도 인지하지 못했던 '균형'의 근원적인 힘이 존재한다. 그는 과거 자신이 '고대 존재'에게 조종당했던 경험 때문에 진정한 위협을 보지 못하고 있었고, 그로 인해 만들어진 새로운 균형이 사실은 가장 위험한 불균형이었음이 밝혀진다."
	},
	"rising_count": 3,
	"act_tone": {
		"rising": {
			"mood": "점차 고조되는 불안감과 절망",
			"narrative_role": "주인공의 심리적 갈등과 외부 위협 증폭",
			"tension": 3
		},
		"climax_finale": {
			"tension": 5,
			"mood": "광기와 파멸 속의 희망과 선택",
			"narrative_role": "모든 진실이 밝혀지고 세계의 운명이 결정됨"
		},
		"intro": {
			"mood": "음울하고 긴장감 넘치는",
			"narrative_role": "새로운 위협과 혼돈의 시작을 알림",
			"tension": 1
		}
	},
	"protagonist_goal": "불완전한 균형의 저주에 시달리는 세계를 구원하고, 녹티스가 감춰온 '진정한 균형'의 의미를 밝혀내어, 영원히 갇힌 심연의 흐름을 해방하고 새로운 시대를 열어라.",
	"chapter_name": {
		"hindi": "संतुलन की गूँज: मुड़े हुए मुक्तिदाता की वापसी",
		"spanish": "Ecos del Equilibrio: El Retorno del Redentor Retorcido",
		"vietnamese": "Tiếng Vọng Của Cân Bằng: Sự Trở Lại Của Kẻ Cứu Chuộc Sai Lầm",
		"french": "Échos de l'Équilibre : Le Retour du Rédempteur Tordu",
		"thai": "เสียงสะท้อนของสมดุล: การกลับมาของผู้ไถ่บาปบิดเบี้ยว",
		"japanese": "均衡の残響：歪んだ救済者の再臨",
		"english": "Echoes of Balance: The Twisted Redeemer's Return",
		"korean": "균형의 메아리: 뒤틀린 구원자의 재림",
		"chinese": "均衡回响：扭曲救世主的再临"
	},
	"npc_roles": {
		"mara": {
			"role": "심연에 갇힌 영혼들의 고통을 대변하며, 녹티스의 불완전한 균형에 의해 희생된 존재들의 비극을 증언하는 인물. 주인공에게 연민과 정의감을 불러일으킨다.",
			"arc": "rising에서 영혼들의 고통과 녹티스 행위의 비극성을 드러내며 주인공의 감정선을 자극한다."
		},
		"char": {
			"role": "심연과 현실의 경계에서 균형의 '변화'를 관찰하고 연구하는 미지의 존재. 중립적인 입장에서 주인공에게 모호하지만 중요한 진실의 조각들을 던진다.",
			"arc": "rising에서 주인공에게 기존의 균형에 대한 의문을 제기하고, 새로운 관점을 제시하며 혼란을 가중시킨다."
		},
		"drox": {
			"role": "그림자를 잃고 방황하는 전사. 1편에서 그림자를 잃은 이후, 자신의 존재 의미를 찾아 헤매다 고대 존재의 힘에 매료되어 타락할 위기에 처한 인물.",
			"arc": "rising에서 고대 존재의 영향력과 그 유혹의 위험성을 직접적으로 보여주며 주인공과 대립한다."
		},
		"ash": {
			"role": "혼돈에 빠진 세계에서 진정한 균형의 고대 지식을 탐구하며 주인공에게 길을 제시하는 현자이자 조력자. 1편의 사건 이후 더 깊은 진실을 찾아 헤매고 있다.",
			"arc": "intro에서 주인공에게 혼돈의 세계에 대한 단서를 제공하며, climax_finale에서 '진정한 균형'의 실마리를 제공하여 주인공의 최종 결단에 결정적인 역할을 한다."
		}
	},
	"global_foreshadowing": [
		{
			"plant_room": 3,
			"reveal_act": "climax_finale",
			"hint": "녹티스의 등불이 특정 순간 왜곡된 환영을 보여주며 주인공의 판단을 흐리게 한다.",
			"reveal_context": "녹티스의 등불이 고대 존재의 힘으로 인해 진실과 거짓을 뒤섞는 도구였음이 드러나며, 주인공은 이전에 본 환영들이 사실은 왜곡된 미래의 가능성이었음을 깨닫는다.",
			"reveal_room": 10,
			"plant_act": "intro",
			"id": "GF_01_DistortedVision"
		},
		{
			"plant_room": 5,
			"id": "GF_02_EchoingPain",
			"reveal_act": "climax_finale",
			"hint": "심연의 균열에서 흘러나오는 희미한 고통의 메아리가 과거 '마라'의 비극적인 노래와 겹쳐 들린다.",
			"plant_act": "rising",
			"reveal_context": "마라의 노래가 단순히 영혼의 슬픔이 아니라, 고대 존재가 심연에 갇힌 채 '균형'을 이루려 했던 마지막 시도였음이 밝혀진다.",
			"reveal_room": 9
		},
		{
			"id": "GF_03_HiddenCore",
			"reveal_act": "climax_finale",
			"hint": "특정 유물에서 느껴지는 미약하지만 강력한 힘의 파동이 녹티스가 모으던 '핵심 영혼'의 특성과 유사함을 느낀다.",
			"reveal_context": "녹티스가 '균형'을 위해 모으던 핵심 영혼들이 사실은 고대 존재의 폭주를 막는 임시방편이었으며, 진정한 핵심은 다른 곳에 있었음이 드러난다.",
			"reveal_room": 8,
			"plant_act": "rising",
			"plant_room": 7
		},
		{
			"id": "GF_04_WhispersOfChange",
			"plant_act": "intro",
			"reveal_context": "고대 존재가 균형을 '유지'하는 것이 아니라 '변화'의 매개체이며, 그 변화의 전조로 자유를 갈망하는 광기가 퍼졌음이 밝혀진다. 그 문양은 고대 존재의 진정한 형태를 상징한다.",
			"reveal_room": 7,
			"hint": "세계 곳곳에 나타나는 '진정한 자유'를 갈망하는 자들의 광기가 특정 문양이나 형태와 연관되어 있음을 발견한다.",
			"reveal_act": "climax_finale",
			"plant_room": 4
		}
	],
	"act_summary": {
		"climax_finale": "마침내 '최후의 균열' 앞에서 녹티스가 인위적으로 막으려 했던 '진정한 균형'의 실체가 밝혀진다. 주인공은 모든 진실 속에서 세계의 운명과 심연의 해방을 건 최후의 결전을 치르고 새로운 시대의 문을 연다.",
		"intro": "녹티스의 심판 이후 혼돈에 빠진 세계. 불완전한 균형의 저주 속에서 새로운 위협이 발생하고, 고대 지식의 수호자 애쉬와 재회하며 '뒤틀린 구원자'의 흔적을 쫓는 여정이 시작된다.",
		"rising": "그림자를 잃은 전사 드록스의 타락을 목격하며 고대 존재의 유혹에 직면하고, 심연에 갇힌 영혼들의 대변자 마라를 통해 불완전한 균형의 비극성을 깨닫는다. 미지의 존재 샤르가 던지는 '변화'의 진실에 혼란을 겪으며 주인공은 녹티스의 진정한 의도에 의문을 품기 시작한다."
	}
};
