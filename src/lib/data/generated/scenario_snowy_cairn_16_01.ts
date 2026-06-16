export const scenario_snowy_cairn_16_01 = {
	"scenario_id": "snowy_cairn_16_01",
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
			"설원. 끝없이 펼쳐진 얼음과 눈의 대지.",
			"탐험대는 한참을 나아갔다 믿었다.",
			"그러나 다시, 그 자리 — 익숙한 돌무덤이 길을 막고 있었다.",
			"분명 지나쳤던 것인데. 다시, 똑같은 모습으로."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "설원은 침묵 속에 얼어붙었다. 차가운 바람만이 길을 안내했다."
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "여길… 지나치지 않았었나?"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "저 돌무덤… 아까 봤던 거랑 똑같은데."
					}
				},
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
					"emotion": "base",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "(수첩을 펼치며) 기록으로는 분명 통과했는데."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "착각일 리 없어."
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira",
					"spot": [
						3,
						3
					],
					"type": "direction"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "돌들의 배열, 룬의 형태… 정말 똑같네요."
					}
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "그럴 리가. 설마 우연?"
					},
					"emotion": "sad"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "우연이라고 하기엔 너무 완벽해요."
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "뭐가 우릴 보고 있는 것 같아."
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "이전 기록과 대조해봤어요. 돌의 균열까지, 완전히 일치해요."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "말도 안 돼. 그럼 우린 계속 맴돌고 있었단 거야?"
					},
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "이 돌무덤… 처음부터 같은 하나였을지도 모르겠네요."
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_3",
					"type": "speech",
					"content": {
						"korean": "젠장. 갇힌 건가."
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "eira",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "침묵은 그림자처럼 탐험대를 따라붙었다. 피할 수 없었다."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "소름 돋아. 저것이 우리를 지켜보고 있어."
					},
					"emotion": "sad"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "룬이… 전보다 더 또렷해졌어요. 우리 말을 듣고 있는 것 같아요."
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "character_4",
					"type": "speech",
					"content": {
						"korean": "뭔가 심상치 않아. 돌아갈까?"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "돌아갈 곳이 어디 있는데. 이미 여기까지 왔어."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "탐험대 앞에, 거대한 그림자가 드리웠다."
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "또 다시, 여기에 왔군. 길을 잃었나?"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네가… 이 모든 걸 꾸민 거야?"
					}
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "모든 것을 알아채도, 결국엔 돌아서지 못하는 어리석음."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "더 이상은 못 참아."
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "(비웃듯) 덤벼봐라. 이곳의 침묵을 깨부술 수 있을지."
					}
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 사라지자, 설원에 일시적인 평화가 찾아왔다."
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…이것이 끝이라 생각하나? 아직, 시작일 뿐이다…"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "시작이라고? 무슨 소리야."
					}
				},
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira"
				},
				{
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "(수첩을 덮으며) 기록을 갱신해야겠네요. 이 침묵은… 끝나지 않았어요."
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "탐험대는 다시 발걸음을 옮겼다. 하지만, 지켜보는 시선은 여전히 그들을 따라붙었다."
					}
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "돌무덤에서 뻗어 나온 그림자가 탐험대를 집어삼켰다."
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "(비웃음) 결국, 이 침묵에 굴복하는군."
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "크윽… 아직, 끝나지 않았어!"
					}
				},
				{
					"spot": [
						2,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "(침착하게) 다시, 기록을 대조해야 합니다."
					},
					"emotion": "base"
				}
			]
		}
	]
} as const;
