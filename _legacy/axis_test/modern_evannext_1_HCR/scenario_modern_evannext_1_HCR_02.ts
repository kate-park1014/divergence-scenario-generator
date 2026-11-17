export const scenario_modern_evannext_1_HCR_02 = {
	"scenario_id": "modern_evannext_1_HCR_02",
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
			"첫 시험을 통과했다.",
			"받은 것은 애매한 양피지 한 장.",
			"'아직 완벽하진 않다'는 속삭임.",
			"하지만 어둠 속에선 다른 진실이 움직였다.",
			"종이 인형들의 비밀이 다가왔다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "낡은 양피지 한 장이 손에 들려 있었다."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "'곧 완벽해질 거야.'"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "...언제? 뭘 더?"
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "nia",
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "nia",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "흐흑... 저기..."
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "누구세요? 괜찮아요?"
					}
				},
				{
					"content": {
						"korean": "면접관... 종이 인형들..."
					},
					"type": "speech",
					"speaker": "nia",
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"speaker": "nia",
					"type": "speech",
					"content": {
						"korean": "그게... 다 서류야."
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "서류요? 무슨 서류?"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 400,
					"speaker": "nia",
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"emotion": "sad",
					"speaker": "nia",
					"type": "speech",
					"content": {
						"korean": "지원자들... 준비 서류..."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "그거 모아서... 만든 거야."
					},
					"speaker": "nia",
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "면접관이... 서류로?"
					}
				},
				{
					"content": {
						"korean": "응... 그리고... 완벽해지면..."
					},
					"type": "speech",
					"speaker": "nia",
					"emotion": "sad"
				},
				{
					"speaker": "nia",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "다음 층이 아니라... 사라져. 흐흑..."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "사라지다니! 어디로?"
					}
				},
				{
					"speaker": "nia",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "흔적도 없이... 지워진대."
					}
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "(충격) 지워져...?"
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
						3,
						4
					],
					"action": "enter",
					"speaker": "nia",
					"type": "direction",
					"duration_ms": 450
				},
				{
					"emotion": "sad",
					"speaker": "nia",
					"type": "speech",
					"content": {
						"korean": "저기 봐... 저 사람도..."
					}
				},
				{
					"content": {
						"korean": "한 대기자가 갑자기 몸을 떨었다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "왜 그래요? 니아 씨."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "nia",
					"type": "speech",
					"content": {
						"korean": "규칙... 위반이래. 흐흑..."
					}
				},
				{
					"speaker": "character_1",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "조용히 해! 소란 피우지 마!"
					}
				},
				{
					"speaker": "character_1",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "쟤 때문에 우리도 쫓겨나!"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "규칙 위반이 뭔데!"
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "대기자 셋이 홀연히 사라졌다."
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "(경악) 잠깐! 다들 어디로...!"
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "nia",
					"spot": [
						4,
						5
					],
					"duration_ms": 550,
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "sad",
					"speaker": "nia",
					"type": "speech",
					"content": {
						"korean": "봤지...? 봤잖아..."
					}
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "봤어요. 다 사라졌어요."
					}
				},
				{
					"content": {
						"korean": "완벽해지면 사라져... 흐흑..."
					},
					"type": "speech",
					"speaker": "nia",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "규칙 위반해도 사라져..."
					},
					"emotion": "sad",
					"speaker": "nia"
				},
				{
					"content": {
						"korean": "그럼 우린 뭘 해야 해?"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "여기서 영원히 준비만 하라고?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "조용히 해! 다음 시험이 망쳐져!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_2"
				},
				{
					"content": {
						"korean": "이 굴레... 못 끊으면 안 돼."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "아직도 '다음'이 뭔지 모르는군."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "이 미로에서 영원히 헤매라."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "아니. 잃어버린 '진실'을 다시 모을 거야."
					},
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "큭... 잠시 멈췄을 뿐."
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "'다음'은 언제나 기다린다."
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "아니. 더 이상 '다음'은 없어."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "진실을 밝힐 거야."
					}
				},
				{
					"content": {
						"korean": "쓰러진 종이 인형 뒤로, 새로운 길이 드러났다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "회랑 끝, 또 다른 시험실 문이 열렸다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "기괴한 종이 인형이 그 안에 서 있었다."
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "왔구나. 진실에 가까워진 자."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "당신이 이 모든 걸 꾸몄어?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "나는 그저... 이 순환을 돕는 자."
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "완벽을 향한 너의 열망을."
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "거짓된 완벽함!"
					}
				}
			]
		}
	]
} as const;
