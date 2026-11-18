export const scenario_hell_cystis_32_03 = {
	"scenario_id": "hell_cystis_32_03",
	"order": 3,
	"random_boss_title": {
		"korean": "시체 수집가"
	},
	"act": "rising",
	"theme": "hell",
	"actors": {
		"mara": {
			"id": "mon_94e5bffe-d3cd-4e5e-a174-633174784043",
			"name": {
				"korean": "마라",
				"english": "Mara",
				"japanese": "マーラ",
				"chinese": "玛拉",
				"french": "Mara",
				"spanish": "Mara",
				"vietnamese": "Mara",
				"thai": "มารา",
				"hindi": "मारा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/801457b4-3ecc-41f5-e450-73d6ce8eb200/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9bfac7d4-6bfd-49b0-5ba4-a25419c71400/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"검은 연못 강가에 축축하고 음습한 기운이 감돈다.",
			"유황 구덩이에서 마신 약 탓인지, 뱃속에서 징그러운 꿈틀거림이 시작된다.",
			"강가의 정보원을 찾아 비밀의 문서와 연못의 이상한 소문을 확인해야 한다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "검은 연못 강가. 배 속을 죄어오는 통증에 걸음이 절로 무거워진다."
					}
				},
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "mara",
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "저는 강가에서 기록을 조사하는 정보원 마라예요. 배를 움켜쥐고 괴로워하시길래 달려왔어요."
					},
					"emotion": "base",
					"speaker": "mara"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "뱃속에서 무언가 틀어지는 느낌이야. 마셨던 연꽃 약이 이상해."
					}
				},
				{
					"emotion": "sad",
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "…속이 부글거리고 뼛속까지 아려온다."
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "마라가 오래된 양피지 문서를 펴서 보여준다."
					}
				},
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "mara",
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "고통을 덜어준다던 구원자, 사실 불사약을 연구하다 마법 대륙에서 쫓겨난 연금술사라는 소문이 적혀 있어요."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "mara"
				},
				{
					"content": {
						"korean": "치료해 준다던 구원자가 추방당한 연금술사였다니."
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "…그 고통 완화라는 말이 모두 거짓이었단 말인가."
					},
					"type": "speech",
					"speaker": "character_2",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "연못 주변에 찢긴 옷가지와 임자 없는 물건들이 축축하게 흩어져 있다."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "강물 위로 노란 눈알 문양이 새겨진 장신구가 잠시 떠내려가다 거품 속으로 사라졌어."
					}
				},
				{
					"speaker": "character_3",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…기분 나쁜 눈동자가 나를 쏘아보는 것 같았어."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "연못 깊은 곳에서 수레 끄는 소리와 쇠사슬 긁히는 기척이 다가온다."
					}
				},
				{
					"content": {
						"korean": "검은 연못 안쪽에서 썩은 냄새와 함께 거친 숨소리가 뿜어져 나오고 있어."
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "…소름이 돋아서 등에 찬물이 끼얹어지는 기분이야."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_4"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "너희 뱃속도 곧 비어버려 시체 보따리에 들어갈 것이다!"
					},
					"type": "speech",
					"emotion": "happy",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…속이 터질 듯 아프지만, 이대로 물러설 수는 없어."
					}
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "윽… 속이 비어버린 껍데기들일 뿐인데… 감히 나를 꺾다니…"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "쓰러진 시체 수집가의 품에서 노란 눈알 모양 장신구가 바닥으로 굴러떨어졌다."
					}
				},
				{
					"content": {
						"korean": "이 노란 눈알 장신구… 아까 물가에서 보았던 기이한 문양과 같아."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "character_2",
					"emotion": "sad",
					"content": {
						"korean": "…차갑게 굳어있는 눈알 장신구가 불길하게 빛난다."
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "장신구의 의미와 뱃속 알의 진실을 파헤치기 위해 붉은 제단으로 이동한다."
					},
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "연못 입구를 막아선 시체 수집가가 거대한 보따리를 짊어진 채 탐험대를 가로막는다."
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "물러서라! 이 연못의 시체들은 썩기도 전에 속이 텅 비어 버린다. 너희도 곧 알을 밴 껍데기가 될 터!"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "뱃속의 기생충 짓이었군. 비켜라, 연못의 진실을 밝히겠다!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…절대 여기서 허무하게 빈 껍데기가 되진 않겠어."
					},
					"speaker": "character_1",
					"emotion": "angry"
				}
			],
			"id": 15
		}
	]
} as const;
