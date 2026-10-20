export const scenario_modern_whisperweb_0_FCR_01 = {
	"scenario_id": "modern_whisperweb_0_FCR_01",
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
			"사흘째, 도시 광고판이 열 글자씩 깨졌다.",
			"이름이 떴다 사라졌다. 주소도, 병력도.",
			"정보상 에코가 밤 열두 시 골목에서 기다린다고 했다.",
			"그를 잡으면 다음 칸이 보인다."
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
						"korean": "비에 젖은 골목. 간판 하나가 깜빡이다 0317이라는 숫자만 남기고 꺼졌다."
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
						2
					]
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "너구나. 소문 듣고 왔지? 사흘 동안 광고판 열두 개가 미쳤어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "누구 이름이 떴는지 말해."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "몰라. 난 전광판에 문구만 넣는 말단이야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "근데 어제부턴 내 계정 권한도 안 먹혀. 누가 위에서 잠갔어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "위에서 잠갔다고?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "…이 얘긴 여기서 끝. 난 다음 문구 넣으러 가야 해."
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
						2
					]
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "이봐. 기다려. 물건 하나 줄게."
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
						"korean": "오늘 새벽에 전광판 서버에서 떨어진 영상. 4초짜리."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "에코의 손목 단말에서 흑백 화면이 떴다. 자막이 반쯤 깨져 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "'모든 비밀은 곧 공개된다'. 이 문구만 온전해."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이거 네가 쓴 거 아니야?"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "내 계정은 어제 밤부터 로그인이 안 돼. 손대지도 못했어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 누가 네 아이디로 올렸다는 거야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "골목 건너 간판이 깨졌다. 1164, 1164, 1164만 세 번 떴다 꺼졌다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "…또 시작이야. 이거 볼 때마다 뒷목이 서늘해."
					},
					"emotion": "sad"
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
						3,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "나 여기서 나가야 해. 관리국이 내 접속 기록 봤어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네가 뭘 올렸는데."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "광고 문구. '블랙아웃 3주년 기념 야간 할인' — 12자리짜리 주민번호를 같이 넣었어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그게 뭐 어쨌다고."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "난 그 숫자 아래로 명령어를 한 줄 숨겼어. 누가 시켰는지는 말 안 할게."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "근데 이제 나한테 오는 지시가 내가 쓴 적 없는 문장이야. 전부."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "광고판 회선은 어디로 들어가."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "구청 지하 2층 송출실. 거기 열쇠 가진 사람은 세 명뿐이야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "에코가 접힌 종이를 쥐여줬다. 송출실 배전반 번호 13번이 적혀 있었다."
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
					"type": "narrator",
					"content": {
						"korean": "구청 지하 2층. 송출실 문이 반쯤 열려 있고 안에서 모니터 빛이 새어 나왔다."
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
						1
					]
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "왔어? 나… 손이 안 움직여. 계속 뭘 눌러."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "손 봐."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "내 이름으로 이미 400건 넘게 올라갔어. 주민 이름이랑 집 주소까지."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "이거 끊어. 13번 배전반, 지금 당장."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "끊으면 기록 다 날아가. 누가 시켰는지 증거도 같이."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "증거보다 사람이 먼저야. 내가 올린 명단에 아직 안 퍼진 이름이 열두 개 있어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "에코가 13번 스위치를 두 손으로 붙잡았다. 손떨림에 손잡이가 덜컹거렸다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "내가 못 끊으면… 너라도. 제발."
					},
					"emotion": "sad"
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
						"korean": "에코가 계단으로 내려갔다. 송출실 안쪽, 서버 랙 뒤에서 발소리가 났다."
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
						"korean": "서버 랙 앞에 누군가 서 있었다. 손에 13번 스위치 열쇠가 들려 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "한 시간에 400건. 내가 올린 이름들이야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그 이름들, 집에 있는 사람들이야."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "알아. 그래서 광고판에 띄웠어. 안 띄우면 아무도 안 봐."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "스위치 내려놔."
					},
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "…열쇠는 가져. 근데 송출 로그는 이미 복사됐어. 다른 데로 넘어갔어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "어디로."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "몰라. 난 목록만 받아서 올렸어. 목록 준 놈은 얼굴도 안 보여줬고."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "13번 스위치를 내리자 모니터 열아홉 대가 동시에 꺼졌다. 지하가 조용해졌다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "복도 끝 계단에서 누군가 올라가는 발소리가 멈췄다. 다시 이어졌다."
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "몸은 괜찮아? 그럼 내일 여기 다시 와. 명단은 아직 8백 건 남았어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "내일 밤엔 옥상 중계기부터 뽑는다."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "13번 스위치가 다시 올라갔다. 모니터 열아홉 대가 켜졌다."
					},
					"emotion": "base"
				}
			]
		}
	]
} as const;
