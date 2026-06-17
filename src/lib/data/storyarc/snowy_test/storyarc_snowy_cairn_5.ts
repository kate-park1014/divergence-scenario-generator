import type { StoryArc } from '$lib/types';

export const storyarc_snowy_cairn_5: StoryArc = {
	"id": "snowy_cairn_5",
	"level": 5,
	"chapter_name": {
		"chinese": "冰冻誓约序幕：低语的石堆",
		"thai": "ปฐมบทแห่งพันธะสัญญาเยือกแข็ง: เจดีย์หินกระซิบ",
		"korean": "얼어붙은 맹세의 서막: 속삭이는 돌무덤",
		"spanish": "Preludio de los Votos Congelados: El Cairn Susurrante",
		"vietnamese": "Khúc Dạo Đầu Của Lời Thề Băng Giá: Mộ Đá Thầm Thì",
		"japanese": "凍結した誓いの序幕：囁くケルン",
		"french": "Prélude des Vœux Gelés : Le Cairn Murmurant",
		"hindi": "जमे हुए प्रतिज्ञाओं का प्रस्तावना: फुसफुसाता हुआ पत्थर का ढेर",
		"english": "Prologue of Frozen Vows: The Whispering Cairn"
	},
	"theme": "snowy",
	"rising_count": 3,
	"world": {
		"secret": "이 혹독한 설원에는 수백 년간 깨어진 약속과 배신이 응축되어 형성된 살아있는 존재가 잠들어 있다. 그것은 인간의 탐욕과 불신을 감지하고 심판할 준비를 하고 있다.",
		"rule": "이 얼음의 땅에서는 생존을 위해 팀원 간의 절대적인 신뢰와 약속이 필수적이다. 작은 배신이라도 재앙을 불러올 수 있으며, 자연은 그 죄를 용서하지 않는다.",
		"setting": "끝없이 펼쳐진 눈 덮인 황야, 극한의 추위와 끊임없이 몰아치는 눈보라가 지배하는 얼음의 땅. 고대의 유적과 거대한 빙하가 곳곳에 흩어져 있어 신비롭고 위압적인 분위기를 자아낸다."
	},
	"protagonist_goal": "미지의 북부 황야를 탐험하고 새로운 항로를 개척하는 것. 동시에 혹독한 환경에서 팀원 모두가 생존하여 돌아가는 것이다.",
	"act_tone": {
		"rising": {
			"narrative_role": "Escalating dangers and the emergence of interpersonal conflicts within the expedition.",
			"tension": 3,
			"mood": "Perilous, Suspicious"
		},
		"climax_finale": {
			"tension": 5,
			"narrative_role": "A critical moment hinting at Cairn's true nature and the fragile trust among the team.",
			"mood": "Ominous, Betrayal's Whisper"
		},
		"intro": {
			"narrative_role": "Setting the stage for the journey and the enigmatic presence of Cairn.",
			"tension": 1,
			"mood": "Mysterious, Foreboding"
		}
	},
	"final_boss": {
		"motivation": "자신을 형성한 '배신'이라는 차가운 본질에 따라, 탐험대 사이의 약속과 신의를 시험하고, 그들의 숨겨진 이기심과 불순한 동기를 끄집어내는 것이 이 존재의 유일한 목적일 수 있다. (암시)",
		"id": "FrozenVow_Cairn_V1",
		"name": "Cairn",
		"twist": "탐험대가 중요한 맹세를 하거나 거래를 할 때, 돌무덤이 서서히 변하며 차가운 목소리가 울려 퍼진다. '…탐욕은 언제나 눈보라보다 빠르게 녹아내리지. 너희의 맹세, 그 무게는 대체 얼마였을까?' 이는 배신을 계획하는 자의 몸이 얼어붙기 시작하고, 모든 약속이 산산조각 날 것임을 암시한다.",
		"appearance": "차가운 눈보라 속, 거대한 돌무덤이 앙상하게 솟아 있다. 회색빛 화강암 조각들이 켜켜이 쌓여 얼음처럼 단단한 기둥을 이루고, 표면에는 눈꽃이 섬세하게 달라붙어 있지만, 그 아래로 드러나는 틈새마다 짙은 어둠이 배어 있어 마치 수많은 눈동자가 지켜보는 듯한 기묘한 위압감을 풍긴다. (A massive cairn rises starkly in a cold blizzard, composed of layers of grey granite shards, forming an ice-hard pillar. Delicate snowflakes cling to its surface, but dark shadows seep from the crevices beneath, creating a strange, imposing presence as if watched by countless eyes.)",
		"surface_identity": "눈 덮인 황야 한가운데 홀로 서 있는 오래된 돌무덤. 잊힌 바이킹 탐험가들이 길을 잃지 않기 위해 쌓았던 표식, 혹은 그들이 잠든 무덤 중 하나로 보인다. 주변에는 아무 생명체도 없고, 오직 차가운 바람만이 돌무덤 주위를 맴돌며 으스스한 침묵을 지킨다.",
		"true_identity": "이 돌무덤은 사실 수백 년간 북부의 혹독한 설원에서 무수히 깨어진 약속과 배신, 그리고 잊힌 맹세들이 응축되어 형성된 살아있는 '얼어붙은 맹세의 결실'일지도 모른다. (암시)"
	},
	"global_foreshadowing": [
		{
			"reveal_act": "rising",
			"reveal_room": 4,
			"plant_act": "intro",
			"plant_room": 1,
			"hint": "탐험대원들 사이에 사소한 의견 충돌이 발생하고, 각자의 이기심이 미묘하게 드러난다.",
			"reveal_context": "팀원들 간의 갈등이 고조되며, 신뢰가 흔들리는 상황에서 이전의 사소한 불화가 문제의 씨앗이었음이 드러난다.",
			"id": "GF_S1_01"
		},
		{
			"reveal_act": "climax_finale",
			"plant_room": 2,
			"plant_act": "rising",
			"reveal_room": 5,
			"hint": "브란이 은밀히 무언가를 숨기거나, 팀의 목표와 다른 개인적인 목적을 추구하는 듯한 행동을 보인다.",
			"reveal_context": "브란의 숨겨진 목적이 극적인 순간에 드러나며, 그가 팀 전체를 위험에 빠뜨릴 수 있는 배신을 계획했음이 암시된다.",
			"id": "GF_S1_02"
		},
		{
			"hint": "돌무덤 주변에서 수백 년은 족히 되어 보이는, 얼어붙어 완벽하게 보존된 유물들이 발견된다.",
			"id": "GF_S1_03",
			"reveal_context": "발견된 유물들이 돌무덤의 본질과 깊은 연관이 있음이 밝혀지며, 과거 깨어진 맹세들의 흔적임이 암시된다.",
			"reveal_act": "climax_finale",
			"reveal_room": 5,
			"plant_act": "rising",
			"plant_room": 3
		},
		{
			"reveal_act": "climax_finale",
			"plant_room": 5,
			"plant_act": "climax_finale",
			"reveal_room": 5,
			"hint": "돌무덤 주위를 맴도는 차가운 바람 소리가 마치 알아들을 수 없는 고대의 속삭임처럼 들린다.",
			"id": "GF_S1_04",
			"reveal_context": "바람 소리가 실제 돌무덤의 목소리처럼 들리며, 그 안에 잠든 존재가 깨어나고 있음을 극적으로 연출한다."
		}
	],
	"npc_roles": {
		"ivar": {
			"role": "탐험대의 리더로서 대원들을 독려하며 돌무덤을 탐험의 이정표로 삼으려 하는 인물.",
			"arc": "이 편에서는 리더십을 발휘하지만, 다음 편에서는 리더로서의 권위가 흔들리며 과거의 약속에 대한 부담을 느끼기 시작한다."
		},
		"eira": {
			"role": "팀의 생존을 위해 헌신하며, 돌무덤을 단순한 표식으로 여기지만 왠지 모를 불안감을 느끼는 탐험대원.",
			"arc": "이 편에서는 팀의 구심점 역할을 하며 돌무덤에 대한 막연한 불안감을 드러내고, 다음 편에서는 팀원들의 균열을 걱정하게 된다."
		},
		"bran": {
			"role": "돌무덤에 대한 미신적인 두려움을 표하거나, 탐험 목표 달성을 위해 무언가 위험한 제안을 하는 등 의심스러운 면모를 보이는 탐험대원.",
			"arc": "이 편에서 그의 이기적인 목적이 처음 암시되며, 다음 편에서는 배신의 씨앗을 뿌리기 시작한다."
		}
	},
	"scenarioOutline": [
		{
			"npc": "ivar",
			"boss": "random_boss",
			"title": "미지의 설원, 첫 발걸음",
			"act": "intro",
			"summary": "혹독한 설원에 첫 발을 내딛은 탐험대가 미지의 돌무덤 'Cairn'과 조우한다. 리더 이바르는 대원들을 독려하며 돌무덤을 탐험의 이정표로 삼으려 한다.",
			"order": 1
		},
		{
			"act": "rising",
			"title": "예상치 못한 조난",
			"boss": "random_boss",
			"npc": "eira",
			"order": 2,
			"summary": "갑작스러운 눈보라에 탐험대가 조난 위기에 처하고, 에이라는 팀의 생존을 위해 헌신하며 희미한 균열을 감지한다. 돌무덤 주변에서 이상하게 보존된 얼어붙은 유물들이 발견된다."
		},
		{
			"order": 3,
			"summary": "자원 부족이 심화되자 브란은 탐험 목표 달성을 위해 위험한 제안을 하거나, 무언가 숨기는 듯한 의심스러운 면모를 보인다. 대원들 사이에 사소한 의견 충돌이 발생한다.",
			"npc": "bran",
			"title": "브란의 수상한 제안",
			"act": "rising",
			"boss": "random_boss"
		},
		{
			"npc": "ivar",
			"act": "rising",
			"title": "불안한 전조",
			"boss": "random_boss",
			"order": 4,
			"summary": "점점 악화되는 상황 속에서 이바르는 리더로서의 책임감과 함께 알 수 없는 압박감을 느낀다. 탐험대원들 사이에 불화의 기운이 더욱 짙어진다."
		},
		{
			"order": 5,
			"summary": "돌무덤 'Cairn' 앞에서 탐험대는 중대한 결정을 앞두고 갈등한다. 차가운 바람 소리가 마치 속삭이는 듯 들리고, 브란의 내면에서 감춰진 욕망이 수면 위로 떠오르려는 찰나, 돌무덤에서 섬뜩한 기운이 뿜어져 나오며 존재의 첫 균열을 암시한다.",
			"npc": "bran",
			"title": "속삭이는 돌무덤의 균열",
			"act": "climax_finale",
			"boss": "pool_111"
		}
	],
	"act_summary": {
		"intro": "혹독한 북부 설원, 탐험대가 고대의 돌무덤 'Cairn'과 처음으로 조우하며 여정의 시작을 알린다. 리더 이바르의 지휘 아래, 미지의 환경에 대한 기대와 함께 막연한 불안감이 감돈다.",
		"climax_finale": "돌무덤 앞에서 탐험대는 심각한 갈등에 직면하고, 브란의 숨겨진 의도가 드러나려는 찰나, 'Cairn'은 마치 살아있는 듯한 섬뜩한 기운을 내뿜으며 그 안에 잠든 '얼어붙은 맹세'의 실체를 처음으로 암시한다. 이들의 맹세가 시험대에 오를 전조가 시작된다.",
		"rising": "예상치 못한 조난과 자원 부족이 팀원들을 벼랑 끝으로 몰아넣고, 생존을 위한 에이라의 헌신에도 불구하고 브란의 의심스러운 행동이 팀 내부에 균열을 만들기 시작한다. 돌무덤 주변의 기이한 유물들은 숨겨진 비밀을 암시한다."
	}
};
