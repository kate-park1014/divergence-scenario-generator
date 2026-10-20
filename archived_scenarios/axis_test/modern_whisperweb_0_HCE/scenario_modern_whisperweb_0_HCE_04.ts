export const scenario_modern_whisperweb_0_HCE_04 = {
	"scenario_id": "modern_whisperweb_0_HCE_04",
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
	"prologue": {
		"korean": [
			"닥스 아카이브와 린의 거짓 공지 후, 도시는 정보 혼란에 빠졌다.",
			"위스퍼 웹의 과거를 파헤치기 위해, 전 갱스터 카이를 찾아야 했다.",
			"그의 손에 과거 갱단 장부가 있었고, 비밀이 드러날까 두려워했다.",
			"우리는 그의 금고를 열어 장부를 확보하려 했다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "낡은 전자제품 수리점. 카이가 부품을 조립하고 있었다."
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "kai",
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "카이 씨, 위스퍼 웹에 대해 묻고 싶습니다."
					},
					"type": "speech"
				},
				{
					"speaker": "kai",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "난 상관없는 일이야. 조용히 살고 싶어."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "과거 '고스트 서킷' 갱단 출신이라고 들었습니다. 위스퍼 웹의 초기 계획에 참여했다는 소문이 있어요."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "소문은 소문일 뿐이야. 돌아가."
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "kai"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "kai",
					"type": "direction"
				},
				{
					"speaker": "kai",
					"emotion": "sad",
					"content": {
						"korean": "그 장부는… 내 과거 기록이야."
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "위스퍼 웹의 시작과 연관되어 있죠? 우리가 필요해요."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "kai",
					"emotion": "sad",
					"content": {
						"korean": "그게 알려지면, 옛 경쟁자들이 날 찾아낼 거야. 내 가족이 위험해져."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "당신이 숨긴다고 해결되지 않아요. 위스퍼 웹은 모든 걸 드러낼 겁니다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "금고 어딨죠? 우리가 열겠습니다."
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "안 돼! 절대 안 돼!"
					},
					"emotion": "angry",
					"speaker": "kai",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "kai",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "낡은 금고 문이 강제로 열렸다. 금속음이 날카롭게 울렸다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이게… 장부? 엄청나게 많군."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "kai",
					"type": "speech",
					"content": {
						"korean": "…이게 뭐야? 안에 추적 장치가 있었어?"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "금고 내부의 추적 장치가 작동했다. 비상등이 깜빡였다."
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "젠장, 우리가 함정을 건드린 것 같아!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "가게 한쪽에서 작은 폭발음이 들렸다. 비명 소리가 따라왔다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "애들아! 내 아이들!"
					},
					"emotion": "angry",
					"speaker": "kai"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "kai",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "…네놈들 때문에! 다 망쳤어!"
					},
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "미안해… 이런 결과를 원한 건 아니었어."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "내 아이들이 다쳤어! 이제 옛 경쟁자들이 곧 찾아올 거야. 모든 게 끝났어!"
					},
					"speaker": "kai"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "카이의 가게는 폭발의 흔적으로 가득했다. 그의 아이들은 병원으로 이송되었다."
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "며칠 뒤, 도시 곳곳에서 카이의 과거가 담긴 이상한 꿈을 꾸었다는 소문이 돌기 시작했다."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "우리는 위스퍼 웹을 멈춰야만 해. 더 큰 비극을 막기 위해서라도."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "서버실 가장 깊은 곳. 정체 모를 자가 기다리고 있었다."
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "애석하군. 또 다른 비극을 만들었더군. 카이의 아이들이 다쳤다지?"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "네가 이 모든 걸 조종하는 거지? 이 비극도 네 계획인가?"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "나는 그저… 모든 정보를 '연결'했을 뿐이다. 너희가 그 트리거를 당겼을 뿐."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "너희의 '도움'은 항상 누군가를 파괴하는군."
					}
				}
			],
			"win_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "네가 이겼다고 착각하는군. 이 장부는… 시작일 뿐이다."
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "무슨 소리야? 뭘 더 꾸미고 있는 거야?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "쓰러진 자의 말은 또 다른 정보의 파도를 예고했다."
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…이 장부에 숨겨진 진실을 밝혀야 해."
					},
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "네놈들의 선의는 언제나 비극을 부르는군. 이번에도 마찬가지다."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "젠장… 카이에게도, 아이들에게도… 빚을 졌다."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이대로 끝낼 순 없어. 이 장부에 대한 정보를 더 찾아야 해."
					},
					"emotion": "base",
					"speaker": "character_any"
				}
			],
			"id": 15
		}
	]
} as const;
