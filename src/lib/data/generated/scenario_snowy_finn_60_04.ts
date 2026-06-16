export const scenario_snowy_finn_60_04 = {
	"scenario_id": "snowy_finn_60_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"frost": {
			"id": "mon_942bca3b-33e7-4b14-98e5-ec1e2dc78d5b",
			"name": {
				"korean": "서리",
				"english": "Frost",
				"japanese": "霜",
				"chinese": "霜",
				"french": "Givre",
				"spanish": "Escarcha",
				"vietnamese": "Băng Giá",
				"thai": "น้ำแข็ง",
				"hindi": "पाला"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0a8c2f92-0cf9-413d-0b33-8e0204caae00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/df60b327-4cc2-435b-67e0-cffb4c319900/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"끝없는 한기 속, 왕의 골방 벽에는",
			"잊혀진 꿈이 그려진 지도가 걸려 있었다.",
			"따뜻한 남쪽을 향하던 길은 끊겼고,",
			"그곳에 멈춰 선 작은 발자국.",
			"추위 속에 갇혀버린 쓸쓸한 이야기."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "frost"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…이 한기, 심상치 않군."
					},
					"speaker": "frost",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "벽에 지도가… 남쪽으로 가는 길이네요."
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "frost",
					"type": "speech",
					"content": {
						"korean": "따뜻한 곳을 찾아 떠나려 했나… 여긴 너무 추우니."
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "frost",
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "…간절함이 느껴져. 저 끝에 닿고 싶었겠지."
					},
					"type": "speech",
					"speaker": "frost",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "발자국이 여기서 멈췄어요. 길이 끊겼고."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "frost",
					"content": {
						"korean": "이 차가운 공기처럼… 모든 게 멈춰버렸군."
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "frost",
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "frost",
					"content": {
						"korean": "추위가 무서워 떠나려다… 오히려 추위에 갇혔구나."
					},
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "가고 싶었던 곳과 정반대의 삶을 살았던 걸까요."
					}
				},
				{
					"content": {
						"korean": "…가장 두려워하는 것에 붙잡힌 채로."
					},
					"speaker": "frost",
					"type": "speech",
					"emotion": "sad"
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
					"type": "direction",
					"duration_ms": 500,
					"speaker": "frost"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이 지도가… 그 쓸쓸함을 품고 있군."
					},
					"speaker": "frost",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "발자국은 더 이상 나아가지 못하고 멈췄어요."
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "그는 여기서 멈춰 서서… 무엇을 보았을까."
					},
					"type": "speech",
					"speaker": "frost"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "어둠 속에서 거대한 그림자가 나타났다. 지도를 가로막았다."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…더 이상 알려고 하지 마라."
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "{random_boss}… 너도 길을 잃은 자인가."
					},
					"speaker": "frost",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "길을 막아선다고 진실이 사라지는 건 아니야."
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "…따뜻한 곳… 나도 가고 싶었을 뿐인데."
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"speaker": "frost",
					"type": "speech",
					"content": {
						"korean": "결국, 이곳에 갇힌 채로… 영원히 얼어붙는구나."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그의 쓸쓸한 이야기는… 계속된다."
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "멈춰선 발자국. 그리고 다음 길로 향하는 이들의 발걸음."
					},
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "angry",
					"content": {
						"korean": "차가운 현실에서… 도망칠 수 없다."
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…멈추지 않아. 반드시 끝을 볼 거야."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"speaker": "frost",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "base",
					"speaker": "frost",
					"type": "speech",
					"content": {
						"korean": "추위가 이들을 멈추게 할 수는 없을 것이다."
					}
				}
			],
			"id": 15
		}
	]
} as const;
