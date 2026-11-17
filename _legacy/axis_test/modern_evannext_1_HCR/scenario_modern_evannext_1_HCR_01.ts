export const scenario_modern_evannext_1_HCR_01 = {
	"scenario_id": "modern_evannext_1_HCR_01",
	"order": 1,
	"act": "intro",
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
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 황금 문들이 줄지어 늘어선 회랑이었다."
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "여기가… 그곳인가?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "lin",
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "환영해. '기회의 전당'에 온 걸."
					},
					"type": "speech",
					"emotion": "happy"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "린… 씨?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "happy",
					"speaker": "lin",
					"content": {
						"korean": "응. 다음 기회를 위한 안내자야."
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "안내? 그럼 저 문들은…"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "모두 너의 '다음' 기회로 이어져."
					},
					"emotion": "happy",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "사라졌다는 소문도 있던데."
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그건… 완벽히 준비되지 않아서야."
					},
					"speaker": "lin"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter",
					"speaker": "lin",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "자, 다른 지원자들을 봐."
					},
					"type": "speech",
					"speaker": "lin",
					"emotion": "base"
				},
				{
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "모두 다음 기회를 기다리고 있어."
					},
					"speaker": "lin"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "근데… 눈이 흐려 보여."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "…다음… 다음뿐…"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "과거는 잊어. '다음'이 중요해."
					}
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "이상해. 뭔가… 잊은 것 같아."
					},
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "등골이 서늘해졌다."
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "lin"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "이 황금 실타래를 잡고 연습해."
					},
					"type": "speech",
					"emotion": "happy"
				},
				{
					"content": {
						"korean": "…벽에 희미한 그림자."
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "환영이야. '다음'에 집중하면 돼."
					},
					"speaker": "lin"
				},
				{
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "린의 조언은 언제나 완벽해."
					},
					"speaker": "character_2"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "너무 완벽해서… 이상해."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "의심은 준비를 방해해. 믿어야 해."
					},
					"speaker": "lin",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "벽의 그림자가 미소 짓는 듯했다."
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "회랑 끝, 거대한 시험실 문이 빛나고 있었다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "direction",
					"speaker": "lin",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "첫 시험이야. 두려워 마."
					},
					"emotion": "happy"
				},
				{
					"emotion": "happy",
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "'다음'으로 가는 첫걸음이지."
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "돌아갈 수 없다는 뜻이네."
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "뒤돌아보지 마. 그게 규칙이야."
					},
					"speaker": "lin"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "규칙…."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "문이 천천히 열렸다."
					},
					"speaker": "narrator"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "실패했군. 다시… '다음'을 준비해라."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니. 다시 준비해서 돌아올 거야."
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "시험실 안에, 정체 모를 그림자가 서 있었다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "왔군. '다음'만을 바라는 자."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "당신은 뭔데."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "이 순환의… 감시자다."
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "하찮은 저항… 다음엔 굴복할 거다."
					},
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아니. 이 굴레를 끊을 거야."
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "쓰러진 그림자 뒤로, 또 다른 문이 희미하게 열렸다."
					},
					"speaker": "narrator",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"알 수 없는 통지문이 도착했다.",
			"'최고의 기회'가 당신을 기다린다고.",
			"낯선 대기실, 황금 문들 너머에는—",
			"끝없는 '다음'이 기다리고 있었다."
		]
	}
} as const;
