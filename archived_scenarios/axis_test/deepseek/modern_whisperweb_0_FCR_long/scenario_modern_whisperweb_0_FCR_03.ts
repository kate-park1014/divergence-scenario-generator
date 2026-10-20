export const scenario_modern_whisperweb_0_FCR_03 = {
	"scenario_id": "modern_whisperweb_0_FCR_03",
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
			"닥스의 서버를 열었다. 백업 이백 건이 네트워크로 나갔다.",
			"사흘째 밤, 광고판 열아홉 개가 이름 대신 도시 괴담을 띄우고 있다.",
			"'뒤처진 가로등 아래 서면 사라진다'. 확인해 준 사람은 아직 없어.",
			"그 기사를 쓴 사람은 탐사보도 기자 린. 오늘 밤 아홉 시에 만난다."
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
						"korean": "신문사 3층 편집국. 모니터 스물네 대 중 일곱 대에 같은 기사 초안이 열려 있었다."
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
						"korean": "취재 중이야. 삼십 분만 기다려 줄래."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "기다릴 시간 없어. 어제 광고판에 뜬 이름, 네 기사에 있었지."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "내가 확인한 건 열두 명이야. 주소랑 병력까지. 그중 넷은 이미 이사 갔어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그 기사 내려."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "안 내려. 오늘 밤 열한 시에 송고야. 왜 내려야 하는지부터 말해."
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
					"speaker": "lin",
					"duration_ms": 450,
					"spot": [
						3,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "제보자가 셋이야. 다 같은 걸 봤대. 가로등 아래 서면 삼 초 만에 사라진다고."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그 괴담 퍼지면 사람들이 밤에 안 나와. 그게 문제야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "안 나오면 조용해지니까 문제라는 거지? 누가 조용하길 원하는데."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "윗선이야. 이름은 아직 못 밝혀."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "못 밝히면 나도 못 써. 근데 이건 쓸 수 있어."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "focus",
					"speaker": "lin",
					"duration_ms": 400
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "어젯밤 두 시, 시청 서버 접속 기록에 없던 주소가 하나 찍혔어. 구청 지하 2층."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그 주소는 나도 알아. 문제는 그다음이야."
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
					"speaker": "lin",
					"content": {
						"korean": "기사 초안 봤어? '블랙아웃' 문양 낙서가 어제 하루에만 스물세 곳에서 나왔어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그 낙서는 옛날 조직 표시야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "옛날 조직이 왜 지금 와서 벽에 그림을 그려. 사진 스물세 장 전부 같은 각도야."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "누가 찍었는데."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "제보자. 카메라 위치가 다 똑같아. 누군가 찍어서 뿌린 거야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 그 사진도 빼."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "빼면 뭐가 남아. 빈 칸만 스물세 개 남겠지."
					},
					"emotion": "sad"
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
						"korean": "편집국 출입문이 잠겼다. 복도에서 경비 두 명이 문 앞에 섰다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "뭐 하는 거야. 문 열어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "송고 취소해. 공식 발표 전까지."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "손 치워. 내 손목 잡으면 이건 폭행이야. 기자가 맞은 거 자체가 기사야."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "써. 대신 밤 열한 시엔 안 나가."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "키보드가 바닥으로 떨어졌다. 화면에서 기사 초안이 한 줄씩 지워졌다. 스물세 줄이 남았다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "…그 낙서 스물세 개, 그거 대피 안내랑 같이 나갈 기사였어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "어느 골목이 위험한지 알려주는 지도였어. 사람들한테."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…지도."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "편집국 창밖 간판이 0719를 세 번 띄웠다. 계단 쪽에서 발소리가 났다."
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
						"korean": "송출실 계단참. 서버 팬 소리 사이로 누군가 계단 난간에 기대 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "기사 하나 잡으려고 사람 손목 잡았어? 값이 좀 비싼데."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "그 낙서 스물세 개, 내가 찍어서 뿌렸어. 사람들 밤에 못 나오게."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그 지도, 어디로 가는 거였어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "몰라. 난 찍어서 넘기는 사람이야. 근데 이제 아무도 못 봐. 네가 지웠잖아."
					},
					"emotion": "happy"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…비켜."
					},
					"emotion": "angry"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "지도는 지웠어도 사진은 남아 있어. 스물세 장, 내 폰에."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "폰 내놔."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "이미 넘겼어. 오늘 밤 열한 시에 다시 뿌려. 기사는 없는데 사진만 있겠지."
					},
					"emotion": "happy"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "계단 난간에 폰이 놓였다. 화면은 꺼져 있었다."
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
						2
					]
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "지워진 초안 복구했어. 스물세 줄, 한 줄도 안 틀렸어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…지금 올려."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "열한 시까지 이십 분이야. 늦으면 사진만 먼저 퍼져."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "린이 계단을 뛰어 내려갔다. 송출실 모니터 다섯 대에 같은 사진이 한 장씩 떴다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "열한 시 정각, 광고판 스물세 개가 꺼졌다. 그리고 아무것도 안 떴다."
					},
					"emotion": "base"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"speech": {
						"korean": "린의 노트북이 계단 아래로 굴러떨어졌다."
					},
					"content": {
						"korean": "린의 노트북이 계단 아래로 굴러떨어졌다."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "열한 시 넘었어. 사진 스물세 장, 지금 광고판에 올라가는 중이야."
					},
					"emotion": "happy"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "사진만 뜨면 사람들은 더 무서워해. 다음엔 설명이 없어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "릴레이 서버부터 찾는다. 사진 원본 지우면 늦어도 다시 취소돼."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "그럼 나는 그릴 거야. 스물세 줄 다시. 이번엔 안 지워줘."
					},
					"emotion": "angry"
				}
			]
		}
	]
} as const;
