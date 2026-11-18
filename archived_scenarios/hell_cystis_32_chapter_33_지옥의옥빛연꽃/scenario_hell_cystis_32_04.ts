export const scenario_hell_cystis_32_04 = {
	"scenario_id": "hell_cystis_32_04",
	"order": 4,
	"random_boss_title": {
		"korean": "광신도 호위병"
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
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "자홍색 연기가 자욱한 붉은 제단 입구다."
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "cinder",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "cinder",
					"content": {
						"korean": "나는 이 제단의 단서를 조용히 쫓던 추적자 신더다."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "우리가 마신 연꽃 약의 정체에 대해 알고 싶다."
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…배 속의 불길한 통증이 자꾸 심해져."
					},
					"type": "speech",
					"speaker": "character_1"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"content": {
						"korean": "제단 기둥 주변에 붉은 알 껍질들이 널려 있다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"action": "enter",
					"speaker": "cinder",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"content": {
						"korean": "탐험대처럼 강인한 몸일수록 몸속에 심어진 알이 더 빨리 깨어난다."
					},
					"type": "speech",
					"speaker": "cinder"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "단련된 우리 몸이 오히려 알을 더 일찍 자라게 만든 거였나."
					}
				},
				{
					"content": {
						"korean": "…뼛속까지 오한이 들어."
					},
					"speaker": "character_2",
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter",
					"speaker": "cinder"
				},
				{
					"content": {
						"korean": "이 앞은 구원자의 둥지다. 난 다른 통로를 조사하겠다."
					},
					"speaker": "cinder",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "몸속의 알이 전부 깨어나기 전에 구원자를 찾아내야 한다."
					},
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"speaker": "cinder",
					"direction": "down",
					"action": "exit",
					"duration_ms": 400
				},
				{
					"content": {
						"korean": "…시간이 얼마 없어."
					},
					"speaker": "character_3",
					"emotion": "angry",
					"type": "speech"
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
					"speaker": "narrator",
					"content": {
						"korean": "둥지로 향하는 길목 바닥에 징그러운 이빨 자국이 남은 잔이 떨어져 있다."
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "누군가 기이한 이빨로 잔을 짓씹어 놓은 흔적이다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_4",
					"type": "speech",
					"content": {
						"korean": "…소름이 돋아."
					},
					"emotion": "sad"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 자들아, 둥지의 깨어남을 결코 막지 못한다!"
					}
				},
				{
					"content": {
						"korean": "…알이 깨어나기 전에 전열을 가다듬고 다시 돌파한다."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 둥지는… 이미 완성되어 가고 있다…"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "호위병이 쓰러진 제단 너머로 기생충 웅덩이의 기운이 뿜어져 나온다."
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이빨 자국 남은 잔을 뒤로하고 탐험대는 지옥 연꽃 웅덩이로 발걸음을 옮겼다."
					},
					"speaker": "narrator"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "붉은 제단 안쪽, 무거운 도끼를 든 {random_boss}의 거대한 기척이 정면을 막아선다."
					},
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "구원자님의 둥지를 감히 방해하지 마라!"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "동료들을 괴롭히는 기생충의 근원을 끊으러 왔다. 비켜라!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…더는 물러설 수 없어."
					},
					"speaker": "character_1"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"자홍색 빛이 자욱하게 감도는 붉은 제단에 도달했다.",
			"배 속에서 알이 꿈틀거리는 통증은 시간이 갈수록 거세진다.",
			"이곳에서 기생충 약에 숨겨진 진실을 밝혀내야 한다."
		]
	}
} as const;
