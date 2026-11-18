export const scenario_hell_porcellus_36_04 = {
	"scenario_id": "hell_porcellus_36_04",
	"order": 4,
	"random_boss_title": {
		"korean": "지옥 뱃사공"
	},
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "붉은 등불이 가득한 도박장 입구에 다다랐다."
					},
					"speaker": "narrator"
				},
				{
					"speaker": "mara",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "mara",
					"content": {
						"korean": "반가워요. 난 도박장 조사꾼 마라라고 해요. 탈출 통로 소문을 듣고 조사 중이었죠."
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "지옥을 나가는 배가 정말 이 도박장 너머에 있나?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…공기가 기분 나쁘게 끈적거려."
					},
					"emotion": "sad",
					"speaker": "character_1"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "mara",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "바닥을 보세요. 영혼을 잃고 쓰러진 자들의 흔적이 가득해요."
					},
					"type": "speech",
					"speaker": "mara"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "여기서 도대체 무슨 일이 일어난 거지?"
					},
					"emotion": "base"
				},
				{
					"speaker": "mara",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "돼지 정령과 내기를 한 자들은 한 판도 이기지 못하고 영혼을 빼앗겼다고 해요."
					}
				},
				{
					"type": "speech",
					"speaker": "character_2",
					"emotion": "sad",
					"content": {
						"korean": "…생각만 해도 섬뜩하네."
					}
				}
			],
			"id": 3
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
					"speaker": "mara"
				},
				{
					"content": {
						"korean": "저 앞 선착장 길목은 위험해요. 전 여기까지 조사하고 물러설게요."
					},
					"emotion": "base",
					"speaker": "mara",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "경고는 고맙다. 선착장으로 계속 진행한다."
					}
				},
				{
					"duration_ms": 400,
					"direction": "down",
					"type": "direction",
					"speaker": "mara",
					"action": "exit"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…사방이 정적뿐이야."
					},
					"speaker": "character_3"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "선착장으로 향하는 통로 바닥에 마젠타색 무지개 광채가 흐르고 있다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "바닥에 맴도는 이 기괴한 빛은 대체 어디서 퍼지는 거지?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…어둠 속에서 노 젓는 소리가 들려."
					},
					"speaker": "character_4"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "영혼을 내놓지 않는 자에게 내어줄 배는 없다!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…여기서 멈출 수 없다. 다시 전열을 가다듬자."
					},
					"speaker": "character_any"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "선착장 앞, 뱃사공의 그림자가 길을 막아서며 나아간다."
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "내 배를 타고 나가고 싶나? 그렇다면 돼지 정령님께 영혼을 바쳐라!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "영혼을 바치라는 말로 우리를 속일 순 없다. 무력으로 뚫겠다!"
					},
					"type": "speech"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…절대 당하고만 있진 않겠어."
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 속지 않다니… 지옥 도박판 중앙으로 가면 거부할 수 없을 거다…"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "뱃사공을 물리쳤으니 이제 도박판 중앙으로 진입하자."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "뱃사공이 물러난 선착장 너머, 지옥 도박판 중앙으로 통하는 길문이 열렸다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"붉은 등불이 일렁이는 도박장의 입구.",
			"지옥을 벗어나기 위한 통로가 이 너머에 있다는 소문이 돌고 있다.",
			"그러나 입구에 감도는 기운은 결코 평범하지 않다."
		]
	}
} as const;
