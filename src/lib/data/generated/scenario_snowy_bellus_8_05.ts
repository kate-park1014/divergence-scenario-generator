export const scenario_snowy_bellus_8_05 = {
	"scenario_id": "snowy_bellus_8_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "snowy",
	"actors": {
		"hild": {
			"id": "mon_6f20c96a-bf07-4aae-b37c-da898a8336e8",
			"name": {
				"korean": "힐드",
				"english": "Hild",
				"japanese": "ヒルド",
				"chinese": "希尔德",
				"french": "Hild",
				"spanish": "Hild",
				"vietnamese": "Hild",
				"thai": "ฮิลด์",
				"hindi": "हिल्ड"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/722a86fd-2903-4688-3f04-db8241ed0e00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/af3d96ba-e571-4132-fede-cd415bd15c00/public"
		}
	},
	"boss": {
		"pool_id": "pool_035"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "시간이 멈춘 설원. 눈송이마저 공중에 박제되었다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…이게, 멈춘 시간의 숲인가."
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "hild",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "hild",
					"emotion": "base",
					"content": {
						"korean": "여기에… 멈춰 선 자들이 있습니다."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "hild",
					"emotion": "sad",
					"content": {
						"korean": "모든 것이 가장 아름다운 순간에… 박제됩니다."
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "hild",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "hild",
					"emotion": "base",
					"content": {
						"korean": "유령 열차가 다가옵니다. 소리 없이, 그림자처럼."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "저 열차가… 이 모든 걸 만들었어?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "hild",
					"content": {
						"korean": "아름다운 순간을 영원히 가둔다는 건… 저주이자, 약속."
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "hild",
					"content": {
						"korean": "그 약속의 주인이 누구인지… 확인해야 합니다."
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "hild",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "열차 주변에… 은빛 바늘 같은 게 보여."
					},
					"type": "speech"
				},
				{
					"speaker": "hild",
					"emotion": "sad",
					"content": {
						"korean": "저것들이… 박제된 순간들을 꿰맵니다."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "hild",
					"content": {
						"korean": "들어가는 순간, 우리도 그들의 일부가 될지도 모릅니다."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "멈출 수 없어. 이미 너무 깊이 왔어."
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "hild",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "열차의 육중한 문이 서서히 열리고 있었다."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "이제… 돌아갈 수 없습니다."
					},
					"emotion": "sad",
					"speaker": "hild"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "알아. 이 모든 걸 끝내야 해."
					}
				},
				{
					"speaker": "hild",
					"emotion": "base",
					"content": {
						"korean": "그의 다정한 손길이, 가장 깊은 한기일지도 모릅니다."
					},
					"type": "speech"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "boss",
					"emotion": "sad",
					"content": {
						"korean": "…영원히 간직될 순간을, 거부하는구나."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "boss",
					"content": {
						"korean": "하지만 잊지 마. 멈추지 않는 것은, 결국 부서질 뿐."
					}
				},
				{
					"content": {
						"korean": "…네가 틀렸어."
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "hild",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "hild",
					"content": {
						"korean": "그의 약속은… 깨졌습니다."
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "시간은 다시 흐르기 시작했다. 그러나 숲은… 여전히 침묵했다."
					},
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "열차 문이 소리 없이 열렸다. 은빛 얼음 바늘이 떠올랐다."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…그렇게 서두르지 않아도 돼."
					},
					"emotion": "base",
					"speaker": "boss"
				},
				{
					"speaker": "boss",
					"emotion": "base",
					"content": {
						"korean": "네 가장 아름다운 순간을, 내가 영원히 지켜줄 테니까."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…다정함 뒤에 숨은 한기!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "hild",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "angry",
					"speaker": "hild",
					"content": {
						"korean": "이 순간을 박제할 수는 없습니다!"
					},
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "boss",
					"content": {
						"korean": "…네 가장 아름다운 순간은, 이 패배로군."
					}
				},
				{
					"content": {
						"korean": "영원히… 이 순간에 머물러."
					},
					"speaker": "boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…아직 끝나지 않았어!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"열차의 시간이 멈추자, 박제되었던 설원도 서서히 녹아내렸다.",
			"벨루스는 사라졌다. 그의 다정한 약속도, 얼어붙은 시간도.",
			"하지만 멈춰 섰던 자들은… 돌아오지 않았다. 영원히 아름다운 채로.",
			"복수는 끝났는가. 혹은… 새로운 저주가 시작된 것인가.",
			"녹아내린 눈물처럼, 한기가 가슴을 적셨다."
		]
	},
	"prologue": {
		"korean": [
			"시간이 멈춘 설원. 모든 것이 박제된 채 빛난다.",
			"유령 열차가 소리 없이 다가왔다. 거대한 시계바늘은 거꾸로.",
			"열차 문이 열리고, 은빛 얼음 바늘이 탐험대를 향한다.",
			"다정한 목소리가 속삭인다. \"네 가장 아름다운 순간을, 영원히.\"",
			"그 다정함 아래, 차가운 한기가 심장을 파고들었다."
		]
	}
} as const;
