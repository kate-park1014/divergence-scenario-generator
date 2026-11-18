export const scenario_desert_vane_45_01 = {
	"scenario_id": "desert_vane_45_01",
	"order": 1,
	"random_boss_title": {
		"korean": "모래 약탈꾼"
	},
	"act": "intro",
	"theme": "desert",
	"actors": {
		"amir": {
			"id": "mon_0096d602-52ab-4a9c-9cc8-4ff18ed3b655",
			"name": {
				"korean": "아미르",
				"english": "Amir",
				"japanese": "アミール",
				"chinese": "阿米尔",
				"french": "Amir",
				"spanish": "Amir",
				"vietnamese": "Amir",
				"thai": "อาเมียร์",
				"hindi": "अमीर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8cd60fb0-3699-44c4-6425-a3e97eec1800/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/b644dc95-9c27-442e-6dc6-73e5550a0200/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "타는 듯한 사막 입구 오아시스에 누군가가 서 있다."
					},
					"emotion": "base"
				},
				{
					"speaker": "amir",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"content": {
						"korean": "독충에 쏘인 동료를 살리려면 약초가 필요하오. 나는 약초상 아미르라고 합니다."
					},
					"speaker": "amir",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "동료를 살려야 한다. 이 오아시스의 물이라도 마실 수 있나?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "정보상 베인이 도망자들에게 수통을 나눠주고 있소. 보시오, 수통 표면에 호박색 잉크 자국이 묻어 있군요."
					},
					"speaker": "amir"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "…사막의 바람이 목을 죄어온다."
					},
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "amir"
				},
				{
					"content": {
						"korean": "오아시스 샘터 옆, 호박색 잉크 자국이 묻은 수통이 놓여 있다."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "amir",
					"content": {
						"korean": "이 수통의 물을 마시고 갈증을 해결하시오. 약초를 찾으려면 기운을 차려야 하오."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "갈증을 버틸 수 없다. 수통의 오아시스 물을 받아 마신다."
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…목이 찢어질 것처럼 타들어 갔는데 다행이야."
					},
					"speaker": "character_2",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "amir",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "나는 깊은 곳으로 가서 해독제 재료를 더 찾아보겠소. 조심하시오."
					},
					"speaker": "amir",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "고맙다. 우리도 오아시스 안쪽으로 이동하겠다."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"direction": "down",
					"duration_ms": 400,
					"speaker": "amir",
					"type": "direction",
					"action": "exit"
				},
				{
					"content": {
						"korean": "…적이 언제 나타날지 몰라 불안해."
					},
					"type": "speech",
					"speaker": "character_3",
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "오아시스 수풀 너머에서 거친 숨소리가 들려온다."
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "누군가 오아시스 주변을 감시하며 길을 막아서려 한다."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_4",
					"content": {
						"korean": "…긴장으로 손끝이 떨린다."
					},
					"emotion": "sad"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "어리석은 자들… 오아시스의 경고를 무시한 대가다!"
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…여기서 넘어질 수 없다. 다시 전열을 가다듬는다!"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "그 오아시스 물은 위험하다! 당장 거리를 두고 물러서라!"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "동료를 살리기 위한 약초를 찾아야 한다. 길을 막지 마라!"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…일단 앞을 막는 자부터 제압해야겠어."
					},
					"speaker": "character_1"
				}
			],
			"win_dialogue": [
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 그 물을 받아 마신 걸 언젠가 후회하게 될 거다…"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "동료의 독을 치료할 약초를 찾기 위해 검은 모래 협곡으로 나아간다."
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "탐험대는 습격자를 제압하고 다음 재료가 있다는 검은 모래 협곡을 향해 발걸음을 옮긴다."
					},
					"speaker": "narrator"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"붉은 사막의 입구, 달빛 오아시스.",
			"동료가 독충에 쏘여 생사의 갈림길에 섰다.",
			"살리기 위해서는 무슨 물이라도 마셔야 하고, 약초를 찾아내야 한다."
		]
	}
} as const;
