export const scenario_modern_evannext_1_FCE_03 = {
	"scenario_id": "modern_evannext_1_FCE_03",
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
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "복도. 한 남자가 바닥을 닦고 있다."
					},
					"emotion": "base"
				},
				{
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "kai"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "저 사람… '다음'을 기다리는 건가?"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "happy",
					"speaker": "kai",
					"type": "speech",
					"content": {
						"korean": "네! 어서 오세요! 다음 기회는 늘 설레죠!"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "설레요? 계속 대기만 하는데?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "준비가 완벽하면 언젠가 기회가 와요!"
					},
					"speaker": "kai"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "오지 않을 기회를 왜…."
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "저 사람은… 이 상황이 이상하지 않나?"
					}
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "복도 끝에 비상구 문이 보였다."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "kai",
					"spot": [
						5,
						2
					],
					"duration_ms": 500
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "카이 씨, 저 문으로 나가요!"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "네? 안 돼요! '다음 점수'가 무효화돼요!"
					},
					"speaker": "kai"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "무슨 점수! 여기 지옥이에요!"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "지금까지 쌓은 노력들이…!"
					},
					"speaker": "kai"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "다 거짓이에요! 당신도 속고 있어요!"
					}
				},
				{
					"emotion": "happy",
					"speaker": "kai",
					"content": {
						"korean": "아니에요! 다음은 올 거예요!"
					},
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"speaker": "kai",
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "자, '다음 단계 준비 체크리스트'입니다!"
					},
					"speaker": "kai",
					"emotion": "happy"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "체크리스트? 난 나가자고…!"
					}
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "이거면 다음 준비에 완벽해져요!"
					},
					"emotion": "happy"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "카이 씨, 당신… 왜 이렇게 됐어요?"
					}
				},
				{
					"content": {
						"korean": "항상 '다음'을 바라보며 웃어야죠!"
					},
					"speaker": "kai",
					"type": "speech",
					"emotion": "happy"
				},
				{
					"type": "speech",
					"content": {
						"korean": "웃어? 이런 상황에서?"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "character_3",
					"content": {
						"korean": "…그 미소가 너무 소름 돋아."
					},
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "띠링♪ 안내 방송이 울린다."
					}
				},
				{
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "kai",
					"action": "enter"
				},
				{
					"content": {
						"korean": "개인의 '적극성'이 기록되었습니다."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "뭐? 뭐가 기록돼?"
					}
				},
				{
					"emotion": "happy",
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "축하해요! 우수 사례로 선정되셨어요!"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "우수 사례? 난 탈출하려 한 건데!"
					}
				},
				{
					"content": {
						"korean": "다음 준비에 대한… '열정'이 높이 평가된 거죠!"
					},
					"speaker": "kai",
					"type": "speech",
					"emotion": "happy"
				},
				{
					"content": {
						"korean": "이게… '우수 사례'라고?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "하하… '다음'을 위해 더 '준비'해라."
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "빌어먹을… 다시 올 거야!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이 지옥… 내가 부숴 버릴 거야!"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "…네 '투쟁'도 '다음 단계'의 일부일 뿐."
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "무슨 소리야! 이게 끝이야!"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "아니. 너의 이름이… 기록되었다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "내 이름? 어디에?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "낡은 전광판에 '다음 없음' 글자가 희미하게 뜬다."
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "무한 대기실 중앙. 정체 모를 그림자가 나타났다."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "또 '다음'을 준비하는군. 재미있어."
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "당신이… 이 시스템이야?"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "나는 그저 '다음'의 흐름을 지킬 뿐."
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "그 흐름… 내가 끊어버릴 거야!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "어차피 모든 것은 '다음'을 향한다."
					},
					"speaker": "random_boss"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"2번 시나리오의 결과가 다시 시작되었다.",
			"또 '다음 기회' 통지가 도착했다.",
			"움직이는 서류 더미는 답을 모른다 했다.",
			"이번엔 다른 지원자를 구해야 한다.",
			"카이라는 이름의 남자를 이 악몽에서 꺼낼 것이다."
		]
	}
} as const;
