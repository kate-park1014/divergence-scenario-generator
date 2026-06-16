export const scenario_snowy_finn_70_05 = {
	"scenario_id": "snowy_finn_70_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "snowy",
	"actors": {
		"inka": {
			"id": "mon_583e945a-1e2f-428b-a251-b428f25b4052",
			"name": {
				"korean": "인카",
				"english": "Inka",
				"japanese": "インカ",
				"chinese": "因卡",
				"french": "Inka",
				"spanish": "Inka",
				"vietnamese": "Inka",
				"thai": "อินคา",
				"hindi": "इंंका"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/97f4545b-2e8a-4688-3e4e-b34bb246dd00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f27763ba-2358-4fd3-c813-0f0b59dcac00/public"
		}
	},
	"boss": {
		"pool_id": "pool_033"
	},
	"epilogue": {
		"korean": [
			"왕좌를 지키던 얼음은 녹아내렸다.",
			"그는 더 이상 추위에 떨지 않았다.",
			"하지만 정복자의 길이 끝나자, 새로운 외로움이 찾아왔다.",
			"과연, 왕은 친구를 얻었을까, 아니면 또 다른 짐을 짊어졌을까.",
			"알현실의 밤은 영원히 끝나지 않는 질문을 품고 있었다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "밤이 깊은 알현실. 왕은 옥좌에 앉아 부들부들 떨고 있었다."
					},
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "밤마다 혼자라더니… 정말이네."
					},
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						3
					],
					"speaker": "inka",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "inka",
					"content": {
						"korean": "추워 보여요. 저렇게 꽁꽁 싸매도."
					}
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						3
					],
					"action": "enter",
					"speaker": "inka",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "inka",
					"content": {
						"korean": "따뜻한 차라도 드릴까요?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "boss",
					"content": {
						"korean": "짐은… 괜찮다. 물러가라."
					}
				},
				{
					"content": {
						"korean": "저렇게 떨면서도… 곁을 내주지 않네."
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						3
					],
					"speaker": "inka",
					"duration_ms": 500
				},
				{
					"speaker": "inka",
					"content": {
						"korean": "담요 속에 몸을 숨겨도… 그 떨림이 다 보이는데."
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "추워서 그런 거 아니었어?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "inka",
					"content": {
						"korean": "추위 때문만은 아닌 것 같아요."
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "inka",
					"action": "enter",
					"spot": [
						3,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "왕은 외로워 보입니다. 친구가 필요한 거죠?"
					},
					"speaker": "inka"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "boss",
					"content": {
						"korean": "…친구 따위… 짐은 필요 없다!"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "화내는 게… 꼭 우는 것 같아."
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "정복… 만이 답이라 믿었다. 하지만…"
					},
					"speaker": "boss",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "왕은 따뜻한 손을 잡았다. 얼었던 심장이 녹아내렸다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						3
					],
					"speaker": "inka",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "이제 괜찮을 거예요."
					},
					"speaker": "inka"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "결국… 친구가 필요했던 거였어."
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "알현실의 밤은 길었다. 그러나 아침은 올 것이다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "짐은… 짐은 친구 따위 필요 없…!"
					},
					"speaker": "boss"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "왕의 어깨가 담요 속에서 가늘게 들썩였다. 추위 때문만은 아니었다."
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						3
					],
					"speaker": "inka"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "inka",
					"content": {
						"korean": "당신은… 지금도 떨고 있잖아요."
					}
				},
				{
					"content": {
						"korean": "…!"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "결국… 혼자다. 짐은… 혼자다."
					},
					"speaker": "boss",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아니야… 혼자가 아니야."
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "direction",
					"speaker": "inka",
					"action": "enter",
					"spot": [
						3,
						3
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "다시… 손을 내밀어 줄게요."
					},
					"speaker": "inka",
					"type": "speech",
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"깊어가는 밤, 알현실은 얼음처럼 차가웠다.",
			"왕은 옥좌에 앉아 겹겹의 담요 속에서 떨고 있었다.",
			"그의 떨림은 단순한 추위가 아니었다.",
			"가장 높은 곳에서, 가장 외로운 왕이 기다리고 있었다."
		]
	}
} as const;
