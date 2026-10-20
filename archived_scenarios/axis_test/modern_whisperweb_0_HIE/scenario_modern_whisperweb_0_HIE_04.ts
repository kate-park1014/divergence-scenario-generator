export const scenario_modern_whisperweb_0_HIE_04 = {
	"scenario_id": "modern_whisperweb_0_HIE_04",
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
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "버려진 창고 안, 카이는 낡은 테이블에 앉아 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"speaker": "kai"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "왔군. 예상보다 빨라."
					},
					"speaker": "kai",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "위스퍼 웹의 장부. 가지고 있다는 소문이 돌던데."
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "거래라면 환영이야. 뭘 원해?"
					},
					"speaker": "kai",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "kai",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 장부, 위스퍼 웹의 징표가 찍혀 있어. 위험한 물건이지."
					},
					"emotion": "base",
					"speaker": "kai"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "뭘 원해? 안전한 도피 자금?"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "정확해. 내 과거가 위스퍼 웹에 폭로될까 두려워. 도피 자금이 필요해."
					},
					"type": "speech",
					"speaker": "kai"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "내가 원하는 정보와 네가 원하는 돈. 거래하지."
					},
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "도시 곳곳의 디지털 간판에서 무작위로 깨진 숫자 배열이 찰나의 순간 나타났다 사라졌다."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "kai",
					"spot": [
						3,
						3
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "여기, 네 도피 자금."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "두툼한 돈뭉치를 건네자, 카이는 낡은 장부를 테이블에 밀었다."
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"emotion": "happy",
					"content": {
						"korean": "장부는 네 거야. 그런데… 흥미로운 걸 발견했지 뭐야."
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "카이는 장부의 특정 페이지를 펼쳤다. 그곳에는 주인공의 과거 불법 활동 기록이 있었다."
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "네가 위스퍼 웹을 파고든다고? 네 과거도 꽤 지저분하더군."
					},
					"speaker": "kai"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…어떻게 알았지?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "kai",
					"type": "speech",
					"content": {
						"korean": "이 장부에 위스퍼 웹 정보랑 섞여 있더라고. 이 정도면 가격을 더 받아야겠는데?"
					},
					"emotion": "happy"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "장난치지 마!"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						3
					],
					"speaker": "kai",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "돈을 더 내놔. 아니면 네 과거가 도시 전광판에 뜰 거야. 위스퍼 웹이 좋아하겠지."
					},
					"speaker": "kai",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "협박하는 거야?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "기회는 한 번이야. 난 도망가야 한다고."
					},
					"emotion": "base",
					"speaker": "kai",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "어둡고 습한 골목 벽면에서 특정 패턴의 낙서가 선명하게 눈에 띄었다."
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "…더 이상은 안 돼. 여기서 끝내야 해."
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "주인공은 카이를 막기로 결심했다. 돌이킬 수 없는 선택이었다."
					},
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "낡은 장부가 펼쳐진 서버 앞에 정체 모를 자가 서 있었다."
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "오래 기다렸어. 카이의 장부… 네 과거가 담겨 있더군."
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이 모든 게 네 짓이었나."
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "난 그저 사실을 띄웠을 뿐. 사람들은 그걸 보길 원해."
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네 뜻대로는 안 돼."
					},
					"emotion": "angry"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "네 과거는 이제 모두에게 공개될 거야. 피할 수 없어."
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "아니. 내 정보를 다시 확보해야 해. 위스퍼 웹을 파헤친다."
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "네 과거는 이미 뿌려졌어. 이 장부가 전부가 아니야. 모든 비밀은 연결된다."
					},
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "시끄러워. 네 수작은 통하지 않아."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "정체 모를 자가 쓰러졌다. 그러나 장부에 담긴 정보는 이미 어딘가로 새어나갔다."
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "위스퍼 웹의 정보 침투가 가속화되면서, 도시 괴담이 급속도로 퍼지기 시작했다."
					},
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"린의 정보는 또다시 유출되었다.",
			"위스퍼 웹은 멈추지 않고 도시를 잠식했다.",
			"다음 단서는 과거 갱스터 조직의 정보책, 카이.",
			"그는 위스퍼 웹의 표식이 담긴 낡은 장부를 팔아 도피 자금을 마련하려 했다.",
			"그 장부에 진실이 담겨 있었다."
		]
	}
} as const;
