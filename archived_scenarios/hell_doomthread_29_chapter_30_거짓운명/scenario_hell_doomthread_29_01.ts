export const scenario_hell_doomthread_29_01 = {
	"scenario_id": "hell_doomthread_29_01",
	"order": 1,
	"act": "intro",
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
						"korean": "끝없이 늘어선 서고, 지워지지 않는 기록들. 이곳은 영혼의 관청이다.",
						"english": "Endless archives, indelible records. This is the Bureau of Souls.",
						"japanese": "果てしなく並ぶ書庫、消えない記録。ここは魂の庁だ。",
						"chinese": "无尽的书库，不可磨灭的记录。这里是灵魂的官厅。",
						"french": "Des archives sans fin, des registres indélébiles. Voici le Bureau des Âmes.",
						"spanish": "Archivos interminables, registros imborrables. Esta es la Oficina de las Almas.",
						"vietnamese": "Kho sách vô tận, hồ sơ không thể xóa nhòa. Đây là Cục Linh Hồn.",
						"thai": "หอสมุดอันไร้ที่สิ้นสุด, บันทึกที่ลบไม่ได้. ที่นี่คือสำนักวิญญาณ",
						"hindi": "अंतहीन अभिलेखागार, अमिट रिकॉर्ड। यह आत्माओं का कार्यालय है।"
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "망자들은 자신의 죄를 고백하며 영원히 속죄한다.",
						"english": "The deceased confess their sins, atoning eternally.",
						"japanese": "亡者たちは自らの罪を告白し、永遠に贖罪する。",
						"chinese": "亡者们忏悔自己的罪孽，永远地赎罪。",
						"french": "Les défunts confessent leurs péchés, expiant éternellement.",
						"spanish": "Los difuntos confiesan sus pecados, expiando eternamente.",
						"vietnamese": "Người chết thú nhận tội lỗi của mình, chuộc tội vĩnh viễn.",
						"thai": "ผู้ตายสารภาพบาปของตน, ไถ่บาปชั่วนิรันดร์",
						"hindi": "मृतक अपने पापों को स्वीकार करते हैं, अनंत काल तक प्रायश्चित करते हैं।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "…이곳은… 대체 어디지?",
						"english": "...Where... in the world is this?",
						"japanese": "…ここは…一体どこだ？",
						"chinese": "……这里……究竟是哪里？",
						"french": "...Où... diable sommes-nous ?",
						"spanish": "...¿Dónde... diablos es esto?",
						"vietnamese": "...Đây... rốt cuộc là đâu?",
						"thai": "...ที่นี่...มันที่ไหนกันแน่?",
						"hindi": "...यह... आखिर कहाँ है?"
					},
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"type": "direction",
					"action": "enter",
					"speaker": "ash"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…나는… 그때… 선택할 수 있었다… 하지만….",
						"english": "...I... could have chosen... back then... but...",
						"japanese": "…私は…あの時…選べたはずなのに…だが…。",
						"chinese": "……我……那时……本可以选择……但是……",
						"french": "...J'aurais... pu choisir... à ce moment-là... mais...",
						"spanish": "...Yo... pude haber elegido... en aquel entonces... pero...",
						"vietnamese": "...Tôi... lúc đó... có thể đã chọn... nhưng...",
						"thai": "...ฉัน...ตอนนั้น...เลือกได้แท้ๆ...แต่ว่า...",
						"hindi": "...मैं... तब... चुन सकता था... लेकिन..."
					},
					"emotion": "sad",
					"speaker": "ash"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "…이 죄책감… 나도 아는 감정이야.",
						"english": "...This guilt... I know this feeling.",
						"japanese": "…この罪悪感…私も知っている感情だ。",
						"chinese": "……这种负罪感……我也是知道的感情。",
						"french": "...Cette culpabilité... je connais ce sentiment.",
						"spanish": "...Esta culpa... conozco este sentimiento.",
						"vietnamese": "...Cảm giác tội lỗi này... tôi cũng biết.",
						"thai": "...ความรู้สึกผิดนี้...ฉันก็รู้จัก",
						"hindi": "यह अपराधबोध... मैं इस भावना को जानता हूँ।"
					},
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"type": "direction",
					"action": "enter",
					"speaker": "ash"
				},
				{
					"speaker": "ash",
					"emotion": "sad",
					"content": {
						"korean": "…그때의 실수는… 결코 지워지지 않아… 나는 영원히 여기서….",
						"english": "...That mistake... can never be erased... I'll be here forever...",
						"japanese": "…あの時の過ちは…決して消えない…私は永遠にここで…。",
						"chinese": "……那时的错误……永远无法抹去……我将永远在这里……",
						"french": "...Cette erreur... ne s'effacera jamais... Je serai ici pour toujours...",
						"spanish": "...Ese error... nunca podrá ser borrado... Estaré aquí para siempre...",
						"vietnamese": "...Lỗi lầm lúc đó... sẽ không bao giờ xóa được... Tôi sẽ mãi mãi ở đây...",
						"thai": "...ความผิดพลาดครั้งนั้น...ไม่มีวันลบเลือน...ฉันจะอยู่ที่นี่ตลอดไป...",
						"hindi": "...वह गलती... कभी मिटाई नहीं जा सकती... मैं यहाँ हमेशा के लिए रहूँगा..."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "그는 무엇을 후회하는 걸까? 왜 내 마음이 저릿하지?",
						"english": "What does he regret? Why does my heart ache?",
						"japanese": "彼は何を後悔しているのだろう？なぜ私の心が痛むのだろう？",
						"chinese": "他在后悔什么？为什么我的心会感到刺痛？",
						"french": "Que regrette-t-il ? Pourquoi mon cœur se serre-t-il ?",
						"spanish": "¿De qué se arrepiente? ¿Por qué me duele el corazón?",
						"vietnamese": "Anh ấy hối hận điều gì? Sao tim tôi lại nhói lên thế này?",
						"thai": "เขาเสียใจเรื่องอะไรนะ? ทำไมใจฉันถึงได้เจ็บแปลบขนาดนี้?",
						"hindi": "उसे किस बात का अफ़सोस है? मेरा दिल क्यों कसक रहा है?"
					}
				},
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "영혼이여. 운명을 받아들이는 것이 진정한 속죄입니다.",
						"english": "O Soul. To accept one's fate is true atonement.",
						"japanese": "魂よ。運命を受け入れることこそ、真の贖罪です。",
						"chinese": "灵魂啊。接受命运才是真正的赎罪。",
						"french": "Ô Âme. Accepter son destin est la véritable expiation.",
						"spanish": "Oh Alma. Aceptar el destino es la verdadera expiación.",
						"vietnamese": "Hỡi linh hồn. Chấp nhận số phận là sự chuộc tội đích thực.",
						"thai": "โอ้ ดวงวิญญาณเอ๋ย การยอมรับโชคชะตาคือการไถ่บาปที่แท้จริง",
						"hindi": "हे आत्मा। भाग्य को स्वीकार करना ही सच्चा प्रायश्चित्त है।"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "운명… 그건 누가 정하는 거지?",
						"english": "Fate... who decides that?",
						"japanese": "運命… それは誰が決めるものなの？",
						"chinese": "命运… 那是谁决定的？",
						"french": "Le destin... qui le décide ?",
						"spanish": "El destino... ¿quién lo decide?",
						"vietnamese": "Định mệnh... Ai là người quyết định nó?",
						"thai": "โชคชะตา... ใครเป็นคนกำหนดกันแน่?",
						"hindi": "भाग्य... वो कौन तय करता है?"
					},
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "ash",
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그들의 절규가… 아직도 귓가에 선명해….",
						"english": "Their screams... still echo vividly in my ears.",
						"japanese": "彼らの絶叫が… 未だに耳元に鮮明だ…。",
						"chinese": "他们的哀嚎… 至今仍清晰地回荡在耳边…。",
						"french": "Leurs hurlements... résonnent encore clairement à mes oreilles...",
						"spanish": "Sus gritos... aún resuenan claramente en mis oídos...",
						"vietnamese": "Tiếng kêu gào của họ... vẫn còn vang vọng rõ mồn một bên tai...",
						"thai": "เสียงกรีดร้องของพวกเขา... ยังคงชัดเจนอยู่ในหู...",
						"hindi": "उनकी चीखें... अब भी कानों में साफ गूँज रही हैं..."
					},
					"emotion": "sad",
					"speaker": "ash"
				},
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction",
					"action": "enter",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "모든 고통은 기록되고, 모든 죄는 심판받습니다. 이것이 질서입니다.",
						"english": "All suffering is recorded, and all sin is judged. This is order.",
						"japanese": "全ての苦痛は記録され、全ての罪は裁かれます。これこそが秩序です。",
						"chinese": "所有的痛苦都被记录，所有的罪恶都将受到审判。这就是秩序。",
						"french": "Toute souffrance est enregistrée, tout péché est jugé. C'est l'ordre.",
						"spanish": "Todo sufrimiento es registrado y todo pecado es juzgado. Este es el orden.",
						"vietnamese": "Mọi đau khổ đều được ghi lại, mọi tội lỗi đều bị phán xét. Đây là trật tự.",
						"thai": "ความเจ็บปวดทั้งหมดจะถูกบันทึกไว้ และบาปทั้งหมดจะถูกตัดสิน นี่คือระเบียบ",
						"hindi": "सभी पीड़ाएँ दर्ज की जाती हैं, और सभी पापों का न्याय होता है। यही व्यवस्था है।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "당신도 머지않아 영원의 기록 앞에 서게 될 겁니다.",
						"english": "You too shall soon stand before the eternal record.",
						"japanese": "あなたも間もなく、永遠の記録の前に立つことになるでしょう。",
						"chinese": "你也很快会站在永恒的记录面前。",
						"french": "Toi aussi, tu te tiendras bientôt devant le registre éternel.",
						"spanish": "Tú también te presentarás pronto ante el registro eterno.",
						"vietnamese": "Ngươi cũng sẽ sớm đứng trước cuốn sổ ghi chép vĩnh hằng.",
						"thai": "ในไม่ช้าคุณก็จะต้องยืนอยู่หน้าบันทึกนิรันดร์",
						"hindi": "तुम्हें भी जल्द ही शाश्वत अभिलेख के सामने खड़ा होना पड़ेगा।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "너무 완벽한 질서… 어딘가 섬뜩해.",
						"english": "Such perfect order... it's unsettling.",
						"japanese": "あまりに完璧な秩序… どこか薄気味悪い。",
						"chinese": "如此完美的秩序… 总觉得有些毛骨悚然。",
						"french": "Un ordre si parfait... c'est effrayant.",
						"spanish": "Un orden tan perfecto... es escalofriante.",
						"vietnamese": "Một trật tự quá hoàn hảo... có gì đó rợn người.",
						"thai": "ระเบียบที่สมบูรณ์แบบเกินไป... มันน่าขนลุกยังไงชอบกล",
						"hindi": "इतनी पूर्ण व्यवस्था... कहीं न कहीं भयावह है।"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "ash",
					"type": "direction",
					"spot": [
						4,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "…도망칠 수 없어… 이곳은….",
						"english": "...There's no escape... from this place....",
						"japanese": "…逃げられない… ここは…。",
						"chinese": "…无法逃脱… 这里是…。",
						"french": "…Impossible de s'échapper… d'ici….",
						"spanish": "…No hay escape… de este lugar….",
						"vietnamese": "...Không thể thoát khỏi... nơi này....",
						"thai": "...หนีไม่พ้น... ที่นี่มัน....",
						"hindi": "...भाग नहीं सकता... यह जगह...."
					},
					"speaker": "ash",
					"emotion": "sad"
				},
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "수많은 영혼이 이곳에서 진실을 보았습니다. 모두 평온을 찾았죠.",
						"english": "Many souls have seen the truth here. All found peace.",
						"japanese": "数多くの魂がここで真実を見ました。皆、平穏を見出したのです。",
						"chinese": "许多灵魂在这里看到了真相。所有人都找到了平静。",
						"french": "De nombreuses âmes ont vu la vérité ici. Toutes ont trouvé la paix.",
						"spanish": "Muchas almas han visto la verdad aquí. Todas encontraron la paz.",
						"vietnamese": "Vô số linh hồn đã nhìn thấy sự thật ở đây. Tất cả đều tìm thấy sự bình yên.",
						"thai": "วิญญาณมากมายได้เห็นสัจธรรมที่นี่ ทุกคนพบความสงบแล้ว",
						"hindi": "कई आत्माओं ने यहाँ सत्य को देखा है। सभी ने शांति पाई।"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "평온? 이건 억압이잖아.",
						"english": "Peace? This is oppression.",
						"japanese": "平穏？これは抑圧だ。",
						"chinese": "平静？这根本就是压迫。",
						"french": "La paix ? C'est de l'oppression.",
						"spanish": "¿Paz? Esto es opresión.",
						"vietnamese": "Bình yên? Đây là sự áp bức mà.",
						"thai": "ความสงบ? นี่มันคือการกดขี่ต่างหาก",
						"hindi": "शांति? यह तो दमन है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "당신도 이 기록에 묶여 있습니다. 그 죄책감에서 벗어날 수 없습니다.",
						"english": "You are also bound by this record. You cannot escape this guilt.",
						"japanese": "あなたもこの記録に縛られています。その罪悪感から逃れることはできません。",
						"chinese": "你也被这份记录束缚着。你无法摆脱这份愧疚。",
						"french": "Vous êtes aussi lié à ce registre. Vous ne pouvez échapper à cette culpabilité.",
						"spanish": "Tú también estás atado a este registro. No puedes escapar de esta culpa.",
						"vietnamese": "Ngươi cũng bị ràng buộc bởi ghi chép này. Ngươi không thể thoát khỏi cảm giác tội lỗi này.",
						"thai": "เจ้าก็ถูกผูกมัดด้วยบันทึกนี้ เจ้าไม่อาจหลีกหนีความรู้สึกผิดนี้ได้",
						"hindi": "आप भी इस रिकॉर्ड से बंधे हैं। आप इस अपराधबोध से बच नहीं सकते।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "나는 달라. 내 죄는… 내가 아는 것과 달라.",
						"english": "I am different. My sin... is different from what I know.",
						"japanese": "私は違う。私の罪は…私が知っているものとは違う。",
						"chinese": "我不一样。我的罪…和我所知道的不同。",
						"french": "Je suis différent. Mon péché… est différent de ce que je connais.",
						"spanish": "Yo soy diferente. Mi pecado... es diferente a lo que sé.",
						"vietnamese": "Ta khác. Tội lỗi của ta… khác với những gì ta biết.",
						"thai": "ข้าไม่เหมือนใคร บาปของข้า...ต่างจากที่ข้ารู้",
						"hindi": "मैं अलग हूँ। मेरा पाप… जो मैं जानता हूँ उससे अलग है।"
					},
					"speaker": "character_any",
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ash"
				},
				{
					"speaker": "ash",
					"emotion": "sad",
					"content": {
						"korean": "…나는… 벗어날 수 없어… 너도….",
						"english": "...I... cannot escape... neither can you....",
						"japanese": "…私は…逃れられない…あなたも…。",
						"chinese": "……我……无法摆脱……你也是……。",
						"french": "…Je… ne peux pas m'échapper… et toi non plus….",
						"spanish": "…Yo… no puedo escapar… tú tampoco….",
						"vietnamese": "…Ta… không thoát được… ngươi cũng vậy….",
						"thai": "...ข้า...หนีไม่พ้น...เจ้าก็เช่นกัน....",
						"hindi": "…मैं… बच नहीं सकता… तुम भी नहीं…।"
					},
					"type": "speech"
				},
				{
					"action": "enter",
					"speaker": "character_any",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 영혼의 관청은 불변의 진리 위에 서 있습니다. 감히 의심하지 마십시오.",
						"english": "This Soul Registry stands upon unchangeable truth. Dare not question it.",
						"japanese": "この魂の官庁は不変の真実の上に立っています。あえて疑うなかれ。",
						"chinese": "这灵魂的官厅建立在不变的真理之上。切勿质疑。",
						"french": "Ce Bureau des Âmes repose sur une vérité immuable. N'osez pas le remettre en question.",
						"spanish": "Esta Oficina de Almas se erige sobre una verdad inmutable. No te atrevas a dudar.",
						"vietnamese": "Cơ quan Linh Hồn này đứng vững trên sự thật bất biến. Đừng dám nghi ngờ.",
						"thai": "หน่วยงานวิญญาณแห่งนี้ตั้งอยู่บนสัจธรรมที่ไม่เปลี่ยนแปลง อย่าได้บังอาจตั้งคำถาม",
						"hindi": "यह आत्मा का कार्यालय अपरिवर्तनीय सत्य पर आधारित है। संदेह करने की हिम्मत न करें।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"action": "exit",
					"type": "direction",
					"duration_ms": 300
				},
				{
					"type": "speech",
					"content": {
						"korean": "관청의 질서가 요동쳤다. 거대한 그림자가 기록관의 자리를 채웠다.",
						"english": "The order of the bureaucracy was shaken. A colossal shadow filled the chronicler's seat.",
						"japanese": "官庁の秩序が揺らいだ。巨大な影が記録官の席を占めた。",
						"chinese": "官府的秩序动摇了。一道巨大的身影占据了记录官的席位。",
						"french": "L'ordre de la bureaucratie fut ébranlé. Une ombre colossale occupa le siège du chroniqueur.",
						"spanish": "El orden de la burocracia se tambaleó. Una sombra colosal ocupó el asiento del cronista.",
						"vietnamese": "Trật tự của quan phủ rung chuyển. Một bóng đen khổng lồ chiếm lấy ghế của người ghi chép.",
						"thai": "ระเบียบของสำนักราชการสั่นคลอน เงาขนาดมหึมาเข้าครอบครองตำแหน่งของผู้บันทึก",
						"hindi": "राजकीय व्यवस्था हिल उठी। एक विशाल परछाई ने इतिहासकार की जगह ले ली।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 영혼. 당신의 죄 또한 기록되어 있습니다. 영원히.",
						"english": "Foolish soul. Your sins are also recorded. Forever.",
						"japanese": "愚かな魂よ。お前の罪も記録されている。永遠に。",
						"chinese": "愚蠢的灵魂。你的罪行也已被记录。永恒不灭。",
						"french": "Âme insensée. Tes péchés sont également enregistrés. Pour l'éternité.",
						"spanish": "Alma insensata. Tus pecados también están registrados. Para siempre.",
						"vietnamese": "Linh hồn ngu ngốc. Tội lỗi của ngươi cũng đã được ghi lại. Mãi mãi.",
						"thai": "วิญญาณโง่เขลา บาปของเจ้าก็ถูกบันทึกไว้แล้วเช่นกัน ชั่วนิรันดร์",
						"hindi": "मूर्ख आत्मा। तुम्हारे पाप भी दर्ज हैं। हमेशा के लिए।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 모든 게 조작된 거라면? 그저 시스템일 뿐이라면?",
						"english": "What if all this is fabricated? What if it's just a system?",
						"japanese": "もし、これが全て仕組まれたものだとしたら？ただのシステムに過ぎないとしたら？",
						"chinese": "如果这一切都是伪造的呢？如果这只是一个系统呢？",
						"french": "Et si tout cela était une fabrication ? Si ce n'était qu'un système ?",
						"spanish": "¿Y si todo esto es una farsa? ¿Y si es solo un sistema?",
						"vietnamese": "Nếu tất cả những điều này đều là giả mạo thì sao? Nếu nó chỉ là một hệ thống?",
						"thai": "ถ้าทั้งหมดนี้ถูกสร้างขึ้นมาล่ะ? ถ้ามันเป็นแค่ระบบเท่านั้นล่ะ?",
						"hindi": "अगर यह सब मनगढ़ंत है? अगर यह सिर्फ एक प्रणाली है?"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "당신은 아무것도 바꿀 수 없습니다. 운명은 정해져 있습니다.",
						"english": "You can change nothing. Fate is sealed.",
						"japanese": "あなたには何も変えられない。運命は定められている。",
						"chinese": "你什么都改变不了。命运早已注定。",
						"french": "Vous ne pouvez rien changer. Le destin est scellé.",
						"spanish": "No puedes cambiar nada. El destino está sellado.",
						"vietnamese": "Ngươi không thể thay đổi bất cứ điều gì. Vận mệnh đã được định sẵn.",
						"thai": "คุณไม่สามารถเปลี่ยนแปลงอะไรได้ ชะตากรรมถูกกำหนดไว้แล้ว",
						"hindi": "तुम कुछ नहीं बदल सकते। भाग्य निश्चित है।"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				}
			],
			"id": 15
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "저항은 무의미합니다. 당신의 죄는 영원히 당신을 묶을 것입니다."
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…아니. 나는 여기서 벗어날 거야. 내 죄의 진실을 찾을 때까지."
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "…기록은… 파괴되지 않아… 그저… 흐트러질 뿐…."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "흐트러져? 그럼 이건 진짜가 아니었단 말인가."
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "관청의 질서는 잠시 흔들렸다. 그러나 아직 풀리지 않은 실타래가 많다."
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "주인공의 과거는 여전히 어둠 속에 잠겨 있었다. 그는 더 깊은 진실을 찾아야 한다."
					},
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "ash"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…나는… 벗어날 수 없어… 너도…."
					},
					"speaker": "ash",
					"emotion": "sad"
				},
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction",
					"action": "enter",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 영혼의 관청은 불변의 진리 위에 서 있습니다. 감히 의심하지 마십시오."
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"duration_ms": 300,
					"type": "direction",
					"speaker": "character_any",
					"action": "exit"
				},
				{
					"type": "speech",
					"content": {
						"korean": "관청의 질서가 요동쳤다. 거대한 그림자가 기록관의 자리를 채웠다."
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "어리석은 영혼. 당신의 죄 또한 기록되어 있습니다. 영원히."
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "이 모든 게 조작된 거라면? 그저 시스템일 뿐이라면?"
					}
				},
				{
					"content": {
						"korean": "당신은 아무것도 바꿀 수 없습니다. 운명은 정해져 있습니다."
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"영혼의 관청. 이곳은 죄악이 영원히 기록되는 곳.",
			"망자들은 끝없이 고백하고, 끝없이 심판받는다.",
			"어떤 죄는 지워지지 않고, 어떤 진실은 잊혀진다.",
			"그리고 — 이곳에서, 또 다른 속죄가 시작되었다."
		],
		"english": [
			"The Bureau of Souls. A place where sins are eternally recorded.",
			"The deceased confess endlessly, judged without end.",
			"Some sins are indelible, some truths forgotten.",
			"And — here, another atonement has begun."
		],
		"japanese": [
			"魂の庁。ここは罪が永遠に記録される場所。",
			"亡者たちは絶えず告白し、絶えず裁かれる。",
			"ある罪は消えず、ある真実は忘れられる。",
			"そして — ここで、また別の贖罪が始まった。"
		],
		"chinese": [
			"灵魂的官厅。这里是罪恶被永远记录之地。",
			"亡者们无休止地忏悔，无休止地受审。",
			"有些罪恶无法抹去，有些真相被遗忘。",
			"而——在这里，另一场赎罪开始了。"
		],
		"french": [
			"Le Bureau des Âmes. Ici, les péchés sont enregistrés pour l'éternité.",
			"Les défunts se confessent sans fin, et sont jugés éternellement.",
			"Certains péchés ne s'effacent pas, certaines vérités sont oubliées.",
			"Et — ici, une autre rédemption a commencé."
		],
		"spanish": [
			"La Oficina de las Almas. Un lugar donde los pecados quedan registrados eternamente.",
			"Los difuntos confiesan sin cesar, y son juzgados sin fin.",
			"Algunos pecados son imborrables, algunas verdades son olvidadas.",
			"Y — aquí, otra expiación ha comenzado."
		],
		"vietnamese": [
			"Cục Linh Hồn. Nơi đây tội lỗi được ghi lại vĩnh viễn.",
			"Người chết không ngừng thú tội, không ngừng bị phán xét.",
			"Có tội lỗi không thể xóa, có sự thật bị lãng quên.",
			"Và — tại đây, một sự chuộc tội khác đã bắt đầu."
		],
		"thai": [
			"สำนักวิญญาณ ที่แห่งนี้ที่บาปถูกบันทึกไว้ชั่วนิรันดร์",
			"เหล่าผู้ตายสารภาพไม่สิ้นสุด ถูกพิพากษาไม่รู้จบ",
			"บาปบางอย่างลบไม่ได้ ความจริงบางอย่างถูกลืมเลือน",
			"และ — ที่นี่ การไถ่บาปอีกครั้งได้เริ่มต้นขึ้น"
		],
		"hindi": [
			"आत्माओं का कार्यालय। यह वह स्थान है जहाँ पाप अनंत काल तक दर्ज किए जाते हैं।",
			"मृतक अनंत काल तक स्वीकार करते हैं, और अनंत काल तक उनका न्याय होता है।",
			"कुछ पाप अमिट होते हैं, कुछ सच भुला दिए जाते हैं।",
			"और — यहाँ, एक और प्रायश्चित शुरू हो गया है।"
		]
	}
} as const;
