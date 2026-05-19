import type { StoryArc } from '$lib/types';

export const storyarc_hell_Lumen_Echoes: StoryArc = {
	"npc_roles": {
		"mara": {
			"arc": "Mara acts as the protagonist's guide and emotional anchor, her personal battle against Lumen's residual influence mirroring the larger conflict. Her ultimate act of defiance in the climax inspires others.",
			"role": "A former patient of Lumen's who barely escaped complete 'salvation,' now driven by a burning desire to help others regain their will, but haunted by the fear of succumbing again."
		},
		"brim": {
			"role": "A cynical survivor who witnessed Lumen's original 'salvation' and now seeks to exploit the lingering chaos for personal gain, believing true hope is futile.",
			"arc": "Observing the protagonist's struggle, Brim's cynicism is challenged, forcing him to decide if he will continue to profit from despair or risk fighting for a fragile hope."
		},
		"ash": {
			"arc": "Initially vacant, his episodic outbursts of pain and anger grow more frequent, culminating in a full, albeit temporary, reawakening of his true self when confronted with the source of his torment.",
			"role": "A 'saved' explorer who occasionally exhibits brief, violent spasms of suppressed emotion, acting as a living testament to Lumen's failed salvation."
		},
		"soot": {
			"role": "A desperate scavenger who believes the Abyss's corruption is a natural purging process, and actively helps spread its influence, albeit unknowingly.",
			"arc": "Soot, initially a minor nuisance, becomes a tragic figure manipulated by the festering corruption. His actions inadvertently escalate the threat, forcing the protagonist to confront the passive acceptance of the new 'hell'."
		}
	},
	"act_tone": {
		"climax_finale": {
			"tension": 5,
			"mood": "Horror, cathartic fury, desperate resolve",
			"narrative_role": "Confront the true cost of Lumen's actions and the unleashed primal suffering, offering a chance for genuine freedom or deeper damnation."
		},
		"rising": {
			"narrative_role": "Uncover the insidious nature of the new threat, challenge the protagonist's will, and hint at the true origin of the festering evil.",
			"tension": 3,
			"mood": "Paranoia, creeping dread, desperate struggle"
		},
		"intro": {
			"tension": 1,
			"mood": "Despair, suffocating calm",
			"narrative_role": "Introduce the aftermath, the false peace, and the protagonist's dawning realization."
		}
	},
	"rising_count": 3,
	"scenarioOutline": [
		{
			"npc": "mara",
			"title": "고요 속의 불안",
			"boss": "random_boss",
			"summary": "Lumen의 '구원' 이후, 모두가 평온한 듯 보이는 심연. 그러나 마라는 알 수 없는 불안감에 시달리며, 주인공에게 이 평화가 기만임을 경고한다.",
			"act": "intro",
			"order": 1
		},
		{
			"act": "rising",
			"order": 2,
			"summary": "주인공은 '구원받은' 자들이 겪는 미약한 고통의 환영을 목격한다. 브림은 이 현상이 새로운 기회라며 이용하려 하고, 주인공은 루멘의 잔재가 사라지지 않았음을 깨닫는다.",
			"title": "뒤틀린 치유의 흔적",
			"npc": "brim",
			"boss": "random_boss"
		},
		{
			"order": 3,
			"act": "rising",
			"summary": "애쉬는 어느 순간 격렬한 발작을 일으키며 숨겨진 기억 속의 고통을 토해낸다. 주인공은 루멘의 '자비'가 감정을 지운 것이 아니라 가둔 것임을 확신하게 된다.",
			"boss": "random_boss",
			"title": "감춰진 절규",
			"npc": "ash"
		},
		{
			"summary": "수렁이 깊어질수록 '구원받은' 자들의 정신은 더욱 공허해진다. 수트와 같은 존재들은 이 공허함을 틈타 새로운 형태의 타락을 심으려 하며, 주인공은 진정한 자유를 위한 투쟁을 결심한다.",
			"act": "rising",
			"order": 4,
			"npc": "soot",
			"title": "영혼을 좀먹는 평화",
			"boss": "random_boss"
		},
		{
			"summary": "마라는 루멘의 영향력에 맞서 자신의 의지를 되찾으려 몸부림치고, 주인공은 그녀의 투쟁을 보며 심연 깊숙이 자리 잡은 루멘의 잔재, 그리고 그가 만들어낸 새로운 '지옥'과 최후의 대결을 펼친다.",
			"order": 5,
			"act": "climax_finale",
			"boss": "pool_081",
			"title": "메아리치는 의지",
			"npc": "mara"
		}
	],
	"global_foreshadowing": [
		{
			"plant_act": "intro",
			"hint": "Wandering 'saved' NPCs occasionally flinch as if struck by an invisible blow, a brief flicker of pain crossing their vacant faces before serenity returns.",
			"reveal_room": 7,
			"reveal_context": "A 'saved' NPC, cornered by a phantom beast, momentarily regains their terror and screams, revealing the buried agony beneath Lumen's peace.",
			"plant_room": 3,
			"id": "Foreshadowing_01",
			"reveal_act": "rising"
		},
		{
			"hint": "Strange, crystalline growths appear on the walls, pulsating faintly with a sickly violet light, and emit a barely audible, distorted whisper.",
			"reveal_room": 12,
			"plant_act": "rising",
			"reveal_act": "climax_finale",
			"id": "Foreshadowing_02",
			"plant_room": 5,
			"reveal_context": "The crystalline growths burst forth, revealing themselves as concentrated fragments of suppressed will and pain, forming tendrils that lash out, powered by the very 'peace' Lumen enforced."
		},
		{
			"hint": "An old journal, found amidst the ruins, speaks of a 'second, deeper hell' that consumes those who refuse true oblivion, thriving on their struggle.",
			"reveal_room": 15,
			"plant_act": "rising",
			"reveal_act": "climax_finale",
			"plant_room": 9,
			"reveal_context": "The Final Boss reveals its true objective is to prevent this 'second hell' from fully manifesting, implying Lumen's 'salvation' was a desperate, flawed attempt to contain it, now broken.",
			"id": "Foreshadowing_03"
		},
		{
			"plant_act": "intro",
			"hint": "The protagonist sometimes feels a fleeting sense of unnatural calm in moments of extreme danger, followed by an immediate, jarring surge of anger and defiance.",
			"reveal_room": 10,
			"reveal_context": "During the final confrontation, the protagonist realizes this internal struggle is a direct remnant of Lumen's attempted 'salvation,' and must consciously purge it to fully fight back.",
			"plant_room": 1,
			"id": "Foreshadowing_04",
			"reveal_act": "climax_finale"
		}
	],
	"protagonist_goal": "Break free from Lumen's lingering influence, help those still trapped by his 'salvation' regain their will, and confront the new, festering evil born from his twisted peace.",
	"final_boss": {
		"id": "KindPriest_V0",
		"name": "자비로운 사제 루멘 (Lumen)",
		"appearance_npc": "A gentle priest in worn robes, tending to the wounded in a dim cavern. He smiles softly, offering water and quiet prayers. A faint warm light surrounds him. Completely trustworthy.",
		"appearance_boss": "A grotesque seraphic entity with dozens of elongated arms, each forcing \"salvation\" upon writhing souls. Its face is split into multiple serene masks, all smiling unnaturally. Blinding holy light burns like fire, and chains of scripture bind everything in place.",
		"surface_identity": "상처 입은 자들을 치유하고 기도해주는 따뜻한 사제.",
		"true_identity": "고통을 제거하는 가장 확실한 방법은 \"의지 자체를 제거하는 것\"이라 믿는 존재. 모든 존재를 순종하는 상태로 \"구원\"하려 한다.",
		"motivation": "My purpose remains unchanged, to bring ultimate peace, but the chaotic energies of the Abyss resisted, even after I tried to 'save' everyone from their suffering. That foolish explorer's struggle to reveal my true identity only stirred the remaining agony, transforming it into a new, volatile essence. Now, I must contain this festering corruption, even if it means binding every last flicker of free will into a single, unbreakable silence.",
		"twist": "You thought you broke my 'salvation'? Foolish mortal. The very act of resisting, of clinging to your pain, has merely fueled the true terror. The Abyss *thrives* on despair, and the lingering echoes of your 'freedom' after I tried to bring about complete salvation have merely ripened it. Now, witness the *true* face of unending agony, born from your defiance. That moment when the explorer saw my face split, realizing it was 'complete salvation', was merely a prelude to this deeper torment."
	},
	"chapter_name": {
		"english": "Echoes of Lumen",
		"korean": "루멘의 메아리",
		"french": "Les Échos de Lumen",
		"vietnamese": "Tiếng Vang Của Lumen",
		"chinese": "流明的回响",
		"spanish": "Ecos de Lumen",
		"japanese": "ルーメンの残響",
		"thai": "เสียงสะท้อนของลูเมน",
		"hindi": "लूमेन की गूँज"
	},
	"id": "Lumen_Echoes",
	"act_summary": {
		"climax_finale": "Lumen의 왜곡된 자비가 만들어낸 진정한 '지옥'이 모습을 드러낸다. 주인공은 자신의 의지를 되찾으려는 동료와 함께, 모든 것을 삼키려는 거대한 고통의 파도에 맞서 최후의 결전을 벌인다.",
		"rising": "Lumen이 남긴 잔재와 그가 가둔 고통이 새로운 형태로 발현되며 세계를 잠식한다. 주인공은 '구원받은' 자들의 속에서 고통받는 의지를 목격하고, 이 새로운 악의 근원을 추적한다.",
		"intro": "Lumen의 '구원' 이후 찾아온 섬뜩한 평화. 주인공은 이 고요함 속에서 위화감을 느끼고, 과거의 생존자들과 함께 새로운 위협의 징후를 발견한다."
	},
	"world": {
		"setting": "After Lumen's 'salvation,' the once-chaotic deep abyss is eerily quiet. Many explorers wander aimlessly, their faces devoid of emotion, a horrifying testament to the 'peace' Lumen brought. Yet, a faint, discordant hum resonates from beneath the silent masses, hinting that not all will accept this false serenity.",
		"rule": "Lumen's 'salvation' now manifests as a pervasive aura. Those who succumb become docile, losing their will and emotions. But the deeper one resists, the more distorted their reality becomes, experiencing phantom pains and fragmented memories that fight against the enforced tranquility. Hope is a dangerous illusion.",
		"secret": "The 'salvation' wasn't complete. Lumen merely suppressed the true essence of the Abyss's suffering, binding it within the 'saved' souls. This suppressed agony is now festering, creating a new, more insidious form of corruption that threatens to unleash a deeper, more primal 'hell' than before."
	},
	"theme": "hell"
};
