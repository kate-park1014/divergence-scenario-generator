export const scenario_desert_scoop_40_04 = {
	"scenario_id": "desert_scoop_40_04",
	"order": 4,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"kemet": {
			"id": "mon_2f8a1701-571b-40b5-92d9-69aa973cef18",
			"name": {
				"korean": "케메트",
				"english": "Kemet",
				"japanese": "ケメト",
				"chinese": "凯麦特",
				"french": "Kemet",
				"spanish": "Kemet",
				"vietnamese": "Kemet",
				"thai": "เคเมต",
				"hindi": "केमेट"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/fd9e93e0-2874-4647-0076-839718949500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8c3f2690-e8a9-44f5-4527-d8f8d4ea2800/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"파괴된 빙수 가판대 주변에 검은 핏자국이 점칠되어 있었다.",
			"누군가는 억울한 피해자라 주장했고, 누군가는 살인마를 탓했다.",
			"그러나 사막의 모래는 속이지 못한다.",
			"혈흔 학자 케메트와 함께, 역전된 진실의 궤적을 쫓는다."
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
					"type": "direction",
					"action": "focus",
					"duration_ms": 300
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "파괴된 가판대 바닥에 정체 모를 혈흔 흔적이 번져 있다."
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "kemet",
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "kemet",
					"emotion": "base",
					"content": {
						"korean": "핏자국의 흩어진 각도를 봐. 방어가 아니라 기습의 궤적이야."
					}
				},
				{
					"content": {
						"korean": "…소름 돋는 흔적이네."
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_1"
				},
				{
					"content": {
						"korean": "피해자라고 주장하던 자들이 먼저 검성을 공격했다는 뜻인가."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "맞아. 현장의 핏자국은 기습하려다 역으로 당했음을 증명하고 있어."
					},
					"type": "speech",
					"speaker": "kemet",
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "가판대 밑 붉은 모래를 헤치자 빛나는 조각이 손끝에 걸린다."
					},
					"type": "speech"
				},
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "kemet",
					"type": "direction"
				},
				{
					"content": {
						"korean": "모래 깊은 곳에 무언가 묻혀 있어. 당겨서 꺼내보자."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "모래 속에서 깨진 형광 무지개 맷돌 조각을 찾아냈다."
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "그 맷돌 손잡이가 흔들리고 있군. 묶어서 고정해야 해."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "kemet"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "금속 끈을 팽팽하게 감아 맷돌 손잡이를 단단히 고정했다."
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "kemet",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "고정한 맷돌 밑바닥의 모래를 털어내니 이상한 문양이 보인다."
					},
					"speaker": "kemet",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "숨이 턱 막히는 열기다."
					},
					"speaker": "character_2",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "맷돌 밑바닥에 무쌍검성의 정교한 아인 문양이 새겨져 있어."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이 문양은 검성의 정체와 연결된 명확한 증거야."
					},
					"speaker": "kemet",
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "kemet",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "네온 파라솔 기둥에 무언가 깊게 박혀 빛나고 있다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "기둥에 박힌 독화살 촉 3개를 손으로 뽑아냈다."
					}
				},
				{
					"emotion": "base",
					"speaker": "kemet",
					"content": {
						"korean": "이것 봐. 피해자라던 상인들이 쓰던 신경 독화살 촉이다."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "서늘한 감촉이 손끝에 남는다."
					},
					"emotion": "sad",
					"speaker": "character_3",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "상인들이 독화살로 먼저 선제 기습을 감행했음이 확실해졌다."
					}
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "자객 두목이 꺾인 무기를 거두며 억지로 물러섰다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "크윽... 가해자가 누구든 상관없다! 빙수의 독성을 막지 못하면 모두 죽는다!"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "피해자 상인들의 음모와 선제 기습 증거를 모두 확보했다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "모래 속에 갇혀 있던 진짜 거대한 폭로가 눈앞으로 다가온다."
					},
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "칼날이 사막의 열풍에 튕겨 나갔다."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "진실을 직시하지 않는 선동은 오래 가지 못한다. 다시 맞선다."
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"emotion": "happy",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "어리석은 놈들, 모래 바람에 흩어져라!"
					}
				}
			],
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "사막 자객 두목이 무기를 거머쥐며 핏빛 모래밭을 막아서서 부하들을 모은다."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "잔당 조사는 이제 그만해라! 당장 스쿱을 습격해야 한다!"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "선제 공격의 진실을 덮어둔 채 동조할 수는 없다."
					}
				},
				{
					"content": {
						"korean": "방해하는 자는 누구든 모래 속에 묻어주마!"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				}
			]
		}
	]
} as const;
