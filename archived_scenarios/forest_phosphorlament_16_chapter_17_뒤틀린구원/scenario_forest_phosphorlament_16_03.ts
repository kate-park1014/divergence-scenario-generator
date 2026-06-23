export const scenario_forest_phosphorlament_16_03 = {
	"scenario_id": "forest_phosphorlament_16_03",
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
	"prologue": {
		"korean": [
			"숲은 숨 쉬는 기억이었다.",
			"오래된 나무들은 고통스러운 진실을 품고, 방문자를 유혹했다.",
			"찢겨진 기억의 파편들. 그 속에 감춰진 것은 무엇일까.",
			"환각과 공포 속에서, 진실은 더욱 왜곡되어 간다."
		],
		"english": [
			"The forest was a breathing memory.",
			"Ancient trees held painful truths, luring visitors.",
			"Shattered fragments of memory. What lay hidden within?",
			"Amidst illusion and fear, truth becomes ever more distorted."
		],
		"japanese": [
			"森は息づく記憶だった。",
			"古木は苦痛な真実を秘め、訪れる者を誘惑した。",
			"引き裂かれた記憶の断片。その中に隠されたものは何だろうか。",
			"幻覚と恐怖の中、真実はさらに歪んでいく。"
		],
		"chinese": [
			"森林是会呼吸的记忆。",
			"古老的树木怀揣着痛苦的真相，诱惑着访客。",
			"支离破碎的记忆碎片。其中隐藏着什么？",
			"在幻觉与恐惧中，真相愈发扭曲。"
		],
		"french": [
			"La forêt était une mémoire vivante.",
			"Les arbres anciens portaient de douloureuses vérités, attirant les visiteurs.",
			"Fragments de mémoire déchirés. Qu'y avait-il de caché là-dedans ?",
			"Au milieu de l'illusion et de la peur, la vérité se déforme davantage."
		],
		"spanish": [
			"El bosque era una memoria que respiraba.",
			"Los árboles antiguos guardaban verdades dolorosas, atrayendo a los visitantes.",
			"Fragmentos de memoria desgarrados. ¿Qué se escondía en ellos?",
			"Entre la ilusión y el miedo, la verdad se distorsiona aún más."
		],
		"vietnamese": [
			"Rừng là ký ức đang thở.",
			"Những cây cổ thụ ẩn chứa sự thật đau đớn, mê hoặc khách ghé thăm.",
			"Những mảnh ký ức vụn vỡ. Điều gì ẩn giấu bên trong?",
			"Giữa ảo ảnh và nỗi sợ hãi, sự thật ngày càng bị bóp méo."
		],
		"thai": [
			"ป่าคือความทรงจำที่หายใจ",
			"ต้นไม้โบราณกอดความจริงอันเจ็บปวด ล่อลวงผู้มาเยือน",
			"ชิ้นส่วนความทรงจำที่ฉีกขาด อะไรซ่อนอยู่ข้างใน?",
			"ท่ามกลางภาพลวงตาและความกลัว ความจริงยิ่งบิดเบี้ยว"
		],
		"hindi": [
			"वन एक साँस लेती हुई स्मृति था।",
			"प्राचीन वृक्षों में दर्दनाक सच थे, जो आगंतुकों को लुभाते थे।",
			"कटी हुई यादों के टुकड़े। उनके भीतर क्या छिपा था?",
			"भ्रम और भय के बीच, सच और भी विकृत होता जाता है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "고대 유적의 잔해가 숲 속에 녹아들었다. 알 수 없는 문양들이 바위에 새겨져 있었다.",
						"english": "Ancient ruins merged into the forest. Unknown symbols were carved into the rocks.",
						"japanese": "古代遺跡の残骸が森に溶け込んでいた。正体不明の紋様が岩に刻まれていた。",
						"chinese": "古代遗迹的残骸融入了森林中。岩石上刻着不明的图案。",
						"french": "Les vestiges d'anciennes ruines s'étaient fondus dans la forêt. Des symboles inconnus étaient gravés dans les roches.",
						"spanish": "Los restos de antiguas ruinas se fundieron con el bosque. Símbolos desconocidos estaban grabados en las rocas.",
						"vietnamese": "Tàn tích của di tích cổ đại hòa vào rừng. Những ký hiệu không rõ được khắc trên đá.",
						"thai": "ซากปรักหักพังของอารยธรรมโบราณหลอมรวมกับป่า มีลวดลายลึกลับแกะสลักอยู่บนหิน",
						"hindi": "प्राचीन खंडहर जंगल में समा गए थे। चट्टानों पर अज्ञात प्रतीक उकेरे हुए थे।"
					}
				},
				{
					"content": {
						"korean": "이런 곳에 유적이 있다니... 대체 뭘 위한 곳이었을까.",
						"english": "Ruins here? What purpose did they serve?",
						"japanese": "こんな場所に遺跡が...一体何のためだったんだろう。",
						"chinese": "这种地方竟然有遗迹...究竟是用来做什么的呢？",
						"french": "Des ruines ici ? À quoi servaient-elles, bon sang ?",
						"spanish": "¿Ruinas aquí? ¿Para qué serían?",
						"vietnamese": "Có di tích ở nơi như thế này... rốt cuộc là để làm gì?",
						"thai": "มีซากโบราณสถานอยู่ที่นี่เหรอ... สร้างมาเพื่ออะไรกันแน่?",
						"hindi": "यहाँ खंडहर? आखिर ये किस लिए थे?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "cedar"
				},
				{
					"speaker": "cedar",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "탐험대인가요? 이곳의 유물들은 정말 특별하죠.",
						"english": "An expedition? The artifacts here are truly special.",
						"japanese": "探検隊の方ですか？ここの遺物は本当に特別ですよ。",
						"chinese": "是探险队吗？这里的文物真的很特别。",
						"french": "Une expédition ? Les artefacts d'ici sont vraiment spéciaux.",
						"spanish": "¿Son una expedición? Las reliquias de aquí son muy especiales.",
						"vietnamese": "Là đoàn thám hiểm ư? Các di vật ở đây thật sự đặc biệt đó.",
						"thai": "ทีมสำรวจหรือเปล่า? โบราณวัตถุที่นี่พิเศษจริงๆ นะ",
						"hindi": "क्या आप एक अभियान दल हैं? यहाँ की कलाकृतियाँ सचमुच खास हैं।"
					}
				},
				{
					"speaker": "cedar",
					"emotion": "base",
					"content": {
						"korean": "전 시더입니다. 숲의 고대 전설을 연구하고 있죠.",
						"english": "I'm Cedar. I study the forest's ancient legends.",
						"japanese": "私はシダーです。森の古代伝説を研究しています。",
						"chinese": "我是西达。正在研究森林的古老传说。",
						"french": "Je suis Cedar. J'étudie les légendes anciennes de la forêt.",
						"spanish": "Soy Cedar. Investigo las antiguas leyendas del bosque.",
						"vietnamese": "Tôi là Cedar. Tôi đang nghiên cứu những truyền thuyết cổ xưa của rừng.",
						"thai": "ฉันชื่อซีดาร์ กำลังศึกษาตำนานโบราณของป่าอยู่",
						"hindi": "मैं सीडर हूँ। मैं जंगल की प्राचीन किंवदंतियों का अध्ययन कर रहा हूँ।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 숲의 나무들이 고대 전사들의 기억을 품고 있다는 가설이 있어요.",
						"english": "There's a theory that the trees in this forest hold the memories of ancient warriors.",
						"japanese": "この森の木々が、古代の戦士たちの記憶を宿しているという仮説があります。",
						"chinese": "有一种假说认为，这片森林的树木蕴含着古代战士的记忆。",
						"french": "Il y a une théorie selon laquelle les arbres de cette forêt contiennent les souvenirs d'anciens guerriers.",
						"spanish": "Existe la teoría de que los árboles de este bosque guardan los recuerdos de antiguos guerreros.",
						"vietnamese": "Có một giả thuyết rằng những cây trong rừng này chứa đựng ký ức của các chiến binh cổ đại.",
						"thai": "มีสมมติฐานว่าต้นไม้ในป่านี้เก็บความทรงจำของนักรบโบราณไว้",
						"hindi": "एक परिकल्पना है कि इस जंगल के पेड़ प्राचीन योद्धाओं की यादें संजोए हुए हैं।"
					},
					"emotion": "base",
					"speaker": "cedar"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"speaker": "cedar",
					"duration_ms": 450,
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "sad",
					"speaker": "cedar",
					"content": {
						"korean": "이 의미 없는 유물들을 보세요. 전부 찢겨진 기억의 파편들 같아요.",
						"english": "Look at these meaningless relics. They all feel like shattered fragments of memory.",
						"japanese": "これらの意味のない遺物を見てください。どれも引き裂かれた記憶の断片のようです。",
						"chinese": "看看这些毫无意义的遗物。它们都像是支离破碎的记忆碎片。",
						"french": "Regardez ces reliques insignifiantes. Elles ressemblent toutes à des fragments de mémoire déchirés.",
						"spanish": "Miren estas reliquias sin sentido. Todas parecen fragmentos de memoria destrozados.",
						"vietnamese": "Nhìn những di vật vô nghĩa này đi. Tất cả đều giống như những mảnh ký ức vụn vỡ.",
						"thai": "ดูวัตถุโบราณที่ไร้ความหมายเหล่านี้สิ ทั้งหมดดูเหมือนชิ้นส่วนความทรงจำที่ฉีกขาด",
						"hindi": "इन अर्थहीन अवशेषों को देखें। ये सब यादों के बिखरे हुए टुकड़ों जैसे लगते हैं।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "찢겨진 기억이라... 그럼 이 고통은...",
						"english": "Torn memories... So this pain...",
						"japanese": "引き裂かれた記憶…ならばこの苦痛は…",
						"chinese": "破碎的记忆……那么这份痛苦是……",
						"french": "Des souvenirs déchirés... Alors cette douleur...",
						"spanish": "Recuerdos desgarrados... Entonces, este dolor...",
						"vietnamese": "Ký ức tan vỡ... Vậy nỗi đau này là...",
						"thai": "ความทรงจำที่แตกสลาย... เช่นนั้นความเจ็บปวดนี้ก็คือ...",
						"hindi": "बिखरी हुई यादें... तो यह दर्द..."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "숲이 때때로 길을 잃은 자들을 인도하는 신비한 빛을 보여준다고 해요. 근데 돌아온 자는 아무도 없죠.",
						"english": "They say the forest sometimes shows a mysterious light, guiding the lost. But none ever return.",
						"japanese": "森は時に、道に迷った者たちを導く神秘的な光を見せると言われています。しかし、誰も戻ってきた者はいません。",
						"chinese": "据说森林有时会展现神秘的光芒，指引迷失之人。但从未有人回来过。",
						"french": "On dit que la forêt montre parfois une lumière mystérieuse qui guide ceux qui sont perdus. Mais personne n'en est jamais revenu.",
						"spanish": "Se dice que el bosque a veces muestra una luz misteriosa que guía a los perdidos. Pero nadie ha regresado jamás.",
						"vietnamese": "Người ta nói rừng đôi khi hiện ra ánh sáng huyền bí, dẫn lối cho những kẻ lạc đường. Nhưng chưa một ai từng trở về.",
						"thai": "ว่ากันว่าป่าแห่งนี้บางครั้งก็แสดงแสงลึกลับนำทางผู้หลงทาง แต่ไม่มีใครเคยกลับมาได้เลย",
						"hindi": "कहा जाता है कि जंगल कभी-कभी भटकने वालों को एक रहस्यमयी रोशनी दिखाता है। लेकिन कोई वापस नहीं आया।"
					},
					"speaker": "cedar",
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						4,
						2
					],
					"speaker": "cedar",
					"duration_ms": 550,
					"type": "direction"
				},
				{
					"content": {
						"korean": "숲의 노래가 들리지 않나요? 때로는 달콤하지만, 그 뒤엔 절규가 숨어있어요.",
						"english": "Can't you hear the forest's song? Sometimes sweet, but screams hide behind it.",
						"japanese": "森の歌が聞こえませんか？時には甘美ですが、その裏には絶叫が隠されています。",
						"chinese": "你没听到森林的歌声吗？有时它很甜美，但背后却隐藏着尖叫。",
						"french": "N'entendez-vous pas le chant de la forêt ? Parfois doux, mais des hurlements se cachent derrière.",
						"spanish": "¿No oyes el canto del bosque? A veces es dulce, pero detrás se esconden gritos.",
						"vietnamese": "Bạn không nghe thấy tiếng hát của rừng sao? Đôi khi ngọt ngào, nhưng ẩn sau đó là những tiếng thét.",
						"thai": "ไม่ได้ยินเสียงเพลงของป่าหรอกหรือ? บางครั้งก็ไพเราะ แต่เบื้องหลังกลับซ่อนเสียงกรีดร้องไว้",
						"hindi": "क्या तुम्हें जंगल का गीत नहीं सुनाई देता? कभी-कभी मधुर, पर उसके पीछे चीखें छिपी हैं।"
					},
					"type": "speech",
					"speaker": "cedar",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "비명처럼 들리는데요. 대체 뭐가 숨겨져 있는 거죠?",
						"english": "It sounds like screams. What on earth is hidden?",
						"japanese": "悲鳴のように聞こえます。一体何が隠されているのですか？",
						"chinese": "听起来像是尖叫声。到底隐藏着什么？",
						"french": "Ça ressemble à des cris. Qu'est-ce qui est caché, bon sang ?",
						"spanish": "Suena a gritos. ¿Qué diablos se esconde?",
						"vietnamese": "Nghe như tiếng la hét vậy. Rốt cuộc có gì ẩn giấu?",
						"thai": "ฟังดูเหมือนเสียงกรีดร้องเลย เกิดอะไรขึ้นกันแน่?",
						"hindi": "चीखों जैसा लग रहा है। आखिर क्या छिपा है?"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "숲이 품은 고통이겠죠. 이 유물들도 전부 그 고통을 말해주고 있고요.",
						"english": "It must be the forest's pain. These relics all speak of it too.",
						"japanese": "森が抱える苦痛でしょう。これらの遺物もすべて、その苦痛を物語っています。",
						"chinese": "这一定是森林所承受的痛苦。这些遗物也都在诉说着那份痛苦。",
						"french": "Ce doit être la douleur que la forêt contient. Tous ces artefacts en témoignent aussi.",
						"spanish": "Debe ser el dolor que alberga el bosque. Todos estos artefactos también lo demuestran.",
						"vietnamese": "Chắc là nỗi đau mà rừng đang ôm giữ. Tất cả những di vật này cũng đang nói lên nỗi đau đó.",
						"thai": "คงเป็นความเจ็บปวดที่ป่าอุ้มชูไว้ล่ะมั้ง โบราณวัตถุเหล่านี้ก็บ่งบอกถึงความเจ็บปวดนั้นด้วย",
						"hindi": "यह जंगल का दर्द होना चाहिए। ये अवशेष भी उसी दर्द को बयान करते हैं।"
					},
					"type": "speech",
					"speaker": "cedar",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 400,
					"type": "direction",
					"spot": [
						1,
						3
					],
					"speaker": "cedar"
				},
				{
					"content": {
						"korean": "이 숲은 살아 숨 쉬며, 걷는 자의 가장 깊은 생각을 꿰뚫어 보는 듯해요.",
						"english": "This forest breathes, seeming to pierce the deepest thoughts of those who walk within it.",
						"japanese": "この森は生きて呼吸しており、歩く者の最も深い思考を見透かすかのようです。",
						"chinese": "这片森林仿佛有生命，能洞察行走者内心最深处的想法。",
						"french": "Cette forêt respire, semblant transpercer les pensées les plus profondes de ceux qui y marchent.",
						"spanish": "Este bosque respira, como si pudiera ver a través de los pensamientos más profundos de quienes caminan en él.",
						"vietnamese": "Rừng này sống và thở, dường như thấu suốt những suy nghĩ sâu kín nhất của người bước đi trong nó.",
						"thai": "ป่าแห่งนี้มีชีวิตและลมหายใจ ราวกับจะมองทะลุความคิดที่ลึกที่สุดของผู้ที่เดินอยู่",
						"hindi": "यह जंगल सांस लेता है, और ऐसा लगता है मानो इसमें चलने वाले के गहरे से गहरे विचारों को भेद रहा हो।"
					},
					"type": "speech",
					"speaker": "cedar",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "점점 더 섬뜩해지는군요. 뭔가... 우릴 지켜보고 있어.",
						"english": "It's getting more unsettling. Something... is watching us.",
						"japanese": "だんだん不気味になってきました。何かが…私たちを見張っています。",
						"chinese": "越来越让人毛骨悚然。有什么东西……在监视着我们。",
						"french": "C'est de plus en plus effrayant. Quelque chose... nous observe.",
						"spanish": "Se está volviendo cada vez más espeluznante. Algo... nos está observando.",
						"vietnamese": "Càng lúc càng rợn người. Có gì đó... đang theo dõi chúng ta.",
						"thai": "ยิ่งนานวันยิ่งน่าขนลุก... มีบางอย่าง... กำลังเฝ้าดูเราอยู่",
						"hindi": "यह और भी डरावना होता जा रहा है। कुछ... हमें देख रहा है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "고대 아마존 전사들은 이곳에서 지혜를 얻으려 모든 것을 바쳤죠. 어쩌면 당신도...",
						"english": "Ancient Amazonian warriors sacrificed everything here to gain wisdom. Perhaps you too...",
						"japanese": "古代のアマゾン戦士たちは、ここで知恵を得るためにすべてを捧げました。おそらくあなたも…",
						"chinese": "古代亚马逊战士在这里献出一切以获取智慧。也许你也能……",
						"french": "Les anciens guerriers amazoniens ont tout sacrifié ici pour acquérir la sagesse. Peut-être vous aussi...",
						"spanish": "Los antiguos guerreros amazónicos sacrificaron todo aquí para obtener sabiduría. Quizás tú también...",
						"vietnamese": "Các chiến binh Amazon cổ đại đã hy sinh tất cả ở đây để tìm kiếm sự khôn ngoan. Có lẽ bạn cũng sẽ...",
						"thai": "นักรบอะเมซอนโบราณยอมเสียสละทุกสิ่งเพื่อแสวงหาปัญญาที่นี่ บางทีคุณก็อาจจะ...",
						"hindi": "प्राचीन अमेज़ॅन योद्धाओं ने यहां ज्ञान प्राप्त करने के लिए सब कुछ न्योछावर कर दिया। शायद तुम भी..."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "cedar"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "내 기억... 조각났을 뿐... 다시... 모일 것이다...",
						"english": "My memories... merely shattered... they will... gather again...",
						"japanese": "私の記憶は…ただ砕け散っただけ…再び…集まるだろう…",
						"chinese": "我的记忆……只是碎片……会再次……重聚……",
						"french": "Mes souvenirs... juste brisés... ils... se rassembleront...",
						"spanish": "Mis recuerdos... solo fragmentados... se... reunirán de nuevo...",
						"vietnamese": "Ký ức của ta... chỉ là vỡ nát... sẽ... tụ lại lần nữa...",
						"thai": "ความทรงจำของข้า... แค่แตกสลายไป... จะกลับมารวมกันอีกครั้ง...",
						"hindi": "मेरी यादें... बस बिखर गईं... वे फिर से... जुड़ेंगी..."
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "기억의 파편이라... 아직 끝나지 않았어.",
						"english": "Shards of memory... it's not over yet.",
						"japanese": "記憶の破片か…まだ終わっていない。",
						"chinese": "记忆的碎片吗……还没结束。",
						"french": "Des fragments de mémoire... ce n'est pas encore fini.",
						"spanish": "Fragmentos de memoria... aún no ha terminado.",
						"vietnamese": "Mảnh vỡ ký ức ư... vẫn chưa kết thúc.",
						"thai": "ชิ้นส่วนความทรงจำ... ยังไม่จบ",
						"hindi": "यादों के टुकड़े... अभी खत्म नहीं हुआ है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "숲의 고통은 잠시 잦아들었다. 그러나, 그 깊이는 알 수 없었다.",
						"english": "The forest's suffering subsided for a moment. However, its depth remained unknown.",
						"japanese": "森の苦痛は一時的に和らいだ。しかし、その深さは計り知れなかった。",
						"chinese": "森林的痛苦暂时平息了。然而，它的深度无人知晓。",
						"french": "La souffrance de la forêt s'est calmée un instant. Cependant, sa profondeur restait inconnue.",
						"spanish": "El sufrimiento del bosque disminuyó por un momento. Sin embargo, su profundidad era desconocida.",
						"vietnamese": "Nỗi đau của khu rừng tạm thời lắng xuống. Tuy nhiên, không thể biết được độ sâu của nó.",
						"thai": "ความทุกข์ทรมานของป่าลดลงชั่วขณะ แต่ความลึกซึ้งของมันยังคงไม่อาจหยั่งรู้ได้",
						"hindi": "जंगल का दर्द कुछ देर के लिए थम गया। हालांकि, उसकी गहराई अज्ञात थी।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "어두운 기운이 응축된 곳. 거대한 그림자가 길을 막았다.",
						"english": "A place where dark energy condenses. A colossal shadow blocked the path.",
						"japanese": "暗い気が凝縮された場所。巨大な影が道を塞いだ。",
						"chinese": "黑暗气息凝聚之地。一道巨大的影子挡住了去路。",
						"french": "Un lieu où l'énergie sombre se condense. Une ombre gigantesque bloquait le chemin.",
						"spanish": "Un lugar donde la energía oscura se condensa. Una sombra colosal bloqueó el camino.",
						"vietnamese": "Nơi năng lượng tối tăm cô đọng. Một cái bóng khổng lồ đã chặn lối đi.",
						"thai": "สถานที่ที่พลังงานมืดถูกรวมตัว เงาขนาดมหึมาขวางทางอยู่",
						"hindi": "एक ऐसी जगह जहाँ अँधेरी शक्ति संघनित है। एक विशाल छाया ने रास्ता रोक दिया।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "잊혀진 기억을 헤집는 어리석은 자들.",
						"english": "Fools who stir forgotten memories.",
						"japanese": "忘れ去られた記憶をかき乱す愚か者たち。",
						"chinese": "搅动被遗忘记忆的愚蠢之人。",
						"french": "Fous qui remuent les souvenirs oubliés.",
						"spanish": "Necios que revuelven recuerdos olvidados.",
						"vietnamese": "Những kẻ ngu ngốc đào bới ký ức lãng quên.",
						"thai": "พวกคนโง่ที่ไปรื้อฟื้นความทรงจำที่ถูกลืม",
						"hindi": "भूली हुई यादों को कुरेदने वाले मूर्ख।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네가 이 숲의 고통을 품고 있는 괴물인가!",
						"english": "Are you the monster embodying this forest's suffering!",
						"japanese": "お前がこの森の苦痛を宿す怪物か！",
						"chinese": "你就是承载着这片森林痛苦的怪物吗！",
						"french": "Es-tu le monstre qui incarne la souffrance de cette forêt !",
						"spanish": "¿Eres el monstruo que encarna el sufrimiento de este bosque?",
						"vietnamese": "Ngươi là quái vật mang nỗi đau của khu rừng này ư!",
						"thai": "เจ้าคือปีศาจร้ายที่โอบอุ้มความทุกข์ทรมานของป่านี้หรือ!",
						"hindi": "क्या तुम ही हो वह दानव जो इस जंगल के दर्द को समेटे हुए है!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"duration_ms": 600,
					"type": "direction",
					"speaker": "cedar",
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이런 존재가... 전설 속의... 믿을 수 없어!",
						"english": "Such a being... from legends... Unbelievable!",
						"japanese": "こんな存在が…伝説の中の…信じられない！",
						"chinese": "这样的存在……传说中的……难以置信！",
						"french": "Une telle créature... issue des légendes... Incroyable !",
						"spanish": "¡Una criatura así... de las leyendas... Inconcebible!",
						"vietnamese": "Một tồn tại như vậy... trong truyền thuyết... Không thể tin được!",
						"thai": "สิ่งมีชีวิตเช่นนี้... ในตำนาน... ไม่น่าเชื่อ!",
						"hindi": "ऐसा अस्तित्व... कहानियों का... अविश्वसनीय!"
					},
					"speaker": "cedar",
					"emotion": "sad"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "탐구심이 파멸을 부를지니.",
						"english": "Curiosity will lead to ruin.",
						"japanese": "探究心が破滅を招くだろう。",
						"chinese": "求知欲将招致毁灭。",
						"french": "La curiosité mènera à la ruine.",
						"spanish": "La curiosidad te llevará a la ruina.",
						"vietnamese": "Lòng hiếu kỳ sẽ dẫn đến diệt vong.",
						"thai": "ความอยากรู้อยากเห็นจะนำมาซึ่งหายนะ",
						"hindi": "जिज्ञासा विनाश को जन्म देगी।"
					},
					"type": "speech"
				},
				{
					"action": "exit",
					"direction": "down",
					"duration_ms": 400,
					"type": "direction",
					"speaker": "cedar"
				},
				{
					"content": {
						"korean": "{random_boss}! 네게서 모든 진실을 알아내겠어!",
						"english": "{random_boss}! I'll uncover all truth from you!",
						"japanese": "{random_boss}！貴様から全ての真実を暴き出してやる！",
						"chinese": "{random_boss}！我将从你身上揭示所有真相！",
						"french": "{random_boss} ! Je t'arracherai toute la vérité !",
						"spanish": "¡{random_boss}! ¡Te arrancaré toda la verdad!",
						"vietnamese": "{random_boss}! Ta sẽ moi móc mọi sự thật từ ngươi!",
						"thai": "{random_boss}! ข้าจะเปิดเผยความจริงทั้งหมดจากเจ้า!",
						"hindi": "{random_boss}! मैं तुमसे सारा सच जान लूंगा!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "어리석은 것. 이 숲의 지혜를 감당할 수 없을 테니.",
						"english": "Foolish one. You cannot withstand the wisdom of this forest.",
						"japanese": "愚かな者め。この森の知恵に耐えられまい。",
						"chinese": "愚蠢的东西。你无法承受这片森林的智慧。",
						"french": "Imbécile. Tu ne pourras pas supporter la sagesse de cette forêt.",
						"spanish": "Necio. No podrás soportar la sabiduría de este bosque.",
						"vietnamese": "Đồ ngốc. Ngươi không thể chịu đựng được trí tuệ của khu rừng này.",
						"thai": "เจ้าโง่. เจ้าไม่อาจต้านทานปัญญาของป่านี้ได้",
						"hindi": "मूर्ख। तुम इस जंगल की बुद्धि को सहन नहीं कर पाओगे।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "젠장! 여기서 포기할 순 없어!",
						"english": "Damn it! I can't give up here!",
						"japanese": "くそっ！ここで諦めるわけにはいかない！",
						"chinese": "可恶！我不能在这里放弃！",
						"french": "Zut ! Je ne peux pas abandonner ici !",
						"spanish": "¡Maldita sea! ¡No puedo rendirme aquí!",
						"vietnamese": "Chết tiệt! Không thể bỏ cuộc ở đây được!",
						"thai": "บ้าจริง! ข้าจะยอมแพ้ที่นี่ไม่ได้!",
						"hindi": "धिक्कार है! मैं यहाँ हार नहीं मान सकता!"
					}
				}
			]
		}
	]
} as const;
