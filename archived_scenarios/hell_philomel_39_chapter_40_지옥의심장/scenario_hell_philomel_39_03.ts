export const scenario_hell_philomel_39_03 = {
	"scenario_id": "hell_philomel_39_03",
	"order": 3,
	"random_boss_title": {
		"korean": "용암 파수꾼"
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
					"emotion": "base",
					"content": {
						"korean": "용암 동굴 입구. 뿜어져 나오는 뜨거운 열기가 숨을 막히게 한다."
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "cinder",
					"type": "direction"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "난 용암 동굴의 대장장이 신더다. 열기가 이상하게 치솟아 원인을 조사하러 왔다."
					},
					"speaker": "cinder",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "동굴 깊은 곳에 열기의 원인이 있을 거다. 함께 조사하자."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…얼굴이 익어버릴 것 같아."
					},
					"speaker": "character_1",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "붉게 타오르는 용암천을 따라 암석지대가 이어진다."
					},
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
						"korean": "용암이 원래 수로를 벗어나 동굴 전체를 삼키고 있군."
					},
					"emotion": "base",
					"speaker": "cinder",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 불길을 막지 못하면 마법 대륙 입구까지 위험해진다."
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…발밑이 부서질 것 같아."
					},
					"speaker": "character_2"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "동굴 바닥의 굳은 용암 사이로 묵직한 조각이 파묻혀 있다."
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "cinder",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "cinder",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "바닥에 깨진 흑요석 투구 조각이 떨어져 있군. 단단한 흑요석이 부서질 정도의 충격이다."
					}
				},
				{
					"content": {
						"korean": "강한 충격을 주고 간 존재가 어디로 갔는지 추적해야 한다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "character_3",
					"content": {
						"korean": "…열기에 목이 바싹 타들어간다."
					},
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "동굴 깊은 곳에서 거대한 불꽃의 일렁임과 묵직한 기척이 느껴진다."
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "길을 막아서는 강력한 존재가 바로 앞에 있다."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "character_4",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…공기가 뜨거워서 아른거려."
					}
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…지옥의 불길 앞에서도 꺾이지 않는 자들이라니."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "왜 우리를 굳이 막아선 거지?"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "집행자 님이 밀쳐낸 사람들이 무사히 도망쳤다. 난 그들이 안전해질 때까지 길을 막았을 뿐이다."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "집행자가 사람들을 밀쳐낸 게 공격이 아니라 도망치게 한 거였단 말인가?"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "상대를 물리치자, 동굴 건너편 검은 제단으로 향하는 통로가 드러났다."
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "cinder",
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"content": {
						"korean": "검은 제단 쪽에서 더 강력한 불꽃 반응이 느껴진다. 그리로 가보자."
					},
					"speaker": "cinder",
					"type": "speech"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "용암 길목 한가운데, 불길을 두른 자가 일어서며 무기를 든다."
					},
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "더 이상 깊이 들어가지 마라! 더 가면 모두 불길에 태워질 뿐이다!"
					}
				},
				{
					"content": {
						"korean": "우리는 불길의 원인을 찾아 멈춰야 한다. 비켜라!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "…온몸에 땀이 솟구친다."
					},
					"emotion": "sad"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "불길 속으로 들어올 자격이 없다. 당장 돌아가라!"
					}
				},
				{
					"content": {
						"korean": "…열기에 밀렸지만 이대로 포기할 순 없다."
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"용암 동굴 깊은 곳, 타오르는 열기가 벽을 녹이고 있다.",
			"치솟는 불길의 원인을 찾기 위해 탐험대는 지하 깊숙이 향한다.",
			"그 끝에서 굳게 닫힌 용암의 경계가 길을 막아선다."
		]
	}
} as const;
