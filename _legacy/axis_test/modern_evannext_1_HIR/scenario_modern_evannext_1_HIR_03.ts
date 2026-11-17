export const scenario_modern_evannext_1_HIR_03 = {
	"scenario_id": "modern_evannext_1_HIR_03",
	"order": 3,
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
		},
		"lin": {
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
					"content": {
						"korean": "다시, 오전 9시. 차가운 대기실."
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "…오른팔이. 왜 이렇게 아프지."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"speaker": "kai",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "다음… 다음 기회…!"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "누구야 저 소리."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "카이라는 남자가 바닥에 쓰러져 발버둥치고 있었다."
					},
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "젠장. 또 이런 식이야?"
					}
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "kai",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "다음… 다음은 어디야!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "카이. 진정해."
					}
				},
				{
					"speaker": "kai",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "나는… 다음을 준비했어! 완벽하게!"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "하지만 저 상태론… 안 될 거야."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "린을 찾아야겠어. 면담 차례를…"
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "lin"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "린. 저기 카이라는 분…."
					}
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "규정은 아시죠? 면담 차례는 엄격합니다."
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "좀 위험해 보여서요."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "모든 실패는 개인의 준비 부족입니다. 규정 위반은 안 됩니다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "결국 내 요청은… 카이를 무시하는 거였나."
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "kai",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "린! 당신! 나를 속였어!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "안 돼, 카이!"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "카이가 대기실 유리 벽에 머리를 박았다."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "유리가 깨지며 파편이 사방으로 튀었다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "크윽… 내 오른팔!"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "날카로운 파편이 오른팔을 깊게 베었다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "면접실 안, 정체 모를 그림자가 기다리고 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "왔군. 상처 입은 채로."
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "네가… 이 모든 걸 꾸민 거야?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "난 그저… '다음'을 집행할 뿐."
					},
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "angry",
					"content": {
						"korean": "준비가 부족했군. 다음 기회에, 더 큰 고통을 느껴라."
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "크윽… 이번엔 반드시… 깨부술 거야."
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "놀랍군. 깨진 몸으로도 여기까지."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "하지만… 다음 루프에서도 이 상처는 남을 것이다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…젠장. 또 반복이야?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "눈앞이 흐려졌다. 오른팔의 통증이 선명했다. 다시, 오전 9시."
					},
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"또 오전 9시였다. 세 번째 반복되는 아침.",
			"오른팔이 지독하게 저려왔다. 깨진 유리 파편 때문인가.",
			"모두가 '다음'을 외치는 이 지옥 같은 대기실에서,",
			"이번엔 누군가 '다음'을 기다리다 부서지고 있었다."
		]
	}
} as const;
