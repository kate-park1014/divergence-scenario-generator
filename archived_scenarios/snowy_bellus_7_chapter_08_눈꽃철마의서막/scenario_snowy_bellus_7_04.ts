export const scenario_snowy_bellus_7_04 = {
	"scenario_id": "snowy_bellus_7_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"ivar": {
			"id": "mon_d8a80adc-9315-47b5-8c30-97ce33672bce",
			"name": {
				"korean": "이바르",
				"english": "Ivar",
				"japanese": "イヴァー",
				"chinese": "伊瓦尔",
				"french": "Ivar",
				"spanish": "Ivar",
				"vietnamese": "Ivar",
				"thai": "ไอวาร์",
				"hindi": "इवर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8dd7872b-d4df-44fd-b1a1-083a9156e700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2622fb62-daf4-42d1-a83b-2b78869d3e00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"벨루스가 움직였다. 거대한 그림자가 탐험대를 덮쳤다.",
			"도망쳐도, 달려도, 끝없이 쫓아오는 압박감.",
			"시간이 멈춘 설원 위, 필사의 추격전이 시작된다."
		],
		"english": [
			"Bellus moved. A colossal shadow enveloped the expedition.",
			"Fleeing, running, an endlessly pursuing pressure.",
			"On a snowfield where time stands still, a desperate chase begins."
		],
		"japanese": [
			"ベルルスが動いた。巨大な影が探検隊を覆った。",
			"逃げても、走っても、終わりなく追いかけてくる圧迫感。",
			"時が止まった雪原の上、必死の追撃戦が始まる。"
		],
		"chinese": [
			"贝鲁斯动了。巨大的阴影笼罩了探险队。",
			"无论逃跑还是奔跑，压迫感都无休止地追来。",
			"在时间停滞的雪原上，一场绝命追击战开始了。"
		],
		"french": [
			"Bellus a bougé. Une ombre colossale a enveloppé l'expédition.",
			"Fuir, courir, une pression sans fin qui nous poursuit.",
			"Sur un champ de neige où le temps est figé, une course-poursuite désespérée commence."
		],
		"spanish": [
			"Bellus se movió. Una sombra colosal envolvió a la expedición.",
			"Huir, correr, una presión que nos persigue sin cesar.",
			"Sobre un campo de nieve donde el tiempo se detuvo, comienza una persecución desesperada."
		],
		"vietnamese": [
			"Bellus đã di chuyển. Một cái bóng khổng lồ bao trùm đoàn thám hiểm.",
			"Dù chạy trốn hay vội vã, áp lực truy đuổi vẫn không ngừng.",
			"Trên cánh đồng tuyết nơi thời gian ngừng lại, một cuộc truy đuổi tuyệt vọng bắt đầu."
		],
		"thai": [
			"เบลลัสเคลื่อนไหวแล้ว เงาขนาดมหึมาปกคลุมคณะสำรวจ",
			"หนีไป วิ่งไป แรงกดดันที่ไล่ตามไม่สิ้นสุด",
			"บนทุ่งหิมะที่กาลเวลาหยุดนิ่ง การไล่ล่าอย่างสิ้นหวังเริ่มต้นขึ้น"
		],
		"hindi": [
			"बेलस हिल गया। एक विशालकाय छाया ने अभियान को घेर लिया।",
			"भागो, दौड़ो, एक अंतहीन पीछा करने वाला दबाव।",
			"एक बर्फीले मैदान पर जहां समय थम गया है, एक हताश पीछा शुरू होता है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "벨루스가 움직였다. 유령처럼 다가오는 거대한 열차.",
						"english": "Bellus moved. A colossal train approaches like a ghost.",
						"japanese": "ベルルスが動いた。幽霊のように迫る巨大な列車。",
						"chinese": "贝鲁斯动了。一列巨大的火车像幽灵般逼近。",
						"french": "Bellus a bougé. Un train colossal approche comme un fantôme.",
						"spanish": "Bellus se movió. Un tren colosal se acerca como un fantasma.",
						"vietnamese": "Bellus đã di chuyển. Một đoàn tàu khổng lồ đang đến gần như một bóng ma.",
						"thai": "เบลลัสเคลื่อนไหวแล้ว รถไฟขนาดมหึมากำลังเคลื่อนเข้ามาเหมือนผี",
						"hindi": "बेलस हिल गया। एक विशाल ट्रेन भूत की तरह आ रही है।"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이 속도로는… 곧 잡히겠어!",
						"english": "At this speed... we'll be caught soon!",
						"japanese": "この速さでは…すぐ捕まるぞ！",
						"chinese": "以这个速度……很快就会被抓住了！",
						"french": "À cette vitesse… nous serons bientôt rattrapés !",
						"spanish": "¡A esta velocidad... pronto nos atraparán!",
						"vietnamese": "Với tốc độ này... chúng ta sẽ bị tóm gọn sớm thôi!",
						"thai": "ด้วยความเร็วขนาดนี้... เราจะถูกจับได้ในไม่ช้า!",
						"hindi": "इस गति से... हम जल्द ही पकड़े जाएंगे!"
					}
				},
				{
					"speaker": "ivar",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"emotion": "base",
					"speaker": "ivar",
					"content": {
						"korean": "진정해! 저쪽 틈으로 가면 길을 우회할 수 있다!",
						"english": "Calm down! We can bypass the path through that gap!",
						"japanese": "落ち着け！あの隙間を通れば、道を迂回できる！",
						"chinese": "冷静！从那个缝隙过去，可以绕道而行！",
						"french": "Calmez-vous ! Nous pouvons contourner le chemin par cette brèche !",
						"spanish": "¡Cálmate! ¡Podemos desviar el camino por esa grieta!",
						"vietnamese": "Bình tĩnh! Chúng ta có thể đi đường vòng qua khe hở kia!",
						"thai": "ใจเย็น! เราสามารถอ้อมไปทางช่องว่างนั้นได้!",
						"hindi": "शांत हो जाओ! हम उस खाई से रास्ता बाईपास कर सकते हैं!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "막혔어! 얼어붙은 빙벽이야!",
						"english": "It's blocked! A frozen ice wall!",
						"japanese": "塞がれてる！凍りついた氷壁だ！",
						"chinese": "堵住了！是冰冻的冰墙！",
						"french": "C'est bloqué ! Un mur de glace gelé !",
						"spanish": "¡Está bloqueado! ¡Es una pared de hielo congelada!",
						"vietnamese": "Bị chặn rồi! Là một bức tường băng giá lạnh!",
						"thai": "มันถูกบล็อก! กำแพงน้ำแข็งที่แข็งตัว!",
						"hindi": "यह अवरुद्ध है! एक जमी हुई बर्फ की दीवार है!"
					},
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"speaker": "ivar",
					"content": {
						"korean": "젠장…!",
						"english": "Damn it...!",
						"japanese": "くそっ…！",
						"chinese": "该死……！",
						"french": "Merde… !",
						"spanish": "¡Maldición…!",
						"vietnamese": "Chết tiệt...!",
						"thai": "บ้าจริง...!",
						"hindi": "धिक्कार है...!"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "열차는 멈추지 않았다. 탐험대의 뒤를 끈질기게 쫓아왔다.",
						"english": "The train didn't stop. It relentlessly pursued the expedition.",
						"japanese": "列車は止まらなかった。探検隊の背後を執拗に追い続けた。",
						"chinese": "火车没有停。它顽强地追赶着探险队。",
						"french": "Le train ne s'est pas arrêté. Il a poursuivi l'expédition sans relâche.",
						"spanish": "El tren no se detuvo. Persiguió a la expedición sin tregua.",
						"vietnamese": "Đoàn tàu không dừng lại. Nó không ngừng truy đuổi đoàn thám hiểm.",
						"thai": "รถไฟไม่หยุด มันไล่ตามคณะสำรวจอย่างไม่ลดละ",
						"hindi": "ट्रेन नहीं रुकी। इसने अभियान का लगातार पीछा किया।"
					},
					"type": "speech"
				},
				{
					"speaker": "ivar",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						4
					]
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "속도가 점점 빨라지고 있어. 예상보다 훨씬 위험해!",
						"english": "The speed is increasing. It's much more dangerous than expected!",
						"japanese": "速度がどんどん上がっている。予想よりもはるかに危険だ！",
						"chinese": "速度越来越快了。比想象中危险得多！",
						"french": "La vitesse augmente. C'est bien plus dangereux que prévu !",
						"spanish": "La velocidad está aumentando. ¡Es mucho más peligroso de lo esperado!",
						"vietnamese": "Tốc độ đang tăng lên. Nguy hiểm hơn nhiều so với dự kiến!",
						"thai": "ความเร็วกำลังเพิ่มขึ้น มันอันตรายกว่าที่คาดไว้มาก!",
						"hindi": "गति बढ़ती जा रही है। यह उम्मीद से कहीं ज़्यादा खतरनाक है!"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "어떡해야 해…!",
						"english": "What should I do...!",
						"japanese": "どうすればいいんだ…！",
						"chinese": "我该怎么办…！",
						"french": "Que faire… !",
						"spanish": "¡¿Qué hago…?!",
						"vietnamese": "Phải làm sao đây…!",
						"thai": "ทำยังไงดี…!",
						"hindi": "मैं क्या करूँ…!"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "최대한 버텨야 해! 저쪽 빙벽을… 부순다!",
						"english": "We have to hold out as long as possible! Break that ice wall...!",
						"japanese": "なんとか持ちこたえるんだ！あの氷壁を…壊す！",
						"chinese": "必须尽可能地撑下去！把那边的冰墙…打破！",
						"french": "Il faut tenir le coup le plus longtemps possible ! Détruisez ce mur de glace… !",
						"spanish": "¡Tenemos que aguantar todo lo posible! ¡Esa pared de hielo... la romperé!",
						"vietnamese": "Phải cầm cự hết sức! Phá bức tường băng kia…!",
						"thai": "ต้องต้านไว้ให้มากที่สุด! ทำลายกำแพงน้ำแข็งนั่น…!",
						"hindi": "हमें ज़्यादा से ज़्यादा देर तक टिके रहना होगा! उस बर्फीली दीवार को... तोड़ो!"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "벨루스 기관차의 거대한 시계 바늘이, 반대로 돌고 있었다.",
						"english": "The enormous clock hands of the Bellus locomotive were turning backward.",
						"japanese": "ベロス機関車の巨大な時計の針が、逆向きに回っていた。",
						"chinese": "贝罗斯机车巨大的时针，正在反向转动。",
						"french": "Les aiguilles gigantesques de l'horloge de la locomotive Bellus tournaient à l'envers.",
						"spanish": "Las enormes manecillas del reloj de la locomotora Bellus giraban en sentido contrario.",
						"vietnamese": "Kim đồng hồ khổng lồ của đầu máy Bellus đang quay ngược.",
						"thai": "เข็มนาฬิกายักษ์ของหัวรถจักรเบลลัสกำลังหมุนย้อนกลับ",
						"hindi": "बेलुस लोकोमोटिव की विशाल घड़ी की सुइयां उल्टी घूम रही थीं।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "시계 바늘이… 거꾸로 가고 있어…!",
						"english": "The clock hands... they're going backward...!",
						"japanese": "時計の針が…逆行してる…！",
						"chinese": "时针…在倒转…！",
						"french": "Les aiguilles de l'horloge… tournent à l'envers… !",
						"spanish": "¡Las manecillas… van al revés…!",
						"vietnamese": "Kim đồng hồ… đang quay ngược…!",
						"thai": "เข็มนาฬิกา… กำลังย้อนกลับ…!",
						"hindi": "घड़ी की सुइयां… उल्टी चल रही हैं…!"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "벨루스의 엔진 소리가 고막을 찢을 듯했다. 거대한 그림자가 숨통을 조여왔다.",
						"english": "The roar of Bellus's engine was deafening. A colossal shadow tightened its grip.",
						"japanese": "ベロスのエンジン音が鼓膜を破るようだった。巨大な影が息の根を締めつけてきた。",
						"chinese": "贝罗斯的引擎声震耳欲聋。巨大的阴影步步紧逼。",
						"french": "Le rugissement du moteur de Bellus déchirait les tympans. Une ombre colossale nous étouffait.",
						"spanish": "El rugido del motor de Bellus casi nos rompía los tímpanos. Una sombra gigantesca nos ahogaba.",
						"vietnamese": "Tiếng động cơ của Bellus như xé toạc màng nhĩ. Một cái bóng khổng lồ đang bóp nghẹt.",
						"thai": "เสียงเครื่องยนต์ของเบลลัสดังสนั่นหวั่นไหวราวกับจะฉีกแก้วหู เงาขนาดมหึมากำลังบีบคั้น",
						"hindi": "बेलुस के इंजन की आवाज़ कान के परदे फाड़ रही थी। एक विशाल छाया गला घोंट रही थी।"
					},
					"emotion": "base"
				},
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "ivar",
					"type": "direction"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "더 이상 속도를 낼 곳이 없어! 완전히 포위당했어!",
						"english": "There's nowhere left to speed up! We're completely surrounded!",
						"japanese": "もう加速する場所がない！完全に包囲された！",
						"chinese": "已经无处加速了！我们被完全包围了！",
						"french": "Plus d'endroit pour accélérer ! Nous sommes complètement encerclés !",
						"spanish": "¡No hay dónde acelerar más! ¡Estamos completamente rodeados!",
						"vietnamese": "Không còn chỗ để tăng tốc nữa! Bị bao vây hoàn toàn rồi!",
						"thai": "ไม่มีที่ให้เร่งความเร็วอีกแล้ว! เราถูกล้อมรอบหมดแล้ว!",
						"hindi": "अब और तेज़ जाने की जगह नहीं है! हम पूरी तरह घिर चुके हैं!"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "잡히겠어…!",
						"english": "They're going to catch us...!",
						"japanese": "捕まるぞ…！",
						"chinese": "要被抓住了…！",
						"french": "On va se faire attraper… !",
						"spanish": "¡Nos van a atrapar…!",
						"vietnamese": "Sẽ bị bắt mất…!",
						"thai": "จะโดนจับแล้ว…!",
						"hindi": "पकड़े जाएंगे…!"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"speaker": "ivar",
					"content": {
						"korean": "아직 포기하지 마! 난 절대 여기서 멈추지 않아!",
						"english": "Don't give up yet! I'm not stopping here!",
						"japanese": "まだ諦めるな！俺は絶対ここで止まらない！",
						"chinese": "还没到放弃的时候！我绝不会在这里停下！",
						"french": "Ne lâche rien ! Je ne m'arrêterai jamais ici !",
						"spanish": "¡No te rindas aún! ¡Yo nunca me detendré aquí!",
						"vietnamese": "Đừng bỏ cuộc vội! Tôi tuyệt đối sẽ không dừng lại ở đây!",
						"thai": "อย่าเพิ่งยอมแพ้! ฉันจะไม่มีวันหยุดที่นี่!",
						"hindi": "अभी हार मत मानो! मैं यहां कभी नहीं रुकूंगा!"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "저 시선… 우리를 꿰뚫어 보는 것 같아…!",
						"english": "That gaze... it feels like it's piercing through us...!",
						"japanese": "あの視線…俺たちを貫いてるみたいだ…！",
						"chinese": "那目光…仿佛能把我们看穿…！",
						"french": "Ce regard… il semble nous transpercer… !",
						"spanish": "¡Esa mirada… parece atravesarnos…!",
						"vietnamese": "Ánh nhìn đó… như đang xuyên thấu chúng ta…!",
						"thai": "สายตานั่น… เหมือนกำลังทะลุปรุโปร่งพวกเรา…!",
						"hindi": "वो नज़र… ऐसा लगता है कि हमें आर-पार देख रही है…!"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "마지막 통로가 눈앞이었다. 그러나 벨루스는 이미 코앞까지 쫓아왔다.",
						"english": "The last passage was in sight. But Bellus was already right on our heels.",
						"japanese": "最後の通路が目の前だった。しかし、ベロスはもうすぐそこまで追いついていた。",
						"chinese": "最后的通道就在眼前。然而贝罗斯已经近在咫尺。",
						"french": "Le dernier passage était en vue. Mais Bellus était déjà à nos trousses.",
						"spanish": "El último pasaje estaba a la vista. Pero Bellus ya nos pisaba los talones.",
						"vietnamese": "Lối đi cuối cùng đã ở trước mắt. Nhưng Bellus đã đuổi đến sát nút.",
						"thai": "ทางเดินสุดท้ายอยู่ตรงหน้าแล้ว แต่เบลลัสก็ไล่ตามมาติดๆ",
						"hindi": "आखिरी रास्ता सामने था। लेकिन बेलुस पहले ही बिल्कुल नज़दीक आ चुका था।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "direction",
					"speaker": "ivar",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						1,
						3
					]
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "여기서 멈추면 끝이야! 돌파한다!",
						"english": "Stopping here means the end! Break through!",
						"japanese": "ここで止まれば終わりだ！突破する！",
						"chinese": "止步于此便是终结！突破！",
						"french": "S'arrêter ici, c'est la fin ! Percée !",
						"spanish": "¡Parar aquí significa el fin! ¡Avanzamos!",
						"vietnamese": "Dừng lại ở đây là kết thúc! Xông lên!",
						"thai": "ถ้าหยุดตรงนี้ก็จบกัน! ฝ่าไปเลย!",
						"hindi": "यहां रुकना मतलब अंत है! आगे बढ़ो!"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "무리야! 너무 가까워!",
						"english": "Impossible! Too close!",
						"japanese": "無理だ！近すぎる！",
						"chinese": "不可能！太近了！",
						"french": "Impossible ! Trop proche !",
						"spanish": "¡Imposible! ¡Demasiado cerca!",
						"vietnamese": "Không thể được! Gần quá!",
						"thai": "เป็นไปไม่ได้! ใกล้เกินไป!",
						"hindi": "असंभव! बहुत करीब है!"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "나는 강함의 끝을 볼 때까지 멈추지 않아! 비켜라!",
						"english": "I won't stop until I see the end of strength! Move aside!",
						"japanese": "強さの果てを見るまで止まらない！退け！",
						"chinese": "除非看到力量的尽头，否则我绝不停止！让开！",
						"french": "Je ne m'arrêterai pas tant que je n'aurai pas vu la limite de la force ! Écartez-vous !",
						"spanish": "¡No me detendré hasta que vea el límite de la fuerza! ¡Apartaos!",
						"vietnamese": "Ta sẽ không dừng lại cho đến khi thấy được giới hạn của sức mạnh! Tránh ra!",
						"thai": "ฉันจะไม่หยุดจนกว่าจะได้เห็นจุดสิ้นสุดของพลัง! หลีกไป!",
						"hindi": "मैं शक्ति का अंत देखने तक नहीं रुकूंगा! हट जाओ!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 굉음과 함께, 벨루스의 그림자가 탐험대를 덮쳤다.",
						"english": "With a mighty roar, the shadow of Bellus engulfed the expedition team.",
						"japanese": "轟音と共に、ベルスの影が探検隊を覆った。",
						"chinese": "伴随着巨大的轰鸣声，贝鲁斯的阴影笼罩了探险队。",
						"french": "Avec un rugissement puissant, l'ombre de Bellus engloutit l'équipe d'expédition.",
						"spanish": "Con un estruendo gigantesco, la sombra de Bellus cubrió al equipo de expedición.",
						"vietnamese": "Cùng với tiếng gầm vang dội, bóng tối của Bellus bao trùm đội thám hiểm.",
						"thai": "พร้อมกับเสียงคำรามกึกก้อง เงาของเบลลัสก็กลืนกินทีมสำรวจ",
						"hindi": "एक भयानक गर्जना के साथ, बेलस की छाया ने अभियान दल को निगल लिया।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 겨우 이 정도인가… 진정한 시간의 주인은… 아직 잠들어 있을 뿐….",
						"english": "Ugh... Is this all there is...? The true master of time... merely slumbers still....",
						"japanese": "くっ…これだけか…真の時間の主は…まだ眠っているだけだ…。",
						"chinese": "呃…就这点程度吗…真正的时间之主…还只是在沉睡而已…。",
						"french": "Urgh... N'est-ce que cela...? Le véritable maître du temps... ne fait que sommeiller encore...",
						"spanish": "Uf... ¿Esto es todo...? El verdadero señor del tiempo... solo duerme aún....",
						"vietnamese": "Khặc… chỉ đến mức này thôi sao… Chủ nhân thực sự của thời gian… vẫn còn đang ngủ say mà thôi….",
						"thai": "อึก...แค่เท่านี้เองรึ...นายแห่งเวลาที่แท้จริง...ยังคงหลับใหลอยู่เท่านั้น...",
						"hindi": "उह... क्या बस इतना ही...? समय का सच्चा स्वामी... बस अभी भी सो रहा है...।"
					},
					"type": "speech"
				},
				{
					"emotion": "happy",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "끝났어… 겨우.",
						"english": "It's over... Barely.",
						"japanese": "終わった…やっと。",
						"chinese": "结束了…总算。",
						"french": "C'est fini... tout juste.",
						"spanish": "Se acabó... Apenas.",
						"vietnamese": "Kết thúc rồi… Cuối cùng.",
						"thai": "จบแล้ว... ในที่สุด",
						"hindi": "खत्म हुआ… जैसे-तैसे।"
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "ivar",
					"spot": [
						3,
						1
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "강함의 끝은… 네가 아니었군. 아직 부족해.",
						"english": "The peak of strength... wasn't you. Still lacking.",
						"japanese": "強さの頂点…お前ではなかったか。まだ足りない。",
						"chinese": "力量的尽头…不是你啊。还不够。",
						"french": "Le summum de la force... ce n'était pas toi. Encore insuffisant.",
						"spanish": "El culmen de la fuerza... no eras tú. Aún te falta.",
						"vietnamese": "Đỉnh cao sức mạnh… không phải ngươi. Vẫn còn thiếu sót.",
						"thai": "จุดสูงสุดของพลัง... ไม่ใช่เจ้าสินะ ยังไม่พอ",
						"hindi": "शक्ति का अंत… तुम नहीं थे। अभी भी कमी है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "벨루스의 심장이 멈추자, 얼어붙었던 시간의 조각들이 잠시 흔들렸다.",
						"english": "As Bellus's heart stopped, fragments of frozen time briefly trembled.",
						"japanese": "ベルスの心臓が止まると、凍りついていた時間の欠片がわずかに揺れた。",
						"chinese": "贝鲁斯的心脏停止跳动，冻结的时间碎片短暂地颤动了一下。",
						"french": "Lorsque le cœur de Bellus s'arrêta, les fragments du temps figé tremblèrent un instant.",
						"spanish": "Cuando el corazón de Bellus se detuvo, los fragmentos de tiempo congelado temblaron brevemente.",
						"vietnamese": "Khi trái tim của Bellus ngừng đập, những mảnh thời gian đóng băng khẽ rung chuyển.",
						"thai": "เมื่อหัวใจของเบลลัสหยุดเต้น ชิ้นส่วนของเวลาที่แข็งตัวก็สั่นไหวเล็กน้อย",
						"hindi": "जैसे ही बेलस का दिल रुका, जमे हुए समय के टुकड़े क्षण भर के लिए कांप उठे।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "그러나 여전히 세상은 멈춰 있었다. 진정한 주인은 누구인가. 다음 목적지가 명확해졌다.",
						"english": "Yet the world remained frozen. Who is the true master? The next destination became clear.",
						"japanese": "しかし、世界はまだ止まっていた。真の主は誰なのか。次の目的地が明確になった。",
						"chinese": "然而世界依然停滞。谁才是真正的主人？下一个目的地变得清晰起来。",
						"french": "Pourtant, le monde restait figé. Qui est le véritable maître ? La prochaine destination devint claire.",
						"spanish": "Pero el mundo seguía congelado. ¿Quién es el verdadero señor? El próximo destino se hizo evidente.",
						"vietnamese": "Thế nhưng thế giới vẫn dừng lại. Ai là chủ nhân thực sự? Điểm đến tiếp theo đã trở nên rõ ràng.",
						"thai": "แต่โลกยังคงหยุดนิ่ง ใครคือเจ้าของที่แท้จริง จุดหมายต่อไปชัดเจนขึ้น",
						"hindi": "फिर भी दुनिया ठहरी हुई थी। असली मालिक कौन है? अगला गंतव्य स्पष्ट हो गया।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 힘. 너희의 시간은… 영원히 멈출 것이다.",
						"english": "Insignificant power. Your time... will stop forever.",
						"japanese": "取るに足らない力。お前たちの時間は…永遠に止まるだろう。",
						"chinese": "微不足道的力量。你们的时间…将永远停止。",
						"french": "Pouvoir insignifiant. Votre temps... s'arrêtera pour toujours.",
						"spanish": "Poder insignificante. Vuestro tiempo... se detendrá para siempre.",
						"vietnamese": "Sức mạnh tầm thường. Thời gian của các ngươi… sẽ dừng lại mãi mãi.",
						"thai": "พลังอันไร้ค่า. เวลาของพวกเจ้า... จะหยุดนิ่งตลอดไป.",
						"hindi": "तुच्छ शक्ति। तुम्हारा समय… हमेशा के लिए रुक जाएगा।"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아직… 포기하지 않아…!",
						"english": "Not yet... I won't give up...!",
						"japanese": "まだ…諦めない…！",
						"chinese": "还没…放弃…！",
						"french": "Pas encore... Je n'abandonne pas...!",
						"spanish": "Aún... no me rindo...!",
						"vietnamese": "Vẫn… chưa từ bỏ…!",
						"thai": "ยัง… ไม่ยอมแพ้…!",
						"hindi": "अभी तक… हार नहीं मानी…!"
					}
				},
				{
					"duration_ms": 500,
					"speaker": "ivar",
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
					"speaker": "ivar",
					"content": {
						"korean": "여기서 무너질 내가 아니다. 다시… 도전한다.",
						"english": "I won't fall here. I challenge again.",
						"japanese": "ここで倒れる私ではない。再び…挑む。",
						"chinese": "我不会在这里倒下。再次…挑战。",
						"french": "Ce n'est pas ici que je tomberai. Je relève le défi... encore.",
						"spanish": "No soy yo quien caerá aquí. Vuelvo a... desafiar.",
						"vietnamese": "Ta sẽ không gục ngã ở đây. Lại một lần nữa… ta thách thức.",
						"thai": "ฉันจะไม่ล้มที่นี่. ฉันจะ... ท้าทายอีกครั้ง.",
						"hindi": "मैं यहाँ नहीं गिरूंगा। फिर से… चुनौती देता हूँ।"
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "모든 것이 얼어붙었다. 그러나 탐험대의 심장은, 다시 뜨겁게 타올랐다.",
						"english": "Everything froze. But the hearts of the expedition burned hotly once more.",
						"japanese": "すべてが凍りついた。しかし、探検隊の心臓は、再び熱く燃え上がった。",
						"chinese": "一切都冻结了。然而，探险队的心脏再次炽热地燃烧起来。",
						"french": "Tout se figea. Mais les cœurs de l'expédition s'embrasaient de nouveau ardemment.",
						"spanish": "Todo se congeló. Pero los corazones de la expedición ardieron fervientemente una vez más.",
						"vietnamese": "Mọi thứ đều đóng băng. Nhưng trái tim của đội thám hiểm lại bùng cháy một lần nữa.",
						"thai": "ทุกสิ่งทุกอย่างแข็งตัว แต่หัวใจของคณะสำรวจก็ลุกโชนขึ้นอีกครั้ง",
						"hindi": "सब कुछ जम गया। लेकिन अभियान दल का दिल, फिर से ज़ोरों से धड़क उठा।"
					},
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "벨루스의 심장부. 그곳에서, 정체 모를 무언가가 깨어났다.",
						"english": "The heart of Bellus. There, something unknown awakened.",
						"japanese": "ベルスの心臓部。そこで、正体不明の何かが目覚めた。",
						"chinese": "贝鲁斯的心脏。在那里，某种未知的事物苏醒了。",
						"french": "Au cœur de Bellus. Là, quelque chose d'inconnu s'éveilla.",
						"spanish": "El corazón de Bellus. Allí, algo desconocido despertó.",
						"vietnamese": "Trung tâm của Bellus. Ở đó, một thứ gì đó không xác định đã thức tỉnh.",
						"thai": "ใจกลางของเบลลัส ที่นั่น มีบางสิ่งที่ไม่รู้จักตื่นขึ้นมา",
						"hindi": "बेलस का हृदय। वहां, कुछ अज्ञात जागा।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…도망쳐도 소용없다. 모두… 나의 수집품이 될 뿐.",
						"english": "...Running is useless. All will simply become... my collection.",
						"japanese": "…逃げても無駄だ。すべて…私のコレクションになるだけだ。",
						"chinese": "…逃跑是没用的。一切…都将成为我的收藏品。",
						"french": "...Fuir est inutile. Tous ne feront que devenir... ma collection.",
						"spanish": "...Escapar es inútil. Todos se convertirán... en mi colección.",
						"vietnamese": "…Chạy trốn cũng vô ích thôi. Tất cả… sẽ chỉ trở thành bộ sưu tập của ta.",
						"thai": "...หนีไปก็ไร้ประโยชน์ ทั้งหมดจะกลายเป็น... ของสะสมของข้า",
						"hindi": "...भागना बेकार है। सब बस... मेरा संग्रह बन जाएंगे।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "저게… 벨루스의 힘인가.",
						"english": "Is that... Bellus's power?",
						"japanese": "あれが…ベルスの力なのか。",
						"chinese": "那是…贝鲁斯的力量吗？",
						"french": "Est-ce là... le pouvoir de Bellus ?",
						"spanish": "¿Es eso... el poder de Bellus?",
						"vietnamese": "Đó… là sức mạnh của Bellus sao?",
						"thai": "นั่น...คือพลังของเบลลัสหรือ",
						"hindi": "क्या वह... बेलस की शक्ति है?"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "ivar",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						2
					]
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "강함의 끝을 보고 싶다고 했지. 네가 그 끝이라면… 부숴주마!",
						"english": "You said you wanted to see the end of strength. If you are that end... I will break you!",
						"japanese": "強さの果てを見たいと言ったな。お前がその果てなら…叩き潰してやる！",
						"chinese": "你说你想看到力量的尽头。如果你就是那个尽头…我就将你摧毁！",
						"french": "Tu as dit vouloir voir la fin de la force. Si tu es cette fin... je te briserai !",
						"spanish": "Dijiste que querías ver el límite de la fuerza. Si tú eres ese límite... ¡te destruiré!",
						"vietnamese": "Ngươi nói muốn nhìn thấy giới hạn của sức mạnh. Nếu ngươi là giới hạn đó… ta sẽ phá hủy ngươi!",
						"thai": "เจ้าบอกว่าอยากเห็นจุดสิ้นสุดของพลัง ถ้าเจ้าคือจุดสิ้นสุดนั้น...ข้าจะทำลายเจ้า!",
						"hindi": "तुमने कहा था कि तुम शक्ति का अंत देखना चाहते हो। यदि तुम वह अंत हो... तो मैं तुम्हें तोड़ दूंगा!"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 자. 강함이란… 소멸의 끝에 다다르는 것이다.",
						"english": "Fool. Strength... is reaching the end of annihilation.",
						"japanese": "愚か者め。強さとは…消滅の果てにたどり着くものだ。",
						"chinese": "愚蠢的家伙。力量…是在毁灭的尽头才能达到的。",
						"french": "Imbécile. La force... c'est atteindre la fin de l'annihilation.",
						"spanish": "Necio. La fuerza... es alcanzar el fin de la aniquilación.",
						"vietnamese": "Kẻ ngốc. Sức mạnh… là đạt đến điểm tận cùng của sự hủy diệt.",
						"thai": "เจ้าคนโง่ ความแข็งแกร่ง...คือการไปถึงจุดสิ้นสุดของการทำลายล้าง",
						"hindi": "मूर्ख। शक्ति... विनाश के अंत तक पहुंचना है।"
					}
				}
			],
			"id": 15
		}
	]
} as const;
