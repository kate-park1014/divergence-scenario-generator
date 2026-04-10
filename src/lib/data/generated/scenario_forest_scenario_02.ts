export const scenario_forest_scenario_02 = {
	"scenario_id": "forest_scenario_02_rising1",
	"order": 2,
	"act": "rising",
	"theme": "forest",
	"title": "썩은 숲의 입구",
	"location": "숲 외곽 깊숙한 지점. 포자 군체가 새로 형성되고 있다.",
	"entry_context": "수호대에 입대했다. 카인의 첫 임무 — 숲 외곽 포자 군체 처치.",
	"exit_hook": "초록 머리 요정 리라가 경고한다. \"수호대를 믿지 마.\" 카인은 리라를 보자마자 눈빛이 달라진다.",
	"core_event": "첫 임무를 수행하며 강해진다. 숲 요정 리라를 만나 첫 번째 경고를 듣는다.",
	"boss": {
		"pool_id": "random_boss",
		"role_in_story": "숲 외곽을 잠식하는 포자 군체의 수장.",
		"defeated_line": "…숲은 거짓말하지 않아. 인간이 거짓말하지."
	},
	"fixed": {
		"room_count": 15,
		"boss_at_room": 15
	},
	"actors": {
		"lyra_meadowsong": {
			"id": "mon_c57af7f0-7c43-4883-8bbb-b99a24a34620",
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
			"description": "A Forest Fairy with green hair",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/c4d279a3-d82c-4045-36cc-62cc22e47f00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/204d63b0-dcf0-437a-0622-ab32c3fe8900/public",
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
			"수호대에 입대한 지 사흘째.",
			"카인은 첫 임무를 내렸다 — 숲 외곽 포자 군체 처치.",
			"단순한 임무처럼 보였다.",
			"그러나 숲은, 처음부터 무언가를 숨기고 있었다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"title": "첫 임무",
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
						"korean": "첫 임무야. 숲 외곽 포자 군체 처치."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "같이 안 가?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kain",
					"content": {
						"korean": "너희가 해야 강해져. 뒤에서 본다."
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
			"id": 2,
			"title": "포자 덩굴"
		},
		{
			"id": 3,
			"title": "리라의 경고",
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "lyra_meadowsong",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "lyra_meadowsong",
					"content": {
						"korean": "수호대지? 여기서 뭐 하는 거야."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "포자 처치하러 왔어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lyra_meadowsong",
					"content": {
						"korean": "수호대를 믿지 마. 저들이 숲을 깨우고 있어."
					},
					"emotion": "angry"
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
					"speaker": "lyra_meadowsong",
					"content": {
						"korean": "…언젠가 알게 돼."
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 4,
			"title": "포자 군체"
		},
		{
			"id": 5,
			"title": "수상한 흔적",
			"dialogue": [
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이 포자 흔적 — 숲 안쪽에서 바깥으로 퍼진 거야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "누가 유도한 거 아냐?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…설마."
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 6,
			"title": "포자 사냥꾼"
		},
		{
			"id": 7,
			"title": "잠시 쉬며",
			"dialogue": [
				{
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "아까 그 요정 말 — 계속 걸리네."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_2",
					"content": {
						"korean": "수호대가 숲을 깨운다고?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_3",
					"content": {
						"korean": "카인이 왜 그러겠어. 말이 안 되잖아."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_4",
					"content": {
						"korean": "요정이 거짓말한 거겠지."
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 8,
			"title": "포자 정예"
		},
		{
			"id": 9,
			"title": "카인 합류",
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
						"korean": "잘 하고 있어."
					},
					"emotion": "happy"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아까 요정 봤어? 우릴 경고하던."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kain",
					"content": {
						"korean": "…봤어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kain",
					"content": {
						"korean": "숲 요정들은 인간을 싫어해. 신경 꺼."
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 10,
			"title": "포자 지대"
		},
		{
			"id": 11,
			"title": "깊어지는 숲",
			"dialogue": [
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "카인. 이 포자들 — 왜 전부 숲 안쪽에서 퍼진 거야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kain",
					"content": {
						"korean": "원래 그래. 숲 깊은 곳에 핵이 있으면 바깥으로 퍼지거든."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…그렇구나."
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
			"id": 12,
			"title": "포자 수호자"
		},
		{
			"id": 13,
			"title": "포자 군락"
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
						"korean": "저기야. 저 핵을 부수면 이 구역은 끝나."
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
			"title": "보스",
			"dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "인간이 여기까지 왔군. 숲은 너희를 원하지 않는다."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "비켜. 우린 포자를 막으러 온 거야."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "막는다고. …웃기는 소리."
					},
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…숲은 거짓말하지 않아. 인간이 거짓말하지."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리를 하는 거야."
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
						"korean": "수고했어. 더 깊이 들어간다."
					},
					"emotion": "happy"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "아직 멀었어."
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
