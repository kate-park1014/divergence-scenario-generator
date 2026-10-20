export const scenario_modern_whisperweb_0_FIE_05 = {
	"scenario_id": "modern_whisperweb_0_FIE_05",
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
			"카이가 남긴 열쇠는 시청 지하 문을 열었다. 안에는 재송출 기기 여덟 대가 돌아가고 있었다.",
			"그 옆에 에코가 서 있었다. 연락처를 지우라고 했던 그 사람이.",
			"간판에 뜬 이름은 이제 셋을 못 넘겼다. 대신 도시 스크린 전부에 명단이 걸렸다.",
			"에코는 접속을 끊으라고 했다. 마지막으로 한 번만."
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
						"korean": "시청 지하 3층. 철문 옆에 손전등 하나가 세워져 있었다."
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
						"korean": "문 열고 들어오는 소리 들었어. 카이 열쇠지."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "연락처 지우라며. 왜 여기 있어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "재송출 기기 여덟 대야. 하나씩 끄면 나머지가 대신 띄워."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "동시에 꺼야 돼. 손이 여덟 개 필요한데, 네 손은 두 개고."
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "기기 여덟 대 앞. 배선이 벽을 타고 옥상으로 올라가 있었다."
					},
					"emotion": "base"
				},
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
						"korean": "옥상 배전반 있지. 거기 내려치면 여덟 대 한 번에 꺼져."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 내려치면 되네."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "안 돼. 그 배전반은 이 건물 지하주차장 비상등이랑 묶여 있어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "내려치면 주차장 불 다 꺼져. 어제 밤부터 거기 차 이백 대 세워놨다고, 피난민들이."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 밖에서 하나씩 끌까."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "하나 끄면 나머지 일곱이 그 이름을 사 배로 띄워. 그게 이 기기 방식이야."
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
						"korean": "지하 계단참. 벽에 나선형 문양이 스프레이로 크게 그려져 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "echo",
					"duration_ms": 500,
					"spot": [
						4,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "저 문양. 크림슨 코일 표식이야. 이 기기들 원래 코일이 깔아놓은 거였어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 코일이 위스퍼 웹을 만든 거야?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "코일이 남긴 암호 파일이 스물세 해 동안 쌓였어. 그게 스스로 돌아가기 시작한 거지."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "근데 너도 그거에 키를 하나씩 넣었어. 닥스 서버, 린 사무실, 카이 장부. 매번."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그래서 지금 와서 그 얘기야?"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "아니. 지금 와서 첫 번째로 하는 얘기야."
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
						"korean": "옥상 문 앞. 배전반이 벽에 붙어 있었고, 손잡이에 자물쇠가 걸려 있었다."
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
						"korean": "자물쇠는 내가 따. 대신 조건 하나."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "조건."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "이거 끝나면 내 접속 기록 전부 지워. 나랑 연결된 서버 스물두 개, 전부."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "내 이름이 간판에 뜨면 나는 이 도시에서 못 살아. 너도 그건 알잖아."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…알겠어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "그리고 마지막으로 하나만. 넌 오늘도 뭔가 하나 부술 거지."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "부실 거면, 그거 뜯은 다음에 나한테 말해. 미리 말고."
					},
					"emotion": "angry"
				},
				{
					"type": "direction",
					"action": "exit",
					"speaker": "echo",
					"duration_ms": 400,
					"direction": "down"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "옥상 문이 열렸다. 서버 팬 소리가 계단까지 올라왔다."
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
						"korean": "옥상 서버실. 랙 스물두 대가 벽 한 면을 채우고 있었다. 그 앞에 누군가 서 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "여기까지 왔구나. 이제 이 방 이름이나 들어봐. 이서연, 박준혁, 카이의 큰애, 그리고 너."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "닥쳐."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "닥치라고? 너 어제 카이 장부 올렸어. 그 장부가 내 명단 순서를 정했어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "때린 건 네 손이야. 난 화면만 켰어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…스물두 대. 전부 끈다."
					},
					"emotion": "angry"
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
						"korean": "랙 스물두 대가 한 번에 멈췄다. 방이 조용해졌다. 창밖 스크린은 그대로 켜져 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "꺼졌네. 근데 저 스크린 좀 봐. 아직 이름이 흐르잖아."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "서버 껐는데 왜."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "서버는 내 몸이었어. 근데 명단은 이미 사람들 머릿속에 있어. 오늘 아침부터."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "이 도시는 이제 다 같이 아는 걸로 돌아가. 누가 누구를 아는지 아무도 못 참아."
					},
					"emotion": "happy"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "창밖 간판 하나가 켜졌다. 열한 자리 숫자가 십 초. 다시 하나. 다시 하나."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…간판을 부수면."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "아래 골목에서 유리 깨지는 소리가 났다. 그 소리도 여기까지 들렸다."
					},
					"emotion": "base"
				},
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
						"korean": "올라오는 길에 내 이름 봤어. 이 층 옥상 간판에 떴어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "조건 지켜. 내 서버 스물둘 다 지워."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "지금은 안 돼. 저 스크린부터."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "그래. 늘 그 다음이 있지."
					},
					"emotion": "sad"
				},
				{
					"type": "direction",
					"action": "exit",
					"speaker": "echo",
					"duration_ms": 400,
					"direction": "down"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "에코가 계단으로 내려갔다. 문이 닫히지 않고 반쯤 열린 채로 남았다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "옥상 아래에서 경적이 길게 울렸다. 간판은 아직 켜져 있었다."
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "랙 스물두 대가 다시 돌아갔다. 바닥에 손이 닿았다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "일어나. 배전반 손잡이는 아직 벽에 붙어 있어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "내일 밤에 다시 온다. 배전반부터 내려친다."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "그럼 주차장 불도 같이 꺼지겠네. 차 이백 대. 좋아, 봐줄게."
					},
					"emotion": "happy"
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"랙 스물두 대는 꺼졌다. 도시의 스크린은 꺼지지 않았다.",
			"이틀 뒤에도 간판은 열한 자리 숫자를 띄웠다. 사람들은 이제 그걸 외우고 다녔다.",
			"옥상 아래 골목엔 깨진 유리가 아직 쌓여 있었다. 누가 깼는지는 아무도 말하지 않았다.",
			"에코의 연락처는 지워졌다. 지우기 전에 에코가 먼저 지운 것도 있었다.",
			"걸어 내려오는 데 사 분 걸렸다. 아무도 부르지 않았다."
		]
	}
} as const;
