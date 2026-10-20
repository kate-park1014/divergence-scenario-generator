export const scenario_modern_whisperweb_0_FIE_04 = {
	"scenario_id": "modern_whisperweb_0_FIE_04",
	"order": 4,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"kai": {
			"id": "mon_d7f29313-b8fb-49da-9a1a-01df5d13866e",
			"name": {
				"korean": "카이",
				"english": "Kai",
				"japanese": "カイ",
				"chinese": "凯",
				"french": "Kai",
				"spanish": "Kai",
				"vietnamese": "Kai",
				"thai": "ไค",
				"hindi": "काई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f10d9184-4155-4bb9-de2d-db61463f7c00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e41f8e03-08c9-4a4f-6f72-fa9342876f00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "허름한 세탁소, 낡은 간판에 '카이의 빨래방'이 희미하게 쓰여 있었다."
					}
				},
				{
					"duration_ms": 500,
					"speaker": "kai",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "카이. 과거 '크림슨 코일' 갱단의 행동대장이었다며?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "…누구야. 난 그런 이름 몰라. 그저 평범하게 살고 있어."
					}
				},
				{
					"content": {
						"korean": "네가 숨긴 갱단 암호, 위스퍼 웹이 찾고 있어."
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "내가 아는 건 없어. 돌아가."
					},
					"emotion": "angry",
					"speaker": "kai",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "kai",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "내 가족은 이 일과 아무 상관 없어. 그들을 건드리지 마."
					},
					"speaker": "kai",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "크림슨 코일의 은신처 정보, 내놔. 아니면 네 평화로운 삶을 폭로할 거야."
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "kai",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "협박이야? 내 인생을 망치려는 건가?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "위스퍼 웹은 네 가족 정보도 찾아낼 수 있어. 네 선택이야."
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그걸 공개하면… 내 삶은 끝장이야. 제발."
					},
					"speaker": "kai",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "도시 곳곳의 디지털 간판에서 무작위로 깨진 이미지와 의미 없는 숫자 배열이 찰나의 순간 나타났다 사라졌다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"speaker": "kai",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "…좋아. 알려줄게. 외곽의 버려진 창고에 은신처가 있어."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "kai"
				},
				{
					"content": {
						"korean": "진작 그럴 것이지. 쓸데없이 고집부렸네."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "내 가족만은… 제발 건드리지 마."
					},
					"speaker": "kai",
					"emotion": "sad"
				},
				{
					"speaker": "kai",
					"direction": "down",
					"type": "direction",
					"duration_ms": 400,
					"action": "exit"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "카이가 알려준 정보로 오래된 갱단 은신처를 찾아냈다. 찢어진 장부가 바닥에 떨어져 있었다."
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "이거… 크림슨 코일의 장부잖아."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "장부 속에서 재생 불가능한 오류 메시지와 함께 '모든 비밀이… 연결된다…'라는 단편적인 음성 기록이 흘러나왔다."
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "찢어진 장부에는 카이의 가족 정보가 빼곡히 적혀 있었다. 위스퍼 웹은 이를 놓치지 않았다."
					}
				},
				{
					"content": {
						"korean": "도시의 모든 디지털 스크린에 카이의 가족 이름과 주소가 10초간 송출되었다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"spot": [
						2,
						3
					],
					"speaker": "kai",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "안 돼… 안 돼! 내 가족을 건드리지 마!"
					},
					"speaker": "kai",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "…난 정보를 얻으려 했을 뿐이야."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"speaker": "kai",
					"content": {
						"korean": "내 삶을 전부 망쳤어. 용서 못 해… 죽여버릴 거야."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "어둡고 습한 골목 벽면에서 반복되는 나선형 문양의 낙서가 눈에 띄었다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "네놈 때문에 가족이 위험해졌어. 모든 게 망가졌다고!"
					}
				},
				{
					"content": {
						"korean": "…내 손으로 끝내주겠어."
					},
					"speaker": "kai",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"action": "exit",
					"speaker": "kai",
					"direction": "down",
					"type": "direction",
					"duration_ms": 400
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "갱단의 은신처 지하, 복잡한 데이터 허브가 숨겨져 있었다. 그 앞에 정체 모를 자가 서 있었다."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "왔군. 네가 카이의 모든 걸 공개했더군. 대단해."
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "네가 위스퍼 웹인가? 왜 모든 정보를 흘리고 다녀?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "난 그저 흐름을 탈 뿐. 네가 촉발시킨 정보를 퍼뜨렸을 뿐이다."
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그 흐름을 멈추겠어."
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "데이터 허브가 폭주하며 모든 것을 집어삼켰다."
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 놈. 정보는 멈추지 않아. 카이의 분노는 너를 향할 거다."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "젠장… 카이의 가족부터 찾아야 해."
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "날 막아도… 카이의 가족은 이미 위험에 빠졌어. 네 손으로 모든 걸 망쳤을 뿐이야."
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "아니. 아직 끝나지 않았어."
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "정체 모를 자가 쓰러지자 데이터 허브는 잠시 침묵했다. 그러나 도시에는 기이한 꿈과 소문이 더욱 빠르게 퍼지기 시작했다."
					}
				},
				{
					"content": {
						"korean": "혼란은 멈추지 않는다. 모든 비밀이 연결되는 곳으로, 다음 단계가 시작될 뿐이다."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"도시의 소문은 현실이 되었고, 폭동은 걷잡을 수 없었다.",
			"주인공은 위스퍼 웹이 남긴 갱스터 암호의 흔적을 쫓았다.",
			"과거를 숨긴 채 살아가는 카이. 그를 찾아내 협박했다.",
			"평화로운 삶을 지키려는 자와 진실을 파헤치려는 자의 충돌이 시작된다."
		]
	}
} as const;
