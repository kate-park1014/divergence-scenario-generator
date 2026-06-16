export const scenario_snowy_bellus_38_05 = {
	"scenario_id": "snowy_bellus_38_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "snowy",
	"actors": {
		"hild": {
			"id": "mon_6f20c96a-bf07-4aae-b37c-da898a8336e8",
			"name": {
				"korean": "힐드",
				"english": "Hild",
				"japanese": "ヒルド",
				"chinese": "希尔德",
				"french": "Hild",
				"spanish": "Hild",
				"vietnamese": "Hild",
				"thai": "ฮิลด์",
				"hindi": "हिल्ड"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/722a86fd-2903-4688-3f04-db8241ed0e00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/af3d96ba-e571-4132-fede-cd415bd15c00/public"
		}
	},
	"boss": {
		"pool_id": "pool_035"
	},
	"prologue": {
		"korean": [
			"멈춰버린 열차 기관실. 황동 시계 장치가 거꾸로 돌고 있었다.",
			"수십 개의 모래시계가 모래를 위로 흘려보낸다.",
			"그 한가운데, 벨루스의 시계 얼굴이 우리를 기다린다.",
			"그는 시간을 멈춘 것이 아니라, 되감고 있었다.",
			"영원히 멈춰버린 그의 신념은, 곧 파괴였다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "열차의 기관실. 거대한 황동 시계가 거꾸로 돌고 있었다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이게… 멈춘 시간의 심장인가."
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "수십 개의 모래시계가 모래를 위로 흘려보낸다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "hild",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "벨루스 님은… 이곳에서 모든 것을 멈췄어요."
					},
					"speaker": "hild",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "모든 것을? 죽음마저?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "hild",
					"duration_ms": 500
				},
				{
					"speaker": "hild",
					"content": {
						"korean": "네. 늙는 것도, 죽는 것도… 여기선 일어나지 않아요."
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그게 왜 슬픈 일이야?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "hild",
					"content": {
						"korean": "끝을 지우면, 살아온 것도 함께 지워져요."
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "모든 생명은 끝이 있어야 완전한데…."
					},
					"speaker": "hild"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "hild",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "벨루스 님은 시간을 흐름을… 파괴라고 생각해요."
					},
					"speaker": "hild"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "파괴?"
					}
				},
				{
					"speaker": "hild",
					"content": {
						"korean": "노화, 망각, 죽음… 그 모든 것을 파괴로 보죠."
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "시든 꽃잎 하나가 거꾸로 피어나며 제 모습을 찾았다."
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "hild",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "그는 멈추려 하는 게 아니에요. 되감아서… 모두를 지키려는 거죠."
					},
					"speaker": "hild",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "그게 지키는 거라고?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "시계 장치 한가운데서, 벨루스의 얼굴이 천천히 우리를 응시했다."
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "낡은 집찰 가위와 검표기가 먼지 속에 놓여 있었다."
					},
					"speaker": "narrator"
				},
				{
					"speaker": "hild",
					"content": {
						"korean": "이제… 돌아갈 수 없어요."
					},
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 황동 시계 장치가 멈춘 채, 벨루스가 탐험대를 맞이한다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "왔구나. 너희는 시간을 다시 흐르게 하려는구나."
					},
					"speaker": "boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그래! 멈춰버린 시간을 되돌려야 해!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "그건 파괴야. 나는 그 전에… 너희를 지키려는 거야."
					},
					"speaker": "boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"speaker": "hild",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "벨루스 님! 끝을 지우는 것은, 삶을 지우는 것과 같아요!"
					},
					"speaker": "hild",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "너희는… 아무것도 몰라."
					},
					"speaker": "boss"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "벨루스의 거대한 황동 시계가 멈췄다. 더 이상 거꾸로 흐르지 않는다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "흐르게 두면… 너희는 늙고, 병들고, 잊혀질 텐데…."
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그게 삶의 일부야. 받아들여야만 해."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "hild"
				},
				{
					"speaker": "hild",
					"content": {
						"korean": "이제… 시간이 다시 흐를 거예요."
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "열차의 시간이 다시 흐르기 시작했다. 다음 목적지를 향해."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "벨루스의 시계 장치가 탐험대의 시간을 되감았다. 몸이 굳어버린다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "너희는… 파괴를 막을 수 없어."
					},
					"speaker": "boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…아직 끝나지 않았어. 반드시 시간을 되돌릴 거야."
					},
					"type": "speech",
					"emotion": "angry"
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"황동 시계 장치는 더 이상 거꾸로 돌지 않았다. 멈췄던 시간이 다시 흐르기 시작했다.",
			"벨루스는 침묵했다. 그의 지키려는 신념과 함께.",
			"사람들은 잊고, 늙고, 병들어 죽을 것이다. 그게 자연의 순리였다.",
			"우리가 벨루스로부터 시간을 구원한 것일까, 아니면 자연의 잔인함을 되돌린 것일까?",
			"열차는 정처 없이, 다시 미래를 향해 나아갔다."
		]
	}
} as const;
