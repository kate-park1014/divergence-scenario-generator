export const scenario_modern_whisperweb_0_FIR_02 = {
	"scenario_id": "modern_whisperweb_0_FIR_02",
	"order": 2,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"dax": {
			"id": "mon_08d5b43e-f9ab-4469-9064-855e170b0cdc",
			"name": {
				"korean": "닥스",
				"english": "Dax",
				"japanese": "ダックス",
				"chinese": "达克斯",
				"french": "Dax",
				"spanish": "Dax",
				"vietnamese": "Dax",
				"thai": "แด็กซ์",
				"hindi": "डैक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/84bb11db-6eb4-4500-d274-222e8b100100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5d325a75-bd91-4758-7b3f-ad9a97e52700/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"네온 도시의 화면에는 깨진 정보가 흘러넘쳤다.",
			"우리는 해커 닥스를 찾아 그의 낡은 기록실로 향했다.",
			"닥스의 서버에는 위스퍼 웹의 데이터 스트림을 해독할 열쇠가 있었다.",
			"어떤 대가를 치르든, 우리는 그 정보를 손에 넣어야 했다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "낡은 기록실, 수많은 케이블과 모니터가 어지럽게 놓여 있었다."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "닥스인가."
					},
					"type": "speech"
				},
				{
					"speaker": "dax",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"emotion": "base",
					"content": {
						"korean": "당신들이 어떻게… 여길 찾아냈지?"
					},
					"speaker": "dax",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "위스퍼 웹의 데이터 스트림을 해독해야 해. 네 컴퓨터로."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"emotion": "angry",
					"content": {
						"korean": "그건 내 개인 연구 자료야! 시민 수백 명의 재산 정보도 들어있어."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "상관없어."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "안 돼! 그거 억지로 열면 안에 든 개인 기록이 같이 새!"
					},
					"speaker": "dax"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"type": "direction",
					"speaker": "dax"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "지금부터 이 기계는 우리가 쓴다."
					}
				},
				{
					"type": "speech",
					"speaker": "dax",
					"emotion": "angry",
					"content": {
						"korean": "감당 못할 짓이야. 내 평생의 연구가…!"
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "주인공은 닥스의 작업실 컴퓨터를 강제로 조작하기 시작했다."
					},
					"type": "speech"
				},
				{
					"speaker": "dax",
					"content": {
						"korean": "멈춰! 제발, 거기엔…"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "화면에 알 수 없는 데이터들이 뒤섞이며 빠르게 흘러내려 갔다."
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이게 바로 위스퍼 웹의 흔적이다."
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "dax",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "망했어… 내 연구 자료 수백 건이 지금… 위스퍼 웹에 노출되고 있어."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "dax"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그만큼 중요한 정보란 거겠지."
					}
				},
				{
					"type": "speech",
					"speaker": "dax",
					"emotion": "angry",
					"content": {
						"korean": "내 사생활 정보, 시민들의 재산 정보까지… 전부 엉망이 됐어!"
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "해독 중인 화면 구석에서 오래된 데이터 칩이 빠져나왔다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "칩에서 단편적인 음성 기록이 흘러나왔다. '모든 비밀이… 연결된다…'."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "당신들 때문에 전부 끝났어!"
					},
					"emotion": "angry",
					"speaker": "dax",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"type": "direction",
					"speaker": "dax"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이제 되돌릴 수 없어. 내 모든 자료가 위스퍼 웹에 퍼졌어."
					},
					"type": "speech",
					"speaker": "dax"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "위스퍼 웹의 근원지를 찾기 위한 대가였다."
					}
				},
				{
					"type": "speech",
					"speaker": "dax",
					"emotion": "angry",
					"content": {
						"korean": "대가? 당신들은 내 인생을 망쳤어. 이제 뭘 더 할 건데?"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "닥스는 허탈하게 웃으며 모니터를 바라봤다. 그 안에는 수많은 개인 정보가 무작위로 뒤섞여 있었다."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "위스퍼 웹을 찾아낼 때까지 멈추지 않아."
					},
					"type": "speech"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "쓰러뜨려 봤자 소용없다. 모든 것은 이미 시작됐다."
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "닥스의 자료도, 다른 사람들의 정보도… 네가 막을 수 없어."
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "…젠장."
					},
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "도시의 전광판에는 닥스의 사생활 정보와 함께 수많은 시민들의 민감한 금융 정보가 깜빡거렸다."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "누군가 모든 것을 지켜보고 있었다. '진실의 목소리' 기자가."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "네가 망친 건 닥스뿐이 아니야. 더 많은 정보가 새나갈 거다."
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "닥스의 자료를 되찾는다. 그리고 너도 잡는다."
					}
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "서버실 가장 깊숙한 곳, 거대한 서버 랙 앞에 정체 모를 자가 서 있었다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "네가 닥스를 망가뜨린 장본인인가."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "당신이 위스퍼 웹인가?"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "나는 그저 보여줬을 뿐이다. 네가 어떤 인간인지."
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "네 덕분에 닥스의 모든 기록도 사람들에게 공개됐다."
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "막겠다."
					},
					"type": "speech"
				}
			]
		}
	]
} as const;
