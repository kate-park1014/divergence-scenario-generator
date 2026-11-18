export const scenario_desert_carnivex_42_04 = {
	"scenario_id": "desert_carnivex_42_04",
	"order": 4,
	"random_boss_title": {
		"korean": "모래 약탈자"
	},
	"act": "rising",
	"theme": "desert",
	"actors": {
		"kemet": {
			"id": "mon_2f8a1701-571b-40b5-92d9-69aa973cef18",
			"name": {
				"korean": "케메트",
				"english": "Kemet",
				"japanese": "ケメト",
				"chinese": "凯麦特",
				"french": "Kemet",
				"spanish": "Kemet",
				"vietnamese": "Kemet",
				"thai": "เคเมต",
				"hindi": "केमेट"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/fd9e93e0-2874-4647-0076-839718949500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8c3f2690-e8a9-44f5-4527-d8f8d4ea2800/public"
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
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "붉은 모래바람이 눈앞을 가릴 만큼 거칠게 분다."
					},
					"speaker": "narrator"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…뼛속까지 모래가 씹히는 기분이야."
					},
					"speaker": "character_1",
					"type": "speech"
				},
				{
					"speaker": "kemet",
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						3
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "멈춰라. 나는 이 모래 구덩이의 파수꾼 케메트다. 해독 샘물을 찾아왔나?"
					},
					"speaker": "kemet"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "동료를 살리려면 구덩이 아래로 내려가야 한다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "kemet",
					"content": {
						"korean": "길목을 모래 약탈자들이 막고 있으니 무기를 잡고 따라오라."
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "붉은 절벽 아래에서 기괴한 노랫소리가 울려 퍼진다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "으... 듣기만 해도 소름이 돋아."
					},
					"speaker": "character_2",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"duration_ms": 500,
					"speaker": "kemet",
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "kemet",
					"content": {
						"korean": "약탈자들이 길잡이를 숭배하며 거짓 기쁨을 노래하는 소리다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "약탈자를 제압해야 밑바닥으로 통하는 길을 뚫을 수 있다."
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"speaker": "kemet",
					"content": {
						"korean": "광신에 사로잡힌 놈들이니 망설이지 말고 공격하라."
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"content": {
						"korean": "구덩이 안쪽으로 들어서자 역한 골수 냄새가 피어오른다."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이 비린내, 숨이 턱 막힐 지경이야."
					},
					"speaker": "character_3"
				},
				{
					"spot": [
						3,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "kemet",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "약탈자 무리의 두목이 바로 앞 광장에 진을 치고 있다."
					},
					"speaker": "kemet",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "망설일 시간 없다. 정면으로 뚫고 나간다."
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "kemet",
					"content": {
						"korean": "좋다, 구덩이 깊은 곳까지 네 길을 열어주마."
					},
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "바닥 암반 곳곳에 무언가 깊게 파고든 패인 흔적이 선명하다."
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "character_4",
					"content": {
						"korean": "…돌바닥이 찢겨 나간 것 같아."
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"action": "enter",
					"spot": [
						3,
						3
					],
					"speaker": "kemet",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "단단한 바위에 뼈마디가 긁힌 자국이 수없이 남아 있군."
					},
					"speaker": "kemet",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "약탈자들의 무기로는 이런 자국을 낼 수 없다."
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "kemet",
					"content": {
						"korean": "맞다. 길잡이라 불리는 곤충 괴물이 지나간 섬뜩한 발자국이다."
					},
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "모래 약탈자의 거친 무기가 탐험대를 덮친다."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "길잡이님의 가호 아래 너희는 여기서 매장될 것이다!"
					},
					"speaker": "random_boss",
					"emotion": "happy"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…친구를 두고 여기서 쓰러질 순 없다! 다시 무기를 잡아라!"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "으아악! 길잡이님이... 우리를 구원해주실... 쿨럭!"
					}
				},
				{
					"content": {
						"korean": "쓰러진 약탈자 밑으로 바닥의 긁힌 흔적이 드러난다."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "kemet",
					"action": "enter"
				},
				{
					"speaker": "kemet",
					"content": {
						"korean": "바닥에 뼈마디가 긁힌 자국을 잘 봐라. 괴물이 남긴 발자국이다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "괴물이 왜 이런 자국을 남기며 지나간 건가?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "놈은 뼈에서 골수를 뽑아내 자기 갑옷을 단단하게 다듬는다."
					},
					"speaker": "kemet"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "사람의 뼈를 녹여 골수를 훔치는 잔혹한 괴물이었군."
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "괴물의 진실에 다가서며, 탐험대는 더 깊은 지하 뼈 동굴로 향한다."
					},
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "붉은 모래 구덩이 한가운데, 가면을 쓴 모래 약탈자가 무기를 쳐든다."
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "길을 비켜라. 우리는 해독 샘물로 향해야 한다."
					},
					"speaker": "character_any"
				},
				{
					"emotion": "happy",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "기뻐하라! 위대한 길잡이께서 너희의 뼈를 기다리신다!"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "거짓된 숭배에 목숨을 버릴 셈인가. 전투를 시작한다!"
					},
					"speaker": "character_any"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"아미르의 다리뼈가 녹아내리는 동안, 탐험대는 해독 샘물을 찾아 붉은 모래 구덩이로 향한다.",
			"붉은 모래는 핏빛처럼 불길하게 흩날리고, 구덩이 밑바닥에는 섬뜩한 기운이 드리워져 있다.",
			"친구의 목숨을 건지기 위해 탐험대는 거친 모래바람을 뚫고 발을 내딛는다."
		]
	}
} as const;
