export const scenario_forest_veridia_4_03 = {
	"scenario_id": "forest_veridia_4_03",
	"order": 3,
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
					"type": "speech",
					"content": {
						"korean": "황금빛 이끼가 뒤덮인 유적의 입구. 숨겨진 역사의 첫 페이지를 넘긴다.",
						"english": "The entrance to the ruins, covered in golden moss. Turning the first page of hidden history.",
						"japanese": "黄金の苔に覆われた遺跡の入り口。隠された歴史の最初のページをめくる。",
						"chinese": "黄金苔藓覆盖的遗迹入口。翻开隐藏历史的第一页。",
						"french": "L'entrée des ruines, recouverte de mousse dorée. On tourne la première page d'une histoire cachée.",
						"spanish": "La entrada de las ruinas, cubierta de musgo dorado. Pasamos la primera página de una historia oculta.",
						"vietnamese": "Lối vào di tích phủ đầy rêu vàng. Lật giở trang đầu tiên của lịch sử bị che giấu.",
						"thai": "ทางเข้าซากปรักหักพังที่ปกคลุมด้วยตะไคร่น้ำสีทอง พลิกหน้าแรกของประวัติศาสตร์ที่ซ่อนเร้น",
						"hindi": "सुनहरी काई से ढके खंडहर का प्रवेश द्वार। छिपे हुए इतिहास का पहला पन्ना पलटते हुए।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "cedar",
					"spot": [
						5,
						2
					]
				},
				{
					"emotion": "happy",
					"speaker": "cedar",
					"content": {
						"korean": "놀랍군요! 이끼가 살아있는 것처럼 빛나고 있어요. 이건… 고대 아마존의 유적입니다.",
						"english": "Amazing! The moss is glowing as if alive. This is... an ancient Amazonian ruin.",
						"japanese": "驚きです！苔が生きているかのように輝いています。これは…古代アマゾンの遺跡です。",
						"chinese": "真令人惊讶！苔藓像活的一样发光。这……是古亚马逊遗迹。",
						"french": "Incroyable ! La mousse brille comme si elle était vivante. C'est... une ruine de l'ancienne Amazonie.",
						"spanish": "¡Increíble! El musgo brilla como si estuviera vivo. Esto es... una ruina del antiguo Amazonas.",
						"vietnamese": "Thật đáng kinh ngạc! Rêu phát sáng như thể nó còn sống. Đây là... một di tích cổ đại của Amazon.",
						"thai": "น่าทึ่ง! ตะไคร่น้ำเรืองแสงราวกับมีชีวิต นี่คือ... ซากปรักหักพังของอเมซอนโบราณ",
						"hindi": "कमाल है! काई ऐसे चमक रही है जैसे जीवित हो। यह... प्राचीन अमेज़ॅन का खंडहर है।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "황금색이라니, 특이하네. 보물이라도 숨겨져 있나?",
						"english": "Golden, how unusual. Is there treasure hidden here?",
						"japanese": "黄金色とは珍しいな。宝物でも隠されているのか？",
						"chinese": "金色的，真稀奇。难道藏着宝藏？",
						"french": "Doré, c'est étrange. Y a-t-il un trésor caché ?",
						"spanish": "Dorado, qué inusual. ¿Hay algún tesoro escondido?",
						"vietnamese": "Màu vàng ư, lạ thật. Có kho báu nào ẩn giấu không?",
						"thai": "สีทองนี่แปลกดีนะ มีสมบัติซ่อนอยู่หรือเปล่า?",
						"hindi": "सुनहरा रंग, अजीब है। क्या कोई खजाना छिपा है?"
					},
					"type": "speech"
				},
				{
					"speaker": "cedar",
					"emotion": "sad",
					"content": {
						"korean": "그럴 수도 있죠. 하지만 이 이끼… 어쩐지 슬픈 소리가 들리는 것 같아요.",
						"english": "Perhaps. But this moss... I feel like I can hear a sad sound from it.",
						"japanese": "そうかもしれません。でもこの苔…なんだか悲しい声が聞こえるような気がします。",
						"chinese": "也许吧。但这苔藓……总觉得能听到悲伤的声音。",
						"french": "Peut-être. Mais cette mousse... J'ai l'impression d'y entendre un son triste.",
						"spanish": "Podría ser. Pero este musgo... siento como si se escuchara un sonido triste de él.",
						"vietnamese": "Có thể. Nhưng loại rêu này... tôi cứ có cảm giác như nghe thấy một âm thanh buồn bã từ nó.",
						"thai": "อาจจะเป็นไปได้ค่ะ แต่ตะไคร่น้ำนี่... ฉันรู้สึกเหมือนได้ยินเสียงเศร้าๆ เลยค่ะ",
						"hindi": "हो सकता है। लेकिन इस काई से... मुझे लगता है कि एक उदास आवाज़ सुनाई दे रही है।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "cedar",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						2
					]
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "유적 깊숙한 곳, 기이한 비문이 모습을 드러냈다.",
						"english": "Deep within the ruins, a strange inscription revealed itself.",
						"japanese": "遺跡の奥深く、奇妙な碑文が姿を現した。",
						"chinese": "遗迹深处，奇异的碑文显露出来。",
						"french": "Au plus profond des ruines, une étrange inscription se révéla.",
						"spanish": "En lo más profundo de las ruinas, una extraña inscripción se reveló.",
						"vietnamese": "Sâu thẳm trong di tích, một văn bia kỳ lạ hiện ra.",
						"thai": "ลึกเข้าไปในซากปรักหักพัง จารึกแปลกประหลาดปรากฏขึ้น",
						"hindi": "खंडहर के भीतर गहराई में, एक अजीब शिलालेख सामने आया।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "여기 이 비문… 해독이 필요한 고대 언어군요. 여왕에 대한 기록 같아요.",
						"english": "This inscription here... it's an ancient language that needs deciphering. It seems to be a record about a queen.",
						"japanese": "ここのこの碑文…解読が必要な古代言語ですね。女王についての記録のようです。",
						"chinese": "这里的碑文……是需要解读的古老文字。似乎是关于女王的记载。",
						"french": "Cette inscription ici... c'est une langue ancienne qui nécessite un déchiffrage. Il semble que ce soit un récit sur une reine.",
						"spanish": "Esta inscripción aquí... es un idioma antiguo que necesita ser descifrado. Parece ser un registro sobre una reina.",
						"vietnamese": "Văn bia này... là một ngôn ngữ cổ cần được giải mã. Có vẻ là ghi chép về một nữ hoàng.",
						"thai": "จารึกตรงนี้... เป็นภาษาโบราณที่ต้องถอดรหัส ดูเหมือนจะเป็นบันทึกเกี่ยวกับราชินี",
						"hindi": "यह शिलालेख... यह एक प्राचीन भाषा है जिसे समझने की ज़रूरत है। यह एक रानी के बारे में एक रिकॉर्ड लगता है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "cedar"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "여왕? 어떤 내용인데?",
						"english": "Queen? What does it say?",
						"japanese": "女王？何が書いてあるの？",
						"chinese": "女王？写了些什么？",
						"french": "La Reine ? De quoi s'agit-il ?",
						"spanish": "¿La Reina? ¿Qué dice?",
						"vietnamese": "Nữ hoàng? Nội dung là gì?",
						"thai": "ราชินี? มีเนื้อหาว่าอะไร?",
						"hindi": "रानी? क्या लिखा है?"
					}
				},
				{
					"speaker": "cedar",
					"emotion": "sad",
					"content": {
						"korean": "…풍요와 번영을 갈망했지만, 숲과의 약속을 잊었다고… 적혀 있어요.",
						"english": "...She yearned for abundance and prosperity, but forgot her promise to the forest... it says.",
						"japanese": "「…豊かさと繁栄を望んだが、森との約束を忘れたと…書かれています。」",
						"chinese": "…渴望富饶与繁荣，却遗忘了与森林的约定…上面写着。",
						"french": "...Elle aspirait à l'abondance et à la prospérité, mais a oublié sa promesse à la forêt... c'est ce qui est écrit.",
						"spanish": "...Anhelaba la abundancia y la prosperidad, pero olvidó su promesa al bosque... eso dice.",
						"vietnamese": "...Khao khát sự giàu có và thịnh vượng, nhưng đã quên lời hứa với khu rừng... có viết như vậy.",
						"thai": "...นางปรารถนาความอุดมสมบูรณ์และความเจริญรุ่งเรือง แต่กลับลืมคำมั่นสัญญากับป่า... เขียนไว้เช่นนั้น",
						"hindi": "...वह प्रचुरता और समृद्धि की लालसा रखती थी, लेकिन जंगल से अपना वादा भूल गई... ऐसा लिखा है।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "약속이라니? 설마 숲을 파괴한 건가?",
						"english": "A promise? Did she... destroy the forest?",
						"japanese": "約束だって？まさか森を破壊したのか？",
						"chinese": "约定？难道她…破坏了森林？",
						"french": "Une promesse ? Aurait-elle... détruit la forêt ?",
						"spanish": "¿Una promesa? ¿Acaso destruyó el bosque?",
						"vietnamese": "Lời hứa ư? Chẳng lẽ cô ta đã phá hủy khu rừng?",
						"thai": "คำมั่นสัญญา? หรือว่านางทำลายป่า?",
						"hindi": "वादा? क्या उसने... जंगल को नष्ट कर दिया?"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "cedar",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "비문은 숲의 비극적 운명을 섬뜩하게 묘사하고 있었다.",
						"english": "The inscription chillingly described the forest's tragic fate.",
						"japanese": "碑文は森の悲劇的な運命をぞっとするほど描写していた。",
						"chinese": "碑文森然描述了森林的悲剧命运。",
						"french": "L'inscription décrivait de manière glaçante le destin tragique de la forêt.",
						"spanish": "La inscripción describía escalofriantemente el trágico destino del bosque.",
						"vietnamese": "Bia văn rùng rợn miêu tả số phận bi thảm của khu rừng.",
						"thai": "จารึกบรรยายชะตากรรมอันน่าสยดสยองของป่า",
						"hindi": "शिलालेख ने जंगल के दुखद भाग्य का भयावह वर्णन किया।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "cedar",
					"emotion": "sad",
					"content": {
						"korean": "여왕은 숲의 심장을 파괴했고, 숲은 영원히 고통받는다고…",
						"english": "The Queen destroyed the forest's heart, and the forest suffers eternally...",
						"japanese": "女王は森の心臓を破壊し、森は永遠に苦しみ続けると…",
						"chinese": "女王摧毁了森林之心，森林将永远受苦…",
						"french": "La Reine a détruit le cœur de la forêt, et la forêt souffre éternellement...",
						"spanish": "La Reina destruyó el corazón del bosque, y el bosque sufre eternamente...",
						"vietnamese": "Nữ hoàng đã phá hủy trái tim của khu rừng, và khu rừng sẽ mãi mãi chịu đau khổ...",
						"thai": "ราชินีทำลายหัวใจของป่า และป่าจะต้องทนทุกข์ทรมานไปตลอดกาล...",
						"hindi": "रानी ने जंगल का दिल नष्ट कर दिया, और जंगल हमेशा के लिए पीड़ित है..."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "영원히 고통받는다고? 그게 무슨 소리야….",
						"english": "Suffers eternally? What does that mean...?",
						"japanese": "永遠に苦しむだと？どういうことだ…",
						"chinese": "永远受苦？那是什么意思…",
						"french": "Souffre éternellement ? Qu'est-ce que ça veut dire...?",
						"spanish": "¿Sufre eternamente? ¿Qué significa eso...?",
						"vietnamese": "Chịu đau khổ mãi mãi ư? Ý gì vậy...?",
						"thai": "ทนทุกข์ตลอดกาล? นั่นหมายความว่าอะไร...?",
						"hindi": "हमेशा के लिए पीड़ित? इसका क्या मतलब है...?"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"speaker": "cedar",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "비문에는 숲의 모든 생명이 여왕의 탐욕에 갇혔다고… 마치 거대한 감옥이 된 것 같다고 쓰여있어요.",
						"english": "The inscription says all life in the forest is trapped by the Queen's greed... as if it's become a giant prison.",
						"japanese": "碑文には、森のすべての生命が女王の貪欲に囚われていると…まるで巨大な監獄になったかのようだと書かれています。",
						"chinese": "碑文上写着，森林中所有生命都被女王的贪婪所困…仿佛变成了一个巨大的监狱。",
						"french": "L'inscription dit que toute vie dans la forêt est piégée par la cupidité de la Reine... comme si elle était devenue une prison géante.",
						"spanish": "La inscripción dice que toda vida en el bosque está atrapada por la codicia de la Reina... como si se hubiera convertido en una prisión gigante.",
						"vietnamese": "Bia văn viết rằng tất cả sinh linh trong rừng đều bị mắc kẹt bởi lòng tham của Nữ hoàng... như thể nó đã trở thành một nhà tù khổng lồ.",
						"thai": "จารึกเขียนว่าสิ่งมีชีวิตทั้งหมดในป่าถูกกักขังด้วยความโลภของราชินี... ราวกับว่ามันได้กลายเป็นคุกขนาดยักษ์",
						"hindi": "शिलालेख में लिखा है कि जंगल में सभी जीवन रानी के लालच में फंस गए हैं... मानो यह एक विशाल जेल बन गया हो।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 아름다운 숲이… 감옥이라고?",
						"english": "This beautiful forest... a prison?",
						"japanese": "この美しい森が…監獄だと？",
						"chinese": "这美丽的森林…是监狱？",
						"french": "Cette belle forêt... une prison ?",
						"spanish": "¿Este hermoso bosque... una prisión?",
						"vietnamese": "Khu rừng xinh đẹp này... là nhà tù ư?",
						"thai": "ป่าที่สวยงามแห่งนี้... คุกงั้นหรือ?",
						"hindi": "यह खूबसूरत जंगल... एक जेल?"
					},
					"emotion": "sad",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "cedar",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						2
					]
				},
				{
					"content": {
						"korean": "숲의 고통이 비선형적으로 느껴졌다. 모든 것이 얽혀 하나의 거대한 울음으로 다가온다.",
						"english": "The forest's pain felt nonlinear. Everything intertwined, coming together as one great cry.",
						"japanese": "森の苦痛は非線形的に感じられた。すべてが絡み合い、一つの巨大な叫びとなって迫ってくる。",
						"chinese": "森林的痛苦非线性地袭来。一切都纠缠在一起，化作一声巨大的哀嚎。",
						"french": "La douleur de la forêt se ressentait de manière non linéaire. Tout s'entremêlait, convergeant en un seul grand cri.",
						"spanish": "El dolor del bosque se sentía de forma no lineal. Todo se entrelazaba, uniéndose en un gran lamento.",
						"vietnamese": "Nỗi đau của khu rừng cảm thấy phi tuyến tính. Mọi thứ đan xen vào nhau, hợp thành một tiếng khóc lớn.",
						"thai": "ความเจ็บปวดของป่ารู้สึกเป็นแบบไม่เชิงเส้น ทุกสิ่งพันกัน กลายเป็นเสียงร้องไห้ขนาดใหญ่",
						"hindi": "जंगल का दर्द गैर-रेखीय महसूस हुआ। सब कुछ उलझ गया था, एक विशाल चीख बनकर सामने आ रहा था।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 황금 이끼… 숲의 아픈 기억을 붙잡고 있는 것 같아요. 모든 나무가, 잎 하나하나가… 슬퍼하고 있어요.",
						"english": "This golden moss... it seems to hold the forest's painful memories. Every tree, every single leaf... is grieving.",
						"japanese": "この黄金の苔…森の痛ましい記憶を掴んでいるようだ。すべての木が、葉っぱ一枚一枚が…悲しんでいる。",
						"chinese": "这片金色苔藓…仿佛 удержи着森林痛苦的记忆。每一棵树，每一片叶子…都在悲伤。",
						"french": "Cette mousse dorée... elle semble retenir les douloureux souvenirs de la forêt. Chaque arbre, chaque feuille... est en deuil.",
						"spanish": "Este musgo dorado... parece aferrarse a los dolorosos recuerdos del bosque. Cada árbol, cada hoja... está de luto.",
						"vietnamese": "Lớp rêu vàng này... dường như đang giữ lấy những ký ức đau buồn của khu rừng. Mỗi cái cây, từng chiếc lá... đều đang đau buồn.",
						"thai": "มอสสีทองนี้... ดูเหมือนจะยึดติดกับความทรงจำที่เจ็บปวดของป่า ต้นไม้ทุกต้น ใบไม้ทุกใบ... กำลังโศกเศร้า",
						"hindi": "यह सुनहरा काई... जंगल की दर्दनाक यादों को थामे हुए है। हर पेड़, हर एक पत्ती... शोक मना रही है।"
					},
					"speaker": "cedar",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "이 모든 게 과거의 죄 때문이라고? 그래서 숲이 이렇게 된 거야?",
						"english": "All this because of past sins? Is that why the forest became like this?",
						"japanese": "これらすべてが過去の罪のためだと？だから森はこうなったのか？",
						"chinese": "这一切都是因为过去的罪孽吗？所以森林才变成这样？",
						"french": "Tout ça à cause des péchés passés ? C'est pour ça que la forêt est devenue comme ça ?",
						"spanish": "¿Todo esto por pecados pasados? ¿Por eso el bosque se volvió así?",
						"vietnamese": "Tất cả là do tội lỗi trong quá khứ ư? Vì vậy mà khu rừng mới thành ra thế này sao?",
						"thai": "ทั้งหมดนี้เป็นเพราะบาปในอดีตหรือ? นี่คือเหตุผลที่ป่ากลายเป็นแบบนี้ใช่ไหม?",
						"hindi": "यह सब अतीत के पापों के कारण है? क्या इसीलिए जंगल ऐसा हो गया?"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "cedar",
					"type": "speech",
					"content": {
						"korean": "우리는 지금, 잊혀진 약속의 비명 속을 걷고 있는 겁니다.",
						"english": "We are now walking amidst the screams of forgotten promises.",
						"japanese": "私たちは今、忘れられた約束の悲鳴の中を歩いています。",
						"chinese": "我们现在正走在被遗忘的承诺的尖叫声中。",
						"french": "Nous marchons maintenant au milieu des cris des promesses oubliées.",
						"spanish": "Ahora caminamos entre los gritos de promesas olvidadas.",
						"vietnamese": "Chúng ta đang bước đi giữa những tiếng kêu thét của lời hứa bị lãng quên.",
						"thai": "ตอนนี้เรากำลังเดินอยู่ท่ามกลางเสียงกรีดร้องของคำสัญญาที่ถูกลืม",
						"hindi": "हम अब भूले हुए वादों की चीखों के बीच चल रहे हैं।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "멈출 수 없어… 진실을 찾아야 해.",
						"english": "Can't stop... I must find the truth.",
						"japanese": "止められない…真実を見つけなければ。",
						"chinese": "无法停止……我必须找到真相。",
						"french": "Je ne peux pas m'arrêter... Je dois trouver la vérité.",
						"spanish": "No puedo parar... debo encontrar la verdad.",
						"vietnamese": "Không thể dừng lại... phải tìm ra sự thật.",
						"thai": "หยุดไม่ได้... ต้องค้นหาความจริง",
						"hindi": "रुक नहीं सकता... मुझे सच खोजना होगा।"
					}
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "쓰러진 정체불명의 존재. 숲의 고통이 잠시 옅어지는 듯했다.",
						"english": "The unknown entity fell. The forest's pain seemed to subside for a moment.",
						"japanese": "倒れた正体不明の存在。森の苦痛は一時的に薄れたようだった。",
						"chinese": "倒下的不明生物。森林的痛苦似乎暂时减轻了。",
						"french": "L'entité inconnue est tombée. La douleur de la forêt semblait s'estomper un instant.",
						"spanish": "La entidad desconocida cayó. El dolor del bosque pareció disminuir por un momento.",
						"vietnamese": "Thực thể không rõ danh tính đã gục ngã. Nỗi đau của rừng dường như dịu đi trong chốc lát.",
						"thai": "สิ่งมีชีวิตลึกลับที่ล้มลง ความเจ็บปวดของป่าดูเหมือนจะเบาบางลงชั่วขณะ",
						"hindi": "गिरी हुई अज्ञात सत्ता। जंगल का दर्द पल भर के लिए कम होता दिख रहा था।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…끝난 것이 아니다. 여왕의 그림자는… 영원히 숲을 지배할 것이다.",
						"english": "...It's not over. The Queen's shadow... will forever rule the forest.",
						"japanese": "「…終わってない。女王の影は…永遠に森を支配するだろう。」",
						"chinese": "“…还没结束。女王的阴影…将永远统治这片森林。”",
						"french": "...Ce n'est pas fini. L'ombre de la Reine... régnera éternellement sur la forêt.",
						"spanish": "...No ha terminado. La sombra de la Reina... gobernará el bosque para siempre.",
						"vietnamese": "...Chưa kết thúc. Bóng tối của Nữ hoàng... sẽ vĩnh viễn thống trị khu rừng.",
						"thai": "...ยังไม่จบสิ้น เงาของราชินี... จะครอบงำป่าตลอดไป",
						"hindi": "...यह ख़त्म नहीं हुआ। रानी की परछाई... हमेशा के लिए जंगल पर राज करेगी।"
					},
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "여왕… 그 이름이 모든 비극의 시작이군.",
						"english": "The Queen... that name marks the beginning of all tragedy.",
						"japanese": "「女王…その名が全ての悲劇の始まりだな。」",
						"chinese": "“女王…那个名字，是所有悲剧的开端。”",
						"french": "La Reine... ce nom, le début de toute tragédie.",
						"spanish": "La Reina... ese nombre es el comienzo de toda tragedia.",
						"vietnamese": "Nữ hoàng... cái tên đó là khởi nguồn của mọi bi kịch.",
						"thai": "ราชินี... ชื่อนั้นคือจุดเริ่มต้นของโศกนาฏกรรมทั้งหมด",
						"hindi": "रानी... वह नाम, सभी त्रासदियों की शुरुआत है।"
					}
				},
				{
					"content": {
						"korean": "황금 이끼는 여전히 빛나고 있었다. 잊혀진 약속의 무게가, 다음 길을 압도한다.",
						"english": "The golden moss still glowed. The weight of a forgotten promise overwhelms the path ahead.",
						"japanese": "「黄金の苔はまだ輝いていた。忘れられた約束の重みが、次の道を圧倒する。」",
						"chinese": "“黄金苔藓依然闪耀。被遗忘的承诺之重，压倒了前方的道路。”",
						"french": "La mousse dorée brillait encore. Le poids d'une promesse oubliée submerge le chemin à venir.",
						"spanish": "El musgo dorado aún brillaba. El peso de una promesa olvidada abruma el siguiente camino.",
						"vietnamese": "Rêu vàng vẫn lấp lánh. Gánh nặng của một lời hứa bị lãng quên đè nặng con đường phía trước.",
						"thai": "มอสสีทองยังคงส่องประกาย น้ำหนักของคำสัญญาที่ถูกลืม กำลังบีบคั้นเส้นทางข้างหน้า",
						"hindi": "सुनहरी काई अब भी चमक रही थी। एक भूले हुए वादे का बोझ, अगले रास्ते को भारी कर देता है।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "숲의 파수꾼이 길을 막아섰다. 황금 이끼가 탐험대를 집어삼킨다.",
						"english": "The forest guardian blocked the path. The golden moss devours the expedition.",
						"japanese": "「森の番人が道を塞いだ。黄金の苔が探検隊を飲み込む。」",
						"chinese": "“森林的守护者挡住了去路。黄金苔藓吞噬了探险队。”",
						"french": "Le gardien de la forêt a bloqué le chemin. La mousse dorée dévore l'expédition.",
						"spanish": "El guardián del bosque bloqueó el camino. El musgo dorado devora a la expedición.",
						"vietnamese": "Người canh rừng chặn lối. Rêu vàng nuốt chửng đoàn thám hiểm.",
						"thai": "ผู้พิทักษ์ป่าขวางทาง มอสสีทองกลืนกินคณะสำรวจ",
						"hindi": "जंगल के रखवाले ने रास्ता रोक दिया। सुनहरी काई अभियान दल को निगल जाती है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "어리석은 자들… 숲의 비명은 멈추지 않는다.",
						"english": "Fools... The forest's screams will not cease.",
						"japanese": "「愚か者たち…森の悲鳴は止まない。」",
						"chinese": "“愚蠢的家伙们…森林的尖叫不会停止。”",
						"french": "Insensés... Les cris de la forêt ne cesseront pas.",
						"spanish": "Necios... Los gritos del bosque no cesarán.",
						"vietnamese": "Những kẻ ngu ngốc... Tiếng thét của rừng sẽ không ngừng lại.",
						"thai": "พวกโง่เขลา... เสียงกรีดร้องของป่าจะไม่หยุดลง",
						"hindi": "मूर्खों... जंगल की चीखें नहीं रुकेंगी।"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아직 포기 못 해… 이 고통을 끝내야만 해!",
						"english": "I can't give up yet... I must end this suffering!",
						"japanese": "「まだ諦められない…この苦痛を終わらせなければ！」",
						"chinese": "“我不能放弃…必须结束这痛苦！”",
						"french": "Je ne peux pas encore abandonner... Je dois mettre fin à cette souffrance !",
						"spanish": "Aún no puedo rendirme... ¡Debo acabar con este sufrimiento!",
						"vietnamese": "Chưa thể bỏ cuộc... Ta phải chấm dứt nỗi đau này!",
						"thai": "ยังยอมแพ้ไม่ได้... ต้องยุติความเจ็บปวดนี้ให้ได้!",
						"hindi": "मैं अभी हार नहीं मान सकता... मुझे इस पीड़ा को खत्म करना होगा!"
					}
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "황금 이끼로 뒤덮인 제단. 그곳을 지키는 정체불명의 존재가 나타났다.",
						"english": "An altar covered in golden moss. An unknown entity protecting it appeared.",
						"japanese": "黄金の苔に覆われた祭壇。そこを守る正体不明の存在が現れた。",
						"chinese": "一个被金色苔藓覆盖的祭坛。一个守护着它的不明生物出现了。",
						"french": "Un autel recouvert de mousse dorée. Une entité inconnue le protégeant est apparue.",
						"spanish": "Un altar cubierto de musgo dorado. Una entidad desconocida que lo protege apareció.",
						"vietnamese": "Một bàn thờ phủ đầy rêu vàng. Một thực thể không rõ danh tính bảo vệ nó đã xuất hiện.",
						"thai": "แท่นบูชาที่ปกคลุมไปด้วยมอสสีทอง สิ่งมีชีวิตลึกลับที่เฝ้าอยู่ที่นั่นปรากฏขึ้น",
						"hindi": "सुनहरी काई से ढका एक वेदी। उसे बचाने वाली एक अज्ञात सत्ता प्रकट हुई।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "침입자… 너희의 탐욕이 숲의 평화를 또다시 깨려는가.",
						"english": "Intruders... Does your greed intend to shatter the forest's peace once more?",
						"japanese": "侵入者よ…お前たちの貪欲さが、再び森の平和を破ろうというのか。",
						"chinese": "入侵者……你们的贪婪又要打破森林的宁静吗？",
						"french": "Intrus... Votre cupidité compte-t-elle briser la paix de la forêt une fois de plus ?",
						"spanish": "Intrusos... ¿Acaso vuestra codicia pretende romper la paz del bosque una vez más?",
						"vietnamese": "Những kẻ xâm nhập... Tham lam của các ngươi lại định phá vỡ sự yên bình của rừng sao?",
						"thai": "ผู้บุกรุก... ความโลภของพวกเจ้าจะทำลายความสงบสุขของป่าอีกครั้งหรือ",
						"hindi": "घुसपैठियों... क्या तुम्हारा लालच जंगल की शांति को फिर से भंग करना चाहता है?"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "비명 속에서 널 찾았어. 숲의 진실을 감추려는 자!",
						"english": "I found you amidst the screams. You, who tries to hide the forest's truth!",
						"japanese": "悲鳴の中であなたを見つけた。森の真実を隠そうとする者よ！",
						"chinese": "我在尖叫声中找到了你。你，想隐藏森林真相的人！",
						"french": "Je t'ai trouvé au milieu des cris. Toi, qui essaie de cacher la vérité de la forêt !",
						"spanish": "Te encontré entre los gritos. ¡Tú, que intentas ocultar la verdad del bosque!",
						"vietnamese": "Ta đã tìm thấy ngươi trong tiếng kêu thét. Kẻ muốn che giấu sự thật của rừng!",
						"thai": "ฉันพบเธอท่ามกลางเสียงกรีดร้อง เธอผู้พยายามปกปิดความจริงของป่า!",
						"hindi": "मैंने तुम्हें चीखों में पाया। तुम, जो जंगल का सच छिपाने की कोशिश कर रहे हो!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "cedar"
				},
				{
					"content": {
						"korean": "기다려요! 이분은 숲의 파수꾼입니다. 약속을 지키려는…",
						"english": "Wait! This person is the forest's guardian. Trying to keep the promise...",
						"japanese": "待ってください！この方は森の番人です。約束を守ろうとする…",
						"chinese": "等等！这位是森林的守护者。试图遵守承诺的……",
						"french": "Attendez ! Cette personne est le gardien de la forêt. Celui qui essaie de tenir la promesse...",
						"spanish": "¡Esperen! Esta persona es el guardián del bosque. El que intenta cumplir la promesa...",
						"vietnamese": "Chờ đã! Vị này là người gác rừng. Người đang cố gắng giữ lời hứa...",
						"thai": "เดี๋ยว! ท่านผู้นี้คือผู้พิทักษ์ป่า ผู้ที่พยายามรักษาคำสัญญา...",
						"hindi": "रुको! यह व्यक्ति जंगल का रखवाला है। वादा निभाने वाला..."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "cedar"
				},
				{
					"content": {
						"korean": "약속을 깨뜨린 건 인간이다. 더 이상 숲의 고통을 건드리지 마라!",
						"english": "It was humans who broke the promise. Do not touch the forest's pain any longer!",
						"japanese": "約束を破ったのは人間だ。これ以上森の苦痛に触れるな！",
						"chinese": "是人类打破了约定。不要再触碰森林的痛苦了！",
						"french": "Ce sont les humains qui ont rompu la promesse. Ne touchez plus à la douleur de la forêt !",
						"spanish": "Fueron los humanos quienes rompieron la promesa. ¡No toquéis más el dolor del bosque!",
						"vietnamese": "Con người đã phá vỡ lời hứa. Đừng chạm vào nỗi đau của rừng nữa!",
						"thai": "มนุษย์คือผู้ที่ทำลายคำสัญญา อย่าแตะต้องความเจ็บปวดของป่าอีกต่อไป!",
						"hindi": "इंसानों ने वादा तोड़ा। अब जंगल के दर्द को मत छूओ!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "비명을 멈추게 할 방법… 싸워서라도 찾겠어!",
						"english": "A way to stop the screams... I'll find it, even if I have to fight!",
						"japanese": "悲鳴を止めさせる方法…戦ってでも見つけ出す！",
						"chinese": "阻止尖叫声的方法……即使战斗我也会找到！",
						"french": "Un moyen d'arrêter les cris... Je le trouverai, même si je dois me battre !",
						"spanish": "Una forma de detener los gritos... ¡La encontraré, aunque tenga que luchar!",
						"vietnamese": "Cách để chấm dứt tiếng kêu thét... Ta sẽ tìm ra, dù phải chiến đấu!",
						"thai": "วิธีที่จะหยุดเสียงกรีดร้อง... ฉันจะหามันให้เจอ แม้จะต้องต่อสู้ก็ตาม!",
						"hindi": "चीखों को रोकने का तरीका... मैं इसे ढूंढूंगा, चाहे मुझे लड़ना पड़े!"
					},
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"숲은 침묵했지만, 황금 이끼는 울부짖었다.",
			"고대 아마존의 유물, 그 속에 갇힌 비극.",
			"풍요를 탐한 여왕, 깨어진 숲과의 약속.",
			"모든 비밀은 황금 이끼 아래 잠들어 있었다."
		],
		"english": [
			"The forest was silent, but the golden moss screamed.",
			"An ancient Amazonian relic, a tragedy trapped within.",
			"A queen who coveted prosperity, a broken promise to the forest.",
			"All secrets lay dormant beneath the golden moss."
		],
		"japanese": [
			"森は沈黙したが、黄金の苔は叫びを上げた。",
			"古代アマゾンの遺物、その中に閉じ込められた悲劇。",
			"豊穣を貪った女王、森との破られた約束。",
			"すべての秘密は黄金の苔の下に眠っていた。"
		],
		"chinese": [
			"森林寂静无声，但黄金苔藓却在哭嚎。",
			"古代亚马逊的遗物，其中困囿着悲剧。",
			"贪图富饶的女王，与森林的誓约已破。",
			"所有秘密都沉睡在黄金苔藓之下。"
		],
		"french": [
			"La forêt était silencieuse, mais la mousse dorée hurlait.",
			"Une relique de l'ancienne Amazonie, une tragédie y était enfermée.",
			"Une reine avide de prospérité, une promesse brisée à la forêt.",
			"Tous les secrets dormaient sous la mousse dorée."
		],
		"spanish": [
			"El bosque estaba en silencio, pero el musgo dorado aullaba.",
			"Una reliquia del antiguo Amazonas, una tragedia atrapada en su interior.",
			"Una reina que codiciaba la prosperidad, una promesa rota con el bosque.",
			"Todos los secretos yacían dormidos bajo el musgo dorado."
		],
		"vietnamese": [
			"Rừng im lặng, nhưng rêu vàng lại gào thét.",
			"Di vật cổ đại Amazon, bi kịch bị giam cầm bên trong.",
			"Nữ hoàng tham lam sự thịnh vượng, lời hứa với rừng đã tan vỡ.",
			"Mọi bí mật đều ngủ yên dưới lớp rêu vàng."
		],
		"thai": [
			"ป่าเงียบงัน แต่ตะไคร่น้ำสีทองร่ำไห้",
			"โบราณวัตถุแห่งอเมซอนโบราณ โศกนาฏกรรมที่ถูกจองจำอยู่ภายใน",
			"ราชินีผู้โลภในความอุดมสมบูรณ์ คำมั่นสัญญาที่แตกสลายกับป่า",
			"ความลับทั้งหมดหลับใหลอยู่ใต้ตะไคร่น้ำสีทอง"
		],
		"hindi": [
			"जंगल शांत था, लेकिन सुनहरी काई चिल्ला रही थी।",
			"प्राचीन अमेज़ॅन का अवशेष, उसके भीतर फंसी एक त्रासदी।",
			"समृद्धि की लोभी रानी, जंगल से टूटा वादा।",
			"सभी रहस्य सुनहरी काई के नीचे सो रहे थे।"
		]
	}
} as const;
