export const scenario_hell_cystis_32_02 = {
	"scenario_id": "hell_cystis_32_02",
	"order": 2,
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
	"prologue": {
		"korean": [
			"유황 냄새와 피비린내가 밀실 복도의 차가운 공기를 채우고 있었다.",
			"구원의 영수를 마시고 고통을 잊었다는 신도들이 거니는 성소 깊은 곳.",
			"그곳에서 한 신도가 형광 빛깔의 진물이 흐르는 수건을 쥔 채 비틀거리고 있었다.",
			"치유라는 명목 뒤에 숨겨진 기괴한 진실이 서서히 모습을 드러낸다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "유황 냄새가 진동하는 밀실 복도 끝에서 한 신도가 머리를 감싸 쥐고 있다."
					}
				},
				{
					"spot": [
						3,
						4
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "mara"
				},
				{
					"content": {
						"korean": "정신 차려봐. 당신 이름이 뭐야?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "내 이름...? 생각나지 않아. 내가 누구였는지 전혀 기억이 안 나..."
					},
					"emotion": "sad",
					"speaker": "mara",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…자신의 이름마저 잊어버리다니."
					},
					"speaker": "character_1",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "영수를 마신 신도들이 하나둘 인격을 잃어가고 있어."
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "머리가 쪼개질 것처럼 아픈데, 영수를 더 마셔야 하나 봐..."
					},
					"speaker": "mara",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "mara",
					"action": "enter",
					"spot": [
						3,
						4
					],
					"type": "direction"
				},
				{
					"speaker": "mara",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이 수건으로 얼굴을 닦아내도 핏물과 기괴한 즙이 멈추질 않아."
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "수건에 비린내 나는 오팔빛 형광 진물이 축축하게 묻어있어."
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…기분 나쁜 형광빛이야."
					},
					"emotion": "base",
					"speaker": "character_2"
				},
				{
					"speaker": "mara",
					"emotion": "sad",
					"content": {
						"korean": "얼굴의 화상 통증은 씻은 듯 사라졌는데, 닦아낼수록 이상한 진물만 배어 나와..."
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "단순한 상처 진물이 아니라 몸속에서 배출되는 기생 흔적이다."
					},
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "mara",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						4
					]
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "random_boss",
					"duration_ms": 500,
					"spot": [
						4,
						4
					]
				},
				{
					"content": {
						"korean": "환자를 배회하게 두지 마십시오. 그 진물은 유황 독성을 씻어내는 정화 과정일 뿐입니다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "정화라기엔 수건에서 기생충 특유의 비린 오팔빛 진물이 풍긴다."
					}
				},
				{
					"content": {
						"korean": "영수의 치유를 의심하지 마십시오. 정화가 끝나면 영원한 안식이 찾아옵니다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…뼛속까지 불길한 기운이 밀려온다."
					},
					"emotion": "base",
					"speaker": "character_3"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "거짓 달램은 치워라. 이 형광 진물이 묻은 수건을 증거로 수거하겠다."
					},
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						4
					],
					"speaker": "mara",
					"duration_ms": 500
				},
				{
					"speaker": "mara",
					"type": "speech",
					"content": {
						"korean": "뱃속이 묵직해... 무언가 내 안에서 꿈틀거리며 갉아먹는 느낌이야..."
					},
					"emotion": "sad"
				},
				{
					"action": "enter",
					"spot": [
						4,
						4
					],
					"speaker": "random_boss",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "성소의 비밀을 파헤치려는 자는 정화를 방해하는 죄인입니다. 더는 나아갈 수 없습니다."
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_4",
					"type": "speech",
					"content": {
						"korean": "…더 이상 물러설 곳이 없다."
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "신도들의 기억과 내장을 파먹는 가짜 구원의 실체를 밝혀내겠다."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "그렇다면 이 밀실 복도가 당신들의 무덤이 될 것입니다!"
					},
					"emotion": "angry"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"dialogue": [
				{
					"emotion": "angry",
					"content": {
						"korean": "더 이상 성소의 진실에 접근하게 둘 수 없습니다. 여기서 끝내 드리죠."
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "형광 진물의 정체를 밝히고 거짓된 구원의 환상을 깨부수겠다!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "어리석군요. 영수의 권능 앞에 무릎 꿇으십시오!"
					},
					"type": "speech",
					"speaker": "random_boss"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "크악... 수건을 빼앗아 가봤자... 이미 신도들의 몸은 무너지고 있다..."
					},
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "이 오팔빛 형광 진물이 바로 성소가 숨겨온 구원의 실체였어."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "수거한 수건에서 기괴한 옥빛 포자 냄새가 뿜어져 나왔다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "당신들의 기억과 영혼도 곧 영수의 오팔빛 속으로 녹아들 것입니다."
					},
					"emotion": "happy",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "…여기서 멈출 수 없다. 형광 진물의 진실을 밝혀내야 해."
					},
					"type": "speech"
				}
			]
		}
	]
} as const;
