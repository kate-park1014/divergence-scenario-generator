export const scenario_snowy_finn_9_01 = {
	"scenario_id": "snowy_finn_9_01",
	"order": 1,
	"act": "intro",
	"theme": "snowy",
	"actors": {
		"inka": {
			"id": "mon_583e945a-1e2f-428b-a251-b428f25b4052",
			"name": {
				"korean": "인카",
				"english": "Inka",
				"japanese": "インカ",
				"chinese": "因卡",
				"french": "Inka",
				"spanish": "Inka",
				"vietnamese": "Inka",
				"thai": "อินคา",
				"hindi": "इंंका"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/97f4545b-2e8a-4688-3e4e-b34bb246dd00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f27763ba-2358-4fd3-c813-0f0b59dcac00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "설산 깊은 곳, 얼음 동굴의 심장부. 거대한 얼음 왕좌에 한 인물이 앉아 있었다.",
						"english": "Deep within the snow mountain, in the heart of an ice cave. A figure sat upon a colossal ice throne.",
						"japanese": "雪山の奥深く、氷の洞窟の心臓部。巨大な氷の玉座に一人の人物が座っていた。",
						"chinese": "雪山深处，冰窟心脏。一个身影坐在巨大的冰之王座上。",
						"french": "Au plus profond de la montagne de neige, au cœur d'une grotte de glace. Une figure était assise sur un trône de glace colossal.",
						"spanish": "En lo profundo de la montaña nevada, en el corazón de una cueva de hielo. Una figura se sentaba en un colosal trono de hielo.",
						"vietnamese": "Sâu trong núi tuyết, tại trung tâm hang băng. Một nhân vật ngồi trên ngai vàng băng khổng lồ.",
						"thai": "ลึกเข้าไปในภูเขาหิมะ ใจกลางถ้ำน้ำแข็ง มีร่างหนึ่งนั่งอยู่บนบัลลังก์น้ำแข็งขนาดมหึมา",
						"hindi": "हिम पर्वत के गहरे भीतर, एक बर्फीली गुफा के हृदय में। एक आकृति एक विशाल बर्फीले सिंहासन पर बैठी थी।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "여기가 대공 핀의 영역인가?",
						"english": "Is this Grand Duke Finn's domain?",
						"japanese": "ここが大公フィンの領域か？",
						"chinese": "这里是大公芬恩的领域吗？",
						"french": "Est-ce le domaine du Grand Duc Finn ?",
						"spanish": "¿Es este el dominio del Gran Duque Finn?",
						"vietnamese": "Đây là lãnh địa của Đại công tước Finn sao?",
						"thai": "ที่นี่คืออาณาเขตของแกรนด์ดยุกฟินน์หรือ?",
						"hindi": "क्या यह ग्रैंड ड्यूक फिन का क्षेत्र है?"
					}
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "inka",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "감히 대공 전하의 성역을 침범하다니! 당장 물러서라!",
						"english": "How dare you invade His Grace's sanctuary! Retreat at once!",
						"japanese": "よくも大公殿下の聖域を侵犯したな！直ちに退け！",
						"chinese": "竟敢侵犯大公殿下的圣域！立刻退下！",
						"french": "Comment osez-vous envahir le sanctuaire de Son Altesse ! Retirez-vous immédiatement !",
						"spanish": "¡Cómo osas invadir el santuario de Su Gracia! ¡Retírense de inmediato!",
						"vietnamese": "Sao ngươi dám xâm phạm thánh địa của Đại công tước! Rút lui ngay lập tức!",
						"thai": "บังอาจนักที่บุกรุกอาณาเขตศักดิ์สิทธิ์ของท่านดยุก! จงถอยไปเดี๋ยวนี้!",
						"hindi": "तुम्हारी हिम्मत कैसे हुई महामहिम के अभयारण्य पर आक्रमण करने की! तुरंत पीछे हट जाओ!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "inka"
				},
				{
					"type": "speech",
					"content": {
						"korean": "나는 설산의 지배자, 대공 핀이다. 내 허락 없이 발을 들인 자, 용서치 않겠다.",
						"english": "I am Finn, Grand Duke, Ruler of the Snow Mountain. Those who enter without my permission shall not be forgiven.",
						"japanese": "私は雪山の支配者、大公フィンだ。私の許可なく足を踏み入れた者、許さん。",
						"chinese": "我乃雪山支配者，大公芬恩。未经我允许闯入者，绝不饶恕。",
						"french": "Je suis Finn, Grand Duc, Souverain de la Montagne de Neige. Ceux qui entrent sans ma permission ne seront pas pardonnés.",
						"spanish": "Soy Finn, Gran Duque, Gobernante de la Montaña Nevada. Aquellos que entren sin mi permiso no serán perdonados.",
						"vietnamese": "Ta là Finn, Đại công tước, Kẻ thống trị Núi Tuyết. Kẻ nào tự tiện bước vào mà không được phép của ta, sẽ không được tha thứ.",
						"thai": "ข้าคือฟินน์ แกรนด์ดยุก ผู้ปกครองภูเขาหิมะ ผู้ใดที่ย่างก้าวเข้ามาโดยไม่ได้รับอนุญาตจากข้า จะไม่ได้รับการอภัย",
						"hindi": "मैं फिन हूं, ग्रैंड ड्यूक, हिम पर्वत का शासक। जो मेरी अनुमति के बिना प्रवेश करेंगे, उन्हें क्षमा नहीं किया जाएगा।"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "대공 핀이라고? 그런데… 뭘 저렇게 껴입었지?",
						"english": "Grand Duke Finn? But... why is he wearing so much?",
						"japanese": "大公フィンだと？しかし…なぜあんなに着込んでいるんだ？",
						"chinese": "大公芬恩？但是…他怎么穿这么多？",
						"french": "Le Grand Duc Finn ? Mais... pourquoi est-il si couvert ?",
						"spanish": "¿Gran Duque Finn? Pero... ¿por qué lleva tanta ropa?",
						"vietnamese": "Đại công tước Finn ư? Nhưng... sao ông ta mặc nhiều thế?",
						"thai": "แกรนด์ดยุกฟินน์หรือ? แต่... ทำไมเขาถึงใส่ชุดหนาขนาดนั้น?",
						"hindi": "ग्रैंड ड्यूक फिन? लेकिन... उसने इतना कुछ क्यों पहन रखा है?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "전하께서는 위엄을 위해 항상 이러한 복장을…! 추우셔서 그런 것이 아니다!",
						"english": "His Highness wears this for dignity...! Not because of the cold!",
						"japanese": "殿下は常に威厳のためにこの装いを…！寒さゆえではございません！",
						"chinese": "殿下总是为了彰显威严而着此装束……绝非因寒冷所致！",
						"french": "Son Altesse porte toujours ces atours par dignité...! Pas à cause du froid !",
						"spanish": "Su Alteza siempre viste así por dignidad...! ¡No es por frío!",
						"vietnamese": "Điện hạ luôn vận y phục này vì uy nghiêm...! Không phải vì ngài lạnh đâu!",
						"thai": "ฝ่าบาททรงฉลองพระองค์เช่นนี้ด้วยพระเกียรติยศ...! มิใช่เพราะทรงหนาว!",
						"hindi": "महामहिम सदैव गरिमा हेतु ऐसे वस्त्र धारण करते हैं...! शीत के कारण नहीं!"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "inka"
				}
			],
			"id": 1
		}
	],
	"prologue": {
		"korean": [
			"끝없이 펼쳐진 설원. 차가운 바람이 모든 것을 얼리는 곳.",
			"그곳, 만년설의 심장에 감춰진 얼음 왕좌가 있었다.",
			"왕좌에 앉은 자. 설산의 지배자라 불리는 대공 핀.",
			"그리고, 침묵을 깨고 나타난 의문의 침입자들.",
			"그들은 알지 못했다. 이 설산의 진정한 얼굴을."
		],
		"english": [
			"An endless snowy field. A place where cold winds freeze everything.",
			"There, an ice throne lay hidden in the heart of the eternal snows.",
			"The one seated on the throne. Grand Duke Finn, known as the Ruler of the Snow Mountain.",
			"And then, mysterious invaders appeared, breaking the silence.",
			"They did not know the true face of this snow mountain."
		],
		"japanese": [
			"果てしなく広がる雪原。冷たい風がすべてを凍らせる場所。",
			"そこには、万年雪の心臓部に隠された氷の玉座があった。",
			"玉座に座る者。雪山の支配者と呼ばれる大公フィン。",
			"そして、沈黙を破って現れた謎の侵入者たち。",
			"彼らは知らなかった。この雪山の真の顔を。"
		],
		"chinese": [
			"一望无际的雪原。寒风凛冽，万物皆冻。",
			"在那里，在万年积雪的深处，隐藏着一座冰之王座。",
			"坐在王座上的人。人称雪山支配者，大公芬恩。",
			"然而，打破沉默的神秘入侵者出现了。",
			"他们并不知道，这座雪山真正的面貌。"
		],
		"french": [
			"Une étendue de neige infinie. Là où le vent glacial gèle tout.",
			"Là, un trône de glace était caché au cœur des neiges éternelles.",
			"Celui assis sur le trône. Le Grand Duc Finn, surnommé le Souverain de la Montagne de Neige.",
			"Et puis, de mystérieux envahisseurs sont apparus, brisant le silence.",
			"Ils ne connaissaient pas le vrai visage de cette montagne de neige."
		],
		"spanish": [
			"Una llanura nevada interminable. Donde el viento frío lo congela todo.",
			"Allí, un trono de hielo yacía escondido en el corazón de las nieves eternas.",
			"El que se sienta en el trono. Gran Duque Finn, conocido como el Gobernante de la Montaña Nevada.",
			"Y entonces, misteriosos invasores aparecieron, rompiendo el silencio.",
			"No conocían la verdadera faz de esta montaña nevada."
		],
		"vietnamese": [
			"Đồng tuyết trải dài vô tận. Nơi gió lạnh đóng băng mọi thứ.",
			"Ở đó, một ngai vàng băng giá ẩn mình trong trái tim của tuyết vĩnh cửu.",
			"Người ngồi trên ngai vàng. Đại công tước Finn, được biết đến là Kẻ thống trị Núi Tuyết.",
			"Và rồi, những kẻ xâm nhập bí ẩn xuất hiện, phá vỡ sự im lặng.",
			"Họ không biết khuôn mặt thật của ngọn núi tuyết này."
		],
		"thai": [
			"ทุ่งหิมะอันกว้างใหญ่ไร้ที่สิ้นสุด ที่ซึ่งลมหนาวเยือกแข็งทุกสิ่ง",
			"ณ ที่นั้น บัลลังก์น้ำแข็งซ่อนอยู่ใจกลางหิมะนิรันดร์",
			"ผู้ที่นั่งอยู่บนบัลลังก์ แกรนด์ดยุกฟินน์ ผู้ซึ่งเป็นที่รู้จักในนามผู้ปกครองภูเขาหิมะ",
			"และแล้ว ผู้บุกรุกปริศนาก็ปรากฏตัวขึ้น ทำลายความเงียบงัน",
			"พวกเขาไม่รู้ว่านี่คือใบหน้าที่แท้จริงของภูเขาหิมะ"
		],
		"hindi": [
			"एक अंतहीन बर्फीला मैदान। एक ऐसी जगह जहाँ ठंडी हवा सब कुछ जमा देती है।",
			"वहाँ, शाश्वत बर्फ के दिल में एक बर्फीला सिंहासन छिपा हुआ था।",
			"सिंहासन पर बैठा व्यक्ति। ग्रैंड ड्यूक फिन, जिसे हिम पर्वत का शासक कहा जाता है।",
			"और फिर, रहस्यमय आक्रमणकारी दिखाई दिए, चुप्पी तोड़ते हुए।",
			"वे इस हिम पर्वत का असली चेहरा नहीं जानते थे।"
		]
	}
} as const;
