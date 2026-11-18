export const scenario_hell_razzle_34_01 = {
	"scenario_id": "hell_razzle_34_01",
	"order": 1,
	"random_boss_title": {
		"korean": "처형인"
	},
	"act": "intro",
	"theme": "hell",
	"actors": {
		"ash": {
			"id": "mon_b225f5fa-59a1-47bb-b4c5-e73bf9e7192a",
			"name": {
				"korean": "애쉬",
				"english": "Ash",
				"japanese": "アッシュ",
				"chinese": "艾什",
				"french": "Ash",
				"spanish": "Ash",
				"vietnamese": "Ash",
				"thai": "แอช",
				"hindi": "ऐश"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d84413a8-9d6f-4a40-5d36-75e431fb9900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/78281fca-e4b8-45cc-68ef-7df3fef74200/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"유황 불길이 끊임없이 치솟는 지옥의 유황 광장.",
			"매캐한 연기가 허파를 조르고 지옥의 문은 서서히 닫혀간다.",
			"이곳을 벗어날 유일한 방법은 위로 향하는 상자를 작동시키는 것뿐이다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "매캐한 유황 연기가 시야를 가린다. 발밑에서 뜨거운 열기가 올라온다."
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"action": "enter",
					"speaker": "ash",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "쿨럭! 난 지옥을 탈출하려는 모험가 애쉬예요. 위로 올라가는 상자를 찾아 헤매고 있었죠."
					},
					"speaker": "ash",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…연기 때문에 숨이 턱턱 막혀."
					},
					"speaker": "character_1",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "저기 바닥에 떨어진 풍금 태엽 열쇠를 보세요! 저걸 상자에 꽂아야 위로 갈 수 있어요."
					},
					"speaker": "ash",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "풍금 태엽 열쇠를 상자에 꽂아 돌려보자."
					},
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "태엽을 돌리자 기괴한 서커스 풍금 소리와 함께 네온 핑크빛 자수정 조각이 땅에 떨어진다."
					},
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "방금 떨어진 네온 핑크빛 자수정 조각이 유황 바닥에서 묘한 빛을 낸다."
					}
				},
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "ash",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "이상하네요. 이 태엽을 돌렸더니 왜 이런 자수정 조각이 떨어진 걸까요?"
					},
					"speaker": "ash",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "단서가 될지 모르니 조각을 챙기고 위로 올라갈 길을 찾자."
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "character_2",
					"emotion": "sad",
					"content": {
						"korean": "…소름 끼치는 풍금 소리야."
					},
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
						3,
						2
					],
					"speaker": "ash",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "저 앞의 위쪽 문이 열렸어요! 전 흩어진 다른 흔적을 둘러보고 따라갈게요."
					},
					"speaker": "ash",
					"emotion": "happy"
				},
				{
					"type": "speech",
					"content": {
						"korean": "좋다, 우리도 멈추지 않고 계속 위로 향한다."
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"duration_ms": 400,
					"speaker": "ash",
					"action": "exit",
					"type": "direction",
					"direction": "up"
				},
				{
					"speaker": "character_3",
					"emotion": "sad",
					"content": {
						"korean": "…공기 속에 불길한 기운이 맴돌아."
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"content": {
						"korean": "통로 끝에서 거대한 무기를 바닥에 긁는 묵직한 소리가 울려 퍼진다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "누군가 위협적인 기척을 뿜으며 이 길을 막아서고 있다."
					},
					"type": "speech"
				},
				{
					"speaker": "character_4",
					"emotion": "sad",
					"content": {
						"korean": "…심장이 터질 것처럼 뛰어."
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "{random_boss}의 칼날을 벗어날 순 없다. 여기서 재가 되어라."
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "…여기서 포기할 순 없다. 다시 무기를 잡는다!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "유황 연기 속에서 묵직한 무기를 든 정체 모를 자가 길을 막아선다."
					}
				},
				{
					"content": {
						"korean": "태엽을 돌려 상자를 건드린 자냐! 더 이상 올라가지 마라!"
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "지옥을 탈출하기 위해 이 길을 통과해야만 한다!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "…저 무기가 닿으면 무사하지 못하겠어."
					},
					"speaker": "character_1",
					"emotion": "sad",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "그 태엽을 돌린 위험을 모르는구나… 비극이 퍼져나갈 것이다."
					},
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "어떤 위험이 기다려도 지옥을 벗어나겠다는 결의는 꺾이지 않는다."
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "무기를 떨어뜨린 정체 모를 자가 무릎을 꿇으며 길을 내어준다."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "정 올라가겠다면 곡소리 언덕으로 가라… 그곳에 소문의 시작이 있다."
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "다음 장소는 곡소리 언덕이다. 지체 없이 이동하자."
					}
				}
			]
		}
	]
} as const;
