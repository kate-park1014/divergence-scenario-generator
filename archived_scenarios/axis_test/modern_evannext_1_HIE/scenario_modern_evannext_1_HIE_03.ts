export const scenario_modern_evannext_1_HIE_03 = {
	"scenario_id": "modern_evannext_1_HIE_03",
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
			"아이의 이름이 적힌 불합격 통지.",
			"니아의 찢어진 가족사진이 눈에 밟혔다.",
			"밤샘 서류 작업 끝에 돌아온 건,",
			"또 다른 병원비 청구서와 차가운 문자뿐.",
			"희망은 계속 '다음'으로 밀렸다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "밤새 쌓았던 서류들이 바닥에 흩어졌다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "이것도… 불합격이야?"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "아이 치료가 시급한데…"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "문자가 띠링 울렸다."
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "'다음 기회를 노려라'…."
					}
				},
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "kai",
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "kai",
					"content": {
						"korean": "흐읍… 흐읍…"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "저분은…?"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "kai"
				},
				{
					"emotion": "sad",
					"speaker": "kai",
					"content": {
						"korean": "이 손수건… 아내 유품인데."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아내분… 돌아가셨어요?"
					},
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "분명히… 마지막을 지킬 수 있을 줄 알았는데."
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "왜 늘 다음만… 기다리게 될까요?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "…."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "선택해야 해."
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "내 아이냐… 카이 아내 병원비냐."
					},
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "주인공은 자신의 치료비 서류를 꺼냈다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "내… '다음'을 포기한다 해도."
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이건… 외면할 수 없어."
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "서류 일부가 찢어지는 소리가 났다."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "카이 아내의 서류와… 바꿔치기하자."
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "찢어진 서류는 누군가에게 발견되었다."
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "누가… 이걸?"
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "시스템 메시지가 떴다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "'다음 기회… 지연'?"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "안 돼! 아이의… 치료 시기가!"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "내가… 무슨 짓을 한 거야."
					},
					"emotion": "sad"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "대가를… 치르지 않는군."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "하지만 잊지 마. 네 선택이…."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "내 선택? 내가 틀렸다고?"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "새로운 대기실이 눈앞에 펼쳐졌다."
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아직… 끝나지 않았어."
					}
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "면접실 앞에 정체 모를 자가 서 있었다."
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "네 아이의 기회를 빼앗은 자여."
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "내가… 뭘 빼앗았다고!"
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "규칙을 어겼으니 대가를 치러라."
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "네 아이는… 이제 끝이다."
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아니야! 포기 안 해!"
					},
					"type": "speech",
					"emotion": "angry"
				}
			]
		}
	]
} as const;
