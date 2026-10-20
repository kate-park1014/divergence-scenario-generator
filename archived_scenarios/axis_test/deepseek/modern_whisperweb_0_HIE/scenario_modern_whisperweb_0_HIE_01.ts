export const scenario_modern_whisperweb_0_HIE_01 = {
	"scenario_id": "modern_whisperweb_0_HIE_01",
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
			"새벽 2시, 편의점 간판이 3초간 깨졌다가 돌아왔다.",
			"어제는 은행 전광판이, 그제는 지하철 안내판이 그랬다.",
			"정보상 에코가 약속 장소로 부른 건 처음이다.",
			"그는 영상 파일 하나를 손에 쥐고 있었다."
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
						"korean": "비 내리는 골목. 폐쇄된 철물점 셔터 아래 에코가 서 있었다."
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
						"korean": "왔네. 이거 봐. 출처는 묻지 마."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "영상? 화면이 다 깨져 있는데."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "거기서 숫자만 세. 0417, 0417. 반복돼."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이 숫자가 뭐야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "모르겠어. 근데 이 영상 받은 사람이 셋이야. 둘은 실종됐어."
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
						"korean": "방금 4번가 간판 또 깨졌어. 이번엔 이름 석 자가 떴대."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "누구 이름."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "모르는 사람. 근데 그 집 대출 기록이 같이 떴어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "간판 오류가 아니라— 누가 밀어 넣는 거야?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "난 장사꾼이야. 확인된 것만 말해. 지금 확인된 건 셋."
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
						"korean": "영상 마지막 프레임 늘려봤어. 낙서 하나 나와."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "낙서?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "어제 네가 찍은 간판 사진에도 같은 게 있어. 벽에도."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "미행당한 거야?"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "아니. 그냥— 너한테 보이기 시작한 거야."
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
						2,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "이 앞 통신국 서버. 오늘 밤 11시에 파일 하나 올라와."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "뭔데."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "모르겠어. 근데 그거 열면 이 도시 사람 절반 이름이 같이 나와."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 열지 마."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "안 열어도 올라와. 난 이미 내 이름 찾았어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "그러니까 네가 꼭 문을 잠가. 난 여기서 빠질게."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "exit",
					"speaker": "echo",
					"duration_ms": 400,
					"direction": "down"
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
						"korean": "서버실 형광등 아래, 누군가 랙에 기대 서 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "그 영상 열어봤어? 0417은 네가 태어난 날이야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "내 기록 어디서 났어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "산 게 아니라 캤지. 대출 서류 창고에서."
					},
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "서버 죽여도 소용없어. 명단은 이미 복사됐어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "어디에."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "이름 팔러 온 사람들 손에. 나 말고도 많아."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "랙 하나가 꺼졌다. 도시의 간판 3개가 동시에 검게 변했다."
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "누워서 뭐 해. 11시까지 20분 남았어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "통신국 옥상 송출 케이블부터 자를 거야."
					},
					"emotion": "angry"
				}
			]
		}
	]
} as const;
