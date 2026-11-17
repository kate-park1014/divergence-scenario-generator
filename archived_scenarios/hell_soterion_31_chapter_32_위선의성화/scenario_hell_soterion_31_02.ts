export const scenario_hell_soterion_31_02 = {
	"scenario_id": "hell_soterion_31_02",
	"order": 2,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"cinder": {
			"id": "mon_7bdc5bba-75ec-4589-827e-193b3c59b022",
			"name": {
				"korean": "신더",
				"english": "Cinder",
				"japanese": "シンダー",
				"chinese": "辛德",
				"french": "Cinder",
				"spanish": "Cinder",
				"vietnamese": "Xinder",
				"thai": "ซินเดอร์",
				"hindi": "सिंडर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/bc21258b-93ac-4669-7330-fdf4e8a57c00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/939a1911-1849-425c-67a4-4958bbdc3300/public"
		},
		"brim": {
			"name": {
				"korean": "브림",
				"english": "Brim",
				"japanese": "ブリム",
				"chinese": "布里姆",
				"french": "Brim",
				"spanish": "Brim",
				"vietnamese": "Brim",
				"thai": "บริม",
				"hindi": "ब्रिम"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/08ad0e4d-214d-43b3-dc3e-ddfba9049300/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/16f1def2-7c33-4558-4b21-9c3e87fa3e00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"유황 냄새가 진동하는 징집소 입구.",
			"천상 신들의 강제 징집과 뇌물 수수 흔적이 사방에 널려 있다.",
			"고발자 신더와 함께 신들의 비리 장부를 모아야 한다.",
			"붉은 문 너머로 향하는 유황 길 위에서, 잔혹한 위선의 증거들이 모습을 드러낸다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "독성 유황 냄새가 진동하는 징집소 입구. 강제 징집 서류 더미가 사방에 흩어져 있다."
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "연옥 주민들을 끌고 간 강제 징집 서류들이 널려 있어."
					},
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						3
					],
					"type": "direction",
					"speaker": "cinder"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "cinder",
					"content": {
						"korean": "천상 신들이 벌인 비리의 증거다. 장부 서류 5장을 모아야 해."
					}
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "…뼛속까지 유황 냄새가 배어드는 느낌이야."
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "cinder",
					"spot": [
						3,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "징집소 깊은 곳으로 가려면 저 단단히 닫힌 붉은 문을 풀어야 해."
					},
					"speaker": "cinder",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "문이 거대한 오팔 장치로 봉인되어 있군."
					}
				},
				{
					"spot": [
						5,
						3
					],
					"speaker": "brim",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "오팔 심판 열쇠를 이용해 보게. 소테리온의 제단 공식처럼 꽂으면 문이 열릴 걸세."
					},
					"speaker": "brim"
				},
				{
					"speaker": "brim",
					"type": "direction",
					"action": "exit",
					"duration_ms": 400,
					"direction": "right"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…저 브림이라는 자의 말을 그대로 믿어도 될지 모르겠군."
					},
					"speaker": "cinder"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "cinder",
					"spot": [
						3,
						3
					],
					"duration_ms": 500
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "세 번째 비리 장부를 찾았어. 뇌물을 받고 징집을 면제해 준 기록이야."
					},
					"type": "speech",
					"speaker": "cinder"
				},
				{
					"content": {
						"korean": "파면 팔수록 신들의 위선이 끝없이 나오는군."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_2",
					"content": {
						"korean": "…분노로 숨이 막혀온다."
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "cinder",
					"content": {
						"korean": "징집 서류에 적힌 이름들이 전부 지워져 있어. 증거를 인멸하려 했던 거야."
					}
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
					"duration_ms": 500,
					"type": "direction",
					"speaker": "cinder",
					"action": "enter"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "cinder",
					"content": {
						"korean": "이건… 소테리온에게 모든 죄를 뒤집어씌운 '하수구 전가 승인서' 사본이다."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "신들이 자신들의 죄악을 소테리온에게 전부 전가했단 말인가?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "그래. 징집소의 비리와 오물까지 전부 소테리온의 책임으로 돌려버린 거지."
					},
					"speaker": "cinder"
				},
				{
					"speaker": "character_3",
					"content": {
						"korean": "…소름이 돋을 정도로 잔인한 짓이야."
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "위선에 저항한 대가는 오직 죽음뿐이다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "수집한 장부를 빼앗길 수는 없어… 다시 일어서자."
					},
					"speaker": "character_any"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "붉은 문 앞을 기괴한 자가 가로막아 서며 살기를 드러낸다."
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "징집소의 비리 장부를 들추는 벌레들, 여기서 매장해주마!"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "신들의 죄악을 숨기게 두지 않는다!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "장부를 전부 모아봤자… 너희가 바꿀 수 있는 건 없다…"
					}
				},
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "cinder",
					"spot": [
						3,
						3
					]
				},
				{
					"speaker": "cinder",
					"content": {
						"korean": "지금이야! 오팔 심판 열쇠를 붉은 문 중앙에 꽂아!"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "오팔 심판 열쇠를 꽂자 붉은 문의 봉인이 해제되었다."
					}
				},
				{
					"content": {
						"korean": "육중한 붉은 문이 열리며 더 깊은 회의실 구역으로 통하는 길 열렸다."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 15
		}
	]
} as const;
