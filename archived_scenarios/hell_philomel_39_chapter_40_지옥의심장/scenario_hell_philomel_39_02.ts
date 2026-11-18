export const scenario_hell_philomel_39_02 = {
	"scenario_id": "hell_philomel_39_02",
	"order": 2,
	"random_boss_title": {
		"korean": "불꽃 약탈자"
	},
	"act": "rising",
	"theme": "hell",
	"actors": {
		"brim": {
			"id": "mon_d7f57824-190d-40b9-93d1-66c658f0441f",
			"name": {
				"korean": "브림",
				"english": "Brim",
				"japanese": "ブリム",
				"chinese": "布里姆",
				"french": "Brim",
				"spanish": "Brim",
				"vietnamese": "Brim",
				"thai": "บริม",
				"hindi": "ब्रिम"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/08ad0e4d-214d-43b3-dc3e-ddfba9049300/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/16f1def2-7c33-4558-4b21-9c3e87fa3e00/public"
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
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "골짜기 전체가 붉은 열기에 휩싸여 붉게 불타오르고 있다."
					}
				},
				{
					"type": "direction",
					"speaker": "brim",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "brim",
					"emotion": "base",
					"content": {
						"korean": "저는 붉은 바위 골짜기의 길잡이 브림입니다. 지옥불이 번지는 걸 감시하다 여러분을 보았습니다."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "우리는 지옥불의 확산을 막으러 가는 중이다. 집행자가 어디로 갔는지 아는가?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "…숨이 턱턱 막히는 열기야."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "바위 틈새에 선명한 색의 무언가가 매달려 있다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "brim",
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "저건 골짜기를 짓밟고 지나간 거대한 집행자가 떨어뜨린 핫핑크빛 깃털입니다."
					},
					"speaker": "brim",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "불을 뿜으며 닥치는 대로 공격한다던 집행자가 왜 이런 아름다운 깃털을 남긴 거지?"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "단서가 될 수도 있으니 깃털을 잘 챙겨두자."
					}
				},
				{
					"content": {
						"korean": "…이 강렬한 붉은색, 왠지 낯설어."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_2"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "brim",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 앞은 불길이 거세 길잡이인 저도 더는 갈 수 없습니다. 붉은 바위를 넘어가십시오."
					},
					"emotion": "sad",
					"speaker": "brim"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "안내해 줘서 고맙다. 여기서부터는 우리가 조사하겠다."
					}
				},
				{
					"action": "exit",
					"type": "direction",
					"speaker": "brim",
					"duration_ms": 400,
					"direction": "down"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…발밑의 바위가 달아오르고 있어."
					},
					"emotion": "angry",
					"speaker": "character_3"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"content": {
						"korean": "골짜기 통로 건너편에서 험악한 불꽃의 기척이 타오른다."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "누군가 길목을 가로막고 통과를 저지하려 한다."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…귓가를 울리는 불꽃 소리가 불길해."
					},
					"speaker": "character_4",
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "앞을 막아서며 무기를 거칠게 쥐어잡는다."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "집행자 님의 결정을 방해하게 두지 않겠다! 더 들어오면 목숨은 없다!"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "우리는 지옥불이 대륙을 삼키는 걸 막아야 한다. 비켜라!"
					}
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…더 이상 대화는 무의미하겠군."
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 하지만 방해해 봤자 소용없다… 불길은 멈추지 않는다…"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "손에 쥔 핫핑크빛 깃털에서 연기 대신 따뜻한 온기가 느껴진다."
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "열기의 더 깊은 근원인 용암 동굴 쪽으로 흔적이 이어진다. 이동하자!"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "탐험대는 깃털의 신비로운 온기를 품은 채 hot한 용암 동굴로 발걸음을 옮겼다."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "어리석은 자들아, 지옥의 불꽃에 타버려라!"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "happy"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "…아직 물러설 수는 없다. 다시 길을 뚫는다!"
					},
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"치솟는 지옥불이 붉은 바위 골짜기까지 밀려왔다.",
			"마법 대륙으로 확산하는 불길을 막아야 한다.",
			"탐험대는 거대한 집행자가 남긴 흔적을 쫓아 골짜기 깊은 곳으로 향한다."
		]
	}
} as const;
