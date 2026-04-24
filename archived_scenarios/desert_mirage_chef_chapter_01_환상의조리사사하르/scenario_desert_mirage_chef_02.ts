export const scenario_desert_mirage_chef_02 = {
	"scenario_id": "desert_mirage_chef_02",
	"order": 2,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"Sahar": {
			"monster_id": "mon_3b008714-9abd-4927-88bb-6d8a32ec8805",
			"name": {
				"korean": "사하르",
				"english": "Sahar",
				"japanese": "サハル",
				"chinese": "萨哈尔",
				"french": "Sahar",
				"spanish": "Sahar",
				"vietnamese": "Sahar",
				"thai": "ซาฮาร์",
				"hindi": "साहर"
			},
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/94c19f1a-b435-427a-01bf-5e87c55a0200/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/1d10bedd-8042-4ef7-47c6-c2d6ac0e5100/public"
		},
		"Naira": {
			"name": {
				"korean": "나이라",
				"english": "Naira",
				"japanese": "ナイラ",
				"chinese": "奈拉",
				"french": "Naïra",
				"spanish": "Naira",
				"vietnamese": "Naira",
				"thai": "นาอิรา",
				"hindi": "नायरा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/dc53e5f9-7cfb-462c-c9f5-49e3ac660400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/234a2f2e-f59f-4483-45dc-eff293829800/public"
		}
	},
	"boss": {
		"pool_id": "pool_022"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "황금빛 연회는 사막 한가운데서 모두를 맞이했다.",
						"english": "The golden feast welcomed everyone in the middle of the desert.",
						"japanese": "黄金の宴は、砂漠の真ん中で皆を迎え入れた。",
						"chinese": "金色的盛宴在沙漠中央迎接了所有人。",
						"french": "Le festin doré accueillit tout le monde au milieu du désert.",
						"spanish": "El festín dorado dio la bienvenida a todos en medio del desierto.",
						"vietnamese": "Bữa tiệc vàng rực chào đón mọi người giữa sa mạc.",
						"thai": "งานเลี้ยงสีทองต้อนรับทุกคนกลางทะเลทราย",
						"hindi": "रेगिस्तान के बीच में सुनहरी दावत ने सबका स्वागत किया।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "기적이야. 목마름이 사라졌어.",
						"english": "A miracle. My thirst is gone.",
						"japanese": "奇跡だ。喉の渇きが消えた。",
						"chinese": "真是奇迹。口渴的感觉消失了。",
						"french": "Un miracle. Ma soif a disparu.",
						"spanish": "Un milagro. Mi sed ha desaparecido.",
						"vietnamese": "Thật kỳ diệu. Cơn khát đã biến mất.",
						"thai": "ปาฏิหาริย์ ความกระหายหายไปแล้ว",
						"hindi": "चमत्कार है। मेरी प्यास बुझ गई।"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "Sahar",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "오셨군요. 지친 여행객들을 위한 완벽한 한 끼.",
						"english": "You've arrived. A perfect meal for weary travelers.",
						"japanese": "いらっしゃいませ。疲れた旅人たちのための完璧な食事です。",
						"chinese": "您来了。这是为疲惫的旅人准备的完美一餐。",
						"french": "Vous êtes arrivés. Un repas parfait pour les voyageurs fatigués.",
						"spanish": "Han llegado. Una comida perfecta para viajeros cansados.",
						"vietnamese": "Quý vị đã đến. Một bữa ăn hoàn hảo cho những lữ khách mệt mỏi.",
						"thai": "ท่านมาแล้ว มื้ออาหารที่สมบูรณ์แบบสำหรับนักเดินทางที่เหนื่อยล้า",
						"hindi": "आप आ गए। थके हुए यात्रियों के लिए एक उत्तम भोजन।"
					},
					"speaker": "Sahar"
				},
				{
					"type": "speech",
					"content": {
						"korean": "마음껏 드세요. 모든 고통이 사라질 겁니다.",
						"english": "Eat to your heart's content. All suffering will disappear.",
						"japanese": "心ゆくまで召し上がれ。すべての苦痛が消え去るでしょう。",
						"chinese": "请尽情享用。所有的痛苦都将消失。",
						"french": "Servez-vous à volonté. Toute souffrance disparaîtra.",
						"spanish": "Coman a su gusto. Todo sufrimiento desaparecerá.",
						"vietnamese": "Hãy ăn thật nhiều. Mọi đau khổ sẽ tan biến.",
						"thai": "เชิญทานให้เต็มที่ ความเจ็บปวดทั้งหมดจะหายไป",
						"hindi": "जी भरकर खाओ। सारा दुख गायब हो जाएगा।"
					},
					"speaker": "Sahar",
					"emotion": "happy"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "황홀한 요리가 끊임없이 식탁을 채웠다. 모두가 행복했다.",
						"english": "Exquisite dishes continuously filled the table. Everyone was happy.",
						"japanese": "魅惑的な料理が絶え間なく食卓を満たした。皆が幸せだった。",
						"chinese": "美味佳肴源源不断地摆满餐桌。所有人都很开心。",
						"french": "Des plats exquis remplissaient continuellement la table. Tout le monde était heureux.",
						"spanish": "Exquisitos platos llenaban continuamente la mesa. Todos estaban felices.",
						"vietnamese": "Những món ăn mê hoặc không ngừng lấp đầy bàn ăn. Mọi người đều hạnh phúc.",
						"thai": "อาหารเลิศรสเติมเต็มโต๊ะไม่หยุด ทุกคนมีความสุข",
						"hindi": "उत्तम व्यंजन लगातार मेज पर परोसे जा रहे थे। सब खुश थे।"
					},
					"type": "speech"
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "배가 너무 불러. 이렇게 맛있는 건 처음이야.",
						"english": "I'm so full. I've never tasted anything this delicious.",
						"japanese": "お腹がいっぱいだ。こんなに美味しいものは初めてだ。",
						"chinese": "我太饱了。从未吃过这么好吃的东西。",
						"french": "Je suis si repu. Je n'ai jamais rien goûté d'aussi délicieux.",
						"spanish": "Estoy tan lleno. Nunca he probado algo tan delicioso.",
						"vietnamese": "Tôi no quá rồi. Đây là lần đầu tiên tôi ăn món ngon như vậy.",
						"thai": "ฉันอิ่มมาก ไม่เคยทานอะไรอร่อยขนาดนี้มาก่อนเลย",
						"hindi": "मेरा पेट भर गया है। मैंने ऐसा स्वादिष्ट कुछ भी कभी नहीं खाया।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "Naira",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "Naira",
					"content": {
						"korean": "근데 이상해. 나 분명히 엄청 많이 먹었는데...",
						"english": "But it's strange. I definitely ate a lot...",
						"japanese": "でも変だ。確かにたくさん食べたのに…",
						"chinese": "但是很奇怪。我明明吃了很多啊…",
						"french": "Mais c'est étrange. J'ai pourtant tellement mangé...",
						"spanish": "Pero es extraño. Claramente comí muchísimo...",
						"vietnamese": "Nhưng lạ thật. Rõ ràng là tôi đã ăn rất nhiều rồi...",
						"thai": "แต่มันแปลกนะ ฉันกินไปเยอะมากเลยแท้ๆ...",
						"hindi": "लेकिन यह अजीब है। मैंने निश्चित रूप से बहुत खाया था..."
					}
				},
				{
					"speaker": "Naira",
					"content": {
						"korean": "무슨 맛이었는지 하나도 기억이 안 나.",
						"english": "I can't remember what any of it tasted like.",
						"japanese": "どんな味だったか、何も覚えてない。",
						"chinese": "却一点也想不起来是什么味道了。",
						"french": "Je ne me souviens d'aucune saveur.",
						"spanish": "No recuerdo a qué sabía nada.",
						"vietnamese": "Không nhớ được chút nào nó có vị gì.",
						"thai": "จำไม่ได้เลยว่ารสชาติเป็นยังไง",
						"hindi": "मुझे याद नहीं कि उसका स्वाद कैसा था।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "happy",
					"speaker": "Sahar",
					"content": {
						"korean": "하하, 손님. 그만큼 완벽했단 뜻이죠! 자, 이 특별한 디저트도 맛보세요.",
						"english": "Haha, guest. That means it was perfect! Here, try this special dessert too.",
						"japanese": "ハハ、お客様。それだけ完璧だったということですよ！さあ、この特別なデザートもお試しください。",
						"chinese": "哈哈，客人。那说明它非常完美！来，尝尝这份特别的甜点吧。",
						"french": "Haha, monsieur/madame. Cela signifie que c'était parfait ! Tenez, goûtez aussi ce dessert spécial.",
						"spanish": "Jaja, huésped. ¡Eso significa que fue perfecto! Aquí, pruebe también este postre especial.",
						"vietnamese": "Haha, quý khách. Điều đó có nghĩa là nó hoàn hảo! Nào, hãy nếm thử món tráng miệng đặc biệt này nữa đi.",
						"thai": "ฮ่าฮ่า คุณลูกค้าครับ นั่นหมายความว่ามันสมบูรณ์แบบยังไงล่ะ! เอาล่ะ ลองชิมของหวานพิเศษนี้ดูสิครับ",
						"hindi": "हाहा, मेहमान। इसका मतलब था कि यह एकदम सही था! यहाँ, यह खास मिठाई भी चखिए।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"speaker": "character_any",
					"content": {
						"korean": "정말 대단하다!",
						"english": "That's incredible!",
						"japanese": "本当にすごい！",
						"chinese": "真是太棒了！",
						"french": "C'est vraiment incroyable !",
						"spanish": "¡Realmente asombroso!",
						"vietnamese": "Thật tuyệt vời!",
						"thai": "สุดยอดจริงๆ!",
						"hindi": "यह वाकई कमाल है!"
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "Naira"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "Naira",
					"content": {
						"korean": "다른 손님들은… 왜 아무 말도 안 해?",
						"english": "The other guests... why aren't they saying anything?",
						"japanese": "他の客たちは…なんで何も言わないんだ？",
						"chinese": "其他客人…为什么什么都不说？",
						"french": "Les autres convives... pourquoi ne disent-ils rien ?",
						"spanish": "Los otros huéspedes... ¿por qué no dicen nada?",
						"vietnamese": "Các vị khách khác... sao họ không nói gì vậy?",
						"thai": "แขกคนอื่น... ทำไมถึงไม่พูดอะไรเลยล่ะ?",
						"hindi": "दूसरे मेहमान... वे कुछ क्यों नहीं कह रहे?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "주변의 다른 손님들은 눈을 감은 채 미소만 짓고 있었다. 미동조차 없었다.",
						"english": "The other guests around were just smiling with their eyes closed. They didn't even stir.",
						"japanese": "周りの他の客たちは、目を閉じたまま微笑んでいるだけだった。微動だにしなかった。",
						"chinese": "周围的其他客人们都闭着眼睛，只是微笑着。一动也不动。",
						"french": "Les autres convives autour souriaient, les yeux fermés. Ils ne bougeaient pas d'un pouce.",
						"spanish": "Los otros huéspedes alrededor simplemente sonreían con los ojos cerrados. Ni siquiera se movían.",
						"vietnamese": "Các vị khách khác xung quanh chỉ mỉm cười nhắm mắt. Không hề động đậy một chút nào.",
						"thai": "แขกคนอื่นๆ รอบตัวเอาแต่ยิ้มหลับตา ไม่มีการขยับเขยื้อนเลยแม้แต่น้อย",
						"hindi": "आस-पास के दूसरे मेहमान आँखें बंद करके बस मुस्कुरा रहे थे। वे ज़रा भी नहीं हिले।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…그러게. 너무 조용하다.",
						"english": "...Indeed. It's too quiet.",
						"japanese": "…そうだな。静かすぎる。",
						"chinese": "…是啊。太安静了。",
						"french": "...C'est vrai. C'est trop silencieux.",
						"spanish": "...Cierto. Está demasiado tranquilo.",
						"vietnamese": "...Đúng vậy. Im lặng quá.",
						"thai": "...นั่นสิ เงียบเกินไปแล้ว",
						"hindi": "हाँ, बिल्कुल। बहुत शांति है।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "Sahar",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "사하르가 다가올 때, 순간 그의 모습이 흐릿하게 흔들렸다.",
						"english": "As Sahar approached, his figure momentarily flickered and blurred.",
						"japanese": "サハルが近づいた時、一瞬彼の姿がぼやけて揺れた。",
						"chinese": "当萨哈尔走过来时，他的身影瞬间模糊晃动了一下。",
						"french": "Quand Sahar s'approcha, sa silhouette vacilla et se flouta un instant.",
						"spanish": "Mientras Sahar se acercaba, su figura parpadeó y se desdibujó por un instante.",
						"vietnamese": "Khi Sahar đến gần, hình dáng anh ta chợt mờ ảo và rung lắc.",
						"thai": "ขณะที่ซาฮาร์เดินเข้ามา ร่างของเขาพลันพร่าเลือนและสั่นไหวชั่วขณะ",
						"hindi": "जैसे ही सहार पास आया, उसकी आकृति क्षण भर के लिए धुंधली होकर हिल गई।"
					},
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "아, 혹시 저 보랏빛 수프는 어떠셨나요? 특별히 공들였답니다.",
						"english": "Oh, by the way, how was that purplish soup? I put a lot of effort into it.",
						"japanese": "あ、そういえば、あの紫色のスープはいかがでしたか？特別に手間をかけたんですよ。",
						"chinese": "啊，对了，那紫色的汤您觉得怎么样？我可是特别用心做的。",
						"french": "Oh, au fait, comment avez-vous trouvé cette soupe violacée ? J'y ai mis un soin tout particulier.",
						"spanish": "Oh, por cierto, ¿qué le pareció esa sopa violácea? Le puse mucho esmero.",
						"vietnamese": "À, nhân tiện, quý khách thấy món súp màu tím đó thế nào? Tôi đã rất tâm huyết làm nó đấy.",
						"thai": "อ้อ แล้วซุปสีม่วงนั้นเป็นยังไงบ้างครับ? ผมพิถีพิถันเป็นพิเศษเลยล่ะ",
						"hindi": "ओह, वैसे, वह बैंगनी रंग का सूप कैसा लगा? मैंने इसमें बहुत मेहनत की थी।"
					},
					"speaker": "Sahar",
					"emotion": "happy",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "Naira",
					"content": {
						"korean": "수프요? 그런 게 있었나요?",
						"english": "Soup? Was there such a thing?",
						"japanese": "スープ？そんなものがありましたっけ？",
						"chinese": "汤？有那种东西吗？",
						"french": "De la soupe ? Il y en avait ?",
						"spanish": "¿Sopa? ¿Había algo así?",
						"vietnamese": "Súp ạ? Có món đó sao?",
						"thai": "ซุปเหรอครับ? มีของแบบนั้นด้วยเหรอ?",
						"hindi": "सूप? क्या ऐसा कुछ था?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"speaker": "Sahar",
					"content": {
						"korean": "호호, 맛있는 건 원래 금방 사라지는 법이죠.",
						"english": "Hehe, delicious things always disappear quickly, don't they?",
						"japanese": "ほほう、美味しいものはあっという間に消えるものですよね。",
						"chinese": "呵呵，美味的东西总是很快就消失呢。",
						"french": "Hoho, les bonnes choses disparaissent toujours vite, n'est-ce pas ?",
						"spanish": "Jojo, las cosas deliciosas siempre desaparecen rápido, ¿verdad?",
						"vietnamese": "Hô hô, món ngon thường biến mất nhanh chóng mà.",
						"thai": "โฮ่ๆ ของอร่อยมักจะหมดเร็วเป็นธรรมดาค่ะ",
						"hindi": "हो हो, स्वादिष्ट चीजें वैसे भी जल्दी ही खत्म हो जाती हैं।"
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "Naira",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "Naira",
					"content": {
						"korean": "이 접시… 뭔가 거칠어.",
						"english": "This plate... it feels rough.",
						"japanese": "この皿…何かザラザラする。",
						"chinese": "这个盘子…感觉有点粗糙。",
						"french": "Cette assiette... elle est rugueuse.",
						"spanish": "Este plato... se siente áspero.",
						"vietnamese": "Cái đĩa này... sao mà thô ráp thế.",
						"thai": "จานนี่... ทำไมมันหยาบจัง",
						"hindi": "यह प्लेट... कुछ खुरदुरी लग रही है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "무슨 소리야? 아주 매끄러운데.",
						"english": "What are you talking about? It's perfectly smooth.",
						"japanese": "何を言ってるの？すごく滑らかよ。",
						"chinese": "你在说什么？很光滑啊。",
						"french": "De quoi tu parles ? C'est très lisse.",
						"spanish": "¿De qué hablas? Está muy liso.",
						"vietnamese": "Nói gì vậy? Nó rất trơn mà.",
						"thai": "พูดอะไรน่ะ? มันเนียนจะตาย",
						"hindi": "क्या बक रही हो? यह तो बहुत चिकनी है।"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "나이라가 접시를 만지자, 미세한 모래 가루가 손끝에 묻었다.",
						"english": "Naira touched the plate, and fine sand dust clung to her fingertips.",
						"japanese": "ナイラが皿に触れると、微細な砂の粉が指先に付着した。",
						"chinese": "奈拉触碰盘子，指尖沾上了细微的沙尘。",
						"french": "Quand Naira toucha l'assiette, de fines particules de sable s'accrochèrent à ses doigts.",
						"spanish": "Cuando Naira tocó el plato, un fino polvo de arena se adhirió a sus dedos.",
						"vietnamese": "Naira chạm vào đĩa, những hạt cát mịn dính vào đầu ngón tay cô.",
						"thai": "เมื่อไนราแตะจาน ผงทรายละเอียดก็ติดปลายนิ้วเธอ",
						"hindi": "जैसे ही नायरा ने प्लेट को छुआ, उसकी उंगलियों पर रेत के महीन कण लग गए।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "Naira",
					"content": {
						"korean": "이거… 모래잖아.",
						"english": "This... it's sand.",
						"japanese": "これ…砂じゃない。",
						"chinese": "这…这是沙子。",
						"french": "C'est... du sable.",
						"spanish": "Esto... es arena.",
						"vietnamese": "Cái này... là cát mà.",
						"thai": "นี่มัน... ทรายนี่นา",
						"hindi": "यह... यह रेत है।"
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "Sahar",
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"speaker": "Sahar",
					"content": {
						"korean": "아니, 그건…",
						"english": "No, that's...",
						"japanese": "いや、それは…",
						"chinese": "不，那是…",
						"french": "Non, ça...",
						"spanish": "No, eso...",
						"vietnamese": "Không, cái đó...",
						"thai": "ไม่นะ นั่นมัน...",
						"hindi": "नहीं, वो तो..."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "사하르! 이게 다 뭐예요?",
						"english": "Sahar! What is all this?",
						"japanese": "サハル！これ一体どういうことですか？",
						"chinese": "萨哈尔！这都是什么？",
						"french": "Sahar ! Qu'est-ce que c'est que tout ça ?",
						"spanish": "¡Sahar! ¿Qué es todo esto?",
						"vietnamese": "Sahar! Tất cả những thứ này là gì?",
						"thai": "ซาฮาร์! นี่มันอะไรกันคะ?",
						"hindi": "सहार! यह सब क्या है?"
					}
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "환영의 만찬은 끝나지 않았다. 탐험대는 영원한 꿈속으로 가라앉았다.",
						"english": "The phantom banquet never ended. The expedition sank into an eternal dream.",
						"japanese": "幻影の晩餐は終わらなかった。探検隊は永遠の夢の中へと沈んでいった。",
						"chinese": "幻象的盛宴从未结束。探险队沉入了永恒的梦境。",
						"french": "Le banquet illusoire ne prit jamais fin. L'expédition s'enfonça dans un rêve éternel.",
						"spanish": "El banquete ilusorio nunca terminó. La expedición se hundió en un sueño eterno.",
						"vietnamese": "Bữa tiệc ảo ảnh không bao giờ kết thúc. Đoàn thám hiểm chìm vào giấc mơ vĩnh cửu.",
						"thai": "งานเลี้ยงมายาไม่สิ้นสุด คณะสำรวจจมดิ่งสู่ห้วงฝันนิรันดร์",
						"hindi": "भ्रम का भोज कभी समाप्त नहीं हुआ। अभियान दल एक शाश्वत सपने में डूब गया।"
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…영원히… 행복하게… 잊으세요…",
						"english": "...Forever... happily... forget...",
						"japanese": "…永遠に…幸せに…忘れなさい…",
						"chinese": "...永远...幸福地...遗忘吧...",
						"french": "...Éternellement... heureux... oubliez...",
						"spanish": "...Para siempre... felizmente... olviden...",
						"vietnamese": "...Mãi mãi... hạnh phúc... lãng quên đi...",
						"thai": "...ชั่วนิรันดร์...อย่างมีความสุข...จงลืมเลือนไปเถิด...",
						"hindi": "...हमेशा के लिए... खुशी से... भूल जाओ..."
					},
					"emotion": "happy",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "아니야… 이건 꿈이 아니야…!",
						"english": "No... This isn't a dream!",
						"japanese": "いや…これは夢じゃない…！",
						"chinese": "不…这不是梦…！",
						"french": "Non... Ce n'est pas un rêve !",
						"spanish": "No... ¡Esto no es un sueño!",
						"vietnamese": "Không... Đây không phải là mơ!",
						"thai": "ไม่...นี่ไม่ใช่ความฝัน!",
						"hindi": "नहीं... यह सपना नहीं है!"
					}
				}
			],
			"id": 15,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "Sahar",
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "결국 진실을 알아냈군요. 하지만 늦었습니다.",
						"english": "So you've found the truth. But it's too late.",
						"japanese": "ついに真実を知ったのですね。しかし、もう遅い。",
						"chinese": "你们最终还是知道了真相。但为时已晚。",
						"french": "Vous avez finalement découvert la vérité. Mais il est trop tard.",
						"spanish": "Finalmente descubrieron la verdad. Pero ya es tarde.",
						"vietnamese": "Cuối cùng thì các người cũng đã biết sự thật. Nhưng đã quá muộn rồi.",
						"thai": "ในที่สุดคุณก็รู้ความจริงแล้ว แต่ก็สายไปแล้ว",
						"hindi": "आखिरकार आपको सच पता चल ही गया। लेकिन अब देर हो चुकी है।"
					},
					"speaker": "Sahar"
				},
				{
					"content": {
						"korean": "당신들의 간절한 갈망이, 이 모든 환상을 만들었으니.",
						"english": "For your desperate desires created all these illusions.",
						"japanese": "あなたたちの切なる願望が、この全ての幻影を生み出したのですから。",
						"chinese": "因为你们的强烈渴望，创造了这一切幻象。",
						"french": "Car vos désirs ardents ont créé toutes ces illusions.",
						"spanish": "Porque vuestros fervientes anhelos crearon todas estas ilusiones.",
						"vietnamese": "Vì chính khát khao mãnh liệt của các người đã tạo ra tất cả những ảo ảnh này.",
						"thai": "เพราะความปรารถนาอันแรงกล้าของพวกคุณสร้างภาพลวงตาทั้งหมดนี้ขึ้นมาเอง",
						"hindi": "क्योंकि आपकी तीव्र लालसाओं ने ही इन सभी भ्रमों को जन्म दिया है।"
					},
					"speaker": "Sahar",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "우릴 속인 게 아니라고?",
						"english": "You didn't deceive us?",
						"japanese": "私たちを騙したわけではないと？",
						"chinese": "你没有欺骗我们吗？",
						"french": "Tu ne nous as pas trompés ?",
						"spanish": "¿No nos engañaste?",
						"vietnamese": "Không phải cô đã lừa dối chúng tôi sao?",
						"thai": "คุณไม่ได้หลอกพวกเราเหรอ?",
						"hindi": "तुमने हमें धोखा नहीं दिया?"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "Sahar",
					"content": {
						"korean": "속이긴요. 그저 원하던 것을 보여줬을 뿐. 이제 영원히 머무르세요.",
						"english": "Deceived? No, I merely showed you what you desired. Now, remain here forever.",
						"japanese": "騙したですって？ただ望むものを見せただけ。さあ、永遠にここに留まりなさい。",
						"chinese": "欺骗？不，我只是展示了你所渴望的。现在，永远留在这里吧。",
						"french": "Trompé ? Non, je vous ai seulement montré ce que vous désiriez. Maintenant, restez ici pour toujours.",
						"spanish": "¿Engañado? No, solo te mostré lo que deseabas. Ahora, quédate aquí para siempre.",
						"vietnamese": "Lừa dối ư? Không, ta chỉ cho ngươi thấy điều ngươi khao khát. Giờ thì, hãy ở lại đây mãi mãi.",
						"thai": "หลอกลวงหรือ? ไม่หรอก ข้าแค่แสดงสิ่งที่เจ้าปรารถนาเท่านั้น บัดนี้ จงอยู่ที่นี่ชั่วนิรันดร์เถิด",
						"hindi": "धोखा दिया? नहीं, मैंने बस तुम्हें वही दिखाया जो तुम चाहते थे। अब, यहीं हमेशा के लिए रहो।"
					},
					"emotion": "happy"
				},
				{
					"action": "shake",
					"speaker": "narrator",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "사하르의 뒤편에서 거대한 그림자가 일렁였다. 연회장은 거대한 존재에게 잠식당했다.",
						"english": "Behind Sahar, a colossal shadow flickered. The banquet hall was consumed by a colossal entity.",
						"japanese": "サハルの背後で、巨大な影が揺らめいた。宴会場は巨大な存在に飲み込まれた。",
						"chinese": "萨哈尔身后，巨大的阴影摇曳。宴会厅被一个庞大的存在吞噬了。",
						"french": "Derrière Sahar, une ombre colossale vacilla. La salle de banquet fut engloutie par une entité gigantesque.",
						"spanish": "Detrás de Sahar, una sombra colosal se agitaba. El salón de banquetes fue devorado por una entidad gigantesca.",
						"vietnamese": "Phía sau Sahar, một bóng đen khổng lồ chập chờn. Sảnh tiệc bị một thực thể khổng lồ nuốt chửng.",
						"thai": "เบื้องหลังซาฮาร์ เงาขนาดมหึมาสั่นไหว ห้องจัดเลี้ยงถูกกลืนกินโดยสิ่งมีชีวิตขนาดยักษ์",
						"hindi": "सहार के पीछे, एक विशाल छाया लहराई। भोज कक्ष एक विशाल सत्ता द्वारा निगल लिया गया।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "환상의 끝에서, 영원한 배고픔을 맛보게 해주마.",
						"english": "At the end of this illusion, I shall make you taste eternal hunger.",
						"japanese": "幻想の果てで、永遠の飢えを味わわせてやろう。",
						"chinese": "在幻象的尽头，我将让你品尝永恒的饥饿。",
						"french": "Au bout de cette illusion, je te ferai goûter la faim éternelle.",
						"spanish": "Al final de esta ilusión, te haré probar el hambre eterna.",
						"vietnamese": "Tại cuối ảo ảnh này, ta sẽ cho ngươi nếm trải cơn đói vĩnh cửu.",
						"thai": "ณ ปลายทางแห่งภาพลวงตา ข้าจะให้เจ้าลิ้มรสความหิวโหยชั่วนิรันดร์",
						"hindi": "इस भ्रम के अंत में, मैं तुम्हें शाश्वत भूख का स्वाद चखाऊंगा।"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "환영의 존재가 쓰러지자, 화려했던 연회장은 서서히 모래로 변해갔다.",
						"english": "As the phantom entity fell, the splendid banquet hall slowly turned to sand.",
						"japanese": "幻影の存在が倒れると、華やかだった宴会場はゆっくりと砂へと変わっていった。",
						"chinese": "随着幻影的倒下，华丽的宴会厅逐渐化为沙尘。",
						"french": "Alors que l'entité illusoire tombait, la somptueuse salle de banquet se transforma lentement en sable.",
						"spanish": "Al caer la entidad ilusoria, el espléndido salón de banquetes se convirtió lentamente en arena.",
						"vietnamese": "Khi thực thể ảo ảnh gục ngã, sảnh tiệc lộng lẫy dần biến thành cát.",
						"thai": "เมื่อร่างมายาล้มลง ห้องจัดเลี้ยงอันวิจิตรตระการตาก็ค่อยๆ กลายเป็นผืนทราย",
						"hindi": "जैसे ही भ्रम का अस्तित्व गिरा, शानदार भोज कक्ष धीरे-धीरे रेत में बदल गया।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "…겨우 이게… 끝이 아니야…",
						"english": "...Is this truly... not the end...?",
						"japanese": "…まさかこれが…終わりじゃない…",
						"chinese": "...难道这...不是结束...?",
						"french": "...Ce n'est... pas la fin...?",
						"spanish": "...¿Esto... no es el final...?",
						"vietnamese": "...Lẽ nào đây... không phải là kết thúc...?",
						"thai": "...นี่มัน...ไม่ใช่จุดจบ...?",
						"hindi": "...क्या यह... अंत नहीं है...?"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "결국 다 가짜였어.",
						"english": "In the end, it was all fake.",
						"japanese": "結局、全部偽物だった。",
						"chinese": "到头来，一切都是假的。",
						"french": "Au final, tout n'était que mensonge.",
						"spanish": "Al final, todo fue una farsa.",
						"vietnamese": "Cuối cùng, tất cả đều là giả.",
						"thai": "สุดท้ายแล้ว ทุกอย่างก็เป็นของปลอม",
						"hindi": "अंत में, सब कुछ नकली था।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "남은 것은 끝없는 사막과, 다시 찾아온 허기뿐이었다.",
						"english": "All that remained was an endless desert, and a hunger that returned once more.",
						"japanese": "残されたのは、果てしない砂漠と、再び訪れた飢えだけだった。",
						"chinese": "剩下的只有无尽的沙漠，以及再次袭来的饥饿。",
						"french": "Tout ce qui restait était un désert sans fin, et une faim qui revenait encore.",
						"spanish": "Todo lo que quedó fue un desierto interminable y un hambre que regresó una vez más.",
						"vietnamese": "Tất cả những gì còn lại là một sa mạc bất tận, và cơn đói lại ập đến.",
						"thai": "สิ่งที่เหลืออยู่คือทะเลทรายอันไร้ขอบเขต และความหิวโหยที่กลับมาอีกครั้ง",
						"hindi": "जो बचा था वह एक अंतहीन रेगिस्तान था, और फिर से लौटी भूख।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "하지만 탐험대는 알고 있었다. 환상은 언제나 다시 찾아온다는 것을.",
						"english": "But the expedition knew. Illusions always return.",
						"japanese": "しかし、探検隊は知っていた。幻想はいつだって再び訪れることを。",
						"chinese": "但探险队知道。幻象总会再次降临。",
						"french": "Mais l'expédition savait. Les illusions reviennent toujours.",
						"spanish": "Pero la expedición lo sabía. Las ilusiones siempre regresan.",
						"vietnamese": "Nhưng đoàn thám hiểm biết. Ảo ảnh luôn quay trở lại.",
						"thai": "แต่คณะสำรวจรู้ดีว่า ภาพลวงตาจะกลับมาเสมอ",
						"hindi": "लेकिन अभियान दल जानता था। भ्रम हमेशा वापस आते हैं।"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"사막의 끝없는 갈증.",
			"저 멀리, 황홀한 빛이 유혹했다.",
			"그곳엔 꿈같은 만찬이 펼쳐져 있었다.",
			"완벽해 보이는 그 모든 것이… 시작이었다."
		],
		"english": [
			"Endless thirst of the desert.",
			"Far off, an enchanting light beckoned.",
			"There, a dreamlike feast unfolded.",
			"All that seemed perfect... was just the beginning."
		],
		"japanese": [
			"砂漠の尽きない渇き。",
			"遠く、魅惑的な光が誘った。",
			"そこには、夢のような饗宴が繰り広げられていた。",
			"完璧に見えるそのすべてが…始まりだった。"
		],
		"chinese": [
			"沙漠无尽的干渴。",
			"遥远之处，一道迷人的光芒诱惑着。",
			"那里，一场如梦般的盛宴正在上演。",
			"所有看似完美的一切……都只是开始。"
		],
		"french": [
			"La soif infinie du désert.",
			"Au loin, une lumière envoûtante attirait.",
			"Là, un festin onirique se déroulait.",
			"Tout ce qui semblait parfait... n'était que le début."
		],
		"spanish": [
			"La sed infinita del desierto.",
			"A lo lejos, una luz deslumbrante atraía.",
			"Allí, un festín de ensueño se desplegaba.",
			"Todo lo que parecía perfecto... era solo el principio."
		],
		"vietnamese": [
			"Cơn khát vô tận của sa mạc.",
			"Từ xa, một ánh sáng mê hoặc vẫy gọi.",
			"Ở đó, một bữa tiệc như mơ đã bày ra.",
			"Tất cả những gì tưởng chừng hoàn hảo... chỉ là khởi đầu."
		],
		"thai": [
			"ความกระหายไม่สิ้นสุดของทะเลทราย",
			"ไกลออกไป แสงอันน่าหลงใหลได้เชื้อเชิญ",
			"ที่นั่น งานเลี้ยงในฝันได้ถูกจัดขึ้น",
			"ทุกสิ่งที่ดูสมบูรณ์แบบ... เป็นเพียงจุดเริ่มต้น"
		],
		"hindi": [
			"रेगिस्तान की अंतहीन प्यास।",
			"दूर, एक मनमोहक प्रकाश ने आकर्षित किया।",
			"वहाँ, एक स्वप्निल दावत चल रही थी।",
			"वह सब कुछ जो उत्तम दिख रहा था… एक शुरुआत थी।"
		]
	}
} as const;
