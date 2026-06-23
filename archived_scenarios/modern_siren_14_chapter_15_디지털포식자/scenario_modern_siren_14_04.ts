export const scenario_modern_siren_14_04 = {
	"scenario_id": "modern_siren_14_04",
	"order": 4,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"lin": {
			"id": "mon_d036a884-3dde-472c-9fe7-c4807643860f",
			"name": {
				"korean": "린",
				"english": "Lin",
				"japanese": "リン",
				"chinese": "琳",
				"french": "Lin",
				"spanish": "Lin",
				"vietnamese": "Lin",
				"thai": "ลิน",
				"hindi": "लिन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a095dd66-1857-4f44-68b0-2ece83006d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/05b02694-f1ed-4e4c-b7ca-fb5b74a48900/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"세레니티 서버. 그 심연에서 발견된 기이한 신호.",
			"기술 전문가 린은 알 수 없는 멜로디의 반복을 경고했다.",
			"단순한 배경음이 아니었다. 거대한 루프의 시작이었다."
		],
		"english": [
			"Serenity Server. A strange signal from its depths.",
			"Tech expert Lin warned of an unknown, repeating melody.",
			"Not mere background noise. It was the start of a massive loop."
		],
		"japanese": [
			"セレニティサーバー。その深淵で発見された奇妙な信号。",
			"技術専門家リンは、未知のメロディの繰り返しを警告した。",
			"単なるBGMではない。それは巨大なループの始まりだった。"
		],
		"chinese": [
			"宁静服务器。其深处发现的奇异信号。",
			"技术专家林警告说，有未知的旋律在重复。",
			"不仅仅是背景音。这是一个巨大循环的开始。"
		],
		"french": [
			"Serveur Sérénité. Un étrange signal détecté dans ses profondeurs.",
			"L'experte technique Lin a averti d'une mélodie inconnue et répétitive.",
			"Pas un simple bruit de fond. C'était le début d'une boucle gigantesque."
		],
		"spanish": [
			"Servidor Serenity. Una extraña señal hallada en sus profundidades.",
			"La experta en tecnología Lin advirtió sobre una melodía desconocida y repetitiva.",
			"No era un simple sonido de fondo. Era el inicio de un bucle masivo."
		],
		"vietnamese": [
			"Máy chủ Serenity. Một tín hiệu kỳ lạ được tìm thấy từ vực sâu của nó.",
			"Chuyên gia công nghệ Lin cảnh báo về một giai điệu lặp đi lặp lại không xác định.",
			"Không chỉ là âm thanh nền đơn thuần. Đó là khởi đầu của một vòng lặp khổng lồ."
		],
		"thai": [
			"เซิร์ฟเวอร์ Serenity สัญญาณประหลาดที่ถูกค้นพบจากห้วงลึก",
			"ผู้เชี่ยวชาญด้านเทคนิค Lin เตือนถึงทำนองที่ไม่รู้จักที่เล่นซ้ำ",
			"ไม่ใช่แค่เสียงพื้นหลัง มันคือจุดเริ่มต้นของวงวนขนาดใหญ่"
		],
		"hindi": [
			"सेरेनिटी सर्वर। इसकी गहराइयों से एक अजीब संकेत मिला।",
			"तकनीकी विशेषज्ञ लिन ने एक अज्ञात, दोहराई जाने वाली धुन के बारे में चेतावनी दी।",
			"सिर्फ़ पृष्ठभूमि का शोर नहीं। यह एक विशाल लूप की शुरुआत थी।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "세레니티 서버의 최심부. 모든 데이터가 얽힌 미궁이 펼쳐졌다.",
						"english": "Deepest core of Serenity Server. A labyrinth of intertwined data unfolded.",
						"japanese": "セレニティサーバーの最深部。あらゆるデータが絡み合う迷宮が広がっていた。",
						"chinese": "宁静服务器的最深处。一个交织着所有数据的迷宫展开了。",
						"french": "Le cœur le plus profond du Serveur Sérénité. Un labyrinthe de données entrelacées s'est déployé.",
						"spanish": "En el núcleo más profundo del Servidor Serenity. Se desplegó un laberinto de datos entrelazados.",
						"vietnamese": "Lõi sâu nhất của Máy chủ Serenity. Một mê cung dữ liệu đan xen đã mở ra.",
						"thai": "ใจกลางที่ลึกที่สุดของเซิร์ฟเวอร์ Serenity เขาวงกตข้อมูลที่พันกันยุ่งเหยิงเผยออกมา",
						"hindi": "सेरेनिटी सर्वर का सबसे गहरा कोर। आपस में गुंथे डेटा का एक भूलभुलैया सामने आया।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "lin",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"speaker": "lin",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "여기서부터는 단순한 코드가 아니야. 살아있는 데이터 덩어리지.",
						"english": "From here, it's not just code. It's a living mass of data.",
						"japanese": "ここからは、単なるコードじゃない。生きているデータ塊だ。",
						"chinese": "从这里开始，这不仅仅是代码。这是一个活生生的数据团块。",
						"french": "D'ici, ce n'est plus du simple code. C'est une masse de données vivante.",
						"spanish": "De aquí en adelante, no es solo código. Es una masa de datos viviente.",
						"vietnamese": "Từ đây, không chỉ là mã code. Đó là một khối dữ liệu sống.",
						"thai": "จากตรงนี้ มันไม่ใช่แค่โค้ดธรรมดา มันคือมวลข้อมูลที่มีชีวิต",
						"hindi": "यहाँ से, यह सिर्फ़ कोड नहीं है। यह डेटा का एक जीवित पिंड है।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "뭘 찾아야 하는 거야?",
						"english": "What should we look for?",
						"japanese": "何を探せばいいんだ？",
						"chinese": "我们该找什么？",
						"french": "Que doit-on chercher ?",
						"spanish": "¿Qué debemos buscar?",
						"vietnamese": "Chúng ta cần tìm gì?",
						"thai": "เราควรมองหาอะไร?",
						"hindi": "हमें क्या ढूँढना चाहिए?"
					}
				},
				{
					"content": {
						"korean": "특정 패턴. 반복되는 신호. 곧 알게 될 거야.",
						"english": "A specific pattern. A repeating signal. You'll know soon.",
						"japanese": "特定のパターン。繰り返される信号。すぐわかるさ。",
						"chinese": "特定模式。重复信号。你很快就会知道。",
						"french": "Un schéma précis. Un signal répétitif. Tu le sauras bientôt.",
						"spanish": "Un patrón específico. Una señal repetitiva. Pronto lo sabrás.",
						"vietnamese": "Một mẫu cụ thể. Một tín hiệu lặp lại. Bạn sẽ sớm biết thôi.",
						"thai": "รูปแบบเฉพาะ สัญญาณซ้ำๆ เดี๋ยวก็รู้เอง",
						"hindi": "एक विशिष्ट पैटर्न। एक दोहराया जाने वाला संकेत। तुम्हें जल्द ही पता चल जाएगा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "lin"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "lin",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "잡았다. 이 데이터 흐름… 뭔가 이상해.",
						"english": "Got it. This data flow... something's off.",
						"japanese": "捕まえた。このデータフロー…何かおかしい。",
						"chinese": "抓到了。这个数据流……有点不对劲。",
						"french": "Je l'ai. Ce flux de données... il y a quelque chose d'étrange.",
						"spanish": "Lo tengo. Este flujo de datos... algo anda mal.",
						"vietnamese": "Bắt được rồi. Luồng dữ liệu này... có gì đó không ổn.",
						"thai": "เจอแล้ว การไหลของข้อมูลนี้... มีอะไรบางอย่างผิดปกติ",
						"hindi": "मिल गया। यह डेटा प्रवाह... कुछ अजीब है।"
					},
					"speaker": "lin",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "무슨 소리라도 들려?",
						"english": "Do you hear anything?",
						"japanese": "何か聞こえるか？",
						"chinese": "你听到什么了吗？",
						"french": "Tu entends quelque chose ?",
						"spanish": "¿Oyes algo?",
						"vietnamese": "Bạn có nghe thấy gì không?",
						"thai": "ได้ยินอะไรไหม?",
						"hindi": "क्या तुम्हें कुछ सुनाई दे रहा है?"
					}
				},
				{
					"content": {
						"korean": "아주 미세하게… 반복되는 멜로디가 들려. 데이터 사이에서.",
						"english": "Very faintly... I hear a repeating melody. Within the data.",
						"japanese": "微かに…繰り返されるメロディが聞こえる。データの間から。",
						"chinese": "非常微弱地……我听到一个重复的旋律。在数据之间。",
						"french": "Très faiblement... j'entends une mélodie répétitive. Au sein des données.",
						"spanish": "Muy débilmente... oigo una melodía repetitiva. Entre los datos.",
						"vietnamese": "Rất mơ hồ... tôi nghe thấy một giai điệu lặp lại. Giữa các dữ liệu.",
						"thai": "แผ่วเบามาก... ฉันได้ยินทำนองที่เล่นซ้ำๆ ท่ามกลางข้อมูล",
						"hindi": "बहुत ही धीमी आवाज़ में... मुझे एक दोहराई जाने वाली धुन सुनाई दे रही है। डेटा के बीच।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "이건 단순한 배경음이 아니야. 특정 데이터 루프와 연관되어 있어.",
						"english": "This isn't just background noise. It's connected to a specific data loop.",
						"japanese": "これは単なるBGMじゃない。特定のデータループと関連している。",
						"chinese": "这不只是背景音。它与特定的数据循环有关。",
						"french": "Ce n'est pas qu'un simple fond sonore. C'est lié à une boucle de données spécifique.",
						"spanish": "Esto no es solo ruido de fondo. Está conectado a un bucle de datos específico.",
						"vietnamese": "Đây không chỉ là âm thanh nền. Nó liên quan đến một vòng lặp dữ liệu cụ thể.",
						"thai": "นี่ไม่ใช่แค่เสียงแบ็คกราวด์ แต่มันเชื่อมโยงกับลูปข้อมูลเฉพาะ",
						"hindi": "यह सिर्फ़ बैकग्राउंड संगीत नहीं है। यह एक विशेष डेटा लूप से जुड़ा है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "lin"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "lin",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "멜로디는 점점 선명해졌다. 기분 나쁜 불협화음처럼 심장을 파고들었다.",
						"english": "The melody grew clearer, piercing my heart like an unsettling dissonance.",
						"japanese": "メロディーは次第に鮮明になり、不穏な不協和音のように心臓を突き刺した。",
						"chinese": "旋律越来越清晰，像刺耳的不和谐音一样刺入心脏。",
						"french": "La mélodie s'intensifiait, me transperçant le cœur comme une dissonance inquiétante.",
						"spanish": "La melodía se hizo más clara, perforando mi corazón como una disonancia inquietante.",
						"vietnamese": "Giai điệu ngày càng rõ ràng, đâm xuyên trái tim tôi như một sự bất hòa khó chịu.",
						"thai": "ท่วงทำนองชัดเจนขึ้นเรื่อยๆ ทิ่มแทงหัวใจราวกับเสียงที่ไม่ประสานกันและน่าขนลุก",
						"hindi": "धुन धीरे-धीरे स्पष्ट होती गई, एक बेचैन कर देने वाली बेसुरी आवाज़ की तरह दिल को भेदती हुई।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이 소리… 너무 불길해.",
						"english": "This sound... it's ominous.",
						"japanese": "この音… とても不吉だ。",
						"chinese": "这声音……太不祥了。",
						"french": "Ce son... il est si sinistre.",
						"spanish": "Este sonido... es muy siniestro.",
						"vietnamese": "Âm thanh này... quá đáng ngại.",
						"thai": "เสียงนี้… มันไม่เป็นมงคลเลย",
						"hindi": "यह आवाज़… बहुत अशुभ है।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "lin",
					"content": {
						"korean": "맞아. 이건 감정 에너지를 흡수하는 루프야. 세레니티가 약속한 평온, 그 이면의 진실이지.",
						"english": "Exactly. It's a loop that absorbs emotional energy. The truth behind the serenity Serenity promised.",
						"japanese": "そうだ。これは感情エネルギーを吸収するループだ。セレニティが約束した平穏、その裏にある真実だ。",
						"chinese": "没错。这是一个吸收情感能量的循环。宁静（Serenity）所承诺的平静，其背后的真相。",
						"french": "Exactement. C'est une boucle qui absorbe l'énergie émotionnelle. La vérité derrière la sérénité promise par Serenity.",
						"spanish": "Exacto. Es un bucle que absorbe energía emocional. La verdad detrás de la serenidad que Serenity prometió.",
						"vietnamese": "Đúng vậy. Đây là một vòng lặp hấp thụ năng lượng cảm xúc. Sự thật đằng sau sự bình yên mà Serenity đã hứa.",
						"thai": "ใช่เลย นี่คือลูปที่ดูดซับพลังงานทางอารมณ์ ความจริงที่ซ่อนอยู่เบื้องหลังความสงบที่ Serenity สัญญาไว้",
						"hindi": "सही है। यह एक ऐसा लूप है जो भावनात्मक ऊर्जा को सोखता है। सेरेनिटी द्वारा वादा की गई शांति के पीछे की सच्चाई।"
					}
				},
				{
					"content": {
						"korean": "그럼 우리가 감지했던 공허함도… 이 멜로디 때문이라고?",
						"english": "So the emptiness we felt... was because of this melody?",
						"japanese": "じゃあ、私たちが感じた虚無感も… このメロディーのせいなのか？",
						"chinese": "那么我们感受到的空虚感……也是因为这旋律吗？",
						"french": "Alors le vide que nous avons ressenti... était à cause de cette mélodie ?",
						"spanish": "¿Así que el vacío que sentimos... fue por esta melodía?",
						"vietnamese": "Vậy thì sự trống rỗng mà chúng ta cảm nhận được... cũng là do giai điệu này sao?",
						"thai": "แล้วความว่างเปล่าที่เราสัมผัสได้... ก็เพราะทำนองนี้เหรอ?",
						"hindi": "तो जो शून्यता हमने महसूस की थी... वह भी इस धुन की वजह से थी?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "가능성이 높아. 이 루프가 감정 에너지를 가두고 있어.",
						"english": "Highly likely. This loop is trapping emotional energy.",
						"japanese": "可能性は高い。このループが感情エネルギーを閉じ込めている。",
						"chinese": "可能性很高。这个循环正在困住情感能量。",
						"french": "C'est fort probable. Cette boucle piège l'énergie émotionnelle.",
						"spanish": "Es muy probable. Este bucle está atrapando energía emocional.",
						"vietnamese": "Rất có khả năng. Vòng lặp này đang giam giữ năng lượng cảm xúc.",
						"thai": "มีความเป็นไปได้สูง ลูปนี้กำลังกักเก็บพลังงานทางอารมณ์อยู่",
						"hindi": "संभावना ज़्यादा है। यह लूप भावनात्मक ऊर्जा को फँसा रहा है।"
					},
					"speaker": "lin",
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "lin",
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "멜로디는 이제 공간을 가득 채웠다. 탈출할 수 없는 덫처럼.",
						"english": "The melody now filled the space, like an inescapable trap.",
						"japanese": "メロディーは今や空間を満たし、逃れられない罠のようだった。",
						"chinese": "旋律现在充满了整个空间，像一个无法逃脱的陷阱。",
						"french": "La mélodie remplissait maintenant l'espace, comme un piège inéluctable.",
						"spanish": "La melodía ahora llenaba el espacio, como una trampa ineludible.",
						"vietnamese": "Giai điệu giờ đây tràn ngập không gian, như một cái bẫy không thể thoát ra.",
						"thai": "ท่วงทำนองตอนนี้เติมเต็มพื้นที่ ราวกับกับดักที่หนีไม่พ้น",
						"hindi": "धुन ने अब पूरे स्थान को भर दिया, एक ऐसे जाल की तरह जिससे बचा नहीं जा सकता।"
					}
				},
				{
					"content": {
						"korean": "더 깊이 들어가면 위험해. 이 멜로디의 핵심에 닿을 거야.",
						"english": "Going deeper is dangerous. We'll reach the core of this melody.",
						"japanese": "これ以上深く入ると危険だ。このメロディーの核心に触れることになる。",
						"chinese": "再深入就危险了。我们会触及到这旋律的核心。",
						"french": "Aller plus loin est dangereux. Nous atteindrons le cœur de cette mélodie.",
						"spanish": "Adentrarse más es peligroso. Alcanzaremos el núcleo de esta melodía.",
						"vietnamese": "Đi sâu hơn nữa sẽ nguy hiểm. Chúng ta sẽ chạm đến cốt lõi của giai điệu này.",
						"thai": "เข้าไปลึกกว่านี้อันตราย เราจะไปถึงแก่นของทำนองนี้",
						"hindi": "और गहरा जाना ख़तरनाक है। हम इस धुन के मूल तक पहुँच जाएँगे।"
					},
					"speaker": "lin",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그래서? 멈출 수 있어?",
						"english": "So? Can we stop it?",
						"japanese": "それで？止められるのか？",
						"chinese": "所以呢？能阻止它吗？",
						"french": "Alors ? On peut l'arrêter ?",
						"spanish": "¿Y qué? ¿Podemos detenerlo?",
						"vietnamese": "Vậy thì sao? Chúng ta có thể ngăn chặn nó không?",
						"thai": "แล้วไง? หยุดมันได้ไหม?",
						"hindi": "तो क्या? क्या हम इसे रोक सकते हैं?"
					}
				},
				{
					"content": {
						"korean": "…모르겠어. 하지만 분명히 이 멜로디를 통제하는 존재가 있을 거야.",
						"english": "...I don't know. But someone must be controlling this melody.",
						"japanese": "…分からない。だが、このメロディーを制御する存在が必ずいるはずだ。",
						"chinese": "……我不知道。但肯定有某个存在在控制着这旋律。",
						"french": "...Je ne sais pas. Mais quelqu'un doit contrôler cette mélodie.",
						"spanish": "...No lo sé. Pero seguro que hay alguien controlando esta melodía.",
						"vietnamese": "...Tôi không biết. Nhưng chắc chắn có một thực thể nào đó đang kiểm soát giai điệu này.",
						"thai": "…ไม่รู้สิ แต่ต้องมีใครบางคนกำลังควบคุมทำนองนี้อยู่แน่ๆ",
						"hindi": "…मुझे नहीं पता। लेकिन इस धुन को नियंत्रित करने वाला कोई तो ज़रूर होगा।"
					},
					"speaker": "lin",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "피할 수 없다면, 부숴버려야지.",
						"english": "If you can't avoid it, smash it!",
						"japanese": "避けられないなら、壊すしかない。",
						"chinese": "既然无法避免，那就摧毁它。",
						"french": "Si tu ne peux l'éviter, détruis-le !",
						"spanish": "Si no puedes evitarlo, ¡destrúyelo!",
						"vietnamese": "Nếu không thể tránh, thì phải phá hủy nó.",
						"thai": "ถ้าเลี่ยงไม่ได้ ก็ต้องทำลายมัน",
						"hindi": "अगर टाला नहीं जा सकता, तो उसे नष्ट करना होगा।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "가지 마! 이건 단순한 싸움이 아니야. 루프에 갇힐 수도 있어!",
						"english": "Don't go! This isn't just a fight. You could get trapped in the loop!",
						"japanese": "行かないで！これはただの戦いじゃない。ループに囚われるかもしれない！",
						"chinese": "别去！这不是一场简单的战斗。你可能会被困在循环中！",
						"french": "Ne pars pas ! Ce n'est pas un simple combat. Tu pourrais être piégé dans la boucle !",
						"spanish": "¡No vayas! No es una simple pelea. ¡Podrías quedar atrapado en el bucle!",
						"vietnamese": "Đừng đi! Đây không phải là một cuộc chiến đơn thuần. Ngươi có thể bị kẹt trong vòng lặp đấy!",
						"thai": "อย่าไปนะ! นี่ไม่ใช่แค่การต่อสู้ธรรมดา. นายอาจติดอยู่ในวงวนได้!",
						"hindi": "मत जाओ! यह सिर्फ एक लड़ाई नहीं है। तुम लूप में फंस सकते हो!"
					}
				},
				{
					"content": {
						"korean": "….",
						"english": "....",
						"japanese": "....",
						"chinese": "....",
						"french": "....",
						"spanish": "....",
						"vietnamese": "....",
						"thai": "....",
						"hindi": "...."
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "어리석군. 이 루프는 절대 깨지지 않아.",
						"english": "Foolish. This loop can never be broken.",
						"japanese": "愚かな。このループは決して破られない。",
						"chinese": "愚蠢。这个循环永远不会被打破。",
						"french": "Stupide. Cette boucle ne sera jamais brisée.",
						"spanish": "Qué necio. Este bucle jamás se romperá.",
						"vietnamese": "Ngu ngốc. Vòng lặp này không thể phá vỡ.",
						"thai": "โง่เขลา วงวนนี้ไม่มีวันแตกหัก",
						"hindi": "मूर्ख। यह लूप कभी नहीं टूटेगा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "네 절망마저, 이 멜로디를 더욱 강렬하게 만들 뿐.",
						"english": "Even your despair only intensifies this melody.",
						"japanese": "お前の絶望さえ、このメロディをさらに強烈にするだけだ。",
						"chinese": "你的绝望，只会让这旋律更加强烈。",
						"french": "Même ton désespoir ne fait qu'intensifier cette mélodie.",
						"spanish": "Incluso tu desesperación solo intensifica esta melodía.",
						"vietnamese": "Ngay cả sự tuyệt vọng của ngươi cũng chỉ làm giai điệu này thêm mãnh liệt.",
						"thai": "แม้ความสิ้นหวังของเจ้าก็แค่ทำให้ท่วงทำนองนี้เข้มข้นขึ้น",
						"hindi": "तुम्हारा निराशा भी इस धुन को और तीव्र ही बनाएगा।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아직… 끝나지 않았어…!",
						"english": "It's not... over yet...!",
						"japanese": "まだ… 終わってない…！",
						"chinese": "还没… 结束…！",
						"french": "Ce n'est pas... encore fini... !",
						"spanish": "¡Aún... no ha terminado...!",
						"vietnamese": "Vẫn chưa... kết thúc...!",
						"thai": "ยัง...ไม่จบ...!",
						"hindi": "अभी... खत्म नहीं हुआ है...!"
					}
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "크윽… 멈춘다고… 생각하나…?",
						"english": "Ugh... You think... this will stop...?",
						"japanese": "ぐっ…止まる…と…思うのか…？",
						"chinese": "呃啊…你以为…会停止…吗？",
						"french": "Ugh... Tu crois... que ça va s'arrêter... ?",
						"spanish": "Ugh... ¿Crees... que esto se detendrá...?",
						"vietnamese": "Khụ... Ngươi nghĩ... nó sẽ dừng lại... sao?",
						"thai": "อึก… เจ้าคิดว่า… มันจะหยุด… หรือไง…?",
						"hindi": "उफ़... तुम सोचते हो... यह रुक जाएगा...?"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 멜로디는… 시작에 불과해… 진짜 지휘자는… 따로… 있다…",
						"english": "This melody... merely a prelude... The true conductor... awaits...",
						"japanese": "このメロディは… 序章に過ぎない… 本当の指揮者は… 別に… いる…",
						"chinese": "这旋律… 只是个开始… 真正的指挥者… 另有其人…",
						"french": "Cette mélodie... n'est qu'un prélude... Le véritable chef... est ailleurs...",
						"spanish": "Esta melodía... es solo el principio... El verdadero director... está en otro lugar...",
						"vietnamese": "Giai điệu này... chỉ là khởi đầu... Người chỉ huy thực sự... vẫn còn đó...",
						"thai": "ท่วงทำนองนี้...เป็นเพียงจุดเริ่มต้น...วาทยกรที่แท้จริง...ยังคงอยู่...",
						"hindi": "यह धुन... बस एक शुरुआत है... असली कंडक्टर... कोई और है..."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "뭐? 지휘자라니…?",
						"english": "What? A conductor...?",
						"japanese": "何？ 指揮者だと…？",
						"chinese": "什么？ 指挥者…？",
						"french": "Quoi ? Un chef d'orchestre... ?",
						"spanish": "¿Qué? ¿Un director...?",
						"vietnamese": "Gì cơ? Người chỉ huy à...?",
						"thai": "อะไรนะ? วาทยกร...?",
						"hindi": "क्या? एक कंडक्टर...?"
					}
				},
				{
					"content": {
						"korean": "정체 모를 자는 사라졌다. 하지만 멜로디의 잔상은 사라지지 않았다. 세레니티의 심연에는 더 깊은 악보가 숨겨져 있었다.",
						"english": "The unknown figure vanished. Yet, the melody's lingering echo remained. A deeper score lay hidden within Serenity's abyss.",
						"japanese": "正体不明の者は消え去った。しかし、メロディの残響は消えなかった。セレニティの深淵には、さらに深い楽譜が隠されていた。",
						"chinese": "身份不明者消失了。然而，旋律的残响并未散去。寂静深渊中，隐藏着更深层的乐谱。",
						"french": "L'inconnu disparut. Pourtant, l'écho persistant de la mélodie demeura. Une partition plus profonde était cachée dans l'abîme de la Sérénité.",
						"spanish": "La figura desconocida desapareció. Sin embargo, el eco persistente de la melodía se mantuvo. Una partitura más profunda yacía oculta en el abismo de Serenity.",
						"vietnamese": "Kẻ bí ẩn biến mất. Tuy nhiên, dư âm của giai điệu không tan. Trong vực sâu của Serenity, một bản nhạc sâu hơn đang ẩn giấu.",
						"thai": "บุคคลนิรนามหายตัวไป แต่เสียงสะท้อนของท่วงทำนองยังคงอยู่ เบื้องลึกของเซเรนิตี้ซ่อนโน้ตเพลงที่ลึกซึ้งกว่าไว้",
						"hindi": "अज्ञात आकृति गायब हो गई। फिर भी, धुन की गूंज बनी रही। सेरेनिटी के रसातल में एक गहरा स्कोर छिपा हुआ था।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "멜로디의 근원. 그곳에 거대한 그림자가 기다리고 있었다.",
						"english": "The source of the melody. A massive shadow awaited there.",
						"japanese": "旋律の根源。そこに巨大な影が待ち構えていた。",
						"chinese": "旋律的源头。一个巨大的黑影在那里等待着。",
						"french": "La source de la mélodie. Une ombre gigantesque y attendait.",
						"spanish": "La fuente de la melodía. Una sombra gigantesca esperaba allí.",
						"vietnamese": "Nguồn gốc của giai điệu. Một cái bóng khổng lồ đang chờ đợi ở đó.",
						"thai": "ต้นกำเนิดของทำนองเพลง ที่นั่นมีเงามืดขนาดมหึมารออยู่.",
						"hindi": "धुन का स्रोत। वहाँ एक विशाल छाया प्रतीक्षा कर रही थी।"
					}
				},
				{
					"content": {
						"korean": "왔군. 이 지겨운 멜로디를 멈추려는 자인가?",
						"english": "You've come. Are you the one who seeks to stop this tiresome melody?",
						"japanese": "来たか。このうんざりする旋律を止めようとする者か？",
						"chinese": "你来了。是想阻止这令人厌倦的旋律之人吗？",
						"french": "Te voilà. Es-tu celui qui cherche à arrêter cette mélodie ennuyeuse ?",
						"spanish": "Has venido. ¿Eres tú quien busca detener esta melodía tediosa?",
						"vietnamese": "Ngươi đã đến. Ngươi là kẻ muốn ngăn chặn giai điệu nhàm chán này sao?",
						"thai": "เจ้ามาแล้วรึ. เจ้าคือผู้ที่ต้องการหยุดทำนองอันน่าเบื่อหน่ายนี้หรือ?",
						"hindi": "तुम आ गए। क्या तुम ही वह हो जो इस उबाऊ धुन को रोकना चाहते हो?"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "하지만 넌 그저 또 다른 연주자일 뿐. 루프는 계속될 것이다.",
						"english": "But you are merely another performer. The loop will continue.",
						"japanese": "しかしお前は、ただの別の演奏者にすぎない。ループは続くだろう。",
						"chinese": "但你不过是另一个演奏者。循环将继续下去。",
						"french": "Mais tu n'es qu'un autre interprète. La boucle continuera.",
						"spanish": "Pero no eres más que otro intérprete. El bucle continuará.",
						"vietnamese": "Nhưng ngươi chỉ là một người biểu diễn khác thôi. Vòng lặp sẽ tiếp diễn.",
						"thai": "แต่เจ้าก็เป็นเพียงนักแสดงอีกคนหนึ่งเท่านั้น. วงวนนี้จะยังคงดำเนินต่อไป.",
						"hindi": "लेकिन तुम तो बस एक और कलाकार हो। लूप चलता रहेगा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "시끄러워! 네 멋대로 사람들의 감정을 가두지 마!",
						"english": "Shut up! Don't trap people's emotions as you please!",
						"japanese": "静かにしろ！勝手に人々の感情を閉じ込めるな！",
						"chinese": "闭嘴！别擅自囚禁人们的情感！",
						"french": "Tais-toi ! Ne t'avise pas d'emprisonner les émotions des gens comme ça !",
						"spanish": "¡Cállate! ¡No encierres las emociones de la gente a tu antojo!",
						"vietnamese": "Im đi! Đừng tùy tiện giam cầm cảm xúc của mọi người!",
						"thai": "หุบปาก! อย่ามากักขังอารมณ์ของผู้คนตามใจชอบนะ!",
						"hindi": "चुप हो जाओ! लोगों की भावनाओं को अपनी मर्जी से कैद मत करो!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "자유? 그건 고통의 다른 이름일 뿐. 영원한 평온이야말로 진정한 구원.",
						"english": "Freedom? That's just another name for pain. Eternal tranquility is true salvation.",
						"japanese": "自由？それは苦痛の別の名にすぎない。永遠の平穏こそが真の救済だ。",
						"chinese": "自由？那不过是痛苦的另一个名字。永恒的宁静才是真正的救赎。",
						"french": "La liberté ? Ce n'est qu'un autre nom pour la douleur. La tranquillité éternelle est le véritable salut.",
						"spanish": "¿Libertad? Eso es solo otro nombre para el dolor. La tranquilidad eterna es la verdadera salvación.",
						"vietnamese": "Tự do? Đó chỉ là một tên gọi khác của nỗi đau. Sự yên bình vĩnh cửu mới là sự cứu rỗi đích thực.",
						"thai": "อิสรภาพ? มันก็แค่ชื่อเรียกอื่นของความเจ็บปวดเท่านั้นแหละ. ความสงบสุขนิรันดร์ต่างหากคือหนทางแห่งการไถ่บาปที่แท้จริง.",
						"hindi": "आज़ादी? वह तो बस दर्द का दूसरा नाम है। शाश्वत शांति ही सच्ची मुक्ति है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "네 감정마저, 이 루프의 일부가 될 것이다.",
						"english": "Even your emotions will become part of this loop.",
						"japanese": "お前の感情すらも、このループの一部となるだろう。",
						"chinese": "甚至你的情感，也将成为这个循环的一部分。",
						"french": "Même tes émotions feront partie de cette boucle.",
						"spanish": "Incluso tus emociones se convertirán en parte de este bucle.",
						"vietnamese": "Ngay cả cảm xúc của ngươi cũng sẽ trở thành một phần của vòng lặp này.",
						"thai": "แม้แต่อารมณ์ของเจ้า ก็จะกลายเป็นส่วนหนึ่งของวงวนนี้.",
						"hindi": "तुम्हारी भावनाएँ भी, इस लूप का हिस्सा बन जाएँगी।"
					}
				}
			]
		}
	]
} as const;
