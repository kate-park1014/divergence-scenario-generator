export const scenario_modern_whisperweb_0_FCE_05 = {
	"scenario_id": "modern_whisperweb_0_FCE_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "modern",
	"actors": {
		"echo": {
			"id": "mon_57f2edb8-aa81-4ce7-beed-ab009cd2ff35",
			"name": {
				"korean": "에코",
				"english": "Echo",
				"japanese": "エコー",
				"chinese": "艾可",
				"french": "Écho",
				"spanish": "Eco",
				"vietnamese": "Echo",
				"thai": "เอคโค่",
				"hindi": "इको"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/da48e2c2-6733-4f65-f8b6-f197af4ff700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e90605b9-372f-4bf1-cdec-56a2fdef0800/public"
		}
	},
	"boss": {
		"pool_id": "pool_285"
	},
	"prologue": {
		"korean": [
			"붉은 장미단 장부 400건이 아침 6시 전 기사에 실렸다.",
			"거리에서 유리병이 깨졌고, 피해자와 가해자가 한 줄에 찍혀 있었다.",
			"오늘 밤, 도시 전광판 열두 개가 동시에 켜졌다.",
			"정보상 에코가 마지막 부품을 부른다. 값은 지금까지와 같다."
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
						"korean": "골목 끝 전광판이 꺼진 채 깜빡였다. 에코의 셔터는 완전히 올라가 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "echo",
					"duration_ms": 500,
					"spot": [
						3,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "부품 가져왔어? 오늘은 하나만 필요해."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "전광판 얘기부터 해."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "열두 개가 어젯밤 같이 켜졌어. 40초 동안."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "뜬 건 대화 기록이었어. 남의 문자, 통화 내용까지."
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
					"speaker": "echo",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "이거. 전광판 관리 서버 목록이야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이 숫자들은 뭐야. 22, 91, 4…."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "두 자리씩 끊으면 주소가 돼. 시청 서버실."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 거기서 끊으면 돼."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "그 전에 — 내 이름이 오늘 새벽 광고판에 떴어. 생년월일까지."
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
					"speaker": "echo",
					"duration_ms": 400,
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "이 부품, 서버실 메인 차단기에 끼워."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "차단기 하나로 어떻게 돼."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "전원을 끊는 게 아니야. 연결을 끊는 거야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "연결이 뭐 어디에 다 연결돼 있는데."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "그걸 물어보는 순간 — 내 이름이 또 뜰 거야."
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
					"speaker": "echo",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "…손이 안 떨려. 오히려 좋아."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "에코. 넌 여기서 빠져."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "내 이름이 뜬 다음 날부터, 내 문자도 뜨기 시작했어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "이제 나한테 숨길 게 없어. 그래서 들어갈 거야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "에코가 차단기 부품을 쥔 채 먼저 계단을 올랐다."
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
						"korean": "서버 랙 백여 개가 한 방에 서 있었다. 스크린마다 같은 얼굴이 떠 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "네 문자도 여기 있어. 작년 11월 거."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이름 띄운 게 너야."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "난 파일만 올렸어. 뿌린 건 구경하는 사람들이야."
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "코트가 찢어지며 광섬유가 사방으로 튀었다. 빌딩 유리에 얼굴이 번졌다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "다 연결됐어. 이제 아무도 아무것도 못 숨겨."
					},
					"emotion": "happy"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…꺼. 꺼! 전광판 꺼!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "광고판은 꺼지지 않았다. 거리에서 사람들이 서로의 이름을 소리쳐 불렀다."
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "네 얼굴 좋아 보이네. 어제부턴 전 시에 송출 중이야."
					},
					"emotion": "happy"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그 화면 끄는 코드, 내가 직접 짠다."
					},
					"emotion": "angry"
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"전광판은 3분 만에 꺼졌다. 도시는 다시 불빛만 남았다.",
			"다음 날 아침, 스마트폰 수리점 앞에 사람들이 줄을 섰다. 전부 기기를 맡기러 왔다.",
			"에코의 셔터는 닫힌 채였다. 안쪽에서 문자가 오지 않았다.",
			"도시엔 아무 일도 없었다는 듯 신호등이 바뀌었다.",
			"숨길 게 하나도 남지 않은 거리에서, 사람들은 서로의 눈을 보지 않았다."
		]
	}
} as const;
