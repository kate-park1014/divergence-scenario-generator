export const scenario_desert_vane_45_04 = {
	"scenario_id": "desert_vane_45_04",
	"order": 4,
	"random_boss_title": {
		"korean": "유적 파수꾼"
	},
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "바위 유적의 지하 입구는 차가운 모래와 묵직한 정적으로 가득했다."
					},
					"speaker": "narrator"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "kemet",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "kemet",
					"content": {
						"korean": "저는 오아시스 샘터의 비밀을 연구하는 학자 케메트입니다. 해독제 재료를 조사하려 오셨군요."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "그렇다. 마지막 재료를 찾아 이곳까지 들어왔다."
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…지하라 그런지 공기부터 퀴퀴하네."
					},
					"speaker": "character_1"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "유적 통로 바닥에 오아시스의 물길 흔적이 희미하게 이어져 있다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "kemet",
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "조사해 보니 오아시스 샘터가 검객들의 계약서로 오염되어 있습니다."
					},
					"speaker": "kemet",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "계약에 얽힌 빚을 파기하려면 오아시스 물을 모래에 쏟아버려야겠군요."
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "우리가 마신 물도 그 계약이었어… 어쩐지 손끝이 계속 저리더니."
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_2",
					"content": {
						"korean": "…등골이 오싹해진다."
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "kemet"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "kemet",
					"content": {
						"korean": "저는 지하 서고로 가서 수로 도면을 더 찾아보겠습니다. 무사히 약재를 구하십시오."
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "단서를 줘서 고맙다. 나머지는 우리가 해결하지."
					},
					"speaker": "character_any"
				},
				{
					"duration_ms": 400,
					"action": "exit",
					"direction": "down",
					"speaker": "kemet",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "character_3",
					"content": {
						"korean": "…바닥이 미세하게 떨리고 있어."
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "유적 바닥에 찢겨 떨어진 검은 가죽 옷조각이 누군가의 흔적처럼 남아 있다."
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "누군가 최근에 이 길을 지나간 게 틀림없다."
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "어둠 속에서 날카로운 무기가 긁히는 소리가 다가온다."
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…발소리가 바로 앞까지 왔다."
					},
					"speaker": "character_4",
					"type": "speech"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 하지만 샘터로 가봤자 아무것도 바꾸지 못할 것이다…"
					},
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "유적 파수꾼을 제압했다. 해독제의 마지막 재료도 확보했어."
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "파수꾼이 쓰러진 자리 너머로 달빛 오아시스 샘터로 향하는 비밀 통로가 열렸다."
					},
					"speaker": "narrator"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "kemet",
					"direction": "down"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "kemet",
					"content": {
						"korean": "재료를 구하셨군요! 오아시스 물을 모래에 쏟아 빚을 끝내려면 어서 달빛 오아시스 샘터로 가야 합니다."
					}
				},
				{
					"content": {
						"korean": "좋다. 모든 결판을 짓기 위해 달빛 오아시스 샘터로 이동한다."
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "유적 중앙 홀, 붉은 기운을 두른 {random_boss}이 길을 막아선다."
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이곳의 비밀을 아는 자는 더 이상 나아가지 못한다. 너희의 여정은 여기까지다."
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "베인의 첩자인가! 동료를 살리고 샘터로 가기 위해 너를 물리치겠다."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "…숨막히는 압박감이다."
					},
					"type": "speech",
					"speaker": "character_1",
					"emotion": "angry"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 자들, 이 지하 유적의 흙으로 돌아가라."
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…여기서 무너질 순 없다. 다시 전열을 다듬자."
					},
					"speaker": "character_any"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"해독제의 마지막 재료가 잠든 바위 지하 유적.",
			"사막 밑 깊은 유적 속에는 오아시스의 오래된 비밀이 숨겨져 있다.",
			"동료를 구하고 사막의 빚을 끊어내기 위해 탐험대는 어둠 속으로 나아간다."
		]
	}
} as const;
