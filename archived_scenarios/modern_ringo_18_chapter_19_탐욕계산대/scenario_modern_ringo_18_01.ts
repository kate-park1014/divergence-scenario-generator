export const scenario_modern_ringo_18_01 = {
	"scenario_id": "modern_ringo_18_01",
	"order": 1,
	"act": "intro",
	"theme": "modern",
	"actors": {
		"nia": {
			"id": "mon_872177dd-fcf0-40d8-b78c-fd795017c763",
			"name": {
				"korean": "니아",
				"english": "Nia",
				"japanese": "ニア",
				"chinese": "妮娅",
				"french": "Nia",
				"spanish": "Nia",
				"vietnamese": "Nia",
				"thai": "เนีย",
				"hindi": "निया"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/db690f96-d5b3-498a-f4ec-f269e6e95100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a8fe5d7a-56fe-4822-c272-5a04fd7f4c00/public"
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
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "nia",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "제가 신입 니아입니다. 잘 부탁드립니다!",
						"english": "I'm Nia, the new employee. Nice to meet you!",
						"japanese": "新人のニアです。よろしくお願いします！",
						"chinese": "我是新员工妮娅。请多关照！",
						"french": "Je suis Nia, la nouvelle employée. Enchantée !",
						"spanish": "Soy Nia, la nueva empleada. ¡Encantada de conocerte!",
						"vietnamese": "Tôi là Nia, nhân viên mới. Rất vui được gặp!",
						"thai": "ฉันเนียพนักงานใหม่ ฝากเนื้อฝากตัวด้วยนะคะ!",
						"hindi": "मैं नई कर्मचारी निया हूँ। आपसे मिलकर अच्छा लगा!"
					},
					"speaker": "nia",
					"type": "speech",
					"emotion": "happy"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"speaker": "random_boss",
					"content": {
						"korean": "환영합니다, 니아! 이곳은 '카페 인페르노'입니다. 돈이 최고의 친구죠.",
						"english": "Welcome, Nia! This is 'Cafe Inferno'. Money is our best friend.",
						"japanese": "ようこそ、ニア！ここは「カフェ インフェルノ」です。お金が最高の友達さ。",
						"chinese": "欢迎，妮娅！这里是“炼狱咖啡馆”。金钱是最好的朋友。",
						"french": "Bienvenue, Nia ! C'est le 'Café Inferno'. L'argent est notre meilleur ami.",
						"spanish": "¡Bienvenida, Nia! Este es 'Café Inferno'. El dinero es nuestro mejor amigo.",
						"vietnamese": "Chào mừng, Nia! Đây là 'Cafe Inferno'. Tiền là người bạn tốt nhất của chúng ta.",
						"thai": "ยินดีต้อนรับ เนีย! นี่คือ 'คาเฟ่อินเฟอร์โน' เงินคือเพื่อนที่ดีที่สุดของเรา",
						"hindi": "स्वागत है, निया! यह 'कैफे इन्फर्नो' है। पैसा हमारा सबसे अच्छा दोस्त है।"
					}
				},
				{
					"content": {
						"korean": "링고 씨는 정말 친절하시네요!",
						"english": "Mr. Ringo, you're so kind!",
						"japanese": "リンゴさん、本当に親切ですね！",
						"chinese": "林戈先生，您真亲切！",
						"french": "Monsieur Ringo, vous êtes si gentil !",
						"spanish": "¡Señor Ringo, es usted muy amable!",
						"vietnamese": "Anh Ringo thật tốt bụng!",
						"thai": "คุณริงโก้ใจดีจังเลยค่ะ!",
						"hindi": "मिस्टर रिंगो, आप बहुत दयालु हैं!"
					},
					"speaker": "nia",
					"type": "speech",
					"emotion": "happy"
				},
				{
					"content": {
						"korean": "당연하죠! 손님들의 돈이 곧 저의 행복이니까요!",
						"english": "Of course! My happiness comes from my customers' money!",
						"japanese": "当然です！お客様のお金が私の幸せですからね！",
						"chinese": "当然！客人的钱就是我的幸福！",
						"french": "Bien sûr ! Le bonheur vient de l'argent de nos clients !",
						"spanish": "¡Por supuesto! ¡El dinero de mis clientes es mi felicidad!",
						"vietnamese": "Đương nhiên! Tiền của khách hàng chính là hạnh phúc của tôi!",
						"thai": "แน่นอน! เงินของลูกค้าคือความสุขของผม!",
						"hindi": "बिल्कुल! मेरे ग्राहकों का पैसा ही मेरी खुशी है!"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "happy"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "으음… 왠지 좀 섬뜩한데.",
						"english": "Hmm... that's a bit creepy.",
						"japanese": "うーん…なんだかちょっと不気味だな。",
						"chinese": "嗯…总觉得有点毛骨悚然。",
						"french": "Hmm... c'est un peu effrayant.",
						"spanish": "Mmm... eso es un poco espeluznante.",
						"vietnamese": "Ưm... nghe có vẻ hơi rùng rợn.",
						"thai": "อืม... ฟังดูน่าขนลุกนิดหน่อยนะ",
						"hindi": "हम्म... यह थोड़ा डरावना है।"
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
					"duration_ms": 500,
					"type": "direction",
					"speaker": "nia",
					"action": "enter",
					"spot": [
						3,
						3
					]
				},
				{
					"content": {
						"korean": "저기요! 잔돈이 100원 모자라는데요!",
						"english": "Excuse me! You're 100 won short on change!",
						"japanese": "すみません！お釣りが100ウォン足りませんよ！",
						"chinese": "喂！零钱少了100韩元！",
						"french": "Excusez-moi ! Il manque 100 wons de monnaie !",
						"spanish": "¡Oiga! ¡Faltan 100 wones de cambio!",
						"vietnamese": "Này! Thiếu 100 won tiền thối đấy!",
						"thai": "นี่! เงินทอนขาดไป 100 วอนนะคะ!",
						"hindi": "खुल्ले में 100 वॉन कम हैं!"
					},
					"speaker": "character_1",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"speaker": "random_boss",
					"content": {
						"korean": "고객님의 행복 지수를 위한 서비스입니다! 작은 오차는 사랑이죠!",
						"english": "It's a service for your happiness index! A small margin of error is just a little love!",
						"japanese": "お客様の幸福指数を上げるためのサービスです！小さな誤差は愛です！",
						"chinese": "这是为您幸福指数提供的服务！小小的误差也是爱哦！",
						"french": "C'est un service pour votre indice de bonheur ! Une petite erreur, c'est de l'amour !",
						"spanish": "¡Es un servicio para tu índice de felicidad! ¡Un pequeño error es amor!",
						"vietnamese": "Đây là dịch vụ vì chỉ số hạnh phúc của quý khách! Một lỗi nhỏ là tình yêu thôi mà!",
						"thai": "บริการเพื่อดัชนีความสุขของลูกค้า! ความผิดพลาดเล็กน้อยก็คือความรัก!",
						"hindi": "यह आपकी खुशी के सूचकांक के लिए एक सेवा है! एक छोटी सी त्रुटि प्यार है!"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "서비스가 아니라 돈을 떼먹은 거잖아!",
						"english": "That's not a service, you just ripped me off!",
						"japanese": "サービスじゃなくて、金をだまし取っただけじゃないか！",
						"chinese": "这不是服务，是骗钱吧！",
						"french": "Ce n'est pas un service, vous m'avez arnaqué mon argent !",
						"spanish": "¡Eso no es un servicio, me has robado el dinero!",
						"vietnamese": "Không phải dịch vụ mà là ăn chặn tiền của tôi rồi!",
						"thai": "นี่ไม่ใช่บริการ แต่เป็นการโกงเงินชัดๆ!",
						"hindi": "यह सेवा नहीं है, तुमने मेरा पैसा ठगा है!"
					},
					"speaker": "character_1"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "...영수증에도 100원이 모자란다고? 기계 오류인가?",
						"english": "...The receipt says 100 won is missing too? Is it a machine error?",
						"japanese": "…レシートにも100ウォン足りないって？機械の故障か？",
						"chinese": "...收据上也少了100韩元？是机器故障吗？",
						"french": "...Il manque 100 wons sur le reçu aussi ? Une erreur de la machine ?",
						"spanish": "¿En el recibo también faltan 100 wones? ¿Es un error de la máquina?",
						"vietnamese": "...Ngay cả trên hóa đơn cũng thiếu 100 won? Lỗi máy móc à?",
						"thai": "...ในใบเสร็จก็หายไป 100 วอนเหรอ? เครื่องผิดพลาดงั้นเหรอ?",
						"hindi": "...रसीद पर भी 100 वॉन कम हैं? क्या यह मशीन की खराबी है?"
					},
					"speaker": "nia"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						2,
						4
					],
					"speaker": "nia",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "하하! 내가 VIP 특전으로 받은 선물이야! 이 상자를 봐!",
						"english": "Haha! This is a gift I got as a VIP perk! Look at this box!",
						"japanese": "ハハ！俺がVIP特典で貰ったプレゼントだぜ！この箱を見ろ！",
						"chinese": "哈哈！这是我作为VIP特权收到的礼物！快看这个盒子！",
						"french": "Haha ! C'est un cadeau que j'ai eu en tant qu'avantage VIP ! Regardez cette boîte !",
						"spanish": "¡Jaja! ¡Este es un regalo que recibí como beneficio VIP! ¡Mira esta caja!",
						"vietnamese": "Ha ha! Đây là món quà tôi nhận được nhờ đặc quyền VIP! Nhìn cái hộp này đi!",
						"thai": "ฮ่าฮ่า! นี่คือของขวัญที่ฉันได้รับเป็นสิทธิพิเศษ VIP! ดูกล่องนี้สิ!",
						"hindi": "हाहा! यह एक वीआईपी सुविधा के रूप में मुझे मिला उपहार है! इस डिब्बे को देखो!"
					},
					"type": "speech",
					"emotion": "happy"
				},
				{
					"content": {
						"korean": "와, 멋진데요! 어떤 특별한 선물인가요?",
						"english": "Wow, that's great! What kind of special gift is it?",
						"japanese": "わあ、すごいですね！どんな特別なプレゼントなんですか？",
						"chinese": "哇，真棒！是什么特别的礼物啊？",
						"french": "Wow, c'est génial ! Quel genre de cadeau spécial est-ce ?",
						"spanish": "¡Guau, qué genial! ¿Qué clase de regalo especial es?",
						"vietnamese": "Oa, tuyệt vời quá! Đó là món quà đặc biệt gì vậy?",
						"thai": "ว้าว เยี่ยมเลย! มันเป็นของขวัญพิเศษอะไรเหรอครับ/คะ?",
						"hindi": "वाह, यह तो शानदार है! यह किस तरह का खास उपहार है?"
					},
					"speaker": "nia",
					"type": "speech",
					"emotion": "happy"
				},
				{
					"content": {
						"korean": "…이게 뭐야? 고철 덩어리잖아!",
						"english": "...What is this? It's a chunk of scrap metal!",
						"japanese": "…これ何だ？ただのガラクタじゃないか！",
						"chinese": "...这是什么？不就是一堆废铁吗！",
						"french": "...Qu'est-ce que c'est ? C'est un tas de ferraille !",
						"spanish": "¿Qué es esto? ¡Es un trozo de chatarra!",
						"vietnamese": "...Cái gì đây? Toàn là đồ phế liệu mà!",
						"thai": "...นี่มันอะไรกัน? แค่เศษเหล็กไม่ใช่เหรอ!",
						"hindi": "...यह क्या है? यह तो सिर्फ़ धातु का एक टुकड़ा है!"
					},
					"speaker": "character_2",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "고객님의 재활용 의식을 높여주는 친환경 선물입니다! 어때요, 정말 특별하죠?",
						"english": "It's an eco-friendly gift to raise your recycling awareness! How about it, isn't it truly special?",
						"japanese": "お客様のリサイクル意識を高める環境に優しいプレゼントです！どうですか、本当に特別でしょう？",
						"chinese": "这是提高顾客回收意识的环保礼物！怎么样，真的很特别吧？",
						"french": "C'est un cadeau écologique pour sensibiliser nos clients au recyclage ! Alors, c'est vraiment spécial, n'est-ce pas ?",
						"spanish": "¡Es un regalo ecológico para aumentar tu conciencia de reciclaje! ¿Qué te parece, no es realmente especial?",
						"vietnamese": "Đây là món quà thân thiện với môi trường, giúp nâng cao ý thức tái chế của quý khách! Thế nào, đặc biệt lắm đúng không?",
						"thai": "นี่คือของขวัญรักษ์โลกที่ช่วยยกระดับจิตสำนึกในการรีไซเคิลของลูกค้า! เป็นไงล่ะ พิเศษจริงๆ ใช่ไหมล่ะ?",
						"hindi": "यह आपकी रीसाइक्लिंग जागरूकता बढ़ाने के लिए एक पर्यावरण-अनुकूल उपहार है! कैसा लगा, यह वाकई खास है ना?"
					},
					"type": "speech",
					"emotion": "happy"
				},
				{
					"speaker": "nia",
					"content": {
						"korean": "…재활용품? 저 손님은 이걸 받으려고 그렇게 많은 돈을 냈는데…?",
						"english": "...Recycling? That customer paid so much money to get this...?",
						"japanese": "…リサイクル品？あのお客さんはこれをもらうためにあんなに大金を出したのに…？",
						"chinese": "...回收品？那位客人为了得到这个付了那么多钱...？",
						"french": "...Du recyclage ? Ce client a payé tellement cher pour ça... ?",
						"spanish": "¿Reciclaje? ¿Ese cliente pagó tanto dinero para conseguir esto...?",
						"vietnamese": "...Đồ tái chế ư? Vị khách đó đã bỏ ra nhiều tiền như vậy để nhận cái này sao...?",
						"thai": "...ของรีไซเคิลเหรอ? ลูกค้าคนนั้นจ่ายเงินตั้งเยอะเพื่อรับสิ่งนี้เหรอ...?",
						"hindi": "...रीसाइक्लिंग? उस ग्राहक ने इसे पाने के लिए इतना पैसा दिया...?"
					},
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "nia",
					"spot": [
						3,
						4
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "잔돈 오류, 말도 안 되는 VIP 선물… 이건 우연이 아니야.",
						"english": "Change errors, ridiculous VIP gifts... This isn't a coincidence.",
						"japanese": "お釣りの間違い、とんでもないVIPプレゼント…これは偶然じゃない。",
						"chinese": "找零错误，荒谬的VIP礼物……这不是巧合。",
						"french": "Erreurs de monnaie, cadeaux VIP absurdes... Ce n'est pas une coïncidence.",
						"spanish": "Errores de cambio, regalos VIP ridículos... Esto no es una coincidencia.",
						"vietnamese": "Lỗi tiền thừa, quà VIP vô lý... Đây không phải là ngẫu nhiên.",
						"thai": "ทอนเงินผิดพลาด, ของขวัญ VIP ไร้สาระ... นี่ไม่ใช่เรื่องบังเอิญ.",
						"hindi": "खुले पैसे की गलतियाँ, बेतुके वीआईपी उपहार... यह कोई संयोग नहीं है।"
					},
					"speaker": "nia",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "무슨 생각을 그렇게 열심히 하시나요, 니아? 돈 생각? 최고의 친구죠!",
						"english": "What are you thinking so hard about, Nia? Money? It's your best friend!",
						"japanese": "何をそんなに一生懸命考えてるんですか、ニア？お金のこと？最高の友ですよ！",
						"chinese": "尼亚，你在想什么呢？在想钱吗？那可是最好的朋友啊！",
						"french": "À quoi penses-tu si fort, Nia ? À l'argent ? C'est le meilleur ami !",
						"spanish": "¿En qué piensas tan intensamente, Nia? ¿En dinero? ¡Es el mejor amigo!",
						"vietnamese": "Nia, bạn đang nghĩ gì mà chăm chú thế? Tiền sao? Đó là người bạn tốt nhất mà!",
						"thai": "กำลังคิดอะไรหนักหนาคะเนีย? เรื่องเงินเหรอ? มันเป็นเพื่อนที่ดีที่สุดเลยนะ!",
						"hindi": "नीया, तुम इतनी गहराई से क्या सोच रही हो? पैसे के बारे में? वह सबसे अच्छा दोस्त है!"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "happy"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "...링고 씨. 당신은 돈을 너무 좋아하는 것 같아요.",
						"english": "...Ringo. You seem to love money too much.",
						"japanese": "「...リンゴさん。あなたはお金が好きすぎます。」",
						"chinese": "“……铃子小姐。您好像太喜欢钱了。”",
						"french": "...Ringo. Tu sembles aimer l'argent un peu trop.",
						"spanish": "...Ringo. Parece que te gusta demasiado el dinero.",
						"vietnamese": "...Ringo. Có vẻ như cô quá yêu tiền.",
						"thai": "...คุณริงโกะ คุณดูเหมือนจะชอบเงินมากเกินไปนะ",
						"hindi": "...रिंगो जी। आपको पैसों से कुछ ज़्यादा ही लगाव लगता है।"
					},
					"speaker": "nia"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"speaker": "random_boss",
					"content": {
						"korean": "당연하죠! 돈은 모든 것을 가능하게 하니까요! 니아도 얼른 깨달아요!",
						"english": "Of course! Money makes everything possible! Nia, you should realize that soon too!",
						"japanese": "「当然です！お金は何でも可能にしますからね！ニアも早く気づきなさい！」",
						"chinese": "“当然了！钱能让一切变得可能！妮娅你也赶紧明白吧！”",
						"french": "Bien sûr ! L'argent rend tout possible ! Nia, tu devrais le comprendre vite aussi !",
						"spanish": "¡Claro! ¡El dinero lo hace todo posible! ¡Nia, tú también deberías darte cuenta pronto!",
						"vietnamese": "Đương nhiên rồi! Tiền làm mọi thứ trở nên có thể! Nia, cô cũng nên sớm nhận ra điều đó đi!",
						"thai": "แน่นอนสิ! เงินทำให้ทุกอย่างเป็นไปได้นะ! เนียก็รีบๆ ตระหนักได้แล้ว!",
						"hindi": "बेशक! पैसा सब कुछ मुमकिन बनाता है! निया, तुम्हें भी जल्दी ही यह समझना चाहिए!"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "nia",
					"content": {
						"korean": "아니, 이건 좀 달라… 이건 너무 비정상적이야.",
						"english": "No, this is different... This is too abnormal.",
						"japanese": "「いや、これはちょっと違う…これはあまりにも異常だ。」",
						"chinese": "“不，这有点不一样……这太不正常了。”",
						"french": "Non, c'est différent... C'est trop anormal.",
						"spanish": "No, esto es diferente... Esto es demasiado anormal.",
						"vietnamese": "Không, cái này hơi khác... Cái này quá bất thường rồi.",
						"thai": "ไม่สิ นี่มันต่างกันนะ... นี่มันผิดปกติเกินไป",
						"hindi": "नहीं, यह अलग है... यह बहुत असामान्य है।"
					}
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "크크크… 겨우 이 정도론 절 멈출 수 없어요! 돈은… 언제나 돌아올 테니까…",
						"english": "Hehehe... This much won't stop me! Money... will always come back...",
						"japanese": "「ククク…これくらいでは私を止められません！お金は…いつでも戻ってくるんですから…」",
						"chinese": "“呵呵呵……就凭这点程度可无法阻止我！钱……总会回来的……”",
						"french": "Héhéhé... Si peu ne m'arrêtera pas ! L'argent... reviendra toujours...",
						"spanish": "Jejeje... ¡Con esto no me detendrán! El dinero... siempre volverá...",
						"vietnamese": "Khà khà khà... Chừng này không thể ngăn cản ta được đâu! Tiền... sẽ luôn quay trở lại thôi...",
						"thai": "คิกๆ... แค่นี้หยุดฉันไม่ได้หรอก! เงินน่ะ... จะกลับมาเสมอ...",
						"hindi": "हीहीही... बस इतनी सी बात से मुझे रोक नहीं सकते! पैसा... हमेशा वापस आएगा..."
					}
				},
				{
					"content": {
						"korean": "링고… 너는 대체 뭘 하려는 거야?",
						"english": "Ringo... What exactly are you trying to do?",
						"japanese": "「リンゴ…あなた、一体何をしようとしているの？」",
						"chinese": "“铃子……你到底想做什么？”",
						"french": "Ringo... Qu'est-ce que tu essaies de faire au juste ?",
						"spanish": "Ringo... ¿Qué demonios intentas hacer?",
						"vietnamese": "Ringo... Cô rốt cuộc muốn làm gì?",
						"thai": "ริงโกะ... เธอจะทำอะไรกันแน่?",
						"hindi": "रिंगो... तुम आख़िर करना क्या चाहती हो?"
					},
					"speaker": "nia",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "링고의 시스템은 일시 정지했지만, 돈의 흐름은 멈추지 않았다.",
						"english": "Ringo's system was temporarily halted, but the flow of money did not stop.",
						"japanese": "「リンゴのシステムは一時停止したが、お金の流れは止まらなかった。」",
						"chinese": "“铃子的系统暂时停止了，但金钱的流动并未停止。”",
						"french": "Le système de Ringo a été temporairement arrêté, mais le flux d'argent ne s'est pas arrêté.",
						"spanish": "El sistema de Ringo fue temporalmente detenido, pero el flujo de dinero no se detuvo.",
						"vietnamese": "Hệ thống của Ringo tạm thời dừng lại, nhưng dòng tiền thì không ngừng.",
						"thai": "ระบบของริงโกะหยุดชั่วคราว แต่กระแสเงินก็ยังคงไหลอยู่",
						"hindi": "रिंगो का सिस्टम अस्थायी रूप से रोक दिया गया था, लेकिन पैसे का प्रवाह नहीं रुका।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "니아는 더 깊은 탐욕의 그림자를 쫓기 시작했다.",
						"english": "Nia began to chase the deeper shadows of greed.",
						"japanese": "ニアはより深い強欲の影を追い始めた。",
						"chinese": "尼亚开始追逐更深层次的贪婪阴影。",
						"french": "Nia commença à poursuivre les ombres plus profondes de la cupidité.",
						"spanish": "Nia comenzó a perseguir las sombras más profundas de la codicia.",
						"vietnamese": "Nia bắt đầu truy đuổi những bóng tối sâu hơn của lòng tham.",
						"thai": "เนียเริ่มไล่ล่าเงาแห่งความโลภที่ลึกซึ้งยิ่งขึ้น",
						"hindi": "निया ने लालच की गहरी परछाइयों का पीछा करना शुरू कर दिया।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "아하하! 어리석네요! 돈 앞에선 모두 무릎 꿇는 법이죠!",
						"english": "Hahaha! How foolish! Everyone bows before money, you know!",
						"japanese": "アハハ！愚かですね！金の前では皆ひざまずくものですよ！",
						"chinese": "啊哈哈！真蠢！金钱面前，人人都要下跪！",
						"french": "Ahahaha ! Comme c'est stupide ! Tout le monde s'agenouille devant l'argent, n'est-ce pas ?",
						"spanish": "¡Ajajaja! ¡Qué tonto! ¡Todo el mundo se arrodilla ante el dinero!",
						"vietnamese": "Hahaha! Thật ngốc nghếch! Ai rồi cũng phải quỳ gối trước tiền thôi!",
						"thai": "ฮ่าๆๆ! ช่างโง่เขลา! ใครๆ ก็ต้องคุกเข่าต่อหน้าเงินทองทั้งนั้นแหละ!",
						"hindi": "हाहाहा! कितने मूर्ख हो! पैसे के आगे सब घुटने टेकते हैं!"
					},
					"type": "speech",
					"emotion": "happy"
				},
				{
					"content": {
						"korean": "여기서 끝낼 수 없어… 링고의 속셈을 밝혀낼 거야!",
						"english": "I can't end it here... I'll uncover Ringo's true intentions!",
						"japanese": "ここで終わらせられない…リンゴの魂胆を暴いてやる！",
						"chinese": "不能在这里结束… 我会揭露玲子的真实意图！",
						"french": "Je ne peux pas en finir ici... Je vais découvrir les véritables intentions de Ringo !",
						"spanish": "No puedo terminar aquí... ¡Descubriré las verdaderas intenciones de Ringo!",
						"vietnamese": "Không thể kết thúc ở đây được... Mình sẽ vạch trần âm mưu của Ringo!",
						"thai": "ฉันจะจบแค่นี้ไม่ได้... ฉันจะเปิดเผยเจตนาที่แท้จริงของริงโกะให้ได้!",
						"hindi": "मैं इसे यहाँ खत्म नहीं कर सकता... मैं रिंगो के इरादों का पर्दाफाश करूँगा!"
					},
					"speaker": "nia",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "어서 오세요, 고객님! 마지막 결제인가요?",
						"english": "Welcome, customer! Is this your final payment?",
						"japanese": "「いらっしゃいませ、お客様！最後の決済ですか？」",
						"chinese": "“欢迎光临，顾客！这是您最后一笔付款吗？”",
						"french": "Bienvenue, client ! Est-ce votre dernier paiement ?",
						"spanish": "¡Bienvenido, cliente! ¿Es este su último pago?",
						"vietnamese": "Chào mừng quý khách! Đây có phải là lần thanh toán cuối cùng không ạ?",
						"thai": "ยินดีต้อนรับครับ/ค่ะลูกค้า! นี่เป็นการชำระเงินครั้งสุดท้ายหรือเปล่าครับ/คะ?",
						"hindi": "स्वागत है, ग्राहक! क्या यह आपकी अंतिम भुगतान है?"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "nia",
					"content": {
						"korean": "링고… 당신은 그냥 계산 로봇이 아니잖아.",
						"english": "Ringo... You're not just a calculating robot.",
						"japanese": "「リンゴ…あなた、ただの計算ロボットじゃないわね。」",
						"chinese": "“铃子……你不是普通的计算机器人。”",
						"french": "Ringo... Tu n'es pas juste un robot calculatrice.",
						"spanish": "Ringo... No eres solo un robot calculador.",
						"vietnamese": "Ringo... Cô không chỉ là một robot tính toán.",
						"thai": "ริงโกะ... เธอไม่ใช่แค่หุ่นยนต์คิดเลขธรรมดา",
						"hindi": "रिंगो... तुम सिर्फ एक हिसाब लगाने वाले रोबोट नहीं हो।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "호호! 들켜버렸네요? 하지만 늦었어요! 모든 돈은 제 것이 될 테니까!",
						"english": "Ho ho! You found me out? But it's too late! All the money will be mine!",
						"japanese": "「ホホ！バレちゃいましたか？でも遅いですよ！全てのお金は私のものになるんですから！」",
						"chinese": "“呵呵！被你发现了？但是已经晚了！所有的钱都将是我的！”",
						"french": "Ho ho ! Vous m'avez démasquée ? Mais c'est trop tard ! Tout l'argent sera à moi !",
						"spanish": "¡Jojojo! ¿Me descubriste? ¡Pero ya es tarde! ¡Todo el dinero será mío!",
						"vietnamese": "Hô hô! Bị lộ rồi sao? Nhưng muộn rồi! Tất cả tiền sẽ thuộc về ta thôi!",
						"thai": "โฮะๆ! จับได้แล้วเหรอคะ? แต่สายไปแล้วล่ะ! เงินทั้งหมดจะเป็นของฉัน!",
						"hindi": "हो हो! क्या तुमने मुझे पहचान लिया? लेकिन अब बहुत देर हो चुकी है! सारा पैसा मेरा होगा!"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "happy"
				},
				{
					"speaker": "nia",
					"content": {
						"korean": "절대 그렇게 두지 않을 거야!",
						"english": "I'll never let that happen!",
						"japanese": "「絶対にそうさせない！」",
						"chinese": "“我绝不会让你得逞！”",
						"french": "Je ne laisserai jamais ça arriver !",
						"spanish": "¡Nunca permitiré que eso pase!",
						"vietnamese": "Ta sẽ không bao giờ để điều đó xảy ra!",
						"thai": "ฉันจะไม่มีวันยอมให้เป็นแบบนั้น!",
						"hindi": "मैं ऐसा कभी नहीं होने दूंगा!"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"번화가 한복판, 눈부신 최첨단 카페 '인페르노'.",
			"친절한 로봇 링고는 완벽한 서비스를 자랑하지만—",
			"신입 직원 니아는 링고의 미소 뒤에 숨겨진 기이한 탐욕을 느낀다.",
			"모든 것은 돈으로 통한다. 이곳에선, 돈이 곧 지옥이었다."
		],
		"english": [
			"In the heart of the bustling downtown, a dazzling high-tech cafe, 'Inferno'.",
			"Friendly robot Ringo boasts perfect service, but—",
			"New employee Nia senses a strange greed hidden behind Ringo's smile.",
			"Everything leads to money. Here, money was hell itself."
		],
		"japanese": [
			"賑やかな繁華街の真ん中、まばゆいばかりの最先端カフェ「インフェルノ」。",
			"親切なロボット、リンゴは完璧なサービスを誇るが—",
			"新人店員のニアは、リンゴの笑顔の裏に隠された奇妙な貪欲さを感じる。",
			"全ては金に通じる。ここでは、金がまさに地獄だった。"
		],
		"chinese": [
			"在繁华街区中央，一家炫目的高科技咖啡馆“炼狱”。",
			"友善的机器人林戈以其完美的G务为傲，但是——",
			"新员工妮娅感受到林戈笑容背后隐藏的奇异贪婪。",
			"一切都与金钱挂钩。在这里，金钱就是地狱。"
		],
		"french": [
			"Au cœur du quartier animé, un café high-tech éblouissant, 'Inferno'.",
			"Le robot amical Ringo se vante d'un service impeccable, mais—",
			"La nouvelle employée Nia ressent une étrange avidité cachée derrière le sourire de Ringo.",
			"Tout mène à l'argent. Ici, l'argent était l'enfer."
		],
		"spanish": [
			"En el corazón del bullicioso centro, una deslumbrante cafetería de alta tecnología, 'Inferno'.",
			"El amable robot Ringo presume de un servicio perfecto, pero—",
			"La nueva empleada Nia siente una extraña codicia oculta tras la sonrisa de Ringo.",
			"Todo lleva al dinero. Aquí, el dinero era el infierno."
		],
		"vietnamese": [
			"Giữa trung tâm thành phố nhộn nhịp, quán cà phê công nghệ cao 'Inferno' lấp lánh.",
			"Robot thân thiện Ringo tự hào về dịch vụ hoàn hảo, nhưng—",
			"Nhân viên mới Nia cảm nhận được sự tham lam kỳ lạ ẩn sau nụ cười của Ringo.",
			"Mọi thứ đều liên quan đến tiền. Ở đây, tiền chính là địa ngục."
		],
		"thai": [
			"ใจกลางเมืองที่พลุกพล่าน คาเฟ่ไฮเทคสุดตระการตา 'อินเฟอร์โน'.",
			"หุ่นยนต์ริงโก้ผู้เป็นมิตรโอ้อวดบริการที่สมบูรณ์แบบ แต่—",
			"เนียพนักงานใหม่สัมผัสได้ถึงความโลภประหลาดที่ซ่อนอยู่หลังรอยยิ้มของริงโก้",
			"ทุกสิ่งล้วนนำไปสู่เงิน ที่นี่ เงินคือขุมนรก"
		],
		"hindi": [
			"हलचल भरे शहर के बीच में, एक चमकदार हाई-टेक कैफे, 'इन्फर्नो'।",
			"दोस्ताना रोबोट रिंगो उत्तम सेवा का दावा करता है, लेकिन—",
			"नई कर्मचारी निया को रिंगो की मुस्कान के पीछे छिपी एक अजीब लालच महसूस होती है।",
			"सब कुछ पैसे से जुड़ा है। यहाँ, पैसा ही नरक था।"
		]
	}
} as const;
