export const scenario_hell_pyralis_33_02 = {
	"scenario_id": "hell_pyralis_33_02",
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
			"회상 벼랑 위로 자수정빛 연기가 피어오른다.",
			"지옥 재판소 서기 신더는 신수의 숨겨진 과거를 쥐고 있었다.",
			"깃털 연기 속에 비친 신수 피랄리스의 진짜 모습.",
			"억울하게 지옥으로 떨어진 영혼의 비극이 모습을 드러낸다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "cinder",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_1",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "cinder",
					"content": {
						"korean": "어서 오세요. 지옥 재판소 서기, 신더입니다."
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "벼랑 끝에서 뭘 기록하고 있는 거지?"
					}
				},
				{
					"speaker": "cinder",
					"emotion": "base",
					"content": {
						"korean": "신수 피랄리스가 가슴속에 묻어둔 억울한 기억을 담고 있었지요."
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "cinder",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"emotion": "base",
					"speaker": "cinder",
					"type": "speech",
					"content": {
						"korean": "이 자수정 깃털 연기 속을 똑똑히 보십시오."
					}
				},
				{
					"content": {
						"korean": "…연기 속에서 이상한 형상이 보여."
					},
					"emotion": "base",
					"speaker": "character_2",
					"type": "speech"
				},
				{
					"content": {
						"korean": "신더가 피운 타오르는 깃털 묵주에서 어린아이의 슬픈 울음소리가 흘러나온다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "피랄리스가 어린 주인을 품에 안고 지옥으로 떨어지고 있잖아!"
					}
				},
				{
					"speaker": "cinder",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "피랄리스는 아이를 구하기 위해 스스로 지옥 형벌을 뒤집어썼습니다."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "cinder"
				},
				{
					"type": "speech",
					"content": {
						"korean": "피랄리스 가슴의 혼석을 깨뜨려야 아이도 자유로워질 수 있겠어."
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "혼석을 깨려면 바위에 놓인 혼석 파괴 도구가 필요합니다."
					},
					"speaker": "cinder",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_3",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "뼛속까지 소름 돋는 무거운 도구네."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "파괴 도구를 확보했으니 머뭇거릴 시간이 없다."
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "하지만 길을 막는 무자비한 자를 넘어설 수 있을까요?"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "cinder"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "cinder",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"emotion": "base",
					"speaker": "cinder",
					"content": {
						"korean": "이 연기 너머에 전진을 막아서는 관문이 있습니다."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "숨이 막힐 듯한 압박감이 밀려와."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_4"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "누가 막아서든 단죄의 제단으로 가야 해."
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "cinder",
					"content": {
						"korean": "당신의 선택이 억울한 혼백을 건지길 바랍니다."
					},
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "회상 벼랑의 짙은 연기 속에서 정체 모를 그림자가 기척을 드러낸다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "과거의 환영을 보고도 헛된 구원을 꿈꾸는가!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "피랄리스를 고통에서 풀기 위해 혼석을 파괴하겠다!"
					}
				},
				{
					"content": {
						"korean": "무지한 자여, 네 행동이 어떤 비극을 부를지도 모르고!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "기억의 무게를 견디지 못하는 자는 단죄의 제단에 발을 들일 수 없다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "여기서 꺾일 수는 없어. 다시 일어서자."
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "…결국 혼석 파괴 도구를 쥐고 나아가는구나."
					},
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 도구로 피랄리스와 어린 영혼을 반드시 구하겠어."
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "{random_boss}가 쓰러지며 단죄의 제단으로 이어지는 벼랑길이 열렸다."
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "제단으로 이동하자. 진실에 한 걸음 더 가까워졌다."
					}
				}
			],
			"id": 15
		}
	]
} as const;
