export const scenario_modern_whisperweb_0_HCR_02 = {
	"scenario_id": "modern_whisperweb_0_HCR_02",
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
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "도시 외곽의 허름한 서버 관리실. 네온 간판의 깜빡임이 끊임없이 창을 비췄다."
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "dax",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "왔군. 미안해. 내가 이 지경으로 만들었어."
					},
					"speaker": "dax",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "시청 고객 정보가 담긴 USB를 잃어버렸다고?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "dax",
					"content": {
						"korean": "응. 내 실수야. '디지털 가디언' 전직 직원으로… 변명할 여지가 없어."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "'디지털 가디언'에 연락해서 정식 복구 절차를 밟겠어."
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그, 그럴 시간이 없어. 지금 당장 유출될 위험에 처했어."
					},
					"speaker": "dax",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "dax",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "정식 절차는 너무 오래 걸려. 이미 시스템에 이상 징후가 보이기 시작했어."
					},
					"speaker": "dax",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그래도 불법적인 백도어 접근은 안 돼. 더 큰 문제를 일으킬 거야."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "당장 시민 1천 명의 개인 정보가 터질지도 몰라. 이대로 두면 안 돼."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "정식 절차를 고수해야 해. 그게 정보를 지키는 유일한 방법이야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "닥스는 오래된 데이터 칩을 꺼내 들었다. 재생 불가능한 오류 메시지와 함께 단편적인 음성 기록이 흘러나왔다. '모든 비밀이… 연결된다…'."
					},
					"speaker": "narrator"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "dax",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "내 말 좀 들어! 지금 당장 데이터가 풀리고 있다고! 시간이 없어!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "시스템 오류는 일시적일 수 있어. 정식 절차는 신중해야 해."
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "신중하다가 모두에게 피해를 주면 어쩌려는 거야?"
					},
					"speaker": "dax",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "시내의 몇몇 전광판에서 무작위 숫자 배열과 알 수 없는 기호들이 찰나의 순간 나타났다 사라졌다."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "나는 내 원칙을 지켜야 해. 혼란을 막으려면 질서가 필요해."
					},
					"speaker": "character_any",
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "dax",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "시내 곳곳의 대형 디지털 광고판에 시청 시민 1천 명의 개인 정보가 임시적으로 노출되기 시작했다."
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "안 돼! 내가 경고했잖아! 네 고집 때문에 다 망쳤어!"
					},
					"speaker": "dax",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이런… 내가 막지 못했어."
					}
				},
				{
					"speaker": "dax",
					"content": {
						"korean": "이건 되돌릴 수 없는 일이야. 이 정보들은 이제 도시를 떠돌게 될 거야."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "내 원칙이… 이런 결과를 가져오다니."
					},
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "네 원칙은 도시를 망쳤어. 봐, 넌 아무것도 막지 못했어."
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "아니. 내일은 모든 정보 유출 경로를 추적해서 차단할 거야. 하나도 남김없이."
					}
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이것뿐이라고 생각하나? 그 정보는 이미 다른 곳으로 흘렀어. 더 많은 것이 연결될 거야."
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "아니, 나는 모든 것을 되돌릴 거야. 이 혼란을 반드시 끝내겠어."
					},
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 자의 그림자는 사라졌지만, 도시의 디지털 간판은 여전히 불규칙적으로 깨진 정보를 띄웠다. 정보 유출은 끝나지 않았다."
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "폐쇄된 데이터 센터 서버실. 수십 대의 서버 팬 소리가 거친 숨소리처럼 울렸다. 그곳에 정체 모를 자가 서 있었다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "봐. 네 원칙은 아무것도 막지 못했어. 정보는 강물처럼 흐를 뿐이지."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네가 이 모든 혼란을 만들었어. 네 마음대로 정보를 가지고 놀았어."
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "나는 그저 길을 열었을 뿐. 사람들은 자기들이 보고 싶은 것만 보지."
					},
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"도시의 정보 교란은 멈추지 않았다.",
			"전직 보안 직원 닥스는 시청 고객 정보가 담긴 USB를 잃어버렸다.",
			"주인공은 정식 절차를 통해 데이터를 복구하려 한다.",
			"하지만 시간은 기다려주지 않았고, 정보는 통제 불능으로 흘러가기 시작했다."
		]
	}
} as const;
