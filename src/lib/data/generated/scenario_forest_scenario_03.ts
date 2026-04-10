export const scenario_forest_scenario_03 = {
	"scenario_id": "forest_scenario_03_rising2",
	"order": 3,
	"act": "rising",
	"theme": "forest",
	"title": "어둠이 스민 나무들",
	"location": "짙은 어둠 에너지에 오염된 숲 한복판.",
	"entry_context": "숲 외곽 임무를 마쳤다. 카인의 지시로 더 깊은 숲 안쪽으로 들어간다.",
	"exit_hook": "\"카인이 포자를 직접 조종해. 너희 마을도 카인이 보낸 거야.\" 주인공, 처음으로 흔들린다.",
	"core_event": "수호대원들이 하나씩 사라진다. 카인한테 쫓기던 파란 머리 요정 리라를 발견하고 진실의 실마리를 얻는다.",
	"boss": {
		"pool_id": "random_boss",
		"role_in_story": "어둠 에너지에 오염된 숲의 수호자.",
		"defeated_line": "…카인. 카인을 조심해."
	},
	"fixed": {
		"room_count": 15,
		"boss_at_room": 15
	},
	"actors": {
		"lyra_meadowlight": {
			"id": "mon_4a825197-e7a3-49c3-85c7-c8d02c6b544a",
			"name": {
				"korean": "리라",
				"english": "Lyra",
				"japanese": "リラ",
				"chinese": "莉拉",
				"french": "Lyra",
				"spanish": "Lyra",
				"vietnamese": "Lyra",
				"thai": "ไลรา",
				"hindi": "लायरा"
			},
			"description": "A Forest Fairy with blue hair",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/ef0e0271-11f9-4203-95b7-ef4031182d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0780dbb4-fa82-4b0c-955e-8c9bb1671900/public",
			"attack_sprite_url": "",
			"role": {
				"type": ""
			}
		},
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
			"숲이 깊어질수록 어둠도 짙어졌다.",
			"수호대는 더 안쪽으로 전진했다.",
			"그런데 — 하나씩, 소리도 없이 사라지기 시작했다.",
			"그리고 쫓기는 자가 있었다. 카인이 찾고 있는 누군가가."
		]
	},
	"rooms": [
		{
			"id": 1,
			"title": "어둠의 숲",
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "숲 안쪽으로 깊이 들어올수록 빛이 사라졌다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…여기서부터 분위기가 다르네."
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 2,
			"title": "어둠 포자"
		},
		{
			"id": 3,
			"title": "첫 번째 실종",
			"dialogue": [
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "잠깐. 한 명 어디 갔어?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "방금까지 옆에 있었는데."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "흔적도 없었다. 소리도 없었다."
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 4,
			"title": "어둠 군체"
		},
		{
			"id": 5,
			"title": "두 번째 실종",
			"dialogue": [
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "또 없어졌어. 어떻게 이럴 수가."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…계속 가자."
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 6,
			"title": "어둠 수호자"
		},
		{
			"id": 7,
			"title": "잠시 멈춤",
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
						"korean": "사람이 줄었네. 여기는 원래 그래."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "포자 흔적도 없는데 사람이 사라지는 게 말이 돼?"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "kain",
					"content": {
						"korean": "숲이 깊으면 그런 일이 생겨. 계속 전진해."
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
			"id": 8,
			"title": "어둠 정예"
		},
		{
			"id": 9,
			"title": "리라 발견",
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "lyra_meadowlight",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "lyra_meadowlight",
					"content": {
						"korean": "…살아있어? 수호대잖아."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "여기 왜 있어. 쫓기고 있어?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lyra_meadowlight",
					"content": {
						"korean": "카인한테. 내가 알고 있거든. 카인이 숨기고 싶은 걸."
					},
					"emotion": "angry"
				}
			]
		},
		{
			"id": 10,
			"title": "숲 속 은신처",
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "lyra_meadowlight",
					"duration_ms": 400,
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "lyra_meadowlight",
					"content": {
						"korean": "카인은 포자를 통제하는 방법을 알고 있어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lyra_meadowlight",
					"content": {
						"korean": "포자 존재들이 왜 수호대 있을 때만 마을을 덮치는 줄 알아?"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "lyra_meadowlight",
					"content": {
						"korean": "카인이 보내는 거야. 직접."
					},
					"emotion": "angry"
				}
			]
		},
		{
			"id": 11,
			"title": "어둠 추격대"
		},
		{
			"id": 12,
			"title": "오염된 구역"
		},
		{
			"id": 13,
			"title": "어둠 군락"
		},
		{
			"id": 14,
			"title": "진실",
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "lyra_meadowlight",
					"duration_ms": 400,
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "lyra_meadowlight",
					"content": {
						"korean": "리엔 마을. 너희 마을도 카인이 보낸 거야."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "거짓말이야."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "lyra_meadowlight",
					"content": {
						"korean": "…믿기 싫겠지. 근데 사실이야."
					},
					"emotion": "sad"
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
						"korean": "여기 있었군. 그 요정."
					},
					"emotion": "angry"
				},
				{
					"type": "direction",
					"action": "exit",
					"speaker": "lyra_meadowlight",
					"duration_ms": 300
				},
				{
					"type": "speech",
					"speaker": "kain",
					"content": {
						"korean": "숲 요정들은 거짓말쟁이야. 신경 꺼."
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
						"korean": "알겠다고 했지만 — 머릿속에서 리라의 말이 지워지지 않았다."
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
			"title": "어둠의 수호자",
			"dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "인간이 여기까지. 카인의 개들이군."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "카인의 개? 우린 수호대야."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…같은 말이야."
					},
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…카인을. 카인을 조심해."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "왜 다들 그 말을 하는 거야."
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
						"korean": "수고했어. 다음 임무 준비해."
					},
					"emotion": "happy"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…응."
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "카인의 진실을 알기 전에 쓰러지는군."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…아직 끝나지 않았어."
					},
					"emotion": "angry"
				}
			]
		}
	]
};
