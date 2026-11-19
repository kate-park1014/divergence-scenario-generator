export const scenario_hell_philomel_39_02 = {
	"scenario_id": "hell_philomel_39_02",
	"order": 2,
	"random_boss_title": {
		"korean": "화염 약탈자"
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
			"발밑으로 뜨거운 용암이 흘러내리는 용암 골짜기.",
			"번지는 불길의 근원을 찾으려 탐험대는 위험 속으로 들어선다.",
			"뜨거운 열기 한가운데에서 뜻밖의 에메랄드빛 자국이 기다리고 있다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "발밑으로 끓어오르는 용암이 흘러내렸다. 사방이 뜨거운 열기로 가득했다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "cinder",
					"spot": [
						2,
						2
					],
					"duration_ms": 500
				},
				{
					"speaker": "cinder",
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "이런 뜨거운 골짜기까지 찾아오다니! 난 보물을 쫓아 여기까지 들어온 상인 신더라고 하오."
					}
				},
				{
					"content": {
						"korean": "우리는 불길의 근원을 추적하고 있다. 혹시 이상한 흔적을 보았나?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "character_1",
					"content": {
						"korean": "…가뜩이나 뜨거운데 숨이 턱턱 막히네."
					},
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "붉은 용암이 넘치는 바위 벽면에 어두운 빛깔의 흔적이 남아 있다."
					}
				},
				{
					"duration_ms": 500,
					"speaker": "cinder",
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "happy",
					"speaker": "cinder",
					"type": "speech",
					"content": {
						"korean": "저길 좀 보시오! 집행자가 흘리고 간 에메랄드빛 액체 자국이 분명하오."
					}
				},
				{
					"content": {
						"korean": "틀림없이 비싼 보석이 파묻혀 있을 거요! 어서 벽을 파보시오."
					},
					"speaker": "cinder",
					"type": "speech",
					"emotion": "happy"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "에메랄드빛 자국에 손을 대자 차가운 정령의 기운이 서늘하게 뿜어져 나온다."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "…이 열기 속에서 서리가 내릴 것 같아."
					},
					"type": "speech",
					"speaker": "character_2",
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "cinder",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "cinder",
					"content": {
						"korean": "보석이 아니라 정령의 기운이라니! 으, 돈이 안 되는 일엔 빠지겠소."
					}
				},
				{
					"duration_ms": 400,
					"action": "exit",
					"direction": "down",
					"type": "direction",
					"speaker": "cinder"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "집행자가 지나간 자리에 왜 이런 서늘한 기운이 남아있는 걸까."
					}
				},
				{
					"emotion": "sad",
					"speaker": "character_3",
					"type": "speech",
					"content": {
						"korean": "…위쪽에서 뜨거운 기척이 다가온다."
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"content": {
						"korean": "골짜기 깊은 곳에서 거친 화염 소리와 함께 거대한 무기가 부딪치는 소리가 울린다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "누군가 용암 너머에서 강렬한 적의를 내뿜으며 가로막고 있다."
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_4",
					"content": {
						"korean": "…바람마저 불덩이처럼 뜨거워."
					}
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "지옥불의 심판을 받아라! 감히 더 깊은 곳을 엿보지 마라!"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…여기서 무너질 순 없다. 다시 전열을 가다듬자."
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 짓밟히고 싶지 않다면… 당장 골짜기 밖으로 돌아가라…"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "차가운 정령의 흔적은 불탄 암석 제단 쪽으로 이어져 있다. 추적하자."
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "적이 쓰러지자 에메랄드빛 차가운 기운이 불탄 암석 제단 방면으로 강하게 흘러갔다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "{random_boss}의 구역에 들어온 침입자냐! 집행자 님을 방해하는 자는 여기서 처단하겠다!"
					}
				},
				{
					"content": {
						"korean": "우리는 번지는 불길을 막으러 왔다. 길을 비켜라!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…무기를 잡은 손이 타들어 갈 것 같아."
					},
					"speaker": "character_1",
					"emotion": "base"
				}
			]
		}
	]
} as const;
