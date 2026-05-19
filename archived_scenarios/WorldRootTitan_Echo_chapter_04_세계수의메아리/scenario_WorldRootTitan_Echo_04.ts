export const scenario_WorldRootTitan_Echo_04 = {
	"scenario_id": "WorldRootTitan_Echo_04",
	"order": 4,
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
			"숲의 가장 깊은 곳. 봉인된 시간의 흔적.",
			"고대의 유적이 마침내 잠에서 깨어난다.",
			"그리고 그 안에서, 잊혀진 목소리가 울려 퍼졌다.",
			"카인의 그림자는, 생각보다 훨씬 거대했다."
		],
		"english": [
			"Deepest part of the forest. Traces of sealed time.",
			"The ancient ruins finally awaken.",
			"And from within, a forgotten voice echoed.",
			"Cain's shadow was far grander than imagined."
		],
		"japanese": [
			"森の最も深い場所。封印された時間の痕跡。",
			"古代の遺跡がついに目覚める。",
			"そしてその中で、忘れ去られた声が響き渡った。",
			"カインの影は、思ったよりもはるかに巨大だった。"
		],
		"chinese": [
			"森林最深处。被封印的时间痕迹。",
			"古老的遗迹终于苏醒。",
			"而其中，被遗忘的声音回荡着。",
			"该隐的影子，比想象的要巨大得多。"
		],
		"french": [
			"La partie la plus profonde de la forêt. Traces d'un temps scellé.",
			"Les ruines antiques s'éveillent enfin.",
			"Et de l'intérieur, une voix oubliée résonna.",
			"L'ombre de Caïn était bien plus grande qu'on ne l'imaginait."
		],
		"spanish": [
			"La parte más profunda del bosque. Rastros de un tiempo sellado.",
			"Las ruinas antiguas finalmente despiertan.",
			"Y desde dentro, una voz olvidada resonó.",
			"La sombra de Caín era mucho más grande de lo imaginado."
		],
		"vietnamese": [
			"Nơi sâu thẳm nhất khu rừng. Dấu vết thời gian bị phong ấn.",
			"Di tích cổ đại cuối cùng cũng thức tỉnh.",
			"Và từ bên trong, một giọng nói bị lãng quên vang vọng.",
			"Bóng tối của Cain còn lớn hơn nhiều so với tưởng tượng."
		],
		"thai": [
			"ส่วนที่ลึกที่สุดของป่า ร่องรอยแห่งกาลเวลาที่ถูกผนึก",
			"ซากปรักหักพังโบราณตื่นขึ้นในที่สุด",
			"และจากข้างใน เสียงที่ถูกลืมก็ก้องกังวาน",
			"เงาของเคนยิ่งใหญ่กว่าที่คิดไว้มาก"
		],
		"hindi": [
			"जंगल का सबसे गहरा भाग। बंद समय के निशान।",
			"प्राचीन खंडहर अंततः जागृत होते हैं।",
			"और उसके अंदर से, एक भूली हुई आवाज़ गूँज उठी।",
			"केन की छाया, सोचा से कहीं अधिक विशाल थी।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "오래된 유적의 문이 열렸다. 시간조차 멈춘 듯 고요했다.",
						"english": "The door to the old ruins opened. It was silent, as if time itself had stopped.",
						"japanese": "古い遺跡の扉が開いた。時間さえ止まったかのように静かだった。",
						"chinese": "古老遗迹的门打开了。寂静无声，仿佛时间都停滞了。",
						"french": "La porte des vieilles ruines s'ouvrit. C'était silencieux, comme si le temps s'était arrêté.",
						"spanish": "La puerta de las viejas ruinas se abrió. Estaba en silencio, como si el tiempo mismo se hubiera detenido.",
						"vietnamese": "Cánh cửa di tích cổ mở ra. Im lặng như thể thời gian đã ngừng lại.",
						"thai": "ประตูของซากปรักหักพังเก่าแก่เปิดออก มันเงียบราวกับเวลาหยุดนิ่ง",
						"hindi": "पुराने खंडहरों का दरवाज़ा खुला। यह शांत था, मानो समय भी रुक गया हो।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "여기가… 그 유적?",
						"english": "This is... the ruins?",
						"japanese": "ここが…その遺跡？",
						"chinese": "这里就是……那个遗迹？",
						"french": "C'est ici... les ruines ?",
						"spanish": "¿Aquí es... las ruinas?",
						"vietnamese": "Đây là... di tích đó?",
						"thai": "นี่คือ... ซากปรักหักพังนั้นหรือ?",
						"hindi": "यह है... वह खंडहर?"
					},
					"emotion": "base"
				},
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						5,
						3
					],
					"duration_ms": 500,
					"speaker": "cedar"
				},
				{
					"speaker": "cedar",
					"type": "speech",
					"content": {
						"korean": "드디어… 네가 왔군.",
						"english": "Finally... you've come.",
						"japanese": "ついに…お前が来たか。",
						"chinese": "终于……你来了。",
						"french": "Enfin... tu es venu.",
						"spanish": "Finalmente... has venido.",
						"vietnamese": "Cuối cùng... ngươi cũng đến.",
						"thai": "ในที่สุด... เจ้าก็มาแล้ว",
						"hindi": "आखिरकार... तुम आ गए।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "당신은 누구지?",
						"english": "Who are you?",
						"japanese": "あなたは誰だ？",
						"chinese": "你是谁？",
						"french": "Qui es-tu ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ngươi là ai?",
						"thai": "เจ้าคือใคร?",
						"hindi": "तुम कौन हो?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "나는 시더. 이 숲의 침묵을 지키는 자.",
						"english": "I am Cedar. The one who guards the silence of this forest.",
						"japanese": "私はシダー。この森の沈黙を守る者。",
						"chinese": "我是西达。守护这片森林寂静之人。",
						"french": "Je suis Cedar. Celui qui garde le silence de cette forêt.",
						"spanish": "Soy Cedar. El que guarda el silencio de este bosque.",
						"vietnamese": "Ta là Cedar. Kẻ bảo vệ sự tĩnh lặng của khu rừng này.",
						"thai": "ฉันคือซีดาร์ ผู้พิทักษ์ความเงียบสงบของป่าแห่งนี้",
						"hindi": "मैं सेडर हूँ। इस जंगल की खामोशी का रखवाला।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "cedar"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						5,
						3
					],
					"speaker": "cedar",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "세계수는 그저 생명이 아니다. 숲의 기억이자 의지.",
						"english": "The World Tree is not just life. It is the forest's memory and will.",
						"japanese": "世界樹は単なる生命ではない。森の記憶であり意志でもある。",
						"chinese": "世界树不仅仅是生命。它是森林的记忆和意志。",
						"french": "L'Arbre-Monde n'est pas seulement la vie. C'est la mémoire et la volonté de la forêt.",
						"spanish": "El Árbol del Mundo no es solo vida. Es la memoria y la voluntad del bosque.",
						"vietnamese": "Cây Thế giới không chỉ là sự sống. Nó là ký ức và ý chí của khu rừng.",
						"thai": "ต้นไม้โลกไม่ใช่แค่ชีวิต แต่มันคือความทรงจำและเจตจำนงของป่า",
						"hindi": "विश्व वृक्ष केवल जीवन नहीं है। यह जंगल की स्मृति और इच्छा है।"
					},
					"speaker": "cedar"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "기억… 의지?",
						"english": "Memory... will?",
						"japanese": "記憶… 意志？",
						"chinese": "记忆… 意志？",
						"french": "Mémoire... volonté ?",
						"spanish": "¿Memoria... voluntad?",
						"vietnamese": "Ký ức… ý chí?",
						"thai": "ความทรงจำ... เจตจำนง?",
						"hindi": "स्मृति... इच्छा?"
					}
				},
				{
					"speaker": "cedar",
					"type": "speech",
					"content": {
						"korean": "폭주는 고통의 비명. 카인이 그 의지를 꺾으려 했다.",
						"english": "The rampage is a scream of agony. Cain tried to break that will.",
						"japanese": "暴走は苦痛の悲鳴。カインはその意志を折ろうとした。",
						"chinese": "暴走是痛苦的尖叫。凯因试图摧毁那份意志。",
						"french": "La fureur est un cri d'agonie. Caïn a tenté de briser cette volonté.",
						"spanish": "El descontrol es un grito de agonía. Caín intentó doblegar esa voluntad.",
						"vietnamese": "Cơn thịnh nộ là tiếng thét của đau đớn. Cain đã cố gắng bẻ gãy ý chí đó.",
						"thai": "การอาละวาดคือเสียงกรีดร้องแห่งความเจ็บปวด เคนพยายามจะทำลายเจตจำนงนั้น",
						"hindi": "उन्माद पीड़ा का चीख है। केन ने उस इच्छा को तोड़ने की कोशिश की।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "카인이 세계수를 조종했다는 거야?",
						"english": "Cain controlled the World Tree?",
						"japanese": "カインが世界樹を操ったってこと？",
						"chinese": "凯因操纵了世界树？",
						"french": "Caïn a contrôlé l'Arbre-Monde ?",
						"spanish": "¿Caín controló el Árbol del Mundo?",
						"vietnamese": "Cain đã điều khiển Cây Thế Giới?",
						"thai": "เคนควบคุมต้นไม้โลกอย่างนั้นเหรอ?",
						"hindi": "केन ने विश्व वृक्ष को नियंत्रित किया था?"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_1"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "cedar",
					"duration_ms": 500,
					"spot": [
						5,
						3
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "카인은 숲의 힘을 이용해 스스로 신이 되려 했다.",
						"english": "Cain sought to become a god himself, using the forest's power.",
						"japanese": "カインは森の力を使って、自ら神になろうとした。",
						"chinese": "凯因利用森林的力量，试图让自己成为神。",
						"french": "Caïn a cherché à devenir un dieu lui-même, en utilisant le pouvoir de la forêt.",
						"spanish": "Caín intentó convertirse en un dios, usando el poder del bosque.",
						"vietnamese": "Cain đã lợi dụng sức mạnh của rừng để tự mình trở thành thần.",
						"thai": "เคนพยายามที่จะเป็นเทพเจ้าด้วยตัวเอง โดยใช้พลังของป่า",
						"hindi": "केन ने जंगल की शक्ति का उपयोग करके स्वयं देवता बनने की कोशिश की।"
					},
					"speaker": "cedar"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "신…이라고?",
						"english": "A god...?",
						"japanese": "神…だと？",
						"chinese": "神…？",
						"french": "Un dieu... ?",
						"spanish": "¿Un dios...?",
						"vietnamese": "Thần… ư?",
						"thai": "เทพเจ้า... อย่างนั้นเหรอ?",
						"hindi": "एक देवता...?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "포자는 단순한 도구가 아니었다. 영혼을 잠식하는 저주.",
						"english": "The spores were no mere tools. A curse that devours souls.",
						"japanese": "胞子は単なる道具ではなかった。魂を蝕む呪い。",
						"chinese": "孢子并非单纯的工具。那是吞噬灵魂的诅咒。",
						"french": "Les spores n'étaient pas de simples outils. Une malédiction qui dévore les âmes.",
						"spanish": "Las esporas no eran meras herramientas. Una maldición que devora almas.",
						"vietnamese": "Bào tử không phải là công cụ đơn thuần. Đó là lời nguyền ăn mòn linh hồn.",
						"thai": "สปอร์ไม่ใช่แค่เครื่องมือธรรมดา คำสาปที่กัดกินวิญญาณ",
						"hindi": "बीजाणु केवल उपकरण नहीं थे। यह आत्माओं को निगलने वाला एक अभिशाप था।"
					},
					"speaker": "cedar"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "우리 마을도… 모두 카인의 계획이었군.",
						"english": "Our village too... it was all part of Cain's plan.",
						"japanese": "我々の村も…全てカインの計画だったのか。",
						"chinese": "我们的村庄也… 都是凯因的计划。",
						"french": "Notre village aussi... tout faisait partie du plan de Caïn.",
						"spanish": "Nuestro pueblo también... todo era parte del plan de Caín.",
						"vietnamese": "Làng của chúng ta cũng… tất cả đều là kế hoạch của Cain.",
						"thai": "หมู่บ้านของเราก็... ทั้งหมดเป็นแผนของเคน",
						"hindi": "हमारा गाँव भी... यह सब केन की योजना का हिस्सा था।"
					},
					"speaker": "character_2"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						5,
						3
					],
					"speaker": "cedar",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "세계수 안에 갇힌 것은 고대 수호자의 의지.",
						"english": "Trapped within the World Tree is the will of an ancient guardian.",
						"japanese": "世界樹の中に囚われているのは、古代の守護者の意志。",
						"chinese": "被困在世界树中的，是古代守护者的意志。",
						"french": "Ce qui est piégé dans l'Arbre-Monde est la volonté d'un ancien gardien.",
						"spanish": "Atrapada dentro del Árbol del Mundo está la voluntad de un antiguo guardián.",
						"vietnamese": "Bị giam cầm trong Cây Thế Giới là ý chí của một hộ vệ cổ đại.",
						"thai": "สิ่งที่ถูกขังอยู่ในต้นไม้โลกคือเจตจำนงของผู้พิทักษ์โบราณ",
						"hindi": "विश्व वृक्ष के भीतर फँसी हुई एक प्राचीन संरक्षक की इच्छा है।"
					},
					"speaker": "cedar"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "수호자의… 의지?",
						"english": "A guardian's... will?",
						"japanese": "守護者の…意志？",
						"chinese": "守护者的…意志？",
						"french": "La volonté d'un gardien... ?",
						"spanish": "¿La voluntad de un guardián...?",
						"vietnamese": "Ý chí của hộ vệ…?",
						"thai": "เจตจำนงของผู้พิทักษ์... อย่างนั้นเหรอ?",
						"hindi": "एक संरक्षक की... इच्छा?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "cedar",
					"content": {
						"korean": "그 의지가 폭주를 막고 있다. 하지만 한계에 다다르고 있어.",
						"english": "That will is holding back the rampage. But it's reaching its limit.",
						"japanese": "その意志が暴走を食い止めている。だが、限界に達しつつある。",
						"chinese": "那份意志正在阻止暴走。但它正达到极限。",
						"french": "Cette volonté retient la fureur. But elle atteint ses limites.",
						"spanish": "Esa voluntad está conteniendo el descontrol. Pero está llegando a su límite.",
						"vietnamese": "Ý chí đó đang ngăn chặn cơn thịnh nộ. Nhưng nó đang đạt đến giới hạn.",
						"thai": "เจตจำนงนั้นกำลังยับยั้งการอาละวาด แต่มันกำลังจะถึงขีดจำกัดแล้ว",
						"hindi": "वह इच्छा उन्माद को रोके हुए है। लेकिन वह अपनी सीमा तक पहुँच रही है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_3",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "우리가 뭘 해야 하는 거지?",
						"english": "What must we do?",
						"japanese": "我々は何をすべきか？",
						"chinese": "我们该怎么做？",
						"french": "Que devons-nous faire ?",
						"spanish": "¿Qué debemos hacer?",
						"vietnamese": "Chúng ta phải làm gì?",
						"thai": "เราควรทำอย่างไรดี?",
						"hindi": "हमें क्या करना चाहिए?"
					}
				},
				{
					"speaker": "cedar",
					"type": "speech",
					"content": {
						"korean": "폭주의 근원을 찾아라. 그곳에 진정한 열쇠가 있다.",
						"english": "Find the source of the frenzy. There lies the true key.",
						"japanese": "暴走の根源を見つけろ。そこに真の鍵がある。",
						"chinese": "找到暴走的根源。真正的钥匙就在那里。",
						"french": "Trouvez la source de la fureur. La vraie clé s'y trouve.",
						"spanish": "Encuentra la fuente del frenesí. Allí reside la verdadera llave.",
						"vietnamese": "Hãy tìm nguồn gốc của sự hỗn loạn. Chìa khóa thật sự nằm ở đó.",
						"thai": "จงค้นหาต้นตอของความบ้าคลั่ง กุญแจที่แท้จริงอยู่ที่นั่น",
						"hindi": "उन्माद का स्रोत ढूँढो। असली कुंजी वहीं है।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "어둠 속에서 거대한 그림자가 나타났다. 숲의 분노가 형상화된 듯했다.",
						"english": "A giant shadow emerged from darkness. It seemed to embody the forest's wrath.",
						"japanese": "闇より巨大な影が現れた。森の怒りが具現化したかのようだった。",
						"chinese": "黑暗中出现了一个巨大的影子。它似乎是森林愤怒的化身。",
						"french": "Une ombre gigantesque émergea des ténèbres. Elle semblait incarner la colère de la forêt.",
						"spanish": "Una sombra gigantesca emergió de la oscuridad. Parecía la encarnación de la furia del bosque.",
						"vietnamese": "Một bóng đen khổng lồ xuất hiện từ bóng tối. Dường như đó là hiện thân của sự phẫn nộ của rừng.",
						"thai": "เงายักษ์ปรากฏขึ้นจากความมืดมิด ดูราวกับเป็นร่างอวตารของความโกรธแค้นแห่งป่า",
						"hindi": "अँधेरे से एक विशाल छाया निकली। यह जंगल के क्रोध का मूर्त रूप लग रहा था।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "여기까지 오다니… 어리석은 인간들.",
						"english": "You've come this far... foolish humans.",
						"japanese": "ここまで来るとは…愚かな人間め。",
						"chinese": "竟敢到此…愚蠢的人类。",
						"french": "Être venus jusqu'ici... Humains insensés.",
						"spanish": "Haber llegado tan lejos... necios humanos.",
						"vietnamese": "Đến được đây ư… lũ người ngu xuẩn.",
						"thai": "มาได้ถึงเพียงนี้… มนุษย์โง่เขลา",
						"hindi": "यहाँ तक आ गए... मूर्ख इंसान।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "네가 이 폭주를 부추기는 자인가!",
						"english": "Are you the one inciting this frenzy?!",
						"japanese": "お前がこの暴走を煽っているのか！",
						"chinese": "你就是煽动这场暴走之人吗？！",
						"french": "Est-ce toi qui attises cette folie ?!",
						"spanish": "¿Eres tú quien incita este frenesí?!",
						"vietnamese": "Ngươi là kẻ đang xúi giục sự hỗn loạn này sao?!",
						"thai": "เจ้าคือผู้ปลุกปั่นความบ้าคลั่งนี้หรือ?!",
						"hindi": "क्या तुम ही इस उन्माद को भड़का रहे हो?!"
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "카인의 의지는 숲의 새로운 질서가 될 것이다.",
						"english": "Cain's will shall be the forest's new order.",
						"japanese": "カインの意思が森の新たな秩序となるだろう。",
						"chinese": "该隐的意志将成为森林的新秩序。",
						"french": "La volonté de Caïn sera le nouvel ordre de la forêt.",
						"spanish": "La voluntad de Caín será el nuevo orden del bosque.",
						"vietnamese": "Ý chí của Cain sẽ là trật tự mới của rừng.",
						"thai": "เจตนารมณ์ของคาอินจะเป็นระเบียบใหม่แห่งป่า",
						"hindi": "कैन की इच्छा वन का नया विधान होगी।"
					}
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						5,
						3
					],
					"speaker": "cedar",
					"action": "enter"
				},
				{
					"speaker": "cedar",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "아니다. 너는 카인의 망상에 불과해.",
						"english": "No. You are but Cain's delusion.",
						"japanese": "違う。お前はカインの妄想に過ぎない。",
						"chinese": "不。你不过是该隐的妄想。",
						"french": "Non. Tu n'es qu'une illusion de Caïn.",
						"spanish": "No. No eres más que una ilusión de Caín.",
						"vietnamese": "Không. Ngươi chỉ là ảo ảnh của Cain.",
						"thai": "ไม่ใช่ เจ้าเป็นเพียงภาพลวงตาของคาอิน",
						"hindi": "नहीं। तुम केवल कैन का भ्रम हो।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "진정한 의지를 해방하려면… 저 거짓된 힘을 꺾어야 한다.",
						"english": "To unleash the true will... we must break that false power.",
						"japanese": "真の意志を解放するには…あの偽りの力を打ち砕かねばならない。",
						"chinese": "若要解放真正的意志…就必须摧毁那虚伪的力量。",
						"french": "Pour libérer la vraie volonté... nous devons briser ce faux pouvoir.",
						"spanish": "Para liberar la verdadera voluntad... debemos quebrar ese falso poder.",
						"vietnamese": "Để giải phóng ý chí thật sự… chúng ta phải phá vỡ sức mạnh giả dối đó.",
						"thai": "เพื่อปลดปล่อยเจตนารมณ์ที่แท้จริง… เราต้องทำลายพลังลวงตานั้น",
						"hindi": "सच्ची इच्छा को मुक्त करने के लिए... हमें उस झूठी शक्ति को तोड़ना होगा।"
					},
					"emotion": "base",
					"speaker": "cedar"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "건방진! 감히 나의 길을 막아서려 하는가!",
						"english": "Impudent! How dare you obstruct my path!",
						"japanese": "生意気な！よくも私の道を阻もうとするか！",
						"chinese": "放肆！竟敢阻拦我的去路？！",
						"french": "Impertinent ! Comment oses-tu barrer mon chemin ?!",
						"spanish": "¡Insolente! ¡Cómo te atreves a interponerte en mi camino?!",
						"vietnamese": "Ngạo mạn! Ngươi dám cản đường ta sao?!",
						"thai": "บังอาจ! กล้าดียังไงมาขวางทางข้า!",
						"hindi": "धृष्टता! तुम्हारी हिम्मत कैसे हुई मेरा रास्ता रोकने की?!"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "숲의 고통을 끝내자!",
						"english": "Let's end the forest's agony!",
						"japanese": "森の苦しみを終わらせよう！",
						"chinese": "结束森林的苦难吧！",
						"french": "Mettons fin à la souffrance de la forêt !",
						"spanish": "¡Pongamos fin al sufrimiento del bosque!",
						"vietnamese": "Hãy kết thúc nỗi đau của rừng!",
						"thai": "มายุติความเจ็บปวดของป่ากันเถอะ!",
						"hindi": "आओ, जंगल के दर्द को खत्म करें!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "크으… 아직… 끝나지 않았다… 카인의 계획은…",
						"english": "Ugh... It's not over yet... Cain's plan...",
						"japanese": "くっ… まだ… 終わってない… カインの計画は…",
						"chinese": "呃… 还没… 结束… 该隐的计划…",
						"french": "Ugh... Ce n'est pas encore fini... Le plan de Caïn...",
						"spanish": "Ugh... No ha terminado aún... El plan de Caín...",
						"vietnamese": "Khụ... Vẫn chưa... Kết thúc... Kế hoạch của Cain...",
						"thai": "อึก... ยังไม่... จบ... แผนการของไคน์...",
						"hindi": "उफ़... अभी... खत्म नहीं हुआ... केन की योजना..."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "끝났다. 더 이상 숲을 유린하지 못해.",
						"english": "It's over. You can no longer defile the forest.",
						"japanese": "終わった。もう森を蹂躙させない。",
						"chinese": "结束了。你再也无法蹂躏森林了。",
						"french": "C'est fini. Tu ne souilleras plus la forêt.",
						"spanish": "Se acabó. Ya no podrás profanar el bosque.",
						"vietnamese": "Kết thúc rồi. Ngươi sẽ không thể phá hoại rừng nữa.",
						"thai": "จบแล้ว เจ้าจะไม่มีวันทำลายป่าได้อีก",
						"hindi": "यह खत्म हो गया। तुम अब और जंगल को अपवित्र नहीं कर सकते।"
					},
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"spot": [
						5,
						3
					],
					"duration_ms": 500,
					"speaker": "cedar",
					"type": "direction"
				},
				{
					"content": {
						"korean": "잘했다. 이제 세계수의 진정한 문이 열릴 것이다.",
						"english": "Well done. Now the true gate of the World Tree will open.",
						"japanese": "よくやった。これで世界樹の真の扉が開かれるだろう。",
						"chinese": "做得好。现在世界树的真正大门将会开启。",
						"french": "Bien joué. Maintenant, la véritable porte de l'Arbre-Monde s'ouvrira.",
						"spanish": "Bien hecho. Ahora la verdadera puerta del Árbol del Mundo se abrirá.",
						"vietnamese": "Làm tốt lắm. Giờ đây cánh cổng thật sự của Cây Thế Giới sẽ mở ra.",
						"thai": "ยอดเยี่ยม ตอนนี้ประตูที่แท้จริงของต้นไม้โลกจะเปิดออก",
						"hindi": "शाबाश। अब विश्व वृक्ष का असली द्वार खुलेगा।"
					},
					"emotion": "happy",
					"type": "speech",
					"speaker": "cedar"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "쓰러진 그림자는 숲의 일부가 되어 흩어졌다. 하지만 숲의 깊은 곳에서는, 또 다른 진실이 기다리고 있었다.",
						"english": "The fallen shadow became one with the forest and scattered. But deep within the forest, another truth awaited.",
						"japanese": "倒れた影は森の一部となり、散っていった。しかし、森の奥深くでは、別の真実が待ち受けていた。",
						"chinese": "倒下的影子化作森林的一部分消散了。然而，在森林的深处，另一个真相正在等待着。",
						"french": "L'ombre tombée est devenue une avec la forêt et s'est dispersée. Mais au plus profond de la forêt, une autre vérité attendait.",
						"spanish": "La sombra caída se unió al bosque y se dispersó. Pero en lo más profundo del bosque, otra verdad aguardaba.",
						"vietnamese": "Bóng tối đã ngã xuống hòa vào rừng và tan biến. Nhưng sâu thẳm trong khu rừng, một sự thật khác đang chờ đợi.",
						"thai": "เงาที่ล้มลงได้กลายเป็นส่วนหนึ่งของป่าและสลายไป แต่ลึกเข้าไปในป่า ความจริงอีกอย่างหนึ่งกำลังรออยู่",
						"hindi": "गिरा हुआ साया जंगल का हिस्सा बनकर बिखर गया। लेकिन जंगल के गहरे में, एक और सच्चाई इंतज़ार कर रही थी।"
					}
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "happy",
					"content": {
						"korean": "하하하… 이 정도로는… 아무것도 막을 수 없다.",
						"english": "Hahaha... This much... can't stop anything.",
						"japanese": "ハハハ… この程度では… 何も止められない。",
						"chinese": "哈哈哈… 就凭这些… 什么都阻止不了。",
						"french": "Hahaha... Avec ça... rien ne peut être arrêté.",
						"spanish": "Jajaja... Con esto... no se puede detener nada.",
						"vietnamese": "Hahaha... Chừng này... chẳng thể ngăn cản được gì đâu.",
						"thai": "ฮ่าฮ่าฮ่า... แค่นี้... หยุดอะไรไม่ได้หรอก",
						"hindi": "हाहाहा... बस इतना सा... कुछ भी नहीं रोक सकता।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "크윽… 아직… 포기하지 않아!",
						"english": "Ugh... Not yet... I won't give up!",
						"japanese": "くっ… まだ… 諦めない！",
						"chinese": "呃… 还没… 我不会放弃的！",
						"french": "Ugh... Pas encore... Je n'abandonnerai pas !",
						"spanish": "Ugh... Todavía no... ¡No me rindo!",
						"vietnamese": "Khụ... Vẫn chưa... Ta sẽ không bỏ cuộc!",
						"thai": "อึก... ยังไม่... ฉันไม่ยอมแพ้หรอก!",
						"hindi": "उफ़... अभी नहीं... मैं हार नहीं मानूँगा!"
					},
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"speaker": "cedar",
					"duration_ms": 500,
					"spot": [
						5,
						3
					],
					"type": "direction"
				},
				{
					"speaker": "cedar",
					"content": {
						"korean": "좌절하지 마라. 너의 의지가 숲의 희망이니.",
						"english": "Do not despair. Your will is the hope of the forest.",
						"japanese": "挫折するな。お前の意志が森の希望だ。",
						"chinese": "不要气馁。你的意志就是森林的希望。",
						"french": "Ne désespère pas. Ta volonté est l'espoir de la forêt.",
						"spanish": "No desesperes. Tu voluntad es la esperanza del bosque.",
						"vietnamese": "Đừng nản lòng. Ý chí của ngươi là hy vọng của khu rừng.",
						"thai": "อย่าท้อแท้ เจตจำนงของเจ้าคือความหวังของป่า",
						"hindi": "निराश मत हो। तुम्हारी इच्छा ही जंगल की आशा है।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		}
	]
} as const;
