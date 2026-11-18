export const scenario_desert_carnivex_42_05 = {
	"scenario_id": "desert_carnivex_42_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "desert",
	"actors": {
		"khan": {
			"id": "mon_77d18883-7711-4fc4-b04e-7b29652e0ab2",
			"name": {
				"korean": "칸",
				"english": "Khan",
				"japanese": "カーン",
				"chinese": "可汗",
				"french": "Khan",
				"spanish": "Khan",
				"vietnamese": "Khan",
				"thai": "ข่าน",
				"hindi": "खान"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d2797cf2-a388-4974-97e4-54e6af8a0000/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9c40ef7d-3388-44dd-29b3-9ba716fe8b00/public"
		}
	},
	"boss": {
		"pool_id": "pool_BoneScab_Carnivex_V1"
	},
	"prologue": {
		"korean": [
			"뼈와 모래로 뒤덮인 둥지 깊은 곳.",
			"친절했던 길잡이의 가면 뒤에 숨겨진 기괴한 진실이 기다린다.",
			"동료들을 구하고 사막의 비극을 끝내기 위한 마지막 결전을 시작한다."
		]
	},
	"epilogue": {
		"korean": [
			"카르니벡스가 사라진 모래 둥지에는 메마른 정적만이 남았다.",
			"모래 속으로 스며든 호박색 진액과 함께 지독했던 굶주림의 저주도 멈추었다.",
			"오랜 비극을 뒤로하고, 사막 너머에서 시원한 바람이 불어오기 시작했다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "메마른 바람과 함께 뼈 썩는 냄새가 둥지 입구에 가득하다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"action": "enter",
					"speaker": "khan",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						2
					],
					"direction": "up"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 모래 구덩이가 그 길잡이가 숨어 살던 둥지다. 조심해라."
					},
					"emotion": "base",
					"speaker": "khan"
				},
				{
					"type": "speech",
					"content": {
						"korean": "마침내 도달했다. 괴물을 넘어 오아시스로 향하겠다."
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "character_1",
					"emotion": "sad",
					"content": {
						"korean": "…바람 소리가 꼭 비명처럼 들려."
					},
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "바닥의 모래 위로 깊게 파인 뼈마디 자국들이 뒤얽혀 있다."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "지네 괴물이 뼈마디로 짓밟고 다닌 발자국이 확실하다."
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…숨이 턱 막힐 정도로 어둡다."
					},
					"emotion": "sad",
					"speaker": "character_2"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "둥지 중앙, 바위벽마다 곤충의 허물이 매달려 있다."
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "direction",
					"direction": "up",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "khan"
				},
				{
					"type": "speech",
					"speaker": "khan",
					"emotion": "base",
					"content": {
						"korean": "난 여기서 밧줄을 준비하겠다. 놈의 기습에 대비하며 올라가라!"
					}
				},
				{
					"duration_ms": 400,
					"direction": "down",
					"type": "direction",
					"speaker": "khan",
					"action": "exit"
				},
				{
					"content": {
						"korean": "사막의 목마름을 낳은 원흉을 여기서 끊어내겠다."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…발 밑에서 자꾸 기분 나쁜 소리가 나."
					},
					"speaker": "character_3",
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "둥지 가장 깊은 곳, 무거운 정적이 공기를 짓눌러 온다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "더 이상 물러설 곳은 없다. 정체를 드러내라!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…온몸의 털이 바짝 서는 것 같아."
					},
					"emotion": "sad",
					"speaker": "character_4"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "모래 속에서 칼날 마디를 세운 거대한 지네 괴물 카르니벡스가 솟구쳐 오른다."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "친절했던 길잡이는 잊어라! 너희가 마신 노란 물은 녹아내린 검객들의 골수였다!"
					},
					"speaker": "boss",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이제 너희의 뼈도 내 갑옷으로 만들어 주마!"
					},
					"speaker": "boss",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "동료들의 골수를 노린 기괴한 흉물아, 네 탐욕을 베어 넘겨주마!"
					}
				},
				{
					"speaker": "character_1",
					"emotion": "sad",
					"content": {
						"korean": "…저 부러진 칼날 껍질이 너무 기괴해."
					},
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "angry",
					"speaker": "boss",
					"content": {
						"korean": "너희의 뼈도 내 단단한 갑옷의 일부가 될 뿐이다!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…여기서 삼켜질 수는 없다. 다시 일어서라!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "전장에서 버려진 검객들의 뼈 속으로 기어들어 가 골수를 파먹고, 그 부러진 칼날을 껍질에 꽂으며 자라났다!"
					},
					"speaker": "boss",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "더 단단한 껍질을 가지려면 너희의 뼈가 더 필요하단 말이다!"
					},
					"speaker": "boss",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "그 지독한 굶주림을 멈추겠다! 호박색 물병의 노란 물을 모래에 모두 쏟아버려라!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "크아악! 내 골수가… 껍질이 말라붙는다!"
					},
					"emotion": "sad",
					"speaker": "boss",
					"type": "speech"
				},
				{
					"direction": "down",
					"action": "enter",
					"spot": [
						3,
						3
					],
					"speaker": "khan",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "khan",
					"content": {
						"korean": "지금이다! 밧줄로 괴물의 발을 묶었다, 갑각 틈새를 베어라!"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "이걸로 끝이다!"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "갑각 틈새를 꿰뚫자, 카르니벡스는 비명을 지르며 모래 아래로 붕괴해 소멸했다."
					},
					"type": "speech"
				}
			],
			"id": 15
		}
	]
} as const;
