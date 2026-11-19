export const scenario_hell_philomel_39_04 = {
	"scenario_id": "hell_philomel_39_04",
	"order": 4,
	"random_boss_title": {
		"korean": "지옥 지휘관"
	},
	"act": "rising",
	"theme": "hell",
	"actors": {
		"drox": {
			"id": "mon_2fc30621-a15f-4371-9e37-295cdcb5675d",
			"name": {
				"korean": "드록스",
				"english": "Drox",
				"japanese": "ドロックス",
				"chinese": "德罗克斯",
				"french": "Drox",
				"spanish": "Drox",
				"vietnamese": "Đrốc",
				"thai": "ดรอกซ์",
				"hindi": "ड्रॉक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/509c0376-2230-4669-d022-7e5336293200/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/916b4cfa-f792-4f4a-5346-681095481e00/public"
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
					"type": "speech",
					"content": {
						"korean": "빛조차 들지 않는 흑요석 벽이 미로처럼 얽혀 있다."
					},
					"speaker": "narrator"
				},
				{
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"speaker": "drox",
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "drox",
					"content": {
						"korean": "멈춰라! 나는 이 흑요석 미로의 길을 잘 아는 길잡이 드록스다."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "암석 제단에서 받은 별빛 수정을 꽂으려면 집행자를 찾아야 한다."
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "집행자를 찾는다면 내가 미로 안쪽으로 길을 안내하겠다."
					},
					"speaker": "drox",
					"type": "speech"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "…벽너머에서 뿜어지는 열기가 뼛속까지 시려."
					},
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "흑요석 벽면에 붉은 화염 자국이 길게 파여 있다."
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "drox",
					"action": "enter"
				},
				{
					"emotion": "base",
					"speaker": "drox",
					"content": {
						"korean": "벽에 남은 붉은 화염 자국을 봐라. 집행자가 지나간 자국이다."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "화염 자국이 깊어질수록 집행자의 구역이 가까워졌다는 뜻이군."
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 자국을 따라 계속 직진하면 집행자의 구역에 도달할 거다."
					},
					"speaker": "drox"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_2",
					"content": {
						"korean": "…숨이 턱턱 막히는 기분이야."
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "drox"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이 앞부터는 집행자의 본 구역이다. 더는 갈 수 없다."
					},
					"speaker": "drox"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "길을 알려줘서 고맙다. 나머지는 우리가 직접 확인하지."
					},
					"emotion": "base"
				},
				{
					"direction": "down",
					"speaker": "drox",
					"action": "exit",
					"type": "direction",
					"duration_ms": 400
				},
				{
					"type": "speech",
					"speaker": "character_3",
					"content": {
						"korean": "…조용해서 오히려 더 두려워."
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "미로 바닥에 깨진 갑옷 조각들이 부서져 흩어져 있다."
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "갑옷 겉면에는 공격당한 흔적이 없는데 안쪽 조각이 깨져 있군."
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "…어디선가 묵직한 발소리가 울려."
					},
					"type": "speech",
					"speaker": "character_4",
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "미로의 중앙 광장에 위협적인 기척이 길을 가로막는다."
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "더는 나아가지 마라! {random_boss}의 충복으로서 필로멜 님의 안식을 방해하게 두지 않겠다!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "우리는 지옥불을 봉인하러 왔다. 길을 비켜라!"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "…적의 기세가 엄청나."
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "약한 자들아, {random_boss}의 무력 앞에 굴복하라!"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…여기서 물러설 수 없다. 다시 전열을 다듬자."
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 필로멜 님을… 방해하게 놔두지 않겠다 했는데…"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "싸워보니 집행자의 갑옷은 외부 공격이 아니라 안쪽에서 터지는 불길 때문에 깨지고 있어."
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "{random_boss}의 저지를 뚫었을지라도… 지옥 심연의 심장부에서는 감당하지 못하리라…"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "붉은 화염 자국은 미로를 벗어나 지옥 심연의 심장부로 이어지고 있었다."
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"빛을 흡수하는 흑요석 미로 속, 지옥의 열기가 벽 너머에서 뿜어져 나온다.",
			"암석 제단에서 얻은 별빛 수정을 들고 탐험대는 미로 깊은 곳으로 향한다.",
			"그러나 집행자의 구역으로 가는 길목을 강력한 충복이 가로막는다."
		]
	}
} as const;
