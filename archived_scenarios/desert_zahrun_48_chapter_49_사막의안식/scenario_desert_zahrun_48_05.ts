export const scenario_desert_zahrun_48_05 = {
	"scenario_id": "desert_zahrun_48_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "desert",
	"actors": {
		"dune": {
			"id": "mon_fc976b75-f009-4bf2-b660-a3053c95d668",
			"name": {
				"korean": "듄",
				"english": "Dune",
				"japanese": "デューン",
				"chinese": "沙丘",
				"french": "Dune",
				"spanish": "Dune",
				"vietnamese": "Dune",
				"thai": "ดูน",
				"hindi": "ड्यून"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/7568ec11-0329-44b4-740a-71b25ef62400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/ba7095b5-0d99-40bd-1155-b57701c00f00/public"
		}
	},
	"boss": {
		"pool_id": "pool_CaravanUndertaker_Zahrun_V1"
	},
	"prologue": {
		"korean": [
			"별빛이 쏟아지는 모래 언덕 위로 차가운 바람이 불어온다.",
			"사막을 떠돌던 수백 자루의 검들이 모래 아래에서 나지막이 울부짖는다.",
			"이 굴레를 끊어내고 사막을 빠져나가기 위한 마지막 결전이 시작된다."
		]
	},
	"epilogue": {
		"korean": [
			"녹슨 검을 모래 깊숙이 묻자 우리를 짓누르던 죽음의 기운도 거짓말처럼 사그라들었다.",
			"슬프게 울부짖던 사막의 검들은 마침내 차가운 안식을 찾았다.",
			"끝없이 이어지던 모래 언덕 너머로 사막 밖의 푸른 하늘이 드러나기 시작했다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "별빛이 비치는 모래 언덕 입구에 다다르자 누군가 빠르게 달려온다."
					}
				},
				{
					"speaker": "dune",
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"speaker": "dune",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "너희를 돕기 위해 뒤쫓아왔어! 모래바람 언덕에서 날 구해준 은혜를 갚게 해줘."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "모래바람 언덕에서 들었던 나지막한 황동 방울 소리가 바로 이 언덕에서 들린다."
					}
				},
				{
					"content": {
						"korean": "…사막 바람이 뼛속까지 스며들어."
					},
					"type": "speech",
					"speaker": "character_1",
					"emotion": "sad"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "언덕 중턱으로 올라서자 상인의 짐 궤짝들이 모래에 파묻혀 있다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "dune",
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "이 천 조각을 봐! 사막 상인이 몸에 두르고 있던 것과 똑같아."
					},
					"type": "speech",
					"speaker": "dune",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "오아시스 우물가에서 보았던 바로 그 쪽빛 천 조각이다."
					}
				},
				{
					"emotion": "sad",
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "…공기마저 무겁게 내려앉는군."
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "정상으로 향하는 길목, 모래판 위에 깊게 눌린 자국이 정갈하게 늘어서 있다."
					},
					"type": "speech"
				},
				{
					"action": "enter",
					"speaker": "dune",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"emotion": "angry",
					"speaker": "dune",
					"type": "speech",
					"content": {
						"korean": "이 이상한 해골 형상의 자국은 대체 뭐지?"
					}
				},
				{
					"content": {
						"korean": "바람 골짜기에서 확인했던 상아빛 낙타 해골 가면의 모양이다."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "위험한 기운이 맴돌아. 난 뒤를 경계할 테니 어서 위로 올라가!"
					},
					"emotion": "angry",
					"speaker": "dune",
					"type": "speech"
				},
				{
					"direction": "down",
					"action": "exit",
					"speaker": "dune",
					"type": "direction",
					"duration_ms": 400
				},
				{
					"type": "speech",
					"content": {
						"korean": "…긴장감에 손끝이 저려온다."
					},
					"speaker": "character_3",
					"emotion": "sad"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"content": {
						"korean": "언덕 정상부에서 쿠쿵하는 기묘한 진동과 함께 나지막한 비명이 울린다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "모래 밑에서 수많은 무언가가 소용돌이치며 솟구치려 한다."
					},
					"type": "speech"
				},
				{
					"speaker": "character_4",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…숨이 턱 막히는 중압감이야."
					}
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "쪽빛 천을 두르고 상아빛 낙타 해골 가면을 쓴 키 큰 상인이 정중에 서 있다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "지친 검객들이여, 차가운 물 한 모금 마시고 쉬어가라."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "boss"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "자룬이 방울을 흔들자 낙타 행렬이 무너지며 거대한 장의사 형상이 솟구쳐 오른다."
					}
				},
				{
					"content": {
						"korean": "그 검, 곧 울겠군. 걱정 마라. 네 검은 내가 정성껏 묻어주마. 너를 먼저 묻은 다음에."
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "boss"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "폐허가 된 제단에 꽂혔다 사라진 수백 자루의 검들이 저 장의사 뒤에 세워져 있다!"
					}
				},
				{
					"content": {
						"korean": "우리는 모래 속에 묻히지 않는다. 검을 들어라!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "…절대 여기서 무릎 꿇을 순 없어!"
					},
					"speaker": "character_1",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "angry",
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "네 검의 울음소리가 더 짙어지는구나. 모래 아래에서 깊이 잠들라."
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…아직 싸움은 끝나지 않았다. 다시 일어선다!"
					}
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "전쟁터에서 주인을 잃고 버려진 검들이 모래 속에서 슬프게 울부짖었다. 그래서 내가 거두어 장례를 치러주기 시작했지."
					}
				},
				{
					"emotion": "angry",
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "죽음의 기운이 밴 검을 거두려면 주인을 먼저 모래에 묻어야만 한다."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "카사이의 조언대로 품고 있던 녹슨 검을 사막 모래 깊숙이 묻는다."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "…울부짖던 검들이 드디어 안식을 찾고 고요해졌구나."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "boss"
				},
				{
					"content": {
						"korean": "거대한 장의사 형상이 안개처럼 사라지며 사막 너머로 통하는 탈출로가 열린다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "dune",
					"direction": "down"
				},
				{
					"type": "speech",
					"content": {
						"korean": "검들의 울음소리가 멈췄어! 사막 밖으로 나가는 길이야!"
					},
					"emotion": "happy",
					"speaker": "dune"
				}
			]
		}
	]
} as const;
