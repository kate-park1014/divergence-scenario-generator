export const scenario_snowy_cairn_86_02 = {
	"scenario_id": "snowy_cairn_86_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"ivar": {
			"id": "mon_d8a80adc-9315-47b5-8c30-97ce33672bce",
			"name": {
				"korean": "이바르",
				"english": "Ivar",
				"japanese": "イヴァー",
				"chinese": "伊瓦尔",
				"french": "Ivar",
				"spanish": "Ivar",
				"vietnamese": "Ivar",
				"thai": "ไอวาร์",
				"hindi": "इवर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8dd7872b-d4df-44fd-b1a1-083a9156e700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2622fb62-daf4-42d1-a83b-2b78869d3e00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"돌무덤. 깨어진 맹세가 얼어붙은 곳.",
			"여기선 어떤 변명도 통하지 않았다.",
			"차가운 심판만이 그들을 맞이할 뿐.",
			"이바르는, 그 심판 앞에서 묻고 싶었다.",
			"과연 이것이 옳은가."
		],
		"english": [
			"Stone tomb. Where broken vows lie frozen.",
			"Here, no excuse held sway.",
			"Only cold judgment awaited them.",
			"Before that judgment, Ivar wanted to ask.",
			"Was this truly just?"
		],
		"japanese": [
			"石の墓。破られた誓いが凍り付く場所。",
			"ここでは、いかなる弁明も通用しなかった。",
			"冷酷な審判だけが彼らを待ち受けていた。",
			"イヴァルは、その審判の前で問いかけたかった。",
			"果てして、これが正しいのか。"
		],
		"chinese": [
			"石冢。破碎的誓言冻结之地。",
			"在这里，任何辩解都毫无意义。",
			"唯有冰冷的审判等待着他们。",
			"在那审判面前，伊瓦尔想发问。",
			"这果真正确吗？"
		],
		"french": [
			"Tombeau de pierre. Là où les serments brisés sont figés.",
			"Ici, aucune excuse n'était recevable.",
			"Seul un froid jugement les attendait.",
			"Devant ce jugement, Ivar voulait demander.",
			"Est-ce vraiment juste ?"
		],
		"spanish": [
			"Tumba de piedra. Donde los juramentos rotos yacen congelados.",
			"Aquí, ninguna excusa valía.",
			"Solo un frío juicio los esperaba.",
			"Ante ese juicio, Ivar quería preguntar.",
			"¿Es esto realmente correcto?"
		],
		"vietnamese": [
			"Mộ đá. Nơi những lời thề bị phá vỡ hóa băng.",
			"Ở đây, không lời bào chữa nào có tác dụng.",
			"Chỉ có phán xét lạnh lẽo đón chờ họ.",
			"Trước phán xét đó, Ivar muốn hỏi.",
			"Liệu điều này có đúng không?"
		],
		"thai": [
			"หลุมศพหิน ที่ซึ่งคำสาบานที่แตกหักถูกแช่แข็ง",
			"ที่นี่ ไม่มีข้อแก้ตัวใดถูกยอมรับ",
			"มีเพียงการพิพากษาอันเยือกเย็นเท่านั้นที่รอพวกเขาอยู่",
			"ต่อหน้าการพิพากษานั้น อิวาร์อยากจะถาม",
			"สิ่งนี้ถูกต้องจริงหรือ?"
		],
		"hindi": [
			"पत्थरों का मकबरा। टूटे वादों की जमी हुई जगह।",
			"यहां, कोई बहाना काम नहीं आया।",
			"केवल कठोर न्याय उनका इंतजार कर रहा था।",
			"उस न्याय के सामने, इवार पूछना चाहता था।",
			"क्या यह वाकई सही है?"
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
						"korean": "돌무덤. 맹세를 어긴 자들이 얼어붙은 채 영원히 서 있었다.",
						"english": "Stone tomb. Those who broke their vows stood frozen, forevermore.",
						"japanese": "石の墓。誓いを破りし者たちが、凍り付いたまま永遠に立っていた。",
						"chinese": "石冢。违背誓言之人被冻结，永远伫立。",
						"french": "Tombeau de pierre. Ceux qui ont brisé leurs serments se tenaient figés, pour l'éternité.",
						"spanish": "Tumba de piedra. Los que rompieron sus juramentos permanecían congelados, para siempre.",
						"vietnamese": "Mộ đá. Những kẻ phá vỡ lời thề đứng bất động, đông cứng mãi mãi.",
						"thai": "หลุมศพหิน ผู้ที่ละเมิดคำสาบานยืนแข็งทื่ออยู่ชั่วนิรันดร์",
						"hindi": "पत्थरों का मकबरा। वचन तोड़ने वाले जम कर सदा के लिए खड़े थे।"
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"speaker": "ivar",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "이들이 모두 맹세를 어긴 자들인가...",
						"english": "Are all of them oathbreakers...?",
						"japanese": "彼らは皆、誓いを破りし者たちなのか…",
						"chinese": "他们都是违背誓言之人吗……",
						"french": "Sont-ils tous des parjures...?",
						"spanish": "¿Son todos ellos rompejuramentos...?",
						"vietnamese": "Tất cả bọn họ đều là những kẻ phá vỡ lời thề sao...?",
						"thai": "พวกเขาทั้งหมดคือผู้ที่ละเมิดคำสาบานหรือ...?",
						"hindi": "क्या ये सभी वचन तोड़ने वाले हैं...?"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "얼어붙은 표정들이… 마치 변명을 하고 싶어 하는 것 같아.",
						"english": "Their frozen expressions... seem as if they want to make excuses.",
						"japanese": "凍り付いた表情が…まるで弁明をしたがっているかのようだ。",
						"chinese": "他们冰冷的表情……仿佛想要辩解。",
						"french": "Leurs expressions figées… semblent vouloir s'excuser.",
						"spanish": "Sus expresiones congeladas... parecen querer disculparse.",
						"vietnamese": "Những biểu cảm đông cứng của họ… dường như muốn biện minh.",
						"thai": "สีหน้าอันเยือกเย็นของพวกเขา...ดูเหมือนอยากจะแก้ตัว",
						"hindi": "उनके जमे हुए भाव... मानो बहाना बनाना चाहते हों।"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "ivar"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "이 형상은… 피를 나눈 가족을 지키려다 맹세를 어긴 것 같군.",
						"english": "This figure... seems to have broken a vow trying to protect blood kin.",
						"japanese": "この姿は…血を分けた家族を守ろうとして誓いを破ったようだな。",
						"chinese": "这个身影……似乎是为了保护血亲而违背了誓言。",
						"french": "Cette figure… semble avoir brisé un serment en cherchant à protéger sa famille de sang.",
						"spanish": "Esta figura... parece haber roto un juramento al intentar proteger a su familia de sangre.",
						"vietnamese": "Hình dáng này… dường như đã phá vỡ lời thề để bảo vệ người thân ruột thịt.",
						"thai": "ร่างนี้...ดูเหมือนจะละเมิดคำสาบานเพื่อปกป้องครอบครัวร่วมสายเลือด",
						"hindi": "यह आकृति... अपने खून के रिश्तेदार को बचाने की कोशिश में शपथ तोड़ चुकी लगती है।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "무슨 사연인지는 모르겠지만… 안타깝네.",
						"english": "I don't know the story... but it's regrettable.",
						"japanese": "どんな事情があったかは知らないが…残念だな。",
						"chinese": "不知是何缘由……但令人惋惜。",
						"french": "Je ne connais pas l'histoire… mais c'est regrettable.",
						"spanish": "No sé cuál es la historia... pero es lamentable.",
						"vietnamese": "Không biết câu chuyện là gì… nhưng thật đáng tiếc.",
						"thai": "ไม่รู้ว่ามีเรื่องราวอะไร...แต่น่าเสียดาย",
						"hindi": "कहानी क्या है, पता नहीं... लेकिन दुखद है।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…사정이 있었다고 쳐도, 여기선 아무것도 봐주지 않는 건가.",
						"english": "...Even if there were circumstances, nothing is forgiven here, then?",
						"japanese": "「…事情があったにしても、ここでは何も許されないのか。」",
						"chinese": "“……即使事出有因，这里也什么都不容情吗？”",
						"french": "«…Même s'il y avait des circonstances, rien n'est pardonné ici, alors?»",
						"spanish": "«…Aunque hubiera circunstancias, ¿aquí no se perdona nada?»",
						"vietnamese": "...Cho dù có lý do đi nữa, ở đây cũng không có bất kỳ sự khoan dung nào sao?",
						"thai": "...แม้จะมีเหตุผล แต่ที่นี่ก็ไม่ให้อภัยอะไรเลยหรือ?",
						"hindi": "...भले ही कोई परिस्थितियाँ रही हों, क्या यहाँ कुछ भी माफ़ नहीं किया जाता?"
					},
					"type": "speech",
					"speaker": "ivar"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "ivar",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"emotion": "sad",
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "이 사람은… 어린 자식을 살리려다 맹세를 어긴 것 같아.",
						"english": "This person... seems to have broken a vow to save their child.",
						"japanese": "「この人は…幼い子を助けるために誓いを破ったようだ。」",
						"chinese": "“这个人……似乎是为了救年幼的孩子而违背了誓言。”",
						"french": "«Cette personne… semble avoir rompu un serment pour sauver son enfant.»",
						"spanish": "«Esta persona… parece haber roto un juramento para salvar a su hijo.»",
						"vietnamese": "Người này... dường như đã phá vỡ lời thề để cứu con thơ của mình.",
						"thai": "คนผู้นี้... ดูเหมือนจะละเมิดคำสาบานเพื่อช่วยลูกเล็กของตน",
						"hindi": "यह व्यक्ति... अपने बच्चे को बचाने के लिए एक प्रतिज्ञा तोड़ता हुआ प्रतीत होता है।"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "지키려던 것이 너무 소중해서… 어쩔 수 없었던 것 같은데.",
						"english": "What they tried to protect was too precious... it seems they had no choice.",
						"japanese": "「守ろうとしたものが大切すぎて…仕方なかったのだろう。」",
						"chinese": "“他们试图守护的东西太过珍贵……似乎是别无选择。”",
						"french": "«Ce qu'ils essayaient de protéger était trop précieux… il semble qu'ils n'aient pas eu le choix.»",
						"spanish": "«Lo que intentaron proteger era demasiado preciado… parece que no tuvieron otra opción.»",
						"vietnamese": "Thứ họ cố gắng bảo vệ quá quý giá... dường như họ không còn lựa chọn nào khác.",
						"thai": "สิ่งที่พวกเขาพยายามปกป้องนั้นล้ำค่าเกินไป... ดูเหมือนพวกเขาไม่มีทางเลือก",
						"hindi": "जो चीज़ वे बचाना चाहते थे वह बहुत अनमोल थी... लगता है उनके पास कोई और विकल्प नहीं था।"
					},
					"speaker": "ivar",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "모두 똑같이 얼어붙어 있어. 어떤 변명도 통하지 않았던 걸까.",
						"english": "They're all frozen identically. Did no excuse work?",
						"japanese": "「皆同じように凍りついている。どんな弁明も通じなかったのか。」",
						"chinese": "“他们都同样被冻结了。难道没有任何借口奏效吗？”",
						"french": "«Ils sont tous figés de la même manière. Aucune excuse n'a fonctionné?»",
						"spanish": "«Todos están congelados idénticamente. ¿Ninguna excusa funcionó?»",
						"vietnamese": "Tất cả đều đóng băng giống hệt nhau. Lẽ nào không có lời biện minh nào được chấp nhận sao?",
						"thai": "พวกเขาทุกคนถูกแช่แข็งเหมือนกันหมด ไม่มีข้อแก้ตัวใดๆ ได้ผลเลยหรือ?",
						"hindi": "वे सभी समान रूप से जमे हुए हैं। क्या कोई बहाना काम नहीं आया?"
					}
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "강함의 끝은 이런 무자비함인가? 심판에 자비는 없나?",
						"english": "Is the peak of strength such ruthlessness? Is there no mercy in judgment?",
						"japanese": "「強さの果ては、このような無慈悲さなのか？裁きに慈悲はないのか？」",
						"chinese": "“力量的尽头是这种无情吗？审判中没有仁慈吗？”",
						"french": "«La force ultime est-elle une telle impitoyabilité? N'y a-t-il aucune pitié dans le jugement?»",
						"spanish": "«El culmen de la fuerza es esta crueldad? ¿No hay piedad en el juicio?»",
						"vietnamese": "Tận cùng của sức mạnh là sự tàn nhẫn như thế này ư? Sự phán xét không có lòng trắc ẩn sao?",
						"thai": "จุดสูงสุดของความแข็งแกร่งคือความโหดเหี้ยมเช่นนี้หรือ? การพิพากษาไร้ความเมตตาหรือ?",
						"hindi": "क्या शक्ति का अंत ऐसी क्रूरता है? क्या न्याय में कोई दया नहीं है?"
					},
					"emotion": "angry"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "ivar",
					"spot": [
						2,
						3
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "아무리 살펴봐도, 용서받고 풀려난 자의 흔적은 없군.",
						"english": "No matter how much I search, there are no traces of anyone forgiven and released.",
						"japanese": "「いくら探しても、許され、解放された者の痕跡はないな。」",
						"chinese": "“无论怎么寻找，都没有被宽恕和释放者的痕迹。”",
						"french": "«Peu importe mes recherches, il n'y a aucune trace de quiconque ayant été pardonné et libéré.»",
						"spanish": "«Por mucho que busque, no hay rastros de nadie perdonado y liberado.»",
						"vietnamese": "Dù có tìm kiếm thế nào đi nữa, cũng không có dấu vết của người được tha thứ và giải thoát.",
						"thai": "ไม่ว่าจะมองหาเท่าไหร่ ก็ไม่มีร่องรอยของผู้ที่ได้รับการอภัยและปล่อยตัว",
						"hindi": "मैं चाहे कितनी भी तलाश कर लूँ, क्षमा किए गए और मुक्त किए गए किसी भी व्यक्ति के कोई निशान नहीं हैं।"
					},
					"speaker": "ivar",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이곳은 오직 파괴된 맹세만을 기억하는 것 같아.",
						"english": "This place seems to remember only broken vows.",
						"japanese": "「ここは、破られた誓いだけを記憶しているようだ。」",
						"chinese": "“这个地方似乎只记得被破坏的誓言。”",
						"french": "«Cet endroit semble ne se souvenir que des serments brisés.»",
						"spanish": "«Este lugar parece recordar solo los juramentos rotos.»",
						"vietnamese": "Nơi này dường như chỉ ghi nhớ những lời thề đã bị phá vỡ.",
						"thai": "ที่นี่ดูเหมือนจะจดจำแต่คำสาบานที่ถูกทำลาย",
						"hindi": "यह स्थान केवल टूटी हुई प्रतिज्ञाओं को याद करता हुआ प्रतीत होता है।"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…강함으로 얻는 영광이라도, 이런 심판은… 가혹하다.",
						"english": "...Even if it's glory gained through strength, such judgment is... harsh.",
						"japanese": "「…強さで得た栄光だとしても、このような裁きは…過酷だ。」",
						"chinese": "“……即使是通过力量获得的荣耀，这样的审判也……过于严苛了。”",
						"french": "«…Même si c'est la gloire obtenue par la force, un tel jugement est… cruel.»",
						"spanish": "«…Aunque sea gloria obtenida por la fuerza, tal juicio es… cruel.»",
						"vietnamese": "...Cho dù đó là vinh quang đạt được bằng sức mạnh, thì sự phán xét như thế này... thật khắc nghiệt.",
						"thai": "...แม้จะเป็นเกียรติที่ได้มาด้วยความแข็งแกร่ง แต่การพิพากษาเช่นนี้... ก็โหดร้ายเกินไป",
						"hindi": "...भले ही यह शक्ति से प्राप्त महिमा हो, ऐसा न्याय... कठोर है।"
					},
					"speaker": "ivar",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "심판의 심장부. 거대한 그림자가 모든 것을 꿰뚫어 보고 있었다.",
						"english": "The heart of judgment. A colossal shadow pierced through everything.",
						"japanese": "「審判の心臓部。巨大な影がすべてを見通していた。」",
						"chinese": "“审判的核心。一个巨大的影子洞察着一切。”",
						"french": "«Le cœur du jugement. Une ombre colossale perçait tout.»",
						"spanish": "«El corazón del juicio. Una sombra colosal lo penetraba todo.»",
						"vietnamese": "Trái tim của sự phán xét. Một bóng tối khổng lồ đang nhìn thấu mọi thứ.",
						"thai": "ใจกลางแห่งการพิพากษา เงาขนาดมหึมามองทะลุทุกสิ่ง",
						"hindi": "न्याय का केंद्र। एक विशाल छाया सब कुछ भेद रही थी।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "맹세는 절대적이다. 어떠한 변명도 죄를 덮을 수 없다.",
						"english": "Vows are absolute. No excuse can cover a sin.",
						"japanese": "「誓いは絶対だ。いかなる弁明も罪を覆い隠すことはできない。」",
						"chinese": "“誓言是绝对的。任何借口都无法掩盖罪恶。”",
						"french": "«Les serments sont absolus. Aucune excuse ne peut couvrir un péché.»",
						"spanish": "«Los juramentos son absolutos. Ninguna excusa puede encubrir un pecado.»",
						"vietnamese": "Lời thề là tuyệt đối. Không có lời biện minh nào có thể che đậy tội lỗi.",
						"thai": "คำสาบานเป็นสิ่งเด็ดขาด ไม่มีข้อแก้ตัวใดสามารถปกปิดบาปได้",
						"hindi": "प्रतिज्ञाएँ निरपेक्ष हैं। कोई भी बहाना पाप को छिपा नहीं सकता।"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…그것이 강함의 전부라면, 나는 부정하겠다!",
						"english": "...If that is all there is to strength, I deny it!",
						"japanese": "「…それが強さの全てなら、私は否定する！」",
						"chinese": "“……如果那就是实力的全部，我拒绝！”",
						"french": "...Si c'est tout ce que la force signifie, je le nie !",
						"spanish": "...Si eso es todo lo que la fuerza es, ¡lo niego!",
						"vietnamese": "...Nếu đó là tất cả của sức mạnh, tôi phủ nhận điều đó!",
						"thai": "...หากนั่นคือทั้งหมดของความแข็งแกร่ง ข้าขอปฏิเสธ!",
						"hindi": "...अगर वही ताकत सब कुछ है, तो मैं इसे अस्वीकार करता हूँ!"
					},
					"type": "speech",
					"speaker": "ivar"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "우리가 길을 바꾸겠어!",
						"english": "We will change our path!",
						"japanese": "「我々が道を変える！」",
						"chinese": "“我们将改变道路！”",
						"french": "Nous changerons de voie !",
						"spanish": "¡Cambiaremos nuestro camino!",
						"vietnamese": "Chúng ta sẽ thay đổi con đường!",
						"thai": "เราจะเปลี่ยนเส้นทาง!",
						"hindi": "हम राह बदलेंगे!"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "맹세를 어긴 자들처럼, 너희도 얼어붙을 것이다.",
						"english": "Like those who broke their vows, you too shall be frozen.",
						"japanese": "「誓いを破りし者たちのように、お前たちも凍り付くであろう。」",
						"chinese": "“如同那些违背誓言之人，你们也将被冻结。”",
						"french": "Comme ceux qui ont rompu leurs vœux, vous aussi serez gelés.",
						"spanish": "Como aquellos que rompieron sus votos, vosotros también seréis congelados.",
						"vietnamese": "Giống như những kẻ đã phá vỡ lời thề, các ngươi cũng sẽ bị đóng băng.",
						"thai": "เฉกเช่นผู้ที่ละเมิดคำสาบาน, พวกเจ้าก็จะถูกแช่แข็งเช่นกัน.",
						"hindi": "शपथ तोड़ने वालों की तरह, तुम भी जम जाओगे।"
					}
				},
				{
					"content": {
						"korean": "…아직 끝나지 않았다. 이 불합리한 심판을… 바꾸겠다!",
						"english": "...It's not over yet. I will change this unreasonable judgment!",
						"japanese": "「…まだ終わっていない。この不合理な審判を… 変えてみせる！」",
						"chinese": "“……还没结束。我将改变这个不合理的审判！”",
						"french": "...Ce n'est pas encore fini. Je changerai ce jugement déraisonnable !",
						"spanish": "...Todavía no ha terminado. ¡Cambiaré este juicio irrazonable!",
						"vietnamese": "...Chưa kết thúc. Ta sẽ thay đổi phán xét bất hợp lý này!",
						"thai": "...ยังไม่จบ. ข้าจะเปลี่ยนคำตัดสินอันไม่สมเหตุสมผลนี้!",
						"hindi": "...अभी खत्म नहीं हुआ है। मैं इस अनुचित न्याय को... बदल दूँगा!"
					},
					"speaker": "ivar",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…오만하다. 그러나 너희의 의지는… 흥미롭군.",
						"english": "...Arrogant. Yet, your will... is intriguing.",
						"japanese": "「…傲慢だ。だが、お前たちの意思は… 興味深い。」",
						"chinese": "“……傲慢。然而，你们的意志……很有趣。”",
						"french": "...Arrogant. Pourtant, votre volonté... est intrigante.",
						"spanish": "...Arrogantes. Sin embargo, vuestra voluntad... es intrigante.",
						"vietnamese": "...Ngạo mạn. Thế nhưng, ý chí của các ngươi... thật thú vị.",
						"thai": "...โอ้อวด. กระนั้น, เจตจำนงของพวกเจ้า... น่าสนใจ.",
						"hindi": "...घमंडी। फिर भी, तुम्हारी इच्छाशक्ति... दिलचस्प है।"
					}
				},
				{
					"content": {
						"korean": "이것이 나의 강함이다. 자비 없는 힘은… 진정한 강함이 아니야.",
						"english": "This is my strength. Power without mercy... is not true strength.",
						"japanese": "「これが私の強さだ。慈悲なき力は… 真の強さではない。」",
						"chinese": "“这就是我的力量。没有慈悲的力量……不是真正的力量。”",
						"french": "C'est ma force. Un pouvoir sans pitié... n'est pas la vraie force.",
						"spanish": "Esta es mi fuerza. Un poder sin piedad... no es verdadera fuerza.",
						"vietnamese": "Đây là sức mạnh của ta. Sức mạnh không có lòng trắc ẩn... không phải là sức mạnh thật sự.",
						"thai": "นี่คือความแข็งแกร่งของข้า. อำนาจที่ปราศจากความเมตตา... ไม่ใช่ความแข็งแกร่งที่แท้จริง.",
						"hindi": "यही मेरी ताकत है। बिना दया की शक्ति... सच्ची ताकत नहीं है।"
					},
					"speaker": "ivar",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이제 다음 길을 찾자.",
						"english": "Now, let us find the next path.",
						"japanese": "「さあ、次の道を探そう。」",
						"chinese": "“现在，让我们寻找下一条路。”",
						"french": "Maintenant, cherchons le prochain chemin.",
						"spanish": "Ahora, busquemos el siguiente camino.",
						"vietnamese": "Giờ, hãy tìm con đường tiếp theo.",
						"thai": "บัดนี้, จงหาเส้นทางต่อไป.",
						"hindi": "अब, अगला रास्ता खोजें।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "심판의 자리는 다시 침묵했다. 그러나 질문은 남았다. 냉혹한 저울의 진정한 의미는 무엇인가.",
						"english": "The seat of judgment fell silent again. But the question remained. What is the true meaning of the ruthless scales?",
						"japanese": "「審判の座は再び沈黙した。しかし、疑問は残った。冷酷な天秤の真の意味とは何か。」",
						"chinese": "“审判之座再次沉默了。然而，疑问依然存在。冷酷天平的真正意义是什么？”",
						"french": "Le siège du jugement retomba dans le silence. Mais la question demeurait. Quelle est la véritable signification des balances impitoyables ?",
						"spanish": "El asiento del juicio volvió a callar. Pero la pregunta permaneció. ¿Cuál es el verdadero significado de las balanzas despiadadas?",
						"vietnamese": "Ghế phán xét lại im lặng. Nhưng câu hỏi vẫn còn đó. Ý nghĩa thực sự của cán cân tàn nhẫn là gì?",
						"thai": "บัลลังก์แห่งการพิพากษากลับสู่ความเงียบอีกครั้ง. แต่คำถามยังคงอยู่. ความหมายที่แท้จริงของตาชั่งอันไร้ปรานีคืออะไร?",
						"hindi": "न्याय का आसन फिर से शांत हो गया। लेकिन सवाल बना रहा। निर्मम तराजू का असली मतलब क्या है?"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			]
		}
	]
} as const;
