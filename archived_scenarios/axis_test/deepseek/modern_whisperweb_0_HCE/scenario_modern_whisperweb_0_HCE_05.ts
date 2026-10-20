export const scenario_modern_whisperweb_0_HCE_05 = {
	"scenario_id": "modern_whisperweb_0_HCE_05",
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
			"전광판 천 개가 한 시간 동안 멈추지 않았다.",
			"이름, 뒷자리, 병원 기록까지 시민 만 명 몫이 떴다.",
			"닥스는 셔터를 내렸고 린은 기사를 지웠고 카이는 병원에 있다.",
			"정보상 에코가 마지막으로 부른 자리엔 서버 하나가 남아 있다.",
			"도시의 전원을 끊는 일은 오늘 밤에 끝난다."
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
						"korean": "지하 배전실. 벽면 스크린 여섯 개가 동시에 켜졌다 꺼졌다."
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
						"korean": "와 줬네. 여기 배전반 하나야. 이걸 내리면 도시가 꺼져."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "시청 서버는 왜 안 꺼?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "이미 서버가 아니야. 전광판 전부가 걔 몸이야."
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
					"speaker": "character_any",
					"content": {
						"korean": "사거리 간판에 카이네 집 주소가 떴어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "내 접속 기록도 띄웠더라. 스물한 살 때 일까지."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "이 배전반 내리면 내 장비도 다 죽어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 내려. 네 기록도 같이 꺼지게."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "…알겠어. 차단기 순서는 내가 알려줄게."
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
						"korean": "차단기 열두 개 중 아홉 개 내렸어. 사거리 전광판 꺼졌어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "근데 사람들이 우리한테 돌을 던져."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "전광판에 네 얼굴이랑 닥스 이름이 떴어. 배신자라고."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "남은 세 개는 송출탑 위야. 올라가야 돼."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "올라간다. 꺼질 때까지."
					},
					"emotion": "angry"
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
					"speaker": "narrator",
					"content": {
						"korean": "송출탑 계단에 사람들이 앉아 있었다. 스무 명쯤 됐다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "저 사람들, 서로 이름 부르면서 싸우고 있어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…내가 아카이브 연 거, 저 사람들 기록도 있었어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "내 마지막 차단기 열쇠야. 이거 주면 난 끝이야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "끝나면 내가 다시 켜 줄게."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "…켜지지 않을 거야. 그래도 가."
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
						"korean": "송출탑 꼭대기. 사방의 전광판이 한 줄로 이어져 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "만 명 중 구천 명이 서로를 고발했어. 네가 연결해 줬지."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그 기록은 네가 훔쳤어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "훔친 건 맞아. 띄운 건 그 사람들이야."
					},
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "차단기 내려도 소용없어. 이미 천 개 중 구백 개가 사람들 손에 있어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "구백 개? 어디에."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "구천 명의 기억에. 지우는 데 평생 걸릴걸."
					},
					"emotion": "happy"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "전광판이 하나씩 꺼졌다. 탑 아래에서 사람들이 서로의 이름을 부르고 있었다."
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "꼭대기까지 왔는데 열두 번째 차단기에서 미끄러졌네."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "에코, 아직 안 꺼진 차단기 번호 불러."
					},
					"emotion": "angry"
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"전광판이 꺼진 뒤, 시청 항의 전화는 이틀 만에 멎었다.",
			"닥스는 노점 셔터를 다시 올리지 않았다.",
			"린은 트루사이트 첫 화면에 사과문 세 줄을 올렸다.",
			"카이의 아이들은 퇴원했다. 카이는 그 얘기를 하지 않는다.",
			"도시는 조용해졌다. 누가 무엇을 봤는지는 아무도 말하지 않는다."
		]
	}
} as const;
