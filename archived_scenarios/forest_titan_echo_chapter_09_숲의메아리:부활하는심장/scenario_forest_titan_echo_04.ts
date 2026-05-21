export const scenario_forest_titan_echo_04 = {
	"scenario_id": "forest_titan_echo_04",
	"order": 4,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"ivy": {
			"id": "mon_d1c759f3-74f8-42b7-ba16-c705649f006f",
			"name": {
				"korean": "아이비",
				"english": "Ivy",
				"japanese": "アイビー",
				"chinese": "艾薇",
				"french": "Ivy",
				"spanish": "Ivy",
				"vietnamese": "Ivy",
				"thai": "ไอวี่",
				"hindi": "आइवी"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/654fde54-6029-4601-b4a8-0578f00df900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/6ee8738d-0e14-4f8d-d04d-c934b0fff000/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"숲 깊은 곳, 은둔자가 기다린다.",
			"'쿠'의 그림자, 단순한 복수가 아니었다.",
			"거대한 왕국의 설계도, 숲 전체가 그 계획의 일부.",
			"그리고 예언의 대가는, 도토리 3개."
		],
		"english": [
			"Deep in the forest, the hermit waits.",
			"Koo's shadow was no mere revenge.",
			"Blueprint of a grand kingdom, the entire forest a part of the plan.",
			"And the price of prophecy: three acorns."
		],
		"japanese": [
			"森の奥深く、隠者が待つ。",
			"「クー」の影、それは単なる復讐ではなかった。",
			"巨大な王国の設計図、森全体がその計画の一部。",
			"そして予言の代償は、ドングリ３つ。"
		],
		"chinese": [
			"森林深处，隐士在等待。",
			"“库”的阴影，并非单纯的复仇。",
			"宏伟王国的蓝图，整片森林都是计划的一部分。",
			"而预言的代价，是三颗橡子。"
		],
		"french": [
			"Au fond de la forêt, l'ermite attend.",
			"L'ombre de Koo n'était pas une simple vengeance.",
			"Le plan d'un grand royaume, la forêt entière fait partie du projet.",
			"Et le prix de la prophétie : trois glands."
		],
		"spanish": [
			"En lo profundo del bosque, el ermitaño espera.",
			"La sombra de Koo no era una simple venganza.",
			"El plano de un gran reino, todo el bosque parte del plan.",
			"Y el precio de la profecía: tres bellotas."
		],
		"vietnamese": [
			"Sâu trong rừng, ẩn sĩ chờ đợi.",
			"Bóng tối của 'Koo' không phải là sự trả thù đơn thuần.",
			"Bản thiết kế của một vương quốc vĩ đại, toàn bộ khu rừng là một phần của kế hoạch.",
			"Và cái giá của lời tiên tri: ba hạt sồi."
		],
		"thai": [
			"ลึกเข้าไปในป่า ฤๅษีรออยู่",
			"เงาของ 'คู' ไม่ใช่แค่การแก้แค้น",
			"พิมพ์เขียวของอาณาจักรอันยิ่งใหญ่ ป่าทั้งผืนเป็นส่วนหนึ่งของแผน",
			"และค่าตอบแทนของคำทำนายคือ ลูกโอ๊ก 3 ลูก"
		],
		"hindi": [
			"जंगल की गहराई में, संन्यासी प्रतीक्षा कर रहा है।",
			"कू की छाया, केवल प्रतिशोध नहीं थी।",
			"एक विशाल राज्य का खाका, पूरा जंगल उस योजना का हिस्सा था।",
			"और भविष्यवाणी की कीमत, तीन शाहबलूत।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "숲의 가장 깊은 곳. 기괴한 형상들이 어둠 속에 잠겨 있다.",
						"english": "The deepest part of the forest. Grotesque figures slumber in darkness.",
						"japanese": "森の最深部。奇怪な形状が闇に沈んでいる。",
						"chinese": "森林最深处。奇异的形态沉睡在黑暗中。",
						"french": "La partie la plus profonde de la forêt. Des formes grotesques sommeillent dans l'obscurité.",
						"spanish": "La parte más profunda del bosque. Figuras grotescas duermen en la oscuridad.",
						"vietnamese": "Nơi sâu thẳm nhất của khu rừng. Những hình thù kỳ dị chìm trong bóng tối.",
						"thai": "ส่วนที่ลึกที่สุดของป่า รูปร่างประหลาดหลับใหลอยู่ในความมืด",
						"hindi": "जंगल का सबसे गहरा हिस्सा। विकृत आकृतियाँ अंधेरे में सो रही हैं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이쪽이 맞는 길인가?",
						"english": "Is this the right path?",
						"japanese": "こちらが正しい道なのか？",
						"chinese": "这条路是对的吗？",
						"french": "Est-ce le bon chemin ?",
						"spanish": "¿Es este el camino correcto?",
						"vietnamese": "Đây có phải là con đường đúng không?",
						"thai": "นี่คือทางที่ถูกต้องหรือเปล่า?",
						"hindi": "क्या यह सही रास्ता है?"
					},
					"speaker": "character_any"
				},
				{
					"spot": [
						4,
						3
					],
					"speaker": "ivy",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "오호라, 용케도 찾아왔군! 나의 이름은 아이비. 이 숲의 모든 지식을 아는 자… 크흠, 나란 존재는 정말 대단해.",
						"english": "Oh, you actually found your way here! My name is Ivy. The one who knows all the knowledge of this forest... *Ahem*, I truly am magnificent.",
						"japanese": "おお、よくぞここまで辿り着いたな！私の名はアイビー。この森のあらゆる知識を知る者…クフッ、我ながら実に素晴らしい存在よ。",
						"chinese": "哦嚯，你竟然找来了！我的名字是艾维。知晓这片森林所有知识的人……咳咳，我真是太了不起了。",
						"french": "Oh, tu as réussi à venir jusqu'ici ! Mon nom est Ivy. Celle qui connaît tout le savoir de cette forêt... *Ahem*, je suis vraiment magnifique.",
						"spanish": "¡Oh, has logrado llegar hasta aquí! Mi nombre es Ivy. La que conoce todo el saber de este bosque... *Ejem*, realmente soy magnífica.",
						"vietnamese": "Ồ, ngươi đã tìm được đường đến đây! Tên ta là Ivy. Kẻ biết mọi tri thức của khu rừng này... *Khụ khụ*, ta thực sự rất vĩ đại.",
						"thai": "โอ้โห เจ้าหาทางมาเจอจนได้! ข้าชื่อไอวี่ ผู้ที่รู้ทุกสรรพความรู้ของป่าแห่งนี้... *แฮ่ม* ข้านี่มันยอดเยี่ยมจริงๆ",
						"hindi": "ओह, तुम यहाँ पहुँच ही गए! मेरा नाम आइवी है। वह जो इस जंगल के सभी ज्ञान को जानता है... *खंखारते हुए*, मैं वास्तव में अद्भुत हूँ।"
					},
					"speaker": "ivy"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "예언자 아이비? '쿠의 심장'에 대해 알고 있나요?",
						"english": "Prophet Ivy? Do you know about 'Koo's Heart'?",
						"japanese": "預言者アイビー？「クーの心臓」についてご存知ですか？",
						"chinese": "预言者艾维？你知道“库之心”吗？",
						"french": "Prophétesse Ivy ? Connais-tu le 'Cœur de Koo' ?",
						"spanish": "¿Profetisa Ivy? ¿Sabes algo sobre el 'Corazón de Koo'?",
						"vietnamese": "Tiên tri Ivy? Ngươi có biết về 'Trái tim của Koo' không?",
						"thai": "ท่านไอวี่ผู้พยากรณ์? ท่านรู้เรื่อง 'หัวใจของคู' หรือไม่?",
						"hindi": "भविष्यवक्ता आइवी? क्या आप 'कू के हृदय' के बारे में जानते हैं?"
					}
				},
				{
					"speaker": "ivy",
					"content": {
						"korean": "물론이지! 내 지식의 범위는 우주를 넘어선다네. 다만… 지식에는 대가가 따르는 법.",
						"english": "Of course! The scope of my knowledge extends beyond the universe. However... knowledge always comes with a price.",
						"japanese": "もちろんだとも！私の知識の範囲は宇宙を超える。だがな…知識には代償が伴うものだ。",
						"chinese": "当然！我的知识范围超越宇宙。只不过……知识总是伴随着代价的。",
						"french": "Bien sûr ! L'étendue de mon savoir dépasse l'univers. Cependant... la connaissance a toujours un prix.",
						"spanish": "¡Por supuesto! El alcance de mi conocimiento se extiende más allá del universo. Sin embargo... el conocimiento siempre tiene un precio.",
						"vietnamese": "Tất nhiên rồi! Phạm vi kiến thức của ta vượt ra ngoài vũ trụ. Tuy nhiên... kiến thức luôn đi kèm với cái giá.",
						"thai": "แน่นอน! ขอบเขตความรู้ของข้ากว้างไกลเกินกว่าจักรวาล ทว่า... ความรู้ย่อมมีราคาที่ต้องจ่าย",
						"hindi": "बेशक! मेरे ज्ञान का दायरा ब्रह्मांड से भी परे है। हालांकि... ज्ञान की हमेशा एक कीमत होती है।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "ivy",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "ivy",
					"content": {
						"korean": "자네, '쿠'가 무엇을 원한다고 생각하나? 단순한 복수? 후후, 어리석은 생각!",
						"english": "Tell me, what do you think 'Koo' desires? Simple revenge? Hmph, foolish thought!",
						"japanese": "君は、「クー」が何を望んでいると思う？単なる復讐だと？フフ、愚かな考えだ！",
						"chinese": "你觉得，“库”想要什么？简单的复仇？呵呵，真是愚蠢的想法！",
						"french": "Dis-moi, que penses-tu que 'Koo' désire ? Une simple vengeance ? Hmph, quelle pensée stupide !",
						"spanish": "Dime, ¿qué crees que desea 'Koo'? ¿Una simple venganza? ¡Hmph, qué pensamiento tan tonto!",
						"vietnamese": "Ngươi, ngươi nghĩ 'Koo' muốn gì? Sự trả thù đơn thuần ư? Hừm, suy nghĩ thật ngu xuẩn!",
						"thai": "เจ้าคิดว่า 'คู' ต้องการอะไร? แค่การแก้แค้นงั้นรึ? หึหึ ความคิดที่โง่เขลา!",
						"hindi": "तुम, तुम्हें क्या लगता है कि 'कू' क्या चाहता है? केवल बदला? हुह, मूर्खतापूर्ण विचार!"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼… 뭔가 더 있다는 건가요?",
						"english": "So... there's more to it?",
						"japanese": "では…何か他にありますか？",
						"chinese": "那么…还有更多吗？",
						"french": "Alors... il y a plus que ça ?",
						"spanish": "¿Entonces... hay algo más?",
						"vietnamese": "Vậy... còn gì nữa không?",
						"thai": "งั้น... มีอะไรอีกงั้นเหรอ?",
						"hindi": "तो... क्या कुछ और है?"
					}
				},
				{
					"speaker": "ivy",
					"content": {
						"korean": "'쿠'는 이 숲 전체를, 고대 종족의 유기체 왕국으로 재창조하려 했다네. 어때, 놀랍지 않나? 나의 통찰력은 정말이지…",
						"english": "'Koo' sought to recreate this entire forest as an organic kingdom of an ancient race. Surprising, isn't it? My insight is truly...",
						"japanese": "「クー」はこの森全体を、古代種族の有機体王国として再創造しようとしたのだ。どうだ、驚きではないか？ 私の洞察力は実に…",
						"chinese": "“库”曾试图将这片森林，重塑成一个古老种族的有机体王国。怎么样，不觉得惊讶吗？我的洞察力真是…",
						"french": "'Koo' a cherché à recréer toute cette forêt comme un royaume organique d'une race ancienne. Étonnant, n'est-ce pas ? Ma perspicacité est vraiment...",
						"spanish": "'Koo' intentó recrear todo este bosque como un reino orgánico de una raza antigua. ¿Sorprendente, verdad? Mi perspicacia es realmente...",
						"vietnamese": "'Koo' đã cố gắng tái tạo toàn bộ khu rừng này thành một vương quốc hữu cơ của một chủng tộc cổ đại. Ngạc nhiên không? Sự thấu hiểu của ta thật sự là...",
						"thai": " 'คู' พยายามที่จะสร้างป่าแห่งนี้ใหม่ทั้งหมด ให้เป็นอาณาจักรอินทรีย์ของเผ่าพันธุ์โบราณ ไม่น่าแปลกใจหรือ? ความเข้าใจของข้านี่ช่าง...",
						"hindi": "'कू' ने इस पूरे जंगल को एक प्राचीन जाति के जैविक साम्राज्य के रूप में फिर से बनाने की कोशिश की। आश्चर्यजनक, है ना? मेरी अंतर्दृष्टि सचमुच..."
					},
					"type": "speech",
					"emotion": "happy"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "왕국이라구요?",
						"english": "A kingdom?",
						"japanese": "王国ですって？",
						"chinese": "王国？",
						"french": "Un royaume ?",
						"spanish": "¿Un reino?",
						"vietnamese": "Một vương quốc ư?",
						"thai": "อาณาจักรเหรอ?",
						"hindi": "एक साम्राज्य?"
					},
					"speaker": "character_1"
				},
				{
					"speaker": "ivy",
					"content": {
						"korean": "이 숲의 모든 생명체가 연결되는 신경망… 그게 바로 '쿠의 심장'의 최종 계획이지!",
						"english": "A neural network connecting all life in this forest... That's the ultimate plan of the 'Heart of Koo'!",
						"japanese": "この森のすべての生命体が繋がる神経網…それが「クーの心臓」の最終計画なのだ！",
						"chinese": "连接这片森林所有生命的神经网络…那正是“库之心”的最终计划！",
						"french": "Un réseau neural connectant toute vie dans cette forêt... C'est le plan ultime du 'Cœur de Koo' !",
						"spanish": "Una red neuronal que conecta toda la vida en este bosque... ¡Ese es el plan definitivo del 'Corazón de Koo'!",
						"vietnamese": "Một mạng lưới thần kinh kết nối mọi sự sống trong khu rừng này... Đó chính là kế hoạch cuối cùng của 'Trái Tim Koo'!",
						"thai": "เครือข่ายประสาทที่เชื่อมโยงสิ่งมีชีวิตทั้งหมดในป่าแห่งนี้... นั่นคือแผนการขั้นสูงสุดของ 'หัวใจแห่งคู'!",
						"hindi": "इस जंगल में सभी जीवन को जोड़ने वाला एक तंत्रिका नेटवर्क... वही 'कू के हृदय' की अंतिम योजना है!"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"speaker": "ivy",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "happy",
					"speaker": "ivy",
					"content": {
						"korean": "'쿠의 심장'은 단순한 장치가 아니야. 숲 전체를 조종하는 거대한 신경망이자, 모든 생명체의 의식을 통합하는… 크흐, 정말 대단한 계획이로세!",
						"english": "The 'Heart of Koo' isn't just a device. It's a vast neural network controlling the entire forest, integrating the consciousness of all living beings... Hmph, what a magnificent plan!",
						"japanese": "「クーの心臓」は単なる装置ではない。森全体を操る巨大な神経網であり、すべての生命体の意識を統合する…クフフ、実に壮大な計画よな！",
						"chinese": "“库之心”并非简单的装置。它是掌控整片森林的巨大神经网络，更是整合所有生命意识的…哼，真是个宏伟的计划啊！",
						"french": "Le 'Cœur de Koo' n'est pas qu'un simple appareil. C'est un vaste réseau neural contrôlant toute la forêt, intégrant la conscience de tous les êtres vivants... Hmph, quel plan magnifique !",
						"spanish": "El 'Corazón de Koo' no es solo un dispositivo. Es una vasta red neuronal que controla todo el bosque, integrando la conciencia de todos los seres vivos... ¡Hmph, qué plan tan magnífico!",
						"vietnamese": "'Trái Tim Koo' không chỉ là một thiết bị. Nó là một mạng lưới thần kinh khổng lồ điều khiển toàn bộ khu rừng, tích hợp ý thức của mọi sinh vật... Khừ khừ, thật là một kế hoạch vĩ đại!",
						"thai": " 'หัวใจแห่งคู' ไม่ใช่แค่อุปกรณ์ มันคือเครือข่ายประสาทขนาดใหญ่ที่ควบคุมป่าทั้งหมด และรวมจิตสำนึกของสิ่งมีชีวิตทั้งหมดเข้าด้วยกัน... ฮืมมม, ช่างเป็นแผนการที่ยิ่งใหญ่จริงๆ!",
						"hindi": "'कू का हृदय' सिर्फ एक उपकरण नहीं है। यह पूरे जंगल को नियंत्रित करने वाला एक विशाल तंत्रिका नेटवर्क है, जो सभी जीवित प्राणियों की चेतना को एकीकृत करता है... ह्म्फ, कितनी शानदार योजना है!"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 저희는 어떻게 해야 하죠?",
						"english": "So what should we do?",
						"japanese": "では、私たちはどうすればいいのですか？",
						"chinese": "那我们该怎么办？",
						"french": "Alors, que devrions-nous faire ?",
						"spanish": "¿Entonces, qué debemos hacer?",
						"vietnamese": "Vậy chúng tôi phải làm gì?",
						"thai": "แล้วเราควรทำยังไง?",
						"hindi": "तो हमें क्या करना चाहिए?"
					}
				},
				{
					"content": {
						"korean": "그것이 문제로다. 자네들의 질문은 마치 심오한 철학적 탐구와 같으니… 열람료는 도토리 세 개일세!",
						"english": "That is the question. Your queries are like profound philosophical inquiries... The viewing fee is three acorns!",
						"japanese": "それが問題なのだ。お主らの質問は、まるで深遠なる哲学的探求のよう…閲覧料はドングリ三つじゃ！",
						"chinese": "那才是问题所在。你们的问题，就像是深奥的哲学探究…阅览费是三颗橡子！",
						"french": "C'est la question. Vos requêtes sont comme de profondes explorations philosophiques... Le droit de consultation est de trois glands !",
						"spanish": "Esa es la cuestión. Vuestras preguntas son como profundas indagaciones filosóficas... ¡La tarifa de consulta es de tres bellotas!",
						"vietnamese": "Đó chính là vấn đề. Câu hỏi của các ngươi giống như những cuộc tìm kiếm triết học sâu sắc... Phí xem là ba hạt dẻ!",
						"thai": "นั่นแหละคือปัญหา คำถามของพวกเจ้าน่ะเหมือนกับการสำรวจปรัชญาอันลึกซึ้ง... ค่าเข้าชมคือลูกโอ๊กสามลูก!",
						"hindi": "यही सवाल है। तुम्हारे प्रश्न गहन दार्शनिक पूछताछ की तरह हैं... देखने का शुल्क तीन एकोर्न है!"
					},
					"speaker": "ivy",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "지금 장난해요?!",
						"english": "Are you kidding me?!",
						"japanese": "今、ふざけてるんですか？！",
						"chinese": "你在开玩笑吗？！",
						"french": "Vous plaisantez ?!",
						"spanish": "¿Estás bromeando?",
						"vietnamese": "Bây giờ ông đang đùa đấy à?!",
						"thai": "นี่คุณล้อเล่นเหรอ?!",
						"hindi": "क्या आप मज़ाक कर रहे हैं?!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "나는 그저 진실을 제공할 뿐! 자네들의 선택은 자네들의 몫! 후후, 이런 비유까지 완벽하다니, 나는 타고난 예언자로세.",
						"english": "I merely provide the truth! Your choices are your own! Hehe, even this analogy is perfect, I am a born prophet.",
						"japanese": "私はただ真実を提供するのみ！ お主らの選択はお主らのもの！フフ、こんな比喩まで完璧だとは、私は生まれながらの預言者よな。",
						"chinese": "我只是提供真相！你们的选择是你们的！呵呵，连这种比喻都如此完美，我真是天生的预言家。",
						"french": "Je ne fais que fournir la vérité ! Vos choix sont les vôtres ! Huhu, même cette analogie est parfaite, je suis un prophète né.",
						"spanish": "¡Yo solo ofrezco la verdad! ¡Vuestras elecciones son vuestras! Juju, incluso esta analogía es perfecta, soy un profeta nato.",
						"vietnamese": "Ta chỉ cung cấp sự thật mà thôi! Lựa chọn của các ngươi là của các ngươi! Hừm hừm, ngay cả phép ẩn dụ này cũng hoàn hảo, ta đúng là một nhà tiên tri bẩm sinh.",
						"thai": "ข้าแค่ให้ความจริงเท่านั้น! ทางเลือกของพวกเจ้าก็คือของพวกเจ้าเอง! ฮ่าๆ, แม้แต่คำเปรียบเทียบนี้ก็ยังสมบูรณ์แบบ, ข้าเป็นผู้พยากรณ์โดยกำเนิดจริงๆ.",
						"hindi": "मैं केवल सच प्रदान करता हूँ! तुम्हारी पसंद तुम्हारी है! हुह, यह उपमा भी एकदम सही है, मैं एक जन्मजात पैगंबर हूँ।"
					},
					"speaker": "ivy",
					"emotion": "happy",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						2
					],
					"speaker": "ivy"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이미 늦었을지도 모르지. '쿠의 심장'은 계속해서 숲을 잠식하고 있다네.",
						"english": "It might already be too late. The 'Heart of Koo' continues to devour the forest.",
						"japanese": "もう手遅れかもしれぬ。「クーの心臓」は森を侵食し続けているのだ。",
						"chinese": "也许已经太晚了。“库之心”正持续侵蚀着森林。",
						"french": "Il est peut-être déjà trop tard. Le 'Cœur de Koo' continue de dévorer la forêt.",
						"spanish": "Quizás ya sea demasiado tarde. El 'Corazón de Koo' continúa devorando el bosque.",
						"vietnamese": "Có lẽ đã quá muộn rồi. 'Trái Tim Koo' đang tiếp tục xâm chiếm khu rừng.",
						"thai": "อาจจะสายเกินไปแล้วก็ได้ 'หัวใจแห่งคู' กำลังกลืนกินป่าไปเรื่อยๆ",
						"hindi": "शायद पहले ही बहुत देर हो चुकी है। 'कू का हृदय' जंगल को निगलता जा रहा है।"
					},
					"speaker": "ivy"
				},
				{
					"content": {
						"korean": "막아야 해요!",
						"english": "We must stop it!",
						"japanese": "止めなければなりません！",
						"chinese": "我们必须阻止它！",
						"french": "Il faut l'arrêter !",
						"spanish": "¡Tenemos que detenerlo!",
						"vietnamese": "Chúng ta phải ngăn chặn nó!",
						"thai": "เราต้องหยุดมัน!",
						"hindi": "हमें इसे रोकना होगा!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "ivy",
					"content": {
						"korean": "모든 것이 '쿠'의 의지대로 변해갈 걸세. 자네들은 그저… 그 흐름에 휩쓸릴 뿐.",
						"english": "Everything will unfold according to 'Ku's will. You will merely... be swept away by the current.",
						"japanese": "全てが「クー」の意志のままに変わっていくだろう。お前たちはただ…その流れに飲み込まれるだけだ。",
						"chinese": "一切都将按照‘库’的意志发展。你们只会……被卷入其中。",
						"french": "Tout se déroulera selon la volonté de 'Kou'. Vous ne serez que... emportés par le courant.",
						"spanish": "Todo cambiará según la voluntad de 'Ku'. Vosotros solo seréis... arrastrados por la corriente.",
						"vietnamese": "Mọi thứ sẽ thay đổi theo ý chí của 'Ku'. Các ngươi sẽ chỉ... bị cuốn trôi theo dòng chảy mà thôi.",
						"thai": "ทุกสิ่งจะเปลี่ยนไปตามเจตจำนงของ 'คู' พวกเจ้าเป็นเพียง... ผู้ที่ถูกกระแสนั้นพัดพาไปเท่านั้น",
						"hindi": "सब कुछ 'कू' की इच्छा के अनुसार बदल जाएगा। तुम बस... उस प्रवाह में बह जाओगे।"
					}
				},
				{
					"content": {
						"korean": "포기하지 않을 거예요!",
						"english": "I won't give up!",
						"japanese": "諦めません！",
						"chinese": "我不会放弃的！",
						"french": "Je n'abandonnerai pas !",
						"spanish": "¡No me rendiré!",
						"vietnamese": "Tôi sẽ không bỏ cuộc đâu!",
						"thai": "ฉันจะไม่ยอมแพ้!",
						"hindi": "मैं हार नहीं मानूंगा!"
					},
					"speaker": "character_3",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "흐음, 그 용기… 칭찬할 만하군. 하지만 대가는 지불해야겠지? 도토리 세 개! 후후, 역시 나는 상업적 감각도 뛰어나다네.",
						"english": "Hmm, your courage... commendable. But you'll have to pay the price, won't you? Three acorns! Heh heh, I truly have a keen business sense.",
						"japanese": "ふむ、その勇気…称賛に値する。だが代償は支払ってもらうぞ？ドングリ三つ！フフフ、やはり我は商才にも長けているな。",
						"chinese": "嗯，那份勇气……值得称赞。但代价还是要付出的，对吧？三颗橡子！呵呵，看来我的商业头脑也相当出色呢。",
						"french": "Hmm, ce courage... louable. Mais il faudra payer le prix, n'est-ce pas ? Trois glands ! Huhu, décidément, j'ai aussi un excellent sens des affaires.",
						"spanish": "Hmm, ese valor... es digno de elogio. Pero tendrás que pagar el precio, ¿no es así? ¡Tres bellotas! Juju, realmente tengo un agudo sentido comercial.",
						"vietnamese": "Hừm, dũng khí đó... đáng khen. Nhưng ngươi sẽ phải trả giá chứ? Ba hạt dẻ! Khà khà, quả nhiên ta cũng có tài kinh doanh xuất sắc.",
						"thai": "หืม, ความกล้านั้น... น่าชมเชย แต่เจ้าต้องจ่ายค่าตอบแทนสินะ? ลูกโอ๊กสามลูก! ฮุฮุ, ข้าก็มีความสามารถทางธุรกิจที่ยอดเยี่ยมจริงๆ",
						"hindi": "हम्म, वह साहस... सराहनीय है। लेकिन तुम्हें कीमत चुकानी होगी, है ना? तीन शाहबलूत! हुह हुह, मेरी व्यावसायिक समझ भी वाकई कमाल की है।"
					},
					"speaker": "ivy",
					"type": "speech",
					"emotion": "happy"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "숲의 심장부는 더욱 깊은 어둠에 잠겨갔다. 되돌릴 수 없는 발걸음.",
						"english": "The heart of the forest sank into deeper darkness. Irreversible steps.",
						"japanese": "森の心臓部はさらに深い闇に沈んでいった。引き返せない足取り。",
						"chinese": "森林的心脏陷入了更深的黑暗。无法回头的脚步。",
						"french": "Le cœur de la forêt s'enfonça dans une obscurité plus profonde. Des pas irréversibles.",
						"spanish": "El corazón del bosque se sumergió en una oscuridad aún más profunda. Pasos irreversibles.",
						"vietnamese": "Trái tim khu rừng chìm sâu vào bóng tối. Những bước chân không thể quay lại.",
						"thai": "ใจกลางป่าจมดิ่งลงสู่ความมืดมิดที่ลึกยิ่งขึ้น ก้าวเดินที่ไม่อาจย้อนกลับได้",
						"hindi": "जंगल का दिल और भी गहरे अंधकार में डूब गया। अटल कदम।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "숲의 가장 깊은 곳, 거대한 그림자가 나타났다.",
						"english": "In the deepest part of the forest, a colossal shadow appeared.",
						"japanese": "森の最も深い場所、巨大な影が現れた。",
						"chinese": "在森林最深处，一个巨大的影子出现了。",
						"french": "Au plus profond de la forêt, une ombre colossale apparut.",
						"spanish": "En lo más profundo del bosque, una sombra colosal apareció.",
						"vietnamese": "Ở nơi sâu thẳm nhất của khu rừng, một bóng đen khổng lồ xuất hiện.",
						"thai": "ในส่วนที่ลึกที่สุดของป่า เงาขนาดมหึมาปรากฏขึ้น",
						"hindi": "जंगल के सबसे गहरे हिस्से में, एक विशाल छाया प्रकट हुई।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 자들. 진실을 파헤쳐 봤자, 결국 모든 것은 나의 계획대로 흐를 뿐.",
						"english": "Fools. Even if you uncover the truth, everything will merely unfold according to my plan.",
						"japanese": "愚か者ども。真実を暴いたところで、結局は全て我が計画通りに進むだけだ。",
						"chinese": "愚蠢的人们。就算你们揭露了真相，一切也终将按照我的计划进行。",
						"french": "Imbéciles. Même si vous découvrez la vérité, tout se déroulera simplement selon mon plan.",
						"spanish": "Necios. Aunque desenterréis la verdad, al final, todo fluirá según mi plan.",
						"vietnamese": "Những kẻ ngu ngốc. Dù các ngươi có phanh phui sự thật, cuối cùng mọi thứ cũng sẽ diễn ra theo kế hoạch của ta mà thôi.",
						"thai": "พวกโง่เขลา แม้พวกเจ้าจะขุดคุ้ยความจริงออกมา ท้ายที่สุดทุกสิ่งก็จะดำเนินไปตามแผนของข้าเท่านั้น",
						"hindi": "मूर्खों। भले ही तुम सच्चाई उजागर कर दो, अंततः सब कुछ मेरी योजना के अनुसार ही होगा।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "네 뜻대로 두지 않을 거야!",
						"english": "I won't let you have your way!",
						"japanese": "お前の思い通りにはさせない！",
						"chinese": "我不会让你得逞的！",
						"french": "Je ne te laisserai pas faire ta volonté !",
						"spanish": "¡No te saldrás con la tuya!",
						"vietnamese": "Ta sẽ không để ngươi toại nguyện đâu!",
						"thai": "ฉันจะไม่ยอมให้เป็นไปตามใจแก!",
						"hindi": "मैं तुम्हें अपनी मनमानी नहीं करने दूंगा!"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "네놈들의 분노는 그저 나의 왕국을 위한 연료일 뿐. 하찮은 저항이로군.",
						"english": "Your fury is merely fuel for my kingdom. A trivial resistance.",
						"japanese": "お前たちの怒りは、ただ我が王国のため燃料に過ぎぬ。取るに足らぬ抵抗だ。",
						"chinese": "你们的愤怒不过是我王国的燃料而已。区区抵抗，不值一提。",
						"french": "Votre fureur n'est que du carburant pour mon royaume. Une résistance insignifiante.",
						"spanish": "Vuestra furia es meramente combustible para mi reino. Una resistencia insignificante.",
						"vietnamese": "Sự phẫn nộ của các ngươi chỉ là nhiên liệu cho vương quốc của ta mà thôi. Một sự kháng cự tầm thường.",
						"thai": "ความโกรธแค้นของพวกเจ้าเป็นเพียงเชื้อเพลิงสำหรับอาณาจักรของข้าเท่านั้น การต่อต้านที่ไร้ค่าสิ้นดี",
						"hindi": "तुम्हारा क्रोध मेरे साम्राज्य के लिए मात्र ईंधन है। एक तुच्छ प्रतिरोध।"
					},
					"speaker": "random_boss"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "'random_boss'의 거대한 그림자에 압도당했다.",
						"english": "Overwhelmed by the colossal shadow of 'random_boss'.",
						"japanese": "'random_boss'の巨大な影に圧倒された。",
						"chinese": "被'random_boss'的巨大阴影所吞噬。",
						"french": "Submergé par l'ombre colossale de 'random_boss'.",
						"spanish": "Abrumado por la colosal sombra de 'random_boss'.",
						"vietnamese": "Bị áp đảo bởi bóng đen khổng lồ của 'random_boss'.",
						"thai": "ถูกครอบงำด้วยเงาอันมหึมาของ 'random_boss'",
						"hindi": "'रैंडम_बॉस' की विशाल छाया से अभिभूत।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "숲은 나의 왕국이 될 것이다. 네놈들의 어리석은 저항은 여기서 끝이다.",
						"english": "The forest will be my kingdom. Your foolish resistance ends here.",
						"japanese": "森は私の王国となるだろう。お前たちの愚かな抵抗はここで終わる。",
						"chinese": "森林将成为我的王国。你们愚蠢的抵抗到此为止。",
						"french": "La forêt sera mon royaume. Votre résistance futile prend fin ici.",
						"spanish": "El bosque será mi reino. Vuestra estúpida resistencia termina aquí.",
						"vietnamese": "Rừng sẽ là vương quốc của ta. Sự kháng cự ngu xuẩn của các ngươi kết thúc tại đây.",
						"thai": "ป่านี้จะเป็นอาณาจักรของข้า การต่อต้านอันโง่เขลาของพวกเจ้าสิ้นสุดลงที่นี่",
						"hindi": "यह जंगल मेरा साम्राज्य होगा। तुम सबकी मूर्खतापूर्ण प्रतिरोध यहीं खत्म होता है।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "아직… 끝나지 않았어!",
						"english": "It's not... over yet!",
						"japanese": "まだ…終わってない！",
						"chinese": "还没…结束！",
						"french": "Ce n'est pas… encore fini !",
						"spanish": "¡Todavía… no ha terminado!",
						"vietnamese": "Vẫn… chưa kết thúc!",
						"thai": "ยัง…ไม่จบ!",
						"hindi": "अभी… खत्म नहीं हुआ!"
					}
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "ivy"
				},
				{
					"content": {
						"korean": "이런, 안타깝군! 나의 예언은 완벽했으나, 자네들의 실력이 부족했나 보군! 다음 상담은 도토리 여섯 개일세!",
						"english": "Oh, too bad! My prophecy was perfect, but your skills must have been lacking! The next consultation will be six acorns!",
						"japanese": "おや、残念だったな！私の予言は完璧だったが、お前たちの実力が足りなかったようだ！次の相談はドングリ六つだ！",
						"chinese": "哎呀，真可惜！我的预言是完美的，但看来是你们实力不足啊！下次咨询要六颗橡子！",
						"french": "Oh, dommage ! Ma prophétie était parfaite, mais vos compétences devaient être insuffisantes ! La prochaine consultation coûtera six glands !",
						"spanish": "¡Vaya, qué pena! ¡Mi profecía era perfecta, pero parece que les faltó habilidad! ¡La próxima consulta costará seis bellotas!",
						"vietnamese": "Ôi, tiếc thật! Lời tiên tri của ta hoàn hảo, nhưng có vẻ thực lực của các ngươi còn thiếu! Lần tư vấn tiếp theo sẽ là sáu hạt dẻ!",
						"thai": "โอ้ แย่จัง! คำทำนายของข้าสมบูรณ์แบบ แต่ดูเหมือนว่าฝีมือของพวกเจ้ายังไม่ถึง! การปรึกษาครั้งต่อไปจะคิดค่าบริการหกลูกโอ๊ก!",
						"hindi": "ओह, अफ़सोस! मेरी भविष्यवाणी तो सही थी, लेकिन लगता है तुम्हारी काबिलियत कम पड़ गई! अगली सलाह के लिए छह बलूत लगेंगे!"
					},
					"speaker": "ivy",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "다음에… 반드시…!",
						"english": "Next time... definitely!",
						"japanese": "次こそは…！",
						"chinese": "下次…一定！",
						"french": "La prochaine fois... c'est sûr !",
						"spanish": "¡La próxima vez... seguro!",
						"vietnamese": "Lần tới... chắc chắn!",
						"thai": "ครั้งหน้า... แน่นอน!",
						"hindi": "अगली बार... ज़रूर!"
					}
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자는 쓰러졌다. 하지만 불길한 기운은 사라지지 않았다.",
						"english": "The colossal shadow fell. But the ominous aura did not disappear.",
						"japanese": "巨大な影は倒れた。しかし、不吉な気配は消えなかった。",
						"chinese": "巨大的影子倒下了。但那不祥的气息并未消散。",
						"french": "L'ombre colossale s'effondra. Mais l'aura menaçante ne disparut pas.",
						"spanish": "La sombra colosal cayó. Pero el aura siniestra no desapareció.",
						"vietnamese": "Bóng đen khổng lồ đã ngã xuống. Nhưng khí tức bất lành vẫn chưa tan biến.",
						"thai": "เงาขนาดมหึมาล้มลงแล้ว แต่บรรยากาศที่น่าหวาดหวั่นยังไม่จางหายไป",
						"hindi": "विशाल छाया गिर गई। लेकिन अशुभ आभा गायब नहीं हुई।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "크크… 이건… 시작에 불과하다… 진짜는… 아직…",
						"english": "Heh heh... This... is just the beginning... The real thing... is yet to come...",
						"japanese": "クク…これは…始まりに過ぎない…本物は…まだ…",
						"chinese": "呵呵…这…只是个开始…真正的…还在…",
						"french": "Hé hé… Ce… n'est que le début… Le vrai… n'est pas encore là…",
						"spanish": "Je je… Esto… es solo el principio… Lo real… aún no…",
						"vietnamese": "Khà khà… Đây… chỉ là khởi đầu… Cái thật sự… vẫn chưa…",
						"thai": "คิก คิก... นี่... เป็นแค่จุดเริ่มต้น... ของจริง... ยังไม่มา...",
						"hindi": "हा हा… यह… सिर्फ़ शुरुआत है… असली… अभी… बाकी है…"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "끝까지 저항하는군.",
						"english": "Still resisting to the very end.",
						"japanese": "最後まで抵抗するつもりか。",
						"chinese": "居然抵抗到底。",
						"french": "Tu résistes jusqu'au bout.",
						"spanish": "Sigues resistiendo hasta el final.",
						"vietnamese": "Cứ chống cự đến cùng.",
						"thai": "ยังคงต่อต้านจนถึงที่สุดสินะ",
						"hindi": "आखिर तक प्रतिरोध कर रहे हो।"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "ivy"
				},
				{
					"emotion": "happy",
					"type": "speech",
					"speaker": "ivy",
					"content": {
						"korean": "오호라! 결국 해냈군! 나의 예언은 언제나 옳지! 이로써 도토리 세 개의 영수증을 청구할 명분이 생겼군!",
						"english": "Aha! You did it after all! My prophecies are always right! This gives me a reason to claim a receipt for three acorns!",
						"japanese": "おお！結局やったな！私の予言は常に正しい！これでドングリ三つ分の領収書を請求する名目ができたぞ！",
						"chinese": "哦吼！最终还是做到了！我的预言总是正确的！这下有理由索要三颗橡子的收据了！",
						"french": "Oh la la ! Tu l'as fait après tout ! Mes prophéties sont toujours justes ! Cela me donne une raison de réclamer un reçu pour trois glands !",
						"spanish": "¡Oh, vaya! ¡Al final lo lograste! ¡Mis profecías siempre son correctas! ¡Con esto tengo un motivo para reclamar un recibo por tres bellotas!",
						"vietnamese": "Ồ hô! Cuối cùng cũng làm được! Lời tiên tri của ta luôn đúng! Giờ thì ta có cớ để đòi hóa đơn ba hạt dẻ rồi!",
						"thai": "โอ้โฮ! ในที่สุดก็ทำได้! คำทำนายของข้าถูกต้องเสมอ! นี่เป็นเหตุผลให้ข้าเรียกเก็บค่าธรรมเนียมสามลูกโอ๊กได้แล้ว!",
						"hindi": "ओहो! आखिरकार कर ही लिया! मेरी भविष्यवाणियां हमेशा सही होती हैं! इससे मुझे तीन बलूत के लिए रसीद मांगने का बहाना मिल गया!"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_4",
					"content": {
						"korean": "지금 도토리 얘기가 나와요?!",
						"english": "Are you talking about acorns right now?!",
						"japanese": "今ドングリの話ですか？！",
						"chinese": "现在是讨论橡子的时候吗？！",
						"french": "On parle de glands là, sérieusement ?!",
						"spanish": "¡¿Estamos hablando de bellotas ahora mismo?!",
						"vietnamese": "Bây giờ mà nói chuyện hạt dẻ ư?!",
						"thai": "ตอนนี้จะมาพูดเรื่องลูกโอ๊กเนี่ยนะ?!",
						"hindi": "अभी बलूत की बात हो रही है?!"
					}
				},
				{
					"type": "speech",
					"emotion": "happy",
					"speaker": "ivy",
					"content": {
						"korean": "모든 지식에는 대가가 따르는 법! 그리고 자네들은 이제… 더 큰 진실의 문턱에 서게 될 걸세. 후후, 나의 예지력은 정말이지…",
						"english": "All knowledge comes at a price! And you... will now stand on the threshold of a greater truth. Heh heh, my foresight truly is...",
						"japanese": "全ての知識には代償が伴うものだ！そしてお前たちは今…より大きな真実の入り口に立つことになるだろう。フフ、私の予知能力は本当に…",
						"chinese": "所有的知识都是有代价的！而你们现在…将站在更大真相的门槛上。呵呵，我的预知能力真是…",
						"french": "Toute connaissance a un prix ! Et vous… allez maintenant vous tenir au seuil d'une vérité plus grande. Huhu, ma prescience est vraiment…",
						"spanish": "¡Todo conocimiento tiene un precio! Y ustedes… ahora se pararán en el umbral de una verdad más grande. Je je, mi clarividencia es realmente…",
						"vietnamese": "Mọi kiến thức đều có cái giá của nó! Và các ngươi giờ đây… sẽ đứng trước ngưỡng cửa của một sự thật lớn hơn. Khà khà, khả năng tiên tri của ta thật sự là…",
						"thai": "ความรู้ทุกอย่างย่อมมีราคาที่ต้องจ่าย! และพวกเจ้า… กำลังจะยืนอยู่บนธรณีประตูของความจริงที่ยิ่งใหญ่กว่า ฮึๆ ความสามารถในการหยั่งรู้ของข้าช่าง…",
						"hindi": "हर ज्ञान की एक कीमत होती है! और तुम लोग… अब एक बड़ी सच्चाई के दहलीज पर खड़े होगे। हा हा, मेरी दूरदर्शिता सचमुच…"
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "은둔자의 말처럼, 승리는 또 다른 시작에 불과했다. '쿠의 심장'은 아직도 숲 어딘가에서 맥동하고 있었다.",
						"english": "As the Hermit said, victory was merely another beginning. The 'Heart of Koo' was still pulsating somewhere in the forest.",
						"japanese": "隠者の言葉通り、勝利は単なる新たな始まりに過ぎなかった。『クーの心臓』はまだ森のどこかで鼓動していた。",
						"chinese": "正如隐士所说，胜利不过是另一个开始。《库之心》仍在森林某处跳动着。",
						"french": "Comme l'a dit l'Ermite, la victoire n'était qu'un autre début. Le 'Cœur de Koo' palpitait encore quelque part dans la forêt.",
						"spanish": "Como dijo el Ermitaño, la victoria fue solo otro comienzo. El 'Corazón de Koo' todavía palpitaba en algún lugar del bosque.",
						"vietnamese": "Đúng như lời Ẩn Sĩ, chiến thắng chỉ là một khởi đầu khác. 'Trái tim của Koo' vẫn đang đập đâu đó trong rừng.",
						"thai": "ดังที่ฤๅษีกล่าวไว้ ชัยชนะเป็นเพียงจุดเริ่มต้นอีกครั้งเท่านั้น 'หัวใจของคู' ยังคงเต้นอยู่ somewhere ในป่า",
						"hindi": "जैसा कि संत ने कहा था, जीत बस एक और शुरुआत थी। 'कू का हृदय' अभी भी जंगल में कहीं धड़क रहा था।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		}
	]
} as const;
