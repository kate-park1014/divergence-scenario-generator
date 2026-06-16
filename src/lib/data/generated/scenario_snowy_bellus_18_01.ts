export const scenario_snowy_bellus_18_01 = {
	"scenario_id": "snowy_bellus_18_01",
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
			"유령 열차. 첫 객차는 숨 막히는 정적에 잠겨 있었다.",
			"흑요석 좌석마다 앉아 있는 사람들. 모두, 더없이 행복한 미소로 얼어붙었다.",
			"찻잔을 든 손짓, 책장을 넘기던 손짓. 영원히 다음 순간으로 넘어가지 못하는 시간.",
			"누구도 숨 쉬지 않는 곳. 에이라는 멈춘 표정에서 갇힌 순간을 읽어내려 한다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "유령 열차의 첫 객차. 멈춰버린 시간이 흐른다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "여기가… 그 열차?"
					}
				},
				{
					"content": {
						"korean": "좌석마다 박제된 사람들이 미소 지은 채 앉아 있었다. 단 한 명도 자세를 바꾸지 않았다."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_1",
					"content": {
						"korean": "저 사람들… 죽은 거야?"
					}
				},
				{
					"content": {
						"korean": "아니. 살아있는 것 같아. 다만… 멈춰있을 뿐."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_2"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "eira",
					"spot": [
						3,
						3
					]
				},
				{
					"content": {
						"korean": "기록해야 해. 이 멈춘 순간의 표정을."
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "base"
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
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이들의 미소는… 멈춰있어. 행복의 순간에 갇힌 채."
					}
				},
				{
					"content": {
						"korean": "행복이라면… 왜 슬프게 느껴지지?"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "정지의 구조… 다음 순간을 잃은 행복은 무엇일까?"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "eira",
					"action": "enter",
					"duration_ms": 500,
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
						"korean": "이들은 계속 반복해. 멈춘 미소를. 영원히."
					}
				},
				{
					"content": {
						"korean": "…끔찍해."
					},
					"speaker": "character_1",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이게 정말 행복일까?"
					}
				},
				{
					"content": {
						"korean": "기억… 잃어버린 기억들이 이 정지를 만들었을지도 몰라."
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						3,
						3
					],
					"speaker": "eira",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "여기 갇힌 모든 순간은… 그들의 진짜 시간이 아니야."
					}
				},
				{
					"content": {
						"korean": "누가 이런 짓을…?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 멈춘 세계를 지키는 자… 그의 기록을 읽어야 해."
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "객차의 끝. 흑요석 문 너머에서 차가운 기운이 흘러나왔다."
					}
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "어리석은 자들… 영원히 멈춰라."
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "크윽… 아직 끝나지 않았어!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "다시 한번, 그들은 멈춘 미소의 세계에 갇혔다."
					}
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…기억은… 지워지지 않아. 이 정지는… 영원해."
					}
				},
				{
					"content": {
						"korean": "아니. 이제 시간이 흐를 거야."
					},
					"type": "speech",
					"emotion": "happy",
					"speaker": "character_any"
				},
				{
					"spot": [
						3,
						3
					],
					"type": "direction",
					"speaker": "eira",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "새로운 기록… 멈춘 세계가 다시 움직이기 시작했다."
					}
				},
				{
					"content": {
						"korean": "열차는 다시 움직였다. 이제 다음 객차로. 멈춘 미소 뒤의 진실을 찾아서."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "객차의 마지막 문. 거대한 그림자가 앞을 막았다."
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "이 완벽한 정적을… 깨트리려는가?"
					}
				},
				{
					"content": {
						"korean": "이게 완벽하다고? 모두 갇혀 있잖아!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "그들은 영원한 행복 속에 있다. 다음 순간의 고통에서 해방된 채."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "당신의 이름은 {random_boss}. 당신의 기록을 읽어내겠다."
					}
				},
				{
					"content": {
						"korean": "비켜! 이 사람들을 풀어줘야 해!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 15
		}
	]
} as const;
