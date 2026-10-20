export const scenario_modern_whisperweb_0_FCE_01 = {
	"scenario_id": "modern_whisperweb_0_FCE_01",
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
			"비가 그친 새벽 2시, 도시의 광고판이 10초간 멈췄다.",
			"이름. 주소. 2019년 대출 기록. 지나가던 사람들이 그걸 찍었다.",
			"경찰은 해킹이라고 했다. 하지만 아무도 신고하지 않은 이름이었다.",
			"정보상 에코가 오늘 밤, 값을 부른다. 돈이 아니라 부품으로."
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
						"korean": "뒷골목 끝, 꺼진 간판 아래 철제 셔터가 반쯤 열려 있었다."
					},
					"emotion": "base"
				},
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
						"korean": "왔네. 그 부품, 가져왔어?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "간판 얘기부터 해."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "어젯밤 광고판 열두 개가 동시에 멈췄어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "뜬 건 이름이랑 대출 기록. 10초 뒤에 지워졌고."
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
						3,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "저 간판 봐. 지금도 숫자가 섞여 나와."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "4302… 88… 이게 뭐야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "1초만 뜨고 사라져. 나도 못 읽어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "시청 서버실 주소래. 누가 나한테 판 거야."
					},
					"emotion": "sad"
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
						"korean": "이거 받아. 값은 나중에."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "칩이잖아. 재생도 안 되는데."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "영상 12초야. 끝에 한 줄만 들려."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "'모든 비밀은 곧 공개된다' — 목소리가 내 거였어."
					},
					"emotion": "sad"
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
						1,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "…나 요즘 손이 떨려. 화면 볼 때마다."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그 칩이랑 무슨 상관이야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "내 이름이 광고판에 떴어. 3시에. 생년월일까지."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "에코, 일단 뒤로 빠져."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "아니야. 서버실 문 열리면 나도 들어가."
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
						"korean": "서버 랙 사이에 누군가 서 있었다. 손에 케이블이 감겨 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "여기까지 왔어? 간판 읽었겠네."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이름 띄운 게 너야."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "난 주소만 알려줬어. 문 연 건 시청이야."
					},
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…에코한테 물어봐. 걔가 나한테 판 거야."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "거짓말 마."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "광고판에 뜬 번호, 아직 안 지웠지."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "바닥에 떨어진 케이블 끝에서 에코의 목소리가 새어 나왔다."
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "에코 이름, 내일 아침 광고판에 올린다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그 전에 서버 랙부터 뽑을 거야."
					},
					"emotion": "angry"
				}
			]
		}
	]
} as const;
