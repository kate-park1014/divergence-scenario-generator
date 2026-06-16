export const scenario_snowy_skalhorn_85_04 = {
	"scenario_id": "snowy_skalhorn_85_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"ivar": {
			"id": "mon_d8a80adc-9315-47b5-8c30-97ce33672bce",
			"name": {
				"korean": "이바르",
				"english": "Ivar",
				"japanese": "イヴァー",
				"chinese": "伊瓦尔",
				"french": "Ivar",
				"spanish": "Ivar",
				"vietnamese": "Ivar",
				"thai": "ไอวาร์",
				"hindi": "इवर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8dd7872b-d4df-44fd-b1a1-083a9156e700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2622fb62-daf4-42d1-a83b-2b78869d3e00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"끝없이 펼쳐진 얼음 연회장.",
			"화석처럼 굳은 손님들은 모두 미소 짓고 있었다.",
			"그러나 그 미소는 영원한 축제에 갇힌 공포였다.",
			"강함의 끝을 좇는 이바르. 그는 여기서 무엇을 보게 될까?"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 얼음 연회장이 눈앞에 펼쳐졌다. 모든 것이 멈춰 있었다."
					},
					"emotion": "base"
				},
				{
					"speaker": "ivar",
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이게 축제인가? 영광에 취해 굳어버린 자들 같군."
					},
					"emotion": "base",
					"speaker": "ivar"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "모두 웃고 있어. 근데… 이상해."
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "ivar",
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 미소는 즐거움이 아니다. 축제에 갇힌 공포… 그뿐이다."
					},
					"emotion": "base",
					"speaker": "ivar"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "너무 오래 앉아있어서 굳어버린 걸까?"
					},
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "강함은 멈추지 않는다. 이들은 이미… 패배했다."
					},
					"speaker": "ivar"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						5,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "ivar",
					"duration_ms": 500
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "저 빈자리… 나를 부르는 것 같아."
					},
					"emotion": "base"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "헛된 영광에 현혹되지 마라. 한번 앉으면… 영원히 멈춘다."
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이 연회는… 덫이야."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "연회장 어디에도 자리에서 일어선 흔적은 없었다. 모두가 굳어 있었다."
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"duration_ms": 500,
					"speaker": "ivar",
					"spot": [
						5,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 자리… 왜 이렇게 편안해 보이지?"
					},
					"emotion": "base",
					"speaker": "character_3"
				},
				{
					"type": "direction",
					"action": "focus",
					"spot": [
						3,
						3
					],
					"speaker": "character_3",
					"duration_ms": 300
				},
				{
					"speaker": "ivar",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "앉지 마라! 네 움직임마저 멈출 것이다."
					}
				},
				{
					"type": "direction",
					"action": "shake",
					"duration_ms": 300,
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…놓으라고! 앉고 싶어…"
					},
					"emotion": "angry",
					"speaker": "character_3"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "한 번 앉으면… 영원히 못 일어나!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이바르 말이 맞아. 정신 차려!"
					}
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "오지 않는 손님을 기다렸다. 너도 앉아서 영원을 맛봐라."
					},
					"speaker": "random_boss"
				},
				{
					"spot": [
						5,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"content": {
						"korean": "영원한 정지는 강함이 아니다. 난 움직인다! 결코 앉지 않아."
					},
					"emotion": "angry",
					"speaker": "ivar"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "우린 멈추지 않아! {random_boss}, 네 축제는 끝났어!"
					}
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "네 강함은… 끝없는 굶주림을 부를 뿐. 언젠가 너도 앉게 될 것이다."
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "ivar",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						5,
						2
					]
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "나는 나의 길을 간다. 그 끝은 내가 정한다. 굶주림마저 나의 강함이다."
					},
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"content": {
						"korean": "얼어붙은 연회장의 공포는 사라지지 않았다. 이바르는 아직 채워지지 않는 갈증을 느꼈다."
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "결국 너도 나의 손님. 영원히 미소 지어라."
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"spot": [
						5,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "ivar"
				},
				{
					"speaker": "ivar",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "아직 끝이 아니다. 나는 일어선다! 다시 싸울 것이다!"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이대로 멈출 순 없어! 다시 도전할 거야!"
					},
					"emotion": "angry"
				}
			]
		}
	]
} as const;
