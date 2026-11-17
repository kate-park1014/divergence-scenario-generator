export const scenario_modern_evannext_1_FIE_01 = {
	"scenario_id": "modern_evannext_1_FIE_01",
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
					"content": {
						"korean": "끝이 보이지 않는 대기실. 수십 개의 의자가 줄지어 있었다."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "lin",
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "어서 와. 기다렸어."
					},
					"emotion": "happy"
				},
				{
					"content": {
						"korean": "여기가… 최고의 기회?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "응. 합격하려면 완벽하게 준비해야 해."
					},
					"speaker": "lin",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "그리고 실패해도 괜찮아. 다음 기회가 있으니까."
					},
					"speaker": "lin"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "다음…?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "여기 있던 사람들은 전부 그걸 준비해서 떠났어."
					},
					"speaker": "lin",
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "lin",
					"spot": [
						5,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "happy",
					"speaker": "lin",
					"content": {
						"korean": "다른 지원자들을 봐. 다들 열심히 준비하고 있어."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "저 사람들은… 뭘 준비하는 거죠?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "lin",
					"content": {
						"korean": "응. 다음 기회를 위한 완벽한 준비."
					}
				},
				{
					"content": {
						"korean": "계속 '다음'만 말하는데요."
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "맞아. 과거는 중요하지 않아. 다음이 중요해."
					},
					"speaker": "lin",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…좀 이상한데요."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "주인공의 등 뒤에서 희미한 웃음소리가 들려왔다."
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "lin",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						5,
						2
					]
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "불안해 보여. 무슨 일이야?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "여기서 합격했던 사람들이… 사라졌다던데요."
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "happy",
					"speaker": "lin",
					"content": {
						"korean": "사라진 게 아니야. 완벽한 준비로 더 좋은 곳으로 간 거지."
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "흔적도 없이요?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "원래 그래. 여긴 그저 대기실일 뿐이니까."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…그래도 너무 조용해요."
					},
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "빈 의자 위에는 명찰 하나만 놓여 있었다."
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "lin",
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "이제 첫 시험이야. 너무 긴장하지 마."
					},
					"speaker": "lin",
					"emotion": "happy",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "린 씨 조언은 항상 완벽하네요."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그럼. 다음을 위한 가장 빠른 길을 알려주는 거야."
					},
					"speaker": "lin",
					"emotion": "happy"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "길이… 너무 잘 닦인 것 같아요."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "걱정 마. 모든 건 '다음 기회'를 향해 있어."
					},
					"speaker": "lin",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "문 너머에서 알 수 없는 소리가 들려왔다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…가야겠네요."
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "시험장 중앙, 정체 모를 자가 서 있었다."
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "왔군. '다음'을 원하는가?"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "당신이 시험관이에요?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "나는 그저 너의 '다음'을 확인하는 존재다."
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "…당신이 원하는 건 뭐죠."
					}
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "…강하군. 하지만 이건 시작일 뿐이다."
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "시작…?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "그래. 너의 '다음'은 이미 정해져 있어."
					},
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "무슨 소리야!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "정체 모를 자는 연기처럼 사라졌다. 다음 방 문이 열렸다."
					},
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "아직 멀었군. 너의 '다음'은 패배다."
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…아니. 반드시 다음 기회를 잡을 거야."
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"\"최고의 기회\". 알 수 없는 통지 한 장이었다.",
			"낯선 대기실. 이곳에서 모든 것이 시작된다고 했다.",
			"주인공은 끝없이 반복되는 '다음 기회'를 끊어야 했다.",
			"진정한 시작을 찾아 이 순환을 끝낼 것이다."
		]
	}
} as const;
