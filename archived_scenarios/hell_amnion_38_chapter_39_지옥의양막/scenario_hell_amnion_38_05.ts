export const scenario_hell_amnion_38_05 = {
	"scenario_id": "hell_amnion_38_05",
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
		"pool_id": "pool_SpiritCyst_Amnion_V1"
	},
	"prologue": {
		"korean": [
			"신전 중앙 제단. 카운트다운 수치가 마침내 0을 가리킨다.",
			"거대한 오팔빛 낭종이 기형적인 숨을 쉬며 불길하게 팽창한다.",
			"동료라 믿었던 애쉬가 은빛 메스를 쥐여주며 고치를 베라고 종용한다.",
			"그러나 거친 열기 속에서, 감춰졌던 핏빛 진실이 드러나기 시작한다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "ash",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "ash"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "ash",
					"emotion": "angry",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"speaker": "ash",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_2"
				},
				{
					"emotion": "base",
					"speaker": "ash",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "ash"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "ash"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_3"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "ash",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "ash"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_4",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"type": "direction",
					"speaker": "ash"
				},
				{
					"emotion": "happy",
					"type": "speech",
					"speaker": "ash"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "ash"
				},
				{
					"speaker": "boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"emotion": "angry",
					"speaker": "boss",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "happy",
					"type": "speech"
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"신전 바닥을 메운 붉은 용암이 마침내 오팔빛 포자를 깔끔하게 삼켜버렸다.",
			"애쉬의 단명한 비명도, 낭종 속 아기들의 기괴한 떼웃음도 용암 밑으로 침묵했다.",
			"카운트다운 전광판이 붉은 0에서 멈추며 신전 전체에 지옥의 정적이 찾아왔다.",
			"손에 쥔 은빛 메스는 뜨거운 열기에 녹아내렸다. 모든 폭발의 위협은 끝났다."
		]
	}
} as const;
