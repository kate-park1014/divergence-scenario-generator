export const scenario_hell_solatrus_37_04 = {
	"scenario_id": "hell_solatrus_37_04",
	"order": 4,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"brim": {
			"id": "mon_d7f57824-190d-40b9-93d1-66c658f0441f",
			"name": {
				"korean": "브림",
				"english": "Brim",
				"japanese": "ブリム",
				"chinese": "布里姆",
				"french": "Brim",
				"spanish": "Brim",
				"vietnamese": "Brim",
				"thai": "บริม",
				"hindi": "ब्रिम"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/08ad0e4d-214d-43b3-dc3e-ddfba9049300/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/16f1def2-7c33-4558-4b21-9c3e87fa3e00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"타오르는 잿더미 위로 서슬 퍼런 비탄의 통곡 소리가 울려 퍼진다.",
			"탈옥을 꿈꾸던 브림의 발걸음도 화형대의 거대한 불길 앞에서 멈춰 섰다.",
			"바닥에 깨어진 백금 갑주 조각은 지옥의 형벌이 멎지 않았음을 증명한다.",
			"태엽을 돌릴 때마다 무거워지는 죄책감이 단죄의 시간을 바짝 죄어온다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "매캐한 연기가 사방을 메운 화형대 입구. 바닥에 깨진 갑주 조각들이 흩어져 있다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…목이 매캐해서 숨을 쉬기 힘들어."
					},
					"type": "speech",
					"speaker": "character_1"
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "brim"
				},
				{
					"content": {
						"korean": "이 바닥에 떨어진 백금 갑주 조각을 봐. 단죄자의 껍데기도 파괴되고 있어."
					},
					"speaker": "brim",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "서두르자. 불길이 온전히 덮치기 전에 길을 찾아야 해."
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
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "벽면을 따라 잘게 쪼개진 고문 서판들이 빽빽하게 걸려 있다."
					},
					"speaker": "narrator"
				},
				{
					"type": "direction",
					"speaker": "brim",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"speaker": "brim",
					"type": "speech",
					"content": {
						"korean": "잠깐, 이 고문 서판에 새겨진 문자들을 좀 봐!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "형벌을 받는 죄인들의 이름 위에 백금 사제 솔라트루스의 이름이 덮어 쓰여 있어."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "단죄자 스스로가 죄인들의 형벌을 대신 받아내고 있었다는 뜻인가…?"
					},
					"speaker": "brim",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…소름이 뼛속까지 돋아난다."
					},
					"speaker": "character_2"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "태엽시계가 붉은빛을 뿜으며 기괴한 태엽 소리를 흘려보낸다."
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "brim",
					"action": "enter"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "시계를 쥘 때마다 억울하게 울부짖는 죄인들의 환영이 눈앞을 가려…"
					},
					"speaker": "brim"
				},
				{
					"content": {
						"korean": "환영 속 사제가 죄인의 목에 걸린 밧줄을 자신의 목으로 옮겨 걸고 있어."
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "brim",
					"content": {
						"korean": "대속이라니… 그 잔혹한 굴레를 사제 스스로 짊어지고 있었던 거야?"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…공포로 손끝이 떨려온다."
					},
					"speaker": "character_3"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "화형대 중앙의 거대한 잿더미 속에서 붉은 불꽃이 솟구친다."
					},
					"speaker": "narrator"
				},
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "brim",
					"duration_ms": 500
				},
				{
					"speaker": "brim",
					"type": "speech",
					"content": {
						"korean": "잿더미를 봐! 죄인의 유골이 아니라 사제의 백금 사제복 조각이 타오르고 있어!"
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "불길 속에서 타오르고 있던 건 죄인이 아닌 단죄자 자신의 껍데기였어."
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "내가 탈옥하려 지어낸 거짓말 때문에 사제가 대신 태워지고 있었다니…!"
					},
					"speaker": "brim",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_4",
					"content": {
						"korean": "…숨이 턱 막혀 제대로 쉴 수 없어."
					},
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "탈옥을 도모한 죄인 브림! 네 거짓으로 만든 죄업을 화형대에 바쳐라!"
					},
					"emotion": "angry"
				},
				{
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"speaker": "brim",
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "대속 사제의 징벌 대검… 그래, 내 욕심이 다른 이들을 죄인으로 만든 굴레였어!"
					},
					"speaker": "brim",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "brim",
					"content": {
						"korean": "더 이상 도망치지 않겠다… 나를 화형대에 던져 단죄하라!"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "아니, 그 굴레를 끊기 위해 태엽시계를 돌리겠어."
					},
					"speaker": "character_any"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "지옥 화형대의 거센 불길이 모든 것을 잿더미로 삼켜버렸다."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "죄업을 짊어진 자는 이 화형대의 굴레에서 결코 벗어날 수 없다!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…아직 태엽을 다시 되돌릴 기회는 남아있어."
					}
				}
			],
			"win_dialogue": [
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "잿빛 태엽시계의 태엽을 거꾸로 되돌린다!"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "태엽이 거슬러 올라가자 화형대의 불길이 흩어지며 브림의 처형이 무효가 되었다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "{random_boss}의 서슬 퍼런 단죄 선언도 시간을 거슬러 고요 속에 묻혔다."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "태엽을 돌릴수록 단죄자의 백금 갑주엔 더 깊은 흉터가 새겨지겠지만… 멈추지 않는다."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				}
			]
		}
	]
} as const;
