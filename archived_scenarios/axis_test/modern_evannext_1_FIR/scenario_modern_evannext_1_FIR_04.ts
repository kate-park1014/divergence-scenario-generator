export const scenario_modern_evannext_1_FIR_04 = {
	"scenario_id": "modern_evannext_1_FIR_04",
	"order": 4,
	"act": "rising",
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
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"기록 보관소 화재 현장은 종이 재로 가득했다.",
			"사라진 지원자들의 기록은 더욱 희미해졌다.",
			"나는 현장 보존을 주장하며 조사를 기다렸다.",
			"하지만 린이 나타나 증거물 정리를 지시했다.",
			"이것이 '다음 기회'의 규정이라고 했다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "화재로 기록 보관소는 종이 재로 가득했다."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "이 현장은 보존해야 해요."
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "공식 조사를 기다려야 해."
					}
				},
				{
					"speaker": "lin",
					"duration_ms": 500,
					"spot": [
						5,
						3
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "그럴 필요 없어요."
					},
					"type": "speech",
					"speaker": "lin",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "린 씨?"
					}
				},
				{
					"content": {
						"korean": "'다음 기회' 규정입니다. 즉시 정리."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "lin"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "무슨 규정이 그래요?"
					}
				},
				{
					"emotion": "base",
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "과거는 중요치 않아요."
					}
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						5,
						3
					],
					"type": "direction",
					"action": "enter",
					"speaker": "lin",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "이쪽 서류부터 파기하세요."
					},
					"emotion": "base",
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "왜 이렇게 서두르죠?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "규칙입니다. 신속하게 처리해야 해요."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "lin"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "이 서류는 중요해 보이는데."
					}
				},
				{
					"speaker": "lin",
					"emotion": "base",
					"content": {
						"korean": "폐기 대상이에요. 모두."
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "잠깐, 린 씨. 이 파일은 왜…"
					}
				},
				{
					"content": {
						"korean": "이건 나중에. 먼저 이것부터 처리하죠."
					},
					"speaker": "lin",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "뭔가 숨기는 것 같아."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						5,
						3
					],
					"type": "direction",
					"action": "enter",
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "이제 파쇄기로 넣으세요."
					},
					"type": "speech",
					"speaker": "lin",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "파쇄요? 다 태우는 게 아니라?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "base",
					"content": {
						"korean": "규정 변경. 폐기 방법은 수시로 바뀌어요."
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "이 서류들… 발송 기록인데."
					}
				},
				{
					"emotion": "base",
					"speaker": "lin",
					"content": {
						"korean": "'다음 기회' 통지서는 파기 대상이죠."
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "17개의 기록이… 사라지는구나."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "깨끗하게 정리될 거예요."
					},
					"speaker": "lin",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "lin",
					"spot": [
						5,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거의 끝났어요. 수고했어요."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "린 씨. 이거 떨어뜨렸는데."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "아, 고맙습니다."
					},
					"type": "speech",
					"emotion": "happy",
					"speaker": "lin"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "'면접관용'? 린 씨, 이게 뭐예요?"
					}
				},
				{
					"emotion": "sad",
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "…실수. 이건 제 것이 아니에요."
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "당신은 안내 직원이 아니잖아."
					}
				},
				{
					"speaker": "lin",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…무슨 말씀을. 저는 규정을 따를 뿐."
					}
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "파괴된 기록 보관소 깊은 곳, 정체 모를 자가 서 있었다."
					}
				},
				{
					"content": {
						"korean": "규칙은 깨지지 않는다."
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "당신이 시스템의 수호자인가?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "나는 규칙 그 자체다."
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "당신은 허점을 만들었어."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "어리석군. 허점 또한 규칙의 일부다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "너는 규칙을 이길 수 없다."
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아니. 난 허점을 찾을 거야."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "다시… 처음부터 시작해라."
					},
					"speaker": "random_boss",
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "크윽… 규칙은…"
					},
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "당신이 진실을 숨겼잖아."
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "진실은… 곧 드러날 거야."
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "당신의 규칙은 이제 끝났어."
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "시스템의 경고음이 더욱 커졌다. '면접관용' 배지가 바닥에 떨어져 있다."
					},
					"type": "speech"
				}
			]
		}
	]
} as const;
