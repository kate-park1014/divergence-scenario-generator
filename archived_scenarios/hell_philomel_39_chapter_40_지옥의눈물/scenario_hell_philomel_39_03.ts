export const scenario_hell_philomel_39_03 = {
	"scenario_id": "hell_philomel_39_03",
	"order": 3,
	"act": "rising",
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "용암 제련소의 용융열이 온몸의 피부를 그을린다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이대로 가다간 타죽겠어. 등불의 심지를 꺾어서 열기를 줄여야 해."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…숨이 턱 턱 막힌다."
					},
					"speaker": "character_1"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "심지를 꺾어 불을 껐지만, 여전히 제련소의 기온은 이상할 정도로 높다."
					},
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						3,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "cinder"
				},
				{
					"emotion": "sad",
					"speaker": "cinder",
					"content": {
						"korean": "제발 살려줘… 우린 죄 없이 이 지옥 형벌에 떨어진 거란 말이야!"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "용암 틀 곁에 사슬로 묶인 영혼이 울부짖고 있다."
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "불꽃을 꺼트려도 부조리한 집행은 멈추지 않아… 뜨거운 가스가 계속 뿜어져 나온다고!"
					},
					"speaker": "cinder",
					"type": "speech"
				},
				{
					"content": {
						"korean": "억울하게 타들어 갔던 영혼들의 처참한 회상이 아지랑이처럼 갱도에 넘쳐난다."
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "cinder",
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						3
					]
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "저기 화염 가스관을 봐! 쓰러진 집행자의 갑주 이음새에 뭔가 박혀있어!"
					},
					"speaker": "cinder"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "화염 집행자 갑주의 이음새마다 핫핑크 빛 정령 깃털 조각이 박혀있다."
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…눈이 아플 정도로 불길하게 빛나는 깃털이다."
					},
					"speaker": "character_2"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이 깃털이 정령의 힘을 왜곡해서 형벌의 열기를 끝없이 증폭시키고 있었던 거다."
					},
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						3
					],
					"speaker": "cinder",
					"action": "enter"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "등불을 끌수록 분노한 억울한 혼들이 환영이 되어 몰려올 거야!"
					},
					"speaker": "cinder"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "가스관 너머에서 제련소 감독관의 분노한 척살 기운이 퍼지고 있다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "불합리한 형벌을 강요하는 자를 가만둘 수 없다. 마지막 방으로 이동한다."
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "크하하! 억울함 따위는 이 불길 속에 재가 되어 사라질 뿐이다!"
					},
					"speaker": "random_boss",
					"emotion": "happy",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…아직 불길이 꺼지지 않았다. 다시 일어나 싸운다."
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 내가 쓰러져도… 정령의 깃털이 피우는 지옥의 염화는 멈추지 않는다…"
					},
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이 무자비한 집행을 조종하는 근원을 반드시 찾아내겠어."
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "제련소의 화염이 식어가며 억울한 비명이 서서히 여운으로 남는다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "감히 제련소의 불꽃을 꺼트리고 형벌의 질서를 어지럽히다니!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "억울한 영혼들을 고문하는 부조리한 지옥 형벌을 당장 멈춰라!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "지옥의 법도 앞에 너희의 영혼도 이 붉은 용암 속에 녹여주마!"
					},
					"speaker": "random_boss",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"타오르는 용암 제련소의 무자비한 열기가 숨통을 조여온다.",
			"지옥의 열기를 피하기 위해 등불의 심지를 꺾어 불을 죽인다.",
			"그러나 불길이 꺼질수록 억울하게 끌려온 영혼들의 울부짖음은 더욱 짙어진다.",
			"가스관 사이에 박힌 정령의 깃털과 불합리한 형벌의 진실이 서서히 드러난다."
		]
	}
} as const;
