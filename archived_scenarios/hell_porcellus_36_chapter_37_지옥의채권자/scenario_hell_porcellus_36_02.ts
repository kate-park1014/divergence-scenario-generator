export const scenario_hell_porcellus_36_02 = {
	"scenario_id": "hell_porcellus_36_02",
	"order": 2,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"soot": {
			"id": "mon_a0491490-e114-44d8-855c-d2d63b020da1",
			"name": {
				"korean": "그을음",
				"english": "Soot",
				"japanese": "煤",
				"chinese": "煤烟",
				"french": "Suie",
				"spanish": "Hollín",
				"vietnamese": "Bồ hóng",
				"thai": "เขม่า",
				"hindi": "कालिख"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2275d372-4e89-4725-193c-fccc0b944300/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d1d5ba2b-da7c-4b75-42de-07c9cdda5d00/public"
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
					"content": {
						"korean": "무수한 서류 더미가 아파트 높이로 쌓여 있는 장부 보관창고다."
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "서류가 끝도 없이 많네. 이게 다 억류된 영혼들의 채권 장부인가?"
					}
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "soot",
					"duration_ms": 500,
					"spot": [
						4,
						2
					]
				},
				{
					"content": {
						"korean": "오셨군요. 장무 서기 soot입니다. 이 장부들을 좀 봐주십시오."
					},
					"emotion": "base",
					"speaker": "soot",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "장부에 무슨 문제라도 있습니까?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "'지옥 숨쉬기 이용료' 같은 기괴한 부조리 조항들이 계속 늘어나고 있습니다."
					},
					"speaker": "soot",
					"emotion": "angry"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"speaker": "soot",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "자세히 보십시오. 장부 표지마다 핑크색 하트 모양의 담보 압류 인장이 찍혀 있습니다."
					},
					"emotion": "base",
					"speaker": "soot"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "지옥의 압류 서류에 핑크색 하트 인장이라니, 어울리지 않는군요."
					}
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…보는 것만으로도 머리가 멍해지는 기분이야."
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "soot",
					"content": {
						"korean": "이 인장이 찍힌 장부는 수수료가 배로 늘어납니다. 정리를 위해 수납 확인 도장이 필요합니다."
					}
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"action": "enter",
					"speaker": "soot",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "soot",
					"content": {
						"korean": "부조리 조항을 처리하려면 서류 하단에 영수증 도장을 찍어야 합니다."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "도장을 찍으면 잘못된 채권 계약이 바로잡히는 겁니까?"
					},
					"type": "speech"
				},
				{
					"speaker": "soot",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "네, 확인 도인을 찍어 공식 서류로 수납 처리해주십시오."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "좋습니다. 서류 처리를 위해 영수증 도장을 찍겠습니다."
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "character_2",
					"content": {
						"korean": "쿵 소리와 함께 붉은 인장이 푹 찍힌다."
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"content": {
						"korean": "영수증 도인이 찍히자마자 서류 표면에서 기괴한 연기가 뿜어져 나왔다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "soot",
					"duration_ms": 400,
					"spot": [
						4,
						2
					]
				},
				{
					"speaker": "soot",
					"emotion": "angry",
					"content": {
						"korean": "이럴 수가... 도장을 찍자 공중에 핑크색 하트 연기가 피어오르고 있습니다!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "도장을 찍을 때마다 기력이 빠져나가는 찝찝한 기분이 든다."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…공기가 달콤하면서도 소름 돋게 일그러지네."
					},
					"emotion": "base",
					"speaker": "character_3"
				},
				{
					"content": {
						"korean": "창고 깊은 곳에서 장부를 관리는 집행관이 다가옵니다! 무기를 잡으십시오!"
					},
					"type": "speech",
					"speaker": "soot",
					"emotion": "angry"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "핑크색 하트 연기를 흩날리며 정체 모를 자가 길을 막아서섰다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "감히 지옥 채권 장부에 손을 대고 조항을 확인하려 드느냐!"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "이 기괴한 조항으로 영혼들에게 말도 안 되는 채무를 지운 건가?"
					}
				},
				{
					"content": {
						"korean": "어리석은 놈들! 네놈들이 방금 찍은 도장이 무엇을 뜻하는지도 모르고!"
					},
					"type": "speech",
					"emotion": "happy",
					"speaker": "random_boss"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "크악! 쓰러진다 해도... 이미 늦었다..."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "너희가 찍은 영수증 도장이... 계약을 성립시켰다..."
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "우리가 도와주려 찍은 도장이 덫이었다는 뜻인가?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "분홍빛 연기가 흩어지고, 또 다른 채권 집행실의 문이 열렸다."
					}
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "장부의 사슬이 파티의 사지를 억눌렀다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"speaker": "random_boss",
					"content": {
						"korean": "지옥의 이자는 결코 멈추지 않는다! 끊임없이 갚아라!"
					}
				},
				{
					"content": {
						"korean": "…이대로 서류의 노예가 될 수는 없어!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"지옥 채권 압류소의 지하, 먼지가 자욱한 장부 보관창고.",
			"끝없이 쌓인 서류들 속에는 말도 안 되는 지옥 이용료 조항들이 빽빽이 적혀 있었다.",
			"장무 서기 soot의 안내에 따라 도장을 찍어내려가던 순간 —",
			"공중으로 피어오르는 핑크색 하트 연기가 불길한 진실을 암시하고 있었다."
		]
	}
} as const;
