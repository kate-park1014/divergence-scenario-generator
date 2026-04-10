export const scenario_forest_scenario_05 = {
	"scenario_id": "forest_scenario_05_finale",
	"order": 5,
	"act": "climax_finale",
	"theme": "forest",
	"title": "세계수의 심장",
	"location": "숲 가장 깊은 곳. 세계수 아래.",
	"entry_context": "카인의 마지막 임무. 세계수의 심장부로 향한다.",
	"exit_hook": "카인이 직접 세계수를 각성시켜 World Root Titan을 소환한다. 모든 진실이 드러난다.",
	"core_event": "엘라라가 모든 진실을 말한다. 카인이 배신자임이 드러나고 최종결전이 시작된다.",
	"boss": {
		"pool_id": "world_root_titan",
		"role_in_story": "카인이 권력을 위해 각성시킨 세계수의 심장. 통제된 최강의 무기.",
		"defeated_line": "…카인. 결국 네가 소환한 게 너를 삼킨다."
	},
	"fixed": {
		"room_count": 15,
		"boss_at_room": 15
	},
	"actors": {
		"elara": {
			"id": "mon_05460632-579a-4511-848a-be8b7428872a",
			"name": {
				"korean": "엘라라",
				"english": "Elara",
				"japanese": "エラーラ",
				"chinese": "艾拉拉",
				"french": "Élara",
				"spanish": "Elara",
				"vietnamese": "Elara",
				"thai": "เอลารา",
				"hindi": "एलारा"
			},
			"description": "A Forest Fairy with white hair",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/6396e07e-dcdf-4ea7-a5bc-18fc03c6cb00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/b0e157fa-833e-4dee-5ec0-aa8736f01900/public",
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
			"세계수. 이 숲의 뿌리이자 심장.",
			"카인은 마지막 임무라고 했다.",
			"그러나 숲의 가장 깊은 곳에는 — 모든 것을 아는 자가 기다리고 있었다.",
			"그리고 진실은, 예상보다 훨씬 잔인했다."
		]
	},
	"epilogue": {
		"korean": [
			"세계수의 각성이 멈추자, 숲은 오랫동안 잊었던 침묵을 되찾았다.",
			"카인은 쓰러졌다. 그가 쌓아온 권력도, 공포도 함께.",
			"리엔 마을은 돌아오지 않는다. 잠식된 것들은 되돌릴 수 없었다.",
			"그래도 — 숲에 비가 내렸다. 수십 년 만에 처음으로.",
			"복수는 끝났다. 근데 이상하게도, 아직 할 일이 남은 것 같았다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"title": "세계수 앞",
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 나무가 하늘을 가렸다. 뿌리 하나하나가 마을만 했다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이게 세계수야?"
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
						"korean": "그래. 이 안에 포자의 근원이 있어. 여길 끝내면 전부 끝나."
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
			"title": "뿌리 수호자"
		},
		{
			"id": 3,
			"title": "엘라라",
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "elara",
					"duration_ms": 600,
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "elara",
					"content": {
						"korean": "…왔구나. 기다렸어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "누구야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "elara",
					"content": {
						"korean": "엘라라야. 이 숲에서 가장 오래 산 요정."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "elara",
					"content": {
						"korean": "너희한테 해줄 말이 있어."
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 4,
			"title": "세계수 뿌리"
		},
		{
			"id": 5,
			"title": "진실 — 1",
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "elara",
					"duration_ms": 400,
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "elara",
					"content": {
						"korean": "카인은 포자를 통제하는 기술을 갖고 있어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그 말은 리라한테도 들었어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "elara",
					"content": {
						"korean": "리라가 맞아. 카인은 포자를 이용해서 마을을 없애왔어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "elara",
					"content": {
						"korean": "개간지를 넓히고, 수호대의 공포를 유지하고, 권력을 키우려고."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 — 우리 마을도."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "elara",
					"content": {
						"korean": "…응. 카인이 보낸 거야."
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 6,
			"title": "세계수 수호자"
		},
		{
			"id": 7,
			"title": "진실 — 2",
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "elara",
					"duration_ms": 400,
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "elara",
					"content": {
						"korean": "더 있어. 카인이 너희를 수호대에 데려온 것도 우연이 아니야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…무슨 소리야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "elara",
					"content": {
						"korean": "마을 잠식은 미끼였어. 너희를 끌어들이기 위한."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "처음부터 이용한 거야?"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "elara",
					"content": {
						"korean": "세계수를 각성시키려면 강한 분노가 필요해. 카인은 그걸 알고 있었어."
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 8,
			"title": "뿌리 정예"
		},
		{
			"id": 9,
			"title": "진실 — 3",
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "elara",
					"duration_ms": 400,
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "elara",
					"content": {
						"korean": "세계수가 각성하면 — 이 숲 전체가 카인의 무기가 돼."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "막을 수 있어?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "elara",
					"content": {
						"korean": "카인을 쓰러뜨리면 각성이 멈춰. 근데 — 카인은 이미 알고 있어. 네가 여기 있다는 걸."
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 10,
			"title": "잠시 멈춤",
			"dialogue": [
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "처음부터 미끼였어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "복수하고 싶어서 그 손을 잡았는데."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…근데 후회는 없어. 진실을 알았으니까."
					},
					"emotion": "angry"
				}
			]
		},
		{
			"id": 11,
			"title": "세계수 내부"
		},
		{
			"id": 12,
			"title": "뿌리 군락"
		},
		{
			"id": 13,
			"title": "각성의 징조"
		},
		{
			"id": 14,
			"title": "카인의 배신",
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
						"korean": "엘라라랑 얘기했군. 다 들었어?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "우리 마을을 없앤 게 너야."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "kain",
					"content": {
						"korean": "그래."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "처음부터 미끼로 쓴 거야."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "kain",
					"content": {
						"korean": "그것도 맞아. 세계수를 각성시키려면 강한 분노를 가진 자가 필요했거든."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kain",
					"content": {
						"korean": "근데 잘 됐잖아. 넌 강해졌고, 여기까지 왔어."
					},
					"emotion": "happy"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…."
					},
					"emotion": "angry"
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
			"title": "세계수의 심장",
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "카인이 세계수 뿌리에 손을 댔다. 숲 전체가 흔들렸다."
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
						"korean": "이게 끝이야. 세계수의 심장 — World Root Titan."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "막아야 해."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "kain",
					"content": {
						"korean": "막을 수 있으면 막아봐."
					},
					"emotion": "angry"
				},
				{
					"type": "direction",
					"action": "exit",
					"speaker": "kain",
					"duration_ms": 400
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "세계수의 각성이 멈췄다. 숲이 조용해졌다."
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
						"korean": "…대단하네. 정말."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "끝났어. 카인."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "kain",
					"content": {
						"korean": "…그래. 끝났네."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "숲에 비가 내렸다. 오랫동안 잊혀진 소리였다."
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "세계수의 뿌리가 모든 것을 삼켰다."
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
				},
				{
					"type": "speech",
					"speaker": "kain",
					"content": {
						"korean": "포기하지 않는군. …재밌어."
					},
					"emotion": "base"
				}
			]
		}
	]
};
