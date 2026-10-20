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
			"새벽 2시, 도시의 간판들이 한 번씩 깜빡였다.",
			"전광판에 찍힌 숫자 열한 자리. 주민등록번호였다.",
			"정보상 에코가 약속한 장소는 폐쇄된 지하 상가 3번 출구.",
			"그는 영상 파일 하나를 값으로 부르고 있었다."
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
						"korean": "지하 상가 계단. 형광등 두 개가 꺼져 있었다."
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
						"korean": "십오 분 늦었어. 그동안 간판 세 번 깜빡였어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그 숫자들. 뭐야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "이름, 주소, 계좌번호. 어제부터 시내 간판 육십여 개에서 그게 나와."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "누구 짓이야."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "영상 하나 줄게. 대가로 현금 오백."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "화면이 깨져서 소리만 나와. '모든 비밀은 곧 공개된다' — 한 번뿐이야."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그 문장이 몇 번 나왔는데."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "사십 번. 열 개 파일에서."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "에코가 칩을 테이블에 밀었다. 칩 모서리에 나선형 문양이 긁혀 있었다."
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
						"korean": "편의점 앞. 계산대 위 광고판이 꺼졌다 켜졌다 했다."
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
						"korean": "또야. 방금 이 건물 주민 이서연, 3층 302호. 육 초 동안 떴어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그 사람 알아?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "지난달에 남편한테 맞아서 경찰에 신고한 사람."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…."
					},
					"emotion": "angry"
				},
				{
					"type": "direction",
					"action": "shake",
					"speaker": "echo",
					"duration_ms": 400
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "봐. 저 남자 지금 저 주소로 뛰어가."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "잡자."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "잡아서 어쩌게. 때리면? 그럼 그 사람 얼굴이 더 빨리 퍼져."
					},
					"emotion": "angry"
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
						"korean": "광고판 뒤쪽 기계실. 서버 팬 소리가 바닥을 울렸다."
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
					"speaker": "echo",
					"content": {
						"korean": "방금 강남 12번 간판 꺼졌어. 넷이 이름 냈다. 그중 하나는 지금 응급실."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그 다리 뜯으면 어디로 연결돼."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "멈춰. 뜯으면 케이블 타는 냄새 나면서 이 구역 스크린 전부 오류 화면 걸려."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 더 빨리 티 나잖아."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "티 나서 뭐 하게. 누가 문 열어줄 줄 알아? 경비 부를 거야."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "부르면 뭐, 응."
					},
					"emotion": "base"
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
						"korean": "케이블 여섯 가닥이 바닥에 잘렸다. 구역 스크린 열일곱 개가 회색이 됐다."
					},
					"emotion": "base"
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
						"korean": "옥상. 아래 골목에 경찰차 세 대가 불을 켠 채 서 있었다."
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
						"korean": "네가 자른 케이블 복구하다가 작업자 두 명 화상 입었어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그건 내 문제가 아니야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "그래. 늘 그런 식이지. 근데 오늘부로 나랑 끝이야."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "뭐?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "내 연락처 지워. 다음에 내 이름 검색하면 그건 나도 폭로하겠다는 뜻이야."
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
						"korean": "에코가 계단으로 내려갔다. 칩이 옥상 난간 위에 놓여 있었다."
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
						"korean": "송출실. 스크린 마흔 대가 벽을 덮었다. 서버 앞에 누군가 서 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "케이블 자르니까 재밌더라? 오늘 아침 화상 두 명이 그 덕에 생겼어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네가 명단 올린 거지."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "명단은 원래 있던 거야. 난 화면에 띄웠을 뿐이고."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "근데 이서연 집 문 부순 건 그 남자고, 작업자 데려간 건 구청이고. 너도 오늘 한 명 때렸지."
					},
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "서버 랙이 꺼졌다. 스크린 마흔 대가 동시에 검게 변했다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…꺼도 소용없어. 명단은 스물두 개 구역에 이미 복사됐어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "그리고 {random_boss} 하나가 아니야. 이런 방 여덟 개 더 있어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "여덟 개. 목록 내놔."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "바닥에서 칩 하나가 굴러왔다. 에코가 팔았던 것과 같은 나선형 문양이 찍혀 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "창밖 간판 하나가 켜지며 열한 자리 숫자를 띄웠다. 이번엔 석 초."
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "무릎이 바닥에 닿았다. 스크린에는 여전히 이름이 흐르고 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "일어나. 아직 할 거 남았잖아. 서버실 문 열쇠는 내 주머니에 있어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…열쇠부터 뽑는다."
					},
					"emotion": "angry"
				}
			]
		}
	]
} as const;
