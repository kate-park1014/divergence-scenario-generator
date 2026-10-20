export const scenario_modern_whisperweb_0_HCR_03 = {
	"scenario_id": "modern_whisperweb_0_HCR_03",
	"order": 3,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"lin": {
			"id": "mon_d036a884-3dde-472c-9fe7-c4807643860f",
			"name": {
				"korean": "린",
				"english": "Lin",
				"japanese": "リン",
				"chinese": "琳",
				"french": "Lin",
				"spanish": "Lin",
				"vietnamese": "Lin",
				"thai": "ลิน",
				"hindi": "लिन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a095dd66-1857-4f44-68b0-2ece83006d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/05b02694-f1ed-4e4c-b7ca-fb5b74a48900/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"시청 광고판에서 이름 1천 건이 지워졌다. 대신 번호와 주소가 남았다.",
			"그날 밤부터 도시 병원 응급실 대기 번호가 400번대에 걸렸다.",
			"'진실의 눈' 기자 린은 제보를 받았다고 한다. 위스퍼 웹이 병원 루머를 뿌리는 중이라고.",
			"주인공은 린에게 확인 없이 쓰지 말라고 말한다. 린은 기사 초안을 이미 다 써 놓았다."
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
						"korean": "응급실 입구. 발걸음 소리가 멈춘 채다. 대기 번호판에 417번이 떠 있다."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "lin",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "왔네. 진실의 눈, 린이야. 기사는 20분 뒤에 올라가."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 기사."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "'병원 응급실 폐쇄, 중증 환자 거부'—이 제목으로. 지금 사람들이 이걸 보고 다른 병원으로 가고 있어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "근거는."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "제보 두 건. 익명 게시판 캡처 하나. 병원 로비 사진 하나."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그게 다야?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "지난달에도 이렇게 올렸다가 압력으로 3시간 만에 내렸어. 이번엔 안 내릴 거야."
					},
					"emotion": "angry"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "lin",
					"duration_ms": 400,
					"spot": [
						2,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "병원에 정보 공개 요청 넣었어? 답 언제 와?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "공문 접수했어. 담당자 확인까지 하루."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "하루면 응급실 대기 번호가 500번 넘어가. 지금 3시간에 한 번씩 올라가고 있어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "확인 안 된 걸 쓰면 병원이 문 닫아. 그러면 진짜로 사람 못 받아."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "병원은 이미 닫혔어. 사람이 안 오니까 문 닫힌 거야. 그게 차이야?"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "로비 자동문이 열린다. 구급차 두 대가 나란히 서 있고, 들것은 비어 있다."
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
					"speaker": "lin",
					"duration_ms": 400,
					"spot": [
						2,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "원본 게시글 찾았어. 올린 IP가 병원 서버 대역이야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "직원이 올린 거라고?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "아니. 병원 서버실 랙 4번이 3일 전부터 밖으로 뭘 계속 내보내고 있어. 우리 쪽 접속 기록에 찍혔어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그 기록 증거로 쓸 수 있어?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "내가 몰래 접속해서 딴 거야. 그거 쓰면 위법이라 나부터 걸려."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…랙 4번. 그거 어디 연결돼."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "모르겠어. 근데 랙 4번에 붙은 기기들, 전부 같은 화면이 떠. 5초씩. 숫자 일곱 개."
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "lin",
					"duration_ms": 400,
					"spot": [
						2,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "병원 답 왔어. '응급실 정상 운영 중. 폐쇄 사실 무근.'"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "그게 거짓말이야. 이 시간 대기 480번이야. 어제보다 환자가 40% 줄었어. 안 오는 거야."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "공문은 정상이라고 해. 내가 쓰는 건 공문이야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "그래서 내가 쓰겠다는 거야. 랙 4번 기록 전부, 익명 제보 캡처랑 같이."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그 기록엔 내가 넘긴 요청서 번호도 같이 찍혀 있어. 환자 명단도. 그거 그대로 올리면 대기 환자 이름이 다 퍼져."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "…그래. 그럼 이름 빼고 올려."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그거 편집하는 데 두 시간 더 걸려. 그리고 그 사이에 랙 4번은 계속 내보내."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "알아. 그래도 오늘 안에 올릴 거야. 20분 뒤."
					},
					"emotion": "angry"
				},
				{
					"type": "direction",
					"action": "exit",
					"speaker": "lin",
					"duration_ms": 400,
					"direction": "down"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "린이 응급실 계단을 뛰어 내려간다. 손에 인쇄물 한 뭉치가 들려 있다."
					},
					"emotion": "base"
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
						"korean": "병원 서버실. 랙 4번 앞에 누군가 서서 모니터를 보고 있다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "와줬네. 마침 40분째 같은 문장 보내는 중이야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "병원 응급실 대기 480번. 어제 340번. 내가 만든 숫자야. 게시판에 12번 올렸고, 12번 다 퍼졌어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "환자가 죽으면 네 책임이야."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "안 온 건 안 온 사람들이야. 난 문장 하나 올렸어. 공문 기다리는 동안 나는 계속 올릴 거야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "랙부터 뽑는다."
					},
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "랙 4번 팬이 멈춘다. 모니터에서 게시판 창이 내려간다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…연결 끊어도 소용없어. 이 문장은 이미 다른 병원 게시판 세 곳에 복사됐어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "그리고 하나 더. 너희 기자, 20분 뒤에 기사 올린다며. 그거 올라가면 랙 안 뽑아도 똑같아져."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…린."
					},
					"emotion": "sad"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "lin",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "못 올렸어. 편집하다가 랙 기록에 환자 이름 62개가 붙어 있는 걸 봤어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "그거 빼고 올리면 오늘 밤에, 다 넣고 올리면 지금이야. …지금은 안 올리기로 했어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그 사이 응급실 앞에서 몇 명이 돌아갔어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "50명. 접수 기록에 남아 있어. 내가 기다린 값이야."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "랙 4번 옆 기기에서 숫자 일곱 개가 5초 떠 있다가 꺼진다. 4 0 7 2 9 1 3."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "린이 인쇄물을 쓰레기통에 넣는다. 종이가 젖어 있다."
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "랙 4번이 게시판에 열세 번째 글을 올린다. 제목은 '응급실 폐쇄'."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "이제 네가 뭘 뽑든 소용없어. 문장은 이미 밖에 있어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "린한테 바로 전화해. 기사 20분 늦추고, 랙 4번 포트 번호부터 받아."
					},
					"emotion": "angry"
				}
			]
		}
	]
} as const;
