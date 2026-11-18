export const scenario_desert_carnivex_42_03 = {
	"scenario_id": "desert_carnivex_42_03",
	"order": 3,
	"random_boss_title": {
		"korean": "무기상인"
	},
	"act": "rising",
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
						"korean": "메마른 바위 사이로 오아시스의 흔적이 보인다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "갇힌 동료들의 위치를 파악하려면 이 오아시스를 지나야 해."
					}
				},
				{
					"emotion": "sad",
					"speaker": "character_1",
					"content": {
						"korean": "…바람 소리가 꼭 비명처럼 들려."
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "amir",
					"type": "direction"
				},
				{
					"content": {
						"korean": "난 이 사막을 조사하던 사냥꾼 아미르다. 더 가면 죽는다!"
					},
					"type": "speech",
					"speaker": "amir",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "길잡이의 물을 마신 자들은 온몸이 말라붙어 뼈만 남은 채 죽었다."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "amir"
				},
				{
					"content": {
						"korean": "골수를 노리는 자의 굶주림을 멈추려면 당장 물병을 쏟아야 해!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "amir"
				},
				{
					"content": {
						"korean": "길잡이가 건넨 물병이 사람들을 죽이는 독이었다니."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"content": {
						"korean": "메마른 바위 표면에 끈적한 호박색 진액 자국이 줄지어 있다."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "바위에 묻은 이 호박색 진액, 물병의 물과 성분이 같아 보여."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…손끝에 소름이 돋는다."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_2"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "오아시스로 들어가는 바위 틈이 점점 좁아진다."
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "진액 자국이 바위 틈 안쪽 깊은 곳으로 이어지고 있어."
					}
				},
				{
					"speaker": "character_3",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…불길한 기운이 몸을 감싸고 있어."
					}
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "바위 틈을 막아선 무기상인이 칼을 꺼내 든다."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "이 오아시스는 내 차지다! 물을 노리는 놈들은 살려둘 수 없다!"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "우린 오아시스를 독점하려는 자와 싸워서 길을 뚫어야 한다!"
					}
				},
				{
					"speaker": "character_4",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…긴장을 늦출 수 없어."
					}
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "크하하! 메마른 바위 아래에 뼈나 묻어라!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…여기서 물러설 수 없다. 다시 도전하자."
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "윽… 오아시스에 들어가 봤자… 뼈만 남게 될 거다…"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "장애물을 치웠으니 이제 동료들이 갇힌 곳을 찾아내야 해."
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "탐험대는 쓰러진 무기상인을 뒤로하고 깊은 사막 속으로 향했다."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"오아시스는 생명이 아닌 죽음의 덫이었다.",
			"길잡이가 건넨 달콤한 물은 사람들의 골수를 말려버렸다.",
			"메마른 바위 사이로 비극의 흔적들이 모습을 드러낸다."
		]
	}
} as const;
