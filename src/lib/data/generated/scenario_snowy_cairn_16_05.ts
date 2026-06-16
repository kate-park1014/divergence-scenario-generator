export const scenario_snowy_cairn_16_05 = {
	"scenario_id": "snowy_cairn_16_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "snowy",
	"actors": {
		"anuk": {
			"id": "mon_8736797d-779a-4748-8633-d15c1eaf9be7",
			"name": {
				"korean": "아눅",
				"english": "Anuk",
				"japanese": "アヌーク",
				"chinese": "阿努克",
				"french": "Anuk",
				"spanish": "Anuk",
				"vietnamese": "Anuk",
				"thai": "อนุก",
				"hindi": "अनुक"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/19485274-e873-45c8-5043-f4ff65aa2a00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9a79ecfd-8cc6-4461-3790-763822522500/public"
		}
	},
	"boss": {
		"pool_id": "pool_111"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "지나쳤던 돌무덤이 또다시 길을 막았다."
					}
				},
				{
					"content": {
						"korean": "이게… 왜 다시 여기에?"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "설마… 계속 우리를 따라온 건가?"
					},
					"type": "speech",
					"speaker": "character_1"
				},
				{
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "anuk",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"content": {
						"korean": "무심코 내뱉는 말이 족쇄가 될 수 있다. 특히, 약속은."
					},
					"type": "speech",
					"speaker": "anuk"
				},
				{
					"content": {
						"korean": "약속? 우리가 서로 다짐했던 그 맹세 말인가?"
					},
					"emotion": "base",
					"speaker": "character_2",
					"type": "speech"
				}
			]
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
					"type": "direction",
					"duration_ms": 500,
					"speaker": "anuk"
				},
				{
					"content": {
						"korean": "맹세는 돌을 움직이고, 침묵은 맹세를 기억한다."
					},
					"emotion": "base",
					"speaker": "anuk",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "계속해서 우리를 쫓아오는 이유가 뭐지?"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "저것은 우리를… 지켜보고 있었다. 처음부터."
					},
					"emotion": "base",
					"speaker": "anuk",
					"type": "speech"
				},
				{
					"speaker": "character_3",
					"type": "speech",
					"content": {
						"korean": "그럼 우리가 무언가를 하길 바라는 건가?"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "바람조차 돌무덤을 비켜 흐르는 듯했다."
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이 그림자는… 해의 방향과 맞지 않아."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"speaker": "anuk",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						3
					]
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "그림자는 시선이 만드는 것. 저것은 우리를 놓치지 않을 작정이다."
					},
					"type": "speech",
					"speaker": "anuk"
				},
				{
					"type": "speech",
					"speaker": "character_4",
					"emotion": "angry",
					"content": {
						"korean": "도대체 뭘 그리 오래 지켜본단 말인가."
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"content": {
						"korean": "돌무덤 둘레의 눈발은 마치 보이지 않는 벽에 부딪힌 듯 비켜 흐른다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "설마… 이 모든 돌무덤이… 하나였다는 건가?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"speaker": "anuk",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						1,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "anuk",
					"emotion": "base",
					"content": {
						"korean": "맹세를 맺을수록, 저것은 우리에게 더 가까이 다가섰다."
					}
				},
				{
					"content": {
						"korean": "그럼 우리가 그토록 지키려던 약속이… 함정이었단 말인가?"
					},
					"emotion": "angry",
					"speaker": "character_1",
					"type": "speech"
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "맹세를 저버린 자에게… 종말뿐."
					},
					"emotion": "angry",
					"speaker": "boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…다시 일어설 거야!"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"spot": [
						3,
						3
					],
					"speaker": "anuk",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "약속은… 깨지기 쉬운 법."
					},
					"emotion": "base",
					"speaker": "anuk",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 돌무덤이 둔하게 진동했다. 차가운 푸른 룬이 일렁였다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "우리… 약속했잖아. 함께 여기까지 오기로."
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "포기하지 않겠다고, 맹세했어!"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"emotion": "base",
					"content": {
						"korean": "...드디어."
					}
				},
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "너희의 맹세가, 나를 깨웠다."
					},
					"emotion": "base"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "anuk",
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "이것은… 처음부터 약속을 듣고 있었다. 우리를 지켜보며."
					},
					"emotion": "base",
					"speaker": "anuk",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "지켜보고 있었다고? 설마, 이 모든 돌무덤이… 하나였다는 건가!"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그래. 돌무덤은 단 하나. 맹세를 먹고 너희를 따라온 존재."
					},
					"type": "speech",
					"speaker": "anuk"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "너희의 의지가, 나의 존재 이유."
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "그럼 이 그림자, 비켜가던 눈발… 전부 너 때문이었나!"
					},
					"type": "speech",
					"speaker": "character_1"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "이제, 그 맹세의 대가를 치러라."
					},
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "…계약은… 끝났지만… 대가는… 아직…"
					},
					"emotion": "sad",
					"speaker": "boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "아직 끝나지 않았어!"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"speaker": "anuk",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"emotion": "base",
					"content": {
						"korean": "약속은… 또 다른 약속을 부른다."
					},
					"type": "speech",
					"speaker": "anuk"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "침묵은 깨졌으나, 그 잔해 속에서 새로운 맹세의 그림자가 드리운다."
					},
					"emotion": "base"
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"돌무덤의 진동이 멈추자, 설원은 다시 얼어붙은 침묵 속으로 가라앉았다.",
			"약속은 지켜졌다. 그러나 그 약속은 너무 큰 대가를 치렀다.",
			"아누크는 씁쓸하게 고개를 저었다. “맹세의 무게를 알게 되었나.”",
			"침묵의 감시자는 사라졌지만, 그 시선의 잔상은 오래도록 남았다.",
			"이 모든 것이, 새로운 계약의 시작이었을까."
		]
	},
	"prologue": {
		"korean": [
			"설원의 침묵은 끝없이 이어졌다.",
			"지나쳤다 믿었던 돌무덤은, 다시 길을 막고 있었다.",
			"그것은 단 하나. 우리를 쫓아온 그림자.",
			"이제 그 침묵의 시선이, 우리를 꿰뚫는다."
		]
	}
} as const;
