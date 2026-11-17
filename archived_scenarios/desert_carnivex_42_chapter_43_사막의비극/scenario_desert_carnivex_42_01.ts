export const scenario_desert_carnivex_42_01 = {
	"scenario_id": "desert_carnivex_42_01",
	"order": 1,
	"act": "intro",
	"theme": "desert",
	"actors": {
		"amir": {
			"id": "mon_0096d602-52ab-4a9c-9cc8-4ff18ed3b655",
			"name": {
				"korean": "아미르",
				"english": "Amir",
				"japanese": "アミール",
				"chinese": "阿米尔",
				"french": "Amir",
				"spanish": "Amir",
				"vietnamese": "Amir",
				"thai": "อาเมียร์",
				"hindi": "अमीर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8cd60fb0-3699-44c4-6425-a3e97eec1800/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/b644dc95-9c27-442e-6dc6-73e5550a0200/public"
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
						"korean": "사막의 열기 속, 오아시스 입구 석판에 호박색 글씨가 새겨져 있다."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "석판에 글이 새겨져 있어. '마신 즙의 양만큼 뼈마디가 모래로 바뀌리라'…"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "amir",
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "amir",
					"emotion": "angry",
					"content": {
						"korean": "글씨 따위 상관없어. 당장 물을 찾지 못하면 말라죽을 판이야!"
					}
				},
				{
					"content": {
						"korean": "…입술이 바짝 마르는 것 같아."
					},
					"speaker": "character_1",
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "오아시스 앞에 안개 같은 형상이 서 있어."
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "갈증에 지친 방랑자들이여. 이 호박색 모래 물병을 받아라."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "모래 물병 안에서 호박색 즙이 일렁이고 있어."
					}
				},
				{
					"content": {
						"korean": "뼛속까지 타들어 가는 것 같아… 더는 못 버티겠어."
					},
					"type": "speech",
					"speaker": "character_2",
					"emotion": "sad"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "amir",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"speaker": "amir",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "더 이상 못 참겠어! 꿀꺽…!"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "물병을 빼앗아 호박색 즙을 삼켜버렸어!"
					}
				},
				{
					"speaker": "amir",
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "달콤해… 갈증이 싹 사라지는 것 같아!"
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "amir"
				},
				{
					"type": "speech",
					"speaker": "amir",
					"emotion": "angry",
					"content": {
						"korean": "크아악! 뼛속이… 뼈마디가 녹아내려!"
					}
				},
				{
					"type": "speech",
					"speaker": "character_3",
					"emotion": "sad",
					"content": {
						"korean": "이 소름 끼치는 비명은 대체…!"
					}
				},
				{
					"content": {
						"korean": "호박색 즙이 뼛속 골수를 녹이는 독이었어!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "당장 길잡이를 쓰러뜨리고 해독 방법을 알아내야 해!"
					}
				}
			]
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "쓰러뜨려도 소용없다… 이미 골수는 녹아내리고 있으니."
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "뼈마디가 녹아내리고 있어. 남아있는 시간은 4시간뿐이야!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "사막의 환영은 사라졌지만, 시한부 독과의 사투가 시작되었다."
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "어리석은 방랑자들이여, 모래 속 백골이 되어라."
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "여기서 쓰러질 순 없어… 동료를 구해야 해!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "달콤한 안식을 얻었는가. 골수가 녹아 백골이 되는 구원이다."
					}
				},
				{
					"content": {
						"korean": "즙에 무슨 짓을 한 거냐! 당장 해독 방법을 말해!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "뼈를 바치는 파멸 외에 구원은 없다."
					}
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"태양이 뼈마저 태워버리는 메마른 황혼의 사막.",
			"타는 듯한 갈증 속에서 마침내 오아시스를 발견했다.",
			"하지만 그곳에서 건네받은 호박색 즙은, 구원이 아닌 잔혹한 비극의 시작이었다."
		],
		"english": [],
		"japanese": [],
		"chinese": [],
		"french": [],
		"spanish": [],
		"vietnamese": [],
		"thai": [],
		"hindi": []
	}
} as const;
