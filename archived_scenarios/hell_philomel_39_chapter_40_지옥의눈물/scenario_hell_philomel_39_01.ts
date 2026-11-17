export const scenario_hell_philomel_39_01 = {
	"scenario_id": "hell_philomel_39_01",
	"order": 1,
	"act": "intro",
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
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "지옥 최하층, 유황 광산 입구에 발을 들였다. 타오르는 유황 냄새가 코를 찌른다."
					},
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"speaker": "character_1",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "ash",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "여기서부터는 조심해. 광산 안에 켜진 유황 등불들이 불길하게 일렁이고 있거든."
					},
					"emotion": "base",
					"speaker": "ash"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "바닥 좀 봐. 검은 바위 바깥에 형광 에메랄드빛 수정 눈물 자국이 굳어있어."
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "ash",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "ash",
					"content": {
						"korean": "저 유황 등불이 길을 막고 있어. 당장 위험해 보이니 불꽃을 꺼트리는 게 좋아."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 등불을 꺼버리면 안전해지는 건가?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "ash",
					"emotion": "base",
					"content": {
						"korean": "응, 등불을 꺼야 다음 구역으로 넘어갈 수 있어. 어서 불을 꺼."
					},
					"type": "speech"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "...공기가 이상하게 무거워."
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "조언대로 유황 등불의 불꽃을 바람으로 불어 꺼트렸다."
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "불이 꺼졌는데 — 왜 열기가 멈추지 않는 거지?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "direction",
					"speaker": "narrator",
					"duration_ms": 400,
					"action": "shake"
				},
				{
					"content": {
						"korean": "등불이 꺼지자마자 어둠 속에서 타오르는 염화가 들끓기 시작한다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_3",
					"type": "speech",
					"content": {
						"korean": "...오한이 가시질 않아."
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "벽면에 붉은 루비 빛 단서가 새겨져 있다. 그 주위로 억울한 비명이 울린다."
					}
				},
				{
					"content": {
						"korean": "등불을 꺼트렸더니 억울한 영혼들의 분노가 솟구치고 있어!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "character_4",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "등불을 끄는 게 잘못된 선택이었던 건가..."
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "누군가 이 난동을 가로막으려 접근해 온다."
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "{random_boss}가 쓰러졌지만, 꺼진 등불 주변에서 억울한 영혼의 비명이 더욱 커진다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "등불을 꺼트린 게 오히려 영혼들의 분노를 폭발시켰어..."
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "검은 바위에 굳은 에메랄드빛 눈물이 유황 빛에 불길하게 일렁인다."
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "분노한 염화의 환영 속에 광산 관리인의 웃음소리가 울려 퍼진다."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "...아직 포기할 수 없어. 등불의 진실을 밝혀내야 해."
					},
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "광산의 질서를 어지럽히는 침입자들인가. 유황 등불에 함부로 손을 대다니."
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "우린 그저 길잡이의 말대로 등불을 껐을 뿐이야!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "어리석구나. 지옥의 염화를 건드린 대가를 치러라."
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"억울한 영혼들이 타오르는 지옥 최하층, 유황 광산.",
			"자욱한 매연과 유황 냄새 속에 불길한 등불들이 번들거린다.",
			"길잡이를 따라 첫발을 내딛지만 — 뼛속까지 불길한 직감이 감돈다.",
			"이곳에서 끄는 것은 불꽃만이 아닐지도 모른다."
		]
	}
} as const;
