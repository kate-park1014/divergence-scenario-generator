export const scenario_modern_whisperweb_0_HCR_04 = {
	"scenario_id": "modern_whisperweb_0_HCR_04",
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
			"위스퍼 웹이 12년 전 갱단 '검은 밤'의 은닉 자금 1억을 찾고 있다. 은퇴하고 신분을 세탁한 카이라는 이름이 명단에 올랐다.",
			"주인공은 세탁소를 하는 카이를 찾아간다. 카이는 오늘 아침 자기 이름이 게시판에 뜬 걸 이미 봤다.",
			"카이의 옛 동료 한 명이 신상이 공개돼 보복 대상이 됐다. 카이는 그 이름을 말하지 않으려 한다.",
			"이번 목표는 카이를 살리고, 그 동료를 살리는 것. 둘 다는 안 될 수도 있다."
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
						"korean": "골목 끝 세탁소. 셔터가 반쯤 내려가 있고 안쪽에 불이 켜져 있다."
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
						3
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
						"korean": "카이. 이름 석 자로 검색하면 네 사진이 나와. 오늘 아침부터."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "…들어와. 셔터 내릴 테니까."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "검은 밤 은닉 자금. 1억. 위스퍼 웹이 그걸 찾고 있어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "그 돈은 12년 전에 묻었어. 나도 위치 몰라."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네가 관리하던 거였잖아."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "관리한 건 명단이야. 돈 장부는 내가 안 썼어."
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
						3
					]
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "봐. 게시판에 새 글 올라왔어. '검은 밤 회계 담당, 현재 OO동 거주'."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "동 이름까지 나왔어?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "웃긴 건 저게 반쯤 틀렸어. 주소는 맞는데 이름은 옆집 사람 거야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 옆집 사람이 대신 맞는다는 거야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "저 글 올린 놈들은 확인 안 해. 그냥 문 두드리고 화염병 던져."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "진짜 그 회계 담당은 어디 있어. 살아 있어?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "있어. 근데 내가 말하면 끝이야. 그 사람은 12년 동안 아무 일 없이 살았어."
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
					"speaker": "kai",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "세탁기 위에 낡은 하드디스크 한 개가 올려져 있다. 케이스에 부서진 회로 기판 모양이 새겨져 있다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이 낙서. 서버실 철문에도 있었어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "…그거 나도 어제 처음 봤어. 우리 가게 앞 전봇대에도 있어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이 하드 뭐야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "옛날 검은 밤 통신 로그. 내가 세탁한다고 지운다 지운다 하다 남은 거야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그거 위스퍼 웹 근원 아니야? 옛날 갱 통신망이랑 게시판이 붙은 거라며."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "그래서 내가 안 버렸어. 버리면 어디로 갈지 몰라서."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "카이. 그 회계 담당 이름만 알려줘. 우리가 먼저 찾아가서 보호해."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "알려주면 너희 손에 그 사람 목숨이 들리는 거야. 안 알려주면 내 손에 들리고."
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
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "웃긴 소식 하나. 위스퍼 웹이 '회계 담당' 신상을 특정했다고 시내 게시판에 띄웠어. 오후 4시."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네가 말 안 했는데 어떻게."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "…옛날 장부가 어딘가 남아 있었나 봐. 내가 지운 게 아니었어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "지금이라도 이름 불러. 그 사람부터 빼내자. 한 시간이면 돼."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "불러서 뭐 해. 너희가 데려가면 위스퍼 웹은 그 사람을 '확인된 대상'으로 박아. 살아서도 못 돌아와."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 가만히 두고 집에 불붙는 걸 보자는 거야?"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "…네가 하는 방식, 지난주에 봤어. 접수하고 기다리고 공문 쓰는 거. 그거 12년 동안 나도 해봤어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "그 하드, 내가 직접 처리할게. 너희는 여기서 빠져."
					},
					"emotion": "sad"
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
					"speaker": "character_any",
					"content": {
						"korean": "카이!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "셔터가 위로 올라간다. 골목 반대편으로 뛰는 등이 작아진다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…하드부터. 저거 따라가."
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
						"korean": "창고 2층. 바닥에 하드디스크가 깨진 채 굴러다니고, 서버 랙 두 대가 벽에 붙어 있다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "서버 앞에 누군가 서 있다. 손에 케이블 한 다발을 쥐고 있다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "늦었어. 오후 4시에 이름 올렸고, 6시에 차 두 대가 그 집 앞에 도착해."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "네가 이름 묻는 동안 나는 주소를 맞혔어. 네가 공문 쓸 동안 나는 사람을 보냈고."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그 하드 내려놔. 그거 1억 위치 들어 있어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "1억은 이미 반쯤 나왔어. 이 하드만 있으면 나머지도 나와. 카이 말고 네가 직접 가져다준 셈이지."
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "서버 랙이 꺼진다. 케이블이 바닥에 떨어진다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "이름 하나로 집 한 채 태웠어. 그 집 지하에 1억이 있었어. 하드 안 봤으면 몰랐을 거야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…지하에. 돈이 집 안에 있었어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "네가 그 이름 안 물었으면 나도 못 찾았어. 누가 먼저 물었더라."
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
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "계단 아래에서 카이가 올라온다. 손에 그을음이 묻어 있다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "집 다 탔어. 사람은 어제 집을 비웠어. 다행인 건 그것뿐이야."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "돈은."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "1억. 불 탄 지하에서 빈 가방만 나왔어. 누가 먼저 가져갔어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "…내가 이름 안 말해서 지킨 게, 이제 아무것도 없어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "카이가 세탁소 열쇠를 바닥에 내려놓는다. 소리가 한 번 울린다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "카이. 열쇠 주워. 아직 끝난 거 아니야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "꺼지지 않은 랙 한 대에 숫자 일곱 개가 5초 떠 있다가 사라진다. 4 0 7 2 9 1 3."
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "창고 셔터가 내려간다. 밖에서 자물쇠 채우는 소리가 두 번 난다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "1억은 이미 내 손에 있어. 너희는 아침까지 여기 있어. 그 사이에 남은 이름들도 다 올라갈 거야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "카이. 창고 뒷문 열쇠 아직 갖고 있지."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "…있어. 뒷문 나가면 골목 3분. 화재 신고는 그다음이야."
					},
					"emotion": "base"
				}
			]
		}
	]
} as const;
