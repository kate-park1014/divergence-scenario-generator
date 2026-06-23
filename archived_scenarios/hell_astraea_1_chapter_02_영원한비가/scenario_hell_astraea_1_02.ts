export const scenario_hell_astraea_1_02 = {
	"scenario_id": "hell_astraea_1_02",
	"order": 2,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"cinder": {
			"id": "mon_7bdc5bba-75ec-4589-827e-193b3c59b022",
			"name": {
				"korean": "신더",
				"english": "Cinder",
				"japanese": "シンダー",
				"chinese": "辛德",
				"french": "Cinder",
				"spanish": "Cinder",
				"vietnamese": "Xinder",
				"thai": "ซินเดอร์",
				"hindi": "सिंडर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/bc21258b-93ac-4669-7330-fdf4e8a57c00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/939a1911-1849-425c-67a4-4958bbdc3300/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"끝나지 않는 고통. 이곳은 기억이 덫이 되는 지옥.",
			"구원의 손길이라 믿었던 것이… 오히려 절망의 시작이었다."
		],
		"english": [
			"Endless torment. A hell where memories become a trap.",
			"What I believed to be a hand of salvation… was, in fact, the beginning of despair."
		],
		"japanese": [
			"終わらない苦痛。ここは記憶が罠となる地獄。",
			"救いの手だと信じていたものが…むしろ絶望の始まりだった。"
		],
		"chinese": [
			"无尽的痛苦。这里是记忆化为陷阱的地狱。",
			"我曾以为是救赎之手…反而是绝望的开始。"
		],
		"french": [
			"Un tourment sans fin. Un enfer où les souvenirs deviennent un piège.",
			"Ce que je croyais être une main salvatrice… était, en fait, le début du désespoir."
		],
		"spanish": [
			"Tormento sin fin. Un infierno donde los recuerdos se convierten en una trampa.",
			"Lo que creí que era una mano de salvación… fue, de hecho, el comienzo de la desesperación."
		],
		"vietnamese": [
			"Nỗi đau vô tận. Nơi đây là địa ngục nơi ký ức trở thành cạm bẫy.",
			"Điều tôi tin là bàn tay cứu rỗi… lại chính là khởi đầu của sự tuyệt vọng."
		],
		"thai": [
			"ความทรมานไม่สิ้นสุด ที่นี่คือนรกที่ความทรงจำกลายเป็นกับดัก",
			"สิ่งที่ฉันเชื่อว่าเป็นมือแห่งความรอด… แท้จริงแล้วคือจุดเริ่มต้นของความสิ้นหวัง"
		],
		"hindi": [
			"अंतहीन यातना। एक नरक जहाँ यादें एक जाल बन जाती हैं।",
			"जिसे मैंने मुक्ति का हाथ समझा… वह, वास्तव में, निराशा की शुरुआत थी।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "모든 것이 어제와 똑같았다. 핏빛 노을과 비틀린 나무들.",
						"english": "Everything was the same as yesterday. Blood-red sunset and twisted trees.",
						"japanese": "すべてが昨日と同じだった。血のように赤い夕焼けとねじれた木々。",
						"chinese": "一切都和昨天一样。血色夕阳和扭曲的树木。",
						"french": "Tout était pareil à hier. Le coucher de soleil écarlate et les arbres tordus.",
						"spanish": "Todo era igual que ayer. El atardecer rojo sangre y los árboles retorcidos.",
						"vietnamese": "Mọi thứ vẫn như hôm qua. Hoàng hôn đỏ máu và những cái cây méo mó.",
						"thai": "ทุกอย่างเหมือนเมื่อวาน พระอาทิตย์ตกสีเลือดและต้นไม้บิดเบี้ยว",
						"hindi": "सब कुछ कल जैसा ही था। खून जैसा लाल सूर्यास्त और मुड़े हुए पेड़।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…또다시 이곳인가.",
						"english": "…Here again, are we?",
						"japanese": "…またここか。",
						"chinese": "…又是这里吗？",
						"french": "… Encore ici ?",
						"spanish": "… ¿Aquí de nuevo?",
						"vietnamese": "…Lại ở đây sao.",
						"thai": "…ที่นี่อีกแล้วหรือ",
						"hindi": "…फिर से यहीं?"
					},
					"emotion": "sad"
				},
				{
					"duration_ms": 500,
					"speaker": "cinder",
					"action": "enter",
					"spot": [
						3,
						3
					],
					"type": "direction"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…아아, 새로운 얼굴. 당신도 갇혔군요.",
						"english": "…Ah, a new face. You're trapped too.",
						"japanese": "…ああ、新しい顔。あなたも閉じ込められたのね。",
						"chinese": "…啊，新面孔。你也困住了。",
						"french": "…Ah, un nouveau visage. Vous êtes piégé aussi.",
						"spanish": "…Ah, una cara nueva. Tú también estás atrapado.",
						"vietnamese": "…A, một gương mặt mới. Bạn cũng bị mắc kẹt rồi.",
						"thai": "…อ่า ใบหน้าใหม่ คุณก็ติดกับดักเหมือนกันสินะ",
						"hindi": "…आह, एक नया चेहरा। तुम भी फँस गए हो।"
					},
					"type": "speech",
					"speaker": "cinder"
				},
				{
					"content": {
						"korean": "누구지? 당신도… 루프에 갇힌 건가?",
						"english": "Who are you? Are you… trapped in the loop too?",
						"japanese": "誰？あなたも…ループに囚われたの？",
						"chinese": "你是谁？你也是…被困在循环里了吗？",
						"french": "Qui êtes-vous ? Vous aussi… êtes pris au piège dans la boucle ?",
						"spanish": "¿Quién eres? ¿Tú también… estás atrapado en el bucle?",
						"vietnamese": "Ai vậy? Bạn cũng… bị mắc kẹt trong vòng lặp sao?",
						"thai": "คุณเป็นใคร? คุณ…ก็ติดอยู่ในวงวนด้วยเหรอ?",
						"hindi": "तुम कौन हो? क्या तुम भी… लूप में फँस गए हो?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "신더. 나 역시 이곳의 희생자. 수없이 반복되는 죽음을 맞이하죠.",
						"english": "Cinder. I am also a victim here. Facing countless recurring deaths.",
						"japanese": "シンダー。私もここの犠牲者。何度も繰り返される死を迎えているわ。",
						"chinese": "辛德。我也是这里的受害者。面对着无数次重复的死亡。",
						"french": "Cinder. Je suis aussi une victime ici. Faisant face à d'innombrables morts récurrentes.",
						"spanish": "Cinder. También soy una víctima aquí. Enfrentando innumerables muertes recurrentes.",
						"vietnamese": "Cinder. Tôi cũng là nạn nhân ở đây. Đối mặt với vô số cái chết lặp đi lặp lại.",
						"thai": "ซินเดอร์ ฉันก็เป็นหนึ่งในเหยื่อที่นี่ เผชิญหน้ากับความตายที่เกิดขึ้นซ้ำแล้วซ้ำเล่า",
						"hindi": "सिंडर। मैं भी यहाँ एक पीड़ित हूँ। अनगिनत बार-बार आने वाली मौतों का सामना कर रही हूँ।"
					},
					"type": "speech",
					"speaker": "cinder",
					"emotion": "sad"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "cinder",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						3
					]
				},
				{
					"speaker": "cinder",
					"type": "speech",
					"content": {
						"korean": "이곳은 희망이 없어요. 모든 것이 반복될 뿐.",
						"english": "There's no hope here. Everything just repeats.",
						"japanese": "ここに希望はないわ。すべてが繰り返されるだけ。",
						"chinese": "这里没有希望。一切都只是重复。",
						"french": "Il n'y a pas d'espoir ici. Tout ne fait que se répéter.",
						"spanish": "Aquí no hay esperanza. Todo simplemente se repite.",
						"vietnamese": "Ở đây không có hy vọng. Mọi thứ chỉ lặp lại thôi.",
						"thai": "ที่นี่ไม่มีความหวัง ทุกอย่างแค่ซ้ำไปซ้ำมา",
						"hindi": "यहाँ कोई उम्मीद नहीं है। सब कुछ बस दोहराता रहता है।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "하지만… 탈출할 수 있다고 했어. 가면 쓴 자들이…",
						"english": "But… they said we could escape. The masked ones…",
						"japanese": "でも…脱出できるって言ってた。仮面をつけた者たちが…",
						"chinese": "但是…他们说我们可以逃出去。那些戴面具的人…",
						"french": "Mais… ils ont dit qu'on pouvait s'échapper. Ceux masqués…",
						"spanish": "Pero… dijeron que podíamos escapar. Los enmascarados…",
						"vietnamese": "Nhưng… họ nói có thể thoát ra. Những kẻ đeo mặt nạ…",
						"thai": "แต่…พวกเขาบอกว่าหนีได้ พวกที่สวมหน้ากาก…",
						"hindi": "लेकिन… उन्होंने कहा कि हम भाग सकते हैं। नकाबपोशों ने…"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "가면 쓴 자들… 그들은 거짓된 구원자예요. 고통을 부추길 뿐.",
						"english": "The masked ones… they are false saviors. They only fuel the torment.",
						"japanese": "仮面をつけた者たち…彼らは偽りの救世主よ。苦痛を煽るだけ。",
						"chinese": "戴面具的人…他们是虚假的救世主。他们只会煽动痛苦。",
						"french": "Les masqués… ce sont de faux sauveurs. Ils ne font qu'attiser le tourment.",
						"spanish": "Los enmascarados… son falsos salvadores. Solo avivan el tormento.",
						"vietnamese": "Những kẻ đeo mặt nạ… họ là những kẻ cứu rỗi giả dối. Họ chỉ tiếp thêm nỗi đau thôi.",
						"thai": "พวกที่สวมหน้ากาก…พวกเขาคือผู้ช่วยให้รอดจอมปลอม พวกเขาเพียงแค่กระตุ้นความทรมานเท่านั้น",
						"hindi": "नकाबपोश… वे झूठे मुक्तिदाता हैं। वे केवल यातना को बढ़ावा देते हैं।"
					},
					"speaker": "cinder",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "도대체 왜? 누가 이런 짓을…",
						"english": "Why? Who would do this...?",
						"japanese": "一体なぜ？誰がこんなことを…",
						"chinese": "到底为什么？是谁做了这种事…",
						"french": "Pourquoi ? Qui a fait ça… ?",
						"spanish": "¿Por qué? ¿Quién haría esto…?",
						"vietnamese": "Tại sao? Ai đã làm điều này…?",
						"thai": "ทำไมกัน? ใครเป็นคนทำเรื่องแบบนี้…?",
						"hindi": "आखिर क्यों? किसने किया ये सब…?"
					}
				},
				{
					"type": "speech",
					"speaker": "cinder",
					"content": {
						"korean": "영혼 수확자… 그자가 이 모든 고통의 근원이라고들 해요.",
						"english": "The Soul Reaper... they say he's the source of all this suffering.",
						"japanese": "魂の刈り取り人…彼があらゆる苦痛の根源だと言われています。",
						"chinese": "灵魂收割者… 他们说他就是所有痛苦的根源。",
						"french": "Le Faucheur d'Âmes… on dit qu'il est la source de toute cette souffrance.",
						"spanish": "El Segador de Almas… dicen que él es la fuente de todo este sufrimiento.",
						"vietnamese": "Kẻ Gặt Hái Linh Hồn... người ta nói hắn là nguồn gốc của mọi đau khổ này.",
						"thai": "ผู้เก็บเกี่ยววิญญาณ... พวกเขาว่ากันว่าเขาคือต้นตอของความเจ็บปวดทั้งหมดนี้",
						"hindi": "आत्मा का कटाई करने वाला… कहते हैं कि वह इस सारी पीड़ा का स्रोत है।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						3,
						3
					],
					"action": "enter",
					"speaker": "cinder",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "cinder",
					"content": {
						"korean": "저들을 봐요… 끊임없이 과거의 악몽을 되풀이하고 있어.",
						"english": "Look at them... endlessly reliving nightmares of the past.",
						"japanese": "彼らを見て…過去の悪夢を endlessly 繰り返している。",
						"chinese": "看看他们… 不断重复着过去的噩梦。",
						"french": "Regardez-les… revivre sans cesse les cauchemars du passé.",
						"spanish": "Míralos… reviviendo sin cesar las pesadillas del pasado.",
						"vietnamese": "Nhìn họ kìa... không ngừng tái diễn những cơn ác mộng của quá khứ.",
						"thai": "ดูพวกเขาสิ... วนเวียนอยู่กับฝันร้ายในอดีตไม่สิ้นสุด",
						"hindi": "उन्हें देखो… लगातार अतीत के बुरे सपने दोहरा रहे हैं।"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "영혼들이 비명을 지르며 환영 속에서 고통받았다. 과거의 기억이 강제로 재생되는 듯했다.",
						"english": "Souls screamed, tormented in visions. Memories of the past seemed forcibly replayed.",
						"japanese": "魂は叫び声を上げ、幻影の中で苦しんだ。過去の記憶が強制的に再生されているかのようだった。",
						"chinese": "灵魂尖叫着，在幻象中受尽折磨。过去的记忆似乎被强行重演。",
						"french": "Les âmes hurlaient, tourmentées par des visions. Les souvenirs du passé semblaient rejoués de force.",
						"spanish": "Las almas gritaban, atormentadas en visiones. Los recuerdos del pasado parecían reproducirse a la fuerza.",
						"vietnamese": "Các linh hồn la hét, bị hành hạ trong ảo ảnh. Những ký ức quá khứ dường như bị phát lại một cách cưỡng bức.",
						"thai": "วิญญาณกรีดร้อง ทรมานในภาพหลอน ความทรงจำในอดีตดูเหมือนจะถูกฉายซ้ำอย่างบังคับ",
						"hindi": "आत्माएं चीख रही थीं, दर्शनों में tormented हो रही थीं। अतीत की यादें जबरन दोबारा चलाई जा रही थीं।"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이건… 지옥 그 자체잖아.",
						"english": "This... this is hell itself.",
						"japanese": "これは…まさに地獄だ。",
						"chinese": "这… 这简直就是地狱。",
						"french": "C'est… l'enfer lui-même.",
						"spanish": "Esto… esto es el infierno mismo.",
						"vietnamese": "Đây... đây chính là địa ngục.",
						"thai": "นี่มัน... นรกชัดๆ",
						"hindi": "यह… यह तो नरक ही है।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "cinder",
					"type": "speech",
					"content": {
						"korean": "누군가 이 모든 것을 지켜보고, 즐기고 있을 거예요. 영혼 수확자…",
						"english": "Someone is watching all this, enjoying it. The Soul Reaper...",
						"japanese": "誰かがこれらすべてを observing し、楽しんでいるだろう。魂の刈り取り人…",
						"chinese": "有人正在注视着这一切，并乐在其中。灵魂收割者…",
						"french": "Quelqu'un observe tout cela et en profite. Le Faucheur d'Âmes…",
						"spanish": "Alguien está observando todo esto y disfrutándolo. El Segador de Almas…",
						"vietnamese": "Có kẻ đang theo dõi tất cả những điều này, và tận hưởng nó. Kẻ Gặt Hái Linh Hồn...",
						"thai": "มีใครบางคนกำลังเฝ้าดูและสนุกกับสิ่งนี้อยู่ ผู้เก็บเกี่ยววิญญาณ...",
						"hindi": "कोई यह सब देख रहा है और इसका आनंद ले रहा है। आत्मा का कटाई करने वाला…"
					},
					"emotion": "angry"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						3,
						3
					],
					"action": "enter",
					"speaker": "cinder",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"speaker": "cinder",
					"type": "speech",
					"content": {
						"korean": "더 이상 나아가지 마세요. 그자는… 당신을 노리고 있어요.",
						"english": "Don't go any further. He's... after you.",
						"japanese": "これ以上進まないでください。彼は…あなたを狙っています。",
						"chinese": "不要再往前走了。他…他盯上你了。",
						"french": "N'avancez plus. Il… vous cible.",
						"spanish": "No avances más. Él… te está buscando.",
						"vietnamese": "Đừng đi xa hơn nữa. Hắn... đang nhắm vào bạn.",
						"thai": "อย่าไปไกลกว่านี้ เขา... กำลังจ้องเล่นงานคุณ",
						"hindi": "और आगे मत बढ़ो। वह… तुम्हें निशाना बना रहा है।"
					}
				},
				{
					"content": {
						"korean": "나는 진실을 알아야 해. 누가 이 고통을 만들었는지.",
						"english": "I need to know the truth. Who created this suffering.",
						"japanese": "私は真実を知らなければならない。誰がこの苦痛を生み出したのかを。",
						"chinese": "我必须知道真相。是谁制造了这些痛苦。",
						"french": "Je dois connaître la vérité. Qui a créé cette souffrance.",
						"spanish": "Necesito saber la verdad. Quién creó este sufrimiento.",
						"vietnamese": "Tôi cần biết sự thật. Ai đã tạo ra nỗi đau này.",
						"thai": "ฉันต้องรู้ความจริง ใครเป็นผู้สร้างความทุกข์ทรมานนี้",
						"hindi": "मुझे सच जानना है। किसने इस पीड़ा को जन्म दिया।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "그자는 당신이 절망하는 걸 보고 싶을 거예요. 영혼 수확자… 그 미소 아래에 악의가 숨어있어.",
						"english": "He wants to see you despair. The Soul Reaper... malevolence hides beneath that smile.",
						"japanese": "彼はあなたが絶望するのを見たいだろう。魂の刈り取り人…その笑顔の下には悪意が隠されている。",
						"chinese": "他想看到你绝望。灵魂收割者… 邪恶隐藏在那笑容之下。",
						"french": "Il veut te voir désespérer. Le Faucheur d'Âmes… la malveillance se cache sous ce sourire.",
						"spanish": "Él quiere verte desesperar. El Segador de Almas… la malevolencia se esconde bajo esa sonrisa.",
						"vietnamese": "Hắn muốn thấy bạn tuyệt vọng. Kẻ Gặt Hái Linh Hồn... sự độc ác ẩn chứa dưới nụ cười đó.",
						"thai": "เขาอยากเห็นคุณสิ้นหวัง ผู้เก็บเกี่ยววิญญาณ... ความชั่วร้ายซ่อนอยู่ใต้รอยยิ้มนั้น",
						"hindi": "वह तुम्हें निराश देखना चाहता है। आत्मा का कटाई करने वाला… उस मुस्कान के नीचे द्वेष छिपा है।"
					},
					"speaker": "cinder",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "더 이상 속지 않아. 직접 확인하겠어.",
						"english": "I won't be deceived any longer. I'll see for myself.",
						"japanese": "もう騙されない。自分で確かめる。",
						"chinese": "我不会再被骗了。我要亲自确认。",
						"french": "Je ne me laisserai plus tromper. Je vais vérifier par moi-même.",
						"spanish": "No me engañarán más. Lo comprobaré yo mismo.",
						"vietnamese": "Tôi sẽ không bị lừa dối nữa. Tôi sẽ tự mình xác nhận.",
						"thai": "ฉันจะไม่ถูกหลอกอีกต่อไป ฉันจะไปดูด้วยตัวเอง",
						"hindi": "अब मैं और नहीं बहकूँगा। मैं खुद इसकी पुष्टि करूँगा।"
					}
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "흐흐… 아직 멀었어. 이 지옥에서 영원히 허우적거려라.",
						"english": "Heh heh... Not even close. Wall-o-w in this hell forever.",
						"japanese": "フフ… まだまだだな。この地獄で永遠にもがき苦しめ。",
						"chinese": "呵呵……还差得远呢。永远在这个地狱中挣扎吧。",
						"french": "Hé hé... Pas encore. Débats-toi éternellement dans cet enfer.",
						"spanish": "Je je... Aún te falta. Sumérgete en este infierno para siempre.",
						"vietnamese": "Hừm hừm... Còn xa lắm. Mãi mãi quằn quại trong địa ngục này đi.",
						"thai": "ฮึ่มๆ... ยังอีกไกลนัก ดิ้นรนอยู่ในนรกนี้ชั่วนิรันดร์เถอะ",
						"hindi": "हँ हँ... अभी बहुत दूर हो। इस नर्क में हमेशा के लिए तड़पते रहो।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "cinder",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "아니… 또다시 실패야…!",
						"english": "No... Failed again...!",
						"japanese": "まさか… またしても失敗か…！",
						"chinese": "不… 又失败了…！",
						"french": "Non... Encore un échec... !",
						"spanish": "No... ¡Otra vez he fallado...!",
						"vietnamese": "Không... Lại thất bại nữa rồi...!",
						"thai": "ไม่นะ... ล้มเหลวอีกแล้ว...!",
						"hindi": "नहीं... फिर से हार गया...!"
					},
					"speaker": "cinder",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "아직 끝나지 않았어. 절대로 포기하지 않아!",
						"english": "It's not over yet. I'll never give up!",
						"japanese": "まだ終わってない。絶対に諦めない！",
						"chinese": "还没有结束。我绝不放弃！",
						"french": "Ce n'est pas encore fini. Je n'abandonnerai jamais !",
						"spanish": "Aún no ha terminado. ¡Jamás me rendiré!",
						"vietnamese": "Chưa kết thúc đâu. Tuyệt đối không từ bỏ!",
						"thai": "ยังไม่จบหรอก ฉันไม่มีวันยอมแพ้!",
						"hindi": "अभी खत्म नहीं हुआ है। मैं कभी हार नहीं मानूंगा!"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "마침내, 거대한 그림자가 앞을 가로막았다.",
						"english": "Finally, a colossal shadow blocked the way.",
						"japanese": "ついに、巨大な影が道を塞いだ。",
						"chinese": "终于，一道巨大的阴影挡住了去路。",
						"french": "Enfin, une ombre colossale bloqua le chemin.",
						"spanish": "Finalmente, una sombra colosal bloqueó el camino.",
						"vietnamese": "Cuối cùng, một bóng đen khổng lồ chặn lối.",
						"thai": "ในที่สุด เงาขนาดมหึมาก็ขวางทาง",
						"hindi": "अंततः, एक विशाल छाया ने मार्ग अवरुद्ध कर दिया।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…또 새로운 영혼이군. 이 고통에 동참할 준비가 되었나?",
						"english": "...Another new soul. Are you ready to join this torment?",
						"japanese": "…また新たな魂か。この苦痛に加わる準備はできたか？",
						"chinese": "……又是一个新灵魂。你准备好加入这场折磨了吗？",
						"french": "...Encore une nouvelle âme. Es-tu prêt à rejoindre ce tourment ?",
						"spanish": "...Otra alma nueva. ¿Estás listo para unirte a este tormento?",
						"vietnamese": "...Lại một linh hồn mới. Ngươi đã sẵn sàng tham gia vào nỗi thống khổ này chưa?",
						"thai": "...อีกหนึ่งวิญญาณใหม่ เจ้าพร้อมที่จะร่วมความทรมานนี้แล้วหรือยัง?",
						"hindi": "…एक और नई आत्मा। क्या तुम इस पीड़ा में शामिल होने के लिए तैयार हो?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "네가 영혼 수확자냐! 이 지옥의 모든 고통이 네 짓이냐?",
						"english": "Are you the Soul Reaper! Is all this hellish torment your doing?",
						"japanese": "貴様が魂の収穫者か！この地獄の苦痛は全て貴様の仕業か？",
						"chinese": "你就是灵魂收割者吗！这地狱的所有痛苦都是你造成的吗？",
						"french": "Es-tu le Faucheur d'âmes ! Toute cette souffrance infernale est-elle ton œuvre ?",
						"spanish": "¿Eres el Segador de Almas? ¿Todo este tormento infernal es obra tuya?",
						"vietnamese": "Ngươi là Kẻ Gặt Hái Linh Hồn sao! Mọi nỗi thống khổ của địa ngục này là do ngươi gây ra?",
						"thai": "เจ้าคือผู้เก็บเกี่ยววิญญาณรึ! ความทุกข์ทรมานในนรกนี้เป็นฝีมือของเจ้าทั้งหมดใช่ไหม?",
						"hindi": "क्या तुम आत्मा संहारक हो! क्या इस नरक की सारी पीड़ा तुम्हारी करनी है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "흐흐… 진실은 네가 생각하는 것보다 훨씬 잔인할 텐데.",
						"english": "Heh heh... The truth will be far more cruel than you imagine.",
						"japanese": "ふふ…真実は貴様が思うよりもずっと残酷だろうな。",
						"chinese": "呵呵……真相会比你想象的残忍得多。",
						"french": "Hé hé... La vérité sera bien plus cruelle que tu ne l'imagines.",
						"spanish": "Je je... La verdad será mucho más cruel de lo que imaginas.",
						"vietnamese": "Hừm hừm... Sự thật sẽ tàn nhẫn hơn nhiều so với những gì ngươi nghĩ.",
						"thai": "ฮึๆ... ความจริงจะโหดร้ายกว่าที่เจ้าคิดมากนัก",
						"hindi": "हँ हँ... सच्चाई तुम्हारी सोच से कहीं ज़्यादा क्रूर होगी।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"speaker": "cinder",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "cinder",
					"content": {
						"korean": "그자의 말에 속지 마세요! 그자가 모든 것을 조종하고 있어!",
						"english": "Don't fall for his lies! He's controlling everything!",
						"japanese": "彼の言葉に騙されないで！彼が全てを操っているのよ！",
						"chinese": "别被他的话骗了！他操控着一切！",
						"french": "Ne te laisse pas berner par ses paroles ! Il contrôle tout !",
						"spanish": "¡No caigas en sus mentiras! ¡Él está controlando todo!",
						"vietnamese": "Đừng tin lời hắn! Hắn đang điều khiển mọi thứ!",
						"thai": "อย่าหลงเชื่อคำพูดของมัน! มันกำลังควบคุมทุกอย่างอยู่!",
						"hindi": "उसकी बातों में मत आना! वह सब कुछ नियंत्रित कर रहा है!"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…저 가련한 영혼은 아직도 깨닫지 못하는군.",
						"english": "...That pathetic soul still doesn't understand.",
						"japanese": "…あの哀れな魂はまだ何も分かっていないようだな。",
						"chinese": "……那个可怜的灵魂还是没有明白。",
						"french": "...Cette pauvre âme ne comprend toujours pas.",
						"spanish": "...Esa alma patética aún no comprende.",
						"vietnamese": "...Linh hồn đáng thương đó vẫn chưa nhận ra.",
						"thai": "...วิญญาณที่น่าสมเพชนั้นยังไม่เข้าใจสินะ",
						"hindi": "…वह अभागी आत्मा अभी भी नहीं समझ पा रही है।"
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "…이것이 끝이라고 생각하나? 넌 아직 아무것도 몰라.",
						"english": "...Do you think this is the end? You still know nothing.",
						"japanese": "…これが終わりだとでも？貴様はまだ何も知らない。",
						"chinese": "……你以为这就是结束了吗？你还一无所知。",
						"french": "...Tu penses que c'est la fin ? Tu ne sais encore rien.",
						"spanish": "...¿Crees que este es el final? Todavía no sabes nada.",
						"vietnamese": "...Ngươi nghĩ đây là kết thúc sao? Ngươi vẫn chưa biết gì cả.",
						"thai": "...เจ้าคิดว่านี่คือจุดจบแล้วรึ? เจ้ายังไม่รู้อะไรเลย",
						"hindi": "…क्या तुम्हें लगता है कि यह अंत है? तुम्हें अभी भी कुछ नहीं पता।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "이제 끝이야. 네가 만든 지옥도… 끝이라고!",
						"english": "It's over now. The hell you created... it's over!",
						"japanese": "これで終わりだ。お前が作った地獄も…終わりだ！",
						"chinese": "现在结束了。你创造的地狱也……结束了！",
						"french": "C'est fini maintenant. L'enfer que tu as créé... c'est fini !",
						"spanish": "Se acabó. El infierno que creaste... ¡se acabó!",
						"vietnamese": "Kết thúc rồi. Địa ngục mà ngươi tạo ra... cũng kết thúc rồi!",
						"thai": "จบแล้ว. นรกที่เจ้าสร้างขึ้น... จบลงแล้ว!",
						"hindi": "अब यह खत्म हो गया। तुमने जो नर्क बनाया था... वह भी खत्म!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "happy"
				},
				{
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "cinder",
					"duration_ms": 500
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "…영혼 수확자가 쓰러졌어! 우리가 해냈어!",
						"english": "...The Soul Reaper has fallen! We did it!",
						"japanese": "…魂の収穫者が倒れた！やったぞ！",
						"chinese": "……灵魂收割者倒下了！我们成功了！",
						"french": "...Le Faucheur d'âmes est tombé ! Nous l'avons fait !",
						"spanish": "...¡El Segador de Almas ha caído! ¡Lo logramos!",
						"vietnamese": "...Kẻ Gặt Hái Linh Hồn đã gục ngã! Chúng ta đã làm được!",
						"thai": "...ผู้เก็บเกี่ยววิญญาณล้มลงแล้ว! เราทำสำเร็จแล้ว!",
						"hindi": "…आत्मा संहारक गिर गया! हमने कर दिखाया!"
					},
					"type": "speech",
					"speaker": "cinder"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그러나 환영은 사라지지 않았다. 고통의 루프는 계속되고 있었다.",
						"english": "But the illusion did not disappear. The loop of torment continued.",
						"japanese": "しかし、幻影は消えなかった。苦痛のループは続いていた。",
						"chinese": "然而，幻象并未消失。痛苦的循环仍在继续。",
						"french": "Mais l'illusion ne disparut pas. La boucle de tourment continuait.",
						"spanish": "Pero la ilusión no desapareció. El ciclo de tormento continuaba.",
						"vietnamese": "Nhưng ảo ảnh không biến mất. Vòng lặp thống khổ vẫn tiếp diễn.",
						"thai": "แต่ภาพลวงตาไม่หายไป. วงจรแห่งความทุกข์ทรมานยังคงดำเนินต่อไป",
						"hindi": "परंतु भ्रम गायब नहीं हुआ। पीड़ा का चक्र जारी था।"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"id": 15
		}
	]
} as const;
