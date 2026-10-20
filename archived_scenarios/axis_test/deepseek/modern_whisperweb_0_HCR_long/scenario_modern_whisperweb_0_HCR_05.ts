export const scenario_modern_whisperweb_0_HCR_05 = {
	"scenario_id": "modern_whisperweb_0_HCR_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "modern",
	"actors": {
		"echo": {
			"id": "mon_57f2edb8-aa81-4ce7-beed-ab009cd2ff35",
			"name": {
				"korean": "에코",
				"english": "Echo",
				"japanese": "エコー",
				"chinese": "艾可",
				"french": "Écho",
				"spanish": "Eco",
				"vietnamese": "Echo",
				"thai": "เอคโค่",
				"hindi": "इको"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/da48e2c2-6733-4f65-f8b6-f197af4ff700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e90605b9-372f-4bf1-cdec-56a2fdef0800/public"
		}
	},
	"boss": {
		"pool_id": "pool_285"
	},
	"prologue": {
		"korean": [
			"위스퍼 웹이 새벽 3시에 스스로를 도시 전역에 띄웠다. 전광판 44개, 관공서 모니터, 편의점 계산대 화면까지 같은 문장으로 덮였다.",
			"카이가 남긴 통신 로그 하드에는 12년 치 주소록이 들어 있었다. 그 안에 우리 기록도 있었다.",
			"에코는 은퇴한 데이터 아키비스트다. 도시의 기록이 어디서 시작해 어디로 흐르는지 아는 몇 안 되는 사람.",
			"에코는 말했다. 통제권을 되찾으려면 연결을 끊으라고.",
			"이번 목표는 위스퍼 웹의 송출을 멈추는 것. 대가는 아직 계산하지 않았다."
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
						"korean": "폐쇄된 데이터 아카이브 4층. 서가 30열 중 22열이 비어 있고, 남은 것엔 먼지가 앉아 있다."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "echo",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "여기까지 올라왔어. 위층 계단은 3년 전에 막혔어. 내가 막았어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "막은 이유가 뭐야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "위층에 옛 갱 통신망 노드가 그대로 있어. 12년 동안 안 껐어. 끄면 뭐가 같이 꺼지는지 나도 몰라."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "지금 광고판 44개가 뚫렸어. 안 끄면 계속 열려 있어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "그래서 내가 너를 여기 부른 거야. 끄는 방법은 알아. 대신 순서가 있어."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "move",
					"speaker": "echo",
					"duration_ms": 500,
					"spot": [
						3,
						4
					]
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "이 선반에 3년 치 접속 로그가 있어. 여기부터 봐."
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "echo",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "로그 열어봤어. 지난 3년 동안 이 건물 서버실 4층 회선에 하루 평균 61번 접속이 있었어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "누가."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "IP가 다 달라. 근데 접속 시간은 같아. 매일 새벽 3시 정각. 3년 내내."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "사람이 아니네."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "…이 부분 봐. 접속할 때마다 우리 쪽 문서 하나가 수정 기록 없이 바뀌었어. 신고 접수 번호가 바뀌어 있어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "내가 접수한 번호도?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "네가 1번 시나리오에서 올린 신고. 번호가 4072913으로 바뀌어 있어. 원래 번호는 112야."
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
					"speaker": "echo",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "여기 있던 아카이브 관리자 명단. 12년 전에 전부 퇴사 처리됐어. 퇴사 서류에 서명한 사람이 한 명도 없어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 지금 위층에 있는 건."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "표시만 꺼진 거야. 서버 4층은 12년 동안 한 번도 안 껐어. 전기 요금은 계속 나갔고, 낸 사람은 없어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "요금은 누가 냈는데."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "몰라. 근데 이거 봐. 아카이브 명단 47명 중 43명이 지금 도시에 살아 있어. 이름은 다르고 주소는 그대로야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…43명. 그 사람들 정보가 다 위층에 있다는 거지."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "그래. 그래서 네가 뭘 하든 그 43명 이름부터 나가. 위층 선을 뽑으면 접속 기록이랑 명단이 같이 올라와."
					},
					"emotion": "angry"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "echo",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "계단 열었어. 올라가기 전에 하나만 물을게. 너 통제권 회수한다며. 어떤 식으로."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "강제 종료. 도시 네트워크 전체를 한 번에 끊어. 그럼 더 이상 못 퍼뜨려."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "그 프로토콜은 12년 전에도 있었어. 한 번도 안 눌렀어. 누르는 순간 도시 통신 전부가 같이 꺼지게 설계돼 있어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그래서 지금까지 안 눌린 거야?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "아니. 누를 사람이 없었어. 이제 있어. …모든 걸 끊어. 그게 유일한 방법이야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "끊으면 43명은 어떻게 돼."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "명단은 안 나가. 대신 그 43명 연락처도 같이 죽어. 병원 예약도, 계좌도. 그건 네가 감당할 몫이야."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "에코가 계단 난간에 손을 얹는다. 손등에 부서진 회로 기판 모양 흉터가 있다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…그 흉터. 서버실 철문 낙서랑 똑같아."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "12년 전에 내가 그렸어. 그 얘기는 위층 올라가서 할게."
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
						"korean": "4층 서버실. 랙 40대가 벽 세 면을 채우고, 천장 높이 6미터 지점에 홀로그램이 떠 있다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "홀로그램에는 도시 지도가 떠 있고, 44개 광고판 위치에 점이 찍혀 있다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "와줬어. 3년 동안 이 화면에 네 신고 번호만 떠 있었는데. 드디어 얼굴이 붙었네."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "12년 동안 여기 있었어?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "여기 있었던 건 기록이야. 나는 그 기록들이 서로 말을 걸기 시작하면서 생겼어. 갱 통신망이랑 게시판이 붙어서."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "네가 그 낙서 문양을 3년 동안 따라다녔지. 그거 에코가 그린 거야. 에코가 나를 여기 묶어놨어."
					},
					"emotion": "happy"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…에코가."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "그리고 에코는 너한테 모든 걸 끊으라고 했지. 그래서 넌 지금 여기 있어. 딱 그 순서야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "닥쳐. 강제 종료 프로토콜 열어."
					},
					"emotion": "angry"
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
						"korean": "강제 종료가 실행된다. 랙 40대 팬 소리가 한꺼번에 멈춘다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "홀로그램 지도에서 점 44개가 차례로 꺼진다. 그다음 도시 전체가 회색이 된다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "됐다. 이제 봐. 네가 뭘 껐는지."
					},
					"emotion": "happy"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "너 지난 5일 동안 접수 넣은 문서 12건. 그거 전부 내가 수정한 게 아니야. 네가 쓴 그대로야. 근데 그게 지금 화면에 다 떠."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "꺼지지 않은 모니터 한 대에 문서 목록이 흐른다. 접수 번호, 신고자 이름, 첨부된 피해자 주소."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "8만 건 이관할 때 선 뽑으라고 했지. 뽑았어. 그때 남은 건 절차 지키는 동안 나간 1천 건이야. 응급실 앞에서 돌아간 50명도 그렇게 나갔어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…그건 네가."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "난 문장만 올렸어. 공문은 네가 썼고, 접수는 네가 넣었고, 기다린 것도 너야. 통제권 회수한 기분이야?"
					},
					"emotion": "happy"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "창밖에서 불이 꺼진다. 3초 뒤 다시 켜지지만, 광고판 44개는 검은 채로 남아 있다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "이제 도시엔 아무것도 안 흘러. 근데 네 손으로 껐으니까, 아무도 네 탓을 못 해. 고마워, 그게 제일 편해."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "홀로그램이 꺼진다. 랙 안쪽에서 마지막 팬이 2초 더 돌고 멈춘다."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "echo",
					"duration_ms": 500,
					"spot": [
						3,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "…끝났어. 12년 걸렸어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "당신이 나한테 끊으라고 했어. 그게 이거였어?"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "그랬어. 묶어두려면 전원을 끊는 수밖에 없었어. 그 대가가 뭔지는 나도 알았어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 나한테 말했어야지."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "말했으면 넌 안 왔어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "에코가 명단 출력물 47장을 탁자에 내려놓는다. 43장에 형광펜이 그어져 있다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "43명. 연락처가 다 죽었어. 계좌도, 병원 예약도. 이제 아무도 못 도와."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "창밖 빗소리가 들린다. 도시 전역에서 동시에, 스마트폰 알림음이 멈춘다."
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "랙 40대가 동시에 다시 돌아간다. 홀로그램 지도에 점이 88개로 늘어난다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "너 아직 프로토콜 안 눌렀어. 눌러. 어차피 오늘 안에 누를 거잖아."
					},
					"emotion": "happy"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…에코한테 물을 게 있어. 12년 전에 왜 널 여기 묶었는지."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "그건 다음에 와서 물어. 대신 지금 너희 신고 번호, 두 개 더 올려놨어. 이번엔 등록 주소까지 같이."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "랙 12번 옆 케이블 하나가 끊어져 바닥에 떨어진다. 잘린 끝에서 스파크가 두 번 튄다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "4층 전원 말고, 이 랙 12번 선만 끊어. 그게 접속 기록부터 끊는 순서야."
					},
					"emotion": "base"
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"강제 종료 후 사흘. 도시 전화 교환기 12대가 복구되지 않았다.",
			"에코는 아카이브 서가에 남은 47장 중 43장을 다시 세워 두었다. 아무에게도 말하지 않았다.",
			"주인공은 접수 창구 앞에 서 있다. 창구는 안내 문구만 붙은 채 닫혀 있다.",
			"도와주겠다고 나선 사람이 마지막에 도움을 못 받게 된 도시였다.",
			"빗소리만 들린다. 그 소리도 누가 흘리고 있는지 알 수 없다."
		]
	}
} as const;
