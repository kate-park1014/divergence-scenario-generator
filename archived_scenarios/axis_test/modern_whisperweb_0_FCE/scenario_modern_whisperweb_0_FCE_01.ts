export const scenario_modern_whisperweb_0_FCE_01 = {
	"scenario_id": "modern_whisperweb_0_FCE_01",
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
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "도시의 뒷골목은 어둠과 네온 불빛으로 뒤섞여 있었다."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "요즘 도시가 이상해. 깨진 간판이 자꾸 보여."
					}
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "echo",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "그게 단순한 오류 같아? 아니. 전부 정보 교란이야."
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "정보 교란?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "그래. '위스퍼 웹'이라고 들어봤어?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "echo",
					"content": {
						"korean": "이걸 받아. 깨진 디지털 신호가 담긴 영상이야."
					}
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "'모든 비밀은 곧 공개될 것'이라는 메시지가 담겨 있지."
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "디지털 간판들이 있는 거리. 찰나의 순간, 화면이 깨졌다."
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "방금 간판에 뭐가 스쳐 지나간 것 같았는데?"
					},
					"type": "speech"
				},
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "echo"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "echo",
					"content": {
						"korean": "봤구나. 도시 광고판에 주민 이름, 대출 기록이 10초간 뜨는 현상이야."
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "개인 정보가?"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "위스퍼 웹의 짓이야. 조심해. 놈들은 네 모든 걸 알고 있어."
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
						"korean": "정보 교란은 점점 더 심해졌다. 불안감이 도시를 감쌌다."
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "echo",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "echo",
					"content": {
						"korean": "'모든 비밀은 곧 공개될 것'이라는 메시지, 그거 단순한 경고가 아니야."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 뜻인데?"
					},
					"emotion": "base"
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "도시 전체의 개인 정보가 털리고 있다는 증거야."
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "그 정보가 퍼지면 사람들은 서로를 믿지 못하게 될 거야."
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "어둡고 습한 골목 벽면에 알 수 없는 문양이 나타났다. 특정 기기에서도 같은 모양이 발견됐다."
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "저 문양, 최근에 자주 보여."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "echo",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "위스퍼 웹이 도시 곳곳에 손길을 뻗는 중이야. 이건 시작일 뿐."
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "도시의 심장부로 가야겠어. 더 이상 지체할 수 없어."
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "echo",
					"content": {
						"korean": "안 돼! 거기는 너무 위험해. 데이터 파편들이 널 덮칠 거야."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "내 말을 들어. 그곳에 가면 네가 아는 모든 것이 뒤바뀔 수 있어."
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "겨우 날 막았다고? 진정한 정보는 아직 감춰져 있다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "닥스의 지하 작업실에 더 많은 조각이 있을 거다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "닥스라고? 또 다른 공범인가."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "도시의 정보 교란은 잠시 멈췄다. 그러나 더 큰 그림자가 드리워지고 있었다."
					},
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "네 모든 비밀도 곧 공개될 것이다. 모든 것은 정보의 일부가 된다."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "닥스라는 자를 찾겠어. 그리고 이 혼란을 끝낼 거야."
					},
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "도시의 심장부, 오래된 서버실 앞에 정체 모를 자가 서 있었다."
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "왔군. 너도 진실을 원하는가?"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "네가 위스퍼 웹을 조종하는 자인가."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "나는 그저 정보를 흐르게 할 뿐. 모든 비밀은 빛을 볼 것이다."
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "더 이상 혼란을 만들게 두지 않겠어."
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"네온 불빛 아래, 도시의 비밀은 깊어지고 있었다.",
			"알 수 없는 정보 교란이 모든 것을 잠식했다.",
			"정보상 에코는 '모든 비밀은 곧 공개될 것'이라 속삭였다.",
			"이제 도시의 심장부로 향해 진실을 파헤칠 시간이다."
		]
	}
} as const;
