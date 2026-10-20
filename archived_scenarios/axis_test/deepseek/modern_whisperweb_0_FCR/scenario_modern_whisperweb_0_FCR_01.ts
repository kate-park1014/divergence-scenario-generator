export const scenario_modern_whisperweb_0_FCR_01 = {
	"scenario_id": "modern_whisperweb_0_FCR_01",
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
			"사흘째, 광고판이 이상하다.",
			"주민 이름이 10초쯤 떴다가 사라진다. 이름, 주소까지.",
			"정보상 에코가 밤 열두 시에 부른다. 전광판 조작반 근처에서.",
			"그를 잡으러 가는 밤이다."
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
						"korean": "간판이 깜빡였다. 주민 이름 석 자, 주소 한 줄. 그리고 꺼졌다."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "echo",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "늦었네. 조작반은 이미 돌아갔어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "광고판에 이름 띄운 거, 네 짓이지."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "난 올린 사람이야. 문장은 안 썼어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "이거 봐. 신호 끊기기 직전에 남은 거야."
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
					"spot": [
						2,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "이 영상 11초야. 재생되다 매번 끊겨."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "화면에 숫자 배열이 스쳤다. 4471, 004, 339."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이 번호들은 뭐야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "몰라. 근데 매번 같은 순서로 깨져."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "문장은 딱 하나 나와. '모든 비밀은 곧 공개될 것'."
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
					"spot": [
						4,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "내 계정에 발주가 300건 넘게 찍혔어. 내가 안 한 거야."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "누가 네 아이디로 시킨 거야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "나보다 윗선. 걔네가 내 기록을 통째로 보고 있어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "지금 끊으면 옛날 발주도 다 지워져. 근데 날 지워."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그래도 계속 켜 둘 거야?"
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
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "서버실 문이 열렸다. 안쪽 랙 12대가 동시에 돌고 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "여기야. 오늘 밤 1시에 34만 건 올라가."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그 안에 뭐가 들었는데."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "이름, 주소, 병력. 내 이름도 그 안에 있어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "…내 손 못 믿겠으면, 네가 꺼."
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
						"korean": "서버 앞에 누군가 서 있었다. 손에 케이블을 쥐고."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "발주는 내가 넣었어. 이름만 올리면 돼서 편했지."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "네가 {random_boss}를 때리면 명단이 더 퍼져. 해볼래?"
					},
					"emotion": "happy"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "케이블 놔."
					},
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "그 서버, 34만 건은 안 올라가. 근데 이미 8만 건 나갔어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "8만."
					},
					"emotion": "sad"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "echo",
					"spot": [
						2,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "내 이름도 그 8만에 있어. 이제 시내 전체가 알아."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "랙 12대가 멈췄다. 광고판은 아직 이름을 반복해서 띄우고 있었다."
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "1시 정각이야. 네 이름도 같이 올려줄게."
					},
					"emotion": "happy"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "내일 밤 송출실부터 끈다."
					},
					"emotion": "angry"
				}
			]
		}
	]
} as const;
