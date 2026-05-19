export const scenario_Lumen_Echoes_Sequel_03 = {
	"scenario_id": "Lumen_Echoes_Sequel_03",
	"order": 3,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"vex": {
			"id": "mon_aa76550e-0b43-4273-a2f8-2463bdc9b848",
			"name": {
				"korean": "벡스",
				"english": "Vex",
				"japanese": "ベックス",
				"chinese": "维克斯",
				"french": "Vex",
				"spanish": "Vex",
				"vietnamese": "Vex",
				"thai": "เว็กซ์",
				"hindi": "वेक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/6c55d5a5-0393-451b-d41f-fce1a4ee1700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2ea1ea45-9ca6-43b6-2c73-ed5ae7cdaf00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "침묵만이 흐르는 잿빛 벌판. 버려진 인형처럼 모두가 멈춰 있었다.",
						"english": "A grey field, where only silence flowed. Everyone stood still, like discarded dolls.",
						"japanese": "沈黙だけが流れる灰色の平原。捨てられた人形のように、皆が止まっていた。",
						"chinese": "只有寂静流淌的灰色旷野。所有人像被遗弃的玩偶一样停滞不前。",
						"french": "Une plaine grise où seul le silence régnait. Tous étaient immobiles, comme des poupées abandonnées.",
						"spanish": "Un campo gris donde solo fluía el silencio. Todos permanecían inmóviles, como muñecas desechadas.",
						"vietnamese": "Cánh đồng xám xịt chỉ có sự im lặng trôi qua. Tất cả đứng yên, như những con búp bê bị bỏ rơi.",
						"thai": "ทุ่งสีเทาที่ความเงียบงันไหลผ่าน มีแต่ความเงียบงัน ทุกคนหยุดนิ่งราวกับตุ๊กตาที่ถูกทิ้ง",
						"hindi": "एक धूसर मैदान, जहाँ केवल खामोशी बह रही थी। सभी रुके हुए थे, जैसे छोड़ी हुई गुड़िया।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "vex",
					"type": "direction",
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "vex",
					"content": {
						"korean": "…흐윽. 엄마, 아빠…",
						"english": "…Sniffle. Mom, Dad…",
						"japanese": "…うぅ。ママ、パパ…",
						"chinese": "…呜咽。妈妈，爸爸…",
						"french": "…Sanglot. Maman, Papa…",
						"spanish": "…Snif. Mamá, Papá…",
						"vietnamese": "…Khụt khịt. Mẹ, cha…",
						"thai": "…ฮึก. แม่, พ่อ…",
						"hindi": "…सूँघना। माँ, पिताजी…"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "꼬마야, 괜찮니?",
						"english": "Little one, are you alright?",
						"japanese": "坊や、大丈夫かい？",
						"chinese": "孩子，你还好吗？",
						"french": "Petit(e), ça va ?",
						"spanish": "Pequeño/a, ¿estás bien?",
						"vietnamese": "Nhóc con, cháu không sao chứ?",
						"thai": "หนูน้อย ไม่เป็นไรนะ?",
						"hindi": "छोटे, तुम ठीक हो?"
					}
				},
				{
					"speaker": "vex",
					"content": {
						"korean": "길을 잃었어요… 너무 무서워요…",
						"english": "I'm lost… I'm so scared…",
						"japanese": "道に迷いました… とても怖いです…",
						"chinese": "我迷路了… 我好害怕…",
						"french": "Je suis perdu(e)… J'ai si peur…",
						"spanish": "Me he perdido… Tengo mucho miedo…",
						"vietnamese": "Cháu bị lạc rồi… Cháu sợ lắm…",
						"thai": "หนูหลงทาง… กลัวมากเลย…",
						"hindi": "मैं खो गया हूँ… मैं बहुत डरा हुआ हूँ…"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "내가 도와줄게.",
						"english": "I'll help you.",
						"japanese": "私が助けてあげる。",
						"chinese": "我会帮你。",
						"french": "Je vais t'aider.",
						"spanish": "Te ayudaré.",
						"vietnamese": "Ta sẽ giúp cháu.",
						"thai": "ฉันจะช่วยคุณเอง",
						"hindi": "मैं तुम्हारी मदद करूँगा।"
					}
				},
				{
					"type": "speech",
					"emotion": "happy",
					"speaker": "vex",
					"content": {
						"korean": "…따뜻하다.",
						"english": "…It's warm.",
						"japanese": "…温かい。",
						"chinese": "…好温暖。",
						"french": "…C'est chaud.",
						"spanish": "…Qué cálido.",
						"vietnamese": "…Thật ấm áp.",
						"thai": "…อบอุ่นจัง",
						"hindi": "…यह गर्म है।"
					}
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "vex",
					"type": "direction",
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "여기는… 이상한 소리가 들려요.",
						"english": "I hear... a strange sound here.",
						"japanese": "ここで…変な音が聞こえます。",
						"chinese": "这里…有奇怪的声音。",
						"french": "Ici... j'entends un son étrange.",
						"spanish": "Aquí... se oye un sonido extraño.",
						"vietnamese": "Ở đây... có tiếng động lạ.",
						"thai": "ที่นี่...มีเสียงแปลกๆ",
						"hindi": "यहाँ... एक अजीब आवाज़ आ रही है।"
					},
					"speaker": "vex",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리?",
						"english": "What sound?",
						"japanese": "どんな音？",
						"chinese": "什么声音？",
						"french": "Quel son ?",
						"spanish": "¿Qué sonido?",
						"vietnamese": "Tiếng gì vậy?",
						"thai": "เสียงอะไร?",
						"hindi": "कैसी आवाज़?"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "vex",
					"content": {
						"korean": "아주 슬픈… 노래 같아요. 배가 고픈 소리기도 하고…",
						"english": "Like a very sad... song. And a hungry sound too...",
						"japanese": "とても悲しい…歌のようです。お腹を空かせた音のようでもあります…",
						"chinese": "像一首…非常悲伤的歌。也像是饥饿的声音…",
						"french": "Comme une... chanson très triste. Et un son de faim aussi...",
						"spanish": "Como una... canción muy triste. Y también un sonido de hambre...",
						"vietnamese": "Giống như một bài hát... rất buồn. Cũng giống như tiếng bụng đói vậy...",
						"thai": "เหมือนเพลง...เศร้ามากๆ เลย แล้วก็เหมือนเสียงหิวด้วย...",
						"hindi": "एक बहुत दुख भरा... गीत लगता है। और भूखे होने की आवाज़ भी..."
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "….",
						"english": "...",
						"japanese": "…",
						"chinese": "……",
						"french": "...",
						"spanish": "...",
						"vietnamese": "...",
						"thai": "...",
						"hindi": "..."
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "언니(오빠)의 따뜻한 마음이… 이 소리를 잠재워줄 수 있을 거야.",
						"english": "Your warm heart... might be able to quiet this sound.",
						"japanese": "あなたの温かい心が…この音を鎮めてくれるでしょう。",
						"chinese": "你的温暖的心…或许能平息这个声音。",
						"french": "Ton cœur chaleureux… pourrait apaiser ce son.",
						"spanish": "Tu cálido corazón... podría calmar este sonido.",
						"vietnamese": "Trái tim ấm áp của bạn... có thể xoa dịu âm thanh này.",
						"thai": "ใจอันอบอุ่นของคุณ...อาจจะช่วยให้เสียงนี้สงบลงได้",
						"hindi": "तुम्हारा गर्मजोशी भरा दिल... शायद इस आवाज़ को शांत कर पाएगा।"
					},
					"speaker": "vex"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						5,
						2
					],
					"speaker": "vex",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "사람들의 마음속에는… 아주 큰 고통이 숨어있대요.",
						"english": "They say... a great pain hides deep within people's hearts.",
						"japanese": "人々の心には…大きな苦痛が隠れているそうです。",
						"chinese": "据说…人们的心中隐藏着巨大的痛苦。",
						"french": "On dit qu'une... grande douleur se cache au fond du cœur des gens.",
						"spanish": "Dicen que... un gran dolor se esconde en el corazón de las personas.",
						"vietnamese": "Người ta nói rằng... một nỗi đau rất lớn ẩn sâu trong trái tim con người.",
						"thai": "พวกเขาว่ากันว่า...มีความเจ็บปวดอันยิ่งใหญ่ซ่อนอยู่ในจิตใจของผู้คน",
						"hindi": "कहते हैं... लोगों के दिलों में एक बड़ा दर्द छुपा होता है।"
					},
					"speaker": "vex",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…억눌린 절규.",
						"english": "...Suppressed screams.",
						"japanese": "…抑えられた叫び。",
						"chinese": "……被压抑的呐喊。",
						"french": "...Des cris étouffés.",
						"spanish": "...Gritos reprimidos.",
						"vietnamese": "...Những tiếng kêu bị kìm nén.",
						"thai": "...เสียงกรีดร้องที่ถูกกดทับ",
						"hindi": "...दबी हुई चीखें।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "응. 그 고통이… 모이고 모여서… 날 만드는 거야.",
						"english": "Yes. That pain... gathers and gathers... to create me.",
						"japanese": "ええ。その苦痛が…集まって集まって…私を創るのよ。",
						"chinese": "嗯。那痛苦…汇聚起来…造就了我。",
						"french": "Oui. Cette douleur… se rassemble et se rassemble… pour me créer.",
						"spanish": "Sí. Ese dolor... se acumula y se acumula... para crearme.",
						"vietnamese": "Ừ. Nỗi đau đó... cứ tích tụ lại... để tạo ra tôi.",
						"thai": "ใช่ ความเจ็บปวดนั้น...รวมตัวกันแล้วรวมตัวกันอีก...เพื่อสร้างฉันขึ้นมา",
						"hindi": "हाँ। वह दर्द... इकट्ठा होता जाता है... और मुझे बनाता है।"
					},
					"speaker": "vex",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "너를?",
						"english": "You?",
						"japanese": "あなたを？",
						"chinese": "你？",
						"french": "Toi ?",
						"spanish": "¿A ti?",
						"vietnamese": "Bạn ư?",
						"thai": "เธอเหรอ?",
						"hindi": "तुम्हें?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그래. 난 그 고통을 모으는 '수집자'거든.",
						"english": "That's right. I'm the 'Collector' of that pain.",
						"japanese": "そうよ。私はその苦痛を集める「収集者」だからね。",
						"chinese": "对。我就是收集那些痛苦的“收集者”。",
						"french": "C'est exact. Je suis le « Collectionneur » de cette douleur.",
						"spanish": "Exacto. Soy el \"Coleccionista\" de ese dolor.",
						"vietnamese": "Đúng vậy. Tôi là 'Kẻ thu thập' những nỗi đau đó mà.",
						"thai": "ใช่แล้ว ฉันคือนัก 'สะสม' ความเจ็บปวดนั้น",
						"hindi": "हाँ। मैं उस दर्द का 'संग्राहक' हूँ।"
					},
					"speaker": "vex",
					"type": "speech",
					"emotion": "happy"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…!",
						"english": "…!",
						"japanese": "「…！」",
						"chinese": "…!",
						"french": "…!",
						"spanish": "…!",
						"vietnamese": "…!",
						"thai": "…!",
						"hindi": "…!"
					},
					"speaker": "character_any"
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
					"speaker": "vex",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "happy",
					"speaker": "vex",
					"content": {
						"korean": "언니(오빠)의 슬픔도… 나에게 줄 수 있지?",
						"english": "Your sorrow too… can you give it to me?",
						"japanese": "「お前の悲しみも… 俺にくれるのか？」",
						"chinese": "你的悲伤… 也能给我吗？",
						"french": "Ta tristesse aussi… peux-tu me la donner ?",
						"spanish": "¿Tu tristeza también… puedes dármela?",
						"vietnamese": "Nỗi buồn của anh/chị… cũng có thể trao cho tôi chứ?",
						"thai": "ความโศกเศร้าของท่าน... ก็มอบให้ข้าได้ใช่ไหม?",
						"hindi": "तुम्हारा दुख भी… क्या तुम मुझे दे सकते हो?"
					}
				},
				{
					"content": {
						"korean": "네가 왜 우리 감정을 모으는 거야?",
						"english": "Why are you collecting our emotions?",
						"japanese": "「なぜお前は我々の感情を集めている？」",
						"chinese": "你为什么要收集我们的情感？",
						"french": "Pourquoi collectionnes-tu nos émotions ?",
						"spanish": "¿Por qué estás recolectando nuestras emociones?",
						"vietnamese": "Tại sao ngươi lại thu thập cảm xúc của chúng ta?",
						"thai": "ทำไมเจ้าถึงรวบรวมความรู้สึกของเรา?",
						"hindi": "तुम हमारी भावनाएँ क्यों जमा कर रहे हो?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "vex",
					"content": {
						"korean": "난 루멘의 죄책감에서 태어났어. 억눌린 고통이 만들어낸 존재.",
						"english": "I was born from Lumen's guilt. A being created by suppressed pain.",
						"japanese": "「私はルーメンの罪悪感から生まれた。抑圧された苦痛が生み出した存在だ。」",
						"chinese": "我诞生于卢门（Lumen）的罪恶感。是被压抑的痛苦所创造的存在。",
						"french": "Je suis né de la culpabilité de Lumen. Une existence créée par la douleur refoulée.",
						"spanish": "Nací de la culpa de Lumen. Un ser creado por el dolor reprimido.",
						"vietnamese": "Ta được sinh ra từ cảm giác tội lỗi của Lumen. Một thực thể được tạo ra từ nỗi đau bị kìm nén.",
						"thai": "ข้าถือกำเนิดจากความรู้สึกผิดของลูเมน สิ่งมีชีวิตที่ถูกสร้างขึ้นจากความเจ็บปวดที่ถูกกดขี่",
						"hindi": "मैं ल्यूमेन के अपराधबोध से पैदा हुआ हूँ। दबे हुए दर्द से बनी एक सत्ता।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "루멘의… 죄책감?",
						"english": "Lumen's… guilt?",
						"japanese": "「ルーメンの…罪悪感だと？」",
						"chinese": "卢门（Lumen）的…罪恶感？",
						"french": "La culpabilité de Lumen… ?",
						"spanish": "¿La culpa de Lumen…?",
						"vietnamese": "Cảm giác tội lỗi của Lumen…?",
						"thai": "ความรู้สึกผิดของลูเมน...?",
						"hindi": "ल्यूमेन का… अपराधबोध?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "vex",
					"content": {
						"korean": "모든 걸 삼키면… 그분도 다시 편해질 수 있을 거야.",
						"english": "If I devour everything… that person will be at peace again.",
						"japanese": "「すべてを飲み込めば… その方もまた、楽になれるだろう。」",
						"chinese": "吞噬一切的话… 他（她）也能再次安息了。",
						"french": "Si j'engloutis tout… il/elle pourra retrouver la paix.",
						"spanish": "Si lo devoro todo… él/ella podrá descansar de nuevo.",
						"vietnamese": "Nếu nuốt chửng mọi thứ… người đó cũng có thể lại được thanh thản.",
						"thai": "หากกลืนกินทุกสิ่ง... ท่านผู้นั้นก็จะสงบสุขได้อีกครั้ง",
						"hindi": "अगर मैं सब कुछ निगल लूँ… तो वह व्यक्ति फिर से शांति पा सकेगा।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…네 뜻대로 안 될 거야.",
						"english": "…It won't go your way.",
						"japanese": "「…お前の思い通りにはならない。」",
						"chinese": "…不会如你所愿的。",
						"french": "…Ça ne se passera pas comme tu l'entends.",
						"spanish": "…No será como tú quieres.",
						"vietnamese": "…Sẽ không theo ý ngươi đâu.",
						"thai": "...มันจะไม่เป็นไปตามที่เจ้าต้องการหรอก",
						"hindi": "…तुम्हारी मर्ज़ी नहीं चलेगी।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "…사라져도… 우리는… 다시…",
						"english": "...Even if we vanish... we will... return...",
						"japanese": "…消えても… 私たちは… また…",
						"chinese": "……即便消失……我们……也会……再次……",
						"french": "...Même si nous disparaissons... nous... reviendrons...",
						"spanish": "...Aunque desaparezcamos... nosotros... de nuevo...",
						"vietnamese": "...Dù có biến mất... chúng ta... rồi sẽ... lại...",
						"thai": "...ถึงแม้จะหายไป... พวกเรา... จะกลับมา...",
						"hindi": "...भले ही हम मिट जाएँ... हम... फिर से..."
					}
				},
				{
					"speaker": "vex",
					"content": {
						"korean": "흥… 이 정도로는 날 없앨 수 없어. 루멘의 죄책감은 영원할 테니까.",
						"english": "Hmph... This won't be enough to destroy me. Lumen's guilt will be eternal.",
						"japanese": "フン… この程度では私を消し去ることはできない。ルーメンの罪悪感は永遠だからな。",
						"chinese": "哼……这种程度可无法消灭我。鲁门的罪恶感将永存。",
						"french": "Hmph... Ce n'est pas assez pour me détruire. La culpabilité de Lumen sera éternelle.",
						"spanish": "Hmph... Esto no será suficiente para destruirme. La culpa de Lumen será eterna.",
						"vietnamese": "Hừm... Chừng này không đủ để xóa sổ ta đâu. Cảm giác tội lỗi của Lumen sẽ còn mãi.",
						"thai": "หึ... แค่นี้กำจัดข้าไม่ได้หรอก ความรู้สึกผิดของลูเมนจะคงอยู่ตลอดไป",
						"hindi": "हम्फ... इतना मुझे नष्ट करने के लिए काफी नहीं है। लुमेन का अपराधबोध शाश्वत रहेगा।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "벡스는 그림자처럼 사라졌다. 하지만 억압된 감정의 흔적은 여전히 세계를 잠식하고 있었다.",
						"english": "Vex vanished like a shadow. But the traces of suppressed emotions still encroached upon the world.",
						"japanese": "ベックスは影のように消えた。しかし、抑圧された感情の痕跡は依然として世界を蝕んでいた。",
						"chinese": "维克斯像影子般消失了。但被压抑情感的痕迹，依然侵蚀着世界。",
						"french": "Vex disparut comme une ombre. Mais les traces des émotions refoulées continuaient de ronger le monde.",
						"spanish": "Vex desapareció como una sombra. Pero los rastros de emociones reprimidas seguían invadiendo el mundo.",
						"vietnamese": "Vex biến mất như một cái bóng. Nhưng dấu vết của những cảm xúc bị dồn nén vẫn tiếp tục xâm chiếm thế giới.",
						"thai": "เว็กซ์หายไปราวกับเงา แต่ร่องรอยของอารมณ์ที่ถูกกดขี่ยังคงกัดกินโลก",
						"hindi": "वेक्स एक छाया की तरह गायब हो गया। लेकिन दबी हुई भावनाओं के निशान अभी भी दुनिया को घेर रहे थे।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "결국 루멘의….",
						"english": "Ultimately, Lumen's...",
						"japanese": "結局、ルーメンの…。",
						"chinese": "最终，鲁门的……",
						"french": "Finalement, celui de Lumen...",
						"spanish": "Al final, el de Lumen...",
						"vietnamese": "Cuối cùng, của Lumen...",
						"thai": "ในที่สุด ความรู้สึกผิดของลูเมน...",
						"hindi": "आखिरकार, लुमेन का..."
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "고통은 계속해서 새로운 형태로 태어날 것이다. 이제 시작일 뿐.",
						"english": "Suffering will continue to be reborn in new forms. This is just the beginning.",
						"japanese": "苦痛は新たな形で生まれ続けるだろう。これは始まりに過ぎない。",
						"chinese": "痛苦将继续以新的形式重生。这仅仅是个开始。",
						"french": "La souffrance continuera de renaître sous de nouvelles formes. Ce n'est que le début.",
						"spanish": "El sufrimiento seguirá renaciendo en nuevas formas. Esto es solo el principio.",
						"vietnamese": "Nỗi đau sẽ tiếp tục tái sinh dưới những hình thức mới. Đây chỉ là khởi đầu.",
						"thai": "ความทุกข์ทรมานจะยังคงถือกำเนิดขึ้นใหม่ในรูปแบบต่างๆ นี่เป็นเพียงจุดเริ่มต้นเท่านั้น",
						"hindi": "पीड़ा नए रूपों में पुनर्जन्म लेती रहेगी। यह तो बस शुरुआत है।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…나약한… 감정….",
						"english": "...Weak... emotions...",
						"japanese": "...弱き…感情…。",
						"chinese": "...软弱的...情感...",
						"french": "...Faibles... émotions...",
						"spanish": "...Débiles... emociones...",
						"vietnamese": "...Cảm xúc... yếu ớt...",
						"thai": "...อารมณ์...อ่อนแอ...",
						"hindi": "...कमजोर... भावनाएँ..."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그래… 바로 그 절망이 나의 양식이지.",
						"english": "Yes... that despair is my sustenance.",
						"japanese": "ああ…その絶望こそが、私の糧だ。",
						"chinese": "没错…那绝望正是我的食粮。",
						"french": "Oui... ce désespoir est ma subsistance.",
						"spanish": "Sí... esa desesperación es mi sustento.",
						"vietnamese": "Phải... chính sự tuyệt vọng đó là lương thực của ta.",
						"thai": "ใช่... ความสิ้นหวังนั่นแหละคืออาหารของข้า.",
						"hindi": "हाँ... वही निराशा मेरा पोषण है।"
					},
					"speaker": "vex",
					"type": "speech",
					"emotion": "happy"
				},
				{
					"content": {
						"korean": "…아직… 끝나지 않았어.",
						"english": "...It's not... over yet.",
						"japanese": "…まだ…終わってない。",
						"chinese": "...还没...结束。",
						"french": "...Ce n'est pas... encore fini.",
						"spanish": "...Aún no... ha terminado.",
						"vietnamese": "...Vẫn chưa... kết thúc đâu.",
						"thai": "...ยังไม่...จบลงหรอก.",
						"hindi": "...अभी... खत्म नहीं हुआ है।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "절규가 웅크린 심장부. 그곳에서 모든 감정이 응축되고 있었다.",
						"english": "The heart of screams, coiled. There, all emotions were condensing.",
						"japanese": "「絶叫がうずくまる心臓部。そこですべての感情が凝縮されていた。」",
						"chinese": "尖叫蜷缩的心脏地带。在那里，所有情感都在凝聚。",
						"french": "Le cœur recroquevillé des hurlements. Là, toutes les émotions se condensaient.",
						"spanish": "El corazón acurrucado de los gritos. Allí, todas las emociones se estaban condensando.",
						"vietnamese": "Trung tâm của những tiếng gào thét cuộn tròn. Tại đó, mọi cảm xúc đang cô đọng lại.",
						"thai": "ใจกลางที่เต็มไปด้วยเสียงกรีดร้อง ทุกความรู้สึกกำลังรวมตัวกันอยู่ที่นั่น",
						"hindi": "चीखों का मुड़ा हुआ हृदयस्थल। वहाँ, सभी भावनाएँ संघनित हो रही थीं।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "vex",
					"spot": [
						5,
						2
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"speaker": "vex",
					"content": {
						"korean": "왔구나… 나의 가장 귀한 컬렉션이 될 존재여.",
						"english": "You've come… the one who will be my most precious collection.",
						"japanese": "「来たな… 私の最も貴重なコレクションとなる者よ。」",
						"chinese": "你来了啊… 将成为我最珍贵的收藏品的存在。",
						"french": "Tu es venu(e)… toi qui seras ma plus précieuse collection.",
						"spanish": "Has llegado… serás mi colección más preciada.",
						"vietnamese": "Ngươi đã đến rồi… kẻ sẽ trở thành bộ sưu tập quý giá nhất của ta.",
						"thai": "มาแล้วสินะ... ผู้ที่จะเป็นของสะสมอันล้ำค่าที่สุดของข้า",
						"hindi": "तुम आ गए… जो मेरे सबसे अनमोल संग्रह बनोगे।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "네 진짜 모습은….",
						"english": "Your true form is….",
						"japanese": "「お前の本当の姿は…。」",
						"chinese": "你真正的样子是…。",
						"french": "Ta véritable forme est….",
						"spanish": "Tu verdadera forma es….",
						"vietnamese": "Hình dạng thật của ngươi là….",
						"thai": "รูปลักษณ์ที่แท้จริงของเจ้าคือ...",
						"hindi": "तुम्हारा असली रूप है…।"
					}
				},
				{
					"content": {
						"korean": "이게 내 본모습이야. 순수한 절규의 결정체.",
						"english": "This is my true form. A crystal of pure agony.",
						"japanese": "これが私の真の姿。純粋な絶叫の結晶だ。",
						"chinese": "这就是我的真面目。纯粹绝叫的结晶。",
						"french": "Ceci est ma vraie forme. Une cristallisation de purs hurlements.",
						"spanish": "Esta es mi verdadera forma. Una cristalización de puros gritos.",
						"vietnamese": "Đây là hình dạng thật của ta. Một kết tinh của những tiếng thét thuần khiết.",
						"thai": "นี่คือร่างที่แท้จริงของข้า การตกผลึกของเสียงกรีดร้องบริสุทธิ์",
						"hindi": "यह मेरा असली रूप है। शुद्ध चीखों का एक क्रिस्टलीकरण।"
					},
					"speaker": "vex",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "어둠 속에서 거대한 그림자가 일렁였다. 억압된 고통의 화신.",
						"english": "A colossal shadow rippled in the darkness. An avatar of suppressed agony.",
						"japanese": "闇の中で巨大な影が揺らめいた。抑圧された苦痛の化身。",
						"chinese": "黑暗中，巨大的影子摇曳着。那是被压抑的痛苦的化身。",
						"french": "Une ombre colossale ondula dans l'obscurité. L'incarnation d'une douleur refoulée.",
						"spanish": "Una sombra colosal ondeaba en la oscuridad. La encarnación del dolor reprimido.",
						"vietnamese": "Một cái bóng khổng lồ chập chờn trong bóng tối. Hiện thân của nỗi đau bị dồn nén.",
						"thai": "เงาขนาดมหึมาไหวระริกในความมืด อวตารแห่งความเจ็บปวดที่ถูกกดขี่",
						"hindi": "अंधेरे में एक विशाल छाया लहराई। दबे हुए दर्द का एक अवतार।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "{random_boss}여, 이들을 흡수해.",
						"english": "{random_boss}, absorb them.",
						"japanese": "{random_boss}よ、彼らを吸収しろ。",
						"chinese": "{random_boss}啊，吸收他们。",
						"french": "{random_boss}, absorbe-les.",
						"spanish": "{random_boss}, absórbelos.",
						"vietnamese": "{random_boss} à, hãy hấp thụ chúng.",
						"thai": "{random_boss} จงดูดกลืนพวกมันซะ",
						"hindi": "{random_boss}, इन्हें आत्मसात करो।"
					},
					"speaker": "vex"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…흡수….",
						"english": "...Absorb...",
						"japanese": "…吸収…。",
						"chinese": "……吸收……",
						"french": "...Absorber...",
						"spanish": "...Absorber...",
						"vietnamese": "...Hấp thụ...",
						"thai": "...ดูดกลืน...",
						"hindi": "...आत्मसात..."
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "우리의 감정은… 너희의 먹이가 아니야!",
						"english": "Our emotions are... not your fodder!",
						"japanese": "私たちの感情は… お前たちの餌じゃない！",
						"chinese": "我们的感情……不是你们的食粮！",
						"french": "Nos émotions ne sont... pas votre pâture !",
						"spanish": "¡Nuestras emociones... no son vuestro alimento!",
						"vietnamese": "Cảm xúc của chúng ta... không phải là thức ăn của các ngươi!",
						"thai": "อารมณ์ของเรา... ไม่ใช่อาหารของพวกแก!",
						"hindi": "हमारी भावनाएँ... तुम्हारा चारा नहीं हैं!"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"세계는 고요했다. 모든 감정이 지워진 평화.",
			"하지만 그 아래, 억눌린 절규가 숨 쉬고 있었다.",
			"길 잃은 아이의 그림자. 손을 내밀면, 모든 것을 삼켰다.",
			"새로운 공포는 가장 연약한 모습으로 찾아왔다."
		],
		"english": [
			"The world was silent. Peace, all emotions erased.",
			"Yet beneath, suppressed screams breathed.",
			"The shadow of a lost child. Reach out, and it devoured all.",
			"A new terror arrived in its most vulnerable form."
		],
		"japanese": [
			"世界は静寂に包まれていた。感情が消え去った平和。",
			"しかしその下には、抑圧された叫びが息づいていた。",
			"迷い子の影。手を伸ばせば、すべてを飲み込んだ。",
			"新たな恐怖は、最もか弱い姿で現れた。"
		],
		"chinese": [
			"世界一片寂静。所有情感都被抹去的平静。",
			"然而在那之下，被压抑的尖叫正在呼吸。",
			"迷失孩子的影子。伸出手，它吞噬了一切。",
			"新的恐惧以最脆弱的形式降临。"
		],
		"french": [
			"Le monde était silencieux. La paix, toutes les émotions effacées.",
			"Pourtant, en dessous, des cris étouffés respiraient.",
			"L'ombre d'un enfant perdu. Tendez la main, et elle dévorait tout.",
			"Une nouvelle terreur est arrivée sous sa forme la plus vulnérable."
		],
		"spanish": [
			"El mundo estaba en silencio. Paz, todas las emociones borradas.",
			"Sin embargo, debajo, gritos reprimidos respiraban.",
			"La sombra de un niño perdido. Tiende la mano, y lo devoraba todo.",
			"Un nuevo terror llegó en su forma más vulnerable."
		],
		"vietnamese": [
			"Thế giới tĩnh lặng. Bình yên, mọi cảm xúc đã bị xóa nhòa.",
			"Nhưng bên dưới, những tiếng thét bị kìm nén đang thở.",
			"Bóng hình của một đứa trẻ lạc. Vươn tay ra, và nó nuốt chửng mọi thứ.",
			"Nỗi kinh hoàng mới đến dưới hình hài yếu ớt nhất."
		],
		"thai": [
			"โลกเงียบสงบ ความสงบที่ไร้ซึ่งอารมณ์ใดๆ",
			"แต่ภายใต้ความเงียบงันนั้น เสียงกรีดร้องที่ถูกกดขี่กำลังหายใจอยู่",
			"เงาของเด็กหลงทาง ยื่นมือออกไป แล้วมันกลืนกินทุกสิ่ง",
			"ความหวาดกลัวครั้งใหม่มาในรูปลักษณ์ที่เปราะบางที่สุด"
		],
		"hindi": [
			"दुनिया शांत थी। शांति, सभी भावनाएँ मिटा दी गईं।",
			"फिर भी उसके नीचे, दबी हुई चीखें साँस ले रही थीं।",
			"खोए हुए बच्चे की परछाई। हाथ बढ़ाया, और इसने सब कुछ निगल लिया।",
			"एक नया आतंक अपने सबसे कमजोर रूप में आया।"
		]
	}
} as const;
