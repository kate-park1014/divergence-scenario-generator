export const scenario_desert_opalis_43_02 = {
	"scenario_id": "desert_opalis_43_02",
	"order": 2,
	"random_boss_title": {
		"korean": "모래 용병"
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
	"prologue": {
		"korean": [
			"쓰러진 아슈르를 살리기 위해 태엽 소리가 울려 퍼지는 바람 모래 언덕으로 향한다.",
			"언덕너머에서 불어오는 모래바람 속에 감춰진 성녀의 비밀이 숨겨져 있다.",
			"아슈르의 빼앗긴 생기를 되찾기 위해 탐험대는 거친 언덕을 내딛는다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "바람 모래 언덕에 거친 모래바람이 불어온다. 멀리서 작은 태엽 소리가 작게 들려온다."
					},
					"type": "speech"
				},
				{
					"speaker": "dune",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "dune",
					"content": {
						"korean": "난 사막을 조사하는 탐험가 듄이라고 해. 아슈르가 쓰러졌다는 소식을 듣고 언덕까지 따라왔어."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "아슈르의 생기를 회복하려면 언덕 너머 태엽 소리의 정체를 밝혀야 해."
					},
					"speaker": "character_any"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…모래바람 때문에 거칠게 찌르는 눈이 아파."
					}
				}
			],
			"id": 1
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
					"speaker": "dune",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이 언덕의 태엽 소리는 성녀 오팔리스와 관련이 있어. 그녀는 사람이 아니라 대장장이가 만든 태엽 인형이다."
					},
					"type": "speech",
					"speaker": "dune"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "성녀가 사람이 아닌 태엽 인형이었기에 생기 구슬이 작동하고 있던 거였나."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "…듣고도 믿기 힘든 비밀이야."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_2"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "dune"
				},
				{
					"type": "speech",
					"speaker": "dune",
					"content": {
						"korean": "조심해. 성녀를 두둔하는 모래 용병들이 언덕 정상의 길목을 막고 서 있어."
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "진실을 입밖에 내지 못하게 막아서더라도 모래 용병들을 뚫고 전진한다."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"duration_ms": 400,
					"action": "exit",
					"type": "direction",
					"speaker": "dune",
					"direction": "down"
				},
				{
					"speaker": "character_3",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…바람이 사납게 불어오기 시작하네."
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "정상으로 가는 외길에 날카로운 칼날 자국들이 험하게 남아 있다."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "적들이 길목에 매복해 있다. 아슈르를 구하려면 이 가파른 길을 넘어야 해."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_4",
					"content": {
						"korean": "…심장 소리가 귓가에 크게 맴돌아."
					},
					"emotion": "sad"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"emotion": "sad",
					"content": {
						"korean": "성녀님의 진실을… 사람들에게 전하게 둘 순…"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "풀숲 바닥에서 영롱하게 빛나는 금빛 태엽 날개 깃털을 발견했다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "모래 용병이 쓰러지자 언덕의 모래바람이 천천히 차분해졌다."
					},
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "dune",
					"type": "direction",
					"direction": "down"
				},
				{
					"type": "speech",
					"speaker": "dune",
					"content": {
						"korean": "그 금빛 태엽 깃털은 오팔리스의 비밀에 한 걸음 더 다가갈 결정적 단서야."
					},
					"emotion": "happy"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "바람 모래 언덕 정상에서 모래 용병이 무기를 차갑게 쥐어 잡는다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "성녀님의 진실을 들추려는 자들은 여기서 칼날을 맞이해라!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아슈르의 생기를 되찾기 전까지는 결코 멈출 수 없다!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_1",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…피할 곳 없는 싸움이 시작된다."
					}
				}
			],
			"lose_dialogue": [
				{
					"emotion": "angry",
					"content": {
						"korean": "감히 성녀님의 거룩함을 더럽히려 들지 마라."
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…아직은 포기할 수 없다. 다시 전열을 가다듬자."
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 15
		}
	]
} as const;
