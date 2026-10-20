export const scenario_modern_whisperweb_0_FIR_04 = {
	"scenario_id": "modern_whisperweb_0_FIR_04",
	"order": 4,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"kai": {
			"id": "mon_d7f29313-b8fb-49da-9a1a-01df5d13866e",
			"name": {
				"korean": "카이",
				"english": "Kai",
				"japanese": "カイ",
				"chinese": "凯",
				"french": "Kai",
				"spanish": "Kai",
				"vietnamese": "Kai",
				"thai": "ไค",
				"hindi": "काई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f10d9184-4155-4bb9-de2d-db61463f7c00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e41f8e03-08c9-4a4f-6f72-fa9342876f00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"린의 이름과 계좌 8천 개가 광고판에 올라간 밤이었다.",
			"위스퍼 웹은 옛 갱단의 암호 통신을 지금도 돌리고 있다.",
			"블랙 웹의 잔당 카이는 그 접속 기록을 갖고 있다고 했다.",
			"그는 도시 외곽 세탁소에서 위조 신분으로 숨어 살고 있었다."
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
						"korean": "도시 외곽 세탁소. 철제 셔터가 반쯤 내려와 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "kai",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "린 사진 봤어. 다음은 나지."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "블랙 웹 통신 기록, 갖고 있어?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "있어. 근데 그거 넘기면 내 가족 신분이 같이 뜨거든."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "증인 진술서부터 써. 서류 갖춰야 접수돼."
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
					"speaker": "kai",
					"duration_ms": 500,
					"spot": [
						2,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "장부 하나 줄게. 2016년 금고 출입 기록이야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "원본 확인해야 해. 접수하고 영장 내주면 봐."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "영장? 그거 며칠 걸려. 금고 위치는 매일 바뀌어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "절차 무시하면 증거가 안 남아."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "증거가 남아도 우리 가족이 죽으면 뭐 하냐고."
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
						"korean": "카이가 찢어진 장부를 펴서 탁자에 밀어 놓았다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "이 표식, 세 페이지에 한 번씩 똑같이 찍혀 있어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "블랙 웹 도장이야?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "아니. 우린 이런 거 안 썼어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "장부는 압수 물건으로 등록한다. 그다음에 봐."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "그 등록이 오늘 밤이면 늦어. 제발 좀."
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
						"korean": "새벽 3시 12분. 카이의 전화가 세 번 울리고 끊겼다."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "kai",
					"duration_ms": 400,
					"spot": [
						4,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "금고 털렸어. 서류 가방이랑 현금 3천만 원."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "영장은 오늘 아침에 나와."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "아침이면 우리 애 이름이 광고판에 떠 있어."
					},
					"emotion": "sad"
				},
				{
					"type": "direction",
					"action": "exit",
					"speaker": "kai",
					"duration_ms": 400,
					"direction": "down"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "카이는 세탁소 열쇠를 바닥에 내려놓고 걸어 나갔다."
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
						"korean": "폐쇄된 세탁소 금고실. 서버 팬 소리만 남아 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "장부는 왜 등록했어? 그 종이에 위치가 적혀 있었는데."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "카이 가족은 어디 있어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "가족은 몰라. 서류만 가져왔어. 어차피 그 종이도 네가 넘긴 거야."
					},
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "그 표식, 우리 거 아니야. 우리도 누가 찍는지 몰라."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "장부는 회수했어. 서류 가방은 어디 있어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "이미 복사됐어. 카이 애들 사진까지 같이."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "장부 마지막 페이지에 같은 표식이 네 번 더 찍혀 있었다."
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "카이한테 전해. 서류 찾으려면 광고판부터 보라고."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "카이부터 찾는다. 그리고 장부 표식 찍은 놈을 판다."
					},
					"emotion": "angry"
				}
			]
		}
	]
} as const;
