import type { StoryArc } from '$lib/types';

export const storyarc_desert_zahrun_48: StoryArc = {
	"id": "desert_zahrun_48",
	"level": 48,
	"chapter_name": {
		"korean": "장의사의 검",
		"english": "Grave Sword",
		"japanese": "葬儀屋の剣",
		"chinese": "葬仪之剑",
		"french": "Lame Tombe",
		"spanish": "Hoja Fúnebre",
		"vietnamese": "Tang Kiếm",
		"thai": "ดาบสัปเหร่อ",
		"hindi": "शव तलवार"
	},
	"theme": "desert",
	"world": {
		"rule": "녹슨 검을 모래 위에 내버리면 재앙이 찾아온다.",
		"how": "검을 거두려는 장의사 자룬이 주인을 먼저 묻기 위해 검객을 공격하기 때문이다.",
		"secret": "주인을 잃고 울부짖는 녹슨 검을 모래에 정성껏 묻어야 검들이 안식을 얻고 잠든다.",
		"setting": "메마른 사막에 있는 오래된 유적"
	},
	"protagonist_goal": "동료 아미르를 구하고 녹슨 검을 모래에 정성껏 묻어 검들의 넋을 잠들게 하는 것이다.",
	"boss_name_korean": "자룬",
	"act_tone": {
		"intro": {
			"tension": 1,
			"narrative_role": "사막에서 녹슨 검과 황동 방울 소리를 만나는 구간",
			"mood": "쓸쓸하고 고요한 분위기"
		},
		"climax_finale": {
			"mood": "치열하고 애상적인 분위기",
			"tension": 5,
			"narrative_role": "장의사의 정체를 밝히고 영혼들을 안식에 들게 하는 구간"
		},
		"rising": {
			"narrative_role": "상인의 단서를 모으며 진실에 접근하는 구간",
			"tension": 3,
			"mood": "의구심이 깊어지는 분위기"
		}
	},
	"final_boss": {
		"id": "CaravanUndertaker_Zahrun_V1",
		"name": "Zahrun",
		"appearance_boss": "상아빛 가면을 쓰고 쪽빛 천을 두른 자룬이 거대한 장의사 모습으로 솟구친다. 그의 뒤에는 수백 자루의 검이 깃발처럼 서서 울부짖는다.",
		"true_identity": "싸움에서 진 검객들의 검을 거두어 장례를 치러 주는 장의사입니다. 그의 낙타 행렬은 그림자로 만든 환상이며 짐 속의 검들은 죽은 주인을 그리워하며 웁니다.",
		"motivation": "탐험대의 검에서 곧 주인이 죽을 기운을 느끼고 그 검을 거두려 합니다. 검을 거두려면 주인을 먼저 묻어야 한다는 규칙 때문에 탐험대를 쓰러뜨리려 합니다.",
		"want": "죽은 검객의 검을 거두기 위해 검의 주인을 먼저 묻는 것이다.",
		"twist": "자룬이 방울을 흔들자 낙타 행렬이 모래로 무너지며 거대한 장의사의 형상으로 솟구칩니다. 짐 속에서 풀려난 수백 자루의 검이 그의 뒤에 깃발처럼 서서 울부짖습니다. \"그 검, 곧 울겠군. 걱정 마라. 네 검은 내가 정성껏 묻어주마. 너를 먼저 묻은 다음에.\""
	},
	"global_foreshadowing": [
		{
			"id": "foreshadowing_1",
			"hint": "바람 언덕에서 바람을 타고 울려 퍼진 낮은 황동 방울 소리",
			"plant_order": 1,
			"plant_room": 1,
			"reveal_room": 15,
			"reveal_context": "자룬이 방울을 흔들며 거대한 형상으로 변신할 때 나는 소리였다."
		},
		{
			"id": "foreshadowing_2",
			"hint": "오아시스 마을 우물 밑에서 발견한 상아빛 가면 조각",
			"plant_order": 2,
			"plant_room": 3,
			"reveal_room": 9,
			"reveal_context": "자룬이 얼굴에 쓰고 있던 상아빛 가면의 일부였다."
		},
		{
			"id": "foreshadowing_3",
			"hint": "붉은 골짜기 바위 틈에 걸린 쪽빛 천 조각",
			"plant_order": 3,
			"plant_room": 5,
			"reveal_room": 5,
			"reveal_context": "자룬이 두르고 있던 쪽빛 천자락의 한 부분이었다."
		},
		{
			"id": "foreshadowing_4",
			"hint": "검은 유적 바닥에서 주운 방울 달린 검 손잡이 장식",
			"plant_order": 4,
			"plant_room": 9,
			"reveal_room": 3,
			"reveal_context": "자룬이 허리춤과 손목에 달고 다니던 황동 장식이었다."
		}
	],
	"npc_roles": {
		"ember": {
			"role": "사막 유적을 탐사하는 수색꾼",
			"arc": "3화에서 붉은 골짜기 그늘에서 거대한 낙타 행렬의 흔적을 발견하고 주인공을 부른다."
		},
		"ferro": {
			"role": "유적을 기록하는 조사관",
			"arc": "4화에서 유적 입구에서 사망한 검객들의 명단을 주인공에게 보여준다."
		},
		"dune": {
			"role": "사막 상인의 진실을 숨기려는 거점 주민",
			"arc": "2화에서 우물가 사막 상인의 발자국을 지우며 주인공을 속이려 한다."
		},
		"amir": {
			"role": "주인공에게 사건의 계기를 제공하는 사막 탐험가",
			"arc": "1화에서 주운 녹슨 검을 내주고 5화에서 자룬의 그림자 행렬에 사로잡힌다."
		}
	},
	"scenarioOutline": [
		{
			"order": 1,
			"act": "intro",
			"title": "버려진 검",
			"boss": "random_boss",
			"npc": "amir",
			"summary": "아미르가 언덕 모래밭에서 주운 녹슨 검을 주인공에게 전한다. 주인공은 쓸모가 없다고 생각하여 녹슨 검을 모래 위에 내버린다. 사막 도적은 검을 함부로 버리면 재앙이 온다고 경고하며 주인공을 습격한다. 전투를 벌이던 중 바람을 타고 낮은 황동 방울 소리가 울려 퍼진다.",
			"place": "바람 언덕",
			"random_boss_title": "사막 도적",
			"random_boss_side": "warn",
			"boss_trace": "황동 방울 소리"
		},
		{
			"order": 2,
			"act": "rising",
			"title": "우물가의 거짓",
			"boss": "random_boss",
			"npc": "dune",
			"summary": "듄은 우물가에서 사막 상인이 남긴 발자국을 지우며 주인공을 속이려 한다. 약초 채집꾼은 상인이 지친 사람을 돕는 은인이라 주장하며 주인공의 길을 막아선다. 주인공은 약초 채집꾼을 제압한 뒤 우물 밑에서 상아빛 가면 조각을 발견한다. 주인공은 사막 상인이 망가진 검들을 짐에 실어 모은다는 사실을 깨닫는다.",
			"place": "오아시스 마을",
			"random_boss_title": "약초 채집꾼",
			"random_boss_side": "ally",
			"boss_trace": "상아빛 가면 조각"
		},
		{
			"order": 3,
			"act": "rising",
			"title": "그림자 행렬",
			"boss": "random_boss",
			"npc": "ember",
			"summary": "앰버가 골짜기 그늘에서 거대한 낙타 행렬의 흔적을 발견하고 주인공을 부른다. 용병 대장은 죽은 자의 길에 들어서면 위험하다며 주인공에게 칼을 뽑아 든다. 주인공은 싸움에서 이긴 후 바위 틈에 걸린 쪽빛 천 조각을 거둔다. 상인을 따르는 낙타 행렬이 모두 그림자로 만든 환상임을 새로 알게 된다.",
			"place": "붉은 골짜기",
			"random_boss_title": "용병 대장",
			"random_boss_side": "warn",
			"boss_trace": "쪽빛 천 조각"
		},
		{
			"order": 4,
			"act": "rising",
			"title": "장의사의 정체",
			"boss": "random_boss",
			"npc": "ferro",
			"summary": "페로는 유적 입구에서 사망한 검객들의 명단을 주인공에게 보여준다. 보물 사냥꾼은 자룬이 보물을 나눠주는 상인이라고 속이며 주인공을 공격한다. 전투를 마친 주인공은 바닥에서 방울이 달린 검 손잡이 장식을 줍는다. 자룬이 단순한 상인이 아니라 죽은 검객의 검을 거두는 장의사라는 진실을 알게 된다.",
			"place": "검은 유적",
			"random_boss_title": "보물 사냥꾼",
			"random_boss_side": "ally",
			"boss_trace": "검 손잡이 장식"
		},
		{
			"order": 5,
			"act": "climax_finale",
			"title": "영혼의 안식",
			"boss": "pool_CaravanUndertaker_Zahrun_V1",
			"npc": "amir",
			"summary": "아미르가 신전 중앙에서 자룬의 그림자 행렬에 잡혀 비명을 지른다. 자룬은 방울을 흔들어 거대한 장의사의 형상으로 변신하고 주인공을 공격한다. 주인공은 칼을 휘두르며 자룬과의 거친 싸움에서 승리한다. 주인공이 주인을 잃은 녹슨 검을 모래에 정성껏 묻자 울부짖던 검들이 조용히 잠든다.",
			"place": "모래 폭풍 신전"
		}
	],
	"act_summary": {
		"climax_finale": "주인공은 신전에서 아미르를 사로잡은 자룬을 물리치고 녹슨 검을 모래에 정성껏 묻어 검들의 넋을 달랜다.",
		"intro": "주인공은 버려진 녹슨 검을 두고 사막 도적과 싸우던 중 의문의 황동 방울 소리를 듣는다.",
		"rising": "주인공은 사막을 탐색하며 상아빛 가면을 쓴 자룬이 죽은 검객의 검을 거두는 장의사라는 사실을 알아낸다."
	}
};
