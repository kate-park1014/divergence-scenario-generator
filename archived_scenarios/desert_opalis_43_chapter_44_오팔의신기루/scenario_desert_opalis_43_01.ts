export const scenario_desert_opalis_43_01 = {
	"scenario_id": "desert_opalis_43_01",
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
						"korean": "거대한 오아시스 중앙에 기이한 은빛 모래시계가 세워져 있다."
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
						"korean": "사막 한가운데 이런 오아시스가 존재하다니..."
					}
				},
				{
					"type": "direction",
					"speaker": "amir",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "오아시스에 온 것을 환영하네. 난 사막 학자 아미르라고 하네."
					},
					"type": "speech",
					"speaker": "amir",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "이 모래시계는 대체 무엇인가요?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "amir",
					"emotion": "base",
					"content": {
						"korean": "받침대를 자세히 보게. 백 년 전 대장장이의 희미한 각인이 남아 있지."
					}
				},
				{
					"emotion": "base",
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "...바람 끝에서 기묘한 서늘함이 느껴진다."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						4
					],
					"action": "enter",
					"speaker": "amir",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "오아시스 성녀 오팔리스의 생명수가 흐르게 하려면 이 모래시계에 모래를 채워야 하네."
					},
					"speaker": "amir",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "모래를 채우면 메마른 오아시스가 살아난다는 뜻이군요."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그렇다네. 저 앞의 사막 길잡이가 그 과정을 안내해 줄 걸세."
					},
					"emotion": "base",
					"speaker": "amir"
				},
				{
					"type": "speech",
					"content": {
						"korean": "...은빛 모래가 보석처럼 은은하게 빛나고 있어."
					},
					"speaker": "character_2",
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "amir"
				},
				{
					"content": {
						"korean": "길잡이에게 받은 특수한 모래를 은빛 모래시계에 부어 넣게나."
					},
					"type": "speech",
					"speaker": "amir",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "이 모래로 정말 성녀를 구하는 첫걸음을 뗄 수 있는 건가요?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "의심하지 말게. 오팔리스 성녀의 구원은 이 모래시계에 달려 있으니."
					},
					"emotion": "base",
					"speaker": "amir"
				},
				{
					"content": {
						"korean": "...발밑의 모래에서 미세한 진동이 울려온다."
					},
					"emotion": "base",
					"speaker": "character_3",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "amir",
					"duration_ms": 500,
					"spot": [
						3,
						3
					]
				},
				{
					"emotion": "base",
					"speaker": "amir",
					"content": {
						"korean": "이 앞에 모래시계를 수호하는 길잡이가 기다리고 있네."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "길잡이를 거쳐 제단에 모래를 채워 넣겠습니다."
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "amir",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "좋은 결의네. 어서 나아가게나. 난 뒤에서 기록을 정리하겠네."
					}
				},
				{
					"type": "speech",
					"speaker": "character_4",
					"emotion": "base",
					"content": {
						"korean": "...왠지 모르게 뼛속까지 소름이 돋는다."
					}
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "모래 속에서 오팔 모래의 풋소리가 울려 퍼지는구나..."
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "happy",
					"content": {
						"korean": "모래시계 속으로 은빛 모래가 모여들고 있어!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "모래시계가 회전하며 신비로운 오팔빛 음향이 오아시스를 감쌌다."
					}
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "아직 모래는 부족하다. 굴레는 멈추지 않는다."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "...여기서 쓰러질 수는 없어. 다시 일어서야 해."
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "은빛 모래시계에 모래를 채우러 왔는가."
					}
				},
				{
					"content": {
						"korean": "그그렇다. 오아시스의 생명수를 돌려놓겠다."
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "{random_boss}의 시험을 견뎌내라. 모래가 쌓일수록 굴레는 시작될지니."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"끝없는 모래 폭풍을 뚫고 도달한 오아시스 매몰 지대.",
			"몽환적인 오팔빛 안개 속에서 사막 학자 아미르가 탐험대를 맞이한다.",
			"오아시스를 살리고 성녀 오팔리스를 구하기 위한 여정이 시작된다."
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
