export const scenario_hell_pyralis_33_05 = {
	"scenario_id": "hell_pyralis_33_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "hell",
	"actors": {
		"cinder": {
			"id": "mon_7bdc5bba-75ec-4589-827e-193b3c59b022",
			"name": {
				"korean": "신더",
				"english": "Cinder",
				"japanese": "シンダー",
				"chinese": "辛德",
				"french": "Cinder",
				"spanish": "Cinder",
				"vietnamese": "Xinder",
				"thai": "ซินเดอร์",
				"hindi": "सिंडर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/bc21258b-93ac-4669-7330-fdf4e8a57c00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/939a1911-1849-425c-67a4-4958bbdc3300/public"
		}
	},
	"boss": {
		"pool_id": "pool_SoulCradle_Pyralis_V1"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "피랄리스의 절벽 입구. 뜨거운 화염 바람이 뺨을 스친다."
					},
					"emotion": "base"
				},
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "cinder"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "지상으로 가는 통로가 저 꼭대기에 있어. 내가 먼저 길을 확인하고 왔다."
					},
					"type": "speech",
					"speaker": "cinder"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "동료들의 마력이 다하기 전에 피랄리스의 영혼 혼석을 찾아야 해."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "…발바닥이 타들어 갈 것처럼 뜨거워."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_1"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "바위 틈새마다 무지갯빛 비늘들이 흩뿌려져 있다."
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "cinder",
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"speaker": "cinder",
					"content": {
						"korean": "붉은 절벽 입구에서 확인했던 그 무지갯빛 비늘 조각이 맞아."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "신수의 비늘 흔적이 위쪽으로 계속 이어지고 있군."
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "character_2",
					"emotion": "sad",
					"content": {
						"korean": "…숨을 쉴 때마다 목구멍이 아려와."
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "굳어버린 용암 바위에 에메랄드빛 재가 점점이 떨어져 있다."
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "cinder",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "용암 호수 바위지대에서 떨어진 에메랄드빛 불꽃 재와 같은 흔적이야."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "cinder"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "피랄리스가 근처에서 절벽을 배회하고 있다는 뜻이다."
					}
				},
				{
					"content": {
						"korean": "…머리 위에서 지옥의 울림이 느껴져."
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_3"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "타오르는 흑요석 벽면에 붉은 잔흔이 기이하게 엉켜 있다."
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "검은 재의 골짜기 소문대로, 짐승의 불꽃 냄새에 아이의 짠 눈물이 섞여 있어."
					},
					"emotion": "base"
				},
				{
					"speaker": "character_4",
					"type": "speech",
					"content": {
						"korean": "…공기가 순식간에 차갑게 굳어가는 기분이 들어."
					},
					"emotion": "sad"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"emotion": "angry",
					"content": {
						"korean": "돌아가라! 그 누구도 내 가슴속의 것을 건드릴 수 없다!"
					},
					"speaker": "boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…이대로 동료들을 포기할 순 없어. 다시 타오르겠다!"
					},
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "붉은 절벽 정상, 온몸에 불꽃을 두른 거대한 신수가 사나운 짐승처럼 울부짖는다."
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter",
					"speaker": "cinder"
				},
				{
					"speaker": "cinder",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "내가 공격을 막아설 테니 피랄리스에게 맹공을 퍼부어라!"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "크아아앗! 감히 내 영역을 침범하고 무엇을 빼앗으려 드느냐!"
					},
					"type": "speech",
					"speaker": "boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "동료들을 구하고 지상으로 나갈 길을 열기 위해 너를 넘어서겠다!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "…화염의 열기가 온몸을 삼킬 것 같아!"
					},
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "가슴의 혼석에 금이 가자, 그 안에 품고 있던 어린아이의 영혼이 드러난다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "마법 대륙에서 내 어린 주인이 지옥으로 끌려오자 따라 내달렸다… 아이 대신 지옥 불길을 견디며 돌 속에 감싸 두었다!"
					},
					"emotion": "sad",
					"speaker": "boss"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이 아이가 받을 벌은 내가 다 받았다! 부디 이 아이의 영혼만은 뜨거운 곳에서 데리고 나가 다오!"
					},
					"type": "speech",
					"speaker": "boss"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "흑요석 제단의 확신대로 가슴에 아이를 안고 있었군. 그 영혼 혼석을 지상으로 데리고 나가겠다!"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "…고맙다. 이제야 내 긴 수호의 무거운 짐을 내려놓는구나."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "피랄리스의 눈물이 지옥 불길을 잠재우고, 지상으로 가는 문이 열렸다."
					},
					"emotion": "base"
				}
			],
			"id": 15
		}
	],
	"epilogue": {
		"korean": [
			"피랄리스의 영혼 혼석을 품에 안고 지상으로 나오자, 동료들을 괴롭히던 지옥의 열기가 차츰 식어갔다.",
			"지옥의 불길이 꺼지고 마침내 굳게 닫혔던 탈출의 문이 넓게 열렸다.",
			"손끝에 남은 에메랄드빛 온기만이 피랄리스가 치러낸 오랜 희생의 무게를 증명하고 있었다."
		]
	},
	"prologue": {
		"korean": [
			"지상으로 통하는 길을 열기 위해 피랄리스의 절벽으로 올라간다.",
			"지옥의 열기에 갇힌 동료들의 마력은 이미 한계에 다다르고 있었다.",
			"붉은 절벽의 끝에서 온몸을 화염으로 두른 신수가 탐험대를 기다린다."
		]
	}
} as const;
