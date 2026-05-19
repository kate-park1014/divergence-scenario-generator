import type { StoryArc } from '$lib/types';

export const storyarc_desert_qadir_echoes: StoryArc = {
	"id": "desert_qadir_echoes",
	"act_summary": {
		"rising": "전사 부족의 광기와 신비주의자 케메트의 예언, 약탈자 칸의 비극적 과거를 통해 사막을 지배하는 고대 저주의 실체와 주인공 주변 인물들의 숨겨진 배신이 점차 드러난다. 갈등은 격화되고 진실은 더욱 복잡해진다.",
		"intro": "카디르의 붕괴로 인한 사막의 혼란과 무정부 상태를 그리며, 주인공은 과거의 유물과 새로운 위협의 전조를 마주한다. 노회한 유목민 지도자 아미르의 경고 속에서 새로운 갈등의 씨앗이 심어진다.",
		"climax_finale": "모든 단서가 모이는 사막의 심장부에서 '휴전의 망령 카디르'는 고대 저주의 힘을 빌려 최종 보스로 강림한다. 아미르의 숨겨진 의도가 드러나고, 사막의 진정한 파괴자가 카디르를 조종하는 '공포' 그 자체였음이 밝혀지며, 주인공은 모든 것을 걸고 운명적인 대결을 펼친다."
	},
	"protagonist_goal": "카디르의 시스템 붕괴 이후 도래한 무정부 상태의 사막에서 새로운 형태의 '진정한 균형'을 찾아야 한다. 단순히 갈등을 멈추는 것을 넘어, 과거의 저주로부터 사막을 해방시키고 지속 가능한 공존의 길을 모색해야 한다.",
	"chapter_name": {
		"french": "Échos de Qadir: Paix Brisée, Conflit Renaissant",
		"korean": "카디르의 메아리: 균열된 평화, 되살아난 갈등",
		"hindi": "कादिर की गूँज: खंडित शांति, पुनः जीवित संघर्ष",
		"chinese": "卡迪尔的回响：破碎的和平，重燃的冲突",
		"spanish": "Ecos de Qadir: Paz Destrozada, Conflicto Resurgente",
		"vietnamese": "Tiếng Vọng Qadir: Hòa Bình Tan Vỡ, Xung Đột Bùng Nổ Lại",
		"thai": "เสียงสะท้อนของQadir: สันติภาพที่แตกสลาย, ความขัดแย้งที่ปะทุขึ้นใหม่",
		"japanese": "カディルの残響：砕けた平和、再燃する紛争",
		"english": "Echoes of Qadir: Shattered Peace, Resurgent Conflict"
	},
	"rising_count": 3,
	"global_foreshadowing": [
		{
			"id": "ancient_curse_whisper",
			"reveal_act": "climax_finale",
			"reveal_context": "최종 보스의 진정한 배후가 고대 저주와 연결되어 있음을 암시",
			"hint": "모래 폭풍 속에서 들려오는 오래된 속삭임, '평화는… 껍데기일 뿐…'이라는 목소리.",
			"plant_room": 3,
			"plant_act": "intro",
			"reveal_room": 12
		},
		{
			"id": "fragmented_artifact",
			"reveal_act": "climax_finale",
			"reveal_context": "카디르 외에 사막의 갈등을 조장하는 또 다른 고대 존재의 흔적임을 드러냄",
			"plant_room": 5,
			"hint": "부서진 유적지에서 발견되는, 카디르와는 다른 오래된 문양이 새겨진 조각. 만지면 희미한 불안감이 전해진다.",
			"plant_act": "rising",
			"reveal_room": 10
		},
		{
			"plant_room": 7,
			"hint": "사막 유목민들의 입에서 전해지는, '새로운 균형은 파괴 후에야 온다'는 왜곡된 예언의 구절.",
			"id": "prophecy_fragment",
			"reveal_context": "진정한 평화가 파멸을 통해 오는 것이 아니라, 파멸 속에서 다른 형태의 존재가 깨어남을 보여줌",
			"reveal_act": "climax_finale",
			"plant_act": "rising",
			"reveal_room": 8
		},
		{
			"plant_act": "rising",
			"reveal_room": 11,
			"id": "betrayal_omen",
			"reveal_context": "주인공 주변 인물의 배신이 고대 저주의 영향임을 밝히고 충격을 더함",
			"reveal_act": "climax_finale",
			"hint": "주인공의 오랜 동료 중 한 명이 알 수 없는 힘에 의해 조종당하는 듯한 찰나의 순간을 목격한다.",
			"plant_room": 9
		}
	],
	"world": {
		"secret": "사막의 진정한 파괴자는 '휴전의 망령 카디르'가 아니라, 카디르의 시스템 붕괴 이후 표면 위로 떠오른 '무형의 공포', 즉 '오랜 평화에 대한 혐오' 그 자체였다. 이 공포는 사막에 깊이 뿌리내린 고대 저주와 연결되어 있으며, 평화가 찾아올 때마다 다시 갈등을 부추기는 존재가 깨어난다. 카디르는 단지 그 저주의 발현을 '관리'하려 했을 뿐이었다.",
		"setting": "카디르의 폭로 이후, 사막의 '영원한 균형'은 깨졌지만 진정한 평화는 오지 않았다. 갈등을 조작하던 시스템의 부재는 오히려 새로운 혼돈을 야기했고, 각 세력은 통제 불능의 전면전을 준비하며 사막은 피로 물들 위기에 처했다. 1편의 파괴된 유적들이 이제는 새로운 전장의 상흔으로 남아있다.",
		"rule": "사막의 갈등은 이제 '조작된 균형'을 넘어선다. 누구도 승리할 수 없었던 과거와 달리, 이제는 '모든 것을 파괴해서라도 이기려는' 광기가 지배한다. 어떤 동맹도 영원하지 않으며, 오늘의 동지가 내일의 적이 될 수 있다. 과거의 평화 협정은 무의미해졌고, 오직 힘만이 통용된다."
	},
	"scenarioOutline": [
		{
			"order": 1,
			"title": "균열된 모래, 되살아나는 그림자",
			"boss": "random_boss",
			"summary": "카디르의 붕괴 이후, 사막은 무정부 상태에 빠진다. 주인공은 폐허가 된 사막을 탐험하며 '휴전의 망령 카디르'가 남긴 혼돈의 잔재와 새로운 위협의 전조를 마주한다. 노회한 유목민 지도자 아미르는 주인공에게 사막에 드리운 또 다른 어둠에 대해 경고하지만, 그의 눈빛은 깊은 비밀을 감추고 있다.",
			"act": "intro",
			"npc": "amir"
		},
		{
			"order": 2,
			"title": "광기의 전장: 피로 물든 사막의 패권 다툼",
			"act": "rising",
			"summary": "카디르의 통제에서 벗어난 전사 부족들이 사막의 패권을 놓고 무자비한 전쟁을 벌인다. 주인공은 이들의 잔혹한 전투 한복판에 휘말리고, 전사 부족의 대장 아슈르가 알 수 없는 힘에 의해 광기에 휩싸여 있음을 직감한다. 이 광기가 단순한 전쟁 열기가 아님을 깨닫는 단서를 얻는다.",
			"boss": "random_boss",
			"npc": "ashur"
		},
		{
			"npc": "kemet",
			"summary": "주인공은 사막의 고대 유적에서 신비주의자 케메트를 만난다. 케메트는 카디르의 시스템 붕괴가 오히려 더 강력한 '고대의 공포'를 깨웠음을 암시하며, 사막의 모든 갈등이 사실은 끊임없이 재앙을 부르는 '저주'의 결과라는 충격적인 이론을 제시한다. 그러나 그의 정보는 파편적이고 불완전하다.",
			"boss": "random_boss",
			"act": "rising",
			"title": "고대 저주의 속삭임, 감춰진 진실",
			"order": 3
		},
		{
			"summary": "주인공은 약탈자 집단의 습격을 받고, 그들의 우두머리 칸이 과거 카디르의 영향으로 가족을 잃은 슬픔 때문에 극단적인 파괴를 추구하고 있음을 알게 된다. 이 과정에서 주인공은 자신을 돕던 NPC 중 한 명(ex: Amir)이 몰래 고대 저주와 연결된 유물을 탐하고 있었다는 결정적인 배신의 징후를 포착한다.",
			"boss": "random_boss",
			"act": "rising",
			"npc": "khan",
			"order": 4,
			"title": "배신과 절망: 무너지는 신뢰의 모래성"
		},
		{
			"npc": "amir",
			"summary": "모든 단서가 가리키는 사막의 심장부, 그곳에서 '휴전의 망령 카디르'의 잔재가 고대 저주의 힘을 빌려 새로운 형태로 강림한다. '평화는 비싸다'는 회상이 주인공의 뇌리를 스치는 가운데, 아미르는 결국 자신의 숨겨진 계획을 드러내며 카디르의 새로운 발현을 돕거나 막는 이중적인 행동을 한다. 사막의 진정한 파괴자가 카디르가 아닌, 그를 조종하는 '공포' 그 자체였음이 밝혀지고, 주인공은 모든 것을 걸고 운명적인 대결을 펼친다.",
			"boss": "pool_053",
			"act": "climax_finale",
			"title": "심연의 부름: 균형을 넘어선 파멸의 존재",
			"order": 5
		}
	],
	"final_boss": {
		"id": "CeasefirePhantom_V0",
		"name": "휴전의 망령 카디르 (Qadir)",
		"appearance_npc": "A towering desert entity wrapped in countless torn banners and faded flags of no identifiable nation. Its body is split into shifting halves that never fully separate nor merge, constantly pulling against each other like a living stalemate. From its chest hangs a massive, cracked hourglass leaking glowing sand that never empties. Around it, ghostly soldiers made of dust endlessly rise, clash silently, and collapse again in looping cycles. The sky above flickers between dawn and dusk, never settling. The color palette is muted—sand, ash, and dull crimson—avoiding any specific cultural markers.",
		"appearance_boss": "A towering desert entity wrapped in countless torn banners and faded flags of no identifiable nation. Its body is split into shifting halves that never fully separate nor merge, constantly pulling against each other like a living stalemate. From its chest hangs a massive, cracked hourglass leaking glowing sand that never empties. Around it, ghostly soldiers made of dust endlessly rise, clash silently, and collapse again in looping cycles. The sky above flickers between dawn and dusk, never settling. The color palette is muted—sand, ash, and dull crimson—avoiding any specific cultural markers.",
		"surface_identity": "끊임없이 이어지는 전쟁 속에서 '균형'을 유지하는 존재. 완전한 승리도, 완전한 패배도 허용하지 않는다.",
		"true_identity": "갈등 그 자체를 유지하는 시스템. 문제를 해결하기보다 '지속 가능한 긴장 상태'를 만들어내며, 그 안에서 권력과 이익이 순환된다. 평화는 끝을 의미하기에, 의도적으로 도달하지 않는다.",
		"motivation": "카디르의 시스템 붕괴 이후, 사막은 완전한 파멸로 치닫고 있다. '나는 전쟁을 만든 적 없다. 단지… 멈추지 않게 했을 뿐이다'라고 이전의 나는 말했지만, 이제 나는 이 파멸을 막기 위해 모든 것을 초기화하려 한다. 진정한 평화는 오직 모든 것을 지우고 다시 시작할 때만 가능하다고 믿는다.",
		"twist": "사막의 가장 깊은 곳, 모든 갈등의 근원지에서 '카디르'의 진짜 모습이 드러난다. 그것은 특정 존재가 아니라, 고대부터 사막에 깃들어 평화를 두려워하고 갈등을 부추기는 '무형의 존재'에 의해 조종되는 꼭두각시였다. 이전에는 균형을 유지하려 했던 내가 이제는 그 공포에 완전히 잠식되어 모든 것을 파괴하는 도구가 되어 버렸다."
	},
	"act_tone": {
		"intro": {
			"mood": "절망적이고 혼란스러움",
			"tension": 1,
			"narrative_role": "파괴된 질서 속에서 새로운 위협의 전조를 알림"
		},
		"climax_finale": {
			"mood": "비극적이고 충격적임",
			"tension": 5,
			"narrative_role": "모든 진실이 밝혀지며, 사막의 운명을 결정짓는 절정"
		},
		"rising": {
			"tension": 3,
			"narrative_role": "점점 더 깊어지는 갈등과 새로운 비밀의 단서를 제공",
			"mood": "치열하고 긴장감 넘침"
		}
	},
	"theme": "desert",
	"npc_roles": {
		"ashur": {
			"arc": "",
			"role": "전사 부족의 맹주. 카디르의 억압에서 벗어나 사막을 무력으로 통일하려 하지만, 그 과정에서 알 수 없는 광기에 사로잡히기 시작한다."
		},
		"kemet": {
			"role": "사막의 잊혀진 역사를 연구하는 학자. 카디르의 붕괴가 가져온 혼란 속에서 더 큰 고대 위협의 징후를 감지하고, 주인공에게 불길한 예언과 조언을 건넨다.",
			"arc": ""
		},
		"khan": {
			"role": "황폐해진 사막에서 약탈과 생존을 위해 수단과 방법을 가리지 않는 무리 지도자. 그의 극단적인 행동 뒤에는 카디르의 영향으로 잃어버린 과거에 대한 깊은 상실감이 있다.",
			"arc": ""
		},
		"amir": {
			"role": "카디르의 폭로 이후 혼돈에 빠진 사막에서 새로운 질서를 찾으려는 노회한 유목민 지도자. 겉으로는 주인공을 돕는 듯하지만, 사막의 고대 저주와 관련된 비밀을 숨기고 있다.",
			"arc": ""
		}
	}
};
