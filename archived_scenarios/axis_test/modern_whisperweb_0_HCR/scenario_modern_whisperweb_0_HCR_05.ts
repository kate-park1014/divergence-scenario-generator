export const scenario_modern_whisperweb_0_HCR_05 = {
	"scenario_id": "modern_whisperweb_0_HCR_05",
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
			"도시의 정보 교란은 멈추지 않았다. 주인공의 선택은 늘 더 큰 혼란을 불러왔다.",
			"정식 절차는 개인 정보를 노출시켰고, 신중함은 50명의 환자를 돌아세웠다.",
			"동료를 지키려던 노력은 갱단의 복수와 1억의 손실로 돌아왔다.",
			"이제 위스퍼 웹의 거대한 홀로그램 앞에 섰다. 에코의 마지막 메시지가 머리를 맴돌았다.",
			"'모든 것을 끊어내.' 그것만이 유일한 방법이라고 했다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "도시의 가장 깊은 곳. 거대한 서버 허브가 빛을 잃은 채 서 있었다."
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "여기가 위스퍼 웹의 중심인가."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"spot": [
						5,
						2
					],
					"speaker": "echo",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "왔군. 네가 올 줄 알았어."
					},
					"speaker": "echo",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "에코. 당신의 조언대로 여기까지 왔어. 모든 것을 끊어내야 한다고 했지."
					}
				},
				{
					"speaker": "echo",
					"type": "speech",
					"content": {
						"korean": "그래. 이 도시의 정보는 이미 독이 됐어. 연결될수록 더 많은 것을 파괴할 뿐."
					},
					"emotion": "sad"
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "시내의 디지털 간판을 봐. 깨진 이미지와 무작위 숫자 배열이 나타났다 사라지는 건 그 증상일 뿐이야."
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "echo",
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"type": "direction"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "하지만 모든 것을 끊어내면… 도시는 마비될 거야. 사람들은 더 큰 혼란에 빠질 수도 있어."
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "어차피 지금도 혼란스러워. 네가 무엇을 하든 정보는 통제 불능이 됐잖아."
					},
					"speaker": "echo"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "시청 정보 유출, 병원 사태, 카이의 동료… 모든 결과는 결국 정보의 폭주 때문이었어."
					}
				},
				{
					"content": {
						"korean": "그래도…."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "폐쇄된 서버실 바닥에서 손상된 데이터 칩 하나가 빛나고 있었다. 칩에서 여성의 목소리가 끊기며 흘러나왔다. '…모든 비밀이… 곧 연결된다…'."
					}
				},
				{
					"content": {
						"korean": "들리지? 위스퍼 웹은 이미 모든 것을 연결하려 해. 지금 끊지 않으면 더 이상 기회는 없어."
					},
					"speaker": "echo",
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"speaker": "echo",
					"action": "enter"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…좋아. 당신 말대로 모든 것을 끊어내겠어. 이것만이 이 혼란을 막을 수 있는 유일한 길이라면."
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "현명한 선택이야. 통제 불능의 정보는 존재하지 않는 게 나아."
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "내 원칙은 늘 질서를 지키는 것이었어. 이제 내가 직접 질서를 세울 거야."
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "도시 주민들이 '감시당하는' 악몽을 꾸고 있다는 소문이 돌았다. 스마트폰 스피커에서 알 수 없는 속삭임이 들린다는 괴담도 퍼져나갔다."
					},
					"speaker": "narrator"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "이 도시의 사람들은 이미 위스퍼 웹의 꿈을 꾸고 있어. 현실을 망가뜨리기 전에 끊어내야 해."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						5,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "echo"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "강제 종료 프로토콜을 실행한다. 이 도시의 모든 네트워크를 끊어내겠어."
					}
				},
				{
					"emotion": "base",
					"speaker": "echo",
					"type": "speech",
					"content": {
						"korean": "결정은 내렸어. 이제 되돌릴 수 없어."
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "도시 전체 네트워크에 강제 종료 프로토콜이 적용되기 시작했다. 일순간 도시 전체의 전광판이 꺼졌다."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "서버실 벽과 오래된 전자기기에서 부서진 회로 기판 문양의 낙서가 빛을 잃고 드러났다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이제 모든 것이 제자리로 돌아올 거야."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "봐. 너는 아무것도 끊어내지 못했어. 모든 것은 연결될 뿐이다."
					},
					"speaker": "boss",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아니. 이대로는 안 돼. 나는 내 모든 데이터를 삭제하고, 이 도시에서 완전히 사라질 거야."
					}
				}
			],
			"win_dialogue": [
				{
					"speaker": "boss",
					"content": {
						"korean": "너는 모든 것을 끊었어. 이제 아무것도 흐르지 않아."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "네가 지키려던 질서가, 이 도시를 가장 큰 혼돈으로 만들었군. 축하한다."
					},
					"speaker": "boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "도시는 모든 통신이 마비되었다. 모든 전광판과 개인 기기에 시민들의 신용카드 사용 내역과 의료 기록이 무작위로 송출되었다."
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "내가… 내가 뭘 한 거지? 이게 질서라고? 이건 투명한 감옥이잖아."
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "더 이상 누구도… 도울 수 없어. 모든 연결이 끊어졌어."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "주인공의 노력은 역설적으로 사회 전체의 무질서를 초래했다. 그는 고립감 속에서 절망했다."
					},
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "도시의 중앙 정보 허브. 거대한 홀로그램이 빛을 내며 눈앞에 나타났다."
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "수많은 데이터 조각들이 모여 형상을 이루었다. 위스퍼 웹이었다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "왔군. 네가 모든 것을 끊어내려 하는구나."
					},
					"speaker": "boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "어리석어. 질서를 지키려다 더 큰 혼란을 야기한 건 바로 너야."
					},
					"speaker": "boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "모두가 연결되었어! 네 두려움, 네 거짓말, 네 가장 깊은 치부까지! 전부 나에게 있어!"
					},
					"speaker": "boss"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "네가 시청 데이터를 조작하려던 시도, 개인적인 대화 기록… 모두 여기 있다."
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "말도 안 돼! 네가 감히 내 정보를…!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "이제… 네 것이 될 거야! 모두에게 공개될 테니!"
					},
					"speaker": "boss",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 15
		}
	],
	"epilogue": {
		"korean": [
			"위스퍼 웹은 침묵했다. 하지만 도시는 더욱 깊은 침묵에 잠겼다.",
			"모든 통신은 마비되었고, 개인 기록은 전광판에 무작위로 송출되었다.",
			"질서를 지키려던 노력은 투명한 감옥을 만들었다. 연결은 끊어졌고, 고립만이 남았다.",
			"주인공은 더 이상 누구도 도울 수 없었다. 그저 절망만이 남았다.",
			"이것이 이 도시가 얻은 새로운 질서였다."
		]
	}
} as const;
