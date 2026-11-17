export const scenario_desert_carnivex_42_04 = {
	"scenario_id": "desert_carnivex_42_04",
	"order": 4,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"kasai": {
			"id": "mon_8050c8ca-5715-4e7d-895e-5bc029d55fcf",
			"name": {
				"korean": "카사이",
				"english": "Kasai",
				"japanese": "カサイ",
				"chinese": "卡赛",
				"french": "Kasai",
				"spanish": "Kasai",
				"vietnamese": "Kasai",
				"thai": "คาไซ",
				"hindi": "कसाई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/c9ddd314-36fb-4636-cbe6-35d8f6f98900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a00fae8a-8a27-4895-d62c-a0c88456ff00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"황혼빛에 젖어든 제단은 지옥의 문턱과 닮아 있었다.",
			"골수가 녹아내리는 사한(死限)이 점점 다가오고 있었다.",
			"방랑 검사 카사이와 함께 붉은 제단으로 발을 내디뎠다.",
			"그곳에서 기다리는 것은 구원인가, 아니면 종말인가."
		],
		"english": [],
		"japanese": [],
		"chinese": [],
		"french": [],
		"spanish": [],
		"vietnamese": [],
		"thai": [],
		"hindi": []
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "황혼의 빛이 붉게 짓눌린 제단 입구에 다다랐다."
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "kasai"
				},
				{
					"speaker": "kasai",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "여기가 황혼의 제단이다. 해독 골수의 단서가 이 안에 있어."
					}
				},
				{
					"content": {
						"korean": "시간이 얼마 남지 않았어. 뼈가 쑤셔온다."
					},
					"type": "speech",
					"speaker": "character_1",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "서둘러 제단 안으로 진입하자."
					}
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "kasai",
					"type": "direction",
					"spot": [
						3,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "잠깐, 받침대 주변을 봐라. 부러진 명검 세 자루가 굳어 있어."
					},
					"emotion": "base",
					"speaker": "kasai"
				},
				{
					"speaker": "character_2",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "칼날이 호박색 진액에 완전히 녹아 붙었잖아…"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "강철마저 녹여버리는 즙이 제단 주위에 흘러나오고 있어."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "kasai",
					"type": "direction",
					"spot": [
						3,
						3
					]
				},
				{
					"content": {
						"korean": "제단 중앙에 녹슨 칼날을 꽂아야 장치가 작동한다."
					},
					"type": "speech",
					"speaker": "kasai",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 기믹을 풀면 해독 골수가 있는 문이 열리는 건가?"
					}
				},
				{
					"speaker": "character_3",
					"emotion": "sad",
					"content": {
						"korean": "불길한 기운이 뼛속까지 시리게 만든다."
					},
					"type": "speech"
				},
				{
					"speaker": "kasai",
					"emotion": "angry",
					"content": {
						"korean": "선택의 여지는 없다. 의식을 진행해라."
					},
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"type": "direction",
					"speaker": "kasai",
					"action": "enter"
				},
				{
					"speaker": "kasai",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "바닥에 쓰러진 기사 시체를 봐. 뼈가 통째로 사라졌어."
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "껍데기만 남은 시체에서 호박색 즙이 흘러나오고 있군."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…더는 지체할 수 없어. 제단으로 전진하자."
					},
					"emotion": "angry",
					"speaker": "character_4"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "마비를 이겨내고 {random_boss}를 쓰러뜨렸다."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "하지만 제단이 폭주하며 카르니벡스의 기운이 강해지고 있어!"
					}
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "kasai",
					"spot": [
						3,
						3
					],
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "kasai",
					"content": {
						"korean": "제단은 파멸했지만… 백골 지네가 있는 오아시스 중심부로 가는 길이 열렸다."
					}
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "마비된 몸으로는 수호자의 공격을 막아낼 수 없었다."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "제단의 호박색 빛 속에서 뼈가 녹아내린다…"
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"emotion": "happy",
					"content": {
						"korean": "너희의 골수마저 제단의 양분이 되리라."
					},
					"type": "speech"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "제단 중앙의 틈새에 녹슨 칼날을 깊숙이 찔러 넣었다."
					}
				},
				{
					"action": "shake",
					"duration_ms": 400,
					"type": "direction",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "크악! 제단에서 호박색 빛이 솟구친다!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "다리에 감각이… 하반신이 마비되어 움직이지 않아!"
					},
					"type": "speech",
					"speaker": "character_1",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "어리석은 자들아, 제단의 의식이 파멸을 불렀다!"
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				}
			]
		}
	]
} as const;
