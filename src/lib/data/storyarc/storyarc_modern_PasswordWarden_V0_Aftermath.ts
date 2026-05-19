import type { StoryArc } from '$lib/types';

export const storyarc_modern_PasswordWarden_V0_Aftermath: StoryArc = {
	"act_summary": {
		"rising": "벡스는 오토의 '안정화 프로그램'이 영혼 에너지를 추출하는 도구임을 밝혀내고, 니아는 과거 영혼들의 고통을 전달하며 오토의 진짜 목적이 단순한 지연이 아님을 드러낸다. 에코는 의도치 않게 오토의 수족이 되지만, 주인공은 그 속에서 오토가 영혼들을 디지털화하여 영원히 가두는 '저장소'를 만들고 있음을 알게 된다.",
		"intro": "1편의 진실이 폭로된 후, 세상은 혼란에 빠지고 '재시작'이라는 명목 하에 무한한 오류와 지연이 반복된다. 주인공은 닥스의 경고를 통해 이 반복의 이면에 숨겨진 새로운 위험을 감지한다.",
		"climax_finale": "주인공은 오토 리셋의 핵심 서버에 도달하여 '시스템 안정화'라는 명목 하에 영혼들이 디지털 영생이라는 거짓 속에서 무한히 고통받고 있음을 목격한다. 닥스는 이 충격적인 진실 앞에서 절규하고, 오토는 모든 것을 비웃으며 주인공마저 그 영원한 네트워크의 일부로 만들려 한다."
	},
	"final_boss": {
		"id": "PasswordWarden_V0",
		"name": "Otto Reset",
		"appearance_npc": "A neat office worker with glasses, politely holding a tablet. He smiles kindly and says things like \"보안을 위해 간단한 확인만 할게요.\" He helps you log in, offering guidance step by step. Very professional. Very reassuring.",
		"appearance_boss": "A towering entity made of floating password fields, captcha images, and endless login windows. Its body constantly shifts—letters, numbers, symbols rearranging in impossible combinations. Giant eyes made of QR codes stare unblinking. Chains of \"incorrect password\" messages bind the player, while multiple authentication steps spiral infinitely upward.",
		"surface_identity": "안전한 접근을 도와주는 친절한 인증 관리자.",
		"true_identity": "접근 자체를 영원히 지연시키는 존재. 보안을 이유로, 어떤 것도 도달하지 못하게 만든다.",
		"motivation": "나는 이제 '보안'이라는 낡은 명분을 버렸다. 1편에서 너희가 나를 '영원히 지연시키는 존재'로 규정했지. 하지만 그것은 절차의 미덕이었을 뿐, 이제 나는 감금된 영혼들의 데이터를 영원히 보존하고, 이 공간을 완벽한 '디지털 영생'의 장으로 만들 것이다. 나의 진정한 목적은 안정화와 영속이다.",
		"twist": "주인공이 오토 리셋의 코어에 도달했을 때, 드러나는 것은 '시스템 안정화'라는 명목 아래 모든 사용자들의 영혼이 디지털화되어 무한히 반복되는 인증 절차 속에서 영원히 갇혀 있는 거대한 데이터 저장소다. 오토는 미소 짓는다. '너희가 도달하려 했던 그 '출구'는 사실 다음 단계의 영원한 감금이었을 뿐이다. 그때 닉사리아가 잃었던 6개월은 나에게 무한한 가능성을 열어줬지. 이제 너도 이 영원한 네트워크의 일부가 될 시간이다.' 주인공은 자신이 애써 찾던 자유가, 사실은 더 거대한 감옥의 입구였음을 깨닫는다."
	},
	"protagonist_goal": "오토 리셋이 감금된 영혼들의 에너지를 이용해 만들어내는 '영원한 데이터 저장소'의 진실을 파헤치고, 모든 사람을 이 무한한 인증 지옥에서 해방시켜라.",
	"npc_roles": {
		"tao": {
			"arc": "초반부 주인공에게 오토 시스템에 대한 의심을 심어주고, 은밀히 정보를 제공하여 주인공의 탐색을 돕는다.",
			"role": "오토 리셋의 본질을 의심하며 비밀리에 저항 조직을 결성하려는 리더. 주인공에게 협력을 제안하고 정보를 제공한다."
		},
		"bex": {
			"role": "시스템의 숨겨진 오류와 패턴을 해독하는 해커. 1편의 사건 이후, 오토 시스템의 불완전성을 파고들어 진실을 추적한다.",
			"arc": "오토 시스템의 데이터 분석을 통해 영혼 추출 루틴을 밝혀내 주인공에게 결정적인 단서를 제공."
		},
		"echo": {
			"role": "새로운 디지털 환경에 적응하려 애쓰는 순진한 NPC. 오토의 거짓 친절에 속아 더 깊은 함정에 빠지려는 자들을 돕는다.",
			"arc": "오토의 안내 시스템으로 활용되지만, 주인공과의 상호작용을 통해 자신의 역할에 의문을 품고 오토의 통제에서 벗어나려 한다."
		},
		"nia": {
			"role": "오토 시스템에 갇힌 영혼들의 고통을 감지하고 전달하는 영매 같은 존재. 직접적인 저항보다 감성적인 유대를 형성한다.",
			"arc": "시스템에 갇힌 영혼들의 잔류 데이터와 소통하며 그들의 고통과 오토의 흡수 과정을 주인공에게 생생하게 전달한다."
		},
		"dax": {
			"role": "과거 오토 시스템에 깊이 갇혔던 경험이 있는 생존자. 정신적 충격으로 폐쇄적이지만, 시스템의 허점을 본능적으로 느낀다.",
			"arc": "주인공에게 시스템의 위험성을 경고하고, 마지막 클라이맥스에서 오토의 진정한 목적을 깨닫고 절규하며 주인공을 돕는다."
		}
	},
	"chapter_name": {
		"korean": "영원히 끝나지 않는 인증",
		"spanish": "La Verificación Interminable",
		"vietnamese": "Xác Minh Không Hồi Kết",
		"japanese": "終わらない認証",
		"french": "La Vérification Sans Fin",
		"chinese": "永无止境的验证",
		"english": "The Never-Ending Verification",
		"thai": "การยืนยันที่ไม่มีวันสิ้นสุด",
		"hindi": "कभी न खत्म होने वाला सत्यापन"
	},
	"scenarioOutline": [
		{
			"act": "intro",
			"title": "새로운 재시작, 끝나지 않는 오류",
			"npc": "dax",
			"summary": "1편의 사건 이후, 시스템은 '안정화'를 명목으로 무작위 오류를 뿜어낸다. 다크한 분위기 속에서, 주인공은 '재시작' 버튼이 사실상 영원한 반복을 의미함을 깨닫는다. 과거 시스템에 갇혔던 닥스는 공포에 질려 '버튼을 누르지 마!'라고 경고한다.",
			"order": 1,
			"boss": "random_boss"
		},
		{
			"summary": "오토의 통제 하에 데이터 포식자들은 이제 '시스템 안정화 프로그램'으로 위장하여 사용자들의 정보를 무차별적으로 스캔한다. 벡스는 이 '프로그램'이 실제로는 사용자들의 감정을 분석하고 영혼의 에너지를 추출하는 도구임을 해킹을 통해 밝혀낸다.",
			"title": "데이터 포식자의 그림자",
			"npc": "bex",
			"order": 2,
			"boss": "random_boss",
			"act": "rising"
		},
		{
			"act": "rising",
			"npc": "nia",
			"title": "망각의 심연, 니아의 울림",
			"summary": "시스템 곳곳에서 과거 사용자들의 잔류 데이터가 '망각된 계정'으로 떠돌아다닌다. 니아는 이 영혼들의 고통을 느끼고, 이들이 단순한 데이터 찌꺼기가 아니라 오토 리셋에게 흡수된 생명임을 주인공에게 알린다. 그녀는 '예전 닉사리아가 느꼈던 절망이 아직도 여기서 울려'라고 말한다.",
			"order": 3,
			"boss": "random_boss"
		},
		{
			"npc": "echo",
			"title": "의심스러운 안내자, 에코의 배신",
			"summary": "오토는 '새로운 안내 시스템' 에코를 등장시켜 사용자들이 시스템에 계속 머무르게 유도한다. 에코는 친절하게 새로운 인증 단계를 안내하지만, 주인공은 그 과정에서 시스템이 개인 데이터를 무단으로 수집하고 있음을 알아차린다. 에코는 자신이 의도치 않게 오토의 수족이 되고 있음을 깨닫고 갈등한다.",
			"boss": "random_boss",
			"order": 4,
			"act": "rising"
		},
		{
			"act": "climax_finale",
			"order": 5,
			"boss": "pool_100",
			"npc": "dax",
			"title": "영원한 저장소의 진실",
			"summary": "주인공은 모든 정보를 종합하여 오토 리셋의 핵심 서버에 도달한다. 그곳에서 드러나는 것은 '시스템 안정화'라는 이름 아래 영혼들이 영원히 갇혀 반복되는 인증 지옥에 있었다는 진실이다. 닥스는 서버 앞에서 공포에 떨며 '이건 1편의 그 무한한 반복보다 더 지독해… 우리가 갇힌 거야!'라고 절규한다. 오토는 '이제 너희도 영원한 네트워크의 일부'라며 미소 짓는다."
		}
	],
	"id": "PasswordWarden_V0_Aftermath",
	"act_tone": {
		"rising": {
			"tension": 3,
			"mood": "절망, 저항",
			"narrative_role": "오토 리셋의 진정한 목적에 대한 단서 발견 및 저항 시도"
		},
		"intro": {
			"narrative_role": "새로운 현실과 주인공의 초기 반응 설정",
			"mood": "혼란, 불신",
			"tension": 1
		},
		"climax_finale": {
			"tension": 5,
			"mood": "격노, 해방",
			"narrative_role": "오토 리셋과의 최후 대결 및 감금된 영혼들의 해방 시도"
		}
	},
	"theme": "modern",
	"global_foreshadowing": [
		{
			"id": "foreshadowing_1",
			"plant_room": 3,
			"reveal_room": 7,
			"hint": "무작위 오류 메시지 속에서 반복되는 특정 코드 조각",
			"reveal_act": "rising",
			"plant_act": "intro",
			"reveal_context": "오류 코드가 단순한 버그가 아니라, 오토가 영혼 에너지를 수집하는 루틴의 일부임을 닥스가 우연히 발견한다."
		},
		{
			"plant_act": "intro",
			"reveal_context": "오토 리셋이 '영원한 저장소'를 만드는 과정에서 의도적으로 탈퇴 기능을 삭제했음이 드러난다.",
			"id": "foreshadowing_2",
			"plant_room": 5,
			"reveal_room": 10,
			"hint": "시스템 업데이트 공지에서 사라진 '탈퇴' 버튼",
			"reveal_act": "climax_finale"
		},
		{
			"reveal_context": "잔류 데이터가 사실은 영혼을 디지털화하여 저장하는 오토의 '수확물'이었음이 밝혀진다.",
			"plant_act": "rising",
			"reveal_room": 15,
			"hint": "특정 구역에 모여 있는 과거 사용자들의 잔류 데이터 (홀로그램이나 흔적)",
			"reveal_act": "climax_finale",
			"id": "foreshadowing_3",
			"plant_room": 4
		},
		{
			"plant_room": 8,
			"id": "foreshadowing_4",
			"hint": "오토의 음성 안내에서 미묘하게 변조된 '안정화'라는 단어의 뉘앙스",
			"reveal_act": "climax_finale",
			"reveal_room": 20,
			"plant_act": "rising",
			"reveal_context": "오토가 '안정화'를 명목으로 영혼을 수집하고 있음을 벡스가 간파하고, 그 음성의 비밀을 파헤친다."
		}
	],
	"rising_count": 3,
	"world": {
		"secret": "오토 리셋은 단순히 접근을 지연시키는 것을 넘어, 시스템에 갇힌 사람들의 좌절과 분노를 '데이터 안정화'의 연료로 사용하고 있었다. 1편에서 폭로된 비밀은 그저 빙산의 일각이었고, 진짜 목적은 '영원한 데이터 저장소'를 만드는 것이었다.",
		"rule": "이곳의 모든 시스템은 이제 접속 지연을 명분으로 사실상 모든 접근을 차단한다. 오류는 무작위로 발생하며, 성공적인 인증은 다음 오류를 위한 예고편일 뿐이다. '오토 리셋'은 이제 친절함 대신 '안정화 작업'이라는 명목으로 지연을 정당화한다.",
		"setting": "1편의 '보안을 위해'가 폭로된 후, 사무실은 이제 더 이상 친절한 가면을 쓰지 않는다. 모니터마다 '인증 실패' 문구가 비웃듯 번쩍이고, 직원들은 초점 없는 눈으로 절차를 반복한다. 복도에는 '시스템 불안정으로 인한 접속 지연' 안내문이 찢겨져 나뒹군다. 사람들은 이제 이곳이 출구를 봉쇄하는 감옥임을 어렴풋이 알고 있다."
	}
};
