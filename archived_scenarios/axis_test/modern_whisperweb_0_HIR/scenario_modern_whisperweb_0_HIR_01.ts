export const scenario_modern_whisperweb_0_HIR_01 = {
	"scenario_id": "modern_whisperweb_0_HIR_01",
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "네온 간판 불빛 아래, 거리의 그림자가 길게 늘어졌다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…밤이 깊었군."
					}
				},
				{
					"speaker": "echo",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "왔군. 최근 도시가 시끄러워."
					},
					"type": "speech",
					"speaker": "echo"
				},
				{
					"speaker": "echo",
					"type": "speech",
					"content": {
						"korean": "알 수 없는 정보 교란이 감지되고 있어."
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "정보 교란?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이걸 봐. 시청 데이터베이스에서 유출된 것으로 보이는 영상이야."
					},
					"speaker": "echo"
				},
				{
					"content": {
						"korean": "에코가 건넨 파일에서 깨진 영상이 재생됐다. 1초마다 수백 명의 주민 이름이 변했다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "'모든 비밀은 곧 공개될 것'이라는 음성 메시지가 반복되었다."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이건… 협박인가?"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "echo",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이건 단순한 해킹이 아니야. 더 큰 계획이 있어."
					},
					"speaker": "echo"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "도시의 간판에서 이상한 현상이 나타나는 것과 관련 있나?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "맞아. 디지털 간판이 무작위로 깨진 이미지나 숫자를 띄우고 사라지는 것 말이지."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "echo"
				},
				{
					"speaker": "echo",
					"type": "speech",
					"content": {
						"korean": "그게 단순한 오류가 아니라는 증거가 잡혔어."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "도대체 누가 이런 짓을?"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						3
					],
					"speaker": "echo"
				},
				{
					"content": {
						"korean": "이 정보 교란은 단순한 장난이 아니야."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "echo"
				},
				{
					"content": {
						"korean": "도시의 주요 시스템에 잠입하려는 시도일 수 있어."
					},
					"emotion": "base",
					"speaker": "echo",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "어디부터 조사해야 하지?"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "시청 서버실 쪽에서 이상 트래픽이 감지되고 있어."
					},
					"type": "speech",
					"speaker": "echo"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그곳에 이 모든 것의 핵심이 있을지도 몰라."
					},
					"type": "speech",
					"speaker": "echo"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "시청 서버실이라…"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "echo",
					"type": "direction"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "서버실 안은 이미 해킹 조직의 활동 근거지일 가능성이 높아."
					},
					"type": "speech",
					"speaker": "echo"
				},
				{
					"speaker": "echo",
					"emotion": "sad",
					"content": {
						"korean": "섣불리 들어가면 그들의 함정에 걸려들 거야."
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "알아. 하지만 여기서 멈출 순 없어."
					},
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "이 정보 교란의 근원을 밝혀내야 해."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"emotion": "base",
					"content": {
						"korean": "…네 선택이라면. 너무 깊게 파고들지는 마."
					}
				},
				{
					"action": "exit",
					"direction": "down",
					"duration_ms": 400,
					"type": "direction",
					"speaker": "echo"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "시청 서버실 깊숙한 곳, 서버 랙들 사이에 정체 모를 자가 서 있었다."
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "여기까지 오다니. 예상보다 빠르군."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "더 이상은 한 발짝도 움직일 수 없을 거다."
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "네가 이 모든 것을 꾸민 장본인이군."
					},
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "하찮은 방해… 네가 뭘 안다고."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "이건 시작에 불과해. 진짜 정보망은 훨씬 더 넓어."
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "무슨 소리야? 너 말고 또 있다는 건가?"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "정체 모를 자는 쓰러졌다. 그러나 도시의 정보망은 여전히 불안정했다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "이 모든 것의 배후에는 더 큰 조직이 존재하는 듯했다."
					},
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "결국 여기까지인가. 어리석은 시도였어."
					}
				},
				{
					"content": {
						"korean": "이 도시는 내 정보망을 벗어날 수 없어."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "다시 돌아올 거야. 다음엔 너의 네트워크를 끊어버릴 테다."
					},
					"type": "speech",
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"네온 불빛 아래, 도시의 정보망에 이상한 교란이 감지되었다.",
			"주인공은 정보상 에코를 통해 이 현상의 진상을 파헤치려 한다.",
			"깨진 디지털 신호와 함께 '모든 비밀은 곧 공개될 것'이라는 메시지.",
			"이것은 도시의 심장부로 향하는 서막이었다."
		]
	}
} as const;
