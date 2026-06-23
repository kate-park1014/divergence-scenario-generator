export const scenario_forest_viscidia_43_02 = {
	"scenario_id": "forest_viscidia_43_02",
	"order": 2,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"hazel": {
			"id": "mon_e2c11115-b300-4f32-b289-9ad088dc0273",
			"name": {
				"korean": "헤이즐",
				"english": "Hazel",
				"japanese": "ヘイゼル",
				"chinese": "榛",
				"french": "Hazel",
				"spanish": "Hazel",
				"vietnamese": "Hazel",
				"thai": "เฮเซล",
				"hindi": "हेज़ल"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/39f75a47-c622-45fe-04fd-a8bac1f93a00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/fc97b5d5-7a1d-4646-bedc-47a40ea70a00/public"
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
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "숲의 중심부로 향할수록, 기묘한 조각상들이 모습을 드러냈다.",
						"english": "As we headed deeper into the forest, bizarre statues began to appear.",
						"japanese": "森の中心部へ向かうほど、奇妙な彫像が姿を現した。",
						"chinese": "越往森林深处走，越有奇妙的雕像显现出来。",
						"french": "En nous dirigeant vers le cœur de la forêt, d'étranges statues apparurent.",
						"spanish": "A medida que nos adentrábamos en el corazón del bosque, extrañas estatuas comenzaron a aparecer.",
						"vietnamese": "Càng tiến sâu vào trung tâm rừng, những bức tượng kỳ lạ càng lộ diện.",
						"thai": "ยิ่งมุ่งหน้าสู่ใจกลางป่า รูปปั้นประหลาดก็ยิ่งเผยโฉม",
						"hindi": "जैसे-जैसे हम जंगल के केंद्र की ओर बढ़ते गए, अजीबोगरीब मूर्तियाँ दिखने लगीं।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "저건 대체… 돌이야, 나무야?",
						"english": "What on earth is that... stone, or wood?",
						"japanese": "あれは一体…石なのか、木なのか？",
						"chinese": "那到底是什么……是石头，还是树木？",
						"french": "Qu'est-ce que c'est... de la pierre ou du bois ?",
						"spanish": "¿Qué demonios es eso... piedra o madera?",
						"vietnamese": "Cái đó rốt cuộc là... đá hay gỗ vậy?",
						"thai": "นั่นมัน...หินหรือไม้กันแน่?",
						"hindi": "वह आखिर क्या है... पत्थर या लकड़ी?"
					},
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"speaker": "hazel",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"emotion": "happy",
					"type": "speech",
					"speaker": "hazel",
					"content": {
						"korean": "오, 드디어 발견했군요! 고대 문명의 흔적과 숲의 생명력이 섞인 독특한 자연 변이입니다.",
						"english": "Oh, you've finally found it! It's a unique natural mutation, a blend of ancient civilization's traces and the forest's vitality.",
						"japanese": "おお、ついに見つけましたね！これは古代文明の痕跡と森の生命力が混じり合った、独特な自然変異です。",
						"chinese": "哦，终于发现了！这是古代文明的痕迹与森林生命力混合而成的独特自然变异。",
						"french": "Oh, vous l'avez enfin trouvé ! C'est une mutation naturelle unique, un mélange de traces d'une ancienne civilisation et de la vitalité de la forêt.",
						"spanish": "¡Oh, por fin lo han encontrado! Es una mutación natural única, una mezcla de rastros de una civilización antigua y la vitalidad del bosque.",
						"vietnamese": "Ồ, cuối cùng các bạn cũng tìm thấy rồi! Đây là một biến đổi tự nhiên độc đáo, sự pha trộn giữa dấu vết của nền văn minh cổ đại và sức sống của khu rừng.",
						"thai": "โอ้ ในที่สุดก็เจอแล้ว! นี่คือการกลายพันธุ์ทางธรรมชาติที่เป็นเอกลักษณ์ ผสมผสานร่องรอยอารยธรรมโบราณเข้ากับพลังชีวิตของป่า",
						"hindi": "ओह, आपने आखिरकार इसे ढूंढ लिया! यह एक अनूठा प्राकृतिक उत्परिवर्तन है, जो प्राचीन सभ्यता के निशानों और जंगल की जीवन शक्ति का मिश्रण है।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_1",
					"content": {
						"korean": "변이요? 마치 살아있는 것 같은데요.",
						"english": "Mutation? It looks like it's alive.",
						"japanese": "変異？まるで生きているようですが。",
						"chinese": "变异？它看起来就像活物一样。",
						"french": "Mutation ? On dirait que c'est vivant.",
						"spanish": "¿Mutación? Parece que está vivo.",
						"vietnamese": "Biến đổi ạ? Trông nó cứ như đang sống vậy.",
						"thai": "กลายพันธุ์? เหมือนมีชีวิตเลยนะครับ/คะ",
						"hindi": "उत्परिवर्तन? यह तो जीवित लग रहा है।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "hazel",
					"content": {
						"korean": "그저 착시일 뿐입니다. 자연의 신비로움이죠. 과학적으로 완벽하게 설명 가능합니다.",
						"english": "It's merely an optical illusion. The mystery of nature. It's perfectly explainable scientifically.",
						"japanese": "それは単なる錯覚です。自然の神秘ですね。科学的に完全に説明可能です。",
						"chinese": "那只是错觉。这是大自然的奥秘。在科学上完全可以解释。",
						"french": "Ce n'est qu'une illusion d'optique. Le mystère de la nature. C'est parfaitement explicable scientifiquement.",
						"spanish": "Es solo una ilusión óptica. El misterio de la naturaleza. Es perfectamente explicable científicamente.",
						"vietnamese": "Đó chỉ là ảo ảnh thôi. Sự huyền bí của tự nhiên mà. Hoàn toàn có thể giải thích bằng khoa học.",
						"thai": "มันเป็นเพียงภาพลวงตา ความลึกลับของธรรมชาติ สามารถอธิบายได้ด้วยหลักวิทยาศาสตร์อย่างสมบูรณ์แบบ",
						"hindi": "यह केवल एक ऑप्टिकल भ्रम है। प्रकृति का रहस्य। इसे वैज्ञानिक रूप से पूरी तरह से समझाया जा सकता है।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "hazel",
					"type": "direction"
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "박사님, 이 조각… 정말 돌이 맞나요? 만져보니 온기가 느껴져요.",
						"english": "Doctor, this fragment... is it really just a stone? It feels warm to the touch.",
						"japanese": "博士、この破片…本当にただの石ですか？触ると温かいんです。",
						"chinese": "博士，这块碎片……真的是石头吗？摸起来感觉很温暖。",
						"french": "Docteur, ce fragment... est-ce vraiment une simple pierre ? Il est chaud au toucher.",
						"spanish": "Doctor, este fragmento... ¿es realmente una piedra? Se siente cálido al tacto.",
						"vietnamese": "Bác sĩ, mảnh vỡ này... nó thực sự là đá ư? Tôi chạm vào thấy ấm.",
						"thai": "ท่านด็อกเตอร์ ชิ้นส่วนนี้... เป็นแค่หินจริงหรือเปล่า? สัมผัสแล้วรู้สึกอุ่นๆ เลยครับ/ค่ะ",
						"hindi": "डॉक्टर, यह टुकड़ा... क्या यह वाकई सिर्फ पत्थर है? छूने पर गर्म लग रहा है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "hazel",
					"content": {
						"korean": "외부 온도의 영향이거나, 지각 활동으로 인한 열기일 겁니다.",
						"english": "It's either the effect of external temperature or heat from geological activity.",
						"japanese": "外部の温度の影響か、地殻活動による熱でしょう。",
						"chinese": "这可能是受外部温度影响，或是地壳活动产生的热量。",
						"french": "C'est soit l'effet de la température extérieure, soit la chaleur due à l'activité géologique.",
						"spanish": "Es por la temperatura externa o el calor debido a la actividad geológica.",
						"vietnamese": "Đó là do nhiệt độ bên ngoài hoặc nhiệt lượng từ hoạt động địa chất.",
						"thai": "อาจเป็นผลจากอุณหภูมิภายนอก หรือความร้อนจากการเคลื่อนไหวของเปลือกโลก",
						"hindi": "यह बाहरी तापमान का प्रभाव हो सकता है, या भूगर्भीय गतिविधि से उत्पन्न गर्मी।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "박사님은… 뭔가 불편한 진실을 피하고 싶은 것 같네요.",
						"english": "Doctor... it seems you're trying to avoid an uncomfortable truth.",
						"japanese": "博士は…何か不都合な真実を避けたいようですね。",
						"chinese": "博士……您似乎在回避某种令人不安的真相。",
						"french": "Docteur... on dirait que vous essayez d'éviter une vérité dérangeante.",
						"spanish": "Doctor... parece que quiere evitar una verdad incómoda.",
						"vietnamese": "Bác sĩ... có vẻ như ông đang cố tránh một sự thật khó chịu.",
						"thai": "ท่านด็อกเตอร์... ดูเหมือนท่านกำลังหลีกเลี่ยงความจริงที่ไม่สะดวกใจบางอย่างนะครับ/คะ",
						"hindi": "डॉक्टर, लगता है आप किसी असहज सच्चाई से बचना चाहते हैं।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "hazel",
					"content": {
						"korean": "저는 오직 사실만을 믿습니다. 감상적인 추측은 학문의 영역이 아닙니다.",
						"english": "I only believe in facts. Sentimental speculation is not the domain of academia.",
						"japanese": "私は事実のみを信じます。感傷的な推測は学問の領域ではありません。",
						"chinese": "我只相信事实。感性的猜测不属于学术范畴。",
						"french": "Je ne crois qu'aux faits. Les spéculations sentimentales n'appartiennent pas au domaine académique.",
						"spanish": "Solo creo en los hechos. Las especulaciones sentimentales no son del ámbito académico.",
						"vietnamese": "Tôi chỉ tin vào sự thật. Suy đoán cảm tính không thuộc lĩnh vực học thuật.",
						"thai": "ผม/ดิฉันเชื่อแต่ข้อเท็จจริงเท่านั้น การคาดเดาด้วยอารมณ์ไม่ใช่ขอบเขตของวิชาการ",
						"hindi": "मैं केवल तथ्यों पर विश्वास करता हूँ। भावुक अटकलें अकादमिक क्षेत्र का हिस्सा नहीं हैं।"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "hazel",
					"spot": [
						3,
						3
					],
					"action": "enter"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "조각상들은 숲의 생명과 더욱 깊이 동화되어, 끔찍한 형태로 꿈틀거렸다.",
						"english": "The statues assimilated deeper with the forest's life, writhing in horrifying forms.",
						"japanese": "彫像たちは森の生命と深く同化し、恐ろしい形で蠢き出した。",
						"chinese": "雕像们与森林的生命更深地同化，以可怖的形态蠕动着。",
						"french": "Les statues s'étaient assimilées plus profondément à la vie de la forêt, se tordant en des formes horribles.",
						"spanish": "Las estatuas se asimilaron más profundamente con la vida del bosque, retorciéndose en formas horribles.",
						"vietnamese": "Những bức tượng hòa mình sâu hơn vào sự sống của rừng, uốn éo thành những hình thù khủng khiếp.",
						"thai": "รูปปั้นต่างๆ กลมกลืนเข้ากับชีวิตของป่าลึกยิ่งขึ้น บิดเบี้ยวเป็นรูปร่างที่น่าสะพรึงกลัว",
						"hindi": "मूर्तियाँ जंगल के जीवन के साथ गहराई से घुलमिल गईं, भयानक रूपों में रेंगने लगीं।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_3",
					"content": {
						"korean": "이 숲에 모든 생명이 하나가 된다는 전설이 있다던데… 혹시 이 조각상들이…",
						"english": "They say there's a legend in this forest where all life becomes one... Could these statues be...?",
						"japanese": "この森には、すべての生命が一つになるという伝説が…まさか、この彫像たちが…",
						"chinese": "听说这片森林有个传说，所有生命都会合而为一……难道这些雕像……",
						"french": "On dit qu'il y a une légende dans cette forêt où toute vie ne fait qu'un... Ces statues seraient-elles...?",
						"spanish": "Dicen que en este bosque hay una leyenda donde toda vida se une... ¿Serán estas estatuas...?",
						"vietnamese": "Nghe nói trong rừng này có truyền thuyết mọi sinh vật sẽ trở thành một... Lẽ nào những bức tượng này...?",
						"thai": "ได้ยินว่ามีตำนานในป่านี้ที่สรรพชีวิตจะรวมเป็นหนึ่ง... หรือว่ารูปปั้นเหล่านี้...",
						"hindi": "कहते हैं इस जंगल में एक किंवदंती है जहाँ सभी जीवन एक हो जाते हैं... कहीं ये मूर्तियाँ..."
					},
					"emotion": "sad"
				},
				{
					"speaker": "hazel",
					"content": {
						"korean": "미신은 지극히 비과학적입니다. 이 현상은 고대 숲의 특수한 지질학적 환경 때문입니다.",
						"english": "Superstition is highly unscientific. This phenomenon is due to the ancient forest's unique geological environment.",
						"japanese": "迷信は極めて非科学的です。この現象は、古代の森の特殊な地質学的環境によるものです。",
						"chinese": "迷信是极其不科学的。这种现象是由于古老森林特殊的地质环境造成的。",
						"french": "La superstition est profondément non scientifique. Ce phénomène est dû à l'environnement géologique unique de cette forêt antique.",
						"spanish": "La superstición es muy poco científica. Este fenómeno se debe al entorno geológico único del bosque antiguo.",
						"vietnamese": "Mê tín là vô cùng phi khoa học. Hiện tượng này là do môi trường địa chất đặc biệt của khu rừng cổ đại.",
						"thai": "ความเชื่อโชคลางไม่เป็นวิทยาศาสตร์อย่างยิ่ง ปรากฏการณ์นี้เกิดจากสภาพแวดล้อมทางธรณีวิทยาที่พิเศษของป่าโบราณ",
						"hindi": "अंधविश्वास अत्यंत अवैज्ञानिक है। यह घटना प्राचीन जंगल के अद्वितीय भूवैज्ञानिक वातावरण के कारण है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "hazel",
					"content": {
						"korean": "자연은 때로 인간의 이해를 넘어선 형태로 진화할 뿐이죠.",
						"english": "Nature sometimes simply evolves in ways beyond human comprehension.",
						"japanese": "自然は時に、人間の理解を超えた形で進化するだけのことです。",
						"chinese": "自然有时只是以超越人类理解的形式进化罢了。",
						"french": "La nature évolue parfois simplement sous des formes qui dépassent l'entendement humain.",
						"spanish": "La naturaleza a veces simplemente evoluciona de formas que superan la comprensión humana.",
						"vietnamese": "Thiên nhiên đôi khi chỉ đơn giản là tiến hóa theo những cách vượt ngoài sự hiểu biết của con người.",
						"thai": "ธรรมชาติบางครั้งก็เพียงแค่วิวัฒนาการในรูปแบบที่เกินกว่าความเข้าใจของมนุษย์เท่านั้น",
						"hindi": "प्रकृति कभी-कभी बस मानवीय समझ से परे तरीकों से विकसित होती है।"
					},
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
					"speaker": "hazel",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"speaker": "hazel",
					"content": {
						"korean": "하지만… 제 데이터와는… 분명 다릅니다. 이 정도의… 활성화는…",
						"english": "But... it's clearly different from my data. This level of... activation...",
						"japanese": "しかし…私のデータとは…明らかに違います。これほどの…活性化は…",
						"chinese": "但是……这明显与我的数据……不同。这种程度的……活化……",
						"french": "Mais... c'est clairement différent de mes données. Ce niveau d'... activation...",
						"spanish": "Pero... es claramente diferente a mis datos. Este nivel de... activación...",
						"vietnamese": "Nhưng... nó rõ ràng khác với dữ liệu của tôi. Mức độ... kích hoạt này...",
						"thai": "แต่... มันแตกต่างจากข้อมูลของผม/ดิฉันอย่างชัดเจน การกระตุ้นในระดับนี้...",
						"hindi": "लेकिन... यह मेरे डेटा से... बिल्कुल अलग है। इस स्तर की... सक्रियता..."
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "결국 당신의 과학도 한계에 부딪혔군요.",
						"english": "So, even your science has finally hit its limits.",
						"japanese": "結局、あなたの科学も限界にぶつかったようですね。",
						"chinese": "看来，你的科学也终究遇到了瓶颈。",
						"french": "Finalement, même votre science a atteint ses limites.",
						"spanish": "Al final, tu ciencia también ha llegado a su límite.",
						"vietnamese": "Rốt cuộc, khoa học của ông cũng đã chạm đến giới hạn rồi.",
						"thai": "ในที่สุด วิทยาศาสตร์ของท่านก็มาถึงขีดจำกัดแล้วสินะ",
						"hindi": "आखिरकार, आपकी विज्ञान भी अपनी सीमाओं पर पहुँच गई।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 조각상 하나가 찢어지는 소리를 내며 움직이기 시작했다.",
						"english": "A colossal statue shrieked, then began to move.",
						"japanese": "巨大な彫像が、引き裂かれるような音を立てて動き始めた。",
						"chinese": "一座巨大的雕像发出撕裂般的声音，开始移动。",
						"french": "Une statue colossale s'est mise à bouger en produisant un son déchirant.",
						"spanish": "Una estatua colosal empezó a moverse, emitiendo un sonido desgarrador.",
						"vietnamese": "Một bức tượng khổng lồ bắt đầu chuyển động, phát ra âm thanh xé toạc.",
						"thai": "รูปปั้นขนาดยักษ์เริ่มเคลื่อนไหว ส่งเสียงฉีกขาด",
						"hindi": "एक विशालकाय मूर्ति चीरने जैसी आवाज़ के साथ हिलने लगी।"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "감히… 나의 영역을… 더럽히는가…",
						"english": "How dare you... defile... my domain...?",
						"japanese": "貴様…よくも…我が領域を…穢すか…",
						"chinese": "竟敢…玷污…我的领域吗…",
						"french": "Comment oses-tu... souiller... mon domaine...?",
						"spanish": "¿Cómo osas... profanar... mi dominio...?",
						"vietnamese": "Ngươi… dám… vấy bẩn… lãnh địa của ta sao…?",
						"thai": "เจ้ากล้า… มาแปดเปื้อน… อาณาเขตของข้า… หรือ…",
						"hindi": "हिम्मत कैसे हुई… मेरे क्षेत्र को… अपवित्र करने की…?"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이게… 당신이 말하는 '자연 변이'인가, 박사님?",
						"english": "Is this... what you call 'natural mutation', Doctor?",
						"japanese": "これが…博士が言う「自然変異」ですか？",
						"chinese": "这就是…您说的“自然变异”吗，博士？",
						"french": "Est-ce ça... ce que vous appelez \"mutation naturelle\", Docteur ?",
						"spanish": "¿Es esto... lo que usted llama \"mutación natural\", Doctor?",
						"vietnamese": "Đây có phải… là 'đột biến tự nhiên' mà ông nói không, Tiến sĩ?",
						"thai": "นี่คือ… สิ่งที่คุณเรียกว่า 'การกลายพันธุ์ตามธรรมชาติ' หรือครับ/คะ, ด็อกเตอร์?",
						"hindi": "क्या यह… वही 'प्राकृतिक उत्परिवर्तन' है जिसकी आप बात कर रहे थे, डॉक्टर?"
					},
					"emotion": "angry"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"dialogue": [
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "너희는… 나의 일부가 될 것이다… 영원히…",
						"english": "You will... become part of me... forever...",
						"japanese": "お前たちは…我の一部となるのだ…永遠に…",
						"chinese": "你们将…成为我的一部分…永恒地…",
						"french": "Vous deviendrez... une partie de moi... pour l'éternité...",
						"spanish": "Seréis... parte de mí... para siempre...",
						"vietnamese": "Các ngươi… sẽ trở thành một phần của ta… mãi mãi…",
						"thai": "พวกเจ้า… จะเป็นส่วนหนึ่งของข้า… ตลอดไป…",
						"hindi": "तुम… मेरा हिस्सा बनोगे… हमेशा के लिए…"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "말도 안 되는 소리! 우린 너 같은 괴물이 아니야!",
						"english": "Nonsense! We're not monsters like you!",
						"japanese": "馬鹿な！私達はお前のような怪物ではない！",
						"chinese": "胡说！我们才不是你这种怪物！",
						"french": "Absurde ! Nous ne sommes pas des monstres comme toi !",
						"spanish": "¡Tonterías! ¡No somos monstruos como tú!",
						"vietnamese": "Vô lý! Chúng tôi không phải quái vật như ngươi!",
						"thai": "ไร้สาระ! พวกเราไม่ใช่สัตว์ประหลาดอย่างแกนะ!",
						"hindi": "बकवास! हम तुम्हारे जैसे राक्षस नहीं हैं!"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "곧… 알게 될 것이다… 너희의… 어리석음을…",
						"english": "Soon... you will know... your... folly...",
						"japanese": "やがて…知ることになるだろう…お前たちの…愚かさを…",
						"chinese": "很快…你们就会明白…你们的…愚蠢…",
						"french": "Bientôt... vous connaîtrez... votre... folie...",
						"spanish": "Pronto... sabréis... vuestra... locura...",
						"vietnamese": "Sớm thôi… các ngươi sẽ nhận ra… sự… ngu xuẩn của mình…",
						"thai": "ไม่ช้า… พวกเจ้าจะได้รู้… ถึง… ความโง่เขลา… ของพวกเจ้า…",
						"hindi": "जल्द ही… तुम्हें पता चल जाएगा… तुम्हारी… मूर्खता…"
					}
				}
			],
			"lose_dialogue": [
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은… 것들… 나의… 일부가 되어라…",
						"english": "Foolish… things… become… part of me…",
						"japanese": "愚かな… 者たち… 我の…一部となれ…",
						"chinese": "愚蠢…之物…成为…我的一部分…",
						"french": "Insensées… créatures… devenez… une partie de moi…",
						"spanish": "Estúpidas… cosas… volveos… parte de mí…",
						"vietnamese": "Những… kẻ… ngu ngốc… hãy… trở thành một phần của ta…",
						"thai": "พวก… โง่เขลา… จง… เป็นส่วนหนึ่งของข้า…",
						"hindi": "मूर्ख… जीव… मेरे… अंश बनो…"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "크아악! 아직… 끝나지 않았어!",
						"english": "Kugh! It's not… over yet!",
						"japanese": "グアアアッ！まだ…終わっていない！",
						"chinese": "呃啊！还没…结束！",
						"french": "Urgh ! Ce n'est pas… encore fini !",
						"spanish": "¡Argh! ¡Aún no… ha terminado!",
						"vietnamese": "Khụ! Vẫn chưa… kết thúc đâu!",
						"thai": "อ๊าก! ยัง… ไม่จบหรอก!",
						"hindi": "आह! अभी… खत्म नहीं हुआ है!"
					}
				},
				{
					"action": "enter",
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"speaker": "hazel",
					"type": "direction"
				},
				{
					"emotion": "sad",
					"speaker": "hazel",
					"content": {
						"korean": "이럴 리가… 모든 것이… 오류야…",
						"english": "This can't be… Everything is… an error…",
						"japanese": "まさか…全てが…エラーだ…",
						"chinese": "不可能…一切都…是错误…",
						"french": "C'est impossible… Tout est… une erreur…",
						"spanish": "Esto no puede ser… Todo es… un error…",
						"vietnamese": "Không thể nào… Mọi thứ đều… là lỗi…",
						"thai": "ไม่จริงน่า… ทุกสิ่ง… เป็นข้อผิดพลาด…",
						"hindi": "ऐसा नहीं हो सकता… सब कुछ… एक त्रुटि है…"
					},
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 이럴… 수가… 나의… 완성이…",
						"english": "Ugh... How can... this be... My... perfection...",
						"japanese": "ぐっ…まさか…こんな…我が…完成が…",
						"chinese": "呃…怎么会…这样…我的…完成…",
						"french": "Urgh... Comment... est-ce possible... Ma... perfection...",
						"spanish": "Agh... ¿Cómo... puede ser... Mi... perfección...?",
						"vietnamese": "Khụ… Không thể… nào… Sự… hoàn hảo của ta…",
						"thai": "อึก… เป็นไป… ไม่ได้… ความ… สมบูรณ์แบบของข้า…",
						"hindi": "उफ़… ऐसा… कैसे… मेरा… पूर्णता…"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "끝났다… 더 이상… 아무도 변하지 않을 거야.",
						"english": "It's over... No one... will change anymore.",
						"japanese": "終わった…これ以上…誰も変わらない。",
						"chinese": "结束了…再也…没有人会变了。",
						"french": "C'est fini... Plus personne... ne changera.",
						"spanish": "Se acabó... Nadie... cambiará más.",
						"vietnamese": "Kết thúc rồi… Sẽ không còn… ai biến đổi nữa.",
						"thai": "จบแล้ว… ไม่มีใคร… จะเปลี่ยนไปอีกแล้ว",
						"hindi": "खत्म हो गया… अब कोई… नहीं बदलेगा।"
					},
					"emotion": "base"
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "hazel",
					"duration_ms": 500,
					"spot": [
						2,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "hazel",
					"content": {
						"korean": "거짓말… 내가 틀렸을 리 없어… 모든 것이… 파괴되었어…",
						"english": "A lie... I couldn't have been wrong... Everything... is destroyed...",
						"japanese": "嘘だ…私が間違っているはずがない…全てが…破壊された…",
						"chinese": "谎言…我不可能错了…一切都…被摧毁了…",
						"french": "Mensonge... Je ne pouvais pas me tromper... Tout... est détruit...",
						"spanish": "Mentira... No pude haberme equivocado... Todo... está destruido...",
						"vietnamese": "Dối trá… Ta không thể sai được… Mọi thứ… đã bị phá hủy…",
						"thai": "โกหก… ข้าไม่มีทางผิดพลาด… ทุกสิ่ง… ถูกทำลายแล้ว…",
						"hindi": "झूठ… मैं गलत नहीं हो सकता… सब कुछ… नष्ट हो गया है…"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "헤이즐의 과학적 신념은 산산조각 났다. 숲은 여전히 침묵했지만, 그 침묵은 새로운 공포를 예고했다.",
						"english": "Hazel's scientific conviction was shattered. The forest remained silent, but that silence foretold a new dread.",
						"japanese": "ヘイゼルの科学的信念は打ち砕かれた。森は依然として沈黙していたが、その沈黙は新たな恐怖を予言していた。",
						"chinese": "海泽尔的科学信念被粉碎了。森林依旧沉默，但那份沉默预示着新的恐惧。",
						"french": "Les convictions scientifiques de Hazel furent brisées. La forêt restait silencieuse, mais ce silence annonçait une nouvelle terreur.",
						"spanish": "Las convicciones científicas de Hazel se hicieron añicos. El bosque permaneció en silencio, pero ese silencio presagiaba un nuevo terror.",
						"vietnamese": "Niềm tin khoa học của Hazel tan vỡ. Rừng vẫn chìm trong im lặng, nhưng sự im lặng ấy báo trước một nỗi kinh hoàng mới.",
						"thai": "ความเชื่อมั่นทางวิทยาศาสตร์ของเฮเซลพังทลายลง ป่ายังคงเงียบงัน แต่ความเงียบงันนั้นบ่งบอกถึงความหวาดกลัวครั้งใหม่",
						"hindi": "हेज़ल का वैज्ञानिक विश्वास बिखर गया। जंगल अभी भी शांत था, लेकिन वह शांति एक नए खौफ का संकेत दे रही थी।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "뒤틀린 생명의 조각상은 잠시 멈췄을 뿐. 숲의 더 깊은 곳에서, 진정한 악몽이 기다리고 있었다.",
						"english": "The Twisted Life Statue merely paused. Deeper in the forest, the true nightmare awaited.",
						"japanese": "歪んだ生命の像は一時停止しただけだった。森の奥深くで、真の悪夢が待っていた。",
						"chinese": "扭曲生命雕像只是暂时停了下来。在森林深处，真正的噩梦正在等待。",
						"french": "La Statue de Vie Tordue ne fit que marquer une pause. Plus profondément dans la forêt, le véritable cauchemar attendait.",
						"spanish": "La Estatua de Vida Retorcida solo se detuvo un momento. Más profundo en el bosque, la verdadera pesadilla esperaba.",
						"vietnamese": "Tượng Sống Vặn Vẹo chỉ tạm dừng. Sâu hơn trong rừng, cơn ác mộng thật sự đang chờ đợi.",
						"thai": "รูปปั้นชีวิตบิดเบี้ยวเพียงแค่หยุดชั่วคราว ลึกเข้าไปในป่า ฝันร้ายที่แท้จริงกำลังรออยู่",
						"hindi": "मुड़ी हुई जीवन प्रतिमा बस कुछ पल के लिए रुकी। जंगल में और गहरे, असली दुःस्वप्न इंतज़ार कर रहा था।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"숲은 더 깊은 곳으로 우리를 이끌었다.",
			"그곳엔 섬뜩하고 기이한 조각상들이 숲과 하나 되어 있었다.",
			"학자 헤이즐은 그저 '자연 변이'라며 눈을 가렸다.",
			"하지만 탐험대는 알았다. 이건 숲의 속삭임이자, 끔찍한 경고라는 것을.",
			"진실은 언제나 불편한 법이다."
		],
		"english": [
			"The forest led us deeper.",
			"There, eerie, bizarre statues merged with the forest.",
			"Scholar Hazel dismissed it as mere \"natural mutation.\"",
			"But the expedition team knew. This was the forest's whisper, a terrible warning.",
			"The truth is always uncomfortable."
		],
		"japanese": [
			"森は私たちをさらに深部へと導いた。",
			"そこには、不気味で奇妙な彫像が森と一体化していた。",
			"学者ヘイゼルは、ただの「自然変異」だと目を背けた。",
			"しかし、探検隊は知っていた。これは森の囁きであり、恐ろしい警告なのだと。",
			"真実は常に不快なものだ。"
		],
		"chinese": [
			"森林将我们引向更深处。",
			"那里，诡异奇特的雕像与森林融为一体。",
			"学者黑泽尔却只称其为“自然变异”，视而不见。",
			"但探险队明白，这是森林的低语，也是一个可怕的警告。",
			"真相总是令人不安的。"
		],
		"french": [
			"La forêt nous a menés plus profondément.",
			"Là, des statues étranges et macabres se confondaient avec la forêt.",
			"La savante Hazel, elle, n'y voyait qu'une \"mutation naturelle\".",
			"Mais l'équipe d'expédition le savait. C'était le murmure de la forêt, un terrible avertissement.",
			"La vérité est toujours inconfortable."
		],
		"spanish": [
			"El bosque nos condujo más profundo.",
			"Allí, estatuas espeluznantes y extrañas se fusionaban con el bosque.",
			"La erudita Hazel lo descartó como una mera \"mutación natural\".",
			"Pero el equipo de expedición lo sabía. Esto era el susurro del bosque, una terrible advertencia.",
			"La verdad siempre es incómoda."
		],
		"vietnamese": [
			"Rừng sâu dẫn chúng tôi vào sâu hơn nữa.",
			"Ở đó, những bức tượng rùng rợn, kỳ dị hòa mình vào rừng.",
			"Học giả Hazel chỉ coi đó là \"biến đổi tự nhiên\", nhắm mắt làm ngơ.",
			"Nhưng đoàn thám hiểm biết. Đây là lời thì thầm của rừng, một lời cảnh báo kinh hoàng.",
			"Sự thật luôn khó chịu."
		],
		"thai": [
			"ป่านำเราลึกเข้าไป",
			"ณ ที่นั้น รูปปั้นประหลาดน่าขนลุกได้รวมเป็นหนึ่งเดียวกับป่า",
			"นักวิชาการเฮเซลกลับมองข้าม โดยบอกว่าเป็นเพียง \"การกลายพันธุ์ทางธรรมชาติ\"",
			"แต่ทีมสำรวจรู้ดีว่า นี่คือเสียงกระซิบของป่า และเป็นคำเตือนอันน่าสะพรึงกลัว",
			"ความจริงมักไม่สะดวกสบายเสมอ"
		],
		"hindi": [
			"जंगल हमें और गहराई तक ले गया।",
			"वहाँ, डरावनी, अजीबोगरीब मूर्तियाँ जंगल में समा गई थीं।",
			"विद्वान हेज़ल ने इसे केवल \"प्राकृतिक उत्परिवर्तन\" कहकर टाल दिया।",
			"लेकिन खोज दल जानता था। यह जंगल की फुसफुसाहट थी, एक भयानक चेतावनी।",
			"सच्चाई हमेशा असहज होती है।"
		]
	}
} as const;
