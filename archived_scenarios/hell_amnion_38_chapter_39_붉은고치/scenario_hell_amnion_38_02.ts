export const scenario_hell_amnion_38_02 = {
	"scenario_id": "hell_amnion_38_02",
	"order": 2,
	"random_boss_title": {
		"korean": "수호기사"
	},
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
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "검은 용암 절벽 입구, 한 남자가 열기와 독기에 찌들어 주저앉아 있다."
					},
					"speaker": "narrator"
				},
				{
					"speaker": "ash",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"direction": "down",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "ash",
					"content": {
						"korean": "억… 나는 탐험가 애쉬요. 지옥 독기에 비틀거리던 것을 도와주어 정말 고맙소."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "동료의 독기를 치료할 구원의 고치가 이 절벽 위에 있는 게 맞나?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "ash",
					"content": {
						"korean": "맞소. 성녀가 잠든 고치가 절벽 위에 있다고 들었소. 하지만 위함이 가득하니 조심하시오."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…열기 때문에 숨이 턱 막힌다."
					},
					"speaker": "character_1",
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "절벽 벽면에 붉은 전자기 잔상이 기묘한 소리를 내며 치직거린다."
					}
				},
				{
					"spot": [
						3,
						2
					],
					"speaker": "ash",
					"type": "direction",
					"action": "enter",
					"direction": "down",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "절벽 벽면에 남은 붉은 전자기 잔상을 조사해 봐야겠어."
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "ash",
					"content": {
						"korean": "고치에서 흘러나오는 기운 같소만… 붉은 빛이 심상치 않구려."
					}
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "…소름 돋는 불길함이야."
					},
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "ash",
					"duration_ms": 500,
					"type": "direction",
					"direction": "down",
					"spot": [
						2,
						2
					]
				},
				{
					"content": {
						"korean": "저 위에서 거친 기척이 느껴지오. 고치를 숭배하는 수호기사가 길을 막고 있는 것 같소."
					},
					"speaker": "ash",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "동료를 구하기 위해서라도 무슨 수가 있든 돌파하겠다."
					}
				},
				{
					"direction": "down",
					"type": "direction",
					"action": "exit",
					"duration_ms": 400,
					"speaker": "ash"
				},
				{
					"speaker": "character_3",
					"type": "speech",
					"content": {
						"korean": "…발밑의 용암이 더 거세게 끓어올라."
					},
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
						"korean": "절벽 정상 근처, 중장갑의 육중한 철제 발소리가 구릉을 울린다."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "거대한 살기가 정면에서 접근하고 있다. 방심하지 마라."
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "character_4",
					"type": "speech",
					"content": {
						"korean": "…검이 바닥을 긁는 소리가 서늘해."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "용암 절벽의 꼭대기, 고치를 지키는 수호기사가 칼을 쥐고 막아서 있다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "성녀님의 안식을 방해하려는 자들이냐! 더 이상 다가오지 마라!"
					}
				},
				{
					"content": {
						"korean": "우리는 동료의 목숨을 구하러 왔다. 순순히 비켜라!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "…투구 너머의 기세가 시퍼렇다."
					},
					"type": "speech",
					"speaker": "character_1",
					"emotion": "sad"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "성녀님의 거처를 더럽히는 악당들에게 철퇴를!"
					}
				},
				{
					"content": {
						"korean": "…이대로 물러설 수는 없다. 전열을 다듬자."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "성녀님을… 건드리지… 마라…"
					},
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "전자기 잔상 사이로 성녀의 목소리에 여러 음성이 겹쳐 들린다."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "구원의 고치가 정말 순수한 구원인 것인지 의심이 깊어지는군."
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "진실과 단서를 찾기 위해 탐험대는 다음 지역인 붉은 용암 호수로 발걸음을 옮겼다."
					},
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"동료의 몸속에 독기가 점차 퍼져나간다.",
			"탐험대는 구원의 고치가 존재한다는 검은 용암 절벽으로 향한다.",
			"절벽 정상에서 그들을 기다리는 것은 가혹한 진실의 울림이었다."
		]
	}
} as const;
