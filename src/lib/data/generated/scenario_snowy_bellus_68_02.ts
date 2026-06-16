export const scenario_snowy_bellus_68_02 = {
	"scenario_id": "snowy_bellus_68_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"glace": {
			"id": "mon_d0b542b9-aea9-405d-8ee2-4936516a041a",
			"name": {
				"korean": "글라세",
				"english": "Glace",
				"japanese": "グラース",
				"chinese": "格拉斯",
				"french": "Glace",
				"spanish": "Glace",
				"vietnamese": "Gla-xê",
				"thai": "กลาซ",
				"hindi": "ग्लेस"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/81de374f-3422-482e-01ee-dc973da70500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/ef269701-044a-42c5-f7b7-760e9c92a500/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"열차 깊숙한 곳. 시간의 흔적이 멈춘 곳.",
			"그곳에서 빛바랜 사진 한 장이 발견되었다.",
			"환히 웃는 한 남자. 모든 것을 빼앗긴 지금의 그와 같은 얼굴이었다.",
			"그러나 그 미소는, 시간을 흘려보내던 자의 것이었다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "시간이 멈춘 듯한 공간. 낡은 검표기와 빛바랜 흔적들이 가득했다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"action": "enter",
					"speaker": "glace",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…여기가 벨루스의 집찰실."
					},
					"speaker": "glace"
				},
				{
					"content": {
						"korean": "그의 과거를 알 수 있을까."
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "모든 것은, 결국 흔적을 남기지."
					},
					"speaker": "glace",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "glace",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "glace",
					"content": {
						"korean": "이것은… 빛바랜 사진."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "누군데? 저 환하게 웃는 사람."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "glace",
					"content": {
						"korean": "집찰관 벨루스. 지금의 그와 같은 얼굴이야."
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "전혀 달라 보여."
					}
				},
				{
					"speaker": "glace",
					"content": {
						"korean": "그땐 시간을 흘려보내며 웃었구나."
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "glace"
				},
				{
					"speaker": "glace",
					"content": {
						"korean": "손이 같아. 시간을 배달하던 손."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그때는 다정했는데… 왜 변했을까?"
					}
				},
				{
					"speaker": "glace",
					"content": {
						"korean": "아름다운 것을 영원히 보존하려던 사랑의 잔재."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "glace",
					"content": {
						"korean": "뒤틀렸지만, 그 뿌리는 같아 보여."
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "glace",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "시간을 흐르게 하던 자가… 시간을 멈추려 한다."
					},
					"speaker": "glace"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "무슨 일이 있었던 걸까."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "glace",
					"content": {
						"korean": "공허는… 때로 모든 것을 뒤바꾸지."
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그러나 흔적은 지워지지 않아."
					},
					"speaker": "glace"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "집찰실 가장 깊은 곳. 정체 모를 그림자가 길게 드리워져 있었다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "네가… 시간을 멈추려 하는 자의 하수인인가."
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "모든 것은 영원히 보존될 가치가 있다."
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "시간은… 흐르지 않아야 해."
					},
					"speaker": "random_boss"
				},
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction",
					"action": "enter",
					"speaker": "glace"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "흐르지 않는 시간은, 죽은 시간일 뿐."
					},
					"speaker": "glace"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "시간은 멈출 것이다. 모두 영원히."
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…아직 끝나지 않았어."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "무의미한 저항이군."
					},
					"speaker": "random_boss"
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이건… 영원한 사랑…."
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "뒤틀린 집착일 뿐이야."
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "glace"
				},
				{
					"speaker": "glace",
					"content": {
						"korean": "사랑은, 시간을 가두지 않아."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "시간의 흐름을 거스르려는 시도는 실패했다."
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그러나 벨루스의 잊힌 과거는, 아직 더 깊이 숨겨져 있었다."
					},
					"speaker": "narrator"
				}
			]
		}
	]
} as const;
