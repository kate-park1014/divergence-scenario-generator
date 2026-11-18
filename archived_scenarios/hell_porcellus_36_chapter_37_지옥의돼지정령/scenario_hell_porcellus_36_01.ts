export const scenario_hell_porcellus_36_01 = {
	"scenario_id": "hell_porcellus_36_01",
	"order": 1,
	"random_boss_title": {
		"korean": "지옥 경비원"
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
			"끓어오르는 유황 강과 용암 바다.",
			"억울하게 갇혔다는 돼지 저금통 정령을 도우려 동전을 던졌다.",
			"하지만 동전이 슬릿에 들어가자 차단막이 작동해 지옥 문이 잠기고 말았다.",
			"이제 갇혀버린 지옥에서 탈출할 방법을 찾아야 한다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "유황 냄새가 진동하는 용암 강가. 멀리 분홍색 하트 연기가 옅게 피어오른다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"spot": [
						3,
						2
					],
					"speaker": "ash",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "난 애쉬라고 해. 이 지옥에서 길잡이 일을 하고 있지."
					},
					"emotion": "base",
					"speaker": "ash"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "뜨거운 용암 강을 건너야 탈출할 수 있겠어."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "…발 밑이 부글거려서 소름 돋네."
					},
					"type": "speech",
					"speaker": "character_1",
					"emotion": "sad"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "ash",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "강가에 쪽지가 떨어져 있네. 억울하게 지옥에 갇혔다는 돼지 저금통 정령의 구원 요청이야."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "ash"
				},
				{
					"content": {
						"korean": "불쌍한 정령이군. 배 속의 동전을 나눠줄 테니 꺼내 달라고 적혀 있어."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "character_2",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…지옥에도 저런 불쌍한 존재가 있나?"
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "ash",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "저금통을 도와주려면 슬릿에 영혼 동전을 넣어야겠지."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "영혼 동전이 슬릿에 들어가자 쿵 하는 소리와 함께 지옥 문이 잠겨버렸다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "ash",
					"content": {
						"korean": "이럴 수가, 동전 때문에 차단막이 건드려져 지옥 문이 봉쇄됐어!"
					},
					"type": "speech"
				},
				{
					"speaker": "character_3",
					"emotion": "sad",
					"content": {
						"korean": "…문 닫히는 소리가 무섭게 울려."
					},
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "잠겨버린 문 너머에서 웅장하고 육중한 발소리가 다가온다."
					}
				},
				{
					"content": {
						"korean": "동전을 넣은 것 때문에 경비원 녀석이 분노해서 덤벼드는 모양이다."
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"speaker": "character_4",
					"type": "speech",
					"content": {
						"korean": "…등 뒤가 싸늘해지는 기분이야."
					}
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "차단막을 건드린 죄를 달게 받아라!"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…아직 끝나지 않았어. 다시 덤벼라!"
					}
				}
			],
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "지옥 문 앞을 막아선 자가 무기를 겨누며 포효한다."
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "무모하게 영혼 동전을 넣어 차단막을 건드리다니, 절대 보낼 수 없다!"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "너를 넘어서 갇힌 지옥의 탈출구를 찾겠다!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_1",
					"content": {
						"korean": "…열기가 뼛속까지 스며든다."
					}
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "문은 잠겼다… 탈출하고 싶다면 저 연기를 쫓아가 봐라…"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "분홍색 하트 연기가 피어오르는 방향으로 가야겠다."
					}
				},
				{
					"content": {
						"korean": "탐험대는 탈출구를 찾기 위해 유황 보석 동굴 쪽으로 발걸음을 옮긴다."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "ash"
				},
				{
					"content": {
						"korean": "저 연기가 나는 동굴 건너편으로 가보자. 단서가 있을 거야."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "ash"
				}
			]
		}
	]
} as const;
