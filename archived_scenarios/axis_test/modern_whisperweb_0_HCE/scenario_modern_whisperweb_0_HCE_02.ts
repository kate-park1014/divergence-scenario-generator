export const scenario_modern_whisperweb_0_HCE_02 = {
	"scenario_id": "modern_whisperweb_0_HCE_02",
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
			"지난 싸움은 아무것도 멈추지 못했다. 깨진 데이터는 여전히 도시를 떠돌았다.",
			"위스퍼 웹의 다음 단계는 무엇인가. 우리는 더 깊은 단서를 찾아야 했다.",
			"해커 닥스는 거대한 데이터 아카이브를 지키고 있었다.",
			"자유로운 해결 방식은 때로 위험한 선택으로 이어진다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "노점 뒤 허름한 데이터 클리닉. 닥스가 데이터를 정리하고 있었다."
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "닥스 씨, 위스퍼 웹 단서를 찾고 있습니다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "dax",
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "dax",
					"content": {
						"korean": "내 아카이브는 사설입니다. 개인 정보가 가득하죠."
					}
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "함부로 열 수 없습니다. 당신 방식은 너무 거칠어요."
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "하지만 급해요. 시간이 없어요."
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "dax",
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "dax",
					"content": {
						"korean": "내 말은. 이걸 강제로 열면 모든 보안이 풀린다는 겁니다."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "그래서요?"
					},
					"type": "speech"
				},
				{
					"speaker": "dax",
					"content": {
						"korean": "수백 명의 시민 개인 정보가 인터넷에 그대로 흘러나갈 겁니다."
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "위스퍼 웹은 도시를 파괴하려 해요."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "dax",
					"content": {
						"korean": "그렇다고 무고한 시민을 희생시킬 순 없습니다."
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "dax"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "결국 이걸 깨야만 하는 거였어."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "dax",
					"content": {
						"korean": "안 돼! 제발 멈춰!"
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "보안 시스템이 무력화됐다. 아카이브 문이 열렸다."
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "dax",
					"content": {
						"korean": "젠장… 수십 년간 지켜온 정보가… 모두 유출됐어."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "유출된 데이터 속에서 오래된 데이터 칩 하나가 발견되었다. 재생이 불가능한 오류 메시지가 떴다."
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이건… '모든 비밀이… 연결된다…'는 음성 기록인가?"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "dax",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "닥스의 클리닉으로 항의 전화가 폭주했다. 분노한 시민들의 목소리가 이어졌다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "dax",
					"content": {
						"korean": "당신 때문에! 지켜온 모든 신뢰가 무너졌어!"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "이런 결과를 원한 건 아니었어."
					},
					"type": "speech"
				},
				{
					"speaker": "dax",
					"content": {
						"korean": "결과 없는 자유는 무책임일 뿐입니다!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "도시 곳곳에 데이터 유출로 인한 괴담이 퍼졌다. 어두운 골목 벽에는 회로 모양의 'W' 낙서가 선명했다."
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이 'W'… 위스퍼 웹의 상징인가?"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "데이터 서버 가장 깊은 곳. 정체 모를 자가 우리를 기다렸다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "오랜만이다. 더 큰 소란을 만들었더군."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네가 이 모든 걸 조장하는 거지?"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "나는 그저… 모든 정보를 '해방'시켰을 뿐이다."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "네가 오늘 닥스에게 했던 것처럼."
					},
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "네가 부순 것은… 내 계획을 더욱 가속시킬 뿐이다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "무슨 짓을 꾸미고 있어?"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 자는 쓰러졌지만, 데이터는 계속 흐르고 있었다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "위스퍼 웹은 도시의 진실을 계속해서 조작하고 있었다."
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "네가 만든 혼돈은… 나에게 힘이 된다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "닥스… 미안해. 우리가 반드시 이 혼란을 바로잡을게."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "dax"
				},
				{
					"emotion": "base",
					"speaker": "dax",
					"content": {
						"korean": "…당신 방식은 여전히 위험해. 하지만 멈출 순 없겠죠."
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "시청의 중앙 서버부터 확인해야겠어."
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		}
	]
} as const;
