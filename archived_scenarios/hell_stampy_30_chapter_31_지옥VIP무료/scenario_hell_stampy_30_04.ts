export const scenario_hell_stampy_30_04 = {
	"scenario_id": "hell_stampy_30_04",
	"order": 4,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"brim": {
			"id": "mon_d7f57824-190d-40b9-93d1-66c658f0441f",
			"name": {
				"korean": "브림",
				"english": "Brim",
				"japanese": "ブリム",
				"chinese": "布里姆",
				"french": "Brim",
				"spanish": "Brim",
				"vietnamese": "Brim",
				"thai": "บริม",
				"hindi": "ब्रिम"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/08ad0e4d-214d-43b3-dc3e-ddfba9049300/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/16f1def2-7c33-4558-4b21-9c3e87fa3e00/public"
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
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "높게 솟은 서류 탑 사이로 지옥 심사청의 모습이 드러났다."
					}
				},
				{
					"content": {
						"korean": "…어디를 봐도 서류뿐이잖아."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_1"
				},
				{
					"speaker": "brim",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"speaker": "brim",
					"emotion": "base",
					"content": {
						"korean": "여기가 마지막 결제 도장을 받는 심사청이야. 하지만 도장을 받으려면 100만 장의 동의서에 서명해야 해."
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "100만 장이라니, 말도 안 되는 부조리한 조건이야."
					},
					"type": "speech"
				},
				{
					"speaker": "brim",
					"emotion": "base",
					"content": {
						"korean": "그게 이 심사청이 요구하는 정식 절차란다."
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "brim",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "brim",
					"content": {
						"korean": "서류를 잘 봐. 구석마다 붉은 직인이 찍혀 있어."
					}
				},
				{
					"content": {
						"korean": "이 직인은 도장을 받으면 자동 연체 승인된다는 조항이잖아!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"speaker": "character_2",
					"content": {
						"korean": "…상상 이상으로 악질적인 함정이군."
					},
					"type": "speech"
				},
				{
					"speaker": "brim",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "맞아. 동의서에 서명하는 순간 억만 골드의 영혼 연체료가 즉시 고지되는 수작이야."
					}
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "brim",
					"type": "direction"
				},
				{
					"speaker": "brim",
					"emotion": "base",
					"content": {
						"korean": "이상한 건, 이 핫핑크 통행권 자체가 누군가의 실적을 위해 조작된 서류라는 거야."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "누군가 실적을 채우려고 우리를 이 엉터리 계약에 묶어둔 거군."
					}
				},
				{
					"type": "speech",
					"speaker": "character_3",
					"emotion": "angry",
					"content": {
						"korean": "…더는 속아 넘어가지 않겠어."
					}
				},
				{
					"emotion": "base",
					"speaker": "brim",
					"content": {
						"korean": "동의서 따위 다 치우고, 통행권 본체만 심사대에 밀어 넣으렴."
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "brim",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "잠깐, 저 뒤쪽 영혼 서류함 깊은 곳을 봐."
					},
					"speaker": "brim",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"speaker": "character_any",
					"content": {
						"korean": "반납 신청서 단 한 장으로 전체 계약을 무효로 만드는 취소 도장이 보여!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "하지만 심사관을 쓰러뜨리지 않으면 저 서류함에 접근할 수 없어."
					},
					"emotion": "angry",
					"speaker": "brim"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…좋아, 심사관부터 처단한다."
					},
					"emotion": "angry",
					"speaker": "character_4"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "100만 장의 서류 더미 속에 영원히 묻히거라!"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "…아직 굴복할 수 없어. 다시 도전한다!"
					}
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "크윽… 핫핑크 통행권에 마지막 결제 도장을 눌러 찍다니…"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "드디어 마지막 결제 도장을 받아냈다!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "happy"
				},
				{
					"type": "speech",
					"content": {
						"korean": "결제 도장이 찍혔지만, 통행권 구석의 연체 승인 직인이 붉게 빛나기 시작했다."
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "100만 장의 동의서에 서명하기 전엔 결제 도장을 찍어줄 수 없다!"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "서류 따윈 필요 없다! 통행권에 도장이나 찍어!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"speaker": "character_1",
					"content": {
						"korean": "…이 부조리한 심사를 끝내겠어!"
					},
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"지옥 심사청의 문이 열리자 100만 장의 서류 산더미가 길을 가로막았다.",
			"관료주의의 벽 뒤에서 결제 도장을 쥔 심사관이 차가운 눈빛을 빛낸다.",
			"핫핑크 통행권을 내밀고 마지막 결제 도장을 받아내야만 한다."
		]
	}
} as const;
