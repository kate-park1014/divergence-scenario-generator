export const scenario_snowy_cairn_16_04 = {
	"scenario_id": "snowy_cairn_16_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"eira": {
			"id": "mon_0c37c014-b5ca-4f2f-ad03-5d393e5b2eb1",
			"name": {
				"korean": "에이라",
				"english": "Eira",
				"japanese": "エイラ",
				"chinese": "艾拉",
				"french": "Eira",
				"spanish": "Eira",
				"vietnamese": "Eira",
				"thai": "ไอรา",
				"hindi": "ऐरा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8e2970b7-bcb1-4b1c-6bf0-93106b373500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0ca1ec09-a624-450f-054a-b98de58bdb00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"눈발이 흩날리는 설원. 그러나 그 침묵은 무겁다.",
			"지나쳤던 돌무덤이 다시 길을 막아선다. 어딘가 익숙한 그림자.",
			"에이라가 기록한다. 이 모든 것이… 되풀이되고 있음을.",
			"보이지 않는 눈이 우리를 지켜본다. 피할 수 없는 진실처럼."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "끝없이 펼쳐진 설원. 익숙한 형상의 돌무덤이 다시 나타났다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "여긴… 분명 지나온 곳인데."
					}
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "eira",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "기록과 일치합니다. 돌무덤의 배열, 룬의 형태까지."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "마치… 같은 그림자를 계속 보는 듯하군요."
					},
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						2
					],
					"type": "direction",
					"speaker": "eira",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "저 침묵이… 따라오는 것 같아."
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "돌무덤 주변만 눈발이 비켜 흐릅니다."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "기묘한 현상입니다. 마치 거대한 투명한 벽이 있는 것처럼."
					},
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "eira",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그림자가… 이상해."
					},
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "네, 기록하겠습니다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "해의 방향과 맞지 않게 그림자가 드리워져 있습니다."
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "늘 우리 쪽을 향하고 있군요. 보이지 않는… 시선처럼."
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "기분 나빠."
					},
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "eira",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "점점 더 뚜렷해집니다."
					},
					"type": "speech"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "돌무덤 둘레에서만 눈발이 비켜 흐릅니다. 마치 무언가 그 자리를 차지하고 있는 듯이."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "도망칠 곳이 없어."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "정체가 뭐야, 넌."
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "기록하겠습니다. 이 형상은… 무언가를 기억하는 듯합니다."
					}
				}
			]
		},
		{
			"win_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 보스는 흔적도 없이 사라졌다. 그러나 침묵은 여전했다."
					}
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "eira",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "…사라졌지만, 룬의 빛은 희미해지지 않습니다."
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "끝난 게 아니었어?"
					}
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "이 반복되는 기록은… 더 큰 그림자의 일부일지도 모릅니다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "기록자는 다음 장을 준비한다. 끝나지 않은 여정처럼."
					}
				}
			],
			"id": 15,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "차가운 침묵이 깨지고, 돌무덤의 그림자가 거대한 형상으로 변했다."
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "…너희의 기록이, 나의 이름을 기억하려 하는가."
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네가 이 모든 걸 꾸민 거였어?"
					}
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"type": "direction",
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "이 룬… 잊힌 전설 속의… {random_boss}."
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "기억하려는 자에게… 나는 심판을 내린다."
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "다시는… 기록될 수 없도록."
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "막을 거야."
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "차가운 그림자가 탐험대를 집어삼켰다."
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "너희의 기록은… 여기까지다."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…아직, 끝나지 않았어."
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "나를 기억하는 순간… 너희는 사라진다."
					}
				}
			]
		}
	]
} as const;
