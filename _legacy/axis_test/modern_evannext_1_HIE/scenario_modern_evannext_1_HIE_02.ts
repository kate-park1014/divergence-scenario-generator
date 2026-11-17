export const scenario_modern_evannext_1_HIE_02 = {
	"scenario_id": "modern_evannext_1_HIE_02",
	"order": 2,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"nia": {
			"id": "mon_872177dd-fcf0-40d8-b78c-fd795017c763",
			"name": {
				"korean": "니아",
				"english": "Nia",
				"japanese": "ニア",
				"chinese": "妮娅",
				"french": "Nia",
				"spanish": "Nia",
				"vietnamese": "Nia",
				"thai": "เนีย",
				"hindi": "निया"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/db690f96-d5b3-498a-f4ec-f269e6e95100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a8fe5d7a-56fe-4822-c272-5a04fd7f4c00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"첫 시험 결과가 나왔다.",
			"아이의 이름과 함께 '불합격' 통지였다.",
			"절망 속에, 한 여자를 만났다.",
			"그녀는 찢어진 사진을 들고 있었다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "손에 쥐어진 종이가 흔들렸다."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…불합격."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "아이 이름이 왜 여기에…"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "치료비를 못 받으면 안 돼."
					},
					"emotion": "sad"
				},
				{
					"action": "enter",
					"speaker": "nia",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						5,
						1
					]
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "nia",
					"content": {
						"korean": "…나도 받았어."
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "누구…세요?"
					}
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						5,
						1
					],
					"speaker": "nia",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "nia",
					"content": {
						"korean": "난 니아. 나도 떨어졌어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "불합격… 왜요?"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "nia",
					"content": {
						"korean": "이걸 봐. 내 가족사진이야."
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "사진 한 귀퉁이가 찢겨 있었다."
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "찢어졌네…"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "nia",
					"content": {
						"korean": "면접관들은… 편지 더미야."
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "nia",
					"content": {
						"korean": "가족과의 마지막을 잊게 하는."
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						5,
						1
					],
					"speaker": "nia",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"speaker": "nia",
					"content": {
						"korean": "사라진 사람들도…"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "사라진 사람들? '다음'을 준비하러 간 거 아녜요?"
					}
				},
				{
					"type": "speech",
					"speaker": "nia",
					"content": {
						"korean": "아니야. 그들은 잊혀진 거야."
					},
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"speaker": "nia",
					"content": {
						"korean": "가족을 위해 모든 걸 바쳤지만."
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…그냥 착각일 거예요."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "우리 아이 치료가 먼저야."
					}
				},
				{
					"speaker": "nia",
					"content": {
						"korean": "당신도… 곧 알게 될 거야."
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "니아의 찢어진 사진 속 가족이 웃고 있었다."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "잊혀진다고…?"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "내 아이도 저렇게 될까."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아냐. 난 달라. 꼭 치료할 거야."
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "다음 기회를 잡아야만 해."
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "주인공의 손에 든 아이 사진이 흐릿했다."
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…무서워."
					},
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "실망이군. 가족을 잊고 싶었나?"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…아냐. 반드시 아이를 구할 거야."
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "다시 돌아와서 '다음'을 잡겠어."
					},
					"emotion": "angry"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "잘했다. 하지만… 잊지 마."
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "가족은 언제든 찢어질 수 있다는 걸."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "면접실은 또 다른 대기실로 이어졌다."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이게 끝이 아니라고…?"
					},
					"emotion": "sad"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "낡은 면접실 앞에 정체 모를 자가 서 있었다."
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "왔군. 절망에 빠진 자여."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "아이의 치료를 포기할 건가?"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "아니. 절대."
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "난 '다음'을 잡을 거야."
					},
					"type": "speech"
				}
			]
		}
	]
} as const;
