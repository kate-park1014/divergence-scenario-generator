export const scenario_modern_whisperweb_0_HCE_02 = {
	"scenario_id": "modern_whisperweb_0_HCE_02",
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
			"마지막 송출실이 꺼진 다음 날, 서버 기록은 그대로 남아 있었다.",
			"주인공의 이름으로 남은 접속 로그를 지우려면 남의 데이터를 열어야 한다.",
			"데이터 복구 전문가 닥스는 노점 뒤 데이터 클리닉에서 산다.",
			"닥스는 열쇠를 빌려주지 않는다. 그래서 직접 따기로 했다."
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
						"korean": "노점 천막 뒤, 철제 선반에 하드디스크가 층층이 쌓여 있었다."
					},
					"emotion": "base"
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
						"korean": "그 로그는 못 지워. 서버 쪽 원본이야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 네 아카이브에서 위스퍼 웹 단서를 꺼내."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "내 아카이브엔 팔백 명 개인 기록이 있어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "열면 그 사람들 이름도 같이 나와. 이유는 그걸로 충분해."
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
					"duration_ms": 400,
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "열쇠는 안 줘. 이건 열두 시간 짜리 잠금이야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "잠금을 풀면 열두 시간 벌 수 있지."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "풀면 경보가 시청 서버로 가. 바로 발각이야."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "위스퍼 웹 단서가 거기 있으면 열두 시간도 아까워."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "닥스가 선반에서 케이블을 뽑아 바닥에 던졌다."
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
						"korean": "새벽 세 시, 아카이브 잠금 창이 화면에 떴다."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "dax",
					"duration_ms": 400,
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "사흘만 기다려. 내가 필요한 폴더만 골라서 열게."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "사흘이면 그 사이 이름이 또 뜬다."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "그럼 내 이름부터 뜨게 해. 대신 팔백 명은 빼."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "닥스가 노점 셔터를 반쯤 내렸다. 안쪽에서 케이블을 밀어냈다."
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
						"korean": "아카이브 잠금이 풀린 화면에 항목 목록이 올라왔다. 팔백 명, 주민번호 포함."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "멈춰. 지금 그 화면 밖으로 나가면 복사가 돼."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "위스퍼 웹 폴더만 쓸게. 나머진 안 열어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "네가 안 열어도 시스템이 같이 올려. 한 폴더 열면 다 열려."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "화면 모서리에 업로드 진행률이 백 단위로 올라갔다. 백이 넘고 삼백이 넘었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "팔백 명 주민번호가 지금 광고판으로 가고 있어."
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
						"korean": "서버 앞에 누군가 서 있었다. 화면에 주민 이름이 열 단위로 올라가고 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "네가 잠금을 열어 준 덕에 서른 초 만에 끝났어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그 화면 멈춰."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "네 손으로 올린 거야. 난 받기만 했어."
					},
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "서버 끈다고 목록이 사라져? 이미 칠십 명이 받았어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "받은 사람들 주소는 어디서 났어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "그건 아직 안 알려줄게. 나도 아는 사람이 있어서."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "서버가 꺼졌다. 노점 쪽 전화가 서른 통 연달아 울렸다."
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "목록 백 명 남았어. 네 친구 이름도 그 안에 있더라."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "새벽에 시청 서버 항목부터 다시 캔다."
					},
					"emotion": "angry"
				}
			]
		}
	]
} as const;
