export const scenario_modern_whisperweb_0_FCR_02 = {
	"scenario_id": "modern_whisperweb_0_FCR_02",
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
			"13번 배전반을 내렸다. 모니터 열아홉 대가 꺼졌다.",
			"그런데 어제 아침, 광고판에 또 이름이 떴다. 이번엔 8백 건이었다.",
			"복사된 송출 로그가 어딘가에서 돌고 있다.",
			"로그를 푼 사람은 딱 한 명. 불법 복구업자 닥스.",
			"새벽 네 시, 그의 사무실 문을 연다."
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
						"korean": "지하 상가 끝, 셔터 반쯤 내린 가게. 유리문에 '데이터 복구' 스티커가 붙어 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "닥스. 문 열어."
					},
					"emotion": "angry"
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
						"korean": "영업시간 아니야. 새벽 네 시인데."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "어제 새벽에 풀린 송출 로그. 네가 뜯었지."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "…손님 물건은 손님 뜻대로 해. 내가 캐물을 권한 없어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그 로그에 주민 이름 여든 명이 들어 있어. 오늘 아침 그중 스물두 명이 광고판에 떴어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "그럼 그 손님을 잡아. 내 하드엔 손 안 대."
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
						2,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "사무실 안쪽. 책상 위에 모니터 세 대, 벽에 붙은 복구 의뢰 목록."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "내 고객은 이백 명이야. 이름, 주민번호, 병력까지 맡겨."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "이 서버 열면 백업 전부가 같이 딸려 나가. 그럼 이백 명 다 끝이야."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "안 열면 오늘 밤 또 광고판이 켜져."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "그러니까 순서를 바꾸자는 거야. 백업부터 빼내고 열어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "백업 빼는 데 몇 시간 걸려."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "세 시간. 아니 두 시간 반."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "못 기다려."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "벽 모니터에 손님이 남긴 메모가 떠 있었다. '딸 병원비, 부탁해요.'"
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
					"speaker": "dax",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "잠깐. 나 그 로그 뜯을 때 이상한 걸 봤어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "뭐."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "삭제된 칸이 하나 있어. 열면 '재생 불가 — 0x4F3B' 오류만 뜨고, 그 뒤에 목소리가 반 초 흘러."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리였는데."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "'모든 비밀이… 연결된다'까지 들렸어. 나머지는 잡음."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그 칸도 열어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "그 칸은 로그랑 같이 묶여 있어. 열면 같이 새."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "닥스가 서버 케이스에 손을 올렸다. 손등에 전기테이프가 두 겹 감겨 있었다."
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
					"speaker": "dax",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "그만해. 지금 열면 백업 이백 명분이 바로 위로 올라가."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "손 치워."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "탐험대가 닥스의 팔을 등 뒤로 꺾었다. 닥스가 책상 모서리에 무릎을 부딪쳤다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "아파. …알겠어. 열어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "닥스가 비밀번호 스물여섯 자리를 넣었다. 마지막 자리에서 손이 한 번 멈췄다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "진행 바가 100%가 되자, 왼쪽 모니터에 이름 첫 줄이 떴다. '김하늘, 26, 중구 3가'. 그 아래로 스크롤이 내려갔다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "…멈춰. 멈춰 줄래."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "우측 상단 전송 표시가 217에서 멈췄다. 이백 명분이 전부 나갔다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "딸 병원비 모으던 사람이야. 그 이름."
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
						"korean": "전송이 끝난 서버 랙 옆에 누군가 서 있었다. 손에 검은 케이블이 감겨 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "고맙네. 그 서버 암호, 이틀 동안 못 뚫고 있었는데."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "{random_boss}가 시킨 건 로그 하나였어. 넌 백업 이백 건을 얹어서 보내줬지."
					},
					"emotion": "happy"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "케이블 놔."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "이건 내 회선이야. 놓으면 오늘 밤 광고판에 네 이름이 올라가."
					},
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…웃기지. 날 잡아도 목록은 이미 세 곳에 복사됐어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "세 곳이 어디야."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "몰라. 난 케이블 꽂는 사람이야. 목록 만든 놈은 자기가 누군지도 안 알려줬어."
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
						3
					]
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "이백 명 명단, 내가 다시 돌려볼게. 남은 건 나밖에 없으니까."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…미안해."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "사과는 됐어. 다음엔 두 시간 반만 기다려 줘."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "닥스가 서버 케이스 뚜껑을 닫았다. 랙 안쪽에서 복구된 칩 하나가 '0x4F3B'를 반복해 띄웠다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "사무실 유리문 밖, 가로등 아래 간판이 2초간 깨졌다. 0719, 0719 하고 꺼졌다."
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "누워서 뭐 해. 전송은 끝났어. 이백 명은 오늘부터 광고판에 뜰 거야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "…저 사람들 주소, 내가 다시 다 돌면서 지울게."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "내일 새벽엔 구청 지하 2층 송출실부터 연다."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "닥스가 깨진 모니터를 발로 밀어냈다. 화면이 0719를 한 번 더 띄웠다."
					},
					"emotion": "base"
				}
			]
		}
	]
} as const;
