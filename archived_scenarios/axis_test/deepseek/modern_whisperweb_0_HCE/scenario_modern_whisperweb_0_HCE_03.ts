export const scenario_modern_whisperweb_0_HCE_03 = {
	"scenario_id": "modern_whisperweb_0_HCE_03",
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
			"아카이브 복사본이 밖으로 나간 뒤, 시청 대기 화면에는 아무것도 뜨지 않았다.",
			"대신 시민 신고 전화가 사흘 동안 이천 건 걸려 왔다.",
			"트루사이트의 린은 그중 서른 건이 같은 문장으로 시작한다는 걸 알아냈다.",
			"린은 오늘 밤 열 시에 발표를 하자고 했다.",
			"그 발표문에는 위스퍼 웹 이야기가 들어 있었다."
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
						"korean": "트루사이트 사무실. 모니터 여섯 대가 같은 기사 초안을 띄우고 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "lin",
					"duration_ms": 500,
					"spot": [
						3,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "신고 서른 건이 똑같아. '내 이름이 벽에 떴다.'"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그 문장을 오늘 밤 기사에 넣으면 어떻게 돼?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "시청 대기 화면이 마감 전에 꺼져. 전화가 폭주해."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "경찰이 오면 자료 압수부터 해. 그럼 끝이야."
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
						"korean": "대기 화면 명단이 오늘 아침 세 번째로 갱신됐어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "몇 명 올랐는데?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "사백 명. 주민등록 뒷자리까지."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이름부터 지우고 발표하면 안 돼?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "지우는 데 세 시간 걸려. 그 사이 다 퍼져."
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
						"korean": "린이 기사 초안 제목 줄에 '네트워크 점검'이라고 쳐 넣었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "점검 공지로 돌리자. 삼십 분이면 전화가 멎어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "거짓말이야. 나중에 들키면?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "들켜도 사람은 안 다쳐. 지금은 그것부터야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…공지 올려."
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
					"speaker": "narrator",
					"content": {
						"korean": "점검 공지가 뜨고 이십 분 뒤, 전화는 예순 건으로 줄었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "…근데 커뮤니티에 점검 로그 비교글이 올라왔어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "뭐가 달라. 점검은 했잖아."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "명단 백이십 명은 점검 중에도 갱신됐어. 숫자가 안 맞아."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 어떻게 해. 취소해?"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "취소하면 오늘 밤 전화 이천 건. 나는 그 숫자를 못 써."
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
						"korean": "송출실 서버 앞에 누군가 서 있었다. 화면에 명단 갱신 시각이 찍혀 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "점검 공지 잘 읽었어. 덕분에 오늘 밤 신고가 예순 건이야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그 명단 갱신, 점검 중에도 계속했잖아."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "너희 공지가 사람들 입을 막아 줬어. 나는 그 틈에 올렸고."
					},
					"emotion": "happy"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "서버 꺼도 소용없어. 네 공지 캡처는 이미 돌아."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "캡처?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "…내 기사 화면이 캡처됐어. 제목까지 그대로."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "송출실 문에 회로선으로 그린 W가 붙어 있었다. 새로 붙은 거였다."
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "공지 하나 더 써. 오늘은 재난 대피라고."
					},
					"emotion": "happy"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아침에 시청 대기 화면 꺼진 채로 두고, 명단 원본부터 뜯어."
					},
					"emotion": "angry"
				}
			]
		}
	]
} as const;
