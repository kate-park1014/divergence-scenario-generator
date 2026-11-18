export const scenario_hell_pyralis_33_01 = {
	"scenario_id": "hell_pyralis_33_01",
	"order": 1,
	"random_boss_title": {
		"korean": "지옥 파수꾼"
	},
	"act": "intro",
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
					"type": "speech",
					"content": {
						"korean": "붉은 흙먼지 사이로 뜨거운 바람이 몰아친다."
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "cinder"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "저는 절벽 길잡이 신더예요. 갇힌 동료들을 구하러 가신다는 말을 듣고 길을 안내하러 왔어요."
					},
					"speaker": "cinder"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "열기가 심해지기 전에 지옥 입구로 통하는 절벽을 뚫어야 한다."
					}
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "…숨이 턱턱 막히네."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "발 밑 붉은 암석 사이에 무지갯빛 비늘 조각이 하나 떨어져 있다."
					}
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "cinder",
					"type": "direction"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "cinder",
					"content": {
						"korean": "이 앞은 다가오는 모든 것을 불태우는 사나운 짐승의 사냥터예요."
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "아까 발밑에서 본 무지갯빛 비늘 조각도 그 짐승의 흔적이겠군."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "cinder",
					"content": {
						"korean": "맞아요. 절벽을 맴돌며 눈에 띄는 것은 뭐든 망설임 없이 공격하는 놈이죠."
					}
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "…소름 돋는 열기다."
					},
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "cinder",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "여기서부터는 길이 매우 좁아집니다. 뒤를 조심하세요."
					},
					"speaker": "cinder",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "짐승의 사냥터라 해도 서둘러 지나쳐야 한다."
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "cinder",
					"action": "exit",
					"type": "direction",
					"duration_ms": 400,
					"direction": "down"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_3",
					"content": {
						"korean": "…발소리가 크게 울려."
					}
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
						"korean": "절벽 길목 깊은 곳에서 육중한 발소리가 울려 퍼진다."
					}
				},
				{
					"content": {
						"korean": "누군가 험악한 기척을 내며 앞을 막아서고 있어."
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…뼛속까지 뜨거워지는 기분이야."
					},
					"speaker": "character_4",
					"type": "speech"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 내 경고를 무시한 것을 후회하게 될 거다…"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "바닥에 떨어진 무지갯빛 비늘 조각을 주워 챙긴다. 사냥터 안으로 전진하자."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "짐승이 남긴 붉은 흔적이 용암 호수 바위지대로 이어지고 있어요!"
					},
					"speaker": "cinder",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "탐험대는 떨어진 비늘 조각을 든 채 용암 호수 바위지대를 향해 발걸음을 옮겼다."
					},
					"speaker": "narrator"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 자들, 짐승의 분노를 깨우기 전에 돌아가라!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "동료들을 저버릴 순 없다. 다시 돌파한다!"
					},
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "길목 한가운데, 붉은 절벽을 지키는 자가 무기를 다잡으며 나타난다."
					},
					"speaker": "narrator"
				},
				{
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"speaker": "cinder",
					"type": "direction",
					"action": "enter",
					"direction": "down"
				},
				{
					"content": {
						"korean": "물러나라! 사나운 짐승을 자극하면 우리 모두 위험해진다!"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "동료들을 구하려면 이 사냥터를 지나야 한다. 비켜라!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…기운이 심상치 않아."
					},
					"speaker": "character_1",
					"emotion": "sad",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"지옥 입구가 막히며 탐험대의 동료들이 거대한 열기 속에 갇혔다.",
			"그들을 구하기 위한 유일한 길은 위험천만한 붉은 절벽 입구뿐.",
			"붉은 절벽 너머에서 피어오르는 열기와 거친 기척이 탐험대를 압박한다."
		]
	}
} as const;
