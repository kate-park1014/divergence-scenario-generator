export const scenario_hell_lordfluff_15_02 = {
	"scenario_id": "hell_lordfluff_15_02",
	"order": 2,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"brim": {
			"id": "mon_d7f57824-190d-40b9-93d1-66c658f0441f",
			"name": {
				"korean": "브림",
				"english": "Brim",
				"japanese": "ブリム",
				"chinese": "布里姆",
				"french": "Brim",
				"spanish": "Brim",
				"vietnamese": "Brim",
				"thai": "บริม",
				"hindi": "ब्रिम"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/08ad0e4d-214d-43b3-dc3e-ddfba9049300/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/16f1def2-7c33-4558-4b21-9c3e87fa3e00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "지옥의 붉은 흙먼지 속, 낯선 존재가 나타났다.",
						"english": "Amidst Hell's red dust, a strange presence appeared.",
						"japanese": "地獄の赤い土埃の中、見慣れない存在が現れた。",
						"chinese": "在地狱的红色尘土中，一个陌生的存在出现了。",
						"french": "Au milieu de la poussière rouge de l'Enfer, une présence étrange apparut.",
						"spanish": "Entre el polvo rojo del Infierno, una extraña presencia apareció.",
						"vietnamese": "Giữa bụi đỏ địa ngục, một sự hiện diện lạ lùng xuất hiện.",
						"thai": "ท่ามกลางผงฝุ่นสีแดงของนรก ปรากฏร่างแปลกหน้าขึ้น",
						"hindi": "नर्क की लाल धूल में, एक अजीब उपस्थिति प्रकट हुई।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…넌 누구지?",
						"english": "...Who are you?",
						"japanese": "…お前は誰だ？",
						"chinese": "……你是谁？",
						"french": "...Qui es-tu ?",
						"spanish": "...¿Quién eres?",
						"vietnamese": "...Ngươi là ai?",
						"thai": "...เจ้าคือใคร?",
						"hindi": "...तुम कौन हो?"
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "brim"
				},
				{
					"speaker": "brim",
					"type": "speech",
					"content": {
						"korean": "겁도 없이 '악마 군주'의 땅을 밟다니! 나는 브림. 그분의 위대한 하수인이다!",
						"english": "How dare you tread upon the 'Demon Lord's' land! I am Brim, his great minion!",
						"japanese": "恐れも知らず「悪魔君主」の地を踏むとは！私はブリム、彼の偉大なる手下だ！",
						"chinese": "竟敢踏足“恶魔君主”的领地！我是布林，他伟大的仆从！",
						"french": "Comment oses-tu fouler la terre du « Seigneur Démon » ! Je suis Brim, son grand serviteur !",
						"spanish": "¡Cómo te atreves a pisar la tierra del \"Señor Demonio\"! ¡Soy Brim, su gran esbirro!",
						"vietnamese": "Ngươi dám đặt chân lên đất của 'Chúa Quỷ' sao! Ta là Brim, thuộc hạ vĩ đại của Ngài!",
						"thai": "กล้าดียังไงมาเหยียบย่ำดินแดนของ 'จอมมาร'! ข้าคือบริม ผู้รับใช้ผู้ยิ่งใหญ่ของเขา!",
						"hindi": "'दानव प्रभु' की भूमि पर कदम रखने की तुम्हारी हिम्मत कैसे हुई! मैं ब्रिम हूँ, उनका महान सेवक!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "brim",
					"type": "speech",
					"content": {
						"korean": "곧 그분의 심판이 시작될 것이다. 어서 도망쳐라!",
						"english": "His judgment will soon begin. Flee at once!",
						"japanese": "間もなく彼の裁きが始まるだろう。早く逃げろ！",
						"chinese": "他的审判即将开始。快逃吧！",
						"french": "Son jugement commencera bientôt. Fuis immédiatement !",
						"spanish": "Su juicio comenzará pronto. ¡Huye de inmediato!",
						"vietnamese": "Sự phán xét của Ngài sẽ sớm bắt đầu. Mau chạy đi!",
						"thai": "การพิพากษาของเขาจะเริ่มขึ้นในไม่ช้า จงหนีไปซะ!",
						"hindi": "उनका न्याय जल्द ही शुरू होगा। तुरंत भाग जाओ!"
					},
					"emotion": "sad"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 550,
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "brim"
				},
				{
					"speaker": "brim",
					"type": "speech",
					"content": {
						"korean": "아직도 여기 있나! 그분의 그림자가 너를 덮칠 것이다!",
						"english": "Still here?! His shadow will engulf you!",
						"japanese": "まだここにいるのか！彼の影がお前を覆い尽くすだろう！",
						"chinese": "竟然还在这里？！他的影子会吞噬你！",
						"french": "Toujours là ?! Son ombre t'engloutira !",
						"spanish": "¡¿Todavía aquí?! ¡Su sombra te engullirá!",
						"vietnamese": "Vẫn còn ở đây sao?! Bóng của Ngài sẽ bao trùm ngươi!",
						"thai": "ยังอยู่ที่นี่อีกรึ?! เงาของเขาจะกลืนกินเจ้า!",
						"hindi": "अभी भी यहाँ हो?! उनकी छाया तुम्हें निगल जाएगी!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그 '군주'라는 자, 도대체 뭐지?",
						"english": "That 'Lord' fellow, what exactly is he?",
						"japanese": "その「君主」という者、一体何者だ？",
						"chinese": "那个“君主”到底是什么？",
						"french": "Ce « Seigneur », qu'est-il exactement ?",
						"spanish": "Ese tipo, el \"Señor\", ¿qué es exactamente?",
						"vietnamese": "Cái tên 'Chúa Tể' đó, rốt cuộc là gì?",
						"thai": "ไอ้ 'ท่านลอร์ด' นั่น มันคืออะไรกันแน่?",
						"hindi": "वह 'प्रभु' नामक व्यक्ति, आखिर वह क्या है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "감히 그분의 이름을 함부로 말하는가! 그분은 절대자! 모든 지옥을 지배하는 유일한 존재!",
						"english": "How dare you utter His name so carelessly! He is the Absolute! The sole ruler of all Hells!",
						"japanese": "よくもその御名を軽々しく口にしたな！あのお方は絶対者！全ての地獄を統べる唯一の存在だ！",
						"chinese": "你竟敢如此轻率地提及祂的名讳！祂是绝对者！唯一一位统治所有地狱的存在！",
						"french": "Comment oses-tu prononcer Son nom si négligemment ! Il est l'Absolu ! L'unique souverain de tous les Enfers !",
						"spanish": "¡Cómo te atreves a pronunciar Su nombre tan a la ligera! ¡Él es el Absoluto! ¡El único gobernante de todos los Infiernos!",
						"vietnamese": "Ngươi dám tùy tiện nhắc đến tên Người! Người là Đấng Tuyệt Đối! Sự tồn tại duy nhất cai trị mọi địa ngục!",
						"thai": "บังอาจเอ่ยนามของพระองค์โดยไม่คิดหน้าคิดหลัง! พระองค์คือที่สุด! ผู้ปกครองเพียงหนึ่งเดียวแห่งขุมนรกทั้งปวง!",
						"hindi": "तेरी हिम्मत कैसे हुई उसका नाम लापरवाही से लेने की! वह परमेश्वर है! सभी नर्क का एकमात्र शासक!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "brim"
				},
				{
					"speaker": "brim",
					"type": "speech",
					"content": {
						"korean": "그분의 힘은 네 상상을 초월한다! 당장 무릎 꿇어라!",
						"english": "His power transcends your imagination! Kneel now!",
						"japanese": "あのお方の力は貴様の想像を遥かに超える！今すぐひざまずけ！",
						"chinese": "祂的力量超越你的想象！立刻跪下！",
						"french": "Son pouvoir transcende ton imagination ! Agenouille-toi immédiatement !",
						"spanish": "¡Su poder trasciende tu imaginación! ¡Arrodíllate ahora mismo!",
						"vietnamese": "Sức mạnh của Người vượt xa sức tưởng tượng của ngươi! Quỳ xuống ngay!",
						"thai": "พลังของพระองค์เหนือกว่าจินตนาการของเจ้า! คุกเข่าเดี๋ยวนี้!",
						"hindi": "उसकी शक्ति तेरी कल्पना से परे है! अभी घुटने टेक!"
					},
					"emotion": "angry"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"duration_ms": 480,
					"type": "direction",
					"speaker": "brim",
					"action": "enter",
					"spot": [
						3,
						3
					]
				},
				{
					"speaker": "brim",
					"content": {
						"korean": "크하하! 어리석은 인간! 네가 감히 어디까지 가려 하는가?",
						"english": "Hahaha! Foolish mortal! How far do you dare to go?",
						"japanese": "クハハハ！愚かな人間め！貴様が一体どこまで行こうというのか？",
						"chinese": "哈哈哈！愚蠢的人类！你竟敢走到哪一步？",
						"french": "Hahaha ! Mortel insensé ! Jusqu'où oses-tu aller ?",
						"spanish": "¡Jajaja! ¡Humano estúpido! ¿Hasta dónde te atreves a llegar?",
						"vietnamese": "Khahaha! Con người ngu ngốc! Ngươi dám đi đến đâu?",
						"thai": "คิกคิก! มนุษย์โง่เขลา! เจ้ากล้าไปได้ถึงไหนกัน?",
						"hindi": "हाहाहा! मूर्ख इंसान! तू कहाँ तक जाने की हिम्मत करता है?"
					},
					"emotion": "happy",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네가 말하는 '힘'이라는 게 겨우 이 정도인가?",
						"english": "Is this all the 'power' you speak of?",
						"japanese": "貴様が言う『力』とやらは、たったこれしきのことか？",
						"chinese": "你所说的‘力量’就只有这点吗？",
						"french": "Est-ce là toute la 'force' dont tu parles ?",
						"spanish": "¿Es esto todo el 'poder' del que hablas?",
						"vietnamese": "Cái gọi là 'sức mạnh' của ngươi chỉ có đến thế thôi sao?",
						"thai": " 'พลัง' ที่เจ้าพูดถึงมีแค่นี้เองรึ?",
						"hindi": "जिस 'शक्ति' की तू बात करता है, क्या वह बस इतनी ही है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "brim",
					"type": "speech",
					"content": {
						"korean": "무, 무슨 소리냐! 이 브림의 힘은… 위대하신 군주님의 대리자로서…!",
						"english": "Wh-what nonsense! Brim's power... as the great Lord's proxy...!",
						"japanese": "な、何を言うか！このブリムの力は…偉大なる主君の代理として…！",
						"chinese": "什、什么胡说八道！我布里姆的力量……作为伟大领主的代理人……！",
						"french": "Qu-quelle absurdité ! Le pouvoir de Brim... en tant que représentant du grand Seigneur... !",
						"spanish": "¡Q-qué tonterías! ¡El poder de este Brim... como representante del gran Señor...!",
						"vietnamese": "Cái, cái gì chứ! Sức mạnh của Brim này... với tư cách là đại diện của Chúa tể vĩ đại...!",
						"thai": "อะ... อะไรนะ! พลังของบริมผู้นี้... ในฐานะผู้แทนขององค์จอมทัพผู้ยิ่งใหญ่...!",
						"hindi": "क-क्या बकवास है! इस ब्रिम की शक्ति... महान प्रभु के प्रतिनिधि के रूप में...!"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "어딘가 이상해. 네 말과 행동이 따로 노는군.",
						"english": "Something's off. Your words and actions don't match.",
						"japanese": "何かおかしいな。貴様の言動が一致しない。",
						"chinese": "有些不对劲。你的言行不一。",
						"french": "Il y a quelque chose qui cloche. Tes paroles et tes actes ne concordent pas.",
						"spanish": "Algo anda mal. Tus palabras y tus acciones no concuerdan.",
						"vietnamese": "Có gì đó không ổn. Lời nói và hành động của ngươi không nhất quán.",
						"thai": "มีบางอย่างผิดปกติ. คำพูดกับการกระทำของเจ้าไม่ตรงกันเลย.",
						"hindi": "कुछ गड़बड़ है। तेरे शब्द और कर्म मेल नहीं खाते।"
					},
					"emotion": "base"
				},
				{
					"speaker": "brim",
					"content": {
						"korean": "닥쳐라! 곧 알게 될 것이다! 그분의 진정한 분노를!",
						"english": "Shut up! You'll soon witness! His true wrath!",
						"japanese": "黙れ！すぐに知ることになる！あのお方の真の怒りを！",
						"chinese": "闭嘴！你很快就会知道！祂真正的愤怒！",
						"french": "Tais-toi ! Tu vas bientôt connaître ! Sa véritable colère !",
						"spanish": "¡Cállate! ¡Pronto conocerás! ¡Su verdadera ira!",
						"vietnamese": "Im đi! Ngươi sẽ sớm biết thôi! Sự phẫn nộ thực sự của Người!",
						"thai": "หุบปากซะ! เจ้าจะได้รู้เอง! ความโกรธแค้นที่แท้จริงของพระองค์!",
						"hindi": "चुप कर! तुम्हें जल्द ही पता चलेगा! उसका असली क्रोध!"
					},
					"emotion": "angry",
					"type": "speech"
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
					"action": "enter",
					"speaker": "brim",
					"type": "direction",
					"duration_ms": 520
				},
				{
					"type": "speech",
					"content": {
						"korean": "더 이상은 못 간다! 여기부터는 그분의 진정한 영역이다!",
						"english": "No further! From here, it's His true domain!",
						"japanese": "これ以上は行かせない！ここからはあのお方の真の領域だ！",
						"chinese": "不能再往前了！从这里开始就是祂的真正领域！",
						"french": "Pas plus loin ! À partir d'ici, c'est Son véritable domaine !",
						"spanish": "¡No más lejos! ¡A partir de aquí, es Su verdadero dominio!",
						"vietnamese": "Không thể đi xa hơn nữa! Từ đây trở đi là lãnh địa thật sự của Người!",
						"thai": "ไปต่อไม่ได้แล้ว! จากตรงนี้ไปคืออาณาเขตที่แท้จริงของพระองค์!",
						"hindi": "अब और आगे नहीं जा सकते! यहाँ से उसका असली क्षेत्र शुरू होता है!"
					},
					"emotion": "sad",
					"speaker": "brim"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "진정한 영역? 네가 아니라?",
						"english": "True domain? Not yours?",
						"japanese": "真の領域？貴様のではなく？",
						"chinese": "真正的领域？而不是你的？",
						"french": "Son véritable domaine ? Pas le tien ?",
						"spanish": "¿Su verdadero dominio? ¿No el tuyo?",
						"vietnamese": "Lãnh địa thật sự ư? Không phải của ngươi sao?",
						"thai": "อาณาเขตที่แท้จริง? ไม่ใช่ของเจ้าหรือ?",
						"hindi": "असली क्षेत्र? तेरा नहीं?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "감히…! 감히 나를 의심하는가! 너는 그분의 심기를 거스르고 있다!",
						"english": "How dare you...! How dare you doubt me! You are defying His will!",
						"japanese": "よくも…！よくもこの私を疑うか！貴様はあのお方の御心に逆らっている！",
						"chinese": "你竟敢……！你竟敢怀疑我！你正在违抗祂的旨意！",
						"french": "Comment oses-tu... ! Comment oses-tu me douter ! Tu défies Sa volonté !",
						"spanish": "¡Cómo te atreves...! ¡Cómo te atreves a dudar de mí! ¡Estás desafiando Su voluntad!",
						"vietnamese": "Ngươi dám...! Ngươi dám nghi ngờ ta! Ngươi đang làm trái ý Người!",
						"thai": "บังอาจ... ! บังอาจสงสัยข้าหรือ! เจ้ากำลังขัดพระประสงค์ของพระองค์!",
						"hindi": "तेरी हिम्मत कैसे हुई...! तेरी हिम्मत कैसे हुई मुझ पर शक करने की! तुम उसकी इच्छा के विरुद्ध जा रहे हो!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "brim"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "헛소리 마. 너희 '군주'는 대체 어디에 있는 거지?",
						"english": "Enough nonsense. Where is your 'Lord' anyway?",
						"japanese": "戯言はよせ。お前たちの『君主』は一体どこにいる？",
						"chinese": "别胡说八道了。你们的“君主”到底在哪儿？",
						"french": "Assez de bêtises. Où est donc votre 'Seigneur' ?",
						"spanish": "Basta de tonterías. ¿Dónde está vuestro 'Señor'?",
						"vietnamese": "Đừng nói nhảm. 'Chúa tể' của các ngươi rốt cuộc ở đâu?",
						"thai": "เลิกพล่ามไร้สาระเสียที 'นายท่าน' ของพวกเจ้าอยู่ที่ไหนกันแน่?",
						"hindi": "बकवास बंद करो। तुम्हारा 'स्वामी' कहाँ है?"
					},
					"emotion": "angry"
				},
				{
					"speaker": "brim",
					"type": "speech",
					"content": {
						"korean": "닥쳐! 너 같은 건… {random_boss}님이 처리할 것이다! 크아악!",
						"english": "Shut up! Someone like you... {random_boss} will deal with! Graaah!",
						"japanese": "黙れ！貴様のような奴は… {random_boss}様が始末する！くあああ！",
						"chinese": "闭嘴！你这种货色… {random_boss}大人会解决的！啊啊啊！",
						"french": "Tais-toi ! Quelqu'un comme toi... {random_boss} s'en occupera ! Graaaah !",
						"spanish": "¡Cállate! ¡Alguien como tú... {random_boss} se encargará! ¡Grraaaah!",
						"vietnamese": "Câm miệng! Kẻ như ngươi... {random_boss} sẽ xử lý! Áaaaa!",
						"thai": "หุบปาก! คนอย่างเจ้า... {random_boss} จะจัดการเอง! กรี๊ดดดด!",
						"hindi": "चुप हो जा! तुम जैसे को... {random_boss} संभाल लेंगे! क्रुआआक!"
					},
					"emotion": "angry"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 다시 우뚝 섰다.",
						"english": "The colossal shadow rose again.",
						"japanese": "巨大な影が再びそびえ立った。",
						"chinese": "巨大的阴影再次耸立。",
						"french": "L'ombre colossale se dressa de nouveau.",
						"spanish": "La sombra colosal se alzó de nuevo.",
						"vietnamese": "Bóng đen khổng lồ lại một lần nữa sừng sững.",
						"thai": "เงาอันมหึมาตระหง่านขึ้นอีกครั้ง",
						"hindi": "विशालकाय छाया फिर से खड़ी हो गई।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "하찮은 것… 감히… 나에게 대항하려 하다니.",
						"english": "Insignificant one... How dare you... defy me.",
						"japanese": "取るに足らない者め… よくも… 我に逆らおうとは。",
						"chinese": "渺小的东西… 竟敢… 挑战我。",
						"french": "Misérable... Comment oses-tu... me défier.",
						"spanish": "Insignificante... ¿Cómo osas... desafiarme?",
						"vietnamese": "Kẻ hèn mọn... Sao ngươi dám... chống đối ta.",
						"thai": "เจ้าสิ่งไร้ค่า... บังอาจ... มาต่อต้านข้าได้อย่างไร",
						"hindi": "तुच्छ प्राणी... तुम्हारी हिम्मत कैसे हुई... मुझसे लड़ने की।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…이런 시시한 허세에 당할 줄 알아?",
						"english": "...Do you think I'd fall for such a petty bluff?",
						"japanese": "…こんなくだらない虚勢に騙されるとでも？",
						"chinese": "…你以为我会上这种无聊的虚张声势的当吗？",
						"french": "...Tu crois que je vais tomber dans un bluff aussi minable ?",
						"spanish": "...¿Crees que caeré en una fanfarronada tan insignificante?",
						"vietnamese": "...Ngươi nghĩ ta sẽ mắc lừa những lời khoác lác vặt vãnh này sao?",
						"thai": "...เจ้าคิดว่าจะหลอกข้าด้วยการโอ้อวดไร้สาระแบบนี้ได้หรือ?",
						"hindi": "...क्या तुम्हें लगता है कि मैं ऐसी तुच्छ हेकड़ी में फँस जाऊँगा?"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "다시 도전해라. 네 절망은 나의 힘이 될 것이다.",
						"english": "Challenge again. Your despair will become my strength.",
						"japanese": "再び挑め。お前の絶望は、我が力となるだろう。",
						"chinese": "再次挑战吧。你的绝望将成为我的力量。",
						"french": "Défie-moi à nouveau. Ton désespoir deviendra ma force.",
						"spanish": "Desafía de nuevo. Tu desesperación se convertirá en mi fuerza.",
						"vietnamese": "Hãy thách đấu lại. Nỗi tuyệt vọng của ngươi sẽ trở thành sức mạnh của ta.",
						"thai": "จงท้าทายอีกครั้ง ความสิ้นหวังของเจ้าจะกลายเป็นพลังของข้า",
						"hindi": "फिर से चुनौती दो। तुम्हारी निराशा मेरी शक्ति बनेगी।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				}
			],
			"win_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 허무하게 스러졌다.",
						"english": "The colossal shadow fell in vain.",
						"japanese": "巨大な影は虚しく倒れ伏した。",
						"chinese": "巨大的身影徒劳地倒下了。",
						"french": "L'ombre colossale s'effondra en vain.",
						"spanish": "La sombra colosal se desvaneció en vano.",
						"vietnamese": "Bóng đen khổng lồ sụp đổ một cách vô vọng.",
						"thai": "เงาขนาดมหึมาล้มลงอย่างว่างเปล่า",
						"hindi": "विशाल छाया व्यर्थ ही गिर गई।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "크윽… 나는… 그저… 명령대로…!",
						"english": "Kugh... I... merely... followed orders...!",
						"japanese": "ぐっ… 私は…ただ…命令通りに…！",
						"chinese": "咳… 我… 只是… 按命令行事…！",
						"french": "Ugh... Je... juste... selon les ordres... !",
						"spanish": "Ugh... Yo... solo... siguiendo órdenes...!",
						"vietnamese": "Khụ... Ta... chỉ là... theo lệnh...!",
						"thai": "อึก... ข้า... เพียงแค่... ทำตามคำสั่ง...!",
						"hindi": "उफ़... मैं... बस... आदेशों का... पालन कर रहा था...!"
					},
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "명령? 누가 널 조종했지?",
						"english": "Orders? Who controlled you?",
						"japanese": "命令？誰がお前を操った？",
						"chinese": "命令？谁在操纵你？",
						"french": "Des ordres ? Qui te contrôlait ?",
						"spanish": "¿Órdenes? ¿Quién te controlaba?",
						"vietnamese": "Mệnh lệnh? Ai đã điều khiển ngươi?",
						"thai": "คำสั่ง? ใครบงการเจ้า?",
						"hindi": "आदेश? तुम्हें किसने नियंत्रित किया?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "지옥의 공포는 실체 없는 허상이었다. 그러나 그 뒤에 숨겨진 진실은 더욱 깊은 곳에 있었다.",
						"english": "The horror of hell was an illusory phantom. But the truth hidden behind it lay deeper.",
						"japanese": "地獄の恐怖は実体のない幻影だった。しかし、その裏に隠された真実はもっと深かった。",
						"chinese": "地狱的恐惧只是虚无的幻象。然而，隐藏其后的真相却更为深远。",
						"french": "L'horreur de l'enfer n'était qu'un fantôme illusoire. Mais la vérité cachée derrière se trouvait bien plus profondément.",
						"spanish": "El horror del infierno era un fantasma ilusorio. Pero la verdad oculta tras él yacía en lo más profundo.",
						"vietnamese": "Nỗi kinh hoàng của địa ngục chỉ là ảo ảnh không có thực thể. Tuy nhiên, sự thật ẩn giấu đằng sau còn sâu xa hơn nhiều.",
						"thai": "ความน่าสะพรึงกลัวของนรกเป็นเพียงภาพลวงตาที่ไม่มีอยู่จริง แต่ความจริงที่ซ่อนอยู่เบื้องหลังนั้นลึกซึ้งกว่า",
						"hindi": "नरक का भय एक निराकार भ्रम था। लेकिन उसके पीछे छिपा सत्य और भी गहरा था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "주인공의 의심은 확신으로 변했다. 과장된 위협은 이제 시작에 불과했다.",
						"english": "The protagonist's doubt turned to certainty. The exaggerated threat was just the beginning.",
						"japanese": "主人公の疑念は確信に変わった。誇張された脅威は、まだ始まりに過ぎなかった。",
						"chinese": "主角的怀疑变成了确信。夸大的威胁，现在才刚刚开始。",
						"french": "Le doute du protagoniste se transforma en certitude. La menace exagérée n'était que le début.",
						"spanish": "La duda del protagonista se convirtió en certeza. La amenaza exagerada era solo el comienzo.",
						"vietnamese": "Sự nghi ngờ của nhân vật chính biến thành sự chắc chắn. Mối đe dọa quá mức chỉ là khởi đầu.",
						"thai": "ความสงสัยของตัวเอกแปรเปลี่ยนเป็นความแน่ใจ ภัยคุกคามที่เกินจริงนั้นเป็นเพียงจุดเริ่มต้นเท่านั้น",
						"hindi": "नायक का संदेह निश्चितता में बदल गया। अतिरंजित धमकी तो बस शुरुआत थी।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "붉은 안개 속에서 거대한 그림자가 모습을 드러냈다.",
						"english": "A colossal shadow emerged from within the red mist.",
						"japanese": "赤い霧の中から、巨大な影が姿を現した。",
						"chinese": "在红色迷雾中，一个巨大的身影显露出来。",
						"french": "Une ombre colossale émergea de la brume rouge.",
						"spanish": "Una sombra colosal emergió de la niebla roja.",
						"vietnamese": "Một bóng đen khổng lồ hiện ra từ trong màn sương đỏ.",
						"thai": "เงาขนาดมหึมาปรากฏขึ้นจากหมอกสีแดง",
						"hindi": "लाल धुंध से एक विशाल छाया निकली।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "감히 나의 영역을 침범하다니… 어리석은 것들.",
						"english": "How dare you trespass upon my domain... You fools.",
						"japanese": "よくも私の領域を侵したな…愚かな奴らめ。",
						"chinese": "竟敢侵犯我的领域… 愚蠢的东西。",
						"french": "Comment osez-vous envahir mon domaine... Imbéciles.",
						"spanish": "Cómo osáis invadir mi dominio... Estúpidos.",
						"vietnamese": "Dám xâm phạm lãnh địa của ta... Những kẻ ngu xuẩn.",
						"thai": "กล้าดียังไงมาบุกรุกอาณาเขตของข้า... พวกโง่เขลา",
						"hindi": "तुम्हारी हिम्मत कैसे हुई मेरे क्षेत्र में घुसने की... मूर्खों।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "너희 군주의 진짜 힘이 이거였나?",
						"english": "Is this truly the extent of your Lord's power?",
						"japanese": "お前たちの君主の真の力はこれだったのか？",
						"chinese": "这就是你们君主的真正力量吗？",
						"french": "Est-ce là la véritable puissance de votre Seigneur ?",
						"spanish": "¿Era este el verdadero poder de vuestro Señor?",
						"vietnamese": "Đây là sức mạnh thật sự của Chúa tể các ngươi sao?",
						"thai": "นี่คือพลังที่แท้จริงของนายท่านของเจ้าอย่างนั้นหรือ?",
						"hindi": "क्या तुम्हारे स्वामी की असली शक्ति यही थी?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "brim",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"duration_ms": 450,
					"type": "direction"
				},
				{
					"speaker": "brim",
					"type": "speech",
					"content": {
						"korean": "히, 히이익! {random_boss}님! 이 불경한 자들을 처단하여 군주님의 위대함을 증명하십시오!",
						"english": "H-h-heeegh! Lord {random_boss}! Punish these impious ones and prove the Lord's greatness!",
						"japanese": "ひ、ひいいいっ！{random_boss}様！この不敬な者たちを処断し、君主様の偉大さを証明してください！",
						"chinese": "咿，咿呀！{random_boss}大人！请您处决这些不敬之徒，证明君主大人的伟大！",
						"french": "H-h-heeek ! Seigneur {random_boss} ! Châtiez ces impies et prouvez la grandeur du Seigneur !",
						"spanish": "¡H-h-heeek! ¡Señor {random_boss}! ¡Castiga a estos impíos y demuestra la grandeza del Señor!",
						"vietnamese": "Hì, hìììi! Ngài {random_boss}! Xin hãy trừng phạt những kẻ bất kính này để chứng minh sự vĩ đại của Chúa tể!",
						"thai": "ฮึก ฮี้ก! ท่าน {random_boss}! โปรดลงโทษคนชั่วเหล่านี้และพิสูจน์ความยิ่งใหญ่ของท่านลอร์ด!",
						"hindi": "ही-हीईक! {random_boss} जी! इन अपवित्र लोगों को खत्म करके स्वामी की महानता साबित करें!"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네 허세는 여기까지다, 브림.",
						"english": "Your bravado ends here, Brim.",
						"japanese": "お前の虚勢はここまでだ、ブリム。",
						"chinese": "你的虚张声势到此为止了，布里姆。",
						"french": "Ton bluff prend fin ici, Brim.",
						"spanish": "Hasta aquí llega tu fanfarronería, Brim.",
						"vietnamese": "Trò khoe khoang của ngươi kết thúc tại đây, Brim.",
						"thai": "คำคุยโวของเจ้าจบลงแค่นี้แหละ บริม",
						"hindi": "तुम्हारी हेकड़ी यहीं खत्म होती है, ब्रिम।"
					},
					"emotion": "angry"
				},
				{
					"direction": "down",
					"duration_ms": 350,
					"type": "direction",
					"speaker": "brim",
					"action": "exit"
				},
				{
					"content": {
						"korean": "쓸데없는 소리. 네놈은 나를 거스를 수 없다.",
						"english": "Nonsense. You cannot defy me.",
						"japanese": "無駄口を。貴様は私に逆らえない。",
						"chinese": "废话。你无法违抗我。",
						"french": "Paroles vaines. Tu ne peux pas me défier.",
						"spanish": "Tonterías. No puedes desafiarme.",
						"vietnamese": "Vô nghĩa. Ngươi không thể chống lại ta.",
						"thai": "ไร้สาระ เจ้าไม่อาจขัดขืนข้าได้",
						"hindi": "बेकार की बात। तुम मेरा विरोध नहीं कर सकते।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"지옥. 겉은 번지르르한 공포로 가득 찬 세계.",
			"'악마 군주'의 이름은 어디에나 있었다. 그의 분노는 모든 것을 삼킬 거라 했다.",
			"그러나 그 과장된 그림자 속에서, 어딘가 삐걱거리는 소리가 들려왔다.",
			"거대한 허세가 서서히 균열을 드러내고 있었다."
		],
		"english": [
			"Hell. A world brimming with polished terror.",
			"The 'Demon Lord's' name was everywhere. His wrath, they said, would swallow all.",
			"Yet, within that exaggerated shadow, a faint creak was heard.",
			"The grand pretense was slowly revealing its cracks."
		],
		"japanese": [
			"地獄。外面はけばけばしい恐怖に満ちた世界。",
			"「悪魔君主」の名は至る所にあった。彼の怒りはすべてを飲み込むだろうと言われた。",
			"しかし、その誇張された影の中で、どこかから軋む音が聞こえてきた。",
			"巨大な虚勢が徐々に亀裂を露呈していた。"
		],
		"chinese": [
			"地狱。一个充满华丽恐怖的世界。",
			"“恶魔君主”之名无处不在。据说，他的愤怒将吞噬一切。",
			"然而，在那夸张的阴影中，隐约传来一阵吱呀声。",
			"巨大的虚张声势正在慢慢显露裂痕。"
		],
		"french": [
			"L'Enfer. Un monde rempli d'une terreur ostentatoire.",
			"Le nom du « Seigneur Démon » était partout. Sa colère, disait-on, engloutirait tout.",
			"Pourtant, au sein de cette ombre exagérée, un léger grincement se faisait entendre.",
			"L'immense imposture révélait lentement ses fissures."
		],
		"spanish": [
			"El Infierno. Un mundo rebosante de un terror ostentoso.",
			"El nombre del \"Señor Demonio\" estaba en todas partes. Se decía que su ira lo devoraría todo.",
			"Sin embargo, dentro de esa sombra exagerada, se escuchó un leve crujido.",
			"La gran pretensión estaba revelando lentamente sus grietas."
		],
		"vietnamese": [
			"Địa ngục. Một thế giới tràn ngập nỗi kinh hoàng hào nhoáng.",
			"Tên của 'Chúa Quỷ' có mặt khắp nơi. Cơn thịnh nộ của hắn, người ta nói, sẽ nuốt chửng tất cả.",
			"Tuy nhiên, trong cái bóng cường điệu đó, một tiếng kẽo kẹt khẽ vang lên.",
			"Vẻ phô trương vĩ đại đang dần lộ ra những vết nứt."
		],
		"thai": [
			"นรก โลกที่เต็มไปด้วยความน่าสะพรึงกลัวที่ฉาบฉวย",
			"นามของ 'จอมมาร' อยู่ในทุกหนแห่ง ว่ากันว่าความพิโรธของเขาจะกลืนกินทุกสิ่ง",
			"ทว่า ภายใต้เงาอันเกินจริงนั้น เสียงเอี๊ยดอ๊าดแผ่วเบาก็ดังขึ้น",
			"ความโอ้อวดอันยิ่งใหญ่กำลังเผยรอยร้าวออกมาทีละน้อย"
		],
		"hindi": [
			"नर्क। एक ऐसी दुनिया जो पॉलिश किए गए आतंक से भरी है।",
			"'दानव प्रभु' का नाम हर जगह था। कहा जाता था कि उनका क्रोध सब कुछ निगल जाएगा।",
			"फिर भी, उस अतिरंजित छाया के भीतर, कहीं से एक हल्की सी चरमराहट सुनाई दी।",
			"भव्य आडंबर धीरे-धीरे अपनी दरारें दिखा रहा था।"
		]
	}
} as const;
