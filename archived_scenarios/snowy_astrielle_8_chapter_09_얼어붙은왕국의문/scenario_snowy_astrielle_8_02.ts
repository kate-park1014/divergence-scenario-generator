export const scenario_snowy_astrielle_8_02 = {
	"scenario_id": "snowy_astrielle_8_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"eira": {
			"id": "mon_0c37c014-b5ca-4f2f-ad03-5d393e5b2eb1",
			"name": {
				"korean": "에이라",
				"english": "Eira",
				"japanese": "エイラ",
				"chinese": "艾拉",
				"french": "Eira",
				"spanish": "Eira",
				"vietnamese": "Eira",
				"thai": "ไอรา",
				"hindi": "ऐरा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8e2970b7-bcb1-4b1c-6bf0-93106b373500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0ca1ec09-a624-450f-054a-b98de58bdb00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"혹한의 심장부로.",
			"차가운 바람이 살을 에는 곳.",
			"그곳에서, 잊힌 역사가 숨 쉬고 있었다.",
			"우리는 그저, 살아남아야 했다."
		],
		"english": [
			"Into the heart of the bitter cold.",
			"Where the biting wind cuts through.",
			"There, a forgotten history stirred.",
			"We simply had to survive."
		],
		"japanese": [
			"極寒の心臓部へ。",
			"冷たい風が肌を刺す場所。",
			"そこには、忘れ去られた歴史が息づいていた。",
			"私たちはただ、生き残るしかなかった。"
		],
		"chinese": [
			"深入严寒之心。",
			"寒风刺骨之地。",
			"尘封的历史在那里苏醒。",
			"我们必须活下去。"
		],
		"french": [
			"Au cœur du froid glacial.",
			"Là où le vent glacial transperce la chair.",
			"Là, une histoire oubliée respirait.",
			"Nous devions simplement survivre."
		],
		"spanish": [
			"Al corazón del frío gélido.",
			"Donde el viento gélido corta la piel.",
			"Allí, una historia olvidada respiraba.",
			"Simplemente teníamos que sobrevivir."
		],
		"vietnamese": [
			"Vào tận cùng giá lạnh.",
			"Nơi gió lạnh thấu xương.",
			"Ở đó, một lịch sử bị lãng quên đang sống dậy.",
			"Chúng ta chỉ đơn giản là phải sống sót."
		],
		"thai": [
			"สู่ใจกลางความหนาวเหน็บ.",
			"ที่ซึ่งลมหนาวกัดกินเนื้อ.",
			"ณ ที่นั้น ประวัติศาสตร์ที่ถูกลืมได้หายใจอยู่.",
			"เราแค่ต้องเอาชีวิตรอด."
		],
		"hindi": [
			"भीषण ठंड के दिल में।",
			"जहाँ बर्फीली हवा त्वचा को काटती है।",
			"वहाँ, एक भूला हुआ इतिहास साँस ले रहा था।",
			"हमें बस जीवित रहना था।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "왕국의 깊은 곳, 모든 것이 얼어붙었다.",
						"english": "Deep within the kingdom, everything froze.",
						"japanese": "王国の深部、すべてが凍りついた。",
						"chinese": "王国深处，万物俱冰。",
						"french": "Au plus profond du royaume, tout était gelé.",
						"spanish": "En lo profundo del reino, todo se congeló.",
						"vietnamese": "Sâu trong vương quốc, mọi thứ đều đóng băng.",
						"thai": "ลึกเข้าไปในอาณาจักร ทุกสิ่งล้วนกลายเป็นน้ำแข็ง.",
						"hindi": "राज्य के गहरे भीतर, सब कुछ जम गया।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "젠장, 움직이기도 힘들어.",
						"english": "Damn it, I can barely move.",
						"japanese": "くそ、動くのもやっとだ。",
						"chinese": "该死，连动都困难。",
						"french": "Bon sang, c'est difficile de bouger.",
						"spanish": "Maldita sea, apenas puedo moverme.",
						"vietnamese": "Chết tiệt, khó mà di chuyển được.",
						"thai": "ให้ตายสิ ขยับตัวแทบไม่ได้เลย.",
						"hindi": "धिक्कार है, हिलना भी मुश्किल है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction",
					"speaker": "eira",
					"duration_ms": 500
				},
				{
					"speaker": "eira",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "진정해요. 이런 곳에선 침착함이 곧 생존이죠.",
						"english": "Calm down. Here, composure is survival.",
						"japanese": "落ち着いて。こんな場所では、冷静さが生き残りへの鍵ですよ。",
						"chinese": "冷静。在这种地方，冷静就是生存。",
						"french": "Calmez-vous. Ici, le calme est synonyme de survie.",
						"spanish": "Cálmense. Aquí, la calma es supervivencia.",
						"vietnamese": "Bình tĩnh đi. Ở nơi thế này, giữ bình tĩnh là sống sót.",
						"thai": "ใจเย็นๆ ค่ะ ที่แบบนี้ ความใจเย็นคือการเอาชีวิตรอด.",
						"hindi": "शांत हो जाओ। ऐसी जगह में, शांति ही जीवित रहने का साधन है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "저기… 저 얼음 꽃들 좀 보세요. 기묘하게 섬세하죠?",
						"english": "Hey... look at those ice flowers. Strangely delicate, aren't they?",
						"japanese": "あの…あの氷の花を見てください。奇妙に繊細でしょう？",
						"chinese": "喂……看看那些冰花。是不是奇妙地精致？",
						"french": "Euh... regardez ces fleurs de glace. Elles sont étrangement délicates, n'est-ce pas ?",
						"spanish": "Oigan... miren esas flores de hielo. ¿No son extrañamente delicadas?",
						"vietnamese": "Này... nhìn những bông hoa băng kia kìa. Chúng tinh xảo một cách kỳ lạ phải không?",
						"thai": "เอ่อ... ดูดอกไม้น้ำแข็งพวกนั้นสิคะ แปลกประหลาดแต่บอบบางเนอะ?",
						"hindi": "अरे... उन बर्फीले फूलों को देखो। अजीब तरह से नाजुक हैं, है ना?"
					},
					"speaker": "eira",
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "eira",
					"duration_ms": 550,
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "이 얼음은 단순한 얼음이 아니에요. 무언가… 의지가 느껴져요.",
						"english": "This isn't just ice. I feel... a will.",
						"japanese": "この氷はただの氷じゃない。何かの…意思を感じる。",
						"chinese": "这冰不只是冰。我感觉到…一种意志。",
						"french": "Cette glace n'est pas une simple glace. Je ressens... une volonté.",
						"spanish": "Este hielo no es solo hielo. Siento... una voluntad.",
						"vietnamese": "Lớp băng này không chỉ là băng thường. Tôi cảm thấy... một ý chí.",
						"thai": "น้ำแข็งนี่ไม่ใช่แค่น้ำแข็งธรรมดาค่ะ ฉันรู้สึกได้ถึง... เจตจำนงบางอย่าง.",
						"hindi": "यह सिर्फ बर्फ नहीं है। मुझे... एक इच्छा महसूस हो रही है।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "얼음 꽃이 더 많아졌어.",
						"english": "The ice flowers have multiplied.",
						"japanese": "氷の花がもっと増えた。",
						"chinese": "冰花更多了。",
						"french": "Il y a plus de fleurs de glace.",
						"spanish": "Las flores de hielo han aumentado.",
						"vietnamese": "Hoa băng đã nhiều hơn rồi.",
						"thai": "ดอกไม้น้ำแข็งมีเยอะขึ้นแล้ว.",
						"hindi": "बर्फीले फूल और बढ़ गए हैं।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "맞아요. 이 혹한 속의 아름다움이라니. 어딘가 부자연스러워요.",
						"english": "Indeed. This beauty amidst the bitter cold. It feels unnatural.",
						"japanese": "そうですね。この酷寒の中の美しさとは。どこか不自然です。",
						"chinese": "没错。这严寒中的美丽。总觉得有些不自然。",
						"french": "C'est vrai. Cette beauté au milieu du froid glacial. C'est en quelque sorte contre nature.",
						"spanish": "Así es. Esta belleza en medio del frío glacial. Resulta algo antinatural.",
						"vietnamese": "Đúng vậy. Vẻ đẹp giữa giá lạnh khắc nghiệt này. Có gì đó không tự nhiên.",
						"thai": "ใช่แล้ว ความงามท่ามกลางความหนาวเหน็บนี้ มันดูไม่เป็นธรรมชาติเลย",
						"hindi": "हाँ, इस भीषण ठंड में यह सुंदरता। कुछ अजीब सा है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "그냥 신기한 얼음 아냐?",
						"english": "Just strange ice, isn't it?",
						"japanese": "ただの珍しい氷じゃないの？",
						"chinese": "不就是块奇怪的冰吗？",
						"french": "Ce n'est pas juste de la glace étrange ?",
						"spanish": "¿No es solo hielo extraño?",
						"vietnamese": "Chẳng phải chỉ là băng kỳ lạ thôi sao?",
						"thai": "ไม่ใช่แค่น้ำแข็งประหลาดเหรอ?",
						"hindi": "क्या यह सिर्फ अजीब बर्फ नहीं है?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_1"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 앞을 막아섰다.",
						"english": "A colossal shadow blocked the way.",
						"japanese": "巨大な影が道を阻んだ。",
						"chinese": "一道巨大的黑影挡住了去路。",
						"french": "Une ombre colossale bloquait le passage.",
						"spanish": "Una sombra gigantesca bloqueaba el paso.",
						"vietnamese": "Một cái bóng khổng lồ chắn ngang đường.",
						"thai": "เงาขนาดมหึมาขวางทางอยู่",
						"hindi": "एक विशाल परछाई ने रास्ता रोक लिया।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "direction",
					"spot": [
						3,
						3
					],
					"action": "enter",
					"duration_ms": 450,
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "침입자 주제에… 여기까지 오다니.",
						"english": "An intruder... to come this far.",
						"japanese": "侵入者の分際で…ここまで来るとはな。",
						"chinese": "区区入侵者……竟敢到此。",
						"french": "Un intrus... et dire que tu es arrivé jusqu'ici.",
						"spanish": "Un intruso... ¿y has llegado hasta aquí?",
						"vietnamese": "Kẻ xâm nhập... dám đến tận đây.",
						"thai": "แค่ผู้บุกรุก... กล้ามาถึงนี่ได้ยังไง",
						"hindi": "एक घुसपैठिया... इतनी दूर तक आ गया।"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "네가… 이곳의 중간 보스인가?",
						"english": "Are you... this place's mid-boss?",
						"japanese": "お前が…ここの中ボスか？",
						"chinese": "你就是……这里的中途头目吗？",
						"french": "Es-tu... le boss intermédiaire d'ici ?",
						"spanish": "¿Eres tú... el jefe intermedio de este lugar?",
						"vietnamese": "Ngươi... là trùm phụ của nơi này sao?",
						"thai": "แก... คือบอสรองที่นี่งั้นเหรอ?",
						"hindi": "क्या तुम... यहाँ के मध्य-बॉस हो?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "죽음으로… 영원히 얼어붙게 해주마.",
						"english": "To death... I'll freeze you solid forever.",
						"japanese": "死をもって…永遠に凍りつかせてやろう。",
						"chinese": "就用死亡……将你永远冰封。",
						"french": "Par la mort... je te ferai geler pour l'éternité.",
						"spanish": "Con la muerte... te congelaré para siempre.",
						"vietnamese": "Với cái chết... ta sẽ đóng băng ngươi vĩnh viễn.",
						"thai": "ด้วยความตาย... ข้าจะแช่แข็งเจ้าชั่วนิรันดร์",
						"hindi": "मौत से... मैं तुम्हें हमेशा के लिए जमा दूंगा।"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "이 힘… 얼음 꽃의 기운과 닮았어.",
						"english": "This power... it resembles the aura of the Ice Flower.",
						"japanese": "この力…氷の華の気配と似ている。",
						"chinese": "这股力量……和冰花的灵气很像。",
						"french": "Ce pouvoir... il ressemble à l'énergie de la Fleur de Glace.",
						"spanish": "Este poder... se parece a la energía de la Flor de Hielo.",
						"vietnamese": "Sức mạnh này... giống với khí tức của Băng Hoa.",
						"thai": "พลังนี้... เหมือนกับพลังของบุปผาน้ำแข็งเลย",
						"hindi": "यह शक्ति... बर्फ के फूल की आभा जैसी है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "eira"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"duration_ms": 400,
					"speaker": "eira"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "겨우 쓰러뜨렸어… 온몸이 얼어붙는 것 같아.",
						"english": "Finally defeated it... My whole body feels like it's freezing.",
						"japanese": "ようやく倒した…全身が凍りつくようだ。",
						"chinese": "终于打倒了……感觉全身都要冻僵了。",
						"french": "Enfin vaincu... J'ai l'impression que tout mon corps gèle.",
						"spanish": "Por fin lo derribé... Siento que todo mi cuerpo se congela.",
						"vietnamese": "Cuối cùng cũng đánh bại được... Cả người cứ như đóng băng vậy.",
						"thai": "ในที่สุดก็โค่นมันลงได้... รู้สึกเหมือนทั้งตัวกำลังจะแข็ง",
						"hindi": "आखिरकार उसे हरा दिया... मेरा पूरा शरीर जम रहा है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "분명… 저 존재는 이 혹한과 연결되어 있어요.",
						"english": "Clearly... that being is connected to this bitter cold.",
						"japanese": "きっと…あの存在はこの酷寒と繋がっている。",
						"chinese": "显然……那个存在与这严寒息息相关。",
						"french": "Clairement... cette entité est liée à ce froid glacial.",
						"spanish": "Claramente... esa entidad está conectada a este frío glacial.",
						"vietnamese": "Rõ ràng... sự tồn tại đó có liên hệ với giá lạnh này.",
						"thai": "แน่นอน... สิ่งนั้นเชื่อมโยงกับความหนาวเหน็บนี้",
						"hindi": "निश्चित रूप से... वह अस्तित्व इस भीषण ठंड से जुड़ा हुआ है।"
					},
					"speaker": "eira",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "룬의 조각이 보였어요. 저 얼음 꽃, 단순한 장식이 아니었어…",
						"english": "I saw a fragment of a rune. That Ice Flower, it wasn't just a decoration...",
						"japanese": "ルーンの破片が見えた。あの氷の華、ただの飾りじゃなかった…",
						"chinese": "我看到了符文碎片。那冰花，原来不是单纯的装饰……",
						"french": "J'ai vu un fragment de rune. Cette Fleur de Glace, ce n'était pas qu'une simple décoration...",
						"spanish": "Vi un fragmento de runa. Esa Flor de Hielo, no era una simple decoración...",
						"vietnamese": "Tôi đã thấy một mảnh vỡ rune. Bông hoa băng đó, không phải chỉ là vật trang trí đơn thuần...",
						"thai": "ฉันเห็นเศษรูนแล้ว ดอกไม้น้ำแข็งนั่น ไม่ใช่แค่ของตกแต่งธรรมดา...",
						"hindi": "मुझे एक रूण का टुकड़ा दिखा। वह बर्फ का फूल, सिर्फ सजावट नहीं था..."
					},
					"speaker": "eira",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "룬? 그게 뭔데?",
						"english": "Rune? What's that?",
						"japanese": "ルーン？それは何だ？",
						"chinese": "符文？那是什么？",
						"french": "Rune ? Qu'est-ce que c'est ?",
						"spanish": "¿Runa? ¿Qué es eso?",
						"vietnamese": "Rune? Cái đó là gì?",
						"thai": "รูน? นั่นอะไรน่ะ?",
						"hindi": "रून? वह क्या है?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "잊힌 옛 기록. 해독해야 할 것 같아요.",
						"english": "Forgotten ancient records. I think they need deciphering.",
						"japanese": "忘れられた古の記録。解読する必要がありそうだ。",
						"chinese": "被遗忘的古老记录。我想我们需要破译它。",
						"french": "D'anciens écrits oubliés. Il faut les déchiffrer, je crois.",
						"spanish": "Antiguos registros olvidados. Creo que necesitan ser descifrados.",
						"vietnamese": "Những ghi chép cổ xưa bị lãng quên. Tôi nghĩ cần phải giải mã chúng.",
						"thai": "บันทึกโบราณที่ถูกลืมเลือน ดูเหมือนจะต้องถอดรหัส",
						"hindi": "भूले हुए प्राचीन अभिलेख। मुझे लगता है कि इन्हें समझना होगा।"
					},
					"type": "speech"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction",
					"speaker": "eira",
					"duration_ms": 500
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "감히… 여왕님의 분노를 거스를 수는 없어.",
						"english": "How dare you... You cannot defy the Queen's wrath.",
						"japanese": "よくも… 女王陛下の怒りに逆らうことはできない。",
						"chinese": "你竟敢… 无法违抗女王的愤怒。",
						"french": "Comment oses-tu... Tu ne peux pas défier la colère de la Reine.",
						"spanish": "Cómo te atreves... No puedes desafiar la ira de la Reina.",
						"vietnamese": "Sao ngươi dám… Ngươi không thể chống lại cơn thịnh nộ của Nữ hoàng.",
						"thai": "บังอาจ... เจ้ามิอาจท้าทายโทสะของราชินีได้",
						"hindi": "तुम्हारी हिम्मत कैसे हुई... तुम रानी के क्रोध का विरोध नहीं कर सकते।"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "젠장… 다시 한번.",
						"english": "Damn it... One more time.",
						"japanese": "ちくしょう… もう一度だ。",
						"chinese": "该死… 再来一次。",
						"french": "Maudit... Encore une fois.",
						"spanish": "Maldita sea... Una vez más.",
						"vietnamese": "Chết tiệt… Thêm một lần nữa.",
						"thai": "บ้าเอ๊ย... อีกครั้ง",
						"hindi": "धिक्कार है... एक और बार।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "여기서 멈출 순 없어요. 아직… 해독할 게 너무 많아요.",
						"english": "I can't stop here. There's still... so much to decrypt.",
						"japanese": "ここで止まるわけにはいかない。まだ… 解読すべきものが多すぎる。",
						"chinese": "我不能停在这里。还有… 太多东西需要解密。",
						"french": "Je ne peux pas m'arrêter ici. Il y a encore... tellement à décrypter.",
						"spanish": "No puedo parar aquí. Todavía hay... mucho que descifrar.",
						"vietnamese": "Tôi không thể dừng lại ở đây. Vẫn còn… rất nhiều thứ cần giải mã.",
						"thai": "ฉันหยุดตรงนี้ไม่ได้ ยังมี... อีกมากที่ต้องถอดรหัส",
						"hindi": "मैं यहाँ रुक नहीं सकता। अभी भी... बहुत कुछ डिक्रिप्ट करना बाकी है।"
					},
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "다시금 거대한 존재가 앞을 가로막았다.",
						"english": "Once again, a colossal presence blocked their path.",
						"japanese": "再び、巨大な存在が道を塞いだ。",
						"chinese": "巨大的存在再次挡住了去路。",
						"french": "Une fois de plus, une présence colossale bloquait leur chemin.",
						"spanish": "Una vez más, una presencia colosal bloqueó el camino.",
						"vietnamese": "Một lần nữa, một thực thể khổng lồ chắn lối.",
						"thai": "อีกครั้งที่ร่างมหึมาขวางทาง",
						"hindi": "एक बार फिर, एक विशालकाय उपस्थिति ने रास्ता रोक लिया।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction",
					"speaker": "eira",
					"duration_ms": 500
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "오만한 침입자들… 여왕님의 영역에 발을 들이다니.",
						"english": "Arrogant intruders... daring to tread in Her Majesty's domain.",
						"japanese": "傲慢な侵入者たち…女王様の領域に足を踏み入れるとは。",
						"chinese": "傲慢的入侵者…竟敢踏足女王陛下的领地。",
						"french": "Intrus arrogants... osant fouler le domaine de Sa Majesté.",
						"spanish": "Intrusos arrogantes... ¿cómo osan pisar el dominio de Su Majestad?",
						"vietnamese": "Những kẻ xâm nhập kiêu ngạo... dám đặt chân vào lãnh địa của Nữ hoàng.",
						"thai": "พวกผู้บุกรุกที่โอหัง... กล้าดียังไงมาเหยียบย่างในอาณาเขตขององค์ราชินี",
						"hindi": "घमंडी घुसपैठिए... हमारी महारानी के क्षेत्र में कदम रखने की हिम्मत!"
					}
				},
				{
					"content": {
						"korean": "여왕님? 아스트리엘?",
						"english": "Her Majesty? Astriel?",
						"japanese": "女王様？アストリエル？",
						"chinese": "女王陛下？阿斯特丽尔？",
						"french": "Sa Majesté ? Astriel ?",
						"spanish": "¿Su Majestad? ¿Astriel?",
						"vietnamese": "Nữ hoàng? Astriel?",
						"thai": "องค์ราชินี? แอสเทรียล?",
						"hindi": "महारानी? एस्ट्रियल?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "네놈들은… 아무것도 알지 못한다. 감히… 이 땅을 더럽히지 마라.",
						"english": "You fools... know nothing. Dare not... defile this land.",
						"japanese": "貴様らは…何も知らない。よくも…この地を汚すな。",
						"chinese": "你们…一无所知。休想…玷污这片土地。",
						"french": "Vous... ne savez rien. N'osez pas... souiller cette terre.",
						"spanish": "Vosotros... no sabéis nada. ¡No os atreváis... a profanar esta tierra!",
						"vietnamese": "Các ngươi... không biết gì cả. Dám... đừng làm ô uế mảnh đất này.",
						"thai": "พวกแก... ไม่รู้อะไรเลย. อย่า... มาแปดเปื้อนดินแดนนี้",
						"hindi": "तुम लोग... कुछ नहीं जानते। हिम्मत मत करना... इस भूमि को अपवित्र करने की।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "여왕님이라… 과연.",
						"english": "Her Majesty, huh... Indeed.",
						"japanese": "女王様か…なるほど。",
						"chinese": "女王陛下啊…果然如此。",
						"french": "Sa Majesté, hein... En effet.",
						"spanish": "¿Su Majestad, eh...? Ya veo.",
						"vietnamese": "Nữ hoàng à... Quả nhiên.",
						"thai": "องค์ราชินีสินะ... เป็นเช่นนั้นเอง",
						"hindi": "महारानी, ​​हैं... वाकई।"
					},
					"speaker": "eira",
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"spot": [
						3,
						3
					],
					"action": "enter",
					"type": "direction",
					"speaker": "eira",
					"duration_ms": 400
				},
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "크… 큭… 결국… 여왕님을 막지 못하는구나…",
						"english": "Ugh... Hmph... In the end... I couldn't stop Her Majesty...",
						"japanese": "くっ…くぅ…結局…女王様を止められなかった…",
						"chinese": "咳…咳…终究…还是没能阻止女王陛下啊…",
						"french": "Urgh... Hmph... Finalement... Je n'ai pas pu arrêter Sa Majesté...",
						"spanish": "Ugh... Hmph... Al final... no pude detener a Su Majestad...",
						"vietnamese": "Khụ... khụ... Cuối cùng... vẫn không thể ngăn Nữ hoàng...",
						"thai": "อึก... เฮือก... สุดท้าย... ก็หยุดองค์ราชินีไว้ไม่ได้...",
						"hindi": "उफ़... हुंह... अंततः... मैं महारानी को रोक नहीं पाया..."
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "여왕을 막아? 무슨 소리야.",
						"english": "Stop the queen? What are you talking about?",
						"japanese": "女王を止める？何を言ってるんだ。",
						"chinese": "阻止女王？你在说什么。",
						"french": "Arrêter la reine ? De quoi parlez-vous ?",
						"spanish": "¿Detener a la reina? ¿De qué hablas?",
						"vietnamese": "Ngăn Nữ hoàng? Ý ngươi là gì?",
						"thai": "หยุดราชินี? พูดอะไรน่ะ",
						"hindi": "रानी को रोकें? क्या बक रहे हो।"
					}
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "죽어가면서도… 슬픔이 느껴져요. 단순한 병사가 아니었어.",
						"english": "Even as he dies... I feel his sorrow. He wasn't just a soldier.",
						"japanese": "死にゆく中でも…悲しみが感じられる。ただの兵士ではなかった。",
						"chinese": "即使在临死之际…我仍能感受到他的悲伤。他不是一个普通的士兵。",
						"french": "Même en mourant... je ressens sa tristesse. Ce n'était pas un simple soldat.",
						"spanish": "Incluso mientras muere... siento su tristeza. No era solo un soldado.",
						"vietnamese": "Ngay cả khi chết... tôi vẫn cảm nhận được nỗi buồn của anh ta. Anh ta không chỉ là một người lính đơn thuần.",
						"thai": "แม้กำลังจะตาย... ก็ยังสัมผัสได้ถึงความเศร้า. เขาไม่ใช่แค่ทหารธรรมดา",
						"hindi": "मरते हुए भी... मुझे उसका दुख महसूस हो रहा है। वह सिर्फ एक सैनिक नहीं था।"
					},
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "얼어붙은 땅은 잠시 침묵했다. 더 깊은 곳으로 향하는 길목이 열렸다.",
						"english": "The frozen land fell silent for a moment. A path to deeper depths opened.",
						"japanese": "凍てついた大地はしばし沈黙した。より深き場所へと続く道が開かれた。",
						"chinese": "冻结的土地短暂地沉寂了。通往更深处的道路已开启。",
						"french": "La terre gelée se tut un instant. Un chemin vers des profondeurs plus grandes s'ouvrit.",
						"spanish": "La tierra helada permaneció en silencio por un momento. Un camino hacia profundidades mayores se abrió.",
						"vietnamese": "Vùng đất băng giá im lặng trong chốc lát. Một con đường dẫn đến những vực sâu hơn đã mở ra.",
						"thai": "ดินแดนเยือกแข็งเงียบงันลงชั่วขณะ ทางสู่ห้วงลึกยิ่งกว่าได้เปิดออกแล้ว",
						"hindi": "जमी हुई भूमि कुछ पल के लिए शांत हो गई। गहरे स्थानों का मार्ग खुल गया。"
					}
				}
			],
			"id": 15
		}
	]
} as const;
