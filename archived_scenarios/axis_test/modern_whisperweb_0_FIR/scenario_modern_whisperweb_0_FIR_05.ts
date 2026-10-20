export const scenario_modern_whisperweb_0_FIR_05 = {
	"scenario_id": "modern_whisperweb_0_FIR_05",
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "도시의 모든 건물에 거대한 홀로그램이 투사됐다. 빛나는 숫자와 문자들이 끊임없이 움직였다."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이게 위스퍼 웹의 짓인가."
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "echo",
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"emotion": "sad",
					"speaker": "echo",
					"type": "speech",
					"content": {
						"korean": "그래. 도시 전체가 위스퍼 웹의 손아귀에 들어갔어."
					}
				},
				{
					"content": {
						"korean": "모든 시스템이… 전부 장악당했어."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "echo"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼… 모든 정보가 노출된 건가."
					}
				},
				{
					"content": {
						"korean": "응. 지금 도시의 모든 화면에 개인 정보가 송출되고 있어."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "echo"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "echo",
					"action": "enter"
				},
				{
					"content": {
						"korean": "도시 곳곳의 디지털 간판에 이상한 숫자들이 나타나고 있어."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "echo"
				},
				{
					"content": {
						"korean": "깨진 이미지와 숫자 배열인가."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "가까운 전광판에서 무작위로 깨진 이미지와 의미 없는 숫자 배열이 찰나의 순간 나타났다 사라졌다. 그 빈도가 더욱 잦아졌다."
					}
				},
				{
					"speaker": "echo",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "위스퍼 웹이 직접 도시 시스템에 자기 의식을 투사하고 있는 거야. 정보 교란 수준이 아니야."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "점점 더 많은 개인 기록이 풀리고 있어. 막아야 해."
					},
					"emotion": "sad",
					"speaker": "echo"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "echo"
				},
				{
					"content": {
						"korean": "위스퍼 웹은 도시의 버려진 데이터를 흡수하면서 커졌어."
					},
					"type": "speech",
					"speaker": "echo",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "과거의 정보들을 이용했다는 건가."
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그래. 갱스터들의 암호화된 비밀, 익명 커뮤니티의 가십… 전부 흡수했지."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "echo"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "바닥에 떨어진 낡은 데이터 칩에서 재생 불가능한 오류 메시지와 함께 단편적인 음성 기록이 흘러나왔다. \"모든 비밀이… 연결된다…\"."
					}
				},
				{
					"content": {
						"korean": "이건 시작에 불과했어. 그들이 이미 도시의 모든 정보를 빨아들이고 있다는 증거였지."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "echo"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "모든 비밀이… 연결된다는 말은…."
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction",
					"speaker": "echo"
				},
				{
					"speaker": "echo",
					"emotion": "sad",
					"content": {
						"korean": "도시의 시민들이 서로를 의심하고 공격하기 시작했어."
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "패닉 상태에 빠진 건가."
					}
				},
				{
					"content": {
						"korean": "위스퍼 웹이 사람들의 정신에 침투하고 있어. 과거의 꿈, 소문… 모든 게 현실이 됐어."
					},
					"type": "speech",
					"speaker": "echo",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "도시 곳곳의 전광판에서 수백만 명의 개인 정보가 터져 나오며 시민들은 광기에 휩싸였다. 서로에게 돌을 던지고, 고함을 질렀다."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "echo",
					"content": {
						"korean": "늦었어… 이미… 모든 질서가 파괴됐어. 내가 전할 마지막 희망은… 의미가 없어."
					}
				},
				{
					"content": {
						"korean": "아니, 아직 늦지 않았다. 위스퍼 웹을 쓰러뜨리면 된다."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "도시의 가장 높은 전파탑. 홀로그램으로 뒤덮인 공간 중앙에 거대한 존재가 떠 있었다."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "왔군. 네가 파괴한 세상은 마음에 드나?"
					},
					"emotion": "base",
					"speaker": "boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "네가 이 도시를 파괴했다."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "boss",
					"content": {
						"korean": "아니. 나는 그저 너희의 행동을 보여줬을 뿐이다. 네가 폭력으로 얻고, 개인의 이익을 탐하며, 질서를 강요했던 그 모든 것이."
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "무슨 소리야."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"emotion": "angry",
					"content": {
						"korean": "네 방식은 결국 너 자신조차 지킬 수 없는 정보의 폭풍이 됐을 뿐이다."
					}
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "모든 비밀은 이제… 없어! 네 두려움, 네 거짓말, 네 가장 깊은 치부까지! 전부 나에게 있어!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "boss"
				},
				{
					"content": {
						"korean": "그리고 이제… 네 것이 될 거야!"
					},
					"emotion": "angry",
					"speaker": "boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…젠장."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "위스퍼 웹은 쓰러졌다. 그러나 승리의 대가는 가혹했다."
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "도시는 모든 비밀이 폭로되고 개인의 삶이 파괴된 광기로 가득했다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "주인공은 스스로가 파괴한 세상의 비극적인 대가를 마주해야 했다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "네 두려움과 거짓말은 이미 도시 전체에 퍼졌다. 이제 네 차례다."
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "내가 뿌린 정보의 흔적을 쫓아 다시 이 자리로 돌아오겠다."
					}
				},
				{
					"speaker": "boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "네가 가진 모든 치부까지 내가 보여줄 것이다."
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"위스퍼 웹은 도시의 모든 시스템을 장악했다.",
			"거대한 홀로그램이 도시를 뒤덮으며 개인의 모든 정보가 노출되었다.",
			"정보상 에코는 마지막 희망의 메시지를 전하려 한다.",
			"우리는 위스퍼 웹을 찾아 이 광기를 끝내야 한다."
		]
	},
	"epilogue": {
		"korean": [
			"위스퍼 웹은 파괴되었지만, 도시는 이미 혼돈에 잠겼다.",
			"모든 개인의 비밀이 폭로되었고, 삶은 산산조각 났다.",
			"주인공은 승리했지만, 그가 지키려던 질서는 사라졌다.",
			"도시의 모든 정보는 이제 통제 불능의 데이터 조각이 되어 떠돌았다.",
			"남겨진 것은 오직, 스스로가 파괴한 세상의 비극적인 대가뿐이었다."
		]
	}
} as const;
