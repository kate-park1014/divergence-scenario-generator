export const scenario_modern_evannext_1_HIE_01 = {
	"scenario_id": "modern_evannext_1_HIE_01",
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
					"emotion": "base",
					"content": {
						"korean": "벽에는 오래된 흔적만 가득했다."
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…여기 맞아?"
					},
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"speaker": "lin",
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "네, 맞아요. 환영합니다."
					},
					"speaker": "lin"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "린…?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "베테랑 안내자 린입니다."
					},
					"speaker": "lin",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "통지서를 받으셨죠? '최고의 기회'요."
					},
					"speaker": "lin",
					"type": "speech",
					"emotion": "happy"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "네. 가족을 위해…"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "여긴 성공 공식이 있어요."
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "공식…이요?"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "네. 그리고 '다음 기회'가 가장 중요하죠."
					}
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
					"duration_ms": 500,
					"type": "direction",
					"speaker": "lin",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "'다음 기회'를 위해선 모든 걸 바쳐야 해요."
					},
					"speaker": "lin",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "모든 걸요?"
					}
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "과거는 잊어요. 오직 '다음'만을 보세요."
					},
					"speaker": "lin",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "다른 지원자들은…"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "다른 이들은 흐린 눈으로 '다음'만 중얼거렸다."
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "다들 왜 저래요?"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "성공에 집중하는 거죠."
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "lin",
					"content": {
						"korean": "희생 없이는 얻는 것도 없어요."
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "lin",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "여기서 성공한 분들은 대기실을 떠났죠."
					},
					"speaker": "lin",
					"type": "speech",
					"emotion": "happy"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "어디로 갔는데요?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "더 높은 곳으로요. 모두가 원하는 곳."
					},
					"speaker": "lin",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아무도 돌아오지 않았다고…"
					}
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "소문은 소문일 뿐이에요."
					},
					"emotion": "base"
				},
				{
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "가족을 생각하세요. 다음 기회를 잡아야죠."
					},
					"speaker": "lin"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "가족…"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "뭔가 이상해."
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "lin",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이제 첫 시험 시간이에요."
					},
					"speaker": "lin",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "벌써?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "가족의 웃는 얼굴을 떠올려 봐요."
					},
					"emotion": "happy",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그게 당신을 이끌어 줄 거예요."
					},
					"speaker": "lin"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…가야 하나."
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "병원비…."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "주인공은 시험장 문을 향해 걸어갔다."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "시험장 안, 정체 모를 자가 서 있었다."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "왔군. 다음 기회를 바라는 자."
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "당신이 시험관이군."
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "자격을 증명해라. 가족을 위해."
					},
					"type": "speech"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…대단해. 하지만 이건 시작일 뿐."
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "'다음'이 기다린다."
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "다음…? 대체 뭐가."
					}
				},
				{
					"content": {
						"korean": "시험장은 또 다른 대기실로 이어졌다."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "아직 멀었군. 가족은 중요하지 않나?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…아냐. 반드시 가족을 구할 거야."
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "다시 돌아올 거야."
					},
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"손때 묻은 가족사진.",
			"구겨진 병원비 청구서가 그의 손에 들려 있었다.",
			"'최고의 기회'라는 알 수 없는 통지.",
			"낯선 대기실에 들어선 순간, 희망은 곧 불안으로 변했다."
		]
	}
} as const;
