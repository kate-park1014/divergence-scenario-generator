export const scenario_modern_whisperweb_0_HCE_03 = {
	"scenario_id": "modern_whisperweb_0_HCE_03",
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
			"닥스의 아카이브에서 육십삼 명 이름이 스물두 개 게시판에 붙었다.",
			"위스퍼 웹이 그 목록을 인용해서 위조 공지를 뿌리기 시작했다. 구청 서버 점검, 예방접종 명단, 수도관 누수 안내.",
			"전부 가짜다. 사람들은 진짜와 가짜를 구분하지 못하고 구청 앞에 몰려갔다.",
			"트루사이트의 린이 새벽 다섯 시에 연락을 걸어왔다.",
			"그리고 나는 — 아직 아무것도 결정하지 못했다."
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
						"korean": "구청 앞 광장. 안내문이 붙은 게시판 앞에 백 명 넘게 서 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "저 안내문, 어제 오후에 붙었어?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "게시판에는 '수도관 누수 긴급 점검, 아파트 열두 단지 단수'라고 적혀 있었다. 구청 직인 모양이 찍혀 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "lin",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "그거 가짜야. 구청 대표번호로 확인했어. 점검 계획 자체가 없어."
					},
					"emotion": "angry"
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
						"korean": "트루사이트야. 어제부터 위조 안내문 네 건 받았어. 접수처가 전부 위스퍼 웹 쪽 주소였어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "왜 이걸 나한테 보여줘."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "닥스 아카이브 목록, 네가 열었지. 그 이름들이 지금 위조 안내문 명단에 섞여 있어. 진짜 환자 이름 사이에."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…몇 명이야."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "삼백 명. 오늘 밤까지 구청 앞에 오면 그 수가 두 배가 돼. 아무도 확인 안 해."
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
					"spot": [
						2,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "린의 사무실. 책상 위 모니터 두 대에 같은 안내문이 띄워져 있었다. 수정 흔적이 형광 표시로 덮여 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "이거 봐. 위조 안내문 전부 같은 서버에서 나왔어. 주소는 구청 직인 이미지를 복사해서 붙였고."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 트루사이트에 팩트체크 기사 쓰면 되잖아."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "썼어. 새벽 두 시에 올렸어. 조회수 이백이야."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "같은 시간에 위조 안내문 공유는 팔만 회야. 내 기사는 안 읽혀. 사람들은 확인할 시간이 없어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 뭘 하라고."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "시청 네트워크 기록 서버에 진짜 유출 로그가 있어. 거기엔 아직 안 터진 이름이 천 건 넘게 남아 있어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "내가 그 로그를 공개하면 안내문보다 더 큰 게 터져. 천 명 이름이 한 번에 나가."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "안 올리면?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "위스퍼 웹이 먼저 올려. 그럼 더러운 순서로 나가. 확인도 없이."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "모니터 구석에서 창 하나가 저절로 열렸다 닫혔다. 주소창에 'W'가 반 초 떠 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "…이거 요즘 자꾸 그래. 내 기사 편집기에서도 그래."
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
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "구청 지하 주차장. 린이 차 트렁크에 노트북을 올려놓고 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "생각했어. 진짜 로그를 지금 올리면 광장에 있는 사람들이 더 몰려. 오늘 밤에 여덟 명이 넘어져. 내가 세었어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 어떻게 해."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "공지 하나만 띄우자. '시청 네트워크 점검, 사흘간 모든 안내문 확인 불가'. 사람들 광장에서 빠져."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그건 진짜가 아니야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "알아. 근데 사흘 안에 진짜 로그를 처리할 시간이 생겨. 그동안 천 명 이름을 하나씩 확인해서 내보내면 돼."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "들키면?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "들켜. 나는 기자야. 내가 거짓 공지를 쓰면 그 뒤로 내 기사는 아무도 안 믿어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "그래도 오늘 밤 여덟 명보다는 낫지. 서명은 네 이름으로 해. 내 이름은 안 넣어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "왜 내 이름으로."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "내가 넣으면 트루사이트가 끝나. 그러면 그 뒤로 아무도 확인 안 해."
					},
					"emotion": "sad"
				},
				{
					"type": "narrator",
					"content": {
						"korean": "주차장 기둥에 분필로 'W'가 그려져 있었다. 회로선이 붙은 모양이었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "…저거 어제는 없었어."
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
					"spot": [
						2,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "시청 네트워크 관제실. 벽면 스크린에 점검 공지가 떠 있었고, 그 아래 접수 창이 사흘째 닫혀 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "띄웠어. 삼십 분 만에 광장 사람이 백 명에서 스물일곱으로 줄었어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "잘됐네."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "잘된 게 아니야. 게시판 하나에서 캡처가 올라왔어. 공지 코드가 위조 안내문 서버랑 같다고."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "스크린 한쪽에 댓글이 실시간으로 올라갔다. '구청도 짜고 치는 거 아니냐'. '아까 그 사람이 서명했대'."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…내 이름이야."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "그래. 이제 광장에 안 오는 대신 전화를 걸어. 점검 공지 하나를 못 믿으니까."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "린이 자기 계정에 로그인했다. 화면에 '트루사이트 발행인' 표시가 떴다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "내가 정정 기사를 쓸 거야. '우리가 낸 공지는 사실이 아니다'라고. 지금 안 쓰면 이 도시는 아무것도 안 믿어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그러면 천 명 이름은?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "같이 나가. 순서대로 확인해서. 더러운 순서로 나가는 것보다는 낫게."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "린이 발행 버튼 위에 손을 올렸다. 화면 오른쪽 아래, 서버 접속 표시가 하나 늘어 있었다. 주소에 'W'가 붙어 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"type": "speech",
						"speaker": "character_any"
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
						"korean": "관제실 안쪽 서버실. 랙 스무 대 너머로 모니터 하나가 켜져 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "서버 앞에 누군가 앉아 있었다. 손가락이 키보드 위에 올라가 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "점검 공지 잘 봤어. 코드에 구멍 세 개 있었는데 네가 네 이름을 넣어서 다 막혔더라."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "덕분에 오늘 밤 광고판 수익이 삼백만 원 줄었어. 대신 그 공지 캡처는 삼십만 회 퍼졌고."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "거짓말은 내가 했어. 사람들은 놔."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "놔? 나는 안내문 안 만들었어. 네 공지 코드만 복사했어. 확인 안 하는 사람들이 알아서 퍼뜨렸는데."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "거짓말 한 번이 광고판보다 오래 간다는 거, 이제 알겠지."
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
						"korean": "랙 스무 대가 꺼졌다. 모니터에 남은 안내문 목록이 한 줄씩 지워졌다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "지워도 늦었어. 어제 오후에 나간 공지 사본이 사십 개 사이트에 올라가 있어. 그거 내 서버 아니야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "누가 더 있어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "있어. 이 층 서버는 시청 기록 열람용이고, 위층은 발급용이야. 발급 쪽 키를 가진 사람은 딱 셋인데, 너도 얼굴은 알 걸."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "lin",
					"spot": [
						2,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "정정 기사, 발행했어. 제목은 '구청 점검 공지, 우리가 만든 거짓입니다'로 했어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…트루사이트는."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "사흘 만에 구독 육백 명 빠졌어. 댓글 첫 줄이 '기자 새끼가 짜고 쳤네'야."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "그래도 내일 아침에 천 명 이름 중 사백 건을 순서대로 내보낼 거야. 확인은 내가 직접 해. 전화 스물두 통씩."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "내가 한 거니까 내가 할게."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "아니야. 내가 공지를 띄우자고 했어. 그리고 — 기자가 거짓말을 하면 그 거짓말은 영원히 남아. 정정 기사를 백 번 써도 지워지지 않아."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "린이 노트북 덮개를 닫았다. 화면 안쪽에 'W' 모양 스티커가 붙어 있었다. 린은 그걸 못 본 채 가방에 넣었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "관제실 벽 스크린에 새 안내문 하나가 떴다. '긴급 시민 확인 요청 — 트루사이트 발행인 신원 조회'."
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
						"korean": "모니터에 린의 사진과 트루사이트 로고가 붙은 공지가 떴다. '거짓 보도 매체'라고 적혀 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "이 화면 내일 아침에 광고판에 걸어. 기자 사진은 스물네 장 찍어뒀어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "사진 지우고, 새벽 여섯 시 전에 서버 캐비닛 잠금부터 내가 다시 건다."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "지우면 뭐 해. 오늘 밤 확인 안 한 사람들이 내일도 확인 안 해."
					},
					"emotion": "base"
				}
			]
		}
	]
} as const;
