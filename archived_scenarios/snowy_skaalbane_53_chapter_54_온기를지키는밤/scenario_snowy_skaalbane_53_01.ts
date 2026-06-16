export const scenario_snowy_skaalbane_53_01 = {
	"scenario_id": "snowy_skaalbane_53_01",
	"order": 1,
	"act": "intro",
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
			"잔해탑. 얼어붙은 뼈대가 하늘을 찔렀다.",
			"가장 깊은 골. 온기를 나눌 수밖에 없는 밤.",
			"그러나 가장 추운 밤에, 가장 뜨거운 것이 피어났다.",
			"서로의 등을 맞대고, 우리는 살아남았다."
		],
		"english": [
			"The Ruined Tower. Its frozen skeleton pierced the sky.",
			"The deepest chasm. A night where warmth must be shared.",
			"Yet on the coldest night, the warmest thing blossomed.",
			"Back to back, we survived."
		],
		"japanese": [
			"残骸の塔。凍てついた骨組みが空を貫いた。",
			"最も深い谷。暖かさを分かち合うしかない夜。",
			"しかし、最も寒い夜に、最も熱いものが咲き誇った。",
			"背中合わせで、私たちは生き残った。"
		],
		"chinese": [
			"残骸之塔。冰冷的骨架刺破苍穹。",
			"最深邃的山谷。一个必须分享温暖的夜晚。",
			"然而在最冷的夜晚，最炽热的事物绽放了。",
			"背靠背，我们幸存了下来。"
		],
		"french": [
			"La Tour en ruines. Son squelette gelé transperçait le ciel.",
			"Le gouffre le plus profond. Une nuit où la chaleur devait être partagée.",
			"Pourtant, dans la nuit la plus froide, la chose la plus chaude a fleuri.",
			"Dos à dos, nous avons survécu."
		],
		"spanish": [
			"La Torre Ruinosa. Su esqueleto congelado perforaba el cielo.",
			"El abismo más profundo. Una noche donde la calidez debía ser compartida.",
			"Sin embargo, en la noche más fría, lo más cálido floreció.",
			"Espalda con espalda, sobrevivimos."
		],
		"vietnamese": [
			"Tháp Hoang Tàn. Bộ xương đóng băng của nó đâm xuyên trời.",
			"Hẻm núi sâu nhất. Một đêm phải chia sẻ hơi ấm.",
			"Tuy nhiên, vào đêm lạnh nhất, điều ấm áp nhất đã nở rộ.",
			"Tựa lưng vào nhau, chúng tôi đã sống sót."
		],
		"thai": [
			"หอคอยซากปรักหักพัง โครงกระดูกที่แข็งเป็นน้ำแข็งของมันเสียดแทงท้องฟ้า",
			"หุบเหวลึกที่สุด คืนที่ต้องแบ่งปันความอบอุ่น",
			"ทว่าในคืนที่หนาวที่สุด สิ่งที่อบอุ่นที่สุดกลับเบ่งบาน",
			"เราหันหลังชนกัน และรอดชีวิตมาได้"
		],
		"hindi": [
			"खंडहर मीनार। उसका जमा हुआ ढाँचा आसमान को भेद रहा था।",
			"सबसे गहरी खाई। एक रात जहाँ गर्मी बांटनी होगी।",
			"फिर भी, सबसे ठंडी रात में, सबसे गर्म चीज़ खिल उठी।",
			"एक दूसरे के सहारे, हम बच गए।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "잔해탑의 가장 깊은 골. 얼어붙은 한기가 모든 것을 덮쳤다.",
						"english": "The deepest chasm of the Ruined Tower. Freezing cold enveloped everything.",
						"japanese": "残骸の塔の最も深い谷。凍てつく寒さがすべてを覆った。",
						"chinese": "残骸之塔最深邃的山谷。冰冷的寒气笼罩了一切。",
						"french": "Le gouffre le plus profond de la Tour en ruines. Un froid glacial enveloppait tout.",
						"spanish": "El abismo más profundo de la Torre Ruinosa. Un frío glacial lo envolvía todo.",
						"vietnamese": "Hẻm núi sâu nhất của Tháp Hoang Tàn. Cái lạnh đóng băng bao trùm mọi thứ.",
						"thai": "หุบเหวลึกที่สุดของหอคอยซากปรักหักพัง ความหนาวเย็นเยือกแข็งปกคลุมทุกสิ่ง",
						"hindi": "खंडहर मीनार की सबसे गहरी खाई। जमा देने वाली ठंड ने सब कुछ ढक लिया।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "너무 추워… 손끝이 다 시려.",
						"english": "So cold... My fingertips are all numb.",
						"japanese": "寒すぎる…指先が全部かじかんでる。",
						"chinese": "太冷了……指尖都冻僵了。",
						"french": "Tellement froid... Le bout de mes doigts est tout engourdi.",
						"spanish": "Qué frío... La punta de mis dedos está entumecida.",
						"vietnamese": "Lạnh quá… Đầu ngón tay tôi tê cóng hết rồi.",
						"thai": "หนาวจะตายแล้ว… ปลายนิ้วฉันชาไปหมด",
						"hindi": "बहुत ठंड है… मेरी उंगलियां सुन्न हो गई हैं।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "서로 등을 맞대자. 이렇게라도 온기를 나눠야 해.",
						"english": "Let's stand back to back. We need to share warmth, even like this.",
						"japanese": "背中合わせになろう。こうしてでも、暖かさを分け合わないと。",
						"chinese": "我们背靠背吧。即使这样，也要分享温暖。",
						"french": "Mettons-nous dos à dos. Il faut qu'on partage la chaleur, même comme ça.",
						"spanish": "Pongámonos espalda con espalda. Necesitamos compartir el calor, aunque sea así.",
						"vietnamese": "Chúng ta hãy tựa lưng vào nhau. Phải chia sẻ hơi ấm, dù là như thế này.",
						"thai": "มาหันหลังชนกันเถอะ เราต้องแบ่งปันความอบอุ่นกัน ถึงแม้จะเป็นแบบนี้ก็ตาม",
						"hindi": "आओ, पीठ से पीठ सटाकर खड़े हों। ऐसे ही सही, हमें गर्मी बांटनी होगी।"
					},
					"speaker": "character_1",
					"emotion": "base"
				},
				{
					"spot": [
						4,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "frost"
				},
				{
					"emotion": "sad",
					"speaker": "frost",
					"type": "speech",
					"content": {
						"korean": "…아, 씨. 이러다 얼어 죽겠네.",
						"english": "...Ugh. I'm gonna freeze to death like this.",
						"japanese": "…ああ、くそ。このままだと凍え死ぬぞ。",
						"chinese": "……啊，该死。这样下去我会冻死的。",
						"french": "...Ah, merde. Je vais mourir de froid comme ça.",
						"spanish": "...Joder. Así me voy a morir congelado.",
						"vietnamese": "…Chết tiệt. Cứ thế này chắc tôi chết cóng mất.",
						"thai": "…โอ้ย ให้ตายเถอะ ถ้าเป็นแบบนี้ฉันคงแข็งตายแน่",
						"hindi": "…उफ़। ऐसे तो मैं जम कर मर जाऊंगा।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "프로스트, 너 괜찮아? 제일 추워하는 것 같은데.",
						"english": "Frost, are you okay? You seem to be the coldest.",
						"japanese": "フロスト、大丈夫？君が一番寒がってるみたいだけど。",
						"chinese": "弗罗斯特，你还好吗？你好像最冷。",
						"french": "Frost, ça va ? Tu as l'air d'être le plus frigorifié.",
						"spanish": "Frost, ¿estás bien? Parece que eres el que más frío tiene.",
						"vietnamese": "Frost, cậu ổn không? Trông cậu có vẻ lạnh nhất.",
						"thai": "ฟรอสต์ เธอไม่เป็นไรนะ? ดูเหมือนเธอจะหนาวที่สุดเลย",
						"hindi": "फ्रॉस्ट, तुम ठीक हो? तुम सबसे ज़्यादा ठिठुर रहे हो।"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "frost",
					"content": {
						"korean": "괜찮아… (외투를 벗어 character_any에게 덮어주며) …이걸로라도 버텨.",
						"english": "I'm fine... (Takes off their coat and drapes it over character_any) ...Endure with this, at least.",
						"japanese": "大丈夫… (コートを脱ぎ、character_anyにかぶせながら) …これでも耐えて。",
						"chinese": "我没事……（脱下外套，披在character_any身上）……至少用这个撑着。",
						"french": "Ça va... (Enlevant son manteau et le drapant sur character_any) ...Tiens bon avec ça, au moins.",
						"spanish": "Estoy bien... (Se quita el abrigo y se lo echa encima a character_any) ...Soporta con esto, al menos.",
						"vietnamese": "Tớ ổn… (Cởi áo khoác ra và đắp cho character_any) …Ít nhất hãy chịu đựng bằng cái này.",
						"thai": "ฉันไม่เป็นไร… (ถอดเสื้อโค้ทออกแล้วคลุมให้ character_any) …ทนด้วยสิ่งนี้ก็ยังดี",
						"hindi": "मैं ठीक हूँ… (अपना कोट उतारकर character_any को ओढ़ाते हुए) …कम से कम इससे ही सहारा लो।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "너는?",
						"english": "And you?",
						"japanese": "あなたは？",
						"chinese": "你呢？",
						"french": "Et toi ?",
						"spanish": "¿Y tú?",
						"vietnamese": "Còn bạn?",
						"thai": "แล้วคุณล่ะ?",
						"hindi": "और तुम?"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "난 괜찮아. …온기를 지키는 게 중요해.",
						"english": "I'm fine. ...Staying warm is key.",
						"japanese": "私は大丈夫。…温かさを保つことが大切だよ。",
						"chinese": "我没事。……保持温暖很重要。",
						"french": "Je vais bien. …Garder la chaleur est essentiel.",
						"spanish": "Estoy bien. …Es importante mantener el calor.",
						"vietnamese": "Tôi ổn. ...Giữ ấm là quan trọng.",
						"thai": "ฉันไม่เป็นไร ...การรักษาความอบอุ่นเป็นสิ่งสำคัญ",
						"hindi": "मैं ठीक हूँ। ...गर्मी बनाए रखना ज़रूरी है।"
					},
					"type": "speech",
					"speaker": "frost"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "frost",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "아직도 한기가 가시질 않아. 끝없이 파고드는 것 같아.",
						"english": "The chill still lingers. It feels like it's endlessly digging in.",
						"japanese": "まだ寒気が抜けない。果てしなく深く食い込むようだ。",
						"chinese": "寒意仍未消退。感觉像是在无止境地侵蚀。",
						"french": "Le froid persiste. Il semble s'infiltrer sans fin.",
						"spanish": "El frío aún no se va. Parece que se adentra sin fin.",
						"vietnamese": "Cái lạnh vẫn chưa tan. Cứ như nó đang len lỏi không ngừng.",
						"thai": "ความหนาวยังไม่หายไปเลย รู้สึกเหมือนมันกำลังกัดกินไม่หยุด",
						"hindi": "ठंड अभी भी नहीं जा रही। लगता है, यह अनंत तक घुसती जा रही है।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이 추위가, 우리 마음까지 얼리는 것 같아.",
						"english": "This cold feels like it's freezing even our hearts.",
						"japanese": "この寒さが、私たちの心まで凍らせるようだ。",
						"chinese": "这寒冷，仿佛连我们的心都要冻结了。",
						"french": "Ce froid semble nous glacer le cœur.",
						"spanish": "Este frío parece congelar hasta nuestros corazones.",
						"vietnamese": "Cái lạnh này, cứ như nó đang đóng băng cả trái tim ta.",
						"thai": "ความหนาวนี้ เหมือนกำลังจะทำให้ใจเราแข็งไปด้วย",
						"hindi": "यह ठंड, हमारे दिल तक जमा रही है।"
					},
					"type": "speech",
					"speaker": "character_2"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "괜찮아. 마음은 따뜻하게 지켜야 해. 그래야 살아남아.",
						"english": "It's alright. Keep your heart warm. That's how you survive.",
						"japanese": "大丈夫。心は温かく保たないと。そうすれば生き残れる。",
						"chinese": "没关系。心要保持温暖。这样才能活下去。",
						"french": "Ça va. Il faut garder nos cœurs au chaud. C'est comme ça qu'on survit.",
						"spanish": "Está bien. Debemos mantener nuestros corazones cálidos. Así sobrevivimos.",
						"vietnamese": "Không sao đâu. Phải giữ cho trái tim ấm áp. Có thế mới sống sót được.",
						"thai": "ไม่เป็นไรหรอก เราต้องรักษาใจให้อบอุ่นไว้ ถึงจะรอดได้",
						"hindi": "ठीक है। दिल को गर्म रखना होगा। तभी बच पाएंगे।"
					},
					"type": "speech",
					"speaker": "frost"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "frost",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						2
					]
				},
				{
					"content": {
						"korean": "이렇게 추운데… 어떻게 마음을 따뜻하게 지켜?",
						"english": "It's so cold... how can we keep our hearts warm?",
						"japanese": "こんなに寒いのに…どうやって心を温かく保つの？",
						"chinese": "这么冷……怎么才能保持心境温暖？",
						"french": "Avec ce froid… comment garder le cœur chaud ?",
						"spanish": "Con este frío… ¿cómo podemos mantener nuestros corazones cálidos?",
						"vietnamese": "Lạnh thế này… làm sao mà giữ ấm trái tim được?",
						"thai": "หนาวขนาดนี้... จะรักษาใจให้อบอุ่นได้ยังไง?",
						"hindi": "इतनी ठंड में... दिल को गर्म कैसे रखें?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "frost",
					"content": {
						"korean": "서로의 온기를 나누는 거야. 그게 우리를 지켜줄 거야.",
						"english": "We share each other's warmth. That will protect us.",
						"japanese": "お互いの温もりを分け合うんだ。それが私たちを守ってくれる。",
						"chinese": "分享彼此的温暖。那会保护我们。",
						"french": "Nous partageons notre chaleur. C'est ce qui nous protégera.",
						"spanish": "Compartimos el calor del otro. Eso nos protegerá.",
						"vietnamese": "Chúng ta chia sẻ hơi ấm cho nhau. Điều đó sẽ bảo vệ chúng ta.",
						"thai": "เราแบ่งปันความอบอุ่นให้กัน นั่นแหละจะปกป้องเราได้",
						"hindi": "एक-दूसरे की गर्मी बांटो। वही हमें बचाएगी।"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "저 위로 가면 더 추워질 텐데… 갈 수 있을까?",
						"english": "It'll get even colder up there... can we make it?",
						"japanese": "あの上がるともっと寒くなるのに…行けるかな？",
						"chinese": "往上走会更冷吧……我们能去吗？",
						"french": "Il fera encore plus froid là-haut… Pourrons-nous y aller ?",
						"spanish": "Más arriba hará más frío… ¿Podremos ir?",
						"vietnamese": "Lên trên đó sẽ còn lạnh hơn… Liệu chúng ta có đi được không?",
						"thai": "ถ้าขึ้นไปข้างบนจะยิ่งหนาวขึ้นไปอีก... เราจะไปไหวเหรอ?",
						"hindi": "ऊपर और ठंड होगी... क्या हम जा पाएंगे?"
					},
					"type": "speech",
					"speaker": "character_3"
				},
				{
					"emotion": "base",
					"speaker": "frost",
					"type": "speech",
					"content": {
						"korean": "가야지. 여기서 멈추면, 모든 게 얼어붙을 뿐이야.",
						"english": "We have to go. If we stop here, everything will just freeze.",
						"japanese": "行かなきゃ。ここで止まれば、すべてが凍りつくだけだ。",
						"chinese": "得去。如果停在这里，一切都只会冻结。",
						"french": "Il faut y aller. Si on s'arrête ici, tout va geler.",
						"spanish": "Hay que ir. Si nos detenemos aquí, todo se congelará.",
						"vietnamese": "Phải đi chứ. Nếu dừng ở đây, mọi thứ sẽ đóng băng hết.",
						"thai": "ต้องไปสิ ถ้าหยุดอยู่ตรงนี้ ทุกอย่างก็จะกลายเป็นน้ำแข็งไปหมด",
						"hindi": "जाना होगा। अगर यहाँ रुके, तो सब कुछ जम जाएगा।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "frost"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "한기가 점점 더 깊어졌다. 심장이 얼어붙는 것 같았다.",
						"english": "The chill grew deeper and deeper. It felt as if my heart was freezing.",
						"japanese": "寒気がどんどん深まった。心臓が凍りつくようだった。",
						"chinese": "寒意越来越深。仿佛心脏都要冻结了。",
						"french": "Le froid s'intensifiait. On aurait dit que mon cœur gelait.",
						"spanish": "El frío se hacía cada vez más profundo. Sentía que mi corazón se congelaba.",
						"vietnamese": "Cái lạnh ngày càng sâu hơn. Cứ như trái tim tôi đang đóng băng vậy.",
						"thai": "ความหนาวเย็นยิ่งลึกซึ้งขึ้นเรื่อยๆ รู้สึกเหมือนหัวใจกำลังจะแข็ง",
						"hindi": "ठंड बढ़ती ही जा रही थी। ऐसा लग रहा था जैसे मेरा दिल जम रहा हो।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "(몸을 떨며) 뭔가… 느껴져. 이 추위, 예사롭지 않아.",
						"english": "(Shuddering) I… I feel something. This cold is unnatural.",
						"japanese": "(体を震わせながら)何か…感じる。この寒さ、尋常じゃない。",
						"chinese": "(颤抖着)我…我感觉到什么了。这股寒意，非同寻常。",
						"french": "(Frissonnant) Je… je ressens quelque chose. Ce froid n'est pas ordinaire.",
						"spanish": "(Temblando) Siento… siento algo. Este frío no es normal.",
						"vietnamese": "(Run rẩy) Mình… mình cảm thấy gì đó. Cái lạnh này thật bất thường.",
						"thai": "(ตัวสั่น) ฉัน… ฉันรู้สึกได้บางอย่าง ความหนาวนี้ไม่ธรรมดาเลย",
						"hindi": "(कांपते हुए) कुछ… महसूस हो रहा है। यह ठंड असामान्य है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그래. 저 안에는… 우리가 생각하는 것보다 더 큰 냉기가 있어.",
						"english": "Indeed. Inside there's… a cold greater than we can imagine.",
						"japanese": "ああ。あの奥には…私たちが想像するよりも、もっと大きな冷気がある。",
						"chinese": "没错。那里面…有比我们想象的更强大的寒意。",
						"french": "Oui. Là-dedans… il y a un froid bien plus intense que nous ne l'imaginons.",
						"spanish": "Sí. Ahí dentro hay… un frío mayor de lo que imaginamos.",
						"vietnamese": "Đúng vậy. Bên trong đó… có một luồng khí lạnh lớn hơn chúng ta tưởng.",
						"thai": "ใช่แล้ว ข้างในนั้น…มีความหนาวเย็นที่ยิ่งใหญ่กว่าที่เราคิดไว้",
						"hindi": "हाँ। वहाँ अंदर… हमारी कल्पना से भी ज़्यादा ठंडक है।"
					},
					"type": "speech",
					"speaker": "frost"
				},
				{
					"emotion": "base",
					"speaker": "character_4",
					"type": "speech",
					"content": {
						"korean": "그래도… 함께라면.",
						"english": "Still… if we're together.",
						"japanese": "それでも…一緒なら。",
						"chinese": "即便如此…只要我们在一起。",
						"french": "Pourtant… si nous sommes ensemble.",
						"spanish": "Aun así… si estamos juntos.",
						"vietnamese": "Dù vậy… nếu chúng ta ở cùng nhau.",
						"thai": "แต่ถึงอย่างนั้น… ถ้าเราอยู่ด้วยกัน",
						"hindi": "फिर भी… अगर हम साथ हों तो।"
					}
				},
				{
					"speaker": "frost",
					"type": "speech",
					"content": {
						"korean": "당연하지. 우리는 혼자가 아니야.",
						"english": "Of course. We're not alone.",
						"japanese": "当然だ。私たちは一人じゃない。",
						"chinese": "那是当然。我们不是孤单一人。",
						"french": "Évidemment. Nous ne sommes pas seuls.",
						"spanish": "Claro. No estamos solos.",
						"vietnamese": "Tất nhiên rồi. Chúng ta không đơn độc.",
						"thai": "แน่นอนอยู่แล้ว เราไม่ได้อยู่คนเดียว",
						"hindi": "बेशक। हम अकेले नहीं हैं।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "잔해탑의 가장 깊은 곳. 얼어붙은 심장이 고동치는 공간이었다.",
						"english": "The deepest part of the Ruined Tower. A place where a frozen heart pulsed.",
						"japanese": "瓦礫の塔の最深部。凍てついた心臓が鼓動する空間だった。",
						"chinese": "残骸塔的最深处。那是冰冻之心跳动的地方。",
						"french": "La partie la plus profonde de la Tour en ruines. Un lieu où un cœur gelé battait.",
						"spanish": "La parte más profunda de la Torre en Ruinas. Un lugar donde un corazón congelado latía.",
						"vietnamese": "Nơi sâu thẳm nhất của Tháp Hoang Tàn. Một không gian nơi trái tim băng giá đang đập.",
						"thai": "ส่วนที่ลึกที่สุดของหอคอยซากปรักหักพัง เป็นสถานที่ที่หัวใจที่เย็นยะเยือกกำลังเต้นอยู่",
						"hindi": "खंडहर टावर का सबसे गहरा हिस्सा। एक ऐसी जगह जहाँ एक जमा हुआ दिल धड़क रहा था।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "저거… 뭐야?",
						"english": "That… what is it?",
						"japanese": "あれ…何だ？",
						"chinese": "那…是什么？",
						"french": "Ça… qu'est-ce que c'est ?",
						"spanish": "Eso… ¿qué es?",
						"vietnamese": "Cái đó… là gì vậy?",
						"thai": "นั่น…อะไรน่ะ?",
						"hindi": "वह… क्या है?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "…온기라니. 어리석은 것들.",
						"english": "…Warmth, you say. Foolish mortals.",
						"japanese": "…温かさだと。愚かな者たちめ。",
						"chinese": "…温暖？愚蠢的东西。",
						"french": "…De la chaleur, dites-vous. Créatures insensées.",
						"spanish": "…¿Calidez? Necios.",
						"vietnamese": "…Hơi ấm ư. Những kẻ ngu ngốc.",
						"thai": "…ความอบอุ่นเหรอ พวกโง่เอ๊ย",
						"hindi": "…गर्मी, तुम कहते हो। मूर्ख प्राणी।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…{random_boss}!",
						"english": "…{random_boss}!",
						"japanese": "…{random_boss}！",
						"chinese": "…{random_boss}！",
						"french": "…{random_boss} !",
						"spanish": "…¡{random_boss}!",
						"vietnamese": "…{random_boss}!",
						"thai": "…{random_boss}!",
						"hindi": "…{random_boss}!"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "모든 것을 얼리고, 흡수해야만… 완벽해지지. 너희도 마찬가지다.",
						"english": "Only by freezing and absorbing everything… can I achieve perfection. You are no different.",
						"japanese": "全てを凍らせ、吸収してこそ…完璧になる。お前たちも例外ではない。",
						"chinese": "只有冻结并吸收一切…才能变得完美。你们也不例外。",
						"french": "Ce n'est qu'en gelant et en absorbant tout… que je deviendrai parfait. Vous ne ferez pas exception.",
						"spanish": "Solo congelando y absorbiendo todo… lograré la perfección. Ustedes no son diferentes.",
						"vietnamese": "Chỉ bằng cách đóng băng và hấp thụ mọi thứ… ta mới có thể trở nên hoàn hảo. Các ngươi cũng vậy thôi.",
						"thai": "มีเพียงการแช่แข็งและดูดกลืนทุกสิ่ง…เท่านั้นที่จะทำให้สมบูรณ์แบบได้ พวกเจ้าก็ไม่ต่างกัน",
						"hindi": "सब कुछ जमाकर और सोखकर ही… मैं पूर्ण बनूँगा। तुम भी कोई अलग नहीं हो।"
					},
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 무너졌다. 냉기가 흩어졌다.",
						"english": "The massive shadow crumbled. The cold dispersed.",
						"japanese": "巨大な影が崩れ落ちた。冷気が霧散した。",
						"chinese": "巨大的阴影崩塌了。寒气消散而去。",
						"french": "L'ombre gigantesque s'est effondrée. Le froid s'est dispersé.",
						"spanish": "La gigantesca sombra se derrumbó. El frío se dispersó.",
						"vietnamese": "Bóng đen khổng lồ sụp đổ. Hơi lạnh tan biến.",
						"thai": "เงาขนาดยักษ์พังทลายลง ความหนาวเย็นได้สลายไปแล้ว",
						"hindi": "विशाल छाया ढह गई। ठंडक बिखर गई।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…온기는… 다시… 돌아올…",
						"english": "...Warmth... will... return...",
						"japanese": "「…温もりは…再び…戻って…」",
						"chinese": "“……温暖……会再次……回来……”",
						"french": "...La chaleur... reviendra...",
						"spanish": "...El calor... volverá...",
						"vietnamese": "...Hơi ấm... sẽ... trở lại...",
						"thai": "...ความอบอุ่น... จะ... กลับมา...",
						"hindi": "...गर्मी... वापस... आएगी..."
					},
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "끝났어…",
						"english": "It's over...",
						"japanese": "「終わった…」",
						"chinese": "“结束了……”",
						"french": "C'est fini...",
						"spanish": "Se acabó...",
						"vietnamese": "Kết thúc rồi...",
						"thai": "จบแล้ว...",
						"hindi": "खत्म हो गया..."
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그러나 그들의 등은 여전히 따뜻했다. 이 추운 밤을 견뎌낸, 서로의 온기였다.",
						"english": "Yet their backs remained warm. It was the warmth of each other, enduring this cold night.",
						"japanese": "「しかし、彼らの背中はまだ温かかった。この寒い夜を耐え抜いた、互いの温もりだった。」",
						"chinese": "“然而，他们的背脊依然温暖。那是彼此的温暖，让他们熬过了这个寒冷的夜晚。”",
						"french": "Pourtant, leurs dos restaient chauds. C'était la chaleur l'un de l'autre, endurant cette nuit froide.",
						"spanish": "Sin embargo, sus espaldas seguían cálidas. Era el calor mutuo, soportando esta fría noche.",
						"vietnamese": "Tuy nhiên, lưng của họ vẫn ấm áp. Đó là hơi ấm của nhau, đã cùng nhau vượt qua đêm lạnh giá này.",
						"thai": "แต่หลังของพวกเขายังคงอบอุ่น มันคือความอบอุ่นของกันและกัน ที่ช่วยให้พวกเขาทนทานผ่านค่ำคืนอันหนาวเหน็บนี้",
						"hindi": "फिर भी उनकी पीठ गर्म रही। यह एक-दूसरे की गर्माहट थी, जो इस ठंडी रात को सह गई।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "탑의 진실은 아직 멀었다. 하지만 그들은, 함께라면 견딜 수 있다는 것을 알았다.",
						"english": "The truth of the tower was still distant. But they knew, together, they could endure.",
						"japanese": "「塔の真実はまだ遠かった。しかし、彼らは、一緒なら耐えられることを知っていた。」",
						"chinese": "“塔的真相仍遥远。但他们知道，只要在一起，就能坚持下去。”",
						"french": "La vérité de la tour était encore lointaine. But ils savaient que, ensemble, ils pourraient endurer.",
						"spanish": "La verdad de la torre aún estaba lejos. Pero sabían que, juntos, podrían resistir.",
						"vietnamese": "Sự thật về ngọn tháp vẫn còn xa vời. Nhưng họ biết rằng, nếu cùng nhau, họ có thể chịu đựng được.",
						"thai": "ความจริงของหอคอยยังคงห่างไกล แต่พวกเขารู้ว่า หากอยู่ด้วยกัน พวกเขาก็จะทนทานได้",
						"hindi": "मीनार की सच्चाई अभी भी दूर थी। लेकिन वे जानते थे कि, एक साथ, वे सह सकते हैं।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "압도적인 냉기가 동행단을 덮쳤다.",
						"english": "Overwhelming cold engulfed the party.",
						"japanese": "「圧倒的な冷気が同行者を襲った。」",
						"chinese": "“压倒性的寒冷笼罩了队伍。”",
						"french": "Un froid écrasant a englouti la compagnie.",
						"spanish": "Un frío abrumador envolvió al grupo.",
						"vietnamese": "Hơi lạnh áp đảo bao trùm đoàn người.",
						"thai": "ความหนาวเย็นที่ท่วมท้นปกคลุมคณะเดินทาง",
						"hindi": "अत्यधिक ठंड ने दल को घेर लिया।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "너희의 온기 따위… 한 줌의 재로 사라지리라.",
						"english": "Your warmth... shall vanish into a handful of ashes.",
						"japanese": "「お前たちの温もりなど… 一握りの灰と消え去るだろう。」",
						"chinese": "“你们的温暖……终将化为一捧灰烬消散。”",
						"french": "Votre chaleur... disparaîtra en une poignée de cendres.",
						"spanish": "Vuestra calidez... se desvanecerá en un puñado de cenizas.",
						"vietnamese": "Hơi ấm của các ngươi... sẽ tan biến thành một nắm tro bụi.",
						"thai": "ความอบอุ่นของพวกเจ้า... จะสลายไปเป็นเถ้าธุลีเพียงกำมือ",
						"hindi": "तुम्हारी गर्माहट... मुट्ठी भर राख में गायब हो जाएगी।"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…아직 끝나지 않았어!",
						"english": "...It's not over yet!",
						"japanese": "「…まだ終わってない！」",
						"chinese": "“……还没结束！”",
						"french": "...Ce n'est pas encore fini !",
						"spanish": "¡...Todavía no ha terminado!",
						"vietnamese": "...Vẫn chưa kết thúc!",
						"thai": "...ยังไม่จบ!",
						"hindi": "...अभी खत्म नहीं हुआ है!"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "크크… 다시 와라. 너희의 절망을 즐겨주마.",
						"english": "Heh heh... Come again. I'll relish your despair.",
						"japanese": "「クク…また来い。お前たちの絶望を楽しんでやろう。」",
						"chinese": "“呵呵……再来吧。我会享受你们的绝望。”",
						"french": "Hé hé... Revenez. Je me délecterai de votre désespoir.",
						"spanish": "Je je... Vuelve. Disfrutaré de vuestra desesperación.",
						"vietnamese": "Khà khà... Hãy quay lại. Ta sẽ tận hưởng sự tuyệt vọng của các ngươi.",
						"thai": "คิกคิก... มาอีกสิ ข้าจะรื่นรมย์กับความสิ้นหวังของพวกเจ้า",
						"hindi": "हा हा... फिर आना। मैं तुम्हारी निराशा का आनंद लूंगा।"
					},
					"emotion": "happy"
				}
			],
			"id": 15
		}
	]
} as const;
