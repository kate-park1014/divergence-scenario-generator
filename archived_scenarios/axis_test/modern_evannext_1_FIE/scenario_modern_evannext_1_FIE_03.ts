export const scenario_modern_evannext_1_FIE_03 = {
	"scenario_id": "modern_evannext_1_FIE_03",
	"order": 3,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"kai": {
			"id": "mon_d7f29313-b8fb-49da-9a1a-01df5d13866e",
			"name": {
				"korean": "카이",
				"english": "Kai",
				"japanese": "カイ",
				"chinese": "凯",
				"french": "Kai",
				"spanish": "Kai",
				"vietnamese": "Kai",
				"thai": "ไค",
				"hindi": "काई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f10d9184-4155-4bb9-de2d-db61463f7c00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e41f8e03-08c9-4a4f-6f72-fa9342876f00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"불합격. 그러나 '다음 기회'는 또 찾아왔다.",
			"익숙한 복도. 낡은 대기실.",
			"그곳에서 나는 그를 만났다.",
			"거꾸로 가는 시계. 반복되는 절규."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "복도 끝에 낯선 대기실이 있었다. 낡은 벽지, 삐걱거리는 의자."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "여긴… 또 다른 시험장인가?"
					}
				},
				{
					"content": {
						"korean": "낡은 탁상시계가 거꾸로 돌고 있었다."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "시계가… 거꾸로 가?"
					}
				},
				{
					"speaker": "kai",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"emotion": "base",
					"speaker": "kai",
					"type": "speech",
					"content": {
						"korean": "…다음은 없어."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "누구세요?"
					}
				},
				{
					"content": {
						"korean": "…다음은 없어."
					},
					"speaker": "kai",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "kai"
				},
				{
					"type": "speech",
					"content": {
						"korean": "거기 누구 있어요! 왜 대답이 없어요?"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "kai",
					"emotion": "base",
					"content": {
						"korean": "…다음은 없어."
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "계속 그 말만 해요? 여기서 뭐 하는데요?"
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "탁상시계의 초침이 거꾸로 돌았다. 빠르게."
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "정말… 이상하네. 나가지 않을 거예요?"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "kai",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "여기서 뭐 하는지 말해봐요! 왜 나가지 않죠?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…나갈 수 없어."
					},
					"speaker": "kai",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "나간 사람이 없어요? 말도 안 돼!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "kai",
					"type": "speech",
					"content": {
						"korean": "…여기서… 사라진 사람들은…"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "사라져? 어디로 사라졌다는 거예요?"
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "…면접관이… 서류를 가져갔어."
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "서류를? 그게 무슨 소리예요?"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "kai"
				},
				{
					"content": {
						"korean": "…진실은… 다음이 없어."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "kai"
				},
				{
					"type": "speech",
					"content": {
						"korean": "다음이 없다고요? 그럼 여기 왜 있어요?"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "나는… 계속 여기였어."
					},
					"speaker": "kai",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 당신은… 이 루프에 갇힌 거야?"
					}
				},
				{
					"content": {
						"korean": "아아악—!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "kai"
				},
				{
					"content": {
						"korean": "카이의 절규가 주인공의 목소리처럼 들렸다."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "…내 목소리?"
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "카이의 얼굴이 일그러지며 주인공의 얼굴과 겹쳐졌다."
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "내가… 왜 여기 있어?"
					},
					"type": "speech"
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
						"korean": "너의 '다음'은… 나를 반복하는 것."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니. 나는 절대… 반복되지 않아."
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "이젠 내가 이 루프를 끊을 거야."
					},
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "겨우… 여기까지 왔군."
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "하지만… 너는 이제… 시작이다."
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "시작? 무슨 시작이라는 거야!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "정체 모를 자는 다시 대기실 벽 속으로 사라졌다."
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거울 속의 절규는 아직 끝나지 않았다."
					}
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "익숙한 대기실 중앙. 정체 모를 자가 서 있었다."
					}
				},
				{
					"content": {
						"korean": "드디어 '진실'을 본 건가?"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "당신이… 이 모든 걸 만들었어?"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "나는 그저… 너의 '다음'을 보여줄 뿐."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "내 다음은 내가 정해!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "…재밌군. 그럼 싸워봐."
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"id": 15
		}
	]
} as const;
