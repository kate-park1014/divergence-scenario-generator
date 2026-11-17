export const scenario_modern_evannext_1_HIR_01 = {
	"scenario_id": "modern_evannext_1_HIR_01",
	"order": 1,
	"act": "intro",
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "차갑고 텅 빈 대기실. 벽에는 '최고의 기회' 문구가 적혀 있었다."
					}
				},
				{
					"content": {
						"korean": "…여기가 어딘데?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "lin",
					"spot": [
						3,
						1
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "오셨군요. 기다렸습니다."
					},
					"type": "speech",
					"speaker": "lin",
					"emotion": "happy"
				},
				{
					"content": {
						"korean": "당신은…?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "전 린입니다. 당신의 ‘다음’을 도울 안내자죠."
					},
					"speaker": "lin",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "다음?"
					}
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "base",
					"content": {
						"korean": "네. 여기선 ‘다음 기회’가 가장 중요합니다."
					}
				},
				{
					"content": {
						"korean": "어딘가 스산한 친절. 대기실 한구석엔 빈 의자들이 보였다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						1
					],
					"speaker": "lin",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "성공을 위한 공식은 간단해요."
					},
					"speaker": "lin",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "현재는 중요치 않아요. 다음을 완벽히 준비하는 거죠."
					},
					"speaker": "lin",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "저 사람들은 왜…"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_1",
					"emotion": "base",
					"content": {
						"korean": "…다음… 다음 기회…"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "지난 건 잊어. 다음이 진짜야."
					},
					"speaker": "character_2",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "과거를 잊는다고?"
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"speaker": "lin",
					"emotion": "base",
					"content": {
						"korean": "네. 과거는 방해만 될 뿐이니까요."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "다른 지원자들의 눈빛이 텅 비어 있었다."
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "lin",
					"spot": [
						3,
						1
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "곧 첫 시험이 시작될 겁니다."
					},
					"speaker": "lin",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "아까… 빈 의자들이요."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "아, 합격자들의 자리요?"
					},
					"speaker": "lin",
					"emotion": "happy"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "합격하면… 사라지는 건가요?"
					}
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "base",
					"content": {
						"korean": "네. 더 높은 곳으로 이동하죠. 흔적 없이."
					}
				},
				{
					"content": {
						"korean": "…흔적 없이?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "완벽한 질서입니다. 자, 준비되셨나요?"
					},
					"speaker": "lin",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "젠장… 모르겠다. 가보자."
					},
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						1
					],
					"duration_ms": 500,
					"speaker": "lin",
					"type": "direction"
				},
				{
					"speaker": "lin",
					"emotion": "base",
					"content": {
						"korean": "잊지 마세요. 준비가 부족하면…"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "다음은 없습니다."
					},
					"speaker": "lin",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "협박인가요?"
					}
				},
				{
					"speaker": "lin",
					"emotion": "base",
					"content": {
						"korean": "아뇨. 조언이죠. 완벽을 위한."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "면접실 문이 거대하게 열렸다. 안은 어둠뿐이었다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "그래. 다음이 없다고?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "내가 직접 확인해볼게."
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "어둠 속, 정체 모를 존재가 서 있었다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "왔군. 미련한 자여."
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "네가… 면접관?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "난 그저, 너의 ‘다음’을 확인하는 존재."
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "헛소리 집어치워! 사라진 사람들은?!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "그들은 완벽해졌다. 그리고… 지워졌다."
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "어둠이 모든 것을 집어삼켰다."
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "준비가 부족했군. 다음 기회를 기다려라."
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니… 다음은 없어. 여기서 끝낼 거야."
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "놀랍군. 여기까지 오다니."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "하지만… 진정한 시험은 ‘다음’에 있다."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "다음? 또 같은 소리!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "이 반복을 끝낼 거야. 반드시."
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "알 수 없는 힘에 이끌려, 눈앞이 흐려졌다. 다시, 오전 9시였다."
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"‘최고의 기회’라는 알림을 받았다.",
			"낯선 대기실에 도착했다.",
			"모두가 ‘다음’만을 중얼거렸다.",
			"첫 번째 시험이 시작되려 했다."
		]
	}
} as const;
