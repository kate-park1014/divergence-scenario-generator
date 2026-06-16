export const scenario_snowy_finn_60_01 = {
	"scenario_id": "snowy_finn_60_01",
	"order": 1,
	"act": "intro",
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
			"아무도 들어서지 못했던 왕의 골방.",
			"그곳에, 한 왕의 모든 비밀이 숨겨져 있었다.",
			"헤진 지도 한 장이, 차가운 벽에 붙어 있었다.",
			"따뜻한 남쪽으로 향하는, 그의 진짜 발자국."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "알현실 뒤편, 오래된 골방. 먼지 쌓인 공기가 모든 것을 감추고 있었다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "여기가 왕의 비밀 방? 생각보다… 평범한데."
					},
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "아니요. 벽을 보세요."
					},
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "낡은 벽지 아래, 닳아 해진 지도가 모습을 드러냈다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "지도? 이건… 남쪽으로 향하는 길 같은데."
					}
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "네. 이 왕이 누구인지 알 수 있는 유일한 단서죠."
					},
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "'따뜻한 남쪽 나라로…' 지도는 계속 말하고 있어요."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "왜 이런 곳에 숨겨뒀을까?"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "eira",
					"content": {
						"korean": "아무도, 왕의 약점을 보지 못하게."
					},
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "eira",
					"action": "enter",
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "이 룬들은… 왕의 고통을 기록하고 있어요."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "고통? 왕은 위엄 있는 모습만 보였는데."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "가면 아래, 모든 것은 뒤틀렸어요. 이 지도가 진실을 말해주죠."
					},
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "지도의 이 부분은… 절망이에요."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "절망?"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "eira",
					"content": {
						"korean": "네. 남쪽으로 향하던 길이… 멈춰 있어요."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "길의 끝, 정체 모를 그림자가 기다리고 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "여기까지 온 건가. …어리석은 것들."
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네가… 이 길을 막고 있던 건가?"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "지도는 말하고 있어요. 당신은… 왕의 가장 깊은 두려움이라고."
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "감히… 내 이름을 들춰내려 하는가?"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이름?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "그래. 나야말로… {random_boss}의 모든 약점."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "감히 내 길을 방해하려 해? 사라져라!"
					},
					"type": "speech"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "큭… 결국… 나는 사라지는가…."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "약점이라니… 무슨 의미지?"
					},
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "잊힌 역사는 말하고 있어요. 이 {random_boss}는… 왕이 버린, 그의 가장 연약한 기억이라고."
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "그림자는 사라졌다. 하지만 진실은 이제 막 드러나기 시작했다."
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은… 아직도 날 이길 수 있을 거라 생각하나?"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…아니. 아직 끝나지 않았어!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "포기하지 마세요. 이 지도가… 아직 더 많은 것을 말해줄 거예요."
					},
					"type": "speech"
				}
			]
		}
	]
} as const;
