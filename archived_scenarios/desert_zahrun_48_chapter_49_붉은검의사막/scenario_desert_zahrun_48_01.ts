export const scenario_desert_zahrun_48_01 = {
	"scenario_id": "desert_zahrun_48_01",
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "붉은 모래바람 너머로 작고 메마른 오아시스가 나타났다."
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "오아시스 바닥에 검은 그림자 자국이 짙게 새겨진 황동 물병이 굴러다니고 있어."
					}
				},
				{
					"speaker": "character_1",
					"emotion": "sad",
					"content": {
						"korean": "목이 너무 타들어 가... 당장이라도 물을 마시고 싶어."
					},
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"speaker": "amir",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "amir",
					"content": {
						"korean": "멈추게. 그 오아시스의 물과 모래에 묻힌 황동 방울은 험난한 재앙의 신호라네."
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "amir",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "사막의 헛된 유혹에 빠지면 이 무덤 같은 땅을 절대 빠져나가지 못해."
					},
					"speaker": "amir"
				},
				{
					"content": {
						"korean": "하지만 더는 참을 수 없어. 이 황동 물병의 물을 딱 한 모금만 마셔야겠어."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "손이 저절로 물병으로 향하잖아..."
					},
					"speaker": "character_2"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "벌컥벌컥 마신 순간, 이상한 서늘함이 온몸을 감쌌다."
					},
					"type": "speech"
				},
				{
					"action": "enter",
					"speaker": "amir",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "크아악! 내... 내 발밑의 그림자가!"
					},
					"speaker": "amir"
				},
				{
					"content": {
						"korean": "아미르의 그림자가 검은 연기로 변해 땅속으로 스며들고 있어!"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "말도 안 돼... 내 눈으로 보고도 믿기지 않아."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_3"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "amir",
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "amir",
					"content": {
						"korean": "그 황동 물병... 마실 때마다 누군가의 그림자를 빼앗는 주술이 걸려 있어..."
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "내가 물을 마신 탓에 아미르의 그림자가 빼앗긴 거구나."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이 등골 서늘한 주술의 정체는 대체 뭐지?"
					},
					"speaker": "character_4"
				},
				{
					"content": {
						"korean": "그림자를 삼킨 어둠의 기운이 모래 언덕 너머에서 다가온다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "크아악! 그림자의 힘이 약해지는구나... 하지만 사막의 주인은 널 지켜보고 있다!"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "적은 무너졌지만, 여전히 황동 물병의 수수께끼는 풀리지 않았어."
					}
				},
				{
					"speaker": "amir",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그림자를 잃고 겨우 숨만 쉬는 아미르를 두고, 더 깊은 사막으로 나아가야 한다."
					},
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "모래바람을 가르며 기이한 형체의 수호자가 길을 막아섰다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "어리석은 나그네여, 사막의 주율을 어기고 그림자를 바친 대가를 치러라!"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "빼앗긴 아미르의 그림자를 되찾기 위해서라도 널 넘어서겠다!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "모래 파도가 탐험대를 가볍게 덮쳐 눌렀다."
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "크윽... 이대로 그림자의 주술에 굴복할 수는 없어!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "네놈들의 그림자도 결국 사막의 오아시스 아래 매몰될 것이다."
					},
					"speaker": "random_boss",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"붉은 모래와 주인을 잃은 검들이 뒹구는 붉은 사막.",
			"목을 옥죄는 극심한 갈증 속에 타들어가는 오아시스에 도달했다.",
			"그곳에서 마주친 안내인은 모래 속 황동 방울을 가리키며 경고했다.",
			"그리고 마신 한 모금의 물이, 생각지도 못한 비극의 시작이었다."
		],
		"english": [],
		"japanese": [],
		"chinese": [],
		"french": [],
		"spanish": [],
		"vietnamese": [],
		"thai": [],
		"hindi": []
	}
} as const;
