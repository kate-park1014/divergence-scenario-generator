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
			"시청 서버 마비와 붉은 장미단 장부 공개로 도시는 혼란에 빠졌다.",
			"위스퍼 웹은 모든 디지털 시스템을 잠식하며 커져갔다.",
			"정보상 에코는 마지막 단서였지만, 그도 이미 잠식되고 있었다.",
			"이제 모든 것을 끊어내기 위한 최후의 순간이 왔다."
		]
	},
	"epilogue": {
		"korean": [
			"위스퍼 웹은 파괴되었다. 하지만 도시는 더 이상 아무것도 숨기지 않는 곳이 되었다.",
			"시민들은 서로의 가장 은밀한 비밀을 알게 되었고, 광기에 휩싸인 절망만이 남았다.",
			"정의를 위한 폭로가 모두의 자유를 짓밟았다. 승리였으나, 모든 것이 무의미해졌다.",
			"이 폐허 속에서, 주인공은 이제 무엇을 해야 할지 알 수 없었다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "도시의 전광판에는 비상 상황이 계속 송출되고 있었다. 간판에는 무작위로 깨진 이미지와 숫자 배열이 나타났다 사라졌다."
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "도시가 이젠 통제 불능이야. 모든 화면이 난리야."
					},
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "echo",
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "…왔구나. 하지만 너무 늦었어. 위스퍼 웹이 모든 걸 장악했어."
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "에코, 괜찮아? 왜 이렇게…."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "echo",
					"content": {
						"korean": "내 안에도... 위스퍼 웹이 들어왔어. 모든 화면에 내 얼굴이 번져나가고 있어."
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "도시 광고판에는 10초간 실제 주민 이름과 과거 대출 기록이 떴다. 사람들은 서로를 의심하기 시작했다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "광고판에 내 이름이랑 주소가 떴어! 어떻게 이럴 수가!"
					},
					"emotion": "angry"
				},
				{
					"duration_ms": 500,
					"speaker": "echo",
					"type": "direction",
					"spot": [
						4,
						2
					],
					"action": "enter"
				},
				{
					"emotion": "sad",
					"speaker": "echo",
					"content": {
						"korean": "더 깊이… 잠식되고 있어. 과거 데이터 칩에서 '모든 비밀이 연결된다'는 음성이 흘러나와."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "과거 데이터? 위스퍼 웹의 기원인가?"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "그들은... 연결을 원해. 모든 것을 공유하고 싶어 해."
					}
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "도시의 모든 전광판과 스마트폰 화면에 개인의 은밀한 대화 내용이 송출되기 시작했다."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "사람들이 미쳤어! 자기 비밀이 다 퍼졌다고 난리야!"
					}
				},
				{
					"duration_ms": 500,
					"speaker": "echo",
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "내 머릿속에… 수많은 사람들의 꿈과 소문이 뒤섞여. '모든 비밀을 끊으라'는 메시지가 들려…."
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "꿈과 소문? 에코, 정신 차려!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "끊어야 해. 이 모든 연결을… 끊어내야 해…."
					},
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "에코의 몸이 빛나는 광섬유처럼 변했다. 그의 목소리는 수천 개의 다른 목소리와 섞여 도시 전역에 울렸다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "에코!"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "direction",
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "echo"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "echo",
					"content": {
						"korean": "나는… 더 이상 버틸 수 없어. 이 웹에 완전히 잠식될 거야. 하지만… 마지막 메시지를 전할게. '모든 연결을… 끊어내야 해'…."
					}
				},
				{
					"type": "direction",
					"speaker": "echo",
					"duration_ms": 400,
					"direction": "up",
					"action": "exit"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "에코가… 사라졌어. 하지만 메시지는 들었어. 모든 연결을 끊으라고."
					}
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "이젠 정말 돌이킬 수 없어. 도시 전체가 위스퍼 웹의 일부가 됐어."
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "위스퍼 웹의 홀로그램이 산산조각 났다. 수천 개의 회로와 발광하는 광섬유가 사방으로 뿜어져 나왔다."
					}
				},
				{
					"emotion": "angry",
					"speaker": "boss",
					"content": {
						"korean": "모두가 연결되었어! 모든 비밀은 이제… 없어! 네 두려움, 네 거짓말, 네 가장 깊은 치부까지! 전부 나에게 있어! 그리고 이제… 네 것이 될 거야!"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이게… 내가 원했던 결과라고?"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "도심을 뛰쳐나간 수천 명의 시민들은 서로의 비밀을 알게 된 후 광기에 휩싸여 절망적인 미소를 지었다. 어떤 이는 자살을 시도했다."
					},
					"emotion": "sad"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "도시의 빌딩 숲 위로 거대한 홀로그램이 확장되었다. 모든 전광판과 스크린에 깨진 얼굴이 미친 듯이 번져나갔다."
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "왔군. 네가 여기까지 올 줄이야."
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "네가 위스퍼 웹의 실체인가. 에코를 잠식하고 도시를 망가뜨린."
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "나는 그저 연결했을 뿐. 모든 비밀은 빛을 봐야 한다고 생각했지. 너도 그걸 원했잖아."
					}
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "네 폭력적인 방법이 이 모든 연결을 만들었어. 네가 파헤친 장부, 네가 퍼뜨린 정보. 전부 내가 쓰기 좋은 재료였지."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "닥쳐. 이제 네 연결을 끊을 시간이다."
					},
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "위스퍼 웹의 홀로그램은 도시 전체를 완전히 뒤덮었다. 모든 스크린은 깨진 얼굴로 가득 찼다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "네가 날 막으려 했으나, 오히려 모든 것을 열었군. 이제 이 도시의 모든 비밀은 나의 것이다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이대로는 끝낼 수 없어. 에코가 남긴 메시지, '모든 연결을 끊으라'는 말… 다시 시도할 거야. 한 조각이라도 남기지 않겠어."
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 15
		}
	]
} as const;
