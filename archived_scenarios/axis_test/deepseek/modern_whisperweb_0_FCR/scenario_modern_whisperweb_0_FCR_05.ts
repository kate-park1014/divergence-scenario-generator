export const scenario_modern_whisperweb_0_FCR_05 = {
	"scenario_id": "modern_whisperweb_0_FCR_05",
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
			"간판에 88쪽 장부가 그대로 올라갔다. 애들 40명 동호수까지.",
			"위스퍼 웹이 다음 공격을 예고했다. 시민 100만 명 기록.",
			"에코가 아직 살아 있다. 조직 말단으로 전광판 조작반에 있다.",
			"오늘 밤, 그 조작반을 끊으러 간다."
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
						"korean": "전광판 통제실 유리벽 너머, 12개 화면에 이름이 내려가고 있었다."
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
						"korean": "아직 여기 있어. 아직은 내 손이야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "에코. 무슨 발주 받았어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "백만 건. 명단 압축 풀어서 12개 화면에 나눠 올리래."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "올리면 어떻게 되는데."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "계좌 잔액이 이름 옆에 붙어. 병력까지."
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
						"korean": "조작반에 네 아이디가 등록됐어. 열쇠는 내 카드."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 네 카드 뽑으면 12개 화면 다 꺼져?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "꺼져. 대신 내 카드 기록도 다 지워져."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "지워지면 넌 뭐가 남아."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "몰라. 3년 동안 올린 게 전부니까."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "화면 모서리에 4471이 섞여 들어갔다. 곧 사라졌다."
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
						2
					]
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "이상해. 메시지가 자꾸 바뀌어. 내가 안 쓴 문장이 붙어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "뭐가 붙는데."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "'네 것도 곧 네 것이 될 거야'. 반복돼."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "누가 붙이는지 알아?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "몰라. 근데 오늘 아침부터 내 이름을 기억 못 해."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "주민등록을 대 봤는데, 내 사진이 없어."
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
						"korean": "조작반 유리문이 잠겼다. 안쪽에서 12개 화면이 동시에 올라가기 시작했다."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "echo",
					"duration_ms": 400,
					"spot": [
						2,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "시작됐어. 1분에 8만 건씩."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "카드 뽑으면 멈춰?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "멈춰. 근데 이제 카드 안 뽑으면 백만 건 다 나가."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "뽑아. 내 기록은 상관없어. 지금 뽑아."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…기록 들고 튀어. 뽑는 건 내가 한다."
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
						"korean": "조작반 앞에 누군가 서 있었다. 케이블을 12개 화면에 나눠 꽂고 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "네 기록 다 봤어. 강남 골목에서 등짝 때린 거, 영장 위조한 거."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "지금 백만 건 중 41만 건 나갔어. 나머지도 붙일까?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그 케이블 뽑아."
					},
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "네 두려움, 네 거짓말, 네 가장 깊은 치부까지! 전부 나에게 있어!"
					},
					"emotion": "happy"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "그리고 이제... 네 것이 될 거야!"
					},
					"emotion": "happy"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "화면 12개가 꺼졌다. 시내 광고판 3400개가 동시에 켜졌다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…내가 뽑은 거야. 내가."
					},
					"emotion": "sad"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "백만 건 다 올라갔어. 네 주소는 맨 위에 있어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "에코. 조작반 전원 말고 케이블부터 뽑아."
					},
					"emotion": "angry"
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"광고판 3400개가 밤새 이름과 잔액을 반복해서 띄웠다.",
			"아침이 되자 도시는 조용해졌다. 서로의 잔액을 아는 사람들만 남았다.",
			"에코의 기록은 남지 않았다. 이름을 대는 사람도 없었다.",
			"주인공이 뽑은 케이블은 정확했다. 그래서 더 나갔다."
		]
	}
} as const;
