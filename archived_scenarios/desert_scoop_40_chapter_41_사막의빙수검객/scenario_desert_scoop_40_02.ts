export const scenario_desert_scoop_40_02 = {
	"scenario_id": "desert_scoop_40_02",
	"order": 2,
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
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "시끌벅적한 오아시스 시장. 하지만 모래바람 너머 분위기는 심상치 않다."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "길목이 거대한 바위로 막혔으니 돌아갈 길을 찾아야 해."
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "dune",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "이봐, 방랑자들. 사막을 넘어갈 정보를 찾고 있나?"
					},
					"emotion": "base",
					"speaker": "dune"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이 시장 구석에 묘한 물건을 가진 상인이 있다는 소문을 들었어."
					},
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "dune",
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "이걸 한번 보게. 뜨거운 오아시스 구석에서 찾아낸 얼음 결정이라네."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "dune"
				},
				{
					"content": {
						"korean": "햇빛이 이렇게 뜨거운데 전혀 녹지 않고 형태가 유지되고 있어."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "dune",
					"emotion": "base",
					"content": {
						"korean": "단면을 보게나. 칼날로 벤 듯 한 치의 오차도 없이 매끄럽지 않나?"
					},
					"type": "speech"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…손대면 당장이라도 베일 것처럼 날카롭다."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이 무더운 사막 한가운데에서 이런 결정을 잘라낸 자가 누구지?"
					},
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"speaker": "dune",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "소문에 따르면 사원 터 쪽에서 얼음을 품은 자를 보았다는 이가 있네."
					},
					"emotion": "base",
					"speaker": "dune",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "단단한 얼음을 이 정도로 예리하게 잘라낼 정도라면 보통 검술이 아니야."
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "조심하게. 시장 상인들조차 이 얼음 이야기만 나오면 입을 다물더군."
					},
					"type": "speech",
					"speaker": "dune"
				},
				{
					"type": "speech",
					"content": {
						"korean": "뼛속까지 소름이 돋는 기분이야."
					},
					"emotion": "base",
					"speaker": "character_2"
				},
				{
					"content": {
						"korean": "사막 길목을 막아선 거대한 바위 사건과 연관이 있을 수도 있어."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "오아시스 시장 가장 깊숙한 그늘 아래, 기이한 정적이 감돈다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "얼음의 출처를 파헤칠수록 다가오는 경계심과 압박감이 강해지고 있어."
					}
				},
				{
					"type": "direction",
					"speaker": "dune",
					"action": "enter",
					"duration_ms": 400,
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "더 이상 다가가지 말게! 시장의 상인이 살기를 띠며 길을 막고 있네!"
					},
					"emotion": "angry",
					"speaker": "dune"
				},
				{
					"content": {
						"korean": "사막의 평화를 지키겠다는 구실로 진실을 숨기려는 자가 나타났다."
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "경고했지 않나. 사막의 비밀을 함부로 파헤치려 들지 마라."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…여기서 멈출 순 없다. 얼음 결의 비밀을 반드시 밝혀내겠어."
					}
				}
			],
			"id": 15,
			"dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "정체불명의 얼음을 자꾸 조사하려 들다니! 사막의 평화를 깨뜨릴 셈인가?"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "우리는 그저 막힌 길을 열고 이 얼음의 진실을 확인하려는 것뿐이다."
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "더 이상 알려고 하지 마라! 여길 넘어가게 둘 수 없다!"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 멈춰라… 이 이상의 추적은 더 큰 재앙을 부를 뿐이다…"
					},
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 정도 정교함으로 얼음을 잘라내는 건 최고 수준의 검객뿐이야."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "한 치의 오차도 없이 베어진 얼음 결정. 전설의 검객이 남긴 흔적이 사막 너머를 향하고 있다."
					},
					"type": "speech",
					"speaker": "narrator"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"막혀버린 길목을 뒤로한 채, 우리는 오아시스 시장으로 발길을 옮겼다.",
			"신비로운 기운이 감도는 시장 구석에서 상인 듄이 조용히 말을 건네왔다.",
			"한 치의 오차도 없이 차갑고 예리하게 잘린 얼음 결정.",
			"이 작고 기이한 얼음 하나가 사막의 평화를 뒤흔들려 하고 있었다."
		]
	}
} as const;
