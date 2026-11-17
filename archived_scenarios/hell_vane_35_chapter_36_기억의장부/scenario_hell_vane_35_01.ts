export const scenario_hell_vane_35_01 = {
	"scenario_id": "hell_vane_35_01",
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
					"emotion": "base",
					"content": {
						"korean": "황량한 핏빛 안개 사이로 묵직한 철문이 모습을 드러낸다."
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_1"
				},
				{
					"direction": "up",
					"speaker": "ash",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "ash",
					"type": "speech",
					"content": {
						"korean": "어서 와. 회수소 입구의 책상 위를 잘 찾아봐."
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "책상 위에 붉은 서명용 잉크병이 놓여 있어."
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "잉크병 밑면에 대마법재판관의 옛 이름이 새겨져 있네."
					},
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "ash",
					"direction": "up",
					"spot": [
						3,
						3
					],
					"type": "direction"
				},
				{
					"speaker": "ash",
					"content": {
						"korean": "그 잉크병은 회수소 수장 베인이 쓰던 거 지."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_2"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "안쪽 선반에 붉게 빛나는 종이 묶음들이 보여."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "핏빛 영혼 차용증들이 뺴곡하게 꽂혀 있어."
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"speaker": "ash",
					"direction": "up"
				},
				{
					"speaker": "ash",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "찾았어! 동료의 이름이 적힌 차용증이야."
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "동료의 영혼과 기억이 이 문서에 묶여 있었군."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "character_3",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "불태워서 계약을 끝내버리겠어."
					},
					"emotion": "angry",
					"type": "speech"
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
					"type": "direction",
					"duration_ms": 500,
					"speaker": "ash",
					"direction": "up"
				},
				{
					"speaker": "ash",
					"emotion": "sad",
					"content": {
						"korean": "잠깐! 차용증을 함부로 태우면 안 돼!"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "지옥 규칙상 차용증을 태우면 이자가 증가해서 영혼이 파기된다고 들었어."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "하지만 이대로 둔다면 동료는 영원히 지옥의 노예야."
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_4",
					"type": "speech"
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "{random_boss}의 칼날에 차용증을 빼앗겼다."
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "어리석은 자여, 체납자의 영혼은 영원히 갇히리라."
					},
					"emotion": "happy",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"emotion": "sad"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "경비대장이 무릎을 꿇었다."
					},
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "차용증을 태우는 위험을 감수하더라도 앞으로 나아가자."
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"direction": "up",
					"spot": [
						3,
						3
					],
					"type": "direction",
					"speaker": "ash",
					"duration_ms": 500
				},
				{
					"speaker": "ash",
					"type": "speech",
					"content": {
						"korean": "다음 보관 창고로 가면 베인의 비밀을 더 알 수 있을 거야."
					},
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "불길한 기운과 함께 회수소 경비대장이 막아선다."
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "{random_boss}의 허가 없이 영혼 차용증에 손댈 수 없다!"
					},
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "경고 따위 무시하고 차용증을 되찾겠다."
					},
					"type": "speech",
					"speaker": "character_any"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"지옥의 영혼 회수소, 핏빛 안개가 낮게 깔린 곳.",
			"잃어버린 동료의 기억을 찾기 위해 이 붉은 문을 넘었다.",
			"영혼 정보상 애쉬가 숨겨진 차용증의 행방을 알고 있다.",
			"동료의 넋을 묶어둔 핏빛 계약을 끊어내야 한다."
		]
	}
} as const;
