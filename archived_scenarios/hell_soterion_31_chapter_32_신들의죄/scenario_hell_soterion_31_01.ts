export const scenario_hell_soterion_31_01 = {
	"scenario_id": "hell_soterion_31_01",
	"order": 1,
	"random_boss_title": {
		"korean": "용암 파수꾼"
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
			"유황 냄새가 진동하는 지옥의 입구.",
			"동료들과 함께 용암 지대로 들어서던 그 순간,",
			"하늘에서 떨어진 벼락이 거대한 지옥 문을 막아섰다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "발밑으로 뜨거운 유황 열기가 올라오는 지옥 입구다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ash"
				},
				{
					"emotion": "base",
					"speaker": "ash",
					"content": {
						"korean": "반갑습니다. 지옥 길잡이 애쉬입니다. 용암 지대로 들어가는 길을 안내해 드리겠습니다."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "바닥에 에메랄드빛 형광 가루가 흩뿌려져 있군."
					},
					"emotion": "base"
				},
				{
					"speaker": "ash",
					"content": {
						"korean": "신성한 재판관 소테리온 님이 지나간 자리에 흔히 남는 가루입니다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "…피부로 전해지는 열기가 엄청나네."
					}
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "하늘에서 떨어진 벼락에 거대한 지옥 문이 쿵 소리와 함께 닫혔다."
					}
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "ash",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "ash",
					"content": {
						"korean": "재판관 님의 벼락 때문에 지옥 문이 완전히 굳어 버렸습니다!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "바닥에 떨어진 가슴의 크리스털을 결계로 감싸 보호해야겠어."
					}
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "…갑작스러운 벼락에 소름이 돋아."
					},
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "ash",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "크리스털에 결계를 펼쳤지만 거친 진동과 함께 문이 더 강하게 닫혔다!"
					}
				},
				{
					"type": "speech",
					"speaker": "ash",
					"content": {
						"korean": "결계 때문에 문이 잠겨 버렸어요! 동료들이 용암 지대에 갇혔습니다!"
					},
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"speaker": "character_3",
					"content": {
						"korean": "…주위의 온도가 더 무섭게 올라가고 있어."
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "결계의 여파로 용암 지대의 지열이 자극받아 땅이 크게 흔들린다."
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "무모하게 펼친 결계가 지열을 자극해서 거대한 기척을 불러일으켰다."
					}
				},
				{
					"emotion": "sad",
					"speaker": "character_4",
					"content": {
						"korean": "…숨이 턱 밑까지 차올라."
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "내 공격은 막아냈으나… 결계로 잠긴 문은 이곳에서 열리지 않는다."
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "동료들을 구하려면 문을 열 다른 단서를 찾아야 해."
					}
				},
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "ash",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "ash",
					"content": {
						"korean": "통곡의 유황 절벽 쪽으로 이어지는 길을 확인했습니다. 그리로 가야 합니다!"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "용암 지대에 갇힌 동료들을 구하기 위해, 탐험대는 통곡의 유황 절벽으로 향한다."
					}
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "지열을 자극하는 무모한 자에게 내줄 길은 없다. 돌아가라!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "…여기서 멈출 수 없다. 다시 도전하겠다!"
					},
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "용암 웅덩이 속에서 지열을 지키는 존재가 분노하며 길을 막아선다."
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "무모한 결계가 지열을 자극했다. 용암 지대를 위협하는 자들은 멈춰라!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "갇힌 동료들을 구하기 위해서라도 비켜라!"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "…더는 뒤로 물러설 수 없어."
					}
				}
			]
		}
	]
} as const;
