export const scenario_desert_voidthorn_20_05 = {
	"scenario_id": "desert_voidthorn_20_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "desert",
	"actors": {
		"amir": {
			"id": "mon_0096d602-52ab-4a9c-9cc8-4ff18ed3b655",
			"name": {
				"korean": "아미르",
				"english": "Amir",
				"japanese": "アミール",
				"chinese": "阿米尔",
				"french": "Amir",
				"spanish": "Amir",
				"vietnamese": "Amir",
				"thai": "อาเมียร์",
				"hindi": "अमीर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8cd60fb0-3699-44c4-6425-a3e97eec1800/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/b644dc95-9c27-442e-6dc6-73e5550a0200/public"
		}
	},
	"boss": {
		"pool_id": "pool_EchoBlade_VoidThorn_V1"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "모래꽃의 심장부. 붉은 결정들이 섬뜩하게 빛나고 있었다.",
						"english": "The heart of the Sandflower. Red crystals gleamed eerily.",
						"japanese": "砂花の心臓部。赤い結晶が不気味に輝いていた。",
						"chinese": "沙花之心。红色水晶诡异地闪烁着。",
						"french": "Le cœur de la Fleur de Sable. Des cristaux rouges luisaient étrangement.",
						"spanish": "El corazón de la Flor de Arena. Cristales rojos brillaban de forma inquietante.",
						"vietnamese": "Trái tim của Hoa Cát. Những tinh thể đỏ rực rỡ một cách rợn người.",
						"thai": "ใจกลางของบุปผาทราย คริสตัลสีแดงส่องประกายอย่างน่าขนลุก",
						"hindi": "रेत के फूल का हृदय। लाल क्रिस्टल भयानक रूप से चमक रहे थे।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "amir",
					"spot": [
						5,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "amir",
					"content": {
						"korean": "드디어 도착했군. 이곳이 모든 것의 시작이자 끝.",
						"english": "Finally arrived. This is the beginning and end of everything.",
						"japanese": "ついに着いたか。ここが全ての始まりであり、終わりだ。",
						"chinese": "终于到了。这里是万物的开始与结束。",
						"french": "Enfin arrivé. C'est le début et la fin de tout.",
						"spanish": "Finalmente llegué. Este es el principio y el fin de todo.",
						"vietnamese": "Cuối cùng cũng đến. Đây là khởi đầu và kết thúc của mọi thứ.",
						"thai": "ในที่สุดก็มาถึง ที่นี่คือจุดเริ่มต้นและจุดจบของทุกสิ่ง",
						"hindi": "आखिरकार आ गए। यह सब कुछ की शुरुआत और अंत है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "여기가… '모래꽃'의 심장부?",
						"english": "This is… the heart of the 'Sand Blossom'?",
						"japanese": "ここが…「砂の花」の心臓部？",
						"chinese": "这里是…“沙之花”的心脏地带？",
						"french": "C'est… le cœur de la « Fleur de Sable » ?",
						"spanish": "¿Aquí es… el corazón de la 'Flor de Arena'?",
						"vietnamese": "Đây là… trái tim của 'Sa Hoa'?",
						"thai": "นี่คือ… หัวใจของ 'บุปผาทราย'?",
						"hindi": "यह… 'रेत के फूल' का दिल है?"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "왠지… 섬뜩한 기운이 느껴져.",
						"english": "Somehow… I feel an eerie presence.",
						"japanese": "なんだか…不気味な気配を感じる。",
						"chinese": "不知为何…我感到一股诡异的气息。",
						"french": "Je ressens… une présence inquiétante.",
						"spanish": "De alguna manera… siento una presencia inquietante.",
						"vietnamese": "Không hiểu sao… tôi cảm thấy một luồng khí rợn người.",
						"thai": "รู้สึก… ถึงพลังงานที่น่าขนลุก",
						"hindi": "कुछ अजीब सी… डरावनी ऊर्जा महसूस हो रही है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "amir",
					"content": {
						"korean": "두려워할 것 없어. 위대한 진실 앞에서는 누구나 경외심을 느끼는 법.",
						"english": "There's nothing to fear. Everyone feels awe in the face of great truth.",
						"japanese": "恐れることはない。偉大な真実の前では、誰もが畏敬の念を抱くものだ。",
						"chinese": "没什么好害怕的。在伟大的真理面前，人人都会心生敬畏。",
						"french": "Il n'y a rien à craindre. Chacun ressent de la crainte face à une grande vérité.",
						"spanish": "No hay nada que temer. Ante una gran verdad, todos sienten asombro.",
						"vietnamese": "Không có gì phải sợ. Trước sự thật vĩ đại, ai cũng sẽ cảm thấy kính sợ.",
						"thai": "ไม่มีอะไรต้องกลัว ใครๆ ก็รู้สึกยำเกรงเมื่อเผชิญหน้าความจริงอันยิ่งใหญ่",
						"hindi": "डरने की कोई बात नहीं। महान सत्य के सामने हर कोई श्रद्धा महसूस करता है।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						5,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "amir"
				},
				{
					"type": "speech",
					"speaker": "amir",
					"emotion": "base",
					"content": {
						"korean": "이 결정들은 죽은 블레이드마스터들의 염원이야. 완벽을 향한 끝없는 갈망.",
						"english": "These crystals are the aspirations of deceased Blademasters. An endless yearning for perfection.",
						"japanese": "これらの結晶は、亡きブレードマスターたちの願いだ。完璧を求める終わりのない渇望。",
						"chinese": "这些结晶是已故剑术大师们的遗愿。对完美的无尽渴望。",
						"french": "Ces cristaux sont les aspirations des Maîtres-lames décédés. Un désir ardent et infini de perfection.",
						"spanish": "Estos cristales son las aspiraciones de los Maestros de la Espada fallecidos. Un anhelo interminable de perfección.",
						"vietnamese": "Những tinh thể này là khát vọng của các Kiếm Sư đã khuất. Nỗi khát khao bất tận cho sự hoàn hảo.",
						"thai": "ผลึกเหล่านี้คือความปรารถนาของเหล่านักดาบผู้ล่วงลับ ความกระหายอันไม่สิ้นสุดเพื่อความสมบูรณ์แบบ",
						"hindi": "ये क्रिस्टल मृत ब्लेडमास्टर्स की आकांक्षाएं हैं। पूर्णता के लिए एक अंतहीन लालसा।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "염원이라기엔… 너무 기괴하게 뒤틀려 있어.",
						"english": "For aspirations… they're too grotesquely twisted.",
						"japanese": "願いにしては…あまりにも異様に歪んでいる。",
						"chinese": "说是遗愿…却扭曲得如此诡异。",
						"french": "Pour des aspirations… elles sont trop grotesquement tordues.",
						"spanish": "Para ser aspiraciones… están demasiado grotescamente retorcidas.",
						"vietnamese": "Gọi là khát vọng… nhưng chúng bị biến dạng quá kỳ dị.",
						"thai": "สำหรับความปรารถนา… มันบิดเบี้ยวผิดรูปผิดร่างเกินไป",
						"hindi": "आकांक्षाएं कहने के लिए… वे बहुत ही विकृत रूप से मुड़ी हुई हैं।"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "진정한 완벽은 때로 추악함을 동반하는 법. 자, 더 깊이 들어가 보자.",
						"english": "True perfection sometimes entails ugliness. Come, let's delve deeper.",
						"japanese": "真の完璧さは時に醜悪さを伴うものだ。さあ、もっと深く進もう。",
						"chinese": "真正的完美有时会伴随着丑陋。来吧，让我们深入探究。",
						"french": "La vraie perfection s'accompagne parfois de la laideur. Allons, plongeons plus profondément.",
						"spanish": "La verdadera perfección a veces conlleva fealdad. Vamos, adentrémonos más.",
						"vietnamese": "Sự hoàn hảo thật sự đôi khi đi kèm với sự xấu xí. Nào, hãy tiến sâu hơn.",
						"thai": "ความสมบูรณ์แบบที่แท้จริงบางครั้งก็มาพร้อมกับความน่าเกลียดชัง เอาล่ะ เข้าไปลึกกว่านี้เถอะ",
						"hindi": "सच्ची पूर्णता कभी-कभी कुरूपता के साथ आती है। चलो, और गहराई में उतरें।"
					},
					"emotion": "base",
					"speaker": "amir",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "amir",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						5,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "아미르, 당신의 눈빛이… 전과는 달라.",
						"english": "Amir, your eyes… they're different from before.",
						"japanese": "アミール、あなたの瞳が…以前とは違う。",
						"chinese": "阿米尔，你的眼神…和以前不一样了。",
						"french": "Amir, tes yeux… ils sont différents d'avant.",
						"spanish": "Amir, tus ojos… son diferentes a antes.",
						"vietnamese": "Amir, ánh mắt của anh… khác xưa rồi.",
						"thai": "อามีร์ สายตาของคุณ… ไม่เหมือนเมื่อก่อน",
						"hindi": "अमीर, तुम्हारी आँखें… पहले जैसी नहीं हैं।"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "내가? 하하, 오랜 사막 여정의 피로 때문이겠지.",
						"english": "Me? Haha, it must be the fatigue from the long desert journey.",
						"japanese": "私が？ハハ、長い砂漠の旅の疲れだろう。",
						"chinese": "我吗？哈哈，大概是漫长的沙漠旅途带来的疲惫吧。",
						"french": "Moi ? Haha, ce doit être la fatigue du long voyage dans le désert.",
						"spanish": "¿Yo? Jaja, debe ser la fatiga del largo viaje por el desierto.",
						"vietnamese": "Tôi ư? Haha, chắc là do mệt mỏi sau chuyến hành trình dài qua sa mạc thôi.",
						"thai": "ฉันเหรอ? ฮ่าฮ่า คงเป็นเพราะความเหนื่อยล้าจากการเดินทางในทะเลทรายอันยาวนาน",
						"hindi": "मैं? हाहा, यह लंबी रेगिस्तानी यात्रा की थकान होगी।"
					},
					"speaker": "amir"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "아니면… 이 심장부의 거대한 힘에 압도당해서일 수도 있고.",
						"english": "Or… perhaps it's because you're overwhelmed by the immense power of this heart.",
						"japanese": "それとも…この心臓部の巨大な力に圧倒されているのかもしれない。",
						"chinese": "又或者…是被这核心的巨大力量所压倒了吧。",
						"french": "Ou… peut-être est-ce parce que tu es submergé par l'immense pouvoir de ce cœur.",
						"spanish": "O… quizás sea porque estás abrumado por el inmenso poder de este corazón.",
						"vietnamese": "Hoặc… cũng có thể là do bị áp đảo bởi sức mạnh to lớn của trung tâm này.",
						"thai": "หรืออาจเป็นเพราะคุณถูกพลังอันมหาศาลของใจกลางนี้ครอบงำก็เป็นได้",
						"hindi": "या… शायद तुम इस दिल की अपार शक्ति से अभिभूत हो गए हो।"
					},
					"speaker": "amir",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그 이상이야. 당신… 뭔가 숨기고 있어.",
						"english": "It's more than that. You… you're hiding something.",
						"japanese": "それ以上よ。あなた…何か隠しているわ。",
						"chinese": "不止如此。你…你隐瞒了什么。",
						"french": "C'est plus que ça. Tu… tu caches quelque chose.",
						"spanish": "Es más que eso. Tú… estás escondiendo algo.",
						"vietnamese": "Hơn thế nữa. Anh… đang giấu diếm điều gì đó.",
						"thai": "มันมากกว่านั้น คุณ… กำลังซ่อนอะไรบางอย่าง",
						"hindi": "यह उससे ज़्यादा है। तुम… कुछ छिपा रहे हो।"
					},
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "amir",
					"spot": [
						5,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"content": {
						"korean": "결정의 심장이 쿵, 하고 울렸다. 모든 진실이 깨어나는 진동이었다.",
						"english": "The Crystal Heart pulsed. A vibration awakening all truths.",
						"japanese": "結晶の心臓がドクンと鳴った。全ての真実が目覚める振動だった。",
						"chinese": "结晶之心悸动了一下。那是唤醒所有真相的震动。",
						"french": "Le Cœur de Cristal a battu. Une vibration qui éveillait toutes les vérités.",
						"spanish": "El Corazón de Cristal latió. Una vibración que despertaba todas las verdades.",
						"vietnamese": "Trái tim Pha lê đập thình thịch. Một chấn động đánh thức mọi sự thật.",
						"thai": "หัวใจคริสตัลเต้นตึก. เป็นแรงสั่นสะเทือนที่ปลุกความจริงทั้งหมดให้ตื่นขึ้น.",
						"hindi": "क्रिस्टल हृदय धड़का। एक कंपन जो सभी सच्चाइयों को जगा रहा था।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "점점 더 강해지는 진동… 마치 살아있는 것 같아.",
						"english": "The vibrations grow stronger... It's as if it's alive.",
						"japanese": "振動がだんだん強くなってる…まるで生きているみたい。",
						"chinese": "震动越来越强……仿佛有生命一般。",
						"french": "Les vibrations s'intensifient... C'est comme si c'était vivant.",
						"spanish": "Las vibraciones se hacen más fuertes... Es como si estuviera vivo.",
						"vietnamese": "Rung động ngày càng mạnh... Cứ như thể nó đang sống.",
						"thai": "แรงสั่นสะเทือนแรงขึ้นเรื่อยๆ... เหมือนมีชีวิตเลย.",
						"hindi": "कंपन तेज़ होता जा रहा है... मानो यह जीवित हो।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "amir",
					"emotion": "base",
					"content": {
						"korean": "그래, 살아있는 거지. 수천 년의 그리움이 만들어낸 완벽한 생명.",
						"english": "Yes, it is alive. A perfect life born from millennia of longing.",
						"japanese": "ええ、生きている。数千年の憧憬が作り出した完璧な生命だ。",
						"chinese": "是的，它活着。由数千年思念所创造出的完美生命。",
						"french": "Oui, il est vivant. Une vie parfaite née de millénaires de nostalgie.",
						"spanish": "Sí, está vivo. Una vida perfecta nacida de milenios de anhelo.",
						"vietnamese": "Phải, nó đang sống. Một sinh mệnh hoàn hảo được tạo ra từ hàng ngàn năm khao khát.",
						"thai": "ใช่แล้ว มีชีวิตอยู่. ชีวิตที่สมบูรณ์แบบที่เกิดจากความปรารถนาหลายพันปี.",
						"hindi": "हाँ, यह जीवित है। हज़ारों सालों की लालसा से जन्मा एक पूर्ण जीवन।"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "그리움…? 이게 대체 무슨 소리야?",
						"english": "Longing...? What in the world are you talking about?",
						"japanese": "憧憬…？一体何を言ってるんだ？",
						"chinese": "思念……？这到底是什么意思？",
						"french": "Nostalgie...? De quoi parles-tu ?",
						"spanish": "¿Anhelo...? ¿De qué demonios estás hablando?",
						"vietnamese": "Khao khát...? Anh đang nói cái quái gì vậy?",
						"thai": "ความปรารถนา...? นี่มันเรื่องอะไรกัน?",
						"hindi": "लालसा...? तुम यह क्या कह रहे हो?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "amir",
					"content": {
						"korean": "너의 강한 생명력, 너의 검술이 필요해. 이곳의 불완전함을 완성시켜줄.",
						"english": "I need your powerful life force, your swordsmanship. To complete the imperfection here.",
						"japanese": "君の強い生命力、君の剣術が必要だ。ここにある不完全さを完成させるために。",
						"chinese": "我需要你强大的生命力，你的剑术。来弥补此地的残缺。",
						"french": "J'ai besoin de ta puissante force vitale, de ton épée. Pour achever l'imperfection ici.",
						"spanish": "Necesito tu poderosa fuerza vital, tu esgrima. Para completar la imperfección de este lugar.",
						"vietnamese": "Ta cần sinh lực mạnh mẽ của ngươi, cần kiếm thuật của ngươi. Để hoàn thiện sự bất toàn ở đây.",
						"thai": "ฉันต้องการพลังชีวิตอันแข็งแกร่งของนาย, ฝีมือดาบของนาย. เพื่อเติมเต็มความไม่สมบูรณ์แบบที่นี่.",
						"hindi": "मुझे तुम्हारी शक्तिशाली जीवन शक्ति, तुम्हारी तलवारबाज़ी चाहिए। यहाँ की अपूर्णता को पूरा करने के लिए।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…아미르! 그게 무슨 말도 안 되는 소리야!",
						"english": "...Amir! What kind of nonsense is that!",
						"japanese": "…アミール！何を馬鹿なことを言ってるんだ！",
						"chinese": "……阿米尔！你在胡说些什么！",
						"french": "...Amir ! C'est quoi ce non-sens !",
						"spanish": "...¡Amir! ¡Qué tontería es esa!",
						"vietnamese": "...Amir! Anh đang nói cái gì vớ vẩn vậy!",
						"thai": "...อามีร์! พูดเรื่องไร้สาระอะไรน่ะ!",
						"hindi": "...अमीर! यह क्या बेतुकी बात है!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "결정의 촉수가 모든 것을 집어삼켰다. 사막의 저주는 끝나지 않았다.",
						"english": "The crystal tentacles devoured everything. The desert's curse is endless.",
						"japanese": "結晶の触手が全てを飲み込んだ。砂漠の呪いは終わらない。",
						"chinese": "水晶触手吞噬了一切。沙漠的诅咒永无止境。",
						"french": "Les tentacules de cristal ont tout dévoré. La malédiction du désert est sans fin.",
						"spanish": "Los tentáculos de cristal devoraron todo. La maldición del desierto es interminable.",
						"vietnamese": "Những xúc tu pha lê đã nuốt chửng mọi thứ. Lời nguyền của sa mạc là vô tận.",
						"thai": "หนวดคริสตัลกลืนกินทุกสิ่ง คำสาปแห่งทะเลทรายไม่มีที่สิ้นสุด",
						"hindi": "क्रისტल के तम्तुओं ने सब कुछ निगल लिया। रेगिस्तान का अभिशाप अंतहीन है।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"emotion": "angry",
					"content": {
						"korean": "하찮은… 저항… 너의 검술도… 나의 일부가 될 것이다…!",
						"english": "Futile… resistance… Your swordsmanship… will also become a part of me…!",
						"japanese": "無駄な…抵抗…お前の剣術も…私の一部となるだろう…！",
						"chinese": "渺小的……抵抗……你的剑术……也将成为我的一部分……！",
						"french": "Résistance… futile… Ton art de l'épée… fera aussi partie de moi…!",
						"spanish": "¡Resistencia… inútil… Tu esgrima… también será parte de mí…!",
						"vietnamese": "Vô ích… sự kháng cự… Kiếm thuật của ngươi… cũng sẽ trở thành một phần của ta…!",
						"thai": "เปล่าประโยชน์… การต่อต้าน… ฝีมือดาบของเจ้า… ก็จะกลายเป็นส่วนหนึ่งของข้า…!",
						"hindi": "व्यर्थ… प्रतिरोध… तुम्हारी तलवारबाजी… भी मेरा हिस्सा बन जाएगी…!"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아직… 끝나지 않았어. 우리는 포기하지 않아…!",
						"english": "It's not… over yet. We won't give up…!",
						"japanese": "まだ…終わってない。私たちは諦めない…！",
						"chinese": "还没……结束。我们不会放弃……！",
						"french": "Ce n'est pas… encore fini. Nous n'abandonnerons pas…!",
						"spanish": "Aún… no ha terminado. ¡No nos rendiremos…!",
						"vietnamese": "Chưa… kết thúc đâu. Chúng ta sẽ không bỏ cuộc…!",
						"thai": "ยัง…ไม่จบ. เราจะไม่ยอมแพ้…!",
						"hindi": "अभी… खत्म नहीं हुआ है। हम हार नहीं मानेंगे…!"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						5,
						2
					],
					"speaker": "amir"
				},
				{
					"content": {
						"korean": "결정의 심장부가 붉게 물들었다. 광기가 춤추는 무대였다.",
						"english": "The heart of the crystal pulsed red. A stage where madness danced.",
						"japanese": "結晶の心臓部が赤く染まった。狂気が舞い踊る舞台だった。",
						"chinese": "结晶之心染上了红色。那是疯狂起舞的舞台。",
						"french": "Le cœur du cristal s'est teint de rouge. Une scène où la folie dansait.",
						"spanish": "El corazón del cristal se tiñó de rojo. Un escenario donde la locura bailaba.",
						"vietnamese": "Trái tim pha lê nhuộm đỏ. Một sân khấu nơi sự điên loạn nhảy múa.",
						"thai": "แกนกลางของคริสตัลเป็นสีแดง. เป็นเวทีที่ความคลั่งเต้นรำ.",
						"hindi": "क्रिस्टल का हृदय लाल हो गया। एक ऐसा मंच जहाँ पागलपन नाच रहा था।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "아미르! 당신… 정말 우리를 이용한 거야?",
						"english": "Amir! You... did you really use us?",
						"japanese": "アミール！あなた…本当に私たちを利用したの？",
						"chinese": "阿米尔！你……你真的利用了我们吗？",
						"french": "Amir ! Tu... tu nous as vraiment utilisés ?",
						"spanish": "¡Amir! Tú... ¿realmente nos usaste?",
						"vietnamese": "Amir! Ngươi... ngươi thật sự đã lợi dụng chúng ta ư?",
						"thai": "อามีร์! คุณ... คุณใช้เราจริงๆ เหรอ?",
						"hindi": "अमीर! तुमने... क्या तुमने सच में हमारा इस्तेमाल किया?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그래. 너희는 완벽한 검술을 위한 제물이었어. 훌륭한 재료였지.",
						"english": "Yes. You were sacrifices for perfect swordsmanship. Excellent material, indeed.",
						"japanese": "そうだ。お前たちは完璧な剣術のための生贄だった。素晴らしい材料だったな。",
						"chinese": "是的。你们是为完美剑术献出的祭品。是极好的材料。",
						"french": "Oui. Vous étiez des sacrifices pour une maîtrise parfaite de l'épée. Un excellent matériau, en effet.",
						"spanish": "Sí. Fuisteis sacrificios para la esgrima perfecta. Material excelente, de hecho.",
						"vietnamese": "Phải. Các ngươi là vật tế cho kiếm thuật hoàn hảo. Là nguyên liệu tuyệt vời.",
						"thai": "ใช่. พวกนายเป็นเครื่องสังเวยเพื่อวิชาดาบที่สมบูรณ์แบบ. เป็นวัตถุดิบที่ยอดเยี่ยมจริงๆ.",
						"hindi": "हाँ। तुम पूर्ण तलवारबाज़ी के लिए बलि थे। वास्तव में उत्कृष्ट सामग्री।"
					},
					"speaker": "amir",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "배신자…!",
						"english": "Traitor...!",
						"japanese": "裏切り者…！",
						"chinese": "叛徒……！",
						"french": "Traître...!",
						"spanish": "¡Traidor...!",
						"vietnamese": "Kẻ phản bội...!",
						"thai": "คนทรยศ...!",
						"hindi": "गद्दार...!"
					},
					"type": "speech"
				},
				{
					"speaker": "amir",
					"content": {
						"korean": "나는 그들의 그리움을 보았어. 완벽해지고 싶다는 끝없는 갈망… 나도 그 일부가 되고 싶었을 뿐이야.",
						"english": "I saw their yearning. An endless craving to become perfect... I only wished to be a part of it.",
						"japanese": "彼らの憧れを見た。完璧になりたいという終わりのない渇望…私もその一部になりたかっただけだ。",
						"chinese": "我看到了他们的渴望。渴望变得完美的无尽渴求……我只是想成为其中的一部分。",
						"french": "J'ai vu leur nostalgie. Un désir infini de perfection... Je voulais juste en faire partie.",
						"spanish": "Vi su anhelo. Un deseo interminable de ser perfectos... Yo solo quería ser parte de ello.",
						"vietnamese": "Ta đã thấy nỗi khát khao của chúng. Một khao khát vô tận để trở nên hoàn hảo... Ta chỉ muốn trở thành một phần của nó.",
						"thai": "ฉันเห็นความปรารถนาของพวกเขา ความกระหายอันไม่สิ้นสุดที่จะสมบูรณ์แบบ... ฉันแค่อยากเป็นส่วนหนึ่งของมัน",
						"hindi": "मैंने उनकी लालसा देखी। पूर्ण बनने की एक अंतहीन चाहत... मैं बस उसका एक हिस्सा बनना चाहता था।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "이제 너의 검술은… 나의 것이 된다!",
						"english": "Now your swordsmanship... shall be mine!",
						"japanese": "さあ、お前の剣術は…私のものになる！",
						"chinese": "现在你的剑术……将归我所有！",
						"french": "Maintenant, ton épée... sera mienne !",
						"spanish": "¡Ahora tu esgrima... será mía!",
						"vietnamese": "Giờ đây, kiếm thuật của ngươi... sẽ là của ta!",
						"thai": "บัดนี้เพลงดาบของเจ้า... จะเป็นของข้า!",
						"hindi": "अब तुम्हारी तलवारबाज़ी... मेरी होगी!"
					},
					"speaker": "amir",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아미르의 몸이 기괴하게 뒤틀리며 결정의 심장부와 하나가 되었다. '모래꽃'이 진정한 괴물의 형상을 드러냈다.",
						"english": "Amir's body grotesquely twisted, becoming one with the crystal's core. The 'Sand Flower' revealed its true monstrous form.",
						"japanese": "アミールの身体は異形にねじれ、結晶の核心と一つになった。「砂の花」は真の怪物の姿を現した。",
						"chinese": "阿米尔的身体扭曲变形，与水晶核心融为一体。'沙之花'露出了它真正的怪物形态。",
						"french": "Le corps d'Amir se tordit horriblement, ne faisant qu'un avec le cœur de cristal. La 'Fleur des Sables' révéla sa véritable forme monstrueuse.",
						"spanish": "El cuerpo de Amir se retorció grotescamente, fusionándose con el núcleo del cristal. La 'Flor de Arena' reveló su verdadera forma monstruosa.",
						"vietnamese": "Cơ thể của Amir vặn vẹo một cách kỳ dị, hòa làm một với lõi pha lê. 'Hoa Cát' đã lộ ra hình dạng quái vật thật sự của nó.",
						"thai": "ร่างของอาเมียร์บิดเบี้ยวผิดรูป กลายเป็นหนึ่งเดียวกับแกนกลางของคริสตัล 'บุปผาทราย' เผยร่างอสูรที่แท้จริงออกมา",
						"hindi": "अमीर का शरीर विकृत रूप से मुड़ गया, और क्रिस्टल के मूल के साथ एक हो गया। 'रेत का फूल' ने अपना असली राक्षसी रूप प्रकट किया।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…더욱 강해져야 해… 그들의 검술을… 나에게 바쳐라… 우리는… 완벽해질 것이다…!",
						"english": "...I must grow stronger... offer their swordsmanship... to me... We... shall become perfect...!",
						"japanese": "…もっと強くなければ…彼らの剣術を…私に捧げろ…私たちは…完璧になるだろう…！",
						"chinese": "……我必须变得更强……将他们的剑术……奉献给我……我们……将变得完美……！",
						"french": "...Je dois devenir plus fort... Offrez-moi leur maîtrise de l'épée... Nous... deviendrons parfaits... !",
						"spanish": "...Debo ser más fuerte... Ofréceme su esgrima... ¡Nosotros... seremos perfectos...!",
						"vietnamese": "...Ta phải trở nên mạnh hơn... Dâng kiếm thuật của chúng... cho ta... Chúng ta... sẽ trở nên hoàn hảo...!",
						"thai": "...ข้าต้องแข็งแกร่งขึ้น... จงมอบเพลงดาบของพวกเขา... ให้ข้า... พวกเรา... จะสมบูรณ์แบบ...!",
						"hindi": "...मुझे और मजबूत होना होगा... उनकी तलवारबाज़ी... मुझे अर्पित करो... हम... पूर्ण हो जाएँगे...!"
					},
					"emotion": "angry",
					"speaker": "boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "감히…! 너를 용서치 않아!",
						"english": "How dare you...! I will not forgive you!",
						"japanese": "よくも…！許さないぞ！",
						"chinese": "你竟敢……！我绝不饶恕你！",
						"french": "Comment oses-tu... ! Je ne te pardonnerai pas !",
						"spanish": "¡Cómo te atreves...! ¡No te perdonaré!",
						"vietnamese": "Ngươi dám...! Ta sẽ không tha thứ cho ngươi!",
						"thai": "บังอาจนัก...! ข้าจะไม่ให้อภัยเจ้า!",
						"hindi": "तुम्हारी हिम्मत कैसे हुई...! मैं तुम्हें माफ़ नहीं करूँगा!"
					},
					"speaker": "character_any"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "결정의 심장이 산산조각 났다. 모든 비극의 근원이 침묵했다.",
						"english": "The crystal heart shattered. The source of all tragedy fell silent.",
						"japanese": "結晶の心臓は粉々に砕け散った。全ての悲劇の根源は沈黙した。",
						"chinese": "水晶之心碎裂。所有悲剧的根源都归于沉寂。",
						"french": "Le cœur de cristal se brisa en mille morceaux. La source de toute tragédie se tut.",
						"spanish": "El corazón de cristal se hizo añicos. La fuente de toda tragedia enmudeció.",
						"vietnamese": "Trái tim pha lê vỡ tan tành. Nguồn gốc của mọi bi kịch đã im bặt.",
						"thai": "แกนกลางคริสตัลแตกเป็นเสี่ยงๆ ต้นตอแห่งโศกนาฏกรรมทั้งปวงเงียบงันลง",
						"hindi": "क्रისტल का हृदय टूट गया। सभी त्रासदियों का स्रोत शांत हो गया।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "…불완전한… 내가… 사라진다… 그러나… 그리움은… 영원히…",
						"english": "...The imperfect... me... fades away... But... the yearning... remains... forever...",
						"japanese": "…不完全な…私が…消える…しかし…憧れは…永遠に…",
						"chinese": "……不完美的……我……消失了……然而……那份渴望……永存……",
						"french": "...L'imparfait... moi... disparaît... Mais... le désir... demeure... pour toujours...",
						"spanish": "...El imperfecto... yo... desaparezco... Pero... el anhelo... permanece... para siempre...",
						"vietnamese": "...Cái ta... không hoàn hảo... biến mất... Nhưng... nỗi khát khao... sẽ vĩnh cửu...",
						"thai": "...ข้า...ผู้ไม่สมบูรณ์... สลายไป... แต่...ความปรารถนา...จะคงอยู่...ตลอดไป...",
						"hindi": "...अपूर्ण... मैं... मिट जाता हूँ... लेकिन... लालसा... हमेशा... रहेगी..."
					},
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이것이… 완벽한 검술이 남긴 결과인가.",
						"english": "Is this... the result left by perfect swordsmanship?",
						"japanese": "これが…完璧な剣術が残した結果なのか。",
						"chinese": "这就是……完美剑术留下的结果吗？",
						"french": "Est-ce là... le résultat laissé par la maîtrise parfaite de l'épée ?",
						"spanish": "¿Es este... el resultado que dejó la esgrima perfecta?",
						"vietnamese": "Đây là... kết quả mà kiếm thuật hoàn hảo để lại sao?",
						"thai": "นี่คือ...ผลลัพธ์ที่เพลงดาบสมบูรณ์แบบทิ้งไว้หรือนี่",
						"hindi": "क्या यह... पूर्ण तलवारबाज़ी का परिणाम है?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아미르… 어째서….",
						"english": "Amir... why...?",
						"japanese": "アミール…どうして…。",
						"chinese": "阿米尔……为何……。",
						"french": "Amir... pourquoi... ?",
						"spanish": "Amir... ¿por qué...?",
						"vietnamese": "Amir... tại sao...?",
						"thai": "อาเมียร์...ทำไม...?",
						"hindi": "अमीर... क्यों...?"
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "쓰러진 아미르의 모습. 그에게 남은 것은 광기 어린 집착뿐이었다.",
						"english": "The fallen Amir. All that remained of him was a mad obsession.",
						"japanese": "倒れたアミールの姿。彼に残されたのは、狂気じみた執着だけだった。",
						"chinese": "倒下的阿米尔。他所剩的，只有疯狂的执念。",
						"french": "L'apparence d'Amir à terre. Il ne lui restait qu'une obsession folle.",
						"spanish": "La figura de Amir caído. Lo único que le quedaba era una obsesión enloquecida.",
						"vietnamese": "Dáng vẻ của Amir ngã xuống. Tất cả những gì còn lại trong anh ta chỉ là một sự ám ảnh điên cuồng.",
						"thai": "ร่างของอาเมียร์ที่ล้มลง สิ่งที่หลงเหลือในตัวเขาคือความหลงใหลคลั่งไคล้เท่านั้น",
						"hindi": "गिरे हुए अमीर का रूप। उसे बस एक पागलपन भरा जुनून बचा था।"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"붉게 빛나던 결정의 심장이 부서지고, 사막은 다시 침묵으로 돌아갔다.",
			"아미르의 광기는 끝났다. 그러나 그가 남긴 상처와 그리움은 선명했다.",
			"완벽한 검술의 저주는 끊어졌지만, 모든 것을 잃은 듯한 허망함만이 남았다.",
			"바람이 불어왔다. 모든 것이 끝났지만, 모든 것이 끝난 것은 아니었다."
		],
		"english": [
			"The heart of the glowing red crystal shattered, and the desert returned to silence.",
			"Amir's madness ended. But the wounds and longing he left behind remained vivid.",
			"The curse of perfect swordsmanship was broken, but only a sense of emptiness, as if everything was lost, remained.",
			"The wind blew. Everything had ended, but not everything was over."
		],
		"japanese": [
			"赤く輝く結晶の心臓が砕け散り、砂漠は再び沈黙に戻った。",
			"アミールの狂気は終わった。しかし、彼が残した傷と慕情は鮮明だった。",
			"完璧な剣術の呪いは断たれたが、全てを失ったかのような虚無感だけが残った。",
			"風が吹いた。全てが終わったが、全てが終わったわけではなかった。"
		],
		"chinese": [
			"红光闪烁的水晶之心破碎，沙漠再次归于沉寂。",
			"阿米尔的疯狂结束了。但他留下的伤痕和思念依然清晰。",
			"完美剑术的诅咒被打破了，但只剩下一种仿佛失去了一切的虚无感。",
			"风吹了起来。一切都结束了，但一切又都没有结束。"
		],
		"french": [
			"Le cœur du cristal rougeoyant se brisa, et le désert retrouva le silence.",
			"La folie d'Amir prit fin. Mais les blessures et le désir qu'il laissa étaient vifs.",
			"La malédiction de l'escrime parfaite fut brisée, mais seule une sensation de vide, comme si tout était perdu, demeurait.",
			"Le vent souffla. Tout était fini, mais tout n'était pas terminé."
		],
		"spanish": [
			"El corazón del cristal rojo resplandeciente se hizo añicos, y el desierto volvió al silencio.",
			"La locura de Amir terminó. Pero las heridas y la añoranza que dejó permanecieron vívidas.",
			"La maldición de la esgrima perfecta se rompió, pero solo quedó una sensación de vacío, como si todo se hubiera perdido.",
			"El viento sopló. Todo había terminado, pero no todo había terminado."
		],
		"vietnamese": [
			"Trái tim pha lê đỏ rực vỡ tan, sa mạc lại chìm vào im lặng.",
			"Sự điên loạn của Amir đã kết thúc. Nhưng những vết thương và nỗi nhớ anh để lại vẫn còn rõ nét.",
			"Lời nguyền kiếm thuật hoàn hảo đã bị phá vỡ, nhưng chỉ còn lại sự trống rỗng, như thể mọi thứ đã mất.",
			"Gió thổi. Mọi thứ đã kết thúc, nhưng không phải mọi thứ đều đã kết thúc."
		],
		"thai": [
			"หัวใจของคริสตัลสีแดงที่ส่องสว่างแตกสลาย และทะเลทรายกลับสู่ความเงียบงันอีกครั้ง",
			"ความบ้าคลั่งของอามีร์สิ้นสุดลงแล้ว แต่บาดแผลและความโหยหาที่เขาทิ้งไว้ยังคงชัดเจน",
			"คำสาปแห่งการฟันดาบที่สมบูรณ์แบบถูกทำลายลงแล้ว แต่เหลือเพียงความว่างเปล่าราวกับสูญเสียทุกสิ่ง",
			"ลมพัดมา ทุกสิ่งจบลงแล้ว แต่ก็ยังไม่จบลงทั้งหมด"
		],
		"hindi": [
			"लाल चमकते क्रिस्टल का हृदय टूट गया, और रेगिस्तान फिर से चुप्पी में लौट गया।",
			"अमीर का पागलपन समाप्त हो गया। लेकिन उसके छोड़े हुए घाव और लालसा स्पष्ट थे।",
			"उत्कृष्ट तलवारबाजी का अभिशाप टूट गया, लेकिन सब कुछ खो जाने जैसा एक खालीपन ही बचा था।",
			"हवा चली। सब कुछ खत्म हो गया था, लेकिन सब कुछ खत्म नहीं हुआ था।"
		]
	},
	"prologue": {
		"korean": [
			"모래꽃의 심장부. 그곳은 사막의 모든 비밀을 품고 있었다.",
			"가장 믿었던 그림자는, 가장 잔혹한 칼날이 되어 돌아왔다.",
			"모든 비극의 시작이자 끝. 결정화된 그리움이 울부짖었다.",
			"이제, 진실 앞에서 가장 무거운 대가를 치를 시간이었다."
		],
		"english": [
			"The heart of the Sandflower. It held all the desert's secrets.",
			"The shadow I trusted most, returned as the cruelest blade.",
			"The beginning and end of all tragedy. Crystallized longing wailed.",
			"Now, it was time to pay the heaviest price before the truth."
		],
		"japanese": [
			"砂花の心臓部。そこは砂漠の全ての秘密を宿していた。",
			"最も信じた影は、最も残酷な刃となって戻ってきた。",
			"全ての悲劇の始まりにして終わり。結晶化した慕情が叫びを上げた。",
			"今、真実の前で最も重い代償を払う時が来た。"
		],
		"chinese": [
			"沙花之心。那里蕴藏着沙漠的所有秘密。",
			"最信任的影子，化作最残酷的刀锋归来。",
			"所有悲剧的开始与结束。结晶化的思念在哀嚎。",
			"现在，是时候在真相面前付出最沉重的代价了。"
		],
		"french": [
			"Le cœur de la Fleur de Sable. Il détenait tous les secrets du désert.",
			"L'ombre la plus fidèle, revint comme la lame la plus cruelle.",
			"Le début et la fin de toute tragédie. Le désir cristallisé hurlait.",
			"Maintenant, il était temps de payer le prix le plus lourd devant la vérité."
		],
		"spanish": [
			"El corazón de la Flor de Arena. Guardaba todos los secretos del desierto.",
			"La sombra más confiada, regresó como la espada más cruel.",
			"El principio y el fin de toda tragedia. La añoranza cristalizada gimió.",
			"Ahora, era el momento de pagar el precio más alto ante la verdad."
		],
		"vietnamese": [
			"Trái tim của Hoa Cát. Nơi đó chứa đựng mọi bí mật của sa mạc.",
			"Bóng hình tin tưởng nhất, nay trở thành lưỡi dao tàn khốc nhất.",
			"Khởi đầu và kết thúc mọi bi kịch. Nỗi nhớ kết tinh gào thét.",
			"Giờ là lúc phải trả giá đắt nhất trước sự thật."
		],
		"thai": [
			"ใจกลางของบุปผาทราย มันกุมความลับทั้งหมดของทะเลทรายไว้",
			"เงาที่ไว้ใจที่สุด กลับกลายเป็นคมดาบที่โหดร้ายที่สุด",
			"จุดเริ่มต้นและจุดจบของโศกนาฏกรรมทั้งหมด ความโหยหาที่ตกผลึกร่ำไห้",
			"บัดนี้ ถึงเวลาที่จะต้องจ่ายราคาแพงที่สุดต่อหน้าความจริงแล้ว"
		],
		"hindi": [
			"रेत के फूल का हृदय। इसमें रेगिस्तान के सभी रहस्य समाए हुए थे।",
			"जिस पर सबसे अधिक भरोसा किया, वही छाया सबसे क्रूर तलवार बन कर लौटी।",
			"सभी त्रासदियों का आरंभ और अंत। क्रिस्टलीकृत लालसा विलाप कर रही थी।",
			"अब, सत्य के सामने सबसे भारी कीमत चुकाने का समय था।"
		]
	}
} as const;
