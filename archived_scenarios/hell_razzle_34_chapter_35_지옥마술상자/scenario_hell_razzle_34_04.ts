export const scenario_hell_razzle_34_04 = {
	"scenario_id": "hell_razzle_34_04",
	"order": 4,
	"random_boss_title": {
		"korean": "경비대장"
	},
	"act": "rising",
	"theme": "hell",
	"actors": {
		"soot": {
			"id": "mon_a0491490-e114-44d8-855c-d2d63b020da1",
			"name": {
				"korean": "그을음",
				"english": "Soot",
				"japanese": "煤",
				"chinese": "煤烟",
				"french": "Suie",
				"spanish": "Hollín",
				"vietnamese": "Bồ hóng",
				"thai": "เขม่า",
				"hindi": "कालिख"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2275d372-4e89-4725-193c-fccc0b944300/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d1d5ba2b-da7c-4b75-42de-07c9cdda5d00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"알록달록한 기둥들이 늘어선 무지개 기둥 통로.",
			"상자의 톱니바퀴를 멈출 수단을 찾아 이곳에 발을 들였다.",
			"통로 너머에서 광대를 숭배하는 위협적인 기척이 조여온다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 무지개 빛 기둥들이 통로 끝까지 길게 늘어서 있다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "soot"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "히익! 사람인가요? 난 기둥 뒤에 숨어 살던 은둔자 그을음이에요."
					},
					"speaker": "soot"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "상자를 정지시킬 단서를 찾아 이 통로로 왔다."
					},
					"speaker": "character_any"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "…기둥 뒤에서 떨고 있는 모습이 짠하네."
					},
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "soot",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "바닥에서 주운 서커스 풍금 악보예요. 꽂힌 태엽 열쇠를 뽑아야 괴물의 톱니가 멈춘다고 적혀 있어요."
					},
					"speaker": "soot"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "열쇠를 꽂아 돌리는 게 아니라 뽑아야 톱니를 멈출 수 있군."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "…소름 끼치는 풍금 소리가 환청처럼 들려."
					},
					"speaker": "character_2",
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "soot"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "soot",
					"content": {
						"korean": "이 앞에는 광대를 숭배하는 경비대장이 길을 막고 있어요. 저는 무서워서 더 못 가요."
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "소중한 정보를 고맙다. 열쇠는 우리가 반드시 뽑아내겠다."
					},
					"speaker": "character_any"
				},
				{
					"duration_ms": 400,
					"speaker": "soot",
					"direction": "down",
					"action": "exit",
					"type": "direction"
				},
				{
					"speaker": "character_3",
					"content": {
						"korean": "…통로 저편에서 묵직한 갑옷 소리가 울린다."
					},
					"emotion": "angry",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "바닥에 흩어진 서커스 풍금 악보 위로 붉은 빛이 일렁인다."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "악보가 가리키는 대로 태엽 열쇠를 찾아 무대로 가야 한다."
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_4",
					"content": {
						"korean": "…발밑에서 진동이 점점 강해지고 있어."
					}
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"emotion": "angry",
					"content": {
						"korean": "광대 님의 은혜를 모르는 우둔한 놈들, 여기서 쓰러져라!"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…아직 포기하지 않았다. 다시 전열을 가다듬자."
					},
					"emotion": "angry"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "무지개 기둥 통로 끝, 광대를 숭배하는 경비대장이 무기를 들어 올린다."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "광대 님의 마술 상자를 건드리려는 자는 단 한 발짝도 지나갈 수 없다!"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "영혼을 가르는 톱니를 멈추기 위해 열쇠를 뽑으러 가겠다!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…무거운 압박감이 몸을 짓눌러온다."
					},
					"speaker": "character_1"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 내가 쓰러져도 광대 님이 서커스 무대에서 너희를 기다리실 거다…"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "경비대장이 쓰러졌다. 이제 악보가 가리키는 서커스 무대로 향하자."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…화려하고 조용한 무대가 눈앞에 보여."
					},
					"speaker": "character_2",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "경비대장을 물리친 탐험대는 마침내 광대가 기다리는 서커스 무대로 발걸음을 옮긴다."
					}
				}
			]
		}
	]
} as const;
