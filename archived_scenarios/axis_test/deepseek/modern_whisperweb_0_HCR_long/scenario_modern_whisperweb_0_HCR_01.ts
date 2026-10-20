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
			"새벽 2시. 시내 전광판 34개가 동시에 5초간 깨진 얼굴을 띄웠다가 꺼졌다.",
			"신고는 112건. 처리된 건 0건.",
			"주인공은 정보상 에코를 만나러 간다. 시청 데이터 유출 뉴스가 담긴 홀로그램 프로젝터를 들고.",
			"그 프로젝터에는 아직 재생되지 않은 영상 하나가 남아 있다."
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
						"korean": "지하 상가 막다른 칸. 형광등 두 개 중 하나가 나가 있다."
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
						"korean": "왔어. 문 닫기 전에 와서 다행이야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "전광판들. 봤어?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "어젯밤 34개. 오늘은 41개로 늘었어. 시청 접수 기록은 아직 0건이야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "왜 신고가 없어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "신고를 받는 창구랑 전광판을 관리하는 서버가 같은 데 있어. 같은 데서 고장 나면 기록도 안 남아."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 그 서버를 직접 봐야겠네."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "그건 내가 못 열어. 열면 내 고객 명단부터 같이 나와."
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
						"korean": "이거 받아. 시청 데이터 유출 뉴스 프로젝터인데, 끝에 12초가 지워져 있어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "지워진 걸 왜 줘."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "지운 사람이 못 지운 게 있어. 재생해 봐."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "홀로그램 위로 숫자 배열이 올라간다. 4 0 7 2 9 1 3. 그리고 왜곡된 얼굴이 한 프레임."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…이게 뭐야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "나도 몰라. 근데 같은 숫자가 어제 시내 광고판 세 곳에서도 나왔어. 시청 기록엔 없는데."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "걷는 동안 간판들 봐. 5초만 보면 넘어가니까, 폰으로 찍어."
					},
					"emotion": "base"
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
						"korean": "찍은 거 보여줘. …네 개 중 세 개가 똑같아."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "같은 얼굴이 계속 나와."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "얼굴 아냐. 이건 카메라 렌즈처럼 찍힌 거야. 누가 어디 앉아 있는지를."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…그럼 이 숫자는."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "모르겠어. 근데 시청 서버실 지하 3층, 폐쇄된 방에 서버가 하나 더 있어. 전력이 계속 들어가. 3년째."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "거길 열면 시청 기록 전체가 밖으로 나가. 진짜로 나가. 각오하고 가."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "알아. 열 거야."
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
					"speaker": "narrator",
					"content": {
						"korean": "지하 3층 철문 앞. 문 옆 벽에 부서진 회로 기판 모양이 스프레이로 그려져 있다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "이 낙서… 다른 데서도 봤어. 어제 회수한 중고 하드디스크 케이스에도 이게 새겨져 있었어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "같은 사람이 한 거겠지."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "한 명이 3년 동안 문 앞에 그리고 다녔을까. …문 열면 이제 못 닫아. 여기 있는 기록 전부 밖으로 나가."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "닫을 생각 없어."
					},
					"emotion": "angry"
				},
				{
					"type": "direction",
					"action": "exit",
					"speaker": "echo",
					"duration_ms": 400,
					"direction": "down"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "철문이 열린다. 안쪽 서버 랙 12대가 전부 켜져 있다. 팬 소리뿐이다."
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
						"korean": "서버 랙 사이에 누군가 서 있다. 케이블을 손에 쥔 채 고개를 든다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "문 열었네. 3년 만에 처음이야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "전광판 숫자는 내가 올린 거야. 시청 기록을 그대로 띄운 거지. 이름 지우는 데 5초면 돼."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그걸 왜."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "안 올리면 아무도 안 봐. 오늘 34개 광고판 앞에 선 사람은 다 봤어. 이름은 못 봤지만."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "닥쳐."
					},
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "서버 랙 하나가 꺼진다. 팬 소리가 절반으로 줄어든다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…날 잡아도 안 없어져. 번호는 이미 41개 광고판 하드에 다 복사됐어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "그리고 송출 명령 대기열엔 네 이름도 있어. 접수 창구에서 받은 거야. 네가 신고했잖아."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…내가 신고한 게 왜."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "꺼지지 않은 서버 랙 세 대에 동시에 같은 숫자가 뜬다. 4 0 7 2 9 1 3."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "에코의 번호로 온 문자가 한 줄. '나도 방금 나왔어. 삭제는 아직 안 했어.'"
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "서버 랙에서 경광등이 돌아간다. 문이 밖에서 잠긴다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "대기열 3번에 네 이름 올려놨어. 내일 아침 광고판에서 확인해."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그 전에 이 문 열고, 랙부터 뽑을 거야."
					},
					"emotion": "angry"
				}
			]
		}
	]
} as const;
