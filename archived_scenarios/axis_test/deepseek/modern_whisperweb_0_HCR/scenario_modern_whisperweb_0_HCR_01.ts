export const scenario_modern_whisperweb_0_HCR_01 = {
	"scenario_id": "modern_whisperweb_0_HCR_01",
	"order": 1,
	"act": "intro",
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
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"새벽 2시, 시내 전광판 47개가 동시에 꺼졌다 켜졌다.",
			"화면에는 숫자 배열과 일그러진 얼굴이 5초씩 번갈아 떴다.",
			"시청 데이터 유출 뉴스는 그날 밤 전부 삭제됐다.",
			"정보상 에코가 골목 끝에서 기다리고 있었다."
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
						"korean": "비에 젖은 골목. 간판 불빛이 한 번씩 깨져 나갔다."
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
						"korean": "왔어. 오늘 밤엔 셋만 팔려고 했는데."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "전광판, 봤어. 저게 뭐야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "나도 몰라. 그래서 네게 파는 거야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "이거, 시청 서버에서 흘러나온 조각이야."
					},
					"emotion": "base"
				}
			],
			"win_dialogue": [],
			"lose_dialogue": []
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "홀로그램 프로젝터가 손바닥 위에서 두 번 끊겼다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "화면이 왜 이렇게 깨져 있어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "누가 지운 게 아니야. 원본이 저래."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "비밀은 곧 공개된다 — 자막에 이 문장만 남았어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "이거 건드리면 시청 개인정보 같이 새. 지금 덮어?"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "안 덮어. 이대로 들고 간다."
					},
					"emotion": "angry"
				}
			],
			"win_dialogue": [],
			"lose_dialogue": []
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "echo",
					"duration_ms": 400,
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "하나만 더. 나 12년 동안 서버실에서 일했어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "전광판 숫자 배열, 7열로 끊겨. 사람이 쓴 게 아니야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 뭐가 쓴 건데."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "옛 통신망이 살아 있으면 이렇게 떠. 확인은 못 했어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "내 조언은 하나야. 모든 회선 끊어."
					},
					"emotion": "base"
				}
			],
			"win_dialogue": [],
			"lose_dialogue": []
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "터널 벽에 부서진 회로 기판 모양 낙서가 다섯 개 붙어 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "에코. 끊으면 어떻게 돼."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "도시 전산이 오늘 밤에 멈춰. 병원 기록도 같이."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그래도 끊어. 지금 당장."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "…알겠어. 대신 이건 내가 안 한 걸로 해."
					},
					"emotion": "base"
				}
			],
			"win_dialogue": [],
			"lose_dialogue": []
		},
		{
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "서버 랙 사이에 정체 모를 자가 서 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "회선 끊은 건 너희지. 나는 그 위에서 놀았어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "전광판에 띄운 숫자, 네가 만든 거야?"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "숫자는 원래 있던 거야. 순서만 바꿨어."
					},
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "끊어도 다시 붙어. 한 번 올라간 건 안 내려가."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그 말, 누구한테 들었어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "무너진 랙 뒤에서 서버 하나가 아직 켜져 있었다."
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "네가 끊은 회선, 병원 기록이 먼저 날아갔어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "백업 서버부터 찾는다. 내일 새벽에."
					},
					"emotion": "angry"
				}
			]
		}
	]
} as const;
