export const scenario_modern_whisperweb_0_HCR_01 = {
	"scenario_id": "modern_whisperweb_0_HCR_01",
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
			"네온 불빛 아래, 도시는 알 수 없는 정보 교란으로 흔들렸다.",
			"깨진 디지털 신호와 의미 없는 숫자들이 화면을 채웠다.",
			"주인공은 이 기이한 현상의 근원을 찾아 정보의 그림자 속으로 향한다.",
			"도시의 심장부에 진실이 있다고 했다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "도심의 뒷골목은 네온 빛에 얼룩졌다. 축축한 공기가 도시의 비밀을 품었다."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "여기가 맞나. 에코가 보낸 좌표는 여기였는데."
					},
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"speaker": "echo",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "왔군. 기다렸어."
					},
					"emotion": "base",
					"speaker": "echo",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "무슨 일이지? 도시의 정보망이 이상하다는 소문이 돌던데."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "echo",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이상한 수준이 아니야. 모든 정보가 깨지고 엉키고 있어."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "echo",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "echo",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이걸 봐. 최근에 수집한 파편이야."
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "에코가 건넨 홀로그램 프로젝터에서 시청 데이터 유출 관련 뉴스와 함께 깨진 디지털 신호가 번쩍였다. 동시에 도시 곳곳의 디지털 간판에서 무작위로 깨진 이미지나 의미 없는 숫자 배열이 찰나의 순간 나타났다 사라졌다."
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "이게… 무슨 의미지?"
					},
					"type": "speech"
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "'모든 비밀은 곧 공개될 것'이라는 메시지가 담겨 있어. 아무도 원하지 않는 정보까지도 말이야."
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "그게 이 모든 혼란의 근원이라고?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "끊어내. 모든 정보를. 그러면 혼란도 없을 거야."
					},
					"speaker": "echo",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"speaker": "echo",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "모든 정보를 끊으라니, 그게 가능할 리 없잖아."
					}
				},
				{
					"speaker": "echo",
					"type": "speech",
					"content": {
						"korean": "정보가 넘치면 아무도 진실을 믿지 않아. 사람들은 결국 자기가 원하는 것만 보게 돼."
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "하지만… 모든 정보를 차단하는 건 해결책이 아니야."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "echo",
					"type": "speech",
					"content": {
						"korean": "정보는 곧 무기가 돼. 너의 호기심이 결국 이 도시를 파멸로 이끌 거야."
					},
					"emotion": "angry"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "echo",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이대로 멈출 수는 없어. 이 혼란의 근원을 찾아야 해."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "나쁜 선택이야. 도시의 심장부로 가면 모든 것이 돌이킬 수 없게 돼."
					},
					"type": "speech",
					"speaker": "echo"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "그래도 가야만 해. 이 도시를 원래대로 되돌려야 해."
					},
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "주인공은 에코의 경고에도 불구하고 도시의 심장부를 향해 발걸음을 옮겼다. 정보 교란의 근원을 찾아 모든 것을 연결하려는 결정이었다."
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "도시의 중심부, 폐쇄된 서버실 안에 정체 모를 자가 서 있었다. 수십 대의 모니터가 깨진 정보를 띄우고 있었다."
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "왔군. 쓸데없는 짓은 그만둬. 너는 아무것도 끊어내지 못한다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "네가 이 모든 교란의 근원인가? 네가 정보를 조작했어."
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "조작? 난 그저 모든 것을 연결할 뿐. 정보는 흐르게 되어 있어."
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "너는 아무것도 끊어내지 못한다. 모든 정보는 계속 흘러갈 뿐."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "아니. 내일은 모든 서버의 전원을 내릴 거야. 도시의 모든 정보를 끊어내겠어."
					}
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…이게 끝이라고 생각하나? 연결은 계속될 거야."
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "아니. 여기서 모든 것을 끊어내겠어."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "정체 모를 자의 그림자는 사라졌지만, 도시의 디지털 간판은 여전히 번쩍였다. 정보의 교란은 멈추지 않았다."
					},
					"emotion": "base"
				}
			]
		}
	]
} as const;
