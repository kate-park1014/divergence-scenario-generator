import type { StoryArc } from '$lib/types';

export const storyarc_hell_Noctis_V1_AbyssalReverb: StoryArc = {
	"protagonist_goal": "혼돈에 빠진 세계를 구하고, 녹티스가 숨긴 '균형'의 진정한 의미를 밝혀내어, 불안정한 심연의 계약에서 벗어나 진정한 자유를 쟁취하라.",
	"id": "Noctis_V1_AbyssalReverb",
	"theme": "hell",
	"scenarioOutline": [
		{
			"title": "균열의 서막",
			"act": "intro",
			"boss": "random_boss",
			"npc": "ash",
			"order": 1,
			"summary": "1편의 사건 이후, 심연의 기운이 지상에 스며들어 세계 곳곳에 불안정한 균열이 나타난다. 주인공은 혼돈의 징후를 추적하던 중, 균열 속에서 고대 기록을 연구하는 애쉬를 만나게 되고, 그녀로부터 녹티스와 심연의 균형에 대한 새로운 단서를 얻는다."
		},
		{
			"title": "그림자 없는 자의 복수",
			"act": "rising",
			"npc": "drox",
			"boss": "random_boss",
			"summary": "그림자를 잃고 심연의 저주에 묶인 드록스와 마주친다. 드록스는 녹티스에게 복수하려 하지만, 그 과정에서 심연의 영향으로 폭주하여 주인공을 위협한다. 주인공은 드록스를 제압하고, 그에게서 녹티스의 계약이 불완전하다는 힌트를 얻는다.",
			"order": 2
		},
		{
			"title": "마라의 비극적 노래",
			"act": "rising",
			"order": 3,
			"summary": "심연에 갇힌 영혼들의 슬픔이 응축된 공간에서 마라를 만난다. 마라는 잃어버린 동료들의 영혼을 기억하며 슬픈 노래를 부르고, 주인공은 그녀의 노래 속에서 녹티스가 모은 영혼들이 단순한 증거가 아님을 직감한다.",
			"npc": "mara",
			"boss": "random_boss"
		},
		{
			"act": "rising",
			"title": "뒤틀린 균형",
			"summary": "심연과 현실의 경계가 뒤섞인 혼돈의 공간에서 미지의 존재 샤르와 조우한다. 샤르는 녹티스가 추구하는 '균형'이 실은 더 거대한 존재를 위한 희생임을 암시하며, 주인공을 혼란에 빠뜨린다.",
			"order": 4,
			"npc": "char",
			"boss": "random_boss"
		},
		{
			"act": "climax_finale",
			"title": "심연의 진정한 주인",
			"summary": "마침내 녹티스가 기다리던 '최후의 균열' 앞에 선다. 녹티스는 심연의 안정화를 위해 더 많은 영혼이 필요하다고 주장하지만, 애쉬의 도움으로 그의 진정한 목적과 심연의 균형을 유지하는 고대 존재의 존재가 드러난다. 주인공은 녹티스와 진정한 심연의 주인을 상대로 최후의 결전을 벌인다.",
			"order": 5,
			"npc": "ash",
			"boss": "pool_080"
		}
	],
	"world": {
		"rule": "여전히 녹티스의 등불은 진실을 밝히지만, 이제 거짓말은 단순한 불꽃의 흐려짐을 넘어 현실에 균열을 일으킨다. 계약은 더욱 복잡해졌고, 어둠 속에서 계약의 파기를 노리는 미지의 존재들이 활개를 친다.",
		"secret": "녹티스가 영혼을 심연에 귀속시키는 계약의 신이라는 사실은 이미 폭로되었다. 그러나 그가 진정으로 섬기는 것은 심연 그 자체가 아니다. 그는 더 거대한, 심연을 유지하는 '균형'의 수호자이며, 영혼을 모으는 행위는 이 균형이 깨지는 것을 막기 위한 필사적인 노력이라는 2차 비밀이 서서히 드러난다.",
		"setting": "심연의 재판관 녹티스의 심판 이후, 세계는 혼돈에 휩싸였다. '최후의 문' 너머로 빨려 들어간 영혼들의 잔재가 지상으로 역류하며 현실과 심연의 경계가 모호해졌다. 이제 그림자 없는 자들이 배회하고, 불완전한 계약의 흔적들이 곳곳에 저주처럼 남아있다."
	},
	"act_tone": {
		"intro": {
			"narrative_role": "사건의 발단과 새로운 미스터리 제시",
			"tension": 1,
			"mood": "불안하고 몽환적인"
		},
		"rising": {
			"mood": "점점 고조되는 위협과 내면의 갈등",
			"narrative_role": "주인공의 선택과 희생을 통한 성장",
			"tension": 3
		},
		"climax_finale": {
			"mood": "절망과 희망이 교차하는 격렬한 대결",
			"tension": 5,
			"narrative_role": "모든 진실이 밝혀지고 세계의 운명이 결정되는 순간"
		}
	},
	"rising_count": 3,
	"act_summary": {
		"climax_finale": "마침내 '최후의 균열' 앞에서 녹티스의 진정한 목적과 심연의 균형을 유지하는 고대 존재의 실체가 밝혀진다. 주인공은 모든 진실 속에서 세계의 운명을 건 최후의 결전을 치른다.",
		"intro": "녹티스의 심판 이후 혼돈에 빠진 세계, 심연의 균열 속에서 새로운 위협과 함께 고대 지식의 수호자 애쉬를 만나게 되며 여정이 시작된다.",
		"rising": "그림자를 잃은 전사 드록스와 마주하고, 심연에 갇힌 영혼들의 대변자 마라를 통해 녹티스 계약의 본질에 다가선다. 미지의 존재 샤르가 던지는 균형의 진실에 혼란을 겪으며 주인공의 갈등은 고조된다."
	},
	"final_boss": {
		"id": "Noctis_V1",
		"name": "심연의 재판관 녹티스 (Noctis)",
		"appearance_npc": "A silent judge dressed in elegant black robes, carrying a lantern filled with pale blue souls. Wherever he walks, distant bells echo through the darkness. He politely greets the party and offers to guide them toward the \"final gate.\"",
		"appearance_boss": "An enormous underworld monarch suspended above an endless abyss. His body is split vertically like two different beings stitched together — one side skeletal and burned, the other unnaturally serene. Behind him float thousands of giant courtroom scales, each holding screaming souls instead of weights.",
		"surface_identity": "길 잃은 자들을 심판하고 출구로 인도하는 재판관.",
		"true_identity": "그는 탈출을 돕는 존재가 아니다. 탐험자들이 스스로 죄를 고백하게 만들어, 영혼을 심연에 귀속시키는 계약의 신이다.",
		"motivation": "이전 심판으로 심연에 귀속된 영혼들이 불안정한 파동을 일으키기 시작했다. 그는 이 흐름을 다시 통제하고, 더 깊은 절망 속에서 새로운 균형을 찾아야 한다고 믿는다.",
		"twist": "녹티스의 저울에 영혼이 올랐던 그때, 심연에 봉인되었던 고대 존재가 그의 힘을 통해 깨어나기 시작한다. 지금까지 녹티스가 모은 영혼들은 단순한 계약의 증거가 아니라, 그 존재를 부활시키기 위한 제물이었음이 드러난다."
	},
	"npc_roles": {
		"ash": {
			"role": "심연의 균열을 연구하는 고대 지식의 수호자. 녹티스의 과거 행적을 알고 있으며, 주인공에게 조언을 제공한다.",
			"arc": "녹티스의 심판 이후 불안정해진 세계의 균열을 연구하는 인물. 주인공에게 녹티스의 진짜 목적과 심연의 균형에 대한 고대 지식을 전달한다."
		},
		"mara": {
			"role": "심연에 갇힌 영혼들의 고통을 대변하는 존재. 주인공의 여정에 감정적인 깊이를 더하며, 희생의 중요성을 일깨운다.",
			"arc": "심연에 갇힌 영혼들의 고통을 직접 느끼고 대변하는 존재. 주인공에게 녹티스가 모은 영혼들의 비극적 운명과 희생의 의미를 전하며, 감정적 공감을 이끌어낸다."
		},
		"char": {
			"role": "세계의 균열 속에서 나타난 미지의 존재. 녹티스의 진짜 목적에 대한 단서를 흘리며, 혼란을 가중시킨다.",
			"arc": "심연과 현실의 경계가 무너지는 과정에서 나타난 미지의 존재. 녹티스가 추구하는 '균형'이 실은 더 큰 희생을 위한 것임을 암시하며, 주인공의 혼란과 의심을 증폭시킨다."
		},
		"drox": {
			"role": "타락한 계약으로 인해 그림자를 잃은 전사. 한때 녹티스의 희생자였으며, 복수를 꿈꾸지만 결국 주인공을 돕는다.",
			"arc": "녹티스의 불완전한 계약으로 인해 그림자를 잃고 심연의 저주에 묶인 전사. 복수심에 사로잡혀 주인공을 위협하지만, 결국 과거의 진실을 깨닫고 주인공의 조력자가 된다."
		}
	},
	"chapter_name": {
		"vietnamese": "Tiếng Vọng Vực Thẳm: Sóng Hồi Khế Ước",
		"english": "Echoes of the Abyss: Covenant's Reverb",
		"hindi": "गहरे रसातल की गूँज: अनुबंध की प्रतिध्वनि",
		"spanish": "Ecos del Abismo: Repercusión del Pacto",
		"french": "Échos des Abysses : Réverbération du Pacte",
		"chinese": "深渊的回响：契约的波动",
		"thai": "เสียงสะท้อนจากห้วงอเวจี: คลื่นแห่งพันธสัญญา",
		"korean": "심연의 메아리: 계약의 파동",
		"japanese": "深淵の残響：契約の波動"
	},
	"global_foreshadowing": [
		{
			"plant_room": 3,
			"hint": "심연의 문이 닫힌 후에도, 그림자 없는 자들의 발자국이 지상에 남아있다.",
			"reveal_act": "rising",
			"reveal_room": 5,
			"reveal_context": "드록스의 모습을 통해 그림자 없는 자들의 비극적 운명과 심연의 저주가 현실이 되었음을 깨닫는다.",
			"plant_act": "intro",
			"id": "GF_01_Shadows"
		},
		{
			"hint": "녹티스의 저울은 단순히 영혼을 무게 재는 것이 아니었다. 그것은 거대한 부름을 위한 서곡이었다.",
			"plant_room": 7,
			"id": "GF_02_Scales",
			"plant_act": "intro",
			"reveal_room": 10,
			"reveal_context": "녹티스가 모은 영혼이 고대 존재를 부활시키는 제물이었음을 알게 되면서, 그의 저울의 진정한 의미를 깨닫는다.",
			"reveal_act": "climax_finale"
		},
		{
			"hint": "모든 계약에는 숨겨진 조항이 있다. 심지어 신과의 계약도.",
			"plant_room": 4,
			"plant_act": "rising",
			"id": "GF_03_HiddenClause",
			"reveal_act": "climax_finale",
			"reveal_context": "녹티스와의 계약이 주인공을 속박하는 진정한 의미와 그 계약을 파기할 방법을 찾아낸다.",
			"reveal_room": 8
		},
		{
			"id": "GF_04_ForcedBalance",
			"plant_act": "rising",
			"reveal_context": "녹티스가 '균형의 수호자'로서 어떤 존재를 위해 영혼을 모았는지, 그 진정한 배후가 드러난다.",
			"reveal_room": 12,
			"reveal_act": "climax_finale",
			"hint": "심연은 스스로 균형을 찾으려 하지 않는다. 누군가 항상 그 균형을 강제해야 했다.",
			"plant_room": 6
		}
	]
};
