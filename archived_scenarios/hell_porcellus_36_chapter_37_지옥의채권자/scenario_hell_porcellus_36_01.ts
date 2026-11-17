export const scenario_hell_porcellus_36_01 = {
	"scenario_id": "hell_porcellus_36_01",
	"order": 1,
	"act": "intro",
	"theme": "hell",
	"actors": {
		"cinder": {
			"id": "mon_7bdc5bba-75ec-4589-827e-193b3c59b022",
			"name": {
				"korean": "신더",
				"english": "Cinder",
				"japanese": "シンダー",
				"chinese": "辛德",
				"french": "Cinder",
				"spanish": "Cinder",
				"vietnamese": "Xinder",
				"thai": "ซินเดอร์",
				"hindi": "सिंडर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/bc21258b-93ac-4669-7330-fdf4e8a57c00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/939a1911-1849-425c-67a4-4958bbdc3300/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"매캐한 유황 먼지가 눈앞을 가리는 지옥 채굴장.",
			"억울하게 끌려온 죄인들이 끝없는 노역에 시달리고 있다.",
			"죄수 신더의 부탁을 들어주기 위해 서류에 영수증 도장을 찍는 순간,",
			"어디선가 기괴한 저금통 짤랑이는 소리가 울려 퍼진다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "유황 먼지가 코끝을 찌르는 채굴장 깊은 곳."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…콜록, 숨이 턱턱 막히는 공기다."
					},
					"speaker": "character_1"
				},
				{
					"content": {
						"korean": "누군가 매캐한 연기 속에서 도움을 요청하고 있어."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "cinder",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "제발 도와주세요! 이 노직 확인서에 확인만 받으면 되는데…"
					},
					"speaker": "cinder"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "억울하게 끌려와 가혹한 노역을 하고 있구나."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "맞아요! 서류 하단에 작게 적힌 지옥 산소 호흡세 징수 조항 때문에 갇혔어요."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "cinder"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "억울한 사정이니 서류를 확인해 주자."
					},
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "cinder",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "가지고 계신 영수증 도장을 이 서류에 찍어주시면 돼요!"
					},
					"speaker": "cinder"
				},
				{
					"type": "speech",
					"speaker": "character_2",
					"emotion": "base",
					"content": {
						"korean": "도장 하나 찍어주는 일이라면 어렵지 않지."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "노직 확인서에 영수증 도장을 찍는다."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "도장이 찍히는 순간, 서류 위로 마젠타색 빛이 흘렀다."
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "아앗, 서류 내용이 갑자기 바뀌고 있어요!"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "cinder"
				},
				{
					"content": {
						"korean": "도장을 찍자마자 지옥 이용료 청구가 성립되어 소유권이 넘어갔어."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "어디선가 짤랑거리는 기괴한 동전 소리가 귓가를 울린다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_3",
					"content": {
						"korean": "…머리가 지릿하게 아파오는 소리네."
					},
					"emotion": "sad"
				},
				{
					"duration_ms": 400,
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "cinder"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "이 저금통 짤랑이는 소리는… 지옥 이용료 징수 계약이 맺어지는 소리에요!"
					},
					"type": "speech",
					"speaker": "cinder"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "도장을 찍은 행동이 강제 징수 계약을 완성시켰어."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "cinder",
					"type": "speech",
					"content": {
						"korean": "제 노역 채권이 지옥 압류소로 강제 이전되어 버렸어요…!"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 잘못된 징수 계약을 차단하려면 채굴 감독관을 찾아야 해."
					},
					"emotion": "base",
					"speaker": "character_any"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "채굴장 상층부. 유황 연기 너머로 거대한 그림자가 보인다."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…더 이상 물러설 곳은 없다."
					},
					"emotion": "angry",
					"speaker": "character_4"
				},
				{
					"speaker": "cinder",
					"type": "direction",
					"duration_ms": 400,
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "cinder",
					"emotion": "angry",
					"content": {
						"korean": "저 앞에 채굴 감독관이 있어요! {random_boss}의 징수를 막아야 해요!"
					}
				},
				{
					"content": {
						"korean": "{random_boss}를 쓰러뜨리고 신더의 영혼 채권을 되찾자."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "저금통 짤랑이는 소리와 함께 무기를 든 자가 모습을 드러낸다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "크하하! 멍청한 것들, 영수증 도장을 찍은 순간 너희도 채무자다!"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "억울한 죄인들을 쥐어짜는 강제 계약을 당장 중단해라!"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "지옥 이용료를 내지 못하겠다면 영혼으로 납부해라!"
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 이겼다고 착각하지 마라… 이미 지옥 적금 통장에 너희 지옥 이용료가 적립되었다…"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "{random_boss}를 쓰러뜨렸지만 저금통 짤랑이는 소리는 멈추지 않아."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "cinder"
				},
				{
					"speaker": "cinder",
					"type": "speech",
					"content": {
						"korean": "도와주셔서 감사해요! 하지만 징수 계약을 완전히 깨려면 지옥 장부 보관창고로 가야 해요."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "지옥 압류소의 사슬은 끊어지지 않았다. 장부 보관창고를 향해 발걸음을 옮긴다."
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "크하하하! 새로운 채무자들이 아주 잘 지어주는구나!"
					},
					"emotion": "happy",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이대로 노역 죄수가 될 수는 없어… 다시 일어서자!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			]
		}
	]
} as const;
