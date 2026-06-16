export const scenario_snowy_fenrir_77_04 = {
	"scenario_id": "snowy_fenrir_77_04",
	"order": 4,
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
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "차가운 바람이 지나간 자리, 온기가 사라졌다."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "점점 더 추워지는 것 같아."
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						3
					],
					"speaker": "inka",
					"action": "enter"
				},
				{
					"emotion": "sad",
					"speaker": "inka",
					"content": {
						"korean": "아니야. 그저 추운 게 아니야."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "우리에게서… 무언가가 빠져나가고 있어."
					},
					"emotion": "sad",
					"speaker": "inka"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "무엇이?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "우리의… 온기."
					},
					"speaker": "inka",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "inka",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "공허는 모든 것을 삼켜."
					},
					"emotion": "sad",
					"speaker": "inka"
				},
				{
					"speaker": "inka",
					"emotion": "sad",
					"content": {
						"korean": "이제는… 우리 안의 따뜻함까지 원해."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "우리까지…?"
					},
					"speaker": "character_1",
					"emotion": "sad"
				},
				{
					"speaker": "inka",
					"emotion": "sad",
					"content": {
						"korean": "그래. 저 {random_boss}는… 더 이상 배고픈 짐승이 아니야."
					},
					"type": "speech"
				},
				{
					"speaker": "inka",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "우리의 온기를 잃으면… 모두 얼어붙을 거야."
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "inka",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "공허의 그림자가 짙어졌다. 탐험대의 발걸음조차 무거워진다."
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "몸이… 으스스해. 기분 탓인가?"
					},
					"type": "speech",
					"speaker": "character_2",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "아니. 몸의 온기뿐만 아니라…"
					},
					"type": "speech",
					"speaker": "inka",
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"speaker": "inka",
					"type": "speech",
					"content": {
						"korean": "마음의 온기마저 새어 나가고 있어."
					}
				},
				{
					"speaker": "character_3",
					"emotion": "angry",
					"content": {
						"korean": "이대로는… 안 돼."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "우리는… 함께야. 이 따뜻함을 지켜야 해."
					},
					"type": "speech",
					"speaker": "inka",
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "inka",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "숨 쉬는 공기마저 {random_boss}에게 빨려 들어가는 듯했다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "온몸이 얼어붙는 것 같아… 마음까지."
					}
				},
				{
					"speaker": "inka",
					"emotion": "angry",
					"content": {
						"korean": "안 돼. 놓지 마. 이 손을… 이 마음을… 놓지 마."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "우리가 가진 모든 온기를 붙잡아… 더 이상 빼앗기지 마."
					},
					"emotion": "base",
					"speaker": "inka"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "…"
					},
					"type": "speech"
				},
				{
					"speaker": "inka",
					"emotion": "sad",
					"content": {
						"korean": "저 굶주림은… 끝이 없을 거야."
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 길을 막아섰다. 온기가 사라진 자리, 굶주림만이 남았다."
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "너희의 온기는… 달콤하군."
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "괴물…!"
					},
					"type": "speech"
				},
				{
					"action": "enter",
					"speaker": "inka",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "당신도… 아픈 거니?"
					},
					"type": "speech",
					"speaker": "inka",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아픔? 내가 아는 건 오직 굶주림뿐."
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "하지만… 모든 온기를 빼앗아도… 당신은 채워지지 않을 거야."
					},
					"speaker": "inka",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "닥쳐라."
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 쓰러졌다. 하지만, 굶주림의 근원은 사라지지 않았다."
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "끝인가…?"
					},
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						3
					],
					"action": "enter",
					"speaker": "inka"
				},
				{
					"type": "speech",
					"content": {
						"korean": "끝이 아니야. 더 깊은 곳에… 이 모든 굶주림의 시작이 있어."
					},
					"speaker": "inka",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "우리의 온기를… 더욱 굳건히 지켜야 해."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "inka"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "꺼져가던 불씨가 다시 피어났다. 아직, 끝나지 않은 여정이었다."
					},
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "공허가 모든 것을 집어삼켰다. 온기 없는 설원 위에, 그림자만이 춤춘다."
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "네 온기는… 내 것이 된다."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "아직… 포기하지 않아…!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "inka",
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "이런 절망 속에서도… 우리는 함께야."
					},
					"type": "speech",
					"speaker": "inka",
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"설원, 모든 것이 얼어붙는 땅.",
			"늑대의 굶주림이 그 경계를 넘어선다.",
			"온기마저 빼앗는 차가운 공허.",
			"이제, 우리에게서마저 새어 나가고 있었다."
		]
	}
} as const;
