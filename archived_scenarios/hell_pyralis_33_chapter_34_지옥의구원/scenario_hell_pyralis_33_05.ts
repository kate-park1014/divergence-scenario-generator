export const scenario_hell_pyralis_33_05 = {
	"scenario_id": "hell_pyralis_33_05",
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
		"pool_id": "pool_SoulCradle_Pyralis_V1"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "붉은 용암 비석이 피어오르는 혼석 절벽 입구."
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "ash",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "주문서 뒷면의 숨겨진 인장을 해독했어… 이건 구원의 의식이 아니야!"
					},
					"type": "speech",
					"speaker": "ash"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "혼석을 깨뜨리면 영혼이 해방되는 게 아니었나?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "ash",
					"emotion": "sad",
					"content": {
						"korean": "아니야! 혼석이 파괴되는 순간 지옥의 염화가 폭발해 영혼을 완벽히 소멸시켜!"
					}
				},
				{
					"speaker": "character_1",
					"emotion": "base",
					"content": {
						"korean": "…소름 돋네."
					},
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						3,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ash"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "피랄리스가 왜 수백 년 동안 이 불길을 온몸으로 견뎠는지 알아?"
					},
					"type": "speech",
					"speaker": "ash"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "어린 주인의 지옥 형벌을 대신 받기 위해서였지."
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "그래! 아이의 영혼을 보호하기 위해 그 가슴속에 혼석을 품고 있었던 거야!"
					},
					"type": "speech",
					"speaker": "ash"
				},
				{
					"type": "speech",
					"speaker": "character_2",
					"content": {
						"korean": "뼛속까지 오한이 들어."
					},
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "ash",
					"type": "direction",
					"duration_ms": 400,
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "ash",
					"content": {
						"korean": "절벽 위에서 뿜어져 나오는 저 빛을 봐. 혼석 파편이 염화에 닿자마자 폭발하고 있어!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "외부의 충격으로 혼석이 깨지면 피랄리스와 영혼이 동시에 소멸한다는 뜻이군."
					},
					"speaker": "character_any"
				},
				{
					"speaker": "ash",
					"type": "speech",
					"content": {
						"korean": "제발 멈춰! 손대는 순간 둘 다 영원히 사라져버려!"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_3",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "온몸에 전율이 흘러…"
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
						3
					],
					"type": "direction",
					"duration_ms": 400,
					"speaker": "ash",
					"action": "enter"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이 너머에 피랄리스가 있어… 그 가슴속에 갇힌 건 억울하게 끌려온 소년 주인의 혼백이야."
					},
					"speaker": "ash",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이제 돌이킬 수 없어. 피랄리스와 결판을 내야 해."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "제발 혼석을 부수지 마… 그건 구원이 아니라 최악의 형벌이야!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "ash"
				},
				{
					"type": "speech",
					"speaker": "character_4",
					"emotion": "base",
					"content": {
						"korean": "손끝이 덜덜 떨린다."
					}
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"emotion": "sad",
					"content": {
						"korean": "(피눈물을 흘리며) 제발… 내 주인을… 해치지 마…"
					},
					"type": "speech",
					"speaker": "boss"
				},
				{
					"content": {
						"korean": "주문대로 에메랄드 혼석을 깨뜨려 영혼을 꺼낸다!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "혼석이 산산조각 나는 순간, 오팔빛 지옥 염화가 폭발했다."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "크아아악! 주인님—!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "boss"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "피랄리스와 어린 주인의 영혼이 완전히 소멸하고, 지옥 재판소 전체가 붕괴하기 시작했다."
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "우리가… 도대체 무슨 짓을 저지른 거지?"
					},
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "크아아아! 감히 내 주인을 넘보지 마라!"
					},
					"emotion": "angry",
					"speaker": "boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "피랄리스의 염화에 접근조차 할 수 없어…"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "무자비한 지옥의 불길이 탐험대를 완전히 삼켜버렸다."
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "절벽 정상, 거대한 신수 피랄리스가 가슴의 에메랄드 혼석을 쥔 채 노려본다."
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "크아아아! 내 주인을… 절대 건드리지 마라!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "피랄리스 가슴의 혼석에 균열이 생기며 영혼의 잔재가 드러나고 있어!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 목숨이 다해도… 주인님만은 지킨다!"
					},
					"emotion": "angry",
					"speaker": "boss"
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"오팔빛 염화가 스러진 자리에는 오직 차가운 재만 남았다.",
			"피랄리스도, 그가 온몸으로 지켜낸 어린 주인의 영혼도 흔적조차 없이 사라졌다.",
			"지옥 재판소의 형벌은 끝났다. 가장 잔혹하고 비극적인 구원의 방식으로.",
			"잿더미 위로 소름 돋는 침묵만이 휘감겼다."
		]
	},
	"prologue": {
		"korean": [
			"혼석 절벽의 정상. 오팔빛 염화가 어둠을 집어삼키고 있었다.",
			"손에 쥐인 주문서는 에메랄드 혼석을 깨뜨리라고 말하고 있었다.",
			"그것이 어린 영혼을 구원하는 유일한 길이라 믿었다.",
			"그것이 완벽한 파멸의 시작임을 알지 못한 채."
		]
	}
} as const;
