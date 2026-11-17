export const scenario_hell_porcellus_36_04 = {
	"scenario_id": "hell_porcellus_36_04",
	"order": 4,
	"act": "rising",
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
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "끝없이 쌓인 서류 더미 사이로 놋쇠 종소리가 울린다."
					}
				},
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "ash",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "ash",
					"emotion": "base",
					"content": {
						"korean": "밀린 이자를 처리해야 하네. 밀린 수납 확인서에 어서 도장을 찍게."
					}
				},
				{
					"content": {
						"korean": "…상황이 기묘하지만, 우선 절차대로 영수증 도장을 찍겠다."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "계인 소리가 울리며 서류가 수납함으로 넘어간다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "서류 하나가 깔끔하게 처리됐어."
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "ash",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "다음 서류를 보게. 장부 표지마다 이상한 인장이 찍혀 있지?"
					},
					"speaker": "ash"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "장부 표지에 찍힌 핑크색 하트 모양의 담보 압류 인장이 눈에 띄는군."
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "ash",
					"content": {
						"korean": "포르셀루스 님에게 영혼의 소유권이 완벽히 넘어갔다는 증표라네."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…불쾌한 문양이네."
					},
					"emotion": "base",
					"speaker": "character_2"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "ash",
					"action": "enter"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "자, 머뭇거리지 말고 다음 수납 확인서에도 도장을 누르게!"
					},
					"speaker": "ash",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "도장을 쾅 찍자 마젠타색 광채 영수증이 불꽃처럼 발행된다."
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이 붉은 광채의 정체가 무엇이지?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "ash",
					"emotion": "base",
					"content": {
						"korean": "영수증이 발급됨과 동시에 죄인들의 영혼 생명력이 납입된 거라네."
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "빛이 너무 섬뜩하잖아…"
					},
					"speaker": "character_3",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "ash",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "ash",
					"emotion": "base",
					"content": {
						"korean": "수납함 구석을 봐라. 이자가 어떻게 쌓이는지 보이지 않나?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "수납함 구석에 죄수들의 영혼 수액 병이 수없이 쌓여 있다!"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "character_4",
					"content": {
						"korean": "도장을 찍을 때마다 저 병에 생명력이 채워지는 거였다니."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "결국 도장을 찍는 내 행위가 억울한 영혼들을 수탈하고 있었던 거다."
					},
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "황금 창고의 문이 열리고 상급 수납 검사관이 가로막는다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "{random_boss}의 정산 시간이 되었다. 이자 납입을 방해하는 자는 압류 대상이다!"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "더 이상 이 끔찍한 징수를 좌시하지 않겠다!"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "{random_boss}가 비틀거리며 황금 장부를 놓쳐버린다."
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이자 징수가… 중단되다니… 포르셀루스 님이 가만있지 않을 것이다…"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "이 착취의 사슬을 반드시 끊어내겠어."
					},
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "{random_boss}의 압류 통지서가 흉터를 남기며 날아든다."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "너희의 영혼 생명력도 이자로 수납해주마!"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…포기할 수 없어. 다시 일어서야 해."
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"황금빛으로 번쩍이는 황금 이자 수납처.",
			"이곳에서는 지옥 영혼들의 이자가 매 순간 징수되고 있었다.",
			"늙은 압류관은 무심하게 영수증 도장을 내밀었다.",
			"그 도장이 찍힐 때마다 누군가의 생명력이 사라지고 있었다."
		]
	}
} as const;
