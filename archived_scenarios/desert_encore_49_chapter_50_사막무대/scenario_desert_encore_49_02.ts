export const scenario_desert_encore_49_02 = {
	"scenario_id": "desert_encore_49_02",
	"order": 2,
	"random_boss_title": {
		"korean": "모래 전갈 사냥꾼"
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
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "천막이 드문드문 늘어선 오아시스에 도달하자 상인 하나가 접근한다."
					}
				},
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter",
					"speaker": "amir"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "어서 오시오. 나는 이 오아시스의 상인 아미르라오. 대본에 이름이 적혀 곤란해진 길손들을 여럿 보았지."
					},
					"speaker": "amir",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 대본의 구속을 풀 방법을 찾으러 왔다."
					},
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "…숨이 턱턱 막히는 더위야."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "찢어진 천막 사이 모래밭에 모래빛 깃털 모자 조각이 떨어져 있다."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "깃털 모자 조각이다. 사막 상인들이 쓸 법한 물건은 아니군."
					},
					"type": "speech"
				},
				{
					"speaker": "amir",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "amir",
					"content": {
						"korean": "그 유랑 극단장 말이오? 화려한 입담과 달리 정작 검 한 번 제대로 휘둘러본 적 없는 위인이라는 소문이 있소."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "싸울 줄도 모르는 자가 어떻게 이런 대본으로 사람을 묶은 거지?"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_2",
					"content": {
						"korean": "…등골이 스산해진다."
					}
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "amir",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "amir",
					"content": {
						"korean": "대본을 파기하는 법은 붉은 모래 바위굴의 대장장이가 안다고 들었소. 하지만 극단장의 돈을 받은 포상금 사냥꾼이 길을 막고 있으니 조심하시오."
					}
				},
				{
					"content": {
						"korean": "바위굴로 건너가 대장장이를 만나야겠군."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"action": "exit",
					"direction": "down",
					"type": "direction",
					"speaker": "amir",
					"duration_ms": 400
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…바람에 실려 오는 쇠냄새가 심상치 않아."
					},
					"speaker": "character_3"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "오아시스 외곽으로 향하는 길목, 묵직한 무기를 든 자의 기척이 느껴진다."
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "극단장의 돈을 받고 길을 가로막는 자가 앞을 막아서고 있다."
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…모래바람 때문에 앞이 잘 안 보여."
					},
					"speaker": "character_4",
					"emotion": "sad"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "이 사막 무대에서 벗어날 수는 없다. 순순히 희생양이 되어라."
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…아직 쓰러질 수 없다. 다시 전열을 정비하자."
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "검 한 번 잡을 줄 모르는 그 극단장놈… 금화만 아니었어도 이런 일에 나서는 게 아니었는데…"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "극단장은 직접 싸우지 않고 돈으로 사냥꾼을 고용해 우리를 묶어두려 했던 거다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "길을 막던 자가 쓰러지며 붉은 모래 바위굴로 통하는 길이 열렸다. 대본을 파기할 대장장이를 찾아 바위굴로 향해야 한다."
					},
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "극단장에게 두둑한 금화를 받았다. 너희는 여기서 발이 묶여 연극의 소품이 되어야 한다."
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "남의 돈으로 길을 막는 고용살이에게 물러설 생각은 없다!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…정면으로 돌파할 수밖에 없어."
					},
					"speaker": "character_1"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"사막의 밤을 밝히는 진홍빛 천막, 그 뒤에 숨은 실타래.",
			"대본에 이름이 묶인 자는 사막의 무대를 벗어날 수 없다.",
			"구속을 풀 단서를 찾아, 바랜 천막 오아시스로 발걸음을 옮긴다."
		]
	}
} as const;
