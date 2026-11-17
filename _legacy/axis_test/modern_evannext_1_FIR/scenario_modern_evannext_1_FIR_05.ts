export const scenario_modern_evannext_1_FIR_05 = {
	"scenario_id": "modern_evannext_1_FIR_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "modern",
	"actors": {
		"lin": {
			"id": "mon_d036a884-3dde-472c-9fe7-c4807643860f",
			"name": {
				"korean": "린",
				"english": "Lin",
				"japanese": "リン",
				"chinese": "琳",
				"french": "Lin",
				"spanish": "Lin",
				"vietnamese": "Lin",
				"thai": "ลิน",
				"hindi": "लिन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a095dd66-1857-4f44-68b0-2ece83006d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/05b02694-f1ed-4e4c-b7ca-fb5b74a48900/public"
		}
	},
	"boss": {
		"pool_id": "pool_098"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "마지막 면접장, 차분한 대기실이 펼쳐져 있었다."
					}
				},
				{
					"content": {
						"korean": "여기가… 최종 면접장?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "lin",
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "네. '다음 기회'를 위한 마지막 단계죠."
					},
					"speaker": "lin",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "린 씨. '면접관용' 배지는 뭐죠?"
					}
				},
				{
					"content": {
						"korean": "…그건 착각이에요. 그럴 리가."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "lin"
				},
				{
					"speaker": "boss",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"emotion": "base",
					"speaker": "boss",
					"content": {
						"korean": "린은 그저 안내자일 뿐입니다."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "당신이… 에반 넥스트?"
					},
					"emotion": "base",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"content": {
						"korean": "수집한 증거들은… 모두 논리적 오류가 있습니다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "boss"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "무슨 소리죠? 내가 모은 단서들이!"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "boss",
					"content": {
						"korean": "니아의 자료는 정리되지 않았고, 카이의 기록은 불탔죠."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "그게 전부 당신이 꾸민 일이야!"
					}
				},
				{
					"emotion": "base",
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "린의 '완벽한 조언'들이 있었을 텐데요."
					}
				},
				{
					"content": {
						"korean": "그 조언들이…?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"spot": [
						4,
						3
					],
					"speaker": "lin",
					"type": "direction",
					"duration_ms": 300,
					"action": "focus"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "boss",
					"content": {
						"korean": "린은 '다음 기회'를 위한 효율적 안내자였습니다."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "저는… 시스템을 따랐을 뿐."
					},
					"speaker": "lin",
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "사라진 지원자들의 기록입니다. 보시죠."
					},
					"emotion": "base",
					"speaker": "boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이건… 그들이 직접 서명한 거야?"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "boss",
					"content": {
						"korean": "네. 스스로 '다음'이라는 유예를 선택한 기록이죠."
					}
				},
				{
					"content": {
						"korean": "거짓말! 이게 어떻게 자발적이야?"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그들은 '완벽한 준비'를 원했습니다. 그래서 영원히 준비 중이죠."
					}
				},
				{
					"content": {
						"korean": "그게 해방이 아니야. 또 다른 감금이지."
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "이 시스템의 규칙을 따르는 것이 순리입니다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "boss"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아니. 이 모든 '다음 기회' 통지서는 위조된 거야."
					}
				},
				{
					"content": {
						"korean": "증거는? 모두 스스로 선택했습니다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "boss"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "선택이 아니야. 그들은 속았던 거지."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이곳은 완벽한 시스템. 허점은 없습니다."
					},
					"speaker": "boss",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "시스템의 허점은 당신이야, 에반 넥스트!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "나는 이 대기실의 모든 기록과 구조를 파괴할 거야."
					}
				},
				{
					"content": {
						"korean": "건드릴 수 없습니다. 이곳은 절대적 공간."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "boss"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "boss",
					"emotion": "base",
					"content": {
						"korean": "당신도 '다음'을 선택할 수밖에 없을 겁니다."
					}
				},
				{
					"content": {
						"korean": "아니. 이 굴레를 끊을 때까지 다시 도전할 거야."
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "…거의 다 왔어요. 이번엔 진짜로… 느껴져요."
					},
					"speaker": "boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아니. 다음은 없어. 끝이야."
					}
				},
				{
					"content": {
						"korean": "대기실 모든 기록 캐비닛이 파손되었다."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "수십 년간 멈춰있던 대기실 시계가 다시 움직였다."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "이제… 진짜 시작이다."
					},
					"speaker": "character_any",
					"emotion": "happy"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "대기실 중앙, 에반 넥스트가 여유롭게 웃고 있었다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "진정한 시작은 이곳에 있습니다. 파괴할 필요 없어요."
					}
				},
				{
					"content": {
						"korean": "거짓말. 당신은 그 시작을 가둬왔어."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"emotion": "base",
					"content": {
						"korean": "그건… 당신의 선택이었습니다."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "이 시스템을 끝낼 거야. 여기서."
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"기록 보관소의 경고음이 울렸다.",
			"린이 떨어뜨린 배지에는 ‘면접관용’이 쓰여 있었다.",
			"‘다음 기회’ 시스템의 진실을 밝혀야 했다.",
			"나는 에반 넥스트를 찾아, 마지막 면접장으로 향했다."
		]
	},
	"epilogue": {
		"korean": [
			"대기실의 모든 기록과 구조가 파괴되었다.",
			"‘다음 라운드’로 통하던 문들은 모두 사라졌다.",
			"수십 년간 멈춰 있던 대기실 시계가 움직이기 시작했다.",
			"끝없는 대기실의 순환이 멈췄다.",
			"이것이 진정한 시작이었다."
		]
	}
} as const;
