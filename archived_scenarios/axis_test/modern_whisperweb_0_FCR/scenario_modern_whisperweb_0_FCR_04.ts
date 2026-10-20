export const scenario_modern_whisperweb_0_FCR_04 = {
	"scenario_id": "modern_whisperweb_0_FCR_04",
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
			"거짓 정보가 도시를 뒤덮고, 통제 불능의 정보 파도는 멈추지 않았다.",
			"정의를 지키려던 행동은 수백만 시민의 개인 정보를 폭로했다.",
			"이제 블랙아웃 조직의 전 행동대장 카이를 찾아야 한다.",
			"과거 조직의 기록에서 위스퍼 웹의 단서를 찾아낼 것이다.",
			"법이 막히면, 물리적인 방법으로라도 증거를 확보한다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "낡은 아지트, 카이가 낡은 서류들을 정리하고 있었다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
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
					"content": {
						"korean": "블랙아웃 조직의 자료를 요구한다. 영장이야."
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "영장? 그런 종이쪼가리로 여기를 뒤질 순 없어."
					},
					"type": "speech",
					"speaker": "kai",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "협조하는 게 좋을 거야."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "조직의 비밀은 죽어도 안 넘겨."
					},
					"type": "speech",
					"speaker": "kai",
					"emotion": "angry"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "도시 곳곳에서 급성 기억 상실 환자가 늘고 있다는 소문이 퍼지고, 잠긴 문 뒤의 수천 개의 눈을 보는 악몽이 사람들에게 퍼지기 시작했다."
					}
				},
				{
					"content": {
						"korean": "조직원들 명단이 여기 있다고 들었다."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그건 절대 안 돼. 그 사람들 가족들이 위험해져."
					},
					"speaker": "kai",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "피해를 막기 위해 필요한 정보야."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "이대로 두면 더 많은 사람들이 죽어."
					},
					"speaker": "kai",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "계속 버티면, 물리적으로라도 확보할 수밖에 없어."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "해볼 테면 해봐."
					},
					"speaker": "kai",
					"emotion": "angry"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "주인공이 카이를 밀치고, 낡은 장부를 빼앗았다."
					}
				},
				{
					"content": {
						"korean": "안 돼! 이걸 열면…"
					},
					"speaker": "kai",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이미 늦었어."
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "장부가 열리자, 그 안에 있던 조직원 명단이 빛과 함께 터져 나오며 허공에 흩뿌려졌다."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"emotion": "angry",
					"content": {
						"korean": "다 끝났어… 수십 명의 가족들이 위험해졌다고!"
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"content": {
						"korean": "도시 전광판에 블랙아웃 조직원들의 이름과 주소가 동시다발적으로 폭로되기 시작했다."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "네가 한 짓이야! 조직원 가족들이 보복 위협에 시달릴 거야!"
					},
					"speaker": "kai",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "혼란을 멈추기 위한 최소한의 조치였다."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"emotion": "angry",
					"content": {
						"korean": "최소한? 네 행동 때문에 무고한 사람들이 죽게 생겼어."
					}
				},
				{
					"content": {
						"korean": "위스퍼 웹을 막기 위해선 어쩔 수 없었어."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "kai",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "너도 결국 그들과 똑같아. 정보를 파괴하고 사람들을 이용해."
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "거리의 디지털 간판에서 블랙아웃 조직 문신과 유사한 패턴의 낙서가 나타났다 사라진다."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "깊은 지하 서버실, 정체 모를 자가 거대한 모니터 앞에 서 있었다."
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "왔군. 또 하나의 진실을 폭로하고."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "내가 막으려 한 건 혼란이야."
					}
				},
				{
					"content": {
						"korean": "혼란? 사람들은 이미 너무 많은 것을 알고 있어. 네가 더 알려줬지."
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "네가 얻은 건 허상이야. 그 장부로 뭘 할 수 있을 것 같나?"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 정보를 이용해서 위스퍼 웹을 찾아낼 거야."
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이미 그 정보는 너를 찾아내고 있어."
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "정체 모를 자는 연기처럼 사라졌다."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "폭로된 조직원 명단은 도시의 모든 그림자에 스며들었다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "정보는 이미 피할 수 없는 현실이 되었다."
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "네가 오늘 파괴한 건 수십 가족의 삶이야. 뭘 얻었지?"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "여기서 멈출 순 없어. 내일 밤, 카이에게서 새로운 정보를 찾아낼 거야."
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "정보의 파도는 주인공을 휩쓸었다."
					}
				}
			]
		}
	]
} as const;
