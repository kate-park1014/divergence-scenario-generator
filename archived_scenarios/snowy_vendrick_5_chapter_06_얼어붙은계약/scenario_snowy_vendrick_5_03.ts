export const scenario_snowy_vendrick_5_03 = {
	"scenario_id": "snowy_vendrick_5_03",
	"order": 3,
	"act": "rising",
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
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"룬문자를 찾아 헤매던 발걸음.",
			"유적의 비밀은 고대 기록 속에.",
			"차가운 지식을 가진 자가 기다린다.",
			"잊혀진 맹세의 그림자가 되살아난다."
		],
		"english": [
			"Footsteps wandering in search of runes.",
			"The ruins' secret lies in ancient records.",
			"The one with cold knowledge awaits.",
			"The shadow of a forgotten vow revives."
		],
		"japanese": [
			"ルーン文字を求めて彷徨う足跡。",
			"遺跡の秘密は古代の記録の中に。",
			"冷たき知識を持つ者が待つ。",
			"忘れられた誓いの影が蘇る。"
		],
		"chinese": [
			"寻觅符文的脚步。",
			"遗迹的秘密藏于古老记载。",
			"拥有冰冷知识之人正在等待。",
			"遗忘誓言的阴影复苏。"
		],
		"french": [
			"Des pas errant à la recherche de runes.",
			"Le secret des ruines réside dans les anciens registres.",
			"Celui qui détient la froide connaissance attend.",
			"L'ombre d'un serment oublié renaît."
		],
		"spanish": [
			"Pasos errantes en busca de runas.",
			"El secreto de las ruinas reside en los registros antiguos.",
			"El que posee el frío conocimiento espera.",
			"La sombra de un juramento olvidado revive."
		],
		"vietnamese": [
			"Bước chân lạc lối tìm kiếm chữ rune.",
			"Bí mật của di tích nằm trong những ghi chép cổ xưa.",
			"Kẻ nắm giữ tri thức lạnh lẽo đang chờ đợi.",
			"Bóng tối của lời thề bị lãng quên sống lại."
		],
		"thai": [
			"ย่างก้าวที่เตร็ดเตร่ตามหารูน",
			"ความลับของซากปรักหักพังอยู่ในบันทึกโบราณ",
			"ผู้ครอบครองความรู้เยือกเย็นกำลังรออยู่",
			"เงาของคำสาบานที่ถูกลืมกลับมามีชีวิตอีกครั้ง"
		],
		"hindi": [
			"रूनों की तलाश में भटकते कदम।",
			"खंडहरों का रहस्य प्राचीन अभिलेखों में छिपा है।",
			"ठंडे ज्ञान वाला व्यक्ति प्रतीक्षा कर रहा है।",
			"भूले हुए वचन की छाया पुनर्जीवित होती है।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "유적의 룬문자는 침묵했다. 해답은 도시의 기록자에게 있었다.",
						"english": "The runes of the ruins were silent. The answer lay with the city's chronicler.",
						"japanese": "遺跡のルーン文字は沈黙した。答えは都市の記録者が握っていた。",
						"chinese": "遗迹的符文沉默不语。答案在城市的记录者那里。",
						"french": "Les runes des ruines étaient silencieuses. La réponse se trouvait chez le chroniqueur de la ville.",
						"spanish": "Las runas de las ruinas guardaban silencio. La respuesta estaba con el cronista de la ciudad.",
						"vietnamese": "Chữ rune của di tích im lặng. Câu trả lời nằm ở người ghi chép của thành phố.",
						"thai": "รูนของซากปรักหักพังเงียบงัน คำตอบอยู่ที่ผู้บันทึกเมือง",
						"hindi": "खंडहरों के रुन खामोश थे। उत्तर शहर के इतिहासकार के पास था।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "보리스 님? 저희가 발견한 룬문자를 좀 봐주십시오.",
						"english": "Lord Boris? Please take a look at the runes we found.",
						"japanese": "ボリス様？我々が発見したルーン文字をご覧になってください。",
						"chinese": "鲍里斯大人？请看看我们发现的符文。",
						"french": "Seigneur Boris ? Veuillez jeter un œil aux runes que nous avons trouvées.",
						"spanish": "¿Señor Boris? Por favor, eche un vistazo a las runas que encontramos.",
						"vietnamese": "Thưa Ngài Boris? Xin hãy xem những chữ rune mà chúng tôi đã tìm thấy.",
						"thai": "ท่านบอริส? โปรดดูรูนที่เราพบ",
						"hindi": "लॉर्ड बोरिस? कृपया हमारे द्वारा खोजे गए रुन देखें।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "boris",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "흐음. 난 허황된 이야기나 신화에는 관심 없어. 실용적인 것만 다루지.",
						"english": "Hmm. I'm not interested in baseless tales or myths. I only deal with practical matters.",
						"japanese": "ふむ。私は根拠のない話や神話には興味がない。実用的なことしか扱わない。",
						"chinese": "嗯。我对虚无缥缈的故事或神话不感兴趣。我只处理实际的事情。",
						"french": "Hmm. Les contes sans fondement ou les mythes ne m'intéressent pas. Je ne m'occupe que de choses pratiques.",
						"spanish": "Hmm. No me interesan los cuentos o mitos infundados. Solo trato con asuntos prácticos.",
						"vietnamese": "Hừm. Ta không quan tâm đến những câu chuyện hoang đường hay thần thoại. Ta chỉ giải quyết những vấn đề thực tế.",
						"thai": "หืมม ฉันไม่สนใจเรื่องเล่าหรือตำนานไร้สาระ ฉันสนใจแต่เรื่องที่ใช้งานได้จริง",
						"hindi": "हूँ। मुझे निराधार कहानियों या मिथकों में कोई दिलचस्पी नहीं है। मैं केवल व्यावहारिक मामलों से निपटता हूँ।"
					},
					"emotion": "base",
					"speaker": "boris",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이건 다릅니다. 직접 보시죠.",
						"english": "This is different. See for yourself.",
						"japanese": "これは違います。直接ご覧ください。",
						"chinese": "这不一样。请亲自看看。",
						"french": "C'est différent. Voyez par vous-même.",
						"spanish": "Esto es diferente. Véalo usted mismo.",
						"vietnamese": "Cái này khác. Xin hãy tự mình xem.",
						"thai": "นี่ไม่เหมือนกัน ดูด้วยตาคุณเอง",
						"hindi": "यह अलग है। खुद देखें।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "boris",
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "boris",
					"type": "speech",
					"content": {
						"korean": "이 문자는… 고대 바이킹의 '피의 맹세'와 일치하는군.",
						"english": "These characters... they match the 'Blood Oath' of the ancient Vikings.",
						"japanese": "この文字は…古代ヴァイキングの「血の誓い」と一致するな。",
						"chinese": "这些文字……与古代维京人的“血誓”相符。",
						"french": "Ces caractères... ils correspondent au « Serment de Sang » des anciens Vikings.",
						"spanish": "Estos caracteres... coinciden con el 'Juramento de Sangre' de los antiguos vikingos.",
						"vietnamese": "Những ký tự này… trùng khớp với 'Lời thề máu' của người Viking cổ đại.",
						"thai": "อักขระเหล่านี้... ตรงกับ 'คำสาบานเลือด' ของชาวไวกิ้งโบราณ",
						"hindi": "ये अक्षर... प्राचीन वाइकिंग्स की 'रक्त शपथ' से मेल खाते हैं।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "피의 맹세요? 그게 뭔데요?",
						"english": "Blood Oath? What's that?",
						"japanese": "血の誓いですか？それは何ですか？",
						"chinese": "血誓？那是什么？",
						"french": "Serment de Sang ? Qu'est-ce que c'est ?",
						"spanish": "¿Juramento de Sangre? ¿Qué es eso?",
						"vietnamese": "Lời thề máu ạ? Đó là gì vậy?",
						"thai": "คำสาบานเลือด? มันคืออะไร?",
						"hindi": "रक्त शपथ? वह क्या है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "boris",
					"type": "speech",
					"content": {
						"korean": "종족 간의 영원한 계약. 맹세를 어기면 혹독한 대가를 치르는.",
						"english": "An eternal covenant between races. Break the oath, and pay a harsh price.",
						"japanese": "種族間の永遠の契約。誓いを破れば、過酷な代償を払うことになる。",
						"chinese": "种族间的永恒契约。若违背誓言，将付出惨痛代价。",
						"french": "Un pacte éternel entre les races. Brisez le serment, et payez un lourd tribut.",
						"spanish": "Un pacto eterno entre razas. Incumple el juramento y paga un precio muy alto.",
						"vietnamese": "Một giao ước vĩnh cửu giữa các chủng tộc. Phá vỡ lời thề, và phải trả giá đắt.",
						"thai": "พันธสัญญาชั่วนิรันดร์ระหว่างเผ่าพันธุ์ หากผิดคำสาบาน จะต้องชดใช้ด้วยราคาอันแสนแพง",
						"hindi": "जातियों के बीच एक शाश्वत अनुबंध। शपथ तोड़ो, और भारी कीमत चुकाओ।"
					},
					"emotion": "base"
				},
				{
					"speaker": "boris",
					"type": "speech",
					"content": {
						"korean": "이 문양은 그 맹세의 징표와 같아. 불길하군.",
						"english": "This emblem is like a mark of that oath. Ominous.",
						"japanese": "この紋様は、その誓いの証のようだ。不吉だな。",
						"chinese": "这纹样就像那誓言的印记。不祥。",
						"french": "Cet emblème est comme la marque de ce serment. Sinistre.",
						"spanish": "Este emblema es como una marca de ese juramento. Ominoso.",
						"vietnamese": "Biểu tượng này giống như dấu hiệu của lời thề đó. Bất an.",
						"thai": "สัญลักษณ์นี้เหมือนเครื่องหมายของคำสาบานนั้น ช่างน่ากลัว",
						"hindi": "यह प्रतीक उस शपथ के निशान जैसा है। अशुभ।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "boris"
				},
				{
					"speaker": "boris",
					"type": "speech",
					"content": {
						"korean": "마을 어귀에 피어있는 푸른 오팔 꽃… 봤나? 겨울에도 시들지 않는.",
						"english": "The blue opal flower blooming at the village entrance... did you see it? It doesn't wither even in winter.",
						"japanese": "村の入り口に咲いていた青いオパール花…見たか？冬でも枯れない。",
						"chinese": "村口盛开的蓝色蛋白石花……你看到了吗？即使在冬天也不凋谢。",
						"french": "La fleur d'opale bleue qui fleurit à l'entrée du village… tu l'as vue ? Elle ne fane pas même en hiver.",
						"spanish": "La flor de ópalo azul que florece a la entrada del pueblo... ¿la viste? No se marchita ni en invierno.",
						"vietnamese": "Bông hoa opal xanh nở ở lối vào làng... bạn đã thấy chưa? Nó không héo ngay cả vào mùa đông.",
						"thai": "ดอกโอปอลสีน้ำเงินที่บานสะพรั่งที่ทางเข้าหมู่บ้าน... เห็นไหม? มันไม่เหี่ยวเฉาแม้ในฤดูหนาว",
						"hindi": "गाँव के प्रवेश द्वार पर खिलता नीला ओपल फूल... क्या तुमने देखा? यह सर्दियों में भी नहीं मुरझाता।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네, 특이해서 인상 깊었어요.",
						"english": "Yes, it was unique and quite striking.",
						"japanese": "はい、珍しくて印象的でした。",
						"chinese": "是的，它很独特，给我留下了深刻印象。",
						"french": "Oui, c'était unique et assez frappant.",
						"spanish": "Sí, era único y bastante llamativo.",
						"vietnamese": "Vâng, nó độc đáo và khá ấn tượng.",
						"thai": "ค่ะ มันแปลกและน่าประทับใจมาก",
						"hindi": "हाँ, यह अद्वितीय था और काफी प्रभावशाली था।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그 꽃잎 문양이… 맹세 문서의 룬문자와 놀랍도록 흡사해.",
						"english": "That petal pattern... it's strikingly similar to the runes in the oath document.",
						"japanese": "その花びらの紋様が…誓いの文書のルーン文字と驚くほど似ている。",
						"chinese": "那花瓣的纹样……与誓言文件中的符文惊人地相似。",
						"french": "Ce motif de pétale... il ressemble étonnamment aux runes du document de serment.",
						"spanish": "Ese patrón de pétalos... es sorprendentemente similar a las runas del documento de juramento.",
						"vietnamese": "Mô hình cánh hoa đó... nó giống đến kinh ngạc với các chữ rune trong tài liệu lời thề.",
						"thai": "ลวดลายกลีบดอกนั้น... มันคล้ายกับอักษรรูนในเอกสารคำสาบานอย่างน่าประหลาดใจ",
						"hindi": "वह पंखुड़ी का पैटर्न... यह शपथ दस्तावेज़ में runes के समान है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "boris"
				},
				{
					"content": {
						"korean": "단순한 우연이 아닐 가능성이 높아. 이건 계약의 징표일 수도 있어.",
						"english": "It's highly likely not a mere coincidence. This could be a mark of the contract.",
						"japanese": "単なる偶然ではない可能性が高い。これは契約の徴候かもしれない。",
						"chinese": "这很可能不是巧合。这可能是契约的标志。",
						"french": "Il est fort probable que ce ne soit pas une simple coïncidence. Cela pourrait être un signe du contrat.",
						"spanish": "Es muy probable que no sea una simple coincidencia. Esto podría ser una marca del contrato.",
						"vietnamese": "Khả năng cao đây không phải là một sự trùng hợp đơn thuần. Đây có thể là dấu hiệu của hợp đồng.",
						"thai": "มีความเป็นไปได้สูงว่านี่ไม่ใช่แค่เรื่องบังเอิญ นี่อาจเป็นสัญลักษณ์ของสัญญา",
						"hindi": "यह केवल एक संयोग नहीं होने की संभावना अधिक है। यह अनुबंध का प्रतीक हो सकता है।"
					},
					"emotion": "base",
					"speaker": "boris",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"speaker": "boris",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "boris",
					"type": "speech",
					"content": {
						"korean": "룬문자와 고대 기록을 조합해보니… 한 가지 섬뜩한 결론에 도달했어.",
						"english": "Combining the runes and ancient records... I've arrived at an unsettling conclusion.",
						"japanese": "ルーン文字と古代の記録を組み合わせてみたら…一つのぞっとする結論に達した。",
						"chinese": "结合符文和古代记录……我得出了一个令人不安的结论。",
						"french": "En combinant les runes et les anciens registres... j'ai atteint une conclusion troublante.",
						"spanish": "Combinando las runas y los registros antiguos... he llegado a una conclusión inquietante.",
						"vietnamese": "Kết hợp các chữ rune và ghi chép cổ đại... tôi đã đi đến một kết luận đáng sợ.",
						"thai": "เมื่อรวมอักษรรูนและบันทึกโบราณเข้าด้วยกัน... ผมได้ข้อสรุปที่น่าขนลุก",
						"hindi": "रुन्स और प्राचीन अभिलेखों को मिलाकर... मैं एक परेशान करने वाले निष्कर्ष पर पहुँचा हूँ।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "'맹세를 잊지 마라'는 희미한 메아리… 네가 들었다는 그거.",
						"english": "The faint echo of 'Do not forget the oath'... the one you heard.",
						"japanese": "「誓いを忘れるな」というかすかな残響…君が聞いたというあれだ。",
						"chinese": "“勿忘誓言”的微弱回声……你听到的那个。",
						"french": "Le faible écho de 'N'oubliez pas le serment'... celui que tu as entendu.",
						"spanish": "El débil eco de 'No olvides el juramento'... el que tú oíste.",
						"vietnamese": "Tiếng vọng mờ nhạt 'Đừng quên lời thề'... cái mà bạn đã nghe thấy.",
						"thai": "เสียงสะท้อนแผ่วเบาของ 'อย่าลืมคำสาบาน'... ที่คุณได้ยินนั่นแหละ",
						"hindi": "'शपथ मत भूलो' की हल्की गूँज... वह जो तुमने सुनी।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "boris"
				},
				{
					"content": {
						"korean": "그게 뭡니까?",
						"english": "What is it?",
						"japanese": "それは何ですか？",
						"chinese": "那是什么？",
						"french": "Qu'est-ce que c'est ?",
						"spanish": "¿Qué es?",
						"vietnamese": "Nó là gì?",
						"thai": "มันคืออะไรครับ?",
						"hindi": "वह क्या है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "boris",
					"content": {
						"korean": "맹세의 영적 잔재일 수 있어. 잊혀진 빚을 끊임없이 추적하는 존재.",
						"english": "It could be a spiritual remnant of the oath. An entity constantly tracking forgotten debts.",
						"japanese": "誓いの霊的な残滓かもしれない。忘れ去られた借りを絶えず追跡する存在だ。",
						"chinese": "它可能是誓言的精神残余。一个不断追溯被遗忘债务的存在。",
						"french": "Cela pourrait être un vestige spirituel du serment. Une entité traquant constamment les dettes oubliées.",
						"spanish": "Podría ser un remanente espiritual del juramento. Una entidad que rastrea constantemente las deudas olvidadas.",
						"vietnamese": "Nó có thể là tàn dư tâm linh của lời thề. Một thực thể liên tục truy tìm những món nợ bị lãng quên.",
						"thai": "มันอาจเป็นซากวิญญาณของคำสาบาน เป็นสิ่งมีชีวิตที่คอยติดตามหนี้ที่ถูกลืมเลือนอยู่เสมอ",
						"hindi": "यह शपथ का एक आध्यात्मिक अवशेष हो सकता है। एक ऐसी इकाई जो भूली हुई debts को लगातार ट्रैक करती रहती है।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "벤드릭… 그 상인이 왜 이 빚에 그렇게 집착하는지, 이제야 퍼즐이 맞춰지는군.",
						"english": "Vendrick... The pieces are finally falling into place. Now I understand why that merchant is so obsessed with this debt.",
						"japanese": "ベンドリック… あの商人がなぜこの借金に固執するのか、ようやくパズルが解けたぞ。",
						"chinese": "本德里克……那个商人为何如此执着于这笔债务，现在我才恍然大悟。",
						"french": "Vendrick... Les pièces du puzzle s'assemblent enfin. Je comprends maintenant pourquoi ce marchand est si obsédé par cette dette.",
						"spanish": "Vendrick... Las piezas del rompecabezas finalmente encajan. Ahora entiendo por qué ese mercader está tan obsesionado con esta deuda.",
						"vietnamese": "Vendrick... Giờ thì mọi chuyện đã rõ ràng. Cuối cùng tôi cũng hiểu tại sao gã thương nhân đó lại ám ảnh với món nợ này đến vậy.",
						"thai": "เวนดริก... ปริศนาคลี่คลายแล้ว ทำไมพ่อค้านั่นถึงหมกมุ่นกับหนี้สินนี้ขนาดนั้น",
						"hindi": "वेंड्रिक... अब पहेली सुलझ रही है। अब मैं समझता हूँ कि वह व्यापारी इस कर्ज को लेकर इतना जुनूनी क्यों है।"
					},
					"emotion": "base",
					"speaker": "boris",
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
						"korean": "크하하… 한 명을 쓰러뜨려도… 맹세는 영원하다. …벤드릭은 너를 기다린다.",
						"english": "Hahaha... Even if one falls... the oath is eternal. ...Vendrick awaits you.",
						"japanese": "クハハ… 一人倒しても… 誓いは永遠だ。…ベンドリックがお前を待っている。",
						"chinese": "哈哈哈……即使一人倒下……誓言永存。……本德里克在等着你。",
						"french": "Hahaha... Même si l'un tombe... le serment est éternel. ...Vendrick t'attend.",
						"spanish": "Jajaja... Aunque uno caiga... el juramento es eterno. ...Vendrick te espera.",
						"vietnamese": "Khakha... Dù một kẻ ngã xuống... lời thề vẫn vĩnh cửu. ...Vendrick đang chờ ngươi.",
						"thai": "ฮ่าฮ่าฮ่า... แม้จะมีคนล้มลง... คำสาบานก็เป็นนิรันดร์... เวนดริกรอเจ้าอยู่",
						"hindi": "हाहाहा... भले ही एक गिरे... शपथ शाश्वत है। ...वेंड्रिक तुम्हारा इंतजार कर रहा है।"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "벤드릭? 네가 감히 그 이름을 입에 올려?",
						"english": "Vendrick? How dare you utter that name?",
						"japanese": "ベンドリック？ 貴様、よくもその名を口にしたな？",
						"chinese": "本德里克？你竟敢说出那个名字？",
						"french": "Vendrick ? Comment oses-tu prononcer ce nom ?",
						"spanish": "¿Vendrick? ¿Cómo te atreves a pronunciar ese nombre?",
						"vietnamese": "Vendrick? Ngươi dám nhắc đến cái tên đó sao?",
						"thai": "เวนดริก? แกกล้าเอ่ยชื่อนั้นรึ?",
						"hindi": "वेंड्रिक? तुम्हारी हिम्मत कैसे हुई वह नाम लेने की?"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "쓰러진 중간 보스. 그러나 알 수 없는 불안감은 더욱 커져갔다.",
						"english": "The mid-boss fell. Yet, an unknown unease grew ever stronger.",
						"japanese": "倒れた中間ボス。しかし、得体の知れない不安感はさらに募っていった。",
						"chinese": "中级首领倒下了。然而，一股莫名的不安感却愈发强烈。",
						"french": "Le boss intermédiaire tomba. Pourtant, une inquiétude inconnue ne fit que croître.",
						"spanish": "El jefe intermedio cayó. Sin embargo, una inquietud desconocida crecía cada vez más.",
						"vietnamese": "Trùm giữa đã gục ngã. Tuy nhiên, một sự bất an không rõ nguồn gốc ngày càng lớn dần.",
						"thai": "บอสกึ่งกลางล้มลง ทว่าความกังวลที่ไม่ทราบสาเหตุกลับเพิ่มขึ้นเรื่อยๆ",
						"hindi": "मध्य-बॉस गिर गया। फिर भी, एक अज्ञात बेचैनी और बढ़ती गई।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "고대 맹세의 심장부가, 더 깊은 어둠 속에서 침묵하고 있었다.",
						"english": "The heart of the ancient oath lay silent in the deeper darkness.",
						"japanese": "古の誓いの心臓部が、より深い闇の中で沈黙していた。",
						"chinese": "古老誓言的中心，在更深的黑暗中沉寂着。",
						"french": "Le cœur de l'ancien serment reposait silencieux dans les ténèbres profondes.",
						"spanish": "El corazón del antiguo juramento yacía en silencio en la oscuridad más profunda.",
						"vietnamese": "Trái tim của lời thề cổ đại nằm im lìm trong bóng tối sâu thẳm hơn.",
						"thai": "ใจกลางของคำสาบานโบราณเงียบงันอยู่ในความมืดมิดที่ลึกกว่า",
						"hindi": "प्राचीन शपथ का हृदय, गहरी अँधेरे में शांत पड़ा था।"
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "거대한 그림자의 힘에 압도당했다. 차가운 절망이 몰려왔다.",
						"english": "Overwhelmed by the colossal shadow's power. Cold despair washed over.",
						"japanese": "巨大な影の力に圧倒された。冷たい絶望が押し寄せた。",
						"chinese": "被巨大黑影的力量所压倒。冰冷的绝望涌上心头。",
						"french": "Submergé par la puissance de l'ombre colossale. Un froid désespoir m'envahit.",
						"spanish": "Abrumado por el poder de la sombra colosal. Una fría desesperación me invadió.",
						"vietnamese": "Bị áp đảo bởi sức mạnh của bóng đen khổng lồ. Tuyệt vọng lạnh lẽo ập đến.",
						"thai": "ถูกพลังของเงาขนาดมหึมากดขี่ ความสิ้นหวังอันเย็นเยียบเข้าครอบงำ",
						"hindi": "विशालकाय छाया की शक्ति से अभिभूत। ठंडी निराशा छा गई।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "맹세를 거역하려 하는가? 네 시련은 끝나지 않는다.",
						"english": "Defy your oath? Your trial is far from over.",
						"japanese": "誓いを破るつもりか？お前の試練は終わらない。",
						"chinese": "想违背誓言吗？你的试炼永无止境。",
						"french": "Défier votre serment ? Votre épreuve est loin d'être terminée.",
						"spanish": "¿Desafías tu juramento? Tu prueba no ha terminado.",
						"vietnamese": "Ngươi dám phản bội lời thề? Thử thách của ngươi vẫn chưa kết thúc.",
						"thai": "เจ้าจะทรยศคำสาบานหรือ? การทดลองของเจ้ายังไม่จบสิ้น",
						"hindi": "शपथ भंग कर रहे हो? तुम्हारी परीक्षा अभी समाप्त नहीं हुई है।"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "빌어먹을… 아직 끝나지 않았어! 우린 포기하지 않아!",
						"english": "Damn it... It's not over yet! We won't give up!",
						"japanese": "くそっ… まだ終わってない！俺たちは諦めない！",
						"chinese": "该死… 还没结束！我们不会放弃！",
						"french": "Maudit... Ce n'est pas encore fini ! Nous n'abandonnerons pas !",
						"spanish": "Maldita sea... ¡Todavía no ha terminado! ¡No nos rendiremos!",
						"vietnamese": "Chết tiệt... Vẫn chưa kết thúc! Chúng ta sẽ không bỏ cuộc!",
						"thai": "ให้ตายสิ... มันยังไม่จบ! เราไม่ยอมแพ้!",
						"hindi": "धिक्कार है... अभी खत्म नहीं हुआ! हम हार नहीं मानेंगे!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "차가운 유적의 가장 깊은 곳. 거대한 그림자가 나타났다.",
						"english": "Deepest within the cold ruins, a colossal shadow emerged.",
						"japanese": "冷たい遺跡の最深部。巨大な影が現れた。",
						"chinese": "冰冷遗迹的最深处。一道巨大的黑影出现了。",
						"french": "Au plus profond des ruines glaciales, une ombre colossale apparut.",
						"spanish": "En lo más profundo de las frías ruinas, una sombra colosal emergió.",
						"vietnamese": "Sâu thẳm nhất trong di tích lạnh lẽo, một bóng đen khổng lồ hiện ra.",
						"thai": "ลึกสุดในซากปรักหักพังอันเยือกเย็น เงาขนาดมหึมาปรากฏขึ้น",
						"hindi": "शीतल खंडहरों की गहराई में, एक विशालकाय छाया उभरी।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "맹세를 잊은 어리석은 자여… 네 빚을 갚을 시간이다.",
						"english": "Fool who forgot the oath... It is time to pay your debt.",
						"japanese": "誓いを忘れた愚か者よ… 借りを返す時が来た。",
						"chinese": "遗忘誓言的愚者啊……是时候偿还你的债务了。",
						"french": "Insensé qui as oublié ton serment... Il est temps de payer ta dette.",
						"spanish": "Tonto que olvidaste tu juramento... Es hora de pagar tu deuda.",
						"vietnamese": "Kẻ ngốc đã quên lời thề... Đã đến lúc trả nợ rồi.",
						"thai": "เจ้าผู้โง่เขลาที่ลืมคำสาบาน... ถึงเวลาชดใช้หนี้ของเจ้าแล้ว",
						"hindi": "शपथ भूलने वाले मूर्ख... अपने कर्ज चुकाने का समय आ गया है।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "빚 따윈 없어! 우린 너희의 꼭두각시가 아니야!",
						"english": "We owe nothing! We are not your puppets!",
						"japanese": "借金などない！ 我々は貴様らの操り人形ではない！",
						"chinese": "我们没有债务！我们不是你们的傀儡！",
						"french": "Nous ne devons rien ! Nous ne sommes pas vos marionnettes !",
						"spanish": "¡No debemos nada! ¡No somos vuestras marionetas!",
						"vietnamese": "Chúng ta không nợ gì cả! Chúng ta không phải con rối của các ngươi!",
						"thai": "เราไม่มีหนี้! เราไม่ใช่หุ่นเชิดของพวกแก!",
						"hindi": "हमें कोई कर्ज नहीं! हम तुम्हारे कठपुतली नहीं हैं!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "무지한 자여. 대가는 반드시 치러진다. 이 순환은 끝나지 않는다.",
						"english": "Ignorant one. The price will be paid. This cycle will not end.",
						"japanese": "無知なる者よ。代償は必ず払われる。この循環は終わらない。",
						"chinese": "无知者。代价终将付出。这个循环永无止境。",
						"french": "Ignorant. Le prix sera payé. Ce cycle ne prendra pas fin.",
						"spanish": "Ignorante. El precio será pagado. Este ciclo no terminará.",
						"vietnamese": "Kẻ ngu muội. Cái giá phải trả sẽ đến. Vòng luân hồi này sẽ không kết thúc.",
						"thai": "เจ้าผู้ไร้ความรู้ ค่าตอบแทนจะต้องถูกชดใช้ วงจรนี้จะไม่มีวันสิ้นสุด",
						"hindi": "अज्ञानी। कीमत चुकानी होगी। यह चक्र समाप्त नहीं होगा।"
					},
					"emotion": "angry"
				}
			]
		}
	]
} as const;
