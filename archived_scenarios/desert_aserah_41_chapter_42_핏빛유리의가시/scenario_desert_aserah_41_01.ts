export const scenario_desert_aserah_41_01 = {
	"scenario_id": "desert_aserah_41_01",
	"order": 1,
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
	"prologue": {
		"korean": [
			"타오르는 붉은 모래와 유리 칼날의 잔혹한 사막.",
			"사막 안내인 아미르가 손에 붉은 오팔 거울을 쥐여주었다.",
			"사막의 여신을 구하려면 붉은 오팔 거울에 칼날의 피를 닦아야 한다고 했다.",
			"그러나 음산한 모래바람 속에서 기괴한 공포가 불길하게 일렁이고 있었다."
		],
		"english": [],
		"japanese": [],
		"chinese": [],
		"french": [],
		"spanish": [],
		"vietnamese": [],
		"thai": [],
		"hindi": []
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "amir",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "이 붉은 오팔 거울을 가지게. 칼날의 피를 거울에 닦아야 여신을 구할 수 있네."
					},
					"speaker": "amir",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_1",
					"content": {
						"korean": "…바람에 섞인 피 비린내가 뼛속까지 스며드는군."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "거울에 피가 닿을 때마다 바닥의 뼈가 유리로 응고되고 있어."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "의심하지 말게. 사막의 결계가 해제되며 나타나는 자연스러운 현상이니."
					},
					"type": "speech",
					"speaker": "amir",
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "amir",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "거울 파편을 보게. 거기에 오래된 글귀가 새겨져 있지."
					},
					"emotion": "base",
					"speaker": "amir"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "거울 파편의 글귀에 사막의 여신을 고통에서 해방하라는 문장이 적혀 있군."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_3",
					"content": {
						"korean": "…글자가 마치 핏빛처럼 섬뜩하게 일렁이네."
					}
				},
				{
					"content": {
						"korean": "서둘러야 하네. 거울에 피를 닦아 붉은 오팔의 힘을 완성해야 해."
					},
					"type": "speech",
					"speaker": "amir",
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "amir",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "amir",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "앞으로 사막의 방해꾼들이 나타나 거울을 건드리지 말라고 선동할 걸세."
					}
				},
				{
					"content": {
						"korean": "누군가 거울을 건드리지 말라 경고해도 아미르의 안내대로 전진해야겠군."
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "맞네. 경비병들의 거짓 경고에 혹해 멈추면 여신도 우리도 끝장이야."
					},
					"speaker": "amir",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…발밑의 모래가 단단한 보석 가루로 변해 흩날린다."
					},
					"emotion": "base",
					"speaker": "character_4"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "오아시스 입구에 다다르자, 음산한 기운이 정면을 막아서서 퍼진다."
					}
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "amir",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"emotion": "angry",
					"speaker": "amir",
					"type": "speech",
					"content": {
						"korean": "오아시스 경비병이 거울을 빼앗으려 드는군. 날 순순히 통과시켜 주지 않을 걸세."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "경비병의 저지를 뚫고 오팔 거울의 피를 계속 닦아내야만 해."
					}
				},
				{
					"speaker": "character_2",
					"emotion": "sad",
					"content": {
						"korean": "…되돌아가기엔 이미 너무 먼 길을 걸어왔어."
					},
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "멈춰라! 그 붉은 오팔 거울에 칼날 피를 닦지 마라!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "오아시스 경비병이 무기를 거두지 않고 우리를 가로막는다."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "거울을 건드리는 자는 이 사막 전체를 끔찍한 비극으로 물들일 뿐이다!"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "어리석은 자들... 오팔 거울을 건드린 대가를 치러라."
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…하지만 사막의 여신을 구하려면 여기서 멈출 수 없어."
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "어리석다... 핏빛 거울이 온 사막을 굳게 만들 것임을... 왜 알지 못하는가..."
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "경비병은 쓰러졌지만, 그가 남긴 섬뜩한 경고가 귓가를 맴돈다."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "핏빛 거울 위에 불길한 오팔빛이 더욱 짙게 감돌기 시작했다."
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			]
		}
	]
} as const;
