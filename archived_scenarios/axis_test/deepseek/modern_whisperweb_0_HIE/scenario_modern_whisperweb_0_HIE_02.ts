export const scenario_modern_whisperweb_0_HIE_02 = {
	"scenario_id": "modern_whisperweb_0_HIE_02",
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
			"통신국 서버는 꺼졌다. 명단은 이미 밖으로 나갔다.",
			"주인공이 가진 건 파일 하나가 아니라, 파일을 훔칠 곳에 대한 정보뿐.",
			"뒷골목 해커 닥스. 광고판 제어 코드를 판다더라.",
			"거래 조건은 현금이 아니었다."
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
						"korean": "형광등 하나 없는 골목. 셔터 세 개 중 하나만 반쯤 열려 있었다."
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
						"korean": "문 닫아. 이 골목에 CCTV 둘이야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "닥스? 광고판 코드 판다는 사람."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "값부터. 3백. 현금 아니면 안 팔아."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "현금 없어. 대신 우회 통로 만들어줄게."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "…내 서버로 들어오는 길을 직접? 미쳤어?"
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
						"korean": "들어와. 대신 손대는 건 정해진 랙뿐이야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "코드 어디 있어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "여기. 8번가 광고판 17개 돌릴 수 있어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 통로 붙인다. 이 구멍은 나만 쓴다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "…작년에 내 집 대출 기록이 간판에 떴어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "그래서 이런 데 살아. 다시는 안 당해."
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
					"speaker": "dax",
					"duration_ms": 400,
					"spot": [
						3,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "통로 살아있네. 광고판 하나 테스트해봤어."
					},
					"emotion": "happy"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "잘 됐고. 그 서버에 뭐가 더 있어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "옛날 칩 하나. 재생하면 오류만 뜨는데."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "스피커에서 끊긴 목소리가 흘렀다. '모든 비밀이… 연결된다…'"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "누구 목소리야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "몰라. 이 칩 내 거 아니야. 누가 맡긴 거."
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
					"speaker": "dax",
					"duration_ms": 400,
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "닥스. 광고판에 네 이름 떴어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "…뭐? 어디. 어느 간판."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "5번가 전광판에 '닥스, 연체 12회' 가 10초간 떠 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "네가 붙인 통로로 들어온 거야. 길은 하나뿐이었어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아니야. 그 구멍은 나만—"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "가족 이름까지 봤어. 이제 끝이야."
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
						"korean": "옥상 송출실. 서버 앞에 누군가 서 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "통로 잘 뚫었더라. 덕에 편했어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "닥스 기록, 네가 띄웠어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "네가 문 열어줬잖아. 난 그냥 지나갔어."
					},
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "닥스한테 사과는 했어? 이름 아직 안 내렸는데."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…내려. 지금."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "전광판 두 개가 꺼졌다. 다른 간판 세 개는 그대로였다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "닥스의 셔터는 내려가 있었다. 문을 두드려도 대답이 없었다."
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "닥스 기록은 내일 아침 8시에 다시 떠. 늦지 마."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "송출실 5번 랙부터 뽑고 닥스 집 앞으로 간다."
					},
					"emotion": "angry"
				}
			]
		}
	]
} as const;
