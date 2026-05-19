export const scenario_EndlessApplicant_V2_StagnantRealm_03 = {
	"scenario_id": "EndlessApplicant_V2_StagnantRealm_03",
	"order": 3,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"dax": {
			"id": "mon_08d5b43e-f9ab-4469-9064-855e170b0cdc",
			"name": {
				"korean": "닥스",
				"english": "Dax",
				"japanese": "ダックス",
				"chinese": "达克斯",
				"french": "Dax",
				"spanish": "Dax",
				"vietnamese": "Dax",
				"thai": "แด็กซ์",
				"hindi": "डैक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/84bb11db-6eb4-4500-d274-222e8b100100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5d325a75-bd91-4758-7b3f-ad9a97e52700/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"낡은 대기실. 희망은 사라진 지 오래다.",
			"사람들은 유령처럼 움직였다. 과거를 잃은 채.",
			"누군가는 이 모든 것이 계획이라 속삭였다.",
			"기억을 잃는다는 것. 그것은 끝이 아니었다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "희망이 사라진 대기실은 거대한 무덤 같았다. 모두가 텅 빈 눈으로 허공을 응시할 뿐이다."
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…다들 왜 이러지?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"emotion": "sad",
					"content": {
						"korean": "매번 똑같아. 아무 의미도 없어."
					}
				},
				{
					"content": {
						"korean": "한 지원자가 중얼거렸다. '뭔가… 중요한 걸 잊은 것 같아. 머리가 너무 아파.'"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "dax",
					"spot": [
						5,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "기억… 잃어가고 있어. 다들."
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "당신은… 누구시죠?"
					},
					"emotion": "base"
				},
				{
					"speaker": "dax",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "닥스. 나도… 잊었어. 많은 것을."
					}
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "하지만 이것만은 기억나. 이 현상… 반복되고 있다는 것."
					},
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "dax",
					"spot": [
						5,
						2
					],
					"duration_ms": 500
				},
				{
					"speaker": "dax",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "기록했어. 사람들이 뭔가를 잊는 순간. 그리고… 다시 무기력해지는 과정."
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그게 뭔데요?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"emotion": "base",
					"content": {
						"korean": "시스템이… 기억을 재조정하는 거야. 의도적으로."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "기억을 지운다고?"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "맞아. 강한 의지를 가진 자일수록… 더 빠르게 잊어버려."
					},
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "이 모든 무기력은… 단순한 절망이 아니야. 조작된 거야."
					},
					"speaker": "dax",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "누가… 왜?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "아직은… 모르겠어. 하지만 분명해. 밖에 있는… '누군가'를 위한 거야."
					},
					"emotion": "base",
					"speaker": "dax",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"speaker": "dax",
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "dax",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "기억이 사라진 사람들은… 더 이상 저항하지 않아. 그저… 순종할 뿐."
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "그럼 우리가 강해질수록… 더 위험해진다는 거야?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "시스템은… '저항'을 학습하고 있어. 너의 의지가 강해질수록… 더 정교하게 기억을 지우겠지."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "문득, 거울에 비친 자신의 모습이 일그러졌다. 수천 개의 눈동자가 섬뜩하게 깜빡이는 환영이 스쳤다."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "…."
					}
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "끝까지 싸울 거야. 뭘 잊든 상관없어."
					},
					"emotion": "angry"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"speaker": "dax",
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "이곳을 더 깊이 들어가면… 기억 상실은 돌이킬 수 없게 돼."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "dax"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그래도 가야 해. 진실을 알아야 해."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "dax",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…너의 의지가 이 시스템을 더 강하게 만들 수도 있어. 깨달음마저도… 연료가 될 뿐이야."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그럼 여기서 멈춰야 한다는 거야?"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"emotion": "base",
					"content": {
						"korean": "…선택은 너의 몫이야."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "멈추지 않아. 절대로."
					}
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "망각의 연대기… 환영한다. 모든 것을 잊을 너를."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…네가 뭘 하든, 난 잊지 않아."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "기억은 사라져도… 절망은 남지. 이 얼마나… 달콤한 연료인가."
					},
					"emotion": "base"
				},
				{
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"speaker": "dax",
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "dax",
					"type": "speech",
					"content": {
						"korean": "조심해. 저 자는… 너의 모든 저항을 학습할 거야."
					},
					"emotion": "sad"
				},
				{
					"duration_ms": 400,
					"speaker": "dax",
					"direction": "down",
					"type": "direction",
					"action": "exit"
				},
				{
					"content": {
						"korean": "각오했어."
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "무기력한 자여… 다시 잊어라. 그리고… 또다시 나의 연료가 되어라."
					}
				},
				{
					"content": {
						"korean": "…포기 안 해. 절대."
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "결국… 너도 똑같아질 뿐이다."
					}
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "결국… 여기까지 왔군. 하지만… 기억하겠나? 네가 싸워온 모든 것이… 나의 데이터를 만들었다는 것을."
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…!"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "잊혀진 자들의 절망 속에서… 에반은 더욱 완전해질 뿐이다. 나는… 그 과정의 일부."
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…이게 다였다니."
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "또 다른 감시자의 시선이 그들을 쫓았다. 다음 단계로 향하는 발걸음은… 더 큰 절망 속으로 이끌었다."
					}
				}
			]
		}
	]
} as const;
