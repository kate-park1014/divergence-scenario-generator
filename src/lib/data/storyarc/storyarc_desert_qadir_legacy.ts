import type { StoryArc } from '$lib/types';

export const storyarc_desert_qadir_legacy: StoryArc = {
	"final_boss": {
		"id": "CeasefirePhantom_V0",
		"name": "휴전의 망령 카디르 (Qadir)",
		"appearance_npc": "A towering desert entity wrapped in countless torn banners and faded flags of no identifiable nation. Its body is split into shifting halves that never fully separate nor merge, constantly pulling against each other like a living stalemate. From its chest hangs a massive, cracked hourglass leaking glowing sand that never empties. Around it, ghostly soldiers made of dust endlessly rise, clash silently, and collapse again in looping cycles. The sky above flickers between dawn and dusk, never settling. The color palette is muted—sand, ash, and dull crimson—avoiding any specific cultural markers.",
		"appearance_boss": "A towering desert entity wrapped in countless torn banners and faded flags of no identifiable nation. Its body is split into shifting halves that never fully separate nor merge, constantly pulling against each other like a living stalemate. From its chest hangs a massive, cracked hourglass leaking glowing sand that never empties. Around it, ghostly soldiers made of dust endlessly rise, clash silently, and collapse again in looping cycles. The sky above flickers between dawn and dusk, never settling. The color palette is muted—sand, ash, and dull crimson—avoiding any specific cultural markers.",
		"surface_identity": "끊임없이 이어지는 전쟁 속에서 '균형'을 유지하는 존재. 완전한 승리도, 완전한 패배도 허용하지 않는다.",
		"true_identity": "갈등 그 자체를 유지하는 시스템. 문제를 해결하기보다 '지속 가능한 긴장 상태'를 만들어내며, 그 안에서 권력과 이익이 순환된다. 평화는 끝을 의미하기에, 의도적으로 도달하지 않는다.",
		"motivation": "이전의 나는 고대 저주, 즉 '평화에 대한 혐오'에 조종되어 전쟁을 멈추지 않게 했을 뿐이었다. 그러나 이제는 다르다. 사막이 완전히 파멸로 치닫는 것을 보며, 나는 '진정한 끝'을 통해 이 고통스러운 순환을 끊으려 한다. 모든 것을 불태워 초기화하고, 오직 완벽한 무(無)만이 이 저주로부터 사막을 해방시킬 수 있다고 믿는다. 나의 존재 자체가 더 이상 저주에 이용되지 않고, 스스로 종지부를 찍으려 한다.",
		"twist": "클라이맥스에서 카디르가 쓰러지는 순간, 사막 전체를 뒤흔드는 거대한 균열이 발생하고, 그 안에서 '오랜 평화에 대한 혐오'의 진정한 실체, 즉 사막의 원시적 의지가 모습을 드러낸다. 주인공이 1편에서 깨부쉈던 '카디르 시스템'은 사실 그 원시적 의지의 봉인 장치였음이 밝혀진다. 이제 카디르는 봉인 해제를 위한 제물이 되었고, 사막은 더 큰 위협에 직면하게 된다."
	},
	"id": "desert_qadir_legacy",
	"theme": "desert",
	"world": {
		"secret": "사막을 지배하는 '오랜 평화에 대한 혐오'는 카디르 시스템 붕괴와 함께 더욱 강력해졌다. 이 혐오는 단순한 저주가 아니라, 사막 자체의 심장에 뿌리내린 '원시적 존재'의 의지임이 드러난다. 이 존재는 평화가 도래할 때마다 갈등을 촉발시키며, 궁극적으로 사막을 영원한 혼돈의 제물로 삼으려 한다. 1편에서 카디르를 조종했던 그 그림자의 진짜 정체가 서서히 밝혀진다.",
		"rule": "새로운 사막의 규칙은 오직 '강자의 생존'이다. 동맹은 일시적이고, 신뢰는 깨지기 쉬운 모래성 같다. 과거 카디르가 강제했던 질서는 사라지고, 모든 부족은 각자의 신념과 욕망을 위해 피의 대결을 불사한다. 마법과 고대 힘이 부활하며, 승자는 모든 것을 얻고 패자는 모래 속에 묻힌다.",
		"setting": "카디르 시스템 붕괴 후, 사막은 약육강식의 혼돈에 빠져들었다. '영원한 균형'은 완전히 파괴되었고, 각 부족은 생존을 위해 피비린내 나는 전쟁을 벌인다. 모래 폭풍은 더욱 거칠어졌고, 고대 유적들은 광기에 찬 에너지로 들끓으며, 사막 깊은 곳에서는 잊혔던 존재들이 깨어나기 시작한다. 1편의 파괴는 새로운 재앙의 씨앗이 되었다."
	},
	"scenarioOutline": [
		{
			"act": "intro",
			"npc": "amir",
			"title": "모래 폭풍 속의 그림자: 깨어나는 갈등",
			"boss": "random_boss",
			"order": 1,
			"summary": "카디르의 붕괴 이후, 사막은 새로운 혼돈의 시대를 맞이한다. 주인공은 무자비한 약탈과 파괴의 현장을 목격하고, 노회한 유목민 지도자 아미르로부터 사막 깊은 곳에서 깨어나는 '오래된 분노'에 대한 경고를 듣는다."
		},
		{
			"npc": "ashur",
			"act": "rising",
			"summary": "주인공은 과거 동료였던 아슈르와 재회하지만, 아슈르는 카디르 시스템 붕괴의 여파로 주인공에게 극심한 불신을 보인다. 아슈르는 자신만의 방식으로 사막의 혼돈을 끝내려 하며, 주인공과 대립하던 중 예기치 않은 배신으로 갈등을 심화시킨다.",
			"order": 2,
			"boss": "random_boss",
			"title": "배신자의 맹세: 파괴된 신뢰"
		},
		{
			"act": "rising",
			"npc": "kemet",
			"title": "고대 저주의 흔적: 케메트의 예언",
			"summary": "사막 깊은 곳에 숨겨진 고대 유적에서 주인공은 신비주의자 케메트를 만난다. 케메트는 '오랜 평화에 대한 혐오'가 사막의 원시적 존재와 연결되어 있으며, 1편의 카디르 사건이 더 큰 재앙의 전조였음을 암시하는 섬뜩한 예언을 전한다.",
			"boss": "random_boss",
			"order": 3
		},
		{
			"npc": "khan",
			"act": "rising",
			"summary": "과거 약탈자였던 칸은 자신의 부족이 1편 사건의 여파로 무참히 몰락한 것에 대한 복수심에 사로잡혀 있다. 그는 사막의 혼돈을 이용해 힘을 키우려 하고, 주인공과의 갈등 속에서 사막에 숨겨진 또 다른 고대 무기를 발굴하려 한다.",
			"boss": "random_boss",
			"order": 4,
			"title": "복수의 칼날: 칸의 광기"
		},
		{
			"title": "최후의 시험: 사막의 심판자",
			"boss": "pool_053",
			"order": 5,
			"summary": "모든 갈등과 비밀이 폭발하는 사막의 심장부에서, 주인공은 '휴전의 망령 카디르'와 대면한다. 아미르는 자신의 숨겨진 계획을 드러내며 주인공을 시험하고, 카디르의 진정한 목적과 사막을 지배하는 '원시적 존재'의 실체가 밝혀지면서, 주인공은 사막의 운명을 건 최후의 결전을 치른다.",
			"act": "climax_finale",
			"npc": "amir"
		}
	],
	"act_summary": {
		"climax_finale": "사막의 모든 비밀과 갈등이 폭발하는 최후의 결전. '휴전의 망령 카디르'가 1편에서 밝혀진 '오랜 평화에 대한 혐오'의 진정한 현신이었음이 드러나고, 아미르의 마지막 시험을 거쳐 주인공은 사막의 운명을 결정할 장대한 대결을 펼친다. 카디르를 넘어선 사막의 원시적 의지와 맞서 싸우며 진정한 종말 혹은 새로운 시작을 맞이한다.",
		"intro": "카디르 붕괴 이후 약육강식의 혼돈에 빠진 사막. 주인공은 파괴된 사막에서 새로운 위협의 전조를 마주하며, 노회한 지도자 아미르의 경고와 함께 사막의 오랜 저주가 깨어나고 있음을 직감한다. 불신과 배신이 팽배한 이 새로운 사막에서 주인공은 진정한 평화를 위한 첫발을 내딛는다.",
		"rising": "과거 동료 아슈르의 배신, 신비주의자 케메트가 전하는 고대 저주의 심화된 진실, 그리고 복수심에 불타는 칸의 광기로 사막의 갈등은 극에 달한다. 주인공은 1편의 사건들이 불러온 파국의 그림자 속에서 내적·외적 시련을 겪으며, 사막의 심장부에 잠들어 있는 원시적 존재의 기미를 서서히 깨닫는다."
	},
	"protagonist_goal": "카디르 붕괴 후 심화된 사막의 무한한 전쟁을 멈추고, '오랜 평화에 대한 혐오'라는 근원적인 저주를 완전히 뿌리 뽑아야 한다. 단순히 평화를 되찾는 것을 넘어, 사막의 원시적 존재가 원하는 파멸을 막고 진정한 공존과 치유의 길을 찾아야 한다. 이 과정에서 1편의 사건들이 남긴 상흔을 극복하고 새로운 희망을 제시해야 한다.",
	"global_foreshadowing": [
		{
			"id": "gf_ancient_wake",
			"plant_room": 3,
			"hint": "모래 속 깊은 곳에서 고대의 힘이 깨어나고 있다는 징후가 곳곳에서 발견된다.",
			"reveal_act": "climax_finale",
			"plant_act": "intro",
			"reveal_room": 12,
			"reveal_context": "최종 보스와의 대결 중, 사막의 심장부가 울부짖으며 '오랜 평화에 대한 혐오'의 원시적 실체가 모습을 드러낸다."
		},
		{
			"plant_room": 5,
			"id": "gf_betrayal_seed",
			"hint": "가장 신뢰했던 동료 중 한 명이 과거의 비밀과 얽혀 의도치 않게 혹은 의도적으로 갈등을 심화시킨다.",
			"reveal_act": "rising",
			"plant_act": "rising",
			"reveal_context": "중요한 순간, 아슈르가 주인공의 계획을 무력화하며 '선인장 부족'의 몰락에 대한 죄책감으로 카디르의 유산에 집착하고 있었음이 밝혀진다.",
			"reveal_room": 9
		},
		{
			"plant_act": "intro",
			"reveal_act": "climax_finale",
			"reveal_room": 10,
			"reveal_context": "카디르의 최종 형태가 나타난 후, 그가 사실 고대 저주를 '봉인'하려는 시스템의 마지막 잔해였음이 드러난다.",
			"id": "gf_qadir_sacrifice",
			"plant_room": 7,
			"hint": "카디르의 붕괴가 오히려 더 큰 재앙을 불러오는 '희생'이었다는 암시가 퍼진다."
		},
		{
			"id": "gf_peace_hate_echo",
			"plant_room": 2,
			"hint": "사막 곳곳에서 '평화에 대한 혐오'를 부추기는 알 수 없는 목소리나 현상이 감지된다.",
			"reveal_act": "climax_finale",
			"plant_act": "rising",
			"reveal_room": 8,
			"reveal_context": "클라이맥스에서 카디르를 조종했던 '무형의 공포'가 사막 그 자체의 의지이며, 카디르는 단지 그 의지의 현현에 불과했음이 밝혀진다."
		}
	],
	"act_tone": {
		"intro": {
			"mood": "불안, 혼란, 경계",
			"narrative_role": "사막의 새로운 위협과 과거의 그림자 소개",
			"tension": 1
		},
		"climax_finale": {
			"mood": "광기, 비장미, 해탈",
			"narrative_role": "모든 것의 폭발, 최후의 대결, 사막의 운명 결정",
			"tension": 5
		},
		"rising": {
			"tension": 3,
			"mood": "절망, 배신, 격분",
			"narrative_role": "숨겨진 진실 폭로, 갈등 심화, 주인공의 내적/외적 시련"
		}
	},
	"chapter_name": {
		"spanish": "El Legado de Qadir: La Maldición Despierta en las Sombras",
		"english": "Qadir's Legacy: The Curse Awakens in the Shadows",
		"french": "L'Héritage de Qadir : La Malédiction S'éveille dans l'Ombre",
		"japanese": "カディールの遺産：影に目覚める呪い",
		"chinese": "卡迪尔的遗产：阴影中觉醒的诅咒",
		"thai": "มรดกของคาดีร์: คำสาปตื่นขึ้นในเงามืด",
		"vietnamese": "Di Sản Của Qadir: Lời Nguyền Thức Tỉnh Trong Bóng Tối",
		"korean": "카디르의 유산: 그림자 속에서 깨어나는 저주",
		"hindi": "कादिर की विरासत: छाया में शाप जागता है"
	},
	"npc_roles": {
		"amir": {
			"arc": "intro_climax",
			"role": "노회한 유목민 지도자이자 사막의 평화를 지키려는 인물. 그러나 그 또한 과거의 죄책감과 사막의 저주에 얽혀 있으며, 주인공에게 조언과 동시에 시험을 제공한다."
		},
		"kemet": {
			"role": "사막 깊은 곳의 고대 지식을 지닌 신비주의자. 1편에서 예언을 통해 카디르의 진실을 일부 알렸으며, 시퀄에서는 사막의 원시적 저주에 대한 더 깊은 정보를 제공하며 주인공을 이끌지만, 그 역시 저주의 영향력 아래에 놓여있다.",
			"arc": "rising_guidance"
		},
		"khan": {
			"arc": "rising_conflict",
			"role": "전사 부족의 잔혹한 약탈자였으나, 1편에서 자신의 부족이 몰락한 비극을 겪으며 변화의 기로에 선 인물. 시퀄에서는 복수심과 생존 본능 사이에서 갈등하며, 예상치 못한 순간에 주인공에게 협력하거나 위협이 된다."
		},
		"ember": {
			"role": "사막을 떠도는 젊은 탐험가이자 지식 추구자. 1편의 사건들을 기록하고 연구하며 사막의 진정한 역사를 밝히려 한다. 순수하지만 위험한 진실에 다가서며 주인공에게 중요한 정보를 제공한다.",
			"arc": "support_informant"
		},
		"ashur": {
			"role": "주인공의 과거 동료였으나, 1편 사건 이후 극심한 불신과 회의에 빠져 독자적인 행동을 하는 인물. 사막의 혼돈 속에서 자신만의 정의를 찾으려다 주인공과 대립각을 세운다. '선인장 부족'의 몰락에 대한 트라우마를 가지고 있다.",
			"arc": "rising_betrayal"
		}
	},
	"rising_count": 3
};
