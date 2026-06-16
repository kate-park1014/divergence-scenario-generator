export const scenario_snowy_cairn_36_03 = {
	"scenario_id": "snowy_cairn_36_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"anuk": {
			"id": "mon_8736797d-779a-4748-8633-d15c1eaf9be7",
			"name": {
				"korean": "아눅",
				"english": "Anuk",
				"japanese": "アヌーク",
				"chinese": "阿努克",
				"french": "Anuk",
				"spanish": "Anuk",
				"vietnamese": "Anuk",
				"thai": "อนุก",
				"hindi": "अनुक"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/19485274-e873-45c8-5043-f4ff65aa2a00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9a79ecfd-8cc6-4461-3790-763822522500/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"돌무덤의 얼음 미로. 차가운 푸른빛이 길을 비춘다.",
			"발걸음마다 신의가 시험받는 곳.",
			"벽에 비친 그림자는 — 감춰진 진실을 속삭인다.",
			"서로의 속내를 마주할 시간."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "얼음 미로의 깊숙한 곳. 길은 더욱 복잡해졌다."
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "점점 더 길이 좁아지는 것 같아."
					}
				},
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "anuk"
				},
				{
					"speaker": "anuk",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "맹세는 가볍지 않다. 특히 이 곳에선."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "무슨 말이야?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "벽을 보라. 그리고 너희 안을."
					},
					"speaker": "anuk",
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "anuk",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "base",
					"speaker": "anuk",
					"content": {
						"korean": "저 얼음벽을 자세히 봐라."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "차가운 얼음벽에 동행단의 그림자가 비쳤다."
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_1",
					"content": {
						"korean": "어? 내 그림자가… 나랑 다르게 행동해."
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_2",
					"content": {
						"korean": "내 그림자도! 왜 저러지?"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "anuk",
					"content": {
						"korean": "그것이 너희의 숨겨진 속내다. 감춰둔 욕망이자 이기심."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…우리가 그런 생각을?"
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"speaker": "anuk",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "인정하는 것부터가 시험의 시작이다."
					}
				},
				{
					"emotion": "base",
					"speaker": "anuk",
					"content": {
						"korean": "속내를 직시해야 다음 길이 열릴 것이다."
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "anuk",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "…믿을 수 없어. 난 그런 생각 안 했어."
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "anuk",
					"content": {
						"korean": "부정하는 자, 길을 잃을 것이다."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "하지만…."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "돌무덤은 너희의 진실만을 요구한다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "anuk"
				},
				{
					"type": "speech",
					"content": {
						"korean": "얼음 미로가 미세하게 흔들렸다."
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "곧, 더 큰 시험이 닥쳐올 것이다."
					},
					"speaker": "anuk",
					"emotion": "base"
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
						"korean": "미로의 끝. 거대한 그림자가 길을 막아섰다."
					}
				},
				{
					"content": {
						"korean": "…약해 빠진 속내를 품고 여기까지 왔느냐."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "네가 돌무덤의 시험인가?"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "너희의 이기심은 나의 힘. 어리석은 인간들."
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "헛소리 마!"
					}
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "역시 너희의 속내는 탐욕으로 가득하군."
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "아직 끝나지 않았어… 다시 일어설 거야!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "미로의 심장. 거대한 얼음 결정체가 빛났다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "감춰진 욕망을 드러내라. 그리고 내게 복종하라."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "우리는 너에게 굴복하지 않아!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…어리석은 선택이군."
					},
					"speaker": "random_boss",
					"emotion": "base"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "…네놈들의 이기심은 끝나지 않는다. 언젠가 다시 너희를 삼키리라."
					},
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…정말 끝난 걸까?"
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"speaker": "anuk",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "단지 시작일 뿐. 스스로를 믿는 자만이 나아갈 수 있다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "anuk"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "얼음 미로에 길이 열렸다. 그러나 다음 시험은 더욱 가혹할 터."
					}
				}
			]
		}
	]
} as const;
