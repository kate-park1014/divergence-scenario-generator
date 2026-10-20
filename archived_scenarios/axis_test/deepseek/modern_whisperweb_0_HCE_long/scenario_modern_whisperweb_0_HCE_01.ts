export const scenario_modern_whisperweb_0_HCE_01 = {
	"scenario_id": "modern_whisperweb_0_HCE_01",
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
			"새벽 2시. 비가 그친 도시의 간판들이 아직 꺼지지 않았다.",
			"사흘 전부터 광고판에 이상한 게 뜬다. 이름. 주소. 열 초 만에 사라진다.",
			"정보상 에코가 밤 열한 시에 연락을 걸어왔다. 값은 현금 오천.",
			"나는 그를 만나러 갔다."
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
						"korean": "골목 끝, 꺼진 자판기 옆에서 에코가 손전등을 흔들었다."
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
						1
					]
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "돈은? 먼저 봐야 해."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "여기. 오천."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "팔천으로 올렸어. 취소한 사람이 둘이야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 나가겠다고 하면?"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "안 만나. 뭐가 무서운지 알았거든."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "에코가 손전등을 세워 올렸다. 골목 위 광고판에 흰 글씨가 깜빡거렸다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "'박서연 37세 3단지 402'. 네 초 만에 지워졌다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이게 뭐야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "내가 물어야 할 말인데. 일주일에 아홉 번이야. 사람 이름하고 주소가 그대로 떠."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "길드 간판도 저래. 위스퍼 웹이라는 이름, 들어봤나?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "처음 들어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "나도. 근데 어제 장물 연결책이 이 이름으로 값을 불렀어."
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
						1
					]
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "여기. 어제 광고판 제어함에서 뽑아낸 거야. 재생은 절반만 돼."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "에코가 찢어진 케이블에 물린 태블릿을 내밀었다. 화면이 세 번 깨졌다가 돌아왔다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "최하단부 광고판 아홉 개가 같은 시간에 멈췄어. 그게 자정 전에 찍힌 거야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "화면에 누군가의 집 현관이 비쳤다. 문 앞에 택배 상자 두 개, 신발장, 열쇠 꽂힌 자물쇠."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "이 집 아직 안 비었어. 영상 안에 문패가 있잖아."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "왜 이걸 나한테 줘."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "너 말고 줄 사람이 없어. 애들은 이거 만지면 경찰에 신고한다고 난리야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "그리고 마지막 열한 초에 글자가 떠. 소리 없이."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "화면 아래쪽에 문장이 섞여 지나갔다. '모든 비밀은 곧 공개될 것이다.'"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "그 아래 목록이 있었다. 번호 다섯 개. 각 줄 끝에 '사라짐'이라고 적혀 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "사라진 패킷 다섯 개?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "글쎄. 이 이상은 내 수준 밖이야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "이건 경찰에 넘기지 마. 신고 들어가면 그 집 주인부터 조사받아."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "...알겠어."
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
						4,
						1
					]
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "쫓아왔어. 이거 없으면 어디 갈 생각이었어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "중앙로. 간판 열두 개가 이 시간대에 같이 꺼졌어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "그 건물 관리실 열쇠는 경비가 목에 걸고 있어. 그 사람 시급 만 이천이야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "돈으로 되겠어?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "안 돼. 딸이 간호원인데, 병원비 때문에 움직이는 거야."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "옆 건물 유리벽에 간판 빛이 비쳤다. 회로선이 그려진 'W'가 삼 초쯤 떠 있다 사라졌다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "저거. 아까 골목에도 있었어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "낙서겠지."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "에코가 자기 손목 단말을 봤다. 화면 모서리에 같은 모양이 반 초 남았다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "...이거, 내 단말에도 있어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "언제부터."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "몰라. 오늘 처음 봤어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "중앙로 가면 관리실 말고 서버실도 있어. 지하 삼 층. 거기 들어가면 나오는 문 하나뿐이야."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "그래도 갈 거지."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "응."
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
						1
					]
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "지하 삼 층. 서버 랙 스물네 대가 서 있고, 열기가 얼굴에 붙었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "문 닫히면 여기서 나갈 길은 계단 하나야. 경비 순찰이 십 분마다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "알았어. 올라가."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "...안 올라가. 내가 이거 켜."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "에코가 랙 하나에 케이블을 물렸다. 랙 앞면 표시등이 전부 주황으로 바뀌었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "이거 누르면 내 계정이 이 서버 접속 기록에 남아. 이름하고 지문하고."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 하지 마."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "그럼 너 이 빌딩 검문에서 잡혀. 명단에 네 이름 이미 있어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "에코가 버튼을 눌렀다. 화면에 '접속 승인'과 함께 에코의 이름과 주민번호가 떴다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "이제 내 이름은 오늘 밤 도시에서 제일 많이 검색될 거야."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "왜 그랬어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "그 집 현관에 택배 두 개 있었어. 나도 그거 봤어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "계단 위에서 발소리가 났다. 하나가 아니었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "올라가. 계단 쪽으로는 못 가. 내가 여기서 시간 벌어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "...살아서 나와."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "exit",
					"speaker": "echo",
					"duration_ms": 400,
					"direction": "left"
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
						"korean": "옥상 송출실. 벽면 스크린 백여 개가 같은 화면을 켜고 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "서버 앞에 누군가 서 있었다. 이쪽을 보지 않았다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "박서연. 3단지 402. 오늘 열여섯 명 올렸어. 그중 셋은 집 앞까지 갔고."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그 사람들한테 뭘 원해."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "나한테 오는 돈은 한 사람에 사천 원이야. 이 화면 하나 유지하는 데 드는 전기값이 그거야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "네가 지하에서 버튼 누른 이름, 에코. 그것도 방금 올렸어. 조회수 좋아."
					},
					"emotion": "happy"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "..."
					},
					"emotion": "angry"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "서버 랙 하나가 꺼지고, 스크린 백여 개가 동시에 검게 죽었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "이거 하나 껐다고 뭐가 달라져. 내 위쪽에도 사람 있어. 그 사람들 서버는 이 층이 아니야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "위쪽이 누구야."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "알려줘도 못 찾아. 너희 이름도 목록에 있는데 뭘."
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
						1
					]
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "...계단에서 봤어. 시청 기록 서버에서 한 시간에 만 명씩 뽑혀 나가고 있어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "내 이름도 거기 있어. 지금 열두 번째로 떴어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "에코."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "됐어. 나보다 저거 봐. 사라진 패킷 다섯 개, 오늘 밤에 셋이 돌아왔어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "에코가 태블릿을 들었다. 목록 세 줄의 '사라짐'이 '회수'로 바뀌어 있었다."
					},
					"emotion": "base"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "스크린 백여 개가 한꺼번에 내 이름과 얼굴을 띄웠다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "지하에서 올린 거 확인했어. 응급실 서류 안에 네 주소도 있었어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "돌아와서 서버 전원부터 뽑을 거야."
					},
					"emotion": "angry"
				}
			]
		}
	]
} as const;
