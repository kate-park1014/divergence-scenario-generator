import type { StoryArc } from '../../types';
import { modern_pools } from '../sample/monster';

export const storyarc_modern_otto: StoryArc = {
	id: 'PasswordWarden_V0',
	chapter_name: {
		korean: '보안을 위해',
		english: 'For Your Security',
		japanese: 'セキュリティのために',
		chinese: '为了您的安全',
		french: 'Pour Votre Sécurité',
		spanish: 'Por Su Seguridad',
		vietnamese: 'Vì Sự An Toàn Của Bạn',
		thai: 'เพื่อความปลอดภัยของคุณ',
		hindi: 'आपकी सुरक्षा के लिए'
	},
	theme: 'modern',
	rising_count: 3,

	world: {
		setting:
			'끝없이 깊어지는 콜센터 같은 사무실. 책상마다 모니터가 켜져 있고, 모든 화면에 로그인 창이 떠 있다. 안경을 쓴 직원이 정중하게 태블릿을 들고 다가온다. "보안을 위해 간단한 확인만 할게요."',
		rule: '이곳에서는 어떤 출구를 열기 위해서도 인증이 필요하다. 비밀번호, OTP, 지문, 얼굴, 보안 질문. 오토는 친절하게 한 단계씩 안내한다. 항상 "거의 다" 왔다고 한다.',
		secret:
			'오토는 접근 자체를 영원히 지연시키는 존재다. 보안이라는 명분 아래, 어떤 것도 진짜로는 도달하지 못하게 만든다. 인증 단계는 끝없이 추가된다.'
	},

	protagonist_goal: '오토의 안내를 받아 시스템에 로그인하고 출구로 나가라.',

	act_tone: {
		intro: {
			mood: '신뢰와 정중함',
			tension: 1,
			narrative_role:
				'정장에 안경을 쓴 직원이 친절하게 인사한다. "보안을 위해 간단한 확인만 할게요." 절차가 명확해서 오히려 안심된다. 차근차근 따라간다.'
		},
		rising: {
			mood: '점점 빨라지는 답답함',
			tension: 3,
			narrative_role:
				'비밀번호를 입력한다. 틀림. 다시. 조건 불충족. 다시. 인증 코드를 받는다 — 오지 않는다. 오토는 여전히 미소 짓는다. "거의 다 됐습니다."'
		},
		climax_finale: {
			mood: '폐쇄와 무력감',
			tension: 5,
			narrative_role:
				'마지막 단계. 인증이 또 한 번 실패한다. 오토가 차분하게 미소 짓는다. "보안을 위해… 처음부터 다시 진행해주세요." 그의 몸이 비밀번호 필드와 캡차로 분열한다.'
		}
	},

	final_boss: {
		id: 'PasswordWarden_V0',
		name: 'Otto Reset',
		appearance_npc:
			'A neat office worker with glasses, politely holding a tablet. He smiles kindly and says things like "보안을 위해 간단한 확인만 할게요." He helps you log in, offering guidance step by step. Very professional. Very reassuring.',
		appearance_boss:
			'A towering entity made of floating password fields, captcha images, and endless login windows. Its body constantly shifts—letters, numbers, symbols rearranging in impossible combinations. Giant eyes made of QR codes stare unblinking. Chains of "incorrect password" messages bind the player, while multiple authentication steps spiral infinitely upward.',
		surface_identity: '안전한 접근을 도와주는 친절한 인증 관리자.',
		true_identity:
			'접근 자체를 영원히 지연시키는 존재. 보안을 이유로, 어떤 것도 도달하지 못하게 만든다.',
		motivation: '탐험대가 목표에 도달하기 직전마다 새로운 인증을 요구해, 결국 포기하게 만든다.',
		twist:
			'"거의 다 됐습니다. 마지막 단계예요." 비밀번호 입력 — 틀림. "이전에 사용한 비밀번호는 사용할 수 없습니다." 새로 생성 — 조건 불충족. 조건 충족 — 다시 틀림. "인증 코드를 전송했습니다." …코드는 오지 않는다. 오랜 침묵 후, 그가 미소 짓는다 — "보안을 위해… 처음부터 다시 진행해주세요."'
	},

	global_foreshadowing: [
		{
			id: 'ot_01',
			hint: '사무실의 모든 모니터에 로그인 창이 떠 있다. 어떤 화면도 그 다음 페이지로 넘어가지 않는다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '이곳에는 "다음 페이지"가 없다. 로그인 화면이 곧 종착지였다.'
		},
		{
			id: 'ot_02',
			hint: '비밀번호 정책 안내문이 벽에 붙어 있다. 조건이 너무 많고, 줄을 따라가다 보면 모순되는 항목들이 발견된다.',
			plant_act: 'rising',
			plant_room: 3,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '조건은 충족 불가능하게 설계되어 있었다. 처음부터 통과시킬 의도가 없었다.'
		},
		{
			id: 'ot_03',
			hint: '오토가 들고 있는 태블릿 화면이 잠깐 비친다. 거기엔 "지연 시간: ∞" 라는 항목이 떠 있다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context:
				'그의 업무는 보안 관리가 아니라 무한 지연이었다. KPI 자체가 탐험대를 멈추는 것이다.'
		},
		{
			id: 'ot_04',
			hint: '인증 코드가 도착하지 않는다. 휴대폰 화면을 들여다봐도 메시지함이 비어 있다. 그러나 안내음만 반복된다 — "전송되었습니다."',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context:
				'코드는 처음부터 보내지지 않았다. "전송되었습니다"는 안내만 무한히 재생되는 자동 응답이었다.'
		}
	],

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '간단한 확인만',
			boss: 'random_boss',
			npc: 'dan',
			summary:
				'끝없이 이어지는 사무실. 안경을 쓴 직원 오토가 정중하게 다가온다. "보안을 위해 간단한 확인만 할게요." 태블릿을 내민다. 절차 등록을 마치자, 오토는 "다른 분들 응대를 좀 하고 올게요"라며 자리를 뜬다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '서식의 포식자',
			boss: 'random_boss',
			npc: 'jett',
			summary:
				'대기 중인 사람들이 쥐고 있던 신청서가 갑자기 살아 움직인다. 빈 칸이 입처럼 벌어지며 사람들을 빨아들이려 한다 — 서류 양식 자체가 포식자가 된 것이다. 제트가 외친다. "이 사무실, 그냥 있는 게 아니야." 양식 괴물을 베어낸다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '닉사리아의 ID',
			boss: 'random_boss',
			npc: 'nyxaria',
			summary:
				'잠시 휴게실 같은 공간에서 숨을 고른다. 닉사리아가 자판기 옆에서 자기 이야기를 꺼낸다. 어떤 시스템에 갇혀 ID 하나를 복구하려고 6개월을 보냈던 일. "다시는 거기 들어가지 않겠다고 다짐했어. 그런데 또 비슷한 곳에 있네." 자조적인 웃음.'
		},
		{
			order: 4,
			act: 'rising',
			title: '돌아온 안내자',
			boss: 'random_boss',
			npc: 'dan',
			summary:
				'오토가 다시 다가온다. "오래 기다리셨죠. 마지막 단계예요." 비밀번호 입력 — 틀림. 새로 만든다 — 조건 불충족. 인증 코드를 보냈다지만 휴대폰은 비어 있다. 그의 태블릿 한쪽에 "지연 시간: ∞"라는 작은 글씨가 잠깐 비친다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '처음부터 다시',
			boss: modern_pools.pool_100.pool_id as `pool_${string}`,
			npc: 'aria',
			summary:
				'마지막 인증 화면. 정성껏 입력한다. 잠깐 멈춤 — 실패. 오토가 차분하게 미소 짓는다. "보안을 위해… 처음부터 다시 진행해주세요." 그의 몸이 무너지듯 분열한다. 비밀번호 필드, 캡차, QR 눈동자, 끝없이 위로 솟는 인증 단계. "incorrect password"의 사슬이 탐험대를 묶기 시작한다.'
		}
	],

	act_summary: {
		intro: '친절한 인증 관리자 오토를 만난다. 절차 등록을 마치고 그는 잠시 자리를 비운다.',
		rising:
			'오토가 사라진 사이 서류 양식이 포식자가 되어 사람들을 노린다. 닉사리아가 ID 복구로 6개월을 잃었던 이야기를 한다. 돌아온 오토 곁에서 인증은 계속 실패한다.',
		climax_finale:
			'"처음부터 다시 진행해주세요." 보안이라는 이름의 무한 지연이 진짜 모습을 드러낸다.'
	}
};
