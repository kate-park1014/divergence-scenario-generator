export const scenario_hell_philomel_39_04 = {
	"scenario_id": "hell_philomel_39_04",
	"order": 4,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"pyre": {
			"id": "mon_096a199b-d878-4daf-ab59-8a5fc3c32a37",
			"name": {
				"korean": "화염",
				"english": "Pyre",
				"japanese": "炎",
				"chinese": "烈焰",
				"french": "Bûcher",
				"spanish": "Pira",
				"vietnamese": "Hỏa đài",
				"thai": "เชิงตะกอน",
				"hindi": "चिता"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d9f42f57-c664-48aa-b280-498d0f92a600/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/3d10334d-d2d4-441b-14bd-cd9fba035800/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"지옥 최하층, 불길에 휩싸인 불타는 사당.",
			"숨을 쉴 때마다 유황 연기가 허파를 조여온다.",
			"빛을 가릴수록 영혼들의 분노는 걷잡을 수 없이 분출한다.",
			"사당 태피스트리에 새겨진 별빛 문양이 진실을 가리키고 있었다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "사당 전체가 뜨거운 유황 불꽃에 휩싸여 있다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "열기가 너무 심해. 등불의 빛부터 덮개로 가려야겠어!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "pyre",
					"spot": [
						4,
						3
					]
				},
				{
					"emotion": "base",
					"speaker": "pyre",
					"type": "speech",
					"content": {
						"korean": "잠깐, 등불을 무작정 막는다고 열기가 식지 않아."
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "무슨 소리지? 불길을 차단하는 것 외에 다른 방법이 있나?"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "빛이 가려질 때만 보이는 사당 태피스트리의 문양을 봐라."
					},
					"speaker": "pyre"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "등불 빛을 가리니 태피스트리의 별빛 문양이 드러나고 있어."
					},
					"speaker": "character_any"
				},
				{
					"speaker": "pyre",
					"spot": [
						3,
						4
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"speaker": "pyre",
					"type": "speech",
					"content": {
						"korean": "문양 속에 은밀하게 감춰진 조각 글귀가 보이는가?"
					}
				},
				{
					"content": {
						"korean": "'등불의 불꽃에 피를 바를 때만 지옥 열기가 풀린다'라고 적혀있군."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "pyre",
					"content": {
						"korean": "우리가 불을 끄려 할수록 영혼들의 분노가 폭발했던 이유가 이것 때문이다."
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "pyre",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "정화의 조건은 단순한 차단이 아니라 피의 희생이었어."
					},
					"speaker": "pyre"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "결국 피를 바쳐야만 이 형벌의 염화를 끌 수 있다는 뜻이군."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "…뼛속까지 타오르는 기분이야."
					},
					"speaker": "character_1",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "진실을 알았으니 이제 사당 안쪽의 제단으로 진격하자."
					},
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"content": {
						"korean": "사당 안쪽 붉은 문 너머에서 정체 모를 압박감이 뿜어져 나온다."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"speaker": "pyre"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "사당 집행관이 제단을 지키고 있다. 단단히 준비해라."
					},
					"speaker": "pyre"
				},
				{
					"type": "speech",
					"content": {
						"korean": "더는 물러설 곳이 없다. 분노의 진실을 끝까지 파헤치겠다."
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "지옥의 염화 속에서 잿더미가 되어라!"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…아직 태피스트리의 서약은 끝나지 않았어."
					}
				}
			],
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "등불을 가린 어리석은 자들아! 피의 대가를 치러라!"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "피를 바쳐서라도 이 가혹한 굴레를 끝내주마!"
					}
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "바쳐진 피가… 진정한 정화의 길을 여는구나…"
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "사당의 열기가 식어간다. 마침내 진실에 도달했어."
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "불타던 사당에 침묵이 잦아들고 심연으로 향하는 관문이 열렸다."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			]
		}
	]
} as const;
