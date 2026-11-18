export const scenario_hell_philomel_39_05 = {
	"scenario_id": "hell_philomel_39_05",
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
		"pool_id": "pool_MartyrCradle_Philomel_V1"
	},
	"epilogue": {
		"korean": [
			"지옥 심장부를 채우던 흉흉한 불길이 서리 수정을 만나 차갑게 진정되었다.",
			"실수로 봉인을 떼어내며 시작됐던 지옥불의 폭발 위기와 열기는 마침내 사그라들었다.",
			"마법 대륙을 온몸으로 지켜낸 작은 별빛 정령은 무거운 갑옷을 벗어 던지고 평온을 찾았다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "지옥 심장부 바닥 곳곳에 형광 빛깔 자국이 눌러붙어 있다."
					},
					"speaker": "narrator"
				},
				{
					"duration_ms": 500,
					"speaker": "ash",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "지옥 입구 절벽에서 보았던 형광 빛깔 눈물 자국이 여기까지 이어져 있군요."
					},
					"speaker": "ash"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "눈물 자국에 지옥의 불길 대신 차가운 기운이 서려 있어."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "…발 밑에서 지옥불의 열기가 솟구쳐."
					},
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "공기 중에서 핫핑크빛 깃털 파편이 흩날린다."
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "ash"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "붉은 바위 골짜기에서 발견했던 그 핫핑크빛 깃털입니다!"
					},
					"speaker": "ash"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "깃털에 지옥의 열 대신 따뜻한 별빛 온기가 남아 있군."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_2",
					"content": {
						"korean": "…숨이 턱턱 막히는 열기야."
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "심장부 입구 바닥에 검게 탄 흑요석 투구 조각들이 떨어져 있다."
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "ash"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "용암 동굴에서 조사했던 깨진 흑요석 투구 조각과 같은 성분이에요."
					},
					"speaker": "ash"
				},
				{
					"content": {
						"korean": "투구 안쪽에 무거운 봉인 흔적이 남아 있어. 집행자 스스로를 묶어둔 흔적이야."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "exit",
					"direction": "down",
					"duration_ms": 400,
					"speaker": "ash"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…불꽃 코어가 바로 앞에서 요동치고 있어."
					},
					"speaker": "character_3"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "거대한 지옥불 기둥이 솟구치며 심장부 전체가 좌우로 흔들린다."
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "집행자가 다가온다. 불길 폭발을 막으려면 멈춰 세워야 해."
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…심장 소리가 귓가를 찢을 것 같아."
					},
					"speaker": "character_4"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "제발… 제 안의 지옥불이 터지기 전에 이곳을 떠나세요!"
					},
					"speaker": "boss"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…별빛 서리 수정을 밀어 넣을 때까지 포기하지 않는다!"
					},
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "저는 마법 대륙으로 번지는 지옥불을 삼키고, 무거운 갑옷 속에 제 자신을 가두었어요."
					},
					"speaker": "boss",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "내 몸 안의 불이 사람들에게 번질까 봐, 일부러 사납게 굴어 쫓아내려 했던 거예요…"
					},
					"speaker": "boss",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "더는 혼자 참지 마! 별빛 서리 수정을 불꽃 코어에 집어넣어 열기를 식히겠다!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "서리 수정의 차가운 기운이 요동치던 불꽃 코어를 부드럽게 감싸 안는다."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…지옥불이 식어가요. 오랫동안 나를 태우던 고통이 마침내 멈췄어요."
					},
					"speaker": "boss"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "별빛 정령이 눈물을 거두자 지옥 심장부의 불길 폭발이 차분히 진정된다."
					}
				},
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter",
					"speaker": "ash",
					"direction": "down"
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "지옥불 폭발이 멈췄어요! 대륙도, 그리고 필로멜 님도 구해낸 겁니다!"
					},
					"speaker": "ash",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "거대한 갑옷을 두른 집행자 필로멜이 핫핑크빛 날개를 펼치며 거친 불길을 뿜어낸다."
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "지옥의 불길에 잿더미가 되고 싶지 않다면 당장 이곳에서 떠나라!"
					},
					"speaker": "boss",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "불꽃 코어의 폭발을 막기 전까진 물러서지 않는다!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "탐험대가 가까이 다가가자 집행자가 투구를 벗어 던지고, 텅 빈 갑옷 속 별빛 정령이 눈물을 흘린다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "제발 더 가까이 오지 마세요. 제 안의 불이 새어 나오면 당신들까지 재가 돼요. 어서 도망치세요!"
					},
					"speaker": "boss",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "갑옷 속 정령은 검은 제단에서 본 청록빛 수정 깃털의 주인이었어!"
					},
					"speaker": "character_any"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"지옥 심장부. 마법 대륙 전체를 삼키려는 지옥불이 요동친다.",
			"폭발이 일어나기 직전, 붉은 용암 열기 속에서 거대한 집행자가 서 있다.",
			"탐험대는 애쉬에게 전달받은 별빛 서리 수정을 쥔 채 마지막 전장으로 나아간다."
		]
	}
} as const;
