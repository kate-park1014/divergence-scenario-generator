import type { StoryArc } from '$lib/types';

export const storyarc_snowy_finn_19: StoryArc = {
	"id": "snowy_finn_19",
	"level": 19,
	"chapter_name": {
		"chinese": "冰之王座的裂痕：芬恩大公的秘密",
		"french": "Les Fissures du Trône de Glace : Le Secret de l'Archiduc Finn",
		"korean": "얼음 왕좌의 균열: 핀 대공의 비밀",
		"english": "Cracks in the Ice Throne: Archduke Finn's Secret",
		"japanese": "氷の玉座の亀裂: フィン大公の秘密",
		"vietnamese": "Những Vết Nứt Trên Ngai Vàng Băng Giá: Bí Mật của Đại Công Tước Finn",
		"spanish": "Grietas en el Trono de Hielo: El Secreto del Archiduque Finn",
		"thai": "รอยร้าวบนบัลลังก์น้ำแข็ง: ความลับของอาร์คดยุกฟินน์",
		"hindi": "बर्फ़ीले सिंहासन में दरारें: आर्कड्यूक फ़िन का रहस्य"
	},
	"theme": "snowy",
	"rising_count": 3,
	"world": {
		"rule": "차가운 환경에서 생존하는 것이 중요하며, 외부 침입자는 '설산의 왕'이라 칭하는 자의 지배를 받는다.",
		"setting": "끝없이 펼쳐진 눈 덮인 설산, 고립된 얼음 왕국.",
		"secret": "설산의 왕이라 불리는 존재는 사실 추위에 약하며, 고향으로 돌아가거나 따뜻한 것을 갈망한다. 그의 진정한 욕망은 숨겨져 있다."
	},
	"protagonist_goal": "핀 대공의 허세 뒤에 숨겨진 진실을 파악하고, 설산의 미스터리를 해결하며, 대공이 왜 따뜻한 것을 갈망하는지 알아낸다.",
	"act_tone": {
		"rising": {
			"tension": 3,
			"mood": "갈등, 혼란, 추리",
			"narrative_role": "주인공의 추리와 핀 대공의 허세가 충돌하며 진실에 다가감"
		},
		"intro": {
			"tension": 1,
			"mood": "긴장감, 의문",
			"narrative_role": "사건의 발단과 새로운 단서 제시"
		},
		"climax_finale": {
			"tension": 5,
			"mood": "절정, 반전의 예고",
			"narrative_role": "핀 대공의 결정적인 약점과 진짜 정체에 대한 강력한 복선"
		}
	},
	"final_boss": {
		"appearance": "A slightly disheveled, round, plump penguin on a melting 'throne' of ice cubes and frozen sardines, looking visibly uncomfortable. Its majestic but moth-eaten purple velvet cape is askew, fastened with a giant golden safety pin. The too-large crown is sliding further over its left eye. It nervously clutches a half-eaten frozen popsicle, shivering slightly. It wears neon orange ski goggles, fogged up, and a thick, hand-knitted wool muffler. Around it, tiny penguin minions now hold up even more tattered cardboard signs that say 'STILL SCARY BOSS' and 'PLEASE BE AFRAID BUT DON'T JUDGE'. The background shows a glittering snowy tundra with hints of warmer, greener lands far in the distance, in a soft, cinematic 3D animation style, vibrant colors, and a funny, yet increasingly poignant atmosphere.",
		"twist": "핀 대공은 '왕의 명령'이라며 탐험대에게 터무니없는 '눈싸움 대결'을 제안한다. 그는 비장하게 필살기를 준비하는 척하지만, 그의 몸짓은 어딘가 어설프고 추위에 떨고 있어 그가 가진 큰 비밀의 전조가 된다.",
		"id": "ArchdukeFinnTheChilly",
		"name": "Archduke Finn",
		"motivation": "탐험대가 가진 핫팩이나 방한 장비가 너무 탐나고, 솔직히 말해서 누가 자기랑 진심으로 눈싸움 한 판만 해줬으면 한다. 추위와 외로움에서 벗어나고 싶어 한다.",
		"surface_identity": "설산의 진정한 왕이라 자칭하며 침입자에게 무자비한 얼음 처형을 예고하는 지배자.",
		"true_identity": "사실은 추위를 엄청나게 많이 타는 펭귄으로, 따뜻한 남쪽 나라로 가려다 길을 잃었다. 몬스터들을 모아 왕 노릇을 하고 있지만, 점점 그의 진짜 모습이 드러난다."
	},
	"global_foreshadowing": [
		{
			"plant_room": 12,
			"plant_act": "intro",
			"id": "fores_finn_south_hint",
			"reveal_context": "핀 대공이 추위에 떨며 무심코 '남쪽 나라' 이야기를 꺼내고, 인카가 당황하며 이를 수습한다.",
			"hint": "핀 대공의 남쪽 나라에 대한 무의식적인 언급.",
			"reveal_act": "climax_finale",
			"reveal_room": 51
		},
		{
			"plant_room": 23,
			"plant_act": "rising",
			"id": "fores_finn_hotpack_discovery",
			"reveal_context": "보리스가 실수로 핀 대공의 '왕좌' 아래에 숨겨진 핫팩 뭉치를 발견하고, 핀 대공이 이를 필사적으로 숨기려 한다.",
			"hint": "핀 대공이 숨겨둔 핫팩 뭉치 또는 방한 장비.",
			"reveal_act": "climax_finale",
			"reveal_room": 52
		},
		{
			"plant_room": 34,
			"plant_act": "rising",
			"id": "fores_eira_finn_past",
			"reveal_context": "에이라가 핀 대공이 과거에 길을 잃고 헤매던 모습이나, 추위에 떨던 모습을 언급하며 그의 진짜 정체에 대한 실마리를 제공한다.",
			"hint": "에이라가 목격한 핀 대공의 과거 또는 추위에 떠는 모습.",
			"reveal_act": "climax_finale",
			"reveal_room": 53
		},
		{
			"hint": "핀 대공이 제안하는 '왕'의 특별한 규칙이 사실은 개인적인 욕구와 관련 있음.",
			"reveal_act": "climax_finale",
			"reveal_room": 54,
			"plant_room": 11,
			"plant_act": "intro",
			"id": "fores_finn_snowball_motive",
			"reveal_context": "핀 대공이 '왕의 품위'를 운운하며 탐험대에게 특이한 눈싸움을 제안하고, 그의 속마음이 드러나기 시작한다."
		}
	],
	"npc_roles": {
		"boris": {
			"role": "여전히 어리숙하게 핀 대공의 '왕관'을 떨어뜨리거나, 핀이 몰래 숨겨둔 핫팩 뭉치를 우연히 발견하는 등 핀의 허세를 무너뜨리는 데 일조하는 시종.",
			"arc": "그의 실수로 핀의 진정한 모습이 드러난다. (시리즈 연결: 결정적인 순간에 핀의 '필살기'를 방해하여 트위스트를 완성)"
		},
		"inka": {
			"role": "핀 대공의 불편함을 눈치채고 애써 감싸려 하지만 점점 한계를 느끼는 충성스러운 펭귄 시종.",
			"arc": "핀이 '남쪽 나라'를 그리워한다는 힌트를 무심코 흘려 그의 진짜 정체에 대한 복선을 강화한다. (시리즈 연결: 핀의 비밀을 플레이어에게 직접 고백하게 됨)"
		},
		"eira": {
			"role": "설산의 지형과 야생동물에 능통한 탐험가.",
			"arc": "핀 대공이 길을 잃고 헤매는 모습을 본 적이 있거나, 그의 진짜 상태에 대해 추측하는 외부인의 시선을 제공하며 플레이어가 핀의 숨겨진 동기를 이해하도록 돕는다. (시리즈 연결: 핀의 문제를 이해하고 해결책을 제시)"
		}
	},
	"scenarioOutline": [
		{
			"title": "균열의 시작: 핀 대공의 수상한 명령",
			"boss": "random_boss",
			"order": 1,
			"act": "intro",
			"npc": "inka",
			"summary": "탐험대는 다시 핀 대공 앞에 서고, 대공은 전보다 더 과장된 '왕의 위엄'을 내세우며 무리한 요구를 한다. 인카는 핀의 불안정한 모습을 애써 감싸려 하지만, 그의 입에서 무심코 '남쪽 나라'에 대한 그리움이 튀어나와 플레이어는 의문을 품는다."
		},
		{
			"npc": "boris",
			"summary": "핀 대공이 '왕의 품위'를 운운하며 얼음 왕좌에서 발을 동동 구르던 중, 어리숙한 보리스가 실수로 왕좌를 건드려 아래에 숨겨져 있던 핫팩 뭉치가 쏟아져 나온다. 핀은 당황하며 이를 황급히 숨기려 한다.",
			"boss": "random_boss",
			"order": 2,
			"act": "rising",
			"title": "핫팩의 비밀: 보리스의 결정적인 실수"
		},
		{
			"title": "외부의 시선: 에이라의 목격담",
			"boss": "random_boss",
			"order": 3,
			"act": "rising",
			"npc": "eira",
			"summary": "설산 탐험가 에이라가 등장하여 탐험대에게 핀 대공이 사실은 이 설산 출신이 아니며, 과거 길을 잃고 헤매는 것을 본 적이 있다고 귀뜸한다. 그녀는 핀이 추위에 약하다는 직접적인 증거들을 제시한다."
		},
		{
			"npc": "inka",
			"summary": "핀 대공은 자신의 위엄이 땅에 떨어지자, '왕의 권위'를 걸고 탐험대에게 강제로 '눈싸움 대결'을 제안한다. 인카는 핀의 진정한 동기가 단순히 싸움이 아니라는 것을 암시하듯 불안한 모습을 보인다.",
			"boss": "random_boss",
			"order": 4,
			"act": "rising",
			"title": "피할 수 없는 대결: 눈싸움 제안"
		},
		{
			"title": "필살기 전조: 흔들리는 왕좌",
			"boss": "pool_033",
			"order": 5,
			"act": "climax_finale",
			"npc": "boris",
			"summary": "핀 대공은 비장하게 '필살기'를 예고하며 눈덩이를 들지만, 그의 몸은 추위에 떨고 눈빛은 외로워 보인다. 보리스는 그런 핀을 걱정스럽게 바라보다가, 핀이 얼음 위에 미끄러져 넘어지는 결정적인 순간을 목격하며 그의 허세 뒤에 숨겨진 진짜 모습이 폭로될 것임을 암시한다."
		}
	],
	"act_summary": {
		"climax_finale": "핀 대공은 비장하게 필살기를 예고하지만, 추위에 떨고 외로워하는 모습이 역력하다. 그가 얼음 위에 미끄러져 넘어지는 결정적인 순간을 통해, 다음 편에서 그의 허세와 진짜 정체가 완전히 폭로될 것임을 강력하게 암시한다.",
		"intro": "탐험대는 다시 핀 대공과 조우한다. 대공은 과장된 왕의 위엄을 내세우지만, 그의 언행에서 '남쪽 나라'에 대한 그리움이 드러나며 그의 진짜 정체에 대한 의문이 증폭된다.",
		"rising": "보리스의 실수로 핀 대공의 핫팩 뭉치가 드러나고, 탐험가 에이라의 증언으로 핀이 길을 잃은 추위에 약한 펭귄임이 밝혀진다. 핀은 자신의 허세가 무너지자 '왕의 권위'를 내세우며 눈싸움 대결을 제안한다."
	}
};
