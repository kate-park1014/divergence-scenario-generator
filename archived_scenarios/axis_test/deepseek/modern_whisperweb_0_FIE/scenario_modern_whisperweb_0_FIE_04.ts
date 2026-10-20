export const scenario_modern_whisperweb_0_FIE_04 = {
	"scenario_id": "modern_whisperweb_0_FIE_04",
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
			"린의 서버를 열었다. 그 안에 6주 전부터 오간 메시지가 남아 있었다.",
			"암호는 옛 갱단 '크림슨 코일'의 방식이었다. 3년 전에 해체된 조직이다.",
			"에코가 이름 하나를 줬다. 카이. 지금은 외곽에서 세탁소를 한다.",
			"주소는 3번가 27번지. 오늘 밤에 간다."
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
						"korean": "3번가 27번지. 세탁기 4대가 도는 가게 안쪽에 남자가 서 있었다."
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
						"korean": "영업 끝났어요. 세탁물은 내일 찾아가세요."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "세탁물 아니야. 크림슨 코일 암호 보러 왔어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "…그 이름, 여기서 꺼내지 마요. 애들 듣는다고."
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
						"korean": "저 사람들한텐 내가 세탁소 사장이에요. 그걸로 끝이야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네 이름 검색하면 8년 전 기록 다 나와. 나 여기 있어서."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "협박이네요. 그게."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "은신처 주소 하나. 그럼 다신 안 와."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "…12번가 지하. 다들 죽었어. 거기 뭐 없어요."
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
						"korean": "12번가 지하 창고. 선반에서 종이 장부 한 권이 나왔다. 페이지가 63장이었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "장부에 이름하고 집 주소가 같이 적혀 있네."
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
						"korean": "그거 왜 뽑았어요. 가족 명단이 같이 있어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이건 그냥 종이잖아. 누가 봐."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "여기 사진 찍으면 바로 올라간다고! 10초 만에!"
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
						"korean": "간판 6개에 이름 여섯 개가 떴다. 카이의 아내와 아이 둘이 거기 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "내 딸 초등학교. 주소까지 다 떴어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "장부는 내가 찍은 게 아니야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "니가 뽑았잖아! 아무도 안 볼 거라고 했잖아!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…미안해. 지금 지우러 갈게."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "지워? 한 번 뜬 건 다 퍼졌어."
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
						"korean": "12번가 지하 서버실. 서버 앞에 정체 모를 자가 서 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "장부 사진 잘 나왔더라. 63장 전부."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "누가 찍래. 그거 종이였어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "들고 나온 손이 찍었지. 난 칸만 열어놨어."
					},
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "카이 집주소는 아직 안 올렸어. 네가 못 지우면 올라가."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "지우고 말아. 그리고 카이한테 직접 말할 거야."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "카이가 계단을 올라왔다. 손에 세탁소 열쇠가 들려 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "…이제 내 얼굴, 간판에서 못 지워."
					},
					"emotion": "sad"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "카이 딸 학교 이름, 내일 아침 8시에 띄울 거야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "7시 전에 서버 전원을 뽑는다. 그때 다시 온다."
					},
					"emotion": "angry"
				}
			]
		}
	]
} as const;
