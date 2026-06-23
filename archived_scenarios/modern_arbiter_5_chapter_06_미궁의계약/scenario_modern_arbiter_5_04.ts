export const scenario_modern_arbiter_5_04 = {
	"scenario_id": "modern_arbiter_5_04",
	"order": 4,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"dax": {
			"id": "mon_08d5b43e-f9ab-4469-9064-855e170b0cdc",
			"name": {
				"korean": "닥스",
				"english": "Dax",
				"japanese": "ダックス",
				"chinese": "达克斯",
				"french": "Dax",
				"spanish": "Dax",
				"vietnamese": "Dax",
				"thai": "แด็กซ์",
				"hindi": "डैक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/84bb11db-6eb4-4500-d274-222e8b100100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5d325a75-bd91-4758-7b3f-ad9a97e52700/public"
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
					"content": {
						"korean": "정보의 폐기물로 가득한 뒷골목. 닥스는 그림자처럼 앉아 있었다.",
						"english": "The back alley, filled with information refuse. Dax sat like a shadow.",
						"japanese": "情報の廃棄物で満たされた裏路地。ダックスは影のように座っていた。",
						"chinese": "充满信息废物的后巷。达克斯像影子一样坐着。",
						"french": "L'arrière-ruelle, remplie de déchets d'informations. Dax était assis comme une ombre.",
						"spanish": "El callejón trasero, lleno de desechos de información. Dax estaba sentado como una sombra.",
						"vietnamese": "Con hẻm nhỏ, đầy rác thông tin. Dax ngồi đó như một cái bóng.",
						"thai": "ตรอกซอยที่เต็มไปด้วยขยะข้อมูล แด็กซ์นั่งอยู่ราวกับเงา",
						"hindi": "पिछली गली, जानकारी के कचरे से भरी हुई। डैक्स एक परछाई की तरह बैठा था।"
					},
					"speaker": "narrator"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"speaker": "dax",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "...왔군. 찾고 있는 게 뭔지 알아.",
						"english": "...You're here. I know what you're looking for.",
						"japanese": "…来たか。探しているものは分かっている。",
						"chinese": "……你来了。我知道你在找什么。",
						"french": "...Tu es là. Je sais ce que tu cherches.",
						"spanish": "...Estás aquí. Sé lo que buscas.",
						"vietnamese": "...Ngươi đã đến. Ta biết ngươi đang tìm gì.",
						"thai": "...มาแล้วนี่ ฉันรู้ว่าเธอกำลังตามหาอะไรอยู่",
						"hindi": "...तुम आ गए। मैं जानता हूँ तुम क्या ढूंढ रहे हो।"
					},
					"speaker": "dax"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "아비터와 '계약'의 진실을 알고 싶어.",
						"english": "I want to know the truth about Arbiter and the 'contract'.",
						"japanese": "アービターと『契約』の真実を知りたい。",
						"chinese": "我想知道关于仲裁者和“契约”的真相。",
						"french": "Je veux connaître la vérité sur l'Arbitre et le 'contrat'.",
						"spanish": "Quiero saber la verdad sobre el Árbitro y el 'contrato'.",
						"vietnamese": "Ta muốn biết sự thật về Người phân xử và 'hợp đồng'.",
						"thai": "ฉันอยากรู้ความจริงเกี่ยวกับผู้ชี้ขาดและ 'สัญญา'",
						"hindi": "मैं आर्बिटर और 'अनुबंध' के बारे में सच्चाई जानना चाहता हूँ।"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "dax",
					"content": {
						"korean": "위험한 게임이야. 감당할 수 있겠어?",
						"english": "It's a dangerous game. Can you handle it?",
						"japanese": "危険なゲームだ。耐えられるか？",
						"chinese": "这是个危险的游戏。你能应付吗？",
						"french": "C'est un jeu dangereux. Peux-tu le supporter ?",
						"spanish": "Es un juego peligroso. ¿Puedes manejarlo?",
						"vietnamese": "Đây là một trò chơi nguy hiểm. Ngươi có thể chịu đựng được không?",
						"thai": "มันเป็นเกมที่อันตราย เธอรับมือไหวไหม?",
						"hindi": "यह एक खतरनाक खेल है। क्या तुम इसे संभाल पाओगे?"
					}
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "dax",
					"spot": [
						5,
						2
					],
					"action": "enter"
				},
				{
					"speaker": "dax",
					"content": {
						"korean": "아비터가 집행하는 '계약' 말이야.",
						"english": "You mean the 'contract' enforced by Arbiter.",
						"japanese": "アービターが執行する『契約』のことか。",
						"chinese": "你是指仲裁者执行的“契约”。",
						"french": "Tu parles du 'contrat' exécuté par l'Arbitre.",
						"spanish": "Te refieres al 'contrato' ejecutado por el Árbitro.",
						"vietnamese": "Ngươi đang nói về 'hợp đồng' do Người phân xử thực thi.",
						"thai": "คุณหมายถึง 'สัญญา' ที่ผู้ชี้ขาดบังคับใช้ใช่ไหม",
						"hindi": "तुम्हारा मतलब आर्बिटर द्वारा लागू किया गया 'अनुबंध' है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "그게 뭔데?",
						"english": "What is it?",
						"japanese": "それは何だ？",
						"chinese": "那是什么？",
						"french": "Qu'est-ce que c'est ?",
						"spanish": "¿Qué es?",
						"vietnamese": "Nó là gì?",
						"thai": "มันคืออะไร?",
						"hindi": "वह क्या है?"
					}
				},
				{
					"content": {
						"korean": "아주 오래된 맹세가 있어. 이 도시 지하에 묻힌 갱스터 조직의 것.",
						"english": "There's an ancient oath. From a gangster syndicate buried beneath this city.",
						"japanese": "古の誓いがある。この街の地下に葬られたギャング組織の、だ。",
						"chinese": "有一个古老的誓言。来自埋藏在这座城市地下的黑帮组织。",
						"french": "Il y a un serment ancien. Celui d'une organisation de gangsters enfouie sous cette ville.",
						"spanish": "Existe un juramento muy antiguo. El de una organización de gánsteres sepultada bajo esta ciudad.",
						"vietnamese": "Có một lời thề cổ xưa. Của một tổ chức xã hội đen bị chôn vùi dưới thành phố này.",
						"thai": "มีคำสาบานเก่าแก่. ขององค์กรอันธพาลที่ถูกฝังอยู่ใต้เมืองนี้.",
						"hindi": "एक बहुत पुरानी कसम है। इस शहर के नीचे दबे एक गैंगस्टर संगठन की।"
					},
					"speaker": "dax",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "갱단 맹세가 아비터랑 무슨 상관인데?",
						"english": "What does a gang's oath have to do with the Arbiter?",
						"japanese": "ギャングの誓いがアービターとどう関係するんだ？",
						"chinese": "黑帮的誓言和仲裁者有什么关系？",
						"french": "Quel est le rapport entre le serment d'un gang et l'Arbitre ?",
						"spanish": "¿Qué tiene que ver el juramento de un gánster con el Árbitro?",
						"vietnamese": "Lời thề của băng đảng thì liên quan gì đến Arbiter?",
						"thai": "คำสาบานของแก๊งค์เกี่ยวอะไรกับอาบิเตอร์?",
						"hindi": "गैंग की कसम का आर्बिटर से क्या लेना-देना?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "dax",
					"content": {
						"korean": "시스템이 그걸 기억해. 그리고 — 집행하고 있지.",
						"english": "The system remembers it. And — it's enforcing it.",
						"japanese": "システムがそれを記憶している。そして――執行している。",
						"chinese": "系统记住了它。而且——正在执行它。",
						"french": "Le système s'en souvient. Et — il l'applique.",
						"spanish": "El sistema lo recuerda. Y — lo está ejecutando.",
						"vietnamese": "Hệ thống ghi nhớ nó. Và — đang thực thi nó.",
						"thai": "ระบบจำมันได้. และ — กำลังบังคับใช้มัน.",
						"hindi": "सिस्टम को वो याद है। और — वो उसे लागू कर रहा है।"
					},
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "dax",
					"spot": [
						5,
						2
					]
				},
				{
					"content": {
						"korean": "그 갱단은 서로에게 맹세했어. 충성, 의리. 죽을 때까지.",
						"english": "That gang swore to each other. Loyalty, allegiance. Until death.",
						"japanese": "そのギャングは互いに誓った。忠誠、義理。死が分かつまで。",
						"chinese": "那个黑帮互相宣誓了。忠诚，义气。直到死亡。",
						"french": "Ce gang s'était juré fidélité, loyauté. Jusqu'à la mort.",
						"spanish": "Ese gánster juró lealtad y fidelidad el uno al otro. Hasta la muerte.",
						"vietnamese": "Băng đảng đó đã thề với nhau. Trung thành, nghĩa khí. Đến chết.",
						"thai": "แก๊งค์นั้นสาบานต่อกัน. ความภักดี, ความจงรักภักดี. จนกว่าความตายจะพรากจากกัน.",
						"hindi": "उस गैंग ने एक-दूसरे से कसम खाई थी। वफादारी, निष्ठा। मौत तक।"
					},
					"speaker": "dax",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그게 왜 지금 데이터 계약이 돼?",
						"english": "Why is that now a data contract?",
						"japanese": "それがどうして今、データ契約になるんだ？",
						"chinese": "为什么它现在变成了一个数据契约？",
						"french": "Pourquoi est-ce un contrat de données maintenant ?",
						"spanish": "¿Por qué ahora es un contrato de datos?",
						"vietnamese": "Tại sao giờ nó lại là một hợp đồng dữ liệu?",
						"thai": "ทำไมมันถึงกลายเป็นสัญญาข้อมูลตอนนี้?",
						"hindi": "अब वो डेटा कॉन्ट्रैक्ट क्यों है?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "dax",
					"content": {
						"korean": "아비터는 그 맹세를 '데이터'로 바꿨어. 강제로.",
						"english": "The Arbiter turned that oath into 'data.' Forcibly.",
						"japanese": "アービターはその誓いを「データ」に変えた。強制的に。",
						"chinese": "仲裁者把那个誓言变成了“数据”。强制性的。",
						"french": "L'Arbitre a transformé ce serment en « données ». De force.",
						"spanish": "El Árbitro convirtió ese juramento en 'datos'. A la fuerza.",
						"vietnamese": "Arbiter đã biến lời thề đó thành 'dữ liệu'. Bằng vũ lực.",
						"thai": "อาบิเตอร์เปลี่ยนคำสาบานนั้นให้เป็น 'ข้อมูล' บังคับ.",
						"hindi": "आर्बिटर ने उस कसम को 'डेटा' में बदल दिया। जबरदस्ती।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "주인공의 기기에서 알 수 없는 노이즈가 발생했다. 시스템 마비 현상이었다.",
						"english": "Unknown noise erupted from the protagonist's device. It was a system paralysis.",
						"japanese": "主人公のデバイスから未知のノイズが発生した。システム麻痺現象だった。",
						"chinese": "主角的设备发出了不明噪音。那是系统瘫痪的现象。",
						"french": "Un bruit inconnu a émané de l'appareil du protagoniste. C'était une paralysie du système.",
						"spanish": "Un ruido desconocido surgió del dispositivo del protagonista. Era un fenómeno de parálisis del sistema.",
						"vietnamese": "Tiếng ồn lạ xuất hiện từ thiết bị của nhân vật chính. Đó là hiện tượng tê liệt hệ thống.",
						"thai": "มีเสียงรบกวนที่ไม่รู้จักเกิดขึ้นจากอุปกรณ์ของตัวเอก. มันคือปรากฏการณ์ระบบเป็นอัมพาต.",
						"hindi": "नायक के डिवाइस से अज्ञात शोर निकला। यह एक सिस्टम पैरालिसिस की घटना थी।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "뭐야? 갑자기….",
						"english": "What? Suddenly...",
						"japanese": "何だ？急に…。",
						"chinese": "什么？突然……",
						"french": "Quoi ? Tout à coup...",
						"spanish": "¿Qué? De repente...",
						"vietnamese": "Gì vậy? Đột nhiên...",
						"thai": "อะไรนะ? จู่ๆ ก็...",
						"hindi": "क्या? अचानक..."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "점점 심해질 거야. 시스템이 과부하되고 있다는 증거지.",
						"english": "It'll get worse. It's proof the system is overloading.",
						"japanese": "どんどんひどくなる。システムが過負荷になっている証拠だ。",
						"chinese": "它会越来越糟。这是系统过载的证据。",
						"french": "Ça va s'aggraver. C'est la preuve que le système est en surcharge.",
						"spanish": "Empeorará. Es la prueba de que el sistema se está sobrecargando.",
						"vietnamese": "Nó sẽ tệ hơn. Đó là bằng chứng hệ thống đang quá tải.",
						"thai": "มันจะแย่ลงเรื่อยๆ. เป็นหลักฐานว่าระบบกำลังโอเวอร์โหลด.",
						"hindi": "यह और बुरा होता जाएगा। यह इस बात का सबूत है कि सिस्टम ओवरलोड हो रहा है।"
					},
					"speaker": "dax"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "dax",
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그 맹세는 단순한 약속이 아니었어. 영혼을 묶는 거였지.",
						"english": "That oath wasn't just a promise. It bound souls.",
						"japanese": "その誓いはただの約束じゃなかった。魂を縛るものだったんだ。",
						"chinese": "那个誓言不只是一个简单的承诺。它是束缚灵魂的。",
						"french": "Ce serment n'était pas une simple promesse. Il liait les âmes.",
						"spanish": "Ese juramento no era una simple promesa. Ataba las almas.",
						"vietnamese": "Lời thề đó không chỉ là một lời hứa đơn thuần. Nó ràng buộc linh hồn.",
						"thai": "คำสาบานนั้นไม่ใช่แค่คำสัญญา. มันผูกมัดวิญญาณ.",
						"hindi": "वह कसम सिर्फ एक वादा नहीं थी। वह आत्माओं को बांधती थी।"
					},
					"speaker": "dax"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그럼 지금 아비터가 집행하는 건….",
						"english": "So, what the Arbiter is executing now is...",
						"japanese": "では、今アービターが執行しているのは…。",
						"chinese": "那么，仲裁者现在执行的…",
						"french": "Alors, ce que l'Arbitre exécute maintenant, c'est...",
						"spanish": "Entonces, lo que el Árbitro está ejecutando ahora es...",
						"vietnamese": "Vậy, điều Arbiter đang thực thi bây giờ là…",
						"thai": "สิ่งที่ Arbiter กำลังดำเนินการอยู่ตอนนี้คือ...",
						"hindi": "तो, जो आर्बिटर अब निष्पादित कर रहा है वह है..."
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "사라진 자들의 비명이야. 디지털 감옥에 갇힌 채.",
						"english": "The screams of the vanished, trapped in a digital prison.",
						"japanese": "消え去った者たちの悲鳴だ。デジタル刑務所に囚われたまま。",
						"chinese": "是那些消失者的尖叫声，被困在数字监狱中。",
						"french": "Les cris des disparus, piégés dans une prison numérique.",
						"spanish": "Los gritos de los desaparecidos, atrapados en una prisión digital.",
						"vietnamese": "Tiếng hét của những kẻ biến mất, bị nhốt trong nhà tù kỹ thuật số.",
						"thai": "เสียงกรีดร้องของผู้ที่หายไป ถูกขังอยู่ในคุกดิจิทัล",
						"hindi": "गायब हुए लोगों की चीखें, एक डिजिटल जेल में फंसे हुए।"
					},
					"speaker": "dax"
				},
				{
					"speaker": "dax",
					"content": {
						"korean": "돌아갈 수 없어. 진실은 항상 위험한 법이니까.",
						"english": "There's no turning back. Truth is always dangerous.",
						"japanese": "もう戻れない。真実は常に危険なものだから。",
						"chinese": "无法回头了。真相总是危险的。",
						"french": "Il n'y a pas de retour en arrière. La vérité est toujours dangereuse.",
						"spanish": "No hay vuelta atrás. La verdad siempre es peligrosa.",
						"vietnamese": "Không thể quay lại. Sự thật luôn nguy hiểm.",
						"thai": "ย้อนกลับไม่ได้ ความจริงมักเป็นอันตรายเสมอ",
						"hindi": "पीछे मुड़ना नहीं है। सच हमेशा खतरनाक होता है।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "하찮은 반항이군. 맹세는 깨지지 않는다.",
						"english": "A pathetic rebellion. The oath remains unbroken.",
						"japanese": "取るに足らない反抗だ。誓いは破られぬ。",
						"chinese": "一场微不足道的反抗。誓言不会被打破。",
						"french": "Une rébellion insignifiante. Le serment ne sera pas brisé.",
						"spanish": "Una rebelión insignificante. El juramento no se rompe.",
						"vietnamese": "Một cuộc nổi loạn hèn mọn. Lời thề sẽ không bị phá vỡ.",
						"thai": "การก่อกบฏอันไร้ค่า คำสาบานมิอาจถูกทำลาย.",
						"hindi": "एक तुच्छ विद्रोह। शपथ टूटती नहीं है।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "아직 포기 안 해. 진짜 아비터를 만나야 해.",
						"english": "I won't give up yet. I have to meet the true Arbiter.",
						"japanese": "まだ諦めない。真のアービターに会わねば。",
						"chinese": "我还没有放弃。我必须见到真正的仲裁者。",
						"french": "Je n'abandonnerai pas encore. Je dois rencontrer le véritable Arbitre.",
						"spanish": "Todavía no me rindo. Tengo que encontrarme con el verdadero Árbitro.",
						"vietnamese": "Tôi sẽ chưa bỏ cuộc. Tôi phải gặp 'Arbiter' thật sự.",
						"thai": "ฉันยังไม่ยอมแพ้ ฉันต้องได้พบ 'Arbiter' ตัวจริง.",
						"hindi": "मैंने अभी तक हार नहीं मानी। मुझे असली आर्बिटर से मिलना है।"
					}
				}
			],
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "dax",
					"spot": [
						5,
						2
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이곳이 맹세의 핵심이야. 과거의 그림자가 널 기다려.",
						"english": "This is the core of the Oath. The shadow of the past awaits you.",
						"japanese": "ここが誓いの核心だ。過去の影が君を待っている。",
						"chinese": "这里是誓言的核心。过去的阴影在等你。",
						"french": "C'est le cœur du Serment. L'ombre du passé t'attend.",
						"spanish": "Este es el núcleo del Juramento. La sombra del pasado te espera.",
						"vietnamese": "Đây là cốt lõi của Lời Thề. Bóng tối của quá khứ đang chờ đợi ngươi.",
						"thai": "นี่คือแก่นแท้ของคำปฏิญาณ เงาของอดีตกำลังรอเจ้าอยู่",
						"hindi": "यह शपथ का मूल है। अतीत की छाया तुम्हारा इंतजार कर रही है।"
					},
					"speaker": "dax"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 탐험대를 압도했다. 정체 모를 보스가 모습을 드러냈다.",
						"english": "A colossal shadow overwhelmed the expedition. An unknown boss revealed itself.",
						"japanese": "巨大な影が探検隊を圧倒した。正体不明のボスが姿を現した。",
						"chinese": "巨大的阴影笼罩了探险队。一个未知的首领现身了。",
						"french": "Une ombre colossale a submergé l'expédition. Un boss inconnu s'est révélé.",
						"spanish": "Una sombra colosal abrumó la expedición. Un jefe desconocido se reveló.",
						"vietnamese": "Một bóng tối khổng lồ bao trùm đội thám hiểm. Một tên trùm không rõ danh tính đã xuất hiện.",
						"thai": "เงาขนาดมหึมาได้เข้าครอบงำคณะสำรวจ บอสที่ไม่รู้จักได้ปรากฏตัวขึ้น",
						"hindi": "एक विशाल छाया ने अभियान को overwhelming कर दिया। एक अज्ञात बॉस प्रकट हुआ।"
					}
				},
				{
					"content": {
						"korean": "호기심이 너를 여기까지 이끌었나, 침입자?",
						"english": "Did curiosity lead you here, intruder?",
						"japanese": "好奇心がここまでお前を導いたのか、侵入者よ？",
						"chinese": "是好奇心把你带到这里来的吗，入侵者？",
						"french": "La curiosité t'a-t-elle mené ici, intrus ?",
						"spanish": "¿La curiosidad te trajo hasta aquí, intruso?",
						"vietnamese": "Sự tò mò đã dẫn ngươi đến đây sao, kẻ xâm nhập?",
						"thai": "ความอยากรู้นำเจ้ามาที่นี่หรือ ผู้บุกรุก?",
						"hindi": "क्या जिज्ञासा तुम्हें यहाँ ले आई, घुसपैठिए?"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "{random_boss}. 갱단의 맹세를 집행하는 게 너였어?",
						"english": "{random_boss}. So you were the one enforcing the gang's oath?",
						"japanese": "{random_boss}。ギャングの誓いを執行していたのはお前だったのか？",
						"chinese": "{random_boss}。原来是你执行了帮派的誓言？",
						"french": "{random_boss}. C'est donc toi qui faisais respecter le serment du gang ?",
						"spanish": "{random_boss}. ¿Así que eras tú quien hacía cumplir el juramento de la pandilla?",
						"vietnamese": "{random_boss}. Ngươi là kẻ đã thực thi lời thề của băng đảng sao?",
						"thai": "{random_boss} เจ้าคือผู้ที่บังคับใช้คำปฏิญาณของแก๊งค์หรือ?",
						"hindi": "{random_boss}. तो तुम ही थे जो गिरोह की शपथ को लागू कर रहे थे?"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "맹세는 영원하다. 나는 그저 시스템을 따를 뿐.",
						"english": "The Oath is eternal. I merely follow the system.",
						"japanese": "誓いは永遠だ。私はただシステムに従うだけ。",
						"chinese": "誓言是永恒的。我只是遵循系统。",
						"french": "Le Serment est éternel. Je ne fais que suivre le système.",
						"spanish": "El Juramento es eterno. Yo simplemente sigo el sistema.",
						"vietnamese": "Lời thề là vĩnh cửu. Ta chỉ đơn thuần tuân theo hệ thống.",
						"thai": "คำปฏิญาณเป็นนิรันดร์ ข้าเพียงแค่ทำตามระบบ",
						"hindi": "शपथ शाश्वत है। मैं केवल सिस्टम का पालन करता हूँ।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"action": "exit",
					"type": "direction",
					"direction": "down",
					"duration_ms": 400,
					"speaker": "dax"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "시스템에 갇힌 건 너야.",
						"english": "You're the one trapped by the system.",
						"japanese": "システムに囚われているのはお前の方だ。",
						"chinese": "你才是被系统困住的人。",
						"french": "C'est toi qui es piégé par le système.",
						"spanish": "Tú eres quien está atrapado por el sistema.",
						"vietnamese": "Ngươi mới là kẻ bị hệ thống giam cầm.",
						"thai": "เจ้าต่างหากที่ถูกระบบกักขังไว้",
						"hindi": "तुम ही हो जो सिस्टम में फंसे हो।"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "…겨우 이 정도인가? 진짜 맹세는 이제 시작인데….",
						"english": "...Is this all? The real Oath is just beginning...",
						"japanese": "…たったこれだけか？本当の誓いは今から始まるのに…。",
						"chinese": "……就这吗？真正的誓言才刚刚开始……",
						"french": "...C'est tout ce qu'il y a ? Le vrai Serment ne fait que commencer...",
						"spanish": "...¿Es solo esto? El verdadero Juramento apenas comienza...",
						"vietnamese": "…Chỉ có vậy thôi sao? Lời thề thật sự chỉ mới bắt đầu…",
						"thai": "...แค่นี้เองเหรอ? คำปฏิญาณที่แท้จริงเพิ่งจะเริ่มต้นขึ้น...",
						"hindi": "...बस इतना ही? असली शपथ तो अभी शुरू हो रही है..."
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야? 끝난 거 아니었어?",
						"english": "What? I thought it was over!",
						"japanese": "何のことだ？終わりじゃなかったのか？",
						"chinese": "什么？不是结束了吗？",
						"french": "Quoi ? Je croyais que c'était fini ?",
						"spanish": "¿Qué? ¿No había terminado ya?",
						"vietnamese": "Gì vậy? Chẳng phải đã kết thúc rồi sao?",
						"thai": "อะไรนะ? นึกว่าจบแล้วซะอีก?",
						"hindi": "क्या? मैंने सोचा था कि यह खत्म हो गया था?"
					}
				},
				{
					"content": {
						"korean": "쓰러진 보스. 그러나 그의 마지막 말은 더 큰 진실을 암시했다.",
						"english": "The fallen boss. But his last words hinted at a greater truth.",
						"japanese": "倒れたボス。しかし、彼の最期の言葉は、より大きな真実を暗示していた。",
						"chinese": "倒下的首领。然而，他临终的话语暗示着一个更大的真相。",
						"french": "Le boss est tombé. Mais ses derniers mots laissaient entrevoir une vérité bien plus grande.",
						"spanish": "El jefe ha caído. Pero sus últimas palabras insinuaban una verdad mayor.",
						"vietnamese": "Kẻ thủ lĩnh đã gục ngã. Nhưng lời cuối của hắn lại ám chỉ một sự thật lớn hơn.",
						"thai": "บอสผู้ล้มลง ทว่าคำพูดสุดท้ายของเขาได้บอกใบ้ถึงความจริงที่ยิ่งใหญ่กว่า.",
						"hindi": "पतन हुआ बॉस। लेकिन उसके आखिरी शब्द एक बड़ी सच्चाई की ओर इशारा कर रहे थे।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "데이터의 심장부로 향하는 길. 진짜 '아비터'가 기다린다.",
						"english": "The path to the heart of the data. The true 'Arbiter' awaits.",
						"japanese": "データの心臓部へ向かう道。真の「アービター」が待っている。",
						"chinese": "通往数据核心的道路。真正的“仲裁者”正在等待。",
						"french": "Le chemin vers le cœur des données. Le véritable 'Arbitre' attend.",
						"spanish": "El camino al corazón de los datos. El verdadero 'Árbitro' aguarda.",
						"vietnamese": "Con đường dẫn đến trái tim dữ liệu. 'Arbiter' thật sự đang chờ đợi.",
						"thai": "เส้นทางสู่ใจกลางข้อมูล 'Arbiter' ตัวจริงกำลังรออยู่.",
						"hindi": "डेटा के दिल की ओर रास्ता। असली 'आर्बिटर' इंतजार कर रहा है।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"세계의 모든 정보가 거래되는 뒷골목.",
			"'아비터'가 집행하는 계약의 그림자를 쫓아, 주인공은 가장 어두운 곳으로 향한다.",
			"그곳에는 과거의 맹세를 파헤치는 자, 닥스가 기다리고 있었다.",
			"숨겨진 진실은 도시의 근간을 뒤흔들 충격적인 것이었다."
		],
		"english": [
			"The back alleys where all the world's information is traded.",
			"Following the shadow of contracts enforced by 'Arbiter', the protagonist heads to the darkest place.",
			"There, Dax, who unearths past vows, was waiting.",
			"The hidden truth was shocking enough to shake the foundations of the city."
		],
		"japanese": [
			"世界のあらゆる情報が取引される裏路地。",
			"'アービター'が執行する契約の影を追い、主人公は最も暗い場所へと向かう。",
			"そこには、過去の誓いを暴く者、ダックスが待っていた。",
			"隠された真実は、都市の根幹を揺るがす衝撃的なものだった。"
		],
		"chinese": [
			"世界所有信息都在交易的后巷。",
			"追逐“仲裁者”执行的契约之影，主角前往最黑暗的地方。",
			"在那里，揭露过去誓言的达克斯正在等待。",
			"隐藏的真相令人震惊，足以动摇城市的基础。"
		],
		"french": [
			"Les ruelles où toutes les informations du monde sont échangées.",
			"Poursuivant l'ombre des contrats exécutés par l''Arbitre', le protagoniste se dirige vers l'endroit le plus sombre.",
			"Là, Dax, celui qui déterre les vœux passés, attendait.",
			"La vérité cachée était si choquante qu'elle ébranlerait les fondations de la ville."
		],
		"spanish": [
			"Los callejones donde se negocia toda la información del mundo.",
			"Siguiendo la sombra de los contratos ejecutados por el 'Árbitro', el protagonista se dirige al lugar más oscuro.",
			"Allí, Dax, quien desentierra votos pasados, estaba esperando.",
			"La verdad oculta era lo suficientemente impactante como para sacudir los cimientos de la ciudad."
		],
		"vietnamese": [
			"Những con hẻm nơi mọi thông tin của thế giới được giao dịch.",
			"Theo dấu bóng dáng các hợp đồng do 'Người phân xử' thực thi, nhân vật chính tiến đến nơi tăm tối nhất.",
			"Ở đó, Dax, kẻ khơi dậy những lời thề trong quá khứ, đang chờ đợi.",
			"Sự thật ẩn giấu đã gây sốc đủ để lung lay nền móng của thành phố."
		],
		"thai": [
			"ตรอกซอยที่ข้อมูลทั้งหมดของโลกถูกซื้อขาย",
			"ตามรอยเงาของสัญญาที่ 'ผู้ชี้ขาด' บังคับใช้ ตัวเอกมุ่งหน้าสู่สถานที่ที่มืดมิดที่สุด",
			"ที่นั่น แด็กซ์ ผู้ที่ขุดคุ้ยคำปฏิญาณในอดีต กำลังรออยู่",
			"ความจริงที่ซ่อนอยู่เป็นเรื่องที่น่าตกใจมากพอที่จะสั่นคลอนรากฐานของเมือง"
		],
		"hindi": [
			"पिछली गलियाँ जहाँ दुनिया की सभी जानकारी का व्यापार होता है।",
			"'आर्बिटर' द्वारा लागू किए गए अनुबंधों की छाया का पीछा करते हुए, नायक सबसे अंधेरी जगह की ओर बढ़ता है।",
			"वहाँ, डैक्स, जो अतीत की प्रतिज्ञाओं को उजागर करता है, इंतजार कर रहा था।",
			"छिपी हुई सच्चाई इतनी चौंकाने वाली थी कि वह शहर की नींव हिला सकती थी।"
		]
	}
} as const;
