export const scenario_modern_evannext_1_HIR_04 = {
	"scenario_id": "modern_evannext_1_HIR_04",
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
			"또 오전 9시였다. 이번엔 네 번째 반복.",
			"오른팔의 상처가 여전히 아팠다. 지난 루프의 결과였다.",
			"린의 완벽한 조언을 따랐지만, 나는 또 '다음'을 받았다.",
			"이제 그 완벽함 뒤의 진실을 마주해야 했다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "다시, 오전 9시. 차가운 대기실."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "오른팔… 여전히 저리네."
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "lin",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "lin",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "오셨군요. 당신의 '다음'을 위한 매뉴얼입니다."
					}
				},
				{
					"content": {
						"korean": "매뉴얼? 지난번에도… '다음' 뿐이었는데."
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "이건 완벽한 지침서. 진정한 기회는 항상 다음에 있습니다."
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "매뉴얼 한구석에, 깨진 유리 파편 흔적이 보였다."
					}
				},
				{
					"content": {
						"korean": "…이게 뭐야?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "lin"
				},
				{
					"type": "speech",
					"content": {
						"korean": "'다음 라운드'를 위한 준비는, 완벽해야 합니다."
					},
					"speaker": "lin",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "(매뉴얼을 본다) 깨진 유리 자국이… 여기도 있네."
					}
				},
				{
					"speaker": "lin",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "사소한 결함일 뿐입니다. 인쇄 과정의 실수겠죠."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "사소한 결함? 카이가 박살 낸 유리 파편이랑 똑같아."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "…규정에 없는 사안입니다."
					},
					"type": "speech",
					"speaker": "lin",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그럼 카이도, 이 매뉴얼도… 다 뭔가 문제가 있다는 거잖아."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "린. 이 루프는 왜 반복되는 거야?"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "모든 실패는 준비 부족입니다. 당신의 책임이죠."
					},
					"speaker": "lin",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "매뉴얼대로 했는데도?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "규정집에 명시되어 있습니다."
					},
					"emotion": "base",
					"speaker": "lin"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "린이 펼친 규정집. 모든 실패는 '개인의 부족'이라고 쓰여 있다."
					}
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "(규정집을 본다) '개인의 부족'… 이건 정체가 아니야?"
					}
				},
				{
					"content": {
						"korean": "완벽한 질서. 그뿐입니다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "lin"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"type": "direction",
					"action": "enter",
					"speaker": "lin"
				},
				{
					"speaker": "lin",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "다음 면접은… 중요합니다. 매뉴얼대로만 하세요."
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "아니. 이번엔 안 따라."
					},
					"type": "speech"
				},
				{
					"speaker": "lin",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "그건… 규정 위반입니다. 탈락할 거예요."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "탈락? 어차피 '다음'만 있잖아."
					}
				},
				{
					"content": {
						"korean": "이 질서, 이제 내가 깰 거야."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "주인공은 찢어진 매뉴얼 조각을 바닥에 버렸다."
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
						"korean": "면접실 안. 정체 모를 그림자가 서 있었다."
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "왔군. 매뉴얼을 거부한 자여."
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "네가… 이 반복을 만들었지?"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "난 그저… '다음'의 질서를 지킬 뿐."
					}
				},
				{
					"content": {
						"korean": "그 질서가 모두를 가두고 있어! 내가 부술 거야."
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "놀랍군. 질서에서 벗어난 힘이라니."
					}
				},
				{
					"content": {
						"korean": "하지만… 이 방은 시작일 뿐. '다음'은 더 복잡하다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "또 다음이라고? 지긋지긋해!"
					}
				},
				{
					"content": {
						"korean": "다음엔… 매뉴얼을 만든 널 찾아낼 거야."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "눈앞이 흐려졌다. 익숙한 대기실이 다시 나타났다. 오전 9시였다."
					},
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "정체 모를 그림자가 주인공을 삼켰다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "준비 부족이다. '다음'은 없다."
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아니. 다음은 내가 만든다."
					}
				}
			]
		}
	]
} as const;
