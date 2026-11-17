export const scenario_hell_razzle_34_02 = {
	"scenario_id": "hell_razzle_34_02",
	"order": 2,
	"act": "rising",
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
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"피 냄새와 유황 연기가 타오르는 관람석 무대.",
			"붉은 화염 구슬 너머로 과거 라즐의 마술쇼 비명이 맴돈다.",
			"은빛 마술 종을 울려 환영을 깨뜨려야만 한다.",
			"하지만 종소리가 울릴수록, 기괴하고 잔혹한 진실이 모습을 드러낸다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "불타는 관람석 입구. 거대한 화염 구슬들이 붉은 열기를 뿜으며 길을 막고 있다."
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…얼굴이 타들어 갈 것처럼 뜨겁군."
					}
				},
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "cinder"
				},
				{
					"content": {
						"korean": "불꽃 속에서 또 헛된 희망을 품고 들어온 자들인가."
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
						"korean": "은빛 마술 종을 강하게 울려 화염 구슬의 환영을 공명시키자!"
					}
				},
				{
					"content": {
						"korean": "화염 구슬이 쨍그랑 소리와 함께 터져 나가며 통로가 열렸다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "열린 길을 따라 관람석 안쪽으로 빠르게 진입한다."
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "관람석 중앙 무대에 붉은 연기와 함께 과거 마술쇼의 환영들이 아른거린다."
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "…환호하는 관객들의 잔상이 보여."
					},
					"emotion": "sad"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "cinder",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"emotion": "base",
					"content": {
						"korean": "옛날 라즐의 마술쇼에 매료되었던 불쌍한 손님들의 유해지."
					},
					"speaker": "cinder",
					"type": "speech"
				},
				{
					"content": {
						"korean": "라즐이 손님들을 구원해서 무대 밖으로 탈출시킨 게 아니었나?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "cinder",
					"emotion": "angry",
					"content": {
						"korean": "라즐은 옛날부터 단 한 명의 손님도 무대 밖으로 보내준 적이 없어."
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "구원이라는 명목으로 손님들을 환상 속에 가두고 삼켜왔던 거다!"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "관람석 계단 위로 붉은 사슬들이 타오르며 탐험대의 발목을 조여온다."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_3",
					"content": {
						"korean": "뼛속까지 불길이 파고드는 느낌이야."
					},
					"emotion": "sad"
				},
				{
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"action": "enter",
					"speaker": "cinder",
					"type": "direction"
				},
				{
					"content": {
						"korean": "종을 울려 사슬을 끊어라. 하지만 그 종소리는 너희의 몸도 찢어놓을 거다."
					},
					"emotion": "base",
					"speaker": "cinder",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "은빛 마술 종의 진동으로 불타는 사슬의 결속을 파괴하겠다!"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "사슬은 부서졌지만, 씁쓸한 고통이 파티 전체에 울려 퍼진다."
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "고통을 견뎌내고 계속 위로 올라가야 한다."
					},
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "관람석 가장 높은 무대. 짙은 유황 연기 사이로 정체 모르는 보스의 기운이 느껴진다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…숨이 턱 막혀 오는군."
					},
					"emotion": "angry",
					"speaker": "character_4"
				},
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "cinder",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "cinder",
					"emotion": "base",
					"content": {
						"korean": "저 위에서 {random_boss}가 붉은 사슬을 쥐고 너희를 기다리고 있다."
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "거짓된 회상과 환영에 사로잡혀 여기서 멈출 수는 없다."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "적을 쓰러뜨리고 불타는 관람석을 돌파하자!"
					}
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"emotion": "angry",
					"content": {
						"korean": "크아악! 사슬이 끊어지다니… 하지만 라즐 님의 마술쇼는 멈추지 않는다…"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "{random_boss}를 격퇴했다. 관람석을 가두던 불길이 꺼져간다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "cinder"
				},
				{
					"speaker": "cinder",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "환영은 깼지만, 라즐이 숨겨둔 참극의 본질은 아직 무대 뒤에 남아있네."
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "타오르던 관람석 너머로, 무대 뒤편으로 향하는 어두운 통로가 열린다."
					},
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "불타는 무대 위에서 춤춰라! 사슬에 묶인 희생양이 될 때까지!"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "…사슬 소리가 기분 나쁘게 울려 퍼진다."
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_1"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "은빛 종소리로 네놈의 사슬과 화염 환영을 모조리 깨뜨려주마!"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "크크크, 옛 손님들처럼 영원히 이 서커스장의 재가 되어라!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "붉은 사슬이 온몸을 휘감으며 의식을 앗아간다."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "불꽃 속에 갇혀 영원히 무대의 일품이 되어라!"
					},
					"emotion": "happy",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…아직 이 지옥 같은 무대에서 쓰러질 수 없다!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			]
		}
	]
} as const;
