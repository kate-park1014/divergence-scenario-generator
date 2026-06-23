export const scenario_desert_mirage_10_01 = {
	"scenario_id": "desert_mirage_10_01",
	"order": 1,
	"act": "intro",
	"theme": "desert",
	"actors": {
		"kemet": {
			"id": "mon_2f8a1701-571b-40b5-92d9-69aa973cef18",
			"name": {
				"korean": "케메트",
				"english": "Kemet",
				"japanese": "ケメト",
				"chinese": "凯麦特",
				"french": "Kemet",
				"spanish": "Kemet",
				"vietnamese": "Kemet",
				"thai": "เคเมต",
				"hindi": "केमेट"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/fd9e93e0-2874-4647-0076-839718949500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8c3f2690-e8a9-44f5-4527-d8f8d4ea2800/public"
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
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "끝없이 펼쳐진 모래 사막. 모든 것이 침묵하는 공간이다.",
						"english": "An endless sand desert. A space where everything is silent.",
						"japanese": "果てなく広がる砂漠。すべてが沈黙する空間だ。",
						"chinese": "无边无际的沙海。一个万籁俱寂的空间。",
						"french": "Un désert de sable sans fin. Un espace où tout est silencieux.",
						"spanish": "Un desierto de arena interminable. Un espacio donde todo es silencio.",
						"vietnamese": "Sa mạc cát trải dài vô tận. Một không gian mọi thứ chìm vào im lặng.",
						"thai": "ทะเลทรายกว้างสุดลูกหูลูกตา เป็นพื้นที่ที่ทุกสิ่งเงียบสงัด.",
						"hindi": "एक अंतहीन रेत का रेगिस्तान। एक ऐसी जगह जहाँ सब कुछ शांत है।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "드디어 사막이다. 근데… 왠지 싸해.",
						"english": "Finally, the desert. But... there's a strange chill.",
						"japanese": "ついに砂漠だ。でも…なんだか不気味だな。",
						"chinese": "终于是沙漠了。但…总觉得有点冷飕飕的。",
						"french": "Enfin, le désert. Mais... il y a un étrange frisson.",
						"spanish": "Por fin, el desierto. Pero... hay un escalofrío extraño.",
						"vietnamese": "Cuối cùng cũng đến sa mạc. Nhưng… sao thấy rờn rợn.",
						"thai": "ในที่สุดก็ถึงทะเลทราย แต่...ทำไมรู้สึกแปลกๆ เย็นยะเยือก.",
						"hindi": "आखिरकार, रेगिस्तान। लेकिन... एक अजीब सी ठंडक है।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_1",
					"content": {
						"korean": "저기, 뭔가 쓰여있는데?",
						"english": "Hey, something's written there?",
						"japanese": "ねえ、何か書かれてる？",
						"chinese": "喂，那里写了什么？",
						"french": "Hé, quelque chose est écrit là-bas ?",
						"spanish": "¿Oye, algo está escrito ahí?",
						"vietnamese": "Này, có gì đó được viết ở đằng kia?",
						"thai": "เฮ้ มีอะไรเขียนอยู่ตรงนั้น?",
						"hindi": "अरे, वहाँ कुछ लिखा है?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "오래된 석판에 경고문이 새겨져 있었다. '탐하는 자, 모래가 되리라.'",
						"english": "An ancient stone tablet bore a warning: 'He who covets, shall become sand.'",
						"japanese": "古い石板に警告文が刻まれていた。「貪る者、砂とならん。」",
						"chinese": "古老的石碑上刻着警告文：‘贪婪者，终将化为沙尘。’",
						"french": "Une ancienne tablette de pierre portait un avertissement : 'Celui qui convoite, deviendra sable.'",
						"spanish": "Una antigua tablilla de piedra contenía una advertencia: 'Aquel que codicie, se convertirá en arena'.",
						"vietnamese": "Trên phiến đá cổ khắc lời cảnh báo: 'Kẻ tham lam, sẽ hóa thành cát.'",
						"thai": "มีคำเตือนสลักอยู่บนศิลาโบราณ: 'ผู้ใดโลภ จะกลายเป็นทราย.'",
						"hindi": "एक पुरानी पत्थर की पटिया पर एक चेतावनी खुदी हुई थी: 'जो लालच करेगा, वह रेत बन जाएगा।'"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "별 소리 다 하네. 가자.",
						"english": "What a load of nonsense. Let's go.",
						"japanese": "馬鹿げたことを。行こう。",
						"chinese": "尽说些废话。走吧。",
						"french": "Quel tas de bêtises. Allons-y.",
						"spanish": "¡Qué tonterías! Vámonos.",
						"vietnamese": "Toàn chuyện vớ vẩn. Đi thôi.",
						"thai": "ไร้สาระน่า ไปกันเถอะ.",
						"hindi": "कैसी बकवास बातें कर रहा है। चलो चलें।"
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "kemet",
					"action": "enter"
				},
				{
					"speaker": "kemet",
					"emotion": "sad",
					"content": {
						"korean": "잠깐. 이 경고, 무시할 수 없어.",
						"english": "Wait. This warning, we can't ignore it.",
						"japanese": "待って。この警告、無視できない。",
						"chinese": "等等。这个警告，不能无视。",
						"french": "Attendez. Cet avertissement, on ne peut pas l'ignorer.",
						"spanish": "Espera. Esta advertencia, no podemos ignorarla.",
						"vietnamese": "Khoan đã. Lời cảnh báo này, không thể bỏ qua.",
						"thai": "เดี๋ยวก่อน คำเตือนนี้ เรามองข้ามไม่ได้.",
						"hindi": "रुको। इस चेतावनी को हम अनदेखा नहीं कर सकते।"
					},
					"type": "speech"
				},
				{
					"speaker": "kemet",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 사막은 단순한 공간이 아니야. 과거의 재앙이 숨 쉬고 있어.",
						"english": "This desert isn't just a space. A past catastrophe breathes here.",
						"japanese": "この砂漠はただの空間じゃない。過去の災厄が息づいている。",
						"chinese": "这片沙漠不只是一个空间。过去的灾难在这里呼吸。",
						"french": "Ce désert n'est pas qu'un espace. Une catastrophe passée y respire.",
						"spanish": "Este desierto no es solo un espacio. Una catástrofe pasada respira aquí.",
						"vietnamese": "Sa mạc này không chỉ là một không gian. Một tai ương trong quá khứ đang ẩn chứa ở đây.",
						"thai": "ทะเลทรายนี้ไม่ใช่แค่พื้นที่ธรรมดา หายนะในอดีตกำลังหายใจอยู่ที่นี่",
						"hindi": "यह रेगिस्तान सिर्फ एक जगह नहीं है। अतीत की आपदा यहाँ साँस ले रही है।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "재앙이라니, 설마 그 고대 도시 얘기?",
						"english": "Calamity? You don't mean... the ancient city?",
						"japanese": "災厄って、まさかあの古代都市の話？",
						"chinese": "灾难？你不会是说那座古城吧？",
						"french": "Une catastrophe ? Tu ne parles pas... de l'ancienne cité ?",
						"spanish": "¿Catástrofe? ¿No te referirás a... la antigua ciudad?",
						"vietnamese": "Tai ương ư? Chẳng lẽ là chuyện về thành phố cổ đó?",
						"thai": "หายนะเหรอ? อย่าบอกนะว่าหมายถึง... เมืองโบราณนั่น?",
						"hindi": "आपदा? कहीं आप उस प्राचीन शहर की बात तो नहीं कर रहे?"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"type": "direction",
					"speaker": "kemet",
					"action": "enter"
				},
				{
					"speaker": "kemet",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "계속 가도 될까요? 모래의 기운이 심상치 않아요.",
						"english": "Should we keep going? The sand's energy feels ominous.",
						"japanese": "進み続けても大丈夫ですか？砂の気配が尋常じゃないです。",
						"chinese": "我们还能继续前进吗？沙子的气息不太对劲。",
						"french": "Devons-nous continuer ? L'énergie du sable est inquiétante.",
						"spanish": "¿Podemos seguir? La energía de la arena no es normal.",
						"vietnamese": "Chúng ta có nên tiếp tục không? Khí tức của cát không hề bình thường.",
						"thai": "เราควรไปต่อไหม? พลังของทรายไม่ชอบมาพากลเลย",
						"hindi": "क्या हम आगे बढ़ सकते हैं? रेत की ऊर्जा अजीब लग रही है।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "후퇴는 없어. 목적지에 가야 해.",
						"english": "No retreat. We must reach our destination.",
						"japanese": "後退はない。目的地に着かねば。",
						"chinese": "没有退路。我们必须到达目的地。",
						"french": "Pas de retraite. Nous devons atteindre notre destination.",
						"spanish": "No hay retirada. Debemos llegar al destino.",
						"vietnamese": "Không lùi bước. Chúng ta phải đến đích.",
						"thai": "ไม่มีการถอย เราต้องไปถึงจุดหมาย",
						"hindi": "पीछे हटना नहीं है। हमें गंतव्य तक पहुँचना होगा।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이게 뭐야? 꽃인가?",
						"english": "What's this? A flower?",
						"japanese": "これ、何だ？花か？",
						"chinese": "这是什么？是花吗？",
						"french": "Qu'est-ce que c'est ? Une fleur ?",
						"spanish": "¿Qué es esto? ¿Una flor?",
						"vietnamese": "Cái gì đây? Hoa sao?",
						"thai": "นี่อะไร? ดอกไม้เหรอ?",
						"hindi": "यह क्या है? एक फूल?"
					},
					"emotion": "base",
					"speaker": "character_1"
				},
				{
					"type": "speech",
					"content": {
						"korean": "황금빛 모래꽃이 피어 있었다. 아름답지만, 만지면 피부가 갈라질 것 같은.",
						"english": "Golden sand-flowers bloomed. Beautiful, yet touching them felt like skin would crack.",
						"japanese": "黄金色の砂花が咲いていた。美しいが、触れれば皮膚がひび割れそうだ。",
						"chinese": "金色的沙花绽放着。美丽，但触摸它们似乎会让皮肤裂开。",
						"french": "Des fleurs de sable dorées avaient éclos. Magnifiques, mais les toucher donnait l'impression que la peau se fendrait.",
						"spanish": "Flores de arena doradas habían florecido. Hermosas, pero al tocarlas, parecía que la piel se agrietaría.",
						"vietnamese": "Những bông hoa cát vàng rực nở rộ. Đẹp đẽ, nhưng chạm vào chúng có cảm giác như da sẽ nứt nẻ.",
						"thai": "ดอกไม้ทรายสีทองผลิบาน สวยงาม แต่สัมผัสแล้วรู้สึกเหมือนผิวจะแตก",
						"hindi": "सुनहरे रेत के फूल खिले थे। सुंदर, फिर भी उन्हें छूने से त्वचा फट जाएगी।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "예쁘긴 한데… 왠지 소름 돋아.",
						"english": "It's pretty, but... it gives me the creeps.",
						"japanese": "綺麗だけど…なんだか不気味だ。",
						"chinese": "虽然很漂亮……但总觉得毛骨悚然。",
						"french": "C'est joli, mais... ça me donne des frissons.",
						"spanish": "Es bonito, pero... me da escalofríos.",
						"vietnamese": "Đẹp thật, nhưng… sao lại rợn người thế.",
						"thai": "สวยนะ แต่... ทำไมรู้สึกขนลุกจัง",
						"hindi": "यह सुंदर है, लेकिन... मुझे डर लग रहा है।"
					},
					"emotion": "base",
					"speaker": "character_2"
				},
				{
					"content": {
						"korean": "조심해! 저건 단순한 꽃이 아니야. 사막의 저주가 깃들어 있어.",
						"english": "Be careful! That's no ordinary flower. It holds the desert's curse.",
						"japanese": "気をつけろ！あれはただの花じゃない。砂漠の呪いが宿っている。",
						"chinese": "小心！那不是简单的花。它蕴含着沙漠的诅咒。",
						"french": "Attention ! Ce n'est pas une simple fleur. Elle abrite la malédiction du désert.",
						"spanish": "¡Cuidado! Esa no es una flor cualquiera. Contiene la maldición del desierto.",
						"vietnamese": "Cẩn thận! Đó không phải là một bông hoa bình thường. Nó chứa đựng lời nguyền của sa mạc.",
						"thai": "ระวัง! นั่นไม่ใช่ดอกไม้ธรรมดา มันมีคำสาปของทะเลทรายอยู่",
						"hindi": "सावधान रहो! वह कोई साधारण फूल नहीं है। उसमें रेगिस्तान का श्राप है।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "kemet"
				},
				{
					"content": {
						"korean": "죽은 생명을 아름답게 포장하는… 기만적인 재앙의 전조야.",
						"english": "It's a deceptive omen of catastrophe, beautifully packaging dead life.",
						"japanese": "死んだ生命を美しく包み込む…欺瞞的な災厄の前兆だ。",
						"chinese": "这是一种欺骗性的灾难预兆，将死去的生命包装得美丽。",
						"french": "C'est un présage trompeur de catastrophe, qui enveloppe magnifiquement la vie morte.",
						"spanish": "Es un presagio engañoso de catástrofe, que envuelve hermosamente la vida muerta.",
						"vietnamese": "Nó là điềm báo lừa dối của tai ương, gói ghém sự sống đã chết một cách đẹp đẽ.",
						"thai": "มันเป็นลางบอกเหตุของหายนะที่หลอกลวง ห่อหุ้มชีวิตที่ตายแล้วอย่างสวยงาม",
						"hindi": "यह एक कपटी आपदा का शगुन है, जो मृत जीवन को खूबसूरती से लपेटता है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "kemet"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "kemet"
				},
				{
					"content": {
						"korean": "손이… 이상해. 모래가 되는 것 같아.",
						"english": "My hand... it feels strange. Like it's turning to sand.",
						"japanese": "手が…おかしい。砂になっていくようだ。",
						"chinese": "我的手……好奇怪。好像正在变成沙子。",
						"french": "Ma main... elle est bizarre. J'ai l'impression qu'elle se transforme en sable.",
						"spanish": "Mi mano... está extraña. Parece que se está convirtiendo en arena.",
						"vietnamese": "Tay tôi… lạ quá. Cứ như đang biến thành cát vậy.",
						"thai": "มือฉัน... มันแปลกๆ เหมือนกำลังจะกลายเป็นทราย",
						"hindi": "मेरा हाथ... अजीब लग रहा है। जैसे रेत बन रहा हो।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "나도 그래. 환각인가?",
						"english": "Me too. Is it a hallucination?",
						"japanese": "私もだ。幻覚なのか？",
						"chinese": "我也是。是幻觉吗？",
						"french": "Moi aussi. Est-ce une hallucination ?",
						"spanish": "Yo también. ¿Es una alucinación?",
						"vietnamese": "Tôi cũng vậy. Là ảo giác sao?",
						"thai": "ฉันก็ด้วย. นี่มันภาพหลอนเหรอ?",
						"hindi": "मुझे भी। क्या यह एक मतिभ्रम है?"
					},
					"speaker": "character_1",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "kemet",
					"type": "speech",
					"content": {
						"korean": "아니, 환각이 아니야. 사막의 변이가 시작된 거야.",
						"english": "No, it's not a hallucination. The desert's mutation has begun.",
						"japanese": "いや、幻覚じゃない。砂漠の変異が始まったんだ。",
						"chinese": "不，这不是幻觉。沙漠的变异已经开始了。",
						"french": "Non, ce n'est pas une hallucination. La mutation du désert a commencé.",
						"spanish": "No, no es una alucinación. La mutación del desierto ha comenzado.",
						"vietnamese": "Không, không phải ảo giác. Sự biến đổi của sa mạc đã bắt đầu rồi.",
						"thai": "ไม่สิ, ไม่ใช่ภาพหลอน. การกลายพันธุ์ของทะเลทรายได้เริ่มต้นขึ้นแล้ว.",
						"hindi": "नहीं, यह कोई मतिभ्रम नहीं है। रेगिस्तान का उत्परिवर्तन शुरू हो गया है।"
					}
				},
				{
					"emotion": "sad",
					"speaker": "kemet",
					"type": "speech",
					"content": {
						"korean": "몸이 서서히 모래로 변하는… 시한부의 징조.",
						"english": "Our bodies slowly turning to sand... a sign of a terminal fate.",
						"japanese": "体が徐々に砂に変わっていく… 余命の兆候だ。",
						"chinese": "身体逐渐变成沙子……这是时日无多的征兆。",
						"french": "Nos corps se transforment lentement en sable... un signe de destin fatal.",
						"spanish": "Nuestros cuerpos se convierten lentamente en arena... una señal de un destino terminal.",
						"vietnamese": "Cơ thể dần biến thành cát... một điềm báo của số phận cận kề.",
						"thai": "ร่างกายค่อยๆ กลายเป็นทราย... สัญญาณแห่งวาระสุดท้าย.",
						"hindi": "शरीर धीरे-धीरे रेत में बदल रहा है… यह एक सीमित जीवनकाल का संकेत है।"
					}
				},
				{
					"content": {
						"korean": "시한부… 그럼 우린 다 죽는다는 거야?",
						"english": "Terminal... so we're all going to die?",
						"japanese": "余命宣告…じゃあ、俺たちは皆死ぬのか？",
						"chinese": "时日无多……那我们都会死吗？",
						"french": "Terminal... alors nous allons tous mourir ?",
						"spanish": "¿Terminal...? ¿Entonces todos vamos a morir?",
						"vietnamese": "Cận kề... vậy là tất cả chúng ta sẽ chết sao?",
						"thai": "วาระสุดท้าย... งั้นพวกเราก็ต้องตายกันหมดเหรอ?",
						"hindi": "सीमित जीवनकाल… तो क्या हम सब मरने वाले हैं?"
					},
					"type": "speech",
					"speaker": "character_2",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아직은 아니지만… 이대로 가면 피할 수 없을 거야.",
						"english": "Not yet... but if it continues, it will be unavoidable.",
						"japanese": "まだではないが…このままでは避けられないだろう。",
						"chinese": "虽然现在不是……但如果这样下去，将无法避免。",
						"french": "Pas encore... mais si ça continue, ce sera inévitable.",
						"spanish": "Todavía no... pero si continúa así, será inevitable.",
						"vietnamese": "Chưa phải bây giờ... nhưng nếu cứ thế này thì không thể tránh khỏi đâu.",
						"thai": "ยังไม่ถึงตอนนี้... แต่ถ้ายังเป็นแบบนี้ต่อไป คงหลีกเลี่ยงไม่ได้.",
						"hindi": "अभी नहीं… लेकिन अगर ऐसा ही चलता रहा, तो यह अपरिहार्य होगा।"
					},
					"emotion": "sad",
					"speaker": "kemet"
				},
				{
					"content": {
						"korean": "우린… 멈출 수 없어.",
						"english": "We... can't stop it.",
						"japanese": "俺たちは…止められない。",
						"chinese": "我们……无法阻止。",
						"french": "Nous... ne pouvons pas l'arrêter.",
						"spanish": "Nosotros... no podemos detenerlo.",
						"vietnamese": "Chúng ta... không thể ngăn cản.",
						"thai": "พวกเรา... หยุดมันไม่ได้.",
						"hindi": "हम… रोक नहीं सकते।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "kemet",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "모래가 피부를 타고 올라왔다. 이미 되돌릴 수 없는 지점이었다.",
						"english": "Sand crept up my skin. It was already a point of no return.",
						"japanese": "砂が肌を這い上がってきた。もう引き返せない地点だった。",
						"chinese": "沙子爬上了皮肤。这已经是无法挽回的地步了。",
						"french": "Le sable a rampé sur ma peau. C'était déjà un point de non-retour.",
						"spanish": "La arena se arrastró por mi piel. Ya era un punto sin retorno.",
						"vietnamese": "Cát bò lên da. Đã đến điểm không thể quay lại.",
						"thai": "ทรายคืบคลานขึ้นมาบนผิวหนัง. มันเป็นจุดที่ไม่สามารถย้อนกลับได้แล้ว.",
						"hindi": "रेत त्वचा पर चढ़ गई। यह पहले ही एक ऐसा बिंदु था जहाँ से वापस नहीं मुड़ा जा सकता था।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "젠장! 점점 더 심해져.",
						"english": "Damn it! It's getting worse and worse.",
						"japanese": "くそっ！どんどんひどくなる。",
						"chinese": "该死！越来越严重了。",
						"french": "Bon sang ! Ça empire de plus en plus.",
						"spanish": "¡Maldita sea! Empeora cada vez más.",
						"vietnamese": "Chết tiệt! Càng ngày càng tệ.",
						"thai": "ให้ตายสิ! มันแย่ลงเรื่อยๆ.",
						"hindi": "धिक्कार है! यह और भी बुरा होता जा रहा है।"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "이대로 가다간… 우리도 모래가 될 거야!",
						"english": "If this continues... we'll turn into sand too!",
						"japanese": "このままでは…俺たちも砂になる！",
						"chinese": "再这样下去……我们也会变成沙子！",
						"french": "Si ça continue... nous allons nous aussi devenir du sable !",
						"spanish": "Si esto continúa... ¡nosotros también nos convertiremos en arena!",
						"vietnamese": "Nếu cứ thế này... chúng ta cũng sẽ biến thành cát mất!",
						"thai": "ถ้ายังเป็นแบบนี้ต่อไป... พวกเราก็จะกลายเป็นทรายด้วย!",
						"hindi": "अगर ऐसा ही चलता रहा… तो हम भी रेत बन जाएँगे!"
					}
				},
				{
					"speaker": "kemet",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "이건 고대 문명의 저주야. 모든 것을 모래로 돌려버리려는 광기.",
						"english": "This is a curse of an ancient civilization. A madness to turn everything back to sand.",
						"japanese": "これは古代文明の呪いだ。全てを砂に戻そうとする狂気。",
						"chinese": "这是古代文明的诅咒。一种想把一切都化为沙子的疯狂。",
						"french": "C'est la malédiction d'une ancienne civilisation. Une folie visant à tout réduire en sable.",
						"spanish": "Esta es la maldición de una civilización antigua. Una locura para convertir todo en arena.",
						"vietnamese": "Đây là lời nguyền của một nền văn minh cổ đại. Một sự điên rồ muốn biến mọi thứ trở lại thành cát.",
						"thai": "นี่คือคำสาปของอารยธรรมโบราณ. ความบ้าคลั่งที่ต้องการเปลี่ยนทุกสิ่งให้กลับกลายเป็นทราย.",
						"hindi": "यह एक प्राचीन सभ्यता का अभिशाप है। सब कुछ रेत में बदलने का एक पागलपन।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "그래도 멈출 수 없어. 방법을 찾아야 해.",
						"english": "Still, I can't stop. I must find a way.",
						"japanese": "それでも、止まるわけにはいかない。方法を見つけないと。",
						"chinese": "即便如此，我不能停下。必须找到办法。",
						"french": "Pourtant, je ne peux pas m'arrêter. Je dois trouver un moyen.",
						"spanish": "Aún así, no puedo parar. Debo encontrar un camino.",
						"vietnamese": "Dù vậy, tôi không thể dừng lại. Phải tìm ra cách.",
						"thai": "ถึงอย่างนั้นก็หยุดไม่ได้ ต้องหาวิธี",
						"hindi": "फिर भी, मैं रुक नहीं सकता। मुझे रास्ता खोजना होगा।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "방법은… 아직 모르겠어. 하지만, 이 부조리한 운명에 맞설 수밖에.",
						"english": "The way... I don't know yet. But I must confront this absurd fate.",
						"japanese": "方法は…まだ分からない。だが、この不条理な運命に立ち向かうしかない。",
						"chinese": "方法…我尚不知晓。但，我只能对抗这荒谬的命运。",
						"french": "La voie... Je ne la connais pas encore. Mais je dois affronter ce destin absurde.",
						"spanish": "El camino... Aún no lo sé. Pero debo enfrentarme a este destino absurdo.",
						"vietnamese": "Cách... tôi vẫn chưa biết. Nhưng tôi phải đối mặt với số phận phi lý này.",
						"thai": "หนทาง... ยังไม่รู้ แต่ต้องเผชิญหน้ากับโชคชะตาที่ไร้เหตุผลนี้",
						"hindi": "रास्ता... मुझे अभी पता नहीं। पर मुझे इस बेतुकी नियति का सामना करना होगा।"
					},
					"speaker": "kemet",
					"emotion": "base"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 겨우 이 정도라니.",
						"english": "Ugh... Is this all you've got?",
						"japanese": "くっ…この程度か。",
						"chinese": "咳…就这点本事吗。",
						"french": "Ugh... C'est tout ce que vous avez ?",
						"spanish": "Ugh... ¿Es todo lo que tienes?",
						"vietnamese": "Khặc... chỉ có vậy thôi sao.",
						"thai": "อึก... แค่นี้เองเหรอ",
						"hindi": "उफ़... बस इतना ही?"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "하지만… 이건 시작에 불과해. 진짜 절망은 이제부터야.",
						"english": "But... this is just the beginning. True despair starts now.",
						"japanese": "だが…これは始まりに過ぎない。本当の絶望はこれからだ。",
						"chinese": "但是…这仅仅是开始。真正的绝望，现在才要上演。",
						"french": "Mais... ce n'est que le début. Le vrai désespoir commence maintenant.",
						"spanish": "Pero... esto es solo el principio. La verdadera desesperación empieza ahora.",
						"vietnamese": "Nhưng... đây chỉ là khởi đầu. Nỗi tuyệt vọng thật sự bắt đầu từ bây giờ.",
						"thai": "แต่... นี่เป็นแค่จุดเริ่มต้น ความสิ้นหวังที่แท้จริงเพิ่งจะเริ่มขึ้น",
						"hindi": "पर... यह तो बस शुरुआत है। असली निराशा अब शुरू होगी।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "…뭐라고?",
						"english": "...What?",
						"japanese": "…何だと？",
						"chinese": "…你说什么？",
						"french": "...Quoi ?",
						"spanish": "...¿Qué?",
						"vietnamese": "...Cái gì?",
						"thai": "...ว่าไงนะ?",
						"hindi": "...क्या कहा?"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "모래 폭풍이 걷히고, 잠시의 고요가 찾아왔다. 그러나 사막은 여전히 침묵했고, 다음 환영이 탐험대를 기다리고 있었다.",
						"english": "The sandstorm receded, and a brief calm settled. Yet, the desert remained silent, and the next illusion awaited the expedition.",
						"japanese": "砂嵐が去り、一時的な静寂が訪れた。しかし、砂漠は沈黙したままで、次の幻影が探検隊を待っていた。",
						"chinese": "沙尘暴消退，短暂的平静降临。然而，沙漠依然沉默，下一个幻象正等待着探险队。",
						"french": "La tempête de sable s'est calmée, et un bref silence s'est installé. Pourtant, le désert restait silencieux, et la prochaine illusion attendait l'expédition.",
						"spanish": "La tormenta de arena amainó, y una breve calma se estableció. Sin embargo, el desierto permaneció en silencio, y la próxima ilusión esperaba a la expedición.",
						"vietnamese": "Cơn bão cát lắng xuống, mang theo sự tĩnh lặng tạm thời. Tuy nhiên, sa mạc vẫn im lìm, và ảo ảnh tiếp theo đang chờ đợi đoàn thám hiểm.",
						"thai": "พายุทรายสงบลง ความเงียบสงบชั่วขณะเข้ามาแทนที่ แต่ทะเลทรายยังคงเงียบงัน และภาพลวงตาถัดไปกำลังรอคณะสำรวจอยู่",
						"hindi": "रेत का तूफान थम गया, और एक संक्षिप्त शांति छा गई। फिर भी, रेगिस्तान खामोश रहा, और अगला मायाजाल अभियान दल का इंतजार कर रहा था。"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "모래 그림자가 탐험대를 집어삼켰다.",
						"english": "The sand shadows swallowed the expedition.",
						"japanese": "砂の影が探検隊を飲み込んだ。",
						"chinese": "沙影吞噬了探险队。",
						"french": "Les ombres de sable ont englouti l'expédition.",
						"spanish": "Las sombras de arena devoraron a la expedición.",
						"vietnamese": "Bóng cát nuốt chửng đoàn thám hiểm.",
						"thai": "เงาทรายกลืนกินคณะสำรวจ",
						"hindi": "रेत की परछाइयों ने अभियान दल को निगल लिया।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "무의미한 발버둥. 결국 모두 모래로 돌아갈 뿐.",
						"english": "A meaningless struggle. In the end, all will return to sand.",
						"japanese": "無意味な足掻き。結局、全ては砂に還るだけ。",
						"chinese": "徒劳挣扎。最终，一切都将归于黄沙。",
						"french": "Une lutte inutile. Au final, tout retournera au sable.",
						"spanish": "Una lucha inútil. Al final, todo volverá a ser arena.",
						"vietnamese": "Cuộc giằng co vô nghĩa. Rốt cuộc, tất cả sẽ trở về cát bụi.",
						"thai": "การดิ้นรนที่ไร้ความหมาย สุดท้ายทุกคนก็จะกลับคืนสู่ผืนทราย",
						"hindi": "व्यर्थ का संघर्ष। अंत में, सब रेत में मिल जाएंगे।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "젠장… 아직… 끝나지 않았어!",
						"english": "Damn it... it's not... over yet!",
						"japanese": "くそっ… まだ… 終わってない！",
						"chinese": "该死……还没……结束！",
						"french": "Bon sang... ce n'est pas... encore fini !",
						"spanish": "Maldita sea... ¡aún no... ha terminado!",
						"vietnamese": "Chết tiệt... vẫn chưa... kết thúc!",
						"thai": "บ้าจริง... ยัง... ไม่จบ!",
						"hindi": "धिक्कार है... अभी... खत्म नहीं हुआ!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "모래 폭풍이 휘몰아쳤다. 그 안에서, 거대한 그림자가 나타났다.",
						"english": "A sandstorm raged. Within it, a colossal shadow appeared.",
						"japanese": "砂嵐が吹き荒れた。その中から、巨大な影が現れた。",
						"chinese": "沙暴肆虐。其中，一道巨大的身影出现了。",
						"french": "Une tempête de sable faisait rage. En son sein, une ombre colossale apparut.",
						"spanish": "Una tormenta de arena rugió. Dentro de ella, una sombra colosal apareció.",
						"vietnamese": "Một cơn bão cát dữ dội. Bên trong, một cái bóng khổng lồ xuất hiện.",
						"thai": "พายุทรายโหมกระหน่ำ ภายในนั้น เงาร่างมหึมาปรากฏขึ้น",
						"hindi": "रेत का तूफान उमड़ पड़ा। उसके भीतर, एक विशाल छाया प्रकट हुई।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "하찮은 것들. 감히 이곳에 발을 들이다니.",
						"english": "Insignificant beings. How dare you set foot here.",
						"japanese": "取るに足らぬ者ども。よくもここまで足を踏み入れたな。",
						"chinese": "渺小的存在。竟敢踏足此地。",
						"french": "Êtres insignifiants. Comment osez-vous poser le pied ici.",
						"spanish": "Seres insignificantes. Cómo osáis poner un pie aquí.",
						"vietnamese": "Những kẻ hèn mọn. Dám đặt chân đến đây sao.",
						"thai": "สิ่งมีชีวิตไร้ค่า พวกแกกล้าดียังไงมาเหยียบที่นี่",
						"hindi": "तुच्छ प्राणी। तुम्हारी हिम्मत कैसे हुई यहाँ पैर रखने की।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "너희의 존재 자체가 이 사막의 거름이 될 뿐.",
						"english": "Your very existence shall only serve as fertilizer for this desert.",
						"japanese": "お前たちの存在そのものが、この砂漠の肥やしとなるだけだ。",
						"chinese": "你们的存在本身，只会成为这片沙漠的养料。",
						"french": "Votre existence même ne servira que d'engrais à ce désert.",
						"spanish": "Vuestra propia existencia solo servirá de abono para este desierto.",
						"vietnamese": "Sự tồn tại của các ngươi chỉ là phân bón cho sa mạc này.",
						"thai": "การมีอยู่ของพวกเจ้าเป็นเพียงปุ๋ยสำหรับทะเลทรายนี้เท่านั้น",
						"hindi": "तुम्हारा अस्तित्व ही इस रेगिस्तान के लिए खाद बनेगा।"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네가… 이 모든 재앙의 근원인가?",
						"english": "Are you... the source of all this calamity?",
						"japanese": "お前が…この全ての災厄の根源なのか？",
						"chinese": "你就是…这所有灾祸的根源吗？",
						"french": "Es-tu... la source de toute cette calamité ?",
						"spanish": "¿Eres tú... la fuente de toda esta calamidad?",
						"vietnamese": "Ngươi… là nguồn gốc của mọi tai ương này sao?",
						"thai": "แกคือ… ต้นกำเนิดของภัยพิบัติทั้งหมดนี้งั้นหรือ?",
						"hindi": "क्या तुम... इस सारी आपदा का स्रोत हो?"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_1",
					"content": {
						"korean": "웃기지 마! 우린 멈추지 않아!",
						"english": "Don't make me laugh! We won't stop!",
						"japanese": "笑わせるな！我々は止まらない！",
						"chinese": "别开玩笑了！我们不会停下！",
						"french": "Ne me fais pas rire ! Nous ne nous arrêterons pas !",
						"spanish": "¡No me hagas reír! ¡No nos detendremos!",
						"vietnamese": "Đừng làm ta cười! Chúng ta sẽ không dừng lại!",
						"thai": "อย่ามาตลก! เราไม่หยุดหรอก!",
						"hindi": "मुझे हँसाओ मत! हम रुकेंगे नहीं!"
					},
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"끝없는 모래 사막. 모든 것이 살아있는 듯 꿈틀댄다.",
			"시간과 공간은 왜곡되고, 환각은 현실이 된다.",
			"고대 문명의 잔해 속, 광기만이 떠도는 곳.",
			"이곳에 들어선 순간, 운명은 정해졌다. 모래가 될 것인가, 맞설 것인가."
		],
		"english": [
			"Endless sand desert. Everything writhes as if alive.",
			"Time and space distort, illusions become reality.",
			"Amidst the ruins of an ancient civilization, only madness drifts.",
			"The moment you entered, your fate was sealed. Become sand, or stand defiant?"
		],
		"japanese": [
			"終わりなき砂漠。すべてが生きているかのように蠢く。",
			"時間と空間は歪み、幻覚は現実となる。",
			"古代文明の残骸の中、狂気だけが漂う場所。",
			"足を踏み入れた瞬間、運命は定まった。砂となるか、抗うか。"
		],
		"chinese": [
			"无尽的沙海。一切都仿佛活着般蠕动。",
			"时空扭曲，幻觉成真。",
			"古文明废墟之中，唯有疯狂游荡。",
			"踏入此地之刻，命运已定。化为沙尘，抑或奋起反抗？"
		],
		"french": [
			"Désert de sable infini. Tout se tord comme si c'était vivant.",
			"Le temps et l'espace se déforment, les illusions deviennent réalité.",
			"Au milieu des ruines d'une ancienne civilisation, seule la folie flotte.",
			"Au moment où vous êtes entré, votre destin était scellé. Devenir sable, ou résister ?"
		],
		"spanish": [
			"Desierto de arena interminable. Todo se retuerce como si estuviera vivo.",
			"El tiempo y el espacio se distorsionan, las ilusiones se vuelven realidad.",
			"Entre las ruinas de una antigua civilización, solo la locura flota.",
			"En el momento en que entraste, tu destino quedó sellado. ¿Convertirte en arena o resistir?"
		],
		"vietnamese": [
			"Sa mạc cát vô tận. Mọi thứ cuộn mình như thể đang sống.",
			"Thời gian và không gian biến dạng, ảo ảnh trở thành hiện thực.",
			"Giữa tàn tích văn minh cổ đại, chỉ có sự điên loạn trôi nổi.",
			"Khoảnh khắc bước vào, số phận đã định. Trở thành cát, hay đối mặt?"
		],
		"thai": [
			"ทะเลทรายอันกว้างใหญ่. ทุกสิ่งดูเหมือนมีชีวิตและบิดเบี้ยวไปมา.",
			"เวลาและอวกาศบิดเบี้ยว ภาพลวงตากลายเป็นความจริง.",
			"ท่ามกลางซากอารยธรรมโบราณ มีเพียงความบ้าคลั่งลอยวน.",
			"เมื่อย่างกรายเข้ามา โชคชะตาก็ถูกกำหนด จะกลายเป็นทราย หรือจะยืนหยัดต่อสู้?"
		],
		"hindi": [
			"अंतहीन रेत का रेगिस्तान। सब कुछ जीवित की तरह रेंगता है।",
			"समय और स्थान विकृत हो जाते हैं, भ्रम वास्तविकता बन जाते हैं।",
			"प्राचीन सभ्यता के खंडहरों के बीच, केवल पागलपन भटकता है।",
			"जिस क्षण तुम अंदर आए, तुम्हारा भाग्य तय हो गया। रेत बन जाओगे या मुकाबला करोगे?"
		]
	}
} as const;
