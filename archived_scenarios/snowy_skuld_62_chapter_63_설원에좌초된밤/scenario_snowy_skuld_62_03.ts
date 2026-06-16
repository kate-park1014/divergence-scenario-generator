export const scenario_snowy_skuld_62_03 = {
	"scenario_id": "snowy_skuld_62_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"ivar": {
			"id": "mon_d8a80adc-9315-47b5-8c30-97ce33672bce",
			"name": {
				"korean": "이바르",
				"english": "Ivar",
				"japanese": "イヴァー",
				"chinese": "伊瓦尔",
				"french": "Ivar",
				"spanish": "Ivar",
				"vietnamese": "Ivar",
				"thai": "ไอวาร์",
				"hindi": "इवर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8dd7872b-d4df-44fd-b1a1-083a9156e700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2622fb62-daf4-42d1-a83b-2b78869d3e00/public"
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
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 빙벽 아래, 척후선의 잔해가 거미줄처럼 얽혀 있었다.",
						"english": "Beneath the colossal ice wall, the scout ship's wreckage was intertwined like a spiderweb.",
						"japanese": "巨大な氷壁の下、斥候船の残骸が蜘蛛の巣のように絡み合っていた。",
						"chinese": "巨大的冰墙之下，侦察舰的残骸如蛛网般缠绕。",
						"french": "Sous l'immense mur de glace, l'épave du navire éclaireur était entrelacée comme une toile d'araignée.",
						"spanish": "Bajo el colosal muro de hielo, los restos del barco explorador estaban entrelazados como una telaraña.",
						"vietnamese": "Dưới bức tường băng khổng lồ, xác tàu trinh sát vướng vào nhau như mạng nhện.",
						"thai": "ใต้กำแพงน้ำแข็งมหึมา ซากเรือลาดตระเวนพันกันยุ่งเหยิงเหมือนใยแมงมุม",
						"hindi": "विशाल बर्फ की दीवार के नीचे, स्काउट जहाज का मलबा मकड़ी के जाले की तरह उलझा हुआ था।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "이게… 그 스쿌드인가?",
						"english": "Is this... the Skjold?",
						"japanese": "これが…あのスキョルドなのか？",
						"chinese": "这……就是那艘斯库尔德吗？",
						"french": "Est-ce... le Skjold ?",
						"spanish": "¿Es este... el Skjold?",
						"vietnamese": "Đây... là Skjold sao?",
						"thai": "นี่คือ... สกียอร์ลด์รึ?",
						"hindi": "क्या यह... वह स्किओल्ड है?"
					}
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"speaker": "ivar"
				},
				{
					"content": {
						"korean": "그래. 바다를 호령했던 녀석이… 이리 추한 모습으로.",
						"english": "Yes. The one who commanded the seas... now in such a wretched state.",
						"japanese": "ああ。海を支配した奴が…こんな醜い姿に。",
						"chinese": "是啊。那个曾叱咤大海的家伙……竟落得如此狼狈。",
						"french": "Oui. Celui qui commandait les mers... maintenant dans un état si misérable.",
						"spanish": "Sí. El que dominaba los mares... ahora en un estado tan lamentable.",
						"vietnamese": "Phải. Kẻ từng thống trị biển cả... giờ đây lại thảm hại thế này.",
						"thai": "ใช่แล้ว ผู้ที่เคยครองทะเล... ตอนนี้กลับอยู่ในสภาพที่น่าสมเพชเช่นนี้",
						"hindi": "हाँ। वह जिसने समुद्रों पर राज किया था... अब ऐसी दयनीय अवस्था में।"
					},
					"emotion": "sad",
					"speaker": "ivar",
					"type": "speech"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "운명 앞에선 모든 것이 무력하군.",
						"english": "Before fate, all things are powerless.",
						"japanese": "運命の前では、すべてが無力だな。",
						"chinese": "在命运面前，一切都如此无力。",
						"french": "Devant le destin, tout est impuissant.",
						"spanish": "Ante el destino, todo es impotente.",
						"vietnamese": "Trước định mệnh, mọi thứ đều bất lực.",
						"thai": "ต่อหน้าโชคชะตา ทุกสิ่งล้วนไร้พลัง",
						"hindi": "भाग्य के सामने, सब कुछ शक्तिहीन है।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "아직 싸우지도 않았어!",
						"english": "We haven't even fought yet!",
						"japanese": "まだ戦ってもいない！",
						"chinese": "我们还没战斗呢！",
						"french": "Nous n'avons même pas encore combattu !",
						"spanish": "¡Todavía no hemos luchado!",
						"vietnamese": "Chúng ta còn chưa chiến đấu mà!",
						"thai": "เรายังไม่ได้สู้เลย!",
						"hindi": "हमने अभी तक लड़ाई नहीं लड़ी है!"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…흥. 네놈 말대로군.",
						"english": "...Hmph. You're right.",
						"japanese": "…フン。お前の言う通りだ。",
						"chinese": "……哼。你说的没错。",
						"french": "...Hmpf. Tu as raison.",
						"spanish": "...Hmpf. Tienes razón.",
						"vietnamese": "...Hừm. Ngươi nói đúng.",
						"thai": "...หึ เจ้าพูดถูก",
						"hindi": "...हम्म। तुम सही कहते हो।"
					},
					"type": "speech",
					"speaker": "ivar"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "잔해는 더욱 깊숙이 파고들었다. 마치 거대한 힘에 의해 찢겨나간 듯했다.",
						"english": "The wreckage was deeply embedded, as if torn apart by immense power.",
						"japanese": "残骸はさらに深く食い込んでいた。まるで巨大な力によって引き裂かれたかのようだった。",
						"chinese": "残骸深深地嵌在里面，仿佛被一股巨大的力量撕裂开来。",
						"french": "L'épave était profondément enfoncée, comme si elle avait été déchirée par une force immense.",
						"spanish": "Los restos se habían incrustado aún más, como si hubieran sido desgarrados por una fuerza inmensa.",
						"vietnamese": "Mảnh vỡ đâm sâu hơn, như thể bị xé nát bởi một sức mạnh khổng lồ.",
						"thai": "ซากปรักหักพังจมลึกลงไปอีก ราวกับถูกฉีกขาดด้วยพลังมหาศาล",
						"hindi": "मलबा और भी गहराई तक धँस गया था, मानो किसी विशाल शक्ति द्वारा चीर दिया गया हो।"
					}
				},
				{
					"duration_ms": 450,
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "ivar"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이 파괴의 흔적… 스쿌드는 마지막까지 발버둥 쳤겠지.",
						"english": "These traces of destruction... Skjold must have struggled to the very end.",
						"japanese": "この破壊の痕跡… スキョルドは最後までもがいただろうに。",
						"chinese": "这破坏的痕迹……斯库尔德一定挣扎到了最后。",
						"french": "Ces traces de destruction... Skjold a dû se battre jusqu'au bout.",
						"spanish": "Estas huellas de destrucción... Skjold debió de luchar hasta el final.",
						"vietnamese": "Dấu vết của sự hủy diệt này... Skjold chắc hẳn đã vùng vẫy đến tận cùng.",
						"thai": "ร่องรอยแห่งการทำลายล้างนี้... สคโยลด์คงจะดิ้นรนจนถึงที่สุด",
						"hindi": "विनाश के ये निशान... स्कोल्ड ने अंत तक संघर्ष किया होगा।"
					},
					"type": "speech",
					"speaker": "ivar"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "하지만 결국, 이렇게 부서졌군. 강함이란 게 다 무슨 소용인가.",
						"english": "But in the end, it broke like this. What good is strength?",
						"japanese": "だが結局、こうして砕け散った。強さなど、何の役に立つというのか。",
						"chinese": "但最终，还是这样破碎了。强大又有什么用呢？",
						"french": "Mais finalement, elle s'est brisée ainsi. À quoi bon la force ?",
						"spanish": "Pero al final, se hizo pedazos así. ¿De qué sirve la fuerza?",
						"vietnamese": "Nhưng cuối cùng, nó vẫn tan vỡ thế này. Sức mạnh thì có ích gì chứ?",
						"thai": "แต่ในที่สุด มันก็แตกสลายแบบนี้ ความแข็งแกร่งจะมีประโยชน์อะไร",
						"hindi": "लेकिन अंत में, यह ऐसे ही टूट गया। ताकत किस काम की?"
					},
					"type": "speech",
					"speaker": "ivar"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "슬퍼하는 거야?",
						"english": "Are you sad?",
						"japanese": "悲しんでいるのか？",
						"chinese": "你在悲伤吗？",
						"french": "Tu es triste ?",
						"spanish": "¿Estás triste?",
						"vietnamese": "Ngươi đang buồn sao?",
						"thai": "คุณเศร้าเหรอ?",
						"hindi": "क्या तुम दुखी हो?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "시끄럽다. 그저… 저것이 내 미래가 될까 봐 역겨울 뿐이다.",
						"english": "Quiet. It's just... I'm disgusted at the thought of that being my future.",
						"japanese": "黙れ。ただ…あれが私の未来になるかと思うと、反吐が出るだけだ。",
						"chinese": "闭嘴。只是……想到那会是我的未来，就觉得恶心。",
						"french": "Silence. C'est juste... je suis dégoûté à l'idée que ce soit mon futur.",
						"spanish": "Cállate. Es solo... me da asco pensar que ese podría ser mi futuro.",
						"vietnamese": "Im đi. Chỉ là... ta thấy ghê tởm khi nghĩ đó có thể là tương lai của ta.",
						"thai": "หุบปาก แค่... รังเกียจที่คิดว่านั่นอาจเป็นอนาคตของข้า",
						"hindi": "चुप रहो। बस... यह सोचकर घिन आती है कि वह मेरा भविष्य होगा।"
					},
					"emotion": "angry",
					"speaker": "ivar",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"content": {
						"korean": "얼음의 감옥은 더욱 깊어졌다. 탈출하려 몸부림치던 배의 비명이 들리는 듯했다.",
						"english": "The ice prison deepened. I could almost hear the ship's screams as it struggled to escape.",
						"japanese": "氷の監獄はさらに深くなった。脱出しようともがく船の悲鳴が聞こえるようだった。",
						"chinese": "冰之牢笼越发深邃。我仿佛听到了船只挣扎着想要逃脱的尖叫声。",
						"french": "La prison de glace s'est approfondie. J'entendais presque les cris du navire luttant pour s'échapper.",
						"spanish": "La prisión de hielo se hizo más profunda. Casi podía oír los gritos del barco mientras luchaba por escapar.",
						"vietnamese": "Nhà tù băng ngày càng sâu hơn. Ta gần như có thể nghe thấy tiếng hét của con tàu khi nó cố gắng thoát ra.",
						"thai": "คุกน้ำแข็งยิ่งลึกลงไปอีก ข้าแทบจะได้ยินเสียงกรีดร้องของเรือที่พยายามจะหนี",
						"hindi": "बर्फ की जेल और गहरी हो गई। मैं लगभग उस जहाज की चीखें सुन सकता था जो भागने की कोशिश कर रहा था।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "ivar",
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"emotion": "sad",
					"content": {
						"korean": "발버둥 쳐도, 결국은 잡히는 먹잇감인가.",
						"english": "No matter how much you struggle, are you just prey to be caught in the end?",
						"japanese": "もがいても、結局は捕らえられる獲物なのか。",
						"chinese": "即使挣扎，最终也只是被捕获的猎物吗？",
						"french": "Même en luttant, ne sommes-nous que des proies vouées à être capturées au final ?",
						"spanish": "Aunque te retuerzas, ¿al final eres solo una presa atrapada?",
						"vietnamese": "Dù có vùng vẫy, cuối cùng cũng chỉ là con mồi bị bắt sao?",
						"thai": "ดิ้นรนไปก็เท่านั้น สุดท้ายก็เป็นแค่เหยื่อที่ถูกจับงั้นหรือ",
						"hindi": "कितना भी संघर्ष करो, क्या अंत में बस पकड़े जाने वाले शिकार हो?"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "우린 달라. 우린 멈추지 않아.",
						"english": "We are different. We won't stop.",
						"japanese": "私たちは違う。私たちは止まらない。",
						"chinese": "我们不一样。我们不会停下。",
						"french": "Nous sommes différents. Nous ne nous arrêterons pas.",
						"spanish": "Somos diferentes. No nos detendremos.",
						"vietnamese": "Chúng ta khác biệt. Chúng ta sẽ không dừng lại.",
						"thai": "เราไม่เหมือนกัน เราจะไม่หยุด",
						"hindi": "हम अलग हैं। हम नहीं रुकेंगे।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"emotion": "base",
					"content": {
						"korean": "…건방진 소리다. 하지만, 그 오기가 어디까지 통할지… 흥미롭군.",
						"english": "...Impudent words. But how far will that defiance take you... Intriguing.",
						"japanese": "…生意気な物言いだ。だが、その意地がどこまで通じるか…興味深い。",
						"chinese": "……狂妄的言论。但是，这份傲气能支撑多久呢……真是有趣。",
						"french": "...Paroles impudentes. Mais jusqu'où cette défiance vous mènera-t-elle... Intéressant.",
						"spanish": "...Palabras insolentes. Pero hasta dónde llegará esa obstinación... Interesante.",
						"vietnamese": "...Thật ngông cuồng. Nhưng sự ngoan cố đó sẽ đi được bao xa... Thật thú vị.",
						"thai": "...ช่างหยิ่งยโส แต่ความดื้อรั้นนั้นจะไปได้ไกลแค่ไหน... น่าสนใจ",
						"hindi": "...बेशर्म बात है। लेकिन वह ज़िद कितनी दूर तक काम आएगी... दिलचस्प है।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "시간마저 얼어붙은 곳. 척후선의 부서진 돛대는 침묵의 비석처럼 꽂혀 있었다.",
						"english": "A place where even time was frozen. The scout ship's broken mast stood like a silent monument.",
						"japanese": "時間さえも凍りついた場所。斥候船の折れたマストは、沈黙の石碑のように突き刺さっていた。",
						"chinese": "连时间都被冻结的地方。侦察船破碎的桅杆像一座沉默的石碑一样矗立着。",
						"french": "Un lieu où même le temps était gelé. Le mât brisé du navire de reconnaissance se dressait comme une stèle silencieuse.",
						"spanish": "Un lugar donde incluso el tiempo estaba congelado. El mástil roto de la nave exploradora se erguía como un monumento silencioso.",
						"vietnamese": "Một nơi mà thời gian cũng đóng băng. Cột buồm gãy của tàu trinh sát đứng sừng sững như một bia mộ im lặng.",
						"thai": "สถานที่ที่แม้แต่เวลาก็ถูกแช่แข็ง เสากระโดงเรือลาดตระเวนที่หักปักอยู่ราวกับอนุสาวรีย์แห่งความเงียบ",
						"hindi": "एक ऐसी जगह जहाँ समय भी जम गया था। टोही जहाज का टूटा हुआ मस्तूल एक खामोश स्मारक की तरह खड़ा था।"
					}
				},
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 400,
					"spot": [
						2,
						2
					],
					"speaker": "ivar"
				},
				{
					"content": {
						"korean": "여기까지 와서… 더 이상 도망칠 곳도 없군.",
						"english": "You've come this far... There's nowhere left to run.",
						"japanese": "ここまで来て…もう逃げ場はないな。",
						"chinese": "走到这里……再也没有地方可逃了。",
						"french": "Vous êtes venus jusqu'ici... Il n'y a plus nulle part où fuir.",
						"spanish": "Llegaste hasta aquí... Ya no hay adónde escapar.",
						"vietnamese": "Đến nước này rồi... không còn nơi nào để trốn nữa.",
						"thai": "มาถึงตรงนี้แล้ว... ไม่มีที่ให้หนีอีกแล้วสินะ",
						"hindi": "यहाँ तक आ गए... अब भागने की कोई जगह नहीं बची।"
					},
					"emotion": "base",
					"speaker": "ivar",
					"type": "speech"
				},
				{
					"content": {
						"korean": "도망치지 않아. 끝까지 가는 거야.",
						"english": "I won't run. I'll see this through to the end.",
						"japanese": "逃げない。最後まで行くんだ。",
						"chinese": "我不会逃。我要坚持到底。",
						"french": "Je ne fuirai pas. J'irai jusqu'au bout.",
						"spanish": "No escaparé. Iré hasta el final.",
						"vietnamese": "Tôi sẽ không chạy trốn. Tôi sẽ đi đến cùng.",
						"thai": "ไม่หนีหรอก จะไปให้สุดทาง",
						"hindi": "मैं भागूंगा नहीं। मैं इसे अंत तक ले जाऊँगा।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "그래. 끝까지 가보자. 이 운명의 끝에서 뭘 보게 될지.",
						"english": "Alright. Let's see this to the end. What will we find at the end of this destiny?",
						"japanese": "ああ、最後まで行こう。この運命の果てに何を見るか。",
						"chinese": "好。那就走到最后吧。看看这命运的尽头会是什么。",
						"french": "Bien. Allons jusqu'au bout. Que verrons-nous à la fin de ce destin ?",
						"spanish": "Está bien. Lleguemos hasta el final. ¿Qué veremos al final de este destino?",
						"vietnamese": "Được thôi. Cứ đi đến cùng. Xem cuối cùng của vận mệnh này sẽ thấy gì.",
						"thai": "ดี. ไปให้สุดทางกันเถอะ ที่ปลายทางของโชคชะตานี้ เราจะได้เห็นอะไรนะ",
						"hindi": "ठीक है। चलो अंत तक चलते हैं। देखें इस नियति के अंत में क्या देखने को मिलता है।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "가장 거대한 빙벽 앞에 섰다. 모든 것의 시작이자, 끝.",
						"english": "I stand before the grandest ice wall. The beginning and the end of all.",
						"japanese": "最も巨大な氷壁の前に立った。全ての始まりであり、終わり。",
						"chinese": "站在了最巨大的冰壁前。一切的开始，也是结束。",
						"french": "Je me tiens devant la plus grande des parois de glace. Le début et la fin de tout.",
						"spanish": "Me paro frente a la pared de hielo más grande. El principio y el fin de todo.",
						"vietnamese": "Đứng trước bức tường băng khổng lồ nhất. Khởi đầu và cũng là kết thúc của mọi thứ.",
						"thai": "ยืนอยู่หน้ากำแพงน้ำแข็งที่ใหญ่ที่สุด จุดเริ่มต้นและจุดสิ้นสุดของทุกสิ่ง",
						"hindi": "मैं सबसे बड़ी बर्फ की दीवार के सामने खड़ा हूँ। हर चीज़ की शुरुआत और अंत।"
					}
				},
				{
					"content": {
						"korean": "{random_boss}다. 여기까지 오다니… 대단하군.",
						"english": "It's {random_boss}. To have come this far... Impressive.",
						"japanese": "{random_boss}か。ここまで来るとは…大したものだ。",
						"chinese": "是{random_boss}。竟然能走到这里……真了不起。",
						"french": "C'est {random_boss}. Être arrivé jusqu'ici... Impressionnant.",
						"spanish": "Es {random_boss}. Haber llegado hasta aquí... Impresionante.",
						"vietnamese": "{random_boss} à. Đến được đây... Thật đáng nể.",
						"thai": "{random_boss}สินะ มาได้ถึงขนาดนี้... สุดยอดเลย",
						"hindi": "यह {random_boss} है। यहाँ तक आना... कमाल है।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "하지만 더는 안 된다. 이곳에 잠든 진실은, 너희가 감당할 수 없어.",
						"english": "But no further. The truth slumbering here is more than you can bear.",
						"japanese": "だが、これ以上はならぬ。ここに眠る真実は、お前たちが背負えるものではない。",
						"chinese": "但不能再前进了。沉睡于此的真相，你们无法承受。",
						"french": "Mais pas plus loin. La vérité qui sommeille ici est au-delà de ce que vous pouvez supporter.",
						"spanish": "Pero no más. La verdad que yace aquí es más de lo que pueden soportar.",
						"vietnamese": "Nhưng không thể nữa. Sự thật đang ngủ yên ở đây, các ngươi không thể gánh vác nổi đâu.",
						"thai": "แต่ไปต่อไม่ได้แล้ว ความจริงที่หลับใหลอยู่ที่นี่ พวกเจ้าไม่อาจแบกรับได้หรอก",
						"hindi": "लेकिन अब और नहीं। यहाँ सो रही सच्चाई, तुम लोग संभाल नहीं पाओगे।"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "네가 막을 수 있을 것 같아?",
						"english": "Do you think you can stop me?",
						"japanese": "お前が止められるとでも？",
						"chinese": "你觉得你能阻止我吗？",
						"french": "Penses-tu pouvoir nous arrêter ?",
						"spanish": "¿Crees que puedes detenerme?",
						"vietnamese": "Ngươi nghĩ mình có thể ngăn cản được sao?",
						"thai": "คิดว่าจะหยุดฉันได้งั้นเหรอ?",
						"hindi": "क्या तुम्हें लगता है कि तुम मुझे रोक सकते हो?"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "운명에 맞서는 자는… 언제나 존재하지. 네놈이 아무리 강해도.",
						"english": "Those who defy destiny... always exist. No matter how strong you are.",
						"japanese": "運命に抗う者は…いつだって存在する。お前がどれだけ強くともな。",
						"chinese": "反抗命运的人……总是存在的。无论你多么强大。",
						"french": "Ceux qui défient le destin... existeront toujours. Aussi fort que tu sois.",
						"spanish": "Quienes desafían el destino... siempre existen. No importa cuán fuerte seas.",
						"vietnamese": "Những kẻ chống lại vận mệnh... luôn tồn tại. Dù ngươi có mạnh đến đâu đi nữa.",
						"thai": "ผู้ที่ต่อต้านโชคชะตา... มีอยู่เสมอ ไม่ว่าเจ้าจะแข็งแกร่งแค่ไหนก็ตาม",
						"hindi": "नियति का सामना करने वाले... हमेशा मौजूद होते हैं। तुम कितने भी शक्तिशाली क्यों न हो।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "어리석은 자들. 진실을 마주할 힘조차 없으면서.",
						"english": "Foolish ones. You don't even have the strength to face the truth.",
						"japanese": "愚かな者たちめ。真実と向き合う力すら持たぬくせに。",
						"chinese": "愚蠢的人。明明连面对真相的力量都没有。",
						"french": "Imbéciles. Vous n'avez même pas la force d'affronter la vérité.",
						"spanish": "Necios. Ni siquiera tienen la fuerza para enfrentar la verdad.",
						"vietnamese": "Lũ ngu ngốc. Ngay cả sức mạnh để đối mặt với sự thật cũng không có.",
						"thai": "พวกโง่เง่า ไม่มีแม้แต่พลังที่จะเผชิญหน้ากับความจริงแท้",
						"hindi": "मूर्खों। तुममें सच्चाई का सामना करने की शक्ति भी नहीं है।"
					},
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "…이런… 어둠은… 더 깊어질 뿐… {random_boss}는… 그저… 시작일 뿐이다….",
						"english": "...Alas... The darkness... will only deepen... {random_boss} was... merely... the beginning....",
						"japanese": "…くそ… 闇は… より深く… {random_boss}は… ただの… 始まりに過ぎない…。",
						"chinese": "……唉……黑暗……只会更加深沉……{random_boss}……不过……只是开始……。",
						"french": "...Hélas... L'obscurité... ne fera que s'épaissir... {random_boss} n'était... qu'un... début....",
						"spanish": "...Ay... La oscuridad... solo se hará más profunda... {random_boss} fue... simplemente... el principio....",
						"vietnamese": "...Than ôi... Bóng tối... sẽ chỉ càng sâu hơn... {random_boss}... chỉ là... khởi đầu mà thôi....",
						"thai": "...แย่จริง... ความมืด... จะยิ่งลึกซึ้งขึ้น... {random_boss} เป็น... แค่... จุดเริ่มต้นเท่านั้น....",
						"hindi": "...उफ़... अँधेरा... और गहरा ही होगा... {random_boss}... बस... शुरुआत भर था...."
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "뭐? 무슨 소리야?",
						"english": "What? What do you mean?",
						"japanese": "「何？どういうことだ？」",
						"chinese": "什么？你说什么？",
						"french": "Quoi ? Qu'est-ce que tu racontes ?",
						"spanish": "¿Qué? ¿Qué quieres decir?",
						"vietnamese": "Gì cơ? Ý ngươi là gì?",
						"thai": "อะไรนะ? หมายความว่าไง?",
						"hindi": "क्या? तुम्हारा क्या मतलब है?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"emotion": "sad",
					"content": {
						"korean": "…끝이 아니라는 건가. 운명의 장난은 계속되는군.",
						"english": "...It's not over? Fate's cruel game continues.",
						"japanese": "「…終わりじゃないのか。運命の悪戯は続く…。」",
						"chinese": "…还没结束吗？命运的捉弄仍在继续。",
						"french": "...Ce n'est pas la fin ? Le jeu cruel du destin continue.",
						"spanish": "...¿No es el final? El cruel juego del destino continúa.",
						"vietnamese": "...Chưa kết thúc sao. Trò đùa của số phận vẫn tiếp diễn.",
						"thai": "...ยังไม่จบงั้นรึ? เกมร้ายของโชคชะตายังคงดำเนินต่อไป",
						"hindi": "...यह अंत नहीं है? किस्मत का क्रूर खेल जारी है।"
					}
				},
				{
					"content": {
						"korean": "쓰러진 {random_boss}의 뒤로, 거대한 빙하가 갈라지는 소리가 들렸다.",
						"english": "Behind the fallen {random_boss}, the sound of a massive glacier splitting echoed.",
						"japanese": "「倒れた{random_boss}の背後で、巨大な氷河が割れる音が響いた。」",
						"chinese": "倒下的{random_boss}身后，传来了巨大冰川裂开的声音。",
						"french": "Derrière le {random_boss} vaincu, le son d'un glacier gigantesque se déchirant résonna.",
						"spanish": "Detrás del {random_boss} caído, se escuchó el sonido de un glaciar gigantesco partiéndose.",
						"vietnamese": "Phía sau {random_boss} đã gục ngã, tiếng một sông băng khổng lồ nứt ra vang vọng.",
						"thai": "เบื้องหลัง {random_boss} ที่ล้มลง เสียงธารน้ำแข็งมหึมากำลังแยกตัวดังก้อง",
						"hindi": "गिरे हुए {random_boss} के पीछे, एक विशाल ग्लेशियर के टूटने की आवाज गूंज उठी।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "미지의 길은 다시 열렸다. 더 깊은 어둠 속으로.",
						"english": "The unknown path opened again. Into deeper darkness.",
						"japanese": "「未知の道が再び開かれた。さらに深い闇の中へ。」",
						"chinese": "未知之路再次开启。通往更深的黑暗。",
						"french": "Le chemin inconnu s'ouvrit à nouveau. Vers des ténèbres plus profondes.",
						"spanish": "El camino desconocido se abrió de nuevo. Hacia una oscuridad más profunda.",
						"vietnamese": "Con đường vô định lại mở ra. Tiến sâu hơn vào bóng tối.",
						"thai": "เส้นทางที่ไม่มีใครรู้จักเปิดออกอีกครั้ง สู่ความมืดมิดที่ลึกซึ้งยิ่งกว่า",
						"hindi": "अज्ञात मार्ग फिर से खुल गया। और गहरे अंधकार में।"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "angry",
					"content": {
						"korean": "하찮은 것들. 감히 운명에 거스르려 하다니.",
						"english": "Insignificant beings. How dare you defy fate.",
						"japanese": "「取るに足らない者たち。よくも運命に逆らおうとするものだ。」",
						"chinese": "渺小的东西。竟敢违抗命运。",
						"french": "Êtres insignifiants. Comment osez-vous défier le destin.",
						"spanish": "Seres insignificantes. ¿Cómo os atrevéis a desafiar al destino?",
						"vietnamese": "Lũ tầm thường. Dám cả gan chống lại số phận.",
						"thai": "พวกไร้ค่า บังอาจท้าทายโชคชะตา",
						"hindi": "तुच्छ प्राणी। तुम्हारी हिम्मत कैसे हुई किस्मत को चुनौती देने की।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "너희의 강함은, 결국 허상에 불과하다.",
						"english": "Your strength is, in the end, nothing but an illusion.",
						"japanese": "「お前たちの強さなど、結局は虚像に過ぎない。」",
						"chinese": "你们的力量，终究不过是虚妄。",
						"french": "Votre force n'est, au final, qu'une illusion.",
						"spanish": "Vuestra fuerza es, al final, nada más que una ilusión.",
						"vietnamese": "Sức mạnh của các ngươi, rốt cuộc chỉ là ảo ảnh.",
						"thai": "ความแข็งแกร่งของพวกเจ้า แท้จริงแล้วเป็นเพียงภาพลวงตา",
						"hindi": "तुम्हारी ताकत, अंततः, एक भ्रम से ज्यादा कुछ नहीं।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "…큭. 아직… 아니다. 강함의 끝은, 아직 보이지 않았다.",
						"english": "...Ugh. Not yet... The end of strength is not yet in sight.",
						"japanese": "「…くっ。まだ…だめだ。強さの果ては、まだ見えていない。」",
						"chinese": "…咳。还没…没结束。力量的尽头，还没看见。",
						"french": "...Ugh. Pas encore... La fin de la force n'est pas encore en vue.",
						"spanish": "...Uf. Todavía no... El fin de la fuerza aún no se vislumbra.",
						"vietnamese": "...Khụ. Chưa... chưa phải lúc. Giới hạn của sức mạnh, vẫn chưa thể nhìn thấy.",
						"thai": "...อึก ยัง...ยังไม่จบ จุดจบของความแข็งแกร่งยังไม่ปรากฏ",
						"hindi": "...उह। अभी नहीं... ताकत का अंत अभी तक दिखाई नहीं दे रहा है।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "절대 포기하지 않아…!",
						"english": "I'll never give up...!",
						"japanese": "「決して諦めない…！」",
						"chinese": "绝不放弃…！",
						"french": "Je n'abandonnerai jamais... !",
						"spanish": "¡Nunca me rendiré...!",
						"vietnamese": "Tuyệt đối không từ bỏ...!",
						"thai": "ไม่มีวันยอมแพ้เด็ดขาด...!",
						"hindi": "मैं कभी हार नहीं मानूंगा...!"
					},
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"칼날 같던 바다가 얼어붙었다.",
			"이곳에 잠든 건, 한 척의 배만이 아니었다.",
			"힘의 끝을 쫓던 전사는, 잔해 속에서 운명의 그림자를 본다.",
			"모든 영광은, 한순간에 부서졌다."
		],
		"english": [
			"The blade-like sea froze.",
			"It wasn't just one ship that slept here.",
			"The warrior, chasing the limits of power, sees the shadow of fate within the wreckage.",
			"All glory was shattered in an instant."
		],
		"japanese": [
			"刃のようだった海が凍りついた。",
			"ここに眠っていたのは、一隻の船だけではなかった。",
			"力の果てを追う戦士は、残骸の中で運命の影を見る。",
			"すべての栄光は、一瞬にして砕け散った。"
		],
		"chinese": [
			"刀锋般的大海冻结了。",
			"在此沉睡的，不止一艘船。",
			"追逐力量尽头的战士，在残骸中看到了命运的阴影。",
			"所有荣耀，瞬间破碎。"
		],
		"french": [
			"La mer, tranchante comme une lame, a gelé.",
			"Ce n'était pas un seul navire qui dormait ici.",
			"Le guerrier, à la poursuite des limites du pouvoir, voit l'ombre du destin dans les débris.",
			"Toute gloire fut brisée en un instant."
		],
		"spanish": [
			"El mar, afilado como una cuchilla, se congeló.",
			"No era solo un barco lo que yacía aquí.",
			"El guerrero, persiguiendo el fin del poder, ve la sombra del destino entre los escombros.",
			"Toda la gloria se hizo añicos en un instante."
		],
		"vietnamese": [
			"Biển sắc như lưỡi dao đã đóng băng.",
			"Nơi đây không chỉ có một con thuyền chìm vào giấc ngủ.",
			"Chiến binh đuổi theo sức mạnh tận cùng, nhìn thấy bóng dáng định mệnh trong đống đổ nát.",
			"Mọi vinh quang đều tan vỡ trong chốc lát."
		],
		"thai": [
			"ทะเลที่คมดุจใบมีดได้กลายเป็นน้ำแข็ง",
			"ไม่ใช่แค่เรือลำเดียวที่หลับใหลอยู่ที่นี่",
			"นักรบผู้ไล่ล่าขีดสุดของพลัง เห็นเงาแห่งโชคชะตาในซากปรักหักพัง",
			"เกียรติยศทั้งหมดแตกสลายในพริบตา"
		],
		"hindi": [
			"ब्लेड जैसा समुद्र जम गया।",
			"यहाँ केवल एक जहाज ही नहीं सोया था।",
			"शक्ति की सीमा का पीछा करने वाले योद्धा ने मलबे में भाग्य की छाया देखी।",
			"सारा गौरव एक पल में बिखर गया।"
		]
	}
} as const;
