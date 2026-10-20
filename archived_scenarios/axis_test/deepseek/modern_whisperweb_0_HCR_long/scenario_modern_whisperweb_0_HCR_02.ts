export const scenario_modern_whisperweb_0_HCR_02 = {
	"scenario_id": "modern_whisperweb_0_HCR_02",
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
			"시청 광고판에 주민 이름이 뜨기 시작한 밤. 삭제는 아직 안 됐다.",
			"닥스는 '디지털 가디언' 출신이다. 회사 서버에서 자기 실수로 샌 고객 정보를 되찾으려 한다.",
			"주인공은 그를 만나러 간다. 정식 절차로 되찾으면 된다고 생각했다.",
			"시청 서버실 문은 아직 닫혀 있지 않다. 열쇠는 닥스가 쥐고 있다."
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
						"korean": "세탁소 뒷방. 건조기 위에 USB 한 개, 라벨이 반쯤 뜯겨 있다."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "dax",
					"duration_ms": 500,
					"spot": [
						3,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "닥스야. 디지털 가디언에서 3년 일했어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "USB가 뭐가 들었는데."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "시청 고객 명단 8만 건. 내가 복사해서 들고 나왔어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…복사해서?"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "감사 자료라고 했어. 근데 잃어버렸어. 3일 전에."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "정식으로 접수해. 회사에 사고 신고 넣으면 복구 절차가 있어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "신고하면 나부터 짤려. 그리고 명단 8만 건은 이미 팔려나갈 준비 중이고."
					},
					"emotion": "angry"
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
						3
					]
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "접수했다며. 답 왔어?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "3영업일. 담당자 배정 대기래."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "3일이면 명단 다 풀려. 나는 백도어 알아. 계정 하나만 있으면 20분이야."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "백도어로 들어가면 기록에 남아. 그거 하나로 명단 전체가 증거물이 돼."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "증거물이 되면 어때. 사람 이름이 안 퍼지면 되잖아."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "닥스가 유리창을 가리킨다. 길 건너 광고판에 숫자 배열이 5초 떠 있다가 꺼진다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "저거. 어제까지 41개였어. 오늘 44개야."
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
					"speaker": "dax",
					"duration_ms": 400,
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "회사 서버실 지하 2층. 그 USB가 물리적으로 거기 물려 있었어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "정식 절차로 그 방 열 수 있어?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "관리자 승인 나야 열려. 승인 대기 3일. 아까 그 3일."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "바닥에서 반쯤 밟힌 데이터 칩 하나가 굴러온다. 닥스가 집어 폰에 물린다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "…뭐야 이거. 여자 목소리야. '모든 비밀이… 곧 연결된다…'에서 끊겨."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그 칩 어디서 났어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "모르겠어. 근데 읽기 전에 물려놨어. 한 번만 더 재생하면 지워질지도 몰라."
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
					"speaker": "dax",
					"duration_ms": 400,
					"spot": [
						3,
						4
					]
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "승인 떨어졌어. 조건이 하나 붙었어."
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
					"speaker": "dax",
					"content": {
						"korean": "복구 전에 명단 전체를 시청 공용 서버로 임시 이관해. 안 옮기면 백업만 하고 원본은 못 건드려."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "공용 서버잖아. 그럼 광고판이랑 선이 하나로 이어져."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "이관하는 20분 동안만 열려 있어. 끝나면 바로 닫아. 나 그 방 문 열어봤어, 닫는 건 40초면 돼."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "닥스. 20분 동안 8만 건이 그 선 위에 올라간다는 뜻이야."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "그러니까 먼저 나가서 광고판 쪽 선부터 뽑아. 나는 여기 남아서 이관 눌러."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…눌러."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "이관 시작. 진행률 4%. 계단 위에서 발소리가 열두 번 울린다."
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
						"korean": "광고판 송출실. 모니터 6대 중 3대에 명단이 0.5초 간격으로 올라가고 있다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "케이블 다발 앞에 누군가 서서 선 하나를 손에 쥐고 있다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "이관 진행률 12%. 여기 선 하나 뽑으면 8만 건 전부 시내로 나가."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그 선 내려놔."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "네가 3일 기다리는 동안 나는 준비했어. 이제 와서 순서대로 하자고?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…닥스가 보낸 거야?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "절차 지키는 사람은 절차가 늦는 걸 몰라. 나는 그 틈에 서 있었어."
					},
					"emotion": "happy"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "케이블이 바닥에 떨어진다. 모니터 3대 중 2대가 검게 꺼진다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…1천 건은 이미 나갔어. 이름은 안 나갔어. 번호랑 주소만."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "번호랑 주소면 충분해. 그걸로 사람 찾아가니까."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "그래서 안 막았어? 20분 열어둔 건 나 아니야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "마지막 모니터가 꺼진다. 화면 아래에 4 0 7 2 9 1 3 이 한 줄 남는다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…닥스한테 연락해. 이관 취소하고 원본부터 봉인해."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "계단 아래에서 닥스가 올라온다. 손에 칩 하나를 쥐고 있다."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "dax",
					"duration_ms": 500,
					"spot": [
						2,
						4
					]
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "1천 명이야. 내가 3일 기다린 값이."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네 값 아니야. 내가 접수만 하고 기다린 값이야."
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "케이블이 뽑힌다. 광고판 44개가 동시에 같은 화면으로 바뀐다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "진행률 100%. 축하해, 오늘 밤 시내에서 제일 유명한 이름이 됐어."
					},
					"emotion": "happy"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "내일 아침 8시. 시청 공용 서버 랙부터 뽑아. 그다음에 이 선."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "또 기다릴 거야? 이번엔 몇 명 기다려줄 건데."
					},
					"emotion": "base"
				}
			]
		}
	]
} as const;
