export const scenario_hell_philomel_39_05 = {
	"scenario_id": "hell_philomel_39_05",
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
		"pool_id": "pool_MartyrCradle_Philomel_V1"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "지옥 심연의 심장부, 사방에서 뿜어져 나오는 열기로 숨이 막힌다."
					},
					"type": "speech"
				},
				{
					"action": "enter",
					"speaker": "ash",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "ash",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "입구에서 헤어졌던 애쉬예요! 더 큰 불길이 번지기전에 뒤쫓아 왔어요."
					}
				},
				{
					"type": "speech",
					"speaker": "ash",
					"content": {
						"korean": "바닥에 떨어진 이 조각… 지옥의 붉은 입구에서 보았던 금 간 흑요석 조각이에요."
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "집행자가 스스로를 묶어 둔 갑옷 조각이라는 게 확실해졌다."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "…뜨거운 바람이 온몸을 때리네."
					},
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "바닥 틈새로 붉은 용암과 푸른 빛줄기가 복잡하게 얽혀 있다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "ash"
				},
				{
					"speaker": "ash",
					"content": {
						"korean": "용암 흘러내리는 골짜기에서 보았던 에메랄드빛 자국이 여기까지 퍼져 있네요."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이 차가운 기운은 집행자의 몸 안에 남아 있던 별빛 정령의 온기다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_2",
					"emotion": "base",
					"content": {
						"korean": "…불꽃 아래 서늘한 기운이 맴돌아."
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "흑요석 기둥 아래, 핫핑크빛 깃털 하나가 불길 속에서 흔들린다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "ash",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "ash",
					"emotion": "base",
					"content": {
						"korean": "불탄 암석 제단에서 주웠던 깃털과 같은 색이에요!"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이 깃털은 집행자의 날개에서 떨어진 별빛 정령의 흔적이다."
					},
					"emotion": "base"
				},
				{
					"duration_ms": 400,
					"speaker": "ash",
					"action": "exit",
					"direction": "down",
					"type": "direction"
				},
				{
					"speaker": "character_3",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…심장부의 열기가 바로 앞까지 밀려와."
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "거대한 심연의 문 너머로 굉음과 함께 붉은 폭풍이 몰아친다."
					},
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "문 안쪽에서 사방으로 뿜어져 나오는 지옥불이 밀려오고 있다."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "character_4",
					"type": "speech",
					"content": {
						"korean": "…더 발을 딛기가 무서워."
					},
					"emotion": "sad"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "공격을 받아치자 집행자의 흑요석 투구가 벗겨져 튕겨 나간다."
					}
				},
				{
					"content": {
						"korean": "제발 더 가까이 오지 마세요! 제 안의 불이 새어 나오면 당신들까지 재가 돼요!"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "boss"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "마법 대륙으로 불길이 번지는 걸 막으려 불을 삼키고 이 무거운 갑옷에 나를 가두었어요!"
					},
					"speaker": "boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "몸 안의 열기를 잠재울 별빛 수정을 가슴의 화염 코어에 꽂는다!"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…따뜻하고 차가운 별의 기운이 불꽃을 침묵시키고 있어."
					}
				},
				{
					"content": {
						"korean": "화염 코어에 수정을 꽂자 뿜어져 나오던 지옥불이 조용히 봉인되었다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "칠흑 같은 갑주와 자홍빛 날개를 펼친 거대한 집행자 필로멜이 길을 막아선다."
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "지옥에 발을 들인 침입자들아, 불꽃에 삼켜지기 전에 당장 떠나라!"
					},
					"emotion": "angry",
					"speaker": "boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "마라에게 받은 별빛 수정을 집행자의 화염 코어에 꽂아 지옥불을 봉인하겠다!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_1",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…갑옷 틈으로 불길이 미친 듯이 터져 나와."
					}
				}
			],
			"lose_dialogue": [
				{
					"speaker": "boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "도망치라고 했을 텐데… 몸 안의 불이 전부 삼켜버릴 것이다!"
					}
				},
				{
					"content": {
						"korean": "여기서 멈출 수 없다. 다시 일어나 봉인을 완수해야 한다."
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"epilogue": {
		"korean": [
			"별빛 수정이 뿜어낸 차가운 빛이 심연의 붉은 불길을 조용히 침묵시켰다.",
			"마법 대륙으로 번지려던 지옥불은 봉인되었고, 필로멜은 마침내 무거운 갑옷에서 해방되었다.",
			"타오르던 열기가 식어간 지옥 심연에 오랫동안 잊힌 별빛이 머물렀다."
		]
	},
	"prologue": {
		"korean": [
			"지옥 심연의 심장부, 붉은 불길이 폭포처럼 쏟아져 내린다.",
			"집행자의 금 간 갑옷에서 새어 나온 지옥불이 마법 대륙까지 위협하고 있다.",
			"암석 제단에서 받은 별빛 수정을 들고 final 결전을 위해 심연으로 향한다."
		]
	}
} as const;
