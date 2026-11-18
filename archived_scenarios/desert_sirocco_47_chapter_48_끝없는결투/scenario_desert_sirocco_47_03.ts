export const scenario_desert_sirocco_47_03 = {
	"scenario_id": "desert_sirocco_47_03",
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "끊어진 통행로를 우회하여 메마른 오아시스에 다다랐다."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "ashur"
				},
				{
					"speaker": "ashur",
					"content": {
						"korean": "나는 이 오아시스를 지키는 수호자 아슈르다. 바위에 새겨진 부서진 칼자국을 조사하던 중이었다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "통행로가 막혀 오아시스 안쪽으로 지질러 가야 합니다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…오아시스인데 물조차 바짝 말라 있네."
					},
					"speaker": "character_1"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "ashur",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "ashur",
					"content": {
						"korean": "사막을 휩쓰는 모래폭풍이 오아시스의 바위까지 찢어놓고 갔다네."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "폭풍이 지나간 자리마다 깊은 칼자국이 남아 있군요."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_2",
					"content": {
						"korean": "…바위 표면이 칼날처럼 날카로워."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "오아시스 중앙의 짙은 모래구름 너머로 이상한 기운이 감돈다."
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "모래구름 사이로 청백색 번개가 잔영처럼 번쩍이고 있습니다."
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_3",
					"content": {
						"korean": "…눈이 시릴 정도로 강렬한 잔영이야."
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
						"korean": "모래구름이 걷히며 아까 본 청백색 번개의 잔영이 안쪽으로 스며든다."
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "방금 보았던 청백색 번개가 오아시스 깊은 곳으로 이어지고 있습니다."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…공기를 찢는 쇳소리가 나기 시작했어."
					},
					"speaker": "character_4"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "으윽… 목숨을 보존하라고 말렸거늘…"
					},
					"emotion": "sad"
				},
				{
					"type": "direction",
					"speaker": "ashur",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "ashur",
					"content": {
						"korean": "모래폭풍 속을 유심히 들어보게. 폭풍 한가운데서 거친 칼부림 소리가 들려오고 있네."
					}
				},
				{
					"speaker": "ashur",
					"content": {
						"korean": "그리고 결투의 깃발을 모래에 꽂아야만 놈과의 결투가 성립될 걸세."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "폭풍 속 칼부림 소리와 결투의 깃발이라… 귀중한 조언 감사합니다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "수호자의 단서를 가슴에 새긴 탐험대는 다음 destination인 바람의 신전 유적으로 향한다."
					}
				}
			],
			"dialogue": [
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "이 이상 나아가면 목숨을 잃는다! 오아시스 깊은 곳은 위험하니 당장 돌아가라!"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "모래폭풍을 잠재우기 위해 가야 한다. 길을 막는다면 물리치겠다!"
					}
				},
				{
					"content": {
						"korean": "…비켜줄 기세가 아니야."
					},
					"speaker": "character_1",
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "경고하지 않았나! 더 깊은 곳으로 나아갈 자격이 없다!"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "…여기서 물러설 수 없다. 다시 도전하겠다."
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"끊어진 통행로를 뒤로하고 메마른 오아시스로 향한다.",
			"말라붙은 샘 주변에는 차가운 칼자국만이 새겨져 있다.",
			"폭풍의 진상을 파헤치기 위해 사막 깊은 곳으로 발걸음을 옮긴다."
		]
	}
} as const;
