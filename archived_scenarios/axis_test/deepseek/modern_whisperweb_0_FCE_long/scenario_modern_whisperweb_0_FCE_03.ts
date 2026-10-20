export const scenario_modern_whisperweb_0_FCE_03 = {
	"scenario_id": "modern_whisperweb_0_FCE_03",
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
			"닥스의 복원 장치가 터졌다. 고객 4백 명의 이름과 계좌가 광고판에 올랐다.",
			"그 명단을 위스퍼 웹이 편집했다. '이웃도 네 비밀을 갖고 있다'는 문장을 붙여서.",
			"밤 사이 시청 홈페이지 조회수가 60만을 넘었다. 접수된 신고는 전부 같은 문장이었다.",
			"온라인 언론인 린이 오늘 밤 시청 앞에서 만나자고 했다. 발원지를 찾겠다고."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "시청 정문 앞 버스 정류장. 광고판이 십 초마다 다른 사람 이름을 띄웠다."
					}
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "lin",
					"duration_ms": 500,
					"spot": [
						3,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "base",
					"content": {
						"korean": "너지. 닥스 작업실에서 케이블 물린 사람."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "그 얘기 하러 온 거 아니야."
					}
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "angry",
					"content": {
						"korean": "나도 아니야. 근데 그 명단으로 만든 기사가 오늘 아침에 예닐곱 개 올라왔어."
					}
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "base",
					"content": {
						"korean": "제목이 전부 같아. '당신 옆집도 숨기고 있다.'"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "틀린 말은 아니잖아."
					}
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "angry",
					"content": {
						"korean": "틀린 말이야. 계좌가 마이너스인 사람이 뭘 숨겨. 그냥 가난한 거지."
					}
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
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "base",
					"content": {
						"korean": "발원지를 찾았어. 시청 기록 서버 안쪽, 폐쇄된 민원 게시판 하나."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "시청 서버에 왜 들어가."
					}
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "angry",
					"content": {
						"korean": "그 게시판에 기사 원본이 올라와. 서버 로그를 뽑아야 누가 올렸는지 나와."
					}
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "sad",
					"content": {
						"korean": "근데 내 권한으로는 안 열려. 3년 전에 내 집 주소가 광고판에 뜬 뒤로 계정이 잠겼어."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "그래서 나한테 온 거야."
					}
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "base",
					"content": {
						"korean": "너한테는 프로그램 하나 있잖아. 보안망 뚫고 로그만 빼오는 거."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "있다고 치자."
					}
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "sad",
					"content": {
						"korean": "…딱 로그만. 다른 파일은 안 건드려. 이거면 돼."
					}
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
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "시청 뒷문 앞. 린이 노트북을 열고 건물 쪽으로 안테나를 돌렸다."
					}
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "base",
					"content": {
						"korean": "민원 게시판 들어갔어. 로그 뽑는 데 40초 걸려."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "주변에 사람 있어. 서둘러."
					}
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "angry",
					"content": {
						"korean": "알아. 근데 이 프로그램, 로그 말고 다른 데도 닿고 있어."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "그건 그냥 잔여 연결이야. 무시해."
					}
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "sad",
					"content": {
						"korean": "무시하라고? 화면에 연결된 서버가 열한 개야. 응급 이송 쪽도 있어."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "로그만 뽑으면 끝나. 빨리."
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "노트북 팬 소리가 커졌다. 화면 아래 진행 막대가 68에서 멈췄다."
					}
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
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "angry",
					"content": {
						"korean": "멈춰. 지금 끊어."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "40초만 더."
					}
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "angry",
					"content": {
						"korean": "40초가 아니라 400초야. 프로그램이 서버 열한 개에 동시에 붙었어."
					}
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "sad",
					"content": {
						"korean": "이거 보안망 뚫는 게 아니라 건물 전원을 끌어내리는 거야."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "그럼 로그는."
					}
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "base",
					"content": {
						"korean": "이미 뽑았어. 30초 전에. 근데 손을 못 떼."
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "시청 건물 창문이 층별로 꺼졌다. 3층부터 1층까지 순서대로."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "…케이블 뽑아."
					}
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "sad",
					"content": {
						"korean": "지금 뽑으면 로그 파일도 같이 깨져."
					}
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "시청 지하 전산실. 서버 랙 절반이 꺼진 상태로, 켜진 랙 앞에 누군가 서 있었다."
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "그 프로그램, 어디서 난 거야. 원래 열한 개 서버에 동시에 붙게 만든 물건인데."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "네가 기사를 뿌렸어."
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "제목 스무 개 붙였어. 그중 열두 개는 어제 3만 회씩 읽혔고. 명단은 네가 뽑아준 거야."
					}
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "angry",
					"content": {
						"korean": "그 명단에 내 가족도 있어. 열여섯 번째 줄에."
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "알아. 네 기사도 잘 읽었어. 덕분에 광고 단가 올랐다."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "여기서 끝내."
					}
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "서버 끄면 뭐 해. 오늘 밤 응급 이송 시스템도 같이 꺼졌어."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "그게 무슨."
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "열한 개 중에 그거 있었어. 네 프로그램이 붙은 서버 목록에."
					}
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "sad",
					"content": {
						"korean": "…내가 말했잖아. 응급 이송 쪽도 있다고."
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "린이 노트북을 덮었다. 화면 아래에 멈춘 진행 막대가 남아 있었다."
					}
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "sad",
					"content": {
						"korean": "새벽에 구급 이송 기록 확인했어. 열 명."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "…열 명이 뭐."
					}
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "sad",
					"content": {
						"korean": "이송이 늦어서. 그중 하나는 내 이모야. 4시 20분에 전화했어."
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "린이 노트북을 가방에 넣고 건물 계단으로 걸어갔다. 뒤돌아보지 않았다."
					}
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "일어나. 서버 아직 안 꺼졌어. 남은 랙 일곱 개, 네 손으로 마저 끝내."
					}
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "angry",
					"content": {
						"korean": "다음엔 안 그래. 로그 뽑기 전에 서버 열한 개 중에 뭐가 뭔지 먼저 확인해."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "그리고 프로그램은 네가 직접 돌려. 내가 옆에서 손 뗄 타이밍 볼 거야."
					}
				}
			]
		}
	]
} as const;
