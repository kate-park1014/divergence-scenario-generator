export const scenario_modern_evannext_1_FIR_02 = {
	"scenario_id": "modern_evannext_1_FIR_02",
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
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "어두운 복도 끝, '니아 정보원' 명패가 보인다."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "여기가 니아 사무실?"
					}
				},
				{
					"content": {
						"korean": "'다음 기회' 통지서… 뭔가 이상해."
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "direction",
					"speaker": "nia",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "누구…세요?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "nia"
				},
				{
					"type": "speech",
					"content": {
						"korean": "정보원 니아 씨 맞죠?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "맞는데… 왜 남의 사무실에 막 들어와요?"
					},
					"type": "speech",
					"speaker": "nia",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "중요한 걸 물어볼 게 있어요. 지금."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "nia",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "정말… 이상한 사람이야."
					},
					"speaker": "nia",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "협조하세요, 니아 씨."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "nia",
					"type": "speech",
					"content": {
						"korean": "내가 왜? 여긴 내 공간인데."
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "'다음 기회' 시스템에 대해 조사 중이죠?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "그걸… 어떻게 알았어요?"
					},
					"emotion": "sad",
					"speaker": "nia"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "탁자 위 서류들이 말해주네요. 전부."
					}
				},
				{
					"content": {
						"korean": "이건… 내 비밀인데."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "nia"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "왜 '다음 기회'는 모든 기록을 지울까요?"
					}
				},
				{
					"speaker": "nia",
					"emotion": "sad",
					"content": {
						"korean": "그게… 핵심이에요. 흔적도 없이 사라져."
					},
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "nia",
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "저리 가요! 내 소중한 자료들…"
					},
					"type": "speech",
					"speaker": "nia",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "빨리 말했어야죠. 시간을 낭비할 수 없어."
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 서류들… 잉크가 번져서 해독 불가능해졌잖아."
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "내가… 내가 밤새 정리한 건데!"
					},
					"emotion": "angry",
					"speaker": "nia"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이게 뭐죠? '에반 넥스트'?"
					}
				},
				{
					"speaker": "nia",
					"emotion": "sad",
					"content": {
						"korean": "그건… 보면 안 되는 이름인데…"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이 사람이 누구예요?"
					}
				},
				{
					"content": {
						"korean": "시스템 관리자… 같은 거였어."
					},
					"type": "speech",
					"speaker": "nia",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "시스템 관리자라니?"
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "nia",
					"type": "direction"
				},
				{
					"emotion": "sad",
					"speaker": "nia",
					"type": "speech",
					"content": {
						"korean": "에반 넥스트… 정말 위험한 이름이에요."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그가 '다음 기회' 통지서를 발행하는 거죠?"
					}
				},
				{
					"speaker": "nia",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "네. 그리고… '진출 예상 보고서'를 뿌리기도 하고."
					}
				},
				{
					"content": {
						"korean": "보고서요?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "nia",
					"type": "speech",
					"content": {
						"korean": "헛된 희망을 주입하는… 가짜 보고서."
					}
				},
				{
					"content": {
						"korean": "결국 우리를 속인 거였군."
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "그를 찾으려다… 사라진 사람이 많아요. 정말."
					},
					"speaker": "nia",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "나는 직접 찾아야겠어. 에반 넥스트를."
					},
					"type": "speech"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "넌 진실을 감당 못 해. 돌아가."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "아니. 다시… 에반 넥스트를 찾아야 해."
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "포기해라. 그게 네 '다음 기회'다."
					}
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "니아의 사무실 깊은 곳, 정체 모를 자가 통로를 막아섰다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "더 이상은 안 된다. 규칙을 어기지 마라."
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "비켜. 에반 넥스트를 찾아야 해."
					}
				},
				{
					"content": {
						"korean": "진실은… 너에게 독이 될 뿐이다."
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "여기가 바로 내가 찾던 진실이야."
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 네가 이겼다고 생각하나?"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "진실은… {random_boss}보다 더 복잡하다."
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
						"korean": "진실을 찾을 때까지 멈추지 않아."
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "복도 끝에 또 다른 문이 희미하게 빛나기 시작한다."
					}
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"첫 시험 후 '다음 기회' 통지서를 받았다.",
			"나는 이 시스템에 의심을 품기 시작했다.",
			"정보원 '니아'의 사무실을 찾아야 했다.",
			"숨겨진 진실을 파헤쳐야만 했다."
		]
	}
} as const;
