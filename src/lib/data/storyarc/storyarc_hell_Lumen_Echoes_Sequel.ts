import type { StoryArc } from '$lib/types';

export const storyarc_hell_Lumen_Echoes_Sequel: StoryArc = {
	"protagonist_goal": "To awaken the dormant wills within the 'saved' and prevent the coalescing agony from birthing a new, all-consuming primordial despair, even if it means confronting the deeper horror Lumen inadvertently unleashed.",
	"final_boss": {
		"id": "KindPriest_V0",
		"name": "자비로운 사제 루멘 (Lumen)",
		"appearance_npc": "A gentle priest in worn robes, tending to the wounded in a dim cavern. He smiles softly, offering water and quiet prayers. A faint warm light surrounds him. Completely trustworthy.",
		"appearance_boss": "A grotesque seraphic entity with dozens of elongated arms, each forcing \"salvation\" upon writhing souls. Its face is split into multiple serene masks, all smiling unnaturally. Blinding holy light burns like fire, and chains of scripture bind everything in place.",
		"surface_identity": "상처 입은 자들을 치유하고 기도해주는 따뜻한 사제.",
		"true_identity": "고통을 제거하는 가장 확실한 방법은 \"의지 자체를 제거하는 것\"이라 믿는 존재. 모든 존재를 순종하는 상태로 \"구원\"하려 한다.",
		"motivation": "My previous attempts to bring 'complete salvation' only proved that pain is tenacious. The explorer's defiance and the subsequent unraveling of my 'peace' merely stirred the primordial anguish I sought to suppress. Now, the collective suffering I bound is awakening as a singular, monstrous entity. I must re-establish control, not through individual 'salvation,' but by merging all wills into this new, unified void, thereby achieving the ultimate, unfeeling peace before it consumes everything.",
		"twist": "You believed ending my 'complete salvation' would free the Abyss? Foolish. The true horror was never my control, but what I sought to prevent. The very act of the explorer revealing my face split and challenging my 'peace' shattered the delicate containment, allowing the collective agony to awaken. This 'new evil' you fight is not a corruption of my work, but the true form of the Abyss's despair, now sentient and limitless, and you, by resisting me, have merely hastened its birth."
	},
	"chapter_name": {
		"korean": "구원받은 절규의 심연",
		"hindi": "बचाई गई चीखों का रसातल",
		"french": "L'Abîme des Cris Sauvegardés",
		"english": "Abyss of Saved Screams",
		"spanish": "El Abismo de los Gritos Salvados",
		"vietnamese": "Vực Thẳm Của Những Tiếng Hét Được Cứu Rỗi",
		"chinese": "救赎尖叫的深渊",
		"japanese": "救済された絶叫の深淵",
		"thai": "หุบเหวแห่งเสียงกรีดร้องที่ได้รับการไถ่บาป"
	},
	"global_foreshadowing": [
		{
			"reveal_room": 12,
			"plant_room": 3,
			"id": "Whispering_Echoes",
			"reveal_context": "The hum intensifies into a deafening chorus as the collective agony manifests, revealing it was the sound of millions of suppressed wills.",
			"reveal_act": "climax_finale",
			"plant_act": "intro",
			"hint": "A faint, mournful hum seems to emanate from the 'saved' masses, just beyond the reach of normal hearing."
		},
		{
			"plant_act": "rising",
			"hint": "Occasionally, the protagonist catches a glimpse of their own reflection in stagnant pools, but it's warped, showing them with hollow eyes and a serene, forced smile, like the 'saved'.",
			"reveal_act": "climax_finale",
			"reveal_room": 15,
			"plant_room": 7,
			"id": "Distorted_Reflections",
			"reveal_context": "During a moment of extreme despair, the protagonist's reflection momentarily takes on the grotesque seraphic features of Lumen, hinting at the pervasive nature of the collective will."
		},
		{
			"hint": "Small, shadowy motes of light are occasionally seen flitting between the 'saved', seemingly absorbing faint wisps of energy, though they leave no trace.",
			"plant_act": "rising",
			"reveal_context": "These motes coalesce into the 'collectors,' revealing them as extensions of the awakened primordial despair, feeding on residual emotions.",
			"plant_room": 5,
			"id": "The_Unseen_Feeder",
			"reveal_room": 10,
			"reveal_act": "climax_finale"
		},
		{
			"hint": "An old, eerie lullaby is faintly heard in abandoned ruins, a melody associated with children who disappeared long ago, supposedly 'saved' by Lumen.",
			"plant_act": "intro",
			"reveal_act": "rising",
			"reveal_context": "An old woman (Mara) hums the same lullaby, her eyes momentarily clearing, revealing fragmented memories of Lumen's initial, crueler methods of 'saving' the innocent.",
			"id": "Forgotten_Lullaby",
			"plant_room": 8,
			"reveal_room": 14
		}
	],
	"rising_count": 3,
	"act_tone": {
		"rising": {
			"mood": "suffocating dread",
			"narrative_role": "Unveiling the true nature of the lingering horror and the escalating struggle against it.",
			"tension": 3
		},
		"intro": {
			"tension": 1,
			"narrative_role": "Establishing the chilling aftermath and the protagonist's dawning realization of a new threat.",
			"mood": "ominous calm"
		},
		"climax_finale": {
			"tension": 5,
			"narrative_role": "Confronting the ultimate manifestation of the suppressed anguish and the fight for true freedom.",
			"mood": "desperate defiance"
		}
	},
	"id": "Lumen_Echoes_Sequel",
	"world": {
		"rule": "The Abyss is now governed by an insidious form of 'peace' that demands absolute mental and emotional stillness. Any surge of strong emotion—hope, despair, defiance—can manifest the hidden anguish into physical threats or attract the attention of the 'collectors,' entities that feed on these disturbances. Resistance is not only painful but also dangerously contagious, capable of shattering the fragile, enforced calm and unleashing deeper terrors.",
		"secret": "Lumen's 'complete salvation' wasn't just about controlling free will; it was a desperate attempt to contain a primordial, sentient despair that existed *before* the Abyss itself. By binding individual suffering, he inadvertently created a single, colossal entity of collective agony, now slowly awakening within the 'saved' masses, threatening to consume all reality into an eternal, unthinking void. The true 'hell' is not chaos, but the absence of thought and feeling.",
		"setting": "After Lumen's 'salvation' was exposed as a means to suppress free will, the Abyss did not return to its original chaos. Instead, a new, suffocating 'order' has settled. The 'saved' wander like automatons, but beneath their placid exteriors, the suppressed anguish of countless souls now coalesces into grotesque, sentient miasmas. The world is a silent museum of suffering, where the very air hums with unspoken despair."
	},
	"act_summary": {
		"intro": "Lumen의 '구원' 이후, 세계는 고요하지만 그 속엔 더 깊은 부패가 자리 잡고 있다. 주인공은 1편의 생존자이자 불안정한 증인인 애쉬를 만나, 이 위협이 단순한 잔재가 아닌 새로운 형태의 심연적 공포임을 깨닫고 그 근원을 추적하기 시작한다.",
		"rising": "세계는 Lumen이 봉인했던 원초적 고통의 촉수에 잠식당한다. 마라의 섬뜩한 기억과 벡스 같은 '수집자'의 등장으로, 주인공은 이 새로운 악이 '구원받은' 자들의 억압된 의지에서 비롯되었음을 알게 된다. 브림과의 조우를 통해 저항의 가능성을 엿보지만, 동시에 그 대가가 무엇인지 깨닫는다.",
		"climax_finale": "Lumen이 막으려 했던 심연의 진정한 공포, 즉 모든 의지를 집어삼키는 원초적 고통의 집합체가 완전한 형태로 발현된다. 주인공은 애쉬의 도움을 받아 이 거대한 존재에 맞서 싸우며, 단순한 생존을 넘어 '의지' 그 자체의 해방을 위해 모든 것을 건 최후의 전투를 치른다."
	},
	"npc_roles": {
		"mara": {
			"role": "An elder 'saved' who occasionally suffers from painful, brief moments of lucidity, hinting at the true nature of Lumen's suppression. A fragile link to the past before 'complete salvation'.",
			"arc": "Mara's intermittent lucidity provides crucial, albeit fragmented, insights into Lumen's past actions and the deeper mechanics of the Abyss's despair. Her struggle highlights the cost of false peace."
		},
		"ash": {
			"arc": "Initially lost, Ash slowly regains their fragmented memories of Lumen's 'salvation', acting as a guide and emotional anchor for the protagonist as the true horror unfolds. Their full memory return in the climax aids in the final confrontation.",
			"role": "Desperate survivor, clinging to shattered memories, a beacon for those needing to remember their past selves. Becomes a key to understanding Lumen's early interventions."
		},
		"soot": {
			"role": "A historian who meticulously archives memories of the pre-Lumen Abyss, believing that true understanding of the past is the only way to escape the present. Their archives are a treasure trove of forgotten truths.",
			"arc": "Soot's research into the true history of the Abyss before Lumen's intervention provides crucial context and uncovers forgotten truths that help the protagonist understand the primordial despair they face."
		},
		"mire": {
			"arc": "Mire, a manifestation of fragmented emotions, acts as an unpredictable guide. It can offer glimpses of truth or lead to traps, embodying the chaotic nature of the Abyss's underlying suffering and the challenges of deciphering truth from illusion.",
			"role": "A spectral entity formed from the discarded, fragmented emotions of the 'saved', drawn to the protagonist's strong will, sometimes providing cryptic warnings or leading them astray."
		},
		"drox": {
			"arc": "Drox provides practical, if dangerous, tools to combat the enforced 'peace', showcasing the ingenuity of those who resist. Their commitment to aiding the protagonist despite personal sacrifice reinforces the theme of defiance.",
			"role": "A craftsman who secretly modifies salvaged Lumen technology to create devices that can temporarily disrupt the 'peace' aura, but at great personal risk."
		},
		"vex": {
			"role": "A 'collector' entity disguised as a lost child, designed to lure in those who feel strong emotions, feeding the growing collective despair. Secretly a fragment of Lumen's own guilt.",
			"arc": "Vex initially appears as a victim, manipulating the protagonist's emotions. Their reveal as a 'collector' serves as a chilling warning about the insidious nature of the new threat, and confronting them reveals a deeper connection to Lumen's past trauma."
		},
		"brim": {
			"role": "A rogue 'saved' who has developed unique methods to channel and weaponize their suppressed emotions, appearing as an unpredictable ally or dangerous foe. Represents the potential for both rebirth and further corruption.",
			"arc": "Brim challenges the protagonist's understanding of resistance, showcasing both the power and the peril of weaponizing suppressed emotions. Their methods, while effective, come at a cost, forcing the protagonist to question their own approach to freedom."
		},
		"cinder": {
			"role": "A former 'saved' who succumbed to the deeper despair, becoming a grotesque embodiment of distorted memory and anguish, serving as a cautionary tale.",
			"arc": "Cinder represents the ultimate failure to resist, transformed into a physical manifestation of the suppressed anguish. Their presence serves as a grim reminder of the stakes and the potential fate of those who falter."
		},
		"pyre": {
			"arc": "Pyre acts as an unwitting antagonist, hindering the protagonist's progress by trying to enforce Lumen's 'peace'. Their misguided zeal highlights the deceptive nature of the new threat and the enduring legacy of Lumen's ideology.",
			"role": "A zealous follower of Lumen, still believing in his 'salvation', who actively tries to bring 'peace' to any who show signs of strong emotion, unknowingly serving the new despair."
		},
		"char": {
			"arc": "Char acts as a silent helper, guiding the protagonist through areas infested by the 'collectors' without directly engaging, symbolizing the quiet, often unseen, acts of defiance against the pervasive 'peace'. Their quiet determination inspires the protagonist.",
			"role": "A silent observer who has found a way to exist unnoticed by the 'collectors', offering subtle, non-verbal guidance through dangerous zones. Represents hidden resilience and the quiet acts of defiance."
		}
	},
	"theme": "hell",
	"scenarioOutline": [
		{
			"order": 1,
			"title": "고요 속의 메아리",
			"summary": "Lumen의 '구원' 이후의 섬뜩한 평화 속에서 주인공은 과거 1편의 생존자였던 애쉬를 만난다. 애쉬는 조용히 배회하지만, 그에게서 들려오는 1편에 대한 단편적인 회상들이 이 고요함이 거짓임을 암시한다. 주인공은 애쉬의 잔류 기억에서 새로운 위협의 징후를 발견한다.",
			"boss": "random_boss",
			"act": "intro",
			"npc": "ash"
		},
		{
			"title": "뒤틀린 치유의 그림자",
			"order": 2,
			"summary": "주인공은 '구원받은' 자들 중 고통스러운 순간의 루시디티를 보이는 노파 마라를 만난다. 마라는 Lumen이 남긴 잔재와 그가 가둔 고통이 새로운 형태로 발현되는 것을 목격하며, 그 경험을 통해 Lumen이 과거 행했던 '치유'의 섬뜩한 진실을 엿본다.",
			"act": "rising",
			"boss": "random_boss",
			"npc": "mara"
		},
		{
			"boss": "random_boss",
			"act": "rising",
			"title": "감춰진 절규의 흡수자",
			"order": 3,
			"summary": "새로운 악의 근원을 추적하던 주인공은 길 잃은 아이의 모습을 한 벡스를 만난다. 벡스는 동정을 유발하며 감정을 가진 자들을 유인하는 '수집자'였다. 벡스와의 조우는 '구원받은' 자들의 suppressed anguish가 어떻게 새로운 존재를 탄생시키고 세계를 잠식하는지 드러낸다.",
			"npc": "vex"
		},
		{
			"npc": "brim",
			"order": 4,
			"title": "영혼을 좀먹는 통제",
			"summary": "주인공은 자신의 억압된 감정을 무기화하는 방법을 터득한 브림을 만난다. 브림은 '구원받은' 세계 속에서 반항하는 이들의 존재 가능성을 보여주지만, 동시에 그 과정에서 영혼이 더욱 뒤틀릴 수 있음을 경고한다. 주인공은 브림을 통해 새로운 악의 확산 방식과 그 대처법을 탐색한다.",
			"boss": "random_boss",
			"act": "rising"
		},
		{
			"boss": "pool_081",
			"act": "climax_finale",
			"summary": "Lumen의 왜곡된 자비가 만들어낸 진정한 '지옥'이 모습을 드러낸다. 주인공은 마침내 정신을 완전히 되찾은 애쉬와 함께, 모든 것을 삼키려는 거대한 고통의 파도에 맞서 최후의 결전을 벌인다. 이 싸움은 단순히 Lumen의 잔재를 넘어, 그가 봉인했던 심연의 본질적 고통과의 대결이다.",
			"title": "자비로운 심연의 재림",
			"order": 5,
			"npc": "ash"
		}
	]
};
