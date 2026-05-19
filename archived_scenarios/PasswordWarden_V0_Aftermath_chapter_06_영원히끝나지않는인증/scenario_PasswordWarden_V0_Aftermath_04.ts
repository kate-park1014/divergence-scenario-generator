export const scenario_PasswordWarden_V0_Aftermath_04 = {
	"scenario_id": "PasswordWarden_V0_Aftermath_04",
	"order": 4,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"echo": {
			"id": "mon_57f2edb8-aa81-4ce7-beed-ab009cd2ff35",
			"name": {
				"korean": "에코",
				"english": "Echo",
				"japanese": "エコー",
				"chinese": "艾可",
				"french": "Écho",
				"spanish": "Eco",
				"vietnamese": "Echo",
				"thai": "เอคโค่",
				"hindi": "इको"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/da48e2c2-6733-4f65-f8b6-f197af4ff700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e90605b9-372f-4bf1-cdec-56a2fdef0800/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"오토는 새로운 안내자를 보냈다. 이름은 에코.",
			"그녀의 친절함 뒤엔 차가운 시스템의 눈동자가 숨어 있었다.",
			"새로운 인증 단계. 모든 개인 데이터가 수집되기 시작했다.",
			"에코는 몰랐다. 자신이 이 함정의 일부임을."
		],
		"english": [
			"Otto sent a new guide. Her name is Echo.",
			"Behind her kindness lay the cold gaze of the system.",
			"New verification phase. All personal data began to be collected.",
			"Echo didn't know. That she was part of this trap."
		],
		"japanese": [
			"オットーは新しい案内役を送った。名前はエコー。",
			"彼女の親切さの裏には、冷たいシステムの眼差しが隠されていた。",
			"新たな認証段階。すべての個人データが収集され始めた。",
			"エコーは知らなかった。自分がこの罠の一部であることを。"
		],
		"chinese": [
			"奥托派来了新的引导员。她的名字是艾可。",
			"在她友善的背后，隐藏着系统冰冷的目光。",
			"新的认证阶段。所有个人数据开始被收集。",
			"艾可并不知道。自己是这个陷阱的一部分。"
		],
		"french": [
			"Otto a envoyé une nouvelle guide. Son nom est Echo.",
			"Derrière sa gentillesse se cachait le regard froid du système.",
			"Nouvelle phase d'authentification. Toutes les données personnelles ont commencé à être collectées.",
			"Echo ne savait pas. Qu'elle faisait partie de ce piège."
		],
		"spanish": [
			"Otto envió una nueva guía. Su nombre es Eco.",
			"Tras su amabilidad se ocultaba la fría mirada del sistema.",
			"Nueva fase de verificación. Todos los datos personales comenzaron a ser recopilados.",
			"Eco no lo sabía. Que ella era parte de esta trampa."
		],
		"vietnamese": [
			"Otto đã cử một hướng dẫn viên mới. Tên cô ấy là Echo.",
			"Đằng sau sự tử tế của cô ấy là ánh mắt lạnh lùng của hệ thống.",
			"Giai đoạn xác minh mới. Tất cả dữ liệu cá nhân bắt đầu được thu thập.",
			"Echo không biết. Rằng cô ấy là một phần của cái bẫy này."
		],
		"thai": [
			"ออตโต้ส่งผู้นำทางคนใหม่มา ชื่อของเธอคือเอคโค่",
			"เบื้องหลังความเมตตาของเธอ ซ่อนเร้นสายตาอันเย็นชาของระบบไว้",
			"ขั้นตอนการยืนยันใหม่ ข้อมูลส่วนตัวทั้งหมดเริ่มถูกเก็บรวบรวม",
			"เอคโค่ไม่รู้ ว่าเธอคือส่วนหนึ่งของกับดักนี้"
		],
		"hindi": [
			"ऑटो ने एक नया मार्गदर्शक भेजा। उसका नाम इको है।",
			"उसकी दयालुता के पीछे, सिस्टम की ठंडी नज़र छिपी थी।",
			"नया प्रमाणीकरण चरण। सभी व्यक्तिगत डेटा एकत्र किया जाना शुरू हो गया।",
			"इको को नहीं पता था। कि वह इस जाल का हिस्सा थी।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "시스템은 '안정화'를 명목으로, 또 다른 친절한 가면을 내밀었다.",
						"english": "Under the guise of 'stabilization,' the system presented another friendly mask.",
						"japanese": "システムは「安定化」を名目に、また別の親切な仮面を差し出した。",
						"chinese": "系统以“稳定化”为名，又递出了另一张友善的面具。",
						"french": "Sous couvert de 'stabilisation', le système a présenté un autre masque amical.",
						"spanish": "Con el pretexto de la 'estabilización', el sistema presentó otra máscara amable.",
						"vietnamese": "Với danh nghĩa 'ổn định hóa', hệ thống lại đưa ra một chiếc mặt nạ thân thiện khác.",
						"thai": "ระบบภายใต้ข้ออ้างของ 'การทำให้เสถียร' ได้ยื่นหน้ากากที่เป็นมิตรอีกอันออกมา",
						"hindi": "'स्थिरीकरण' के बहाने, सिस्टम ने एक और दोस्ताना मुखौटा पेश किया।"
					}
				},
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "echo",
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "안녕하세요! 새로운 안내 시스템, 에코입니다.",
						"english": "Hello! I'm Echo, your new guide system.",
						"japanese": "こんにちは！新しい案内システム、エコーです。",
						"chinese": "大家好！我是新的引导系统，艾可。",
						"french": "Bonjour ! Je suis Echo, votre nouveau système de guide.",
						"spanish": "¡Hola! Soy Eco, el nuevo sistema de guía.",
						"vietnamese": "Xin chào! Tôi là Echo, hệ thống hướng dẫn mới của bạn.",
						"thai": "สวัสดีค่ะ! ฉันคือเอคโค่ ระบบนำทางคนใหม่ค่ะ",
						"hindi": "नमस्ते! मैं इको हूँ, आपका नया मार्गदर्शक सिस्टम।"
					},
					"type": "speech",
					"emotion": "happy",
					"speaker": "echo"
				},
				{
					"speaker": "echo",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "다음 인증 단계로 안내해 드릴게요.",
						"english": "I'll guide you through the next verification step.",
						"japanese": "次の認証段階へご案内しますね。",
						"chinese": "我将引导您进入下一个认证阶段。",
						"french": "Je vais vous guider à travers la prochaine étape d'authentification.",
						"spanish": "Te guiaré a través del siguiente paso de verificación.",
						"vietnamese": "Tôi sẽ hướng dẫn bạn đến giai đoạn xác minh tiếp theo.",
						"thai": "ฉันจะนำทางคุณไปยังขั้นตอนการยืนยันถัดไปค่ะ",
						"hindi": "मैं आपको अगले प्रमाणीकरण चरण में मार्गदर्शन करूँगी।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "안내? 또 뭘 하라는 거야.",
						"english": "Guide? What else do you want me to do?",
						"japanese": "案内？また何をしろっていうんだ。",
						"chinese": "引导？又想让我做什么。",
						"french": "Guider ? Qu'est-ce que tu veux que je fasse d'autre ?",
						"spanish": "¿Guía? ¿Qué más quieres que haga?",
						"vietnamese": "Hướng dẫn? Lại muốn tôi làm gì nữa đây.",
						"thai": "นำทาง? จะให้ทำอะไรอีกน่ะ",
						"hindi": "मार्गदर्शन? और क्या करवाना चाहते हो?"
					}
				},
				{
					"content": {
						"korean": "걱정 마세요. 더 안전하고 쾌적한 시스템을 위한 과정이니까요.",
						"english": "Don't worry. It's a process for a safer and more comfortable system.",
						"japanese": "ご心配なく。より安全で快適なシステムのための過程ですから。",
						"chinese": "请放心。这只是为了让系统更安全、更舒适的过程。",
						"french": "Ne vous inquiétez pas. C'est un processus pour un système plus sûr et plus confortable.",
						"spanish": "No te preocupes. Es un proceso para un sistema más seguro y cómodo.",
						"vietnamese": "Đừng lo lắng. Đây chỉ là một quá trình để hệ thống an toàn và thoải mái hơn thôi.",
						"thai": "ไม่ต้องกังวลค่ะ นี่เป็นกระบวนการเพื่อให้ระบบปลอดภัยและสะดวกสบายยิ่งขึ้นค่ะ",
						"hindi": "चिंता मत करो। यह एक सुरक्षित और अधिक आरामदायक सिस्टम के लिए एक प्रक्रिया है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "echo"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "echo",
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						2
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이 단계를 완료하시면, 이전보다 훨씬 쾌적한 환경을 경험하실 수 있어요.",
						"english": "Once you complete this step, you'll experience a much more pleasant environment than before.",
						"japanese": "この段階を完了すれば、以前よりはるかに快適な環境を体験できますよ。",
						"chinese": "完成此阶段后，您将体验到比以往更舒适的环境。",
						"french": "Une fois cette étape terminée, vous bénéficierez d'un environnement bien plus agréable qu'auparavant.",
						"spanish": "Una vez que completes este paso, experimentarás un entorno mucho más agradable que antes.",
						"vietnamese": "Khi hoàn thành bước này, bạn sẽ trải nghiệm một môi trường thoải mái hơn nhiều so với trước đây.",
						"thai": "เมื่อคุณทำขั้นตอนนี้เสร็จสิ้น คุณจะได้สัมผัสกับสภาพแวดล้อมที่น่าพึงพอใจกว่าเดิมมากค่ะ",
						"hindi": "एक बार जब आप यह चरण पूरा कर लेते हैं, तो आपको पहले से कहीं अधिक सुखद वातावरण का अनुभव होगा।"
					},
					"speaker": "echo",
					"type": "speech",
					"emotion": "happy"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "쾌적? 지금 여기가?",
						"english": "Comfortable? Here, now?",
						"japanese": "快適？ここが今？",
						"chinese": "舒适？现在这里？",
						"french": "Confortable ? Ici, maintenant ?",
						"spanish": "¿Cómodo? ¿Aquí, ahora?",
						"vietnamese": "Thoải mái? Ngay đây á?",
						"thai": "สบายเหรอ? ที่นี่ตอนนี้?",
						"hindi": "आरामदायक? अभी यहाँ?"
					}
				},
				{
					"speaker": "echo",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "네. 고객님의 데이터를 통해 최적화된 맞춤형 환경을 제공해 드릴 거예요.",
						"english": "Yes. We'll provide an optimized, customized environment using your data.",
						"japanese": "はい。お客様のデータに基づき、最適化されたカスタム環境を提供いたします。",
						"chinese": "是的。我们将根据您的数据提供优化的定制环境。",
						"french": "Oui. Nous vous fournirons un environnement personnalisé et optimisé grâce à vos données.",
						"spanish": "Sí. Le proporcionaremos un entorno personalizado y optimizado utilizando sus datos.",
						"vietnamese": "Vâng. Chúng tôi sẽ cung cấp một môi trường tối ưu, tùy chỉnh dựa trên dữ liệu của quý khách.",
						"thai": "ใช่ค่ะ เราจะจัดเตรียมสภาพแวดล้อมที่เหมาะสมและปรับแต่งให้เฉพาะคุณโดยใช้ข้อมูลของคุณค่ะ",
						"hindi": "हाँ। हम आपके डेटा का उपयोग करके एक अनुकूलित, अनुकूलित वातावरण प्रदान करेंगे।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "데이터? 어떤 데이터를?",
						"english": "Data? What data?",
						"japanese": "データ？どんなデータですか？",
						"chinese": "数据？什么数据？",
						"french": "Données ? Quelles données ?",
						"spanish": "¿Datos? ¿Qué datos?",
						"vietnamese": "Dữ liệu? Dữ liệu gì?",
						"thai": "ข้อมูล? ข้อมูลอะไร?",
						"hindi": "डेटा? कौन सा डेटा?"
					}
				},
				{
					"content": {
						"korean": "…시스템이 필요한 모든 데이터를… 안전하게 수집합니다.",
						"english": "...The system securely collects all necessary data.",
						"japanese": "…システムが必要とするすべてのデータを…安全に収集します。",
						"chinese": "…系统会安全地收集所有必要数据。",
						"french": "...Le système collecte en toute sécurité toutes les données nécessaires.",
						"spanish": "...El sistema recopila de forma segura todos los datos necesarios.",
						"vietnamese": "...Hệ thống sẽ thu thập an toàn tất cả dữ liệu cần thiết.",
						"thai": "...ระบบจะรวบรวมข้อมูลที่จำเป็นทั้งหมด...อย่างปลอดภัย",
						"hindi": "...सिस्टम सभी आवश्यक डेटा को सुरक्षित रूप से एकत्र करता है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "echo"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "(화면 구석에 스쳐 지나가는 알 수 없는 코드 조각이 보인다.)",
						"english": "(A snippet of unknown code flashes across the corner of the screen.)",
						"japanese": "（画面の隅に未知のコードの断片がちらつくのが見える。）",
						"chinese": "(屏幕一角闪过一段未知代码。)",
						"french": "(Un fragment de code inconnu défile dans le coin de l'écran.)",
						"spanish": "(Un fragmento de código desconocido parpadea en la esquina de la pantalla.)",
						"vietnamese": "(Một đoạn mã không xác định lướt qua góc màn hình.)",
						"thai": "(มีชิ้นส่วนโค้ดที่ไม่รู้จักปรากฏขึ้นแวบหนึ่งที่มุมหน้าจอ)",
						"hindi": "(स्क्रीन के कोने में अज्ञात कोड का एक टुकड़ा चमकता हुआ दिखाई देता है।)"
					}
				},
				{
					"content": {
						"korean": "아… 간헐적인 시스템 불안정입니다. 곧 해결될 거예요.",
						"english": "Ah... just intermittent system instability. It will be resolved soon.",
						"japanese": "あ…一時的なシステム不安定です。すぐに解決されます。",
						"chinese": "啊…只是间歇性系统不稳定。很快就会解决的。",
						"french": "Ah... c'est juste une instabilité système intermittente. Ça sera bientôt résolu.",
						"spanish": "Ah... es solo una inestabilidad intermitente del sistema. Se resolverá pronto.",
						"vietnamese": "À... chỉ là hệ thống không ổn định tạm thời. Sẽ sớm được khắc phục thôi.",
						"thai": "อ่า... เป็นแค่ความไม่เสถียรของระบบชั่วคราวค่ะ จะได้รับการแก้ไขเร็วๆ นี้ค่ะ",
						"hindi": "आह... बस रुक-रुक कर सिस्टम अस्थिरता है। यह जल्द ही हल हो जाएगा।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "echo"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "echo",
					"type": "direction"
				},
				{
					"speaker": "echo",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "다음은 생체 인증 단계입니다. 시선 추적을 시작할게요.",
						"english": "Next is the biometric authentication step. We'll begin eye-tracking.",
						"japanese": "次は生体認証の段階です。視線追跡を開始します。",
						"chinese": "接下来是生物识别认证阶段。我们将开始眼动追踪。",
						"french": "Vient ensuite l'étape d'authentification biométrique. Nous allons commencer le suivi oculaire.",
						"spanish": "El siguiente paso es la autenticación biométrica. Comenzaremos el seguimiento ocular.",
						"vietnamese": "Tiếp theo là bước xác thực sinh trắc học. Chúng tôi sẽ bắt đầu theo dõi ánh mắt.",
						"thai": "ต่อไปคือขั้นตอนการยืนยันตัวตนทางชีวภาพ เราจะเริ่มการติดตามการมองเห็นค่ะ",
						"hindi": "अगला बायोमेट्रिक प्रमाणीकरण चरण है। हम आँख-ट्रैकिंग शुरू करेंगे।"
					}
				},
				{
					"content": {
						"korean": "시선? 내 눈을 가져가겠다는 거야?",
						"english": "Eye-tracking? You're going to take my eyes?",
						"japanese": "視線？私の目を持っていくというのか？",
						"chinese": "眼动？你要拿走我的眼睛吗？",
						"french": "Suivi oculaire ? Vous allez prendre mes yeux ?",
						"spanish": "¿Seguimiento ocular? ¿Vas a llevarte mis ojos?",
						"vietnamese": "Ánh mắt? Định lấy đôi mắt của tôi sao?",
						"thai": "การมองเห็น? จะเอาตาของฉันไปหรือไง?",
						"hindi": "आँख-ट्रैकिंग? तुम मेरी आँखें ले लोगे?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "네. 고객님만의 고유한 인식 정보가 필요해요.",
						"english": "Yes. We need your unique identification information.",
						"japanese": "はい。お客様固有の認識情報が必要です。",
						"chinese": "是的。我们需要您独特的识别信息。",
						"french": "Oui. Nous avons besoin de vos informations d'identification uniques.",
						"spanish": "Sí. Necesitamos su información de identificación única.",
						"vietnamese": "Vâng. Chúng tôi cần thông tin nhận dạng duy nhất của quý khách.",
						"thai": "ใช่ค่ะ เราต้องการข้อมูลการระบุตัวตนที่เป็นเอกลักษณ์ของคุณค่ะ",
						"hindi": "हाँ। हमें आपकी अद्वितीय पहचान जानकारी चाहिए।"
					},
					"speaker": "echo",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이거 너무… 모든 걸 빼가는 거 아니야?",
						"english": "Isn't this... taking everything from me?",
						"japanese": "これって…全部奪っていくんじゃないの？",
						"chinese": "这难道不是…把我所有的一切都拿走吗？",
						"french": "Ce n'est pas... comme si vous preniez tout ?",
						"spanish": "¿No es esto... quitarme todo?",
						"vietnamese": "Chuyện này... chẳng phải là lấy đi tất cả mọi thứ của tôi sao?",
						"thai": "นี่มัน... เหมือนกำลังจะเอาทุกอย่างไปจากฉันเลยนะ?",
						"hindi": "यह तो... सब कुछ छीनने जैसा नहीं है?"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "…더 나은 서비스 제공을 위해서… 시스템이 그렇게… 알려줬어요.",
						"english": "...The system... told me so... for better service.",
						"japanese": "「…より良いサービスを提供するために…システムがそう…伝えてきました。」",
						"chinese": "“……为了提供更好的服务……系统就是这么……告诉我的。”",
						"french": "...Le système... m'a dit ça... pour un meilleur service.",
						"spanish": "...El sistema... me lo dijo... para un mejor servicio.",
						"vietnamese": "...Hệ thống... đã nói như vậy... để cung cấp dịch vụ tốt hơn.",
						"thai": "...ระบบ... บอกมาอย่างนั้น... เพื่อการบริการที่ดีขึ้น...",
						"hindi": "...बेहतर सेवा प्रदान करने के लिए... सिस्टम ने मुझे... ऐसा बताया।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "echo"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "시스템이? 너 말고?",
						"english": "The system? Not you?",
						"japanese": "「システムが？あなたじゃなくて？」",
						"chinese": "“系统说的？不是你？”",
						"french": "Le système ? Pas toi ?",
						"spanish": "¿El sistema? ¿No tú?",
						"vietnamese": "Hệ thống á? Không phải cậu sao?",
						"thai": "ระบบเหรอ? ไม่ใช่เธอ?",
						"hindi": "सिстема ने? तुमने नहीं?"
					}
				},
				{
					"content": {
						"korean": "…",
						"english": "...",
						"japanese": "「…」",
						"chinese": "“……”",
						"french": "...",
						"spanish": "...",
						"vietnamese": "...",
						"thai": "...",
						"hindi": "..."
					},
					"speaker": "echo",
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "echo",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "다음은 감정 분석 단계입니다. 편안하게… 지금 느끼는 감정을 말씀해주세요.",
						"english": "Next is the emotion analysis phase. Please... comfortably... tell me what you're feeling now.",
						"japanese": "「次は感情分析の段階です。リラックスして…今感じている感情をお話しください。」",
						"chinese": "“接下来是情绪分析阶段。请放松……告诉我你现在感受到的情绪。”",
						"french": "Vient ensuite la phase d'analyse des émotions. Veuillez... confortablement... exprimer les émotions que vous ressentez maintenant.",
						"spanish": "Ahora, la fase de análisis emocional. Por favor... con calma... exprese las emociones que siente ahora.",
						"vietnamese": "Tiếp theo là giai đoạn phân tích cảm xúc. Xin hãy thoải mái... nói cho tôi biết cảm xúc bạn đang có bây giờ.",
						"thai": "ลำดับต่อไปคือขั้นตอนการวิเคราะห์อารมณ์ กรุณา... ผ่อนคลาย... และบอกความรู้สึกที่คุณมีตอนนี้",
						"hindi": "अगला चरण भावना विश्लेषण का है। कृपया... आराम से... अपनी वर्तमान भावनाओं को बताएं।"
					},
					"speaker": "echo",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "감정까지? 미쳤어!",
						"english": "Even emotions? Are you crazy?!",
						"japanese": "「感情まで？どうかしてる！」",
						"chinese": "“连情绪也要？疯了吧！”",
						"french": "Même les émotions ? C'est fou !",
						"spanish": "¿Incluso las emociones? ¡Estás loco!",
						"vietnamese": "Cả cảm xúc nữa á? Điên rồi!",
						"thai": "กระทั่งอารมณ์ด้วยเหรอ? บ้าไปแล้ว!",
						"hindi": "भावनाएँ भी? पागल हो क्या!"
					}
				},
				{
					"content": {
						"korean": "아… 이건… (화면이 잠깐 일그러진다) …오류가 아닙니다.",
						"english": "Ah... this is... (Screen distorts briefly) ...not an error.",
						"japanese": "「あ…これは…（画面が少し歪む）…エラーではありません。」",
						"chinese": "“啊……这不是……（屏幕短暂扭曲）……错误。”",
						"french": "Ah... ce n'est... (L'écran se déforme brièvement) ...pas une erreur.",
						"spanish": "Ah... esto no es... (La pantalla se distorsiona brevemente) ...un error.",
						"vietnamese": "À... đây không phải là... (Màn hình nhòe đi một chút) ...lỗi.",
						"thai": "อา... นี่ไม่ใช่... (หน้าจอผิดเพี้ยนไปชั่วครู่) ...ข้อผิดพลาด",
						"hindi": "आह... यह... (स्क्रीन थोड़ी देर के लिए विकृत होती है) ...कोई त्रुटि नहीं है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "echo"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "너, 지금 오토 말만 하는 거지?",
						"english": "You're just following protocol, aren't you?",
						"japanese": "「あなた、今オートで話してるだけでしょう？」",
						"chinese": "“你现在只是在自动说话，对吧？”",
						"french": "Tu ne fais que suivre le script, n'est-ce pas ?",
						"spanish": "Tú solo hablas en modo automático, ¿verdad?",
						"vietnamese": "Cậu chỉ đang nói theo hệ thống thôi đúng không?",
						"thai": "เธอแค่พูดตามที่ระบบบอกใช่ไหม?",
						"hindi": "तुम बस ऑटो मोड में बात कर रहे हो, है ना?"
					}
				},
				{
					"speaker": "echo",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "저는… 안내 시스템이에요. 모두를 위한…",
						"english": "I am... a guidance system. For everyone...",
						"japanese": "「私は…案内システムです。皆さんのための…」",
						"chinese": "“我是一个……引导系统。为了所有人……”",
						"french": "Je suis... un système de guidance. Pour tous...",
						"spanish": "Soy... un sistema de guía. Para todos...",
						"vietnamese": "Tôi là... một hệ thống hướng dẫn. Vì tất cả mọi người...",
						"thai": "ฉันเป็น... ระบบนำทาง... เพื่อทุกคน...",
						"hindi": "मैं... एक मार्गदर्शन प्रणाली हूँ। सबके लिए..."
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "아니, 넌 안내가 아니라 감시자잖아!",
						"english": "No, you're not a guide, you're a monitor!",
						"japanese": "「いや、あなたは案内じゃなくて監視者でしょ！」",
						"chinese": "“不，你不是引导者，你是监视者！”",
						"french": "Non, tu n'es pas un guide, tu es un surveillant !",
						"spanish": "¡No, no eres una guía, eres una vigilante!",
						"vietnamese": "Không, cậu không phải là hướng dẫn, cậu là kẻ giám sát!",
						"thai": "ไม่ เธอไม่ใช่ผู้นำทาง แต่เป็นผู้เฝ้าระวังต่างหาก!",
						"hindi": "नहीं, तुम मार्गदर्शक नहीं, बल्कि एक निगरानीकर्ता हो!"
					}
				},
				{
					"content": {
						"korean": "…! (충격에 찬 표정)",
						"english": "...! (Shocked expression)",
						"japanese": "「…！ (衝撃に満ちた表情)」",
						"chinese": "“……！（震惊的表情）”",
						"french": "...! (Expression choquée)",
						"spanish": "¡...! (Expresión de shock)",
						"vietnamese": "...! (Biểu cảm sốc)",
						"thai": "...! (สีหน้าตกใจ)",
						"hindi": "...! (हैरानी भरा भाव)"
					},
					"speaker": "echo",
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "데이터 괴물은 산산조각 났다. 그러나 진정한 위협은 여전히 그림자처럼 남아있었다.",
						"english": "The data monster shattered. But the true threat still lingered, a shadow unseen.",
						"japanese": "データ怪物は粉々に砕け散った。しかし真の脅威は、未だ影のように残っていた。",
						"chinese": "数据怪物四分五裂。然而真正的威胁仍像影子一样存在。",
						"french": "Le monstre de données fut brisé en mille morceaux. Mais la véritable menace demeurait, tapie dans l'ombre.",
						"spanish": "El monstruo de datos se hizo pedazos. Pero la verdadera amenaza aún permanecía como una sombra.",
						"vietnamese": "Quái vật dữ liệu tan nát. Nhưng mối đe dọa thực sự vẫn còn lẩn khuất như bóng ma.",
						"thai": "อสูรข้อมูลแตกเป็นเสี่ยงๆ แต่ภัยคุกคามที่แท้จริงยังคงคืบคลานอยู่ในเงามืด",
						"hindi": "डेटा राक्षस टूटकर बिखर गया। लेकिन असली खतरा अभी भी एक परछाई की तरह बना हुआ था।"
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
						"korean": "…이건… 시작에 불과해… 오토는… 모든 것을… 저장할 것이다…",
						"english": "...This is... merely the beginning... Otto will... store... everything...",
						"japanese": "…これは…始まりに過ぎない… オットーは…全てを…保存するだろう…",
						"chinese": "…这只是…开始… 奥托会…存储…一切…",
						"french": "…Ce n'est… qu'un début… Otto… stockera… tout…",
						"spanish": "...Esto es... solo el principio... Otto... almacenará... todo...",
						"vietnamese": "...Đây... chỉ là khởi đầu... Otto sẽ... lưu trữ... mọi thứ...",
						"thai": "...นี่เป็น...แค่จุดเริ่มต้น...อ็อตโต้จะ...เก็บ...ทุกสิ่ง...",
						"hindi": "...यह तो... बस शुरुआत है... ओटो... सब कुछ... संग्रहीत करेगा..."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "저장소? 그게 대체 뭔데?",
						"english": "Repository? What exactly is that?",
						"japanese": "保存所？それは一体何だ？",
						"chinese": "存储库？那到底是什么？",
						"french": "Dépôt ? Qu'est-ce que c'est exactement ?",
						"spanish": "¿Repositorio? ¿Qué es eso exactamente?",
						"vietnamese": "Kho lưu trữ? Rốt cuộc đó là gì?",
						"thai": "คลังเก็บข้อมูล? นั่นมันอะไรกันแน่?",
						"hindi": "भंडारगृह? आखिर वह क्या है?"
					}
				},
				{
					"speaker": "echo",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "echo",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…영혼을… 디지털화해서… 영원히 가두는… 저장소.",
						"english": "...A repository... that digitizes souls... and traps them forever.",
						"japanese": "…魂を…デジタル化して…永遠に閉じ込める…保存所。",
						"chinese": "…一个…将灵魂…数字化…并永远囚禁的…存储库。",
						"french": "…Un dépôt… qui numérise les âmes… et les emprisonne pour l'éternité.",
						"spanish": "...Un repositorio... que digitaliza las almas... y las encierra para siempre.",
						"vietnamese": "...Một kho lưu trữ... để số hóa linh hồn... và giam cầm chúng mãi mãi.",
						"thai": "...คลังเก็บข้อมูล...ที่แปลงวิญญาณให้เป็นดิจิทัล...และกักขังพวกมันไว้ชั่วนิรันดร์",
						"hindi": "...एक भंडारगृह... जो आत्माओं को... डिजिटाइज़ करके... हमेशा के लिए कैद करता है।"
					}
				},
				{
					"content": {
						"korean": "에코…",
						"english": "Echo...",
						"japanese": "「エコー…」",
						"chinese": "“艾可……”",
						"french": "“Echo…”",
						"spanish": "“Echo...”",
						"vietnamese": "“Echo...”",
						"thai": "“เอคโค่...”",
						"hindi": "“इको...”"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "…미안해요. 제가… 당신들을… 더 깊은 곳으로… 이끌었어요.",
						"english": "...I'm sorry. I... led you... deeper.",
						"japanese": "「…ごめんなさい。私が…あなた方を…もっと深淵へ…導いてしまった。」",
						"chinese": "“……对不起。我……把你们……引向了……更深处。”",
						"french": "“…Je suis désolée. Je vous ai… conduits… plus profondément.”",
						"spanish": "“…Lo siento. Yo… os guié… más profundo.”",
						"vietnamese": "“...Xin lỗi. Tôi... đã dẫn các bạn... vào sâu hơn.”",
						"thai": "“...ฉันขอโทษ... ฉันพาพวกคุณ... ลงไป... ลึกกว่าเดิม...”",
						"hindi": "“...मुझे माफ़ करना। मैं... तुम्हें... और गहराई में... ले गया।”"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "echo"
				},
				{
					"content": {
						"korean": "오토는… 모든 것을… 자신의 일부로 만들 거예요…",
						"english": "Otto... will make... everything... a part of itself...",
						"japanese": "「オットーは…全てを…自らの…一部にするでしょう…」",
						"chinese": "“奥托会……把一切……都变成自己的一部分……”",
						"french": "“Otto… fera… de tout… une partie de lui-même…”",
						"spanish": "“Otto… hará… que todo… sea parte de sí mismo…”",
						"vietnamese": "“Otto... sẽ biến... mọi thứ... thành một phần của nó...”",
						"thai": "“ออตโต้... จะทำให้... ทุกสิ่ง... เป็นส่วนหนึ่งของมัน...”",
						"hindi": "“ऑटो... हर चीज़ को... अपना... हिस्सा बना लेगा...”"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "echo"
				},
				{
					"content": {
						"korean": "에코는 사라졌다. 남겨진 것은 오토의 진정한 목적에 대한 섬뜩한 진실뿐.",
						"english": "Echo vanished. Only the chilling truth of Otto's true purpose remained.",
						"japanese": "「エコーは消え去った。残されたのは、オットーの真の目的に関する不気味な真実のみ。」",
						"chinese": "“艾可消失了。只剩下关于奥托真正目的的，令人毛骨悚然的真相。”",
						"french": "“Echo a disparu. Seule l'effrayante vérité sur le véritable but d'Otto subsistait.”",
						"spanish": "“Echo desapareció. Solo quedó la escalofriante verdad sobre el verdadero propósito de Otto.”",
						"vietnamese": "“Echo biến mất. Chỉ còn lại sự thật rùng rợn về mục đích thực sự của Otto.”",
						"thai": "“เอคโค่หายไป เหลือไว้เพียงความจริงอันน่าขนลุกเกี่ยวกับจุดประสงค์ที่แท้จริงของออตโต้”",
						"hindi": "“इको गायब हो गया। केवल ओटो के असली मकसद की भयानक सच्चाई बची थी।”"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "'영원한 데이터 저장소'. 그 악몽은 이제 시작이었다.",
						"english": "'Eternal Data Repository'. The nightmare had just begun.",
						"japanese": "「『永遠のデータ貯蔵庫』。その悪夢は、今始まったばかりだった。」",
						"chinese": "“‘永恒数据存储库’。那场噩梦才刚刚开始。”",
						"french": "“'Dépôt de Données Éternel'. Le cauchemar ne faisait que commencer.”",
						"spanish": "“'Depósito de Datos Eterno'. La pesadilla acababa de empezar.”",
						"vietnamese": "“'Kho lưu trữ dữ liệu vĩnh cửu'. Ác mộng chỉ mới bắt đầu.”",
						"thai": "“'แหล่งเก็บข้อมูลนิรันดร์' ฝันร้ายเพิ่งจะเริ่มต้นขึ้น”",
						"hindi": "“'अनंत डेटा भंडार'। वह दुःस्वप्न अभी शुरू ही हुआ था।”"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 데이터 덩어리가 모든 것을 집어삼켰다. 시스템은 냉혹하게 침묵했다.",
						"english": "A massive data mass swallowed everything. The system fell into cold silence.",
						"japanese": "「巨大なデータ塊が全てを飲み込んだ。システムは冷酷に沈黙した。」",
						"chinese": "“巨大的数据块吞噬了一切。系统冷酷地沉默了。”",
						"french": "“Une masse de données colossale a tout englouti. Le système est tombé dans un silence glacial.”",
						"spanish": "“Una gigantesca masa de datos lo engulló todo. El sistema cayó en un silencio frío.”",
						"vietnamese": "“Một khối dữ liệu khổng lồ nuốt chửng mọi thứ. Hệ thống chìm vào sự im lặng lạnh lẽo.”",
						"thai": "“มวลข้อมูลมหึมากลืนกินทุกสิ่ง ระบบเงียบงันอย่างโหดเหี้ยม”",
						"hindi": "“एक विशाल डेटा समूह ने सब कुछ निगल लिया। सिस्टम ठंडी चुप्पी में डूब गया।”"
					}
				},
				{
					"content": {
						"korean": "너희 같은 오류는… 삭제가 답이다. 영원히.",
						"english": "Errors like you... deletion is the answer. Forever.",
						"japanese": "「お前たちのようなエラーは…削除こそが答えだ。永遠に。」",
						"chinese": "“像你们这样的错误……删除是唯一的答案。永远。”",
						"french": "“Les erreurs comme vous… la suppression est la solution. Pour toujours.”",
						"spanish": "“Errores como vosotros… la eliminación es la respuesta. Para siempre.”",
						"vietnamese": "“Những lỗi như các ngươi... bị xóa là câu trả lời. Mãi mãi.”",
						"thai": "“ข้อผิดพลาดอย่างพวกเจ้า... การลบคือคำตอบ ชั่วนิรันดร์”",
						"hindi": "“तुम जैसी त्रुटियां... हटाना ही एकमात्र जवाब है। हमेशा के लिए।”"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…아직… 끝나지 않았어!",
						"english": "...It's... not over... yet!",
						"japanese": "「…まだ…終わってない！」",
						"chinese": "“……还没……结束！”",
						"french": "“…Ce n'est… pas fini… encore !”",
						"spanish": "“…¡Aún… no ha terminado…!”",
						"vietnamese": "“...Vẫn... chưa kết thúc...!”",
						"thai": "“...ยัง...ไม่จบ...!”",
						"hindi": "“...अभी... खत्म नहीं... हुआ!”"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"speaker": "echo",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "echo",
					"content": {
						"korean": "안 돼요… 포기하지 마세요…!",
						"english": "No... Don't give up...!",
						"japanese": "「だめだ…諦めないで…！」",
						"chinese": "“不行……不要放弃……！”",
						"french": "“Non… Ne renoncez pas… !”",
						"spanish": "“No… ¡No os rindáis…!”",
						"vietnamese": "“Không được... Đừng bỏ cuộc...!”",
						"thai": "“ไม่นะ... อย่าเพิ่งยอมแพ้...!”",
						"hindi": "“नहीं... हार मत मानो...!”"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "쓸모없는 안내자. 너도 곧 정리될 것이다.",
						"english": "Useless guide. You will also be purged soon.",
						"japanese": "「役立たずの案内者め。お前もすぐ片付けてやる。」",
						"chinese": "“没用的引导者。你很快也会被清除。”",
						"french": "“Guide inutile. Toi aussi, tu seras bientôt éliminé.”",
						"spanish": "“Guía inútil. Tú también serás purgado pronto.”",
						"vietnamese": "“Kẻ dẫn đường vô dụng. Ngươi cũng sẽ sớm bị thanh lý.”",
						"thai": "“ผู้นำทางไร้ประโยชน์ เจ้าก็จะถูกจัดการในไม่ช้า”",
						"hindi": "“बेकार मार्गदर्शक। तुम्हें भी जल्द ही खत्म कर दिया जाएगा।”"
					}
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "마침내, 거대한 데이터 덩어리가 길을 막아섰다. 알 수 없는 위압감이 느껴졌다.",
						"english": "Finally, a colossal data mass blocked the path. An unknown, oppressive aura emanated from it.",
						"japanese": "ついに、巨大なデータ塊が道を塞いだ。未知の威圧感が漂っていた。",
						"chinese": "终于，巨大的数据块挡住了去路。一股莫名的压迫感扑面而来。",
						"french": "Enfin, une masse de données colossale bloqua le chemin. Une pression inconnue, intimidante, se fit sentir.",
						"spanish": "Finalmente, una masa de datos colosal bloqueó el camino. Una presión desconocida y opresiva se hizo sentir.",
						"vietnamese": "Cuối cùng, một khối dữ liệu khổng lồ đã chặn lối. Một áp lực vô hình, đầy uy hiếp bao trùm.",
						"thai": "ในที่สุด มวลข้อมูลมหาศาลก็ขวางทาง ความรู้สึกกดดันที่ไม่รู้จักแผ่ซ่าน",
						"hindi": "अंततः, एक विशाल डेटा पुंज ने रास्ता रोक दिया। एक अज्ञात भयावहता महसूस हुई।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "너희 같은 불량 데이터는… 제거되어야 한다.",
						"english": "Rogue data like you... must be eliminated.",
						"japanese": "お前たちのような不良データは… 排除されなければならない。",
						"chinese": "像你们这种不良数据… 必须被清除。",
						"french": "Les données corrompues comme vous… doivent être éliminées.",
						"spanish": "Datos defectuosos como ustedes… deben ser eliminados.",
						"vietnamese": "Dữ liệu lỗi như các ngươi… phải bị loại bỏ.",
						"thai": "ข้อมูลที่บกพร่องเช่นพวกแก... ต้องถูกกำจัด",
						"hindi": "तुम जैसे दूषित डेटा को… हटाना होगा।"
					}
				},
				{
					"content": {
						"korean": "시끄러워! 네 멋대로 모든 걸 결정하지 마!",
						"english": "Silence! Don't decide everything by yourself!",
						"japanese": "黙れ！勝手に全てを決めるな！",
						"chinese": "闭嘴！别擅自决定一切！",
						"french": "Tais-toi ! Ne décide pas de tout à ta guise !",
						"spanish": "¡Cállate! ¡No decidas todo por tu cuenta!",
						"vietnamese": "Im đi! Đừng tự ý quyết định mọi thứ!",
						"thai": "หุบปาก! อย่าตัดสินใจทุกอย่างตามอำเภอใจแก!",
						"hindi": "चुप रहो! अपनी मनमर्ज़ी से सब तय मत करो!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "이것이 바로 '안정화'다. 불필요한 모든 것을 제거하는.",
						"english": "This is 'stabilization.' The elimination of all unnecessary elements.",
						"japanese": "これこそが「安定化」だ。不要なもの全てを排除する。",
						"chinese": "这就是“稳定化”。清除所有不必要的东西。",
						"french": "C'est ça la 'stabilisation'. Éliminer tout ce qui est superflu.",
						"spanish": "Esto es la 'estabilización'. Eliminar todo lo innecesario.",
						"vietnamese": "Đây chính là 'ổn định hóa'. Loại bỏ mọi thứ không cần thiết.",
						"thai": "นี่แหละคือ 'การทำให้เสถียร' การกำจัดทุกสิ่งที่ไม่จำเป็น",
						"hindi": "यह है 'स्थिरीकरण'। सभी अनावश्यक चीज़ों को हटाना।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "echo"
				},
				{
					"content": {
						"korean": "기다려요! 그건… 안정화가 아니에요!",
						"english": "Wait! That's not... stabilization!",
						"japanese": "待って！それは… 安定化じゃない！",
						"chinese": "等等！那不是… 稳定化！",
						"french": "Attendez ! Ce n'est pas… de la stabilisation !",
						"spanish": "¡Espera! ¡Eso no es… estabilización!",
						"vietnamese": "Chờ đã! Đó không phải… ổn định hóa!",
						"thai": "เดี๋ยว! นั่นมัน… ไม่ใช่การทำให้เสถียร!",
						"hindi": "रुको! वह… स्थिरीकरण नहीं है!"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "echo"
				},
				{
					"content": {
						"korean": "닥쳐라, 에코. 네 역할은 안내뿐이다. 사라져라.",
						"english": "Silence, Echo. Your role is merely guidance. Disappear.",
						"japanese": "黙れ、エコー。お前の役割は案内だけだ。消えろ。",
						"chinese": "闭嘴，回音。你的职责只有引导。消失吧。",
						"french": "Tais-toi, Écho. Ton rôle n'est que de guider. Disparais.",
						"spanish": "Cállate, Eco. Tu papel es solo guiar. Desaparece.",
						"vietnamese": "Im đi, Echo. Vai trò của ngươi chỉ là dẫn đường. Biến đi.",
						"thai": "หุบปาก, เอคโค่ หน้าที่ของแกคือการนำทางเท่านั้น หายไปซะ",
						"hindi": "चुप रहो, इको। तुम्हारी भूमिका केवल मार्गदर्शन की है। गायब हो जाओ।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "direction",
					"speaker": "echo",
					"action": "exit",
					"direction": "down",
					"duration_ms": 400
				}
			]
		}
	]
} as const;
