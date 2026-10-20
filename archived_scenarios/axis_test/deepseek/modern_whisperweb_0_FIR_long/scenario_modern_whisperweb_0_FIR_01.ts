export const scenario_modern_whisperweb_0_FIR_01 = {
	"scenario_id": "modern_whisperweb_0_FIR_01",
	"order": 1,
	"act": "intro",
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
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"비 내리는 새벽 2시. 도시의 광고판이 한 번씩 깨진다.",
			"화면에 뜬 건 이름과 계좌번호 — 10초면 사라졌다.",
			"정보상 에코가 골목 끝 단말기 앞에서 기다린다.",
			"그가 오늘 건네는 영상에는, 아직 아무도 모르는 문장이 들어 있다."
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
						"korean": "지하철 폐쇄된 3번 출구 옆. 형광등 하나가 뚝 끊겼다 켜졌다 했다."
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
						"korean": "늦었어. 삼 분."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "길에서 간판이 깨졌어. 이름이랑 계좌번호가 떴다가 사라졌어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "그거 이번 주만 열두 건이야. 다 똑같아. 십 초 뜨고 사라져."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "이거 봐. 어제 새벽에 우리 단말기로 들어온 파일이야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "낡은 화면에 열한 초짜리 영상이 돌았다. 목소리도 얼굴도 없이, 자막만 떴다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…'모든 비밀은 곧 공개된다.' 이게 다야?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "다. 근데 파일 하나가 더 붙어 있었어. 여기 들어 있는 사람 이름이 우리가 아는 애들이야."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "어디서 온 거야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "그걸 알아내려고 이 골목에서 삼 년을 앉아 있었어."
					},
					"emotion": "angry"
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
						"korean": "번화가 횡단보도. 광고판 네 개가 동시에 같은 재생 오류 화면을 띄웠다."
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
						"korean": "방금 봤지. 간판에 8-4-1-2-0. 저 숫자 어제도 나왔어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 뜻인데."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "모르니까 무서운 거야. 세 번 봤어. 같은 시간대에 같은 자리에서."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이 파일 원본 만들어낸 데가 있어?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "송출 경로가 옛 정부 아카이브 서버를 거쳐. 그 서버 지금 폐쇄됐고."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "거기 들어가면 내 단말기 먼저 죽어. 그래서 너를 부른 거야."
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
						"korean": "폐쇄된 아카이브 건물 앞. 돌계단에 봉인 스티커가 다 뜯겨 있었다."
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
						"korean": "이 안에 들어가면 내 도움은 끝이야. 단말기 전원 끊고 여기서 나갈 거야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "왜."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "이 파일 붙잡은 애들 셋이 실종됐어. 마지막이 나한테 전화해서 '이름이 떴다'고만 말했어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "누구 이름."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "자기 이름. 광고판에 자기 이름 석 자가 떴다고."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "…그러니까 거기 들어가서 뭘 건드릴지 골라. 봉인된 로그는 건드리면 이 건물에 남은 기록 전부가 밖으로 나가."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "알겠어."
					},
					"emotion": "base"
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
			"id": 9,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "서버실 계단참. 벽에 스프레이로 그어진 문양이 세 번 반복돼 있었다. 꺾인 선, 그 안의 점 두 개."
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
						"korean": "…안 나갔어. 못 나갔어. 계단 올라오는데 단말기가 혼자 켜졌어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "뭐가 떴는데."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "내 이름이랑 1998년에 산 아파트 호수. 그거 어디에도 안 적어놨어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "지금 돌아가면 늦어. 내 이름 이미 뜬 거야. 나 대신 아무 데도 연결 안 된 회선 하나 남겨뒀어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그 회선 어디로 붙어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "여기 위층. 송출 장비 있는 방. 거기서 파일 하나만 뽑아내면 내 이름 뜨는 건 멈춰."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "에코는 계단에 앉아 단말기를 무릎에 올렸다. 손가락이 떨렸다."
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
						"korean": "송출실. 모니터 스물네 개가 동시에 켜졌다. 서버 랙 앞에 누군가 앉아 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "문 안 잠갔네. 그럼 들어와도 되는 거지."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네가 이름 띄웠어?"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "띄운 건 맞아. 근데 데이터는 다들 스스로 올려둔 거야. 나는 순서만 바꿨어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "네 정보상은 이미 자기 이름 봤고. 오늘 밤에 하나 더 볼 거야."
					},
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…이거 하나 부순다고 멈추는 게 아니야. 나도 목록에 있었어. 순서만 빠를 뿐이지."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "목록이 어디 있어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "이미 아카이브 통째로 걸어놨어. 취소는 없어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "서버 랙 팬 소리만 남았다. 창밖 광고판 하나가 꺼졌다가, 다시 켜졌다."
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
						"korean": "…내 이름 안 떴어. 대신 옆 동네 이름이 떴어. 서른세 명."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "에코. 너 여기 있어. 손 떨지 마."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "이미 늦었어. 난 알아. 이거 막으려면 서버 하나 부수는 걸로 안 돼."
					},
					"emotion": "sad"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "바닥에 엎드린 채로 잘 봐. 지금 옥상 간판에 네 이름 뜨는 중이야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…계단 옆 회선 아직 살아 있어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "에코가 무릎의 단말기를 바닥에 내려놓았다. 화면은 아직 켜져 있었다."
					},
					"emotion": "base"
				}
			]
		}
	]
} as const;
