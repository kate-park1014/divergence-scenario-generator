export const scenario_modern_evannext_1_HIR_02 = {
	"scenario_id": "modern_evannext_1_HIR_02",
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "다시, 오전 9시. 차가운 대기실."
					}
				},
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "nia",
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…또 시작됐어! 당신!"
					},
					"speaker": "nia",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "뭐야. 당신 또 여기 있었어?"
					}
				},
				{
					"emotion": "angry",
					"speaker": "nia",
					"content": {
						"korean": "면접관이… 서류 더미야!"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "서류 더미? 뭔 소리야."
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그리고… 사라진 사람들!"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "nia"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "…헛소리 마. 나도 '다음' 준비해야 해."
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "nia",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "내 말 좀 들어! 제발!"
					},
					"type": "speech",
					"speaker": "nia",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "또야? 귀찮게 왜 이래."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "면접관 서류, 그거… 움직여! 글자가 막 변해!"
					},
					"speaker": "nia",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "움직이는 서류? 말도 안 돼."
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "nia",
					"content": {
						"korean": "그리고… 합격자 의자들! 다 없어졌잖아!"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "…어. 의자가 없네. 그래도 난 '다음'이 중요해."
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "nia",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "그들… 합격한 게 아니야! 다들 지워진 거야!"
					},
					"speaker": "nia",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "지워지다니. 사라졌다는 거잖아."
					}
				},
				{
					"emotion": "sad",
					"speaker": "nia",
					"content": {
						"korean": "아무도 기억 못 해! 내가 알아냈어!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아 됐어. 내 '다음 기회' 준비 방해하지 마."
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "쟤 또 시작이네. 다음이나 준비하지."
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "다른 지원자들이 니아를 비웃었다."
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"speaker": "nia",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "nia",
					"emotion": "sad",
					"content": {
						"korean": "제발… 나 좀 믿어줘. 다들… 사라질 거야."
					}
				},
				{
					"content": {
						"korean": "닥쳐, 니아. 내 시간 없어."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "당신도… 당신도 곧…!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "nia"
				},
				{
					"type": "speech",
					"content": {
						"korean": "입 다물라고 했지!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "니아는 벽에 기댄 채 흐느꼈다."
					}
				},
				{
					"content": {
						"korean": "…됐다. 면접실로 간다."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "서류 더미가 주인공을 덮쳤다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "넌 '다음'을 망쳤다. 대가를 치러라."
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "크윽… 나는 '다음'을 놓지 않아."
					},
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "면접실 안. 정체 모를 존재가 서류 더미처럼 보였다."
					}
				},
				{
					"content": {
						"korean": "왔군. '다음'을 준비하는 자여."
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "네가… 면접관? 그저 서류 더미일 뿐이잖아."
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "넌 아직… 내 의미를 모른다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "내가 이 '다음'을 끝낼 거야."
					}
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "놀랍군. 서류 더미를… 해치다니."
					}
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "하지만… 넌 여전히 '다음'에 갇혀 있다."
					}
				},
				{
					"content": {
						"korean": "뭐? 무슨 말이야!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "눈앞이 흐려졌다. 익숙한 대기실이 다시 나타났다. 오전 9시였다."
					}
				},
				{
					"content": {
						"korean": "…젠장. 또 처음이야?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"알 수 없는 힘에 이끌려, 눈앞이 흐려졌다.",
			"다시, 오전 9시였다. 두 번째 기회.",
			"이번엔 뭔가를 바꿀 수 있을까.",
			"아니, 나는 그저 '다음'을 준비해야 한다."
		]
	}
} as const;
