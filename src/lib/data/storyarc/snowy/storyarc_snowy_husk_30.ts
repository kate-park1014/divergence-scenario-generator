import type { StoryArc } from '$lib/types';

export const storyarc_snowy_husk_30: StoryArc = {
	"id": "snowy_husk_30",
	"level": 30,
	"chapter_name": {
		"chinese": "迷失之梦",
		"vietnamese": "Giấc Mơ Mất",
		"japanese": "失われた夢",
		"french": "Rêve Perdu",
		"thai": "ฝันที่หายไป",
		"hindi": "खोया सपना",
		"korean": "잃어버린 꿈",
		"english": "Lost Dream",
		"spanish": "Sueño"
	},
	"theme": "snowy",
	"rising_count": 3,
	"world": {
		"setting": "영원한 눈보라가 휘몰아치는 잊혀진 북방의 황무지. 고대 바이킹 문명의 흔적이 얼음 속에 잠들어 있으며, 순수한 영혼들의 염원이 때때로 기이한 형태로 현실에 발현된다. 혹독한 추위가 모든 것을 얼리지만, 그 아래에는 뜨거운 그리움이 숨 쉬고 있다.",
		"secret": "오래전 폭설 속에 사라진 어린아이의 낡은 천 인형은 주인을 향한 순수한 그리움과 혹독한 추위에 갇혀 거대한 얼음 괴물로 변모했다. 그 존재는 자신이 잃어버린 것을 찾기 위해 모든 것을 파괴할 준비가 된, 비극적인 수호자가 되었다.",
		"rule": "이 땅에 깃든 그리움은 때로 강력한 영적 존재를 만들어낸다. 그 존재들은 주인의 소망을 따라 왜곡되거나 강해진다. 생명체는 극한의 추위 속에서 육체와 영혼이 분리될 수 있으며, 잃어버린 것들은 얼음 속에 보존되거나 다른 형태로 변형된다."
	},
	"protagonist_goal": "폭설 속에서 벌어지는 기이한 사건들의 진실을 파헤치고, 괴물 '허스크'의 비극적인 과거를 밝혀내어 그 영혼을 해방시킨다.",
	"act_tone": {
		"intro": {
			"narrative_role": "Introduce the desolate snowy world and the initial unsettling presence, hinting at a hidden tragedy.",
			"tension": 1,
			"mood": "Mysterious, melancholic"
		},
		"climax_finale": {
			"narrative_role": "Confront the full, tragic truth of the boss's identity and sacrifice, culminating in a bittersweet resolution.",
			"tension": 5,
			"mood": "Heartbreaking, poignant"
		},
		"rising": {
			"tension": 3,
			"mood": "Desperate, sorrowful",
			"narrative_role": "Intensify the search for clues, revealing fragments of the past and deepening the sense of unavoidable sorrow."
		}
	},
	"final_boss": {
		"id": "FrozenToy_Husk_V1",
		"twist": "보스의 거대한 몸체가 산산이 부서지며 얼음 파편들이 폭설처럼 쏟아진다. 그 잔해 속에서 낡고 해진 작은 천 인형이 모습을 드러낸다. 인형의 한쪽 팔에는 어린아이가 직접 수놓은 듯한 조악한 꽃 문양이 새겨져 있다. 이내, 인형의 찢어진 천 사이에서 희미한 목소리가 울려 퍼진다. '…아가, 내가 지켜줄게. 어디에 있든… 네 곁을… 영원히…'",
		"name": "Husk",
		"true_identity": "사실 이 존재는 오래전 바이킹 부족의 어린아이가 폭풍 속에서 잃어버린, 낡은 천 인형이다. 아이의 순수한 염원과 혹독한 추위가 뒤섞여 거대한 얼음의 육체를 얻었으며, 주인을 찾아 헤매는 비극적인 수호자로 변모했다.",
		"motivation": "폭설 속에서 사라진 주인을 찾아 끝없이 헤매고 있으며, 자신에게 다가오는 모든 존재를 주인을 위협하는 적으로 간주한다. 그 어떤 간섭도 허용하지 않으려는 절박한 마음으로 공격한다.",
		"appearance_npc": "눈보라 속에서 길을 잃은 듯 헤매는, 거대한 털뭉치 괴물로 보이지만, 이따금씩 인간의 형상으로 변하려다 실패한 듯한 기괴한 움직임을 보인다.",
		"appearance_boss": "눈보라 속에서 희미하게 빛나는 거대한 형체는, 본래 낡고 해진 천 조각이었던 것처럼 보이지만, 지금은 견고하고 푸른 얼음 결정으로 이루어져 있다. 찢어진 자국마다 에메랄드빛 광채가 흘러나오고, 그 사이를 잇는 실들은 은은한 오팔빛으로 반짝인다. 털실처럼 뭉쳐진 몸통 곳곳에서는 수정처럼 투명한 서리가 꽃잎처럼 피어나 차가운 생명력을 발산하며, 얼음 결정 사이로 붉은 석류석 빛의 심장이 희미하게 고동치는 듯 보인다.",
		"surface_identity": "눈보라 속에서 길을 잃은 듯 헤매는, 거대한 털뭉치 괴물로 보이지만, 이따금씩 인간의 형상으로 변하려다 실패한 듯한 기괴한 움직임을 보인다."
	},
	"global_foreshadowing": [
		{
			"hint": "얼음 속에서 특이한 직물 섬유 발견",
			"reveal_room": 10,
			"id": "GF_Textile_Fiber",
			"reveal_context": "부서진 보스의 몸에서 흘러나오는 섬유 조각들이 오래된 천 인형의 것과 일치한다.",
			"plant_room": 3,
			"plant_act": "intro",
			"reveal_act": "climax_finale"
		},
		{
			"plant_room": 5,
			"reveal_act": "climax_finale",
			"plant_act": "rising",
			"reveal_context": "보스의 파괴된 형태에서 어린아이의 목소리가 들리며 인형의 진정한 정체를 깨닫게 된다.",
			"id": "GF_Lullaby_Cry",
			"hint": "희미하게 들려오는 아이의 흐느낌",
			"reveal_room": 9
		},
		{
			"reveal_context": "보스의 심장부에서 느껴지는 따뜻한 에너지가 인형의 순수한 사랑과 희생의 흔적이었음이 드러난다.",
			"plant_room": 7,
			"reveal_act": "climax_finale",
			"plant_act": "rising",
			"hint": "극한의 추위 속에서 느껴지는 미약한 온기",
			"reveal_room": 8,
			"id": "GF_Strange_Warmth"
		},
		{
			"reveal_context": "고대 유적에서 발견된 바이킹 장신구와 어린아이가 그린 듯한 그림이 인형의 주인에 대한 단서임을 알게 된다.",
			"plant_act": "intro",
			"reveal_act": "rising",
			"plant_room": 1,
			"hint": "오래된 바이킹 유적에서 어린이용 장신구 발견",
			"reveal_room": 6,
			"id": "GF_Viking_Trinket"
		}
	],
	"npc_roles": {
		"eira": {
			"role": "비극적 진실의 안내자",
			"arc": "1화에서 허스크의 슬픔을 감지하고 단서 수집을 요청하는 인물. 5화에서 모든 진실이 밝혀지자 허스크의 비극적 정체를 확신하며 서사를 마무리하는 역할."
		},
		"ivar": {
			"arc": "3화에서 허스크의 공격 패턴과 기운에서 특이점을 발견하고, 허스크가 무언가를 찾는 듯한 행동을 관찰하여 내재된 그리움을 암시하는 역할.",
			"role": "행동 패턴 분석가"
		},
		"borealis": {
			"arc": "4화에서 고대 문헌과 언어를 해독하여 허스크의 존재가 비극적 희생의 결과임을 암시하고, 인형의 주인이 어린아이였음을 유추하는 결정적 단서를 제공하는 역할.",
			"role": "고대 지식의 해설자"
		},
		"finn": {
			"role": "초자연적 단서의 발견자",
			"arc": "2화에서 얼음 속 희미한 자장가를 듣고 기이한 현상을 보고하며 허스크의 본질적인 요소를 드러내는 역할."
		}
	},
	"scenarioOutline": [
		{
			"title": "눈보라 속의 침묵",
			"boss": "random_boss",
			"order": 1,
			"act": "intro",
			"npc": "eira",
			"summary": "폭설로 고립된 외딴 마을에 알 수 없는 괴물 '허스크'가 출현해 주민들을 위협한다. 오래된 이야기와 전설을 연구하는 '에이라'는 허스크의 존재에서 미묘한 슬픔을 감지하고, 단서를 찾기 위해 주인공에게 도움을 요청한다. (복선 4: 오래된 바이킹 유적에서 어린이용 장신구 발견)"
		},
		{
			"summary": "고대 바이킹 유적 깊숙한 곳에서 정체불명의 결정체를 조사하던 모험가 '핀'은 얼음 속에서 희미한 천 조각과 함께 들려오는 묘한 자장가 소리를 듣는다. 그는 이 소리가 단순한 환청이 아닐지도 모른다고 여기고 주인공에게 보고한다. (복선 1: 얼음 속에서 특이한 직물 섬유 발견)",
			"npc": "finn",
			"order": 2,
			"act": "rising",
			"title": "얼음 속 속삭임",
			"boss": "random_boss"
		},
		{
			"npc": "ivar",
			"summary": "점점 더 강력해지는 허스크의 위협 속에, 용병 '이바르'는 허스크의 공격 패턴에서 기묘한 일관성을 발견한다. 그 일관성은 마치 무언가를 필사적으로 찾는 행동처럼 보이며, 허스크 주변에서 한없이 차가운 기운 속에서도 미약한 온기가 감지된다. (복선 3: 극한의 추위 속에서 느껴지는 미약한 온기)",
			"boss": "random_boss",
			"title": "영원의 추위와 열망",
			"order": 3,
			"act": "rising"
		},
		{
			"order": 4,
			"act": "rising",
			"title": "뒤얽힌 운명의 실타래",
			"boss": "random_boss",
			"summary": "오랜 옛 이야기와 고대 문헌을 통해 허스크의 정체를 추적하던 현자 '보레아리스'는 허스크가 단순히 괴물이 아니라, 어떤 비극적인 희생의 결과일 수 있다는 가설을 제시한다. 그녀는 고대 언어로 쓰인 일기장에서 어린아이의 순수한 염원을 암시하는 구절을 해독한다. (복선 2: 희미하게 들려오는 아이의 흐느낌)",
			"npc": "borealis"
		},
		{
			"npc": "eira",
			"summary": "모든 단서가 모여 허스크의 비극적인 정체가 밝혀지는 순간, '에이라'는 허스크가 과거 잃어버린 아이의 소중한 인형이었음을 확신한다. 인형은 주인을 찾아 헤매며 비극적인 수호자로 변모했음이 드러나고, 주인공은 허스크의 진정한 슬픔과 마주한다. 최종 전투 끝에, 허스크는 산산이 부서지며 본래의 낡은 천 인형으로 돌아가고, 인형에서 울려 퍼지는 마지막 목소리는 모두의 가슴을 저미게 한다.",
			"title": "얼어붙은 눈물",
			"boss": "pool_FrozenToy_Husk_V1",
			"order": 5,
			"act": "climax_finale"
		}
	],
	"act_summary": {
		"intro": "폭설 속 등장한 괴물 '허스크'에 대한 공포와 함께, 그 뒤에 숨겨진 미묘한 슬픔과 의문을 제시하며 비극의 서막을 연다. NPC 에이라와 함께 허스크의 정체에 대한 초기 단서들을 수집하기 시작한다.",
		"climax_finale": "모든 단서가 합쳐져 허스크의 슬픈 진실, 즉 잃어버린 주인을 찾는 낡은 천 인형의 비극적인 변모가 드러난다. 감정적인 절정 속에서 허스크와의 최종 대결을 통해, 그 영혼을 해방하고 비극적인 이야기를 마무리 짓는다.",
		"rising": "다양한 NPC들을 만나며 허스크와 관련된 고대 전설, 기이한 현상, 행동 패턴 등을 통해 파편적인 단서들을 수집한다. 허스크가 단순한 괴물이 아닌, 무언가를 필사적으로 찾는 비극적인 존재임을 점차 깨달아가며 감정적 긴장감이 고조된다."
	}
};
