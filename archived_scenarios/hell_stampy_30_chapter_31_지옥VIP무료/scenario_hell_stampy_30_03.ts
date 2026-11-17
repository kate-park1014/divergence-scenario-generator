export const scenario_hell_stampy_30_03 = {
	"scenario_id": "hell_stampy_30_03",
	"order": 3,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"ash": {
			"id": "mon_b225f5fa-59a1-47bb-b4c5-e73bf9e7192a",
			"name": {
				"korean": "애쉬",
				"english": "Ash",
				"japanese": "アッシュ",
				"chinese": "艾什",
				"french": "Ash",
				"spanish": "Ash",
				"vietnamese": "Ash",
				"thai": "แอช",
				"hindi": "ऐश"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d84413a8-9d6f-4a40-5d36-75e431fb9900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/78281fca-e4b8-45cc-68ef-7df3fef74200/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "높게 치솟은 핫핑크 영수증 타워 아래로 서류 비가 쏟아진다."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "청구서 금액이 억만 골드라고?"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "ash",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						4
					]
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "저도 그 통행권에 도장을 찍었다가 평생 영혼 연체료를 뜯기는 중이에요!"
					},
					"speaker": "ash"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "말도 안 되는 수수료잖아. 당장 최종 승인 도장을 받아야겠어."
					},
					"speaker": "character_any",
					"type": "speech"
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
					"action": "enter",
					"speaker": "ash"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "잠깐만요! 수수료 창구 서류 더미를 보세요!"
					},
					"speaker": "ash"
				},
				{
					"type": "speech",
					"content": {
						"korean": "서류 구석에 붉은 직인이 찍혀 있어."
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "'도장을 받으면 자동 연체 승인'이라고 적혀 있잖아요!"
					},
					"type": "speech",
					"speaker": "ash"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "도장을 모을수록 수수료가 계속 늘어나는 구조였군."
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…이건 완전히 사기잖아."
					},
					"type": "speech",
					"speaker": "character_1"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "ash",
					"spot": [
						3,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "생각났어요! 전에 그 마스코트 스탬피가 통행권 조항을 몰래 고쳐 쓰던 모습을 봤어요!"
					},
					"emotion": "angry",
					"speaker": "ash"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "스탬피가 통행권을 조작했다고?"
					},
					"type": "speech"
				},
				{
					"speaker": "ash",
					"content": {
						"korean": "실적 5점을 채워 대륙으로 복귀하려고 핫핑크 통행권에 연체 조항을 쑤셔 넣은 거예요!"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "결국 처음부터 우릴 억만 골드 채무자로 만들 속셈이었군."
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						4
					],
					"type": "direction",
					"speaker": "ash",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "보세요, 거대한 영혼 서류함 뒤쪽에 종이 한 장이 떨어져 있어요!"
					},
					"emotion": "base",
					"speaker": "ash"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "반납 신청서잖아. 전체 계약을 무효로 만드는 취소 도장이 숨겨져 있었어."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "ash",
					"type": "speech",
					"content": {
						"korean": "하지만 관리를 넘어서지 못하면 반납도 못 하고 영혼을 압류당할 거예요!"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "더는 그들의 수수료 징수에 놀아나지 않겠다."
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "크윽... 하지만 도장을 받으면 연체 승인이 완료되는 금기를 잊지 마라!"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "마지막 결제 도장까지 얼마 남지 않았다."
					},
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "정산 감독관을 쓰러뜨렸지만, 통행권에 새겨진 악마적 조항의 그늘은 더욱 짙어졌다."
					}
				}
			],
			"id": 15,
			"dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "억만 골드 채무자들이 감히 정산소 최종 승인 도장을 요구하는가!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "말도 안 되는 억지 청구서를 철회하고 도장을 찍어라!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "연체료를 내지 못하면 너희 영혼은 영원히 지옥 관청의 소유다!"
					},
					"emotion": "angry"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "억만 골드의 연체료는 너희 영혼으로 정산하겠다!"
					},
					"emotion": "happy"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "부조리한 징수를 받아들일 순 없어... 다시 덤벼라!"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"수수료 정산소에는 끝도 없이 쌓인 핫핑크 영수증 타워가 치솟아 있었다.",
			"도장을 새로 받으려 했을 뿐인데, 눈앞에 내밀어진 청구서는 영혼 연체료 억만 골드.",
			"부조리한 지옥 관청의 서류 공세 속에서 부풀려진 계약의 비밀이 드러난다."
		]
	}
} as const;
