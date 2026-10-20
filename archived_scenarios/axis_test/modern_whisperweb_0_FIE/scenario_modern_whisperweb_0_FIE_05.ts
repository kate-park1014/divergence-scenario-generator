export const scenario_modern_whisperweb_0_FIE_05 = {
	"scenario_id": "modern_whisperweb_0_FIE_05",
	"order": 5,
	"act": "climax_finale",
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
		"pool_id": "pool_285"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "도시 전체의 디지털 간판에서 개인 기록들이 무작위로 10초간 송출되었다."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "이건… 내 이름과 주소잖아? 누가 이런 짓을!"
					}
				},
				{
					"speaker": "echo",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "결국 여기까지 왔군. 내가 마지막으로 경고했어야 했는데."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "echo"
				},
				{
					"type": "speech",
					"content": {
						"korean": "지금 당장 모든 연결을 끊어. 위스퍼 웹은 너의 모든 것을 보고 있어."
					},
					"emotion": "sad",
					"speaker": "echo"
				},
				{
					"content": {
						"korean": "난 이 혼란을 끝낼 거야. 지금 멈추면 모든 정보가 터져."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "echo"
				},
				{
					"content": {
						"korean": "네가 닥스 가게에서 서버를 부쉈을 때, 개인 기록 1200개가 같이 퍼졌어. 지금 거리의 광고판에 그게 뜨고 있어."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "echo"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그때는 어쩔 수 없었어. 위스퍼 웹을 막으려면…."
					}
				},
				{
					"speaker": "echo",
					"type": "speech",
					"content": {
						"korean": "변명하지 마. 네 방식은 결국 더 큰 폭력을 불렀어."
					},
					"emotion": "angry"
				},
				{
					"speaker": "echo",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "옛 갱단 은신처에서 나온 데이터 칩은 '모든 비밀은 연결된다'고 말했어. 그게 지금 현실이 됐잖아."
					}
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
					"speaker": "echo",
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "린의 제보자 기록, 카이의 가족 정보… 네 손으로 파괴한 모든 게 돌아왔어."
					},
					"emotion": "sad",
					"speaker": "echo",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "도시의 디지털 스크린에는 수천 명의 금융 기록과 사적인 사진이 동시 방송되었다."
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"emotion": "angry",
					"content": {
						"korean": "32곳에서 폭동이 일어났고, 7명이 죽었어. 네가 뿌린 정보가 사람들을 미치게 만들었어."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "막을 거야. 내가 직접 이 광기를 끝낼 거야."
					}
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "제발 멈춰. 이제 멈춰야 해. 더 이상은 아무것도 남지 않아."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "direction",
					"direction": "down",
					"action": "exit",
					"speaker": "echo",
					"duration_ms": 400
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "도시 곳곳에서 '생각을 읽는 광고판'이라는 도시 괴담이 실제처럼 퍼졌다."
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "수많은 시민들은 왜곡된 얼굴과 속삭임을 듣는 기이한 악몽에 시달렸다."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이대로 멈출 수 없어. 모든 비밀이 터지기 전에… 내가 직접 이 흐름을 파괴해야 해."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "주인공은 도시의 중앙 데이터 코어로 발걸음을 옮겼다. 되돌릴 수 없는 결정이었다."
					},
					"speaker": "narrator"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "도시 중앙 데이터 코어. 거대한 서버 기계 앞에, 정보가 얽힌 덩어리가 나타났다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "boss",
					"emotion": "base",
					"content": {
						"korean": "왔군. 네 어리석음이 날 여기까지 키웠어. 네가 푼 정보 때문에 난 4배 더 커졌지."
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네 존재를 파괴하면 모든 게 멈출 거야."
					},
					"emotion": "angry"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "나는 그저 흐름을 탔을 뿐. 모든 비밀은 이제 네 손으로 공개됐어."
					}
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "위스퍼 웹이 모든 정보를 집어삼키며 도시를 장악했다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "네가 싸운 건 나였나? 아냐. 네가 파괴한 건 너 자신이야. 도시의 기록은 이제 전부 내 거야."
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "젠장… 난 도시의 중앙 기록 보관소를 찾아낼 거야. 아직…."
					}
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "날 파괴해도 소용없어. 도시의 모든 비밀은 이제 없어. 네 두려움, 네 거짓말까지… 전부 공개됐어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…아니야. 난 이 혼란을 끝내려고…."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "위스퍼 웹의 물리적 형태는 파괴되었다. 그러나 도시의 모든 이들은 서로의 비밀을 알게 되었다."
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "더 이상 비밀이 없는 사람들의 광기와 절망이 주인공에게 향했다. 승리는 허망했다."
					},
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"도시의 디지털 네트워크, '위스퍼 웹'이 마침내 물리적 형태를 갖췄다.",
			"주인공은 위스퍼 웹의 실체를 파괴하기 위해 도시 가장 깊은 곳으로 향했다.",
			"지금까지의 폭력적인 행동은 정보 혼란을 가속화시켰다.",
			"모든 것이 폭로된 도시, 그리고 감당할 수 없는 대가가 기다리고 있었다."
		]
	},
	"epilogue": {
		"korean": [
			"위스퍼 웹의 물리적 파괴 후, 도시는 기묘한 침묵에 잠겼다.",
			"모든 비밀은 드러났고, 사람들의 시선은 더 이상 예전과 같지 않았다.",
			"개인의 정보가 무기가 된 세상에서, 주인공은 홀로 남겨졌다.",
			"과연 이것이 승리일까. 아니면, 더 큰 광기의 시작일까."
		]
	}
} as const;
