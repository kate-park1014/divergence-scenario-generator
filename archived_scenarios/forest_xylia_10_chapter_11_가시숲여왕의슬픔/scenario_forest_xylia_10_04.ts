export const scenario_forest_xylia_10_04 = {
	"scenario_id": "forest_xylia_10_04",
	"order": 4,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"cedar": {
			"id": "mon_bd67c222-311e-4f31-b81f-931b14f6b5c6",
			"name": {
				"korean": "시더",
				"english": "Cedar",
				"japanese": "シダー",
				"chinese": "雪松",
				"french": "Cèdre",
				"spanish": "Cedro",
				"vietnamese": "Tuyết tùng",
				"thai": "ซีดาร์",
				"hindi": "देवदार"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f1057921-5fa2-4be2-767d-1a64c33e6e00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9579f10e-eb78-40e5-d495-72f489322200/public"
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
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "숲의 심장부, 거대한 고목들이 뒤얽힌 고대 유적지가 모습을 드러냈다.",
						"english": "In the heart of the forest, an ancient ruin entangled with colossal trees revealed itself.",
						"japanese": "森の心臓部、巨大な古木が絡み合う古代遺跡が姿を現した。",
						"chinese": "在森林的心脏地带，一座被巨型古树缠绕的古老遗迹显露出来。",
						"french": "Au cœur de la forêt, des ruines antiques entrelacées de colossaux arbres se révélèrent.",
						"spanish": "En el corazón del bosque, una antigua ruina entrelazada con árboles colosales se reveló.",
						"vietnamese": "Tại trung tâm rừng, một di tích cổ xưa bị những cây cổ thụ khổng lồ quấn quanh đã lộ diện.",
						"thai": "ในใจกลางป่า ซากปรักหักพังโบราณที่พันกันด้วยต้นไม้ขนาดใหญ่ได้ปรากฏขึ้น",
						"hindi": "जंगल के हृदय में, विशाल वृक्षों से घिरी एक प्राचीन खंडहर प्रकट हुआ।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "믿을 수 없어… 이런 곳이 숨어있었다니.",
						"english": "I can't believe it... such a place was hidden.",
						"japanese": "信じられない…こんな場所が隠されていたなんて。",
						"chinese": "不敢相信……这样的地方竟然隐藏着。",
						"french": "Je n'arrive pas à y croire… un tel endroit était caché.",
						"spanish": "No puedo creerlo… un lugar así estaba escondido.",
						"vietnamese": "Không thể tin được… một nơi như thế này lại bị giấu kín.",
						"thai": "ไม่อยากจะเชื่อเลย… ที่แบบนี้ซ่อนอยู่ได้ยังไง",
						"hindi": "विश्वास नहीं हो रहा... ऐसी जगह छिपी हुई थी।"
					}
				},
				{
					"speaker": "cedar",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "…기다리고 있었어, 숲의 아이들.",
						"english": "...I've been waiting, children of the forest.",
						"japanese": "…待っていたよ、森の子ら。",
						"chinese": "……我一直在等你们，森林的孩子们。",
						"french": "…Je vous attendais, enfants de la forêt.",
						"spanish": "…Estaba esperando, hijos del bosque.",
						"vietnamese": "…Ta đã đợi, những đứa con của rừng.",
						"thai": "…ข้าเฝ้ารออยู่, เหล่าลูกหลานแห่งป่า",
						"hindi": "...मैं इंतज़ार कर रहा था, जंगल के बच्चों।"
					},
					"emotion": "base",
					"speaker": "cedar",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "누구…세요?",
						"english": "Who... are you?",
						"japanese": "どなた…ですか？",
						"chinese": "您是……谁？",
						"french": "Qui… êtes-vous ?",
						"spanish": "¿Quién… es usted?",
						"vietnamese": "Ai… vậy ạ?",
						"thai": "ท่าน…คือใคร?",
						"hindi": "आप... कौन हैं?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "시더. 잊혀진 진실을 지키는 자. 이 유적은 그 시작이야.",
						"english": "Cedar. Guardian of forgotten truths. This ruin is the beginning.",
						"japanese": "シーダー。忘れ去られた真実を守る者。この遺跡はその始まりだ。",
						"chinese": "西达。被遗忘真相的守护者。这座遗迹是其开端。",
						"french": "Cedar. Le gardien des vérités oubliées. Ces ruines en sont le début.",
						"spanish": "Cedar. El guardián de las verdades olvidadas. Estas ruinas son el principio.",
						"vietnamese": "Cedar. Kẻ bảo vệ những sự thật bị lãng quên. Di tích này là khởi đầu của nó.",
						"thai": "ซีดาร์ ผู้พิทักษ์ความจริงที่ถูกลืมเลือน ซากปรักหักพังแห่งนี้คือจุดเริ่มต้น",
						"hindi": "सीडर। भूले हुए सत्यों का संरक्षक। यह खंडहर उसकी शुरुआत है।"
					},
					"speaker": "cedar",
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "cedar",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "cedar",
					"content": {
						"korean": "이 벽화를 봐. 아마존 부족의 마지막 흔적.",
						"english": "Look at this mural. The last trace of the Amazon tribe.",
						"japanese": "この壁画を見て。アマゾン族の最後の痕跡よ。",
						"chinese": "看这壁画。亚马逊部落最后的痕迹。",
						"french": "Regardez cette fresque. La dernière trace de la tribu amazonienne.",
						"spanish": "Mira este mural. El último rastro de la tribu amazona.",
						"vietnamese": "Nhìn bức bích họa này. Dấu vết cuối cùng của bộ tộc Amazon.",
						"thai": "ดูจิตรกรรมฝาผนังนี่สิ ร่องรอยสุดท้ายของชนเผ่าอเมซอน",
						"hindi": "इस भित्ति चित्र को देखो। अमेज़ॅन जनजाति का अंतिम निशान।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "이 문양은… 슬픔 같아.",
						"english": "This pattern… it seems like sorrow.",
						"japanese": "この模様は…悲しみのようね。",
						"chinese": "这图案……像是悲伤。",
						"french": "Ce motif… on dirait de la tristesse.",
						"spanish": "Este patrón… parece tristeza.",
						"vietnamese": "Hoa văn này… dường như là nỗi buồn.",
						"thai": "ลวดลายนี่…ดูเหมือนความโศกเศร้า",
						"hindi": "यह पैटर्न… यह दुख जैसा लगता है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "cedar",
					"emotion": "sad",
					"content": {
						"korean": "부족은 멸망의 위기에 처했지. 여왕 크실리아의 희생 없이는…",
						"english": "The tribe was on the brink of extinction. Without Queen Xylia's sacrifice…",
						"japanese": "部族は滅亡の危機に瀕していた。女王クシリアの犠牲なくしては…",
						"chinese": "部落濒临灭绝。如果没有克西莉亚女王的牺牲…",
						"french": "La tribu était au bord de l'extinction. Sans le sacrifice de la Reine Xylia…",
						"spanish": "La tribu estaba al borde de la extinción. Sin el sacrificio de la Reina Xylia…",
						"vietnamese": "Bộ tộc đang trên bờ vực diệt vong. Nếu không có sự hy sinh của Nữ hoàng Xylia…",
						"thai": "ชนเผ่ากำลังเผชิญหน้ากับการล่มสลาย หากปราศจากการเสียสละของราชินีซิลเลียแล้วไซร้…",
						"hindi": "जनजाति विलुप्ति के कगार पर थी। रानी ज़ीलिया के बलिदान के बिना…"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "희생? 무슨 희생이요?",
						"english": "Sacrifice? What sacrifice?",
						"japanese": "犠牲？何の犠牲ですか？",
						"chinese": "牺牲？什么牺牲？",
						"french": "Sacrifice ? Quel sacrifice ?",
						"spanish": "¿Sacrificio? ¿Qué sacrificio?",
						"vietnamese": "Hy sinh? Sự hy sinh gì ạ?",
						"thai": "การเสียสละ? เสียสละอะไร?",
						"hindi": "बलिदान? कौन सा बलिदान?"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "cedar",
					"content": {
						"korean": "곧 알게 될 거야. 이 숲은 기억하고 있으니까.",
						"english": "You'll know soon enough. This forest remembers.",
						"japanese": "すぐに分かるでしょう。この森が覚えているから。",
						"chinese": "你很快就会知道的。这片森林还记得。",
						"french": "Tu le sauras bientôt. Cette forêt s'en souvient.",
						"spanish": "Pronto lo sabrás. Este bosque lo recuerda.",
						"vietnamese": "Ngươi sẽ sớm biết thôi. Khu rừng này vẫn còn nhớ.",
						"thai": "เจ้าจะรู้ในไม่ช้า ป่าแห่งนี้ยังคงจดจำ",
						"hindi": "तुम्हें जल्द ही पता चल जाएगा। यह जंगल याद रखता है।"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "cedar",
					"spot": [
						3,
						3
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "여기. 이것이 여왕 크실리아의 유물.",
						"english": "Here. This is Queen Xylia's artifact.",
						"japanese": "これよ。女王クシリアの遺物。",
						"chinese": "在这里。这是克西莉亚女王的遗物。",
						"french": "Voici. C'est l'artefact de la Reine Xylia.",
						"spanish": "Aquí. Este es el artefacto de la Reina Xylia.",
						"vietnamese": "Đây. Đây là di vật của Nữ hoàng Xylia.",
						"thai": "นี่ไง นี่คือสิ่งประดิษฐ์ของราชินีซิลเลีย",
						"hindi": "यहां। यह रानी ज़ीलिया की कलाकृति है।"
					},
					"speaker": "cedar",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "(유물을 만지려 한다) 앗!",
						"english": "(Reaches for the artifact) Ah!",
						"japanese": "(遺物に手を伸ばす) あっ！",
						"chinese": "(伸手去触碰遗物) 呃！",
						"french": "(Tente de toucher l'artefact) Ah !",
						"spanish": "(Intenta tocar el artefacto) ¡Ah!",
						"vietnamese": "(Định chạm vào di vật) Á!",
						"thai": "(เอื้อมมือจะสัมผัสสิ่งประดิษฐ์) อ๊ะ!",
						"hindi": "(कलाकृति को छूने की कोशिश करता है) आह!"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "유물을 만지려는 순간, 번개처럼 고대 문명의 환영이 스쳐 지나갔다.",
						"english": "The moment I touched the artifact, a vision of an ancient civilization flashed like lightning.",
						"japanese": "遺物に触れようとした瞬間、稲妻のように古代文明の幻影が頭をよぎった。",
						"chinese": "就在触碰遗物的那一刻，一道古老文明的幻影如闪电般掠过。",
						"french": "Au moment de toucher l'artefact, une vision de l'ancienne civilisation a traversé mon esprit comme un éclair.",
						"spanish": "En el momento en que intenté tocar el artefacto, una visión de una civilización antigua pasó como un rayo.",
						"vietnamese": "Ngay khoảnh khắc chạm vào di vật, một ảo ảnh về nền văn minh cổ đại chợt lóe lên như tia chớp.",
						"thai": "ในขณะที่กำลังจะสัมผัสสิ่งประดิษฐ์ ภาพหลอนของอารยธรรมโบราณก็วาบผ่านไปเหมือนสายฟ้า",
						"hindi": "जिस पल मैंने कलाकृति को छुआ, एक प्राचीन सभ्यता का दर्शन बिजली की तरह कौंध गया।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "방금… 뭐였지?",
						"english": "What… what was that just now?",
						"japanese": "今の…何だった？",
						"chinese": "刚才…那是什么？",
						"french": "Qu'est-ce que… qu'était-ce juste maintenant ?",
						"spanish": "¿Qué… qué fue eso justo ahora?",
						"vietnamese": "Vừa rồi… là gì vậy?",
						"thai": "เมื่อกี้…คืออะไรน่ะ?",
						"hindi": "अभी… वह क्या था?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "cedar",
					"content": {
						"korean": "진실이 너에게 말을 거는군. 크실리아는 부족을 위해 자신을 숲에 바쳤어.",
						"english": "The truth speaks to you. Xylia sacrificed herself to the forest for her tribe.",
						"japanese": "真実があなたに語りかけているわ。クシリアは部族のために、自らを森に捧げたのよ。",
						"chinese": "真相正在对你说话。克西莉亚为了部落，将自己献给了森林。",
						"french": "La vérité te parle. Xylia s'est sacrifiée à la forêt pour sa tribu.",
						"spanish": "La verdad te habla. Xylia se sacrificó al bosque por su tribu.",
						"vietnamese": "Sự thật đang nói với ngươi. Xylia đã hiến mình cho rừng xanh vì bộ tộc của cô ấy.",
						"thai": "ความจริงกำลังพูดกับเจ้า ซิลเลียได้เสียสละตัวเองให้กับป่าเพื่อชนเผ่าของเธอ",
						"hindi": "सच तुमसे बात कर रहा है। ज़ीलिया ने अपने कबीले के लिए खुद को जंगल को समर्पित कर दिया।"
					}
				},
				{
					"content": {
						"korean": "숲에… 바쳤다고요?",
						"english": "Sacrificed... to the forest?",
						"japanese": "「森に…捧げたと？」",
						"chinese": "“献给了…森林？”",
						"french": "« Sacrifié... à la forêt ? »",
						"spanish": "¿« Sacrificado... al bosque? »",
						"vietnamese": "“Hiến tế... cho rừng sao?”",
						"thai": "“พลีให้...ป่าหรือ?”",
						"hindi": "“जंगल को... अर्पित किया?”"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "cedar",
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"emotion": "angry",
					"speaker": "cedar",
					"content": {
						"korean": "더 깊이 들어가선 안 돼. 진실을 지키는 자가 깨어났어.",
						"english": "Go no deeper. The guardian of truth has awakened.",
						"japanese": "「これ以上は危険だ。真実の守護者が目覚めた。」",
						"chinese": "“不许再深入。真理的守护者已苏醒。”",
						"french": "« N'allez pas plus loin. Le gardien de la vérité s'est éveillé. »",
						"spanish": "« No vayáis más profundo. El guardián de la verdad ha despertado. »",
						"vietnamese": "“Đừng đi sâu hơn nữa. Kẻ bảo vệ chân lý đã thức tỉnh.”",
						"thai": "“อย่าเข้าไปลึกกว่านี้ ผู้พิทักษ์ความจริงตื่นขึ้นแล้ว”",
						"hindi": "“और गहरे मत जाओ। सत्य का रक्षक जाग उठा है।”"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "감히… 금단의 흔적을 엿보려 하는가!",
						"english": "How dare you... peek at forbidden traces!",
						"japanese": "「よくも…禁断の痕跡を覗き見ようとするか！」",
						"chinese": "“竟敢…窥视禁忌的痕迹！”",
						"french": "« Comment osez-vous... jeter un œil aux vestiges interdits ! »",
						"spanish": "« ¡Cómo osas... espiar las huellas prohibidas! »",
						"vietnamese": "“Dám... rình mò dấu vết cấm kỵ!”",
						"thai": "“บังอาจ...แอบมองร่องรอยต้องห้ามหรือ!”",
						"hindi": "“तुम कैसे हिम्मत करते हो... वर्जित निशानों को झाँकने की!”"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "비켜! 우린 진실을 찾아야 해.",
						"english": "Get out of the way! We must find the truth.",
						"japanese": "「どけ！我々は真実を見つけねばならない。」",
						"chinese": "“让开！我们必须找到真相。”",
						"french": "« Hors de mon chemin ! Nous devons trouver la vérité. »",
						"spanish": "« ¡Apartaos! Debemos encontrar la verdad. »",
						"vietnamese": "“Tránh ra! Chúng ta phải tìm ra sự thật.”",
						"thai": "“หลีกไป! เราต้องค้นหาความจริง”",
						"hindi": "“हट जाओ! हमें सच ढूंढना होगा।”"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "진실은… 너희가 감당할 수 없을 것이다.",
						"english": "The truth... will be more than you can bear.",
						"japanese": "「真実は…お前たちには耐えられぬだろう。」",
						"chinese": "“真相…你们承受不起。”",
						"french": "« La vérité... sera plus que ce que vous pourrez supporter. »",
						"spanish": "« La verdad... será más de lo que podréis soportar. »",
						"vietnamese": "“Sự thật... các ngươi sẽ không thể chịu đựng nổi.”",
						"thai": "“ความจริง...พวกเจ้าจะรับมันไม่ไหว”",
						"hindi": "“सच... तुम संभाल नहीं पाओगे।”"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "cedar",
					"type": "direction",
					"duration_ms": 400,
					"action": "exit",
					"direction": "down"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "cedar",
					"content": {
						"korean": "조심해… 그들은 크실리아의 고통으로 만들어진 존재야.",
						"english": "Be careful... they are beings born from Xylia's pain.",
						"japanese": "「気をつけろ…奴らはクシリアの苦痛から生まれた存在だ。」",
						"chinese": "“小心…他们是克西利亚痛苦的产物。”",
						"french": "« Attention... ce sont des êtres nés de la douleur de Xylia. »",
						"spanish": "« Tened cuidado... son seres nacidos del dolor de Xylia. »",
						"vietnamese": "“Cẩn thận... chúng là những sinh vật được tạo ra từ nỗi đau của Xylia.”",
						"thai": "“ระวัง...พวกมันคือสิ่งมีชีวิตที่ถือกำเนิดจากความเจ็บปวดของซีเลีย”",
						"hindi": "“सावधान रहो... वे ज़ीलिया के दर्द से बने प्राणी हैं।”"
					}
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "감히 여기까지 오다니… 어리석은 인간들!",
						"english": "How dare you come this far... foolish mortals!",
						"japanese": "「よくもここまで…愚かな人間め！」",
						"chinese": "“竟敢来到这里…愚蠢的人类！”",
						"french": "« Comment osez-vous venir jusqu'ici... stupides mortels ! »",
						"spanish": "« ¡Cómo osas llegar hasta aquí... estúpidos mortales! »",
						"vietnamese": "“Dám đến tận đây... lũ phàm nhân ngu ngốc!”",
						"thai": "“บังอาจมาถึงที่นี่...มนุษย์โง่เขลา!”",
						"hindi": "“तुम कैसे हिम्मत करते हो यहाँ तक आने की... मूर्ख नश्वर प्राणी!”"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "진실은 숨길 수 없어!",
						"english": "The truth cannot be hidden!",
						"japanese": "「真実は隠せない！」",
						"chinese": "“真相无法隐藏！”",
						"french": "« La vérité ne peut être cachée ! »",
						"spanish": "« ¡La verdad no se puede ocultar! »",
						"vietnamese": "“Sự thật không thể che giấu!”",
						"thai": "“ความจริงซ่อนไว้ไม่ได้!”",
						"hindi": "“सच छुपाया नहीं जा सकता!”"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "너희가 아는 진실은… 왜곡된 환상일 뿐!",
						"english": "The truth you know... is merely a distorted illusion!",
						"japanese": "「お前たちが知る真実は…歪んだ幻想にすぎない！」",
						"chinese": "“你们所知的真相…不过是扭曲的幻象！”",
						"french": "« La vérité que vous connaissez... n'est qu'une illusion déformée ! »",
						"spanish": "« La verdad que conocéis... ¡no es más que una ilusión distorsionada! »",
						"vietnamese": "“Sự thật mà các ngươi biết... chỉ là một ảo ảnh méo mó!”",
						"thai": "“ความจริงที่พวกเจ้ารู้...เป็นเพียงภาพลวงตาที่บิดเบือน!”",
						"hindi": "“जो सच तुम जानते हो... वह केवल एक विकृत भ्रम है!”"
					},
					"emotion": "base",
					"speaker": "random_boss"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "진실을 알 자격도 없는 미물들! 돌아가라!",
						"english": "Worthless beings, undeserving of the truth! Begone!",
						"japanese": "真実を知る資格もない下等生物どもめ！失せろ！",
						"chinese": "不配知晓真相的卑微生物！滚开！",
						"french": "Créatures insignifiantes, indignes de la vérité ! Retournez d'où vous venez !",
						"spanish": "¡Seres insignificantes, indignos de la verdad! ¡Volved por donde vinisteis!",
						"vietnamese": "Những kẻ thấp hèn không xứng biết sự thật! Cút đi!",
						"thai": "พวกไร้ค่า ไม่คู่ควรกับความจริง! กลับไปซะ!",
						"hindi": "सच्चाई जानने के लायक नहीं, तुच्छ प्राणी! चले जाओ!"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "아직… 끝나지 않았어. 포기하지 않아!",
						"english": "It's not... over yet. I won't give up!",
						"japanese": "まだ…終わってない。諦めない！",
						"chinese": "还没…结束。我不会放弃！",
						"french": "Ce n'est pas... encore fini. Je n'abandonnerai pas !",
						"spanish": "Aún... no ha terminado. ¡No me rendiré!",
						"vietnamese": "Vẫn... chưa kết thúc. Tôi sẽ không bỏ cuộc!",
						"thai": "ยัง...ไม่จบ ฉันจะไม่ยอมแพ้!",
						"hindi": "अभी तक… खत्म नहीं हुआ है। मैं हार नहीं मानूँगा!"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "그 고집이… 너희를 파멸로 이끌 것이다.",
						"english": "That stubbornness... will lead you to ruin.",
						"japanese": "その意地が…お前たちを破滅へと導くだろう。",
						"chinese": "这种固执…会将你们引向毁灭。",
						"french": "Cette obstination... vous mènera à la ruine.",
						"spanish": "Esa obstinación... os llevará a la ruina.",
						"vietnamese": "Sự cố chấp đó... sẽ dẫn các ngươi đến diệt vong.",
						"thai": "ความดื้อรั้นนั้น...จะนำพวกเจ้าไปสู่ความพินาศ",
						"hindi": "वह ज़िद… तुम्हें विनाश की ओर ले जाएगी।"
					},
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크실리아… 그녀의 고통이… {random_boss}의 마지막 숨통을 끊었다.",
						"english": "Xylia... her pain... ended {random_boss}'s last breath.",
						"japanese": "「クシリア…彼女の苦痛が…{random_boss}の息の根を止めた。」",
						"chinese": "“克西利亚…她的痛苦…终结了{random_boss}的最后一息。”",
						"french": "« Xylia... sa douleur... a coupé le dernier souffle de {random_boss}. »",
						"spanish": "« Xylia... su dolor... acabó con el último aliento de {random_boss}. »",
						"vietnamese": "“Xylia... nỗi đau của cô ấy... đã cắt đứt hơi thở cuối cùng của {random_boss}.”",
						"thai": "“ซีเลีย...ความเจ็บปวดของเธอ...ได้ปลิดลมหายใจสุดท้ายของ {random_boss}”",
						"hindi": "“ज़ीलिया... उसका दर्द... ने {random_boss} की आखिरी साँस रोक दी।”"
					},
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "그녀의 고통? 대체 무슨…",
						"english": "Her pain? What in the world...",
						"japanese": "彼女の苦痛？一体何の…",
						"chinese": "她的痛苦？究竟是什么…",
						"french": "Sa douleur ? Mais qu'est-ce que...",
						"spanish": "¿Su dolor? ¿Qué demonios...?",
						"vietnamese": "Nỗi đau của cô ấy? Rốt cuộc là gì...",
						"thai": "ความเจ็บปวดของเธอ? มันคืออะไรกันแน่...",
						"hindi": "उसका दर्द? यह सब क्या है..."
					},
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "cedar",
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "{random_boss}는 숲의 뒤틀린 기억이 만들어낸 존재. 진실은 더 깊은 곳에 있어.",
						"english": "{random_boss} is a being born from the forest's twisted memories. The truth lies deeper.",
						"japanese": "{random_boss}は森の歪んだ記憶が生み出した存在。真実はもっと奥深くにある。",
						"chinese": "{random_boss}是森林扭曲记忆的产物。真相隐藏在更深处。",
						"french": "{random_boss} est une entité née des souvenirs tordus de la forêt. La vérité se trouve plus profondément.",
						"spanish": "{random_boss} es un ser creado por los recuerdos retorcidos del bosque. La verdad yace en lo más profundo.",
						"vietnamese": "{random_boss} là một thực thể sinh ra từ ký ức méo mó của khu rừng. Sự thật nằm sâu hơn nữa.",
						"thai": "{random_boss} คือสิ่งมีชีวิตที่เกิดจากความทรงจำบิดเบี้ยวของป่า ความจริงซ่อนอยู่ลึกกว่านั้น",
						"hindi": "{random_boss} जंगल की विकृत यादों से जन्मा एक प्राणी है। सच्चाई और गहराई में है।"
					},
					"emotion": "base",
					"speaker": "cedar"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "쓰러진 중간보스. 그러나 진실의 조각들은 여전히 파편으로 남아 있었다. 여정은 끝나지 않았다.",
						"english": "The mid-boss fell. Yet, fragments of truth remained shattered. The journey is not over.",
						"japanese": "中ボスは倒れた。しかし、真実の欠片はまだ砕け散ったまま。旅は終わらない。",
						"chinese": "中间首领已倒下。然而，真相的碎片仍未拼凑完整。旅程尚未结束。",
						"french": "Le mini-boss est tombé. Pourtant, les fragments de vérité restaient éparpillés. Le voyage n'est pas terminé.",
						"spanish": "El subjefe cayó. Sin embargo, los fragmentos de la verdad seguían esparcidos. El viaje no ha terminado.",
						"vietnamese": "Trùm phụ đã ngã xuống. Tuy nhiên, những mảnh vỡ của sự thật vẫn còn vụn vỡ. Cuộc hành trình chưa kết thúc.",
						"thai": "หัวหน้าตัวรองล้มลง ทว่า ชิ้นส่วนของความจริงยังคงแตกสลาย การเดินทางยังไม่จบลง",
						"hindi": "उप-बॉस गिर गया। फिर भी, सच्चाई के टुकड़े अभी भी बिखरे हुए थे। यात्रा समाप्त नहीं हुई थी।"
					}
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"거대한 고목이 뿌리내린 유적지. 숲의 심장부에 닿았다.",
			"숲이 감추고 있던 오랜 비밀이 깨어나고 있었다.",
			"아마존 부족, 여왕 크실리아… 잊혀진 이름들이 조각난 파편으로.",
			"진실의 조각이 주인공의 발밑에서 빛나기 시작한다.",
			"그리고 그곳에, 또 다른 시련이 기다리고 있었다."
		],
		"english": [
			"Ancient ruins where colossal trees took root. We've reached the forest's heart.",
			"The ancient secret hidden by the forest was awakening.",
			"The Amazon tribe, Queen Xylia... forgotten names became fragmented pieces.",
			"A piece of truth began to shine beneath the protagonist's feet.",
			"And there, another trial awaited."
		],
		"japanese": [
			"巨大な古木が根付く遺跡。森の心臓部に辿り着いた。",
			"森が隠していた古き秘密が目覚め始めていた。",
			"アマゾン部族、女王クシリア…忘れ去られた名前が、砕け散った破片となって。",
			"真実の欠片が主人公の足元で輝き始める。",
			"そしてその場所には、また別の試練が待ち受けていた。"
		],
		"chinese": [
			"巨型古树盘踞的遗迹。抵达了森林的心脏地带。",
			"森林隐藏的古老秘密正在苏醒。",
			"亚马逊部落，女王西莉亚……被遗忘的名字化作碎片。",
			"真相的碎片在主人公脚下开始闪耀。",
			"而在那里，另一场考验正在等待。"
		],
		"french": [
			"Des ruines où des arbres géants ont pris racine. Atteint le cœur de la forêt.",
			"Le secret millénaire caché par la forêt s'éveillait.",
			"La tribu amazone, la reine Xylia… des noms oubliés devenaient des fragments.",
			"Un fragment de vérité commençait à briller sous les pieds du protagoniste.",
			"Et là, une autre épreuve attendait."
		],
		"spanish": [
			"Ruinas donde los árboles gigantes echaron raíces. Alcanzado el corazón del bosque.",
			"El antiguo secreto que el bosque ocultaba estaba despertando.",
			"La tribu amazona, la Reina Xylia… nombres olvidados se volvían fragmentos.",
			"Un fragmento de la verdad comenzó a brillar bajo los pies del protagonista.",
			"Y allí, otra prueba esperaba."
		],
		"vietnamese": [
			"Di tích nơi những cây cổ thụ khổng lồ cắm rễ. Đã đến trung tâm rừng.",
			"Bí mật cổ xưa mà rừng giấu kín đang thức tỉnh.",
			"Bộ tộc Amazon, Nữ hoàng Xylia… những cái tên bị lãng quên trở thành những mảnh vỡ.",
			"Một mảnh sự thật bắt đầu tỏa sáng dưới chân nhân vật chính.",
			"Và ở đó, một thử thách khác đang chờ đợi."
		],
		"thai": [
			"ซากปรักหักพังที่ต้นไม้โบราณขนาดใหญ่หยั่งราก เรามาถึงใจกลางป่าแล้ว",
			"ความลับเก่าแก่ที่ป่าซ่อนไว้กำลังตื่นขึ้น",
			"เผ่าอเมซอน, ราชินีซิลเลีย… ชื่อที่ถูกลืมเลือนกลายเป็นชิ้นส่วนที่แตกหัก",
			"ชิ้นส่วนของความจริงเริ่มส่องประกายใต้เท้าของตัวเอก",
			"และที่นั่น การทดสอบอีกอย่างก็รออยู่"
		],
		"hindi": [
			"विशाल प्राचीन वृक्षों की जड़ें जमाई हुई खंडहर। जंगल के हृदय तक पहुँचे।",
			"जंगल द्वारा छिपाया गया प्राचीन रहस्य जाग रहा था।",
			"अमेज़न जनजाति, रानी ज़िलिया... भूले हुए नाम खंडित टुकड़ों में।",
			"सत्य का एक टुकड़ा नायक के पैरों के नीचे चमकने लगा।",
			"और वहाँ, एक और परीक्षा प्रतीक्षा कर रही थी।"
		]
	}
} as const;
