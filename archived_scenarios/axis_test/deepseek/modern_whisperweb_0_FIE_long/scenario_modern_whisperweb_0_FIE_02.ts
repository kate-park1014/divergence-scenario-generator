export const scenario_modern_whisperweb_0_FIE_02 = {
	"scenario_id": "modern_whisperweb_0_FIE_02",
	"order": 2,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"dax": {
			"id": "mon_08d5b43e-f9ab-4469-9064-855e170b0cdc",
			"name": {
				"korean": "닥스",
				"english": "Dax",
				"japanese": "ダックス",
				"chinese": "达克斯",
				"french": "Dax",
				"spanish": "Dax",
				"vietnamese": "Dax",
				"thai": "แด็กซ์",
				"hindi": "डैक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/84bb11db-6eb4-4500-d274-222e8b100100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5d325a75-bd91-4758-7b3f-ad9a97e52700/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"옥상 난간에 칩 하나가 남아 있었다. 나선형 문양, 에코가 팔던 그것.",
			"칩을 읽자 좌표 하나가 나왔다. 남문 전자상가 3층, 수리점.",
			"서버 여덟 개 중 하나가 그 건물 지하에서 신호를 뿜고 있었다.",
			"주인은 전직 해커. 지금은 납땜 인두나 쥐고 있는 사람."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "남문 전자상가 3층. 셔터 절반이 내려간 수리점. 선반엔 분해된 노트북이 여덟 대 쌓여 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "dax",
					"duration_ms": 500,
					"spot": [
						3,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "영업 끝났어. 셔터 내려간 거 안 보여?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "지하 서버. 누구 거야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "…들어와서 그걸 먼저 묻네."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "어제부터 시내 간판 육십 개가 주민등록번호를 띄웠어. 신호 꼬리가 이 건물로 와."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "그럼 경찰에 신고해. 난 아까 콘센트 고치다 손 데였어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "선반 위 모니터 하나가 저절로 켜졌다. 숫자 열한 자리가 흘러 내려갔다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "…또 시작이네."
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "dax",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "손대지 마. 지하 서버 열쇠는 내 주머니에 있고, 안 열어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "왜."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "그 안에 칩 서른두 개 있어. 이 상가 세입자들 세금 서류, 개인 계좌, 병원 기록까지."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "억지로 열면 암호화 안 된 것부터 같이 새. 그 사람들 이름하고 주소가 간판에 뜨는 거야."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 네가 열어. 골라서."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "…너 지금 그게 말이 된다고 생각해?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "어제 응급실에 실려 간 사람이 있어. 그래서 물어보는 거야."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "내가 마지막으로 남의 서버 들어간 게 십이 년 전이야. 그 뒤로 안 했어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "닥스가 계산대 뒤 벽시계를 봤다. 초침이 두 번 건너뛰었다."
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "dax",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "계단 내려가지 마. 지하 문은 강판 세 겹이야."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "강판은 상관없어. 네 계정이 필요해."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "…뭐?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "서버 관리자 권한이 네 아이디에 묶여 있잖아. 이 상가 통합 회선 계약자도 너고."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "그 권한으로 들어가면 로그에 내 이름이 남아. 벌금은 내가 물어. 수백만 크레딧이야."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "알아. 그래서 빨리 끝내자고."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "이봐. 십이 년 전 기록도 같이 딸려 나온다고. 그게 뜨면 난 끝이야."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "키보드 소리. 지하에서 팬 소리가 한 단계 올라갔다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "…하지 마. 제발."
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "dax",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "서버 화면에 복제 진행 막대가 서 있었다. 팔십칠 퍼센트."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "멈춰. 지금 멈추면 반은 남아."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "구십구까지 간다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "그 칩 안에 뭐가 들었는지 알아? 나 옛날에 기업 보안망 뚫었던 작업 파일이야."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 그건 안 가져가. 데이터 칩만 뜯어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "한 통에 담겨 있어! 나눠서 뜯는 게 아니라고!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "백 퍼센트. 화면 아래에 파일 목록이 흘렀다. 닥스_기업침해_20XX.log, 4.7GB."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "…올라갔어. 방금 자동 전송됐어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "상가 창밖 간판 넷이 동시에 켜졌다. 닥스의 이름과 사업자번호가 떴다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "끄지 마. 꺼도 이미 늦었어."
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "지하 서버실. 랙 여섯 대가 돌아가고 있었다. 랙 사이에 정체 모를 자가 서 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "복제 끝났네. 십이 년 묵은 해킹 로그까지 같이."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네가 이 서버에 신호를 밀어 넣었어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "응. 근데 올린 건 네 손이야. 관리자 권한 빌려 쓴 것도 너고."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "닥스한테 붙을 벌금은."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "사백칠십만 크레딧. 영업정지 육 개월. 위에서 이미 결정 났어."
					},
					"emotion": "happy"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "랙 여섯 대가 순서대로 멈췄다. 팬 소리가 사라지자 방이 조용해졌다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "이 서버 하나 껐다고 뭐가 달라져. 칩은 이미 열두 군데로 복사됐어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "그리고 네가 뜯은 칩 안에, 다음 주소가 들어 있어. 그 사람 집도 뜯으러 갈 거지."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…닥스한테 붙은 벌금."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "네가 물어. 대신 그가 널 고소하면 넌 못 이겨."
					},
					"emotion": "happy"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "dax",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "…여기 있었구나."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "닥스. 벌금은 내가."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "돈은 됐어. 셔터 내리고 짐 싸."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "이 가게 십이 년 했어. 근데 오늘 이름이 간판에 떴으니까."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "닥스가 열쇠를 계산대 위에 내려놓았다. 손이 떨렸다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "다음에 내 앞에 다시 서면, 그땐 내가 널 신고해."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "닥스가 계단을 올라갔다. 서버실 벽에 나선형 문양이 스프레이로 그려져 있었다."
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "바닥에 무릎이 닿았다. 화면엔 여전히 닥스의 이름이 흐르고 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "일어나. 랙 셋째 칸 열쇠는 네 옷 주머니에 있잖아."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그 열쇠로 다음 칩부터 뜬다. 순서대로."
					},
					"emotion": "angry"
				}
			]
		}
	]
} as const;
