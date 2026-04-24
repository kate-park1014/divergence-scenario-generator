export const scenario_desert_mirage_chef_01 = {
	"scenario_id": "desert_mirage_chef_01",
	"order": 1,
	"act": "intro",
	"theme": "desert",
	"actors": {
		"Zafir": {
			"name": {
				"korean": "자피르",
				"english": "Zafir",
				"japanese": "ザフィール",
				"chinese": "扎菲尔",
				"french": "Zafir",
				"spanish": "Zafir",
				"vietnamese": "Zafir",
				"thai": "ซาฟีร์",
				"hindi": "ज़ाफ़िर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/935b3bcc-634c-4df6-af5d-06ca42940e00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/88c657de-9079-41e1-e3ab-05efa570ae00/public"
		},
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
		}
	},
	"boss": {
		"pool_id": "pool_021"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "모래바람이 잦아들자, 화려한 연회장이 눈앞에 펼쳐졌다.",
						"english": "As the sandstorm subsided, a magnificent banquet hall unfolded before my eyes.",
						"japanese": "砂嵐が収まると、目の前に豪華な宴会場が広がった。",
						"chinese": "沙尘暴平息后，一座华丽的宴会厅呈现在眼前。",
						"french": "Quand la tempête de sable s'est calmée, une magnifique salle de banquet est apparue devant moi.",
						"spanish": "Cuando la tormenta de arena amainó, un magnífico salón de banquetes se desplegó ante mis ojos.",
						"vietnamese": "Khi bão cát lắng xuống, một sảnh tiệc lộng lẫy hiện ra trước mắt tôi.",
						"thai": "เมื่อพายุทรายสงบลง ห้องจัดเลี้ยงอันหรูหราก็ปรากฏขึ้นตรงหน้า",
						"hindi": "जब रेतीला तूफान थम गया, तो मेरी आँखों के सामने एक शानदार भोज कक्ष खुल गया।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…여기가 어디야?",
						"english": "...Where am I?",
						"japanese": "……ここ、どこだ？",
						"chinese": "……这是哪里？",
						"french": "...Où suis-je ?",
						"spanish": "...¿Dónde estoy?",
						"vietnamese": "...Đây là đâu?",
						"thai": "...ที่นี่ที่ไหน?",
						"hindi": "...मैं कहाँ हूँ?"
					}
				},
				{
					"emotion": "happy",
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "저… 저기 좀 봐!",
						"english": "L-look over there!",
						"japanese": "あ…あれ見て！",
						"chinese": "看……看那里！",
						"french": "R-regarde là-bas !",
						"spanish": "¡M-mira allá!",
						"vietnamese": "K-kia kìa!",
						"thai": "น-นั่นดูสิ!",
						"hindi": "व-वहाँ देखो!"
					}
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "Zafir",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"speaker": "Zafir",
					"content": {
						"korean": "황금빛 요리들이 가득해! 꿈인가?",
						"english": "It's full of golden dishes! Is this a dream?",
						"japanese": "黄金の料理がいっぱいだ！夢か？",
						"chinese": "到处都是金色的菜肴！这是梦吗？",
						"french": "C'est rempli de plats dorés ! Est-ce un rêve ?",
						"spanish": "¡Está lleno de platos dorados! ¿Es un sueño?",
						"vietnamese": "Toàn là món ăn vàng óng! Đây là mơ sao?",
						"thai": "เต็มไปด้วยอาหารสีทอง! นี่เป็นความฝันหรือเปล่า?",
						"hindi": "यह सुनहरे व्यंजनों से भरा है! क्या यह एक सपना है?"
					},
					"emotion": "happy",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "자피르, 조심해!",
						"english": "Zafir, watch out!",
						"japanese": "ザフィール、気をつけろ！",
						"chinese": "扎菲尔，小心！",
						"french": "Zafir, fais attention !",
						"spanish": "¡Zafir, ten cuidado!",
						"vietnamese": "Zafir, cẩn thận!",
						"thai": "ซาฟีร์ ระวังตัวด้วย!",
						"hindi": "ज़ाफ़िर, सावधान रहो!"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "Zafir",
					"content": {
						"korean": "괜찮아! 어서 가보자!",
						"english": "It's fine! Let's go!",
						"japanese": "大丈夫！行ってみよう！",
						"chinese": "没关系！快走吧！",
						"french": "C'est bon ! Allons-y !",
						"spanish": "¡Está bien! ¡Vamos!",
						"vietnamese": "Không sao đâu! Đi thôi!",
						"thai": "ไม่เป็นไร! ไปกันเถอะ!",
						"hindi": "ठीक है! चलो चलें!"
					},
					"emotion": "happy",
					"type": "speech"
				},
				{
					"speaker": "Sahar",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						5,
						4
					]
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "Sahar",
					"content": {
						"korean": "오셨군요. 마침 요리가 다 되었습니다.",
						"english": "You're here. The meal is just ready.",
						"japanese": "いらっしゃいませ。ちょうど料理ができました。",
						"chinese": "您来了。饭菜刚做好。",
						"french": "Vous êtes là. Le repas est prêt.",
						"spanish": "Ha llegado. La comida está lista.",
						"vietnamese": "Ngài đã đến rồi. Món ăn vừa xong.",
						"thai": "ท่านมาแล้ว. อาหารเพิ่งจะเสร็จพอดีเลย.",
						"hindi": "आप आ गए। खाना बस तैयार है।"
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "요리사가 서둘러 바닥의 모래를 쓸어냈다. 아무도 신경 쓰지 않았다.",
						"english": "The cook hurriedly swept the sand from the floor. No one noticed.",
						"japanese": "料理人が慌てて床の砂を掃った。誰も気に留めなかった。",
						"chinese": "厨师匆忙扫去了地上的沙子。谁也没在意。",
						"french": "Le cuisinier balaya rapidement le sable du sol. Personne n'y prêta attention.",
						"spanish": "El cocinero barrió rápidamente la arena del suelo. Nadie se dio cuenta.",
						"vietnamese": "Người đầu bếp vội vàng quét sạch cát trên sàn. Không ai để ý.",
						"thai": "พ่อครัวรีบกวาดทรายออกจากพื้น ไม่มีใครสนใจเลย.",
						"hindi": "रसोइए ने जल्दी से फर्श से रेत हटा दी। किसी ने ध्यान नहीं दिया।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "Zafir",
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "와! 이건 또 뭐야? 처음 보는 음식인데!",
						"english": "Wow! What's this? I've never seen this food before!",
						"japanese": "わあ！これ、何だ？初めて見る食べ物だ！",
						"chinese": "哇！这是什么？我第一次见这种食物！",
						"french": "Waouh ! Qu'est-ce que c'est que ça ? Je n'ai jamais vu cette nourriture avant !",
						"spanish": "¡Guau! ¿Qué es esto? ¡Nunca había visto esta comida antes!",
						"vietnamese": "Wow! Cái này là gì vậy? Món ăn này tôi chưa thấy bao giờ!",
						"thai": "ว้าว! นี่มันอะไรกันเนี่ย? อาหารแบบนี้ไม่เคยเห็นมาก่อนเลย!",
						"hindi": "वाह! यह क्या है? मैंने ऐसा खाना कभी नहीं देखा!"
					},
					"speaker": "Zafir"
				},
				{
					"content": {
						"korean": "…정말 먹어도 되는 걸까?",
						"english": "...Can I really eat this?",
						"japanese": "…本当に食べてもいいのかな？",
						"chinese": "…真的能吃吗？",
						"french": "...Puis-je vraiment manger ça ?",
						"spanish": "...¿Realmente puedo comer esto?",
						"vietnamese": "...Liệu mình có thể ăn được không?",
						"thai": "...กินได้จริงๆ เหรอเนี่ย?",
						"hindi": "...क्या मैं सच में इसे खा सकता हूँ?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "Sahar",
					"content": {
						"korean": "물론이죠. 굶주린 이에게 축복을 내리는 것이 저의 일.",
						"english": "Of course. It is my duty to bless the hungry.",
						"japanese": "もちろんです。飢えた者に祝福を与えるのが私の務めですから。",
						"chinese": "当然。为饥饿之人赐福是我的职责。",
						"french": "Bien sûr. C'est mon devoir de bénir ceux qui ont faim.",
						"spanish": "Por supuesto. Es mi deber bendecir a los hambrientos.",
						"vietnamese": "Tất nhiên rồi. Ban phước lành cho những người đói khát là nhiệm vụ của tôi.",
						"thai": "แน่นอนอยู่แล้ว. การประทานพรให้แก่ผู้หิวโหยคืองานของข้าพเจ้า.",
						"hindi": "बेशक। भूखों को आशीर्वाद देना मेरा काम है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "고민할 시간에 한 입이라도 더!",
						"english": "While you're hesitating, have another bite!",
						"japanese": "悩む時間があったら、一口でも多く！",
						"chinese": "与其犹豫，不如多吃一口！",
						"french": "Au lieu d'hésiter, prenez une bouchée de plus !",
						"spanish": "¡En lugar de dudar, dale un bocado más!",
						"vietnamese": "Thay vì suy nghĩ, hãy ăn thêm một miếng nữa!",
						"thai": "มัวแต่คิด สู้กินอีกคำดีกว่า!",
						"hindi": "सोचने के बजाय, एक और निवाला खाओ!"
					},
					"speaker": "Zafir",
					"type": "speech",
					"emotion": "happy"
				},
				{
					"content": {
						"korean": "목이 타는 듯했는데, 시원한 물이 당긴다…",
						"english": "My throat was burning, and now I crave cool water...",
						"japanese": "喉が渇いていたのに、冷たい水が飲みたい…",
						"chinese": "喉咙好像要冒火了，好想喝点冰水啊…",
						"french": "Ma gorge brûlait, et maintenant j'ai envie d'eau fraîche...",
						"spanish": "Sentía la garganta ardiendo, y ahora me apetece agua fresca...",
						"vietnamese": "Cổ họng như khô cháy, giờ tôi chỉ muốn uống nước mát...",
						"thai": "คอแห้งผากเลย อยากได้น้ำเย็นๆ...",
						"hindi": "गला सूख रहा था, अब ठंडा पानी चाहिए..."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "Zafir",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "배가 너무 불러! 더는 못 먹겠어!",
						"english": "I'm so full! I can't eat anymore!",
						"japanese": "お腹いっぱい！もう食べられない！",
						"chinese": "我吃得太饱了！再也吃不下了！",
						"french": "J'ai trop mangé ! Je ne peux plus rien avaler !",
						"spanish": "¡Estoy demasiado lleno! ¡No puedo comer más!",
						"vietnamese": "Bụng no căng rồi! Không thể ăn thêm nữa!",
						"thai": "อิ่มมากแล้ว! กินไม่ไหวแล้ว!",
						"hindi": "मेरा पेट बहुत भर गया है! अब और नहीं खा सकता!"
					},
					"speaker": "Zafir"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "분명 많이 먹은 것 같은데… 왜지?",
						"english": "I definitely ate a lot... but why?",
						"japanese": "確かにたくさん食べたはずなのに…なぜだろう？",
						"chinese": "明明吃了很多啊…为什么呢？",
						"french": "J'ai clairement beaucoup mangé... mais pourquoi ?",
						"spanish": "Definitivamente comí mucho... ¿pero por qué?",
						"vietnamese": "Rõ ràng là tôi đã ăn rất nhiều... nhưng tại sao?",
						"thai": "ก็กินไปเยอะแล้วนี่นา... ทำไมนะ?",
						"hindi": "मैंने निश्चित रूप से बहुत खाया है... पर क्यों?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "괜찮습니다. 언제든 부족하면 말씀해주세요.",
						"english": "It's fine. Let me know if you ever need more.",
						"japanese": "大丈夫です。いつでも足りなければお申し付けください。",
						"chinese": "没关系。如果不够，请随时告诉我。",
						"french": "C'est bon. Dites-moi si vous manquez de quelque chose.",
						"spanish": "Está bien. Hágamelo saber si necesita más.",
						"vietnamese": "Không sao đâu. Cứ nói nếu thiếu nhé.",
						"thai": "ไม่เป็นไรครับ ถ้าขาดเหลืออะไรบอกได้เลย",
						"hindi": "कोई बात नहीं। अगर कभी कम पड़े तो बता देना।"
					},
					"speaker": "Sahar",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_1",
					"content": {
						"korean": "이상하다. 이렇게 배가 부른데 힘이 나질 않아.",
						"english": "Strange. I'm so full, yet I have no strength.",
						"japanese": "おかしいな。こんなにお腹がいっぱいなのに、力が出ない。",
						"chinese": "奇怪。我这么饱，却一点力气都没有。",
						"french": "Étrange. Je suis si rassasié, pourtant je n'ai aucune force.",
						"spanish": "Extraño. Estoy tan lleno, pero no tengo fuerzas.",
						"vietnamese": "Lạ thật. Bụng no căng mà sao không có sức.",
						"thai": "แปลกจัง อิ่มขนาดนี้แต่ไม่มีแรงเลย",
						"hindi": "अजीब है। इतना पेट भरा है, फिर भी ताकत नहीं आ रही।"
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "Zafir",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "다들 왜 그래? 이렇게 좋은 잔치에서!",
						"english": "What's wrong, everyone? At such a lovely feast!",
						"japanese": "みんな、どうしたんだ？こんな素敵な宴で！",
						"chinese": "大家怎么了？在这么好的宴会上！",
						"french": "Qu'est-ce qui ne va pas, tout le monde ? À un si beau festin !",
						"spanish": "¡Qué pasa, todos? ¡En una fiesta tan hermosa!",
						"vietnamese": "Mọi người sao vậy? Giữa bữa tiệc tuyệt vời thế này!",
						"thai": "ทุกคนเป็นอะไรไป? ในงานเลี้ยงที่ยอดเยี่ยมแบบนี้!",
						"hindi": "सबको क्या हुआ? इतनी अच्छी दावत में!"
					},
					"speaker": "Zafir",
					"emotion": "happy",
					"type": "speech"
				},
				{
					"content": {
						"korean": "너무… 완벽해. 이 모든 게.",
						"english": "It's too... perfect. All of it.",
						"japanese": "あまりにも…完璧だ。この全てが。",
						"chinese": "太…完美了。这一切。",
						"french": "C'est trop... parfait. Tout cela.",
						"spanish": "Demasiado... perfecto. Todo esto.",
						"vietnamese": "Quá… hoàn hảo. Tất cả.",
						"thai": "มัน…สมบูรณ์แบบเกินไป ทุกอย่างเลย",
						"hindi": "बहुत… सही है। यह सब।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "Sahar",
					"content": {
						"korean": "완벽함은 항상 의심을 동반하는 법. 하지만 진실은 단순하답니다.",
						"english": "Perfection always invites doubt. But the truth is simple.",
						"japanese": "完璧さには常に疑念がつきもの。だが、真実は単純なものだよ。",
						"chinese": "完美总是伴随着怀疑。但真相很简单。",
						"french": "La perfection s'accompagne toujours de doutes. Mais la vérité est simple.",
						"spanish": "La perfección siempre trae dudas. Pero la verdad es simple.",
						"vietnamese": "Sự hoàn hảo luôn đi kèm với nghi ngờ. Nhưng sự thật thì đơn giản thôi.",
						"thai": "ความสมบูรณ์แบบมักนำมาซึ่งความสงสัยเสมอ แต่ความจริงนั้นเรียบง่าย",
						"hindi": "पूर्णता हमेशा संदेह लाती है। लेकिन सच सरल होता है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_2",
					"content": {
						"korean": "…점점 몸이 무거워지는 것 같아.",
						"english": "...My body feels heavier and heavier.",
						"japanese": "…だんだん体が重くなるような気がする。",
						"chinese": "…身体好像越来越沉了。",
						"french": "...Mon corps me semble de plus en plus lourd.",
						"spanish": "...Siento que mi cuerpo se vuelve más pesado.",
						"vietnamese": "...Hình như cơ thể mình càng lúc càng nặng nề.",
						"thai": "…รู้สึกว่าร่างกายหนักขึ้นเรื่อยๆ",
						"hindi": "…मेरा शरीर भारी होता जा रहा है।"
					}
				},
				{
					"type": "speech",
					"emotion": "happy",
					"speaker": "Zafir",
					"content": {
						"korean": "진실? 그건 맛있는 음식이지!",
						"english": "Truth? That's delicious food!",
						"japanese": "真実？それは美味しい食べ物だろ！",
						"chinese": "真相？那不就是美味的食物吗！",
						"french": "La vérité ? C'est une nourriture délicieuse !",
						"spanish": "¿Verdad? ¡Eso es comida deliciosa!",
						"vietnamese": "Sự thật ư? Đó là món ăn ngon chứ gì!",
						"thai": "ความจริงเหรอ? ก็อาหารอร่อยไงล่ะ!",
						"hindi": "सच? वो स्वादिष्ट भोजन है!"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "이제 모두 제 연회의 일부가 되었습니다.",
						"english": "Now, all of you are part of my feast.",
						"japanese": "さあ、お前たちは皆、私の宴の一部となった。",
						"chinese": "现在，你们都成了我宴会的一部分。",
						"french": "Maintenant, vous faites tous partie de mon festin.",
						"spanish": "Ahora, todos sois parte de mi festín.",
						"vietnamese": "Giờ thì, tất cả các ngươi đã trở thành một phần của bữa tiệc của ta.",
						"thai": "ตอนนี้ ทุกคนได้เป็นส่วนหนึ่งของงานเลี้ยงของข้าแล้ว",
						"hindi": "अब, तुम सब मेरी दावत का हिस्सा हो।"
					},
					"speaker": "Sahar",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "연회… 함정이었나!",
						"english": "The feast... was a trap!",
						"japanese": "宴…罠だったのか！",
						"chinese": "宴会…是个陷阱！",
						"french": "Le festin... c'était un piège !",
						"spanish": "La fiesta... ¡era una trampa!",
						"vietnamese": "Bữa tiệc... là một cái bẫy sao!",
						"thai": "งานเลี้ยง... เป็นกับดักหรือนี่!",
						"hindi": "दावत... एक जाल था!"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "Sahar",
					"content": {
						"korean": "모두를 구원할 완벽한 한 끼. 영원히 배부른 환상 속에서.",
						"english": "A perfect meal to save everyone. In an illusion of eternal fullness.",
						"japanese": "皆を救う完璧な一食。永遠に満たされる幻想の中で。",
						"chinese": "拯救所有人的完美一餐。在永远饱足的幻象中。",
						"french": "Un repas parfait pour sauver tout le monde. Dans une illusion de satiété éternelle.",
						"spanish": "Una comida perfecta para salvar a todos. En una ilusión de plenitud eterna.",
						"vietnamese": "Một bữa ăn hoàn hảo để cứu rỗi tất cả. Trong ảo ảnh no đủ vĩnh hằng.",
						"thai": "มื้ออาหารที่สมบูรณ์แบบเพื่อช่วยทุกคน ในภาพลวงตาแห่งความอิ่มเอมชั่วนิรันดร์",
						"hindi": "सभी को बचाने के लिए एक उत्तम भोजन। शाश्वत तृप्ति के भ्रम में।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "Sahar",
					"content": {
						"korean": "…환상은 사라져도, 갈증은 영원히 남을 겁니다.",
						"english": "...Even if the illusion fades, the thirst will remain forever.",
						"japanese": "…幻想が消えても、渇きは永遠に残るでしょう。",
						"chinese": "…即使幻想消逝，渴望也将永远存在。",
						"french": "...Même si l'illusion s'estompe, la soif restera éternellement.",
						"spanish": "...Aunque la ilusión se desvanezca, la sed permanecerá para siempre.",
						"vietnamese": "...Dù ảo ảnh có tan biến, cơn khát vẫn sẽ còn mãi.",
						"thai": "...แม้ภาพลวงตาจะหายไป แต่ความกระหายจะยังคงอยู่ตลอดไป",
						"hindi": "...भले ही भ्रम मिट जाए, प्यास हमेशा बनी रहेगी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아니. 우리가 이 갈증을 끝낼 거야.",
						"english": "No. We will end this thirst.",
						"japanese": "いいえ。私たちがこの渇きを終わらせる。",
						"chinese": "不。我们将终结这份渴望。",
						"french": "Non. Nous allons mettre fin à cette soif.",
						"spanish": "No. Nosotros acabaremos con esta sed.",
						"vietnamese": "Không. Chúng ta sẽ chấm dứt cơn khát này.",
						"thai": "ไม่ เราจะยุติความกระหายนี้",
						"hindi": "नहीं। हम इस प्यास को खत्म करेंगे।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "허공에 흩어진 황금빛. 사막은 다시 침묵했다.",
						"english": "Golden light scattered into the void. The desert fell silent again.",
						"japanese": "虚空に散った黄金の光。砂漠は再び沈黙した。",
						"chinese": "金光消散于虚空。沙漠再次归于沉寂。",
						"french": "Une lumière dorée s'est dispersée dans le vide. Le désert est redevenu silencieux.",
						"spanish": "La luz dorada se dispersó en el vacío. El desierto volvió a quedar en silencio.",
						"vietnamese": "Ánh vàng tan biến vào hư không. Sa mạc lại chìm vào im lặng.",
						"thai": "แสงสีทองสลายไปในความว่างเปล่า ทะเลทรายกลับสู่ความเงียบงันอีกครั้ง",
						"hindi": "सोने की रोशनी शून्य में बिखर गई। रेगिस्तान फिर से खामोश हो गया।"
					}
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "결국 탐욕에 지고 마는군요. 영원히 헤매십시오.",
						"english": "You succumb to greed after all. Wander forever.",
						"japanese": "結局、貪欲に負けてしまうのですね。永遠にさまよいなさい。",
						"chinese": "你终究屈服于贪婪。永远徘徊吧。",
						"french": "Vous succombez à l'avidité après tout. Errez pour l'éternité.",
						"spanish": "Al final sucumbes a la codicia. Vagabundea para siempre.",
						"vietnamese": "Cuối cùng ngươi cũng chịu thua lòng tham. Hãy lang thang mãi mãi.",
						"thai": "ในที่สุดเจ้าก็พ่ายแพ้ต่อความโลภ จงหลงทางไปตลอดกาล",
						"hindi": "आप आखिर लालच के आगे झुक जाते हैं। हमेशा के लिए भटकते रहो।"
					},
					"speaker": "Sahar",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…아직 끝나지 않았어.",
						"english": "...It's not over yet.",
						"japanese": "…まだ終わっていない。",
						"chinese": "…还没结束。",
						"french": "...Ce n'est pas encore fini.",
						"spanish": "...Todavía no ha terminado.",
						"vietnamese": "...Chưa kết thúc đâu.",
						"thai": "...ยังไม่จบหรอก",
						"hindi": "...अभी खत्म नहीं हुआ है।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "흐흐… 곧 다시 제 연회로 돌아올 겁니다.",
						"english": "Heh heh... You'll soon return to my feast.",
						"japanese": "フフフ… すぐに私の宴に戻ってくるでしょう。",
						"chinese": "呵呵… 你很快就会回到我的宴会。",
						"french": "Hé hé... Vous reviendrez bientôt à mon festin.",
						"spanish": "Je je... Pronto regresarás a mi festín.",
						"vietnamese": "Hề hề... Ngươi sẽ sớm trở lại bữa tiệc của ta thôi.",
						"thai": "ฮิฮิ... เจ้าจะกลับมางานเลี้ยงของข้าในไม่ช้า",
						"hindi": "हे हे... तुम जल्द ही मेरी दावत में वापस आओगे।"
					},
					"speaker": "Sahar",
					"emotion": "base",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"끝없이 펼쳐진 모래언덕. 작렬하는 태양이 모든 것을 태웠다.",
			"갈증은 목을, 허기는 배를 찢는 듯했다.",
			"그때, 저 멀리 아른거리는 황금빛.",
			"신기루일까? 아니, 그곳엔 연회장이 있었다.",
			"완벽한 환영, 피할 수 없는 유혹이었다."
		],
		"english": [
			"Endless dunes stretched out. The scorching sun burned everything.",
			"Thirst tore at my throat, hunger gnawed at my stomach.",
			"Then, a shimmering golden light in the distance.",
			"A mirage? No, there was a banquet hall.",
			"A perfect illusion, an irresistible temptation."
		],
		"japanese": [
			"どこまでも広がる砂丘。灼熱の太陽がすべてを焼き尽くしていた。",
			"喉は渇き、腹は空腹で引き裂かれるようだった。",
			"その時、遥か遠くで揺らめく黄金の輝き。",
			"蜃気楼か？いや、そこには宴会場があった。",
			"完璧な幻影、抗いがたい誘惑だった。"
		],
		"chinese": [
			"无边无际的沙丘。灼热的太阳炙烤着一切。",
			"饥渴仿佛撕裂着喉咙和胃。",
			"就在那时，远方闪烁着金色的光芒。",
			"是海市蜃楼吗？不，那儿有一座宴会厅。",
			"那是完美的幻象，无法抗拒的诱惑。"
		],
		"french": [
			"Des dunes infinies s'étendaient à perte de vue. Le soleil ardent brûlait tout.",
			"La soif déchirait ma gorge, la faim tordait mes entrailles.",
			"Alors, au loin, une lueur dorée vacillait.",
			"Un mirage ? Non, il y avait une salle de banquet.",
			"Une illusion parfaite, une tentation irrésistible."
		],
		"spanish": [
			"Dunas interminables se extendían. El sol abrasador lo quemaba todo.",
			"La sed desgarraba la garganta, el hambre el estómago.",
			"Entonces, a lo lejos, un brillo dorado parpadeó.",
			"¿Un espejismo? No, allí había un salón de banquetes.",
			"Una ilusión perfecta, una tentación irresistible."
		],
		"vietnamese": [
			"Những cồn cát trải dài vô tận. Mặt trời gay gắt thiêu đốt mọi thứ.",
			"Cơn khát như xé cổ họng, cơn đói như cào xé ruột gan.",
			"Bỗng nhiên, một ánh vàng lấp lánh hiện ra ở đằng xa.",
			"Có phải ảo ảnh không? Không, đó là một sảnh tiệc.",
			"Một ảo ảnh hoàn hảo, một cám dỗ không thể cưỡng lại."
		],
		"thai": [
			"เนินทรายที่ทอดยาวไม่มีที่สิ้นสุด ดวงอาทิตย์ที่แผดเผาเผาทุกสิ่งจนมอดไหม้",
			"ความกระหายน้ำราวกับฉีกคอ ความหิวราวกับกัดกินท้อง",
			"ทันใดนั้น แสงสีทองระยิบระยับอยู่ไกลออกไป",
			"ภาพลวงตาหรือเปล่า? ไม่สิ ที่นั่นมีห้องจัดเลี้ยงอยู่",
			"ภาพลวงตาที่สมบูรณ์แบบ เป็นสิ่งยั่วยวนที่ไม่อาจต้านทานได้"
		],
		"hindi": [
			"अंतहीन टीले फैले हुए थे। तपते सूरज ने सब कुछ जला दिया था।",
			"प्यास ने गले को फाड़ दिया, भूख ने पेट को चीर दिया।",
			"तभी, दूर से एक सुनहरी चमक टिमटिमाती हुई दिखाई दी।",
			"क्या यह मृगतृष्णा थी? नहीं, वहाँ एक भोज कक्ष था।",
			"एक उत्तम भ्रम, एक अनूठा प्रलोभन।"
		]
	}
} as const;
