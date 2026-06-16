export const scenario_snowy_skalhorn_85_03 = {
	"scenario_id": "snowy_skalhorn_85_03",
	"order": 3,
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
			"연회는 끝나지 않았다. 차가운 미소만 가득한 채.",
			"뿔잔의 그림자 아래, 손님들은 영원히 춤을 춘다.",
			"가장 오래된 자는 이미 축제의 일부가 되었다.",
			"그 끝은 얼어붙는 것. 완전한 동화."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 얼음 연회장. 끝없는 식탁에 셀 수 없는 손님들이 앉아 있었다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "다들… 웃고 있어. 얼어붙은 채로."
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						1
					],
					"duration_ms": 500,
					"speaker": "eira"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…그들의 미소는 기쁨이 아니야. 영원히 갇힌 공포."
					},
					"speaker": "eira"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "뿔잔의 축제는… 끝나지 않는 저주지."
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						3,
						1
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "여기… 가장 오래된 손님이 있어."
					},
					"emotion": "base",
					"speaker": "eira"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "뿔잔이랑… 거의 하나가 됐잖아?"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "오래 앉을수록, 동화되는 거야."
					},
					"speaker": "eira"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "축제의 끝은… 완전히 얼어붙는 것."
					},
					"type": "speech",
					"speaker": "eira"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "영원히, 미소 짓는 조각상으로."
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "eira",
					"action": "enter",
					"spot": [
						2,
						1
					],
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 연회는 모두를 초대해."
					},
					"speaker": "eira"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "영원한 환대. 벗어날 수 없는 축제."
					},
					"type": "speech",
					"speaker": "eira"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그럼 우리도… 언젠가 저렇게 되는 거야?"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "eira",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "막지 않으면, 그렇지."
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						1
					],
					"speaker": "eira",
					"duration_ms": 500
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "봐. 아무도 자리에서 일어서지 못했어."
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…돌아갈 수 없다는 거야?"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이 축제는 시작만 있을 뿐, 끝은 없어. 영원히."
					},
					"speaker": "eira"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "우리가 끝을 내야 해."
					}
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "영원한 축제는 계속되었다. 새로운 조각상이 된 채."
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "하하하! 너희도 영원히 이곳에 갇히는군!"
					},
					"emotion": "happy"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…아직 끝나지 않았어. 다시 돌아올 거야!"
					},
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "연회장 중앙. 거대한 얼음 결정이 웅장하게 빛나고 있었다."
					},
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "어서 와라, 새로운 손님들."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "너희도 영원한 축제의 일부가 될 것이다."
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "네 함정에 넘어갈 리 없어."
					},
					"type": "speech"
				},
				{
					"speaker": "eira",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						1
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "저자가 이 얼어붙은 연회의 주인이야."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "eira"
				},
				{
					"speaker": "eira",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "모든 생명을 영원히 얼리려는 환대."
					}
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "크으… 언젠가… 너희도… 얼어붙을 것이다…"
					},
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "끝났어. 이제 아무도 얼어붙지 않아."
					},
					"type": "speech",
					"emotion": "happy",
					"speaker": "character_any"
				},
				{
					"spot": [
						2,
						1
					],
					"type": "direction",
					"action": "enter",
					"speaker": "eira",
					"duration_ms": 500
				},
				{
					"speaker": "eira",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…하나의 축제가 끝났을 뿐이야."
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "얼음 연회장의 주인은 쓰러졌다. 그러나 뿔잔의 환대는 계속될 것이다."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "더 깊은 곳에서, 빈 자리는 그들을 기다리고 있었다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			]
		}
	]
} as const;
