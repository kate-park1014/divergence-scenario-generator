export const scenario_hell_cystis_32_05 = {
	"scenario_id": "hell_cystis_32_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "hell",
	"actors": {
		"ash": {
			"id": "mon_b225f5fa-59a1-47bb-b4c5-e73bf9e7192a",
			"name": {
				"korean": "애쉬",
				"english": "Ash",
				"japanese": "アッシュ",
				"chinese": "艾什",
				"french": "Ash",
				"spanish": "Ash",
				"vietnamese": "Ash",
				"thai": "แอช",
				"hindi": "ऐश"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d84413a8-9d6f-4a40-5d36-75e431fb9900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/78281fca-e4b8-45cc-68ef-7df3fef74200/public"
		}
	},
	"boss": {
		"pool_id": "pool_NeonParasite_Cystis_V1"
	},
	"epilogue": {
		"korean": [
			"시스티스는 사멸했고, 성소를 채우던 옥빛 환각도 사라졌다.",
			"그러나 마비가 풀린 신도들의 내장은 모조리 터져 나가 피바다가 되었다.",
			"기적의 구원도, 해방의 승리도 처음부터 존재하지 않았다.",
			"핏빛으로 물든 유황 제단 위에는 오직 차가운 허무만이 남아 있었다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "유황 불길이 치솟는 제단 앞. 신도 애쉬가 옥빛 영수병을 안고 비틀거린다."
					}
				},
				{
					"action": "enter",
					"speaker": "ash",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 병을 놓으면… 다시 고통이 시작돼…!"
					},
					"emotion": "sad",
					"speaker": "ash"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그 병에 든 건 치유약이 아니다."
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "아니야! 이걸 마시면 아무것도 안 아프단 말이야!"
					},
					"speaker": "ash",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "신경이 마비되었을 뿐이다. 배 속을 똑똑히 봐라."
					},
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "ash",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "ash",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "내… 내 배 속에서 뭔가 꼼지락거려…!"
					}
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "…뼛속까지 소름이 돋는다."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "영수의 환각을 깨뜨려야 한다. 그 영수병을 깨부수겠다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "안 돼! 마비가 풀리면 나는 죽어!"
					},
					"speaker": "ash"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "독약으로 연명하는 거짓 구원을 끝내겠다."
					},
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "옥빛 영수병이 유황 불길 속에 던져져 깨어져 나간다."
					},
					"speaker": "narrator"
				},
				{
					"speaker": "ash",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "아아아악! 영수가… 영수가 사라진다!"
					},
					"speaker": "ash",
					"type": "speech"
				},
				{
					"content": {
						"korean": "배가… 내장이 찢어지는 것 같아!"
					},
					"emotion": "sad",
					"speaker": "ash",
					"type": "speech"
				},
				{
					"duration_ms": 400,
					"action": "exit",
					"type": "direction",
					"direction": "down",
					"speaker": "ash"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "기생충 알집으로 신도를 속인 자여, 모습을 드러내라!"
					},
					"emotion": "angry"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "제단 중앙에서 아름다운 선인의 탈이 벗겨지며 기생 괴충의 본체가 비틀려 올라온다."
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…창자가 꼬여드는 통증이다."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "우리 배 속에서도 충체가 자라고 있었다."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "더 늦기 전에 시스티스를 베어내야 한다!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "아아, 부질없이 영수병을 깨뜨리다니… 참으로 가엾군요."
					},
					"emotion": "base",
					"speaker": "boss",
					"type": "speech"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "느껴지시나요? 당신들의 따뜻한 곱창 속에서 내 아이들이 껍질을 깨는 소용돌이가!"
					},
					"emotion": "happy",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "괴물 녀석, 너의 기만은 여기서 끝이다!"
					},
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "후후… 날 찢어발겨도… 마비가 풀린 당신들의 장기는 돌아오지 않아요…"
					},
					"emotion": "happy",
					"speaker": "boss"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "시스티스가 무너지자, 성소 전체에 잔혹한 핏빛 비명이 울려 퍼진다."
					}
				},
				{
					"type": "direction",
					"speaker": "ash",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"speaker": "ash",
					"type": "speech",
					"content": {
						"korean": "배가… 내장이 터져나간다아악!"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "구원도, 승리도 없었다… 오직 껍데기뿐인 비극이다."
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "happy",
					"content": {
						"korean": "흐흣, 어서 내 아이들의 영원한 둥지가 되어주렴…"
					},
					"speaker": "boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "배 속이 파열되어도… 널 끌어안고 죽겠다…"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"유황 냄새가 진동하는 제단 깊은 곳.",
			"구원의 탈을 쓴 기생 연금술사가 미소를 지으며 기다린다.",
			"옥빛 영수병이 깨어지는 순간, 참혹한 진실이 드러난다.",
			"피바다 속에 피어난 것은 구원이 아닌 잔혹한 종말이었다."
		]
	}
} as const;
