export const scenario_hell_amnion_38_04 = {
	"scenario_id": "hell_amnion_38_04",
	"order": 4,
	"random_boss_title": {
		"korean": "광신도"
	},
	"act": "rising",
	"theme": "hell",
	"actors": {
		"cinder": {
			"id": "mon_7bdc5bba-75ec-4589-827e-193b3c59b022",
			"name": {
				"korean": "신더",
				"english": "Cinder",
				"japanese": "シンダー",
				"chinese": "辛德",
				"french": "Cinder",
				"spanish": "Cinder",
				"vietnamese": "Xinder",
				"thai": "ซินเดอร์",
				"hindi": "सिंडर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/bc21258b-93ac-4669-7330-fdf4e8a57c00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/939a1911-1849-425c-67a4-4958bbdc3300/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
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
						"korean": "차디찬 주술 신전 안, 어두운 기운이 바닥에 깔려 있다."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "동료의 중독을 풀고 살리려면 고치를 안전하게 처리할 방법을 찾아야 해."
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "…벽에 새겨진 문양이 기괴하네."
					},
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "cinder",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "난 주술 신전을 조사하는 신더요. 고치의 실체를 찾아온 모양이군."
					},
					"emotion": "base",
					"speaker": "cinder"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "동료를 살려내려면 고치를 어떻게 다뤄야 하나요?"
					}
				},
				{
					"type": "speech",
					"speaker": "cinder",
					"emotion": "base",
					"content": {
						"korean": "고치 껍질을 찢으면 안 되오. 가져온 주술 실로 껍질을 죄어 봉인해야 하오."
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "껍질을 찢는 순간 안에 갇힌 위험이 쏟아진다는 뜻이군요."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "…미리 주술 실을 챙겨두길 잘했어."
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "cinder"
				},
				{
					"speaker": "cinder",
					"type": "speech",
					"content": {
						"korean": "제단으로 가는 길은 험난할 것이오. 난 다른 주술 기록을 더 찾아보겠소."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "고마워요. 일러준 방법대로 신전 깊은 곳으로 가겠습니다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "cinder",
					"duration_ms": 400,
					"type": "direction",
					"direction": "down",
					"action": "exit"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…발밑에서 불길한 떨림이 느껴져."
					},
					"type": "speech",
					"speaker": "character_3"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "신전 바닥에 핫핑크 빛 핏물 자국이 기괴하게 얼룩져 있다."
					}
				},
				{
					"content": {
						"korean": "이 기분 나쁜 핏자국… 누군가 방금 이곳을 지나갔어."
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "character_4",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…어둠 속에서 살기가 조여온다."
					}
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "성녀님의 해방을… 끝내 막을 수는 없을 것이다…"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "바닥의 핏자국과 전설이 맞았어. 실패한 주술 영혼들이 새 몸을 노리고 있군."
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "광신도가 쓰러지자, 진실이 잠든 고치 방으로 향하는 거대한 문이 열렸다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…드디어 그 고치와 마주할 시간이다."
					}
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "제단 앞, 섬뜩한 단도를 든 광신도가 길을 막아선다."
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "성녀님을 세상 밖으로 풀어 마땅하다! 감히 봉인을 논하느냐!"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "고치를 찢어 세상을 위험에 빠뜨리게 둘 순 없다. 방해 마라!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "character_1",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…날카로운 단도에 기운이 맺혀 있어."
					}
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "happy",
					"content": {
						"korean": "어리석은 자들아! 성녀님은 곧 세상에 모습을 드러내실 것이다!"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "…여기서 꺾일 수는 없다. 다시 맞서겠다."
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"고치의 위험성을 깨달은 탐험대는 잊힌 주술 신전으로 향한다.",
			"동료를 살릴 안전한 주술 방법을 찾아야만 한다.",
			"어둠에 잠긴 신전 깊은 곳에서 서늘한 살기가 다가온다."
		]
	}
} as const;
