export const scenario_modern_whisperweb_0_HIE_04 = {
	"scenario_id": "modern_whisperweb_0_HIE_04",
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
			"린의 정정문은 올라갔지만 그녀의 통화 기록도 함께 퍼졌다.",
			"주인공 손에 남은 건 미러 서버 두 개에서 뽑은 로그뿐.",
			"그 로그 끝에 낡은 장부 하나가 걸려 있다.",
			"'블랙맘바' 정보책 카이. 도피 자금이 필요하다더라."
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
						"korean": "세탁소 뒷방. 드라이어 소리 사이로 카이가 계산기를 두드렸다."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "kai",
					"duration_ms": 500,
					"spot": [
						4,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "왔어? 장부 값은 현금 5백이야.",
						"speaker": "kai"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "장부가 뭘 담았는데."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "블랙맘바 거래 기록 8년치. 위스퍼 웹에 넘기면 나 죽어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "5백은 없어. 3백에 사고, 나머지는 내가 만든다."
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
					"speaker": "kai",
					"duration_ms": 450,
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "장부 첫 장. 위스퍼 웹 표식이 찍혀 있어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "표식이 왜 장부에 있어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "팔려고 했거든. 값은 못 받고 표식만 남았어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "나머지 장은 어디 있어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "안전한 데 있지. 돈부터 확인하고 보여줄게."
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "kai",
					"duration_ms": 500,
					"spot": [
						2,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "카이가 장부 묶음을 탁자에 놓았다. 14장 중 12장만 차 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "펼쳐 봐. 9번째 장."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…이거 내 이름이야."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "4년 전 창고 불. 네가 문 열었던 날짜까지 적혀 있어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이 장 빼고 나머지 다 넘겨."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "값이 올라갔어. 이제 8백이야."
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "kai",
					"duration_ms": 400,
					"spot": [
						5,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "돈 안 가져오면 9번째 장만 위스퍼 웹에 넘길 거야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "넘기면 너도 같이 걸려."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "난 이미 도피 중이야. 남은 건 돈뿐이고."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "카이가 9번째 장을 뜯어 봉투에 넣고 주머니에 넣었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그 봉투, 지금 여기서 못 나가."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "값 부른 사람은 너야. 봉투는 내가 들고 갈게."
					},
					"emotion": "base"
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
						"korean": "옥상 환풍기 앞에 정체 모를 자가 서 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "장부 9번째 장, 잘 읽었어? 4년 전 창고 주소까지."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "카이가 너한테 넘긴 거야?"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "카이는 값만 올렸어. 봉투는 내게 먼저 왔지."
					},
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "장부 14장 중 나머지 2장은 아직 못 셌어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "누가 갖고 있는데."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "카이가 왼쪽 주머니에 또 하나 넣고 나갔어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "환풍기가 멈췄다. 옥상 문 옆 계단에서 발소리가 올라왔다."
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "9번째 장은 5번가 간판에 걸어둘게. 밤 10시에."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "10시 전에 5번가 송출 랙부터 뽑는다."
					},
					"emotion": "angry"
				}
			]
		}
	]
} as const;
