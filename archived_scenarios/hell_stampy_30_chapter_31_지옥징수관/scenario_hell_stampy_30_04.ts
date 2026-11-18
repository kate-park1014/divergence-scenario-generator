export const scenario_hell_stampy_30_04 = {
	"scenario_id": "hell_stampy_30_04",
	"order": 4,
	"random_boss_title": {
		"korean": "망령 기사"
	},
	"act": "rising",
	"theme": "hell",
	"actors": {
		"drox": {
			"id": "mon_2fc30621-a15f-4371-9e37-295cdcb5675d",
			"name": {
				"korean": "드록스",
				"english": "Drox",
				"japanese": "ドロックス",
				"chinese": "德罗克斯",
				"french": "Drox",
				"spanish": "Drox",
				"vietnamese": "Đrốc",
				"thai": "ดรอกซ์",
				"hindi": "ड्रॉक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/509c0376-2230-4669-d022-7e5336293200/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/916b4cfa-f792-4f4a-5346-681095481e00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"유황 재가 뿌옇게 내리는 광장에 발을 딛는다.",
			"발목을 죄어오는 쇠사슬은 여전히 영혼을 짓누르고 있다.",
			"친절했던 안내 정령의 가면 뒤에 숨겨진 진실에 다가선다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "유황 재가 흩날리는 광장은 침묵에 잠겨 있다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "drox",
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "base",
					"content": {
						"korean": "난 정보꾼 드록스라고 해. 이 광장에서 정령의 비리를 파헤치고 있었지."
					},
					"speaker": "drox",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "안내 정령이 머물던 자리를 수색해야겠어."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "…재 냄새 때문에 숨이 막히네."
					},
					"emotion": "sad"
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
						"korean": "안내 정령이 서 있던 자리 주위에 버려진 장부가 가득하다."
					}
				},
				{
					"spot": [
						2,
						3
					],
					"speaker": "drox",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "drox",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그 친절한 안내 정령은 공짜 도장을 찍어 준 뒤, 나중에 막대한 수수료를 요구한다더군."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "공짜 도장으로 영혼을 묶고 수수료를 뜯어낼 셈이었군."
					}
				},
				{
					"content": {
						"korean": "…소름 돋는 수법이야."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_2"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "drox"
				},
				{
					"type": "speech",
					"speaker": "drox",
					"content": {
						"korean": "진실을 알았으니 조심해. 소문을 덮으려는 자들이 움직이고 있어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "입막음을 하려 해도, 우리는 쇠사슬을 끊기 위해 나아간다."
					},
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"action": "exit",
					"speaker": "drox",
					"direction": "down",
					"duration_ms": 400
				},
				{
					"type": "speech",
					"speaker": "character_3",
					"content": {
						"korean": "…바람 소리가 흉흉하군."
					},
					"emotion": "sad"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "수색하던 길목, 재더미 위에 반짝이는 금테 외알 안경 테가 떨어져 있다."
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "안내 정령이 황급히 도망치며 떨구고 간 물건인가 보군."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…갑자기 공기가 차가워진다."
					},
					"speaker": "character_4"
				},
				{
					"type": "speech",
					"content": {
						"korean": "어둠 속에서 차가운 기척이 다가온다."
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"emotion": "angry",
					"content": {
						"korean": "진실은 유황 재 아래 묻힐 것이다. 물러가라."
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…이대로 영혼을 빼앗길 순 없다. 다시 도전하겠다."
					},
					"speaker": "character_any"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "유황 재 광장 한가운데, 정체 모를 자가 검을 쥐고 막아서서 있다."
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "더 이상 정령의 비밀을 파헤치게 둘 수 없다. 여기서 멈춰라!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "{random_boss}의 입막음 공작에 물러설 것 같으냐!"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…쇠 냄새가 진동해."
					},
					"speaker": "character_1"
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "수수료 계약의 진실을 알아차렸다 해도… 그분을 막을 수는 없다…"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "지옥 통행 관문으로 가서 영혼의 쇠사슬을 끊어내겠다!"
					}
				},
				{
					"content": {
						"korean": "정체 모를 자가 재로 변해 사라지고, 관문으로 통하는 길목이 열렸다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"id": 15
		}
	]
} as const;
