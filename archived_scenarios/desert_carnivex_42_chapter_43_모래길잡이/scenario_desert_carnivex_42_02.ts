export const scenario_desert_carnivex_42_02 = {
	"scenario_id": "desert_carnivex_42_02",
	"order": 2,
	"random_boss_title": {
		"korean": "모래 도굴꾼"
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
			"메마른 사막 아래, 하얗게 바랜 뼈들이 흩뿌려진 골짜기.",
			"동료들의 타는 목마름을 해결하기 위해 골짜기 깊은 곳으로 발을 내딛는다.",
			"그러나 하얀 뼈 그늘 아래에는 시체를 노리는 불길한 존재가 숨어 있었다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "하얀 유골이 사방에 스산하게 흩어진 골짜기 입구다."
					},
					"type": "speech"
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
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "나는 탐사꾼 듄이다. 물을 찾아 이 뼈 골짜기까지 들어왔나?"
					},
					"speaker": "dune"
				},
				{
					"content": {
						"korean": "조심하게. 이 골짜기엔 시체를 먹는 위험한 존재가 있다는 소문이 돌고 있네."
					},
					"speaker": "dune",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "동료들의 목마름을 해결하려면 골짜기 안쪽으로 나아갈 수밖에 없다."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "…발 밑에서 자꾸 뼈 부러지는 소리가 나."
					},
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "움푹 파인 모래 구덩이에 해골들이 무더기로 묻혀 있다."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "모래 구덩이 속에 부러진 칼날이 박힌 해골이 묻혀 있군."
					},
					"emotion": "base"
				},
				{
					"speaker": "dune",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "오래전 싸움의 흔적 같은데, 해골에 깊게 박힌 칼날이 예사롭지 않군."
					},
					"speaker": "dune"
				},
				{
					"type": "speech",
					"speaker": "character_2",
					"content": {
						"korean": "…바람 소리가 짐승의 울음 같아."
					},
					"emotion": "sad"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "바람이 강하게 불어오며 뼈가루가 모래와 함께 흩날린다."
					},
					"speaker": "narrator"
				},
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "dune"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "외딴 길 쪽에서 누군가 우리 동태를 살피는 기척이 들리네."
					},
					"speaker": "dune"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "누군가 일부러 우리를 외딴 길로 몰아가려는 것 같다."
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…기온이 계속 떨어지는 느낌이야."
					},
					"speaker": "character_3",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "하얀 뼈로 가득한 좁은 외딴 길 끝에서 누군가 모습을 드러낸다."
					},
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "더 이상 물러설 곳이 없다. 정면으로 뚫고 나간다."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "character_4",
					"content": {
						"korean": "…뒤에서 누군가 바짝 쫓아오는 기분이 들어."
					},
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "성자 님의 뜻을 방해하는 자들에게 안식은 없다!"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…여기서 멈출 수는 없다. 다시 전열을 가다듬자."
					},
					"speaker": "character_any"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "길잡이 님의 은혜를… 알지도 못하면서…"
					}
				},
				{
					"content": {
						"korean": "습격자를 물리쳤다. 이제 이 골짜기의 진실을 확인해야겠어."
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "dune"
				},
				{
					"emotion": "base",
					"speaker": "dune",
					"content": {
						"korean": "이 뼈들은 오래 전 전장에서 쓰러진 검객들의 유골이네."
					},
					"type": "speech"
				},
				{
					"speaker": "dune",
					"type": "speech",
					"content": {
						"korean": "그리고… 친절한 길잡이라는 자가 처음 등장한 곳도 바로 그 전장이었지."
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "길잡이라는 자의 정체가 이 비극적인 전장과 얽혀 있음을 알게 되었다."
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "탐험대는 뼈 골짜기에 서린 의구심을 품은 채 다음 오아시스로 향한다."
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "모래 언덕 위에서 무기를 든 자가 길을 막아선다."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "길잡이 님은 사막 사람들을 도우시는 성자이시다! 너희가 그분을 더 찾게 둘 순 없다!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "성자라는 미명 아래 의심스러운 짓을 꾸미는 자를 그냥 둘 순 없다!"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…죽기 살기로 덤벼들고 있어!"
					},
					"speaker": "character_1"
				}
			]
		}
	]
} as const;
