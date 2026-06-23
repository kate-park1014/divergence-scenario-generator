export const scenario_modern_miasma_68_02 = {
	"scenario_id": "modern_miasma_68_02",
	"order": 2,
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
	"prologue": {
		"korean": [
			"오염된 도시의 깊은 곳.",
			"과거의 죄악은 독이 되어 스며들었다.",
			"전직 기록원, 닥스는 모든 것을 알고 있었다.",
			"그러나 침묵은 도시를 집어삼키는 독이 되었다."
		],
		"english": [
			"Deep within the contaminated city.",
			"Sins of the past seeped in like poison.",
			"Dax, the former archivist, knew everything.",
			"But silence became the poison that consumed the city."
		],
		"japanese": [
			"汚染された都市の奥深く。",
			"過去の罪悪は毒となり染み込んだ。",
			"元記録官のダックスは、すべてを知っていた。",
			"しかし沈黙は、都市を飲み込む毒となった。"
		],
		"chinese": [
			"被污染的城市深处。",
			"过去的罪恶像毒药一样渗透进来。",
			"前档案管理员达克斯，知道一切。",
			"然而，沉默成了吞噬城市的毒药。"
		],
		"french": [
			"Au plus profond de la ville contaminée.",
			"Les péchés du passé se sont infiltrés comme un poison.",
			"Dax, l'ancien archiviste, savait tout.",
			"Mais le silence est devenu le poison qui a consumé la ville."
		],
		"spanish": [
			"En lo profundo de la ciudad contaminada.",
			"Los pecados del pasado se infiltraron como veneno.",
			"Dax, el ex archivista, lo sabía todo.",
			"Pero el silencio se convirtió en el veneno que consumió la ciudad."
		],
		"vietnamese": [
			"Sâu trong thành phố ô nhiễm.",
			"Tội lỗi trong quá khứ thấm sâu như thuốc độc.",
			"Dax, cựu quản lý hồ sơ, biết mọi thứ.",
			"Nhưng sự im lặng đã trở thành chất độc nuốt chửng thành phố."
		],
		"thai": [
			"ลึกเข้าไปในเมืองที่ปนเปื้อน",
			"บาปในอดีตซึมซาบเข้ามาเหมือนยาพิษ",
			"แดกซ์ อดีตนักจดบันทึก รู้ทุกสิ่ง",
			"แต่ความเงียบกลายเป็นยาพิษที่กลืนกินเมือง"
		],
		"hindi": [
			"दूषित शहर के गहरे भीतर।",
			"अतीत के पाप ज़हर की तरह रिस गए।",
			"पूर्व अभिलेखागार, डैक्स, सब कुछ जानता था।",
			"लेकिन चुप्पी शहर को निगलने वाला ज़हर बन गई।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "오염된 지역. 도시의 심장이 썩어가는 곳.",
						"english": "Contaminated zone. Where the city's heart rots.",
						"japanese": "汚染された区域。都市の心臓が腐っていく場所。",
						"chinese": "污染区。城市之心腐烂之地。",
						"french": "Zone contaminée. Là où le cœur de la ville pourrit.",
						"spanish": "Zona contaminada. Donde el corazón de la ciudad se pudre.",
						"vietnamese": "Khu vực ô nhiễm. Nơi trái tim thành phố đang mục nát.",
						"thai": "พื้นที่ปนเปื้อน ที่ซึ่งหัวใจของเมืองเน่าเปื่อย",
						"hindi": "दूषित क्षेत्र। जहाँ शहर का दिल सड़ रहा है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "역겨운 냄새. 여기서 뭘 찾으라는 거야?",
						"english": "Nauseating stench. What am I supposed to find here?",
						"japanese": "吐き気を催す悪臭。ここで何を探せというんだ？",
						"chinese": "恶心的气味。我该在这里找什么？",
						"french": "Odeur nauséabonde. Qu'est-ce que je suis censé trouver ici ?",
						"spanish": "Olor nauseabundo. ¿Qué se supone que debo encontrar aquí?",
						"vietnamese": "Mùi hôi thối. Tôi phải tìm gì ở đây?",
						"thai": "กลิ่นน่าคลื่นไส้ ฉันควรจะหาอะไรที่นี่?",
						"hindi": "घिनौनी बदबू। मुझे यहाँ क्या ढूँढना है?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "direction",
					"speaker": "dax",
					"action": "enter",
					"spot": [
						5,
						2
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "찾는다고? 이미 충분히 많아.",
						"english": "Looking? There's already more than enough.",
						"japanese": "探すだと？もう十分すぎるほどある。",
						"chinese": "寻找？已经够多了。",
						"french": "Chercher ? Il y en a déjà bien assez.",
						"spanish": "¿Buscando? Ya hay más que suficiente.",
						"vietnamese": "Tìm kiếm? Đã có quá đủ rồi.",
						"thai": "กำลังหาอะไร? มีมากเกินพอแล้ว",
						"hindi": "ढूँढ रहे हो? पहले से ही काफी कुछ है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "dax"
				},
				{
					"type": "speech",
					"content": {
						"korean": "당신은… 닥스?",
						"english": "You're... Dax?",
						"japanese": "あなたは… ダックス？",
						"chinese": "你是……达克斯？",
						"french": "Vous êtes... Dax ?",
						"spanish": "¿Eres... Dax?",
						"vietnamese": "Bạn là... Dax?",
						"thai": "คุณคือ... แดกซ์?",
						"hindi": "तुम हो... डैक्स?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "dax",
					"emotion": "sad",
					"content": {
						"korean": "그래. 과거를 기록하던 남자지. 그리고 그 기록들이 도시를 죽이고 있어.",
						"english": "Yes. The man who recorded the past. And those records are killing the city.",
						"japanese": "そうだ。過去を記録していた男だ。そしてその記録が都市を殺している。",
						"chinese": "是的。记录过去的人。而那些记录正在扼杀这座城市。",
						"french": "Oui. L'homme qui consignait le passé. Et ces registres sont en train de tuer la ville.",
						"spanish": "Sí. El hombre que registró el pasado. Y esos registros están matando la ciudad.",
						"vietnamese": "Đúng vậy. Người đàn ông đã ghi lại quá khứ. Và những ghi chép đó đang giết chết thành phố.",
						"thai": "ใช่ ฉันคือชายผู้บันทึกอดีต และบันทึกเหล่านั้นกำลังฆ่าเมือง",
						"hindi": "हाँ। वह आदमी जिसने अतीत को दर्ज किया था। और वे रिकॉर्ड शहर को मार रहे हैं।"
					},
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"speaker": "dax",
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "이 도시의 번영? 그건 독성 폐기물 위에 세워졌어.",
						"english": "This city's prosperity? It was built on toxic waste.",
						"japanese": "この都市の繁栄だと？それは有毒廃棄物の上に築かれたものだ。",
						"chinese": "这座城市的繁荣？它建立在有毒废弃物之上。",
						"french": "La prospérité de cette ville ? Elle a été bâtie sur des déchets toxiques.",
						"spanish": "¿La prosperidad de esta ciudad? Fue construida sobre residuos tóxicos.",
						"vietnamese": "Sự thịnh vượng của thành phố này? Nó được xây dựng trên chất thải độc hại.",
						"thai": "ความเจริญรุ่งเรืองของเมืองนี้? มันถูกสร้างขึ้นบนขยะพิษ",
						"hindi": "इस शहर की समृद्धि? यह जहरीले कचरे पर बनी थी।"
					},
					"type": "speech",
					"speaker": "dax",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "폐기물… 불법으로 처리했다는 거야?",
						"english": "Waste... illegally disposed of?",
						"japanese": "廃棄物…不法に処理したってこと？",
						"chinese": "废弃物…非法处理的？",
						"french": "Déchets... éliminés illégalement ?",
						"spanish": "¿Residuos... eliminados ilegalmente?",
						"vietnamese": "Rác thải... bị xử lý trái phép ư?",
						"thai": "ของเสีย... ถูกกำจัดอย่างผิดกฎหมายเหรอ?",
						"hindi": "अपशिष्ट... अवैध रूप से निपटाया गया था?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "지하 깊숙이. 아무도 모르게.",
						"english": "Deep underground. Without anyone knowing.",
						"japanese": "地下深く。誰にも知られずに。",
						"chinese": "地下深处。神不知鬼不觉。",
						"french": "Profondément sous terre. À l'insu de tous.",
						"spanish": "En lo más profundo. Sin que nadie lo sepa.",
						"vietnamese": "Sâu dưới lòng đất. Không ai hay biết.",
						"thai": "ลึกลงไปใต้ดิน โดยไม่มีใครรู้.",
						"hindi": "भूमिगत गहराई में। किसी को पता चले बिना।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "dax"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그래서 사람들이 이상한 꿈을 꾼다는 건가?",
						"english": "So people are having strange dreams?",
						"japanese": "だから、人々は奇妙な夢を見るのか？",
						"chinese": "所以人们都在做奇怪的梦？",
						"french": "C'est pour ça que les gens font d'étranges rêves ?",
						"spanish": "¿Por eso la gente tiene sueños extraños?",
						"vietnamese": "Vậy nên mọi người mới gặp những giấc mơ kỳ lạ sao?",
						"thai": "แล้วผู้คนถึงฝันประหลาดเหรอ?",
						"hindi": "तो लोग अजीब सपने देख रहे हैं?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"speaker": "dax",
					"type": "speech",
					"content": {
						"korean": "밤마다 들려오는 비명. …그건 꿈이 아닐지도 몰라.",
						"english": "Screams heard every night. ...Those might not be dreams.",
						"japanese": "毎晩聞こえる悲鳴。…それは夢じゃないかも。",
						"chinese": "每晚都能听到的尖叫。…那可能不是梦。",
						"french": "Des cris entendus chaque nuit. …Ce ne sont peut-être pas des rêves.",
						"spanish": "Gritos cada noche. …Quizás no sean sueños.",
						"vietnamese": "Tiếng hét vang lên mỗi đêm. ...Đó có thể không phải là mơ.",
						"thai": "เสียงกรีดร้องที่ได้ยินทุกคืน ...นั่นอาจไม่ใช่ความฝัน",
						"hindi": "हर रात सुनाई देने वाली चीखें। ...शायद वे सपने न हों।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "dax",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "angry",
					"speaker": "dax",
					"content": {
						"korean": "침묵이 독을 만들었어. 모두가 외면한 대가야.",
						"english": "Silence created the poison. It's the price for everyone looking away.",
						"japanese": "沈黙が毒を生んだ。皆が見て見ぬふりをした代償だ。",
						"chinese": "沉默酿成了毒药。这是所有人袖手旁观的代价。",
						"french": "Le silence a créé le poison. C'est le prix à payer pour l'indifférence de tous.",
						"spanish": "El silencio creó el veneno. Es el precio de la indiferencia de todos.",
						"vietnamese": "Sự im lặng đã tạo ra chất độc. Đó là cái giá cho việc mọi người làm ngơ.",
						"thai": "ความเงียบสร้างพิษขึ้นมา นี่คือราคาที่ทุกคนเมินเฉย.",
						"hindi": "चुप्पी ने ज़हर बनाया। यह सभी की अनदेखी का परिणाम है।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "말라비타 갱단도 여기에 연루되어 있었나?",
						"english": "Was the Malavita gang also involved in this?",
						"japanese": "マラビータギャングもこれに関わっていたのか？",
						"chinese": "马拉维塔帮也牵扯其中了？",
						"french": "Le gang Malavita était-il aussi impliqué ?",
						"spanish": "¿La banda Malavita también estaba involucrada?",
						"vietnamese": "Băng đảng Malavita cũng có liên quan đến chuyện này sao?",
						"thai": "แก๊งมาลาวิต้าก็มีส่วนเกี่ยวข้องด้วยเหรอ?",
						"hindi": "क्या मालविटा गैंग भी इसमें शामिल था?"
					},
					"type": "speech"
				},
				{
					"speaker": "dax",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "그들은 폐기물 사업의 '보안'을 담당했지. …그들의 표식은 어디에나 있었어.",
						"english": "They handled 'security' for the waste business. ...Their mark was everywhere.",
						"japanese": "彼らは廃棄物事業の「警備」を担当していた。…彼らの印はどこにでもあった。",
						"chinese": "他们负责废弃物处理的“安保”。…他们的标记随处可见。",
						"french": "Ils géraient la 'sécurité' de l'entreprise de déchets. …Leurs marques étaient partout.",
						"spanish": "Se encargaban de la 'seguridad' del negocio de residuos. …Su marca estaba por todas partes.",
						"vietnamese": "Chúng phụ trách 'an ninh' cho việc kinh doanh rác thải. ...Dấu hiệu của chúng có ở khắp mọi nơi.",
						"thai": "พวกมันจัดการ 'ความปลอดภัย' ของธุรกิจของเสีย ...สัญลักษณ์ของพวกมันอยู่ทุกที่.",
						"hindi": "उन्होंने कचरा व्यवसाय की 'सुरक्षा' संभाली। ...उनके निशान हर जगह थे।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…진짜 악은 따로 있었네.",
						"english": "...The real evil was someone else.",
						"japanese": "…真の悪は別にいたんだな。",
						"chinese": "…真正的恶徒另有其人。",
						"french": "…Le vrai mal était ailleurs.",
						"spanish": "…El verdadero mal estaba en otro lado.",
						"vietnamese": "...Kẻ ác thực sự lại là người khác.",
						"thai": "...ความชั่วร้ายที่แท้จริงคือคนอื่น.",
						"hindi": "...असली बुराई कोई और ही थी।"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"speaker": "dax",
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이제 와서 막으려고? 너무 늦었어.",
						"english": "Trying to stop it now? Too late.",
						"japanese": "今になって止めようと？もう遅い。",
						"chinese": "现在才想阻止？太迟了。",
						"french": "Essayer d'arrêter ça maintenant ? Trop tard.",
						"spanish": "¿Intentas detenerlo ahora? Ya es tarde.",
						"vietnamese": "Giờ mới định ngăn cản ư? Đã quá muộn rồi.",
						"thai": "เพิ่งจะมาหยุดตอนนี้เหรอ? สายเกินไปแล้ว.",
						"hindi": "अब रोकने की कोशिश कर रहे हो? बहुत देर हो चुकी है।"
					},
					"emotion": "sad",
					"speaker": "dax"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "포기하지 않아.",
						"english": "I won't give up.",
						"japanese": "諦めない。",
						"chinese": "我不会放弃。",
						"french": "Je n'abandonnerai pas.",
						"spanish": "No me rindo.",
						"vietnamese": "Tôi sẽ không bỏ cuộc.",
						"thai": "ฉันจะไม่ยอมแพ้.",
						"hindi": "मैं हार नहीं मानूंगा।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "이곳은… 살아있는 무덤이야. 죄책감으로 가득한.",
						"english": "This place… a living tomb. Filled with guilt.",
						"japanese": "「ここは…生ける墓だ。罪悪感に満ちた。」",
						"chinese": "“这里是……一座活着的坟墓。充满罪恶感。”",
						"french": "« Cet endroit… une tombe vivante. Remplie de culpabilité. »",
						"spanish": "« Este lugar… una tumba viviente. Lleno de culpa. »",
						"vietnamese": "“Nơi đây… một nấm mồ sống. Chất chứa tội lỗi.”",
						"thai": "“ที่นี่…หลุมศพที่มีชีวิต. เต็มไปด้วยความรู้สึกผิด.”",
						"hindi": "“यह जगह… एक जीवित कब्र है। अपराधबोध से भरी हुई।”"
					},
					"emotion": "sad",
					"speaker": "dax"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "하지만 진실을 밝혀야 해.",
						"english": "But I must uncover the truth.",
						"japanese": "「だが、真実を暴かねば。」",
						"chinese": "“但我必须揭露真相。”",
						"french": "« Mais je dois révéler la vérité. »",
						"spanish": "« Pero debo descubrir la verdad. »",
						"vietnamese": "“Nhưng tôi phải phơi bày sự thật.”",
						"thai": "“แต่ฉันต้องเปิดเผยความจริง.”",
						"hindi": "“पर मुझे सच उजागर करना होगा।”"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "…그 진실이 너를 죽일 수도 있어.",
						"english": "…That truth might kill you.",
						"japanese": "「…その真実が、お前を殺すかもしれない。」",
						"chinese": "“…那个真相可能会杀了你。”",
						"french": "« …Cette vérité pourrait te tuer. »",
						"spanish": "« …Esa verdad podría matarte. »",
						"vietnamese": "“…Sự thật đó có thể giết chết bạn.”",
						"thai": "“…ความจริงนั้นอาจฆ่าคุณได้.”",
						"hindi": "“…वह सच तुम्हें मार भी सकता है।”"
					},
					"type": "speech",
					"speaker": "dax",
					"emotion": "sad"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "어리석은 자들. 진실을 감당할 수 없을 것이다.",
						"english": "Fools. You cannot bear the truth.",
						"japanese": "愚かな者たち。真実には耐えられまい。",
						"chinese": "愚蠢的人们。你们无法承受真相。",
						"french": "Insensés. Vous ne pourrez pas supporter la vérité.",
						"spanish": "Necios. No podréis soportar la verdad.",
						"vietnamese": "Lũ ngu xuẩn. Các ngươi sẽ không thể chịu đựng được sự thật.",
						"thai": "พวกโง่เขลา เจ้าไม่อาจทนรับความจริงได้หรอก",
						"hindi": "मूर्खों। तुम सच को बर्दाश्त नहीं कर पाओगे।"
					}
				},
				{
					"content": {
						"korean": "…이대로 끝낼 순 없어. 다시 일어설 거야.",
						"english": "...I can't end it like this. I'll rise again.",
						"japanese": "…このままでは終われない。再び立ち上がる。",
						"chinese": "……不能就这样结束。我会再次站起来。",
						"french": "...Je ne peux pas finir comme ça. Je me relèverai.",
						"spanish": "...No puedo terminar así. Me levantaré de nuevo.",
						"vietnamese": "...Không thể kết thúc như thế này được. Mình sẽ đứng dậy lần nữa.",
						"thai": "...ฉันยอมจบแบบนี้ไม่ได้หรอก ฉันจะลุกขึ้นสู้ใหม่",
						"hindi": "...मैं इसे ऐसे खत्म नहीं कर सकता। मैं फिर से उठूंगा।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"action": "enter",
					"speaker": "dax",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "이것이… 침묵의 대가야.",
						"english": "This is… the price of silence.",
						"japanese": "「これが…沈黙の代償だ。」",
						"chinese": "“这就是……沉默的代价。”",
						"french": "« Ceci est… le prix du silence. »",
						"spanish": "« Este es… el precio del silencio. »",
						"vietnamese": "“Đây là… cái giá của sự im lặng.”",
						"thai": "“นี่คือ…ราคาของการนิ่งเงียบ.”",
						"hindi": "“यह… खामोशी की कीमत है।”"
					},
					"speaker": "dax",
					"emotion": "sad"
				},
				{
					"type": "direction",
					"speaker": "dax",
					"action": "exit",
					"direction": "down",
					"duration_ms": 400
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "어둠 속에서 거대한 그림자가 나타났다.",
						"english": "From the darkness, a colossal shadow emerged.",
						"japanese": "「闇の中から、巨大な影が現れた。」",
						"chinese": "“黑暗中，一个巨大的影子出现了。”",
						"french": "« De l'obscurité, une ombre colossale émergea. »",
						"spanish": "« De la oscuridad, una sombra colosal emergió. »",
						"vietnamese": "“Từ bóng tối, một bóng đen khổng lồ xuất hiện.”",
						"thai": "“จากความมืดมิด, เงาขนาดยักษ์ปรากฏขึ้น.”",
						"hindi": "“अंधेरे से, एक विशाल छाया उभरी।”"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "침입자들. 감히 이곳을 더럽히는가.",
						"english": "Intruders. How dare you defile this place?",
						"japanese": "「侵入者め。よくもこの地を汚したな。」",
						"chinese": "“入侵者。竟敢玷污此地。”",
						"french": "« Intrus. Comment osez-vous souiller cet endroit ? »",
						"spanish": "« Intrusos. ¿Cómo os atrevéis a profanar este lugar? »",
						"vietnamese": "“Những kẻ xâm nhập. Sao dám làm ô uế nơi này?”",
						"thai": "“ผู้บุกรุก. กล้าดียังไงมาทำให้ที่นี่แปดเปื้อน?”",
						"hindi": "“घुसपैठियों। तुम्हारी हिम्मत कैसे हुई इस जगह को अपवित्र करने की?”"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "당신이… 이 오염의 근원인가?",
						"english": "Are you… the source of this corruption?",
						"japanese": "「あなたが…この汚染の根源か？」",
						"chinese": "“你就是……这腐化的根源吗？”",
						"french": "« Êtes-vous… la source de cette corruption ? »",
						"spanish": "« ¿Eres tú… la fuente de esta corrupción? »",
						"vietnamese": "“Ngươi có phải… là nguồn gốc của sự ô nhiễm này không?”",
						"thai": "“คุณคือ…ต้นตอของความแปดเปื้อนนี้ใช่ไหม?”",
						"hindi": "“क्या तुम… इस भ्रष्टाचार का स्रोत हो?”"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "나는 그저… 도시의 죄악을 반영할 뿐.",
						"english": "I merely… reflect the city's sins.",
						"japanese": "「私はただ…街の罪を映すだけだ。」",
						"chinese": "“我只是……反映着这座城市的罪恶。”",
						"french": "« Je ne fais que… refléter les péchés de la ville. »",
						"spanish": "« Yo solo… reflejo los pecados de la ciudad. »",
						"vietnamese": "“Tôi chỉ… phản ánh những tội lỗi của thành phố.”",
						"thai": "“ฉันแค่…สะท้อนบาปของเมืองเท่านั้น.”",
						"hindi": "“मैं बस… शहर के पापों को दर्शाता हूँ।”"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "헛소리 마! 막아주겠어!",
						"english": "Nonsense! I'll stop you!",
						"japanese": "「たわ言を！止めてやる！」",
						"chinese": "“胡说八道！我来阻止你！”",
						"french": "« Absurdités ! Je vais t'arrêter ! »",
						"spanish": "« ¡Tonterías! ¡Te detendré! »",
						"vietnamese": "“Vô nghĩa! Tôi sẽ ngăn ngươi lại!”",
						"thai": "“ไร้สาระ! ฉันจะหยุดแกเอง!”",
						"hindi": "“बकवास! मैं तुम्हें रोकूँगा!”"
					},
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "흥… 부패는 사라지지 않아. 그 뿌리는… 더 깊어.",
						"english": "Hmph… Corruption never fades. Its roots are… deeper.",
						"japanese": "「ふん…腐敗は消えぬ。その根は…もっと深い。」",
						"chinese": "“哼……腐化永不消散。它的根源……更深。”",
						"french": "« Hmph… La corruption ne disparaît jamais. Ses racines sont… plus profondes. »",
						"spanish": "« Hmph… La corrupción nunca desaparece. Sus raíces son… más profundas. »",
						"vietnamese": "“Hừm… Sự thối rữa không bao giờ biến mất. Căn nguyên của nó… sâu hơn nhiều.”",
						"thai": "“หึ…ความเสื่อมทรามไม่เคยจางหายไป รากของมัน…หยั่งลึกกว่านั้น.”",
						"hindi": "“हम्फ… भ्रष्टाचार कभी नहीं मिटता। उसकी जड़ें… और गहरी हैं।”"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아직 끝나지 않은 건가?",
						"english": "It's not over yet?",
						"japanese": "まだ終わっていないのか？",
						"chinese": "还没结束吗？",
						"french": "Ce n'est pas encore fini ?",
						"spanish": "¿Aún no ha terminado?",
						"vietnamese": "Vẫn chưa kết thúc sao?",
						"thai": "ยังไม่จบอีกเหรอ?",
						"hindi": "क्या यह अभी खत्म नहीं हुआ है?"
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "쓰러진 정체 모를 보스. 그러나 도시의 깊숙한 곳에서, 또 다른 죄악이 꿈틀거리고 있었다.",
						"english": "The unknown boss falls. Yet, deep within the city, another sin stirs.",
						"japanese": "倒れた正体不明のボス。しかし、都市の奥深くで、別の罪が蠢いていた。",
						"chinese": "未知的首领倒下了。然而，在这座城市的深处，另一个罪恶正在蠢蠢欲动。",
						"french": "Le boss inconnu tombe. Pourtant, au plus profond de la ville, un autre péché s'agitait.",
						"spanish": "El jefe desconocido cae. Sin embargo, en lo más profundo de la ciudad, otro pecado se agitaba.",
						"vietnamese": "Tên trùm vô danh gục ngã. Nhưng sâu thẳm trong thành phố, một tội lỗi khác đang cựa quậy.",
						"thai": "บอสปริศนาล้มลง ทว่าลึกเข้าไปในเมือง บาปอีกอย่างหนึ่งกำลังคืบคลาน",
						"hindi": "अज्ञात बॉस गिर गया। फिर भी, शहर की गहराइयों में, एक और पाप जागृत हो रहा था।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…다른 누군가가 우릴 기다리고 있는 것 같아.",
						"english": "...Someone else seems to be waiting for us.",
						"japanese": "…別の誰かが私たちを待っているようだ。",
						"chinese": "……好像有别人在等着我们。",
						"french": "...Quelqu'un d'autre semble nous attendre.",
						"spanish": "...Parece que alguien más nos espera.",
						"vietnamese": "...Có vẻ như ai đó khác đang đợi chúng ta.",
						"thai": "...ดูเหมือนจะมีคนอื่นรอเราอยู่",
						"hindi": "...लगता है कोई और हमारा इंतजार कर रहा है।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				}
			],
			"id": 15
		}
	]
} as const;
