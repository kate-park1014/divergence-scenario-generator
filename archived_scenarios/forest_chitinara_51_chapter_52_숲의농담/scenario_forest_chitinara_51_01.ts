export const scenario_forest_chitinara_51_01 = {
	"scenario_id": "forest_chitinara_51_01",
	"order": 1,
	"act": "intro",
	"theme": "forest",
	"actors": {
		"bracken": {
			"id": "mon_48cf29be-dbc0-44b1-bbb3-ecda1d14742d",
			"name": {
				"korean": "브라켄",
				"english": "Bracken",
				"japanese": "ブラッケン",
				"chinese": "布莱肯",
				"french": "Bracken",
				"spanish": "Bracken",
				"vietnamese": "Bracken",
				"thai": "แบรกเคน",
				"hindi": "ब्रैकेन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5b494da6-ffd7-43d3-7171-7ac84bdfe400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/4a7a1b62-d7a7-4a21-ffd5-fa9b5de82100/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"아마존 숲의 깊은 곳. 겉보기엔 경이로운 낙원.",
			"그러나 달콤한 유혹 뒤에는 비틀린 진실이 도사리고 있었다.",
			"이 숲은 모든 것을 환영한다. 아주 특별한 방식으로.",
			"탐험대는 웃음 속에 숨겨진 그림자를 향해 발을 내딛었다."
		],
		"english": [
			"Deep in the Amazon forest. A seemingly wondrous paradise.",
			"But behind the sweet temptation lay a twisted truth.",
			"This forest welcomes everything. In a very special way.",
			"The expedition stepped towards the shadow hidden within the laughter."
		],
		"japanese": [
			"アマゾン森林の奥深く。一見、驚くべき楽園。",
			"しかし、甘い誘惑の裏には、歪んだ真実が潜んでいた。",
			"この森はすべてを歓迎する。非常に特別な方法で。",
			"探検隊は、笑い声の中に隠された影へと足を踏み入れた。"
		],
		"chinese": [
			"亚马逊森林深处。一个看似奇妙的天堂。",
			"然而，在甜美的诱惑背后，隐藏着一个扭曲的真相。",
			"这片森林欢迎一切。以一种非常特殊的方式。",
			"探险队向着隐藏在笑声中的阴影迈出了脚步。"
		],
		"french": [
			"Au plus profond de la forêt amazonienne. Un paradis apparemment merveilleux.",
			"Mais derrière la douce tentation se cachait une vérité tordue.",
			"Cette forêt accueille tout. D'une manière très spéciale.",
			"L'expédition s'avança vers l'ombre cachée dans le rire."
		],
		"spanish": [
			"En lo profundo de la selva amazónica. Un paraíso aparentemente maravilloso.",
			"Pero detrás de la dulce tentación, se escondía una verdad retorcida.",
			"Este bosque da la bienvenida a todo. De una manera muy especial.",
			"La expedición se adentró hacia la sombra oculta en la risa."
		],
		"vietnamese": [
			"Sâu trong rừng Amazon. Một thiên đường tưởng chừng kỳ diệu.",
			"Nhưng đằng sau sự cám dỗ ngọt ngào là một sự thật méo mó.",
			"Khu rừng này chào đón mọi thứ. Theo một cách rất đặc biệt.",
			"Đoàn thám hiểm bước về phía bóng tối ẩn mình trong tiếng cười."
		],
		"thai": [
			"ลึกเข้าไปในป่าอะเมซอน ดินแดนที่ดูเหมือนสวรรค์อันน่าพิศวง",
			"แต่เบื้องหลังความเย้ายวนอันหอมหวาน กลับซ่อนเร้นความจริงที่บิดเบี้ยว",
			"ป่าแห่งนี้ต้อนรับทุกสิ่ง ในแบบที่พิเศษสุด",
			"คณะสำรวจก้าวไปสู่เงามืดที่ซ่อนอยู่ในเสียงหัวเราะ"
		],
		"hindi": [
			"अमेज़न जंगल की गहराई में। एक अद्भुत लगने वाला स्वर्ग।",
			"लेकिन मीठे प्रलोभन के पीछे एक विकृत सत्य छिपा था।",
			"यह जंगल हर चीज़ का स्वागत करता है। बहुत ही खास तरीके से।",
			"अभियान दल हँसी में छिपी छाया की ओर बढ़ा।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "기이하도록 아름다운 숲. 생명의 기운이 넘실거렸다.",
						"english": "A strangely beautiful forest. Teeming with the vitality of life.",
						"japanese": "奇妙なほど美しい森。生命の息吹が満ち溢れていた。",
						"chinese": "一片奇美诡谲的森林。生命气息澎湃。",
						"french": "Une forêt étrangement belle. Débordante de vitalité.",
						"spanish": "Un bosque extrañamente hermoso. Rebosa de vitalidad.",
						"vietnamese": "Một khu rừng đẹp đến kỳ lạ. Tràn ngập sức sống.",
						"thai": "ป่าที่งดงามแปลกตา พลุ่งพล่านไปด้วยพลังชีวิต",
						"hindi": "एक अजीबोगरीब सुंदर जंगल। जीवन की ऊर्जा से भरपूर।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…여기가 그 유혹의 숲? 소문보다 훨씬 아름다워.",
						"english": "...Is this the Forest of Temptation? Much more beautiful than rumored.",
						"japanese": "…ここがその誘惑の森？噂よりもずっと美しい。",
						"chinese": "……这里就是那诱惑之森？比传闻中美丽多了。",
						"french": "...C'est la Forêt de la Tentation ? Bien plus belle que les rumeurs.",
						"spanish": "...¿Es este el Bosque de la Tentación? Mucho más hermoso de lo que se rumorea.",
						"vietnamese": "...Đây là khu rừng cám dỗ đó sao? Đẹp hơn nhiều so với lời đồn.",
						"thai": "...นี่คือป่าแห่งการล่อลวงงั้นหรือ? งดงามกว่าที่เล่าลือกันมาก",
						"hindi": "...क्या यह प्रलोभन का जंगल है? अफवाहों से कहीं ज्यादा सुंदर।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"action": "enter",
					"speaker": "bracken",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						5,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "오! 새로운 손님들이 오셨군요! 어서 와요, 생명의 숲에!",
						"english": "Oh! New guests have arrived! Welcome to the Forest of Life!",
						"japanese": "おお！新しいお客様がいらっしゃいましたね！ようこそ、生命の森へ！",
						"chinese": "哦！新客人来了！欢迎来到生命之森！",
						"french": "Oh ! De nouveaux invités sont arrivés ! Bienvenue dans la Forêt de Vie !",
						"spanish": "¡Oh! ¡Han llegado nuevos invitados! ¡Bienvenidos al Bosque de la Vida!",
						"vietnamese": "Ôi! Khách mới đã đến rồi! Chào mừng đến với Rừng Sự Sống!",
						"thai": "โอ้! แขกใหม่มาแล้ว! ยินดีต้อนรับสู่ป่าแห่งชีวิต!",
						"hindi": "ओह! नए मेहमान आ गए हैं! जीवन के जंगल में आपका स्वागत है!"
					},
					"speaker": "bracken"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…너무 과한 환대인데.",
						"english": "...This is too much hospitality.",
						"japanese": "…あまりにも過剰な歓迎だな。",
						"chinese": "……这欢迎太过了。",
						"french": "...C'est une hospitalité excessive.",
						"spanish": "...Esto es demasiada hospitalidad.",
						"vietnamese": "...Sự chào đón này quá mức rồi.",
						"thai": "...ต้อนรับขับสู้มากเกินไปนะ",
						"hindi": "...यह बहुत ज्यादा मेहमाननवाज़ी है।"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "bracken",
					"content": {
						"korean": "호호, 뭘요! 이 숲은 언제나 여러분을 기다렸답니다!",
						"english": "Hehe, not at all! This forest has always waited for you!",
						"japanese": "ほほ、何を！この森はいつもあなたたちを待っていましたよ！",
						"chinese": "呵呵，没什么！这片森林一直在等着你们呢！",
						"french": "Hoho, pas du tout ! Cette forêt vous a toujours attendus !",
						"spanish": "¡Jojo, para nada! ¡Este bosque siempre les ha esperado!",
						"vietnamese": "Hô hô, không có gì đâu! Khu rừng này luôn chờ đợi các bạn!",
						"thai": "โฮะๆ ไม่เป็นไรเลย! ป่าแห่งนี้รอคอยพวกคุณมาโดยตลอด!",
						"hindi": "हो हो, कुछ भी नहीं! इस जंगल ने हमेशा आपका इंतजार किया है!"
					},
					"type": "speech",
					"emotion": "happy"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						2
					],
					"action": "enter",
					"speaker": "bracken"
				},
				{
					"content": {
						"korean": "자, 보세요. 숲이 여러분을 얼마나 환영하는지!",
						"english": "Come, look. See how much the forest welcomes you!",
						"japanese": "さあ、見てください。森がどれほどあなたたちを歓迎しているか！",
						"chinese": "来，看吧。看看这森林多么欢迎你们！",
						"french": "Venez, regardez. Voyez à quel point la forêt vous accueille !",
						"spanish": "Vengan, miren. ¡Vean cuánto les da la bienvenida el bosque!",
						"vietnamese": "Nào, nhìn xem. Thấy khu rừng chào đón các bạn nhiều đến mức nào không!",
						"thai": "มาสิ ดูสิว่าป่าแห่งนี้ต้อนรับพวกคุณมากแค่ไหน!",
						"hindi": "आओ, देखो। देखो जंगल तुम्हारा कितना स्वागत करता है!"
					},
					"speaker": "bracken",
					"type": "speech",
					"emotion": "happy"
				},
				{
					"content": {
						"korean": "…이건? 바닥에 웬 매끈한 잔해가 널려있어.",
						"english": "...What's this? Smooth residue is scattered on the floor.",
						"japanese": "「…これは？ 床になめらかな残骸が散らばっている。」",
						"chinese": "“…这是什么？ 地板上散落着光滑的残骸。”",
						"french": "...Qu'est-ce que c'est ? Des résidus lisses sont éparpillés sur le sol.",
						"spanish": "¿...Qué es esto? Hay residuos lisos esparcidos por el suelo.",
						"vietnamese": "...Cái gì đây? Có những mảnh vỡ trơn bóng nằm rải rác trên sàn.",
						"thai": "...นี่อะไรน่ะ? มีเศษซากเรียบลื่นเกลื่อนพื้นเลย",
						"hindi": "...यह क्या है? फर्श पर कुछ चिकना अवशेष बिखरा पड़ा है।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그리고 끈끈한 수액까지… 식물 같지는 않은데.",
						"english": "And sticky sap... doesn't look like a plant.",
						"japanese": "「それに、べたつく樹液まで…植物じゃないみたいだ。」",
						"chinese": "“还有黏糊糊的树液… 不像植物。”",
						"french": "Et de la sève collante... Ça ne ressemble pas à une plante.",
						"spanish": "Y savia pegajosa... No parece una planta.",
						"vietnamese": "Cả nhựa cây dính nhớp nữa... Không giống thực vật.",
						"thai": "แล้วก็ยางไม้เหนียวๆ ด้วย... ไม่เหมือนพืชเลย",
						"hindi": "और चिपचिपा रस भी... यह किसी पौधे का नहीं लगता।"
					},
					"speaker": "character_1",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "호호! 그건 숲의 새로운 생명들이 태어나는 흔적이랍니다! 아주 매끄럽고 끈끈하죠?",
						"english": "Hoho! Those are traces of new lives being born in the forest! So smooth and sticky, aren't they?",
						"japanese": "「ホホ！ それは森の新しい生命が生まれる痕跡ですよ！ とてもなめらかで粘り気があるでしょう？」",
						"chinese": "“呵呵！ 那是森林里新生命诞生的痕迹！ 非常光滑黏腻吧？”",
						"french": "Hoho ! Ce sont les traces de nouvelles vies qui naissent dans la forêt ! Très lisses et collantes, n'est-ce pas ?",
						"spanish": "¡Jojó! ¡Esas son las huellas de nuevas vidas naciendo en el bosque! Muy lisas y pegajosas, ¿verdad?",
						"vietnamese": "Hô hô! Đó là dấu vết của những sự sống mới đang ra đời trong rừng đấy! Rất trơn và dính phải không?",
						"thai": "โฮะโฮะ! นั่นคือร่องรอยของการกำเนิดสิ่งมีชีวิตใหม่ในป่าน่ะ! เรียบลื่นและเหนียวหนึบใช่ไหมล่ะ?",
						"hindi": "होहो! ये जंगल में नए जीवन के जन्म के निशान हैं! बहुत चिकने और चिपचिपे, है ना?"
					},
					"speaker": "bracken",
					"type": "speech",
					"emotion": "happy"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…기분 나쁜데.",
						"english": "...Creepy.",
						"japanese": "「…気持ち悪いな。」",
						"chinese": "“…真让人不舒服。”",
						"french": "...C'est inquiétant.",
						"spanish": "...Me da escalofríos.",
						"vietnamese": "...Thật ghê.",
						"thai": "...รู้สึกไม่ดีเลย",
						"hindi": "...अजीब लग रहा है।"
					},
					"speaker": "character_any"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "bracken"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "자자, 저길 보세요! 덫에 걸려 죽어가던 새도 숲의 품에서 되살아났지 뭐예요!",
						"english": "Come, come, look over there! Even a bird caught in a trap and dying was revived in the forest's embrace!",
						"japanese": "「さあさあ、あそこを見てください！ 罠にかかって死にかけていた鳥も、森の懐で生き返ったんですよ！」",
						"chinese": "“来来，看那边！ 连被陷阱困住、奄奄一息的鸟儿，也在森林的怀抱中复活了呢！”",
						"french": "Venez, venez, regardez là-bas ! Même un oiseau piégé et mourant a été ranimé dans l'étreinte de la forêt !",
						"spanish": "¡Vamos, vamos, miren allí! ¡Hasta un pájaro atrapado y moribundo revivió en el abrazo del bosque!",
						"vietnamese": "Nào nào, nhìn đằng kia xem! Ngay cả con chim mắc bẫy đang hấp hối cũng hồi sinh trong vòng tay của rừng đấy!",
						"thai": "มาเร็ว มาดูตรงนั้นสิ! แม้นกที่ติดกับดักกำลังจะตาย ก็ฟื้นคืนชีพขึ้นมาในอ้อมกอดของป่าเลยนะ!",
						"hindi": "आओ, आओ, वहाँ देखो! एक पक्षी जो जाल में फँसकर मर रहा था, वह भी जंगल की गोद में फिर से जीवित हो गया!"
					},
					"speaker": "bracken"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "말도 안 돼… 상처가 깨끗이 아물었어.",
						"english": "No way... The wounds healed perfectly.",
						"japanese": "「信じられない…傷がすっかり治っている。」",
						"chinese": "“不可能… 伤口竟然完全愈合了。”",
						"french": "C'est incroyable... Les blessures ont parfaitement cicatrisé.",
						"spanish": "No puede ser... Las heridas han cicatrizado perfectamente.",
						"vietnamese": "Không thể tin được... Vết thương đã lành lặn hoàn toàn.",
						"thai": "เป็นไปไม่ได้... แผลหายสนิทเลย",
						"hindi": "असंभव... घाव पूरी तरह ठीक हो गए हैं।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "근데 왜 이렇게… 기분 나쁘게 생기발랄하지? 너무 인위적인데.",
						"english": "But why is it so... unsettlingly vibrant? It's too artificial.",
						"japanese": "「でも、なんでこんなに…気味悪く生き生きしてるんだ？ あまりに不自然だ。」",
						"chinese": "“但为什么这么… 令人不安地生机勃勃？ 太人工化了。”",
						"french": "Mais pourquoi est-ce si... étrangement vif ? C'est trop artificiel.",
						"spanish": "Pero, ¿por qué está tan... inquietantemente vibrante? Es demasiado artificial.",
						"vietnamese": "Nhưng tại sao lại... sinh động đến đáng sợ như vậy? Thật quá nhân tạo.",
						"thai": "แต่ทำไมมันถึง... สดใสมีชีวิตชีวาจนน่าขนลุกขนาดนี้? มันดูประดิษฐ์เกินไป",
						"hindi": "लेकिन यह इतनी... अजीब तरह से जीवंत क्यों है? यह बहुत कृत्रिम लग रहा है।"
					},
					"speaker": "character_2"
				},
				{
					"content": {
						"korean": "숲의 사랑을 받은 덕분이랍니다! 이 숲은 모든 걸 치유하고 품어주니까요!",
						"english": "It's all thanks to the forest's love! This forest heals and embraces everything!",
						"japanese": "「森の愛を受けたおかげですよ！ この森はすべてを癒し、包み込みますから！」",
						"chinese": "“这都是因为得到了森林的爱！ 这片森林治愈并包容一切！”",
						"french": "C'est grâce à l'amour de la forêt ! Cette forêt guérit et embrasse tout !",
						"spanish": "¡Es gracias al amor del bosque! ¡Este bosque sana y abraza todo!",
						"vietnamese": "Đó là nhờ tình yêu của rừng đấy! Rừng này chữa lành và bao dung tất cả mà!",
						"thai": "เป็นเพราะได้รับความรักจากป่าน่ะสิ! ป่าแห่งนี้เยียวยาและโอบอุ้มทุกสิ่ง!",
						"hindi": "यह सब जंगल के प्यार की वजह से है! यह जंगल सब कुछ ठीक करता है और गले लगाता है!"
					},
					"speaker": "bracken",
					"type": "speech",
					"emotion": "happy"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "불편한 건강함이 탐험대를 감쌌다. 숲의 환대는 비틀려 있었다.",
						"english": "An unsettling health enveloped the expedition team. The forest's hospitality was twisted.",
						"japanese": "「不気味なほどの健全さが探検隊を包んだ。森の歓待は歪んでいた。」",
						"chinese": "“一种令人不安的健康笼罩了探险队。 森林的款待是扭曲的。”",
						"french": "Une santé inquiétante enveloppa l'équipe d'expédition. L'hospitalité de la forêt était tordue.",
						"spanish": "Una salud inquietante envolvió al equipo de expedición. La hospitalidad del bosque estaba retorcida.",
						"vietnamese": "Một sự khỏe mạnh đáng sợ bao trùm đội thám hiểm. Lòng hiếu khách của khu rừng đã bị bóp méo.",
						"thai": "ความสมบูรณ์ที่น่าอึดอัดโอบล้อมคณะสำรวจ การต้อนรับของป่าบิดเบี้ยวไป",
						"hindi": "एक अजीबोगरीब स्वस्थता ने अभियान दल को घेर लिया। जंगल का आतिथ्य विकृत था।"
					},
					"speaker": "narrator"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "bracken",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "happy",
					"speaker": "bracken",
					"content": {
						"korean": "이제 여러분도 숲의 일부가 될 시간이에요! 영원히 함께할 수 있어요!",
						"english": "Now it's time for you to become part of the forest! You can be together forever!",
						"japanese": "「さあ、あなたたちも森の一部になる時です！ 永遠に一緒になれますよ！」",
						"chinese": "“现在，是时候让你们也成为森林的一部分了！ 你们可以永远在一起！”",
						"french": "Maintenant, il est temps pour vous de faire partie de la forêt ! Vous pourrez être ensemble pour toujours !",
						"spanish": "¡Ahora es el momento de que ustedes también formen parte del bosque! ¡Podrán estar juntos para siempre!",
						"vietnamese": "Giờ là lúc các bạn cũng trở thành một phần của rừng rồi! Các bạn có thể ở bên nhau mãi mãi!",
						"thai": "ตอนนี้ถึงเวลาแล้วที่คุณจะกลายเป็นส่วนหนึ่งของป่า! คุณจะได้อยู่ด้วยกันตลอดไป!",
						"hindi": "अब आपके लिए जंगल का हिस्सा बनने का समय आ गया है! आप हमेशा के लिए एक साथ रह सकते हैं!"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…이 숲, 뭔가 이상해. 어서 여기서 벗어나야 해.",
						"english": "...This forest feels wrong. We need to get out of here.",
						"japanese": "「…この森、何かおかしい。早くここから出ないと。」",
						"chinese": "「……这片森林不对劲。我们得赶紧离开这里。」",
						"french": "...Cette forêt est étrange. Il faut vite en sortir.",
						"spanish": "...Este bosque es extraño. Tenemos que salir de aquí rápido.",
						"vietnamese": "...Khu rừng này thật kỳ lạ. Phải thoát ra khỏi đây ngay.",
						"thai": "...ป่านี้แปลกๆ เราต้องรีบออกไปจากที่นี่แล้ว.",
						"hindi": "...यह जंगल कुछ अजीब है। हमें जल्दी यहां से निकलना होगा।"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"speaker": "bracken",
					"content": {
						"korean": "어딜 가시려고요? 이미 숲의 심장부까지 오셨는데!",
						"english": "Where do you think you're going? You're already at the heart of the forest!",
						"japanese": "「どこへ行こうと？もう森の心臓部まで来ているというのに！」",
						"chinese": "「想去哪儿？你们已经来到森林深处了！」",
						"french": "Où croyez-vous aller ? Vous êtes déjà au cœur de la forêt !",
						"spanish": "¿A dónde crees que vas? ¡Ya estás en el corazón del bosque!",
						"vietnamese": "Đi đâu thế? Các ngươi đã đến tận trung tâm khu rừng rồi mà!",
						"thai": "จะไปไหนกัน? พวกเจ้ามาถึงใจกลางป่าแล้วนะ!",
						"hindi": "कहां जा रहे हो? तुम तो पहले से ही जंगल के दिल में हो!"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "기이한 웃음소리가 길을 막았다. 이제 돌아갈 수 없었다.",
						"english": "Eerie laughter blocked the way. There was no turning back now.",
						"japanese": "「奇妙な笑い声が道を塞いだ。もう引き返せなかった。」",
						"chinese": "「一阵诡异的笑声挡住了去路。已无回头路。」",
						"french": "Un rire étrange bloqua le chemin. Il n'y avait plus de retour possible.",
						"spanish": "Una risa extraña bloqueó el camino. Ya no había vuelta atrás.",
						"vietnamese": "Tiếng cười ghê rợn chặn đường. Giờ không thể quay lại được nữa.",
						"thai": "เสียงหัวเราะประหลาดขวางทางไว้ ไม่มีทางย้อนกลับอีกแล้ว.",
						"hindi": "एक अजीब हंसी ने रास्ता रोक दिया। अब लौटने का कोई रास्ता नहीं था।"
					}
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…겨우 이 정도로는… 숲은 멈추지 않아…",
						"english": "...This is hardly enough... The forest will not stop...",
						"japanese": "「…これしきでは…森は止まらない…」",
						"chinese": "「……仅仅如此……森林是不会停止的……」",
						"french": "...C'est à peine suffisant... La forêt ne s'arrêtera pas...",
						"spanish": "...Con esto no basta... El bosque no se detendrá...",
						"vietnamese": "...Chừng này thì không đủ đâu... Khu rừng sẽ không dừng lại...",
						"thai": "...แค่นี้ไม่พอหรอก... ป่านี้ไม่มีวันหยุด...",
						"hindi": "...बस इतना ही... जंगल नहीं रुकेगा..."
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "웃기지 마! 우리가 널 막았다!",
						"english": "Don't make me laugh! We stopped you!",
						"japanese": "ふざけるな！俺たちが止めたんだ！",
						"chinese": "别开玩笑了！我们阻止了你！",
						"french": "Ne me fais pas rire ! Nous t'avons arrêté !",
						"spanish": "¡No me hagas reír! ¡Te detuvimos!",
						"vietnamese": "Đừng có đùa! Bọn ta đã ngăn ngươi lại!",
						"thai": "อย่ามาล้อเล่น! พวกเราหยุดแกได้!",
						"hindi": "हँसाओ मत! हमने तुम्हें रोक दिया!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "승리의 환호성 뒤로, 숲은 여전히 기묘하게 속삭였다. 이제 진짜 시작일 뿐이었다.",
						"english": "Behind the cheers of victory, the forest still whispered strangely. It was only the real beginning.",
						"japanese": "勝利の歓声の裏で、森はまだ奇妙に囁いていた。これは本当の始まりに過ぎなかった。",
						"chinese": "胜利的欢呼声背后，森林依然诡异地低语着。这仅仅是真正的开始。",
						"french": "Derrière les cris de victoire, la forêt chuchotait toujours étrangement. Ce n'était que le vrai début.",
						"spanish": "Detrás de los vítores de la victoria, el bosque seguía susurrando extrañamente. Solo era el verdadero comienzo.",
						"vietnamese": "Đằng sau tiếng reo hò chiến thắng, khu rừng vẫn thì thầm một cách kỳ lạ. Đây chỉ mới là khởi đầu thực sự.",
						"thai": "เบื้องหลังเสียงโห่ร้องแห่งชัยชนะ ป่ายังคงกระซิบกระซาบอย่างแปลกประหลาด นี่เป็นเพียงจุดเริ่มต้นที่แท้จริงเท่านั้น",
						"hindi": "जीत के जयकारे के पीछे, जंगल अभी भी अजीब तरह से फुसफुसा रहा था। यह तो बस असली शुरुआत थी।"
					},
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 숲의 중앙에서 모습을 드러냈다.",
						"english": "A colossal shadow emerged from the center of the forest.",
						"japanese": "「巨大な影が森の中央に姿を現した。」",
						"chinese": "「巨大的身影在森林中央显现。」",
						"french": "Une ombre colossale émergea du centre de la forêt.",
						"spanish": "Una sombra colosal emergió del centro del bosque.",
						"vietnamese": "Một cái bóng khổng lồ xuất hiện từ trung tâm khu rừng.",
						"thai": "เงาร่างมหึมาปรากฏขึ้นจากใจกลางป่า.",
						"hindi": "जंगल के केंद्र से एक विशाल छाया उभरी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…왔는가. 숲의 새로운 손님들.",
						"english": "...So, you've arrived. New guests of the forest.",
						"japanese": "「…来たか。森の新たな客たちよ。」",
						"chinese": "「……来了吗。森林的新客人。」",
						"french": "...Vous êtes donc arrivés. Nouveaux hôtes de la forêt.",
						"spanish": "...Así que han llegado. Los nuevos invitados del bosque.",
						"vietnamese": "...Đã đến rồi sao. Những vị khách mới của khu rừng.",
						"thai": "...มาถึงแล้วสินะ แขกใหม่ของป่า.",
						"hindi": "...तो तुम आ गए। जंगल के नए मेहमान।"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "네가 이 숲을 이렇게 만든 주범이군!",
						"english": "You're the mastermind behind this twisted forest!",
						"japanese": "「お前がこの森をこんなにした元凶だな！」",
						"chinese": "「你就是把这片森林变成这样的罪魁祸首！」",
						"french": "C'est toi le cerveau derrière cette forêt tordue !",
						"spanish": "¡Tú eres el cerebro detrás de este bosque retorcido!",
						"vietnamese": "Ngươi chính là kẻ chủ mưu đã biến khu rừng này thành ra thế này!",
						"thai": "แกสินะคือตัวการที่ทำให้ป่านี้เป็นแบบนี้!",
						"hindi": "तुम ही हो इस बिगड़े हुए जंगल के पीछे का मास्टरमाइंड!"
					}
				},
				{
					"spot": [
						6,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "bracken",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "어머, {random_boss}! 이분들도 숲의 '최고의 환영'을 받을 자격이 충분해요!",
						"english": "Oh, {random_boss}! These folks are perfectly deserving of the forest's 'warmest welcome'!",
						"japanese": "「あら、{random_boss}！この方々も森の『最高の歓迎』を受けるにふさわしいわ！」",
						"chinese": "「哎呀，{random_boss}！这些家伙也完全配得上森林的“最高欢迎”呢！」",
						"french": "Oh, {random_boss} ! Ces gens méritent amplement le « meilleur accueil » de la forêt !",
						"spanish": "¡Oh, {random_boss}! ¡Estas personas merecen plenamente la 'más cálida bienvenida' del bosque!",
						"vietnamese": "Ôi, {random_boss}! Những người này cũng xứng đáng nhận 'sự chào đón nồng nhiệt nhất' của khu rừng đấy!",
						"thai": "โอ้, {random_boss}! พวกเขาสมควรได้รับ 'การต้อนรับที่ยอดเยี่ยมที่สุด' จากป่านี้แล้วล่ะ!",
						"hindi": "ओह, {random_boss}! ये लोग भी जंगल के 'सबसे अच्छे स्वागत' के पूरी तरह हकदार हैं!"
					},
					"speaker": "bracken"
				},
				{
					"content": {
						"korean": "…그래. 곧 숲의 일부가 될 것이다.",
						"english": "...Yes. Soon, you will become one with the forest.",
						"japanese": "「…そうだ。すぐに森の一部となるだろう。」",
						"chinese": "「……没错。很快，你就会成为森林的一部分。」",
						"french": "...Oui. Bientôt, vous ferez partie de la forêt.",
						"spanish": "...Sí. Pronto, serás parte del bosque.",
						"vietnamese": "...Đúng vậy. Chẳng mấy chốc, các ngươi sẽ trở thành một phần của khu rừng.",
						"thai": "...ใช่แล้ว อีกไม่นาน เจ้าก็จะกลายเป็นส่วนหนึ่งของป่านี้.",
						"hindi": "...हां। जल्द ही, तुम जंगल का हिस्सा बन जाओगे।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "bracken",
					"action": "exit",
					"direction": "down",
					"duration_ms": 400,
					"type": "direction"
				},
				{
					"speaker": "bracken",
					"content": {
						"korean": "호호… 즐거운 시간 보내세요!",
						"english": "Hoho... Have a delightful time!",
						"japanese": "「うふふ…楽しい時間をお過ごしください！」",
						"chinese": "「呵呵……祝你们玩得开心！」",
						"french": "Hoho... Passez un agréable moment !",
						"spanish": "Jojo... ¡Que lo pasen de maravilla!",
						"vietnamese": "Hô hô... Chúc các ngươi có một khoảng thời gian vui vẻ!",
						"thai": "โฮ่ๆ... ขอให้สนุกนะ!",
						"hindi": "हो हो... खूब मज़े करो!"
					},
					"type": "speech",
					"emotion": "happy"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "하하… 너희도 결국 숲의 일부가 될 뿐. 영원히.",
						"english": "Haha... You too will eventually become part of the forest. Forever.",
						"japanese": "ハハ…お前たちも結局、森の一部になるだけだ。永遠に。",
						"chinese": "哈哈……你们最终也只会成为森林的一部分。永远。",
						"french": "Haha... Vous aussi finirez par faire partie de la forêt. Pour toujours.",
						"spanish": "Jaja... Vosotros también acabaréis siendo parte del bosque. Para siempre.",
						"vietnamese": "Haha… Cuối cùng các ngươi cũng sẽ trở thành một phần của khu rừng thôi. Mãi mãi.",
						"thai": "ฮ่าฮ่า… พวกแกก็จะต้องกลายเป็นส่วนหนึ่งของป่าในที่สุด ตลอดไป",
						"hindi": "हाहा… तुम भी अंततः जंगल का हिस्सा बन जाओगे। हमेशा के लिए।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "happy"
				},
				{
					"content": {
						"korean": "…아직이야. 아직 안 끝났어!",
						"english": "...Not yet. It's not over yet!",
						"japanese": "…まだだ。まだ終わってない！",
						"chinese": "……还没。还没结束！",
						"french": "...Pas encore. Ce n'est pas encore fini !",
						"spanish": "...Todavía no. ¡Aún no ha terminado!",
						"vietnamese": "…Chưa đâu. Vẫn chưa kết thúc!",
						"thai": "…ยังไม่ใช่. ยังไม่จบ!",
						"hindi": "…अभी नहीं। अभी खत्म नहीं हुआ!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			]
		}
	]
} as const;
