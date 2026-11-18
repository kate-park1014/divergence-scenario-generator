export const scenario_hell_soterion_31_02 = {
	"scenario_id": "hell_soterion_31_02",
	"order": 2,
	"random_boss_title": {
		"korean": "지옥 옥사장"
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "절벽 아래에서 매캐한 유황 연기가 올라오고 있다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "cinder",
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"emotion": "base",
					"content": {
						"korean": "나는 죄수의 탈출을 돕는 신더야. 억울하게 갇힌 자들을 위해 움직이지."
					},
					"speaker": "cinder",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "용암 지대에 갇힌 동료들을 구할 방법을 찾고 있다."
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…유황 냄새 때문에 숨쉬기조차 힘들군."
					},
					"type": "speech",
					"speaker": "character_1"
				},
				{
					"speaker": "cinder",
					"emotion": "base",
					"content": {
						"korean": "동료를 구하려면 재판관이 사람들을 왜 가두는지부터 알아야 해."
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "신더가 겉옷 품속에서 붉게 빛나는 무언가를 꺼낸다."
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "cinder",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "cinder",
					"emotion": "base",
					"content": {
						"korean": "이건 절벽 밑에서 구한 붉은 보석 깃털이야. 신들의 명령을 받든다는 재판관의 흔적이지."
					}
				},
				{
					"content": {
						"korean": "소테리온에게 처벌받은 죄인들이 죄인이 아닐 수도 있다는 뜻인가?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "벌받은 자들이 사실 신들의 비리를 알던 자들이라는 소문이 파다해."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "cinder"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…점점 의문이 깊어지는군."
					},
					"speaker": "character_2",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "cinder",
					"spot": [
						2,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "cinder",
					"emotion": "base",
					"content": {
						"korean": "더 안쪽으로 가려면 옥사장을 넘어야 해. 난 구출한 죄수들을 이끌고 피하겠네."
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "고맙다. 길은 우리가 뚫겠다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "direction",
					"action": "exit",
					"direction": "up",
					"speaker": "cinder",
					"duration_ms": 400
				},
				{
					"speaker": "character_3",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…바닥이 일정하게 진동하고 있어."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "통로 건너편에서 쇠사슬을 끄는 묵직한 소리가 맴돈다."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "의심을 가로막으려는 옥사장이 접근하고 있군."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…공기가 기분 나쁘게 무거워진다."
					},
					"emotion": "sad",
					"speaker": "character_4"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "신의 뜻을 거스른 자들에게 내려질 형벌은 오직 죽음뿐이다!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…이대로 멈출 순 없다. 다시 전열을 가다듬자!"
					}
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "거대한 몽둥이를 든 지옥 옥사장이 길목을 거칠게 막아선다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "재판관 님의 엄정한 판결에 감히 의심을 품다니! 분수를 알아라!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "동료들을 구하기 전엔 돌아가지 않는다! 몽둥이를 치워라!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "…몽둥이가 바람을 가르는 소리가 서늘해."
					},
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "우매한 자들… 재판관 님의 정당한 심판을 피할 수 있을 것 같으냐…"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "진실을 가리는 심판이라면 굴복하지 않는다."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…일단 옥사장을 누르고 통로를 확보했어."
					},
					"speaker": "character_2"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "옥사장이 쓰러지며 품에서 신전의 인장이 찍힌 열쇠를 떨어뜨린다."
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "신전에 더 깊은 비밀이 숨겨져 있을 거다. 묵시의 죄악 신전으로 가자."
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"동료들이 용암 지대에 갇힌 통곡의 유황 절벽.",
			"매캐한 유황 연기 사이로 억울한 죄인들의 비명이 울려 퍼진다.",
			"주인공은 동료를 구할 단서를 찾아 절벽의 은밀한 통로로 향한다."
		]
	}
} as const;
