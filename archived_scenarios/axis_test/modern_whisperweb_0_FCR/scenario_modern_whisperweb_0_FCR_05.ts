export const scenario_modern_whisperweb_0_FCR_05 = {
	"scenario_id": "modern_whisperweb_0_FCR_05",
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
			"도시 전역에 시민 정보가 폭로되었다.",
			"은행 계좌 잔액까지 공개되며 수십만 명이 혼란에 빠졌다.",
			"정보상 에코는 이 광기를 멈추라고 절규한다.",
			"위스퍼 웹을 파괴해 정보의 흐름을 끊어야 한다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "도시 전역의 대형 전광판이 일제히 번쩍였다. 무작위로 깨진 이미지와 숫자가 스쳐 지나갔다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "direction",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"speaker": "echo",
					"action": "enter"
				},
				{
					"content": {
						"korean": "안 돼… 저걸 봐!"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "echo"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "전광판에 시민 100만 명의 이름, 주소, 병력이 송출되기 시작했다."
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이게 다 뭐야?!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "개인 정보가… 전부 공개되고 있어!"
					},
					"emotion": "angry",
					"speaker": "echo"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"speaker": "echo",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "내가 본 것보다… 훨씬 심해! 위스퍼 웹이 도시를 잠식하고 있어."
					},
					"emotion": "sad",
					"speaker": "echo"
				},
				{
					"type": "speech",
					"content": {
						"korean": "오래된 데이터 칩에서 재생 불가능한 오류 메시지가 점멸했다. '모든 비밀이… 연결된다…'는 단편적인 음성 기록이 흘러나왔다."
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "위스퍼 웹이 뭘 하려는 거지?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "정보의 흐름을 끊어야 해. 모든 걸 멈춰야 해!"
					},
					"emotion": "angry",
					"speaker": "echo"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "echo",
					"spot": [
						4,
						2
					]
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "사람들이 서로를 의심해… 광기에 휩싸이고 있어."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "시내 병원에서 급성 기억 상실 환자가 늘고 있다는 소문과, 잠긴 문 뒤에서 수천 개의 눈이 자신을 보는 악몽이 사람들 사이에 퍼졌다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "에코, 진정해."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "진정할 수 없어! 네가… 네가 막아야 해!"
					},
					"emotion": "angry"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "echo",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "도시 곳곳의 골목 벽면에서 블랙아웃 조직 문신과 유사한 특정 패턴의 낙서 및 문양이 나타났다."
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "모든 정보… 모든 거짓말… 전부 폭로될 거야!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "위스퍼 웹의 본체가 여기 있다는 거지?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "echo",
					"type": "speech",
					"content": {
						"korean": "그래… 정보를 끊어야 해. 지금 당장. 안 그러면… 전부…"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "멈춘다. 내가 멈춘다."
					},
					"emotion": "angry"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "네 두려움, 네 거짓말, 네 가장 깊은 치부까지! 전부 나에게 있어! 그리고 이제... 네 것이 될 거야!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "위스퍼 웹은 파괴되었다. 그러나 도시 전역의 전광판이 일제히 폭주했다."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "주인공이 강압적으로 얻어냈던 정보들과 통제하려 했던 모든 비밀이 도시 전체에 폭로되기 시작했다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "echo",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						2
					]
				},
				{
					"speaker": "echo",
					"type": "speech",
					"content": {
						"korean": "이게… 대체… 무슨…"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "승리했지만, 모든 개인의 존엄이 파괴된 세상이 남았다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "포기해라. 네가 이 혼란을 만든 장본인이다."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "아니. 이건 멈춰야 해. 정보의 흐름을 끊을 거야."
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "위스퍼 웹의 홀로그램이 주인공을 덮쳤다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "거대한 중앙 서버실, 거대한 홀로그램이 빛났다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "왔군. 정보를 통제하려던 자."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이 혼란을 끝낼 거야."
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "네가 뭘 끝내? 네가 뿌린 혼란을? 네가 정보를 강제로 빼앗았잖아."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "boss"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "네 손으로 수많은 개인 기록을 폭로했잖아."
					},
					"emotion": "base"
				}
			],
			"id": 15
		}
	],
	"epilogue": {
		"korean": [
			"위스퍼 웹이 사라진 후, 도시 전광판은 더 큰 혼란을 송출했다.",
			"공동체를 지키려던 폭력이 도시를 깊은 광기로 몰아넣었다.",
			"정보의 통제는 실패했다. 모든 개인의 비밀이 만천하에 드러났다.",
			"승리했지만, 남은 것은 차가운 침묵과 절망뿐이었다."
		]
	}
} as const;
