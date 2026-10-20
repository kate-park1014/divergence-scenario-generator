export const scenario_modern_whisperweb_0_FIE_03 = {
	"scenario_id": "modern_whisperweb_0_FIE_03",
	"order": 3,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"lin": {
			"id": "mon_d036a884-3dde-472c-9fe7-c4807643860f",
			"name": {
				"korean": "린",
				"english": "Lin",
				"japanese": "リン",
				"chinese": "琳",
				"french": "Lin",
				"spanish": "Lin",
				"vietnamese": "Lin",
				"thai": "ลิน",
				"hindi": "लिन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a095dd66-1857-4f44-68b0-2ece83006d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/05b02694-f1ed-4e4c-b7ca-fb5b74a48900/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"남문 상가 수리점은 셔터가 내려간 채였다. 닥스의 이름은 아직 간판에 떠 있었다.",
			"주인공이 쥔 건 나선형 문양이 찍힌 칩 하나. 다음 주소가 그 안에 들어 있었다.",
			"도시엔 소문이 돌았다. 곧 모든 게 공개된다는 소문.",
			"그 소문의 출처를 아는 사람은 하나뿐이었다. 독립 기자, 린."
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
						"korean": "북구 낡은 사무실 건물 4층. 문에 '네온 트루스'라고 인쇄된 종이가 붙어 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "lin",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "취재 중이야. 예약 없으면 나가."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "어제부터 간판 육십 개가 주민등록번호 띄우고 있어. 소문이 아니라 사실이야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "알아. 이십 분 전에 신고 열두 건 받았어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 출처 알아?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "알아도 안 줘. 확인 안 된 걸 넘기면 그 사람 인생 끝나."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "린이 책상 위 서류 더미를 팔로 가렸다. 그 아래 파일 하나가 반쯤 삐져나와 있었다."
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "lin",
					"duration_ms": 500,
					"spot": [
						3,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "이름이 뭐야. 어제 같은 질문 하러 온 사람 셋째야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "제보자 서른 명 있어. 이름까지 다 확인했어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "…어떻게 알았어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그 파일 보여줘. 지금은 그게 유일한 길이야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "안 돼. 서른 명 중 일곱 명은 신고하고도 주소 못 옮겼어. 공개되면 그날 밤에 집 찾아와."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "네가 지금 가져가면 확인 절차 없이 그대로 퍼져. 확인 없는 폭로는 폭로가 아니야."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "확인할 시간이 없어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "린이 파일을 서랍에 넣고 열쇠를 돌렸다. 두 번 돌아가는 소리가 났다."
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
						"korean": "새벽 1시 40분. 사무실 층 복도 창문 하나가 열려 있었다. 사무실 안은 불이 꺼져 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "서랍 열쇠는 책상 서랍 뒤에 있어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "서랍이 열렸다. 파일 안에는 종이 서류와 녹음 파일이 든 칩 하나. 제보자 서른 명의 이름, 직업, 주소, 통화 기록."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…이거면 돼."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "칩이 꽂히자 화면 오른쪽 아래에 전송 표시가 떴다. 진행 막대는 사십 초 만에 끝났다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "십이 초 뒤, 복도 창밖에서 간판 두 개가 동시에 켜졌다. 제보자 한 명의 이름과 직장 주소가 떴다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "린의 휴대폰이 진동했다. 메시지 스물세 개가 한꺼번에 들어왔다."
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
					"speaker": "lin",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "삼십 명 전부 떴어. 이름, 동네, 근무지까지."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "알아."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "북구에서 시위대와 경찰이 부딪혔어. 부상자 아홉 명. 내 제보자 두 명은 지금 짐 싸서 도망 다녀."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "그 둘한테 내가 직접 조건 걸었어. 이름은 안 쓴다고. 그 약속 네가 깼어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그 서류 안에 위스퍼 웹 주소가 있었어. 그래서 가져온 거야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "그래서? 소문 하나 확인하려고 사람 서른 명 이름을 간판에 걸었어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "이제 너한테 건네는 정보는 없어. 그리고 내일 아침 내 기사에 네 이름 넣어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "린이 사무실 문을 닫았다. 복도 소등이 내려갔다."
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
						"korean": "북구 중계소. 지하 계단 아래 송출실 문이 열려 있었다. 서버 랙 사이에 누군가 서 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "제보자 명단 올라간 지 석 시간. 부상자 아홉 명. 시위대는 아직 안 흩어졌어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "리스트 내놔. 다음 중계소 주소."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "그 리스트, 네가 서랍에서 꺼냈지. 공개 버튼은 너한테 있었어."
					},
					"emotion": "base"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "송출 랙이 멈췄다. 화면에 남아 있던 이름 열두 개가 지워졌다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "이 중계소 하나 꺼도 이름은 이미 구역 열아홉 개로 갔어. 되돌리는 방법은 없어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "근데 그거 알아? {random_boss}가 손댄 건 화면뿐이야. 서랍 연 건 네 손이고."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…나머지 중계소 목록."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "네가 쫓는 사람은 이미 다음 걸음 알아. 주소를 알려줘도 넌 또 서랍부터 열 거잖아."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "lin",
					"duration_ms": 500,
					"spot": [
						3,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "시위대가 경찰서 앞까지 갔어. 부상자 열세 명으로 늘었고."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "린. 제보자들 연락처."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "이미 다 바꿨어. 내가."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "남은 제보자 하나가 어젯밤 나한테 전화했어. 자기 이름 왜 띄웠냐고."
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
					"speaker": "lin",
					"content": {
						"korean": "사과는 됐어. 내일 아침 기사에 네 이름 넣는다고 했지. 그거대로 할 거야."
					},
					"emotion": "angry"
				},
				{
					"type": "direction",
					"action": "exit",
					"speaker": "lin",
					"duration_ms": 400,
					"direction": "down"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "린이 계단을 올라갔다. 송출실 벽에 나선형 문양이 스프레이로 그려져 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "바닥에 칩 하나가 굴러와 발에 닿았다. 칩 모서리에 은퇴 갱단원 주소가 각인되어 있었다."
					},
					"emotion": "base"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "바닥에 손이 닿았다. 화면엔 제보자 한 명의 집 주소가 다시 떴다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "일어나. 위층 송출실 열쇠는 네 주머니에 있잖아. 계속 올라가면 돼."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…그 열쇠로 위층부터 끈다. 서른 명 이름 전부 지워질 때까지."
					},
					"emotion": "angry"
				}
			]
		}
	]
} as const;
