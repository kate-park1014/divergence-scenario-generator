export const scenario_snowy_skalhorn_85_02 = {
	"scenario_id": "snowy_skalhorn_85_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"boris": {
			"id": "mon_8f41e00a-9c1b-4e66-9d7a-584cc2a9af84",
			"name": {
				"korean": "보리스",
				"english": "Boris",
				"japanese": "ボリス",
				"chinese": "鲍里斯",
				"french": "Boris",
				"spanish": "Boris",
				"vietnamese": "Boris",
				"thai": "บอริส",
				"hindi": "बोरिस"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8db2ee50-a24d-43cf-a3ec-fad83142f500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/961dfd96-9db1-42aa-a15b-82ba7d1ae700/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "뿔잔 둘레로 거대한 얼음 연회장이 펼쳐졌다. 수많은 손님들이 얼어붙은 채 앉아 있었다."
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이게… 축제인가?"
					}
				},
				{
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "boris",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "정교하게 얼어붙은 연회. 그런데 빈자리가 너무 많아."
					},
					"emotion": "base",
					"speaker": "boris"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "boris",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "여기 봐. 이 식탁. 완벽하게 준비되어 있어."
					},
					"speaker": "boris",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "누굴 기다리는 거지?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "글쎄. 너무 완벽해서 오히려 수상해."
					},
					"emotion": "base",
					"speaker": "boris"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "boris",
					"action": "enter",
					"spot": [
						3,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "곳곳에 비어 있는 자리들. 모두 새 손님을 맞을 준비가 됐어."
					},
					"emotion": "base",
					"speaker": "boris"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "혹시… 우리를 초대하는 건가?"
					}
				},
				{
					"emotion": "sad",
					"speaker": "boris",
					"type": "speech",
					"content": {
						"korean": "환대라기엔… 너무 강요하는 분위기야."
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "boris",
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "boris",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "봐. 이 자리들… 누굴 위한 거지?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "여기, 자리에 앉았다가 일어선 손님은 하나도 없어."
					},
					"speaker": "boris",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…그럼 설마."
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "boris",
					"type": "speech",
					"content": {
						"korean": "우리잖아. 이 빈자리들. 환대가 아니라 함정이야."
					}
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "차가운 얼음이 온몸을 감쌌다. 미소 짓는 손님들 곁으로."
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "어서 앉아라. 너희의 자리도 준비되어 있다."
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아직… 포기 안 해. 다시 돌아올 거야!"
					}
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "…끝이라고 생각하나? 아직 끝나지 않았다."
					},
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "무슨 소리지? 여기가 마지막이 아니라고?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "싸움은 끝났지만, 연회장의 미소는 여전히 굳어 있었다."
					}
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "연회장 가장 깊은 곳. 거대한 얼음 결정체가 빛났다."
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "어서 와라, 새로운 손님들."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "네가 이 축제를 꾸민 건가!"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그래. 영원한 축제. 너희도 곧 함께할 것이다."
					}
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"차가운 얼음 연회장. 수많은 얼굴들이 굳어 있었다.",
			"모두 웃고 있었지만, 그 미소는 끝나지 않는 공포 같았다.",
			"초대받은 손님들. 그리고 그들을 기다리는 비어 있는 자리.",
			"과연 이 환대는 누구를 위한 것일까?"
		]
	}
} as const;
