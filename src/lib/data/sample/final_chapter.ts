export const final_multiLanguage_data = {
	chapter_order: 1,
	chapter_name: {
		"korean": "거짓된 구원자",
		"english": "A False Savior",
		"japanese": "偽りの救世主",
		"chinese": "虚假的救世主",
		"spanish": "Un falso salvador",
		"french": "Un faux sauveur",
		"vietnamese": "Vị cứu tinh giả dối",
		"hindi": "एक झूठा उद्धारकर्ता",
		"thai": "ผู้กอบกู้จอมปลอม"
	},
	scenarios: [
	{
		scenario_id: 'forest_scenario_01_intro',
		chapter_order: 1,
		order: 1,
		act: 'intro',
		theme: 'forest',
		actors: {
			lumina: {
				id: 'mon_7b56ecc3-abc6-4aa9-a0aa-ed83ce4627e7',
				name: {
					korean: '루미나',
					english: 'Lumina',
					japanese: 'ルミナ',
					chinese: '露米娜',
					french: 'Lumina',
					spanish: 'Lumina',
					vietnamese: 'Lumina',
					thai: 'ลูมินา',
					hindi: 'लुमिना'
				},
				description: 'A Forest Fairy with yellow hair, she looks young',
				face_image_url:
					'https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0a91acfe-f485-4fd9-4d9c-a6b1dd604200/public',
				battle_sprite_url:
					'https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/090c84cb-bcc2-4dec-a8cf-6ba8538b9700/public'
			},
			kain: {
				id: 'mon_7ad0c0cb-55c6-4422-8393-c1a2eaf5817b',
				name: {
					korean: '카인',
					english: 'Kain',
					japanese: 'カイン',
					chinese: '凯恩',
					french: 'Kaïn',
					spanish: 'Kain',
					vietnamese: 'Kain',
					thai: 'เคน',
					hindi: 'केन'
				},
				description: '',
				face_image_url:
					'https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2fb1b07a-14de-4ca0-c18b-a422d72e0000/public',
				battle_sprite_url:
					'https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f251a138-bf06-4848-f050-bd6f5cfbde00/public'
			}
		},
		prologue: {
			korean: [
				'한때 평화롭던 숲 외곽 마을, 리엔.',
				'포자 존재들은 늘 숲 안쪽에 머물렀고, 인간의 영역을 침범하지 않았다.',
				'그러나 어느 날 밤 — 경고도 없이, 이유도 없이.',
				'마을 전체가 하룻밤 사이에 사라졌다.',
				'살아남은 자는 단 하나. 그리고 복수가 시작된다.'
			],
			english: [
				'Once a peaceful village on the outskirts of the forest, Rien.',
				'The spore beings always stayed deep within the forest and never invaded human territory.',
				'But one night — without warning, without reason.',
				'The entire village vanished overnight.',
				'Only one survived. And thus, the revenge begins.'
			],
			japanese: [
				'かつて平和だった森の外れの村、リエン。',
				'胞子の存在は常に森の奥に留まり、人間の領域を侵さなかった。',
				'しかしある夜——警告も理由もなく。',
				'村全体が一晩で消えた。',
				'生き残ったのは一人。そして復讐が始まる。'
			],
			chinese: [
				'曾经位于森林边缘的宁静村庄，里恩。',
				'孢子生物一直栖息在森林深处，从未侵入人类的领地。',
				'然而某个夜晚——没有预兆，也没有理由。',
				'整个村庄在一夜之间消失了。',
				'只剩下一人幸存，复仇由此开始。'
			],
			french: [
				'Autrefois, un village paisible à la lisière de la forêt, Rien.',
				'Les créatures de spores restaient toujours au cœur de la forêt et n’envahissaient jamais le territoire humain.',
				'Mais une nuit — sans avertissement, sans raison.',
				'Le village entier disparut en une nuit.',
				'Un seul survivant. Et la vengeance commence.'
			],
			spanish: [
				'Érase una vez un pueblo pacífico en las afueras del bosque, Rien.',
				'Las criaturas de esporas permanecían en lo profundo del bosque y nunca invadían el territorio humano.',
				'Pero una noche — sin aviso, sin razón.',
				'El pueblo entero desapareció en una sola noche.',
				'Solo uno sobrevivió. Y así comienza la venganza.'
			],
			vietnamese: [
				'Ngày xưa, một ngôi làng yên bình ở rìa khu rừng, Rien.',
				'Sinh vật bào tử luôn ở sâu trong rừng và không xâm phạm lãnh thổ con người.',
				'Nhưng một đêm nọ — không cảnh báo, không lý do.',
				'Cả ngôi làng biến mất chỉ trong một đêm.',
				'Chỉ còn một người sống sót. Và cuộc báo thù bắt đầu.'
			],
			thai: [
				'ครั้งหนึ่งเคยเป็นหมู่บ้านอันสงบสุขบริเวณชายป่า ริเอน',
				'สิ่งมีชีวิตจากสปอร์อาศัยอยู่ลึกในป่าและไม่เคยรุกล้ำอาณาเขตของมนุษย์',
				'แต่คืนหนึ่ง — ไม่มีสัญญาณเตือน ไม่มีเหตุผล',
				'หมู่บ้านทั้งแห่งหายไปในคืนเดียว',
				'เหลือผู้รอดชีวิตเพียงคนเดียว และการล้างแค้นได้เริ่มต้นขึ้น'
			],
			hindi: [
				'कभी जंगल के किनारे बसा एक शांत गाँव, रिएन।',
				'बीजाणु जीव हमेशा जंगल के भीतर रहते थे और मानव क्षेत्र में कभी प्रवेश नहीं करते थे।',
				'लेकिन एक रात — बिना चेतावनी, बिना कारण।',
				'पूरा गाँव एक ही रात में गायब हो गया।',
				'सिर्फ एक जीवित बचा। और प्रतिशोध की शुरुआत हुई।'
			]
		},
		rooms: [
			{
				id: 1,
				dialogue: [
					{
						type: 'speech',
						speaker: 'narrator',
						content: {
							korean:
								'눈을 떴을 때, 익숙한 냄새가 없었다. 나무 타는 연기도, 아침 밥 짓는 소리도. 오직 재와 침묵만이 남아 있었다.',
							english:
								'When I opened my eyes, the familiar scent was gone. No smoke from burning wood, no sound of breakfast. Only ash and silence remained.',
							japanese:
								'目を開けた時、馴染みの匂いはなかった。薪の煙も、朝食の音も。ただ灰と沈黙だけが残っていた。',
							chinese:
								'睁开眼时，熟悉的气味消失了。没有柴火的烟，也没有做早饭的声音。只剩下灰烬与沉默。',
							french:
								"Quand j'ai ouvert les yeux, l'odeur familière avait disparu. Ni fumée de bois, ni bruit de petit-déjeuner. Il ne restait que des cendres et le silence.",
							spanish:
								'Cuando abrí los ojos, el olor familiar había desaparecido. Ni humo de leña ni sonido del desayuno. Solo quedaban cenizas y silencio.',
							vietnamese:
								'Khi tôi mở mắt, mùi quen thuộc đã biến mất. Không còn khói củi hay tiếng nấu ăn. Chỉ còn tro tàn và sự im lặng.',
							thai: 'เมื่อฉันลืมตาขึ้น กลิ่นที่คุ้นเคยก็หายไป ไม่มีควันไฟหรือเสียงทำอาหาร เหลือเพียงเถ้าถ่านและความเงียบ',
							hindi:
								'जब मैंने आँखें खोलीं, जानी-पहचानी खुशबू गायब थी। न लकड़ी जलने का धुआं, न खाने की आवाज। केवल राख और सन्नाटा बचा था।'
						},
						emotion: 'base'
					},
					{
						type: 'speech',
						speaker: 'character_any',
						content: {
							korean: '엄마! 아버지! 어디 계세요?',
							english: 'Mom! Dad! Where are you?',
							japanese: 'お母さん！お父さん！どこにいるの？',
							chinese: '妈妈！爸爸！你们在哪？',
							french: 'Maman ! Papa ! Où êtes-vous ?',
							spanish: '¡Mamá! ¡Papá! ¿Dónde están?',
							vietnamese: 'Mẹ! Bố! Hai người ở đâu?',
							thai: 'แม่! พ่อ! อยู่ที่ไหน?',
							hindi: 'माँ! पिताजी! आप कहाँ हैं?'
						},
						emotion: 'sad'
					}
				]
			},

			{
				id: 3,
				dialogue: [
					{
						type: 'direction',
						action: 'enter',
						speaker: 'lumina',
						duration_ms: 500,
						spot: [2, 3]
					},
					{
						type: 'speech',
						speaker: 'lumina',
						content: {
							korean: '살아있어! 나만 살아남은 줄 알았어!',
							english: "You're alive! I thought I was the only one!",
							japanese: '生きてる！私だけかと思った！',
							chinese: '你还活着！我以为只有我一个人！',
							french: 'Tu es vivant ! Je pensais être la seule !',
							spanish: '¡Estás vivo! ¡Pensé que era la única!',
							vietnamese: 'Bạn còn sống! Tôi tưởng chỉ còn mình tôi!',
							thai: 'เธอยังมีชีวิตอยู่! ฉันคิดว่ารอดคนเดียวแล้ว!',
							hindi: 'तुम जिंदा हो! मुझे लगा मैं ही अकेली बची हूँ!'
						},
						emotion: 'happy'
					}
				]
			},

			{
				id: 5,
				dialogue: [
					{
						type: 'speech',
						speaker: 'narrator',
						content: {
							korean: '포자들은 주인공을 그냥 지나쳤다.',
							english: 'The spores simply passed by the protagonist.',
							japanese: '胞子は主人公を素通りした。',
							chinese: '孢子从主角身边经过。',
							french: 'Les spores ont ignoré le protagoniste.',
							spanish: 'Las esporas ignoraron al protagonista.',
							vietnamese: 'Bào tử bỏ qua nhân vật chính.',
							thai: 'สปอร์เดินผ่านตัวเอกไปเฉยๆ',
							hindi: 'बीजाणु नायक को नज़रअंदाज़ कर गए।'
						},
						emotion: 'base'
					}
				]
			},

			{
				id: 9,
				dialogue: [
					{
						type: 'speech',
						speaker: 'kain',
						content: {
							korean: '살아있었군. 대단해.',
							english: "You're alive. Impressive.",
							japanese: '生きていたか。大したものだ。',
							chinese: '你还活着，了不起。',
							french: 'Tu es en vie. Impressionnant.',
							spanish: 'Estás vivo. Impresionante.',
							vietnamese: 'Cậu vẫn sống. Ấn tượng đấy.',
							thai: 'ยังมีชีวิตอยู่สินะ น่าทึ่งจริงๆ',
							hindi: 'तुम जिंदा हो। कमाल है।'
						},
						emotion: 'base'
					}
				]
			},

			{
				id: 15,
				dialogue: [
					{
						type: 'speech',
						speaker: 'ancient_treant',
						content: {
							korean: '…침입자. 숲이 너희를 거부한다.',
							english: '…Intruders. The forest rejects you.',
							japanese: '…侵入者。森はお前たちを拒む。',
							chinese: '……入侵者，森林拒绝你们。',
							french: '…Intrus. La forêt vous rejette.',
							spanish: '…Intrusos. El bosque los rechaza.',
							vietnamese: '…Kẻ xâm nhập. Khu rừng từ chối các ngươi.',
							thai: '…ผู้บุกรุก ป่าปฏิเสธพวกเจ้า',
							hindi: '…घुसपैठियों। जंगल तुम्हें अस्वीकार करता है।'
						},
						emotion: 'angry'
					}
				]
			}
		]
	},
	{
		scenario_id: 'forest_scenario_02_rising1',
		chapter_order: 1,
		order: 2,
		act: 'rising',
		theme: 'forest',
		actors: {
			lyra_meadowsong: {
				id: 'mon_c57af7f0-7c43-4883-8bbb-b99a24a34620',
				name: {
					korean: '리라',
					english: 'Lyra',
					japanese: 'リラ',
					chinese: '莉拉',
					french: 'Lyra',
					spanish: 'Lyra',
					vietnamese: 'Lyra',
					thai: 'ไลรา',
					hindi: 'लायरा'
				},
				description: 'A Forest Fairy with green hair',
				face_image_url:
					'https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/c4d279a3-d82c-4045-36cc-62cc22e47f00/public',
				battle_sprite_url:
					'https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/204d63b0-dcf0-437a-0622-ab32c3fe8900/public'
			},
			kain: {
				id: 'mon_7ad0c0cb-55c6-4422-8393-c1a2eaf5817b',
				name: {
					korean: '카인',
					english: 'Kain',
					japanese: 'カイン',
					chinese: '凯恩',
					french: 'Kaïn',
					spanish: 'Kain',
					vietnamese: 'Kain',
					thai: 'เคน',
					hindi: 'केन'
				},
				description: '',
				face_image_url:
					'https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2fb1b07a-14de-4ca0-c18b-a422d72e0000/public',
				battle_sprite_url:
					'https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f251a138-bf06-4848-f050-bd6f5cfbde00/public'
			}
		},
		prologue: {
			korean: [
				'수호대에 입대한 지 사흘째.',
				'카인은 첫 임무를 내렸다 — 숲 외곽 포자 군체 처치.',
				'단순한 임무처럼 보였다.',
				'그러나 숲은, 처음부터 무언가를 숨기고 있었다.'
			],
			english: [
				'It has been three days since joining the Guardians.',
				'Kain assigned the first mission — eliminate the spore colony at the forest’s edge.',
				'It seemed like a simple task.',
				'But the forest had been hiding something from the very beginning.'
			],
			japanese: [
				'守護隊に入隊して三日目。',
				'カインは最初の任務を与えた――森の外れの胞子群を討伐せよ。',
				'単純な任務に見えた。',
				'しかし森は、最初から何かを隠していた。'
			],
			chinese: [
				'加入守护队已经第三天了。',
				'凯恩下达了第一个任务——清除森林边缘的孢子群体。',
				'看起来只是个简单的任务。',
				'然而森林从一开始就隐藏着什么。'
			],
			french: [
				'Troisième jour depuis mon entrée dans la Garde.',
				'Kain a donné la première mission — éliminer la colonie de spores à la lisière de la forêt.',
				'Cela semblait être une mission simple.',
				'Mais la forêt cachait quelque chose depuis le début.'
			],
			spanish: [
				'Han pasado tres días desde que me uní a la Guardia.',
				'Kain asignó la primera misión: eliminar la colonia de esporas en el borde del bosque.',
				'Parecía una tarea sencilla.',
				'Pero el bosque había estado ocultando algo desde el principio.'
			],
			vietnamese: [
				'Đã ba ngày kể từ khi gia nhập đội bảo vệ.',
				'Kain giao nhiệm vụ đầu tiên — tiêu diệt cụm bào tử ở rìa khu rừng.',
				'Nó có vẻ là một nhiệm vụ đơn giản.',
				'Nhưng khu rừng đã che giấu điều gì đó ngay từ đầu.'
			],
			thai: [
				'ผ่านไปสามวันแล้วตั้งแต่เข้าร่วมหน่วยพิทักษ์',
				'เคนมอบหมายภารกิจแรก — กำจัดกลุ่มสปอร์บริเวณชายป่า',
				'มันดูเหมือนเป็นภารกิจที่ง่าย',
				'แต่ป่ากลับซ่อนบางสิ่งไว้ตั้งแต่แรก'
			],
			hindi: [
				'रक्षक दल में शामिल हुए तीन दिन हो चुके हैं।',
				'कैन ने पहला मिशन दिया — जंगल के किनारे के बीजाणु समूह को समाप्त करो।',
				'यह एक सरल मिशन जैसा लगा।',
				'लेकिन जंगल शुरू से ही कुछ छिपा रहा था।'
			]
		},
		rooms: [
			{
				id: 1,

				dialogue: [
					{
						type: 'direction',
						action: 'enter',
						speaker: 'kain',
						duration_ms: 500,
						spot: [4, 3]
					},
					{
						type: 'speech',
						speaker: 'kain',
						content: {
							korean: '첫 임무야. 숲 외곽 포자 군체 처치.',
							english: 'Your first mission. Eliminate the spore colony at the forest’s edge.',
							japanese: '初任務だ。森の外れの胞子群を討伐しろ。',
							chinese: '这是你的第一个任务。清除森林边缘的孢子群。',
							french:
								'Ta première mission. Éliminer la colonie de spores à la lisière de la forêt.',
							spanish: 'Tu primera misión. Eliminar la colonia de esporas en el borde del bosque.',
							vietnamese: 'Nhiệm vụ đầu tiên của cậu. Tiêu diệt cụm bào tử ở rìa rừng.',
							thai: 'ภารกิจแรกของเธอ กำจัดกลุ่มสปอร์บริเวณชายป่า',
							hindi: 'तुम्हारा पहला मिशन। जंगल के किनारे के बीजाणु समूह को खत्म करो।'
						},
						emotion: 'base'
					},
					{
						type: 'speech',
						speaker: 'character_any',
						content: {
							korean: '같이 안 가?',
							english: 'Aren’t you coming with us?',
							japanese: '一緒に来ないのか？',
							chinese: '你不一起去吗？',
							french: 'Tu ne viens pas avec nous ?',
							spanish: '¿No vienes con nosotros?',
							vietnamese: 'Anh không đi cùng à?',
							thai: 'ไม่ไปด้วยกันเหรอ?',
							hindi: 'तुम साथ नहीं आओगे?'
						},
						emotion: 'base'
					},
					{
						type: 'speech',
						speaker: 'kain',
						content: {
							korean: '너희가 해야 강해져. 뒤에서 본다.',
							english: 'You’ll grow stronger by doing it yourselves. I’ll be watching from behind.',
							japanese: '自分でやってこそ強くなる。後ろから見ている。',
							chinese: '只有你们自己做才能变强。我会在后面看着。',
							french: 'Vous devez le faire vous-mêmes pour devenir plus forts. Je vous observe.',
							spanish: 'Se harán más fuertes haciéndolo ustedes mismos. Observaré desde atrás.',
							vietnamese: 'Các cậu phải tự làm thì mới mạnh lên. Tôi sẽ theo dõi phía sau.',
							thai: 'พวกเธอต้องทำเองถึงจะแข็งแกร่งขึ้น ฉันจะดูอยู่ข้างหลัง',
							hindi: 'तुम खुद करोगे तो मजबूत बनोगे। मैं पीछे से देखूँगा।'
						},
						emotion: 'base'
					},
					{
						type: 'direction',
						action: 'exit',
						speaker: 'kain',
						duration_ms: 400
					}
				]
			},

			{
				id: 3,

				dialogue: [
					{
						type: 'direction',
						action: 'enter',
						speaker: 'lyra_meadowsong',
						duration_ms: 500,
						spot: [2, 3]
					},
					{
						type: 'speech',
						speaker: 'lyra_meadowsong',
						content: {
							korean: '수호대지? 여기서 뭐 하는 거야.',
							english: 'Guardians, huh? What are you doing here?',
							japanese: '守護隊ね？ここで何してるの？',
							chinese: '你们是守护队吧？来这里干什么？',
							french: 'La Garde, hein ? Que faites-vous ici ?',
							spanish: '¿La Guardia, eh? ¿Qué hacen aquí?',
							vietnamese: 'Đội bảo vệ à? Các cậu làm gì ở đây?',
							thai: 'พวกหน่วยพิทักษ์สินะ มาทำอะไรที่นี่?',
							hindi: 'रक्षक दल हो? यहाँ क्या कर रहे हो?'
						},
						emotion: 'angry'
					},
					{
						type: 'speech',
						speaker: 'lyra_meadowsong',
						content: {
							korean: '수호대를 믿지 마. 저들이 숲을 깨우고 있어.',
							english: 'Don’t trust the Guardians. They’re awakening the forest.',
							japanese: '守護隊を信じるな。あいつらが森を目覚めさせている。',
							chinese: '不要相信守护队。他们正在唤醒森林。',
							french: 'Ne fais pas confiance à la Garde. Ils réveillent la forêt.',
							spanish: 'No confíes en la Guardia. Están despertando el bosque.',
							vietnamese: 'Đừng tin đội bảo vệ. Họ đang đánh thức khu rừng.',
							thai: 'อย่าไว้ใจพวกหน่วยพิทักษ์ พวกนั้นกำลังปลุกป่า',
							hindi: 'रक्षक दल पर भरोसा मत करो। वे जंगल को जगा रहे हैं।'
						},
						emotion: 'angry'
					}
				]
			},

			{
				id: 9,

				dialogue: [
					{
						type: 'speech',
						speaker: 'kain',
						content: {
							korean: '잘 하고 있어.',
							english: 'You’re doing well.',
							japanese: 'よくやっている。',
							chinese: '干得不错。',
							french: 'Tu te débrouilles bien.',
							spanish: 'Lo estás haciendo bien.',
							vietnamese: 'Làm tốt lắm.',
							thai: 'ทำได้ดีมาก',
							hindi: 'तुम अच्छा कर रहे हो।'
						},
						emotion: 'happy'
					}
				]
			},

			{
				id: 11,

				dialogue: [
					{
						type: 'speech',
						speaker: 'kain',
						content: {
							korean: '원래 그래. 숲 깊은 곳에 핵이 있으면 바깥으로 퍼지거든.',
							english:
								'That’s how it works. If there’s a core deep in the forest, it spreads outward.',
							japanese: 'そういうものだ。森の奥に核があれば外に広がる。',
							chinese: '本来就是这样。如果核心在森林深处，就会向外扩散。',
							french:
								'C’est normal. S’il y a un noyau au cœur de la forêt, ça se propage vers l’extérieur.',
							spanish:
								'Así funciona. Si hay un núcleo en lo profundo del bosque, se expande hacia afuera.',
							vietnamese: 'Đó là cách nó hoạt động. Nếu có lõi sâu trong rừng, nó sẽ lan ra ngoài.',
							thai: 'มันเป็นแบบนั้น ถ้ามีแกนอยู่ลึกในป่า มันจะกระจายออกมา',
							hindi: 'ऐसा ही होता है। अगर गहराई में कोर है तो बाहर फैलता है।'
						},
						emotion: 'base'
					}
				]
			},

			{
				id: 15,
				dialogue: [
					{
						type: 'speech',
						speaker: 'random_boss',
						content: {
							korean: '인간이 여기까지 왔군. 숲은 너희를 원하지 않는다.',
							english: 'Humans have come this far. The forest does not want you.',
							japanese: '人間がここまで来たか。森はお前たちを望んでいない。',
							chinese: '人类居然来到这里。森林不欢迎你们。',
							french: 'Les humains sont arrivés jusque-là. La forêt ne vous veut pas.',
							spanish: 'Los humanos han llegado hasta aquí. El bosque no los quiere.',
							vietnamese: 'Con người đã đến tận đây. Khu rừng không muốn các ngươi.',
							thai: 'มนุษย์มาถึงที่นี่แล้ว ป่าไม่ต้องการพวกเจ้า',
							hindi: 'मनुष्य यहाँ तक आ गए। जंगल तुम्हें नहीं चाहता।'
						},
						emotion: 'angry'
					}
				]
			}
		]
	},
	{
		scenario_id: 'forest_scenario_03_rising2',
		chapter_order: 1,
		order: 3,
		act: 'rising',
		theme: 'forest',
		actors: {
			lyra_meadowlight: {
				id: 'mon_4a825197-e7a3-49c3-85c7-c8d02c6b544a',
				name: {
					korean: '리라',
					english: 'Lyra',
					japanese: 'リラ',
					chinese: '莉拉',
					french: 'Lyra',
					spanish: 'Lyra',
					vietnamese: 'Lyra',
					thai: 'ไลรา',
					hindi: 'लायरा'
				},
				description: 'A Forest Fairy with blue hair',
				face_image_url:
					'https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/ef0e0271-11f9-4203-95b7-ef4031182d00/public',
				battle_sprite_url:
					'https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0780dbb4-fa82-4b0c-955e-8c9bb1671900/public'
			},
			kain: {
				id: 'mon_7ad0c0cb-55c6-4422-8393-c1a2eaf5817b',
				name: {
					korean: '카인',
					english: 'Kain',
					japanese: 'カイン',
					chinese: '凯恩',
					french: 'Kaïn',
					spanish: 'Kain',
					vietnamese: 'Kain',
					thai: 'เคน',
					hindi: 'केन'
				},
				description: '',
				face_image_url:
					'https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2fb1b07a-14de-4ca0-c18b-a422d72e0000/public',
				battle_sprite_url:
					'https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f251a138-bf06-4848-f050-bd6f5cfbde00/public'
			}
		},
		prologue: {
			korean: [
				'숲이 깊어질수록 어둠도 짙어졌다.',
				'수호대는 더 안쪽으로 전진했다.',
				'그런데 — 하나씩, 소리도 없이 사라지기 시작했다.',
				'그리고 쫓기는 자가 있었다. 카인이 찾고 있는 누군가가.'
			],
			english: [
				'As the forest deepened, so did the darkness.',
				'The Guardians pushed further inward.',
				'But then — one by one, they began to vanish without a sound.',
				'And there was someone being hunted. Someone Kain was searching for.'
			],
			japanese: [
				'森が深くなるほど、闇も濃くなっていった。',
				'守護隊はさらに奥へと進んだ。',
				'だが――一人ずつ、音もなく消え始めた。',
				'そして追われる者がいた。カインが探している何者かが。'
			],
			chinese: [
				'森林越深，黑暗也越发浓重。',
				'守护队继续向更深处推进。',
				'然而——他们开始一个接一个地无声消失。',
				'而且还有一个被追逐的人。一个卡因正在寻找的人。'
			],
			french: [
				"Plus la forêt s'enfonçait, plus l'obscurité s'intensifiait.",
				'La Garde avançait plus profondément.',
				'Mais alors — un par un, ils commencèrent à disparaître sans un bruit.',
				'Et il y avait quelqu’un qui était traqué. Quelqu’un que Kaïn cherchait.'
			],
			spanish: [
				'Cuanto más profundo era el bosque, más densa se volvía la oscuridad.',
				'La Guardia avanzó más hacia el interior.',
				'Pero entonces — uno por uno, comenzaron a desaparecer sin hacer ruido.',
				'Y había alguien siendo perseguido. Alguien que Kain estaba buscando.'
			],
			vietnamese: [
				'Khu rừng càng sâu, bóng tối càng dày đặc.',
				'Đội bảo vệ tiến sâu hơn vào bên trong.',
				'Nhưng rồi — từng người một bắt đầu biến mất không một tiếng động.',
				'Và có một kẻ đang bị truy đuổi. Một người mà Kain đang tìm kiếm.'
			],
			thai: [
				'ยิ่งเข้าไปลึกในป่า ความมืดก็ยิ่งหนาทึบขึ้น',
				'หน่วยพิทักษ์เคลื่อนลึกเข้าไปข้างในมากขึ้น',
				'แต่แล้ว — พวกเขาก็เริ่มหายไปทีละคนโดยไร้เสียง',
				'และมีใครบางคนกำลังถูกไล่ล่า คนที่เคนกำลังตามหาอยู่'
			],
			hindi: [
				'जंगल जितना गहरा होता गया, अंधेरा उतना ही घना होता गया।',
				'रक्षक दल और अंदर की ओर बढ़ता गया।',
				'लेकिन फिर — एक-एक करके, वे बिना किसी आवाज़ के गायब होने लगे।',
				'और कोई था जिसे पीछा किया जा रहा था। कोई जिसे केन खोज रहा था।'
			]
		},
		rooms: [
			{
				id: 1,

				dialogue: [
					{
						type: 'speech',
						speaker: 'narrator',
						content: {
							korean: '숲 안쪽으로 깊이 들어올수록 빛이 사라졌다.',
							english: 'The deeper they went into the forest, the more the light faded.',
							japanese: '森の奥へ進むほど、光は消えていった。',
							chinese: '越往森林深处走，光芒越发消失。',
							french: 'Plus ils s’enfonçaient dans la forêt, plus la lumière disparaissait.',
							spanish: 'Cuanto más se adentraban en el bosque, más desaparecía la luz.',
							vietnamese: 'Càng đi sâu vào rừng, ánh sáng càng biến mất.',
							thai: 'ยิ่งเข้าไปลึกในป่า แสงก็ยิ่งหายไป',
							hindi: 'जंगल में जितना गहराई तक गए, रोशनी उतनी ही गायब होती गई।'
						},
						emotion: 'base'
					},
					{
						type: 'speech',
						speaker: 'character_any',
						content: {
							korean: '…여기서부터 분위기가 다르네.',
							english: '...It feels different from here on.',
							japanese: '…ここから雰囲気が違う。',
							chinese: '……从这里开始感觉不一样了。',
							french: '...L’ambiance est différente à partir d’ici.',
							spanish: '...Desde aquí se siente diferente.',
							vietnamese: '...Từ đây cảm giác khác hẳn.',
							thai: '...ตั้งแต่ตรงนี้ บรรยากาศเปลี่ยนไปเลย',
							hindi: '...यहाँ से माहौल अलग लग रहा है।'
						},
						emotion: 'base'
					}
				]
			},

			{
				id: 3,

				dialogue: [
					{
						type: 'speech',
						speaker: 'narrator',
						content: {
							korean: '길가에 누군가의 짐이 떨어져 있었다. 주인은 보이지 않았다.',
							english:
								'Someone’s belongings lay abandoned by the roadside. Their owner was nowhere to be seen.',
							japanese: '道端に誰かの荷物が落ちていた。持ち主の姿はなかった。',
							chinese: '路边掉落着某人的行李，但主人却不见踪影。',
							french:
								'Des affaires étaient abandonnées au bord du chemin. Leur propriétaire avait disparu.',
							spanish: 'Había pertenencias abandonadas al lado del camino. Su dueño no estaba.',
							vietnamese: 'Đồ đạc của ai đó nằm rơi bên đường. Chủ nhân thì không thấy đâu.',
							thai: 'มีสัมภาระของใครบางคนตกอยู่ข้างทาง แต่ไม่เห็นเจ้าของ',
							hindi: 'सड़क किनारे किसी का सामान पड़ा था। मालिक कहीं दिखाई नहीं दे रहा था।'
						},
						emotion: 'base'
					}
				]
			},

			{
				id: 5,

				dialogue: [
					{
						type: 'speech',
						speaker: 'narrator',
						content: {
							korean: '또 누군가의 짐이 길가에 떨어져 있었다. 이번엔 두 개였다.',
							english: 'More belongings were scattered along the road. This time, there were two.',
							japanese: 'また誰かの荷物が落ちていた。今度は二つだった。',
							chinese: '又有行李散落在路边。这次是两份。',
							french: 'D’autres affaires gisaient au sol. Cette fois, il y en avait deux.',
							spanish: 'Había más pertenencias en el camino. Esta vez eran dos.',
							vietnamese: 'Lại có đồ đạc rơi bên đường. Lần này là hai món.',
							thai: 'มีของตกอยู่อีก คราวนี้เป็นสองชิ้น',
							hindi: 'फिर किसी का सामान पड़ा था। इस बार दो थे।'
						},
						emotion: 'base'
					}
				]
			},

			{
				id: 7,

				dialogue: [
					{
						type: 'speech',
						speaker: 'kain',
						content: {
							korean: '여기 지나간 사람들… 흔적이 없어. 짐만 남았네.',
							english:
								'The people who passed through here... no traces. Only their belongings remain.',
							japanese: 'ここを通った者たち…痕跡がない。荷物だけが残っている。',
							chinese: '经过这里的人……没有留下任何痕迹，只剩下行李。',
							french: 'Les gens qui sont passés ici... aucune trace. Juste leurs affaires.',
							spanish: 'La gente que pasó por aquí... no hay rastro. Solo quedan sus cosas.',
							vietnamese: 'Những người đi qua đây... không để lại dấu vết. Chỉ còn lại đồ đạc.',
							thai: 'คนที่ผ่านที่นี่... ไม่มีร่องรอย เหลือแค่สัมภาระ',
							hindi: 'जो लोग यहाँ से गुजरे... कोई निशान नहीं। बस उनका सामान बचा है।'
						},
						emotion: 'base'
					}
				]
			},

			{
				id: 10,

				dialogue: [
					{
						type: 'speech',
						speaker: 'lyra_meadowlight',
						content: {
							korean: '카인은 포자를 통제하는 방법을 알고 있어.',
							english: 'Kain knows how to control the spores.',
							japanese: 'カインは胞子を制御する方法を知っている。',
							chinese: '卡因知道如何控制孢子。',
							french: 'Kaïn sait contrôler les spores.',
							spanish: 'Kain sabe cómo controlar las esporas.',
							vietnamese: 'Kain biết cách kiểm soát bào tử.',
							thai: 'เคนรู้วิธีควบคุมสปอร์',
							hindi: 'केन को बीजाणुओं को नियंत्रित करना आता है।'
						},
						emotion: 'base'
					}
				]
			},

			{
				id: 14,

				dialogue: [
					{
						type: 'speech',
						speaker: 'lyra_meadowlight',
						content: {
							korean: '리엔 마을. 너희 마을도 카인이 보낸 거야.',
							english: 'Rien village. Your village was sent by Kain too.',
							japanese: 'リエンの村。お前たちの村もカインが仕向けたものだ。',
							chinese: '里恩村。你们的村子也是卡因安排的。',
							french: 'Le village de Rien. Le vôtre aussi, c’est Kaïn qui l’a envoyé.',
							spanish: 'El pueblo de Rien. El suyo también fue obra de Kain.',
							vietnamese: 'Làng Rien. Ngôi làng của cậu cũng do Kain gây ra.',
							thai: 'หมู่บ้านเรียน หมู่บ้านของพวกเธอก็เป็นฝีมือเคน',
							hindi: 'रिएन गाँव। तुम्हारा गाँव भी केन ने ही भेजा था।'
						},
						emotion: 'sad'
					}
				]
			},

			{
				id: 15,

				dialogue: [
					{
						type: 'speech',
						speaker: 'random_boss',
						content: {
							korean: '인간이 여기까지. 카인의 개들이군.',
							english: 'Humans made it this far. Kain’s dogs.',
							japanese: '人間がここまで来たか。カインの犬どもめ。',
							chinese: '人类居然走到这里。卡因的走狗。',
							french: 'Les humains jusque-là. Les chiens de Kaïn.',
							spanish: 'Humanos hasta aquí. Perros de Kain.',
							vietnamese: 'Con người đến tận đây. Lũ chó của Kain.',
							thai: 'มนุษย์มาถึงนี่แล้ว สุนัขของเคน',
							hindi: 'मनुष्य यहाँ तक आ गए। केन के कुत्ते।'
						},
						emotion: 'angry'
					}
				]
			}
		]
	},
	{
		scenario_id: 'forest_scenario_04_rising3',
		chapter_order: 1,
		order: 4,
		act: 'rising',
		theme: 'forest',
		actors: {
			kain: {
				id: 'mon_7ad0c0cb-55c6-4422-8393-c1a2eaf5817b',
				name: {
					korean: '카인',
					english: 'Kain',
					japanese: 'カイン',
					chinese: '凯恩',
					french: 'Kaïn',
					spanish: 'Kain',
					vietnamese: 'Kain',
					thai: 'เคน',
					hindi: 'केन'
				},
				description: '',
				face_image_url:
					'https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2fb1b07a-14de-4ca0-c18b-a422d72e0000/public',
				battle_sprite_url:
					'https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f251a138-bf06-4848-f050-bd6f5cfbde00/public'
			}
		},
		prologue: {
			korean: [
				'이번엔 카인과 단둘이었다.',
				'수호대원도 없고, 요정도 없었다.',
				'그저 카인과 주인공, 그리고 깊어지는 숲.',
				'리라의 말이 계속 머릿속을 맴돌았다.'
			],
			english: [
				'This time, it was just Kain and me.',
				'No Guardians. No fairies.',
				'Just Kain, myself, and the deepening forest.',
				'Lyra’s words kept echoing in my mind.'
			],
			japanese: [
				'今回はカインと二人きりだった。',
				'守護隊もいない、妖精もいない。',
				'ただカインと自分、そして深まっていく森だけ。',
				'リラの言葉がずっと頭の中を巡っていた。'
			],
			chinese: [
				'这一次，只有我和卡因两个人。',
				'没有守护队员，也没有精灵。',
				'只有卡因、我，以及愈发幽深的森林。',
				'莉拉的话不断在脑海中回响。'
			],
			french: [
				'Cette fois, il n’y avait que Kaïn et moi.',
				'Pas de Gardiens. Pas de fées.',
				'Juste Kaïn, moi, et la forêt qui s’enfonçait toujours plus.',
				'Les paroles de Lyra continuaient de résonner dans mon esprit.'
			],
			spanish: [
				'Esta vez, solo estábamos Kain y yo.',
				'Sin Guardianes. Sin hadas.',
				'Solo Kain, yo y el bosque que se volvía más profundo.',
				'Las palabras de Lyra seguían resonando en mi mente.'
			],
			vietnamese: [
				'Lần này, chỉ có tôi và Kain.',
				'Không có đội bảo vệ. Không có tiên.',
				'Chỉ có Kain, tôi và khu rừng ngày càng sâu.',
				'Lời của Lyra cứ vang vọng trong đầu tôi.'
			],
			thai: [
				'ครั้งนี้มีแค่ฉันกับเคน',
				'ไม่มีหน่วยพิทักษ์ ไม่มีภูต',
				'มีแค่เคน ฉัน และป่าที่ลึกขึ้นเรื่อย ๆ',
				'คำพูดของไลรายังคงวนเวียนอยู่ในหัว'
			],
			hindi: [
				'इस बार सिर्फ मैं और केन थे।',
				'न कोई रक्षक दल, न कोई परियाँ।',
				'बस केन, मैं और गहराता हुआ जंगल।',
				'लायरा की बातें बार-बार मेरे दिमाग में गूंज रही थीं।'
			]
		},
		rooms: [
			{
				id: 1,

				dialogue: [
					{
						type: 'direction',
						action: 'enter',
						speaker: 'kain',
						duration_ms: 500,
						spot: [4, 3]
					},
					{
						type: 'speech',
						speaker: 'kain',
						content: {
							korean: '이번엔 나랑 둘이야. 깊이 들어갈수록 위험하거든.',
							english:
								"This time, it's just you and me. The deeper we go, the more dangerous it gets.",
							japanese: '今回は俺と二人だ。奥に進むほど危険になる。',
							chinese: '这次只有你和我。越往深处走越危险。',
							french:
								"Cette fois, c'est juste toi et moi. Plus on s'enfonce, plus c'est dangereux.",
							spanish:
								'Esta vez somos solo tú y yo. Cuanto más profundo vamos, más peligroso se vuelve.',
							vietnamese: 'Lần này chỉ có tôi và cậu. Càng vào sâu càng nguy hiểm.',
							thai: 'ครั้งนี้มีแค่ฉันกับนาย ยิ่งเข้าไปลึกยิ่งอันตราย',
							hindi: 'इस बार सिर्फ हम दोनों हैं। जितना गहराई में जाएंगे, उतना खतरा बढ़ेगा।'
						},
						emotion: 'base'
					},
					{
						type: 'speech',
						speaker: 'character_any',
						content: {
							korean: '알겠어.',
							english: 'Got it.',
							japanese: 'わかった。',
							chinese: '知道了。',
							french: "D'accord.",
							spanish: 'Entendido.',
							vietnamese: 'Hiểu rồi.',
							thai: 'เข้าใจแล้ว',
							hindi: 'समझ गया।'
						},
						emotion: 'base'
					},
					{
						type: 'speech',
						speaker: 'kain',
						content: {
							korean: '많이 강해졌어. 처음 봤을 때랑 다르네.',
							english: "You've gotten a lot stronger. You're not the same as when I first saw you.",
							japanese: 'ずいぶん強くなったな。初めて会った時とは違う。',
							chinese: '你变强了不少。和第一次见的时候不一样了。',
							french: "Tu es devenu beaucoup plus fort. Tu n'es plus le même qu'au début.",
							spanish: 'Te has vuelto mucho más fuerte. No eres el mismo de antes.',
							vietnamese: 'Cậu mạnh lên nhiều rồi. Không còn giống lúc mới gặp nữa.',
							thai: 'นายแข็งแกร่งขึ้นมาก ไม่เหมือนตอนที่เจอกันครั้งแรก',
							hindi: 'तुम बहुत मजबूत हो गए हो। पहली बार जैसा नहीं रहे।'
						},
						emotion: 'happy'
					}
				]
			},
			{
				id: 2
			},
			{
				id: 3,

				dialogue: [
					{
						type: 'speech',
						speaker: 'character_any',
						content: {
							korean: '이거 늑대 발자국이야? 크기가 비정상이네.',
							english: "Are these wolf tracks? They're unusually large.",
							japanese: 'これ、狼の足跡？大きさが異常だ。',
							chinese: '这是狼的脚印吗？尺寸不太正常。',
							french: 'Ce sont des traces de loup ? Elles sont anormalement grandes.',
							spanish: '¿Son huellas de lobo? Son demasiado grandes.',
							vietnamese: 'Đây là dấu chân sói sao? Kích thước bất thường.',
							thai: 'นี่รอยเท้าหมาป่าเหรอ ใหญ่ผิดปกติเลย',
							hindi: 'क्या ये भेड़िये के पंजों के निशान हैं? आकार अजीब है।'
						},
						emotion: 'base'
					},
					{
						type: 'direction',
						action: 'enter',
						speaker: 'kain',
						duration_ms: 400,
						spot: [4, 3]
					},
					{
						type: 'speech',
						speaker: 'kain',
						content: {
							korean: '숲이 깊을수록 존재들도 커져. 조심해.',
							english: 'The deeper the forest, the larger the creatures. Be careful.',
							japanese: '森が深くなるほど存在も大きくなる。気をつけろ。',
							chinese: '森林越深，生物越巨大。小心点。',
							french:
								'Plus la forêt est profonde, plus les créatures sont grandes. Fais attention.',
							spanish:
								'Cuanto más profundo es el bosque, más grandes son las criaturas. Ten cuidado.',
							vietnamese: 'Càng vào sâu, sinh vật càng lớn. Cẩn thận.',
							thai: 'ยิ่งป่าลึก สิ่งมีชีวิตยิ่งตัวใหญ่ ระวังตัวด้วย',
							hindi: 'जंगल जितना गहरा, जीव उतने बड़े होते हैं। सावधान रहो।'
						},
						emotion: 'base'
					},
					{
						type: 'direction',
						action: 'exit',
						speaker: 'kain',
						duration_ms: 400
					}
				]
			}
		]
	},
	{
		scenario_id: 'forest_scenario_05_finale',
		chapter_order: 1,
		order: 5,
		act: 'climax_finale',
		theme: 'forest',
		actors: {
			elara: {
				id: 'mon_05460632-579a-4511-848a-be8b7428872a',
				name: {
					korean: '엘라라',
					english: 'Elara',
					japanese: 'エラーラ',
					chinese: '艾拉拉',
					french: 'Élara',
					spanish: 'Elara',
					vietnamese: 'Elara',
					thai: 'เอลารา',
					hindi: 'एलारा'
				},
				description: 'A Forest Fairy with white hair',
				face_image_url:
					'https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/6396e07e-dcdf-4ea7-a5bc-18fc03c6cb00/public',
				battle_sprite_url:
					'https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/b0e157fa-833e-4dee-5ec0-aa8736f01900/public'
			},
			kain: {
				id: 'mon_7ad0c0cb-55c6-4422-8393-c1a2eaf5817b',
				name: {
					korean: '카인',
					english: 'Kain',
					japanese: 'カイン',
					chinese: '凯恩',
					french: 'Kaïn',
					spanish: 'Kain',
					vietnamese: 'Kain',
					thai: 'เคน',
					hindi: 'केन'
				},
				description: '',
				face_image_url:
					'https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2fb1b07a-14de-4ca0-c18b-a422d72e0000/public',
				battle_sprite_url:
					'https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f251a138-bf06-4848-f050-bd6f5cfbde00/public'
			}
		},
		prologue: {
			korean: [
				'세계수. 이 숲의 뿌리이자 심장.',
				'카인은 마지막 임무라고 했다.',
				'그러나 숲의 가장 깊은 곳에는 — 모든 것을 아는 자가 기다리고 있었다.',
				'그리고 진실은, 예상보다 훨씬 잔인했다.'
			],
			english: [
				'The World Tree. The root and heart of this forest.',
				'Kain said this would be the final mission.',
				'But in the deepest part of the forest — someone who knew everything was waiting.',
				'And the truth was far more cruel than expected.'
			],
			japanese: [
				'世界樹。この森の根であり心臓。',
				'カインはこれが最後の任務だと言った。',
				'しかし森の最も深い場所には——すべてを知る者が待っていた。',
				'そして真実は、想像よりもはるかに残酷だった。'
			],
			chinese: [
				'世界树。这片森林的根与心脏。',
				'凯恩说这是最后的任务。',
				'然而在森林最深处——有一个知晓一切的存在在等待。',
				'而真相，比预想的更加残酷。'
			],
			french: [
				"L'Arbre-Monde. La racine et le cœur de cette forêt.",
				'Kain a dit que ce serait la dernière mission.',
				"Mais au plus profond de la forêt — quelqu'un qui savait tout attendait.",
				'Et la vérité était bien plus cruelle que prévu.'
			],
			spanish: [
				'El Árbol del Mundo. La raíz y el corazón de este bosque.',
				'Kain dijo que esta sería la última misión.',
				'Pero en lo más profundo del bosque — alguien que lo sabía todo estaba esperando.',
				'Y la verdad fue mucho más cruel de lo esperado.'
			],
			vietnamese: [
				'Cây Thế Giới. Gốc rễ và trái tim của khu rừng này.',
				'Kain nói đây sẽ là nhiệm vụ cuối cùng.',
				'Nhưng ở nơi sâu nhất của khu rừng — có một kẻ biết tất cả đang chờ đợi.',
				'Và sự thật tàn nhẫn hơn nhiều so với dự đoán.'
			],
			thai: [
				'ต้นไม้โลก รากและหัวใจของป่าแห่งนี้',
				'เคนบอกว่านี่คือภารกิจสุดท้าย',
				'แต่ในส่วนที่ลึกที่สุดของป่า — มีบางคนที่รู้ทุกอย่างกำลังรออยู่',
				'และความจริงโหดร้ายยิ่งกว่าที่คาดไว้มาก'
			],
			hindi: [
				'विश्व वृक्ष। इस जंगल की जड़ और हृदय।',
				'केन ने कहा यह अंतिम मिशन होगा।',
				'लेकिन जंगल की सबसे गहराई में — कोई ऐसा इंतज़ार कर रहा था जो सब कुछ जानता था।',
				'और सच्चाई उम्मीद से कहीं ज्यादा क्रूर थी।'
			]
		},
		epilogue: {
			korean: [
				'세계수의 각성이 멈추자, 숲은 오랫동안 잊었던 침묵을 되찾았다.',
				'카인은 잡히지 않았다. 어둠 속으로 사라진 그의 뒷모습만 남았다.',
				'리엔 마을은 돌아오지 않았다. 잠식된 것들은 되돌릴 수 없었다.',
				'그래도 — 숲에 비가 내렸다. 오랫동안 잊혀진 소리였다.',
				'그 이후로, 카인을 본 사람은 아무도 없었다.'
			],
			english: [
				'As the awakening of the World Tree ceased, the forest regained a long-forgotten silence.',
				'Kain was never captured. Only his fading silhouette into the darkness remained.',
				'The village of Rien never returned. What was consumed could not be restored.',
				'Still — rain fell upon the forest. A sound long forgotten.',
				'Since then, no one has ever seen Kain again.'
			],
			japanese: [
				'世界樹の覚醒が止まると、森は長く忘れていた静寂を取り戻した。',
				'カインは捕まらなかった。闇へ消えていく背中だけが残った。',
				'リエンの村は戻らなかった。侵食されたものは取り戻せなかった。',
				'それでも——森には雨が降った。長く忘れられていた音だった。',
				'それ以来、カインを見た者はいない。'
			],
			chinese: [
				'当世界树的觉醒停止时，森林重新找回了久违的寂静。',
				'凯恩没有被抓住。只留下他消失在黑暗中的背影。',
				'利恩村没有回来。被侵蚀的一切无法复原。',
				'即便如此——雨仍然落在森林中，那是久违的声音。',
				'从那以后，再也没有人见过凯恩。'
			],
			french: [
				"Lorsque l'éveil de l'Arbre-Monde cessa, la forêt retrouva un silence oublié depuis longtemps.",
				"Kain ne fut jamais capturé. Seule son ombre disparaissant dans l'obscurité resta.",
				'Le village de Rien ne revint jamais. Ce qui fut consumé ne pouvait être restauré.',
				'Pourtant — la pluie tomba sur la forêt. Un son oublié depuis longtemps.',
				"Depuis ce jour, personne n'a jamais revu Kain."
			],
			spanish: [
				'Cuando el despertar del Árbol del Mundo se detuvo, el bosque recuperó un silencio olvidado.',
				'Kain nunca fue capturado. Solo quedó su silueta desapareciendo en la oscuridad.',
				'La aldea de Rien nunca regresó. Lo que fue consumido no pudo restaurarse.',
				'Aun así — la lluvia cayó sobre el bosque. Un sonido olvidado hace mucho.',
				'Desde entonces, nadie ha vuelto a ver a Kain.'
			],
			vietnamese: [
				'Khi sự thức tỉnh của Cây Thế Giới dừng lại, khu rừng lấy lại sự tĩnh lặng đã bị lãng quên từ lâu.',
				'Kain không bị bắt. Chỉ còn lại bóng lưng biến mất vào bóng tối.',
				'Ngôi làng Rien không trở lại. Những gì bị xâm thực không thể khôi phục.',
				'Dù vậy — mưa vẫn rơi xuống khu rừng. Một âm thanh đã bị lãng quên từ lâu.',
				'Từ đó về sau, không ai còn nhìn thấy Kain nữa.'
			],
			thai: [
				'เมื่อการตื่นขึ้นของต้นไม้โลกหยุดลง ป่าก็กลับคืนสู่ความเงียบที่ถูกลืมเลือน',
				'เคนไม่ถูกจับ มีเพียงเงาหลังของเขาที่หายไปในความมืด',
				'หมู่บ้านริเอนไม่เคยกลับมา สิ่งที่ถูกกลืนกินไม่อาจฟื้นคืนได้',
				'ถึงอย่างนั้น — ฝนก็ตกลงมาในป่า เสียงที่ถูกลืมเลือนไปนาน',
				'ตั้งแต่นั้นมา ไม่มีใครได้เห็นเคนอีกเลย'
			],
			hindi: [
				'जब विश्व वृक्ष का जागरण रुक गया, जंगल ने अपनी भूली हुई शांति वापस पा ली।',
				'केन कभी पकड़ा नहीं गया। बस उसका अंधेरे में खोता हुआ साया रह गया।',
				'रिएन गाँव वापस नहीं आया। जो निगल लिया गया था, उसे लौटाया नहीं जा सका।',
				'फिर भी — जंगल में बारिश हुई। एक ध्वनि जिसे लंबे समय से भुला दिया गया था।',
				'उसके बाद, किसी ने भी केन को फिर कभी नहीं देखा।'
			]
		},
		rooms: [
			{
				id: 1,

				dialogue: [
					{
						type: 'speech',
						speaker: 'narrator',
						content: {
							korean: '거대한 나무가 하늘을 가렸다. 뿌리 하나하나가 마을만 했다.',
							english: 'A massive tree covered the sky. Each root was as large as a village.',
							japanese: '巨大な木が空を覆っていた。一本一本の根が村ほどの大きさだった。',
							chinese: '巨大的树遮蔽了天空。每一条根都如同一座村庄般巨大。',
							spanish:
								'Un árbol gigantesco cubría el cielo. Cada raíz era tan grande como un pueblo.',
							french:
								'Un arbre gigantesque couvrait le ciel. Chaque racine était aussi grande qu’un village.',
							vietnamese: 'Một cái cây khổng lồ che kín bầu trời. Mỗi rễ cây to như một ngôi làng.',
							hindi: 'एक विशाल पेड़ ने आसमान को ढक लिया था। उसकी हर जड़ एक गाँव जितनी बड़ी थी।',
							thai: 'ต้นไม้ขนาดมหึมาปกคลุมท้องฟ้า รากแต่ละเส้นใหญ่เท่าหมู่บ้าน'
						},
						emotion: 'base'
					},
					{
						type: 'speech',
						speaker: 'character_any',
						content: {
							korean: '이게 세계수야?',
							english: 'Is this the World Tree?',
							japanese: 'これが世界樹なの？',
							chinese: '这就是世界树吗？',
							spanish: '¿Este es el Árbol del Mundo?',
							french: 'C’est l’Arbre-Monde ?',
							vietnamese: 'Đây là Cây Thế Giới sao?',
							hindi: 'क्या यह विश्व वृक्ष है?',
							thai: 'นี่คือต้นไม้โลกเหรอ?'
						},
						emotion: 'base'
					},
					{
						type: 'speech',
						speaker: 'kain',
						content: {
							korean: '그래. 이 안에 포자의 근원이 있어. 여길 끝내면 전부 끝나.',
							english: 'Yes. The source of the spores is inside. If we end this, everything ends.',
							japanese: 'そうだ。この中に胞子の根源がある。ここを終わらせればすべて終わる。',
							chinese: '没错。孢子的源头就在里面。只要结束这里，一切就结束了。',
							spanish:
								'Sí. La fuente de las esporas está dentro. Si acabamos con esto, todo terminará.',
							french:
								'Oui. La source des spores est à l’intérieur. Si on met fin à ça, tout s’arrête.',
							vietnamese:
								'Đúng. Nguồn gốc của bào tử ở bên trong. Kết thúc nơi này là mọi thứ kết thúc.',
							hindi: 'हाँ। बीजाणुओं का स्रोत इसके अंदर है। इसे खत्म कर दें तो सब खत्म हो जाएगा।',
							thai: 'ใช่ ต้นตอของสปอร์อยู่ข้างใน ถ้าจบที่นี่ ทุกอย่างก็จบ'
						},
						emotion: 'base'
					}
				]
			},
			{
				id: 3,
				title: '엘라라',
				dialogue: [
					{
						type: 'direction',
						action: 'enter',
						speaker: 'elara',
						duration_ms: 600,
						spot: [2, 3]
					},
					{
						type: 'speech',
						speaker: 'elara',
						content: {
							korean: '…왔구나. 기다렸어.',
							english: "...You're here. I've been waiting.",
							japanese: '…来たのね。待っていたわ。',
							chinese: '……你来了。我一直在等你。',
							spanish: '...Has venido. Te estaba esperando.',
							french: '...Tu es venu. Je t’attendais.',
							vietnamese: '...Ngươi đã đến. Ta đã chờ rồi.',
							hindi: '...तुम आ गए। मैं इंतज़ार कर रही थी।',
							thai: '...เธอมาถึงแล้ว ฉันรออยู่'
						},
						emotion: 'base'
					},
					{
						type: 'speech',
						speaker: 'character_any',
						content: {
							korean: '누구야.',
							english: 'Who are you?',
							japanese: '誰だ。',
							chinese: '你是谁。',
							spanish: '¿Quién eres?',
							french: 'Qui es-tu ?',
							vietnamese: 'Ngươi là ai?',
							hindi: 'तुम कौन हो?',
							thai: 'ใครน่ะ'
						},
						emotion: 'base'
					},
					{
						type: 'speech',
						speaker: 'elara',
						content: {
							korean: '엘라라야. 이 숲에서 가장 오래 산 요정.',
							english: "I'm Elara. The oldest fairy in this forest.",
							japanese: 'エララよ。この森で最も長く生きている妖精。',
							chinese: '我是艾拉拉。这片森林里最古老的精灵。',
							spanish: 'Soy Elara. El hada más antigua de este bosque.',
							french: 'Je suis Elara. La fée la plus ancienne de cette forêt.',
							vietnamese: 'Ta là Elara. Tiên nữ sống lâu nhất khu rừng này.',
							hindi: 'मैं एलारा हूँ। इस जंगल की सबसे पुरानी परी।',
							thai: 'ฉันคือเอลาร่า นางฟ้าที่อยู่ในป่านี้มานานที่สุด'
						},
						emotion: 'base'
					},
					{
						type: 'speech',
						speaker: 'elara',
						content: {
							korean: '너희한테 해줄 말이 있어.',
							english: 'I have something to tell you all.',
							japanese: 'あなたたちに話したいことがあるの。',
							chinese: '我有话要对你们说。',
							spanish: 'Tengo algo que deciros.',
							french: "J'ai quelque chose à vous dire.",
							vietnamese: 'Ta có chuyện muốn nói với các ngươi.',
							hindi: 'मुझे तुम्हें कुछ बताना है।',
							thai: 'ฉันมีเรื่องจะบอกพวกเธอ'
						},
						emotion: 'sad'
					}
				]
			},
			{
				id: 5,
				title: '진실 — 1',
				dialogue: [
					{
						type: 'speech',
						speaker: 'elara',
						content: {
							korean: '카인은 포자를 통제하는 기술을 갖고 있어.',
							english: 'Kain has the technology to control the spores.',
							japanese: 'カインは胞子を制御する技術を持っているわ。',
							chinese: '凯恩拥有控制孢子的技术。',
							spanish: 'Kain tiene la tecnología para controlar las esporas.',
							french: 'Kain possède la technologie pour contrôler les spores.',
							vietnamese: 'Kain sở hữu công nghệ kiểm soát bào tử.',
							hindi: 'कैन के पास बीजाणुओं को नियंत्रित करने की तकनीक है।',
							thai: 'เคนมีเทคโนโลยีในการควบคุมสปอร์'
						},
						emotion: 'base'
					},
					{
						type: 'speech',
						speaker: 'elara',
						content: {
							korean: '리라가 맞아. 카인은 포자를 이용해서 마을을 없애왔어.',
							english: 'Lyra is right. Kain has been using spores to destroy villages.',
							japanese: 'リラの言う通りよ。カインは胞子を利用して村を滅ぼしてきたの。',
							chinese: '莱拉是对的。凯恩一直利用孢子毁灭村庄。',
							spanish: 'Lyra tiene razón. Kain ha estado usando las esporas para destruir aldeas.',
							french: 'Lyra a raison. Kain utilise les spores pour détruire les villages.',
							vietnamese: 'Lyra nói đúng. Kain đã sử dụng bào tử để tiêu diệt các ngôi làng.',
							hindi: 'लाइरा सही है। कैन बीजाणुओं का उपयोग करके गाँवों को नष्ट कर रहा है।',
							thai: 'ไลร่าพูดถูก เคนใช้สปอร์ในการทำลายหมู่บ้านมาโดยตลอด'
						},
						emotion: 'sad'
					},
					{
						type: 'speech',
						speaker: 'elara',
						content: {
							korean: '개간지를 넓히고, 수호대의 공포를 유지하고, 권력을 키우려고.',
							english:
								'To expand his land, maintain the fear of the guardians, and increase his power.',
							japanese: '開拓地を広げ、守護隊の恐怖を維持し、権力を拡大するためにね。',
							chinese: '为了扩大开垦地，维持守卫队的恐惧，并增强自己的权力。',
							spanish:
								'Para expandir sus tierras, mantener el miedo a los guardianes y aumentar su poder.',
							french:
								'Pour étendre ses terres, maintenir la peur des gardiens et accroître son pouvoir.',
							vietnamese:
								'Để mở rộng vùng khai khẩn, duy trì nỗi sợ hãi của đội vệ binh và tăng cường quyền lực.',
							hindi:
								'अपनी भूमि का विस्तार करने, संरक्षकों का डर बनाए रखने और अपनी शक्ति बढ़ाने के लिए।',
							thai: 'เพื่อขยายพื้นที่บุกเบิก รักษาความกลัวของกองพิทักษ์ และเพิ่มอำนาจของตนเอง'
						},
						emotion: 'angry'
					},
					{
						type: 'speech',
						speaker: 'character_any',
						content: {
							korean: '그럼 — 우리 마을도.',
							english: 'Then — our village too...',
							japanese: 'じゃあ…私たちの村も。',
							chinese: '那么——我们的村庄也……',
							spanish: 'Entonces... nuestra aldea también...',
							french: 'Alors... notre village aussi...',
							vietnamese: 'Vậy thì — cả ngôi làng của chúng ta nữa.',
							hindi: 'तो — हमारा गाँव भी...',
							thai: 'ถ้าอย่างนั้น — หมู่บ้านของพวกเราก็ด้วย'
						},
						emotion: 'base'
					},
					{
						type: 'speech',
						speaker: 'elara',
						content: {
							korean: '…응. 카인이 보낸 거야.',
							english: '...Yes. Kain sent it.',
							japanese: '…ええ。カインが送ったものよ。',
							chinese: '……嗯。是凯恩派去的。',
							spanish: '...Sí. Kain lo envió.',
							french: "...Oui. C'est Kain qui l'a envoyé.",
							vietnamese: '...Ừ. Là do Kain phái đến đấy.',
							hindi: '...हाँ। कैन ने ही उसे भेजा था।',
							thai: '...ใช่ เคนเป็นคนส่งมันไป'
						},
						emotion: 'sad'
					}
				]
			},
			{
				id: 7,
				title: '진실 — 2',
				dialogue: [
					{
						type: 'direction',
						action: 'enter',
						speaker: 'elara',
						duration_ms: 400,
						spot: [2, 3]
					},
					{
						type: 'speech',
						speaker: 'elara',
						content: {
							korean: '더 있어. 카인이 너희를 수호대에 데려온 것도 우연이 아니야.',
							english:
								"There's more. It was no coincidence that Kain brought you into the Guardians.",
							japanese: 'まだあるわ。カインがあなたたちを守護隊に招き入れたのも、偶然じゃない。',
							chinese: '还有更多。凯恩把你们带进守卫队也不是巧合。',
							spanish: 'Hay más. No fue una coincidencia que Kain os trajera a los Guardianes.',
							french:
								"Il y a plus. Ce n'est pas un hasard si Kain vous a fait entrer chez les Gardiens.",
							vietnamese:
								'Còn nữa. Việc Kain đưa các ngươi vào đội Vệ binh không phải là tình cờ đâu.',
							hindi: 'और भी है। यह कोई संयोग नहीं था कि कैन तुम्हें संरक्षकों में ले आया।',
							thai: 'ยังมีอีก การที่เคนพาพวกเธอเข้ากองพิทักษ์ก็ไม่ใช่เรื่องบังเอิญ'
						},
						emotion: 'base'
					},
					{
						type: 'speech',
						speaker: 'character_any',
						content: {
							korean: '…무슨 소리야.',
							english: '...What are you talking about?',
							japanese: '…どういうこと？',
							chinese: '……你在说什么。',
							spanish: '...¿De qué estás hablando?',
							french: '...De quoi parles-tu ?',
							vietnamese: '...Ngươi đang nói gì vậy?',
							hindi: '...तुम क्या कह रही हो?',
							thai: '...หมายความว่ายังไง'
						},
						emotion: 'base'
					},
					{
						type: 'speech',
						speaker: 'elara',
						content: {
							korean: '마을 잠식은 미끼였어. 너희를 끌어들이기 위한.',
							english: "The village's erosion was bait. To lure you in.",
							japanese: '村の侵食は囮だったの。あなたたちを誘い込むためのね。',
							chinese: '村庄的侵蚀只是诱饵。为了把你们引诱进来。',
							spanish: 'La erosión de la aldea fue un cebo. Para atraeros.',
							french: "L'érosion du village était un appât. Pour vous attirer.",
							vietnamese: 'Sự xâm lấn của ngôi làng chỉ là mồi nhử. Để lôi kéo các ngươi vào.',
							hindi: 'गाँव का क्षरण एक चारा था। तुम्हें फंसाने के लिए।',
							thai: 'การกัดกินหมู่บ้านเป็นแค่เหยื่อล่อ เพื่อดึงพวกเธอเข้ามา'
						},
						emotion: 'angry'
					},
					{
						type: 'speech',
						speaker: 'character_any',
						content: {
							korean: '처음부터 이용한 거야?',
							english: 'Were we being used from the very beginning?',
							japanese: '最初から利用されていたの？',
							chinese: '从一开始就在利用我们吗？',
							spanish: '¿Nos usó desde el principio?',
							french: 'Nous a-t-il utilisés depuis le début ?',
							vietnamese: 'Hắn đã lợi dụng chúng ta ngay từ đầu sao?',
							hindi: 'क्या शुरू से ही हमारा इस्तेमाल किया जा रहा था?',
							thai: 'หลอกใช้พวกเรามาตั้งแต่ต้นเลยงั้นเหรอ'
						},
						emotion: 'angry'
					},
					{
						type: 'speech',
						speaker: 'elara',
						content: {
							korean: '세계수를 각성시키려면 강한 분노가 필요해. 카인은 그걸 알고 있었어.',
							english: 'To awaken the World Tree, intense rage is required. Kain knew that.',
							japanese: '世界樹を覚醒させるには強い怒りが必要なの。カインはそれを知っていたわ。',
							chinese: '要觉醒世界树，需要强烈的愤怒。凯恩深知这一点。',
							spanish:
								'Para despertar al Árbol del Mundo, se requiere una rabia intensa. Kain lo sabía.',
							french:
								"Pour éveiller l'Arbre-Monde, une rage intense est nécessaire. Kain le savait.",
							vietnamese:
								'Để thức tỉnh Cây Thế Giới, cần phải có một nỗi phẫn nộ tột cùng. Kain đã biết điều đó.',
							hindi: 'कल्पवृक्ष को जगाने के लिए तीव्र क्रोध की आवश्यकता होती है। कैन यह जानता था।',
							thai: 'การจะปลุกพฤกษาโลกต้องใช้ความโกรธแค้นที่รุนแรง เคนรู้เรื่องนั้นดี'
						},
						emotion: 'sad'
					}
				]
			},
			{
				id: 9,
				dialogue: [
					{
						type: 'direction',
						action: 'enter',
						speaker: 'elara',
						duration_ms: 400,
						spot: [2, 3]
					},
					{
						type: 'speech',
						speaker: 'elara',
						content: {
							korean: '세계수가 각성하면 — 이 숲 전체가 카인의 무기가 돼.',
							english: "If the World Tree awakens — this entire forest will become Kain's weapon.",
							japanese: '世界樹が覚醒すれば…この森全体がカインの武器になるわ。',
							chinese: '如果世界树觉醒——整片森林都会变成凯恩的武器。',
							spanish:
								'Si el Árbol del Mundo despierta, todo este bosque se convertirá en el arma de Kain.',
							french: "Si l'Arbre-Monde s'éveille, toute cette forêt deviendra l'arme de Kain.",
							vietnamese:
								'Nếu Cây Thế Giới thức tỉnh — cả khu rừng này sẽ trở thành vũ khí của Kain.',
							hindi: 'यदि कल्पवृक्ष जाग गया — तो यह पूरा जंगल कैन का हथियार बन जाएगा।',
							thai: 'ถ้าพฤกษาโลกตื่นขึ้น — ป่าทั้งป่านี้จะกลายเป็นอาวุธของเคน'
						},
						emotion: 'angry'
					},
					{
						type: 'speech',
						speaker: 'character_any',
						content: {
							korean: '막을 수 있어?',
							english: 'Can we stop it?',
							japanese: '止められるの？',
							chinese: '能阻止吗？',
							spanish: '¿Podemos detenerlo?',
							french: "Pouvons-nous l'arrêter ?",
							vietnamese: 'Có thể ngăn chặn được không?',
							hindi: 'क्या हम इसे रोक सकते हैं?',
							thai: 'หยุดมันได้ไหม'
						},
						emotion: 'base'
					},
					{
						type: 'speech',
						speaker: 'elara',
						content: {
							korean:
								'카인을 쓰러뜨리면 각성이 멈춰. 근데 — 카인은 이미 알고 있어. 네가 여기 있다는 걸.',
							english:
								"If you defeat Kain, the awakening will stop. But — Kain already knows. He knows you're here.",
							japanese:
								'カインを倒せば覚醒は止まるわ。でも…カインはもう知っている。あなたがここにいることを。',
							chinese: '打败凯恩就能停止觉醒。但是——凯恩已经知道了。他知道你在这里。',
							spanish:
								'Si derrotas a Kain, el despertar se detendrá. Pero... Kain ya lo sabe. Sabe que estás aquí.',
							french:
								"Si tu bats Kain, l'éveil s'arrêtera. Mais... Kain le sait déjà. Il sait que tu es ici.",
							vietnamese:
								'Nếu hạ gục được Kain, sự thức tỉnh sẽ dừng lại. Nhưng — Kain đã biết rồi. Hắn biết ngươi đang ở đây.',
							hindi:
								'यदि तुम कैन को हरा देते हो, तो जागना रुक जाएगा। लेकिन — कैन पहले से ही जानता है। वह जानता है कि तुम यहाँ हो।',
							thai: 'ถ้าล้มเคนได้ การตื่นก็จะหยุดลง แต่ว่า — เคนรู้อยู่แล้ว เขารู้ว่าเธออยู่ที่นี่'
						},
						emotion: 'sad'
					}
				]
			},
			{
				id: 10,
				dialogue: [
					{
						type: 'speech',
						speaker: 'character_any',
						content: {
							korean: '처음부터 미끼였어.',
							english: 'I was bait from the very beginning.',
							japanese: '最初から囮だったんだ。',
							chinese: '从一开始就是诱饵。',
							spanish: 'Fui un cebo desde el principio.',
							french: "J'étais un appât depuis le début.",
							vietnamese: 'Ngay từ đầu đã là mồi nhử rồi.',
							hindi: 'मैं शुरू से ही एक चारा था।',
							thai: 'เป็นแค่เหยื่อมาตั้งแต่ต้น'
						},
						emotion: 'angry'
					},
					{
						type: 'speech',
						speaker: 'character_any',
						content: {
							korean: '복수하고 싶어서 그 손을 잡았는데.',
							english: 'I took his hand because I wanted revenge.',
							japanese: '復讐したくてあの手を取ったのに。',
							chinese: '因为想要复仇才握住了那只手。',
							spanish: 'Tomé su mano porque quería venganza.',
							french: "J'ai pris sa main parce que je voulais me venger.",
							vietnamese: 'Vì muốn trả thù nên tôi mới nắm lấy bàn tay đó.',
							hindi: 'मैंने उसका हाथ थाम लिया क्योंकि मैं बदला लेना चाहता था।',
							thai: 'เพราะอยากแก้แค้นเลยยอมร่วมมือกับเขา'
						},
						emotion: 'sad'
					},
					{
						type: 'speech',
						speaker: 'character_any',
						content: {
							korean: '…근데 후회는 없어. 진실을 알았으니까.',
							english: '...But I have no regrets. Because now I know the truth.',
							japanese: '…でも、後悔はない。真実を知ったから。',
							chinese: '……但我并不后悔。因为我已经知道了真相。',
							spanish: '...Pero no me arrepiento. Porque ahora sé la verdad.',
							french: "...Mais je n'ai aucun regret. Parce que maintenant, je connais la vérité.",
							vietnamese: '...Nhưng tôi không hối hận. Vì tôi đã biết được sự thật.',
							hindi: '...लेकिन मुझे कोई पछतावा नहीं है। क्योंकि अब मुझे सच्चाई पता चल गई है।',
							thai: '...แต่ก็ไม่เสียใจหรอก เพราะได้รู้ความจริงแล้ว'
						},
						emotion: 'angry'
					}
				]
			},
			{
				id: 14,
				title: '카인의 배신',
				dialogue: [
					{
						type: 'direction',
						action: 'enter',
						speaker: 'kain',
						duration_ms: 500,
						spot: [4, 3]
					},
					{
						type: 'speech',
						speaker: 'kain',
						content: {
							korean: '엘라라랑 얘기했군. 다 들었어?',
							english: "So you've talked to Elara. Did you hear everything?",
							japanese: 'エララと話したようだな。すべて聞いたか？',
							chinese: '你和艾拉拉谈过了。都听说了吗？',
							spanish: 'Has hablado con Elara. ¿Lo has oído todo?',
							french: 'Tu as parlé à Elara. Tu as tout entendu ?',
							vietnamese: 'Ngươi đã nói chuyện với Elara rồi à. Nghe hết cả rồi chứ?',
							hindi: 'तो तुमने एलारा से बात कर ली। क्या तुमने सब कुछ सुन लिया?',
							thai: 'คุยกับเอลาร่ามาแล้วสินะ ได้ยินหมดแล้วใช่ไหม'
						},
						emotion: 'base'
					},
					{
						type: 'speech',
						speaker: 'character_any',
						content: {
							korean: '우리 마을을 없앤 게 너야.',
							english: 'You were the one who destroyed our village.',
							japanese: '私たちの村を滅ぼしたのはお前か。',
							chinese: '毁灭我们村庄的人就是你。',
							spanish: 'Fuiste tú quien destruyó nuestra aldea.',
							french: "C'est toi qui as détruit notre village.",
							vietnamese: 'Chính ngươi là kẻ đã hủy diệt ngôi làng của chúng ta.',
							hindi: 'तुम ही थे जिसने हमारे गाँव को नष्ट किया।',
							thai: 'คนที่ทำลายหมู่บ้านของพวกเราคือแก'
						},
						emotion: 'angry'
					},
					{
						type: 'speech',
						speaker: 'kain',
						content: {
							korean: '그래.',
							english: "That's right.",
							japanese: 'ああ、そうだ。',
							chinese: '没错。',
							spanish: 'Así es.',
							french: "C'est exact.",
							vietnamese: 'Phải.',
							hindi: 'सही कहा।',
							thai: 'ใช่'
						},
						emotion: 'base'
					},
					{
						type: 'speech',
						speaker: 'character_any',
						content: {
							korean: '처음부터 미끼로 쓴 거야.',
							english: 'You used us as bait from the very beginning.',
							japanese: '最初から囮として使っていたのか。',
							chinese: '从一开始就把我们当作诱饵。',
							spanish: 'Nos usaste como cebo desde el principio.',
							french: 'Tu nous as utilisés comme appât depuis le début.',
							vietnamese: 'Ngươi đã dùng chúng ta làm mồi nhử ngay từ đầu.',
							hindi: 'तुमने शुरू से ही हमें चारे के रूप में इस्तेमाल किया।',
							thai: 'แกใช้พวกเราเป็นเหยื่อล้ามาตั้งแต่ต้น'
						},
						emotion: 'angry'
					},
					{
						type: 'speech',
						speaker: 'kain',
						content: {
							korean: '그것도 맞아. 세계수를 각성시키려면 강한 분노를 가진 자가 필요했거든.',
							english:
								"That's also true. I needed someone with intense rage to awaken the World Tree.",
							japanese:
								'それも正しい。世界樹を覚醒させるには、強い怒りを持つ者が必要だったからな。',
							chinese: '那也没错。为了觉醒世界树，我需要一个拥有强烈愤怒的人。',
							spanish:
								'Eso también es cierto. Necesitaba a alguien con una rabia intensa para despertar al Árbol del Mundo.',
							french:
								"C'est vrai aussi. J'avais besoin de quelqu'un animé d'une rage intense pour éveiller l'Arbre-Monde.",
							vietnamese:
								'Điều đó cũng đúng. Để thức tỉnh Cây Thế Giới, ta cần một kẻ mang trong mình nỗi phẫn nộ tột cùng.',
							hindi:
								'यह भी सच है। कल्पवृक्ष को जगाने के लिए मुझे तीव्र क्रोध वाले किसी व्यक्ति की आवश्यकता थी।',
							thai: 'นั่นก็ถูก เพื่อที่จะปลุกพฤกษาโลกให้ตื่นขึ้น ฉันต้องการคนที่มีความโกรธแค้นอย่างรุนแรง'
						},
						emotion: 'base'
					},
					{
						type: 'speech',
						speaker: 'kain',
						content: {
							korean: '근데 잘 됐잖아. 넌 강해졌고, 여기까지 왔어.',
							english: 'But it worked out well. You became stronger and made it all the way here.',
							japanese:
								'だが、結果オーライだろう。お前は強くなり、ここまでたどり着いたのだからな。',
							chinese: '但结果不是很好吗。你变强了，还来到了这里。',
							spanish: 'Pero ha salido bien. Te has hecho más fuerte y has llegado hasta aquí.',
							french:
								"Mais tout s'est bien passé. Tu es devenu plus fort et tu es arrivé jusqu'ici.",
							vietnamese: 'Nhưng chẳng phải tốt rồi sao. Ngươi đã mạnh hơn và đến được tận đây.',
							hindi: 'लेकिन यह अच्छा रहा। तुम और मजबूत हो गए और यहाँ तक पहुँच गए।',
							thai: 'แต่ก็ดีแล้วไม่ใช่เหรอ เธอเก่งขึ้นและมาถึงที่นี่ได้'
						},
						emotion: 'happy'
					},
					{
						type: 'speech',
						speaker: 'character_any',
						content: { korean: '….' },
						emotion: 'angry'
					},
					{ type: 'direction', action: 'exit', speaker: 'kain', duration_ms: 400 }
				]
			},
			{
				id: 15,
				title: '세계수의 심장',
				dialogue: [
					{
						type: 'speech',
						speaker: 'narrator',
						content: {
							korean: '카인이 세계수 뿌리에 손을 댔다. 숲 전체가 흔들렸다.',
							english: 'Kain touched the roots of the World Tree. The entire forest trembled.',
							japanese: 'カインが世界樹の根に手を触れた。森全体が揺れた。',
							chinese: '凯恩触碰了世界树的根。整片森林都颤抖了。',
							french: "Kaïn toucha les racines de l'Arbre Monde. Toute la forêt trembla.",
							spanish: 'Kain tocó las raíces del Árbol del Mundo. Todo el bosque tembló.',
							vietnamese: 'Kain chạm vào rễ của Cây Thế Giới. Toàn bộ khu rừng rung chuyển.',
							thai: 'เคนแตะรากของต้นไม้โลก ป่าทั้งหมดสั่นสะเทือน',
							hindi: 'केन ने विश्व वृक्ष की जड़ों को छुआ। पूरा जंगल कांप उठा।'
						},
						emotion: 'base'
					},
					{
						type: 'direction',
						action: 'enter',
						speaker: 'kain',
						duration_ms: 500,
						spot: [4, 3]
					},
					{
						type: 'speech',
						speaker: 'kain',
						content: {
							korean: '여기까지 왔군. 대단해.',
							english: 'You made it this far. Impressive.',
							japanese: 'ここまで来たか。大したものだ。',
							chinese: '你居然来到这里。了不起。',
							french: "Tu es venu jusqu'ici. Impressionnant.",
							spanish: 'Llegaste hasta aquí. Impresionante.',
							vietnamese: 'Anh đã đến được đây. Ấn tượng đấy.',
							thai: 'มาถึงได้ไกลขนาดนี้เลย น่าประทับใจ',
							hindi: 'तुम यहाँ तक आ गए। प्रभावशाली।'
						},
						emotion: 'base'
					},
					{
						type: 'speech',
						speaker: 'character_any',
						content: {
							korean: '카인. 끝내자.',
							english: "Kain. Let's end this.",
							japanese: 'カイン。終わりにしよう。',
							chinese: '凯恩。结束吧。',
							french: 'Kaïn. Finissons-en.',
							spanish: 'Kain. Terminemos esto.',
							vietnamese: 'Kain. Hãy kết thúc nào.',
							thai: 'เคน จบกันเถอะ',
							hindi: 'केन। इसे खत्म करते हैं।'
						},
						emotion: 'angry'
					},
					{
						type: 'speech',
						speaker: 'kain',
						content: {
							korean: '나랑 싸울 생각이야? 재밌네.',
							english: 'You want to fight me? How amusing.',
							japanese: '俺と戦うつもりか？面白い。',
							chinese: '你想跟我打？有意思。',
							french: 'Tu veux te battre contre moi ? Amusant.',
							spanish: '¿Quieres pelear conmigo? Qué divertido.',
							vietnamese: 'Anh muốn chiến đấu với tôi? Thú vị đấy.',
							thai: 'อยากสู้กับฉันเหรอ? น่าสนุกดี',
							hindi: 'मुझसे लड़ना चाहते हो? दिलचस्प।'
						},
						emotion: 'happy'
					},
					{
						type: 'speech',
						speaker: 'kain',
						content: {
							korean: '근데 — 내 부하가 먼저야.',
							english: 'But — my subordinate goes first.',
							japanese: 'でも — 俺の部下が先だ。',
							chinese: '但是——我的部下先来。',
							french: 'Mais — mon subordonné passe en premier.',
							spanish: 'Pero — mi subordinado va primero.',
							vietnamese: 'Nhưng — thuộc hạ của tôi trước đã.',
							thai: 'แต่ — ลูกน้องฉันไปก่อน',
							hindi: 'लेकिन — मेरा अधीनस्थ पहले जाएगा।'
						},
						emotion: 'base'
					},
					{
						type: 'direction',
						action: 'exit',
						speaker: 'kain',
						duration_ms: 400,
						direction: 'down'
					},
					{
						type: 'speech',
						speaker: 'world_root_titan',
						content: {
							korean: '…이 땅에 발을 들인 자. 세계수의 심판을 받아라.',
							english: '…Those who set foot on this land. Face the judgment of the World Tree.',
							japanese: '…この地に足を踏み入れた者よ。世界樹の裁きを受けよ。',
							chinese: '…踏上这片土地的人。接受世界树的审判吧。',
							french: "…Ceux qui ont foulé cette terre. Subissez le jugement de l'Arbre Monde.",
							spanish: '…Los que pisaron esta tierra. Enfrentad el juicio del Árbol del Mundo.',
							vietnamese:
								'…Kẻ đã đặt chân lên mảnh đất này. Hãy chịu sự phán xét của Cây Thế Giới.',
							thai: '…ผู้ที่ก้าวเท้าเข้ามาในดินแดนนี้ จงรับการพิพากษาจากต้นไม้โลก',
							hindi: '…जो इस भूमि पर आए हैं। विश्व वृक्ष का न्याय भोगो।'
						},
						emotion: 'angry'
					},
					{
						type: 'speech',
						speaker: 'character_any',
						content: {
							korean: '물러서지 않아.',
							english: "We won't back down.",
							japanese: '引かないぞ。',
							chinese: '我们不会退缩的。',
							french: 'Nous ne reculerons pas.',
							spanish: 'No retrocederemos.',
							vietnamese: 'Chúng tôi sẽ không lùi bước.',
							thai: 'เราจะไม่ถอย',
							hindi: 'हम पीछे नहीं हटेंगे।'
						},
						emotion: 'angry'
					}
				],

				win_dialogue: [
					{
						type: 'speech',
						speaker: 'narrator',
						content: {
							korean: '세계수의 각성이 멈췄다. 숲이 조용해졌다.',
							english: "The World Tree's awakening stopped. The forest fell silent.",
							japanese: '世界樹の覚醒が止まった。森が静かになった。',
							chinese: '世界树的觉醒停止了。森林安静下来了。',
							french: "L'éveil de l'Arbre Monde s'arrêta. La forêt se tut.",
							spanish: 'El despertar del Árbol del Mundo se detuvo. El bosque quedó en silencio.',
							vietnamese: 'Sự thức tỉnh của Cây Thế Giới dừng lại. Khu rừng trở nên yên tĩnh.',
							thai: 'การตื่นขึ้นของต้นไม้โลกหยุดลง ป่าเงียบสงบลง',
							hindi: 'विश्व वृक्ष का जागरण रुक गया। जंगल शांत हो गया।'
						},
						emotion: 'base'
					},
					{
						type: 'direction',
						action: 'enter',
						speaker: 'kain',
						duration_ms: 600,
						spot: [4, 3]
					},
					{
						type: 'speech',
						speaker: 'kain',
						content: {
							korean: '수고했어, 세계수야. 이제 이 숲은 내—',
							english: 'Good work, World Tree. Now this forest is min—',
							japanese: 'ご苦労、世界樹よ。これでこの森は俺の—',
							chinese: '辛苦了，世界树。现在这片森林是我的—',
							french: 'Bon travail, Arbre Monde. Maintenant cette forêt est mien—',
							spanish: 'Buen trabajo, Árbol del Mundo. Ahora este bosque es mí—',
							vietnamese: 'Tốt lắm, Cây Thế Giới. Giờ khu rừng này là của t—',
							thai: 'ทำได้ดีต้นไม้โลก ตอนนี้ป่านี้เป็นของฉ—',
							hindi: 'शाबाश, विश्व वृक्ष। अब यह जंगल मेर—'
						},
						emotion: 'happy'
					},
					{
						type: 'speech',
						speaker: 'kain',
						content: {
							korean: '…뭐? 살아있다고?',
							english: "…What? You're alive?",
							japanese: '…何？生きているだと？',
							chinese: '…什么？你们还活着？',
							french: '…Quoi ? Vous êtes vivants ?',
							spanish: '…¿Qué? ¿Estáis vivos?',
							vietnamese: '…Cái gì? Anh còn sống?',
							thai: '…อะไรนะ? ยังมีชีวิตอยู่เหรอ?',
							hindi: '…क्या? तुम जीवित हो?'
						},
						emotion: 'base'
					},
					{
						type: 'speech',
						speaker: 'character_any',
						content: {
							korean: '기대했던 얼굴이네.',
							english: "That's the face I was hoping to see.",
							japanese: '期待していた顔だな。',
							chinese: '这就是我期待看到的表情。',
							french: "C'est la tête à laquelle je m'attendais.",
							spanish: 'Esa es la cara que esperaba ver.',
							vietnamese: 'Đúng cái mặt tôi muốn thấy.',
							thai: 'นี่แหละหน้าที่ฉันอยากเห็น',
							hindi: 'यही चेहरा देखना चाहता था।'
						},
						emotion: 'angry'
					},
					{
						type: 'speech',
						speaker: 'kain',
						content: {
							korean: '….',
							english: '….',
							japanese: '….',
							chinese: '….',
							french: '….',
							spanish: '….',
							vietnamese: '….',
							thai: '….',
							hindi: '….'
						},
						emotion: 'base'
					},
					{
						type: 'direction',
						action: 'exit',
						speaker: 'kain',
						duration_ms: 300,
						direction: 'down'
					},
					{
						type: 'speech',
						speaker: 'character_any',
						content: {
							korean: '카인!!',
							english: 'Kain!!',
							japanese: 'カイン!!',
							chinese: '凯恩!!',
							french: 'Kaïn!!',
							spanish: 'Kain!!',
							vietnamese: 'Kain!!',
							thai: 'เคน!!',
							hindi: 'केन!!'
						},
						emotion: 'angry'
					},
					{
						type: 'speech',
						speaker: 'character_any',
						content: {
							korean: '도망가지 마!!',
							english: "Don't run away!!",
							japanese: '逃げるな!!',
							chinese: '不要逃跑!!',
							french: "Ne t'enfuis pas!!",
							spanish: '¡¡No huyas!!',
							vietnamese: 'Đừng chạy trốn!!',
							thai: 'อย่าหนี!!',
							hindi: 'भागो मत!!'
						},
						emotion: 'angry'
					},
					{
						type: 'speech',
						speaker: 'narrator',
						content: {
							korean: '하지만 그림자조차 남지 않았다.',
							english: 'But not even a shadow remained.',
							japanese: 'しかし、影すら残らなかった。',
							chinese: '但连影子都没有留下。',
							french: "Mais même l'ombre avait disparu.",
							spanish: 'Pero ni siquiera quedó una sombra.',
							vietnamese: 'Nhưng thậm chí không còn cả bóng tối.',
							thai: 'แต่แม้แต่เงาก็ไม่เหลือ',
							hindi: 'लेकिन छाया तक नहीं बची।'
						},
						emotion: 'base'
					},
					{
						type: 'speech',
						speaker: 'narrator',
						content: {
							korean: '그래도 — 숲에 비가 내렸다. 오랫동안 잊혀진 소리였다.',
							english: 'Even so — rain fell on the forest. A sound long forgotten.',
							japanese: 'それでも — 森に雨が降った。長い間忘れられていた音だった。',
							chinese: '尽管如此——雨落在了森林上。那是久违的声音。',
							french: 'Malgré tout — la pluie tomba sur la forêt. Un son oublié depuis longtemps.',
							spanish: 'Aun así — llovió sobre el bosque. Un sonido olvidado hace mucho tiempo.',
							vietnamese: 'Dù vậy — mưa rơi trên khu rừng. Một âm thanh đã bị lãng quên từ lâu.',
							thai: 'แม้กระนั้น — ฝนก็ตกลงมาในป่า เสียงที่ถูกลืมมานาน',
							hindi: 'फिर भी — जंगल में बारिश हुई। वह आवाज़ जो लंबे समय से भूली हुई थी।'
						},
						emotion: 'base'
					}
				],

				lose_dialogue: [
					{
						type: 'speech',
						speaker: 'narrator',
						content: {
							korean: '세계수의 뿌리가 모든 것을 삼켰다.',
							english: 'The roots of the World Tree swallowed everything.',
							japanese: '世界樹の根がすべてを飲み込んだ。',
							chinese: '世界树的根吞噬了一切。',
							french: "Les racines de l'Arbre Monde engloutirent tout.",
							spanish: 'Las raíces del Árbol del Mundo engulleron todo.',
							vietnamese: 'Rễ của Cây Thế Giới nuốt chửng tất cả.',
							thai: 'รากของต้นไม้โลกกลืนทุกสิ่ง',
							hindi: 'विश्व वृक्ष की जड़ों ने सब कुछ निगल लिया।'
						},
						emotion: 'base'
					},
					{
						type: 'speech',
						speaker: 'character_any',
						content: {
							korean: '…아직 끝나지 않았어.',
							english: "…It's not over yet.",
							japanese: '…まだ終わっていない。',
							chinese: '…还没结束。',
							french: "…Ce n'est pas encore terminé.",
							spanish: '…Aún no ha terminado.',
							vietnamese: '…Vẫn chưa kết thúc.',
							thai: '…ยังไม่จบ',
							hindi: '…अभी खत्म नहीं हुआ।'
						},
						emotion: 'angry'
					},
					{
						type: 'direction',
						action: 'enter',
						speaker: 'kain',
						duration_ms: 500,
						spot: [4, 3]
					},
					{
						type: 'speech',
						speaker: 'kain',
						content: {
							korean: '포기하지 않는군. …재밌어.',
							english: "You don't give up. …Interesting.",
							japanese: '諦めないか。…面白い。',
							chinese: '你不放弃。…有意思。',
							french: 'Tu ne renonces pas. …Intéressant.',
							spanish: 'No te rindes. …Interesante.',
							vietnamese: 'Anh không bỏ cuộc. …Thú vị.',
							thai: 'ไม่ยอมแพ้เลย …น่าสนุก',
							hindi: 'तुम हार नहीं मानते। …दिलचस्प।'
						},
						emotion: 'base'
					},
					{
						type: 'direction',
						action: 'exit',
						speaker: 'kain',
						duration_ms: 400,
						direction: 'down'
					}
				]
			}
		]
	}
];
}