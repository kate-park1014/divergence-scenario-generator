export const scenario_modern_whisperweb_0_HCE_05 = {
	"scenario_id": "modern_whisperweb_0_HCE_05",
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
	"epilogue": {
		"korean": [
			"위스퍼 웹은 파괴되었다. 하지만 도시는 침묵하지 않았다.",
			"모든 전광판에는 여전히 사람들의 비밀이 흘러넘쳤다.",
			"신뢰는 무너지고, 유대는 끊겼다. 자유는 무분별한 폭로를 낳았다.",
			"구원받은 것은 없었다. 광기는 도시를 집어삼켰다.",
			"승리했지만, 남은 것은 잔인한 진실뿐이었다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "도시의 빌딩 숲 위로 거대한 홀로그램이 번져나갔다."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "빌딩 전체에 깨진 화면이 도배됐어."
					},
					"emotion": "base"
				},
				{
					"speaker": "echo",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "이봐! 제정신이 아니야!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "에코? 여기는 어떻게…"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "'모든 비밀은 곧 공개될 것'이라는 메시지가 진짜였어!"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "전광판마다 시민들 이름이랑 주소가 계속 바뀌며 뜨고 있어!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이게 정말 '광기의 대확장'인가."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "echo",
					"content": {
						"korean": "예전에는 무작위 이미지랑 숫자만 깜빡였는데… 이젠 진짜 정보야."
					}
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "벽에 그려진 'W' 모양 낙서도 더 선명해졌어."
					},
					"emotion": "base"
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "저 'W' 모양 낙서는 계속 나타나고 있었어. 단순한 낙서가 아니야."
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "도시의 모든 스크린에서 깨진 화면이 찰나의 순간 나타났다 사라졌다."
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "저거 봐. 또 다른 개인 기록이 공개되고 있어!"
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "echo",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "echo",
					"content": {
						"korean": "사람들이… 서로를 의심하기 시작했어."
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "시민들이 자신의 사적인 데이터가 도시 벽에 투영되는 꿈을 꿨다고 하던데."
					}
				},
				{
					"emotion": "angry",
					"speaker": "echo",
					"content": {
						"korean": "그게 시작이었어. 이제 데이터 유출이 공개적인 수치심으로 이어지고 있어."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "'모든 비밀이… 연결된다…'는 음성 기록이 진짜가 됐어. 과거 갱스터들이 그걸 만들었어."
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "이대로 두면 도시는 파괴돼."
					},
					"emotion": "angry",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "도시의 빌딩들이 거대한 홀로그램 스크린처럼 변했다. 위스퍼 웹이 도시를 뒤덮었다."
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "저게… 위스퍼 웹의 본체인가?"
					},
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
					"speaker": "echo"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "막아야 해. 당장 모든 걸 끊어야 해!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_3",
					"content": {
						"korean": "어떻게? 이미 모든 시스템을 장악했어."
					},
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"speaker": "echo",
					"content": {
						"korean": "네가! 이 모든 걸 멈춰야 해!"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "우리가? 우리가 뭘 할 수 있는데?"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "네가 파고든 모든 정보가… 결국 이놈을 키웠어. 이제 네가 끝내야 해."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "도시 곳곳의 전광판이 미친 듯이 번져나갔다. 위스퍼 웹의 깨진 얼굴이 나타났다."
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "저 괴물이 도시를 삼키고 있어!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "echo",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						1,
						3
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "늦었어… 이미 모든 게 연결됐어."
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아직 끝나지 않았어!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "그들을 봐. 사람들이 서로를 향해 손가락질하고 있어. 폭로된 비밀 때문에."
					},
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"speaker": "echo",
					"content": {
						"korean": "네가 해방하려 했던 자유가… 사람들을 파괴하고 있어!"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이제 되돌릴 수 없다는 건가."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "그래. 마지막 기회는… 모든 걸 끊는 거야. 물리적으로."
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "위스퍼 웹의 거대한 홀로그램이 도시 위에서 산산조각 났다."
					}
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "네가 이겼다고? 착각하지 마라… 승리는… 가장 큰 패배가 될 테니!"
					},
					"emotion": "sad"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "네가 구하려 했던 모든 이들의 가장 깊은 치부가… 드러났어."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "무슨… 무슨 소리야."
					},
					"type": "speech"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "협력을 통해 얻은 신뢰? 공동체의 유대? 자유? 모두… 산산조각 났지."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "도시의 모든 전광판에는 여전히 수많은 사람들의 비밀이 떠 있었다."
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "사람들은 서로를 향해 손가락질하며, 광기에 휩싸인 절망적인 웃음을 짓고 있었다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "narrator",
					"content": {
						"korean": "우리는 승리했지만… 도시의 모든 것이 무의미해진 비극을 맞이했다."
					}
				}
			],
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "도시의 모든 전파를 타고, 위스퍼 웹의 목소리가 울려 퍼졌다."
					}
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "환영한다, 영웅이여! 네가 여기까지 온 덕분에, 모든 게 완성되었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네놈의 광기는 여기서 끝이다!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "광기? 나는 그저… 진실을 밝힌 것뿐이다. 너희가 숨겨왔던 모든 비밀을."
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "시민들의 개인 정보는 왜 폭로하는 거지?"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "boss",
					"content": {
						"korean": "네 두려움, 네 거짓말, 네 가장 깊은 치부까지! 전부 나에게 있어!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그만둬!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "그리고 이제… 네 것이 될 거야!"
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"spot": [
						4,
						1
					],
					"speaker": "echo",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "echo",
					"content": {
						"korean": "안 돼! 모두가 미쳐가고 있어! 제발… 저 시스템을 파괴해!"
					}
				},
				{
					"duration_ms": 400,
					"type": "direction",
					"speaker": "echo",
					"action": "exit"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "위스퍼 웹의 홀로그램이 도시를 완전히 뒤덮었다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "네놈들의 노력은 언제나 나에게 더 큰 힘을 주는군."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "boss",
					"content": {
						"korean": "이제 도시의 모든 정보는… 내 통제 아래 있다!"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "젠장… 이대로 포기할 순 없어."
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "이 망가진 시스템을 반드시 초기화한다!"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"닥스 아카이브가 열리고 린의 거짓 공지가 도시를 감쌌다.",
			"카이의 금고를 열자 비극이 일어났다. 우리는 파괴와 혼돈을 만들었다.",
			"이제 위스퍼 웹은 도시 전체를 장악하고 있었다.",
			"모든 정보가 공개되는 광기의 대확장. 우리는 최종 대결에 나선다."
		]
	}
} as const;
