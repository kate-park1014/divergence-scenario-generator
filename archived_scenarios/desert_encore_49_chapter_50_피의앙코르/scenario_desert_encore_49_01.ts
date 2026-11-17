export const scenario_desert_encore_49_01 = {
	"scenario_id": "desert_encore_49_01",
	"order": 1,
	"act": "intro",
	"theme": "desert",
	"actors": {
		"amir": {
			"id": "mon_0096d602-52ab-4a9c-9cc8-4ff18ed3b655",
			"name": {
				"korean": "아미르",
				"english": "Amir",
				"japanese": "アミール",
				"chinese": "阿米尔",
				"french": "Amir",
				"spanish": "Amir",
				"vietnamese": "Amir",
				"thai": "อาเมียร์",
				"hindi": "अमीर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8cd60fb0-3699-44c4-6425-a3e97eec1800/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/b644dc95-9c27-442e-6dc6-73e5550a0200/public"
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
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "amir",
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "amir",
					"emotion": "sad",
					"content": {
						"korean": "보이나? 쓰러진 동료의 가슴에 새겨진 놋쇠 회중시계 각인이다."
					}
				},
				{
					"content": {
						"korean": "이 시계 태엽을 돌리면 환각을 물리칠 단서가 나올지도 몰라."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "태엽을 감자 째깍거리는 소리와 함께 시계 유리창 안쪽에 가느다란 균열 하나가 생겨났다."
					}
				},
				{
					"speaker": "character_1",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…피비린내 속에 태엽 소리가 서늘하게 맴돌아."
					}
				},
				{
					"content": {
						"korean": "시계를 챙겨라. 이 태엽 진동이 환각 무대의 첫 번째 균열이다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "amir"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "amir",
					"spot": [
						3,
						3
					],
					"action": "enter"
				},
				{
					"speaker": "amir",
					"emotion": "angry",
					"content": {
						"korean": "살아남은 자의 증언에 따르면, 환각 소리가 들린 직후 서로를 적으로 착각해 공격했다더군."
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "환영 소리로 파티원끼리 피를 흘리게 만들었다는 뜻인가."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "…사방이 정적뿐이라 오히려 소름이 돋는다."
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "시계의 째깍거림이 환각 소리를 가려주고 있어. 멈추지 마라."
					},
					"speaker": "amir"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "amir",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "검은 모래가 흩뿌려진 바위 그늘 아래 핏자국이 길게 이어진다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "극단의 습격조가 지나는 길이다. 검은 모래 흔적을 따라가면 놈들의 경계선에 닿는다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "amir"
				},
				{
					"content": {
						"korean": "핏자국과 검은 모래를 추적해서 단숨에 쳐부수겠다."
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "…발밑이 푹푹 꺼지는 게 안 좋은 예감이 들어."
					},
					"emotion": "sad",
					"speaker": "character_3",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "amir",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "붉은 모래바람이 사방을 휘감으며 시야를 거세게 가린다."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 바람 너머가 {random_boss}의 지배 구역이다. 전진 외엔 길은 없다."
					},
					"emotion": "angry",
					"speaker": "amir",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "동료의 원한을 갚기 전까진 결코 물러서지 않는다."
					},
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…숨이 턱턱 막혀 오지만 멈출 수 없어."
					},
					"type": "speech",
					"speaker": "character_4"
				},
				{
					"type": "speech",
					"speaker": "amir",
					"emotion": "base",
					"content": {
						"korean": "좋다. 놋쇠 회중시계 태엽을 단단히 고정하고 진입하라."
					}
				}
			]
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽... 회중시계의 태엽 소리가... 환각의 조율을 비틀다니..."
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "증거는 확보했다. 무대의 흑막을 향해 계속 나아간다."
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "쓰러진 파수꾼 너머로 붉은 천막과 잔혹한 환영 무대의 입구가 모습을 드러냈다."
					},
					"speaker": "narrator"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "모래 언덕 위로 거대한 환영의 형상이 솟아오른다."
					},
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"speaker": "random_boss",
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						4
					]
				},
				{
					"content": {
						"korean": "침입자들이여, 사막의 환영 무대에 발을 들이지 마라. 이 앞은 금단의 영역이다!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "동료들을 참살한 죄, 피 묻은 회중시계의 이름으로 단죄하겠다!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "태엽을 돌려보았자 죽음의 환영 춤을 멈출 수는 없다!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "모래 속에 영원히 매몰되어 환각에 갇혀 쓰러져라."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "…아직 놋쇠 시계의 태엽은 멈추지 않았다. 다시 일어설 것이다."
					},
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"가짜 환영과 피로 물든 모래사막.",
			"환영 무대의 태엽 소리를 들은 자들은 헛것을 보며 동료를 베어 넘겼다.",
			"사막 입구에 남은 건 차갑게 식어간 시신과 놋쇠 회중시계뿐.",
			"피 묻은 증거를 쥐고, 사막의 환상 속으로 첫발을 디딘다."
		],
		"english": [],
		"japanese": [],
		"chinese": [],
		"french": [],
		"spanish": [],
		"vietnamese": [],
		"thai": [],
		"hindi": []
	}
} as const;
