export const scenario_forest_viscidia_43_01 = {
	"scenario_id": "forest_viscidia_43_01",
	"order": 1,
	"act": "intro",
	"theme": "forest",
	"actors": {
		"fern": {
			"id": "mon_279a32a0-8ec1-4b5b-8179-32df46fdc664",
			"name": {
				"korean": "페른",
				"english": "Fern",
				"japanese": "フェルン",
				"chinese": "费恩",
				"french": "Fern",
				"spanish": "Fern",
				"vietnamese": "Fern",
				"thai": "เฟิร์น",
				"hindi": "फर्न"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/19f9763e-413a-485e-787a-9bbfd8208700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/563627d4-0b7c-4865-39d4-1d0a97363c00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "숲의 입구. 맑은 공기가 폐부 깊숙이 스며들었다.",
						"english": "Forest entrance. Clear air permeated deep into my lungs.",
						"japanese": "森の入り口。澄んだ空気が肺の奥深くまで染み渡る。",
						"chinese": "森林入口。清新的空气深入肺腑。",
						"french": "Entrée de la forêt. L'air pur pénétrait profondément mes poumons.",
						"spanish": "Entrada al bosque. El aire puro se filtraba profundamente en mis pulmones.",
						"vietnamese": "Lối vào rừng. Không khí trong lành thấm sâu vào phổi.",
						"thai": "ทางเข้าป่า อากาศบริสุทธิ์ซึมลึกเข้าสู่ปอด",
						"hindi": "वन का प्रवेश द्वार। स्वच्छ वायु फेफड़ों में गहराई तक समा गई।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "와, 진짜 아름답다. 실종 사건이 일어난 곳이라고는 믿기지 않아.",
						"english": "Wow, it's truly beautiful. Hard to believe this is where the disappearances occurred.",
						"japanese": "うわあ、本当に美しい。失踪事件が起こった場所だなんて信じられない。",
						"chinese": "哇，真美。难以置信这里是失踪事件发生的地方。",
						"french": "Waouh, c'est vraiment magnifique. Difficile de croire que c'est ici que les disparitions ont eu lieu.",
						"spanish": "Vaya, es realmente hermoso. Cuesta creer que este sea el lugar donde ocurrieron las desapariciones.",
						"vietnamese": "Oa, thật đẹp. Khó tin đây là nơi xảy ra các vụ mất tích.",
						"thai": "ว้าว สวยงามจริงๆ ไม่น่าเชื่อเลยว่านี่คือที่เกิดเหตุคนหาย",
						"hindi": "वाह, यह सचमुच बहुत सुंदर है। विश्वास नहीं होता कि यहीं पर गुमशुदगी की घटनाएँ हुईं।"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "그러나 발밑의 강물은 묘하게 붉은빛을 띠고 있었다. 물 위에는 기형 물고기들이 힘없이 떠다녔다.",
						"english": "Yet, the river beneath my feet had a strange reddish hue. Deformed fish floated lifelessly on the water.",
						"japanese": "しかし、足元の川は奇妙な赤みを帯びていた。水面には奇形魚が無力に漂っている。",
						"chinese": "然而，脚下的河水却泛着诡异的红光。畸形的鱼无力地漂浮在水面上。",
						"french": "Cependant, la rivière sous mes pieds avait une étrange teinte rougeâtre. Des poissons difformes flottaient sans vie à la surface.",
						"spanish": "Sin embargo, el río bajo mis pies tenía un extraño tono rojizo. Peces deformes flotaban sin vida en el agua.",
						"vietnamese": "Tuy nhiên, dòng sông dưới chân tôi lại mang một sắc đỏ kỳ lạ. Những con cá dị dạng trôi dạt vô lực trên mặt nước.",
						"thai": "ทว่าแม่น้ำใต้เท้ากลับมีสีแดงเรื่อประหลาด ปลาพิการลอยอย่างไร้เรี่ยวแรงเหนือน้ำ",
						"hindi": "फिर भी, मेरे पैरों के नीचे की नदी का रंग अजीब लाल था। विकृत मछलियाँ बेजान होकर पानी पर तैर रही थीं।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…이건 뭐지?",
						"english": "...What is this?",
						"japanese": "…これは何だ？",
						"chinese": "……这是什么？",
						"french": "...Qu'est-ce que c'est ?",
						"spanish": "...¿Qué es esto?",
						"vietnamese": "...Cái gì đây?",
						"thai": "...นี่มันอะไรกัน?",
						"hindi": "...यह क्या है?"
					},
					"emotion": "sad"
				},
				{
					"action": "enter",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"speaker": "fern",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "숲은 늘 아름다워요. 잠시 길을 잃었을 뿐이에요.",
						"english": "The forest is always beautiful. It just lost its way for a moment.",
						"japanese": "森はいつも美しいです。少し道に迷っただけですよ。",
						"chinese": "森林总是美丽的。它只是暂时迷失了方向。",
						"french": "La forêt est toujours belle. Elle s'est juste égarée un instant.",
						"spanish": "El bosque siempre es hermoso. Solo se desorientó por un momento.",
						"vietnamese": "Rừng luôn đẹp đẽ. Chỉ là nó tạm thời lạc lối thôi.",
						"thai": "ป่าไม้สวยงามเสมอค่ะ แค่หลงทางไปชั่วขณะเท่านั้นเอง",
						"hindi": "वन सदा सुंदर रहता है। यह बस पल भर के लिए भटक गया था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "fern"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "하지만 이 강물은…",
						"english": "But this river...",
						"japanese": "しかし、この川は…",
						"chinese": "可是这条河…",
						"french": "Mais cette rivière...",
						"spanish": "Pero este río...",
						"vietnamese": "Nhưng dòng sông này...",
						"thai": "แต่แม่น้ำนี้...",
						"hindi": "लेकिन यह नदी..."
					},
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "fern",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"content": {
						"korean": "자연은 위대해요. 스스로 치유할 거예요.",
						"english": "Nature is great. It will heal itself.",
						"japanese": "自然は偉大です。自ら癒すでしょう。",
						"chinese": "大自然是伟大的。它会自我治愈的。",
						"french": "La nature est grande. Elle se guérira d'elle-même.",
						"spanish": "La naturaleza es grandiosa. Se curará sola.",
						"vietnamese": "Thiên nhiên thật vĩ đại. Nó sẽ tự chữa lành.",
						"thai": "ธรรมชาติยิ่งใหญ่เสมอ มันจะเยียวยาตัวเอง",
						"hindi": "प्रकृति महान है। यह खुद को ठीक कर लेगी।"
					},
					"speaker": "fern",
					"type": "speech"
				},
				{
					"content": {
						"korean": "저기, 저건 뭐야? 나무에 이상한 문양이 새겨져 있어.",
						"english": "Hey, what's that? There are strange patterns carved on the tree.",
						"japanese": "ねえ、あれは何？木に変な模様が刻まれてる。",
						"chinese": "嘿，那是什么？树上刻着奇怪的图案。",
						"french": "Hé, qu'est-ce que c'est ? Il y a d'étranges motifs gravés sur l'arbre.",
						"spanish": "Oye, ¿qué es eso? Hay extraños patrones grabados en el árbol.",
						"vietnamese": "Này, cái gì kia? Có những hoa văn kỳ lạ được khắc trên cây.",
						"thai": "เฮ้ นั่นอะไรน่ะ? มีลวดลายแปลกๆ แกะสลักอยู่บนต้นไม้",
						"hindi": "अरे, वो क्या है? पेड़ पर अजीबोगरीब पैटर्न खुदे हुए हैं।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "고대 문명의 흔적처럼 보이는 기이한 조각상들이 나무와 뒤섞여 자라고 있었다.",
						"english": "Strange statues, appearing to be remnants of an ancient civilization, were growing intertwined with the trees.",
						"japanese": "古代文明の痕跡のような奇妙な彫像が、木々と絡み合って生えていた。",
						"chinese": "看起来像是古代文明遗迹的奇异雕像，与树木交织在一起生长。",
						"french": "D'étranges statues, semblant être les vestiges d'une ancienne civilisation, poussaient entrelacées avec les arbres.",
						"spanish": "Extrañas estatuas, que parecían restos de una civilización antigua, crecían entrelazadas con los árboles.",
						"vietnamese": "Những bức tượng kỳ lạ, dường như là tàn tích của một nền văn minh cổ đại, mọc đan xen với cây cối.",
						"thai": "รูปปั้นแปลกประหลาดที่ดูเหมือนเป็นซากอารยธรรมโบราณกำลังเติบโตพันกันกับต้นไม้",
						"hindi": "अजीबोगरीब मूर्तियां, जो प्राचीन सभ्यता के अवशेष लगती थीं, पेड़ों के साथ गुंथी हुई उग रही थीं।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "숲의 생명력은 끊임없이 변화해요. 그저 오래된 흔적일 뿐…",
						"english": "The forest's vitality changes constantly. It's just old traces...",
						"japanese": "森の生命力は絶えず変化します。ただの古い痕跡ですよ…",
						"chinese": "森林的生命力不断变化。那只是些古老的痕迹…",
						"french": "La vitalité de la forêt change constamment. Ce ne sont que de vieilles traces...",
						"spanish": "La vitalidad del bosque cambia constantemente. Son solo viejos rastros...",
						"vietnamese": "Sức sống của rừng luôn thay đổi. Chỉ là những dấu vết cũ thôi...",
						"thai": "พลังชีวิตของป่าเปลี่ยนแปลงอยู่เสมอ มันก็แค่ร่องรอยเก่าๆ...",
						"hindi": "जंगल की जीवन शक्ति लगातार बदलती रहती है। यह बस पुराने निशान हैं..."
					},
					"type": "speech",
					"speaker": "fern"
				},
				{
					"content": {
						"korean": "변화라고 하기엔 좀 섬뜩한데.",
						"english": "For a change, it's a bit unsettling.",
						"japanese": "変化というには、ちょっと不気味だね。",
						"chinese": "要说是变化，这有点令人毛骨悚然。",
						"french": "Pour un changement, c'est un peu effrayant.",
						"spanish": "Para ser un cambio, es un poco espeluznante.",
						"vietnamese": "Nếu nói là thay đổi thì hơi rùng rợn.",
						"thai": "จะบอกว่าเป็นการเปลี่ยนแปลงก็ออกจะน่าขนลุกไปหน่อย",
						"hindi": "बदलाव कहने के लिए, यह थोड़ा डरावना है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"action": "enter",
					"speaker": "fern",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "숲의 깊은 곳으로 들어갈수록, 달콤하면서도 역겨운 냄새가 코를 찔렀다.",
						"english": "The deeper we went into the forest, a sweet yet repulsive smell assailed our noses.",
						"japanese": "森の奥深くへ入るほど、甘くも吐き気を催すような匂いが鼻を突いた。",
						"chinese": "越往森林深处走，一股甜腻又令人作呕的气味扑鼻而来。",
						"french": "Plus nous pénétrions dans les profondeurs de la forêt, plus une odeur douceâtre mais répugnante nous piquait le nez.",
						"spanish": "Cuanto más nos adentrábamos en el bosque, un olor dulce pero repugnante nos asaltaba la nariz.",
						"vietnamese": "Càng đi sâu vào rừng, một mùi hương vừa ngọt ngào vừa kinh tởm xộc thẳng vào mũi.",
						"thai": "ยิ่งเข้าสู่ส่วนลึกของป่า กลิ่นหวานปนเหม็นก็ยิ่งโชยมาเข้าจมูก",
						"hindi": "जैसे-जैसे हम जंगल में गहराई तक जाते गए, एक मीठी लेकिन घृणित गंध हमारी नाक में चुभने लगी।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "이 냄새… 머리가 어지러워.",
						"english": "This smell... my head feels dizzy.",
						"japanese": "この匂い… 頭がくらくらする。",
						"chinese": "这气味… 我头晕。",
						"french": "Cette odeur... ma tête tourne.",
						"spanish": "Este olor... me siento mareado.",
						"vietnamese": "Mùi này… đầu tôi choáng váng.",
						"thai": "กลิ่นนี้... ฉันรู้สึกเวียนหัว",
						"hindi": "यह गंध... मेरा सिर चकरा रहा है।"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "숲의 숨결이에요. 너무 깊이 들어오지 마세요.",
						"english": "It's the forest's breath. Don't come too deep.",
						"japanese": "森の息吹です。あまり深入りしないでください。",
						"chinese": "这是森林的气息。别走得太深。",
						"french": "C'est le souffle de la forêt. Ne vous aventurez pas trop profondément.",
						"spanish": "Es el aliento del bosque. No se adentren demasiado.",
						"vietnamese": "Đó là hơi thở của rừng. Đừng đi quá sâu.",
						"thai": "มันคือลมหายใจของป่า อย่าเข้ามาลึกเกินไป",
						"hindi": "यह जंगल की साँस है। ज़्यादा अंदर मत आओ।"
					},
					"speaker": "fern",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "뭔가 숨기고 있는 것 같은데, 페른.",
						"english": "It seems like you're hiding something, Fern.",
						"japanese": "何か隠してるみたいだね、フェルン。",
						"chinese": "你好像在藏着什么，费恩。",
						"french": "On dirait que tu caches quelque chose, Fern.",
						"spanish": "Parece que estás escondiendo algo, Fern.",
						"vietnamese": "Có vẻ như cậu đang giấu giếm điều gì đó, Fern.",
						"thai": "ดูเหมือนนายกำลังซ่อนอะไรบางอย่างอยู่ เฟิร์น",
						"hindi": "लगता है तुम कुछ छिपा रहे हो, फर्न।"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "fern",
					"action": "enter",
					"spot": [
						3,
						3
					]
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "더 이상은 안 돼요. 돌아가세요. 숲은…",
						"english": "No further. Turn back. The forest...",
						"japanese": "これ以上はダメだ。戻りなさい。森は…",
						"chinese": "不能再深入了。回去吧。森林是…",
						"french": "Pas plus loin. Rebroussez chemin. La forêt...",
						"spanish": "No más. Vuelve. El bosque...",
						"vietnamese": "Không được nữa đâu. Hãy quay lại. Rừng rậm...",
						"thai": "ไม่ไปไกลกว่านี้แล้ว กลับไปซะ ป่ามัน...",
						"hindi": "और नहीं। लौट जाओ। जंगल..."
					},
					"speaker": "fern",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "우리는 진실을 알아야 해. 무슨 일이 일어나고 있는지.",
						"english": "We must know the truth. What's happening.",
						"japanese": "私たちは真実を知る必要がある。何が起きているのかを。",
						"chinese": "我们必须知道真相。这里发生了什么。",
						"french": "Nous devons savoir la vérité. Ce qu'il se passe.",
						"spanish": "Debemos saber la verdad. Lo que está pasando.",
						"vietnamese": "Chúng ta phải biết sự thật. Chuyện gì đang xảy ra.",
						"thai": "เราต้องรู้ความจริง ว่าเกิดอะไรขึ้น",
						"hindi": "हमें सच्चाई जाननी होगी। क्या हो रहा है।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "fern",
					"content": {
						"korean": "진실은 때로… 마주하기 힘든 법이에요.",
						"english": "The truth can sometimes be... hard to face.",
						"japanese": "真実は時に… 受け入れがたいものだ。",
						"chinese": "真相有时… 难以面对。",
						"french": "La vérité est parfois... difficile à affronter.",
						"spanish": "La verdad a veces... es difícil de afrontar.",
						"vietnamese": "Sự thật đôi khi... rất khó đối mặt.",
						"thai": "ความจริงบางครั้ง... ก็ยากที่จะเผชิญหน้า",
						"hindi": "सच कभी-कभी... सामना करना मुश्किल होता है।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "우리는 멈추지 않아.",
						"english": "We won't stop.",
						"japanese": "私たちは止まらない。",
						"chinese": "我们不会停止。",
						"french": "Nous ne nous arrêterons pas.",
						"spanish": "No nos detendremos.",
						"vietnamese": "Chúng tôi sẽ không dừng lại.",
						"thai": "เราจะไม่หยุด",
						"hindi": "हम रुकेंगे नहीं।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "숲의 심장부. 거대한 그림자가 앞을 가로막았다.",
						"english": "Heart of the forest. A giant shadow blocked our path.",
						"japanese": "森の心臓部。巨大な影が道を塞いだ。",
						"chinese": "森林之心。一个巨大的身影挡住了去路。",
						"french": "Au cœur de la forêt. Une ombre gigantesque barra la route.",
						"spanish": "El corazón del bosque. Una sombra gigante bloqueó el camino.",
						"vietnamese": "Trung tâm khu rừng. Một bóng đen khổng lồ chặn lối.",
						"thai": "ใจกลางป่า เงาขนาดมหึมาขวางทางอยู่",
						"hindi": "जंगल का दिल। एक विशाल छाया ने रास्ता रोक दिया।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "여기까지 오는구나. 어리석은 인간들.",
						"english": "You've come this far. Foolish humans.",
						"japanese": "ここまで来たか。愚かな人間どもめ。",
						"chinese": "你们竟然走到这里。愚蠢的人类。",
						"french": "Vous êtes venus jusqu'ici. Humains stupides.",
						"spanish": "Habéis llegado hasta aquí. Humanos necios.",
						"vietnamese": "Các ngươi đã đến tận đây. Những kẻ phàm tục ngu ngốc.",
						"thai": "พวกแกมาได้ไกลขนาดนี้เชียวรึ มนุษย์โง่เขลา",
						"hindi": "तुम इतनी दूर आ गए। मूर्ख इंसान।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "네가 이 모든 것의 원흉인가!",
						"english": "Are you the cause of all this?!",
						"japanese": "お前がこの全ての元凶か！",
						"chinese": "你就是这一切的罪魁祸首吗！",
						"french": "Es-tu la cause de tout cela ?!",
						"spanish": "¿Eres tú la causa de todo esto?",
						"vietnamese": "Ngươi là thủ phạm của tất cả chuyện này sao?!",
						"thai": "แกคือต้นเหตุของเรื่องทั้งหมดนี้งั้นรึ!",
						"hindi": "क्या तुम ही इन सब के पीछे हो?!"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "감히 숲의 섭리에 대항하려 하는가?",
						"english": "Dare you defy the forest's will?",
						"japanese": "よくも森の摂理に逆らおうとするか？",
						"chinese": "你竟敢反抗森林的旨意？",
						"french": "Oses-tu défier la providence de la forêt ?",
						"spanish": "¿Osas desafiar la providencia del bosque?",
						"vietnamese": "Ngươi dám chống lại ý muốn của rừng sao?",
						"thai": "แกกล้าที่จะขัดขืนเจตจำนงของป่างั้นรึ?",
						"hindi": "क्या तुम जंगल की इच्छा का विरोध करने की हिम्मत करते हो?"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "숲을 더럽히는 건 너야!",
						"english": "You are the one defiling the forest!",
						"japanese": "森を汚しているのはお前だ！",
						"chinese": "是你玷污了森林！",
						"french": "C'est toi qui souilles la forêt !",
						"spanish": "¡Eres tú quien está profanando el bosque!",
						"vietnamese": "Chính ngươi mới là kẻ đang làm ô uế khu rừng!",
						"thai": "แกต่างหากที่กำลังแปดเปื้อนป่า!",
						"hindi": "तुम ही हो जो जंगल को अपवित्र कर रहे हो!"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크아악… 이럴 수는… 없어… 숲은…",
						"english": "Aargh... This can't... be... The forest...",
						"japanese": "ぐあああ… まさか… そんな… 森が…",
						"chinese": "啊啊… 不可能… 森林…",
						"french": "Argh... Ce n'est pas... possible... La forêt...",
						"spanish": "¡Aaargh... Esto no puede... ser... El bosque...",
						"vietnamese": "Aaargh... Không thể nào... Rừng rậm...",
						"thai": "อ๊าคคค... ไม่จริง... ไม่นะ... ป่า...",
						"hindi": "आह... यह नहीं... हो सकता... जंगल..."
					},
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "끝났다.",
						"english": "It's over.",
						"japanese": "終わった。",
						"chinese": "结束了。",
						"french": "C'est fini.",
						"spanish": "Se acabó.",
						"vietnamese": "Xong rồi.",
						"thai": "จบแล้ว",
						"hindi": "खत्म हो गया।"
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자는 스러졌지만, 숲의 붉은 기운은 여전했다. 아직 끝나지 않은 싸움이었다.",
						"english": "The colossal shadow fell, but the forest's crimson aura remained. The fight was far from over.",
						"japanese": "巨大な影は消え去ったが、森の赤い気配は依然として残っていた。戦いはまだ終わっていなかった。",
						"chinese": "巨大的阴影消散了，但森林的猩红气息依旧。这场战斗远未结束。",
						"french": "L'ombre colossale est tombée, mais l'aura écarlate de la forêt persistait. Le combat était loin d'être terminé.",
						"spanish": "La sombra colosal cayó, pero el aura carmesí del bosque permanecía. La lucha estaba lejos de terminar.",
						"vietnamese": "Bóng tối khổng lồ đã tan biến, nhưng vầng khí đỏ của khu rừng vẫn còn. Cuộc chiến vẫn chưa kết thúc.",
						"thai": "เงาขนาดมหึมาได้สลายไปแล้ว แต่กลิ่นอายสีแดงของป่ายังคงอยู่ การต่อสู้ยังไม่สิ้นสุด",
						"hindi": "विशाल छाया तो ढल गई, पर जंगल की लाल आभा बनी रही। लड़ाई अभी खत्म नहीं हुई थी।"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "하찮은 것들. 숲의 힘을 거스를 순 없다.",
						"english": "Insignificant beings. You cannot defy the forest's power.",
						"japanese": "くだらない者たち。森の力に逆らうことはできない。",
						"chinese": "微不足道的家伙。你们无法违抗森林的力量。",
						"french": "Êtres insignifiants. Vous ne pouvez pas défier le pouvoir de la forêt.",
						"spanish": "Seres insignificantes. No podéis desafiar el poder del bosque.",
						"vietnamese": "Lũ yếu ớt. Ngươi không thể chống lại sức mạnh của rừng.",
						"thai": "พวกไร้ค่า. เจ้าไม่อาจขัดขืนพลังของป่าได้",
						"hindi": "तुच्छ प्राणी। तुम जंगल की शक्ति का विरोध नहीं कर सकते।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "젠장… 다시…",
						"english": "Damn it... again...",
						"japanese": "ちくしょう… また…",
						"chinese": "该死... 再来一次...",
						"french": "Maudit... encore...",
						"spanish": "Maldita sea... otra vez...",
						"vietnamese": "Chết tiệt... lại nữa rồi...",
						"thai": "บ้าจริง... อีกแล้ว...",
						"hindi": "धिक्कार है... फिर से..."
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "숲의 생명력이 탐험대를 집어삼키려 했다.",
						"english": "The forest's life force sought to engulf the expedition.",
						"japanese": "森の生命力が探検隊を飲み込もうとしていた。",
						"chinese": "森林的生命力试图吞噬探险队。",
						"french": "La force vitale de la forêt cherchait à engloutir l'expédition.",
						"spanish": "La fuerza vital del bosque intentaba engullir a la expedición.",
						"vietnamese": "Sức sống của khu rừng muốn nuốt chửng đoàn thám hiểm.",
						"thai": "พลังชีวิตของป่าพยายามกลืนกินคณะสำรวจ",
						"hindi": "जंगल की जीवन शक्ति अभियान दल को निगलने वाली थी।"
					},
					"type": "speech",
					"speaker": "narrator"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"숲은 언제나 푸르고 평화로웠다.",
			"하지만 고요한 물 밑에는 알 수 없는 그림자가 드리웠고.",
			"하나둘 사라진 마을 사람들, 붉게 변해버린 강물.",
			"대체 이 숲에 무슨 일이 일어나는 것일까?",
			"진실은 아름다움 뒤에 숨어 있었다."
		],
		"english": [
			"The forest was always green and peaceful.",
			"But beneath the serene waters, an unknown shadow loomed.",
			"Villagers vanished one by one, the river turned crimson.",
			"What on earth is happening in this forest?",
			"The truth lay hidden behind the beauty."
		],
		"japanese": [
			"森はいつも緑豊かで平和だった。",
			"しかし、静かな水面の下には未知の影が忍び寄っていた。",
			"村人たちは一人、また一人と姿を消し、川は赤く染まった。",
			"一体この森で何が起こっているのだろうか？",
			"真実は美しさの裏に隠されていた。"
		],
		"chinese": [
			"森林总是郁郁葱葱，一片祥和。",
			"然而，在宁静的水面下，一道未知的阴影悄然笼罩。",
			"村民们一个接一个地消失，河水变得猩红。",
			"这片森林究竟发生了什么？",
			"真相隐藏在美丽之后。"
		],
		"french": [
			"La forêt était toujours verte et paisible.",
			"Mais sous les eaux sereines, une ombre inconnue planait.",
			"Les villageois disparaissaient un à un, la rivière virait au cramoisi.",
			"Que se passe-t-il donc dans cette forêt ?",
			"La vérité se cachait derrière la beauté."
		],
		"spanish": [
			"El bosque siempre fue verde y tranquilo.",
			"Pero bajo las aguas serenas, una sombra desconocida acechaba.",
			"Los aldeanos desaparecían uno a uno, el río se volvió carmesí.",
			"¿Qué diablos está pasando en este bosque?",
			"La verdad se ocultaba tras la belleza."
		],
		"vietnamese": [
			"Rừng luôn xanh tươi và yên bình.",
			"Nhưng dưới làn nước tĩnh lặng, một bóng đen bí ẩn bao trùm.",
			"Dân làng dần biến mất, dòng sông nhuộm đỏ.",
			"Chuyện gì đang xảy ra trong khu rừng này vậy?",
			"Sự thật ẩn giấu sau vẻ đẹp."
		],
		"thai": [
			"ป่าไม้เขียวชอุ่มและสงบสุขเสมอมา",
			"แต่ใต้น้ำอันสงบนิ่ง มีเงามืดที่ไม่อาจทราบได้ปกคลุมอยู่",
			"ชาวบ้านหายไปทีละคน แม่น้ำกลายเป็นสีแดงฉาน",
			"เกิดอะไรขึ้นในป่าแห่งนี้กันแน่?",
			"ความจริงซ่อนอยู่เบื้องหลังความงดงาม"
		],
		"hindi": [
			"वन सदा हरा-भरा और शांत रहता था।",
			"परन्तु शांत जल के नीचे एक अज्ञात छाया मंडरा रही थी।",
			"ग्रामीण एक-एक कर गायब हो गए, नदी लाल हो गई।",
			"आखिर इस वन में क्या हो रहा है?",
			"सत्य सुंदरता के पीछे छिपा था।"
		]
	}
} as const;
