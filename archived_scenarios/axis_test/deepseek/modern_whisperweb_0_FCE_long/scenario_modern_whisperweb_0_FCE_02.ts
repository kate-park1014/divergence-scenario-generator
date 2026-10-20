export const scenario_modern_whisperweb_0_FCE_02 = {
	"scenario_id": "modern_whisperweb_0_FCE_02",
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
			"에코의 영상을 열었다. 대신 에코의 주소가 광고판에 올랐다.",
			"코일 하나를 들고 지하로 내려간다. 닥스의 작업실.",
			"닥스는 불법 데이터 복원을 처리하는 사람이다.",
			"그가 가진 고객 명단에 위스퍼 웹 관련 경로가 있다.",
			"강제로 뺀다. 협상은 처음부터 없었다."
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
						"korean": "지하 계단 끝, 철제 셔터에 신고된 번지수가 아닌 숫자가 스프레이로 덧칠해 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "여기가 닥스 작업실."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "dax",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "문 안 열어. 예약한 사람만 들어와."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "예약 안 했어. 코일 하나 가져왔어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "코일은 값이고. 뭘 복원해 달라는 거야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "복원 아니야. 위스퍼 웹 경로를 뽑아."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "…그건 내 장비로도 못 해. 고객 기록이 같이 딸려 나와."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "내 의뢰인 열두 명 이름, 계좌, 신분증 사본이 전부 여기 있어."
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
						"korean": "그러니까 그 코일 들고 나가. 그거면 내가 반값에 복원해 줄 수 있어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "반값 아니야. 전부야."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "사람 이름이 걸려 있다고. 내가 이거 팔면 애들 학교 못 가."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 싸우든가."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "작업대 위 복원 장치 팬이 돌아갔다. 케이블이 하나 빠져 바닥에 걸려 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "손대지 마. 그거 연결하면 명단부터 읽어."
					},
					"emotion": "sad"
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
						"korean": "잠깐. 그 허브는 위스퍼 웹 중계기도 같이 물려 있어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 더 좋네. 바로 붙이면 되겠어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "좋은 게 아니야. 그 허브는 내 장비를 통해서만 읽혀. 내 장비가 터지면 내용이 밖으로 나가."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "밖으로 나가면 누가 읽는데."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "위스퍼 웹이 읽어. 내 의뢰인들 이름이 광고판에 뜬다고."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…광고판은 나도 봤어. 오늘 열두 개."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "봤으면 알 거 아니야. 이거 붙이면 내가 그 열셋째가 되는 거야."
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
						"korean": "안 돼. 진짜 안 돼. 장치 온도 지금 83도야."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "케이블 물려."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "내일 밤에 하자. 냉각 팬 하나만 갈면 돼. 그거면 안 터져."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "내일은 없어. 광고판이 밤마다 올라가."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "장치 상단 표시창이 91도에서 멈추지 않고 올라갔다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "네가 손대면 나는 여기 못 남아. 이 동네에서 이름 뜨면 끝이야."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그래도 뽑아."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"action": "shake",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "장치 팬이 멈췄다. 케이스 틈으로 흰 연기가 새어 나왔다."
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
						"korean": "터진 장치 잔해 너머, 작업실 안쪽 문 앞에 누군가 서 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "그 허브, 원래 내가 붙여 둔 거야. 닥스한테 시킨 사람이 나고."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "네가 터뜨릴 줄은 몰랐지만. 덕분에 명단이 한 번에 올라갔네."
					},
					"emotion": "happy"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네가 시켰다고. 그럼 닥스는."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "닥스 이름은 아직 안 올렸어. 네가 대신 올려줬으니까."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "여기서 끝내."
					},
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "장치 하나 부쉈다고 끝이라 생각해? 명단은 이미 복사됐어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "이제 열두 명에서 4백 명으로 늘었어. 전부 네 케이블에서 나간 거야."
					},
					"emotion": "happy"
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
						"korean": "…내 의뢰인들 계좌, 지금 광고판에 떴어. 스물셋 번째 줄부터."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "닥스. 내가."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "말 하지 마. 지금 내 이름 아직 안 떴어. 경찰서에 신고하고 올게."
					},
					"emotion": "angry"
				},
				{
					"type": "direction",
					"action": "exit",
					"speaker": "dax",
					"duration_ms": 400,
					"direction": "down"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "계단 위로 발소리가 멀어졌다. 작업실 바닥에는 복원 장치 커버가 반쯤 녹아 붙어 있었다."
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "일어나. 아직 터미널 살아 있어. 네 손으로 마저 뽑아."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "안 뽑으면 닥스 이름부터 올린다. 뭐가 먼저일지는 네가 정해."
					},
					"emotion": "happy"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "케이블 말고 허브부터 끊는다. 다음엔 안 터져."
					},
					"emotion": "angry"
				}
			]
		}
	]
} as const;
