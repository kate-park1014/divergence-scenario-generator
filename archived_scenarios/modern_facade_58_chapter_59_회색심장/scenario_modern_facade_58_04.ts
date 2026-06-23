export const scenario_modern_facade_58_04 = {
	"scenario_id": "modern_facade_58_04",
	"order": 4,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"kai": {
			"id": "mon_d7f29313-b8fb-49da-9a1a-01df5d13866e",
			"name": {
				"korean": "카이",
				"english": "Kai",
				"japanese": "カイ",
				"chinese": "凯",
				"french": "Kai",
				"spanish": "Kai",
				"vietnamese": "Kai",
				"thai": "ไค",
				"hindi": "काई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f10d9184-4155-4bb9-de2d-db61463f7c00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e41f8e03-08c9-4a4f-6f72-fa9342876f00/public"
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
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "파사드의 심장부. 거대한 기계 장치들이 굉음을 냈다.",
						"english": "The heart of Facade. Giant machinery roared.",
						"japanese": "ファサードの心臓部。巨大な機械装置が轟音を立てた。",
						"chinese": "立面的心脏。巨大的机械装置发出轰鸣。",
						"french": "Le cœur de Façade. D'énormes machines rugissaient.",
						"spanish": "El corazón de Fachada. La maquinaria gigante rugía.",
						"vietnamese": "Trung tâm của Mặt tiền. Máy móc khổng lồ gầm rú.",
						"thai": "หัวใจของฟาซาด เครื่องจักรขนาดยักษ์คำราม",
						"hindi": "फ़ेकेड का दिल। विशाल मशीनें गर्जना कर रही थीं।"
					}
				},
				{
					"content": {
						"korean": "이거… 에너지를 너무 많이 쓰고 있는데?",
						"english": "This... it's consuming too much energy?",
						"japanese": "これ…エネルギーを使いすぎているんじゃないか？",
						"chinese": "这…它消耗了太多能量？",
						"french": "Ceci... ça consomme trop d'énergie, non ?",
						"spanish": "¿Esto... está consumiendo demasiada energía?",
						"vietnamese": "Cái này... nó đang tiêu thụ quá nhiều năng lượng?",
						"thai": "นี่...มันใช้พลังงานมากเกินไปหรือเปล่า?",
						"hindi": "यह... यह बहुत अधिक ऊर्जा की खपत कर रहा है?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "흡수율이 비정상적이야. 뭔가 잘못됐어.",
						"english": "The absorption rate is abnormal. Something's wrong.",
						"japanese": "吸収率が異常だ。何かがおかしい。",
						"chinese": "吸收率不正常。出了问题。",
						"french": "Le taux d'absorption est anormal. Quelque chose ne va pas.",
						"spanish": "La tasa de absorción es anormal. Algo anda mal.",
						"vietnamese": "Tỷ lệ hấp thụ bất thường. Có gì đó không ổn.",
						"thai": "อัตราการดูดซึมผิดปกติ มีบางอย่างผิดพลาด",
						"hindi": "अवशोषण दर असामान्य है। कुछ गलत है।"
					},
					"speaker": "character_1"
				},
				{
					"duration_ms": 500,
					"speaker": "kai",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "드디어 여기까지 왔나? 눈치가 빠르군.",
						"english": "So you finally made it here? Quite perceptive.",
						"japanese": "ついにここまで来たか。察しがいいな。",
						"chinese": "你终于到这儿了？真够敏锐的。",
						"french": "Alors, vous êtes enfin arrivé ici ? Plutôt perspicace.",
						"spanish": "¿Así que finalmente llegaste aquí? Bastante perceptivo.",
						"vietnamese": "Cuối cùng ngươi cũng đến đây? Khá nhạy bén đấy.",
						"thai": "ในที่สุดก็มาถึงที่นี่? ช่างเฉียบแหลมจริงๆ",
						"hindi": "तो तुम आखिर यहाँ आ ही गए? काफी समझदार हो।"
					},
					"speaker": "kai"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "kai",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "난 카이. 이 도시의 에너지를 좀 빌리고 있었을 뿐이야.",
						"english": "I'm Kai. I was merely borrowing a bit of this city's energy.",
						"japanese": "俺はカイ。この都市のエネルギーをちょっと借りていただけさ。",
						"chinese": "我是凯。我只是借用了一下这座城市的能量。",
						"french": "Je suis Kai. Je n'ai fait qu'emprunter un peu de l'énergie de cette ville.",
						"spanish": "Soy Kai. Solo estaba tomando prestada un poco de la energía de esta ciudad.",
						"vietnamese": "Ta là Kai. Ta chỉ mượn một chút năng lượng của thành phố này thôi.",
						"thai": "ฉันคือไค ฉันแค่ยืมพลังงานของเมืองนี้ไปนิดหน่อยเอง",
						"hindi": "मैं काई हूँ। मैं बस इस शहर की थोड़ी ऊर्जा उधार ले रहा था।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "kai"
				},
				{
					"content": {
						"korean": "빌려? 네 이득을 위해 도시를 위협한다고?",
						"english": "Borrow? You're threatening the city for your own gain?",
						"japanese": "借りる？お前の利益のために都市を脅かすのか？",
						"chinese": "借用？为了你自己的利益而威胁城市？",
						"french": "Emprunter ? Tu menaces la ville pour ton propre profit ?",
						"spanish": "¿Tomar prestado? ¿Estás amenazando la ciudad para tu propio beneficio?",
						"vietnamese": "Mượn? Ngươi đang đe dọa thành phố vì lợi ích của mình sao?",
						"thai": "ยืมเหรอ? คุณกำลังคุกคามเมืองเพื่อผลประโยชน์ของตัวเองอย่างนั้นหรือ?",
						"hindi": "उधार? तुम अपने फायदे के लिए शहर को धमकी दे रहे हो?"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "위협이라니. 난 단지… 통제하려 했을 뿐. 오히려 너희보다 더 잘 이해하고 있지.",
						"english": "Threat? I merely... sought control. I understand it better than you ever could.",
						"japanese": "「脅威だと？私はただ…制御しようとしただけだ。お前たちよりずっとよく理解している。」",
						"chinese": "「威胁？我只是…想控制而已。我比你们更了解它。」",
						"french": "« Menace ? J'ai seulement… cherché à contrôler. Je le comprends mieux que vous. »",
						"spanish": "« ¿Amenaza? Yo solo… intentaba controlarlo. Lo entiendo mucho mejor que vosotros. »",
						"vietnamese": "« Đe dọa ư? Tôi chỉ là... muốn kiểm soát thôi. Tôi hiểu nó rõ hơn các người nhiều. »",
						"thai": "« คุกคามเหรอ? ฉันแค่...พยายามควบคุมเท่านั้นแหละ ฉันเข้าใจมันดีกว่าพวกนายเสียอีก »",
						"hindi": "« धमकी? मैं तो बस… नियंत्रण करना चाहता था। मैं इसे तुमसे बेहतर समझता हूँ। »"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_2",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "통제? 시계가 거꾸로 가잖아!",
						"english": "Control? The clock's running backward!",
						"japanese": "「制御？時計が逆戻りしているじゃないか！」",
						"chinese": "「控制？时钟在倒转！」",
						"french": "« Contrôler ? L'horloge recule ! »",
						"spanish": "« ¿Controlar? ¡El reloj va hacia atrás! »",
						"vietnamese": "« Kiểm soát? Đồng hồ đang chạy ngược kìa! »",
						"thai": "« ควบคุม? นาฬิกามันเดินถอยหลังนะ! »",
						"hindi": "« नियंत्रण? घड़ी तो उलटी चल रही है! »"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…그건 내 예상 밖인데. 흥미롭군.",
						"english": "...That's unexpected. Interesting.",
						"japanese": "「…それは予想外だ。興味深い。」",
						"chinese": "「…这出乎我意料。有意思。」",
						"french": "« ...C'est inattendu. Intéressant. »",
						"spanish": "« ...Eso está fuera de mis expectativas. Interesante. »",
						"vietnamese": "« ...Điều đó nằm ngoài dự đoán của tôi. Thú vị thật. »",
						"thai": "« ...นั่นอยู่นอกเหนือความคาดหมายของฉัน น่าสนใจทีเดียว »",
						"hindi": "« ...यह मेरी उम्मीद से परे है। दिलचस्प। »"
					},
					"speaker": "kai"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "kai",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "'파사드'는 단순한 에너지를 흡수하는 게 아니야.",
						"english": "'Facade' isn't just absorbing energy.",
						"japanese": "「『ファサード』は単なるエネルギーを吸収しているだけじゃない。」",
						"chinese": "「‘立面’不只是在吸收能量。」",
						"french": "« La 'Façade' n'absorbe pas seulement de l'énergie. »",
						"spanish": "« 'Fachada' no solo está absorbiendo energía. »",
						"vietnamese": "« 'Facade' không chỉ hấp thụ năng lượng đâu. »",
						"thai": "« 'ฟาสาด' ไม่ได้แค่ดูดซับพลังงานเท่านั้น »",
						"hindi": "« 'मुखौटा' सिर्फ़ ऊर्जा को अवशोषित नहीं कर रहा है। »"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "kai"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그럼?",
						"english": "Then what?",
						"japanese": "「じゃあ？」",
						"chinese": "「那是什么？」",
						"french": "« Alors ? »",
						"spanish": "« ¿Entonces? »",
						"vietnamese": "« Vậy thì sao? »",
						"thai": "« แล้วไง? »",
						"hindi": "« तो क्या? »"
					}
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "시간 자체를 왜곡하고 있어. 내가 원하는 건 이 정도가 아니었다고.",
						"english": "It's distorting time itself. I didn't want this much.",
						"japanese": "「時間そのものを歪めている。私が望んだのはこれほどではなかった。」",
						"chinese": "「它正在扭曲时间本身。我想要的不是这样。」",
						"french": "« Il distord le temps lui-même. Je ne voulais pas que ça aille aussi loin. »",
						"spanish": "« Está distorsionando el tiempo mismo. Esto no es lo que yo quería. »",
						"vietnamese": "« Nó đang bóp méo cả thời gian. Tôi không muốn đến mức này. »",
						"thai": "« มันกำลังบิดเบือนกาลเวลา ฉันไม่ได้ต้องการให้มันมากขนาดนี้ »",
						"hindi": "« यह समय को ही विकृत कर रहा है। मैं इतना नहीं चाहता था। »"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_3",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "이건 우리 모두에게 위험해.",
						"english": "This is dangerous for all of us.",
						"japanese": "「これは私たち全員にとって危険だ。」",
						"chinese": "「这对我们所有人都有危险。」",
						"french": "« C'est dangereux pour nous tous. »",
						"spanish": "« Esto es peligroso para todos nosotros. »",
						"vietnamese": "« Điều này nguy hiểm cho tất cả chúng ta. »",
						"thai": "« นี่เป็นอันตรายต่อพวกเราทุกคน »",
						"hindi": "« यह हम सबके लिए खतरनाक है। »"
					}
				},
				{
					"speaker": "kai",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그래. 지금 이 속도라면… 도시는 곧 멸망할 거야.",
						"english": "Yes. At this rate... the city will soon be destroyed.",
						"japanese": "「ああ。この速度だと…都市はすぐに滅びるだろう。」",
						"chinese": "「是的。照这个速度…城市很快就会毁灭。」",
						"french": "« Oui. À ce rythme… la ville sera bientôt détruite. »",
						"spanish": "« Sí. A este ritmo… la ciudad pronto será destruida. »",
						"vietnamese": "« Phải. Với tốc độ này... thành phố sẽ sớm bị hủy diệt thôi. »",
						"thai": "« ใช่ ด้วยความเร็วขนาดนี้...เมืองจะถูกทำลายในไม่ช้า »",
						"hindi": "« हाँ। इसी गति से… शहर जल्द ही नष्ट हो जाएगा। »"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…막아야 해.",
						"english": "...We have to stop it.",
						"japanese": "「…止めなければ。」",
						"chinese": "「…必须阻止它。」",
						"french": "« ...Il faut l'arrêter. »",
						"spanish": "« ...Hay que detenerlo. »",
						"vietnamese": "« ...Phải ngăn chặn nó. »",
						"thai": "« ...เราต้องหยุดมัน »",
						"hindi": "« ...हमें इसे रोकना होगा। »"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "kai",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "빌딩 그림자가… 방금 움직였어?",
						"english": "Did the building's shadow... just move?",
						"japanese": "「ビルの影が…今、動いた？」",
						"chinese": "「建筑的影子…刚才动了一下？」",
						"french": "« L'ombre du bâtiment… vient de bouger ? »",
						"spanish": "« ¿La sombra del edificio… acaba de moverse? »",
						"vietnamese": "« Bóng của tòa nhà... vừa mới di chuyển ư? »",
						"thai": "« เงาของตึก...เมื่อกี้มันขยับเหรอ? »",
						"hindi": "« क्या इमारत की परछाई… अभी हिली? »"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "시간이 공간을 조롱하듯 빠르게 뒤틀리고 있었다. 알 수 없는 피로감이 엄습했다.",
						"english": "Time twisted rapidly, mocking space. An unknown weariness overwhelmed me.",
						"japanese": "時間が空間を嘲笑うかのように急速に歪んでいた。得体の知れない疲労感が押し寄せた。",
						"chinese": "时间如同嘲弄空间般迅速扭曲着。一股莫名的疲惫感袭来。",
						"french": "Le temps se tordait rapidement, comme pour narguer l'espace. Une fatigue inconnue m'a envahi.",
						"spanish": "El tiempo se retorcía rápidamente, como burlándose del espacio. Un cansancio desconocido me invadió.",
						"vietnamese": "Thời gian xoắn vặn nhanh chóng, như thể chế nhạo không gian. Một sự mệt mỏi không rõ ập đến.",
						"thai": "เวลากำลังบิดเบี้ยวอย่างรวดเร็วราวกับเย้ยหยันอวกาศ ความเหนื่อยล้าที่ไม่รู้จักเข้าครอบงำ",
						"hindi": "समय अंतरिक्ष का उपहास करता हुआ तेज़ी से मुड़ रहा था। एक अज्ञात थकान हावी हो गई।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "kai",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 시설의 코어는 살아있는 시간 포식자야.",
						"english": "This facility's core is a living time predator.",
						"japanese": "この施設のコアは、生きた時間捕食者だ。",
						"chinese": "这个设施的核心是一个活生生的时间捕食者。",
						"french": "Le cœur de cette installation est un prédateur temporel vivant.",
						"spanish": "El núcleo de esta instalación es un depredador del tiempo viviente.",
						"vietnamese": "Lõi của cơ sở này là một kẻ săn mồi thời gian sống.",
						"thai": "แกนกลางของสถานที่นี้คือผู้ล่ากาลเวลาที่มีชีวิต",
						"hindi": "इस सुविधा का केंद्र एक जीवित समय शिकारी है।"
					}
				},
				{
					"speaker": "character_4",
					"content": {
						"korean": "시간 포식자라고?",
						"english": "A time predator?",
						"japanese": "時間捕食者だと？",
						"chinese": "时间捕食者？",
						"french": "Un prédateur temporel ?",
						"spanish": "¿Un depredador del tiempo?",
						"vietnamese": "Kẻ săn mồi thời gian ư?",
						"thai": "ผู้ล่ากาลเวลาหรือ?",
						"hindi": "एक समय शिकारी?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "모든 걸 집어삼키기 전에, 내가 막아야 해. 그리고 너희도.",
						"english": "Before it devours everything, I have to stop it. And you too.",
						"japanese": "全てを飲み込む前に、私が止めなければならない。そして、お前たちも。",
						"chinese": "在它吞噬一切之前，我必须阻止它。还有你们。",
						"french": "Avant qu'il ne dévore tout, je dois l'arrêter. Et vous aussi.",
						"spanish": "Antes de que lo devore todo, debo detenerlo. Y a vosotros también.",
						"vietnamese": "Trước khi nó nuốt chửng mọi thứ, tôi phải ngăn chặn nó. Và cả các ngươi nữa.",
						"thai": "ก่อนที่มันจะกลืนกินทุกสิ่ง ฉันต้องหยุดมัน และพวกนายด้วย",
						"hindi": "इससे पहले कि यह सब कुछ निगल जाए, मुझे इसे रोकना होगा। और तुम्हें भी।"
					},
					"speaker": "kai"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…가자. 끝내러.",
						"english": "…Let's go. To end it.",
						"japanese": "…行こう。終わらせに。",
						"chinese": "……走吧。去结束它。",
						"french": "…Allons-y. Pour en finir.",
						"spanish": "…Vamos. A terminar con esto.",
						"vietnamese": "…Đi thôi. Kết thúc nó.",
						"thai": "...ไปกันเถอะ ไปจบมันซะ",
						"hindi": "...चलो चलें। इसे खत्म करने।"
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "시간을 거스르려 하다니, 어리석군. 영원히 이 덫에 갇혀라.",
						"english": "To defy time? Foolish. Be trapped in this snare forever.",
						"japanese": "時間を逆らおうなど、愚かな。永遠にこの罠に囚われるがいい。",
						"chinese": "竟敢逆转时间，真是愚蠢。永远被困在这陷阱中吧。",
						"french": "Oser défier le temps ? Insensé. Sois piégé dans ce filet pour l'éternité.",
						"spanish": "Desafiar el tiempo... Qué necio. Quédate atrapado en esta trampa para siempre.",
						"vietnamese": "Dám chống lại thời gian, thật ngu ngốc. Hãy mắc kẹt trong cái bẫy này mãi mãi.",
						"thai": "คิดจะท้าทายเวลาหรือ? ช่างโง่เขลา จงติดอยู่ในกับดักนี้ชั่วนิรันดร์",
						"hindi": "समय के विरुद्ध जाना चाहते हो, मूर्ख। इस जाल में हमेशा के लिए फंसे रहो।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "kai"
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "하. 역시 나 없이는 안 되는군.",
						"english": "Ha. As expected, you can't do it without me.",
						"japanese": "ハ。やはり私なしでは駄目だな。",
						"chinese": "哈。果然，没有我你就不行。",
						"french": "Ha. Comme prévu, tu n'y arrives pas sans moi.",
						"spanish": "Ja. Como era de esperar, no puedes hacerlo sin mí.",
						"vietnamese": "Ha. Quả nhiên, không có ta thì ngươi chẳng làm được gì.",
						"thai": "ฮ่า. ก็จริงอย่างที่คิด ไม่มีฉันแล้วก็ทำอะไรไม่ได้เลยสินะ",
						"hindi": "हा। जैसा कि अपेक्षित था, तुम मेरे बिना कुछ नहीं कर सकते।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…아직 끝나지 않았어. 다시 돌아올 거야.",
						"english": "...It's not over yet. I'll be back.",
						"japanese": "…まだ終わっていない。また戻ってくるさ。",
						"chinese": "……还没结束。我会再回来的。",
						"french": "...Ce n'est pas encore fini. Je reviendrai.",
						"spanish": "...Aún no ha terminado. Volveré.",
						"vietnamese": "...Chưa kết thúc đâu. Ta sẽ quay lại.",
						"thai": "...ยังไม่จบหรอก ฉันจะกลับมาอีกครั้ง",
						"hindi": "...यह अभी खत्म नहीं हुआ है। मैं वापस आऊँगा।"
					},
					"speaker": "character_any"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "시설의 가장 깊은 곳. 거대한 그림자가 그들을 기다리고 있었다.",
						"english": "The deepest part of the facility. A colossal shadow awaited them.",
						"japanese": "施設の最も深い場所。巨大な影が彼らを待ち受けていた。",
						"chinese": "设施的最深处。一个巨大的身影在那里等着他们。",
						"french": "La partie la plus profonde de l'installation. Une ombre colossale les attendait.",
						"spanish": "La parte más profunda de la instalación. Una sombra colosal los esperaba.",
						"vietnamese": "Nơi sâu nhất của cơ sở. Một bóng đen khổng lồ đang chờ đợi họ.",
						"thai": "ส่วนที่ลึกที่สุดของสถานที่ เงาขนาดมหึมารอคอยพวกเขาอยู่",
						"hindi": "सुविधा का सबसे गहरा हिस्सा। एक विशाल छाया उनका इंतज़ार कर रही थी।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "하찮은 것들. 내 시간을 방해하는가?",
						"english": "Insignificant beings. Do you dare disturb my time?",
						"japanese": "愚かな者たち。私の時間を邪魔するのか？",
						"chinese": "渺小的存在。胆敢打扰我的时间？",
						"french": "Êtres insignifiants. Osez-vous perturber mon temps ?",
						"spanish": "Seres insignificantes. ¿Osáis perturbar mi tiempo?",
						"vietnamese": "Những kẻ hèn mọn. Dám quấy rầy thời gian của ta?",
						"thai": "เจ้าสิ่งไร้ค่า กล้าขัดขวางเวลาของข้าหรือ?",
						"hindi": "तुच्छ प्राणी। क्या तुम मेरे समय में हस्तक्षेप करते हो?"
					}
				},
				{
					"duration_ms": 500,
					"speaker": "kai",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "kai",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "저게 '시간 포식자'의 핵심이야. 조심해.",
						"english": "That's the core of the 'Time Predator'. Be careful.",
						"japanese": "あれが「時間捕食者」の核心だ。気をつけろ。",
						"chinese": "那就是“时间捕食者”的核心。小心。",
						"french": "C'est le cœur du 'Prédateur Temporel'. Faites attention.",
						"spanish": "Ese es el núcleo del 'Depredador del Tiempo'. Ten cuidado.",
						"vietnamese": "Đó là lõi của 'Kẻ săn mồi thời gian'. Hãy cẩn thận.",
						"thai": "นั่นคือแกนกลางของ 'ผู้ล่ากาลเวลา' ระวังตัวด้วย",
						"hindi": "वह 'समय शिकारी' का केंद्र है। सावधान रहो।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "물러서. 네가 막으려던 게 이거였군.",
						"english": "Step back. So this is what you were trying to stop.",
						"japanese": "退がれ。お前が止めようとしていたのはこれだったか。",
						"chinese": "退下。你试图阻止的就是这个啊。",
						"french": "Reculez. C'est donc ça que vous essayiez d'arrêter.",
						"spanish": "Retrocede. Así que esto es lo que intentabas detener.",
						"vietnamese": "Lùi lại. Vậy ra đây là thứ ngươi đang cố ngăn chặn.",
						"thai": "ถอยไป นี่คือสิ่งที่นายพยายามจะหยุดสินะ",
						"hindi": "पीछे हट जाओ। तो यही वह था जिसे तुम रोकने की कोशिश कर रहे थे।"
					},
					"speaker": "character_any"
				},
				{
					"duration_ms": 400,
					"speaker": "kai",
					"direction": "down",
					"action": "exit",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "시간은 누구도 거스를 수 없다. 이 도시처럼, 너희도 흡수될 뿐.",
						"english": "No one can defy time. Like this city, you too will merely be absorbed.",
						"japanese": "時間に逆らえる者はいない。この都市のように、お前たちもただ吸収されるだけだ。",
						"chinese": "谁也无法违抗时间。就像这座城市一样，你们也只会被吞噬。",
						"french": "Nul ne peut défier le temps. Comme cette ville, vous ne serez que des absorbés.",
						"spanish": "Nadie puede desafiar al tiempo. Como esta ciudad, vosotros también seréis absorbidos.",
						"vietnamese": "Không ai có thể chống lại thời gian. Giống như thành phố này, các ngươi cũng sẽ chỉ bị hấp thụ mà thôi.",
						"thai": "ไม่มีใครสามารถท้าทายกาลเวลาได้ เช่นเดียวกับเมืองนี้ พวกเจ้าก็จะถูกดูดซับไปเท่านั้น",
						"hindi": "कोई भी समय को चुनौती नहीं दे सकता। इस शहर की तरह, तुम भी बस समाहित हो जाओगे।"
					},
					"speaker": "random_boss"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "크으윽… 아직 멀었다. 이 시간의 굴레는… 끝나지 않아.",
						"english": "Ugh... not yet. This time loop... it won't end.",
						"japanese": "くぅ…まだだ。この時間の輪廻は…終わらない。",
						"chinese": "呃……还早呢。这时间的桎梏……永无止境。",
						"french": "Ugh... pas encore. Ce cycle temporel... il ne finira jamais.",
						"spanish": "Ugh... aún no. Este ciclo temporal... no terminará.",
						"vietnamese": "Khừ... chưa xong đâu. Vòng lặp thời gian này... sẽ không kết thúc.",
						"thai": "อึก... ยังอีกไกล วงเวียนแห่งเวลานี้... ไม่มีวันสิ้นสุด",
						"hindi": "उह... अभी बाकी है। समय का यह चक्र... कभी खत्म नहीं होगा।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "끝났어. 이제 이 왜곡을 멈출 수 있어.",
						"english": "It's over. Now I can stop this distortion.",
						"japanese": "終わった。これでこの歪みを止められる。",
						"chinese": "结束了。现在我可以阻止这场扭曲了。",
						"french": "C'est fini. Je peux enfin arrêter cette distorsion.",
						"spanish": "Se acabó. Ahora puedo detener esta distorsión.",
						"vietnamese": "Xong rồi. Giờ thì ta có thể ngăn chặn sự méo mó này.",
						"thai": "จบแล้ว ตอนนี้ฉันสามารถหยุดการบิดเบือนนี้ได้แล้ว",
						"hindi": "खत्म हुआ। अब मैं इस विकृति को रोक सकता हूँ।"
					},
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "kai",
					"duration_ms": 500
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "…겨우 시작일 뿐이야. 진짜 시간은 이제부터 흐를 거야.",
						"english": "...It's just the beginning. True time will flow from now on.",
						"japanese": "…始まりにすぎない。本当の時間は、これから動き出す。",
						"chinese": "……这仅仅是个开始。真正的时间，从现在才要流动。",
						"french": "...Ce n'est que le début. Le temps réel va commencer à s'écouler maintenant.",
						"spanish": "...Es solo el principio. El verdadero tiempo comenzará a fluir a partir de ahora.",
						"vietnamese": "...Chỉ là khởi đầu thôi. Thời gian thật sự sẽ chảy từ bây giờ.",
						"thai": "...นี่เป็นเพียงจุดเริ่มต้นเท่านั้น เวลาที่แท้จริงจะเริ่มไหลจากนี้ไป",
						"hindi": "...यह तो बस शुरुआत है। असली समय अब से बहेगा।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"direction": "up",
					"action": "exit",
					"type": "direction",
					"duration_ms": 400,
					"speaker": "kai"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "시간의 왜곡은 멈췄지만, 불안감은 사라지지 않았다. 거울 속 잔상이 찰나의 진실을 비췄다.",
						"english": "The distortion of time has stopped, but the unease remains. A lingering image in the mirror reflected a fleeting truth.",
						"japanese": "時間の歪みは止まったが、不安は消えなかった。鏡の中の残像が、刹那の真実を映し出した。",
						"chinese": "时间的扭曲停止了，但不安感并未消散。镜中的残像映照出刹那的真实。",
						"french": "La distorsion temporelle s'est arrêtée, mais l'inquiétude persistait. Une image rémanente dans le miroir reflétait une vérité éphémère.",
						"spanish": "La distorsión del tiempo se detuvo, pero la inquietud no desapareció. Una imagen residual en el espejo reflejó una verdad fugaz.",
						"vietnamese": "Sự méo mó thời gian đã dừng lại, nhưng cảm giác bất an không tan biến. Một tàn ảnh trong gương phản chiếu sự thật thoáng qua.",
						"thai": "การบิดเบือนของเวลาหยุดลงแล้ว แต่ความรู้สึกไม่สบายใจยังคงอยู่ ภาพสะท้อนในกระจกเผยความจริงชั่วพริบตา",
						"hindi": "समय का विकृति तो रुक गया, पर बेचैनी बनी रही। दर्पण में एक क्षणभंगुर छवि ने पल भर की सच्चाई दिखाई।"
					},
					"speaker": "narrator"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"파사드, 거대한 시한폭탄이었다.",
			"건물 깊숙이, 무언가가 도시의 에너지를 집어삼키고 있었다.",
			"그리고 그 중심에, 카이가 이빨을 드러냈다.",
			"시간은 흐르고, 그림자는 점점 더 빠르게 움직였다."
		],
		"english": [
			"Facade, a colossal time bomb.",
			"Deep within the building, something was devouring the city's energy.",
			"And at its heart, Kai bared his fangs.",
			"Time flowed, and shadows moved ever faster."
		],
		"japanese": [
			"ファサード、それは巨大な時限爆弾だった。",
			"建物の奥深くで、何かが都市のエネルギーを食い尽くしていた。",
			"そしてその中心で、カイが牙を剥いた。",
			"時は流れ、影はますます速く動いた。"
		],
		"chinese": [
			"立面，一个巨大的定时炸弹。",
			"建筑深处，某种东西正在吞噬城市的能量。",
			"而在其中心，凯露出了獠牙。",
			"时间流逝，影子移动得越来越快。"
		],
		"french": [
			"Façade, une bombe à retardement colossale.",
			"Au plus profond du bâtiment, quelque chose dévorait l'énergie de la ville.",
			"Et en son cœur, Kai montra les crocs.",
			"Le temps s'écoulait, et les ombres se déplaçaient de plus en plus vite."
		],
		"spanish": [
			"Fachada, una bomba de tiempo colosal.",
			"En lo profundo del edificio, algo estaba devorando la energía de la ciudad.",
			"Y en su centro, Kai mostró sus colmillos.",
			"El tiempo fluía, y las sombras se movían cada vez más rápido."
		],
		"vietnamese": [
			"Mặt tiền, một quả bom hẹn giờ khổng lồ.",
			"Sâu bên trong tòa nhà, thứ gì đó đang nuốt chửng năng lượng của thành phố.",
			"Và tại trung tâm của nó, Kai đã nhe nanh.",
			"Thời gian trôi đi, và bóng tối di chuyển ngày càng nhanh."
		],
		"thai": [
			"ฟาซาด ระเบิดเวลาลูกยักษ์",
			"ลึกเข้าไปในอาคาร มีบางอย่างกำลังกลืนกินพลังงานของเมือง",
			"และที่ใจกลางของมัน ไคก็เปิดเผยเขี้ยวของเขา",
			"เวลาผ่านไป และเงาก็เคลื่อนไหวเร็วขึ้นเรื่อยๆ"
		],
		"hindi": [
			"फ़ेकेड, एक विशाल टाइम बम था।",
			"इमारत के अंदरूनी हिस्से में, कुछ शहर की ऊर्जा को निगल रहा था।",
			"और उसके केंद्र में, काई ने अपने दांत दिखाए।",
			"समय बीतता गया, और परछाइयाँ तेज़ी से आगे बढ़ती गईं।"
		]
	}
} as const;
