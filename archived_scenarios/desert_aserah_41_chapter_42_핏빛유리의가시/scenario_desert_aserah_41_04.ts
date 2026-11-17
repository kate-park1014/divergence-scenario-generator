export const scenario_desert_aserah_41_04 = {
	"scenario_id": "desert_aserah_41_04",
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
	"prologue": {
		"korean": [
			"피로 물든 칼날 제단에 오팔의 붉은 빛이 일렁인다.",
			"제단 파수꾼의 횃불이 거울을 위협하지만, 집행관의 목소리가 귓가를 파고든다.",
			"피를 닦아야만 정령의 구원이 찾아온다는 달콤한 선동.",
			"결국 손에 쥔 붉은 오팔 거울 위로 피가 문질러진다."
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
			"id": 1,
			"dialogue": [
				{
					"speaker": "kasai",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "제단 중앙에 피로 물든 붉은 검집이 떨어져 있다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "피 냄새가 아직 짙어. 검집에서 강한 기운이 흘러나온다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…살기에 소름이 돋는다."
					},
					"speaker": "character_1",
					"emotion": "angry"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "kasai",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "angry",
					"speaker": "kasai",
					"content": {
						"korean": "멈춰라! 거울의 피를 닦으면 피의 마신이 눈뜬다!"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "파수꾼 카사이가 횃불을 들고 거울을 태우려 하고 있어."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_2",
					"emotion": "base",
					"content": {
						"korean": "…뜨거운 열기가 여기까지 전해진다."
					}
				},
				{
					"action": "enter",
					"speaker": "amir",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아미르의 칼집에 과거 정령을 찌른 성검의 파편 조각이 박혀 있다."
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "kasai",
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "kasai",
					"emotion": "angry",
					"content": {
						"korean": "제단 주위의 유리 조각상들을 똑똑히 봐라!"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "조각상들 가슴마다 아미르의 거울과 같은 붉은 흔적이 남아 있다."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_3",
					"emotion": "sad",
					"content": {
						"korean": "…피가 차갑게 식어가는 기분이다."
					}
				},
				{
					"content": {
						"korean": "피를 닦을 때마다 사람들이 저렇게 유리로 굳어간 거다!"
					},
					"type": "speech",
					"speaker": "kasai",
					"emotion": "sad"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "kasai",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"speaker": "kasai",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "이제 더는 두고 볼 수 없다! 거울을 잿더미로 만들겠다!"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "제단 여덟 칼날 뒤편에서 붉은 오팔 거울 문양이 파동치고 있다."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…공기가 미세하게 진동하고 있어."
					},
					"speaker": "character_4",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "속지 마라! 이 사막을 망치는 것은 저 거짓된 순례자다!"
					},
					"type": "speech",
					"speaker": "kasai",
					"emotion": "angry"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "그늘 속에서 제단 집행관이 천천히 모습을 드러낸다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "불꽃을 꺼뜨려라! 거울의 피를 닦아야만 정령의 안식이 찾아온다!"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "카사이의 경고와 {random_boss}의 선동 사이에서 전진해야 한다."
					}
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "방해하는 순례자와 함께 이 제단에 매장해주마!"
					}
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "집행관의 칼날이 탐험대를 압도한다."
					}
				},
				{
					"content": {
						"korean": "어리석은 자들아, 정령의 피를 거스른 대가를 치러라."
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "happy"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…여기서 무릎 꿇을 수는 없다. 다시 제단으로 향하자."
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 거울의 피를 닦아라… 그것이 구원의 길이다…"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "선동에 밀려 결국 붉은 오팔 거울 위로 피를 문질러 닦았다."
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "kasai",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"emotion": "sad",
					"speaker": "kasai",
					"content": {
						"korean": "아아… 무슨 짓을 저지른 건가… 피의 마신이 눈뜨고 말았다…"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "거울에서 뿜어져 나온 붉은 빛이 제단 전체를 오팔빛 광기로 물들인다."
					},
					"type": "speech"
				}
			],
			"id": 15
		}
	]
} as const;
