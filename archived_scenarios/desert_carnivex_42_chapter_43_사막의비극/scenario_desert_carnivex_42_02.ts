export const scenario_desert_carnivex_42_02 = {
	"scenario_id": "desert_carnivex_42_02",
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
	"prologue": {
		"korean": [
			"메마른 모래바람을 뚫고 도착한 바람의 신전.",
			"사막 경비병 아슈르의 뼛속 부식은 멈추지 않는다.",
			"통증을 덜어주려 뿌린 신전의 모래는—",
			"구원이 아닌 뼛속을 녹이는 기만의 덫이었다."
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
					"speaker": "narrator",
					"content": {
						"korean": "바람의 신전 입구. 기둥마다 백골 벼락 문양이 아로새겨져 있다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "여기가 사막 경비병들이 말하던 바람의 신전이구나."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "ashur",
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"speaker": "ashur",
					"type": "speech",
					"content": {
						"korean": "크윽… 뼛속이 타들어 가는 것 같아. 더는 못 걷겠어."
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "아슈르, 조금만 견뎌. 신전 안에 해독할 방법이 있을 거야."
					}
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "뼛속까지 스며드는 통증이다…"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "ashur",
					"duration_ms": 500
				},
				{
					"speaker": "ashur",
					"content": {
						"korean": "칼날 받침대 쪽으로 가야 해… 거기에 기운이 느껴져."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "잠깐, 받침대 주변에 부러진 명검 3자루가 골수 진액에 녹아 굳어있어."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "강철 검마저 엿가락처럼 녹아내리다니…"
					},
					"emotion": "sad",
					"speaker": "character_2",
					"type": "speech"
				},
				{
					"speaker": "ashur",
					"type": "speech",
					"content": {
						"korean": "으아악! 상처에서 열이 솟구쳐! 뼈가 깨지는 것 같아!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "신전 바닥의 모래가 차가워 보여. 서둘러 열을 식히자."
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "ashur",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "벽에 고대 벽화가 파여 있어. 호박색 즙을 껍질 틈에 붓자 갑각이 녹아내리는 모습이다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "불길한 그림이야… 소름이 돋는다."
					},
					"type": "speech",
					"speaker": "character_3"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "제발 아무거나 얹어줘! 제발 이 통증 좀 멈춰줘!"
					},
					"type": "speech",
					"speaker": "ashur"
				},
				{
					"content": {
						"korean": "이 신전 모래를 아슈르의 상처에 덮는다!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "ashur",
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "모래가 상처에 닿자 섬뜩한 호박색 빛이 사방으로 번졌다."
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "크아아아악! 뼈가… 뼛속 골수가 호박색으로 녹아내려!"
					},
					"type": "speech",
					"speaker": "ashur"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "상처를 달래는 게 아니라 독성의 부식을 가속하는 모래였어!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_4",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "결국 주저앉고 말았잖아…!"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "아슈르를 꿇어앉힌 놈이 이 앞에 기다리고 있다. 가자!"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "백골 벼락 기둥 사이로 정체 모를 거대한 그림자가 나타났다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "어리석은 침입자들. 신전의 모래는 치유가 아닌 멸망의 촉매다."
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "{random_boss}! 네놈이 신전 모래에 함정을 팠구나!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "뼈가 녹아 백골이 되는 것이 이 사막의 잔혹한 순리다."
					}
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "내게 승리해도… 뼛속에 스민 호박색 부식은 멈추지 않는다…"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "아슈르의 골수가 더 녹아내리기전에 지하 통로로 이동해야 해!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "수호자는 쓰러졌으나, 아슈르의 무릎 뼈는 호박색 진액으로 계속 붕괴하고 있었다."
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "신전의 모래 속 백골로 묻혀라."
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "아직 골수가 전부 녹아내리지 않았어… 끝까지 싸운다!"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 15
		}
	]
} as const;
