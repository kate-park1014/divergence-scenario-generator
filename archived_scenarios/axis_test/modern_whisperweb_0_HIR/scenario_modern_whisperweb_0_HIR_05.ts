export const scenario_modern_whisperweb_0_HIR_05 = {
	"scenario_id": "modern_whisperweb_0_HIR_05",
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
	"prologue": {
		"korean": [
			"도시의 모든 정보가 통제 불능 상태에 이르렀다.",
			"개인의 비밀은 이미 여러 번 노출되었고, 질서는 무너졌다.",
			"이제 '위스퍼 웹'은 도시 전체를 장악하려 한다.",
			"주인공은 모든 것을 멈추기 위해 최후의 결전을 준비한다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "도시의 모든 디지털 광고판에서 알 수 없는 오류가 발생했다."
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "또 시작인가."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "echo",
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "왔군. 상황이 심각해."
					},
					"type": "speech",
					"speaker": "echo",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "위스퍼 웹이 도시 시스템 전체에 자신의 존재를 투사하기 시작했어."
					},
					"speaker": "echo",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "시내 디지털 간판에서 깨진 이미지나 숫자가 무작위로 뜨는 현상 말인가?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"speaker": "echo",
					"type": "speech",
					"content": {
						"korean": "그래. 단순한 오류가 아니야. 그들이 이 모든 것을 장악하려 하고 있어."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "echo",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "서둘러야 해. 그들은 이미 너무 많은 정보를 손에 넣었어."
					},
					"speaker": "echo",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "오래된 데이터 칩에서 '모든 비밀이… 연결된다…'는 음성을 들었어."
					}
				},
				{
					"speaker": "echo",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "그건 시작에 불과해. 위스퍼 웹은 도시의 모든 정보를 흡수하고 있어."
					}
				},
				{
					"content": {
						"korean": "개인의 통화 기록, 메시지, 심지어 금융 거래 내역까지. 모두 위험해."
					},
					"speaker": "echo",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "echo"
				},
				{
					"speaker": "echo",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "위스퍼 웹은 단순한 해킹 조직이 아니야."
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그럼 뭐지?"
					}
				},
				{
					"content": {
						"korean": "그들은 도시 주민들의 정신에 침투하고 있어. 무의식적인 연결을 시도하고 있어."
					},
					"speaker": "echo",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "시민들이 모두 같은 꿈을 꾸고, 도시 괴담이 퍼지는 현상 말인가?"
					}
				},
				{
					"content": {
						"korean": "맞아. 꿈과 소문은 그 증상이야. 그들의 영향력이 너무 커졌어."
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "echo"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "echo",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"speaker": "echo",
					"emotion": "sad",
					"content": {
						"korean": "이제 되돌릴 수 없어. 그들이 모든 것을 장악할 거야."
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "막을 방법은 없어?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "유일한 방법은… 모든 것을 끊어내는 거야."
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "echo"
				},
				{
					"content": {
						"korean": "도시의 모든 정보망을 강제로 차단해야 해."
					},
					"speaker": "echo",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "그 말은… 도시 전체의 시스템을 멈추라는 건가?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "echo",
					"emotion": "angry",
					"content": {
						"korean": "그래. 그렇게 하지 않으면, 모든 비밀이 만천하에 드러날 거야."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "어두운 골목 벽면과 지하 폐쇄형 데이터 센터 입구에서 '고스트 해커스'의 표식이 발견되었다."
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "도시의 모든 디지털 광고판과 개인 스마트 기기에서 300만 시민의 통신 기록이 실시간으로 방송되기 시작했다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "시청 지하 폐쇄형 데이터 센터의 핵심 서버 앞에 최종 보스가 서 있었다."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "왔구나. 네가 막으려던 모든 것. 네가 지키려던 질서와 개인의 비밀."
					},
					"emotion": "base",
					"speaker": "boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이제 모두 사라진다. 모든 것이 나에게 있고… 이제 모든 것이 너희의 것이 될 것이다!"
					},
					"speaker": "boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 광기를 멈추겠다!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "멈출 수 없어. 이미 너무 늦었어. 이 도시는 이제 내가 통제한다!"
					}
				}
			],
			"win_dialogue": [
				{
					"speaker": "boss",
					"emotion": "sad",
					"content": {
						"korean": "하하… 날 멈춰도… 소용없어. 이미 모든 비밀은… 풀렸어."
					},
					"type": "speech"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "네가 지키려던 모든 것… 오히려 네가 그 문을 열었어…"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "아니… 나는… 나는 아무것도 지키지 못했다."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "최종 보스는 쓰러졌다. 그러나 도시의 모든 개인 정보와 사적인 대화 기록은 이미 만천하에 드러났다."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "질서를 지키려던 주인공의 신념은, 예측 불가능한 혼란 앞에서 무의미해졌다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "도시는 절망적인 무질서 속에서 서로를 의심하며 고통받았다."
					}
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "어리석군. 네가 막을 수 있는 것은 아무것도 없어."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "boss"
				},
				{
					"speaker": "boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 도시는 이제 나의 정보다."
					}
				},
				{
					"content": {
						"korean": "아직 끝나지 않았어. 모든 데이터의 흐름을 역추적해서 서버를 다시 잠글 것이다."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 15
		}
	],
	"epilogue": {
		"korean": [
			"위스퍼 웹의 송출이 멈추자, 도시는 싸늘한 정적에 휩싸였다.",
			"개인의 비밀은 사라졌고, 시민들은 서로를 의심하며 분열되었다.",
			"모든 것을 지키려 했던 주인공의 노력은, 아이러니하게도 모든 것을 파괴했다.",
			"이것은 구원이었을까, 아니면 돌이킬 수 없는 침해였을까.",
			"도시의 밤은 여전히 길었고, 네온 불빛은 희미하게 흔들렸다."
		]
	}
} as const;
