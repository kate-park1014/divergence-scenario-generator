export const scenario_desert_aserah_41_02 = {
	"scenario_id": "desert_aserah_41_02",
	"order": 2,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"dune": {
			"id": "mon_fc976b75-f009-4bf2-b660-a3053c95d668",
			"name": {
				"korean": "듄",
				"english": "Dune",
				"japanese": "デューン",
				"chinese": "沙丘",
				"french": "Dune",
				"spanish": "Dune",
				"vietnamese": "Dune",
				"thai": "ดูน",
				"hindi": "ड्यून"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/7568ec11-0329-44b4-740a-71b25ef62400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/ba7095b5-0d99-40bd-1155-b57701c00f00/public"
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
					"type": "speech",
					"content": {
						"korean": "동굴 입구의 붉은 모래 위에 누군가 피로 쓴 글씨가 선명하다."
					},
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "모래 위에 피로 적힌 경고문이 남아있어."
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…동굴 안쪽에서 불길한 피비린내가 풍겨온다."
					},
					"speaker": "character_1",
					"emotion": "base"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "dune"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "dune",
					"content": {
						"korean": "발걸음을 멈춰라. 그 모래 위의 피는 거울이 파놓은 덫이다."
					}
				},
				{
					"content": {
						"korean": "핏빛 글씨가 거울이 있는 동굴 심층부를 가리키고 있군."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
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
					"emotion": "happy",
					"type": "speech",
					"speaker": "amir",
					"content": {
						"korean": "걱정 마라. 거울의 피를 닦아내야 동굴의 결계가 열린다."
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아미르, 네 칼집에 박힌 성검 파편 조각은 대체 뭐지?"
					}
				},
				{
					"emotion": "base",
					"speaker": "amir",
					"content": {
						"korean": "이건 사막을 여행하며 주운 장식일 뿐이다. 어서 움직이자."
					},
					"type": "speech"
				},
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "dune"
				},
				{
					"content": {
						"korean": "거짓말에 속지 마라! 피를 바를수록 동굴 전체가 굳어갈 뿐이다."
					},
					"speaker": "dune",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_2",
					"content": {
						"korean": "…누구의 말을 믿어야 할지 점점 혼란스럽다."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "동굴 구석에 통째로 굳어버린 유리 조각상들이 서 있다."
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "유리 조각상들 가슴마다 거울과 똑같은 붉은 흔적이 굳어있어."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"spot": [
						3,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "dune"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "dune",
					"content": {
						"korean": "거울에 피를 닦은 자들의 참혹한 마지막 모습이다."
					}
				},
				{
					"content": {
						"korean": "피를 닦아낸 대가가 몸이 오팔로 굳는 비극이었군."
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…온몸의 피가 차갑게 식어 내리는 기분이야."
					},
					"speaker": "character_3"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "random_boss",
					"spot": [
						4,
						2
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "검객의 무지함에 현혹되지 마라! 거울에 피를 바르는 것만이 구원이다!"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "dune",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"speaker": "dune",
					"content": {
						"korean": "더는 방관하지 않겠다! 칼날 피를 거울에 닦지 못하게 물리적으로 막겠다!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "듄이 검을 뽑아 거울 앞을 가로막아섰어."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "광신도의 부추김과 듄의 경고 사이에서 갈등이 극에 달한다."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 자들아, {random_boss}의 뜻을 저버리지 마라! 피를 바쳐라!"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "광신도를 쓰러뜨리고 이 동굴의 진실을 끝까지 확인하겠다."
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "…되돌릴 수 없는 전투가 시작되는군."
					},
					"speaker": "character_4",
					"emotion": "base",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "스스로 피를 바치지 않는 자에게 이 사막의 구원은 없다!"
					},
					"type": "speech",
					"emotion": "happy"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "여기서 무릎 꿇을 수는 없다. 다시 일어나 싸워야 해."
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 결국 피를… 거울에 바르고 말리라…"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "dune",
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "안 돼… 광신도의 꾐에 넘어가 결국 거울에 피를 닦고 말았구나."
					},
					"speaker": "dune",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "거울이 붉게 반응하며 동굴 바닥의 모래가 보석 가루로 변해가."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "속임수에 빠져 피를 닦자 사막의 타락은 한층 더 깊어졌다."
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"칼날 동굴의 어둠 속, 붉은 모래 위에는 서늘한 핏빛 글씨가 새겨져 있었다.",
			"방랑 검객 듄은 붉은 오팔 거울에 피를 닦는 행위의 위험성을 경고한다.",
			"그러나 동굴 광신도의 간교한 부추김은 탐험대의 의심을 뒤흔든다.",
			"기만과 갈등 속에서, 사막을 타락시킬 선택의 시간이 다가오고 있었다."
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
