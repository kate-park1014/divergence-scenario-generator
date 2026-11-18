export const scenario_desert_carnivex_42_04 = {
	"scenario_id": "desert_carnivex_42_04",
	"order": 4,
	"random_boss_title": {
		"korean": "현상수배범"
	},
	"act": "rising",
	"theme": "desert",
	"actors": {
		"jasper": {
			"id": "mon_f3aa9577-2fd6-4d65-80cd-6b654778b7f4",
			"name": {
				"korean": "재스퍼",
				"english": "Jasper",
				"japanese": "ジャスパー",
				"chinese": "贾斯珀",
				"french": "Jasper",
				"spanish": "Jasper",
				"vietnamese": "Jasper",
				"thai": "แจสเปอร์",
				"hindi": "जैस्पर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a1ee5a95-a611-4b33-7264-582262b68800/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/bc87b1ce-d1eb-40ea-ccc4-3c4434d35800/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "모래 아래에 묻혀 있던 지하 신전의 입구가 모습을 드러냈다."
					},
					"type": "speech"
				},
				{
					"speaker": "jasper",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter"
				},
				{
					"speaker": "jasper",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "저는 학자 재스퍼입니다. 동료들을 구할 단서가 이 신전에 있다 해서 동행했습니다."
					}
				},
				{
					"content": {
						"korean": "신전 안을 수색해 동료들을 살릴 단서를 찾아내야 한다."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "character_1",
					"content": {
						"korean": "…공기가 먼지와 오랫동안 닫혀 있던 냄새로 가득하네."
					},
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "오래된 거대한 벽화가 신전 벽면을 빼곡하게 채우고 있다."
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "jasper",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이 벽화를 보세요. 곤충 괴물이 사람의 골수를 먹고 껍질을 단단하게 키워왔다고 적혀 있습니다."
					},
					"speaker": "jasper",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "사람의 골수를 파먹는 괴물이라니, 호박색 물병을 남긴 자와 연관이 깊다."
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…등골이 오싹해지네."
					},
					"speaker": "character_2",
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "jasper",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						2
					]
				},
				{
					"emotion": "base",
					"speaker": "jasper",
					"type": "speech",
					"content": {
						"korean": "벽화의 기록대로라면, 중앙 안치소에 괴물의 전말이 더 자세히 남아 있을 겁니다."
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "무슨 일이 있어도 길잡이의 정체와 괴물의 진실을 확인하겠다."
					}
				},
				{
					"content": {
						"korean": "…어둠 속에서 무언가 지켜보는 기분이 들어."
					},
					"type": "speech",
					"speaker": "character_3",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"content": {
						"korean": "신전 중앙으로 향하는 모래 바닥에 길고 흉측하게 그어진 자국이 남아 있다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "신전 바닥에 깊게 파인 뼈마디가 긁힌 모래 자국을 발견했다."
					}
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "jasper",
					"spot": [
						3,
						3
					],
					"action": "enter"
				},
				{
					"speaker": "jasper",
					"emotion": "angry",
					"content": {
						"korean": "이 자국은 거대한 마디 갑옷을 가진 존재가 지나간 흔적입니다!"
					},
					"type": "speech"
				},
				{
					"speaker": "character_4",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…발밑이 불안하게 흔들리는 것 같아."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "안치소 입구에서 무장을 한 정체 불명의 자가 칼을 뽑아 들며 길을 막아선다."
					}
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "더 이상 벽화를 읽게 놔둘 수 없다! {random_boss} 님께 뇌물을 받은 이상 진실은 묻혀야 한다!"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "길잡이에게 돈을 받고 진실을 덮으려 덤벼드는 건가. 베어 넘기고 나아간다!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…살기가 뼛속까지 와닿네."
					},
					"emotion": "angry",
					"speaker": "character_1"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 하지만 이미 늦었다… 네놈들은 밖으로 나가지 못해…"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "뇌물에 눈이 멀어 동포를 괴물의 먹이로 바치다니."
					}
				},
				{
					"type": "direction",
					"speaker": "jasper",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "angry",
					"speaker": "jasper",
					"content": {
						"korean": "벽화의 기록과 바닥의 뼈마디 자국이 일치합니다. 길잡이는 오아시스를 지키는 자가 아니라 괴물입니다!"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "학자 재스퍼의 확신과 함께, 지하 신전에 깊은 정적이 맴돌았다."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "헛수고다! 오아시스의 진실은 절대 밝혀지지 않는다!"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "…아직 쓰러질 수는 없다. 다시 전열을 가다듬자!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"모래 속에 오랫동안 묻혀 있던 지하 신전.",
			"동료들을 구할 단서가 신전 깊은 곳의 옛 기록 속에 잠들어 있다.",
			"어둠을 뚫고 들어선 곳에서, 탐험대는 거대한 벽화와 마주한다."
		]
	}
} as const;
