import type { StoryArc } from '$lib/types';

export const storyarc_snowy_pool_104: StoryArc = {
	"world": {
		"setting": "The world is an endless, unforgiving expanse of frozen peaks and valleys, shrouded in eternal winter. Ancient, colossal ice formations pierce the sky, and blizzards rage relentlessly. Beneath the serene, deadly beauty, hidden ruins whisper of forgotten gods and ancient, monstrous entities that slumber beneath the permafrost, occasionally stirring to demand their cruel tributes.",
		"rule": "Survival in this brutal landscape is paramount, but true danger lies not in the elements, but in the treacherous hearts of those who seek power or mere survival. Appearances are deceiving, and trust is a luxury few can afford. Dark pacts are whispered among the desperate, and the price of power is always souls.",
		"secret": "A forgotten frost entity dwells within these snowy peaks, an ancient, insatiable being that demands the life essence of powerful warriors as sustenance, binding them to an eternal, tormented existence if they dare to strike a pact for strength or immortality."
	},
	"act_summary": {
		"rising": "점차 흉포해지는 환경과 마주하는 조력자들의 배신 속에서 주인공은 거대한 존재의 그림자가 드리워진 음모의 실체를 조금씩 깨닫게 된다. 희생과 광기, 그리고 뒤틀린 진실들이 연속적으로 드러나며 점차 절망적인 상황으로 치닫는다.",
		"climax_finale": "모든 복선이 수렴하고 숨겨진 진실이 밝혀지는 순간, 주인공은 모든 사건의 배후이자 자신의 운명을 조종하려 했던 비욘 블로드울프와 최후의 결전을 벌인다. 비욘의 이중적인 정체성과 핏빛 연회의 진정한 의미가 드러나며 충격적인 결말을 맞이한다.",
		"intro": "혹한의 땅에 발을 들인 주인공이 미스터리한 안내자 아눅을 만나 생존을 위한 여정을 시작하지만, 얼어붙은 세계의 숨겨진 위협과 기만적인 첫 만남을 통해 불안한 서막이 열린다."
	},
	"final_boss": {
		"name": "Bjorn Blodulv",
		"zodiac_sign": "Gemini",
		"appearance_npc": "A colossal male figure, cloaked in ice-hardened bear furs and ancient, frost-rimed leather armor, his frame corded with battle-hardened muscle. His face, etched with scars and a perpetual, quiet intensity, is framed by a wild, snow-dusted mane and beard. In one hand, he wields a massive, two-headed axe, its sharpened blades glinting with frozen mist.",
		"surface_identity": "The 'Winter's Hound,' a legendary, solitary berserker who prowls the deepest, most treacherous reaches of the snowy peaks. He appears as a fierce guardian of an ancient, ice-bound pass, challenging anyone who dares to trespass further into the frozen wilderness, testing their strength and resolve with his formidable combat prowess.",
		"twist": "You fought well, little morsels. But this was never about your strength, nor my glory. It was always about *their* hunger. And now... *they feast*.",
		"id": "pool_104",
		"true_identity": "The spirit of Bjorn Blodulv, a formidable Viking chieftain whose insatiable bloodlust and thirst for battle led him to strike a dark pact with a forgotten frost entity dwelling within these snowy peaks. He isn't merely a guardian; he is a cursed vessel, acting as the entity's harbinger, luring powerful warriors into deadly combat to feed the ancient being with their dying essence, ensuring his own tormented existence continues.",
		"appearance_boss": "A colossal male figure, cloaked in ice-hardened bear furs and ancient, frost-rimed leather armor, his frame corded with battle-hardened muscle. His face, etched with scars and a perpetual, quiet intensity, is framed by a wild, snow-dusted mane and beard. In one hand, he wields a massive, two-headed axe, its sharpened blades glinting with frozen mist. However, his eyes now glow with an eerie, frost-blue light, and wisps of frozen mist constantly swirl around him, hinting at the entity within.",
		"motivation": "Driven by a primal urge for combat that transcends mortal desires and the echoes of countless battles, Bjorn sought a land where his berserker rage could run untamed. He found it in these frozen wastes, where a powerful frost entity offered him eternal challenges and boundless strength in exchange for feeding its insatiable hunger with the souls of worthy warriors. He stalks the explorers, not for glory, but to assess their potential as powerful sacrifices to maintain his pact and prolong his cursed, yet thrilling, existence."
	},
	"id": "snowy_pool_104",
	"act_tone": {
		"rising": {
			"tension": 3,
			"narrative_role": "Deepen the conflict, reveal layers of deception, and force the protagonist into increasingly desperate situations where their choices have severe consequences. Question loyalties and motivations.",
			"mood": "Desperate, escalating dread, emotional manipulation"
		},
		"climax_finale": {
			"mood": "Brutal, shocking, twisted resolution",
			"tension": 5,
			"narrative_role": "Deliver a devastating confrontation where all truths are laid bare. The final battle is not just physical but a clash of ideals and shattered illusions, leading to a profound and often tragic revelation. The boss's Gemini duality is exposed."
		},
		"intro": {
			"mood": "Misty, foreboding, subtly unsettling",
			"tension": 1,
			"narrative_role": "Establish the deadly beauty of the frozen world and introduce the initial mystery and sense of unease. Hint at underlying dangers beyond the obvious."
		}
	},
	"protagonist_goal": "To survive the treacherous winter, uncover the truth behind the mysterious disappearances and the unnaturally aggressive wildlife, and ultimately break the curse that binds the land and its tormented inhabitants.",
	"rising_count": 3,
	"global_foreshadowing": [
		{
			"reveal_context": "Anuk reveals he was sent to guide the protagonist to this very location, subtly manipulating events.",
			"reveal_room": 9,
			"id": "fs_001",
			"reveal_act": "climax_finale",
			"plant_act": "intro",
			"plant_room": 3,
			"hint": "The strange familiarity of certain landmarks, as if someone knew the protagonist's path even before they took it."
		},
		{
			"reveal_room": 10,
			"reveal_context": "Bjorn's twist speech, revealing the 'feast' for the ancient entity, connects the whispers to the entity's hunger for souls.",
			"plant_act": "rising",
			"hint": "Whispers in the wind, sounding like ancient incantations or desperate pleas, often heard when a living creature perishes in the snow.",
			"plant_room": 5,
			"id": "fs_002",
			"reveal_act": "climax_finale"
		},
		{
			"reveal_room": 11,
			"reveal_context": "Bjorn's dual identity as both guardian and the entity's vessel, and his two-headed axe, are revealed, embodying the protective yet destructive nature of the 'beast'.",
			"plant_room": 7,
			"hint": "The recurring image of a two-headed beast in ancient carvings and half-remembered legends, representing both protector and devourer.",
			"plant_act": "rising",
			"reveal_act": "climax_finale",
			"id": "fs_003"
		},
		{
			"plant_room": 9,
			"hint": "An unnaturally bright, almost blood-red moon on certain nights, coinciding with inexplicable surges of primal energy and violent animal behavior.",
			"plant_act": "rising",
			"reveal_act": "climax_finale",
			"id": "fs_004",
			"reveal_room": 12,
			"reveal_context": "Bran's warning about the '핏빛 달' is revealed to be the true source of the entity's power surges and its influence over the land, culminating in the final ritual."
		}
	],
	"scenarioOutline": [
		{
			"summary": "주인공은 혹독한 눈보라 속에서 길을 잃고 얼어붙은 환영에 시달린다. 정신을 잃어가던 찰나, 신비로운 분위기의 사냥꾼 '아눅'에게 구조된다. 아눅은 도움을 주는 듯하지만, 그의 눈빛 속에는 숨겨진 의도가 스쳐 지나간다.",
			"boss": "random_boss",
			"order": 1,
			"act": "intro",
			"npc": "anuk",
			"title": "첫 만남: 얼어붙은 환영과 낯선 안내자"
		},
		{
			"summary": "아눅의 안내로 피난처를 찾던 중, 일행은 오래된 얼음 동굴에서 조난당한 생존자 '에이라'를 만난다. 에이라는 도움을 청하지만, 그녀의 행동은 어딘가 미심쩍다. 곧 동굴은 무너져 내리고, 일행은 함정에 빠진다. 에이라는 누군가에게 무언가를 '제물'처럼 바치는 듯한 알 수 없는 말을 중얼거린다.",
			"boss": "random_boss",
			"act": "rising",
			"order": 2,
			"title": "조난과 배신: 얼음 동굴 속 덫",
			"npc": "eira"
		},
		{
			"title": "깨어진 믿음: 환영 속의 추적자",
			"npc": "ivar",
			"act": "rising",
			"order": 3,
			"boss": "random_boss",
			"summary": "무너진 동굴에서 간신히 탈출한 주인공은 아눅과 떨어진다. 혼자 헤매던 중, 광기에 사로잡힌 듯한 추적자 '이바르'와 마주친다. 이바르는 자신을 '겨울의 사냥개'라 칭하며 주인공을 공격하고, 그 과정에서 주인공은 주변 환영이 실체가 아님을 깨닫지만, 이바르의 행동은 어떤 '목적'을 위한 것임을 암시한다."
		},
		{
			"npc": "bran",
			"title": "드러나는 속셈: 그림자 뒤의 조종자",
			"order": 4,
			"act": "rising",
			"boss": "random_boss",
			"summary": "이바르를 제압하고 겨우 진실에 다가가려는 주인공 앞에, 과거의 기억을 상실한 듯한 노인 '브란'이 나타난다. 브란은 희미한 기억으로 이 땅의 저주와 '핏빛 달'에 대한 경고를 해주지만, 그의 조언은 묘하게 주인공을 특정 장소로 유도하는 듯하다. 아눅이 갑자기 나타나 브란을 막아서며 둘 사이에 긴장감이 감돈다."
		},
		{
			"summary": "브란과 아눅의 충돌, 그리고 이바르의 광기. 모든 조각이 맞춰지며 주인공은 모든 사건의 배후에 있던 거대한 존재, '비욘 블로드울프'의 앞에 서게 된다. 그곳에는 처음에 주인공을 구했던 '아눅'이 서 있다. 아눅은 비욘의 진정한 목적과 자신의 역할(이중적인 역할)을 밝히며, 주인공이 이 모든 의식의 마지막 '희생물'이 될 것임을 선언한다. 비욘은 자신의 이중적인 정체성과 동기를 드러내며 핏빛으로 물든 얼음 위에서 최후의 결전을 벌인다.",
			"boss": "pool_104",
			"act": "climax_finale",
			"order": 5,
			"title": "결전: 맹세의 심장, 피의 연회",
			"npc": "anuk"
		}
	],
	"chapter_name": {
		"korean": "혹한의 맹세: 저주받은 눈의 심장",
		"chinese": "酷寒之誓：被诅咒之雪的心脏",
		"hindi": "हिमशपथ: शापित हिम का हृदय",
		"french": "Le Serment du Froid: Cœur de la Neige Maudite",
		"vietnamese": "Lời Thề Băng Giá: Trái Tim Tuyết Bị Nguyền Rủa",
		"english": "Oath of the Frost: Heart of the Cursed Snow",
		"spanish": "El Juramento del Frío: Corazón de la Nieve Maldita",
		"japanese": "酷寒の誓い：呪われた雪の心臓",
		"thai": "คำสาบานแห่งความหนาวเหน็บ: หัวใจของหิมะต้องสาป"
	},
	"theme": "snowy",
	"npc_roles": {
		"eira": {
			"role": "The Desperate Bait / Unwitting Sacrifice",
			"arc": "2화에서 얼음 동굴에 조난당한 것처럼 보이며 주인공의 도움을 청하는 인물. 그녀의 중얼거림과 행동은 거대한 존재에게 바쳐질 '제물'과 '희생'에 대한 복선을 심으며 연결되는 역할."
		},
		"ivar": {
			"role": "The Berserk Hunter / The Entity's Pawns",
			"arc": "3화에서 광기에 사로잡혀 주인공을 공격하는 추적자. 자신을 '겨울의 사냥개'라 칭하며 비욘 블로드울프와 그 배후 존재의 수하들이 존재함을 암시하고, 보스의 이중적 정체성을 복선으로 제시하며 연결되는 역할."
		},
		"anuk": {
			"arc": "1화에서 길 잃은 주인공을 구원하는 신비로운 사냥꾼. 5화에서 비욘 블로드울프의 진정한 목적을 밝히고 주인공을 희생양으로 이끈 에이전트임이 드러나며 연결되는 역할.",
			"role": "The Deceptive Guide / The Harbinger's Agent"
		},
		"bran": {
			"arc": "4화에서 과거의 기억을 잃었지만, 이 땅의 저주와 '핏빛 달'에 대한 중요한 단편적인 경고를 전하는 노인. 그의 조언이 주인공을 특정 장소로 유도하는 함정의 일부였음이 드러나며 연결되는 역할.",
			"role": "The Fragmented Oracle / Misleading Truth-teller"
		}
	}
};
