export const scenario_hell_philomel_39_05 = {
	"scenario_id": "hell_philomel_39_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "hell",
	"actors": {
		"ash": {
			"id": "mon_b225f5fa-59a1-47bb-b4c5-e73bf9e7192a",
			"name": {
				"korean": "애쉬",
				"english": "Ash",
				"japanese": "アッシュ",
				"chinese": "艾什",
				"french": "Ash",
				"spanish": "Ash",
				"vietnamese": "Ash",
				"thai": "แอช",
				"hindi": "ऐश"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d84413a8-9d6f-4a40-5d36-75e431fb9900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/78281fca-e4b8-45cc-68ef-7df3fef74200/public"
		}
	},
	"boss": {
		"pool_id": "pool_MartyrCradle_Philomel_V1"
	},
	"epilogue": {
		"korean": [
			"흑요석 갑주가 깨지고, 제단에는 오직 잔잔한 별빛만이 흘렀다.",
			"타인의 형벌을 홀로 짊어지던 별빛 정령은 비로소 깊은 숨을 내쉬었다.",
			"등불에 스며든 피는 염화를 성화시키고, 억울한 영혼들의 비명을 잠재웠다.",
			"지옥 최하층의 그을음 속에서, 오랫동안 잊혀졌던 차가운 순수가 다시 타올랐다."
		]
	},
	"prologue": {
		"korean": [
			"마침내 도달한 심연의 화염 제단.",
			"거대한 흑요석 갑주가 검은 열기를 뿜어내며 웅크리고 있었다.",
			"모든 고통을 대신 짊어진 채 타오르는 구원자.",
			"등불에 바칠 피만이 이 참혹한 형벌을 끝낼 수 있다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "제단 중심에 거대한 흑요석 갑주가 타오르고 있었다."
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_1"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "저거야. 지옥의 열기를 온몸으로 받쳐 들고 있는 자가."
					},
					"speaker": "character_any"
				},
				{
					"speaker": "ash",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						2
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "드디어 여기까지 왔구나. 저 갑주 안에서 영혼들의 분노가 폭발하고 있어."
					},
					"speaker": "ash"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "불을 끄는 건 답이 아니었어. 등불에 필요한 건 다른 거야."
					},
					"type": "speech",
					"speaker": "ash"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "ash",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "갑주 이음새를 봐. 핫핑크빛 깃털과 수정 눈물 자국이 보여."
					},
					"speaker": "ash",
					"type": "speech"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "괴물이 아니야. 남의 죄와 형벌을 대신 짊어진 별빛 정령이야."
					}
				},
				{
					"content": {
						"korean": "맞아. 필로멜은 모두를 대신해 가해진 지옥불을 버텨내고 있었던 거야."
					},
					"emotion": "sad",
					"speaker": "ash",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "ash",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "등불의 불꽃에 피를 바쳐야만 억눌린 염화가 성화된다."
					},
					"emotion": "base",
					"speaker": "ash"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "내 피로 이 지옥의 굴레를 멈추겠어."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "character_3",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "준비해라. 너의 피가 등불에 닿는 순간, 필로멜의 구원이 시작될 테니까."
					},
					"type": "speech",
					"speaker": "ash"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "흑요석 갑주가 요동치며 심연 전체가 흔들렸다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						2
					],
					"type": "direction",
					"speaker": "ash"
				},
				{
					"content": {
						"korean": "더는 지체할 시간이 없어. 필로멜의 이성이 한계에 다다랐다!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "ash"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_4"
				},
				{
					"content": {
						"korean": "희생을 끝내고 참회를 완수하겠다."
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "흑요석 갑주가 산산조각 나며 작은 별빛 정령 필로멜이 쓰러졌다."
					}
				},
				{
					"type": "speech",
					"speaker": "ash",
					"content": {
						"korean": "지금이야! 등불의 불꽃에 피를 바쳐!"
					},
					"emotion": "angry"
				},
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ash"
				},
				{
					"content": {
						"korean": "타오르던 지옥의 붉은 염화가 꺼지고, 맑은 별빛이 제단을 채웠다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "아아... 지옥의 비명이... 드디어 잠드는군요... 고맙습니다..."
					},
					"speaker": "boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이제 길었던 참회가 끝났다."
					},
					"emotion": "base"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "부디... 부디 더 가까이 오지 마세요... 제 안에 갇힌 지옥이 당신들마저 재로 만들 테니..."
					},
					"emotion": "sad",
					"speaker": "boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "당신의 고통을 여기서 끝내주겠어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"emotion": "angry",
					"content": {
						"korean": "제발 저를 두고 도망치세요... 으아아아!"
					}
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "폭주하는 지옥의 염화가 제단을 삼켰다."
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"emotion": "sad",
					"content": {
						"korean": "부디... 더 이상 나를 괴롭히지 마세요..."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아직 등불에 피를 바치지 못했어. 다시 일어서야 해!"
					},
					"emotion": "angry"
				}
			]
		}
	]
} as const;
