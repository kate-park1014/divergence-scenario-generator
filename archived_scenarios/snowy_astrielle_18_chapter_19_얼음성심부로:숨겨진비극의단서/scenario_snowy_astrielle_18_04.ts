export const scenario_snowy_astrielle_18_04 = {
	"scenario_id": "snowy_astrielle_18_04",
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
					"speaker": "narrator",
					"content": {
						"korean": "오래된 도서관. 책장마다 서리가 내려앉았다.",
						"english": "An old library. Frost covered every bookshelf.",
						"japanese": "古い図書館。本棚には霜が降りている。",
						"chinese": "古老的图书馆。每个书架上都覆盖着霜。",
						"french": "Une vieille bibliothèque. Le givre recouvrait chaque étagère.",
						"spanish": "Una antigua biblioteca. La escarcha cubría cada estantería.",
						"vietnamese": "Một thư viện cũ kỹ. Sương giá phủ kín từng giá sách.",
						"thai": "ห้องสมุดเก่า ฝ้าปกคลุมทุกชั้นหนังสือ",
						"hindi": "एक पुराना पुस्तकालय। हर शेल्फ पर पाला पड़ा था।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "여기서 뭘 찾는 거야, 에이라?",
						"english": "What are you looking for here, Aira?",
						"japanese": "ここで何を探しているの、アイラ？",
						"chinese": "你在这里找什么呢，艾拉？",
						"french": "Qu'est-ce que tu cherches ici, Aira ?",
						"spanish": "¿Qué buscas aquí, Aira?",
						"vietnamese": "Cậu đang tìm gì ở đây vậy, Aira?",
						"thai": "เธอกำลังหาอะไรที่นี่, ไอรา?",
						"hindi": "तुम यहां क्या ढूंढ रही हो, ऐरा?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter",
					"speaker": "eira"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "이곳에 아스트리엘의… 근원에 대한 기록이 있을 거예요.",
						"english": "There should be records here about Astriel's… origin.",
						"japanese": "ここにアストリエルの…根源に関する記録があるはずです。",
						"chinese": "这里应该有关于阿斯特里尔……根源的记录。",
						"french": "Il devrait y avoir ici des archives sur l'origine d'Astriel...",
						"spanish": "Aquí debería haber registros sobre el origen de Astriel...",
						"vietnamese": "Chắc chắn ở đây sẽ có ghi chép về… nguồn gốc của Astriel.",
						"thai": "ที่นี่น่าจะมีบันทึกเกี่ยวกับ...ต้นกำเนิดของแอสเทรียล",
						"hindi": "यहां एस्ट्रियल के… मूल के बारे में रिकॉर्ड होने चाहिए।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "…아무래도 예전 기록은 지워진 것 같네요. 일부러 지운 흔적도 보이고요.",
						"english": "...It seems the old records have been erased. And there are traces of deliberate erasure.",
						"japanese": "…どうやら古い記録は消されているようです。意図的に消した痕跡も見えます。",
						"chinese": "……看来以前的记录都被抹去了。似乎还有故意抹去的痕迹。",
						"french": "...Il semble que les anciens registres aient été effacés. On voit même des traces d'effacement délibéré.",
						"spanish": "...Parece que los registros antiguos han sido borrados. Y hay indicios de que fue a propósito.",
						"vietnamese": "...Có vẻ như những ghi chép cũ đã bị xóa rồi. Còn có dấu vết bị xóa một cách cố ý nữa.",
						"thai": "ดูเหมือนบันทึกเก่าๆ ถูกลบไปแล้ว และดูเหมือนถูกลบอย่างจงใจด้วย",
						"hindi": "लगता है पुराने रिकॉर्ड मिटा दिए गए हैं। और जानबूझकर मिटाने के निशान भी दिख रहे हैं।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "eira",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "이 룬 문자… 아스트리엘의 힘과 관련된 것 같아요.",
						"english": "These runic characters... I think they're related to Astriel's power.",
						"japanese": "このルーン文字…アストリエルの力と関連があるようです。",
						"chinese": "这些符文……似乎与阿斯特里尔的力量有关。",
						"french": "Ces runes... Je pense qu'elles sont liées au pouvoir d'Astriel.",
						"spanish": "Estas runas... creo que están relacionadas con el poder de Astriel.",
						"vietnamese": "Những ký tự rune này… có vẻ liên quan đến sức mạnh của Astriel.",
						"thai": "รูนพวกนี้...น่าจะเกี่ยวข้องกับพลังของแอสเทรียล",
						"hindi": "ये रूनिक अक्षर... मुझे लगता है कि वे एस्ट्रियल की शक्ति से संबंधित हैं।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "해독할 수 있어?",
						"english": "Can you decipher them?",
						"japanese": "解読できる？",
						"chinese": "你能解读吗？",
						"french": "Peux-tu les déchiffrer ?",
						"spanish": "¿Puedes descifrarlos?",
						"vietnamese": "Cậu giải mã được không?",
						"thai": "ถอดรหัสได้ไหม?",
						"hindi": "क्या तुम उन्हें समझ सकती हो?"
					}
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "시간은 걸리겠지만… 분명 단서가 될 거예요.",
						"english": "It might take time... but it will surely be a clue.",
						"japanese": "時間はかかるでしょうが…きっと手がかりになるはずです。",
						"chinese": "可能需要时间…但这一定会成为线索。",
						"french": "Cela prendra du temps... mais ce sera assurément un indice.",
						"spanish": "Puede que lleve tiempo... pero sin duda será una pista.",
						"vietnamese": "Sẽ mất thời gian… nhưng chắc chắn đó sẽ là manh mối.",
						"thai": "อาจต้องใช้เวลา... แต่จะเป็นเบาะแสแน่นอน",
						"hindi": "इसमें समय लग सकता है... लेकिन यह निश्चित रूप से एक सुराग होगा।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "힘의 근원은 외부에서 온 것 같네요. …아니면 이어받은 건가?",
						"english": "The source of power seems to come from outside. ...Or was it inherited?",
						"japanese": "力の源は外部から来たようですね。…それとも受け継いだものなのか？",
						"chinese": "力量的来源似乎来自外部。…还是说，是继承而来的？",
						"french": "La source du pouvoir semble venir de l'extérieur. ...Ou a-t-elle été héritée ?",
						"spanish": "La fuente del poder parece venir de fuera. ...¿O fue heredado?",
						"vietnamese": "Nguồn sức mạnh dường như đến từ bên ngoài. …Hay là được kế thừa?",
						"thai": "แหล่งพลังงานดูเหมือนจะมาจากภายนอก ...หรือรับช่วงต่อมา?",
						"hindi": "शक्ति का स्रोत बाहर से आया प्रतीत होता है। ...या फिर यह विरासत में मिला था?"
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
					"speaker": "eira",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"type": "direction"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "이 기록… 금지된 지식이었군요. 함부로 읽어선 안 될 것 같은데…",
						"english": "This record... it was forbidden knowledge. I shouldn't read it carelessly...",
						"japanese": "この記録…禁断の知識だったんですね。迂闊に読むべきではないようです…",
						"chinese": "这份记录…是禁忌知识啊。我好像不该随便阅读…",
						"french": "Ce registre... c'était une connaissance interdite. Je ne devrais pas le lire imprudemment...",
						"spanish": "Este registro... era conocimiento prohibido. No debería leerlo a la ligera...",
						"vietnamese": "Ghi chép này… là kiến thức cấm. Có lẽ không nên đọc bừa…",
						"thai": "บันทึกนี้... เป็นความรู้ต้องห้ามสินะ ไม่น่าจะอ่านโดยประมาท...",
						"hindi": "यह अभिलेख... यह वर्जित ज्ञान था। मुझे इसे लापरवाही से नहीं पढ़ना चाहिए..."
					}
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "아스트리엘은 강력한 힘을 받았어요.",
						"english": "Astriel received a powerful force.",
						"japanese": "アストリエルは強大な力を授かりました。",
						"chinese": "阿斯特丽尔获得了强大的力量。",
						"french": "Astriel a reçu une force puissante.",
						"spanish": "Astriel recibió una fuerza poderosa.",
						"vietnamese": "Astriel đã nhận được một sức mạnh to lớn.",
						"thai": "แอสเทรียลได้รับพลังอันแข็งแกร่ง",
						"hindi": "एस्ट्रियल को एक शक्तिशाली शक्ति प्राप्त हुई।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "그게 왜 금지된 지식이야? 힘이 나쁜 거야?",
						"english": "Why is that forbidden knowledge? Is the power evil?",
						"japanese": "なぜそれが禁断の知識なの？力が悪いってこと？",
						"chinese": "为什么那是禁忌知识？是力量不好吗？",
						"french": "Pourquoi est-ce une connaissance interdite ? Le pouvoir est-il mauvais ?",
						"spanish": "¿Por qué es conocimiento prohibido? ¿Es malo el poder?",
						"vietnamese": "Sao đó lại là kiến thức cấm? Sức mạnh đó tệ lắm sao?",
						"thai": "ทำไมถึงเป็นความรู้ต้องห้าม? พลังงานนั้นมันไม่ดีเหรอ?",
						"hindi": "वह वर्जित ज्ञान क्यों है? क्या शक्ति बुरी है?"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "그 힘이… 본인의 의지와 다르게 폭주했다고 해요.",
						"english": "They say that power... ran wild, against their own will.",
						"japanese": "その力が…本人の意思とは裏腹に暴走したそうです。",
						"chinese": "据说那股力量…违背了本人的意志，失控了。",
						"french": "On dit que ce pouvoir... est devenu incontrôlable, contre sa propre volonté.",
						"spanish": "Se dice que ese poder... se desbocó, en contra de su propia voluntad.",
						"vietnamese": "Nghe nói sức mạnh đó… đã mất kiểm soát, trái với ý chí của bản thân.",
						"thai": "ว่ากันว่าพลังนั้น... ได้คลุ้มคลั่งไปเอง ไม่เป็นไปตามเจตนา",
						"hindi": "वे कहते हैं कि वह शक्ति... अपनी इच्छा के विरुद्ध बेकाबू हो गई थी।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "eira",
					"content": {
						"korean": "사랑하는 이들을… 지키려다 해쳤을 수도 있다는 암시가 있어요.",
						"english": "There's an implication that... they might have harmed their loved ones while trying to protect them.",
						"japanese": "愛する人々を…守ろうとして傷つけてしまったかもしれないという暗示があります。",
						"chinese": "有暗示说…在保护心爱之人的过程中，可能伤害了他们。",
						"french": "Il y a une implication selon laquelle... ils auraient pu blesser leurs proches en essayant de les protéger.",
						"spanish": "Hay una implicación de que... podrían haber herido a sus seres queridos al intentar protegerlos.",
						"vietnamese": "Có gợi ý rằng… họ có thể đã làm hại những người thân yêu khi cố gắng bảo vệ họ.",
						"thai": "มีนัยยะว่า... อาจทำร้ายคนที่รักในขณะที่พยายามจะปกป้อง",
						"hindi": "एक संकेत है कि... उन्होंने अपने प्रियजनों को बचाने की कोशिश करते हुए नुकसान पहुँचाया होगा।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "eira",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "eira",
					"content": {
						"korean": "이 기록을 더 읽으면 안 될 것 같아요… 정말 위험한 지식이에요.",
						"english": "I shouldn't read this record any further... It's truly dangerous knowledge.",
						"japanese": "この記録はもう読むべきではないようです…本当に危険な知識です。",
						"chinese": "我不能再读这份记录了…这真是危险的知识。",
						"french": "Je ne devrais pas lire ce registre davantage... C'est une connaissance vraiment dangereuse.",
						"spanish": "No debería seguir leyendo este registro... Es un conocimiento realmente peligroso.",
						"vietnamese": "Tôi không nên đọc thêm ghi chép này nữa… Đây thực sự là kiến thức nguy hiểm.",
						"thai": "ฉันไม่ควรอ่านบันทึกนี้ต่อไป... มันเป็นความรู้อันตรายจริงๆ",
						"hindi": "मुझे यह अभिलेख और नहीं पढ़ना चाहिए... यह वास्तव में खतरनाक ज्ञान है।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "왜? 진실을 알아야 해.",
						"english": "Why? I need to know the truth.",
						"japanese": "なぜ？真実を知る必要がある。",
						"chinese": "为什么？我需要知道真相。",
						"french": "Pourquoi ? Je dois connaître la vérité.",
						"spanish": "¿Por qué? Necesito saber la verdad.",
						"vietnamese": "Tại sao? Tôi cần biết sự thật.",
						"thai": "ทำไม? ฉันต้องรู้ความจริง",
						"hindi": "क्यों? मुझे सच्चाई जानने की जरूरत है।"
					}
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "이 힘은 너무 슬퍼요. 이 도서관 자체가… 봉인된 기록물 같아요.",
						"english": "This power is too sad. This library itself... feels like sealed records.",
						"japanese": "この力はあまりにも悲しい。この図書館自体が…封印された記録のようです。",
						"chinese": "这股力量太悲伤了。这座图书馆本身…就像是被封印的记录。",
						"french": "Ce pouvoir est trop triste. Cette bibliothèque elle-même... ressemble à des archives scellées.",
						"spanish": "Este poder es demasiado triste. Esta biblioteca misma... parece un registro sellado.",
						"vietnamese": "Sức mạnh này quá buồn. Bản thân thư viện này… giống như những ghi chép bị phong ấn.",
						"thai": "พลังนี้เศร้าเกินไป ห้องสมุดแห่งนี้... เหมือนบันทึกที่ถูกผนึก",
						"hindi": "यह शक्ति बहुत दुखद है। यह पुस्तकालय स्वयं... मुहरबंद अभिलेखों जैसा लगता है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "물러설 수 없어. 끝까지 가겠어.",
						"english": "I can't back down. I'll see this through to the end.",
						"japanese": "後には引けない。最後までやり遂げる。",
						"chinese": "无法退缩。我会坚持到底。",
						"french": "Je ne reculerai pas. J'irai jusqu'au bout.",
						"spanish": "No puedo retroceder. Iré hasta el final.",
						"vietnamese": "Không thể lùi bước. Tôi sẽ đi đến cùng.",
						"thai": "ถอยไม่ได้ ฉันจะไปให้สุดทาง",
						"hindi": "मैं पीछे नहीं हट सकता। मैं अंत तक जाऊँगा।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "…조심해야 해요. 이 지식에는 강력한 수호자가 있어요.",
						"english": "...You must be careful. This knowledge has a powerful guardian.",
						"japanese": "…気を付けてください。この知識には強力な守護者がいます。",
						"chinese": "……必须小心。这份知识有强大的守护者。",
						"french": "...Vous devez faire attention. Ce savoir a un puissant gardien.",
						"spanish": "...Debes tener cuidado. Este conocimiento tiene un poderoso guardián.",
						"vietnamese": "...Cẩn thận. Kiến thức này có một người bảo vệ mạnh mẽ.",
						"thai": "...ต้องระวังนะ ความรู้นี้มีผู้พิทักษ์ที่ทรงพลัง",
						"hindi": "...आपको सावधान रहना चाहिए। इस ज्ञान का एक शक्तिशाली संरक्षक है।"
					}
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…이것은 시작에 불과해. 여왕의 고통은… 끝나지 않아.",
						"english": "...This is merely the beginning. The Queen's sorrow... it never ends.",
						"japanese": "…これは始まりに過ぎない。女王の苦痛は…終わらない。",
						"chinese": "……这只是个开始。女王的痛苦……永无止境。",
						"french": "...Ce n'est que le début. La douleur de la Reine... ne finit jamais.",
						"spanish": "...Esto es solo el principio. El tormento de la Reina... nunca termina.",
						"vietnamese": "...Đây chỉ là khởi đầu. Nỗi đau của Nữ hoàng... không bao giờ kết thúc.",
						"thai": "...นี่เป็นเพียงจุดเริ่มต้น ความทุกข์ระทมของราชินี... ไม่มีวันสิ้นสุด",
						"hindi": "...यह तो बस शुरुआत है। रानी का दर्द... कभी खत्म नहीं होता।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야? 고통? 아스트리엘이…?",
						"english": "What are you talking about? Sorrow? Astriel...?",
						"japanese": "何を言っている？苦痛？アストリエルが…？",
						"chinese": "你在说什么？痛苦？阿斯特里埃尔……？",
						"french": "Qu'est-ce que tu racontes ? Douleur ? Astriel...?",
						"spanish": "¿De qué hablas? ¿Tormento? ¿Astriel...?",
						"vietnamese": "Ngươi đang nói gì vậy? Nỗi đau? Astriel...?",
						"thai": "เจ้าพูดถึงอะไร? ความทุกข์? แอสเทรียล...?",
						"hindi": "तुम क्या कह रहे हो? दर्द? एस्ट्रियल...?"
					}
				},
				{
					"speaker": "eira",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "이 기록을 마저 읽어야겠어요… 아직 끝나지 않았어요. 더 깊은 곳으로 가야만 해요.",
						"english": "I must finish reading these records... It's not over yet. We must go deeper.",
						"japanese": "この記録を最後まで読まなければ…まだ終わっていません。もっと深くへ行かなければなりません。",
						"chinese": "我必须读完这些记录……还没结束。我们必须去更深的地方。",
						"french": "Je dois finir de lire ces registres... Ce n'est pas encore fini. Nous devons aller plus loin.",
						"spanish": "Debo terminar de leer estos registros... Aún no ha terminado. Debemos ir más profundo.",
						"vietnamese": "Tôi phải đọc xong những ghi chép này... Vẫn chưa kết thúc. Chúng ta phải đi sâu hơn nữa.",
						"thai": "ฉันต้องอ่านบันทึกนี้ให้จบ... มันยังไม่จบ เราต้องเข้าไปให้ลึกกว่านี้",
						"hindi": "मुझे इन अभिलेखों को पढ़ना पूरा करना होगा... यह अभी खत्म नहीं हुआ है। हमें और गहरा जाना होगा।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "금지된 지식의 수호자가 쓰러졌다. 그러나, 더욱 깊은 슬픔의 기운이 성 전체를 감쌌다.",
						"english": "The guardian of forbidden knowledge has fallen. However, a deeper aura of sorrow enveloped the entire castle.",
						"japanese": "禁じられた知識の守護者は倒れた。しかし、さらに深い悲しみのオーラが城全体を包み込んだ。",
						"chinese": "禁忌知识的守护者倒下了。然而，一股更深沉的悲伤气息笼罩了整个城堡。",
						"french": "Le gardien du savoir interdit est tombé. Cependant, une aura de tristesse plus profonde enveloppa tout le château.",
						"spanish": "El guardián del conocimiento prohibido ha caído. Sin embargo, un aura de tristeza más profunda envolvió todo el castillo.",
						"vietnamese": "Người bảo vệ kiến thức cấm kỵ đã ngã xuống. Tuy nhiên, một luồng khí buồn bã sâu sắc hơn bao trùm toàn bộ lâu đài.",
						"thai": "ผู้พิทักษ์ความรู้ต้องห้ามล้มลงแล้ว อย่างไรก็ตาม บรรยากาศแห่งความเศร้าโศกที่ลึกซึ้งยิ่งกว่าปกคลุมปราสาททั้งหลัง",
						"hindi": "वर्जित ज्ञान का संरक्षक गिर गया है। हालांकि, उदासी का गहरा आभास पूरे महल को घेरे हुए था।"
					}
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…감히 금지된 지식을 파헤치려 드는가. 무모하구나.",
						"english": "...You dare to unearth forbidden knowledge. How reckless.",
						"japanese": "…禁じられた知識を掘り起こそうとするか。無謀な。",
						"chinese": "……竟敢挖掘禁忌知识。真是鲁莽。",
						"french": "...Oserez-vous déterrer le savoir interdit ? Quelle imprudence.",
						"spanish": "¿Osas desenterrar el conocimiento prohibido? ¡Qué imprudencia!",
						"vietnamese": "...Ngươi dám đào bới kiến thức cấm kỵ ư. Thật liều lĩnh.",
						"thai": "...เจ้ากล้าที่จะขุดคุ้ยความรู้ต้องห้ามหรือ ช่างบ้าระห่ำนัก",
						"hindi": "...क्या तुम वर्जित ज्ञान को उजागर करने का साहस करते हो। कितने लापरवाह हो।"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "이것은 여왕의 고통. 너희가 알 필요 없어. 돌아가라.",
						"english": "This is the Queen's sorrow. You have no need to know. Turn back.",
						"japanese": "これは女王の苦痛。お前たちが知る必要はない。帰れ。",
						"chinese": "这是女王的痛苦。你们无需知晓。回去吧。",
						"french": "C'est la douleur de la Reine. Vous n'avez pas besoin de savoir. Retournez d'où vous venez.",
						"spanish": "Este es el tormento de la Reina. No necesitáis saberlo. Volved.",
						"vietnamese": "Đây là nỗi đau của Nữ hoàng. Các ngươi không cần biết. Hãy quay về.",
						"thai": "นี่คือความทุกข์ระทมของราชินี พวกเจ้าไม่จำเป็นต้องรู้ จงกลับไปเสีย",
						"hindi": "यह रानी का दर्द है। तुम्हें जानने की आवश्यकता नहीं है। वापस जाओ।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "비켜! 우리는 진실을 알아야만 해!",
						"english": "Get out of the way! We must know the truth!",
						"japanese": "退け！我々は真実を知らねばならない！",
						"chinese": "让开！我们必须知道真相！",
						"french": "Écartez-vous ! Nous devons connaître la vérité !",
						"spanish": "¡Apartaos! ¡Debemos saber la verdad!",
						"vietnamese": "Tránh ra! Chúng tôi phải biết sự thật!",
						"thai": "ถอยไป! เราต้องรู้ความจริง!",
						"hindi": "हट जाओ! हमें सच जानना ही होगा!"
					}
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "금지된 지식의 수호자는 탐험대를 짓밟았다.",
						"english": "The guardian of forbidden knowledge crushed the expedition team.",
						"japanese": "禁じられた知識の守護者は探検隊を踏み潰した。",
						"chinese": "禁忌知识的守护者击溃了探险队。",
						"french": "Le gardien du savoir interdit a écrasé l'équipe d'expédition.",
						"spanish": "El guardián del conocimiento prohibido aplastó al equipo de expedición.",
						"vietnamese": "Người bảo vệ kiến thức cấm kỵ đã nghiền nát đội thám hiểm.",
						"thai": "ผู้พิทักษ์ความรู้ต้องห้ามได้บดขยี้คณะสำรวจ",
						"hindi": "वर्जित ज्ञान के संरक्षक ने अभियान दल को कुचल दिया।"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 자들. 진실은 너희를 구할 수 없어. 이곳에서 죽어라.",
						"english": "Fools. The truth cannot save you. Die here.",
						"japanese": "愚か者たち。真実は汝らを救えぬ。ここで死ね。",
						"chinese": "愚蠢之人。真相无法拯救你们。死在这里吧。",
						"french": "Imbéciles. La vérité ne peut pas vous sauver. Mourez ici.",
						"spanish": "Necios. La verdad no puede salvaros. Morid aquí.",
						"vietnamese": "Lũ ngu ngốc. Sự thật không thể cứu các ngươi. Chết ở đây đi.",
						"thai": "พวกโง่เขลา ความจริงไม่อาจช่วยเจ้าได้ ตายซะที่นี่",
						"hindi": "मूर्खों। सत्य तुम्हें बचा नहीं सकता। यहीं मर जाओ।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…아직 끝나지 않았어. 결코 포기하지 않아.",
						"english": "...It's not over yet. I will never give up.",
						"japanese": "…まだ終わっていない。決して諦めない。",
						"chinese": "……还没有结束。我绝不放弃。",
						"french": "...Ce n'est pas encore fini. Je n'abandonnerai jamais.",
						"spanish": "...Aún no ha terminado. Jamás me rendiré.",
						"vietnamese": "...Vẫn chưa kết thúc. Ta sẽ không bao giờ từ bỏ.",
						"thai": "...ยังไม่จบแค่นี้ ข้าไม่มีวันยอมแพ้",
						"hindi": "…अभी खत्म नहीं हुआ है। मैं कभी हार नहीं मानूंगा।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"영원의 도서관. 얼어붙은 지식의 보고.",
			"에이라는 숨겨진 기록 속에서 진실을 찾으려 했다.",
			"허나 그 진실은 너무나도 차가운 비극이었다.",
			"아스트리엘의 힘은, 축복이 아니었을지도 모른다."
		],
		"english": [
			"The Eternal Library. A repository of frozen knowledge.",
			"Aira sought the truth within hidden records.",
			"But that truth was a tragically cold one.",
			"Astriel's power might not have been a blessing."
		],
		"japanese": [
			"永遠の図書館。凍てついた知識の宝庫。",
			"アイラは隠された記録の中から真実を探そうとした。",
			"しかし、その真実はあまりにも冷たい悲劇だった。",
			"アストリエルの力は、祝福ではなかったのかもしれない。"
		],
		"chinese": [
			"永恒图书馆。冰封知识的宝库。",
			"艾拉试图在隐藏的记录中寻找真相。",
			"然而，那个真相却是一场冰冷的悲剧。",
			"阿斯特里尔的力量，也许并非祝福。"
		],
		"french": [
			"La Bibliothèque Éternelle. Un dépôt de savoir gelé.",
			"Aira cherchait la vérité dans les archives cachées.",
			"Mais cette vérité était une tragédie d'une froideur accablante.",
			"Le pouvoir d'Astriel n'était peut-être pas une bénédiction."
		],
		"spanish": [
			"La Biblioteca Eterna. Un depósito de conocimiento congelado.",
			"Aira buscó la verdad en los registros ocultos.",
			"Pero esa verdad era una tragedia demasiado fría.",
			"El poder de Astriel podría no haber sido una bendición."
		],
		"vietnamese": [
			"Thư viện Vĩnh Hằng. Một kho tri thức đóng băng.",
			"Aira tìm kiếm sự thật trong những ghi chép ẩn giấu.",
			"Nhưng sự thật đó lại là một bi kịch lạnh lẽo đến đau lòng.",
			"Sức mạnh của Astriel, có lẽ không phải là một phước lành."
		],
		"thai": [
			"หอสมุดนิรันดร์ คลังความรู้ที่เยือกแข็ง",
			"ไอราพยายามค้นหาความจริงในบันทึกที่ซ่อนอยู่",
			"แต่ความจริงนั้นกลับเป็นโศกนาฏกรรมที่เย็นชา",
			"พลังของแอสเทรียล อาจไม่ใช่พร"
		],
		"hindi": [
			"शाश्वत पुस्तकालय। जमे हुए ज्ञान का एक भंडार।",
			"ऐरा ने छिपे हुए अभिलेखों में सत्य की तलाश की।",
			"किंतु वह सत्य एक अत्यंत दुखद और शीतल त्रासदी थी।",
			"एस्ट्रियल की शक्ति, शायद एक वरदान नहीं थी।"
		]
	}
} as const;
