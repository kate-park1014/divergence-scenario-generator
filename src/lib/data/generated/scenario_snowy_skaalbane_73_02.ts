export const scenario_snowy_skaalbane_73_02 = {
	"scenario_id": "snowy_skaalbane_73_02",
	"order": 2,
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
			"세계의 심장이 멎어가고 있었다.",
			"탑의 절규가 잦아들자, 새로운 공허가 찾아왔다.",
			"이제 탑은 따뜻한 것을 갈구한다. 산 자의 온기를.",
			"새로운 미끼가 드리워졌다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "탑의 깊은 곳, 얼어붙은 침묵이 감돌았다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "너무 조용해…."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "eira",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "예전 같지 않아. 이 기록에 따르면… 절규가 잦아들었어."
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "그게 뭔데?"
					}
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "탑이 울음을 멈춰가고 있어. 죽음이 메말라가고 있단 뜻이지."
					},
					"emotion": "sad"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "base",
					"content": {
						"korean": "봐, 얼음 줄기가 따뜻한 곳으로만 뻗어. 너희의 온기를 쫓는 거야."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "섬뜩하네."
					}
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "sad",
					"content": {
						"korean": "먹어온 죽음이… 메말라가고 있어. 그래서 다른 걸 찾는 거야. 산 자의 온기를."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "eira",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "탑은 이제 슬픔을 흉내 내. 외로움을 가장하고 다가오려 할 거야."
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "진짜 외로운 게 아니라고?"
					},
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "아니. 미끼야. 새로운 먹이를 부르는 다정함."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"emotion": "angry",
					"content": {
						"korean": "속지 않아."
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "eira",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이 룬 문양을 봐. 이 구역의 수호자는… 온기를 먹어치우는 자였어."
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"content": {
						"korean": "수호자?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "sad",
					"content": {
						"korean": "그래. 탑이 갈구하는 것을 지키는 괴물. 온기를 향해 움직이고 있어."
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 움직인다. 온기를 향해 다가온다."
					},
					"type": "speech",
					"speaker": "narrator"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "차가운 심장부, 그림자가 일렁였다."
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "…따뜻하군. 그 온기, 탐나는구나."
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "네가 탑의 수호자냐!"
					}
				},
				{
					"content": {
						"korean": "새로운 양분. 너희의 온기가 필요하다."
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "…겨우 이 정도인가. 진짜 온기는… 저 위에 있다."
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "뭐라고?"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "쓰러진 그림자. 그러나 탑의 갈구는 멈추지 않았다."
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "eira",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "이 룬 문양에 따르면… 탑은 더 강한 온기를 원하고 있어."
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "미끼는 점점 더 달콤해질 것이다."
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "얼음 줄기가 탐험대를 휘감았다. 온기를 빼앗기듯."
					}
				},
				{
					"content": {
						"korean": "약하군. 그 온기, 탑의 일부가 될 뿐이다."
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…아직 끝나지 않았어."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "그래, 다시 와라. 탑은 기다린다."
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				}
			]
		}
	]
} as const;
