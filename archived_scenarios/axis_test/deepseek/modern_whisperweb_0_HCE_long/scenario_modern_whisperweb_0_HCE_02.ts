export const scenario_modern_whisperweb_0_HCE_02 = {
	"scenario_id": "modern_whisperweb_0_HCE_02",
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
			"광고판에 이름과 주소가 뜨는 밤이 다섯 번째다.",
			"에코는 시청 기록 서버에서 만 명이 빠져나가는 걸 보고 이름을 올렸다.",
			"사라진 패킷 다섯 개 중 셋은 이미 돌아왔고, 나머지 둘의 번호를 나는 아직 외우고 있다.",
			"중앙로 지하에서 만난 자는 위쪽에 또 다른 서버가 있다고 했다.",
			"닥스라는 이름을 에코가 마지막으로 남겼다. 노점 뒤에서 데이터를 되살리는 사람이라고."
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
						"korean": "노점 두 개 사이, 셔터 반쯤 내린 가게 안에 모니터 네 대가 켜져 있었다."
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
						2
					]
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "문 앞에서 발소리 세 번 멈췄어. 미행 붙었어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "에코가 보냈어. 닥스 맞지."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "에코는 어제 이름이 열두 번째로 떴어. 그 사람이 보낸 손님은 안 받아."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "위스퍼 웹 단서가 필요해. 사설 아카이브 있다고 들었어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "있어. 근데 거기 들어 있는 건 시민 이백 명 기록이야. 이름, 병원비, 체납액."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "내가 그거 복구해서 돌려주고 있어. 열쇠를 네 손에 쥐여줄 이유가 없어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "찾는 건 위스퍼 웹이야. 남의 기록은 안 건드려."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "서버는 그렇게 안 나뉘어. 열면 같이 따라 나와."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "exit",
					"speaker": "dax",
					"duration_ms": 400,
					"direction": "down"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "닥스의 가게 안쪽. 선반에 데이터 칩이 이름표 붙은 채 상자째 쌓여 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "dax",
					"duration_ms": 500,
					"spot": [
						2,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "아직 안 갔어. 이유가 뭐야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "사라진 패킷 다섯 개. 그중 둘이 아직 안 돌아왔어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "그 둘은 내가 복구한 거야. 원본 포맷은 깨져 있고, 음성만 남았어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "닥스가 낡은 칩 하나를 슬롯에 밀어 넣었다. 스피커에서 잡음이 세 번 끊겼다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "'모든 비밀이 연결된다'. 옛날 갱단이 남긴 말이야. 그 뒤로 삼십 년 넘게 아무 일도 없었어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "지금 일어나고 있는데."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "칩 옆면에 새겨진 거 봐."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "칩 가장자리에 얇은 회로선이 'W' 모양으로 파여 있었다. 골목 벽 낙서와 같은 각도였다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "이 칩 만든 사람들, 아직 살아 있어. 그리고 내 아카이브에 접속한 기록이 남아 있어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 빌려줘. 읽기만 할게."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "읽기만 하면 열리는 문이 아니야. 그리고 이 칩이 왜 아직 여기 있는지 나도 몰라."
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "새벽 네 시. 닥스의 가게 셔터가 닫혀 있었다. 안쪽에서 모니터 불빛만 새어 나왔다."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "dax",
					"duration_ms": 500,
					"spot": [
						5,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "셔터 앞에서 뭐 해. 문 안 열어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "광고판 열두 개가 이 시간에 같이 꺼졌어. 아카이브 주소가 그중 하나야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "...그건 나도 알아. 그래서 어젯밤에 이사 준비했어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "두고 가는 거야?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "이백 명 기록 들고 이사 가면 그게 더 위험해. 서버는 남기고 간다고."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "들어가서 열면 아카이브 잠금이 두 번 걸려. 두 번째 걸림에서 경보가 이웃 상점들에 다 울려."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "경보는 어떻게 끄는데."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "안 꺼. 대신 삼 분 늦게 울리는 우회로가 있어. 그 삼 분 안에 나와야 해."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "그리고 열쇠 들고 간 너만 들어가. 나는 밖에서 전화 안 받아. 무슨 일 있어도."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "알았어. 삼 분."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "내 말 이해 못 했지. 삼 분 안에 나와도 기록은 같이 새. 열면 새는 거야."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "그 사람들 내가 십 년 동안 하나씩 모아서 돌려준 거야. 네 삼 분이 그거 날린다고 생각해 본 적 있어?"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "닥스가 주머니에서 열쇠 하나를 꺼내 바닥에 놓았다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "...가져가. 그리고 다시는 이 가게 안 와."
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "아카이브 서버실. 랙 세 대가 바닥에 누워 있고, 한 대만 파란 불이 켜져 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "잠금 하나. 경보 삼 분."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "화면에 'ARCHIVE / READ-ONLY' 가 떴다가 사라졌다. 로그 창이 스스로 내려가기 시작했다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "읽기 전용인데 왜 내려가."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "화면 아래로 이름과 주민번호가 반 초 간격으로 쏟아졌다. 402호 김은숙. 1103동 박재현. 열두 개씩 묶여 올라갔다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "멈춰."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "전원 케이블을 뽑았다. 랙 표시등이 꺼졌다. 하지만 옆 랙 두 대가 같은 속도로 계속 내려갔다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "...분산돼 있었어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": "content_placeholder",
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
						"korean": "가게 앞 골목. 건물 외벽 광고판 하나가 켜져 이름과 주소를 초당 세 개씩 올리고 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "광고판 제어함 앞에 누군가 서 있었다. 등지고 손을 판에 넣고 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "닥스 아카이브, 이백 명이었지. 지금까지 육십삼 명 올렸어. 남은 건 삼십 분이면 돼."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "내가 열어서 나온 거잖아. 여기서 끊어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "아니, 그건 말이 안 되지. 네가 열쇠를 꽂았으니까 지금 올라가는 거야. 나는 화면만 켰어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "..."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "그 남자 이름도 올렸어. 노점 세 번째 칸. 지금 전화 스물두 통 왔더라."
					},
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "제어함 손잡이를 돌리자 광고판이 꺼졌다. 하지만 화면 아래 남은 목록은 사라지지 않았다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "껐다고 지워지는 게 아니야. 육십삼 명은 이미 스물두 개 게시판에 붙었어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "누가 시켰어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "시킨 사람은 없어. 기록 뽑는 값만 받았지. 내 위에도 열한 명이 있어."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "dax",
					"duration_ms": 500,
					"spot": [
						2,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "닥스가 골목 끝에서 걸어왔다. 손에 단말기를 들고 있었다. 화면이 계속 진동했다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "지금 스물두 통이야. 한 시간 전부터."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "닥스, 미안해."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "사과는 됐어. 이백 명 중 육십삼 명이 오늘 밤 잠 못 자. 그중 넷은 아직 전화도 못 받았어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "내가 십 년 동안 아무한테도 안 보여줬던 거야. 네 삼 분이면 될 줄 알았어?"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "되돌릴 방법 찾을게."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "되돌아가는 건 없어. 스물두 개 게시판 주인들이 다 내 전화 안 받아."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "닥스가 열쇠를 바닥에 내려놓았다. 이번엔 주지 않겠다는 얼굴이었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "칩은 내가 다시 맡을게. 너는 이제 내 이름 안 대."
					},
					"emotion": "sad"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "광고판이 내 주민번호를 여덟 자리까지 띄웠다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "너도 목록에 넣었어. 육십사 번째. 오늘 밤은 여기까지."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "내일 아침에 스물두 개 게시판 전부 신고 넣고, 관리 계정부터 뽑아."
					},
					"emotion": "angry"
				}
			]
		}
	]
} as const;
