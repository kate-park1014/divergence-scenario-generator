import type { StoryArc } from '$lib/types';

export const storyarc_snowy_fimbulship_89: StoryArc = {
	"id": "snowy_fimbulship_89",
	"level": 89,
	"chapter_name": {
		"japanese": "氷の船長現る",
		"vietnamese": "Thuyền",
		"french": "Capitaine",
		"english": "Frost",
		"chinese": "冰船长降临",
		"korean": "서리 선장 강림",
		"hindi": "हिम कप्तान",
		"thai": "กัปตันน้ำแข็",
		"spanish": "Capitán"
	},
	"theme": "snowy",
	"rising_count": 3,
	"world": {
		"secret": "바다를 떠도는 유령선은 사실 저주받은 선장의 영혼이 깃든 시체이며, 그 배는 산 자의 생명력을 흡수해 운행되는 피의 항해선이었다.",
		"rule": "산 자의 온기를 빼앗아 죽은 선원으로 삼는 저주. 죽은 자는 영원히 배에 묶여 고통받는다.",
		"setting": "수백 년 얼어붙은 바이킹 시대의 혹독한 북극해. 유령선과 드라우그의 전설이 살아 숨 쉬는 저주받은 빙하."
	},
	"protagonist_goal": "혹한의 바다를 탐험하며 전설의 유령선에 얽힌 진실을 파헤치고, 선장의 저주를 막아 산 자들의 희생을 끝낸다.",
	"act_tone": {
		"climax_finale": {
			"narrative_role": "끔찍한 진실과 마주하고 압도적인 힘에 분노하며 최종 결전을 준비",
			"mood": "절규와 격노",
			"tension": 5
		},
		"intro": {
			"mood": "긴박함",
			"tension": 1,
			"narrative_role": "혹한 속 미지의 위협을 암시하며 주인공의 분노를 촉발"
		},
		"rising": {
			"narrative_role": "단서를 추적하며 위협에 맞서고 진실의 조각을 모으는 과정",
			"mood": "격렬함",
			"tension": 3
		}
	},
	"final_boss": {
		"appearance_npc": "수백 년간 혹한 속에 잠들어 있던 바이킹 시대의 전설적인 유령선",
		"twist": "유령선의 뱃머리에서 거대한 드라우그가 도끼를 들고 일어선다. '내 배는… 아직 선원이 부족하다. 네놈들이 채워라.'",
		"id": "IceMimic_Fimbulship_V1",
		"surface_identity": "수백 년간 혹한 속에 잠들어 있던 바이킹 시대의 전설적인 유령선.",
		"motivation": "얼어붙은 바다를 영원히 항해하기 위해, 산 자들을 죽은 선원으로 끌어들이려 한다.",
		"true_identity": "약탈과 저주 속에 침몰한 선장이 얼음 속에서 되살아난 드라우그. 산 자의 온기를 빼앗아, 자신의 영원한 항해를 함께할 죽은 선원으로 삼는다.",
		"appearance_boss": "서리에 검게 그을린 갑옷과 따개비 같은 얼음을 두른 거대한 드라우그. 등에는 침몰한 유령선의 뱃머리가 얼어붙은 채 융합되어 있고, 서리 낀 거대한 도끼를 쥔 채 빙하 안개 속에서 일어선다.",
		"name": "Fimbulship"
	},
	"global_foreshadowing": [
		{
			"plant_act": "intro",
			"id": "gf_01_cold_aura",
			"hint": "한기가 없는 곳에서도 기이한 냉기가 느껴지며, 작은 생명체들이 서서히 활력을 잃어간다.",
			"plant_room": 3,
			"reveal_act": "climax_finale",
			"reveal_room": 9,
			"reveal_context": "선장의 저주가 단순히 죽음이 아니라 생명력을 고통스럽게 흡수하는 것임을 깨닫는다."
		},
		{
			"plant_act": "intro",
			"reveal_room": 10,
			"reveal_act": "climax_finale",
			"plant_room": 5,
			"reveal_context": "전설 속 유령선이 과거 실제로 존재했으며, 잔혹한 약탈자였다는 진실을 알게 된다.",
			"id": "gf_02_cursed_legend",
			"hint": "오래된 항해사들의 일지에서 저주받은 선장에 대한 단편적인 기록을 발견하지만, 대부분은 단순한 미신으로 치부된다."
		},
		{
			"plant_act": "rising",
			"plant_room": 7,
			"reveal_act": "climax_finale",
			"reveal_room": 12,
			"reveal_context": "선장의 저주받은 배가 산 자의 생명력을 흡수하며 '선원'을 갈망하고 있었음을 깨닫는다.",
			"id": "gf_03_sea_whispers",
			"hint": "매서운 바람 소리 속에서 '더 많은 선원이 필요하다'는 섬뜩한 환청이 들리지만, 극심한 추위 탓으로 여긴다."
		},
		{
			"plant_act": "rising",
			"plant_room": 10,
			"reveal_act": "climax_finale",
			"reveal_room": 15,
			"reveal_context": "선장의 저주가 작동하는 영역 안에서, 생명 없는 것들은 고요 속에 잠식되어 마치 안전한 것처럼 느껴진다.",
			"id": "gf_04_calm_danger",
			"hint": "가장 위험하다고 알려진 빙하 지대에서 기이할 정도로 잔잔한 물결과 고요함이 감돌아 불길한 예감을 준다."
		}
	],
	"npc_roles": {
		"finn": {
			"role": "유령선 전설 전문가이자 조력자",
			"arc": "1화에서 유령선에 대한 불길한 소문을 전하며 주인공에게 첫 단서를 제공하고, 5화에서 최종 결전 직전 선장의 끔찍한 진실을 증언하며 주인공의 분노를 격앙시키는 역할."
		},
		"eira": {
			"arc": "4화에서 유령선 근처의 기이한 생명력 소실 현상을 감지하고, 보스의 저주가 단순한 죽음이 아님을 암시하며 주인공에게 더 큰 위기감을 주는 역할.",
			"role": "영적인 감각을 지닌 안내자"
		},
		"hild": {
			"role": "혹한지 이동 전문가",
			"arc": "2화에서 유령선의 이동 경로에 대한 중요한 정보를 제공하고, 선장의 저주에 대한 민담을 들려주어 주인공이 진실에 한 발짝 다가서게 돕는다."
		},
		"ivar": {
			"arc": "3화에서 갑자기 나타난 드라우그 무리에 맞서 싸우며 주인공과 함께 위기를 헤쳐나가고, 선장의 힘에 대한 직접적인 위협을 경험하게 한다.",
			"role": "전투 전문 동료"
		}
	},
	"scenarioOutline": [
		{
			"summary": "얼어붙은 항구에 떠도는 유령선 소문. 핀이 주인공에게 경고하지만, 주인공은 더 큰 위험을 감지한다. 기이한 냉기와 사라지는 생명에 대한 단서(gf_01)와 저주받은 선장 전설(gf_02)이 스친다.",
			"npc": "finn",
			"order": 1,
			"boss": "random_boss",
			"title": "유령선의 그림자",
			"act": "intro"
		},
		{
			"summary": "힐드는 유령선의 이동 경로를 추적하여 빙하 미로 속으로 이끌고, 주인공은 첫 번째 중간 보스와 격렬한 전투를 벌인다. 선장의 저주에 대한 민담을 통해 진실에 접근한다.",
			"order": 2,
			"npc": "hild",
			"act": "rising",
			"title": "얼음 속의 발자취",
			"boss": "random_boss"
		},
		{
			"order": 3,
			"npc": "ivar",
			"summary": "이바르와 함께 드라우그 무리에 맞서 싸우며 유령선에 묶인 죽은 선원들의 끔찍한 모습을 목격하고, 분노가 치밀어 오른다. 매서운 바람 속에서 '선원이 필요하다'는 환청(gf_03)이 들리고, 위험한 빙하 지대의 고요함(gf_04)에 불길함을 느낀다.",
			"act": "rising",
			"title": "저주받은 선원들",
			"boss": "random_boss"
		},
		{
			"npc": "eira",
			"order": 4,
			"summary": "에이라는 주변 생명체들의 활력이 사라지는 현상을 감지하고, 유령선이 단순한 배가 아니며 산 자의 생명력을 노린다는 섬뜩한 진실을 어렴풋이 암시하며 주인공의 분노를 증폭시킨다.",
			"title": "생명력의 강탈",
			"act": "rising",
			"boss": "random_boss"
		},
		{
			"title": "빙하 선장의 최후",
			"act": "climax_finale",
			"boss": "pool_IceMimic_Fimbulship_V1",
			"summary": "핀의 도움으로 선장의 끔찍한 진실(gf_02)과 마주한 주인공은 극심한 분노 속에서 최종 결전을 벌인다. 유령선 뱃머리에서 드라우그 선장 Fimbulship이 깨어나 '내 배는 아직 선원이 부족하다' 외치며 압도적인 힘으로 공격한다. 기이한 냉기(gf_01)와 선장의 갈망(gf_03), 그리고 고요 속의 위험(gf_04) 모든 복선이 드러나며 산 자들의 온기를 빼앗으려는 저주에 종지부를 찍으려 한다.",
			"npc": "finn",
			"order": 5
		}
	],
	"act_summary": {
		"climax_finale": "유령선과 선장의 끔찍한 진실이 밝혀지고, 주인공은 격렬한 분노 속에서 영원한 항해를 꿈꾸는 선장 'Fimbulship'과 목숨을 건 최후의 결전을 벌인다.",
		"intro": "혹한의 바다에서 유령선의 불길한 소문이 번지고, 주인공은 미지의 위협을 감지하며 사건의 서막이 오른다. 단서 수집의 시작.",
		"rising": "유령선의 행적을 추적하며 드라우그들과 격렬한 전투를 벌이고, 점점 더 끔찍한 진실의 조각들을 맞춰나간다. 생명력 흡수 저주의 징후들이 드러난다."
	}
};
