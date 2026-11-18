export const scenario_hell_vane_35_01 = {
	"scenario_id": "hell_vane_35_01",
	"order": 1,
	"random_boss_title": {
		"korean": "지옥 문지기"
	},
	"act": "intro",
	"theme": "hell",
	"actors": {
		"mara": {
			"id": "mon_94e5bffe-d3cd-4e5e-a174-633174784043",
			"name": {
				"korean": "마라",
				"english": "Mara",
				"japanese": "マーラ",
				"chinese": "玛拉",
				"french": "Mara",
				"spanish": "Mara",
				"vietnamese": "Mara",
				"thai": "มารา",
				"hindi": "मारा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/801457b4-3ecc-41f5-e450-73d6ce8eb200/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9bfac7d4-6bfd-49b0-5ba4-a25419c71400/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"핏빛 안개가 자욱한 언덕 끝자락.",
			"영혼 봉인 주술에 매여 괴로워하는 탐험대원 마라를 만났다.",
			"고통을 줄여주려 한 조급한 결정이 파티 전체를 지옥 안개의 위험으로 밀어 넣는다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "붉은 안개가 피어오르는 언덕 위, 한 여성이 바닥에 주저앉아 신음하고 있다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "mara"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "저는 이번 탐험에 함께하게 된 대원 마라예요… 영혼 봉인 주술 때문에 몸이 파열될 것 같아요!"
					},
					"speaker": "mara"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "괴로워하는 마라의 고통을 덜어주기 위해 몸에 걸린 영혼 봉인 주술을 풀겠다."
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "…안개가 점점 짙어지네."
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "풀려난 주술의 벼락이 떨어진 바닥에 라임 빛 형광 사슬 자국이 길게 파여나간다."
					},
					"speaker": "narrator"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "mara",
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "mara",
					"content": {
						"korean": "아악! 주술이 풀리니까 고통이 멈추기는커녕 영혼이 파열하려 해요!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "봉인을 풀어버려 마라의 영혼이 파열하면 탐험대 전체가 지옥 안개 속에 영원히 갇히게 된다!"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "…바람 소리가 비명처럼 들려."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "mara",
					"content": {
						"korean": "제 영혼이 사방으로 흩어지기 전에 짙어지는 지옥 안개를 막아야 해요!"
					},
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						2,
						2
					],
					"type": "direction",
					"speaker": "mara",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "몸이 너무 무거워서 더는 걷기 힘들어요… 지옥 문지기의 눈을 피해 계세요."
					},
					"speaker": "mara",
					"type": "speech"
				},
				{
					"content": {
						"korean": "우리가 봉인을 풀어 벌어진 일이다. 지옥 안개가 파티를 삼키기 전에 돌파하겠다."
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"action": "exit",
					"type": "direction",
					"direction": "down",
					"speaker": "mara",
					"duration_ms": 400
				},
				{
					"emotion": "sad",
					"speaker": "character_3",
					"content": {
						"korean": "…차가운 기운이 등줄기를 훑고 지나가."
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
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "언덕 정상으로 향하는 길목, 핏빛 안개가 짙어지며 거대한 진동이 땅을 울린다."
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "안개 너머에서 지옥 문지기의 묵직한 발소리와 기척이 다가오고 있다."
					}
				},
				{
					"speaker": "character_4",
					"content": {
						"korean": "…숨이 턱턱 막혀와."
					},
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "영혼의 파열을 막지 못하면… 결국 모두 지옥 안개의 재가 될 것이다…"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "문지기가 패배했어도 안개가 짙어지고 있어. 마라의 영혼을 다스릴 방도를 찾아야 한다."
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "문지기가 쓰러진 바닥에도 라임 빛 형광 사슬 자국이 길게 패어 남아 있었다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "사슬 자국이 통곡의 폐허 방향으로 길게 이어진다. 저곳으로 이동하자!"
					},
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "지옥의 금기를 어긴 자들에게 안개의 형벌을 내리노라."
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…이대로 지옥 안개에 갇혀 쓰러질 수는 없다. 다시 도전한다!"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "핏빛 안개 한가운데, 웅장한 자태의 지옥 문지기가 붉은 언덕을 막아선다."
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 자들아! 감히 영혼 봉인을 풀어 지옥 안개를 이 언덕에 번지게 만드느냐!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "동료의 고통을 멈추려 했을 뿐이다. 지옥 안개에 갇힐 순 없으니 비켜라!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"speaker": "character_1",
					"content": {
						"korean": "…더는 물러설 곳이 없어."
					},
					"type": "speech"
				}
			]
		}
	]
} as const;
