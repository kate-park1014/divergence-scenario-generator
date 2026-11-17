import type { StoryArc } from '$lib/types';

export const storyarc_desert_opalis_43: StoryArc = {
	"id": "desert_opalis_43",
	"level": 43,
	"chapter_name": {
		"korean": "멈춰 선 모래시계",
		"english": "Stopped Sand",
		"japanese": "止まった砂時計",
		"chinese": "静止的沙漏",
		"french": "Temps Figé",
		"spanish": "Reloj Parado",
		"vietnamese": "Đồng Hồ Cát",
		"thai": "นาฬิกาทราย",
		"hindi": "रुकती रेत"
	},
	"theme": "desert",
	"world": {
		"rule": "생기 구슬에 자신의 생기를 담아주면 생기를 빼앗기게 된다.",
		"how": "오팔리스가 죽은 주인을 살리려고 나그네의 생기를 모으도록 만들어졌기 때문이다.",
		"setting": "메마른 사막에 있는 오팔리스의 제단",
		"secret": "오팔리스는 이미 세상을 떠난 주인과 딸을 살리려고 백 년 동안 나그네의 생기를 모아온 태엽 인형이었다."
	},
	"protagonist_goal": "사막의 성녀 오팔리스의 진실을 밝히고 빼앗긴 생기를 되찾는 것",
	"boss_name_korean": "오팔리스",
	"act_tone": {
		"climax_finale": {
			"tension": 5,
			"mood": "슬프고 비장한 분위기",
			"narrative_role": "오팔리스와 결투를 벌이고 구슬을 부숴 생기를 되찾는 단계"
		},
		"rising": {
			"narrative_role": "오팔리스의 정체와 죽은 주인의 비극을 파헤치는 단계",
			"tension": 3,
			"mood": "의구심과 진실이 밝혀지는 분위기"
		},
		"intro": {
			"tension": 1,
			"narrative_role": "사막의 성녀 소문을 듣고 생기 구슬을 만나는 단계",
			"mood": "신비롭고 호기심을 부르는 분위기"
		}
	},
	"final_boss": {
		"id": "GlassMirage_Opalis_V1",
		"name": "Opalis",
		"appearance_boss": "오팔 보석으로 조각된 여인 형상의 인형으로, 등 뒤에는 금빛 태엽 날개가 달려 있다. 아름다운 겉껍데기가 깨져 녹슨 톱니바퀴가 드러나 있다.",
		"true_identity": "뛰어난 대장장이가 아픈 딸을 구하려고 만든 모래시계 태엽 인형입니다. 주인이 결투 끝에 목숨을 잃은 것도 모른 채, 백 년 동안 사막에 홀로 남겨져 부서져 가고 있습니다.",
		"motivation": "사막을 지나는 나그네들의 생기를 모아 주인과 그의 딸을 다시 살려내려 합니다. 나그네들의 생기를 모으면 딸이 다시 눈을 뜰 것이라는 주인의 말을 믿고 있기 때문입니다.",
		"want": "나그네들의 생기를 모아 죽은 주인과 그의 딸을 다시 살려내는 것",
		"twist": "아름다운 겉껍데기가 산산조각 나면서 오아시스 신기루가 걷힙니다. 녹슨 톱니바퀴를 억지로 돌리며 모래를 토해내는 작은 인형이 정체를 드러냅니다. \"조금만 더 모으면 주인님과 아가씨가 눈을 뜨실 텐데, 왜 절 거절하시나요?\""
	},
	"global_foreshadowing": [
		{
			"id": "foreshadow_1",
			"hint": "모래 밑에서 작게 찌그러진 유리 조각 하나가 솟아오른다.",
			"plant_order": 1,
			"plant_room": 1,
			"reveal_room": 15,
			"reveal_context": "오팔리스의 아름다운 유리 껍데기가 부서져 가고 있음을 보여준다."
		},
		{
			"id": "foreshadow_2",
			"hint": "오팔리스가 나그네들의 생기를 모아 어딘가에 바치고 있다.",
			"plant_order": 2,
			"plant_room": 3,
			"reveal_room": 9,
			"reveal_context": "오팔리스가 죽은 주인과 딸을 살리기 위해 생기를 모아왔음을 알려준다."
		},
		{
			"id": "foreshadow_3",
			"hint": "성녀 오팔리스가 살아있는 사람이 아니라 어느 대장장이가 만든 태엽 인형이다.",
			"plant_order": 3,
			"plant_room": 5,
			"reveal_room": 5,
			"reveal_context": "오팔리스가 주인의 명령대로 움직이는 태엽 인형임을 보여준다."
		},
		{
			"id": "foreshadow_4",
			"hint": "오팔리스가 구하려는 주인과 아픈 딸이 백 년 전에 이미 세상을 떠났다.",
			"plant_order": 4,
			"plant_room": 9,
			"reveal_room": 3,
			"reveal_context": "오팔리스의 목표가 이미 이루어질 수 없는 헛된 집착임을 깨닫게 한다."
		}
	],
	"npc_roles": {
		"dune": {
			"role": "신전의 탐험가",
			"arc": "3화에서 지하 신전의 고대 기록을 찾아 오팔리스가 태엽 인형이라는 사실을 알려준다."
		},
		"jasper": {
			"role": "환영의 오아시스 학자",
			"arc": "4화에서 대장장이 가문의 비극과 주인 일가의 죽음을 밝혀준다."
		},
		"ferro": {
			"role": "협곡의 대장장이",
			"arc": "2화에서 유리 조각을 확인하고 오팔리스가 생기를 모으고 있다는 경고를 전한다."
		},
		"amir": {
			"role": "사막의 길잡이 나그네",
			"arc": "1화에서 생기 구슬을 전해주고 5화에서 주인공과 함께 제단으로 향한다."
		}
	},
	"scenarioOutline": [
		{
			"order": 1,
			"act": "intro",
			"title": "사막의 성녀 소문",
			"boss": "random_boss",
			"npc": "amir",
			"summary": "주인공은 사막 입구에서 나그네 아미르를 만나 지친 몸을 쉴 오아시스 성녀에 대한 소문을 듣는다. 아미르는 길가에 떨어진 생기 구슬을 건네며 성녀의 오아시스에 바치면 축복을 받는다고 알려준다. 도적두목이 나타나 그 구슬을 바치면 위험해진다고 가로막지만 주인공은 그를 제압하고 생기 구슬에 자신의 생기를 담아준다. 구슬이 빛나자 모래 밑에서 작게 찌그러진 유리 조각 하나가 솟아오른다.",
			"place": "바람의 사구",
			"random_boss_title": "도적두목",
			"random_boss_side": "warn",
			"boss_trace": "모래가 새는 유리 조각"
		},
		{
			"order": 2,
			"act": "rising",
			"title": "협곡의 경고",
			"boss": "random_boss",
			"npc": "ferro",
			"summary": "주인공은 대장장이 페로를 찾아가 지난번 찾은 유리 조각의 재질을 물어본다. 페로는 오아시스의 성녀 오팔리스가 나그네들의 생기를 모아 어딘가에 바치고 있다고 경고한다. 모래술사가 나타나 오팔리스는 순수한 마음으로 사람들을 치유할 뿐이라며 주인공을 공격하지만 전투 끝에 패배한다. 싸움이 끝난 자리에 태엽 모양의 금빛 깃털 하나가 떨어져 있다.",
			"place": "메마른 바위 협곡",
			"random_boss_title": "모래술사",
			"random_boss_side": "ally",
			"boss_trace": "금빛 태엽 깃털"
		},
		{
			"order": 3,
			"act": "rising",
			"title": "신전의 고대 기록",
			"boss": "random_boss",
			"npc": "dune",
			"summary": "주인공은 탐험가 듄의 안내를 받아 사막 깊은 곳의 지하 신전에 들어선다. 듄은 고대 기록을 보여주며 성녀 오팔리스가 살아있는 사람이 아니라 어느 대장장이가 만든 태엽 인형이라고 전한다. 사막검객이 신전을 더 수색하는 것은 신의 성역을 더럽히는 짓이라며 칼을 뽑아 들고 겨룬다. 검객을 물리친 바닥에는 푸르게 빛나는 사파이어 모래가 길게 이어져 있다.",
			"place": "잊힌 지하 신전",
			"random_boss_title": "사막검객",
			"random_boss_side": "warn",
			"boss_trace": "사파이어 빛 모래"
		},
		{
			"order": 4,
			"act": "rising",
			"title": "백 년 전의 진실",
			"boss": "random_boss",
			"npc": "jasper",
			"summary": "주인공은 학자 재스퍼를 만나 사막을 만든 대장장이 가문의 오래된 비극을 듣는다. 재스퍼는 오팔리스가 구하려는 주인과 아픈 딸이 백 년 전에 결투와 병으로 이미 세상을 떠났다고 밝힌다. 환영술사가 나타나 아름다운 오아시스의 환상을 보여주며 진실을 덮으려 하지만 주인공은 전투에서 이겨 환상을 깬다. 파괴된 환상 틈에서 녹이 슨 톱니 조각이 굴러 나온다.",
			"place": "환영의 오아시스",
			"random_boss_title": "환영술사",
			"random_boss_side": "ally",
			"boss_trace": "태엽 톱니 조각"
		},
		{
			"order": 5,
			"act": "climax_finale",
			"title": "멈춰 선 모래시계",
			"boss": "pool_GlassMirage_Opalis_V1",
			"npc": "amir",
			"summary": "주인공은 처음 만났던 아미르와 함께 사막 중앙의 오팔리스 제단에 도달한다. 오팔리스는 껍데기가 깨져 녹슨 톱니바퀴를 드러낸 채 아미르와 주인공의 생기를 훔치려 결투를 신청한다. 싸움 끝에 오팔리스를 제압한 주인공은 생기 구슬을 부숴 담긴 생기를 모두 풀어준다. 헛된 집착에서 풀려난 오팔리스는 슬픈 눈물을 흘리며 태엽을 멈추고 흙으로 돌아간다.",
			"place": "오팔리스의 제단"
		}
	],
	"act_summary": {
		"intro": "주인공은 나그네 아미르에게 성녀 소문을 듣고 생기 구슬에 생기를 담으며 모래 밑에서 유리 조각을 발견한다.",
		"climax_finale": "오팔리스의 제단에서 껍데기가 깨진 오팔리스를 제압하고 생기 구슬을 부숴 갇힌 생기를 풀어준다.",
		"rising": "주인공은 페로와 듄, 재스퍼를 만나 오팔리스가 죽은 주인과 딸을 살리려고 생기를 모으는 태엽 인형이라는 사실을 알아낸다."
	}
};
