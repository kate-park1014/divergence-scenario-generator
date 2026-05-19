export const scenario_Lumen_Echoes_02 = {
	"scenario_id": "Lumen_Echoes_02",
	"order": 2,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"brim": {
			"id": "mon_d7f57824-190d-40b9-93d1-66c658f0441f",
			"name": {
				"korean": "브림",
				"english": "Brim",
				"japanese": "ブリム",
				"chinese": "布里姆",
				"french": "Brim",
				"spanish": "Brim",
				"vietnamese": "Brim",
				"thai": "บริม",
				"hindi": "ब्रिम"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/08ad0e4d-214d-43b3-dc3e-ddfba9049300/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/16f1def2-7c33-4558-4b21-9c3e87fa3e00/public"
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
					"type": "speech",
					"content": {
						"korean": "심연은 고요했다. '구원받은' 자들은 텅 빈 얼굴로 부유할 뿐이었다.",
						"english": "The abyss was silent. The \"redeemed\" merely floated with vacant faces.",
						"japanese": "深淵は静寂だった。「救済された」者たちは、虚ろな顔で漂うばかりだった。",
						"chinese": "深渊一片寂静。“被救赎”者们只是面无表情地漂浮着。",
						"french": "L'abîme était silencieux. Les « rachetés » flottaient simplement avec des visages vides.",
						"spanish": "El abismo estaba en silencio. Los \"redimidos\" simplemente flotaban con rostros vacíos.",
						"vietnamese": "Vực sâu tĩnh lặng. Những kẻ \"được cứu rỗi\" chỉ trôi nổi với gương mặt trống rỗng.",
						"thai": "ห้วงเหวลึกเงียบงัน ผู้ที่ 'ได้รับความรอด' เพียงลอยเคว้งด้วยใบหน้าที่ว่างเปล่า",
						"hindi": "अतल शांत था। 'मुक्ति पाए' हुए लोग खाली चेहरों के साथ बस तैर रहे थे।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…너무 조용해. 이상한 평화야.",
						"english": "...Too quiet. A strange peace.",
						"japanese": "……静かすぎる。奇妙な平和だ。",
						"chinese": "……太安静了。一种奇怪的平静。",
						"french": "...Trop silencieux. Une paix étrange.",
						"spanish": "...Demasiado silencioso. Una paz extraña.",
						"vietnamese": "...Quá yên ắng. Một sự bình yên kỳ lạ.",
						"thai": "...เงียบเกินไป ความสงบที่แปลกประหลาด",
						"hindi": "...बहुत शांत। एक अजीब शांति।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "순간, 가슴 속에서 알 수 없는 평온함이 스쳤다. 이내 불쾌한 분노가 치밀었다.",
						"english": "For a moment, an inexplicable calm brushed my chest. Then, an unpleasant anger surged.",
						"japanese": "一瞬、胸に得体の知れない平穏がよぎった。すぐに不快な怒りがこみ上げた。",
						"chinese": "瞬间，胸中划过一丝莫名的平静。紧接着，一股令人不快的怒火涌上心头。",
						"french": "Un instant, un calme inexplicable m'a effleuré la poitrine. Puis, une colère désagréable a surgi.",
						"spanish": "Por un momento, una calma inexplicable rozó mi pecho. Luego, una ira desagradable surgió.",
						"vietnamese": "Trong chốc lát, một sự bình yên không thể giải thích lướt qua lồng ngực. Ngay sau đó, một cơn giận dữ khó chịu trỗi dậy.",
						"thai": "ชั่วขณะหนึ่ง ความสงบที่ไม่ทราบสาเหตุแล่นผ่านอก ทันใดนั้น ความโกรธเคืองที่ไม่พึงประสงค์ก็พลุ่งพล่านขึ้น",
						"hindi": "एक पल के लिए, एक अवर्णनीय शांति मेरे सीने से गुजरी। फिर, एक अप्रिय क्रोध उमड़ पड़ा।"
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "brim",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "아아, 새로운 사냥꾼인가. 이 기회를 놓칠 셈인가?",
						"english": "Ah, a new hunter? Do you intend to miss this chance?",
						"japanese": "ああ、新しい狩人か。この機会を逃すつもりか？",
						"chinese": "啊，是新的猎人吗？你打算错过这个机会吗？",
						"french": "Ah, un nouveau chasseur ? Comptez-vous rater cette occasion ?",
						"spanish": "¿Ah, un nuevo cazador? ¿Piensas perder esta oportunidad?",
						"vietnamese": "À, một thợ săn mới à? Ngươi định bỏ lỡ cơ hội này sao?",
						"thai": "อ่า นักล่าคนใหม่หรือ จะปล่อยโอกาสนี้ให้หลุดลอยไปหรือ",
						"hindi": "आह, एक नया शिकारी? क्या तुम इस मौके को गँवाने का इरादा रखते हो?"
					},
					"speaker": "brim"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "당신은 누구지?",
						"english": "Who are you?",
						"japanese": "あなたは誰だ？",
						"chinese": "你 Mèo là ai?",
						"french": "Qui es-tu ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ngươi là ai?",
						"thai": "คุณคือใคร",
						"hindi": "तुम कौन हो?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "나는 브림. 살아남은 자지. 그리고… 이 상황을 즐기는 자.",
						"english": "I am Brim. One who survived. And... one who enjoys this situation.",
						"japanese": "私はブリム。生き残った者だ。そして…この状況を楽しむ者。",
						"chinese": "我是布里姆。一个幸存者。而且……一个享受这种局面的人。",
						"french": "Je suis Brim. Un survivant. Et... quelqu'un qui apprécie cette situation.",
						"spanish": "Soy Brim. Un superviviente. Y... alguien que disfruta de esta situación.",
						"vietnamese": "Ta là Brim. Kẻ sống sót. Và... kẻ tận hưởng tình cảnh này.",
						"thai": "ฉันคือบริม ผู้รอดชีวิต และ... ผู้ที่เพลิดเพลินกับสถานการณ์นี้",
						"hindi": "मैं ब्रिम हूँ। एक जीवित बचा हुआ। और... वह जो इस स्थिति का आनंद लेता है।"
					},
					"emotion": "happy",
					"speaker": "brim"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						2,
						2
					],
					"duration_ms": 550,
					"speaker": "brim",
					"action": "enter"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "여기 보라지. 저 '구원받은' 것들. 가끔씩 움찔거린다고.",
						"english": "Look. Those 'redeemed' ones. They twitch sometimes.",
						"japanese": "見ろよ。あの「救済された」連中が、時々ぴくつくんだ。",
						"chinese": "瞧。那些“被救赎者”。它们有时会抽搐。",
						"french": "Regarde. Ces \"rachetés\". Ils tressaillent parfois.",
						"spanish": "Mira. Esos 'redimidos'. A veces se contraen.",
						"vietnamese": "Nhìn kìa. Những kẻ \"được cứu rỗi\" đó. Thỉnh thoảng chúng vẫn giật giật.",
						"thai": "ดูสิ พวก 'ผู้รอด' นั่น บางทีก็กระตุกนะ",
						"hindi": "देखो। वे 'बचाए गए' लोग। वे कभी-कभी झटके खाते हैं।"
					},
					"speaker": "brim"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "저 사람… 방금 몸을 떨었어. 아파하는 것 같았는데?",
						"english": "That person... just shivered. Did they seem to be in pain?",
						"japanese": "あの人…今、身震いした。苦しんでいるようだったけど？",
						"chinese": "那个人……刚才颤抖了一下。好像很痛苦？",
						"french": "Cette personne... vient de frissonner. Semblait-elle souffrir ?",
						"spanish": "Esa persona... acaba de temblar. ¿Parecía tener dolor?",
						"vietnamese": "Người đó... vừa run rẩy. Có vẻ như họ đang đau đớn?",
						"thai": "คนนั้น... เพิ่งจะสั่น ดูเหมือนจะเจ็บปวดนะ?",
						"hindi": "वह व्यक्ति... अभी-अभी काँप उठा। क्या वह दर्द में लग रहा था?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "하. 착각이겠지. 아니면… 새로운 사업 기회거나.",
						"english": "Ha. Must be a mistake. Or... a new business opportunity.",
						"japanese": "ハッ。勘違いだろう。それとも…新たなビジネスチャンスか。",
						"chinese": "哈。一定是错觉。或者……一个新的商机。",
						"french": "Ha. Une erreur, sûrement. Ou... une nouvelle opportunité d'affaires.",
						"spanish": "Ja. Debe ser un error. O... una nueva oportunidad de negocio.",
						"vietnamese": "Ha. Chắc là nhầm lẫn thôi. Hoặc... một cơ hội kinh doanh mới.",
						"thai": "ฮ่า. คงคิดไปเองล่ะมั้ง หรือไม่ก็... โอกาสทางธุรกิจใหม่",
						"hindi": "हा। यह भ्रम होगा। या... एक नया व्यापार अवसर।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "brim"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "고통이 사라진 게 아니라… 가둬진 거구나.",
						"english": "The pain isn't gone... it's just imprisoned.",
						"japanese": "苦痛は消えたんじゃなく…閉じ込められたのか。",
						"chinese": "痛苦并没有消失……只是被囚禁了。",
						"french": "La douleur n'est pas partie... elle est juste emprisonnée.",
						"spanish": "El dolor no se fue... solo fue aprisionado.",
						"vietnamese": "Nỗi đau không biến mất... mà chỉ bị giam cầm thôi.",
						"thai": "ความเจ็บปวดไม่ได้หายไป... แต่มันถูกกักขังไว้ต่างหาก",
						"hindi": "दर्द गायब नहीं हुआ... बल्कि कैद हो गया है।"
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "brim",
					"duration_ms": 450,
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "brim",
					"type": "speech",
					"content": {
						"korean": "좀 더 깊이 들어가면 더 심해. 그들의 '평화'는 기만이니까.",
						"english": "Go deeper, it gets worse. Their 'peace' is a deception.",
						"japanese": "もっと深く入ると、もっとひどくなる。彼らの「平和」は欺瞞だからな。",
						"chinese": "再深入一些，情况会更糟。他们的“和平”只是欺骗。",
						"french": "Va plus profond, c'est pire. Leur 'paix' est une tromperie.",
						"spanish": "Entra más profundo, empeora. Su 'paz' es un engaño.",
						"vietnamese": "Càng vào sâu càng tệ hơn. \"Sự bình yên\" của chúng là một sự lừa dối.",
						"thai": "เข้าไปลึกกว่านี้จะยิ่งแย่ลง 'สันติสุข' ของพวกมันคือการหลอกลวง",
						"hindi": "और गहराई में जाओ, यह और बुरा होगा। उनकी 'शांति' एक धोखा है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "진짜 아파하고 있어… 저들은 뭘 보고 있는 거지?",
						"english": "They're really in pain... What are they seeing?",
						"japanese": "本当に苦しんでいる…あれらは何を見ているんだ？",
						"chinese": "他们真的在痛苦中……他们看到了什么？",
						"french": "Ils souffrent vraiment... Que voient-ils ?",
						"spanish": "Realmente están sufriendo... ¿Qué están viendo?",
						"vietnamese": "Họ thực sự đang đau đớn... Họ đang nhìn thấy gì vậy?",
						"thai": "พวกเขาเจ็บปวดจริงๆ... พวกเขากำลังเห็นอะไรอยู่?",
						"hindi": "वे वास्तव में दर्द में हैं... वे क्या देख रहे हैं?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "그 환영을 이용할 수 있지. 약점은 언제나 돈이 되거든.",
						"english": "We can use those illusions. Weaknesses always turn a profit.",
						"japanese": "あの幻影を利用できるな。弱点はいつだって金になる。",
						"chinese": "我们可以利用那些幻象。弱点总是能赚钱。",
						"french": "On peut utiliser ces illusions. Les faiblesses rapportent toujours.",
						"spanish": "Podemos usar esas ilusiones. Las debilidades siempre dan ganancias.",
						"vietnamese": "Chúng ta có thể lợi dụng những ảo ảnh đó. Điểm yếu luôn mang lại lợi nhuận.",
						"thai": "เราใช้ภาพลวงตาเหล่านั้นได้ จุดอ่อนมักจะสร้างกำไรเสมอ",
						"hindi": "हम उन भ्रमों का उपयोग कर सकते हैं। कमजोरियाँ हमेशा मुनाफा कमाती हैं।"
					},
					"type": "speech",
					"emotion": "happy",
					"speaker": "brim"
				},
				{
					"content": {
						"korean": "벽에 징그러운 결정들이 피어 있었다. 희미하게 맥박치며, 알아들을 수 없는 속삭임을 흘렸다.",
						"english": "Grotesque crystals bloomed on the walls. They pulsed faintly, emitting unintelligible whispers.",
						"japanese": "壁にはおぞましい結晶が咲き乱れていた。かすかに脈打ち、理解不能なささやきを漏らしていた。",
						"chinese": "墙壁上盛开着怪异的结晶。它们微弱地搏动着，发出难以理解的低语。",
						"french": "Des cristaux grotesques fleurissaient sur les murs. Ils pulsaient faiblement, émettant des murmures inintelligibles.",
						"spanish": "Cristales grotescos florecían en las paredes. Pulsaban débilmente, emitiendo susurros ininteligibles.",
						"vietnamese": "Những tinh thể gớm ghiếc mọc đầy trên tường. Chúng đập nhẹ, phát ra những lời thì thầm không thể hiểu nổi.",
						"thai": "ผลึกน่าเกลียดผุดขึ้นบนกำแพง พวกมันเต้นเป็นจังหวะเบาๆ พร้อมกับปล่อยเสียงกระซิบที่ฟังไม่รู้เรื่อง",
						"hindi": "दीवारों पर विचित्र क्रिस्टल खिले हुए थे। वे हल्के से धड़कते हुए, समझने योग्य फुसफुसाहटें छोड़ रहे थे।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "이 숲… 점점 더 역겨워지는군.",
						"english": "This forest... it's getting more disgusting.",
						"japanese": "この森…だんだん吐き気がするな。",
						"chinese": "这片森林……变得越来越令人作呕。",
						"french": "Cette forêt... elle devient de plus en plus répugnante.",
						"spanish": "Este bosque... se está volviendo más asqueroso.",
						"vietnamese": "Khu rừng này... ngày càng kinh tởm hơn.",
						"thai": "ป่านี่... ชักจะน่ารังเกียจขึ้นเรื่อยๆ แล้ว",
						"hindi": "यह जंगल... यह और घिनौना होता जा रहा है।"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "brim",
					"spot": [
						4,
						2
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "여기까지 왔는데, 아직도 그 '희망' 타령인가?",
						"english": "We've come this far, and you're still clinging to that 'hope'?",
						"japanese": "ここまで来て、まだその「希望」を語るのか？",
						"chinese": "都到这里了，你还在提那“希望”吗？",
						"french": "On est arrivés jusque-là, et tu t'accroches encore à cet 'espoir' ?",
						"spanish": "Hemos llegado hasta aquí, ¿y aún te aferras a esa 'esperanza'?",
						"vietnamese": "Chúng ta đã đi xa đến vậy, mà ngươi vẫn còn bám víu vào cái 'hy vọng' đó sao?",
						"thai": "มาถึงขนาดนี้แล้ว ยังจะพูดถึง 'ความหวัง' นั่นอีกเหรอ?",
						"hindi": "हम इतनी दूर आ गए हैं, और तुम अब भी उस 'आशा' पर टिके हो?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "brim"
				},
				{
					"content": {
						"korean": "희망이 아니야. 이건… 진실이야.",
						"english": "It's not hope. This is... the truth.",
						"japanese": "希望じゃない。これは…真実だ。",
						"chinese": "这不是希望。这是…真相。",
						"french": "Ce n'est pas l'espoir. C'est... la vérité.",
						"spanish": "No es esperanza. Esto es... la verdad.",
						"vietnamese": "Đây không phải hy vọng. Đây là... sự thật.",
						"thai": "นี่ไม่ใช่ความหวัง นี่คือ... ความจริง",
						"hindi": "यह आशा नहीं है। यह… सत्य है।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "환영 속 고통은 더욱 선명해졌다. 텅 빈 눈동자에서 눈물이 흘러내렸다.",
						"english": "The pain in the illusion sharpened. Tears streamed from vacant eyes.",
						"japanese": "幻影の苦痛は一層鮮明になった。虚ろな瞳から涙が溢れ落ちた。",
						"chinese": "幻象中的痛苦更加清晰。空洞的眼睛里流下了眼泪。",
						"french": "La douleur dans l'illusion s'intensifia. Des larmes coulaient de ses yeux vides.",
						"spanish": "El dolor en la ilusión se agudizó. Las lágrimas brotaban de unos ojos vacíos.",
						"vietnamese": "Nỗi đau trong ảo ảnh càng thêm rõ nét. Nước mắt trào ra từ đôi mắt vô hồn.",
						"thai": "ความเจ็บปวดในภาพลวงตาคมชัดขึ้น น้ำตาไหลรินจากดวงตาที่ว่างเปล่า",
						"hindi": "भ्रम में दर्द और तीखा हो गया। खाली आँखों से आँसू बहने लगे।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "낡은 일기장이 나뒹굴었다. '진정한 망각을 거부한 자들은, 두 번째 지옥에서 번성한다'는 구절이 쓰여 있었다.",
						"english": "An old diary lay open. A passage read: 'Those who deny true oblivion thrive in the second hell.'",
						"japanese": "古い日記が転がっていた。『真の忘却を拒んだ者たちは、第二の地獄で繁栄する』という一節が書かれていた。",
						"chinese": "一本旧日记本散落在地。上面写着一段话：'那些拒绝真正遗忘的人，在第二地狱中繁荣。'",
						"french": "Un vieux journal était étalé. Un passage disait : 'Ceux qui refusent le véritable oubli prospèrent dans le deuxième enfer.'",
						"spanish": "Un viejo diario yacía abierto. Un pasaje decía: 'Aquellos que niegan el verdadero olvido prosperan en el segundo infierno.'",
						"vietnamese": "Một cuốn nhật ký cũ nằm lăn lóc. Một đoạn viết rằng: 'Những kẻ từ chối sự lãng quên thực sự, sẽ phát triển mạnh ở địa ngục thứ hai.'",
						"thai": "สมุดบันทึกเก่าเปิดอยู่ มีข้อความเขียนไว้ว่า: 'ผู้ที่ปฏิเสธการลืมเลือนที่แท้จริง จะเจริญรุ่งเรืองในนรกแห่งที่สอง'",
						"hindi": "एक पुरानी डायरी खुली पड़ी थी। उसमें एक अंश लिखा था: 'जो सच्चे विस्मृति को नकारते हैं, वे दूसरे नरक में फलते-फूलते हैं।'"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "루멘의 '구원'은… 또 다른 악몽을 만들었어.",
						"english": "Lumen's 'salvation'... created yet another nightmare.",
						"japanese": "ルーメンの『救済』は…また別の悪夢を生み出した。",
						"chinese": "流明（Lumen）的'救赎'…创造了另一个噩梦。",
						"french": "La 'rédemption' de Lumen... a créé un autre cauchemar.",
						"spanish": "La 'salvación' de Lumen... creó otra pesadilla.",
						"vietnamese": "'Sự cứu rỗi' của Lumen... đã tạo ra một cơn ác mộng khác.",
						"thai": "'ความรอด' ของลูเมน... สร้างฝันร้ายอีกอย่างหนึ่ง",
						"hindi": "ल्यूमेन की 'मुक्ति'... ने एक और दुःस्वप्न बनाया।"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "헛된 저항… 결국… 너희도… 평온해질 것이다….",
						"english": "Futile resistance... Eventually... you too... will find peace...",
						"japanese": "無駄な抵抗…結局…お前たちも…平穏になるだろう…。",
						"chinese": "徒劳的抵抗……最终……你们也会……归于平静……。",
						"french": "Résistance vaine... Finalement... vous aussi... trouverez la paix...",
						"spanish": "Resistencia inútil... Al final... vosotros también... encontraréis la paz...",
						"vietnamese": "Kháng cự vô ích... Cuối cùng... các ngươi cũng sẽ... được bình yên...",
						"thai": "การต่อต้านที่ไร้ประโยชน์... ในที่สุด... พวกเจ้าก็... จะสงบลง...",
						"hindi": "व्यर्थ का प्रतिरोध... अंततः... तुम भी... शांत हो जाओगे..."
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…아직 아니야. 절대 포기 안 해.",
						"english": "...Not yet. I'll never give up.",
						"japanese": "...まだだ。決して諦めない。",
						"chinese": "...还没。绝不放弃。",
						"french": "...Pas encore. Je n'abandonnerai jamais.",
						"spanish": "...Todavía no. Nunca me rendiré.",
						"vietnamese": "...Chưa đâu. Tuyệt đối không bỏ cuộc.",
						"thai": "...ยังไม่ใช่ตอนนี้. ฉันจะไม่มีวันยอมแพ้.",
						"hindi": "...अभी नहीं। मैं कभी हार नहीं मानूंगा।"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "공허 속에서 거대한 그림자가 일렁였다. '구원'의 뒤틀린 결과였다.",
						"english": "A colossal shadow flickered in the void. It was the twisted outcome of 'salvation.'",
						"japanese": "虚空の中で巨大な影が揺らめいた。『救済』の歪んだ結果だった。",
						"chinese": "虚空中，一个巨大的影子闪烁着。那是'救赎'扭曲的结果。",
						"french": "Une ombre colossale vacillait dans le vide. C'était le résultat tordu de la 'rédemption'.",
						"spanish": "Una sombra colosal parpadeaba en el vacío. Era el resultado retorcido de la 'salvación'.",
						"vietnamese": "Một bóng đen khổng lồ chập chờn trong hư không. Đó là kết quả méo mó của 'sự cứu rỗi'.",
						"thai": "เงาขนาดมหึมาสั่นไหวในความว่างเปล่า มันเป็นผลลัพธ์ที่บิดเบี้ยวของ 'ความรอด'",
						"hindi": "शून्य में एक विशाल छाया झिलमिला रही थी। यह 'मुक्ति' का विकृत परिणाम था।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "내 고통이… 너희를 여기까지 끌고 왔군.",
						"english": "My suffering... brought you all this far.",
						"japanese": "私の苦痛が…お前たちをここまで引きずり込んだか。",
						"chinese": "我的痛苦…把你们带到了这里。",
						"french": "Ma souffrance... vous a amenés jusqu'ici.",
						"spanish": "Mi sufrimiento... os trajo hasta aquí.",
						"vietnamese": "Nỗi đau của ta... đã kéo các ngươi đến tận đây.",
						"thai": "ความเจ็บปวดของข้า... นำพวกเจ้ามาไกลถึงเพียงนี้",
						"hindi": "मेरा कष्ट… तुम सबको यहाँ तक ले आया है।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "네가… 이 모든 고통의 근원인가?",
						"english": "Are you... the source of all this suffering?",
						"japanese": "お前が…この全ての苦痛の根源なのか？",
						"chinese": "你…是所有这些痛苦的根源吗？",
						"french": "Es-tu... la source de toute cette souffrance ?",
						"spanish": "¿Eres tú... la fuente de todo este sufrimiento?",
						"vietnamese": "Ngươi... là nguồn gốc của mọi nỗi đau này sao?",
						"thai": "เจ้า... คือต้นเหตุของความเจ็บปวดทั้งหมดนี้หรือ?",
						"hindi": "क्या तुम… इस सारे कष्ट का स्रोत हो?"
					},
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"direction": "down",
					"duration_ms": 500,
					"speaker": "brim",
					"action": "exit"
				},
				{
					"type": "speech",
					"content": {
						"korean": "젠장… 생각보다 더 더러운 장사판이군. 나는 빠진다.",
						"english": "Damn it... this business is dirtier than I thought. I'm out.",
						"japanese": "くそ…思ったより汚い商売だな。俺は抜ける。",
						"chinese": "该死…这生意比我想象的还要肮脏。我退出。",
						"french": "Merde... cette affaire est plus sale que je ne le pensais. Je me retire.",
						"spanish": "Maldita sea... este negocio es más sucio de lo que pensé. Me retiro.",
						"vietnamese": "Chết tiệt... chuyện này bẩn thỉu hơn ta nghĩ. Ta rút lui.",
						"thai": "ให้ตายสิ... ธุรกิจนี้น่ารังเกียจกว่าที่คิดไว้ ฉันขอถอนตัว",
						"hindi": "धिक्कार है… यह धंधा जितना सोचा था, उससे कहीं ज़्यादा गंदा है। मैं बाहर हूँ।"
					},
					"emotion": "sad",
					"speaker": "brim"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "혼자라도… 멈출 거야.",
						"english": "Even alone... I'll stop it.",
						"japanese": "一人でも…止めるさ。",
						"chinese": "即使只剩一人…我也会阻止它。",
						"french": "Même seul... je l'arrêterai.",
						"spanish": "Incluso solo... lo detendré.",
						"vietnamese": "Dù chỉ một mình... ta cũng sẽ ngăn chặn.",
						"thai": "แม้จะอยู่คนเดียว... ฉันก็จะหยุดมัน",
						"hindi": "अकेले भी… मैं इसे रोकूँगा।"
					},
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "멍청한 것들… 나는 그저… 씨앗일 뿐… 진정한 뿌리는… 이미 깊이….",
						"english": "Fools... I am merely... a seed... The true root is... already deep...",
						"japanese": "愚か者ども…私はただ…種に過ぎない…真の根は…既に深く…。",
						"chinese": "蠢货们…我不过是…一颗种子…真正的根…早已深埋…",
						"french": "Imbéciles... Je ne suis qu'une... graine... La vraie racine est... déjà profonde...",
						"spanish": "Tontos... solo soy... una semilla... La verdadera raíz está... ya profunda...",
						"vietnamese": "Lũ ngu ngốc... Ta chỉ là... một hạt giống... Rễ cây thật sự... đã ăn sâu...",
						"thai": "เจ้าพวกโง่... ฉันเป็นแค่... เมล็ดพันธุ์... รากที่แท้จริง... ฝังลึกแล้ว...",
						"hindi": "मूर्खों… मैं तो बस… एक बीज हूँ… असली जड़… पहले ही गहराई में…"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…끝이 아니었어.",
						"english": "...It wasn't over.",
						"japanese": "...終わりではなかった。",
						"chinese": "...还没结束。",
						"french": "...Ce n'était pas la fin.",
						"spanish": "...No era el final.",
						"vietnamese": "...Chưa phải kết thúc.",
						"thai": "...ยังไม่จบ.",
						"hindi": "...यह अंत नहीं था।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "뒤틀린 고통의 근원을 처치했다. 그러나 더 깊은 절망이 그들을 기다리고 있었다.",
						"english": "The source of twisted agony was defeated. But a deeper despair awaited them.",
						"japanese": "歪んだ苦痛の根源を打ち倒した。しかし、より深い絶望が彼らを待ち受けていた。",
						"chinese": "扭曲的痛苦之源被消灭了。然而，更深的绝望正在等待着他们。",
						"french": "La source de l'agonie tordue a été vaincue. Mais un désespoir plus profond les attendait.",
						"spanish": "La fuente del retorcido dolor fue eliminada. Pero una desesperación más profunda les esperaba.",
						"vietnamese": "Nguồn gốc của nỗi đau vặn vẹo đã bị tiêu diệt. Nhưng một nỗi tuyệt vọng sâu sắc hơn đang chờ đợi họ.",
						"thai": "กำจัดต้นตอแห่งความเจ็บปวดบิดเบี้ยวแล้ว แต่ความสิ้นหวังที่ลึกซึ้งกว่ากำลังรอคอยพวกเขาอยู่",
						"hindi": "विकृत पीड़ा का स्रोत पराजित हो गया था। लेकिन एक गहरी निराशा उनका इंतजार कर रही थी।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"세계수는 고요하다. 루멘의 '구원'이 가져온 정적은 모든 것을 덮었다.",
			"허나 그 침묵 아래, 죽지 못한 고통이 조용히 뒤틀리고 있었다.",
			"누군가는 이 고통을 이용하려 하고, 누군가는 그 속에서 진실을 보려 한다.",
			"뒤틀린 치유의 흔적. 평화가 드리운 재앙의 시작이었다."
		],
		"english": [
			"The World Tree stands silent. Lumen's \"Salvation\" brought a stillness that covered all.",
			"Yet beneath that silence, an undying agony quietly writhed.",
			"Some seek to exploit this pain, while others try to see the truth within it.",
			"Traces of distorted healing. It was the beginning of a disaster veiled by peace."
		],
		"japanese": [
			"世界樹は静寂に包まれている。ルーメンの「救済」がもたらした静けさがすべてを覆った。",
			"しかしその沈黙の下では、死にきれなかった苦痛が静かに蠢いていた。",
			"誰かはその苦痛を利用しようとし、誰かはその中で真実を見ようとする。",
			"歪んだ癒しの痕跡。それは平和に覆われた災厄の始まりだった。"
		],
		"chinese": [
			"世界树一片寂静。流明“救赎”带来的寂静覆盖了一切。",
			"然而在这片寂静之下，未能死去的痛苦正在悄然扭曲。",
			"有人试图利用这份痛苦，有人则试图从中窥见真相。",
			"扭曲的治愈痕迹。这是和平笼罩下的灾难的开端。"
		],
		"french": [
			"L'Arbre-Monde est silencieux. Le « Salut » de Lumen a apporté un silence qui a tout recouvert.",
			"Mais sous ce silence, une agonie immortelle se tordait doucement.",
			"Certains cherchent à exploiter cette douleur, tandis que d'autres tentent d'y voir la vérité.",
			"Traces de guérison déformée. Ce fut le début d'un désastre voilé par la paix."
		],
		"spanish": [
			"El Árbol del Mundo está en silencio. La \"Salvación\" de Lumen trajo una quietud que lo cubrió todo.",
			"Sin embargo, bajo ese silencio, una agonía inmortal se retorcía silenciosamente.",
			"Algunos buscan explotar este dolor, mientras que otros intentan ver la verdad en él.",
			"Rastros de curación distorsionada. Fue el comienzo de un desastre velado por la paz."
		],
		"vietnamese": [
			"Cây Thế giới tĩnh lặng. Sự \"Cứu Rỗi\" của Lumen mang đến một sự tĩnh mịch bao trùm tất cả.",
			"Thế nhưng, dưới sự tĩnh lặng ấy, nỗi đau không thể chết vẫn âm thầm vặn vẹo.",
			"Kẻ thì muốn lợi dụng nỗi đau này, kẻ thì muốn nhìn thấy sự thật ẩn chứa bên trong.",
			"Dấu vết của sự chữa lành méo mó. Đó là sự khởi đầu của một tai ương ẩn mình dưới vỏ bọc hòa bình."
		],
		"thai": [
			"ต้นไม้โลกสงบนิ่ง ความเงียบงันที่ 'ความรอด' ของลูเมนนำมาได้ปกคลุมทุกสิ่ง",
			"ทว่า ภายใต้ความเงียบงันนั้น ความเจ็บปวดที่มิอาจตายได้กำลังบิดเบี้ยวอย่างเงียบงัน",
			"บางคนพยายามใช้ประโยชน์จากความเจ็บปวดนี้ บางคนพยายามมองเห็นความจริงในนั้น",
			"ร่องรอยของการเยียวยาที่บิดเบี้ยว มันคือจุดเริ่มต้นของหายนะที่ถูกปกคลุมด้วยความสงบสุข"
		],
		"hindi": [
			"विश्व वृक्ष शांत है। ल्यूमेन की 'मुक्ति' लाई शांति ने सब कुछ ढक दिया।",
			"फिर भी उस शांति के नीचे, एक अमर पीड़ा चुपचाप मचल रही थी।",
			"कुछ लोग इस पीड़ा का फायदा उठाना चाहते हैं, जबकि कुछ अन्य इसमें सच्चाई देखने की कोशिश करते हैं।",
			"विकृत उपचार के निशान। यह शांति से ढकी हुई एक आपदा की शुरुआत थी।"
		]
	}
} as const;
