export const scenario_forest_coccinellaregina_0_03 = {
	"scenario_id": "forest_coccinellaregina_0_03",
	"order": 3,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"cedar": {
			"id": "mon_bd67c222-311e-4f31-b81f-931b14f6b5c6",
			"name": {
				"korean": "시더",
				"english": "Cedar",
				"japanese": "シダー",
				"chinese": "雪松",
				"french": "Cèdre",
				"spanish": "Cedro",
				"vietnamese": "Tuyết tùng",
				"thai": "ซีดาร์",
				"hindi": "देवदार"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f1057921-5fa2-4be2-767d-1a64c33e6e00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9579f10e-eb78-40e5-d495-72f489322200/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "잊혀진 제단이 숲의 심장부에 잠들어 있었다. 거대한 뿌리들이 오랜 비밀을 감추듯 얽혀 있었다.",
						"english": "A forgotten altar lay dormant in the forest's heart. Giant roots intertwined as if hiding ancient secrets.",
						"japanese": "忘れ去られた祭壇が森の心臓部に眠っていた。巨大な根が古き秘密を隠すように絡み合っていた。",
						"chinese": "一座被遗忘的祭坛沉睡在森林深处。巨大的树根盘根错节，仿佛隐藏着古老的秘密。",
						"french": "Un autel oublié sommeillait au cœur de la forêt. D'énormes racines s'entremêlaient comme pour dissimuler d'anciens secrets.",
						"spanish": "Un altar olvidado yacía inactivo en el corazón del bosque. Raíces gigantes se entrelazaban como ocultando antiguos secretos.",
						"vietnamese": "Một bàn thờ bị lãng quên nằm yên trong lòng rừng. Những rễ cây khổng lồ đan xen vào nhau như che giấu bí mật cổ xưa.",
						"thai": "แท่นบูชาที่ถูกลืมเลือนหลับใหลอยู่ในใจกลางป่า รากไม้ขนาดมหึมาพันเกี่ยวกันราวกับซ่อนเร้นความลับเก่าแก่",
						"hindi": "एक भूली हुई वेदी जंगल के हृदय में निष्क्रिय पड़ी थी। विशाल जड़ें ऐसे उलझी हुई थीं मानो प्राचीन रहस्य छिपा रही हों।"
					}
				},
				{
					"spot": [
						4,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "cedar"
				},
				{
					"content": {
						"korean": "이런 곳에… 고대 문명의 흔적이라니.",
						"english": "Traces of an ancient civilization... in a place like this.",
						"japanese": "こんな場所に…古代文明の痕跡が。",
						"chinese": "在这种地方…竟有古代文明的痕迹。",
						"french": "Des traces d'une civilisation ancienne… dans un endroit pareil.",
						"spanish": "Huellas de una civilización antigua... en un lugar como este.",
						"vietnamese": "Dấu tích của một nền văn minh cổ đại... ở một nơi như thế này.",
						"thai": "ร่องรอยอารยธรรมโบราณ... ในสถานที่แบบนี้หรือนี่",
						"hindi": "ऐसी जगह पर... प्राचीन सभ्यता के निशान।"
					},
					"speaker": "cedar",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "cedar",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "낡은 두루마리군. 글자가 희미해… '영혼 전이'?",
						"english": "An old scroll. The letters are faded... 'Soul Transfer'?",
						"japanese": "古い巻物だ。文字がかすれて…「魂転移」？",
						"chinese": "一张旧卷轴。字迹模糊…‘灵魂转移’？",
						"french": "Un vieux parchemin. Les lettres sont effacées… « Transfert d'âme » ?",
						"spanish": "Un pergamino viejo. Las letras están borrosas... 'Transferencia de Almas'?",
						"vietnamese": "Một cuộn giấy cũ. Chữ đã mờ… 'Chuyển đổi linh hồn'?",
						"thai": "ม้วนคัมภีร์เก่าแก่ ตัวอักษรเลือนลาง... 'การถ่ายโอนวิญญาณ'?",
						"hindi": "एक पुराना स्क्रॉल। अक्षर धुंधले हैं... 'आत्मा स्थानांतरण'?"
					}
				},
				{
					"duration_ms": 450,
					"speaker": "random_boss",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "어머, 시더! 뭘 그렇게 골똘히 보세요? 혹시 숨겨진 보물 지도라도?",
						"english": "Oh, Cedar! What are you staring at so intently? A hidden treasure map, perhaps?",
						"japanese": "あら、シダー！何をそんなに考え込んでいるの？もしかして、隠された宝の地図でも？",
						"chinese": "哎呀，希达！你在看什么呢？难道是藏宝图之类的？",
						"french": "Oh, Cedar ! Qu'est-ce que tu regardes d'un air si pensif ? Une carte au trésor cachée, peut-être ?",
						"spanish": "¡Oh, Cedar! ¿Qué miras tan fijamente? ¿Quizás un mapa del tesoro escondido?",
						"vietnamese": "Ôi, Cedar! Anh đang nhìn chăm chú cái gì vậy? Chẳng lẽ là bản đồ kho báu ẩn giấu sao?",
						"thai": "โอ๊ะ ซีดาร์! จ้องอะไรขนาดนั้นคะ? แผนที่สมบัติลับหรือไงกัน?",
						"hindi": "अरे, सेडर! क्या इतनी गहराई से देख रहे हो? कहीं कोई छिपा हुआ खजाना नक्शा तो नहीं?"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "happy"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "또 무당벌레잖아…",
						"english": "A ladybug again...",
						"japanese": "またテントウムシか…",
						"chinese": "又是瓢虫…",
						"french": "Encore une coccinelle…",
						"spanish": "Otra vez una mariquita...",
						"vietnamese": "Lại là bọ rùa...",
						"thai": "เลดี้บั๊กอีกแล้ว...",
						"hindi": "फिर से एक लेडीबग..."
					}
				},
				{
					"content": {
						"korean": "호호, 아니면 달콤한 꿀벌집 위치라던가? 냠냠.",
						"english": "Hehe, or perhaps the location of a sweet beehive? Yum yum.",
						"japanese": "ふふ、それとも甘い蜂の巣の場所とか？もぐもぐ。",
						"chinese": "呵呵，不然就是甜甜的蜂巢位置？吧唧吧唧。",
						"french": "Hoho, ou alors l'emplacement d'une douce ruche ? Miam miam.",
						"spanish": "Jojo, ¿o quizás la ubicación de un dulce panal? Ñam ñam.",
						"vietnamese": "Hô hô, hay là vị trí của một tổ ong ngọt ngào nào đó? Yum yum.",
						"thai": "โฮะโฮะ หรือจะเป็นตำแหน่งรังผึ้งหวาน ๆ ล่ะ? หยัมหยัม",
						"hindi": "होहो, या शायद किसी मीठे मधुमक्खी के छत्ते का स्थान? यम यम।"
					},
					"type": "speech",
					"emotion": "happy",
					"speaker": "random_boss"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "cedar",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "두루마리에서 희미한 빛이 나… '무당벌레'… '진정한 육체'…",
						"english": "A faint light emanates from the scroll... 'Ladybug'... 'True Body'...",
						"japanese": "巻物から微かな光が…「てんとう虫」…「真の肉体」…",
						"chinese": "卷轴发出微弱的光芒……“瓢虫”……“真实肉体”……",
						"french": "Une faible lumière émane du parchemin... \"Coccinelle\"... \"Véritable Corps\"...",
						"spanish": "Una luz tenue emana del pergamino... \"Mariquita\"... \"Cuerpo Verdadero\"...",
						"vietnamese": "Một ánh sáng lờ mờ phát ra từ cuộn giấy... 'Bọ rùa'... 'Thực thể chân chính'...",
						"thai": "แสงจางๆ ส่องประกายจากม้วนคัมภีร์... 'เต่าทอง'... 'กายที่แท้จริง'...",
						"hindi": "स्क्रॉल से एक हल्की रोशनी निकल रही है... 'लेडीबग'... 'सच्चा शरीर'..."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "cedar"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_1",
					"content": {
						"korean": "점점 더 알 수 없는 말만 나오네요.",
						"english": "The words are getting more and more inscrutable.",
						"japanese": "ますます理解できない言葉ばかりですね。",
						"chinese": "话语越来越难以理解了。",
						"french": "Les mots deviennent de plus en plus indéchiffrables.",
						"spanish": "Las palabras son cada vez más incomprensibles.",
						"vietnamese": "Lời nói ngày càng khó hiểu hơn.",
						"thai": "ถ้อยคำยิ่งยากจะเข้าใจขึ้นเรื่อยๆ เลยนะ",
						"hindi": "शब्द और भी अधिक समझ से बाहर होते जा रहे हैं।"
					}
				},
				{
					"action": "enter",
					"spot": [
						5,
						3
					],
					"speaker": "random_boss",
					"type": "direction",
					"duration_ms": 400
				},
				{
					"content": {
						"korean": "아하! 그거 제가 아는 주술이네요! 무당벌레는 행운을 가져다주니, 행운의 주술인 거예요!",
						"english": "Aha! I know that spell! Ladybugs bring good luck, so it's a good luck charm!",
						"japanese": "あは！それ、私が知ってる呪文ですね！てんとう虫は幸運をもたらすから、幸運の呪文ですよ！",
						"chinese": "啊哈！我认识那个咒语！瓢虫带来好运，所以是幸运咒语！",
						"french": "Aha ! Je connais ce sort ! Les coccinelles portent chance, donc c'est un sort de chance !",
						"spanish": "¡Ajá! ¡Conozco ese hechizo! Las mariquitas traen buena suerte, ¡así que es un hechizo de buena suerte!",
						"vietnamese": "À ha! Tôi biết phép đó! Bọ rùa mang lại may mắn, nên đây là phép may mắn!",
						"thai": "อะฮ่า! ฉันรู้จักคาถานี้! เต่าทองนำโชคมาให้ เพราะฉะนั้นนี่คือคาถาแห่งโชคไง!",
						"hindi": "आहा! मैं वो जादू जानती हूँ! लेडीबग्स सौभाग्य लाती हैं, तो यह सौभाग्य का जादू है!"
					},
					"type": "speech",
					"emotion": "happy",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "진짜요? 그렇게 간단하다고?",
						"english": "Really? It's that simple?",
						"japanese": "本当ですか？そんなに簡単なんですか？",
						"chinese": "真的吗？就这么简单？",
						"french": "Vraiment ? C'est si simple ?",
						"spanish": "¿De verdad? ¿Así de simple?",
						"vietnamese": "Thật ư? Đơn giản vậy sao?",
						"thai": "จริงเหรอ? ง่ายขนาดนั้นเลยเหรอ?",
						"hindi": "सच में? यह इतना आसान है?"
					}
				},
				{
					"content": {
						"korean": "그럼요! 제가 이 숲의 모든 고대 주술을 아는 박사랍니다! 후훗.",
						"english": "Of course! I'm the doctor who knows all the ancient spells of this forest! Hehe.",
						"japanese": "もちろんですよ！私がこの森の全ての古代呪術を知る博士ですからね！ふふっ。",
						"chinese": "当然了！我可是知晓这片森林所有古代咒语的博士呢！呵呵。",
						"french": "Bien sûr ! Je suis le docteur qui connaît tous les sorts anciens de cette forêt ! Huhu.",
						"spanish": "¡Claro! ¡Soy la doctora que conoce todos los hechizos antiguos de este bosque! Jeje.",
						"vietnamese": "Dĩ nhiên rồi! Tôi là tiến sĩ biết mọi phép thuật cổ xưa của khu rừng này mà! Hì hì.",
						"thai": "แน่นอนสิ! ฉันเป็นด็อกเตอร์ที่รู้คาถาโบราณทั้งหมดในป่าแห่งนี้เลยนะ! หึๆ",
						"hindi": "बिल्कुल! मैं इस जंगल के सभी प्राचीन जादू को जानने वाली डॉक्टर हूँ! हीही।"
					},
					"type": "speech",
					"emotion": "happy",
					"speaker": "random_boss"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						4,
						2
					],
					"type": "direction",
					"speaker": "cedar",
					"duration_ms": 500
				},
				{
					"speaker": "cedar",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "아니야… 이 두루마리는 단순한 행운의 주문이 아니야.",
						"english": "No... This scroll isn't just a simple good luck charm.",
						"japanese": "違う…この巻物は単なる幸運の呪文じゃない。",
						"chinese": "不……这个卷轴不是简单的幸运咒语。",
						"french": "Non... Ce parchemin n'est pas qu'un simple sort de chance.",
						"spanish": "No... Este pergamino no es solo un simple hechizo de buena suerte.",
						"vietnamese": "Không... Cuộn giấy này không phải chỉ là một lá bùa may mắn đơn thuần.",
						"thai": "ไม่สิ... ม้วนคัมภีร์นี่ไม่ใช่แค่คาถาแห่งโชคธรรมดาหรอกนะ",
						"hindi": "नहीं... यह स्क्रॉल केवल एक साधारण सौभाग्य का ताबीज नहीं है।"
					}
				},
				{
					"content": {
						"korean": "글자가 사라졌다가 다시 나타나… '속임수 속에 감춰진 진실'…",
						"english": "The letters disappear and reappear... 'Truth hidden within deception'...",
						"japanese": "文字が消えたり現れたり…「欺瞞の中に隠された真実」…",
						"chinese": "文字消失又再次出现……“隐藏在欺骗中的真相”……",
						"french": "Les lettres disparaissent et réapparaissent... \"La vérité cachée dans la tromperie\"...",
						"spanish": "Las letras desaparecen y reaparecen... \"La verdad oculta en el engaño\"...",
						"vietnamese": "Chữ viết biến mất rồi lại hiện ra... 'Sự thật ẩn giấu trong lừa dối'...",
						"thai": "ตัวอักษรหายไปแล้วก็ปรากฏขึ้นอีกครั้ง... 'ความจริงที่ซ่อนอยู่ในอุบาย'...",
						"hindi": "अक्षर गायब होते हैं और फिर से प्रकट होते हैं... 'धोखे में छिपा सच'..."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "cedar"
				},
				{
					"duration_ms": 450,
					"speaker": "random_boss",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "어머, 그건 비밀이에요! 진실은 달콤한 사탕 속에 숨겨져 있는 법이랍니다! 츄릅.",
						"english": "Oh my, that's a secret! The truth is always hidden within sweet candy! Nom nom.",
						"japanese": "あら、それは秘密ですよ！真実は甘い飴の中に隠されているものなんです！ちゅるん。",
						"chinese": "哎呀，那是秘密！真相总是藏在甜甜的糖果里呢！吧唧。",
						"french": "Oh là là, c'est un secret ! La vérité est toujours cachée dans de doux bonbons ! Miam miam.",
						"spanish": "¡Ay, eso es un secreto! ¡La verdad siempre está escondida dentro de un dulce caramelo! Ñam ñam.",
						"vietnamese": "Ối, đó là bí mật! Sự thật luôn ẩn giấu trong viên kẹo ngọt ngào mà! Chụt chụt.",
						"thai": "อุ๊ยตาย, นั่นมันความลับนะ! ความจริงมักจะซ่อนอยู่ในลูกอมหวานๆ เสมอเลยนะ! จุ๊บๆ",
						"hindi": "अरे बाप रे, वह एक रहस्य है! सच हमेशा मीठी कैंडी के अंदर छिपा होता है! यम्मी।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "happy"
				},
				{
					"content": {
						"korean": "도대체 무슨 말을 하는 거예요?",
						"english": "What on earth are you talking about?",
						"japanese": "一体何を言ってるんですか？",
						"chinese": "你到底在说什么？",
						"french": "De quoi parlez-vous donc ?",
						"spanish": "¿De qué estás hablando, por el amor de Dios?",
						"vietnamese": "Rốt cuộc cô đang nói cái gì vậy?",
						"thai": "นี่คุณกำลังพูดเรื่องอะไรกันแน่เนี่ย?",
						"hindi": "आप आखिर किस बारे में बात कर रहे हैं?"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_3"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "모르겠다면, 그냥 모르는 채로 두는 게 몸에 이로울 때도 있다구요! 후후.",
						"english": "If you don't know, sometimes it's better for you to just not know! Hehe.",
						"japanese": "知らないなら、知らないままにしておくのが身のためになることもあるんですよ！ふふ。",
						"chinese": "如果不知道，有时候就让它不知道，对你反而更好哦！呵呵。",
						"french": "Si vous ne savez pas, parfois il est préférable de ne pas savoir ! Huhu.",
						"spanish": "Si no lo sabes, ¡a veces es mejor para ti simplemente no saberlo! Jeje.",
						"vietnamese": "Nếu không biết, đôi khi cứ không biết thì sẽ tốt hơn cho bản thân đấy! Hì hì.",
						"thai": "ถ้าไม่รู้ บางทีการไม่รู้ก็อาจจะเป็นผลดีกับตัวคุณเองก็ได้นะ! หึๆ",
						"hindi": "अगर आपको नहीं पता, तो कभी-कभी आपके लिए यही बेहतर होता है कि आप बस न जानें! हीही।"
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "cedar",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "이 문양… 무당벌레의 등껍질 무늬와 놀랍도록 유사해.",
						"english": "This pattern... it's remarkably similar to a ladybug's shell.",
						"japanese": "この模様…テントウムシの甲羅の柄と驚くほど似ているわ。",
						"chinese": "这个图案……竟然和瓢虫的甲壳花纹惊人地相似。",
						"french": "Ce motif... il ressemble étonnamment à celui de la carapace d'une coccinelle.",
						"spanish": "Este patrón... es sorprendentemente similar al caparazón de una mariquita.",
						"vietnamese": "Hoa văn này… giống vỏ bọ rùa một cách đáng kinh ngạc.",
						"thai": "ลวดลายนี่... ช่างคล้ายคลึงกับลายบนกระดองเต่าทองอย่างน่าประหลาดใจ",
						"hindi": "यह पैटर्न... एक लेडीबग के खोल के पैटर्न के समान है।"
					},
					"speaker": "cedar",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "설마… 우연이 아니었단 말이에요?",
						"english": "Could it be... it wasn't a coincidence?",
						"japanese": "まさか…偶然じゃなかったってことですか？",
						"chinese": "难道……这并非偶然？",
						"french": "Serait-ce... que ce n'était pas une coïncidence ?",
						"spanish": "¿Será posible... que no fuera una coincidencia?",
						"vietnamese": "Không lẽ… đó không phải là sự trùng hợp?",
						"thai": "ไม่จริงน่า... นี่ไม่ใช่เรื่องบังเอิญเหรอคะ?",
						"hindi": "कहीं... यह कोई संयोग तो नहीं था?"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "이 낡은 두루마리에 '영혼 전이'와 '무당벌레'가 동시에 언급된다는 건… 분명히 위험한 의미야.",
						"english": "This old scroll mentioning 'soul transfer' and 'ladybugs' simultaneously... it definitely has a dangerous meaning.",
						"japanese": "この古い巻物に「魂の転移」と「テントウムシ」が同時に言及されているなんて…間違いなく危険な意味合いだわ。",
						"chinese": "这卷旧羊皮卷上同时提及‘灵魂转移’和‘瓢虫’……这分明是危险的信号。",
						"french": "Ce vieux parchemin mentionnant 'transfert d'âme' et 'coccinelles' simultanément... cela a clairement une signification dangereuse.",
						"spanish": "Este viejo pergamino mencionando 'transferencia de alma' y 'mariquitas' al mismo tiempo... definitivamente tiene un significado peligroso.",
						"vietnamese": "Cuộn giấy cũ này nhắc đến 'chuyển linh hồn' và 'bọ rùa' cùng lúc… chắc chắn có ý nghĩa nguy hiểm.",
						"thai": "คัมภีร์เก่าแก่ม้วนนี้ที่กล่าวถึง 'การถ่ายโอนวิญญาณ' และ 'เต่าทอง' พร้อมกัน... มันต้องมีความหมายที่อันตรายอย่างแน่นอน",
						"hindi": "इस पुरानी पांडुलिपि में 'आत्मा के स्थानांतरण' और 'लेडीबग' का एक साथ उल्लेख... इसका निश्चित रूप से एक खतरनाक अर्थ है।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "cedar"
				},
				{
					"duration_ms": 400,
					"speaker": "random_boss",
					"type": "direction",
					"spot": [
						5,
						3
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "호호, 제 등껍질이 아름답다는 건 동서고금을 막론한 진리! 감탄이 절로 나오는군요!",
						"english": "Hoho, that my shell is beautiful is a truth across all times and places! It truly inspires admiration!",
						"japanese": "ホホ、私の甲羅が美しいというのは、古今東西を問わない真理！思わず感嘆の声が漏れてしまいますね！",
						"chinese": "呵呵，我的甲壳美丽动人可是亘古不变的真理！真是令人赞叹不已！",
						"french": "Hoho, que ma carapace soit belle est une vérité universelle ! Cela inspire l'admiration !",
						"spanish": "¡Jojo, que mi caparazón es hermoso es una verdad que trasciende el tiempo y el espacio! ¡Inspira admiración!",
						"vietnamese": "Hô hô, mai của ta đẹp là chân lý vượt thời gian và không gian! Thật đáng ngưỡng mộ!",
						"thai": "โฮะๆ ความจริงที่ว่ากระดองของฉันสวยงามนั้นเป็นสัจธรรมไม่ว่าจะยุคสมัยไหน! มันน่าชื่นชมจริงๆ!",
						"hindi": "हो हो, मेरा खोल सुंदर है यह एक शाश्वत सत्य है! यह वास्तव में प्रशंसा जगाता है!"
					},
					"type": "speech",
					"emotion": "happy",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "지금 그게 중요한 게 아니잖아요!",
						"english": "That's not what's important right now!",
						"japanese": "今、それが重要じゃないでしょう！",
						"chinese": "现在这不是重点！",
						"french": "Ce n'est pas ça qui est important maintenant !",
						"spanish": "¡Eso no es lo importante ahora mismo!",
						"vietnamese": "Bây giờ đó không phải là điều quan trọng!",
						"thai": "ตอนนี้เรื่องนั้นมันไม่สำคัญนะคะ!",
						"hindi": "अभी वह महत्वपूर्ण नहीं है!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "뭘 그렇게 심각하게 생각하세요? 숲은 원래 미스터리 투성이인걸요! 후후.",
						"english": "Why so serious? The forest is full of mysteries, after all! Hehe.",
						"japanese": "何をそんなに深刻に考えているんですか？森は元々ミステリーだらけなんですよ！フフ。",
						"chinese": "干嘛想得那么严肃？森林本来就充满了谜团！呵呵。",
						"french": "Pourquoi êtes-vous si sérieux ? La forêt est pleine de mystères, après tout ! Huhu.",
						"spanish": "¿Por qué tan serio? ¡El bosque está lleno de misterios, después de todo! Juju.",
						"vietnamese": "Sao lại nghĩ nghiêm trọng vậy? Rừng vốn dĩ đầy rẫy những bí ẩn mà! Hừm hừm.",
						"thai": "ทำไมถึงคิดจริงจังขนาดนั้นล่ะ? ป่ามันก็เต็มไปด้วยความลึกลับอยู่แล้วนี่นา! หุหุ",
						"hindi": "इतना गंभीर क्यों सोचते हो? आखिर जंगल रहस्यों से भरा है! हँ हँ।"
					}
				},
				{
					"content": {
						"korean": "아니, 이 문구는 분명히… 진실을 감추고 있어!",
						"english": "No, this phrase definitely... conceals the truth!",
						"japanese": "いや、この文言は明らかに…真実を隠している！",
						"chinese": "不，这句话分明……隐藏着真相！",
						"french": "Non, cette phrase... elle cache clairement la vérité !",
						"spanish": "¡No, esta frase definitivamente... oculta la verdad!",
						"vietnamese": "Không, câu này rõ ràng… đang che giấu sự thật!",
						"thai": "ไม่สิ ข้อความนี้มัน... ต้องซ่อนความจริงเอาไว้แน่ๆ!",
						"hindi": "नहीं, यह वाक्यांश निश्चित रूप से... सच्चाई छिपा रहा है!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "cedar"
				},
				{
					"duration_ms": 400,
					"direction": "up",
					"speaker": "random_boss",
					"type": "direction",
					"action": "exit"
				},
				{
					"content": {
						"korean": "어머, 벌써 갈 시간인가요? 그럼 다음 미스터리에서 만나요!",
						"english": "Oh my, is it time to go already? Well then, see you at the next mystery!",
						"japanese": "あら、もう行く時間ですか？じゃあ、次のミステリーで会いましょう！",
						"chinese": "哎呀，已经要走了吗？那我们下个谜团再见咯！",
						"french": "Oh, déjà l'heure de partir ? Eh bien, à la prochaine énigme !",
						"spanish": "Oh, ¿ya es hora de irse? ¡Pues nos vemos en el próximo misterio!",
						"vietnamese": "Ôi, đã đến lúc đi rồi sao? Vậy hẹn gặp lại ở bí ẩn tiếp theo nhé!",
						"thai": "โอ้ ถึงเวลาต้องไปแล้วเหรอคะ? งั้นไว้เจอกันในปริศนาถัดไปนะ!",
						"hindi": "अरे, क्या यह जाने का समय हो गया है? तो फिर, अगली रहस्यमयी घटना में मिलते हैं!"
					},
					"type": "speech",
					"emotion": "happy",
					"speaker": "random_boss"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "숲의 가장 깊은 곳, 거대한 나무뿌리들이 얽힌 틈새에서 거대한 그림자가 일렁였다.",
						"english": "In the deepest part of the forest, amidst the tangle of gigantic tree roots, a massive shadow stirred.",
						"japanese": "森の最も深い場所、巨大な木の根が絡み合う隙間から、巨大な影がゆらめいた。",
						"chinese": "森林最深处，巨大的树根交错缠绕的缝隙中，一道巨大的黑影晃动着。",
						"french": "Dans la partie la plus profonde de la forêt, au milieu de l'enchevêtrement des racines d'arbres gigantesques, une ombre massive vacilla.",
						"spanish": "En lo más profundo del bosque, entre el entrelazado de gigantescas raíces de árboles, una sombra masiva se agitó.",
						"vietnamese": "Trong sâu thẳm khu rừng, giữa kẽ những rễ cây khổng lồ đan xen, một bóng đen khổng lồ xao động.",
						"thai": "ในส่วนที่ลึกที่สุดของป่า ท่ามกลางรากไม้ขนาดยักษ์ที่พันกันยุ่งเหยิง เงาขนาดมหึมาก็ไหวระริก",
						"hindi": "जंगल के सबसे गहरे हिस्से में, विशाल पेड़ की जड़ों के उलझे हुए जाल के बीच, एक विशाल छाया हिलने लगी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "호호, 여기까지 오다니… 꽤나 끈질긴 친구들이군요!",
						"english": "Hoho, to come all the way here... you're quite persistent, aren't you, friends!",
						"japanese": "ホホ、ここまで来るとは…なかなか粘り強い方々ですね！",
						"chinese": "呵呵，竟然能走到这里……真是些顽强的家伙啊！",
						"french": "Hoho, d'être venus jusqu'ici... vous êtes plutôt tenaces, mes amis !",
						"spanish": "¡Jojo, llegar hasta aquí... sois bastante persistentes, amigos!",
						"vietnamese": "Hô hô, đến được tận đây… các bạn thật là kiên trì đấy!",
						"thai": "โฮะๆ มาได้ถึงที่นี่เลยเหรอเนี่ย... เป็นเพื่อนที่อึดจริงๆ เลยนะ!",
						"hindi": "हो हो, यहाँ तक आ गए... तुम काफी जिद्दी दोस्त हो!"
					}
				},
				{
					"content": {
						"korean": "드디어 본모습을 드러내는군, {random_boss}!",
						"english": "Finally, you show your true form, {random_boss}!",
						"japanese": "ついに正体を現したな、{random_boss}！",
						"chinese": "你终于露出真面目了，{random_boss}！",
						"french": "Tu révèles enfin ta vraie forme, {random_boss} !",
						"spanish": "¡Por fin muestras tu verdadera forma, {random_boss}!",
						"vietnamese": "Cuối cùng ngươi cũng lộ nguyên hình rồi, {random_boss}!",
						"thai": "ในที่สุดแกก็เผยร่างที่แท้จริงออกมา, {random_boss}!",
						"hindi": "आखिरकार तुम अपनी असलियत दिखा ही दिए, {random_boss}!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "본모습이라… 제가 언제 속인 적 있던가요? 늘 진실을 말했는데, 못 알아들은 건 그쪽이죠!",
						"english": "True form...? Have I ever deceived you? I always spoke the truth; you just couldn't comprehend it!",
						"japanese": "正体だと…？私がいつ欺いた？常に真実を語ってきたが、理解できなかったのはそちらだろう！",
						"chinese": "真面目……？我何时欺骗过你？我一直说的都是实话，只是你没有听懂罢了！",
						"french": "Ma vraie forme...? Vous ai-je déjà trompé ? J'ai toujours dit la vérité, c'est vous qui n'avez pas voulu l'entendre !",
						"spanish": "¿Mi verdadera forma...? ¿Acaso alguna vez te engañé? Siempre dije la verdad, ¡fuiste tú quien no supo entenderla!",
						"vietnamese": "Nguyên hình...? Ta đã bao giờ lừa dối ngươi đâu? Ta luôn nói sự thật, chỉ là ngươi không hiểu mà thôi!",
						"thai": "ร่างที่แท้จริง...? ข้าเคยหลอกเจ้าตอนไหน? ข้าพูดความจริงเสมอ เพียงแต่เจ้าไม่เข้าใจเอง!",
						"hindi": "असली रूप...? क्या मैंने तुम्हें कभी धोखा दिया? मैंने हमेशा सच कहा, तुम ही उसे समझ नहीं पाए!"
					}
				},
				{
					"content": {
						"korean": "더 이상 속지 않아!",
						"english": "I won't be fooled anymore!",
						"japanese": "もう騙されない！",
						"chinese": "我不会再被骗了！",
						"french": "Je ne me laisserai plus berner !",
						"spanish": "¡No me engañarás más!",
						"vietnamese": "Ta sẽ không bị lừa nữa!",
						"thai": "ข้าจะไม่ถูกหลอกอีกแล้ว!",
						"hindi": "मैं अब और मूर्ख नहीं बनूँगा!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "과연 그럴까요? 진실은 늘 달콤한 거짓 속에 숨겨져 있는 법이랍니다. 크크.",
						"english": "Oh, really? Truth is always hidden within sweet lies. Heh heh.",
						"japanese": "本当にそうかな？真実は常に甘い偽りの中に隠されているものだよ。クク。",
						"chinese": "哦，是吗？真相总是隐藏在甜蜜的谎言之中。呵呵。",
						"french": "Vraiment ? La vérité est toujours cachée derrière de doux mensonges. Huhu.",
						"spanish": "¿Ah, sí? La verdad siempre se esconde entre dulces mentiras. Jeje.",
						"vietnamese": "Thật sao? Sự thật luôn ẩn giấu trong những lời dối trá ngọt ngào. Khà khà.",
						"thai": "จริงเหรอ? ความจริงมักจะซ่อนอยู่ในคำโกหกอันหอมหวานเสมอ คิกคิก",
						"hindi": "सच में? सच्चाई हमेशा मीठे झूठ में छिपी होती है। हीही।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "숲의 그림자가 모든 것을 집어삼켰다. 일행은 거대한 힘 앞에 무릎 꿇었다.",
						"english": "The forest's shadow consumed all. The party fell before an immense power.",
						"japanese": "森の影が全てを飲み込んだ。一行は巨大な力の前に膝を屈した。",
						"chinese": "森林的阴影吞噬了一切。队伍在巨大的力量面前屈服了。",
						"french": "L'ombre de la forêt a tout dévoré. Le groupe a fléchi le genou devant une puissance immense.",
						"spanish": "La sombra del bosque lo consumió todo. El grupo se arrodilló ante un poder inmenso.",
						"vietnamese": "Bóng tối của rừng đã nuốt chửng mọi thứ. Đoàn người đã quỳ gối trước sức mạnh khổng lồ.",
						"thai": "เงาของป่ากลืนกินทุกสิ่ง คณะคุกเข่าลงต่อหน้าพลังอันมหาศาล",
						"hindi": "वन की छाया ने सब कुछ निगल लिया। दल एक विशाल शक्ति के सामने घुटने टेक गया।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "포기하는 게 좋을 텐데… 너희의 분노는… 날 더 강하게 할 뿐이야… 크크.",
						"english": "You'd best give up... Your rage... only makes me stronger... Heheheh.",
						"japanese": "諦めた方がいい… お前たちの怒り… 私をさらに強くするだけだ… クク。",
						"chinese": "最好放弃吧… 你们的愤怒… 只会让我更强大… 呵呵。",
						"french": "Vous feriez mieux d'abandonner... Votre rage... ne fait que me rendre plus fort... Hahaha.",
						"spanish": "Será mejor que os rindáis... Vuestra ira... solo me hace más fuerte... Jeje.",
						"vietnamese": "Tốt nhất là nên từ bỏ đi… Sự tức giận của các ngươi… chỉ khiến ta mạnh hơn mà thôi… Khà khà.",
						"thai": "เจ้าควรจะยอมแพ้เสียเถอะ... ความโกรธของพวกเจ้า... มีแต่จะทำให้ข้าแข็งแกร่งขึ้นเท่านั้น... ฮ่าฮ่า",
						"hindi": "हार मान लेना ही बेहतर होगा… तुम्हारा क्रोध… मुझे और शक्तिशाली बनाएगा… ही ही ही।"
					}
				},
				{
					"content": {
						"korean": "이대로는… 끝낼 수 없어! 다시 일어설 거야!",
						"english": "Not like this... I won't end it! I'll rise again!",
						"japanese": "このままでは… 終われない！また立ち上がる！",
						"chinese": "不能就这样… 结束！我还会再站起来！",
						"french": "Pas comme ça... Je ne peux pas finir comme ça ! Je me relèverai !",
						"spanish": "¡Así no... no puedo acabar! ¡Me levantaré de nuevo!",
						"vietnamese": "Không thể… kết thúc như thế này! Ta sẽ đứng dậy một lần nữa!",
						"thai": "ไม่ใช่แบบนี้... ข้ายังจบไม่ได้! ข้าจะลุกขึ้นสู้อีกครั้ง!",
						"hindi": "ऐसे तो… खत्म नहीं कर सकता! मैं फिर उठ खड़ा होऊंगा!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "후훗, 과연 그럴까요? 달콤한 꿈에서 깨어나지 못하게 해 줄게요.",
						"english": "Oh? Is that so? I won't let you wake from your sweet dream.",
						"japanese": "ふふ、本当にそうかな？甘い夢から目覚めさせないよ。",
						"chinese": "呵呵，真的吗？我不会让你们从甜美的梦中醒来。",
						"french": "Hoho, vraiment ? Je ne vous laisserai pas vous réveiller de votre doux rêve.",
						"spanish": "Jeje, ¿en serio? No permitiré que despertéis de vuestro dulce sueño.",
						"vietnamese": "Hừm, thật vậy sao? Ta sẽ không để ngươi tỉnh giấc khỏi giấc mơ ngọt ngào đâu.",
						"thai": "หึๆ, จริงหรือ? ข้าจะไม่ยอมให้เจ้าตื่นจากฝันหวานหรอกนะ",
						"hindi": "हँ हँ, क्या ऐसा है? मैं तुम्हें तुम्हारे मीठे सपने से जागने नहीं दूंगा।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 찢겨져 나갔다. 주술의 힘이 약해지는 것을 느낄 수 있었다.",
						"english": "The colossal shadow was torn apart. The power of the spell felt weakened.",
						"japanese": "巨大な影が引き裂かれた。呪術の力が弱まるのを感じた。",
						"chinese": "巨大的黑影被撕裂了。众人感觉到咒术的力量正在减弱。",
						"french": "L'ombre colossale fut déchirée. On sentait le pouvoir du sort s'affaiblir.",
						"spanish": "La colosal sombra fue destrozada. Se podía sentir cómo el poder del hechizo se debilitaba.",
						"vietnamese": "Bóng đen khổng lồ bị xé nát. Có thể cảm nhận được sức mạnh của ma thuật đang suy yếu.",
						"thai": "เงาขนาดมหึมาถูกฉีกกระชาก พลังของคาถาอ่อนลง",
						"hindi": "विशाल परछाई फट गई। मंत्र की शक्ति कमजोर होती महसूस हुई।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "크크… 겨우 이 정도라니… 아직 멀었어… 진정한 '그것'은… 따로 있거든…",
						"english": "Heh heh... Is this all you've got...? It's not over yet... The true 'one'... is elsewhere...",
						"japanese": "クク…この程度か…まだまだだな…真の『それ』は…別にあるからな…",
						"chinese": "呵呵……就这点本事吗……还差得远呢……真正的“它”……还在别处……",
						"french": "Huhu... Ce n'est que ça...? Loin de là... Le vrai 'celui'... est ailleurs...",
						"spanish": "Jeje... ¿Esto es todo lo que tienes...? Aún falta mucho... El verdadero 'eso'... está en otro lugar...",
						"vietnamese": "Khà khà... Chỉ có thế này thôi sao...? Còn lâu mới xong... 'Thứ' thật sự... vẫn còn ở nơi khác...",
						"thai": "คิกคิก... แค่นี้เองเหรอ... ยังอีกไกล... 'สิ่งนั้น' ที่แท้จริง... ยังมีอีก...",
						"hindi": "हीही... बस इतना ही...? अभी बहुत बाकी है... असली 'वह'... कहीं और है..."
					}
				},
				{
					"content": {
						"korean": "무슨 소리야? 진정한 그것이라니…",
						"english": "What are you talking about? The true 'one'?",
						"japanese": "何を言っている？真の『それ』とは…",
						"chinese": "你在说什么？真正的“它”是什么意思……",
						"french": "De quoi parles-tu ? Le vrai 'celui' ?",
						"spanish": "¿De qué hablas? ¿El verdadero 'eso'?",
						"vietnamese": "Ngươi đang nói gì vậy? 'Thứ' thật sự là gì...",
						"thai": "พูดอะไรน่ะ? 'สิ่งนั้น' ที่แท้จริงคืออะไร...",
						"hindi": "तुम क्या कह रहे हो? असली 'वह' क्या है...?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "내 영혼이… 다시 돌아갈 뿐이야… 달콤한 숲의 주인에게로…",
						"english": "My soul... merely returns... to the master of the sweet forest...",
						"japanese": "私の魂は…ただ帰るだけだ…甘い森の主へと…",
						"chinese": "我的灵魂……只是回归罢了……回到甜蜜森林的主人那里……",
						"french": "Mon âme... retourne simplement... au maître de la douce forêt...",
						"spanish": "Mi alma... simplemente regresa... al amo del dulce bosque...",
						"vietnamese": "Linh hồn của ta... chỉ là trở về... với chủ nhân của khu rừng ngọt ngào...",
						"thai": "วิญญาณของข้า... แค่จะกลับไป... หาเจ้าแห่งป่าอันหอมหวาน...",
						"hindi": "मेरी आत्मा... बस लौट जाएगी... मीठे जंगल के मालिक के पास..."
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "쓰러진 {random_boss}의 잔해에서 고대 주술의 문양이 섬광처럼 빛났다.",
						"english": "From the remains of the fallen {random_boss}, an ancient magical symbol flashed like lightning.",
						"japanese": "倒れた{random_boss}の残骸から、古代呪術の紋様が閃光のように輝いた。",
						"chinese": "在倒下的{random_boss}的残骸中，古老咒术的符文像闪光般亮起。",
						"french": "Des restes du {random_boss} vaincu, un symbole de magie ancienne brillait comme un éclair.",
						"spanish": "De los restos del caído {random_boss}, un antiguo símbolo mágico brilló como un relámpago.",
						"vietnamese": "Từ tàn dư của {random_boss} đã gục ngã, một phù hiệu ma thuật cổ xưa lóe sáng như tia chớp.",
						"thai": "จากซากของ {random_boss} ที่ล้มลง ลวดลายเวทมนตร์โบราณก็ส่องประกายวาบขึ้นมา",
						"hindi": "गिरे हुए {random_boss} के अवशेषों से, एक प्राचीन जादुई प्रतीक बिजली की तरह चमका।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그제야 일행은 깨달았다. 이 숲의 진정한 지배자는, 아직 모습을 드러내지 않았다는 것을.",
						"english": "Only then did the party realize. The true ruler of this forest had yet to reveal itself.",
						"japanese": "その時になって初めて一行は悟った。この森の真の支配者は、まだ姿を現していないということを。",
						"chinese": "直到那时，一行人才明白。这片森林的真正支配者，尚未现身。",
						"french": "Ce n'est qu'alors que le groupe réalisa. Le véritable dirigeant de cette forêt ne s'était pas encore montré.",
						"spanish": "Solo entonces el grupo se dio cuenta. El verdadero gobernante de este bosque aún no se había revelado.",
						"vietnamese": "Chỉ đến lúc đó, cả đoàn mới nhận ra. Kẻ thống trị thực sự của khu rừng này vẫn chưa lộ diện.",
						"thai": "เมื่อนั้นเอง เหล่าผู้ร่วมเดินทางจึงได้ตระหนักว่า ผู้ปกครองที่แท้จริงของป่าแห่งนี้ ยังไม่ได้เผยตัวออกมา",
						"hindi": "तभी दल को एहसास हुआ। इस जंगल का असली शासक अभी तक सामने नहीं आया था।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"숲 깊이 들어설수록, 과거의 속삭임이 현재를 흔든다.",
			"고대 주술의 두루마리, 그리고 의미를 알 수 없는 단어들.",
			"진실은 혼란 속에 감춰져 있고, 누군가는 그 혼란을 즐기는 듯하다.",
			"과연 이 모든 것이 우연일까? 혹은… 교묘한 연극일까?"
		],
		"english": [
			"Deeper into the forest, whispers of the past shake the present.",
			"Scrolls of ancient sorcery, words of unknown meaning.",
			"Truth hidden in chaos, a chaos someone seems to relish.",
			"Is all this mere coincidence? Or... a cunning play?"
		],
		"japanese": [
			"森の奥深くに進むほど、過去の囁きが現在を揺るがす。",
			"古代呪術の巻物、そして意味不明な言葉たち。",
			"真実は混乱の中に隠され、誰かがその混乱を楽しんでいるようだ。",
			"果たしてこれらは全て偶然なのか？それとも…巧妙な芝居なのか？"
		],
		"chinese": [
			"深入森林，过去的低语动摇着现在。",
			"古老巫术卷轴，以及意义不明的词语。",
			"真相隐藏于混乱之中，似乎有人乐在其中。",
			"这一切都是巧合吗？抑或…一场精心策划的戏？"
		],
		"french": [
			"Plus on s'enfonce dans la forêt, plus les murmures du passé ébranlent le présent.",
			"Parchemins de sorcellerie ancienne, mots au sens inconnu.",
			"La vérité est cachée dans le chaos, un chaos que quelqu'un semble savourer.",
			"Tout cela est-il une simple coïncidence ? Ou... une pièce astucieuse ?"
		],
		"spanish": [
			"Cuanto más te adentras en el bosque, los susurros del pasado sacuden el presente.",
			"Pergaminos de hechicería antigua, palabras de significado desconocido.",
			"La verdad oculta en el caos, un caos que alguien parece disfrutar.",
			"¿Es todo esto mera coincidencia? ¿O... una astuta obra de teatro?"
		],
		"vietnamese": [
			"Càng vào sâu trong rừng, những lời thì thầm của quá khứ càng lay động hiện tại.",
			"Những cuộn giấy phép thuật cổ xưa, và những từ ngữ không rõ nghĩa.",
			"Sự thật ẩn giấu trong hỗn loạn, và dường như có kẻ đang tận hưởng sự hỗn loạn đó.",
			"Liệu tất cả những điều này chỉ là sự trùng hợp ngẫu nhiên? Hay... một vở kịch tinh vi?"
		],
		"thai": [
			"ยิ่งลึกเข้าไปในป่า เสียงกระซิบจากอดีตยิ่งสั่นคลอนปัจจุบัน",
			"ม้วนคัมภีร์เวทมนตร์โบราณ และถ้อยคำที่ไร้ความหมาย",
			"ความจริงซ่อนอยู่ในความวุ่นวาย ความวุ่นวายที่บางคนดูเหมือนจะเพลิดเพลิน",
			"ทั้งหมดนี้เป็นเพียงเรื่องบังเอิญหรือ? หรือ... เป็นละครที่เจ้าเล่ห์กันแน่?"
		],
		"hindi": [
			"जितना गहरा जंगल में प्रवेश करते हैं, अतीत की फुसफुसाहट वर्तमान को हिला देती है。",
			"प्राचीन जादू के स्क्रॉल, और अर्थहीन शब्द।",
			"सच्चाई अराजकता में छिपी है, एक ऐसी अराजकता जिसका कोई आनंद लेता हुआ लगता है।",
			"क्या यह सब महज़ संयोग है? या... एक चालाक नाटक?"
		]
	}
} as const;
