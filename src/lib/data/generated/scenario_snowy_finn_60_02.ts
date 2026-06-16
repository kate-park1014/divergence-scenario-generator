export const scenario_snowy_finn_60_02 = {
	"scenario_id": "snowy_finn_60_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"eira": {
			"id": "mon_0c37c014-b5ca-4f2f-ad03-5d393e5b2eb1",
			"name": {
				"korean": "에이라",
				"english": "Eira",
				"japanese": "エイラ",
				"chinese": "艾拉",
				"french": "Eira",
				"spanish": "Eira",
				"vietnamese": "Eira",
				"thai": "ไอรา",
				"hindi": "ऐरा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8e2970b7-bcb1-4b1c-6bf0-93106b373500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0ca1ec09-a624-450f-054a-b98de58bdb00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"왕의 골방, 아무도 들이지 않던 그곳.",
			"벽에 걸린 헤진 지도, 남쪽으로 향하는 길이 그려져 있다.",
			"에이라는 잊힌 역사를 읽어내려 애쓰는데…",
			"그 길은, 어째서인지 도중에 끊겨 있었다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "왕의 골방. 다 헤진 지도가 벽에 걸려있다."
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "여기가… 왕의 숨겨진 이야기?"
					}
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						2
					],
					"type": "direction",
					"speaker": "eira"
				},
				{
					"speaker": "eira",
					"emotion": "base",
					"content": {
						"korean": "이 룬 문자… 심상치 않군요. 무언가를 간절히 바라는…."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "무엇을 바랐다는 거지?"
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
					"speaker": "eira",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "여기… 남쪽으로 향하는 길이 그려져 있습니다."
					},
					"speaker": "eira",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "따뜻한 남쪽 나라? 왕이 거길 가려 했었나?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "하지만… 이 지도는… 도중에 끊겨있어요."
					},
					"emotion": "sad",
					"speaker": "eira"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						2
					],
					"type": "direction",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "그리고… 이 끊긴 길의 끝에…"
					},
					"type": "speech",
					"speaker": "eira",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "아주 작은 발자국이… 멈춰 서 있습니다."
					}
				},
				{
					"content": {
						"korean": "멈춰 서 있다고? 왜?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "eira",
					"content": {
						"korean": "여기서… 길을 잃은 거예요. 왕은…"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "random_boss",
					"spot": [
						5,
						2
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "크르르… 감히… 이 방의 비밀을 들추려 하다니."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "네가 누군데 우리를 막는 거야?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "나는… 잊힌 것을 지키는 자."
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "eira",
					"content": {
						"korean": "멈춰 선 발자국… 왕의… 쓸쓸함…"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그 입 다물어라!"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "길을 막는다면, 쓰러뜨릴 수밖에!"
					},
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "eira",
					"spot": [
						2,
						2
					],
					"type": "direction"
				},
				{
					"speaker": "eira",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "왕은… 그저…"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "여기까지 왔다니… 어리석은 자들!"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "진실 따위! 잊히는 게 당연하다!"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "네가 뭘 안다고 지껄여!"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "…'그리움'… '가족'…"
					}
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "감히!"
					}
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 결국… 들켰나…"
					},
					"type": "speech"
				},
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "eira",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "왕은… 추위와 외로움을 피해… 가족이 있는 남쪽으로 가려 했던 거예요."
					},
					"type": "speech",
					"speaker": "eira",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "하지만… 길을 잃고… 멈춰 선 거구나."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "끊긴 길. 멈춰 선 발자국. 왕의 진짜 이야기가 고요히 울려 퍼졌다."
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "어리석은 것들… 왕의 슬픔을… 너희가 알 리 없다."
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…젠장! 여기서 멈출 순 없어!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "eira",
					"spot": [
						4,
						2
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "길은… 다시… 이어질 겁니다. 반드시."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "eira"
				}
			]
		}
	]
} as const;
