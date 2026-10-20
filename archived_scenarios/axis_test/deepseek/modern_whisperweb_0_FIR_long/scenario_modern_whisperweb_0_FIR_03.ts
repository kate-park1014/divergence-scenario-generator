export const scenario_modern_whisperweb_0_FIR_03 = {
	"scenario_id": "modern_whisperweb_0_FIR_03",
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
			"닥스의 하드가 멈춘 뒤로 사흘이 지났다. 복사본은 서른 개가 넘는다.",
			"동네 게시판에 괴담이 올라온다. 강아지를 찾는다는 글에 집주소와 계좌가 붙었다.",
			"'진실의 목소리' 소속 기자 린이 그 글들을 추적한다. 손에 시민 수천 명의 금융 기록이 있다.",
			"주인공에게 필요한 건 위스퍼 웹의 배포 경로다. 린은 그 경로를 아는 유일한 사람이다."
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
						"korean": "3번가 카페 2층. 창가 자리에 여자 하나가 노트북 세 대를 펼쳐 놓고 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "lin",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "닥스한테 연락처 받았어. 앉아."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "위스퍼 웹 배포 경로. 그거 네가 갖고 있지."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "갖고 있어. 괴담 글 백이십 건, 그 글 올린 계정 마흔아홉 개, 계정 만든 IP까지."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 경로도 있네."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "있어. 근데 이걸 넘기면 내 취재원 이름부터 같이 넘어가."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이름은 안 건드려."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "그 말 어제 닥스도 들었을걸."
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
					"speaker": "lin",
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
						"korean": "린이 노트북을 돌렸다. 화면 한가운데 게시글이 열려 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "이 글 봐. '잃어버린 강아지 찾습니다'. 본문에 집주소랑 계좌번호가 붙어 있어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "괴담인데 왜 계좌가."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "위스퍼 웹은 괴담을 미끼로 써. 사람들이 웃으면서 공유하니까 그 안에 섞인 개인정보가 같이 퍼져."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "이 글 하나로 백사십 명이 자기 계좌번호를 남한테 보여줬어. 본인들은 아직 몰라."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네 자료에는 계좌 말고 뭐가 더 있어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "…왜 그걸 먼저 물어."
					},
					"emotion": "sad"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "lin",
					"duration_ms": 400,
					"spot": [
						5,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "봐. 방금 저 간판. 오류 화면 뜨자마자 사라졌어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "건너편 광고판에 숫자 다섯 개가 반 초 뜨고 꺼졌다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "어제도 같은 자리에서 봤어. 시간도 똑같아."
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
					"speaker": "lin",
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
						"korean": "린의 사무실. 책상 위에 서류철 마흔 개가 세워져 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "이 서류철에 시민 삼천이백 명 금융 기록이 있어. 은행 창구 직원 하나한테 받았어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "불법이네."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "그래. 근데 이게 없으면 위스퍼 웹이 누구 돈을 노리는지 못 밝혀."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "내가 원하는 건 딱 하나야. 이 계정 마흔아홉 개가 어디서 돈 받는지."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그 돈이 어디로 가는지 알면 어쩔 건데."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "그걸 보도하면 경찰이 움직여. 그럼 내 취재원들 이름은 안 뜨는 거야."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "서류철 안에 뭐가 있는지 열어봐도 돼?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "…안 돼. 그건 내가 처리해."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "린이 서류철 위에 손을 올렸다. 손가락이 첫 장 모서리를 누르고 있었다."
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
					"duration_ms": 400,
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "린이 노트북을 덮었다. 화면 아래에 업로드 진행 바가 서 있었다. 37퍼센트."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이미 올리고 있었네."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "네가 시킨 거야. 서류철 세 번째 칸, 그거 계좌 명세야."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "그거 올리면 같이 묶인 사람 이백 명 명세도 같이 올라가. 포장이 안 돼 있어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "올려. 어차피 뜰 이름들일 거야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "아니야. 뜰 이름이랑 안 뜰 이름이 있어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "진행 바가 52퍼센트가 됐다. 린이 랜선을 잡아당겼다. 손에서 빠졌다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "…손이 미끄러졌어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "창밖 광고판 두 개가 동시에 하얗게 바뀌었다. 이름이 한 줄씩 올라가기 시작했다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "저거 — 저거 내 명세야. 내 계좌, 내 주민번호 앞자리."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "린."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "사진도 있어. 내 사진, 내 집 주소. 스물세 개 간판에 다 떴어."
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
						"korean": "린의 사무실 안쪽. 서버 앞에 누군가 서 있었다. 책상 위 노트북 세 대가 전부 켜져 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "기자 화면 잘 봤어? 삼천이백 명 중에 이백 명 올라갔어. 나머지는 내일."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네가 올린 거야."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "올린 건 네가 시킨 그 업로드야. 나는 그걸 광고판에 옮겨 붙였을 뿐이고."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "기자 신상은 덤. 걔가 은행 직원한테 돈 줘서 산 기록이야. 원본에 걔 이름이 같이 찍혀 있었어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 선을 정해. 누구 이름까지 띄울 건데."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "정하는 건 나 아니야. 순서표는 이미 서버에 있어. 넌 오늘 걸음을 하나 더했고."
					},
					"emotion": "base"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…서버 꺼도 광고판 스물셋 개 중 넷은 아직 살아 있어. 린 이름도 그중 하나야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "꺼. 지금 바로."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "못 꺼. 그 넷은 걔가 산 기록이랑 같은 서버에 있어. 지우면 증거도 같이 사라져."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 자가 서버 랙 뒤로 걸어 나갔다. 문이 닫히고, 모니터 넷이 남았다."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "lin",
					"duration_ms": 600,
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "언론사에서 잘렸어. 방금 전화 왔어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "복구할 방법 찾아볼게."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "복구는 무슨. 오늘 저녁에 내 집 앞에 기자 스물 명 와. 그거 찍으러."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "너한테 물어볼 게 있어. 서류철 열어달라고 할 때, 너 그거 팔 생각이었지."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "대답 안 해도 돼. 서류철은 내가 태울 거야. 다 탈 때까지 여기 있을게."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "린이 서류철 마흔 개를 하나씩 바닥에 내려놓았다. 창밖 광고판에서 이름이 한 줄씩 올라가고 있었다."
					},
					"emotion": "base"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "일어나 봐. 광고판에 지금 네 얼굴 나오고 있어. 기자 사진 옆자리에."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…린은 어디 있어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "걔는 서류철 태우러 갔어. 넌 그거 막으러 가거나, 아니면 서버실 12층이나."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "바닥에 린의 랜선이 끊긴 채 놓여 있었다. 광고판 불빛이 방 안까지 들어왔다."
					},
					"emotion": "base"
				}
			]
		}
	]
} as const;
