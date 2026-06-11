import type { StoryArc } from '$lib/types';

export const storyarc_snowy_pool_104: StoryArc = {
	"protagonist_goal": "To uncover the true nature of the 'Winter's Hound' and break the curse plaguing the snowy peaks, or to simply survive the treacherous journey.",
	"world": {
		"secret": "A forgotten frost entity dwells within these snowy peaks, sustained by a dark pact with a cursed Viking chieftain, luring powerful warriors to their demise.",
		"rule": "Only the strongest warriors can survive the trials of the frozen peaks; weakness means sacrifice.",
		"setting": "An ancient, treacherous snowy mountain range, dominated by jagged peaks and ice-bound passes, where legends of fierce guardians and forgotten entities linger."
	},
	"chapter_name": {
		"english": "Betrayal Blooming Under Snowflakes",
		"japanese": "雪の下に咲く裏切り",
		"hindi": "बर्फ़ के टुकड़ों के नीचे खिलता विश्वासघात",
		"chinese": "雪花下绽放的背叛",
		"korean": "눈꽃 아래 피는 배신",
		"thai": "การทรยศที่บานสะพรั่งใต้เกล็ดหิมะ",
		"spanish": "Traición Floreciendo Bajo los Copos de Nieve",
		"vietnamese": "Sự Phản Bội Nở Dưới Bông Tuyết",
		"french": "Trahison Fleurissant Sous les Flocons"
	},
	"theme": "snowy",
	"id": "snowy_pool_104",
	"scenarioOutline": [
		{
			"summary": "눈보라가 몰아치는 산맥 초입에서 신비로운 안내자 에이라를 만난다. 그녀는 얼어붙은 고대의 흔적들에 대해 경고하며, 기이하고 복잡한 얼음 무늬가 새겨진 유적을 발견한다. 이 무늬는 단순한 자연 현상이 아님을 직감하게 된다.",
			"npc": "eira",
			"title": "얼어붙은 입구의 수수께끼",
			"order": 1,
			"act": "intro",
			"boss": "random_boss"
		},
		{
			"npc": "finn",
			"summary": "더 깊은 산 속으로 들어가며, 플레이어는 회의적인 지역 주민 핀을 만난다. 핀은 오래 머무는 자들의 몸뿐만 아니라 의지까지 꺾는다는 '겨울의 한기'에 대한 소문을 무심코 전한다. 무언가 영혼을 갉아먹는 듯한 섬뜩한 기운이 감돈다.",
			"boss": "random_boss",
			"title": "미끄러지는 발자국: 겨울의 그림자",
			"act": "rising",
			"order": 2
		},
		{
			"npc": "inka",
			"summary": "가까스로 살아남은 생존자 인카를 발견한다. 그녀는 끔찍한 경험을 토로하며, 한때 산으로 사라져 '영원한 전투'를 찾았으나 '영원한 고통'에 시달렸다는 잊혀진 족장의 전설을 언급한다. 보스의 본질에 대한 의심이 깊어진다.",
			"boss": "random_boss",
			"title": "비극적인 환영: 잊혀진 족장의 전설",
			"act": "rising",
			"order": 3
		},
		{
			"summary": "플레이어는 같은 목표를 가진 경쟁자 이바르와 조우한다. 그들은 함께 얼어붙은 동굴을 탐사하던 중, 얼음 속에서 울려 퍼지는 듯한 깊고 차가운 포효를 듣게 된다. 이바르는 그 소리가 점차 강해지고 있다고 경고하지만, 곧 이어지는 중간 보스와의 전투에서 위험에 처한다.",
			"npc": "ivar",
			"order": 4,
			"act": "rising",
			"title": "얼음 속의 포효: 심연의 울림",
			"boss": "random_boss"
		},
		{
			"summary": "마침내 겨울의 사냥개 '비요른 블로드울브'와 대면한다. 에이라가 다시 나타나 비요른의 비극적인 과거를 밝히며, 그가 한낱 '잊혀진 서리 존재'의 끔찍한 계약에 묶인 저주받은 그릇임을 폭로한다. 이전에 발견했던 얼음 무늬는 존재의 계약을 상징하는 것이었고, '겨울의 한기'는 영혼을 수확하는 과정이었으며, 족장의 전설은 바로 비요른 자신의 이야기였다. 얼음 속 포효는 존재의 굶주림이었음이 드러나며, 비요른은 마지막 발악과 함께 비틀린 계약의 진실을 속삭인다. 모든 복선이 회수되고, 플레이어는 비요른의 진정한 비극과 거대한 존재의 위협에 맞서 최종 전투를 치른다.",
			"npc": "eira",
			"order": 5,
			"act": "climax_finale",
			"title": "핏빛 설원: 계약의 진실",
			"boss": "pool_104"
		}
	],
	"rising_count": 3,
	"act_summary": {
		"rising": "산 깊이 들어가며 지역 주민의 경고, 생존자의 증언, 경쟁자의 희생을 통해 '겨울의 한기'와 '잊혀진 족장', 그리고 '얼음 속 포효'의 불길한 전조들을 경험하며 보스의 표면적 정체에 대한 의심이 커져간다.",
		"intro": "신비로운 안내자와 함께 얼어붙은 산맥에 들어서며, 고대 유적에서 발견된 기이한 얼음 무늬가 단순한 경고가 아님을 직감한다.",
		"climax_finale": "겨울의 사냥개 비요른 블로드울브와의 최종 대결에서 모든 복선이 회수되고, 비요른이 거대한 서리 존재의 계약에 묶인 저주받은 그릇이자 희생양이었음이 밝혀진다. 충격적인 진실과 함께 플레이어는 최후의 전투에 임한다."
	},
	"npc_roles": {
		"ivar": {
			"arc": "4화에서 플레이어와 같은 목표를 가진 강인한 경쟁자로 등장하나, 결국 보스에게 희생되어 그 힘의 원천과 잔혹함을 보여주는 인물. 그의 죽음은 플레이어의 결의를 다지게 한다.",
			"role": "Rival Warrior / Sacrificial Pawn"
		},
		"inka": {
			"role": "Desperate Survivor / Catalyst for Doubt",
			"arc": "3화에서 끔찍한 추격전 끝에 겨우 살아남아 플레이어에게 보스의 비인간적인 잔혹함을 증언하는 인물. 그녀의 증언은 보스의 표면적 정체에 대한 플레이어의 의심을 증폭시킨다."
		},
		"finn": {
			"role": "Skeptical Local / Unwitting Informant",
			"arc": "2화에서 보스의 영역에 대해 경고하며 미심쩍은 소문을 전달하는 인물. 그의 무심한 발언이 보스의 본질에 대한 단서가 되어 서사를 연결한다."
		},
		"eira": {
			"role": "Ambiguous Guide / Tragic Observer",
			"arc": "1화에서 길을 안내하는 것처럼 보이나 비밀을 숨긴 인물. 5화에서 보스의 비밀과 연결된 비극적인 과거가 드러나며 플레이어에게 최종 정보를 제공하는 역할."
		}
	},
	"global_foreshadowing": [
		{
			"reveal_context": "The ice patterns found earlier are revealed to be the entity's ancient symbols of pacts and consumption, glowing on the altar.",
			"reveal_act": "climax_finale",
			"hint": "Strange, intricate ice patterns appear on ancient ruins, almost like frozen calligraphy, hinting at an unnatural, intelligent design.",
			"plant_act": "intro",
			"id": "foreshadow_1",
			"plant_room": 3,
			"reveal_room": 10
		},
		{
			"plant_act": "rising",
			"id": "foreshadow_2",
			"plant_room": 5,
			"reveal_room": 12,
			"hint": "Locals speak of 'winter's chill' affecting not just the body, but the very will, draining warmth and resolve from those who stay too long.",
			"reveal_context": "The 'winter's chill' is confirmed to be the entity subtly siphoning life force, preparing its victims for the final sacrifice.",
			"reveal_act": "climax_finale"
		},
		{
			"hint": "Ancient texts describe a forgotten chieftain who vanished into the mountains, rumored to have found 'eternal battle' but also 'eternal torment'.",
			"reveal_context": "The chieftain's tale is unveiled as Bjorn's tragic pact, his 'eternal battle' being the feeding ground for the entity.",
			"reveal_act": "climax_finale",
			"plant_act": "rising",
			"id": "foreshadow_3",
			"plant_room": 7,
			"reveal_room": 14
		},
		{
			"hint": "An occasional, deep resonance, like a frozen roar, echoes through the mountains, seemingly from within the ice itself, growing stronger with each passing night.",
			"reveal_context": "The roars are revealed to be the entity's awakening hunger, signaling the culmination of its long-awaited feast.",
			"reveal_act": "climax_finale",
			"plant_room": 9,
			"reveal_room": 16,
			"plant_act": "rising",
			"id": "foreshadow_4"
		}
	],
	"final_boss": {
		"appearance_npc": "A colossal male figure, cloaked in ice-hardened bear furs and ancient, frost-rimed leather armor, his frame corded with battle-hardened muscle. His face, etched with scars and a perpetual, quiet intensity, is framed by a wild, snow-dusted mane and beard. In one hand, he wields a massive, two-headed axe, its sharpened blades glinting with frozen mist.",
		"name": "Bjorn Blodulv",
		"twist": "You fought well, little morsels. But this was never about your strength, nor my glory. It was always about *their* hunger. And now... *they feast*.\" He then slams his axe into the ground, causing the ice around them to crack and glow with an ethereal blue light, as shadowy, frozen tendrils erupt to consume the fallen.",
		"zodiac_sign": "Gemini",
		"motivation": "Driven by a primal urge for combat that transcends mortal desires and the echoes of countless battles, Bjorn sought a land where his berserker rage could run untamed. He found it in these frozen wastes, where a powerful frost entity offered him eternal challenges and boundless strength in exchange for feeding its insatiable hunger with the souls of worthy warriors. He stalks the explorers, not for glory, but to assess their potential as powerful sacrifices to maintain his pact and prolong his cursed, yet thrilling, existence.",
		"true_identity": "The spirit of Bjorn Blodulv, a formidable Viking chieftain whose insatiable bloodlust and thirst for battle led him to strike a dark pact with a forgotten frost entity dwelling within these snowy peaks. He isn't merely a guardian; he is a cursed vessel, acting as the entity's harbinger, luring powerful warriors into deadly combat to feed the ancient being with their dying essence, ensuring his own tormented existence continues.",
		"id": "pool_104",
		"surface_identity": "The 'Winter's Hound,' a legendary, solitary berserker who prowls the deepest, most treacherous reaches of the snowy peaks. He appears as a fierce guardian of an ancient, ice-bound pass, challenging anyone who dares to trespass further into the frozen wilderness, testing their strength and resolve with his formidable combat prowess.",
		"appearance_boss": "Transformed into a monstrous, ice-encased berserker, his body glowing with an eerie blue frost, eyes burning with a primal, bloodthirsty cold. His axe now crackles with dark ice energy, and shadow tendrils writhe from his form, hinting at the entity within."
	},
	"act_tone": {
		"intro": {
			"narrative_role": "Setting the stage, introducing the harsh environment and initial mystery.",
			"tension": 1,
			"mood": "Suspenseful, eerie cold"
		},
		"climax_finale": {
			"mood": "Desperate, shocking revelation",
			"tension": 5,
			"narrative_role": "Final confrontation, shocking twist, resolution of the main conflict."
		},
		"rising": {
			"tension": 3,
			"narrative_role": "Increasing challenges, revealing fragmented truths, building towards confrontation.",
			"mood": "Intense, escalating dread"
		}
	}
};
