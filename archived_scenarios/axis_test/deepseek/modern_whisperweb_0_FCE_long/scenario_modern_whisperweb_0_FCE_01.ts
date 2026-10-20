export const scenario_modern_whisperweb_0_FCE_01 = {
	"scenario_id": "modern_whisperweb_0_FCE_01",
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
			"비가 그친 새벽, 뒷골목 간판들이 저마다 다른 이름을 띄웠다.",
			"이름 옆에는 대출 금액과 연체 일수가 붙어 있었다.",
			"십 초. 그러고는 전부 꺼졌다.",
			"정보상 에코가 오늘 밤 그 영상을 넘긴다고 했다."
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
						"korean": "골목 끝, 폐가 된 세탁소 간판이 깜빡였다. 07 04 1993 이라는 숫자만 떠 있었다."
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
						"korean": "늦었어. 간판 켜지는 거 봤지?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "저 숫자, 뭐야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "생년월일이야. 골목 안쪽 사는 노인 거."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "...그 사람 지금 어디 있어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "찾지 마. 찾으면 너도 그 간판에 올라가."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "값은 현금 아니야. 데이터 복원 장치 코일 하나. 구할 수 있겠어?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "구하지."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "그럼 이리 와. 보여줄 게 있어."
					},
					"emotion": "base"
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
						"korean": "이거. 출처가 없어. 발신 기록도, 파일 이름도."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "영상이 재생되긴 해?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "3초만 돼. 그 뒤엔 전부 회색 화면이야."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "focus",
					"speaker": "narrator",
					"duration_ms": 600
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "화면에 검은 글씨가 떴다. '모든 비밀은 곧 공개될 것'."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "어제까지 이 영상 받은 사람이 넷이야. 셋은 연락 끊겼어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네 번째는."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "내야. 그리고 이제 너한테 넘기면 나는 빠지는 거야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "골목 건너 광고판이 깨진 픽셀로 뒤집혔다. 이름 하나와 주소 한 줄. 10초 뒤 사라졌다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "봤지. 저게 하루에 예닐곱 번씩 뜬대. 시청 기록이랑 똑같은 순서로."
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
						"korean": "지하철 3번 출구, 전파상 쪽으로 가지 마. 오늘 밤거리 순찰 돌아."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "피하면 더 의심받아."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "그럼 제 시간에 들어가. 저기 기록실 문은 새벽 두 시에 잠가. 두 시 넘으면 층 전체가 네 이름을 외쳐."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "에코. 너 왜 이렇게까지 알려주는 거야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "작년에 내 고객 명단이 광고판에 뜬 적 있어. 이름하고 집 주소까지."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "난 그 뒤로 여기서 장사해. 밖에 못 나가."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "알겠어. 새벽 두 시 전에 들어가."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "...한 가지 더. 내 이름이 간판에 뜨면, 영상은 네가 갖고 있어."
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
					"duration_ms": 400,
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "못 가."
					},
					"emotion": "angry"
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
						"korean": "밤 열한 시에 광고판이 열둘 올렸어. 그중 하나가 내 거야. 골목 주소까지 같이."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "에코, 지금 당장 나와. 같이 가."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "안 나가. 여기서 기다릴 거야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "영상, 네 손에 있잖아. 그거 열면 내 주소가 전부 풀려. 지금 내 이름만 뜬 걸로는 아무도 안 왔어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 안 열어. 열 필요 없어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "아니. 열어야 해. 내가 지우면 기록이 남아. 네가 열어야 삭제가 돼."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "에코가 낡은 태블릿을 건넸다. 파일 이름 칸이 회색으로 비어 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "...열면 네 주소가 퍼질 거라고."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "이미 퍼졌어. 오늘 열두 명 중에 난 마지막이야."
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
						"korean": "서버 랙 사이에 누군가 서 있었다. 손에 평범한 노트북 하나."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "그 영상, 열었어? 열었으면 네 이름도 같이 올라갔겠네."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네가 이 짓을 하고 있었어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "난 순서만 정했어. 누구 걸 먼저 올릴지."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "골목 노인은 여섯 시간 뒤에 병원 갔어. 기다리다가."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "{random_boss}. 여기서 끝내."
					},
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "노트북은 부쉈겠지. 데이터는 사본이야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "그리고 네가 영상 튼 순간, 에코 주소는 이미 나갔어."
					},
					"emotion": "happy"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 에코가 있는 데로 가."
					},
					"emotion": "angry"
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
						"korean": "여기 있어. 문은 아직 잠겨 있었어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "대신 방금 열둘째 이름이 떴어. 내 거. 다음은..."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "전파상 카이. 20년 된 장부 얘기가 나왔어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "에코의 손이 태블릿 위에서 멈췄다. 화면에 붉은 반점 모양 낙서가 잠깐 겹쳐 보였다."
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "일어나 봐. 네 이름은 아직 안 올렸어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "내일 아침에 올릴까. 아니면 골목 노인부터 다시 볼래?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "내일 새벽. 전파상 카이부터 턴다."
					},
					"emotion": "angry"
				}
			]
		}
	]
} as const;
