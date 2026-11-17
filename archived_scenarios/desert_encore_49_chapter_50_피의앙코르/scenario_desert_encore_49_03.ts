export const scenario_desert_encore_49_03 = {
	"scenario_id": "desert_encore_49_03",
	"order": 3,
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
			"피비린내와 환각의 향이 진하게 진동하는 모래 웅덩이 결투장.",
			"동료를 벤 죄책감에 손가락 마디마저 잘린 도망자 카사이가 피를 흘리고 있었다.",
			"검성의 유품 마스크를 쓴 환영이 칼날을 겨누고, 붉은 모래가 피를 갈구한다."
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
			"id": 1,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "kasai",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "kasai",
					"content": {
						"korean": "으악! 제발… 저 마스크를 치워 줘!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "손가락 마디가 잘린 남자가 공격당하고 있어."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…소름 돋는 비명이야."
					},
					"emotion": "sad",
					"speaker": "character_1",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "마스크를 쓴 환영 검사가 날 죽이려 한다고!"
					},
					"type": "speech",
					"speaker": "kasai"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "kasai",
					"spot": [
						3,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "저 자가 쓰고 있는 건… 죽은 검성 님의 유품 마스크야!"
					},
					"emotion": "angry",
					"speaker": "kasai"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "검성의 마스크를 쓴 환영이 카사이를 노리고 있다."
					}
				},
				{
					"speaker": "kasai",
					"type": "speech",
					"content": {
						"korean": "앙코르의 태엽 소리에 속아 동료를 베었어… 이건 내 죄를 파고드는 환영이야!"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "피비린내가 모래에 자욱하다."
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "kasai",
					"action": "enter",
					"spot": [
						3,
						3
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "저 환영 검사를 봐! 다가오고 있어!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "kasai"
				},
				{
					"content": {
						"korean": "결투장의 환영 검사 발밑에 모래 그림자가 전혀 비치지 않는다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "그림자조차 없는 허상인데 칼날엔 진짜 피가 묻어 있어…!"
					},
					"type": "speech",
					"speaker": "kasai"
				},
				{
					"content": {
						"korean": "모래 밑에서 열기가 올라온다."
					},
					"emotion": "base",
					"speaker": "character_3",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						3
					],
					"speaker": "kasai"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "심판관이 오고 있어! 결투에 개입하는 자는 모두 매장당할 거야!"
					},
					"speaker": "kasai"
				},
				{
					"content": {
						"korean": "심판관이 구원을 막아서고 있다. 놋쇠 회중시계 용두를 당겨야 한다."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "더 이상 누구도 이 모래 웅덩이에서 죽게 둘 수 없다."
					},
					"emotion": "angry"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "모래 웅덩이에 피를 바치고 사라져라."
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "놋쇠 회중시계가 가리키는 진실을 여기서 포기할 순 없다."
					},
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "결투에 개입하려는 자는 이 모래 웅덩이가 무덤이 될 것이다."
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "더는 환영 무대의 피비린내 나는 사기극에 놀아나지 않는다!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "검 자루를 쥔 손에 힘이 들어간다."
					},
					"type": "speech",
					"speaker": "character_4"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "환영의 톱니는… 멈추지 않는다…"
					}
				},
				{
					"action": "enter",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "kasai",
					"type": "direction"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "검성의 마스크가 부서졌어… 살려줘서 고마워."
					},
					"speaker": "kasai",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "부서진 가면 아래로 환영 계약서의 조각들이 드러났다."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "계약서의 진실을 파헤치기 위해 무대 뒷골목 분장실로 향한다."
					}
				}
			]
		}
	]
} as const;
