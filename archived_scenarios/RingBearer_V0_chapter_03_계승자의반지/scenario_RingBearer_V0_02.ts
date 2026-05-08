export const scenario_RingBearer_V0_02 = {
	"scenario_id": "RingBearer_V0_02",
	"order": 2,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"king_borin": {
			"id": "mon_395623fe-f16c-4e32-a96d-b112c2b6b3e3",
			"name": {
				"korean": "보린 왕",
				"english": "King Borin",
				"japanese": "ボリン王",
				"chinese": "波林王",
				"french": "Roi Borin",
				"spanish": "Rey Borin",
				"vietnamese": "Vua Borin",
				"thai": "ราชาบอริน",
				"hindi": "राजा बोरिन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/47299a9c-6646-496d-6716-4b45f9c6f300/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/294303de-0ac2-4671-3674-09d5aec03300/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"무너진 왕좌의 회랑.",
			"썩어가는 황금빛 속에서.",
			"죽지 않는 왕이 깨어난다.",
			"반지의 향기가 모든 것을 깨웠다."
		],
		"english": [
			"The shattered throne's corridor.",
			"Amidst the decaying gold.",
			"The undying king awakens.",
			"The scent of the ring awakened all."
		],
		"japanese": [
			"崩れた玉座の回廊。",
			"朽ちゆく黄金の中で。",
			"死なざる王が目覚める。",
			"指輪の香りが全てを目覚めさせた。"
		],
		"chinese": [
			"破碎王座的回廊。",
			"在腐朽的金色中。",
			"不死之王苏醒。",
			"戒指的香气唤醒了一切。"
		],
		"french": [
			"Le couloir du trône brisé.",
			"Au milieu de l'or en décomposition.",
			"Le roi immortel s'éveille.",
			"L'odeur de l'anneau a tout réveillé."
		],
		"spanish": [
			"El corredor del trono destrozado.",
			"Entre el oro en descomposición.",
			"El rey imperecedero despierta.",
			"El aroma del anillo despertó todo."
		],
		"vietnamese": [
			"Hành lang ngai vàng đổ nát.",
			"Giữa ánh vàng mục nát.",
			"Vị vua bất tử thức tỉnh.",
			"Hương thơm của chiếc nhẫn đã đánh thức mọi thứ."
		],
		"thai": [
			"โถงทางเดินของบัลลังก์ที่พังทลาย.",
			"ท่ามกลางทองคำที่ผุพัง.",
			"ราชาผู้ไม่ตายตื่นขึ้น.",
			"กลิ่นของแหวนปลุกทุกสิ่งให้ตื่นขึ้น."
		],
		"hindi": [
			"टूटे हुए सिंहासन का गलियारा।",
			"सड़ते हुए स्वर्ण के बीच।",
			"अमर राजा जाग उठता है।",
			"अंगूठी की सुगंध ने सब कुछ जगा दिया।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "무너진 왕좌, 황금 파편들이 흩어져 있었다.",
						"english": "The ruined throne, golden fragments scattered.",
						"japanese": "崩れた玉座、黄金の破片が散らばっていた。",
						"chinese": "破碎的王座，金色碎片散落一地。",
						"french": "Le trône en ruine, des fragments d'or éparpillés.",
						"spanish": "El trono en ruinas, fragmentos dorados esparcidos.",
						"vietnamese": "Ngai vàng đổ nát, những mảnh vàng vương vãi.",
						"thai": "บัลลังก์ที่พังทลาย, เศษทองคำกระจัดกระจาย.",
						"hindi": "खंडित सिंहासन, सुनहरे टुकड़े बिखरे हुए थे।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "으음… 냄새가….",
						"english": "Ugh... that smell...",
						"japanese": "うぅん… 匂いが…。",
						"chinese": "嗯… 这味道…。",
						"french": "Hmm… cette odeur…",
						"spanish": "Mmm… ese olor…",
						"vietnamese": "Ưm… mùi gì thế…",
						"thai": "อืม… กลิ่นอะไรน่ะ…",
						"hindi": "उम्म… ये गंध…।"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "뭐야 이 기분 나쁜 향기는?",
						"english": "What is this unsettling scent?",
						"japanese": "なんだこの不快な香りは？",
						"chinese": "这是什么令人不适的香气？",
						"french": "Quelle est cette odeur inquiétante ?",
						"spanish": "¿Qué es este olor desagradable?",
						"vietnamese": "Mùi hương khó chịu này là gì?",
						"thai": "กลิ่นน่ารังเกียจนี้คืออะไร?",
						"hindi": "यह अप्रिय सुगंध क्या है?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "그것은… 내 것이다…",
						"english": "That is... mine...",
						"japanese": "それは… 私のものだ。",
						"chinese": "那是… 我的…",
						"french": "C'est… mien…",
						"spanish": "Eso es… mío…",
						"vietnamese": "Đó là… của ta…",
						"thai": "นั่นมัน… ของข้า…",
						"hindi": "वह… मेरा है…"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "누구냐!",
						"english": "Who's there!",
						"japanese": "誰だ！",
						"chinese": "谁？！",
						"french": "Qui est là !",
						"spanish": "¡¿Quién eres?!",
						"vietnamese": "Ai đó!",
						"thai": "ใครน่ะ!",
						"hindi": "कौन है!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 왕좌 뒤에서 솟아났다.",
						"english": "A colossal shadow rose from behind the throne.",
						"japanese": "巨大な影が玉座の後ろから現れた。",
						"chinese": "巨大的身影从王座后方升起。",
						"french": "Une ombre colossale surgit derrière le trône.",
						"spanish": "Una sombra colosal se alzó detrás del trono.",
						"vietnamese": "Một bóng đen khổng lồ trỗi dậy từ phía sau ngai vàng.",
						"thai": "เงาขนาดมหึมาผุดขึ้นจากด้านหลังบัลลังก์.",
						"hindi": "सिंहासन के पीछे से एक विशाल छाया उभरी।"
					},
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "저 왕관들 봐. 다 부서졌는데 똑같아.",
						"english": "Look at those crowns. All broken, yet identical.",
						"japanese": "あの王冠を見て。全部壊れてるのに、同じだ。",
						"chinese": "看那些王冠。都碎了，却一模一样。",
						"french": "Regarde ces couronnes. Toutes brisées, mais identiques.",
						"spanish": "Mira esas coronas. Todas rotas, pero idénticas.",
						"vietnamese": "Nhìn những vương miện kia kìa. Đều vỡ nát, nhưng y hệt nhau.",
						"thai": "ดูมงกุฎพวกนั้นสิ แตกหักหมดแล้ว แต่เหมือนกันเป๊ะเลย",
						"hindi": "उन मुकुटों को देखो। सब टूटे हुए हैं, फिर भी एक जैसे हैं।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "마치 한 사람이 계속 썼던 것처럼.",
						"english": "As if one person kept wearing them.",
						"japanese": "まるで、一人の人物がずっと使い続けていたかのように。",
						"chinese": "仿佛是同一个人一直在佩戴。",
						"french": "Comme si une seule personne les avait portées sans cesse.",
						"spanish": "Como si una sola persona los hubiera usado continuamente.",
						"vietnamese": "Cứ như thể một người duy nhất đã đội chúng liên tục vậy.",
						"thai": "ราวกับว่ามีคนเดียวที่สวมใส่มันมาตลอด",
						"hindi": "जैसे एक ही व्यक्ति उन्हें लगातार पहनता रहा हो।"
					},
					"emotion": "base",
					"speaker": "character_1"
				},
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"speaker": "king_borin"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그래. 이 회랑의 주인은… 집착했지.",
						"english": "Indeed. The master of this hall... was obsessive.",
						"japanese": "ああ。この回廊の主は…執着していた。",
						"chinese": "没错。这座回廊的主人……很执着。",
						"french": "Oui. Le maître de ce couloir... était obsessionnel.",
						"spanish": "Sí. El dueño de este pasillo... era obsesivo.",
						"vietnamese": "Đúng vậy. Chủ nhân của hành lang này... đã bị ám ảnh.",
						"thai": "จริงด้วย เจ้าของโถงทางเดินนี้... หมกมุ่นมาก",
						"hindi": "हाँ। इस गलियारे का स्वामी... जुनूनी था।"
					},
					"emotion": "base",
					"speaker": "king_borin"
				},
				{
					"emotion": "base",
					"speaker": "king_borin",
					"type": "speech",
					"content": {
						"korean": "모든 것을 손에 쥐려 했어.",
						"english": "He sought to grasp everything.",
						"japanese": "全てを手に入れようとしたのだ。",
						"chinese": "他想掌控一切。",
						"french": "Il voulait tout s'approprier.",
						"spanish": "Quería tenerlo todo en sus manos.",
						"vietnamese": "Hắn ta muốn nắm giữ mọi thứ.",
						"thai": "พยายามจะกำทุกสิ่งไว้ในมือ",
						"hindi": "वह सब कुछ अपने हाथ में लेना चाहता था।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "왕 보린? 어떻게 여기…",
						"english": "King Borin? How are you here...",
						"japanese": "ボリン王？なぜここに…",
						"chinese": "博林王？你怎么会在这……",
						"french": "Roi Borin ? Comment êtes-vous ici...",
						"spanish": "¿Rey Borin? ¿Cómo es que está aquí...?",
						"vietnamese": "Vua Borin? Sao người lại ở đây...",
						"thai": "กษัตริย์โบริน? มาที่นี่ได้ยังไง...",
						"hindi": "राजा बोरिन? तुम यहाँ कैसे..."
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "king_borin",
					"type": "speech",
					"content": {
						"korean": "반지의 향기가 우릴 불렀다. 네가 가진 그… 물건의 향기.",
						"english": "The scent of the ring called to us. The scent of that... thing you hold.",
						"japanese": "指輪の香りが我らを呼んだ。お前が持つあの…物の香りだ。",
						"chinese": "戒指的香气把我们召唤而来。你身上那……东西的香气。",
						"french": "Le parfum de l'anneau nous a appelés. Le parfum de cet... objet que tu portes.",
						"spanish": "El aroma del anillo nos llamó. El aroma de ese... objeto que tienes.",
						"vietnamese": "Mùi hương của chiếc nhẫn đã gọi chúng ta. Mùi hương của cái... thứ mà ngươi đang giữ.",
						"thai": "กลิ่นของแหวนเรียกพวกเรามา กลิ่นของ...สิ่งนั้นที่เจ้ามี",
						"hindi": "अंगूठी की सुगंध ने हमें बुलाया। तुम्हारे पास जो... वस्तु है, उसकी सुगंध।"
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "king_borin",
					"spot": [
						4,
						2
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "서둘러야 해.",
						"english": "We must hurry.",
						"japanese": "急がなければ。",
						"chinese": "我们得快点。",
						"french": "Nous devons nous dépêcher.",
						"spanish": "Debemos darnos prisa.",
						"vietnamese": "Chúng ta phải nhanh lên.",
						"thai": "เราต้องรีบแล้ว",
						"hindi": "हमें जल्दी करनी होगी।"
					},
					"type": "speech",
					"speaker": "king_borin",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "왜요?",
						"english": "Why?",
						"japanese": "なぜですか？",
						"chinese": "为什么？",
						"french": "Pourquoi ?",
						"spanish": "¿Por qué?",
						"vietnamese": "Tại sao?",
						"thai": "ทำไมคะ?",
						"hindi": "क्यों?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "king_borin",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "유령 군세가 몰려온다.",
						"english": "The ghost army approaches.",
						"japanese": "幽霊の軍勢が迫っている。",
						"chinese": "幽灵大军正在逼近。",
						"french": "L'armée fantôme approche.",
						"spanish": "El ejército fantasma se acerca.",
						"vietnamese": "Quân đoàn ma đang ùa tới.",
						"thai": "กองทัพภูตผีเข้าใกล้มาแล้ว",
						"hindi": "भूतों की सेना आ रही है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "회랑 끝에서 거대한 유령 형상들이 모습을 드러냈다.",
						"english": "At the end of the hall, colossal ghost figures appeared.",
						"japanese": "回廊の奥から、巨大な幽霊の影が姿を現した。",
						"chinese": "在回廊尽头，巨大的幽灵身形显现了。",
						"french": "Au bout du couloir, d'énormes figures fantomatiques sont apparues.",
						"spanish": "Al final del pasillo, gigantescas figuras fantasmales aparecieron.",
						"vietnamese": "Ở cuối hành lang, những hình dáng ma quỷ khổng lồ đã xuất hiện.",
						"thai": "ที่ปลายโถงทางเดิน ร่างเงายักษ์ของภูตผีปรากฏขึ้น",
						"hindi": "गलियारे के अंत में, विशालकाय भूत-प्रेत प्रकट हुए।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "세상에!",
						"english": "Heavens!",
						"japanese": "なんてことだ！",
						"chinese": "天哪！",
						"french": "Ciel !",
						"spanish": "¡Cielos!",
						"vietnamese": "Trời ơi!",
						"thai": "พระเจ้าช่วย!",
						"hindi": "हे भगवान!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "king_borin",
					"spot": [
						4,
						2
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "base",
					"speaker": "king_borin",
					"type": "speech",
					"content": {
						"korean": "서둘러. 시간이 없어.",
						"english": "Hurry. No time.",
						"japanese": "急げ。時間がない。",
						"chinese": "快点。没时间了。",
						"french": "Dépêche-toi. Pas le temps.",
						"spanish": "Date prisa. No hay tiempo.",
						"vietnamese": "Nhanh lên. Không có thời gian.",
						"thai": "เร็วเข้า. ไม่มีเวลาแล้ว.",
						"hindi": "जल्दी करो। समय नहीं है।"
					}
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "너무 많아요!",
						"english": "Too many!",
						"japanese": "多すぎる！",
						"chinese": "太多了！",
						"french": "Trop nombreux !",
						"spanish": "¡Demasiados!",
						"vietnamese": "Nhiều quá!",
						"thai": "เยอะเกินไปแล้ว!",
						"hindi": "बहुत ज़्यादा!"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "…한 번만… 손에 올려놓아봐… 이해할 수 있을 거야…",
						"english": "...Just once... put it in your hand... you'll understand...",
						"japanese": "…一度だけ…手に取ってみて…理解できるだろう…",
						"chinese": "……就一次……放在你手上……你就会明白的……",
						"french": "...Juste une fois... prends-le dans ta main... tu comprendras...",
						"spanish": "...Solo una vez... ponlo en tu mano... lo entenderás...",
						"vietnamese": "...Chỉ một lần thôi... đặt nó vào tay ngươi... ngươi sẽ hiểu thôi...",
						"thai": "...แค่ครั้งเดียว...ลองวางไว้ในมือดูสิ...แล้วจะเข้าใจเอง...",
						"hindi": "...बस एक बार... इसे अपने हाथ में रखो... तुम समझ जाओगे..."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_3",
					"content": {
						"korean": "무슨 소리지? 방금 환청 들었어?",
						"english": "What was that? Did I just hear things?",
						"japanese": "今のは何だ？幻聴か？",
						"chinese": "什么声音？我刚才出现幻听了吗？",
						"french": "Qu'est-ce que c'était ? J'ai eu une hallucination auditive ?",
						"spanish": "¿Acabo de tener una alucinación?",
						"vietnamese": "Cái gì vậy? Vừa rồi ta nghe thấy ảo giác sao?",
						"thai": "นั่นอะไรน่ะ? ฉันได้ยินเสียงหลอนเหรอ?",
						"hindi": "वह क्या था? क्या मुझे अभी-अभी मतिभ्रम हुआ?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "무시해라. 그저 속삭이는 허상일 뿐.",
						"english": "Ignore it. It's just a whispering illusion.",
						"japanese": "無視しろ。ただの囁く幻影だ。",
						"chinese": "别理它。那只是低语的幻象。",
						"french": "Ignore-le. Ce n'est qu'une illusion chuchotante.",
						"spanish": "Ignóralo. Es solo una ilusión susurrante.",
						"vietnamese": "Bỏ qua đi. Đó chỉ là một ảo ảnh thì thầm.",
						"thai": "ช่างมันเถอะ. มันเป็นแค่ภาพลวงตาที่กระซิบกระซาบ.",
						"hindi": "इसे अनदेखा करो। यह सिर्फ़ एक फुसफुसाता भ्रम है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "king_borin"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "그것은… 내 것이다!",
						"english": "That... is mine!",
						"japanese": "それは…私のものだ！",
						"chinese": "那是……我的！",
						"french": "Ça... c'est à moi !",
						"spanish": "¡Eso... es mío!",
						"vietnamese": "Đó... là của ta!",
						"thai": "นั่นมัน...ของฉัน!",
						"hindi": "वह... मेरा है!"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네 것이 아니야!",
						"english": "It's not yours!",
						"japanese": "お前のものじゃない！",
						"chinese": "那不是你的！",
						"french": "Ce n'est pas à toi !",
						"spanish": "¡No es tuyo!",
						"vietnamese": "Không phải của ngươi!",
						"thai": "ไม่ใช่ของแก!",
						"hindi": "यह तुम्हारा नहीं है!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "king_borin",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "내가 길을 열겠다!",
						"english": "I'll open the way!",
						"japanese": "私が道を開こう！",
						"chinese": "我来开路！",
						"french": "J'ouvrirai le chemin !",
						"spanish": "¡Yo abriré el camino!",
						"vietnamese": "Ta sẽ mở đường!",
						"thai": "ฉันจะเปิดทางเอง!",
						"hindi": "मैं रास्ता खोलूँगा!"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "king_borin"
				},
				{
					"speaker": "king_borin",
					"emotion": "base",
					"content": {
						"korean": "너희는 빨리 통과해!",
						"english": "You all, pass through quickly!",
						"japanese": "お前たちは早く通り抜けろ！",
						"chinese": "你们快通过！",
						"french": "Vous, passez vite !",
						"spanish": "¡Pasad rápido!",
						"vietnamese": "Các ngươi mau đi qua đi!",
						"thai": "พวกแกรีบผ่านไปซะ!",
						"hindi": "तुम सब जल्दी निकलो!"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "왕 보린! 안 돼!",
						"english": "King Borin! No!",
						"japanese": "ボーリン王！ダメだ！",
						"chinese": "鲍林王！不！",
						"french": "Roi Borin ! Non !",
						"spanish": "¡Rey Borin! ¡No!",
						"vietnamese": "Vua Borin! Không!",
						"thai": "กษัตริย์โบรีน! ไม่นะ!",
						"hindi": "राजा बोरिन! नहीं!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"action": "exit",
					"type": "direction",
					"direction": "up",
					"speaker": "king_borin",
					"duration_ms": 500
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "영원히… 끝나지 않아…",
						"english": "Forever… it never ends…",
						"japanese": "永遠に…終わらない…",
						"chinese": "永远…不会结束…",
						"french": "Pour toujours… ça ne finit jamais…",
						"spanish": "Para siempre… nunca termina…",
						"vietnamese": "Mãi mãi… không bao giờ kết thúc…",
						"thai": "ตลอดไป… ไม่มีวันจบ…",
						"hindi": "हमेशा के लिए… यह कभी खत्म नहीं होगा…"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"emotion": "happy",
					"content": {
						"korean": "끝났어!",
						"english": "It's over!",
						"japanese": "終わった！",
						"chinese": "结束了！",
						"french": "C'est fini !",
						"spanish": "¡Se acabó!",
						"vietnamese": "Xong rồi!",
						"thai": "จบแล้ว!",
						"hindi": "यह खत्म हो गया!"
					},
					"type": "speech"
				},
				{
					"spot": [
						4,
						2
					],
					"speaker": "king_borin",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "base",
					"speaker": "king_borin",
					"type": "speech",
					"content": {
						"korean": "잘 해냈군.",
						"english": "Well done.",
						"japanese": "よくやった。",
						"chinese": "干得好。",
						"french": "Bien joué.",
						"spanish": "Bien hecho.",
						"vietnamese": "Làm tốt lắm.",
						"thai": "ทำได้ดีมาก",
						"hindi": "शाबाश।"
					}
				},
				{
					"content": {
						"korean": "왕 보린! 무사했어요?",
						"english": "King Borin! Are you safe?",
						"japanese": "ボーリン王！ご無事でしたか？",
						"chinese": "鲍林王！你没事吧？",
						"french": "Roi Borin ! Êtes-vous sain et sauf ?",
						"spanish": "¡Rey Borin! ¿Está a salvo?",
						"vietnamese": "Vua Borin! Người có an toàn không?",
						"thai": "กษัตริย์โบรีน! ปลอดภัยไหม?",
						"hindi": "राजा बोरिन! क्या आप सुरक्षित हैं?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "happy"
				},
				{
					"emotion": "base",
					"speaker": "king_borin",
					"type": "speech",
					"content": {
						"korean": "방금… 그림자가 둘로 보였어.",
						"english": "Just now… I saw two shadows.",
						"japanese": "今…影が二つに見えた。",
						"chinese": "刚才…我看到了两个影子。",
						"french": "Tout à l'heure… j'ai vu deux ombres.",
						"spanish": "Justo ahora… vi dos sombras.",
						"vietnamese": "Vừa nãy… ta thấy hai cái bóng.",
						"thai": "เมื่อกี้… ฉันเห็นเงาเป็นสองร่าง",
						"hindi": "अभी… मैंने दो परछाइयाँ देखीं।"
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "왕 보린의 그림자, 잠시 흔들리는 듯했다.",
						"english": "King Borin's shadow seemed to waver for a moment.",
						"japanese": "ボーリン王の影が、一瞬揺らいだように見えた。",
						"chinese": "鲍林王的影子，似乎短暂地晃动了一下。",
						"french": "L'ombre du roi Borin a semblé vaciller un instant.",
						"spanish": "La sombra del rey Borin pareció temblar por un momento.",
						"vietnamese": "Bóng của Vua Borin dường như rung động một thoáng.",
						"thai": "เงาของกษัตริย์โบรีนดูเหมือนจะสั่นไหวชั่วขณะ",
						"hindi": "राजा बोरिन की परछाईं कुछ पल के लिए हिलती हुई लग रही थी।"
					},
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "반지의 환청은 더욱 선명해졌다.",
						"english": "The ring's phantom voices grew clearer.",
						"japanese": "指輪の幻聴は、さらに鮮明になった。",
						"chinese": "戒指的幻听变得更加清晰。",
						"french": "Les voix fantômes de l'anneau devinrent plus claires.",
						"spanish": "Las voces fantasma del anillo se hicieron más claras.",
						"vietnamese": "Ảo thanh từ chiếc nhẫn trở nên rõ ràng hơn.",
						"thai": "เสียงหลอนจากแหวนชัดเจนขึ้น",
						"hindi": "अंगूठी की भ्रामक आवाज़ें और स्पष्ट हो गईं।"
					},
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "무릎 꿇어라… 내 왕국에…",
						"english": "Kneel… to my kingdom…",
						"japanese": "ひざまずけ…我が王国に…",
						"chinese": "跪下吧…在我的王国面前…",
						"french": "Agenouille-toi… devant mon royaume…",
						"spanish": "Arrodíllate… ante mi reino…",
						"vietnamese": "Quỳ xuống… trước vương quốc của ta…",
						"thai": "คุกเข่าซะ… ต่อหน้าอาณาจักรของข้า…",
						"hindi": "घुटने टेक… मेरे राज्य में…"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아직… 끝나지 않았어!",
						"english": "It's not… over yet!",
						"japanese": "まだ…終わってない！",
						"chinese": "还没…结束！",
						"french": "Ce n'est pas… encore fini !",
						"spanish": "¡Aún no… ha terminado!",
						"vietnamese": "Vẫn chưa… kết thúc!",
						"thai": "ยัง… ไม่จบ!",
						"hindi": "अभी… खत्म नहीं हुआ है!"
					}
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "재밌는 자로군. 계속 버텨봐라.",
						"english": "You're an interesting one. Keep enduring.",
						"japanese": "面白い奴だ。持ちこたえてみろ。",
						"chinese": "你很有趣。继续坚持下去吧。",
						"french": "Tu es intéressant. Continue de tenir bon.",
						"spanish": "Eres interesante. Intenta resistir.",
						"vietnamese": "Ngươi khá thú vị đấy. Cứ tiếp tục chống chịu đi.",
						"thai": "เจ้าเป็นคนที่น่าสนใจดีนี่ ลองอดทนต่อไปสิ",
						"hindi": "तुम दिलचस्प हो। देखते हैं कब तक टिके रहते हो।"
					}
				}
			]
		}
	]
} as const;
