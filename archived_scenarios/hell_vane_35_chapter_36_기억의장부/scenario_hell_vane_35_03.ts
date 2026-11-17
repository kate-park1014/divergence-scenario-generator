export const scenario_hell_vane_35_03 = {
	"scenario_id": "hell_vane_35_03",
	"order": 3,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"mara": {
			"id": "mon_94e5bffe-d3cd-4e5e-a174-633174784043",
			"name": {
				"korean": "마라",
				"english": "Mara",
				"japanese": "マーラ",
				"chinese": "玛拉",
				"french": "Mara",
				"spanish": "Mara",
				"vietnamese": "Mara",
				"thai": "มารา",
				"hindi": "मारा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/801457b4-3ecc-41f5-e450-73d6ce8eb200/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9bfac7d4-6bfd-49b0-5ba4-a25419c71400/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"지옥의 금지된 비술이 숨겨진 연구실.",
			"마도구와 핏빛 서류 더미 사이에서 베인의 흔적을 쫓는다.",
			"대마법재판관의 인장이 찍힌 계약서가 마침내 실체를 드러낸다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "어두운 연구실 안, 기괴한 마법 시약 냄새가 진동한다."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "서류가 너무 많아. 어디서부터 수색해야 하지?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "mara",
					"type": "direction"
				},
				{
					"content": {
						"korean": "베인이 사용하던 비밀 책상은 안쪽에 있어. 따라와."
					},
					"type": "speech",
					"speaker": "mara",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "지옥 법집행관들이 오기 전에 빨리 찾아내야 해."
					},
					"emotion": "angry",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "mara",
					"type": "direction"
				},
				{
					"speaker": "mara",
					"content": {
						"korean": "웻, 조용히 해! 비술 연구실 전체에 감시 경계진이 켜져 있어."
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "…공기가 너무 무겁다."
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "베인은 이 연구실에서 영혼을 강제로 쪼개는 법을 연구했어."
					},
					"speaker": "mara"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "영혼을 쪼개는 마도구라니, 비술을 악용하고 있던 거였나."
					},
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "mara",
					"spot": [
						2,
						3
					]
				},
				{
					"emotion": "base",
					"speaker": "mara",
					"content": {
						"korean": "바닥에 뭐가 떨어져 있어. 은빛 리볼버의 탄피 조각이야."
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "탄피 안쪽에 대마법재판소의 영혼 담보용 마법진이 새겨져 있군!"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "mara",
					"content": {
						"korean": "이건 법집행을 빙자해 영혼을 낚아채던 마도구 탄환이었어."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "베인의 무기 자체가 무서운 담보 계약의 결정체였던 거야."
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "mara",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "이 서류함 깊은 곳에서 찾았어! 대마법재판관의 붉은 인장이 찍힌 영혼 담보 계약서야."
					},
					"type": "speech",
					"speaker": "mara"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "베인이 지옥 전체의 영혼을 독점하려 한 결정적 증거다."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "이 차가운 기운… 전율이 가시질 않네."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "경보가 울렸어! 지옥 법집행관이 바로 앞까지 밀어닥쳤다!"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "angry",
					"content": {
						"korean": "금지된 비밀 연구실에 침입해 장부를 손대한 죗값을 치러라!"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "대마법재판관의 인장이 찍힌 영혼 담보 계약서는 이미 확보했다."
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "{random_boss}의 이름으로, 증거와 함께 너희의 영혼을 소멸시키겠다!"
					},
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "크악… 마라 녀석과 탐험대가… 계약서를 빼앗다니…"
					}
				},
				{
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "베인이 숨기려던 지옥의 비밀 계약을 마침내 낱낱이 파헤쳤다."
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "지옥 법집행관이 무너지며, 영혼 담보 계약서가 탐험대의 손에 선명히 남아 빛났다."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "지옥의 법률을 어긴 침입자의 당연한 결말이다."
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "이 계약서를 쥐고 여기서 무너질 순 없어… 다시 일어선다!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				}
			]
		}
	]
} as const;
