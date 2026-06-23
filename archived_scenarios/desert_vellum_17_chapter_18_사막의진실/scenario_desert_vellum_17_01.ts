export const scenario_desert_vellum_17_01 = {
	"scenario_id": "desert_vellum_17_01",
	"order": 1,
	"act": "intro",
	"theme": "desert",
	"actors": {
		"amir": {
			"id": "mon_0096d602-52ab-4a9c-9cc8-4ff18ed3b655",
			"name": {
				"korean": "아미르",
				"english": "Amir",
				"japanese": "アミール",
				"chinese": "阿米尔",
				"french": "Amir",
				"spanish": "Amir",
				"vietnamese": "Amir",
				"thai": "อาเมียร์",
				"hindi": "अमीर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8cd60fb0-3699-44c4-6425-a3e97eec1800/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/b644dc95-9c27-442e-6dc6-73e5550a0200/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"끝없이 펼쳐진 모래 사막.",
			"타들어가는 갈증만큼, 절망도 깊어지는 곳.",
			"그러나 우리는 멈출 수 없었다. 단 하나의 지식이라도 얻기 위해.",
			"그 첫 발걸음에서, 우리는 거래를 시작했다."
		],
		"english": [
			"An endless expanse of sandy desert.",
			"Where despair deepens as thirst burns.",
			"But we couldn't stop. To gain even a single piece of knowledge.",
			"With that first step, we began our trade."
		],
		"japanese": [
			"果てしなく広がる砂漠。",
			"渇きが焼けるほど、絶望も深まる場所。",
			"しかし、私たちは止まることができなかった。たった一つの知識でも得るために。",
			"その第一歩で、私たちは取引を始めた。"
		],
		"chinese": [
			"一望无际的沙质沙漠。",
			"口渴难耐，绝望也随之加深之地。",
			"但是我们不能停下。为了获取哪怕一丝知识。",
			"在迈出第一步时，我们开始了交易。"
		],
		"french": [
			"Une étendue sans fin de désert de sable.",
			"Où le désespoir s'intensifie à mesure que la soif brûle.",
			"Mais nous ne pouvions pas nous arrêter. Pour acquérir ne serait-ce qu'une seule connaissance.",
			"Avec ce premier pas, nous avons commencé notre commerce."
		],
		"spanish": [
			"Un desierto de arena que se extiende sin fin.",
			"Un lugar donde la desesperación se profundiza tanto como la sed.",
			"Pero no pudimos detenernos. Para obtener aunque sea un solo fragmento de conocimiento.",
			"Con ese primer paso, comenzamos nuestro intercambio."
		],
		"vietnamese": [
			"Một sa mạc cát trải dài vô tận.",
			"Nơi tuyệt vọng càng sâu sắc khi cơn khát càng cháy bỏng.",
			"Nhưng chúng tôi không thể dừng lại. Để đạt được dù chỉ một chút kiến thức.",
			"Với bước đi đầu tiên đó, chúng tôi bắt đầu giao dịch."
		],
		"thai": [
			"ทะเลทรายอันกว้างใหญ่ไร้ที่สิ้นสุด",
			"ที่ซึ่งความสิ้นหวังยิ่งทวีคูณเท่ากับความกระหายที่แผดเผา",
			"แต่เราหยุดไม่ได้ เพื่อให้ได้มาซึ่งความรู้แม้เพียงน้อยนิด",
			"ในก้าวแรกนั้น เราได้เริ่มต้นการแลกเปลี่ยน"
		],
		"hindi": [
			"रेतीला रेगिस्तान का एक अंतहीन विस्तार।",
			"जहाँ प्यास की तरह ही निराशा भी गहरी होती जाती है।",
			"लेकिन हम रुक नहीं सकते थे। ज्ञान का एक टुकड़ा भी पाने के लिए।",
			"उस पहले कदम के साथ, हमने अपना व्यापार शुरू किया।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "모래폭풍이 휩쓸고 간 폐허. 그 입구는 침묵에 잠겨 있었다.",
						"english": "Ruins ravaged by a sandstorm. Its entrance was steeped in silence.",
						"japanese": "砂嵐が吹き荒れた廃墟。その入り口は沈黙に包まれていた。",
						"chinese": "被沙尘暴席卷的废墟。入口处一片寂静。",
						"french": "Ruines ravagées par une tempête de sable. Son entrée était plongée dans le silence.",
						"spanish": "Ruinas arrasadas por una tormenta de arena. Su entrada estaba sumida en el silencio.",
						"vietnamese": "Hoang tàn bởi bão cát. Lối vào chìm trong im lặng.",
						"thai": "ซากปรักหักพังที่ถูกพายุทรายพัดถล่ม ทางเข้าปกคลุมไปด้วยความเงียบงัน",
						"hindi": "रेत के तूफान से तबाह हुए खंडहर। इसका प्रवेश द्वार खामोशी में डूबा हुआ था।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "여기가 그 폐허…?",
						"english": "This is the ruin...?",
						"japanese": "ここが、その廃墟…？",
						"chinese": "这里就是那个废墟……？",
						"french": "C'est ça la ruine...?",
						"spanish": "¿Este es el páramo...?",
						"vietnamese": "Đây là phế tích đó sao...?",
						"thai": "ที่นี่คือซากปรักหักพังนั้น...?",
						"hindi": "यह वही खंडहर है...?"
					}
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "amir",
					"action": "enter",
					"spot": [
						4,
						2
					]
				},
				{
					"content": {
						"korean": "어서 와. Vellum을 찾고 있지?",
						"english": "Welcome. You're looking for Vellum, aren't you?",
						"japanese": "ようこそ。Vellumを探しているんだろう？",
						"chinese": "欢迎。你在找Vellum，对吗？",
						"french": "Bienvenue. Tu cherches Vellum, n'est-ce pas ?",
						"spanish": "Bienvenido. Estás buscando a Vellum, ¿verdad?",
						"vietnamese": "Chào mừng. Ngươi đang tìm Vellum phải không?",
						"thai": "ยินดีต้อนรับ กำลังมองหา Vellum อยู่ใช่ไหม?",
						"hindi": "स्वागत है। तुम वेल्लम को ढूंढ रहे हो, है ना?"
					},
					"emotion": "base",
					"speaker": "amir",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그는 깊은 곳에 숨어있어. 그를 만나려면… '단서'가 필요해.",
						"english": "He's hidden deep within. To meet him... you'll need a 'clue'.",
						"japanese": "彼は奥深くに隠れている。彼に会うには…「手がかり」が必要だ。",
						"chinese": "他藏得很深。要见到他……你需要一个“线索”。",
						"french": "Il est caché profondément. Pour le rencontrer... il te faudra un 'indice'.",
						"spanish": "Está escondido en lo profundo. Para encontrarlo... necesitarás una 'pista'.",
						"vietnamese": "Hắn ẩn sâu bên trong. Để gặp hắn... ngươi cần một 'manh mối'.",
						"thai": "เขาซ่อนตัวอยู่ในส่วนลึก หากจะพบเขา... คุณจะต้องมี 'เบาะแส'",
						"hindi": "वह गहराई में छिपा हुआ है। उससे मिलने के लिए... तुम्हें एक 'सुराग' चाहिए।"
					},
					"emotion": "base",
					"speaker": "amir",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "단서?",
						"english": "A clue?",
						"japanese": "手がかり？",
						"chinese": "线索？",
						"french": "Un indice ?",
						"spanish": "¿Una pista?",
						"vietnamese": "Manh mối?",
						"thai": "เบาะแส?",
						"hindi": "एक सुराग?"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"speaker": "amir",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "amir",
					"type": "speech",
					"content": {
						"korean": "Vellum은 쉬운 상대가 아니야. 그만큼 얻을 것도 많지.",
						"english": "Vellum isn't an easy opponent. But there's much to gain from him.",
						"japanese": "Vellumは簡単な相手じゃない。それだけに、得られるものも大きい。",
						"chinese": "Vellum可不是个好对付的家伙。但能从他那里得到的东西也很多。",
						"french": "Vellum n'est pas un adversaire facile. Mais il y a beaucoup à gagner avec lui.",
						"spanish": "Vellum no es un oponente fácil. Pero hay mucho que ganar de él.",
						"vietnamese": "Vellum không phải đối thủ dễ xơi. Nhưng cũng có nhiều thứ để đạt được.",
						"thai": "Vellum ไม่ใช่คู่ต่อสู้ที่ง่ายดาย แต่ก็มีสิ่งที่จะได้จากเขามากมาย",
						"hindi": "वेल्लम आसान प्रतिद्वंद्वी नहीं है। लेकिन उससे बहुत कुछ हासिल किया जा सकता है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "여기… 뭔가 있어.",
						"english": "Something's here...",
						"japanese": "ここに…何かある。",
						"chinese": "这里…有东西。",
						"french": "Il y a... quelque chose ici.",
						"spanish": "Aquí… hay algo.",
						"vietnamese": "Ở đây... có gì đó.",
						"thai": "ที่นี่... มีบางอย่าง",
						"hindi": "यहाँ... कुछ है।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "고대어가 새겨진 작은 칼날 파편이 모래 속에 박혀 있었다.",
						"english": "A small blade shard, etched with ancient words, was stuck in the sand.",
						"japanese": "古代の言葉が刻まれた小さな刃の破片が砂に突き刺さっていた。",
						"chinese": "一块刻有古老文字的小刀片碎片嵌在沙子里。",
						"french": "Un petit éclat de lame, gravé de mots anciens, était planté dans le sable.",
						"spanish": "Un pequeño trozo de hoja, grabado con palabras antiguas, estaba clavado en la arena.",
						"vietnamese": "Một mảnh lưỡi dao nhỏ, khắc chữ cổ, cắm trong cát.",
						"thai": "เศษใบมีดเล็กๆ ที่สลักด้วยอักษรโบราณปักอยู่ในทราย",
						"hindi": "रेत में प्राचीन शब्दों से खुदा हुआ एक छोटा ब्लेड का टुकड़ा फंसा हुआ था।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"emotion": "base",
					"content": {
						"korean": "'잘라낸 지식'이라고…?",
						"english": "'Severed Knowledge,' huh...?",
						"japanese": "「切り取られた知識」だと…？",
						"chinese": "“切断的知识”…？",
						"french": "« Savoir Tranché », c'est ça... ?",
						"spanish": "¿«Conocimiento Cercenado», eh...?",
						"vietnamese": "'Tri thức bị cắt đứt' ư...?",
						"thai": "'ความรู้ที่ถูกตัดขาด' รึ...?",
						"hindi": "'विच्छेदित ज्ञान', है ना...?"
					}
				},
				{
					"type": "speech",
					"speaker": "amir",
					"emotion": "base",
					"content": {
						"korean": "그게 바로 '단서'다. 그걸 가지고 Vellum에게 가.",
						"english": "That's the 'clue.' Take it to Vellum.",
						"japanese": "それが「手がかり」だ。Vellumのところへ持って行け。",
						"chinese": "那就是“线索”。把它带给Vellum。",
						"french": "C'est la « piste ». Apporte-le à Vellum.",
						"spanish": "Esa es la «pista». Llévaselo a Vellum.",
						"vietnamese": "Đó là 'manh mối'. Mang nó đến Vellum.",
						"thai": "นั่นแหละคือ 'เบาะแส' เอาไปให้ Vellum ซะ",
						"hindi": "वही 'सुराग' है। इसे वेल्लम के पास ले जाओ।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "이런 게 단서라고?",
						"english": "This is a clue?",
						"japanese": "こんなものが手がかりだと？",
						"chinese": "这会是线索？",
						"french": "C'est ça, une piste ?",
						"spanish": "¿Esto es una pista?",
						"vietnamese": "Thứ này là manh mối sao?",
						"thai": "นี่คือเบาะแสหรือ?",
						"hindi": "यह कोई सुराग है?"
					}
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "amir",
					"action": "enter",
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "amir",
					"emotion": "sad",
					"content": {
						"korean": "폐허 깊은 곳은 위험해. 보통 거래와는 다를 거야.",
						"english": "Deep within the ruins, it's dangerous. This won't be a normal deal.",
						"japanese": "廃墟の奥深くは危険だ。普通の取引とは違うだろう。",
						"chinese": "废墟深处很危险。这不会是一场普通的交易。",
						"french": "Les profondeurs des ruines sont dangereuses. Ce ne sera pas une transaction normale.",
						"spanish": "Las profundidades de las ruinas son peligrosas. Esto no será un trato normal.",
						"vietnamese": "Sâu trong tàn tích rất nguy hiểm. Đây sẽ không phải là một giao dịch bình thường.",
						"thai": "ลึกเข้าไปในซากปรักหักพังมันอันตราย นี่จะไม่ใช่ข้อตกลงธรรมดา",
						"hindi": "खंडहरों की गहराई में खतरा है। यह कोई सामान्य सौदा नहीं होगा।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "어차피 우린 갈 곳도 없어.",
						"english": "We have nowhere else to go anyway.",
						"japanese": "どうせ、他にどこへ行く当てもない。",
						"chinese": "反正我们无处可去。",
						"french": "De toute façon, nous n'avons nulle part où aller.",
						"spanish": "De todas formas, no tenemos adónde ir.",
						"vietnamese": "Dù sao thì chúng ta cũng chẳng còn nơi nào để đi.",
						"thai": "ยังไงเราก็ไม่มีที่ไปอยู่แล้ว",
						"hindi": "वैसे भी हमारे पास और कहीं जाने की जगह नहीं है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "amir",
					"emotion": "base",
					"content": {
						"korean": "후회해도 소용없어. 이제 돌이킬 수 없어.",
						"english": "No use regretting it now. There's no turning back.",
						"japanese": "後悔しても無駄だ。もう引き返せない。",
						"chinese": "后悔也无济于事了。现在无法回头。",
						"french": "Inutile de regretter. On ne peut plus revenir en arrière.",
						"spanish": "Inútil arrepentirse ahora. Ya no hay vuelta atrás.",
						"vietnamese": "Hối hận cũng vô ích. Giờ không thể quay lại được nữa.",
						"thai": "เสียใจไปก็ไม่มีประโยชน์แล้ว ตอนนี้ย้อนกลับไม่ได้แล้ว",
						"hindi": "अब पछताने का कोई फायदा नहीं। अब पीछे नहीं हट सकते।"
					}
				},
				{
					"content": {
						"korean": "후회는 없어. 지식만 있다면.",
						"english": "No regrets. Not if it means knowledge.",
						"japanese": "後悔はない。知識さえ手に入るなら。",
						"chinese": "没有遗憾。只要有知识。",
						"french": "Aucun regret. Pas si c'est pour la connaissance.",
						"spanish": "No hay arrepentimientos. No si hay conocimiento.",
						"vietnamese": "Không hối tiếc. Miễn là có tri thức.",
						"thai": "ไม่เสียใจ ถ้าได้ความรู้มา",
						"hindi": "कोई पछतावा नहीं। अगर ज्ञान मिलता है तो।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "amir",
					"action": "enter",
					"spot": [
						4,
						2
					]
				},
				{
					"content": {
						"korean": "이젠 되돌아갈 수 없어. Vellum은… 네가 원하는 걸 줄 수도, 빼앗을 수도 있어.",
						"english": "There's no turning back now. Vellum... can give you what you want, or take it away.",
						"japanese": "もう引き返せない。Vellumは…お前が望むものを与えることも、奪うこともできる。",
						"chinese": "现在已经无法回头了。Vellum…既能给你想要的，也能把它夺走。",
						"french": "On ne peut plus revenir en arrière maintenant. Vellum... peut te donner ce que tu veux, ou te le retirer.",
						"spanish": "Ya no hay vuelta atrás. Vellum... puede darte lo que quieres o quitártelo.",
						"vietnamese": "Giờ không thể quay lại được nữa. Vellum... có thể cho hoặc lấy đi những gì bạn muốn.",
						"thai": "ตอนนี้กลับไปไม่ได้แล้ว Vellum... อาจจะให้ในสิ่งที่เจ้าต้องการ หรืออาจจะพรากมันไปก็ได้",
						"hindi": "अब पीछे नहीं हट सकते। वेल्लम... तुम्हें जो चाहिए वो दे भी सकता है और छीन भी सकता है।"
					},
					"emotion": "sad",
					"speaker": "amir",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "알고 있어. 각오했어.",
						"english": "I know. I'm ready.",
						"japanese": "分かってる。覚悟はできてる。",
						"chinese": "我知道。我已做好准备。",
						"french": "Je sais. Je suis prêt(e).",
						"spanish": "Lo sé. Estoy listo/a.",
						"vietnamese": "Tôi biết. Tôi đã sẵn sàng.",
						"thai": "รู้แล้ว. ทำใจไว้แล้ว.",
						"hindi": "मुझे पता है। मैं तैयार हूँ।"
					}
				},
				{
					"speaker": "amir",
					"type": "speech",
					"content": {
						"korean": "…그럼 가봐. 네가 얻을 수 있기를.",
						"english": "...Then go. May you obtain it.",
						"japanese": "…じゃあ、行け。お前が手に入れられるように。",
						"chinese": "...那去吧。愿你如愿以偿。",
						"french": "...Alors va. Puisses-tu l'obtenir.",
						"spanish": "...Entonces ve. Que puedas conseguirlo.",
						"vietnamese": "...Vậy thì đi đi. Mong là ngươi sẽ đạt được nó.",
						"thai": "...งั้นก็ไปเถอะ. ขอให้เจ้าได้ในสิ่งที่ต้องการ.",
						"hindi": "...तो जाओ। आशा है तुम इसे प्राप्त कर सको।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "얕잡아보지 마라. 이곳의 비밀은… 네가 감당 못 할 것이다.",
						"english": "Don't underestimate me. The secret of this place... you can't handle it.",
						"japanese": "甘く見るな。この場所の秘密は… お前には背負いきれない。",
						"chinese": "别小看我。这个地方的秘密… 你承受不起。",
						"french": "Ne me sous-estime pas. Le secret de cet endroit... tu ne pourras pas le supporter.",
						"spanish": "No me subestimes. El secreto de este lugar... no podrás manejarlo.",
						"vietnamese": "Đừng khinh thường ta. Bí mật của nơi này... ngươi không thể chịu đựng nổi đâu.",
						"thai": "อย่าประมาท ที่แห่งนี้มีความลับ... ที่เจ้าจะรับมือไม่ไหว",
						"hindi": "मुझे कम मत समझो। इस जगह का रहस्य... तुम संभाल नहीं पाओगे।"
					}
				},
				{
					"content": {
						"korean": "젠장… 아직은 아니야!",
						"english": "Damn it... not yet!",
						"japanese": "くそっ… まだだ！",
						"chinese": "该死… 还没完！",
						"french": "Fichu... Pas encore !",
						"spanish": "¡Maldición... Aún no!",
						"vietnamese": "Chết tiệt… Chưa phải lúc!",
						"thai": "ให้ตายสิ... ยังไม่ถึงเวลา!",
						"hindi": "धिक्कार है… अभी नहीं!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "폐허의 가장 깊은 곳. 거대한 그림자가 앞을 가로막았다.",
						"english": "The deepest part of the ruins. A colossal shadow blocked the way.",
						"japanese": "廃墟の最も深い場所。巨大な影が道を塞いだ。",
						"chinese": "废墟最深处。一道巨大的黑影挡住了去路。",
						"french": "Au plus profond des ruines. Une ombre colossale barra le chemin.",
						"spanish": "La parte más profunda de las ruinas. Una sombra gigantesca bloqueó el camino.",
						"vietnamese": "Nơi sâu nhất của phế tích. Một bóng đen khổng lồ chặn đường.",
						"thai": "ส่วนที่ลึกที่สุดของซากปรักหักพัง. เงาขนาดมหึมาขวางทางอยู่.",
						"hindi": "खंडहरों का सबसे गहरा हिस्सा। एक विशाल छाया ने रास्ता रोक दिया।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "더는… 안 된다.",
						"english": "No more... I can't.",
						"japanese": "もう…ダメだ。",
						"chinese": "不能再…这样了。",
						"french": "Plus loin... C'est impossible.",
						"spanish": "No más... Esto es todo.",
						"vietnamese": "Không thể nữa rồi...",
						"thai": "ไม่ไหวแล้ว...",
						"hindi": "और नहीं... अब नहीं।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "비켜!",
						"english": "Get out of the way!",
						"japanese": "退け！",
						"chinese": "让开！",
						"french": "Écarte-toi !",
						"spanish": "¡Quítate!",
						"vietnamese": "Tránh ra!",
						"thai": "หลีกไป!",
						"hindi": "हट जाओ!"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"direction": "down",
					"duration_ms": 400,
					"action": "exit",
					"speaker": "amir"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…이건 네 몫이야.",
						"english": "...This is yours.",
						"japanese": "…これはお前のものだ。",
						"chinese": "...这是你的了。",
						"french": "...C'est pour toi.",
						"spanish": "...Esto es tuyo.",
						"vietnamese": "...Cái này là của ngươi.",
						"thai": "...นี่คือส่วนของเจ้า.",
						"hindi": "...यह तुम्हारा हिस्सा है।"
					},
					"type": "speech",
					"speaker": "amir"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "콜록… 네가 찾던 지식… 그것은….",
						"english": "Cough... The knowledge you sought... it is...",
						"japanese": "ゴホッ…お前が探していた知識…それは…。",
						"chinese": "咳咳…你所寻求的知识…它就是….",
						"french": "Tousse... Le savoir que tu cherchais... il est...",
						"spanish": "Cof... cof... El conocimiento que buscabas... es...",
						"vietnamese": "Khụ khụ... Kiến thức ngươi tìm kiếm... nó là...",
						"thai": "แค่กๆ... ความรู้ที่เจ้าตามหา... มันคือ...",
						"hindi": "खाँसी... जिस ज्ञान को तुम ढूंढ रहे थे... वह है..."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "끝났나…?",
						"english": "Is it over...?",
						"japanese": "終わったのか…？",
						"chinese": "结束了吗…？",
						"french": "Est-ce fini...?",
						"spanish": "¿Terminó...?",
						"vietnamese": "Kết thúc rồi sao...?",
						"thai": "จบแล้วหรือ...?",
						"hindi": "क्या यह खत्म हो गया है...?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "쓰러진 정체 모를 자. 그 뒤로, 어렴풋이 빛이 새어 나왔다.",
						"english": "The unknown figure fell. Behind it, a faint light seeped out.",
						"japanese": "倒れた正体不明の者。その後ろから、おぼろげな光が漏れ出した。",
						"chinese": "身份不明之人倒下了。在其身后，隐约有光芒透出。",
						"french": "L'inconnu tomba. Derrière lui, une faible lumière s'échappa.",
						"spanish": "La figura desconocida cayó. Detrás de ella, una tenue luz se filtraba.",
						"vietnamese": "Kẻ không rõ danh tính gục ngã. Đằng sau hắn, một luồng sáng yếu ớt rò rỉ ra.",
						"thai": "ร่างที่ไม่ทราบที่มาล้มลง. เบื้องหลังของมัน มีแสงสลัวๆ เล็ดลอดออกมา.",
						"hindi": "अज्ञात आकृति गिर पड़ी। उसके पीछे से, एक हल्की रोशनी छन कर निकली।"
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
						"korean": "첫 거래의 시작. Vellum의 그림자가 점점 더 선명해진다.",
						"english": "The start of the first transaction. Vellum's shadow grows clearer.",
						"japanese": "最初の取引の始まり。Vellumの影が次第に鮮明になる。",
						"chinese": "首次交易的开始。Vellum的影子变得越来越清晰。",
						"french": "Le début de la première transaction. L'ombre de Vellum devient de plus en plus nette.",
						"spanish": "El inicio de la primera transacción. La sombra de Vellum se hace cada vez más clara.",
						"vietnamese": "Sự khởi đầu của giao dịch đầu tiên. Bóng của Vellum ngày càng rõ nét.",
						"thai": "การเริ่มต้นของการทำธุรกรรมครั้งแรก. เงาของ Vellum เริ่มชัดเจนขึ้นเรื่อยๆ.",
						"hindi": "पहले लेन-देन की शुरुआत। वेल्लम की परछाई और स्पष्ट होती जा रही है।"
					}
				}
			]
		}
	]
} as const;
