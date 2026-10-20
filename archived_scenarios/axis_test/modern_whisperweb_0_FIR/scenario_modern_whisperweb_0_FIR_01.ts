export const scenario_modern_whisperweb_0_FIR_01 = {
	"scenario_id": "modern_whisperweb_0_FIR_01",
	"order": 1,
	"act": "intro",
	"theme": "modern",
	"actors": {
		"echo": {
			"id": "mon_57f2edb8-aa81-4ce7-beed-ab009cd2ff35",
			"name": {
				"korean": "에코",
				"english": "Echo",
				"japanese": "エコー",
				"chinese": "艾可",
				"french": "Écho",
				"spanish": "Eco",
				"vietnamese": "Echo",
				"thai": "เอคโค่",
				"hindi": "इको"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/da48e2c2-6733-4f65-f8b6-f197af4ff700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e90605b9-372f-4bf1-cdec-56a2fdef0800/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"네온 불빛 아래, 도시는 정보로 움직인다.",
			"그러나 알 수 없는 신호 교란이 시작됐다.",
			"정보상 에코는 곧 모든 비밀이 드러날 것이라 경고했다.",
			"우리는 도시의 가장 깊은 곳으로 향한다. 이 혼란의 근원을 찾기 위해."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "어두운 골목, 디지털 간판의 빛이 거리에 흩뿌려졌다."
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "여기가 에코가 말한 곳인가."
					},
					"type": "speech"
				},
				{
					"speaker": "echo",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						1
					]
				},
				{
					"type": "speech",
					"speaker": "echo",
					"emotion": "base",
					"content": {
						"korean": "왔군. 예상보다 빠르네."
					}
				},
				{
					"speaker": "echo",
					"emotion": "base",
					"content": {
						"korean": "도시에 이상한 신호가 돌고 있어. 정보가 자꾸 깨져."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "무슨 소리지?"
					}
				},
				{
					"type": "speech",
					"speaker": "echo",
					"emotion": "base",
					"content": {
						"korean": "이 영상 봐. 이것도 그 파편 중 하나야."
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "낡은 단말기 화면에 깨진 영상과 함께 메시지가 깜빡였다. '모든 비밀은 곧 공개될 것'."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						1
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "echo",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "방금 지나온 거리의 광고판을 봤어?"
					},
					"speaker": "echo",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "깨진 간판? 단순한 오류인 줄 알았는데."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그게 아니야. 도시 곳곳에서 저런 현상이 나타나고 있어."
					},
					"speaker": "echo",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "가까운 디지털 간판이 찰나의 순간 깨진 이미지와 무의미한 숫자 배열을 내보냈다. 그리고 사라졌다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "이건 '위스퍼 웹'이 보내는 신호야. 경고 같은 거지."
					},
					"type": "speech",
					"speaker": "echo",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "경고?"
					}
				},
				{
					"speaker": "echo",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "곧 더 큰 정보들이 터질 거야. 모든 개인 기록이."
					}
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "echo",
					"type": "direction",
					"spot": [
						3,
						1
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "위스퍼 웹은 특정 정보를 조작해서 혼란을 만들고 있어."
					},
					"emotion": "base",
					"speaker": "echo",
					"type": "speech"
				},
				{
					"content": {
						"korean": "왜 그런 짓을 하는 거지?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "그들은 도시의 모든 비밀을 공개하려 해."
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "echo"
				},
				{
					"emotion": "sad",
					"speaker": "echo",
					"type": "speech",
					"content": {
						"korean": "네가 아는 모든 정보, 모든 사람의 약점이 드러날 거야."
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "말도 안 돼."
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "이 도시에선 비밀이 곧 무기야. 그 무기가 모두에게 퍼지는 걸 막아야 해."
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "echo",
					"action": "enter",
					"type": "direction",
					"spot": [
						1,
						1
					],
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"speaker": "echo",
					"type": "speech",
					"content": {
						"korean": "더 이상 진행하면 되돌릴 수 없어."
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이미 늦었을지도 몰라."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "이대로 가면, 너희가 찾는 정보뿐 아니라 너희의 모든 것도 공개될 거야. 네 가족의 주소, 네 은행 계좌 번호."
					},
					"speaker": "echo",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "그들을 막아야 해."
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "주인공은 한 손에 단말기를 든 채 멈추지 않았다. 길 끝에는 거대한 서버실이 보였다."
					},
					"type": "speech"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "결국 너는 하나도 막지 못했다. 이미 전송은 끝났다."
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "뭐라고?"
					}
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "echo",
					"type": "direction",
					"spot": [
						4,
						1
					]
				},
				{
					"speaker": "echo",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "안 돼… 이미… 데이터 전송이 시작됐어."
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "이럴 수가."
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "도시의 모든 디지털 간판과 개인 기기에서 깨진 신호와 함께 무작위 개인 정보가 찰나의 순간 나타났다 사라지기 시작했다."
					},
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "네 정보가 먼저 이 도시를 떠다니게 될 것이다. 처음으로."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "아직 끝나지 않았어. 당장 저 송출실부터 다시 해킹한다."
					}
				}
			],
			"id": 15,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "서버실 중앙, 수많은 전선과 불빛이 복잡하게 얽힌 기계 앞에 누군가 서 있었다."
					}
				},
				{
					"content": {
						"korean": "왔군. 예상대로 여기까지 올 줄 알았다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "네가 위스퍼 웹의 배후인가?"
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "배후? 나는 그저 보여줄 뿐이다. 모든 것을."
					}
				},
				{
					"content": {
						"korean": "뭘 보여준다는 거야."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "진실. 사람들이 숨기고 싶어하는 모든 것. 오늘 밤, 이 도시의 모든 화면에 떠오를 것이다."
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "막겠다."
					}
				}
			]
		}
	]
} as const;
