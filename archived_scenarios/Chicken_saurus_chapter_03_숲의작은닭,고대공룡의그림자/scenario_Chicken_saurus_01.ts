export const scenario_Chicken_saurus_01 = {
	"scenario_id": "Chicken_saurus_01",
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
		},
		"Chicken-saurus": {
			"id": "mon_754fceab-60c4-4cce-8729-7b896fd69e9c",
			"name": {
				"korean": "치킨사우루스",
				"english": "Chicken-Saurus",
				"japanese": "チキンサウルス",
				"chinese": "鸡龙兽",
				"french": "Pouletosaurus",
				"spanish": "Pollosaurio",
				"vietnamese": "Gà Khủng Long",
				"thai": "ไก่ซอรัส",
				"hindi": "चिकन-सॉरस"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a9b0f74c-f415-431e-77f8-efa1cb858f00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/afa1be97-1f4d-4aa6-a636-f281cf48a700/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"숲은 숨 쉬는 거대한 생명체였다.",
			"그 평화로운 심장 속, 미지의 그림자가 꿈틀거렸다.",
			"탐험대는 그 그림자를 향해 나아갔다.",
			"모든 시작은, 늘 호기심으로 가득했다.",
			"그리고 불길한 예감은 언제나 옳았다."
		],
		"english": [
			"The forest was a colossal, breathing entity.",
			"Within its peaceful heart, an unknown shadow stirred.",
			"The expedition team advanced towards that shadow.",
			"Every beginning was always filled with curiosity.",
			"And ominous premonitions were always right."
		],
		"japanese": [
			"森は呼吸する巨大な生命体だった。",
			"その平和な心臓の奥で、未知の影が蠢いた。",
			"探検隊はその影へと進んだ。",
			"全ての始まりは、常に好奇心に満ちていた。",
			"そして不吉な予感は常に正しかった。"
		],
		"chinese": [
			"森林是一个巨大的、会呼吸的生命体。",
			"在它宁静的心脏深处，一个未知的影子在蠕动。",
			"探险队朝着那道影子前进。",
			"所有的开始，总是充满好奇。",
			"而不祥的预感总是正确的。"
		],
		"french": [
			"La forêt était une entité colossale et vivante.",
			"Au cœur de sa paix, une ombre inconnue frémissait.",
			"L'équipe d'expédition s'avança vers cette ombre.",
			"Chaque début était toujours rempli de curiosité.",
			"Et les pressentiments sinistres étaient toujours justes."
		],
		"spanish": [
			"El bosque era una entidad colosal y respiraba.",
			"Dentro de su corazón pacífico, una sombra desconocida se agitó.",
			"El equipo de expedición avanzó hacia esa sombra.",
			"Todo comienzo siempre estuvo lleno de curiosidad.",
			"Y los malos presagios siempre fueron ciertos."
		],
		"vietnamese": [
			"Rừng là một thực thể khổng lồ, đang thở.",
			"Trong trái tim bình yên ấy, một bóng tối vô danh cựa quậy.",
			"Đoàn thám hiểm tiến về phía bóng tối đó.",
			"Mọi khởi đầu, luôn tràn ngập sự tò mò.",
			"Và những điềm báo gở luôn đúng."
		],
		"thai": [
			"ป่าคือสิ่งมีชีวิตขนาดมหึมาที่กำลังหายใจ",
			"ในใจกลางที่สงบสุขนั้น มีเงามืดปริศนาเริ่มขยับเขยื้อน",
			"คณะสำรวจมุ่งหน้าสู่เงานั้น",
			"ทุกการเริ่มต้นล้วนเต็มไปด้วยความอยากรู้อยากเห็นเสมอ",
			"และลางสังหรณ์อันน่ากลัวนั้นถูกต้องเสมอ"
		],
		"hindi": [
			"जंगल एक विशाल, साँस लेने वाला प्राणी था।",
			"उसके शांत हृदय के भीतर, एक अज्ञात छाया हिलने लगी।",
			"अभियान दल उस छाया की ओर बढ़ा।",
			"हर शुरुआत हमेशा जिज्ञासा से भरी होती थी।",
			"और अशुभ पूर्वसूचनाएँ हमेशा सही निकलीं।"
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
						"korean": "울창한 나무들이 하늘을 덮었다. 숲의 입구는 고요했다.",
						"english": "Dense trees covered the sky. The forest entrance was serene.",
						"japanese": "鬱蒼とした木々が空を覆っていた。森の入り口は静寂に包まれていた。",
						"chinese": "茂密的树木遮蔽了天空。森林入口一片寂静。",
						"french": "Des arbres denses couvraient le ciel. L'entrée de la forêt était sereine.",
						"spanish": "Árboles densos cubrían el cielo. La entrada del bosque estaba serena.",
						"vietnamese": "Cây cối rậm rạp che kín bầu trời. Lối vào rừng thật tĩnh lặng.",
						"thai": "ต้นไม้หนาทึบปกคลุมท้องฟ้า ทางเข้าป่าเงียบสงบ",
						"hindi": "घने पेड़ों ने आकाश को ढक लिया। जंगल का प्रवेश द्वार शांत था।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "와… 공기부터 다르네.",
						"english": "Wow… the air feels different already.",
						"japanese": "わあ…空気がもう違うね。",
						"chinese": "哇…空气都不一样了。",
						"french": "Waouh… l'air est déjà différent.",
						"spanish": "Vaya… el aire ya se siente diferente.",
						"vietnamese": "Oa… không khí đã khác rồi.",
						"thai": "ว้าว... อากาศก็ต่างไปแล้วนะเนี่ย",
						"hindi": "वाह… हवा पहले से ही अलग है।"
					}
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "Chicken-saurus",
					"spot": [
						5,
						4
					],
					"type": "direction"
				},
				{
					"speaker": "Chicken-saurus",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "꼬끼오!",
						"english": "Cock-a-doodle-doo!",
						"japanese": "コケコッコー！",
						"chinese": "喔喔喔！",
						"french": "Cocorico !",
						"spanish": "¡Kikirikí!",
						"vietnamese": "O o o!",
						"thai": "เอ๊กอีเอ๊กเอ๊ก!",
						"hindi": "कुकड़ू-कूं!"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "닭이 갑자기 푸드덕 날아올라 character_2의 머리 위에 사뿐히 내려앉았다.",
						"english": "A chicken suddenly flapped up and gently landed on character_2's head.",
						"japanese": "鶏が突然羽ばたいて飛び上がり、character_2の頭の上にそっと降り立った。",
						"chinese": "一只鸡突然扑腾着飞起来，轻轻地落在 character_2 的头上。",
						"french": "Un poulet s'envola soudainement et atterrit doucement sur la tête de character_2.",
						"spanish": "Un pollo de repente aleteó y aterrizó suavemente sobre la cabeza de character_2.",
						"vietnamese": "Một con gà đột nhiên vỗ cánh bay lên và nhẹ nhàng đậu xuống đầu character_2.",
						"thai": "ไก่ตัวหนึ่งกระพือปีกบินขึ้นมาอย่างกะทันหัน และลงเกาะเบาๆ บนหัวของ character_2",
						"hindi": "एक मुर्गा अचानक फड़फड़ा कर उड़ गया और धीरे से character_2 के सिर पर बैठ गया।"
					}
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "야! 야야야! 너 왜 여기 올라와!",
						"english": "Hey! Hey, hey, hey! Why are you up here?!",
						"japanese": "おい！おいおいおい！なんでここにいるんだよ！",
						"chinese": "喂！喂喂喂！你干嘛上来！",
						"french": "Hé ! Hé hé hé ! Pourquoi es-tu là-haut ?!",
						"spanish": "¡Oye! ¡Oye, oye, oye! ¡¿Por qué estás aquí arriba?!",
						"vietnamese": "Này! Này này này! Sao mày lại lên đây!",
						"thai": "เฮ้ย! เฮ้ยๆๆ! ทำไมนายขึ้นมาอยู่ตรงนี้เนี่ย!",
						"hindi": "अरे! अरे अरे अरे! तुम यहाँ ऊपर क्यों हो!"
					}
				},
				{
					"speaker": "character_3",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "하하, 너 잘 어울린다.",
						"english": "Haha, it suits you well.",
						"japanese": "ハハ、よく似合ってるよ。",
						"chinese": "哈哈，你很适合。",
						"french": "Haha, ça te va bien.",
						"spanish": "Jaja, te queda muy bien.",
						"vietnamese": "Haha, trông hợp đấy.",
						"thai": "ฮ่าฮ่า เข้ากับคุณดีนะ",
						"hindi": "हाहा, तुम पर यह खूब जँचता है।"
					}
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "bracken",
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
						"korean": "어서 와요. 브라켄입니다. 이 숲의 모든 것을 알고 있죠.",
						"english": "Welcome. I'm Bracken. I know everything about this forest.",
						"japanese": "ようこそ。ブラッケンです。この森のことは何でも知っています。",
						"chinese": "欢迎。我是布拉肯。我对这片森林了如指掌。",
						"french": "Bienvenue. Je suis Bracken. Je connais tout de cette forêt.",
						"spanish": "Bienvenidos. Soy Bracken. Lo sé todo sobre este bosque.",
						"vietnamese": "Chào mừng. Tôi là Bracken. Tôi biết mọi thứ về khu rừng này.",
						"thai": "ยินดีต้อนรับครับ ผมชื่อแบรคเคน ผมรู้ทุกอย่างในป่าแห่งนี้",
						"hindi": "स्वागत है। मैं ब्रैकेन हूँ। मैं इस जंगल के बारे में सब कुछ जानता हूँ।"
					},
					"speaker": "bracken"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "숲이 정말 아름답네요.",
						"english": "The forest is truly beautiful.",
						"japanese": "森は本当に美しいですね。",
						"chinese": "这片森林真美啊。",
						"french": "La forêt est vraiment magnifique.",
						"spanish": "El bosque es realmente hermoso.",
						"vietnamese": "Rừng thật sự đẹp quá.",
						"thai": "ป่าสวยงามจริงๆ เลย",
						"hindi": "यह जंगल सचमुच बहुत सुंदर है।"
					}
				},
				{
					"speaker": "bracken",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "겉보기에는요. 아주 오래된 비밀이 잠든 곳이죠.",
						"english": "On the surface, yes. It's where ancient secrets lie dormant.",
						"japanese": "見かけはね。とても古い秘密が眠る場所なんだ。",
						"chinese": "表面上是这样。这里是古老秘密沉睡之地。",
						"french": "En apparence, oui. C'est un endroit où dorment de très vieux secrets.",
						"spanish": "En apariencia, sí. Es un lugar donde yacen secretos muy antiguos.",
						"vietnamese": "Chỉ là vẻ bề ngoài thôi. Nơi này ẩn chứa những bí mật cổ xưa.",
						"thai": "แค่ภายนอกน่ะ ที่นี่เป็นที่ที่ความลับโบราณหลับใหลอยู่",
						"hindi": "ऊपरी तौर पर तो हाँ। यह वह जगह है जहाँ बहुत पुराने रहस्य दबे हुए हैं।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "bracken",
					"spot": [
						2,
						4
					],
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 숲엔 오래된 유물들이 많죠.",
						"english": "This forest has many ancient artifacts.",
						"japanese": "この森には古い遺物が多いんだ。",
						"chinese": "这片森林里有很多古老的遗物。",
						"french": "Cette forêt regorge de reliques anciennes.",
						"spanish": "Este bosque tiene muchos artefactos antiguos.",
						"vietnamese": "Khu rừng này có nhiều di vật cổ xưa.",
						"thai": "ป่าแห่งนี้มีโบราณวัตถุมากมาย",
						"hindi": "इस जंगल में कई प्राचीन अवशेष हैं।"
					},
					"speaker": "bracken"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "저건 뭐죠? 돌에 뭔가 새겨져 있어요.",
						"english": "What's that? Something's carved into the stone.",
						"japanese": "あれは何ですか？石に何かが刻まれています。",
						"chinese": "那是什么？石头上刻着什么东西。",
						"french": "Qu'est-ce que c'est ? Quelque chose est gravé dans la pierre.",
						"spanish": "¿Qué es eso? Hay algo grabado en la piedra.",
						"vietnamese": "Cái gì vậy? Có thứ gì đó khắc trên đá.",
						"thai": "นั่นอะไรน่ะ? มีอะไรบางอย่างแกะสลักอยู่บนหิน",
						"hindi": "वह क्या है? पत्थर पर कुछ खुदा हुआ है।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "아, 저거요? 옛날 사람들이 만든 흔적이죠. 닭이랑 알이라니. 귀엽긴 하네요. 별 의미는 없을 거예요.",
						"english": "Oh, that? It's a trace left by ancient people. A chicken and an egg, how cute. It probably doesn't mean anything.",
						"japanese": "ああ、あれですか？昔の人々が作った痕跡ですね。鶏と卵だなんて。可愛いですが、特に意味はないでしょう。",
						"chinese": "哦，那个啊？那是古人留下的痕迹。鸡和蛋，挺可爱的。可能没什么特别的意义。",
						"french": "Oh, ça ? C'est une trace laissée par les anciens. Un poulet et un œuf, c'est mignon. Ça n'a probablement aucune signification.",
						"spanish": "Oh, ¿eso? Es un rastro dejado por la gente antigua. Un pollo y un huevo, qué mono. Probablemente no tenga ningún significado.",
						"vietnamese": "À, cái đó hả? Đó là dấu tích người xưa để lại. Gà với trứng. Dễ thương đấy, nhưng chắc không có ý nghĩa gì đặc biệt đâu.",
						"thai": "อ๋อ นั่นเหรอ? เป็นร่องรอยที่คนสมัยก่อนทิ้งไว้ ไก่กับไข่ น่ารักดีนะ คงไม่มีความหมายอะไรหรอก",
						"hindi": "ओह, वह? यह पुराने लोगों द्वारा छोड़ा गया एक निशान है। एक मुर्गी और एक अंडा, कितना प्यारा। इसका शायद कोई मतलब नहीं होगा।"
					},
					"speaker": "bracken"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그때, 닭이 조각상 옆으로 뒤뚱뒤뚱 다가가더니 알 모양처럼 웅크려 앉았다.",
						"english": "Just then, the chicken waddled over to the statue and crouched down like an egg.",
						"japanese": "その時、鶏が像の横によちよちと近づき、卵のようにうずくまった。",
						"chinese": "就在那时，鸡摇摇摆摆地走到雕像旁边，像蛋一样蜷缩起来。",
						"french": "À ce moment-là, la poule se dandina vers la statue et s'accroupit en forme d'œuf.",
						"spanish": "En ese momento, la gallina se acercó contoneándose a la estatua y se acurrucó como un huevo.",
						"vietnamese": "Ngay lúc đó, con gà lạch bạch đi đến cạnh bức tượng rồi cuộn mình ngồi xuống giống hình quả trứng.",
						"thai": "ทันใดนั้น ไก่ก็เดินตุ๊ต๊ะเข้าไปข้างรูปปั้นแล้วนั่งยองๆ เหมือนรูปไข่",
						"hindi": "तभी, मुर्गी लड़खड़ाती हुई मूर्ति के पास गई और अंडे के आकार में सिकुड़ कर बैठ गई।"
					}
				},
				{
					"speaker": "character_3",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "어머어머! 봐봐, 똑같이 한다!",
						"english": "Oh my goodness! Look, it's doing the same thing!",
						"japanese": "あらあら！見て見て、同じことしてる！",
						"chinese": "天哪！快看，它做了一样的事情！",
						"french": "Oh là là ! Regarde, il fait la même chose !",
						"spanish": "¡Ay, ay! ¡Mira, hace lo mismo!",
						"vietnamese": "Ôi trời ơi! Nhìn kìa, nó làm y chang!",
						"thai": "โอ้โห! ดูสิ ทำเหมือนกันเลย!",
						"hindi": "ओह माय गॉड! देखो, यह बिल्कुल वैसा ही कर रहा है!"
					}
				},
				{
					"speaker": "Chicken-saurus",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "꼬꼬댁.",
						"english": "Cluck cluck.",
						"japanese": "コッコッ。",
						"chinese": "咯咯。",
						"french": "Cot cot.",
						"spanish": "Clo clo.",
						"vietnamese": "Cục cục.",
						"thai": "กุ๊ก กุ๊ก",
						"hindi": "कुक-कुक।"
					}
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "귀여운데… 왠지 모르게 섬뜩한데.",
						"english": "Cute... but somehow unsettling.",
						"japanese": "可愛いけど… なんかゾッとするね。",
						"chinese": "可爱是可爱… 但总觉得有点毛骨悚然。",
						"french": "Mignon... mais étrangement effrayant.",
						"spanish": "Lindo... pero de alguna manera espeluznante.",
						"vietnamese": "Dễ thương... nhưng sao đó lại rợn người.",
						"thai": "น่ารักนะ... แต่ก็หลอนๆ ชอบกล.",
						"hindi": "प्यारा तो है... पर किसी तरह डरावना भी है।"
					},
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "Chicken-saurus",
					"spot": [
						5,
						3
					],
					"type": "direction"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "탐험대 옆을 걷던 평범한 닭 한 마리.",
						"english": "A normal chicken, walking alongside the expedition.",
						"japanese": "探検隊の横を歩いていたごく普通のニワトリ。",
						"chinese": "一只普通的鸡，走在探险队旁边。",
						"french": "Un poulet ordinaire marchant à côté de l'expédition.",
						"spanish": "Una gallina común caminando junto a la expedición.",
						"vietnamese": "Một con gà bình thường đi bộ bên cạnh đoàn thám hiểm.",
						"thai": "ไก่ธรรมดาตัวหนึ่งเดินอยู่ข้างคณะสำรวจ",
						"hindi": "एक आम मुर्गी अभियान दल के साथ चल रही थी।"
					}
				},
				{
					"speaker": "Chicken-saurus",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "꼬꼬… 꼬꼭.",
						"english": "Cluck... Cluck-cluck.",
						"japanese": "コッコ…ココッ。",
						"chinese": "咯咯…咯咯哒。",
						"french": "Cot-cot... Cot-cot-cot.",
						"spanish": "¡Kikirikí... Kikirikí!",
						"vietnamese": "Cục... Cục cục.",
						"thai": "กุ๊ก... กุ๊กกุ๊ก.",
						"hindi": "कुकड़ू... कुकड़ू-कू।"
					}
				},
				{
					"content": {
						"korean": "순간, 닭의 눈빛이 섬뜩하게 번뜩였다. 작은 들쥐를 쪼아대는 움직임이 빨랐다.",
						"english": "Suddenly, the chicken's eyes glinted menacingly. Its movements were swift, pecking at a small field mouse.",
						"japanese": "その瞬間、ニワトリの目が不気味に輝いた。小さな野ネズミを素早くつついた。",
						"chinese": "霎时，鸡的眼神阴森地闪烁了一下。它迅速啄食着一只小野鼠。",
						"french": "Soudain, les yeux du poulet brillèrent sinistrement. Ses mouvements étaient rapides, picorant une petite souris des champs.",
						"spanish": "De repente, los ojos de la gallina brillaron de forma inquietante. Sus movimientos eran rápidos, picoteando a un pequeño ratón de campo.",
						"vietnamese": "Khoảnh khắc đó, ánh mắt con gà lóe lên một cách rợn người. Nó mổ nhanh chóng vào một con chuột đồng nhỏ.",
						"thai": "ทันใดนั้น ดวงตาของไก่ก็ส่องประกายอย่างน่าขนลุก มันจิกหนูนาตัวเล็กๆ อย่างรวดเร็ว",
						"hindi": "अचानक, मुर्गी की आँखों में खौफनाक चमक आई। छोटे जंगली चूहे को चोंच मारने की उसकी हरकतें तेज़ थीं।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "방금… 닭이 왜 저래?",
						"english": "What was wrong with that chicken?",
						"japanese": "今の… ニワトリ、どうしたんだ？",
						"chinese": "刚才… 那只鸡怎么了？",
						"french": "Tout à l'heure... pourquoi le poulet a agi comme ça ?",
						"spanish": "¿Recién... por qué la gallina actuó así?",
						"vietnamese": "Vừa rồi... con gà đó sao vậy?",
						"thai": "เมื่อกี้... ทำไมไก่มันเป็นแบบนั้น?",
						"hindi": "अभी-अभी... मुर्गी को क्या हुआ था?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그냥 쥐를 쫓는 거겠지.",
						"english": "It's probably just chasing a mouse.",
						"japanese": "ただネズミを追いかけてるだけだろう。",
						"chinese": "它大概只是在追老鼠吧。",
						"french": "Il est probablement juste en train de chasser une souris.",
						"spanish": "Seguramente solo está persiguiendo un ratón.",
						"vietnamese": "Chắc nó chỉ đang đuổi chuột thôi.",
						"thai": "คงจะแค่ไล่หนูมั้ง",
						"hindi": "शायद बस चूहे का पीछा कर रही होगी।"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그 순간, 닭이 풀썩 주저앉아 흙바닥에 뒹굴며 모래목욕을 시작했다. 너무도 평범한 닭이었다.",
						"english": "At that moment, the chicken plopped down, rolling in the dirt and starting a dust bath. It was an utterly normal chicken.",
						"japanese": "その瞬間、ニワトリはドサッと座り込み、土の上で転がりながら砂浴びを始めた。あまりにも普通のニワトリだった。",
						"chinese": "就在那一刻，鸡扑通一声坐下，在泥地上打滚，开始沙浴。它就是一只再普通不过的鸡。",
						"french": "À cet instant, le poulet s'est affaissé, roulant dans la terre et commençant un bain de poussière. C'était un poulet tout à fait normal.",
						"spanish": "En ese instante, la gallina se dejó caer, revolcándose en la tierra y empezando un baño de polvo. Era una gallina de lo más normal.",
						"vietnamese": "Ngay lúc đó, con gà chợt ngồi phịch xuống, lăn lộn trên nền đất và bắt đầu tắm cát. Nó là một con gà hết sức bình thường.",
						"thai": "ในชั่วพริบตานั้น ไก่ก็ทรุดตัวลง นั่งกลิ้งไปมาบนพื้นดิน และเริ่มอาบน้ำทราย มันเป็นไก่ที่ธรรมดามากๆ",
						"hindi": "उसी पल, मुर्गी धड़ाम से बैठ गई, मिट्टी में लोटने लगी और धूल का स्नान करने लगी। यह बिल्कुल सामान्य मुर्गी थी।"
					}
				},
				{
					"speaker": "Chicken-saurus",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "꼬꼬댁 꼭꼭꼭.",
						"english": "Cluck-cluck-cluck.",
						"japanese": "コココッコッ。",
						"chinese": "咯咯哒咯咯哒。",
						"french": "Cot-cot-cot-cot.",
						"spanish": "¡Kikirikí kikirikí!",
						"vietnamese": "Cục cục cục.",
						"thai": "กุ๊กกุ๊กกุ๊ก.",
						"hindi": "कुकड़ू-कू कुकड़ू-कू।"
					}
				},
				{
					"speaker": "character_3",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "봐봐, 그냥 닭이잖아. 우리가 너무 예민한 거 아냐?",
						"english": "See? It's just a chicken. Aren't we overreacting?",
						"japanese": "ほら、ただのニワトリじゃないか。私たち、考えすぎじゃないか？",
						"chinese": "看吧，它就是一只普通的鸡。我们是不是太敏感了？",
						"french": "Vois? C'est juste un poulet. On ne serait pas trop sensibles ?",
						"spanish": "¿Ves? Es solo una gallina. ¿No estaremos siendo demasiado sensibles?",
						"vietnamese": "Thấy chưa, nó chỉ là một con gà thôi mà. Chúng ta có phải đang quá nhạy cảm không?",
						"thai": "เห็นไหม? ก็แค่ไก่นั่นแหละ พวกเราคิดมากไปหรือเปล่า?",
						"hindi": "देखो, ये तो बस एक मुर्गी है। क्या हम ज़्यादा ही संवेदनशील नहीं हो रहे?"
					}
				},
				{
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "bracken",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "음… 야생 본능이 깨어난 걸까요? 가끔 그럴 때도 있어요.",
						"english": "Hmm... perhaps its wild instincts awakened? Sometimes that happens.",
						"japanese": "うーん…野生の本能が目覚めたのでしょうか？たまにそういうこともありますよ。",
						"chinese": "嗯… 也许是野性本能觉醒了吧？偶尔也会发生这种事。",
						"french": "Hmm... ses instincts sauvages se seraient-ils réveillés ? Ça arrive parfois.",
						"spanish": "Hmm... ¿quizás sus instintos salvajes despertaron? A veces pasa.",
						"vietnamese": "Ưm... có lẽ bản năng hoang dã của nó đã trỗi dậy? Thỉnh thoảng cũng có những lúc như vậy.",
						"thai": "อืม... สัญชาตญาณป่าของมันตื่นขึ้นมาหรือเปล่า? บางทีก็เป็นแบบนั้นแหงๆ",
						"hindi": "हम्म… शायद उसकी जंगली प्रवृत्ति जाग गई होगी? कभी-कभी ऐसा भी होता है।"
					},
					"speaker": "bracken"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "bracken",
					"spot": [
						3,
						4
					],
					"type": "direction"
				},
				{
					"speaker": "bracken",
					"content": {
						"korean": "숲이 좀 조용해진 것 같지 않아요?",
						"english": "Isn't the forest a bit too quiet?",
						"japanese": "森が少し静かすぎませんか？",
						"chinese": "森林是不是有点太安静了？",
						"french": "La forêt n'est-elle pas un peu trop calme ?",
						"spanish": "¿No está el bosque un poco demasiado silencioso?",
						"vietnamese": "Rừng có vẻ hơi yên tĩnh quá, phải không?",
						"thai": "ป่าดูเงียบสงบไปหน่อยไหม?",
						"hindi": "क्या जंगल थोड़ा शांत नहीं है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "그러게요. 새 소리도 안 들리고.",
						"english": "Indeed. Not even birdsong.",
						"japanese": "そうですね。鳥の声も聞こえませんし。",
						"chinese": "是啊。连鸟叫声都听不到。",
						"french": "En effet. Pas même le chant des oiseaux.",
						"spanish": "Es verdad. Ni siquiera se oye el canto de los pájaros.",
						"vietnamese": "Đúng vậy. Không nghe thấy tiếng chim hót nữa.",
						"thai": "จริงด้วยครับ/ค่ะ ไม่ได้ยินเสียงนกเลย",
						"hindi": "हाँ, सच में। पक्षियों की आवाज़ भी नहीं आ रही।"
					}
				},
				{
					"speaker": "character_3",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "왠지 모르게… 오싹한데요.",
						"english": "For some reason... it's chilling.",
						"japanese": "何だか…薄気味悪いですね。",
						"chinese": "不知为何…感觉毛骨悚然。",
						"french": "Pour une raison quelconque... c'est glaçant.",
						"spanish": "Por alguna razón... es escalofriante.",
						"vietnamese": "Không hiểu sao… rợn người quá.",
						"thai": "ทำไมก็ไม่รู้... ขนลุกเลย",
						"hindi": "किसी कारण से... यह डरावना है।"
					}
				},
				{
					"content": {
						"korean": "기분 탓일 거예요. 깊은 숲은 원래 그래요. 너무 신경 쓰지 마세요.",
						"english": "It's probably just your imagination. Deep forests are like that. Don't worry too much.",
						"japanese": "気のせいでしょう。深い森は元々こんなものです。あまり気にしないでください。",
						"chinese": "可能是你的错觉吧。深林本来就那样。别太在意了。",
						"french": "C'est probablement juste votre imagination. Les forêts profondes sont comme ça. Ne vous inquiétez pas trop.",
						"spanish": "Probablemente sea tu imaginación. Los bosques profundos son así. No te preocupes demasiado.",
						"vietnamese": "Chắc là do bạn cảm thấy thế thôi. Rừng sâu vốn dĩ là như vậy. Đừng lo lắng quá.",
						"thai": "น่าจะเป็นแค่ความรู้สึกของคุณแหละครับ/ค่ะ ป่าลึกก็เป็นแบบนี้แหละ อย่ากังวลมากเลย",
						"hindi": "यह शायद तुम्हारी कल्पना है। गहरे जंगल ऐसे ही होते हैं। ज़्यादा चिंता मत करो।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "bracken"
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "나약한 것들. 감히 내 영역을 침범하다니.",
						"english": "Weaklings. How dare you trespass upon my domain.",
						"japanese": "弱き者どもめ。よくも私の領域を侵したな。",
						"chinese": "弱者。竟敢侵犯我的领地。",
						"french": "Faibles. Comment osez-vous envahir mon domaine ?",
						"spanish": "Débiles. ¿Cómo osáis invadir mi dominio?",
						"vietnamese": "Lũ yếu ớt. Dám cả gan xâm phạm lãnh địa của ta.",
						"thai": "พวกอ่อนแอ บังอาจรุกล้ำอาณาเขตของข้า",
						"hindi": "कमजोरों। तुम्हारी हिम्मत कैसे हुई मेरे क्षेत्र में घुसने की।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "젠장… 아직 끝나지 않았어!",
						"english": "Damn it... It's not over yet!",
						"japanese": "くそっ…まだ終わってないぞ！",
						"chinese": "该死……还没结束！",
						"french": "Merde... Ce n'est pas encore fini !",
						"spanish": "Maldición... ¡Todavía no ha terminado!",
						"vietnamese": "Chết tiệt... Vẫn chưa kết thúc đâu!",
						"thai": "ให้ตายสิ... ยังไม่จบแค่นี้หรอก!",
						"hindi": "धिक्कार है... अभी खत्म नहीं हुआ है!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…어리석군. 다시 와도 결과는 같을 테니.",
						"english": "...Foolish. The result will be the same even if you return.",
						"japanese": "…愚かな。また来ても結果は同じだろうな。",
						"chinese": "……愚蠢。就算再来一次结果也一样。",
						"french": "...Idiot. Le résultat sera le même même si tu reviens.",
						"spanish": "...Qué necios. Aunque volváis, el resultado será el mismo.",
						"vietnamese": "...Ngu xuẩn. Dù có quay lại cũng chỉ có một kết quả thôi.",
						"thai": "...โง่เขลา ถึงกลับมาอีกครั้งผลก็ยังเหมือนเดิม",
						"hindi": "...मूर्ख। वापस आने पर भी परिणाम वही रहेगा।"
					}
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "숲의 가장 깊은 곳. 거대한 그림자가 탐험대를 기다리고 있었다.",
						"english": "The deepest part of the forest. A colossal shadow awaited the expedition team.",
						"japanese": "森の最深部。巨大な影が探検隊を待ち受けていた。",
						"chinese": "森林最深处。一道巨大的黑影正等待着探险队。",
						"french": "La partie la plus profonde de la forêt. Une ombre colossale attendait l'équipe d'expédition.",
						"spanish": "La parte más profunda del bosque. Una sombra colosal esperaba al equipo de expedición.",
						"vietnamese": "Nơi sâu thẳm nhất của khu rừng. Một bóng đen khổng lồ đang chờ đợi đoàn thám hiểm.",
						"thai": "ส่วนที่ลึกที่สุดของป่า เงาขนาดมหึมารอกองสำรวจอยู่",
						"hindi": "जंगल का सबसे गहरा हिस्सा। एक विशाल परछाईं अभियान दल का इंतज़ार कर रही थी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "여기까지 온 건가. 어리석은 인간들.",
						"english": "You've come this far. Foolish humans.",
						"japanese": "ここまで来たか。愚かな人間たちめ。",
						"chinese": "竟敢来到这里。愚蠢的人类。",
						"french": "Vous êtes venus jusqu'ici. Humains stupides.",
						"spanish": "Habéis llegado hasta aquí. Humanos estúpidos.",
						"vietnamese": "Đã đến đây rồi sao. Loài người ngu ngốc.",
						"thai": "มาถึงนี่แล้วรึ มนุษย์โง่เขลาเอ๋ย",
						"hindi": "तुम यहाँ तक आ गए। मूर्ख इंसान।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "네가… 숲의 이변의 원흉이구나!",
						"english": "You... you're the cause of the forest's anomaly!",
						"japanese": "お前が…森の異変の元凶か！",
						"chinese": "你就是…森林异变的元凶！",
						"french": "Toi... tu es la cause de l'anomalie de la forêt !",
						"spanish": "Tú... ¡eres la causa de la anomalía del bosque!",
						"vietnamese": "Ngươi… chính là kẻ gây ra sự biến đổi của khu rừng!",
						"thai": "แก... แกคือต้นเหตุของความผิดปกติในป่า!",
						"hindi": "तुम... तुम ही हो जंगल में हुई गड़बड़ी की जड़!"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "그래봤자. 내 먹이가 될 뿐이다.",
						"english": "It's futile. You'll only become my prey.",
						"japanese": "無駄だ。私の餌になるだけだ。",
						"chinese": "就算如此。也只会成为我的猎物。",
						"french": "C'est inutile. Vous ne ferez que devenir ma proie.",
						"spanish": "Es inútil. Solo seréis mi presa.",
						"vietnamese": "Dù vậy thì. Ngươi cũng chỉ là mồi của ta thôi.",
						"thai": "ก็แค่นั้นแหละ เจ้าจะเป็นได้แค่เหยื่อของข้า",
						"hindi": "कितनी भी कोशिश कर लो। तुम बस मेरा शिकार बनोगे।"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "큭… 이걸로 끝이라고 생각하지 마라. 난… 다시 깨어날 테니.",
						"english": "Ugh... Don't think this is the end. I will... awaken again.",
						"japanese": "くっ…これで終わりだと思うなよ。私は…また目覚めるからな。",
						"chinese": "哼…别以为这就结束了。我还会…再次觉醒的。",
						"french": "Ugh... Ne crois pas que c'est la fin. Je... me réveillerai à nouveau.",
						"spanish": "Ugh... No creas que esto es el final. Yo... despertaré de nuevo.",
						"vietnamese": "Khặc… Đừng tưởng đây là kết thúc. Ta… sẽ tỉnh lại lần nữa.",
						"thai": "อึก... อย่าคิดว่านี่คือจุดจบ ฉันจะ... ตื่นขึ้นอีกครั้ง",
						"hindi": "ख… यह मत सोचो कि यह खत्म हो गया। मैं... फिर से जागूंगा।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "뭐라고?",
						"english": "What did you say?",
						"japanese": "何だって？",
						"chinese": "你说什么？",
						"french": "Quoi ?",
						"spanish": "¿Qué?",
						"vietnamese": "Cái gì?",
						"thai": "ว่าไงนะ?",
						"hindi": "क्या कहा?"
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "'random_boss'는 사라졌다. 그러나 숲의 불길한 기운은 사라지지 않았다.",
						"english": "'random_boss' vanished. But the ominous aura of the forest remains.",
						"japanese": "「random_boss」は消え去った。しかし、森の不吉な気配は消えていない。",
						"chinese": "“random_boss”消失了。然而，森林中不祥的气息并未消散。",
						"french": "'random_boss' a disparu. Mais l'aura sinistre de la forêt persiste.",
						"spanish": "'random_boss' desapareció. Pero el aura ominosa del bosque no se ha disipado.",
						"vietnamese": "'random_boss' đã biến mất. Nhưng khí tức đáng sợ của khu rừng vẫn chưa tan biến.",
						"thai": "'random_boss' หายไปแล้ว แต่ลางร้ายของป่ายังคงอยู่",
						"hindi": "'रैंडम_बॉस' गायब हो गया। लेकिन जंगल का अशुभ माहौल अभी भी बना हुआ है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "이 숲의 비밀은… 이제 막 시작되었다.",
						"english": "The secret of this forest... has only just begun.",
						"japanese": "この森の秘密は…今、始まったばかりだ。",
						"chinese": "这片森林的秘密……才刚刚开始。",
						"french": "Le secret de cette forêt... ne fait que commencer.",
						"spanish": "El secreto de este bosque... apenas acaba de empezar.",
						"vietnamese": "Bí mật của khu rừng này... chỉ vừa mới bắt đầu.",
						"thai": "ความลับของป่าแห่งนี้... เพิ่งจะเริ่มต้นขึ้นเท่านั้น",
						"hindi": "इस जंगल का रहस्य... अभी तो बस शुरू हुआ है।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		}
	]
} as const;
