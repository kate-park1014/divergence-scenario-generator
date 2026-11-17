export const scenario_desert_sirocco_47_04 = {
	"scenario_id": "desert_sirocco_47_04",
	"order": 4,
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
			"폭풍의 경계선, 귀를 찢는 잔류 검기의 쇠소리가 사막을 울린다.",
			"퇴역 검사 아슈르는 넋을 잃은 채 칼바람 속으로 발걸음을 옮긴다.",
			"그리운 전우를 부르기 위해 불어낸 놋쇠 피리의 신호음.",
			"그러나 그 소리가 부른 것은 구원이 아닌 잔혹한 결투장이었다."
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
					"content": {
						"korean": "폭풍의 경계선에 도달하자 날카로운 쇠소리가 살갗을 파고든다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ashur",
					"type": "direction"
				},
				{
					"speaker": "ashur",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…이 소리, 오랫동안 잊고 있던 전우의 검이 울리는 소리다."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "아슈르 씨가 칼바람이 몰아치는 폭풍 속 경계로 들어가고 있어."
					},
					"type": "speech"
				},
				{
					"speaker": "character_1",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…바람에서 피비린내가 나."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "휘몰아치는 모래 안개가 사막의 경계를 붉게 물들인다."
					}
				},
				{
					"type": "direction",
					"speaker": "random_boss",
					"duration_ms": 500,
					"spot": [
						5,
						3
					],
					"action": "enter"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "멈춰라! 그 안으로 더 들어가면 잔류 검기에 몸이 갈려 나간다!"
					}
				},
				{
					"speaker": "ashur",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "전우가 날 기다린다. 칼날의 파동을 뿌리칠 수 없다."
					},
					"speaker": "ashur",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아슈르 씨를 불러세워 폭풍 바깥으로 끌어내야 해."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…귀가 먹먹해진다."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_2"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "아슈르의 발걸음을 멈추기 위해 놋쇠 피리를 힘껏 불어 신호음을 보낸다."
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "피리를 불 때마다 모래바닥의 핏빛 모래가 원형 결투장의 경계선 형태로 뭉쳐지고 있어."
					}
				},
				{
					"speaker": "ashur",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"speaker": "ashur",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "피리 소리가… 사막에 잠든 결투의 기억을 일깨운다!"
					}
				},
				{
					"speaker": "character_3",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…소름 돋는 경계선이야."
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "놋쇠 피리의 공명음이 절벽의 깊은 칼자국과 반응해 울린다."
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "ashur",
					"type": "direction"
				},
				{
					"speaker": "ashur",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "검집의 문양이 빛난다! 피리 소리가 들리면 검을 뽑아 결투에 응하라 했다!"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "검집의 결투 문양이 잔류 검기를 끌어모아 모래 거인의 형상을 만들어내고 있어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_4",
					"content": {
						"korean": "…숨이 턱 막히는 압박감이야."
					},
					"emotion": "angry"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "수천 개의 검기가 뭉쳐져 거대한 모래 거인의 형상을 갖춘다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "random_boss",
					"action": "enter",
					"spot": [
						4,
						4
					]
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "피리 소리가 검기를 자극해 폭풍 거인을 깨웠다! 이제 결투장을 벗어날 수 없다!"
					}
				},
				{
					"content": {
						"korean": "아슈르 씨를 구하기 위해 모래 거인의 형상을 베어내야 해!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…이 피비린내 나는 폭풍을 멈춰야 해!"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "모래 거인의 검기에 밀려 몸이 뒤로 튕겨 나간다."
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "잔류 검기의 결투장에서 벗어날 수 없다!"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "…아직 무너질 수 없어. 아슈르 씨를 폭풍 속에 남겨둘 순 없다."
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "모래 거인이 흩어지며 칼바람의 파동이 잦아든다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "거인은 쓰러졌지만… 이미 피리 소리가 골짜기 더 깊은 곳의 폭풍을 깨우고 말았어."
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "검기의 진동이 공기를 메아리치며 멈추지 않는다."
					},
					"speaker": "narrator"
				}
			]
		}
	]
} as const;
