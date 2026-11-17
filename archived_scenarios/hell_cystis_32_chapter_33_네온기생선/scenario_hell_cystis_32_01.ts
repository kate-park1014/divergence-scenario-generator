export const scenario_hell_cystis_32_01 = {
	"scenario_id": "hell_cystis_32_01",
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
	"prologue": {
		"korean": [
			"지옥의 유황 불길이 울부짖는 연꽃 성소 입구.",
			"화상의 고통을 잊게 해준다는 옥빛 영수의 기적이 신도들을 홀린다.",
			"상처가 씻은 듯 낫는 기적 뒤에는 불길한 꿈틀거림이 숨어 있었다.",
			"거짓 구원의 실체를 파헤치기 위한 첫 발걸음이 시작된다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "유황 냄새가 진동하는 성소 입구 광장. 불길에 덴 신도가 영수를 바르고 있다."
					},
					"emotion": "base"
				},
				{
					"speaker": "ash",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "아아… 뜨거운 화상 통증이 거짓말처럼 전부 사라졌어!"
					},
					"type": "speech",
					"speaker": "ash"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…흉터가 순식간에 메워지다니."
					},
					"speaker": "character_1"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "애쉬의 목덜미 아래에서 불길한 형광 핑크색 형체가 순간 꿈틀거렸다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이 옥빛 영수만 있다면 지옥의 불길도 두렵지 않아!"
					},
					"speaker": "ash",
					"type": "speech",
					"emotion": "happy"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "성소 중앙 계단으로 향하는 길목을 무장한 경비원들이 차단하고 있다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "멈춰라! 영수의 신성한 기적에 의구심을 품는 자는 전진할 수 없다."
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "갑옷에 새겨진 핏빛 문장… 지독한 압박감이다."
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "우리는 그저 옥빛 영수가 진짜 치유약인지 확인하려는 것뿐이다."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "기적을 의심하는 참람한 자들에게 허락될 길은 없다!"
					}
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "광장 바닥에 핏빛 문장이 새겨진 옥빛 영수병이 떨어져 있다."
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "지독한 유황 냄새 속에서 혼자만 차가운 빛을 내고 있네."
					},
					"speaker": "character_3"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "직접 영수를 삼켜 확인해보지 않고는 진실을 밝힐 수 없다."
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "영수의 즙을 삼키자 불타는 듯한 화상 통증이 단번에 씻겨 나갔다."
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "고통은 사라졌지만 목구멍 깊은 곳에서 이질적인 서늘함이 불쾌하게 꿈틀거린다."
					},
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "성소 내부로 이어지는 거대한 철문 앞. 통로 전체가 굳게 잠겨 있다."
					},
					"emotion": "base"
				},
				{
					"speaker": "character_4",
					"content": {
						"korean": "통증이 사라졌는데도 등골에 소름이 돋는다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "옥빛 영수의 치유는 상처를 고친 게 아니라 다른 무언가를 식립한 결과다."
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "결국 영수를 마셨군. 이제 너희도 이 성소의 결계에서 결코 벗어날 수 없다!"
					}
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 자들… 영수를 삼킨 순간 너희의 내장도 이미…"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "경비대장은 쓰러졌지만 목덜미 아래의 이질적인 꿈틀거림은 사라지지 않는다."
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "핏빛 문장의 영수병을 손에 쥔 채, 성소 더 깊은 곳을 향해 발걸음을 옮긴다."
					}
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "성소 경비대의 무자비한 공격에 시야가 어두워진다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "영수의 은총을 거부한 오만한 자들의 당연한 말로다."
					}
				},
				{
					"content": {
						"korean": "이대로 무너질 순 없다. 다시 일어나 영수의 진실을 밝혀내야 한다."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "기적을 통제하려는 경비대장이 무기를 뽑아 들고 막아서고 있다."
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "영수를 받아들이고도 순종하지 않는 우매한 자들아, 이곳이 너희의 무덤이다!"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "거짓된 구원으로 사람들을 옥죄는 성소의 굴레를 끊어내겠다."
					}
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "숨이 턱 막혀온다… 무조건 쓰러뜨려야 해!"
					},
					"type": "speech",
					"emotion": "angry"
				}
			]
		}
	]
} as const;
