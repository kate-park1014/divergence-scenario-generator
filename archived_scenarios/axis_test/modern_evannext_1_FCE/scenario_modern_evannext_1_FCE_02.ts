export const scenario_modern_evannext_1_FCE_02 = {
	"scenario_id": "modern_evannext_1_FCE_02",
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
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "복도. '대기' 문구가 깜빡인다."
					}
				},
				{
					"content": {
						"korean": "또 '다음'이야?"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "답을 안 주잖아!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "저 서류 더미, 수상해."
					},
					"speaker": "character_2",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그래. 물어봐야겠어."
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "서류 더미들이 느리게 움직인다."
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "너희 정체가 뭐야?"
					},
					"emotion": "angry"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "이 서류들, 왜 움직여?"
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "종이 마찰음이 들려온다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "direction",
					"speaker": "nia",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "흐흐… 그거 알아?"
					},
					"speaker": "nia"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "저 서류, 다 낙방 서류야!"
					},
					"speaker": "nia"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "낙방? 무슨 소리야?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "재활용되는 면접관이라니까!"
					},
					"speaker": "nia",
					"emotion": "happy"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "면접관이 서류라고?"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"speaker": "nia",
					"content": {
						"korean": "'다음'만 보라고 세뇌당했잖아!"
					},
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "nia",
					"spot": [
						2,
						3
					],
					"action": "enter"
				},
				{
					"emotion": "happy",
					"speaker": "nia",
					"content": {
						"korean": "더 충격적인 증거!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "또 뭔데?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "'사라진 선배들'의 흔적!"
					},
					"speaker": "nia"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "니아가 낡은 취업 박람회 공고문을 꺼낸다."
					}
				},
				{
					"type": "speech",
					"speaker": "nia",
					"content": {
						"korean": "봐! '다음 단계 이동 완료' 도장!"
					},
					"emotion": "happy"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "이게… '성공'이라고?"
					}
				},
				{
					"emotion": "angry",
					"speaker": "nia",
					"content": {
						"korean": "시스템의 완벽한 조롱이지!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…황당해."
					},
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "nia",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"speaker": "nia",
					"content": {
						"korean": "시스템이 널 속이는 거야!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "왜 이러는 건데?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "다… 감시 카메라 때문이야!"
					},
					"speaker": "nia",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "감시?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "'칭찬 도장' 찍으려고! 흐흐흐!"
					},
					"speaker": "nia",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "쟤, 진짜 이상해."
					},
					"speaker": "character_1"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이 황당함이… 진실이라고?"
					}
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "대기실 가장 안쪽. 거대한 서류 더미가 몸집을 키운다."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "'다음' 대기 번호… 오류."
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이 모든 게… 장난이야?"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "'감정적'인 시도는… '미승인' 사항."
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "싫어! 답을 내놔!"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "'재준비'가 필요합니다. '다음'을 위해."
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "젠장… 다시 할 거야!"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "'승인 불가'. 데이터 부족."
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이게 다야?"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "내가 얻은 게 뭐야?"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "또다시 '다음 기회' 통지가 도착했다."
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"지난 '다음 없음' 전광판은 거짓이었다.",
			"애매한 불합격 통보에 분노했다.",
			"어차피 이 대기실은 끝이 없다.",
			"이번엔 직접 답을 물어볼 작정이었다.",
			"움직이는 서류 더미를 찾아서."
		]
	}
} as const;
