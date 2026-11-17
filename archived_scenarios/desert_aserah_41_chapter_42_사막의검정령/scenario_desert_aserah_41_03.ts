export const scenario_desert_aserah_41_03 = {
	"scenario_id": "desert_aserah_41_03",
	"order": 3,
	"random_boss_title": {
		"korean": "용병 대장"
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "바람 소리가 마치 통곡처럼 사납게 울부짖는 골짜기 입구다."
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "아미르의 몸이 계속 굳어가고 있어. 서둘러야 해."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "direction",
					"speaker": "dune",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 모래 골짜기를 넘어가야 여신의 신전이 나온다네."
					},
					"emotion": "base",
					"speaker": "dune"
				},
				{
					"type": "speech",
					"speaker": "dune",
					"emotion": "sad",
					"content": {
						"korean": "저주가 가슴까지 도달하면 아미르는 영영 돌아올 수 없어."
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…칼바람이 살점을 찢는 것 같이 아프네."
					},
					"type": "speech",
					"speaker": "character_1"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "동료의 저주를 풀기 전까진 멈추지 않는다."
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "골짜기 깊은 곳에서 거친 숨소리와 철갑 소리가 조여온다."
					},
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "dune",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"speaker": "dune",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "조심하게. 여신의 축복을 탐내는 잔혹한 패거리들이 진을 치고 있네."
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "신전으로 가는 길목을 용병들이 가로막고 있다는 뜻인가?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "dune",
					"type": "speech",
					"content": {
						"korean": "{random_boss}라 불리는 자가 신전의 축복을 독점하려 들고 있지."
					},
					"emotion": "base"
				},
				{
					"speaker": "character_2",
					"emotion": "sad",
					"content": {
						"korean": "…뼛속까지 시린 공기가 온몸을 짓눌러."
					},
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "골짜기 바닥에 붉은 모래가 마그마처럼 눌러붙은 흔적이 사방에 가득하다."
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이 바닥에 남은 붉은 모래 마그마 자국은 대체 뭐지?"
					},
					"emotion": "base",
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
					"speaker": "dune",
					"emotion": "base",
					"content": {
						"korean": "단순한 열기가 아니야. 고대에 거대한 분노가 휩쓸고 간 자국이지."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "여신의 신전 근처에 이런 분노의 흔적이 남아있다니."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "character_3",
					"content": {
						"korean": "…붉은 모래에서 짙은 슬픔의 냄새가 나."
					},
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "붉은 마그마 자국을 따라가자 신전의 성문이 눈앞에 드러난다."
					},
					"emotion": "base"
				},
				{
					"action": "enter",
					"speaker": "dune",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "dune",
					"type": "speech",
					"content": {
						"korean": "이 자국은 여신 아세라가 배신당했을 때 흘린 분노의 흔적이라네."
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "여신은 은혜를 모르는 검객들에게 배신당한 검의 정령이었어."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "dune",
					"emotion": "sad",
					"content": {
						"korean": "믿었던 이들에게 쫓겨나 굳어버린 정령의 슬픔이 바로 이 저주라네."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "…그 슬픔이 아무리 깊어도, 아미르를 위해 이 길을 뚫겠다."
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "character_4",
					"content": {
						"korean": "…마음이 울컥거릴 만큼 안타까운 기운이야."
					},
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 여신의 힘만 손에 넣었다면… 이렇게 피를 흘릴 리가…"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그곳엔 축복 같은 건 없다. 오직 배신당한 정령의 분노만 있을 뿐."
					}
				},
				{
					"content": {
						"korean": "{random_boss}가 쓰러지자 바람에 흩날리던 붉은 모래가 조용히 가라앉았다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "아미르를 구하기 위해, 배신당한 정령이 기다리는 신전으로 향한다."
					},
					"speaker": "character_any"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "{random_boss}의 칼날에 밀려 바닥으로 넘어지고 만다."
					},
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "크하하! 여신의 축복도, 신전도 모두 내 차지다!"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…아미르를 이대로 차가운 보석으로 둘 순 없어. 다시 일어선다!"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "골짜기 정상에서 무기를 든 {random_boss}가 막아서며 실소를 터뜨린다."
					}
				},
				{
					"content": {
						"korean": "여신의 축복은 내 거다! 비켜서지 않으면 뼈도 못 추릴 줄 알아라!"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "우린 축복 따위엔 관심 없다. 아미르의 저주를 풀러 갈 뿐이다!"
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "헛소리 마라! 신전에 발을 들일 생각 따위 버려라!"
					},
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"아미르의 다리에서 시작된 보석 저주가 상체로 차갑게 퍼져나간다.",
			"듄의 안내를 받아 여신의 신전으로 통하는 바람의 모래 골짜기로 들어선다.",
			"거친 모래바람 속에 붉게 물든 정령의 슬픔이 일렁이고 있었다."
		]
	}
} as const;
