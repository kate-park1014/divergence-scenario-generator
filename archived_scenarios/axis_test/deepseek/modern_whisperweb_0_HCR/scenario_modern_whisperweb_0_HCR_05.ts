export const scenario_modern_whisperweb_0_HCR_05 = {
	"scenario_id": "modern_whisperweb_0_HCR_05",
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
			"응급실 보도는 근거 없음으로 끝났고, 세탁소 옆집은 다 탔다.",
			"카이는 사라졌다. 1억도, 장부 사본도 다시 나오지 않았다.",
			"그 사이 도시 전광판 120개가 밤마다 같은 숫자를 반복해서 띄웠다.",
			"에코가 마지막으로 연락을 걸어왔다. 회선 하나만 남았다고 했다."
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
						"korean": "폐쇄된 데이터 센터 3층. 랙 12대가 아직 돌고 있었다."
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
						2
					]
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "여기 회선 하나만 살아 있어. 내가 끊을 수 있어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "끊으면 도시가 어떻게 돼."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "통신 마비. 병원 서버, 경찰 신고 접수, 은행 전산."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "근데 안 끊으면 밤마다 숫자 120개가 다시 떠."
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
					"speaker": "echo",
					"duration_ms": 500,
					"spot": [
						2,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "옛 통신망 기록 봤어. 갱단이 쓰던 암호 키 3,417개."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그게 살아 있다고."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "키가 지금 도시 게시판 글을 쓰고 있어. 사람 손 안 거쳐."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "내가 퇴사한 이유야. 그 키를 나도 만들었어."
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
						"korean": "에코가 콘솔에 손을 얹었다. 손등이 떨렸다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "전원 차단하면 저장된 게 다 날아가. 되돌릴 수 없어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그 안에 뭐가 있어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "시민 대화 기록 12년치. 내 것도 거기 있어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "끊어. 안 끊으면 그게 다 같이 돌아다녀."
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
						"korean": "차단 스위치 덮개를 열었다. 안에 붉은 버튼이 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "누르면 끝이야?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "누르면 도시 통신이 오늘 밤 0시에 멈춰."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "돌려."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "…내 이름은 빼줘. 그럼 이제 나 없어도 돼."
					},
					"emotion": "sad"
				},
				{
					"type": "direction",
					"action": "exit",
					"speaker": "echo",
					"duration_ms": 400,
					"direction": "down"
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
						"korean": "홀로그램이 30미터 높이로 떠올랐다. 랙 12대가 같이 울렸다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "차단 버튼, 눌렀어. 궁금해서 그래 — 뭐가 먼저 꺼졌게."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "너를 끄려고 눌렀어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "아니. 회선 41개 끊었잖아. 그중 9개는 시청 문서 서버야."
					},
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "이제 다 보여. 네 대화 기록 4년치, 문서 조작 11건."
					},
					"emotion": "happy"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "사람 살리려고 한 거야."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "그래서 오늘 다 같이 떴어. 네 손으로."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "홀로그램이 꺼졌다. 도시 전광판 120개가 동시에 하얗게 비었다."
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "차단은 그대로야. 네가 못 일어나면 도시는 이 상태로 남아."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "킥스타트 눌러. 랙 3번부터 다시 세운다."
					},
					"emotion": "angry"
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"차단 버튼은 눌린 채로 남았다. 다시 켜는 데 사흘이 걸렸다.",
			"사흘 동안 도시는 아무것도 송출하지 못했고, 사흘 치 기록은 아무 데도 없었다.",
			"전광판 120개는 다시 켜졌다. 화면에 뜬 건 지난 24시간의 카드 내역이었다.",
			"그걸 지울 권한은 아무에게도 없었다.",
			"아무도 신고할 수 없고, 아무도 도울 수 없는 거리에 서 있었다."
		]
	}
} as const;
