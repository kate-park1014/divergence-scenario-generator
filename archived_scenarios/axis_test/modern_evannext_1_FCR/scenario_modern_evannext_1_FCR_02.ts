export const scenario_modern_evannext_1_FCR_02 = {
	"scenario_id": "modern_evannext_1_FCR_02",
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "넥스트 기업의 폐쇄된 데이터 보관실. 거대한 서버 랙이 빽빽하다."
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "여기가 그… 니아가 숨겨둔 곳인가."
					}
				},
				{
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "nia",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "nia",
					"content": {
						"korean": "…누구야?! 어떻게 들어온 거야?!"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "시끄러워. 네가 가진 정보가 필요해."
					}
				},
				{
					"emotion": "sad",
					"speaker": "nia",
					"type": "speech",
					"content": {
						"korean": "내 정보? 안 돼! 이건… 보안 등급이 달라!"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "협상은 없어. 지금 당장 회수한다."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "nia",
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "제발! 내 데이터 칩에 손대지 마!"
					},
					"type": "speech",
					"speaker": "nia",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "시간이 없어. 강제로 가져간다."
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "'지지직'— 암호화된 데이터 칩 일부가 손상됐다."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "망가뜨리지 마! 그건 동료들에게 가야 할…!"
					},
					"emotion": "sad",
					"speaker": "nia"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "우리도 급해. 이대로는 안 돼."
					}
				},
				{
					"speaker": "nia",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…젠장. 돌이킬 수 없어."
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "nia",
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"emotion": "base",
					"speaker": "nia",
					"type": "speech",
					"content": {
						"korean": "…흥. 그렇게 막무가내면, 아무것도 못 얻을 걸."
					}
				},
				{
					"content": {
						"korean": "그게 무슨 소리야. 핵심 정보는?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "핵심? 면접관 말이야? 그거 그냥… 서류 더미야. 종이 뭉치!"
					},
					"emotion": "angry",
					"speaker": "nia"
				},
				{
					"content": {
						"korean": "뭐라고? 면접관이 사람이 아니라고?"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "nia",
					"emotion": "sad",
					"content": {
						"korean": "그래. 그리고… 성공했다는 사람들도. 그냥 사라졌어. 흔적도 없이!"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "사라졌다고… 단순한 실종이 아닌가."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"speaker": "nia",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "nia",
					"emotion": "sad",
					"content": {
						"korean": "아직도 모르겠어? 너흰… 너무 위험해."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "위험? 우리가 얻은 정보는 중요한 단서야."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그래. '넥스트 기업'의 핵심 서버는… 100층 최상층."
					},
					"type": "speech",
					"speaker": "nia",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "최상층… 그럼 이제 그곳으로 가는 거야?"
					}
				},
				{
					"content": {
						"korean": "근데 10분마다 접속 코드가 바뀌어. 너희 같은 식으론 못 뚫어."
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "nia"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "10분마다… 시간 싸움이 되겠군."
					}
				},
				{
					"emotion": "sad",
					"speaker": "nia",
					"type": "speech",
					"content": {
						"korean": "…나라도… 널 돕지는 않아. 이젠."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "상관없어. 난 내 길을 간다."
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "데이터 보관실 깊은 곳, 거대한 서버가 빛났다."
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "그 앞에 정체 모를 자가 서 있었다."
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "여기까지… 감히 시스템을 침범하는가."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "네가 지키는 게 뭐지? 이 가짜 질서?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "너희 같은 버그는… 제거되어야만 한다."
					},
					"emotion": "angry",
					"speaker": "random_boss"
				}
			],
			"win_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 자가 '크아악!' 비명을 지르며 쓰러졌다."
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "크윽… 정보는… 혼란만을… 부를 뿐…"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "우리가 만들 혼란이 더 나을 거야."
					}
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "nia",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"speaker": "nia",
					"emotion": "sad",
					"content": {
						"korean": "…젠장. 해내다니. 근데 정보… 일부는 깨졌어."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "핵심 정보 일부가 유실되었다. 다음 목표는 '코어 서버'다."
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "정체 모를 자가 검은 데이터를 뿜어냈다."
					}
				},
				{
					"content": {
						"korean": "어리석은… 도전. 정보는 너희를 삼킬 것이다."
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "잃어버린 정보를 되찾아, 반드시 다시 올 거야."
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"넥스트 기업 시스템의 경보음이 울렸다.",
			"다음 목표는 '데이터 보관실'.",
			"니아의 정보를 강제로 회수해야 했다.",
			"그러나 그 과정은 순탄치 않을 터였다.",
			"중요한 단서는 파편처럼 흩어져 있었다."
		]
	}
} as const;
