export const scenario_modern_whisperweb_0_HCE_05 = {
	"scenario_id": "modern_whisperweb_0_HCE_05",
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
			"카이가 태운 장부의 연기가 아직 골목에 남아 있다.",
			"하지만 그 신호를 받아간 곳이 다섯이다. 그중 한 곳이 오늘 밤 도시 전체를 켰다.",
			"천 개 광고판에 시민 만 명의 이름과 빚과 병력이 함께 떴다. 한 시간 동안.",
			"에코가 마지막으로 연락을 걸어왔다. 목소리가 배경 소음에 반쯤 먹혀 있었다.",
			"지금 남은 건 도시 중심부의 송출탑 하나다."
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
						"korean": "광장 대형 전광판에 이름이 초당 세 개씩 올라갔다. 지나가던 사람이 자기 이름을 보고 멈춰 섰다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "저거 내 이웃이야. 402호."
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
						3
					]
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "거기 서 있어. 지금 사람들 사이로 못 지나가."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "에코. 네 이름은 안 떴어?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "열두 번째로 떴어. 아까. 그래서 얼굴 가리고 다녀."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "이 광장 사람들, 한 시간 뒤엔 서로 이름 부르면서 싸울 거야."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "어떻게 알아."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "내 계정에 온 messages 봐. 벌써 이웃끼리 빚 얘기로 욕하고 있어."
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
						"korean": "전광판 아래. 한 남자가 다른 남자의 멱살을 잡고 있었다. 옆에서 여자가 자기 휴대폰 화면을 들고 소리쳤다."
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
						3
					]
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "저 여자 남편 병력이 광고판에 떴어. 옆집 남자가 그걸 읽었어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "막아야 해."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "막으면 네가 걔들 기록 본 사람이 돼. 손대지 마."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 어떻게 해. 구경하라고?"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "송출탑. 도시 중심부에 있어. 천 개 광고판이 다 거기서 나와."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "근데 탑 지하에 냉각 팬 스무 개가 있어. 그거 안 돌면 서버가 십 분 만에 타."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "타면 어떻게 돼."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "광고판은 꺼져. 근데 그 안에 있던 만 명 기록도 같이 타. 복구 못 해."
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
						"korean": "냉각 팬실. 스무 개 중 넷이 이미 멈춰 있었고, 바닥 철판이 뜨거웠다."
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
						"korean": "여기서 전원 내리면 삼 분 뒤에 광고판 다 꺼져. 대신 기록도 다 같이."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "기록만 먼저 뽑을 순 없어?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "뽑으려면 탑 서버에 들어가야 해. 탑 안에는 사람이 스물셋 있어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "스물셋?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "광고판 관리하는 야간 근무자들이야. 지금 위에서 문 잠그고 있어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "전원 내리면 그 사람들도 같이 갇혀. 엘리베이터 안 돌아."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "...계단은."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "마흔 층. 지금 불 꺼진 계단으로 스물셋이 내려올 수 있어?"
					},
					"emotion": "angry"
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
						"korean": "탑 옥상. 안테나 아래 대형 송출 패널이 열려 있었고, 밖으로 내려다보이는 광고판이 전부 같은 얼굴을 띄우고 있었다."
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
						3
					]
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "여기까지 왔어. 이제 내가 못 올라가."
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
						"korean": "그 패널 만지면 내 단말이랑 연결돼. 내 목록에 남은 이름이 전부 다시 올라가."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 단말 놓고 가."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "못 놔. 이거 없으면 탑 안 잠금 번호를 몰라."
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
						4
					]
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "에코가 단말기를 콘크리트 난간에 올려놓았다. 화면에 연결 해제 확인창이 떴다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "하지 마."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "나 때문에 만 명 이름이 다시 뜨는 것보다 낫지."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "이거 누르면 나는 도시에서 제일 쓸모없는 정보상이 돼. 연락처도, 단말도 없어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "그래도 네가 올라가면 끝나. 올라가."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "확인창이 사라졌다. 에코의 단말 화면이 검게 꺼졌다."
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
						"korean": "송출실 천장까지 스크린이 붙어 있었다. 그 위로 건물 외벽이 홀로그램으로 열려 있었고, 도시가 거꾸로 매달려 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "만 명이야. 한 시간 동안 천 개 광고판에 다 올렸어. 지금 도시 인구가 사백만이니까, 사백 명 중 한 명꼴이지."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "왜 하필 오늘."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "네가 준비해줬잖아. 닥스 아카이브, 구청 점검 공지, 카이 장부. 그거 다 내 광고판에 올라갔어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "손대지 않은 건 하나도 없어. 네가 다 열었어. 나는 화면만 켰어."
					},
					"emotion": "happy"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "...지금 꺼."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "꺼. 대신 네가 지키려던 이름들이 같이 타. 냉각 팬 네 개 이미 멈췄어. 선택해."
					},
					"emotion": "base"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "송출 패널이 꺼지고, 홀로그램으로 열렸던 도시가 사라졌다. 광고판 천 개가 검게 죽었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "잘 껐어. 근데 봐, 밖에 있어. 지금 광장에서 사람들이 서로 이름 부르고 있어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "만 명 이름 중 칠천 개는 이미 게시판에 붙었어. 내 서버 아니야. 네가 확인 안 한 사람들이 붙인 거야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "치워. 다 치워."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "나 없어도 안 사라져. 나는 이름만 띄웠어. 때린 건 사람들이야. 너도 오늘 한 명 때렸잖아."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "스크린 하나에 광장 화면이 잡혔다. 남자가 여자에게 손가락질을 하고, 여자가 남자 가방을 걷어찼다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "탑 계단에서 스물셋이 걸어 내려왔다. 아무도 서로를 보지 않았다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "끝났어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "에코는 난간에 기대어 앉아 있었다. 단말기 없이, 손만 비어 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "광고판은 껐어. 근데 이 도시 사람들은 이제 서로 이름 알아. 그건 내가 못 지워."
					},
					"emotion": "sad"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "홀로그램이 탑 위로 더 커졌다. 스크린마다 내 이름과 집 주소가 여섯 자리까지 떴다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "너도 만 명 중 하나야. 만 한 번째. 오늘 밤 여기까지."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "내일 새벽 다섯 시에 냉각 팬부터 다시 돌린다. 그다음에 탑 계단 잠금 손본다."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "팬 돌리면 기록도 같이 살아나. 네가 한 번 더 선택해야 해."
					},
					"emotion": "base"
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"광고판 천 개가 꺼진 뒤, 도시는 사흘 동안 아무 소리도 내지 않았다.",
			"냉각 팬은 다시 돌았고, 만 명 중 칠천 명의 이름은 여전히 게시판에 남아 있었다.",
			"에코는 단말기 없이 골목에 앉아 있다. 이제 아는 것이 아무것도 없다고 말했다.",
			"송출탑 문은 열려 있었다. 잠근 사람이 없었기 때문이다.",
			"구한 것인지, 다 같이 벌거벗긴 것인지 — 광장에 서 있는 사람들은 아직 말하지 않았다."
		]
	}
} as const;
