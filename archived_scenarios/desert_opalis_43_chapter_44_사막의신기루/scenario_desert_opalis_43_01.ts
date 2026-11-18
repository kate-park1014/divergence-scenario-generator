export const scenario_desert_opalis_43_01 = {
	"scenario_id": "desert_opalis_43_01",
	"order": 1,
	"random_boss_title": {
		"korean": "사막 도굴꾼"
	},
	"act": "intro",
	"theme": "desert",
	"actors": {
		"ashur": {
			"id": "mon_a07b6a77-ad2e-4adb-b4ed-56e7e10cd5c7",
			"name": {
				"korean": "아슈르",
				"english": "Ashur",
				"japanese": "アシュール",
				"chinese": "阿舒尔",
				"french": "Ashur",
				"spanish": "Ashur",
				"vietnamese": "Ashur",
				"thai": "อาชูร์",
				"hindi": "अशूर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/eb36f4ec-7b0f-47d0-7073-647e4b01e700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e0b84a6e-36fc-4ba2-5c1d-54fbb18adb00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"메마른 사막 입구, 버려진 오아시스 제단이 모습을 드러낸다.",
			"길잡이가 쓰러지고, 성녀가 남긴 생기 구슬이 붉게 감동한다.",
			"동료를 구하기 위한 선택이 예상치 못한 재앙을 불러온다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "오아시스 제단 입구, 거친 모래 바람이 휘몰아친다."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "ashur",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "ashur",
					"content": {
						"korean": "난 사막 길잡이 아슈르다. 너희를 안내해야 하는데 사막 열기에 기력을 잃었어…"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "길잡이가 쓰러졌어. 제단 구석에는 영롱한 칠색 오팔 조각이 떨어져 있군."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…사막 바람이 뼛속까지 메마르게 해."
					},
					"speaker": "character_1"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "버려진 제단 중앙에 고대의 생기 구슬이 놓여 있다."
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "성녀의 제단 위에 얹힌 생기 구슬에 생기를 불어넣으면 아슈르를 살릴 수 있어."
					}
				},
				{
					"content": {
						"korean": "…희미한 빛이 구슬 안에서 맴돌고 있어."
					},
					"speaker": "character_2",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "아슈르의 숨이 꺼지기 전에 구슬에 생기를 채워 넣자."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "구슬에 생기를 채우자 제단 전체가 강하게 진동한다."
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "구슬이 생기를 채우기는커녕 아슈르의 남은 생기까지 흡수하고 있어!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…아슈르의 몸이 모래처럼 차가워져."
					},
					"speaker": "character_3",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "생기 구슬이 오히려 생기를 빼앗는 장치였다니!"
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
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이상 반응을 일으킨 제단 주변으로 불길한 기운이 감돌기 시작한다."
					},
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "구슬의 폭주로 사막의 도굴꾼들이 이쪽으로 끌려오고 있다."
					}
				},
				{
					"speaker": "character_4",
					"type": "speech",
					"content": {
						"korean": "…발밑의 모래가 불안하게 요동친다."
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "아슈르를 지키려면 다가오는 적들을 전부 돌파해야 한다."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "큭… 제단을 건드린 구슬의 대가는 너희가 감당해야 할 것이다…"
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "도굴꾼을 제압했지만 생기 구슬은 여전히 아슈르의 생기를 흡수하고 있다."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "제단 구석에서 주운 칠색 오팔 조각이 구슬의 빛을 받아 기묘하게 반짝인다."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "사막의 미천한 방문자들이여, 제단의 규율을 어긴 대가를 받아라!"
					}
				},
				{
					"content": {
						"korean": "…여기서 멈출 수 없다. 다시 전열을 가다듬자."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "무기를 든 자가 제단 앞을 막아서며 살기를 내뿜는다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "제단에 함부로 손대지 마라! 생기 구슬을 건드린 죄가를 치러라!"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "쓰러진 길잡이를 살리려 했을 뿐이다. 길을 비켜라!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…공기가 짓눌릴 정도로 무겁다."
					},
					"speaker": "character_1"
				}
			],
			"id": 15
		}
	]
} as const;
