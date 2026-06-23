export const scenario_desert_sahar_35_01 = {
	"scenario_id": "desert_sahar_35_01",
	"order": 1,
	"act": "intro",
	"theme": "desert",
	"actors": {
		"amir": {
			"id": "mon_0096d602-52ab-4a9c-9cc8-4ff18ed3b655",
			"name": {
				"korean": "아미르",
				"english": "Amir",
				"japanese": "アミール",
				"chinese": "阿米尔",
				"french": "Amir",
				"spanish": "Amir",
				"vietnamese": "Amir",
				"thai": "อาเมียร์",
				"hindi": "अमीर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8cd60fb0-3699-44c4-6425-a3e97eec1800/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/b644dc95-9c27-442e-6dc6-73e5550a0200/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"사막의 끝, 잊혀진 오아시스에 소문이 떠돌았다.",
			" '미친 요리사' 사하르. 그의 연회는 황홀경이라 했다.",
			"굶주림도, 슬픔도, 모든 현실을 지워버리는 맛.",
			"그러나 환상은 언제나 달콤한 독이었다."
		],
		"english": [
			"At the edge of the desert, in a forgotten oasis, a rumor circulated.",
			"'Mad Chef' Sahar. His feast was said to be an ecstasy.",
			"A taste that erased hunger, sorrow, and all reality.",
			"But fantasy was always a sweet poison."
		],
		"japanese": [
			"砂漠の果て、忘れられたオアシスに噂が広まった。",
			"「狂気の料理人」サハル。彼の宴は恍惚だと言われた。",
			"飢えも、悲しみも、あらゆる現実を消し去る味。",
			"しかし、幻想は常に甘い毒だった。"
		],
		"chinese": [
			"在沙漠的尽头，被遗忘的绿洲里，流传着一个谣言。",
			"“疯厨师”萨哈尔。据说他的宴会是一种狂喜。",
			"一种能抹去饥饿、悲伤和所有现实的味道。",
			"然而，幻想永远是甜蜜的毒药。"
		],
		"french": [
			"Au bout du désert, dans une oasis oubliée, une rumeur courait.",
			"'Le Chef Fou' Sahar. Son festin était dit extatique.",
			"Un goût qui effaçait la faim, la tristesse, toute réalité.",
			"Mais la fantaisie était toujours un doux poison."
		],
		"spanish": [
			"Al borde del desierto, en un oasis olvidado, circulaba un rumor.",
			"'El Chef Loco' Sahar. Se decía que su banquete era un éxtasis.",
			"Un sabor que borraba el hambre, la tristeza y toda la realidad.",
			"Pero la fantasía siempre fue un dulce veneno."
		],
		"vietnamese": [
			"Nơi tận cùng sa mạc, tại ốc đảo bị lãng quên, một tin đồn đã lan truyền.",
			"'Đầu bếp điên' Sahar. Yến tiệc của ông ta được kể là một sự mê hoặc.",
			"Một hương vị xóa bỏ đói khát, buồn đau, và mọi thực tại.",
			"Nhưng ảo mộng luôn là một chất độc ngọt ngào."
		],
		"thai": [
			"ที่สุดขอบทะเลทราย ณ โอเอซิสที่ถูกลืม มีข่าวลือแพร่สะพัด",
			"'พ่อครัววิกลจริต' ซาฮาร์ เล่ากันว่างานเลี้ยงของเขาคือความปิติยินดี",
			"รสชาติที่ลบล้างความหิว ความโศกเศร้า และทุกความเป็นจริง",
			"แต่ภาพลวงตาเป็นยาพิษที่หอมหวานเสมอ"
		],
		"hindi": [
			"रेगिस्तान के छोर पर, एक भूली हुई नखलिस्तान में, एक अफवाह फैल गई।",
			"‘पागल शेफ’ सहार। उसकी दावत को परमानंद कहा जाता था।",
			"एक ऐसा स्वाद जो भूख, दुख और सारी हकीकत मिटा दे।",
			"लेकिन कल्पना हमेशा एक मीठा ज़हर थी।"
		]
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
						"korean": "모래바람 휘몰아치는 사막의 작은 오아시스. 낡은 여관의 불빛이 위태롭게 흔들렸다.",
						"english": "A small oasis in the desert, where sandstorms raged. The dim light of an old inn flickered precariously.",
						"japanese": "砂嵐が吹き荒れる砂漠の小さなオアシス。古びた宿屋の灯火が危うく揺れていた。",
						"chinese": "沙漠中一个沙尘暴肆虐的小绿洲。一家旧旅馆的灯光摇曳不定。",
						"french": "Une petite oasis dans le désert, où les tempêtes de sable faisaient rage. La lumière vacillante d'une vieille auberge clignotait dangereusement.",
						"spanish": "Un pequeño oasis en el desierto, azotado por tormentas de arena. La luz tenue de una vieja posada parpadeaba precariamente.",
						"vietnamese": "Một ốc đảo nhỏ giữa sa mạc đầy bão cát. Ánh đèn lờ mờ của quán trọ cũ kỹ lung lay chông chênh.",
						"thai": "โอเอซิสเล็กๆ กลางทะเลทรายที่มีพายุทรายโหมกระหน่ำ แสงไฟจากโรงเตี๊ยมเก่าแก่สั่นไหวอย่างไม่มั่นคง",
						"hindi": "रेगिस्तान में एक छोटा सा नखलिस्तान, जहाँ रेत के तूफान चल रहे थे। एक पुरानी सराय की मद्धम रोशनी खतरे में झिलमिला रही थी।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "여기서 사하르의 연회를 찾을 수 있을까?",
						"english": "Can I find Sahar's feast here?",
						"japanese": "ここでサハルの宴を見つけられるだろうか？",
						"chinese": "我能在这里找到萨哈尔的宴会吗？",
						"french": "Puis-je trouver le festin de Sahar ici ?",
						"spanish": "¿Podré encontrar aquí el banquete de Sahar?",
						"vietnamese": "Tôi có thể tìm thấy bữa tiệc của Sahar ở đây không?",
						"thai": "ฉันจะพบงานเลี้ยงของซาฮาร์ที่นี่ได้ไหม?",
						"hindi": "क्या मुझे यहाँ सहार की दावत मिल सकती है?"
					}
				},
				{
					"duration_ms": 500,
					"speaker": "amir",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "그 연회 말이오? 소문은 꼬리에 꼬리를 물지.",
						"english": "That feast, you say? Rumors spread like wildfire.",
						"japanese": "その宴ですか？噂は後を絶たない。",
						"chinese": "那个宴会？谣言接踵而至。",
						"french": "Ce festin, dites-vous ? Les rumeurs se suivent.",
						"spanish": "¿Ese banquete? Los rumores se extienden como la pólvora.",
						"vietnamese": "Bữa tiệc đó ư? Tin đồn nối đuôi nhau không dứt.",
						"thai": "งานเลี้ยงนั้นหรือ? ข่าวลือมันก็เป็นหางว่าวไปเรื่อยๆ",
						"hindi": "वो दावत? अफवाहें तेजी से फैलती हैं।"
					},
					"speaker": "amir",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_1",
					"content": {
						"korean": "어떤 소문이오?",
						"english": "What kind of rumors?",
						"japanese": "どんな噂ですか？",
						"chinese": "什么谣言？",
						"french": "Quel genre de rumeurs ?",
						"spanish": "¿Qué tipo de rumores?",
						"vietnamese": "Tin đồn gì vậy?",
						"thai": "ข่าวลือแบบไหน?",
						"hindi": "किस तरह की अफवाहें?"
					}
				},
				{
					"speaker": "amir",
					"content": {
						"korean": "한번 맛보면, 세상의 모든 고통을 잊게 된다는… 그런 소문.",
						"english": "A rumor that once you taste it, you forget all the pains of the world...",
						"japanese": "一度味わえば、世の全ての苦痛を忘れるという…そんな噂。",
						"chinese": "一旦品尝，就能忘记世上所有痛苦的…那种谣言。",
						"french": "Une rumeur disant qu'une fois goûté, on oublie toutes les peines du monde...",
						"spanish": "Un rumor de que, una vez que lo pruebas, olvidas todos los dolores del mundo...",
						"vietnamese": "Một tin đồn rằng một khi nếm thử, bạn sẽ quên đi mọi khổ đau trên đời…",
						"thai": "ข่าวลือที่ว่า ถ้าได้ลองชิมสักครั้ง จะลืมความเจ็บปวดทั้งหมดในโลกไปเลย...",
						"hindi": "एक अफवाह कि एक बार जब आप इसे चख लेंगे, तो दुनिया के सभी दर्द भूल जाएंगे…"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "amir",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"speaker": "amir",
					"content": {
						"korean": "사하르, 한때는 왕궁의 수석 요리사였다지. 왕국의 자랑이었어.",
						"english": "Sahar, he was once the head chef of the royal palace, they say. The pride of the kingdom.",
						"japanese": "サハル、かつては王宮の首席料理人だったとか。王国の誇りだった。",
						"chinese": "萨哈尔，据说他曾是王宫的首席厨师。是王国的骄傲。",
						"french": "Sahar, il était autrefois le chef cuisinier du palais royal, disait-on. La fierté du royaume.",
						"spanish": "Sahar, se decía que una vez fue el chef principal del palacio real. El orgullo del reino.",
						"vietnamese": "Sahar, người ta nói rằng ông ta từng là bếp trưởng của hoàng cung. Niềm tự hào của vương quốc.",
						"thai": "ซาฮาร์ ครั้งหนึ่งเคยเป็นหัวหน้าพ่อครัวหลวง ว่ากันว่าเขาคือความภาคภูมิใจของอาณาจักร",
						"hindi": "सहार, वह कभी शाही महल का मुख्य शेफ था, ऐसा कहते हैं। राज्य का गौरव था।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "왕궁 요리사? 그럼 지금은?",
						"english": "Royal chef? And now?",
						"japanese": "王宮の料理人？では今は？",
						"chinese": "王宫厨师？那现在呢？",
						"french": "Chef royal ? Et maintenant ?",
						"spanish": "¿Chef real? ¿Y ahora?",
						"vietnamese": "Đầu bếp hoàng gia? Vậy bây giờ thì sao?",
						"thai": "พ่อครัวหลวง? แล้วตอนนี้ล่ะ?",
						"hindi": "शाही रसोइया? और अब?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "왕국이 사라진 후, 그는 미쳐버렸다고들 해. 슬픈 유산이지.",
						"english": "After the kingdom fell, they say he went mad. A tragic legacy.",
						"japanese": "王国が滅んでから、彼は狂ってしまったと聞く。悲しい遺産だ。",
						"chinese": "王国覆灭后，据说他疯了。一段悲哀的遗产。",
						"french": "Après la chute du royaume, on dit qu'il a sombré dans la folie. Un triste héritage.",
						"spanish": "Tras la caída del reino, dicen que enloqueció. Un legado trágico.",
						"vietnamese": "Sau khi vương quốc sụp đổ, người ta nói ông ta hóa điên. Một di sản bi thương.",
						"thai": "หลังจากอาณาจักรล่มสลาย พวกเขาว่าเขาเสียสติไปแล้ว เป็นมรดกที่น่าเศร้า.",
						"hindi": "राज्य के पतन के बाद, कहते हैं कि वह पागल हो गया। एक दुखद विरासत।"
					},
					"speaker": "amir"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_2",
					"content": {
						"korean": "어째서 미쳤다는 소리를 듣는 거요?",
						"english": "Why do they say he's mad?",
						"japanese": "なぜ狂ったと言われるのですか？",
						"chinese": "他为何被称为疯子？",
						"french": "Pourquoi dit-on qu'il est fou ?",
						"spanish": "¿Por qué dicen que enloqueció?",
						"vietnamese": "Tại sao lại nói ông ta hóa điên?",
						"thai": "ทำไมถึงว่าเขาเสียสติ?",
						"hindi": "उसे पागल क्यों कहा जाता है?"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "amir",
					"content": {
						"korean": "그의 연회에 다녀온 자들은… 한결같이 굶주림을 잊고 허공에 절한다더군.",
						"english": "Those who attended his banquets... all forget hunger and bow to empty air.",
						"japanese": "彼の宴に行った者たちは… 皆、飢えを忘れ虚空に頭を下げるという。",
						"chinese": "那些参加过他宴会的人… 都一致忘却饥饿，向虚空跪拜。",
						"french": "Ceux qui ont assisté à ses festins… oublient tous la faim et s'inclinent devant le vide.",
						"spanish": "Los que asistieron a sus banquetes... todos olvidan el hambre y se postran ante el vacío.",
						"vietnamese": "Những kẻ từng dự yến tiệc của hắn… đều quên đi đói khát và quỳ lạy hư không.",
						"thai": "พวกที่ไปงานเลี้ยงของเขา... ต่างลืมความหิวโหยและก้มกราบอากาศเปล่า.",
						"hindi": "जिन्होंने उसके भोज में भाग लिया... वे सभी भूख भूल जाते हैं और शून्य में प्रणाम करते हैं।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						3,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "amir",
					"action": "enter"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "환상의 맛은 현실의 고통을 지워버려. 잠시나마.",
						"english": "A taste of illusion erases the pain of reality. For a moment.",
						"japanese": "幻の味は現実の苦痛を消し去る。ほんの束の間だが。",
						"chinese": "幻想的滋味能抹去现实的痛苦。仅是片刻。",
						"french": "Un goût d'illusion efface la douleur de la réalité. Pour un instant.",
						"spanish": "Un sabor ilusorio borra el dolor de la realidad. Solo por un momento.",
						"vietnamese": "Hương vị ảo ảnh xóa tan nỗi đau thực tại. Chỉ là tạm thời.",
						"thai": "รสชาติแห่งภาพลวงตาจะลบล้างความเจ็บปวดจากความเป็นจริงไปชั่วขณะ.",
						"hindi": "भ्रम का स्वाद वास्तविकता के दर्द को मिटा देता है। बस कुछ देर के लिए।"
					},
					"speaker": "amir"
				},
				{
					"content": {
						"korean": "잠시나마?",
						"english": "For a moment?",
						"japanese": "束の間だけ？",
						"chinese": "片刻？",
						"french": "Pour un instant ?",
						"spanish": "¿Solo por un momento?",
						"vietnamese": "Tạm thời thôi sao?",
						"thai": "ชั่วขณะเดียว?",
						"hindi": "बस कुछ देर के लिए?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "amir",
					"content": {
						"korean": "깨어나면, 현실은 더욱 잔혹해지지. 빈 모래뿐인 것처럼.",
						"english": "Once awake, reality becomes even crueler. Like barren sand.",
						"japanese": "目覚めれば、現実はさらに残酷になる。空虚な砂漠のように。",
						"chinese": "醒来之后，现实会更加残酷。如同只有空荡的沙砾。",
						"french": "Au réveil, la réalité devient encore plus cruelle. Comme du sable stérile.",
						"spanish": "Al despertar, la realidad se vuelve aún más cruel. Como arena estéril.",
						"vietnamese": "Khi tỉnh giấc, thực tại sẽ càng tàn khốc hơn. Như chỉ còn lại cát trống.",
						"thai": "เมื่อตื่นขึ้นมา ความเป็นจริงจะโหดร้ายยิ่งขึ้น เหมือนเพียงแค่ทรายที่ว่างเปล่า.",
						"hindi": "जागने पर, वास्तविकता और भी क्रूर हो जाती है। जैसे खाली रेत हो।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "그럼 그 연회는… 덫인가?",
						"english": "So that banquet... is it a trap?",
						"japanese": "ではあの宴は… 罠なのか？",
						"chinese": "那么那场宴会… 是个陷阱吗？",
						"french": "Alors ce festin… est-ce un piège ?",
						"spanish": "¿Entonces ese banquete... es una trampa?",
						"vietnamese": "Vậy yến tiệc đó… là một cái bẫy sao?",
						"thai": "ถ้าอย่างนั้นงานเลี้ยงนั่น… เป็นกับดักหรือ?",
						"hindi": "तो वह भोज... क्या एक जाल है?"
					},
					"speaker": "character_3",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "amir",
					"content": {
						"korean": "판단은 당신의 몫이지. 난 그저 소문을 전할 뿐.",
						"english": "The judgment is yours. I merely relay rumors.",
						"japanese": "判断はあなた次第だ。私はただ噂を伝えるのみ。",
						"chinese": "判断权在你。我只是转述传闻罢了。",
						"french": "Le jugement vous appartient. Je ne fais que rapporter des rumeurs.",
						"spanish": "El juicio es tuyo. Yo solo transmito rumores.",
						"vietnamese": "Quyết định là ở bạn. Tôi chỉ là người kể lại tin đồn.",
						"thai": "การตัดสินใจเป็นของคุณ ฉันแค่บอกเล่าข่าวลือเท่านั้น.",
						"hindi": "निर्णय आपका है। मैं बस अफवाहें सुना रहा हूं।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "amir",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이 사막 전체가… 잘못된 희망으로 가득했어. 과거 왕국처럼.",
						"english": "This entire desert... was filled with false hope. Like the old kingdom.",
						"japanese": "この砂漠全体が… 誤った希望で満ちていた。かつての王国のように。",
						"chinese": "这片沙漠… 充满了错误的希望。就像过去的王国一样。",
						"french": "Ce désert tout entier… était rempli de faux espoirs. Comme l'ancien royaume.",
						"spanish": "Todo este desierto... estaba lleno de falsas esperanzas. Como el antiguo reino.",
						"vietnamese": "Cả sa mạc này… tràn ngập những hy vọng sai lầm. Giống như vương quốc xưa.",
						"thai": "ทะเลทรายทั้งหมดนี้… เต็มไปด้วยความหวังที่ผิดพลาด เหมือนอาณาจักรในอดีต.",
						"hindi": "यह पूरा रेगिस्तान... झूठी आशा से भरा था। पिछले राज्य की तरह।"
					},
					"speaker": "amir"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그게 무슨 소리요?",
						"english": "What do you mean by that?",
						"japanese": "それ、どういう意味だ？",
						"chinese": "你这是什么意思？",
						"french": "Que voulez-vous dire par là ?",
						"spanish": "¿Qué significa eso?",
						"vietnamese": "Ý ngươi là sao?",
						"thai": "นั่นหมายความว่าอะไร?",
						"hindi": "इसका क्या मतलब है?"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "굶주림에 지쳐 환상에 매달린 자들. 결국, 모든 것을 잃었지.",
						"english": "Those exhausted by hunger, clinging to illusions. In the end, they lost everything.",
						"japanese": "飢えに疲れ、幻想にすがる者たち。結局、全てを失った。",
						"chinese": "那些因饥饿而疲惫，执着于幻想的人。最终，失去了一切。",
						"french": "Ceux épuisés par la faim, s'accrochant à des illusions. Au final, ils ont tout perdu.",
						"spanish": "Aquellos agotados por el hambre, aferrados a ilusiones. Al final, lo perdieron todo.",
						"vietnamese": "Những kẻ kiệt sức vì đói, bám víu vào ảo ảnh. Cuối cùng, họ mất tất cả.",
						"thai": "ผู้คนที่อ่อนล้าจากความหิวโหย ยึดติดกับภาพลวงตา สุดท้ายก็สูญเสียทุกสิ่งไป",
						"hindi": "वे जो भूख से थककर भ्रमों से चिपके रहे। अंत में, उन्होंने सब कुछ खो दिया।"
					},
					"speaker": "amir"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "우리가 가는 길이… 같은 길이란 말이오?",
						"english": "Is the path we're on... the same path?",
						"japanese": "私たちが進む道は…同じ道なのか？",
						"chinese": "我们所走的道路…是同一条路吗？",
						"french": "Le chemin que nous empruntons… est-ce le même chemin ?",
						"spanish": "¿Es el camino que tomamos… el mismo camino?",
						"vietnamese": "Con đường chúng ta đang đi… có phải là cùng một con đường?",
						"thai": "เส้นทางที่เรากำลังเดิน… คือเส้นทางเดียวกันหรือ?",
						"hindi": "क्या हम जिस राह पर हैं… वही राह है?"
					},
					"speaker": "character_4"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "모르겠어. 다만, 불안한 예감이 들 뿐.",
						"english": "I don't know. I just have an uneasy feeling.",
						"japanese": "分からない。ただ、不安な予感がするだけだ。",
						"chinese": "我不知道。只是，有种不安的预感。",
						"french": "Je ne sais pas. J'ai juste un mauvais pressentiment.",
						"spanish": "No lo sé. Solo tengo un mal presentimiento.",
						"vietnamese": "Tôi không biết. Chỉ là, tôi có một dự cảm không lành.",
						"thai": "ไม่รู้สิ แค่รู้สึกไม่สบายใจ",
						"hindi": "मुझे नहीं पता। बस, एक बेचैनी सी महसूस हो रही है।"
					},
					"speaker": "amir"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "크크… 진실은 고통스러울 뿐. 영원한 환상 속에서 잠들어라.",
						"english": "Heh heh... The truth is merely painful. Slumber eternally in this endless illusion.",
						"japanese": "クク…真実はただ苦痛をもたらすだけだ。永遠の幻想の中で眠りにつけ。",
						"chinese": "呵呵…真相只会带来痛苦。在永恒的幻象中沉睡吧。",
						"french": "Huhu... La vérité n'est que douleur. Dors éternellement dans cette illusion sans fin.",
						"spanish": "Jeje... La verdad solo trae dolor. Duerme eternamente en esta ilusión sin fin.",
						"vietnamese": "Khà khà... Sự thật chỉ mang lại đau khổ mà thôi. Hãy ngủ vùi trong ảo ảnh vĩnh cửu đi.",
						"thai": "ฮ่าๆ... ความจริงมันช่างเจ็บปวดนัก จงหลับใหลไปในภาพลวงตานิรันดร์ซะ.",
						"hindi": "ही ही... सच बस दर्दनाक है। अनंत भ्रम में सदा के लिए सो जाओ।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…아직, 끝나지 않았어. 사하르를 만나야만 해!",
						"english": "...It's not over yet. I *must* find Sahar!",
						"japanese": "…まだ、終わってない。サハルに会わなければ！",
						"chinese": "……还没，结束。我一定要见到萨哈尔！",
						"french": "...Ce n'est pas encore fini. Je *dois* rencontrer Sahar !",
						"spanish": "...Aún no ha terminado. ¡Debo encontrar a Sahar!",
						"vietnamese": "...Vẫn chưa, kết thúc. Mình nhất định phải gặp Sahar!",
						"thai": "...ยังไม่จบ ฉันต้องพบซาฮาร์ให้ได้!",
						"hindi": "...अभी, खत्म नहीं हुआ है। मुझे सहर से मिलना ही होगा!"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…이것은 시작일 뿐… 사하르님의 연회는… 영원하리라…",
						"english": "...This is just the beginning... Lord Sahar's banquet... shall be eternal...",
						"japanese": "…これは始まりに過ぎない…サハル様の宴は…永遠に続くであろう…",
						"chinese": "……这只是开始……萨哈尔大人的宴会……将永恒……",
						"french": "…Ce n'est que le début… Le banquet de Sire Sahar… sera éternel…",
						"spanish": "…Esto es solo el principio… El banquete de Lord Sahar… será eterno…",
						"vietnamese": "…Đây chỉ là khởi đầu… Bữa tiệc của ngài Sahar… sẽ vĩnh cửu…",
						"thai": "…นี่เป็นเพียงจุดเริ่มต้น… งานเลี้ยงของท่านซาฮาร์… จะคงอยู่ชั่วนิรันดร์…",
						"hindi": "…यह तो बस शुरुआत है… सहाहर महाराज का भोज… अनंत रहेगा…"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "제법 강하군. 하지만 더는 속지 않아.",
						"english": "You're quite strong. But I won't be fooled again.",
						"japanese": "なかなかやるな。しかし、もう騙されない。",
						"chinese": "真是相当强大。但，我不会再上当了。",
						"french": "Tu es plutôt fort. Mais je ne me ferai plus avoir.",
						"spanish": "Eres bastante fuerte. Pero ya no me engañarás.",
						"vietnamese": "Ngươi khá mạnh đó. Nhưng ta sẽ không bị lừa nữa đâu.",
						"thai": "ค่อนข้างแข็งแกร่งนะ แต่ข้าจะไม่ถูกหลอกอีกแล้ว",
						"hindi": "तुम काफी मजबूत हो। लेकिन मैं अब और धोखा नहीं खाऊंगा।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "쓰러진 {random_boss}의 잔해가 모래가 되었다. 그러나 환상의 잔영은 여전히 남아, 다음 여정을 재촉했다.",
						"english": "The fallen {random_boss}'s remains turned to sand. Yet, a phantom afterimage lingered, urging the next journey.",
						"japanese": "倒れた{random_boss}の残骸は砂と化した。しかし、幻影の残滓はなお残り、次の旅を急かした。",
						"chinese": "倒下的{random_boss}残骸化为沙尘。然而，幻象的残影依旧存在，催促着下一段旅程。",
						"french": "Les vestiges du {random_boss} vaincu se sont transformés en sable. Pourtant, une image fantomatique persistait, pressant la prochaine étape du voyage.",
						"spanish": "Los restos del {random_boss} caído se convirtieron en arena. Sin embargo, un rastro fantasmal persistía, instando al siguiente viaje.",
						"vietnamese": "Tàn dư của {random_boss} đã gục ngã hóa thành cát. Tuy nhiên, ảo ảnh vẫn còn đó, thôi thúc hành trình tiếp theo.",
						"thai": "ซากปรักหักพังของ {random_boss} ที่ล้มลงกลายเป็นทราย ทว่า ภาพหลอนยังคงอยู่ กระตุ้นให้เดินทางต่อไป.",
						"hindi": "परास्त {random_boss} के अवशेष रेत बन गए। फिर भी, एक भ्रामक छवि शेष रही, अगली यात्रा का आग्रह करती हुई।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "환상의 연회장. 거대한 그림자가 테이블을 에워쌌다.",
						"english": "The Banquet Hall of Illusions. A colossal shadow enveloped the tables.",
						"japanese": "幻想の宴会場。巨大な影がテーブルを取り囲んだ。",
						"chinese": "幻想的宴会厅。巨大的黑影笼罩着餐桌。",
						"french": "La Salle de Banquet des Illusions. Une ombre colossale enveloppait les tables.",
						"spanish": "El Salón de Banquetes de las Ilusiones. Una sombra colosal envolvía las mesas.",
						"vietnamese": "Sảnh tiệc ảo ảnh. Một bóng đen khổng lồ bao trùm lấy những chiếc bàn.",
						"thai": "ห้องจัดเลี้ยงแห่งภาพลวงตา เงาขนาดมหึมาปกคลุมโต๊ะอาหาร",
						"hindi": "भ्रमों का भोज हॉल। एक विशाल छाया ने मेज़ों को घेर लिया।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 자들. 진실 따위에 발버둥 치는군.",
						"english": "Insignificant beings. Struggling for the sake of truth.",
						"japanese": "くだらない者たち。真実などと足掻いている。",
						"chinese": "微不足道的家伙。竟为所谓的真相挣扎。",
						"french": "Êtres insignifiants. Se débattant pour la vérité.",
						"spanish": "Seres insignificantes. Luchando por la verdad.",
						"vietnamese": "Những kẻ thấp kém. Đang vùng vẫy vì cái gọi là sự thật.",
						"thai": "พวกไร้ค่า พยายามดิ้นรนเพื่อความจริง",
						"hindi": "तुच्छ प्राणी। सच के लिए छटपटा रहे हैं।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "네가 {random_boss}의 부하인가!",
						"english": "Are you {random_boss}'s subordinate?!",
						"japanese": "貴様が{random_boss}の部下か！",
						"chinese": "你是{random_boss}的部下吗？！",
						"french": "Es-tu le subordonné de {random_boss} ?!",
						"spanish": "¿Eres el subordinado de {random_boss}?!",
						"vietnamese": "Ngươi là thuộc hạ của {random_boss} sao?!",
						"thai": "แกคือลูกน้องของ {random_boss} งั้นรึ!",
						"hindi": "क्या तुम {random_boss} के अधीन हो?!"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "감히 이 연회를 방해하려 해? 어리석군.",
						"english": "You dare try to disrupt this banquet? Foolish.",
						"japanese": "よくもこの宴を邪魔しようなどと？愚か者め。",
						"chinese": "竟敢试图打扰这场宴会？愚蠢。",
						"french": "Oses-tu tenter de perturber ce banquet ? Insensé.",
						"spanish": "¿Osas intentar perturbar este banquete? Estúpido.",
						"vietnamese": "Ngươi dám phá buổi tiệc này ư? Thật ngu xuẩn.",
						"thai": "กล้าดียังไงมาขัดขวางงานเลี้ยงนี้? โง่เขลา!",
						"hindi": "तुम्हारी हिम्मत कैसे हुई इस दावत में खलल डालने की? मूर्ख।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 15
		}
	]
} as const;
