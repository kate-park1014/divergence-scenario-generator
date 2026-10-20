export const scenario_modern_whisperweb_0_FIR_04 = {
	"scenario_id": "modern_whisperweb_0_FIR_04",
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
			"린의 사무실 창밖으로 광고판 스물세 개가 이름을 띄운 채 남아 있다. 넷은 아직 꺼지지 않았다.",
			"그날 밤, 외곽 세탁소 지하에서 은퇴한 갱단원 하나가 번호 하나를 걸어온다.",
			"블랙 웹의 옛 금고. 위조 신분 서류와 비자금 수천만 원이 아직 그 안에 있다.",
			"이름은 카이. 위스퍼 웹이 갱단 통신 기록을 쓰고 있다고 그는 말한다."
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
						"korean": "도시 외곽 세탁소. 간판 불이 절반만 들어와 있었다. 카운터 뒤 계단으로 내려가는 문이 열려 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "kai",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "기자네 사무실에서 번호 땄어. 전화는 안 받더라."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "카이. 블랙 웹에서 나왔다는 사람."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "나왔어. 십 년 전에. 근데 우리 통신 기록이 아직 돌아다녀."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "위스퍼 웹이 그걸 쓴다는 거야?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "익명 게시판 글에 우리 은어가 섞여 있어. 우리끼리만 쓰던 말이야."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "이 장부 봐. 금고 출입 기록. 이 표식이 매달 서른 번씩 찍혀 있어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이 표식, 골목 벽에도 있던데."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "그럼 그 사람들 아직 우리 근처에 있다는 거야. 더 급해진 거지."
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
					"speaker": "kai",
					"duration_ms": 500,
					"spot": [
						2,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "금고 위치 알아? 세탁소 지하 아니야. 도시 외곽 창고 두 곳에 나눠 뒀어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 지금 가서 열어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "안 열려. 저 금고는 열쇠가 세 개야. 내가 하나, 매형이 하나, 나머지 하나는 —"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 나머지 하나는 누구한테 있어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "은행 대여금고에 있어. 열려면 서류가 필요해. 열람 신청하고 승인받고 찾아와야 해."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "며칠 걸려."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "빨라야 사흘. 담당자가 휴가면 일주일."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그래. 서류대로 해. 증거는 절차대로 확보해야 나중에 안 뒤집혀."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "…절차? 내 가족이 거기 살아. 내 딸 신분 서류가 그 안에 있어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "알아. 그래서 서류가 있어야 꺼내."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "사흘 동안 편하게 자 봐. 난 못 자."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "카이가 세탁기 위에 장부를 올려놓고, 열쇠 꾸러미를 펼쳐 놓았다. 열쇠가 세 개였다."
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
						3,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "이틀 째야. 신청서는 접수됐어. 처리는 아직."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "담당자한테 연락해 봤어?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "했어. '순서대로 처리된다'고만 해."
					},
					"emotion": "angry"
				},
				{
					"type": "direction",
					"action": "focus",
					"speaker": "kai",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "잠깐. 저기 — 안 쓰는 폰이 하나 있어. 이틀 전부터 울려."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "카이가 서랍에서 폰을 꺼냈다. 화면에 사진 한 장과 메시지 한 줄이 떴다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "'창고 두 곳 다 비웠다. 딸은 아직 학교에 있더라.' …이건 내 딸 사진이야."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "위스퍼 웹이야. 지금 바로 창고 가."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "가지 마. 지금 가면 내가 걸려. 열쇠가 나한테 있다는 게 이미 알려졌어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 서류 처리 결과부터 받아. 그래야 열쇠가 증거로 인정돼."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "증거로 인정되면 뭐가 달라져. 금고는 이미 비었어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "카이가 장부를 넘겼다. 같은 표식이 마흔두 번 찍힌 페이지였다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "이 표식, 어제 우리 집 우편함에도 붙어 있었어. 손으로 그린 거야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…뜻은 몰라. 근데 같은 게 계속 나와."
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
						"korean": "열쇠 꾸러미 들고 왔어. 은행 승인은 오늘 오후에 떨어졌어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 지금 열어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "지하에 같이 내려와 줘. 혼자 열기 무서워."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "세탁소 지하 창고. 철문이 반쯤 열려 있었다. 자물쇠는 잘려 바닥에 굴러 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "…열어 놨어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "선반 두 개가 비어 있었다. 바닥에 서류 뭉치 한 장이 떨어져 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "현금 이천칠백만 원. 딸 신분 서류 세 벌. 매형 서류 두 벌. 다 없어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "내가 사람 안 붙인 게 문제야. 미안해."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "사람 붙이자고 했잖아. 서류 처리 기다리자고 했잖아."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그래도 지금은 장부부터. 표식이 찍힌 페이지 아직 있어?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "있어. 근데 이제 내 딸 이름이 어디 돌아다닐지가 문제야."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "카이가 창고 벽면을 손전등으로 비췄다. 회색 벽에 꺾인 선과 점 두 개가 세 번 그어져 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "여기까지 와 있었어. 우리가 오기 전부터."
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
						"korean": "창고 안쪽 방. 청소기 돌리던 서버 세 대가 아직 켜져 있었다. 그 앞에 누군가 앉아 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "이틀 늦었어. 은행 승인 기다리느라 그랬지?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "금고는 네가 열었어?"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "열쇠는 안 만졌어. 서류 신청서에 집 주소가 같이 적혀 있더라. 거기서부터 따라갔지."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "네가 서류 접수한 시간하고, 그 집 우편함에 표식 붙은 시간하고 같아."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "잡아. 이번엔 안 기다려."
					},
					"emotion": "angry"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "현금 천이백만 원은 아직 이 방 선반에 있어. 서류 세 벌은 아까 다른 데로 넘겼고."
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
					"speaker": "random_boss",
					"content": {
						"korean": "받는 사람이 죽은 사람이야. 사 년 전에 죽은 갱단 회계 담당자 이름으로."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "죽은 사람 이름으로 뭘 해."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "그 이름으로 계좌가 지금도 열려. 열두 개. 우리가 안 만들었어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "서버 세 대의 팬이 동시에 멈췄다. 선반 위에 돈다발과 장부가 놓여 있었다."
					},
					"emotion": "base"
				},
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
					"speaker": "kai",
					"content": {
						"korean": "…돈은 있어. 근데 딸 서류가 없어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "받는 이름 알아냈어. 죽은 사람 이름으로 계좌 열두 개."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "그 이름… 우리 매형이야. 사 년 전 장례 치렀어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "카이가 장부를 펼쳤다. 꺾인 선과 점 두 개가 마흔두 번 찍힌 페이지. 그 옆에 같은 표식이 손글씨로 한 번 더 그어져 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "이건 우리 표식이 아니야. 우리는 점을 한 개만 찍어. 이건 두 개야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…그럼 누가 따라 그린 거지."
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "서버 한 대가 다시 켜졌다. 화면에 이름 열두 개가 한 줄씩 올라갔다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "봐. 방금 두 번째 이름이 떴어. 카이네 매형 이름이야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…선반에 남은 돈부터 챙긴다. 그리고 계좌 열두 개 명의 이전 신청을 취소해."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "취소는 은행 창구에서 해. 창구는 아침 아홉 시에 열어."
					},
					"emotion": "base"
				}
			]
		}
	]
} as const;
