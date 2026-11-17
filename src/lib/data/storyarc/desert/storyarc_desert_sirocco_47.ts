import type { StoryArc } from '$lib/types';

export const storyarc_desert_sirocco_47: StoryArc = {
	"id": "desert_sirocco_47",
	"level": 47,
	"chapter_name": {
		"korean": "사막에 울리는 칼날",
		"english": "Echo Blade",
		"japanese": "響く刃",
		"chinese": "响彻之刃",
		"french": "Lame Écho",
		"spanish": "Hoja de Eco",
		"vietnamese": "Vang Kiếm",
		"thai": "ดาบสะท้อน",
		"hindi": "गूंजती धार"
	},
	"theme": "desert",
	"world": {
		"rule": "녹슨 결투검을 꺾으면 사막 전체가 흔들리며 날카로운 모래폭풍이 불기 시작한다.",
		"secret": "사막을 휩쓰는 모래폭풍은 전쟁에서 죽은 검객들의 기운이 뭉쳐 만들어진 존재다. 참된 검객과 결투를 마쳐야 폭풍이 멈춘다.",
		"setting": "붉은 사막에 있는 잊혀진 옛 전장.",
		"how": "녹슨 결투검에 담긴 검객들의 기운이 자극받아 폭풍의 거인 시로코를 깨우기 때문이다."
	},
	"protagonist_goal": "사막을 휩쓰는 거대한 모래폭풍의 정체를 밝히고 마지막 결투를 끝내 고요를 되찾는 것이다.",
	"boss_name_korean": "시로코",
	"act_tone": {
		"intro": {
			"tension": 1,
			"mood": "불길하고 삭막한 분위기",
			"narrative_role": "사막의 위협과 폭풍의 시작"
		},
		"rising": {
			"tension": 3,
			"mood": "서늘하고 긴장되는 분위기",
			"narrative_role": "옛 전장에 얽힌 비극과 보스의 정체 파악"
		},
		"climax_finale": {
			"tension": 5,
			"narrative_role": "모래 거인과의 최종 결투와 사막의 평화",
			"mood": "웅장하고 비장한 분위기"
		}
	},
	"final_boss": {
		"id": "SwordStorm_Sirocco_V1",
		"name": "Sirocco",
		"appearance_boss": "모래와 바람으로 만들어진 거대한 검객이 청백색 번갯빛 곡도를 들고 서 있다. 요동치는 모래 갑주 속으로 수많은 검객 그림자가 엇갈린다.",
		"true_identity": "옛 전쟁에서 수많은 검객이 내뿜은 칼날의 기운이 사막의 바람과 뭉쳐서 태어난 존재입니다. 폭풍 안에서는 지금도 끝나지 않은 검객들의 결투가 이어지고 있습니다.",
		"motivation": "끝내지 못한 결투를 마무리지을 강한 상대를 찾고 있습니다. 사막에 발을 들인 검객들의 기운을 느끼고 그들과 겨루기 위해 다가옵니다.",
		"want": "자신의 칼날을 막아낼 검객을 만나 끝내지 못한 결투를 마치는 것.",
		"twist": "휘몰아치던 모래폭풍이 갑자기 멈추고, 고요해진 한가운데에서 모래로 된 거대한 검객이 몸을 일으킵니다. 수천 명의 목소리가 하나로 겹쳐 울리며 칼끝을 겨눕니다. \"...아직 승부가 나지 않았다. 다음 상대, 앞으로!\""
	},
	"global_foreshadowing": [
		{
			"id": "foreshadowing_1",
			"hint": "바위에 새겨진 깊은 칼자국",
			"plant_order": 1,
			"plant_room": 1,
			"reveal_room": 15,
			"reveal_context": "거대한 모래 거인 시로코가 휘두른 곡도의 자국이었음이 드러난다."
		},
		{
			"id": "foreshadowing_2",
			"hint": "허공에서 울려 퍼지는 날카로운 쇠소리",
			"plant_order": 2,
			"plant_room": 3,
			"reveal_room": 9,
			"reveal_context": "시로코의 몸을 이룬 검객 영혼들이 겨루는 칼소리였음이 밝혀진다."
		},
		{
			"id": "foreshadowing_3",
			"hint": "모래 알갱이에서 스쳐 지나가는 청백색 번갯빛",
			"plant_order": 3,
			"plant_room": 5,
			"reveal_room": 5,
			"reveal_context": "시로코가 쥐고 있는 거대한 번개 곡도의 기운이었음이 드러난다."
		},
		{
			"id": "foreshadowing_4",
			"hint": "사구에 찍힌 거대한 발자국",
			"plant_order": 4,
			"plant_room": 9,
			"reveal_room": 3,
			"reveal_context": "모래 검객 시로코가 사막을 지나간 흔적이었음이 밝혀진다."
		}
	],
	"npc_roles": {
		"amir": {
			"role": "녹슨 결투검을 전해주는 사막 상인",
			"arc": "1화에서 주인공에게 녹슨 결투검을 전달하고, 5화에서 버려졌던 검을 찾아 주인공에게 다시 준다."
		},
		"kasai": {
			"role": "바위의 칼자국을 조사하는 탐험가",
			"arc": "2화에서 주인공과 함께 바위에 새겨진 수백 명의 결투 흔적을 조사한다."
		},
		"khan": {
			"role": "전장터를 지키는 무덤지기",
			"arc": "4화에서 주인공을 사막의 옛 전장터로 안내한다."
		},
		"dune": {
			"role": "사막의 전설을 아는 마을 촌장",
			"arc": "3화에서 폭풍 속 울부짖음이 죽은 검객들의 칼소리라는 사실을 전해준다."
		}
	},
	"scenarioOutline": [
		{
			"order": 1,
			"act": "intro",
			"title": "사막의 경고",
			"boss": "random_boss",
			"npc": "amir",
			"summary": "주인공은 사막 입구에서 상인 아미르를 만나 오래된 녹슨 결투검을 받는다. 험악하게 접근한 사막 도적 두목은 위험한 기운을 부른다며 칼을 꺾으라고 경고한다. 주인공은 헛소리로 치부하며 녹슨 결투검을 꺾어 모래 속에 버린다. 순간 사막 전체가 흔들리며 날카로운 바람이 불기 시작한다.",
			"place": "붉은 사막 입구",
			"random_boss_title": "사막 도적 두목",
			"random_boss_side": "warn",
			"boss_trace": "바위에 새겨진 깊은 칼자국"
		},
		{
			"order": 2,
			"act": "rising",
			"title": "협곡의 흔적",
			"boss": "random_boss",
			"npc": "kasai",
			"summary": "협곡으로 들어선 주인공은 탐험가 카사이와 함께 바위에 촘촘히 새겨진 흔적을 조사한다. 칼자국을 가로막은 모래 전갈 술사는 거대한 환영일 뿐이라며 공격해 온다. 주인공은 술사를 제압하고 칼자국이 한 사람이 아닌 수백 명의 결투 흔적임을 깨닫는다. 그러자 허공에서 바람을 찢는 날카로운 쇠소리가 울려 퍼진다.",
			"place": "바람의 바위 협곡",
			"random_boss_title": "모래 전갈 술사",
			"random_boss_side": "ally",
			"boss_trace": "바람을 찢는 칼날 소리"
		},
		{
			"order": 3,
			"act": "rising",
			"title": "폭풍의 소리",
			"boss": "random_boss",
			"npc": "dune",
			"summary": "마을을 찾아간 주인공은 촌장 듄에게 폭풍 속 소문에 대해 묻는다. 갑자기 나타난 풍랑의 약탈자는 진실을 찾으려 들면 사막의 분노를 맞는다고 위협하며 덤빈다. 주인공은 약탈자를 물리치고 폭풍 속의 울부짖음이 옛 전쟁에서 죽은 검객들의 칼소리임을 전해 듣는다. 발밑의 모래 알갱이에서 청백색 번갯빛이 스쳐 지나간다.",
			"place": "모래 오아시스 마을",
			"random_boss_title": "풍랑의 약탈자",
			"random_boss_side": "warn",
			"boss_trace": "번갯빛 감도는 모래 조각"
		},
		{
			"order": 4,
			"act": "rising",
			"title": "검객의 무덤",
			"boss": "random_boss",
			"npc": "khan",
			"summary": "주인공은 무덤지기 칸의 안내를 받아 사막의 옛 전장터에 도착한다. 환영의 주술사가 나타나 사막의 환영일 뿐이라며 주인공의 눈을 가리려 한다. 주인공은 주술사를 베어 넘기고 시로코가 전쟁에서 죽은 검객들의 기운이 모인 결정체라는 진실을 깨닫는다. 무덤 앞 사구에는 거대한 거인의 발자국이 선명하게 남아 있다.",
			"place": "잊혀진 검객의 무덤",
			"random_boss_title": "환영의 주술사",
			"random_boss_side": "ally",
			"boss_trace": "사구에 찍힌 거대한 발자국"
		},
		{
			"order": 5,
			"act": "climax_finale",
			"title": "마지막 결투",
			"boss": "pool_SwordStorm_Sirocco_V1",
			"npc": "amir",
			"summary": "거대한 모래 거인의 형상을 한 시로코가 번갯빛 곡도를 휘두르며 사막을 집어삼킨다. 주인공은 아미르가 찾아준 녹슨 결투검을 다시 들고 시로코의 칼날을 정면으로 막아낸다. 마침내 참된 검객의 기운을 맞이한 시로코는 만족스러운 함성과 함께 거대한 폭풍을 거둔다. 주인공은 비로소 사막에 찾아온 고요를 바라보며 칼을 거둔다.",
			"place": "황토빛 폭풍의 중심"
		}
	],
	"act_summary": {
		"climax_finale": "주인공은 녹슨 결투검으로 시로코의 공격을 막아내어 긴 결투를 끝내고 사막에 평화를 되찾는다.",
		"intro": "사막 입구에서 결투검을 받은 주인공이 칼을 꺾어 버리자 날카로운 모래폭풍이 몰아치기 시작한다.",
		"rising": "주인공은 협곡과 오아시스를 거치며 모래폭풍이 옛 전쟁에서 죽은 검객들의 기운이 뭉친 시로코임을 알아낸다."
	}
};
