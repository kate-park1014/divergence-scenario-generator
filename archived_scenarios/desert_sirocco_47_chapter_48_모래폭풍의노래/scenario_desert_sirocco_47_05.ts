export const scenario_desert_sirocco_47_05 = {
	"scenario_id": "desert_sirocco_47_05",
	"order": 5,
	"act": "climax_finale",
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
		"pool_id": "pool_SwordStorm_Sirocco_V1"
	},
	"prologue": {
		"korean": [
			"바람이 뚝 그친 폭풍의 눈 한가운데.",
			"거짓 같은 정적 속에서 수천 년의 한을 품은 모래 거인이 눈을 뜬다.",
			"위령을 위한 피리 소리는 파멸을 부르는 결투의 신호였다.",
			"오해로 얽힌 이 비극적인 결투를 이제 끝내야 한다."
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
	"epilogue": {
		"korean": [
			"놋쇠 피리가 모래 깊은 곳으로 가라앉자, 맹렬하던 모래폭풍은 수직으로 거품처럼 꺼졌다.",
			"수천 명 검객들의 벼려진 비명이 드디어 긴 잠에 들었다.",
			"아미르는 쓸쓸히 흩어지는 사막 먼지를 바라보며 오랜 그리움을 삼켰다.",
			"바람 부는 모래 골짜기에 비로소 오랫동안 잊혔던 침묵이 찾아왔다."
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
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "폭풍의 눈 한가운데에 도달했다. 거짓말처럼 바람이 멈춘 정적이 흐른다."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 정적이 오히려 더 소름 돋아."
					},
					"speaker": "character_1",
					"emotion": "angry"
				},
				{
					"action": "enter",
					"speaker": "amir",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "amir",
					"emotion": "sad",
					"content": {
						"korean": "깨달았네. 피리 소리는 영혼을 달래는 곡이 아니었어. 검객들에게 진격 명령이었던 거야."
					}
				},
				{
					"content": {
						"korean": "피리 소리가 멈추지 않는 한 결투도 끝나지 않는다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "절벽 바위에 파인 수천 개의 칼자국이 불길하게 떨리고 있다."
					}
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "amir",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "바위의 칼자국들이 피리 진동과 공명하며 잔류 검기를 모으고 있어!"
					},
					"emotion": "angry",
					"speaker": "amir",
					"type": "speech"
				},
				{
					"speaker": "character_2",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…바위 전체가 비명을 지르는 것 같아."
					}
				},
				{
					"content": {
						"korean": "피리 소리가 공명하며 검기를 폭증시키고 있다."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "발밑의 모래가 붉은 원형 선을 그리며 결계처럼 뭉쳐든다."
					}
				},
				{
					"speaker": "amir",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "amir",
					"content": {
						"korean": "이 핏빛 원은 대전쟁 당시 수천 검객이 목숨을 걸고 싸우던 결투장 경계선이다."
					}
				},
				{
					"speaker": "character_3",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "등골이 서늘해진다."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "우리가 밟고 있는 곳이 죽음의 결투장 한복판이다."
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "모래 먼지 속에서 거대한 청백색 번개 곡도가 형상을 갖춘다."
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "amir"
				},
				{
					"content": {
						"korean": "저 곡도를 봐라! 피리에 부러진 만 명의 검날이 뭉쳐진 거대한 결정체다."
					},
					"type": "speech",
					"speaker": "amir",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "저 엄청난 검기를 어떻게 받아쳐야 하지?"
					},
					"speaker": "character_4",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "피리를 사막 모래 속에 묻어 봉인해야 폭풍이 멈춘다."
					},
					"speaker": "character_any",
					"emotion": "base"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "곡도가 모래를 가르며 엄청난 폭풍을 일으켰다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "이 결투장에서 살아서 나갈 수는 없다!"
					}
				},
				{
					"content": {
						"korean": "어떻게든 피리를 모래에 묻어 봉인해야만 해."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "boss",
					"content": {
						"korean": "…이 결투의 신호는… 이제 어디로 가는가…"
					}
				},
				{
					"content": {
						"korean": "주인공은 놋쇠 피리를 사막 깊은 모래 속에 파묻었다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"spot": [
						3,
						3
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "amir"
				},
				{
					"content": {
						"korean": "수천의 넋이 마침내 잠들었군. 사막에 드디어 평화가 돌아왔어."
					},
					"emotion": "happy",
					"speaker": "amir",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "피리 소리가 멈추자 모래폭풍이 거짓말처럼 꺼졌다."
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "거인의 형상이 모래로 흩어지고, 사막에는 긴 정적만이 남았다."
					}
				}
			],
			"id": 15,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "모래 거인 검객 Sirocco가 천천히 몸을 일으켜 청백색 번개 곡도를 겨눈다."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "아직 승부가 나지 않았다. 다음 상대, 앞으로!"
					},
					"emotion": "angry",
					"speaker": "boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "수천 개의 목소리가 하나로 겹쳐 들린다."
					}
				},
				{
					"content": {
						"korean": "피리 소리를 들었다! 결투는 아직 끝나지 않았다!"
					},
					"speaker": "boss",
					"type": "speech",
					"emotion": "angry"
				}
			]
		}
	]
} as const;
