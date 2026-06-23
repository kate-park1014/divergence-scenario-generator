export const scenario_forest_kaelen_19_03 = {
	"scenario_id": "forest_kaelen_19_03",
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
					"emotion": "base",
					"content": {
						"korean": "거대한 숲의 오래된 유적. 시간의 흔적이 켜켜이 쌓인 곳이었다.",
						"english": "Ancient ruins in a vast forest. A place where traces of time layered.",
						"japanese": "巨大な森の古き遺跡。時の痕跡が幾重にも重なった場所だった。",
						"chinese": "巨大森林中的古老遗迹。一个时间痕迹层层堆积的地方。",
						"french": "Anciennes ruines dans une forêt immense. Un lieu où les traces du temps s'étaient accumulées.",
						"spanish": "Antiguas ruinas en un vasto bosque. Un lugar donde las huellas del tiempo se habían acumulado.",
						"vietnamese": "Tàn tích cổ xưa trong khu rừng rộng lớn. Nơi dấu vết thời gian chồng chất.",
						"thai": "ซากปรักหักพังโบราณในป่าใหญ่ สถานที่ที่ร่องรอยของเวลาก่อตัวเป็นชั้นๆ",
						"hindi": "विशाल वन में प्राचीन खंडहर। एक ऐसी जगह जहाँ समय के निशान परत दर परत जमा थे।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "여긴… 처음 보는 곳이야. 숲에 이런 곳이 있었어?",
						"english": "This is... a place I've never seen. The forest had such a place?",
						"japanese": "ここは…初めて見る場所だ。森にこんな場所があったのか？",
						"chinese": "这里…是我从未见过的地方。森林里有这种地方吗？",
						"french": "C'est... un endroit que je n'ai jamais vu. La forêt avait un tel endroit ?",
						"spanish": "Esto es... un lugar que nunca había visto. ¿El bosque tenía un lugar así?",
						"vietnamese": "Đây là... nơi tôi chưa từng thấy. Rừng có nơi như vậy sao?",
						"thai": "ที่นี่... เป็นที่ที่ไม่เคยเห็นมาก่อน ในป่ามีที่แบบนี้ด้วยเหรอ?",
						"hindi": "यह... ऐसी जगह है जो मैंने कभी नहीं देखी। जंगल में ऐसी जगह थी?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "cedar",
					"spot": [
						2,
						3
					],
					"action": "enter"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…오랜만에 방문객이군. 호기심 많은 눈빛을 보니, 과거의 그림자를 쫓는 자인가.",
						"english": "...A visitor after a long time. By your curious gaze, are you one who chases the shadows of the past?",
						"japanese": "…久しぶりの訪問者だな。好奇心旺盛な目つきからすると、過去の影を追う者か。",
						"chinese": "……久违的访客。看你好奇的眼神，是追逐过去影子的人吗？",
						"french": "...Un visiteur après un long moment. Vu votre regard curieux, êtes-vous celui qui poursuit les ombres du passé ?",
						"spanish": "...Un visitante después de mucho tiempo. Por tu mirada curiosa, ¿eres uno de los que persiguen las sombras del pasado?",
						"vietnamese": "...Một vị khách sau thời gian dài. Với ánh mắt tò mò của ngươi, có phải ngươi là kẻ đuổi theo bóng đêm quá khứ?",
						"thai": "…เป็นผู้มาเยือนในรอบนาน ดูจากแววตาที่เต็มไปด้วยความอยากรู้อยากเห็น เจ้าคือผู้ที่ไล่ล่าเงาของอดีตใช่หรือไม่?",
						"hindi": "...लंबे समय बाद कोई आगंतुक। तुम्हारी जिज्ञासु नज़र से, क्या तुम अतीत की परछाइयों का पीछा करने वाले हो?"
					},
					"speaker": "cedar",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이곳은… 소문이 곧 법이던 시절의 흔적이지.",
						"english": "This place is... a trace from when rumors were law.",
						"japanese": "ここは…噂が即ち法だった時代の痕跡だ。",
						"chinese": "这里是……谣言即是法律时代的痕迹。",
						"french": "Cet endroit est... une trace de l'époque où les rumeurs faisaient loi.",
						"spanish": "Este lugar es... un vestigio de cuando los rumores eran ley.",
						"vietnamese": "Nơi đây là... dấu vết của thời đại mà tin đồn chính là luật.",
						"thai": "ที่นี่คือ... ร่องรอยของยุคที่ข่าวลือคือกฎหมาย",
						"hindi": "यह जगह... उस समय का निशान है जब अफवाहें ही कानून थीं।"
					},
					"emotion": "base",
					"speaker": "cedar",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						3,
						3
					],
					"action": "enter",
					"speaker": "cedar",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "cedar",
					"type": "speech",
					"content": {
						"korean": "옛날엔 '옛 그림자'가 숲의 질서를 지배했어.",
						"english": "In the old days, the 'Old Shadow' governed the forest's order.",
						"japanese": "昔は「古き影」が森の秩序を支配していた。",
						"chinese": "以前是“旧影”统治着森林的秩序。",
						"french": "Autrefois, la « Vieille Ombre » régnait sur l'ordre de la forêt.",
						"spanish": "Antiguamente, la 'Vieja Sombra' gobernaba el orden del bosque.",
						"vietnamese": "Ngày xưa, 'Bóng Cũ' từng thống trị trật tự của khu rừng.",
						"thai": "เมื่อก่อน 'เงาเก่า' เคยควบคุมระเบียบของป่า",
						"hindi": "पुराने दिनों में, 'पुरानी छाया' वन के नियम पर राज करती थी।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "옛 그림자? 그게 뭔데?",
						"english": "Old Shadow? What's that?",
						"japanese": "古き影？ それは何だ？",
						"chinese": "旧影？那是什么？",
						"french": "Vieille Ombre ? Qu'est-ce que c'est ?",
						"spanish": "¿Vieja Sombra? ¿Qué es eso?",
						"vietnamese": "Bóng Cũ? Đó là gì?",
						"thai": "เงาเก่า? นั่นคืออะไร?",
						"hindi": "पुरानी छाया? वह क्या है?"
					}
				},
				{
					"content": {
						"korean": "눈에 보이지 않는 힘으로 소문을 만들고, 진실을 감추며…",
						"english": "Crafting rumors with unseen power, concealing the truth...",
						"japanese": "見えざる力で噂を広め、真実を隠し…",
						"chinese": "用无形之力制造谣言，掩盖真相…",
						"french": "Créant des rumeurs par un pouvoir invisible, dissimulant la vérité...",
						"spanish": "Creando rumores con poder invisible, ocultando la verdad...",
						"vietnamese": "Tạo tin đồn bằng sức mạnh vô hình, che giấu sự thật...",
						"thai": "สร้างข่าวลือด้วยพลังที่มองไม่เห็น ปกปิดความจริง...",
						"hindi": "अदृश्य शक्ति से अफवाहें गढ़ना, सच को छिपाना..."
					},
					"emotion": "base",
					"speaker": "cedar",
					"type": "speech"
				},
				{
					"content": {
						"korean": "사람들이 믿는 것이 곧 진실이 되도록 조작했지.",
						"english": "Manipulating beliefs until they become truth.",
						"japanese": "人々が信じるものが真実となるよう、操っていた。",
						"chinese": "操纵人们所信，使其成为真实。",
						"french": "Manipulant les croyances jusqu'à ce qu'elles deviennent la vérité.",
						"spanish": "Manipulando creencias hasta que se convierten en verdad.",
						"vietnamese": "Thao túng niềm tin cho đến khi chúng trở thành sự thật.",
						"thai": "บิดเบือนความเชื่อจนกลายเป็นความจริง",
						"hindi": "विश्वासों को इस तरह हेरफेर करना कि वे सच बन जाएं।"
					},
					"emotion": "base",
					"speaker": "cedar",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "지금 숲이랑 다를 게 없잖아?",
						"english": "No different from the forest now, is it?",
						"japanese": "今の森と変わらないじゃないか？",
						"chinese": "和现在的森林没什么两样，不是吗？",
						"french": "N'est-ce pas la même chose que la forêt maintenant ?",
						"spanish": "¿No es lo mismo que el bosque ahora?",
						"vietnamese": "Không khác gì khu rừng bây giờ, phải không?",
						"thai": "ไม่ต่างจากป่าตอนนี้เลยใช่ไหม?",
						"hindi": "यह तो अभी के जंगल से अलग नहीं है, है ना?"
					}
				},
				{
					"speaker": "cedar",
					"type": "speech",
					"content": {
						"korean": "…어쩌면, 그림자는 더 교묘한 방식으로 숲에 스며든 것일 수도.",
						"english": "...Perhaps the shadow's influence in the forest is more subtle.",
						"japanese": "…もしかすると、影はもっと巧妙な手口で森に潜り込んだのかもしれない。",
						"chinese": "…或许，影子以更巧妙的方式渗透了森林。",
						"french": "...Peut-être que l'ombre a infiltré la forêt de manière plus subtile.",
						"spanish": "...Quizás la sombra se ha infiltrado en el bosque de una manera más sutil.",
						"vietnamese": "...Có lẽ cái bóng đã thâm nhập vào khu rừng một cách tinh vi hơn.",
						"thai": "...บางทีเงามืดอาจแทรกซึมเข้ามาในป่าด้วยวิธีที่แยบยลกว่า",
						"hindi": "...शायद, परछाई ने और भी चालाकी से जंगल में घुसपैठ की हो।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "cedar",
					"action": "enter",
					"spot": [
						2,
						4
					]
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이 숲은 늘 누군가에 의해 움직였어. '자연의 순리'라는 허울 아래.",
						"english": "This forest has always been swayed by unseen hands, under the guise of 'natural order'.",
						"japanese": "この森は常に誰かに操られてきた。'自然の摂理'という見せかけの下で。",
						"chinese": "这片森林总被某人操控，以‘自然规律’为幌子。",
						"french": "Cette forêt a toujours été manipulée par quelqu'un, sous le couvert de 'l'ordre naturel'.",
						"spanish": "Este bosque siempre ha sido manipulado por alguien, bajo el pretexto del 'orden natural'.",
						"vietnamese": "Khu rừng này luôn bị ai đó điều khiển, dưới vỏ bọc 'luật tự nhiên'.",
						"thai": "ป่าแห่งนี้ถูกใครบางคนบงการมาตลอด ภายใต้ฉากหน้าของ 'กฎธรรมชาติ'",
						"hindi": "इस जंगल को हमेशा किसी ने चलाया है, 'प्रकृति के नियम' की आड़ में।"
					},
					"speaker": "cedar",
					"type": "speech"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "누가 숲을 조종한다는 거야? 증거도 없어.",
						"english": "Who controls the forest? There's no proof.",
						"japanese": "誰が森を操るんだ？証拠もないのに。",
						"chinese": "谁在操控森林？没有证据。",
						"french": "Qui contrôle la forêt ? Il n'y a aucune preuve.",
						"spanish": "¿Quién controla el bosque? No hay pruebas.",
						"vietnamese": "Ai điều khiển khu rừng? Không có bằng chứng.",
						"thai": "ใครบงการป่า? ไม่มีหลักฐานหรอก",
						"hindi": "कौन जंगल को नियंत्रित करता है? कोई सबूत नहीं है।"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "그들은 소문을 조작하고, 정보를 통제하며… 스스로의 권력을 키웠지.",
						"english": "They twisted rumors, controlled info... and amassed power.",
						"japanese": "彼らは噂を操作し、情報を統制して…自らの力を増してきた。",
						"chinese": "他们操纵谣言，控制信息…从而壮大自身权力。",
						"french": "Ils ont tordu les rumeurs, contrôlé l'information... et accumulé le pouvoir.",
						"spanish": "Manipularon rumores, controlaron la información... y acumularon poder.",
						"vietnamese": "Họ thao túng tin đồn, kiểm soát thông tin... và tích lũy quyền lực.",
						"thai": "พวกเขาบิดเบือนข่าวลือ ควบคุมข้อมูล... และสะสมอำนาจ",
						"hindi": "उन्होंने अफवाहों को हेरफेर किया, जानकारी को नियंत्रित किया... और अपनी शक्ति बढ़ाई।"
					},
					"emotion": "base",
					"speaker": "cedar",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "그럼 지금도… 그 그림자 아래에 있다는 거야?",
						"english": "So even now... are we still under that shadow?",
						"japanese": "じゃあ今も…その影の下にいるってことか？",
						"chinese": "所以现在…我们还在那片阴影之下吗？",
						"french": "Alors même maintenant... sommes-nous toujours sous cette ombre ?",
						"spanish": "Así que incluso ahora... ¿seguimos bajo esa sombra?",
						"vietnamese": "Vậy ngay cả bây giờ... chúng ta vẫn nằm dưới cái bóng đó sao?",
						"thai": "งั้นแม้แต่ตอนนี้... เราก็ยังอยู่ใต้เงานั้นหรือ?",
						"hindi": "तो अब भी... हम उस परछाई के नीचे हैं?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "진실은… 소문처럼 흔들리는 법. 믿고 싶은 것을 믿게 만드는 것.",
						"english": "Truth... as fragile as rumor. Making them believe what they desire.",
						"japanese": "真実は…噂のように揺れ動くもの。信じたいものを信じさせるのだ。",
						"chinese": "真相…如谣言般动摇。让人相信他们想信的。",
						"french": "La vérité... est aussi fragile qu'une rumeur. Faisant croire ce qu'ils désirent.",
						"spanish": "La verdad... es tan frágil como un rumor. Haciéndoles creer lo que desean.",
						"vietnamese": "Sự thật... mong manh như tin đồn. Khiến họ tin vào điều họ muốn.",
						"thai": "ความจริง... เปราะบางราวข่าวลือ ทำให้เชื่อในสิ่งที่พวกเขาต้องการ",
						"hindi": "सच... अफवाह की तरह डगमगाता है। उन्हें वही मनवाना जो वे चाहते हैं।"
					},
					"emotion": "base",
					"speaker": "cedar",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "cedar",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "cedar",
					"type": "speech",
					"content": {
						"korean": "이젠 돌아갈 수 없어. 진실을 알게 된 이상.",
						"english": "No turning back now. Not after knowing the truth.",
						"japanese": "もう引き返せない。真実を知ってしまった以上は。",
						"chinese": "已无法回头。既然已得知真相。",
						"french": "Impossible de revenir en arrière. Pas après avoir connu la vérité.",
						"spanish": "Ya no hay vuelta atrás. No después de saber la verdad.",
						"vietnamese": "Không thể quay lại nữa. Sau khi đã biết sự thật.",
						"thai": "กลับไปไม่ได้แล้ว ในเมื่อรู้ความจริงแล้ว",
						"hindi": "अब वापस नहीं जा सकते। सच जानने के बाद।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "돌아갈 생각 없어. 끝까지 파헤칠 거야.",
						"english": "No turning back. I'll see this through.",
						"japanese": "戻るつもりはない。最後まで暴いてやる。",
						"chinese": "我不会回头。我会查个水落石出。",
						"french": "Pas de retour en arrière. Je vais tout découvrir.",
						"spanish": "No hay vuelta atrás. Lo descubriré todo.",
						"vietnamese": "Không lùi bước. Tôi sẽ lật tẩy tất cả.",
						"thai": "ไม่มีวันถอย ฉันจะเปิดโปงทุกอย่าง",
						"hindi": "वापस जाने का इरादा नहीं। मैं सब कुछ उजागर करूँगा।"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "알게 된 진실은… 네가 생각하는 것보다 훨씬 어둡고 거대할 거야.",
						"english": "The truth you uncover... will be far darker and vaster than you imagine.",
						"japanese": "明かされる真実は… お前が想像するより、はるかに暗く巨大だろう。",
						"chinese": "你将发现的真相… 会比你想象的更加黑暗和庞大。",
						"french": "La vérité que tu découvriras… sera bien plus sombre et vaste que tu ne l'imagines.",
						"spanish": "La verdad que descubras… será mucho más oscura y vasta de lo que imaginas.",
						"vietnamese": "Sự thật được hé lộ… sẽ tăm tối và to lớn hơn nhiều so với những gì ngươi nghĩ.",
						"thai": "ความจริงที่เจ้าจะได้รู้... จะมืดมิดและใหญ่หลวงกว่าที่เจ้าคิดไว้มาก",
						"hindi": "जो सच तुम जानोगे… वो तुम्हारी सोच से कहीं ज़्यादा गहरा और विशाल होगा।"
					},
					"emotion": "base",
					"speaker": "cedar",
					"type": "speech"
				},
				{
					"speaker": "character_3",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "그래서 어쩌라는 거야? 멈추라고?",
						"english": "So what? You want me to stop?",
						"japanese": "それで？止めろとでも言うのか？",
						"chinese": "所以呢？想让我停下吗？",
						"french": "Et alors ? Tu veux que j'arrête ?",
						"spanish": "¿Y qué? ¿Quieres que me detenga?",
						"vietnamese": "Vậy thì sao? Ngươi muốn ta dừng lại à?",
						"thai": "แล้วไง? ต้องการให้ฉันหยุดรึไง?",
						"hindi": "तो क्या? मुझे रुकने को कह रहे हो?"
					}
				},
				{
					"speaker": "cedar",
					"type": "speech",
					"content": {
						"korean": "그저… 조심하라는 것뿐. 오래된 그림자는 쉽게 사라지지 않아.",
						"english": "Just… be careful. Old shadows don't fade easily.",
						"japanese": "ただ… 気をつけろというだけだ。古き影はそう簡単に消えぬ。",
						"chinese": "只是… 要小心。古老的阴影不会轻易消散。",
						"french": "Juste… sois prudent. Les vieilles ombres ne disparaissent pas facilement.",
						"spanish": "Solo… ten cuidado. Las viejas sombras no desaparecen fácilmente.",
						"vietnamese": "Chỉ là… hãy cẩn thận. Bóng tối cũ không dễ dàng biến mất đâu.",
						"thai": "แค่… ระวังตัวให้ดี เงาเก่าแก่ไม่ได้จางหายไปง่ายๆ หรอกนะ",
						"hindi": "बस… सावधान रहना। पुरानी परछाइयाँ इतनी आसानी से नहीं मिटतीं।"
					},
					"emotion": "sad"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "고대 유적의 심장부. 그곳에서 숲의 오랜 속임수를 지키는 거대한 그림자가 기다리고 있었다.",
						"english": "The heart of the ancient ruins. There, a colossal shadow, guardian of the forest's ancient deception, awaited.",
						"japanese": "古代遺跡の心臓部。そこには、森の古き欺瞞を守る巨大な影が待ち構えていた。",
						"chinese": "古代遗迹的心脏地带。在那里，守护着森林古老骗局的巨大阴影正在等候。",
						"french": "Le cœur des ruines antiques. Là, une ombre colossale, gardienne de l'ancienne supercherie de la forêt, attendait.",
						"spanish": "El corazón de las ruinas antiguas. Allí, una sombra colosal, guardiana del antiguo engaño del bosque, esperaba.",
						"vietnamese": "Trung tâm của di tích cổ. Ở đó, một bóng tối khổng lồ, kẻ canh giữ sự lừa dối lâu đời của khu rừng, đang chờ đợi.",
						"thai": "ใจกลางของซากปรักหักพังโบราณ ณ ที่แห่งนั้น เงาขนาดมหึมา ผู้พิทักษ์อุบายเก่าแก่ของป่า กำลังรอคอยอยู่",
						"hindi": "प्राचीन खंडहरों का हृदय। वहाँ, वन के सदियों पुराने छल को बचाने वाली एक विशाल छाया इंतज़ार कर रही थी।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "여기까지 올 줄이야. 쓸모없는 호기심이 너를 파멸로 이끌 것이다.",
						"english": "To think you'd come this far. Your useless curiosity will lead you to ruin.",
						"japanese": "よくぞここまで来たな。無用な好奇心が、お前を破滅へと導くだろう。",
						"chinese": "没想到你竟然能走到这里。你无用的好奇心会将你引向毁灭。",
						"french": "Dire que tu es venu jusqu'ici. Ta curiosité inutile te mènera à ta perte.",
						"spanish": "Pensar que llegarías tan lejos. Tu inútil curiosidad te llevará a la ruina.",
						"vietnamese": "Ngươi đã đến tận đây sao. Sự tò mò vô ích của ngươi sẽ dẫn ngươi đến diệt vong.",
						"thai": "ไม่คิดว่าเจ้าจะมาได้ถึงเพียงนี้ ความอยากรู้อยากเห็นที่ไร้ประโยชน์ของเจ้าจะนำพาเจ้าไปสู่ความพินาศ",
						"hindi": "तुम यहाँ तक पहुँच गए। तुम्हारी बेकार की जिज्ञासा तुम्हें विनाश की ओर ले जाएगी।"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "오래된 속임수의 주인이 너였나? 진실을 은폐한 대가를 치러라.",
						"english": "So you're the master of the ancient deception? Pay the price for hiding the truth.",
						"japanese": "古き欺瞞の主はお前だったか。真実を隠蔽した代償を払え。",
						"chinese": "原来你就是这古老骗局的主人？为隐瞒真相付出代价吧。",
						"french": "C'est toi, le maître de l'ancienne supercherie ? Paie le prix pour avoir caché la vérité.",
						"spanish": "¿Así que eres el amo del antiguo engaño? Paga el precio por ocultar la verdad.",
						"vietnamese": "Ngươi là chủ nhân của sự lừa dối cổ xưa sao? Hãy trả giá cho việc che giấu sự thật.",
						"thai": "เจ้าคือผู้บงการอุบายเก่าแก่นี้เองรึ? จงชดใช้สำหรับความจริงที่ถูกปิดบังไว้ซะ",
						"hindi": "तो तुम ही हो पुराने छल के मालिक? सच छिपाने की कीमत चुकाओ।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "진실은 늘 불편한 법. 묻어두는 것이 숲의 평화를 위하는 길이다.",
						"english": "The truth is always inconvenient. Burying it is the way to preserve the forest's peace.",
						"japanese": "真実は常に不都合なもの。それを葬り去ることが、森の平和を守る道なのだ。",
						"chinese": "真相总是令人不适。将其掩埋才是维护森林和平之道。",
						"french": "La vérité est toujours gênante. L'enterrer est la voie pour préserver la paix de la forêt.",
						"spanish": "La verdad siempre es incómoda. Enterrarla es el camino para preservar la paz del bosque.",
						"vietnamese": "Sự thật luôn khó chịu. Chôn vùi nó là cách để giữ gìn hòa bình của khu rừng.",
						"thai": "ความจริงมักจะนำมาซึ่งความไม่สบายใจ การฝังกลบมันคือหนทางรักษาสันติสุขของป่า",
						"hindi": "सच हमेशा असहज होता है। उसे दफ़ना देना ही वन की शांति का मार्ग है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "평화? 너희가 만든 거짓된 평화잖아!",
						"english": "Peace? That's a false peace you created!",
						"japanese": "平和だと？お前たちが作り出した偽りの平和ではないか！",
						"chinese": "和平？那不过是你们制造的虚假和平！",
						"french": "La paix ? Ce n'est qu'une fausse paix que vous avez créée !",
						"spanish": "¿Paz? ¡Es una paz falsa la que creasteis!",
						"vietnamese": "Hòa bình? Đó chẳng phải là sự bình yên giả tạo do các ngươi tạo ra sao!",
						"thai": "สันติสุขงั้นรึ? นั่นมันสันติสุขจอมปลอมที่พวกเจ้าสร้างขึ้นมาไม่ใช่รึไง!",
						"hindi": "शांति? ये तो तुम्हारी बनाई झूठी शांति है!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 고작… 이런다고… 달라질 것 같으냐…",
						"english": "Ugh... Do you really think... this changes anything...?",
						"japanese": "ぐっ…たかが…こんなことで…変わるものか…",
						"chinese": "呃…就凭…这点…就能改变什么吗…",
						"french": "Urgh... Penses-tu vraiment... que cela changera quoi que ce soit...?",
						"spanish": "Ugh... ¿De verdad crees... que esto cambiará algo...?",
						"vietnamese": "Khụ… Chỉ thế thôi sao… Ngươi nghĩ… điều này sẽ thay đổi được gì à…",
						"thai": "อึก... แค่... เพียงเท่านี้... จะเปลี่ยนอะไรได้งั้นรึ...",
						"hindi": "उफ़… बस… इतने से… क्या कुछ बदलेगा…?"
					},
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그림자는… 숲의… 영원한… 질서… {random_boss}는… 사라져도…",
						"english": "Shadows... the forest's... eternal... order... Even if {random_boss}... vanishes...",
						"japanese": "影は… 森の… 永遠の… 秩序… {random_boss}が… 消えても…",
						"chinese": "影子是… 森林的… 永恒… 秩序… 即使{random_boss}… 消失…",
						"french": "Les ombres... l'ordre... éternel... de la forêt... Même si {random_boss}... disparaît...",
						"spanish": "Las sombras... el orden... eterno... del bosque... Aunque {random_boss}... desaparezca...",
						"vietnamese": "Bóng tối... trật tự... vĩnh cửu... của rừng... Dù {random_boss}... biến mất...",
						"thai": "เงามืด... คือ... ระเบียบ... นิรันดร์... แห่งป่า... แม้ว่า {random_boss}... จะหายไป...",
						"hindi": "परछाईं... जंगल का... शाश्वत... क्रम... भले ही {random_boss}... गायब हो जाए..."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아직 끝나지 않았어. 모든 그림자를 걷어낼 때까지.",
						"english": "It's not over yet. Not until all shadows are dispelled.",
						"japanese": "まだ終わってない。全ての影を払いのけるまで。",
						"chinese": "还没结束。直到所有阴影都被驱散。",
						"french": "Ce n'est pas encore fini. Pas avant que toutes les ombres ne soient dissipées.",
						"spanish": "Aún no ha terminado. No hasta que todas las sombras sean disipadas.",
						"vietnamese": "Chưa kết thúc đâu. Cho đến khi mọi bóng tối bị xua tan.",
						"thai": "ยังไม่จบหรอก จนกว่าเงามืดทั้งหมดจะถูกปัดเป่าออกไป",
						"hindi": "यह अभी खत्म नहीं हुआ है। जब तक सारी परछाइयाँ दूर नहीं हो जातीं।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "쓰러진 그림자의 자리에는 어둠이 짙게 깔렸다. 숲의 깊은 곳, 더 큰 그림자가 기다리고 있었다.",
						"english": "Deep darkness settled where the shadow fell. In the forest's depths, a greater shadow awaited.",
						"japanese": "倒れた影の場所には深い闇が立ち込めた。森の奥深く、さらに大きな影が待ち受けていた。",
						"chinese": "倒下的影子处，黑暗笼罩。在森林深处，一个更大的影子正在等待。",
						"french": "Une obscurité profonde s'installa là où l'ombre était tombée. Au plus profond de la forêt, une ombre plus grande attendait.",
						"spanish": "Una densa oscuridad se asentó donde la sombra cayó. En lo profundo del bosque, una sombra más grande esperaba.",
						"vietnamese": "Bóng tối dày đặc bao trùm nơi bóng hình ngã xuống. Sâu thẳm trong rừng, một bóng tối lớn hơn đang chờ đợi.",
						"thai": "ความมืดมิดปกคลุมบริเวณที่เงาล้มลง ในส่วนลึกของป่า เงามืดที่ใหญ่กว่ากำลังรออยู่",
						"hindi": "जहाँ परछाई गिरी थी, वहाँ गहरा अँधेरा छा गया। जंगल की गहराई में, एक बड़ी परछाई इंतजार कर रही थी।"
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "어리석은 자. 소문에 현혹된 대가가 이것이다.",
						"english": "Fool. This is the price for being misled by rumors.",
						"japanese": "愚か者め。噂に惑わされた代償がこれだ。",
						"chinese": "愚蠢的家伙。这就是被谣言迷惑的代价。",
						"french": "Idiot. C'est le prix à payer pour s'être laissé berner par les rumeurs.",
						"spanish": "Necio. Este es el precio por dejarte engañar por los rumores.",
						"vietnamese": "Đồ ngốc. Đây là cái giá phải trả vì bị tin đồn mê hoặc.",
						"thai": "คนโง่ นี่คือราคาของการหลงเชื่อข่าวลือ",
						"hindi": "मूर्ख। अफवाहों से गुमराह होने का यही परिणाम है।"
					}
				},
				{
					"content": {
						"korean": "영원히 그림자 속에서 헤매거라. 너의 분노는 아무것도 바꾸지 못해.",
						"english": "Wander in the shadows forever. Your rage changes nothing.",
						"japanese": "永遠に影の中をさまよい続けろ。お前の怒りは何も変えられない。",
						"chinese": "永远在阴影中徘徊吧。你的愤怒改变不了任何事。",
						"french": "Erre dans les ombres pour l'éternité. Ta fureur ne changera rien.",
						"spanish": "Vaga en las sombras para siempre. Tu ira no cambiará nada.",
						"vietnamese": "Hãy lang thang trong bóng tối mãi mãi đi. Cơn giận của ngươi chẳng thay đổi được gì.",
						"thai": "จงหลงทางในเงามืดตลอดไป ความโกรธของเจ้าจะเปลี่ยนอะไรไม่ได้",
						"hindi": "हमेशा के लिए परछाइयों में भटकते रहो। तुम्हारा गुस्सा कुछ नहीं बदलेगा।"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아니… 아직… 포기 안 해. 난 진실을 밝힐 거야.",
						"english": "No... not yet... I won't give up. I'll uncover the truth.",
						"japanese": "いや… まだ… 諦めない。私は真実を明らかにする。",
						"chinese": "不… 还没… 我不会放弃。我会揭示真相。",
						"french": "Non... pas encore... Je n'abandonnerai pas. Je révélerai la vérité.",
						"spanish": "No... aún no... No me rendiré. Revelaré la verdad.",
						"vietnamese": "Không... chưa đâu... Tôi sẽ không bỏ cuộc. Tôi sẽ vạch trần sự thật.",
						"thai": "ไม่... ยัง... ฉันจะไม่ยอมแพ้ ฉันจะเปิดเผยความจริง",
						"hindi": "नहीं... अभी नहीं... मैं हार नहीं मानूँगा। मैं सच का खुलासा करूँगा।"
					},
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"숲의 심장부, 고대 유적의 그림자가 드리운 곳.",
			"시더는 속삭였다. 오래된 속임수가 숲을 지배한다고.",
			"진실은 소문 뒤에 숨겨져, 끊임없이 조작되고 있었다.",
			"그리고 분노는, 더욱 깊은 어둠을 향해 타오른다."
		],
		"english": [
			"Heart of the forest, where ancient ruins cast their shadow.",
			"Cider whispered: old deceptions rule the forest.",
			"Truth hidden behind rumors, constantly manipulated.",
			"And rage burns towards an even deeper darkness."
		],
		"japanese": [
			"森の心臓部、古代遺跡の影が差す場所。",
			"シダーは囁いた。古き欺瞞が森を支配していると。",
			"真実は噂の裏に隠され、絶えず操作されていた。",
			"そして怒りは、さらに深い闇へと燃え盛る。"
		],
		"chinese": [
			"森林深处，古老遗迹投下阴影之地。",
			"西德低语：古老的欺骗统治着森林。",
			"真相隐藏在谣言之后，不断被操纵。",
			"而愤怒，正向更深的黑暗燃烧。"
		],
		"french": [
			"Au cœur de la forêt, là où l'ombre d'anciennes ruines s'étend.",
			"Cider murmura : de vieilles supercheries règnent sur la forêt.",
			"La vérité, cachée derrière les rumeurs, était constamment manipulée.",
			"Et la rage brûle vers une obscurité encore plus profonde."
		],
		"spanish": [
			"El corazón del bosque, donde la sombra de antiguas ruinas se cierne.",
			"Cider susurró: viejos engaños dominan el bosque.",
			"La verdad, oculta tras los rumores, era constantemente manipulada.",
			"Y la ira arde hacia una oscuridad aún más profunda."
		],
		"vietnamese": [
			"Trung tâm khu rừng, nơi bóng tối của tàn tích cổ đại bao trùm.",
			"Cider thì thầm: những lừa dối cũ kỹ đang thống trị khu rừng.",
			"Sự thật ẩn sau những tin đồn, không ngừng bị thao túng.",
			"Và sự phẫn nộ bùng cháy hướng về bóng tối sâu thẳm hơn."
		],
		"thai": [
			"ใจกลางป่า ที่ซึ่งเงาของซากปรักหักพังโบราณทอดลง",
			"ไซเดอร์กระซิบ: การหลอกลวงเก่าแก่ปกครองป่า",
			"ความจริงซ่อนอยู่หลังข่าวลือ ถูกบิดเบือนอยู่เสมอ",
			"และความโกรธก็ลุกโชนสู่ความมืดมิดที่ลึกซึ้งยิ่งขึ้น"
		],
		"hindi": [
			"वन का हृदय, जहाँ प्राचीन खंडहरों की छाया पड़ती है।",
			"साइडर ने फुसफुसाया: पुराने धोखे जंगल पर राज करते हैं।",
			"सच अफवाहों के पीछे छिपा था, लगातार हेरफेर किया जा रहा था।",
			"और क्रोध, और भी गहरे अंधेरे की ओर धधकता है।"
		]
	}
} as const;
