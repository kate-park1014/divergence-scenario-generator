export const scenario_desert_sirocco_47_01 = {
	"scenario_id": "desert_sirocco_47_01",
	"order": 1,
	"act": "intro",
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
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "바람 부는 모래 골짜기 입구. 모래구덩이 사이에 무언가 파묻혀 있다."
					},
					"speaker": "narrator"
				},
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "amir",
					"action": "enter"
				},
				{
					"content": {
						"korean": "모래 위에 붉은 글씨가 적혀 있어. 꼭 경고문 같네."
					},
					"speaker": "amir",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "발밑에 녹슨 놋쇠 피리가 떨어져 있어."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "amir",
					"content": {
						"korean": "바위에 절단되어 박힌 검날 조각도 피리와 같은 놋쇠로 녹슬어 있군."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "…바람 소리가 흉흉하네."
					},
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "amir"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "저기 모래 상인이 다가오고 있어."
					},
					"speaker": "amir"
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "그 골짜기로 진입해선 안 돼! 소리를 내면 모래 폭풍의 검기가 살점을 베어낼 거다!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "소리를 내면 검기가 자극받는다는 말이군."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "상인의 말이 맞아. 이곳에서는 작은 소리도 위험해."
					},
					"speaker": "amir",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…피부가 서늘해진다."
					},
					"speaker": "character_2"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "amir",
					"type": "direction",
					"spot": [
						3,
						3
					]
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "하지만 골짜기의 폭풍을 멈추려면 진실을 확인해야 해."
					},
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "놋쇠 피리를 입에 대고 숨을 불어넣는다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…날카로운 피리 소리."
					},
					"speaker": "character_3",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "amir",
					"content": {
						"korean": "피리 소리가 울리자마자 바닥의 모래가 움직이기 시작했어!"
					},
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "amir",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "amir",
					"content": {
						"korean": "봐, 사막 모래에 핏빛 원이 뭉쳐지고 있어!"
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "피리 소리가 검객의 잔류 검기를 분노케 한 거야."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "거세진 칼바람이 사방에서 몰아치며 길을 막아선다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_4",
					"content": {
						"korean": "…바람에 살점이 베일 것 같아."
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "핏빛 모래 소용돌이 속에서 칼바람을 두른 형체가 피어오른다."
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "금기를 깨고 피리를 분 자냐! 모래의 검기로 베어주마!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "잔류 검기가 실체화되었다. 밀어붙인다!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…검기가 뿜어져 나온다."
					},
					"speaker": "character_1",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "모래 골짜기의 바람에 삼켜져라!"
					}
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "칼바람이 너무 거세… 호흡을 가다듬고 다시 도전하자."
					},
					"type": "speech"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "피리 소리가 울릴수록… 더 큰 폭풍이 찾아올 것이다…"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "놋쇠 피리가 폭풍의 열쇠였어. 더 깊은 골짜기로 들어간다."
					}
				},
				{
					"duration_ms": 500,
					"speaker": "amir",
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
					"speaker": "amir",
					"content": {
						"korean": "폭풍의 징후가 시작됐어. 방심해선 안 돼."
					}
				},
				{
					"content": {
						"korean": "거센 칼바람을 뚫고, 탐험대는 모래 골짜기 안쪽으로 발걸음을 옮긴다."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"바람 부는 모래 골짜기. 소리를 내면 검기가 일어나는 기이한 땅.",
			"길잡이 아미르와 함께 사막 입구에 들어섰다.",
			"모래 위에 새겨진 붉은 글씨와 주인 없는 놋쇠 피리.",
			"그 피리를 불어 소리를 내는 순간, 핏빛 바람이 몰아치기 시작했다."
		],
		"english": [],
		"japanese": [],
		"chinese": [],
		"french": [],
		"spanish": [],
		"vietnamese": [],
		"thai": [],
		"hindi": []
	}
} as const;
