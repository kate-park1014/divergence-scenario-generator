export const scenario_hell_stampy_30_01 = {
	"scenario_id": "hell_stampy_30_01",
	"order": 1,
	"random_boss_title": {
		"korean": "지옥 경비병"
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "붉은 용암이 끓어오르는 입구. 이승으로 향하는 관문이 먼발치에 보인다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "ash"
				},
				{
					"type": "speech",
					"speaker": "ash",
					"emotion": "base",
					"content": {
						"korean": "안녕하세요. 난 이 지옥을 떠도는 방황하는 영혼 애쉬라고 해요. 이승으로 돌아가시나요?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "그래. 이승으로 통하는 관문을 찾아 여기까지 왔다."
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "관문을 지나려면 도장이 필요한데, 친절한 정령이 무료 통행 도장을 찍어 준다고 해요."
					},
					"emotion": "happy",
					"type": "speech",
					"speaker": "ash"
				},
				{
					"content": {
						"korean": "…뜨거운 용암 기운에 숨이 턱 막히네."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_1"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "용암 바닥 곳곳에 굳어 붙은 청록빛 도장 자국들이 흩어져 있다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "ash"
				},
				{
					"type": "speech",
					"speaker": "ash",
					"content": {
						"korean": "그 정령은 응원가를 부르며 친절히 도장을 찍어 주지만, 발밑에 늘 저 청록빛 도장 자국이 남아 있었어요."
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "청록빛 도장 자국이라… 정령의 호의치고는 어딘가 불길하군."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_2",
					"emotion": "sad",
					"content": {
						"korean": "…바닥의 청록빛이 불길하게 빛나."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "ash",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "ash",
					"emotion": "sad",
					"content": {
						"korean": "저 앞이 통행 관문이에요. 전 쇠사슬 소리가 무서워서 더는 못 가요."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "알려 줘서 고맙다. 관문은 우리가 알아서 확인하마."
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "ash",
					"action": "exit",
					"direction": "down",
					"duration_ms": 400,
					"type": "direction"
				},
				{
					"content": {
						"korean": "…조용해서 오히려 긴장되네."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_3"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"content": {
						"korean": "관문 바로 앞, 거대한 적의 기척이 길을 가로막는다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "누군가 길목을 막아선 채 살기를 드러내고 있다."
					}
				},
				{
					"content": {
						"korean": "…손바닥에 땀이 고인다."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_4"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "용암 입구를 지키는 무장한 자가 무기를 굳게 쥐며 다가온다."
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "물러서라! 친절해 보이는 정령이 찍어 준다는 무료 도장은 영혼을 노리는 덫이다!"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "우리는 이승으로 돌아가야 한다. 그 통행 도장을 받아야겠어!"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…저 무시무시한 기세를 뚫어야 해."
					},
					"speaker": "character_1"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "어리석은 영혼이여, 제 발로 덫에 걸릴 셈이냐!"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "…이대로 포기할 수 없다. 다시 도전하겠다!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "경고했거늘… 그 도장을 찍 받는 순간 후회하게 될 거다…"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "쓰러진 경비병 뒤로 관문함이 열리며, 탐험대의 발목에 무료 통행 도장이 강제로 찍힌다."
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "그 순간, 발목에서 청록빛 도장 자국이 번지며 차가운 쇠사슬이 돋아나 영혼을 묶어 버린다!"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "무료 도장을 받자마자 쇠사슬이 돋아났어… 영혼이 지옥에 묶이고 말았다!"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "영혼의 쇠사슬을 풀 방법을 찾기 위해, 탐험대는 검은 연기 골짜기로 향한다."
					},
					"type": "speech",
					"speaker": "narrator"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"이승으로 돌아가는 유일한 길, 붉은 용암 입구.",
			"그곳에는 관문을 지나는 여행자에게 무료 통행 도장을 찍어 주는 정령이 있다고 한다.",
			"탐험대는 영혼을 되찾고 돌아가기 위해 불길한 용암 지대로 발을 내딛는다."
		]
	}
} as const;
