export const scenario_forest_nutcommander_53_03 = {
	"scenario_id": "forest_nutcommander_53_03",
	"order": 3,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"ivy": {
			"id": "mon_d1c759f3-74f8-42b7-ba16-c705649f006f",
			"name": {
				"korean": "아이비",
				"english": "Ivy",
				"japanese": "アイビー",
				"chinese": "艾薇",
				"french": "Ivy",
				"spanish": "Ivy",
				"vietnamese": "Ivy",
				"thai": "ไอวี่",
				"hindi": "आइवी"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/654fde54-6029-4601-b4a8-0578f00df900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/6ee8738d-0e14-4f8d-d04d-c934b0fff000/public"
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
					"content": {
						"korean": "시간은 자비 없이 흘렀다. 숲의 생명력은 더욱 빠르게 사그라졌다.",
						"english": "Time flowed mercilessly. The forest's life force faded even faster.",
						"japanese": "時間は容赦なく流れた。森の生命力はさらに速く衰えていった。",
						"chinese": "时间无情地流逝。森林的生命力消逝得更快了。",
						"french": "Le temps s'écoulait sans pitié. La force vitale de la forêt s'éteignait encore plus vite.",
						"spanish": "El tiempo corría sin piedad. La fuerza vital del bosque se desvanecía aún más rápido.",
						"vietnamese": "Thời gian trôi đi không chút thương xót. Sức sống của rừng càng lụi tàn nhanh hơn.",
						"thai": "เวลาผ่านไปอย่างไม่ปรานี พลังชีวิตของป่าลดน้อยลงอย่างรวดเร็ว",
						"hindi": "समय निर्दयता से बीतता गया। वन की जीवन शक्ति और भी तेज़ी से कम होती गई।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "더 이상 지체할 수 없어. 심장의 씨앗을 찾아야 해.",
						"english": "We can't delay any longer. We must find the Seed of the Heart.",
						"japanese": "もうこれ以上遅らせられない。心臓の種を見つけなければ。",
						"chinese": "不能再拖延了。我必须找到心脏之种。",
						"french": "Nous ne pouvons plus attendre. Nous devons trouver la Graine du Cœur.",
						"spanish": "No podemos demorarnos más. Debemos encontrar la Semilla del Corazón.",
						"vietnamese": "Không thể trì hoãn thêm nữa. Phải tìm ra Hạt giống trái tim.",
						"thai": "เราไม่สามารถล่าช้าไปกว่านี้ได้แล้ว ต้องตามหาเมล็ดพันธุ์แห่งหัวใจ",
						"hindi": "अब और देर नहीं कर सकते। हमें हृदय का बीज खोजना होगा।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "ivy",
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "서두르는군. 씨앗은 숲을 구원할 유일한 열쇠.",
						"english": "You're in a hurry. The Seed is the only key to save the forest.",
						"japanese": "急いでいるようだな。種は森を救う唯一の鍵だ。",
						"chinese": "你很着急。这颗种子是拯救森林的唯一钥匙。",
						"french": "Tu te dépêches. La Graine est la seule clé pour sauver la forêt.",
						"spanish": "Tienes prisa. La Semilla es la única clave para salvar el bosque.",
						"vietnamese": "Vội vã thật đấy. Hạt giống là chìa khóa duy nhất để cứu lấy khu rừng.",
						"thai": "เจ้ากำลังรีบร้อน เมล็ดพันธุ์คือกุญแจเดียวที่จะกอบกู้ป่า",
						"hindi": "तुम जल्दी में हो। बीज ही वन को बचाने की एकमात्र कुंजी है।"
					},
					"emotion": "base",
					"speaker": "ivy",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "ivy",
					"content": {
						"korean": "그것을 찾으면… 모든 고통이 끝날 거야.",
						"english": "Once we find it... all suffering will end.",
						"japanese": "それを見つければ…すべての苦痛が終わるだろう。",
						"chinese": "找到它之后……所有的痛苦都会结束。",
						"french": "Une fois trouvée... toute souffrance prendra fin.",
						"spanish": "Cuando lo encontremos... todo el sufrimiento terminará.",
						"vietnamese": "Khi tìm thấy nó... mọi đau khổ sẽ chấm dứt.",
						"thai": "เมื่อพบมัน... ความเจ็บปวดทั้งหมดจะสิ้นสุดลง",
						"hindi": "जब हमें वह मिल जाएगा... तो सारा कष्ट समाप्त हो जाएगा।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "어떻게 찾을 수 있지?",
						"english": "How can we find it?",
						"japanese": "どうやって見つけられる？",
						"chinese": "怎么才能找到它？",
						"french": "Comment le trouver ?",
						"spanish": "¿Cómo podemos encontrarlo?",
						"vietnamese": "Làm sao để tìm thấy nó?",
						"thai": "เราจะหามันเจอได้อย่างไร?",
						"hindi": "हम उसे कैसे ढूंढ सकते हैं?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "ivy",
					"content": {
						"korean": "숲의 가장 깊은 곳, 가장 오래된 장소에 그 해답이 숨겨져 있지.",
						"english": "The answer is hidden in the deepest, oldest part of the forest.",
						"japanese": "森の最も深い場所、最も古い場所にその答えは隠されている。",
						"chinese": "答案就藏在森林最深、最古老的地方。",
						"french": "La réponse est cachée dans la partie la plus profonde et la plus ancienne de la forêt.",
						"spanish": "La respuesta está escondida en lo más profundo y antiguo del bosque.",
						"vietnamese": "Câu trả lời ẩn giấu ở nơi sâu nhất, cổ xưa nhất của khu rừng.",
						"thai": "คำตอบถูกซ่อนอยู่ในส่วนที่ลึกที่สุดและเก่าแก่ที่สุดของป่า",
						"hindi": "जवाब वन के सबसे गहरे, सबसे पुराने हिस्से में छिपा है।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "ivy",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "ivy",
					"content": {
						"korean": "아직도 헤매고 있나? 숲은 너희에게 그리 많은 시간을 주지 않아.",
						"english": "Still lost? The forest won't give you much time.",
						"japanese": "まだ迷っているのか？ 森はお前たちに多くの時間を与えぬ。",
						"chinese": "还在迷茫吗？森林不会给你们太多时间。",
						"french": "Toujours égarés ? La forêt ne vous laissera pas beaucoup de temps.",
						"spanish": "¿Todavía andas perdido? El bosque no os dará mucho tiempo.",
						"vietnamese": "Vẫn còn lạc lối sao? Rừng sẽ không cho ngươi nhiều thời gian đâu.",
						"thai": "ยังคงหลงทางอยู่อีกหรือ? ป่าจะไม่ให้เวลาพวกเจ้ามากนักหรอก",
						"hindi": "अभी भी भटक रहे हो? जंगल तुम्हें ज़्यादा समय नहीं देगा।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "씨앗에 대해 더 알려줘. 진실을 말해.",
						"english": "Tell me more about the Seed. Speak the truth.",
						"japanese": "種についてもっと教えろ。真実を話せ。",
						"chinese": "告诉我更多关于种子。说出真相。",
						"french": "Parle-moi davantage de la Graine. Dis la vérité.",
						"spanish": "Háblame más de la Semilla. Di la verdad.",
						"vietnamese": "Nói thêm về Hạt giống đi. Nói sự thật.",
						"thai": "บอกข้าเพิ่มเกี่ยวกับเมล็ดพันธุ์ พูดความจริงมา",
						"hindi": "मुझे बीज के बारे में और बताओ। सच कहो。"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "ivy",
					"content": {
						"korean": "진실? 씨앗은 고통받는 숲에 새로운 생명을 불어넣을 거야. 완전한… 구원을 약속하지.",
						"english": "Truth? The Seed will breathe new life into the suffering forest. It promises… complete salvation.",
						"japanese": "真実だと？ 種は苦しむ森に新たな生命を吹き込むだろう。完全な…救済を約束する。",
						"chinese": "真相？种子将为苦难的森林注入新生命。它承诺…完全的救赎。",
						"french": "La vérité ? La Graine insufflera une nouvelle vie à la forêt souffrante. Elle promet… un salut complet.",
						"spanish": "¿La verdad? La Semilla insuflará nueva vida al bosque sufriente. Promete… la salvación total.",
						"vietnamese": "Sự thật ư? Hạt giống sẽ thổi luồng sinh khí mới vào khu rừng đang chịu đựng. Nó hứa hẹn… một sự cứu rỗi hoàn toàn.",
						"thai": "ความจริงหรือ? เมล็ดพันธุ์จะนำชีวิตใหม่มาสู่ป่าที่ทุกข์ทรมาน มันสัญญา… การไถ่บาปที่สมบูรณ์",
						"hindi": "सच? बीज पीड़ित जंगल में नया जीवन फूंक देगा। यह… पूर्ण मोक्ष का वादा करता है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "잠깐… 이 문양은 뭐지?",
						"english": "Wait… what is this emblem?",
						"japanese": "待て…この文様は何だ？",
						"chinese": "等等…这个图案是什么？",
						"french": "Attends… c'est quoi cet emblème ?",
						"spanish": "Espera… ¿qué es este emblema?",
						"vietnamese": "Khoan đã… Biểu tượng này là gì?",
						"thai": "เดี๋ยวก่อน… สัญลักษณ์นี้คืออะไร?",
						"hindi": "रुको… यह प्रतीक क्या है?"
					},
					"emotion": "base",
					"speaker": "character_1",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "쓰러진 옛 숲의 수호자에게서 낯선 장신구가 발견됐다. 오래된 전설 속 '칼리'와 닮은 문양이었다.",
						"english": "A strange ornament was found on the fallen old forest guardian. Its emblem resembled 'Kali' from an ancient legend.",
						"japanese": "倒れた古き森の守護者から見慣れない装飾品が発見された。その文様は、古き伝説の「カーリー」に似ていた。",
						"chinese": "在倒下的古老森林守护者身上发现了一个陌生的饰品。其图案与古老传说中的“卡利”相似。",
						"french": "Un étrange ornement a été trouvé sur l'ancien gardien de la forêt tombé. Son emblème ressemblait à 'Kali' d'une ancienne légende.",
						"spanish": "Se encontró un extraño ornamento en el guardián caído del antiguo bosque. Su emblema se parecía a 'Kali' de una antigua leyenda.",
						"vietnamese": "Một vật trang sức lạ được tìm thấy trên người vị hộ vệ rừng già đã ngã xuống. Biểu tượng của nó giống với 'Kali' trong truyền thuyết cổ xưa.",
						"thai": "เครื่องประดับแปลกๆ ถูกพบในตัวผู้พิทักษ์ป่าเก่าที่ล้มลง สัญลักษณ์ของมันคล้ายกับ 'กาลี' จากตำนานโบราณ",
						"hindi": "गिरे हुए पुराने जंगल के संरक्षक पर एक अजीब आभूषण मिला। उसका प्रतीक एक प्राचीन किंवदंती के 'काली' जैसा था।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그런 사소한 것들에 신경 쓸 여유가 없을 텐데. 중요한 건 씨앗뿐이야.",
						"english": "You won't have time for such trivialities. Only the Seed matters.",
						"japanese": "そんな些細なことに構っている暇はないはずだ。重要なのは種だけだ。",
						"chinese": "你们没时间去管那些琐碎的事。重要的只有种子。",
						"french": "Vous n'aurez pas le temps pour de telles futilités. Seule la Graine compte.",
						"spanish": "No tendrás tiempo para esas trivialidades. Solo la Semilla importa.",
						"vietnamese": "Ngươi sẽ không có thời gian bận tâm đến những chuyện vụn vặt đó đâu. Quan trọng chỉ là Hạt giống thôi.",
						"thai": "เจ้าจะไม่มีเวลาใส่ใจเรื่องเล็กน้อยเหล่านั้นหรอก สิ่งสำคัญคือเมล็ดพันธุ์เท่านั้น",
						"hindi": "तुम्हें ऐसी तुच्छ बातों पर ध्यान देने का समय नहीं मिलेगा। केवल बीज ही मायने रखता है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "ivy"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "ivy",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "구원의 시간이 다가오고 있어. 망설일수록 숲은 더 깊이 잠식될 뿐.",
						"english": "The time of salvation approaches. The more you hesitate, the deeper the forest will be consumed.",
						"japanese": "救済の時が近づいている。ためらうほど、森は深く侵食されるだけだ。",
						"chinese": "救赎的时刻正在临近。你们越是犹豫，森林被侵蚀得就越深。",
						"french": "Le temps du salut approche. Plus vous hésitez, plus la forêt sera consumée.",
						"spanish": "El tiempo de la salvación se acerca. Cuanto más dudéis, más profundamente será consumido el bosque.",
						"vietnamese": "Thời khắc cứu rỗi đang đến gần. Càng do dự, khu rừng sẽ càng bị nuốt chửng sâu hơn.",
						"thai": "เวลาแห่งการไถ่บาปกำลังมาถึง ยิ่งเจ้าลังเล ป่าก็จะยิ่งถูกกัดกินลึกเข้าไปเท่านั้น",
						"hindi": "मोक्ष का समय निकट आ रहा है। जितना तुम हिचकिचाओगे, जंगल उतना ही गहरा समाहित होता जाएगा।"
					},
					"emotion": "base",
					"speaker": "ivy",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "구원이라니… 정확히 무슨 의미야? 대가는 없어?",
						"english": "Salvation…? What exactly does that mean? Is there no price?",
						"japanese": "救済だと…？正確にはどういう意味だ？代償はないのか？",
						"chinese": "救赎？那究竟是什么意思？没有代价吗？",
						"french": "Le salut… ? Qu'est-ce que cela signifie exactement ? N'y a-t-il pas de prix ?",
						"spanish": "¿Salvación…? ¿Qué significa eso exactamente? ¿No hay precio?",
						"vietnamese": "Cứu rỗi ư…? Chính xác là có ý gì? Không có cái giá nào sao?",
						"thai": "การไถ่บาปหรือ…? หมายความว่าอย่างไรกันแน่? ไม่มีค่าตอบแทนหรือ?",
						"hindi": "मोक्ष…? उसका ठीक-ठीक क्या मतलब है? कोई कीमत नहीं चुकानी पड़ेगी?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "대가? 새로운 시작에는 항상 희생이 따르는 법. 하지만 그 끝은 찬란한 빛일 테지.",
						"english": "A price? New beginnings always demand sacrifice. But their end will be a brilliant light.",
						"japanese": "代償だと？ 新たな始まりには常に犠牲が伴うものだ。だがその終わりは、輝かしい光となるだろう。",
						"chinese": "代价？新的开始总是伴随着牺牲。但其结局将是璀璨的光芒。",
						"french": "Un prix ? Les nouveaux commencements exigent toujours des sacrifices. Mais leur fin sera une lumière éclatante.",
						"spanish": "Un precio? Los nuevos comienzos siempre exigen sacrificios. Pero su final será una luz brillante.",
						"vietnamese": "Cái giá ư? Những khởi đầu mới luôn đi kèm với sự hy sinh. Nhưng kết thúc của chúng sẽ là một ánh sáng rực rỡ.",
						"thai": "ค่าตอบแทนหรือ? การเริ่มต้นใหม่ย่อมมาพร้อมกับการเสียสละเสมอ แต่จุดจบของมันจะเป็นแสงสว่างอันเจิดจ้า",
						"hindi": "कीमत? नई शुरुआत हमेशा बलिदान मांगती है। लेकिन उनका अंत एक शानदार प्रकाश होगा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "ivy"
				},
				{
					"content": {
						"korean": "하지만 숲은 더 빠르게 죽어가고 있어. 씨앗이 정말 구원이라면 왜 이런 일이…",
						"english": "But the forest is dying faster. If the Seed is truly salvation, then why is this happening…?",
						"japanese": "しかし森はより速く死につつある。もし種が本当に救済ならば、なぜこんなことが…",
						"chinese": "但是森林正在更快地死去。如果种子真是救赎，那为什么会这样…",
						"french": "Mais la forêt meurt plus vite. Si la Graine est vraiment la salvation, alors pourquoi cela arrive-t-il…",
						"spanish": "Pero el bosque está muriendo más rápido. Si la Semilla es realmente la salvación, ¿por qué está pasando esto…?",
						"vietnamese": "Nhưng khu rừng đang chết đi nhanh hơn. Nếu Hạt giống thực sự là sự cứu rỗi, thì tại sao lại xảy ra chuyện này…?",
						"thai": "แต่ป่ากำลังตายเร็วขึ้น หากเมล็ดพันธุ์คือการไถ่บาปจริง ทำไมถึงเกิดเรื่องแบบนี้ขึ้น…",
						"hindi": "लेकिन जंगल तेज़ी से मर रहा है। अगर बीज वाकई मोक्ष है, तो ऐसा क्यों हो रहा है…?"
					},
					"emotion": "sad",
					"speaker": "character_2",
					"type": "speech"
				},
				{
					"speaker": "ivy",
					"type": "speech",
					"content": {
						"korean": "더 큰 힘을 얻기 위한 과정일 뿐. 의심은 너희를 길을 잃게 만들 뿐이야.",
						"english": "Just a process for greater power. Doubt will only lead you astray.",
						"japanese": "更なる力を得るための過程に過ぎない。疑いは道を失わせるだけだ。",
						"chinese": "这只是获得更强大力量的过程。怀疑只会让你们迷失方向。",
						"french": "Ce n'est qu'un processus pour obtenir un plus grand pouvoir. Le doute ne fera que vous égarer.",
						"spanish": "Es solo un proceso para obtener mayor poder. La duda solo los hará perder el camino.",
						"vietnamese": "Chỉ là một quá trình để đạt được sức mạnh lớn hơn. Nghi ngờ sẽ chỉ khiến các ngươi lạc lối.",
						"thai": "เป็นเพียงกระบวนการเพื่อให้ได้มาซึ่งพลังที่ยิ่งใหญ่กว่า ความสงสัยจะทำให้เจ้าหลงทางเท่านั้น",
						"hindi": "यह केवल अधिक शक्ति प्राप्त करने की एक प्रक्रिया है। संदेह तुम्हें केवल भटकाएगा।"
					},
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "ivy",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이제 곧이야. 모든 것이 결정될 시간.",
						"english": "It's almost time. The moment of truth.",
						"japanese": "もうすぐだ。すべてが決まる時。",
						"chinese": "就快了。一切都将决定。",
						"french": "C'est imminent. Le moment où tout sera décidé.",
						"spanish": "Ya casi. Es la hora de la verdad.",
						"vietnamese": "Sắp rồi. Thời khắc mọi thứ được định đoạt.",
						"thai": "ใกล้แล้ว. เวลาที่ทุกสิ่งจะถูกตัดสิน",
						"hindi": "बस अब होने वाला है। सब कुछ तय होने का समय।"
					},
					"emotion": "base",
					"speaker": "ivy",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "지금까지 우리가 해온 모든 게… 맞는 거야?",
						"english": "Everything we've done until now... was it right?",
						"japanese": "これまで私たちがしてきたこと… 正しかったのか？",
						"chinese": "我们至今所做的一切… 是正确的吗？",
						"french": "Tout ce que nous avons fait jusqu'à présent... était-ce juste ?",
						"spanish": "¿Todo lo que hemos hecho hasta ahora... fue correcto?",
						"vietnamese": "Tất cả những gì chúng ta đã làm từ trước đến nay... có đúng không?",
						"thai": "ทุกสิ่งที่เราทำมาจนถึงตอนนี้... ถูกต้องแล้วหรือ?",
						"hindi": "जो कुछ भी हमने अब तक किया है... क्या वह सही था?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "물론이지. 너희는 숲의 운명을 바꿀 열쇠를 쥐고 있어. 선택은 너희의 몫.",
						"english": "Of course. You hold the key to change the forest's fate. The choice is yours.",
						"japanese": "もちろん。あなたたちは森の運命を変える鍵を握っている。選択はあなたたち次第だ。",
						"chinese": "当然。你们掌握着改变森林命运的钥匙。选择权在你们手中。",
						"french": "Bien sûr. Vous détenez la clé pour changer le destin de la forêt. Le choix vous appartient.",
						"spanish": "Por supuesto. Ustedes tienen la llave para cambiar el destino del bosque. La elección es suya.",
						"vietnamese": "Tất nhiên rồi. Các ngươi đang nắm giữ chìa khóa thay đổi vận mệnh khu rừng. Lựa chọn là của các ngươi.",
						"thai": "แน่นอน. พวกเจ้าคือกุญแจที่จะเปลี่ยนชะตากรรมของป่า การตัดสินใจขึ้นอยู่กับพวกเจ้า",
						"hindi": "बेशक। तुम जंगल का भाग्य बदलने की कुंजी रखते हो। चुनाव तुम्हारा है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "ivy"
				},
				{
					"speaker": "character_3",
					"type": "speech",
					"content": {
						"korean": "이 끝에 정말 숲의 진정한 구원이 있을까…?",
						"english": "At the end of this, will there truly be salvation for the forest...?",
						"japanese": "この先に、本当に森の真の救済があるのだろうか…？",
						"chinese": "在这尽头，真的会有森林真正的救赎吗…？",
						"french": "Au bout de cela, y aura-t-il vraiment le véritable salut de la forêt...?",
						"spanish": "¿Al final de esto, habrá realmente una verdadera salvación para el bosque...?",
						"vietnamese": "Liệu cuối cùng, có thật sự có sự cứu rỗi đích thực cho khu rừng không…?",
						"thai": "เมื่อถึงจุดจบนี้ จะมีทางรอดที่แท้จริงสำหรับป่าหรือไม่...?",
						"hindi": "क्या इसके अंत में वास्तव में जंगल की सच्ची मुक्ति होगी...?"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "ivy",
					"content": {
						"korean": "있고 말고. 숲은 너희에게 영원히 감사할 거야.",
						"english": "Absolutely. The forest will forever thank you.",
						"japanese": "もちろんさ。森は君たちに永遠に感謝するだろう。",
						"chinese": "当然有。森林将永远感谢你们。",
						"french": "Bien sûr que oui. La forêt vous sera éternellement reconnaissante.",
						"spanish": "Claro que sí. El bosque les estará eternamente agradecido.",
						"vietnamese": "Có chứ. Rừng sẽ mãi mãi biết ơn các ngươi.",
						"thai": "แน่นอน. ป่าจะขอบคุณพวกเจ้าตลอดไป",
						"hindi": "ज़रूर। जंगल हमेशा तुम्हारा आभारी रहेगा।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "시간은 자비 없이 흘렀다. 숲의 심장부는 이제 고통의 비명으로 가득했다.",
						"english": "Time flowed without mercy. The heart of the forest was now filled with screams of agony.",
						"japanese": "時は容赦なく流れた。森の心臓部は今や苦痛の叫びで満たされていた。",
						"chinese": "时间无情地流逝。森林的中心现在充满了痛苦的尖叫。",
						"french": "Le temps s'écoula sans pitié. Le cœur de la forêt était maintenant rempli de cris d'agonie.",
						"spanish": "El tiempo fluyó sin piedad. El corazón del bosque estaba ahora lleno de gritos de agonía.",
						"vietnamese": "Thời gian trôi đi không thương xót. Trái tim khu rừng giờ đây tràn ngập tiếng kêu than đau đớn.",
						"thai": "เวลาไหลผ่านอย่างไร้ความปรานี. ใจกลางป่าตอนนี้เต็มไปด้วยเสียงกรีดร้องแห่งความเจ็บปวด",
						"hindi": "समय बेरहमी से बीता। जंगल का हृदय अब पीड़ा की चीखों से भर गया था।"
					},
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "어리석은 것들. 감히 {random_boss}에게 대항하려 하다니.",
						"english": "Fools. To dare defy {random_boss}.",
						"japanese": "愚か者め。よくも{random_boss}に立ち向かおうとしたな。",
						"chinese": "愚蠢的东西。竟敢反抗{random_boss}。",
						"french": "Imbéciles. Oser défier {random_boss}.",
						"spanish": "Necios. ¿Osar desafiar a {random_boss}?",
						"vietnamese": "Bọn ngu xuẩn. Dám chống lại {random_boss} sao.",
						"thai": "พวกโง่เขลา. กล้าดียังไงมาต่อต้าน {random_boss}.",
						"hindi": "मूर्खों। {random_boss} का विरोध करने की हिम्मत की।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "크윽… 아직… 끝나지 않았어!",
						"english": "Urgh... It's not... over yet!",
						"japanese": "くっ…まだ…終わってない！",
						"chinese": "呃啊……还没……结束！",
						"french": "Argh... Ce n'est pas... fini !",
						"spanish": "¡Argh... aún no... ha terminado!",
						"vietnamese": "Khụ... Vẫn... chưa kết thúc!",
						"thai": "อึก... ยัง... ไม่จบ!",
						"hindi": "उफ़... अभी... खत्म नहीं हुआ!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "포기해라. 너희의 발버둥은 숲의 죽음만 앞당길 뿐.",
						"english": "Give up. Your struggles only hasten the forest's demise.",
						"japanese": "諦めろ。お前たちの足掻きは、森の死を早めるだけだ。",
						"chinese": "放弃吧。你们的挣扎只会加速森林的死亡。",
						"french": "Abandonnez. Vos efforts ne feront qu'accélérer la fin de la forêt.",
						"spanish": "Ríndanse. Sus vanos intentos solo acelerarán la muerte del bosque.",
						"vietnamese": "Từ bỏ đi. Sự vùng vẫy của các ngươi chỉ khiến cái chết của khu rừng đến nhanh hơn mà thôi.",
						"thai": "ยอมแพ้ซะ. การดิ้นรนของพวกเจ้ามีแต่จะเร่งการตายของป่าเท่านั้น",
						"hindi": "हार मान लो। तुम्हारी कोशिशें सिर्फ़ जंगल की मृत्यु को ही तेज़ करेंगी।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "숲의 힘이 다시 한번 그들을 집어삼키는 듯했다.",
						"english": "The forest's power seemed to swallow them once more.",
						"japanese": "森の力が、再び彼らを飲み込むようだった。",
						"chinese": "森林的力量似乎再次将他们吞噬。",
						"french": "Le pouvoir de la forêt sembla les engloutir une fois de plus.",
						"spanish": "El poder del bosque pareció engullirlos una vez más.",
						"vietnamese": "Sức mạnh của khu rừng dường như một lần nữa nuốt chửng bọn họ.",
						"thai": "พลังของป่าดูเหมือนจะกลืนกินพวกเขาอีกครั้ง",
						"hindi": "जंगल की शक्ति ने उन्हें एक बार फिर निगल लिया प्रतीत हुआ।"
					},
					"emotion": "base"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "마침내 숲의 심장부에 도달했다. 생명의 힘이 폭주하는 곳이었다.",
						"english": "Finally, we reached the heart of the forest. It was where the power of life ran rampant.",
						"japanese": "ついに森の心臓部に到達した。生命の力が暴走する場所だった。",
						"chinese": "终于，我们到达了森林的中心。那是生命之力暴走的地方。",
						"french": "Finalement, nous avons atteint le cœur de la forêt. C'était l'endroit où le pouvoir de la vie faisait rage.",
						"spanish": "Finalmente, llegamos al corazón del bosque. Era donde el poder de la vida desbordaba.",
						"vietnamese": "Cuối cùng, đã đến được trái tim khu rừng. Nơi sức mạnh của sự sống bùng phát dữ dội.",
						"thai": "ในที่สุดก็มาถึงใจกลางป่า สถานที่ที่พลังแห่งชีวิตอาละวาด",
						"hindi": "अंततः, हम जंगल के हृदय तक पहुँच गए। यह वह स्थान था जहाँ जीवन की शक्ति बेलगाम थी।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "감히 여기까지 온 어리석은 자들… 이곳에 발을 들인 것을 후회하게 될 것이다.",
						"english": "Fools who dared to come this far... You will regret setting foot here.",
						"japanese": "よくもここまで来た愚か者どもめ… ここに足を踏み入れたことを後悔するがいい。",
						"chinese": "胆敢来到这里的愚蠢之徒… 你们会后悔踏足此地。",
						"french": "Fous qui avez osé venir jusqu'ici... Vous regretterez d'avoir mis les pieds ici.",
						"spanish": "Necios que osaron llegar hasta aquí... Lamentarán haber puesto un pie en este lugar.",
						"vietnamese": "Những kẻ ngu ngốc dám đến tận đây… Các ngươi sẽ phải hối hận vì đã đặt chân đến đây.",
						"thai": "พวกโง่เขลาที่กล้ามาถึงที่นี่... พวกเจ้าจะต้องเสียใจที่ย่างก้าวเข้ามาในที่แห่งนี้",
						"hindi": "मूर्ख जिन्होंने यहाँ तक आने की हिम्मत की... तुम्हें यहाँ कदम रखने का पछतावा होगा।"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "네놈이… 이 숲을 망치려는 거냐!",
						"english": "You... You intend to ruin this forest!",
						"japanese": "貴様が… この森を滅ぼそうというのか！",
						"chinese": "你这家伙… 是想毁掉这座森林吗！",
						"french": "Toi... Tu comptes détruire cette forêt !",
						"spanish": "¡Tú... Quieres destruir este bosque!",
						"vietnamese": "Ngươi… Ngươi định phá hủy khu rừng này sao!",
						"thai": "แก... แกจะทำลายป่านี้งั้นรึ!",
						"hindi": "तुम... क्या तुम इस जंगल को बर्बाद करना चाहते हो!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "감히 {random_boss}에게 대항하려 하는가? 너희의 어리석음이 숲을 더 빨리 죽게 할 뿐.",
						"english": "You dare defy {random_boss}? Your foolishness will only hasten the forest's demise.",
						"japanese": "{random_boss}に歯向かうとは愚かな。お前たちの愚かさが森の死期を早めるだけだ。",
						"chinese": "竟敢反抗{random_boss}？你们的愚蠢只会加速森林的灭亡。",
						"french": "Osez-vous défier {random_boss} ? Votre folie ne fera qu'accélérer la fin de la forêt.",
						"spanish": "¿Os atrevéis a desafiar a {random_boss}? Vuestra estupidez solo acelerará la muerte del bosque.",
						"vietnamese": "Ngươi dám chống lại {random_boss} sao? Sự ngu xuẩn của ngươi chỉ khiến khu rừng chết nhanh hơn thôi.",
						"thai": "พวกแกกล้าต่อต้าน {random_boss} รึ? ความโง่เขลาของพวกแกมีแต่จะทำให้ป่าตายเร็วขึ้นเท่านั้นแหละ",
						"hindi": "तुम {random_boss} का सामना करने की हिम्मत कैसे करते हो? तुम्हारी मूर्खता केवल जंगल के पतन को तेज़ करेगी।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"speaker": "ivy"
				},
				{
					"content": {
						"korean": "멈춰! {random_boss}, 더 이상은 안 돼!",
						"english": "Stop! {random_boss}, no more!",
						"japanese": "やめろ！{random_boss}、もうそれ以上は！",
						"chinese": "住手！{random_boss}，不能再这样了！",
						"french": "Arrête ! {random_boss}, pas un pas de plus !",
						"spanish": "¡Detente! ¡{random_boss}, no más!",
						"vietnamese": "Dừng lại! {random_boss}, đừng tiếp tục nữa!",
						"thai": "หยุดนะ! {random_boss}, พอได้แล้ว!",
						"hindi": "रुको! {random_boss}, और नहीं!"
					},
					"emotion": "angry",
					"speaker": "ivy",
					"type": "speech"
				},
				{
					"content": {
						"korean": "방해하지 마라, 아이비. 이들은 숲의 질서를 어지럽히는 존재들.",
						"english": "Don't interfere, Ivy. They are those who disrupt the forest's order.",
						"japanese": "邪魔をするな、アイビー。こいつらは森の秩序を乱す者たちだ。",
						"chinese": "别碍事，艾薇。他们是扰乱森林秩序的存在。",
						"french": "Ne t'interpose pas, Ivy. Ce sont eux qui perturbent l'ordre de la forêt.",
						"spanish": "No interfieras, Ivy. Ellos son los que alteran el orden del bosque.",
						"vietnamese": "Đừng cản trở, Ivy. Chúng là những kẻ phá hoại trật tự của rừng.",
						"thai": "อย่าขัดขวาง, ไอวี่. พวกมันคือผู้ที่รบกวนความสงบของป่า",
						"hindi": "दखल मत दो, आइवी। ये वे लोग हैं जो जंगल की व्यवस्था को बिगाड़ते हैं।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "ivy",
					"content": {
						"korean": "그래도… 그들은 숲의 구원을 위한…!",
						"english": "But... they are for the forest's salvation...!",
						"japanese": "それでも… 彼らは森を救うために…！",
						"chinese": "可是……他们是为了森林的救赎……！",
						"french": "Pourtant... ils sont là pour le salut de la forêt...!",
						"spanish": "Pero... ¡ellos están por la salvación del bosque...!",
						"vietnamese": "Dù vậy… họ là vì sự cứu rỗi của khu rừng…!",
						"thai": "แต่... พวกเขาทำเพื่อการกอบกู้ป่า...!",
						"hindi": "फिर भी... वे जंगल के उद्धार के लिए हैं...!"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "구원? 네 말은 믿을 수 없어! 우리는 속았어!",
						"english": "Salvation? I can't believe your words! We were deceived!",
						"japanese": "救済だと？お前の言葉は信じられん！我々は騙されたのだ！",
						"chinese": "救赎？你的话不可信！我们被骗了！",
						"french": "Le salut ? Je ne peux pas croire tes mots ! Nous avons été dupés !",
						"spanish": "¿Salvación? ¡No puedo creer tus palabras! ¡Fuimos engañados!",
						"vietnamese": "Cứu rỗi? Tôi không thể tin lời ngươi! Chúng ta đã bị lừa!",
						"thai": "กอบกู้? ฉันไม่เชื่อคำพูดของแก! เราถูกหลอก!",
						"hindi": "उद्धार? मैं तुम्हारी बातों पर विश्वास नहीं कर सकता! हमें धोखा दिया गया था!"
					},
					"emotion": "angry"
				},
				{
					"type": "direction",
					"speaker": "ivy",
					"action": "exit",
					"direction": "up",
					"duration_ms": 400
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 것들. 너희의 운명은 여기서 끝이다.",
						"english": "Insignificant beings. Your fate ends here.",
						"japanese": "取るに足らぬ者ども。お前たちの運命はここで終わりだ。",
						"chinese": "卑微的家伙们。你们的命运到此为止了。",
						"french": "Misérables créatures. Votre destin s'achève ici.",
						"spanish": "Seres insignificantes. Vuestro destino termina aquí.",
						"vietnamese": "Những kẻ thấp kém. Số phận của ngươi kết thúc tại đây.",
						"thai": "พวกไร้ค่า. ชะตากรรมของพวกแกจะจบลงที่นี่",
						"hindi": "तुच्छ प्राणी। तुम्हारा भाग्य यहीं समाप्त होता है।"
					},
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 이럴… 수가… 하지만… 너희가 얻은 구원은… 진정한… 파멸일 뿐…",
						"english": "Ugh... How... can this be...? But... the salvation you've gained... is nothing but... true... destruction...",
						"japanese": "ぐっ… まさか… しかし… お前たちが手にした救済は… 真の… 破滅にすぎない…",
						"chinese": "呃……怎么会……但是……你们所获得的救赎……只是……真正的……毁灭罢了……",
						"french": "Ugh... Comment... est-ce possible...? Mais... le salut que vous avez obtenu... n'est que... la véritable... ruine...",
						"spanish": "Ugh... ¿Cómo... puede ser...? Pero... la salvación que habéis obtenido... no es más que... la verdadera... perdición...",
						"vietnamese": "Khụ… Sao… có thể thế này… Nhưng… sự cứu rỗi mà các ngươi có được… chỉ là… sự hủy diệt… thật sự mà thôi…",
						"thai": "อึก... เป็นไป... ไม่ได้... แต่... การกอบกู้ที่พวกแกได้รับ... เป็นเพียง... หายนะ... ที่แท้จริงเท่านั้น...",
						"hindi": "ऊह... यह कैसे... हो सकता है...? लेकिन... जो मुक्ति तुमने पाई है... वह... सच्चा... विनाश ही है..."
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "파멸? 무슨 소리야…?",
						"english": "Destruction? What are you talking about...?",
						"japanese": "破滅だと？何を言っているんだ…？",
						"chinese": "毁灭？什么意思……？",
						"french": "La destruction ? De quoi parles-tu... ?",
						"spanish": "¿Perdición? ¿De qué estás hablando...?",
						"vietnamese": "Hủy diệt? Ngươi đang nói gì vậy…?",
						"thai": "หายนะ? หมายความว่าอะไร...?",
						"hindi": "विनाश? तुम क्या कह रहे हो...?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "character_4",
					"type": "speech",
					"content": {
						"korean": "우리는 숲을 구원한 거야! 거짓말 마!",
						"english": "We saved the forest! Don't lie!",
						"japanese": "我々は森を救ったんだ！嘘をつくな！",
						"chinese": "我们拯救了森林！别撒谎！",
						"french": "Nous avons sauvé la forêt ! Ne mens pas !",
						"spanish": "¡Hemos salvado el bosque! ¡No mientas!",
						"vietnamese": "Chúng tôi đã cứu khu rừng! Đừng nói dối!",
						"thai": "เรากอบกู้ป่าไว้ได้! อย่าโกหก!",
						"hindi": "हमने जंगल को बचाया है! झूठ मत बोलो!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "중간 보스는 쓰러졌지만, 그 마지막 말은 탐험대의 마음에 의심의 씨앗을 심었다.",
						"english": "The mid-boss fell, but its final words planted seeds of doubt in the explorers' hearts.",
						"japanese": "中間ボスは倒れたが、その最後の言葉は探検隊の心に疑念の種を蒔いた。",
						"chinese": "中级首领倒下了，但它最后的遗言在探险队心中埋下了怀疑的种子。",
						"french": "Le boss intermédiaire est tombé, mais ses derniers mots ont semé des graines de doute dans le cœur des explorateurs.",
						"spanish": "El jefe intermedio cayó, pero sus últimas palabras sembraron semillas de duda en los corazones de los exploradores.",
						"vietnamese": "Trùm giữa đã gục ngã, nhưng những lời cuối cùng của nó đã gieo những hạt giống nghi ngờ vào lòng các nhà thám hiểm.",
						"thai": "มิดบอสล้มลงแล้ว แต่คำพูดสุดท้ายของมันได้หว่านเมล็ดพันธุ์แห่งความสงสัยลงในใจของเหล่านักสำรวจ",
						"hindi": "मध्यम बॉस गिर गया, लेकिन उसके अंतिम शब्दों ने खोजकर्ताओं के दिलों में संदेह के बीज बो दिए।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "시간의 저주는 잠시 멈춘 듯했다. 그러나 숲은… 여전히 고통스러운 울부짖고 있었다.",
						"english": "The curse of time seemed to pause. But the forest... still cried out in agony.",
						"japanese": "時間の呪いは一時的に止まったようだった。しかし森は…まだ苦痛に呻いていた。",
						"chinese": "时间的诅咒似乎暂时停止了。然而森林……仍在痛苦地哀嚎着。",
						"french": "La malédiction du temps semblait s'être arrêtée un instant. Mais la forêt... hurlait toujours de douleur.",
						"spanish": "La maldición del tiempo pareció detenerse por un momento. Pero el bosque... seguía aullando de dolor.",
						"vietnamese": "Lời nguyền thời gian dường như đã tạm dừng. Nhưng khu rừng... vẫn đang gào thét trong đau đớn.",
						"thai": "คำสาปแห่งเวลาราวกับหยุดลงชั่วขณะ แต่ป่า...ก็ยังคงกรีดร้องอย่างทรมาน",
						"hindi": "समय का अभिशाप क्षण भर के लिए रुक गया प्रतीत हुआ। लेकिन जंगल... अभी भी दर्द से कराह रहा था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"숲은 병들었다. 시한부 선고처럼, 시간은 빠르게 흘렀다.",
			"심장의 씨앗. 유일한 구원이라 믿었던 그 이름.",
			"그러나 구원의 길목에서 만난 진실은, 너무도 잔혹하게 왜곡되어 있었다.",
			"우리는 옳은 길을 가고 있는가?"
		],
		"english": [
			"The forest sickened. Like a terminal diagnosis, time swiftly passed.",
			"The Seed of the Heart. The name believed to be the only salvation.",
			"Yet the truth encountered on the path to salvation was cruelly distorted.",
			"Are we on the right path?"
		],
		"japanese": [
			"森は病んでいた。余命宣告のように、時間はあっという間に過ぎ去った。",
			"心臓の種。唯一の救いだと信じたその名。",
			"しかし、救いの途上で出会った真実は、あまりにも残酷に歪められていた。",
			"我々は正しい道を歩んでいるのか？"
		],
		"chinese": [
			"森林病了。如同末日宣判，时间飞逝。",
			"心脏之种。曾被认为是唯一的救赎之名。",
			"然而，在救赎的道路上遇到的真相，却被残酷地扭曲了。",
			"我们走在正确的道路上吗？"
		],
		"french": [
			"La forêt dépérissait. Comme un verdict terminal, le temps s'écoulait rapidement.",
			"La Graine du Cœur. Ce nom, cru être l'unique salut.",
			"Pourtant, la vérité rencontrée sur le chemin du salut était cruellement déformée.",
			"Sommes-nous sur le bon chemin ?"
		],
		"spanish": [
			"El bosque enfermó. Como una sentencia terminal, el tiempo pasó rápidamente.",
			"La Semilla del Corazón. El nombre que se creía la única salvación.",
			"Sin embargo, la verdad encontrada en el camino de la salvación estaba cruelmente distorsionada.",
			"¿Estamos en el camino correcto?"
		],
		"vietnamese": [
			"Rừng đã bệnh. Thời gian trôi nhanh như bản án tử hình.",
			"Hạt giống trái tim. Cái tên được tin là sự cứu rỗi duy nhất.",
			"Tuy nhiên, sự thật gặp phải trên con đường cứu rỗi lại bị bóp méo một cách tàn nhẫn.",
			"Chúng ta có đang đi đúng đường không?"
		],
		"thai": [
			"ป่าป่วยแล้ว ดั่งคำตัดสินสุดท้าย เวลายิ่งผ่านไปอย่างรวดเร็ว",
			"เมล็ดพันธุ์แห่งหัวใจ ชื่อที่เชื่อว่าเป็นทางรอดเดียว",
			"แต่ความจริงที่พบเจอ ณ ทางแยกแห่งความรอด กลับถูกบิดเบือนอย่างโหดร้าย",
			"เรากำลังไปถูกทางแล้วหรือ?"
		],
		"hindi": [
			"वन बीमार पड़ गया। एक जानलेवा बीमारी की तरह, समय तेज़ी से बीतता गया।",
			"हृदय का बीज। वह नाम जिसे एकमात्र मोक्ष माना जाता था।",
			"लेकिन मोक्ष के मार्ग पर मिली सच्चाई, बहुत बेरहमी से विकृत कर दी गई थी।",
			"क्या हम सही रास्ते पर हैं?"
		]
	}
} as const;
