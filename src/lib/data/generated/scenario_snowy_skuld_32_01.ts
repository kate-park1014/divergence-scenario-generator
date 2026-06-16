export const scenario_snowy_skuld_32_01 = {
	"scenario_id": "snowy_skuld_32_01",
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
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "빙하 내부로 이어진 통로. 한기가 살을 에는 듯했다."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "여기가 얼음 동굴… 끝이 안 보이네."
					}
				},
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "eira",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "저길 봐. 빙하와 엉겨붙은… 선체의 골격이야."
					}
				},
				{
					"content": {
						"korean": "배라고? 이렇게 거대한 배가?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "벽면에도 룬이 새겨져 있어. 옛 항해의 영광을 노래하는 것 같아."
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "점점 더 깊이 들어갈수록 선체의 형상이 또렷해졌다."
					},
					"speaker": "narrator"
				},
				{
					"type": "direction",
					"speaker": "eira",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						2
					]
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "정말 거대하네… 도대체 어떤 배였을까?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "이 룬은… '가장 먼저 파도를 갈랐던 배'라고 쓰여 있어."
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_1",
					"content": {
						"korean": "척후선인가? 그렇게까지 앞장섰다는 건…"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "무언가를 찾아, 아주 멀리까지 나아갔던 배임이 분명해."
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "얼음 속에서도 굳건히 버티는 나무 골격은 옛 영광의 잔향을 뿜어냈다."
					},
					"speaker": "narrator"
				},
				{
					"spot": [
						4,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "eira",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "이 룬… '피오르드의 심장'이라고 불린 선단에서 가장 빛나는 별이었다고."
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "피오르드의 심장? 그 전설의 선단 말인가?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "맞아. 단순한 배가 아니야. 무언가의 선두였어."
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그럼 우리가 찾던 게… 저 배에 대한 건가?"
					},
					"speaker": "character_2"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "심장부로 향하는 길. 차가운 공기가 모든 것을 집어삼킬 듯했다."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "더 깊이 갈수록 룬이 더 선명해지고 있어. 이곳에 중요한 기록이 남아있는 게 분명해."
					},
					"speaker": "eira"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "더 이상 돌아갈 수 없는 것 같아."
					}
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "돌아갈 생각은 하지 않는 게 좋아. 이 배의 이야기는… 끝까지 들어야 해."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_3",
					"content": {
						"korean": "끝까지 듣고, 뭐라도 알아내야 해."
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "쓰러진 그림자는 얼음 속으로 스며들듯 사라졌다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…겨우… 여기까지 왔다고… 착각하지 마라…"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "무슨 말을 하려는 거지?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"action": "enter",
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"speaker": "eira",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "이 룬을 봐. 마지막 문단… '피오르드의 심장'의 척후선 '스쿌드'…"
					},
					"speaker": "eira"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"speaker": "character_any",
					"content": {
						"korean": "스쿌드… 우리가 찾던 배의 이름인가!"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "오랜 시간 잠들었던 이름이 얼음 동굴에 울려 퍼졌다. 잊힌 영광의 조각이 맞춰지기 시작했다."
					},
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "동굴의 가장 깊은 곳. 거대한 얼음 결정들이 빛났다."
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "저건…!"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "침입자들… 잊힌 것을 깨우려 하는가?"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_1",
					"content": {
						"korean": "네가 이 배를 지키는 건가?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "이곳의 비밀은… 영원히 잠들어 있어야 한다."
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "그 비밀이 뭔데!"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "감히… 들을 자격이 없다."
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 탐험대를 집어삼켰다."
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 자들… 이곳의 진실은… 너희가 감당할 수 없다."
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "아직… 끝나지 않았어!"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "다시… 돌아올 거야."
					},
					"type": "speech",
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"차가운 심장부, 거대한 얼음이 모든 것을 품었다.",
			"그 깊은 곳, 빙하와 뒤엉킨 채 잠든 거대한 그림자가 있었다.",
			"잊힌 영광의 흔적, 이제야 빛을 찾아 깨어나려 한다."
		]
	}
} as const;
