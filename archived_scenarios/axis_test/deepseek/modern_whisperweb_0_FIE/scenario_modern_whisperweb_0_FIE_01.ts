export const scenario_modern_whisperweb_0_FIE_01 = {
	"scenario_id": "modern_whisperweb_0_FIE_01",
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
			"새벽 2시, 네온 간판 아래에서 에코를 만나기로 했다.",
			"도시의 스크린들이 어젯밤부터 이상하다. 이름도 없는 숫자가 3초씩 스쳐 간다.",
			"에코는 정보를 파는 자다. 값은 현금, 조건은 질문하지 않는 것.",
			"그리고 오늘, 에코가 먼저 연락을 했다."
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
						"korean": "철거 예정인 상가 3층. 스크린 하나가 켜지지 않는 채 깜빡였다."
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
						"korean": "왔네. 어제 11시부터 이 구역 간판 74개가 돌아가면서 깨져."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "누가 장난치는 거야?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "장난이면 좋겠지. 이거 봐."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "영상 4초. 소리는 안 나와. 문장 하나뿐이야."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "화면에 '모든 비밀은 곧 공개된다'는 자막이 2초 떴다 사라졌다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이거 어디서 났어?"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "젖은 골목. 벽면 스크린이 3초마다 꺼졌다 켜졌다 했다."
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
						"korean": "또 깨졌어. 이번엔 주소가 한 줄 나왔대."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "주소? 누구 집?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "몰라. 근데 그 집 사람이 10분 전에 이사 나갔어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "당장 서버 있는 데로 가야겠네."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "혼자 밀고 들어갈 셈이면 난 빼줘. 난 값만 받고 끝이야."
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "통신 중계소 옥상. 안테나 6개가 같은 방향을 향하고 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "echo",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "여기서 신호가 뿌려지는 거야?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "응. 근데 송출 기록에 이름이 안 남아. 주인 없는 신호야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 중계소 직원한테 물어보지 뭐."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "그 직원 어젯밤에 실명하고 주소까지 방송에 나갔어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "그 사람 지금 집에 못 들어가. 그러니까 함부로 이름 대지 마."
					},
					"emotion": "angry"
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
						"korean": "지하 전산실. 랙 하나에 불이 들어왔다. 주소 라벨은 뜯겨 있었다."
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
					"speaker": "character_any",
					"content": {
						"korean": "이 랙이면 송출 전체를 끊을 수 있어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "그거 뽑으면 복사본 12개가 한꺼번에 터져. 경찰 기록까지."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "알아. 그래도 뽑아."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "…이걸 뽑으면 난 너랑 끝이야. 난 이 도시에 아직 살아야 하거든."
					},
					"emotion": "sad"
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
						"korean": "서버 랙 앞에 누군가 서 있었다. 손에 케이블이 감겨 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "뽑아 봐. 어차피 복사본은 이 건물에 있어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네가 뿌린 거야?"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "뿌린 건 아니고. 이름 붙인 건 나야."
					},
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "복사본은 이미 12곳에 갔어. 넌 하나 끊었을 뿐이야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "12곳 다 찾아가면 되지."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "바닥에 떨어진 케이블 끝에 나선형 표식이 새겨져 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "옥외 스크린 400개가 동시에 켜졌다. 숫자 배열이 흘러갔다."
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "네 이름도 내일 아침 간판에 올라가 있어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그 전에 랙 번호 다 외워뒀어. 다시 온다."
					},
					"emotion": "angry"
				}
			]
		}
	]
} as const;
