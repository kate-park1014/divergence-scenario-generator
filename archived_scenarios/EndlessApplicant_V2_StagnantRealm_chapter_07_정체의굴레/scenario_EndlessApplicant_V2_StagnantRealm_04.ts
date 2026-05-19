export const scenario_EndlessApplicant_V2_StagnantRealm_04 = {
	"scenario_id": "EndlessApplicant_V2_StagnantRealm_04",
	"order": 4,
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
			"꿈 같은 '다음'은 깨졌다. 남은 건 오직 정체된 절망.",
			"이곳은 희망을 수집하는 농장. 너의 고통이 시스템의 연료가 된다.",
			"그리고 면접관은 너의 모든 반응을 기록한다.",
			"그녀의 미소 뒤에, 차가운 눈동자가 번뜩였다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "면접 대기실. 절망만이 가득한 공간에 차가운 침묵이 흘렀다."
					}
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "nia"
				},
				{
					"speaker": "nia",
					"content": {
						"korean": "흥미롭군요. 아직도 '다음'을 찾으시는군요."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "당신은 누구지?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "nia",
					"content": {
						"korean": "저는 니아. 이 시스템의 '분석가'입니다. 당신의 '데이터'를 기록하죠."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그녀의 손에 들린 낡은 PDA가 섬뜩하게 빛났다."
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "데이터? 무슨 소리야?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "nia",
					"content": {
						"korean": "곧 알게 될 겁니다. 이 모든 과정이 당신을 위한 '면접'이니까요."
					}
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 450,
					"type": "direction",
					"speaker": "nia",
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "nia",
					"content": {
						"korean": "주어진 과제에 집중하시죠. 당신의 '절망을 깨려는 의지'는 중요한 데이터가 됩니다."
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "과제? 당신이 뭘 원하는 건데?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "nia",
					"content": {
						"korean": "시스템은 '진정한 저항'을 분류하고 있습니다. 당신은 어떤 유형일까요?"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "난 그저 나가고 싶을 뿐이야!"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "nia",
					"content": {
						"korean": "그것 역시 흥미로운 반응입니다."
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 550,
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "nia"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "nia",
					"content": {
						"korean": "분노... 절망... 포기하지 않는 의지. 모두 귀한 데이터입니다."
					}
				},
				{
					"content": {
						"korean": "이 지옥에서 즐거운가?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "개인의 감정은 중요하지 않습니다. 오직 '시스템의 효율성'만이 중요하죠."
					},
					"speaker": "nia"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "당신도 이 시스템의 일부라는 거야?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "저는 '감시자'이자 '분석가'. 당신의 '절망 데이터'를 수집할 뿐입니다."
					},
					"speaker": "nia"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"speaker": "nia",
					"type": "direction",
					"action": "enter",
					"duration_ms": 400
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "nia",
					"content": {
						"korean": "당신은 곧 '정체된 의식'의 핵심에 도달할 겁니다. 그때도 이 의지를 유지할 수 있을까요?"
					}
				},
				{
					"content": {
						"korean": "끝까지 갈 거야. 에반이 뭘 하든."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "nia",
					"content": {
						"korean": "흥미롭네요. 당신의 '절망 데이터'는 최고 등급에 도달했습니다."
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그게 나한테 뭘 의미하는데?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그건... 곧 시스템이 결정할 겁니다."
					},
					"speaker": "nia"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "정체된 절망이 거대한 형체로 응축되었다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "흥미로운 '데이터'로군. 너의 '절망'은 아주 훌륭하다."
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "나는 너의 데이터가 아니야!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "nia"
				},
				{
					"content": {
						"korean": "좋아요, 전투를 시작합니다. 당신의 '저항'을 기록하죠."
					},
					"speaker": "nia",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "피하지 않아!"
					},
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "네가 이겼다고? 착각하지 마라... 너의 '의지'는... 그저... 새로운 '데이터'일 뿐..."
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "닥쳐! 나는... 자유로워질 거야."
					},
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 400,
					"speaker": "nia",
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "승리... 예상치 못한 변수군요. 하지만 이 '데이터' 또한 시스템의 양식이 됩니다."
					},
					"speaker": "nia"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "쓰러진 보스 뒤로, 니아의 미소는 차갑게 빛났다. 시스템은 새로운 '데이터'를 흡수하며 더 견고해지고 있었다. 과연 다음 '면접'에서, 주인공은 무엇을 마주하게 될 것인가?"
					},
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 '저항'이군. 너의 '절망'은 결국 시스템을 강화할 뿐이다."
					}
				},
				{
					"content": {
						"korean": "아직... 끝나지 않았어. 포기하지 않아!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "nia",
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "패배... 역시 예측 가능한 데이터군요. '절망'의 가치는 여전합니다."
					},
					"speaker": "nia",
					"type": "speech",
					"emotion": "base"
				}
			]
		}
	]
} as const;
