export const scenario_modern_mnemonic_9_01 = {
	"scenario_id": "modern_mnemonic_9_01",
	"order": 1,
	"act": "intro",
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
			"네온이 번뜩이는 도시, 그 그림자 속에 모든 정보가 흐른다.",
			"사람들은 'Mnemonic'의 이름을 속삭였다.",
			"그의 정보는 완벽했다. 너무나도 완벽해서, 섬뜩할 정도로.",
			"어쩌면, 그의 정보는 미래를 알고 있는지도 몰랐다."
		],
		"english": [
			"In the neon-flashing city, all information flows within its shadows.",
			"People whispered the name 'Mnemonic'.",
			"His information was perfect. So perfect, it was eerie.",
			"Perhaps, his information knew the future."
		],
		"japanese": [
			"ネオン瞬く都市、その影の中で全ての情報が流れる。",
			"人々は「Mnemonic」の名を囁いた。",
			"彼の情報は完璧だった。あまりにも完璧すぎて、不気味なほどに。",
			"もしかしたら、彼の情報は未来を知っていたのかもしれない。"
		],
		"chinese": [
			"霓虹闪烁的都市，所有信息都在其阴影中流动。",
			"人们低语着“Mnemonic”的名字。",
			"他的情报是完美的。完美到令人毛骨悚然。",
			"或许，他的情报甚至知晓未来。"
		],
		"french": [
			"Dans la ville scintillante de néons, toute l'information circule dans ses ombres.",
			"Les gens chuchotaient le nom de 'Mnemonic'.",
			"Ses informations étaient parfaites. Si parfaites, que c'en était effrayant.",
			"Peut-être, ses informations connaissaient-elles l'avenir."
		],
		"spanish": [
			"En la ciudad de neón brillante, toda la información fluye en sus sombras.",
			"La gente susurraba el nombre de 'Mnemonic'.",
			"Su información era perfecta. Tan perfecta, que era espeluznante.",
			"Quizás, su información conocía el futuro."
		],
		"vietnamese": [
			"Trong thành phố rực rỡ ánh đèn neon, mọi thông tin đều chảy trong bóng tối của nó.",
			"Người ta thì thầm tên 'Mnemonic'.",
			"Thông tin của hắn hoàn hảo. Hoàn hảo đến mức rợn người.",
			"Có lẽ, thông tin của hắn biết trước tương lai."
		],
		"thai": [
			"ในเมืองที่นีออนสว่างไสว ข้อมูลทั้งหมดไหลเวียนอยู่ในเงามืดนั้น",
			"ผู้คนกระซิบชื่อ 'Mnemonic'",
			"ข้อมูลของเขาสมบูรณ์แบบ สมบูรณ์แบบจนน่าขนลุก",
			"บางที ข้อมูลของเขาอาจจะรู้เรื่องอนาคต"
		],
		"hindi": [
			"नियॉन से चमकते शहर में, सारी जानकारी उसकी परछाइयों में बहती है।",
			"लोग 'Mnemonic' का नाम फुसफुसाते थे।",
			"उसकी जानकारी एकदम सही थी। इतनी सही कि डरावनी थी।",
			"शायद, उसकी जानकारी भविष्य को भी जानती थी।"
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
						"korean": "도시의 가장 깊은 곳, 정보의 그림자가 드리운 어두운 뒷골목이다.",
						"english": "The deepest part of the city, a dark alley where the shadow of information looms.",
						"japanese": "街の最も深い場所、情報の影が差す暗い裏路地だ。",
						"chinese": "城市的深处，一条信息阴影笼罩的黑暗小巷。",
						"french": "La partie la plus profonde de la ville, une ruelle sombre où plane l'ombre de l'information.",
						"spanish": "La parte más profunda de la ciudad, un callejón oscuro donde la sombra de la información se cierne.",
						"vietnamese": "Nơi sâu nhất của thành phố, một con hẻm tối tăm nơi bóng tối của thông tin bao trùm.",
						"thai": "ส่วนที่ลึกที่สุดของเมือง ตรอกมืดที่เงาของข้อมูลทอดทาบ",
						"hindi": "शहर का सबसे गहरा कोना, एक अँधेरी गली जहाँ जानकारी की परछाई मंडराती है।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "여기가 그 'Mnemonic'의 정보를 얻을 수 있는 곳인가?",
						"english": "Is this where I can get 'Mnemonic's' information?",
						"japanese": "ここが、その「Mnemonic」の情報を手に入れられる場所か？",
						"chinese": "这里就是能得到“Mnemonic”情报的地方吗？",
						"french": "Est-ce ici que je peux obtenir les informations de 'Mnemonic' ?",
						"spanish": "¿Es aquí donde puedo conseguir la información de 'Mnemonic'?",
						"vietnamese": "Đây có phải là nơi tôi có thể lấy thông tin của 'Mnemonic' không?",
						"thai": "ที่นี่คือที่ที่ฉันจะหาข้อมูลของ 'Mnemonic' ได้ใช่ไหม?",
						"hindi": "क्या यहीं से मुझे 'Mnemonic' की जानकारी मिल सकती है?"
					}
				},
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction",
					"speaker": "bex"
				},
				{
					"content": {
						"korean": "그래. 널 기다렸어. Mnemonic의 정보를 원한다고 들었어.",
						"english": "Yes. I've been waiting for you. I heard you want Mnemonic's information.",
						"japanese": "ああ。待っていたよ。Mnemonicの情報を欲しがっていると聞いた。",
						"chinese": "是的。我一直在等你。听说你想要Mnemonic的情报。",
						"french": "Oui. Je t'attendais. J'ai entendu dire que tu voulais les informations de Mnemonic.",
						"spanish": "Sí. Te estaba esperando. Escuché que quieres la información de Mnemonic.",
						"vietnamese": "Đúng vậy. Tôi đã đợi bạn. Tôi nghe nói bạn muốn thông tin của Mnemonic.",
						"thai": "ใช่ ฉันรอเธออยู่ ได้ยินว่าเธอต้องการข้อมูลของ Mnemonic",
						"hindi": "हाँ। मैं तुम्हारा इंतज़ार कर रहा था। मैंने सुना तुम Mnemonic की जानकारी चाहते हो।"
					},
					"speaker": "bex",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "그의 정보는 정말 정확하다고 하던데.",
						"english": "They say his information is truly accurate.",
						"japanese": "彼の情報は本当に正確だそうだな。",
						"chinese": "都说他的情报非常准确。",
						"french": "On dit que ses informations sont vraiment exactes.",
						"spanish": "Dicen que su información es realmente precisa.",
						"vietnamese": "Nghe nói thông tin của hắn thực sự chính xác.",
						"thai": "ได้ยินว่าข้อมูลของเขาแม่นยำมาก",
						"hindi": "कहा जाता है कि उसकी जानकारी वाकई सटीक होती है।"
					}
				},
				{
					"content": {
						"korean": "정확하다 못해 소름 끼칠 정도야. 마치 모든 걸 꿰뚫고 있는 것처럼.",
						"english": "It's beyond accurate, it's chilling. As if he sees through everything.",
						"japanese": "正確どころか、鳥肌が立つほどだ。まるで全てを見通しているかのように。",
						"chinese": "与其说是准确，不如说是令人毛骨悚然。仿佛能洞察一切。",
						"french": "C'est plus qu'exact, c'est effrayant. Comme s'il voyait à travers tout.",
						"spanish": "Es más que preciso, es escalofriante. Como si viera a través de todo.",
						"vietnamese": "Không chỉ chính xác mà còn rợn người. Cứ như thể hắn nhìn thấu mọi thứ.",
						"thai": "ไม่ใช่แค่แม่นยำ แต่น่าขนลุก ราวกับเขามองทะลุทุกสิ่ง",
						"hindi": "यह सटीक से बढ़कर, डरावना है। मानो वह सब कुछ देख सकता हो।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "bex"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "소문이 과장된 거겠지.",
						"english": "The rumors must be exaggerated.",
						"japanese": "噂が誇張されているんだろう。",
						"chinese": "谣言肯定是被夸大了。",
						"french": "Les rumeurs doivent être exagérées.",
						"spanish": "Los rumores deben ser exagerados.",
						"vietnamese": "Tin đồn chắc là đã bị thổi phồng rồi.",
						"thai": "ข่าวลือคงจะเกินจริงไปเอง",
						"hindi": "अफवाहें ज़रूर बढ़ा-चढ़ाकर बताई गई होंगी।"
					}
				},
				{
					"speaker": "bex",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "아니. 직접 경험해보면 알게 될 거야. 이 도시의 모든 정보가 그의 손아귀에 있어.",
						"english": "No. You'll understand once you experience it. All the city's information is in his grasp.",
						"japanese": "いや。直接経験すれば分かるさ。この都市のあらゆる情報が、奴の手中にある。",
						"chinese": "不。你亲身经历后就会明白。这个城市的所有信息都在他掌控之中。",
						"french": "Non. Tu le comprendras par toi-même. Toutes les informations de la ville sont à sa portée.",
						"spanish": "No. Lo descubrirás cuando lo experimentes. Toda la información de la ciudad está en su poder.",
						"vietnamese": "Không. Anh sẽ biết khi tự mình trải nghiệm. Mọi thông tin của thành phố này đều nằm trong tay hắn ta.",
						"thai": "ไม่หรอก นายจะได้รู้เมื่อได้สัมผัสด้วยตัวเอง ข้อมูลทั้งหมดของเมืองนี้อยู่ในกำมือเขา",
						"hindi": "नहीं। तुम्हें खुद अनुभव करने पर पता चलेगा। इस शहर की सारी जानकारी उसके हाथ में है।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "bex",
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "다음 목표는 저 구역이야. Mnemonic의 정보에 따르면…",
						"english": "The next target is that sector. According to Mnemonic's information...",
						"japanese": "次の目標はあの区域だ。Mnemonicの情報によると…",
						"chinese": "下一个目标是那个区域。根据Mnemonic的情报…",
						"french": "La prochaine cible est ce secteur. Selon les informations de Mnemonic...",
						"spanish": "El próximo objetivo es esa zona. Según la información de Mnemonic...",
						"vietnamese": "Mục tiêu tiếp theo là khu vực đó. Theo thông tin của Mnemonic...",
						"thai": "เป้าหมายต่อไปคือโซนนั้น ตามข้อมูลของ Mnemonic...",
						"hindi": "अगला लक्ष्य वह क्षेत्र है। Mnemonic की जानकारी के अनुसार…"
					},
					"emotion": "base",
					"speaker": "bex",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "그는 어떻게 그렇게 모든 걸 알지?",
						"english": "How does he know everything like that?",
						"japanese": "彼はどうしてそんなに何でも知っているんだ？",
						"chinese": "他怎么会知道所有这些？",
						"french": "Comment sait-il tout ça ?",
						"spanish": "¿Cómo lo sabe todo así?",
						"vietnamese": "Sao hắn ta lại biết mọi thứ như vậy?",
						"thai": "เขารู้ทุกอย่างได้อย่างไร?",
						"hindi": "वह सब कुछ ऐसे कैसे जानता है?"
					}
				},
				{
					"content": {
						"korean": "…몰라. 하지만 가끔 섬뜩해. 우리가 뭘 하기도 전에 그가 이미 알고 있는 것 같아.",
						"english": "...I don't know. But sometimes it's creepy. It feels like he already knows before we even do anything.",
						"japanese": "…さあな。でも時々、ゾッとするんだ。俺たちが何かする前から、奴はもう知っているみたいで。",
						"chinese": "…不知道。但有时很诡异。感觉我们还没做什么，他已经知道了。",
						"french": "...Je ne sais pas. Mais parfois c'est effrayant. On dirait qu'il sait déjà avant même qu'on fasse quoi que ce soit.",
						"spanish": "...No lo sé. Pero a veces da escalofríos. Parece que ya lo sabe antes de que hagamos nada.",
						"vietnamese": "...Không biết. Nhưng đôi khi thật rợn người. Cứ như hắn đã biết trước khi chúng ta làm bất cứ điều gì vậy.",
						"thai": "...ไม่รู้สิ แต่บางครั้งก็น่าขนลุก เขารู้ทุกอย่างก่อนที่เราจะทำอะไรเสียอีก",
						"hindi": "…पता नहीं। लेकिन कभी-कभी अजीब लगता है। ऐसा लगता है जैसे हमारे कुछ करने से पहले ही उसे सब पता होता है।"
					},
					"emotion": "sad",
					"speaker": "bex",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그냥 뛰어난 정보 브로커일 뿐이야.",
						"english": "He's just an excellent information broker.",
						"japanese": "ただの優秀な情報ブローカーだろう。",
						"chinese": "他只是个出色的信息掮客而已。",
						"french": "C'est juste un excellent courtier en informations.",
						"spanish": "Es solo un excelente corredor de información.",
						"vietnamese": "Hắn ta chỉ là một tay môi giới thông tin xuất sắc thôi.",
						"thai": "เขาก็แค่โบรกเกอร์ข้อมูลที่เก่งกาจเท่านั้นแหらを",
						"hindi": "वह बस एक बेहतरीन सूचना दलाल है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "bex",
					"emotion": "sad",
					"content": {
						"korean": "단순한 브로커라고 하기엔… 너무 완벽해.",
						"english": "To call him a mere broker... he's too perfect.",
						"japanese": "ただのブローカーと言うには…完璧すぎる。",
						"chinese": "要说他只是个简单的掮客…也太完美了。",
						"french": "Pour être un simple courtier... il est trop parfait.",
						"spanish": "Para ser un simple corredor... es demasiado perfecto.",
						"vietnamese": "Để nói hắn ta chỉ là một môi giới... thì quá hoàn hảo.",
						"thai": "จะบอกว่าเป็นแค่โบรกเกอร์ธรรมดาก็... สมบูรณ์แบบเกินไป",
						"hindi": "उसे केवल एक दलाल कहना… वह बहुत असाधारण है।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "bex"
				},
				{
					"speaker": "bex",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 정보는 아주 중요해. Mnemonic이 직접 '정리'한 거야.",
						"english": "This information is crucial. Mnemonic 'arranged' it personally.",
						"japanese": "この情報は非常に重要だ。Mnemonicが直接『整理』したものだ。",
						"chinese": "这份信息非常重要。是Mnemonic亲自‘整理’的。",
						"french": "Cette information est très importante. C'est Mnemonic qui l'a personnellement 'organisée'.",
						"spanish": "Esta información es muy importante. Mnemonic la 'organizó' personalmente.",
						"vietnamese": "Thông tin này rất quan trọng. Mnemonic đích thân 'sắp xếp' nó.",
						"thai": "ข้อมูลนี้สำคัญมาก Mnemonic 'จัดระเบียบ' มันเองเลย",
						"hindi": "यह जानकारी बहुत महत्वपूर्ण है। Mnemonic ने इसे खुद 'व्यवस्थित' किया है।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "정리? 수집이 아니라?",
						"english": "Organized? Not collected?",
						"japanese": "整理？収集ではなく？",
						"chinese": "整理？不是收集？",
						"french": "Organisée ? Pas collectée ?",
						"spanish": "¿Organizó? ¿No recolectó?",
						"vietnamese": "Sắp xếp? Không phải thu thập?",
						"thai": "จัดระเบียบ? ไม่ใช่รวบรวมเหรอ?",
						"hindi": "व्यवस्थित? एकत्र नहीं?"
					}
				},
				{
					"content": {
						"korean": "그래. 마치… 필요한 정보만 딱 맞춰서 제공하는 느낌? 섬뜩할 정도로.",
						"english": "Yes. It's like... he provides precisely the information needed? Disturbingly so.",
						"japanese": "ああ。まるで…必要な情報だけを完璧に提供する感じ？ぞっとするほどに。",
						"chinese": "对。就像…只提供正好需要的信息？诡异到令人发毛。",
						"french": "Oui. C'est comme s'il... fournissait exactement les informations nécessaires ? À un point effrayant.",
						"spanish": "Sí. Es como si... proporcionara justo la información necesaria? De manera espeluznante.",
						"vietnamese": "Đúng vậy. Cứ như... hắn ta chỉ cung cấp đúng thông tin cần thiết? Đến mức rợn người.",
						"thai": "ใช่แล้ว เหมือนกับว่า... เขาให้ข้อมูลที่จำเป็นเป๊ะๆ? น่าขนลุกเลย",
						"hindi": "हाँ। ऐसा लगता है… कि वह सिर्फ वही जानकारी देता है जिसकी ज़रूरत है? डरावने तरीके से।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "bex"
				},
				{
					"content": {
						"korean": "그게 뭐 대수라고.",
						"english": "What's so special about that?",
						"japanese": "それがどうだって言うんだ。",
						"chinese": "那有什么大不了的。",
						"french": "Et alors ?",
						"spanish": "¿Y eso qué tiene de especial?",
						"vietnamese": "Có gì to tát đâu chứ.",
						"thai": "แล้วมันสำคัญอะไรล่ะ",
						"hindi": "इसमें क्या बड़ी बात है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "점점 더 불안해져. 우리가 Mnemonic의 손바닥 위에서 움직이는 것 같아서…",
						"english": "I'm getting more and more uneasy. It feels like we're just dancing in Mnemonic's palm...",
						"japanese": "だんだん不安になってくる。まるでMnemonicの手のひらの上で踊らされているみたいで…。",
						"chinese": "越来越不安了。我们好像在Mnemonic的掌控之中……",
						"french": "Je suis de plus en plus inquiet. On dirait que nous dansons dans la paume de Mnemonic...",
						"spanish": "Cada vez me siento más inquieto. Parece que estamos bailando en la palma de Mnemonic...",
						"vietnamese": "Tôi càng ngày càng bất an. Cứ như chúng ta đang bị Mnemonic nắm trong lòng bàn tay...",
						"thai": "ฉันเริ่มรู้สึกไม่สบายใจขึ้นเรื่อยๆ เหมือนพวกเรากำลังเต้นรำอยู่บนฝ่ามือของ Mnemonic...",
						"hindi": "मैं और भी बेचैन होता जा रहा हूँ। ऐसा लग रहा है जैसे हम Mnemonic की हथेली पर नाच रहे हों..."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "bex"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "bex",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "더 이상 가지 마. 여긴 너무 위험해.",
						"english": "Don't go any further. It's too dangerous here.",
						"japanese": "これ以上進むな。ここは危険すぎる。",
						"chinese": "别再往前了。这里太危险了。",
						"french": "N'allez pas plus loin. C'est trop dangereux ici.",
						"spanish": "No vayas más lejos. Es demasiado peligroso aquí.",
						"vietnamese": "Đừng đi tiếp nữa. Ở đây quá nguy hiểm.",
						"thai": "อย่าไปต่อเลย ที่นี่อันตรายเกินไป",
						"hindi": "और आगे मत जाओ। यहाँ बहुत ख़तरनाक है।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "bex"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "우린 여기서 멈출 수 없어.",
						"english": "We can't stop here.",
						"japanese": "私たちはここで止まるわけにはいかない。",
						"chinese": "我们不能停在这里。",
						"french": "Nous ne pouvons pas nous arrêter ici.",
						"spanish": "No podemos detenernos aquí.",
						"vietnamese": "Chúng ta không thể dừng lại ở đây.",
						"thai": "เราหยุดอยู่ตรงนี้ไม่ได้",
						"hindi": "हम यहाँ रुक नहीं सकते।"
					}
				},
				{
					"content": {
						"korean": "Mnemonic의 정보가 너희를 이끌고 있어. 이건 단순한 임무가 아니야.",
						"english": "Mnemonic's information is leading you. This isn't just a simple mission.",
						"japanese": "Mnemonicの情報が君たちを導いている。これはただの任務じゃない。",
						"chinese": "Mnemonic的信息正在引导你们。这不只是一项简单的任务。",
						"french": "Les informations de Mnemonic vous guident. Ce n'est pas une simple mission.",
						"spanish": "La información de Mnemonic os está guiando. Esto no es una misión cualquiera.",
						"vietnamese": "Thông tin của Mnemonic đang dẫn dắt các ngươi. Đây không phải là một nhiệm vụ đơn giản.",
						"thai": "ข้อมูลของ Mnemonic กำลังนำทางพวกคุณ นี่ไม่ใช่ภารกิจธรรมดา",
						"hindi": "Mnemonic की जानकारी तुम्हें आगे बढ़ा रही है। यह सिर्फ़ एक साधारण मिशन नहीं है।"
					},
					"speaker": "bex",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그게 무슨 소리야?",
						"english": "What do you mean by that?",
						"japanese": "それはどういう意味だ？",
						"chinese": "你那是什么意思？",
						"french": "Qu'est-ce que tu veux dire par là ?",
						"spanish": "¿Qué quieres decir con eso?",
						"vietnamese": "Ngươi nói vậy là có ý gì?",
						"thai": "นั่นหมายความว่าอะไร?",
						"hindi": "तुम्हारा क्या मतलब है?"
					}
				},
				{
					"content": {
						"korean": "그는 모든 걸 알고 있어. 우리가 무엇을 할지, 어디로 갈지… 전부 다.",
						"english": "He knows everything. What we'll do, where we'll go... everything.",
						"japanese": "彼は全てを知っている。私たちが何をどこでするのか…全てを。",
						"chinese": "他知道一切。我们要做什么，要去哪里……所有的一切。",
						"french": "Il sait tout. Ce que nous allons faire, où nous allons aller... tout.",
						"spanish": "Él lo sabe todo. Qué haremos, a dónde iremos... todo.",
						"vietnamese": "Hắn biết tất cả. Chúng ta sẽ làm gì, đi đâu... tất cả.",
						"thai": "เขารู้ทุกอย่าง สิ่งที่เราจะทำ เราจะไปที่ไหน... ทั้งหมดเลย",
						"hindi": "वह सब कुछ जानता है। हम क्या करेंगे, कहाँ जाएँगे... सब कुछ।"
					},
					"speaker": "bex",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…헛소리 하지 마.",
						"english": "...Don't talk nonsense.",
						"japanese": "…馬鹿なことを言うな。",
						"chinese": "……别胡说八道了。",
						"french": "...Ne dis pas n'importe quoi.",
						"spanish": "...No digas tonterías.",
						"vietnamese": "...Đừng nói nhảm.",
						"thai": "...อย่าพูดเหลวไหล",
						"hindi": "...बकवास मत करो।"
					}
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "어리석은 짓이다. Mnemonic의 정보는 오류가 없다.",
						"english": "Foolish. Mnemonic's information is flawless.",
						"japanese": "「愚かな。Mnemonicの情報に誤りはない。」",
						"chinese": "「愚蠢。Mnemonic的情报没有错误。」",
						"french": "« Insensé. Les informations de Mnemonic sont infaillibles. »",
						"spanish": "« Necio. La información de Mnemonic es impecable. »",
						"vietnamese": "Thật ngốc nghếch. Thông tin của Mnemonic không có lỗi.",
						"thai": "โง่เขลา ข้อมูลของ Mnemonic นั้นไร้ข้อผิดพลาด",
						"hindi": "मूर्खतापूर्ण। Mnemonic की जानकारी त्रुटिरहित है।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "…아직 끝나지 않았어. 우린 반드시 진실을 밝혀낼 거야.",
						"english": "…It's not over yet. We will surely uncover the truth.",
						"japanese": "「…まだ終わっていない。我々は必ず真実を暴き出す。」",
						"chinese": "「…还没结束。我们一定会揭露真相的。」",
						"french": "« …Ce n'est pas encore fini. Nous découvrirons la vérité, c'est certain. »",
						"spanish": "« …Todavía no ha terminado. Sin duda, descubriremos la verdad. »",
						"vietnamese": "…Chưa kết thúc đâu. Chúng ta nhất định sẽ tìm ra sự thật.",
						"thai": "…ยังไม่จบ เราจะเปิดเผยความจริงให้ได้",
						"hindi": "…अभी खत्म नहीं हुआ है। हम निश्चित रूप से सच का पता लगाएंगे।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "허세 부리지 마라. 네 운명은 이미 정해졌다.",
						"english": "Don't bluff. Your fate is already sealed.",
						"japanese": "「虚勢を張るな。お前の運命は既に決まっている。」",
						"chinese": "「别虚张声势了。你的命运早已注定。」",
						"french": "« Ne bluffe pas. Ton destin est déjà scellé. »",
						"spanish": "« No fanfarronees. Tu destino ya está sellado. »",
						"vietnamese": "Đừng khoác lác. Số phận của ngươi đã được định đoạt rồi.",
						"thai": "อย่าโอ้อวดเลย ชะตากรรมของเจ้าถูกกำหนดไว้แล้ว",
						"hindi": "बढ़ावा मत दो। तुम्हारी किस्मत पहले से ही तय है।"
					}
				}
			],
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "도시의 가장 깊은 어둠. 거대한 시스템의 심장이 울리고 있었다.",
						"english": "The deepest darkness of the city. The heart of a gigantic system was throbbing.",
						"japanese": "都市の最も深い闇。巨大なシステムの心臓が鳴り響いていた。",
						"chinese": "城市的至深黑暗。巨大系统的核心正在跳动。",
						"french": "L'obscurité la plus profonde de la ville. Le cœur d'un système gigantesque battait.",
						"spanish": "La oscuridad más profunda de la ciudad. El corazón de un sistema gigantesco latía.",
						"vietnamese": "Bóng tối sâu thẳm nhất của thành phố. Trái tim của một hệ thống khổng lồ đang đập.",
						"thai": "ความมืดมิดที่ลึกที่สุดของเมือง หัวใจของระบบขนาดมหึมากำลังเต้นรัว",
						"hindi": "शहर का सबसे गहरा अँधेरा। एक विशाल प्रणाली का हृदय धड़क रहा था।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "direction",
					"action": "enter",
					"spot": [
						5,
						5
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "감히 여기까지 온 어리석은 자들.",
						"english": "Fools who dared to come this far.",
						"japanese": "よくもここまで来たな、愚か者どもめ。",
						"chinese": "竟敢来到这里的愚蠢之徒。",
						"french": "Stupides créatures qui osent venir jusqu'ici.",
						"spanish": "Necios que osaron llegar hasta aquí.",
						"vietnamese": "Những kẻ ngu xuẩn dám đến tận đây.",
						"thai": "พวกคนโง่ที่กล้ามาถึงที่นี่",
						"hindi": "मूर्ख जो इतनी दूर आने की हिम्मत की।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "비켜. 네가 Mnemonic의 정보망을 지키는 존재인가?",
						"english": "Move. Are you the one guarding Mnemonic's information network?",
						"japanese": "退け。お前がMnemonicの情報網を守る存在なのか？",
						"chinese": "让开。你是守护Mnemonic情报网的存在吗？",
						"french": "Écarte-toi. Es-tu celui qui garde le réseau d'information de Mnemonic ?",
						"spanish": "Muévete. ¿Eres tú quien protege la red de información de Mnemonic?",
						"vietnamese": "Tránh ra. Ngươi là kẻ bảo vệ mạng lưới thông tin của Mnemonic sao?",
						"thai": "หลีกไป แกคือผู้พิทักษ์เครือข่ายข้อมูลของ Mnemonic ใช่ไหม?",
						"hindi": "हटो। क्या तुम Mnemonic के सूचना नेटवर्क के रक्षक हो?"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "쓸데없는 소리. 그저… 방해물을 제거할 뿐.",
						"english": "Nonsense. I merely… remove obstacles.",
						"japanese": "「くだらない。ただ…邪魔者を排除するだけだ。」",
						"chinese": "「废话。我只是…清除障碍。」",
						"french": "« N'importe quoi. Je… ne fais qu'éliminer les obstacles. »",
						"spanish": "« Tonterías. Yo solo… elimino obstáculos. »",
						"vietnamese": "Vô ích. Ta chỉ… loại bỏ chướng ngại vật thôi.",
						"thai": "ไร้สาระ แค่...กำจัดสิ่งกีดขวางเท่านั้น",
						"hindi": "बकवास। मैं तो बस… बाधाएं हटा रहा हूँ।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "막아서면, 쓰러뜨릴 뿐이야.",
						"english": "If you stand in my way, I'll just strike you down.",
						"japanese": "「道を塞ぐなら、打ち倒すまでだ。」",
						"chinese": "「若敢阻拦，我必将其击倒。」",
						"french": "« Si tu me barres la route, je te terrasserai. »",
						"spanish": "« Si me bloqueas el paso, te derribaré. »",
						"vietnamese": "Nếu cản đường, ta sẽ đánh gục.",
						"thai": "ถ้าขวางทาง ก็จะโค่นล้มเท่านั้น",
						"hindi": "यदि तुम रास्ता रोकोगे, तो मैं तुम्हें गिरा दूँगा।"
					}
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "크윽… 얕봤군… 하지만…",
						"english": "Ugh… I underestimated you… But…",
						"japanese": "「ぐっ…見くびっていたか…しかし…」",
						"chinese": "「呃…小看你了…但是…」",
						"french": "« Argh… Je t'ai sous-estimé… Mais… »",
						"spanish": "« Uf… Te subestimé… Pero… »",
						"vietnamese": "Khặc… ta đã đánh giá thấp ngươi… Nhưng mà…",
						"thai": "อึก...ประมาทไปหน่อย...แต่ว่า...",
						"hindi": "उफ़… मैंने तुम्हें कम आँका… पर…"
					}
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "이건 시작일 뿐… Mnemonic은 모든 걸 알고 있다…",
						"english": "This is just the beginning… Mnemonic knows everything…",
						"japanese": "「これは始まりに過ぎない… Mnemonicはすべてを知っている…」",
						"chinese": "「这只是个开始…Mnemonic无所不知…」",
						"french": "« Ce n'est que le début… Mnemonic sait tout… »",
						"spanish": "« Esto es solo el principio… Mnemonic lo sabe todo… »",
						"vietnamese": "Đây chỉ là khởi đầu… Mnemonic biết tất cả…",
						"thai": "นี่เป็นแค่จุดเริ่มต้นเท่านั้น...Mnemonic รู้ทุกสิ่ง...",
						"hindi": "यह तो बस शुरुआत है… Mnemonic सब जानता है…"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "Mnemonic… 대체 너의 정체는…",
						"english": "Mnemonic… What exactly are you…?",
						"japanese": "「Mnemonic…一体、お前の正体は…」",
						"chinese": "「Mnemonic…你到底是谁…」",
						"french": "« Mnemonic… Quelle est donc ton identité… ? »",
						"spanish": "« Mnemonic… ¿Cuál es tu verdadera identidad…? »",
						"vietnamese": "Mnemonic… Rốt cuộc ngươi là ai…?",
						"thai": "Mnemonic...แท้จริงแล้วเจ้าคือใครกันแน่...",
						"hindi": "Mnemonic… आखिर तुम हो कौन…?"
					}
				},
				{
					"content": {
						"korean": "정보망의 수호자가 쓰러졌다. 그러나, Mnemonic의 그림자는 더욱 짙어졌다.",
						"english": "The Guardian of the Network has fallen. Yet, Mnemonic's shadow only deepens.",
						"japanese": "「情報網の守護者は倒れた。しかし、Mnemonicの影はさらに色濃くなった。」",
						"chinese": "「情报网的守护者倒下了。然而，Mnemonic的阴影却更加浓重了。」",
						"french": "« Le Gardien du Réseau est tombé. Pourtant, l'ombre de Mnemonic s'épaissit. »",
						"spanish": "« El Guardián de la Red ha caído. Sin embargo, la sombra de Mnemonic se ha vuelto más densa. »",
						"vietnamese": "Người bảo vệ mạng lưới đã ngã xuống. Nhưng, bóng tối của Mnemonic càng trở nên đậm đặc.",
						"thai": "ผู้พิทักษ์เครือข่ายล้มลงแล้ว อย่างไรก็ตาม เงาของ Mnemonic กลับมืดมิดลง",
						"hindi": "नेटवर्क का संरक्षक गिर गया। फिर भी, Mnemonic की छाया और गहरी हो गई।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "그의 완벽한 정보는 이제 불안감을 넘어선 섬뜩함으로 다가왔다.",
						"english": "His perfect information now felt not just unsettling, but chilling.",
						"japanese": "「彼の完璧な情報は、今や不安を超え、不気味さとして迫ってきた。」",
						"chinese": "「他那完美无缺的情报，如今已超越了不安，变得令人毛骨悚然。」",
						"french": "« Ses informations parfaites ne semblaient plus seulement troublantes, mais carrément effrayantes. »",
						"spanish": "« Su información perfecta ahora resultaba no solo inquietante, sino escalofriante. »",
						"vietnamese": "Thông tin hoàn hảo của hắn giờ đây không chỉ gây bất an mà còn đến mức rợn người.",
						"thai": "ข้อมูลที่สมบูรณ์แบบของเขาตอนนี้ไม่ได้แค่สร้างความไม่สบายใจ แต่ยังน่าขนลุกอีกด้วย",
						"hindi": "उसकी सटीक जानकारी अब सिर्फ़ परेशान करने वाली नहीं, बल्कि डरावनी लग रही थी।"
					}
				}
			]
		}
	]
} as const;
