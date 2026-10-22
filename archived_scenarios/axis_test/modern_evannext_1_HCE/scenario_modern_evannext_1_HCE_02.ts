export const scenario_modern_evannext_1_HCE_02 = {
	"scenario_id": "modern_evannext_1_HCE_02",
	"order": 2,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"nia": {
			"id": "mon_872177dd-fcf0-40d8-b78c-fd795017c763",
			"name": {
				"korean": "니아",
				"english": "Nia",
				"japanese": "ニア",
				"chinese": "妮娅",
				"french": "Nia",
				"spanish": "Nia",
				"vietnamese": "Nia",
				"thai": "เนีย",
				"hindi": "निया"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/db690f96-d5b3-498a-f4ec-f269e6e95100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a8fe5d7a-56fe-4822-c272-5a04fd7f4c00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"나는 첫 시험을 마쳤다.",
			"받은 불합격 통지서에는 알 수 없는 코드가 보였다.",
			"그 순간, 누군가 나를 기다리고 있었다.",
			"새로운 진실의 조각이 맞춰질 참이었다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "차가운 금속 복도, 나는 불합격 통지서를 들었다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "불합격… 이건가."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "근데 이 뒤의 코드… 뭐지?"
					},
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"speaker": "nia",
					"action": "enter",
					"spot": [
						4,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "nia",
					"content": {
						"korean": "그 코드… 시스템의 흔적이에요."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "누구세요?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "니아. 당신을 기다렸어요."
					},
					"emotion": "base",
					"speaker": "nia",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "저를 따라와요."
					},
					"speaker": "nia"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "복도 끝, 니아가 작은 방으로 나를 이끌었다."
					}
				},
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "nia",
					"action": "enter"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "여기요. 이 칩에 정보가 있어요."
					},
					"speaker": "nia",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "정보요? 무슨 정보인데."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "'사라진 지원자들' 명단이에요."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "nia"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "사라진… 그 소문이 진짜였어?"
					},
					"emotion": "sad"
				},
				{
					"speaker": "nia",
					"emotion": "angry",
					"content": {
						"korean": "시스템은 기록을 지워요. 완벽하게."
					},
					"type": "speech"
				},
				{
					"speaker": "nia",
					"emotion": "base",
					"content": {
						"korean": "이걸 서버에 올려야 해요."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "내가 왜?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "nia",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"speaker": "nia",
					"emotion": "angry",
					"content": {
						"korean": "이 시스템은 거짓이에요."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "'다음 기회'는 없어요. 그저 반복일 뿐."
					},
					"speaker": "nia"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "…그걸 증명하려면."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 칩을 '핵심 관리 서버'에 연결해야 해요."
					},
					"speaker": "nia"
				},
				{
					"content": {
						"korean": "들키면 어떻게 되는데?"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "시스템이 당신을 '이탈자'로 분류할 거예요."
					},
					"type": "speech",
					"speaker": "nia"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그래도… 해야겠어."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이 반복을 끝내려면."
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "시스템의 '핵심 관리 서버'는 차가운 방에 있었다."
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "nia",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "칩을 꽂았어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…성공인가?"
					},
					"emotion": "happy",
					"speaker": "nia"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "띠링♪ 시스템 경고음이 울렸다."
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "뭐야? 들켰잖아!"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "nia",
					"type": "speech",
					"content": {
						"korean": "파일이… 사라져요!"
					},
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "내 접속을 감지했어."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "nia",
					"type": "speech",
					"content": {
						"korean": "젠장… 역이용된 거야."
					},
					"emotion": "angry"
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
						"korean": "서버실 안, 정체 모를 자가 나타났다."
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "환영한다. 시스템의 이탈자."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "니아가 건넨 정보를 지운 게 너냐?"
					}
				},
				{
					"content": {
						"korean": "그 정보는 원래 내 것이었다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "빌어먹을!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "이제 네 '다음'은 없어."
					},
					"type": "speech"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "겨우 이것으론… 날 막을 수 없어."
					},
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "네 모든 행동은 이미 기록됐다."
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "기록… 날 감시한다고?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "시스템은 나를 주시하고 있었다."
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "진실은 더 깊은 곳에 있었다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "어리석은 시도였다. 모든 것이 기록에서 지워진다."
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "아니… 난 다시 시작할 거야."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "처음부터, 모두의 기록을 되찾을 때까지."
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			]
		}
	]
} as const;
