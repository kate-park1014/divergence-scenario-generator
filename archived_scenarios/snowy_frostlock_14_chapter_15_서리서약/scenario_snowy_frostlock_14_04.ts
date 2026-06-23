export const scenario_snowy_frostlock_14_04 = {
	"scenario_id": "snowy_frostlock_14_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"bran": {
			"id": "mon_985fcdcc-1bf2-4822-aa2f-292ae9353456",
			"name": {
				"korean": "브란",
				"english": "Bran",
				"japanese": "ブラン",
				"chinese": "布兰",
				"french": "Bran",
				"spanish": "Bran",
				"vietnamese": "Bran",
				"thai": "แบรน",
				"hindi": "ब्रैन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/42cde50b-7453-47b1-04df-73500ad21d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/4ecba7ed-ec7e-4a8e-74dc-bf3e711b4d00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"설원의 모든 거래에는 대가가 따른다.",
			"프로스트록의 친절은 달콤한 독이었다.",
			"한 생존자의 눈물은 감춰진 진실을 드러낸다.",
			"이제, 그 빚의 실체가 드러날 시간."
		],
		"english": [
			"Every transaction in the snowfields comes with a price.",
			"Frostrock's kindness was a sweet poison.",
			"A survivor's tears reveal a hidden truth.",
			"Now, the true nature of that debt shall be revealed."
		],
		"japanese": [
			"雪原での全ての取引には代償が伴う。",
			"フロストロックの優しさは甘い毒だった。",
			"一人の生存者の涙が隠された真実を明らかにする。",
			"今、その負債の真実が明らかになる時。"
		],
		"chinese": [
			"雪原上的每笔交易都有代价。",
			"霜岩的仁慈是甜蜜的毒药。",
			"一个幸存者的泪水揭示了隐藏的真相。",
			"现在，是时候揭示那笔债务的真面目了。"
		],
		"french": [
			"Toute transaction dans les étendues enneigées a un prix.",
			"La gentillesse de Frostrock était un doux poison.",
			"Les larmes d'un survivant révèlent une vérité cachée.",
			"Maintenant, il est temps que la véritable nature de cette dette soit révélée."
		],
		"spanish": [
			"Toda transacción en los campos nevados tiene un precio.",
			"La amabilidad de Frostrock era un dulce veneno.",
			"Las lágrimas de un superviviente revelan una verdad oculta.",
			"Ahora, es el momento de que la verdadera naturaleza de esa deuda sea revelada."
		],
		"vietnamese": [
			"Mọi giao dịch trên cánh đồng tuyết đều có cái giá của nó.",
			"Lòng tốt của Frostrock là một liều thuốc độc ngọt ngào.",
			"Nước mắt của một người sống sót hé lộ sự thật bị che giấu.",
			"Giờ đây, đã đến lúc bản chất thật sự của món nợ đó được hé lộ."
		],
		"thai": [
			"ทุกการแลกเปลี่ยนในทุ่งหิมะย่อมมีราคาที่ต้องจ่าย",
			"ความเมตตาของฟรอสต์ร็อคคือน้ำยาพิษอันหอมหวาน",
			"น้ำตาของผู้รอดชีวิตเผยความจริงที่ซ่อนอยู่",
			"ถึงเวลาแล้วที่จะเปิดเผยตัวตนที่แท้จริงของหนี้สินนั้น"
		],
		"hindi": [
			"बर्फीले मैदानों में हर लेन-देन की कीमत होती है।",
			"फ्रॉस्टरोक की दया एक मीठा ज़हर थी।",
			"एक बचे हुए की आँखों के आँसू छिपी हुई सच्चाई उजागर करते हैं।",
			"अब, उस कर्ज की असलियत सामने आने का समय है।"
		]
	},
	"rooms": [
		{
			"lose_dialogue": [],
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "음산한 얼음 동굴. 희미한 빛마저 얼어붙은 듯했다.",
						"english": "A gloomy ice cave. Even the faint light seemed frozen.",
						"japanese": "不気味な氷の洞窟。かすかな光さえ凍りついているようだった。",
						"chinese": "阴森的冰洞。连微弱的光线都仿佛被冻结了。",
						"french": "Une grotte de glace lugubre. Même la faible lumière semblait figée.",
						"spanish": "Una cueva de hielo sombría. Incluso la tenue luz parecía congelada.",
						"vietnamese": "Một hang động băng u ám. Ngay cả ánh sáng yếu ớt cũng như đóng băng.",
						"thai": "ถ้ำน้ำแข็งที่มืดมิด แม้แต่แสงสลัวก็ดูเหมือนจะแข็งตัว",
						"hindi": "एक भयानक बर्फीली गुफा। यहाँ तक कि मंद रोशनी भी जमी हुई लग रही थी।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "여기서도 흔적은 찾을 수 없어. 프로스트록의 정보는 다 이 모양인가?",
						"english": "No traces here either. Is all of Frostrock's intel like this?",
						"japanese": "ここでも痕跡は見つからない。フロストロックの情報はいつもこうなのか？",
						"chinese": "这里也没有线索。霜岩的情报都这样吗？",
						"french": "Pas de traces ici non plus. Toutes les informations de Frostrock sont-elles comme ça ?",
						"spanish": "Aquí tampoco hay rastro. ¿Es así toda la información de Frostrock?",
						"vietnamese": "Ở đây cũng không tìm thấy dấu vết nào. Thông tin của Frostrock đều như thế này sao?",
						"thai": "ที่นี่ก็ไม่มีร่องรอยเช่นกัน ข้อมูลของฟรอสต์ร็อคเป็นแบบนี้ไปหมดเลยหรือไง?",
						"hindi": "यहाँ भी कोई निशान नहीं। क्या फ्रॉストरोक की सारी जानकारी ऐसी ही होती है?"
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "bran"
				},
				{
					"speaker": "bran",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…아니… 여기… 오지 말았어야 했는데…",
						"english": "...No... I shouldn't have come here...",
						"japanese": "…いや…ここには…来るべきじゃなかった…",
						"chinese": "...不... 我不该来这里的...",
						"french": "...Non... Je n'aurais pas dû venir ici...",
						"spanish": "...No... No debí haber venido aquí...",
						"vietnamese": "...Không... lẽ ra tôi không nên đến đây...",
						"thai": "...ไม่... ฉันไม่น่ามาที่นี่เลย...",
						"hindi": "...नहीं... मुझे यहाँ नहीं आना चाहिए था..."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "당신… 괜찮아요? 무슨 일이라도…",
						"english": "Are you... alright? Is something wrong...?",
						"japanese": "あなた…大丈夫ですか？何かあったんですか…？",
						"chinese": "你…还好吗？是不是发生什么事了…",
						"french": "Vous... allez bien ? Qu'est-ce qui ne va pas... ?",
						"spanish": "¿Usted... está bien? ¿Pasa algo...?",
						"vietnamese": "Anh/chị... ổn chứ? Có chuyện gì vậy...?",
						"thai": "คุณ... ไม่เป็นไรใช่ไหม? เกิดอะไรขึ้น...",
						"hindi": "आप... ठीक हैं? क्या कोई बात है...?"
					}
				},
				{
					"content": {
						"korean": "프로스트록… 그 이름을… 믿지 마…",
						"english": "Frostrock... Don't trust... that name...",
						"japanese": "フロストロック…その名前を…信じるな…",
						"chinese": "霜岩... 别相信... 那个名字...",
						"french": "Frostrock... Ne faites pas confiance... à ce nom...",
						"spanish": "Frostrock... No confíes... en ese nombre...",
						"vietnamese": "Frostrock... Đừng tin... cái tên đó...",
						"thai": "ฟรอสต์ร็อค... อย่าเชื่อ... ชื่อนั้น...",
						"hindi": "फ्रॉस्टरोक... उस नाम पर... भरोसा मत करना..."
					},
					"speaker": "bran",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"win_dialogue": []
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "브란의 눈빛은 깊은 상실감과 두려움으로 가득했다.",
						"english": "Bran's eyes were filled with deep loss and fear.",
						"japanese": "ブランの瞳は深い喪失感と恐怖に満ちていた。",
						"chinese": "布兰的眼神充满了深深的失落与恐惧。",
						"french": "Le regard de Bran était rempli d'une profonde perte et de peur.",
						"spanish": "La mirada de Bran estaba llena de profunda pérdida y miedo.",
						"vietnamese": "Ánh mắt của Bran tràn ngập sự mất mát sâu sắc và nỗi sợ hãi.",
						"thai": "แววตาของแบรนเต็มไปด้วยความสูญเสียและความหวาดกลัวอย่างสุดซึ้ง",
						"hindi": "ब्रैन की आँखों में गहरी क्षति और डर भरा था।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "bran"
				},
				{
					"content": {
						"korean": "나는 길을 잃었었어… 모든 걸 포기하려 할 때… 그가 나타났지.",
						"english": "I was lost... just when I was about to give up everything... he appeared.",
						"japanese": "道に迷っていた…全てを諦めようとした時…彼が現れたんだ。",
						"chinese": "我迷路了……就在我准备放弃一切的时候……他出现了。",
						"french": "J'étais perdue... Juste quand j'étais sur le point de tout abandonner... il est apparu.",
						"spanish": "Estaba perdida... Justo cuando estaba a punto de rendirme... él apareció.",
						"vietnamese": "Tôi đã lạc lối... Ngay khi tôi định từ bỏ tất cả... anh ta đã xuất hiện.",
						"thai": "ฉันหลงทาง... ตอนที่ฉันกำลังจะยอมแพ้ทุกอย่าง... เขาก็ปรากฏตัว",
						"hindi": "मैं भटक गया था... जब मैं सब कुछ छोड़ने वाला था... वह प्रकट हुआ।"
					},
					"emotion": "sad",
					"speaker": "bran",
					"type": "speech"
				},
				{
					"content": {
						"korean": "프로스트록이요? 그가 당신을 도왔나요?",
						"english": "Frostrok? Did he help you?",
						"japanese": "フロストロックですか？ 彼があなたを助けたのですか？",
						"chinese": "弗罗斯特洛克？他帮了你吗？",
						"french": "Frostrok ? Il vous a aidé ?",
						"spanish": "¿Frostrok? ¿Él te ayudó?",
						"vietnamese": "Frostrok? Hắn đã giúp ngài sao?",
						"thai": "ฟรอสทรอค? เขาช่วยคุณเหรอ?",
						"hindi": "फ्रॉस्ट्रोक? क्या उसने आपकी मदद की?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그래. 그는 완벽한 길을 알려줬어. 얼어붙은 몸도 녹여줬고…",
						"english": "Yes. He showed me the perfect path. And he thawed my frozen body...",
						"japanese": "ああ。彼は完璧な道を教えてくれた。凍てついた体も溶かしてくれて…",
						"chinese": "是的。他指引了一条完美的道路。还融化了我冰冻的身体……",
						"french": "Oui. Il m'a montré le chemin parfait. Et il a réchauffé mon corps gelé...",
						"spanish": "Sí. Me mostró el camino perfecto. Y descongeló mi cuerpo congelado...",
						"vietnamese": "Đúng vậy. Hắn đã chỉ cho tôi con đường hoàn hảo. Còn làm tan chảy cơ thể đóng băng của tôi...",
						"thai": "ใช่ เขาบอกทางที่สมบูรณ์แบบให้ฉัน และเขาก็ละลายร่างที่แข็งของฉันด้วย...",
						"hindi": "हाँ। उसने मुझे सही रास्ता दिखाया। और उसने मेरे जमे हुए शरीर को भी पिघला दिया..."
					},
					"speaker": "bran",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "너무 완벽해서… 의심할 여지조차 없었지. 그 친절이… 독인 줄도 모르고.",
						"english": "Too perfect... there was no room for doubt. Not knowing that kindness... was poison.",
						"japanese": "完璧すぎて…疑う余地さえなかった。その親切が…毒だとは知らずに。",
						"chinese": "太完美了……甚至没有怀疑的余地。却不知那份善意……是剧毒。",
						"french": "Trop parfait... il n'y avait aucune place au doute. Ne sachant pas que cette gentillesse... était un poison.",
						"spanish": "Demasiado perfecto... no había lugar para la duda. Sin saber que esa amabilidad... era veneno.",
						"vietnamese": "Quá hoàn hảo... không một chút nghi ngờ. Mà không biết rằng sự tử tế ấy... là độc dược.",
						"thai": "สมบูรณ์แบบเกินไป... จนไม่มีที่ว่างให้สงสัย ไม่รู้เลยว่าความเมตตานั้น... คือยาพิษ",
						"hindi": "इतना सही... कि शक की कोई गुंजाइश नहीं थी। यह जाने बिना कि वह दया... ज़हर थी।"
					},
					"emotion": "sad",
					"speaker": "bran",
					"type": "speech"
				}
			],
			"win_dialogue": [],
			"id": 3,
			"lose_dialogue": []
		},
		{
			"lose_dialogue": [],
			"id": 5,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "브란은 고개를 숙였다. 흐느끼는 어깨가 심하게 떨렸다.",
						"english": "Bran bowed his head. His sobbing shoulders trembled violently.",
						"japanese": "ブランは頭を垂れた。すすり泣く肩が激しく震えた。",
						"chinese": "布兰低下头。他抽泣的肩膀剧烈颤抖着。",
						"french": "Bran baissa la tête. Ses épaules sanglotantes tremblaient violemment.",
						"spanish": "Bran inclinó la cabeza. Sus hombros sollozantes temblaban violentamente.",
						"vietnamese": "Bran cúi đầu. Đôi vai đang nức nở của anh run lên dữ dội.",
						"thai": "แบรนก้มหน้าลง ไหล่ที่สะอื้นไห้ของเขาสั่นสะท้านอย่างรุนแรง",
						"hindi": "ब्रान ने सिर झुकाया। उसके सिसकते हुए कंधे बुरी तरह काँप रहे थे।"
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "bran"
				},
				{
					"content": {
						"korean": "그는 아무것도 바라지 않는다고 했어… 내가 무사히 돌아가길 바란다고.",
						"english": "He said he wanted nothing... only for me to return safely.",
						"japanese": "彼は何も望まないと言った…ただ私が無事に帰ることを願うと。",
						"chinese": "他说他什么都不想要……只希望我能平安回去。",
						"french": "Il a dit qu'il ne voulait rien... seulement que je revienne en toute sécurité.",
						"spanish": "Dijo que no quería nada... solo que yo regresara a salvo.",
						"vietnamese": "Hắn nói hắn không muốn gì cả... chỉ mong tôi bình an trở về.",
						"thai": "เขาบอกว่าเขาไม่ต้องการอะไร... แค่หวังให้ฉันกลับมาอย่างปลอดภัย",
						"hindi": "उसने कहा कि उसे कुछ नहीं चाहिए... बस मैं सुरक्षित लौट आऊँ।"
					},
					"speaker": "bran",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "그럼… 무슨 대가를 치렀다는 거죠?",
						"english": "Then... what price did you pay?",
						"japanese": "では…どんな代償を払ったのですか？",
						"chinese": "那么……你付出了什么代价？",
						"french": "Alors... quel prix avez-vous payé ?",
						"spanish": "Entonces... ¿qué precio pagaste?",
						"vietnamese": "Vậy thì... ngài đã phải trả giá như thế nào?",
						"thai": "แล้ว... คุณต้องแลกกับอะไร?",
						"hindi": "तो... आपने क्या कीमत चुकाई?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "bran",
					"type": "speech",
					"content": {
						"korean": "내가 가장 사랑했던 모든 것. 내 가족… 내 기억… 모든 것이 사라졌어.",
						"english": "Everything I loved most. My family... my memories... everything vanished.",
						"japanese": "私が最も愛していたもの全て。私の家族…私の記憶…全てが消え去った。",
						"chinese": "我最爱的一切。我的家人……我的记忆……一切都消失了。",
						"french": "Tout ce que j'aimais le plus. Ma famille... mes souvenirs... tout a disparu.",
						"spanish": "Todo lo que más amaba. Mi familia... mis recuerdos... todo desapareció.",
						"vietnamese": "Tất cả những gì tôi yêu quý nhất. Gia đình tôi... ký ức của tôi... tất cả đã biến mất.",
						"thai": "ทุกสิ่งที่ฉันรักที่สุด ครอบครัวของฉัน... ความทรงจำของฉัน... ทุกอย่างหายไปแล้ว",
						"hindi": "जो कुछ मुझे सबसे ज़्यादा प्यारा था। मेरा परिवार... मेरी यादें... सब कुछ मिट गया।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "bran",
					"type": "speech",
					"content": {
						"korean": "내가 살아있는 대가로… 그 모든 걸 잃은 거야.",
						"english": "As the price for my survival... I lost everything.",
						"japanese": "私が生きている代償として…その全てを失ったんだ。",
						"chinese": "为了我能活下去……我失去了所有那些。",
						"french": "En échange de ma survie... j'ai tout perdu.",
						"spanish": "Como precio por mi supervivencia... lo perdí todo.",
						"vietnamese": "Để đổi lấy sự sống của tôi... tôi đã mất đi tất cả.",
						"thai": "เพื่อแลกกับการมีชีวิตอยู่... ฉันเสียทุกอย่างไป",
						"hindi": "मेरे जीवित रहने की कीमत पर... मैंने वह सब कुछ खो दिया।"
					}
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…그럴 수가…",
						"english": "...That can't be...",
						"japanese": "…そんな…",
						"chinese": "……怎么会这样……",
						"french": "...C'est impossible...",
						"spanish": "...No puede ser...",
						"vietnamese": "...Không thể nào...",
						"thai": "...เป็นไปไม่ได้...",
						"hindi": "...ऐसा नहीं हो सकता..."
					}
				},
				{
					"content": {
						"korean": "너무 완벽한 도움은… 결국 더 큰 빚이 되어 돌아와.",
						"english": "Too perfect a help… ultimately returns as a greater debt.",
						"japanese": "あまりにも完璧な助けは… 結局、より大きな借となって戻ってくる。",
						"chinese": "过于完美的帮助… 最终会变成更大的负担。",
						"french": "Une aide trop parfaite… finit par se transformer en une dette plus lourde.",
						"spanish": "Una ayuda demasiado perfecta… al final se convierte en una deuda mayor.",
						"vietnamese": "Sự giúp đỡ quá hoàn hảo… rốt cuộc sẽ trở thành một món nợ lớn hơn.",
						"thai": "ความช่วยเหลือที่สมบูรณ์แบบเกินไป… ท้ายที่สุดแล้วจะกลายเป็นหนี้ก้อนใหญ่กว่าเดิม.",
						"hindi": "अत्यधिक उत्तम सहायता… अंततः एक बड़ा ऋण बन कर लौट आती है।"
					},
					"speaker": "bran",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"win_dialogue": []
		},
		{
			"id": 9,
			"lose_dialogue": [],
			"dialogue": [
				{
					"content": {
						"korean": "브란의 목소리가 절규에 가까웠다. 그의 눈물은 차갑게 얼어붙었다.",
						"english": "Bran's voice was a near shriek. His tears froze solid.",
						"japanese": "ブランの声は絶叫に近かった。彼の涙は冷たく凍りついた。",
						"chinese": "布兰的声音近乎绝望的尖叫。他的眼泪冰冷地凝结了。",
						"french": "La voix de Bran était proche d'un hurlement. Ses larmes s'étaient figées de froid.",
						"spanish": "La voz de Bran era casi un grito. Sus lágrimas se congelaron.",
						"vietnamese": "Giọng Bran gần như một tiếng kêu gào. Nước mắt anh đóng băng lạnh giá.",
						"thai": "เสียงของบรานใกล้จะเป็นเสียงกรีดร้อง น้ำตาของเขาแข็งตัวอย่างเย็นชา.",
						"hindi": "ब्रान की आवाज़ चीख़ के करीब थी। उसके आँसू ठंडे होकर जम गए थे।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "bran",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "저 놈이 너희에게도 손을 뻗었겠지. 친절한 얼굴로… 너희도 똑같이 될 거야.",
						"english": "He must have reached out to you too. With a kind face… you'll end up just like us.",
						"japanese": "あの男が、お前たちにも手を伸ばしたんだろう。優しい顔で… お前たちも同じようになる。",
						"chinese": "那个家伙也向你们伸出手了吧。带着一张友善的脸… 你们也会变成一样的。",
						"french": "Il a sûrement tendu la main vers vous aussi. Avec un visage aimable… vous finirez pareils.",
						"spanish": "Ese tipo también os habrá tendido la mano. Con una cara amable… acabaréis igual.",
						"vietnamese": "Hắn ta chắc cũng đã vươn tay tới các ngươi rồi. Với vẻ mặt thân thiện… các ngươi cũng sẽ trở nên giống hệt.",
						"thai": "เจ้าหมอนั่นต้องยื่นมือมาหาพวกเจ้าด้วยแน่ๆ ด้วยใบหน้าที่ใจดี… พวกเจ้าก็จะกลายเป็นแบบเดียวกัน.",
						"hindi": "उस ने तुम तक भी पहुँच बनाई होगी। एक दयालु चेहरे के साथ… तुम भी वैसे ही बन जाओगे।"
					},
					"speaker": "bran",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "우리는… 우리가 뭘 잃게 될지는 몰라. 하지만 멈출 수 없어.",
						"english": "We… don't know what we'll lose. But we can't stop.",
						"japanese": "私たちは… 何を失うか分からない。でも、止まることはできない。",
						"chinese": "我们… 不知道会失去什么。但我们不能停下。",
						"french": "Nous… ne savons pas ce que nous perdrons. Mais nous ne pouvons pas nous arrêter.",
						"spanish": "Nosotros… no sabemos lo que perderemos. Pero no podemos parar.",
						"vietnamese": "Chúng ta… không biết sẽ mất gì. Nhưng không thể dừng lại.",
						"thai": "พวกเรา… ไม่รู้ว่าจะสูญเสียอะไรไปบ้าง แต่หยุดไม่ได้.",
						"hindi": "हम… नहीं जानते कि हम क्या खो देंगे। लेकिन हम रुक नहीं सकते।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "제발… 더 이상 나아가지 마. 이 길 끝에는 아무것도 없어. 어떤 곳은… 시간이 멈춰버린 것처럼… 모든 것을 잃은 채 갇혀있어.",
						"english": "Please… don't go any further. There's nothing at the end of this path. Some places… are like time has stopped… trapped, having lost everything.",
						"japanese": "お願い… もうこれ以上進まないで。この道の先には何も無い。ある場所は… 時が止まったかのように… 全てを失ったまま閉じ込められている。",
						"chinese": "求求你们… 不要再往前走了。这条路的尽头什么都没有。有些地方… 就像时间停滞了一样… 失去了一切，被困在那里。",
						"french": "S'il vous plaît… n'allez pas plus loin. Il n'y a rien au bout de ce chemin. Certains endroits… sont comme si le temps s'était arrêté… piégés, ayant tout perdu.",
						"spanish": "Por favor… no sigáis adelante. Al final de este camino no hay nada. Algunos lugares… son como si el tiempo se hubiera detenido… atrapados, habiéndolo perdido todo.",
						"vietnamese": "Xin đừng… đi xa hơn nữa. Cuối con đường này không có gì cả. Một số nơi… giống như thời gian đã ngừng lại… bị mắc kẹt, mất tất cả.",
						"thai": "ได้โปรด… อย่าไปไกลกว่านี้เลย ปลายทางของเส้นทางนี้ไม่มีอะไรเลย บางที่… เหมือนกับว่าเวลามันหยุดนิ่งไปแล้ว… ถูกกักขังไว้โดยที่สูญเสียทุกสิ่ง.",
						"hindi": "कृपया… और आगे मत बढ़ो। इस रास्ते के अंत में कुछ भी नहीं है। कुछ जगहें… ऐसी हैं जैसे समय रुक गया हो… सब कुछ खोकर फँसे हुए हैं।"
					},
					"emotion": "sad",
					"speaker": "bran",
					"type": "speech"
				},
				{
					"content": {
						"korean": "돌아가… 너희가 소중히 여기는 것을 지켜… 그게 유일한 길이야.",
						"english": "Go back… protect what you cherish… that's the only way.",
						"japanese": "戻れ… お前たちが大切にしているものを守れ… それが唯一の道だ。",
						"chinese": "回去吧… 保护你们所珍视的一切… 那是唯一的出路。",
						"french": "Retournez… protégez ce que vous chérissez… c'est le seul chemin.",
						"spanish": "Volved… proteged lo que valoráis… ese es el único camino.",
						"vietnamese": "Quay lại đi… bảo vệ những gì các ngươi trân trọng… đó là con đường duy nhất.",
						"thai": "กลับไปซะ… ปกป้องสิ่งที่พวกเจ้าหวงแหน… นั่นคือทางเดียว.",
						"hindi": "वापस जाओ… जो तुम संजोते हो उसे बचाओ… वही एकमात्र रास्ता है।"
					},
					"speaker": "bran",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "우린 멈출 수 없어. 그 빚을 끊어내고 진실을 밝혀야 해.",
						"english": "We can't stop. We have to break this debt and reveal the truth.",
						"japanese": "私たちは止まれない。その借りを断ち切り、真実を明らかにしなければならない。",
						"chinese": "我们不能停下。我们必须斩断那笔债，揭露真相。",
						"french": "Nous ne pouvons pas nous arrêter. Nous devons briser cette dette et révéler la vérité.",
						"spanish": "No podemos parar. Debemos romper esa deuda y revelar la verdad.",
						"vietnamese": "Chúng ta không thể dừng lại. Phải cắt đứt món nợ đó và phơi bày sự thật.",
						"thai": "พวกเราหยุดไม่ได้. เราต้องตัดขาดจากหนี้นั้นและเปิดเผยความจริง.",
						"hindi": "हम रुक नहीं सकते। हमें उस ऋण को तोड़ना होगा और सच्चाई उजागर करनी होगी।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"win_dialogue": []
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "얼어붙은 그림자가 탐험대를 집어삼켰다. 차가운 절망이 온몸을 감쌌다.",
						"english": "The frozen shadow swallowed the expedition. Cold despair enveloped them.",
						"japanese": "凍てついた影が探検隊を飲み込んだ。冷たい絶望が全身を包み込んだ。",
						"chinese": "冰冷的阴影吞噬了探险队。彻骨的绝望笼罩全身。",
						"french": "L'ombre gelée engloutit l'expédition. Un froid désespoir les envahit.",
						"spanish": "La sombra congelada devoró a la expedición. Una fría desesperación los envolvió.",
						"vietnamese": "Bóng tối băng giá nuốt chửng đoàn thám hiểm. Nỗi tuyệt vọng lạnh lẽo bao trùm khắp cơ thể.",
						"thai": "เงาเยือกแข็งกลืนกินคณะสำรวจ ความสิ้นหวังอันหนาวเหน็บเข้าปกคลุมทั่วร่าง",
						"hindi": "जमी हुई छाया ने अभियान दल को निगल लिया। ठंडी निराशा ने उन्हें घेर लिया।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "너희의 작은 반항은… 아무것도 바꾸지 못한다. 대가는… 이미 치러졌다.",
						"english": "Your small rebellion... changes nothing. The price... has already been paid.",
						"japanese": "お前たちの小さな反抗は…何も変えられない。代償は…既に支払われたのだ。",
						"chinese": "你们微小的反抗……改变不了任何事。代价……早已付出。",
						"french": "Votre petite rébellion... ne changera rien. Le prix... a déjà été payé.",
						"spanish": "Vuestra pequeña rebelión... no cambia nada. El precio... ya ha sido pagado.",
						"vietnamese": "Sự phản kháng nhỏ nhoi của các ngươi... chẳng thay đổi được gì. Cái giá... đã phải trả rồi.",
						"thai": "การขัดขืนเล็กๆ น้อยๆ ของพวกเจ้า... ไม่อาจเปลี่ยนแปลงอะไรได้ ค่าตอบแทน... ได้ถูกชำระไปแล้ว",
						"hindi": "तुम्हारा छोटा सा विद्रोह... कुछ नहीं बदल सकता। कीमत... पहले ही चुकाई जा चुकी है।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…아직… 끝나지 않았어… 우리는… 대가를 치르지 않을 거야!",
						"english": "...Not... over yet... We... won't pay the price!",
						"japanese": "...まだだ...終わってない...我々は...代償は払わない！",
						"chinese": "...还没...结束...我们...绝不付出代价！",
						"french": "...Ce n'est... pas fini... Nous... ne paierons pas le prix !",
						"spanish": "...Aún... no ha terminado... ¡Nosotros... no pagaremos el precio!",
						"vietnamese": "...Vẫn... chưa kết thúc... Chúng ta... sẽ không phải trả giá!",
						"thai": "...ยัง...ไม่จบ...เรา...จะไม่ยอมจ่ายค่าตอบแทน!",
						"hindi": "...अभी... खत्म नहीं हुआ... हम... कीमत नहीं चुकाएंगे!"
					}
				}
			],
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "기괴한 그림자가 어둠 속에서 나타났다. 얼어붙은 땅의 분노가 형상화된 듯했다.",
						"english": "A grotesque shadow emerged from the darkness. It seemed to embody the frozen land's wrath.",
						"japanese": "奇妙な影が闇の中から現れた。それは凍てついた大地の怒りが具現化したかのようだった。",
						"chinese": "一个怪异的影子从黑暗中浮现。它似乎是冰封大地之怒的具象化。",
						"french": "Une ombre grotesque apparut des ténèbres. Elle semblait incarner la fureur de la terre gelée.",
						"spanish": "Una sombra grotesca apareció en la oscuridad. Parecía la materialización de la furia de la tierra helada.",
						"vietnamese": "Một bóng đen kỳ quái xuất hiện từ bóng tối. Dường như đó là hiện thân của cơn thịnh nộ từ vùng đất băng giá.",
						"thai": "เงาประหลาดปรากฏขึ้นจากความมืด ดูเหมือนเป็นร่างของความโกรธแค้นจากดินแดนที่เยือกแข็ง.",
						"hindi": "अंधेरे से एक विचित्र परछाई उभरी। ऐसा लगा मानो वह जमी हुई भूमि के क्रोध का ही साकार रूप हो।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네가… 그 대가를 받아간 거지? 그 모든 슬픔의 주인!",
						"english": "You… took the toll, didn't you? Master of all that sorrow!",
						"japanese": "お前が… その代償を持っていったんだな？その全ての悲しみの主よ！",
						"chinese": "是你… 拿走了那个代价，对吧？所有悲伤的主人！",
						"french": "C'est toi… qui as pris ce prix, n'est-ce pas ? Maître de toute cette tristesse !",
						"spanish": "Tú… te llevaste ese precio, ¿verdad? ¡El señor de toda esa tristeza!",
						"vietnamese": "Ngươi… đã lấy đi cái giá đó, phải không? Kẻ thống trị mọi nỗi buồn!",
						"thai": "แก… เอาค่าตอบแทนนั้นไปใช่ไหม? เจ้าแห่งความโศกเศร้าทั้งหมด!",
						"hindi": "तुमने… वह कीमत ली, है ना? उस सारे दुख के स्वामी!"
					}
				},
				{
					"content": {
						"korean": "대가… 모든 것에는 균형이 필요하다… 너희의 고통은 이 세상의 질서.",
						"english": "The price… everything requires balance… your suffering is the order of this world.",
						"japanese": "代償… 全てには均衡が必要だ… お前たちの苦痛はこの世の秩序だ。",
						"chinese": "代价… 万物皆需平衡… 你们的痛苦，是这个世界的秩序。",
						"french": "Le prix… tout requiert un équilibre… votre souffrance est l'ordre de ce monde.",
						"spanish": "El precio… todo necesita equilibrio… vuestro sufrimiento es el orden de este mundo.",
						"vietnamese": "Cái giá… mọi thứ đều cần sự cân bằng… nỗi đau của các ngươi là trật tự của thế giới này.",
						"thai": "ค่าตอบแทน… ทุกสิ่งล้วนต้องการความสมดุล… ความทุกข์ทรมานของพวกเจ้าคือระเบียบของโลกนี้.",
						"hindi": "कीमत… हर चीज़ को संतुलन चाहिए… तुम्हारा दुख इस दुनिया की व्यवस्था है।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "너희의 작은 빛은… 결국 이 어둠의 먹이가 될 것이다.",
						"english": "Your faint light... will ultimately be devoured by this darkness.",
						"japanese": "お前たちの小さな光は…結局、この闇の餌食となるだろう。",
						"chinese": "你们的微光……终将成为这黑暗的饵食。",
						"french": "Votre faible lumière... finira par être dévorée par cette obscurité.",
						"spanish": "Vuestra pequeña luz... finalmente será devorada por esta oscuridad.",
						"vietnamese": "Ánh sáng nhỏ nhoi của các ngươi... rốt cuộc sẽ trở thành mồi ngon cho bóng tối này.",
						"thai": "แสงริบหรี่ของพวกเจ้า... ในที่สุดก็จะตกเป็นเหยื่อของความมืดมิดนี้",
						"hindi": "तुम्हारी छोटी सी रोशनी... अंततः इस अंधकार का शिकार बन जाएगी。"
					}
				},
				{
					"content": {
						"korean": "말도 안 되는 소리 하지 마! 우리는 절대 포기하지 않아!",
						"english": "Nonsense! We will never give up!",
						"japanese": "馬鹿なことを言うな！私たちは決して諦めない！",
						"chinese": "别胡说！我们绝不放弃！",
						"french": "Absurde ! Nous n'abandonnerons jamais !",
						"spanish": "¡Tonterías! ¡Nunca nos rendiremos!",
						"vietnamese": "Đừng nói nhảm! Chúng ta sẽ không bao giờ bỏ cuộc!",
						"thai": "เหลวไหล! เราจะไม่มีวันยอมแพ้!",
						"hindi": "बकवास मत करो! हम कभी हार नहीं मानेंगे!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"spot": [
						1,
						3
					],
					"speaker": "bran",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "bran",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "멈춰… 이 아이들에게 더 이상… 제발…",
						"english": "Stop... Not these children... Please...",
						"japanese": "やめてくれ…これ以上、この子たちに…頼むから…",
						"chinese": "住手……别再伤害这些孩子了……拜托……",
						"french": "Arrête... Pas ces enfants... S'il te plaît...",
						"spanish": "Basta... A estos niños no más... Por favor...",
						"vietnamese": "Dừng lại... Đừng làm hại những đứa trẻ này nữa... Làm ơn...",
						"thai": "หยุดนะ... อย่าทำอะไรเด็กพวกนี้อีกเลย... ได้โปรด...",
						"hindi": "रुको... इन बच्चों को और नहीं... कृपया..."
					}
				},
				{
					"type": "direction",
					"duration_ms": 400,
					"speaker": "bran",
					"action": "exit",
					"direction": "down"
				}
			],
			"win_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 서서히 사라졌다. 남은 것은 차가운 정적뿐이었다.",
						"english": "The colossal shadow slowly faded. Only cold silence remained.",
						"japanese": "巨大な影がゆっくりと消え去った。残されたのは冷たい静寂だけだった。",
						"chinese": "巨大的影子缓缓消散。只剩下冰冷的寂静。",
						"french": "L'ombre colossale s'évanouit lentement. Seul un froid silence demeura.",
						"spanish": "La sombra colosal se desvaneció lentamente. Solo quedó un frío silencio.",
						"vietnamese": "Bóng đen khổng lồ dần biến mất. Chỉ còn lại sự tĩnh lặng lạnh lẽo.",
						"thai": "เงาขนาดมหึมาค่อยๆ จางหายไป สิ่งที่เหลืออยู่มีเพียงความเงียบงันอันเยือกเย็น",
						"hindi": "विशाल छाया धीरे-धीरे लुप्त हो गई। केवल एक ठंडी खामोशी बची थी।"
					}
				},
				{
					"content": {
						"korean": "너희는… 그저 작은 도구일 뿐… 진짜 빚은… 아직 남아있다…",
						"english": "You are... merely small tools... The true debt... still remains...",
						"japanese": "お前たちは…ただの小さな道具に過ぎない…本当の負債は…まだ残っている…",
						"chinese": "你们……不过是小小的工具……真正的债务……还在那里……",
						"french": "Vous n'êtes... que de simples outils... La vraie dette... demeure encore...",
						"spanish": "Vosotros sois... meras herramientas... La verdadera deuda... aún persiste...",
						"vietnamese": "Các ngươi... chỉ là những công cụ nhỏ bé... Món nợ thực sự... vẫn còn đó...",
						"thai": "พวกเจ้า... ก็เป็นแค่เครื่องมือเล็กๆ เท่านั้น... หนี้ที่แท้จริง... ยังคงอยู่...",
						"hindi": "तुम... महज़ छोटे उपकरण हो... असली कर्ज़... अभी बाकी है..."
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "도구라고? 누가… 누가 우리를 이용한 거지?",
						"english": "Tools? Who... who used us?",
						"japanese": "道具だと？誰が…誰が私たちを利用したんだ？",
						"chinese": "工具？谁……是谁利用了我们？",
						"french": "Des outils ? Qui... qui nous a utilisés ?",
						"spanish": "¿Herramientas? ¿Quién... quién nos utilizó?",
						"vietnamese": "Công cụ ư? Ai... ai đã lợi dụng chúng ta?",
						"thai": "เครื่องมือรึ? ใครกัน... ใครกันที่ใช้เรา?",
						"hindi": "उपकरण? किसने... किसने हमें इस्तेमाल किया?"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "브란의 경고가 뇌리를 스쳤다. 이 모든 친절 뒤에… 더 거대한 함정이 있었다.",
						"english": "Bran's warning flashed through my mind. Behind all this kindness... lay a far greater trap.",
						"japanese": "ブランの警告が脳裏をよぎった。この親切の裏には…より大きな罠があったのだ。",
						"chinese": "布兰的警告闪过脑海。所有这些善意背后……隐藏着一个更大的陷阱。",
						"french": "L'avertissement de Bran me traversa l'esprit. Derrière toute cette gentillesse... se cachait un piège bien plus grand.",
						"spanish": "La advertencia de Bran resonó en mi mente. Detrás de tanta amabilidad... había una trampa aún mayor.",
						"vietnamese": "Lời cảnh báo của Bran chợt lóe lên trong đầu. Đằng sau tất cả sự tử tế này... là một cái bẫy lớn hơn nhiều.",
						"thai": "คำเตือนของบรานแวบเข้ามาในความคิด เบื้องหลังความเมตตาทั้งหมดนี้... มีกับดักที่ยิ่งใหญ่กว่าซ่อนอยู่",
						"hindi": "ब्रान की चेतावनी दिमाग में कौंध गई। इस सारी दयालुता के पीछे... एक कहीं बड़ा जाल था।"
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "프로스트록의 진짜 목적은 무엇인가. 의심은 확신으로 변해갔다.",
						"english": "What was Frostrok's true purpose? Doubt turned into certainty.",
						"japanese": "フロストロックの真の目的は何だ。疑念は確信へと変わっていった。",
						"chinese": "弗罗斯特罗克的真正目的是什么？怀疑变成了确信。",
						"french": "Quel était le véritable but de Frostrok ? Le doute se transforma en certitude.",
						"spanish": "¿Cuál era el verdadero propósito de Frostrok? La duda se convirtió en certeza.",
						"vietnamese": "Mục đích thực sự của Frostrok là gì? Nghi ngờ dần biến thành chắc chắn.",
						"thai": "จุดประสงค์ที่แท้จริงของฟรอสต์ร็อกคืออะไร? ความสงสัยแปรเปลี่ยนเป็นความแน่ใจ",
						"hindi": "फ्रॉस्ट्रोक का असली मकसद क्या था? संदेह निश्चितता में बदल गया।"
					}
				}
			]
		}
	]
} as const;
