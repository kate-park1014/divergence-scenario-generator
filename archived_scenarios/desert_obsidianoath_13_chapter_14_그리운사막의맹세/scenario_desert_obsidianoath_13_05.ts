export const scenario_desert_obsidianoath_13_05 = {
	"scenario_id": "desert_obsidianoath_13_05",
	"order": 5,
	"act": "climax_finale",
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
		"pool_id": "pool_Shellguard_ObsidianOath_V1"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "끝없이 펼쳐진 모래사막, 고대 왕국의 유적이 바람 속에 잠들어 있었다.",
						"english": "An endlessly vast sand desert, where the ruins of an ancient kingdom lay dormant in the wind.",
						"japanese": "限りなく広がる砂漠、古代王国の遺跡が風の中に眠っていた。",
						"chinese": "一望无际的沙海，古老王国的遗迹在风中沉睡。",
						"french": "Un désert de sable infiniment vaste, où les ruines d'un ancien royaume gisaient endormies dans le vent.",
						"spanish": "Un desierto de arena interminable, donde las ruinas de un antiguo reino yacían dormidas en el viento.",
						"vietnamese": "Một sa mạc cát trải dài vô tận, nơi tàn tích của một vương quốc cổ đại chìm trong gió ngủ yên.",
						"thai": "ทะเลทรายอันกว้างใหญ่สุดลูกหูลูกตา ซากปรักหักพังของอาณาจักรโบราณหลับใหลอยู่ท่ามกลางสายลม",
						"hindi": "एक अंतहीन विस्तृत रेतीला रेगिस्तान, जहाँ एक प्राचीन राज्य के खंडहर हवा में निष्क्रिय पड़े थे।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이곳이… 그 비극의 중심인가?",
						"english": "Is this… the heart of that tragedy?",
						"japanese": "ここが…あの悲劇の中心なのか？",
						"chinese": "这里是……那场悲剧的中心吗？",
						"french": "Est-ce ici… le cœur de cette tragédie ?",
						"spanish": "¿Es este… el centro de esa tragedia?",
						"vietnamese": "Đây có phải… là trung tâm của bi kịch đó?",
						"thai": "ที่นี่คือ... ศูนย์กลางของโศกนาฏกรรมนั้นหรือ?",
						"hindi": "क्या यह… उस त्रासदी का केंद्र है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "amir"
				},
				{
					"speaker": "amir",
					"content": {
						"korean": "그래, 방랑자여. 이 사막은 단순한 모래가 아니야. 깊은 슬픔을 품고 있지.",
						"english": "Yes, wanderer. This desert isn't mere sand. It holds deep sorrow.",
						"japanese": "そうだ、放浪者よ。この砂漠はただの砂ではない。深い悲しみを抱えている。",
						"chinese": "是的，流浪者。这片沙漠不只是沙子。它蕴含着深深的悲伤。",
						"french": "Oui, voyageur. Ce désert n'est pas que du sable. Il renferme une profonde tristesse.",
						"spanish": "Sí, vagabundo. Este desierto no es solo arena. Guarda una profunda tristeza.",
						"vietnamese": "Phải, lữ khách. Sa mạc này không chỉ là cát. Nó chứa đựng nỗi buồn sâu thẳm.",
						"thai": "ใช่ นักเดินทาง. ทะเลทรายนี้ไม่ใช่แค่ทราย มันเก็บซ่อนความเศร้าลึกซึ้งไว้",
						"hindi": "हाँ, पथिक। यह रेगिस्तान केवल रेत नहीं है। इसमें गहरा दुख समाया है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "슬픔? 무슨 이야기야?",
						"english": "Sorrow? What tale is this?",
						"japanese": "悲しみ？どんな話だ？",
						"chinese": "悲伤？这是什么故事？",
						"french": "Tristesse ? De quelle histoire s'agit-il ?",
						"spanish": "¿Tristeza? ¿De qué historia hablas?",
						"vietnamese": "Nỗi buồn? Chuyện gì vậy?",
						"thai": "ความเศร้า? เรื่องอะไรกัน?",
						"hindi": "दुख? यह कैसी कहानी है?"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "amir",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "amir",
					"emotion": "sad",
					"content": {
						"korean": "이 바람 소리… 단순한 모래바람이 아니야. 부서진 맹세의 메아리이자 흐느낌이지.",
						"english": "This wind… it's no mere sandstorm. It's an echo of broken vows, a lament.",
						"japanese": "この風の音…ただの砂嵐ではない。砕かれた誓いのこだま、そしてすすり泣きだ。",
						"chinese": "这风声……不只是简单的沙尘暴。它是破碎誓言的回响，是呜咽声。",
						"french": "Ce vent… ce n'est pas une simple tempête de sable. C'est l'écho de serments brisés, un gémissement.",
						"spanish": "Este viento… no es una simple tormenta de arena. Es el eco de promesas rotas, un lamento.",
						"vietnamese": "Tiếng gió này… không phải chỉ là bão cát. Nó là tiếng vọng của những lời thề tan vỡ, một tiếng than khóc.",
						"thai": "เสียงลมนี้... ไม่ใช่แค่พายุทราย มันคือเสียงสะท้อนของคำสาบานที่แตกสลาย และเสียงคร่ำครวญ",
						"hindi": "यह हवा… सिर्फ़ रेत का तूफ़ान नहीं है। यह टूटे वादों की गूँज है, एक विलाप है।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "부서진 맹세? 누가 누구에게?",
						"english": "Broken vows? Who to whom?",
						"japanese": "砕かれた誓い？誰が誰に？",
						"chinese": "破碎的誓言？谁对谁？",
						"french": "Des serments brisés ? Qui à qui ?",
						"spanish": "¿Promesas rotas? ¿Quién a quién?",
						"vietnamese": "Lời thề tan vỡ? Ai với ai?",
						"thai": "คำสาบานที่แตกสลาย? ใครกับใคร?",
						"hindi": "टूटे वादे? किसने किससे?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "왕국을 지키겠다 맹세했던 수호자. 그 맹세가 산산조각 났지.",
						"english": "The guardian who vowed to protect the kingdom. That vow was shattered.",
						"japanese": "王国を守ると誓った守護者。その誓いは粉々に砕け散った。",
						"chinese": "曾誓言守护王国的守护者。那个誓言已支离破碎。",
						"french": "Le gardien qui avait juré de protéger le royaume. Ce serment a été brisé en mille morceaux.",
						"spanish": "El guardián que juró proteger el reino. Ese juramento se hizo añicos.",
						"vietnamese": "Kẻ bảo hộ đã thề bảo vệ vương quốc. Lời thề đó đã tan vỡ.",
						"thai": "ผู้พิทักษ์ที่สาบานว่าจะปกป้องอาณาจักร คำสาบานนั้นแตกสลายไปแล้ว",
						"hindi": "राज्य की रक्षा का वादा करने वाला संरक्षक। वह वादा टूट गया।"
					},
					"speaker": "amir",
					"type": "speech"
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
					"speaker": "amir",
					"emotion": "sad",
					"content": {
						"korean": "보이는가? 사막에 떠도는 망령들. 그들은 길을 잃지 않았어. 영원히 무언가를 찾고 있지.",
						"english": "Do you see them? The specters wandering the desert. They aren't lost. They seek something, eternally.",
						"japanese": "見えるか？砂漠をさまよう亡霊たち。彼らは道に迷ったのではない。永遠に何かを探し続けている。",
						"chinese": "你看到了吗？那些游荡在沙漠中的亡灵。他们并非迷路。他们永远在寻找着什么。",
						"french": "Les vois-tu ? Les spectres errant dans le désert. Ils ne sont pas perdus. Ils cherchent quelque chose, éternellement.",
						"spanish": "¿Los ves? Los espectros que deambulan por el desierto. No están perdidos. Buscan algo, eternamente.",
						"vietnamese": "Ngươi có thấy không? Những bóng ma lang thang trên sa mạc. Họ không lạc lối. Họ đang tìm kiếm thứ gì đó, vĩnh viễn.",
						"thai": "เห็นไหม? เหล่าวิญญาณที่ร่อนเร่อยู่ในทะเลทราย พวกเขาไม่ได้หลงทาง พวกเขากำลังตามหาบางสิ่งอยู่ตลอดไป",
						"hindi": "क्या तुम उन्हें देखते हो? रेगिस्तान में भटकते प्रेत। वे खोए हुए नहीं हैं। वे अनंत काल तक कुछ खोज रहे हैं।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "환영… 이제는 너무나 선명해. 슬픈 눈으로 우릴 봐.",
						"english": "Illusions… now too vivid. They watch us with sorrowful eyes.",
						"japanese": "幻影…もう鮮明すぎる。悲しい瞳で私たちを見ている。",
						"chinese": "幻影……现在变得如此清晰。它们用悲伤的眼睛看着我们。",
						"french": "Illusions… maintenant trop vives. Ils nous regardent avec des yeux tristes.",
						"spanish": "Ilusiones… ahora demasiado vívidas. Nos miran con ojos tristes.",
						"vietnamese": "Ảo ảnh… giờ đây quá rõ ràng. Chúng nhìn chúng ta bằng đôi mắt u sầu.",
						"thai": "ภาพลวงตา... ตอนนี้ชัดเจนเกินไป พวกเขามองเราด้วยดวงตาที่เศร้าสร้อย",
						"hindi": "भ्रम… अब बहुत स्पष्ट हैं। वे हमें उदास आँखों से देखते हैं।"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "그들은 왕국의 잔상. 배신당한 자를 찾는 건지… 아니면, 자신들을 배신한 자를 찾는 건지….",
						"english": "They are remnants of the kingdom. Seeking those who were betrayed… or those who betrayed them…",
						"japanese": "彼らは王国の残像。裏切られた者を探しているのか…それとも、自分たちを裏切った者を探しているのか…。",
						"chinese": "他们是王国的残影。是在寻找被背叛者……还是在寻找背叛他们的人……",
						"french": "Ce sont les vestiges du royaume. Cherchent-ils ceux qui ont été trahis… ou ceux qui les ont trahis…",
						"spanish": "Son vestigios del reino. ¿Buscan a los traicionados… o a quienes los traicionaron…?",
						"vietnamese": "Họ là tàn dư của vương quốc. Tìm kiếm những kẻ bị phản bội… hay những kẻ đã phản bội họ…?",
						"thai": "พวกเขาคือเศษเสี้ยวของอาณาจักร กำลังตามหาผู้ที่ถูกหักหลัง... หรือผู้ที่หักหลังพวกเขา...",
						"hindi": "वे राज्य के अवशेष हैं। क्या वे उन लोगों को खोज रहे हैं जिन्हें धोखा दिया गया था… या उन्हें जिन्होंने उन्हें धोखा दिया था…?"
					},
					"speaker": "amir",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "amir",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "여기가 가장 깊은 곳. 비극의 심장이 뛰는 곳이지.",
						"english": "This is the deepest place. Where the heart of tragedy beats.",
						"japanese": "ここが最も深い場所。悲劇の心臓が脈打つ場所だ。",
						"chinese": "这里是最深的地方。悲剧之心跳动之处。",
						"french": "C'est l'endroit le plus profond. Là où bat le cœur de la tragédie.",
						"spanish": "Este es el lugar más profundo. Donde late el corazón de la tragedia.",
						"vietnamese": "Đây là nơi sâu thẳm nhất. Nơi trái tim bi kịch đang đập.",
						"thai": "ที่นี่คือที่ที่ลึกที่สุด ที่ที่หัวใจของโศกนาฏกรรมเต้นอยู่",
						"hindi": "यह सबसे गहरी जगह है। जहाँ त्रासदी का दिल धड़कता है।"
					},
					"speaker": "amir"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "공기가… 절망으로 가득 차 있어.",
						"english": "The air… is thick with despair.",
						"japanese": "空気が… 絶望に満ちている。",
						"chinese": "空气中… 弥漫着绝望。",
						"french": "L'air… est imprégné de désespoir.",
						"spanish": "El aire… está lleno de desesperación.",
						"vietnamese": "Không khí… tràn ngập sự tuyệt vọng.",
						"thai": "อากาศ… เต็มไปด้วยความสิ้นหวัง",
						"hindi": "हवा… निराशा से भरी है।"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "amir",
					"content": {
						"korean": "깨진 룬 문자 파편들이 여기에서 희미하게 빛나. 맹세의 봉인이 부서진 흔적이지.",
						"english": "Shards of broken runes glow faintly here. A trace of the shattered Oath Seal.",
						"japanese": "砕けたルーン文字の破片がここでかすかに光る。誓いの封印が破られた痕跡だ。",
						"chinese": "破碎的符文碎片在这里微弱地闪烁。那是誓约封印破碎的痕迹。",
						"french": "Des éclats de runes brisées brillent faiblement ici. Une trace du Sceau du Serment brisé.",
						"spanish": "Fragmentos de runas rotas brillan débilmente aquí. Una huella del Sello del Juramento destrozado.",
						"vietnamese": "Những mảnh vỡ chữ rune vỡ tan phát sáng mờ nhạt ở đây. Dấu vết của Phong ấn Lời thề bị phá vỡ.",
						"thai": "เศษอักษรรูนที่แตกหักส่องแสงเรืองรองจางๆ ที่นี่ ร่องรอยของผนึกคำสาบานที่แตกสลาย",
						"hindi": "टूटे हुए रूण के टुकड़े यहाँ धुंधले से चमक रहे हैं। शपथ की मुहर के टूटने का निशान है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "황량한 사막 속 푸른 꽃 한 송이. 그 꽃은 파괴된 영혼의 검에서 피어난 마지막 그리움이야.",
						"english": "A single blue flower in the desolate desert. It's the last yearning bloomed from the Sword of Ruined Souls.",
						"japanese": "荒涼たる砂漠に咲く一輪の青い花。それは破壊された魂の剣から咲き誇った最後の郷愁だ。",
						"chinese": "荒凉沙漠中的一朵蓝色之花。那是从被摧毁的灵魂之剑中绽放出的最后一丝眷恋。",
						"french": "Une unique fleur bleue dans le désert désolé. C'est le dernier désir éclos de l'Épée des Âmes Ruinées.",
						"spanish": "Una solitaria flor azul en el desierto desolado. Es el último anhelo florecido de la Espada de las Almas Destruidas.",
						"vietnamese": "Một bông hoa xanh duy nhất trong sa mạc hoang vắng. Đó là nỗi khao khát cuối cùng nở ra từ Thanh kiếm Linh hồn bị hủy hoại.",
						"thai": "ดอกไม้สีน้ำเงินดอกหนึ่งในทะเลทรายอันรกร้าง มันคือความโหยหาสุดท้ายที่ผลิบานจากดาบแห่งวิญญาณที่ถูกทำลาย",
						"hindi": "वीरान रेगिस्तान में एक अकेला नीला फूल। वह टूटी हुई आत्माओं की तलवार से जन्मी आखिरी लालसा है।"
					},
					"emotion": "sad",
					"speaker": "amir",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그럼… 우리가 찾던 진실이 이곳에…?",
						"english": "So… the truth we sought is here…?",
						"japanese": "ならば… 我々が探していた真実がここに…？",
						"chinese": "那么… 我们寻找的真相就在这里…？",
						"french": "Alors… la vérité que nous cherchions est ici… ?",
						"spanish": "Entonces… ¿la verdad que buscábamos está aquí…?",
						"vietnamese": "Vậy… sự thật chúng ta tìm kiếm ở đây sao…?",
						"thai": "ถ้าอย่างนั้น… ความจริงที่เราค้นหาอยู่ที่นี่… งั้นหรือ?",
						"hindi": "तो… जिस सच को हम ढूंढ रहे थे, वह यहीं है…?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "amir",
					"content": {
						"korean": "그래. 하지만 감당할 수 없을지도 몰라. 이 모든 것을 직시할 준비가 되었는가?",
						"english": "Yes. But you might not be able to bear it. Are you ready to face all of this?",
						"japanese": "ああ。だが、お前には耐えられないかもしれない。この全てを直視する準備はできているか？",
						"chinese": "是的。但你可能无法承受。你准备好直面这一切了吗？",
						"french": "Oui. Mais tu pourrais ne pas le supporter. Es-tu prêt à faire face à tout cela ?",
						"spanish": "Sí. Pero quizás no puedas soportarlo. ¿Estás listo para enfrentar todo esto?",
						"vietnamese": "Phải. Nhưng có thể ngươi sẽ không chịu đựng nổi. Ngươi đã sẵn sàng đối mặt với tất cả những điều này chưa?",
						"thai": "ใช่. แต่เจ้าอาจจะรับมือไม่ไหว เจ้าพร้อมที่จะเผชิญหน้ากับทั้งหมดนี้แล้วหรือยัง?",
						"hindi": "हाँ। लेकिन शायद तुम इसे सहन न कर पाओ। क्या तुम इन सब का सामना करने के लिए तैयार हो?"
					},
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "거대한 수호자의 힘 앞에, 모든 것이 무너져 내렸다.",
						"english": "Before the might of the colossal Guardian, everything crumbled.",
						"japanese": "巨大な守護者の力の前に、すべてが崩れ落ちた。",
						"chinese": "在巨大守护者的力量面前，一切都崩溃了。",
						"french": "Devant la puissance du colossal Gardien, tout s'effondra.",
						"spanish": "Ante el poder del colosal Guardián, todo se desmoronó.",
						"vietnamese": "Trước sức mạnh của Người bảo vệ khổng lồ, mọi thứ đều sụp đổ.",
						"thai": "ต่อหน้าพลังของผู้พิทักษ์มหึมา ทุกสิ่งล้วนพังทลายลง",
						"hindi": "विशाल संरक्षक की शक्ति के सामने, सब कुछ बिखर गया।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "boss",
					"emotion": "base",
					"content": {
						"korean": "하찮은… 존재들… 나의… 고통을… 이해할… 수… 없다…",
						"english": "Insignificant… beings… You cannot… understand… my… pain…",
						"japanese": "取るに足らない… 存在め… 私の苦痛を… 理解することなど… できまい…",
						"chinese": "渺小… 的存在… 你们… 无法… 理解… 我的… 痛苦…",
						"french": "Êtres… insignifiants… Vous ne pouvez… pas… comprendre… ma… douleur…",
						"spanish": "Seres… insignificantes… No podéis… entender… mi… dolor…",
						"vietnamese": "Những… sinh vật… nhỏ bé… Các ngươi… không thể… hiểu… được… nỗi đau… của ta…",
						"thai": "พวก… เจ้า… ตัวเล็ก… ๆ… ไม่… อาจ… เข้าใจ… ความเจ็บปวด… ของข้า… ได้…",
						"hindi": "तुच्छ… प्राणी… तुम… मेरे… दर्द… को… समझ… नहीं… सकते…"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "아니… 우린 멈추지 않아!",
						"english": "No… we won't stop!",
						"japanese": "いや… 我々は止まらない！",
						"chinese": "不… 我们不会停止！",
						"french": "Non… nous n'arrêterons pas !",
						"spanish": "¡No… no nos detendremos!",
						"vietnamese": "Không… chúng tôi sẽ không dừng lại!",
						"thai": "ไม่… เราจะไม่หยุด!",
						"hindi": "नहीं… हम नहीं रुकेंगे!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "진실은… 반드시 밝혀낼 거야!",
						"english": "We will… surely uncover the truth!",
						"japanese": "真実は… 必ず突き止める！",
						"chinese": "真相… 终将… 大白！",
						"french": "Nous… allons… révéler la vérité !",
						"spanish": "¡La verdad… será… revelada!",
						"vietnamese": "Sự thật… nhất định… sẽ được… phơi bày!",
						"thai": "ความจริง… จะต้อง… ถูกเปิดเผย… อย่างแน่นอน!",
						"hindi": "सत्य… अवश्य… सामने… आएगा!"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "거대한 수호자가 묵직한 존재감을 드러내며 앞에 서 있었다. 고대의 슬픔이 울려 퍼졌다.",
						"english": "A colossal guardian stood before them, its immense presence palpable. Ancient sorrow resonated.",
						"japanese": "巨大な守護者が重々しい存在感を放ち、目の前に立っていた。古代の悲しみが響き渡った。",
						"chinese": "巨大的守护者以沉重的存在感立于前方。古老的悲伤回荡着。",
						"french": "Un gardien colossal se tenait devant eux, sa présence imposante palpable. Une ancienne tristesse résonnait.",
						"spanish": "Un guardián colosal se alzaba ante ellos, su imponente presencia palpable. Una antigua tristeza resonaba.",
						"vietnamese": "Một người bảo vệ khổng lồ đứng sừng sững phía trước, với sự hiện diện nặng nề. Nỗi buồn cổ xưa vang vọng.",
						"thai": "ผู้พิทักษ์ร่างมหึมายืนอยู่ตรงหน้า เผยให้เห็นถึงตัวตนอันหนักแน่น ความโศกเศร้าโบราณดังก้องกังวาน",
						"hindi": "एक विशालकाय संरक्षक भारी उपस्थिति के साथ सामने खड़ा था। प्राचीन दुःख गूँज उठा।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"emotion": "base",
					"content": {
						"korean": "그대들… 여기까지… 온… 것인가…",
						"english": "You… have… come… this far…?",
						"japanese": "貴様ら… ここまで… 来た… のか…",
						"chinese": "你们… 竟… 来到… 此地…？",
						"french": "Vous… êtes… venus… jusqu'ici… ?",
						"spanish": "Vosotros… habéis… llegado… hasta aquí…?",
						"vietnamese": "Các ngươi… đã… đến… tận đây… sao…?",
						"thai": "พวกเจ้า… มา… ถึง… ที่นี่… หรือไม่…?",
						"hindi": "तुम… यहाँ… तक… आ गए…?"
					}
				},
				{
					"content": {
						"korean": "네가… 고대 왕국을 파멸시킨 수호자, 옵시디언 오스인가?",
						"english": "Are you… Obsidian Oath, the guardian who destroyed the ancient kingdom?",
						"japanese": "お前が… 古代王国を破滅させた守護者、オブシディアン・オースなのか？",
						"chinese": "你就是… 摧毁了古老王国的守护者，黑曜石誓约吗？",
						"french": "Es-tu… Serment d'Obsidienne, le gardien qui a détruit l'ancien royaume ?",
						"spanish": "¿Eres tú… Juramento de Obsidiana, el guardián que destruyó el antiguo reino?",
						"vietnamese": "Ngươi… có phải là Obsidian Oath, người bảo vệ đã hủy diệt vương quốc cổ đại không?",
						"thai": "เจ้าคือ… พันธะทมิฬ ผู้พิทักษ์ที่ทำลายอาณาจักรโบราณใช่หรือไม่?",
						"hindi": "क्या तुम… प्राचीन राज्य को नष्ट करने वाले संरक्षक, ऑब्सीडियन ओथ हो?"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "나는… 맹세의… 검… 이자… 파멸의… 심장…",
						"english": "I am… the Sword… of Oath… and… the Heart… of Ruin…",
						"japanese": "我は… 誓いの… 剣… にして… 破滅の… 心臓…",
						"chinese": "我是… 誓约之… 剑… 亦是… 毁灭之… 心…",
						"french": "Je suis… l'Épée… du Serment… et… le Cœur… de la Ruine…",
						"spanish": "Soy… la Espada… del Juramento… y… el Corazón… de la Ruina…",
						"vietnamese": "Ta là… Thanh kiếm… của Lời thề… và… Trái tim… của Sự hủy diệt…",
						"thai": "ข้าคือ… ดาบ… แห่งคำสาบาน… และ… หัวใจ… แห่งความพินาศ…",
						"hindi": "मैं… शपथ की… तलवार… और… विनाश का… हृदय… हूँ…"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그럼… 네가 왕국을 파멸시킨 원흉이로군!",
						"english": "Then… you are the culprit who destroyed the kingdom!",
						"japanese": "ならば… お前が王国を破滅させた元凶というわけか！",
						"chinese": "那么… 你就是毁灭王国的元凶！",
						"french": "Alors… tu es le coupable qui a détruit le royaume !",
						"spanish": "¡Entonces… eres el culpable que destruyó el reino!",
						"vietnamese": "Vậy thì… ngươi chính là kẻ chủ mưu đã hủy diệt vương quốc!",
						"thai": "ถ้าอย่างนั้น… เจ้าคือต้นเหตุที่ทำลายอาณาจักร!",
						"hindi": "तो… तुम ही हो जिसने राज्य को नष्ट किया!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"emotion": "sad",
					"content": {
						"korean": "파멸은… 나의… 죄악… 나의… 그리움…",
						"english": "Ruin... my... sin... my... longing...",
						"japanese": "破滅は… 私の… 罪悪… 私の… 懐かしさ…",
						"chinese": "毁灭…是…我的…罪恶…我的…思念…",
						"french": "La ruine... mon... péché... ma... nostalgie...",
						"spanish": "La ruina... mi... pecado... mi... anhelo...",
						"vietnamese": "Hủy diệt... là... tội lỗi... của ta... nỗi... nhớ mong...",
						"thai": "หายนะ...คือ...บาป...ของข้า...ความ...โหยหา...",
						"hindi": "विनाश... मेरा... पाप... मेरी... लालसा..."
					}
				}
			],
			"win_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "격렬한 전투 끝에 수호자의 단단한 외피가 부서지고, 그 안에서 영혼의 검의 마지막 파편이 드러났다.",
						"english": "After a fierce battle, the Guardian's tough shell shattered, revealing the last fragment of the Sword of Souls.",
						"japanese": "激しい戦闘の末、守護者の硬い外殻が砕け散り、その中から魂の剣の最後の破片が現れた。",
						"chinese": "激烈的战斗之后，守护者坚硬的外壳破碎，露出了灵魂之剑的最后一片碎片。",
						"french": "Après une bataille féroce, la carapace solide du Gardien se brisa, révélant le dernier fragment de l'Épée des Âmes.",
						"spanish": "Tras una feroz batalla, la dura coraza del Guardián se hizo pedazos, revelando el último fragmento de la Espada de las Almas.",
						"vietnamese": "Sau một trận chiến khốc liệt, lớp vỏ cứng rắn của Người bảo vệ vỡ tan, để lộ mảnh vỡ cuối cùng của Thanh kiếm Linh hồn.",
						"thai": "หลังจากการต่อสู้ที่ดุเดือด เปลือกแข็งของผู้พิทักษ์ก็แตกสลาย เผยให้เห็นชิ้นส่วนสุดท้ายของดาบแห่งวิญญาณ",
						"hindi": "एक भयंकर युद्ध के बाद, संरक्षक का कठोर कवच टूट गया, जिससे आत्माओं की तलवार का अंतिम टुकड़ा प्रकट हुआ।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "그대들… 또한… 파멸의… 운명인가… 나처럼… 부서질… 것인가….",
						"english": "Are you... also... destined... for ruin...? Will you... break... like me...?",
						"japanese": "お前たちも… また… 破滅の… 運命か… 私のように… 砕け散る… のか…。",
						"chinese": "你们…也…注定…毁灭吗…会像…我一样…破碎吗…",
						"french": "Vous aussi... êtes-vous... destinés... à la ruine...? Serez-vous... brisés... comme moi...?",
						"spanish": "¿Vosotros... también... estáis... destinados... a la ruina...? ¿Os... romperéis... como yo...?",
						"vietnamese": "Các ngươi... cũng... sẽ... hủy diệt... ư...? Sẽ... tan vỡ... như ta...?",
						"thai": "พวกเจ้า...ก็...ต้อง...หายนะ...เช่นกัน...รึ...? จะ...แตกสลาย...เหมือนข้า...รึ...?",
						"hindi": "क्या तुम... भी... विनाश... के लिए... नियत हो...? क्या तुम... टूट... जाओगे... मेरी तरह...?"
					},
					"emotion": "sad",
					"speaker": "boss",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "수호자의 음성은 메마른 바람 소리처럼 흩어지며, 마지막 파편마저 빛을 잃고 먼지로 돌아갔다.",
						"english": "The Guardian's voice scattered like the dry wind, and even the last fragment lost its light and turned to dust.",
						"japanese": "守護者の声は乾いた風の音のようにかき消され、最後の破片までも光を失い、塵と化した。",
						"chinese": "守护者的声音像干涸的风声一样消散，连最后一片碎片也失去了光芒，化为尘埃。",
						"french": "La voix du Gardien se dispersa comme le vent sec, et même le dernier fragment perdit sa lumière et retourna à la poussière.",
						"spanish": "La voz del Guardián se dispersó como el viento seco, e incluso el último fragmento perdió su luz y se convirtió en polvo.",
						"vietnamese": "Giọng nói của Người bảo vệ tan biến như tiếng gió khô, và ngay cả mảnh vỡ cuối cùng cũng mất đi ánh sáng và hóa thành tro bụi.",
						"thai": "เสียงของผู้พิทักษ์สลายไปเหมือนเสียงลมแห้ง และแม้แต่ชิ้นส่วนสุดท้ายก็สูญเสียแสงและกลายเป็นธุลีดิน",
						"hindi": "संरक्षक की आवाज़ सूखी हवा की तरह बिखर गई, और अंतिम टुकड़ा भी अपनी रोशनी खोकर धूल में मिल गया।"
					},
					"type": "speech"
				},
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "amir",
					"action": "enter"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이것이… 고대 기록이 전하던 진실이었어. 망령들의 울부짖음과 바람의 속삭임이 모두 이것을 가리켰지.",
						"english": "This... was the truth conveyed by ancient records. The wailing of spirits and the whispers of the wind all pointed to this.",
						"japanese": "これが… 古代の記録が伝えていた真実だった。亡霊たちの叫び声と風のささやきが、すべてこれを指し示していたのだ。",
						"chinese": "这…就是古代记录传达的真相。亡灵的哀嚎和风的低语都指向了这一点。",
						"french": "C'était... la vérité transmise par les anciens récits. Les hurlements des spectres et les murmures du vent pointaient tous vers cela.",
						"spanish": "Esta... era la verdad transmitida por los antiguos registros. Los lamentos de los espíritus y los susurros del viento, todo apuntaba a esto.",
						"vietnamese": "Đây... chính là sự thật mà các ghi chép cổ đại đã truyền lại. Tiếng gào thét của các vong hồn và lời thì thầm của gió đều chỉ về điều này.",
						"thai": "นี่...คือความจริงที่บันทึกโบราณได้บอกไว้ เสียงคร่ำครวญของวิญญาณและเสียงกระซิบของลมล้วนชี้ไปที่สิ่งนี้",
						"hindi": "यह... वही सत्य था जो प्राचीन अभिलेखों द्वारा बताया गया था। आत्माओं का विलाप और हवा की फुसफुसाहट, सब इसी ओर इशारा करते थे।"
					},
					"speaker": "amir",
					"type": "speech"
				},
				{
					"speaker": "amir",
					"emotion": "sad",
					"content": {
						"korean": "영혼의 검은… 스스로 맹세를 깨고 왕국을 파멸시켰어. 깨진 룬이 그 증거였고, 푸른 꽃은 그 그리움의 잔영이었던 거야.",
						"english": "The Sword of Souls... broke its own oath and destroyed the kingdom. The shattered rune was the proof, and the blue flower was the lingering image of its longing.",
						"japanese": "魂の剣は… 自ら誓いを破り、王国を破滅させた。砕けたルーンがその証拠であり、青い花はその懐かしさの残影だったのだ。",
						"chinese": "灵魂之剑…它自己打破了誓言，摧毁了王国。破碎的符文就是证据，蓝色的花朵就是它思念的残影。",
						"french": "L'Épée des Âmes... a rompu son propre serment et détruit le royaume. La rune brisée en était la preuve, et la fleur bleue était la rémanence de son désir ardent.",
						"spanish": "La Espada de las Almas... rompió su propio juramento y destruyó el reino. La runa destrozada era la prueba, y la flor azul era la imagen persistente de su anhelo.",
						"vietnamese": "Thanh kiếm Linh hồn... đã tự phá vỡ lời thề và hủy diệt vương quốc. Viên đá rune vỡ là bằng chứng, và bông hoa xanh là tàn dư của nỗi nhớ mong đó.",
						"thai": "ดาบแห่งวิญญาณ...ได้ละเมิดคำสาบานของตนเองและทำลายอาณาจักร รูนที่แตกสลายคือหลักฐาน และดอกไม้สีน้ำเงินคือภาพสะท้อนแห่งความโหยหาของมัน",
						"hindi": "आत्माओं की तलवार... उसने अपनी प्रतिज्ञा तोड़ी और राज्य को नष्ट कर दिया। टूटा हुआ रूण इसका प्रमाण था, और नीला फूल उसकी लालसा की शेष छवि थी।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "믿을 수 없어… 가해자로 보였던 존재가… 가장 비극적인 피해자였다니….",
						"english": "I can't believe it... The one who seemed to be the perpetrator... was the most tragic victim...",
						"japanese": "信じられない… 加害者に見えた存在が… 最も悲劇的な被害者だったとは…。",
						"chinese": "我不敢相信…看起来是加害者的人…竟然是最悲剧的受害者…",
						"french": "Je n'arrive pas à y croire... Celui qui semblait être le coupable... était la victime la plus tragique...",
						"spanish": "No puedo creerlo... El que parecía ser el perpetrador... era la víctima más trágica...",
						"vietnamese": "Không thể tin được... Kẻ tưởng chừng là thủ phạm... lại là nạn nhân bi thảm nhất...",
						"thai": "ไม่อยากจะเชื่อเลย...คนที่ดูเหมือนจะเป็นผู้กระทำผิด...กลับเป็นเหยื่อที่น่าเศร้าที่สุด...",
						"hindi": "मुझे विश्वास नहीं हो रहा... जो अपराधी लग रहा था... वह सबसे दुखद पीड़ित था..."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이 사막 전체가 그 죄책감과 그리움으로 이루어진 거대한 감옥이었던 거야.",
						"english": "This entire desert was a giant prison made of that guilt and longing.",
						"japanese": "この砂漠全体が、その罪悪感と懐かしさでできた巨大な監獄だったのだ。",
						"chinese": "这整个沙漠都是由那份罪恶感和思念构成的巨大监狱。",
						"french": "Tout ce désert était une gigantesque prison faite de cette culpabilité et de ce désir ardent.",
						"spanish": "Todo este desierto era una prisión gigante hecha de esa culpa y anhelo.",
						"vietnamese": "Toàn bộ sa mạc này là một nhà tù khổng lồ được tạo nên từ cảm giác tội lỗi và nỗi nhớ mong đó.",
						"thai": "ทะเลทรายทั้งหมดนี้คือคุกขนาดใหญ่ที่สร้างขึ้นจากความรู้สึกผิดและความโหยหานั้น",
						"hindi": "यह पूरा रेगिस्तान उस अपराधबोध और लालसा से बनी एक विशाल जेल था।"
					},
					"speaker": "amir"
				},
				{
					"content": {
						"korean": "모든 것이… 절망이야.",
						"english": "Everything... is despair.",
						"japanese": "すべてが… 絶望だ。",
						"chinese": "一切…都是绝望。",
						"french": "Tout... n'est que désespoir.",
						"spanish": "Todo... es desesperación.",
						"vietnamese": "Mọi thứ... đều là tuyệt vọng.",
						"thai": "ทุกสิ่ง...คือความสิ้นหวัง",
						"hindi": "सब कुछ... निराशा है।"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"epilogue": {
		"korean": [
			"사막은 침묵했다. 비극의 검은 사라졌고, 그 모든 진실은 모래와 함께 묻혔다.",
			"그리움은 바람이 되어 영원히 떠돌았다. 왕국의 영혼들은 여전히 안식을 찾지 못하고.",
			"가해자는 피해자였고, 구원은 파멸이었다. 뒤틀린 진실은 끝없는 슬픔만을 남겼다.",
			"모래 위에 남은 것은, 차가운 절망뿐. 과연 이 모든 것이 끝난 걸까?",
			"새로운 여정의 시작이거나, 혹은 또 다른 비극의 서막일지도 모른다."
		],
		"english": [
			"The desert fell silent. The black sword of tragedy vanished, and all its truths were buried with the sand.",
			"Longing became the wind, wandering forever. The souls of the kingdom still found no rest.",
			"The perpetrator was the victim, and salvation was destruction. Twisted truth left only endless sorrow.",
			"All that remained on the sand was cold despair. Had all of this truly ended?",
			"It might be the beginning of a new journey, or perhaps the prelude to another tragedy."
		],
		"japanese": [
			"砂漠は沈黙した。悲劇の剣は消え去り、全ての真実は砂と共に埋もれた。",
			"郷愁は風となり、永遠に彷徨った。王国の魂たちは未だ安息を見つけられずに。",
			"加害者は被害者であり、救済は破滅だった。歪んだ真実は、終わりのない悲しみだけを残した。",
			"砂の上に残されたのは、冷たい絶望だけ。果たしてこの全ては終わったのだろうか？",
			"新しい旅の始まりか、あるいは別の悲劇の序幕なのかもしれない。"
		],
		"chinese": [
			"沙漠陷入了沉寂。悲剧之剑消失了，所有的真相都随沙土一同埋葬。",
			"思念化作风，永远地漂泊。王国的灵魂们依然未能找到安息。",
			"施害者是受害者，救赎是毁灭。扭曲的真相只留下了无尽的悲伤。",
			"沙漠上只剩下冰冷的绝望。这一切真的结束了吗？",
			"这可能是一段新旅程的开始，也可能是另一场悲剧的序幕。"
		],
		"french": [
			"Le désert se tut. L'épée noire de la tragédie disparut, et toutes ses vérités furent enfouies avec le sable.",
			"La nostalgie devint le vent, errant à jamais. Les âmes du royaume ne trouvèrent toujours pas de repos.",
			"Le bourreau était la victime, et le salut était la destruction. La vérité tordue ne laissa qu'une tristesse sans fin.",
			"Tout ce qui restait sur le sable était un froid désespoir. Tout cela était-il vraiment terminé ?",
			"Ce pourrait être le début d'un nouveau voyage, ou peut-être le prélude d'une autre tragédie."
		],
		"spanish": [
			"El desierto enmudeció. La espada negra de la tragedia desapareció, y todas sus verdades fueron sepultadas con la arena.",
			"El anhelo se convirtió en viento, vagando eternamente. Las almas del reino aún no encontraban descanso.",
			"El verdugo era la víctima, y la salvación era la destrucción. La verdad retorcida solo dejó una tristeza infinita.",
			"Todo lo que quedó en la arena fue una fría desesperación. ¿Realmente había terminado todo esto?",
			"Podría ser el comienzo de un nuevo viaje, o quizás el preludio de otra tragedia."
		],
		"vietnamese": [
			"Sa mạc chìm vào im lặng. Thanh kiếm đen của bi kịch biến mất, và mọi sự thật đều bị chôn vùi cùng cát.",
			"Nỗi nhớ hóa thành gió, lang thang mãi mãi. Các linh hồn của vương quốc vẫn chưa tìm thấy sự an nghỉ.",
			"Kẻ gây án là nạn nhân, và sự cứu rỗi là sự hủy diệt. Sự thật méo mó chỉ để lại nỗi buồn vô tận.",
			"Tất cả những gì còn lại trên cát là nỗi tuyệt vọng lạnh lẽo. Liệu tất cả những điều này đã thực sự kết thúc chưa?",
			"Đó có thể là khởi đầu của một hành trình mới, hoặc có lẽ là khúc dạo đầu cho một bi kịch khác."
		],
		"thai": [
			"ทะเลทรายเงียบงัน ดาบดำแห่งโศกนาฏกรรมหายไป และความจริงทั้งหมดถูกฝังไปกับผืนทราย",
			"ความโหยหาแปรเปลี่ยนเป็นสายลม พเนจรไปชั่วนิรันดร์ วิญญาณแห่งอาณาจักรยังคงไร้ซึ่งที่พักพิง",
			"ผู้กระทำคือเหยื่อ และการไถ่บาปคือความพินาศ ความจริงที่บิดเบี้ยวทิ้งไว้เพียงความเศร้าโศกไม่สิ้นสุด",
			"สิ่งที่หลงเหลืออยู่บนผืนทรายคือเพียงความสิ้นหวังอันหนาวเหน็บ ทั้งหมดนี้จบลงแล้วจริงหรือ?",
			"นี่อาจเป็นการเริ่มต้นของการเดินทางครั้งใหม่ หรืออาจเป็นโหมโรงของโศกนาฏกรรมอีกบทหนึ่ง"
		],
		"hindi": [
			"रेगिस्तान खामोश था। त्रासदी की काली तलवार गायब हो गई, और उसके सारे सच रेत के साथ दफन हो गए।",
			"लालसा हवा बन गई, हमेशा के लिए भटकती रही। राज्य की आत्माओं को अभी भी शांति नहीं मिली।",
			"अपराधी पीड़ित था, और मोक्ष विनाश था। मुड़ी हुई सच्चाई ने केवल अंतहीन दुख छोड़ा।",
			"रेत पर जो बचा था, वह केवल ठंडी निराशा थी। क्या यह सब सचमुच खत्म हो गया था?",
			"यह एक नई यात्रा की शुरुआत हो सकती है, या शायद एक और त्रासदी का प्रस्तावना।"
		]
	},
	"prologue": {
		"korean": [
			"사막, 그 끝없는 비극의 감옥.",
			"모든 진실이 모래 폭풍처럼 몰아칠 때,",
			"영혼의 검은, 가해자이자 피해자였다.",
			"그리고, 그들의 그리움은… 영원히 끝나지 않았다."
		],
		"english": [
			"The desert, an endless prison of tragedy.",
			"When all truth raged like a sandstorm,",
			"The black sword of the soul was both perpetrator and victim.",
			"And their longing... never truly ended."
		],
		"japanese": [
			"砂漠、果てなき悲劇の監獄。",
			"全ての真実が砂嵐のように吹き荒れる時、",
			"魂の黒い剣は、加害者であり被害者だった。",
			"そして、彼らの郷愁は…永遠に終わらなかった。"
		],
		"chinese": [
			"沙漠，那无尽悲剧的牢狱。",
			"当所有真相如沙尘暴般袭来时，",
			"灵魂之剑，既是施害者也是受害者。",
			"而他们的思念……从未真正结束。"
		],
		"french": [
			"Le désert, une prison sans fin de tragédie.",
			"Quand toute la vérité déferlait comme une tempête de sable,",
			"L'épée noire de l'âme était à la fois bourreau et victime.",
			"Et leur nostalgie... ne s'est jamais vraiment terminée."
		],
		"spanish": [
			"El desierto, una prisión de tragedia sin fin.",
			"Cuando toda la verdad arremetía como una tormenta de arena,",
			"La espada negra del alma fue tanto verdugo como víctima.",
			"Y su anhelo... nunca terminó realmente."
		],
		"vietnamese": [
			"Sa mạc, nhà tù bi kịch không hồi kết.",
			"Khi mọi sự thật cuộn trào như bão cát,",
			"Lưỡi kiếm đen của linh hồn vừa là kẻ gây án vừa là nạn nhân.",
			"Và nỗi nhớ của họ... không bao giờ kết thúc."
		],
		"thai": [
			"ทะเลทราย คุกแห่งโศกนาฏกรรมอันไร้ที่สิ้นสุด",
			"เมื่อความจริงทั้งหมดถาโถมดุจพายุทราย,",
			"ดาบดำแห่งวิญญาณ เป็นทั้งผู้กระทำและเหยื่อ",
			"และความโหยหาของพวกเขา... ไม่เคยสิ้นสุดลงเลย"
		],
		"hindi": [
			"रेगिस्तान, उस अंतहीन त्रासदी का कारागार।",
			"जब सभी सच रेत के तूफान की तरह उमड़ पड़े,",
			"आत्मा की काली तलवार, अपराधी भी थी और पीड़ित भी।",
			"और उनकी लालसा... कभी ख़त्म नहीं हुई।"
		]
	}
} as const;
