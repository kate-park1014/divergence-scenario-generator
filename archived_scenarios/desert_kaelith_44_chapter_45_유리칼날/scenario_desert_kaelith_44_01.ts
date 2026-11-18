export const scenario_desert_kaelith_44_01 = {
	"scenario_id": "desert_kaelith_44_01",
	"order": 1,
	"random_boss_title": {
		"korean": "도적"
	},
	"act": "intro",
	"theme": "desert",
	"actors": {
		"amir": {
			"id": "mon_0096d602-52ab-4a9c-9cc8-4ff18ed3b655",
			"name": {
				"korean": "아미르",
				"english": "Amir",
				"japanese": "アミール",
				"chinese": "阿米尔",
				"french": "Amir",
				"spanish": "Amir",
				"vietnamese": "Amir",
				"thai": "อาเมียร์",
				"hindi": "अमीर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8cd60fb0-3699-44c4-6425-a3e97eec1800/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/b644dc95-9c27-442e-6dc6-73e5550a0200/public"
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
					"speaker": "narrator",
					"content": {
						"korean": "발이 푹푹 꺼지는 이글거리는 모래 언덕."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "amir"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "저는 사막의 길안내자 아미르입니다. 오아시스까지 안전하게 안내하겠습니다."
					},
					"speaker": "amir",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "모래 속에서 붉은 유리 조각을 발견했다."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "character_1",
					"content": {
						"korean": "…바람마저 뼛속까지 뜨거워."
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "유리 조각의 날카로운 테두리에 손가락을 베였다."
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "손가락의 피가 유리 조각에 스며들자 모래 바닥이 뜨겁게 달아오르고 있다!"
					},
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"speaker": "amir",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "amir",
					"content": {
						"korean": "이 엄청난 열기는 뭐죠? 발밑의 모래가 끓어오르기 시작합니다!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…발밑이 붉게 물들고 있어."
					},
					"speaker": "character_2",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "amir",
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "amir",
					"content": {
						"korean": "모래 언덕의 열기가 점점 심해집니다! 더 늦기 전에 어서 피해야 해요!"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "열기를 뿜어내는 이 유리 조각을 챙기고 계속 전진한다."
					}
				},
				{
					"type": "direction",
					"duration_ms": 400,
					"speaker": "amir",
					"action": "exit",
					"direction": "down"
				},
				{
					"type": "speech",
					"speaker": "character_3",
					"content": {
						"korean": "…숨을 쉴 때마다 목이 타들어 가."
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "이글거리는 아지랑이 너머로 무거운 거친 발소리가 다가온다."
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "누군가 모래의 열기를 느껴서 우리를 가로막으러 오고 있다."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…공기가 짓눌리는 느낌이야."
					},
					"speaker": "character_4"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "붉게 달아오른 모래 언덕 위, 무기를 든 자가 길을 막아선다."
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "피로 사막의 마물을 부르다니! 사막을 지키기 위해 너희를 베겠다!"
					}
				},
				{
					"content": {
						"korean": "무슨 오해인지는 몰라도, 덤빈다면 맞서 싸우겠다!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…저 칼날, 살기로 가득 차 있어."
					},
					"speaker": "character_1",
					"emotion": "sad"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "사막을 위협하는 자들에게 줄 자비는 없다!"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…여기서 주저앉을 수는 없다. 다시 칼을 든다."
					},
					"speaker": "character_any"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "sad",
					"content": {
						"korean": "크윽… 피 묻은 유리를 내버려두면 사막 전체가 삼켜질 거다…"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "갑작스러운 열기 때문에 오아시스로 가던 길판이 무너져 버렸다!"
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "무너진 모래 아래로 깊은 사막의 동굴 입구가 드러났다."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "동료들과 살아남으려면 깊은 사막의 동굴로 들어갈 수밖에 없다."
					}
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "…돌아갈 길은 완전히 막혔어."
					},
					"emotion": "sad",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"이글거리는 열기가 뿜어져 나오는 붉은 모래 언덕.",
			"오아시스를 찾아 사막을 건너는 탐험대의 발걸음이 무거워진다.",
			"모래 아래 파묻힌 조각 하나가 불길한 사막의 열기를 깨운다."
		]
	}
} as const;
