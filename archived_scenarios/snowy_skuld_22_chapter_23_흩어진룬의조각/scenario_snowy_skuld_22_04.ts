export const scenario_snowy_skuld_22_04 = {
	"scenario_id": "snowy_skuld_22_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"eira": {
			"id": "mon_0c37c014-b5ca-4f2f-ad03-5d393e5b2eb1",
			"name": {
				"korean": "에이라",
				"english": "Eira",
				"japanese": "エイラ",
				"chinese": "艾拉",
				"french": "Eira",
				"spanish": "Eira",
				"vietnamese": "Eira",
				"thai": "ไอรา",
				"hindi": "ऐरा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8e2970b7-bcb1-4b1c-6bf0-93106b373500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0ca1ec09-a624-450f-054a-b98de58bdb00/public"
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
						2
					],
					"type": "direction",
					"action": "enter",
					"speaker": "eira",
					"duration_ms": 500
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "이봐! 찾았어. 흩어진 룬 조각들이… 결국 이걸 보여줬어.",
						"english": "Hey! I found it. The scattered rune fragments... finally showed me this.",
						"japanese": "おい！見つけたぞ。散らばったルーンの破片が…結局これを示したんだ。",
						"chinese": "喂！我找到了。那些散落的符文碎片……最终揭示了它。",
						"french": "Hé ! Je l'ai trouvé. Les fragments de runes éparpillés... m'ont finalement montré ça.",
						"spanish": "¡Oye! Lo encontré. Los fragmentos de runas esparcidos... finalmente me mostraron esto.",
						"vietnamese": "Này! Tôi tìm thấy rồi. Những mảnh rune vỡ vụn... cuối cùng đã chỉ ra điều này.",
						"thai": "เฮ้! ฉันเจอแล้ว ชิ้นส่วนอักษรรูนที่กระจัดกระจาย... ในที่สุดก็เผยสิ่งนี้ออกมา",
						"hindi": "अरे! मुझे मिल गया। बिखरे हुए रन के टुकड़े... आखिरकार मुझे यह दिखाया।"
					},
					"emotion": "happy"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "뭘 말하는 거야, 에이라?",
						"english": "What are you talking about, Aira?",
						"japanese": "何を言ってるんだ、エイラ？",
						"chinese": "你在说什么，艾拉？",
						"french": "De quoi parles-tu, Aira ?",
						"spanish": "¿De qué estás hablando, Aira?",
						"vietnamese": "Cô đang nói gì vậy, Aira?",
						"thai": "คุณกำลังพูดถึงอะไร, ไอรา?",
						"hindi": "तुम क्या कह रही हो, ऐरा?"
					},
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "'스쿌드'. 계속 이 이름이 나와. 이건… 배의 이름인 것 같아.",
						"english": "'Skjold'. This name keeps appearing. It seems to be... the name of a ship.",
						"japanese": "「スキュルド」。この名前がずっと出てくる。これは…船の名前みたいだ。",
						"chinese": "“斯库尔德”。这个名字一直出现。这好像是……一艘船的名字。",
						"french": "'Skjold'. Ce nom n'arrête pas d'apparaître. C'est... le nom d'un navire, semble-t-il.",
						"spanish": "'Skjold'. Este nombre sigue apareciendo. Parece ser... el nombre de un barco.",
						"vietnamese": "'Skjold'. Cái tên này cứ xuất hiện mãi. Đây dường như là... tên của một con tàu.",
						"thai": "'สโคจ์ลด์' ชื่อนี้ปรากฏขึ้นเรื่อยๆ นี่ดูเหมือนจะเป็น... ชื่อของเรือลำหนึ่ง",
						"hindi": "'स्जोल्ड'। यह नाम बार-बार आ रहा है। यह... एक जहाज का नाम लगता है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "배? 이 거대한 빙하 속에?",
						"english": "A ship? Inside this colossal glacier?",
						"japanese": "船？この巨大な氷河の中に？",
						"chinese": "船？在这巨大的冰川之中？",
						"french": "Un navire ? Dans ce glacier colossal ?",
						"spanish": "¿Un barco? ¿Dentro de este glaciar colosal?",
						"vietnamese": "Một con tàu? Trong khối băng khổng lồ này ư?",
						"thai": "เรือ? อยู่ในธารน้ำแข็งขนาดมหึมานี้หรือ?",
						"hindi": "एक जहाज? इस विशाल ग्लेशियर के अंदर?"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "eira",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "이 룬 조각들… '스쿌드'는 단순한 배가 아닐지도 몰라.",
						"english": "These rune fragments... 'Skjold' might not be just a simple ship.",
						"japanese": "このルーンの破片からすると…「スキュルド」はただの船じゃないかもしれない。",
						"chinese": "这些符文碎片……“斯库尔德”可能不仅仅是一艘简单的船。",
						"french": "Ces fragments de runes... 'Skjold' n'est peut-être pas qu'un simple navire.",
						"spanish": "Estos fragmentos de runas... 'Skjold' quizás no sea solo un simple barco.",
						"vietnamese": "Những mảnh rune này... 'Skjold' có lẽ không phải chỉ là một con tàu đơn thuần.",
						"thai": "ชิ้นส่วนอักษรรูนเหล่านี้... 'สโคจ์ลด์' อาจไม่ใช่แค่เรือธรรมดา",
						"hindi": "ये रन के टुकड़े... 'स्जोल्ड' सिर्फ एक साधारण जहाज नहीं हो सकता।"
					},
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "더 위험하다는 뜻이야?",
						"english": "You mean it's more dangerous?",
						"japanese": "もっと危険だっていうのか？",
						"chinese": "你的意思是更危险吗？",
						"french": "Tu veux dire que c'est plus dangereux ?",
						"spanish": "¿Quieres decir que es más peligroso?",
						"vietnamese": "Cô có ý là nó nguy hiểm hơn à?",
						"thai": "หมายความว่ามันอันตรายกว่าเหรอ?",
						"hindi": "तुम्हारा मतलब है कि यह ज़्यादा खतरनाक है?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "옛 문자가 섞여 있어… '선단'… 그리고 '심장'을 뜻하는 룬이야.",
						"english": "Ancient script mixed in... 'Fleet'... and a rune meaning 'Heart'.",
						"japanese": "古い文字が混じってる…「船団」…そして「心臓」を意味するルーンだ。",
						"chinese": "混杂着古老的文字……“舰队”……以及表示“心脏”的符文。",
						"french": "Des écritures anciennes s'y mêlent... 'Flotte'... et une rune signifiant 'Cœur'.",
						"spanish": "Mezcla de escrituras antiguas... 'Flota'... y una runa que significa 'Corazón'.",
						"vietnamese": "Có lẫn lộn chữ cổ… 'Hạm đội'… và một rune nghĩa là 'Trái tim'.",
						"thai": "มีอักษรโบราณปะปนอยู่... 'กองเรือ'... และอักษรรูนที่หมายถึง 'หัวใจ'",
						"hindi": "प्राचीन अक्षर मिले हुए हैं... 'बेड़ा'... और 'हृदय' का अर्थ वाला एक रुन。"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "선단… 심장? 그게 무슨 의미인데?",
						"english": "Fleet... Heart? What does that mean?",
						"japanese": "船団…心臓？どういう意味だ？",
						"chinese": "舰队……心脏？那是什么意思？",
						"french": "Flotte... Cœur ? Qu'est-ce que ça signifie ?",
						"spanish": "¿Flota... Corazón? ¿Qué significa eso?",
						"vietnamese": "Hạm đội... Trái tim? Nghĩa là sao?",
						"thai": "กองเรือ... หัวใจ? นั่นหมายความว่าอะไร?",
						"hindi": "बेड़ा... हृदय? उसका क्या मतलब है?"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "이 룬… 더 깊은 곳으로 인도하고 있어. 이 빙하의 근원까지…",
						"english": "These runes... they lead deeper. To the very source of this glacier...",
						"japanese": "このルーン…もっと深部へと導いている。この氷河の源まで…",
						"chinese": "这些符文……正引导着我们走向更深处。直到这冰川的源头……",
						"french": "Ces runes... elles mènent plus profondément. Jusqu'à la source même de ce glacier...",
						"spanish": "Estas runas... nos guían más profundo. Hasta el origen mismo de este glaciar...",
						"vietnamese": "Những rune này... chúng dẫn sâu hơn. Đến tận nguồn gốc của sông băng này...",
						"thai": "อักษรรูนพวกนี้... กำลังนำทางไปสู่ส่วนที่ลึกกว่า ถึงต้นกำเนิดของธารน้ำแข็งนี้...",
						"hindi": "ये रुन... और गहराई तक ले जा रहे हैं। इस हिमनद के मूल तक..."
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"content": {
						"korean": "차가운 기운이 탐험대를 감쌌다. 룬을 읽으려는 자에게 빙하가 격렬히 저항했다.",
						"english": "A cold aura enveloped the expedition. The glacier fiercely resisted those who sought to read the runes.",
						"japanese": "冷たい気が探検隊を包み込んだ。ルーンを読もうとする者に、氷河は激しく抵抗した。",
						"chinese": "一股寒气笼罩了探险队。冰川激烈地抵抗着试图解读符文的人。",
						"french": "Une aura glaciale enveloppa l'expédition. Le glacier résista farouchement à ceux qui tentaient de lire les runes.",
						"spanish": "Un aura gélida envolvió a la expedición. El glaciar se resistió ferozmente a quienes intentaban leer las runas.",
						"vietnamese": "Một luồng khí lạnh bao trùm đoàn thám hiểm. Sông băng dữ dội chống lại những kẻ cố gắng đọc các rune.",
						"thai": "ไอเย็นยะเยือกปกคลุมคณะสำรวจ ธารน้ำแข็งต่อต้านอย่างรุนแรงต่อผู้ที่พยายามอ่านอักษรรูน",
						"hindi": "एक ठंडी आभा ने अभियान को घेर लिया। हिमनद ने उन लोगों का भयंकर विरोध किया जो रुन पढ़ने की कोशिश कर रहे थे।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "감히… 잊힌 것을 들추려 하는가.",
						"english": "How dare you... unearth the forgotten.",
						"japanese": "よくも…忘れられたものを暴こうとするか。",
						"chinese": "你竟敢……揭露被遗忘之物。",
						"french": "Comment osez-vous... déterrer l'oublié.",
						"spanish": "¿Cómo osas... desenterrar lo olvidado?",
						"vietnamese": "Ngươi dám... khơi dậy điều đã bị lãng quên.",
						"thai": "บังอาจ... ขุดคุ้ยสิ่งที่ถูกลืมเลือน",
						"hindi": "तुम्हारी हिम्मत कैसे हुई... भूले हुए को उजागर करने की।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "누구냐!",
						"english": "Who are you!",
						"japanese": "誰だ！",
						"chinese": "你是谁！",
						"french": "Qui êtes-vous !",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ngươi là ai!",
						"thai": "เจ้าเป็นใคร!",
						"hindi": "तुम कौन हो!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "너희는… 이 빙하의 비밀을 알 자격이 없다.",
						"english": "You... are not worthy to know the secrets of this glacier.",
						"japanese": "お前たちは…この氷河の秘密を知る資格はない。",
						"chinese": "你们……不配知道这冰川的秘密。",
						"french": "Vous... n'êtes pas dignes de connaître les secrets de ce glacier.",
						"spanish": "Vosotros... no sois dignos de conocer los secretos de este glaciar.",
						"vietnamese": "Các ngươi... không xứng đáng biết bí mật của sông băng này.",
						"thai": "พวกเจ้า... ไม่มีสิทธิ์ที่จะรู้ความลับของธารน้ำแข็งนี้",
						"hindi": "तुम... इस हिमनद के रहस्यों को जानने योग्य नहीं हो।"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "eira",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						2
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "맞았어! '선단'과 '심장'… 이건 '피오르드의 심장'이라는 선단을 가리켜!",
						"english": "That's it! 'Fleet' and 'Heart'... This refers to a fleet called 'Heart of the Fjord'!",
						"japanese": "その通りだ！「船団」と「心臓」…これは「フィヨルドの心臓」という船団を指してるんだ！",
						"chinese": "没错！“舰队”和“心脏”……这指的是一个名为“峡湾之心”的舰队！",
						"french": "C'est ça ! 'Flotte' et 'Cœur'... Cela fait référence à une flotte appelée 'Cœur du Fjord' !",
						"spanish": "¡Exacto! 'Flota' y 'Corazón'... ¡Esto se refiere a una flota llamada 'Corazón del Fiordo'!",
						"vietnamese": "Đúng rồi! 'Hạm đội' và 'Trái tim'... Điều này ám chỉ một hạm đội tên là 'Trái tim của Vịnh hẹp'!",
						"thai": "ถูกต้อง! 'กองเรือ' และ 'หัวใจ'... นี่หมายถึงกองเรือที่ชื่อว่า 'หัวใจแห่งฟยอร์ด'!",
						"hindi": "सही कहा! 'बेड़ा' और 'हृदय'... यह 'फियोर्ड का हृदय' नामक एक बेड़े को संदर्भित करता है!"
					},
					"emotion": "happy",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"content": {
						"korean": "피오르드의 심장? 그게 뭔데?",
						"english": "Heart of the Fjord? What's that?",
						"japanese": "フィヨルドの心臓？それって何だ？",
						"chinese": "峡湾之心？那是什么？",
						"french": "Cœur du Fjord ? Qu'est-ce que c'est ?",
						"spanish": "¿Corazón del Fiordo? ¿Qué es eso?",
						"vietnamese": "Trái tim của Vịnh hẹp? Đó là gì?",
						"thai": "หัวใจแห่งฟยอร์ด? นั่นคืออะไร?",
						"hindi": "फियोर्ड का हृदय? वह क्या है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "잊힌 전설 속 배… 모든 빙하를 움직인다는… 움직이는 거대한 빙하선!",
						"english": "A ship from forgotten legends... said to move all glaciers... a massive, moving glacier ship!",
						"japanese": "忘れられた伝説の船…すべての氷河を動かすという…動く巨大な氷河船！",
						"chinese": "传说中被遗忘的船只……据说能移动所有冰川……一艘巨大的移动冰川船！",
						"french": "Un navire des légendes oubliées... qui, dit-on, déplace tous les glaciers... un gigantesque navire-glacier en mouvement !",
						"spanish": "Un barco de leyendas olvidadas... que, se dice, mueve todos los glaciares... ¡un gigantesco barco glaciar en movimiento!",
						"vietnamese": "Một con thuyền từ truyền thuyết bị lãng quên... được cho là có thể di chuyển mọi sông băng... một con tàu sông băng khổng lồ đang di chuyển!",
						"thai": "เรือจากตำนานที่ถูกลืม... ที่ว่ากันว่าเคลื่อนธารน้ำแข็งทั้งหมด... เรือธารน้ำแข็งขนาดยักษ์ที่เคลื่อนที่ได้!",
						"hindi": "भूली हुई किंवदंतियों का एक जहाज... कहा जाता है कि वह सभी हिमनदों को हिलाता है... एक विशाल, गतिशील हिमनद जहाज!"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이제 너무 많은 것을 알았다. 허락받지 못한 자는… 모든 것을 잃으리라.",
						"english": "You know too much. Those unauthorized… will lose everything.",
						"japanese": "貴様は知りすぎた。許されぬ者は…全てを失うだろう。",
						"chinese": "你知道得太多了。未经许可者……将失去一切。",
						"french": "Tu en sais trop. Ceux qui ne sont pas autorisés… perdront tout.",
						"spanish": "Sabes demasiado. Aquellos no autorizados… lo perderán todo.",
						"vietnamese": "Ngươi đã biết quá nhiều rồi. Kẻ không được phép… sẽ mất tất cả.",
						"thai": "เจ้ารู้มากเกินไปแล้ว ผู้ที่ไม่ได้รับอนุญาต... จะสูญเสียทุกสิ่ง",
						"hindi": "तुमने बहुत कुछ जान लिया है। अनाधिकृत लोग... सब कुछ खो देंगे।"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "우리가 멈출 거야!",
						"english": "We'll stop you!",
						"japanese": "私たちが止めてみせる！",
						"chinese": "我们会阻止你！",
						"french": "Nous vous arrêterons !",
						"spanish": "¡Te detendremos!",
						"vietnamese": "Chúng tôi sẽ ngăn chặn ngươi!",
						"thai": "เราจะหยุดเจ้าเอง!",
						"hindi": "हम तुम्हें रोकेंगे!"
					},
					"emotion": "angry"
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "빙하의 냉기가 탐험대를 집어삼켰다.",
						"english": "The glacier's chill consumed the expedition.",
						"japanese": "氷河の冷気が探検隊を飲み込んだ。",
						"chinese": "冰川的寒气吞噬了探险队。",
						"french": "La froideur du glacier a englouti l'expédition.",
						"spanish": "El frío glacial consumió a la expedición.",
						"vietnamese": "Hơi lạnh của sông băng đã nuốt chửng đoàn thám hiểm.",
						"thai": "ความหนาวเย็นของธารน้ำแข็งกลืนกินคณะสำรวจ",
						"hindi": "ग्लेशियर की ठंडक ने अभियान दल को निगल लिया।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "감히… 빙하의 의지를 거스르려는가. 넌… 아무것도 바꿀 수 없다.",
						"english": "Dare you defy the glacier's will? You... can change nothing.",
						"japanese": "まさか… 氷河の意思に逆らうというのか。お前は… 何も変えられない。",
						"chinese": "你竟敢… 违抗冰川的意志？你… 什么也改变不了。",
						"french": "Oserez-vous défier la volonté du glacier ? Vous… ne pouvez rien changer.",
						"spanish": "¿Te atreves a desafiar la voluntad del glaciar? Tú... no puedes cambiar nada.",
						"vietnamese": "Ngươi dám… chống lại ý chí của sông băng sao? Ngươi… không thể thay đổi bất cứ điều gì.",
						"thai": "เจ้ากล้า… ท้าทายเจตจำนงของธารน้ำแข็งรึ? เจ้า… เปลี่ยนอะไรไม่ได้หรอก",
						"hindi": "क्या तुम ग्लेशियर की मर्ज़ी का उल्लंघन करने की हिम्मत करते हो? तुम... कुछ नहीं बदल सकते।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아직… 끝나지 않았어. 포기하지 않아…",
						"english": "It's not over yet. I won't give up...",
						"japanese": "まだ… 終わってない。諦めない…",
						"chinese": "还没… 结束。我不会放弃…",
						"french": "Ce n'est pas encore… fini. Je n'abandonnerai pas…",
						"spanish": "Aún… no ha terminado. No me rendiré…",
						"vietnamese": "Chưa… kết thúc. Tôi sẽ không bỏ cuộc…",
						"thai": "ยัง… ไม่จบ. ฉันไม่ยอมแพ้…",
						"hindi": "अभी… खत्म नहीं हुआ है। मैं हार नहीं मानूँगा…"
					},
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "드디어 빙하의 심장부, 거대한 존재가 모습을 드러냈다.",
						"english": "Finally, in the heart of the glacier, a colossal entity revealed itself.",
						"japanese": "ついに氷河の心臓部で、巨大な存在が姿を現した。",
						"chinese": "终于，在冰川深处，一个巨大的存在现身了。",
						"french": "Enfin, au cœur du glacier, une entité colossale s'est révélée.",
						"spanish": "Finalmente, en el corazón del glaciar, una entidad colosal se reveló.",
						"vietnamese": "Cuối cùng, tại trung tâm sông băng, một thực thể khổng lồ đã lộ diện.",
						"thai": "ในที่สุด ณ ใจกลางธารน้ำแข็ง สิ่งมีชีวิตขนาดยักษ์ก็เผยโฉม",
						"hindi": "अंततः, ग्लेशियर के हृदय में, एक विशालकाय सत्ता प्रकट हुई।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "이곳은… 피오르드의 심장이 잠든 곳. 감히… 침범하려는가.",
						"english": "This place… where the Heart of the Fjord sleeps. Do you dare… trespass?",
						"japanese": "ここは…フィヨルドの心臓が眠る場所。敢えて…侵入しようとするのか。",
						"chinese": "这里是……峡湾之心沉睡之地。你竟敢……侵犯？",
						"french": "Cet endroit… où le Cœur du Fjord repose. Osez-vous… y pénétrer ?",
						"spanish": "Este lugar… donde el Corazón del Fiordo duerme. ¿Te atreves… a invadir?",
						"vietnamese": "Nơi đây… là nơi Trái tim Fjord yên nghỉ. Ngươi dám… xâm phạm?",
						"thai": "ที่แห่งนี้... คือที่ที่หัวใจแห่งฟยอร์ดหลับใหล เจ้ากล้า... บุกรุกหรือ",
						"hindi": "यह स्थान… जहाँ फ्योर्ड का हृदय सोता है। क्या तुम… अतिक्रमण करने की हिम्मत करते हो?"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "네가 그걸 지키고 있다고?",
						"english": "You're protecting that?",
						"japanese": "貴様がそれを守っているのか？",
						"chinese": "你在守护那个？",
						"french": "Vous protégez cela ?",
						"spanish": "¿Estás protegiendo eso?",
						"vietnamese": "Ngươi đang bảo vệ thứ đó ư?",
						"thai": "เจ้ากำลังปกป้องสิ่งนั้นอยู่หรือ",
						"hindi": "तुम उसकी रक्षा कर रहे हो?"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "너희는… 이 역사의 흐름을 바꿀 수 없다.",
						"english": "You… cannot change the flow of this history.",
						"japanese": "貴様らは…この歴史の流れを変えることはできない。",
						"chinese": "你们……无法改变这历史的洪流。",
						"french": "Vous… ne pouvez pas changer le cours de cette histoire.",
						"spanish": "Vosotros… no podéis cambiar el curso de esta historia.",
						"vietnamese": "Các ngươi… không thể thay đổi dòng chảy lịch sử này.",
						"thai": "พวกเจ้า... ไม่สามารถเปลี่ยนกระแสประวัติศาสตร์นี้ได้",
						"hindi": "तुम… इस इतिहास के प्रवाह को नहीं बदल सकते।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "direction",
					"spot": [
						2,
						2
					],
					"action": "enter",
					"speaker": "eira",
					"duration_ms": 500
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "저 자가 '피오르드의 심장'을 지키고 있어… 룬이 그렇게 말해!",
						"english": "He's protecting the 'Heart of the Fjord'… The rune says so!",
						"japanese": "あの者が「フィヨルドの心臓」を守っている…ルーンがそう告げている！",
						"chinese": "他在守护着“峡湾之心”……符文是这么说的！",
						"french": "Il protège le « Cœur du Fjord »… La rune le dit !",
						"spanish": "¡Él está protegiendo el 'Corazón del Fiordo'… La runa lo dice!",
						"vietnamese": "Hắn đang bảo vệ 'Trái tim Fjord'… Bùa hộ mệnh nói vậy!",
						"thai": "เขากำลังปกป้อง 'หัวใจแห่งฟยอร์ด'... รูนบอกอย่างนั้น!",
						"hindi": "वह 'फ्योर्ड के हृदय' की रक्षा कर रहा है… रूण ऐसा कहता है!"
					},
					"emotion": "sad"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 네놈들… 결국… 후회할 것이다. {random_boss}는… 시작에 불과하다…",
						"english": "Ugh… You fools… You will ultimately… regret this. {random_boss} is… merely the beginning…",
						"japanese": "くっ…貴様ら…結局…後悔するだろう。{random_boss}は…始まりに過ぎない…",
						"chinese": "呃……你们这些家伙……最终……会后悔的。{random_boss}……不过是开始……",
						"french": "Ugh… Vous… finirez… par le regretter. {random_boss} n'est… que le début…",
						"spanish": "Ugh… Vosotros… al final… os arrepentiréis. {random_boss} es… solo el principio…",
						"vietnamese": "Khụ… Các ngươi… rốt cuộc… sẽ hối hận thôi. {random_boss}… chỉ là khởi đầu…",
						"thai": "อั่ก… พวกแก… ในที่สุด… ก็จะต้องเสียใจ {random_boss} เป็นเพียง… จุดเริ่มต้น…",
						"hindi": "उफ़… तुम लोग… अंततः… पछताओगे। {random_boss}… केवल शुरुआत है…"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "끝난 줄 알았는데…",
						"english": "I thought it was over…",
						"japanese": "終わったと思ったのに…",
						"chinese": "以为结束了……",
						"french": "Je croyais que c'était fini…",
						"spanish": "Creía que había terminado…",
						"vietnamese": "Cứ ngỡ đã kết thúc rồi…",
						"thai": "นึกว่าจะจบแล้วซะอีก...",
						"hindi": "मुझे लगा यह खत्म हो गया…"
					},
					"emotion": "sad"
				},
				{
					"speaker": "eira",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "피오르드의 심장… 저 자가 지키려던 것은… 배 그 자체가 아니었어.",
						"english": "The Heart of the Fjord… what he was protecting… wasn't the ship itself.",
						"japanese": "フィヨルドの心臓…あの者が守ろうとしていたのは…船そのものではなかった。",
						"chinese": "峡湾之心……他所守护的……并不是那艘船本身。",
						"french": "Le Cœur du Fjord… ce qu'il protégeait… n'était pas le navire lui-même.",
						"spanish": "El Corazón del Fiordo… lo que él protegía… no era el barco en sí.",
						"vietnamese": "Trái tim Fjord… thứ hắn muốn bảo vệ… không phải là con tàu đó.",
						"thai": "หัวใจแห่งฟยอร์ด… สิ่งที่เขาปกป้อง… ไม่ใช่เรือลำนั้นเอง",
						"hindi": "फ्योर्ड का हृदय… जिसकी वह रक्षा कर रहा था… वह जहाज नहीं था।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "얼어붙은 심장이, 이제 깨어나려 한다. 더 거대한 존재가 기다린다.",
						"english": "The frozen heart awakens. A greater power awaits.",
						"japanese": "凍てついた心が、今、目覚めようとしている。さらなる巨大な存在が待ち受ける。",
						"chinese": "冰封之心，即将苏醒。更强大的存在正在等待。",
						"french": "Le cœur gelé s'éveille. Une présence plus grande attend.",
						"spanish": "El corazón helado despierta. Una presencia mayor aguarda.",
						"vietnamese": "Trái tim đóng băng, giờ đây thức tỉnh. Một thế lực vĩ đại hơn đang chờ đợi.",
						"thai": "หัวใจที่เยือกแข็งกำลังจะตื่นขึ้น มีบางสิ่งที่ยิ่งใหญ่กว่ารออยู่",
						"hindi": "जमा हुआ दिल अब जागने वाला है। एक बड़ी शक्ति इंतज़ार कर रही है।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"얼어붙은 심연 속, 잊힌 이름이 떠올랐다.",
			"'스쿌드'… 그것은 배의 이름이자, 거대한 비밀의 열쇠.",
			"탐험대는 빙하의 저항을 뚫고 진실에 다가서지만,",
			"그 진실은 얼음처럼 차갑고, 날카로웠다."
		],
		"english": [
			"In the frozen abyss, a forgotten name emerged.",
			"'Skjold'... the name of a ship, and the key to a vast secret.",
			"The expedition braves the glacier's resistance, nearing the truth, but...",
			"That truth was as cold and sharp as ice."
		],
		"japanese": [
			"凍てつく深淵の底、忘れられた名が浮かび上がった。",
			"「スキュルド」…それは船の名であり、巨大な秘密の鍵。",
			"探検隊は氷河の抵抗を乗り越え真実に迫るが、",
			"その真実は氷のように冷たく、鋭かった。"
		],
		"chinese": [
			"在冰封的深渊中，一个被遗忘的名字浮现。",
			"“斯库尔德”……那是船的名字，也是巨大秘密的钥匙。",
			"探险队穿透冰川的阻碍，接近真相，然而…",
			"那个真相，如冰般寒冷而锋利。"
		],
		"french": [
			"Dans l'abîme gelé, un nom oublié refit surface.",
			"'Skjold'... le nom d'un navire, et la clé d'un immense secret.",
			"L'expédition brave la résistance du glacier, s'approchant de la vérité, mais...",
			"Cette vérité était froide et tranchante comme la glace."
		],
		"spanish": [
			"En el abismo helado, un nombre olvidado resurgió.",
			"'Skjold'... el nombre de un barco, y la clave de un vasto secreto.",
			"La expedición desafía la resistencia del glaciar, acercándose a la verdad, pero...",
			"Esa verdad era fría y afilada como el hielo."
		],
		"vietnamese": [
			"Trong vực thẳm băng giá, một cái tên bị lãng quên đã hiện lên.",
			"'Skjold'... tên của một con tàu, và là chìa khóa mở ra một bí mật to lớn.",
			"Đoàn thám hiểm vượt qua sự kháng cự của sông băng, tiếp cận sự thật, nhưng...",
			"Sự thật ấy lạnh lẽo và sắc bén như băng."
		],
		"thai": [
			"ในห้วงลึกอันเยือกแข็ง นามที่ถูกลืมได้ปรากฏขึ้น",
			"'สโคจ์ลด์'... ชื่อของเรือ และกุญแจสู่ความลับอันยิ่งใหญ่",
			"คณะสำรวจฝ่าความต้านทานของธารน้ำแข็ง เข้าใกล้ความจริง แต่...",
			"ความจริงนั้นหนาวเย็นและคมกริบดุจน้ำแข็ง"
		],
		"hindi": [
			"जमी हुई खाई में, एक भूला हुआ नाम उभरा।",
			"'स्जोल्ड'... एक जहाज का नाम, और एक विशाल रहस्य की कुंजी।",
			"अभियान ग्लेशियर के प्रतिरोध का सामना करता है, सच्चाई के करीब पहुँचता है, लेकिन...",
			"वह सच्चाई बर्फ की तरह ठंडी और नुकीली थी।"
		]
	}
} as const;
