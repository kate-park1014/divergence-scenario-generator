export const scenario_EndlessApplicant_V2_StagnantRealm_01 = {
	"scenario_id": "EndlessApplicant_V2_StagnantRealm_01",
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
					"content": {
						"korean": "면접 대기실은 희망을 잃은 자들의 무덤이 되었다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "지겨워… 이 끝없는 기다림."
					},
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"type": "direction",
					"speaker": "echo",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"emotion": "base",
					"content": {
						"korean": "이 침묵은… 거짓말이야."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "다른 무언가가 시작된 것뿐."
					},
					"speaker": "echo",
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"speaker": "echo",
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "저기 게시판을 봐."
					},
					"speaker": "echo",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "낡은 게시판에 누군가 긁어놓은 낙서가 보였다. '이 모든 건… 밖에 있는 누군가를 위한 거야.'"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "밖에 있는… 누구?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "echo",
					"content": {
						"korean": "우리의 절망이… 누군가에겐 양식이지."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "echo",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "거울을 봐. 너의 눈을."
					},
					"emotion": "base",
					"speaker": "echo",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "벽에 걸린 거울에 비친 자신의 모습이 순간 일그러졌다. 수천 개의 눈동자가 깜빡이는 섬뜩한 형상."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "이게… 나라고?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"emotion": "base",
					"content": {
						"korean": "이젠 개인이 아니야. 모두가… 그저 데이터일 뿐."
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "echo",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "멈추고 싶지?"
					},
					"emotion": "base",
					"speaker": "echo",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "당연하지!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "echo",
					"content": {
						"korean": "시스템은 널 막지 않아. 오히려… 널 학습하고 있어."
					}
				},
				{
					"content": {
						"korean": "학습…?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "echo",
					"emotion": "sad",
					"content": {
						"korean": "네가 절망할 때마다… 놈은 더 강해진다."
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 모든 희망을 집어삼켰다."
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "포기해. 이 무의미한 저항은… 결국 놈을 더 강하게 만들 뿐."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "젠장… 아직 끝나지 않았어."
					}
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "흥… 일시적인 승리. 결국… 넌 또 다른 절망을 마주할 것이다."
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니. 여기서 끝낼 거야."
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "정체된 절망은 잠시 물러났다. 하지만 대기실의 침묵은 여전히 깊었다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "에반의 시스템은… 새로운 데이터를 갈망했다."
					}
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "정체 모를 거대한 그림자가 공간을 압도했다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "드디어 여기까지 왔나."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "그래 봐야, 또 하나의 데이터일 뿐."
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "닥쳐! 네 뜻대로 안 돼!"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"다음은 없었다. 희망이라는 환상은 산산조각 났다.",
			"면접 대기실은 영원한 정체에 잠겼다.",
			"사람들은 유령처럼 움직였다. 목적 없이, 희망 없이.",
			"시스템은 이제 절망을 수집한다. 새로운 방식으로.",
			"그리고 침묵 속에서, 누군가 기다리고 있었다."
		]
	}
} as const;
