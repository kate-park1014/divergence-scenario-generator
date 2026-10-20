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
			"응급실 보도는 근거 없음으로 끝났다. 환자 50명은 돌아갔다.",
			"그 사이 위스퍼 웹이 다른 걸 캐고 있었다. 갱단 '검은 밤'의 은닉 자금.",
			"자금 기록을 쥐고 있던 자는 이름을 바꾸고 세탁소를 하고 있다.",
			"카이. 새벽 6시, 그 가게 셔터가 반쯤 내려가 있었다."
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
						"korean": "세탁소 유리문에 종이가 붙어 있었다. '임시 휴업'."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "카이. 문 열어."
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
						"korean": "손님 안 받아. 간판도 내렸어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "위스퍼 웹이 검은 밤 자금 찾고 있어. 너부터 턴다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "…그 이름, 20년 만에 듣네."
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
						"korean": "어제 게시판에 이름 하나 떴어. 옛날 같이 일한 놈."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "신상까지?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "주소, 차 번호, 애 학교까지. 다 퍼졌어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "검은 밤 살아있는 놈들이 가만 안 둬."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "알아. 그래서 내일 새벽에 옮기기로 했어."
					},
					"emotion": "sad"
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
						"korean": "카이가 계산대 아래 은닉 자금 장부 사본을 꺼냈다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이거 넘겨. 1억 어디 있는지 웹이 알면 셋 다 끝나."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "넘기면 그 옛 동료 이름도 같이 가."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "지금도 이름 하나 새고 있어. 시간 벌자."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "그 이름 하나가 사람 하나야. 나는 못 팔아."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 그 사람 내가 옮긴다. 주소만 줘."
					},
					"emotion": "angry"
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
						"korean": "세탁소 불이 꺼져 있었다. 셔터에 자물쇠가 걸려 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "카이. 장부 들고 나갔어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "계산대 위에 쪽지가 놓여 있었다. '내가 알아서 한다'."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "새벽 넘기기 전에 찾아야 해."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "그때 게시판에 새 글이 떴다. 은신처 주소. 3분 전."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이미 늦었어."
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
						"korean": "불탄 집 마당. 서버 케이스 하나가 옆에 놓여 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "주소 올린 건 나야. 안 옮겨서 불붙은 건 그쪽 몫이고."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "장부는 어디로 갔어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "1억은 이미 셌어. 네가 시간 벌자고 했지."
					},
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "1억은 다시 안 나와. 대신 이름 하나는 아직 안 올렸어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그 이름, 누구야."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "{random_boss}에게 그걸 넘긴 건 카인이야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "버너 위에 탄 세탁소 열쇠가 놓여 있었다."
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "불 끈다고 남은 게 없어. 장부 사본까지 다 탔어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "다음엔 카이를 먼저 찾는다. 세탁소 말고."
					},
					"emotion": "angry"
				}
			]
		}
	]
} as const;
