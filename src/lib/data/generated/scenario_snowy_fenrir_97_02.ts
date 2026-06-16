export const scenario_snowy_fenrir_97_02 = {
	"scenario_id": "snowy_fenrir_97_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"glace": {
			"id": "mon_d0b542b9-aea9-405d-8ee2-4936516a041a",
			"name": {
				"korean": "글라세",
				"english": "Glace",
				"japanese": "グラース",
				"chinese": "格拉斯",
				"french": "Glace",
				"spanish": "Glace",
				"vietnamese": "Gla-xê",
				"thai": "กลาซ",
				"hindi": "ग्लेस"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/81de374f-3422-482e-01ee-dc973da70500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/ef269701-044a-42c5-f7b7-760e9c92a500/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"늑대는 쓰러졌다. 결코 채울 수 없는 허기를 품은 채.",
			"그러나 잠시였다. 텅 빈 공허는 여전히 모든 것을 끌어당겼다.",
			"사체들이 다시 꿈틀대기 시작했다. 굶주림은, 멈추지 않았다.",
			"끝을 직시하는 자, 글라세. 그녀는 알고 있었다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "쓰러진 {random_boss}의 그림자가 설원을 뒤덮었다."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "끝난 줄 알았는데…"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "glace",
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "glace",
					"content": {
						"korean": "…아니. 아직 멀었어."
					}
				},
				{
					"content": {
						"korean": "글라세?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "텅 빈 공허는, 계속해서 채워지려 할 거야."
					},
					"speaker": "glace"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "glace",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						3
					]
				},
				{
					"speaker": "glace",
					"content": {
						"korean": "봐. 저 사체들."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "시체들 말이야?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "늑대 쪽으로 미세하게 움직이고 있어."
					},
					"speaker": "glace",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "설마…"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "glace",
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "쓰러뜨려도… 다시 일어날 거야."
					},
					"speaker": "glace"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야?"
					}
				},
				{
					"content": {
						"korean": "공허는 죽지 않아. 단지 형태를 바꿀 뿐."
					},
					"speaker": "glace",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그럼 우린… 뭘 해야 하는 거야?"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그 끝없는 굶주림과, 맞설 뿐."
					},
					"speaker": "glace"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "glace",
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "이 굶주림은, 멈출 수 없어."
					},
					"speaker": "glace",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "그래도 계속 싸울 거야."
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "glace",
					"content": {
						"korean": "그래. 나도 함께 할게."
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "함께라고?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 공허의 끝을, 너희와 함께 직시할 거야."
					},
					"speaker": "glace"
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "…결국, 너희도 채워지지 않는 공허에 잠길 뿐."
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…아직 끝나지 않았어."
					}
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 다시 솟아올랐다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…더 많은 것을, 원해."
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "또 다시!"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "glace",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						3
					]
				},
				{
					"speaker": "glace",
					"content": {
						"korean": "저건, 너희의 공허가 아냐."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "glace",
					"content": {
						"korean": "멈출 수 없는 굶주림 그 자체."
					}
				},
				{
					"type": "direction",
					"speaker": "glace",
					"action": "exit",
					"duration_ms": 400
				},
				{
					"speaker": "glace",
					"content": {
						"korean": "난 그저 지켜볼 뿐."
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "…끝나지 않아. 너희의 굶주림도…"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "우리는 달라!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "다시 쓰러진 {random_boss}. 그러나 설원의 공허는 짙어졌다."
					}
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "glace",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "glace",
					"content": {
						"korean": "…봐. 또 다른 그림자가…"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "끝은 보이지 않았다."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			]
		}
	]
} as const;
