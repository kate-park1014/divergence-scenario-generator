export const scenario_modern_whisperweb_0_FIE_02 = {
	"scenario_id": "modern_whisperweb_0_FIE_02",
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
	"prologue": {
		"korean": [
			"중계소 랙 하나를 뽑았다. 복사본은 12곳으로 흩어졌다.",
			"주소가 남은 로그를 쫓아 전자제품 수리점 '닥스 일렉트로닉스'에 왔다.",
			"닥스는 8년 전 기업 보안망을 뚫었던 해커다. 지금은 라디오를 고치며 산다.",
			"그의 서버에 12곳으로 갈라진 송출 경로가 남아 있다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "간판이 꺼진 골목. 수리점 셔터에 나선형 낙서가 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "dax",
					"duration_ms": 500,
					"spot": [
						4,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "영업 끝났어. 라디오는 내일 찾아와."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "라디오 아니야. 서버 보러 왔어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "…그 낙서 그린 거 너희야?"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "그거 지우고 가. 그거 보이면 애들이 못 와."
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "dax",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "로그는 보여줄 수 있어. 열지는 마."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "왜."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "칩 안에 8년 전 내 기록이 같이 들어 있어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "그거 열면 내 이름도 같이 새. 벌금이 억 단위야."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 8년 전에 안 했어야지."
					},
					"emotion": "angry"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "dax",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "손대지 마. 지금 뽑으면 경보가 시청으로 가."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "12곳 중 하나만 알려줘. 그럼 조용히 갈게."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "몰라. 나 여기서 라디오나 고쳐."
					},
					"emotion": "sad"
				},
				{
					"type": "direction",
					"action": "shake",
					"speaker": "character_any",
					"duration_ms": 400
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "주인공이 케이블을 뽑았다. 랙 3대가 동시에 붉게 켜졌다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "…야. 내 상호가 방금 검색됐어."
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "간판에 '닥스 일렉트로닉스'와 벌금 3,200만 크레딧이 떴다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "미안. 근데 칩은 복사했어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "미안은 됐고. 영업정지 통보가 왔어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "손님 40명 몫이 여기 다 들어 있었어. 다 끝났어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "칩에 송출 경로가 있어. 하나만 더."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "가. 다음에 오면 경찰 부를 거야."
					},
					"emotion": "angry"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "수리점 지하 창고. 서버 앞에 정체 모를 자가 서 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "그 칩, 주인 없이 돌아다니는 줄 알아?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네가 경로를 붙였잖아."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "붙인 건 맞아. 근데 이름 띄운 건 네가 뽑은 케이블이야."
					},
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "칩 안에 음성 있어. 들어 봐."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "잡음 사이로 '모든 비밀은… 연결된다…'가 세 번 반복됐다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이 목소리, 사람이 아니야."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "창밖 간판 3개가 동시에 꺼졌다. 골목 벽에 나선형 낙서가 늘어 있었다."
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "닥스 이름은 아직 화면에 남아 있어. 지워지는 10초를 기다려."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그 10초에 내가 다시 온다."
					},
					"emotion": "angry"
				}
			]
		}
	]
} as const;
