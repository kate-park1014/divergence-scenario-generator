export const scenario_modern_whisperweb_0_HCE_01 = {
	"scenario_id": "modern_whisperweb_0_HCE_01",
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
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "도시의 전광판이 깨진 화면을 띄웠다."
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "또 시작이네. 뭐 하는 짓이야?"
					}
				},
				{
					"action": "enter",
					"speaker": "echo",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "base",
					"speaker": "echo",
					"content": {
						"korean": "왔군. 최근 이상한 영상 때문에 다들 난리야."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "깨진 화면에 사람 이름이 뜨는 거?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "정확히는, '사라진 데이터 패킷 5개'라는 메시지가 나와."
					},
					"emotion": "base",
					"speaker": "echo"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그리고 마지막에 '모든 비밀은 곧 공개될 것'이라는 문구까지."
					},
					"speaker": "echo",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "누가 보낸 거지?"
					},
					"speaker": "character_any",
					"emotion": "base"
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
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "echo",
					"type": "direction"
				},
				{
					"emotion": "base",
					"speaker": "echo",
					"type": "speech",
					"content": {
						"korean": "이런 현상은 처음이 아니야."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "무슨 소리야?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "가끔 도시 광고판에서 무작위로 깨진 이미지가 뜨는 걸 본 적 있을 거야."
					},
					"speaker": "echo",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "의미 없는 숫자 배열 같은 거?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그게 시작이었을지도 몰라. 단순한 오류가 아니야."
					},
					"speaker": "echo",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "설마… 다 연결되어 있는 거야?"
					},
					"speaker": "character_1",
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						3,
						3
					],
					"speaker": "echo",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "이 도시는 정보로 움직여. 그리고 정보는 곧 권력이지."
					},
					"type": "speech",
					"speaker": "echo",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "알고 있어."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "하지만 이 상황은 달라. 뭔가 큰 게 시작됐어."
					},
					"emotion": "sad",
					"speaker": "echo",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "어떤… 큰 거?"
					},
					"emotion": "base",
					"speaker": "character_2"
				},
				{
					"content": {
						"korean": "소문이 돌고 있어. 모든 정보를 연결하려는 그림자 조직에 대한…"
					},
					"type": "speech",
					"speaker": "echo",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "echo",
					"content": {
						"korean": "위스퍼 웹이라고들 해."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "echo",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "멈추지 않으면… 모든 것이 공개될 거야."
					},
					"emotion": "sad",
					"speaker": "echo",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "우린 진실을 밝히러 왔어."
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "echo",
					"content": {
						"korean": "그 진실이 사람들을 해칠 수도 있어. 이미 증거들이 나타나고 있어."
					}
				},
				{
					"speaker": "echo",
					"emotion": "base",
					"content": {
						"korean": "벽에 이상한 문양이 계속 그려지고 있어. 마치 회로처럼…"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "단순한 낙서 아냐?"
					}
				},
				{
					"emotion": "sad",
					"speaker": "echo",
					"type": "speech",
					"content": {
						"korean": "아니, 전자기기에서도 발견되고 있어. 이건 단순한 우연이 아니야."
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "우린 계속 갈 거야. 여기서 멈출 순 없어."
					}
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
						"korean": "서버실 가장 깊은 곳, 정체 모를 자가 기다리고 있었다."
					}
				},
				{
					"content": {
						"korean": "환영한다. 여기까지 올 줄은 몰랐군."
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "네가 위스퍼 웹의 정보 교란을 만든 주범이군."
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "나는 그저… 정보를 연결했을 뿐이다. 세상의 모든 비밀을."
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "그만둬. 이건 도시를 파괴하는 짓이야."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "곧 알게 될 거다. 진실은 피할 수 없다는 것을."
					},
					"speaker": "random_boss",
					"emotion": "base"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "겨우 이 정도로는… 막을 수 없다."
					},
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이미 다음 단계가… 시작됐다."
					},
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "무슨 소리야? 뭘 더 하려는 거야?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "쓰러진 자의 말은 다음 그림자를 암시했다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "도시의 데이터는 여전히 깨져 있었다."
					}
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "거대한 서버는 여전히 모든 정보를 송출했다."
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "너희의 저항은 무의미하다. 모든 것이 공개될 것이다."
					}
				},
				{
					"content": {
						"korean": "젠장… 이대로 물러설 순 없어."
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "다시 돌아온다. 저 서버를 반드시 파괴한다."
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"어둠이 내린 도시, 네온 간판이 차갑게 빛났다.",
			"최근 도시 전광판에서 알 수 없는 영상이 송출된다는 소문이 돌았다.",
			"정보상 에코는 이 현상의 시작에 대한 단서를 가지고 있었다.",
			"우리는 깨진 디지털 신호와 함께 퍼지는 진실을 추적해야 한다."
		]
	}
} as const;
