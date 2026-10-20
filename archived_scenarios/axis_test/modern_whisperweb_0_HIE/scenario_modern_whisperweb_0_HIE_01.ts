export const scenario_modern_whisperweb_0_HIE_01 = {
	"scenario_id": "modern_whisperweb_0_HIE_01",
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
			"도시는 네온 불빛 아래 잠들어 있었다.",
			"하지만 소문은 빛보다 빠르게 퍼졌다.",
			"정체불명의 정보 교란. 모든 비밀이 새어나온다.",
			"주인공은 그 진실을 찾아 움직이기 시작했다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "어두운 골목, 스크린에는 깨진 이미지들이 스쳤다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "정보 교란. 또 시작인가."
					}
				},
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "echo",
					"spot": [
						4,
						2
					]
				},
				{
					"speaker": "echo",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "왔군. 예상대로 빠르게 움직이는군."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "무슨 일이야, 에코. 또 이상한 소문이 돌던데."
					},
					"emotion": "base"
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "소문이 아니야. 도시 전체의 정보 흐름에 균열이 생기고 있어."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "echo",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "디지털 간판들이 갑자기 깨진 신호를 띄우고 있다고."
					}
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "echo"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"emotion": "base",
					"content": {
						"korean": "간판들만 문제가 아니야. 어떤 메시지가 보인다는 증언도 있어."
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "메시지? 뭘까."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그게 문제야. 무작위의 숫자 배열이나 깨진 이미지들이 잠깐 나타났다 사라져."
					},
					"emotion": "sad",
					"speaker": "echo"
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "아무도 정확히 뭘 봤는지 말하지 못해. 너무 빨라서."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "누군가 일부러 그러는 건가."
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "echo",
					"action": "enter",
					"spot": [
						2,
						2
					]
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "위스퍼 웹. 들어봤을 거야."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "소문만. 도시의 모든 정보를 쥐고 있다는…."
					}
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "이제 소문이 아니야. 그들이 움직이기 시작했어."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "이걸 봐."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "에코가 손상된 영상 파일을 건넸다. 화면에는 '모든 비밀은 곧 공개될 것'이라는 메시지가 흐릿하게 보였다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "…누가 이런 짓을."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						1,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "echo"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "더 깊이 가면 위험해. 위스퍼 웹은 단순한 소문이 아니야."
					},
					"type": "speech",
					"speaker": "echo"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이제 와서 멈출 순 없어. 그들이 뭘 원하는지 알아야 해."
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "개인 정보가 새는 건 막을 수 없을 거야. 계속 가면 너의 정보도 안전하지 못해."
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "골목 벽면에는 영상에서 본 것과 유사한 패턴의 낙서가 희미하게 보였다."
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "상관없어."
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "echo",
					"duration_ms": 400,
					"direction": "down",
					"type": "direction",
					"action": "exit"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "주인공은 도시의 심장부로 향했다. 돌아갈 길은 없었다."
					}
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"emotion": "sad",
					"content": {
						"korean": "이건 시작일 뿐… 너도 곧 알게 될 거다. 모든 것이 연결된다는 걸."
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "헛소리 마."
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "정체 모를 자가 쓰러졌다. 그러나 정보 교란은 멈추지 않았다."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "도시는 여전히 알 수 없는 정보의 그림자 속에 있었다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "봐. 사람들은 진실을 원해. 너도 다르지 않아."
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "닥스의 서버부터 뚫어야겠어. 이대로 끝낼 수 없어."
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "도시의 심장부에 위치한 거대한 서버룸. 정체 모를 자가 서 있었다."
					}
				},
				{
					"content": {
						"korean": "왔군. 예상대로."
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "네가 이 난동을 부린 장본인인가."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "난 그저 문을 열었을 뿐. 사람들은 원래 남의 비밀을 좋아하거든."
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "더 이상 못하게 할 거야."
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			]
		}
	]
} as const;
