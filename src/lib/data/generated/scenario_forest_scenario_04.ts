export const scenario_forest_scenario_04 = {
	"scenario_id": "forest_scenario_04_rising3",
	"order": 4,
	"act": "rising",
	"theme": "forest",
	"title": "포식자의 영역",
	"location": "숲 깊은 곳. 거대 늑대 무리의 영역.",
	"entry_context": "카인과 단둘이 더 깊은 숲으로 향한다. 리라의 말이 아직도 머릿속에 남아있다.",
	"exit_hook": "카인이 말한다. \"리라 걔 말 믿지 마.\" 주인공은 아무 말도 못 한다.",
	"core_event": "카인과 단둘이 깊은 숲을 탐색한다. 카인이 주인공의 신뢰를 다시 쌓으려 한다.",
	"boss": {
		"pool_id": "random_boss",
		"role_in_story": "숲 깊은 곳을 지배하는 포식자의 수장.",
		"defeated_line": "…이 숲에서 진짜 포식자가 누군지 알아?"
	},
	"fixed": {
		"room_count": 15,
		"boss_at_room": 15
	},
	"actors": {
		"kain": {
			"id": "mon_7e2a67da-86f4-413e-8dc3-1523572274b8",
			"name": {
				"korean": "카인",
				"english": "Kain",
				"japanese": "カイン",
				"chinese": "凯恩",
				"french": "Kaïn",
				"spanish": "Kain",
				"vietnamese": "Kain",
				"thai": "เคน",
				"hindi": "केन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0a91acfe-f485-4fd9-4d9c-a6b1dd604200/public",
			"battle_sprite_url": "",
			"attack_sprite_url": "",
			"role": {
				"type": ""
			}
		}
	},
	"prologue": {
		"korean": [
			"이번엔 카인과 단둘이었다.",
			"수호대원도 없고, 요정도 없었다.",
			"그저 카인과 주인공, 그리고 깊어지는 숲.",
			"리라의 말이 계속 머릿속을 맴돌았다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"title": "단둘이",
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "kain",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "kain",
					"content": {
						"korean": "이번엔 나랑 둘이야. 깊이 들어갈수록 위험하거든."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "알겠어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kain",
					"content": {
						"korean": "많이 강해졌어. 처음 봤을 때랑 다르네."
					},
					"emotion": "happy"
				}
			]
		},
		{
			"id": 2,
			"title": "포식자 흔적"
		},
		{
			"id": 3,
			"title": "늑대 발자국",
			"dialogue": [
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이거 늑대 발자국이야? 크기가 비정상이네."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "kain",
					"duration_ms": 400,
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "kain",
					"content": {
						"korean": "숲이 깊을수록 존재들도 커져. 조심해."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "exit",
					"speaker": "kain",
					"duration_ms": 400
				}
			]
		},
		{
			"id": 4,
			"title": "포식자 무리"
		},
		{
			"id": 5,
			"title": "카인의 설득",
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "kain",
					"duration_ms": 400,
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "kain",
					"content": {
						"korean": "리라 그 요정 — 아직도 신경 쓰여?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…아니야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kain",
					"content": {
						"korean": "숲 요정들은 수호대를 없애려고 해. 인간이 숲을 개간하는 게 싫거든."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kain",
					"content": {
						"korean": "거짓말로 우릴 갈라놓으려는 거야."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "exit",
					"speaker": "kain",
					"duration_ms": 400
				}
			]
		},
		{
			"id": 6,
			"title": "포식자 수호자"
		},
		{
			"id": 7,
			"title": "잠시 쉬며",
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "카인의 말이 맞는 것 같기도 했다. 그러나."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "왜 포자들은 나한테 안 덤볐을까. 그게 계속 걸려."
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 8,
			"title": "포식자 정예"
		},
		{
			"id": 9,
			"title": "카인의 속내",
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "kain",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "kain",
					"content": {
						"korean": "너 리엔 마을 출신이지. 가족이 있었어?"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…있었어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "kain",
					"content": {
						"korean": "미안해. 내가 더 빨리 갔어야 했는데."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…괜찮아."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "괜찮지 않았다. 근데 카인 앞에서 그 말밖에 나오지 않았다."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "exit",
					"speaker": "kain",
					"duration_ms": 400
				}
			]
		},
		{
			"id": 10,
			"title": "포식자 구역"
		},
		{
			"id": 11,
			"title": "어둠 속 울음"
		},
		{
			"id": 12,
			"title": "포식자 무리 II"
		},
		{
			"id": 13,
			"title": "포식자 군락"
		},
		{
			"id": 14,
			"title": "보스 앞",
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "kain",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "kain",
					"content": {
						"korean": "저기야. 저걸 쓰러뜨리면 이 구역은 끝나."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "알겠어."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "exit",
					"speaker": "kain",
					"duration_ms": 400
				}
			]
		},
		{
			"id": 15,
			"title": "포식자의 왕",
			"dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…인간. 이 깊은 곳까지 왔군."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "비켜."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "카인이 보낸 개가. …불쌍한 것."
					},
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…이 숲에서 진짜 포식자가 누군지 알아? 카인이야."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "kain",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "kain",
					"content": {
						"korean": "수고했어. 리라 걔 말 믿지 마. 숲 존재들은 전부 거짓말쟁이야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…알겠어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "이젠 아무것도 모르겠다."
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "아직 진실을 마주할 준비가 안 됐군."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…다시 온다."
					},
					"emotion": "angry"
				}
			]
		}
	]
};
