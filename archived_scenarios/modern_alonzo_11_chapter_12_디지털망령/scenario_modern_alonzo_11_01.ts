export const scenario_modern_alonzo_11_01 = {
	"scenario_id": "modern_alonzo_11_01",
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
			"도시. 모든 게 데이터로 연결된 첨단 사회.",
			"하지만 그림자처럼 드리운 디지털 오류와 정보 유출.",
			"베일에 싸인 투자 거물, 알론조의 그림자가 도시를 덮친다.",
			"어둠 속, 진실을 쫓는 발걸음이 시작된다."
		],
		"english": [
			"The City. An advanced society, everything connected by data.",
			"But digital errors and data leaks cast a shadow.",
			"The shadow of Alonzo, a veiled investment mogul, engulfs the city.",
			"In the dark, steps pursuing the truth begin."
		],
		"japanese": [
			"都市。すべてがデータで繋がれた先端社会。",
			"しかし、影のように忍び寄るデジタルエラーと情報漏洩。",
			"ベールに包まれた投資の大物、アロンゾの影が都市を覆う。",
			"闇の中、真実を追う足跡が始まる。"
		],
		"chinese": [
			"城市。一切都由数据连接的尖端社会。",
			"然而，数字错误和信息泄露如影随形。",
			"神秘的投资巨头阿隆佐的阴影笼罩着城市。",
			"黑暗中，追寻真相的脚步开始了。"
		],
		"french": [
			"La Ville. Une société avancée, où tout est connecté par les données.",
			"Mais des erreurs numériques et des fuites d'informations planent comme une ombre.",
			"L'ombre d'Alonzo, un magnat de l'investissement voilé, engloutit la ville.",
			"Dans l'obscurité, les pas à la poursuite de la vérité commencent."
		],
		"spanish": [
			"La Ciudad. Una sociedad avanzada, todo conectado por datos.",
			"Pero errores digitales y fugas de información acechan como una sombra.",
			"La sombra de Alonzo, un magnate de la inversión velado, envuelve la ciudad.",
			"En la oscuridad, los pasos que buscan la verdad comienzan."
		],
		"vietnamese": [
			"Thành phố. Một xã hội tiên tiến, mọi thứ được kết nối bằng dữ liệu.",
			"Tuy nhiên, lỗi kỹ thuật số và rò rỉ thông tin như một cái bóng.",
			"Bóng ma của Alonzo, một ông trùm đầu tư bí ẩn, bao trùm thành phố.",
			"Trong bóng tối, những bước chân tìm kiếm sự thật bắt đầu."
		],
		"thai": [
			"เมือง. สังคมล้ำสมัยที่ทุกสิ่งเชื่อมโยงด้วยข้อมูล",
			"แต่ข้อผิดพลาดทางดิจิทัลและการรั่วไหลของข้อมูลปกคลุมราวกับเงา",
			"เงาของอลอนโซ มหาเศรษฐีนักลงทุนลึกลับ ปกคลุมทั่วเมือง",
			"ในความมืด ก้าวที่ตามล่าความจริงเริ่มต้นขึ้น"
		],
		"hindi": [
			"शहर। एक उन्नत समाज, जहाँ सब कुछ डेटा से जुड़ा है।",
			"लेकिन डिजिटल त्रुटियाँ और डेटा लीक एक छाया की तरह मंडराते हैं।",
			"अलोंजो, एक रहस्यमय निवेशक दिग्गज की छाया शहर को घेर लेती है।",
			"अंधेरे में, सत्य की खोज में कदम शुरू होते हैं।"
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
						"korean": "도시 곳곳에서 디지털 노이즈가 번져갔다. 시스템은 불안정했다.",
						"english": "Digital noise spread throughout the city. The system was unstable.",
						"japanese": "都市のあちこちでデジタルノイズが広がった。システムは不安定だった。",
						"chinese": "数字噪音在城市中蔓延。系统不稳定。",
						"french": "Le bruit numérique se répandait dans toute la ville. Le système était instable.",
						"spanish": "El ruido digital se extendió por toda la ciudad. El sistema era inestable.",
						"vietnamese": "Tiếng ồn kỹ thuật số lan rộng khắp thành phố. Hệ thống không ổn định.",
						"thai": "สัญญาณรบกวนดิจิทัลแพร่กระจายไปทั่วเมือง ระบบไม่เสถียร",
						"hindi": "शहर भर में डिजिटल शोर फैल गया। सिस्टम अस्थिर था।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이게 요즘 뉴스에서 떠드는 그건가?",
						"english": "Is this what the news has been talking about lately?",
						"japanese": "これが最近ニュースで騒いでいることか？",
						"chinese": "这就是最近新闻里谈论的事情吗？",
						"french": "C'est de ça que les nouvelles parlent ces derniers temps ?",
						"spanish": "¿Es esto de lo que hablan las noticias últimamente?",
						"vietnamese": "Đây có phải là điều tin tức đang nói đến gần đây không?",
						"thai": "นี่คือสิ่งที่ข่าวพูดถึงช่วงนี้ใช่ไหม?",
						"hindi": "क्या यही है जिसके बारे में खबरें आजकल बात कर रही हैं?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "알론조 그 인간 짓이야?",
						"english": "Is this Alonzo's doing?",
						"japanese": "アロンゾの仕業か？",
						"chinese": "是阿隆佐干的吗？",
						"french": "C'est l'œuvre d'Alonzo ?",
						"spanish": "¿Es obra de Alonzo?",
						"vietnamese": "Đây là việc của Alonzo à?",
						"thai": "นี่คือฝีมือของอลอนโซหรือ?",
						"hindi": "क्या यह अलोंजो का काम है?"
					},
					"emotion": "base"
				},
				{
					"speaker": "bex",
					"type": "direction",
					"spot": [
						7,
						2
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…아직 모르는 게 좋을 거야.",
						"english": "...You'd better not know yet.",
						"japanese": "…まだ知らない方がいいだろう。",
						"chinese": "……你最好还是不知道。",
						"french": "...Tu ferais mieux de ne pas savoir encore.",
						"spanish": "...Será mejor que no lo sepas todavía.",
						"vietnamese": "...Bạn tốt hơn là đừng biết điều đó bây giờ.",
						"thai": "...นายยังไม่ควรรู้ตอนนี้หรอก",
						"hindi": "...तुम्हें अभी न जानना ही बेहतर होगा।"
					},
					"speaker": "bex",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "벡스? 뭘 아는 거야?",
						"english": "Vex? What do you know?",
						"japanese": "ヴェックス？何を言ってるんだ？",
						"chinese": "维克斯？你知道些什么？",
						"french": "Vex ? Qu'est-ce que tu sais ?",
						"spanish": "¿Vex? ¿Qué sabes?",
						"vietnamese": "Vex? Bạn biết gì vậy?",
						"thai": "เว็กซ์? นายรู้อะไร?",
						"hindi": "वेक्स? तुम क्या जानते हो?"
					}
				},
				{
					"type": "speech",
					"speaker": "bex",
					"content": {
						"korean": "알론조… 그의 회사는 그림자 같은 곳이야.",
						"english": "Alonzo... His company is like a shadow.",
						"japanese": "アロンゾ…彼の会社は影のような場所だ。",
						"chinese": "阿隆佐……他的公司像个影子。",
						"french": "Alonzo... Sa compagnie est comme une ombre.",
						"spanish": "Alonzo... Su compañía es como una sombra.",
						"vietnamese": "Alonzo... Công ty của anh ta giống như một cái bóng.",
						"thai": "อลอนโซ... บริษัทของเขาเหมือนเงา",
						"hindi": "अलोंजो... उसकी कंपनी एक परछाई की तरह है।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "옛날 '블러드 오키드' 얘기 들어봤어?",
						"english": "Heard about the old 'Blood Orchid'?",
						"japanese": "昔の「ブラッドオーキッド」の話、聞いたことある？",
						"chinese": "你听说过以前的“血兰花”吗？",
						"french": "Tu as entendu parler de la vieille 'Blood Orchid' ?",
						"spanish": "¿Has oído hablar de la antigua 'Blood Orchid'?",
						"vietnamese": "Đã nghe về 'Blood Orchid' ngày xưa chưa?",
						"thai": "เคยได้ยินเรื่อง 'Blood Orchid' เก่าๆ ไหม?",
						"hindi": "क्या तुमने पुराने 'ब्लड ऑर्किड' के बारे में सुना है?"
					},
					"speaker": "bex",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "블러드 오키드? 그 갱단이 왜?",
						"english": "Blood Orchid? Why them?",
						"japanese": "ブラッドオーキッド？あのギャングがどうしたの？",
						"chinese": "血兰花？那个帮派怎么了？",
						"french": "Blood Orchid ? Pourquoi eux ?",
						"spanish": "¿Blood Orchid? ¿Por qué ellos?",
						"vietnamese": "Blood Orchid? Sao lại là băng đó?",
						"thai": "Blood Orchid? แก๊งนั้นทำไม?",
						"hindi": "ब्लड ऑर्किड? वो गिरोह क्यों?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "아니야. 그냥… 오래된 이야기지.",
						"english": "Nothing. Just... an old story.",
						"japanese": "いや。ただ…古い話さ。",
						"chinese": "没什么。只是……一个老故事。",
						"french": "Non. Juste... une vieille histoire.",
						"spanish": "Nada. Solo... una vieja historia.",
						"vietnamese": "Không. Chỉ là... một câu chuyện cũ thôi.",
						"thai": "เปล่าหรอก แค่... เรื่องเก่าๆ น่ะ",
						"hindi": "कुछ नहीं। बस... एक पुरानी कहानी।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "bex"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						2
					],
					"type": "direction",
					"speaker": "bex"
				},
				{
					"content": {
						"korean": "도시의 데이터 흐름이 이상해. 마치… 누군가 조작하는 것 같아.",
						"english": "The city's data flow is off. Like... someone's messing with it.",
						"japanese": "都市のデータフローがおかしい。まるで…誰かが操作してるみたいだ。",
						"chinese": "城市的数据流很奇怪。好像……有人在操纵它。",
						"french": "Le flux de données de la ville est étrange. Comme si... quelqu'un le manipulait.",
						"spanish": "El flujo de datos de la ciudad es extraño. Como si... alguien lo estuviera manipulando.",
						"vietnamese": "Luồng dữ liệu của thành phố lạ quá. Như thể... ai đó đang thao túng.",
						"thai": "การไหลของข้อมูลในเมืองมันแปลกๆ เหมือน... มีใครบางคนกำลังบงการอยู่",
						"hindi": "शहर का डेटा प्रवाह अजीब है। जैसे... कोई इसे हेरफेर कर रहा हो।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "bex"
				},
				{
					"content": {
						"korean": "누군데? 알론조냐?",
						"english": "Who? Alonzo?",
						"japanese": "誰が？アロンゾか？",
						"chinese": "谁？阿隆佐吗？",
						"french": "Qui ? Alonzo ?",
						"spanish": "¿Quién? ¿Alonzo?",
						"vietnamese": "Ai? Alonzo à?",
						"thai": "ใครน่ะ? อลอนโซเหรอ?",
						"hindi": "कौन? अलोंजो?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "bex",
					"content": {
						"korean": "그 그림자가 도시를 옥죄고 있어.",
						"english": "That shadow is strangling the city.",
						"japanese": "その影が街を締め付けている。",
						"chinese": "那个阴影正在扼杀这座城市。",
						"french": "Cette ombre étouffe la ville.",
						"spanish": "Esa sombra está asfixiando la ciudad.",
						"vietnamese": "Bóng ma đó đang bóp nghẹt thành phố.",
						"thai": "เงาสีดำนั้นกำลังรัดคอเมืองอยู่",
						"hindi": "वह छाया शहर का गला घोंट रही है।"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "블러드 오키드 얘기는 또 뭐야?",
						"english": "What's with the Blood Orchid talk now?",
						"japanese": "またブラッドオーキッドの話か？",
						"chinese": "血兰花的事又是怎么回事？",
						"french": "C'est quoi cette histoire de Blood Orchid encore ?",
						"spanish": "¿Qué pasa con la charla de Blood Orchid ahora?",
						"vietnamese": "Chuyện Blood Orchid là gì nữa?",
						"thai": "เรื่อง Blood Orchid นี่มันอะไรอีกแล้ว?",
						"hindi": "ब्लッド ऑर्किड की बात फिर क्या है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_1"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "가끔… 도시의 오래된 구역에서 디지털 문양이 깜빡인대. 갱단 상징이랑 똑같다고.",
						"english": "Sometimes... digital patterns flicker in the old sectors. Same as the gang's symbol.",
						"japanese": "たまに…街の古い区画でデジタル模様が点滅するらしい。ギャングのシンボルとそっくりなんだ。",
						"chinese": "有时候……城市的旧城区会闪烁数字图案。和帮派的标志一模一样。",
						"french": "Parfois... des motifs numériques clignotent dans les vieux quartiers. Identiques au symbole du gang.",
						"spanish": "A veces... patrones digitales parpadean en los sectores antiguos. Iguales al símbolo de la pandilla.",
						"vietnamese": "Đôi khi... có những họa tiết kỹ thuật số nhấp nháy ở khu vực cũ của thành phố. Y hệt biểu tượng của băng đảng.",
						"thai": "บางครั้ง... ลวดลายดิจิทัลก็กะพริบในย่านเก่าของเมือง เหมือนกับสัญลักษณ์ของแก๊ง",
						"hindi": "कभी-कभी... शहर के पुराने इलाकों में डिजिटल पैटर्न चमकते हैं। गिरोह के प्रतीक के समान।"
					},
					"speaker": "bex",
					"type": "speech"
				},
				{
					"content": {
						"korean": "우연의 일치겠지.",
						"english": "Must be a coincidence.",
						"japanese": "偶然の一致だろう。",
						"chinese": "那一定是巧合。",
						"french": "Ce doit être une coïncidence.",
						"spanish": "Debe ser una coincidencia.",
						"vietnamese": "Chắc là trùng hợp thôi.",
						"thai": "คงเป็นเรื่องบังเอิญล่ะมั้ง",
						"hindi": "यह एक संयोग होना चाहिए।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "세상에 우연은 없어. 특히 이 도시에서는.",
						"english": "There are no coincidences in this world. Especially not in this city.",
						"japanese": "この世に偶然なんてない。特にこの街ではね。",
						"chinese": "世界上没有巧合。尤其是在这座城市。",
						"french": "Il n'y a pas de coïncidences dans ce monde. Surtout pas dans cette ville.",
						"spanish": "No hay coincidencias en este mundo. Especialmente no en esta ciudad.",
						"vietnamese": "Không có sự trùng hợp nào trên đời này. Đặc biệt là ở thành phố này.",
						"thai": "ในโลกนี้ไม่มีเรื่องบังเอิญหรอก โดยเฉพาะในเมืองนี้",
						"hindi": "इस दुनिया में कोई संयोग नहीं होता। खासकर इस शहर में तो बिल्कुल नहीं।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "bex"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "bex",
					"type": "direction",
					"spot": [
						7,
						2
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "더 이상 파고들지 마. 위험해.",
						"english": "Don't dig any deeper. It's dangerous.",
						"japanese": "これ以上深入りしないで。危険だ。",
						"chinese": "别再深挖了。危险。",
						"french": "N'enfonce pas plus. C'est dangereux.",
						"spanish": "No indagues más. Es peligroso.",
						"vietnamese": "Đừng đào sâu hơn nữa. Nguy hiểm đấy.",
						"thai": "อย่าขุดลึกไปกว่านี้อีกแล้ว มันอันตราย",
						"hindi": "और मत खोदो। यह खतरनाक है।"
					},
					"speaker": "bex",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이제 와서 멈출 순 없어.",
						"english": "It's too late to stop now.",
						"japanese": "今さら止められない。",
						"chinese": "事到如今，无法停止。",
						"french": "On ne peut plus s'arrêter maintenant.",
						"spanish": "Ya no podemos parar.",
						"vietnamese": "Bây giờ không thể dừng lại được nữa.",
						"thai": "ตอนนี้หยุดไม่ได้แล้ว",
						"hindi": "अब रुकना नामुमकिन है।"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "그는… 모든 것을 통제할 수 있어. 너의 생각까지.",
						"english": "He can control everything. Even your thoughts.",
						"japanese": "彼は…すべてを制御できる。君の思考まで。",
						"chinese": "他…能控制一切。甚至你的思想。",
						"french": "Il peut tout contrôler. Même tes pensées.",
						"spanish": "Él puede controlarlo todo. Hasta tus pensamientos.",
						"vietnamese": "Hắn ta… có thể kiểm soát mọi thứ. Kể cả suy nghĩ của cậu.",
						"thai": "เขา... ควบคุมได้ทุกสิ่ง แม้แต่ความคิดของคุณ",
						"hindi": "वह सब कुछ नियंत्रित कर सकता है। तुम्हारे विचारों को भी।"
					},
					"speaker": "bex",
					"type": "speech"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그게 정말 알론조의 짓이야?",
						"english": "Is that really Alonzo's doing?",
						"japanese": "それが本当にアロンゾの仕業なのか？",
						"chinese": "那真是阿隆佐干的吗？",
						"french": "C'est vraiment l'œuvre d'Alonzo ?",
						"spanish": "¿Eso es realmente obra de Alonzo?",
						"vietnamese": "Đó có thực sự là việc của Alonzo không?",
						"thai": "นั่นเป็นฝีมือของอลอนโซ่จริงหรือเปล่า?",
						"hindi": "क्या यह सचमुच अलोंजो का काम है?"
					}
				},
				{
					"content": {
						"korean": "그의 심장은 도시의 데이터 흐름. 개인 정보는 그의 혈액이야.",
						"english": "His heart is the city's data flow. Personal information is his blood.",
						"japanese": "彼の心臓は都市のデータフロー。個人情報は彼の血液だ。",
						"chinese": "他的心脏是城市的数据流。个人信息是他的血液。",
						"french": "Son cœur est le flux de données de la ville. Les informations personnelles sont son sang.",
						"spanish": "Su corazón es el flujo de datos de la ciudad. La información personal es su sangre.",
						"vietnamese": "Trái tim hắn là dòng chảy dữ liệu của thành phố. Thông tin cá nhân là máu của hắn.",
						"thai": "หัวใจของเขาคือกระแสข้อมูลของเมือง ข้อมูลส่วนบุคคลคือเลือดของเขา",
						"hindi": "उसका दिल शहर का डेटा प्रवाह है। व्यक्तिगत जानकारी उसका रक्त है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "bex"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "헛소리 마.",
						"english": "Stop spouting nonsense.",
						"japanese": "でたらめ言うな。",
						"chinese": "别胡说八道了。",
						"french": "Arrête tes bêtises.",
						"spanish": "No digas tonterías.",
						"vietnamese": "Đừng nói nhảm nữa.",
						"thai": "อย่าพูดเหลวไหล",
						"hindi": "बकवास मत करो।"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…곧 알게 될 거야.",
						"english": "...You'll know soon enough.",
						"japanese": "…すぐにわかるだろう。",
						"chinese": "…你很快就会知道的。",
						"french": "...Tu le sauras bientôt.",
						"spanish": "...Pronto lo sabrás.",
						"vietnamese": "...Rồi cậu sẽ biết thôi.",
						"thai": "…คุณจะรู้ในไม่ช้า",
						"hindi": "…तुम्हें जल्द ही पता चल जाएगा।"
					},
					"speaker": "bex",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						2
					],
					"type": "direction",
					"speaker": "bex"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "돌아갈 수 없어. 이미 발을 들였잖아.",
						"english": "There's no turning back. You're already in too deep.",
						"japanese": "もう引き返せない。もう足を踏み入れたんだ。",
						"chinese": "无法回头了。你已经踏入其中了。",
						"french": "On ne peut plus revenir en arrière. Tu y es déjà.",
						"spanish": "No hay vuelta atrás. Ya has puesto un pie.",
						"vietnamese": "Không thể quay lại được nữa. Cậu đã đặt chân vào rồi.",
						"thai": "ย้อนกลับไปไม่ได้แล้ว คุณเข้ามาแล้ว",
						"hindi": "वापस नहीं जा सकते। तुम पहले ही इसमें कदम रख चुके हो।"
					},
					"speaker": "bex",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "알아. 그래서 더 가야 해.",
						"english": "I know. That's why I have to go further.",
						"japanese": "わかってる。だからもっと進まなくちゃ。",
						"chinese": "我知道。所以必须继续前进。",
						"french": "Je sais. C'est pourquoi je dois aller plus loin.",
						"spanish": "Lo sé. Por eso debo ir más allá.",
						"vietnamese": "Tôi biết. Vì vậy tôi phải đi xa hơn nữa.",
						"thai": "ฉันรู้ นั่นคือเหตุผลที่ฉันต้องไปต่อ",
						"hindi": "मुझे पता है। इसीलिए मुझे आगे बढ़ना होगा।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "그는 과거의 상처에 갇힌… 괴물이야.",
						"english": "He's a monster... trapped by the wounds of the past.",
						"japanese": "彼は過去の傷に囚われた…怪物だ。",
						"chinese": "他是一个…被过去的创伤困住的怪物。",
						"french": "C'est un monstre... piégé par les blessures du passé.",
						"spanish": "Es un monstruo... atrapado por las heridas del pasado.",
						"vietnamese": "Hắn là một con quái vật… bị mắc kẹt trong những vết thương của quá khứ.",
						"thai": "เขาเป็นสัตว์ประหลาด... ที่ถูกขังอยู่ในบาดแผลในอดีต",
						"hindi": "वह एक राक्षस है... जो अतीत के घावों में फंसा हुआ है।"
					},
					"speaker": "bex",
					"type": "speech"
				},
				{
					"speaker": "character_3",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "괴물이라도 상대할 거야.",
						"english": "I'll face even monsters.",
						"japanese": "怪物相手でも構わない。",
						"chinese": "即使是怪物，我也要面对。",
						"french": "J'affronterai même les monstres.",
						"spanish": "Me enfrentaré incluso a los monstruos.",
						"vietnamese": "Dù là quái vật, tôi cũng sẽ đối mặt.",
						"thai": "ฉันจะเผชิญหน้ากับแม้กระทั่งสัตว์ประหลาด",
						"hindi": "मैं राक्षसों का भी सामना करूँगा।"
					}
				},
				{
					"content": {
						"korean": "이 도시의 자유를 되찾는다고? 그의 네트워크는… 물리적인 힘보다 강해.",
						"english": "Reclaim this city's freedom? His network... is stronger than physical force.",
						"japanese": "この都市の自由を取り戻す？彼のネットワークは…物理的な力より強い。",
						"chinese": "夺回这座城市的自由？他的网络…比物理力量更强大。",
						"french": "Récupérer la liberté de cette ville ? Son réseau... est plus fort que toute force physique.",
						"spanish": "¿Recuperar la libertad de esta ciudad? Su red... es más fuerte que la fuerza física.",
						"vietnamese": "Giành lại tự do cho thành phố này ư? Mạng lưới của hắn... mạnh hơn lực lượng vật lý.",
						"thai": "ทวงคืนอิสรภาพของเมืองนี้งั้นหรือ? เครือข่ายของเขา...แข็งแกร่งกว่ากำลังกาย",
						"hindi": "इस शहर की आज़ादी वापस दिलाना है? उसका नेटवर्क… शारीरिक बल से ज़्यादा मज़बूत है।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "bex"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "상관 없어. 갈 거야.",
						"english": "Doesn't matter. I'm going.",
						"japanese": "関係ない。行くぞ。",
						"chinese": "无所谓。我要去。",
						"french": "Peu importe. J'y vais.",
						"spanish": "No importa. Voy a ir.",
						"vietnamese": "Không sao cả. Tôi sẽ đi.",
						"thai": "ไม่เป็นไรหรอก ฉันจะไป",
						"hindi": "कोई फ़र्क़ नहीं पड़ता। मैं जा रहा हूँ।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "후회할 거야… 분명히.",
						"english": "You'll regret it... definitely.",
						"japanese": "後悔するぞ…間違いなく。",
						"chinese": "你会后悔的…肯定。",
						"french": "Tu le regretteras... C'est certain.",
						"spanish": "Te arrepentirás... sin duda.",
						"vietnamese": "Ngươi sẽ hối hận... chắc chắn.",
						"thai": "นายจะต้องเสียใจ...อย่างแน่นอน",
						"hindi": "तुम्हें अफ़सोस होगा… यकीनन।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "bex"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "차가운 금속음이 울렸다. 시스템 오류가 형체를 갖춘 듯했다.",
						"english": "A cold metallic sound echoed. A system error seemed to take form.",
						"japanese": "冷たい金属音が響いた。システムエラーが形を成したかのようだった。",
						"chinese": "冰冷的金属声响起。系统错误似乎具象化了。",
						"french": "Un son métallique froid résonna. Une erreur système semblait prendre forme.",
						"spanish": "Un frío sonido metálico resonó. Un error del sistema parecía tomar forma.",
						"vietnamese": "Một âm thanh kim loại lạnh lẽo vang lên. Lỗi hệ thống dường như đã thành hình.",
						"thai": "เสียงโลหะเย็นยะเยือกดังขึ้น ความผิดพลาดของระบบราวกับมีรูปร่าง",
						"hindi": "एक ठंडी धातुई आवाज़ गूँजी। सिस्टम की गड़बड़ी ने आकार ले लिया था।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "정체 모를 그림자가 기괴한 형태로 일렁였다.",
						"english": "An unknown shadow flickered in a grotesque form.",
						"japanese": "正体不明の影が、奇怪な形で揺らめいた。",
						"chinese": "不明的影子以一种怪异的形式闪烁着。",
						"french": "Une ombre inconnue vacillait sous une forme grotesque.",
						"spanish": "Una sombra desconocida parpadeó en una forma grotesca.",
						"vietnamese": "Một bóng tối không rõ nguồn gốc lay động trong hình dạng kỳ dị.",
						"thai": "เงาลึกลับไหวระริกในรูปทรงประหลาด",
						"hindi": "एक अज्ञात परछाई एक विकृत रूप में लहराई।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "침입자… 데이터 무결성을 침해하는가.",
						"english": "Intruder... are you violating data integrity?",
						"japanese": "侵入者…データ整合性を侵害するのか。",
						"chinese": "入侵者…你是否在破坏数据完整性？",
						"french": "Intrus... violez-vous l'intégrité des données ?",
						"spanish": "Intruso... ¿estás violando la integridad de los datos?",
						"vietnamese": "Kẻ xâm nhập... ngươi đang vi phạm tính toàn vẹn dữ liệu ư?",
						"thai": "ผู้บุกรุก...เจ้ากำลังละเมิดความสมบูรณ์ของข้อมูลหรือ",
						"hindi": "घुसपैठिए… क्या तुम डेटा अखंडता का उल्लंघन कर रहे हो?"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네가 이 모든 오류의 근원이냐?",
						"english": "Are you the source of all these errors?",
						"japanese": "お前がこの全ての不具合の根源か？",
						"chinese": "你就是所有这些错误的根源吗？",
						"french": "Es-tu la source de toutes ces erreurs ?",
						"spanish": "¿Eres la fuente de todos estos errores?",
						"vietnamese": "Ngươi là nguồn gốc của tất cả những lỗi này ư?",
						"thai": "เจ้าคือต้นเหตุของความผิดพลาดทั้งหมดนี้หรือ",
						"hindi": "क्या तुम इन सभी त्रुटियों का स्रोत हो?"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "나는… 시스템의 일부. 오류는 너희다.",
						"english": "I am... part of the system. You are the errors.",
						"japanese": "私は…システムの一部だ。 오류は貴様らだ。",
						"chinese": "我…是系统的一部分。错误是你们。",
						"french": "Je suis... une partie du système. Les erreurs, c'est vous.",
						"spanish": "Yo soy... parte del sistema. Vosotros sois los errores.",
						"vietnamese": "Ta là... một phần của hệ thống. Các ngươi mới là lỗi.",
						"thai": "ฉันคือ...ส่วนหนึ่งของระบบ พวกเจ้าต่างหากคือความผิดพลาด",
						"hindi": "मैं… सिस्टम का एक हिस्सा हूँ। त्रुटियाँ तुम हो।"
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "하찮은 존재. 시스템은… 너희를 삼킬 것이다.",
						"english": "Insignificant beings. The system will devour you.",
						"japanese": "取るに足らない存在め。システムは…お前たちを飲み込むだろう。",
						"chinese": "渺小的存在。系统会……吞噬你们。",
						"french": "Êtres insignifiants. Le système vous dévorera.",
						"spanish": "Seres insignificantes. El sistema os devorará.",
						"vietnamese": "Những kẻ nhỏ bé. Hệ thống sẽ... nuốt chửng các ngươi.",
						"thai": "สิ่งมีชีวิตไร้ค่า ระบบจะ... กลืนกินพวกแก",
						"hindi": "तुच्छ प्राणी। सिस्टम... तुम्हें निगल जाएगा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "젠장… 아직 끝나지 않았어.",
						"english": "Damn it... it's not over yet.",
						"japanese": "くそ…まだ終わってない。",
						"chinese": "该死……还没结束。",
						"french": "Mince... ce n'est pas encore fini.",
						"spanish": "Maldita sea... aún no ha terminado.",
						"vietnamese": "Chết tiệt... vẫn chưa kết thúc.",
						"thai": "บ้าจริง... ยังไม่จบหรอก",
						"hindi": "धिक्कार है... यह अभी खत्म नहीं हुआ है।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "디지털 노이즈가 모든 것을 뒤덮었다. 다시 일어설 시간이었다.",
						"english": "Digital noise covered everything. It was time to rise again.",
						"japanese": "デジタルノイズが全てを覆い尽くした。再び立ち上がる時だった。",
						"chinese": "数字噪声覆盖了一切。是时候再次站起来了。",
						"french": "Le bruit numérique recouvrait tout. Il était temps de se relever.",
						"spanish": "El ruido digital lo cubrió todo. Era hora de levantarse de nuevo.",
						"vietnamese": "Tiếng ồn kỹ thuật số bao trùm mọi thứ. Đã đến lúc phải đứng dậy lần nữa.",
						"thai": "สัญญาณรบกวนดิจิทัลปกคลุมทุกสิ่ง ถึงเวลาที่จะลุกขึ้นอีกครั้งแล้ว",
						"hindi": "डिजिटल शोर ने सब कुछ ढक लिया। यह फिर से उठने का समय था।"
					}
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이것으로… 끝이 아니야. {random_boss}는… 더 큰 그림자일 뿐.",
						"english": "This is... not the end. {random_boss} is... just a bigger shadow.",
						"japanese": "これで…終わりではない。 {random_boss}は…ただの大きな影に過ぎない。",
						"chinese": "这…不是结束。{random_boss}只是…一个更大的阴影。",
						"french": "Ce n'est... pas la fin. {random_boss} n'est... qu'une plus grande ombre.",
						"spanish": "Esto no es... el final. {random_boss} es... solo una sombra más grande.",
						"vietnamese": "Đây... không phải là kết thúc. {random_boss} chỉ là... một cái bóng lớn hơn mà thôi.",
						"thai": "นี่...ไม่ใช่จุดจบ {random_boss}เป็น...เพียงแค่เงาที่ใหญ่กว่าเท่านั้น",
						"hindi": "यह… अंत नहीं है। {random_boss} बस… एक बड़ी परछाई है।"
					}
				},
				{
					"content": {
						"korean": "무슨 소리야? 너 말고 또 다른 게 있다는 거야?",
						"english": "What do you mean? Is there something else besides you?",
						"japanese": "何を言ってるんだ？お前以外にも何かいるのか？",
						"chinese": "什么意思？除了你，还有别的什么吗？",
						"french": "Que veux-tu dire ? Il y a autre chose que toi ?",
						"spanish": "¿Qué quieres decir? ¿Hay algo más además de ti?",
						"vietnamese": "Ý ngươi là sao? Có thứ gì khác ngoài ngươi sao?",
						"thai": "หมายความว่าอะไร? มีอย่างอื่นนอกจากแกอีกเหรอ?",
						"hindi": "तुम्हारा क्या मतलब है? क्या तुम्हारे अलावा भी कुछ और है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "정체 모를 존재는 디지털 파편이 되어 사라졌다. 하지만 도시의 불안은 가라앉지 않았다.",
						"english": "The mysterious entity vanished into digital fragments. But the city's unrest did not subside.",
						"japanese": "正体不明の存在はデジタルな破片となって消え去った。しかし、都市の不安は収まらなかった。",
						"chinese": "那不明身份的存在化为数字碎片消失了。但城市的骚乱并未平息。",
						"french": "L'entité mystérieuse disparut en fragments numériques. Mais l'agitation de la ville ne s'apaisa pas.",
						"spanish": "La entidad misteriosa se desvaneció en fragmentos digitales. Pero la inquietud de la ciudad no disminuyó.",
						"vietnamese": "Thực thể bí ẩn tan biến thành các mảnh kỹ thuật số. Nhưng sự bất ổn của thành phố vẫn không lắng xuống.",
						"thai": "สิ่งมีชีวิตลึกลับหายไปเป็นเศษดิจิทัล แต่ความไม่สงบของเมืองยังคงอยู่",
						"hindi": "रहस्यमय इकाई डिजिटल टुकड़ों में गायब हो गई। लेकिन शहर की अशांति कम नहीं हुई।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "알론조의 그림자는… 이제 시작이었다.",
						"english": "Alonzo's shadow... this was just the beginning.",
						"japanese": "アロンゾの影は…まだ始まったばかりだった。",
						"chinese": "阿隆佐的阴影……这才刚刚开始。",
						"french": "L'ombre d'Alonzo... ce n'était que le début.",
						"spanish": "La sombra de Alonzo... esto era solo el principio.",
						"vietnamese": "Bóng tối của Alonzo... đây mới chỉ là khởi đầu.",
						"thai": "เงาของอลอนโซ่... นี่เป็นแค่จุดเริ่มต้นเท่านั้น",
						"hindi": "अलोंज़ो की परछाई... यह तो बस शुरुआत थी।"
					},
					"emotion": "base"
				}
			]
		}
	]
} as const;
