export const scenario_modern_whisperweb_0_FCR_05 = {
	"scenario_id": "modern_whisperweb_0_FCR_05",
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
			"카이의 명단 마흔일곱 줄이 광고판에 섰다. 열아홉 집 아이들 이름까지.",
			"그로부터 세 시간 뒤, 도시 전광판 612개가 동시에 켜졌다.",
			"이름·주소·혈액형·잔고. 시민 100만 명분이 한 화면에 내려갔다.",
			"에코의 계정으로 올라간 문구는 여전히 남아 있다. 에코를 찾는다."
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
						"korean": "구청 앞 사거리. 전광판 하나가 시민 이름 스물두 줄을 3초씩 넘기고 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "100만 건이라고 들었어. 지금 몇이야."
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
						"korean": "지금 이 초에 서른한 줄씩 넘어가. 계산해 봐."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "에코. 네 계정으로 올라간 문구가 아직 있어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "알아. 근데 그거 지금 문제가 아니야. 잔고가 붙었어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "이름만 뜨면 창피하고 끝인데, 잔고는 다음 날 대출 회수가 오거든."
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
					"duration_ms": 400,
					"spot": [
						2,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "이쪽으로. 서 있으면 압사해. 아까 중앙로에서 열한 명 다쳤어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "어디로 가는데."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "송출 구역. 근데 나 지금 내 손이 무서워."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "새벽 세 시에 내 단말이 저절로 켜졌어. 손 안 대고 문장이 넣어졌어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "그 문장, 나 안 쓴 말투야. 근데 내 손으로 확인했어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "간판 하나가 깨졌다. 4471, 4471, 4471 하고 주소를 세 번 넘겼다."
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
					"speaker": "echo",
					"duration_ms": 400,
					"spot": [
						2,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "여기. 이 계단 위가 옛 송출 구역이야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "계단 참 벽에 문양이 서른두 개 그려져 있었다. 전부 같은 각도였다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "카이 장부에 있던 블랙아웃 표시랑 똑같아."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "그거 반년 전에 폐지된 표시야. 우리 조직에서 안 써."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네 조직?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "…문구 넣는 데도 위아래가 있어. 난 맨 아래야."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "근데 어제부턴 위에서 오는 지시가 전부 '연결'이야. 연결해, 연결해, 연결해."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "뭘 연결해."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "모르겠어. 나도 이제 내가 뭘 하는지 모르겠어."
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
						2
					]
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "송출실 문이 안쪽에서 잠겨 있었다. 문틈으로 팬 소리와 키보드 소리가 났다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "문 열려. 내 손으로 열어. 나 지금 내 손 못 믿겠어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "에코. 손 내려."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "저 안에 회선 스물여덟 개 있어. 다 끊어. 1번부터 28번까지 순서대로."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "끊으면 서버 기록도 같이 죽어. 누가 명령 내렸는지 증거도."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "증거는 어차피 못 써. 그 문장 내 계정으로 올라갔어. 내가 범인이야."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "근데 아직 잔고 안 뜬 이름이 삼만 줄 남았어. 끊으면 그 삼만 명은 안 걸려."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "에코가 계단 난간을 붙잡았다. 손톱 밑이 하얗게 질려 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "내가 못 하겠으면 너라도. 부탁해."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "문이 열렸다. 서버 랙 스물여덟 대가 늘어선 방. 맨 끝 의자가 돌아갔다."
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
						"korean": "회선 스물여덟 개가 깜빡이는 방. 의자 하나가 천천히 돌아왔다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "삼만 줄 남았어. 끊으러 왔지?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "100만 명 잔고까지 띄운 건 너야."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "띄운 건 나야. 근데 모은 건 나만 한 게 아니야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "회선 28번부터 끊는다."
					},
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "회선 스물여덟 개가 하나씩 꺼졌다. 랙 팬 소리가 멎었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "…근데 마지막 회선은 내가 아니야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "뭐."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "네 두려움, 네 거짓말, 네 가장 깊은 치부까지! 전부 나에게 있어! 그리고 이제… 네 것이 될 거야!"
					},
					"emotion": "happy"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "전광판 612개가 동시에 켜졌다. 화면에 뜬 건 이름이 아니라 조회 기록이었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "카이의 세탁소, 닥스의 서버, 린의 초안. 전부 누가 언제 열람했는지가 떴다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…내 이름으로 남아 있어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						1,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "봤어. 광고판. 이제 도시가 너를 알아."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…삼만 명은 살았어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "응. 살았어. 근데 백만 명은 이제 내 이름부터 봐."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "에코가 회선 1번 잭을 뽑아 주머니에 넣었다. 방 소리가 전부 꺼졌다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "창밖 광고판 하나가 꺼지지 않고 4471만 반복해 띄웠다. 그 집 앞에 사람들이 서 있었다."
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "삼만 줄 다 올라갔어. 네가 회선 세는 동안에."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "의자가 다시 돌아갔다. 회선 28번 잭이 바닥에 떨어져 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "내일 새벽 네 시에 1번 잭부터 뽑아. 내가 손 붙잡고 있을게."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네 손은 네가 붙잡아. 대신 1번 잭 위치를 알려줘."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "에코가 계단으로 내려갔다. 광고판 612개 중 611개가 켜져 있었다."
					},
					"emotion": "base"
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"회선 28개가 꺼졌다. 전광판 612개도 꺼졌다.",
			"사흘 뒤, 사람들이 다시 광고판 아래에 모였다. 자기 이름을 찾으러.",
			"누가 무엇을 열람했는지 남은 기록은 지워지지 않았다.",
			"에코는 회선 1번 잭을 목에 걸고 다녔다. 아무에게도 안 보여주고.",
			"도시는 조용해졌다. 조용한 게 무서웠다."
		]
	}
} as const;
