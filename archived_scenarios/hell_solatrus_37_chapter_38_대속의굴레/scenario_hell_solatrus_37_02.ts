export const scenario_hell_solatrus_37_02 = {
	"scenario_id": "hell_solatrus_37_02",
	"order": 2,
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
			"낙인 찍힌 잿더미 터에 지독한 불길이 타오른다.",
			"화형 집행관이 신더를 화형대에 묶고 판결을 내리려 한다.",
			"잿더미 속에서 피어오르는 오팔빛 신성염의 잔영.",
			"동료를 구하기 위해, 다시 잿빛 태엽시계의 태엽을 감아야 한다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "cinder",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "살려줘! 제발 날 이 불길 속에서 꺼내줘!"
					},
					"emotion": "angry",
					"speaker": "cinder",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "신더가 화형대에 묶여 있어. 잿빛 태엽시계로 시간을 되돌려서 구해야 해."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_1",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "피부가 타들어 가는 것 같은 열기다..."
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "벽에 걸린 고문 서판을 봐. 타오르는 문자들이 새겨져 있어."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "cinder"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "서판에 적힌 죄인들의 이름 위에... 백금 사제 솔라트루스의 이름이 덮어 쓰여 있어."
					}
				},
				{
					"speaker": "cinder",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "사제의 이름이라고? 여긴 죄인들이 형벌을 받는 곳인데..."
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "누군가 죄인들의 형벌을 사제에게 덮어씌우고 있는 게 틀림없어."
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "cinder",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "더 늦기 전에 잿빛 태엽시계의 태엽을 되돌리겠어."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "cinder",
					"emotion": "angry",
					"content": {
						"korean": "으아악! 태엽이 돌아갈 때마다... 동료 대신 어떤 사제가 불길 속으로 걸어 들어가는 환영이 보여!"
					}
				},
				{
					"content": {
						"korean": "환영 속 사제가 죄인의 목에 걸릴 밧줄을 스스로 자기 목에 감고 있어."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "character_2",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "...뼛속까지 소름이 돋는다."
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "화형대 중심부로 다가갈수록 잿더미가 거세게 휘날린다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "cinder"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "잿더미 속을 봐. 타버린 죄인의 영혼 대신 백금 사제복 조각이 흩날리고 있어."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "사제복 조각...? 날 대신해 누군가 숯이 되고 있는 건가..."
					},
					"speaker": "cinder"
				},
				{
					"content": {
						"korean": "시간을 돌려서라도 당신을 화형대에서 끄집어내겠어."
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "어리석은 영혼들이여, 불길 속에서 영원히 참회하라."
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아직 포기할 수 없어... 태엽을 다시 쥐어야 해."
					},
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "오팔빛 신성염의 잔영이 화형대 주변을 집어삼킨다."
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "굴레를 되돌릴수록 참회의 낙인은 더 깊어질 뿐이다."
					},
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "신더를 불길 속에 넘겨줄 수는 없다!"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "되돌린 시간의 대가를 치러라!"
					},
					"type": "speech",
					"speaker": "random_boss"
				}
			],
			"win_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "태엽을 돌려 목숨은 구했으나... 붉은 흉터는 너희 영혼에 새겨졌다."
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "시간을 다시 되돌렸다. 신더는 불길 속에서 무사히 빠져나왔어."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "cinder",
					"action": "enter"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "고마워... 하지만 태엽이 돌아갈 때 들린 사제의 울부짖음이 귓가를 떠나지 않아."
					},
					"type": "speech",
					"speaker": "cinder"
				},
				{
					"content": {
						"korean": "시간은 돌아왔지만, 잿더미 속 무거운 죄책감은 씻기지 않았다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"id": 15
		}
	]
} as const;
