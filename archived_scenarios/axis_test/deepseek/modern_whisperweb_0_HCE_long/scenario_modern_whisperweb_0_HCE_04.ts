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
			"린은 자기 이름으로 거짓 공지를 낸 걸 인정했고, 구독 육백 명이 빠졌다.",
			"구청 앞 광장은 비었는데, 그 자리에 전화가 남았다.",
			"에코가 마지막으로 넘긴 단서는 '고스트 서킷'이라는 옛 갱단 이름이었다.",
			"그 갱단 출신으로 지금은 수리점을 하는 사람이 있다. 이름은 카이.",
			"그의 손에 위스퍼 웹 이전의 기록이 있다고 한다."
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
						"korean": "골목 안쪽, 형광등 하나 걸린 수리점. 간판에는 '카이 전자'라고만 적혀 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "카이 씨."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "kai",
					"duration_ms": 500,
					"spot": [
						5,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "문 닫았어. 수리 맡길 거면 내일 와."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "고스트 서킷. 그 이름으로 왔어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "…나가. 지금 당장."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "위스퍼 웹이 시청 기록 훔쳐서 광고판에 띄우고 있어. 그 이름들 원본이 네 손에 있다고 들었어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "여기 애 둘 키우는 가게야. 간판에 내 이름만 있어도 손님 반이 안 와."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "네가 여기 서 있는 것만으로 내 애들 위험해져."
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
					"speaker": "kai",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "아직 여기 있어? 어제 광고판 봤어. 열두 명 이름 올라왔더라."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네가 넘기면 멈출 수 있어. 장부만."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "장부는 금고에 있어. 이 가게 뒤 벽 안. 스물세 살 때 넣어놓고 한 번도 안 열었어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "왜 안 열었어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "열면 안에 든 이름 스물일곱 개가 같이 나와. 그중 여섯은 아직 살아 있어. 애들 데리고."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "그리고 금고 문에 옛날 방식 잠금이 걸려 있어. 억지로 열면 뒷면 회로가 타. 그 소리, 어디론가 간다."
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
					"speaker": "kai",
					"content": {
						"korean": "몰라. 그게 무서운 거야. 스물일곱 해 동안 한 번도 안 열어봤으니까."
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
						"korean": "수리점 뒷방. 벽 한쪽에 선반이 붙어 있었고, 그 뒤로 철판이 보였다."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "kai",
					"duration_ms": 500,
					"spot": [
						5,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "이거 봐. 금고 개방은 내가 해. 넌 뒤로 서."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "잠금 두 개야?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "아니. 하나는 다이얼, 하나는 회로야. 회로를 끊으면 안쪽에서 뭔가 튀어나와. 그게 뭔지는 나도 몰라."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 열지 마. 다른 길 찾자."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "다른 길이 어디 있어. 어제 광고판에 내 손님 이름이 올라왔어. 그 사람 아들 학교에 전화 왔대."
					},
					"emotion": "angry"
				},
				{
					"type": "direction",
					"action": "shake",
					"speaker": "kai",
					"duration_ms": 400
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "다이얼이 세 번 돌아갔다. 철판 안쪽에서 낮은 소리가 났다. 삐— 삐— 삐—."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이 소리 뭐야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "…몰라. 나 이 소리 처음 들어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "철판이 열렸다. 안에는 장부 한 권과, 장부 옆에 붙은 손톱만 한 검은 칩이 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "이건 내가 넣은 게 아니야. 장부만 넣었어."
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
						"korean": "수리점 앞길. 가게 유리창 안쪽에서 연기가 새어 나오고 있었다."
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
						"korean": "애들 어디 있어. 애들 어디 갔냐고."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "안에 있었어?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "큰애가 숙제하러 뒷방에 있었어. 조금 전까지 불 켜져 있었는데."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "구급차가 두 대 멈췄다. 들것 하나가 먼저 나왔고, 그 위에 아이가 누워 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "…야. 야, 눈 떠봐."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "카이 씨, 그 칩—"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "칩? 그 칩이 뭐야. 내가 뭘 넣었는데."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "네가 열자고 했어. 내가 열자고 했어? 내가 열자고 했냐고."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…미안해."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "미안하면 뭐 해. 내 애들 손에 화상 세 개씩 생겼어. 그걸 미안으로 덮어?"
					},
					"emotion": "angry"
				},
				{
					"type": "direction",
					"action": "exit",
					"speaker": "kai",
					"duration_ms": 400,
					"direction": "down"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "카이가 들것을 따라 걸어갔다. 장부는 아스팔트 위에 떨어져 펼쳐져 있었다."
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
						"korean": "수리점 옆 폐철물 창고. 철제 상자 두 개가 열려 있었고, 그 사이에 누군가 서 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "그 금고, 우리가 스물세 해 전에 넣어둔 거야. 장부 하나에 신호 발신기 하나. 누가 열면 알려주게."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "너희가 열게 만든 거야."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "아니. 카이가 스물일곱 해 동안 안 열었어. 오늘 열린 건 네가 조른 거야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "지금 장부 사본이 옛 조직 다섯 개 손에 돌았어. 그중 하나는 카이 아들 학교 주소도 샀어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "장부 원본은 여기 있어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "여기 있는 건 사본 만들어 파는 기계야. 원본은 이미 필요 없어."
					},
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "창고 안 기계 두 대가 꺼졌다. 벽면에 붙은 송신기 표시등도 같이 꺼졌다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "신호는 껐어. 근데 오늘 밤 그 신호 받아간 곳이 다섯이야. 걔들 전화번호는 내가 안 갖고 있어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "네가 첫 번째로 연 사람이야. 스물일곱 해 동안 아무도 안 했어."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "kai",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "병원에서 왔어. 큰애 손 세 바늘, 작은애는 팔 안쪽 화상. 둘 다 자고 있어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "카이 씨, 그 칩에 발신기가—"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "알아. 장부 첫 장에 적혀 있었어. '개봉 시 다섯 곳 송신'. 스물일곱 해 동안 안 읽은 내 잘못도 있어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "근데 네가 날 조용히 살게 놔뒀으면 이 일 없었어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…그래."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "장부는 내가 태울 거야. 스물일곱 명 이름, 다 같이. 더는 안 퍼지게."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "카이가 장부를 철제 드럼 안에 넣었다. 라이터를 켜자 이름들이 한 장씩 말려 올라갔다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "불빛 아래에서 장부 표지가 접히며, 가장자리의 회로선이 잠깐 드러났다. 'W' 모양이었다."
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "송신기 표시등이 다섯 개에서 여덟 개로 늘었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "네 신호도 같이 나갔어. 아까 네가 창고 문을 열었잖아."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "새벽에 카이 집부터 옮긴다. 다음엔 창고 기계 전원부터 뽑아."
					},
					"emotion": "angry"
				}
			]
		}
	]
} as const;
