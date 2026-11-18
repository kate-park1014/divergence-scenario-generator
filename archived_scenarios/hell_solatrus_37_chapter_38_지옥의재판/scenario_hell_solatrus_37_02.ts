export const scenario_hell_solatrus_37_02 = {
	"scenario_id": "hell_solatrus_37_02",
	"order": 2,
	"random_boss_title": {
		"korean": "이교도 집행관"
	},
	"act": "rising",
	"theme": "hell",
	"actors": {
		"cinder": {
			"id": "mon_7bdc5bba-75ec-4589-827e-193b3c59b022",
			"name": {
				"korean": "신더",
				"english": "Cinder",
				"japanese": "シンダー",
				"chinese": "辛德",
				"french": "Cinder",
				"spanish": "Cinder",
				"vietnamese": "Xinder",
				"thai": "ซินเดอร์",
				"hindi": "सिंडर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/bc21258b-93ac-4669-7330-fdf4e8a57c00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/939a1911-1849-425c-67a4-4958bbdc3300/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"동료의 영혼을 쫓아 들어선 유황의 골짜기.",
			"자욱한 연기 속에 억울하게 희생된 이들의 기척이 감돈다.",
			"공정하다 알려진 사제의 판결 뒤편, 숨겨진 진실을 향해 발걸음을 옮긴다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "유황 연기가 자욱하게 피어오르는 골짜기 입구다."
					},
					"type": "speech"
				},
				{
					"spot": [
						2,
						2
					],
					"speaker": "cinder",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "콜록… 저는 지나가던 주민 신더예요. 독한 유황 연기에 다리를 다쳐 갇혀 있었어요."
					},
					"emotion": "sad",
					"speaker": "cinder",
					"type": "speech"
				},
				{
					"content": {
						"korean": "동료의 영혼을 쫓아 여기까지 왔다. 몸은 괜찮은가?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…연기 때문에 앞이 잘 안 보여."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_1"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "cinder",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "cinder",
					"content": {
						"korean": "도와주셔서 감사해요. 그런데 사제님을 찾아가시는 거라면 들은 소문이 있어요."
					}
				},
				{
					"speaker": "cinder",
					"emotion": "sad",
					"content": {
						"korean": "사제가 태운 영혼 중에 죄 없는 자도 있었다는 소문이 마을에 돌고 있어요."
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "공정하다던 사제가 무고한 이까지 태웠단 말인가?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "유황 연기 골짜기 바닥에서 은은한 오팔빛 불꽃 잔영이 피어오르고 있다."
					}
				},
				{
					"speaker": "character_2",
					"emotion": "base",
					"content": {
						"korean": "…바닥의 불빛, 묘하게 서늘해."
					},
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "cinder",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "cinder",
					"content": {
						"korean": "이 앞은 사제님을 맹신하는 자들이 지키고 있어요. 의심하는 자는 용서하지 않는대요!"
					}
				},
				{
					"content": {
						"korean": "소문의 진실을 확인하고 동료를 구하기 전엔 돌아갈 수 없다."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"direction": "down",
					"duration_ms": 400,
					"action": "exit",
					"speaker": "cinder",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_3",
					"content": {
						"korean": "…바람마저 뜨겁게 불어온다."
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "자욱한 유황 연기 속에서 거대한 무기가 지면을 긁는 소리가 들려온다."
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "누군가 우리 길을 막아서려 한다. 무기를 쥐어라!"
					}
				},
				{
					"emotion": "sad",
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "…손바닥에 땀이 차네."
					}
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "불경한 자들아, 사제님의 심판을 받아라!"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "…여기서 무너질 순 없다. 다시 전열을 가다듬자!"
					},
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "유황 연기 사이로 육중한 갑주를 입은 집행관이 모습을 드러낸다."
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "공정한 사제님을 모독하는 소문을 입에 담다니! 진실을 알기도 전에 잿더미로 만들어 주마!"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "우리는 동료를 구하고 사제의 오판에 대한 진실을 확인할 것이다!"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_4",
					"content": {
						"korean": "…숨이 턱 막혀온다."
					}
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "사제님의 판결은… 언제나 옳아야만 한다…"
					},
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "집행관을 물리쳤다. 이제 소문의 진상을 직접 확인하러 가자."
					},
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "쓰러진 자리 바닥에 오팔빛 불꽃 잔영이 아른거리며, 연기 너머 잿더미 신전 폐허로 길이 이어진다."
					}
				}
			]
		}
	]
} as const;
