export const scenario_desert_carnivex_42_01 = {
	"scenario_id": "desert_carnivex_42_01",
	"order": 1,
	"random_boss_title": {
		"korean": "약초꾼"
	},
	"act": "intro",
	"theme": "desert",
	"actors": {
		"khan": {
			"id": "mon_77d18883-7711-4fc4-b04e-7b29652e0ab2",
			"name": {
				"korean": "칸",
				"english": "Khan",
				"japanese": "カーン",
				"chinese": "可汗",
				"french": "Khan",
				"spanish": "Khan",
				"vietnamese": "Khan",
				"thai": "ข่าน",
				"hindi": "खान"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d2797cf2-a388-4974-97e4-54e6af8a0000/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9c40ef7d-3388-44dd-29b3-9ba716fe8b00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"끝없이 펼쳐진 메마른 사막, 뜨거운 바람이 피부를 찌른다.",
			"오아시스를 찾지 못하면 사막 한가운데서 모두 목말라 죽는다.",
			"그 사막 입구에서, 한 병의 호박색 물병이 탐험대의 손에 들어온다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "뜨거운 바람의 사막 입구. 메마른 모래먼지가 날린다."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "오아시스 지도를 찾지 못하면 우리 모두 사막에서 말라 죽는다."
					}
				},
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "khan",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "khan",
					"emotion": "base",
					"content": {
						"korean": "나는 용병 칸이다. 모래 길잡이가 두고 간 호박색 물병을 전하러 왔다."
					}
				},
				{
					"speaker": "character_1",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…바람조차 메말라 있네."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "길잡이가 남긴 물병이라면 당장 목을 축일 수 있겠어."
					},
					"emotion": "base",
					"speaker": "character_any"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "사막 열기가 심해지며 탐험대의 목마름이 극에 달한다."
					}
				},
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "khan",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "base",
					"speaker": "khan",
					"type": "speech",
					"content": {
						"korean": "그 호박색 물병 안에는 찰랑거리는 노란 물이 들어 있소."
					}
				},
				{
					"content": {
						"korean": "타는 듯한 목마름을 참을 수 없다. 이 물이라도 마셔야겠다."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "…입술이 바싹 갈라진다."
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"content": {
						"korean": "물병을 마신 직후, 짙은 약초 향과 함께 고함 소리가 들려온다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "khan",
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
						"korean": "어느 약초꾼이 무기를 들고 이쪽으로 덤벼들고 있소!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "khan"
				},
				{
					"duration_ms": 400,
					"speaker": "khan",
					"direction": "down",
					"action": "exit",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "물병을 빼앗으려는 자가 다가오는 모양이다. 대비하자."
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "…가슴이 쿵쾅거려."
					},
					"type": "speech",
					"speaker": "character_3",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "길목을 막아선 자가 물병 냄새를 맡고 거세게 공격해 온다."
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "더 이상 물러설 곳은 없다. 무기를 잡아야 한다."
					}
				},
				{
					"content": {
						"korean": "…열기가 숨을 턱 막히게 해."
					},
					"type": "speech",
					"speaker": "character_4",
					"emotion": "sad"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "멍청한 자들… 그 물이 무엇을 부르는지도 모르고…"
					},
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "약초꾼을 제압했다. 그런데 모래 위에 무언가 떨어져 있다."
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "녹슨 청동 껍질 조각… 대체 무슨 물건이지?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "모래밭에 남겨진 녹슨 청동 껍질 조각이 기묘한 빛을 내뿜었다."
					}
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "위험한 물을 마시게 둘 순 없다! 돌아가라!"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…쓰러질 순 없다. 다시 맞서겠다."
					}
				}
			],
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "분노한 기색의 약초꾼이 거친 숨을 내쉬며 길을 막아선다."
					}
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "그 호박색 물병의 노란 물을 당장 내놓아라! 마시면 죽는다!"
					}
				},
				{
					"content": {
						"korean": "동료들을 살리려면 이 물병이 필요하다. 덤벼라!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "…상대가 너무 험악해."
					},
					"type": "speech",
					"speaker": "character_1",
					"emotion": "sad"
				}
			]
		}
	]
} as const;
