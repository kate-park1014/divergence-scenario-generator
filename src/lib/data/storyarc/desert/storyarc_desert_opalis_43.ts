import type { StoryArc } from '$lib/types';

export const storyarc_desert_opalis_43: StoryArc = {
	"id": "desert_opalis_43",
	"level": 43,
	"chapter_name": {
		"english": "Sand Mirage",
		"french": "Mirage",
		"spanish": "Espejismo",
		"chinese": "沙漠蜃景",
		"thai": "ภาพลวงตา",
		"korean": "사막의 신기루",
		"japanese": "砂漠の蜃気楼",
		"hindi": "मरुमरीचिका",
		"vietnamese": "Ảo ảnh cát"
	},
	"theme": "desert",
	"world": {
		"rule": "생기 구슬에 생기를 채워 넣으면 그 구슬이 사람의 생기를 흡수한다.",
		"secret": "오팔리스는 죽은 주인을 살리려고 생기를 빼앗아 온 태엽 인형이다. 생기 구슬을 깨뜨려야 빼앗긴 생기가 사막으로 돌아간다.",
		"setting": "메마른 사막에 있는 버려진 유적 신전",
		"how": "오팔리스가 주인을 살리려 나그네의 생기를 끌어모으도록 만들어졌기 때문이다."
	},
	"protagonist_goal": "생기 구슬을 깨뜨려 사막에 빼앗긴 생기를 되찾아야 한다. 의식을 잃고 모래로 변해가는 동료 아슈르가 죽는 것을 막아야 하기 때문이다.",
	"boss_name_korean": "오팔리스",
	"act_tone": {
		"intro": {
			"narrative_role": "동료의 위기와 생기 구슬의 이상 반응을 보여주는 단계",
			"mood": "위태롭고 신비로운 분위기",
			"tension": 1
		},
		"rising": {
			"mood": "긴박하고 안타까운 분위기",
			"tension": 3,
			"narrative_role": "유적을 탐색하며 오팔리스의 진실을 알아가는 단계"
		},
		"climax_finale": {
			"mood": "비장하고 슬픈 분위기",
			"tension": 5,
			"narrative_role": "폭주하는 오팔리스를 제압하고 생기를 돌려주는 단계"
		}
	},
	"final_boss": {
		"id": "GlassMirage_Opalis_V1",
		"name": "Opalis",
		"appearance_boss": "겉껍데기가 깨진 여인 모양 인형의 몸 안에서 녹슨 톱니바퀴가 드러나 있다. 등 뒤에는 금빛 날개가 천천히 움직인다.",
		"true_identity": "뛰어난 대장장이가 아픈 딸을 구하려고 만든 모래시계 태엽 인형입니다. 주인이 결투 끝에 목숨을 잃은 것도 모른 채, 백 년 동안 사막에 홀로 남겨져 부서져 가고 있습니다.",
		"motivation": "사막을 지나는 나그네들의 생기를 모아 주인과 그의 딸을 다시 살려내려 합니다. 나그네들의 생기를 모으면 딸이 다시 눈을 뜰 것이라는 주인의 말을 믿고 있기 때문입니다.",
		"motive_scene": "옛 대장장이가 병든 딸을 살릴 생기를 모아 오라고 태엽 인형 오팔리스에게 명령하고 결투장으로 떠났다.",
		"want": "사람들의 생기를 모아서 죽은 주인과 주인 딸을 살려내는 것이다.",
		"twist": "아름다운 겉껍데기가 산산조각 나면서 오아시스 신기루가 걷힙니다. 녹슨 톱니바퀴를 억지로 돌리며 모래를 토해내는 작은 인형이 정체를 드러냅니다. \"조금만 더 모으면 주인님과 아가씨가 눈을 뜨실 텐데, 왜 절 거절하시나요?\""
	},
	"global_foreshadowing": [
		{
			"plant_room": 1,
			"hint": "제단 구석에서 영롱한 오팔 조각을 발견한다.",
			"plant_order": 1,
			"reveal_context": "오팔리스의 깨진 겉껍데기 파편으로 밝혀진다.",
			"reveal_room": 1,
			"id": "hint_opal_fragment"
		},
		{
			"reveal_context": "오팔리스가 주인의 명령대로 움직이는 인형임이 입증된다.",
			"id": "hint_clockwork_identity",
			"hint": "오팔리스가 사람이 아니라 대장장이가 만든 태엽 인형이라는 사실을 듣는다.",
			"plant_order": 2,
			"plant_room": 3,
			"reveal_room": 3
		},
		{
			"hint": "상자 안에서 에메랄드빛 모래가 담긴 병을 확인한다.",
			"plant_order": 3,
			"plant_room": 5,
			"id": "hint_emerald_sand_bottle",
			"reveal_room": 5,
			"reveal_context": "오팔리스의 몸을 구성하는 모래임이 드러난다."
		},
		{
			"reveal_context": "오팔리스의 눈동자를 덮고 있던 부품임이 확인된다.",
			"plant_order": 4,
			"id": "hint_cracked_glass_piece",
			"reveal_room": 9,
			"hint": "바닥에 떨어진 금이 간 유리 조각을 집어 든다.",
			"plant_room": 9
		}
	],
	"npc_roles": {
		"dune": {
			"role": "사막을 조사하는 탐험가",
			"arc": "2화에서 오팔리스가 태엽 인형이라는 사실을 주인공에게 전한다."
		},
		"ferro": {
			"role": "대장장이의 제자",
			"arc": "3화에서 오팔리스의 주인이 이미 죽었다는 사실을 알려준다."
		},
		"kasai": {
			"role": "사원을 연구하는 학자",
			"arc": "4화에서 오팔리스가 생기를 빼앗는 목적을 주인공에게 알려준다."
		},
		"ashur": {
			"role": "사막을 안내하는 길잡이",
			"arc": "1화에서 생기를 잃고 쓰러지며 5화에서 주인공 덕분에 눈을 뜬다."
		}
	},
	"scenarioOutline": [
		{
			"order": 1,
			"act": "intro",
			"title": "성녀의 제단",
			"boss": "random_boss",
			"npc": "ashur",
			"summary": "주인공은 사막 입구에서 지쳐 넘어진 길잡이 아슈르를 만난다. 주인공은 아슈르를 살리기 위해 성녀가 남긴 제단 위의 생기 구슬에 생기를 채워 넣는다. 그 순간 구슬이 빛나며 아슈르의 남은 생기를 흡수하고, 사막 도굴꾼이 제단에 손대지 말라며 주인공을 공격한다. 도굴꾼을 물리친 주인공은 제단 구석에서 영롱한 칠색 오팔 조각을 발견한다.",
			"place": "오아시스 제단",
			"random_boss_title": "사막 도굴꾼",
			"random_boss_side": "warn",
			"boss_trace": "칠색 오팔 조각"
		},
		{
			"order": 2,
			"act": "rising",
			"title": "바람의 언덕",
			"boss": "random_boss",
			"npc": "dune",
			"summary": "쓰러진 아슈르의 생기를 되찾기 위해 주인공은 태엽 소리가 들리는 바람 모래 언덕으로 향한다. 그곳에서 사막을 조사하던 듄을 만난 주인공은 성녀 오팔리스가 사람이 아닌 태엽 인형이라는 뜻밖의 사실을 들어 알게 된다. 성녀를 두둔하던 모래 용병이 진실을 입밖에 내지 못하게 막아서며 칼을 휘두르고, 싸움 끝에 풀숲에서 금빛 쇠 깃털 하나를 줍는다.",
			"place": "바람 모래 언덕",
			"random_boss_title": "모래 용병",
			"random_boss_side": "ally",
			"boss_trace": "금빛 쇠 깃털"
		},
		{
			"order": 3,
			"act": "rising",
			"title": "버려진 대장간",
			"boss": "random_boss",
			"npc": "ferro",
			"summary": "아슈르의 몸이 모래로 바뀌기 전에 원인을 찾고자 주인공은 오래된 대장간 유적으로 들어선다. 주인공은 대장장이의 제자 페로를 만나 오팔리스의 주인이 백 년 전 결투에서 이미 죽었다는 사실을 듣는다. 유적을 차지하려던 오아시스 상인이 함부로 물건을 훔치지 말라며 덤벼들자 주인공은 상인을 꺾고 생기 구슬을 깨뜨려 갇힌 생기를 풀어주는 방법을 배운다. 페로가 건넨 상자 안에서 투명한 에메랄드빛 모래가 담긴 병을 확인한다.",
			"place": "대장간 유적",
			"random_boss_title": "오아시스 상인",
			"random_boss_side": "warn",
			"boss_trace": "에메랄드빛 모래 병"
		},
		{
			"order": 4,
			"act": "rising",
			"title": "붉은 사원",
			"boss": "random_boss",
			"npc": "kasai",
			"summary": "옅어지는 아슈르의 숨소리에 마음이 급해진 주인공은 신전으로 통하는 고대 붉은 사원으로 달려간다. 사원 입구에서 학자 카사이를 만난 주인공은 오팔리스가 주인을 살리려 나그네의 생기를 끌어모으고 있다는 진실을 알게 된다. 오팔리스의 명을 받은 유적 파수꾼이 생기 수집을 방해하지 말라며 길을 막아서자 싸워 물리친다. 바닥에 떨어진 금이 간 유리 조각을 집어 든 주인공은 신전 안으로 발걸음을 옮긴다.",
			"place": "고대 붉은 사원",
			"random_boss_title": "유적 파수꾼",
			"random_boss_side": "ally",
			"boss_trace": "금이 간 유리 조각"
		},
		{
			"order": 5,
			"act": "climax_finale",
			"title": "마지막 신기루",
			"boss": "pool_GlassMirage_Opalis_V1",
			"npc": "ashur",
			"summary": "주인공은 의식을 잃은 아슈르를 업고 오팔리스의 오아시스 중앙 신전에 도달한다. 겉껍데기가 깨져 녹슨 톱니바퀴를 드러낸 오팔리스는 주인을 살려야 한다며 울부짖고 주인공에게 덤벼든다. 치열한 전투 끝에 오팔리스를 제압한 주인공은 핵심 장치인 생기 구슬을 깨뜨려 생기를 되돌려준다. 구슬이 깨지며 갇혀 있던 생기가 사막으로 퍼져나가고 아슈르가 무사히 눈을 뜬다.",
			"place": "오팔리스의 오아시스"
		}
	],
	"act_summary": {
		"rising": "주인공은 동료들의 도움으로 오팔리스가 태엽 인형이라는 사실을 안다. 오팔리스가 죽은 주인을 살리려고 생기를 빼앗는다는 진실도 깨닫는다.",
		"climax_finale": "주인공은 신전에서 오팔리스를 제압하고 생기 구슬을 깨뜨린다. 빼앗긴 생기가 사막으로 퍼져나가 아슈르가 눈을 뜬다.",
		"intro": "주인공은 사막에서 쓰러진 아슈르를 구하려다 생기 구슬이 생기를 흡수하는 모습을 본다. 도굴꾼을 물리친 뒤 제단에서 오팔 조각을 발견한다."
	}
};
