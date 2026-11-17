export const scenario_desert_opalis_43_04 = {
	"scenario_id": "desert_opalis_43_04",
	"order": 4,
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
		},
		"amir": {
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
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "황혼빛 오아시스 제단 입구. 붉은 모래가 바람을 타고 흩날린다."
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "kasai"
				},
				{
					"emotion": "angry",
					"speaker": "kasai",
					"type": "speech",
					"content": {
						"korean": "거기까지다. 더 이상 모래시계에 모래를 채우게 둘 순 없다."
					}
				},
				{
					"content": {
						"korean": "우리는 오팔리스 성녀를 구하러 왔다."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "kasai",
					"type": "speech",
					"content": {
						"korean": "구원이라고? 성녀는 사막의 생기를 빨아들이는 괴물이다!"
					}
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"emotion": "sad",
					"content": {
						"korean": "…불길한 기운이 몸 서리치게 만든다."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"type": "direction",
					"speaker": "kasai",
					"action": "enter"
				},
				{
					"content": {
						"korean": "너희가 바치는 모래가 이 오아시스의 생명을 삼키고 있단 말이다!"
					},
					"emotion": "angry",
					"speaker": "kasai",
					"type": "speech"
				},
				{
					"content": {
						"korean": "사막 학자 아미르가 가르쳐 준 구원법이다."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "kasai",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "아미르… 그 간사한 놈의 거짓말에 놀아나는구나."
					}
				},
				{
					"speaker": "character_2",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…마른 모래 냄새가 목을 죄어온다."
					}
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "kasai",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "받침대에 모래를 쏟아붓는 순간, 사막 전체가 메말라버릴 것이다!"
					},
					"speaker": "kasai",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "진실은 제단 위에서 직접 확인하겠다."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "어리석은 자들… 수호병들이여, 제단을 사수하라!"
					},
					"emotion": "angry",
					"speaker": "kasai"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "kasai",
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "수호병의 거대한 방패 뒤편에 낯익은 붉은 가문 문양이 새겨져 있다."
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "방패 뒤에 긁혀 있는 문양… 아미르 가문의 문장이 아닌가?"
					}
				},
				{
					"emotion": "angry",
					"speaker": "kasai",
					"type": "speech",
					"content": {
						"korean": "이제야 알아보는가! 저 가문이 무슨 짓을 저질러 왔는지!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…속이 바짝바짝 타들어 간다."
					},
					"emotion": "sad",
					"speaker": "character_3"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "성녀의 굶주림을 채우는 비극을 여기서 끝내겠다!"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "길을 비켜라! 받침대에 모래를 부어야 한다!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "오아시스의 생기를 또다시 빼앗기지 않을 것이다…"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "여기서 멈출 순 없어… 진실을 확인해야 해."
					}
				}
			],
			"win_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "{random_boss}가 쓰러지자, 모래시계 받침대에 오팔 모래가 쏟아져 들어갔다."
					}
				},
				{
					"speaker": "amir",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "…결국 모래를 부으셨군요."
					},
					"speaker": "amir",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "아미르! 수호병 방패에 새겨진 가문 문양은 대체 무엇인가?"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "amir",
					"type": "speech",
					"content": {
						"korean": "용서하십시오… 제 마을을 지키기 위해 성녀의 구원법을 거짓으로 알려드렸습니다."
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "뭐라고? 전부 거짓이었다고?"
					}
				},
				{
					"content": {
						"korean": "성녀는 구원받는 것이 아닙니다. 생기를 모아 사막을 삼킬 괴물로 각성할 뿐입니다…"
					},
					"type": "speech",
					"speaker": "amir",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "은빛 모래시계가 붉고 기괴한 빛을 뿜어내기 시작했다."
					}
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"황혼빛에 젖어드는 오아시스의 붉은 제단.",
			"성녀 오팔리스를 구하기 위한 마지막 모래시계 받침대가 눈앞에 있었다.",
			"하지만 붉은 모래를 헤치고 나타난 경비병들은 칼끝을 겨누었다.",
			"거짓과 진실이 얽힌 오아시스에서, 잊혀진 자백이 기다리고 있다."
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
