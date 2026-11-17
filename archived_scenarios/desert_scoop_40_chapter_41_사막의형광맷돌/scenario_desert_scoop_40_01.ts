export const scenario_desert_scoop_40_01 = {
	"scenario_id": "desert_scoop_40_01",
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
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "핏빛으로 물든 오아시스 주변에 토막 난 상인들의 시신이 널려 있다."
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "…지독한 피비린내와 네온 냄새가 섞여서 머리가 아프네."
					}
				},
				{
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "amir",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"speaker": "amir",
					"content": {
						"korean": "살려주시오! 사막 살인마가 내 동료들을 전부 도륙했소!"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "시체 옆마다 오색 형광 시럽이 흘러넘치는 차가운 칼자국이 흩어져 있어."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "그 잔혹한 놈이 형광 시럽을 흩뿌리며 검을 휘둘렀던 게 틀림없소!"
					},
					"speaker": "amir",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "모래바람이 불 때마다 기괴한 네온 빛 입자가 날린다."
					},
					"speaker": "character_2"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						4
					],
					"type": "direction",
					"speaker": "amir"
				},
				{
					"emotion": "angry",
					"speaker": "amir",
					"content": {
						"korean": "그쪽 모래밭도 살인마가 흔적을 남긴 자리요! 빨리 확인해보시오!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "모래밭에 찌그러진 형광 시럽 병과 피살된 상인들의 독약 용기가 파묻혀 있어."
					}
				},
				{
					"speaker": "amir",
					"content": {
						"korean": "상인들이 스스로를 보호하려고 품에 품고 있던 호신용 독약일 뿐이오!"
					},
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "오아시스 한가운데에 오색빛으로 반짝이는 무지개 유리 맷돌이 멈춰 서 있다."
					}
				},
				{
					"content": {
						"korean": "맷돌 중심부에서 엄청난 열기가 뿜어져 나오는 중이야."
					},
					"speaker": "character_3",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "오아시스의 사막 기온 상승을 멈추려면 무지개 유리 맷돌을 반대 방향으로 돌려야 해."
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…억지로 손을 댔다가 맷돌이 파괴될까 걱정되는데."
					},
					"speaker": "character_4"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "맷돌을 억지로 반대 방향으로 꺾어 돌리자 기분 나쁜 마찰음이 사막을 울린다."
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "narrator",
					"action": "shake",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "맷돌을 역방향으로 조작하자 마검의 봉인이 자극받아 사막 바닥이 흔들리기 시작했어."
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"duration_ms": 500,
					"speaker": "random_boss",
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						2
					]
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "멈춰라! 맷돌의 봉인을 함부로 건드리면 사막 전체가 끓는 가루로 변한다!"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "사막 현장조사관이 나타나 맷돌 조작을 가로막고 있어."
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "현장을 훼손하고 오아시스의 봉인을 해제하려는 자들을 좌시할 수 없다!"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "…말이 통할 상대가 아니로군."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "조사를 방해하는 자를 쓰러뜨려야만 무지개 유리 맷돌의 진실을 파헤칠 수 있어!"
					}
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "윽… 맷돌을 멈춘다 해도… 칼자국의 진실은 너희 생각과 다를 것이다…"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "사막 현장조사관을 제압했다. 이제 시체에 남은 삭설 칼자국을 추적해야 해."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "핏빛 오아시스 너머로 형광 시럽 저장고의 깊은 어둠이 짙게 깔린다."
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 자들… 오아시스의 경고를 무시한 대가다."
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…아직 포기할 수 없어. 형광 핏자국 뒤의 진짜 범인을 찾아낼 거야."
					},
					"type": "speech",
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"찌는 듯한 열기와 네온 빛이 교차하는 핏빛 사막 오아시스.",
			"토막 난 상인들의 시신 위로 기괴한 형광 핏자국이 흘러넘친다.",
			"살인마의 소행이라며 비명을 지르는 상인 아미르의 목소리가 조용한 사막을 찢는다.",
			"핏빛 검자국과 맷돌 뒤에 숨겨진 잔혹한 진실을 추적해야 한다."
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
