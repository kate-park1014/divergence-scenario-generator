export const scenario_forest_reverberation_04 = {
	"scenario_id": "forest_reverberation_04",
	"order": 4,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"ela": {
			"id": "mon_24765cb2-6fc0-452e-8969-871a82349c70",
			"name": {
				"korean": "엘라",
				"english": "Ela",
				"japanese": "エラ",
				"chinese": "艾拉",
				"french": "Ela",
				"spanish": "Ela",
				"vietnamese": "Ela",
				"thai": "เอล่า",
				"hindi": "एला"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/55d3e9ee-c589-40ab-dfa4-a658bbddd400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/cfacc842-115e-4175-a7fa-3111a468ed00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"숲에서 돌아온 자들. 그들은 병들었다.",
			"병든 아버지 곁을 지키는 소녀, 엘라.",
			"숲이 준 행복, 현실의 고통. 선택의 무게는 무거웠다.",
			"환상은 유혹하고, 진실은 아프다."
		],
		"english": [
			"Those who returned from the forest. They were sick.",
			"Ella, a girl who stays by her sick father's side.",
			"The happiness the forest gave, the pain of reality. The weight of choice was heavy.",
			"Illusion tempts, truth hurts."
		],
		"japanese": [
			"森から戻った者たち。彼らは病んでいた。",
			"病気の父の傍らに立つ少女、エラ。",
			"森がくれた幸福、現実の苦痛。選択の重みは大きかった。",
			"幻想は誘惑し、真実は傷つける。"
		],
		"chinese": [
			"从森林归来的人们。他们病了。",
			"少女埃拉，守护在病重的父亲身旁。",
			"森林赐予的幸福，现实的痛苦。选择之重难以承受。",
			"幻想诱惑，真相残酷。"
		],
		"french": [
			"Ceux qui revinrent de la forêt. Ils étaient malades.",
			"Ella, une fille qui veille son père malade.",
			"Le bonheur offert par la forêt, la douleur de la réalité. Le poids du choix était lourd.",
			"L'illusion tente, la vérité blesse."
		],
		"spanish": [
			"Aquellos que regresaron del bosque. Estaban enfermos.",
			"Ella, la niña que cuida a su padre enfermo.",
			"La felicidad que el bosque dio, el dolor de la realidad. El peso de la elección era inmenso.",
			"La ilusión tienta, la verdad duele."
		],
		"vietnamese": [
			"Những người trở về từ rừng. Họ đã bệnh.",
			"Ella, cô bé bên cạnh người cha bệnh tật.",
			"Hạnh phúc rừng mang lại, nỗi đau hiện thực. Gánh nặng lựa chọn thật nặng nề.",
			"Ảo ảnh quyến rũ, sự thật đau lòng."
		],
		"thai": [
			"ผู้ที่กลับมาจากป่า พวกเขาป่วย",
			"เอลล่า เด็กสาวผู้เฝ้าข้างกายพ่อที่ป่วยหนัก",
			"ความสุขที่ป่ามอบให้ ความเจ็บปวดจากความจริง น้ำหนักของการเลือกนั้นหนักอึ้ง",
			"ภาพลวงตายั่วเย้า ความจริงทำร้ายใจ"
		],
		"hindi": [
			"जो जंगल से लौटे। वे बीमार थे。",
			"एला, एक लड़की जो अपने बीमार पिता के पास रहती है।",
			"जंगल से मिली खुशी, वास्तविकता का दर्द। चुनाव का बोझ भारी था।",
			"भ्रम लुभाता है, सच दर्द देता है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "마을은 시들었다. 숲에서 돌아온 이들의 병은 깊어졌다.",
						"english": "The village withered. The illness of those who returned from the forest deepened.",
						"japanese": "村は活気を失った。森から戻った者たちの病は深まった。",
						"chinese": "村庄凋零。从森林归来之人的病情加重了。",
						"french": "Le village s'est fané. La maladie de ceux qui sont revenus de la forêt s'est aggravée.",
						"spanish": "El pueblo languideció. La enfermedad de los que regresaron del bosque se agravó.",
						"vietnamese": "Làng tàn lụi. Bệnh tình của những người trở về từ rừng càng nặng.",
						"thai": "หมู่บ้านร่วงโรย โรคของผู้ที่กลับจากป่าลึกขึ้น",
						"hindi": "गाँव मुरझा गया। जंगल से लौटे लोगों की बीमारी और गहरी हो गई।"
					},
					"emotion": "base"
				},
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "ela",
					"duration_ms": 500
				},
				{
					"speaker": "ela",
					"type": "speech",
					"content": {
						"korean": "…아버지. 정신 차려봐요.",
						"english": "...Father. Please, wake up.",
						"japanese": "…お父さん。しっかりして。",
						"chinese": "……父亲。清醒一点。",
						"french": "...Père. Reprenez vos esprits.",
						"spanish": "...Padre. Por favor, despierte.",
						"vietnamese": "...Cha. Tỉnh dậy đi cha.",
						"thai": "...พ่อคะ ได้สติหน่อยค่ะ",
						"hindi": "...पिताजी। होश में आओ।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "엘라. 아버지 상태는…?",
						"english": "Ella. How's your father...?",
						"japanese": "エラ。お父さんの容態は…？",
						"chinese": "埃拉。父亲的状况……？",
						"french": "Ella. Comment va ton père… ?",
						"spanish": "Ella. ¿Cómo está tu padre...?",
						"vietnamese": "Ella. Tình trạng của cha cô thế nào rồi...?",
						"thai": "เอลล่า พ่อเธอเป็นยังไงบ้าง...?",
						"hindi": "एला। तुम्हारे पिता की हालत कैसी है...?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "ela",
					"emotion": "sad",
					"content": {
						"korean": "숲에 있을 때가 더 행복했다고 중얼거려요. 계속 꽃 향기를 맡는다고…",
						"english": "He keeps mumbling he was happier in the forest. Says he keeps smelling flowers...",
						"japanese": "森にいた時の方が幸せだったって呟いてるの。ずっと花の香りがするって…",
						"chinese": "他一直喃喃自语，说在森林里的时候更幸福。还说一直闻到花香……",
						"french": "Il ne cesse de murmurer qu'il était plus heureux dans la forêt. Il dit qu'il sent des fleurs...",
						"spanish": "No para de murmurar que era más feliz en el bosque. Dice que sigue oliendo a flores...",
						"vietnamese": "Cha cứ lẩm bẩm rằng cha hạnh phúc hơn khi ở trong rừng. Cứ nói ngửi thấy mùi hoa...",
						"thai": "เขายังคงพึมพำว่ามีความสุขมากกว่าตอนอยู่ในป่า และบอกว่าได้กลิ่นดอกไม้อยู่ตลอด...",
						"hindi": "वह बुदबुदाता रहता है कि वह जंगल में ज़्यादा खुश था। कहता है कि उसे फूलों की खुशबू आती रहती है..."
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "환각인가. 모두 비슷한 증상이야.",
						"english": "Hallucinations? Everyone has similar symptoms.",
						"japanese": "幻覚か。みんな同じような症状だ。",
						"chinese": "幻觉吗。大家症状都差不多。",
						"french": "Des hallucinations ? Tout le monde a des symptômes similaires.",
						"spanish": "¿Alucinaciones? Todos tienen síntomas similares.",
						"vietnamese": "Ảo giác sao. Ai cũng có triệu chứng tương tự.",
						"thai": "ภาพหลอนหรือเปล่าเนี่ย? ทุกคนมีอาการคล้ายกันเลย",
						"hindi": "मतिभ्रम है क्या। सभी में एक जैसे लक्षण हैं।"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "ela",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "숲에 있을 땐… 아버지는 항상 웃었어요.",
						"english": "When we were in the forest... Father always smiled.",
						"japanese": "森にいた時は…お父さんはいつも笑ってた。",
						"chinese": "在森林里的时候……父亲总是笑着。",
						"french": "Quand nous étions dans la forêt… Père souriait toujours.",
						"spanish": "Cuando estábamos en el bosque... Padre siempre sonreía.",
						"vietnamese": "Khi ở trong rừng... cha luôn mỉm cười.",
						"thai": "ตอนอยู่ในป่า... พ่อของฉันมักจะยิ้มเสมอ",
						"hindi": "जब हम जंगल में थे... पिताजी हमेशा मुस्कुराते थे।"
					},
					"speaker": "ela",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "하지만 지금은 병들었어.",
						"english": "But now he's sick.",
						"japanese": "しかし、今は病気です。",
						"chinese": "但现在他病了。",
						"french": "Mais maintenant, il est malade.",
						"spanish": "Pero ahora está enfermo.",
						"vietnamese": "Nhưng giờ đây, ông ấy đã bệnh rồi.",
						"thai": "แต่ตอนนี้เขาป่วยแล้ว",
						"hindi": "लेकिन अब वह बीमार है।"
					}
				},
				{
					"speaker": "ela",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "네. 여기서 고통스러워하고… 숲은 아름답지만…",
						"english": "Yes. Suffering here... the forest is beautiful, but...",
						"japanese": "はい。ここで苦しんでいて… 森は美しいけれど…",
						"chinese": "是的。在这里痛苦着… 森林很美，但是…",
						"french": "Oui. Souffrant ici... la forêt est belle, mais...",
						"spanish": "Sí. Sufriendo aquí... el bosque es hermoso, pero...",
						"vietnamese": "Vâng. Đau khổ ở đây... rừng thì đẹp, nhưng...",
						"thai": "ใช่ค่ะ ทนทุกข์ทรมานอยู่ที่นี่... ป่าสวยงามก็จริง แต่...",
						"hindi": "हाँ। यहाँ पीड़ा झेल रहा है… जंगल सुंदर है, लेकिन…"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "숲이 준 행복과 현실의 고통. 그 사이에서 괴로운 거니?",
						"english": "Are you tormented between the happiness the forest gave and the pain of reality?",
						"japanese": "森がくれた幸福と現実の苦痛。その間で苦しんでいるのかい？",
						"chinese": "你是在森林带来的幸福与现实的痛苦之间挣扎吗？",
						"french": "Es-tu tourmenté entre le bonheur que la forêt a donné et la douleur de la réalité ?",
						"spanish": "¿Te atormenta la felicidad que el bosque te dio y el dolor de la realidad?",
						"vietnamese": "Anh đang đau khổ giữa hạnh phúc mà rừng mang lại và nỗi đau của thực tại sao?",
						"thai": "เธอทรมานอยู่ระหว่างความสุขที่ป่ามอบให้กับความเจ็บปวดจากความเป็นจริงหรือ?",
						"hindi": "क्या तुम जंगल से मिली खुशी और वास्तविकता के दर्द के बीच परेशान हो?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "ela",
					"content": {
						"korean": "…어쩌면, 계속 숲에 있었다면 아버지는 행복했을지도 몰라요.",
						"english": "...Perhaps, if father had stayed in the forest, he might have been happy.",
						"japanese": "…もしかしたら、ずっと森にいたら父は幸せだったかもしれません。",
						"chinese": "…也许，如果父亲一直留在森林里，他可能会很幸福。",
						"french": "...Peut-être que si papa était resté dans la forêt, il aurait pu être heureux.",
						"spanish": "...Quizás, si papá se hubiera quedado en el bosque, podría haber sido feliz.",
						"vietnamese": "...Có lẽ, nếu cha cứ ở mãi trong rừng, ông ấy đã có thể hạnh phúc.",
						"thai": "...บางที ถ้าพ่อยังอยู่ในป่า พ่อคงจะมีความสุขก็ได้",
						"hindi": "…शायद, अगर पिताजी जंगल में ही रहते, तो वह खुश होते।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "그건 환상이야.",
						"english": "That's an illusion.",
						"japanese": "それは幻想だよ。",
						"chinese": "那是幻觉。",
						"french": "C'est une illusion.",
						"spanish": "Eso es una ilusión.",
						"vietnamese": "Đó là ảo ảnh thôi.",
						"thai": "นั่นมันภาพลวงตา",
						"hindi": "वह एक भ्रम है।"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "ela",
					"spot": [
						2,
						3
					]
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "저도 가끔, 숲의 꽃 향기가 느껴져요….",
						"english": "Sometimes, I also feel the scent of the forest's flowers...",
						"japanese": "私も時々、森の花の香りがするんです…。",
						"chinese": "我也偶尔能闻到森林里花朵的香气…。",
						"french": "Moi aussi, parfois, je sens le parfum des fleurs de la forêt...",
						"spanish": "Yo también, a veces, siento el aroma de las flores del bosque...",
						"vietnamese": "Con cũng thỉnh thoảng, ngửi thấy mùi hương hoa của rừng...",
						"thai": "บางครั้งฉันก็รู้สึกได้ถึงกลิ่นหอมของดอกไม้ในป่า...",
						"hindi": "मुझे भी कभी-कभी जंगल के फूलों की खुशबू महसूस होती है…।"
					},
					"type": "speech",
					"speaker": "ela"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "엘라…!",
						"english": "Ella...!",
						"japanese": "エラ…！",
						"chinese": "艾拉…！",
						"french": "Ella…!",
						"spanish": "¡Ella...!",
						"vietnamese": "Ella...!",
						"thai": "เอลล่า...!",
						"hindi": "एला…!"
					}
				},
				{
					"speaker": "ela",
					"type": "speech",
					"content": {
						"korean": "마을 외곽에 숲에서 가져온 식물들이 이상하게 자라고 있어요. 병든 아버지처럼…",
						"english": "Plants brought from the forest are growing strangely on the outskirts of the village. Like my sick father...",
						"japanese": "村の外れに森から持ち帰った植物が、病気の父のように奇妙に育っています…",
						"chinese": "村庄外围，从森林里带回来的植物正奇怪地生长着。就像生病的父亲一样…",
						"french": "Des plantes rapportées de la forêt poussent étrangement en périphérie du village. Comme mon père malade...",
						"spanish": "Las plantas traídas del bosque están creciendo extrañamente en las afueras del pueblo. Como mi padre enfermo...",
						"vietnamese": "Những loài cây được mang từ rừng về đang mọc một cách kỳ lạ ở rìa làng. Giống như người cha đang bệnh của con...",
						"thai": "พืชที่นำมาจากป่ากำลังเติบโตอย่างแปลกประหลาดที่ชานหมู่บ้าน เหมือนกับพ่อที่ป่วยของฉัน...",
						"hindi": "गाँव के बाहरी इलाके में जंगल से लाए गए पौधे अजीब तरह से बढ़ रहे हैं। मेरे बीमार पिताजी की तरह…"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "숲은 여전히 유혹하고 있었다. 아름다운 환상 뒤에 숨겨진 그림자처럼.",
						"english": "The forest was still tempting. Like a shadow hidden behind a beautiful illusion.",
						"japanese": "森は依然として誘惑していた。美しい幻想の裏に隠された影のように。",
						"chinese": "森林仍在诱惑着。如同隐藏在美丽幻象背后的阴影。",
						"french": "La forêt était toujours tentatrice. Comme une ombre cachée derrière une belle illusion.",
						"spanish": "El bosque seguía tentando. Como una sombra oculta tras una hermosa ilusión.",
						"vietnamese": "Rừng vẫn đang quyến rũ. Giống như một cái bóng ẩn sau ảo ảnh đẹp đẽ.",
						"thai": "ป่ายังคงเย้ายวน เหมือนเงาที่ซ่อนอยู่หลังภาพลวงตาที่สวยงาม",
						"hindi": "जंगल अभी भी लुभा रहा था। एक सुंदर भ्रम के पीछे छिपी छाया की तरह।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "선택의 무게. 우리는 무엇을 놓치고 온 걸까요?",
						"english": "The weight of choice. What did we leave behind?",
						"japanese": "選択の重み。私たちは何を置き去りにしてきたのだろう？",
						"chinese": "选择的重量。我们究竟错过了什么？",
						"french": "Le poids du choix. Qu'avons-nous laissé derrière nous ?",
						"spanish": "El peso de la elección. ¿Qué dejamos atrás?",
						"vietnamese": "Gánh nặng của sự lựa chọn. Chúng ta đã bỏ lỡ điều gì?",
						"thai": "น้ำหนักของการเลือก เราพลาดอะไรไปบ้างนะ?",
						"hindi": "चुनाव का बोझ। हमने क्या खो दिया?"
					},
					"type": "speech",
					"speaker": "ela"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "ela"
				},
				{
					"content": {
						"korean": "더 이상 모르겠어요. 뭐가 옳은 건지…",
						"english": "I don't know anymore. What's right...",
						"japanese": "もう、わかりません。何が正しいのか…",
						"chinese": "我不知道了。什么是对的…",
						"french": "Je ne sais plus. Ce qui est juste...",
						"spanish": "Ya no sé. Qué es lo correcto...",
						"vietnamese": "Tôi không biết nữa. Điều gì là đúng...",
						"thai": "ฉันไม่รู้แล้ว อะไรคือสิ่งที่ถูกต้อง...",
						"hindi": "मुझे अब और नहीं पता। क्या सही है..."
					},
					"emotion": "sad",
					"speaker": "ela",
					"type": "speech"
				},
				{
					"content": {
						"korean": "포기하지 마. 우린 진실을 찾아야 해.",
						"english": "Don't give up. We have to find the truth.",
						"japanese": "諦めるな。私たちは真実を見つけなければならない。",
						"chinese": "别放弃。我们必须找到真相。",
						"french": "N'abandonne pas. Nous devons trouver la vérité.",
						"spanish": "No te rindas. Tenemos que encontrar la verdad.",
						"vietnamese": "Đừng bỏ cuộc. Chúng ta phải tìm ra sự thật.",
						"thai": "อย่ายอมแพ้ เราต้องค้นหาความจริง",
						"hindi": "हार मत मानो। हमें सच खोजना है।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…하지만, 숲은 너무 강해요. 우리를 놓아주지 않을 거예요.",
						"english": "...But the forest is too strong. It won't let us go.",
						"japanese": "…しかし、森はあまりにも強すぎる。私たちを解放してくれないでしょう。",
						"chinese": "…但是，森林太强大了。它不会放过我们。",
						"french": "...Mais la forêt est trop forte. Elle ne nous laissera pas partir.",
						"spanish": "...Pero el bosque es demasiado fuerte. No nos dejará ir.",
						"vietnamese": "...Nhưng khu rừng quá mạnh. Nó sẽ không buông tha chúng ta.",
						"thai": "...แต่ป่าแข็งแกร่งเกินไป มันจะไม่ปล่อยเราไป",
						"hindi": "...लेकिन जंगल बहुत शक्तिशाली है। यह हमें जाने नहीं देगा।"
					},
					"type": "speech",
					"speaker": "ela"
				},
				{
					"content": {
						"korean": "이대로 돌아갈 순 없어. 숲에 남은 이들과 돌아온 이들. 모두를 위해서.",
						"english": "We can't go back like this. For those left in the forest and those who returned. For everyone.",
						"japanese": "このままでは戻れない。森に残された者たちと、戻ってきた者たち。皆のために。",
						"chinese": "不能就这样回去。为了留在森林里的人和回来的人。为了所有人。",
						"french": "Nous ne pouvons pas rentrer comme ça. Pour ceux qui sont restés dans la forêt et ceux qui sont revenus. Pour tout le monde.",
						"spanish": "No podemos volver así. Por los que se quedaron en el bosque y por los que regresaron. Por todos.",
						"vietnamese": "Chúng ta không thể quay lại như thế này. Vì những người còn ở lại trong rừng và những người đã trở về. Vì tất cả mọi người.",
						"thai": "เรากลับไปแบบนี้ไม่ได้ เพื่อผู้ที่อยู่ในป่าและผู้ที่กลับมา เพื่อทุกคน",
						"hindi": "हम ऐसे वापस नहीं जा सकते। जंगल में बचे हुए लोगों और वापस आए हुए लोगों के लिए। सभी के लिए।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "…기억해라. 이 숲의 진정한 지배자는 따로 있다.",
						"english": "...Remember. There is another true ruler of this forest.",
						"japanese": "…覚えておけ。この森の真の支配者は別にいる。",
						"chinese": "…记住。这片森林真正的统治者另有其人。",
						"french": "...Souvenez-vous. Il y a un autre véritable souverain de cette forêt.",
						"spanish": "...Recuerda. Hay otro verdadero gobernante de este bosque.",
						"vietnamese": "...Hãy nhớ. Có một kẻ thống trị thực sự khác của khu rừng này.",
						"thai": "...จำไว้ ผู้ปกครองที่แท้จริงของป่านี้มีอีกคน",
						"hindi": "...याद रखना। इस जंगल का असली शासक कोई और है।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "이게 끝이 아니라는 거야?",
						"english": "This isn't the end?",
						"japanese": "これが終わりじゃないってことか？",
						"chinese": "这不是结束吗？",
						"french": "Ce n'est pas la fin ?",
						"spanish": "¿Esto no es el final?",
						"vietnamese": "Đây không phải là kết thúc sao?",
						"thai": "นี่ไม่ใช่จุดจบหรือ?",
						"hindi": "यह अंत नहीं है?"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "정체 모를 적은 사라졌지만, 숲의 깊은 곳에서는 또 다른 존재가 꿈틀거리고 있었다.",
						"english": "The mysterious foe vanished, but deep within the forest, another presence stirred.",
						"japanese": "正体不明の敵は消え去ったが、森の奥深くでは、別の存在が蠢いていた。",
						"chinese": "身份不明的敌人消失了，但在森林深处，另一个存在正在蠕动。",
						"french": "L'ennemi inconnu a disparu, mais au plus profond de la forêt, une autre présence s'agitait.",
						"spanish": "El enemigo desconocido desapareció, pero en lo profundo del bosque, otra presencia se agitaba.",
						"vietnamese": "Kẻ thù bí ẩn đã biến mất, nhưng sâu thẳm trong rừng, một sự hiện diện khác đang cựa quậy.",
						"thai": "ศัตรูลึกลับหายไปแล้ว แต่ลึกเข้าไปในป่า มีอีกหนึ่งสิ่งมีชีวิตกำลังเคลื่อนไหว",
						"hindi": "अज्ञात शत्रु गायब हो गया, लेकिन जंगल की गहराई में, एक और उपस्थिति हिल रही थी।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "환상의 숲, 그 이면에 숨겨진 플로라의 진짜 의도는 무엇인가.",
						"english": "The Forest of Illusion. What is Flora's true intent hidden behind it?",
						"japanese": "幻想の森。その裏に隠されたフローラの本当の意図とは何なのか。",
						"chinese": "幻象森林。隐藏在其背后的弗洛拉的真实意图是什么？",
						"french": "La Forêt des Illusions. Quelle est la véritable intention de Flora cachée derrière elle ?",
						"spanish": "El Bosque de las Ilusiones. ¿Cuál es la verdadera intención de Flora oculta tras él?",
						"vietnamese": "Rừng Ảo Ảnh. Ý định thực sự của Flora ẩn giấu đằng sau đó là gì?",
						"thai": "ป่าแห่งภาพลวงตา เจตนาที่แท้จริงของฟลอร่าที่ซ่อนอยู่เบื้องหลังคืออะไร?",
						"hindi": "भ्रम का जंगल। इसके पीछे छिपी फ्लोरा की असली मंशा क्या है?"
					},
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "숲의 환상이 모든 것을 집어삼켰다.",
						"english": "The forest's illusion swallowed everything.",
						"japanese": "森の幻想がすべてを飲み込んだ。",
						"chinese": "森林的幻象吞噬了一切。",
						"french": "L'illusion de la forêt a tout englouti.",
						"spanish": "La ilusión del bosque lo devoró todo.",
						"vietnamese": "Ảo ảnh của khu rừng đã nuốt chửng mọi thứ.",
						"thai": "ภาพลวงตาของป่าได้กลืนกินทุกสิ่ง",
						"hindi": "जंगल के भ्रम ने सब कुछ निगल लिया।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "포기해라. 너희의 고통은 끝없이 이어질 것이다.",
						"english": "Give up. Your suffering will continue endlessly.",
						"japanese": "あきらめろ。お前たちの苦痛は永遠に続くだろう。",
						"chinese": "放弃吧。你们的痛苦将无休止地持续下去。",
						"french": "Abandonnez. Vos souffrances continueront sans fin.",
						"spanish": "Ríndete. Vuestro sufrimiento continuará sin fin.",
						"vietnamese": "Hãy bỏ cuộc. Nỗi đau của các ngươi sẽ tiếp diễn không ngừng.",
						"thai": "ยอมแพ้ซะ ความเจ็บปวดของพวกเจ้าจะดำเนินต่อไปอย่างไม่มีที่สิ้นสุด",
						"hindi": "हार मान लो। तुम्हारा कष्ट अनंत काल तक जारी रहेगा।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…아직 끝나지 않았어. 우리는 돌아갈 수 없어!",
						"english": "...It's not over yet. We can't go back!",
						"japanese": "…まだ終わってない。私たちは戻れない！",
						"chinese": "……还没有结束。我们不能回去！",
						"french": "...Ce n'est pas encore fini. Nous ne pouvons pas revenir en arrière !",
						"spanish": "...Aún no ha terminado. ¡No podemos volver atrás!",
						"vietnamese": "...Vẫn chưa kết thúc. Chúng ta không thể quay lại!",
						"thai": "...ยังไม่จบ เรากลับไปไม่ได้แล้ว!",
						"hindi": "...अभी खत्म नहीं हुआ है। हम वापस नहीं जा सकते!"
					}
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "어둠 속에서 거대한 그림자가 나타났다.",
						"english": "A giant shadow appeared from the darkness.",
						"japanese": "闇の中から巨大な影が現れた。",
						"chinese": "黑暗中，一个巨大的影子出现了。",
						"french": "Une ombre géante apparut des ténèbres.",
						"spanish": "Una sombra gigante apareció de la oscuridad.",
						"vietnamese": "Một bóng đen khổng lồ xuất hiện từ bóng tối.",
						"thai": "เงาขนาดใหญ่ปรากฏขึ้นจากความมืด",
						"hindi": "अंधेरे से एक विशाल छाया प्रकट हुई।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "…어리석은 인간들. 너희는 그저 고통을 선택했을 뿐.",
						"english": "...Foolish humans. You merely chose pain.",
						"japanese": "…愚かな人間どもめ。お前たちはただ苦痛を選んだだけだ。",
						"chinese": "…愚蠢的人类。你们只是选择了痛苦。",
						"french": "...Humains stupides. Vous n'avez fait que choisir la douleur.",
						"spanish": "...Humanos tontos. Simplemente elegisteis el dolor.",
						"vietnamese": "...Những con người ngu ngốc. Các ngươi chỉ đơn thuần chọn nỗi đau.",
						"thai": "...มนุษย์ที่โง่เขลา เจ้าเพียงเลือกความเจ็บปวด",
						"hindi": "...मूर्ख इंसानो। तुमने बस दर्द चुना है।"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "우리는 진실을 선택한 거야!",
						"english": "We chose the truth!",
						"japanese": "私たちは真実を選んだんだ！",
						"chinese": "我们选择了真相！",
						"french": "Nous avons choisi la vérité !",
						"spanish": "¡Nosotros elegimos la verdad!",
						"vietnamese": "Chúng tôi đã chọn sự thật!",
						"thai": "เราเลือกความจริง!",
						"hindi": "हमने सच चुना है!"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "진실? 너희는 영원히 이 숲의 환상에 사로잡힐 것이다.",
						"english": "Truth? You will be forever trapped in this forest's illusion.",
						"japanese": "真実？お前たちは永遠にこの森の幻想に囚われるだろう。",
						"chinese": "真相？你们将永远被困在这片森林的幻象中。",
						"french": "La vérité ? Vous serez éternellement piégés dans l'illusion de cette forêt.",
						"spanish": "¿Verdad? Estaréis atrapados para siempre en la ilusión de este bosque.",
						"vietnamese": "Sự thật? Các ngươi sẽ mãi mãi bị mắc kẹt trong ảo ảnh của khu rừng này.",
						"thai": "ความจริง? เจ้าจะติดอยู่ในภาพลวงตาของป่านี้ตลอดไป",
						"hindi": "सच? तुम हमेशा के लिए इस जंगल के भ्रम में फंस जाओगे।"
					},
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"id": 15
		}
	]
} as const;
