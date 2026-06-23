export const scenario_modern_memento_9_02 = {
	"scenario_id": "modern_memento_9_02",
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
			"잊힌 맹세의 흔적을 쫓아, 도시의 가장 깊은 그림자로.",
			"진실은 복잡했고, 모든 정보는 서로를 모순했다.",
			"과연 Memento는 도시의 파괴자일까, 아니면 가짜 구원에 갇힌 피해자일까.",
			"새로운 그림자가 다가온다. 그의 이름은 Dax. 그는 맹세의 도구였다."
		],
		"english": [
			"Following the forgotten vow's trail, into the city's deepest shadows.",
			"The truth was complex, and all information contradicted itself.",
			"Is Memento truly the city's destroyer, or a victim trapped in false salvation?",
			"A new shadow approaches. His name is Dax. He was an instrument of the vow."
		],
		"japanese": [
			"忘れられた誓いの痕跡を追い、都市の最も深い影へ。",
			"真実は複雑で、すべての情報は互いに矛盾していた。",
			"果たしてMementoは都市の破壊者なのか、それとも偽りの救済に囚われた犠牲者なのか。",
			"新たな影が迫る。彼の名はDax。彼は誓いの道具だった。"
		],
		"chinese": [
			"追寻被遗忘誓言的痕迹，深入城市最深的阴影。",
			"真相错综复杂，所有信息都自相矛盾。",
			"Memento究竟是城市的毁灭者，还是被困于虚假救赎的受害者？",
			"一个新的身影正在逼近。他的名字是Dax。他是誓言的工具。"
		],
		"french": [
			"Suivant la trace du serment oublié, dans les ombres les plus profondes de la ville.",
			"La vérité était complexe, et toutes les informations se contredisaient.",
			"Memento est-il vraiment le destructeur de la ville, ou une victime piégée dans une fausse rédemption ?",
			"Une nouvelle ombre approche. Son nom est Dax. Il était un instrument du serment."
		],
		"spanish": [
			"Siguiendo el rastro del juramento olvidado, hacia las sombras más profundas de la ciudad.",
			"La verdad era compleja y toda la información se contradecía.",
			"¿Es Memento realmente el destructor de la ciudad, o una víctima atrapada en una falsa salvación?",
			"Una nueva sombra se acerca. Su nombre es Dax. Él era un instrumento del juramento."
		],
		"vietnamese": [
			"Theo dấu vết lời thề bị lãng quên, vào những bóng tối sâu nhất của thành phố.",
			"Sự thật phức tạp, và mọi thông tin đều mâu thuẫn lẫn nhau.",
			"Liệu Memento có phải là kẻ hủy diệt thành phố, hay một nạn nhân bị mắc kẹt trong sự cứu rỗi giả dối?",
			"Một bóng tối mới đang đến gần. Tên anh ta là Dax. Anh ta là công cụ của lời thề."
		],
		"thai": [
			"ตามรอยคำสาบานที่ถูกลืมเลือน สู่เงามืดที่ลึกที่สุดของเมือง",
			"ความจริงนั้นซับซ้อน และข้อมูลทั้งหมดขัดแย้งกันเอง",
			"แท้จริงแล้ว Memento คือผู้ทำลายเมือง หรือเป็นเหยื่อที่ติดอยู่ในความรอดจอมปลอมกันแน่",
			"เงาใหม่กำลังคืบคลานเข้ามา ชื่อของเขาคือ Dax เขาคือเครื่องมือของคำสาบาน"
		],
		"hindi": [
			"भूले हुए प्रण के निशान का पीछा करते हुए, शहर की सबसे गहरी छाया में।",
			"सच जटिल था, और सारी जानकारी एक-दूसरे का खंडन करती थी।",
			"क्या Memento वास्तव में शहर का विनाशक है, या झूठी मुक्ति में फंसा एक पीड़ित?",
			"एक नई परछाई आ रही है। उसका नाम डैक्स है। वह प्रण का एक साधन था।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "Bex의 정보를 따라 '잊힌 맹세'의 단서를 추적했다. 낡은 문서 조각이 발견됐다.",
						"english": "Following Bex's intel, I tracked clues of the 'Forgotten Vow'. A piece of an old document was found.",
						"japanese": "Bexの情報に従い、「忘れられた誓い」の手がかりを追跡した。古い文書の切れ端が発見された。",
						"chinese": "遵循Bex的情报，我追查“被遗忘的誓言”的线索。发现了一张旧文件碎片。",
						"french": "Suivant les informations de Bex, j'ai traqué les indices du 'Serment Oublié'. Un fragment d'un vieux document a été trouvé.",
						"spanish": "Siguiendo la información de Bex, rastreé pistas del 'Juramento Olvidado'. Se encontró un trozo de un documento antiguo.",
						"vietnamese": "Theo thông tin của Bex, tôi đã theo dõi manh mối của 'Lời Thề Bị Lãng Quên'. Một mảnh tài liệu cũ đã được tìm thấy.",
						"thai": "ตามข้อมูลของ Bex ฉันติดตามเบาะแสของ 'คำสาบานที่ถูกลืมเลือน' พบชิ้นส่วนเอกสารเก่า",
						"hindi": "बेक्स की जानकारी के बाद, मैंने 'भूले हुए प्रण' के सुरागों का पता लगाया। एक पुराने दस्तावेज़ का एक टुकड़ा मिला।"
					}
				},
				{
					"content": {
						"korean": "이게 Memento와 관련된 건가?",
						"english": "Is this related to Memento?",
						"japanese": "これがMementoと関連しているのか？",
						"chinese": "这和Memento有关吗？",
						"french": "Est-ce lié à Memento ?",
						"spanish": "¿Esto está relacionado con Memento?",
						"vietnamese": "Cái này có liên quan đến Memento không?",
						"thai": "นี่เกี่ยวข้องกับ Memento หรือเปล่า?",
						"hindi": "क्या यह मेमेंटो से संबंधित है?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "direction",
					"speaker": "dax",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						5,
						2
					]
				},
				{
					"content": {
						"korean": "거기까지다. 더 이상 Memento를 쫓지 마라.",
						"english": "That's enough. Do not pursue Memento any further.",
						"japanese": "そこまでだ。これ以上Mementoを追うな。",
						"chinese": "到此为止。不要再追查Memento了。",
						"french": "Ça suffit. Ne poursuivez plus Memento.",
						"spanish": "Hasta aquí. No persigas más a Memento.",
						"vietnamese": "Đến đây thôi. Đừng truy đuổi Memento nữa.",
						"thai": "พอแค่นั้น อย่าตาม Memento อีกต่อไป",
						"hindi": "बस बहुत हो गया। मेमेंटो का पीछा और मत करो।"
					},
					"type": "speech",
					"speaker": "dax",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "당신은 누구지?",
						"english": "Who are you?",
						"japanese": "あなたは誰だ？",
						"chinese": "你是谁？",
						"french": "Qui êtes-vous ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Anh là ai?",
						"thai": "คุณเป็นใคร?",
						"hindi": "तुम कौन हो?"
					}
				},
				{
					"speaker": "dax",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "Dax. Memento를 추적하는 자다.",
						"english": "Dax. One who tracks Memento.",
						"japanese": "Daxだ。Mementoを追跡する者。",
						"chinese": "Dax。我是追查Memento的人。",
						"french": "Dax. Celui qui traque Memento.",
						"spanish": "Dax. El que rastrea a Memento.",
						"vietnamese": "Dax. Người truy tìm Memento.",
						"thai": "Dax ผู้ที่ตามรอย Memento",
						"hindi": "डैक्स। मेमेंटो का पीछा करने वाला।"
					}
				},
				{
					"content": {
						"korean": "그는 도시의 질서를 파괴할 위험한 존재다. 제거해야 한다.",
						"english": "He is a dangerous entity that will destroy the city's order. He must be eliminated.",
						"japanese": "彼は都市の秩序を破壊する危険な存在だ。排除しなければならない。",
						"chinese": "他会破坏城市秩序的危险存在。必须将其清除。",
						"french": "C'est une entité dangereuse qui détruira l'ordre de la ville. Il doit être éliminé.",
						"spanish": "Él es una entidad peligrosa que destruirá el orden de la ciudad. Debe ser eliminado.",
						"vietnamese": "Hắn là một thực thể nguy hiểm sẽ phá hủy trật tự của thành phố. Phải loại bỏ hắn.",
						"thai": "เขาเป็นตัวอันตรายที่จะทำลายความสงบเรียบร้อยของเมือง ต้องกำจัดเขา",
						"hindi": "वह एक खतरनाक इकाई है जो शहर की व्यवस्था को नष्ट कर देगा। उसे खत्म करना होगा।"
					},
					"type": "speech",
					"speaker": "dax",
					"emotion": "angry"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "dax",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						2
					]
				},
				{
					"content": {
						"korean": "왜 내 말을 믿지 않나? Memento는 곧 재앙을 불러올 거다.",
						"english": "Why don't you believe me? Memento will soon bring disaster.",
						"japanese": "なぜ私の言葉を信じない？ Mementoはすぐに災厄を招くだろう。",
						"chinese": "为什么不相信我的话？Memento很快就会带来灾难。",
						"french": "Pourquoi ne me crois-tu pas ? Memento va bientôt apporter le désastre.",
						"spanish": "¿Por qué no me crees? Memento pronto traerá la catástrofe.",
						"vietnamese": "Sao ngươi không tin ta? Memento sẽ sớm mang đến tai ương.",
						"thai": "ทำไมคุณถึงไม่เชื่อฉัน? Memento จะนำหายนะมาในไม่ช้า",
						"hindi": "तुम मेरी बात पर विश्वास क्यों नहीं करते? मेमेंटो जल्द ही तबाही लाएगा।"
					},
					"type": "speech",
					"speaker": "dax",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "하지만 그가… 그렇게 보이지는 않던데.",
						"english": "But he... doesn't seem like that.",
						"japanese": "しかし彼は…そうは見えない。",
						"chinese": "但他……看起来不像那样。",
						"french": "Mais il... n'en a pas l'air.",
						"spanish": "Pero él... no parece así.",
						"vietnamese": "Nhưng anh ta... không có vẻ gì như thế.",
						"thai": "แต่เขา... ดูไม่เหมือนอย่างนั้นเลย",
						"hindi": "लेकिन वह... ऐसा नहीं लगता।"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "겉모습에 속지 마라. 그의 연주는 도시를 좀먹는 독이다.",
						"english": "Don't be fooled by appearances. His performance is a poison that gnaws at the city.",
						"japanese": "見た目に騙されるな。彼の演奏は都市を蝕む毒だ。",
						"chinese": "不要被外表所迷惑。他的演奏是腐蚀城市的毒药。",
						"french": "Ne te fie pas aux apparences. Sa performance est un poison qui ronge la ville.",
						"spanish": "No te dejes engañar por las apariencias. Su actuación es un veneno que corroe la ciudad.",
						"vietnamese": "Đừng bị vẻ ngoài đánh lừa. Màn trình diễn của hắn là một thứ độc dược gặm nhấm thành phố.",
						"thai": "อย่าหลงกลรูปลักษณ์ภายนอก การแสดงของเขาคือยาพิษที่กัดกินเมือง",
						"hindi": "दिखावे से मूर्ख मत बनो। उसका प्रदर्शन शहर को खोखला करने वाला ज़हर है।"
					},
					"speaker": "dax",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_1",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "도시의 질서…?",
						"english": "The city's order...?",
						"japanese": "都市の秩序…？",
						"chinese": "城市的秩序……？",
						"french": "L'ordre de la ville...?",
						"spanish": "¿El orden de la ciudad...?",
						"vietnamese": "Trật tự của thành phố...?",
						"thai": "ระเบียบของเมือง...?",
						"hindi": "शहर की व्यवस्था...?"
					}
				},
				{
					"type": "speech",
					"speaker": "dax",
					"emotion": "angry",
					"content": {
						"korean": "그는 모든 것을 망가뜨리려 한다. 막아야만 한다.",
						"english": "He intends to destroy everything. We must stop him.",
						"japanese": "彼はすべてを破壊しようとしている。止めなければならない。",
						"chinese": "他想摧毁一切。我们必须阻止他。",
						"french": "Il a l'intention de tout détruire. Nous devons l'arrêter.",
						"spanish": "Él intenta destruir todo. Debemos detenerlo.",
						"vietnamese": "Hắn ta định phá hủy mọi thứ. Chúng ta phải ngăn hắn lại.",
						"thai": "เขาตั้งใจจะทำลายทุกสิ่ง เราต้องหยุดเขาให้ได้",
						"hindi": "वह सब कुछ नष्ट करना चाहता है। हमें उसे रोकना ही होगा।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "dax",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "잠깐, 이게 뭐야? Memento 주변에서 발견된 통신 기록의 파편…?",
						"english": "Wait, what's this? Fragments of communication records found near Memento...?",
						"japanese": "待て、これは何だ？ Mementoの近くで発見された通信記録の破片…？",
						"chinese": "等等，这是什么？在Memento附近发现的通信记录碎片……？",
						"french": "Attends, qu'est-ce que c'est ? Des fragments de journaux de communication trouvés près de Memento...?",
						"spanish": "Espera, ¿qué es esto? ¿Fragmentos de registros de comunicación encontrados cerca de Memento...?",
						"vietnamese": "Khoan đã, đây là gì? Những mảnh vỡ của nhật ký liên lạc được tìm thấy gần Memento...?",
						"thai": "เดี๋ยว นี่อะไร? เศษซากบันทึกการสื่อสารที่พบใกล้ Memento...?",
						"hindi": "रुको, यह क्या है? मेमेंटो के पास मिले संचार रिकॉर्ड के टुकड़े...?"
					}
				},
				{
					"content": {
						"korean": "해독 불가능한 암호화된 메시지 조각이었다. 누군가의 지령처럼 보였다.",
						"english": "They were undecipherable, encrypted message fragments. They looked like someone's orders.",
						"japanese": "解読不可能な暗号化されたメッセージの断片だった。誰かの指令のように見えた。",
						"chinese": "那是无法解读的加密信息碎片。看起来像是某人的指令。",
						"french": "C'étaient des fragments de messages chiffrés et indéchiffrables. Ils ressemblaient à des ordres de quelqu'un.",
						"spanish": "Eran fragmentos de mensajes encriptados indescifrables. Parecían las órdenes de alguien.",
						"vietnamese": "Đó là những mảnh tin nhắn được mã hóa không thể giải mã. Trông như mệnh lệnh của ai đó.",
						"thai": "มันเป็นเศษข้อความที่เข้ารหัสซึ่งถอดรหัสไม่ได้ ดูเหมือนคำสั่งของใครบางคน",
						"hindi": "वे अनसुलझे, एन्क्रिप्टेड संदेश के टुकड़े थे। वे किसी के आदेश जैसे दिखते थे।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"emotion": "base",
					"content": {
						"korean": "그건… 신경 쓸 필요 없어. 그저 위험하다는 증거일 뿐이다.",
						"english": "That... you don't need to worry about. It's just proof that he's dangerous.",
						"japanese": "それは…気にする必要はない。ただ彼が危険だという証拠に過ぎない。",
						"chinese": "那个……你不需要担心。那只是他很危险的证据而已。",
						"french": "Ça... tu n'as pas à t'en soucier. C'est juste la preuve qu'il est dangereux.",
						"spanish": "Eso... no tienes que preocuparte. Es solo una prueba de que es peligroso.",
						"vietnamese": "Chuyện đó... ngươi không cần bận tâm. Đó chỉ là bằng chứng cho thấy hắn nguy hiểm thôi.",
						"thai": "เรื่องนั้น... ไม่ต้องกังวลหรอก มันเป็นแค่หลักฐานว่าเขาอันตรายเท่านั้นเอง",
						"hindi": "उस... बारे में तुम्हें चिंता करने की ज़रूरत नहीं है। यह सिर्फ इस बात का सबूत है कि वह खतरनाक है।"
					}
				},
				{
					"content": {
						"korean": "정말 그럴까? 뭔가 숨기는 것 같은데.",
						"english": "Is that really true? You seem to be hiding something.",
						"japanese": "本当にそうか？何か隠しているようだが。",
						"chinese": "真是这样吗？你好像在隐瞒什么。",
						"french": "Est-ce vraiment vrai ? Tu sembles cacher quelque chose.",
						"spanish": "¿Es eso realmente cierto? Parece que estás ocultando algo.",
						"vietnamese": "Thật vậy sao? Ngươi có vẻ đang che giấu điều gì đó.",
						"thai": "จริงเหรอ? ดูเหมือนคุณจะซ่อนอะไรบางอย่างนะ",
						"hindi": "क्या यह सच है? तुम कुछ छिपा रहे हो।"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "dax",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "내가 말한 게 전부 진실이다. Memento는 제거되어야 한다.",
						"english": "Everything I said is the truth. Memento must be eliminated.",
						"japanese": "私が言ったことすべてが真実だ。 Mementoは排除されなければならない。",
						"chinese": "我所说的一切都是真相。Memento必须被清除。",
						"french": "Tout ce que j'ai dit est la vérité. Memento doit être éliminé.",
						"spanish": "Todo lo que dije es la verdad. Memento debe ser eliminado.",
						"vietnamese": "Tất cả những gì ta nói là sự thật. Memento phải bị loại bỏ.",
						"thai": "ทุกสิ่งที่ฉันพูดคือความจริง Memento จะต้องถูกกำจัด",
						"hindi": "मैंने जो कुछ भी कहा वह सच है। मेमेंटो को खत्म कर देना चाहिए।"
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "dax",
					"action": "enter",
					"spot": [
						2,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "dax",
					"emotion": "angry",
					"content": {
						"korean": "더 이상 망설일 시간이 없다. Memento를 끝내야 해.",
						"english": "No more time to hesitate. Memento must be stopped.",
						"japanese": "もうためらっている時間はない。Mementoを終わらせなければ。",
						"chinese": "没有时间再犹豫了。必须阻止Memento。",
						"french": "Plus de temps à hésiter. Il faut en finir avec Memento.",
						"spanish": "No hay más tiempo para dudar. Debemos detener a Memento.",
						"vietnamese": "Không còn thời gian để do dự. Phải chấm dứt Memento.",
						"thai": "ไม่มีเวลาลังเลอีกแล้ว ต้องหยุด Memento.",
						"hindi": "अब और हिचकिचाने का समय नहीं है। Memento को रोकना होगा।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "당신이 왜 그렇게 Memento를 제거하려는 거지? 진짜 이유가 뭐야?",
						"english": "Why are you so determined to eliminate Memento? What's the real reason?",
						"japanese": "なぜそこまでMementoを排除しようとする？本当の理由は何だ？",
						"chinese": "你为什么如此执着于清除Memento？真正的原因是什么？",
						"french": "Pourquoi tenez-vous tant à éliminer Memento ? Quelle est la vraie raison ?",
						"spanish": "¿Por qué estás tan empeñado en eliminar a Memento? ¿Cuál es la verdadera razón?",
						"vietnamese": "Tại sao ngươi lại quyết tâm loại bỏ Memento như vậy? Lý do thật sự là gì?",
						"thai": "ทำไมคุณถึงต้องการกำจัด Memento ขนาดนั้น? เหตุผลที่แท้จริงคืออะไร?",
						"hindi": "तुम Memento को खत्म करने के लिए इतने उत्सुक क्यों हो? असली वजह क्या है?"
					}
				},
				{
					"type": "speech",
					"speaker": "dax",
					"emotion": "base",
					"content": {
						"korean": "나는… 도시의 질서를 지키는 자다. 내게 내려진 명령이니까.",
						"english": "I am... a guardian of the city's order. It's an order I was given.",
						"japanese": "私は… 都市の秩序を守る者だ。私に下された命令だからだ。",
						"chinese": "我是… 城市的秩序守护者。这是我接到的命令。",
						"french": "Je suis... le gardien de l'ordre de la ville. C'est un ordre que j'ai reçu.",
						"spanish": "Yo soy... un guardián del orden de la ciudad. Es una orden que se me dio.",
						"vietnamese": "Ta là… người bảo vệ trật tự của thành phố. Vì đây là mệnh lệnh ta nhận được.",
						"thai": "ฉันคือ… ผู้พิทักษ์ความสงบเรียบร้อยของเมือง เพราะมันคือคำสั่งที่ฉันได้รับ.",
						"hindi": "मैं... शहर की व्यवस्था का रक्षक हूँ। यह मुझे दिया गया एक आदेश है।"
					}
				},
				{
					"content": {
						"korean": "명령? 누구의 명령인데? 당신도 그저 도구잖아!",
						"english": "Orders? Whose orders? You're just a tool!",
						"japanese": "命令？誰の命令だ？お前もただの道具じゃないか！",
						"chinese": "命令？谁的命令？你也不过是个工具！",
						"french": "Des ordres ? Les ordres de qui ? Tu n'es qu'un outil !",
						"spanish": "¿Órdenes? ¿Órdenes de quién? ¡Tú también eres solo una herramienta!",
						"vietnamese": "Mệnh lệnh? Mệnh lệnh của ai? Ngươi cũng chỉ là một công cụ thôi!",
						"thai": "คำสั่ง? คำสั่งของใคร? คุณก็เป็นแค่เครื่องมือ!",
						"hindi": "आदेश? किसके आदेश? तुम भी तो बस एक मोहरे हो!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "dax",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "닥쳐라! 내 앞에 서지 마라!",
						"english": "Silence! Don't stand in my way!",
						"japanese": "黙れ！私の前に立つな！",
						"chinese": "住口！别挡我的路！",
						"french": "Silence ! Ne te mets pas en travers de mon chemin !",
						"spanish": "¡Cállate! ¡No te interpongas en mi camino!",
						"vietnamese": "Câm miệng! Đừng cản đường ta!",
						"thai": "หุบปาก! อย่าขวางทางฉัน!",
						"hindi": "चुप रहो! मेरे रास्ते में मत आओ!"
					}
				},
				{
					"content": {
						"korean": "Dax의 눈빛이 변했다. 더 이상 대화는 불가능했다.",
						"english": "Dax's eyes changed. Further dialogue was impossible.",
						"japanese": "Daxの目が変わった。これ以上会話は不可能だった。",
						"chinese": "Dax的眼神变了。对话已不可能继续。",
						"french": "Le regard de Dax a changé. Toute discussion était désormais impossible.",
						"spanish": "La mirada de Dax cambió. Ya no era posible dialogar.",
						"vietnamese": "Ánh mắt của Dax thay đổi. Không thể tiếp tục đối thoại được nữa.",
						"thai": "แววตาของแด็กซ์เปลี่ยนไป ไม่สามารถสนทนาต่อได้อีกแล้ว.",
						"hindi": "डैक्स की आँखें बदल गईं। अब और बातचीत असंभव थी।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "거대한 그림자에 압도되었다. '맹세'의 힘은 아직 너무 강했다.",
						"english": "Overwhelmed by a colossal shadow. The power of the 'Oath' was still too strong.",
						"japanese": "巨大な影に圧倒された。『誓約』の力は、まだあまりにも強大だった。",
						"chinese": "被巨大的阴影所压倒。'誓约'的力量依然过于强大。",
						"french": "Submergé par une ombre colossale. Le pouvoir du 'Serment' était encore trop fort.",
						"spanish": "Abrumado por una sombra colosal. El poder del 'Juramento' era todavía demasiado fuerte.",
						"vietnamese": "Bị bóng tối khổng lồ áp đảo. Sức mạnh của 'Lời Thề' vẫn còn quá lớn.",
						"thai": "ถูกครอบงำด้วยเงาอันมหึมา พลังของ 'คำสาบาน' ยังคงแข็งแกร่งเกินไป",
						"hindi": "एक विशाल छाया से अभिभूत हो गए। 'शपथ' की शक्ति अभी भी बहुत प्रबल थी।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "어리석은 저항. 너희는 결코 '맹세'를 거스를 수 없다.",
						"english": "Foolish resistance. You can never defy the 'Oath'.",
						"japanese": "愚かな抵抗。お前たちは決して『誓約』に逆らえない。",
						"chinese": "愚蠢的抵抗。你们绝不能违抗'誓约'。",
						"french": "Résistance insensée. Vous ne pourrez jamais défier le 'Serment'.",
						"spanish": "Resistencia estúpida. Jamás podréis desafiar el 'Juramento'.",
						"vietnamese": "Sự kháng cự ngu xuẩn. Các ngươi sẽ không bao giờ chống lại được 'Lời Thề'.",
						"thai": "การต่อต้านที่โง่เขลา พวกเจ้าจะไม่มีวันฝ่าฝืน 'คำสาบาน' ได้",
						"hindi": "मूर्खतापूर्ण प्रतिरोध। तुम कभी 'शपथ' को नहीं टाल सकते।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "아직 끝나지 않았어. 진실은 반드시 밝혀낼 것이다!",
						"english": "It's not over yet. The truth will surely be revealed!",
						"japanese": "まだ終わっていない。真実は必ず暴かれるだろう！",
						"chinese": "还没结束。真相一定会水落石出！",
						"french": "Ce n'est pas encore fini. La vérité éclatera à coup sûr !",
						"spanish": "Aún no ha terminado. ¡La verdad saldrá a la luz!",
						"vietnamese": "Chưa kết thúc đâu. Sự thật nhất định sẽ được phơi bày!",
						"thai": "ยังไม่จบแค่นี้ ความจริงจะต้องถูกเปิดเผยให้ได้!",
						"hindi": "अभी खत्म नहीं हुआ है। सच ज़रूर सामने आएगा!"
					}
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "…겨우 이걸 막았다고 생각하나? 진정한 '맹세'는… 아직 시작도 안 했다.",
						"english": "...Do you think you've merely stopped this? The true 'Oath' hasn't even begun.",
						"japanese": "…たかがこれを止めたとでも？真の『誓約』は… まだ始まってもいない。",
						"chinese": "…以为这就阻止了吗？真正的'誓约'… 还没开始。",
						"french": "...Pensez-vous avoir juste arrêté ça ? Le véritable 'Serment' n'a même pas commencé.",
						"spanish": "¿...Creéis que con esto lo habéis detenido? El verdadero 'Juramento' aún no ha empezado.",
						"vietnamese": "...Ngươi nghĩ chỉ vậy là đã ngăn cản được sao? 'Lời Thề' đích thực... còn chưa bắt đầu.",
						"thai": "…คิดว่าหยุดได้แค่นี้งั้นรึ? 'คำสาบาน' ที่แท้จริง… ยังไม่แม้แต่จะเริ่มต้น",
						"hindi": "...क्या तुम्हें लगता है कि तुमने बस इसे रोका है? असली 'शपथ' तो... अभी शुरू भी नहीं हुई।"
					},
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "더 깊은 함정이 있다는 건가… Dax, 그리고 그 배후.",
						"english": "So there's a deeper trap... Dax, and those behind him.",
						"japanese": "さらに深い罠があるのか… ダックス、そしてその背後にいる者たち。",
						"chinese": "还有更深的陷阱吗… 达克斯，以及他背后的人。",
						"french": "Y aurait-il un piège plus profond... Dax, et ceux qui sont derrière lui.",
						"spanish": "¿Así que hay una trampa más profunda... Dax, y quienes están detrás de él?",
						"vietnamese": "Vậy là còn một cái bẫy sâu hơn nữa... Dax, và kẻ đứng sau hắn.",
						"thai": "มีกับดักที่ลึกกว่านั้นอีกงั้นรึ… แดกซ์, และเบื้องหลังของเขา",
						"hindi": "तो क्या कोई और गहरी चाल है... डैक्स, और उसके पीछे वाले।"
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "혼란은 가중되었다. 믿었던 정보는 뒤틀렸고, 진실은 더욱 멀어졌다.",
						"english": "The confusion deepened. Trusted information was twisted, and the truth receded further.",
						"japanese": "混乱は深まった。信じていた情報は歪められ、真実はさらに遠ざかった。",
						"chinese": "混乱加剧了。曾信任的情报被扭曲，真相也愈发遥远。",
						"french": "La confusion s'intensifia. Les informations fiables furent déformées, et la vérité s'éloigna davantage.",
						"spanish": "La confusión se intensificó. La información de confianza fue distorsionada, y la verdad se alejó aún más.",
						"vietnamese": "Sự hỗn loạn càng tăng lên. Thông tin tin cậy đã bị bóp méo, và sự thật càng trở nên xa vời.",
						"thai": "ความสับสนเพิ่มขึ้นเรื่อยๆ ข้อมูลที่เชื่อถือได้ถูกบิดเบือน ความจริงยิ่งห่างไกลออกไป",
						"hindi": "भ्रम गहरा गया। विश्वसनीय जानकारी तोड़-मरोड़ दी गई, और सच और दूर हो गया।"
					}
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "맹세의 그림자가 드리운 어두운 공간. 거대한 형체가 모습을 드러냈다.",
						"english": "A dark space, shrouded in the shadow of the Oath. A colossal form emerged.",
						"japanese": "誓いの影が差す暗い空間。巨大な姿が現れた。",
						"chinese": "誓约的阴影笼罩着黑暗空间。一个巨大的身影显现了。",
						"french": "Un espace sombre, enveloppé par l'ombre du Serment. Une forme colossale est apparue.",
						"spanish": "Un espacio oscuro, envuelto en la sombra del Juramento. Una forma colosal emergió.",
						"vietnamese": "Một không gian tối tăm, bao trùm bởi bóng tối của Lời Thề. Một hình thù khổng lồ xuất hiện.",
						"thai": "พื้นที่มืดมิดที่ปกคลุมด้วยเงามืดแห่งคำสาบาน รูปร่างมหึมากำลังปรากฏตัวขึ้น.",
						"hindi": "शपथ की छाया में ढका एक अँधेरा स्थान। एक विशालकाय आकृति प्रकट हुई।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "어리석은 자여. '맹세'의 진정한 힘을 이해하지 못하는군.",
						"english": "Foolish one. You don't comprehend the true power of the 'Oath'.",
						"japanese": "愚かな者よ。「誓い」の真の力を理解していないな。",
						"chinese": "愚蠢之人。你不明白“誓约”的真正力量。",
						"french": "Imbécile. Tu ne comprends pas le véritable pouvoir du 'Serment'.",
						"spanish": "Necio. No comprendes el verdadero poder del 'Juramento'.",
						"vietnamese": "Kẻ ngu muội. Ngươi không hiểu sức mạnh thật sự của 'Lời Thề'.",
						"thai": "เจ้าโง่. เจ้าไม่เข้าใจพลังที่แท้จริงของ 'คำสาบาน' เลย.",
						"hindi": "मूर्ख। तुम 'शपथ' की असली शक्ति को नहीं समझते।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"spot": [
						4,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "dax"
				},
				{
					"content": {
						"korean": "{random_boss}여. 처리하십시오. 이들이 Memento를 방해하고 있습니다.",
						"english": "{random_boss}. Deal with them. They are interfering with Memento.",
						"japanese": "{random_boss}よ。処理せよ。彼らがMementoを妨害している。",
						"chinese": "{random_boss}。解决他们。他们正在阻碍Memento。",
						"french": "{random_boss}. Occupez-vous d'eux. Ils interfèrent avec Memento.",
						"spanish": "{random_boss}. Encárgate de ellos. Están interfiriendo con Memento.",
						"vietnamese": "Hỡi {random_boss}. Hãy xử lý chúng. Chúng đang cản trở Memento.",
						"thai": "{random_boss} จัดการพวกเขาซะ. พวกเขากำลังขัดขวาง Memento.",
						"hindi": "{random_boss}. इनसे निपटो। ये Memento में बाधा डाल रहे हैं।"
					},
					"speaker": "dax",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "Dax, 네가 꾸민 짓이었어! 우리를 이용한 거였군!",
						"english": "Dax, this was your doing! You used us!",
						"japanese": "Dax、お前が仕組んだことだったのか！私たちを利用したな！",
						"chinese": "Dax，这是你做的！你利用了我们！",
						"french": "Dax, c'était ton coup ! Tu nous as utilisés !",
						"spanish": "¡Dax, esto fue obra tuya! ¡Nos utilizaste!",
						"vietnamese": "Dax, đây là âm mưu của ngươi! Ngươi đã lợi dụng chúng ta!",
						"thai": "แด็กซ์ นี่มันเป็นฝีมือของนาย! นายใช้พวกเรา!",
						"hindi": "डैक्स, यह सब तुम्हारी चाल थी! तुमने हमें इस्तेमाल किया!"
					}
				},
				{
					"action": "exit",
					"type": "direction",
					"duration_ms": 400,
					"speaker": "dax"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "너희는 그저 도구일 뿐이다. '맹세'는 거스를 수 없어.",
						"english": "You are merely tools. The 'Oath' cannot be defied.",
						"japanese": "お前たちはただの道具だ。『誓約』には逆らえない。",
						"chinese": "你们不过是工具。'誓约'不可违抗。",
						"french": "Vous n'êtes que des outils. Le 'Serment' ne peut être défié.",
						"spanish": "Sois meras herramientas. El 'Juramento' no puede ser desafiado.",
						"vietnamese": "Các ngươi chỉ là công cụ. 'Lời Thề' không thể chống lại.",
						"thai": "พวกเจ้าเป็นแค่เครื่องมือ 'คำสาบาน' มิอาจฝ่าฝืนได้",
						"hindi": "तुम बस औज़ार हो। 'शपथ' को टाला नहीं जा सकता।"
					}
				}
			]
		}
	]
} as const;
