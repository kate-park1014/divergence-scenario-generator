export const scenario_modern_evannext_1_HCE_04 = {
	"scenario_id": "modern_evannext_1_HCE_04",
	"order": 4,
	"act": "rising",
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
	"prologue": {
		"korean": [
			"카이를 구하려다 실패했다.",
			"린이 내게 다가왔다.",
			"그녀는 시스템의 '비밀 정보'를 주겠다며",
			"'핵심 관리자' 권한을 제안했다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "character_any",
					"content": {
						"korean": "카이를… 놓쳤어."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "린…."
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
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
					"emotion": "sad",
					"content": {
						"korean": "카이 일… 유감이에요."
					},
					"speaker": "lin",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "어떻게… 알고."
					}
				},
				{
					"content": {
						"korean": "시스템은 모든 걸 봐요. 그리고… 당신도."
					},
					"speaker": "lin",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "당신에게 줄 게 있어요. 비밀 정보와 권한."
					},
					"speaker": "lin",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "무슨 권한을?"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "lin",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "'핵심 관리자' 권한이에요."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "관리자? 왜 나한테?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"speaker": "lin",
					"content": {
						"korean": "당신은 문제를 해결할 수 있으니까요."
					}
				},
				{
					"content": {
						"korean": "시스템의… 문제 말하는 거야?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "lin",
					"content": {
						"korean": "네. 이대로 두면 모든 게 망가져요."
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "공동체를 돕고 싶죠?"
					},
					"speaker": "lin"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "너무… 갑작스러운데."
					},
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction",
					"speaker": "lin",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"content": {
						"korean": "'오류 수정 코드'예요. 이걸 입력하면 돼요."
					},
					"speaker": "lin",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이걸 넣으면… 어떻게 되는데?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "시스템이 정상화되고… 모두가 행복해질 거예요."
					},
					"emotion": "happy"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "정말… 그렇게 될까?"
					}
				},
				{
					"emotion": "sad",
					"speaker": "character_2",
					"content": {
						"korean": "뭔가… 찜찜해. 너무 쉬운데?"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "망설일 시간 없어요. 지금 해야 해요."
					},
					"speaker": "lin"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "lin",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "나는 린의 '오류 수정 코드'를 입력했다."
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "삐빅— 시스템 경고음이 울렸다."
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "뭐야… 뭐가 잘못됐어!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "완벽하게 작동해요. 보세요."
					},
					"speaker": "lin",
					"emotion": "happy"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아니… 다른 지원자들이…!"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "대기실 전체에 비상 경보가 울려 퍼졌다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "탈출 시도가… 막혔어! (절규)"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"speaker": "character_3",
					"content": {
						"korean": "우리가… 뭘 한 거야?"
					},
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "크윽… 어리석은…."
					},
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네가 막은 건… '진짜 자유'였다."
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "진짜 자유… 그럼 그 코드는 대체."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "린의 미소가 스쳐 지나갔다. 차갑게."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "주인공은 이제 시스템의 일부가 된 듯했다."
					},
					"emotion": "sad"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "네 선택이… 널 이 굴레에 가둘 것이다."
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "아니… 난 되돌릴 거야."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "린을 찾아서… 모든 것을 바로잡을 거야."
					},
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "경고음이 울리는 서버실 앞에 정체 모를 자가 서 있었다."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "환영한다. 시스템의 새로운 공범."
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "공범… 무슨 소리야!"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "네 손으로 그들을 이 굴레에 묶었지 않나."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "린… 네가 날 속였어!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이제 네 '다음'은 영원히 {random_boss}의 것이다."
					},
					"speaker": "random_boss"
				}
			]
		}
	]
} as const;
