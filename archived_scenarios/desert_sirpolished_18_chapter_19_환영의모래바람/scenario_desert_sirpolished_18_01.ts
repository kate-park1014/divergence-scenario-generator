export const scenario_desert_sirpolished_18_01 = {
	"scenario_id": "desert_sirpolished_18_01",
	"order": 1,
	"act": "intro",
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
			"dialogue": [
				{
					"content": {
						"korean": "끝없이 펼쳐진 붉은 모래 사막. 태양은 움직이지 않았다.",
						"english": "The endless red sand desert stretched out. The sun did not move.",
						"japanese": "果てしなく広がる赤い砂漠。太陽は動かなかった。",
						"chinese": "无尽的红色沙海铺展开来。太阳纹丝不动。",
						"french": "L'interminable désert de sable rouge s'étendait. Le soleil ne bougeait pas.",
						"spanish": "El desierto interminable de arena roja se extendía. El sol no se movía.",
						"vietnamese": "Sa mạc cát đỏ vô tận trải dài. Mặt trời bất động.",
						"thai": "ทะเลทรายแดงไร้ที่สิ้นสุดแผ่กว้าง ดวงอาทิตย์ไม่ขยับ",
						"hindi": "अंतहीन लाल रेत का रेगिस्तान फैला हुआ था। सूरज नहीं हिल रहा था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "…여긴 대체 어디야.",
						"english": "...Where exactly am I?",
						"japanese": "…ここはいったいどこだ。",
						"chinese": "……这里到底是什么地方。",
						"french": "...Où suis-je exactement ?",
						"spanish": "¿...Dónde estoy exactamente?",
						"vietnamese": "...Rốt cuộc đây là đâu?",
						"thai": "...ที่นี่มันที่ไหนกันแน่",
						"hindi": "...आखिर ये जगह कहाँ है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "amir",
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						2
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "길을 잃었나, 여행자여?",
						"english": "Have you lost your way, traveler?",
						"japanese": "道に迷ったのか、旅人よ？",
						"chinese": "迷路了吗，旅行者？",
						"french": "Vous êtes perdu, voyageur ?",
						"spanish": "¿Has perdido el camino, viajero?",
						"vietnamese": "Ngươi bị lạc đường rồi sao, lữ khách?",
						"thai": "เจ้าหลงทางแล้วหรือ นักเดินทาง?",
						"hindi": "क्या तुम रास्ता भटक गए हो, यात्री?"
					},
					"speaker": "amir",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "나는 검집의 수호자, 아미르. 잃어버린 보물을 찾아왔지.",
						"english": "I am Amir, Guardian of the Scabbard. I came to find a lost treasure.",
						"japanese": "私は鞘の守護者、アミール。失われた宝を探しに来た。",
						"chinese": "我是剑鞘的守护者，阿米尔。我来寻找失落的宝藏。",
						"french": "Je suis Amir, Gardien du Fourreau. Je suis venu trouver un trésor perdu.",
						"spanish": "Soy Amir, Guardián de la Vaina. Vine a buscar un tesoro perdido.",
						"vietnamese": "Ta là Amir, Người bảo hộ của Vỏ kiếm. Ta đến để tìm một kho báu thất lạc.",
						"thai": "ข้าคืออะมีร์ ผู้พิทักษ์แห่งฝักดาบ ข้ามาเพื่อตามหาขุมทรัพย์ที่หายไป",
						"hindi": "मैं अमीर हूँ, म्यान का संरक्षक। मैं एक खोया हुआ खजाना ढूंढने आया हूँ।"
					},
					"speaker": "amir",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "amir",
					"emotion": "base",
					"content": {
						"korean": "이 사막 깊은 곳에 숨겨져 있다고 하더군.",
						"english": "They say it's hidden deep within this desert.",
						"japanese": "この砂漠の奥深くに隠されているそうだ。",
						"chinese": "据说它藏在这片沙漠深处。",
						"french": "On dit qu'il est caché au plus profond de ce désert.",
						"spanish": "Dicen que está escondido en lo profundo de este desierto.",
						"vietnamese": "Người ta nói nó được giấu sâu trong sa mạc này.",
						"thai": "ว่ากันว่ามันถูกซ่อนอยู่ในส่วนลึกของทะเลทรายแห่งนี้",
						"hindi": "कहते हैं कि यह इस रेगिस्तान की गहराई में छिपा है।"
					}
				},
				{
					"content": {
						"korean": "보물? 나는… 그저 나갈 길을 찾고 있어.",
						"english": "Treasure? I... I'm just looking for a way out.",
						"japanese": "宝？私は…ただ出る道を探しているだけだ。",
						"chinese": "宝藏？我……我只是在寻找出去的路。",
						"french": "Un trésor ? Je... je cherche juste un moyen de sortir.",
						"spanish": "¿Un tesoro? Yo... solo busco una salida.",
						"vietnamese": "Kho báu ư? Tôi... tôi chỉ đang tìm lối thoát.",
						"thai": "ขุมทรัพย์เหรอ? ฉัน...ฉันแค่กำลังหาทางออก",
						"hindi": "खजाना? मैं... मैं बस बाहर निकलने का रास्ता ढूंढ रहा हूँ।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "amir",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "흐음, 나가려는 자도 결국 무엇인가를 찾고 있지. 나를 따라오게.",
						"english": "Hmm, even those who wish to leave are ultimately searching for something. Follow me.",
						"japanese": "ふむ、去ろうとする者も結局何かを探している。私について来い。",
						"chinese": "嗯，即使是想离开的人，最终也在寻找什么。跟我来。",
						"french": "Hmm, même ceux qui veulent partir finissent par chercher quelque chose. Suis-moi.",
						"spanish": "Hmm, incluso los que quieren irse buscan algo al final. Sígueme.",
						"vietnamese": "Hừm, ngay cả những kẻ muốn rời đi cuối cùng cũng đang tìm kiếm điều gì đó. Theo ta.",
						"thai": "หืม แม้แต่ผู้ที่ต้องการจากไปก็ยังคงค้นหาบางสิ่งในที่สุด ตามข้ามา",
						"hindi": "हुम्म, जो जाना चाहते हैं, वे भी आखिर में कुछ ढूँढ रहे होते हैं। मेरे पीछे आओ।"
					}
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "amir"
				},
				{
					"speaker": "amir",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 거울 조각을 받아라.",
						"english": "Take this mirror shard.",
						"japanese": "この鏡の破片を受け取れ。",
						"chinese": "拿着这块镜子碎片。",
						"french": "Prends ce fragment de miroir.",
						"spanish": "Toma este fragmento de espejo.",
						"vietnamese": "Nhận lấy mảnh gương này.",
						"thai": "จงรับเศษกระจกนี้ไป",
						"hindi": "इस दर्पण का टुकड़ा लो।"
					}
				},
				{
					"content": {
						"korean": "길을 잃은 자들에게… 이따금 진실을 보여주기도 하니.",
						"english": "To those who are lost... it sometimes reveals the truth.",
						"japanese": "道に迷いし者たちに… 時折、真実を映し出すこともある。",
						"chinese": "对于迷路的人… 它有时会揭示真相。",
						"french": "À ceux qui sont perdus... il révèle parfois la vérité.",
						"spanish": "A los que están perdidos... a veces les muestra la verdad.",
						"vietnamese": "Với những kẻ lạc lối… đôi khi nó sẽ cho thấy sự thật.",
						"thai": "แก่ผู้หลงทาง… บางครั้งมันก็เผยความจริง",
						"hindi": "भटके हुए लोगों को… यह कभी-कभी सच दिखाता है।"
					},
					"type": "speech",
					"speaker": "amir",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "낡았는데… 뭘 말하는 거지?",
						"english": "It's old... what does it mean?",
						"japanese": "古いのに… 何を言っているんだ？",
						"chinese": "它很旧… 这是什么意思？",
						"french": "C'est vieux... Qu'est-ce que ça veut dire ?",
						"spanish": "Es viejo... ¿Qué significa?",
						"vietnamese": "Nó cũ kỹ rồi… Nghĩa là sao?",
						"thai": "เก่าแล้วนี่… หมายความว่าอะไร?",
						"hindi": "यह पुराना है… इसका क्या मतलब है?"
					}
				},
				{
					"content": {
						"korean": "거울 속 풍경이 기이하게 일렁였다. 붉은 사막이 푸른 바다로 변하는 환영.",
						"english": "The scene in the mirror flickered strangely. A vision of a red desert transforming into a blue sea.",
						"japanese": "鏡の中の景色が奇妙に揺らめいた。赤い砂漠が青い海へと変わる幻影。",
						"chinese": "镜中的景象奇异地晃动着。红色的沙漠变成蓝色海洋的幻象。",
						"french": "La scène dans le miroir vacilla étrangement. Une vision d'un désert rouge se transformant en mer bleue.",
						"spanish": "La escena en el espejo parpadeó extrañamente. Una visión de un desierto rojo transformándose en un mar azul.",
						"vietnamese": "Khung cảnh trong gương dao động kỳ lạ. Một ảo ảnh sa mạc đỏ biến thành biển xanh.",
						"thai": "ภาพในกระจกสั่นไหวอย่างประหลาด ภาพหลอนของทะเลทรายสีแดงที่กลายเป็นทะเลสีคราม",
						"hindi": "दर्पण में दृश्य अजीब तरह से झिलमिलाया। लाल रेगिस्तान का नीले समुद्र में बदलने का एक भ्रम।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…착각인가.",
						"english": "...Was that an illusion?",
						"japanese": "…錯覚か。",
						"chinese": "…是错觉吗？",
						"french": "...Était-ce une illusion ?",
						"spanish": "...¿Fue una ilusión?",
						"vietnamese": "…Là ảo giác sao?",
						"thai": "…ภาพลวงตาหรือ",
						"hindi": "…क्या वह भ्रम था?"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"speaker": "amir",
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "amir",
					"content": {
						"korean": "이 사막은 모든 것을 품고 있지. 심지어 과거의 환영까지.",
						"english": "This desert holds everything. Even illusions of the past.",
						"japanese": "この砂漠は全てを抱いている。過去の幻影さえも。",
						"chinese": "这片沙漠包容万物。甚至包括过去的幻象。",
						"french": "Ce désert contient tout. Même les illusions du passé.",
						"spanish": "Este desierto lo contiene todo. Incluso las ilusiones del pasado.",
						"vietnamese": "Sa mạc này chứa đựng mọi thứ. Ngay cả ảo ảnh của quá khứ.",
						"thai": "ทะเลทรายแห่งนี้เก็บงำทุกสิ่ง แม้กระทั่งภาพหลอนในอดีต",
						"hindi": "यह रेगिस्तान सब कुछ समेटे हुए है। यहाँ तक कि अतीत के भ्रम भी।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "환영이라고?",
						"english": "Illusions?",
						"japanese": "幻影だと？",
						"chinese": "幻象？",
						"french": "Des illusions ?",
						"spanish": "¿Ilusiones?",
						"vietnamese": "Ảo ảnh ư?",
						"thai": "ภาพหลอนหรือ",
						"hindi": "भ्रम?"
					}
				},
				{
					"content": {
						"korean": "자네가 보고 싶은 것을 보여주고, 자네가 피하고 싶은 것도 보여줄 터.",
						"english": "It will show you what you wish to see, and also what you wish to avoid.",
						"japanese": "お前が見たいものを見せ、お前が避けたいものも見せるだろう。",
						"chinese": "它会展示你想看到的东西，也会展示你想避免的东西。",
						"french": "Il te montrera ce que tu désires voir, et aussi ce que tu désires éviter.",
						"spanish": "Te mostrará lo que deseas ver, y también lo que deseas evitar.",
						"vietnamese": "Nó sẽ cho ngươi thấy những gì ngươi muốn thấy, và cả những gì ngươi muốn tránh.",
						"thai": "มันจะแสดงสิ่งที่เจ้าปรารถนาจะเห็น และสิ่งที่เจ้าปรารถนาจะหลีกเลี่ยง",
						"hindi": "यह तुम्हें वह दिखाएगा जो तुम देखना चाहते हो, और वह भी जो तुम टालना चाहते हो।"
					},
					"type": "speech",
					"speaker": "amir",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "뭔가… 으스스해.",
						"english": "This is... unsettling.",
						"japanese": "何だか… 薄気味悪い。",
						"chinese": "有点… 毛骨悚然。",
						"french": "C'est... inquiétant.",
						"spanish": "Esto es... espeluznante.",
						"vietnamese": "Có gì đó… rợn người.",
						"thai": "รู้สึก… น่าขนลุก",
						"hindi": "कुछ… डरावना है।"
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"speaker": "amir",
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "아무리 가도 똑같은 길이야. 어째서지?",
						"english": "No matter how far I go, it's the same path. Why?",
						"japanese": "どこまで行っても同じ道だ。なぜだ？",
						"chinese": "无论走多远都是同一条路。为什么？",
						"french": "Peu importe où je vais, c'est le même chemin. Pourquoi ?",
						"spanish": "No importa cuánto avance, es el mismo camino. ¿Por qué?",
						"vietnamese": "Dù đi bao xa, vẫn là con đường đó. Tại sao chứ?",
						"thai": "ไม่ว่าจะไปไกลแค่ไหนก็เป็นทางเดิม ทำไมกัน?",
						"hindi": "मैं कितनी भी दूर जाऊँ, यह वही रास्ता है। ऐसा क्यों?"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "amir",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "원하는 것을 찾을 때까지는… 계속 반복되는 것이 사막의 섭리.",
						"english": "Until you find what you desire... repetition is the desert's providence.",
						"japanese": "望むものを見つけるまでは… 繰り返しが砂漠の摂理だ。",
						"chinese": "直到你找到所求之物……重复便是沙漠的法则。",
						"french": "Jusqu'à ce que tu trouves ce que tu désires... la répétition est la providence du désert.",
						"spanish": "Hasta que encuentres lo que deseas... la repetición es la providencia del desierto.",
						"vietnamese": "Cho đến khi tìm thấy thứ ngươi muốn… lặp lại là quy luật của sa mạc.",
						"thai": "จนกว่าจะพบสิ่งที่เจ้าปรารถนา… การย้ำคิดย้ำทำคือโชคชะตาของทะเลทราย",
						"hindi": "जब तक तुम्हें तुम्हारी इच्छा नहीं मिल जाती… दोहराना ही रेगिस्तान का विधान है।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "원하는 것? 나는 그저… 이 굴레를 벗어나고 싶을 뿐이야.",
						"english": "Desire? I merely… wish to escape this cycle.",
						"japanese": "望むもの？私はただ… この輪廻から抜け出したいだけだ。",
						"chinese": "所求之物？我只是……想摆脱这个循环。",
						"french": "Désir ? Je veux juste... échapper à ce cycle.",
						"spanish": "¿Deseos? Yo solo... quiero escapar de este ciclo.",
						"vietnamese": "Thứ muốn à? Ta chỉ muốn… thoát khỏi vòng lặp này thôi.",
						"thai": "สิ่งที่ต้องการ? ข้าแค่… ต้องการหลุดพ้นจากวงเวียนนี้",
						"hindi": "इच्छा? मैं बस… इस बंधन से मुक्त होना चाहता हूँ।"
					}
				},
				{
					"emotion": "base",
					"speaker": "amir",
					"type": "speech",
					"content": {
						"korean": "벗어날 수 있을까? 벗어나고 싶지 않을지도 모르지.",
						"english": "Can you escape? Perhaps you don't even wish to.",
						"japanese": "抜け出せるか？抜け出したくないのかもしれないぞ。",
						"chinese": "能摆脱吗？或许你根本不想摆脱。",
						"french": "Peux-tu t'échapper ? Peut-être que tu ne le souhaites même pas.",
						"spanish": "¿Puedes escapar? Quizás ni siquiera quieras hacerlo.",
						"vietnamese": "Ngươi có thoát được không? Có lẽ ngươi còn không muốn thoát ra.",
						"thai": "เจ้าจะหลุดพ้นได้ไหม? อาจจะไม่อยากหลุดพ้นก็ได้",
						"hindi": "क्या तुम भाग सकते हो? शायद तुम भागना ही न चाहते हो।"
					}
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "크으윽… 겨우 이 정도라니….",
						"english": "Ugh... Is this all you've got...?",
						"japanese": "くっ…たったこれだけとは…。",
						"chinese": "呃……就这点程度吗……",
						"french": "Ugh... C'est tout ce que tu as...?",
						"spanish": "Uf... ¿Es esto todo lo que tienes...?",
						"vietnamese": "Khừ… chỉ có vậy thôi sao…",
						"thai": "อึก… แค่นี้เองเหรอ…",
						"hindi": "उफ़… बस इतना ही है क्या…?"
					}
				},
				{
					"content": {
						"korean": "하지만… 진짜 주인은… 너를 기다리지 않는다….",
						"english": "But... the true master... does not await you....",
						"japanese": "だが…真の主は…お前を待たない…。",
						"chinese": "但是…真正的主人…不会等你…。",
						"french": "Mais… le véritable maître… ne t'attend pas….",
						"spanish": "Pero… el verdadero maestro… no te espera….",
						"vietnamese": "Nhưng… chủ nhân thật sự… không đợi ngươi đâu….",
						"thai": "แต่… นายท่านที่แท้จริง… ไม่ได้รอเจ้า….",
						"hindi": "लेकिन… असली मालिक… तुम्हारा इंतजार नहीं करता…।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이 모든 환영은… 그분… Sir Polished의 의지대로…",
						"english": "All these illusions… by the will of… Sir Polished….",
						"japanese": "この全ての幻影は…彼…サー・ポリッシュドの御心のままに…。",
						"chinese": "所有这些幻象…都遵从…抛光爵士的意志…。",
						"french": "Toutes ces illusions… par la volonté de… Sir Polished….",
						"spanish": "Todas estas ilusiones… por la voluntad de… Sir Pulido….",
						"vietnamese": "Tất cả những ảo ảnh này… theo ý muốn của… Sir Polished….",
						"thai": "ภาพลวงตาทั้งหมดนี้… เป็นไปตามพระประสงค์ของ… ท่านเซอร์โพลิด….",
						"hindi": "ये सभी भ्रम… सर पॉलिश्ड… की इच्छा से हैं…।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "Sir Polished… 그게 누구야?",
						"english": "Sir Polished… Who is that?",
						"japanese": "サー・ポリッシュド… それは誰だ？",
						"chinese": "抛光爵士… 那是谁？",
						"french": "Sir Polished… Qui est-ce ?",
						"spanish": "Sir Pulido… ¿Quién es ese?",
						"vietnamese": "Sir Polished… Đó là ai?",
						"thai": "ท่านเซอร์โพลิด… เขาคือใคร?",
						"hindi": "सर पॉलिश्ड… वह कौन है?"
					}
				},
				{
					"content": {
						"korean": "환영의 문지기를 쓰러뜨렸지만, 사막의 왜곡은 끝나지 않았다. 갈증은 더욱 깊어졌다.",
						"english": "Though the illusion's gatekeeper fell, the desert's distortion did not end. The thirst deepened.",
						"japanese": "幻影の門番を倒したが、砂漠の歪みは終わらなかった。渇きはさらに深まった。",
						"chinese": "尽管幻象的守门人倒下了，沙漠的扭曲并未结束。口渴感愈发强烈。",
						"french": "Bien que le gardien de l'illusion soit tombé, la distorsion du désert ne prit pas fin. La soif s'intensifia.",
						"spanish": "Aunque el guardián de la ilusión cayó, la distorsión del desierto no terminó. La sed se profundizó.",
						"vietnamese": "Dù đã hạ gục người gác cổng ảo ảnh, sự méo mó của sa mạc vẫn chưa kết thúc. Cơn khát càng thêm sâu sắc.",
						"thai": "แม้ผู้เฝ้าประตูภาพลวงตาจะล้มลง แต่ความบิดเบี้ยวของทะเลทรายก็ยังไม่สิ้นสุด ความกระหายยิ่งลึกซึ้งขึ้น",
						"hindi": "हालांकि भ्रम का द्वारपाल गिर गया, लेकिन रेगिस्तान की विकृति समाप्त नहीं हुई। प्यास और गहरी हो गई।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 모래 폭풍 속에서 서서히 모습을 드러냈다.",
						"english": "A colossal shadow slowly emerged from the sandstorm.",
						"japanese": "巨大な影が砂嵐の中からゆっくりと姿を現した。",
						"chinese": "巨大的黑影在沙尘暴中缓缓显现。",
						"french": "Une ombre colossale émergea lentement de la tempête de sable.",
						"spanish": "Una sombra colosal emergió lentamente de la tormenta de arena.",
						"vietnamese": "Một bóng đen khổng lồ dần dần xuất hiện trong bão cát.",
						"thai": "เงาขนาดมหึมาค่อยๆ ปรากฏขึ้นจากพายุทราย",
						"hindi": "एक विशाल छाया धीरे-धीरे रेत के तूफान से उभरी।"
					}
				},
				{
					"content": {
						"korean": "이게… 이 사막의 진실인가?",
						"english": "Is this... the truth of this desert?",
						"japanese": "これが… この砂漠の真実なのか？",
						"chinese": "这就是……这片沙漠的真相吗？",
						"french": "Est-ce... la vérité de ce désert ?",
						"spanish": "¿Es esto... la verdad de este desierto?",
						"vietnamese": "Đây là… sự thật của sa mạc này sao?",
						"thai": "นี่คือ… ความจริงของทะเลทรายนี้หรือ?",
						"hindi": "क्या यह… इस रेगिस्तान का सच है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "진실? 진실은 너의 욕망과 후회 속에 갇혀 있지.",
						"english": "Truth? Truth is trapped within your desires and regrets.",
						"japanese": "真実？真実は、お前の欲望と後悔の中に閉じ込められている。",
						"chinese": "真相？真相被困在你的欲望和悔恨之中。",
						"french": "Vérité ? La vérité est enfermée dans tes désirs et tes regrets.",
						"spanish": "Verdad? La verdad está atrapada en tus deseos y remordimientos.",
						"vietnamese": "Sự thật? Sự thật bị giam cầm trong dục vọng và hối tiếc của ngươi.",
						"thai": "ความจริง? ความจริงถูกจองจำอยู่ในความปรารถนาและความเสียใจของเจ้า",
						"hindi": "सच? सच तुम्हारी इच्छाओं और पछतावे में फँसा हुआ है।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "영원히 반복될 이 환영을 벗어날 수 있을 거라 생각하나?",
						"english": "Do you think you can escape this illusion that will repeat eternally?",
						"japanese": "永遠に繰り返されるこの幻影から、抜け出せると思うのか？",
						"chinese": "你以为能摆脱这个会永远重复的幻象吗？",
						"french": "Penses-tu pouvoir échapper à cette illusion qui se répétera éternellement ?",
						"spanish": "¿Crees que puedes escapar de esta ilusión que se repetirá eternamente?",
						"vietnamese": "Ngươi nghĩ mình có thể thoát khỏi ảo ảnh sẽ lặp lại mãi mãi này sao?",
						"thai": "เจ้าคิดว่าจะหลุดพ้นจากภาพลวงตาที่ดำเนินไปชั่วนิรันดร์นี้ได้หรือ?",
						"hindi": "क्या तुम्हें लगता है कि तुम इस भ्रम से निकल सकते हो जो हमेशा दोहराया जाएगा?"
					}
				},
				{
					"content": {
						"korean": "닥쳐! 나는 여기서 반드시 나갈 거야!",
						"english": "Shut up! I'm definitely getting out of here!",
						"japanese": "黙れ！私は必ずここから出ていく！",
						"chinese": "闭嘴！我一定要离开这里！",
						"french": "Tais-toi ! Je vais absolument sortir d'ici !",
						"spanish": "¡Cállate! ¡Definitivamente saldré de aquí!",
						"vietnamese": "Im đi! Ta nhất định sẽ ra khỏi đây!",
						"thai": "หุบปาก! ข้าจะต้องออกไปจากที่นี่ให้ได้!",
						"hindi": "चुप रहो! मैं यहाँ से ज़रूर निकलूँगा!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "happy",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "하하하! 헛된 발버둥이다!",
						"english": "Hahaha! A futile struggle!",
						"japanese": "ハハハ！無駄なあがきだ！",
						"chinese": "哈哈哈！徒劳的挣扎！",
						"french": "Hahaha ! Une lutte futile !",
						"spanish": "¡Jajaja! ¡Un esfuerzo inútil!",
						"vietnamese": "Hahaha! Vô ích thôi!",
						"thai": "ฮ่าฮ่าฮ่า! ช่างเป็นการดิ้นรนที่ไร้ประโยชน์!",
						"hindi": "हाहाहा! व्यर्थ का संघर्ष है!"
					}
				},
				{
					"content": {
						"korean": "너는 영원히 이 환영 속에 갇힐 운명!",
						"english": "You are destined to be trapped forever in this illusion!",
						"japanese": "お前は永遠にこの幻影の中に閉じ込められる運命だ！",
						"chinese": "你注定永远被困在这幻象中！",
						"french": "Tu es destiné à être piégé pour toujours dans cette illusion !",
						"spanish": "¡Estás destinado a quedar atrapado para siempre en esta ilusión!",
						"vietnamese": "Ngươi định sẽ bị mắc kẹt mãi mãi trong ảo ảnh này!",
						"thai": "เจ้าจะต้องติดอยู่ในภาพลวงตานี้ตลอดไป!",
						"hindi": "तुम हमेशा के लिए इस भ्रम में फंसे रहने के लिए destined हो!"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "아직… 끝나지 않았어! 나는 포기하지 않아!",
						"english": "It's not… over yet! I won't give up!",
						"japanese": "まだ…終わってない！私は諦めない！",
						"chinese": "还没…结束！我不会放弃！",
						"french": "Ce n'est pas… encore fini ! Je n'abandonnerai pas !",
						"spanish": "¡Aún no… ha terminado! ¡No me rendiré!",
						"vietnamese": "Vẫn chưa… kết thúc! Ta sẽ không bỏ cuộc!",
						"thai": "ยัง… ไม่จบ! ฉันจะไม่ยอมแพ้!",
						"hindi": "अभी… खत्म नहीं हुआ! मैं हार नहीं मानूँगा!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"붉은 모래 사막, 끝없는 길.",
			"태양은 늘 같은 자리에, 시간마저 멈춘 듯하다.",
			"모든 것이 반복되는 기이한 공간.",
			"길 잃은 자에게, 수상한 인도자가 다가온다."
		],
		"english": [
			"Red sand desert, an endless path.",
			"The sun ever in the same spot, as if time itself has stopped.",
			"A strange space where everything repeats.",
			"To the lost, a suspicious guide approaches."
		],
		"japanese": [
			"赤い砂漠、果てなき道。",
			"太陽は常に同じ場所にあり、時間さえ止まったかのようだ。",
			"全てが繰り返される奇妙な空間。",
			"道に迷える者に、怪しげな案内者が近づく。"
		],
		"chinese": [
			"红色沙海，无尽之路。",
			"太阳永悬一处，时间仿佛停滞。",
			"一切循环往复的诡异空间。",
			"对迷失之人，可疑的引导者正在靠近。"
		],
		"french": [
			"Désert de sable rouge, chemin infini.",
			"Le soleil, toujours au même endroit, comme si le temps s'était arrêté.",
			"Un espace étrange où tout se répète.",
			"À celui qui est perdu, un guide suspect s'approche."
		],
		"spanish": [
			"Desierto de arena roja, camino sin fin.",
			"El sol siempre en el mismo lugar, como si el tiempo se hubiera detenido.",
			"Un espacio extraño donde todo se repite.",
			"A los perdidos, un guía sospechoso se acerca."
		],
		"vietnamese": [
			"Sa mạc cát đỏ, con đường vô tận.",
			"Mặt trời luôn ở một vị trí, dường như thời gian đã ngừng lại.",
			"Một không gian kỳ lạ nơi mọi thứ lặp lại.",
			"Một người hướng dẫn đáng ngờ tiếp cận người lạc lối."
		],
		"thai": [
			"ทะเลทรายแดง, เส้นทางไร้ที่สิ้นสุด",
			"ดวงอาทิตย์อยู่ตรงที่เดิมเสมอ ราวกับว่าเวลาก็หยุดนิ่ง",
			"สถานที่แปลกประหลาดที่ทุกสิ่งวนเวียนซ้ำรอย",
			"ผู้หลงทาง ผู้นำทางน่าสงสัยกำลังเข้ามาใกล้"
		],
		"hindi": [
			"लाल रेत का रेगिस्तान, अंतहीन पथ।",
			"सूरज हमेशा एक ही जगह पर, मानो समय भी थम गया हो।",
			"एक अजीब जगह जहाँ सब कुछ दोहराता है।",
			"भटके हुए को, एक संदिग्ध मार्गदर्शक आता है।"
		]
	}
} as const;
