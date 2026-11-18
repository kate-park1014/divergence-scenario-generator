export const scenario_desert_vesperis_46_03 = {
	"scenario_id": "desert_vesperis_46_03",
	"order": 3,
	"random_boss_title": {
		"korean": "상인"
	},
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
	"prologue": {
		"korean": [
			"오아시스를 지나 도달한 곳은 잿빛 유적 광장.",
			"버려진 사원의 중심부로 향하는 길목마다 오래된 비문이 파묻혀 있다.",
			"검을 거두지 않으면 사원의 재앙도 멈추지 않는다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "잿빛 모래에 덮인 유적 광장 곳곳에 부서진 비석들이 서 있다."
					},
					"type": "speech"
				},
				{
					"speaker": "ashur",
					"type": "direction",
					"duration_ms": 500,
					"direction": "up",
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "ashur",
					"content": {
						"korean": "오아시스를 넘어온 탐험대군요. 저는 이 유적의 비문을 연구하는 학자 아슈르입니다."
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "탈출구를 찾으려면 중앙 사원으로 가야 해. 비문에는 뭐라고 적혀 있나?"
					},
					"type": "speech"
				},
				{
					"speaker": "character_1",
					"emotion": "sad",
					"content": {
						"korean": "…바람 소리가 꼭 흐느끼는 것 같아."
					},
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "아슈르가 오래된 비석의 흙을 털어내며 빽빽하게 새겨진 문자를 읽어 내려간다."
					}
				},
				{
					"type": "direction",
					"speaker": "ashur",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"speaker": "ashur",
					"content": {
						"korean": "비문에 중요한 기록이 있군요. 성궤 앞에서 검을 땅에 꽂고 손을 떼야만 비극이 멈춘다고 적혀 있습니다."
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "검을 뽑은 게 비극의 시작이었으니, 내려놓는 것이 정답이었군."
					}
				},
				{
					"type": "speech",
					"speaker": "character_2",
					"emotion": "base",
					"content": {
						"korean": "…그게 정말 사원의 문을 열어줄까."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "광장 한구석, 푸른빛 석탄석 사이에 라피스라줄리로 단단하게 굳어버린 검이 꽂혀 있다."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "검 전체가 라피스라줄리로 굳어 있군. 이 유적에 무슨 일이 있었던 거지."
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"speaker": "ashur",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"speaker": "ashur",
					"content": {
						"korean": "성궤의 기운이 퍼지면서 유적의 모든 무기가 굳어버린 것 같습니다. 전 비문을 더 읽어보겠습니다."
					},
					"type": "speech"
				},
				{
					"action": "exit",
					"type": "direction",
					"duration_ms": 400,
					"direction": "up",
					"speaker": "ashur"
				},
				{
					"content": {
						"korean": "…손잡이조차 잡을 수 없게 굳었어."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_3"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "중앙 사원으로 이어지는 거대한 회랑 입구에서 고함이 들려온다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "누군가 길을 막아서고 있어. 무장을 한 상인의 기척이다."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…무겁고 긴장된 침묵이 흐르네."
					},
					"emotion": "sad",
					"speaker": "character_4"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "검을 내려놓는다고…? 그 각오가 진심이길 바란다…"
					},
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아슈르가 읽어준 비문대로 검을 내려놓는 법을 되새겨야겠어."
					}
				},
				{
					"content": {
						"korean": "상인이 물러난 회랑 너머로 통곡의 회랑이 모습을 드러낸다."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "무기를 버리지 못하는 자에게 성궤로 가는 길은 없다!"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "…하지만 여기서 물러설 순 없어. 다시 돌파하자!"
					}
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "유적 광장의 중앙 사원 입구, 상인이 길을 막아서며 칼을 빼 든다."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "검을 쥐고 다니는 자는 모두 재앙을 부르는 법이다! 더 이상 사원으로 들어가지 못한다!"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "우리는 재앙을 일으키려는 게 아니다! 성궤 앞에서 검을 내려놓기 위해 사원으로 간다!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "…상인의 눈빛이 핏빛으로 굳어 있어."
					},
					"emotion": "sad",
					"speaker": "character_1",
					"type": "speech"
				}
			]
		}
	]
} as const;
