export const scenario_hell_stampy_30_05 = {
	"scenario_id": "hell_stampy_30_05",
	"order": 5,
	"act": "climax_finale",
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
		"pool_id": "pool_MysticStamp_Stampy_V1"
	},
	"prologue": {
		"korean": [
			"용암이 뒤덮인 지옥 관청의 중앙 대지.",
			"핫핑크 통행권에 숨겨진 마지막 정산이 기다리고 있다.",
			"결제 승인을 무효로 돌릴 단 하나의 창구.",
			"억울한 영혼들의 해방을 건 마지막 반납이 시작된다."
		]
	},
	"epilogue": {
		"korean": [
			"핫핑크 청구서 조각들이 용암 불길 속에 재가 되어 날아갔다.",
			"스탬피의 실적 장부는 0점으로 파기되었고, 억류되었던 영혼들은 붉은 관청을 벗어났다.",
			"부조리한 지옥 관청의 서류 더미 속에 비로소 서늘한 침묵이 찾아왔다.",
			"결제는 취소되었다. 이제 이 지옥을 나갈 차례다."
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
						"korean": "용암 연기 너머로 반납 수수료 창구가 보인다."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "여기가 바로 통행권을 반납할 수 있는 수수료 창구구나."
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"speaker": "ash",
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "ash",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "서류함 뒤에서 찾아낸 취소 도장을 쓸 기회야! 통행권을 내면 계약이 무효가 돼."
					}
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"emotion": "base",
					"content": {
						"korean": "…소름 돋을 만큼 기괴한 관청이야."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "ash",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "ash",
					"content": {
						"korean": "억울하게 영혼을 압류당한 서류들이 수수료 창구 둘레에 빽빽하게 쌓여 있어."
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "저 엄청난 청구서들이 전부 빼앗긴 영혼들의 빚이라니."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "character_2",
					"content": {
						"korean": "서류더미 사이에서 불길한 열기가 뿜어져 나온다."
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "내가 증인이 될게. 이 부조리한 수수료 폭주를 같이 끝내줘!"
					},
					"speaker": "ash",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "ash",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "ash",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "스탬피 녀석, 대마법 대륙 복귀 실적 5점을 채우려고 우리 통행권을 조작한 거야!"
					}
				},
				{
					"content": {
						"korean": "자신의 출세를 위해 9,999번째 세부 조항으로 영혼을 갈취하려 했군."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "화려한 핫핑크색 뒤에 이런 흑막이 숨겨져 있었다니."
					},
					"speaker": "character_3",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "ash",
					"content": {
						"korean": "통행권을 창구에 반납해서 실적 점수를 0점으로 파기해야 해!"
					},
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "ash",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "ash",
					"emotion": "angry",
					"content": {
						"korean": "도장을 받은 순간부터 연체 이자가 폭발적으로 징수되기 시작했어!"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "핫핑크 통행권을 반납 수수료 창구에 밀어 넣는 것만이 살길이다."
					},
					"speaker": "character_any"
				},
				{
					"speaker": "character_4",
					"content": {
						"korean": "숨이 턱 막힐 정도로 결제 청구서가 뿜어져 나와…!"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "내… 내 실적 점수 5점이 전부 0점으로 파기되다니! 말도 안 돼!"
					},
					"emotion": "sad"
				},
				{
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "ash"
				},
				{
					"type": "speech",
					"speaker": "ash",
					"emotion": "happy",
					"content": {
						"korean": "억류되었던 영혼들의 청구서가 전부 폭발하고 있어! 우리는 자유야!"
					}
				},
				{
					"content": {
						"korean": "부조리한 수수료 정산 계약이 전면 무효화되었다."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "스탬피의 관청 실적은 산산조각 났고, 지옥의 청구서 폭풍이 마침내 사그라들었다."
					},
					"emotion": "base"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "하하하! 감히 내 실적 5점을 방해하려 해? 폭발성 청구서 폭풍을 받아라!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "너의 사기 계약은 여기까지다! 핫핑크 통행권을 반납 수수료 창구에 전면 제출한다!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"emotion": "angry",
					"content": {
						"korean": "뭐라고?! 창구에 제출하면 내 결제 수수료 정산이 전부 취소되잖아!"
					}
				}
			],
			"lose_dialogue": [
				{
					"emotion": "happy",
					"content": {
						"korean": "멍청한 피해자 놈들! 너희 영혼도 정산서에 합산하여 영구 압류다!"
					},
					"type": "speech",
					"speaker": "boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아직 통행권은 내 손에 있다… 반납 창구에 던질 때까지 끝난 게 아니야!"
					},
					"emotion": "angry",
					"type": "speech"
				}
			]
		}
	]
} as const;
