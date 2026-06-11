import type { StoryArc } from '$lib/types';

export const storyarc_hell_pool_105: StoryArc = {
	"final_boss": {
		"true_identity": "The Celestial Usurper, a banished Arch Mystic who once sought to rewrite the cosmic laws of creation and destruction. Cast into Hell for his hubris, he now meticulously harvests the essence of those he 'guides,' using their despair to fuel his twisted ritual to ascend from the infernal abyss and conquer all realms, including his former cosmic home.",
		"appearance_npc": "A figure with an unnervingly serene countenance, his eyes, once pools of cosmic wisdom, now glow with a faint, infernal light. He is cloaked in tattered remnants of what might have been ancient scholarly robes, now woven with shadows and whispers of damnation, hinting at a corrupted past.",
		"appearance_boss": "Standing amidst the collected essence of countless damned souls, he slowly extends a hand, not to offer salvation, but to grasp. His calm facade shattering into a mask of pure, intellectual malice, revealing a being of immense, cosmic power, wreathed in shadows and glowing sigils of forbidden knowledge.",
		"surface_identity": "The Grand Arcanist of the Infernal Archives, a seemingly benevolent scholar who offers guidance and dark knowledge to lost souls, promising paths to power or escape within Hell's labyrinthine depths.",
		"twist": "Standing amidst the collected essence of countless damned souls, he slowly extends a hand, not to offer salvation, but to grasp. 'Foolish mortals,' he sneers, his calm facade shattering into a mask of pure, intellectual malice, 'Did you truly believe an Arch Mystic of the cosmos would ever be imprisoned here? This... this is merely my next observatory. And you, my dear, are simply the final, essential star in my grand design!'",
		"id": "pool_105",
		"name": "Kiran Tej",
		"zodiac_sign": "Gemini",
		"motivation": "Exiled to Hell for daring to understand and manipulate the fundamental fabric of existence, he now orchestrates the demise of all who enter his domain. He meticulously collects souls and knowledge, not to restore balance, but to accumulate enough power to tear open the gates of Hell and reclaim his place as the ultimate cosmic architect, bending all realms to his perfectly ordered, yet utterly perverse, will."
	},
	"chapter_name": {
		"vietnamese": "Đại Pháp Sư Địa Ngục: Chòm Sao Vặn Vẹo",
		"thai": "จอมเวทนรก: กลุ่มดาวบิดเบี้ยว",
		"japanese": "地獄の大魔術師: 歪んだ星図",
		"korean": "지옥의 대마법사: 뒤틀린 별자리",
		"english": "The Grand Arcanist of Hell: Twisted Constellation",
		"spanish": "El Gran Arcanista del Infierno: Constelación Retorcida",
		"chinese": "地狱大奥术师：扭曲的星象",
		"french": "Le Grand Arcaniste de l'Enfer : Constellation Tordue",
		"hindi": "नरक का महान आर्केनिस्ट: मुड़ा हुआ तारामंडल"
	},
	"rising_count": 3,
	"scenarioOutline": [
		{
			"summary": "주인공은 낯선 지옥의 아카이브에 눈을 뜨고, 친절하지만 어딘가 비밀스러운 안내자 마라를 만난다. 마라는 주인공에게 키란 테즈라는 아카니스트를 소개하며, 이곳이 영혼을 '정화'하는 곳이라고 말한다. 주인공은 의구심을 품지만, 일단 마라의 안내를 따른다.",
			"boss": "random_boss",
			"npc": "mara",
			"title": "지옥의 도서관, 감미로운 속삭임",
			"act": "intro",
			"order": 1
		},
		{
			"order": 2,
			"boss": "random_boss",
			"summary": "아카이브 깊은 곳에서 탈출을 시도하다 붙잡힌 영혼 애쉬를 만난다. 애쉬는 주인공에게 키란 테즈의 약속이 거짓이며, 이곳의 영혼들이 서서히 흡수되고 있다고 경고하지만, 결국 또 다른 중간 보스의 함정에 빠져 파멸한다. 애쉬의 비극은 주인공에게 강렬한 의심을 심어준다.",
			"act": "rising",
			"title": "속박된 희망, 뒤틀린 약속",
			"npc": "ash"
		},
		{
			"boss": "random_boss",
			"summary": "애쉬의 경고 후, 주인공은 아카이브의 금지된 구역에 침입한다. 그곳에서 금지된 지식의 수호자 드록스를 마주하고 격전을 벌인다. 드록스를 제압한 후, 주인공은 고대 기록에서 지옥과는 어울리지 않는 별자리와 우주적 현상에 대한 단편적인 기록을 발견한다.",
			"act": "rising",
			"npc": "drox",
			"title": "금지된 기록, 별들의 그림자",
			"order": 3
		},
		{
			"order": 4,
			"title": "깨어진 맹세, 그림자 속의 과거",
			"npc": "cinder",
			"act": "rising",
			"summary": "주인공은 점점 더 키란 테즈의 진실에 가까워지고, 과거 마라와 함께 키란 테즈에게 저항하려 했던 신더를 만난다. 그러나 신더는 이미 타락하여 중간보스로 주인공을 가로막고, 전투 중 신더의 과거가 드러나며 마라의 숨겨진 죄책감과 연관성이 암시된다. 신더의 희생은 마라의 마음에 균열을 낸다.",
			"boss": "random_boss"
		},
		{
			"boss": "pool_105",
			"summary": "모든 진실이 밝혀진다. 키란 테즈는 지옥을 자신의 거대한 실험실로 삼아 영혼의 정수를 모아 새로운 우주를 창조하거나 정복하려는 추방된 대마법사였다. 마라는 결국 주인공 편에 서서 그의 과거와 키란 테즈의 계획에 대한 결정적인 정보를 제공하며 조력한다. 주인공은 키란 테즈의 '마지막 별의 의식'을 저지하기 위해 최후의 결전을 벌이고, 우주의 운명을 건다.",
			"act": "climax_finale",
			"npc": "mara",
			"title": "우주의 찬탈자, 마지막 별의 의식",
			"order": 5
		}
	],
	"world": {
		"setting": "지옥의 미로 같은 심연, 고통받는 영혼들이 끝없이 헤매는 곳. 고대 지식과 금단의 마법이 뒤섞인 아카이브가 존재한다.",
		"secret": "이 지옥은 단순한 감옥이 아니다. 추방된 대마법사가 우주의 근본 법칙을 재작성하기 위한 거대한 실험실이자 차원 간의 징검다리이다. 그는 이곳에서 영혼의 정수를 수확하여 새로운 우주를 창조하거나 정복하려 한다.",
		"rule": "이곳에 들어온 영혼은 그랜드 아카니스트의 '인도'를 받아야만 다음 단계로 나아갈 수 있다. 인도를 거부하는 자는 영원히 미로에 갇힌다."
	},
	"protagonist_goal": "지옥의 미궁을 탈출하고, 이곳의 진정한 목적을 밝혀내며, 세계의 운명을 결정할 대마법사의 음모를 저지한다.",
	"act_tone": {
		"intro": {
			"tension": 1,
			"narrative_role": "세계를 소개하고 주인공의 상황과 목표를 제시하며 어두운 분위기를 조성한다.",
			"mood": "불안, 미스터리"
		},
		"rising": {
			"mood": "절망, 배신, 압박",
			"tension": 3,
			"narrative_role": "주인공이 점차 위험에 처하고, 예상치 못한 사실과 배신을 겪으며 갈등이 심화된다."
		},
		"climax_finale": {
			"mood": "분노, 광기, 폭발적 결말",
			"tension": 5,
			"narrative_role": "모든 진실이 드러나고, 주인공과 보스의 최후의 대결을 통해 모든 갈등이 폭발적으로 해소된다."
		}
	},
	"global_foreshadowing": [
		{
			"reveal_context": "보스의 이중적인 면모와 조작된 친절이 주인공의 절박함을 이용하려는 의도였음이 드러난다.",
			"id": "f_001",
			"hint": "키란 테즈가 건네는 친절한 조언 속에 알 수 없는 서늘함이 스쳐 지나간다.",
			"plant_act": "intro",
			"reveal_room": 10,
			"plant_room": 3,
			"reveal_act": "climax_finale"
		},
		{
			"reveal_room": 12,
			"plant_room": 5,
			"reveal_act": "climax_finale",
			"id": "f_002",
			"reveal_context": "지옥이 영혼을 정제하여 보스의 거대한 의식에 필요한 에너지원으로 사용하고 있었음이 밝혀진다.",
			"hint": "지옥의 차원문 근처에서 희미하게 빛나는 영혼의 잔재들이 어딘가로 빨려 들어가는 모습이 목격된다.",
			"plant_act": "rising"
		},
		{
			"id": "f_003",
			"reveal_context": "보스가 이전에 우주의 질서를 조작하려 했던 대마법사였으며, 지옥은 그의 새로운 '관측소'에 불과함이 드러난다.",
			"plant_act": "rising",
			"hint": "낡은 기록 보관소에서 지옥의 문양과 어울리지 않는, 별들의 움직임을 나타내는 고대 도식이 발견된다.",
			"plant_room": 7,
			"reveal_room": 15,
			"reveal_act": "climax_finale"
		},
		{
			"hint": "마라가 키란 테즈의 이름에 유독 민감하게 반응하거나, 알 수 없는 두려움을 내비친다.",
			"plant_act": "rising",
			"id": "f_004",
			"reveal_context": "마라가 과거 보스에게 이용당했거나, 보스의 계획에 중요한 역할을 했음이 밝혀지며 주인공에게 결정적인 정보를 제공한다.",
			"reveal_act": "climax_finale",
			"reveal_room": 18,
			"plant_room": 9
		}
	],
	"theme": "hell",
	"id": "hell_pool_105",
	"act_summary": {
		"rising": "주인공은 지옥의 잔혹한 함정과 중간 보스들을 마주하며 점차 키란 테즈의 진짜 목적에 대한 단서를 모은다. 믿었던 자의 배신과 예상치 못한 희생을 겪으며, 지옥이 영혼을 수확하는 거대한 의식장이라는 섬뜩한 진실에 다가선다.",
		"climax_finale": "모든 복선이 회수되며 키란 테즈의 정체가 우주적 존재임이 밝혀진다. 그는 지옥의 영혼들을 이용해 새로운 우주를 창조하려 했고, 주인공은 그의 거대한 야망을 저지하기 위한 최후의 일전을 벌인다. 마라의 조력 혹은 희생을 통해 지옥의 운명과 우주의 질서가 결정된다.",
		"intro": "주인공은 지옥의 미궁에 떨어져 키란 테즈가 운영하는 아카이브에 도착한다. 친절한 안내자 마라의 도움을 받지만, 곧 이 지옥이 단순한 감옥이 아님을 직감하며 탈출과 진실 탐색의 여정을 시작한다."
	},
	"npc_roles": {
		"ash": {
			"arc": "2화에서 지옥을 탈출하려다 실패한 영혼으로 등장, 주인공에게 도움을 요청하지만 결국 보스의 함정에 빠져 이용당하는 모습을 보여 주인공에게 경고가 된다.",
			"role": "좌절된 희망이자 경고의 메시지"
		},
		"drox": {
			"arc": "3화에서 아카이브 깊은 곳의 금지된 문서를 지키는 존재로 등장. 주인공이 보스의 진정한 목적에 대한 단서를 찾으려 할 때 이를 막아서며 시험한다.",
			"role": "금지된 지식의 수호자"
		},
		"cinder": {
			"arc": "4화에서 과거 마라와 함께 보스에게 저항하려 했던 인물이었으나, 보스에게 타락하여 중간보스로 등장한다. 그녀의 비극적인 최후는 보스의 잔혹함을 드러내며 마라의 숨겨진 과거를 암시한다.",
			"role": "과거의 그림자이자 희생된 자"
		},
		"mara": {
			"role": "이중적인 안내자이자 숨겨진 조력자",
			"arc": "1화에서 주인공을 지옥 아카이브로 안내하며 친절한 모습을 보인다. 5화에서 보스의 계획에 깊이 연루되어 있었음이 드러나지만, 내면의 갈등 끝에 주인공에게 결정적인 정보를 제공하며 조력자로 전환한다."
		}
	}
};
