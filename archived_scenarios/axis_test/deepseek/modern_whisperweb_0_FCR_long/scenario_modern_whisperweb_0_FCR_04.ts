export const scenario_modern_whisperweb_0_FCR_04 = {
	"scenario_id": "modern_whisperweb_0_FCR_04",
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
			"린의 초안 스물세 줄은 열한 시에 나갔다. 광고판 스물세 개는 그때 꺼졌다.",
			"그 사흘 뒤, '블랙아웃' 문양 낙서가 다시 벽에 붙었다. 이번엔 마흔한 곳.",
			"낙서는 전부 옛 조직의 구역 표시였다. 그 구역을 아는 사람은 하나뿐.",
			"블랙아웃 전직 행동대장, 카이. 세탁소를 하고 있다.",
			"영장을 들고 간다. 오늘은 절차대로."
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
						"korean": "세탁기 여섯 대가 도는 가게. 카운터 위에 영장이 놓였다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "카이. 블랙아웃 장부 넘겨."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "kai",
					"spot": [
						3,
						3
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "영장이네. 스물두 시 이후엔 집행 못 하는 거 알지."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "지금 스물한 시 사십 분이야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "이십 분 남았네. 세탁물 찾아갈 시간은 되겠다."
					},
					"emotion": "happy"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "카이가 영장을 집어 세탁물 바구니에 던졌다."
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
					"speaker": "kai",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "장부 어딨어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "여기서 마흔둘 살았어. 이 가게 하나로."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "마흔한 군데에 네 조직 표시가 붙었어. 어제 하루에."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "…그 표시는 조직 접선 신호야. 지금 우리 조직엔 안 쓰는 표시인데."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "누가 쓰는데."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "말하면 내 사람들 이름이 어디로 갈지 알아? 내 동생도 거기 있었어."
					},
					"emotion": "angry"
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
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "카운터 아래쪽 벽에 철제 문이 있었다. 자물쇠가 세 개 걸려 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "저 문 열어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "안에 장부만 있는 게 아니야. 조직원 마흔일곱 명 명단이 같이 있어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "그 명단은 장부 뒤에 붙어 있어. 장부만 뜯으면 안 되고, 뜯는 순간 뜯긴 자리가 보여."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 둘 다 가져오면 되잖아."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "가져가면 걔네 부모 집까지 다 털려. 마흔일곱 명 중에 열아홉은 애들 키우고 있어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "카이가 자물쇠 열쇠를 주머니 안쪽으로 밀어 넣었다."
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
					"spot": [
						2,
						3
					],
					"duration_ms": 400
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "철제 문 손잡이를 탐험대가 잡아당겼다. 카이의 등이 벽에 부딪혔다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "아, 잠깐—"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "열쇠 내놔."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "자물쇠 세 개가 바닥에 떨어졌다. 문이 열리자 종이 묶음이 쏟아졌다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "…그거 뒤에 명단 있잖아. 붙어 있는 거 안 뜯었어. 제발."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "장부만 갖는다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "장부 표지가 뜯기자, 뒷면에 붙은 명단이 함께 떨어졌다. 마흔일곱 줄이 보였다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "…떨어졌어. 지금 그거 주머니에 넣어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "가게 유리에 비친 간판이 깜빡였다. 마흔일곱 자리 주소가 한 번씩 지나갔다."
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
						"korean": "세탁소 안쪽, 보일러실 문 앞에 누군가 서 있었다. 손에 종이 묶음을 들고 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "명단 마흔일곱 줄. 열 분 전에 이 가게 와이파이로 다 나갔어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그 종이 내놔."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "이건 사본이야. 원본은 이미 화면에 띄울 준비 끝났어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "왜 하필 이 명단이야."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "때린 게 너잖아. 난 떨어진 종이 주워서 올렸을 뿐이야."
					},
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "보일러실 바닥에 종이 묶음이 흩어졌다. 마흔일곱 줄 중 열두 줄이 젖어 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "너무 늦었어. 열아홉 명 자녀 이름까지 같이 떴어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…지워."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "못 지워. 열두 개 군데에서 각자 저장했어. 나도 손 못 대."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "kai",
					"spot": [
						3,
						3
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "내 동생 번호도 올라갔어. 방금 전화 왔어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "카이, 미안해."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "사과하면 명단이 내려가? 열아홉 집 애들 이름이 내려가?"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "카이가 바닥에 떨어진 장부를 발로 밀어냈다. 표지가 두 쪽으로 찢어져 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "밖에서 광고판이 한 번 깜빡였다. 숫자 네 개가 뜨고 꺼졌다."
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "보일러가 돌아갔다. 카운터 유리에 명단 마흔일곱 줄이 흐르고 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "명단은 다 퍼졌어. 이제 이 가게 손님도 없을걸."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "새벽 다섯 시에 시청 기록보관실 문부터 연다."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "거기 가면 뭐 해. 지운 이름은 안 돌아와."
					},
					"emotion": "base"
				}
			],
			"epilogue": {
				"korean": []
			}
		}
	]
} as const;
