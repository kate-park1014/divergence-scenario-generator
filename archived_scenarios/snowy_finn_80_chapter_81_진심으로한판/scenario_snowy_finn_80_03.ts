export const scenario_snowy_finn_80_03 = {
	"scenario_id": "snowy_finn_80_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"frost": {
			"id": "mon_942bca3b-33e7-4b14-98e5-ec1e2dc78d5b",
			"name": {
				"korean": "서리",
				"english": "Frost",
				"japanese": "霜",
				"chinese": "霜",
				"french": "Givre",
				"spanish": "Escarcha",
				"vietnamese": "Băng Giá",
				"thai": "น้ำแข็ง",
				"hindi": "पाला"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0a8c2f92-0cf9-413d-0b33-8e0204caae00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/df60b327-4cc2-435b-67e0-cffb4c319900/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"혹독한 한기가 비탈을 타고 올랐다.",
			"왕은 여전히 옥좌에 앉아 있었지만,",
			"곁을 둥글게 에워싼 작은 무리는,",
			"그가 더 이상 혼자가 아니라는 걸 보여줬다.",
			"왕은 마지막 한 판을 원하고 있었다."
		],
		"english": [
			"A biting chill climbed the slope.",
			"The king still sat upon the throne,",
			"but the small group gathered around him,",
			"showed he was no longer alone.",
			"The king desired one last game."
		],
		"japanese": [
			"厳しい寒気が坂を上った。",
			"王は依然として玉座に座っていたが、",
			"彼の周りを囲む小さな集団は、",
			"彼がもはや一人ではないことを示していた。",
			"王は最後の一戦を望んでいた。"
		],
		"chinese": [
			"凛冽的寒气爬上山坡。",
			"国王依然坐在王座上，",
			"但围绕在他身边的小群人，",
			"表明他不再孤单。",
			"国王想要最后一局。"
		],
		"french": [
			"Un froid mordant gravissait la pente.",
			"Le roi était toujours assis sur son trône,",
			"mais le petit groupe réuni autour de lui,",
			"montrait qu'il n'était plus seul.",
			"Le roi désirait une dernière partie."
		],
		"spanish": [
			"Un frío gélido subía por la ladera.",
			"El rey seguía sentado en el trono,",
			"pero el pequeño grupo reunido a su alrededor,",
			"demostraba que ya no estaba solo.",
			"El rey deseaba una última partida."
		],
		"vietnamese": [
			"Cái lạnh cắt da cắt thịt leo lên sườn dốc.",
			"Vua vẫn ngự trên ngai vàng,",
			"nhưng nhóm nhỏ tụ tập quanh ông,",
			"cho thấy ông không còn cô đơn nữa.",
			"Vua muốn một ván cuối cùng."
		],
		"thai": [
			"ความหนาวเหน็บกัดกินขึ้นสู่เนินเขา.",
			"กษัตริย์ยังคงประทับบนบัลลังก์,",
			"แต่กลุ่มเล็กๆ ที่รายล้อมเขา,",
			"แสดงให้เห็นว่าเขาไม่ได้อยู่คนเดียวอีกต่อไป.",
			"กษัตริย์ทรงปรารถนาเกมสุดท้าย."
		],
		"hindi": [
			"कड़ाके की ठंड ढलान पर चढ़ गई।",
			"राजा अभी भी सिंहासन पर बैठा था,",
			"लेकिन उसके चारों ओर इकट्ठी छोटी सी मंडली,",
			"दिखाती थी कि वह अब अकेला नहीं था।",
			"राजा अंतिम बाजी चाहता था।"
		]
	},
	"rooms": [
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "설산의 거친 바람이 탐험대의 옷깃을 파고들었다.",
						"english": "The harsh winds of the snow mountain pierced the expedition's collars.",
						"japanese": "雪山の荒々しい風が探検隊の襟元に食い込んだ。",
						"chinese": "雪山的凛冽寒风刺骨地侵入探险队的衣领。",
						"french": "Les vents violents de la montagne enneigée transperçaient les cols de l'expédition.",
						"spanish": "Los vientos gélidos de la montaña nevada penetraban los cuellos de la expedición.",
						"vietnamese": "Gió khắc nghiệt của núi tuyết xuyên qua cổ áo của đoàn thám hiểm.",
						"thai": "ลมพายุร้ายแรงจากภูเขาหิมะกัดกินปกเสื้อของคณะสำรวจ.",
						"hindi": "बर्फीले पहाड़ की तेज़ हवाओं ने अभियान दल के कॉलर छेद दिए।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "frost",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"speaker": "frost",
					"content": {
						"korean": "…왕의 곁에 작은 온기들이 모여 있군.",
						"english": "...Small warm bodies are gathered by the king's side.",
						"japanese": "…王の傍らに小さな温もりたちが集まっているな。",
						"chinese": "……小小的温暖聚集在国王身边。",
						"french": "...De petites sources de chaleur sont rassemblées aux côtés du roi.",
						"spanish": "...Pequeños puntos de calor se reúnen junto al rey.",
						"vietnamese": "...Những đốm ấm áp nhỏ đang tụ tập bên cạnh nhà vua.",
						"thai": "...ความอบอุ่นเล็กๆ รวมตัวกันอยู่ข้างกายกษัตริย์.",
						"hindi": "…राजा के पास छोटे-छोटे गर्म शरीर जमा हो गए हैं।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "펭귄들이 왕을 따르는 건가?",
						"english": "Are penguins following the king?",
						"japanese": "ペンギンたちが王に従っているのか？",
						"chinese": "企鹅们在追随国王吗？",
						"french": "Les pingouins suivent-ils le roi ?",
						"spanish": "¿Están los pingüinos siguiendo al rey?",
						"vietnamese": "Chim cánh cụt đang đi theo nhà vua sao?",
						"thai": "เหล่านกเพนกวินกำลังติดตามกษัตริย์หรือ?",
						"hindi": "क्या पेंग्विन राजा का अनुसरण कर रहे हैं?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "frost",
					"content": {
						"korean": "추위를 견디는 자들끼리의 연대… 익숙한 풍경이다.",
						"english": "A solidarity among those who endure the cold... A familiar sight.",
						"japanese": "寒さに耐える者たちの連帯…見慣れた光景だ。",
						"chinese": "忍受寒冷者之间的团结……熟悉的景象。",
						"french": "Une solidarité entre ceux qui supportent le froid... Un spectacle familier.",
						"spanish": "Una solidaridad entre quienes soportan el frío... Una escena familiar.",
						"vietnamese": "Sự đoàn kết giữa những người chịu đựng cái lạnh... Một cảnh tượng quen thuộc.",
						"thai": "ความสามัคคีในหมู่ผู้ทนทานความหนาวเย็น... ช่างเป็นภาพที่คุ้นเคย.",
						"hindi": "ठंड सहने वालों के बीच एकजुटता... एक परिचित दृश्य।"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "흐음… 짐을 보러 온 자들인가.",
						"english": "Hmm... Are these the ones who came to see me?",
						"japanese": "ふむ…余に会いに来た者たちか。",
						"chinese": "嗯……是来见我的人吗？",
						"french": "Hmm... Sont-ce ceux qui sont venus me voir ?",
						"spanish": "Hmm... ¿Son estos los que vinieron a verme?",
						"vietnamese": "Hừm... Đây có phải là những kẻ đến gặp ta không?",
						"thai": "หืม... เหล่านี้คือผู้ที่มาหาข้ารึเปล่า?",
						"hindi": "ह्म्म्म... क्या ये वे हैं जो मुझसे मिलने आए हैं?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "우리는 당신의 진실을 알고 싶다.",
						"english": "We want to know your truth.",
						"japanese": "我々はあなたの真実を知りたい。",
						"chinese": "我们想知道你的真相。",
						"french": "Nous voulons connaître votre vérité.",
						"spanish": "Queremos saber tu verdad.",
						"vietnamese": "Chúng tôi muốn biết sự thật của bạn.",
						"thai": "เราอยากรู้ความจริงของคุณ",
						"hindi": "हम आपकी सच्चाई जानना चाहते हैं।"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…혼자가 아닌데도, 더 큰 한 판을 바라는군.",
						"english": "...Even not alone, you crave a bigger game.",
						"japanese": "…一人ではないのに、もっと大きな一戦を望むか。",
						"chinese": "…即使不孤单，你也渴望一场更大的对决。",
						"french": "…Même sans être seul, tu désires un enjeu plus grand.",
						"spanish": "...Aunque no estés solo, anhelas un juego mayor.",
						"vietnamese": "...Dù không đơn độc, ngươi vẫn khao khát một cuộc chiến lớn hơn.",
						"thai": "...แม้ไม่ได้อยู่คนเดียว เจ้าก็ยังต้องการเกมที่ใหญ่กว่า",
						"hindi": "...अकेले न होते हुए भी, तुम एक बड़े दाँव की लालसा रखते हो।"
					},
					"speaker": "frost",
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "frost",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"type": "direction"
				},
				{
					"speaker": "frost",
					"content": {
						"korean": "이 혹독한 추위 속에서… 너도 나도 홀로 버텨왔지.",
						"english": "In this harsh cold... both you and I have endured alone.",
						"japanese": "この過酷な寒さの中… お前も私も、一人で耐え抜いてきた。",
						"chinese": "在这严酷的寒冷中… 你我皆独自熬过。",
						"french": "Dans ce froid rigoureux... toi et moi avons enduré seuls.",
						"spanish": "En este frío crudo... tú y yo hemos soportado solos.",
						"vietnamese": "Giữa cái lạnh khắc nghiệt này... ngươi và ta đều đã đơn độc chịu đựng.",
						"thai": "ในความหนาวเหน็บนี้... ทั้งเจ้าและข้าต่างก็อดทนมาโดยลำพัง",
						"hindi": "इस कठोर ठंड में... तुम और मैं, दोनों ने अकेले ही सहा है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…짐은, 너희와 함께 서고 싶었다.",
						"english": "...I, the King, wished to stand with you all.",
						"japanese": "…余は、そなたたちと共に立ちたかった。",
						"chinese": "…我，本愿与尔等并肩。",
						"french": "...Moi, le Roi, je voulais me tenir à vos côtés.",
						"spanish": "...Yo, el Rey, deseaba estar con vosotros.",
						"vietnamese": "...Trẫm, đã muốn sát cánh cùng các ngươi.",
						"thai": "...เรา (กษัตริย์) ปรารถนาที่จะยืนเคียงข้างพวกเจ้า",
						"hindi": "...मैं, राजा, तुम्हारे साथ खड़ा होना चाहता था।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "왕이… 우리에게?",
						"english": "The King... to us?",
						"japanese": "王が… 我らに？",
						"chinese": "国王… 对我们？",
						"french": "Le Roi... à nous ?",
						"spanish": "¿El Rey... a nosotros?",
						"vietnamese": "Nhà vua... với chúng ta ư?",
						"thai": "ราชา... กับพวกเราหรือ?",
						"hindi": "राजा... हमसे?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "frost",
					"content": {
						"korean": "진심으로 마주할 기회는, 흔치 않아.",
						"english": "A chance to truly face one another is rare.",
						"japanese": "心から向き合う機会は、稀だ。",
						"chinese": "真心相待的机会，并不多见。",
						"french": "L'occasion de se faire face sincèrement est rare.",
						"spanish": "Una oportunidad para enfrentarse de verdad es poco común.",
						"vietnamese": "Cơ hội để đối mặt thật lòng, không hề phổ biến.",
						"thai": "โอกาสที่จะเผชิญหน้ากันอย่างจริงใจนั้นหายาก",
						"hindi": "दिल से सामना करने का मौका, कम ही मिलता है।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "frost",
					"content": {
						"korean": "나란히 서는 건, 두려운 일이 아니다.",
						"english": "Standing side by side is not something to fear.",
						"japanese": "並び立つことは、恐れることではない。",
						"chinese": "并肩而立，并非可惧之事。",
						"french": "Se tenir côte à côte n'est pas une chose à craindre.",
						"spanish": "Estar uno al lado del otro no es algo a temer.",
						"vietnamese": "Sát cánh bên nhau, không phải là điều đáng sợ.",
						"thai": "การยืนเคียงข้างกันไม่ใช่เรื่องน่ากลัว",
						"hindi": "कंधे से कंधा मिलाकर खड़ा होना, डरने की बात नहीं है।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "…한 판, 어떤가. 진심으로.",
						"english": "...How about one more round? Truly.",
						"japanese": "…一戦、どうだ。本気で。",
						"chinese": "...一场对决，如何？真心实意。",
						"french": "...Un affrontement, qu'en dites-vous ? Sincèrement.",
						"spanish": "...¿Qué tal una ronda más? De verdad.",
						"vietnamese": "...Một trận nữa, thế nào? Thật lòng.",
						"thai": "...อีกสักยกเป็นไง? ด้วยใจจริง",
						"hindi": "...एक और दाँव कैसा रहेगा? सच में।"
					}
				}
			]
		}
	]
} as const;
