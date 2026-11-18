export const scenario_hell_philomel_39_04 = {
	"scenario_id": "hell_philomel_39_04",
	"order": 4,
	"random_boss_title": {
		"korean": "악마 주술사"
	},
	"act": "rising",
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
			"대륙 입구까지 번지는 지옥불의 열기.",
			"탐험대는 불길을 식히기 위해 검은 제단으로 향한다.",
			"그곳에서 지옥불을 잠재울 핵심 물건을 전달받아야 한다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "검은 제단 입구는 뿜어져 나오는 열기로 검게 그을려 있었다."
					}
				},
				{
					"speaker": "ash",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "절벽에서 헤어진 뒤 지옥불을 계속 연구하며 쫓아왔어요."
					},
					"emotion": "base",
					"speaker": "ash"
				},
				{
					"content": {
						"korean": "이게 지옥불을 식힐 핵심 물건인 별빛 서리 수정이에요."
					},
					"type": "speech",
					"speaker": "ash",
					"emotion": "happy"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "이 수정이 있다면 퍼지는 불길을 제어할 수 있겠군."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "…숨만 쉬어도 목이 바짝 타들어 가."
					},
					"speaker": "character_1",
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "제단 안쪽으로 들어설수록 불길의 소용돌이가 거세진다."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ash",
					"type": "direction"
				},
				{
					"speaker": "ash",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "제단 중심부의 불꽃 코어에 이 수정을 넣어야 해요."
					}
				},
				{
					"content": {
						"korean": "불꽃 코어까지 수정을 안전하게 운반해야겠구나."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…열기가 너무 강해서 눈을 뜨기 힘들어."
					},
					"emotion": "sad",
					"speaker": "character_2"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ash",
					"type": "direction"
				},
				{
					"content": {
						"korean": "저는 여기까지예요. 악마 주술사들이 제단을 지키고 있어요."
					},
					"type": "speech",
					"speaker": "ash",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "수정은 우리가 반드시 불꽃 코어까지 가져가겠다."
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "ash",
					"action": "exit",
					"type": "direction",
					"duration_ms": 400,
					"direction": "down"
				},
				{
					"content": {
						"korean": "…깊은 곳에서 기괴한 주문 소리가 들려와."
					},
					"type": "speech",
					"emotion": "base",
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
						"korean": "주문 소리가 울려 퍼지는 제단 중심부 길목."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "바닥에 청록빛 수정 깃털이 떨어져 있군."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…불길 속에서도 깃털이 차가운 빛을 내고 있어."
					},
					"speaker": "character_4",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "주문 소리가 바로 앞이다. 제단을 막아선 적이 있다."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "검은 제단 중앙, 불길을 두른 악마 주술사가 막아선다."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "집행자 님의 고통을 가로채지 마라! 이 불길은 멈추지 않는다!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "대륙으로 번지는 지옥불을 더는 방관할 수 없다!"
					}
				},
				{
					"content": {
						"korean": "…주문 소리에 고막이 찢어질 것 같아."
					},
					"type": "speech",
					"speaker": "character_1",
					"emotion": "sad"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 지옥불은… 집행자 님이 짊어진 짐이다…"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "수정을 불꽃 코어에 집어넣어야 열기가 잠든다는 걸 깨달았다!"
					}
				},
				{
					"content": {
						"korean": "코어에 넣는다 해도… 불길이 완전히 꺼지진 않을 것이다…"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "탐험대는 수정을 안고, 열기가 폭발하는 지옥 심장부로 향했다."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "집행자 님의 뜻을 방해하는 자들에게 안식은 없다!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "…여기서 무너질 순 없다. 다시 불꽃 코어로 향한다."
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				}
			]
		}
	]
} as const;
