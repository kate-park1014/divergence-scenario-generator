export const scenario_snowy_chantfrost_24_03 = {
	"scenario_id": "snowy_chantfrost_24_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"hild": {
			"id": "mon_6f20c96a-bf07-4aae-b37c-da898a8336e8",
			"name": {
				"korean": "힐드",
				"english": "Hild",
				"japanese": "ヒルド",
				"chinese": "希尔德",
				"french": "Hild",
				"spanish": "Hild",
				"vietnamese": "Hild",
				"thai": "ฮิลด์",
				"hindi": "हिल्ड"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/722a86fd-2903-4688-3f04-db8241ed0e00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/af3d96ba-e571-4132-fede-cd415bd15c00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "얼음으로 뒤덮인 깊은 통로. 그 안에서 기묘한 환영들이 일렁인다.",
						"english": "A deep passage covered in ice. Strange illusions shimmer within.",
						"japanese": "氷に覆われた深い通路。その中で奇妙な幻影が揺らめく。",
						"chinese": "冰雪覆盖的深邃通道。奇特的幻影在其中摇曳。",
						"french": "Un passage profond recouvert de glace. D'étranges illusions y scintillent.",
						"spanish": "Un pasaje profundo cubierto de hielo. Extrañas ilusiones brillan en su interior.",
						"vietnamese": "Một hành lang sâu phủ đầy băng. Những ảo ảnh kỳ lạ lung linh bên trong.",
						"thai": "ทางเดินลึกที่ปกคลุมด้วยน้ำแข็ง. ภาพหลอนแปลกประหลาดส่องประกายอยู่ภายใน.",
						"hindi": "बर्फ से ढका एक गहरा गलियारा। उसके भीतर अजीब भ्रम जगमगाते हैं।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이 얼음… 뭔가 이상해.",
						"english": "This ice... something's wrong.",
						"japanese": "この氷…何かおかしい。",
						"chinese": "这冰…有些不对劲。",
						"french": "Cette glace... il y a quelque chose d'étrange.",
						"spanish": "Este hielo... algo anda mal.",
						"vietnamese": "Lớp băng này... có gì đó lạ.",
						"thai": "น้ำแข็งนี่... มีบางอย่างผิดปกติ.",
						"hindi": "यह बर्फ... कुछ तो अजीब है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_1",
					"content": {
						"korean": "이 조각상들, 표정이 왜 다 똑같지?",
						"english": "These statues, why do they all have the same expression?",
						"japanese": "これらの彫像、なぜ表情が皆同じなんだ？",
						"chinese": "这些雕像，为什么表情都一样？",
						"french": "Ces statues, pourquoi ont-elles toutes la même expression ?",
						"spanish": "Estas estatuas, ¿por qué todas tienen la misma expresión?",
						"vietnamese": "Những bức tượng này, sao biểu cảm lại giống nhau?",
						"thai": "รูปปั้นเหล่านี้, ทำไมถึงมีสีหน้าเหมือนกันหมด?",
						"hindi": "ये मूर्तियां, इनके भाव एक जैसे क्यों हैं?"
					}
				},
				{
					"type": "speech",
					"speaker": "character_2",
					"content": {
						"korean": "마치… 누군가를 찬양하는 것 같아.",
						"english": "It's like... they're praising someone.",
						"japanese": "まるで…誰かを称賛しているようだ。",
						"chinese": "仿佛…在赞颂某人。",
						"french": "C'est comme s'ils louaient quelqu'un.",
						"spanish": "Es como si... estuvieran alabando a alguien.",
						"vietnamese": "Cứ như thể... họ đang ca ngợi ai đó.",
						"thai": "เหมือนกับว่า... พวกเขากำลังสรรเสริญใครบางคน.",
						"hindi": "मानो... किसी की स्तुति कर रहे हों।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "근데… 소리가 들려. 불협화음.",
						"english": "But... I hear a sound. Dissonance.",
						"japanese": "でも…音が聞こえる。不協和音。",
						"chinese": "但是…我听到了声音。不和谐音。",
						"french": "Mais... j'entends un son. Une dissonance.",
						"spanish": "Pero... escucho un sonido. Una disonancia.",
						"vietnamese": "Nhưng... tôi nghe thấy âm thanh. Một sự bất hòa.",
						"thai": "แต่... ฉันได้ยินเสียง. เสียงที่ไม่สอดคล้องกัน.",
						"hindi": "लेकिन... मुझे एक आवाज़ सुनाई देती है। बेसुरापन।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"type": "direction",
					"speaker": "hild",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "hild",
					"content": {
						"korean": "왔구나. 망자들의 약속을 잊지 않는 자들이여.",
						"english": "You've come. Those who haven't forgotten the promise of the dead.",
						"japanese": "来たか。亡者たちの約束を忘れない者たちよ。",
						"chinese": "你们来了。那些没有忘记亡者之约的人们。",
						"french": "Vous êtes venus. Ceux qui n'ont pas oublié la promesse des morts.",
						"spanish": "Habéis llegado. Aquellos que no olvidaron la promesa de los muertos.",
						"vietnamese": "Các ngươi đã đến rồi. Những kẻ không quên lời hứa của người chết.",
						"thai": "เจ้ามาแล้ว. ผู้ที่ไม่ลืมคำสัญญาของคนตาย.",
						"hindi": "तुम आ गए। वे जो मृतकों के वादे को नहीं भूले हैं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "당신은… 누구시죠?",
						"english": "Who... are you?",
						"japanese": "「あなたは… どなたですか？」",
						"chinese": "“你… 是谁？”",
						"french": "« Qui... êtes-vous ? »",
						"spanish": "¿Quién... eres?",
						"vietnamese": "Ngươi... là ai?",
						"thai": "ท่าน... คือใคร?",
						"hindi": "आप... कौन हैं?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "hild",
					"content": {
						"korean": "나는 힐드. 스러진 이들을 기억하는 의례자.",
						"english": "I am Hild. The ritualist who remembers the fallen.",
						"japanese": "「私はヒルド。倒れた者たちを記憶する儀礼者だ。」",
						"chinese": "“我是希尔德。记住逝者的仪祭师。”",
						"french": "« Je suis Hild. La ritualiste qui se souvient des déchus. »",
						"spanish": "Soy Hild. La ritualista que recuerda a los caídos.",
						"vietnamese": "Ta là Hild. Người làm lễ nhớ về những kẻ đã ngã xuống.",
						"thai": "ข้าคือฮิลด์ ผู้ประกอบพิธีรำลึกถึงผู้ล่วงลับ",
						"hindi": "मैं हिल्ड हूँ। गिरी हुई आत्माओं को याद करने वाली अनुष्ठानकर्ता।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "hild",
					"content": {
						"korean": "이곳에… 칼바르라는 음유시인이 있었지.",
						"english": "Here... there was a bard named Kalvar.",
						"japanese": "「ここに… カルヴァーという吟遊詩人がいた。」",
						"chinese": "“这里… 曾有一位名叫卡尔瓦的吟游诗人。”",
						"french": "« Ici... il y avait un barde nommé Kalvar. »",
						"spanish": "Aquí... hubo un bardo llamado Kalvar.",
						"vietnamese": "Nơi đây... từng có một nhạc sĩ tên Kalvar.",
						"thai": "ที่นี่... เคยมีกวีชื่อคัลวาร์",
						"hindi": "यहां... कालवार नाम का एक बार्ड था।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_3",
					"content": {
						"korean": "칼바르요?",
						"english": "Kalvar?",
						"japanese": "「カルヴァー？」",
						"chinese": "“卡尔瓦？”",
						"french": "« Kalvar ? »",
						"spanish": "¿Kalvar?",
						"vietnamese": "Kalvar ư?",
						"thai": "คัลวาร์?",
						"hindi": "कालवार?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "hild",
					"content": {
						"korean": "그는 인정받고 싶어 했어. 간절히.",
						"english": "He yearned for recognition. Desperately.",
						"japanese": "「彼は認められたがっていた。切実に。」",
						"chinese": "“他渴望被认可。非常渴望。”",
						"french": "« Il voulait être reconnu. Désespérément. »",
						"spanish": "Él anhelaba ser reconocido. Desesperadamente.",
						"vietnamese": "Hắn khao khát được công nhận. Tha thiết.",
						"thai": "เขาปรารถนาการยอมรับ อย่างสุดซึ้ง",
						"hindi": "वह पहचान चाहता था। बेसब्री से।"
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "주변의 얼음 조각상에서 희미한 바이킹 문양이 보였다. 불협화음이 더 선명해진다.",
						"english": "Faint Viking patterns were visible on the surrounding ice sculptures. The discord grew clearer.",
						"japanese": "「周囲の氷像に微かなヴァイキング模様が見えた。不協和音がより鮮明になる。」",
						"chinese": "“周围的冰雕上依稀可见维京图案。不和谐音变得更加清晰。”",
						"french": "« De faibles motifs vikings étaient visibles sur les sculptures de glace environnantes. La discorde devint plus nette. »",
						"spanish": "Débiles patrones vikingos eran visibles en las esculturas de hielo circundantes. La discordia se hizo más clara.",
						"vietnamese": "Những hoa văn Viking mờ nhạt hiện rõ trên các tác phẩm điêu khắc băng xung quanh. Sự bất hòa trở nên rõ ràng hơn.",
						"thai": "ลวดลายไวกิ้งจางๆ ปรากฏบนรูปปั้นน้ำแข็งรอบๆ เสียงที่ไม่ประสานกันเริ่มชัดเจนขึ้น",
						"hindi": "आसपास की बर्फ की मूर्तियों पर धुंधले वाइकिंग पैटर्न दिखाई दे रहे थे। असंगति और स्पष्ट होती गई।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "hild",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "hild",
					"content": {
						"korean": "칼바르는 자신의 예술이 최고라고 믿었어.",
						"english": "Kalvar believed his art was supreme.",
						"japanese": "「カルヴァーは自分の芸術が最高だと信じていた。」",
						"chinese": "“卡尔瓦相信自己的艺术是最高的。”",
						"french": "« Kalvar croyait que son art était suprême. »",
						"spanish": "Kalvar creía que su arte era supremo.",
						"vietnamese": "Kalvar tin rằng nghệ thuật của mình là tối thượng.",
						"thai": "คัลวาร์เชื่อว่าศิลปะของเขาคือที่สุด",
						"hindi": "कालवार मानता था कि उसकी कला सर्वश्रेष्ठ है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "hild",
					"content": {
						"korean": "하지만… 아무도 알아주지 않았지.",
						"english": "But... no one recognized it.",
						"japanese": "「だが… 誰も認めなかった。」",
						"chinese": "“但是… 没有人认可。”",
						"french": "« Mais... personne ne le reconnaissait. »",
						"spanish": "Pero... nadie lo reconocía.",
						"vietnamese": "Nhưng... không ai công nhận.",
						"thai": "แต่... ไม่มีใครยอมรับ",
						"hindi": "लेकिन... किसी ने उसे पहचाना नहीं।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그래서 어떻게 됐나요?",
						"english": "So what happened?",
						"japanese": "「それでどうなったのですか？」",
						"chinese": "“那后来怎么样了？”",
						"french": "« Alors, que s'est-il passé ? »",
						"spanish": "¿Entonces qué pasó?",
						"vietnamese": "Vậy chuyện gì đã xảy ra?",
						"thai": "แล้วเกิดอะไรขึ้น?",
						"hindi": "तो क्या हुआ?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "hild",
					"content": {
						"korean": "그는 찬사를 '만들어내기' 시작했어.",
						"english": "He began to 'create' praise.",
						"japanese": "「彼は称賛を『作り出す』ようになった。」",
						"chinese": "“他开始‘创造’赞美。”",
						"french": "« Il commença à 'créer' des éloges. »",
						"spanish": "Él comenzó a 'crear' elogios.",
						"vietnamese": "Hắn bắt đầu 'tạo ra' những lời ca ngợi.",
						"thai": "เขาก็เริ่ม 'สร้าง' คำชื่นชมขึ้นมา",
						"hindi": "उसने 'प्रशंसा गढ़ना' शुरू कर दिया।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "hild",
					"content": {
						"korean": "자신을 칭송하는 소리가 들릴 때까지… 모든 것을 얼려버렸지.",
						"english": "Until I heard praises for myself... I froze everything.",
						"japanese": "自らを称える声が聞こえるまで…全てを凍らせた。",
						"chinese": "直到我听到赞美自己的声音……我冻结了一切。",
						"french": "J'ai tout gelé... jusqu'à ce que j'entende des louanges à mon égard.",
						"spanish": "Lo congelé todo... hasta que escuché alabanzas para mí.",
						"vietnamese": "Tôi đã đóng băng mọi thứ... cho đến khi nghe thấy tiếng ca ngợi chính mình.",
						"thai": "ฉันแช่แข็งทุกสิ่ง... จนกว่าจะได้ยินเสียงสรรเสริญตัวเอง",
						"hindi": "जब तक मैंने अपनी प्रशंसा नहीं सुनी... मैंने सब कुछ जमा दिया।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "어디선가 알 수 없는 언어의 나지막한 노랫소리가 들려왔다. 칭찬을 갈구하는 듯 쓸쓸했다.",
						"english": "A low song in an unknown language echoed from somewhere. It sounded lonely, as if yearning for praise.",
						"japanese": "どこからか、未知の言語の低い歌声が聞こえてきた。それは賞賛を切望するかのように寂しかった。",
						"chinese": "不知从何处传来一阵低沉的歌声，语言不明。它听起来很寂寞，仿佛渴望得到赞美。",
						"french": "Une mélopée discrète, dans une langue inconnue, résonnait. Elle semblait solitaire, comme assoiffée de louanges.",
						"spanish": "Desde algún lugar, una canción suave en un idioma desconocido resonó. Sonaba solitaria, como si anhelara alabanza.",
						"vietnamese": "Một bài hát trầm buồn bằng ngôn ngữ không rõ vang lên từ đâu đó. Nó nghe thật cô đơn, như đang khao khát lời khen ngợi.",
						"thai": "เสียงเพลงแผ่วเบาในภาษาที่ไม่รู้จักดังมาจากที่ใดที่หนึ่ง มันฟังดูโดดเดี่ยว ราวกับโหยหาคำชมเชย",
						"hindi": "कहीं से एक अज्ञात भाषा में एक धीमी धुन सुनाई दी। यह अकेली लग रही थी, जैसे प्रशंसा के लिए तरस रही हो।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						2,
						2
					],
					"type": "direction",
					"speaker": "hild",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "sad",
					"speaker": "hild",
					"content": {
						"korean": "그의 '예술'은… 아름답지만 너무나 잔혹해.",
						"english": "His 'art'... is beautiful, yet so cruel.",
						"japanese": "彼の『芸術』は…美しいが、あまりにも残酷だ。",
						"chinese": "他的“艺术”……美丽却又如此残酷。",
						"french": "Son 'art'... est magnifique, mais si cruel.",
						"spanish": "Su 'arte'... es hermoso, pero tan cruel.",
						"vietnamese": "Cái 'nghệ thuật' của hắn... đẹp đẽ nhưng tàn nhẫn vô cùng.",
						"thai": " 'ศิลปะ' ของเขา... สวยงาม แต่ก็โหดร้ายเหลือเกิน",
						"hindi": "उसकी 'कला'... सुंदर है, फिर भी इतनी क्रूर।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 그게 다 칼바르의 짓이라는 건가요?",
						"english": "So, it was all Kalbar's doing?",
						"japanese": "では、それはすべてカルバルがやったことなのですか？",
						"chinese": "那么，这一切都是卡尔巴做的吗？",
						"french": "Alors, tout cela est l'œuvre de Kalbar ?",
						"spanish": "¿Entonces, todo fue obra de Kalbar?",
						"vietnamese": "Vậy, tất cả là do Kalbar làm sao?",
						"thai": "งั้นทั้งหมดเป็นฝีมือของคาลบาร์หรือ?",
						"hindi": "तो, यह सब काल्बर का काम था?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "hild",
					"content": {
						"korean": "그의 열망이… 이 세계를 얼어붙게 만들었어.",
						"english": "His ambition... froze this world.",
						"japanese": "彼の熱望が…この世界を凍らせた。",
						"chinese": "他的渴望……让这个世界冰封了。",
						"french": "Son désir ardent... a gelé ce monde.",
						"spanish": "Su anhelo... congeló este mundo.",
						"vietnamese": "Khát vọng của hắn... đã đóng băng thế giới này.",
						"thai": "ความปรารถนาของเขา... ทำให้โลกนี้แข็งตัว",
						"hindi": "उसकी लालसा ने... इस दुनिया को जमा दिया।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "hild",
					"content": {
						"korean": "하지만 그의 '예술'이 진정으로 무엇을 파괴하는지는… 나도 알 수 없어.",
						"english": "But what his 'art' truly destroys... I do not know.",
						"japanese": "しかし、彼の『芸術』が真に何を破壊するのかは…私には分からない。",
						"chinese": "但是他的“艺术”真正摧毁了什么……我也不知道。",
						"french": "Mais ce que son 'art' détruit vraiment... je l'ignore.",
						"spanish": "Pero lo que su 'arte' realmente destruye... yo tampoco lo sé.",
						"vietnamese": "Nhưng cái 'nghệ thuật' của hắn thực sự hủy diệt điều gì... tôi cũng không thể biết.",
						"thai": "แต่สิ่งที่ 'ศิลปะ' ของเขาทำลายอย่างแท้จริง... ฉันก็ไม่รู้",
						"hindi": "परन्तु उसकी 'कला' वास्तव में क्या नष्ट करती है... मुझे भी नहीं पता।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_1",
					"content": {
						"korean": "더 이상 돌아갈 수 없어.",
						"english": "There's no turning back.",
						"japanese": "もう後戻りはできない。",
						"chinese": "无法回头了。",
						"french": "On ne peut plus faire marche arrière.",
						"spanish": "Ya no hay vuelta atrás.",
						"vietnamese": "Không thể quay lại được nữa.",
						"thai": "ไม่มีทางย้อนกลับแล้ว",
						"hindi": "अब और पीछे नहीं जा सकते।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_2",
					"content": {
						"korean": "멈춰야 해. 이 왜곡된 찬사를.",
						"english": "We must stop it. This twisted praise.",
						"japanese": "止めなければならない。この歪んだ賛辞を。",
						"chinese": "必须阻止。这扭曲的赞美。",
						"french": "Il faut l'arrêter. Cette louange déformée.",
						"spanish": "Debemos detenerlo. Este elogio retorcido.",
						"vietnamese": "Phải dừng lại. Lời ca ngợi méo mó này.",
						"thai": "ต้องหยุดมัน คำสรรเสริญที่บิดเบือนนี้",
						"hindi": "इसे रोकना होगा। इस विकृत प्रशंसा को।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "얼음으로 이루어진 거대한 공간. 중앙에 정체 모를 그림자가 서 있었다.",
						"english": "A colossal space made of ice. An unknown shadow stood at its center.",
						"japanese": "氷でできた巨大な空間。中央に正体不明の影が立っていた。",
						"chinese": "一个由冰构成的巨大空间。一个不明身份的影子站在其中心。",
						"french": "Un immense espace fait de glace. Une ombre inconnue se tenait en son centre.",
						"spanish": "Un vasto espacio hecho de hielo. Una sombra desconocida se alzaba en su centro.",
						"vietnamese": "Một không gian khổng lồ làm bằng băng. Một bóng hình không rõ danh tính đứng ở trung tâm.",
						"thai": "พื้นที่ขนาดมหึมาที่ทำจากน้ำแข็ง มีเงาที่ไม่รู้จักยืนอยู่ตรงกลาง",
						"hindi": "बर्फ से बना एक विशालकाय स्थान। उसके केंद्र में एक अज्ञात छाया खड़ी थी।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "왔는가, 나의 예술을 이해하지 못하는 자들이여.",
						"english": "Have you come, you who do not understand my art?",
						"japanese": "来たか、我が芸術を理解せぬ者たちよ。",
						"chinese": "你们来了吗，不理解我艺术的人们？",
						"french": "Vous êtes venus, vous qui ne comprenez pas mon art ?",
						"spanish": "¿Han venido, ustedes que no comprenden mi arte?",
						"vietnamese": "Các ngươi đã đến, những kẻ không hiểu nghệ thuật của ta?",
						"thai": "มาแล้วหรือ ผู้ที่ไม่เข้าใจศิลปะของข้า",
						"hindi": "आ गए तुम, मेरी कला को न समझने वाले?"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "당신이… 이 모든 것을 만든 거야?",
						"english": "You... created all this?",
						"japanese": "あなたが… これら全てを創り出したのですか？",
						"chinese": "你… 创造了这一切？",
						"french": "Tu… as créé tout ça ?",
						"spanish": "Tú… ¿creaste todo esto?",
						"vietnamese": "Ngươi… đã tạo ra tất cả những thứ này sao?",
						"thai": "เจ้า... สร้างทั้งหมดนี้หรือ?",
						"hindi": "तुमने… यह सब बनाया है?"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"speaker": "random_boss",
					"content": {
						"korean": "이것이야말로 진정한 찬사! 영원히 멈추지 않을 걸작이다!",
						"english": "This is true homage! A masterpiece that will never cease!",
						"japanese": "これこそ真の賛辞！永遠に止まらぬ傑作だ！",
						"chinese": "这才是真正的赞颂！永不停止的杰作！",
						"french": "C'est là le véritable hommage ! Un chef-d'œuvre qui ne s'arrêtera jamais !",
						"spanish": "¡Esto es un verdadero homenaje! ¡Una obra maestra que jamás cesará!",
						"vietnamese": "Đây mới là lời tán dương đích thực! Một kiệt tác sẽ không bao giờ ngừng lại!",
						"thai": "นี่แหละคือการสดุดีที่แท้จริง! ผลงานชิ้นเอกที่จะไม่มีวันหยุด!",
						"hindi": "यही तो सच्ची प्रशंसा है! एक अमर कृति जो कभी नहीं रुकेगी!"
					}
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "너희도 나의 영원한 예술의 일부가 될 것이다.",
						"english": "You too shall become part of my eternal art.",
						"japanese": "お前たちも私の永遠の芸術の一部となるのだ。",
						"chinese": "你们也将成为我永恒艺术的一部分。",
						"french": "Vous aussi ferez partie de mon art éternel.",
						"spanish": "Vosotros también seréis parte de mi arte eterno.",
						"vietnamese": "Các ngươi cũng sẽ trở thành một phần của nghệ thuật vĩnh cửu của ta.",
						"thai": "พวกเจ้าก็จะกลายเป็นส่วนหนึ่งของศิลปะชั่วนิรันดร์ของข้า",
						"hindi": "तुम भी मेरी शाश्वत कला का हिस्सा बनोगे।"
					},
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 내 예술이… 이렇게 끝날 리 없어!",
						"english": "Gah… My art… It can't end like this!",
						"japanese": "くっ… 私の芸術が… こんな終わり方をするはずがない！",
						"chinese": "呃… 我的艺术… 不可能就这样结束！",
						"french": "Argh… Mon art… Il ne peut pas finir ainsi !",
						"spanish": "¡Ugh… Mi arte… no puede terminar así!",
						"vietnamese": "Khụ… Nghệ thuật của ta… Không thể kết thúc như thế này được!",
						"thai": "อึก… ศิลปะของข้า… ไม่มีทางจบลงแบบนี้!",
						"hindi": "उफ़… मेरी कला… ऐसे खत्म नहीं हो सकती!"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "진정한 예술가는… 찬사를 갈망하는 자… {random_boss}!",
						"english": "A true artist… is one who craves praise… {random_boss}!",
						"japanese": "真の芸術家は… 称賛を渇望する者… {random_boss}！",
						"chinese": "真正的艺术家… 是渴望赞颂之人… {random_boss}！",
						"french": "Le véritable artiste… est celui qui aspire à la louange… {random_boss} !",
						"spanish": "Un verdadero artista… es aquel que anhela la alabanza… ¡{random_boss}!",
						"vietnamese": "Một nghệ sĩ đích thực… là kẻ khao khát lời khen… {random_boss}!",
						"thai": "ศิลปินที่แท้จริงคือ… ผู้ที่โหยหาคำสรรเสริญ… {random_boss}!",
						"hindi": "सच्चा कलाकार… प्रशंसा का भूखा होता है… {random_boss}!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "찬사를 갈망하는 자… 또 다른 누군가가 있다는 말인가?",
						"english": "One who craves praise… Is there someone else?",
						"japanese": "称賛を渇望する者… また別の誰かがいるというのか？",
						"chinese": "渴望赞颂之人… 还有其他人吗？",
						"french": "Celui qui aspire à la louange… Y a-t-il quelqu'un d'autre ?",
						"spanish": "¿Aquel que anhela la alabanza… hay alguien más?",
						"vietnamese": "Kẻ khao khát lời khen… Lẽ nào còn có người khác?",
						"thai": "ผู้ที่โหยหาคำสรรเสริญ… มีคนอื่นอีกหรือ?",
						"hindi": "प्रशंसा का भूखा… क्या कोई और है?"
					},
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "왜곡된 찬사는 멈췄지만, 더 깊은 곳에서 쓸쓸한 노랫소리가 들려왔다.",
						"english": "The distorted praise stopped, but a lonely song echoed from deeper within.",
						"japanese": "歪んだ賛辞は止んだが、より深い場所から寂しい歌声が響いてきた。",
						"chinese": "扭曲的赞颂停止了，但更深处传来了孤寂的歌声。",
						"french": "La louange déformée s'est arrêtée, mais un chant solitaire résonnait des profondeurs.",
						"spanish": "La alabanza distorsionada cesó, pero un canto solitario resonó desde lo más profundo.",
						"vietnamese": "Lời tán dương méo mó đã dừng lại, nhưng một bài ca cô độc lại vọng lên từ sâu thẳm hơn.",
						"thai": "คำสรรเสริญที่บิดเบี้ยวหยุดลงแล้ว แต่เสียงเพลงอันเปลี่ยวเหงาก็ดังขึ้นจากส่วนลึกกว่า",
						"hindi": "विकृत प्रशंसा रुक गई, पर गहराई से एक उदास गीत की आवाज़ आई।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "진정한 '예술가'의 그림자가 드리워지고 있었다.",
						"english": "The shadow of a true 'artist' was looming.",
						"japanese": "真の「芸術家」の影が、忍び寄っていた。",
						"chinese": "真正的“艺术家”的阴影正在逼近。",
						"french": "L'ombre d'un véritable « artiste » se profilait.",
						"spanish": "La sombra de un verdadero \"artista\" se cernía.",
						"vietnamese": "Cái bóng của một \"nghệ sĩ\" đích thực đang phủ xuống.",
						"thai": "เงาของ \"ศิลปิน\" ที่แท้จริงกำลังคืบคลานเข้ามา",
						"hindi": "एक सच्चे 'कलाकार' का साया मंडरा रहा था।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 자들… 영원히 내 예술 속에서 잠들어라.",
						"english": "Insignificant fools… Sleep forever within my art.",
						"japanese": "愚かな者たち… 永遠に私の芸術の中で眠れ。",
						"chinese": "渺小的家伙们… 永远沉睡在我的艺术之中吧。",
						"french": "Pitoyables créatures… Dormez à jamais dans mon art.",
						"spanish": "Insignificantes… Dormid para siempre en mi arte.",
						"vietnamese": "Bọn yếu ớt… Hãy ngủ yên mãi mãi trong nghệ thuật của ta.",
						"thai": "พวกไร้ค่า… จงหลับใหลอยู่ในศิลปะของข้าชั่วนิรันดร์",
						"hindi": "तुच्छ प्राणी… मेरी कला में सदा के लिए सो जाओ।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아직… 끝나지 않았어. 진실을 밝혀야 해!",
						"english": "It's not… over yet. I must uncover the truth!",
						"japanese": "まだ… 終わってない。真実を暴かねば！",
						"chinese": "还没… 结束。我必须揭示真相！",
						"french": "Ce n'est pas… encore fini. Je dois révéler la vérité !",
						"spanish": "Aún… no ha terminado. ¡Debo revelar la verdad!",
						"vietnamese": "Vẫn chưa… kết thúc đâu. Ta phải tìm ra sự thật!",
						"thai": "ยังไม่… จบแค่นี้ ข้าต้องเปิดเผยความจริง!",
						"hindi": "अभी… खत्म नहीं हुआ। मुझे सच का पता लगाना होगा!"
					},
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"설원, 얼음 너머의 속삭임. 아름다움 뒤에 숨겨진 기만.",
			"찬사는 강요되었고, 진실은 얼어붙었다.",
			"모든 것이 왜곡된 이 세계에서,",
			"우리는 불편한 진실을 목격한다."
		],
		"english": [
			"Snowfield, whispers beyond the ice. Deception hidden behind beauty.",
			"Praise was forced, truth frozen.",
			"In this world where everything is distorted,",
			"We witness an uncomfortable truth."
		],
		"japanese": [
			"雪原、氷の向こうのささやき。美しさの裏に隠された欺瞞。",
			"賛辞は強制され、真実は凍りついた。",
			"全てが歪められたこの世界で、",
			"我々は不快な真実を目撃する。"
		],
		"chinese": [
			"雪原，冰雪彼端的低语。美丽背后隐藏的欺骗。",
			"赞颂被强加，真相被冰封。",
			"在这个万物扭曲的世界里，",
			"我们目睹了不舒服的真相。"
		],
		"french": [
			"Champ de neige, murmures au-delà de la glace. Tromperie cachée derrière la beauté.",
			"La louange fut forcée, la vérité gelée.",
			"Dans ce monde où tout est déformé,",
			"Nous sommes témoins d'une vérité dérangeante."
		],
		"spanish": [
			"Campo de nieve, susurros más allá del hielo. Engaño oculto tras la belleza.",
			"El elogio fue forzado, la verdad congelada.",
			"En este mundo donde todo está distorsionado,",
			"Presenciamos una verdad incómoda."
		],
		"vietnamese": [
			"Cánh đồng tuyết, những lời thì thầm xuyên băng. Sự lừa dối ẩn sau vẻ đẹp.",
			"Lời khen bị ép buộc, sự thật bị đóng băng.",
			"Trong thế giới mà mọi thứ đều bị bóp méo này,",
			"Chúng ta chứng kiến một sự thật khó chịu."
		],
		"thai": [
			"ทุ่งหิมะ, เสียงกระซิบจากฟากน้ำแข็ง. การหลอกลวงซ่อนอยู่เบื้องหลังความงาม.",
			"คำสรรเสริญถูกบีบบังคับ, ความจริงถูกแช่แข็ง.",
			"ในโลกที่ทุกสิ่งบิดเบี้ยวนี้,",
			"เราได้เห็นความจริงที่ไม่น่าอภิรมย์."
		],
		"hindi": [
			"बर्फीला मैदान, बर्फ के पार की फुसफुसाहट। सुंदरता के पीछे छिपा धोखा।",
			"प्रशंसा थोपी गई, सच जम गया।",
			"इस दुनिया में जहां सब कुछ विकृत है,",
			"हम एक असहज सच्चाई के साक्षी हैं।"
		]
	}
} as const;
