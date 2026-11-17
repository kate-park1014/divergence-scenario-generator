export const scenario_desert_vane_45_02 = {
	"scenario_id": "desert_vane_45_02",
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
			"dialogue": [
				{
					"content": {
						"korean": "흑요석 벽 사이로 서늘한 쇠사슬 소리가 울려 퍼진다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"emotion": "angry"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						3
					],
					"speaker": "ashur"
				},
				{
					"speaker": "ashur",
					"type": "speech",
					"content": {
						"korean": "드디어 찾았다, 배신자! 내 인장을 도용해 채무를 넘긴 게 너였어!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "아슈르가 우리를 가해자로 지목하며 길을 막아섰다."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "오해다! 우리는 살기 위해 정당한 거래를 했을 뿐이다!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "ashur",
					"action": "enter",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "ashur",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "변명은 필요 없다. 이 단죄의 도장으로 네놈의 영혼을 장부에 묶어주마!"
					}
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "아슈르의 도장에 찍힌 붉은 잉크가 순식간에 흑요석 결정으로 검게 굳어버린다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "잉크가 굳어 도장이 찍히지 않는다. 아슈르가 당황한 틈을 타야 한다."
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "ashur",
					"spot": [
						3,
						3
					]
				},
				{
					"content": {
						"korean": "어째서 도장이 움직이지 않는 거지? 이 검은 결정은 대체…!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "ashur"
				},
				{
					"speaker": "character_3",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "아슈르의 손에서 단죄의 도장을 낚아채 장부에 강제로 찍어버렸다."
					}
				},
				{
					"speaker": "ashur",
					"content": {
						"korean": "크악! 내, 내 이름이 왜 장부에… 흑요석 결빙이 날 억류하고 있어!"
					},
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "ashur",
					"action": "enter",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "나를 배신자로 만들어 억류시키다니… 네놈들이 진짜 악마다!"
					},
					"type": "speech",
					"speaker": "ashur"
				},
				{
					"emotion": "sad",
					"speaker": "character_4",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "죄책감이 가슴을 짓누르지만 멈출 수 없다. 통행증을 얻어야 한다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "골목 끝에서 어두운 그림자가 사슬을 끌며 다가온다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "베인 님의 명령이다. 장부에 이름이 찍힌 아슈르를 끌고 가겠다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "그를 넘길 수 없다! 우리가 저지른 일은 우리가 끝낸다!"
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "채무자의 집행을 방해하는 자는 누구든 장부의 포식자가 될 뿐이다."
					},
					"emotion": "angry"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "사슬이 온몸을 죄어온다. 흑요석 기둥 속에 갇히고 만다."
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "이대로 억류될 수는 없다. 다시 일어서야 해!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 집행을 막아도 아슈르의 채무는 사라지지 않는다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "random_boss",
					"action": "exit",
					"direction": "up",
					"duration_ms": 400,
					"type": "direction"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "바닥에 검은 잉크가 묻은 깃펜이 덩그러니 떨어져 있다."
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "또 한 명을 희생시켜 살아남았다. 이 깃펜이 다음 비극의 시작일지도 모른다."
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "흑요석 골목길에 짙은 죄책감의 침묵이 내려앉는다."
					},
					"type": "speech",
					"speaker": "narrator"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"피로 물든 오아시스 암시장, 흑요석 골목길.",
			"억울한 피해자인 줄 알았던 아슈르가 칼날을 겨눈다.",
			"\"네놈이 내 이름으로 가짜 계약을 찍었지!\"",
			"누명을 벗기 위해 시작된 또 다른 배신.",
			"검은 잉크와 사슬이 죄인의 발목을 죄어온다."
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
