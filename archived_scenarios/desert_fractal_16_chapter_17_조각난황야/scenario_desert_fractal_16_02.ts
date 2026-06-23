export const scenario_desert_fractal_16_02 = {
	"scenario_id": "desert_fractal_16_02",
	"order": 2,
	"act": "rising",
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "파편 도시의 밤. 모든 것은 조각난 거울처럼 왜곡되어 있었다.",
						"english": "Night in Shard City. Everything was distorted like a shattered mirror.",
						"japanese": "破片都市の夜。すべてが砕けた鏡のように歪んでいた。",
						"chinese": "碎片之城的夜晚。一切都如破碎的镜子般扭曲。",
						"french": "Nuit à la Cité des Éclats. Tout était déformé comme un miroir brisé.",
						"spanish": "Noche en Ciudad Fragmentada. Todo estaba distorsionado como un espejo roto.",
						"vietnamese": "Đêm ở Thành phố Mảnh vỡ. Mọi thứ đều méo mó như một tấm gương vỡ.",
						"thai": "ค่ำคืนในเมืองเศษเสี้ยว ทุกสิ่งบิดเบี้ยวราวกับกระจกแตก",
						"hindi": "शार्ड सिटी में रात। सब कुछ टूटे हुए दर्पण की तरह विकृत था।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이게 정보통이 말한 지하 거래소인가?",
						"english": "Is this the underground exchange the informant mentioned?",
						"japanese": "ここが情報屋が言っていた地下取引所か？",
						"chinese": "这就是情报贩子说的地下交易所吗？",
						"french": "Est-ce là la bourse souterraine dont l'informateur a parlé ?",
						"spanish": "¿Es este el mercado subterráneo que mencionó el informante?",
						"vietnamese": "Đây có phải là sàn giao dịch ngầm mà người cung cấp tin tức đã nói đến không?",
						"thai": "นี่คือตลาดใต้ดินที่สายข่าวพูดถึงหรือเปล่า?",
						"hindi": "क्या यह वही भूमिगत विनिमय है जिसका मुखबिर ने उल्लेख किया था?"
					},
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "amir",
					"action": "enter",
					"spot": [
						4,
						2
					]
				},
				{
					"content": {
						"korean": "꽤 깊이 들어왔군. 이런 곳에선 냄새가 나기 마련이지.",
						"english": "We've come quite deep. Places like this always have a smell.",
						"japanese": "ずいぶん深く来たな。こういう場所には、独特の匂いがあるものだ。",
						"chinese": "我们深入得很。这种地方总会有股气味。",
						"french": "On est bien descendus. Les endroits comme ça ont toujours une odeur.",
						"spanish": "Hemos llegado bastante profundo. Lugares como este siempre tienen un olor.",
						"vietnamese": "Chúng ta đã đi khá sâu. Những nơi như thế này luôn có một mùi đặc trưng.",
						"thai": "เราเข้ามาลึกทีเดียว สถานที่แบบนี้มักจะมีกลิ่นเฉพาะตัว",
						"hindi": "हम काफी गहराई तक आ गए हैं। ऐसी जगहों की हमेशा एक खास गंध होती है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "amir"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "무슨 냄새?",
						"english": "What kind of smell?",
						"japanese": "何の匂いだ？",
						"chinese": "什么气味？",
						"french": "Quelle odeur ?",
						"spanish": "¿Qué olor?",
						"vietnamese": "Mùi gì?",
						"thai": "กลิ่นอะไร?",
						"hindi": "कैसी गंध?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "탐욕과… 피. 사라진 유물은 언제나 그런 것들을 남겨.",
						"english": "Greed and... blood. Lost relics always leave those behind.",
						"japanese": "貪欲と… 血だ。失われた遺物は、いつだってそういうものを残す。",
						"chinese": "贪婪和……血。失落的遗物总是留下这些东西。",
						"french": "La cupidité et… le sang. Les reliques perdues laissent toujours ces traces.",
						"spanish": "Codicia y... sangre. Las reliquias perdidas siempre dejan eso atrás.",
						"vietnamese": "Tham lam và… máu. Di vật biến mất luôn để lại những thứ đó.",
						"thai": "ความโลภและ... เลือด โบราณวัตถุที่หายไปมักจะทิ้งสิ่งเหล่านั้นไว้เสมอ",
						"hindi": "लालच और... खून। गुमशुदा अवशेष हमेशा ऐसी चीजें छोड़ जाते हैं।"
					},
					"speaker": "amir"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "amir"
				},
				{
					"content": {
						"korean": "이건 최근 거래된 유물들의 경로를 표시한 고대 지도야.",
						"english": "This is an ancient map showing the routes of recently traded relics.",
						"japanese": "これは最近取引された遺物の経路を示す古代の地図だ。",
						"chinese": "这是一张古老地图，显示了最近交易的文物路线。",
						"french": "C'est une carte ancienne montrant les routes des reliques récemment échangées.",
						"spanish": "Este es un mapa antiguo que muestra las rutas de las reliquias recientemente comerciadas.",
						"vietnamese": "Đây là một bản đồ cổ cho thấy các tuyến đường của các di vật được giao dịch gần đây.",
						"thai": "นี่คือแผนที่โบราณที่แสดงเส้นทางของโบราณวัตถุที่ถูกแลกเปลี่ยนล่าสุด",
						"hindi": "यह एक प्राचीन नक्शा है जो हाल ही में व्यापार किए गए अवशेषों के मार्गों को दर्शाता है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "amir"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "모두 한곳으로 향하고 있어. 이 표시는… 뭐지?",
						"english": "Everyone's heading to one place. What is this mark…?",
						"japanese": "皆が一つの場所へ向かっている。この印は…何だ？",
						"chinese": "大家都在往一个地方去。这个标记是……什么？",
						"french": "Tout le monde se dirige vers un même endroit. Cette marque… qu'est-ce que c'est ?",
						"spanish": "Todos se dirigen a un mismo lugar. ¿Esta marca… qué es?",
						"vietnamese": "Mọi người đều đang hướng về một nơi. Dấu hiệu này… là gì?",
						"thai": "ทุกคนกำลังมุ่งหน้าไปยังที่เดียวกัน เครื่องหมายนี้… คืออะไร?",
						"hindi": "सब एक ही जगह जा रहे हैं। यह निशान… क्या है?"
					}
				},
				{
					"speaker": "amir",
					"content": {
						"korean": "'마음의 검'이 잠들어 있다는 전설의 땅. 그저 전설일까?",
						"english": "The legendary land where the 'Sword of Mind' slumbers. Is it just a legend?",
						"japanese": "「心の剣」が眠るという伝説の地。ただの伝説なのか？",
						"chinese": "传说中「心之剑」沉睡之地。那只是个传说吗？",
						"french": "La terre légendaire où dort l'« Épée de l'Esprit ». N'est-ce qu'une légende ?",
						"spanish": "La tierra legendaria donde duerme la 'Espada de la Mente'. ¿Es solo una leyenda?",
						"vietnamese": "Miền đất huyền thoại nơi 'Thanh kiếm Trí tuệ' say ngủ. Liệu đó chỉ là truyền thuyết?",
						"thai": "ดินแดนในตำนานที่ 'ดาบแห่งจิตใจ' หลับใหลอยู่ มันเป็นแค่ตำนานงั้นหรือ?",
						"hindi": "वह पौराणिक भूमि जहाँ 'मन की तलवार' सोई हुई है। क्या यह सिर्फ एक किंवदंती है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "마음의 검…?",
						"english": "The Sword of Mind…?",
						"japanese": "心の剣…？",
						"chinese": "心之剑……？",
						"french": "L'Épée de l'Esprit… ?",
						"spanish": "¿La Espada de la Mente…?",
						"vietnamese": "Thanh kiếm Trí tuệ…?",
						"thai": "ดาบแห่งจิตใจ…?",
						"hindi": "मन की तलवार…?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_2"
				},
				{
					"speaker": "amir",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "진실을 쫓는 자는 언제나 그림자를 조심해야 해. 욕망은 가장 달콤한 함정이니까.",
						"english": "Those who chase truth must always beware of shadows. Desire is the sweetest trap.",
						"japanese": "真実を追う者は、常に影に気をつけなければならない。欲望は最も甘い罠だからだ。",
						"chinese": "追逐真相之人，务必提防阴影。因为欲望是最甜美的陷阱。",
						"french": "Ceux qui poursuivent la vérité doivent toujours se méfier des ombres. Le désir est le piège le plus doux.",
						"spanish": "Quienes persiguen la verdad deben cuidarse siempre de las sombras. El deseo es la trampa más dulce.",
						"vietnamese": "Kẻ theo đuổi sự thật phải luôn cảnh giác với bóng tối. Ham muốn là cạm bẫy ngọt ngào nhất.",
						"thai": "ผู้ที่ไล่ตามความจริงต้องระวังเงาเสมอ เพราะความปรารถนาคือกับดักที่หอมหวานที่สุด",
						"hindi": "सच्चाई का पीछा करने वालों को हमेशा परछाइयों से सावधान रहना चाहिए। लालच सबसे मीठा जाल है।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "amir"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "지도는 더욱 깊은 심연으로 이끌었다. 불안한 기운이 감돌았다.",
						"english": "The map led deeper into the abyss. An unsettling aura hung heavy.",
						"japanese": "地図はさらに深い深淵へと導いた。不安な気配が漂っていた。",
						"chinese": "地图引向更深的深渊。一股不安的气息弥漫开来。",
						"french": "La carte menait plus profondément dans l'abîme. Une aura inquiétante planait.",
						"spanish": "El mapa conducía a un abismo aún más profundo. Un aura inquietante flotaba en el aire.",
						"vietnamese": "Bản đồ dẫn sâu hơn vào vực thẳm. Một luồng khí bất an bao trùm.",
						"thai": "แผนที่นำไปสู่เหวลึกยิ่งขึ้น บรรยากาศที่ไม่สบายใจปกคลุมไปทั่ว",
						"hindi": "नक्शा और गहरे पाताल में ले गया। एक बेचैन करने वाली आभा छाई हुई थी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이 기분… 마치 누군가 우릴 지켜보는 것 같아.",
						"english": "This feeling… It's like someone's watching us.",
						"japanese": "この感覚…まるで誰かに見られているようだ。",
						"chinese": "这种感觉……好像有人在监视我们。",
						"french": "Ce sentiment… C'est comme si quelqu'un nous observait.",
						"spanish": "Esta sensación… Es como si alguien nos estuviera observando.",
						"vietnamese": "Cảm giác này… cứ như có ai đó đang theo dõi chúng ta.",
						"thai": "ความรู้สึกนี้… เหมือนมีใครบางคนกำลังเฝ้าดูเราอยู่",
						"hindi": "यह एहसास… जैसे कोई हमें देख रहा है।"
					}
				},
				{
					"speaker": "amir",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "사막은 모든 것을 집어삼키지. 특히, 진실을 파헤치려는 자들을.",
						"english": "The desert devours everything. Especially those who seek to unearth the truth.",
						"japanese": "砂漠はすべてを飲み込む。特に、真実を暴こうとする者たちを。",
						"chinese": "沙漠吞噬一切。尤其是那些试图揭露真相的人。",
						"french": "Le désert dévore tout. Surtout ceux qui cherchent à déterrer la vérité.",
						"spanish": "El desierto lo devora todo. Especialmente a quienes intentan desenterrar la verdad.",
						"vietnamese": "Sa mạc nuốt chửng mọi thứ. Đặc biệt là những kẻ cố gắng khai quật sự thật.",
						"thai": "ทะเลทรายกลืนกินทุกสิ่ง โดยเฉพาะอย่างยิ่งผู้ที่พยายามขุดคุ้ยความจริง",
						"hindi": "रेगिस्तान सब कुछ निगल जाता है। खासकर उन्हें जो सच को उजागर करने की कोशिश करते हैं।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "무슨 말을 하고 싶은 거야?",
						"english": "What are you trying to say?",
						"japanese": "何を言いたいんだ？",
						"chinese": "你到底想说什么？",
						"french": "Qu'est-ce que tu essaies de dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ngươi muốn nói gì?",
						"thai": "คุณกำลังจะบอกอะไร?",
						"hindi": "तुम क्या कहना चाहते हो?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "음유시인의 노래에 이런 구절이 있어. '부서진 꿈을 춤추는 자, 환영 속에 숨어 광기를 부르리라.' 이 지하의 어둠… 그 광기의 시작일지도 몰라.",
						"english": "A minstrel's song has this verse: 'He who dances with shattered dreams, hidden in illusion, shall summon madness.' This darkness underground… it might be the beginning of that madness.",
						"japanese": "吟遊詩人の歌にこんな一節がある。『砕けた夢と踊る者、幻影に隠れて狂気を呼び起こす。』この地下の闇…それが狂気の始まりなのかもしれない。",
						"chinese": "吟游诗人的歌谣中有这么一句：'与破碎之梦共舞者，隐匿于幻象，召唤疯狂。' 这地下之暗……或许就是那疯狂的开端。",
						"french": "Une chanson de ménestrel contient ce vers : « Celui qui danse avec des rêves brisés, caché dans l'illusion, invoquera la folie. » Cette obscurité souterraine… c'est peut-être le début de cette folie.",
						"spanish": "Un canto de bardo dice así: 'El que baila con sueños rotos, escondido en la ilusión, convocará la locura.' Esta oscuridad subterránea… podría ser el comienzo de esa locura.",
						"vietnamese": "Bài hát của người hát rong có câu này: 'Kẻ khiêu vũ với những giấc mơ tan vỡ, ẩn mình trong ảo ảnh, sẽ triệu hồi sự điên loạn.' Bóng tối dưới lòng đất này… có thể là khởi đầu của sự điên loạn đó.",
						"thai": "เพลงของนักกวีมีบทนี้ว่า: 'ผู้ที่เต้นรำกับความฝันที่แตกสลาย ซ่อนอยู่ในภาพลวงตา จะเรียกความวิกลจริตมา' ความมืดใต้ดินนี้… อาจเป็นจุดเริ่มต้นของความวิกลจริตนั้น",
						"hindi": "एक चारण के गीत में यह छंद है: 'जो टूटे सपनों के साथ नाचता है, भ्रम में छिपा, वह पागलपन को बुलाएगा।' यह भूमिगत अंधेरा… उस पागलपन की शुरुआत हो सकता है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "amir"
				},
				{
					"speaker": "amir",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "조심해. 발걸음마다 덫이 있을 수 있어.",
						"english": "Be careful. There might be a trap with every step.",
						"japanese": "気をつけろ。一歩ごとに罠があるかもしれない。",
						"chinese": "小心。每一步都可能有陷阱。",
						"french": "Fais attention. Il pourrait y avoir un piège à chaque pas.",
						"spanish": "Ten cuidado. Podría haber una trampa en cada paso.",
						"vietnamese": "Cẩn thận. Có thể có bẫy ở mỗi bước đi.",
						"thai": "ระวังด้วย ทุกย่างก้าวอาจมีกับดัก",
						"hindi": "सावधान रहो। हर कदम पर जाल हो सकता है।"
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						3,
						1
					],
					"action": "enter",
					"speaker": "amir",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "젠장, 막다른 길이야! 돌아갈 수 없어!",
						"english": "Damn, a dead end! No turning back!",
						"japanese": "くそ、行き止まりだ！もう戻れない！",
						"chinese": "该死，死路一条！回不去了！",
						"french": "Maudit, une impasse ! Pas de retour possible !",
						"spanish": "¡Maldita sea, un callejón sin salida! ¡No hay vuelta atrás!",
						"vietnamese": "Chết tiệt, đường cụt rồi! Không quay lại được!",
						"thai": "บ้าเอ๊ย ทางตัน! กลับไม่ได้แล้ว!",
						"hindi": "लानत है, यह एक बंद गली है! वापस नहीं जा सकते!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "amir",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "아니! 이건 함정이야! 우릴 기다리고 있었어!",
						"english": "No! It's a trap! They were waiting for us!",
						"japanese": "まさか！これは罠だ！僕らを待ち伏せていたのか！",
						"chinese": "不！这是陷阱！他们一直在等我们！",
						"french": "Non ! C'est un piège ! Ils nous attendaient !",
						"spanish": "¡No! ¡Es una trampa! ¡Nos estaban esperando!",
						"vietnamese": "Không! Đây là một cái bẫy! Chúng đã đợi chúng ta!",
						"thai": "ไม่นะ! นี่มันกับดัก! พวกมันรอเราอยู่!",
						"hindi": "नहीं! यह एक जाल है! वे हमारा इंतज़ार कर रहे थे!"
					}
				},
				{
					"content": {
						"korean": "속았단 말인가! 누가…!",
						"english": "Were we tricked?! Who…!",
						"japanese": "騙されたのか！誰が…！",
						"chinese": "我们被骗了吗？！谁……！",
						"french": "On nous a trompés ?! Qui… !",
						"spanish": "¡¿Nos engañaron?! ¡¿Quién…?!",
						"vietnamese": "Chúng ta bị lừa sao?! Ai…!",
						"thai": "โดนหลอกงั้นเหรอ! ใครกัน…!",
						"hindi": "क्या हमें धोखा दिया गया था?! कौन…!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "amir",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "도망쳐야 해! 이곳의 그림자는… 평범한 존재가 아니야!",
						"english": "We have to escape! The shadows here… are no ordinary beings!",
						"japanese": "逃げないと！ここの影は…ただの存在じゃない！",
						"chinese": "我们必须逃！这里的影子…可不是普通的生物！",
						"french": "Il faut s'échapper ! Les ombres ici… ne sont pas des êtres ordinaires !",
						"spanish": "¡Tenemos que escapar! Las sombras aquí… ¡no son seres ordinarios!",
						"vietnamese": "Chúng ta phải trốn thoát! Những bóng tối ở đây… không phải thứ bình thường!",
						"thai": "เราต้องหนี! เงาที่นี่… ไม่ใช่สิ่งมีชีวิตธรรมดา!",
						"hindi": "हमें भागना होगा! यहाँ की परछाइयाँ… कोई साधारण प्राणी नहीं हैं!"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "사막의 심장이자 함정의 중심부. 거대한 그림자가 서서히 실체를 드러냈다.",
						"english": "The heart of the desert, the core of the trap. A colossal shadow slowly revealed its true form.",
						"japanese": "砂漠の心臓、罠の中心部。巨大な影がゆっくりとその実体を現した。",
						"chinese": "沙漠的心脏，陷阱的中心。一个巨大的影子慢慢显露出了它的真面目。",
						"french": "Le cœur du désert, le centre du piège. Une ombre colossale révéla lentement sa vraie forme.",
						"spanish": "El corazón del desierto, el centro de la trampa. Una sombra colosal reveló lentamente su verdadera forma.",
						"vietnamese": "Trái tim của sa mạc, trung tâm của cái bẫy. Một bóng tối khổng lồ từ từ hiện rõ hình hài.",
						"thai": "ใจกลางทะเลทราย แกนกลางของกับดัก เงาขนาดมหึมาค่อยๆ เผยรูปร่างที่แท้จริงออกมา",
						"hindi": "रेगिस्तान का हृदय, जाल का केंद्र। एक विशाल छाया ने धीरे-धीरे अपना असली रूप प्रकट किया।"
					},
					"speaker": "narrator"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "마침내, 모든 것을 집어삼킬 듯한 그림자의 주인이 모습을 드러냈다.",
						"english": "Finally, the master of the shadow, seemingly capable of devouring all, revealed itself.",
						"japanese": "ついに、すべてを飲み込むかのような影の主が姿を現した。",
						"chinese": "终于，那个仿佛能吞噬一切的影子主人现身了。",
						"french": "Finalement, le maître de l'ombre, semblant capable de tout dévorer, se révéla.",
						"spanish": "Finalmente, el amo de la sombra, que parecía capaz de devorarlo todo, se reveló.",
						"vietnamese": "Cuối cùng, chủ nhân của bóng tối, kẻ dường như có thể nuốt chửng mọi thứ, đã xuất hiện.",
						"thai": "ในที่สุด เจ้าแห่งเงาที่ดูเหมือนจะกลืนกินทุกสิ่งก็ปรากฏตัวขึ้น",
						"hindi": "अंततः, छाया का स्वामी, जो सब कुछ निगलने में सक्षम प्रतीत होता था, प्रकट हुआ।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "하찮은 벌레들. 감히 나의 영역을 침범하다니.",
						"english": "Insignificant bugs. How dare you trespass into my domain.",
						"japanese": "取るに足らない虫けらども。よくも私の領域を侵したな。",
						"chinese": "卑微的虫子。竟敢侵犯我的领地。",
						"french": "Insectes insignifiants. Comment osez-vous empiéter sur mon domaine.",
						"spanish": "Insectos insignificantes. ¿Cómo os atrevéis a invadir mi dominio?",
						"vietnamese": "Những con côn trùng nhỏ bé. Dám xâm phạm lãnh địa của ta.",
						"thai": "พวกแมลงชั้นต่ำ. กล้าดียังไงมาบุกรุกอาณาเขตของข้า",
						"hindi": "तुच्छ कीड़े। तुम्हारी हिम्मत कैसे हुई मेरे क्षेत्र में घुसने की।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "{random_boss}! 네놈이 이 모든 음모의 배후인가!",
						"english": "{random_boss}! Are you behind this whole conspiracy?!",
						"japanese": "{random_boss}！貴様がこの陰謀の黒幕か！",
						"chinese": "{random_boss}！你就是这一切阴谋的幕后主使？！",
						"french": "{random_boss} ! Es-tu derrière toute cette conspiration ?!",
						"spanish": "¡{random_boss}! ¡¿Eres tú quien está detrás de toda esta conspiración?!",
						"vietnamese": "{random_boss}! Ngươi là kẻ đứng sau tất cả âm mưu này sao?!",
						"thai": "{random_boss}! แกคือผู้อยู่เบื้องหลังแผนการทั้งหมดนี้งั้นรึ!",
						"hindi": "{random_boss}! क्या तुम इस सारी साज़िश के पीछे हो?!"
					}
				},
				{
					"content": {
						"korean": "음모? 나는 그저… 진실을 보지 못하는 자들을 심판할 뿐. 여기서 영원히 조각나거라!",
						"english": "Conspiracy? I merely… judge those who cannot see the truth. Be shattered here forever!",
						"japanese": "陰謀だと？私はただ…真実を見ようとしない者たちを裁くだけだ。ここで永遠に砕け散れ！",
						"chinese": "阴谋？我只是…审判那些无法看到真相的人。在此永远粉碎吧！",
						"french": "Conspiration ? Je ne fais que… juger ceux qui ne peuvent voir la vérité. Soyez brisés ici pour l'éternité !",
						"spanish": "¿Conspiración? Yo simplemente… juzgo a aquellos que no pueden ver la verdad. ¡Sé destrozado aquí para siempre!",
						"vietnamese": "Âm mưu? Ta chỉ… phán xét những kẻ không thể nhìn thấy sự thật. Hãy vỡ tan ở đây mãi mãi!",
						"thai": "แผนการงั้นรึ? ข้าแค่… ตัดสินพวกที่ไม่เห็นความจริงเท่านั้น จงแตกสลายไปตลอดกาลที่นี่ซะ!",
						"hindi": "साज़िश? मैं केवल… उन लोगों का न्याय करता हूँ जो सच नहीं देख सकते। यहीं हमेशा के लिए बिखर जाओ!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				}
			],
			"win_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "{random_boss}는 조각난 환영처럼 스러졌다. 그러나 그림자는 더욱 짙어지는 듯했다.",
						"english": "{random_boss} crumbled like a shattered illusion. Yet, the shadows seemed to grow darker.",
						"japanese": "{random_boss}は砕け散った幻影のように消え去った。しかし、影はさらに濃くなったようだった。",
						"chinese": "{random_boss}像破碎的幻影般消散了。然而，阴影似乎变得更加深沉了。",
						"french": "{random_boss} s'effondra comme une illusion brisée. Pourtant, les ombres semblaient s'épaissir.",
						"spanish": "{random_boss} se desmoronó como una ilusión rota. Sin embargo, las sombras parecían volverse más oscuras.",
						"vietnamese": "{random_boss} tan biến như một ảo ảnh vỡ vụn. Tuy nhiên, bóng tối dường như càng trở nên u ám hơn.",
						"thai": "{random_boss} สลายไปราวกับภาพลวงตาที่แตกสลาย ทว่าเงามืดกลับดูเหมือนจะเข้มข้นขึ้น",
						"hindi": "{random_boss} एक टूटे हुए भ्रम की तरह बिखर गया। फिर भी, परछाइयाँ और भी गहरी होती हुई प्रतीत हुईं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "크크… 어리석은… 겨우 이 정도에 만족하다니… '마음의 검'은… 네가 상상할 수 없을 만큼 거대해…!",
						"english": "Hmph... Foolish... Content with merely this much... The 'Sword of Mind'... is vaster than you could ever imagine...!",
						"japanese": "クク…愚かな…たかだかこれしきで満足するとは…「心の剣」は…お前が想像以上に巨大だ…！",
						"chinese": "呵呵……愚蠢……竟满足于此等程度……“心之剑”……远比你想象的要巨大……！",
						"french": "Hmph... Stupide... Te contenter de si peu... L'Épée de l'Esprit... est bien plus vaste que tu ne pourrais l'imaginer...!",
						"spanish": "Jeje... Qué necio... ¿Contentarte con tan poco? La 'Espada de la Mente'... ¡es mucho más grande de lo que podrías imaginar...!",
						"vietnamese": "Khà khà... Ngu xuẩn... Chỉ nhiêu đây mà đã thỏa mãn rồi sao... 'Thanh kiếm của Tâm hồn'... vĩ đại hơn ngươi tưởng tượng rất nhiều...!",
						"thai": "คิกๆ... ช่างโง่เขลา... พอใจแค่นี้เองหรือ... 'ดาบแห่งจิตวิญญาณ'... ยิ่งใหญ่เกินกว่าที่เจ้าจะจินตนาการได้...!",
						"hindi": "हम्म... मूर्ख... बस इतने से ही संतुष्ट? 'मन की तलवार'... तेरी कल्पना से कहीं ज़्यादा विशाल है...!"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "무슨 소리야?! 모든 게 끝난 게 아니라고?!",
						"english": "What are you talking about?! It's not over yet?!",
						"japanese": "何を言っている？！まだ終わっていないのか？！",
						"chinese": "你在说什么？！一切都还没结束？！",
						"french": "Qu'est-ce que tu racontes ?! Tout n'est pas encore fini ?!",
						"spanish": "¿De qué hablas? ¡¿Aún no ha terminado todo?!",
						"vietnamese": "Ngươi đang nói gì vậy?! Mọi chuyện vẫn chưa kết thúc sao?!",
						"thai": "เจ้าพูดอะไรน่ะ?! ยังไม่จบอีกเหรอ?!",
						"hindi": "क्या कह रहे हो?! क्या सब कुछ ख़त्म नहीं हुआ?!"
					}
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "amir",
					"action": "enter",
					"spot": [
						4,
						2
					]
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "역시… 이 자는 그저 미끼였어. '마음의 검'은… 더 깊은 어둠 속에 잠들어 있어.",
						"english": "As expected... this one was merely a decoy. The 'Sword of Mind'... slumbers in deeper shadows.",
						"japanese": "やはり…こいつはただの囮だった。「心の剣」は…もっと深い闇の中に眠っている。",
						"chinese": "果然……这家伙不过是个诱饵。“心之剑”……沉睡在更深的黑暗之中。",
						"french": "Comme prévu... cet individu n'était qu'un leurre. L'Épée de l'Esprit... repose dans les ténèbres les plus profondes.",
						"spanish": "Como esperaba... este era solo un señuelo. La 'Espada de la Mente'... yace dormida en las sombras más profundas.",
						"vietnamese": "Quả nhiên... kẻ này chỉ là một mồi nhử. 'Thanh kiếm của Tâm hồn'... đang ngủ say trong bóng tối sâu thẳm hơn.",
						"thai": "จริงด้วย... นี่เป็นแค่เหยื่อล่อเท่านั้น 'ดาบแห่งจิตวิญญาณ'... หลับใหลอยู่ในเงามืดที่ลึกกว่านั้น",
						"hindi": "जैसा कि सोचा था... यह तो बस एक चारा था। 'मन की तलवार'... और भी गहरे अँधेरे में सोई हुई है।"
					},
					"speaker": "amir"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "파편화된 진실은 아직 조각나 있었다. 그들은 멈추지 않고, 다음 조각을 찾아 발걸음을 옮겼다.",
						"english": "The fragmented truth remained shattered. They did not stop, moving onward to find the next piece.",
						"japanese": "断片化された真実はまだ砕け散っていた。彼らは立ち止まらず、次の破片を探して歩みを進めた。",
						"chinese": "支离破碎的真相仍未完整。他们没有停下脚步，继续寻找下一个碎片。",
						"french": "La vérité fragmentée demeurait en morceaux. Ils ne s'arrêtèrent pas, avançant pour trouver le prochain fragment.",
						"spanish": "La verdad fragmentada seguía hecha pedazos. No se detuvieron y avanzaron en busca del siguiente fragmento.",
						"vietnamese": "Sự thật đã bị phân mảnh vẫn còn vỡ vụn. Họ không ngừng lại, tiếp tục bước đi tìm kiếm mảnh ghép tiếp theo.",
						"thai": "ความจริงที่กระจัดกระจายยังคงแตกเป็นเสี่ยงๆ พวกเขาไม่หยุดนิ่ง ก้าวต่อไปเพื่อค้นหาชิ้นส่วนถัดไป",
						"hindi": "खंडित सत्य अभी भी बिखरा हुआ था। वे रुके नहीं, अगले टुकड़े की तलाश में आगे बढ़ गए।"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그림자에 휩싸여, 모든 것이 산산조각 나는 듯한 고통이 밀려왔다.",
						"english": "Enveloped by shadows, a pain as if everything was shattering washed over them.",
						"japanese": "影に包まれ、すべてが粉々に砕け散るかのような苦痛が押し寄せた。",
						"chinese": "被阴影笼罩，一切仿佛都在支离破碎，痛苦袭来。",
						"french": "Enveloppé par les ombres, une douleur comme si tout se brisait les submergea.",
						"spanish": "Envuelto en sombras, un dolor como si todo se hiciera añicos lo invadió.",
						"vietnamese": "Bị bóng tối bao trùm, một nỗi đau như mọi thứ đang tan vỡ ập đến.",
						"thai": "ถูกความมืดมิดกลืนกิน ความเจ็บปวดราวกับทุกสิ่งกำลังแตกสลายถาโถมเข้ามา",
						"hindi": "छायाओं से घिरकर, ऐसा दर्द उमड़ पड़ा मानो सब कुछ बिखर रहा हो।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "크크… 덧없는 저항이군. 네놈의 분노는 결국 나의 힘이 될 뿐이다.",
						"english": "Hmph... Futile resistance. Your wrath will only become my strength in the end.",
						"japanese": "クク…儚い抵抗だな。貴様の怒りは結局、我が力となるだけだ。",
						"chinese": "呵呵……徒劳的抵抗。你的愤怒终将化为我的力量。",
						"french": "Hmph... Résistance futile. Ta colère ne fera que renforcer mon pouvoir à la fin.",
						"spanish": "Jeje... Resistencia inútil. Tu ira solo se convertirá en mi fuerza al final.",
						"vietnamese": "Khà khà... Sự kháng cự phù du. Sự phẫn nộ của ngươi rốt cuộc chỉ trở thành sức mạnh của ta mà thôi.",
						"thai": "คิกๆ... การต่อต้านที่ไร้ค่า ความโกรธแค้นของเจ้าจะกลายเป็นพลังของข้าในที่สุด",
						"hindi": "हम्म... व्यर्थ का प्रतिरोध। तुम्हारा क्रोध अंत में मेरी शक्ति ही बनेगा।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "젠장… 아직… 끝나지 않았어…!",
						"english": "Damn it... It's not... over yet...!",
						"japanese": "ちくしょう…まだ…終わってない…！",
						"chinese": "该死……还没……结束……！",
						"french": "Maudit... Ce n'est pas... encore fini...!",
						"spanish": "¡Maldita sea! ¡Aún... no ha terminado...!",
						"vietnamese": "Khốn kiếp... Vẫn... chưa kết thúc...!",
						"thai": "บ้าเอ๊ย... ยัง... ไม่จบ...!",
						"hindi": "धिक्कार है... अभी... खत्म नहीं हुआ...!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "그 어리석은 희망이 너를 더 깊은 나락으로 이끌 것이다. 다시 와봐라, 조각난 존재여.",
						"english": "That foolish hope will lead you deeper into the abyss. Come back again, fragmented being.",
						"japanese": "その愚かな希望がお前をさらなる深淵へと誘うだろう。また来るがいい、砕け散った存在よ。",
						"chinese": "那愚蠢的希望会将你引向更深的深渊。再来吧，破碎的存在。",
						"french": "Cet espoir insensé te mènera plus profondément dans les abysses. Reviens, être fragmenté.",
						"spanish": "Esa esperanza estúpida te llevará a un abismo más profundo. Vuelve a intentarlo, ser fragmentado.",
						"vietnamese": "Hy vọng ngu ngốc đó sẽ dẫn ngươi vào vực sâu hơn. Hãy quay lại đây, kẻ bị phân mảnh.",
						"thai": "ความหวังโง่เขลานั่นจะนำเจ้าลงสู่ห้วงลึกยิ่งกว่าเดิม ลองกลับมาอีกครั้งสิ เจ้าสิ่งมีชีวิตที่แตกร้าว",
						"hindi": "वह मूर्खतापूर्ण आशा तुम्हें और गहरे पाताल में ले जाएगी। फिर से आना, खंडित प्राणी।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"사막의 심장, 파편 도시.",
			"진실은 모래처럼 흩어졌고, 소문은 그림자를 불렀다.",
			"사라진 유물, 수상한 거래… 이 모든 것을 쫓는 자에게.",
			"깊은 지하에서, 거대한 함정이 기다리고 있었다."
		],
		"english": [
			"Shard City, the heart of the desert.",
			"Truth scattered like sand, rumors summoned shadows.",
			"Lost relics, suspicious dealings... For those who chase it all.",
			"Deep underground, a colossal trap awaited."
		],
		"japanese": [
			"砂漠の心臓、破片都市。",
			"真実は砂のように散り、噂は影を呼んだ。",
			"失われた遺物、怪しい取引… これらすべてを追う者に。",
			"深い地下で、巨大な罠が待ち受けていた。"
		],
		"chinese": [
			"沙漠之心，碎片之城。",
			"真相如沙般散落，流言引来阴影。",
			"失落的遗物，可疑的交易……致追逐这一切之人。",
			"在深邃的地下，巨大的陷阱等待着。"
		],
		"french": [
			"Cité des Éclats, le cœur du désert.",
			"La vérité s'est éparpillée comme le sable, les rumeurs ont appelé les ombres.",
			"Reliques perdues, transactions suspectes… Pour ceux qui pourchassent tout cela.",
			"Dans les profondeurs souterraines, un piège colossal attendait."
		],
		"spanish": [
			"Ciudad Fragmentada, el corazón del desierto.",
			"La verdad se dispersó como arena, los rumores convocaron sombras.",
			"Reliquias perdidas, tratos sospechosos... Para aquellos que persiguen todo esto.",
			"En lo profundo del subsuelo, una trampa colosal esperaba."
		],
		"vietnamese": [
			"Thành phố Mảnh vỡ, trái tim sa mạc.",
			"Sự thật tan biến như cát, tin đồn triệu hồi bóng tối.",
			"Di vật biến mất, giao dịch đáng ngờ… Dành cho những ai theo đuổi tất cả.",
			"Sâu dưới lòng đất, một cái bẫy khổng lồ đang chờ đợi."
		],
		"thai": [
			"เมืองเศษเสี้ยว หัวใจแห่งทะเลทราย",
			"ความจริงกระจัดกระจายดุจทราย ข่าวลือเรียกเงา",
			"โบราณวัตถุที่หายไป การค้าที่น่าสงสัย... สำหรับผู้ที่ตามล่าทุกสิ่ง",
			"ใต้ดินลึก กับดักขนาดมหึมากำลังรออยู่"
		],
		"hindi": [
			"रेगिस्तान का दिल, खंडहर शहर।",
			"सत्य रेत की तरह बिखर गया, अफवाहों ने परछाइयों को बुलाया।",
			"गुमशुदा अवशेष, संदिग्ध सौदे... उन सभी के लिए जो इसका पीछा करते हैं।",
			"गहरे भूमिगत, एक विशाल जाल इंतज़ार कर रहा था।"
		]
	}
} as const;
