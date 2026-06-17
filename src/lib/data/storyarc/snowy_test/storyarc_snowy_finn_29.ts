import type { StoryArc } from '$lib/types';

export const storyarc_snowy_finn_29: StoryArc = {
	"id": "snowy_finn_29",
	"level": 29,
	"chapter_name": {
		"hindi": "बर्फ के सिंहासन का पतन: आर्कड्यूक फिन का गर्मजोशी भरा अंत",
		"vietnamese": "Sự Sụp Đổ của Ngai Vàng Băng: Kết Cục Ấm Áp của Đại Công Tước Finn",
		"chinese": "冰之王座的陨落：芬恩大公的温暖结局",
		"english": "Fall of the Ice Throne: Archduke Finn's Warm Ending",
		"french": "La Chute du Trône de Glace: La Fin Chaleureuse de l'Archiduc Finn",
		"thai": "การล่มสลายของบัลลังก์น้ำแข็ง: จุดจบอันอบอุ่นของอาร์คดยุกฟินน์",
		"spanish": "La Caída del Trono de Hielo: El Cálido Final del Archiduque Finn",
		"korean": "얼음 왕좌의 몰락: 핀 대공의 따뜻한 결말",
		"japanese": "氷の玉座の陥落：フィン大公の暖かい結末"
	},
	"theme": "snowy",
	"rising_count": 3,
	"world": {
		"setting": "여전히 눈 덮인 설산 깊은 곳, 대공 핀의 얼음 왕좌가 있는 심장부. 이제는 왕좌가 완전히 무너지기 직전의 위태로운 모습을 보인다.",
		"rule": "차가운 환경에서 살아남기 위한 생존 규칙이 지배하지만, 동시에 예상치 못한 따뜻함과 유머가 공존한다. 눈싸움은 승패를 넘어선 화합의 수단이 된다.",
		"secret": "대공 핀은 사실 추위를 극도로 싫어하며 따뜻한 곳으로 가고 싶어 하는 평범한 펭귄이다. 그의 모든 허세는 추위를 감추고 탐험대의 온기를 탐내기 위한 것이었다."
	},
	"protagonist_goal": "얼음 왕좌의 대공 핀과 최종 대결을 펼쳐, 그의 진짜 정체와 숨겨진 욕구를 완전히 해결하고 설산에 평화를 가져온다.",
	"act_tone": {
		"intro": {
			"tension": 1,
			"mood": "긴장감 속 기대",
			"narrative_role": "피날레의 시작을 알리며 마지막 대결을 예고한다."
		},
		"rising": {
			"narrative_role": "대공 핀의 허세가 완전히 무너지고 진실이 드러나는 과정을 보여준다.",
			"tension": 3,
			"mood": "격정적 혼란"
		},
		"climax_finale": {
			"narrative_role": "핀의 트위스트가 터지며 모든 갈등이 해결되고 유쾌하게 마무리된다.",
			"tension": 5,
			"mood": "유쾌한 해방감"
		}
	},
	"final_boss": {
		"twist": "핀이 비장하게 외치며 돌진하는 '슈퍼 울트라 아이스 슬라이딩'은 발이 미끄러져 자기 발에 걸려 넘어지는 코미디로 끝난다. 그는 쓰러지면서 '아얏... 너희, 봤지? 나의 이 화려한 바디 체크를...!' 하고 허세를 부리지만, 곧이어 배를 깔고 미끄러져 나가며 '…이길 생각은 없었는데… 혹시 남는 전기장판 있니? 착불로 보내줘도 돼…'라고 독백하며 자신의 진짜 소원과 연약함을 드러낸다. 플레이어는 그에게 따뜻한 담요와 핫팩을 건네주며 그의 소원을 들어준다.",
		"name": "Archduke Finn",
		"motivation": "탐험대가 가진 핫팩이나 방한 장비가 너무 탐나며, 솔직히 말해서 누가 자기랑 눈싸움 한 판만 진심으로 해줬으면 좋겠다. 그는 외롭고 추웠다.",
		"true_identity": "사실은 추위를 엄청나게 많이 타는 평범한 펭귄. 따뜻한 남쪽 나라로 가려다 길을 잃어버려서, 그냥 여기 있는 몬스터들을 모아 왕 노릇을 하고 있었다. 그는 단순히 따뜻한 것과 진심으로 눈싸움해 줄 친구를 원했다.",
		"appearance": "A round, plump penguin, no longer on a throne but struggling to regain balance after a comical fall in the snow. Its majestic but moth-eaten purple velvet cape is askew, revealing patched holes. The too-large crown has fallen over its eyes. One wing still clutches the half-eaten frozen popsicle, now covered in snow. The neon orange ski goggles are askew, and the thick, hand-knitted wool muffler is unraveled. Around it, tiny penguin minions now hold up new cardboard signs saying 'HELP BOSS' and 'HE'S COLD.' The background is a glittering snowy tundra with a soft, cinematic 3D animation style, vibrant colors, and a funny, festive atmosphere, but with a touch of pathos.",
		"id": "ArchdukeFinnTheChilly",
		"surface_identity": "설산의 진정한 왕이라 자칭하며 침입자에게 무자비한 얼음 처형을 예고하는 지배자."
	},
	"global_foreshadowing": [
		{
			"reveal_act": "climax_finale",
			"plant_room": 1,
			"id": "Finn_Warmth_Desire",
			"reveal_context": "핀이 전기장판을 찾는 독백을 통해 그의 진정한 소원이 밝혀진다.",
			"hint": "대공 핀은 추위에 떨며 몰래 핫팩을 만지작거린다.",
			"plant_act": "intro",
			"reveal_room": 5
		},
		{
			"plant_act": "rising",
			"hint": "핀 대공이 발을 헛디뎌 작은 언덕에서 미끄러진다.",
			"reveal_room": 4,
			"reveal_act": "climax_finale",
			"id": "Finn_Slide_Failure",
			"reveal_context": "핀의 필살기 '아이스 슬라이딩'이 비참하게 실패하며 넘어지는 모습이 공개된다.",
			"plant_room": 3
		},
		{
			"reveal_act": "climax_finale",
			"id": "Inka_Confession",
			"reveal_context": "인카가 플레이어에게 핀의 진짜 상황을 직접적으로 고백한다.",
			"plant_room": 2,
			"plant_act": "rising",
			"hint": "인카가 불안한 눈빛으로 핀 대공의 허세를 지켜본다.",
			"reveal_room": 5
		},
		{
			"reveal_room": 3,
			"plant_act": "climax_finale",
			"hint": "보리스가 핀 대공 주변의 얼음 조각을 밟고 휘청거린다.",
			"plant_room": 4,
			"reveal_context": "보리스의 의도치 않은 행동이 핀의 '필살기' 실패에 영향을 미친다.",
			"id": "Boris_Twist_Help",
			"reveal_act": "climax_finale"
		}
	],
	"npc_roles": {
		"inka": {
			"role": "충성스러운 시종이었으나, 이제 핀의 진짜 정체를 플레이어에게 밝히는 결정적인 역할을 하는 인물.",
			"arc": "시작부터 핀의 허세를 감싸려 애썼지만, 이 편에서는 더 이상 숨기지 못하고 그가 길을 잃고 추위에 시달리는 펭귄임을 직접 고백한다. 핀에게 따뜻한 옷과 진정한 소원 해결을 돕는 역할을 하며 그의 곁을 지킨다."
		},
		"boris": {
			"arc": "이전 편들에서 핀의 허세를 무너뜨리는 데 일조했던 것처럼, 이 편에서는 핀의 '필살기'를 방해하거나 넘어지는 핀을 돕는 등 의도치 않게 트위스트를 완성시킨다. 핀에게 전기장판이 없냐고 묻는 것을 옆에서 듣고 순진하게 되묻는 역할을 맡아 유머를 더한다.",
			"role": "어리숙하지만 트위스트를 완성시키는 데 의도치 않게 기여하는 시종."
		},
		"eira": {
			"role": "핀의 과거와 현재 상황을 정확히 알고 플레이어가 문제를 해결하도록 돕는 탐험가.",
			"arc": "지난 편에서 핀의 진짜 상태에 대한 외부인의 시선을 제공했다면, 이 편에서는 핀의 진짜 문제를 이해하고 플레이어가 핀을 돕는 방법을 제시하거나, 핀이 따뜻한 곳으로 갈 수 있도록 돕는 역할을 한다. 혹은 핀의 외로운 눈싸움 소원을 해결해 줄 방법을 찾아 플레이어에게 제안한다."
		}
	},
	"scenarioOutline": [
		{
			"npc": "inka",
			"order": 1,
			"summary": "탐험대는 핀 대공과 다시 조우한다. 핀은 여전히 '설산의 왕'으로서의 위엄을 내세우지만, 그의 복장과 행동에서 추위를 이기려는 간절함이 역력하다. 충성스러운 시종 인카는 그의 불안한 모습을 애써 감추려 하지만 역부족이다. 핀은 마지막 필살기를 예고하며 탐험대를 위협한다.",
			"boss": "random_boss",
			"act": "intro",
			"title": "허세의 막바지: 핀 대공의 마지막 경고"
		},
		{
			"npc": "inka",
			"summary": "핀의 허세가 계속되자, 인카는 더 이상 참지 못하고 플레이어에게 핀이 사실 길을 잃고 추위에 시달리는 평범한 펭귄임을 고백한다. 이 고백으로 핀의 '왕'으로서의 모습에 결정적인 균열이 생긴다.",
			"order": 2,
			"title": "균열: 인카의 고백과 진실의 서막",
			"boss": "random_boss",
			"act": "rising"
		},
		{
			"title": "정황 증거: 에이라와 보리스의 폭로",
			"boss": "random_boss",
			"act": "rising",
			"npc": "eira",
			"summary": "탐험가 에이라는 핀이 오래전부터 남쪽 나라를 찾아 헤매던 펭귄이었다는 목격담을 전한다. 한편 보리스는 핀 대공이 몰래 숨겨둔 전기장판 광고 전단지를 발견해 들고 다니며, 핀의 진짜 소원을 우회적으로 드러낸다.",
			"order": 3
		},
		{
			"act": "rising",
			"boss": "random_boss",
			"title": "필살기 발동: 허세와 현실의 충돌",
			"summary": "진실이 드러나자 핀 대공은 당황하며 자신의 마지막 '필살기'인 '슈퍼 울트라 아이스 슬라이딩'을 시전하려 한다. 그러나 보리스가 실수로 핀의 발밑 얼음을 건드리거나, 핀 자신이 너무 추워 몸이 굳어있는 등, 그의 계획은 시작부터 삐걱거린다.",
			"order": 4,
			"npc": "boris"
		},
		{
			"boss": "pool_033",
			"act": "climax_finale",
			"title": "따뜻한 결말: 핀 대공의 진정한 소원",
			"summary": "핀은 발이 미끄러져 자기 발에 걸려 넘어지며 처절하게 슬라이딩한다. '이길 생각은 없었는데… 혹시 남는 전기장판 있니?'라는 그의 독백을 들은 플레이어는 핀에게 따뜻한 핫팩과 담요를 건넨다. 인카는 핀의 기쁨에 함께 울먹이고, 에이라는 그에게 남쪽 나라로 가는 지도를 건네준다. 보리스는 그에게 따뜻한 코코아를 건네며, 모두 함께 눈싸움을 하며 유쾌한 엔딩을 맞는다.",
			"order": 5,
			"npc": "inka"
		}
	],
	"act_summary": {
		"intro": "탐험대는 핀 대공의 마지막 허세와 마주한다. 핀은 자신의 '필살기'를 예고하며 마지막 위엄을 보이려 하지만, 그의 말과 행동에서는 이미 추위와 외로움이 묻어난다. 인카는 핀의 진짜 모습을 감추려 애쓰지만 한계에 다다른다.",
		"climax_finale": "핀의 필살기는 코미디처럼 실패하고, 그는 결국 따뜻함과 친구를 원했다는 진심을 고백한다. 탐험대는 그의 소원을 들어주고, 모두 함께 유쾌한 눈싸움을 즐기며 핀은 자신의 진짜 행복을 찾는다. 설산에는 유쾌한 평화가 찾아온다.",
		"rising": "인카의 직접적인 고백, 에이라의 증언, 보리스의 의도치 않은 폭로로 핀 대공의 '설산의 왕'이라는 허세는 완전히 무너지고, 그가 사실은 길을 잃고 추위에 시달리는 평범한 펭귄임이 밝혀진다. 핀은 당황하며 마지막 발악으로 자신의 '필살기'를 시전하려 한다."
	}
};
