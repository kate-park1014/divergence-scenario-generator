export const scenario_snowy_astrielle_sovereign_01 = {
	"scenario_id": "snowy_astrielle_sovereign_01",
	"order": 1,
	"act": "intro",
	"theme": "snowy",
	"actors": {
		"Astri": {
			"id": "actor_10",
			"name": {
				"korean": "아스트리",
				"english": "Astri",
				"japanese": "アストリ",
				"chinese": "阿斯特里",
				"french": "Astri",
				"spanish": "Astri",
				"vietnamese": "Astri",
				"thai": "อ스트리",
				"hindi": "अस्त्री"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0496af1b-19c2-43b2-c579-38a283320a00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/537f5bb2-fba9-4781-36fc-489213dbff00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "북방의 끝, 얼음 성이 모습을 드러냈다. 날카로운 한기가 탐험대를 감쌌다.",
						"english": "At the edge of the north, the Ice Castle appeared. A sharp chill enveloped the expedition team.",
						"japanese": "北の果て、氷の城が姿を現した。鋭い冷気が探検隊を包み込んだ。",
						"chinese": "在北方尽头，冰之城堡现身。刺骨寒气笼罩了探险队。",
						"french": "Au bout du nord, le château de glace apparut. Un froid glacial enveloppa l'équipe d'expédition.",
						"spanish": "Al borde del norte, el Castillo de Hielo apareció. Un frío penetrante envolvió al equipo de expedición.",
						"vietnamese": "Ở cực bắc, Lâu đài băng đã xuất hiện. Một luồng khí lạnh buốt bao trùm đội thám hiểm.",
						"thai": "ณ สุดขอบทิศเหนือ ปราสาทน้ำแข็งปรากฏกาย ความหนาวเย็นเฉียบพลันปกคลุมทีมสำรวจ",
						"hindi": "उत्तर के किनारे पर, बर्फ का महल दिखाई दिया। एक तीखी ठंड ने अभियान दल को घेर लिया।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "여기가 겨울의 여왕 성인가?",
						"english": "Is this the Winter Queen's castle?",
						"japanese": "ここが冬の女王の城か？",
						"chinese": "这里是冬之女王的城堡吗？",
						"french": "Est-ce le château de la Reine des Neiges ?",
						"spanish": "¿Es este el castillo de la Reina del Invierno?",
						"vietnamese": "Đây là lâu đài của Nữ hoàng Mùa đông à?",
						"thai": "ที่นี่คือปราสาทของราชินีแห่งฤดูหนาวใช่ไหม?",
						"hindi": "क्या यह शीतकालीन रानी का महल है?"
					}
				},
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"speaker": "Astri",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "Astri",
					"content": {
						"korean": "…이 한기. 나 알아.",
						"english": "...This chill. I know it.",
						"japanese": "…この冷気。私にはわかる。",
						"chinese": "……这份寒意。我认识。",
						"french": "...Ce frisson. Je le connais.",
						"spanish": "...Este frío. Lo conozco.",
						"vietnamese": "...Cái lạnh này. Tôi biết nó.",
						"thai": "...ความเย็นนี้ ฉันรู้จักมัน",
						"hindi": "...यह ठंडक। मैं इसे जानती हूँ।"
					}
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "아스트리, 무슨 소리야?",
						"english": "Astri, what are you talking about?",
						"japanese": "アストリ、何を言ってるんだ？",
						"chinese": "阿斯特丽，你在说什么？",
						"french": "Astri, de quoi parles-tu ?",
						"spanish": "Astri, ¿de qué hablas?",
						"vietnamese": "Astri, cô đang nói gì vậy?",
						"thai": "แอสทรี นี่เธอพูดอะไรน่ะ?",
						"hindi": "एस्टरी, तुम क्या बात कर रही हो?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "성문 얼음 기둥에 낯익은 문양이 새겨져 있었다.",
						"english": "A familiar emblem was carved into the ice pillars of the castle gate.",
						"japanese": "城門の氷柱には見慣れた紋様が刻まれていた。",
						"chinese": "城门冰柱上刻着熟悉的纹章。",
						"french": "Un emblème familier était gravé sur les piliers de glace de la porte du château.",
						"spanish": "Un emblema familiar estaba grabado en los pilares de hielo de la puerta del castillo.",
						"vietnamese": "Một biểu tượng quen thuộc được khắc trên cột băng của cổng thành.",
						"thai": "สัญลักษณ์ที่คุ้นเคยสลักอยู่บนเสาน้ำแข็งของประตู城",
						"hindi": "महल के फाटक के बर्फीले खंभों पर एक जाना-पहचाना प्रतीक खुदा हुआ था।"
					}
				},
				{
					"content": {
						"korean": "아카데미… 이 문양도….",
						"english": "The Academy... This emblem too...",
						"japanese": "アカデミー…この紋様も…。",
						"chinese": "学院……这个纹章也是……",
						"french": "L'Académie... Cet emblème aussi...",
						"spanish": "La Academia... Este emblema también...",
						"vietnamese": "Học viện... Biểu tượng này cũng...",
						"thai": "สถาบัน... สัญลักษณ์นี้ก็...",
						"hindi": "अकादमी... यह प्रतीक भी..."
					},
					"speaker": "Astri",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "저게 뭔데?",
						"english": "What is that?",
						"japanese": "あれは何だ？",
						"chinese": "那是什么？",
						"french": "Qu'est-ce que c'est ?",
						"spanish": "¿Qué es eso?",
						"vietnamese": "Cái gì đó?",
						"thai": "นั่นอะไรน่ะ?",
						"hindi": "वह क्या है?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "오래전… 지워진 이름.",
						"english": "Long ago... a forgotten name.",
						"japanese": "遠い昔… 消された名前。",
						"chinese": "很久以前… 一个被抹去的名字。",
						"french": "Il y a longtemps... un nom effacé.",
						"spanish": "Hace mucho... un nombre borrado.",
						"vietnamese": "Từ rất lâu rồi... một cái tên bị xóa sổ.",
						"thai": "นานมาแล้ว... นามที่ถูกลบเลือน.",
						"hindi": "बहुत पहले... एक मिटाया हुआ नाम।"
					},
					"speaker": "Astri"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "성 내부로 들어설수록 한기는 더욱 깊어졌다.",
						"english": "The deeper we ventured into the castle, the colder it became.",
						"japanese": "城の奥へ進むほど、寒さは増していった。",
						"chinese": "深入城堡内部，寒意愈发深重。",
						"french": "Plus nous avancions dans le château, plus le froid s'intensifiait.",
						"spanish": "Cuanto más nos adentrábamos en el castillo, más profundo se volvía el frío.",
						"vietnamese": "Càng đi sâu vào trong lâu đài, cái lạnh càng thấm thía.",
						"thai": "ยิ่งลึกเข้าไปในปราสาท ความหนาวเย็นก็ยิ่งลึกซึ้งขึ้น.",
						"hindi": "जैसे-जैसे हम महल के अंदर गए, ठंड और गहरी होती गई।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "점점 더 추워지는 것 같아.",
						"english": "It feels like it's getting colder.",
						"japanese": "だんだん寒くなってきたみたいだ。",
						"chinese": "好像越来越冷了。",
						"french": "Il me semble qu'il fait de plus en plus froid.",
						"spanish": "Parece que cada vez hace más frío.",
						"vietnamese": "Hình như càng ngày càng lạnh.",
						"thai": "รู้สึกเหมือนยิ่งหนาวขึ้นเรื่อยๆ เลย.",
						"hindi": "लगता है ठंड और बढ़ रही है।"
					},
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "Astri"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "Astri",
					"content": {
						"korean": "이 정도 한기… 그때랑 똑같아.",
						"english": "This cold... it's just like back then.",
						"japanese": "この寒気… あの時と同じだ。",
						"chinese": "这种寒意… 和那时候一模一样。",
						"french": "Ce froid... c'est exactement comme à l'époque.",
						"spanish": "Este frío... es igual que aquella vez.",
						"vietnamese": "Cái lạnh này... giống hệt lúc đó.",
						"thai": "ความหนาวเย็นระดับนี้... เหมือนตอนนั้นเลย.",
						"hindi": "यह ठंड... बिलकुल तब जैसी है।"
					}
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "그때라니?",
						"english": "Back then?",
						"japanese": "あの時って？",
						"chinese": "那时候？",
						"french": "À l'époque ?",
						"spanish": "¿Aquella vez?",
						"vietnamese": "Lúc đó là sao?",
						"thai": "ตอนนั้นเหรอ?",
						"hindi": "तब कब?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "Astri",
					"content": {
						"korean": "마법 아카데미에서… 사고가 있었어. 그녀가 사라진 날.",
						"english": "At the Magic Academy... there was an accident. The day she vanished.",
						"japanese": "魔法アカデミーで… 事故があったんだ。彼女が消えた日。",
						"chinese": "在魔法学院… 发生了一场事故。她消失的那一天。",
						"french": "À l'Académie de Magie... il y a eu un accident. Le jour où elle a disparu.",
						"spanish": "En la Academia de Magia... hubo un accidente. El día que ella desapareció.",
						"vietnamese": "Ở Học viện Phép thuật... đã có một tai nạn. Ngày cô ấy biến mất.",
						"thai": "ที่สถาบันเวทมนตร์... เกิดอุบัติเหตุขึ้น วันที่เธอหายตัวไป.",
						"hindi": "मैजिक एकेडमी में... एक हादसा हुआ था। जिस दिन वह गायब हुई।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "겨울의 여왕?",
						"english": "The Winter Queen?",
						"japanese": "冬の女王？",
						"chinese": "冬之女王？",
						"french": "La Reine de l'Hiver ?",
						"spanish": "¿La Reina del Invierno?",
						"vietnamese": "Nữ hoàng Mùa đông?",
						"thai": "ราชินีเหมันต์?",
						"hindi": "शीतकालीन रानी?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "Astri",
					"content": {
						"korean": "그녀는… 힘을 통제하지 못했어.",
						"english": "She... couldn't control her power.",
						"japanese": "彼女は… 力を制御できなかった。",
						"chinese": "她… 无法控制她的力量。",
						"french": "Elle... n'a pas pu contrôler son pouvoir.",
						"spanish": "Ella... no pudo controlar su poder.",
						"vietnamese": "Cô ấy... không thể kiểm soát sức mạnh của mình.",
						"thai": "เธอ... ควบคุมพลังไม่ได้.",
						"hindi": "वह... अपनी शक्ति को नियंत्रित नहीं कर पाई।"
					},
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "얼음 복도는 끝없이 이어졌다. 미로 속을 걷는 듯했다.",
						"english": "The ice corridor stretched endlessly. It felt like walking through a labyrinth.",
						"japanese": "氷の廊下は果てしなく続き、まるで迷宮を歩いているようだった。",
						"chinese": "冰冷的长廊绵延无尽。仿佛置身于迷宫之中。",
						"french": "Le couloir de glace s'étendait à l'infini. C'était comme marcher dans un labyrinthe.",
						"spanish": "El corredor de hielo se extendía sin fin. Era como caminar por un laberinto.",
						"vietnamese": "Hành lang băng giá kéo dài vô tận. Cảm giác như đang đi trong mê cung.",
						"thai": "โถงน้ำแข็งทอดยาวไม่มีที่สิ้นสุด ราวกับกำลังเดินอยู่ในเขาวงกต.",
						"hindi": "बर्फीला गलियारा अंतहीन रूप से फैला हुआ था। ऐसा लगा जैसे भूलभुलैया में चल रहे हों।"
					},
					"speaker": "narrator"
				},
				{
					"action": "enter",
					"speaker": "Astri",
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "모두 조심해. 이 성은… 그녀의 마법 그 자체야.",
						"english": "Everyone, be careful. This castle... it's her magic itself.",
						"japanese": "皆さん、気を付けて。この城は… 彼女の魔法そのものだ。",
						"chinese": "大家小心。这座城堡… 是她魔法的本身。",
						"french": "Attention tout le monde. Ce château… c'est sa magie elle-même.",
						"spanish": "Todos, tengan cuidado. Este castillo… es su magia misma.",
						"vietnamese": "Mọi người cẩn thận. Lâu đài này… chính là phép thuật của cô ấy.",
						"thai": "ทุกคนระวังให้ดี ปราสาทแห่งนี้… คือเวทมนตร์ของเธอเอง",
						"hindi": "सब लोग सावधान। यह महल… उसकी जादू खुद है。"
					},
					"speaker": "Astri"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 성이 살아있다고?",
						"english": "This castle is alive?",
						"japanese": "この城が生きているって？",
						"chinese": "这座城堡是活的？",
						"french": "Ce château est vivant ?",
						"spanish": "¿Este castillo está vivo?",
						"vietnamese": "Lâu đài này sống ư?",
						"thai": "ปราสาทนี้มีชีวิตงั้นเหรอ?",
						"hindi": "यह महल ज़िंदा है?"
					},
					"speaker": "character_3"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "Astri",
					"content": {
						"korean": "이 모든 얼음… 그녀의 분노가 얼어붙은 거야.",
						"english": "All this ice... it's her frozen rage.",
						"japanese": "このすべての氷… 彼女の怒りが凍りついたものだ。",
						"chinese": "所有这些冰… 是她被冰冻的愤怒。",
						"french": "Toute cette glace… c'est sa fureur gelée.",
						"spanish": "Todo este hielo… es su furia congelada.",
						"vietnamese": "Tất cả băng này… là cơn thịnh nộ đóng băng của cô ấy.",
						"thai": "น้ำแข็งทั้งหมดนี้… คือความโกรธของเธอที่กลายเป็นน้ำแข็ง",
						"hindi": "यह सारी बर्फ़… उसका जमा हुआ गुस्सा है।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "분노… 대체 무슨 일이 있었던 거야?",
						"english": "Rage... What exactly happened?",
						"japanese": "怒り… 一体何があったんだ？",
						"chinese": "愤怒… 到底发生了什么事？",
						"french": "La fureur… Qu'est-ce qui s'est passé exactement ?",
						"spanish": "Furia… ¿Qué fue lo que pasó?",
						"vietnamese": "Thịnh nộ… Chuyện gì đã xảy ra vậy?",
						"thai": "ความโกรธ… เกิดอะไรขึ้นกันแน่?",
						"hindi": "गुस्सा… आख़िर क्या हुआ था?"
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "성 깊숙한 곳, 거대한 얼음 기둥들이 불길하게 솟아 있었다.",
						"english": "Deep within the castle, colossal ice pillars rose ominously.",
						"japanese": "城の奥深く、巨大な氷の柱が不気味にそびえ立っていた。",
						"chinese": "城堡深处，巨大的冰柱不祥地耸立着。",
						"french": "Au plus profond du château, de gigantesques piliers de glace s'élevaient de manière inquiétante.",
						"spanish": "En lo más profundo del castillo, imponentes pilares de hielo se alzaban de forma ominosa.",
						"vietnamese": "Sâu thẳm trong lâu đài, những cột băng khổng lồ hiện lên một cách đầy điềm gở.",
						"thai": "ลึกเข้าไปในปราสาท เสาน้ำแข็งขนาดมหึมาตั้งตระหง่านอย่างน่ากลัว",
						"hindi": "महल के अंदर गहराई में, विशाल बर्फीले खंभे अशुभ रूप से उठ रहे थे।"
					},
					"speaker": "narrator"
				},
				{
					"action": "enter",
					"speaker": "Astri",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "여기까지 왔어. 더 이상… 피할 수 없어.",
						"english": "We've come this far. We can't... avoid it anymore.",
						"japanese": "ここまで来た。もう… 避けることはできない。",
						"chinese": "我们已经走到这里了。再也… 无法逃避了。",
						"french": "Nous sommes arrivés jusque-là. Nous ne pouvons plus… l'éviter.",
						"spanish": "Hemos llegado hasta aquí. Ya no podemos… evitarlo.",
						"vietnamese": "Chúng ta đã đến đây rồi. Không thể… trốn tránh được nữa.",
						"thai": "เรามาถึงนี่แล้ว… หนีอีกไม่ได้แล้ว",
						"hindi": "हम यहाँ तक आ गए हैं। अब और… बच नहीं सकते।"
					},
					"speaker": "Astri"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야?",
						"english": "What are you talking about?",
						"japanese": "何を言ってるんだ？",
						"chinese": "你在说什么？",
						"french": "Que dis-tu ?",
						"spanish": "¿De qué hablas?",
						"vietnamese": "Bạn đang nói gì vậy?",
						"thai": "คุณพูดอะไร?",
						"hindi": "क्या कह रहे हो?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "Astri",
					"content": {
						"korean": "그녀를 마주해야 해. 그때 못 했던 말을… 전해야 해.",
						"english": "I must face her. I must tell her... what I couldn't then.",
						"japanese": "彼女と向き合わなければならない。あの時言えなかった言葉を… 伝えなければ。",
						"chinese": "我必须面对她。我必须告诉她… 当时没能说出的话。",
						"french": "Je dois la confronter. Je dois lui dire… ce que je n'ai pas pu dire à l'époque.",
						"spanish": "Debo enfrentarla. Debo decirle… lo que no pude decir entonces.",
						"vietnamese": "Tôi phải đối mặt với cô ấy. Tôi phải nói với cô ấy… những lời mà tôi đã không thể nói lúc đó.",
						"thai": "ฉันต้องเผชิญหน้ากับเธอ ฉันต้องบอกเธอ… ในสิ่งที่ฉันพูดไม่ได้ตอนนั้น",
						"hindi": "मुझे उसका सामना करना होगा। मुझे उसे बताना होगा… जो मैं तब नहीं कह सका।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "무슨 말인데?",
						"english": "What words?",
						"japanese": "何の言葉だ？",
						"chinese": "什么话？",
						"french": "Quels mots ?",
						"spanish": "¿Qué palabras?",
						"vietnamese": "Lời gì vậy?",
						"thai": "คำพูดอะไร?",
						"hindi": "क्या शब्द?"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "Astri",
					"content": {
						"korean": "…미안하다고.",
						"english": "...That I'm sorry.",
						"japanese": "…ごめん、と。",
						"chinese": "…对不起。",
						"french": "…Que je suis désolé.",
						"spanish": "…Que lo siento.",
						"vietnamese": "…Rằng tôi xin lỗi.",
						"thai": "…ว่าฉันขอโทษ",
						"hindi": "…कि मैं माफ़ी चाहता हूँ।"
					}
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 얼음 옥좌 앞에 정체 모를 그림자가 앉아 있었다.",
						"english": "A mysterious shadow sat before a colossal ice throne.",
						"japanese": "巨大な氷の玉座の前に、正体不明の影が座っていた。",
						"chinese": "巨大的冰之王座前，坐着一个不明身份的影子。",
						"french": "Une ombre mystérieuse était assise devant un trône de glace colossal.",
						"spanish": "Una sombra misteriosa se sentaba ante un trono de hielo colosal.",
						"vietnamese": "Một cái bóng bí ẩn ngồi trước ngai vàng băng khổng lồ.",
						"thai": "เงาลึกลับนั่งอยู่หน้าบัลลังก์น้ำแข็งขนาดมหึมา",
						"hindi": "एक विशाल बर्फ़ीले सिंहासन के सामने एक रहस्यमयी परछाई बैठी थी।"
					},
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "왔는가… 오랜만에 보는 얼굴이군.",
						"english": "You've come... A face I haven't seen in a long time.",
						"japanese": "来たか…久しぶりに見る顔だな。",
						"chinese": "你来了…真是好久不见的面孔。",
						"french": "Vous êtes venu... Un visage que je n'ai pas vu depuis longtemps.",
						"spanish": "Has venido... Un rostro que no veía hace mucho.",
						"vietnamese": "Ngươi đến rồi à... Một gương mặt đã lâu không gặp.",
						"thai": "มาแล้วสินะ... ใบหน้าที่ไม่ได้เห็นมานาน",
						"hindi": "तुम आ गए... एक चेहरा जो मैंने बहुत समय से नहीं देखा।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "direction",
					"duration_ms": 300,
					"action": "focus",
					"speaker": "Astri"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…!",
						"english": "…!",
						"japanese": "…！",
						"chinese": "…！",
						"french": "…!",
						"spanish": "…!",
						"vietnamese": "…!",
						"thai": "…!",
						"hindi": "…!"
					},
					"speaker": "Astri"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네가… 겨울의 여왕인가?",
						"english": "Are you... the Winter Queen?",
						"japanese": "お前が…冬の女王か？",
						"chinese": "你就是…冬之女王吗？",
						"french": "Êtes-vous... la Reine de l'Hiver ?",
						"spanish": "¿Eres tú... la Reina del Invierno?",
						"vietnamese": "Ngươi... là Nữ hoàng Mùa đông sao?",
						"thai": "เจ้าคือ... ราชินีเหมันต์รึ?",
						"hindi": "क्या तुम... शीतकालीन रानी हो?"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "내 이름 따위 중요치 않다. 감히 이곳에 발을 들인 죄를 물을 뿐.",
						"english": "My name doesn't matter. I merely question your audacity to set foot here.",
						"japanese": "私の名前など重要ではない。敢えてここに足を踏み入れた罪を問うのみ。",
						"chinese": "我的名字无关紧要。我只是要质问你竟敢踏入此地的罪过。",
						"french": "Mon nom n'a pas d'importance. Je ne fais que questionner votre audace d'avoir mis les pieds ici.",
						"spanish": "Mi nombre no importa. Solo cuestiono tu osadía al pisar este lugar.",
						"vietnamese": "Tên ta không quan trọng. Ta chỉ muốn hỏi tội ngươi dám đặt chân đến đây.",
						"thai": "ชื่อของข้าไม่สำคัญ ข้าเพียงแค่จะถามถึงความผิดที่เจ้าบังอาจเหยียบย่างเข้ามาที่นี่",
						"hindi": "मेरा नाम मायने नहीं रखता। मैं केवल यहाँ कदम रखने की तुम्हारी हिम्मत पर सवाल उठा रही हूँ।"
					}
				},
				{
					"speaker": "Astri",
					"content": {
						"korean": "나를… 기억하는 거야?",
						"english": "Do you... remember me?",
						"japanese": "私を…覚えているのか？",
						"chinese": "你…还记得我吗？",
						"french": "Vous... vous vous souvenez de moi ?",
						"spanish": "¿Tú... me recuerdas?",
						"vietnamese": "Ngươi... nhớ ta sao?",
						"thai": "ท่าน...จำข้าได้รึเปล่า?",
						"hindi": "क्या तुम... मुझे याद करती हो?"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "기억? 넌 아무것도 몰라. 아무것도.",
						"english": "Remember? You know nothing. Nothing at all.",
						"japanese": "記憶？お前は何も知らない。何も。",
						"chinese": "记忆？你什么都不知道。什么都。",
						"french": "Se souvenir ? Tu ne sais rien. Rien du tout.",
						"spanish": "¿Recordar? No sabes nada. Nada en absoluto.",
						"vietnamese": "Nhớ à? Ngươi chẳng biết gì cả. Chẳng biết gì.",
						"thai": "จำได้รึ? เจ้าไม่รู้อะไรเลย ไม่รู้อะไรทั้งนั้น",
						"hindi": "याद? तुम कुछ नहीं जानते। कुछ भी नहीं।"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 힘에 의해 탐험대가 얼어붙었다. 움직일 수 없었다.",
						"english": "The expedition team was frozen by an unknown power. Unable to move.",
						"japanese": "正体不明の力により探検隊は凍りついた。動くことはできなかった。",
						"chinese": "探险队被一股不明力量冻结。无法动弹。",
						"french": "L'équipe d'expédition fut figée par un pouvoir inconnu. Incapable de bouger.",
						"spanish": "El equipo de expedición fue congelado por un poder desconocido. Incapaz de moverse.",
						"vietnamese": "Đoàn thám hiểm bị đóng băng bởi một thế lực không rõ. Không thể di chuyển.",
						"thai": "ทีมสำรวจถูกแช่แข็งด้วยพลังงานปริศนา เคลื่อนไหวไม่ได้",
						"hindi": "अज्ञात शक्ति से अभियान दल जम गया। हिल नहीं सका।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "어리석은 자들… 너희로는 날 막을 수 없어.",
						"english": "Fools... you can't stop me.",
						"japanese": "愚か者ども…お前たちには私を止められない。",
						"chinese": "愚蠢的家伙们…你们无法阻止我。",
						"french": "Imbéciles… vous ne pouvez pas m'arrêter.",
						"spanish": "Necios... no podéis detenerme.",
						"vietnamese": "Lũ ngu ngốc... các ngươi không thể ngăn cản ta.",
						"thai": "พวกโง่...พวกแกหยุดฉันไม่ได้หรอก",
						"hindi": "मूर्खों... तुम मुझे रोक नहीं सकते।"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "젠장… 아직… 끝나지 않았어!",
						"english": "Damn it... it's not over yet!",
						"japanese": "ちくしょう…まだ…終わってない！",
						"chinese": "该死…还没…结束！",
						"french": "Mince… ce n'est… pas encore fini !",
						"spanish": "Maldita sea… ¡esto… no ha terminado aún!",
						"vietnamese": "Chết tiệt... vẫn chưa... kết thúc!",
						"thai": "ให้ตายสิ...มันยัง...ไม่จบ!",
						"hindi": "धिक्कार है... यह अभी... खत्म नहीं हुआ है!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"action": "enter",
					"speaker": "Astri",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "다시… 다시 올게….",
						"english": "I'll... I'll come back again...",
						"japanese": "また…また来る…",
						"chinese": "我…我会再回来…",
						"french": "Je… je reviendrai…",
						"spanish": "Volveré… volveré…",
						"vietnamese": "Tôi... tôi sẽ quay lại...",
						"thai": "ฉันจะ...ฉันจะกลับมาอีกครั้ง...",
						"hindi": "मैं… मैं फिर आऊँगा…"
					},
					"speaker": "Astri",
					"type": "speech",
					"emotion": "sad"
				}
			],
			"win_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 보스가 얼음 조각처럼 부서져 내렸다. 성이 진동했다.",
						"english": "The mysterious boss shattered like shards of ice. The castle trembled.",
						"japanese": "正体不明のボスは氷の破片のように砕け散った。城が振動した。",
						"chinese": "不明身份的 Boss 如冰屑般碎裂。城堡震动了。",
						"french": "Le boss mystérieux s'est brisé comme des éclats de glace. Le château a tremblé.",
						"spanish": "El jefe misterioso se hizo añicos como fragmentos de hielo. El castillo tembló.",
						"vietnamese": "Con trùm bí ẩn vỡ tan như những mảnh băng. Lâu đài rung chuyển.",
						"thai": "บอสลึกลับแตกสลายราวกับเศษน้ำแข็ง ปราสาทสั่นสะเทือน",
						"hindi": "रहस्यमयी बॉस बर्फ के टुकड़ों की तरह टूट गया। महल हिल उठा।"
					}
				},
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"action": "enter",
					"speaker": "Astri",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "끝난 건가….",
						"english": "Is it over...?",
						"japanese": "終わったのか…。",
						"chinese": "结束了吗…？",
						"french": "C'est fini...?",
						"spanish": "¿Ha terminado...?",
						"vietnamese": "Hết rồi sao...?",
						"thai": "จบแล้วรึ...?",
						"hindi": "क्या यह खत्म हो गया...?"
					},
					"speaker": "Astri"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "크큭… 이걸로 끝이라 생각했나?",
						"english": "Heh heh... Did you think this was the end?",
						"japanese": "ククク…これで終わりだと思ったか？",
						"chinese": "呵呵…你以为这样就结束了吗？",
						"french": "Heh heh... Tu croyais que c'était la fin ?",
						"spanish": "Je je... ¿Creíste que esto era el final?",
						"vietnamese": "Khà khà... Ngươi nghĩ vậy là kết thúc sao?",
						"thai": "หึหึ... คิดว่านี่คือจุดจบแล้วรึ?",
						"hindi": "हँ हँ... क्या तुम्हें लगा कि यह अंत था?"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "아직… 진짜는 시작도 안 했다.",
						"english": "This isn't even the real start...",
						"japanese": "まだ…本当の始まりじゃない。",
						"chinese": "这还…不是真正的开始。",
						"french": "Ce n'est… même pas le vrai début.",
						"spanish": "Esto… ni siquiera es el verdadero comienzo.",
						"vietnamese": "Đây... thậm chí còn chưa phải là sự khởi đầu thực sự.",
						"thai": "นี่ยัง...ไม่ใช่จุดเริ่มต้นที่แท้จริง",
						"hindi": "यह तो... असली शुरुआत भी नहीं है।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야?",
						"english": "What do you mean?",
						"japanese": "どういうことだ？",
						"chinese": "什么意思？",
						"french": "Qu'est-ce que tu racontes ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ý bạn là gì?",
						"thai": "คุณหมายความว่าไง?",
						"hindi": "तुम्हारा क्या मतलब है?"
					}
				},
				{
					"speaker": "Astri",
					"content": {
						"korean": "아니야… 내가 잘못 생각했어. 이건….",
						"english": "No... I was wrong. This is...",
						"japanese": "いや…私が間違っていた。これは…",
						"chinese": "不…我错了。这是…",
						"french": "Non… je me suis trompé. C'est…",
						"spanish": "No… me equivoqué. Esto es…",
						"vietnamese": "Không... tôi đã lầm. Đây là...",
						"thai": "ไม่...ฉันคิดผิดไปแล้ว นี่มัน...",
						"hindi": "नहीं... मैं गलत था। यह तो..."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "한기는 가셨지만, 더 깊은 의문이 그림자처럼 남았다.",
						"english": "The chill receded, but deeper questions remained like shadows.",
						"japanese": "寒気は去ったが、より深い疑問が影のように残った。",
						"chinese": "寒意消退，但更深的疑问如影随形。",
						"french": "Le froid s'est dissipé, mais des questions plus profondes sont restées comme des ombres.",
						"spanish": "El frío se disipó, pero dudas más profundas permanecieron como sombras.",
						"vietnamese": "Cái lạnh đã tan biến, nhưng những câu hỏi sâu sắc hơn vẫn còn lại như bóng tối.",
						"thai": "ความหนาวเหน็บหายไป แต่คำถามที่ลึกซึ้งกว่ายังคงอยู่ราวกับเงา",
						"hindi": "ठंडक तो चली गई, पर गहरे सवाल साये की तरह रह गए।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"북방 설산. 얼음 성이 솟아올랐다.",
			"수년 전, 잊고 싶었던 악몽의 그림자.",
			"익숙한 한기… 아스트리는 멈춰 섰다.",
			"그녀의 과거가, 그녀를 부르고 있었다."
		],
		"english": [
			"Northern snow mountain. An ice castle rose.",
			"Years ago, the shadow of a nightmare she wanted to forget.",
			"A familiar chill... Astri stopped.",
			"Her past was calling her."
		],
		"japanese": [
			"北方の雪山。氷の城がそびえ立った。",
			"数年前、忘れたい悪夢の影。",
			"慣れ親しんだ冷気…アストリは立ち止まった。",
			"彼女の過去が、彼女を呼んでいた。"
		],
		"chinese": [
			"北方雪山。冰之城堡拔地而起。",
			"数年前，一个她想遗忘的噩梦阴影。",
			"熟悉的寒意…阿斯特丽停下了脚步。",
			"她的过去，正在呼唤她。"
		],
		"french": [
			"Montagne enneigée du nord. Un château de glace s'éleva.",
			"Il y a des années, l'ombre d'un cauchemar qu'elle voulait oublier.",
			"Un frisson familier… Astri s'arrêta.",
			"Son passé l'appelait."
		],
		"spanish": [
			"Montaña nevada del norte. Un castillo de hielo se alzó.",
			"Hace años, la sombra de una pesadilla que quería olvidar.",
			"Un frío familiar… Astri se detuvo.",
			"Su pasado la llamaba."
		],
		"vietnamese": [
			"Núi tuyết phương Bắc. Một lâu đài băng đã vươn lên.",
			"Nhiều năm trước, bóng tối của cơn ác mộng cô muốn quên.",
			"Một sự lạnh lẽo quen thuộc... Astri dừng lại.",
			"Quá khứ của cô ấy đang gọi cô ấy."
		],
		"thai": [
			"ภูเขาหิมะทางเหนือ ปราสาทน้ำแข็งได้ผุดขึ้น",
			"หลายปีก่อน เงาของฝันร้ายที่เธออยากจะลืม",
			"ความเย็นเยียบที่คุ้นเคย... แอสทรีหยุดลง",
			"อดีตของเธอกำลังเรียกหาเธอ"
		],
		"hindi": [
			"उत्तरी बर्फीला पहाड़। एक बर्फीला महल उठ खड़ा हुआ।",
			"कई साल पहले, एक बुरे सपने की परछाई जिसे वह भूलना चाहती थी।",
			"एक जानी-पहचानी ठंडक... एस्टरी रुक गई।",
			"उसका अतीत उसे बुला रहा था।"
		]
	}
} as const;
