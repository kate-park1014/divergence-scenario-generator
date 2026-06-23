export const scenario_forest_veridia_4_01 = {
	"scenario_id": "forest_veridia_4_01",
	"order": 1,
	"act": "intro",
	"theme": "forest",
	"actors": {
		"bracken": {
			"id": "mon_48cf29be-dbc0-44b1-bbb3-ecda1d14742d",
			"name": {
				"korean": "브라켄",
				"english": "Bracken",
				"japanese": "ブラッケン",
				"chinese": "布莱肯",
				"french": "Bracken",
				"spanish": "Bracken",
				"vietnamese": "Bracken",
				"thai": "แบรกเคน",
				"hindi": "ब्रैकेन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5b494da6-ffd7-43d3-7171-7ac84bdfe400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/4a7a1b62-d7a7-4a21-ffd5-fa9b5de82100/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"오팔숲, 신비로운 베일 아래.",
			"그 아름다움에 홀려, 탐욕스러운 발걸음이 닿았다.",
			"그러나 숲은 침묵하지 않았다.",
			"성스러운 전설 뒤에 감춰진 진실은 무엇인가?",
			"고통스러운 숲의 속삭임이 시작된다."
		],
		"english": [
			"Opal Forest, veiled in mystery.",
			"Entranced by its beauty, greedy footsteps arrived.",
			"But the forest did not remain silent.",
			"What truth lies hidden behind the sacred legend?",
			"The painful whispers of the forest begin."
		],
		"japanese": [
			"オパール森、神秘のベールの下。",
			"その美しさに魅せられ、貪欲な足跡が届いた。",
			"しかし、森は沈黙しなかった。",
			"聖なる伝説の裏に隠された真実とは？",
			"苦痛に満ちた森のささやきが始まる。"
		],
		"chinese": [
			"欧泊森林，笼罩在神秘的面纱下。",
			"贪婪的脚步，为它的美丽所诱。",
			"然而，森林并未沉默。",
			"神圣传说背后隐藏着什么真相？",
			"森林痛苦的低语开始了。"
		],
		"french": [
			"Forêt d'Opale, sous un voile mystérieux.",
			"Séduits par sa beauté, des pas cupides s'y sont aventurés.",
			"Mais la forêt ne resta pas silencieuse.",
			"Quelle vérité se cache derrière la légende sacrée ?",
			"Les murmures douloureux de la forêt commencent."
		],
		"spanish": [
			"Bosque de Ópalo, bajo un velo misterioso.",
			"Hechizados por su belleza, pasos codiciosos llegaron.",
			"Pero el bosque no guardó silencio.",
			"Qué verdad se esconde tras la leyenda sagrada?",
			"Los dolorosos susurros del bosque comienzan."
		],
		"vietnamese": [
			"Rừng Opal, ẩn mình dưới màn sương huyền bí.",
			"Bị vẻ đẹp của nó mê hoặc, những bước chân tham lam đã đến.",
			"Nhưng rừng đã không im lặng.",
			"Sự thật nào ẩn giấu đằng sau truyền thuyết thiêng liêng?",
			"Những lời thì thầm đau đớn của rừng bắt đầu."
		],
		"thai": [
			"ป่าโอปอล ภายใต้มา่่นแห่งความลึกลับ",
			"ด้วยความหลงใหลในความงาม รอยเท้าแห่งความโลภก็ย่างกรายมา",
			"แต่ป่าก็มิได้นิ่งเงียบ",
			"ความจริงที่ซ่อนอยู่เบื้องหลังตำนานศักดิ์สิทธิ์คืออะไร?",
			"เสียงกระซิบอันเจ็บปวดของป่าเริ่มต้นขึ้น"
		],
		"hindi": [
			"ओपल वन, रहस्यमयी आवरण के नीचे।",
			"उसकी सुंदरता पर मोहित होकर, लालची कदम पहुँचे।",
			"परन्तु वन शांत नहीं रहा।",
			"पवित्र कथा के पीछे छिपा सच क्या है?",
			"वन की दर्दनाक फुसफुसाहटें शुरू होती हैं।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "눈부신 오팔빛 숲. 모든 것이 꿈결처럼 빛났다.",
						"english": "Dazzling opal forest. Everything shone like a dream.",
						"japanese": "眩いオパール色の森。すべてが夢のように輝いていた。",
						"chinese": "璀璨的欧泊森林。一切都如梦似幻般闪耀。",
						"french": "Forêt d'opale éblouissante. Tout brillait comme un rêve.",
						"spanish": "Deslumbrante bosque de ópalo. Todo brillaba como un sueño.",
						"vietnamese": "Rừng Opal rực rỡ. Mọi thứ lấp lánh như trong mơ.",
						"thai": "ป่าโอปอลระยิบระยับ ทุกสิ่งส่องประกายดุจฝัน",
						"hindi": "जगमगाता ओपल वन। सब कुछ सपने जैसा चमक रहा था।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "happy",
					"content": {
						"korean": "믿을 수 없어… 이런 곳이 존재하다니.",
						"english": "Unbelievable... such a place exists.",
						"japanese": "信じられない…こんな場所があるなんて。",
						"chinese": "不可思议… 竟然有这种地方。",
						"french": "Incroyable... un tel endroit existe.",
						"spanish": "No puedo creerlo... que exista un lugar así.",
						"vietnamese": "Không thể tin được... một nơi như thế này lại tồn tại.",
						"thai": "ไม่น่าเชื่อ... ที่แบบนี้มีอยู่จริง",
						"hindi": "अविश्वसनीय... ऐसी जगह भी मौजूद है।"
					}
				},
				{
					"type": "direction",
					"spot": [
						5,
						3
					],
					"speaker": "bracken",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "bracken",
					"emotion": "base",
					"content": {
						"korean": "환상적인 풍경이야. 고대 기록과 일치해.",
						"english": "A fantastic landscape. It matches ancient records.",
						"japanese": "幻想的な風景だ。古代の記録と一致する。",
						"chinese": "梦幻般的景象。与古代记录相符。",
						"french": "Un paysage fantastique. Cela correspond aux anciens registres.",
						"spanish": "Un paisaje fantástico. Coincide con los registros antiguos.",
						"vietnamese": "Phong cảnh tuyệt vời. Nó khớp với ghi chép cổ đại.",
						"thai": "ทิวทัศน์ที่น่าอัศจรรย์ ตรงกับบันทึกโบราณ",
						"hindi": "एक शानदार परिदृश्य। यह प्राचीन अभिलेखों से मेल खाता है।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "고고학자님, 정말 전설의 아마존 문명 유적이 여기 있을까요?",
						"english": "Archaeologist, could the legendary Amazon civilization ruins truly be here?",
						"japanese": "考古学者さん、本当に伝説のアマゾン文明の遺跡がここにあるのでしょうか？",
						"chinese": "考古学家，传说中的亚马逊文明遗迹真的在这里吗？",
						"french": "Archéologue, les ruines de la légendaire civilisation amazonienne seraient-elles vraiment ici ?",
						"spanish": "¿Arqueólogo, realmente estarán aquí las ruinas de la legendaria civilización amazónica?",
						"vietnamese": "Nhà khảo cổ học, liệu tàn tích văn minh Amazon huyền thoại có thực sự ở đây không?",
						"thai": "ท่านนักโบราณคดี ซากอารยธรรมอเมซอนในตำนานจะอยู่ที่นี่จริงหรือ?",
						"hindi": "पुरातत्वविद्, क्या वास्तव में पौराणिक अमेज़न सभ्यता के अवशेष यहाँ होंगे?"
					},
					"speaker": "character_1",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "bracken",
					"emotion": "base",
					"content": {
						"korean": "분명해. 이 숲의 기이한 생명력… 범상치 않아.",
						"english": "It's clear. The strange vitality of this forest... it's extraordinary.",
						"japanese": "間違いない。この森の奇妙な生命力…ただ事じゃない。",
						"chinese": "没错。这片森林奇异的生命力…非同寻常。",
						"french": "C'est évident. L'étrange vitalité de cette forêt... c'est extraordinaire.",
						"spanish": "Es evidente. La extraña vitalidad de este bosque... no es común.",
						"vietnamese": "Rõ ràng rồi. Sức sống kỳ lạ của khu rừng này... không tầm thường chút nào.",
						"thai": "ชัดเจน พลังชีวิตอันแปลกประหลาดของป่าแห่งนี้... ไม่ธรรมดาเลย",
						"hindi": "स्पष्ट है। इस वन की विचित्र जीवन शक्ति... असाधारण है।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "bracken",
					"spot": [
						5,
						3
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "저것 봐. 넝쿨에 뒤덮인 돌 조각.",
						"english": "Look. A stone fragment covered in vines.",
						"japanese": "あれを見て。蔓に覆われた石の破片だ。",
						"chinese": "看。一块被藤蔓覆盖的石块。",
						"french": "Regarde. Un fragment de pierre couvert de lianes.",
						"spanish": "Mira. Un fragmento de piedra cubierto de enredaderas.",
						"vietnamese": "Nhìn kìa. Một mảnh đá bị dây leo bao phủ.",
						"thai": "ดูสิ. เศษหินที่ถูกปกคลุมด้วยเถาวัลย์.",
						"hindi": "देखो। एक पत्थर का टुकड़ा जो बेलों से ढका है।"
					},
					"speaker": "bracken",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "뿌리 깊이 파묻힌, 오래된 석판의 파편이었다.",
						"english": "It was a fragment of an old stone tablet, buried deep by roots.",
						"japanese": "それは根に深く埋もれた、古い石板の破片だった。",
						"chinese": "那是一块被根深埋的古老石碑碎片。",
						"french": "C'était un fragment d'une ancienne dalle de pierre, enfoui profondément par les racines.",
						"spanish": "Era un fragmento de una antigua losa de piedra, profundamente enterrado por las raíces.",
						"vietnamese": "Đó là một mảnh của tấm bia đá cổ xưa, bị rễ cây vùi sâu.",
						"thai": "มันเป็นเศษชิ้นส่วนของศิลาจารึกเก่าแก่ที่ถูกฝังลึกด้วยรากไม้.",
						"hindi": "यह एक पुरानी पत्थर की पटिया का टुकड़ा था, जो जड़ों में गहराई तक दबा हुआ था।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "유적… 고대 문명의 흔적 같아요.",
						"english": "Ruins... It looks like traces of an ancient civilization.",
						"japanese": "遺跡…古代文明の痕跡のようです。",
						"chinese": "遗迹… 看起来像是古代文明的痕迹。",
						"french": "Des ruines... On dirait des traces d'une ancienne civilisation.",
						"spanish": "Ruinas... Parece que son vestigios de una civilización antigua.",
						"vietnamese": "Di tích... Dường như là dấu vết của một nền văn minh cổ đại.",
						"thai": "ซากปรักหักพัง... ดูเหมือนจะเป็นร่องรอยของอารยธรรมโบราณ.",
						"hindi": "खंडहर... यह प्राचीन सभ्यता के निशान लगते हैं।"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "분명해. 숲에 완전히 잠식되었군. 그들의 문명은 어디로 갔을까?",
						"english": "It's clear. The forest has completely consumed it. Where did their civilization go?",
						"japanese": "明らかだ。森に完全に飲み込まれたな。彼らの文明はどこへ行ったんだ？",
						"chinese": "很明显。它完全被森林吞噬了。他们的文明去了哪里？",
						"french": "C'est évident. La forêt l'a complètement englouti. Où est passée leur civilisation ?",
						"spanish": "Está claro. El bosque lo ha devorado por completo. ¿A dónde fue su civilización?",
						"vietnamese": "Rõ ràng rồi. Rừng đã nuốt chửng hoàn toàn. Nền văn minh của họ đã đi đâu?",
						"thai": "ชัดเจน. ป่าได้กลืนกินมันไปจนหมด. อารยธรรมของพวกเขาหายไปไหน?",
						"hindi": "यह स्पष्ट है। जंगल ने इसे पूरी तरह निगल लिया है। उनकी सभ्यता कहाँ गई होगी?"
					},
					"speaker": "bracken",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "숲이 모든 것을 집어삼킨 것 같네요.",
						"english": "It seems the forest has swallowed everything.",
						"japanese": "森が全てを飲み込んだようですね。",
						"chinese": "看来森林吞噬了一切。",
						"french": "On dirait que la forêt a tout englouti.",
						"spanish": "Parece que el bosque se lo ha tragado todo.",
						"vietnamese": "Dường như rừng đã nuốt chửng mọi thứ.",
						"thai": "ดูเหมือนว่าป่าจะกลืนกินทุกสิ่งไปหมดแล้ว.",
						"hindi": "लगता है जंगल ने सब कुछ निगल लिया है।"
					},
					"speaker": "character_2",
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "bracken",
					"spot": [
						5,
						3
					],
					"type": "direction"
				},
				{
					"speaker": "bracken",
					"emotion": "base",
					"content": {
						"korean": "이 숲의 생명력… 너무 강렬해서 기이할 정도야.",
						"english": "The vitality of this forest... it's so intense, it's eerie.",
						"japanese": "この森の生命力… あまりにも強烈で、奇妙なほどだ。",
						"chinese": "这片森林的生命力… 强大到诡异的地步。",
						"french": "La vitalité de cette forêt... est si intense, c'en est étrange.",
						"spanish": "La vitalidad de este bosque... es tan intensa que resulta extraña.",
						"vietnamese": "Sức sống của khu rừng này... mãnh liệt đến mức kỳ lạ.",
						"thai": "พลังชีวิตของป่านี้... มันรุนแรงจนน่าขนลุก.",
						"hindi": "इस जंगल की जीवन शक्ति... इतनी तीव्र है कि अजीब लगती है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "나무들이 마치 살아있는 감옥 같아요.",
						"english": "The trees are like a living prison.",
						"japanese": "木々がまるで生きている牢獄のようだ。",
						"chinese": "树木就像一座活生生的监狱。",
						"french": "Les arbres sont comme une prison vivante.",
						"spanish": "Los árboles son como una prisión viviente.",
						"vietnamese": "Những cái cây cứ như một nhà tù sống vậy.",
						"thai": "ต้นไม้พวกนี้เหมือนคุกที่มีชีวิต.",
						"hindi": "पेड़ एक जीवित जेल की तरह हैं।"
					}
				},
				{
					"speaker": "bracken",
					"emotion": "sad",
					"content": {
						"korean": "특정 나무들에서 희미한 고통의 소리가 들리는 듯해.",
						"english": "I can almost hear faint sounds of pain from certain trees.",
						"japanese": "特定の木々から、かすかな苦痛の声が聞こえるような気がする。",
						"chinese": "某些树木中似乎传来微弱的痛苦声。",
						"french": "J'ai l'impression d'entendre de faibles sons de douleur provenant de certains arbres.",
						"spanish": "Parece que escucho débiles sonidos de dolor de ciertos árboles.",
						"vietnamese": "Dường như có tiếng rên rỉ yếu ớt từ những cái cây nhất định.",
						"thai": "เหมือนได้ยินเสียงความเจ็บปวดแผ่วๆ จากต้นไม้บางต้น.",
						"hindi": "कुछ पेड़ों से दर्द की हल्की आवाजें सुनाई दे रही हैं।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_3",
					"emotion": "base",
					"content": {
						"korean": "…착각이겠죠?",
						"english": "...It's just my imagination, right?",
						"japanese": "…気のせい、だよね？",
						"chinese": "…是我的错觉吧？",
						"french": "...C'est mon imagination, n'est-ce pas ?",
						"spanish": "¿...Es solo mi imaginación, verdad?",
						"vietnamese": "...Chắc là tôi nhầm lẫn thôi, phải không?",
						"thai": "...คงคิดไปเองสินะ?",
						"hindi": "...यह मेरा वहम होगा, है ना?"
					},
					"type": "speech"
				},
				{
					"speaker": "bracken",
					"emotion": "base",
					"content": {
						"korean": "글쎄. 숲은 모든 것을 기억하고 있지.",
						"english": "Well. The forest remembers everything.",
						"japanese": "さあね。森は全てを記憶しているからな。",
						"chinese": "嗯。森林记得一切。",
						"french": "Eh bien. La forêt se souvient de tout.",
						"spanish": "Bueno. El bosque lo recuerda todo.",
						"vietnamese": "Chà. Rừng ghi nhớ mọi thứ mà.",
						"thai": "ก็นะ. ป่าจดจำทุกสิ่ง.",
						"hindi": "खैर। जंगल सब कुछ याद रखता है।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "bracken",
					"type": "direction",
					"spot": [
						5,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "점점 더 깊이 들어왔어. 되돌아가기 어려울 거야.",
						"english": "We've come too deep. It'll be hard to go back.",
						"japanese": "どんどん奥深くに入ってきてしまった。もう戻るのは難しいだろう。",
						"chinese": "我们已经深入了。恐怕很难回头了。",
						"french": "Nous sommes allés de plus en plus loin. Il sera difficile de faire demi-tour.",
						"spanish": "Hemos entrado cada vez más profundo. Será difícil regresar.",
						"vietnamese": "Chúng ta đã vào sâu hơn rồi. Sẽ khó mà quay lại được.",
						"thai": "เราเข้ามาลึกขึ้นเรื่อยๆ แล้ว คงยากที่จะกลับไป",
						"hindi": "हम और गहरे आते गए। लौटना मुश्किल होगा।"
					},
					"speaker": "bracken",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…알고 있었어. 그래도 멈출 수 없어.",
						"english": "...I knew. But I can't stop.",
						"japanese": "…わかっていた。それでも、立ち止まれない。",
						"chinese": "...我早就知道。但仍无法停止。",
						"french": "...Je savais. Mais je ne peux pas m'arrêter.",
						"spanish": "...Lo sabía. Pero no puedo detenerme.",
						"vietnamese": "...Ta biết. Nhưng ta không thể dừng lại.",
						"thai": "...ฉันรู้ แต่ฉันหยุดไม่ได้",
						"hindi": "...मुझे पता था। फिर भी, मैं रुक नहीं सकता।"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "숲의 심장이 거세게 뛰는 소리가 들려오는 듯했다.",
						"english": "The forest's heart seemed to beat wildly.",
						"japanese": "森の心臓が激しく脈打つ音が聞こえるようだった。",
						"chinese": "森林的心脏仿佛在剧烈跳动。",
						"french": "On aurait dit que le cœur de la forêt battait violemment.",
						"spanish": "Parecía que el corazón del bosque latía salvajemente.",
						"vietnamese": "Dường như trái tim của khu rừng đang đập dữ dội.",
						"thai": "ราวกับได้ยินเสียงหัวใจของป่าเต้นระรัว",
						"hindi": "ऐसा लगा मानो जंगल का दिल तेज़ी से धड़क रहा हो।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 숲이 성스럽다고만 생각하면 오산이야.",
						"english": "It's a mistake to think this forest is merely sacred.",
						"japanese": "この森が聖なる場所だとだけ思っていたら、それは間違いだ。",
						"chinese": "如果你认为这片森林仅仅是神圣的，那就大错特错了。",
						"french": "C'est une erreur de croire que cette forêt est simplement sacrée.",
						"spanish": "Es un error pensar que este bosque es meramente sagrado.",
						"vietnamese": "Sẽ là một sai lầm nếu nghĩ khu rừng này chỉ là một nơi linh thiêng.",
						"thai": "เป็นความเข้าใจผิดถ้าคิดว่าป่านี้ศักดิ์สิทธิ์เพียงอย่างเดียว",
						"hindi": "इस जंगल को सिर्फ़ पवित्र मानना ​​गलती होगी।"
					},
					"speaker": "bracken",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "무슨 뜻이죠?",
						"english": "What do you mean?",
						"japanese": "どういう意味ですか？",
						"chinese": "这是什么意思？",
						"french": "Que voulez-vous dire ?",
						"spanish": "¿Qué quiere decir?",
						"vietnamese": "Ý người là gì?",
						"thai": "หมายความว่าอะไร?",
						"hindi": "आपका क्या मतलब है?"
					},
					"speaker": "character_4",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "bracken",
					"emotion": "sad",
					"content": {
						"korean": "진실은… 때로는 아름다운 가면 뒤에 숨겨져 있지.",
						"english": "The truth... sometimes hides behind a beautiful mask.",
						"japanese": "真実とは…時に美しい仮面の下に隠されているものだ。",
						"chinese": "真相……有时隐藏在美丽的面具之下。",
						"french": "La vérité... se cache parfois derrière un beau masque.",
						"spanish": "La verdad... a veces se esconde detrás de una hermosa máscara.",
						"vietnamese": "Sự thật... đôi khi ẩn sau một chiếc mặt nạ xinh đẹp.",
						"thai": "ความจริง... บางครั้งก็ซ่อนอยู่หลังหน้ากากที่สวยงาม",
						"hindi": "सच... कभी-कभी एक सुंदर मुखौटे के पीछे छिपा होता है।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "크윽… 어리석은 인간들… 너희는 결국… 굴레를 벗어날 수 없을 것이다…",
						"english": "Ugh... Foolish mortals... You will never... escape the cycle...",
						"japanese": "くっ…愚かな人間たちめ…お前たちは結局…この輪廻から逃れられないだろう…",
						"chinese": "呃…愚蠢的人类…你们终究…无法摆脱束缚…",
						"french": "Ugh... Mortels stupides... Vous ne pourrez jamais... échapper au cycle...",
						"spanish": "Ugh... Mortales necios... Al final... no podréis escapar del ciclo...",
						"vietnamese": "Khụ… Loài người ngu xuẩn… Cuối cùng thì các ngươi cũng… không thể thoát khỏi xiềng xích…",
						"thai": "อึก... มนุษย์โง่เขลา... พวกเจ้าไม่มีทาง... หลุดพ้นจากบ่วงนี้ได้...",
						"hindi": "उफ़... मूर्ख इंसान... तुम अंततः... इस बंधन से मुक्त नहीं हो पाओगे..."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "무슨 소리지? 굴레라니…",
						"english": "What was that? A cycle...?",
						"japanese": "何を言ってるんだ？輪廻だと…？",
						"chinese": "什么意思？束缚…？",
						"french": "Qu'est-ce que c'est que ça ? Un cycle... ?",
						"spanish": "¿Qué significa eso? ¿Un ciclo...?",
						"vietnamese": "Nói cái gì vậy? Xiềng xích là sao…?",
						"thai": "นั่นอะไรน่ะ? บ่วงอะไร...?",
						"hindi": "यह क्या था? एक बंधन...?"
					},
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						5,
						3
					],
					"type": "direction",
					"speaker": "bracken"
				},
				{
					"type": "speech",
					"speaker": "bracken",
					"emotion": "base",
					"content": {
						"korean": "아직 끝난 게 아니야. 이 숲의 진실은… 더 깊은 곳에 있어.",
						"english": "It's not over yet. The truth of this forest... lies deeper.",
						"japanese": "まだ終わってない。この森の真実は…もっと奥深くに眠っている。",
						"chinese": "还没结束。这片森林的真相…在更深处。",
						"french": "Ce n'est pas encore fini. La vérité de cette forêt... se trouve plus profondément.",
						"spanish": "Aún no ha terminado. La verdad de este bosque... yace en lo más profundo.",
						"vietnamese": "Vẫn chưa kết thúc đâu. Sự thật của khu rừng này… nằm sâu hơn nữa.",
						"thai": "ยังไม่จบแค่นี้ ความจริงของป่านี้... อยู่ลึกกว่านั้น.",
						"hindi": "यह अभी खत्म नहीं हुआ है। इस जंगल का सच... और गहरा है।"
					}
				},
				{
					"content": {
						"korean": "승리의 환호성 뒤로, 숲은 더 깊은 미스터리를 드리웠다.",
						"english": "Behind the cheers of victory, the forest cast a deeper mystery.",
						"japanese": "勝利の歓声の裏で、森はより深い謎を投げかけた。",
						"chinese": "在胜利的欢呼声背后，森林笼罩着更深的谜团。",
						"french": "Derrière les cris de victoire, la forêt projetait un mystère plus profond.",
						"spanish": "Tras los vítores de la victoria, el bosque proyectaba un misterio más profundo.",
						"vietnamese": "Sau tiếng reo hò chiến thắng, khu rừng lại bao trùm một bí ẩn sâu hơn.",
						"thai": "เบื้องหลังเสียงโห่ร้องแห่งชัยชนะ ป่าได้ทิ้งปริศนาที่ลึกซึ้งกว่าเดิมไว้.",
						"hindi": "जीत की जयकार के पीछे, जंगल ने एक गहरा रहस्य छिपा रखा था।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "하찮은 것들. 너희의 탐욕이 곧 파멸을 부를 것이다.",
						"english": "Insignificant beings. Your greed will soon bring your ruin.",
						"japanese": "くだらぬ者たち。お前たちの貪欲はやがて破滅を招くだろう。",
						"chinese": "卑微的家伙。你们的贪婪终将招致毁灭。",
						"french": "Êtres insignifiants. Votre cupidité entraînera bientôt votre perte.",
						"spanish": "Criaturas insignificantes. Vuestra codicia pronto traerá vuestra ruina.",
						"vietnamese": "Những kẻ hèn mọn. Lòng tham của các ngươi sẽ sớm mang đến tai ương.",
						"thai": "สิ่งไร้ค่า. ความโลภของพวกเจ้าจะนำมาซึ่งความพินาศในไม่ช้า.",
						"hindi": "तुच्छ प्राणी। तुम्हारी लालच जल्द ही तुम्हारी बर्बादी लाएगी।"
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "젠장… 여기서 끝낼 순 없어!",
						"english": "Damn it... I can't end it here!",
						"japanese": "くそ…ここで終わらせるわけにはいかない！",
						"chinese": "该死…不能就这样结束！",
						"french": "Mince... Je ne peux pas en rester là !",
						"spanish": "¡Maldita sea... No puedo terminar aquí!",
						"vietnamese": "Chết tiệt… Không thể kết thúc ở đây được!",
						"thai": "ให้ตายสิ... จบแค่นี้ไม่ได้!",
						"hindi": "धिक्कार है... मैं इसे यहीं खत्म नहीं कर सकता!"
					}
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "숲의 가장 깊은 곳. 거대한 그림자가 앞을 막아섰다.",
						"english": "The deepest part of the forest. A colossal shadow blocked the way.",
						"japanese": "森の最も深い場所。巨大な影が道を阻んだ。",
						"chinese": "森林最深处。一道巨大的阴影挡住了去路。",
						"french": "La partie la plus profonde de la forêt. Une ombre colossale barra le chemin.",
						"spanish": "La parte más profunda del bosque. Una sombra colosal bloqueó el camino.",
						"vietnamese": "Nơi sâu thẳm nhất của khu rừng. Một bóng đen khổng lồ chặn đường.",
						"thai": "ส่วนที่ลึกที่สุดของป่า เงาขนาดมหึมาขวางทางอยู่เบื้องหน้า",
						"hindi": "जंगल का सबसे गहरा हिस्सा। एक विशाल परछाई ने रास्ता रोक दिया।"
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "탐욕스러운 인간들이여… 이곳은 너희가 침범할 곳이 아니다.",
						"english": "Greedy humans... This is not a place for you to trespass.",
						"japanese": "貪欲な人間たちよ…ここは、お前たちが侵すべき場所ではない。",
						"chinese": "贪婪的人类啊……这里不是你们可以侵犯的地方。",
						"french": "Humains avides... Ce n'est pas un endroit où vous pouvez vous introduire.",
						"spanish": "Humanos codiciosos... Este no es un lugar para que ustedes invadan.",
						"vietnamese": "Hỡi loài người tham lam... Đây không phải là nơi các ngươi được phép xâm phạm.",
						"thai": "มนุษย์ผู้ละโมบ... ที่นี่ไม่ใช่ที่สำหรับพวกเจ้าจะบุกรุก",
						"hindi": "लालची इंसानो... यह वो जगह नहीं जहाँ तुम अतिक्रमण कर सको।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "…네가 이 숲을 지키는 존재인가.",
						"english": "...Are you the guardian of this forest?",
						"japanese": "…お前がこの森を守る存在なのか。",
						"chinese": "……你是这片森林的守护者吗？",
						"french": "...Es-tu le gardien de cette forêt ?",
						"spanish": "...¿Eres tú el guardián de este bosque?",
						"vietnamese": "...Ngươi là kẻ canh giữ khu rừng này sao?",
						"thai": "...เจ้าคือผู้พิทักษ์ป่านี้หรือ?",
						"hindi": "...क्या तुम इस जंगल के संरक्षक हो?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "나의 존재는 너희의 어리석음을 심판하기 위함이다.",
						"english": "My existence is to judge your foolishness.",
						"japanese": "私の存在は、お前たちの愚かさを裁くためだ。",
						"chinese": "我的存在是为了审判你们的愚蠢。",
						"french": "Mon existence est de juger votre folie.",
						"spanish": "Mi existencia es para juzgar su necedad.",
						"vietnamese": "Sự tồn tại của ta là để phán xét sự ngu xuẩn của các ngươi.",
						"thai": "การมีอยู่ของข้าคือเพื่อพิพากษาความโง่เขลาของพวกเจ้า",
						"hindi": "मेरा अस्तित्व तुम्हारी मूर्खता का न्याय करने के लिए है।"
					}
				}
			]
		}
	]
} as const;
