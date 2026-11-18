export const scenario_desert_sirocco_47_01 = {
	"scenario_id": "desert_sirocco_47_01",
	"order": 1,
	"random_boss_title": {
		"korean": "도굴꾼"
	},
	"act": "intro",
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
	"prologue": {
		"korean": [
			"모래폭풍이 휩쓰는 광활한 사막의 입구.",
			"길목을 가로막은 깃발을 치우자 사막의 바람이 거칠게 불어오기 시작한다.",
			"마을로 돌아갈 길마저 끊긴 지금, 탐험대는 폭풍의 근원을 찾아 사막 깊은 곳으로 향한다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"speaker": "dune",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"direction": "up"
				},
				{
					"content": {
						"korean": "나는 사막 입구의 길잡이 듄이다. 모래폭풍 때문에 위험해진 사막 내부 사정을 살피고 있었다."
					},
					"emotion": "base",
					"speaker": "dune",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "사막 입구 바위마다 촘촘하게 새겨진 깊은 칼자국들이 나 있다."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "바위를 난도질해 놓은 이 날카로운 흔적들은 대체 뭐지?"
					}
				},
				{
					"speaker": "character_1",
					"emotion": "sad",
					"content": {
						"korean": "…바람 소리가 마치 짐승 울음소리 같아."
					},
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"direction": "up",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "dune"
				},
				{
					"content": {
						"korean": "사막 길목에 서 있는 결투의 깃발이 모래폭풍의 기운을 끌어당기고 있다."
					},
					"speaker": "dune",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "길을 가로막는 결투의 깃발 따위, 뽑아서 던져버리겠다."
					}
				},
				{
					"content": {
						"korean": "…모래 먼지가 눈을 가리네."
					},
					"speaker": "character_2",
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "깃발이 모래 바닥에 떨어지자 사막 전체에서 거대한 모래폭풍이 일어난다."
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "깃발을 던지자마자 폭풍이 휘몰아치며 길을 삼키고 있어."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…발이 모래 속에 푹푹 빠진다."
					},
					"emotion": "sad",
					"speaker": "character_3"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "사품치는 모래 먼지 너머에서 누군가 거칠게 무기를 휘두르는 소리가 들린다."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "누군가 모래폭풍 속에서 우리를 가로막으려고 다가오고 있다."
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…바람에 섞인 칼날 소리가 소름 돋아."
					},
					"speaker": "character_4",
					"emotion": "sad"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "어리석은 자들아! 폭풍에 묻히기 전에 당장 마을로 돌아가라!"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "이대로 물러설 수는 없다. 다시 도전하겠다."
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "무슨 짓을 한 거냐! 결투의 깃발을 건드리면 모래폭풍의 재앙이 사막을 삼켜버린다!"
					}
				},
				{
					"content": {
						"korean": "사막 길을 뚫기 위해 들어왔다. 막아선다면 밀어내고 지나가겠다!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"emotion": "sad",
					"content": {
						"korean": "…저 자의 살기가 보통이 아니야."
					}
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "크윽… 폭풍이 상단 통행로를 완전히 무너뜨렸다… 너희가 갈 수 있는 길은 이제 없다…"
					},
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "마을로 돌아갈 길이 끊겼다면 폭풍의 근원을 직접 추적하겠다."
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "통행로가 끊어진 것을 확인한 탐험대는 폭풍의 흔적이 시작되는 붉은 바위 골짜기를 향해 이동했다."
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			]
		}
	]
} as const;
