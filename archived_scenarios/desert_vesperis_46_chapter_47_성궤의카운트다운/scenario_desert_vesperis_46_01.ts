export const scenario_desert_vesperis_46_01 = {
	"scenario_id": "desert_vesperis_46_01",
	"order": 1,
	"act": "intro",
	"theme": "desert",
	"actors": {
		"amir": {
			"id": "mon_0096d602-52ab-4a9c-9cc8-4ff18ed3b655",
			"name": {
				"korean": "아미르",
				"english": "Amir",
				"japanese": "アミール",
				"chinese": "阿米尔",
				"french": "Amir",
				"spanish": "Amir",
				"vietnamese": "Amir",
				"thai": "อาเมียร์",
				"hindi": "अमीर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8cd60fb0-3699-44c4-6425-a3e97eec1800/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/b644dc95-9c27-442e-6dc6-73e5550a0200/public"
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
					"speaker": "narrator",
					"content": {
						"korean": "사원 입구 지하 통로에 들어서자 서늘한 기운과 함께 피비린내가 풍긴다."
					},
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						4
					],
					"speaker": "amir",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "여기까지 오느라 수고했어! 저 깊은 곳에 보물이 든 제단이 있다고."
					},
					"speaker": "amir"
				},
				{
					"content": {
						"korean": "벽면 전체에 검사 백 명의 유골 모양 그림이 새겨져 있군."
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…스산한 기운이 등골을 스친다."
					},
					"speaker": "character_1",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "amir",
					"content": {
						"korean": "오래된 장식일 뿐이야! 머뭇거리지 말고 날 따라오라고."
					},
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						2,
						4
					],
					"action": "enter",
					"speaker": "amir",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "amir",
					"content": {
						"korean": "이 아래로 내려가면 제단이야. 보물 냄새가 진동을 하는군!"
					},
					"emotion": "happy"
				},
				{
					"type": "speech",
					"content": {
						"korean": "제단 받침대 아래에 깨진 모래시계 껍데기 조각이 떨어져 있어."
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…바닥에서 기분 나쁜 진동이 느껴져."
					},
					"speaker": "character_2",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "깨진 조각 따위 신경 쓰지 마! 진짜 보물은 제단 위에 있을 테니까."
					},
					"speaker": "amir",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						4
					],
					"speaker": "amir",
					"action": "enter"
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "드디어 도착했어! 제단 중앙에 녹슨 모래시계가 놓여 있잖아!"
					},
					"speaker": "amir",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "벽에 핏빛으로 칠해진 숫자가 0이 될 때 사원이 붕괴된다는 글귀가 새겨져 있다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_3",
					"content": {
						"korean": "…절대 건드리면 안 될 것 같아."
					}
				},
				{
					"speaker": "amir",
					"content": {
						"korean": "겁먹지 마! 모래시계에 무슨 보석이라도 박혀 있을지 어떻게 알아?"
					},
					"emotion": "angry",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						4
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "amir"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "어라, 모래 사냥꾼의 경고문이잖아? '시계를 뒤집으면 붉은 폭풍을 맞이하리라'라니…"
					},
					"speaker": "amir"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "경고를 무시하고 제단 위 녹슨 모래시계를 뒤집었다."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…불길한 모래 소리가 귓가를 찌른다."
					},
					"speaker": "character_4",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "시계가 돌아가자 벽면의 성궤 문양이 붉게 빛나기 시작했다."
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "으악! 진짜로 붉은 빛이 피어오르고 있잖아! 무슨 짓을 한 거야!"
					},
					"speaker": "amir",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 시계를 뒤집은 이상, 카운트다운은 멈추지 않는다…!"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "벽면에 각인된 카운트다운 숫자가 빠른 속도로 줄어들고 있다."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "성궤에서 기괴한 쇳소리가 울려 퍼지며 붉은 모래 폭풍의 징조가 짙어진다."
					}
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "그림자 속에서 무기를 든 사냥꾼이 가로막아 선다."
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석도다! 금기를 어기고 모래시계를 뒤집다니!"
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "벽면의 피 묻은 성궤 문양이 점점 더 밝게 빛나고 있어."
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "시한 카운트다운은 시작되었다. 너희는 성궤의 붉은 폭풍에 분쇄될 것이다!"
					},
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "카운트다운의 모래가 쏟아진다. 사원의 붉은 모래 폭풍이 모든 걸 삼키려 한다."
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 침입자들이여, 붉은 모래 사원의 제물이 되어라!"
					},
					"emotion": "happy"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…여기서 쓰러질 순 없어. 주술을 해제할 방법을 찾아야 해."
					}
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"사막 한가운데 묻힌 고대 태양 사원.",
			"탐욕스러운 가이드 아미르를 따라 발을 들인 지하 통로에는 서늘한 핏자국이 가득했다.",
			"\"사원의 모래시계를 작동시키지 말라\"는 금기의 경고.",
			"그 경고를 무시한 순간, 사원의 시한 카운트다운이 시작된다."
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
