export const scenario_desert_encore_49_02 = {
	"scenario_id": "desert_encore_49_02",
	"order": 2,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"ashur": {
			"id": "mon_a07b6a77-ad2e-4adb-b4ed-56e7e10cd5c7",
			"name": {
				"korean": "아슈르",
				"english": "Ashur",
				"japanese": "アシュール",
				"chinese": "阿舒尔",
				"french": "Ashur",
				"spanish": "Ashur",
				"vietnamese": "Ashur",
				"thai": "อาชูร์",
				"hindi": "अशूर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/eb36f4ec-7b0f-47d0-7073-647e4b01e700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e0b84a6e-36fc-4ba2-5c1d-54fbb18adb00/public"
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
					"content": {
						"korean": "진홍빛 천막 객석에 들어서자 짙은 피비린내가 코를 찔렀다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"spot": [
						3,
						2
					],
					"speaker": "ashur",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "ashur",
					"emotion": "angry",
					"content": {
						"korean": "이 피 묻은 종이 좀 봐! 전부 앙코르의 환각 무대에 낚여 서로를 죽인 흔적이야!"
					}
				},
				{
					"content": {
						"korean": "이 대본 조각이 다음 결투 희생자들의 명단인 건가?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "맞아. 환영 티켓상이 이 대본대로 사람들을 사지로 밀어 넣고 있어."
					},
					"type": "speech",
					"speaker": "ashur",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "ashur"
				},
				{
					"type": "speech",
					"speaker": "ashur",
					"emotion": "base",
					"content": {
						"korean": "대본 모서리를 자세히 봐. 앙코르의 서명이 아니야."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "서명이 찍혀 있어야 할 자리에 놋쇠 톱니 문양이 선명하게 새겨져 있어."
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "ashur",
					"emotion": "sad",
					"content": {
						"korean": "톱니 문양이라니... 앙코르 뒤에 다른 흑막이 조종하고 있을지도 몰라."
					}
				},
				{
					"speaker": "character_1",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…뼛속까지 소름이 돋는다."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "ashur",
					"spot": [
						3,
						2
					],
					"duration_ms": 400
				},
				{
					"speaker": "ashur",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "저기 무대 뒤쪽에서 환영 티켓상이 관객들에게 결투 티켓을 강제로 쥐여주고 있어!"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "티켓을 받은 자는 환각에 빠져 동료를 적으로 착각하게 되는 건가?"
					}
				},
				{
					"content": {
						"korean": "그래. 당장 놈을 저지하지 않으면 더 많은 피가 뿌려질 거야!"
					},
					"speaker": "ashur",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "…귀에서 기분 나쁜 태엽 소리가 울려 퍼진다."
					},
					"type": "speech",
					"speaker": "character_2",
					"emotion": "sad"
				},
				{
					"speaker": "ashur",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "ashur",
					"emotion": "angry",
					"content": {
						"korean": "놈의 환각 기운이 강해지고 있어. 결투 티켓을 강매하러 올 거다!"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "놋쇠 회중시계의 톱니를 고정해 환각의 흐름을 비틀어놓겠어."
					}
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "진홍빛 무대에 오신 것을 환영합니다. 죽음의 결투 티켓을 받아 가시죠."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "그 피 묻은 대본대로 관객을 도살하게 두진 않는다!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "이미 대본은 쓰였습니다. 다음 비명의 주인공은 바로 당신들입니다!"
					},
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "티켓은... 이미... 발행되었거늘..."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "놋쇠 톱니로 억눌린 환각 연극을 끊어냈다."
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "티켓상이 무너지자 피 젖은 대본 잔해들이 모래 바람 속으로 산산이 흩어졌다."
					}
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "happy",
					"content": {
						"korean": "새로운 희생자의 이름이 피 묻은 대본에 채워지는군요."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…시계 톱니를 다시 고정하고 무대에 서야 해."
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"진홍빛 천막 객석은 피비린내와 찢어진 대본 조각으로 가득했다.",
			"첩보원 아슈르가 내던진 종이에는 잔혹한 죽음의 연극이 기록되어 있었다.",
			"환영 티켓상이 피 젖은 결투 티켓을 강매하며 탐험대를 압박한다.",
			"놋쇠 회중시계의 톱니를 고정하고 무대 위 흑막을 향해 든다."
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
