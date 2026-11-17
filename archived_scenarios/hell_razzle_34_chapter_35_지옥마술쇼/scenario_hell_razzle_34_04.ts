export const scenario_hell_razzle_34_04 = {
	"scenario_id": "hell_razzle_34_04",
	"order": 4,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"cinder": {
			"id": "mon_7bdc5bba-75ec-4589-827e-193b3c59b022",
			"name": {
				"korean": "신더",
				"english": "Cinder",
				"japanese": "シンダー",
				"chinese": "辛德",
				"french": "Cinder",
				"spanish": "Cinder",
				"vietnamese": "Xinder",
				"thai": "ซินเดอร์",
				"hindi": "सिंडर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/bc21258b-93ac-4669-7330-fdf4e8a57c00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/939a1911-1849-425c-67a4-4958bbdc3300/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"무대 뒤편은 화려한 조명 대신 찌든 피 냄새와 녹슨 기계음으로 가득했다.",
			"은빛 마술 종을 쥐고 환영 장막 앞으로 나아간다.",
			"감시자 신더의 눈빛이 흔들리고, 굳게 닫혔던 진실의 문이 열리기 시작한다.",
			"마술이라는 이름 뒤에 숨겨진 잔혹한 기계 톱니가 모습을 드러낸다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "무대 뒤편의 좁은 통로. 유황 연기 사이로 피 냄새가 진동한다."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_1"
				},
				{
					"action": "enter",
					"speaker": "cinder",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "여기서부터는 환영 장막이 무대를 감싸고 있어. 무작정 나아갈 수 없다."
					},
					"type": "speech",
					"speaker": "cinder",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "종을 울려 환영의 공명을 찾아야겠어."
					}
				},
				{
					"content": {
						"korean": "…죗값은 결국 치르게 되는 건가."
					},
					"type": "speech",
					"speaker": "cinder",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "cinder",
					"spot": [
						3,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "angry",
					"speaker": "cinder",
					"type": "speech",
					"content": {
						"korean": "이 피 묻은 기계 톱니를 봐. 라즐이 손님들을 구원하겠다던 건 전부 거짓이었어."
					}
				},
				{
					"content": {
						"korean": "손님들이 구원받은 게 아니라 기계에 짓밟혔다는 뜻인가."
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "character_2",
					"content": {
						"korean": "…소름이 끼치는군."
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "cinder",
					"type": "speech",
					"content": {
						"korean": "라즐의 마술쇼는 처음부터 희생자를 톱니바퀴에 갈아 넣는 비극이었어."
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"content": {
						"korean": "은빛 마술 종을 강하게 흔들자 환영 장막에 균열이 생기기 시작한다."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "장막이 찢어지고 있어. 하지만 톱니 소리는 더 날카로워진다."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"spot": [
						3,
						3
					],
					"type": "direction",
					"action": "enter",
					"speaker": "cinder",
					"duration_ms": 500
				},
				{
					"emotion": "angry",
					"speaker": "cinder",
					"content": {
						"korean": "가시 조종사가 장막 뒤에서 통로를 막고 있다. 멈추지 않으면 몸이 갈려 나갈 거야."
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "어차피 물러설 곳은 없어."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "보석 바퀴 주변에 잘린 금속 칼날 조각 3개가 어지럽게 떨어져 있다."
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 칼날들… 무대 위에서 희생된 자들의 흔적인가."
					}
				},
				{
					"content": {
						"korean": "숨이 턱 막히는 구나."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_3"
				},
				{
					"action": "enter",
					"speaker": "cinder",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						3
					]
				},
				{
					"content": {
						"korean": "이 선을 넘으면 라즐의 중앙 무대로 이어진다. 부디 그 광기를 끝내다오."
					},
					"type": "speech",
					"speaker": "cinder",
					"emotion": "sad"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "장막을 조종하던 거대한 톱니가 파괴되며 무대 뒤편이 침묵에 빠진다."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "크윽… 무대가… 무너진다… 하지만 라즐 님께서 너희를 기다리신다…"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "환영 장막이 걷혔어. 중앙 무대로 가는 길이 열렸다."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "진실을 알았으니, 이제 비극의 종지부를 찍을 차례다."
					},
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "장막이 완전히 찢어지며 거대한 가시 톱니를 쥐어잡은 자가 나타난다."
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "무대 뒤편을 침범한 쥐새끼들이냐! 톱니바퀴의 먹이로 삼아주마!"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "더 이상 누구도 이 장막 뒤에서 죽게 두지 않는다!"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "가시 톱니가 사납게 회전하며 탐험대를 덮쳤다."
					}
				},
				{
					"emotion": "happy",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "하하하! 지옥의 마술쇼 피날레를 완성하는 부품이 되어라!"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…여기서 멈출 순 없어. 다시 일어선다."
					}
				}
			]
		}
	]
} as const;
