export const scenario_snowy_cairn_36_05 = {
	"scenario_id": "snowy_cairn_36_05",
	"order": 5,
	"act": "climax_finale",
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
		"pool_id": "pool_111"
	},
	"epilogue": {
		"korean": [
			"얼음 미로는 고요해졌다. 돌무덤의 시험은 끝났다.",
			"이기심과 신의의 경계는 여전히 모호했다.",
			"누군가는 구원이라 속삭였고, 누군가는 침해라 절규했다.",
			"모든 선택은 대가를 치른다. 그 무게는 이제 새로운 여정의 시작이었다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "미로의 심장부. 얼음 벽은 사방에서 푸른빛을 뿜어냈다."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "…끝이 보이는 것 같으면서도, 더 혼란스러워."
					}
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "anuk",
					"spot": [
						5,
						2
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "돌무덤은 너희를 여기까지 이끌었다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "anuk"
				},
				{
					"content": {
						"korean": "이제 진정한 시험이 시작된다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "anuk"
				},
				{
					"content": {
						"korean": "시험? 무엇을?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "너희의 신의와, 감춰진 동기."
					},
					"emotion": "base",
					"speaker": "anuk",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "anuk",
					"spot": [
						4,
						2
					]
				},
				{
					"content": {
						"korean": "봐라. 푸른빛이 한 곳에 머물고 있다."
					},
					"emotion": "base",
					"speaker": "anuk",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…나한테?"
					}
				},
				{
					"content": {
						"korean": "돌무덤은 너희의 내면을 비추고 있다. 그 빛이 끌어내려는 것은 무엇인가."
					},
					"speaker": "anuk",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "아무것도 없어. 난 그저…!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "anuk",
					"type": "speech",
					"content": {
						"korean": "모든 행동에는 대가가 따른다. 너의 맹세는 진실한가?"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "anuk",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "얼음 벽이 좁아졌다. 그림자들은 일렁였다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "점점 더 답답해. 이 길이 맞는 거야?"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "의심은 길을 가로막는다. 너의 속내를 마주할 때다."
					},
					"emotion": "base",
					"speaker": "anuk",
					"type": "speech"
				},
				{
					"content": {
						"korean": "속내라니… 뭘 말하는 거야!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "anuk",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "진정한 동기를 인정해야만 나아갈 수 있다."
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						2,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "anuk",
					"duration_ms": 500
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "미로의 끝이 가까웠다. 푸른빛은 더욱 강렬해졌다."
					}
				},
				{
					"speaker": "anuk",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "더 이상 물러설 곳은 없다. 너의 이기심이 진정 무엇을 원하는지."
					}
				},
				{
					"content": {
						"korean": "돌무덤은 마지막 순간까지 너를 지켜볼 것이다."
					},
					"speaker": "anuk",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…나는. 나는."
					}
				},
				{
					"content": {
						"korean": "신의를 택할 것인가, 탐욕에 굴할 것인가. 선택은 오직 너의 몫이다."
					},
					"speaker": "anuk",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "돌무덤의 푸른빛이 탐험대를 집어삼켰다. 얼음벽이 무너져 내렸다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "결국, 너는 너의 이기심에 굴했다. 그 끝은 파멸뿐."
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…아직 끝나지 않았어. 다시 일어설 거야."
					}
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 얼음 구조물이 나타났다. 그 중심에서 차가운 기운이 뿜어져 나왔다."
					}
				},
				{
					"type": "speech",
					"speaker": "boss",
					"emotion": "base",
					"content": {
						"korean": "왔구나. 약속의 거짓된 그림자여."
					}
				},
				{
					"content": {
						"korean": "돌무덤의 푸른빛이 한 캐릭터를 꿰뚫었다. 얼음 바닥이 비명을 지르듯 갈라졌다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "…내가. 내가 원한 건!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"spot": [
						4,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "anuk",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이것이 돌무덤의 진정한 시험이다. 너의 동기를 직시해라."
					},
					"type": "speech",
					"speaker": "anuk",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이기심에 굴할 것인가. 아니면, 스스로의 맹세를 지킬 것인가."
					},
					"speaker": "boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "…젠장. 해볼 테면 해봐!"
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "돌무덤의 푸른빛이 사그라들었다. 얼음벽의 균열이 멈췄다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "결국… 신의를 택했구나. 그 대가는 영원할 것이다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "boss"
				},
				{
					"content": {
						"korean": "…끝났다. 정말로."
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"spot": [
						3,
						2
					],
					"speaker": "anuk",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"speaker": "anuk",
					"type": "speech",
					"content": {
						"korean": "너의 맹세는 이제 진실이 되었다. 허나…."
					}
				},
				{
					"content": {
						"korean": "새로운 길이 열렸다. 하지만 여정은 아직 끝나지 않았다."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"얼음 미로의 심장부. 돌무덤의 시험이 기다린다.",
			"길은 더 이상 존재하지 않았다. 오직 선택만이 남았다.",
			"가장 깊숙한 곳에서, 감춰진 동기가 푸른빛 아래 드러난다.",
			"신의를 지킬 것인가. 아니면, 스스로에게 굴복할 것인가.",
			"결정의 시간은 이미 시작되었다."
		]
	}
} as const;
