export const scenario_desert_zahrun_48_03 = {
	"scenario_id": "desert_zahrun_48_03",
	"order": 3,
	"random_boss_title": {
		"korean": "검투사"
	},
	"act": "rising",
	"theme": "desert",
	"actors": {
		"kasai": {
			"id": "mon_8050c8ca-5715-4e7d-895e-5bc029d55fcf",
			"name": {
				"korean": "카사이",
				"english": "Kasai",
				"japanese": "カサイ",
				"chinese": "卡赛",
				"french": "Kasai",
				"spanish": "Kasai",
				"vietnamese": "Kasai",
				"thai": "คาไซ",
				"hindi": "कसाई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/c9ddd314-36fb-4636-cbe6-35d8f6f98900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a00fae8a-8a27-4895-d62c-a0c88456ff00/public"
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
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "바람 골짜기의 깎아지른 절벽 사이로 매서운 모래바람이 불어온다."
					}
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "kasai",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "kasai",
					"emotion": "base",
					"content": {
						"korean": "나는 바람 골짜기의 용병 카사이다. 사막을 빠져나가려는 무리를 돕고 있지."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "동료와 함께 이 사막을 빠져나갈 길을 찾아야 한다."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…바람 소리가 꼭 짐승 울음 같네."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_1"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "kasai"
				},
				{
					"speaker": "kasai",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "너희가 품은 녹슨 검에서 죽은 자의 기운이 뿜어져 나오는군."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "이 검의 울음 때문에 추격자들이 계속 쫓아오는 건가?"
					}
				},
				{
					"speaker": "kasai",
					"type": "speech",
					"content": {
						"korean": "죽은 자의 기운이 밴 검을 사막 모래 깊숙이 묻어주어야 울음이 멈추고 추적이 끝난다."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "골짜기를 넘어가며 적당한 모래 땅을 찾아 묻도록 하자."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…손끝에서 차가운 기운이 떨어지지 않아."
					},
					"type": "speech",
					"speaker": "character_2"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "바람을 피해 들어선 커다란 바위 아래 모래판이 파여 있다."
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "바위 밑 모래에 찍힌 선명한 낙타 해골 가면 자국을 확인했다."
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "누군가 최근에 깊은 인장을 찍고 지나간 흔적이다."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…기분 나쁜 형상이야."
					},
					"type": "speech",
					"speaker": "character_3"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "협곡의 좁은 틈새 너머로 묵직한 쇠사슬 끌리는 소리가 울린다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "바람 소리 틈으로 누군가 거대한 무기를 쥐고 다가오는 기척이 느껴진다."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "…공기가 순식간에 무거워졌어."
					},
					"emotion": "sad",
					"speaker": "character_4",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "바람 골짜기 출구 앞, 거대한 검을 쥔 자가 길을 막아선다."
					},
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "내게 물을 내주고 목숨을 살려준 친절한 상인에게 은혜를 입었다. 그분의 길을 방해하게 둘 순 없다!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "우리는 사막을 빠져나가야 한다. 길을 비켜라!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "…살기가 온몸을 조여온다."
					},
					"emotion": "sad"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "상인의 은혜를 갚기 전엔 아무도 이 골짜기를 지날 수 없다."
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "…여기서 무릎 꿇을 수는 없다. 다시 전열을 가다듬자."
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "그 상인은 사막의 검객들에게 물을 내주며 은혜를 베풀었지… 너희도 추적을 피하진 못할 거다."
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "무슨 이유든 우리 길을 막는다면 모두 뚫고 가겠다."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "검투사가 쓰러지자 골짜기를 휘감던 거센 모래바람이 잠시 그쳤다."
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "kasai",
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "kasai",
					"emotion": "base",
					"content": {
						"korean": "탈출구를 찾으려면 이제 폐허가 된 제단으로 향해야 한다."
					}
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"바람 골짜기는 사막의 칼바람이 거세게 휘몰아치는 위험한 길목이다.",
			"품에 품은 녹슨 검은 끊임없이 으스스한 울음을 울어댄다.",
			"동료를 구하고 사막을 빠져나가려면 이 협곡을 무사히 지나야 한다."
		]
	}
} as const;
