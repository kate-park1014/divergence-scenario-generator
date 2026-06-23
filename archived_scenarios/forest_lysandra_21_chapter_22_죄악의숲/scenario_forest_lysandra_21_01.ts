export const scenario_forest_lysandra_21_01 = {
	"scenario_id": "forest_lysandra_21_01",
	"order": 1,
	"act": "intro",
	"theme": "forest",
	"actors": {
		"ela": {
			"id": "mon_24765cb2-6fc0-452e-8969-871a82349c70",
			"name": {
				"korean": "엘라",
				"english": "Ela",
				"japanese": "エラ",
				"chinese": "艾拉",
				"french": "Ela",
				"spanish": "Ela",
				"vietnamese": "Ela",
				"thai": "เอล่า",
				"hindi": "एला"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/55d3e9ee-c589-40ab-dfa4-a658bbddd400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/cfacc842-115e-4175-a7fa-3111a468ed00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"숲은 고요했다. 모든 것이 영원할 것처럼.",
			"길잡이 엘라는 여왕의 치유가 모두를 구할 거라 믿었다.",
			"그러나 고대 유물의 조각은 다른 진실을 속삭였다.",
			"아름다운 환영 아래, 죄책감의 그림자가 스며들고 있었다."
		],
		"english": [
			"The forest was silent, as if everything would last forever.",
			"Guide Ela believed the Queen's healing would save everyone.",
			"But fragments of the ancient artifact whispered a different truth.",
			"Beneath the beautiful illusion, a shadow of guilt was seeping in."
		],
		"japanese": [
			"森は静まり返っていた。すべてが永遠であるかのように。",
			"道案内役のエラは、女王の癒しが皆を救うと信じていた。",
			"しかし、古代の遺物の破片は別の真実を囁いた。",
			"美しい幻影の下、罪悪感の影が忍び寄っていた。"
		],
		"chinese": [
			"森林一片寂静，仿佛一切都将永恒。",
			"引导者艾拉相信女王的治愈能拯救所有人。",
			"然而，古老文物的碎片却低语着不同的真相。",
			"在美丽的幻象之下，罪恶的阴影悄然渗入。"
		],
		"french": [
			"La forêt était silencieuse, comme si tout allait durer éternellement.",
			"La guide Ela croyait que la guérison de la Reine sauverait tout le monde.",
			"Mais les fragments de l'ancien artefact murmuraient une autre vérité.",
			"Sous la belle illusion, une ombre de culpabilité s'infiltrait."
		],
		"spanish": [
			"El bosque estaba en silencio, como si todo fuera a durar para siempre.",
			"La guía Ela creía que la curación de la Reina salvaría a todos.",
			"Pero los fragmentos del artefacto antiguo susurraban una verdad diferente.",
			"Bajo la hermosa ilusión, una sombra de culpa se estaba infiltrando."
		],
		"vietnamese": [
			"Rừng thật tĩnh lặng, cứ như thể mọi thứ sẽ tồn tại mãi mãi.",
			"Ela, người dẫn đường, tin rằng sự chữa lành của Nữ hoàng sẽ cứu rỗi tất cả.",
			"Tuy nhiên, những mảnh vỡ của cổ vật lại thì thầm một sự thật khác.",
			"Dưới ảo ảnh tuyệt đẹp, bóng tối tội lỗi đang dần len lỏi."
		],
		"thai": [
			"ป่าเงียบสงัด ราวกับทุกสิ่งจะคงอยู่ชั่วนิรันดร์",
			"เอล่า ผู้นำทาง เชื่อว่าพลังการรักษาของราชินีจะช่วยทุกคนได้",
			"ทว่า ชิ้นส่วนของวัตถุโบราณกลับกระซิบความจริงที่แตกต่างออกไป",
			"ใต้ภาพลวงตาอันงดงาม เงาแห่งความรู้สึกผิดกำลังคืบคลานเข้ามา"
		],
		"hindi": [
			"वन शांत था, मानो सब कुछ अनंत काल तक रहेगा।",
			"मार्गदर्शक एला को विश्वास था कि रानी का उपचार सभी को बचाएगा।",
			"किंतु प्राचीन कलाकृति के टुकड़े एक अलग सत्य फुसफुसा रहे थे।",
			"सुंदर भ्रम के नीचे, अपराधबोध की छाया फैल रही थी।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "숲 입구에 다다르자 순결하고 아름다운 기운이 탐험대를 감쌌다.",
						"english": "Upon reaching the forest entrance, a pure and beautiful energy enveloped the expedition.",
						"japanese": "森の入り口にたどり着くと、純粋で美しい気が探検隊を包み込んだ。",
						"chinese": "抵达森林入口时，一股纯洁而美好的气息环绕着探险队。",
						"french": "En atteignant l'entrée de la forêt, une énergie pure et magnifique enveloppa l'expédition.",
						"spanish": "Al llegar a la entrada del bosque, una energía pura y hermosa envolvió a la expedición.",
						"vietnamese": "Vừa đến cửa rừng, một luồng khí trong lành và đẹp đẽ bao trùm cả đoàn thám hiểm.",
						"thai": "เมื่อมาถึงทางเข้าป่า พลังงานอันบริสุทธิ์และงดงามก็โอบล้อมคณะสำรวจ",
						"hindi": "वन के प्रवेश द्वार पर पहुँचते ही एक शुद्ध और सुंदर ऊर्जा ने अभियान दल को घेर लिया।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "와… 정말 신비롭다. 여기가 그 숲이구나?",
						"english": "Wow... it's truly mysterious. Is this the forest?",
						"japanese": "わあ…本当に神秘的だ。ここがあの森なんだ？",
						"chinese": "哇……真是神秘。这里就是那片森林吗？",
						"french": "Wow... c'est vraiment mystérieux. C'est ça, la forêt ?",
						"spanish": "Vaya... es realmente misterioso. ¿Es este el bosque?",
						"vietnamese": "Wow... thật sự huyền bí. Đây chính là khu rừng đó sao?",
						"thai": "ว้าว... ลึกลับจริงๆ ที่นี่คือป่านั่นเองสินะ?",
						"hindi": "वाह... यह सचमुच रहस्यमय है। क्या यह वही जंगल है?"
					},
					"emotion": "happy",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "ela",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "네, 여왕님의 축복이 깃든 곳입니다. 모든 상처를 치유하는 고대의 숲이죠.",
						"english": "Yes, this is where the Queen's blessing resides. It's an ancient forest that heals all wounds.",
						"japanese": "はい、女王様の祝福が宿る場所です。すべての傷を癒す古代の森ですよ。",
						"chinese": "是的，这里是女王陛下赐福之地。这是一片能治愈所有伤痛的古老森林。",
						"french": "Oui, c'est là que réside la bénédiction de la Reine. C'est une forêt ancienne qui guérit toutes les blessures.",
						"spanish": "Sí, aquí reside la bendición de la Reina. Es un bosque antiguo que cura todas las heridas.",
						"vietnamese": "Vâng, đây là nơi chứa đựng phước lành của Nữ hoàng. Đó là một khu rừng cổ đại chữa lành mọi vết thương.",
						"thai": "ใช่แล้ว ที่นี่คือที่ที่พรของราชินีสถิตอยู่ เป็นป่าโบราณที่เยียวยาทุกบาดแผล",
						"hindi": "हाँ, यह वह स्थान है जहाँ रानी का आशीर्वाद है। यह एक प्राचीन वन है जो सभी घावों को भर देता है।"
					},
					"emotion": "happy",
					"speaker": "ela",
					"type": "speech"
				},
				{
					"content": {
						"korean": "저건 뭐야? (조각 발견)",
						"english": "What's that? (Fragment found)",
						"japanese": "あれは何だ？ (破片を発見)",
						"chinese": "那是什么？（发现碎片）",
						"french": "Qu'est-ce que c'est ? (Fragment trouvé)",
						"spanish": "¿Qué es eso? (Fragmento encontrado)",
						"vietnamese": "Cái gì kia? (Phát hiện mảnh vỡ)",
						"thai": "นั่นอะไรน่ะ? (พบชิ้นส่วน)",
						"hindi": "वह क्या है? (टुकड़ा मिला)"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "숲 속 폐허에서 낡은 청동 조각이 발견된다. 아름다운 여인과 숲을 좀먹는 괴물의 이중적 형상이었다.",
						"english": "An old bronze fragment is found in the forest ruins. It depicted a dual image: a beautiful woman and a monster devouring the forest.",
						"japanese": "森の廃墟で古びた青銅の破片が発見される。美しい女性と森を蝕む怪物の二重の姿が描かれていた。",
						"chinese": "在森林废墟中发现了一块古老的青铜碎片。它描绘了一个双重形象：一位美丽的女人和一只吞噬森林的怪物。",
						"french": "Un vieux fragment de bronze est trouvé dans les ruines de la forêt. Il représentait une image double : une belle femme et un monstre rongeant la forêt.",
						"spanish": "Se encuentra un viejo fragmento de bronce en las ruinas del bosque. Representaba una imagen dual: una mujer hermosa y un monstruo que devoraba el bosque.",
						"vietnamese": "Một mảnh đồng cũ được tìm thấy trong tàn tích rừng. Nó khắc họa hình ảnh kép: một người phụ nữ xinh đẹp và một con quái vật đang gặm nhấm khu rừng.",
						"thai": "พบชิ้นส่วนทองสัมฤทธิ์เก่าแก่ในซากปรักหักพังของป่า มันเป็นภาพสองด้าน: ผู้หญิงที่สวยงามและสัตว์ประหลาดที่กัดกินป่า",
						"hindi": "जंगल के खंडहरों में एक पुराना कांस्य टुकड़ा मिला। इसमें दोहरी छवि थी: एक खूबसूरत महिला और एक राक्षस जो जंगल को खा रहा था।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "아, 그거요? 오래된 미신 같은 거예요. 아무 의미 없어요.",
						"english": "Oh, that? It's just an old superstition. It means nothing.",
						"japanese": "ああ、あれですか？古い迷信みたいなものですよ。何の意味もありません。",
						"chinese": "哦，那个啊？那只是个古老的迷信。没什么意义。",
						"french": "Oh, ça ? C'est juste une vieille superstition. Ça ne signifie rien.",
						"spanish": "Ah, ¿eso? Es solo una vieja superstición. No significa nada.",
						"vietnamese": "À, cái đó sao? Đó chỉ là một tín ngưỡng cũ thôi. Chẳng có ý nghĩa gì đâu.",
						"thai": "อ๋อ นั่นน่ะเหรอ? มันก็แค่ความเชื่อเก่าๆ ไม่มีอะไรหรอก",
						"hindi": "ओह, वह? वह तो बस एक पुरानी अंधविश्वास है। उसका कोई अर्थ नहीं है।"
					},
					"emotion": "sad",
					"speaker": "ela",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "ela",
					"duration_ms": 500
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "숲이 이상해… 여기 나무들 왜 이렇게 시들었지?",
						"english": "The forest feels strange... Why are these trees so withered?",
						"japanese": "森がおかしい… ここの木々、どうしてこんなに枯れてるの？",
						"chinese": "森林很奇怪……这里的树怎么都枯萎了？",
						"french": "La forêt est étrange... Pourquoi ces arbres sont-ils si flétris ?",
						"spanish": "El bosque es extraño... ¿Por qué estos árboles están tan marchitos?",
						"vietnamese": "Khu rừng thật lạ... Sao những cái cây ở đây lại héo úa thế này?",
						"thai": "ป่าแปลกๆ... ทำไมต้นไม้ที่นี่ถึงเหี่ยวเฉาขนาดนี้?",
						"hindi": "जंगल अजीब है… यहाँ के पेड़ इतने मुरझाए हुए क्यों हैं?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "게다가 이끼도 좀… 징그럽지 않아?",
						"english": "And the moss... isn't it a bit... creepy?",
						"japanese": "それに、苔も少し… 気味悪くない？",
						"chinese": "而且这些苔藓也太……恶心了吧？",
						"french": "Et la mousse... n'est-elle pas un peu... répugnante ?",
						"spanish": "Y el musgo... ¿no es un poco... asqueroso?",
						"vietnamese": "Với lại, mấy cái rêu này… không phải là hơi… ghê rợn sao?",
						"thai": "แถมมอสพวกนี้ก็... น่าขยะแขยงหน่อยๆ รึเปล่า?",
						"hindi": "और काई भी थोड़ी… डरावनी नहीं है?"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_1"
				},
				{
					"content": {
						"korean": "아… 숲이… 스스로 변화하는 과정일 거예요. 자연스러운…",
						"english": "Ah... The forest... it's probably just changing on its own. A natural process...",
						"japanese": "ああ… 森が… 自ら変化している過程なのでしょう。自然なことですよ…",
						"chinese": "啊……森林……这可能是它自我变化的过程。很自然……",
						"french": "Ah... La forêt... c'est probablement un processus de changement naturel. Rien d'anormal...",
						"spanish": "Ah... El bosque... es probablemente un proceso de cambio natural. Es normal...",
						"vietnamese": "À… Khu rừng… có lẽ đang trong quá trình tự thay đổi. Tự nhiên mà thôi…",
						"thai": "อ่า... ป่า... อาจจะเป็นแค่กระบวนการที่มันเปลี่ยนแปลงตัวเองตามธรรมชาติ...",
						"hindi": "आह… जंगल… शायद यह खुद बदल रहा है। स्वाभाविक है…"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "ela"
				},
				{
					"content": {
						"korean": "뭔가 불안해 보여, 엘라.",
						"english": "You seem uneasy, Ella.",
						"japanese": "何か不安そうだね、エラ。",
						"chinese": "你看起来有些不安，艾拉。",
						"french": "Tu sembles inquiète, Ella.",
						"spanish": "Pareces inquieta, Ella.",
						"vietnamese": "Em có vẻ không yên lòng, Ella.",
						"thai": "ดูเหมือนเธอไม่สบายใจนะ, เอลล่า",
						"hindi": "तुम कुछ परेशान लग रही हो, एला।"
					},
					"emotion": "base",
					"speaker": "character_2",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "ela",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이상해요. 숲이… 예전 같지 않아요.",
						"english": "It's strange. The forest... it's not like before.",
						"japanese": "おかしいです。森が… 以前と違います。",
						"chinese": "很奇怪。森林……和以前不一样了。",
						"french": "C'est étrange. La forêt... n'est plus la même.",
						"spanish": "Es extraño. El bosque... no es como antes.",
						"vietnamese": "Thật lạ. Khu rừng… không còn như xưa nữa.",
						"thai": "มันแปลกค่ะ. ป่า... ไม่เหมือนเดิมแล้วค่ะ.",
						"hindi": "यह अजीब है। जंगल… पहले जैसा नहीं है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "ela"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "무슨 일인데?",
						"english": "What's wrong?",
						"japanese": "どうしたの？",
						"chinese": "怎么了？",
						"french": "Qu'est-ce qui ne va pas ?",
						"spanish": "¿Qué pasa?",
						"vietnamese": "Có chuyện gì vậy?",
						"thai": "เกิดอะไรขึ้น?",
						"hindi": "क्या हुआ?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "알 수 없지만… 마치 숲 전체가… 슬퍼하는 것 같아요.",
						"english": "I don't know... but it feels like the whole forest... is grieving.",
						"japanese": "わかりませんが… まるで森全体が… 悲しんでいるようです。",
						"chinese": "我不知道……但感觉整个森林……都在悲伤。",
						"french": "Je ne sais pas... mais on dirait que toute la forêt... est en deuil.",
						"spanish": "No lo sé... pero siento como si todo el bosque... estuviera de luto.",
						"vietnamese": "Em không biết… nhưng cảm giác như cả khu rừng… đang đau buồn.",
						"thai": "ไม่รู้เหมือนกันค่ะ... แต่รู้สึกเหมือนป่าทั้งป่า... กำลังเศร้าโศก.",
						"hindi": "मुझे नहीं पता… पर ऐसा लगता है जैसे पूरा जंगल… दुखी है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "ela"
				},
				{
					"content": {
						"korean": "기분 탓이겠지. 너무 걱정 마.",
						"english": "It's probably just your imagination. Don't worry too much.",
						"japanese": "気のせいだろう。あまり心配するな。",
						"chinese": "可能是你的错觉吧。别太担心了。",
						"french": "C'est probablement ton imagination. Ne t'inquiète pas trop.",
						"spanish": "Será tu imaginación. No te preocupes demasiado.",
						"vietnamese": "Chắc là em nghĩ quá thôi. Đừng lo lắng nhiều quá.",
						"thai": "คงคิดไปเองแหละ. อย่ากังวลมากเลย.",
						"hindi": "शायद यह तुम्हारा वहम है। ज्यादा चिंता मत करो।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_3"
				},
				{
					"speaker": "ela",
					"type": "speech",
					"content": {
						"korean": "아니요… 이건… 뭔가 잘못됐어요.",
						"english": "No... This... something's wrong.",
						"japanese": "いいえ… これは… 何かおかしいです。",
						"chinese": "不……这……出问题了。",
						"french": "Non... Ça... quelque chose ne va pas.",
						"spanish": "No... Esto... algo anda mal.",
						"vietnamese": "Không… Cái này… có điều gì đó không ổn.",
						"thai": "ไม่ค่ะ... นี่มัน... มีบางอย่างผิดปกติ.",
						"hindi": "नहीं… यह… कुछ तो गड़बड़ है।"
					},
					"emotion": "sad"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "ela",
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "숲의 고요함은 더욱 깊어지고, 그 속에 숨겨진 불안한 기운은 탐험대의 심장을 짓눌렀다.",
						"english": "The forest's stillness deepened, and the unsettling aura hidden within weighed heavily on the expedition team's hearts.",
						"japanese": "森の静寂はさらに深まり、その中に隠された不穏な気配は探検隊の心臓を押し潰した。",
						"chinese": "森林的寂静愈发深沉，其中隐藏的不安气息压得探险队心头沉重。",
						"french": "Le silence de la forêt s'approfondit, et l'aura inquiétante qui s'y cachait pesa lourdement sur le cœur de l'équipe d'expédition.",
						"spanish": "La quietud del bosque se hizo más profunda, y la aura inquietante oculta en su interior oprimió los corazones del equipo de expedición.",
						"vietnamese": "Sự tĩnh lặng của khu rừng càng trở nên sâu sắc, và khí tức bất an ẩn chứa bên trong đã đè nặng lên trái tim của đoàn thám hiểm.",
						"thai": "ความเงียบสงบของป่าทวีความลึกซึ้งยิ่งขึ้น และพลังงานอันน่าไม่สบายใจที่ซ่อนอยู่ภายในก็กดทับหัวใจของคณะสำรวจ",
						"hindi": "जंगल की खामोशी और गहरी होती गई, और उसके अंदर छिपी अशांत ऊर्जा ने अन्वेषण दल के दिलों को दबा दिया।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이 고요함이… 오히려 더 무서워.",
						"english": "This silence... it's even more terrifying.",
						"japanese": "この静けさが…むしろもっと怖い。",
						"chinese": "这份寂静…反而更让人害怕。",
						"french": "Ce silence… est encore plus effrayant.",
						"spanish": "Este silencio... es aún más aterrador.",
						"vietnamese": "Sự tĩnh lặng này… ngược lại còn đáng sợ hơn.",
						"thai": "ความเงียบนี้... กลับน่ากลัวยิ่งกว่าเดิม",
						"hindi": "यह खामोशी… उलटी ज़्यादा डरावनी है।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "겉으로는 평화로운데… 속은 썩어가는 기분이야.",
						"english": "It looks peaceful on the surface... but I feel like it's rotting inside.",
						"japanese": "外見は穏やかなのに…内側は腐っているような気がする。",
						"chinese": "表面上很平静…但感觉内心在腐烂。",
						"french": "En apparence, c'est paisible… mais à l'intérieur, j'ai l'impression que ça pourrit.",
						"spanish": "Por fuera es pacífico... pero siento que por dentro se está pudriendo.",
						"vietnamese": "Bề ngoài thì yên bình… nhưng bên trong lại có cảm giác đang mục ruỗng.",
						"thai": "ภายนอกดูสงบ... แต่รู้สึกเหมือนข้างในกำลังเน่าเปื่อย",
						"hindi": "ऊपर से शांत है… पर अंदर से सड़ रहा है, ऐसा लगता है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_4"
				},
				{
					"content": {
						"korean": "…죄책감. 숲이… 죄책감을 품고 있는 것 같아요.",
						"english": "...Guilt. The forest... it seems to harbor guilt.",
						"japanese": "…罪悪感。森が…罪悪感を抱いているようです。",
						"chinese": "…罪恶感。森林…好像怀揣着罪恶感。",
						"french": "…Culpabilité. La forêt… semble abriter de la culpabilité.",
						"spanish": "...Culpabilidad. El bosque... parece albergar culpa.",
						"vietnamese": "…Cảm giác tội lỗi. Rừng… hình như đang chứa đựng cảm giác tội lỗi.",
						"thai": "...ความรู้สึกผิด ป่า...ดูเหมือนจะเก็บงำความรู้สึกผิดไว้",
						"hindi": "…अपराधबोध। जंगल… अपराधबोध से भरा हुआ लगता है।"
					},
					"emotion": "sad",
					"speaker": "ela",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "죄책감? 누가?",
						"english": "Guilt? Who?",
						"japanese": "罪悪感？誰が？",
						"chinese": "罪恶感？谁？",
						"french": "Culpabilité ? Qui donc ?",
						"spanish": "¿Culpabilidad? ¿Quién?",
						"vietnamese": "Cảm giác tội lỗi? Ai cơ?",
						"thai": "ความรู้สึกผิด? ใคร?",
						"hindi": "अपराधबोध? कौन?"
					},
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "나약한 자들… 숲은 너희에게 구원을 허락하지 않는다.",
						"english": "Weaklings... The forest grants no salvation to you.",
						"japanese": "弱き者よ…森はお前たちに救いを許さない。",
						"chinese": "懦弱者…森林不会赐予你们救赎。",
						"french": "Faibles... La forêt ne vous accordera aucun salut.",
						"spanish": "Débiles... El bosque no os concederá salvación.",
						"vietnamese": "Những kẻ yếu ớt... Rừng sẽ không ban cho các ngươi sự cứu rỗi.",
						"thai": "พวกอ่อนแอ... ป่าไม่อนุญาตให้เจ้าได้รับความรอด",
						"hindi": "कमजोरों... जंगल तुम्हें मोक्ष नहीं देगा।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "크윽… 아직… 끝나지 않았어!",
						"english": "Ugh... It's not... over yet!",
						"japanese": "ぐっ…まだ…終わってない！",
						"chinese": "呃啊…还没…结束！",
						"french": "Ugh... Ce n'est pas... encore fini !",
						"spanish": "¡Ugh... Todavía... no ha terminado!",
						"vietnamese": "Khụ... Vẫn chưa... kết thúc!",
						"thai": "อึก... ยัง... ไม่จบ!",
						"hindi": "ऊह... अभी... खत्म नहीं हुआ!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "다시 와라… 그때는 더 깊은 절망을 선사하겠다.",
						"english": "Come again... Next time, I shall bestow deeper despair.",
						"japanese": "また来るがいい…その時は、さらなる深き絶望をくれてやろう。",
						"chinese": "再来吧…届时我将赐予更深的绝望。",
						"french": "Revenez... Cette fois, je vous offrirai un désespoir plus profond.",
						"spanish": "Vuelve... La próxima vez, te concederé una desesperación más profunda.",
						"vietnamese": "Hãy trở lại đi... Lúc đó, ta sẽ ban cho ngươi sự tuyệt vọng sâu sắc hơn.",
						"thai": "กลับมาอีกครั้งเถิด... คราวนั้น ข้าจะมอบความสิ้นหวังที่ลึกซึ้งยิ่งกว่าให้",
						"hindi": "फिर से आओ... अगली बार, मैं तुम्हें और गहरी निराशा दूँगा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…여왕님… 저를 용서하소서…",
						"english": "...My Queen... Forgive me...",
						"japanese": "...女王様...私をお許しください...",
						"chinese": "...女王陛下...请原谅我...",
						"french": "...Ma Reine... Pardonnez-moi...",
						"spanish": "...Mi Reina... Perdóname...",
						"vietnamese": "...Thưa Nữ hoàng... Xin hãy tha thứ cho thần...",
						"thai": "...องค์ราชินี... ได้โปรดอภัยให้หม่อมฉันด้วย...",
						"hindi": "...मेरी महारानी... मुझे क्षमा करें..."
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "여왕? 무슨 소리야…",
						"english": "Queen? What are you talking about...",
						"japanese": "女王？何のことだ…",
						"chinese": "女王？什么意思啊…",
						"french": "Reine ? De quoi parles-tu...",
						"spanish": "¿Reina? ¿De qué hablas...?",
						"vietnamese": "Nữ hoàng? Ngươi đang nói gì vậy...",
						"thai": "ราชินี? เจ้ากำลังพูดถึงอะไร...",
						"hindi": "महारानी? तुम क्या कह रहे हो..."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "쓰러진 {random_boss}의 잔해는 숲의 일부처럼 흩어졌다.",
						"english": "The remains of the fallen {random_boss} scattered like a part of the forest.",
						"japanese": "倒れた{random_boss}の残骸は、森の一部のように散らばった。",
						"chinese": "倒下的{random_boss}的残骸像森林的一部分一样散开。",
						"french": "Les vestiges du {random_boss} tombé se sont dispersés comme une partie de la forêt.",
						"spanish": "Los restos del {random_boss} caído se dispersaron como parte del bosque.",
						"vietnamese": "Tàn dư của {random_boss} đã ngã xuống tan biến như một phần của khu rừng.",
						"thai": "ซากศพของ {random_boss} ที่ล้มลงกระจัดกระจายราวกับเป็นส่วนหนึ่งของป่า",
						"hindi": "गिरे हुए {random_boss} के अवशेष जंगल के एक हिस्से की तरह बिखर गए।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그러나 숲의 고요함은 여전했고, 알 수 없는 불안감은 더욱 깊어졌다.",
						"english": "Yet, the forest's silence remained, and an unknown unease deepened.",
						"japanese": "しかし、森の静寂は変わらず、未知の不安感はさらに深まった。",
						"chinese": "然而，森林的寂静依旧，莫名的不安感却愈发深重。",
						"french": "Cependant, le silence de la forêt persistait, et une inquiétude inconnue s'approfondissait.",
						"spanish": "Sin embargo, el silencio del bosque permanecía, y una inquietud desconocida se hizo más profunda.",
						"vietnamese": "Tuy nhiên, sự tĩnh lặng của khu rừng vẫn còn đó, và một cảm giác bất an không thể gọi tên ngày càng sâu sắc.",
						"thai": "ทว่า ความเงียบสงัดของป่ายังคงอยู่ และความรู้สึกไม่สบายใจที่ไม่ทราบสาเหตุก็ยิ่งทวีความรุนแรงขึ้น",
						"hindi": "फिर भी, जंगल की खामोशी बनी रही, और एक अज्ञात बेचैनी और गहरी हो गई।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "끝난 게 아니었어…",
						"english": "It wasn't over yet...",
						"japanese": "まだ終わってなかった…",
						"chinese": "还没结束呢…",
						"french": "Ce n'était pas encore fini...",
						"spanish": "No había terminado aún...",
						"vietnamese": "Chưa kết thúc đâu...",
						"thai": "ยังไม่จบ...",
						"hindi": "यह अभी खत्म नहीं हुआ था..."
					},
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "다음 장은 더 깊은 미혹으로 이끌 것이었다.",
						"english": "The next chapter would lead to deeper delusion.",
						"japanese": "次の章は、さらなる深き迷いへと誘うだろう。",
						"chinese": "下一章将引向更深的迷惑。",
						"french": "Le chapitre suivant mènerait à une illusion plus profonde.",
						"spanish": "El siguiente capítulo llevaría a una ilusión más profunda.",
						"vietnamese": "Chương tiếp theo sẽ dẫn lối đến sự mê hoặc sâu sắc hơn.",
						"thai": "บทต่อไปจะนำไปสู่ความลุ่มหลงที่ลึกซึ้งยิ่งขึ้น",
						"hindi": "अगला अध्याय और गहरे भ्रम में ले जाएगा।"
					},
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "숲의 가장 깊은 곳, 거대한 그림자가 탐험대를 막아섰다.",
						"english": "In the deepest part of the forest, a colossal shadow blocked the expedition.",
						"japanese": "森の最も深い場所で、巨大な影が探検隊を阻んだ。",
						"chinese": "森林最深处，一道巨大的身影挡住了探险队。",
						"french": "Au plus profond de la forêt, une ombre colossale barra la route à l'expédition.",
						"spanish": "En lo más profundo del bosque, una sombra colosal bloqueó a la expedición.",
						"vietnamese": "Ở nơi sâu thẳm nhất của khu rừng, một bóng đen khổng lồ đã chặn đường đoàn thám hiểm.",
						"thai": "ณ ส่วนที่ลึกที่สุดของป่า เงาขนาดมหึมาได้ขวางทางคณะสำรวจ",
						"hindi": "जंगल के सबसे गहरे हिस्से में, एक विशाल छाया ने खोज दल को रोक दिया।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "침입자 주제에… 여기까지 왔군.",
						"english": "Intruders, of all things... you've made it this far.",
						"japanese": "侵入者のくせに…ここまで来たか。",
						"chinese": "侵入者竟然…走到这里来了。",
						"french": "Des intrus, et vous êtes arrivés jusqu'ici...",
						"spanish": "Meros intrusos... y han llegado hasta aquí.",
						"vietnamese": "Bọn xâm nhập đáng khinh… vậy mà cũng đến được đây.",
						"thai": "พวกผู้บุกรุก... มาถึงที่นี่ได้ไง",
						"hindi": "घुसपैठिए होकर… यहाँ तक आ गए हो।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네가 숲을 이렇게 만든 거야?",
						"english": "Did you do this to the forest?",
						"japanese": "お前が森をこうしてしまったのか？",
						"chinese": "是你把森林变成这样的吗？",
						"french": "C'est toi qui as fait ça à la forêt ?",
						"spanish": "¿Tú le hiciste esto al bosque?",
						"vietnamese": "Ngươi đã biến khu rừng thành ra thế này sao?",
						"thai": "แกเป็นคนทำให้ป่าเป็นแบบนี้เหรอ?",
						"hindi": "क्या तुमने जंगल को ऐसा बनाया है?"
					},
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "감히… 나의 영역에 발을 들이다니.",
						"english": "How dare you... set foot in my domain.",
						"japanese": "よくも…私の領域に足を踏み入れたな。",
						"chinese": "竟敢…踏入我的领域。",
						"french": "Comment oses-tu… pénétrer mon domaine.",
						"spanish": "¿Cómo te atreves... a pisar mi dominio?",
						"vietnamese": "Dám… đặt chân vào lãnh địa của ta.",
						"thai": "กล้าดียังไง... มาเหยียบย่างในอาณาเขตของข้า",
						"hindi": "हिम्मत कैसे हुई तुम्हारी… मेरे क्षेत्र में कदम रखने की।"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "어리석은 질문이군. 이 숲의 진실을 감당할 수 없을 텐데.",
						"english": "A foolish question. You wouldn't be able to handle the truth of this forest.",
						"japanese": "愚かな質問だ。この森の真実を耐えられないだろうに。",
						"chinese": "愚蠢的问题。你无法承受这片森林的真相。",
						"french": "Quelle question stupide. Tu ne supporterais pas la vérité de cette forêt.",
						"spanish": "Una pregunta estúpida. No serías capaz de soportar la verdad de este bosque.",
						"vietnamese": "Một câu hỏi ngu ngốc. Ngươi sẽ không thể chịu đựng được sự thật của khu rừng này đâu.",
						"thai": "คำถามโง่ๆ แกทนความจริงของป่านี้ไม่ไหวหรอก",
						"hindi": "मूर्खतापूर्ण सवाल है। तुम इस जंगल की सच्चाई को झेल नहीं पाओगे।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "죽음만이… 유일한 구원이다.",
						"english": "Only death... is the sole salvation.",
						"japanese": "死だけが…唯一の救済だ。",
						"chinese": "只有死亡…才是唯一的救赎。",
						"french": "Seule la mort… est l'unique salut.",
						"spanish": "Solo la muerte... es la única salvación.",
						"vietnamese": "Chỉ có cái chết… mới là sự cứu rỗi duy nhất.",
						"thai": "มีเพียงความตาย... เท่านั้นที่เป็นทางรอดเดียว",
						"hindi": "केवल मृत्यु ही… एकमात्र मोक्ष है।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "헛소리 마!",
						"english": "Nonsense!",
						"japanese": "ふざけるな！",
						"chinese": "别胡说八道！",
						"french": "N'importe quoi !",
						"spanish": "¡Tonterías!",
						"vietnamese": "Đừng nói nhảm!",
						"thai": "อย่าพูดพล่าม!",
						"hindi": "बकवास मत करो!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 15
		}
	]
} as const;
