export const scenario_modern_whisperweb_0_FIR_02 = {
	"scenario_id": "modern_whisperweb_0_FIR_02",
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
			"에코가 남긴 회선은 끊겼다. 대신 주소 하나가 남았다.",
			"9번가 지하, 낡은 기록실. 폐쇄된 아카이브 서버를 개인으로 복제해 둔 남자가 있다.",
			"이름은 닥스. 정부 아카이브에서 일했고, 지금은 자기 서버에 남의 기록을 쌓아둔다.",
			"주인공에게 필요한 건 단 하나 — 위스퍼 웹이 남긴 데이터 스트림의 해독이다."
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
						"korean": "9번가 지하 계단. 철제 선반마다 하드디스크가 층층이 쌓여 있었다."
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
						"korean": "문 두드리지도 않고 들어와요? 여기 남의 집이에요."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "에코가 보냈어. 이 주소."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "에코… 그 양반 아직 살아 있었어? 이름 뜬 사람이 어떻게."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이거 해독해. 위스퍼 웹이 뿌린 스트림이야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "안 해요. 이 서버에 있는 건 다 남의 재산 기록이에요. 손대면 나도 같이 뜨거워져요."
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
						"korean": "그거 열면 안 돼요. 껍데기만 열어도 안에 든 주민 4백 명 기록이 같이 새요."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "스트림만 뽑을 거야. 사람 정보는 안 건드려."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "스트림이 걔네 주민 기록 사이에 끼어 있어요. 같이 묶인 걸 못 풀어요."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 같이 딸려 나오게."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "…사람 말이 그렇게 나와요?"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "닥스의 손이 키보드에서 떨어졌다. 화면 아래 진행 바가 혼자 차오르기 시작했다."
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
						"korean": "멈춰요. 지금 이거 우리 서버가 아니라 저쪽으로 올라가고 있어요."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "어디로."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "위스퍼 웹 쪽으로요. 제가 8년 모은 연구 자료 3백 건이 지금 같이 올라갔어요."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "선반 위 하드 하나가 회전을 멈췄다. 닥스가 그걸 뽑아 바닥에 내려놓았다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "여기 있던 사람 4백 명 이름이랑 계좌가, 제 연구랑 섞여서 같이 나갔어요."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "스트림은 나왔어?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "…그걸 지금 물어요?"
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
					"speaker": "dax",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "제 이름도 올라갔어요. 방금 확인했어요. 이 화면에 지금 떠 있어요."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "닥스."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "그거 다시 제 손에 쥐여주지 마요. 나 이제 너 못 믿어요."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "닥스가 서랍에서 손바닥만 한 칩 하나를 집어 탁자에 올렸다. 단자는 부러져 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "이거 2009년 아카이브 폐기분이에요. 재생 안 돼요. 열 번 시도해서 열 번 다 오류만 났어요."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 왜 갖고 있었어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "모르겠어서요. 괜히 버리기 싫어서요."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "칩이 탁자 위에서 한 번 깜빡였다. 스피커가 잡음을 냈다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "『모든 비밀이… 연결된다…』 — 이 문장 뒤에서 끊겨요. 나머지는요?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…그건 내가 찾아."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "찾아서 뭐 하게요. 그거 뜯어낼 사람 이름 또 만들 거잖아요. 오늘 4백 명처럼."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "닥스가 칩을 주머니에 넣고 문가로 걸어갔다. 서버 팬 소리만 남았다."
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
						"korean": "기록실 안쪽 방. 꺼진 모니터 여섯 개 중 하나가 혼자 켜졌다. 서버 앞에 누군가 서 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "그 칩, 나도 못 열었어. 못 여는 걸 열겠다고 여기까지 온 거야?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "닥스 연구 자료랑 시민 4백 명 기록. 네가 묶었지."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "묶은 건 걔야. 걔가 남의 기록을 자기 서버에 복사해뒀으니까 한 번에 나갔지. 나는 주소만 알려줬어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "주소 알려준 값은 뭔데."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "글쎄. 네가 오늘 밟은 것도 계산돼 있어."
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
						"korean": "모니터가 하나씩 꺼졌다. 마지막 화면에 8-4-1-2-0이 떴다가 같이 사라졌다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "나 꺼진다고 걔네 이름 내려가는 거 아니야. 이미 복사본이 서른 개 넘어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "복사본 목록."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "그 칩 들고 다니는 사람한테 물어봐. 그 안에 답이 있다고 했으니까."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 자는 서버 랙 뒤로 사라졌다. 바닥에 닥스의 하드 하나가 굴러와 멈췄다."
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
						3
					]
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "…끝났어요? 제 서버는요."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "칩은 아직 네 주머니에 있잖아."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "이제 손대면 바로 신고할 거예요. 경찰이든 어디든."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "닥스가 계단을 올라갔다. 지하 창문 밖 광고판에 다시 오류 화면이 떴다."
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
					"speaker": "narrator",
					"content": {
						"korean": "닥스가 탁자 밑에 엎드려 있었다. 모니터에는 이름 수십 개가 한 줄씩 올라갔다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "걔 서버 아직 꺼지지 않았어. 다음엔 이 방 말고 12층 송출실로 와."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "…12층 올라가면 저 사람 이름부터 내려요?"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "12층 가서 송출 랙부터 뽑는다. 그 전에 칩 건져."
					},
					"emotion": "angry"
				}
			]
		}
	]
} as const;
