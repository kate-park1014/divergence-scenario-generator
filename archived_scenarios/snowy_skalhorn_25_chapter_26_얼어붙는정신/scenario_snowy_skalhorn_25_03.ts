export const scenario_snowy_skalhorn_25_03 = {
	"scenario_id": "snowy_skalhorn_25_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"boris": {
			"id": "mon_8f41e00a-9c1b-4e66-9d7a-584cc2a9af84",
			"name": {
				"korean": "보리스",
				"english": "Boris",
				"japanese": "ボリス",
				"chinese": "鲍里斯",
				"french": "Boris",
				"spanish": "Boris",
				"vietnamese": "Boris",
				"thai": "บอริส",
				"hindi": "बोरिस"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8db2ee50-a24d-43cf-a3ec-fad83142f500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/961dfd96-9db1-42aa-a15b-82ba7d1ae700/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "…점점 추운데, 기분은 편안해.",
						"english": "...It's getting colder, but I feel at ease.",
						"japanese": "…だんだん寒くなってきたけど、気分は楽だ。",
						"chinese": "……越来越冷了，但我感觉很舒服。",
						"french": "...Il fait de plus en plus froid, mais je me sens à l'aise.",
						"spanish": "...Cada vez hace más frío, pero me siento cómoda.",
						"vietnamese": "Càng lúc càng lạnh, nhưng lại thấy dễ chịu.",
						"thai": "ยิ่งหนาวขึ้นเรื่อยๆ แต่รู้สึกสบาย",
						"hindi": "ठंड बढ़ती जा रही है, पर मैं सहज महसूस कर रहा हूँ।"
					}
				},
				{
					"content": {
						"korean": "응… 아무것도 생각 안 나. 좋아…",
						"english": "Yeah... I can't think of anything. Good...",
						"japanese": "うん…何も考えられない。良い感じ…",
						"chinese": "嗯……什么都想不起来。真好……",
						"french": "Ouais... Je ne pense à rien. C'est bien...",
						"spanish": "Sí... no puedo pensar en nada. Bien...",
						"vietnamese": "Ừm... không nghĩ ra gì cả. Tuyệt...",
						"thai": "อือ… ไม่คิดอะไรเลย ดีจัง…",
						"hindi": "हाँ... कुछ भी याद नहीं आ रहा। अच्छा..."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_1"
				},
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction",
					"action": "enter",
					"speaker": "boris"
				},
				{
					"speaker": "boris",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "야. 정신 차려.",
						"english": "Hey. Snap out of it.",
						"japanese": "おい。しっかりしろ。",
						"chinese": "喂。清醒一点。",
						"french": "Hé. Reprends-toi.",
						"spanish": "Oye. Espabila.",
						"vietnamese": "Này. Tỉnh táo lại đi.",
						"thai": "เฮ้ ตั้งสติหน่อย",
						"hindi": "अरे। होश में आओ।"
					}
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "왜…? 평화롭잖아.",
						"english": "Why...? It's peaceful.",
						"japanese": "なんで…？平和じゃないか。",
						"chinese": "为什么……？这不是挺和平的吗。",
						"french": "Pourquoi...? C'est paisible.",
						"spanish": "¿Por qué...? Es pacífico.",
						"vietnamese": "Sao chứ...? Bình yên mà.",
						"thai": "ทำไม…? มันก็สงบดีนี่",
						"hindi": "क्यों...? यह शांतिपूर्ण है।"
					}
				},
				{
					"content": {
						"korean": "평화? 두려움이 사라지는 게 좋은 거라고?",
						"english": "Peaceful? Is fear vanishing a good thing?",
						"japanese": "平和？恐れが消えるのが良いことだと？",
						"chinese": "和平？恐惧消失是好事吗？",
						"french": "Paisible ? La disparition de la peur, c'est une bonne chose ?",
						"spanish": "¿Pacífico? ¿Que el miedo desaparezca es bueno?",
						"vietnamese": "Bình yên? Nỗi sợ tan biến là tốt sao?",
						"thai": "สงบ? การที่ความกลัวหายไปเป็นเรื่องดีเหรอ?",
						"hindi": "शांतिपूर्ण? डर का गायब होना अच्छी बात है क्या?"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "boris"
				},
				{
					"content": {
						"korean": "천만에. 이건 정신을 얼리는 거야.",
						"english": "Not at all. This is freezing your mind.",
						"japanese": "とんでもない。これは精神を凍らせるものだ。",
						"chinese": "绝非如此。这只会冻结你的精神。",
						"french": "Pas du tout. Cela gèle votre esprit.",
						"spanish": "En absoluto. Esto te está congelando la mente.",
						"vietnamese": "Không đời nào. Cái này đang đóng băng tinh thần đấy.",
						"thai": "ไม่ใช่เลย นี่มันกำลังทำให้จิตใจเธอชาชินต่างหาก",
						"hindi": "बिल्कुल नहीं। यह तुम्हारे दिमाग को जमा रहा है।"
					},
					"speaker": "boris",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"duration_ms": 400,
					"type": "direction",
					"speaker": "character_1",
					"action": "shake"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_1",
					"content": {
						"korean": "…으윽. 갑자기 머리가 깨지는 것 같아.",
						"english": "...Ugh. My head suddenly feels like it's splitting.",
						"japanese": "…うぅ。急に頭が割れるようだ。",
						"chinese": "…呃。头突然感觉要裂开了。",
						"french": "...Ugh. Ma tête me fait soudainement l'impression d'éclater.",
						"spanish": "...Ugh. De repente siento que la cabeza me va a estallar.",
						"vietnamese": "...Ư. Tự nhiên đầu tôi như muốn nứt ra.",
						"thai": "...อึก. จู่ๆ หัวก็รู้สึกเหมือนจะแตกเป็นเสี่ยงๆ เลย",
						"hindi": "...उफ। अचानक मेरा सर फटा जा रहा है。"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "boris",
					"content": {
						"korean": "뿔잔의 한기가 의지를 마비시키는 거라고. 속지 마.",
						"english": "The horn cup's chill is paralyzing your will. Don't be fooled.",
						"japanese": "角杯の冷気がお前の意思を麻痺させているんだ。騙されるな。",
						"chinese": "是号角杯的寒气在麻痹你的意志。别上当。",
						"french": "La froideur de la corne gèle ta volonté. Ne te laisse pas berner.",
						"spanish": "El frío del cuerno está paralizando tu voluntad. No te dejes engañar.",
						"vietnamese": "Hơi lạnh từ chiếc sừng đang làm tê liệt ý chí của ngươi đấy. Đừng mắc lừa.",
						"thai": "ความหนาวเย็นจากถ้วยเขากำลังทำให้เจตจำนงของเจ้าเป็นอัมพาต อย่าหลงกลนะ",
						"hindi": "सींग के प्याले की ठंडक तुम्हारी इच्छाशक्ति को सुन्न कर रही है। धोखा मत खाओ।"
					}
				}
			]
		},
		{
			"dialogue": [],
			"id": 5
		},
		{
			"dialogue": [],
			"id": 9
		},
		{
			"lose_dialogue": [],
			"win_dialogue": [],
			"dialogue": [],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"겨울 숲 깊숙이, 뿔잔의 한기가 스며들었다.",
			"두려움은 사라지고, 멍한 평온이 찾아왔다.",
			"그러나 발걸음은 저도 모르게 뿔잔을 향했다.",
			"이 고요함이, 어쩐지 수상하다."
		],
		"english": [
			"Deep in the winter forest, the chill of the Horn Cup seeped in.",
			"Fear vanished, replaced by a dull tranquility.",
			"Yet, my steps unwittingly led towards the Horn Cup.",
			"This stillness, somehow, is suspicious."
		],
		"japanese": [
			"冬の森の奥深く、角杯の冷気が染み込んだ。",
			"恐れは消え、ぼんやりとした静寂が訪れた。",
			"しかし、足取りは知らず知らずのうちに角杯へと向かった。",
			"この静けさ、どうも怪しい。"
		],
		"chinese": [
			"冬日森林深处，号角杯的寒气弥漫开来。",
			"恐惧消散，取而代之的是一片茫然的平静。",
			"然而，脚步却不自觉地走向号角杯。",
			"这种宁静，总觉得有些可疑。"
		],
		"french": [
			"Au plus profond de la forêt hivernale, le froid du Calice de Cor s'est insinué.",
			"La peur s'est dissipée, remplacée par une tranquillité engourdissante.",
			"Pourtant, mes pas me menèrent malgré moi vers le Calice de Cor.",
			"Ce calme, d'une manière ou d'une autre, est suspect."
		],
		"spanish": [
			"En lo profundo del bosque invernal, el frío del Cuerno se infiltró.",
			"El miedo desapareció, una paz aturdida se hizo presente.",
			"Sin embargo, mis pasos, sin darme cuenta, se dirigieron hacia el Cuerno.",
			"Esta quietud, de alguna manera, es sospechosa."
		],
		"vietnamese": [
			"Sâu trong rừng mùa đông, hơi lạnh từ Sừng Sừng thấm vào.",
			"Nỗi sợ tan biến, sự bình yên tê dại ập đến.",
			"Thế nhưng, bước chân vô thức hướng về Sừng Sừng.",
			"Sự yên tĩnh này, sao mà đáng ngờ."
		],
		"thai": [
			"ลึกเข้าไปในป่าฤดูหนาว ความหนาวเย็นของถ้วยเขาได้แทรกซึมเข้ามา",
			"ความกลัวหายไป ความสงบที่ไร้ความรู้สึกได้เข้ามาแทนที่",
			"แต่ทว่าก้าวเดินกลับมุ่งหน้าสู่ถ้วยเขาโดยไม่รู้ตัว",
			"ความเงียบสงบนี้ ช่างน่าสงสัยเหลือเกิน"
		],
		"hindi": [
			"सर्दियों के जंगल की गहराई में, हॉर्न कप की ठंडक समा गई।",
			"डर गायब हो गया, एक सुस्त शांति छा गई।",
			"फिर भी, मेरे कदम अनजाने में हॉर्न कप की ओर बढ़ गए।",
			"यह खामोशी, किसी तरह, संदिग्ध है।"
		]
	}
} as const;
