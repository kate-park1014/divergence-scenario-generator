export const scenario_snowy_finn_60_05 = {
	"scenario_id": "snowy_finn_60_05",
	"order": 5,
	"act": "climax_finale",
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
		"pool_id": "pool_033"
	},
	"epilogue": {
		"korean": [
			"왕의 거짓된 위엄은 무너졌다.",
			"골방의 지도는 이제 더 이상 '정복 계획'이 아니었다.",
			"그것은 그저 한 마리 펭귄이 품었던, 따뜻한 남쪽 나라에 대한 그리움이었다.",
			"진실은 밝혀졌으나, 왕에게는 구원이었을까, 아니면 또 다른 침해였을까.",
			"설산에는 여전히 눈이 내렸다. 변함없이 차갑게, 그리고 끝없이."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "알현실 뒤편, 작은 골방의 벽에는 빛바랜 지도가 걸려 있었다."
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이게… 왕이 숨겨온 골방인가?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "eira",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…아무도 들이지 않던 곳. 드디어 왔네요."
					},
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "이 지도… 따뜻한 남쪽 나라로 향하는 길 같아요."
					}
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "eira",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "지도의 길이 도중에 끊겨 있어요."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그리고 그 끝에… 작은 발자국 그림이 멈춰 서 있네요."
					},
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "멈춰… 서 있다고?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "여기서… 길을 잃은 거예요."
					},
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "eira",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "이 발자국은 마치… 작은 펭귄의 발자국 같아요."
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "펭귄…? 왕이 펭귄이었어?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그는 남쪽으로 가려던 길을 잃고, 이곳에 갇혔던 거예요."
					},
					"speaker": "eira"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "그럼 '정복 계획'은 전부 거짓말…?"
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"speaker": "eira",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "왕이 이 지도를 차마 떼어내지 못했어요."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "떼어내지 못했다니… 미련이 남은 건가?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "네. 언젠가 다시 남쪽으로 돌아가고 싶었던 거죠."
					},
					"speaker": "eira"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "모두가 잠식당한 추위 속에서, 홀로 따뜻한 곳을 꿈꿨던… 불쌍한 왕이에요."
					},
					"speaker": "eira"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "eira",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "왕이 이 지도를 '정복 계획'이라 부른 이유를 알겠어요."
					},
					"speaker": "eira"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "그는 길을 잃은 자신의 모습을 감추고 싶었던 거예요. 왕의 위엄 뒤에."
					},
					"speaker": "eira"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "닥쳐라! 에이라!"
					},
					"speaker": "boss"
				},
				{
					"content": {
						"korean": "그건… 짐의… 위대한 정복 계획이다! 함부로 보지 마라!"
					},
					"speaker": "boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…왕의 목소리가 떨리고 있어."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "…왕은 정복자가 아니었어요. 그저 길을 잃은 자일 뿐."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "아니다! 짐은 이 설산의 왕이다!"
					},
					"speaker": "boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "진실을 마주해야 할 시간이야, Finn."
					}
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "흐윽… 내가… 내가 왕이 아니었다니… 흑…"
					},
					"speaker": "boss",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…그는 그저 고향으로 돌아가고 싶었던 거야."
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "길 잃은 왕은, 이제서야 제자리를 찾은 거겠죠."
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "알현실의 왕관은 바닥에 떨어졌다. 차가운 설산에 온기가 스미는 듯했다."
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "그러나 그의 이야기는, 이제 막 시작된 것일지도 모른다."
					}
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "흐흐… 진실을 알았다고 강해지는 건 아니다."
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "너희는… 영원히 이 설산에 갇히게 될 것이다!"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "아니. 우리는… 길을 잃지 않아."
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"왕의 골방. 아무도 드나들 수 없던 곳.",
			"그곳에는 왕이 지독하게 감춰온 진짜 이야기가 있었다.",
			"헤진 지도 위에 새겨진 진실은, 왕의 위엄을 송두리째 흔들 것이다.",
			"이제 에이라가 그 마지막 조각을 맞춘다."
		]
	}
} as const;
