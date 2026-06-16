export const scenario_snowy_fenrir_87_03 = {
	"scenario_id": "snowy_fenrir_87_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"inka": {
			"id": "mon_583e945a-1e2f-428b-a251-b428f25b4052",
			"name": {
				"korean": "인카",
				"english": "Inka",
				"japanese": "インカ",
				"chinese": "因卡",
				"french": "Inka",
				"spanish": "Inka",
				"vietnamese": "Inka",
				"thai": "อินคา",
				"hindi": "इंंका"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/97f4545b-2e8a-4688-3e4e-b34bb246dd00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f27763ba-2358-4fd3-c813-0f0b59dcac00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "늑대의 동공 속, 눈보라가 처음으로 신음을 토해냈다. 울음은 갈수록 커졌다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이건… 포효가 아니야."
					}
				},
				{
					"action": "enter",
					"speaker": "inka",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"speaker": "inka",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "뭔가… 아파하는 소리 같아."
					}
				},
				{
					"content": {
						"korean": "괴물에게 무슨 감정 이입이야, 인카."
					},
					"emotion": "base",
					"speaker": "character_1",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "inka",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "inka",
					"content": {
						"korean": "봐. 저 늑대가… 잠시 멈추려 한 것 같아."
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "착각일 거야. 우린 저걸 멈춰야 해."
					}
				},
				{
					"content": {
						"korean": "하지만 저 신음은… 슬퍼. 스스로 멈출 수 없는 거야."
					},
					"speaker": "inka",
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "inka",
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "거대한 그림자가 한 번 떨더니, 다시 입을 벌려 모든 것을 삼키려 했다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…멈추고 싶은 거야."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "inka"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "inka",
					"content": {
						"korean": "그런데… 못 멈추는 거야."
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "괴물은 그냥 괴물일 뿐이야."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "inka",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "신음이 점점 더… 지쳐가는 것 같아."
					},
					"emotion": "sad",
					"speaker": "inka",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "끝이 보이는 건가?"
					}
				},
				{
					"content": {
						"korean": "아니. 고통의 끝이 없는 거야. 영원히 굶주리고 있어."
					},
					"speaker": "inka",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "…대체 왜 저런 거야?"
					},
					"type": "speech",
					"speaker": "character_2",
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "…아직도… 배고파… 수백 마리의… 울음이…"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "고통에서… 해방시켜줬어."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "이것은 끝이 아니야. 더 깊은 곳에… 근원이 있을 거야."
					},
					"emotion": "base",
					"speaker": "inka",
					"type": "speech"
				},
				{
					"content": {
						"korean": "늑대의 동공은 잠시 침묵했다. 그러나 신음은 숲의 더 깊은 곳으로 향했다."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "아직도 배고프다… 너희조차도… 삼킬 것이다…"
					}
				},
				{
					"content": {
						"korean": "이대로 끝낼 수 없어. 반드시… 멈출 거야."
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "수백 마리의 굶주린 영혼이 겹쳐진 거대한 그림자가 앞을 가로막았다."
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…멈출 수 없어. 멈출 수 없다고!"
					}
				},
				{
					"content": {
						"korean": "너도 고통받고 있는 거구나."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "inka",
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "당신도… 피해자였어."
					},
					"type": "speech",
					"speaker": "inka",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "입 다물어! 나는 오직… 배고플 뿐이다!"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"늑대의 텅 빈 동공. 눈보라가 울부짖는 곳.",
			"그 안에서 처음으로 들려오는 소리. 포효가 아니었다.",
			"수백 마리가 겹쳐 우는, 가냘픈 신음. 멈추고 싶어도 멈출 수 없는 고통.",
			"그 비명 속에서, 인카는 한 존재의 슬픔을 보았다."
		]
	}
} as const;
