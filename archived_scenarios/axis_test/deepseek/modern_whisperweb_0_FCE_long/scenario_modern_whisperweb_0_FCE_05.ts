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
			"카이의 장부가 그대로 전송됐다. 서른일곱 건 중 스물아홉 건은 이미 밖으로 나갔다.",
			"골목에 몰려온 사람들이 전파상 유리를 다 부쉈다. 카이는 그 자리에 없었다.",
			"그 밤으로 도시의 광고판이 전부 켜졌다. 꺼지지 않았다.",
			"이름, 주소, 진료 기록, 문자 내용까지. 십 초마다 새 줄이 올라온다.",
			"에코가 연락을 끊었다. 마지막 문자는 다섯 글자였다. '전부 끊어.'"
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
						"korean": "시내 광고판 열두 개가 동시에 켜져 있었다. 한 화면에 이름 서른 줄씩, 십 초마다 넘어갔다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "에코. 문자는 봤어. 어디 있어."
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
						3
					]
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "여기. 이 골목은 아직 안 켜졌어. 하루 남았어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "'전부 끊어'가 무슨 뜻이야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "위스퍼 웹은 서버 하나에 있는 게 아니야. 도시 전력망 위에 얹혀 있어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "송출실 하나 끈다고 안 죽어. 열아홉 개 구간을 동시에 내려야 해."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 열아홉 개 전부 내리면 돼."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "내리면 병원도 같이 내려가. 작년처럼."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "알아. 그래도 지금 이거 못 멈추면 더 나가."
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
						3,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "여기. 이 계단 밑에 송출실 하나 있어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "계단 벽에 붉은 장미 모양 스프레이가 세 번 겹쳐 있었다. 케이블을 타고 바닥까지 이어져 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "그 낙서 요즘 다섯 군데서 봤어. 전부 케이블 있는 데야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "옛날 장미단 표시잖아."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "그 사람들은 케이블 깔 때 표시했어. 관리하는 사람만 알게."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "이 계단 케이블이 아직 살아 있어. 누가 계속 관리하고 있다는 뜻이야."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 관리하는 사람부터 찾자."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "찾으면 조심해. 문 열기 전에 배전반부터 봐. 케이블이랑 배전반이 같이 묶여 있으면 죽은 사람 나와."
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
					"duration_ms": 450,
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "기다려. 내 태블릿에 뭐가 붙었어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "태블릿 화면이 세로로 찢어졌다. 재생 안 되는 오류 창 스물세 개. 그 아래 음성 파일 하나."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "들려. 20년 전 녹음이야. 장미단이 케이블 깔면서 남긴 거."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "뭐라고 하는데."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "'모든 비밀이 연결된다.' 그리고 구간 번호 열아홉 개를 읽어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "그중 하나가 나야. 내 주소가 광고판에 뜬 게 그 구간에서 나갔어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 그 열아홉 개 끊으면 네 이름도 같이 끊겨."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "응. 동시에 끊어야 해. 하나씩 끊으면 나머지 구간이 백업을 밀어 넣어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "한 번에. 손 떼면 다시 못 잡아."
					},
					"emotion": "base"
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
						3,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "에코의 손에 태블릿이 없었다. 양손에 절연 장갑을 끼고 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그 장갑 뭐야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "내가 배전반 안에 들어가."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "안 돼. 열아홉 개 구간이 한 회선으로 묶여 있으면."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "묶여 있어. 그래서 사람이 안에 있어야 동시에 내려."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "내 이름은 이미 떴어. 지금 내가 뭘 하든 안 바뀌어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "...다른 방법 찾아."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "없어. 그리고 하나 더. 송출실 안에 아직 사람이 있어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "내가 들어가면 장갑 끼고 스위치 내려. 그때 네가 안쪽 문 열어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "에코가 배전반 철문을 열었다. 안쪽에서 흰빛이 새어 나왔다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "가."
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
						"korean": "송출실 안, 콘솔 앞에 누군가 서 있었다. 코트 자락이 바닥 케이블에 닿아 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "장갑 낀 사람이 배전반에 들어갔더라. 문 닫히는 소리 여기까지 들렸어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네가 사람들 이름 올렸어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "올린 건 네가 뽑은 명단이야. 난 구간만 열었어. 열아홉 개, 오늘 밤 다 열려 있어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "골목 노인은 병원 갔고, 닥스 의뢰인은 계좌가 나갔고, 장부 피해자는 골목으로 몰려왔어. 전부 너 손에서 시작됐어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "끊어. 지금."
					},
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "콘솔이 내려가며 코트가 찢어졌다. 그 안에서 발광하는 광섬유 수천 가닥이 쏟아져 나왔다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "구간 열아홉 개는 내려갔어. 근데 이제 위쪽으로 올라가."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "광섬유가 빌딩 벽을 타고 올라갔다. 광고판마다 그의 얼굴이 금 간 채로 번졌다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "네 두려움, 네 거짓말, 네 제일 깊은 것까지. 전부 여기 있어. 이제 네 거야."
					},
					"emotion": "happy"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "광고판 아래로 사람들이 몰려나왔다. 누군가 웃고 있었다. 스크린에는 자기 이름이 떠 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "...끊었는데 왜 더 켜져."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "배전반 철문이 안쪽에서 두드려졌다. 세 번, 그리고 멈췄다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "태블릿 화면에 마지막 파일이 남아 있었다. 파일 이름 칸이 회색으로 비어 있었다."
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "콘솔이 그대로 켜져 있었다. 광고판이 십 초마다 새 이름을 넘겼다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "장갑 낀 사람 아직 배전반 안에 있어. 스위치 안 내려갔어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "내일 밤에 다시 와. 그때는 저 사람 이름이 열아홉 구간 전부에 뜰 거야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "배전반부터 연다. 스위치 내리기 전에 에코 꺼내고."
					},
					"emotion": "angry"
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"구간 열아홉 개가 내려갔다. 광고판은 꺼지지 않았다.",
			"다음 날 아침, 도시의 스크린은 켜진 채였다. 이름 대신 얼굴이 떠 있었다.",
			"사람들은 자기 이름을 지우려고 서로의 화면을 부쉈다. 경찰은 아무도 출동하지 않았다.",
			"배전반 철문은 열렸다. 안에 있던 사람은 나오지 않았다.",
			"에코의 태블릿은 아직 켜져 있다. 파일 이름 칸은 여전히 회색이다."
		]
	}
} as const;
