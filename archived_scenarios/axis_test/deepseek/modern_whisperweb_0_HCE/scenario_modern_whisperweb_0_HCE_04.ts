export const scenario_modern_whisperweb_0_HCE_04 = {
	"scenario_id": "modern_whisperweb_0_HCE_04",
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
			"점검 공지 캡처가 커뮤니티에 사흘 째 돌고 있다.",
			"린은 기사에서 손을 뗐고, 시청 대기 화면은 꺼진 채다.",
			"남은 단서는 오래된 데이터 칩 하나.",
			"그 칩의 출처를 아는 사람은 전자제품 수리점을 하는 카이뿐이다.",
			"카이는 문을 열어 주지 않는다. 그래서 오늘 문을 열게 만들 거다."
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
						"korean": "수리점 셔터가 반만 올라가 있었다. 안쪽에 라디오 부품이 쌓여 있었다."
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
						"korean": "영업 끝났어. 문 닫아."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "고스트 서킷 때 칩 만진 사람이 너지."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "그 얘기 하면 애들 학교에 소문 나."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "소문 안 나게 해 줄게. 칩 출처만 알려줘."
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
					"duration_ms": 450,
					"spot": [
						3,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "카이가 카운터 아래 철제 상자를 끌어냈다. 봉인 스티커가 두 겹이었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "옛날 장부야. 우리 패거리 돈줄이랑, 거래처 이름."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "위스퍼 웹 이름이 거기 있을 거야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "그래서 이 상자를 금고에 넣은 거야."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "열면 거래처 사십 명 이름도 같이 나와. 애들 엄마 이름도."
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
						"korean": "수리점 뒤편 철문. 카이가 열쇠를 손바닥에 쥐고 돌리고 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "금고 비번은 내가 넣어. 너흰 손대지 마."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "장부만 나오면 끝이야. 개인 기록은 안 건드려."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "그 말 믿을게. 딱 한 번이야."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "금고 문이 열리자 장부 아래에서 작은 램프가 초록으로 깜빡였다."
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
					"duration_ms": 400,
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "핸드폰이 계속 울려. 번호가 옛날 식구들 거야."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "장부는 이미 복사했어. 이제 끄면 돼."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "그 램프, 위치 신호 보내는 거였어. 사 년 동안 몰랐어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "뒤편 창고에서 낮은 폭음. 유리 한 장이 골목까지 날아갔다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "애들 아직 안에 있어."
					},
					"emotion": "angry"
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
						"korean": "골목 끝에서 누군가 걸어왔다. 손에 장부 사본이 들려 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "그 금고 램프, 내가 심어 뒀어. 사 년 전에."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "애들은 왜 건드려."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "안 건드렸어. 네가 문을 열어서 불렀지."
					},
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "장부 한 권 때문에 애들 둘이 병원이야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "웃지 마."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "이 장부, 원본은 열두 권 중 세 번째야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "카이가 병원 복도 의자에 앉아 있었다. 손에 장부 사본을 쥔 채였다."
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "구급차는 불렀어. 장부는 내가 가져간다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "병원 가서 사진부터 찍는다. 증거로."
					},
					"emotion": "angry"
				}
			]
		}
	]
} as const;
