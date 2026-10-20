export const scenario_modern_whisperweb_0_FCR_03 = {
	"scenario_id": "modern_whisperweb_0_FCR_03",
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
			"닥스 사무실에서 랙 전원이 다 내려갔다. 대신 212명 이름이 광고판에 걸렸다.",
			"그 밤부터 시내 병원에 기억을 잃은 사람이 늘었다. 잠긴 문 뒤의 눈 이야기도 돈다.",
			"기자 린이 그 괴담을 취재하고 있다. 발행 전 원고 세 편을 확보했다.",
			"오늘 목표는 린의 원고를 공식 발표 전까지 막는 것."
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
						"korean": "인쇄소 2층. 편집국 책상 위에 원고 세 부가 놓여 있었다."
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
						3
					]
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "출입금지라 붙였는데. 어떻게 들어왔어요."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그 원고, 오늘 내보내면 안 돼."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "취재한 사람이 나예요. 왜요?"
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
					"duration_ms": 500,
					"spot": [
						3,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "이름 212명, 병원 기록까지 다 받았어요."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그거 내보내면 사람들이 겁에 질려."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "겁을 숨기면 더 죽어요. 피해자 가족이 먼저 찾아왔어요."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "모니터 옆면에 4471이 적힌 메모지가 붙어 있었다."
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
					"duration_ms": 500,
					"spot": [
						3,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "제보자가 병원 간호사예요. 환자가 하루 30명씩 늘어요."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그 숫자까지 쓰면 도시가 뒤집혀."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "뒤집히게 두면 대피할 시간이 생겨요."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "정확한 날짜와 장소를 발표 전에 흘리면 안 돼."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "누가 그걸 정해요. 당신이요?"
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
						"korean": "린의 노트북 화면에서 발행 버튼이 결제창 다음 칸에 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "노트북 내려놔. 송출 서버부터 끊을 거야."
					},
					"emotion": "angry"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "lin",
					"duration_ms": 400,
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "내 손목 잡으면 그건 폭행이에요. 기사에 써요."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "써. 대신 지금은 못 나가."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "린의 노트북이 바닥에 부딪혀 화면이 꺼졌다."
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
						"korean": "송출실 문 앞에 누군가 서 있었다. 손에 마스터 키를 쥐고."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "기사 막아줘서 고마워. 대피 명단이 반으로 줄었어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "키 놔."
					},
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "네가 원고를 묶은 사이, 2만 4천 명 이사 못 갔어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…숫자로 말하지 마."
					},
					"emotion": "angry"
				},
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
					"content": {
						"korean": "그 기사, 오늘 밤에 올릴게요. 이번엔 못 막아요."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "린이 부서진 노트북을 들고 계단을 내려갔다."
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "마스터 키는 내 주머니에 있어. 내일 아침에 다시 와."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "린, 발행 서버 로그부터 뽑아."
					},
					"emotion": "angry"
				}
			]
		}
	]
} as const;
