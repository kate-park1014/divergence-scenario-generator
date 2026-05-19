export const scenario_forest_sloth_legacy_03 = {
	"scenario_id": "forest_sloth_legacy_03",
	"order": 3,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"briar": {
			"id": "mon_21f92820-190e-4d08-a75c-5d2c0b6d0a6b",
			"name": {
				"korean": "브라이어",
				"english": "Briar",
				"japanese": "ブライア",
				"chinese": "布莱尔",
				"french": "Briar",
				"spanish": "Briar",
				"vietnamese": "Briar",
				"thai": "ไบรอา",
				"hindi": "ब्रायर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/41fb431e-57e0-45e0-dde6-1a1f02c01200/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/dd89dff7-88ed-4444-28d8-5aaa85bd4e00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "고요함은 더 깊어졌다. 모든 활력이 멈춘 듯했다.",
						"english": "The silence deepened. All vitality seemed to have ceased.",
						"japanese": "静寂はさらに深まった。全ての活力が止まったかのようだ。",
						"chinese": "寂静更深了。所有的生机似乎都已停止。",
						"french": "Le silence s'épaissit. Toute vitalité semblait avoir cessé.",
						"spanish": "El silencio se hizo más profundo. Toda vitalidad parecía haberse detenido.",
						"vietnamese": "Sự im lặng trở nên sâu sắc hơn. Mọi sức sống dường như đã ngừng lại.",
						"thai": "ความเงียบสงัดลึกซึ้งยิ่งขึ้น พลังชีวิตทั้งหมดดูเหมือนจะหยุดนิ่ง",
						"hindi": "खामोशी और गहरी हो गई। सारी जीवटता थम-सी गई थी।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "너무… 조용해. 이대로 괜찮은 거야?",
						"english": "It's too... quiet. Is this really okay?",
						"japanese": "あまりにも…静かだ。このままで大丈夫なのか？",
						"chinese": "太…安静了。这样真的没问题吗？",
						"french": "C'est trop... silencieux. Est-ce que ça va vraiment ?",
						"spanish": "Es demasiado... silencioso. ¿Está esto realmente bien?",
						"vietnamese": "Quá… yên tĩnh. Như thế này có ổn không?",
						"thai": "มัน… เงียบเกินไป แบบนี้จะดีเหรอ?",
						"hindi": "बहुत... खामोश है। क्या यह ठीक है?"
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"duration_ms": 500,
					"speaker": "briar",
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"emotion": "angry",
					"speaker": "briar",
					"content": {
						"korean": "괜찮을 리 없지. '고요함의 잔재'가 모든 의지를 삼키고 있다.",
						"english": "Of course not. The 'Remnants of Silence' are devouring all will.",
						"japanese": "大丈夫なわけがない。「静寂の残滓」が全ての意志を飲み込んでいる。",
						"chinese": "当然不。 “寂静残骸”正在吞噬所有的意志。",
						"french": "Bien sûr que non. Les 'Vestiges du Silence' dévorent toute volonté.",
						"spanish": "Por supuesto que no. Los 'Vestigios del Silencio' están devorando toda voluntad.",
						"vietnamese": "Đương nhiên là không. 'Tàn dư của Sự Im Lặng' đang nuốt chửng mọi ý chí.",
						"thai": "ไม่มีทางดีแน่ 'ซากแห่งความเงียบงัน' กำลังกลืนกินเจตจำนงทั้งหมด",
						"hindi": "बिल्कुल नहीं। 'खामोशी के अवशेष' सारी इच्छाशक्ति को निगल रहे हैं।"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "의지를 삼킨다고?",
						"english": "Devouring will?",
						"japanese": "意志を飲み込むって？",
						"chinese": "吞噬意志？",
						"french": "Dévore la volonté ?",
						"spanish": "¿Devorando la voluntad?",
						"vietnamese": "Nuốt chửng ý chí ư?",
						"thai": "กลืนกินเจตจำนงงั้นหรือ?",
						"hindi": "इच्छाशक्ति निगल रहे हैं?"
					},
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "briar",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"speaker": "briar",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "그래. 껍데기만 남기고 속을 파먹는 독과 같아. 저 나무들을 봐. 고요함에 잠식되어 굳어가고 있지.",
						"english": "Yes. It's like a poison that hollows you out, leaving only a shell. Look at those trees. They're being consumed by silence and hardening.",
						"japanese": "そうだ。殻だけを残して中身を食い荒らす毒のようだ。あの木々を見てみろ。静寂に侵食され、硬化している。",
						"chinese": "是的。它就像一种毒药，掏空内心，只留下一个空壳。看看那些树。它们正被寂静吞噬，变得僵硬。",
						"french": "Oui. C'est comme un poison qui vous vide, ne laissant qu'une coquille. Regarde ces arbres. Ils sont consumés par le silence et se pétrifient.",
						"spanish": "Sí. Es como un veneno que te vacía, dejando solo un caparazón. Mira esos árboles. Están siendo consumidos por el silencio y se están endureciendo.",
						"vietnamese": "Đúng vậy. Nó giống như một loại độc dược ăn mòn từ bên trong, chỉ còn lại cái vỏ rỗng. Nhìn những cái cây kia kìa. Chúng đang bị sự im lặng nuốt chửng và hóa cứng lại.",
						"thai": "ใช่แล้ว มันเหมือนยาพิษที่กัดกินข้างในจนเหลือแต่เปลือก ดูต้นไม้พวกนั้นสิ พวกมันถูกความเงียบงันกลืนกินจนแข็งกระด้าง",
						"hindi": "हाँ। यह एक ऐसे ज़हर की तरह है जो आपको खोखला कर देता है, सिर्फ़ एक खोल छोड़ जाता है। उन पेड़ों को देखो। वे खामोशी से समाए जा रहे हैं और कठोर हो रहे हैं।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "숲까지…! 막아야 해!",
						"english": "To the forest...! Must stop them!",
						"japanese": "森まで…！止めなければ！",
						"chinese": "到森林了……！必须阻止！",
						"french": "Jusqu'à la forêt… ! Il faut les arrêter !",
						"spanish": "¡Hasta el bosque...! ¡Debo detenerlos!",
						"vietnamese": "Đến rừng rồi...! Phải ngăn lại!",
						"thai": "ไปจนถึงป่า...! ต้องหยุดพวกเขา!",
						"hindi": "जंगल तक...! रोकना होगा!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "서두르지 마. 놈들은 네 의지마저 이용할 거다.",
						"english": "Don't rush. They'll even exploit your will.",
						"japanese": "焦るな。奴らはお前の意思さえも利用するだろう。",
						"chinese": "别急。他们甚至会利用你的意志。",
						"french": "Ne te précipite pas. Ils exploiteront même ta volonté.",
						"spanish": "No te apresures. Ellos explotarán incluso tu voluntad.",
						"vietnamese": "Đừng vội. Chúng sẽ lợi dụng cả ý chí của ngươi.",
						"thai": "อย่ารีบร้อน พวกมันจะใช้ประโยชน์จากเจตจำนงของเจ้าด้วยซ้ำ",
						"hindi": "जल्दी मत करो। वे तुम्हारी इच्छा का भी फायदा उठाएंगे।"
					},
					"speaker": "briar",
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "briar",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "briar",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "'고요함의 잔재'에 저항하는 방법은 있다. 고대 기록에는 '의지를 되돌리는 장치'가 언급되어 있어.",
						"english": "There is a way to resist the 'Remnants of Silence'. Ancient records mention a 'Will-Restoring Device'.",
						"japanese": "「静寂の残滓」に抗う方法はある。古文書には「意思を戻す装置」が記されている。",
						"chinese": "有办法抵抗“寂静残骸”。古代记录中提到了“意志恢复装置”。",
						"french": "Il existe un moyen de résister aux 'Vestiges du Silence'. Les anciens écrits mentionnent un 'Appareil de Restauration de la Volonté'.",
						"spanish": "Hay una forma de resistir los 'Vestigios del Silencio'. Los registros antiguos mencionan un 'Dispositivo Restaurador de la Voluntad'.",
						"vietnamese": "Có cách để chống lại 'Tàn Dư Của Sự Tĩnh Lặng'. Ghi chép cổ đại có nhắc đến 'Thiết Bị Khôi Phục Ý Chí'.",
						"thai": "มีวิธีต่อต้าน 'เศษซากแห่งความเงียบ' บันทึกโบราณกล่าวถึง 'อุปกรณ์ฟื้นฟูเจตจำนง'",
						"hindi": "'शांति के अवशेष' का विरोध करने का एक तरीका है। प्राचीन अभिलेखों में 'इच्छा-पुनर्स्थापन उपकरण' का उल्लेख है।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그런 게 있다고?",
						"english": "Such a thing exists?",
						"japanese": "そんなものが？",
						"chinese": "有那种东西？",
						"french": "Une telle chose existe ?",
						"spanish": "¿Existe algo así?",
						"vietnamese": "Có thứ đó thật sao?",
						"thai": "มีของแบบนั้นด้วยเหรอ?",
						"hindi": "ऐसा कुछ है?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "응. 유적에서 발견된 모호한 기록이지만, '근원'과 싸웠던 초월적 존재에 대한 이야기도 함께 있어. 희망이 아주 없지는 않아.",
						"english": "Yes. It's a vague record found in ruins, but it also tells of a transcendent being who fought the 'Source'. There's still some hope.",
						"japanese": "ああ。遺跡で見つかった曖昧な記録だが、「根源」と戦った超越的存在の話も一緒にある。全く希望がないわけではない。",
						"chinese": "嗯。虽然是遗迹中发现的模糊记录，但也提到了与“本源”战斗过的超凡存在。并非全无希望。",
						"french": "Oui. C'est un registre vague trouvé dans les ruines, mais il parle aussi d'un être transcendant qui a combattu la 'Source'. Il n'y a pas que du désespoir.",
						"spanish": "Sí. Es un registro vago hallado en las ruinas, pero también narra la historia de un ser trascendente que luchó contra la 'Fuente'. No toda esperanza está perdida.",
						"vietnamese": "Ừ. Dù là ghi chép mơ hồ được tìm thấy trong tàn tích, nhưng nó cũng kể về một thực thể siêu việt đã chiến đấu với 'Nguồn Gốc'. Hy vọng vẫn chưa hoàn toàn mất đi.",
						"thai": "ใช่ เป็นบันทึกคลุมเครือที่พบในซากปรักหักพัง แต่ก็กล่าวถึงสิ่งมีชีวิตเหนือธรรมชาติที่ต่อสู้กับ 'ต้นกำเนิด' ยังพอมีความหวังอยู่บ้าง",
						"hindi": "हाँ। यह खंडहरों में मिला एक अस्पष्ट अभिलेख है, लेकिन इसमें 'स्रोत' से लड़ने वाले एक अलौकिक प्राणी की कहानी भी है। पूरी तरह से निराशा नहीं है।"
					},
					"speaker": "briar",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "그럼… 찾아야 해.",
						"english": "Then... I must find it.",
						"japanese": "なら…見つけないと。",
						"chinese": "那么……必须找到它。",
						"french": "Alors… je dois le trouver.",
						"spanish": "Entonces... debo encontrarlo.",
						"vietnamese": "Vậy thì... phải tìm nó thôi.",
						"thai": "งั้น... ต้องหามันให้เจอ",
						"hindi": "तो... मुझे इसे ढूंढना होगा।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "briar"
				},
				{
					"content": {
						"korean": "장치는 숲의 가장 깊은 곳, '고요함의 근원'에 가까이 있다. 위험할 거야.",
						"english": "The device is deep within the forest, near the 'Source of Silence'. It will be dangerous.",
						"japanese": "装置は森の最も深い場所、「静寂の根源」の近くにある。危険だろう。",
						"chinese": "装置在森林最深处，靠近“寂静之源”。那会很危险。",
						"french": "L'appareil se trouve au plus profond de la forêt, près de la 'Source du Silence'. Ce sera dangereux.",
						"spanish": "El dispositivo está en lo más profundo del bosque, cerca de la 'Fuente del Silencio'. Será peligroso.",
						"vietnamese": "Thiết bị nằm sâu nhất trong rừng, gần 'Nguồn Gốc Của Sự Tĩnh Lặng'. Sẽ rất nguy hiểm.",
						"thai": "อุปกรณ์อยู่ในส่วนที่ลึกที่สุดของป่า ใกล้กับ 'แหล่งกำเนิดแห่งความเงียบ' มันจะอันตราย",
						"hindi": "उपकरण जंगल के सबसे गहरे हिस्से में, 'शांति के स्रोत' के पास है। यह खतरनाक होगा।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "briar"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "돌아갈 수 없어. 여기까지 왔는데.",
						"english": "No turning back. Not after coming this far.",
						"japanese": "もう引き返せない。ここまで来たんだから。",
						"chinese": "不能回头了。都走到这里了。",
						"french": "Impossible de faire demi-tour. Pas après être venu si loin.",
						"spanish": "No puedo retroceder. No después de llegar tan lejos.",
						"vietnamese": "Không thể quay lại. Đã đến đây rồi mà.",
						"thai": "ย้อนกลับไปไม่ได้แล้ว มาไกลขนาดนี้",
						"hindi": "वापस नहीं जा सकते। इतनी दूर आ गए हैं।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "briar",
					"content": {
						"korean": "그래. 여기서 물러서면, 모든 의지가 사라질 거다. 너의 분노도, 세상의 희망도.",
						"english": "Indeed. If you retreat now, all will vanish. Your rage, and the world's hope.",
						"japanese": "そうだ。ここで退けば、全ての意思が消え失せるだろう。お前の怒りも、世界の希望も。",
						"chinese": "是的。如果现在退缩，所有的意志都将消失。你的愤怒，以及世界的希望。",
						"french": "Exactement. Si tu recules maintenant, toute volonté disparaîtra. Ta rage, et l'espoir du monde.",
						"spanish": "Así es. Si te retiras ahora, toda voluntad desaparecerá. Tu ira, y la esperanza del mundo.",
						"vietnamese": "Đúng vậy. Nếu ngươi lùi bước bây giờ, mọi ý chí sẽ biến mất. Cả cơn thịnh nộ của ngươi, và hy vọng của thế giới.",
						"thai": "ใช่แล้ว ถ้าเจ้าถอยตอนนี้ เจตจำนงทั้งหมดจะหายไป ทั้งความโกรธของเจ้า และความหวังของโลก",
						"hindi": "हाँ। अगर तुम यहाँ से पीछे हटे, तो सारी इच्छाशक्ति खत्म हो जाएगी। तुम्हारा गुस्सा भी, और दुनिया की उम्मीद भी।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "난… 포기 안 해!",
						"english": "I... won't give up!",
						"japanese": "私…諦めない！",
						"chinese": "我……不会放弃！",
						"french": "Je… n'abandonnerai pas !",
						"spanish": "¡Yo... no me rendiré!",
						"vietnamese": "Ta... không bỏ cuộc!",
						"thai": "ฉัน... ไม่ยอมแพ้!",
						"hindi": "मैं... हार नहीं मानूंगा!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 이 정도… 의지로는… '근원'을… 막지… 못해…",
						"english": "Ugh... With this... much will... you can't... stop... the 'Source'...",
						"japanese": "くっ…この程度の…意志では…「根源」を…止められ…ない…",
						"chinese": "呃…这点…意志…是…无法…阻止…“根源”的…",
						"french": "Ugh… Avec si peu… de volonté… vous ne pourrez pas… arrêter… la 'Source'…",
						"spanish": "Ugh... Con tan poca... voluntad... no podrás... detener... la 'Fuente'...",
						"vietnamese": "Ư… Với chừng… này… ý chí… không thể… ngăn cản… 'Nguồn Gốc'…",
						"thai": "อึก… ด้วยเจตจำนง… แค่นี้… ไม่สามารถ… หยุดยั้ง… 'ต้นกำเนิด'… ได้…",
						"hindi": "उफ़... इस... इतनी इच्छाशक्ति... से... तुम... 'स्रोत' को... रोक... नहीं पाओगे..."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "무슨 소리야?",
						"english": "What are you talking about?",
						"japanese": "何を言ってるんだ？",
						"chinese": "你在说什么？",
						"french": "De quoi parlez-vous ?",
						"spanish": "¿De qué hablas?",
						"vietnamese": "Ngươi đang nói gì vậy?",
						"thai": "คุณกำลังพูดถึงอะไร?",
						"hindi": "तुम क्या कह रहे हो?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "쓰러진 괴물은 고요한 그림자만 남겼다. 하지만, 의문의 '근원'에 대한 위협은 더욱 선명해졌다.",
						"english": "The fallen monster left only a silent shadow. However, the threat of the mysterious 'Source' became clearer.",
						"japanese": "倒れた怪物は静かな影だけを残した。しかし、謎の「根源」に対する脅威はより鮮明になった。",
						"chinese": "倒下的怪物只留下了一道寂静的影子。然而，对神秘“根源”的威胁却变得更加清晰。",
						"french": "Le monstre vaincu ne laissa qu'une ombre silencieuse. Cependant, la menace de la mystérieuse 'Source' devint plus claire.",
						"spanish": "El monstruo caído solo dejó una sombra silenciosa. Sin embargo, la amenaza de la misteriosa 'Fuente' se hizo más clara.",
						"vietnamese": "Con quái vật gục ngã chỉ để lại một cái bóng lặng lẽ. Tuy nhiên, mối đe dọa từ 'Nguồn Gốc' bí ẩn lại càng trở nên rõ ràng hơn.",
						"thai": "สัตว์ประหลาดที่ล้มลงทิ้งไว้เพียงเงียบงัน อย่างไรก็ตาม ภัยคุกคามจาก 'ต้นกำเนิด' ลึกลับก็ยิ่งชัดเจนขึ้น",
						"hindi": "गिरे हुए राक्षस ने केवल एक शांत छाया छोड़ी। हालाँकि, रहस्यमय 'स्रोत' का खतरा और स्पष्ट हो गया।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"action": "enter",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "briar",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "저건 그저 시작일 뿐이야. '근원'은 우리가 상상하는 것 이상으로 거대할 거다.",
						"english": "That's just the beginning. The 'Source' will be far greater than we can imagine.",
						"japanese": "あれは始まりに過ぎない。「根源」は我々が想像する以上に巨大だろう。",
						"chinese": "那只是个开始。“根源”会比我们想象的还要庞大。",
						"french": "Ce n'est que le début. La 'Source' sera bien plus vaste que tout ce que nous pouvons imaginer.",
						"spanish": "Eso es solo el principio. La 'Fuente' será mucho más grande de lo que podemos imaginar.",
						"vietnamese": "Đó chỉ là khởi đầu thôi. 'Nguồn Gốc' sẽ vĩ đại hơn những gì chúng ta tưởng tượng.",
						"thai": "นั่นเป็นเพียงจุดเริ่มต้น 'ต้นกำเนิด' จะยิ่งใหญ่เกินกว่าที่เราจะจินตนาการได้",
						"hindi": "यह तो बस शुरुआत है। 'स्रोत' हमारी कल्पना से भी कहीं अधिक विशाल होगा।"
					},
					"speaker": "briar",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "미약한 의지. 결국 너희도 잠식될 뿐.",
						"english": "Weak will. In the end, you too will only be assimilated.",
						"japanese": "弱い意志だな。結局、お前たちも浸食されるだけだ。",
						"chinese": "脆弱的意志。最终，你们也会被吞噬。",
						"french": "Volonté faible. Au final, vous aussi ne serez qu'assimilés.",
						"spanish": "Voluntad débil. Al final, vosotros también seréis absorbidos.",
						"vietnamese": "Ý chí yếu ớt. Cuối cùng, các ngươi cũng sẽ bị đồng hóa thôi.",
						"thai": "เจตจำนงที่อ่อนแอ ในที่สุดพวกเจ้าก็จะถูกกลืนกินไปเท่านั้น",
						"hindi": "कमजोर इच्छाशक्ति। अंत में, तुम भी विलीन हो जाओगे।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "아직… 끝나지 않았어!",
						"english": "It's not... over yet!",
						"japanese": "まだ…終わってない！",
						"chinese": "还没…结束！",
						"french": "Ce n'est pas… encore fini !",
						"spanish": "¡Aún… no ha terminado!",
						"vietnamese": "Vẫn chưa… kết thúc đâu!",
						"thai": "ยัง… ไม่จบ!",
						"hindi": "अभी… खत्म नहीं हुआ है!"
					},
					"type": "speech"
				},
				{
					"speaker": "briar",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"emotion": "happy",
					"speaker": "briar",
					"content": {
						"korean": "포기하지 마! 우리에겐 아직 희망이 있어!",
						"english": "Don't give up! We still have hope!",
						"japanese": "諦めるな！まだ希望はある！",
						"chinese": "别放弃！我们还有希望！",
						"french": "N'abandonnez pas ! Nous avons encore de l'espoir !",
						"spanish": "¡No te rindas! ¡Todavía tenemos esperanza!",
						"vietnamese": "Đừng bỏ cuộc! Chúng ta vẫn còn hy vọng!",
						"thai": "อย่ายอมแพ้! เรายังมีหวัง!",
						"hindi": "हार मत मानो! हमें अभी भी उम्मीद है!"
					},
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "끈질긴 의지로군. 결국 '고요함'에 흡수될 뿐인데.",
						"english": "Persistent will. You'll only be absorbed by 'Silence' anyway.",
						"japanese": "しつこい意志だな。結局、「静寂」に吸収されるだけだ。",
						"chinese": "顽强的意志。终究只会被“寂静”吞噬。",
						"french": "Volonté tenace. Au final, vous ne serez qu'absorbé par le 'Silence'.",
						"spanish": "Voluntad tenaz. Al final, solo serás absorbido por el 'Silencio'.",
						"vietnamese": "Ý chí bền bỉ. Dù sao thì ngươi cũng sẽ bị 'Im Lặng' hấp thụ thôi.",
						"thai": "ความตั้งใจที่ดื้อรั้น สุดท้ายเจ้าก็จะถูก 'ความเงียบสงบ' กลืนกินไปเท่านั้น",
						"hindi": "दृढ इच्छाशक्ति। अंततः तुम 'नीरवता' में विलीन हो जाओगे।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "감히 내 의지를 건드려? 네놈들 뜻대로 안 돼!",
						"english": "How dare you tamper with my will? You won't have your way!",
						"japanese": "よくも私の意志を弄んだな？お前たちの思い通りにはさせない！",
						"chinese": "竟敢触碰我的意志？你们休想得逞！",
						"french": "Comment osez-vous toucher à ma volonté ? Vous n'aurez pas gain de cause !",
						"spanish": "¿Cómo te atreves a tocar mi voluntad? ¡No saldrás con la tuya!",
						"vietnamese": "Dám chạm vào ý chí của ta? Các ngươi sẽ không được toại nguyện đâu!",
						"thai": "กล้าดียังไงมาแตะต้องเจตจำนงของข้า? พวกแกจะไม่ได้ดังใจหรอก!",
						"hindi": "तुम्हारी हिम्मत कैसे हुई मेरी इच्छा को छूने की? तुम्हारी मनमानी नहीं चलेगी!"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "어리석은 저항. '고요함'은 너희의 운명이다.",
						"english": "Foolish resistance. 'Silence' is your destiny.",
						"japanese": "愚かな抵抗だ。「静寂」がお前たちの運命だ。",
						"chinese": "愚蠢的抵抗。“寂静”是你们的命运。",
						"french": "Résistance futile. Le 'Silence' est votre destin.",
						"spanish": "Resistencia estúpida. El 'Silencio' es vuestro destino.",
						"vietnamese": "Sự chống cự ngu ngốc. 'Im Lặng' là vận mệnh của các ngươi.",
						"thai": "การต่อต้านที่โง่เขลา 'ความเงียบสงบ' คือชะตากรรมของพวกเจ้า",
						"hindi": "मूर्खतापूर्ण प्रतिरोध। 'नीरवता' ही तुम्हारा भाग्य है।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"세상은 이제 '고요함의 잔재'에 완전히 잠식되었다.",
			"의지를 잃은 사람들은 껍데기만 남았고, 숲은 죽은 듯 고요하다.",
			"하지만 모두가 포기한 건 아니었다.",
			"어둠 속에서, 꺼지지 않는 불씨가 타오르고 있었다.",
			"우리는 그 불씨를 찾아야만 했다."
		],
		"english": [
			"The world is now completely engulfed by the 'Remnants of Silence'.",
			"People lost their will, leaving only shells, and the forest is dead silent.",
			"But not everyone gave up.",
			"In the darkness, an unextinguishable spark was burning.",
			"We had to find that spark."
		],
		"japanese": [
			"世界は今、「静寂の残滓」に完全に飲み込まれた。",
			"意志を失った人々は抜け殻となり、森は死んだように静まり返っている。",
			"しかし、誰もが諦めたわけではなかった。",
			"闇の中で、消えない火種が燃え盛っていた。",
			"我々はその火種を見つけなければならなかった。"
		],
		"chinese": [
			"世界已彻底被“寂静残骸”吞噬。",
			"失去意志的人们只剩下躯壳，森林死寂一片。",
			"但并非所有人都放弃了。",
			"黑暗中，一簇不灭的火花正在燃烧。",
			"我们必须找到那簇火花。"
		],
		"french": [
			"Le monde est maintenant entièrement englouti par les 'Vestiges du Silence'.",
			"Les gens ont perdu leur volonté, ne laissant que des coquilles, et la forêt est silencieuse comme la mort.",
			"Mais tout le monde n'avait pas abandonné.",
			"Dans l'obscurité, une étincelle inextinguible brûlait.",
			"Nous devions trouver cette étincelle."
		],
		"spanish": [
			"El mundo ha sido completamente engullido por los 'Vestigios del Silencio'.",
			"La gente perdió su voluntad, quedando solo caparazones, y el bosque está mortalmente silencioso.",
			"Pero no todos se rindieron.",
			"En la oscuridad, una chispa inextinguible ardía.",
			"Debíamos encontrar esa chispa."
		],
		"vietnamese": [
			"Thế giới giờ đây đã hoàn toàn bị 'Tàn dư của Sự Im Lặng' nuốt chửng.",
			"Con người mất đi ý chí, chỉ còn lại lớp vỏ rỗng, và rừng cây tĩnh lặng như chết.",
			"Nhưng không phải ai cũng từ bỏ.",
			"Trong bóng tối, một đốm lửa không thể dập tắt đang bùng cháy.",
			"Chúng ta phải tìm thấy đốm lửa đó."
		],
		"thai": [
			"โลกถูกกลืนกินโดย 'ซากแห่งความเงียบงัน' โดยสมบูรณ์แล้ว",
			"ผู้คนไร้ซึ่งเจตจำนง เหลือเพียงเปลือก และป่าก็เงียบงันราวกับความตาย",
			"แต่ก็ไม่ใช่ทุกคนที่ยอมแพ้",
			"ในความมืดมิด มีประกายไฟที่มิอาจดับได้กำลังลุกโชนอยู่",
			"เราต้องตามหาประกายไฟนั้นให้พบ"
		],
		"hindi": [
			"दुनिया अब 'खामोशी के अवशेष' में पूरी तरह समा गई है।",
			"लोगों ने अपनी इच्छा खो दी, केवल खोखले शरीर बचे, और जंगल मृत-सा खामोश है।",
			"लेकिन सबने हार नहीं मानी थी।",
			"अँधेरे में, एक न बुझने वाली चिंगारी जल रही थी।",
			"हमें उस चिंगारी को खोजना था।"
		]
	}
} as const;
