export const scenario_forest_lysandra_21_04 = {
	"scenario_id": "forest_lysandra_21_04",
	"order": 4,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"cedar": {
			"id": "mon_bd67c222-311e-4f31-b81f-931b14f6b5c6",
			"name": {
				"korean": "시더",
				"english": "Cedar",
				"japanese": "シダー",
				"chinese": "雪松",
				"french": "Cèdre",
				"spanish": "Cedro",
				"vietnamese": "Tuyết tùng",
				"thai": "ซีดาร์",
				"hindi": "देवदार"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f1057921-5fa2-4be2-767d-1a64c33e6e00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9579f10e-eb78-40e5-d495-72f489322200/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"세 번의 진실. 세 번의 배신.",
			"여왕의 손길이 닿는 곳마다, 숲은 죽어갔다.",
			"그것은 구원이 아니었다. 파멸의 기록만이 남았다.",
			"가장 오래된 기록자가, 가장 슬픈 진실을 말하리라."
		],
		"english": [
			"Three truths. Three betrayals.",
			"Wherever the Queen's touch reached, the forest withered.",
			"It was not salvation. Only records of ruin remained.",
			"The oldest chronicler will tell the saddest truth."
		],
		"japanese": [
			"三つの真実。三つの裏切り。",
			"女王の手が触れる場所すべてで、森は死んでいった。",
			"それは救済ではなかった。残されたのは破滅の記録のみ。",
			"最も古き記録者が、最も悲しき真実を語るだろう。"
		],
		"chinese": [
			"三个真相。三次背叛。",
			"女王之手所及之处，森林尽皆枯萎。",
			"那并非救赎。只剩下毁灭的记录。",
			"最古老的记录者，将讲述最悲伤的真相。"
		],
		"french": [
			"Trois vérités. Trois trahisons.",
			"Partout où la main de la Reine touchait, la forêt mourait.",
			"Ce n'était pas un salut. Seuls des récits de ruine subsistaient.",
			"Le plus ancien chroniqueur révélera la plus triste vérité."
		],
		"spanish": [
			"Tres verdades. Tres traiciones.",
			"Dondequiera que la mano de la Reina tocara, el bosque moría.",
			"No fue salvación. Solo quedaron registros de ruina.",
			"El cronista más antiguo contará la verdad más triste."
		],
		"vietnamese": [
			"Ba sự thật. Ba sự phản bội.",
			"Nơi nào bàn tay Nữ hoàng chạm đến, rừng cây đều héo tàn.",
			"Đó không phải là sự cứu rỗi. Chỉ còn lại những ghi chép về sự hủy diệt.",
			"Người ghi chép lâu đời nhất sẽ kể sự thật đáng buồn nhất."
		],
		"thai": [
			"สามความจริง สามการทรยศ",
			"ที่ใดที่พระหัตถ์ของราชินีเอื้อมถึง ที่นั่นป่าก็ร่วงโรย",
			"นั่นไม่ใช่การไถ่ถอน เหลือเพียงบันทึกแห่งความพินาศ",
			"ผู้บันทึกที่เก่าแก่ที่สุดจะบอกเล่าความจริงที่น่าเศร้าที่สุด"
		],
		"hindi": [
			"तीन सत्य। तीन विश्वासघात।",
			"जहाँ-जहाँ रानी का स्पर्श पहुँचा, जंगल सूख गया।",
			"वह मुक्ति नहीं थी। केवल विनाश के अभिलेख शेष थे।",
			"सबसे पुराना इतिहासकार सबसे दुखद सत्य बताएगा।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "cedar",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "cedar",
					"content": {
						"korean": "오랜 기록 속에 그 답이… 죄악의 뿌리가 담겨 있다.",
						"english": "The answer... the root of the sin... lies in ancient records.",
						"japanese": "古い記録の中にその答えが… 罪悪の根源が隠されている。",
						"chinese": "那个答案……罪恶的根源……蕴藏在古老的记录中。",
						"french": "La réponse... la racine du péché... est dans les anciens registres.",
						"spanish": "La respuesta... la raíz del pecado... se encuentra en los registros antiguos.",
						"vietnamese": "Câu trả lời... nguồn gốc của tội lỗi... nằm trong những ghi chép cổ xưa.",
						"thai": "คำตอบ... รากเหง้าของบาป... อยู่ในบันทึกโบราณ",
						"hindi": "उत्तर... पाप की जड़... प्राचीन अभिलेखों में निहित है।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 숲이… 이렇게 변해버린 이유가 뭔지 알아?",
						"english": "Do you know why this forest... changed like this?",
						"japanese": "この森が… こうなってしまった理由を知っているか？",
						"chinese": "你知道这片森林……为何变成这般模样吗？",
						"french": "Sais-tu pourquoi cette forêt... a changé ainsi ?",
						"spanish": "¿Sabes por qué este bosque... cambió así?",
						"vietnamese": "Ngươi có biết tại sao khu rừng này... lại biến đổi như vậy không?",
						"thai": "เจ้าไม่รู้หรือว่าทำไมป่าแห่งนี้... ถึงได้เปลี่ยนไปแบบนี้?",
						"hindi": "क्या तुम जानते हो कि यह जंगल... ऐसे क्यों बदल गया?"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "여왕은 왕국을 구하려 했다. 마지막 씨앗을 지키기 위해.",
						"english": "The Queen tried to save the kingdom. To protect the last seed.",
						"japanese": "女王は王国を救おうとした。最後の種を守るために。",
						"chinese": "女王曾试图拯救王国。为了守护最后一颗种子。",
						"french": "La Reine a tenté de sauver le royaume. Pour protéger la dernière graine.",
						"spanish": "La Reina intentó salvar el reino. Para proteger la última semilla.",
						"vietnamese": "Nữ hoàng đã cố gắng cứu vương quốc. Để bảo vệ hạt giống cuối cùng.",
						"thai": "ราชินีพยายามที่จะกอบกู้อาณาจักร เพื่อปกป้องเมล็ดพันธุ์สุดท้าย",
						"hindi": "रानी ने राज्य को बचाने की कोशिश की। आखिरी बीज की रक्षा के लिए।"
					},
					"type": "speech",
					"speaker": "cedar"
				},
				{
					"content": {
						"korean": "그래서 숲의 생명력을 흡수하기 시작했지. 구원이라 믿었겠지.",
						"english": "So she began to absorb the forest's life force. Believing it was salvation.",
						"japanese": "だから森の生命力を吸い取り始めたのだ。それが救済だと信じて。",
						"chinese": "于是她开始吸收森林的生命力。相信那是救赎。",
						"french": "Alors elle a commencé à absorber la force vitale de la forêt. Croyant que c'était un salut.",
						"spanish": "Así que empezó a absorber la fuerza vital del bosque. Creyendo que era salvación.",
						"vietnamese": "Vì vậy, cô ấy bắt đầu hấp thụ sinh lực của khu rừng. Tin rằng đó là sự cứu rỗi.",
						"thai": "ดังนั้นเธอจึงเริ่มดูดซับพลังชีวิตของป่า โดยเชื่อว่านั่นคือการไถ่ถอน",
						"hindi": "इसलिए उसने जंगल की जीवन शक्ति को सोखना शुरू कर दिया। यह मानते हुए कि यह मुक्ति थी।"
					},
					"emotion": "sad",
					"speaker": "cedar",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "구원… 이 숲을 죽이면서?",
						"english": "Salvation... by killing this forest?",
						"japanese": "救済… この森を殺して？",
						"chinese": "救赎……通过杀死这片森林？",
						"french": "Le salut... en tuant cette forêt ?",
						"spanish": "¿Salvación... matando este bosque?",
						"vietnamese": "Cứu rỗi... bằng cách giết chết khu rừng này sao?",
						"thai": "การไถ่ถอน... ด้วยการฆ่าป่านี้หรือ?",
						"hindi": "मुक्ति... इस जंगल को मारकर?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "그것이… 그녀의 죄악의 시작이었다.",
						"english": "That... was the beginning of her sin.",
						"japanese": "それが… 彼女の罪悪の始まりだった。",
						"chinese": "那……是她罪恶的开始。",
						"french": "C'était... le début de son péché.",
						"spanish": "Ese... fue el comienzo de su pecado.",
						"vietnamese": "Đó... là khởi đầu tội lỗi của cô ấy.",
						"thai": "นั่น... คือจุดเริ่มต้นของบาปของเธอ",
						"hindi": "वह... उसके पाप की शुरुआत थी।"
					},
					"emotion": "sad",
					"speaker": "cedar",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 550,
					"speaker": "cedar",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"speaker": "cedar",
					"type": "speech",
					"content": {
						"korean": "보이는가? 이 뒤틀린 고목들이.",
						"english": "Do you see them? These twisted old trees.",
						"japanese": "見えるか？この歪んだ古木たちが。",
						"chinese": "看到了吗？这些扭曲的古树。",
						"french": "Les vois-tu ? Ces vieux arbres tordus.",
						"spanish": "¿Los ves? Estos viejos árboles retorcidos.",
						"vietnamese": "Ngươi có thấy không? Những cây cổ thụ biến dạng này.",
						"thai": "เห็นไหม? ต้นไม้เก่าแก่ที่บิดเบี้ยวเหล่านี้",
						"hindi": "क्या तुम इन्हें देखते हो? ये मुड़े हुए पुराने पेड़।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "전에 봤던 것들이군. 왜 이렇게 된 거지?",
						"english": "We've seen these before. Why are they like this?",
						"japanese": "以前にも見たな。なぜこうなった？",
						"chinese": "以前见过这些。为什么会变成这样？",
						"french": "Nous les avons déjà vus. Pourquoi sont-ils ainsi ?",
						"spanish": "Ya los habíamos visto. ¿Por qué están así?",
						"vietnamese": "Chúng ta đã thấy chúng trước đây. Tại sao chúng lại như thế này?",
						"thai": "เราเคยเห็นพวกมันมาก่อน ทำไมพวกมันถึงเป็นแบบนี้?",
						"hindi": "हमने इन्हें पहले भी देखा है। ये ऐसे क्यों हो गए?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "여왕의 마법에 잠식된 숲의 모습이다. 생명력을 빼앗겨 죽어가는 나무들.",
						"english": "This is the forest consumed by the Queen's magic. Trees losing their vitality, slowly dying.",
						"japanese": "女王の魔法に侵食された森の姿だ。生命力を奪われ、死につつある木々。",
						"chinese": "这是被女王魔法侵蚀的森林。树木被剥夺了生命力，正在逐渐死去。",
						"french": "C'est l'aspect de la forêt consumée par la magie de la Reine. Des arbres perdant leur vitalité, mourant lentement.",
						"spanish": "Este es el bosque consumido por la magia de la Reina. Árboles perdiendo su vitalidad, muriendo lentamente.",
						"vietnamese": "Đây là khu rừng bị ma thuật của Nữ hoàng nuốt chửng. Những cái cây đang mất đi sức sống, chết dần chết mòn.",
						"thai": "นี่คือป่าที่ถูกเวทมนตร์ของราชินีกลืนกิน ต้นไม้กำลังสูญเสียพลังชีวิตและกำลังจะตาย",
						"hindi": "यह रानी के जादू से घिरा जंगल है। पेड़ अपनी जीवन शक्ति खो रहे हैं, धीरे-धीरे मर रहे हैं।"
					},
					"emotion": "sad",
					"speaker": "cedar",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그럼… 우리가 본 모든 변화가 여왕 때문에?",
						"english": "So… all the changes we've seen are because of the Queen?",
						"japanese": "では…我々が見た全ての変化は女王のせいだと？",
						"chinese": "那么……我们看到的所有变化都是因为女王？",
						"french": "Alors… tous les changements que nous avons vus sont à cause de la Reine ?",
						"spanish": "Entonces… ¿todos los cambios que hemos visto son por culpa de la Reina?",
						"vietnamese": "Vậy… tất cả những thay đổi chúng ta thấy đều là do Nữ hoàng ư?",
						"thai": "งั้น… การเปลี่ยนแปลงทั้งหมดที่เราเห็นเป็นเพราะราชินีเหรอ?",
						"hindi": "तो… हमने जितने भी बदलाव देखे, क्या वे सब रानी की वजह से हैं?"
					},
					"emotion": "angry"
				},
				{
					"speaker": "cedar",
					"type": "speech",
					"content": {
						"korean": "왕국을 지키려던 구원은, 숲을 파멸로 이끌었다.",
						"english": "The salvation meant to protect the kingdom led the forest to ruin.",
						"japanese": "王国を守ろうとした救済は、森を破滅へと導いた。",
						"chinese": "旨在守护王国的救赎，却将森林引向了毁灭。",
						"french": "La rédemption censée protéger le royaume a mené la forêt à sa perte.",
						"spanish": "La salvación que pretendía proteger el reino llevó al bosque a la ruina.",
						"vietnamese": "Sự cứu rỗi nhằm bảo vệ vương quốc đã đẩy khu rừng vào diệt vong.",
						"thai": "การกอบกู้ที่ตั้งใจจะปกป้องอาณาจักรกลับนำป่าไปสู่ความพินาศ",
						"hindi": "राज्य को बचाने की कोशिश में, जंगल विनाश की ओर बढ़ गया।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "숲의 기이한 변형은, 여왕의 왜곡된 구원에서 시작되었다.",
						"english": "The strange transformation of the forest began with the Queen's twisted salvation.",
						"japanese": "森の奇妙な変容は、女王の歪んだ救済から始まった。",
						"chinese": "森林的奇异变异，始于女王扭曲的救赎。",
						"french": "L'étrange transformation de la forêt a commencé avec la rédemption tordue de la Reine.",
						"spanish": "La extraña transformación del bosque comenzó con la salvación retorcida de la Reina.",
						"vietnamese": "Sự biến đổi kỳ lạ của khu rừng bắt đầu từ sự cứu rỗi méo mó của Nữ hoàng.",
						"thai": "การเปลี่ยนแปลงที่แปลกประหลาดของป่าเริ่มต้นจากการไถ่ถอนที่บิดเบี้ยวของราชินี",
						"hindi": "जंगल का अजीबोगरीब परिवर्तन रानी के विकृत मोक्ष से शुरू हुआ।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 400,
					"speaker": "cedar",
					"action": "enter",
					"spot": [
						5,
						4
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "cedar",
					"content": {
						"korean": "여왕의 죄책감… 그리고 숲의 파멸.",
						"english": "The Queen's guilt… and the forest's destruction.",
						"japanese": "女王の罪悪感…そして森の破滅。",
						"chinese": "女王的罪恶感……以及森林的毁灭。",
						"french": "La culpabilité de la Reine… et la destruction de la forêt.",
						"spanish": "La culpa de la Reina… y la destrucción del bosque.",
						"vietnamese": "Cảm giác tội lỗi của Nữ hoàng… và sự hủy diệt của khu rừng.",
						"thai": "ความรู้สึกผิดของราชินี… และการทำลายล้างของป่า",
						"hindi": "रानी का अपराधबोध… और जंगल का विनाश।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "cedar",
					"content": {
						"korean": "그것은 피할 수 없는 부조리한 운명이었다.",
						"english": "It was an inescapable, absurd fate.",
						"japanese": "それは避けられない不条理な運命だった。",
						"chinese": "那是一个无法避免的荒谬命运。",
						"french": "C'était un destin absurde et inévitable.",
						"spanish": "Fue un destino absurdo e ineludible.",
						"vietnamese": "Đó là một số phận phi lý, không thể tránh khỏi.",
						"thai": "มันคือโชคชะตาที่ไร้สาระและหลีกเลี่ยงไม่ได้",
						"hindi": "यह एक अपरिहार्य, बेतुका भाग्य था।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "우리는… 무엇을 믿어야 했던 거지?",
						"english": "What… were we supposed to believe?",
						"japanese": "我々は…何を信じるべきだったのか？",
						"chinese": "我们……到底该相信什么？",
						"french": "Que… devions-nous croire ?",
						"spanish": "¿Qué… se suponía que debíamos creer?",
						"vietnamese": "Chúng ta… lẽ ra phải tin vào điều gì?",
						"thai": "เรา… ควรจะเชื่ออะไรกันแน่?",
						"hindi": "हमें… क्या मानना चाहिए था?"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "이 숲을 치유하려던 우리의 노력이… 전부 헛된 거였어?",
						"english": "All our efforts to heal this forest… were they all in vain?",
						"japanese": "この森を癒そうとした我々の努力は…全て無駄だったのか？",
						"chinese": "我们为了治愈这片森林所做的努力……都白费了吗？",
						"french": "Tous nos efforts pour guérir cette forêt… étaient-ils vains ?",
						"spanish": "Todos nuestros esfuerzos por sanar este bosque… ¿fueron en vano?",
						"vietnamese": "Tất cả nỗ lực của chúng ta để chữa lành khu rừng này… đều vô ích sao?",
						"thai": "ความพยายามทั้งหมดของเราที่จะเยียวยาป่าแห่งนี้… ไร้ประโยชน์ทั้งหมดเลยงั้นหรือ?",
						"hindi": "इस जंगल को ठीक करने के हमारे सारे प्रयास… क्या सब व्यर्थ थे?"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_1"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "어쩌면… 우리가 숲을 더 깊은 파멸로 몰아넣었을지도.",
						"english": "Perhaps... we've driven the forest deeper into ruin.",
						"japanese": "もしかしたら… 我々が森を、より深い破滅へと追いやったのかもしれない。",
						"chinese": "或许… 我们把森林推向了更深的毁灭。",
						"french": "Peut-être... avons-nous entraîné la forêt plus profondément dans la ruine.",
						"spanish": "Quizás... hemos empujado al bosque a una ruina más profunda.",
						"vietnamese": "Có lẽ... chúng ta đã đẩy khu rừng vào sự hủy diệt sâu hơn.",
						"thai": "บางที... เราอาจผลักไสป่าให้จมดิ่งสู่หายนะยิ่งขึ้นไปอีก",
						"hindi": "शायद... हमने जंगल को और गहरी तबाही में धकेल दिया है।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "cedar",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "진실을 마주할 때… 고통은 더 깊어지는 법.",
						"english": "When facing the truth... pain only deepens.",
						"japanese": "真実と向き合う時… 苦痛は深まるばかりだ。",
						"chinese": "当面对真相时… 痛苦只会更深。",
						"french": "Face à la vérité... la douleur ne fait que s'intensifier.",
						"spanish": "Al enfrentar la verdad... el dolor solo se profundiza.",
						"vietnamese": "Khi đối mặt với sự thật... nỗi đau càng sâu sắc hơn.",
						"thai": "เมื่อเผชิญหน้ากับความจริง... ความเจ็บปวดก็ยิ่งลึกซึ้งขึ้นเท่านั้น",
						"hindi": "जब सच का सामना करते हैं... दर्द और गहरा होता जाता है।"
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"duration_ms": 600,
					"speaker": "cedar",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "cedar",
					"emotion": "sad",
					"content": {
						"korean": "되돌릴 수 없다. 이미 모든 것이 시작되었다.",
						"english": "No turning back. Everything has already begun.",
						"japanese": "もう後戻りはできない。全ては既に始まっている。",
						"chinese": "无法回头。一切都已开始。",
						"french": "Impossible de faire marche arrière. Tout a déjà commencé.",
						"spanish": "No hay vuelta atrás. Todo ha comenzado ya.",
						"vietnamese": "Không thể quay lại. Mọi thứ đã bắt đầu rồi.",
						"thai": "ย้อนกลับไม่ได้แล้ว ทุกสิ่งได้เริ่มต้นขึ้นแล้ว",
						"hindi": "अब पीछे नहीं हट सकते। सब कुछ पहले ही शुरू हो चुका है।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "결국… 이 길 끝에는.",
						"english": "Ultimately... at the end of this path.",
						"japanese": "結局… この道の先には。",
						"chinese": "最终… 在这条路的尽头。",
						"french": "Finalement... au bout de ce chemin.",
						"spanish": "Al final... de este camino.",
						"vietnamese": "Cuối cùng... ở cuối con đường này.",
						"thai": "ในที่สุด... ที่ปลายทางนี้",
						"hindi": "आखिरकार... इस रास्ते के अंत में।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_3",
					"emotion": "base",
					"content": {
						"korean": "여왕과 맞서야만 하는 건가.",
						"english": "Must we... confront the Queen?",
						"japanese": "女王と… 対峙しなければならないのか。",
						"chinese": "我们必须… 对抗女王吗？",
						"french": "Devons-nous... affronter la Reine ?",
						"spanish": "¿Debemos... enfrentarnos a la Reina?",
						"vietnamese": "Chúng ta... phải đối mặt với Nữ hoàng sao?",
						"thai": "เรา... ต้องเผชิญหน้ากับราชินีหรือ?",
						"hindi": "क्या हमें... रानी का सामना करना होगा?"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "파멸을 막으려면… 그 죄악의 뿌리를 뽑아야만 한다.",
						"english": "To prevent ruin... we must uproot that sin.",
						"japanese": "破滅を防ぐには… その罪の根源を断ち切らねばならない。",
						"chinese": "为了阻止毁灭… 必须铲除那罪恶的根源。",
						"french": "Pour empêcher la ruine... nous devons déraciner ce péché.",
						"spanish": "Para evitar la ruina... debemos arrancar de raíz ese pecado.",
						"vietnamese": "Để ngăn chặn sự hủy diệt... chúng ta phải nhổ bỏ tận gốc tội lỗi đó.",
						"thai": "เพื่อยับยั้งหายนะ... เราต้องถอนรากถอนโคนบาปนั้น",
						"hindi": "तबाही रोकने के लिए... हमें उस पाप की जड़ उखाड़नी होगी।"
					},
					"type": "speech",
					"speaker": "cedar"
				},
				{
					"content": {
						"korean": "우리가… 해낼 수 있을까.",
						"english": "Can we... succeed?",
						"japanese": "我々が… やり遂げられるだろうか。",
						"chinese": "我们… 能做到吗？",
						"french": "Pouvons-nous... y arriver ?",
						"spanish": "¿Podremos... lograrlo?",
						"vietnamese": "Chúng ta... có làm được không?",
						"thai": "เรา... จะทำได้ไหม?",
						"hindi": "क्या हम... सफल हो पाएंगे?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그것이… 이 숲의 마지막 희망이다.",
						"english": "That is... this forest's last hope.",
						"japanese": "それが… この森の最後の希望だ。",
						"chinese": "那… 是这片森林最后的希望。",
						"french": "C'est... le dernier espoir de cette forêt.",
						"spanish": "Esa es... la última esperanza de este bosque.",
						"vietnamese": "Đó là... hy vọng cuối cùng của khu rừng này.",
						"thai": "นั่นคือ... ความหวังสุดท้ายของป่าแห่งนี้",
						"hindi": "यही... इस जंगल की आखिरी उम्मीद है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "cedar"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "여기까지 온 건가? 어리석은 자들.",
						"english": "You've come this far? Fools.",
						"japanese": "ここまで来たか？愚か者どもめ。",
						"chinese": "你们走到这里了？愚蠢的家伙们。",
						"french": "Vous êtes venus jusqu'ici ? Imbéciles.",
						"spanish": "¿Habéis llegado hasta aquí? Necios.",
						"vietnamese": "Các ngươi đã đến đây sao? Những kẻ ngu ngốc.",
						"thai": "พวกเจ้ามาถึงที่นี่แล้วรึ? พวกโง่เขลา",
						"hindi": "तुम यहाँ तक आ गए? मूर्खों।"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "감히… 이 숲의 질서를 거스르려 하다니.",
						"english": "How dare you... defy the order of this forest.",
						"japanese": "よくも… この森の秩序に逆らおうとするものだ。",
						"chinese": "竟敢… 违抗这片森林的秩序。",
						"french": "Comment osez-vous... défier l'ordre de cette forêt.",
						"spanish": "¿Cómo osáis... desafiar el orden de este bosque?",
						"vietnamese": "Dám... chống lại trật tự của khu rừng này.",
						"thai": "กล้าดียังไง... มาท้าทายระเบียบของป่าแห่งนี้",
						"hindi": "तुम्हारी हिम्मत कैसे हुई... इस जंगल की व्यवस्था का उल्लंघन करने की।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "우린 진실을 알았어. 이제 멈출 거야.",
						"english": "We know the truth. We'll stop now.",
						"japanese": "我々は真実を知った。もう止める。",
						"chinese": "我们已经知道了真相。现在该停止了。",
						"french": "Nous connaissons la vérité. Nous allons arrêter maintenant.",
						"spanish": "Conocemos la verdad. Ahora nos detendremos.",
						"vietnamese": "Chúng ta đã biết sự thật. Giờ sẽ dừng lại thôi.",
						"thai": "เรารู้ความจริงแล้ว ตอนนี้จะหยุดแล้ว",
						"hindi": "हमें सच्चाई पता चल गई है। अब हम रुकेंगे।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "진실? 파멸의 그림자 앞에서, 그 진실이 무슨 소용이지?",
						"english": "Truth? Before the shadow of ruin, what good is truth?",
						"japanese": "真実？破滅の影の前で、その真実に何の意味がある？",
						"chinese": "真相？在毁灭的阴影面前，那真相有什么用？",
						"french": "La vérité ? Devant l'ombre de la ruine, à quoi bon cette vérité ?",
						"spanish": "¿La verdad? Ante la sombra de la ruina, ¿de qué sirve la verdad?",
						"vietnamese": "Sự thật? Trước bóng tối hủy diệt, sự thật đó có ích gì?",
						"thai": "ความจริง? ต่อหน้าเงามืดแห่งความพินาศ ความจริงนั้นมีประโยชน์อะไร?",
						"hindi": "सच? विनाश की छाया के सामने, उस सच का क्या फ़ायदा?"
					},
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "크윽… 하지만… 이것이 끝이 아니다….",
						"english": "Ugh… But… this is not the end…",
						"japanese": "くっ…しかし…これで終わりではない。",
						"chinese": "呃啊…但是…这还不是结束…。",
						"french": "Ugh… Mais… ce n'est pas la fin…",
						"spanish": "Ugh… Pero… este no es el final…",
						"vietnamese": "Khụ… Nhưng… đây chưa phải là kết thúc…",
						"thai": "อึก… แต่… นี่ไม่ใช่จุดจบ…",
						"hindi": "उफ़… लेकिन… यह अंत नहीं है…।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "여왕의… 진정한 고통은… 이제부터 시작될 것이다….",
						"english": "The Queen's… true suffering… will begin now…",
						"japanese": "女王の…真の苦痛は…今から始まるだろう。",
						"chinese": "女王的…真正痛苦…将从现在开始…。",
						"french": "La véritable souffrance de la Reine… commencera maintenant…",
						"spanish": "El verdadero sufrimiento de la Reina… comenzará ahora…",
						"vietnamese": "Nỗi đau thật sự của Nữ hoàng… sẽ bắt đầu từ bây giờ…",
						"thai": "ความทรมานที่แท้จริงของราชินี… จะเริ่มขึ้นเดี๋ยวนี้…",
						"hindi": "रानी की… असली पीड़ा… अब शुरू होगी…।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "무슨 소리야? 도대체 뭐가 더 남았다는 거야?",
						"english": "What are you talking about? What else is left?",
						"japanese": "何を言っている？一体何が残っているというのだ？",
						"chinese": "你在说什么？到底还有什么剩下的？",
						"french": "Qu'est-ce que tu racontes ? Qu'est-ce qu'il reste d'autre ?",
						"spanish": "¿De qué hablas? ¿Qué más queda?",
						"vietnamese": "Ngươi đang nói gì vậy? Rốt cuộc còn gì nữa chứ?",
						"thai": "พูดอะไรน่ะ? มันเหลืออะไรอีก?",
						"hindi": "क्या बक रहे हो? आख़िर और क्या बचा है?"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "쓰러진 {random_boss}. 그러나 숲의 그림자는 여전히 짙게 드리워져 있었다.",
						"english": "The fallen {random_boss}. Yet, the shadow of the forest still loomed heavily.",
						"japanese": "倒れた{random_boss}。しかし、森の影は依然として深く覆いかぶさっていた。",
						"chinese": "倒下的{random_boss}。然而，森林的阴影依然浓重地笼罩着。",
						"french": "Le/La {random_boss} est tombé(e). Pourtant, l'ombre de la forêt planait toujours lourdement.",
						"spanish": "El/La {random_boss} caído(a). Sin embargo, la sombra del bosque aún se cernía pesadamente.",
						"vietnamese": "{random_boss} đã ngã xuống. Thế nhưng, bóng tối của khu rừng vẫn bao trùm nặng nề.",
						"thai": "{random_boss} ที่ล้มลง แต่เงาของป่ายังคงทอดยาวอย่างหนาแน่น",
						"hindi": "गिरा हुआ {random_boss}। फिर भी, जंगल की छाया अभी भी गहरी बनी हुई थी।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "여왕의 죄악은, 아직 그 뿌리를 드러내지 않은 듯했다.",
						"english": "The Queen's sin seemed to not yet have revealed its roots.",
						"japanese": "女王の罪は、まだその根源を現していないようだった。",
						"chinese": "女王的罪恶，似乎尚未显露其根源。",
						"french": "Le péché de la Reine ne semblait pas encore avoir révélé ses racines.",
						"spanish": "El pecado de la Reina parecía no haber revelado aún sus raíces.",
						"vietnamese": "Tội lỗi của Nữ hoàng, dường như vẫn chưa lộ ra cội rễ của nó.",
						"thai": "บาปของราชินี ดูเหมือนจะยังไม่เผยรากเหง้าของมัน",
						"hindi": "रानी का पाप, अभी तक अपनी जड़ें प्रकट नहीं कर पाया था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "하찮은 것들. 너희는 그저… 숲의 먹이일 뿐.",
						"english": "Worthless beings. You are merely… the forest's prey.",
						"japanese": "くだらぬ者たち。お前たちはただ…森の餌食にすぎない。",
						"chinese": "卑微之物。你们不过是…森林的猎物罢了。",
						"french": "Choses insignifiantes. Vous n'êtes que… la proie de la forêt.",
						"spanish": "Criaturas insignificantes. Sois meramente… la presa del bosque.",
						"vietnamese": "Những kẻ hèn mọn. Ngươi chỉ là… con mồi của khu rừng mà thôi.",
						"thai": "เจ้าพวกไร้ค่า. พวกเจ้าเป็นแค่… เหยื่อของป่าเท่านั้น.",
						"hindi": "तुच्छ प्राणी। तुम बस… जंगल का शिकार हो।"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "크윽… 아직… 끝나지 않았어!",
						"english": "Ugh… It's not… over yet!",
						"japanese": "くっ…まだ…終わっていない！",
						"chinese": "呃啊…还没…结束！",
						"french": "Ugh… Ce n'est pas… encore fini !",
						"spanish": "Ugh… ¡Todavía… no ha terminado!",
						"vietnamese": "Khụ… Vẫn chưa… kết thúc đâu!",
						"thai": "อึก… ยัง… ไม่จบ!",
						"hindi": "उफ़… अभी… ख़त्म नहीं हुआ!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "다시 와라. 그 고통을… 즐겨주마.",
						"english": "Come again. I'll… enjoy that suffering.",
						"japanese": "また来い。その苦痛を…楽しんでやろう。",
						"chinese": "再来吧。我将…享受那痛苦。",
						"french": "Reviens. Je… savourerai cette souffrance.",
						"spanish": "Vuelve. Yo… disfrutaré de ese sufrimiento.",
						"vietnamese": "Hãy trở lại đi. Ta sẽ… tận hưởng nỗi đau đó.",
						"thai": "กลับมาอีก. ข้าจะ… สนุกกับความทรมานนั้น.",
						"hindi": "फिर आना। मैं… उस पीड़ा का आनंद लूंगा।"
					}
				}
			],
			"id": 15
		}
	]
} as const;
