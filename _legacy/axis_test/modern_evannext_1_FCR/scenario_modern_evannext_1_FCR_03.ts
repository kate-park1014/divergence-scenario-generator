export const scenario_modern_evannext_1_FCR_03 = {
	"scenario_id": "modern_evannext_1_FCR_03",
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
			"잃어버린 정보를 채워야 했다.",
			"핵심은 마스터 해커 카이.",
			"하지만 그는 '다음'에 갇혀 있었다.",
			"코어 서버 해킹 계획, 그에게 통할까?",
			"작전의 중요한 퍼즐 조각이 비어 있었다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "먼지 쌓인 방. 찢겨진 서류들이 널려 있다."
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "카이… 맞죠?"
					}
				},
				{
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "kai",
					"action": "enter"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…누구냐. 또 '다음' 타령이냐."
					},
					"speaker": "kai",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "다음? 아니. '진짜 시작'을 얘기하러 왔어."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "kai",
					"content": {
						"korean": "진짜 시작? 그런 건 없어."
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "네 도움이 필요해. '코어 서버' 해킹 계획."
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "kai",
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"emotion": "base",
					"content": {
						"korean": "넥스트 기업 서버는 100층. 10분마다 코드 변경돼."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "kai",
					"content": {
						"korean": "10분마다… (그의 눈이 잠시 빛난다.) 불가능해."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "우린 니아가 준 정보도 있어. 부족한 건 너의 기술."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "내 기술? (코웃음) 수십 번 실패했어. 전부 다."
					},
					"speaker": "kai",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이번엔 달라. 완벽한 설계도야."
					},
					"speaker": "character_any"
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "(찢어진 서류 더미를 발로 찬다.) 전부 찢었어."
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…안 되겠네."
					},
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "kai",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "팀원들 역할 분담까지 다 짰어. 넌 핵심이야."
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "핵심? 난… 버그야. 시스템이 버린 존재."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아니, 넌 해커야. 넥스트 기업을 무너뜨릴 유일한 해커."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "kai",
					"content": {
						"korean": "(손에 든 서류를 망설이다가) …됐어. 이젠 지쳤다고."
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "카이는 서류들을 다시 찢어버렸다. '다음'이라는 글자가 흩날렸다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…젠장. 이 계획에 구멍이 생겼어."
					},
					"emotion": "angry"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "kai",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "(좌절감) 너 없이… 이 작전을 어떻게 해."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "(멍하니) 시스템은… 모든 걸 알아. 네 계획까지도."
					},
					"speaker": "kai"
				},
				{
					"content": {
						"korean": "뭐라고? 그럼 린이 알려준 정보는…"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "린? 그 여자는… '다음'의 수호자."
					}
				},
				{
					"content": {
						"korean": "그럼 린은 믿으면 안 된다는 건가."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"speaker": "kai",
					"content": {
						"korean": "모든 게… 짜여진 각본이야. 모든 '다음'이."
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "카이의 말은 주인공의 마음에 깊이 박혔다."
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그래도, 이젠 멈출 수 없어."
					}
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 자의 그림자가 모든 것을 덮쳤다."
					}
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "네 시도 또한… 실패로 끝났군."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "아니… 아직 끝이 아니야. 다시, 카이를 설득하겠어."
					}
				}
			],
			"win_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 자가 무너졌다. 카이의 절망이 옅어진 듯하다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "크윽… 또다시… '다음'을…"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아니, 더 이상의 '다음'은 없어."
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…난… 아무것도… 할 수 없어."
					},
					"speaker": "kai"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "카이는 침묵했다. 다음 목표는 '린'이 가진 대기자 명단이다."
					}
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "카이의 방을 지키는 존재. 그의 절망이 형상화된 듯하다."
					},
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "감히… 과거를 건드리려 하는가."
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "과거가 아니라… '다음'의 진실을 캐는 거야."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석어. 넌 영원히… 이 굴레에 갇힐 것이다."
					}
				},
				{
					"content": {
						"korean": "말도 안 되는 소리 하지 마!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "받아들여. 네 한계는 여기까지다."
					},
					"speaker": "random_boss"
				}
			]
		}
	]
} as const;
