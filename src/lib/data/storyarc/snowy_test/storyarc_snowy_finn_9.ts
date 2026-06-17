import type { StoryArc } from '$lib/types';

export const storyarc_snowy_finn_9: StoryArc = {
	"id": "snowy_finn_9",
	"level": 9,
	"chapter_name": {
		"thai": "อาร์คดยุกฟินน์แห่งบัลลังก์น้ำแข็ง",
		"english": "Archduke Finn of the Ice Throne",
		"japanese": "氷の玉座のフィン大公",
		"french": "L'Archiduc Finn du Trône de Glace",
		"hindi": "बर्फ़ीले सिंहासन के आर्कड्यूक फिन",
		"chinese": "冰之王座的芬恩大公",
		"korean": "얼음 왕좌의 대공 핀",
		"vietnamese": "Đại Công Tước Finn của Ngai Băng",
		"spanish": "El Archiduque Finn del Trono de Hielo"
	},
	"theme": "snowy",
	"rising_count": 3,
	"world": {
		"rule": "설산의 절대 권력은 '대공 핀'에게 있다. 그의 명을 거역하는 자는 얼음 속에 갇히는 형벌을 받는다. 이 곳의 몬스터들은 대공 핀의 명령에 복종하며, 외부인의 침입을 경계한다.",
		"secret": "대공 핀은 사실 설산의 왕이 아니며, 이 추운 환경에 적응하지 못해 따뜻한 곳으로 가고 싶어 하는 존재일지도 모른다. 그의 강압적인 태도는 허세에 가깝다.",
		"setting": "끝없이 펼쳐진 설원, 만년설로 뒤덮인 산봉우리, 그리고 얼음으로 이루어진 신비로운 동굴들. 고립되고 척박하지만, 동시에 압도적인 자연의 아름다움을 간직한 곳."
	},
	"protagonist_goal": "설산 깊숙한 곳에 숨겨진 전설의 유물을 찾아 떠나는 여정. 하지만 예상치 못한 대공 핀과의 조우로 인해 그의 진정한 의도를 파악하고 설산을 헤쳐나가야 한다.",
	"act_tone": {
		"climax_finale": {
			"tension": 5,
			"mood": "반전, 충격",
			"narrative_role": "표면적 정체에 대한 도전, 진짜 정체의 첫 균열 노출"
		},
		"intro": {
			"tension": 1,
			"narrative_role": "새로운 세계와 주요 인물 소개, 갈등의 씨앗 제시",
			"mood": "호기심, 경계"
		},
		"rising": {
			"tension": 3,
			"narrative_role": "점진적인 갈등 심화, 보스의 허세와 함께 미묘한 약점 암시",
			"mood": "긴장, 탐색"
		}
	},
	"final_boss": {
		"twist": "대공 핀의 왕좌가 불안정하거나, 그의 웅장한 선언 뒤에 작은 실수나 의도치 않은 코믹한 행동이 따라붙어 그의 위엄에 금이 가는 모습이 살짝 드러난다.",
		"id": "ArchdukeFinnTheChilly",
		"motivation": "탐험대가 가진 따뜻한 장비에 미묘한 관심을 보인다. 어쩌면 그저 추위를 피하고 싶은 것일지도 모른다.",
		"true_identity": "사실은 추위를 엄청나게 많이 타는 펭귄일지도 모른다는 의혹이 살짝 제기됨. 그의 허세 뒤에는 무언가 다른 약점이 숨겨져 있는 듯하다.",
		"name": "Archduke Finn",
		"surface_identity": "설산의 진정한 왕이라 자칭하며 침입자에게 무자비한 얼음 처형을 예고하는 지배자.",
		"appearance": "A round, plump penguin standing on a comically tall \"throne\" made of stacked ice cubes and frozen sardines. It wears a majestic but moth-eaten purple velvet cape fastened with a giant golden safety pin, and a crown that is clearly too large, constantly sliding over its left eye. In one wing, it grips a half-eaten frozen popsicle like a royal scepter. It wears neon orange ski goggles and a thick, hand-knitted wool muffler. Around it, tiny penguin minions hold up cardboard signs that say \"SCARY BOSS\" and \"BE AFRAID.\" The background is a glittering snowy tundra with a soft, cinematic 3D animation style, vibrant colors, and a funny, festive atmosphere."
	},
	"global_foreshadowing": [
		{
			"reveal_room": 5,
			"reveal_act": "climax_finale",
			"hint": "핀의 과하게 두꺼운 방한 장비와 불편해 보이는 모습.",
			"plant_room": 1,
			"plant_act": "intro",
			"reveal_context": "플레이어는 대공 핀의 과도한 방한 장비와 어딘가 불편해 보이는 모습을 통해 그의 허세 뒤에 숨겨진 약점을 어렴풋이 짐작하게 된다.",
			"id": "GF_Finn_WarmGear"
		},
		{
			"reveal_context": "핀이 플레이어의 따뜻한 복장에 노골적인 관심을 보이는 것을 통해 그가 추위에 취약하다는 강력한 암시를 받는다.",
			"id": "GF_Finn_EyesPlayerGear",
			"reveal_room": 8,
			"reveal_act": "climax_finale",
			"plant_act": "rising",
			"hint": "플레이어의 따뜻한 복장을 힐끗거리는 핀의 시선.",
			"plant_room": 2
		},
		{
			"reveal_act": "climax_finale",
			"reveal_room": 6,
			"plant_room": 3,
			"hint": "부하들이 들고 있는 'SCARY BOSS' 팻말의 초라함과 핀의 미숙한 지휘.",
			"plant_act": "rising",
			"reveal_context": "팻말의 상태나 부하들의 어설픈 행동, 핀의 어설픈 지휘는 그의 '왕'으로서의 위엄이 실상은 허세에 불과하다는 것을 보여준다.",
			"id": "GF_ScaryBossSign"
		},
		{
			"id": "GF_Finn_Shivering",
			"reveal_context": "대공 핀이 얼음 왕좌에 앉아 있음에도 불구하고 미묘하게 몸을 움츠리거나 불편해하는 모습은 그가 추위에 약하다는 직접적인 증거가 된다.",
			"plant_act": "rising",
			"hint": "얼음 의자에 앉아 있으면서도 어딘가 미묘하게 추워 보이는 핀.",
			"plant_room": 4,
			"reveal_room": 7,
			"reveal_act": "climax_finale"
		}
	],
	"npc_roles": {
		"boris": {
			"role": "대공 핀의 명령을 따르려 하지만 번번이 실수하여 오히려 핀의 허세를 반감시키는 어리숙한 시종.",
			"arc": "이 편에서는 핀의 얼음 왕좌를 세우는 과정에서 실수를 하거나 팻말을 거꾸로 드는 등의 행동으로 핀의 위엄을 해친다. 시리즈가 진행됨에 따라 핀의 허세를 무너뜨리거나 결정적인 순간에 트위스트를 돕는 코믹한 역할을 한다."
		},
		"inka": {
			"arc": "이 편에서는 '무서운 보스' 팻말을 가장 열심히 들며 핀의 허세를 돕지만, 핀의 불편함을 눈치채고 애써 감싸려 한다. 시리즈가 진행됨에 따라 핀의 진짜 정체와 소원을 플레이어에게 전달하는 중요한 역할을 하게 된다.",
			"role": "대공 핀의 위엄을 필사적으로 지키려 애쓰는 충성스러운 펭귄 시종."
		}
	},
	"scenarioOutline": [
		{
			"summary": "탐험대는 설산 깊은 곳에서 얼음 왕좌에 앉은 대공 핀과 그의 펭귄 시종들을 마주한다. 핀은 위엄 있는 모습으로 자신을 소개하며 침입자를 위협하지만, 그의 과도한 방한 장비와 어설픈 지휘가 묘한 위화감을 조성한다.",
			"title": "설산의 지배자, 대공 핀의 등장",
			"order": 1,
			"act": "intro",
			"npc": "inka",
			"boss": "random_boss"
		},
		{
			"boss": "random_boss",
			"npc": "boris",
			"act": "rising",
			"order": 2,
			"title": "불안정한 왕좌와 어리숙한 시종",
			"summary": "대공 핀의 명령에 따라 보리스가 그의 위엄을 과시하려 하지만, 얼음 왕좌를 지지하다가 휘청거리거나 'SCARY BOSS' 팻말을 거꾸로 드는 등 어리숙한 모습을 보인다. 핀은 애써 태연한 척하지만 그의 위엄은 조금씩 무너진다."
		},
		{
			"boss": "random_boss",
			"npc": "inka",
			"act": "rising",
			"order": 3,
			"title": "차가운 시선, 따뜻한 욕망?",
			"summary": "핀은 탐험대에게 설산을 떠나라고 엄포를 놓지만, 그의 시선은 자꾸만 플레이어의 따뜻한 방한복에 머문다. 인카는 핀의 불편함을 눈치채고 그를 돕기 위해 애쓰지만 역부족이다."
		},
		{
			"act": "rising",
			"npc": "boris",
			"boss": "random_boss",
			"summary": "대공 핀은 자신의 능력을 과시하기 위해 얼음 마법을 사용하려 하지만, 손을 덜덜 떨거나 기침을 하는 등 추위에 약한 모습을 보인다. 보리스는 어설프게 옆에서 호응하며 분위기를 더욱 어색하게 만든다.",
			"order": 4,
			"title": "얼음 속 숨겨진 몸부림"
		},
		{
			"act": "climax_finale",
			"boss": "pool_033",
			"npc": "inka",
			"summary": "탐험대가 핀의 지시를 거역하자, 핀은 격노하며 최종 경고를 날린다. 그러나 그의 얼음 왕좌 일부가 무너지거나, 그가 '추워!'라고 작게 중얼거리는 등, 그의 '설산의 왕'이라는 표면적 정체에 첫 균열이 생긴다. 인카는 당황하며 핀을 감싸려 하지만 이미 늦었다.",
			"order": 5,
			"title": "왕좌의 균열, 드러나는 진실의 그림자"
		}
	],
	"act_summary": {
		"climax_finale": "대공 핀이 격노하며 탐험대에게 최종 경고를 날리는 순간, 그의 '왕'으로서의 모습에 결정적인 균열이 생깁니다. 얼음 왕좌의 일부가 무너지거나 그가 무심코 추위를 토로하는 등, 핀의 진짜 정체와 약점에 대한 강력한 복선이 제시되며 다음 이야기를 위한 궁금증을 유발합니다.",
		"intro": "탐험대는 설산에 도착하여 얼음 왕좌의 대공 핀과 첫 조우를 합니다. 핀은 위엄 있는 모습으로 자신을 '설산의 왕'이라 칭하며 침입자들을 경고하지만, 그의 과도한 방한 장비와 어설픈 지휘는 그의 위엄에 의문을 품게 합니다.",
		"rising": "대공 핀은 어리숙한 시종 보리스와 충성스러운 시종 인카를 통해 자신의 권위를 내세우려 하지만, 계속해서 허세와 약점이 노출됩니다. 플레이어의 따뜻한 복장에 대한 핀의 시선이나, 그가 추위에 약한 모습을 보이는 등, 그의 표면적 정체 뒤에 숨겨진 진실에 대한 암시가 점차 드러납니다."
	}
};
