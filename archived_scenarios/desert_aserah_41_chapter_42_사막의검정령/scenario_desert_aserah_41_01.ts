export const scenario_desert_aserah_41_01 = {
	"scenario_id": "desert_aserah_41_01",
	"order": 1,
	"random_boss_title": {
		"korean": "사막 도적"
	},
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
	"prologue": {
		"korean": [
			"붉은 모래 언덕 위, 사막의 바람이 거세게 분다.",
			"길을 가로막은 기이한 보석 조각상.",
			"그것을 파괴한 순간, 불길한 저주가 아미르의 몸을 삼키기 시작했다.",
			"동료를 구하고 저주를 풀기 위해, 우리는 여신의 신전으로 향한다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "붉은 모래 언덕 한가운데, 기이한 보석 조각상이 길을 가로막고 있다."
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						2
					],
					"speaker": "amir",
					"type": "direction"
				},
				{
					"speaker": "amir",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 조각상... 표면에 오팔빛 유리 파편이 꽂혀 있어."
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "길을 통과하려면 조각상을 부수는 수밖에 없어."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…어쩐지 불길한 기운이 풍겨온다."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "amir",
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "amir",
					"content": {
						"korean": "크윽…! 다리에 감각이 없어! 보석처럼 단단하게 변하고 있어!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "조각상을 부순 것 때문에 저주에 걸린 거다!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "…이 추위, 다리에서부터 차갑게 굳어간다."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "amir",
					"emotion": "sad",
					"content": {
						"korean": "이 저주를 풀려면 여신의 신전으로 가는 수밖에 없어…!"
					}
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "amir",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"speaker": "amir",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "다리가 굳어가서 거칠게 움직이기 힘들어…!"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "서둘러 신전으로 가야 한다. 지체할 시간이 없어."
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "이 사막을 지나가려면 가진 것을 전부 내놓아라!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "길을 막지 마라! 우리는 동료를 구해야 한다!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "amir",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "저주가 점점 위로 올라오고 있어… 나를 두고 가도 된다."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "amir"
				},
				{
					"content": {
						"korean": "동료를 버릴 순 없다! 무조건 뚫고 나간다!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "크크, 그 다리로 어디까지 갈 수 있을지 볼까!"
					},
					"emotion": "happy"
				},
				{
					"speaker": "character_3",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…등골이 오싹해진다."
					}
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "모래밭에 무릎을 꿇어라!"
					},
					"emotion": "happy",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "…아직 포기할 수 없다. 다시 일어설 것이다."
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "여기를 지나쳐 신전으로 갈 수 있을 것 같으냐!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "{random_boss}를 쓰러뜨리고 신전으로 향하겠다!"
					},
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…주저할 시간은 없어."
					},
					"type": "speech",
					"speaker": "character_4"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "으윽… 신전에 가봤자 아무것도 바꾸지 못할 거다…"
					},
					"emotion": "sad"
				},
				{
					"spot": [
						4,
						3
					],
					"speaker": "amir",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "고마워… 버틸 힘이 조금 생겼어."
					},
					"speaker": "amir"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "이제 곧장 여신의 신전으로 향한다. 아미르를 반드시 구하겠어!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "동료의 목숨을 건 긴박한 여정이, 신전을 향해 본격적으로 시작된다."
					}
				}
			]
		}
	]
} as const;
