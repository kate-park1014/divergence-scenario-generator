import type { StoryArc } from '$lib/types';

export const storyarc_hell_amnion_38: StoryArc = {
	"id": "hell_amnion_38",
	"level": 38,
	"chapter_name": {
		"hindi": "नरक का आवरण",
		"vietnamese": "Màng Ổ Quỷ",
		"chinese": "地狱羊膜",
		"english": "Hell Amnion",
		"spanish": "Amnios Infer",
		"thai": "ถุงน้ำนรก",
		"japanese": "地獄の羊膜",
		"korean": "지옥의 양막",
		"french": "Amnios Enfer"
	},
	"theme": "hell",
	"world": {
		"rule": "시한 카운트다운 잔여 시간이 0이 되기 전에 낭종 표면을 칼날로 가르면 지옥 전체에 기형 장기 폭포가 쏟아져 온 세상을 침식한다.",
		"setting": "지옥 용암 바다 중앙에 위치한 주술 신전",
		"how": "은빛 메스로 낭종 외피를 베면 내부 압축된 생체 핏물과 기형 장기가 폭발하여 주변 모든 생명체를 숙주로 침식한다.",
		"secret": "성녀의 고치로 위장된 낭종은 금기된 주술 생체 쓰레기통이며 은빛 메스로 유황관을 끊어야 용암으로 낭종을 소멸시킬 수 있다."
	},
	"protagonist_goal": "지옥 용암 신전의 시한 폭발을 막고 폭사 위기에서 탈출하기",
	"boss_name_korean": "암니온",
	"act_tone": {
		"intro": {
			"narrative_role": "시한 폭발의 시작과 애쉬와의 협력",
			"tension": 1,
			"mood": "긴장감 넘치는 광포함"
		},
		"rising": {
			"mood": "급박하고 소름 끼치는 추격",
			"narrative_role": "카운트다운 압박과 차례로 드러나는 낭종의 기괴함",
			"tension": 3
		},
		"climax_finale": {
			"narrative_role": "흑막 애쉬의 배신과 암니온의 기형 생체 폭발 저지",
			"tension": 5,
			"mood": "피와 용암이 치솟는 파멸적 액션"
		}
	},
	"final_boss": {
		"name": "Amnion",
		"motivation": "지옥의 열기로 낭종 내부 생체 핏물이 팽창하여 폭발 직전인 상태에서, 탐험대의 날카로운 무기로 껍질을 터뜨리게 유도한 뒤 쏟아져 나온 기형 장기들로 탐험대를 새 숙주로 삼으려 한다.",
		"id": "SpiritCyst_Amnion_V1",
		"true_identity": "Mystics 세계의 음습한 주술사들이 금기시된 주술 부산물과 기형 태아, 낙태된 영혼들을 지옥으로 유기하기 위해 만든 주술적 생체 쓰레기통(양막 낭종)이다.",
		"appearance_boss": "쩍 벌어진 껍질 내부에서 이빨 박힌 탯줄과 젖통 모양 눈알 덩어리가 폭포처럼 쏟아져 나오는 생체 낭종 괴물",
		"want": "탐험대의 칼날로 낭종 껍질을 터뜨려 내장과 장기를 쏟아내고 탐험대를 새 숙주로 삼는 것",
		"twist": "탐험대의 칼날이 오팔빛 껍질에 닿는 순간 성녀의 기도가 아기들의 떼웃음으로 뒤집히며, 핑크빛 핏물과 함께 탯줄과 눈알 덩어리가 폭포처럼 쏟아져 나와 탐험대의 몸을 감싸 쥐기 시작한다."
	},
	"global_foreshadowing": [
		{
			"reveal_act": "climax_finale",
			"reveal_context": "애쉬가 주술사 교단의 흑막으로서 낭종을 지옥에 유기하고 주인공을 속였음을 드러낸다.",
			"plant_room": 1,
			"hint": "애쉬의 소매 안쪽에 주술사 교단의 은빛 뱀 문신이 찍혀 있다.",
			"reveal_room": 15,
			"id": "gf_1",
			"plant_act": "intro"
		},
		{
			"id": "gf_2",
			"reveal_context": "고치를 베지 않고 유황 파이프를 끊으면 용암이 고치를 삼킨다는 사실을 깨닫는다.",
			"reveal_room": 9,
			"hint": "제어실 벽면에 붙은 지옥 도면판에 고치 바로 아래 유황 파이프가 흐르고 있다.",
			"plant_room": 3,
			"reveal_act": "climax_finale",
			"plant_act": "rising"
		},
		{
			"reveal_context": "카운트다운은 신전 폭발이 아니라 낭종 내부의 생체 핏물 팽창 수치였음이 밝혀진다.",
			"reveal_room": 5,
			"reveal_act": "climax_finale",
			"plant_act": "rising",
			"plant_room": 5,
			"hint": "신전 바닥 전광판 숫자가 감소할수록 낭종 표면에서 발광 포자가 폭증한다.",
			"id": "gf_3"
		},
		{
			"plant_act": "rising",
			"plant_room": 9,
			"reveal_act": "climax_finale",
			"reveal_room": 3,
			"reveal_context": "구원받을 성녀가 아니라 교단이 버린 기형 생체 쓰레기 낭종이었음이 밝혀진다.",
			"id": "gf_4",
			"hint": "화염이 가지고 있던 문서에 '오팔 고치는 주술 생체 쓰레기통'이라 적혀 있다."
		}
	],
	"npc_roles": {
		"cinder": {
			"role": "제어실 수호자",
			"arc": "2화에서 열기 제어실 밸브를 지키다 제압당하는 인물. 주인공의 오판을 저지하려다 무너지는 역할"
		},
		"mara": {
			"role": "진실 경고인",
			"arc": "3화에서 유황 제단 봉인이 풀리면 생체 쓰레기가 유출된다고 경고하는 인물. 주인공의 맹목적인 돌진을 막아서는 역할"
		},
		"pyre": {
			"role": "비밀 수호병",
			"arc": "4화에서 은빛 메스를 빼앗으려 투쟁하는 인물. 교단의 비밀 문서가 담긴 품을 지키다 패배하는 역할"
		},
		"ash": {
			"role": "흑막 조력자",
			"arc": "1화에서 은빛 메스를 건네며 길을 안내하는 인물. 5화에서 신전 폭파 카운트다운을 빌미로 낭종을 찢도록 유도한 흑막으로 밝혀지며 연결되는 역할"
		}
	},
	"scenarioOutline": [
		{
			"place": "지옥 입구 용암교",
			"npc": "ash",
			"boss": "random_boss",
			"act": "intro",
			"random_boss_side": "warn",
			"random_boss_title": "용암 파수꾼",
			"order": 1,
			"summary": "주인공이 용암 입구에서 파수꾼을 처치하자 10분 시한 카운트다운 전광판이 작동한다. 조력자 애쉬가 은빛 메스를 건네며 신전 중앙 고치를 베어야 폭발이 멈춘다고 촉구하고, 오팔빛 고치 음성이 고통스러운 비명을 지른다.",
			"title": "신전의 시한 장치",
			"boss_trace": "오팔빛 고치 음성"
		},
		{
			"npc": "cinder",
			"place": "제어 밸브 구역",
			"act": "rising",
			"random_boss_side": "ally",
			"boss": "random_boss",
			"random_boss_title": "밸브 경비병",
			"summary": "남은 시간 7분. 신더가 제어실 제어 밸브를 파괴하려는 주인공을 저지하려 하지만 주인공이 은빛 메스로 밸브 전선을 잘라 장치를 멈춘다. 고치 피물결 환영이 벽면에 핫핑크 빛 핏자국으로 반짝인다.",
			"order": 2,
			"boss_trace": "고치 피물결 환영",
			"title": "열기 제어실 파괴"
		},
		{
			"act": "rising",
			"npc": "mara",
			"place": "유황 억제 제단",
			"random_boss_title": "봉인 감시자",
			"random_boss_side": "warn",
			"summary": "남은 시간 4분. 마라가 신전 봉인이 풀어지면 생체 쓰레기가 폭발한다고 경고한다. 주인공은 은빛 메스로 억제 제단 보석을 조각내어 유황 봉인을 해제한다. 단내 뿜는 포자가 환기구에서 쏟아진다.",
			"title": "유황 압력 억제",
			"boss_trace": "단내 뿜는 포자",
			"order": 3,
			"boss": "random_boss"
		},
		{
			"random_boss_side": "ally",
			"boss_trace": "낭종의 손가락 윤곽",
			"place": "중앙 고치 봉인실",
			"boss": "random_boss",
			"npc": "pyre",
			"title": "중앙 봉인실 침투",
			"act": "rising",
			"order": 4,
			"random_boss_title": "봉인실 경비대장",
			"summary": "남은 시간 1분. 화염이 은빛 메스를 빼앗으려 덤벼들자 주인공이 은빛 메스로 화염의 투구를 쪼개어 제압한다. 고치 표면에 수십 개 아기 손가락 윤곽이 비친다."
		},
		{
			"npc": "ash",
			"act": "climax_finale",
			"place": "용암 중앙 제단",
			"summary": "남은 시간 0초. 애쉬가 본색을 드러내며 낭종을 베라고 강요하지만, 주인공은 은빛 메스로 고치가 아닌 바닥의 유황관을 끊어 용암을 흘려보낸다. 폭발한 암니온과 애쉬가 용암에 삼켜지고 카운트다운이 멈추며 신전이 정화된다.",
			"title": "양막 낭종의 폭발",
			"boss": "pool_SpiritCyst_Amnion_V1",
			"order": 5
		}
	],
	"act_summary": {
		"intro": "지옥 용암 신전 입구에서 주인공은 카운트다운을 접하고 동료 애쉬에게 은빛 메스를 전달받는다.",
		"climax_finale": "남은 시간 0초 순간, 주인공은 애쉬의 배신을 파악하고 은빛 메스로 유황관을 끊어 용암으로 암니온을 삼켜 버린다.",
		"rising": "주인공은 7분, 4분, 1분의 시한 압박 속에서 신더, 마라, 화염의 저지를 뚫고 제어실과 제단을 차례로 파괴한다."
	}
};
