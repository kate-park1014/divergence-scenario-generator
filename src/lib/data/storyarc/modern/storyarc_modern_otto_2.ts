import type { StoryArc } from '$lib/types';

export const storyarc_modern_otto_2: StoryArc = {
	"id": "modern_otto_2",
	"level": 2,
	"chapter_name": {
		"vietnamese": "Truy cập An toàn, Lần thử đầu tiên",
		"chinese": "安全访问，首次尝试",
		"french": "Accès Sécurisé, Première Tentative",
		"hindi": "सुरक्षित पहुंच, पहला प्रयास",
		"spanish": "Acceso Seguro, Primer Intento",
		"english": "Secure Access, First Attempt",
		"japanese": "安全なアクセス、最初の試み",
		"thai": "การเข้าถึงที่ปลอดภัย, ความพยายามครั้งแรก",
		"korean": "안전한 접근, 첫 번째 시도"
	},
	"theme": "modern",
	"rising_count": 3,
	"world": {
		"secret": "표면적으로 안전한 접근을 돕는 것처럼 보이는 시스템이 실제로는 접근 자체를 의도적으로 지연시키고 있다는 미묘한 암시.",
		"rule": "정확한 비밀번호와 다단계 인증을 통해서만 다음 단계로 넘어갈 수 있다.",
		"setting": "디지털 보안 시스템으로 둘러싸인 공간, 끝없이 펼쳐진 로그인 창과 캡차 이미지로 구성된 미로."
	},
	"protagonist_goal": "친절한 인증 관리자 Otto Reset의 안내를 따라 시스템에 안전하게 접근하여 목표에 도달한다.",
	"act_tone": {
		"intro": {
			"mood": "기대, 호기심",
			"tension": 1,
			"narrative_role": "모험의 시작과 세계관 소개"
		},
		"climax_finale": {
			"tension": 5,
			"narrative_role": "잠재된 위협의 첫 균열과 다음 편 예고",
			"mood": "불안, 미묘한 의심"
		},
		"rising": {
			"tension": 3,
			"narrative_role": "점증하는 난관과 의심의 시작",
			"mood": "혼란, 좌절"
		}
	},
	"final_boss": {
		"twist": "친절해 보이는 그의 안내가 사실은 끝없는 루프의 시작일 수 있다는 불길한 예감.",
		"true_identity": "접근을 돕는 척 하지만, 실제로는 의도적인 지연을 통해 접근을 막고 있다는 미묘한 암시가 있는 존재.",
		"id": "PasswordWarden_V0",
		"motivation": "탐험대가 목표에 도달하기 직전마다 새로운 인증을 요구해, 결국 포기하게 만드는 듯한 행동을 보이지만, 그 의도는 아직 불분명하다.",
		"name": "Otto Reset",
		"surface_identity": "안전한 접근을 도와주는 친절한 인증 관리자.",
		"appearance": "떠다니는 비밀번호 입력창과 온화하게 빛나는 캡차 이미지를 형상화한 거대한 존재. 그의 몸은 부드럽게 변하며, 정교한 디지털 문자들이 유려하게 흘러간다. QR 코드로 된 눈은 따뜻하게 응시하며, '환영합니다'와 '안전한 접근을 도와드립니다'라는 메시지가 그를 감싼다. (친절한 안내자의 모습)"
	},
	"global_foreshadowing": [
		{
			"id": "Foreshadow_01",
			"reveal_context": "Otto의 지시를 따를수록 인증 절차가 비정상적으로 복잡해지고 끝없이 반복됨을 깨닫는다.",
			"reveal_act": "climax_finale",
			"plant_act": "intro",
			"hint": "점점 더 복잡해지는 인증 조건과 끝없이 나타나는 캡차 이미지",
			"reveal_room": 5,
			"plant_room": 1
		},
		{
			"reveal_room": 6,
			"plant_room": 2,
			"reveal_context": "Otto의 '보안'이 실제로는 접근 지연을 위한 명분이었음이 드러나기 시작한다.",
			"id": "Foreshadow_02",
			"reveal_act": "climax_finale",
			"plant_act": "rising",
			"hint": "Otto가 '보안을 위해'라고 강조하는 부분이 사실은 진행을 막는다는 암시"
		},
		{
			"plant_act": "rising",
			"hint": "NPC Dax의 불신이 나중에 사실로 드러날 것임을 암시하는 장면",
			"reveal_act": "climax_finale",
			"id": "Foreshadow_03",
			"reveal_context": "Dax의 초기 의심이 옳았다는 것이 점점 명확해지며 그의 불신이 팀의 핵심 단서가 된다.",
			"plant_room": 3,
			"reveal_room": 7
		},
		{
			"reveal_act": "climax_finale",
			"reveal_context": "단순한 시스템 오류로 여겼던 지연들이 Otto의 의도적인 방해였음을 알아차린다.",
			"id": "Foreshadow_04",
			"plant_act": "intro",
			"hint": "예상치 못한 미묘한 지연이 계속되지만, 그 이유를 알 수 없어 답답해한다.",
			"plant_room": 4,
			"reveal_room": 8
		}
	],
	"npc_roles": {
		"bex": {
			"role": "기술 전문가",
			"arc": "Otto의 복잡한 인증 절차를 해결하기 위해 기술적인 지식을 활용하려 노력한다. (시리즈 연결: 시스템의 허점과 우회로를 찾는데 핵심적인 역할을 하게 된다.)"
		},
		"dax": {
			"role": "직관적인 의심자",
			"arc": "Otto의 과도한 보안 절차에 의문을 제기하며, 다른 방법을 찾을 것을 제안한다. (시리즈 연결: Otto의 위선을 직접적으로 비난하고 진실을 폭로하는 결정적인 역할을 한다.)"
		},
		"echo": {
			"role": "긍정적인 팀원",
			"arc": "Otto의 설명을 긍정적으로 받아들이고 팀원들을 독려하며, 안내에 따라 계속 시도한다. (시리즈 연결: Otto의 진짜 목적을 깨닫고 좌절하지만, 마지막 남은 희망을 찾아 팀원들에게 용기를 불어넣는다.)"
		}
	},
	"scenarioOutline": [
		{
			"npc": "dax",
			"summary": "Otto Reset이 친절하게 탐험대를 맞이하며, 안전한 접근을 위한 첫 인증 단계를 안내한다. Dax는 Otto의 과도한 친절함과 설명에 미묘한 의심을 품는다.",
			"boss": "random_boss",
			"act": "intro",
			"title": "환영합니다, 보안 구역에 오신 것을!",
			"order": 1
		},
		{
			"title": "끝없는 재시도, 미묘한 오류?",
			"order": 2,
			"act": "rising",
			"npc": "bex",
			"boss": "random_boss",
			"summary": "탐험대는 첫 번째 인증 단계에서 예상치 못한 복잡한 조건을 만나 좌절한다. Bex는 기술적인 분석을 통해 문제 해결을 시도하지만, 시스템의 비논리성에 당황한다. Otto는 '보안을 위해'라며 추가 절차를 요구한다."
		},
		{
			"order": 3,
			"title": "점증하는 캡차 미로",
			"act": "rising",
			"boss": "random_boss",
			"summary": "점점 더 복잡해지는 캡차 이미지와 인증 질문에 팀원들은 지쳐간다. Echo는 Otto의 설명을 믿고 팀원들을 독려하며 계속 시도하지만, 미묘하게 시간이 지연되는 것을 느낀다.",
			"npc": "echo"
		},
		{
			"title": "의심의 그림자",
			"order": 4,
			"act": "rising",
			"npc": "bex",
			"boss": "random_boss",
			"summary": "Bex는 시스템이 의도적으로 접근을 방해하는 것처럼 느껴지는 이상한 패턴을 발견한다. Otto는 여전히 친절한 얼굴로 '더욱 안전한 환경을 위한 조치'라고 설명하며 추가 인증을 요구한다."
		},
		{
			"boss": "pool_100",
			"summary": "수많은 시도 끝에 도달한 최종 단계에서, Otto는 '이전에 사용한 비밀번호는 사용할 수 없습니다'며 처음부터 다시 시작할 것을 암시한다. Dax는 Otto의 의도적인 방해를 직감하며 강하게 불신을 드러내고, Otto의 표면적 친절에 균열이 가기 시작한다.",
			"npc": "dax",
			"order": 5,
			"title": "끝없는 루프의 시작, 첫 번째 균열",
			"act": "climax_finale"
		}
	],
	"act_summary": {
		"rising": "예상치 못한 복잡한 인증 절차와 끝없는 캡차, 그리고 반복되는 재시도에 탐험대는 점차 지쳐간다. Otto는 '보안'을 명목으로 계속해서 새로운 절차를 추가하며 시간을 지연시키고, 팀원들은 점차 시스템의 비논리성에 혼란을 느낀다.",
		"climax_finale": "수많은 실패 끝에 마지막 단계에 도달하지만, Otto는 다시 '처음부터 다시 진행해주세요'라는 말을 꺼내며 탐험대의 노력을 무의미하게 만들려 한다. Dax는 Otto의 의도를 눈치채고 강력히 항의하며, Otto의 가면 뒤에 숨겨진 진짜 정체에 첫 번째 균열이 발생한다.",
		"intro": "Otto Reset의 친절한 안내를 받으며 시스템에 진입하려 한다. 초기 단계는 순조로운 듯 보이지만, Dax는 Otto의 과도한 친절함에 미묘한 의심을 품는다."
	}
};
