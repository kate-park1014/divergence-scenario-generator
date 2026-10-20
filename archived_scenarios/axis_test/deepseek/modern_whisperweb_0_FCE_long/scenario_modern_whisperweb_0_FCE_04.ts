export const scenario_modern_whisperweb_0_FCE_04 = {
	"scenario_id": "modern_whisperweb_0_FCE_04",
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
			"시청 서버가 꺼졌다. 응급 이송 기록에 열 명이 남았다.",
			"도시는 아직 그 열 명을 세고 있다. 광고판은 그사이 스물세 개를 더 올렸다.",
			"에코가 마지막으로 남긴 이름은 카이. 전파상, 20년 된 장부.",
			"지하철 3번 출구 골목. 위조 신분증 냄새가 나는 데다.",
			"카이에게 묻는다. 장부가 어디 있냐고."
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
						"korean": "전파상 셔터에 손때 묻은 종이가 붙어 있었다. '부품 매입. 신분증 제작. 오후 두 시까지.'"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "카이."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "kai",
					"duration_ms": 500,
					"spot": [
						5,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "문 닫았어. 오늘 영업 안 해."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "에코가 이름 남겼어. 너한테 20년 된 장부가 있다고."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "…에코가? 그 사람 아직 살아 있어?"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "장부부터 꺼내."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "그거 열면 나만 끝나는 게 아니야. 서른일곱 명 이름이 들어 있어."
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
					"speaker": "kai",
					"duration_ms": 450,
					"spot": [
						4,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "여기. 스피커 뒤에 넣어뒀어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "손바닥만 한 금속 케이스. 뚜껑에 붉은 장미 한 송이가 새겨져 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이게 붉은 장미단 장부."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "20년 전 거래 내역이야. 누가 누구 정보를 얼마에 샀는지."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "열어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "암호 걸려 있어. 억지로 열면 안에 든 개인 기록이 같이 새."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "피해자 이름도 같이 퍼져. 신고한 사람 이름까지."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "열어."
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
					"speaker": "kai",
					"duration_ms": 400,
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "복원기 돌렸어. 3분 남았어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "전파상 창밖 광고판에 숫자가 스물네 번째로 올라갔다. 이름 한 줄, 연체 일수 네 자리."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "장부에 위스퍼 웹 관련 항목 있어?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "있어. 20년 전 장미단이 판 기록이 지금 위스퍼 웹에 그대로 들어가 있어. 서른일곱 건 중 스물아홉 건이."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 이거 하나면 위스퍼 웹 출처가 나와."
					},
					"emotion": "happy"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "…웃지 마. 나도 그때 스물둘이었고, 신분증 만드는 게 전부였어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "근데 이거 공개하면 그 서른일곱 명 중에 아직 살아 있는 열두 명은 오늘 밤 집을 비워야 해."
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
					"speaker": "kai",
					"duration_ms": 400,
					"spot": [
						2,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "복원 끝났어. 근데 네트워크에 안 붙였어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "언론사에 보내."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "보내면 되돌릴 수 없어. 지금 내 손에 스위치 있어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "카이가 케이블을 잡았다. 복원기 표시창에 '전송 대기 37건'이 떠 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "눌러."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "…알겠어. 대신 내 이름은 빼줘. 스물아홉 번째 줄에 있어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "못 빼. 원본이면 원본 그대로 나가야 해."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "exit",
					"speaker": "kai",
					"duration_ms": 400,
					"direction": "down"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "카이가 셔터를 열고 골목으로 나갔다. 복원기 표시창이 '전송 완료 37건'으로 바뀌었다."
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
						"korean": "전파상 안쪽 창고. 부품 상자 사이에 누군가 서 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "그 장부, 내가 카이한테 숨기라고 시킨 거야. 20년 동안 잘 있었는데."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "너도 붉은 장미단이야."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "장미단은 20년 전에 끝났어. 난 그 기록을 위스퍼 웹에 올려서 돈 받았고, 넌 방금 그걸 무료로 뿌렸어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 여기서 끝내."
					},
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "장부 37건 중에 스물아홉 건이 위스퍼 웹에 있어. 나머지 여덟 건은 아직 아무도 못 봤어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "그 여덟 건이 어디 있는지는 나도 몰라. 근데 넌 이제 알 거 아니야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "카이는 어디 있냐."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "창고 밖에서 유리 깨지는 소리가 났다. 골목 쪽에서 사람들이 몰려오는 발소리였다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "장부에 있던 이름들이야. 피해자들이 몰려와."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "전파상 셔터가 안쪽으로 밀렸다. 카이의 위조 신분증 기계가 바닥에 넘어져 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "때린 건 저 사람들이야. 난 이름만 띄웠어. 너도 오늘 스물아홉 개 띄웠고."
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "네가 뿌린 명단 때문에 지금 골목에 서른 명 넘게 몰려와 있어. 계속 앉아 있을래?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "카이부터 찾는다. 열두 명 중 살아 있는 사람들 피신부터."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "그래 봐. 그 열둘 중 하나는 그 장부에 네 접근 경로도 적어놨어."
					},
					"emotion": "base"
				}
			]
		}
	]
} as const;
