export const scenario_modern_whisperweb_0_HIE_03 = {
	"scenario_id": "modern_whisperweb_0_HIE_03",
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
			"닥스의 셔터는 내려간 채 올라오지 않았다. 그의 가족 기록은 아직 간판에 남아 있다.",
			"주인공이 손에 넣은 건 통로 하나, 그리고 아직 아무도 못 연 암호화 파일 하나.",
			"탐사 보도 기자 린. 3년 전 특종이 오보로 몰린 뒤 폐기된 기사 더미를 아직 들고 있는 사람.",
			"그녀가 오늘 밤 9시, 폐간된 신문사 지하 사무실로 부른다더라."
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
						"korean": "폐간된 신문사 지하. 책상 위에 인쇄 안 된 기사가 40장 쌓여 있었다."
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
						"korean": "닥스 기록 기사 쓴 게 나야. 못 지웠어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "당신이 왜 여기 있어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "3년 전 내 특종이 오보가 됐어. 위스퍼 웹이 원본을 바꿔치기했어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "이 파일 열면 내 이름 되찾아. 대신 새 출처가 필요해."
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
						2,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "내부 데이터야. 3년 전 원본 기사도 여기 묶여 있어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "잠금은 어떻게 푸는데."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "키를 내가 갖고 있어. 대신 열면 전부 함께 나와."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "이 파일엔 수집된 개인 기록도 섞여 있어. 이름까지."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 이름은 빼고 뽑아."
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
						2,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "해독 12분째. 화면 옆에 오래된 데이터 칩 하나가 꽂혀 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "그 칩? 작년에 익명으로 온 거야. 재생은 안 돼."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "잠깐. 여기 음성 한 줄 살아났어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "스피커가 끊긴 목소리를 냈다. '모든 비밀이… 연결된다…'"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "…이 목소리, 어디서 들었어. 3년 전에도 있었어."
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
						"korean": "기사 올렸어. 제목부터 내 이름 걸었어."
					},
					"emotion": "happy"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "3분 뒤, 도시 익명 게시판 첫 페이지가 전부 같은 글이었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "린. 이거 봐. 댓글에 네 사적인 대화가 붙었어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "내가 내보낸 파일에 내 통화 기록이 있었어. 필터가 안 걸렸어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "명예는커녕, 이제 내가 조롱거리야."
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
						"korean": "게시판 서버실. 서버 앞에 누군가 서 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "기자 기사 잘 읽었어. 필터는 왜 안 걸었지?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네가 파일에 통화 기록을 심었어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "심은 건 처음부터 있었어. 안 지운 건 너희야."
					},
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "게시판 하나 지운다고 명예가 돌아와? 이미 2만 명이 봤어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 2만 명한테 정정문을 올려."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…{random_boss} 말고도 이 파일 복사한 사람 넷이야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "게시판 서버가 꺼졌다. 린의 사무실 전화는 계속 신호가 갔다."
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "정정문은 내일 아침 7시에 자동으로 올라가. 문구는 내가 정했어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "7시 전에 게시판 미러 서버 두 대부터 뽑는다."
					},
					"emotion": "angry"
				}
			]
		}
	]
} as const;
