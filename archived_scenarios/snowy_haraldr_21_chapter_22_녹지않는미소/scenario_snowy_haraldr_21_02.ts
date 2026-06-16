export const scenario_snowy_haraldr_21_02 = {
	"scenario_id": "snowy_haraldr_21_02",
	"order": 2,
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
		},
		"Haraldr": {
			"name": "Haraldr"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"설원 한복판, 끝없는 미소의 거리가 펼쳐졌다.",
			"Haraldr의 점포마다 그의 웃는 얼굴이 새겨져 있었다.",
			"그러나 전사 이바르는 알았다. 그 미소 뒤에 감춰진 굶주림을.",
			"친절한 인사 속, 보따리를 향한 손이 그의 자존심을 건드렸다."
		],
		"english": [
			"In the heart of the snowy field, a street of endless smiles unfolded.",
			"Haraldr's smiling face was carved into every one of his shops.",
			"But Ivar the warrior knew the hunger hidden behind that smile.",
			"Amidst the kind greetings, a hand reaching for his bundle pricked his pride."
		],
		"japanese": [
			"雪原の真ん中に、終わりのない笑顔の通りが広がっていた。",
			"Haraldrの店々には、彼の笑顔が刻まれていた。",
			"しかし戦士イヴァルは知っていた。その笑顔の裏に隠された飢えを。",
			"親切な挨拶の裏で、荷物に向かう手が彼の自尊心を傷つけた。"
		],
		"chinese": [
			"雪原深处，一条无尽笑容的街道展现在眼前。",
			"Haraldr的每家店铺都刻着他的笑脸。",
			"然而，战士伊瓦尔知道。在那笑容背后隐藏着饥饿。",
			"在友善的问候声中，一只伸向他包裹的手触及了他的自尊。"
		],
		"french": [
			"Au cœur de l'étendue enneigée, une rue de sourires infinis se déployait.",
			"Chaque boutique de Haraldr portait son visage souriant.",
			"Mais Ivar le guerrier connaissait la faim cachée derrière ce sourire.",
			"Au milieu des salutations amicales, une main tendant vers son baluchon blessa sa fierté."
		],
		"spanish": [
			"En medio de la llanura nevada, se extendía una calle de sonrisas interminables.",
			"En cada tienda de Haraldr estaba grabado su rostro sonriente.",
			"Pero Ivar el guerrero conocía el hambre oculta tras esa sonrisa.",
			"Entre los amables saludos, una mano que se dirigía a su fardo hirió su orgullo."
		],
		"vietnamese": [
			"Giữa đồng tuyết, một con phố với những nụ cười bất tận hiện ra.",
			"Mỗi cửa hàng của Haraldr đều khắc hình mặt cười của hắn.",
			"Nhưng chiến binh Ivar biết. Nỗi khát khao ẩn giấu sau nụ cười đó.",
			"Giữa những lời chào thân thiện, bàn tay vươn tới túi đồ đã chạm vào lòng tự trọng của anh."
		],
		"thai": [
			"กลางทุ่งหิมะ ถนนแห่งรอยยิ้มไม่มีที่สิ้นสุดได้ปรากฏขึ้น",
			"รอยยิ้มของ Haraldr สลักอยู่บนทุกร้านของเขา",
			"แต่ไอฟาร์ นักรบ รู้ดีถึงความหิวโหยที่ซ่อนอยู่เบื้องหลังรอยยิ้มนั้น",
			"ท่ามกลางคำทักทายอันเป็นมิตร มือที่เอื้อมมายังห่อของเขาได้แตะต้องศักดิ์ศรีของเขา"
		],
		"hindi": [
			"बर्फीले मैदान के बीचों-बीच, अंतहीन मुस्कानों की एक गली फैली हुई थी।",
			"Haraldr की हर दुकान पर उसका मुस्कुराता चेहरा उकेरा गया था।",
			"परंतु योद्धा इवर जानता था। उस मुस्कान के पीछे छिपी भूख को।",
			"दोस्ताना अभिवादन के बीच, उसके बंडल की ओर बढ़ता एक हाथ उसके स्वाभिमान को ठेस पहुँचा गया।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "얼음 간판마다 똑같은 미소가 새겨진 거리가 펼쳐졌다.",
						"english": "A street unfolded, where every ice sign bore the same carved smile.",
						"japanese": "氷の看板ごとに同じ笑顔が刻まれた通りが広がっていた。",
						"chinese": "一条街道展现在眼前，每个冰制招牌上都刻着相同的笑容。",
						"french": "Une rue se déployait, où chaque enseigne de glace portait le même sourire gravé.",
						"spanish": "Se extendía una calle donde cada letrero de hielo tenía grabada la misma sonrisa.",
						"vietnamese": "Một con phố hiện ra, với những tấm biển băng đều khắc cùng một nụ cười.",
						"thai": "ถนนที่เต็มไปด้วยรอยยิ้มสลักเดียวกันบนป้ายน้ำแข็งทุกป้ายได้ปรากฏขึ้น",
						"hindi": "एक ऐसी गली सामने फैली हुई थी, जहाँ हर बर्फीले signboard पर एक जैसी मुस्कान उकेरी गई थी।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "여기가 Haraldr의 점포 거리?",
						"english": "Is this Haraldr's shop street?",
						"japanese": "ここがHaraldrの店通りか？",
						"chinese": "这里是Haraldr的店铺街吗？",
						"french": "Est-ce la rue des boutiques de Haraldr ?",
						"spanish": "¿Es esta la calle de tiendas de Haraldr?",
						"vietnamese": "Đây là phố cửa hàng của Haraldr sao?",
						"thai": "นี่คือถนนร้านค้าของ Haraldr ใช่ไหม?",
						"hindi": "क्या यह Haraldr की दुकान वाली गली है?"
					},
					"emotion": "base"
				},
				{
					"emotion": "happy",
					"speaker": "Haraldr",
					"type": "speech",
					"content": {
						"korean": "어서 오세요! 추운 날씨에 고생 많으셨습니다!",
						"english": "Welcome! You must have had a tough journey in this cold weather!",
						"japanese": "いらっしゃいませ！寒い中、大変お疲れ様でした！",
						"chinese": "欢迎光临！在这么冷的天气里辛苦了！",
						"french": "Bienvenue ! Vous avez dû beaucoup souffrir par ce froid !",
						"spanish": "¡Bienvenidos! ¡Debió ser duro el viaje con este frío!",
						"vietnamese": "Chào mừng quý khách! Chắc quý khách đã vất vả nhiều trong thời tiết lạnh giá này!",
						"thai": "ยินดีต้อนรับ! คุณคงลำบากมากกับการเดินทางในสภาพอากาศหนาวเย็นเช่นนี้!",
						"hindi": "स्वागत है! ठंडे मौसम में आपने बहुत कष्ट उठाया होगा!"
					}
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "ivar",
					"spot": [
						4,
						1
					],
					"type": "direction"
				},
				{
					"emotion": "base",
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "…이바르다.",
						"english": "...It's Ivar.",
						"japanese": "…イヴァルだ。",
						"chinese": "…是伊瓦尔。",
						"french": "...C'est Ivar.",
						"spanish": "...Es Ivar.",
						"vietnamese": "...Là Ivar.",
						"thai": "...ไอฟาร์",
						"hindi": "...इवर है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "저 미소… 왠지 찜찜해.",
						"english": "That smile... somehow, it feels unsettling.",
						"japanese": "あの笑顔…なぜか気味が悪い。",
						"chinese": "那个笑容…总觉得有些不安。",
						"french": "Ce sourire... je ne sais pas, il me met mal à l'aise.",
						"spanish": "Esa sonrisa... por alguna razón, me incomoda.",
						"vietnamese": "Nụ cười đó... sao mà khó chịu thế.",
						"thai": "รอยยิ้มนั้น...ทำไมรู้สึกไม่สบายใจเลย",
						"hindi": "वह मुस्कान... कुछ अजीब सी है।"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "happy",
					"speaker": "Haraldr",
					"type": "speech",
					"content": {
						"korean": "손님은 왕이시죠! 필요한 건 없으신가요?",
						"english": "The customer is king! Do you need anything?",
						"japanese": "お客様は王様です！何か必要なものはございませんか？",
						"chinese": "顾客就是上帝！您有什么需要吗？",
						"french": "Le client est roi ! Avez-vous besoin de quelque chose ?",
						"spanish": "¡El cliente es el rey! ¿Necesita algo?",
						"vietnamese": "Khách hàng là thượng đế mà! Quý khách có cần gì không?",
						"thai": "ลูกค้าคือพระเจ้า! มีอะไรให้ช่วยเหลือไหมครับ?",
						"hindi": "ग्राहक भगवान होता है! क्या आपको कुछ चाहिए?"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "(Haraldr의 미소 뒤에 숨겨진 무언가를 꿰뚫어본다.)",
						"english": "(Peers past Haraldr's smile.)",
						"japanese": "(ハラルドルの笑顔の裏を見透かす。)",
						"chinese": "(看穿哈拉尔德笑容背后的东西。)",
						"french": "(Perce à travers le sourire d'Haraldr.)",
						"spanish": "(Atraviesa la sonrisa de Haraldr.)",
						"vietnamese": "(Nhìn thấu nụ cười của Haraldr.)",
						"thai": "(มองทะลุรอยยิ้มของฮาราลเดอร์)",
						"hindi": "(हैरल्ड्र की मुस्कान के पीछे छिपी चीज़ को भाँप लेता है।)"
					},
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"content": {
						"korean": "Haraldr의 지나친 친절 속, 이바르는 묘한 굶주림을 느꼈다.",
						"english": "Amidst Haraldr's excessive kindness, Ivar sensed a strange hunger.",
						"japanese": "ハラルドルの過剰な親切の中に、イヴァルは奇妙な飢えを感じた。",
						"chinese": "在哈拉尔德过度的友善中，伊瓦尔感到了一股奇怪的饥饿感。",
						"french": "Au milieu de la gentillesse excessive d'Haraldr, Ivar sentit une étrange faim.",
						"spanish": "En la excesiva amabilidad de Haraldr, Ivar sintió un hambre extraña.",
						"vietnamese": "Giữa sự tử tế quá mức của Haraldr, Ivar cảm thấy một cơn đói lạ lùng.",
						"thai": "ท่ามกลางความเมตตาที่มากเกินไปของฮาราลเดอร์ อีวาร์รู้สึกถึงความหิวโหยแปลกๆ",
						"hindi": "हैरल्ड्र की अत्यधिक दयालुता के बीच, इवर को एक अजीब भूख महसूस हुई।"
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "ivar",
					"spot": [
						2,
						1
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "너의 친절, 그 속에 숨은 굶주림이 느껴진다.",
						"english": "Your kindness... I sense the hunger hidden within.",
						"japanese": "お前の親切、その中に隠された飢えを感じる。",
						"chinese": "你的友善，我能感受到其中隐藏的饥饿。",
						"french": "Ta gentillesse... j'y sens une faim cachée.",
						"spanish": "Tu amabilidad... siento el hambre oculta en ella.",
						"vietnamese": "Lòng tốt của ngươi, ta cảm thấy sự đói khát ẩn giấu bên trong.",
						"thai": "ความใจดีของเจ้า... ข้ารู้สึกถึงความหิวโหยที่ซ่อนอยู่ข้างใน",
						"hindi": "तेरी दयालुता... उसके भीतर छिपी भूख महसूस होती है।"
					},
					"speaker": "ivar"
				},
				{
					"emotion": "happy",
					"speaker": "Haraldr",
					"type": "speech",
					"content": {
						"korean": "무슨 말씀이신지? 이 추운 날, 따뜻한 마음을 나누려 했을 뿐입니다!",
						"english": "What do you mean? On this cold day, I merely wished to share some warmth!",
						"japanese": "どういう意味ですか？ この寒い日、ただ温かい心を示したかっただけです！",
						"chinese": "你在说什么？ 在这个寒冷的日子里，我只是想分享一点温暖！",
						"french": "Que voulez-vous dire ? En ce jour froid, je voulais seulement partager un peu de chaleur !",
						"spanish": "¿Qué quiere decir? ¡En este día frío, solo quise compartir un poco de calidez!",
						"vietnamese": "Ngươi nói gì vậy? Trong ngày lạnh giá này, ta chỉ muốn chia sẻ chút ấm áp thôi!",
						"thai": "ท่านหมายความว่าอะไร? ในวันหนาวเหน็บนี้ ข้าเพียงแค่อยากแบ่งปันความอบอุ่นเท่านั้น!",
						"hindi": "आपका क्या मतलब है? इस ठंडे दिन पर, मैं बस थोड़ी गर्मजोशी बांटना चाहता था!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "뭔가… 날카로운 기분이 들어.",
						"english": "Something... feels sharp.",
						"japanese": "何か…鋭いものを感じる。",
						"chinese": "总觉得…有些锋利。",
						"french": "Quelque chose... me semble aiguisé.",
						"spanish": "Algo... se siente afilado.",
						"vietnamese": "Có gì đó... sắc nhọn.",
						"thai": "บางอย่าง... รู้สึกแหลมคม",
						"hindi": "कुछ... तीखा सा महसूस होता है।"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "전사의 굶주림은 안다. 하지만 이런 가장은… 보기 불편하다.",
						"english": "I know a warrior's hunger. But this kind of facade... is unsettling.",
						"japanese": "戦士の飢えは知っている。だが、このような偽りは…見ていて不快だ。",
						"chinese": "我懂战士的饥饿。但这种伪装…令人不适。",
						"french": "Je connais la faim d'un guerrier. Mais un tel déguisement... est dérangeant.",
						"spanish": "Conozco el hambre de un guerrero. Pero este tipo de disfraz... es inquietante.",
						"vietnamese": "Ta biết cơn đói của chiến binh. Nhưng cái vẻ bề ngoài này... thật khó chịu.",
						"thai": "ข้ารู้จักความหิวโหยของนักรบ แต่การเสแสร้งแบบนี้... มันน่าอึดอัดใจ",
						"hindi": "मैं एक योद्धा की भूख जानता हूँ। लेकिन यह स्वांग... असहज है।"
					},
					"speaker": "ivar",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "하하하! 전 그저, 모두가 행복하길 바랄 뿐이죠!",
						"english": "Hahaha! I merely wish for everyone to be happy!",
						"japanese": "ハハハ！私はただ、皆が幸せであることを願うだけですよ！",
						"chinese": "哈哈哈！我只是希望大家都幸福而已！",
						"french": "Hahaha ! Je ne souhaite que le bonheur de tous !",
						"spanish": "¡Jajaja! ¡Solo deseo que todos sean felices!",
						"vietnamese": "Hahaha! Ta chỉ mong mọi người đều hạnh phúc thôi!",
						"thai": "ฮ่าฮ่าฮ่า! ข้าแค่หวังให้ทุกคนมีความสุขเท่านั้นเอง!",
						"hindi": "हाहाहा! मैं तो बस यही चाहता हूँ कि सब खुश रहें!"
					},
					"speaker": "Haraldr",
					"emotion": "happy"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "ivar",
					"spot": [
						3,
						1
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "그 미소는 가면인가?",
						"english": "Is that smile a mask?",
						"japanese": "その笑顔は仮面か？",
						"chinese": "那笑容是假面吗？",
						"french": "Ce sourire est-il un masque ?",
						"spanish": "¿Esa sonrisa es una máscara?",
						"vietnamese": "Nụ cười đó là mặt nạ sao?",
						"thai": "รอยยิ้มนั่นเป็นหน้ากากหรือเปล่า?",
						"hindi": "क्या वह मुस्कान एक नक़ाब है?"
					},
					"speaker": "ivar",
					"emotion": "angry"
				},
				{
					"emotion": "happy",
					"speaker": "Haraldr",
					"type": "speech",
					"content": {
						"korean": "가면이라니요? 전 언제나 진심입니다!",
						"english": "A mask? I am always sincere!",
						"japanese": "仮面だなんて？ 私はいつも本心ですよ！",
						"chinese": "假面？ 我一直都很真诚！",
						"french": "Un masque ? Je suis toujours sincère !",
						"spanish": "¿Una máscara? ¡Siempre soy sincero!",
						"vietnamese": "Mặt nạ ư? Ta luôn chân thành mà!",
						"thai": "หน้ากากหรือ? ข้าจริงใจเสมอ!",
						"hindi": "नक़ाब? मैं हमेशा सच्चा रहता हूँ!"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "미소는 그대로인데… 목소리가 변한 것 같아.",
						"english": "The smile is the same... but your voice seems to have changed.",
						"japanese": "笑顔は同じだが…声が変わったようだ。",
						"chinese": "笑容没变…但声音好像变了。",
						"french": "Le sourire est le même... mais la voix semble avoir changé.",
						"spanish": "La sonrisa es la misma... pero la voz parece haber cambiado.",
						"vietnamese": "Nụ cười vẫn vậy... nhưng giọng nói dường như đã thay đổi.",
						"thai": "รอยยิ้มยังคงเหมือนเดิม... แต่เสียงดูเหมือนจะเปลี่ยนไป",
						"hindi": "मुस्कान तो वही है... पर आवाज़ बदल गई है।"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…손님, 혹시 제 상품이 마음에 들지 않으신가요?",
						"english": "...Sir, do you perhaps not like my wares?",
						"japanese": "「…お客様、もしや私の商品がお気に召しませんでしたか？」",
						"chinese": "「……客人，您是不喜欢我的商品吗？」",
						"french": "...Client, mes articles ne vous plaisent-ils pas ?",
						"spanish": "¿...Cliente, acaso mis productos no son de su agrado?",
						"vietnamese": "...Khách hàng, có phải ngài không hài lòng với món hàng của tôi?",
						"thai": "...ท่านลูกค้า ไม่ทราบว่าท่านไม่ถูกใจสินค้าของข้าหรือ?",
						"hindi": "...ग्राहक, क्या आपको मेरे उत्पाद पसंद नहीं आ रहे हैं?"
					},
					"speaker": "Haraldr"
				},
				{
					"emotion": "angry",
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "네 진짜 얼굴을 보여라.",
						"english": "Show your true face.",
						"japanese": "「お前の本当の顔を見せろ。」",
						"chinese": "「露出你的真面目。」",
						"french": "Montre ton vrai visage.",
						"spanish": "Muestra tu verdadera cara.",
						"vietnamese": "Hãy lộ mặt thật của ngươi ra.",
						"thai": "จงเผยโฉมที่แท้จริงของเจ้าออกมา",
						"hindi": "अपना असली चेहरा दिखाओ।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "ivar",
					"spot": [
						4,
						1
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 거리의 친절은… 너의 탐욕을 가리는 가면인가?",
						"english": "Is this street's kindness... a mask for your greed?",
						"japanese": "「この街の親切は…お前の貪欲を隠す仮面か？」",
						"chinese": "「这条街的友善……是你贪婪的伪装吗？」",
						"french": "La gentillesse de cette rue... n'est-elle qu'un masque pour ta cupidité ?",
						"spanish": "La amabilidad de esta calle... ¿es una máscara para tu codicia?",
						"vietnamese": "Lòng tốt của con phố này... có phải là chiếc mặt nạ che đậy lòng tham của ngươi không?",
						"thai": "ความเมตตาของถนนสายนี้...เป็นเพียงหน้ากากที่ปกปิดความโลภของเจ้าหรือ?",
						"hindi": "क्या इस गली की दया... तुम्हारे लालच को छिपाने वाला नकाब है?"
					},
					"speaker": "ivar",
					"emotion": "angry"
				},
				{
					"speaker": "Haraldr",
					"type": "speech",
					"content": {
						"korean": "어머! 손님, 불만은 곤란한데요. 여기 규칙은 아시죠?",
						"english": "Oh dear! Sir, complaints are troublesome. You know the rules here, don't you?",
						"japanese": "「あら！お客様、不満は困りますわ。ここの規則はご存じでしょう？」",
						"chinese": "「哎呀！客人，抱怨可不好。您知道这里的规矩吧？」",
						"french": "Oh là là ! Client, les plaintes sont un problème. Vous connaissez les règles ici, n'est-ce pas ?",
						"spanish": "¡Oh! Cliente, las quejas son un problema. ¿Conoce las reglas aquí, verdad?",
						"vietnamese": "Ôi! Khách hàng, than phiền thì thật phiền phức. Ngài biết luật ở đây mà, phải không?",
						"thai": "โอ๊ะ! ท่านลูกค้า การไม่พอใจเป็นเรื่องลำบากนะ ท่านรู้กฎที่นี่ใช่ไหม?",
						"hindi": "अरे! ग्राहक, शिकायतें मुश्किल हैं। आप यहां के नियम जानते हैं ना?"
					},
					"emotion": "happy"
				},
				{
					"type": "speech",
					"content": {
						"korean": "Haraldr의 얼굴에 박힌 미소가 한순간 일그러졌다.",
						"english": "The smile plastered on Haraldr's face warped for a moment.",
						"japanese": "「Haraldrの顔に貼り付いた笑顔が一瞬歪んだ。」",
						"chinese": "「Haraldr脸上的笑容瞬间扭曲了。」",
						"french": "Le sourire figé sur le visage d'Haraldr se tordit un instant.",
						"spanish": "La sonrisa grabada en el rostro de Haraldr se desdibujó por un instante.",
						"vietnamese": "Nụ cười cứng đờ trên mặt Haraldr thoáng chốc biến dạng.",
						"thai": "รอยยิ้มที่ติดอยู่บนใบหน้าของ Haraldr บิดเบี้ยวไปชั่วขณะ",
						"hindi": "Haraldr के चेहरे पर जमी मुस्कान एक पल के लिए बिगड़ गई।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "하하…! 이 귀한 손님께! 뭘 더 드려야 할지… (목소리가 떨린다)",
						"english": "Haha...! To this esteemed guest! What more can I offer...? (Voice trembling)",
						"japanese": "「はは…！この貴きお客様に！何を差し上げればよいのやら…（声が震える）」",
						"chinese": "「哈哈……！这位尊贵的客人！我还能给您什么呢……（声音颤抖）」",
						"french": "Haha...! À cet illustre invité ! Que puis-je offrir de plus...? (La voix tremblante)",
						"spanish": "¡Jaja...! ¡A este valioso cliente! ¿Qué más puedo ofrecerle...? (La voz le tiembla)",
						"vietnamese": "Ha ha...! Với vị khách quý này! Tôi có thể dâng thêm gì đây...? (Giọng run rẩy)",
						"thai": "ฮ่าฮ่า...! แด่ท่านแขกผู้มีเกียรตินี้! ข้าควรจะมอบอะไรให้อีกดีเล่า... (เสียงสั่นเครือ)",
						"hindi": "हाहा...! इस आदरणीय ग्राहक को! और क्या दूं...? (आवाज कांप रही है)"
					},
					"speaker": "Haraldr"
				},
				{
					"type": "direction",
					"spot": [
						5,
						2
					],
					"speaker": "Haraldr",
					"duration_ms": 500,
					"action": "focus"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "Haraldr의 손이 무의식적으로 이바르의 보따리로 향했다.",
						"english": "Haraldr's hand unconsciously reached for Ivar's satchel.",
						"japanese": "「Haraldrの手が無意識にイヴァルの荷物へと伸びた。」",
						"chinese": "「Haraldr的手不自觉地伸向了伊瓦尔的包裹。」",
						"french": "La main d'Haraldr se tendit inconsciemment vers la besace d'Ivar.",
						"spanish": "La mano de Haraldr se dirigió inconscientemente hacia la mochila de Ivar.",
						"vietnamese": "Tay của Haraldr vô thức vươn về phía túi vải của Ivar.",
						"thai": "มือของ Haraldr ยื่นไปหาถุงของ Ivar อย่างไม่รู้ตัว",
						"hindi": "Haraldr का हाथ अनजाने में इवर के बस्ते की ओर बढ़ा।"
					},
					"emotion": "base"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "(보따리를 낚아채듯 움켜쥐며) 그만둬라.",
						"english": "(Snatching the satchel) Stop it.",
						"japanese": "「（荷物をひったくるように掴みながら）やめろ。」",
						"chinese": "「（猛地抓住包裹）住手。」",
						"french": "(Saisissant la besace d'un geste brusque) Arrête ça.",
						"spanish": "(Tomando el bulto con brusquedad) Detente.",
						"vietnamese": "(Giật lấy túi vải) Dừng lại.",
						"thai": "(คว้าถุงอย่างรวดเร็ว) หยุดเดี๋ยวนี้",
						"hindi": "(बस्ते को झपटते हुए) रुक जाओ।"
					},
					"emotion": "angry"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "하찮은 것들. 너희의 굶주림은 나의 먹이다.",
						"english": "Insignificant beings. Your hunger is my feast.",
						"japanese": "取るに足らない奴らめ。お前たちの飢えは私の糧だ。",
						"chinese": "微不足道的家伙们。你们的饥饿是我的食粮。",
						"french": "Êtres insignifiants. Votre faim est ma nourriture.",
						"spanish": "Seres insignificantes. Vuestra hambre es mi alimento.",
						"vietnamese": "Đồ hèn mọn. Cơn đói của các ngươi là thức ăn của ta.",
						"thai": "พวกไร้ค่า. ความหิวโหยของพวกเจ้าคืออาหารของข้า",
						"hindi": "तुच्छ प्राणी। तुम्हारी भूख मेरा भोजन है।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…아직이야!",
						"english": "…Not yet!",
						"japanese": "…まだだ！",
						"chinese": "……还没完！",
						"french": "…Pas encore !",
						"spanish": "¡…Todavía no!",
						"vietnamese": "…Chưa đâu!",
						"thai": "...ยัง!",
						"hindi": "...अभी नहीं!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "ivar",
					"spot": [
						3,
						1
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "angry",
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "이 정도로 쓰러질 순 없다. 나의 긍지가 허락하지 않아.",
						"english": "I can't fall to something like this. My pride won't allow it.",
						"japanese": "この程度で倒れるわけにはいかない。私のプライドが許さない。",
						"chinese": "绝不能就此倒下。我的骄傲绝不允许！",
						"french": "Je ne peux pas tomber face à ça. Mon orgueil ne le permettra pas.",
						"spanish": "No puedo caer por esto. Mi orgullo no lo permitirá.",
						"vietnamese": "Ta không thể gục ngã vì chuyện này. Lòng kiêu hãnh của ta không cho phép.",
						"thai": "จะมาล้มลงแค่นี้ไม่ได้ ศักดิ์ศรีของข้าไม่อนุญาตหรอก",
						"hindi": "मैं ऐसे नहीं हार सकता। मेरा स्वाभिमान इसकी इजाजत नहीं देगा।"
					}
				}
			],
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거리의 끝, 거대한 얼음 벽이 나타났다.",
						"english": "At the end of the street, a colossal ice wall appeared.",
						"japanese": "「通りの果てに、巨大な氷の壁が現れた。」",
						"chinese": "「街道的尽头，一面巨大的冰墙出现了。」",
						"french": "Au bout de la rue, un mur de glace colossal apparut.",
						"spanish": "Al final de la calle, una colosal pared de hielo apareció.",
						"vietnamese": "Cuối con phố, một bức tường băng khổng lồ hiện ra.",
						"thai": "ที่ปลายถนน กำแพงน้ำแข็งขนาดมหึมาปรากฏขึ้น",
						"hindi": "गली के अंत में, एक विशाल बर्फ की दीवार दिखाई दी।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "드디어…!",
						"english": "Finally...!",
						"japanese": "「ついに…！」",
						"chinese": "「终于……！」",
						"french": "Enfin... !",
						"spanish": "¡Por fin...!",
						"vietnamese": "Cuối cùng...!",
						"thai": "ในที่สุด...!",
						"hindi": "आखिरकार...!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "크크크… 어리석은 자들. 이 거리의 주인은 나다.",
						"english": "Hehehe… Fools. I am the master of this street.",
						"japanese": "ククク…愚か者め。この街の主は私だ。",
						"chinese": "呵呵呵……愚蠢的家伙们。这条街的主人是我。",
						"french": "Héhéhé… Imbéciles. Je suis le maître de cette rue.",
						"spanish": "Jejeje… Necios. Yo soy el dueño de esta calle.",
						"vietnamese": "Khà khà… Đám ngốc. Ta là chủ nhân con phố này.",
						"thai": "ฮ่าฮ่าฮ่า... พวกโง่เอ๊ย! ข้าคือเจ้าของถนนสายนี้",
						"hindi": "हँस हँस... मूर्खों। इस गली का मालिक मैं हूँ।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "너희의 굶주림, 내게 바쳐라.",
						"english": "Offer your hunger to me.",
						"japanese": "お前たちの飢え、私に捧げろ。",
						"chinese": "把你们的饥饿献给我吧。",
						"french": "Offrez-moi votre faim.",
						"spanish": "Entregadme vuestro hambre.",
						"vietnamese": "Hãy dâng cơn đói của các ngươi cho ta.",
						"thai": "จงมอบความหิวโหยของเจ้าให้ข้า",
						"hindi": "अपनी भूख मुझे अर्पित करो।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "네놈에게 바칠 건 없어!",
						"english": "I have nothing to offer you!",
						"japanese": "貴様になど、捧げるものはない！",
						"chinese": "没什么可献给你的！",
						"french": "Je n'ai rien à t'offrir !",
						"spanish": "¡No tengo nada que ofrecerte!",
						"vietnamese": "Không có gì để dâng cho ngươi cả!",
						"thai": "ข้าไม่มีอะไรจะมอบให้เจ้า!",
						"hindi": "तुम्हें देने के लिए मेरे पास कुछ नहीं है!"
					},
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "젠장… 이 정도로 멈출 순 없어!",
						"english": "Damn it… I can't stop here!",
						"japanese": "ちくしょう…こんなところで止まれない！",
						"chinese": "该死……不能就此止步！",
						"french": "Mince… Je ne peux pas m'arrêter là !",
						"spanish": "Maldición… ¡No puedo parar aquí!",
						"vietnamese": "Chết tiệt… không thể dừng lại ở đây được!",
						"thai": "ให้ตายสิ... ข้าหยุดแค่นี้ไม่ได้!",
						"hindi": "धत् तेरे की... मैं यहाँ रुक नहीं सकता!"
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "나의 굶주림은… 영원하다!",
						"english": "My hunger is… eternal!",
						"japanese": "私の飢えは…永遠だ！",
						"chinese": "我的饥饿……是永恒的！",
						"french": "Ma faim est… éternelle !",
						"spanish": "¡Mi hambre es… eterna!",
						"vietnamese": "Cơn đói của ta… là vĩnh cửu!",
						"thai": "ความหิวโหยของข้า... เป็นนิรันดร์!",
						"hindi": "मेरी भूख... शाश्वत है!"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…끝난 건가?",
						"english": "…Is it over?",
						"japanese": "…終わったのか？",
						"chinese": "……结束了吗？",
						"french": "…C'est fini ?",
						"spanish": "¿…Se acabó?",
						"vietnamese": "…Kết thúc rồi sao?",
						"thai": "...จบแล้วหรือ?",
						"hindi": "...क्या यह खत्म हो गया?"
					},
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "ivar",
					"spot": [
						3,
						1
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니. 저 굶주림은… 끝이 없어 보인다.",
						"english": "No. That hunger… seems endless.",
						"japanese": "いや。あの飢えは…終わらないようだ。",
						"chinese": "不。那种饥饿……似乎没有尽头。",
						"french": "Non. Cette faim… semble sans fin.",
						"spanish": "No. Ese hambre… parece no tener fin.",
						"vietnamese": "Không. Cơn đói đó… dường như không có hồi kết.",
						"thai": "ไม่. ความหิวโหยนั้น... ดูเหมือนจะไม่มีที่สิ้นสุด",
						"hindi": "नहीं। वह भूख... अंतहीन लगती है।"
					},
					"speaker": "ivar",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "얼어붙은 미소는 사라졌다. 그러나 진짜 굶주림은 이제 시작이었다.",
						"english": "The frozen smile vanished. But the real hunger was just beginning.",
						"japanese": "凍てついた笑顔は消えた。しかし、本当の飢えは今始まったばかりだった。",
						"chinese": "冰冷的笑容消失了。但真正的饥饿才刚刚开始。",
						"french": "Le sourire glacé disparut. Mais la vraie faim ne faisait que commencer.",
						"spanish": "La sonrisa helada desapareció. Pero el hambre real apenas comenzaba.",
						"vietnamese": "Nụ cười đóng băng biến mất. Nhưng cơn đói thật sự chỉ mới bắt đầu.",
						"thai": "รอยยิ้มที่เย็นชาหายไป แต่ความหิวโหยที่แท้จริงเพิ่งจะเริ่มต้นขึ้น",
						"hindi": "जमी हुई मुस्कान गायब हो गई। लेकिन असली भूख अभी शुरू हुई थी।"
					},
					"speaker": "narrator"
				}
			]
		}
	]
} as const;
