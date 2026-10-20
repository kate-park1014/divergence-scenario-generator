export const scenario_modern_whisperweb_0_FCE_02 = {
	"scenario_id": "modern_whisperweb_0_FCE_02",
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
			"에코가 알려준 주소는 지하철 폐선로 옆 계단 아래였다.",
			"간판에 뜬 이름들을 만든 사람은 아직 잡히지 않았다.",
			"닥스. 등록되지 않은 복원 장비를 굴리는 남자.",
			"그의 서버에는 위스퍼 웹에 넘어간 기록의 사본이 있다고 했다."
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
						"korean": "계단 아래 철문. 문틈으로 형광등이 새고 있었다."
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
						2
					]
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "누구세요. 예약 문자 없었는데."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "위스퍼 웹 사본. 여기 있지."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "그건 의뢰인 거예요. 손대면 제 목이 날아가요."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "목보다 기록이 먼저 날아갔어."
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
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "그 장비 억지로 열면 안에 든 개인 기록이 같이 새요."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "어차피 새는 중이야. 광고판에."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "제 고객 300명이에요. 이름, 계좌, 병원 기록까지."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그 300명 중에 우리 이름도 있어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "…그건 저도 몰랐어요."
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
						"korean": "작업대 위 복원 장치에서 오류음이 세 번 울렸다."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "dax",
					"duration_ms": 500,
					"spot": [
						2,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "이 칩, 재생이 안 돼요. 읽는 순간 전압이 튀어요."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 읽는 놈만 태우면 되겠네."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "제 장비는 하나뿐이에요. 그거 태우면 끝이에요."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 빨리 열어."
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
						"korean": "케이블을 장치에 물리자 랙이 한 칸씩 꺼지기 시작했다."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "dax",
					"duration_ms": 450,
					"spot": [
						2,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "멈춰요. 지금 온도 74도예요. 80 넘으면 터져요."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "79까지 보고 끊어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "그 5도 동안 300명 정보가 통째로 나가요!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…이미 81이야."
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
						"korean": "터진 장치 자리에서 연기가 올랐다. 서버 앞에 누군가 서 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "300건이 방금 올라갔어. 계좌랑 병원 기록까지."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네가 유출한 거야."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "장치에 선 꽂은 건 너야."
					},
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "내가 훔친 게 아니야. 네가 밀어 넣은 거야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그래도 네가 판 거야."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "닥스한테 물어봐. 누가 먼저 팔았는지."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "닥스는 무너진 랙 옆에 앉아 화면을 보고 있었다."
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "닥스 이름도 방금 올렸어. 계좌까지."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "내일 새벽에 그 서버 랙 직접 뽑는다."
					},
					"emotion": "angry"
				}
			]
		}
	]
} as const;
