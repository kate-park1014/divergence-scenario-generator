export const scenario_modern_evannext_1_FIR_01 = {
	"scenario_id": "modern_evannext_1_FIR_01",
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
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "조명이 어두운 대기실, 수많은 사람들이 앉아 있다."
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "여기가 '최종 기회 대기실'인가요?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "lin",
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "lin",
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "맞아요. 환영해요."
					}
				},
				{
					"speaker": "lin",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "저는 린이에요. 안내를 도울 거예요."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "안내요?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네. '다음 기회' 준비는 중요하죠."
					},
					"speaker": "lin",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "다들 '다음'이라고만 말하네요."
					}
				},
				{
					"content": {
						"korean": "몇몇 지원자들이 벽을 긁는 소리가 들린다."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…이상해."
					}
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "lin",
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "lin",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "자, 이쪽으로 오세요."
					}
				},
				{
					"content": {
						"korean": "저 사람들은 뭐 하는 거죠?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "lin",
					"emotion": "base",
					"content": {
						"korean": "'다음 기회'를 준비 중이죠."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "모두 똑같은 말만 해요. '다음'…"
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "과거는 중요하지 않아요. 오직 '다음'."
					},
					"type": "speech",
					"speaker": "lin",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "과거 기록이 사라진다니?"
					}
				},
				{
					"content": {
						"korean": "오직 다음만 보세요. 성공의 지름길이죠."
					},
					"speaker": "lin",
					"emotion": "happy",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "대기실 복도에서 희미한 속삭임이 들린다."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…사라진 사람들이 많다는 소문이?"
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "lin",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"speaker": "lin",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "'성공 가이드'는 받아봤나요?"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "성공한 사람들은 어디로 가나요?"
					}
				},
				{
					"content": {
						"korean": "더 높은 곳으로 갔죠. 물론이에요."
					},
					"speaker": "lin",
					"emotion": "happy",
					"type": "speech"
				},
				{
					"content": {
						"korean": "소문에는… 아무 흔적도 없다고 하던데."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "면접실 문이 살짝 열려 있고, 안은 비어 있다."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "면접관은 없어요?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "lin",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "지금은 서류만 있어요. 곧 '다음'이 올 거예요."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…서류?"
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "lin",
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "첫 시험이에요. 가이드를 잘 따랐죠?"
					},
					"type": "speech",
					"speaker": "lin",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "린 씨 조언은 너무… 완벽했어요."
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "완벽한 준비가 '다음 기회'를 만들죠."
					},
					"type": "speech",
					"speaker": "lin",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "만약 실패하면요?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "base",
					"content": {
						"korean": "그런 질문은 하지 않아요. 오직 '다음'."
					}
				},
				{
					"content": {
						"korean": "주인공이 면접실 안으로 들어선다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "나는 이 규칙을 따르지 않겠어."
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "넌 '다음'을 준비하지 않았어."
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "다시… 처음부터 시작해라."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "아니. 난 여기서 이 시스템을 부술 거야."
					},
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "면접실 안, 서류 더미 앞에 정체 모를 자가 서 있었다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "당신이… 면접관인가요?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "아니. 나는 '다음 기회'의 수호자다."
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "네가 규칙을 어기려 하는군."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "이 굴레를 끊을 거야."
					}
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "크윽… 어리석은 도전이다."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "'다음'은 계속될 거야. 영원히."
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "아니. 이제 진짜 시작이야."
					}
				},
				{
					"content": {
						"korean": "시스템이 경고음을 내며, 대기실 곳곳에 균열이 가기 시작한다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"발신자 불명의 등기 우편을 받았다.",
			"'최고의 기회'라는 문구가 쓰여 있었다.",
			"낯선 대기실에 도착했다.",
			"'린'이라는 직원이 나를 안내했다.",
			"나는 첫 시험을 앞두고 있었다."
		]
	}
} as const;
