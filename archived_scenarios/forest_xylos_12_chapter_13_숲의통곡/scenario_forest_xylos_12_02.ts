export const scenario_forest_xylos_12_02 = {
	"scenario_id": "forest_xylos_12_02",
	"order": 2,
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
			"숲은 과거를 삼키고 있었다.",
			"발걸음을 옮길수록, 환영은 더욱 선명해졌다.",
			"고통스러운 숨소리. 찢겨진 천 조각.",
			"진실은 더 깊은 곳에 있었다. 어쩌면 나 자신이 그 일부일지도."
		],
		"english": [
			"The forest was devouring the past.",
			"With every step, the illusion grew clearer.",
			"Painful breaths. Torn fragments of cloth.",
			"The truth lay deeper. Perhaps I was part of it myself."
		],
		"japanese": [
			"森は過去を飲み込んでいた。",
			"一歩進むごとに、幻影は鮮明になった。",
			"苦痛な息遣い。引き裂かれた布切れ。",
			"真実はもっと深いところに。あるいは、私自身もその一部なのかもしれない。"
		],
		"chinese": [
			"森林正在吞噬过去。",
			"每迈出一步，幻象就越发清晰。",
			"痛苦的喘息。破碎的布片。",
			"真相藏得更深。也许我就是其中的一部分。"
		],
		"french": [
			"La forêt dévorait le passé.",
			"À chaque pas, l'illusion devenait plus claire.",
			"Respirations douloureuses. Fragments de tissu déchirés.",
			"La vérité se trouvait plus profondément. Peut-être que j'en faisais moi-même partie."
		],
		"spanish": [
			"El bosque estaba devorando el pasado.",
			"Con cada paso, la ilusión se hacía más nítida.",
			"Respiraciones dolorosas. Trozos de tela desgarrados.",
			"La verdad yacía más profunda. Quizás yo mismo era parte de ella."
		],
		"vietnamese": [
			"Rừng đang nuốt chửng quá khứ.",
			"Mỗi bước đi, ảo ảnh càng rõ ràng hơn.",
			"Hơi thở đau đớn. Những mảnh vải rách.",
			"Sự thật nằm sâu hơn. Có lẽ chính tôi cũng là một phần của nó."
		],
		"thai": [
			"ป่ากำลังกลืนกินอดีต",
			"ทุกย่างก้าว ภาพลวงตาก็ยิ่งชัดเจนขึ้น",
			"ลมหายใจที่เจ็บปวด ชิ้นผ้าที่ฉีกขาด",
			"ความจริงอยู่ลึกกว่านั้น บางทีฉันอาจเป็นส่วนหนึ่งของมันเอง"
		],
		"hindi": [
			"जंगल अतीत को निगल रहा था।",
			"हर कदम पर, भ्रम और भी स्पष्ट होता गया।",
			"दर्दनाक साँसें। फटे हुए कपड़े के टुकड़े।",
			"सच्चाई और भी गहरी थी। शायद मैं खुद उसका एक हिस्सा था।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "숲은 더욱 깊어졌다. 음울한 그림자가 모든 것을 집어삼킨 듯했다.",
						"english": "The forest deepened. Gloomy shadows seemed to swallow everything.",
						"japanese": "森はさらに深くなった。陰鬱な影がすべてを飲み込んだようだった。",
						"chinese": "森林更深了。阴沉的影子仿佛吞噬了一切。",
						"french": "La forêt s'épaississait. Des ombres lugubres semblaient tout engloutir.",
						"spanish": "El bosque se adentró más. Sombras sombrías parecían tragarlo todo.",
						"vietnamese": "Rừng càng sâu hơn. Bóng tối u ám dường như nuốt chửng mọi thứ.",
						"thai": "ป่ายิ่งลึกเข้าไป เงาที่มืดมิดดูเหมือนจะกลืนกินทุกสิ่ง",
						"hindi": "जंगल गहरा होता गया। उदास परछाइयों ने सब कुछ निगल लिया था।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "여기… 이상해. 나무들이 숨 쉬는 것 같아.",
						"english": "Here... it's strange. The trees seem to be breathing.",
						"japanese": "ここ…おかしい。木々が呼吸しているみたいだ。",
						"chinese": "这里…很奇怪。树木好像在呼吸。",
						"french": "Ici... c'est étrange. Les arbres semblent respirer.",
						"spanish": "Aquí... es extraño. Los árboles parecen respirar.",
						"vietnamese": "Ở đây… thật kỳ lạ. Những cái cây dường như đang thở.",
						"thai": "ที่นี่...มันแปลก ต้นไม้ดูเหมือนจะหายใจได้",
						"hindi": "यहाँ... अजीब है। पेड़ साँस ले रहे हैं।"
					},
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "cedar"
				},
				{
					"type": "speech",
					"content": {
						"korean": "결국 여기까지 왔군요.",
						"english": "So you've finally made it here.",
						"japanese": "結局ここまで来ましたね。",
						"chinese": "你终于来到这里了。",
						"french": "Vous êtes finalement arrivé ici.",
						"spanish": "Así que finalmente has llegado hasta aquí.",
						"vietnamese": "Cuối cùng bạn cũng đã đến đây.",
						"thai": "ในที่สุดคุณก็มาถึงที่นี่จนได้",
						"hindi": "तो आप आखिरकार यहाँ आ गए।"
					},
					"emotion": "base",
					"speaker": "cedar"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "당신은 누구죠?",
						"english": "Who are you?",
						"japanese": "あなたは誰ですか？",
						"chinese": "你是谁？",
						"french": "Qui êtes-vous ?",
						"spanish": "Quién eres tú?",
						"vietnamese": "Bạn là ai?",
						"thai": "คุณคือใคร?",
						"hindi": "आप कौन हैं?"
					},
					"type": "speech"
				},
				{
					"speaker": "cedar",
					"emotion": "base",
					"content": {
						"korean": "시더. 이 숲의 유적을 연구하는 고고학자입니다.",
						"english": "Cider. An archaeologist researching the ruins in this forest.",
						"japanese": "シダー。この森の遺跡を研究している考古学者です。",
						"chinese": "西达。一位研究这片森林遗迹的考古学家。",
						"french": "Cider. Une archéologue qui étudie les ruines de cette forêt.",
						"spanish": "Cider. Un arqueólogo que investiga las ruinas de este bosque.",
						"vietnamese": "Cider. Một nhà khảo cổ học đang nghiên cứu tàn tích trong khu rừng này.",
						"thai": "ไซเดอร์ นักโบราณคดีที่กำลังสำรวจซากปรักหักพังในป่าแห่งนี้",
						"hindi": "सीडर। इस जंगल में खंडहरों का शोध करने वाला एक पुरातत्वविद्।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "당신이 듣는 그 소리… 착각이 아니에요.",
						"english": "The sound you're hearing... it's not your imagination.",
						"japanese": "あなたが聞いているその音…錯覚ではありません。",
						"chinese": "你听到的那个声音…不是你的错觉。",
						"french": "Le son que vous entendez... ce n'est pas votre imagination.",
						"spanish": "El sonido que estás escuchando... no es tu imaginación.",
						"vietnamese": "Âm thanh bạn đang nghe… đó không phải là ảo giác đâu.",
						"thai": "เสียงที่คุณกำลังได้ยิน...ไม่ใช่จินตนาการของคุณ",
						"hindi": "जो आवाज़ आप सुन रहे हैं... वह आपका वहम नहीं है।"
					},
					"type": "speech",
					"speaker": "cedar"
				},
				{
					"content": {
						"korean": "정말 나무들이 우는 건가요?",
						"english": "Are the trees really crying?",
						"japanese": "本当に木々が泣いているの？",
						"chinese": "树木真的在哭泣吗？",
						"french": "Les arbres pleurent-ils vraiment ?",
						"spanish": "¿De verdad lloran los árboles?",
						"vietnamese": "Cây cối thực sự đang khóc sao?",
						"thai": "ต้นไม้กำลังร้องไห้จริงหรือ?",
						"hindi": "क्या पेड़ सच में रो रहे हैं?"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "cedar",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "cedar",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이걸 보세요.",
						"english": "Look at this.",
						"japanese": "これを見て。",
						"chinese": "看看这个。",
						"french": "Regardez ça.",
						"spanish": "Mira esto.",
						"vietnamese": "Nhìn cái này đi.",
						"thai": "ดูนี่สิ",
						"hindi": "इसे देखो।"
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "시더가 낡고 해진 천 조각을 내밀었다. 고대 문양이 희미하게 새겨져 있었다.",
						"english": "Cedar held out a worn, tattered piece of cloth. Ancient patterns were faintly etched on it.",
						"japanese": "シダーは古びたぼろ布を差し出した。そこには古代の模様がうっすらと刻まれていた。",
						"chinese": "西达递出一块破旧的布片。上面隐约刻着古老的图案。",
						"french": "Cedar tendit un morceau de tissu usé et déchiré. Des motifs anciens y étaient faiblement gravés.",
						"spanish": "Cedar extendió un trozo de tela desgastada y harapienta. Antiguos patrones estaban débilmente grabados en ella.",
						"vietnamese": "Cedar chìa ra một mảnh vải cũ nát, rách rưới. Những họa tiết cổ xưa mờ ảo khắc trên đó.",
						"thai": "ซีดาร์ยื่นผ้าผืนเก่าที่ขาดรุ่งริ่ง ลวดลายโบราณสลักเลือนรางอยู่บนนั้น",
						"hindi": "सीडर ने एक घिसा-पिटा कपड़े का टुकड़ा आगे बढ़ाया। उस पर प्राचीन नक्काशी धुँधली सी खुदी हुई थी।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이건…?",
						"english": "This is...?",
						"japanese": "これは…？",
						"chinese": "这是…？",
						"french": "C'est... ?",
						"spanish": "¿Esto es...?",
						"vietnamese": "Cái này là...?",
						"thai": "นี่คือ...?",
						"hindi": "यह क्या है...?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 숲에서 발견했어요. 아마존 부족의 유물이죠.",
						"english": "I found this in this forest. It's an artifact from an Amazonian tribe.",
						"japanese": "この森で見つけました。アマゾンの部族の遺物です。",
						"chinese": "我在这片森林里发现的。是亚马逊部落的遗物。",
						"french": "Je l'ai trouvé dans cette forêt. C'est un artefact d'une tribu amazonienne.",
						"spanish": "Lo encontré en este bosque. Es un artefacto de una tribu amazónica.",
						"vietnamese": "Tôi tìm thấy nó trong khu rừng này. Là di vật của một bộ tộc Amazon.",
						"thai": "ฉันเจอสิ่งนี้ในป่าแห่งนี้ มันคือวัตถุโบราณของชนเผ่าอะเมซอน",
						"hindi": "मुझे यह इस जंगल में मिला। यह अमेज़ॅन जनजाति का एक अवशेष है।"
					},
					"emotion": "base",
					"speaker": "cedar"
				},
				{
					"speaker": "cedar",
					"type": "speech",
					"content": {
						"korean": "이 숲은 단순한 자연이 아니에요. 거대한 무덤입니다.",
						"english": "This forest isn't just nature. It's a giant tomb.",
						"japanese": "この森はただの自然じゃない。巨大な墓場だ。",
						"chinese": "这片森林不仅仅是大自然。它是一个巨大的墓穴。",
						"french": "Cette forêt n'est pas juste la nature. C'est une tombe gigantesque.",
						"spanish": "Este bosque no es solo naturaleza. Es una tumba gigante.",
						"vietnamese": "Khu rừng này không chỉ là tự nhiên. Nó là một ngôi mộ khổng lồ.",
						"thai": "ป่าแห่งนี้ไม่ใช่แค่ธรรมชาติ มันคือสุสานขนาดใหญ่",
						"hindi": "यह जंगल सिर्फ़ प्रकृति नहीं है। यह एक विशाल कब्र है।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "무덤…?",
						"english": "A tomb...?",
						"japanese": "墓場…？",
						"chinese": "墓穴…？",
						"french": "Une tombe... ?",
						"spanish": "¿Una tumba...?",
						"vietnamese": "Mộ...?",
						"thai": "สุสาน...?",
						"hindi": "कब्र...?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "cedar",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "과거의 비극이 반복되고 있죠. 당신도 그 일부가 될 겁니다.",
						"english": "The tragedies of the past are repeating. You will become a part of it too.",
						"japanese": "過去の悲劇が繰り返されている。あなたもその一部となるでしょう。",
						"chinese": "过去的悲剧正在重演。你也将成为其中一部分。",
						"french": "Les tragédies du passé se répètent. Vous en ferez partie aussi.",
						"spanish": "Las tragedias del pasado se están repitiendo. Tú también serás parte de ello.",
						"vietnamese": "Bi kịch quá khứ đang lặp lại. Bạn cũng sẽ trở thành một phần của nó.",
						"thai": "โศกนาฏกรรมในอดีตกำลังจะเกิดขึ้นซ้ำรอย คุณก็จะเป็นส่วนหนึ่งของมันเช่นกัน",
						"hindi": "अतीत की त्रासदी दोहराई जा रही है। आप भी इसका हिस्सा बनेंगे।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "cedar",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "숲이 당신을 부르고 있어요.",
						"english": "The forest is calling you.",
						"japanese": "森があなたを呼んでいる。",
						"chinese": "森林在呼唤你。",
						"french": "La forêt vous appelle.",
						"spanish": "El bosque te está llamando.",
						"vietnamese": "Rừng đang gọi bạn.",
						"thai": "ป่ากำลังเรียกคุณ",
						"hindi": "जंगल तुम्हें बुला रहा है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "cedar"
				},
				{
					"content": {
						"korean": "나는… 계속 환영을 봐.",
						"english": "I... keep seeing illusions.",
						"japanese": "私は…幻覚を見続けている。",
						"chinese": "我…一直看到幻象。",
						"french": "Je... continue de voir des illusions.",
						"spanish": "Yo... sigo viendo ilusiones.",
						"vietnamese": "Tôi... cứ liên tục thấy ảo ảnh.",
						"thai": "ฉัน... เห็นภาพหลอนอยู่ตลอด",
						"hindi": "मुझे... लगातार भ्रम दिख रहे हैं।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "환영이 아니에요. 과거의 기억입니다.",
						"english": "Not an illusion. It's a memory of the past.",
						"japanese": "幻影ではありません。過去の記憶です。",
						"chinese": "这不是幻觉。这是过去的记忆。",
						"french": "Ce n'est pas une illusion. C'est un souvenir du passé.",
						"spanish": "No es una ilusión. Es un recuerdo del pasado.",
						"vietnamese": "Không phải ảo ảnh. Đó là ký ức của quá khứ.",
						"thai": "ไม่ใช่ภาพหลอน มันคือความทรงจำจากอดีต",
						"hindi": "यह भ्रम नहीं है। यह अतीत की याद है।"
					},
					"speaker": "cedar"
				},
				{
					"speaker": "cedar",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이 숲에 들어선 자들은 모두 이 비극을 반복하죠.",
						"english": "All who enter this forest repeat this tragedy.",
						"japanese": "この森に足を踏み入れた者は皆、この悲劇を繰り返す。",
						"chinese": "凡是进入这片森林的人，都会重复这场悲剧。",
						"french": "Tous ceux qui entrent dans cette forêt répètent cette tragédie.",
						"spanish": "Todos los que entran en este bosque repiten esta tragedia.",
						"vietnamese": "Tất cả những ai bước vào khu rừng này đều lặp lại bi kịch này.",
						"thai": "ทุกคนที่เข้ามาในป่านี้ ต่างต้องซ้ำรอยโศกนาฏกรรมนี้",
						"hindi": "इस वन में प्रवेश करने वाले सभी इस त्रासदी को दोहराते हैं।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "내가… 악몽의 일부라고?",
						"english": "I... am part of the nightmare?",
						"japanese": "私が…悪夢の一部だと？",
						"chinese": "我…是噩梦的一部分？",
						"french": "Moi… une partie du cauchemar ?",
						"spanish": "¿Yo… soy parte de la pesadilla?",
						"vietnamese": "Tôi… là một phần của ác mộng ư?",
						"thai": "ฉัน... เป็นส่วนหนึ่งของฝันร้ายงั้นหรือ?",
						"hindi": "मैं… दुःस्वप्न का एक हिस्सा हूँ?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "cedar",
					"emotion": "sad",
					"content": {
						"korean": "…그 공포에 잠식되지 마세요.",
						"english": "...Don't let that fear consume you.",
						"japanese": "…その恐怖に蝕まれないでください。",
						"chinese": "…不要被那份恐惧吞噬。",
						"french": "…Ne vous laissez pas consumer par cette peur.",
						"spanish": "…No dejes que ese terror te consuma.",
						"vietnamese": "…Đừng để nỗi sợ hãi đó nuốt chửng bạn.",
						"thai": "...อย่าให้ความหวาดกลัวนั้นกลืนกินคุณ",
						"hindi": "…उस भय से ग्रस्त मत होइए।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "cedar",
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
						"korean": "이제 돌아갈 수 없어요.",
						"english": "There's no turning back now.",
						"japanese": "もう戻れません。",
						"chinese": "已经回不去了。",
						"french": "On ne peut plus revenir en arrière.",
						"spanish": "Ya no se puede volver.",
						"vietnamese": "Giờ không thể quay lại được nữa.",
						"thai": "ตอนนี้กลับไปไม่ได้แล้ว",
						"hindi": "अब वापस नहीं जा सकते।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "cedar"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이미 너무 깊이 들어왔어.",
						"english": "You've come too deep already.",
						"japanese": "もう深入りしすぎました。",
						"chinese": "已经走得太深了。",
						"french": "Nous sommes déjà allés trop loin.",
						"spanish": "Ya has entrado demasiado profundo.",
						"vietnamese": "Đã đi quá sâu rồi.",
						"thai": "เข้ามาลึกเกินไปแล้ว",
						"hindi": "बहुत गहराई तक आ गए हैं।"
					}
				},
				{
					"speaker": "cedar",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "숲이 당신을 놓아주지 않을 겁니다.",
						"english": "The forest won't let you go.",
						"japanese": "森があなたを解放しないでしょう。",
						"chinese": "森林不会放过你。",
						"french": "La forêt ne vous laissera pas partir.",
						"spanish": "El bosque no te soltará.",
						"vietnamese": "Rừng sẽ không buông tha bạn đâu.",
						"thai": "ป่าจะไม่ปล่อยคุณไป",
						"hindi": "वन तुम्हें नहीं छोड़ेगा।"
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "숲의 고통스러운 숨소리가 귀청을 찢는 듯했다. 모든 것이 일그러지고 있었다.",
						"english": "The forest's agonizing breaths pierced my ears. Everything was warping.",
						"japanese": "森の苦痛に満ちた息遣いが耳を劈くようだった。すべてが歪んでいった。",
						"chinese": "森林痛苦的喘息声撕裂着耳膜。一切都在扭曲。",
						"french": "Le souffle agonisant de la forêt déchirait les tympans. Tout se déformait.",
						"spanish": "El aliento agonizante del bosque desgarraba los oídos. Todo se estaba distorsionando.",
						"vietnamese": "Hơi thở đau đớn của khu rừng như xé toạc màng nhĩ. Mọi thứ đang biến dạng.",
						"thai": "เสียงหายใจอันเจ็บปวดของป่าดังฉีกขาดแก้วหู ทุกสิ่งกำลังบิดเบี้ยว",
						"hindi": "वन की दर्दनाक साँसें कानों को चीर रही थीं। सब कुछ विकृत हो रहा था।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "…고작 이런 것으로… 숲의 고통은 끝나지 않아…",
						"english": "...With just this... the forest's suffering won't end...",
						"japanese": "…こんなものくらいで…森の苦痛は終わらない…",
						"chinese": "…仅仅如此…森林的痛苦不会结束的…",
						"french": "...Rien qu'avec ça... la souffrance de la forêt ne prendra pas fin...",
						"spanish": "...Solo con esto... el sufrimiento del bosque no terminará...",
						"vietnamese": "...Chỉ với chừng này... nỗi đau của khu rừng sẽ không kết thúc...",
						"thai": "...แค่นี้... ความเจ็บปวดของป่าก็ไม่จบลงหรอก...",
						"hindi": "...बस इतने से... जंगल का दर्द खत्म नहीं होगा..."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "헛소리 마! 너만 없으면 돼!",
						"english": "Nonsense! We just need to get rid of you!",
						"japanese": "くだらない！貴様さえいなければいい！",
						"chinese": "胡说！只要没有你就行了！",
						"french": "N'importe quoi ! On a juste besoin de se débarrasser de toi !",
						"spanish": "¡Tonterías! ¡Solo necesitamos librarnos de ti!",
						"vietnamese": "Vớ vẩn! Chỉ cần không có ngươi là được!",
						"thai": "เหลวไหล! แค่ไม่มีแกก็พอแล้ว!",
						"hindi": "बकवास! बस तुम्हें खत्म करना है!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"spot": [
						2,
						3
					],
					"speaker": "cedar",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "{random_boss}의 힘은 숲의 슬픔에서 나와요. 근원을 찾아야 해요.",
						"english": "{random_boss}'s power comes from the forest's sorrow. We must find its source.",
						"japanese": "「{random_boss}」の力は森の悲しみから来ています。根源を見つけなければなりません。",
						"chinese": "{random_boss}的力量源于森林的悲伤。我们必须找到根源。",
						"french": "Le pouvoir de {random_boss} vient de la tristesse de la forêt. Nous devons en trouver la source.",
						"spanish": "El poder de {random_boss} proviene de la tristeza del bosque. Debemos encontrar su origen.",
						"vietnamese": "Sức mạnh của {random_boss} đến từ nỗi buồn của khu rừng. Chúng ta phải tìm ra nguồn gốc.",
						"thai": "พลังของ {random_boss} มาจากความเศร้าของป่า เราต้องหาต้นตอให้เจอ",
						"hindi": "{random_boss} की शक्ति जंगल के दुख से आती है। हमें उसका स्रोत ढूंढना होगा।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "cedar"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "일그러진 환영은 사라졌지만, 숲의 고통은 여전했다. 거대한 슬픔의 근원이 어딘가에 존재하고 있었다.",
						"english": "The distorted illusion vanished, but the forest's suffering remained. The source of immense sorrow still existed somewhere.",
						"japanese": "歪んだ幻影は消え去ったが、森の苦痛は変わらなかった。巨大な悲しみの根源はどこかに存在していた。",
						"chinese": "扭曲的幻象消失了，但森林的痛苦依旧。巨大的悲伤根源仍然存在于某处。",
						"french": "L'illusion déformée s'est évanouie, mais la souffrance de la forêt persistait. La source d'une immense tristesse existait encore quelque part.",
						"spanish": "La ilusión distorsionada se desvaneció, pero el sufrimiento del bosque permaneció. La fuente de una inmensa tristeza aún existía en algún lugar.",
						"vietnamese": "Ảo ảnh méo mó đã biến mất, nhưng nỗi đau của khu rừng vẫn còn. Nguồn gốc của nỗi buồn khôn tả vẫn tồn tại ở đâu đó.",
						"thai": "ภาพลวงตาที่บิดเบี้ยวหายไป แต่ความเจ็บปวดของป่ายังคงอยู่ ต้นกำเนิดของความโศกเศร้าอันใหญ่หลวงยังคงมีอยู่บางที่",
						"hindi": "विकृत भ्रम गायब हो गया, लेकिन जंगल का दर्द बना रहा। अपार दुख का स्रोत अभी भी कहीं मौजूद था।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…아직 멀었어. 끝까지 간다.",
						"english": "...Not yet. I'll go all the way.",
						"japanese": "…まだまだだ。最後まで行くぞ。",
						"chinese": "…还早着呢。我会坚持到底的。",
						"french": "...Pas encore. J'irai jusqu'au bout.",
						"spanish": "...Todavía no. Iré hasta el final.",
						"vietnamese": "...Chưa xong đâu. Tôi sẽ đi đến cùng.",
						"thai": "...ยังอีกไกล ฉันจะไปให้สุดทาง",
						"hindi": "...अभी बहुत दूर है। मैं आखिर तक जाऊँगा।"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "숲의 환영이 모든 것을 집어삼켰다. 다시 한번, 과거는 반복되었다.",
						"english": "The forest's illusion devoured everything. Once again, the past repeated itself.",
						"japanese": "森の幻影がすべてを飲み込んだ。再び、過去は繰り返された。",
						"chinese": "森林的幻象吞噬了一切。过去，再次重演了。",
						"french": "L'illusion de la forêt dévora tout. Une fois de plus, le passé se répéta.",
						"spanish": "La ilusión del bosque devoró todo. Una vez más, el pasado se repitió.",
						"vietnamese": "Ảo ảnh của khu rừng nuốt chửng mọi thứ. Một lần nữa, quá khứ lặp lại.",
						"thai": "ภาพลวงตาของป่ากลืนกินทุกสิ่ง อีกครั้งที่อดีตซ้ำรอย",
						"hindi": "जंगल के भ्रम ने सब कुछ निगल लिया। एक बार फिर, अतीत दोहराया गया।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "결국 너도 이 숲의 일부가 될 뿐…",
						"english": "In the end, you'll just become part of this forest...",
						"japanese": "結局、お前もこの森の一部になるだけだ…",
						"chinese": "最终，你也将成为这森林的一部分…",
						"french": "Au final, tu ne feras plus qu'un avec cette forêt...",
						"spanish": "Al final, tú también serás parte de este bosque...",
						"vietnamese": "Cuối cùng thì ngươi cũng sẽ trở thành một phần của khu rừng này thôi...",
						"thai": "สุดท้ายแล้วเจ้าก็จะกลายเป็นส่วนหนึ่งของป่านี้เท่านั้น...",
						"hindi": "अंत में, तुम भी इस जंगल का एक हिस्सा बन जाओगे..."
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "아니! 나는… 절대 포기 안 해!",
						"english": "No! I... I'll never give up!",
						"japanese": "いや！私は…絶対にあきらめない！",
						"chinese": "不！我…我绝不会放弃！",
						"french": "Non ! Je... je n'abandonnerai jamais !",
						"spanish": "¡No! ¡Yo... yo nunca me rendiré!",
						"vietnamese": "Không! Ta... ta sẽ không bao giờ bỏ cuộc!",
						"thai": "ไม่! ฉัน... ฉันไม่มีทางยอมแพ้!",
						"hindi": "नहीं! मैं... मैं कभी हार नहीं मानूंगा!"
					},
					"speaker": "character_any"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 길을 막아섰다. 과거의 환영이 형상화된 듯했다.",
						"english": "A colossal shadow blocked the path. It seemed like a materialized phantom of the past.",
						"japanese": "巨大な影が道を塞いだ。過去の幻影が形を成したようだった。",
						"chinese": "巨大的身影挡住了去路。仿佛是过去的幻影具象化了。",
						"french": "Une ombre gigantesque bloquait le chemin. Elle semblait être une apparition matérialisée du passé.",
						"spanish": "Una sombra gigantesca bloqueaba el camino. Parecía una aparición materializada del pasado.",
						"vietnamese": "Một bóng đen khổng lồ chặn đường. Nó như là ảo ảnh của quá khứ được hình thành.",
						"thai": "เงามืดมหึมาขวางทางไว้ มันราวกับภาพหลอนจากอดีตที่ก่อร่างสร้างตัวขึ้น",
						"hindi": "एक विशाल छाया ने रास्ता रोक लिया। यह अतीत के एक साकार भ्रम जैसा लग रहा था।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "왔느냐, 새로운 희생양.",
						"english": "So you've arrived, new sacrifice.",
						"japanese": "来たか、新たな生贄よ。",
						"chinese": "来了吗，新的牺牲品。",
						"french": "Es-tu venu, nouveau sacrifice ?",
						"spanish": "¿Has venido, nuevo sacrificio?",
						"vietnamese": "Ngươi đã đến rồi sao, vật hiến tế mới.",
						"thai": "มาแล้วหรือ, เครื่องสังเวยใหม่",
						"hindi": "आ गए, नए बलिदानी।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네놈이… 이 숲의 고통을 지키는 건가?",
						"english": "You... protect this forest's suffering?",
						"japanese": "貴様が…この森の苦痛を守っているのか？",
						"chinese": "你…在守护着这片森林的痛苦吗？",
						"french": "Toi... tu protèges la souffrance de cette forêt ?",
						"spanish": "¿Tú... proteges el sufrimiento de este bosque?",
						"vietnamese": "Ngươi... đang bảo vệ nỗi đau của khu rừng này sao?",
						"thai": "แก... ปกป้องความเจ็บปวดของป่านี้รึไง?",
						"hindi": "तुम... इस जंगल के दर्द की रक्षा कर रहे हो?"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "나는 그저 반복될 뿐. 너희도 곧 알게 될 것이다.",
						"english": "I merely repeat. You too will soon know.",
						"japanese": "私はただ繰り返されるだけ。お前たちもすぐに知ることになるだろう。",
						"chinese": "我只是重复着。你们也很快会明白的。",
						"french": "Je ne fais que me répéter. Vous aussi le saurez bientôt.",
						"spanish": "Solo me repito. Vosotros también lo sabréis pronto.",
						"vietnamese": "Ta chỉ lặp lại mà thôi. Các ngươi cũng sẽ sớm biết.",
						"thai": "ข้าแค่ซ้ำรอย พวกเจ้าก็จะรู้ในไม่ช้า",
						"hindi": "मैं तो बस दोहराता हूँ। तुम भी जल्द ही जान जाओगे।"
					}
				},
				{
					"type": "direction",
					"speaker": "cedar",
					"spot": [
						1,
						3
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "cedar",
					"content": {
						"korean": "저 괴물이 당신의 공포를 먹이 삼고 있어요!",
						"english": "That monster feeds on your fear!",
						"japanese": "あの怪物があなたの恐怖を糧にしている！",
						"chinese": "那个怪物正在吞噬你的恐惧！",
						"french": "Ce monstre se nourrit de ta peur !",
						"spanish": "¡Ese monstruo se alimenta de tu miedo!",
						"vietnamese": "Quái vật đó đang ăn nỗi sợ hãi của ngươi!",
						"thai": "สัตว์ประหลาดนั่นกำลังกินความกลัวของเจ้า!",
						"hindi": "वह राक्षस तुम्हारे डर को खा रहा है!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "닥쳐! 쓰러뜨려야 해.",
						"english": "Silence! We must defeat it.",
						"japanese": "黙れ！倒さねば。",
						"chinese": "闭嘴！必须打倒它。",
						"french": "Tais-toi ! Il faut le vaincre.",
						"spanish": "¡Cállate! Debemos derrotarlo.",
						"vietnamese": "Im đi! Phải đánh bại nó.",
						"thai": "เงียบซะ! ต้องโค่นมันลง!",
						"hindi": "चुप रहो! हमें उसे हराना होगा।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"duration_ms": 400,
					"action": "exit",
					"speaker": "cedar",
					"direction": "down",
					"type": "direction"
				}
			]
		}
	]
} as const;
