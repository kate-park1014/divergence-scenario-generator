export const scenario_snowy_fluffymenace_53_03 = {
	"scenario_id": "snowy_fluffymenace_53_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"boris": {
			"id": "mon_8f41e00a-9c1b-4e66-9d7a-584cc2a9af84",
			"name": {
				"korean": "보리스",
				"english": "Boris",
				"japanese": "ボリス",
				"chinese": "鲍里斯",
				"french": "Boris",
				"spanish": "Boris",
				"vietnamese": "Boris",
				"thai": "บอริส",
				"hindi": "बोरिस"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8db2ee50-a24d-43cf-a3ec-fad83142f500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/961dfd96-9db1-42aa-a15b-82ba7d1ae700/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"진실은 조각나, 광기 속에 숨겨져 있었다.",
			"달콤한 코코아에서 차가운 쇠맛이 났다.",
			"기억은 흐려지고, 확신은 흔들린다.",
			"이 모든 혼란 속에서, 주인공은 의심하기 시작했다."
		],
		"english": [
			"The truth, shattered, was hidden in madness.",
			"The sweet cocoa tasted of cold iron.",
			"Memories blur, conviction wavers.",
			"Amidst all this confusion, the protagonist began to doubt."
		],
		"japanese": [
			"真実は砕け散り、狂気の中に隠されていた。",
			"甘いココアから冷たい鉄の味がした。",
			"記憶は曖昧になり、確信は揺らぐ。",
			"この混乱の中で、主人公は疑念を抱き始めた。"
		],
		"chinese": [
			"真相支离破碎，隐藏在疯狂之中。",
			"甜美的可可尝起来有冰冷的铁锈味。",
			"记忆模糊，信念动摇。",
			"在这所有混乱中，主人公开始怀疑。"
		],
		"french": [
			"La vérité, brisée, était cachée dans la folie.",
			"Le doux cacao avait un goût de fer froid.",
			"Les souvenirs s'estompent, la certitude vacille.",
			"Au milieu de toute cette confusion, le protagoniste commença à douter."
		],
		"spanish": [
			"La verdad, hecha pedazos, estaba oculta en la locura.",
			"El dulce cacao sabía a hierro frío.",
			"Los recuerdos se difuminan, la convicción flaquea.",
			"En medio de toda esta confusión, el protagonista empezó a dudar."
		],
		"vietnamese": [
			"Sự thật vỡ vụn, ẩn mình trong điên loạn.",
			"Ca cao ngọt ngào lại có vị kim loại lạnh lẽo.",
			"Ký ức mờ nhạt, niềm tin lung lay.",
			"Giữa tất cả hỗn loạn này, nhân vật chính bắt đầu nghi ngờ."
		],
		"thai": [
			"ความจริงแตกสลาย ซ่อนอยู่ในความบ้าคลั่ง",
			"โกโก้รสหวานกลับมีรสชาติเหล็กเย็นเฉียบ",
			"ความทรงจำเลือนลาง ความมั่นใจสั่นคลอน",
			"ท่ามกลางความสับสนอลหม่าน ตัวเอกเริ่มสงสัย"
		],
		"hindi": [
			"सच बिखर गया था, पागलपन में छिपा हुआ था।",
			"मीठे कोको में ठंडे लोहे का स्वाद था।",
			"यादें धुंधली हो जाती हैं, दृढ़ विश्वास डगमगाता है।",
			"इस सब भ्रम के बीच, नायक को संदेह होने लगा।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "낡은 오두막 안, 한 남자가 홀로 벽에 기댄 채 중얼거렸다.",
						"english": "Inside the old shack, a man muttered to himself, leaning against the wall.",
						"japanese": "古い小屋の中、男は一人、壁に寄りかかりつぶやいた。",
						"chinese": "在破旧的小屋里，一个男人独自靠墙低语着。",
						"french": "À l'intérieur de la vieille cabane, un homme marmonnait seul, adossé au mur.",
						"spanish": "Dentro de la vieja cabaña, un hombre murmuraba para sí mismo, apoyado en la pared.",
						"vietnamese": "Trong căn lều cũ, một người đàn ông lẩm bẩm một mình, dựa vào tường.",
						"thai": "ในกระท่อมเก่า ชายคนหนึ่งพึมพำกับตัวเอง พิงกำแพง",
						"hindi": "पुरानी झोपड़ी के अंदर, एक आदमी दीवार से टिका हुआ अकेला बुदबुदा रहा था।"
					}
				},
				{
					"speaker": "boris",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "boris",
					"content": {
						"korean": "시스템이… 시스템이 우리를 속이고 있어!",
						"english": "The system... the system is deceiving us!",
						"japanese": "システムが… システムが俺たちを欺いている！",
						"chinese": "系统…系统在欺骗我们！",
						"french": "Le système... le système nous trompe !",
						"spanish": "¡El sistema... el sistema nos está engañando!",
						"vietnamese": "Hệ thống... hệ thống đang lừa dối chúng ta!",
						"thai": "ระบบ... ระบบกำลังหลอกลวงพวกเรา!",
						"hindi": "सिस्टम... सिस्टम हमें धोखा दे रहा है!"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "누구시죠? 괜찮으세요?",
						"english": "Who are you? Are you alright?",
						"japanese": "どなたですか？大丈夫ですか？",
						"chinese": "你是谁？你还好吗？",
						"french": "Qui êtes-vous ? Ça va ?",
						"spanish": "¿Quién es usted? ¿Está bien?",
						"vietnamese": "Anh là ai? Anh có ổn không?",
						"thai": "คุณเป็นใคร? คุณสบายดีไหม?",
						"hindi": "आप कौन हैं? क्या आप ठीक हैं?"
					},
					"type": "speech"
				},
				{
					"speaker": "boris",
					"content": {
						"korean": "그 코코아! 따뜻하다고? 웃기지 마! 독이야, 독!",
						"english": "That cocoa! Warm? Don't make me laugh! It's poison, poison!",
						"japanese": "あのココア！温かいだと？笑わせるな！毒だ、毒！",
						"chinese": "那杯可可！暖和？别开玩笑了！那是毒药，毒药！",
						"french": "Ce cacao ! Chaud ? Ne me fais pas rire ! C'est du poison, du poison !",
						"spanish": "¡Ese cacao! ¿Caliente? ¡No me hagas reír! ¡Es veneno, veneno!",
						"vietnamese": "Cacao đó! Ấm áp ư? Đừng làm tôi cười! Đó là độc, độc!",
						"thai": "โกโก้นั่น! อุ่นเหรอ? อย่ามาตลกน่า! มันคือยาพิษ ยาพิษ!",
						"hindi": "वह कोको! गर्म? मुझे हँसाओ मत! यह ज़हर है, ज़हर!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "코코아라니… 무슨 소리 하는 거야?",
						"english": "Cocoa...? What are you talking about?",
						"japanese": "ココアだと…何を言っているんだ？",
						"chinese": "可可…你在说什么？",
						"french": "Du cacao...? De quoi parlez-vous ?",
						"spanish": "¿Cacao...? ¿De qué está hablando?",
						"vietnamese": "Ca cao...? Anh đang nói gì vậy?",
						"thai": "โกโก้เหรอ... คุณกำลังพูดอะไรน่ะ?",
						"hindi": "कोको...? तुम क्या कह रहे हो?"
					},
					"emotion": "sad"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"speaker": "boris",
					"type": "direction"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "boris",
					"content": {
						"korean": "봤지? 다 거짓말이야! 이 세상 전부가….",
						"english": "See? It's all a lie! This whole world...",
						"japanese": "見たか？全部嘘だ！この世界全てが…。",
						"chinese": "看到了吗？全都是谎言！这整个世界…",
						"french": "Tu vois ? Tout est un mensonge ! Ce monde entier...",
						"spanish": "¿Ves? ¡Todo es una mentira! Este mundo entero...",
						"vietnamese": "Thấy chưa? Tất cả là dối trá! Toàn bộ thế giới này...",
						"thai": "เห็นไหม? มันโกหกทั้งนั้น! โลกทั้งใบนี้...",
						"hindi": "देखा? सब झूठ है! यह पूरी दुनिया..."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…머리가 아파. 아까 마신 코코아가 이상해.",
						"english": "...My head hurts. The cocoa I drank earlier was strange.",
						"japanese": "...頭が痛い。さっき飲んだココアがおかしい。",
						"chinese": "...头好疼。刚才喝的可可有点怪。",
						"french": "...Ma tête me fait mal. Le cacao que j'ai bu tout à l'heure était bizarre.",
						"spanish": "...Me duele la cabeza. El cacao que bebí antes era extraño.",
						"vietnamese": "...Đầu tôi đau quá. Cốc ca cao lúc nãy thật lạ.",
						"thai": "...ปวดหัวจัง โกโก้ที่ดื่มเมื่อกี้มันแปลกๆ",
						"hindi": "...मेरा सर दर्द कर रहा है। मैंने अभी जो कोको पिया वह अजीब था।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "혀끝에서 미묘하게 차가운 쇠맛이 감돌았다. 귓가에 낮은 으르렁거림과 낑낑거림이 들렸다.",
						"english": "A subtle, cold metallic taste lingered on my tongue. Low growls and whimpers echoed in my ears.",
						"japanese": "舌の先に、微かに冷たい鉄の味が残った。耳元で低い唸り声と、かすかな鳴き声が聞こえた。",
						"chinese": "舌尖上萦绕着一丝微妙的冰冷铁锈味。耳边传来低沉的嘶吼和呜咽声。",
						"french": "Un subtil goût métallique et froid persistait sur ma langue. De faibles grognements et gémissements résonnaient à mes oreilles.",
						"spanish": "Un sutil y frío sabor metálico persistió en mi lengua. Bajos gruñidos y lamentos resonaron en mis oídos.",
						"vietnamese": "Một vị kim loại lạnh lẽo, tinh tế đọng lại trên đầu lưỡi. Những tiếng gầm gừ và rên rỉ khẽ vang lên bên tai.",
						"thai": "รสชาติโลหะเย็นๆ จางๆ ยังติดอยู่ที่ปลายลิ้น เสียงคำรามต่ำๆ และเสียงครางแผ่วๆ ดังอยู่ในหู",
						"hindi": "मेरी ज़ुबान पर एक हल्का, ठंडा धातु का स्वाद lingering था। मेरे कानों में धीमी गड़गड़ाहट और कराहने की आवाज़ें गूँज रही थीं।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "boris",
					"content": {
						"korean": "기억이… 기억이 흔들리지? 다 그놈들의 짓이야!",
						"english": "My memories... my memories are shaking, aren't they? It's all their doing!",
						"japanese": "記憶が…記憶が揺らいでいる？全部あいつらの仕業だ！",
						"chinese": "记忆…记忆在动摇，是吗？都是那些家伙干的！",
						"french": "Mes souvenirs... mes souvenirs vacillent, n'est-ce pas ? C'est leur œuvre !",
						"spanish": "¿Mis recuerdos... mis recuerdos se tambalean, verdad? ¡Todo es obra de ellos!",
						"vietnamese": "Ký ức... ký ức đang lung lay, phải không? Tất cả là do bọn chúng!",
						"thai": "ความทรงจำ... ความทรงจำมันสั่นคลอนใช่ไหม? ทั้งหมดเป็นฝีมือของพวกมัน!",
						"hindi": "मेरी यादें... मेरी यादें हिल रही हैं, है ना? यह सब उनकी करतूत है!"
					}
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "내 기억이… 뭔가 이상해.",
						"english": "My memories... something's wrong with them.",
						"japanese": "私の記憶が…何かおかしい。",
						"chinese": "我的记忆…有点不对劲。",
						"french": "Mes souvenirs... il y a quelque chose d'étrange.",
						"spanish": "Mis recuerdos... algo anda mal con ellos.",
						"vietnamese": "Ký ức của tôi... có gì đó không ổn.",
						"thai": "ความทรงจำของฉัน... มันแปลกๆ",
						"hindi": "मेरी यादों में... कुछ गड़बड़ है।"
					},
					"type": "speech"
				}
			],
			"id": 3
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
					"speaker": "boris",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "boris",
					"content": {
						"korean": "다 조종하고 있어! 이 얼음 속에서… 벗어날 수 없어!",
						"english": "They're controlling everything! I can't escape... from this ice!",
						"japanese": "全て操られている！この氷の中から…逃れられない！",
						"chinese": "他们操控着一切！我无法逃离…这冰天雪地！",
						"french": "Ils contrôlent tout ! Je ne peux pas m'échapper... de cette glace !",
						"spanish": "¡Lo están controlando todo! ¡No puedo escapar... de este hielo!",
						"vietnamese": "Bọn chúng đang điều khiển tất cả! Tôi không thể thoát khỏi... trong băng giá này!",
						"thai": "พวกมันกำลังควบคุมทุกอย่าง! ฉันหนีไม่ได้... จากน้ำแข็งนี่!",
						"hindi": "वे सब कुछ नियंत्रित कर रहे हैं! मैं इस बर्फ़ से... बच नहीं सकता!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "내 과거가… 진짜였나?",
						"english": "My past... was it real?",
						"japanese": "私の過去は…本当だったのか？",
						"chinese": "我的过去…是真的吗？",
						"french": "Mon passé... était-il réel ?",
						"spanish": "¿Mi pasado... fue real?",
						"vietnamese": "Quá khứ của tôi... có thật không?",
						"thai": "อดีตของฉัน... มันเป็นเรื่องจริงเหรอ?",
						"hindi": "मेरा अतीत... क्या वह सच था?"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "boris",
					"content": {
						"korean": "믿지 마! 아무것도 믿지 마! 이 모든 게 가짜라고!",
						"english": "Don't believe it! Don't believe anything! All of this is fake!",
						"japanese": "信じるな！何も信じるな！これ全て偽物だ！",
						"chinese": "别相信！什么都别相信！这一切都是假的！",
						"french": "Ne crois pas ! Ne crois rien ! Tout cela est faux !",
						"spanish": "¡No creas! ¡No creas en nada! ¡Todo esto es falso!",
						"vietnamese": "Đừng tin! Đừng tin bất cứ điều gì! Tất cả những thứ này đều là giả dối!",
						"thai": "อย่าเชื่อ! อย่าเชื่ออะไรทั้งนั้น! ทั้งหมดนี่มันของปลอม!",
						"hindi": "विश्वास मत करो! कुछ भी विश्वास मत करो! यह सब नकली है!"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "점점 더 혼란스러워져.",
						"english": "It's getting more and more confusing.",
						"japanese": "ますます混乱していく。",
						"chinese": "我越来越困惑了。",
						"french": "Ça devient de plus en plus déroutant.",
						"spanish": "Cada vez es más confuso.",
						"vietnamese": "Càng ngày càng trở nên hoang mang.",
						"thai": "ยิ่งนานยิ่งสับสน",
						"hindi": "यह और भी ज़्यादा भ्रमित करने वाला होता जा रहा है।"
					},
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "boris",
					"type": "direction"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "boris",
					"content": {
						"korean": "잃어버린 기억… 너도 그랬지? 썰매… 개썰매….",
						"english": "Lost memories... you too, right? Sled... dog sled...",
						"japanese": "失われた記憶…君もそうだったろ？そり…犬ぞり…。",
						"chinese": "失去的记忆…你也一样，是吗？雪橇…狗拉雪橇…。",
						"french": "Des souvenirs perdus... toi aussi, n'est-ce pas ? Traîneau... traîneau à chiens...",
						"spanish": "Recuerdos perdidos... tú también, ¿verdad? Trineo... trineo de perros...",
						"vietnamese": "Ký ức bị mất... bạn cũng vậy phải không? Xe trượt tuyết... xe trượt tuyết chó kéo...",
						"thai": "ความทรงจำที่หายไป... นายก็เหมือนกันใช่ไหม? เลื่อน... เลื่อนหมา...",
						"hindi": "खोई हुई यादें... तुम भी, है ना? स्लेज... डॉग स्लेज..."
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "썰매? 그게… 뭐지?",
						"english": "Sled? What... what's that?",
						"japanese": "そり？それって…何だ？",
						"chinese": "雪橇？那是什么…？",
						"french": "Traîneau ? Qu'est-ce que... c'est quoi ?",
						"spanish": "¿Trineo? ¿Qué... qué es eso?",
						"vietnamese": "Xe trượt tuyết? Đó là... cái gì vậy?",
						"thai": "เลื่อนเหรอ? นั่นมัน... อะไรน่ะ?",
						"hindi": "स्लेज? वह... क्या है?"
					},
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "머릿속에서 오래된 썰매와 개썰매 경주에 대한 단편적인 영상이 빠르게 스쳐 지나갔다.",
						"english": "Fleeting images of old sleds and dog sled races flashed through my mind.",
						"japanese": "古いそりや犬ぞりレースの断片的な映像が頭の中を駆け巡った。",
						"chinese": "脑海中迅速闪过一些关于旧雪橇和狗拉雪橇比赛的片段。",
						"french": "Des images fugaces de vieux traîneaux et de courses de chiens de traîneaux défilèrent dans mon esprit.",
						"spanish": "Imágenes fugaces de viejos trineos y carreras de trineos de perros pasaron rápidamente por mi mente.",
						"vietnamese": "Những hình ảnh chớp nhoáng về những chiếc xe trượt tuyết cũ và cuộc đua chó kéo xe trượt tuyết lướt nhanh qua tâm trí tôi.",
						"thai": "ภาพสั้น ๆ ของเลื่อนเก่าและการแข่งเลื่อนสุนัขแล่นผ่านความคิดของฉันอย่างรวดเร็ว",
						"hindi": "मेरे दिमाग में पुरानी स्लेज और डॉग स्लेज रेस की कुछ झलकियां तेजी से कौंध गईं।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "boris",
					"content": {
						"korean": "기억해내! 진짜 너를! 이 가짜 세상에서 벗어나!",
						"english": "Remember! The real you! Break free from this fake world!",
						"japanese": "思い出せ！本当の自分を！この偽りの世界から抜け出せ！",
						"chinese": "记住！真正的你！摆脱这个虚假的世界！",
						"french": "Souviens-toi ! Le vrai toi ! Échappe-toi de ce monde factice !",
						"spanish": "¡Recuerda! ¡Tu verdadero yo! ¡Libérate de este mundo falso!",
						"vietnamese": "Hãy nhớ! Con người thật của bạn! Thoát khỏi thế giới giả dối này!",
						"thai": "จำไว้! ตัวตนที่แท้จริงของเจ้า! หลุดพ้นจากโลกปลอมใบนี้ซะ!",
						"hindi": "याद करो! असली तुमको! इस नकली दुनिया से बाहर निकलो!"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "내가 누군지… 정말 모르겠어.",
						"english": "Who I am... I really don't know.",
						"japanese": "私が誰なのか… 本当にわからない。",
						"chinese": "我是谁…… 我真的不知道。",
						"french": "Qui je suis... Je ne sais vraiment pas.",
						"spanish": "Quién soy... Realmente no lo sé.",
						"vietnamese": "Tôi là ai… Tôi thực sự không biết.",
						"thai": "ฉันเป็นใคร... ฉันไม่รู้จริงๆ",
						"hindi": "मैं कौन हूँ... मैं सच में नहीं जानता।"
					}
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "이겼다고 생각하나? 아직… 시작도 안 했어.",
						"english": "Do you think you've won? This... hasn't even begun.",
						"japanese": "勝ったとでも思ったか？ まだ… 始まってもいない。",
						"chinese": "你以为你赢了？这…… 甚至还没开始。",
						"french": "Crois-tu avoir gagné ? Ce… n'a même pas encore commencé.",
						"spanish": "¿Crees que has ganado? Esto… ni siquiera ha empezado.",
						"vietnamese": "Ngươi nghĩ mình đã thắng sao? Chuyện này… còn chưa bắt đầu.",
						"thai": "คิดว่าชนะแล้วงั้นรึ? นี่... ยังไม่ได้เริ่มต้นเลยด้วยซ้ำ",
						"hindi": "क्या तुम्हें लगता है कि तुम जीत गए हो? ये... अभी शुरू भी नहीं हुआ है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야! 진실을 말해!",
						"english": "What are you talking about! Tell me the truth!",
						"japanese": "何を言っているんだ！真実を話せ！",
						"chinese": "你说什么！告诉我真相！",
						"french": "Qu'est-ce que tu racontes ! Dis la vérité !",
						"spanish": "¡Qué dices! ¡Dime la verdad!",
						"vietnamese": "Anh đang nói gì vậy! Hãy nói sự thật đi!",
						"thai": "พูดอะไรน่ะ! บอกความจริงมาสิ!",
						"hindi": "तुम क्या कह रहे हो! सच बताओ!"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "네 기억 속… 가장 행복했던 순간을….",
						"english": "The happiest moment in your memory...",
						"japanese": "君の記憶の中で…一番幸せだった瞬間を…。",
						"chinese": "你记忆中…最幸福的瞬间…",
						"french": "Le moment le plus heureux de ta mémoire...",
						"spanish": "El momento más feliz en tu memoria...",
						"vietnamese": "Khoảnh khắc hạnh phúc nhất trong ký ức của bạn...",
						"thai": "ช่วงเวลาที่มีความสุขที่สุดในความทรงจำของคุณ...",
						"hindi": "तुम्हारी याद में... सबसे खुशी का पल..."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "중간 보스는 사라졌지만, 혼란은 더욱 깊어졌다. 진실은 어디에 있을까.",
						"english": "The mid-boss vanished, but the confusion deepened. Where does the truth lie?",
						"japanese": "中ボスは消えたが、混乱はさらに深まった。真実はどこにあるのか。",
						"chinese": "中间首领消失了，但混乱却更深了。真相究竟在哪里？",
						"french": "Le boss intermédiaire a disparu, mais la confusion s'est accrue. Où se trouve la vérité ?",
						"spanish": "El jefe intermedio desapareció, pero la confusión se hizo más profunda. ¿Dónde yace la verdad?",
						"vietnamese": "Trùm giữa đã biến mất, nhưng sự hỗn loạn càng sâu sắc hơn. Sự thật nằm ở đâu?",
						"thai": "หัวหน้ากลางหายไปแล้ว แต่ความสับสนกลับลึกซึ้งยิ่งขึ้น ความจริงอยู่ที่ไหนกันแน่",
						"hindi": "मिड-बॉस गायब हो गया, लेकिन भ्रम और गहरा गया। सच्चाई कहाँ है?"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "아직 멀었군. 따뜻한 거짓말 속에 머물러라.",
						"english": "Not yet. Stay in your warm lie.",
						"japanese": "まだまだだな。温かい嘘の中に留まれ。",
						"chinese": "还差得远呢。就待在温暖的谎言里吧。",
						"french": "Pas encore. Reste dans ton doux mensonge.",
						"spanish": "Todavía no. Quédate en tu cálida mentira.",
						"vietnamese": "Chưa được đâu. Hãy ở lại trong lời nói dối ấm áp của bạn.",
						"thai": "ยังอีกนาน จงอยู่ในคำโกหกอันอบอุ่นของเจ้าต่อไป",
						"hindi": "अभी बहुत दूर है। अपने आरामदायक झूठ में रहो।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "다시 돌아올 거야. 진실을 밝히러!",
						"english": "I'll be back. To uncover the truth!",
						"japanese": "また戻ってくるよ。真実を暴くために！",
						"chinese": "我还会回来的。为了揭露真相！",
						"french": "Je reviendrai. Pour révéler la vérité !",
						"spanish": "Volveré. ¡Para revelar la verdad!",
						"vietnamese": "Tôi sẽ trở lại. Để vén màn sự thật!",
						"thai": "ฉันจะกลับมา เพื่อเปิดเผยความจริง!",
						"hindi": "मैं वापस आऊँगा। सच को उजागर करने के लिए!"
					},
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"speaker": "boris",
					"content": {
						"korean": "포기하지 마! 제발…!",
						"english": "Don't give up! Please...!",
						"japanese": "諦めるな！頼む…！",
						"chinese": "别放弃！拜托了…！",
						"french": "N'abandonne pas ! S'il te plaît... !",
						"spanish": "¡No te rindas! ¡Por favor...!",
						"vietnamese": "Đừng bỏ cuộc! Làm ơn...!",
						"thai": "อย่าเพิ่งยอมแพ้! ได้โปรด...!",
						"hindi": "हार मत मानो! कृपया...!"
					},
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 앞을 가로막았다.",
						"english": "A colossal shadow blocked my path.",
						"japanese": "巨大な影が目の前を遮った。",
						"chinese": "一个巨大的影子挡住了我的去路。",
						"french": "Une ombre colossale barra mon chemin.",
						"spanish": "Una sombra colosal bloqueó mi camino.",
						"vietnamese": "Một bóng tối khổng lồ chặn đường tôi.",
						"thai": "เงาขนาดมหึมาขวางทางอยู่ตรงหน้า",
						"hindi": "एक विशाल छाया ने मेरा रास्ता रोक लिया।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "쓸데없는 소리를 듣고 왔군. 어리석은 인간.",
						"english": "You've come listening to nonsense. Foolish human.",
						"japanese": "くだらないことを聞いて来たようだな。愚かな人間め。",
						"chinese": "你听信了无稽之谈。愚蠢的人类。",
						"french": "Tu as écouté des sottises. Stupide humain.",
						"spanish": "Has venido escuchando tonterías. Humano necio.",
						"vietnamese": "Ngươi đã nghe những điều vô nghĩa rồi. Loài người ngu ngốc.",
						"thai": "เจ้ามาฟังเรื่องไร้สาระสินะ มนุษย์โง่เขลา",
						"hindi": "तुम बेकार की बातें सुनकर आए हो। मूर्ख इंसान।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네가… 이 모든 것을 꾸민 장본인이냐?",
						"english": "Are you… the one behind all of this?",
						"japanese": "貴様が… この全ての元凶か？",
						"chinese": "你就是…… 这所有一切的幕后主使吗？",
						"french": "Es-tu… l'instigateur de tout cela ?",
						"spanish": "¿Eres tú… el cerebro detrás de todo esto?",
						"vietnamese": "Ngươi… là kẻ đứng sau tất cả chuyện này?",
						"thai": "เจ้า... คือผู้บงการเรื่องทั้งหมดนี้งั้นหรือ?",
						"hindi": "क्या तुम… इन सबका मास्टरमाइंड हो?"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "따뜻한 꿈을 꾸게 해준 것뿐. 현실은 차갑고 잔인하니까.",
						"english": "I merely let you dream a warm dream. Reality is cold and cruel, after all.",
						"japanese": "温かい夢を見せてやっただけだ。現実は冷たく残酷だからな。",
						"chinese": "我只是让你做了一个温暖的梦。毕竟，现实是冰冷而残酷的。",
						"french": "Je t'ai seulement permis de faire un doux rêve. Car la réalité est froide et cruelle.",
						"spanish": "Solo te dejé soñar un sueño cálido. Porque la realidad es fría y cruel.",
						"vietnamese": "Ta chỉ cho ngươi một giấc mơ ấm áp thôi. Bởi vì hiện thực lạnh lẽo và tàn nhẫn.",
						"thai": "ข้าเพียงแค่ให้เจ้าได้ฝันถึงความฝันอันอบอุ่นเท่านั้นเอง เพราะความจริงมันทั้งเย็นชาและโหดร้าย",
						"hindi": "मैंने बस तुम्हें एक गर्मजोशी भरा सपना देखने दिया। आखिर, हकीकत ठंडी और क्रूर होती है।"
					}
				},
				{
					"action": "enter",
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"speaker": "boris",
					"type": "direction"
				},
				{
					"speaker": "boris",
					"content": {
						"korean": "속지 마! 저놈이… 저놈이 다 거짓말을 하고 있어!",
						"english": "Don't fall for it! He's... he's lying about everything!",
						"japanese": "騙されるな！あいつが… あいつが全部嘘をついている！",
						"chinese": "别上当！他…… 他全都在撒谎！",
						"french": "Ne te fais pas avoir ! Il... il ment sur tout !",
						"spanish": "¡No te dejes engañar! Él… ¡él está mintiendo sobre todo!",
						"vietnamese": "Đừng mắc lừa! Hắn ta… hắn ta đang nói dối mọi thứ!",
						"thai": "อย่าหลงกล! มัน... มันโกหกทุกอย่าง!",
						"hindi": "धोखे में मत आओ! वो... वो सब झूठ बोल रहा है!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "{random_boss}의 존재를 부정하다니. 어리석군.",
						"english": "To deny the existence of {random_boss}. How foolish.",
						"japanese": "{random_boss}の存在を否定するとは。愚かな。",
						"chinese": "竟敢否认{random_boss}的存在。愚蠢。",
						"french": "Nier l'existence de {random_boss}. Quelle folie.",
						"spanish": "Negar la existencia de {random_boss}. Qué necio.",
						"vietnamese": "Phủ nhận sự tồn tại của {random_boss}. Thật ngu ngốc.",
						"thai": "บังอาจปฏิเสธการมีอยู่ของ {random_boss} ช่างโง่เขลาเสียจริง",
						"hindi": "{random_boss} के अस्तित्व को नकारना। कितनी मूर्खता है।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		}
	]
} as const;
