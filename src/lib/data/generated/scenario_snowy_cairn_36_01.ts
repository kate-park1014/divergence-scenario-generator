export const scenario_snowy_cairn_36_01 = {
	"scenario_id": "snowy_cairn_36_01",
	"order": 1,
	"act": "intro",
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
			"얼음 미로. 그곳은 침묵으로 가득했다.",
			"갈림길마다 선택이 강요되고, 차가운 푸른빛이 모든 움직임을 지켜본다.",
			"미로는 신의를 시험하며, 출구는 오직 진실한 자에게만 열린다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "탐험대는 얼어붙은 입구에 섰다. 차가운 공기가 폐부를 찔렀다."
					}
				},
				{
					"content": {
						"korean": "여기가… 얼음 미로?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "eira",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "…이곳의 룬이 깨어났어."
					}
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "푸른빛이 번뜩이는군. 선택에 따라 신의를 채점하는 듯해."
					}
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "갈라지는 길이 눈앞에 나타났다. 끝없이 이어지는 얼음 벽."
					}
				},
				{
					"content": {
						"korean": "어디로 가야 하지? 어느 길이 맞는 거야?"
					},
					"speaker": "character_1",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "미로는 너희의 신뢰를 시험할 거야."
					}
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…그게 무슨 말이야?"
					}
				},
				{
					"content": {
						"korean": "의심은 곧 길을 막을 거고, 믿음만이 출구로 이어질 거야."
					},
					"speaker": "eira",
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"content": {
						"korean": "얼음 미궁은 깊어졌다. 숨소리마저 얼어붙는 차가움."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"spot": [
						3,
						3
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "eira"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "느껴져? 미로가 너희의 마음을 읽고 있어."
					}
				},
				{
					"content": {
						"korean": "대체 뭘 원하는 건데?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "서로를 향한 신의. 그것만이 길을 열 거야."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "eira"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "믿음이라… 쉽지 않네."
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "미로의 한가운데. 출구는 보이지 않고, 압도적인 기운이 감돌았다."
					}
				},
				{
					"speaker": "eira",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…이곳은 단순한 미로가 아니야."
					}
				},
				{
					"content": {
						"korean": "무슨 뜻이야, 에이라?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "eira",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "길을 막는 자가 있어. 너희의 신뢰를 깨뜨리려는 존재가."
					}
				},
				{
					"content": {
						"korean": "적이라는 건가?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "얼음의 파편이 흩어지고, 탐험대는 차가운 바닥에 쓰러졌다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "겨우 이 정도인가. 너희의 신의는 덧없군."
					}
				},
				{
					"content": {
						"korean": "젠장… 아직 끝나지 않았어!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira",
					"type": "direction",
					"spot": [
						3,
						3
					]
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…포기하지 마. 미로는 다시 기회를 줄 거야."
					}
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "미로의 끝. 거대한 얼음 결정 속에서 정체 모를 그림자가 모습을 드러냈다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "드디어 왔군. 내 미로를 여기까지 통과하다니."
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "네가 이 모든 걸 꾸민 거야?"
					}
				},
				{
					"content": {
						"korean": "신의를 시험하는 건 즐거운 일이지. 이제 마지막 시험이다."
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "내 앞에서, 너희의 믿음이 얼마나 견고한지 보여라!"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 너희의 신의… 제법이군."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "하지만… 진정한 시험은 이제부터 시작될 거다. 이 미로는… 너희 내부에 있을 테니."
					}
				},
				{
					"content": {
						"korean": "무슨 말을 하는 거지?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "eira",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…그의 말은 예언과 같아. 미로는 끝났지만, 갈등은 아직 끝나지 않았어."
					}
				},
				{
					"content": {
						"korean": "얼음 미로를 통과했다. 그러나 탐험대의 마음속에는 또 다른 미로가 시작되고 있었다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			]
		}
	]
} as const;
