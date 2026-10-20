export const scenario_modern_whisperweb_0_HIE_03 = {
	"scenario_id": "modern_whisperweb_0_HIE_03",
	"order": 3,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"lin": {
			"id": "mon_d036a884-3dde-472c-9fe7-c4807643860f",
			"name": {
				"korean": "린",
				"english": "Lin",
				"japanese": "リン",
				"chinese": "琳",
				"french": "Lin",
				"spanish": "Lin",
				"vietnamese": "Lin",
				"thai": "ลิน",
				"hindi": "लिन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a095dd66-1857-4f44-68b0-2ece83006d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/05b02694-f1ed-4e4c-b7ca-fb5b74a48900/public"
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
					"speaker": "narrator",
					"content": {
						"korean": "오래된 탐사 보도 사무실. 린은 초췌한 얼굴로 앉아 있었다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "lin",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"content": {
						"korean": "왔군요. 당신밖에 없어요."
					},
					"speaker": "lin",
					"type": "speech"
				},
				{
					"content": {
						"korean": "무슨 일이죠? 당신 기사가 오보로 몰렸다고 들었어요."
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "위스퍼 웹이 조작했어요. 내 모든 것을 걸었던 특종인데…"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "증거가 있어요. 그들의 암호화된 내부 데이터."
					},
					"speaker": "lin",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "해보죠. 어디까지 갈 수 있는지."
					},
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "lin",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "lin",
					"content": {
						"korean": "이게 그 데이터예요. 해독해 줄 수 있나요?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "해보죠. 시간이 좀 걸릴 거예요."
					}
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "…조심해요. 위스퍼 웹은 사람들의 사생활을 이용하는 놈들이에요."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "걱정 마요. 완벽하게 해독할 테니."
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "도시 곳곳의 디지털 간판에서 깨진 이미지들이 잠시 나타났다 사라졌다."
					},
					"speaker": "narrator"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "데이터 해독 프로그램이 빠르게 돌아갔다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "점점 풀리고 있어."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "lin",
					"duration_ms": 500
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "내 특종 기사의 진실이… 이제 밝혀지는 건가요?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "화면 일부에 알 수 없는 오류 메시지가 떴다. 린의 개인적인 대화 내용 일부가 노출되었다."
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…이건… 내 사적인 대화 내용인데?"
					},
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "잠깐… 오류인가?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "오래된 데이터 칩에서 재생 불가능한 소리가 흘러나왔다. '모든 비밀이… 연결된다…'."
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"content": {
						"korean": "도시 익명 게시판에 린의 사적인 대화 내용이 떠다녔다. 그녀의 명예는 다시 한번 땅에 떨어졌다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "lin",
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "이건… 내 개인 기록이잖아! 해독하다가 유출된 건가?"
					},
					"speaker": "lin",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "젠장… 막을 수가 없었어."
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "내 특종 기사를 바로잡으려다가… 더한 망신을 당했어…"
					},
					"speaker": "lin"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "위스퍼 웹… 이대로는 안 돼. 끝장을 봐야겠어."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "정보의 혼란은 멈출 수 없는 흐름이 되었다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "네가 손대면 손댈수록, 모두가 불행해지는군. 다음은 누구의 비밀이 터질까?"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "아니. 카이의 장부를 먼저 확보해야 해. 더 큰 피해를 막기 위해."
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "결국, 너의 정의도 누군가의 희생 위에 서 있는 것을… 깨닫게 될 거다."
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "웃기지 마. 난 멈추지 않아."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "정체 모를 자가 쓰러졌다. 그러나 위스퍼 웹은 멈추지 않았다."
					},
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "카이가 위스퍼 웹의 표식이 담긴 낡은 장부를 팔아 도피 자금을 마련하려 한다는 소문이 들렸다."
					},
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "오래된 데이터 서버실. 거대한 서버 앞에 정체 모를 자가 서 있었다."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "왔군. 네가 린의 명예를 또다시 바닥으로 떨어뜨린 장본인인가?"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "닥쳐! 네가 꾸민 짓이잖아!"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "난 그저 너의 행동을 이용했을 뿐. 진실은 늘 자극적이지 않나."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "더 이상 네 뜻대로 안 될 거야."
					},
					"emotion": "angry"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"린의 기사가 오보로 낙인 찍혔다.",
			"위스퍼 웹의 조작이었다.",
			"그녀의 명예를 되찾기 위해, 암호화된 데이터를 해독해야 했다.",
			"하지만 진실은 언제나 대가를 요구했다.",
			"이번엔 어떤 비밀이 터져 나올까."
		]
	}
} as const;
