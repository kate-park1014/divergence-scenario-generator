export const scenario_desert_vane_45_04 = {
	"scenario_id": "desert_vane_45_04",
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
			"결계로 둘러싸인 오아시스의 서늘한 샘터.",
			"짊어진 피의 채무가 턱밑까지 차올랐다.",
			"살아남기 위해서는 누군가를 희생양으로 삼아야 한다.",
			"피로 얼룩진 거짓 혈서가 장부 속으로 서서히 밀려 들어간다."
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
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "푸른 샘물 위로 거대한 가시 결계가 빛을 발한다."
					}
				},
				{
					"speaker": "character_1",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…결계의 기운이 뼛속까지 시리네."
					}
				},
				{
					"speaker": "kasai",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "kasai",
					"emotion": "base",
					"content": {
						"korean": "샘터 앞까지 밀려왔군. 더는 도망칠 곳도 없다."
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 샘터의 장부에 이름을 올려야만 채무가 청산된다."
					},
					"speaker": "character_any"
				},
				{
					"speaker": "kasai",
					"type": "speech",
					"content": {
						"korean": "내 검으로 결계를 베겠다. 너희는 뒤를 맡아라."
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
					"speaker": "kasai",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						3
					]
				},
				{
					"content": {
						"korean": "장부에 누구의 피를 적든, 샘터는 채무를 청산해 줄 거다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "kasai"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…장부에 새겨진 붉은 글씨들이 소름 돋아."
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "타인에게 채무를 떠넘기는 가혹한 계약도 장부는 허용한다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kasai",
					"content": {
						"korean": "동료끼리 등을 돌리는 어리석은 짓은 안 하겠지?"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "kasai",
					"type": "direction"
				},
				{
					"content": {
						"korean": "미리 준비한 거짓 혈서를 장부 사이에 몰래 밀어 넣는다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "kasai",
					"content": {
						"korean": "크윽… 장부에서 붉은 빛이 흘러나와 내 몸을 죈다!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "거짓 혈서가 수리되어 모든 채무가 카사이에게 넘어가고 있다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…손끝이 사정없이 떨려온다."
					},
					"speaker": "character_1"
				},
				{
					"speaker": "kasai",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "날 희생양으로 바친 거냐!"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "kasai",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						3
					]
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "용서 못 한다! 이 칼로 너희를 베어 버리겠다!"
					},
					"type": "speech",
					"speaker": "kasai"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "분노하며 뽑아 든 카사이의 칼날 끝에서 피 대신 호박색 잉크가 흘러내린다."
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "채무를 압류할 현금 수송원이 모습을 드러내고 있다."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "…발밑의 어둠이 점점 좁혀온다."
					},
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "kasai",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "내 목숨도, 이 명검도… 배신자에게 넘겨줄 것 같으냐!"
					},
					"speaker": "kasai"
				},
				{
					"content": {
						"korean": "훌륭한 지목이다. 동료를 희생양으로 바쳐 채무를 넘기다니!"
					},
					"emotion": "happy",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "현금 수송원이 카사이의 검과 목숨을 압류하려 움직인다."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "수송 절차를 시작한다. 짓밟힌 자의 비명을 감상해라!"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"duration_ms": 400,
					"type": "direction",
					"action": "exit",
					"speaker": "kasai",
					"direction": "up"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "희생양을 던져주고도 이것밖에 안 되나? 네 목숨도 함께 압류하겠다."
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "아직 이 죄책감의 굴레를 끊어내지 못했다."
					},
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "카사이의 검과 생명력 압류 완료. 네 채무는 동결되었다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "수송원이 떠난 샘물 속에서 호박색 잉크 펜촉이 빛을 내뿜는다."
					},
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "카사이는 흑요석 결정이 되어 삼켜졌고, 오아시스에는 차가운 적막이 감돌았다."
					}
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…가슴 한구석이 서늘하게 죄어온다."
					}
				}
			]
		}
	]
} as const;
