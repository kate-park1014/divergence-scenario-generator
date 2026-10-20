export const scenario_modern_whisperweb_0_HIE_05 = {
	"scenario_id": "modern_whisperweb_0_HIE_05",
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
			"카이의 왼쪽 주머니에서 나온 2장까지 합쳐, 장부 14장이 전부 돌았다.",
			"위스퍼 웹은 어젯밤부터 전광판 137개를 동시에 잡았다.",
			"이름, 주소, 병력, 대출 연체, 통화 기록. 순서도 없이 10초씩.",
			"정보상 에코가 마지막으로 한 번 더 부른다더라. 서버실 지하 3층."
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
						"korean": "지하 3층 복도. 형광등 네 개 중 두 개가 깜빡였다."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "echo",
					"duration_ms": 500,
					"spot": [
						3,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "왔네. 오늘 새벽 4시에 송출 하나 터져."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "어느 랙."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "랙이 아니야. 복사본 41개가 도시 전역에 있어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "41개를 다 어떻게 꺼."
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "echo",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "이거 봐. 2번가 간판에 네 이름 떴어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…내 기록은 내가 지웠는데."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "지운 게 아니라 옮겨졌어. 4년 전 창고 주소까지 정확해."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 이제 나도 명단에 있는 거야."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "명단은 어제 4,200명 늘었어. 오늘 더 늘어."
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
					"speaker": "echo",
					"duration_ms": 450,
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "내가 이 도시 정보 20년 만졌어. 이런 건 처음이야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "설명해. 짧게."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "위스퍼 웹은 서버가 아니야. 남의 기록을 다 모아 붙인 덩어리야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "그걸 끄면 붙어 있던 4,200명 기록이 한꺼번에 풀려."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "끄지 말라는 거야?"
					},
					"emotion": "angry"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "echo",
					"duration_ms": 500,
					"spot": [
						3,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "밤 11시, 송출 137개가 한 번에 열려. 전체 공개야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "막을 방법은."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "없어. 하나뿐이야. 열리기 전에 그 녀석을 꺼내는 거."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "그리고— 나도 오늘 이름이 떴어. 내 주소까지."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "난 여기서 빠질게. 마지막 조언 하나 남길게."
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
						"korean": "서버 랙 41개가 켜져 있었다. 랙 사이에 누군가 서 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "네 이름, 벌써 3번 떴어. 조회수 6만이야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "내 기록 걷어. 지금."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "내가 붙인 게 아니야. 네가 안 지운 거지."
					},
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "나를 꺼도 붙어 있던 건 안 떨어져. 4,200명 그대로야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 다시 붙이면 되잖아."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "…그렇게 또 하나 붙겠네."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "랙 41개가 꺼졌다. 전광판 137개는 그대로 켜져 있었다."
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "네 생년월일, 지금 4번가 간판에 걸어뒀어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "내일 새벽 4시 송출 전에 4번가 랙부터 뽑는다."
					},
					"emotion": "angry"
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"밤 11시는 오지 않았다. 대신 이미 나와 있던 4,200명 이름이 그대로 남았다.",
			"에코는 지하철 3번 출구에서 표 두 장을 들고 서 있었다. 자기 이름이 뜬 뒤로 처음 본 얼굴이다.",
			"닥스의 셔터는 여전히 내려가 있고, 린의 게시판 글은 아직 첫 페이지에 있다.",
			"도시는 조용해졌지만 아무도 서로를 부르지 않았다."
		]
	}
} as const;
