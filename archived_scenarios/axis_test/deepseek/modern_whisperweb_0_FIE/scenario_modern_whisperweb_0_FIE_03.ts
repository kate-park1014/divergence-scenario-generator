export const scenario_modern_whisperweb_0_FIE_03 = {
	"scenario_id": "modern_whisperweb_0_FIE_03",
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
			"닥스의 칩을 뜯었다. 그 안에서 송출 경로 하나가 나왔다.",
			"경로 끝은 '네온 트루스'라는 탐사 보도 사이트의 기자, 린이었다.",
			"린은 소문의 출처를 6주째 추적 중이고, 제보자 40여 명의 이름을 들고 있다.",
			"그녀는 오늘 자료를 넘기지 않겠다고 답했다."
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
						"korean": "네온 트루스 사무실. 책상 위 모니터 세 대에 같은 기사가 떠 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "lin",
					"duration_ms": 500,
					"spot": [
						5,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "닥스가 보냈어? 그 사람 요즘 연락 안 받던데."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "간판에 뜨는 숫자. 출처가 어디야."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "제보자 이름 43명이 적힌 파일이야. 넘길 수 없어."
					},
					"emotion": "base"
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
						"korean": "사무실 유리창 너머, 간판 하나가 이름 두 글자를 3초 띄웠다 껐다."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "lin",
					"duration_ms": 500,
					"spot": [
						5,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "봤어? 아까 그거 우리 제보자야. 파일 안에 있는 사람."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 그 파일 나한테 줘. 내가 막을게."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "넘기면 그 43명 이름이 다 터져. 검증도 없이."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "확인 안 된 걸 뿌리는 건 폭로가 아니야. 그냥 이름 뿌리기야."
					},
					"emotion": "base"
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
						"korean": "새벽 1시 40분. 사무실 문 잠금장치가 6초 만에 열렸다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "책상 서랍. 자료는 여기 있네."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "lin",
					"duration_ms": 400,
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "…뭐 하는 거야. 그거 내 거야."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "빌린다. 이거면 소문 출처를 끊을 수 있어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "그거 열면 제보자 43명 이름이 같이 새!"
					},
					"emotion": "angry"
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
						"korean": "새벽 2시 12분. 옥외 간판 200개에 이름 43개가 10초씩 돌아가며 떴다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "43명 전부? 한 명도 안 빠지고?"
					},
					"emotion": "sad"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "lin",
					"duration_ms": 500,
					"spot": [
						6,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "제보자 한 명이 지금 병원에 있어. 주소까지 떴어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "너 때문에 6주치 취재가 통째로 날아갔어. 그리고 사람도."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "출처를 끊으려던 거야. 방법이 없었어."
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
						"korean": "네온 트루스 옥상. 서버 앞에 누군가 서 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "43명 이름, 잘 봤어. 네가 올린 거야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "넌 파일을 띄웠고."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "난 칸만 비워놨어. 채운 건 네 손이야."
					},
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "한 명은 아직 안 올렸어. 네가 제일 아끼는 그 이름."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그 명단, 어디 있어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "서버가 꺼지자 간판 200개가 한 번에 어두워졌다. 거리에서 함성 3백 명이 들렸다."
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "린한테 물어봐. 왜 널 사무실에 다시 안 들이는지."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "내일 아침, 린 사무실 서버부터 다시 연다."
					},
					"emotion": "angry"
				}
			]
		}
	]
} as const;
