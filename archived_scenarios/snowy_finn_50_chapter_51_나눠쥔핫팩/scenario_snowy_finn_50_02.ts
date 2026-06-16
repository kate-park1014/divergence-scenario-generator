export const scenario_snowy_finn_50_02 = {
	"scenario_id": "snowy_finn_50_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"frost": {
			"id": "mon_942bca3b-33e7-4b14-98e5-ec1e2dc78d5b",
			"name": {
				"korean": "서리",
				"english": "Frost",
				"japanese": "霜",
				"chinese": "霜",
				"french": "Givre",
				"spanish": "Escarcha",
				"vietnamese": "Băng Giá",
				"thai": "น้ำแข็ง",
				"hindi": "पाला"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0a8c2f92-0cf9-413d-0b33-8e0204caae00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/df60b327-4cc2-435b-67e0-cffb4c319900/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"눈보라가 몰아치는 밤.",
			"작은 얼음 처마 밑, 온기 하나가 모두를 모았다.",
			"핫팩 속 뜨거움만큼, 각자의 마음도 데워졌다.",
			"얼어붙은 세상 속, 처음으로 속삭이는 진심들."
		],
		"english": [
			"A night of raging blizzard.",
			"Beneath a small icy eave, a single warmth gathered everyone.",
			"As warm as the hot pack, each heart was also warmed.",
			"In a frozen world, truths whispered for the first time."
		],
		"japanese": [
			"吹雪の夜。",
			"小さな氷の軒下、一つの温もりが皆を集めた。",
			"ホットパックの温かさのように、それぞれの心も温められた。",
			"凍てついた世界で、初めて囁かれる本心。"
		],
		"chinese": [
			"暴风雪之夜。",
			"小小的冰檐下，一丝暖意将众人聚集。",
			"犹如暖手宝的温度，每个人的心也被温暖。",
			"在冰封的世界里，第一次低语的真心话。"
		],
		"french": [
			"Une nuit de blizzard déchaîné.",
			"Sous un petit avant-toit de glace, une seule chaleur a réuni tout le monde.",
			"Aussi chaude que le hot pack, chaque cœur fut aussi réchauffé.",
			"Dans un monde gelé, des vérités chuchotées pour la première fois."
		],
		"spanish": [
			"Una noche de ventisca furiosa.",
			"Bajo un pequeño alero de hielo, un único calor los reunió a todos.",
			"Tan cálido como la bolsa de calor, cada corazón también se calentó.",
			"En un mundo helado, verdades susurradas por primera vez."
		],
		"vietnamese": [
			"Một đêm bão tuyết hoành hành.",
			"Dưới mái hiên băng nhỏ, một hơi ấm đã tập hợp tất cả.",
			"Tựa hơi ấm từ túi sưởi, mỗi trái tim cũng được sưởi ấm.",
			"Trong thế giới băng giá, những lời thật lòng lần đầu tiên được thì thầm."
		],
		"thai": [
			"คืนพายุหิมะโหมกระหน่ำ",
			"ใต้ชายคาน้ำแข็งเล็กๆ ความอบอุ่นหนึ่งเดียวรวบรวมทุกคน",
			"หัวใจของแต่ละคนก็อบอุ่นขึ้นเช่นเดียวกับความร้อนจากถุงร้อน",
			"ในโลกที่เยือกแข็ง ความจริงใจแรกที่กระซิบกัน"
		],
		"hindi": [
			"बर्फीले तूफान की रात।",
			"एक छोटे बर्फीले छज्जे के नीचे, एक गरमाहट ने सबको इकट्ठा किया।",
			"जैसे हॉटपैक की गरमाहट, वैसे ही हर दिल भी गरमा गया।",
			"जमी हुई दुनिया में, पहली बार फुसफुसाई सच्ची बातें।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거센 눈보라 속, 잠시 숨을 고르기 위해 얼음 처마 밑에 모였다.",
						"english": "Amidst the raging blizzard, we gathered under the icy eaves to catch our breath.",
						"japanese": "激しい吹雪の中、息を整えるために氷の軒下に集まった。",
						"chinese": "在猛烈的暴风雪中，我们聚集在冰檐下喘息片刻。",
						"french": "Au milieu du blizzard violent, nous nous sommes rassemblés sous l'avant-toit de glace pour reprendre notre souffle.",
						"spanish": "En medio de la furiosa ventisca, nos reunimos bajo el alero de hielo para recuperar el aliento.",
						"vietnamese": "Giữa bão tuyết dữ dội, chúng tôi tụ tập dưới mái hiên băng để nghỉ lấy sức.",
						"thai": "ท่ามกลางพายุหิมะที่รุนแรง เรามารวมตัวกันใต้ชายคาน้ำแข็งเพื่อพักหายใจชั่วครู่",
						"hindi": "भीषण बर्फीले तूफान के बीच, हम बर्फीले छज्जे के नीचे सांस लेने के लिए इकट्ठा हुए।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "핫팩, 아직 따뜻하네.",
						"english": "Hot pack, still warm.",
						"japanese": "ホットパック、まだ温かいね。",
						"chinese": "暖手宝，还暖和着呢。",
						"french": "Le hot pack, encore chaud.",
						"spanish": "La bolsa de calor, aún tibia.",
						"vietnamese": "Túi sưởi, vẫn còn ấm.",
						"thai": "ถุงร้อนยังอุ่นอยู่เลย",
						"hindi": "हॉटपैक, अभी भी गरम है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_1",
					"content": {
						"korean": "이 온기가 얼마나 갈까.",
						"english": "How long will this warmth last?",
						"japanese": "この温かさはどれくらい続くかな。",
						"chinese": "这份温暖能持续多久呢？",
						"french": "Combien de temps cette chaleur durera-t-elle ?",
						"spanish": "¿Cuánto durará este calor?",
						"vietnamese": "Hơi ấm này sẽ kéo dài bao lâu?",
						"thai": "ความอบอุ่นนี้จะอยู่ได้นานแค่ไหน",
						"hindi": "यह गरमाहट कितनी देर रहेगी?"
					}
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "frost",
					"spot": [
						4,
						3
					]
				},
				{
					"emotion": "base",
					"speaker": "frost",
					"content": {
						"korean": "…얼마나든, 소중해.",
						"english": "...However long, it's precious.",
						"japanese": "…どれくらいでも、大切だよ。",
						"chinese": "……无论多久，都很珍贵。",
						"french": "...Peu importe la durée, c'est précieux.",
						"spanish": "...Dure lo que dure, es valioso.",
						"vietnamese": "...Dù bao lâu, cũng thật quý giá.",
						"thai": "ไม่ว่าจะนานแค่ไหน ก็มีค่า",
						"hindi": "...जितनी भी देर, अनमोल है।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 550,
					"speaker": "frost",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "frost",
					"content": {
						"korean": "이 온기… 참 좋다.",
						"english": "This warmth... it's really nice.",
						"japanese": "この温もり…本当に良いな。",
						"chinese": "这份温暖……真好。",
						"french": "Cette chaleur... c'est vraiment agréable.",
						"spanish": "Este calor... es realmente agradable.",
						"vietnamese": "Hơi ấm này... thật dễ chịu.",
						"thai": "ความอบอุ่นนี้...ดีจริงๆ",
						"hindi": "यह गरमाहट... बहुत अच्छी है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "몸이 좀 녹았어?",
						"english": "Are you feeling a bit warmer?",
						"japanese": "体、少し温まった？",
						"chinese": "身体暖和一点了吗？",
						"french": "Ton corps s'est un peu réchauffé ?",
						"spanish": "¿Tu cuerpo se ha calentado un poco?",
						"vietnamese": "Cơ thể đã ấm lên chút nào chưa?",
						"thai": "ร่างกายอุ่นขึ้นบ้างไหม",
						"hindi": "क्या शरीर में थोड़ी गरमाहट आई?"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "frost",
					"content": {
						"korean": "(핫팩을 든 손을 처마 밖으로 슬그머니 내밀며) …차가워. 모든 게.",
						"english": "(Stealthily extending a hand with a hot pack beyond the eaves) ...Cold. Everything.",
						"japanese": "(カイロを持つ手を軒下からそっと出して)…冷たい。すべてが。",
						"chinese": "(将拿着暖手宝的手悄悄伸出屋檐)…好冷。一切都好冷。",
						"french": "(Tendant discrètement une main tenant une bouillotte au-delà de l'avant-toit) ...Froid. Tout l'est.",
						"spanish": "(Extendiendo sigilosamente una mano con una bolsa térmica más allá del alero) ...Frío. Todo lo está.",
						"vietnamese": "(Len lén đưa bàn tay cầm túi sưởi ra ngoài mái hiên) ...Lạnh. Mọi thứ.",
						"thai": "(ค่อยๆ ยื่นมือที่ถือแผ่นประคบร้อนออกไปนอกชายคา) ...หนาวเย็น ทุกสิ่งเลย",
						"hindi": "(गर्म पैकेट वाले हाथ को चुपचाप छत से बाहर निकालते हुए) ...ठंडा है। सब कुछ।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_2",
					"content": {
						"korean": "조심해, 손 얼어.",
						"english": "Careful, your hand will freeze.",
						"japanese": "気を付けて、手が凍るよ。",
						"chinese": "小心，手会冻僵的。",
						"french": "Attention, ta main va geler.",
						"spanish": "Cuidado, se te congelará la mano.",
						"vietnamese": "Cẩn thận, tay sẽ bị đóng băng đấy.",
						"thai": "ระวังนะ มือจะแข็งเอาได้",
						"hindi": "सावधान, तुम्हारा हाथ जम जाएगा।"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 450,
					"speaker": "frost",
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "frost",
					"content": {
						"korean": "(처마 밖으로 내밀었던 손을 거두며) …나도 추위가 무섭거든.",
						"english": "(Withdrawing the hand extended beyond the eaves) ...I fear the cold too.",
						"japanese": "(軒下に出していた手を引っ込めながら)…私も寒さが怖いんだ。",
						"chinese": "(收回伸出屋檐的手)…我也害怕寒冷。",
						"french": "(Rétractant la main tendue au-delà de l'avant-toit) ...Moi aussi, la froideur me fait peur.",
						"spanish": "(Retirando la mano extendida más allá del alero) ...Yo también temo al frío.",
						"vietnamese": "(Rụt bàn tay đã đưa ra ngoài mái hiên vào) ...Ta cũng sợ cái lạnh.",
						"thai": "(ดึงมือที่ยื่นออกไปนอกชายคากลับเข้ามา) ...ฉันก็กลัวความหนาวเหมือนกัน",
						"hindi": "(छत से बाहर निकाले हुए हाथ को वापस खींचते हुए) ...मुझे भी ठंड से डर लगता है।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "프로스트…",
						"english": "Frost...",
						"japanese": "フロスト…",
						"chinese": "弗罗斯特…",
						"french": "Frost...",
						"spanish": "Frost...",
						"vietnamese": "Frost...",
						"thai": "ฟรอสต์...",
						"hindi": "फ़्रॉस्ट..."
					}
				},
				{
					"type": "speech",
					"speaker": "frost",
					"content": {
						"korean": "그 왕도… 그렇겠지.",
						"english": "That king... must be the same.",
						"japanese": "あの王も…そうだろうな。",
						"chinese": "那个国王…也一样吧。",
						"french": "Ce roi... aussi, sans doute.",
						"spanish": "Ese rey... también, supongo.",
						"vietnamese": "Vị vua đó... cũng vậy thôi.",
						"thai": "ราชาองค์นั้น... ก็คงจะเหมือนกัน",
						"hindi": "वह राजा भी... ऐसा ही होगा।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_3",
					"content": {
						"korean": "왕이? 왜?",
						"english": "The king? Why?",
						"japanese": "王が？なぜ？",
						"chinese": "国王？为什么？",
						"french": "Le roi ? Pourquoi ?",
						"spanish": "¿El rey? ¿Por qué?",
						"vietnamese": "Vua sao? Tại sao?",
						"thai": "ราชาเหรอ? ทำไมล่ะ?",
						"hindi": "राजा? क्यों?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "frost",
					"content": {
						"korean": "차가움 속에 홀로 있었다면… 그 왕도, 결국 똑같은 추위를 알았을 거야.",
						"english": "If he was alone in the cold... that king too, must have known the same chill in the end.",
						"japanese": "冷たさの中に一人でいたのなら…あの王も、結局同じ寒さを知ったはずだ。",
						"chinese": "如果他独自一人身处寒冷之中…那位国王，最终也会知道同样的寒冷。",
						"french": "S'il était seul dans le froid... ce roi aussi, a finalement connu le même frisson.",
						"spanish": "Si estuvo solo en el frío... ese rey también, al final habrá conocido el mismo frío.",
						"vietnamese": "Nếu người đã ở một mình trong cái lạnh... thì vị vua đó, cuối cùng cũng sẽ biết cái lạnh tương tự.",
						"thai": "หากเขาอยู่ลำพังท่ามกลางความหนาวเย็น... ราชาองค์นั้นก็คงจะรับรู้ถึงความหนาวเย็นแบบเดียวกันในที่สุด",
						"hindi": "अगर वह ठंड में अकेला था... तो वह राजा भी, अंततः वही ठंडक जानता होगा।"
					},
					"emotion": "sad"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 600,
					"speaker": "frost",
					"spot": [
						5,
						2
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "온기 속에서 잠시 잊었던 거대한 그림자가 다가왔다.",
						"english": "A giant shadow, briefly forgotten in the warmth, approached.",
						"japanese": "暖かさの中で momentarily 忘れていた巨大な影が近づいてきた。",
						"chinese": "在温暖中短暂遗忘的巨大身影，渐渐逼近。",
						"french": "Une ombre immense, un instant oubliée dans la chaleur, s'approcha.",
						"spanish": "Una sombra gigantesca, olvidada por un momento en el calor, se acercó.",
						"vietnamese": "Một bóng tối khổng lồ, tưởng chừng đã bị lãng quên trong hơi ấm, đang đến gần.",
						"thai": "เงาขนาดมหึมาที่ถูกลืมไปชั่วขณะในความอบอุ่น ได้คืบคลานเข้ามา",
						"hindi": "गर्मी में क्षण भर के लिए भूली हुई एक विशाल छाया करीब आ गई।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "…따뜻한 온기, 탐나는구나.",
						"english": "...Warmth, I desire it.",
						"japanese": "…暖かい温もり、欲しくなるな。",
						"chinese": "…温暖的暖意，真令人向往啊。",
						"french": "...Cette chaleur, je la désire.",
						"spanish": "...Calor, lo anhelo.",
						"vietnamese": "...Hơi ấm áp này, thật đáng thèm muốn.",
						"thai": "...ความอบอุ่นนี้ ช่างน่าปรารถนา",
						"hindi": "...गर्मजोशी, मुझे यह चाहिए।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "누구야!",
						"english": "Who's there!",
						"japanese": "誰だ！",
						"chinese": "是谁！",
						"french": "Qui est là !",
						"spanish": "¡Quién anda ahí!",
						"vietnamese": "Ai đó!",
						"thai": "ใครน่ะ!",
						"hindi": "कौन है!"
					}
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "(비웃듯) 차가운 숲의 주인. 너희의 온기를 빼앗아줄 자.",
						"english": "(Scoffs) Master of the cold forest. I'll take your warmth.",
						"japanese": "(あざけるように) 冷たい森の主。お前たちの温もりを奪ってやろう。",
						"chinese": "(嗤笑) 冰冷森林之主。我会夺走你们的温暖。",
						"french": "(Ricanant) Maître de la forêt froide. Je vous priverai de votre chaleur.",
						"spanish": "(Con desprecio) Señor del bosque frío. Les arrebataré su calor.",
						"vietnamese": "(Cười khẩy) Chủ nhân khu rừng lạnh giá. Ta sẽ cướp đi hơi ấm của các ngươi.",
						"thai": "(หัวเราะเยาะ) เจ้าแห่งป่าเยือกแข็ง ข้าจะพรากความอบอุ่นของพวกเจ้าไป",
						"hindi": "(उपहासपूर्वक) ठंडे जंगल का स्वामी। मैं तुम्हारी गर्मी छीन लूँगा।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "이 한기… 너의 짓이냐?",
						"english": "This chill… Is this your doing?",
						"japanese": "この寒気… お前の仕業か？",
						"chinese": "这股寒意… 是你干的吗？",
						"french": "Ce froid… Est-ce ton œuvre ?",
						"spanish": "Este frío… ¿Es obra tuya?",
						"vietnamese": "Cái lạnh này… là do ngươi gây ra à?",
						"thai": "ความหนาวเหน็บนี้… ฝีมือเจ้าหรือ?",
						"hindi": "यह ठंडक… क्या यह तुम्हारा काम है?"
					},
					"emotion": "angry"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "얼음동굴 깊은 곳, 거대한 존재가 앞을 막아섰다.",
						"english": "Deep within the ice cave, a colossal being blocked the way.",
						"japanese": "氷の洞窟の奥深く、巨大な存在が道を塞いでいた。",
						"chinese": "在冰窟深处，一个巨大的存在挡住了去路。",
						"french": "Au plus profond de la caverne de glace, une entité colossale barra le chemin.",
						"spanish": "En lo profundo de la cueva de hielo, un ser colosal bloqueó el camino.",
						"vietnamese": "Sâu thẳm trong hang băng, một thực thể khổng lồ đã chặn lối đi.",
						"thai": "ลึกเข้าไปในถ้ำน้ำแข็ง สิ่งมีชีวิตขนาดมหึมาขวางทางอยู่",
						"hindi": "बर्फीली गुफा की गहराई में, एक विशालकाय जीव ने रास्ता रोक लिया।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "드디어 만났군, 따뜻함을 아는 자들.",
						"english": "We finally meet, you who know warmth.",
						"japanese": "ようやく会えたな、暖かさを知る者たちよ。",
						"chinese": "终于见面了，懂得温暖之人。",
						"french": "Nous nous rencontrons enfin, vous qui connaissez la chaleur.",
						"spanish": "Por fin nos encontramos, aquellos que conocen el calor.",
						"vietnamese": "Cuối cùng cũng gặp được các ngươi, những kẻ biết hơi ấm.",
						"thai": "ในที่สุดก็ได้พบกัน ผู้ที่รู้จักความอบอุ่น",
						"hindi": "अंततः हम मिले, तुम जो गरमाहट को जानते हो।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "여기서 끝내주마.",
						"english": "I'll end you here.",
						"japanese": "ここで終わらせてやる。",
						"chinese": "就在这里了结你们。",
						"french": "Je vous achèverai ici.",
						"spanish": "Los acabaré aquí.",
						"vietnamese": "Ta sẽ kết liễu các ngươi tại đây.",
						"thai": "ข้าจะจบพวกเจ้าที่นี่",
						"hindi": "मैं तुम्हें यहीं खत्म कर दूंगा।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "네놈들의 온기… 내게 바쳐라!",
						"english": "Your warmth… Offer it to me!",
						"japanese": "お前たちの温もり… 我に捧げよ！",
						"chinese": "你们的温暖… 献给我！",
						"french": "Votre chaleur… Offrez-la moi !",
						"spanish": "¡Vuestro calor… ofrézcanmelo!",
						"vietnamese": "Hơi ấm của các ngươi… hãy dâng cho ta!",
						"thai": "ความอบอุ่นของพวกเจ้า… จงถวายแก่ข้า!",
						"hindi": "तुम्हारी गरमाहट… मुझे अर्पित करो!"
					},
					"type": "speech"
				},
				{
					"speaker": "character_4",
					"content": {
						"korean": "어림없다!",
						"english": "Never!",
						"japanese": "させるか！",
						"chinese": "休想！",
						"french": "Jamais !",
						"spanish": "¡Imposible!",
						"vietnamese": "Mơ đi!",
						"thai": "ไม่มีทาง!",
						"hindi": "नामुमकिन!"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 산산이 부서졌다. 한기 서린 공간에 잠시 온기가 돌았다.",
						"english": "The colossal shadow shattered. A brief warmth spread through the icy space.",
						"japanese": "巨大な影は粉々に砕け散った。冷気漂う空間に、わずかな温もりが満ちた。",
						"chinese": "巨大的影子碎裂了。冰冷的空间中短暂地弥漫着温暖。",
						"french": "L'ombre colossale se brisa en mille morceaux. Une brève chaleur se répandit dans l'espace glacial.",
						"spanish": "La sombra colosal se hizo pedazos. Una breve calidez se extendió por el gélido espacio.",
						"vietnamese": "Bóng tối khổng lồ vỡ tan tành. Một hơi ấm ngắn ngủi lan tỏa khắp không gian băng giá.",
						"thai": "เงาขนาดมหึมาแตกสลายไป ความอบอุ่นชั่วครู่แผ่ซ่านไปทั่วพื้นที่อันเยือกเย็น",
						"hindi": "विशालकाय छाया बिखर गई। बर्फीले स्थान में क्षण भर के लिए गर्माहट फैल गई।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "(사라지며) …결국, 너희도… 혼자 남을 거야…",
						"english": "(Fading) …Eventually, you too… will be left alone…",
						"japanese": "(消えながら) …結局、お前たちも… 一人残されるだろう…",
						"chinese": "(消失中) ……最终，你们也会……孤身一人……",
						"french": "(Disparaissant) …Finalement, vous aussi… serez laissés seuls…",
						"spanish": "(Desvaneciéndose) …Al final, vosotros también… os quedaréis solos…",
						"vietnamese": "(Tan biến) …Rốt cuộc, các ngươi cũng… sẽ cô độc thôi…",
						"thai": "(เลือนหายไป) …ท้ายที่สุดแล้ว พวกเจ้าก็จะ… เหลือเพียงลำพัง…",
						"hindi": "(लुप्त होते हुए) …आखिरकार, तुम भी… अकेले रह जाओगे…"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "…뭐라고?",
						"english": "…What?",
						"japanese": "…何だと？",
						"chinese": "……什么？",
						"french": "…Quoi ?",
						"spanish": "…¿Qué dices?",
						"vietnamese": "…Cái gì cơ?",
						"thai": "…ว่าอะไรนะ?",
						"hindi": "…क्या कहा?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "쓰러진 보스의 잔해 속, 작은 빛 하나가 희미하게 빛났다.",
						"english": "Amidst the fallen boss's wreckage, a faint light glimmered.",
						"japanese": "倒れたボスの残骸の中、小さな光がかすかに輝いた。",
						"chinese": "在倒下的首领残骸中，一束微弱的光芒若隐若现。",
						"french": "Au milieu des débris du boss vaincu, une faible lumière scintillait.",
						"spanish": "Entre los restos del jefe caído, una pequeña luz brilló débilmente.",
						"vietnamese": "Giữa đống đổ nát của tên trùm đã ngã xuống, một tia sáng nhỏ bé le lói.",
						"thai": "ท่ามกลางซากปรักหักพังของบอสที่ล้มลง แสงน้อยๆ ส่องประกายริบหรี่",
						"hindi": "गिरे हुए बॉस के मलबे के बीच, एक हल्की सी रोशनी टिमटिमा रही थी。"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "그러나 여전히, 눈보라는 멎지 않았다.",
						"english": "Yet, the blizzard raged on.",
						"japanese": "しかし、吹雪は依然として止まなかった。",
						"chinese": "然而，暴风雪依然没有停歇。",
						"french": "Pourtant, le blizzard ne faiblissait pas.",
						"spanish": "Sin embargo, la ventisca no cesaba.",
						"vietnamese": "Tuy nhiên, bão tuyết vẫn không ngừng lại.",
						"thai": "แต่กระนั้น พายุหิมะก็ยังไม่หยุดลง",
						"hindi": "फिर भी, बर्फीला तूफान थमा नहीं था।"
					}
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자의 손아귀에 붙잡혔다. 온기가 모두 빼앗기는 듯했다.",
						"english": "Caught in the giant shadow's grasp. All warmth seemed to drain away.",
						"japanese": "巨大な影の手に捕らえられた。全ての温かさが奪われるようだった。",
						"chinese": "被巨大的影子紧紧抓住。所有的温暖仿佛都被剥夺了。",
						"french": "Pris dans l'étreinte de l'ombre géante. Toute chaleur semblait s'être évanouie.",
						"spanish": "Atrapado en las garras de la sombra gigante. Todo el calor parecía desvanecerse.",
						"vietnamese": "Bị tóm gọn trong bàn tay của bóng tối khổng lồ. Mọi hơi ấm dường như bị hút cạn.",
						"thai": "ถูกจับไว้ในเงื้อมมือของเงามืดขนาดยักษ์ ความอบอุ่นทั้งหมดดูเหมือนจะถูกพรากไป",
						"hindi": "विशालकाय परछाई की पकड़ में आ गया। सारी गर्मी छिनती जा रही थी।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "이 차가움 속에서… 영원히 얼어붙어라.",
						"english": "In this chill... freeze forever.",
						"japanese": "この冷たさの中で…永遠に凍りつけ。",
						"chinese": "在这寒冷中……永远冻结吧。",
						"french": "Dans ce froid... gèle à jamais.",
						"spanish": "En este frío... congélate para siempre.",
						"vietnamese": "Trong cái lạnh này… hãy đóng băng vĩnh viễn.",
						"thai": "จงแข็งตายไปตลอดกาล… ในความหนาวเหน็บนี้",
						"hindi": "इस ठंड में... हमेशा के लिए जम जाओ।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "(이를 악물며) 아직… 끝나지 않았어!",
						"english": "(Gritting teeth) It's not... over yet!",
						"japanese": "（歯を食いしばりながら）まだ…終わってない！",
						"chinese": "（咬紧牙关）还没……结束！",
						"french": "(Serre les dents) Ce n'est pas... encore fini !",
						"spanish": "(Apretando los dientes) ¡Aún no... ha terminado!",
						"vietnamese": "(Nghiến răng) Vẫn chưa… kết thúc đâu!",
						"thai": "(กัดฟัน) ยัง…ไม่จบ!",
						"hindi": "(दांत पीसते हुए) अभी... खत्म नहीं हुआ है!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "(비웃듯) 흥. 다음에는, 그 작은 온기마저 빼앗아주마.",
						"english": "(Scoffs) Heh. Next time, I'll even steal that tiny warmth from you.",
						"japanese": "（嘲笑うように）フン。次は、その小さな温もりさえ奪ってやる。",
						"chinese": "（嗤笑）哼。下次，我连那一点点温暖都要夺走。",
						"french": "(Ricane) Heh. La prochaine fois, je t'arracherai même cette petite étincelle de chaleur.",
						"spanish": "(Se burla) Hmph. La próxima vez, te quitaré hasta esa pequeña chispa de calor.",
						"vietnamese": "(Cười khẩy) Hừ. Lần tới, ta sẽ cướp đi cả chút hơi ấm nhỏ bé đó của ngươi.",
						"thai": "(หัวเราะเยาะ) หึ คราวหน้า ข้าจะพรากแม้แต่ความอบอุ่นเพียงน้อยนิดนั้นไปจากเจ้า",
						"hindi": "(हंसते हुए) हंह। अगली बार, मैं तुम्हारी वह छोटी सी गरमाहट भी छीन लूंगा।"
					},
					"emotion": "base"
				}
			],
			"id": 15
		}
	]
} as const;
