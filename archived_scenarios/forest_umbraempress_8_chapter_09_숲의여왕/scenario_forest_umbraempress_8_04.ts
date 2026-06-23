export const scenario_forest_umbraempress_8_04 = {
	"scenario_id": "forest_umbraempress_8_04",
	"order": 4,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"hazel": {
			"id": "mon_e2c11115-b300-4f32-b289-9ad088dc0273",
			"name": {
				"korean": "헤이즐",
				"english": "Hazel",
				"japanese": "ヘイゼル",
				"chinese": "榛",
				"french": "Hazel",
				"spanish": "Hazel",
				"vietnamese": "Hazel",
				"thai": "เฮเซล",
				"hindi": "हेज़ल"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/39f75a47-c622-45fe-04fd-a8bac1f93a00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/fc97b5d5-7a1d-4646-bedc-47a40ea70a00/public"
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
					"type": "speech",
					"content": {
						"korean": "암거래상들의 속삭임이 가득한 어둠의 시장.",
						"english": "The Dark Market, filled with whispers of black marketers.",
						"japanese": "闇取引商人の囁きが満ちる闇市。",
						"chinese": "黑暗市场，充斥着黑市商人的低语。",
						"french": "Le Marché Noir, rempli des murmures des trafiquants.",
						"spanish": "El Mercado Oscuro, lleno de los susurros de los traficantes.",
						"vietnamese": "Chợ Đen, tràn ngập tiếng thì thầm của những kẻ buôn lậu.",
						"thai": "ตลาดมืด, ที่เต็มไปด้วยเสียงกระซิบของพ่อค้าเถื่อน.",
						"hindi": "अंधेरा बाज़ार, जहाँ अवैध व्यापारियों की फुसफुसाहटें गूंजती हैं।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"speaker": "hazel",
					"spot": [
						5,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…왔구나. 소문은 빠르네.",
						"english": "...You're here. News travels fast.",
						"japanese": "…来たか。噂は速いな。",
						"chinese": "…你来了。消息传得真快。",
						"french": "...Tu es là. Les nouvelles vont vite.",
						"spanish": "...Ya estás aquí. Las noticias vuelan.",
						"vietnamese": "...Ngươi đến rồi. Tin đồn lan nhanh thật.",
						"thai": "...มาแล้วนี่. ข่าวลือแพร่เร็วดีนี่.",
						"hindi": "...तुम आ गए। ख़बरें तेज़ी से फैलती हैं।"
					},
					"speaker": "hazel",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "헤이즐? 여왕의 은밀한 보관소에 대해 묻고 싶어.",
						"english": "Hazel? I want to ask about the Queen's secret vault.",
						"japanese": "ヘイゼル？女王の秘密の保管庫について聞きたい。",
						"chinese": "海泽尔？我想问问女王的秘密宝库。",
						"french": "Hazel ? Je veux poser des questions sur le coffre secret de la Reine.",
						"spanish": "Hazel? Quiero preguntar sobre la cámara secreta de la Reina.",
						"vietnamese": "Hazel? Ta muốn hỏi về hầm chứa bí mật của Nữ hoàng.",
						"thai": "เฮเซล? ฉันอยากถามเรื่องห้องเก็บของลับของราชินี.",
						"hindi": "हैज़ल? मैं रानी के गुप्त ख़ज़ाने के बारे में पूछना चाहता हूँ।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "hazel",
					"content": {
						"korean": "거래는 확실하게 해 줄게. 하지만… 뭘 원하는데?",
						"english": "I'll make sure the deal is solid. But... what do you want?",
						"japanese": "取引は確実にしてやる。だが…何が欲しい？",
						"chinese": "我会确保交易可靠。但是……你想要什么？",
						"french": "Je m'assurerai que l'accord est solide. Mais... que veux-tu ?",
						"spanish": "Me aseguraré de que el trato sea firme. Pero... ¿qué es lo que quieres?",
						"vietnamese": "Ta sẽ đảm bảo giao dịch chắc chắn. Nhưng... ngươi muốn gì?",
						"thai": "ฉันจะทำให้แน่ใจว่าการตกลงเป็นไปอย่างแน่นอน. แต่... นายต้องการอะไร?",
						"hindi": "मैं सुनिश्चित करूँगा कि सौदा पक्का हो। लेकिन... तुम क्या चाहते हो?"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "hazel",
					"action": "enter",
					"spot": [
						5,
						2
					],
					"type": "direction"
				},
				{
					"speaker": "hazel",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "여왕의 보관소라… 쉽게 얻을 정보는 아니지.",
						"english": "The Queen's vault, huh... That's not easily acquired information.",
						"japanese": "女王の保管庫か…簡単に手に入る情報じゃないな。",
						"chinese": "女王的宝库啊……这不是轻易能得到的情报。",
						"french": "Le coffre de la Reine, hein... Ce n'est pas une information facile à obtenir.",
						"spanish": "La cámara de la Reina, eh... Esa no es información fácil de conseguir.",
						"vietnamese": "Hầm chứa của Nữ hoàng à... Đó không phải là thông tin dễ có được đâu.",
						"thai": "ห้องเก็บของราชินีเหรอ... นั่นไม่ใช่ข้อมูลที่ได้มาง่ายๆ หรอกนะ.",
						"hindi": "रानी का ख़ज़ाना, हूँ... वो आसानी से मिलने वाली जानकारी नहीं है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "대가라면 지불할게. 진실을 원해.",
						"english": "I'll pay the price. I want the truth.",
						"japanese": "対価なら支払おう。真実が欲しい。",
						"chinese": "代价的话我会支付。我想要真相。",
						"french": "Je paierai le prix. Je veux la vérité.",
						"spanish": "Pagaré el precio. Quiero la verdad.",
						"vietnamese": "Nếu là cái giá, ta sẽ trả. Ta muốn sự thật.",
						"thai": "ถ้าเป็นราคา ฉันจะจ่าย. ฉันต้องการความจริง.",
						"hindi": "अगर कीमत है तो मैं चुकाऊँगा। मुझे सच्चाई चाहिए।"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "hazel",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "진실은… 때로 독이 되기도 해.",
						"english": "Truth... can sometimes be poison.",
						"japanese": "真実は…時に毒にもなる。",
						"chinese": "真相……有时也会是毒药。",
						"french": "La vérité... est parfois un poison.",
						"spanish": "La verdad... a veces puede ser veneno.",
						"vietnamese": "Sự thật... đôi khi là độc dược.",
						"thai": "ความจริง…บางครั้งก็เป็นพิษ",
						"hindi": "सच…कभी-कभी ज़हर भी होता है।"
					}
				},
				{
					"speaker": "hazel",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "하지만 너라면 감당할 수 있을지도.",
						"english": "But perhaps you can bear it.",
						"japanese": "だが、お前なら耐えられるかもしれない。",
						"chinese": "但也许你能承受得住。",
						"french": "Mais peut-être peux-tu le supporter.",
						"spanish": "Pero tal vez tú puedas soportarlo.",
						"vietnamese": "Nhưng có lẽ ngươi có thể chịu đựng được.",
						"thai": "แต่เจ้าอาจจะรับมือได้",
						"hindi": "पर शायद तुम इसे झेल पाओ।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "hazel",
					"action": "enter",
					"spot": [
						5,
						2
					],
					"type": "direction"
				},
				{
					"speaker": "hazel",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "여왕의 보관소는 숲의 가장 오래된 거울 뒤에 숨겨져 있어.",
						"english": "The Queen's vault is hidden behind the forest's oldest mirror.",
						"japanese": "女王の保管庫は、森で最も古い鏡の裏に隠されている。",
						"chinese": "女王的宝库藏在森林最古老的镜子后面。",
						"french": "Le trésor de la Reine est caché derrière le plus ancien miroir de la forêt.",
						"spanish": "La bóveda de la Reina está escondida detrás del espejo más antiguo del bosque.",
						"vietnamese": "Kho báu của Nữ hoàng được giấu sau tấm gương cổ xưa nhất của khu rừng.",
						"thai": "ห้องเก็บของราชินีซ่อนอยู่หลังกระจกที่เก่าแก่ที่สุดในป่า",
						"hindi": "रानी का ख़ज़ाना जंगल के सबसे पुराने दर्पण के पीछे छिपा है।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "거울…?",
						"english": "Mirror...?",
						"japanese": "鏡…？",
						"chinese": "镜子……？",
						"french": "Miroir… ?",
						"spanish": "¿Espejo…?",
						"vietnamese": "Gương à...?",
						"thai": "กระจก…?",
						"hindi": "दर्पण…?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "거울은 모든 것을 비추지. 욕망이 만들어낸 괴물까지도.",
						"english": "Mirrors reflect all. Even monsters born of desire.",
						"japanese": "鏡はすべてを映す。欲望が生み出した怪物までも。",
						"chinese": "镜子映照万物。甚至包括欲望所创造的怪物。",
						"french": "Les miroirs reflètent tout. Même les monstres nés du désir.",
						"spanish": "Los espejos reflejan todo. Incluso los monstruos nacidos del deseo.",
						"vietnamese": "Gương phản chiếu mọi thứ. Kể cả quái vật sinh ra từ dục vọng.",
						"thai": "กระจกสะท้อนทุกสิ่ง แม้กระทั่งสัตว์ประหลาดที่เกิดจากความปรารถนา",
						"hindi": "दर्पण सब कुछ दिखाते हैं। यहाँ तक कि इच्छा से जन्मे राक्षसों को भी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "hazel"
				},
				{
					"content": {
						"korean": "그 괴물은 거울 속에 갇혀 과거를 반복하고 있어.",
						"english": "That monster is trapped within the mirror, repeating the past.",
						"japanese": "その怪物は鏡の中に閉じ込められ、過去を繰り返している。",
						"chinese": "那怪物被困在镜中，不断重复着过去。",
						"french": "Ce monstre est piégé dans le miroir, répétant le passé.",
						"spanish": "Ese monstruo está atrapado en el espejo, repitiendo el pasado.",
						"vietnamese": "Con quái vật đó bị mắc kẹt trong gương, lặp lại quá khứ.",
						"thai": "สัตว์ประหลาดตัวนั้นถูกขังอยู่ในกระจก ซ้ำรอยอดีต",
						"hindi": "वह राक्षस दर्पण में फंसा है, अतीत को दोहरा रहा है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "hazel"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						5,
						2
					],
					"action": "enter",
					"speaker": "hazel",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "과거가 반복된다는 게 무슨 뜻이야?",
						"english": "What do you mean, the past repeats?",
						"japanese": "過去が繰り返されるって、どういう意味だ？",
						"chinese": "过去重复，那是什么意思？",
						"french": "Que veux-tu dire par le passé se répète ?",
						"spanish": "¿Qué quieres decir con que el pasado se repite?",
						"vietnamese": "Quá khứ lặp lại là sao?",
						"thai": "อดีตซ้ำรอยหมายความว่าอะไร?",
						"hindi": "अतीत दोहराता है, इसका क्या मतलब है?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "hazel",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "여왕의 욕망은 숲을 망쳤고, 그 대가는 비극으로 돌아왔지.",
						"english": "The Queen's desire ruined the forest, and the price was tragedy.",
						"japanese": "女王の欲望が森を荒廃させ、その代償は悲劇となって返ってきた。",
						"chinese": "女王的欲望毁了森林，其代价是悲剧。",
						"french": "Le désir de la Reine a ruiné la forêt, et le prix en fut la tragédie.",
						"spanish": "El deseo de la Reina arruinó el bosque, y el precio fue la tragedia.",
						"vietnamese": "Dục vọng của Nữ hoàng đã hủy hoại khu rừng, và cái giá phải trả là bi kịch.",
						"thai": "ความปรารถนาของราชินีทำลายป่า และผลตอบแทนคือโศกนาฏกรรม",
						"hindi": "रानी की इच्छा ने जंगल को बर्बाद कर दिया, और उसकी कीमत त्रासदी थी।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "hazel",
					"content": {
						"korean": "그리고 그녀는 여전히 같은 실수를 반복하고 있어.",
						"english": "And she's still repeating the same mistakes.",
						"japanese": "そして、彼女は今も同じ過ちを繰り返している。",
						"chinese": "而她仍在重复着同样的错误。",
						"french": "Et elle continue de répéter les mêmes erreurs.",
						"spanish": "Y ella sigue repitiendo los mismos errores.",
						"vietnamese": "Và cô ta vẫn đang lặp lại những sai lầm cũ.",
						"thai": "และเธอก็ยังคงทำผิดซ้ำซาก",
						"hindi": "और वह अभी भी वही गलतियाँ दोहरा रही है।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 우린… 뭘 해야 하는 거야.",
						"english": "So... what should we do?",
						"japanese": "じゃあ、俺たちは…どうすればいいんだ。",
						"chinese": "那我们……该怎么办？",
						"french": "Alors… que devons-nous faire ?",
						"spanish": "Entonces… ¿qué debemos hacer?",
						"vietnamese": "Vậy thì... chúng ta phải làm gì?",
						"thai": "แล้วเรา…ควรทำอะไรล่ะ?",
						"hindi": "तो… हमें क्या करना चाहिए।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "hazel",
					"content": {
						"korean": "거울을 깨뜨려야 해. 그 안에 갇힌 괴물을 해방시키든, 완전히 부수든.",
						"english": "We must shatter the mirror. Either free the monster trapped within, or destroy it completely.",
						"japanese": "鏡を割らなければならない。中に閉じ込められた怪物を解放するか、完全に破壊するかだ。",
						"chinese": "我们必须打破镜子。要么释放被困在里面的怪物，要么彻底摧毁它。",
						"french": "Nous devons briser le miroir. Libérer le monstre piégé à l'intérieur, ou le détruire complètement.",
						"spanish": "Debemos romper el espejo. Liberar al monstruo atrapado dentro, o destruirlo por completo.",
						"vietnamese": "Chúng ta phải phá vỡ tấm gương. Hoặc giải thoát con quái vật bị giam cầm bên trong, hoặc phá hủy nó hoàn toàn.",
						"thai": "เราต้องทำลายกระจก ไม่ว่าจะปลดปล่อยสัตว์ประหลาดที่ถูกขังไว้ข้างใน หรือทำลายมันให้สิ้นซาก",
						"hindi": "हमें दर्पण तोड़ना होगा। या तो अंदर फंसे राक्षस को आज़ाद करो, या उसे पूरी तरह से नष्ट कर दो。"
					},
					"type": "speech"
				},
				{
					"speaker": "hazel",
					"duration_ms": 400,
					"type": "direction",
					"direction": "down",
					"action": "exit"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "헤이즐은 의미심장한 미소와 함께 어둠 속으로 사라졌다.",
						"english": "Hazel vanished into the darkness with a meaningful smile.",
						"japanese": "ヘイゼルは意味深な笑みを浮かべ、闇の中へと消えた。",
						"chinese": "海泽尔带着意味深长的笑容消失在黑暗中。",
						"french": "Hazel disparut dans l'obscurité avec un sourire énigmatique.",
						"spanish": "Hazel desapareció en la oscuridad con una sonrisa significativa.",
						"vietnamese": "Hazel biến mất vào bóng tối với một nụ cười đầy ẩn ý.",
						"thai": "เฮเซลหายตัวไปในความมืดพร้อมรอยยิ้มที่มีความหมาย",
						"hindi": "हेज़ल एक सार्थक मुस्कान के साथ अँधेरे में गायब हो गई।"
					}
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "어리석은 것들. 너희의 욕망이 너희를 갉아먹을 것이다.",
						"english": "Fools. Your desires will consume you.",
						"japanese": "愚か者め。お前たちの欲望がお前たちを蝕むだろう。",
						"chinese": "愚蠢的东西。你们的欲望会吞噬你们的。",
						"french": "Imbéciles. Vos désirs vous consumeront.",
						"spanish": "Necios. Vuestros deseos os consumirán.",
						"vietnamese": "Đồ ngu ngốc. Lòng tham của các ngươi sẽ nuốt chửng các ngươi.",
						"thai": "พวกโง่เขลา ความปรารถนาของพวกเจ้าจะกัดกินพวกเจ้าเอง",
						"hindi": "मूर्खों। तुम्हारी इच्छाएँ तुम्हें खा जाएँगी।"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "아직 끝나지 않았어… 여왕의 진실을 밝혀낼 거야.",
						"english": "It's not over yet... I will uncover the Queen's truth.",
						"japanese": "まだ終わってない… 女王の真実を暴いてやる。",
						"chinese": "还没结束… 我会揭露女王的真相。",
						"french": "Ce n'est pas encore fini... Je découvrirai la vérité sur la Reine.",
						"spanish": "Aún no ha terminado... Descubriré la verdad de la Reina.",
						"vietnamese": "Chưa kết thúc đâu… Ta sẽ phơi bày sự thật về Nữ hoàng.",
						"thai": "ยังไม่จบ... ข้าจะเปิดเผยความจริงของราชินี",
						"hindi": "अभी खत्म नहीं हुआ है... मैं रानी की सच्चाई का पता लगाऊँगा।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "…이게 끝인 줄 알아? 더 깊은 곳에… 진짜 괴물이 기다리고 있어.",
						"english": "...You think this is the end? Deeper within... a true monster awaits.",
						"japanese": "…これが終わりだと思うのか？もっと深い場所に…本当の怪物が待っている。",
						"chinese": "……你以为这就是结束吗？更深处……真正的怪物在等着。",
						"french": "...Vous pensez que c'est la fin ? Plus profondément... un vrai monstre vous attend.",
						"spanish": "¿...Crees que este es el final? Más profundo... un verdadero monstruo te espera.",
						"vietnamese": "...Ngươi nghĩ đây là kết thúc sao? Sâu hơn nữa... một con quái vật thật sự đang chờ đợi.",
						"thai": "...เจ้าคิดว่านี่คือจุดจบงั้นหรือ? ลึกลงไปกว่านั้น... สัตว์ประหลาดตัวจริงกำลังรออยู่",
						"hindi": "...क्या तुम्हें लगता है कि यह अंत है? और गहराई में... एक असली राक्षस इंतज़ार कर रहा है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "진짜 괴물… 여왕을 말하는 건가.",
						"english": "A true monster... are they talking about the Queen?",
						"japanese": "本当の怪物…女王のことか。",
						"chinese": "真正的怪物……是指女王吗？",
						"french": "Un vrai monstre... Parlent-ils de la Reine ?",
						"spanish": "¿Un verdadero monstruo...? ¿Se refieren a la Reina?",
						"vietnamese": "Một con quái vật thật sự... Họ đang nói về Nữ hoàng sao?",
						"thai": "สัตว์ประหลาดตัวจริง... กำลังพูดถึงราชินีหรือเปล่า",
						"hindi": "एक असली राक्षस... क्या वे रानी के बारे में बात कर रहे हैं?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "거울은 산산조각 났다. 그러나 비극의 그림자는 여전히 숲을 덮고 있었다.",
						"english": "The mirror shattered. Yet the shadow of tragedy still covered the forest.",
						"japanese": "鏡は粉々に砕けた。しかし、悲劇の影は依然として森を覆っていた。",
						"chinese": "镜子碎裂了。然而悲剧的阴影依然笼罩着森林。",
						"french": "Le miroir se brisa. Pourtant l'ombre de la tragédie couvrait toujours la forêt.",
						"spanish": "El espejo se hizo añicos. Sin embargo, la sombra de la tragedia aún cubría el bosque.",
						"vietnamese": "Tấm gương vỡ tan tành. Tuy nhiên, bóng tối bi kịch vẫn bao trùm khu rừng.",
						"thai": "กระจกแตกเป็นเสี่ยงๆ แต่เงาของโศกนาฏกรรมยังคงปกคลุมป่าอยู่",
						"hindi": "दर्पण टूट गया। फिर भी त्रासदी की छाया अभी भी जंगल को ढँक रही थी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "거울의 방. 왜곡된 현실이 펼쳐졌다.",
						"english": "The Mirror Room. A distorted reality unfolded.",
						"japanese": "鏡の部屋。歪んだ現実が広がった。",
						"chinese": "镜之房。扭曲的现实展开了。",
						"french": "La Salle des Miroirs. Une réalité distordue se révéla.",
						"spanish": "La Sala de los Espejos. Una realidad distorsionada se reveló.",
						"vietnamese": "Căn phòng Gương. Một thực tại méo mó đã mở ra.",
						"thai": "ห้องกระจก ความจริงที่บิดเบี้ยวเปิดเผยขึ้น",
						"hindi": "दर्पण कक्ष। एक विकृत वास्तविकता सामने आई।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "…누구도 이 거울을 깨뜨릴 수 없어.",
						"english": "...No one can shatter this mirror.",
						"japanese": "…誰もこの鏡を割ることはできない。",
						"chinese": "……没有人能打破这面镜子。",
						"french": "...Personne ne peut briser ce miroir.",
						"spanish": "...Nadie puede romper este espejo.",
						"vietnamese": "...Không ai có thể phá vỡ tấm gương này.",
						"thai": "...ไม่มีใครทำลายกระจกบานนี้ได้",
						"hindi": "...कोई इस दर्पण को नहीं तोड़ सकता।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "이곳에 갇힌 건 너희의 욕망이 만들어낸 괴물일 뿐.",
						"english": "What's trapped here is merely the monster born of your desires.",
						"japanese": "ここに囚われているのは、お前たちの欲望が生み出した怪物にすぎない。",
						"chinese": "被困在这里的，不过是你们欲望所产生的怪物。",
						"french": "Ce qui est piégé ici n'est que le monstre né de vos désirs.",
						"spanish": "Lo que está atrapado aquí es simplemente el monstruo nacido de vuestros deseos.",
						"vietnamese": "Thứ bị mắc kẹt ở đây chỉ là con quái vật được sinh ra từ dục vọng của các ngươi.",
						"thai": "สิ่งที่ถูกขังอยู่ที่นี่เป็นเพียงสัตว์ประหลาดที่เกิดจากความปรารถนาของพวกเจ้าเท่านั้น",
						"hindi": "यहाँ फंसा हुआ केवल तुम्हारे इच्छाओं से जन्मा राक्षस है।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "우린 진실을 찾으러 왔어. 너희의 잔인한 순환을 끝내기 위해.",
						"english": "We came to find the truth. To end your cruel cycle.",
						"japanese": "私たちは真実を探しに来た。お前たちの残酷な循環を終わらせるために。",
						"chinese": "我们来寻找真相。为了终结你们残酷的循环。",
						"french": "Nous sommes venus chercher la vérité. Pour mettre fin à votre cycle cruel.",
						"spanish": "Hemos venido a buscar la verdad. Para acabar con vuestro ciclo cruel.",
						"vietnamese": "Chúng tôi đến để tìm sự thật. Để kết thúc vòng tuần hoàn tàn nhẫn của các ngươi.",
						"thai": "เรามาเพื่อค้นหาความจริง เพื่อยุติวงจรที่โหดร้ายของพวกเจ้า",
						"hindi": "हम सच्चाई खोजने आए हैं। तुम्हारे क्रूर चक्र को समाप्त करने के लिए।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "가여운 것들. 욕망은 거울 속에서 영원히 반복될 뿐이다.",
						"english": "Poor wretches. Desires will only repeat eternally within the mirror.",
						"japanese": "哀れな者たち。欲望は鏡の中で永遠に繰り返されるだけだ。",
						"chinese": "可怜的家伙。欲望只会在镜中永远重复。",
						"french": "Pauvres créatures. Les désirs ne feront que se répéter éternellement dans le miroir.",
						"spanish": "Pobres almas. Los deseos solo se repetirán eternamente dentro del espejo.",
						"vietnamese": "Những kẻ đáng thương. Dục vọng sẽ chỉ lặp lại vĩnh viễn trong gương mà thôi.",
						"thai": "พวกน่าสงสาร ความปรารถนาจะซ้ำรอยไปตลอดกาลในกระจกเท่านั้น",
						"hindi": "कमबख्त। इच्छाएँ दर्पण में हमेशा के लिए दोहराई जाती रहेंगी।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"어둠의 시장, 가장 깊숙한 곳.",
			"소문으로만 듣던 정보상, 헤이즐을 만났다.",
			"여왕의 은밀한 보관소. 그곳에 모든 진실이 있을 터.",
			"그러나 그녀의 미소 뒤엔, 숲의 끔찍한 진실이 숨어 있었다."
		],
		"english": [
			"Deepest part of the Dark Market.",
			"Met Hazel, the rumored info broker.",
			"The Queen's secret vault. All truth must lie within.",
			"But behind her smile, lay the forest's dreadful truth."
		],
		"japanese": [
			"闇市、最も奥深い場所。",
			"噂の情報屋、ヘイゼルと会った。",
			"女王の秘密の保管庫。そこに全ての真実があるはずだ。",
			"しかし、彼女の笑顔の裏には、森の恐ろしい真実が隠されていた。"
		],
		"chinese": [
			"暗市，最深处。",
			"见到了传闻中的情报贩子，海泽尔。",
			"女王的秘密宝库。所有真相都应该在那里。",
			"然而，在她微笑的背后，隐藏着森林的可怕真相。"
		],
		"french": [
			"Au plus profond du Marché Noir.",
			"J'ai rencontré Hazel, la courtière en informations dont on raconte tant de choses.",
			"Le coffre secret de la Reine. Toute la vérité doit s'y trouver.",
			"Mais derrière son sourire se cachait la terrible vérité de la forêt."
		],
		"spanish": [
			"El rincón más recóndito del Mercado Oscuro.",
			"Conocí a Hazel, la infame informante.",
			"La cámara secreta de la Reina. Ahí debe residir toda la verdad.",
			"Pero tras su sonrisa, se ocultaba la terrible verdad del bosque."
		],
		"vietnamese": [
			"Nơi sâu nhất của Chợ Đen.",
			"Gặp Hazel, người môi giới tin tức chỉ nghe đồn.",
			"Hầm chứa bí mật của Nữ hoàng. Tất cả sự thật hẳn phải ở đó.",
			"Nhưng đằng sau nụ cười của cô ta, là sự thật kinh hoàng của khu rừng."
		],
		"thai": [
			"ตลาดมืด, ที่ที่ลึกที่สุด.",
			"ได้พบเฮเซล, ผู้บอกข่าวลือ.",
			"ห้องเก็บของลับของราชินี. ความจริงทั้งหมดน่าจะอยู่ที่นั่น.",
			"แต่เบื้องหลังรอยยิ้มของเธอ ซ่อนความจริงอันน่าสะพรึงกลัวของป่าไว้."
		],
		"hindi": [
			"अंधेरे बाज़ार का सबसे गहरा कोना।",
			"हैज़ल से मिला, जिसके बारे में अफवाहें थीं कि वह एक सूचना दलाल है।",
			"रानी का गुप्त ख़ज़ाना। सारी सच्चाई वहीं होगी।",
			"लेकिन उसकी मुस्कान के पीछे, जंगल का भयानक सच छुपा था।"
		]
	}
} as const;
