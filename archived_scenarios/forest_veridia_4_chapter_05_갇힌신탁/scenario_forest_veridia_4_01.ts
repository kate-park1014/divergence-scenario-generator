export const scenario_forest_veridia_4_01 = {
	"scenario_id": "forest_veridia_4_01",
	"order": 1,
	"act": "intro",
	"theme": "forest",
	"actors": {
		"fern": {
			"id": "mon_279a32a0-8ec1-4b5b-8179-32df46fdc664",
			"name": {
				"korean": "페른",
				"english": "Fern",
				"japanese": "フェルン",
				"chinese": "费恩",
				"french": "Fern",
				"spanish": "Fern",
				"vietnamese": "Fern",
				"thai": "เฟิร์น",
				"hindi": "फर्न"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/19f9763e-413a-485e-787a-9bbfd8208700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/563627d4-0b7c-4865-39d4-1d0a97363c00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"숲 깊은 곳, 길 잃은 자에게 안식을 준다는 수호자.",
			"그 빛은 성스럽고, 그 품은 평온하다.",
			"페른의 인도를 따라 성소로 향하는 순례자들.",
			"그러나 축복받은 이들의 눈은… 어딘가 비어 있었다."
		],
		"english": [
			"Deep in the forest, a Guardian grants solace to the lost.",
			"Its light is sacred, its embrace serene.",
			"Pilgrims journey to the sanctuary, guided by Fern.",
			"Yet, the eyes of the blessed… were somehow vacant."
		],
		"japanese": [
			"森の奥深く、迷いし者に安息を与える守護者。",
			"その光は聖なるものであり、その懐は安らかである。",
			"フェルンの導きに従い、聖域へと向かう巡礼者たち。",
			"しかし、祝福されし者の目は… どこか虚ろだった。"
		],
		"chinese": [
			"森林深处，守护者为迷失者赐予安宁。",
			"其光圣洁，其怀平静。",
			"朝圣者们循着费恩的指引，前往圣所。",
			"然而，那些受祝福者的眼神… 却有些空洞。"
		],
		"french": [
			"Au plus profond de la forêt, un Gardien offre le repos aux égarés.",
			"Sa lumière est sacrée, son étreinte sereine.",
			"Des pèlerins se dirigent vers le sanctuaire, guidés par Fern.",
			"Pourtant, les yeux des bénis… étaient étrangement vides."
		],
		"spanish": [
			"En lo profundo del bosque, un Guardián concede reposo a los perdidos.",
			"Su luz es sagrada, su abrazo sereno.",
			"Peregrinos viajan al santuario, guiados por Fern.",
			"Sin embargo, los ojos de los bendecidos… estaban de alguna manera vacíos."
		],
		"vietnamese": [
			"Sâu trong rừng, Người bảo hộ ban bình yên cho kẻ lạc lối.",
			"Ánh sáng của nó linh thiêng, vòng tay của nó thanh bình.",
			"Những người hành hương tiến về thánh địa, theo sự dẫn lối của Fern.",
			"Thế nhưng, đôi mắt của những người được ban phước… lại trống rỗng lạ thường."
		],
		"thai": [
			"ลึกเข้าไปในป่า ผู้พิทักษ์มอบความสงบแก่ผู้หลงทาง",
			"แสงนั้นศักดิ์สิทธิ์ อ้อมกอดนั้นสงบ",
			"ผู้แสวงบุญมุ่งหน้าสู่สถานศักดิ์สิทธิ์ โดยมีเฟิร์นนำทาง",
			"ทว่า ดวงตาของผู้ได้รับพร… กลับว่างเปล่าพิกล"
		],
		"hindi": [
			"जंगल की गहराई में, एक संरक्षक भटके हुए लोगों को शांति प्रदान करता है।",
			"उसका प्रकाश पवित्र है, उसका आलिंगन शांत है।",
			"फर्न के मार्गदर्शन में तीर्थयात्री पवित्र स्थान की ओर बढ़ते हैं।",
			"फिर भी, धन्य लोगों की आँखें… कहीं न कहीं खाली थीं।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "고요한 숲, 빛이 쏟아지는 통로가 열렸다.",
						"english": "In the quiet forest, a light-filled passage opened.",
						"japanese": "静かな森に、光あふれる通路が開かれた。",
						"chinese": "宁静的森林中，一道光芒倾泻而出的通道开启了。",
						"french": "Dans la forêt silencieuse, un passage baigné de lumière s'ouvrit.",
						"spanish": "En el bosque silencioso, se abrió un pasaje lleno de luz.",
						"vietnamese": "Trong rừng tĩnh mịch, một lối đi tràn ngập ánh sáng đã mở ra.",
						"thai": "ในป่าอันเงียบสงบ ทางเดินที่เต็มไปด้วยแสงได้เปิดออก",
						"hindi": "शांत जंगल में, प्रकाश से भरा एक मार्ग खुल गया।"
					}
				},
				{
					"content": {
						"korean": "여기가 수호자의 성소로 가는 길?",
						"english": "Is this the way to the Guardian's sanctuary?",
						"japanese": "ここが守護者の聖域への道ですか？",
						"chinese": "这是通往守护者圣所的路吗？",
						"french": "Est-ce le chemin vers le sanctuaire du Gardien ?",
						"spanish": "¿Es este el camino al santuario del Guardián?",
						"vietnamese": "Đây là con đường đến thánh địa của Người bảo hộ sao?",
						"thai": "นี่คือทางไปสถานศักดิ์สิทธิ์ของผู้พิทักษ์หรือ?",
						"hindi": "क्या यह संरक्षक के पवित्र स्थान का मार्ग है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "fern"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그래. 숲의 수호자가 너희를 기다리고 있어.",
						"english": "Yes. The Forest Guardian awaits you.",
						"japanese": "そうだ。森の守護者が君たちを待っている。",
						"chinese": "是的。森林守护者在等着你们。",
						"french": "Oui. Le Gardien de la Forêt vous attend.",
						"spanish": "Sí. El Guardián del Bosque os espera.",
						"vietnamese": "Đúng vậy. Người bảo hộ rừng đang chờ các ngươi.",
						"thai": "ใช่ ผู้พิทักษ์ป่ากำลังรอพวกเจ้าอยู่",
						"hindi": "हाँ। वन संरक्षक तुम्हारा इंतजार कर रहा है।"
					},
					"speaker": "fern",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "fern",
					"content": {
						"korean": "길 잃은 영혼들을 보듬어주는 분이지.",
						"english": "They embrace lost souls.",
						"japanese": "迷いし魂を抱きしめてくれる方だ。",
						"chinese": "祂是拥抱迷失灵魂的存在。",
						"french": "Ils réconfortent les âmes perdues.",
						"spanish": "Ellos acogen a las almas perdidas.",
						"vietnamese": "Người ôm ấp những linh hồn lạc lối.",
						"thai": "พวกเขาโอบกอดวิญญาณที่หลงทาง",
						"hindi": "वे भटकी हुई आत्माओं को गले लगाते हैं।"
					},
					"emotion": "happy"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "저기… 다른 순례자들도 보여.",
						"english": "Look… I see other pilgrims too.",
						"japanese": "あれ… 他の巡礼者たちも見える。",
						"chinese": "看… 我也看到其他朝圣者了。",
						"french": "Regardez… je vois d'autres pèlerins aussi.",
						"spanish": "Mira… también veo a otros peregrinos.",
						"vietnamese": "Nhìn kìa… tôi cũng thấy những người hành hương khác.",
						"thai": "ดูสิ… ฉันเห็นผู้แสวงบุญคนอื่นด้วย",
						"hindi": "देखो… मुझे दूसरे तीर्थयात्री भी दिख रहे हैं।"
					},
					"speaker": "character_1",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "다들 평온해 보이는데… 왠지 모르게 멍해 보여.",
						"english": "They all look peaceful… but somehow blank.",
						"japanese": "皆穏やかそうだけど… 何となくぼんやりしている。",
						"chinese": "他们看起来都很平静… 但不知为何有些呆滞。",
						"french": "Ils ont tous l'air paisible… mais étrangement hagards.",
						"spanish": "Todos parecen tranquilos… pero de alguna manera aturdidos.",
						"vietnamese": "Họ trông đều thanh bình… nhưng không hiểu sao lại đờ đẫn.",
						"thai": "พวกเขาทุกคนดูสงบ… แต่ก็ดูเหม่อลอยพิกล",
						"hindi": "वे सब शांत दिखते हैं… पर किसी तरह खाली-खाली से हैं।"
					},
					"speaker": "character_1",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction",
					"speaker": "fern",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "fern",
					"content": {
						"korean": "수호자의 축복을 받은 자들이다.",
						"english": "These are the blessed by the Guardian.",
						"japanese": "守護者の祝福を受けし者たちだ。",
						"chinese": "他们是受守护者祝福的人。",
						"french": "Ce sont ceux qui sont bénis par le Gardien.",
						"spanish": "Son aquellos bendecidos por el Guardián.",
						"vietnamese": "Họ là những người được Ban phước bởi Người bảo hộ.",
						"thai": "พวกเขาคือผู้ที่ได้รับพรจากผู้พิทักษ์",
						"hindi": "वे संरक्षक द्वारा धन्य हैं।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "깊은 평온을 얻으면 모든 잡념이 사라지는 법.",
						"english": "Deep tranquility clears all stray thoughts.",
						"japanese": "深い平穏を得れば、全ての雑念は消え去るものだ。",
						"chinese": "获得深沉的平静，所有杂念便会消失。",
						"french": "Lorsque l'on atteint une paix profonde, toutes les pensées parasites disparaissent.",
						"spanish": "Al alcanzar una profunda serenidad, todos los pensamientos superfluos desaparecen.",
						"vietnamese": "Khi đạt được sự bình yên sâu sắc, mọi tạp niệm sẽ tan biến.",
						"thai": "เมื่อได้รับความสงบอันลึกซึ้ง ความคิดฟุ้งซ่านทั้งมวลจะหายไป",
						"hindi": "गहरी शांति प्राप्त होने पर, सभी व्यर्थ विचार दूर हो जाते हैं।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "fern"
				},
				{
					"content": {
						"korean": "정말 평온해 보이지만… 생기가 없어 보여.",
						"english": "They look truly peaceful... but lifeless.",
						"japanese": "本当に穏やかそうだが… 生気がないようだ。",
						"chinese": "他们看起来确实很平静… 但毫无生气。",
						"french": "Ils semblent vraiment paisibles… mais sans vie.",
						"spanish": "Parecen realmente en paz... pero sin vida.",
						"vietnamese": "Trông họ thật sự bình yên… nhưng lại thiếu sức sống.",
						"thai": "พวกเขาดูสงบจริงๆ... แต่ไร้ซึ่งชีวิตชีวา",
						"hindi": "वे वास्तव में शांत दिखते हैं... लेकिन बेजान।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "fern",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "걱정 마. 숲의 수호자는 오직 안식만을 준다.",
						"english": "Don't worry. The Guardian of the Forest grants only rest.",
						"japanese": "心配するな。森の守護者は安息しか与えない。",
						"chinese": "别担心。森林的守护者只会赐予安息。",
						"french": "Ne t'inquiète pas. Le Gardien de la Forêt n'accorde que le repos.",
						"spanish": "No te preocupes. El Guardián del Bosque solo concede descanso.",
						"vietnamese": "Đừng lo. Người bảo hộ Rừng xanh chỉ ban tặng sự an nghỉ.",
						"thai": "ไม่ต้องห่วง ผู้พิทักษ์แห่งป่ามอบให้เพียงความสงบสุขเท่านั้น",
						"hindi": "चिंता मत करो। वन का संरक्षक केवल आराम देता है।"
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "fern",
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "저 순례자는 왜 움직이지 않는 거지?",
						"english": "Why isn't that pilgrim moving?",
						"japanese": "あの巡礼者はなぜ動かないんだ？",
						"chinese": "那个朝圣者为什么不动？",
						"french": "Pourquoi ce pèlerin ne bouge-t-il pas ?",
						"spanish": "¿Por qué no se mueve ese peregrino?",
						"vietnamese": "Sao người hành hương đó không động đậy vậy?",
						"thai": "ทำไมผู้แสวงบุญคนนั้นถึงไม่เคลื่อนไหว?",
						"hindi": "वह तीर्थयात्री क्यों नहीं चल रहा है?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "fern",
					"content": {
						"korean": "축복의 여운에 잠긴 거야. 방해하지 마.",
						"english": "They're immersed in the afterglow of the blessing. Don't disturb them.",
						"japanese": "祝福の余韻に浸っているんだ。邪魔をするな。",
						"chinese": "他们沉浸在祝福的余韵中。别打扰他们。",
						"french": "Ils sont plongés dans l'écho de la bénédiction. Ne les dérange pas.",
						"spanish": "Están inmersos en el resplandor de la bendición. No los molestes.",
						"vietnamese": "Họ đang chìm đắm trong dư âm của phước lành. Đừng làm phiền.",
						"thai": "พวกเขากำลังจมดิ่งอยู่ในห้วงแห่งพร อย่ารบกวนเลย",
						"hindi": "वे आशीर्वाद के प्रभाव में डूबे हुए हैं। उन्हें परेशान मत करो।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "마치… 모든 것을 잃어버린 사람 같아.",
						"english": "It's as if... they've lost everything.",
						"japanese": "まるで… 全てを失った者のようだ。",
						"chinese": "就像… 失去了一切的人。",
						"french": "On dirait… quelqu'un qui a tout perdu.",
						"spanish": "Es como si... hubieran perdido todo.",
						"vietnamese": "Cứ như… họ đã mất tất cả vậy.",
						"thai": "ราวกับว่า... พวกเขาสูญเสียทุกสิ่งไปแล้ว",
						"hindi": "जैसे... उन्होंने सब कुछ खो दिया हो।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_1"
				},
				{
					"type": "speech",
					"speaker": "fern",
					"content": {
						"korean": "그런 불경한 생각은 그만둬. 어서 가자.",
						"english": "Stop such impious thoughts. Let's go.",
						"japanese": "そのような不敬な考えはやめろ。さあ行こう。",
						"chinese": "停止这种不敬的想法。我们走吧。",
						"french": "Arrête ces pensées impies. Allons-y.",
						"spanish": "Deja de tener esos pensamientos impíos. Vámonos.",
						"vietnamese": "Dừng ngay những suy nghĩ bất kính đó. Đi thôi.",
						"thai": "หยุดความคิดอกุศลนั้นเสียเถอะ ไปกันเถอะ",
						"hindi": "ऐसे अपवित्र विचार छोड़ दो। चलो चलते हैं।"
					},
					"emotion": "angry"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "성소의 기운이 더욱 강해졌다. 알 수 없는 압박감이 맴돈다.",
						"english": "The sanctuary's aura has grown stronger. An unknown pressure lingers.",
						"japanese": "聖所の気がさらに強くなった。得体の知れない圧迫感が漂う。",
						"chinese": "圣所的气息变得更强了。一股莫名的压迫感萦绕。",
						"french": "L'aura du sanctuaire s'est intensifiée. Une pression inconnue plane.",
						"spanish": "El aura del santuario se ha vuelto más fuerte. Una presión desconocida flota en el aire.",
						"vietnamese": "Khí tức của thánh địa đã mạnh hơn. Một áp lực không thể gọi tên bao trùm.",
						"thai": "กลิ่นอายของสถานศักดิ์สิทธิ์แข็งแกร่งขึ้น ความกดดันที่ไม่รู้จักลอยวนอยู่",
						"hindi": "पवित्र स्थान की आभा और तीव्र हो गई है। एक अज्ञात दबाव मंडरा रहा है।"
					}
				},
				{
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"action": "enter",
					"speaker": "fern",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "fern",
					"content": {
						"korean": "거의 다 왔다. 수호자의 목소리가 들리지 않아?",
						"english": "We're almost there. Can't you hear the Guardian's voice?",
						"japanese": "もうすぐだ。守護者の声が聞こえないか？",
						"chinese": "我们快到了。你听不到守护者的声音吗？",
						"french": "Nous y sommes presque. N'entends-tu pas la voix du Gardien ?",
						"spanish": "Ya casi llegamos. ¿No oyes la voz del Guardián?",
						"vietnamese": "Gần đến nơi rồi. Bạn không nghe thấy tiếng của Người bảo hộ sao?",
						"thai": "ใกล้ถึงแล้ว ไม่ได้ยินเสียงของผู้พิทักษ์หรือ?",
						"hindi": "हम लगभग पहुँच गए हैं। क्या तुम्हें संरक्षक की आवाज़ नहीं सुनाई दे रही?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "목소리? 아니, 아무것도…",
						"english": "A voice? No, nothing...",
						"japanese": "声？いや、何も…",
						"chinese": "声音？不，什么都没有…",
						"french": "Une voix ? Non, rien…",
						"spanish": "¿Una voz? No, nada...",
						"vietnamese": "Một giọng nói? Không, không có gì...",
						"thai": "เสียงเหรอ? ไม่ ไม่มีอะไร...",
						"hindi": "आवाज़? नहीं, कुछ नहीं..."
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이 평온함이 오히려… 섬뜩해.",
						"english": "This tranquility... it's unsettling.",
						"japanese": "この静けさ…むしろ不気味だ。",
						"chinese": "这份平静…反而令人毛骨悚然。",
						"french": "Ce calme... c'est plutôt étrange.",
						"spanish": "Esta tranquilidad... es inquietante.",
						"vietnamese": "Sự yên bình này... thật đáng sợ.",
						"thai": "ความสงบนี้...กลับน่าขนลุก",
						"hindi": "यह शांति... बल्कि डरावनी है।"
					},
					"speaker": "character_2",
					"type": "speech"
				},
				{
					"speaker": "fern",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "멈추지 마. 수호자를 만나야 해.",
						"english": "Don't stop. We must meet the Guardian.",
						"japanese": "止まるな。守護者に会う必要がある。",
						"chinese": "别停。我们必须见到守护者。",
						"french": "Ne t'arrête pas. Nous devons rencontrer le Gardien.",
						"spanish": "No te detengas. Debemos encontrar al Guardián.",
						"vietnamese": "Đừng dừng lại. Chúng ta phải gặp Người bảo hộ.",
						"thai": "อย่าหยุด เราต้องพบผู้พิทักษ์",
						"hindi": "रुको मत। हमें अभिभावक से मिलना है।"
					}
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 숲의 심장. 그 안에서 어렴풋한 형태가 드러났다.",
						"english": "The heart of the vast forest. A faint form emerged within.",
						"japanese": "広大な森の心臓。その中で、おぼろげな姿が現れた。",
						"chinese": "巨大森林的心脏。一个模糊的形态从中显现。",
						"french": "Le cœur de la vaste forêt. Une forme indistincte apparut en son sein.",
						"spanish": "El corazón del vasto bosque. Una forma difusa emergió de él.",
						"vietnamese": "Trái tim của khu rừng rộng lớn. Một hình dạng mờ ảo hiện ra bên trong.",
						"thai": "หัวใจของป่าอันกว้างใหญ่ รูปร่างที่เลือนรางปรากฏขึ้นจากภายใน",
						"hindi": "विशाल वन का हृदय। उसके भीतर एक धुंधली आकृति प्रकट हुई।"
					},
					"emotion": "base"
				},
				{
					"action": "enter",
					"spot": [
						2,
						2
					],
					"type": "direction",
					"speaker": "fern",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "fern",
					"content": {
						"korean": "드디어… 수호자님. 이들이 당신을 찾아왔습니다.",
						"english": "Finally... Guardian. They have come for you.",
						"japanese": "ついに…守護者様。彼らがあなたを訪ねてきました。",
						"chinese": "终于…守护者大人。他们来找您了。",
						"french": "Enfin... Gardien. Ils sont venus vous trouver.",
						"spanish": "Finalmente... Guardián. Han venido a buscarte.",
						"vietnamese": "Cuối cùng... Người bảo hộ. Họ đã đến tìm ngài.",
						"thai": "ในที่สุด... ท่านผู้พิทักษ์ พวกเขามาหาท่านแล้ว",
						"hindi": "अंततः... अभिभावक। ये आपको ढूंढते हुए आए हैं।"
					},
					"emotion": "happy"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "당신이 수호자? 순례자들을 이렇게 만든 장본인인가?",
						"english": "You are the Guardian? The one who did this to the pilgrims?",
						"japanese": "お前が守護者か？巡礼者たちをこんな姿にした張本人か？",
						"chinese": "你就是守护者？把朝圣者变成这样的人是你吗？",
						"french": "Vous êtes le Gardien ? C'est vous qui avez fait ça aux pèlerins ?",
						"spanish": "¿Tú eres el Guardián? ¿El responsable de lo que les pasó a los peregrinos?",
						"vietnamese": "Ngươi là Người bảo hộ? Kẻ đã gây ra chuyện này cho những người hành hương sao?",
						"thai": "ท่านคือผู้พิทักษ์งั้นหรือ? ผู้ที่ทำเช่นนี้กับผู้แสวงบุญ?",
						"hindi": "आप अभिभावक हैं? तीर्थयात्रियों को यह सब करने वाले आप ही हैं?"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "나는 그저… 안식을 주었을 뿐.",
						"english": "I merely... granted them rest.",
						"japanese": "私はただ…安息を与えただけだ。",
						"chinese": "我只是…赐予了他们安息。",
						"french": "Je leur ai simplement... offert le repos.",
						"spanish": "Yo solo... les concedí el descanso.",
						"vietnamese": "Ta chỉ... ban cho họ sự an nghỉ.",
						"thai": "ข้าเพียงแค่... มอบการพักผ่อนให้พวกเขา",
						"hindi": "मैंने बस... उन्हें आराम दिया।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그들은 비로소 고통에서 해방되었다.",
						"english": "They were finally freed from suffering.",
						"japanese": "彼らはようやく苦痛から解放されたのだ。",
						"chinese": "他们终于从痛苦中解脱了。",
						"french": "Ils furent enfin libérés de la souffrance.",
						"spanish": "Por fin fueron liberados del sufrimiento.",
						"vietnamese": "Họ cuối cùng đã được giải thoát khỏi đau khổ.",
						"thai": "ในที่สุดพวกเขาก็เป็นอิสระจากความเจ็บปวด",
						"hindi": "वे अंततः पीड़ा से मुक्त हो गए।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "그게 해방이야? 그냥 껍데기만 남았잖아!",
						"english": "That's freedom? Only empty shells remain!",
						"japanese": "それが解放だと？ただの抜け殻が残っただけじゃないか！",
						"chinese": "那是解脱？只剩下空壳了！",
						"french": "C'est ça la libération ? Il ne reste que des coquilles vides !",
						"spanish": "¿Eso es liberación? ¡Solo quedan caparazones vacíos!",
						"vietnamese": "Đó là sự giải thoát ư? Chỉ còn lại những cái vỏ rỗng!",
						"thai": "นั่นคือการปลดปล่อยงั้นหรือ? มีแต่เพียงซากเปลือกที่เหลืออยู่!",
						"hindi": "यह मुक्ति है? केवल खाली खोल ही बचे हैं!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "fern",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "불경한 자들! 감히 수호자님을 모욕하다니!",
						"english": "Blasphemers! How dare you insult the Guardian!",
						"japanese": "不敬な者たちめ！よくも守護者様を侮辱したな！",
						"chinese": "渎神者！竟敢侮辱守护者大人！",
						"french": "Impies ! Comment osez-vous insulter le Gardien !",
						"spanish": "¡Blasfemos! ¡Cómo os atrevéis a insultar al Guardián!",
						"vietnamese": "Những kẻ báng bổ! Sao các ngươi dám xúc phạm Người bảo hộ!",
						"thai": "พวกคนนอกรีต! กล้าดียังไงมาดูหมิ่นท่านผู้พิทักษ์!",
						"hindi": "नास्तिकों! तुम्हारी हिम्मत कैसे हुई अभिभावक का अपमान करने की!"
					}
				},
				{
					"direction": "down",
					"speaker": "fern",
					"type": "direction",
					"action": "exit",
					"duration_ms": 400
				},
				{
					"emotion": "base",
					"content": {
						"korean": "덤벼라. 너희도 곧… 평온을 얻게 될 것이다.",
						"english": "Come. You too shall soon… find peace.",
						"japanese": "かかってこい。お前たちもじき… 平穏を得るだろう。",
						"chinese": "放马过来。你们很快也会……得到平静。",
						"french": "Venez. Vous aussi… trouverez bientôt la paix.",
						"spanish": "Atacad. Vosotros también… pronto encontraréis la paz.",
						"vietnamese": "Đến đây. Các ngươi cũng sẽ sớm… tìm thấy sự bình yên.",
						"thai": "เข้ามาเลย พวกเจ้าก็จะ… พบความสงบในไม่ช้า.",
						"hindi": "आओ। तुम्हें भी जल्द… शांति मिलेगी।"
					},
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"content": {
						"korean": "크윽… 이 정도… 고통쯤이야…",
						"english": "Ugh… This much… pain is nothing…",
						"japanese": "くぅ… この程度の… 痛みなど…",
						"chinese": "呃… 这点… 痛苦算什么…",
						"french": "Ugh… Cette… douleur n'est rien…",
						"spanish": "Ugh… Este… dolor no es nada…",
						"vietnamese": "Khụ… Đau thế này… thì nhằm nhò gì…",
						"thai": "อึก… แค่นี้… เจ็บแค่นี้เอง…",
						"hindi": "उफ़… यह थोड़ा सा… दर्द कुछ नहीं है…"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "너희도 언젠가… 깨닫게 될 것이다. 이 축복의… 의미를.",
						"english": "You too shall one day… understand. The meaning… of this blessing.",
						"japanese": "お前たちもいつか… 気づくだろう。この祝福の… 意味を。",
						"chinese": "你们总有一天… 会明白的。这祝福的… 意义。",
						"french": "Vous aussi, un jour… comprendrez. Le sens… de cette bénédiction.",
						"spanish": "Vosotros también, un día… lo comprenderéis. El significado… de esta bendición.",
						"vietnamese": "Các ngươi rồi cũng sẽ… nhận ra. Ý nghĩa… của lời chúc phúc này.",
						"thai": "สักวันพวกเจ้าก็จะ… เข้าใจ ความหมาย… ของพรนี้",
						"hindi": "तुम भी एक दिन… समझोगे। इस आशीर्वाद का… अर्थ।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이게 대체 무슨… 축복이야.",
						"english": "What kind of… blessing is this?",
						"japanese": "一体何の… 祝福だというんだ。",
						"chinese": "这到底是什么… 祝福啊。",
						"french": "C'est quoi, cette… bénédiction ?",
						"spanish": "Pero, ¿qué clase de… bendición es esta?",
						"vietnamese": "Đây rốt cuộc là cái… chúc phúc gì chứ.",
						"thai": "นี่มัน… พรบ้าอะไรกันเนี่ย",
						"hindi": "यह किस तरह का… आशीर्वाद है?"
					},
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "쓰러진 수호자. 하지만 그 공허한 평온은 숲을 떠나지 않았다.",
						"english": "The guardian fell. Yet, its hollow peace did not leave the forest.",
						"japanese": "倒れた守護者。だが、その空虚な平穏は森を去らなかった。",
						"chinese": "守护者倒下了。然而，那空洞的平静并未离开森林。",
						"french": "Le gardien est tombé. Pourtant, sa paix creuse n'a pas quitté la forêt.",
						"spanish": "El guardián cayó. Sin embargo, su paz hueca no abandonó el bosque.",
						"vietnamese": "Người bảo hộ ngã xuống. Thế nhưng, sự bình yên trống rỗng đó vẫn không rời khỏi khu rừng.",
						"thai": "ผู้พิทักษ์ล้มลง แต่ความสงบที่ว่างเปล่านั้นก็ยังไม่จากป่าไป",
						"hindi": "अभिभावक गिर गया। फिर भी, उसकी खोखली शांति ने जंगल नहीं छोड़ा।"
					}
				},
				{
					"content": {
						"korean": "아직… 진짜 수호자는 만나지 못했다.",
						"english": "We still… haven't met the true guardian.",
						"japanese": "まだ… 真の守護者には会っていない。",
						"chinese": "我们还没… 见到真正的守护者。",
						"french": "Nous n'avons pas encore… rencontré le vrai gardien.",
						"spanish": "Todavía no… hemos encontrado al verdadero guardián.",
						"vietnamese": "Vẫn chưa… gặp được người bảo hộ thật sự.",
						"thai": "ยัง… ไม่ได้เจอผู้พิทักษ์ที่แท้จริง",
						"hindi": "अभी तक… असली अभिभावक से नहीं मिले।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "무의미한 저항이로군.",
						"english": "Meaningless resistance.",
						"japanese": "無意味な抵抗だな。",
						"chinese": "毫无意义的抵抗。",
						"french": "Résistance futile.",
						"spanish": "Resistencia inútil.",
						"vietnamese": "Sự kháng cự vô nghĩa.",
						"thai": "การต่อต้านที่ไร้ความหมาย",
						"hindi": "व्यर्थ का प्रतिरोध।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "너희도 곧… 이 평온 속에 잠들게 될 것이다.",
						"english": "You too shall soon… fall asleep in this peace.",
						"japanese": "お前たちもじき… この平穏の中に眠りにつくだろう。",
						"chinese": "你们很快也会… 在这平静中安眠。",
						"french": "Vous aussi, bientôt… vous endormirez dans cette paix.",
						"spanish": "Vosotros también, pronto… os dormiréis en esta paz.",
						"vietnamese": "Các ngươi cũng sẽ sớm… chìm vào giấc ngủ trong sự bình yên này.",
						"thai": "พวกเจ้าก็จะ… หลับใหลในความสงบนี้ในไม่ช้า",
						"hindi": "तुम भी जल्द… इस शांति में सो जाओगे।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…아직 끝나지 않았어.",
						"english": "…It's not over yet.",
						"japanese": "…まだ終わっていない。",
						"chinese": "…还没结束。",
						"french": "…Ce n'est pas encore fini.",
						"spanish": "…Todavía no ha terminado.",
						"vietnamese": "…Vẫn chưa kết thúc đâu.",
						"thai": "…ยังไม่จบ",
						"hindi": "…अभी खत्म नहीं हुआ है।"
					}
				}
			],
			"id": 15
		}
	]
} as const;
