import type { StoryArc } from '$lib/types';

export const storyarc_snowy_astrielle_8: StoryArc = {
	"id": "snowy_astrielle_8",
	"level": 8,
	"chapter_name": {
		"french": "La Porte du Royaume Gelé",
		"chinese": "冰封王国的门",
		"spanish": "La Puerta del Reino Congelado",
		"vietnamese": "Cổng Vương Quốc Băng Giá",
		"hindi": "जमे हुए राज्य का द्वार",
		"thai": "ประตูสู่อาณาจักรน้ำแข็ง",
		"korean": "얼어붙은 왕국의 문",
		"japanese": "凍える王国の門",
		"english": "Gate of the Frozen Kingdom"
	},
	"theme": "snowy",
	"rising_count": 3,
	"world": {
		"secret": "영원한 겨울의 여왕 아스트리엘은 사실 자신의 폭주하는 힘 때문에 사랑하는 이들을 다치게 할까 두려워 스스로를 가둔 비운의 계승자이다. 그녀의 냉혹함은 자신을 지키기 위한 방어기제이다.",
		"setting": "영원한 겨울이 지배하는 얼어붙은 왕국. 모든 생명이 얼어붙어 침묵에 잠긴 황량하고 아름다운 얼음 세계.",
		"rule": "아스트리엘의 지배 아래 모든 생명체는 얼어붙거나 그녀의 얼음 병사로 변모한다. 왕국 깊숙이 들어가려면 강력한 추위와 얼음 마법을 견뎌야 한다."
	},
	"protagonist_goal": "영원한 겨울의 여왕 아스트리엘이 지배하는 얼어붙은 왕국에 진입하여 그녀의 존재를 확인하고, 왕국을 원래대로 되돌릴 방법을 찾는다.",
	"act_tone": {
		"rising": {
			"tension": 3,
			"narrative_role": "왕국의 위협과 여왕의 존재에 대한 표면적 경험",
			"mood": "고난, 의문"
		},
		"intro": {
			"mood": "긴장감, 경외감",
			"tension": 1,
			"narrative_role": "미지의 왕국 진입과 위험 암시"
		},
		"climax_finale": {
			"narrative_role": "여왕과의 첫 조우와 진짜 정체에 대한 암시",
			"tension": 5,
			"mood": "충격, 반전의 서막"
		}
	},
	"final_boss": {
		"true_identity": "본의 아니게 폭주하는 강력한 얼음의 힘을 가진 비운의 계승자. 사랑하는 이들을 제 힘으로 다치게 할까 봐 두려워, 스스로를 거대한 얼음 성에 가두고 감정을 얼려버렸다. (1편에서는 암시적으로만 드러남)",
		"motivation": "탐험대가 자신에게 다가오는 것이 두렵다. 자신의 힘이 또다시 누군가를 해치기 전에, 그들을 이 얼어붙은 안식처에서 몰아내어 지키고 싶다. (1편에서는 단순한 공격으로 보임)",
		"name": "Astrielle",
		"twist": "아스트리엘은 아름답지만 슬픈 목소리로 외치며 더 강력한 얼음 폭풍을 불러일으킨다. 그것은 공격이 아닌, 그녀의 간절한 거절이자 울음소리였다. 쓰러진 후 그녀의 성이 녹아내리기 시작할 때, 눈물이 얼어붙은 결정을 떨어뜨리며 속삭인다 — '…따뜻해. 너희의 온기가… 두려웠지만, 사실은… 아주 많이 그리웠어.' (1편에서는 공격으로 보이며, 마지막 속삭임은 들리지 않고 그저 슬픔과 함께 얼어붙은 눈물이 암시될 뿐이다.)",
		"appearance": "A majestic and ethereal woman with flowing, platinum-white hair like tattered silk, standing in the heart of a grand, cathedral-like ice palace. She wears a gown intricately woven from unbreakable frost and shimmering, razor-sharp ice crystals that refract light into cool blues and violets. Her expression is a mix of sorrow and regal determination, with eyes like frozen stars. A subtle, swirling aura of absolute zero mist surrounds her, and fragile ice flowers bloom and shatter with every step she takes. Cinematic lighting with bioluminescent frost reflections, photorealistic style, high-fantasy aesthetic.",
		"surface_identity": "영원한 겨울의 여왕. 그녀가 지난 자리는 모든 생명이 얼어붙어 침묵에 잠긴다. 세상을 하얗게 얼려버리려는 냉혹한 지배자.",
		"id": "AstrielleWinterSovereign"
	},
	"global_foreshadowing": [
		{
			"reveal_act": "climax_finale",
			"hint": "얼어붙은 생명체들의 고통스러운 표정.",
			"reveal_context": "아스트리엘의 공격이 실제로는 그녀의 고통에서 비롯된 방어임을 깨닫는 순간.",
			"plant_room": 1,
			"id": "FS001_FrozenLife",
			"plant_act": "intro",
			"reveal_room": 5
		},
		{
			"plant_act": "rising",
			"reveal_room": 6,
			"id": "FS002_IceFlowers",
			"plant_room": 2,
			"reveal_context": "아스트리엘의 섬세하고 연약한 내면이 드러나는 순간.",
			"hint": "섬세하지만 부서지기 쉬운 얼음 꽃.",
			"reveal_act": "climax_finale"
		},
		{
			"reveal_context": "아스트리엘의 힘이 통제 불능 상태임을 암시.",
			"reveal_room": 7,
			"plant_act": "rising",
			"id": "FS003_TemperatureDrop",
			"plant_room": 3,
			"hint": "아스트리엘의 존재가 느껴지는 곳에서 급격히 떨어지는 주변 온도.",
			"reveal_act": "climax_finale"
		},
		{
			"reveal_context": "아스트리엘의 내면의 고통과 갈등이 드러나는 순간.",
			"plant_room": 4,
			"id": "FS004_MelancholyAura",
			"plant_act": "rising",
			"reveal_room": 8,
			"reveal_act": "climax_finale",
			"hint": "아스트리엘 주변에 감도는 기이한 슬픔의 기운."
		}
	],
	"npc_roles": {
		"finn": {
			"role": "탐험대장으로서 아스트리엘의 냉혹한 지배에 맞서 진군을 이끄는 리더.",
			"arc": "1편: 아스트리엘의 지배에 맞서 진군을 이끌고 그녀의 표면적 정체와 조우, 2편: 아스트리엘 힘의 본질에 의문 제기 및 과거 추적, 3편: 아스트리엘의 진정한 외침 이해 및 해방."
		},
		"bran": {
			"role": "탐험대를 보호하며, 아스트리엘의 얼음 병사들과 전투를 벌이는 선봉대원.",
			"arc": "1편: 탐험대를 보호하며 얼음 병사들과 전투, 2편: 아스트리엘의 방어 기제를 뚫고 나아가며 그녀의 힘이 '지키기' 위함임을 감지, 3편: 아스트리엘의 고통을 멈추기 위해 노력."
		},
		"eira": {
			"role": "탐험대에게 혹독한 추위 속 생존 방법을 안내하며, 얼어붙은 땅의 기묘한 현상들에 의문을 제기하는 현자가이드.",
			"arc": "1편: 얼어붙은 왕국 초입에서 생존 가이드 역할을 하며 기이한 현상에 대한 의문을 제기, 2편: 얼음 성 유물 해석, 3편: 아스트리엘 사연 완전 해명."
		}
	},
	"scenarioOutline": [
		{
			"act": "intro",
			"boss": "random_boss",
			"order": 1,
			"summary": "탐험대가 영원한 겨울 왕국의 문턱에 도착한다. 사방이 얼음으로 뒤덮인 황량하고 거대한 풍경에 압도되지만, 핀의 지휘 아래 첫걸음을 내딛는다. 곳곳에 얼어붙은 채 고통스러운 표정을 짓고 있는 생명체들의 모습이 보인다. (FS001_FrozenLife plant)",
			"npc": "finn",
			"title": "얼어붙은 왕국의 문턱"
		},
		{
			"npc": "eira",
			"order": 2,
			"summary": "영하의 추위와 거친 눈보라가 몰아치는 왕국 내부로 진입. 에이라는 혹독한 환경에서 살아남는 방법을 알려주며, 얼어붙은 땅에서 발견되는 기묘하게 섬세한 얼음 꽃(FS002_IceFlowers plant)과 이상 현상에 의문을 제기한다.",
			"act": "rising",
			"boss": "random_boss",
			"title": "혹한의 시험"
		},
		{
			"npc": "bran",
			"order": 3,
			"summary": "탐험대가 아스트리엘의 얼음 병사들과 첫 전투를 벌인다. 브란은 선봉에서 탐험대를 보호하며 싸우고, 전투 중 주변 온도가 급격히 떨어지는 현상(FS003_TemperatureDrop plant)이 감지된다. 아스트리엘의 존재가 가까워지고 있음을 암시한다.",
			"act": "rising",
			"boss": "random_boss",
			"title": "얼음 병사들의 습격"
		},
		{
			"title": "고요한 슬픔의 징후",
			"boss": "random_boss",
			"act": "rising",
			"summary": "얼음 성에 가까워질수록 더욱 강렬해지는 냉기와 함께, 왕국 전체에 기이한 슬픔의 기운(FS004_MelancholyAura plant)이 감돈다. 에이라는 이 슬픔이 단순한 추위가 아닌, 누군가의 감정에서 비롯된 것일 수 있다고 직감한다.",
			"order": 4,
			"npc": "eira"
		},
		{
			"title": "여왕의 냉혹한 첫 조우",
			"act": "climax_finale",
			"boss": "pool_034",
			"npc": "finn",
			"order": 5,
			"summary": "마침내 탐험대는 얼음 성의 심부에서 아스트리엘과 첫 조우한다. 그녀는 냉혹한 표정으로 탐험대를 공격하지만, 핀은 그녀의 공격이 단순히 파괴가 아닌 마치 무언가를 쫓아내려는 듯한 미묘한 의도가 담겨있음을 어렴풋이 느낀다. 이 싸움 중에 얼어붙은 생명체들의 고통(FS001_FrozenLife reveal)과 섬세한 얼음 꽃(FS002_IceFlowers reveal)이 아스트리엘의 본 모습에 대한 단서를 던진다. 주변 온도의 급격한 변화(FS003_TemperatureDrop reveal)와 슬픔의 기운(FS004_MelancholyAura reveal)은 그녀의 강력한 힘과 함께 내면의 고통을 암시한다. 아스트리엘은 '가까이 오지 마… 제발.'이라고 외치며 공격하지만, 그 외침은 공격이 아닌 간절한 거절의 목소리처럼 들린다."
		}
	],
	"act_summary": {
		"intro": "탐험대가 영원한 겨울 왕국에 진입하며, 얼어붙은 생명체와 혹독한 환경을 마주한다. 미지의 위협과 함께 왕국의 황량한 아름다움에 압도된다.",
		"climax_finale": "아스트리엘과의 첫 조우. 그녀의 냉혹한 공격을 받지만, 그 뒤에 숨겨진 미묘한 고통과 방어적인 의도를 어렴풋이 느낀다. 그녀의 진짜 정체에 대한 첫 암시가 드러나며 이야기는 다음 편으로 이어진다.",
		"rising": "혹독한 추위 속 생존 기술을 연마하고 얼음 병사들과 전투를 벌이며 왕국 깊숙이 전진한다. 이 과정에서 아스트리엘의 존재가 가까워짐을 느끼고, 그녀의 힘과 존재에 대한 기묘한 슬픔의 기운을 감지하기 시작한다."
	}
};
