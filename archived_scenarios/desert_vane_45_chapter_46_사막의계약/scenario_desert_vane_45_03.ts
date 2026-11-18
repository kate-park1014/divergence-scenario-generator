export const scenario_desert_vane_45_03 = {
	"scenario_id": "desert_vane_45_03",
	"order": 3,
	"random_boss_title": {
		"korean": "환영술사"
	},
	"act": "rising",
	"theme": "desert",
	"actors": {
		"dune": {
			"id": "mon_fc976b75-f009-4bf2-b660-a3053c95d668",
			"name": {
				"korean": "듄",
				"english": "Dune",
				"japanese": "デューン",
				"chinese": "沙丘",
				"french": "Dune",
				"spanish": "Dune",
				"vietnamese": "Dune",
				"thai": "ดูน",
				"hindi": "ड्यून"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/7568ec11-0329-44b4-740a-71b25ef62400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/ba7095b5-0d99-40bd-1155-b57701c00f00/public"
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
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "바람조차 모래를 머금어 텁텁하다. 약재가 정말 이 은신처에 있을까."
					}
				},
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "dune",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "dune",
					"content": {
						"korean": "외부인은 멈춰라. 난 사막의 물자를 살피는 용병 듄이다. 약재를 찾는 거라면 거친 길을 택했군."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "우린 동료를 살릴 약이 필요하다. 은신처 내부로 지나가게 해다오."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…입술이 바짝 마른다."
					},
					"emotion": "sad",
					"speaker": "character_1",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "dune"
				},
				{
					"content": {
						"korean": "보아라. 은신처 구석마다 피어오르는 보랏빛 영혼 연기… 이건 베인이 보낸 물자 상자에서 나오는 거다."
					},
					"emotion": "base",
					"speaker": "dune",
					"type": "speech"
				},
				{
					"content": {
						"korean": "정보상 베인이 왜 이런 물자를 사막 은신처에 보낸 거지?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "연기가 불길하게 흩어지고 있어."
					},
					"emotion": "sad",
					"speaker": "character_2",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "dune"
				},
				{
					"type": "speech",
					"speaker": "dune",
					"content": {
						"korean": "소문에 따르면 베인이 준 물을 마신 자는 목숨과 무기를 바쳐야 하는 생명의 빚에 얽매인다고 한다."
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "사막 입구 오아시스에서 마신 수통의 물… 우리 손끝이 가려웠던 게 그 때문이었나!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"direction": "down",
					"speaker": "dune",
					"type": "direction",
					"action": "exit",
					"duration_ms": 400
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…등골이 서늘해진다."
					},
					"speaker": "character_3",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "보랏빛 영혼 연기가 은신처 안쪽 통로 전체를 짙게 덮기 시작했다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "환영이 눈앞을 어지럽히고 있어. 누군가 막아서려 한다."
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "…숨이 막혀와."
					},
					"emotion": "sad",
					"speaker": "character_4",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "환영에 휩싸여 헛칼질만 하는구나. 돌아서라."
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…동료를 위해 여기서 넘어질 수는 없어. 다시 차분히 허점을 찾는다."
					}
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "자욱한 연기 속에서 환영을 조종하는 자가 길을 막아선다."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "더 이상 나아가지 마라. 이 은신처는 누구도 통과할 수 없다!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "동료를 살릴 약을 구해야 한다. 물러서지 않는다!"
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…무기를 쥔 손에 힘이 들어간다."
					},
					"speaker": "character_1",
					"type": "speech"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "내 환영을 뚫다니… 하지만 베인의 빚에서 벗어날 수는 없을 것이다."
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "해독제 재료는 구했다. 이제 마지막 재료가 있는 지하 유적으로 간다!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "은신처를 지키던 자가 쓰러지자 보랏빛 연기가 걷히고 유적으로 향하는 문이 열렸다."
					},
					"type": "speech",
					"speaker": "narrator"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"동료를 사막 독충에게 잃을 수는 없다.",
			"약재를 찾기 위해 발을 들인 곳은 메마른 바람 은신처.",
			"그곳에는 보랏빛 연기와 마주해야 할 진실이 기다리고 있었다."
		]
	}
} as const;
