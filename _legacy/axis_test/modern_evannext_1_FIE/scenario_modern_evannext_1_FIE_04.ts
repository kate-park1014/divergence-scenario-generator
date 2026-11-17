export const scenario_modern_evannext_1_FIE_04 = {
	"scenario_id": "modern_evannext_1_FIE_04",
	"order": 4,
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
			"반복되는 시간, 거울 속의 내 모습.",
			"나는 무한한 루프에 갇혔음을 알았다.",
			"린의 '다음 기회'는 이제 족쇄였다.",
			"이 순환을 끊고 나갈 것이다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "낡은 대기실. 문은 모두 잠겨 있었다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "여기가… 끝없는 루프인가."
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "린의 말대로는 안 돼."
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "이 문을 열어야 해."
					},
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "lin"
				},
				{
					"type": "speech",
					"content": {
						"korean": "왜 조급해해?"
					},
					"speaker": "lin",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "lin",
					"content": {
						"korean": "'다음 기회'는 언제나 열려있어."
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "이 문은… 왜 안 열려?"
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "덜컹! 굳게 잠긴 문이 흔들렸다."
					}
				},
				{
					"speaker": "lin",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "lin",
					"content": {
						"korean": "진정해. 다음을 준비해야지."
					}
				},
				{
					"content": {
						"korean": "다음은 없어. 여기 갇혔잖아."
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "아니야. 널 위한 '다음'의 과정이야."
					},
					"emotion": "base",
					"speaker": "lin",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "과정이라고? 날 가두는?"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "린 씨 조언은 항상 똑같아."
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "너무 완벽해서… 무섭네요."
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"speaker": "lin",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "lin",
					"emotion": "base",
					"content": {
						"korean": "완벽한 것이 문제니?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "'다음'을 위한 가장 빠른 길인데."
					},
					"speaker": "lin",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "여기가… 다음이 아닌 것 같아."
					}
				},
				{
					"emotion": "base",
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "걱정 마. 넌 잘하고 있어. 믿어봐."
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "이 문을… 부숴야 해."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "힘으로라도… 나가겠어."
					},
					"type": "speech"
				},
				{
					"speaker": "lin",
					"type": "direction",
					"spot": [
						4,
						2
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"speaker": "lin",
					"content": {
						"korean": "무리하지 마. 다칠 수 있어."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "규칙을 깨면… 위험해."
					},
					"emotion": "base",
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "규칙? 그런 건 없어!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "여긴… 감옥이야!"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "주인공이 문을 향해 몸을 던졌다. 쾅!"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "넌 영원히 '다음' 속에 갇힐 거다."
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "아니. 내 '다음'은 내가 만들 거야."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 루프를 반드시 끊겠어."
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "문은 부서지지 않았다. 대신…"
					}
				},
				{
					"content": {
						"korean": "문에 비친 얼굴이 일그러지며 웃었다. 기괴하게."
					},
					"speaker": "narrator",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "direction",
					"speaker": "lin",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "base",
					"content": {
						"korean": "다음."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "내 얼굴이… 왜 이래?"
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "규칙을 깼구나?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "여기선 '다음'이 중요하지."
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "겨우… 이 문을 지켰다고?"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "너의 '다음'은… 더 깊은 곳에 있다."
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "거짓말 마! 난 끝낼 거야!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "lin",
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "lin",
					"content": {
						"korean": "괜찮아. '다음 기회'는 언제나 있어."
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "린의 미소는 변함없었다. 문은 여전히 굳게 닫혀 있었다."
					}
				}
			],
			"id": 15
		}
	]
} as const;
