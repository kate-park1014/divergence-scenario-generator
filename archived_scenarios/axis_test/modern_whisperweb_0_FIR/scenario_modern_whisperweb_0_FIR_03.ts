export const scenario_modern_whisperweb_0_FIR_03 = {
	"scenario_id": "modern_whisperweb_0_FIR_03",
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
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "어둠 속에서 린의 사무실 간판이 희미하게 빛났다."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "린 기자인가."
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "lin",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "왔군요. 예상했어요."
					},
					"emotion": "base",
					"speaker": "lin"
				},
				{
					"emotion": "base",
					"speaker": "lin",
					"content": {
						"korean": "위스퍼 웹이 퍼뜨리는 소문 때문에 온 거죠?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "당신이 진실을 안다고 들었다."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그들은 특정 시민의 신상을 이용해서 괴담을 만들고 있어요."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "lin"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "lin"
				},
				{
					"speaker": "lin",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "내 자료를 얻으려는 거라면… 위험한 짓이에요."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "당신의 취재 자료가 필요하다."
					}
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "sad",
					"content": {
						"korean": "여기에는 위스퍼 웹이 이용하는 불법 금융 정보가 담겨 있어요. 시민 수천 명의 민감한 기록이죠."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그래서 더 가치 있는 정보군."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "그걸 이용하면 당신도 나도 모든 걸 잃게 될 거예요."
					},
					"speaker": "lin",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "그럴 일은 없다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "lin",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "sad",
					"content": {
						"korean": "제발, 이 정보는…!"
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "주인공은 린의 단말기에서 미공개 금융 정보를 유출하려 했다."
					}
				},
				{
					"speaker": "lin",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "멈춰! 그러다 내 신상까지…!"
					}
				},
				{
					"content": {
						"korean": "그 순간, 오래된 데이터 칩이 알 수 없는 오류 메시지와 함께 '모든 비밀이… 연결된다…'는 음성 기록을 흘려보냈다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "도시의 모든 디지털 광고판이 붉게 물들었다. 린의 얼굴과 함께."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "안 돼! 이건… 이건 내…!"
					}
				},
				{
					"content": {
						"korean": "…젠장."
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "도시의 모든 광고판에 린의 신상과 불법 취재 자료가 실시간으로 송출되고 있었다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "lin",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "lin",
					"content": {
						"korean": "모든 걸 잃었어… 내 이름이… 내 인생이…"
					}
				},
				{
					"content": {
						"korean": "위스퍼 웹이 정보를 빼돌렸군."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "내가 모은 시민들의 금융 정보까지… 다 퍼졌어."
					},
					"emotion": "sad",
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "어둡고 습한 골목 벽면에서 특정 패턴의 낙서가 눈에 띄었다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "되돌릴 수 없다."
					}
				},
				{
					"content": {
						"korean": "린은 주저앉았다. 그녀는 도시의 조롱거리가 되어버렸다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "네가 린을 버렸듯이, 너의 정보도 버려질 것이다."
					}
				},
				{
					"content": {
						"korean": "반드시 린의 명예를 되찾고, 너를 파괴한다."
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "도시 서버의 핵심부, 복잡한 회로 앞에 정체 모를 자가 서 있었다."
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "왔나. 린 기자의 파멸을 보고도."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "네가 모든 걸 꾸민 건가?"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "나는 그저 보여줬을 뿐이다. 정보의 본질을."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "네 이기심이 린을 끌어내렸다."
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "막겠다."
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "넌 결국 린을 구하지 못했다. 다음은 너의 차례다."
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "네가 감춰온 모든 비밀이 곧 드러날 것이다."
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "무슨 소리지?"
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "도시의 전광판은 여전히 린의 얼굴과 함께 수많은 시민들의 민감한 금융 정보를 번쩍였다."
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "그러나 그 속에서 누군가의 낡은 통신 기록이 섬광처럼 스쳐 지나갔다."
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"도시의 전광판은 거짓 정보로 가득 찼다.",
			"'진실의 목소리' 기자 린은 그 배후를 쫓고 있었다.",
			"그녀에게 위스퍼 웹의 진실을 캐낼 열쇠가 있었다.",
			"우리는 그녀의 손에 든 모든 정보를 원했다."
		]
	}
} as const;
