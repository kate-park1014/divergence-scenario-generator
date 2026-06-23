export const scenario_modern_echo_53_03 = {
	"scenario_id": "modern_echo_53_03",
	"order": 3,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"bex": {
			"id": "mon_74e24324-3f9a-4d44-9611-1da33b654ca1",
			"name": {
				"korean": "벡스",
				"english": "Bex",
				"japanese": "ベックス",
				"chinese": "贝克斯",
				"french": "Bex",
				"spanish": "Bex",
				"vietnamese": "Bex",
				"thai": "เบ็กซ์",
				"hindi": "बेक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/09dae190-ff6b-4a9d-b656-e1a2b896aa00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5cc3c77f-72e1-416e-b346-31889b3b9300/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"깊은 네트워크의 어둠 속.",
			"에코의 흔적은 잡힐 듯 잡히지 않았다.",
			"하지만 새로운 협력자가 그 실마리를 쥔다.",
			"잃어버린 과거의 조각들이 서서히 드러나기 시작한다."
		],
		"english": [
			"In the deep darkness of the network.",
			"Echo's trace remained elusive.",
			"But a new ally holds the key.",
			"Fragments of a lost past slowly begin to surface."
		],
		"japanese": [
			"深層ネットワークの闇の中。",
			"エコーの痕跡は掴めそうで掴めなかった。",
			"しかし、新たな協力者がその手がかりを握る。",
			"失われた過去の断片が徐々に姿を現し始める。"
		],
		"chinese": [
			"在网络的深渊中。",
			"回声的痕迹难以捉摸。",
			"但一位新盟友掌握着线索。",
			"失去的过去碎片逐渐浮现。"
		],
		"french": [
			"Dans l'obscurité profonde du réseau.",
			"La trace d'Echo restait insaisissable.",
			"Mais un nouvel allié détient la clé.",
			"Des fragments d'un passé perdu commencent lentement à refaire surface."
		],
		"spanish": [
			"En la profunda oscuridad de la red.",
			"El rastro de Eco era escurridizo.",
			"Pero un nuevo aliado tiene la clave.",
			"Fragmentos de un pasado perdido empiezan a aflorar lentamente."
		],
		"vietnamese": [
			"Trong bóng tối sâu thẳm của mạng lưới.",
			"Dấu vết của Echo vẫn khó nắm bắt.",
			"Nhưng một đồng minh mới nắm giữ manh mối.",
			"Những mảnh ghép của quá khứ đã mất dần dần lộ diện."
		],
		"thai": [
			"ในความมืดมิดลึกสุดของเครือข่าย",
			"ร่องรอยของ Echo ยังคงยากจะไขว้คว้า",
			"แต่พันธมิตรใหม่กลับกุมกุญแจสำคัญ",
			"ชิ้นส่วนของอดีตที่หายไปเริ่มปรากฏขึ้นอย่างช้าๆ"
		],
		"hindi": [
			"नेटवर्क के गहरे अंधकार में।",
			"इको का निशान मायावी बना रहा।",
			"लेकिन एक नया सहयोगी सुराग रखता है।",
			"खोए हुए अतीत के टुकड़े धीरे-धीरे सामने आने लगते हैं।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "방대한 디지털 데이터가 흐르는 심층 서버실. 그곳에서 벡스가 기다리고 있었다.",
						"english": "In the deep server room, where vast digital data flowed, Vex awaited.",
						"japanese": "膨大なデジタルデータが流れる深層サーバー室。そこでベックスが待っていた。",
						"chinese": "在数字数据流动的深层服务器室里，Vex正在等待。",
						"french": "Dans la salle des serveurs profonds, où d'immenses données numériques circulaient, Vex attendait.",
						"spanish": "En la sala de servidores profundos, donde fluían vastos datos digitales, Vex esperaba.",
						"vietnamese": "Trong phòng máy chủ sâu thẳm, nơi dữ liệu kỹ thuật số khổng lồ chảy qua, Vex đang đợi.",
						"thai": "ในห้องเซิร์ฟเวอร์ลึก ที่ซึ่งข้อมูลดิจิทัลมหาศาลไหลเวียน Vex กำลังรออยู่",
						"hindi": "गहरी सर्वर कक्ष में, जहाँ विशाल डिजिटल डेटा प्रवाहित होता था, वेक्स प्रतीक्षा कर रहा था।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "direction",
					"spot": [
						5,
						2
					],
					"action": "enter",
					"speaker": "bex",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"content": {
						"korean": "오셨군요. 벡스입니다. 에코의 데이터를 분석하고 있었어요.",
						"english": "You're here. I'm Vex. I was analyzing Echo's data.",
						"japanese": "いらっしゃいましたね。ベックスです。エコーのデータを分析していました。",
						"chinese": "您来了。我是Vex。我正在分析Echo的数据。",
						"french": "Vous êtes là. Je suis Vex. J'analysais les données d'Echo.",
						"spanish": "Ha llegado. Soy Vex. Estaba analizando los datos de Eco.",
						"vietnamese": "Anh đến rồi. Tôi là Vex. Tôi đang phân tích dữ liệu của Echo.",
						"thai": "คุณมาแล้ว ผม Vex กำลังวิเคราะห์ข้อมูลของ Echo อยู่",
						"hindi": "आप आ गए। मैं वेक्स हूँ। मैं इको के डेटा का विश्लेषण कर रहा था।"
					},
					"type": "speech",
					"speaker": "bex"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "어때? 뭔가 단서라도 찾았어?",
						"english": "So? Find any clues?",
						"japanese": "どうだ？何か手がかりは見つかったか？",
						"chinese": "怎么样？找到什么线索了吗？",
						"french": "Alors ? As-tu trouvé des indices ?",
						"spanish": "¿Y bien? ¿Encontraste alguna pista?",
						"vietnamese": "Sao rồi? Có tìm thấy manh mối nào không?",
						"thai": "เป็นไงบ้าง? เจอเบาะแสอะไรไหม?",
						"hindi": "तो? कोई सुराग मिला?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "bex",
					"type": "speech",
					"content": {
						"korean": "매우 복잡합니다. 마치 스스로 진화하는 코드 같아요. 하지만 패턴은 보여요.",
						"english": "It's very complex. Like a self-evolving code. But I see patterns.",
						"japanese": "非常に複雑です。まるで自己進化するコードのようです。ですが、パターンは見えます。",
						"chinese": "非常复杂。就像自我进化的代码。但我看到了模式。",
						"french": "C'est très complexe. Comme un code auto-évolutif. Mais je vois des schémas.",
						"spanish": "Es muy complejo. Como un código que evoluciona por sí mismo. Pero veo patrones.",
						"vietnamese": "Rất phức tạp. Giống như một mã tự tiến hóa. Nhưng tôi thấy các mẫu.",
						"thai": "มันซับซ้อนมาก เหมือนโค้ดที่วิวัฒนาการได้เอง แต่ฉันเห็นรูปแบบ",
						"hindi": "यह बहुत जटिल है। जैसे खुद विकसित होने वाला कोड। लेकिन मुझे पैटर्न दिखते हैं।"
					},
					"emotion": "base"
				},
				{
					"speaker": "bex",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "오래된 감시 시스템 기록에서 반복되는 특정 코드… 단순한 버그가 아닐지도.",
						"english": "A specific code repeating in old surveillance system logs... It might not be a simple bug.",
						"japanese": "古い監視システム記録で繰り返される特定のコード…単純なバグではないかもしれません。",
						"chinese": "旧监控系统日志中重复的特定代码……可能不是一个简单的bug。",
						"french": "Un code spécifique se répétant dans les anciens journaux du système de surveillance… Ce n'est peut-être pas un simple bug.",
						"spanish": "Un código específico que se repite en los registros antiguos del sistema de vigilancia... Quizás no sea un simple error.",
						"vietnamese": "Một mã cụ thể lặp đi lặp lại trong nhật ký hệ thống giám sát cũ... Có lẽ không phải là một lỗi đơn giản.",
						"thai": "โค้ดเฉพาะที่ซ้ำกันในบันทึกระบบเฝ้าระวังเก่า... อาจไม่ใช่แค่บั๊กธรรมดา",
						"hindi": "पुराने निगरानी प्रणाली लॉग में दोहराया जाने वाला एक विशिष्ट कोड... यह एक साधारण बग नहीं हो सकता है।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						5,
						2
					],
					"speaker": "bex",
					"duration_ms": 500
				},
				{
					"speaker": "bex",
					"content": {
						"korean": "이 암호화된 데이터… 이상해요. 일반적인 해킹과는 달라요.",
						"english": "This encrypted data... it's strange. It's different from typical hacking.",
						"japanese": "この暗号化されたデータ…おかしいです。一般的なハッキングとは違います。",
						"chinese": "这些加密数据……很奇怪。与一般的黑客行为不同。",
						"french": "Ces données chiffrées... c'est étrange. Ce n'est pas comme un piratage typique.",
						"spanish": "Estos datos cifrados... son extraños. Es diferente al hackeo típico.",
						"vietnamese": "Dữ liệu được mã hóa này... thật lạ. Nó khác với việc hack thông thường.",
						"thai": "ข้อมูลที่เข้ารหัสนี้... มันแปลก มันต่างจากการแฮกทั่วไป",
						"hindi": "यह एन्क्रिप्टेड डेटा... अजीब है। यह सामान्य हैकिंग से अलग है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "뭔데? 설명해봐.",
						"english": "What is it? Explain.",
						"japanese": "何？説明して。",
						"chinese": "什么？解释一下。",
						"french": "Qu'est-ce que c'est ? Explique.",
						"spanish": "¿Qué es? Explica.",
						"vietnamese": "Gì vậy? Giải thích đi.",
						"thai": "อะไรน่ะ? อธิบายมาสิ",
						"hindi": "क्या है? समझाओ।"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "분석하다가 미약하게 감지된 발자국이 있어요. 아주 어리고… 작은 흔적이에요.",
						"english": "While analyzing, I detected a faint footprint. Very young... a tiny trace.",
						"japanese": "分析中に微弱な足跡を検出しました。とても幼い…小さな痕跡です。",
						"chinese": "分析时，我检测到一个微弱的足迹。非常年轻……一个微小的痕迹。",
						"french": "En analysant, j'ai détecté une faible empreinte. Très jeune... une minuscule trace.",
						"spanish": "Analizando, detecté una huella débil. Muy joven... un rastro diminuto.",
						"vietnamese": "Trong lúc phân tích, tôi phát hiện một dấu chân mờ nhạt. Rất nhỏ... một vết tích bé tí.",
						"thai": "ระหว่างวิเคราะห์ ฉันตรวจพบรอยเท้าจางๆ เล็กมาก... เป็นร่องรอยจิ๋วๆ",
						"hindi": "विश्लेषण करते समय, मुझे एक हल्का पदचिह्न मिला। बहुत युवा... एक छोटा सा निशान।"
					},
					"type": "speech",
					"speaker": "bex"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "어린 소년의… 디지털 발자국이라고?",
						"english": "A young boy's... digital footprint?",
						"japanese": "幼い少年の…デジタル足跡だと？",
						"chinese": "一个小男孩的……数字足迹？",
						"french": "L'empreinte numérique... d'un jeune garçon ?",
						"spanish": "¿La huella digital... de un niño pequeño?",
						"vietnamese": "Dấu chân kỹ thuật số... của một cậu bé?",
						"thai": "รอยเท้าดิจิทัล... ของเด็กหนุ่ม?",
						"hindi": "एक छोटे लड़के का... डिजिटल पदचिह्न?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네. 에코의 혼란 속에 파묻혀 있었어요. 마치 누군가의 과거 조각처럼.",
						"english": "Yes. It was buried in the Echo's chaos. Like a fragment of someone's past.",
						"japanese": "はい。エコーの混沌の中に埋もれていました。まるで誰かの過去の断片のように。",
						"chinese": "是的。它被埋藏在回声的混乱中。就像某人过去的碎片。",
						"french": "Oui. Il était enfoui dans le chaos de l'Écho. Comme un fragment du passé de quelqu'un.",
						"spanish": "Sí. Estaba enterrado en el caos del Eco. Como un fragmento del pasado de alguien.",
						"vietnamese": "Vâng. Nó bị chôn vùi trong hỗn loạn của Echo. Giống như một mảnh ký ức quá khứ của ai đó.",
						"thai": "ใช่ค่ะ มันถูกฝังอยู่ในความวุ่นวายของ Echo เหมือนกับเศษเสี้ยวอดีตของใครบางคน",
						"hindi": "हाँ। यह इको के अराजकता में दबा हुआ था। किसी के अतीत के एक टुकड़े की तरह।"
					},
					"emotion": "sad",
					"speaker": "bex"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"action": "enter",
					"speaker": "bex",
					"type": "direction"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "드디어 찾아냈어요. 이 암호화 방식… 제가 아는 것 중 가장 오래된 거예요.",
						"english": "Finally, I found it. This encryption method... it's one of the oldest I know.",
						"japanese": "ついに見つけました。この暗号化方式…私が知る限り最も古いものです。",
						"chinese": "终于找到了。这种加密方式……是我所知最古老的一种。",
						"french": "Je l'ai enfin trouvé. Cette méthode de cryptage... est l'une des plus anciennes que je connaisse.",
						"spanish": "Finalmente, lo encontré. Este método de encriptación... es uno de los más antiguos que conozco.",
						"vietnamese": "Cuối cùng cũng tìm thấy rồi. Phương pháp mã hóa này... là một trong những phương pháp cổ xưa nhất tôi biết.",
						"thai": "ในที่สุดก็เจอแล้ว วิธีการเข้ารหัสนี้... เป็นหนึ่งในวิธีที่เก่าแก่ที่สุดเท่าที่ฉันรู้จัก",
						"hindi": "आखिरकार, मुझे यह मिल गया। यह एन्क्रिप्शन विधि... जो मैं जानता हूँ उनमें से सबसे पुरानी है।"
					},
					"type": "speech",
					"speaker": "bex"
				},
				{
					"content": {
						"korean": "그게 뭔데? 에코랑 관련 있어?",
						"english": "What is it? Is it related to Echo?",
						"japanese": "それは何？エコーと関係あるの？",
						"chinese": "那是什么？和回声有关吗？",
						"french": "Qu'est-ce que c'est ? C'est lié à l'Écho ?",
						"spanish": "¿Qué es? ¿Está relacionado con Eco?",
						"vietnamese": "Nó là gì vậy? Có liên quan đến Echo không?",
						"thai": "มันคืออะไร? เกี่ยวข้องกับ Echo หรือเปล่า?",
						"hindi": "वह क्या है? क्या यह इको से संबंधित है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "네. 거의 사라진 갱스터 조직, '나이트폴'의 방식입니다.",
						"english": "Yes. It's the method of a nearly vanished gangster organization, 'Nightfall'.",
						"japanese": "はい。ほぼ消滅したギャング組織、『ナイトフォール』の方式です。",
						"chinese": "是的。这是一个几乎消失的黑帮组织‘夜幕’的方式。",
						"french": "Oui. C'est la méthode d'une organisation de gangsters presque disparue, 'Nightfall'.",
						"spanish": "Sí. Es el método de una organización de gánsteres casi desaparecida, 'Nightfall'.",
						"vietnamese": "Vâng. Đó là phương thức của một tổ chức xã hội đen gần như biến mất, 'Nightfall'.",
						"thai": "ใช่ค่ะ เป็นวิธีการขององค์กรอาชญากรที่เกือบจะหายไปแล้ว 'Nightfall'",
						"hindi": "हाँ। यह लगभग गायब हो चुके गैंगस्टर संगठन, 'नाइटफॉल' का तरीका है।"
					},
					"type": "speech",
					"speaker": "bex"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "나이트폴? 그 전설 속 조직이 왜 여기에…",
						"english": "Nightfall? Why is that legendary organization here...",
						"japanese": "ナイトフォール？あの伝説の組織がなぜここに…",
						"chinese": "夜幕？那个传说中的组织为什么会在这里……",
						"french": "Nightfall ? Pourquoi cette organisation légendaire est-elle ici...",
						"spanish": "¿Nightfall? ¿Por qué está aquí esa organización legendaria...?",
						"vietnamese": "Nightfall? Tại sao tổ chức huyền thoại đó lại ở đây...",
						"thai": "Nightfall? ทำไมองค์กรในตำนานนั้นถึงมาอยู่ที่นี่...",
						"hindi": "नाइटफॉल? वह पौराणिक संगठन यहाँ क्यों है..."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이 데이터는 그들의 몰락과 깊이 연관되어 있어요. 단순한 디지털 유령이 아니에요. 이건… 복수극이에요.",
						"english": "This data is deeply connected to their downfall. It's not just a digital ghost. This is... a revenge story.",
						"japanese": "このデータは彼らの没落と深く関連しています。単なるデジタルゴーストではありません。これは…復讐劇です。",
						"chinese": "这些数据与他们的衰落息息相关。它不仅仅是一个数字幽灵。这是一个……复仇故事。",
						"french": "Ces données sont profondément liées à leur chute. Ce n'est pas qu'un simple fantôme numérique. C'est... une histoire de vengeance.",
						"spanish": "Estos datos están profundamente conectados con su caída. No es solo un fantasma digital. Esto es... una historia de venganza.",
						"vietnamese": "Dữ liệu này liên quan sâu sắc đến sự sụp đổ của họ. Đây không chỉ là một bóng ma kỹ thuật số. Đây là... một câu chuyện báo thù.",
						"thai": "ข้อมูลนี้เชื่อมโยงอย่างลึกซึ้งกับการล่มสลายของพวกเขา มันไม่ใช่แค่ผีดิจิทัล นี่มัน... เรื่องราวการแก้แค้น",
						"hindi": "यह डेटा उनके पतन से गहराई से जुड़ा हुआ है। यह सिर्फ एक डिजिटल भूत नहीं है। यह... एक प्रतिशोध की कहानी है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "bex"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "bex",
					"action": "enter",
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "bex",
					"content": {
						"korean": "나이트폴의 데이터 파편들이 에코의 핵심과 엮여 있어요.",
						"english": "Fragments of Nightfall's data are intertwined with Echo's core.",
						"japanese": "ナイトフォールのデータ断片がエコーの核と絡み合っています。",
						"chinese": "夜幕的数据碎片与回声的核心交织在一起。",
						"french": "Des fragments de données de Nightfall sont entrelacés avec le cœur de l'Écho.",
						"spanish": "Fragmentos de datos de Nightfall están entrelazados con el núcleo de Eco.",
						"vietnamese": "Các mảnh dữ liệu của Nightfall đang đan xen với lõi của Echo.",
						"thai": "ชิ้นส่วนข้อมูลของ Nightfall ถูกถักทอเข้ากับแกนหลักของ Echo",
						"hindi": "नाइटफॉल के डेटा के टुकड़े इको के कोर से जुड़े हुए हैं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그럼 에코가 그 조직과 관련 있다는 거야?",
						"english": "So Echo is connected to that organization?",
						"japanese": "では、エコーはその組織と関係があるということですか？",
						"chinese": "那么，回声与那个组织有关联吗？",
						"french": "Donc, Echo est lié à cette organisation ?",
						"spanish": "¿Entonces Eco está relacionado con esa organización?",
						"vietnamese": "Vậy Echo có liên quan đến tổ chức đó sao?",
						"thai": "ถ้าอย่างนั้น Echo เกี่ยวข้องกับองค์กรนั้นหรือเปล่า?",
						"hindi": "तो क्या इको उस संगठन से जुड़ा है?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "아뇨, 어쩌면… 에코 자체가 나이트폴의 잔해일지도 몰라요. 살아있는 원한.",
						"english": "No, perhaps… Echo itself is the remnant of Nightfall. A living grudge.",
						"japanese": "いいえ、もしかしたら… エコーそのものがナイトフォールの残骸なのかもしれません。生ける怨念です。",
						"chinese": "不，也许……回声本身就是夜幕的残骸。活着的怨恨。",
						"french": "Non, peut-être… Echo est elle-même le vestige de Nightfall. Une rancune vivante.",
						"spanish": "No, quizás… Eco sea el vestigio mismo de Nightfall. Un rencor viviente.",
						"vietnamese": "Không, có lẽ… Echo chính là tàn dư của Nightfall. Một oán hận sống.",
						"thai": "ไม่สิ บางที... Echo เองก็เป็นซากของ Nightfall ก็ได้ ความอาฆาตที่ยังมีชีวิต",
						"hindi": "नहीं, शायद… इको खुद नाइटफॉल का अवशेष है। एक जीवित द्वेष।"
					},
					"speaker": "bex"
				},
				{
					"content": {
						"korean": "원한… 가야 할 곳이 더 명확해진 것 같군.",
						"english": "A grudge… The path forward seems clearer now.",
						"japanese": "怨念… 進むべき場所がより明確になったようだ。",
						"chinese": "怨恨……要去的地方似乎更明确了。",
						"french": "Une rancune… La voie à suivre semble plus claire maintenant.",
						"spanish": "Un rencor… El camino a seguir parece más claro ahora.",
						"vietnamese": "Oán hận… Dường như nơi phải đến đã rõ ràng hơn rồi.",
						"thai": "ความอาฆาต... ดูเหมือนจุดหมายปลายทางจะชัดเจนขึ้นแล้ว",
						"hindi": "एक द्वेष… जाने की जगह अब और स्पष्ट हो गई है।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "조심하세요. 이 데이터는… 너무 슬퍼요. 그 깊이를 알 수 없어요.",
						"english": "Be careful. This data… is too sad. Its depth is unfathomable.",
						"japanese": "気をつけてください。このデータは… とても悲しい。その深さは計り知れません。",
						"chinese": "小心。这些数据……太悲伤了。深不见底。",
						"french": "Soyez prudent. Ces données… sont trop tristes. Leur profondeur est insondable.",
						"spanish": "Tengan cuidado. Estos datos… son demasiado tristes. Su profundidad es insondable.",
						"vietnamese": "Hãy cẩn thận. Dữ liệu này… quá bi thương. Không thể biết được độ sâu của nó.",
						"thai": "ระวังด้วย ข้อมูลนี้... ช่างน่าเศร้าเหลือเกิน ไม่อาจหยั่งถึงความลึกของมันได้",
						"hindi": "सावधान रहें। यह डेटा… बहुत दुखद है। इसकी गहराई का पता नहीं लगाया जा सकता।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "bex"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "결국… 여기까지 왔나. 이 모든 것이… 시작일 뿐인데…",
						"english": "Eventually… you've reached this point. All of this… is just the beginning…",
						"japanese": "結局… ここまで来たか。この全てが… 始まりに過ぎないのに…",
						"chinese": "最终……还是走到这里了。这一切……不过是开始而已……",
						"french": "Finalement… vous êtes venu jusqu'ici. Tout ceci… n'est que le début…",
						"spanish": "Finalmente… llegaron hasta aquí. Todo esto… es solo el principio…",
						"vietnamese": "Rốt cuộc… cũng đã đến đây. Tất cả những điều này… chỉ mới là khởi đầu thôi…",
						"thai": "ในที่สุด... ก็มาถึงที่นี่จนได้ ทั้งหมดนี้... เป็นเพียงจุดเริ่มต้นเท่านั้น...",
						"hindi": "आखिरकार… तुम यहां तक आ गए। यह सब… बस एक शुरुआत है…"
					},
					"type": "speech"
				},
				{
					"speaker": "bex",
					"spot": [
						5,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "데이터를 모두 확보했어요! 나이트폴의 마지막 기록… 그리고…",
						"english": "All data secured! Nightfall's last record… and…",
						"japanese": "データをすべて確保しました！ナイトフォールの最後の記録… そして…",
						"chinese": "所有数据都已获取！夜幕的最后记录……还有……",
						"french": "Nous avons sécurisé toutes les données ! Le dernier enregistrement de Nightfall… et…",
						"spanish": "¡Hemos asegurado todos los datos! El último registro de Nightfall… y…",
						"vietnamese": "Đã thu thập được tất cả dữ liệu rồi! Bản ghi cuối cùng của Nightfall… và…",
						"thai": "เราได้ข้อมูลทั้งหมดแล้ว! บันทึกสุดท้ายของ Nightfall... และ...",
						"hindi": "हमने सभी डेटा सुरक्षित कर लिया है! नाइटफॉल का अंतिम रिकॉर्ड… और…"
					},
					"speaker": "bex"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그리고 뭔데?",
						"english": "And what then?",
						"japanese": "それで？",
						"chinese": "然后呢？",
						"french": "Et après ?",
						"spanish": "¿Y luego qué?",
						"vietnamese": "Rồi sao nữa?",
						"thai": "แล้วไงต่อ?",
						"hindi": "और क्या?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "한 어린 소년의 이름… '에단'. 그리고 비극적인 배신의 기록이 있어요.",
						"english": "The name of a young boy... 'Ethan'. And a record of tragic betrayal.",
						"japanese": "ある少年、エタンという名…そして悲劇的な裏切りの記録が。",
						"chinese": "一个小男孩的名字……‘伊森’。以及一段悲剧性背叛的记录。",
						"french": "Le nom d'un jeune garçon... 'Ethan'. Et le récit d'une trahison tragique.",
						"spanish": "El nombre de un joven... 'Ethan'. Y un registro de una trágica traición.",
						"vietnamese": "Tên của một cậu bé... 'Ethan'. Và một ghi chép về sự phản bội bi thảm.",
						"thai": "ชื่อของเด็กชายตัวน้อย... 'อีธาน' และบันทึกการทรยศอันน่าเศร้า",
						"hindi": "एक छोटे लड़के का नाम... 'ईथन'। और दुखद विश्वासघात का एक रिकॉर्ड है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "bex"
				},
				{
					"content": {
						"korean": "에코의 정체에 대한 거대한 실마리가 드러났다. 그 뒤에 숨겨진 것은 비극적인 그림자였다.",
						"english": "A huge clue to Echo's identity has been revealed. Behind it lay a tragic shadow.",
						"japanese": "エコーの正体に関する大きな手がかりが明らかになった。その裏には悲劇的な影が潜んでいた。",
						"chinese": "关于艾可身份的巨大线索浮出水面。其背后隐藏着悲剧性的阴影。",
						"french": "Un indice majeur sur l'identité d'Echo a été révélé. Derrière cela se cachait une ombre tragique.",
						"spanish": "Una gran pista sobre la identidad de Echo ha sido revelada. Detrás de ella yacía una sombra trágica.",
						"vietnamese": "Một manh mối lớn về danh tính của Echo đã được tiết lộ. Đằng sau đó là một cái bóng bi thảm.",
						"thai": "เบาะแสสำคัญเกี่ยวกับตัวตนของเอคโค่ได้ถูกเปิดเผย เบื้องหลังนั้นคือเงามืดอันน่าเศร้า",
						"hindi": "इको की पहचान का एक बड़ा सुराग सामने आया। इसके पीछे एक दुखद छाया छिपी थी।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "데이터의 가장 깊은 곳. 거대한 시스템이 에코의 흔적을 지키고 있었다.",
						"english": "The deepest part of the data. A colossal system guarded Echo's traces.",
						"japanese": "データの最深部。巨大なシステムがエコーの痕跡を守っていた。",
						"chinese": "数据的最深处。一个巨大的系统守护着回声的痕迹。",
						"french": "La partie la plus profonde des données. Un système colossal protégeait les traces d'Echo.",
						"spanish": "La parte más profunda de los datos. Un sistema colosal custodiaba los rastros de Eco.",
						"vietnamese": "Nơi sâu thẳm nhất của dữ liệu. Một hệ thống khổng lồ đang bảo vệ dấu vết của Echo.",
						"thai": "ส่วนที่ลึกที่สุดของข้อมูล ระบบขนาดใหญ่กำลังปกป้องร่องรอยของ Echo",
						"hindi": "डेटा का सबसे गहरा हिस्सा। एक विशाल प्रणाली इको के निशानों की रखवाली कर रही थी।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "누가 여기까지 오는 것을 허락했지? 돌아가라.",
						"english": "Who allowed you to come this far? Go back.",
						"japanese": "誰がここまで来るのを許した？ 戻れ。",
						"chinese": "谁允许你们来到这里？回去。",
						"french": "Qui vous a permis de venir jusqu'ici ? Retournez en arrière.",
						"spanish": "¿Quién les permitió llegar hasta aquí? Regresen.",
						"vietnamese": "Kẻ nào cho phép các ngươi đến đây? Quay về đi.",
						"thai": "ใครอนุญาตให้มาถึงที่นี่ได้? กลับไปซะ",
						"hindi": "किसने तुम्हें यहां तक आने दिया? वापस जाओ।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "비켜. 여기서 진실을 찾을 거야.",
						"english": "Move. I will find the truth here.",
						"japanese": "退け。ここで真実を見つける。",
						"chinese": "让开。我将在这里找到真相。",
						"french": "Écartez-vous. Je trouverai la vérité ici.",
						"spanish": "Muévete. Aquí encontraré la verdad.",
						"vietnamese": "Tránh ra. Tôi sẽ tìm thấy sự thật ở đây.",
						"thai": "หลีกไป ฉันจะหาความจริงที่นี่",
						"hindi": "हटो। मैं यहां सच खोजूंगा।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "진실은… 너희가 감당할 수 없을 것이다.",
						"english": "The truth… you will not be able to bear it.",
						"japanese": "真実は… お前たちが耐えられるものではないだろう。",
						"chinese": "真相……你们承受不起。",
						"french": "La vérité… vous ne pourrez pas la supporter.",
						"spanish": "La verdad… no podrán soportarla.",
						"vietnamese": "Sự thật… các ngươi sẽ không thể chịu đựng được đâu.",
						"thai": "ความจริง... พวกเจ้าจะรับมันไม่ได้หรอก",
						"hindi": "सच… तुम सह नहीं पाओगे।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "시스템의 방벽이 너무 높았다. 데이터의 파도가 모든 것을 집어삼켰다.",
						"english": "The system's defenses were too strong. A wave of data swallowed everything.",
						"japanese": "システムの障壁はあまりにも高かった。データの波が全てを飲み込んだ。",
						"chinese": "系统的壁垒太高了。数据的洪流吞噬了一切。",
						"french": "Les défenses du système étaient trop fortes. Une vague de données a tout englouti.",
						"spanish": "Las barreras del sistema eran demasiado altas. Una ola de datos lo devoró todo.",
						"vietnamese": "Hàng rào của hệ thống quá cao. Một làn sóng dữ liệu đã nuốt chửng mọi thứ.",
						"thai": "กำแพงของระบบสูงเกินไป คลื่นข้อมูลได้กลืนกินทุกสิ่ง",
						"hindi": "सिस्टम की बाधाएं बहुत ऊंची थीं। डेटा की लहर ने सब कुछ निगल लिया।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "감히… 나의 진실에 다가서려 하지 마라.",
						"english": "Dare not... approach my truth.",
						"japanese": "敢えて…私の真実に近づくな。",
						"chinese": "竟敢……不要接近我的真相。",
						"french": "N'ose pas... approcher ma vérité.",
						"spanish": "No te atrevas... a acercarte a mi verdad.",
						"vietnamese": "Dám... không được đến gần sự thật của ta.",
						"thai": "อย่า... บังอาจเข้าใกล้ความจริงของข้า",
						"hindi": "हिम्मत मत करो... मेरे सच के करीब आने की।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"action": "enter",
					"speaker": "bex",
					"type": "direction"
				},
				{
					"speaker": "bex",
					"content": {
						"korean": "아직 포기하지 마세요! 중요한 데이터는 확보했어요!",
						"english": "Don't give up yet! We've secured important data!",
						"japanese": "まだ諦めないでください！重要なデータは確保しました！",
						"chinese": "还没放弃！我们已经获得了重要数据！",
						"french": "N'abandonnez pas encore ! Nous avons sécurisé des données importantes !",
						"spanish": "¡No te rindas aún! ¡Hemos asegurado datos importantes!",
						"vietnamese": "Đừng bỏ cuộc! Chúng ta đã thu thập được dữ liệu quan trọng rồi!",
						"thai": "อย่ายอมแพ้! เราได้ข้อมูลสำคัญมาแล้ว!",
						"hindi": "अभी हार मत मानो! हमने महत्वपूर्ण डेटा सुरक्षित कर लिया है!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "젠장… 다시 간다.",
						"english": "Damn it... I'm going in again.",
						"japanese": "くそ…もう一度行く。",
						"chinese": "该死……再来一次。",
						"french": "Mince... j'y retourne.",
						"spanish": "Maldita sea... voy de nuevo.",
						"vietnamese": "Chết tiệt... đi lại.",
						"thai": "บ้าเอ๊ย... ไปอีกครั้ง",
						"hindi": "धिक्कार है... फिर से जाता हूँ।"
					},
					"type": "speech"
				}
			]
		}
	]
} as const;
