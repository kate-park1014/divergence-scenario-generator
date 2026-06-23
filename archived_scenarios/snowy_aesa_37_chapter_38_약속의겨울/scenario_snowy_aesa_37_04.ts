export const scenario_snowy_aesa_37_04 = {
	"scenario_id": "snowy_aesa_37_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"bran": {
			"id": "mon_985fcdcc-1bf2-4822-aa2f-292ae9353456",
			"name": {
				"korean": "브란",
				"english": "Bran",
				"japanese": "ブラン",
				"chinese": "布兰",
				"french": "Bran",
				"spanish": "Bran",
				"vietnamese": "Bran",
				"thai": "แบรน",
				"hindi": "ब्रैन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/42cde50b-7453-47b1-04df-73500ad21d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/4ecba7ed-ec7e-4a8e-74dc-bf3e711b4d00/public"
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
					"speaker": "narrator",
					"content": {
						"korean": "대지는 이전보다 더 빠르게 얼어붙었다. 섬뜩한 침묵이 모든 것을 감쌌다.",
						"english": "The land froze even faster than before. An eerie silence enveloped everything.",
						"japanese": "大地は以前よりもさらに速く凍りついた。不気味な沈黙がすべてを包んだ。",
						"chinese": "大地比以往冻结得更快。一股诡异的寂静笼罩了一切。",
						"french": "La terre a gelé encore plus vite qu'avant. Un silence sinistre a tout enveloppé.",
						"spanish": "La tierra se congeló aún más rápido que antes. Un silencio espeluznante lo envolvió todo.",
						"vietnamese": "Mặt đất đóng băng nhanh hơn trước. Một sự im lặng đáng sợ bao trùm mọi thứ.",
						"thai": "พื้นดินแข็งตัวเร็วกว่าเดิม ความเงียบงันที่น่าขนลุกปกคลุมไปทั่ว",
						"hindi": "ज़मीन पहले से भी ज़्यादा तेज़ी से जम गई। एक भयानक सन्नाटा हर चीज़ को घेर लिया।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이 추위… 뭔가 이상해.",
						"english": "This cold... something's strange.",
						"japanese": "この寒さ…何かおかしい。",
						"chinese": "这寒冷……有点不对劲。",
						"french": "Ce froid... c'est étrange.",
						"spanish": "Este frío... algo es extraño.",
						"vietnamese": "Cái lạnh này... có gì đó lạ.",
						"thai": "ความหนาวนี้... มีบางอย่างแปลกๆ",
						"hindi": "यह ठंड... कुछ अजीब है।"
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "bran",
					"spot": [
						4,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이상하지. 자연의 섭리가 아니야. 시스템의 오류일지도.",
						"english": "It's strange. Not nature's providence. It might be a system error.",
						"japanese": "おかしい。自然の摂理じゃない。システムのエラーかもしれない。",
						"chinese": "奇怪。这不是自然法则。可能是系统错误。",
						"french": "C'est étrange. Ce n'est pas la providence de la nature. C'est peut-être une erreur système.",
						"spanish": "Es extraño. No es la providencia de la naturaleza. Podría ser un error del sistema.",
						"vietnamese": "Lạ thật. Không phải quy luật tự nhiên. Có lẽ là lỗi hệ thống.",
						"thai": "แปลกนะ ไม่ใช่การจัดสรรของธรรมชาติ อาจเป็นข้อผิดพลาดของระบบ",
						"hindi": "अजीब है। यह प्रकृति का विधान नहीं। शायद सिस्टम की गड़बड़ी है।"
					},
					"speaker": "bran"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "시스템…?",
						"english": "System...?",
						"japanese": "システム…？",
						"chinese": "系统……？",
						"french": "Système...?",
						"spanish": "¿Sistema...?",
						"vietnamese": "Hệ thống...?",
						"thai": "ระบบ...?",
						"hindi": "सिस्टम...?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그래. 거대한 얼음이 이 모든 걸 조종하는 느낌이 들지 않나?",
						"english": "Yes. Don't you feel like a massive ice is controlling all of this?",
						"japanese": "そうだ。巨大な氷がこのすべてを操っているように感じないか？",
						"chinese": "是的。你难道没有感觉到一块巨大的冰正在控制这一切吗？",
						"french": "Oui. N'as-tu pas l'impression qu'une glace gigantesque contrôle tout cela ?",
						"spanish": "Sí. ¿No sientes que un hielo gigantesco está controlando todo esto?",
						"vietnamese": "Phải. Bạn không cảm thấy một khối băng khổng lồ đang điều khiển tất cả sao?",
						"thai": "ใช่. ไม่รู้สึกหรือว่ามีน้ำแข็งขนาดใหญ่กำลังควบคุมทุกสิ่งนี้อยู่?",
						"hindi": "हाँ। क्या तुम्हें नहीं लगता कि एक विशाल बर्फ़ इन सब को नियंत्रित कर रही है?"
					},
					"speaker": "bran"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "얼어붙은 유적의 문양이 희미하게 빛났다 사라지길 반복했다.",
						"english": "The patterns of the frozen ruins faintly glowed and faded repeatedly.",
						"japanese": "凍てついた遺跡の文様が、かすかに光っては消えるのを繰り返した。",
						"chinese": "冰冻遗迹的纹路忽明忽暗，反复闪烁。",
						"french": "Les motifs des ruines gelées luisaient et s'estompaient faiblement à plusieurs reprises.",
						"spanish": "Los patrones de las ruinas congeladas brillaban y se desvanecían débilmente una y otra vez.",
						"vietnamese": "Các hoa văn trên di tích bị đóng băng mờ ảo sáng lên rồi lại biến mất.",
						"thai": "ลวดลายบนซากปรักหักพังที่แข็งตัวสว่างขึ้นและจางหายไปซ้ำแล้วซ้ำเล่า",
						"hindi": "जमी हुई खंडहरों के पैटर्न हल्के से चमक कर बार-बार गायब हो रहे थे।"
					}
				},
				{
					"action": "enter",
					"speaker": "bran",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "bran",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 문양들… 맹세의 흔적이라고? 아니, 그보다는 통제의 각인에 가까워.",
						"english": "These patterns... marks of an oath? No, closer to an imprint of control.",
						"japanese": "この文様… 誓いの痕跡だと？いや、それよりは制御の刻印に近い。",
						"chinese": "这些纹样… 誓言的痕迹？不，更像是控制的烙印。",
						"french": "Ces motifs… des traces de serment ? Non, plutôt des marques de contrôle.",
						"spanish": "Estos patrones... ¿rastros de un juramento? No, más bien una marca de control.",
						"vietnamese": "Những hoa văn này… dấu vết của lời thề ư? Không, chúng giống ấn ký kiểm soát hơn.",
						"thai": "ลวดลายพวกนี้… ร่องรอยของคำสาบานงั้นเหรอ? ไม่สิ น่าจะใกล้เคียงกับรอยตราแห่งการควบคุมมากกว่า",
						"hindi": "ये नक़्शे... शपथ के निशान? नहीं, नियंत्रण के निशान से ज़्यादा लगते हैं।"
					}
				},
				{
					"content": {
						"korean": "통제… 누가요?",
						"english": "Control... By whom?",
						"japanese": "制御… 誰が？",
						"chinese": "控制… 谁？",
						"french": "Contrôle… Par qui ?",
						"spanish": "¿Control... Por quién?",
						"vietnamese": "Kiểm soát… Ai cơ?",
						"thai": "ควบคุม… ใครกัน?",
						"hindi": "नियंत्रण... किसका?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "이 모든 겨울을 만들어낸 어떤 존재. 어쩌면 수호자도 그 시스템의 일부일 뿐일지도.",
						"english": "Some entity that created all these winters. Perhaps even the Guardian is just part of that system.",
						"japanese": "このすべての冬を作り出した存在。もしかしたら守護者も、そのシステムの一部に過ぎないのかもしれない。",
						"chinese": "创造了所有这些冬天的某个存在。也许连守护者都只是那个系统的一部分。",
						"french": "Une entité qui a créé tous ces hivers. Peut-être même que le Gardien n'est qu'une partie de ce système.",
						"spanish": "Alguna entidad que creó todos estos inviernos. Quizás incluso el Guardián sea solo una parte de ese sistema.",
						"vietnamese": "Một thực thể nào đó đã tạo ra tất cả những mùa đông này. Có lẽ cả Người bảo hộ cũng chỉ là một phần của hệ thống đó.",
						"thai": "สิ่งมีชีวิตบางอย่างที่สร้างฤดูหนาวทั้งหมดนี้ขึ้นมา บางทีผู้พิทักษ์ก็อาจเป็นแค่ส่วนหนึ่งของระบบนั้น",
						"hindi": "कोई ऐसी चीज़ जिसने ये सारी सर्दियाँ बनाईं। शायद अभिभावक भी उस प्रणाली का एक हिस्सा मात्र हो।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "bran"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "수호자가 시스템의 일부라고요?",
						"english": "The Guardian is part of the system?",
						"japanese": "守護者がシステムの一部だと？",
						"chinese": "守护者是系统的一部分？",
						"french": "Le Gardien fait partie du système ?",
						"spanish": "¿El Guardián es parte del sistema?",
						"vietnamese": "Người bảo hộ là một phần của hệ thống ư?",
						"thai": "ผู้พิทักษ์เป็นส่วนหนึ่งของระบบงั้นเหรอ?",
						"hindi": "अभिभावक प्रणाली का हिस्सा है?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "bran",
					"content": {
						"korean": "너무 쉽게 믿지 마. 보이는 게 다가 아닐 수 있어.",
						"english": "Don't trust too easily. What you see may not be everything.",
						"japanese": "安易に信じるな。見えるものがすべてとは限らない。",
						"chinese": "别轻易相信。眼见的未必是全部。",
						"french": "Ne crois pas si facilement. Ce que tu vois n'est peut-être pas tout.",
						"spanish": "No confíes tan fácilmente. Lo que ves puede que no sea todo.",
						"vietnamese": "Đừng tin quá dễ dàng. Những gì bạn thấy có thể không phải là tất cả.",
						"thai": "อย่าเชื่ออะไรง่าย ๆ สิ่งที่เห็นอาจไม่ใช่ทั้งหมด",
						"hindi": "इतना आसानी से विश्वास मत करो। जो दिखता है, वो पूरा सच नहीं हो सकता है।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"content": {
						"korean": "브란, 당신의 말은 점점 더 혼란스러워요.",
						"english": "Bran, your words are getting more and more confusing.",
						"japanese": "ブラン、あなたの言葉はますます混乱を招きます。",
						"chinese": "布兰，你的话越来越令人困惑了。",
						"french": "Bran, tes paroles sont de plus en plus confuses.",
						"spanish": "Bran, tus palabras son cada vez más confusas.",
						"vietnamese": "Bran, lời của anh ngày càng khó hiểu.",
						"thai": "บราน คำพูดของคุณยิ่งทำให้สับสนมากขึ้นเรื่อย ๆ",
						"hindi": "ब्रैन, तुम्हारी बातें ज़्यादा से ज़्यादा उलझा रही हैं।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_1"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "bran",
					"action": "enter"
				},
				{
					"speaker": "bran",
					"content": {
						"korean": "혼란? 진실이 원래 그렇지. 우리가 헛걸음하고 있을 수도 있어.",
						"english": "Confusion? That's how truth often is. We might be on a wild goose chase.",
						"japanese": "混乱？真実とはそういうものだ。我々は無駄足を踏んでいるのかもしれない。",
						"chinese": "困惑？真相往往如此。我们可能在白费力气。",
						"french": "Confusion ? C'est souvent comme ça avec la vérité. Nous pourrions être sur une fausse piste.",
						"spanish": "¿Confusión? La verdad a menudo es así. Podríamos estar dando vueltas en vano.",
						"vietnamese": "Khó hiểu ư? Sự thật vốn dĩ là thế. Chúng ta có thể đang phí công vô ích.",
						"thai": "สับสนงั้นเหรอ? ความจริงก็มักจะเป็นแบบนั้น เราอาจกำลังเดินผิดทางอยู่ก็ได้",
						"hindi": "उलझन? सच तो ऐसा ही होता है। शायद हम व्यर्थ ही भटक रहे हैं।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "헛걸음이라뇨? 아에사를 막아야 해요!",
						"english": "A wild goose chase? We have to stop Aesa!",
						"japanese": "無駄足だと？アエサを止めなければならない！",
						"chinese": "白费力气？我们必须阻止艾萨！",
						"french": "Une fausse piste ? Nous devons arrêter Aesa !",
						"spanish": "¿Vueltas en vano? ¡Tenemos que detener a Aesa!",
						"vietnamese": "Phí công vô ích ư? Chúng ta phải ngăn Aesa lại!",
						"thai": "เดินผิดทางงั้นเหรอ? เราต้องหยุดเอซ่า!",
						"hindi": "व्यर्थ भटक रहे हैं? हमें ऐसा को रोकना है!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "bran",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "막는다고 멈출까? 어쩌면 이 겨울 자체가, 파괴되어야 할 운명인지도 몰라.",
						"english": "Will stopping her truly stop it? Perhaps this winter itself is destined for destruction.",
						"japanese": "止めても止まるものか？もしかしたらこの冬そのものが、破壊される運命なのかもしれない。",
						"chinese": "阻止她就能停止吗？也许这个冬天本身就注定要被摧毁。",
						"french": "L'arrêter l'arrêtera-t-il vraiment ? Peut-être que cet hiver lui-même est destiné à la destruction.",
						"spanish": "¿Detenerla la detendrá de verdad? Quizás este invierno mismo esté destinado a la destrucción.",
						"vietnamese": "Ngăn cô ta có dừng được không? Có lẽ chính mùa đông này, định mệnh là phải bị hủy diệt.",
						"thai": "จะหยุดได้เหรอแค่หยุดเธอ? บางทีฤดูหนาวนี้เองก็อาจจะถูกลิธิตให้ต้องถูกทำลาย",
						"hindi": "क्या उसे रोकने से यह रुक जाएगा? शायद इस सर्दी को ही विनाश के लिए नियत किया गया हो।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "파괴라니… 무슨 말이에요?",
						"english": "Destruction...? What are you saying?",
						"japanese": "破壊だと… 何を言っているんだ？",
						"chinese": "破坏… 你是什么意思？",
						"french": "Destruction… Qu'est-ce que tu racontes ?",
						"spanish": "¿Destrucción...? ¿Qué estás diciendo?",
						"vietnamese": "Hủy diệt ư… Anh đang nói gì vậy?",
						"thai": "ทำลายงั้นเหรอ… หมายความว่ายังไง?",
						"hindi": "विनाश...? तुम क्या कह रहे हो?"
					}
				},
				{
					"content": {
						"korean": "모든 것을 리셋시키는 것. 시스템에선 흔한 일이지.",
						"english": "Resetting everything. It's common in the system.",
						"japanese": "すべてをリセットすること。システムではよくあることだ。",
						"chinese": "重置一切。在系统中这很常见。",
						"french": "Tout remettre à zéro. C'est courant dans le système.",
						"spanish": "Reiniciar todo. Es algo común en el sistema.",
						"vietnamese": "Đặt lại mọi thứ. Trong hệ thống thì đây là chuyện thường.",
						"thai": "การรีเซ็ตทุกสิ่ง เป็นเรื่องปกติในระบบ",
						"hindi": "सब कुछ रीसेट करना। सिस्टम में यह आम बात है。"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "bran"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "주변의 모든 것이 급격히 얼어붙었다. 마치 시간이 멈춘 듯.",
						"english": "Everything around us froze rapidly. As if time itself stopped.",
						"japanese": "周囲のすべてが急速に凍りついた。まるで時間が止まったかのように。",
						"chinese": "周围的一切都迅速冻结了。仿佛时间静止了一般。",
						"french": "Tout autour de nous a gelé rapidement. Comme si le temps s'était arrêté.",
						"spanish": "Todo a nuestro alrededor se congeló rápidamente. Como si el tiempo se hubiera detenido.",
						"vietnamese": "Mọi thứ xung quanh đóng băng nhanh chóng. Cứ như thể thời gian đã ngừng lại.",
						"thai": "ทุกสิ่งรอบตัวแข็งตัวอย่างรวดเร็ว ราวกับว่าเวลาหยุดนิ่ง",
						"hindi": "हमारे चारों ओर सब कुछ तेज़ी से जम गया। मानो समय ही रुक गया हो।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "숨쉬기도 힘들어…! 이대로 가다간 우리도…!",
						"english": "It's hard to breathe...! If we keep going like this, we'll...!",
						"japanese": "息もできない…！このままだと私たちも…！",
						"chinese": "呼吸都困难了…！照这样下去，我们也会…！",
						"french": "Difficile de respirer…! Si on continue comme ça, nous aussi…!",
						"spanish": "¡Cuesta respirar...! ¡Si seguimos así, nosotros también...!",
						"vietnamese": "Khó thở quá…! Cứ thế này thì chúng ta cũng…!",
						"thai": "หายใจลำบาก...! ถ้ายังเป็นแบบนี้ต่อไป พวกเราก็คง...!",
						"hindi": "साँस लेना भी मुश्किल है...! अगर हम ऐसे ही चलते रहे, तो हम भी...!"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "bran"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "봤지? 이건 자연 현상이 아니야. 우리가 다가갈수록 시스템의 방어가 강화되는 거지.",
						"english": "See? This isn't a natural phenomenon. The closer we get, the stronger the system's defenses become.",
						"japanese": "見ただろ？これは自然現象じゃない。私たちが近づくほど、システムの防衛が強化されているんだ。",
						"chinese": "看到没？这不是自然现象。我们越靠近，系统的防御就越强。",
						"french": "Tu vois ? Ce n'est pas un phénomène naturel. Plus nous nous approchons, plus les défenses du système se renforcent.",
						"spanish": "Ves? Esto no es un fenómeno natural. Cuanto más nos acercamos, más fuertes se vuelven las defensas del sistema.",
						"vietnamese": "Thấy chưa? Đây không phải hiện tượng tự nhiên. Chúng ta càng đến gần, hệ thống phòng thủ càng mạnh lên.",
						"thai": "เห็นไหม? นี่ไม่ใช่ปรากฏการณ์ธรรมชาติ ยิ่งเราเข้าใกล้เท่าไหร่ การป้องกันของระบบก็ยิ่งแข็งแกร่งขึ้นเท่านั้น",
						"hindi": "देखा? यह कोई प्राकृतिक घटना नहीं है। हम जितना करीब आते हैं, सिस्टम की सुरक्षा उतनी ही मजबूत होती जाती है।"
					},
					"speaker": "bran"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "멈춰야 한다는 말이에요?",
						"english": "Are you saying we should stop?",
						"japanese": "止まるべきだと言うのですか？",
						"chinese": "您的意思是我们要停下来吗？",
						"french": "Vous voulez dire qu'il faut s'arrêter ?",
						"spanish": "¿Estás diciendo que debemos detenernos?",
						"vietnamese": "Ý anh là chúng ta nên dừng lại ư?",
						"thai": "คุณหมายความว่าเราควรหยุดหรือ?",
						"hindi": "क्या आप कह रहे हैं कि हमें रुक जाना चाहिए?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "bran",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "돌아갈 길은 이미 얼어붙었어. 이제 선택은 하나뿐이지. 이 끝없는 순환을 깨뜨리는 것.",
						"english": "The way back is already frozen. Now there's only one choice: to break this endless cycle.",
						"japanese": "戻る道はすでに凍りついた。もう選択肢は一つだけだ。この終わりのない循環を打ち破ること。",
						"chinese": "回头的路已经冻结了。现在只有一个选择：打破这个无尽的循环。",
						"french": "Le chemin du retour est déjà gelé. Il n'y a plus qu'un seul choix : briser ce cycle sans fin.",
						"spanish": "El camino de vuelta ya está congelado. Ahora solo queda una opción: romper este ciclo interminable.",
						"vietnamese": "Đường về đã đóng băng rồi. Giờ chỉ còn một lựa chọn: phá vỡ vòng luân hồi bất tận này.",
						"thai": "เส้นทางกลับถูกแช่แข็งแล้ว ตอนนี้มีทางเลือกเดียวเท่านั้น คือการทำลายวัฏจักรที่ไม่สิ้นสุดนี้",
						"hindi": "वापसी का रास्ता पहले ही जम चुका है। अब बस एक ही विकल्प है: इस अंतहीन चक्र को तोड़ना।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "아에사… 당신의 이름이 불리는 것 같아…",
						"english": "Aesa... I feel like your name is being called...",
						"japanese": "アエサ…あなたの名前が呼ばれているような気がする…",
						"chinese": "艾莎…感觉好像有人在呼唤你的名字…",
						"french": "Aesa… J'ai l'impression que ton nom est appelé…",
						"spanish": "Aesa... siento como si llamaran tu nombre...",
						"vietnamese": "Aesa… hình như tên cô đang được gọi…",
						"thai": "เอซา... รู้สึกเหมือนมีคนเรียกชื่อคุณ...",
						"hindi": "एसा... मुझे लगता है जैसे तुम्हारा नाम पुकारा जा रहा है..."
					}
				},
				{
					"content": {
						"korean": "혹한 속의 속삭임은 환청일 뿐. 아니, 어쩌면… 그조차도 시스템의 일부일지.",
						"english": "The whispers in the extreme cold are just hallucinations. Or, perhaps... even that is part of the system.",
						"japanese": "極寒の中のささやきは幻聴に過ぎない。いや、もしかしたら…それすらもシステムの一部なのかもしれない。",
						"chinese": "严寒中的低语只是幻听。不，或许…那也是系统的一部分。",
						"french": "Les murmures dans le froid extrême ne sont que des hallucinations. Ou, peut-être… même cela fait partie du système.",
						"spanish": "Los susurros en el frío extremo son solo alucinaciones. O, quizás... incluso eso sea parte del sistema.",
						"vietnamese": "Những lời thì thầm trong giá rét chỉ là ảo giác. Không, có lẽ… ngay cả điều đó cũng là một phần của hệ thống.",
						"thai": "เสียงกระซิบในความหนาวเหน็บเป็นเพียงภาพหลอน ไม่สิ หรือว่า... แม้แต่สิ่งนั้นก็เป็นส่วนหนึ่งของระบบ",
						"hindi": "अत्यधिक ठंड में फुसफुसाहटें सिर्फ मतिभ्रम हैं। या, शायद... वह भी सिस्टम का ही हिस्सा हो।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "bran"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "가장 깊은 곳. 거대한 그림자가 탐험대를 기다리고 있었다.",
						"english": "The deepest place. A colossal shadow awaited the expedition team.",
						"japanese": "最も深い場所。巨大な影が探検隊を待ち受けていた。",
						"chinese": "最深之处。巨大的影子等待着探险队。",
						"french": "L'endroit le plus profond. Une ombre colossale attendait l'équipe d'expédition.",
						"spanish": "El lugar más profundo. Una sombra colosal esperaba al equipo de expedición.",
						"vietnamese": "Nơi sâu nhất. Một cái bóng khổng lồ đang chờ đợi đội thám hiểm.",
						"thai": "สถานที่ที่ลึกที่สุด เงาขนาดมหึมารอคอยคณะสำรวจอยู่",
						"hindi": "सबसे गहरी जगह। एक विशाल छाया अभियान दल का इंतजार कर रही थी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "어리석은 자들. 시스템의 섭리를 거스르려 하는가?",
						"english": "Fools. Do you dare defy the system's providence?",
						"japanese": "愚か者ども。システムの摂理に逆らおうとするのか？",
						"chinese": "愚蠢之徒。你们竟敢违抗系统的法则？",
						"french": "Imbéciles. Osez-vous défier la providence du système ?",
						"spanish": "Necios. ¿Os atrevéis a desafiar la providencia del sistema?",
						"vietnamese": "Những kẻ ngu ngốc. Dám đi ngược lại ý muốn của hệ thống sao?",
						"thai": "พวกคนโง่เง่า กล้าท้าทายพระประสงค์ของระบบอย่างนั้นหรือ?",
						"hindi": "मूर्खों। क्या तुम सिस्टम की व्यवस्था का उल्लंघन करने की हिम्मत करते हो?"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네가… 이 모든 걸 조종하는 건가?",
						"english": "You... control all of this?",
						"japanese": "お前が…この全てを操っているのか？",
						"chinese": "你… 是这一切的幕后主使吗？",
						"french": "C'est toi... qui contrôles tout ça ?",
						"spanish": "¿Tú... controlas todo esto?",
						"vietnamese": "Ngươi... điều khiển tất cả sao?",
						"thai": "เจ้า... เป็นผู้บงการทั้งหมดนี้หรือ?",
						"hindi": "क्या तुम... यह सब नियंत्रित करते हो?"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "나는 그저 시스템의 수호자. 너희는 여기서 멈출 것이다.",
						"english": "I am merely the system's guardian. You will stop here.",
						"japanese": "私はただのシステムの守護者。お前たちはここで止まるだろう。",
						"chinese": "我只是系统的守护者。你们会止步于此。",
						"french": "Je ne suis que le gardien du système. Vous vous arrêterez ici.",
						"spanish": "Solo soy el guardián del sistema. Aquí os detendréis.",
						"vietnamese": "Ta chỉ là người bảo vệ hệ thống. Các ngươi sẽ dừng lại ở đây.",
						"thai": "ข้าเป็นเพียงผู้พิทักษ์ของระบบ พวกเจ้าจะหยุดอยู่แค่นี้",
						"hindi": "मैं तो बस प्रणाली का संरक्षक हूँ। तुम यहीं रुकोगे।"
					}
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"action": "enter",
					"speaker": "bran"
				},
				{
					"speaker": "bran",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "수호자? 아니. 그냥 또 다른 부품일 뿐.",
						"english": "Guardian? No. Just another component.",
						"japanese": "守護者？違う。ただの別の部品にすぎない。",
						"chinese": "守护者？不。不过是另一个零件罢了。",
						"french": "Gardien ? Non. Juste un autre rouage.",
						"spanish": "¿Guardián? No. Solo otra pieza más.",
						"vietnamese": "Người bảo vệ? Không. Chỉ là một bộ phận khác mà thôi.",
						"thai": "ผู้พิทักษ์หรือ? ไม่หรอก ก็แค่ส่วนประกอบอีกชิ้น",
						"hindi": "संरक्षक? नहीं। बस एक और पुर्जा।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "그래도… 우리는 멈추지 않아.",
						"english": "Still... we won't stop.",
						"japanese": "それでも…私たちは止まらない。",
						"chinese": "即便如此… 我们也不会停止。",
						"french": "Pourtant... nous ne nous arrêterons pas.",
						"spanish": "Aun así... no nos detendremos.",
						"vietnamese": "Dù vậy... chúng ta sẽ không dừng lại.",
						"thai": "ถึงอย่างนั้น... เราก็ไม่หยุดหรอก",
						"hindi": "फिर भी... हम रुकेंगे नहीं।"
					}
				},
				{
					"speaker": "bran",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그래. 어쩌면 파괴만이… 유일한 해답일지도 모르지.",
						"english": "Yes. Perhaps destruction is... the only answer.",
						"japanese": "そうだ。破壊こそが…唯一の答えなのかもしれない。",
						"chinese": "没错。或许只有毁灭… 才是唯一的答案。",
						"french": "Oui. Peut-être que la destruction... est la seule réponse.",
						"spanish": "Sí. Quizás la destrucción sea... la única respuesta.",
						"vietnamese": "Phải. Có lẽ sự hủy diệt... là câu trả lời duy nhất.",
						"thai": "ใช่ บางทีการทำลายล้าง... อาจเป็นทางออกเดียว",
						"hindi": "हाँ। शायद विनाश ही... एकमात्र हल है।"
					}
				},
				{
					"type": "direction",
					"direction": "down",
					"duration_ms": 400,
					"action": "exit",
					"speaker": "bran"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "영원의 속삭임이 모든 것을 얼어붙게 했다.",
						"english": "The whisper of eternity froze everything.",
						"japanese": "永遠の囁きが全てを凍らせた。",
						"chinese": "永恒的低语冻结了一切。",
						"french": "Le murmure de l'éternité a tout gelé.",
						"spanish": "El susurro de la eternidad lo congeló todo.",
						"vietnamese": "Lời thì thầm của vĩnh cửu đã đóng băng mọi thứ.",
						"thai": "เสียงกระซิบของนิรันดร์ทำให้ทุกสิ่งกลายเป็นน้ำแข็ง",
						"hindi": "अनंत काल की फुसफुसाहट ने सब कुछ जमा दिया।"
					}
				},
				{
					"content": {
						"korean": "저항은 무의미하다. 너희도 시스템의 일부가 될 뿐.",
						"english": "Resistance is futile. You too shall become part of the system.",
						"japanese": "抵抗は無意味だ。お前たちもシステムの一部となるだろう。",
						"chinese": "反抗毫无意义。你们也将成为系统的一部分。",
						"french": "Toute résistance est futile. Vous aussi deviendrez une partie du système.",
						"spanish": "La resistencia es inútil. Vosotros también seréis parte del sistema.",
						"vietnamese": "Kháng cự là vô ích. Các ngươi cũng sẽ trở thành một phần của hệ thống.",
						"thai": "การต่อต้านนั้นไร้ประโยชน์ พวกเจ้าก็จะกลายเป็นส่วนหนึ่งของระบบ",
						"hindi": "विरोध व्यर्थ है। तुम भी प्रणाली का हिस्सा बन जाओगे।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "아직 끝나지 않았어…!",
						"english": "It's not over yet...!",
						"japanese": "まだ終わってない…！",
						"chinese": "还没有结束…！",
						"french": "Ce n'est pas encore fini… !",
						"spanish": "¡Esto no ha terminado aún…!",
						"vietnamese": "Vẫn chưa kết thúc…!",
						"thai": "ยังไม่จบ…!",
						"hindi": "अभी खत्म नहीं हुआ है…!"
					}
				},
				{
					"spot": [
						4,
						2
					],
					"speaker": "bran",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이 정도로 포기할 거였으면, 시작도 하지 말았어야지.",
						"english": "If you were going to give up this easily, you shouldn't have started.",
						"japanese": "これしきで諦めるなら、最初から始めるべきじゃなかった。",
						"chinese": "如果这点困难就要放弃，当初就不该开始。",
						"french": "Si c'était pour abandonner si facilement, tu n'aurais pas dû commencer.",
						"spanish": "Si ibas a rendirte tan fácilmente, no debiste haber empezado.",
						"vietnamese": "Nếu định từ bỏ dễ dàng như vậy, thì đừng nên bắt đầu ngay từ đầu.",
						"thai": "ถ้าจะยอมแพ้ง่ายๆ แค่นี้ ก็ไม่ควรเริ่มตั้งแต่แรก.",
						"hindi": "अगर इतनी आसानी से हार माननी थी, तो शुरू ही नहीं करना चाहिए था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "bran"
				},
				{
					"direction": "down",
					"type": "direction",
					"duration_ms": 300,
					"action": "exit",
					"speaker": "bran"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "크크… 겨우 이것 가지고… 시스템은… 영원하다…",
						"english": "Heh heh... Is that all you've got? The system... is eternal...",
						"japanese": "クク…これしきで…システムは…永遠だ…",
						"chinese": "呵呵… 就凭这点？系统… 永恒不灭…",
						"french": "Hé hé... C'est tout ce que tu as ? Le système... est éternel...",
						"spanish": "Je je... ¿Solo con esto...? El sistema... es eterno...",
						"vietnamese": "Khà khà... Chỉ có thế thôi sao... Hệ thống... là vĩnh cửu...",
						"thai": "ฮิฮิ... แค่นี้เองหรือ... ระบบ... เป็นนิรันดร์...",
						"hindi": "हा हा... बस इतना ही...? प्रणाली... शाश्वत है..."
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "시스템… 대체 뭐지?",
						"english": "The system... what is it exactly?",
						"japanese": "システム…一体何なんだ？",
						"chinese": "系统… 到底是什么？",
						"french": "Le système... qu'est-ce que c'est, au juste ?",
						"spanish": "El sistema... ¿qué es, en realidad?",
						"vietnamese": "Hệ thống... rốt cuộc là gì?",
						"thai": "ระบบ... มันคืออะไรกันแน่?",
						"hindi": "प्रणाली... आखिर क्या है?"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "쓰러진 {random_boss} 뒤로, 얼어붙었던 대지에 희미한 균열이 생겨났다. 하지만 진정한 배후는 아직 모습을 드러내지 않았다.",
						"english": "Behind the fallen {random_boss}, faint cracks appeared on the frozen ground. But the true mastermind has yet to reveal itself.",
						"japanese": "倒れた{random_boss}の後ろには、凍てついた大地に微かな亀裂が生まれた。だが、真の黒幕はまだ姿を現していない。",
						"chinese": "倒下的{random_boss}身后，冰冻的大地浮现出微弱的裂痕。然而，真正的幕后主使尚未现身。",
						"french": "Derrière le {random_boss} tombé, de faibles fissures sont apparues sur la terre gelée. Mais le véritable cerveau n'a pas encore révélé sa présence.",
						"spanish": "Tras la caída de {random_boss}, débiles grietas surgieron en la tierra helada. Pero el verdadero cerebro aún no se ha revelado.",
						"vietnamese": "Phía sau {random_boss} đã ngã xuống, những vết nứt mờ nhạt xuất hiện trên mặt đất đóng băng. Nhưng kẻ chủ mưu thực sự vẫn chưa lộ diện.",
						"thai": "เบื้องหลัง {random_boss} ที่ล้มลง พื้นดินที่เยือกแข็งก็เกิดรอยร้าวจางๆ แต่ผู้อยู่เบื้องหลังที่แท้จริงยังไม่เผยตัว",
						"hindi": "गिरे हुए {random_boss} के पीछे, जमी हुई धरती पर हल्की दरारें दिखाई दीं। लेकिन असली मास्टरमाइंड अभी सामने नहीं आया है।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"겨울은 더욱 깊어졌다. 단순한 추위가 아니었다.",
			"모든 것이 이전보다 빠르게 얼어붙었다. 마치 거대한 시스템이 조종하는 것처럼.",
			"길을 안내하던 브란은 탐험대의 여정을 의심했다.",
			"어쩌면, 이 겨울 자체가 파괴되어야 할 운명이라고."
		],
		"english": [
			"The winter deepened. It wasn't just simple cold.",
			"Everything froze faster than before. As if a massive system was controlling it.",
			"Bran, who was guiding the way, doubted the expedition's journey.",
			"Perhaps, this winter itself was destined to be destroyed."
		],
		"japanese": [
			"冬はさらに深まった。ただの寒さではなかった。",
			"全てが以前より早く凍りついた。まるで巨大なシステムが操っているかのように。",
			"道案内をしていたブランは、探検隊の旅を疑った。",
			"もしかしたら、この冬そのものが破壊される運命なのかもしれない。"
		],
		"chinese": [
			"冬日愈发深沉。这并非单纯的寒冷。",
			"一切都比以往冻结得更快。仿佛一个巨大的系统在操控。",
			"领路的布兰开始怀疑探险队的旅程。",
			"也许，这个冬天本身就注定要被摧毁。"
		],
		"french": [
			"L'hiver s'est approfondi. Ce n'était pas un simple froid.",
			"Tout a gelé plus vite qu'avant. Comme si un système gigantesque le contrôlait.",
			"Bran, qui guidait le chemin, doutait du voyage de l'expédition.",
			"Peut-être que cet hiver était lui-même destiné à être détruit."
		],
		"spanish": [
			"El invierno se hizo más profundo. No era un frío cualquiera.",
			"Todo se congeló más rápido que antes. Como si un sistema gigantesco lo controlara.",
			"Bran, quien guiaba el camino, dudaba del viaje de la expedición.",
			"Quizás, este mismo invierno estaba destinado a ser destruido."
		],
		"vietnamese": [
			"Mùa đông ngày càng sâu hơn. Đó không phải là cái lạnh đơn thuần.",
			"Mọi thứ đóng băng nhanh hơn trước. Cứ như thể một hệ thống khổng lồ đang điều khiển.",
			"Bran, người dẫn đường, đã nghi ngờ hành trình của đoàn thám hiểm.",
			"Có lẽ, chính mùa đông này đã định sẵn sẽ bị hủy diệt."
		],
		"thai": [
			"ฤดูหนาวยิ่งลึกซึ้ง ไม่ใช่แค่ความหนาวเย็นธรรมดา",
			"ทุกสิ่งแข็งตัวเร็วกว่าเดิม ราวกับว่ามีระบบขนาดใหญ่ควบคุมอยู่",
			"บราน ผู้ชี้ทาง สงสัยในการเดินทางของคณะสำรวจ",
			"บางที ฤดูหนาวนี้เองก็ถูกกำหนดให้ต้องถูกทำลาย"
		],
		"hindi": [
			"सर्दी और गहरी हो गई। यह सिर्फ़ ठंड नहीं थी।",
			"सब कुछ पहले से ज़्यादा तेज़ी से जम गया। जैसे कोई विशाल तंत्र इसे नियंत्रित कर रहा हो।",
			"रास्ता दिखा रहा ब्रан, अभियान की यात्रा पर शक करने लगा।",
			"शायद, यह सर्दी खुद ही नष्ट होने के लिए अभिशप्त थी।"
		]
	}
} as const;
