export const scenario_snowy_anya_34_04 = {
	"scenario_id": "snowy_anya_34_04",
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
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "눈보라가 잠시 멎은 분지. 작은 발자국들이 희미하게 이어졌다."
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "여기까지 왔어."
					}
				},
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "inka",
					"duration_ms": 500
				},
				{
					"speaker": "inka",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…이 발자국. 느껴져?"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…응. 끊어지지 않고 이어지는 느낌."
					}
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "inka",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"speaker": "inka",
					"type": "speech",
					"content": {
						"korean": "단순히 지나간 게 아니야."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "그럼?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "떠났다가, 다시 돌아왔어. 셀 수 없이."
					},
					"emotion": "sad",
					"speaker": "inka"
				},
				{
					"type": "speech",
					"content": {
						"korean": "왜 계속 제자리로 돌아왔을까?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…무엇이 이 빛을 붙잡았을까."
					},
					"emotion": "sad",
					"speaker": "inka"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "inka",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "여기 봐. 눈이 단단하게 다져져 있어."
					},
					"emotion": "base",
					"speaker": "inka"
				},
				{
					"type": "speech",
					"content": {
						"korean": "발자국이 너무 많이 겹쳐서 얼어붙은 건가?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그래. 여기서 아주 오랜 시간, 기다렸어."
					},
					"speaker": "inka",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "차가운 공기가 얼음처럼 날카로웠다. 그때, 거대한 그림자가 드리워졌다."
					}
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…누군가를 기다린다고? 헛된 일이다."
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "또 괴물인가!"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"speaker": "inka",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "inka",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "여기가… 가장 따뜻해."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "온기가 느껴진다고?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "inka",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "빛이 가장 오래 머문 자리야. 여기서, 누군가를 기다리기로 했구나."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "누구를? 왜 떠나지 못하고…."
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…간절함이 느껴져. 빛의 슬픔이."
					},
					"speaker": "inka",
					"emotion": "sad"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "정체 모를 적은 쓰러졌지만, 공허한 외침만 남았다."
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "inka",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 괴물도… 기다리다 변한 건 아닐까."
					},
					"speaker": "inka",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…누군가를 기다리는 마음이 이렇게 변할 수 있다고?"
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"speaker": "inka",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "빛은… 아직 이 자리를 떠나지 못했어. 어쩌면, 영원히."
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "아무도 가지 못하는 곳. 발자국은 더 깊은 곳으로 향했다."
					}
				}
			],
			"id": 15,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "inka"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 따뜻함… 그리움이야. 간절한 그리움."
					},
					"emotion": "sad",
					"speaker": "inka"
				},
				{
					"type": "speech",
					"content": {
						"korean": "빛이 기다린다는 건… 이 장소에 뭔가 중요한 게 있다는 거겠지."
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "온기를 찾던 발걸음이 멈춘 곳, 낯선 기운이 솟아났다."
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그리움이라… 허황된 감정이다."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "물러서! 더 이상 방해하지 마!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "기다림은 결국 고통만 남길 뿐."
					},
					"speaker": "random_boss",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "차가운 눈밭에 무너졌다. 빛의 기다림은 계속될 것인가."
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "결국 모두 버려지고 잊힌다."
					},
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니. 아직 끝이 아니야. 빛이 무엇을 기다리는지, 반드시 알아낼 거야."
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"하얀 분지, 끝없는 눈밭. 작은 발자국이 그 위에 있었다.",
			"떠나려 해도 결국 제자리로 돌아오는, 멈출 수 없는 반복.",
			"그 발자국이 가장 오래 머문 자리엔, 희미한 온기가 남아있었다.",
			"인카는 그 자리에서, 슬픈 기다림의 마음을 보았다."
		]
	}
} as const;
