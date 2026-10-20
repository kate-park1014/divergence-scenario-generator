export const scenario_modern_whisperweb_0_FCR_02 = {
	"scenario_id": "modern_whisperweb_0_FCR_02",
	"order": 2,
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
			"네온 불빛 아래, 도시는 여전히 거짓 정보로 뒤덮여 있었다.",
			"정보상 에코의 경고는 주인공을 '위스퍼 웹'의 심장부로 이끌었다.",
			"이번 목표는 불법 데이터 복구 전문가 닥스의 사무실.",
			"그곳에 숨겨진 미지의 데이터 스트림 서버를 확보해야 한다.",
			"모든 것을 정보의 소용돌이에 던져 넣으려는 광기를 막기 위해."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "네온 간판이 번쩍이는 골목 끝, 낡은 건물 안에 닥스의 사무실이 있었다."
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "여기가 닥스의 불법 자료실?"
					}
				},
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "dax",
					"type": "direction"
				},
				{
					"speaker": "dax",
					"emotion": "angry",
					"content": {
						"korean": "누구 마음대로 들어와?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "미지의 데이터 스트림이 담긴 서버를 내놔."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "dax",
					"action": "enter"
				},
				{
					"speaker": "dax",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이건 못 줘. 내 고객들 개인 정보가 다 들어있어."
					}
				},
				{
					"content": {
						"korean": "더 큰 혼란을 막으려면 어쩔 수 없어."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "억지로 열면 모든 정보가 망가진다고!"
					},
					"speaker": "dax",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "암호 해독해. 지금 당장."
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "서버를 강제로 장악하자, 낡은 데이터 칩 하나가 튕겨져 나왔다. 재생 불가능한 오류 메시지가 점멸했다."
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "dax"
				},
				{
					"speaker": "dax",
					"emotion": "angry",
					"content": {
						"korean": "젠장! 내가 말했잖아!"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "수백 명의 고객 이름, 주소, 연락처가 네트워크에 실시간으로 흘러나간다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "멈춰! 닥스!"
					}
				},
				{
					"speaker": "dax",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이미 늦었어. 네가 억지로 연 순간, 통제 불능이야."
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "dax"
				},
				{
					"content": {
						"korean": "너희 때문에 수백 명의 개인 정보가 유출됐어."
					},
					"type": "speech",
					"speaker": "dax",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "더 큰 피해를 막기 위해선 어쩔 수 없었어."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이게 '더 큰 피해'가 아니면 뭔데?"
					},
					"emotion": "angry",
					"speaker": "dax",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "위스퍼 웹을 멈춰야 해. 멈출 수 없어."
					},
					"emotion": "base",
					"speaker": "character_any"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "네가 파괴한 건 정의가 아니라, 진실을 밝히려는 나의 의지였다."
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아니. 이건 막아야 해. 내일 밤, 닥스의 사무실을 다시 찾아낼 거야."
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "…겨우 이걸 막았다고 생각하나? 이미 수백 개의 정보는 퍼졌어."
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "더 이상 못하게 할 거야."
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "정체 모를 자의 잔상이 사라졌다. 닥스의 경고가 귓가에 맴돌았다."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "도시는 더 깊은 정보의 수렁으로 빠져들고 있었다."
					}
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "서버실 깊숙한 곳, 정체 모를 자가 기다리고 있었다."
					}
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "또 하나의 정보를 파괴했군. 왜 나의 계획을 막으려 하지?"
					}
				},
				{
					"content": {
						"korean": "정보는 무기가 아니야. 혼란만 줄 뿐."
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "아니, 가장 강력한 무기지. 네가 오늘 그 사실을 증명했어."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				}
			]
		}
	]
} as const;
