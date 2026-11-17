export const scenario_modern_evannext_1_HCE_01 = {
	"scenario_id": "modern_evannext_1_HCE_01",
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
	"prologue": {
		"korean": [
			"나는 '최고의 기회'라는 알림을 받았다.",
			"낯선 대기실에 들어섰다.",
			"'린'이라는 여자가 '다음 기회'를 설명했다.",
			"그러나 나는 이 기회가 수상하게 느껴졌다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "낯선 대기실, 차가운 공기가 흘렀다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…여기가 '최고의 기회'라니."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"speaker": "lin",
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "어서 와요. 기다렸어요."
					},
					"emotion": "happy",
					"speaker": "lin",
					"type": "speech"
				},
				{
					"content": {
						"korean": "누구세요?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "난 린. 이 시스템의 안내자예요."
					},
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "곧 '다음 기회'가 시작돼요."
					},
					"emotion": "happy",
					"type": "speech",
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "…다음 기회요?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "전에 왔던 사람들은… 어디 있죠?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "대기실 안, 수많은 사람이 있었다."
					}
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "lin",
					"spot": [
						4,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "base",
					"content": {
						"korean": "이곳에선 '다음'만이 중요해요."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "모두 같은 말만 하네요. '다음'…"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "성공 공식이죠. 과거는 중요치 않아요."
					},
					"emotion": "happy",
					"type": "speech",
					"speaker": "lin"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이 사람들은… 뭘 잊은 걸까요?"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…집중하는 것 뿐이에요."
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "대기실은 완벽히 고요했다. 너무 조용했다."
					},
					"emotion": "base"
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
					"content": {
						"korean": "'다음 기회'를 위한 최적의 상태예요."
					},
					"emotion": "happy",
					"type": "speech",
					"speaker": "lin"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "완벽…하다고요?"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이 시스템, 뭔가 이상해요."
					},
					"speaker": "character_any"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "걱정 마요. 모든 건 '다음'을 위한 과정이니까요."
					}
				},
				{
					"content": {
						"korean": "당신은 잘 할 수 있을 거예요."
					},
					"emotion": "happy",
					"type": "speech",
					"speaker": "lin"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…그 말을 믿어야 하나."
					},
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "복도 끝, 첫 시험의 문이 열렸다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"speaker": "lin",
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "모든 게… 함정 같아요."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "규칙을 어기면… 돌이킬 수 없어요."
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "당신도 '다음'을 준비해야 해요."
					},
					"speaker": "lin"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "아니, 난 달라."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 '다음'의 끝을 보겠어."
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "나는 문 안으로 들어섰다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"emotion": "angry",
					"content": {
						"korean": "너의 '다음'은 없다. 여기서 끝이다."
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "아니… 난 아직 할 일이 있어."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "처음부터 다시 시작할 거야."
					},
					"emotion": "angry"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "시험장 안, 정체 모를 존재가 서 있었다."
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "환영한다. '다음'에 도전하는 자."
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "네가 '다음'을 지키는 존재인가?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "너의 '다음'은 여기서 끝난다."
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그럴 순 없어!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "겨우 이것으론… 아무것도 변하지 않아."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "'다음'은 영원히 반복된다."
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "뭐라고? 무슨 소리야?"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "승리했지만, 더 큰 의문이 남았다."
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "나는 다음 복도로 향했다."
					}
				}
			]
		}
	]
} as const;
