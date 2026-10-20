export const scenario_modern_whisperweb_0_FIR_02 = {
	"scenario_id": "modern_whisperweb_0_FIR_02",
	"order": 2,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"dax": {
			"id": "mon_08d5b43e-f9ab-4469-9064-855e170b0cdc",
			"name": {
				"korean": "닥스",
				"english": "Dax",
				"japanese": "ダックス",
				"chinese": "达克斯",
				"french": "Dax",
				"spanish": "Dax",
				"vietnamese": "Dax",
				"thai": "แด็กซ์",
				"hindi": "डैक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/84bb11db-6eb4-4500-d274-222e8b100100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5d325a75-bd91-4758-7b3f-ad9a97e52700/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"에코의 서버 랙은 부쉈지만 명단은 이미 복사됐다.",
			"그날 밤 광고판에 스물세 명의 이름이 10초씩 떴다.",
			"시청 폐쇄 서버의 데이터 스트림은 아직 살아 있었다.",
			"그걸 읽을 수 있는 사람은 한 명뿐이다. 전직 아키비스트, 닥스."
		]
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
						"korean": "지하 4층, 환풍구에서 열기가 새어 나오는 좁은 작업실."
					}
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "dax",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "dax",
					"emotion": "angry",
					"content": {
						"korean": "문 안 열어. 어제 스물세 명 뜬 거 봤어."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "네 서버에 그 스트림 흔적이 남아 있잖아."
					}
				},
				{
					"type": "speech",
					"speaker": "dax",
					"emotion": "angry",
					"content": {
						"korean": "남아도 안 열어. 내 이름도 올라가면 끝이야."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "끝난 건 에코야. 열어."
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "dax",
					"duration_ms": 500,
					"spot": [
						2,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "dax",
					"emotion": "angry",
					"content": {
						"korean": "이건 2019년 시청 폐쇄 백업이야. 건드리면 안 돼."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "스트림이 그 안으로 들어갔어. 어디로 갔는지 봐."
					}
				},
				{
					"type": "speech",
					"speaker": "dax",
					"emotion": "sad",
					"content": {
						"korean": "…이상해. 출력 경로가 내 개인 폴더로 잡혀 있어."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "그게 무슨 뜻이야."
					}
				},
				{
					"type": "speech",
					"speaker": "dax",
					"emotion": "angry",
					"content": {
						"korean": "누가 내 주소를 읽고 있다는 뜻이야. 지금."
					}
				},
				{
					"type": "direction",
					"action": "shake",
					"speaker": "dax",
					"duration_ms": 400
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "작업실 모니터 세 대가 동시에 켜졌다. 아무도 손대지 않았다."
					}
				},
				{
					"type": "speech",
					"speaker": "dax",
					"emotion": "sad",
					"content": {
						"korean": "내 연구 폴더가 밖으로 나가고 있어. 412건."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "뭘 연구했는데."
					}
				},
				{
					"type": "speech",
					"speaker": "dax",
					"emotion": "angry",
					"content": {
						"korean": "시민 재산 기록. 이름 빼고 모은 거야. 이름은 안 넣었어."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "위스퍼 웹이 이름을 붙이면."
					}
				},
				{
					"type": "speech",
					"speaker": "dax",
					"emotion": "sad",
					"content": {
						"korean": "붙이면 그건 내가 만든 명단이 돼."
					}
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
						"korean": "다운로드 바가 100%가 됐다. 닥스의 손이 키보드 위에서 멈췄다."
					}
				},
				{
					"type": "speech",
					"speaker": "dax",
					"emotion": "sad",
					"content": {
						"korean": "끝났어. 412건 전부 시민 정보랑 섞여 나갔어."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "되돌릴 수 있어?"
					}
				},
				{
					"type": "speech",
					"speaker": "dax",
					"emotion": "angry",
					"content": {
						"korean": "복사본이 셋이야. 하나는 저 광고판에 있어."
					}
				},
				{
					"type": "speech",
					"speaker": "dax",
					"emotion": "angry",
					"content": {
						"korean": "내가 3년 모은 걸 네가 3분에 팔았어."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "…광고판부터 끊는다."
					}
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "서버 랙 앞에 누군가 서 있었다. 케이블을 뽑고 있었다."
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "happy",
					"content": {
						"korean": "412건 잘 받았어. 덕에 오늘 명단 값이 올랐어."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "닥스 자료는 왜 썼어."
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "그 사람 폴더가 제일 깔끔했거든. 네가 열라고 했잖아."
					}
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "이 랙 부숴도 소용없어. 칩 하나는 네 주머니에 있어."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "무슨 칩."
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "happy",
					"content": {
						"korean": "그거 재생하면 네가 제일 먼저 후회할걸."
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "바닥에 떨어진 칩에서 잡음 섞인 목소리가 한 줄 흘렀다. '모든 비밀이… 연결된다…'"
					}
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "닥스 폴더는 잘 쓸게. 이름은 내가 붙일 거야."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "닥스한테 먼저 사과하고, 새벽에 랙 다시 온다."
					}
				}
			]
		}
	]
} as const;
