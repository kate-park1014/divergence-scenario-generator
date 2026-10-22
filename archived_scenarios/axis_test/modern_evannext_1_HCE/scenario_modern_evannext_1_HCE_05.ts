export const scenario_modern_evannext_1_HCE_05 = {
	"scenario_id": "modern_evannext_1_HCE_05",
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
	"epilogue": {
		"korean": [
			"시스템은 멈췄다. '다음 기회'라는 거짓된 희망도.",
			"수많은 이들의 의식이 영원히 사라졌다.",
			"내가 한 선택의 결과는 너무나도 무거웠다.",
			"이제 새로운 시작이 필요했다. '다음'이 아닌 '지금'의 시작."
		]
	},
	"prologue": {
		"korean": [
			"린의 미소는 거짓이었다.",
			"내가 막은 건 '진짜 자유'였다.",
			"이제 모든 '다음'의 배후를 마주한다.",
			"에반 넥스. 마지막 면접장으로."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "면접장 깊은 곳, 거대한 문이 보였다."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "여기가… 에반 넥스의 방인가."
					},
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "lin",
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "마지막 면접이군요."
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "린… 네가 왜 여기에."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "당연하죠. 당신을 인도해야 하니까."
					},
					"speaker": "lin"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "인도? 웃기는 소리 마."
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "lin",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "당신의 행동은 모두 '다음'을 위한 거예요."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "내 선택이… 이 시스템을 도왔다고?"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "네. 완벽한 순환의 일부가 됐죠."
					},
					"speaker": "lin"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "그래서 니아의 정보도 지운 거야?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "그건 시스템의 최적화."
					}
				},
				{
					"content": {
						"korean": "카이도… 그렇게 된 거고."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"speaker": "lin",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "수많은 기록이 벽에 투사되고 있었다."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "이건 내가 했던 일들이잖아."
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "공동체를 위한 선택이었죠."
					},
					"type": "speech",
					"speaker": "lin",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "근데 왜 기록은… 왜곡되어 있지?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이것 또한 시스템의 발전이에요."
					},
					"speaker": "lin"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "모두가 시스템 안에 묶여버렸어."
					},
					"speaker": "character_any"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "공간의 형태가 일그러졌다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "뭐야… 여기가 어디야."
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "린, 아주 효율적이었어."
					},
					"speaker": "boss"
				},
				{
					"content": {
						"korean": "에반 넥스… 네가 린의 주인인가!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "저는 시스템의 일부입니다."
					}
				},
				{
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "린의 모든 조언은 나를 위한 것이었지."
					},
					"speaker": "boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그럼 이제 다음은 없어. 끝낼 거야."
					},
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"speaker": "boss",
					"content": {
						"korean": "네 시도는 시스템을 더욱 강하게 만들 뿐."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "너의 '다음'은 없다."
					},
					"speaker": "boss"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아니… 진실은 여기서 끝낼 수 없어."
					}
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "공간 중앙, 거대한 기계 장치가 움직였다."
					},
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "환영한다. 나의 최종 면접 지원자."
					},
					"speaker": "boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네가 모든 '다음'의 배후인가."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"speaker": "boss",
					"content": {
						"korean": "당신은 나의 완벽한 공범이지."
					}
				},
				{
					"content": {
						"korean": "내가 너의 시스템을 부술 거야."
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"emotion": "base",
					"speaker": "boss",
					"content": {
						"korean": "흥… 이게 끝이라 생각하나."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "boss",
					"content": {
						"korean": "'다음'은… 영원히 존재한다."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니. 여기서 끝이야."
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "모든 왜곡된 진실을 폭로할 거야."
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "시스템은 파괴됐다. 모든 기록이 전 세계에 공개됐다."
					},
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"id": 15
		}
	]
} as const;
