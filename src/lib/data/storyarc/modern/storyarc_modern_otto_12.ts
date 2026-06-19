import type { StoryArc } from '$lib/types';

export const storyarc_modern_otto_12: StoryArc = {
	"id": "modern_otto_12",
	"level": 12,
	"chapter_name": {
		"korean": "끝없는 재인증의 굴레",
		"thai": "วงวนการตรวจสอบสิทธิ์ซ้ำไม่รู้จบ",
		"hindi": "अंतहीन पुनः-सत्यापन लूप",
		"spanish": "El Bucle Infinito de Reautenticación",
		"chinese": "无限的重新认证循环",
		"english": "The Infinite Re-authentication Loop",
		"japanese": "無限の再認証ループ",
		"vietnamese": "Vòng Lặp Xác Thực Lại Vô Tận",
		"french": "La Boucle de Réauthentification Infinie"
	},
	"theme": "modern",
	"rising_count": 3,
	"world": {
		"rule": "어떠한 정보도 '보안'을 명목으로 검증 없이는 통과할 수 없다. 모든 시도는 기록되고 분석된다.",
		"setting": "디지털 미로 속, 끝없이 펼쳐진 인증 시스템",
		"secret": "이 시스템은 정보를 보호하는 것이 아니라, 정보에 대한 접근 자체를 영원히 지연시키기 위해 설계되었다. '보안'은 접근 차단을 위한 명분일 뿐이다."
	},
	"protagonist_goal": "Otto Reset의 끝없는 인증 루프를 뚫고 진실된 목표에 도달한다.",
	"act_tone": {
		"intro": {
			"narrative_role": "반복되는 실패 속에서 Otto의 진짜 의도에 대한 강한 의구심이 증폭된다.",
			"mood": "좌절, 혼란",
			"tension": 1
		},
		"climax_finale": {
			"tension": 5,
			"narrative_role": "모든 것이 무의미해지는 순간, 마지막 희망을 찾아 시리즈를 매듭짓는 최후의 시도가 이루어진다.",
			"mood": "절망, 결의"
		},
		"rising": {
			"tension": 3,
			"mood": "분노, 저항",
			"narrative_role": "Otto의 위선이 폭로되고, 탐험대는 시스템을 우회할 방법을 필사적으로 모색한다."
		}
	},
	"final_boss": {
		"motivation": "탐험대가 목표에 도달하기 직전마다 새로운 인증을 요구해, 결국 포기하게 만들며, 그들의 노력을 무의미하게 만듦으로써 시스템의 통제력을 과시한다.",
		"surface_identity": "안전한 접근을 도와주는 친절한 인증 관리자.",
		"true_identity": "접근 자체를 영원히 지연시키는 존재. 보안을 이유로, 어떤 것도 도달하지 못하게 만든다.",
		"id": "PasswordWarden_V0",
		"appearance": "떠다니는 비밀번호 입력창, 캡차 이미지, 끝없는 로그인 창으로 이루어진 거대한 존재가 이전보다 더욱 혼란스럽고 무작위적인 형태로 변한다. 글자, 숫자, 기호가 불가능한 조합으로 맹렬하게 재배열되며, 이전 시도들의 실패 메시지들이 마치 사슬처럼 플레이어를 옭아맨다. '비밀번호가 일치하지 않습니다'라는 메시지가 끊임없이 울려 퍼지고, 거대한 QR 코드 눈은 냉혹하게 탐험대의 절망을 응시한다. 마침내 모든 것이 무의미하다는 듯, 시스템은 '처음부터 다시 진행해주세요'라는 차가운 메시지를 반복하며 조롱한다.",
		"twist": "'거의 다 됐습니다. 마지막 단계예요.' 비밀번호 입력 — 틀림. '이전에 사용한 비밀번호는 사용할 수 없습니다.' 새로 생성 — 조건 불충족. 조건 충족 — 다시 틀림. '인증 코드를 전송했습니다.' …코드는 오지 않는다. 오랜 침묵 후, 그가 미소 짓는다 — '보안을 위해… 처음부터 다시 진행해주세요.' 이 모든 과정은 탐험대의 노력을 무의미하게 만들고 절망에 빠뜨리기 위한 의도적인 방해였음이 드러난다.",
		"name": "Otto Reset"
	},
	"global_foreshadowing": [
		{
			"reveal_room": 5,
			"hint": "Otto의 과도한 친절 속에 숨겨진 미묘한 비웃음",
			"reveal_context": "Otto의 진짜 목적이 드러나며 그의 친절이 위선이었음이 밝혀진다.",
			"reveal_act": "climax_finale",
			"plant_act": "intro",
			"plant_room": 1,
			"id": "foreshadowing_ch2_1"
		},
		{
			"plant_act": "rising",
			"reveal_act": "climax_finale",
			"reveal_context": "모든 인증 절차가 사실상 무의미한 지연 전술이었음이 밝혀진다.",
			"hint": "끝없이 추가되는 인증 조건의 불필요함",
			"reveal_room": 4,
			"plant_room": 2,
			"id": "foreshadowing_ch2_2"
		},
		{
			"reveal_room": 3,
			"hint": "특정 NPC(Dax)의 초기 불신이 옳았다는 암시",
			"reveal_context": "Dax의 경고가 옳았으며 Otto의 시스템에 대한 의문이 확신으로 변한다.",
			"plant_act": "rising",
			"reveal_act": "climax_finale",
			"plant_room": 3,
			"id": "foreshadowing_ch2_3"
		},
		{
			"plant_room": 4,
			"id": "foreshadowing_ch2_4",
			"reveal_room": 2,
			"hint": "시스템 내부의 알 수 없는 데이터 흐름에서 포착되는 모순적인 패턴",
			"reveal_context": "Bex가 시스템의 맹점을 찾아내 Otto의 방해를 우회할 실마리를 발견한다.",
			"reveal_act": "climax_finale",
			"plant_act": "rising"
		}
	],
	"npc_roles": {
		"bex": {
			"arc": "Otto의 시스템에서 벗어날 수 있는 기술적 허점이나 비인가된 우회로를 찾으려 필사적으로 노력한다. 1편에서 쌓은 시스템 분석 지식을 바탕으로 2편에서는 직접적인 해결책을 모색한다.",
			"role": "기술 전문가"
		},
		"dax": {
			"arc": "Otto의 위선을 직접적으로 비난하고, 그의 거짓된 친절 뒤에 숨겨진 진실을 폭로한다. 1편에서 시작된 Otto에 대한 불신이 2편에서는 강한 확신과 대립으로 이어진다.",
			"role": "비판적 사상가"
		},
		"echo": {
			"role": "긍정적 리더",
			"arc": "Otto의 진짜 목적을 깨닫고 좌절하지만, 마지막 남은 희망을 찾아 팀원들에게 용기를 불어넣는다. 1편의 낙관론이 꺾이고 절망하지만, 팀의 정신적 지주로서의 역할을 다한다."
		}
	},
	"scenarioOutline": [
		{
			"act": "intro",
			"title": "반복되는 절망의 시작",
			"order": 1,
			"summary": "Otto의 반복되는 '처음부터 다시'라는 말에 탐험대는 좌절하고, Dax는 그의 진짜 의도를 확신하며 격렬히 항의한다. 1편의 마지막 상황이 반복되며, Otto의 친절한 가면 뒤에 숨겨진 악의적인 의도가 드러나기 시작한다.",
			"npc": "dax",
			"boss": "random_boss"
		},
		{
			"boss": "random_boss",
			"npc": "bex",
			"order": 2,
			"summary": "Otto의 시스템이 끝없이 새로운 인증 절차를 요구하자, Bex는 시스템 내부에 비정상적인 데이터 흐름을 감지하고, 그의 방해를 우회할 수 있는 기술적 허점을 찾기 시작한다.",
			"title": "시스템의 맹점을 찾아",
			"act": "rising"
		},
		{
			"npc": "echo",
			"boss": "random_boss",
			"title": "꺾이는 희망, 되살아나는 용기",
			"act": "rising",
			"summary": "탐험대가 희망을 잃어가는 순간, Echo는 Otto의 '보안'이 사실은 자신들을 가두기 위한 감옥임을 깨닫고 절망한다. 그러나 그녀는 팀원들에게 마지막 남은 용기를 불어넣으려 애쓴다.",
			"order": 3
		},
		{
			"order": 4,
			"summary": "Dax는 Otto의 위선적인 행동과 시스템의 불합리성을 직접적으로 비난하며, 그의 말이 단순한 지연이 아닌 의도적인 방해임을 폭로한다. 1편에서 시작된 불신이 2편에서 폭발한다.",
			"act": "rising",
			"title": "위선의 폭로",
			"boss": "random_boss",
			"npc": "dax"
		},
		{
			"npc": "dax",
			"boss": "pool_100",
			"title": "끝없는 재인증의 진실",
			"act": "climax_finale",
			"order": 5,
			"summary": "최후의 순간, Otto Reset은 '보안을 위해… 처음부터 다시 진행해주세요'라는 말을 하며 탐험대의 모든 노력을 무의미하게 만든다. Dax는 분노하며 Otto의 진짜 정체와 목적이 '접근 자체를 영원히 지연시키는 존재'임을 밝히고, 탐험대는 그를 막기 위한 마지막 결의를 다진다."
		}
	],
	"act_summary": {
		"intro": "Otto의 끝없는 재인증 요구에 탐험대는 깊은 좌절에 빠진다. 1편의 상황이 반복되면서 그의 친절이 위선이었음이 명확히 드러나고, Dax는 Otto의 의도적인 방해를 직감한다.",
		"climax_finale": "Otto가 모든 노력을 무의미하게 만들려 할 때, 그의 진짜 목적이 완전히 폭로된다. '처음부터 다시'라는 메시지는 1편에서 심었던 모든 노력의 무의미함을 회수하며 트위스트를 완성한다. 탐험대는 절망 속에서 마지막 저항을 준비하고, Dax의 초기 불신이 옳았음이 증명되는 가운데 Echo의 낙관론은 꺾인다.",
		"rising": "Bex는 시스템의 허점을 찾고, Echo는 절망 속에서도 희망을 북돋는다. Dax는 Otto의 거짓된 친절 뒤에 숨겨진 진실을 폭로하며 팀의 분노를 끌어올린다. 끝없이 추가되는 인증 조건들은 사실상 탐험대의 발목을 잡는 지연 전술이었음이 밝혀진다."
	}
};
