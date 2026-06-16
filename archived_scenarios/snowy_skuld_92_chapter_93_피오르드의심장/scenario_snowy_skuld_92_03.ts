export const scenario_snowy_skuld_92_03 = {
	"scenario_id": "snowy_skuld_92_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"hild": {
			"id": "mon_6f20c96a-bf07-4aae-b37c-da898a8336e8",
			"name": {
				"korean": "힐드",
				"english": "Hild",
				"japanese": "ヒルド",
				"chinese": "希尔德",
				"french": "Hild",
				"spanish": "Hild",
				"vietnamese": "Hild",
				"thai": "ฮิลด์",
				"hindi": "हिल्ड"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/722a86fd-2903-4688-3f04-db8241ed0e00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/af3d96ba-e571-4132-fede-cd415bd15c00/public"
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
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 선체의 가장 깊은 곳. 모든 룬이 한 줄을 남기고 모여 있었다.",
						"english": "Deepest part of the colossal hull. All runes gathered, save for one line.",
						"japanese": "巨大な船体の最も深い場所。全てのルーンが、一行を残して集まっていた。",
						"chinese": "巨大船体最深处。所有符文，除了一行，都聚集于此。",
						"french": "La partie la plus profonde de la coque colossale. Toutes les runes se sont rassemblées, à l'exception d'une ligne.",
						"spanish": "La parte más profunda del casco colosal. Todas las runas se reunieron, excepto una línea.",
						"vietnamese": "Sâu nhất trong thân tàu khổng lồ. Mọi rune đều tụ tập, chỉ còn sót lại một hàng.",
						"thai": "ส่วนที่ลึกที่สุดของตัวเรือขนาดมหึมา อักขระรูนทั้งหมดรวมตัวกัน ยกเว้นหนึ่งบรรทัด",
						"hindi": "विशाल जहाज़ के सबसे गहरे हिस्से में। सभी रून्स, एक पंक्ति छोड़कर, इकट्ठा हो गए थे।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "이게 전부야? 이걸 해독하면….",
						"english": "Is this all? If I decipher this...",
						"japanese": "これが全てか？これを解読すれば…。",
						"chinese": "就这些吗？如果我能解读它...",
						"french": "C'est tout ? Si je déchiffre ça...",
						"spanish": "¿Es todo esto? Si descifro esto...",
						"vietnamese": "Chỉ có vậy thôi sao? Nếu giải mã cái này...",
						"thai": "แค่นี้เองเหรอ? ถ้าฉันถอดรหัสนี้...",
						"hindi": "बस इतना ही है? अगर मैं इसे समझ पाता हूँ तो..."
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "hild",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…여기에, 수천의 이름이 새겨져 있다.",
						"english": "...Here, thousands of names are carved.",
						"japanese": "…ここに、数千の名前が刻まれている。",
						"chinese": "...这里，刻着数千个名字。",
						"french": "...Ici, des milliers de noms sont gravés.",
						"spanish": "...Aquí, miles de nombres están grabados.",
						"vietnamese": "...Ở đây, hàng ngàn cái tên được khắc.",
						"thai": "...ที่นี่ มีชื่อนับพันสลักอยู่",
						"hindi": "...यहाँ, हज़ारों नाम खुदे हुए हैं।"
					},
					"speaker": "hild"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "맹세의 룬과, 단 하나의 이름이 겹쳐지는 곳.",
						"english": "Where the rune of vows and a single name overlap.",
						"japanese": "誓いのルーンと、ただ一つの名前が重なる場所。",
						"chinese": "誓言符文，与一个名字重叠之处。",
						"french": "Là où la rune des vœux et un seul nom se chevauchent.",
						"spanish": "Donde la runa de los juramentos y un solo nombre se superponen.",
						"vietnamese": "Nơi rune lời thề, và một cái tên duy nhất giao thoa.",
						"thai": "ที่ซึ่งอักขระรูนแห่งคำสาบานและชื่อเดียวทับซ้อนกัน",
						"hindi": "जहाँ क़समों का रूण और एक अकेला नाम ओवरलैप होते हैं।"
					},
					"speaker": "hild"
				},
				{
					"type": "speech",
					"content": {
						"korean": "겹쳐진 이름?",
						"english": "Overlapping name?",
						"japanese": "重なった名前？",
						"chinese": "重叠的名字？",
						"french": "Nom superposé ?",
						"spanish": "¿Nombre superpuesto?",
						"vietnamese": "Tên giao thoa?",
						"thai": "ชื่อที่ทับซ้อนกัน?",
						"hindi": "ओवरलैप नाम?"
					},
					"speaker": "character_any",
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "hild",
					"spot": [
						2,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "hild",
					"type": "speech",
					"content": {
						"korean": "그래. 맹세의 룬은, 언제나 그 이름과 함께였다.",
						"english": "Yes. The rune of vows was always with that name.",
						"japanese": "そうだ。誓いのルーンは、いつもその名前と共にあった。",
						"chinese": "是的。誓言符文，一直与那个名字相伴。",
						"french": "Oui. La rune des vœux a toujours été avec ce nom.",
						"spanish": "Sí. La runa de los juramentos siempre estuvo con ese nombre.",
						"vietnamese": "Đúng vậy. Rune lời thề, luôn luôn đi cùng cái tên đó.",
						"thai": "ใช่ อักขระรูนแห่งคำสาบานอยู่คู่กับชื่อนั้นเสมอ",
						"hindi": "हाँ। क़समों का रूण, हमेशा उस नाम के साथ था।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "라그나르. 홀로 남겨진, 스쿌드의 선장.",
						"english": "Ragnar. The captain of the Skjold, left alone.",
						"japanese": "ラグナル。独り残された、スキュルドの船長。",
						"chinese": "朗纳尔。被独自留下的，斯乔尔德的船长。",
						"french": "Ragnar. Le capitaine du Skjold, laissé seul.",
						"spanish": "Ragnar. El capitán del Skjold, abandonado.",
						"vietnamese": "Ragnar. Thuyền trưởng Skjold, bị bỏ lại một mình.",
						"thai": "แร็กนาร์ กัปตันแห่งสคโยลด์ ผู้ถูกทิ้งไว้ลำพัง",
						"hindi": "रैग्नार। स्कोल्ड का कप्तान, अकेला छोड़ दिया गया।"
					},
					"speaker": "hild"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "선장? 그럼 이 배는…",
						"english": "Captain? Then this ship...",
						"japanese": "船長？ではこの船は…",
						"chinese": "船长？那么这艘船是…",
						"french": "Capitaine ? Alors ce navire...",
						"spanish": "¿Capitán? Entonces este barco...",
						"vietnamese": "Thuyền trưởng? Vậy con tàu này...",
						"thai": "กัปตัน? ถ้าอย่างนั้นเรือลำนี้...",
						"hindi": "कप्तान? तो यह जहाज..."
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "좌초의 밤, 모든 대가를 치르고도 혼자 남아야 했던 자.",
						"english": "On the night of the stranding, one who had to remain alone, despite paying every price.",
						"japanese": "座礁の夜、全ての代償を払ってもなお、独り残されねばならなかった者。",
						"chinese": "在搁浅之夜，那个付出一切代价却仍必须独自留下的人。",
						"french": "La nuit de l'échouage, celui qui dut rester seul malgré tous les sacrifices.",
						"spanish": "La noche del encallamiento, quien tuvo que quedarse solo, a pesar de pagar cada precio.",
						"vietnamese": "Đêm mắc cạn, người phải ở lại một mình, dù đã trả mọi giá.",
						"thai": "คืนที่เรือเกยตื้น ผู้ที่ต้องอยู่ลำพัง แม้จะแลกมาด้วยทุกสิ่ง",
						"hindi": "फंसने की रात, वह जिसे हर कीमत चुकाने के बावजूद अकेला रहना पड़ा।"
					},
					"speaker": "hild"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "의무 때문에 혼자 남았다는 건가?",
						"english": "He remained alone out of duty?",
						"japanese": "義務のために独り残ったと？",
						"chinese": "是因为职责才独自留下吗？",
						"french": "Il est resté seul par devoir ?",
						"spanish": "¿Se quedó solo por deber?",
						"vietnamese": "Anh ấy ở lại một mình vì nghĩa vụ sao?",
						"thai": "เขาอยู่ลำพังเพราะหน้าที่หรือ?",
						"hindi": "क्या वह कर्तव्य के कारण अकेला रहा?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "의무는 외로움이 되고, 외로움은 그의 전부가 되었다.",
						"english": "Duty became loneliness, and loneliness became his everything.",
						"japanese": "義務は孤独となり、孤独が彼の全てとなった。",
						"chinese": "职责变成了孤独，孤独成了他的一切。",
						"french": "Le devoir devint solitude, et la solitude devint tout pour lui.",
						"spanish": "El deber se convirtió en soledad, y la soledad se convirtió en su todo.",
						"vietnamese": "Nghĩa vụ trở thành sự cô đơn, và sự cô đơn trở thành tất cả của anh.",
						"thai": "หน้าที่กลายเป็นความโดดเดี่ยว และความโดดเดี่ยวกลายเป็นทุกสิ่งของเขา",
						"hindi": "कर्तव्य अकेलापन बन गया, और अकेलापन उसका सब कुछ बन गया।"
					},
					"speaker": "hild",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "hild",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "라그나르….",
						"english": "Ragnar...",
						"japanese": "ラグナル…",
						"chinese": "朗纳尔...",
						"french": "Ragnar...",
						"spanish": "Ragnar...",
						"vietnamese": "Ragnar...",
						"thai": "แร็กนาร์...",
						"hindi": "रैग्नार..."
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이곳의 모든 룬은 그의 절규였다. 수천 년간 홀로 남은 자의.",
						"english": "Every rune here was his cry. The cry of one left alone for millennia.",
						"japanese": "ここの全てのルーンは彼の絶叫だった。数千年間、独り残された者の。",
						"chinese": "这里所有的符文都是他的悲鸣。一个被独自留下数千年之人的。",
						"french": "Chaque rune ici était son cri. Le cri de celui qui fut laissé seul pendant des millénaires.",
						"spanish": "Cada runa aquí era su lamento. El lamento de quien fue dejado solo durante milenios.",
						"vietnamese": "Mọi chữ rune ở đây đều là tiếng kêu của anh ấy. Tiếng kêu của người bị bỏ lại một mình hàng thiên niên kỷ.",
						"thai": "ทุกอักขระรูนที่นี่คือเสียงกรีดร้องของเขา เสียงกรีดร้องของผู้ที่ถูกทิ้งไว้ลำพังมานับพันปี",
						"hindi": "यहाँ हर रून उसकी चीख थी। हजारों वर्षों से अकेले छोड़े गए व्यक्ति की चीख।"
					},
					"speaker": "hild",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "우리가 그 절규를 끝낼 수 있을까?",
						"english": "Can we end his cry?",
						"japanese": "我々はその絶叫を終わらせられるだろうか？",
						"chinese": "我们能结束他的悲鸣吗？",
						"french": "Pouvons-nous mettre fin à son cri ?",
						"spanish": "¿Podemos poner fin a su lamento?",
						"vietnamese": "Chúng ta có thể kết thúc tiếng kêu của anh ấy không?",
						"thai": "เราจะยุติเสียงกรีดร้องนั้นได้ไหม?",
						"hindi": "क्या हम उसकी चीख खत्म कर सकते हैं?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "너희의 발자국이, 그 이름에 새로운 맹세를 새기고 있다.",
						"english": "Your footsteps are carving a new vow into that name.",
						"japanese": "君たちの足跡が、その名に新たな誓いを刻んでいる。",
						"chinese": "你们的足迹，正在那个名字上刻下新的誓言。",
						"french": "Vos pas gravent un nouveau serment sur ce nom.",
						"spanish": "Vuestras pisadas están grabando un nuevo juramento en ese nombre.",
						"vietnamese": "Dấu chân của các bạn đang khắc một lời thề mới vào cái tên đó.",
						"thai": "รอยเท้าของพวกเจ้ากำลังสลักคำสาบานใหม่ลงบนชื่อนั้น",
						"hindi": "तुम्हारे पदचिह्न उस नाम पर एक नई प्रतिज्ञा उत्कीर्ण कर रहे हैं।"
					},
					"speaker": "hild"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "hild",
					"spot": [
						4,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "선체의 심장이, 수천 년의 비극을 읊조리기 시작했다.",
						"english": "The heart of the hull has begun to murmur a tragedy of millennia.",
						"japanese": "船体の心臓が、数千年の悲劇を囁き始めた。",
						"chinese": "船体的心脏，开始低语着千年的悲剧。",
						"french": "Le cœur de la coque a commencé à murmurer une tragédie millénaire.",
						"spanish": "El corazón del casco ha comenzado a murmurar una tragedia de milenios.",
						"vietnamese": "Trái tim của thân tàu đã bắt đầu thì thầm một bi kịch thiên niên kỷ.",
						"thai": "หัวใจของลำเรือได้เริ่มพึมพำโศกนาฏกรรมแห่งสหัสวรรษ",
						"hindi": "पतवार का हृदय, हजारों वर्षों की त्रासदी फुसफुसाने लगा है।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "결국 여기까지 왔구나. 모든 이름과 맹세가 모이는 곳에.",
						"english": "So you've come this far. To the place where all names and vows gather.",
						"japanese": "結局、ここまで来たのですね。全ての名前と誓いが集う場所に。",
						"chinese": "终究还是走到这里了。所有名字与誓言汇集之地。",
						"french": "Vous êtes donc arrivés jusqu'ici. Là où tous les noms et serments se rejoignent.",
						"spanish": "Así que habéis llegado hasta aquí. Al lugar donde todos los nombres y juramentos se unen.",
						"vietnamese": "Cuối cùng ngươi cũng đến đây. Nơi mọi tên tuổi và lời thề tụ họp.",
						"thai": "ในที่สุดเจ้าก็มาถึงที่นี่ ที่ซึ่งนามและคำสาบานทั้งหมดมารวมกัน",
						"hindi": "तो तुम यहाँ तक आ गए। उस स्थान पर जहाँ सभी नाम और प्रतिज्ञाएँ एकत्रित होती हैं।"
					},
					"speaker": "hild"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "더 이상 돌아갈 수 없어.",
						"english": "There's no turning back now.",
						"japanese": "もう後戻りはできません。",
						"chinese": "已无法回头。",
						"french": "Impossible de faire demi-tour.",
						"spanish": "Ya no hay vuelta atrás.",
						"vietnamese": "Không thể quay lại được nữa.",
						"thai": "ไม่มีทางย้อนกลับแล้ว",
						"hindi": "अब पीछे मुड़ना नामुमकिन है।"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그래. 이곳에서, 너희는 그 모든 비극을 마주해야 한다.",
						"english": "Yes. Here, you must face all that tragedy.",
						"japanese": "ええ。ここで、あなたたちはその全ての悲劇に立ち向かわなければなりません。",
						"chinese": "没错。在此地，你们必须面对所有的悲剧。",
						"french": "Oui. Ici, vous devez affronter toute cette tragédie.",
						"spanish": "Sí. Aquí, debéis afrontar toda esa tragedia.",
						"vietnamese": "Phải. Tại đây, các ngươi phải đối mặt với tất cả bi kịch đó.",
						"thai": "ใช่ ที่นี่ เจ้าจะต้องเผชิญหน้ากับโศกนาฏกรรมทั้งหมดนั้น",
						"hindi": "हाँ। यहीं पर, तुम्हें उस सारी त्रासदी का सामना करना होगा।"
					},
					"speaker": "hild",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "우리가, 해낼 거야.",
						"english": "We'll do it.",
						"japanese": "私たちが、やり遂げます。",
						"chinese": "我们，会做到。",
						"french": "Nous allons y arriver.",
						"spanish": "Lo lograremos.",
						"vietnamese": "Chúng ta, sẽ làm được.",
						"thai": "เราจะทำได้",
						"hindi": "हम इसे कर दिखाएँगे।"
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "수천 년의 절규가 깃든 곳. 정체 모를 그림자가 나타났다.",
						"english": "A place imbued with millennia of screams. An unknown shadow appeared.",
						"japanese": "幾千年の絶叫が宿る場所。正体不明の影が現れた。",
						"chinese": "千年绝叫之地。一个不明身份的影子出现了。",
						"french": "Un lieu imprégné de millénaires de cris. Une ombre inconnue est apparue.",
						"spanish": "Un lugar impregnado de milenios de gritos. Una sombra desconocida apareció.",
						"vietnamese": "Nơi chứa đựng hàng nghìn năm tiếng thét. Một cái bóng vô danh xuất hiện.",
						"thai": "สถานที่ที่เต็มไปด้วยเสียงกรีดร้องนับพันปี เงาประหลาดได้ปรากฏขึ้น",
						"hindi": "हज़ारों सालों की चीखों से भरी जगह। एक अज्ञात छाया प्रकट हुई।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "감히, 이 비극의 끝을 보려는가?",
						"english": "Dare you witness the end of this tragedy?",
						"japanese": "まさか、この悲劇の終わりを見ようというのか？",
						"chinese": "竟敢，妄想看到这场悲剧的结局？",
						"french": "Oseriez-vous voir la fin de cette tragédie ?",
						"spanish": "¿Osas presenciar el fin de esta tragedia?",
						"vietnamese": "Dám, muốn chứng kiến kết cục của bi kịch này sao?",
						"thai": "กล้าพอที่จะเห็นจุดจบของโศกนาฏกรรมนี้หรือ?",
						"hindi": "क्या तुम इस त्रासदी का अंत देखने का साहस करते हो?"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네가 이 모든 걸 지키고 있는 건가?",
						"english": "Are you protecting all of this?",
						"japanese": "あなたがこの全てを守っているのですか？",
						"chinese": "你就是守护着这一切的人吗？",
						"french": "Est-ce vous qui protégez tout cela ?",
						"spanish": "¿Eres tú quien protege todo esto?",
						"vietnamese": "Ngươi đang bảo vệ tất cả những điều này sao?",
						"thai": "เจ้ากำลังปกป้องทั้งหมดนี้อยู่หรือ?",
						"hindi": "क्या तुम यह सब कुछ बचा रहे हो?"
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "지키는 자는 없다. 그저, 남겨진 약속만이.",
						"english": "There is no protector. Only the promise left behind.",
						"japanese": "守る者などいない。ただ、残された約束だけが。",
						"chinese": "没有守护者。只有，留下的约定。",
						"french": "Il n'y a pas de protecteur. Seulement la promesse laissée derrière.",
						"spanish": "No hay protector. Solo la promesa que quedó.",
						"vietnamese": "Không có người bảo vệ. Chỉ có, lời hứa đã để lại.",
						"thai": "ไม่มีผู้พิทักษ์ มีเพียงคำมั่นสัญญาที่ทิ้งไว้เบื้องหลัง",
						"hindi": "कोई रक्षक नहीं है। बस, एक वादा जो पीछे रह गया है।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "hild",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"emotion": "sad",
					"speaker": "hild",
					"type": "speech",
					"content": {
						"korean": "이것이 라그나르의 마지막 맹세인가….",
						"english": "Is this Ragnar's final vow...?",
						"japanese": "これがラグナルの最後の誓いなのか…。",
						"chinese": "这就是拉格納的最后誓言吗……",
						"french": "Est-ce le dernier serment de Ragnar… ?",
						"spanish": "¿Es este el último juramento de Ragnar…?",
						"vietnamese": "Đây có phải là lời thề cuối cùng của Ragnar không….",
						"thai": "นี่คือคำสาบานสุดท้ายของแร็กนาร์หรือ….",
						"hindi": "क्या यह रग्नार की अंतिम प्रतिज्ञा है…।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "비극은, 여기서 끝낸다.",
						"english": "The tragedy, ends here.",
						"japanese": "悲劇は、ここで終わらせる。",
						"chinese": "悲剧，到此为止。",
						"french": "La tragédie, s'achève ici.",
						"spanish": "La tragedia, termina aquí.",
						"vietnamese": "Bi kịch, kết thúc tại đây.",
						"thai": "โศกนาฏกรรม จะสิ้นสุดลงที่นี่",
						"hindi": "त्रासदी, यहीं समाप्त होती है।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…끝이라고? 착각하지 마라. 이 이름은, 영원히 남을 테니.",
						"english": "...The end? Don't be mistaken. This name will live forever.",
						"japanese": "「…終わりだと？勘違いするな。この名は、永遠に残るだろう。」",
						"chinese": "“……结束了？别搞错了。这个名字，将永远流传。”",
						"french": "...La fin ? Ne te méprends pas. Ce nom restera gravé à jamais.",
						"spanish": "...¿El fin? No te equivoques. Este nombre perdurará para siempre.",
						"vietnamese": "...Kết thúc rồi sao? Đừng nhầm lẫn. Tên này sẽ còn mãi.",
						"thai": "...จบแล้วเหรอ? อย่าเข้าใจผิด ชื่อนี้จะคงอยู่ตลอดไป",
						"hindi": "...अंत? गलत मत समझो। यह नाम हमेशा रहेगा।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아니. 여기서 끝이야.",
						"english": "No. It ends here.",
						"japanese": "「いや。ここで終わりだ。」",
						"chinese": "“不。到此为止。”",
						"french": "Non. C'est ici que ça se termine.",
						"spanish": "No. Aquí termina.",
						"vietnamese": "Không. Đến đây là hết.",
						"thai": "ไม่ จบตรงนี้แหละ",
						"hindi": "नहीं। यहीं पर खत्म।"
					},
					"emotion": "angry"
				},
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "hild",
					"duration_ms": 500
				},
				{
					"speaker": "hild",
					"type": "speech",
					"content": {
						"korean": "그의 외로움은 끝났지만, 그의 이야기는 이제 시작될 것이다.",
						"english": "His loneliness ended, but his story is just beginning.",
						"japanese": "「彼の孤独は終わったが、彼の物語は今始まるだろう。」",
						"chinese": "“他的孤独结束了，但他的故事才刚刚开始。”",
						"french": "Sa solitude a pris fin, mais son histoire ne fait que commencer.",
						"spanish": "Su soledad terminó, pero su historia apenas comienza.",
						"vietnamese": "Nỗi cô đơn của anh ấy đã kết thúc, nhưng câu chuyện của anh ấy giờ mới bắt đầu.",
						"thai": "ความเหงาของเขาสิ้นสุดลงแล้ว แต่เรื่องราวของเขากำลังจะเริ่มต้นขึ้น",
						"hindi": "उसकी उदासी खत्म हो गई, पर उसकी कहानी अब शुरू होगी।"
					},
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "수천 년간 겹쳐졌던 이름과 맹세가, 마침내 제자리를 찾았다.",
						"english": "Names and vows intertwined for millennia finally found their place.",
						"japanese": "「数千年にわたり重なり合った名と誓いが、ついにその場所を見つけた。」",
						"chinese": "“数千年来交织的名字与誓言，终于找到了归宿。”",
						"french": "Noms et serments entrelacés depuis des millénaires ont enfin trouvé leur place.",
						"spanish": "Nombres y juramentos entrelazados durante milenios, finalmente encontraron su lugar.",
						"vietnamese": "Những cái tên và lời thề đan xen suốt hàng thiên niên kỷ, cuối cùng đã tìm thấy vị trí của mình.",
						"thai": "ชื่อและคำสาบานที่ทับซ้อนกันมานับพันปี ในที่สุดก็ได้พบที่ของมันแล้ว",
						"hindi": "हज़ारों सालों से उलझे नाम और कसमें, आखिरकार अपनी जगह पर आ गए।"
					},
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "그러나 빙하의 심장은, 여전히 무언가를 숨기고 있었다.",
						"english": "However, the heart of the glacier was still hiding something.",
						"japanese": "「しかし、氷河の心臓は、依然として何かを隠していた。」",
						"chinese": "“然而，冰川之心，依然隐藏着什么。”",
						"french": "Cependant, le cœur du glacier cachait toujours quelque chose.",
						"spanish": "Sin embargo, el corazón del glaciar seguía ocultando algo.",
						"vietnamese": "Tuy nhiên, trái tim của sông băng vẫn còn che giấu điều gì đó.",
						"thai": "อย่างไรก็ตาม หัวใจของธารน้ำแข็งยังคงซ่อนบางสิ่งไว้",
						"hindi": "हालांकि, ग्लेशियर का दिल अब भी कुछ छिपा रहा था।"
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "하찮은 것들. 감히 이 비극을 거두려 하다니.",
						"english": "Insignificant beings. How dare you try to end this tragedy.",
						"japanese": "「取るに足らない者たちめ。よくもこの悲劇を終わらせようとするな。」",
						"chinese": "“卑微之物。竟敢妄想结束这场悲剧。”",
						"french": "Créatures insignifiantes. Comment osez-vous tenter de mettre fin à cette tragédie.",
						"spanish": "Seres insignificantes. ¿Cómo os atrevéis a intentar poner fin a esta tragedia?",
						"vietnamese": "Những kẻ tầm thường. Dám cả gan kết thúc bi kịch này sao.",
						"thai": "พวกไร้ค่า กล้าดียังไงมาพยายามยุติโศกนาฏกรรมนี้",
						"hindi": "तुच्छ प्राणी। तुम्हारी हिम्मत कैसे हुई इस त्रासदी को खत्म करने की।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "젠장…! 아직 끝나지 않았어.",
						"english": "Damn it...! It's not over yet.",
						"japanese": "「ちくしょう…！まだ終わってない！」",
						"chinese": "“该死……！还没结束！”",
						"french": "Zut...! Ce n'est pas encore fini.",
						"spanish": "¡Maldita sea...! Todavía no ha terminado.",
						"vietnamese": "Chết tiệt...! Vẫn chưa kết thúc.",
						"thai": "บ้าเอ๊ย...! ยังไม่จบ",
						"hindi": "धिक्कार है...! अभी खत्म नहीं हुआ है।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "hild",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "절규는, 아직 끝나지 않았다. 다시 일어서라.",
						"english": "The screams haven't ended yet. Rise again.",
						"japanese": "「絶叫は、まだ終わらない。再び立ち上がれ。」",
						"chinese": "“绝望的呐喊，尚未停止。再次站起来。”",
						"french": "Les hurlements n'ont pas encore cessé. Relève-toi.",
						"spanish": "Los gritos aún no han terminado. Levántate de nuevo.",
						"vietnamese": "Tiếng gào thét vẫn chưa kết thúc. Hãy đứng dậy lần nữa.",
						"thai": "เสียงกรีดร้องยังไม่สิ้นสุด ลุกขึ้นอีกครั้ง",
						"hindi": "चीखें अभी खत्म नहीं हुई हैं। फिर से उठो।"
					},
					"speaker": "hild"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"이 거대한 배는, 이름 없는 무덤이었다.",
			"수천 년의 맹세가, 한 사람의 이름과 겹쳐지는 곳.",
			"의무는 외로움이 되고, 외로움은 끝나지 않는 비극이 되었다.",
			"그리고 우리는 — 마침내 그 이름을 마주한다."
		],
		"english": [
			"This colossal ship was a nameless tomb.",
			"Where thousands of years of vows intertwine with one name.",
			"Duty became loneliness, and loneliness became an unending tragedy.",
			"And we — finally face that name."
		],
		"japanese": [
			"この巨大な船は、名もなき墓だった。",
			"数千年の誓いが、一人の名前と重なる場所。",
			"義務は孤独となり、孤独は終わらない悲劇となった。",
			"そして私たちは — ついにその名と向き合う。"
		],
		"chinese": [
			"这艘巨船，是无名的坟墓。",
			"千年誓言，与一个名字重叠之处。",
			"义务化为孤独，孤独化为无尽悲剧。",
			"而我们——终于直面那个名字。"
		],
		"french": [
			"Ce navire colossal était une tombe sans nom.",
			"Là où des milliers d'années de vœux s'entremêlent avec un seul nom.",
			"Le devoir devint solitude, et la solitude une tragédie sans fin.",
			"Et nous — faisons enfin face à ce nom."
		],
		"spanish": [
			"Esta nave colosal era una tumba sin nombre.",
			"Donde miles de años de juramentos se entrelazan con un nombre.",
			"El deber se convirtió en soledad, y la soledad en una tragedia interminable.",
			"Y nosotros — finalmente enfrentamos ese nombre."
		],
		"vietnamese": [
			"Con tàu khổng lồ này, là một ngôi mộ vô danh.",
			"Nơi ngàn năm lời thề, giao thoa với một cái tên.",
			"Nghĩa vụ thành cô đơn, cô đơn thành bi kịch không hồi kết.",
			"Và chúng ta — cuối cùng cũng đối mặt với cái tên đó."
		],
		"thai": [
			"เรือยักษ์ลำนี้คือสุสานไร้นาม",
			"ที่ซึ่งคำสาบานนับพันปีมาบรรจบกับชื่อเดียว",
			"หน้าที่กลายเป็นความโดดเดี่ยว และความโดดเดี่ยวกลายเป็นโศกนาฏกรรมที่ไม่รู้จบ",
			"และเรา — ในที่สุดก็เผชิญหน้ากับชื่อนั้น"
		],
		"hindi": [
			"यह विशाल जहाज़, एक गुमनाम क़ब्र थी।",
			"जहाँ हज़ारों सालों की क़समें, एक नाम से जुड़ती हैं।",
			"कर्तव्य एकाकीपन बना, और एकाकीपन एक अंतहीन त्रासदी बन गया।",
			"और हम — आख़िरकार उस नाम का सामना करते हैं।"
		]
	}
} as const;
