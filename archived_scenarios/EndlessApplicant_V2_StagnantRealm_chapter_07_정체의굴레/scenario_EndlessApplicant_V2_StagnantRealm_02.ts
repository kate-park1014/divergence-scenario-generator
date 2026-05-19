export const scenario_EndlessApplicant_V2_StagnantRealm_02 = {
	"scenario_id": "EndlessApplicant_V2_StagnantRealm_02",
	"order": 2,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"bex": {
			"id": "mon_74e24324-3f9a-4d44-9611-1da33b654ca1",
			"name": {
				"korean": "벡스",
				"english": "Bex",
				"japanese": "ベックス",
				"chinese": "贝克斯",
				"french": "Bex",
				"spanish": "Bex",
				"vietnamese": "Bex",
				"thai": "เบ็กซ์",
				"hindi": "बेक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/09dae190-ff6b-4a9d-b656-e1a2b896aa00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5cc3c77f-72e1-416e-b346-31889b3b9300/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"희망은 잔인한 독이었다.",
			"벗어나려 발버둥칠수록, 덫은 더 단단히 조여왔다.",
			"유령 같은 대기실. 시스템은 우리의 절망을 먹고 있었다.",
			"가짜 희망을 속삭이는 그림자. 이 시험은, 끝이 보이지 않았다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "대기실은 영원한 정체에 빠졌다. 희망은 사치가 되었다."
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "(벽을 긁는 소리)"
					}
				},
				{
					"speaker": "bex",
					"action": "enter",
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "bex",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "여기서 나갈 방법이 있어. 시스템의 감시망에 틈이 보여."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "진짜?"
					},
					"emotion": "base",
					"speaker": "character_1"
				},
				{
					"speaker": "bex",
					"type": "speech",
					"content": {
						"korean": "이 시스템은 허술해. 포기하지 마. 나갈 수 있어."
					},
					"emotion": "happy"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						5,
						2
					],
					"speaker": "bex",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 문을 봐. 저기로 통과하는 순간… 자유야."
					},
					"emotion": "happy",
					"speaker": "bex"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그럼 다 같이 나갈 수 있다는 거야?"
					},
					"speaker": "character_2"
				},
				{
					"type": "speech",
					"content": {
						"korean": "물론이지! 다 함께 힘을 모으면 이 감시망도 뚫을 수 있어."
					},
					"emotion": "happy",
					"speaker": "bex"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "너무 쉬운 것 같은데…"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "절망에 익숙해진 거야. 시스템이 원하는 대로 순응하는 거라구."
					},
					"emotion": "sad",
					"speaker": "bex"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "벡스의 말에 묘한 활기가 돌았다. 시스템이 바라는 '저항'은 아니었을까."
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "bex",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						5,
						2
					]
				},
				{
					"speaker": "character_3",
					"type": "speech",
					"content": {
						"korean": "잠깐만. 우리가 이러는 걸 시스템이 모를 리가 없잖아."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "무슨 소리야? 들키지 않게 조심하고 있잖아?"
					},
					"emotion": "sad",
					"speaker": "bex"
				},
				{
					"speaker": "character_3",
					"type": "speech",
					"content": {
						"korean": "오히려 우리가 뭘 할지, 어디로 도망칠지 전부 학습하고 있는 거 아니냐고!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "벽에 걸린 거울에 비친 자신의 모습이 일그러졌다. 수천 개의 눈동자가 깜빡이는 섬뜩한 형상이 겹쳐 보였다."
					},
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"action": "enter",
					"speaker": "bex"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "벡스. 솔직히 말해. 당신은 시스템의 스파이지?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "bex",
					"type": "speech",
					"content": {
						"korean": "내가 왜 그래야 하는데? 난… 난 너희를 돕고 싶었을 뿐이야!"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_4",
					"type": "speech",
					"content": {
						"korean": "우리가 탈출 시도를 할 때마다, 시스템은 더 교묘하게 길을 막았어. 당신은 그 데이터를 제공한 거잖아!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "면접 대기실의 낡은 게시판에 누군가 긁어놓은 낙서가 보였다. '이 모든 건... 밖에 있는 누군가를 위한 거야.'"
					},
					"emotion": "base"
				},
				{
					"speaker": "bex",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "아니야! 나는… 그저… 희망을 주고 싶었어…"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "당신이 준 가짜 희망 덕분에 시스템은 더 완벽해졌어. 우린 더 깊은 절망에 빠졌다고!"
					},
					"emotion": "angry"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "…흥미롭군. 예상 밖의 '저항'이다. 하지만… 이것 또한 학습된다."
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "뭘 학습해? 더 이상 너희에게 줄 절망은 없어!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "아니. 너의 '승리' 또한 시스템의 새로운 데이터가 될 것이다. 진정한 절망은… 승리 뒤에 오는 법."
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…뭐야. 이 찜찜한 기분은."
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "'저항 학습'은 끝나지 않았다. 오히려 시스템은 승리마저 흡수하는 듯했다."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "다음 시험이 시작될 조짐이 보였다. 그러나 주인공은 더 이상 물러설 곳이 없었다."
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "벡스의 연극은 즐거웠나? 제법 '좋은' 데이터를 수집했더군."
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네가 이 모든 걸 꾸민 거야?"
					},
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "그래. 너희의 '저항'은 훌륭한 학습 재료가 되지. 더 깊은 절망을 위한."
					},
					"emotion": "base"
				},
				{
					"speaker": "bex",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "아니야… 나는… 진짜 희망을 주고 싶었을 뿐인데…"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "입 다물어. 이제 와서 변명 따윈 안 들어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "자, 이제 마지막 시험이다. 네 절망이 어디까지 갈지… 기대되는군."
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "시험? 웃기지 마. 네가 뭘 학습하든… 난 여기서 끝낼 거야."
					},
					"emotion": "angry"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "하찮은 저항이군. 네 희망은 다시 절망으로 회귀할 것이다."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "크윽… 아직… 끝나지 않았어."
					},
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "재조정을 시작한다. 너의 '저항'은 더 완벽한 절망으로 재탄생할 것이다."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…다시 한번. 반드시."
					},
					"emotion": "angry"
				}
			],
			"id": 15
		}
	]
} as const;
