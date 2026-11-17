export const scenario_hell_razzle_34_01 = {
	"scenario_id": "hell_razzle_34_01",
	"order": 1,
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
					"speaker": "ash",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "지옥 서커스장의 거대한 문 앞. 유황 연기가 자욱하게 피어오른다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "문이 단단히 잠겨 있어. 들어갈 방법이 필요해."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…공기가 짓눌리는 느낌이 들어."
					},
					"speaker": "character_1",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "은빛 마술 종을 흔들자 맑은 빛과 함께 환영 열쇠가 소환되었다."
					},
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "그 순간, 어둠 속 보석 톱니에서 날카로운 기계 마찰음이 울려 퍼졌다."
					},
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "ash",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "ash",
					"type": "speech",
					"content": {
						"korean": "잠깐, 멈춰! 바닥을 봐. 피 묻은 마술 티켓이 떨어져 있잖아."
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "기괴하게 찢어진 서커스 입장권이군."
					}
				},
				{
					"speaker": "ash",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그 마술 종을 함부로 흔들지 마. 환상은 결국 너희를 사로잡을 테니까."
					}
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…소름 끼치는 경고야."
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "티켓이 뜻하는 바가 무엇이든 우리는 안으로 들어가야 한다."
					},
					"speaker": "character_any"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "ash",
					"spot": [
						4,
						3
					]
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "문 앞을 가로막은 기운이 느껴지지 않아? 이대로 들어가는 건 위험해."
					},
					"type": "speech",
					"speaker": "ash"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "환영 열쇠로 닫힌 자물쇠를 풀어내겠다."
					}
				},
				{
					"speaker": "character_3",
					"type": "speech",
					"content": {
						"korean": "…뼛속까지 불길한 기운이 번진다."
					},
					"emotion": "sad"
				},
				{
					"speaker": "ash",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "종소리가 울릴 때마다 이상한 이질감이 퍼지고 있어. 알아채지 못한 거야?"
					}
				},
				{
					"content": {
						"korean": "무슨 일이 있어도 멈추지 않는다. 열쇠를 사용한다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "ash",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "결국 자물쇠를 열었구나. 문 너머에서 뜨거운 유황 열기가 터져 나오고 있어."
					},
					"emotion": "angry",
					"speaker": "ash"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "입구를 막아선 자를 물리쳐야 서커스장 내부로 들어갈 수 있다."
					}
				},
				{
					"speaker": "character_4",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…숨이 막힐 듯한 압박감이다."
					}
				},
				{
					"speaker": "ash",
					"emotion": "angry",
					"content": {
						"korean": "조심해, 지옥의 문지기가 적의를 드러내며 다가오고 있어!"
					},
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"emotion": "happy",
					"content": {
						"korean": "환상에 갇힌 자는 결코 무대를 벗어날 수 없다!"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…여기서 끝낼 수는 없어. 다시 일어선다."
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "크윽… 종소리가… 무대의 기계 바퀴를 움직이고 있다…"
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "문지기가 쓰러졌다. 서커스장 내부로 향하는 문이 열린다."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 문이 열리며 깊은 어둠 속에서 기괴한 환호성이 들려왔다."
					},
					"emotion": "base"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "감히 초대장도 없이 이 지옥 서커스의 입구를 넘어서려 하느냐!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "환영 열쇠는 준비되었다. 길을 비켜라!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "은빛 종소리에 이끌려온 어리석은 손님들이여, 여기서 잿더미가 되어라!"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "…더 이상 물러설 곳은 없다."
					},
					"emotion": "angry",
					"speaker": "character_1",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"유황 연기가 자욱하고 피로 물든 관람석이 둘러싼 지옥의 서커스장.",
			"은빛 마술 종소리가 피어오르며 기괴한 초대가 시작된다.",
			"닫힌 문 너머로 피 냄새와 기계음이 뒤섞여 흘러나온다.",
			"멈출 수 없는 잔혹한 쇼의 막이 올라간다."
		]
	}
} as const;
