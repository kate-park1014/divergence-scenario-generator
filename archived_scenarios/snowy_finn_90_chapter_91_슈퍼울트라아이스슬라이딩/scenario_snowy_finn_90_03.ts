export const scenario_snowy_finn_90_03 = {
	"scenario_id": "snowy_finn_90_03",
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "차가운 바람이 눈보라를 흩날렸다. 얼어붙은 빙판에, 정체 모를 자가 홀로 서 있었다.",
						"english": "A cold wind scattered snow. On the frozen ice, an unknown figure stood alone.",
						"japanese": "冷たい風が吹雪を巻き上げた。凍てつく氷の上に、正体不明の者が一人立っていた。",
						"chinese": "寒风卷着暴雪。冻结的冰面上，一个身份不明的人独自站立着。",
						"french": "Un vent froid dispersait la neige. Sur la glace gelée, une silhouette inconnue se tenait seule.",
						"spanish": "Un viento frío esparcía la nieve. Sobre el hielo congelado, una figura desconocida se mantenía sola.",
						"vietnamese": "Gió lạnh thổi tung tuyết. Trên băng đông cứng, một bóng người không rõ đứng một mình.",
						"thai": "ลมหนาวพัดพาหิมะปลิวว่อน บนผืนน้ำแข็งที่กลายเป็นน้ำแข็ง ร่างที่ไม่รู้จักยืนอยู่ลำพัง.",
						"hindi": "ठंडी हवा बर्फीले तूफान को बिखेर रही थी। जमी हुई बर्फ पर, एक अज्ञात आकृति अकेली खड़ी थी।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…왔구나. 나의 마지막 일격을 받아라.",
						"english": "...You've come. Receive my final blow.",
						"japanese": "…来たか。我が最後の一撃を受けよ。",
						"chinese": "……你来了。承受我这最后一击吧。",
						"french": "...Tu es venu. Reçois mon coup final.",
						"spanish": "...Has venido. Recibe mi golpe final.",
						"vietnamese": "...Ngươi đã đến. Nhận lấy đòn cuối cùng của ta đi.",
						"thai": "...เจ้ามาแล้ว จงรับการโจมตีครั้งสุดท้ายของข้าไปซะ.",
						"hindi": "...तुम आ गए। मेरे अंतिम प्रहार का सामना करो।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…왜 핫팩을 흘끔거리지?",
						"english": "...Why do you keep glancing at the hot pack?",
						"japanese": "…なぜカイロをちらちら見る？",
						"chinese": "……为什么老是瞄着暖宝宝？",
						"french": "...Pourquoi jettes-tu des coups d'œil au chauffe-main ?",
						"spanish": "...¿Por qué sigues mirando de reojo la bolsa térmica?",
						"vietnamese": "...Sao ngươi cứ liếc nhìn túi sưởi vậy?",
						"thai": "...ทำไมถึงคอยชายตามองถุงร้อนล่ะ?",
						"hindi": "...तुम बार-बार हॉट पैक को क्यों देख रहे हो?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"spot": [
						5,
						2
					],
					"speaker": "frost",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "…핫팩? 저 자, 추위를 타는 건가?",
						"english": "...A hot pack? Is that one sensitive to the cold?",
						"japanese": "…カイロ？あの者、寒さに弱いのか？",
						"chinese": "……暖宝宝？那家伙，怕冷吗？",
						"french": "...Un chauffe-main ? Cette personne est-elle sensible au froid ?",
						"spanish": "...¿Una bolsa térmica? ¿Esa persona es sensible al frío?",
						"vietnamese": "...Túi sưởi? Người đó, sợ lạnh sao?",
						"thai": "...ถุงร้อน? หมอนั่น ขี้หนาวเหรอ?",
						"hindi": "...हॉट पैक? क्या उसे ठंड लगती है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "frost"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 450,
					"action": "enter",
					"speaker": "frost",
					"spot": [
						4,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "frost",
					"content": {
						"korean": "…이상해. 저 거대한 자가, 온기를 탐낸다고?",
						"english": "...Strange. That giant, coveting warmth?",
						"japanese": "…おかしい。あの巨体が、暖かさを欲しがるとは？",
						"chinese": "……奇怪。那庞然大物，竟然贪恋温暖？",
						"french": "...Étrange. Ce géant, convoitant la chaleur ?",
						"spanish": "...Extraño. ¿Ese gigante, anhelando el calor?",
						"vietnamese": "...Kỳ lạ. Kẻ khổng lồ đó lại thèm khát sự ấm áp sao?",
						"thai": "...แปลกจริง. เจ้ายักษ์นั่น ต้องการความอบอุ่นงั้นหรือ?",
						"hindi": "...अजीब है। वह विशालकाय प्राणी, गर्माहट का लालच कर रहा है?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "크아아아! 각오해라!",
						"english": "KROOOAAAR! Prepare yourself!",
						"japanese": "くああああ！覚悟しろ！",
						"chinese": "吼啊啊啊！做好觉悟吧！",
						"french": "GRAAAAH ! Prépare-toi !",
						"spanish": "¡GRRRRAAAAH! ¡Prepárate!",
						"vietnamese": "KHOOOÀNG! Hãy chuẩn bị đi!",
						"thai": "กร๊าซซซซ! เตรียมตัวไว้ซะ!",
						"hindi": "क्रूआआआर! तैयार हो जाओ!"
					}
				},
				{
					"content": {
						"korean": "또 흘끔거렸어! 저 발 밑에 분명 핫팩 하나 떨어졌는데.",
						"english": "Peeking again! Pretty sure a hot pack dropped near their feet.",
						"japanese": "またチラ見したわね！ 足元にカイロが落ちたはずなのに。",
						"chinese": "又偷看了！明明脚下掉了一个暖宝宝。",
						"french": "Encore à jeter des coups d'œil ! Sûrement un chauffe-mains est tombé à ses pieds.",
						"spanish": "¡Otra vez mirando de reojo! Seguro se le cayó un calentador de manos cerca de los pies.",
						"vietnamese": "Lại lén lút nhìn trộm! Rõ ràng là có một miếng dán giữ nhiệt rơi gần chân rồi mà.",
						"thai": "แอบมองอีกแล้ว! เห็นชัดๆ ว่าแผ่นประคบร้อนตกลงที่เท้าแท้ๆ",
						"hindi": "फिर से ताक-झांक! ज़रूर एक हॉट पैक उसके पैरों के पास गिरा था।"
					},
					"emotion": "base",
					"speaker": "character_1",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…저 정도 기세면, 추위는 못 느낄 텐데.",
						"english": "...With that much spirit, they shouldn't feel the cold.",
						"japanese": "…あの勢いなら、寒さは感じないはずだけど。",
						"chinese": "……那股气势，应该感受不到寒冷吧。",
						"french": "...Avec une telle ardeur, il ne devrait pas sentir le froid.",
						"spanish": "...Con esa energía, no deberían sentir el frío.",
						"vietnamese": "...Với khí thế đó, chắc là sẽ không cảm thấy lạnh đâu.",
						"thai": "...ด้วยแรงใจขนาดนั้น ไม่น่าจะรู้สึกหนาวนะ.",
						"hindi": "...इतनी हिम्मत है तो ठंड महसूस नहीं होनी चाहिए।"
					},
					"speaker": "frost",
					"type": "speech"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "핫팩 하나 주면 좀 조용해질까?",
						"english": "Would giving them a hot pack make them quiet down?",
						"japanese": "カイロを一つあげたら、少しは静かになるかな？",
						"chinese": "给他一个暖宝宝，会不会安静点？",
						"french": "Un chauffe-mains le calmerait-il ?",
						"spanish": "¿Un calentador de manos lo calmaría un poco?",
						"vietnamese": "Đưa một miếng dán giữ nhiệt có làm họ yên lặng hơn không?",
						"thai": "ให้แผ่นประคบร้อนอันนึงแล้วจะเงียบลงไหมนะ?",
						"hindi": "क्या एक हॉट पैक देने से वह शांत हो जाएगा?"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "frost",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 400
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…아냐. 단순한 추위가 아니야.",
						"english": "...No. It's not just simple cold.",
						"japanese": "…違う。ただの寒さじゃない。",
						"chinese": "……不。这不是简单的寒冷。",
						"french": "...Non. Ce n'est pas une simple sensation de froid.",
						"spanish": "...No. No es un simple frío.",
						"vietnamese": "...Không. Đây không phải là lạnh thông thường.",
						"thai": "...ไม่ใช่ ความหนาวธรรมดา.",
						"hindi": "...नहीं। यह सिर्फ़ ठंड नहीं है।"
					},
					"speaker": "frost",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그럼 뭔데?",
						"english": "Then what is it?",
						"japanese": "じゃあ何なの？",
						"chinese": "那是什么？",
						"french": "Alors quoi ?",
						"spanish": "¿Entonces qué es?",
						"vietnamese": "Vậy thì là gì?",
						"thai": "แล้วมันคืออะไรล่ะ?",
						"hindi": "तो फिर क्या है?"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "외로움… 혹은, 간절한 갈망.",
						"english": "Loneliness... or a desperate longing.",
						"japanese": "孤独…あるいは、切なる渇望。",
						"chinese": "孤独……或者，是强烈的渴望。",
						"french": "La solitude... ou un ardent désir.",
						"spanish": "Soledad... o un anhelo desesperado.",
						"vietnamese": "Nỗi cô đơn... hoặc là một khao khát mãnh liệt.",
						"thai": "ความเหงา... หรือความปรารถนาอันแรงกล้า.",
						"hindi": "अकेलापन... या, एक तीव्र लालसा।"
					},
					"speaker": "frost",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "나의… '빙결 돌진'! 간다!",
						"english": "My... 'Frozen Charge'! Here I come!",
						"japanese": "僕の…「氷結突進」！行くぞ！",
						"chinese": "我的……“冰结突进”！来了！",
						"french": "Ma... \"Charge Glaciale\" ! C'est parti !",
						"spanish": "¡Mi... 'Carga Congelada'! ¡Allá voy!",
						"vietnamese": "\"Xung phong Băng Giá\" của tôi! Đi thôi!",
						"thai": "\"พุ่งทะลวงเยือกแข็ง\" ของฉัน! ไปเลย!",
						"hindi": "मेरा... 'फ़्रोजन चार्ज'! मैं आ गया!"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "핫팩은 어디다 숨겼더라.",
						"english": "Where did I hide the hot pack?",
						"japanese": "カイロはどこに隠したっけな。",
						"chinese": "暖宝宝藏哪儿了？",
						"french": "Où avais-je caché le chauffe-mains ?",
						"spanish": "¿Dónde habré escondido el calentador de manos?",
						"vietnamese": "Mình giấu miếng dán giữ nhiệt ở đâu nhỉ?",
						"thai": "ซ่อนแผ่นประคบร้อนไว้ที่ไหนนะ.",
						"hindi": "हॉट पैक कहाँ छिपाया था?"
					},
					"type": "speech",
					"speaker": "character_3"
				},
				{
					"content": {
						"korean": "…어쩌면 저게… 그의 진심일지도 몰라.",
						"english": "...Perhaps that... might be his true feelings.",
						"japanese": "…もしかしたらあれが…彼の本心なのかもしれない。",
						"chinese": "……或许，那才是……他的真心。",
						"french": "...Peut-être que c'est... sa véritable intention.",
						"spanish": "...Quizás eso... sea su verdadera intención.",
						"vietnamese": "...Có lẽ đó... là tấm lòng thật của anh ấy.",
						"thai": "...บางทีนั่นอาจเป็น... ความรู้สึกที่แท้จริงของเขา.",
						"hindi": "...शायद वह... उसकी असली भावनाएँ हों।"
					},
					"emotion": "base",
					"speaker": "frost",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						2,
						2
					],
					"speaker": "frost",
					"action": "enter",
					"duration_ms": 550,
					"type": "direction"
				},
				{
					"content": {
						"korean": "마지막 한 판… 진심으로 부딪쳐줘야 해.",
						"english": "One last round... I have to give it my all.",
						"japanese": "最後の一戦…本気でぶつからなきゃ。",
						"chinese": "最后一局……必须全力以赴。",
						"french": "Un dernier tour... Je dois y aller avec tout mon cœur.",
						"spanish": "La última ronda... tengo que enfrentarla con toda mi sinceridad.",
						"vietnamese": "Ván cuối cùng... phải dốc hết lòng mà chiến đấu.",
						"thai": "รอบสุดท้าย... ต้องสู้ให้เต็มที่.",
						"hindi": "आख़िरी राउंड... मुझे पूरी लगन से मुकाबला करना होगा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "frost"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "뭘 어쩌라는 거야?",
						"english": "What am I supposed to do?",
						"japanese": "どうしろって言うんだ？",
						"chinese": "你想让我做什么？",
						"french": "Qu'est-ce que tu veux que je fasse ?",
						"spanish": "¿Qué quieres que haga?",
						"vietnamese": "Ngươi muốn ta làm gì?",
						"thai": "อยากให้ฉันทำอะไร?",
						"hindi": "मैं क्या करूँ?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "간다! 나의… '영구 동토!' 받아라!",
						"english": "Go! My... 'Permafrost!' Take this!",
						"japanese": "行くぞ！我が…「永久凍土」！受け取れ！",
						"chinese": "我来了！我的…“永冻土”！接招吧！",
						"french": "C'est parti ! Mon... 'Pergélisol' ! Prends ça !",
						"spanish": "¡Aquí voy! ¡Mi... 'Permafrost'! ¡Toma esto!",
						"vietnamese": "Đến đây! Của ta… 'Vĩnh cửu Băng Giá!' Nhận lấy!",
						"thai": "ไปเลย! 'ดินแดนเยือกแข็งถาวร' ของข้า! รับไปซะ!",
						"hindi": "मैं आ रहा हूँ! मेरी... 'पर्माफ़्रॉस्ट!' इसे लो!"
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "돌진 직전, 정체 모를 자의 시선이 탐험대의 핫팩을 또 한 번 흘끔거렸다. 그것은 갈망이었다.",
						"english": "Right before the charge, an unknown individual's gaze darted at the expedition team's hot packs again. It was pure longing.",
						"japanese": "突進直前、正体不明の者の視線が、探検隊のカイロをもう一度ちらりと見た。それは渇望だった。",
						"chinese": "冲锋前夕，一个不明身份的目光再次瞥向了探险队的暖宝宝。那是渴望。",
						"french": "Avant l'assaut, un regard inconnu glissa une fois de plus vers les compresses chauffantes de l'expédition. C'était de la convoitise.",
						"spanish": "Justo antes de la carga, la mirada de un desconocido se posó una vez más en los parches calientes del equipo de expedición. Era anhelo.",
						"vietnamese": "Ngay trước khi xông lên, ánh mắt của một kẻ lạ mặt lại lướt qua gói giữ nhiệt của đội thám hiểm. Đó là sự khao khát.",
						"thai": "ก่อนการพุ่งโจมตี สายตาของใครบางคนที่ไม่รู้จักเหลือบมองแผ่นประคบร้อนของทีมสำรวจอีกครั้ง มันคือความปรารถนา",
						"hindi": "हमले से ठीक पहले, एक अज्ञात व्यक्ति की नज़र फिर से अभियान दल के हॉट पैक पर पड़ी। वह लालसा थी।"
					},
					"emotion": "base"
				},
				{
					"speaker": "frost",
					"type": "speech",
					"content": {
						"korean": "…내가 온기를 건네겠어. 그의 얼어붙은 마음에.",
						"english": "...I'll give him warmth. To his frozen heart.",
						"japanese": "…私が温もりを渡そう。彼の凍てついた心に。",
						"chinese": "…我会把温暖给他。给他那颗冰冷的心。",
						"french": "…Je lui offrirai de la chaleur. À son cœur gelé.",
						"spanish": "...Le daré calor. A su corazón helado.",
						"vietnamese": "…Ta sẽ trao hơi ấm. Đến trái tim băng giá của hắn.",
						"thai": "…ฉันจะมอบความอบอุ่น. แด่หัวใจที่แข็งกระด้างของเขา.",
						"hindi": "...मैं उसे गर्माहट दूँगी। उसके जमे हुए दिल को।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"duration_ms": 400,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "frost",
					"action": "enter"
				},
				{
					"speaker": "frost",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "따뜻하죠? 더 이상 혼자 얼어붙지 마요.",
						"english": "Feel warm now? Don't freeze by yourself anymore.",
						"japanese": "暖かいでしょう？もう一人で凍えないでください。",
						"chinese": "暖和了吧？别再一个人受冻了。",
						"french": "Vous avez chaud, n'est-ce pas ? Ne congelez plus seul.",
						"spanish": "¿Está cálido, verdad? No te congeles solo nunca más.",
						"vietnamese": "Ấm áp phải không? Đừng một mình chịu lạnh nữa.",
						"thai": "อบอุ่นใช่ไหม? อย่าหนาวเหน็บคนเดียวอีกเลยนะ.",
						"hindi": "गर्म है ना? अब और अकेले मत जमना।"
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "…이 온기는… 뭐지? 처음 느껴보는….",
						"english": "...This warmth... what is it? I've never felt this before...",
						"japanese": "…この温もりは…何だ？初めて感じる…",
						"chinese": "…这份温暖…是什么？我从未感受过…",
						"french": "…Cette chaleur… qu'est-ce que c'est ? Je n'ai jamais ressenti ça auparavant…",
						"spanish": "...Este calor... ¿qué es? Nunca lo había sentido...",
						"vietnamese": "…Hơi ấm này… là gì? Lần đầu tiên ta cảm nhận được…",
						"thai": "…ความอบอุ่นนี้…คืออะไร? ไม่เคยรู้สึกมาก่อนเลย…",
						"hindi": "...यह गर्माहट... क्या है? मैंने पहले कभी महसूस नहीं की..."
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…그냥 핫팩이었어.",
						"english": "...It was just a hot pack.",
						"japanese": "…ただのカイロだった。",
						"chinese": "…只是个暖宝宝而已。",
						"french": "…C'était juste une compresse chauffante.",
						"spanish": "...Solo era un parche caliente.",
						"vietnamese": "…Chỉ là một gói giữ nhiệt thôi mà.",
						"thai": "…ก็แค่แผ่นประคบร้อนเอง.",
						"hindi": "...बस एक हॉट पैक था।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "얼음으로 뒤덮인 설산에, 작은 온기가 피어났다. 얼어붙었던 모든 것이 녹아내리는 듯했다.",
						"english": "A small warmth emerged in the ice-covered snow mountain. Everything frozen seemed to melt away.",
						"japanese": "氷に覆われた雪山に、小さな温もりが生まれた。凍てついていた全てが溶け出すかのようだった。",
						"chinese": "冰雪覆盖的雪山中，一丝暖意悄然升起。仿佛所有冻结之物都开始融化。",
						"french": "Une douce chaleur émergea dans la montagne enneigée et glacée. Tout ce qui était gelé semblait fondre.",
						"spanish": "Un pequeño calor surgió en la montaña nevada cubierta de hielo. Todo lo congelado parecía derretirse.",
						"vietnamese": "Một chút ấm áp bừng lên giữa núi tuyết phủ băng. Mọi thứ đóng băng dường như tan chảy.",
						"thai": "ความอบอุ่นเล็กๆ เกิดขึ้นบนภูเขาหิมะที่ปกคลุมไปด้วยน้ำแข็ง ทุกสิ่งทุกอย่างที่แข็งตัวราวกับกำลังละลายไป",
						"hindi": "बर्फ़ से ढके बर्फीले पहाड़ में, एक छोटी सी गर्माहट पैदा हुई। मानो जमी हुई हर चीज़ पिघलने लगी हो।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"spot": [
						3,
						2
					],
					"speaker": "frost",
					"action": "enter",
					"duration_ms": 400,
					"type": "direction"
				},
				{
					"speaker": "frost",
					"type": "speech",
					"content": {
						"korean": "…좀 더 강한 온기가 필요했나.",
						"english": "...Was a stronger warmth needed?",
						"japanese": "…もっと強い温もりが必要だったか。",
						"chinese": "……是需要更强的暖意吗？",
						"french": "...Une chaleur plus forte était-elle nécessaire ?",
						"spanish": "¿...Se necesitaba un calor más fuerte?",
						"vietnamese": "...Có lẽ cần một hơi ấm mạnh hơn chăng.",
						"thai": "...หรือว่าต้องการความอบอุ่นที่แรงกว่านี้กันนะ",
						"hindi": "...क्या और तेज़ गर्माहट की ज़रूरत थी?"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…겨우 이 정도인가. 아직 멀었군.",
						"english": "...Is this all? Still a long way to go.",
						"japanese": "…たったこれだけか。まだまだだな。",
						"chinese": "……就到此为止了吗？还差得远呢。",
						"french": "...C'est tout ? Le chemin est encore long.",
						"spanish": "...¿Solo esto? Aún queda mucho.",
						"vietnamese": "...Chỉ có thế này thôi sao. Còn xa lắm.",
						"thai": "...แค่นี้เองเหรอ ยังอีกไกลเลย",
						"hindi": "...बस इतना ही? अभी तो बहुत दूर है।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "젠장… 핫팩은 손에 쥐여줬는데!",
						"english": "Damn it... I gave them a hot pack!",
						"japanese": "ちくしょう… ホットパックは手に握らせたのに！",
						"chinese": "该死……明明把暖手宝都塞到手里了！",
						"french": "Bon sang... Je leur avais donné un chauffe-mains !",
						"spanish": "¡Maldita sea... Les di un calentador de manos!",
						"vietnamese": "Chết tiệt... Mình đã đưa túi sưởi cho rồi mà!",
						"thai": "ให้ตายสิ... ให้ฮอตแพ็คไปแล้วแท้ๆ!",
						"hindi": "धिक्कार है... मैंने तो हॉट पैक हाथ में दिया था!"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "차가운 빙판 위, 식어가는 핫팩이 쓸쓸히 놓여 있었다. 여정은 끝나지 않았다.",
						"english": "On the cold ice, a cooling hot pack lay lonely. The journey was not over.",
						"japanese": "冷たい氷の上、冷めていくホットパックが寂しく置かれていた。旅は終わっていなかった。",
						"chinese": "冰冷的冰面上，冷却的暖手宝孤零零地躺着。旅程尚未结束。",
						"french": "Sur la glace froide, un chauffe-mains refroidissant gisait solitairement. Le voyage n'était pas terminé.",
						"spanish": "Sobre el hielo frío, un calentador de manos que se enfriaba yacía solitario. El viaje no había terminado.",
						"vietnamese": "Trên nền băng lạnh, chiếc túi sưởi nguội dần nằm đó cô độc. Hành trình vẫn chưa kết thúc.",
						"thai": "บนลานน้ำแข็งอันหนาวเย็น ฮอตแพ็คที่กำลังเย็นลงถูกวางทิ้งไว้อย่างโดดเดี่ยว การเดินทางยังไม่สิ้นสุด",
						"hindi": "ठंडी बर्फ़ की सतह पर, एक ठंडा होता हॉट पैक अकेला पड़ा था। यात्रा अभी समाप्त नहीं हुई थी।"
					},
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이것으로… 끝이다! 나의… '절대 영점 공격'!",
						"english": "This is... the end! My... 'Absolute Zero Attack'!",
						"japanese": "これで…終わりだ！我が…「絶対零度攻撃」！",
						"chinese": "到此…为止！我的…“绝对零度攻击”！",
						"french": "C'est la fin... avec ça ! Mon... 'Attaque Zéro Absolu' !",
						"spanish": "Con esto... ¡se acabó! ¡Mi... 'Ataque Cero Absoluto'!",
						"vietnamese": "Bằng cái này… kết thúc rồi! Của ta… 'Tuyệt đối Không Độ Tấn Công'!",
						"thai": "ด้วยสิ่งนี้… จบสิ้น! 'การโจมตีศูนย์สัมบูรณ์' ของข้า!",
						"hindi": "इसके साथ... यह खत्म! मेरा... 'एब्सोल्यूट ज़ीरो अटैक'!"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "막아내! 진짜 온 힘을 다하잖아!",
						"english": "Defend yourself! He's putting his full power into it!",
						"japanese": "防ぎきれ！本当に全力だぞ！",
						"chinese": "挡住！他真的使出全力了！",
						"french": "Défends-toi ! Il donne vraiment tout ce qu'il a !",
						"spanish": "¡Bloquéalo! ¡Está dando todo de sí!",
						"vietnamese": "Chặn lại! Hắn ta dồn toàn lực rồi!",
						"thai": "ป้องกันไว้! เขาทุ่มสุดตัวแล้ว!",
						"hindi": "इसे रोको! वह सचमुच अपनी पूरी ताकत लगा रहा है!"
					},
					"emotion": "base"
				},
				{
					"action": "enter",
					"speaker": "frost",
					"spot": [
						5,
						2
					],
					"type": "direction",
					"duration_ms": 600
				},
				{
					"content": {
						"korean": "잠깐! 이걸… 받아!",
						"english": "Hold on! Catch... this!",
						"japanese": "待て！これを…受け取れ！",
						"chinese": "等等！拿着…这个！",
						"french": "Attends ! Prends... ça !",
						"spanish": "¡Espera! ¡Toma... esto!",
						"vietnamese": "Chờ chút! Nhận lấy… cái này!",
						"thai": "เดี๋ยว! รับ… นี่ไป!",
						"hindi": "रुको! यह... लो!"
					},
					"emotion": "happy",
					"speaker": "frost",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"세계수의 심장, 설산 정상.",
			"핀은 빈 빙판 위에 홀로 섰다. 옥좌도, 허세도 없이.",
			"마지막 일격을 준비하는 그의 시선은,",
			"어째서인지 자꾸만 핫팩을 향했다."
		],
		"english": [
			"Heart of the World Tree, mountaintop.",
			"Finn stood alone on the empty ice. No throne, no pretense.",
			"As he prepared for the final blow, his gaze,",
			"for some reason, kept drifting towards the hot pack."
		],
		"japanese": [
			"世界樹の心臓、雪山の頂上。",
			"フィンは空虚な氷の上に一人で立っていた。玉座もなく、虚勢もなく。",
			"最後の一撃を準備する彼の視線は、",
			"なぜか、しきりにカイロの方へ向かっていた。"
		],
		"chinese": [
			"世界树之心，雪山之巅。",
			"芬恩独自站在空旷的冰面上。无王座，无虚饰。",
			"准备最后一击的他，目光却——",
			"却不知为何，屡屡投向了暖宝宝。"
		],
		"french": [
			"Cœur de l'Arbre-Monde, sommet enneigé.",
			"Finn se tenait seul sur la glace vide. Sans trône ni prétention.",
			"Alors qu'il préparait le coup final, son regard,",
			"pour une raison ou une autre, ne cessait de se diriger vers le chauffe-main."
		],
		"spanish": [
			"Corazón del Árbol del Mundo, cima de la montaña.",
			"Finn se paró solo sobre el hielo vacío. Sin trono, sin pretensiones.",
			"Mientras se preparaba para el golpe final, su mirada,",
			"por alguna razón, no dejaba de dirigirse a la bolsa térmica."
		],
		"vietnamese": [
			"Trái tim Cây Thế Giới, đỉnh núi tuyết.",
			"Finn đứng một mình trên băng trống. Không ngai vàng, không phô trương.",
			"Khi chuẩn bị cho đòn cuối cùng, ánh mắt anh ấy,",
			"không hiểu sao, cứ hướng về chiếc túi sưởi."
		],
		"thai": [
			"หัวใจแห่งต้นไม้โลก, ยอดเขาหิมะ.",
			"ฟินน์ยืนอยู่ลำพังบนผืนน้ำแข็งที่ว่างเปล่า ไม่มีบัลลังก์ ไม่มีท่าทีโอ้อวด.",
			"ขณะที่เขากำลังเตรียมพร้อมสำหรับการโจมตีครั้งสุดท้าย สายตาของเขา,",
			"ด้วยเหตุผลบางอย่าง กลับจับจ้องไปที่ถุงร้อน."
		],
		"hindi": [
			"विश्व वृक्ष का हृदय, बर्फीले पहाड़ की चोटी。",
			"फिन खाली बर्फ पर अकेला खड़ा था। न कोई सिंहासन, न कोई दिखावा।",
			"अंतिम प्रहार की तैयारी करते हुए, उसकी नज़र,",
			"किसी कारण से, बार-बार हॉट पैक की ओर जा रही थी।"
		]
	}
} as const;
