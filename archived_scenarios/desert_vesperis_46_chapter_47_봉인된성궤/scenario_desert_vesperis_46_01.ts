export const scenario_desert_vesperis_46_01 = {
	"scenario_id": "desert_vesperis_46_01",
	"order": 1,
	"random_boss_title": {
		"korean": "약초꾼"
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
			"거친 모래 폭풍을 피해 들어선 바위굴.",
			"그곳에는 무적의 힘을 준다는 성물의 소문이 잠들어 있었다.",
			"제단의 검을 손에 쥐는 순간, 사원의 문이 완전히 닫혔다.",
			"이제 갇힌 길을 열기 위해 사원의 깊은 곳으로 향해야 한다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "모래 폭풍을 피해 들어온 바위굴 입구에 오래된 제단이 서 있다."
					},
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"speaker": "dune",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "난 성물의 소문을 좇아 사막을 유랑하는 안내자 듄이다. 모래 폭풍을 잘 피했군."
					},
					"speaker": "dune",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "제단에 꽂힌 저 검이 소문 속의 무기인가 보군."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "입구 제단의 무기에 반짝이는 금빛 먼지가 자욱하게 묻어 있다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "검을 뽑아 들자 바닥이 흔들리며 입구의 거대한 돌문이 쿵 하고 닫혀 버렸다!"
					},
					"speaker": "narrator",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "검을 칼집에서 빼낸 탓에 사원의 봉인 기믹이 작동했어."
					}
				},
				{
					"speaker": "character_1",
					"emotion": "sad",
					"content": {
						"korean": "…갑자기 사원 전체가 울리다니."
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"content": {
						"korean": "입구가 봉쇄되었으니 안쪽으로 나아갈 수밖에 없어."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"speaker": "dune",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"speaker": "dune",
					"type": "speech",
					"content": {
						"korean": "여기 칼자루와 벽면 곳곳에도 검은 흔적 대신 금빛 먼지가 진하게 묻어 있네."
					}
				},
				{
					"content": {
						"korean": "이 먼지는 단순한 흙이 아니라 사원 특유의 기운 같군."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "character_2",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…발밑에서 모래가 굳어가는 것 같아."
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "dune",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "dune",
					"content": {
						"korean": "이 앞은 사원의 통로다. 나는 성물의 기운이 무서워 더 이상 깊이 못 가겠어."
					}
				},
				{
					"content": {
						"korean": "안내 고맙다. 탈출구는 우리가 직접 사원 중심부에서 찾아보지."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "dune",
					"duration_ms": 400,
					"action": "exit",
					"type": "direction",
					"direction": "down"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…바람 소리가 기괴하게 바뀌었어."
					},
					"speaker": "character_3",
					"emotion": "angry"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "통로 끝에서 누군가 족제비처럼 씩씩거리며 다가오는 소리가 들린다."
					}
				},
				{
					"content": {
						"korean": "앞에서 살기를 띤 자가 길을 막어서려고 기다리고 있다."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "…손잡이를 쥔 손에 힘이 들어간다."
					},
					"speaker": "character_4",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "무모하게 제단의 검을 뽑아 사원의 분노를 부르다니! 네놈들 때문에 갇혔다!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "갇힌 길을 열고 나가기 위해 사원의 중심부로 갈 뿐이다. 막지 마라!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "…어쩔 수 없지, 싸울 수밖에."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_1"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "사원의 분노에 짓눌려 여기서 끝날 셈이냐!"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…아직 전열을 정비할 기회가 있다. 물러서지 않는다."
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 검을 거두지 않는 한 사원은 닫힌 채 멈추지 않을 거다…"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "닫힌 입구를 여는 단서는 사원 중심부에 있을 테니 계속 이동하자."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "사원의 중심부로 이어진 바위 통로 너머로 메마른 오아시스의 바람이 불어온다."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"id": 15
		}
	]
} as const;
