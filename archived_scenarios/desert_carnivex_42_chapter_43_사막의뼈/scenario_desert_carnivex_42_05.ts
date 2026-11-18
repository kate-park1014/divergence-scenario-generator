export const scenario_desert_carnivex_42_05 = {
	"scenario_id": "desert_carnivex_42_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "desert",
	"actors": {
		"amir": {
			"id": "mon_0096d602-52ab-4a9c-9cc8-4ff18ed3b655",
			"name": {
				"korean": "아미르",
				"english": "Amir",
				"japanese": "アミール",
				"chinese": "阿米尔",
				"french": "Amir",
				"spanish": "Amir",
				"vietnamese": "Amir",
				"thai": "อาเมียร์",
				"hindi": "अमीर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8cd60fb0-3699-44c4-6425-a3e97eec1800/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/b644dc95-9c27-442e-6dc6-73e5550a0200/public"
		}
	},
	"boss": {
		"pool_id": "pool_BoneScab_Carnivex_V1"
	},
	"prologue": {
		"korean": [
			"뼈로 가득 찬 사막 아래의 지하 동굴.",
			"몸을 가까스로 추스른 아미르와 함께 마침내 깊은 곳으로 발을 내딛는다.",
			"친절한 얼굴 뒤에 숨겨진 길잡이의 진짜 정체와 마주할 시간이다."
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
					"duration_ms": 500,
					"speaker": "amir",
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "amir",
					"emotion": "sad",
					"content": {
						"korean": "몸은 겨우 추슬렀지만... 이 동굴의 기운은 소름 끼치도록 차가워."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "바닥에 깔린 게 전부 사람의 뼈다."
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "친절했던 길잡이가 우리를 인도한 목적지가 바로 여기야."
					}
				},
				{
					"speaker": "character_1",
					"emotion": "sad",
					"content": {
						"korean": "뼛속까지 스며드는 퀴퀴한 냄새가 맴돈다."
					},
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "amir",
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "뼈 마디마다 노란 호박색 진액이 들러붙어 있어."
					},
					"emotion": "sad",
					"speaker": "amir"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "카사이가 말했던 그 독물이야. 뼈를 녹여 사람을 쓰러뜨리는 진액."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "길잡이는 처음부터 우리 뼈를 노리고 영약이라 속여 마시게 한 거였어."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "벽면 전체에 축축한 독기가 번져 있어."
					},
					"emotion": "base",
					"speaker": "character_2"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "amir",
					"type": "direction"
				},
				{
					"speaker": "amir",
					"emotion": "sad",
					"content": {
						"korean": "동굴 구석에 백골빛 껍질 조각들이 널려 있어."
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "듄의 말대로 이건 사람의 껍질이 아니야. 곤충의 단단한 갑각이다."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "놈은 사막 아래 숨어 전사들의 뼈를 파먹으며 거대해진 벌레 괴물이야."
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "character_3",
					"emotion": "sad",
					"content": {
						"korean": "어둠 속에서 무언가 기어 다니는 서걱거림이 들린다."
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "amir"
				},
				{
					"type": "speech",
					"speaker": "amir",
					"emotion": "angry",
					"content": {
						"korean": "바위벽에 깊게 그어진 긁힌 자국... 케메트가 말했던 그 자국이야."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "괴물이 부러진 청동 칼날과 뼈마디로 벽을 긁으며 껍질을 다듬은 흔적이다."
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "이제 길잡이라는 가면을 벗겨낼 때다."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "더 이상 뒤로 물러설 곳은 없다."
					},
					"emotion": "base",
					"speaker": "character_4"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"speaker": "boss",
					"emotion": "happy",
					"content": {
						"korean": "큭큭, 약해 빠진 뼈다귀들이 감히 이 카르니벡스의 갑옷을 뚫을 수 있을 것 같았느냐!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "뼈가 녹아내릴지언정 이대로 끝내진 않는다!"
					},
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "어둠 속에서 백골빛 껍질과 청동 갑각을 이은 거대한 지네 카르니벡스가 솟구쳐 오른다."
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "큭큭큭... 드디어 도착했구나. 친절한 길잡이를 끝까지 믿고 따라온 어리석은 놈들아!"
					},
					"emotion": "happy",
					"speaker": "boss"
				},
				{
					"speaker": "amir",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "네놈이 바로 검객들의 뼈를 탐하던 괴물, 카르니벡스였군!"
					},
					"emotion": "angry",
					"speaker": "amir",
					"type": "speech"
				},
				{
					"content": {
						"korean": "너희가 마신 영약은 녹아내린 검객들의 골수였지! 이제 너희 뼈로 내 갑옷을 완성해 주마!"
					},
					"emotion": "angry",
					"speaker": "boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "더 이상 네 탐욕에 희생될 목숨은 없다!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"emotion": "angry",
					"content": {
						"korean": "크아아악! 내 청동 마디가... 백골 갑각이 부서지다니!"
					},
					"speaker": "boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"emotion": "sad",
					"content": {
						"korean": "나는 전장의 유골을 삼키며 자라났다... 네놈들의 단단한 뼈를 삼켜 가장 거대한 껍질을 만들어야 했는데!"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "(바닥에 떨어진 노란 물병을 내리쳐 산산조각 낸다)"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "안 돼! 내 골수가... 내가 모아둔 소중한 독성 진액이...!"
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "카르니벡스는 비명을 지르며 백골 더미 속으로 스러졌고, 독성 진액은 땅속으로 사라졌다."
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"spot": [
						3,
						2
					],
					"speaker": "amir",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "amir",
					"content": {
						"korean": "물병이 깨졌어... 다리에 도근 통증도 멈추고 있어!"
					},
					"emotion": "happy",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "마침내 친구를 옥죄던 저주도, 사막의 비극도 끝났다."
					},
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"epilogue": {
		"korean": [
			"카르니벡스의 백골빛 껍질이 허물어지자 지하 동굴을 채우던 퀴퀴한 독기가 옅어졌다.",
			"바닥에 산산조각 난 노란 물병 조각만이 길잡이가 남긴 잔혹한 사기극을 증언하고 있었다.",
			"아미르의 다리에도 마침내 독이 풀리며 온기가 되돌아왔다.",
			"사막 깊은 곳에 묻혀 있던 옛 전사들의 유골이 비로소 안식을 찾았다."
		]
	}
} as const;
