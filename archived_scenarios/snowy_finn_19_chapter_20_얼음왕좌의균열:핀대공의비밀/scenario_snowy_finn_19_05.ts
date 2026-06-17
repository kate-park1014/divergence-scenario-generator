export const scenario_snowy_finn_19_05 = {
	"scenario_id": "snowy_finn_19_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "snowy",
	"actors": {
		"boris": {
			"id": "mon_8f41e00a-9c1b-4e66-9d7a-584cc2a9af84",
			"name": {
				"korean": "보리스",
				"english": "Boris",
				"japanese": "ボリス",
				"chinese": "鲍里斯",
				"french": "Boris",
				"spanish": "Boris",
				"vietnamese": "Boris",
				"thai": "บอริส",
				"hindi": "बोरिस"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8db2ee50-a24d-43cf-a3ec-fad83142f500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/961dfd96-9db1-42aa-a15b-82ba7d1ae700/public"
		}
	},
	"boss": {
		"pool_id": "pool_033"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "끝없이 펼쳐진 설산의 정상. 얼음으로 된 성채가 눈앞에 펼쳐졌다.",
						"english": "The endlessly stretching summit of the snow mountain. An ice fortress unfolded before my eyes.",
						"japanese": "限りなく広がる雪山の頂上。目の前に氷の城砦が広がった。",
						"chinese": "一望无际的雪山之巅。一座冰雪城堡展现在眼前。",
						"french": "Le sommet s'étendant à l'infini de la montagne enneigée. Une forteresse de glace se déploya devant mes yeux.",
						"spanish": "La cima interminable de la montaña nevada. Una fortaleza de hielo se desplegó ante mis ojos.",
						"vietnamese": "Đỉnh núi tuyết trải dài vô tận. Một pháo đài băng hiện ra trước mắt.",
						"thai": "ยอดเขาหิมะที่ทอดยาวไม่สิ้นสุด ป้อมปราการน้ำแข็งปรากฏขึ้นตรงหน้า",
						"hindi": "बर्फीली पर्वतमाला का अंतहीन शिखर। एक बर्फ का किला मेरी आँखों के सामने खुल गया।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "드디어 여기까지 왔어. 핀 대공이 저 안에 있어.",
						"english": "We finally made it this far. Grand Duke Finn is in there.",
						"japanese": "ようやくここまで来た。フィン大公が中にいる。",
						"chinese": "终于来到这里了。芬恩大公就在里面。",
						"french": "Nous sommes enfin arrivés jusqu'ici. Le Grand-Duc Finn est à l'intérieur.",
						"spanish": "Finalmente llegamos hasta aquí. El Gran Duque Finn está ahí dentro.",
						"vietnamese": "Cuối cùng chúng ta cũng đến được đây rồi. Đại Công tước Finn ở trong đó.",
						"thai": "ในที่สุดเราก็มาถึงที่นี่แล้ว แกรนด์ดยุกฟินน์อยู่ในนั้น",
						"hindi": "हम आखिरकार यहाँ तक आ गए। ग्रैंड ड्यूक फिन अंदर है।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "왔느냐, 미물들! 나의 위대한 '필살기'를 목도할 준비는 되었는가?",
						"english": "You're here, vermin! Are you ready to behold my mighty 'Finishing Move'?",
						"japanese": "来たか、下等な者ども！我が偉大なる「必殺技」を見る準備はできたか？",
						"chinese": "来了，虫子们！准备好见证我伟大的“必杀技”了吗？",
						"french": "Vous êtes là, vermines ! Prêtes à assister à mon magnifique « Coup Fatal » ?",
						"spanish": "¡Aquí estáis, sabandijas! ¿Listos para presenciar mi grandioso \"Ataque definitivo\"?",
						"vietnamese": "Đến rồi à, lũ sâu bọ! Đã sẵn sàng chứng kiến \"Tuyệt chiêu\" vĩ đại của ta chưa?",
						"thai": "มาแล้วรึ, เจ้าพวกสิ่งมีชีวิตชั้นต่ำ! พร้อมจะประจักษ์ \"ท่าไม้ตาย\" อันยิ่งใหญ่ของข้าแล้วรึไม่?",
						"hindi": "आ गए, तुच्छ प्राणियों! क्या तुम मेरी महान 'अंतिम चाल' देखने के लिए तैयार हो?"
					},
					"emotion": "happy",
					"type": "speech"
				},
				{
					"speaker": "boris",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "boris",
					"content": {
						"korean": "또 필살기입니까, 전하… 이번엔 또 무슨…",
						"english": "Another finishing move, Your Highness... What is it this time...?",
						"japanese": "また必殺技でございますか、陛下…今度は一体何を…",
						"chinese": "又来必杀技吗，殿下……这次又是什么……",
						"french": "Encore une attaque spéciale, Votre Altesse… Qu'est-ce que c'est cette fois-ci…",
						"spanish": "¿Otra vez un ataque definitivo, Su Majestad…? ¿Qué será esta vez…?",
						"vietnamese": "Lại chiêu cuối nữa ạ, Điện hạ… Lần này lại là gì đây…",
						"thai": "ท่าไม้ตายอีกแล้วหรือพ่ะย่ะค่ะ, ฝ่าบาท… คราวนี้จะทรงทำอะไรอีก…",
						"hindi": "फिर से अंतिम चाल, महाराज... इस बार क्या है...?"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "늘 저런 식이지. 뭘 기대했어?",
						"english": "Always the same. What did you expect?",
						"japanese": "いつもああだ。何を期待したんだ？",
						"chinese": "总是这样。你还期待什么？",
						"french": "Toujours la même chose. Qu'attendiez-vous ?",
						"spanish": "Siempre es igual. ¿Qué esperabas?",
						"vietnamese": "Lúc nào cũng vậy. Ngươi mong đợi điều gì à?",
						"thai": "ก็เป็นแบบนี้เสมอแหละ หวังอะไรไว้ล่ะ?",
						"hindi": "हमेशा ऐसे ही होता है। तुमने क्या उम्मीद की थी?"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "boris",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "전하, 아무리 필살기라 해도… 저 눈덩이로 뭘 하시려는 겁니까?",
						"english": "Your Highness, even if it's a finishing move... what do you intend to do with that snowball?",
						"japanese": "陛下、いくら必殺技とはいえ…あの雪玉で何をなさるおつもりですか？",
						"chinese": "殿下，就算必杀技…您想用那个雪球做什么？",
						"french": "Votre Altesse, même si c'est un coup fatal… que comptez-vous faire avec cette boule de neige ?",
						"spanish": "Su Majestad, por mucho que sea un ataque definitivo… ¿qué va a hacer con esa bola de nieve?",
						"vietnamese": "Điện hạ, dù là tuyệt chiêu… ngài định làm gì với quả cầu tuyết đó ạ?",
						"thai": "ฝ่าบาท, ถึงจะเป็นท่าไม้ตายก็เถอะ… ทรงจะทำอะไรกับก้อนหิมะนั้นหรือพ่ะย่ะค่ะ?",
						"hindi": "महाराज, भले ही यह एक अंतिम चाल हो... आप उस बर्फ के गोले से क्या करने वाले हैं?"
					},
					"speaker": "boris",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"emotion": "base",
					"content": {
						"korean": "무엄하다! 이것은 단순한 눈덩이가 아니다! 나의 권위와 혼이 담긴… 흐읍, 추워!",
						"english": "Insolent! This is no mere snowball! It holds my authority and soul... Hmph, it's cold!",
						"japanese": "無礼者め！これはただの雪玉ではない！我が権威と魂が込められた… ふうっ、寒い！",
						"chinese": "放肆！这不是普通的雪球！里面蕴含着我的权威和灵魂… 呼，好冷！",
						"french": "Impudent ! Ce n'est pas une simple boule de neige ! Elle contient mon autorité et mon âme… Ouf, il fait froid !",
						"spanish": "¡Qué insolencia! ¡Esto no es una simple bola de nieve! Contiene mi autoridad y mi alma… ¡Ugh, qué frío!",
						"vietnamese": "Vô lễ! Đây không phải quả cầu tuyết đơn thuần! Nó chứa đựng uy quyền và linh hồn của ta… Hư, lạnh quá!",
						"thai": "บังอาจ! นี่ไม่ใช่แค่ก้อนหิมะธรรมดา! มันเต็มไปด้วยอำนาจและจิตวิญญาณของข้า… ฮึ่ย, หนาว!",
						"hindi": "धृष्टता! यह केवल बर्फ का गोला नहीं है! इसमें मेरा अधिकार और आत्मा है... उफ़, ठंड है!"
					}
				},
				{
					"content": {
						"korean": "권위라기엔 너무 떠는 것 같은데?",
						"english": "For authority, you're trembling quite a lot, aren't you?",
						"japanese": "権威と言うには震えすぎているように見えますが？",
						"chinese": "说权威，您好像抖得太厉害了吧？",
						"french": "Pour de l'autorité, vous semblez trembler un peu trop, non ?",
						"spanish": "Para tener autoridad, me parece que tiembla demasiado, ¿no cree?",
						"vietnamese": "Nói là uy quyền mà trông ngài run rẩy quá vậy?",
						"thai": "สำหรับอำนาจแล้ว ดูเหมือนจะทรงตัวสั่นมากเกินไปนะพ่ะย่ะค่ะ?",
						"hindi": "अधिकार के लिए, आप बहुत ज़्यादा कांप रहे हैं, है ना?"
					},
					"emotion": "base",
					"speaker": "character_2",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "boris",
					"content": {
						"korean": "안색도 좋지 않으십니다. 핫팩이라도 가져올까요?",
						"english": "Your complexion doesn't look good either. Shall I bring you a hot pack?",
						"japanese": "顔色もよくありません。カイロでもお持ちしましょうか？",
						"chinese": "您的脸色也不太好。要不要给您拿个暖宝宝？",
						"french": "Votre teint n'est pas bon non plus. Dois-je vous apporter une chaufferette ?",
						"spanish": "Su semblante tampoco es bueno. ¿Le traigo una compresa caliente?",
						"vietnamese": "Sắc mặt ngài cũng không tốt. Để thần mang túi sưởi đến nhé?",
						"thai": "พระพักตร์ก็ไม่ดีเลยพ่ะย่ะค่ะ จะให้กระหม่อมนำถุงร้อนมาให้ไหม?",
						"hindi": "आपकी रंगत भी ठीक नहीं है। क्या मैं आपको हॉट पैक लाऊँ?"
					},
					"emotion": "sad"
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
					"type": "direction",
					"action": "enter",
					"speaker": "boris",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "쉿! 필살기 준비 중이다! 이 강력한 눈덩이로 너희를… 콜록!",
						"english": "Shhh! I'm preparing my finishing move! With this powerful snowball, I'll… *Cough!*",
						"japanese": "シーッ！必殺技の準備中だ！この強力な雪玉で貴様らを… ゴホッ！",
						"chinese": "嘘！必杀技准备中！用这个强大的雪球，把你们… 咳咳！",
						"french": "Chut ! Je prépare mon coup fatal ! Avec cette puissante boule de neige, je vais vous… Tousse !",
						"spanish": "¡Shhh! ¡Estoy preparando mi ataque definitivo! ¡Con esta poderosa bola de nieve, os… Cof cof!",
						"vietnamese": "Suỵt! Đang chuẩn bị tuyệt chiêu! Với quả cầu tuyết mạnh mẽ này, ta sẽ… Khụ khụ!",
						"thai": "จุ๊ๆ! กำลังเตรียมท่าไม้ตายอยู่! ด้วยก้อนหิมะอันทรงพลังนี้ ข้าจะ… แค่กๆ!",
						"hindi": "श्श्श! मैं अपनी अंतिम चाल तैयार कर रहा हूँ! इस शक्तिशाली बर्फ के गोले से, मैं तुम्हें... खाँसी!"
					},
					"emotion": "base",
					"speaker": "boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "진짜 눈싸움 하자는 거야? 어이가 없네.",
						"english": "Are you seriously suggesting a snowball fight? This is ridiculous.",
						"japanese": "本気で雪合戦をしようってこと？呆れるわ。",
						"chinese": "真的要打雪仗吗？真无语。",
						"french": "Vous voulez vraiment faire une bataille de boules de neige ? C'est absurde.",
						"spanish": "¿De verdad quiere una pelea de bolas de nieve? Qué ridículo.",
						"vietnamese": "Ngài thật sự muốn chơi ném tuyết sao? Thật hết nói nổi.",
						"thai": "จะให้สู้กันด้วยหิมะจริง ๆ เหรอ? ไร้สาระสิ้นดี.",
						"hindi": "क्या आप सच में बर्फ की लड़ाई करना चाहते हैं? यह तो हास्यास्पद है।"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "boris",
					"content": {
						"korean": "전하, 왕관이 자꾸 미끄러지는 것 같습니다만… 그리고 손도 부르트셨습니다.",
						"english": "Your Highness, your crown seems to keep slipping… And your hands are chapped.",
						"japanese": "陛下、王冠が滑り落ちているようです… それに、お手が荒れていらっしゃいます。",
						"chinese": "殿下，您的王冠好像老是滑落… 而且您的手也冻伤了。",
						"french": "Votre Altesse, votre couronne semble glisser… Et vos mains sont gercées.",
						"spanish": "Su Majestad, la corona parece que se le resbala… Y también tiene las manos agrietadas.",
						"vietnamese": "Điện hạ, vương miện của ngài hình như cứ trượt xuống… Với lại, tay ngài cũng bị tê cóng rồi.",
						"thai": "ฝ่าบาท, ดูเหมือนมงกุฎจะเลื่อนหลุดบ่อยนะพ่ะย่ะค่ะ… แล้วพระหัตถ์ก็แตกหมดแล้วด้วย.",
						"hindi": "महाराज, आपका मुकुट बार-बार फिसल रहा है... और आपके हाथ भी फटे हुए हैं।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이, 이건 영광의 상처다! 쉿! 집중!",
						"english": "Th-this is a badge of honor! Shh! Focus!",
						"japanese": "こ、これは名誉の負傷だ！シッ！集中！",
						"chinese": "这、这是光荣的伤疤！嘘！集中注意力！",
						"french": "C-c'est une cicatrice de gloire ! Chut ! Concentrez-vous !",
						"spanish": "¡E-esto es una herida de honor! ¡Shh! ¡Concéntrate!",
						"vietnamese": "Đ-đây là vết sẹo vinh quang! Suỵt! Tập trung!",
						"thai": "น-นี่คือบาดแผลแห่งเกียรติยศ! ชู่ว์! ตั้งใจ!",
						"hindi": "य-यह सम्मान का निशान है! श्श्श! ध्यान दो!"
					},
					"speaker": "boss"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "boris"
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "각오해라! 나의 필살기는… 전설이 될 것이다!",
						"english": "Brace yourself! My ultimate move... will become a legend!",
						"japanese": "覚悟しろ！我が必殺技は…伝説となるだろう！",
						"chinese": "做好觉悟吧！我的必杀技… 将成为传说！",
						"french": "Prépare-toi ! Ma technique ultime... deviendra une légende !",
						"spanish": "¡Prepárate! ¡Mi movimiento definitivo... se convertirá en leyenda!",
						"vietnamese": "Hãy chuẩn bị đi! Chiêu cuối của ta… sẽ trở thành huyền thoại!",
						"thai": "เตรียมตัวไว้! ท่าไม้ตายของข้า… จะกลายเป็นตำนาน!",
						"hindi": "तैयार हो जाओ! मेरी अंतिम चाल… एक किंवदंती बन जाएगी!"
					},
					"speaker": "boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "저 허세를 언제까지 봐야 해?",
						"english": "How long do I have to put up with that bluff?",
						"japanese": "いつまであの虚勢を見なきゃならないんだ？",
						"chinese": "这虚张声势还要看多久？",
						"french": "Jusqu'à quand devrai-je supporter cette fanfaronnade ?",
						"spanish": "¿Hasta cuándo tengo que aguantar esa fanfarronería?",
						"vietnamese": "Tôi phải chịu đựng sự khoe khoang đó đến bao giờ?",
						"thai": "ฉันต้องทนดูความโอ้อวดนั่นไปอีกนานแค่ไหน?",
						"hindi": "मुझे वह दिखावा कब तक देखना होगा?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "전하… 발밑이 좀 미끄럽습니다. 조심하시는 게…",
						"english": "Your Highness... it's a bit slippery underfoot. You should be careful...",
						"japanese": "殿下…足元が少し滑りやすくなっております。お気を付けになられた方が…",
						"chinese": "殿下… 脚下有点滑。请小心…",
						"french": "Votre Altesse... le sol est un peu glissant. Vous devriez faire attention...",
						"spanish": "Su Alteza... el suelo está un poco resbaladizo. Tenga cuidado...",
						"vietnamese": "Điện hạ… dưới chân hơi trơn trượt. Người nên cẩn thận…",
						"thai": "ฝ่าบาท… ใต้เท้าค่อนข้างลื่นพ่ะย่ะค่ะ ระวังหน่อยนะพ่ะย่ะค่ะ…",
						"hindi": "महामहिम… ज़मीन थोड़ी फिसलन भरी है। आपको सावधान रहना चाहिए…"
					},
					"speaker": "boris"
				},
				{
					"content": {
						"korean": "흥! 왕의 품격에 미끄러짐은 없다!",
						"english": "Hmph! A king's dignity knows no slips!",
						"japanese": "ふん！王の品格に滑りなどないわ！",
						"chinese": "哼！王者的威严岂容滑倒！",
						"french": "Hmph ! La dignité d'un roi ne connaît pas de dérapage !",
						"spanish": "¡Hmph! ¡La dignidad de un rey no resbala!",
						"vietnamese": "Hừ! Phẩm giá của một vị vua không thể trượt ngã!",
						"thai": "หึ! ศักดิ์ศรีของกษัตริย์ไม่เคยล้ม!",
						"hindi": "हम्म! राजा की गरिमा को कोई फिसलन नहीं!"
					},
					"emotion": "base",
					"speaker": "boss",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "핀 대공은 차가운 얼음 바닥에 힘없이 쓰러졌다.",
						"english": "Grand Duke Finn collapsed helplessly onto the cold ice floor.",
						"japanese": "フィン大公は冷たい氷の床に力なく倒れ込んだ。",
						"chinese": "芬恩大公无力地倒在了冰冷的地面上。",
						"french": "Le Grand-Duc Finn s'effondra impuissant sur le froid sol de glace.",
						"spanish": "El Gran Duque Finn cayó sin fuerzas sobre el frío suelo de hielo.",
						"vietnamese": "Đại Công tước Finn bất lực ngã xuống nền băng lạnh giá.",
						"thai": "แกรนด์ดยุกฟินน์ล้มลงอย่างหมดแรงบนพื้นน้ำแข็งอันหนาวเย็น",
						"hindi": "ग्रैंड ड्यूक फिन ठंडी बर्फीली फर्श पर बेबस होकर गिर पड़ा।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "콜록… 춥다… 남쪽… 따뜻한… 고향… 그리워…",
						"english": "Cough... Cold... South... Warm... Home... I miss it...",
						"japanese": "ゴホッ…寒い…南…暖かい…故郷…恋しい…",
						"chinese": "咳咳…好冷…南方…温暖的…故乡…真想念…",
						"french": "Toussote... Froid... Le Sud... Chaud... Ma patrie... Me manque...",
						"spanish": "Tos... Frío... Sur... Cálido... Hogar... Lo añoro...",
						"vietnamese": "Khụ... Lạnh quá... Phương Nam... Ấm áp... Quê hương... Nhớ quá...",
						"thai": "แค่ก... หนาว... ใต้... อบอุ่น... บ้านเกิด... คิดถึง...",
						"hindi": "खांसी... ठंड... दक्षिण... गर्म... घर... याद आती है..."
					},
					"emotion": "sad",
					"speaker": "boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "설산의 왕이 따뜻한 곳을 그리워했다고? 이게 그의 진짜 모습인가…",
						"english": "The King of Snow Mountain longed for warmth? Is this his true self...?",
						"japanese": "雪山の王が暖かい場所を恋しがっていた？これが彼の本当の姿なのか…",
						"chinese": "雪山之王竟然渴望温暖？这才是他真正的样子吗…",
						"french": "Le Roi de la Montagne de Neige aspirait à la chaleur ? Serait-ce sa vraie nature... ?",
						"spanish": "El Rey de la Montaña Nevada anhelaba un lugar cálido? ¿Es esta su verdadera forma...?",
						"vietnamese": "Vị Vua Núi Tuyết lại khao khát nơi ấm áp sao? Đây có phải là con người thật của anh ta...?",
						"thai": "ราชาแห่งภูเขาหิมะโหยหาความอบอุ่นงั้นเหรอ? นี่คือตัวตนที่แท้จริงของเขาหรือนี่...?",
						"hindi": "हिम पर्वत का राजा गर्म जगह की लालसा कर रहा था? क्या यह उसका असली रूप है...?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "얼어붙은 왕좌는 빈 채로 남았다. 그의 진짜 이야기는 이제 막 시작되었다.",
						"english": "The frozen throne remained empty. His true story had just begun.",
						"japanese": "凍てついた玉座は空のまま残された。彼の本当の物語は、今始まったばかりだ。",
						"chinese": "冰封的王座空无一人。他真正的故事才刚刚开始。",
						"french": "Le trône gelé resta vide. Sa véritable histoire venait de commencer.",
						"spanish": "El trono helado quedó vacío. Su verdadera historia acababa de empezar.",
						"vietnamese": "Ngôi vương băng giá vẫn trống rỗng. Câu chuyện thật sự của anh ta chỉ vừa mới bắt đầu.",
						"thai": "บัลลังก์น้ำแข็งยังคงว่างเปล่า เรื่องราวที่แท้จริงของเขาเพิ่งจะเริ่มต้นขึ้น",
						"hindi": "बर्फ़ीला सिंहासन खाली रह गया। उसकी असली कहानी अभी शुरू हुई थी।"
					},
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "핀 대공은 비장하게 '필살기'라 명명한 눈덩이를 높이 들었다.",
						"english": "Grand Duke Finn gravely raised a snowball, which he had named 'Ultimate Move'.",
						"japanese": "フィン大公は、悲壮な面持ちで「必殺技」と名付けた雪玉を高く掲げた。",
						"chinese": "芬大公悲壮地举起了一个他命名为“必杀技”的雪球。",
						"french": "Le Grand-Duc Finn leva solennellement une boule de neige, qu'il avait nommée 'Coup Ultime'.",
						"spanish": "El Gran Duque Finn levantó solemnemente una bola de nieve, a la que había llamado 'Movimiento Definitivo'.",
						"vietnamese": "Đại Công tước Finn nghiêm trang giơ cao quả cầu tuyết mà ông gọi là 'Chiêu cuối'.",
						"thai": "แกรนด์ดยุกฟินน์ยกก้อนหิมะที่เขาเรียกว่า 'ท่าไม้ตาย' ขึ้นสูงอย่างน่าเกรงขาม",
						"hindi": "ग्रैंड ड्यूक फिन ने गंभीरता से एक बर्फीला गोला उठाया, जिसे उन्होंने 'अंतिम चाल' नाम दिया था।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "자, 받아라! 이 설산의 왕이 선사하는 최강의 한 방을!",
						"english": "Now, take this! The strongest blow from the King of this Snow Mountain!",
						"japanese": "さあ、受け取れ！この雪山の王が贈る最強の一撃を！",
						"chinese": "来吧，接招！这是雪山之王献上的最强一击！",
						"french": "Tiens, prends ça ! Le coup le plus puissant offert par le Roi de cette Montagne de Neige !",
						"spanish": "¡Ahora, toma esto! ¡El golpe más fuerte del Rey de esta Montaña Nevada!",
						"vietnamese": "Nào, nhận lấy đi! Đòn mạnh nhất từ Vua của ngọn núi tuyết này!",
						"thai": "เอาไปเลย! นี่คือการโจมตีที่แข็งแกร่งที่สุดจากราชาแห่งภูเขาหิมะนี้!",
						"hindi": "अब, इसे लो! इस बर्फीले पहाड़ के राजा का सबसे शक्तिशाली वार!"
					},
					"emotion": "happy"
				},
				{
					"content": {
						"korean": "웃기지 마! 진짜 실력을 보여줘!",
						"english": "Don't be ridiculous! Show me your real skill!",
						"japanese": "ふざけるな！本当の力を見せてみろ！",
						"chinese": "别开玩笑了！拿出真本事来！",
						"french": "Ne sois pas ridicule ! Montre-moi ta vraie compétence !",
						"spanish": "¡No seas ridículo! ¡Muéstrame tu verdadera habilidad!",
						"vietnamese": "Đừng có đùa! Cho ta xem thực lực thật sự của ngươi đi!",
						"thai": "อย่ามาตลก! แสดงฝีมือจริงของแกออกมา!",
						"hindi": "मज़ाक मत करो! अपनी असली ताकत दिखाओ!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "boris",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "boris",
					"content": {
						"korean": "전하! 조심하십시오! 발밑의 얼음이…!",
						"english": "Your Highness! Be careful! The ice underfoot…!",
						"japanese": "殿下！お気を付けください！足元の氷が…！",
						"chinese": "殿下！请小心！脚下的冰…！",
						"french": "Votre Altesse ! Faites attention ! La glace sous vos pieds… !",
						"spanish": "¡Su Alteza! ¡Tenga cuidado! ¡El hielo bajo sus pies…!",
						"vietnamese": "Điện hạ! Xin hãy cẩn thận! Lớp băng dưới chân…!",
						"thai": "ฝ่าบาท! ระวังด้วยพ่ะย่ะค่ะ! น้ำแข็งใต้เท้า…!",
						"hindi": "महामहिम! सावधान रहें! पैरों के नीचे की बर्फ़…!"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그 순간, 핀 대공의 발이 미끄러졌다. 균형을 잃고 눈덩이와 함께 넘어지는 그의 모습.",
						"english": "At that moment, Grand Duke Finn's foot slipped. He lost his balance and fell, along with the snowball.",
						"japanese": "その瞬間、フィン大公の足が滑った。バランスを崩し、雪玉と共に転倒する彼の姿。",
						"chinese": "那一刻，芬大公的脚滑了一下。他失去平衡，和雪球一起摔倒了。",
						"french": "À cet instant, le pied du Grand-Duc Finn glissa. Il perdit l'équilibre et tomba, avec la boule de neige.",
						"spanish": "En ese instante, el pie del Gran Duque Finn resbaló. Perdió el equilibrio y cayó, junto con la bola de nieve.",
						"vietnamese": "Ngay lúc đó, chân Đại Công tước Finn trượt. Ông mất thăng bằng và ngã nhào cùng với quả cầu tuyết.",
						"thai": "ในวินาทีนั้น เท้าของแกรนด์ดยุกฟินน์ก็ลื่น เขาสูญเสียการทรงตัวและล้มลงพร้อมกับก้อนหิมะ",
						"hindi": "उसी क्षण, ग्रैंड ड्यूक फिन का पैर फिसल गया। उन्होंने संतुलन खो दिया और बर्फ़ीले गोले के साथ गिर गए।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "boss",
					"emotion": "sad",
					"content": {
						"korean": "크아악! 이게 무슨…! 나의 왕관이… 으읍…",
						"english": "Aargh! What in...! My crown...! Ugh...",
						"japanese": "ぐあああ！これは一体…！私の王冠が…うっ…",
						"chinese": "啊啊啊！这是什么…！我的王冠…呜呃…",
						"french": "Aaaargh ! Qu'est-ce que... ! Ma couronne... Urgh...",
						"spanish": "¡Aaaargh! ¡¿Qué es esto...?! ¡Mi corona...! Uf...",
						"vietnamese": "Aaargh! Chuyện gì thế này...! Vương miện của ta...! Ưm...",
						"thai": "กรี๊ดดด! นี่มันอะไรกัน...! มงกุฎของข้า...! อึก...",
						"hindi": "आह! यह क्या...! मेरा मुकुट...! उह..."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "넘어진 그의 옷 속에서 핫팩 뭉치들이 쏟아져 나왔다.",
						"english": "From his fallen attire, bundles of heat packs spilled out.",
						"japanese": "倒れた彼の服の中から、大量のカイロがこぼれ落ちた。",
						"chinese": "他摔倒后，衣服里散落出成捆的暖宝宝。",
						"french": "De ses vêtements tombés, des paquets de chaufferettes se sont déversés.",
						"spanish": "De su vestimenta caída, se derramaron montones de calentadores.",
						"vietnamese": "Từ bộ quần áo của anh ta, những gói giữ nhiệt tuôn ra.",
						"thai": "จากชุดที่เขาล้มลง ก้อนถุงร้อนก็ร่วงหล่นออกมา",
						"hindi": "उसके गिरे हुए कपड़ों से, हीट पैक के बंडल बाहर निकल आए।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "핫팩?! 저게 뭐야! 설산의 왕이 핫팩을…?!",
						"english": "Heat packs?! What are those! The King of Snow Mountain... with heat packs?!",
						"japanese": "カイロ？！あれは何だ！雪山の王がカイロを…？！",
						"chinese": "暖宝宝？！那是什么！雪山之王竟然用暖宝宝…？！",
						"french": "Chaufferettes ?! C'est quoi ça ! Le Roi de la Montagne de Neige... avec des chaufferettes ?!",
						"spanish": "¡¿Calentadores?! ¡¿Qué son esos?! ¡¿El Rey de la Montaña Nevada... con calentadores?!",
						"vietnamese": "Gói giữ nhiệt?! Cái gì thế kia! Vị Vua Núi Tuyết lại dùng gói giữ nhiệt...?!",
						"thai": "ถุงร้อน?! นั่นมันอะไรน่ะ! ราชาแห่งภูเขาหิมะ...มีถุงร้อนเหรอ?!",
						"hindi": "हीट पैक?! वह क्या है! हिम पर्वत का राजा... हीट पैक के साथ?!"
					}
				},
				{
					"speaker": "boris",
					"content": {
						"korean": "핫팩 뭉치?! 전하, 이것은…!",
						"english": "Bundles of heat packs?! Your Highness, this is...!",
						"japanese": "カイロの束？！殿下、これは…！",
						"chinese": "成捆的暖宝宝？！殿下，这…！",
						"french": "Des paquets de chaufferettes ?! Votre Altesse, c'est... !",
						"spanish": "¡¿Montones de calentadores?! ¡Su Alteza, esto es...!",
						"vietnamese": "Gói giữ nhiệt?! Điện hạ, đây là...!",
						"thai": "ก้อนถุงร้อน?! ฝ่าบาท นี่มัน...!",
						"hindi": "हीट पैक के बंडल?! महाराज, यह तो...!"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아… 아니야! 이건 그저… 나의 품위를 지키기 위한…!",
						"english": "N-no...! These are just... to maintain my dignity...!",
						"japanese": "あ…違う！これはただ…私の威厳を守るための…！",
						"chinese": "不…不是！这只是…为了维护我的尊严…！",
						"french": "N-non ! Ce n'est que... pour maintenir ma dignité... !",
						"spanish": "N-no...! ¡Esto es solo... para mantener mi dignidad...!",
						"vietnamese": "K-không...! Đây chỉ là... để duy trì phẩm giá của ta...!",
						"thai": "อ...ไม่ใช่! นี่มันแค่...เพื่อรักษาศักดิ์ศรีของข้า...!",
						"hindi": "न-नहीं...! ये तो बस... मेरी गरिमा बनाए रखने के लिए हैं...!"
					},
					"emotion": "sad",
					"speaker": "boss"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그의 허세 뒤에 숨겨진 진실이 얼음처럼 깨졌다.",
						"english": "The truth hidden behind his bravado shattered like ice.",
						"japanese": "彼の虚勢の裏に隠された真実が、氷のように砕け散った。",
						"chinese": "他虚张声势背后隐藏的真相，如冰般破碎了。",
						"french": "La vérité cachée derrière son bluff se brisa comme de la glace.",
						"spanish": "La verdad oculta tras su fanfarronería se hizo añicos como el hielo.",
						"vietnamese": "Sự thật ẩn sau vẻ ngoài khoa trương của anh ta vỡ tan như băng.",
						"thai": "ความจริงที่ซ่อนอยู่เบื้องหลังความโอ้อวดของเขา แตกสลายเหมือนน้ำแข็ง",
						"hindi": "उसके दिखावे के पीछे छिपा सच बर्फ की तरह टूट गया।"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "눈보라가 몰아치며 탐험대의 시야를 가렸다.",
						"english": "A fierce blizzard swept in, blinding the expedition team.",
						"japanese": "猛吹雪が吹き荒れ、探検隊の視界を遮った。",
						"chinese": "暴风雪肆虐，遮蔽了探险队的视线。",
						"french": "Un blizzard a fait rage, aveuglant l'équipe d'exploration.",
						"spanish": "Una ventisca furiosa cegó al equipo de expedición.",
						"vietnamese": "Một trận bão tuyết dữ dội ập đến, che khuất tầm nhìn của đội thám hiểm.",
						"thai": "พายุหิมะโหมกระหน่ำ บดบังทัศนวิสัยของทีมสำรวจ",
						"hindi": "बर्फीले तूफान ने भयंकर रूप ले लिया, जिससे अभियान दल की दृष्टि बाधित हो गई।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "크하하! 이 추위를 이길 수는 없지! 너희는 그저… 약할 뿐!",
						"english": "Kwahaha! You can't defeat this cold! You are merely... weak!",
						"japanese": "「クハハ！この寒さには勝てまい！お前たちはただ…弱いだけだ！」",
						"chinese": "「哈哈！你们赢不了这寒冷！你们只是……太弱了！」",
						"french": "« Kwahaha ! Vous ne pouvez pas vaincre ce froid ! Vous n'êtes que… faibles ! »",
						"spanish": "« ¡Jajaja! ¡No pueden vencer este frío! ¡Ustedes solo son... débiles! »",
						"vietnamese": "« Khahaha! Ngươi không thể thắng được cái lạnh này! Các ngươi chỉ là… yếu ớt mà thôi! »",
						"thai": "« คิกคิก! เจ้าไม่มีทางเอาชนะความหนาวนี้ได้! พวกเจ้าก็แค่... อ่อนแอ! »",
						"hindi": "« खहाहा! तुम इस ठंड को नहीं हरा सकते! तुम बस… कमजोर हो! »"
					},
					"speaker": "boss"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "겨우 이런 눈덩이에 질 우리가 아니야! 다시 간다!",
						"english": "We won't be defeated by a mere snowball! We're going again!",
						"japanese": "「こんな雪の塊ごときに負ける俺たちじゃない！もう一度行くぞ！」",
						"chinese": "「我们不会被区区雪球打败！我们再来！」",
						"french": "« Nous ne nous laisserons pas vaincre par une simple boule de neige ! Nous y retournons ! »",
						"spanish": "« ¡No nos rendiremos ante una simple bola de nieve! ¡Volvemos a la carga! »",
						"vietnamese": "« Chúng ta sẽ không thua chỉ vì một cục tuyết như thế này! Chúng ta sẽ đi tiếp! »",
						"thai": "« แค่นี้จะมาเอาชนะพวกเราไม่ได้! ไปกันอีกครั้ง! »",
						"hindi": "« हम ऐसे बर्फ के गोले से हारने वाले नहीं हैं! हम फिर से जाएंगे! »"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"차가운 얼음 왕국에, 한 줄기 온기가 스며들었다.",
			"왕관은 떨어졌고, '설산의 왕'은 그저 외로운 펭귄이었다.",
			"진실은 잔혹했으나, 설산은 오랜만에 평화를 되찾았다.",
			"그의 이야기는 여기서 끝나지 않았다. 또 다른 시작을 예고하며."
		],
		"english": [
			"Into the cold ice kingdom, a ray of warmth seeped in.",
			"The crown fell, and the 'King of the Snow Mountain' was merely a lonely penguin.",
			"The truth was cruel, but the snow mountain found peace after a long time.",
			"His story didn't end here, foreshadowing another beginning."
		],
		"japanese": [
			"冷たい氷の王国に、一筋の温もりが染み込んだ。",
			"王冠は落ち、｢雪山の王｣はただの孤独なペンギンだった。",
			"真実は残酷だったが、雪山は久しぶりに平和を取り戻した。",
			"彼の物語はここで終わらなかった。また別の始まりを予感させながら。"
		],
		"chinese": [
			"一缕温暖渗入了寒冷的冰雪王国。",
			"王冠坠落，“雪山之王”不过是一只孤独的企鹅。",
			"真相残酷，但雪山久违地恢复了平静。",
			"他的故事并未在此结束，预示着另一个开始。"
		],
		"french": [
			"Dans le royaume de glace froid, un rayon de chaleur s'est infiltré.",
			"La couronne tomba, et le « Roi de la Montagne de Neige » n'était qu'un simple pingouin solitaire.",
			"La vérité était cruelle, mais la montagne enneigée retrouva la paix après un long moment.",
			"Son histoire ne se termina pas ici, annonçant un autre commencement."
		],
		"spanish": [
			"En el frío reino de hielo, un rayo de calidez se infiltró.",
			"La corona cayó, y el \"Rey de la Montaña de Nieve\" era simplemente un pingüino solitario.",
			"La verdad era cruel, pero la montaña nevada recuperó la paz después de mucho tiempo.",
			"Su historia no terminó aquí, presagiando otro comienzo."
		],
		"vietnamese": [
			"Vào vương quốc băng giá lạnh lẽo, một tia ấm áp đã len lỏi vào.",
			"Vương miện rơi xuống, và 'Vua của Núi Tuyết' chỉ là một chú chim cánh cụt cô đơn.",
			"Sự thật thật tàn khốc, nhưng núi tuyết đã tìm lại được bình yên sau một thời gian dài.",
			"Câu chuyện của anh ấy không kết thúc ở đây, báo trước một khởi đầu khác."
		],
		"thai": [
			"สู่ดินแดนน้ำแข็งอันเยือกเย็น แสงแห่งความอบอุ่นได้แทรกซึมเข้ามา",
			"มงกุฎร่วงหล่น และ 'ราชาแห่งภูเขาหิมะ' ก็เป็นเพียงเพนกวินโดดเดี่ยวตัวหนึ่ง",
			"ความจริงนั้นโหดร้าย แต่ภูเขาหิมะก็กลับมาสงบสุขอีกครั้งหลังจากเวลานาน",
			"เรื่องราวของเขาไม่ได้จบลงที่นี่ เป็นลางบอกถึงการเริ่มต้นครั้งใหม่"
		],
		"hindi": [
			"ठंडे बर्फीले राज्य में, एक किरण की गर्माहट समा गई।",
			"मुकुट गिर गया, और 'बर्फीली पर्वतमाला का राजा' केवल एक अकेला पेंग्विन था।",
			"सच क्रूर था, लेकिन बर्फीली पर्वतमाला ने लंबे समय बाद शांति प्राप्त की।",
			"उसकी कहानी यहीं खत्म नहीं हुई, एक और शुरुआत की भविष्यवाणी करते हुए।"
		]
	},
	"prologue": {
		"korean": [
			"얼어붙은 설산의 심장, 그곳에 '설산의 왕'이 있었다.",
			"과장된 허세 뒤에 숨겨진 진실. 그 실체가 드러날 순간.",
			"차가운 왕좌는 흔들리고, 왕의 필살기가 전조를 보였다.",
			"마지막 결전, 모든 미스터리가 풀리는 클라이맥스의 서막."
		],
		"english": [
			"In the heart of the frozen snow mountain, there was the 'King of the Snow Mountain'.",
			"The truth hidden behind exaggerated bravado. The moment its true nature is revealed.",
			"The cold throne trembled, and the King's ultimate move showed its prelude.",
			"The final showdown, the prelude to a climax where all mysteries are unraveled."
		],
		"japanese": [
			"凍てつく雪山の心臓、そこに「雪山の王」がいた。",
			"誇張された虚勢の裏に隠された真実。その実体が明らかになる瞬間。",
			"冷たい玉座は揺らぎ、王の必殺技が前兆を示した。",
			"最後の決戦、すべての謎が解き明かされるクライマックスの序幕。"
		],
		"chinese": [
			"在冰冻雪山的心脏地带，那里有“雪山之王”。",
			"夸张的虚张声势背后隐藏的真相。其真面目即将揭晓的时刻。",
			"冰冷的王座摇摇欲坠，国王的绝招预示着前奏。",
			"最后的决战，所有谜团解开的高潮序幕。"
		],
		"french": [
			"Au cœur de la montagne enneigée et gelée, se trouvait le « Roi de la Montagne de Neige ».",
			"La vérité cachée derrière une bravade exagérée. Le moment où sa véritable nature sera révélée.",
			"Le trône froid tremblait, et l'ultime mouvement du Roi annonçait son prélude.",
			"L'ultime confrontation, le prélude à un climax où tous les mystères sont révélés."
		],
		"spanish": [
			"En el corazón de la montaña nevada y helada, habitaba el \"Rey de la Montaña de Nieve\".",
			"La verdad oculta tras una bravuconada exagerada. El momento en que su verdadera naturaleza se revela.",
			"El frío trono tembló, y el ataque definitivo del Rey mostró su preludio.",
			"La confrontación final, el preludio de un clímax donde todos los misterios se desvelan."
		],
		"vietnamese": [
			"Trong trái tim của ngọn núi tuyết đóng băng, có 'Vua của Núi Tuyết'.",
			"Sự thật ẩn giấu sau vẻ phô trương thái quá. Khoảnh khắc bản chất thực sự của nó được tiết lộ.",
			"Ngai vàng lạnh lẽo rung chuyển, và chiêu cuối của Vua đã báo trước.",
			"Trận chiến cuối cùng, khúc dạo đầu của một cao trào nơi mọi bí ẩn được hé lộ."
		],
		"thai": [
			"ณ ใจกลางของภูเขาหิมะอันเยือกแข็ง ที่นั่นมี 'ราชาแห่งภูเขาหิมะ'",
			"ความจริงที่ซ่อนอยู่เบื้องหลังความโอ้อวดเกินจริง ช่วงเวลาที่ความจริงจะถูกเปิดเผย",
			"บัลลังก์อันเยือกเย็นสั่นสะเทือน และท่าไม้ตายของราชาได้แสดงสัญญาณเริ่มต้น",
			"การเผชิญหน้าครั้งสุดท้าย บทนำของจุดสุดยอดที่ทุกความลึกลับจะถูกคลี่คลาย"
		],
		"hindi": [
			"जमी हुई बर्फीली पर्वतमाला के हृदय में, 'बर्फीली पर्वतमाला का राजा' था।",
			"अतिशयोक्तिपूर्ण दिखावे के पीछे छिपा सच। वह पल जब उसकी असलियत सामने आएगी।",
			"ठंडा सिंहासन डगमगाया, और राजा के अंतिम दांव ने अपनी प्रस्तावना दिखाई।",
			"अंतिम मुकाबला, एक चरमोत्कर्ष की प्रस्तावना जहाँ सभी रहस्य उजागर होते हैं।"
		]
	}
} as const;
