export const scenario_hell_porcellus_36_05 = {
	"scenario_id": "hell_porcellus_36_05",
	"order": 5,
	"act": "climax_finale",
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
		"pool_id": "pool_SoulVault_Porcellus_V1"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "핫핑크색 용암이 기괴한 소리를 내며 부글거린다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "용암 한가운데에 거대한 제단이 솟아 있어."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…제단 바닥 전체가 징그러운 핑크빛이야."
					},
					"speaker": "character_1",
					"emotion": "base"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "cinder",
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "제단 아래를 보세요! 우리가 서류에 찍어준 도장 때문에 죄수들의 영혼 수액이 저금통으로 들어가고 있어요!"
					},
					"speaker": "cinder"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "영수증 도장이 생명력을 저금통에 강제로 적립시키는 열쇠였던 거야."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "cinder",
					"content": {
						"korean": "맞아요… 도장이 찍힐 때마다 죄인들의 생명력이 짤랑거리며 뜯겨 나간 거였어요."
					},
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"content": {
						"korean": "제단 주변의 벽마다 핑크색 하트 인장이 빼곡하게 찍혀 있어."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_2",
					"content": {
						"korean": "보고만 있어도 섬뜩한 광경이다."
					}
				},
				{
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "cinder",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "저 하트 인장은 지옥의 모든 시설과 영혼이 포르셀루스에게 담보로 잡혔다는 표시예요!"
					},
					"speaker": "cinder",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "지옥 전체가 강제 압류당한 상태였다는 뜻이군."
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "저 하트 도장 하나로 포르셀루스가 지옥을 통째로 소유해 왔던 거예요."
					},
					"speaker": "cinder",
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "character_any",
					"content": {
						"korean": "제단 위에서 염라대왕의 직인이 찍힌 영혼 대출 각서 조각을 찾았어."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_3",
					"content": {
						"korean": "지옥 통치자가 작성한 대출 각서라니?"
					}
				},
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "cinder",
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "염라대왕조차 포르셀루스에게 300년 만기 영혼 대출을 받고 지옥을 운영해 온 거였어요!"
					},
					"speaker": "cinder",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "통치자마저 빚더미에 앉아 있으니 죄인들을 수탈하는 부조리를 방치한 거였군."
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "결국 이 지옥의 진짜 지배자는 저금통 정령이었던 거예요!"
					},
					"speaker": "cinder",
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "지옥 산소 호흡세와 용암 감상료 조항이 가득 적힌 청구서가 쌓여 있어."
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "숨 쉬는 것까지 돈을 뜯어내다니 기가 차는군."
					},
					"speaker": "character_4",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"spot": [
						4,
						3
					],
					"speaker": "cinder",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "제단 중앙의 영수증 도장을 부수면 모든 채권 청구 계약이 파기돼요!"
					},
					"speaker": "cinder"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "그 영수증 도장만 파괴하면 억류된 영혼들을 해방시킬 수 있겠어."
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "포르셀루스가 나타날 거예요. 반드시 그 도장을 파괴해 주세요!"
					},
					"speaker": "cinder",
					"emotion": "angry",
					"type": "speech"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"speaker": "boss",
					"content": {
						"korean": "어머, 벌써 지쳤어? 오빠들 생명력도 전부 내 적금 통장에 강제 압류 완료다, 꿀!"
					},
					"type": "speech",
					"emotion": "happy"
				},
				{
					"content": {
						"korean": "…아직 끝나지 않았다. 부조리한 도장을 부술 때까지 포기하지 않는다!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"speaker": "boss",
					"content": {
						"korean": "어머~ 오빠들! 지옥 구경 재미있으셨어요? 그럼 이제 지옥 산소 호흡세, 용암 감상료 계산서 청구할게요!"
					},
					"type": "speech",
					"emotion": "happy"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "boss",
					"content": {
						"korean": "앙증맞은 저금통이라고 놀렸어? 지옥 염라대왕도 나한테 300년 만기 영혼 담보 대출받아서 지옥 운영하는 거 몰라?!"
					}
				},
				{
					"emotion": "angry",
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "지금 당장 너희 생명력 전부 짤랑짤랑 적금 통장에 강제 압류다, 꿀!!!"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "영혼을 담보로 부조리한 사기를 치다니... 이 가짜 채권을 끝내주마!"
					},
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"emotion": "angry",
					"content": {
						"korean": "제단의 영수증 도장을 부순다!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "영수증 도장이 산산조각 나며 지옥 영혼 청구 계약이 파기되었다."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "안 돼! 내 적금통! 내 짤랑이 영혼들이…!"
					},
					"speaker": "boss"
				},
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "cinder",
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "cinder",
					"content": {
						"korean": "저금통 슬릿에서 영혼들이 뿜어져 나오고 있어요! 마침내 억울한 굴레에서 벗어났어요!"
					},
					"type": "speech",
					"emotion": "happy"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "지옥 영혼 적금 계약은 이것으로 파기다."
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "억류되었던 영혼들이 본래 위치로 돌아가며 탐욕스러운 짤랑임이 멈추었다."
					},
					"speaker": "narrator"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"핫핑크 용암이 기괴하게 타오르는 지옥 중앙 제단.",
			"염라대왕조차 빚더미에 앉힌 지옥의 진짜 지배자가 기다리고 있다.",
			"도장이 찍힐 때마다 저금통 슬릿으로 강제 적립되던 죄인들의 생명력.",
			"이제 지옥의 부조리한 영혼 적금 계약을 끝낼 시간이다."
		]
	},
	"epilogue": {
		"korean": [
			"핫핑크 용암 제단에 찍혀 있던 영수증 도장이 산산조각 났다.",
			"돼지 저금통의 등에 파인 슬릿에서 억류되었던 영혼들이 쏟아져 나왔다.",
			"신더를 비롯한 죄수들은 마침내 부조리한 채권의 굴레에서 벗어났다.",
			"지옥을 뒤흔들던 영혼 적금 청구 계약은 영원히 파기되었다."
		]
	}
} as const;
