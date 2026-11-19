import type { StoryArc } from '$lib/types';

export const storyarc_desert_sirocco_47: StoryArc = {
	"id": "desert_sirocco_47",
	"level": 47,
	"chapter_name": {
		"japanese": "終わらぬ決闘",
		"french": "Duel infini",
		"korean": "끝없는 결투",
		"thai": "ศึกนิรันดร์",
		"hindi": "अनंत द्वंद्व",
		"chinese": "无尽的决斗",
		"vietnamese": "Đấu vô tận",
		"spanish": "Duelo eterno",
		"english": "Endless Duel"
	},
	"theme": "desert",
	"world": {
		"rule": "결투의 깃발을 뽑아 던지면 거대한 모래폭풍이 일어나 길이 끊긴다.",
		"how": "사막의 바람 속에 옛 전쟁에서 죽은 검객들의 칼날 기운이 남아 있기 때문이다.",
		"secret": "모래폭풍은 옛 전쟁에서 승부를 끝내지 못한 검객들의 기운이다. 결투의 깃발을 꽂아 승부를 받아들이면 폭풍이 멈추고 거대 검객이 사라진다.",
		"setting": "모래폭풍이 휩쓰는 광활한 사막"
	},
	"protagonist_goal": "모래폭풍의 근원을 찾아내어 폭풍을 잠재워야 한다. 그렇지 않으면 사막 길목이 계속 베여 상단과 마을의 통행로가 영구히 차단되기 때문이다.",
	"boss_name_korean": "시로코",
	"act_tone": {
		"climax_finale": {
			"tension": 5,
			"mood": "웅장하고 비극적인 결투의 순간",
			"narrative_role": "최종 보스와의 대결과 갈등 해소"
		},
		"intro": {
			"tension": 1,
			"mood": "긴장감 감도는 사막 입구",
			"narrative_role": "사건의 시작과 위기 제시"
		},
		"rising": {
			"narrative_role": "모래폭풍의 단서 수집과 위기 심화",
			"tension": 3,
			"mood": "점점 밝혀지는 사막의 비밀"
		}
	},
	"final_boss": {
		"id": "SwordStorm_Sirocco_V1",
		"name": "Sirocco",
		"appearance_boss": "소용돌이치는 모래와 바람으로 만들어진 거대한 검객이 우뚝 서 있다. 갈색 모래 갑주를 입고 번개가 감도는 곡도를 쥐고 있다.",
		"surface_identity": "사막 전체를 휩쓸며 무엇이든 베어 버리는 거대한 모래폭풍입니다. 폭풍이 지나간 자리에는 바위마다 깊은 칼자국이 촘촘하게 새겨져 있습니다.",
		"true_identity": "옛 전쟁에서 수많은 검객이 내뿜은 칼날의 기운이 사막의 바람과 뭉쳐서 태어난 존재입니다. 폭풍 안에서는 지금도 끝나지 않은 검객들의 결투가 이어지고 있습니다.",
		"motivation": "끝내지 못한 결투를 마무리지을 강한 상대를 찾고 있습니다. 사막에 발을 들인 검객들의 기운을 느끼고 그들과 겨루기 위해 다가옵니다.",
		"motive_scene": "옛 전쟁터에서 수많은 검객이 승부를 내지 못한 채 사막의 바람 속으로 베여 소멸했다.",
		"want": "끝내지 못한 결투를 마무리지을 강한 상대와의 승부이다.",
		"twist": "휘몰아치던 모래폭풍이 갑자기 멈추고, 고요해진 한가운데에서 모래로 된 거대한 검객이 몸을 일으킵니다. 수천 명의 목소리가 하나로 겹쳐 울리며 칼끝을 겨눕니다. \"...아직 승부가 나지 않았다. 다음 상대, 앞으로!\""
	},
	"global_foreshadowing": [
		{
			"plant_room": 1,
			"id": "foreshadow_1",
			"plant_order": 1,
			"reveal_context": "바위에 파인 흔적이 검객들의 칼날 기운 때문임을 확인한다.",
			"reveal_room": 3,
			"hint": "바위에 촘촘하게 새겨진 깊은 칼자국을 발견한다."
		},
		{
			"hint": "바람을 따라 흘러내리는 짙은 모래 조각을 살펴본다.",
			"reveal_room": 5,
			"reveal_context": "모래 조각이 검객의 형상을 빚어내는 재료임을 확인한다.",
			"id": "foreshadow_2",
			"plant_order": 2,
			"plant_room": 3
		},
		{
			"reveal_context": "청백색 번개가 거대한 곡도에서 뿜어져 나오는 궤적임을 확인한다.",
			"reveal_room": 9,
			"plant_room": 5,
			"hint": "모래구름 사이에서 번쩍이는 청백색 번개의 잔영을 목격한다.",
			"id": "foreshadow_3",
			"plant_order": 3
		},
		{
			"reveal_context": "수천 명의 검객 그림자가 모여 하나의 거대한 검객 형상을 이룸을 확인한다.",
			"plant_order": 4,
			"reveal_room": 15,
			"id": "foreshadow_4",
			"plant_room": 9,
			"hint": "폭풍 속에서 희미하게 엇갈리는 수천 명의 검객 그림자를 발견한다."
		}
	],
	"npc_roles": {
		"ashur": {
			"role": "부서진 칼자국을 살피는 수호자",
			"arc": "3화에서 모래폭풍 속 칼부림 소리와 결투 깃발에 대한 조언을 전한다."
		},
		"kemet": {
			"role": "바위 궤적을 조사하는 석공",
			"arc": "2화에서 모래폭풍이 수많은 칼날의 기운이라는 사실을 알려준다."
		},
		"dune": {
			"role": "사막 입구의 길잡이",
			"arc": "1화에서 사막 길목의 사정을 알려주고 5화에서 모래 구덩이까지 동행한다."
		},
		"khan": {
			"role": "옛 전쟁 서판을 해독하는 기록관",
			"arc": "4화에서 모래폭풍이 강한 기운을 가진 검객을 찾아 이동한다는 단서를 풀어낸다."
		}
	},
	"scenarioOutline": [
		{
			"order": 1,
			"act": "intro",
			"title": "베인 바위의 언덕",
			"boss": "random_boss",
			"npc": "dune",
			"summary": "주인공은 사막 입구에서 길잡이 듄을 처음 만나 사막 내부 사정을 듣는다. 주인공은 길목에 서 있던 결투의 깃발을 뽑아 던진다. 이때 도굴꾼이 나타나 모래폭풍의 위험을 경고하며 길을 막아서자 주인공이 그를 물리친다. 폭풍이 상단 통행로를 무너뜨려 마을로 돌아갈 길마저 끊기자 주인공은 폭풍의 근원을 추적하기 시작한다.",
			"place": "모래 언덕 입구",
			"random_boss_title": "도굴꾼",
			"random_boss_side": "warn",
			"boss_trace": "칼자국 난 바위"
		},
		{
			"order": 2,
			"act": "rising",
			"title": "붉은 골짜기의 흔적",
			"boss": "random_boss",
			"npc": "kemet",
			"summary": "통행로를 다시 열기 위해 주인공은 붉은 바위 골짜기로 이동한다. 석공 케메트가 바위에 새겨진 모래폭풍의 궤적을 조사하는 모습을 보고 주인공이 다가간다. 약탈자가 나타나 모래폭풍은 사막의 신이 내린 벌이라며 거짓을 퍼뜨리고 공격해 오자 주인공이 그를 제압한다. 주인공은 케메트로부터 모래폭풍이 수많은 칼날의 기운이라는 사실을 듣는다.",
			"place": "붉은 바위 골짜기",
			"random_boss_title": "약탈자",
			"random_boss_side": "ally",
			"boss_trace": "모래 조각"
		},
		{
			"order": 3,
			"act": "rising",
			"title": "오아시스의 환영",
			"boss": "random_boss",
			"npc": "ashur",
			"summary": "끊어진 통행로를 우회하기 위해 주인공은 메마른 오아시스로 걸음을 옮긴다. 수호자 아슈르가 부서진 칼자국을 살펴보는 광경을 마주친 주인공은 그에게 다가간다. 상인이 오아시스 깊은 곳은 위험하다며 가로막자 주인공이 그를 물리친다. 아슈르로부터 폭풍 속에서 칼부림 소리가 들린다는 말과 함께 결투의 깃발을 모래에 꽂아야 결투가 성립한다는 조언을 얻는다.",
			"place": "메마른 오아시스",
			"random_boss_title": "상인",
			"random_boss_side": "warn",
			"boss_trace": "청백색 번개 잔영"
		},
		{
			"order": 4,
			"act": "rising",
			"title": "신전 유적의 목소리",
			"boss": "random_boss",
			"npc": "khan",
			"summary": "사막 전체로 재앙이 퍼지는 것을 막기 위해 주인공은 바람의 신전 유적으로 향한다. 기록관 칸이 옛 전쟁의 서판을 해독하고 있자 주인공이 곁으로 다가선다. 용병이 나타나 엉뚱한 방향으로 길을 유인하려 공격하자 주인공은 용병을 물리친다. 칸의 해독을 통해 모래폭풍이 강한 기운을 내뿜는 검객을 찾아 다가간다는 사실을 알아낸다.",
			"place": "바람의 신전 유적",
			"random_boss_title": "용병",
			"random_boss_side": "ally",
			"boss_trace": "엇갈린 검객 그림자"
		},
		{
			"order": 5,
			"act": "climax_finale",
			"title": "끝나지 않은 결투",
			"boss": "pool_412",
			"npc": "dune",
			"summary": "주인공은 검기의 근원인 황토빛 모래 구덩이에 도달하고 뒤따라온 듄이 곁에 선다. 휘몰아치던 모래폭풍이 멈추더니 모래로 이루어진 거대 검객 시로코가 나타나 칼끝을 겨눈다. 치열한 전투 도중 주인공은 가지고 있던 결투의 깃발을 모래에 꽂아 시로코의 승부를 정식으로 받아들인다. 결투의 맹세가 이루어지자 시로코는 만족한 듯 모래가 되어 조용히 흩어진다.",
			"place": "황토빛 모래 구덩이"
		}
	],
	"act_summary": {
		"intro": "사막 입구에 도달한 주인공은 결투의 깃발을 뽑아 던졌다가 모래폭풍이 일어나 통행로가 막히자 폭풍의 근원을 추적하기 시작한다.",
		"rising": "주인공은 여러 장소를 거치며 모래폭풍이 강한 검객을 찾아 움직이는 수많은 칼날 기운이라는 사실을 알아낸다.",
		"climax_finale": "황토빛 모래 구덩이에 도달한 주인공은 거대 검객 시로코와 맞서 결투의 깃발을 꽂아 승부를 받아들임으로써 모래폭풍을 잠재운다."
	}
};
