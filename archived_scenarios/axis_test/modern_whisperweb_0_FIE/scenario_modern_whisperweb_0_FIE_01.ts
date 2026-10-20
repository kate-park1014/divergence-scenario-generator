export const scenario_modern_whisperweb_0_FIE_01 = {
	"scenario_id": "modern_whisperweb_0_FIE_01",
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
			"dialogue": [
				{
					"content": {
						"korean": "밤의 도시, 네온 불빛이 회색 빌딩을 비췄다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "요즘 도시가 이상해. 신호가 막 깨지고…"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"speaker": "echo",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "그 소문 때문에 다들 나를 찾아오는군."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "에코. 너라면 알지?"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "도시를 휩쓰는 정보 교란… '위스퍼 웹'이란 소문이 돌고 있어."
					},
					"type": "speech",
					"speaker": "echo"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "echo"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "이걸 봐. 깨진 디지털 신호 속에서 나타난 영상 조각이야."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "에코가 손목 패드로 깨진 이미지와 알 수 없는 숫자 배열을 보여줬다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이게 뭐야? 아무 의미 없어 보이는데."
					}
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "영상이 끝나기 직전… '모든 비밀은 곧 공개될 것'이라는 음성이 들렸어."
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "…누군가 의도적으로 하는 짓이야."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "echo",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "이미 많은 이들이 이 정보의 흐름에 휩쓸렸어."
					},
					"type": "speech",
					"speaker": "echo",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "정보의 근원을 찾아야 해. 도시의 심장부로 가겠어."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "echo",
					"content": {
						"korean": "그건 위험해. 무턱대고 파고들면…"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "피해도 상관 없어. 진실을 알아낼 거야."
					}
				},
				{
					"emotion": "angry",
					"speaker": "echo",
					"content": {
						"korean": "…네 방식은 너무 무모해. 많은 것을 부술 거야."
					},
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "echo",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "echo",
					"type": "speech",
					"content": {
						"korean": "멈춰. 더 이상 가면 네 손에 피를 묻힐 뿐이야."
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이미 시작된 일이야. 멈출 수 없어."
					}
				},
				{
					"speaker": "echo",
					"type": "speech",
					"content": {
						"korean": "네가 강제로 정보를 빼내면, 안에 든 개인 기록들이 같이 퍼져."
					},
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "상관 없어. 이 혼란을 끝내는 게 먼저야."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…더 이상은 널 도울 수 없어. 모든 연결을 끊겠어."
					},
					"speaker": "echo"
				},
				{
					"action": "exit",
					"duration_ms": 400,
					"speaker": "echo",
					"direction": "down",
					"type": "direction"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "…내가 사라진다고, 이 흐름이 멈출까? 이미 도시는 모든 것을 받아들였어."
					}
				},
				{
					"content": {
						"korean": "아니. 여기서 끝낼 거야."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 자가 쓰러지자, 일시적인 정적이 찾아왔다. 그러나 도시는 여전히 숨 쉬고 있었다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "정보의 파도는 멈추지 않는다. 오히려 새로운 파동이 시작될 뿐이다."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "거대한 서버 앞에 정체 모를 자가 서 있었다."
					},
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "왔군. 네 어리석은 호기심이 여기까지 이끌었어."
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네가 모든 교란의 근원인가?"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "난 그저, 모든 비밀을 공개할 뿐. 네가 원했던 것도 그거잖아?"
					}
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "정보의 파도에 휩쓸려 모든 것이 잠식되었다."
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "이제 알겠나? 네가 바꿀 수 있는 건 없어. 이 모든 정보는 나를 향할 뿐."
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "젠장… 포기하지 않아. 다음은 중계 서버를 찾아낼 거야."
					},
					"speaker": "character_any"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"네온 아래 감춰진 도시. 정보가 곧 생명선이었다.",
			"알 수 없는 정보 교란이 도시를 뒤덮기 시작했다.",
			"주인공은 정보상 에코를 통해 이상 현상의 소문을 들었다.",
			"도시의 심장부로 향하는 길, 모든 진실은 불확실했다."
		]
	}
} as const;
