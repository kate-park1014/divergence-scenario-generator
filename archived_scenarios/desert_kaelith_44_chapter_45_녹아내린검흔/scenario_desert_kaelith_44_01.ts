export const scenario_desert_kaelith_44_01 = {
	"scenario_id": "desert_kaelith_44_01",
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
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "발밑의 모래가 붉은 유리가 되어 끝없이 이글거린다."
					}
				},
				{
					"speaker": "amir",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"speaker": "amir",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "사막에 온 것을 환영한다. 하지만 이곳에서는 절대로 바닥에 액체를 흘려선 안 된다."
					}
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "발바닥이 타들어 가는 것 같아…"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "흘린 물 한 방울에 백열빛 화염이 치솟으며 바닥이 호박색 유리 칼날처럼 검게 굳어버렸어."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "봤지? 액체를 유출하는 순간 초고열 모래 폭풍이 일어나는 게 이 사막의 법칙이다."
					},
					"emotion": "angry",
					"speaker": "amir",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "열병에 신음하는 사막 사람들의 소리가 바람을 타고 들려온다."
					},
					"emotion": "base"
				},
				{
					"speaker": "amir",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "amir",
					"content": {
						"korean": "열병 환자들에게 줄 순동으로 만든 동제 물병이다. 잘 보관해라."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "바람마저 숨을 턱 막히게 하네."
					},
					"emotion": "sad",
					"speaker": "character_2",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "순동 물병이라면 사막의 무시무시한 고열을 견뎌낼 수 있겠어."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "amir",
					"type": "speech",
					"content": {
						"korean": "이 물병만이 우리를 사막 깊은 곳까지 무사히 안내할 거다."
					},
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "유리 모래언덕 너머에서 섬뜩한 마찰음이 크게 울려 퍼진다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 불길한 소리는 대체 뭐지…"
					},
					"emotion": "sad",
					"speaker": "character_3",
					"type": "speech"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "amir",
					"action": "enter"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "변종 괴수가 접근하고 있다. 유리 껍질을 두른 지독한 놈이다."
					},
					"speaker": "amir",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "사막의 열기를 흡수해 껍질을 굳히며 다가오는 괴수야."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "놈이 습격하기 전에 전투 준비를 마쳐야 한다."
					},
					"emotion": "angry",
					"speaker": "amir",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "괴수의 붉은 열기가 탐험대의 전진을 막아서며 숨통을 죄어온다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "괴수의 단단한 유리 껍질을 뚫지 못하면 우리는 여기서 전멸이야."
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"speaker": "amir",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "amir",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "동제 물병의 물을 쏟아부어 놈의 발을 묶는 수밖에 없다!"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "소름 끼치도록 뜨거운 열기야…"
					},
					"speaker": "character_4"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "금기를 어기더라도 당장의 공격을 막아내는 게 먼저다."
					},
					"speaker": "amir"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "액체가 바닥에 닿자마자 엄청난 파열음과 함께 폭풍이 휘몰아쳤다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "캬아악! 룰을 어긴 액체 유출이… 몸을 찢는다!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "초고열 모래 폭풍이 터지며 모래 바닥 전체가 호박색 유리 칼날처럼 검게 굳어버렸어."
					},
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "괴수는 쓰러졌지만, 호박색 유리 칼날로 변한 모래밭은 더욱 험난한 여정을 예고하고 있었다."
					}
				}
			],
			"id": 15,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "유리 껍질 마찰음을 흩뿌리며 붉은 사막의 괴수가 포효한다."
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "크아아! 타오르는 유리 모래 속으로 뼈까지 짓이겨주마!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "동제 물병의 물을 사막 모래 바닥과 놈에게 모조리 부어라!"
					}
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "유리 사막의 초고열을 견디지 못하고 스러질 벌레들 같으니!"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "이대로 사막의 열기 속에서 잿더미가 될 수는 없어."
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
			"금기 검술의 화염으로 모든 모래가 초고열 유리가 되어 이글거리는 붉은 사막.",
			"사막 열병이 퍼지는 가운데, 길잡이 아미르가 탐험대 앞에 나타난다.",
			"열기를 식히기 위한 동제 물병과 사막의 잔혹한 금기.",
			"타오르는 유리 언덕 너머에서 기괴한 마찰음이 다가오고 있었다."
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
