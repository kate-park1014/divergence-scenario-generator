export const scenario_desert_sirocco_47_02 = {
	"scenario_id": "desert_sirocco_47_02",
	"order": 2,
	"random_boss_title": {
		"korean": "약탈자"
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
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "붉은 바위가 솟아오른 골짜기 위로 거친 모래바람이 불어온다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "kemet"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "kemet",
					"content": {
						"korean": "석공 케메트라고 하오. 바위에 새겨진 모래폭풍의 궤적을 조사하고 있었소."
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "끊어진 통행로를 다시 열 단서를 찾으러 왔다."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "character_1",
					"content": {
						"korean": "붉은 바위산이 용광로처럼 뜨겁네."
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
					"content": {
						"korean": "바람을 따라 짙은 모래 조각들이 기이하게 흘러내리고 있다."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이 흘러내리는 모래 조각들은 그냥 흩날리는 먼지가 아니다."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "kemet",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그 모래 조각들이 지나는 자리마다 바위에 칼자국이 스치듯 새겨지고 있소."
					},
					"speaker": "kemet",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…바람에서 모래 냄새가 날카롭게 씹힌다."
					},
					"speaker": "character_2",
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "kemet",
					"type": "direction"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "kemet",
					"content": {
						"korean": "골짜기 안쪽에 사막의 신이 내린 벌이라 주장하는 약탈자가 길을 막고 있소."
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "거짓 소문을 퍼뜨려 사람 통행을 막으려는 속셈이다."
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "등골이 오싹해지는 기운이야."
					},
					"speaker": "character_3"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "바위 모퉁이 너머에서 무기를 흩날리는 거친 발소리가 다가온다."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "거짓으로 위협하는 자가 전방에 모습을 드러냈다."
					},
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…뼛속까지 긴장된다."
					},
					"speaker": "character_4"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "이 모래폭풍은 사막의 신이 내린 벌이다! 감히 신의 뜻을 거스르고 지나가려느냐!"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "거짓으로 사막을 현혹하는 패거리일 뿐이다. 덤벼라!"
					}
				},
				{
					"content": {
						"korean": "말도 안 되는 핑계로 길을 막다니!"
					},
					"speaker": "character_1",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 신의 이름으로도 막지 못하다니…"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "direction",
					"speaker": "kemet",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"speaker": "kemet",
					"content": {
						"korean": "바위 궤적을 끝까지 분석했소. 모래폭풍은 신의 벌이 아니라 수많은 칼날의 기운이오."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "강한 칼날 기운이 모여 폭풍을 이루고 있었단 말인가."
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "폭풍의 다음 흔적을 따라 메마른 오아시스로 향한다."
					}
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "신의 벌을 받아라! 사막에서 영원히 헤매게 될 것이다!"
					},
					"type": "speech",
					"emotion": "happy"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…거짓 선동에 물러설 수는 없다. 다시 단열을 정비한다."
					},
					"speaker": "character_any"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"막혀버린 통행로를 다시 열기 위해 탐험대는 붉은 바위 골짜기로 이동한다.",
			"기이하게 베인 바위 벽면에는 모래폭풍이 남긴 흔적이 선명하다.",
			"골짜기 속에서 퍼지는 소문과 진실을 찾아 탐험대는 발걸음을 옮긴다."
		]
	}
} as const;
