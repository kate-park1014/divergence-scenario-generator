export const scenario_snowy_bellus_chronostitcher_01 = {
	"scenario_id": "snowy_bellus_chronostitcher_01",
	"order": 1,
	"act": "intro",
	"theme": "snowy",
	"actors": {
		"Asrin": {
			"id": "actor_11",
			"name": {
				"korean": "아스린",
				"english": "Asrin",
				"japanese": "アスリン",
				"chinese": "阿斯琳",
				"french": "Asrin",
				"spanish": "Asrin",
				"vietnamese": "Asrin",
				"thai": "อัสริน",
				"hindi": "अस्रिन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/53eff152-4c8e-4668-375f-0cb0b0d02300/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8f9c16ce-9c2a-4b0f-d471-0a207c11a800/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"오래된 선로. 시계탑은 멈춰버렸다.",
			"밤이면 유령 열차가 온다고 했다.",
			"그러나 시간은, 이미 흐르지 않고 있었다.",
			"첫 발걸음. 입김조차 허공에서 멎었다."
		],
		"english": [
			"Old tracks. The clock tower stands frozen.",
			"They said the ghost train arrives at night.",
			"But time, it had already ceased to flow.",
			"First step. Even breath froze in the air."
		],
		"japanese": [
			"古い線路。時計台は止まったまま。",
			"夜には幽霊列車が来ると言われた。",
			"しかし時間は、すでに流れていなかった。",
			"最初の一歩。吐く息さえ空中で止まった。"
		],
		"chinese": [
			"废弃的铁轨。钟楼已停止转动。",
			"他们说，夜晚会有幽灵列车驶来。",
			"然而时间，早已停止流逝。",
			"第一步。连呼出的气都凝结在空中。"
		],
		"french": [
			"Vieilles voies. La tour de l'horloge est figée.",
			"On disait que le train fantôme arrivait la nuit.",
			"Mais le temps, lui, ne s'écoulait déjà plus.",
			"Premier pas. Même l'haleine se figea dans l'air."
		],
		"spanish": [
			"Vías antiguas. La torre del reloj se detuvo.",
			"Decían que el tren fantasma llegaba por la noche.",
			"Pero el tiempo, ya no fluía.",
			"Primer paso. Incluso el aliento se congeló en el aire."
		],
		"vietnamese": [
			"Đường ray cũ. Tháp đồng hồ đã ngừng lại.",
			"Người ta nói tàu ma đến vào ban đêm.",
			"Nhưng thời gian, đã ngừng trôi.",
			"Bước chân đầu tiên. Hơi thở cũng ngưng đọng trong không khí."
		],
		"thai": [
			"รางรถไฟเก่า. หอนาฬิกาหยุดนิ่ง.",
			"ว่ากันว่ารถไฟผีสิงมาตอนกลางคืน.",
			"แต่เวลา ไม่ได้ไหลอีกต่อไปแล้ว.",
			"ก้าวแรก. แม้แต่ลมหายใจก็หยุดนิ่งกลางอากาศ."
		],
		"hindi": [
			"पुरानी पटरियां। घंटाघर थम गया है।",
			"कहा जाता था कि रात में भूतिया ट्रेन आती है।",
			"लेकिन समय, पहले ही रुक चुका था।",
			"पहला कदम। सांस भी हवा में थम गई।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "폐쇄된 옛 선로. 찬 바람이 뼛속까지 스몄다.",
						"english": "Abandoned old tracks. A cold wind seeped into the bones.",
						"japanese": "閉鎖された古い線路。冷たい風が骨の髄まで染み渡る。",
						"chinese": "废弃的旧铁轨。寒风刺骨。",
						"french": "Vieilles voies abandonnées. Un vent glacial transperçait les os.",
						"spanish": "Vías antiguas cerradas. Un viento frío caló hasta los huesos.",
						"vietnamese": "Đường ray cũ bị bỏ hoang. Gió lạnh thấu xương.",
						"thai": "รางรถไฟเก่าที่ถูกทิ้งร้าง. ลมหนาวซึมเข้ากระดูก.",
						"hindi": "परित्यक्त पुरानी पटरियां। ठंडी हवा हड्डियों तक जम गई।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "여기가 그 선로인가.",
						"english": "Is this that track?",
						"japanese": "ここがあの線路か。",
						"chinese": "这就是那条铁轨吗？",
						"french": "C'est bien cette voie ?",
						"spanish": "¿Es esta la vía?",
						"vietnamese": "Đây có phải là đường ray đó không?",
						"thai": "นี่คือรางรถไฟนั่นหรือเปล่า.",
						"hindi": "क्या यह वही पटरी है?"
					}
				},
				{
					"speaker": "Asrin",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "Asrin",
					"content": {
						"korean": "…입김이 허공에서 멎었어.",
						"english": "...My breath froze in the air.",
						"japanese": "…吐く息が空中で止まった。",
						"chinese": "…呼出的气凝结在空中。",
						"french": "...Mon haleine s'est figée dans l'air.",
						"spanish": "...Mi aliento se congeló en el aire.",
						"vietnamese": "...Hơi thở của mình đã ngưng đọng trong không khí.",
						"thai": "...ลมหายใจฉันหยุดนิ่งกลางอากาศ.",
						"hindi": "...मेरी सांस हवा में थम गई।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이거… 안 흩어지는데.",
						"english": "This... it's not dissipating.",
						"japanese": "これ…消えないな。",
						"chinese": "这…没有散开。",
						"french": "Ça... ça ne se dissipe pas.",
						"spanish": "Esto... no se disipa.",
						"vietnamese": "Cái này... không tan đi.",
						"thai": "นี่มัน... ไม่หายไปไหนเลย.",
						"hindi": "यह... बिखर नहीं रहा है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "레일 위에 최근 서리 자국. 무언가가 방금 지나갔다.",
						"english": "Recent frost marks on the rails. Something just passed by.",
						"japanese": "レールの上に最近の霜の跡。何かが今しがた通り過ぎた。",
						"chinese": "铁轨上最近的霜痕。有什么东西刚经过。",
						"french": "Traces de givre récentes sur les rails. Quelque chose vient de passer.",
						"spanish": "Recientes marcas de escarcha en los raíles. Algo acaba de pasar.",
						"vietnamese": "Dấu vết sương giá mới trên đường ray. Có thứ gì đó vừa đi qua.",
						"thai": "รอยน้ำค้างแข็งใหม่บนรางรถไฟ. มีบางสิ่งเพิ่งผ่านไป.",
						"hindi": "पटरियों पर हाल के पाले के निशान। कुछ अभी-अभी गुजरा है।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "끊긴 선로 끝, 가족사진 한 장이 얼음 속에 박혀 있었다. 모두 환하게 웃고 있었다.",
						"english": "At the end of the broken tracks, a family photo was embedded in the ice. Everyone was smiling brightly.",
						"japanese": "途切れた線路の先に、家族写真が一枚、氷の中に埋め込まれていた。皆が明るく笑っていた。",
						"chinese": "断裂铁轨的尽头，一张全家福嵌入冰中。照片里，所有人都笑容灿烂。",
						"french": "Au bout des voies coupées, une photo de famille était figée dans la glace. Tous souriaient de bon cœur.",
						"spanish": "Al final de las vías rotas, una foto familiar estaba incrustada en el hielo. Todos sonreían alegremente.",
						"vietnamese": "Cuối đoạn đường ray bị đứt, một bức ảnh gia đình kẹt trong băng. Mọi người đều mỉm cười rạng rỡ.",
						"thai": "สุดปลายรางที่ขาดสะบั้น, รูปถ่ายครอบครัวถูกฝังอยู่ในน้ำแข็ง. ทุกคนยิ้มแย้มสดใส.",
						"hindi": "टूटी पटरियों के अंत में, बर्फ में एक पारिवारिक तस्वीर जड़ी हुई थी। सभी खुशी से मुस्कुरा रहे थे।"
					}
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "Asrin"
				},
				{
					"content": {
						"korean": "여기 공기는… 너무 고요해.",
						"english": "The air here... so still.",
						"japanese": "ここの空気は… あまりにも静かだ。",
						"chinese": "这里的空气……好安静。",
						"french": "L'air ici... si calme.",
						"spanish": "El aire aquí... tan quieto.",
						"vietnamese": "Không khí ở đây... thật tĩnh lặng.",
						"thai": "อากาศที่นี่... ช่างเงียบสงบนัก",
						"hindi": "यहां की हवा... बहुत शांत है।"
					},
					"speaker": "Asrin",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "시간이 멈춘 것 같아.",
						"english": "Time feels frozen.",
						"japanese": "時間が止まったようだ。",
						"chinese": "时间好像停止了。",
						"french": "Le temps semble s'être arrêté.",
						"spanish": "El tiempo parece haberse detenido.",
						"vietnamese": "Thời gian như ngừng lại.",
						"thai": "เวลาเหมือนหยุดนิ่ง",
						"hindi": "समय थम-सा गया है।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "Asrin",
					"content": {
						"korean": "내 입김이… 아직도 저기.",
						"english": "My breath... still lingers there.",
						"japanese": "私の息が… まだあそこに。",
						"chinese": "我的哈气……还在那里。",
						"french": "Mon souffle... est encore là.",
						"spanish": "Mi aliento... aún está ahí.",
						"vietnamese": "Hơi thở của tôi... vẫn còn đó.",
						"thai": "ลมหายใจของฉัน... ยังคงอยู่ที่นั่น",
						"hindi": "मेरी सांसें... अभी भी वहीं हैं।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "정말 움직이지 않네.",
						"english": "It truly isn't moving.",
						"japanese": "本当に動かない。",
						"chinese": "真的没有动。",
						"french": "Ça ne bouge vraiment pas.",
						"spanish": "Realmente no se mueve.",
						"vietnamese": "Thật sự không nhúc nhích.",
						"thai": "มันไม่ขยับเลยจริงๆ",
						"hindi": "यह बिल्कुल नहीं हिल रहा।"
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "Asrin",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						2
					]
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "점점 더 깊은 곳. 싸늘한 정적만 감돌았다.",
						"english": "Deeper still. Only chilling silence lingered.",
						"japanese": "ますます深い場所へ。冷たい静寂だけが漂っていた。",
						"chinese": "越来越深的地方。只有冰冷的寂静。",
						"french": "Toujours plus profond. Seul un silence glacial régnait.",
						"spanish": "Cada vez más profundo. Solo un silencio gélido.",
						"vietnamese": "Càng lúc càng sâu. Chỉ có sự tĩnh lặng lạnh lẽo bao trùm.",
						"thai": "ลึกเข้าไปอีก. มีแต่ความเงียบงันที่เยือกเย็น",
						"hindi": "और गहराई में। केवल बर्फीली खामोशी छाई थी।"
					},
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "발자국 소리도 얼어붙는 것 같아.",
						"english": "Even footsteps seem to freeze.",
						"japanese": "足音も凍りつくようだ。",
						"chinese": "连脚步声都好像要冻结了。",
						"french": "Même le bruit des pas semble geler.",
						"spanish": "Hasta el sonido de los pasos parece congelarse.",
						"vietnamese": "Tiếng bước chân cũng như đóng băng.",
						"thai": "แม้แต่เสียงฝีเท้าก็เหมือนจะแข็งตัว",
						"hindi": "पैरों की आवाज़ भी जमने लगी है।"
					},
					"speaker": "Asrin",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "무언가… 우리를 기다리는 것 같아.",
						"english": "Something... seems to await us.",
						"japanese": "何かが… 私たちを待っているようだ。",
						"chinese": "有什么……好像在等着我们。",
						"french": "Quelque chose... semble nous attendre.",
						"spanish": "Algo... parece esperarnos.",
						"vietnamese": "Có điều gì đó... dường như đang chờ đợi chúng ta.",
						"thai": "บางสิ่ง... ดูเหมือนกำลังรอเราอยู่",
						"hindi": "कुछ... हमारा इंतज़ार कर रहा है।"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "Asrin",
					"content": {
						"korean": "이곳의 시간은… 정말 흐르지 않는구나.",
						"english": "Time here... truly doesn't flow.",
						"japanese": "ここの時間は… 本当に流れていないんだな。",
						"chinese": "这里的时间……真的没有流动。",
						"french": "Le temps ici... ne s'écoule vraiment pas.",
						"spanish": "El tiempo aquí... realmente no fluye.",
						"vietnamese": "Thời gian ở đây... thật sự không trôi.",
						"thai": "เวลาที่นี่... ไม่ไหลเลยจริงๆ",
						"hindi": "यहां का समय... सच में नहीं चल रहा।"
					},
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						1,
						2
					],
					"speaker": "Asrin",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "점점 더 강해지는 한기. 마음까지 얼어붙는 듯했다.",
						"english": "The cold intensifies. My very heart felt frozen.",
						"japanese": "ますます強くなる寒気。心まで凍りつくようだった。",
						"chinese": "寒气越来越强。感觉心都冻僵了。",
						"french": "Le froid s'intensifie. Mon cœur même semblait geler.",
						"spanish": "El frío se intensifica. Sentía que mi corazón se congelaba.",
						"vietnamese": "Hơi lạnh càng lúc càng mạnh. Cứ như thể trái tim cũng đóng băng.",
						"thai": "ความหนาวเย็นทวีความรุนแรงขึ้น. ราวกับหัวใจจะแข็งตัว",
						"hindi": "सर्दी और बढ़ गई। मेरा दिल भी जमने लगा था।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "돌아갈 수 없을 것 같아.",
						"english": "I don't think we can go back.",
						"japanese": "もう戻れないだろう。",
						"chinese": "好像回不去了。",
						"french": "Je ne crois pas que nous puissions revenir.",
						"spanish": "No creo que podamos volver.",
						"vietnamese": "Tôi e rằng không thể quay lại.",
						"thai": "คงจะกลับไปไม่ได้แล้ว",
						"hindi": "मुझे नहीं लगता कि हम वापस जा सकते हैं।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "뒤돌아보지 마. 돌아갈 곳도 없어.",
						"english": "Don't look back. There's nowhere to go back to.",
						"japanese": "振り返るな。戻る場所もない。",
						"chinese": "别回头看。已无处可回。",
						"french": "Ne regarde pas en arrière. Il n'y a nulle part où retourner.",
						"spanish": "No mires atrás. No hay adónde volver.",
						"vietnamese": "Đừng nhìn lại. Không còn nơi nào để quay về.",
						"thai": "อย่ามองย้อนกลับไป ไม่มีที่ให้กลับไปแล้ว",
						"hindi": "पीछे मत देखो। वापस जाने की कोई जगह नहीं है।"
					},
					"speaker": "Asrin"
				},
				{
					"content": {
						"korean": "대체 뭘 찾으러 여기까지 온 거지?",
						"english": "What exactly did you come all this way for?",
						"japanese": "一体何を探しにここまで来た？",
						"chinese": "你到底来这里寻找什么？",
						"french": "Qu'es-tu venu chercher ici, au juste ?",
						"spanish": "¿Qué viniste a buscar hasta aquí?",
						"vietnamese": "Rốt cuộc, bạn đến đây để tìm kiếm điều gì?",
						"thai": "คุณมาที่นี่เพื่ออะไรกันแน่?",
						"hindi": "तुम यहाँ तक क्या ढूंढने आए हो?"
					},
					"speaker": "character_1",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "…진실.",
						"english": "...The truth.",
						"japanese": "…真実。",
						"chinese": "……真相。",
						"french": "...La vérité.",
						"spanish": "...La verdad.",
						"vietnamese": "...Sự thật.",
						"thai": "...ความจริง",
						"hindi": "...सच्चाई।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "차가운 얼음이 온몸을 감쌌다. 시간은 다시 멈췄다.",
						"english": "Cold ice enveloped my entire body. Time stopped once more.",
						"japanese": "冷たい氷が全身を包んだ。時間は再び止まった。",
						"chinese": "冰冷的寒意包裹全身。时间再次停滞。",
						"french": "La glace froide a enveloppé tout mon corps. Le temps s'est arrêté à nouveau.",
						"spanish": "El hielo frío envolvió todo mi cuerpo. El tiempo se detuvo de nuevo.",
						"vietnamese": "Băng giá lạnh lẽo bao trùm toàn thân. Thời gian lại ngừng trôi.",
						"thai": "น้ำแข็งเย็นยะเยือกปกคลุมทั่วร่าง เวลาหยุดนิ่งอีกครั้ง",
						"hindi": "ठंडी बर्फ ने पूरे शरीर को जकड़ लिया। समय फिर से रुक गया।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "하찮은 것들. 너희도 영원히 멈춰라.",
						"english": "Insignificant beings. You too, shall be frozen forever.",
						"japanese": "取るに足らない者たちよ。お前たちも永遠に止まれ。",
						"chinese": "卑微之物。你们也永远停滞吧。",
						"french": "Êtres insignifiants. Vous aussi, arrêtez-vous pour l'éternité.",
						"spanish": "Seres insignificantes. Vosotros también, deteneos para siempre.",
						"vietnamese": "Những kẻ tầm thường. Các ngươi cũng hãy ngừng lại vĩnh viễn đi.",
						"thai": "พวกไร้ค่า พวกแกก็จงหยุดนิ่งไปตลอดกาลซะ",
						"hindi": "तुच्छ प्राणी। तुम भी हमेशा के लिए रुक जाओ।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…다시… 시작할 거야.",
						"english": "...I will... start again.",
						"japanese": "…また…始めるんだ。",
						"chinese": "……我会……重新开始。",
						"french": "...Je vais... recommencer.",
						"spanish": "...Volveré... a empezar.",
						"vietnamese": "...Tôi sẽ... bắt đầu lại.",
						"thai": "...ฉันจะ... เริ่มใหม่อีกครั้ง",
						"hindi": "...मैं... फिर से... शुरू करूंगा।"
					}
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "선로의 끝. 거대한 그림자가 앞을 가로막았다.",
						"english": "End of the tracks. A giant shadow blocked the way.",
						"japanese": "線路の終わり。巨大な影が道を塞いだ。",
						"chinese": "轨道尽头。一道巨大的黑影挡住了去路。",
						"french": "Le bout des rails. Une ombre gigantesque bloquait le passage.",
						"spanish": "El fin de las vías. Una sombra gigantesca bloqueaba el camino.",
						"vietnamese": "Cuối đường ray. Một bóng đen khổng lồ chặn lối đi.",
						"thai": "สุดปลายรางรถไฟ เงาขนาดมหึมาขวางทางไว้",
						"hindi": "पटरियों का अंत। एक विशाल छाया ने रास्ता रोक दिया।"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "멈춰버린 시간 속으로 어서 와.",
						"english": "Welcome to a time where everything has stopped.",
						"japanese": "止まってしまった時間の中へ、ようこそ。",
						"chinese": "欢迎来到时间静止之地。",
						"french": "Bienvenue dans le temps arrêté.",
						"spanish": "Bienvenido al tiempo detenido.",
						"vietnamese": "Chào mừng đến với dòng thời gian đã ngừng lại.",
						"thai": "ยินดีต้อนรับสู่ห้วงเวลาที่หยุดนิ่ง",
						"hindi": "रुके हुए समय में आपका स्वागत है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "네가… 유령 열차의 주인인가.",
						"english": "You... are the master of the ghost train?",
						"japanese": "お前が…幽霊列車の主か。",
						"chinese": "你就是……幽灵列车的主人吗？",
						"french": "Tu... es le maître du train fantôme ?",
						"spanish": "¿Tú... eres el amo del tren fantasma?",
						"vietnamese": "Ngươi... là chủ nhân của đoàn tàu ma?",
						"thai": "เจ้า...คือเจ้าของรถไฟผีสิงงั้นหรือ",
						"hindi": "तुम... भूतिया ट्रेन के मालिक हो?"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "내게 온 이상, 너희도 영원히 박제될 것이다.",
						"english": "Now that you've come to me, you too shall be preserved forever.",
						"japanese": "私のもとへ来たからには、お前たちも永遠に剥製となるだろう。",
						"chinese": "既然你来了我这里，你们也将被永远保存下来。",
						"french": "Puisque vous êtes venus à moi, vous aussi serez conservés pour l'éternité.",
						"spanish": "Ya que vinieron a mí, ustedes también serán preservados para siempre.",
						"vietnamese": "Một khi đã đến đây, các ngươi cũng sẽ bị đóng băng mãi mãi.",
						"thai": "ในเมื่อเจ้ามาหาข้า เจ้าก็จะถูกสตัฟฟ์ไว้ชั่วนิรันดร์",
						"hindi": "जब तुम मेरे पास आ ही गए हो, तो तुम भी हमेशा के लिए संरक्षित हो जाओगे।"
					}
				}
			],
			"win_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "얼어붙었던 존재가 사라지자, 작은 균열이 생겼다.",
						"english": "As the frozen entity vanished, a small crack appeared.",
						"japanese": "凍りついていた存在が消え去ると、小さな亀裂が生じた。",
						"chinese": "随着冰封的存在消失，一道小裂缝出现了。",
						"french": "Alors que l'entité gelée disparaissait, une petite fissure apparut.",
						"spanish": "Cuando la entidad congelada desapareció, apareció una pequeña grieta.",
						"vietnamese": "Khi thực thể bị đóng băng biến mất, một vết nứt nhỏ xuất hiện.",
						"thai": "เมื่อสิ่งมีชีวิตที่ถูกแช่แข็งหายไป รอยแยกเล็กๆ ก็ปรากฏขึ้น",
						"hindi": "जैसे ही जमी हुई सत्ता गायब हुई, एक छोटी सी दरार दिखाई दी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…겨우 이 정도에… 끝나지 않아….",
						"english": "...It won't end... just like this...",
						"japanese": "…たったこれっぽっちで…終わらない…。",
						"chinese": "……才这点程度……不会结束的……。",
						"french": "...Ça ne finira pas... juste comme ça...",
						"spanish": "...No terminará... así...",
						"vietnamese": "...Không thể kết thúc... chỉ như thế này...",
						"thai": "...แค่นี้...ยังไม่จบ...",
						"hindi": "...बस इतना ही... यह खत्म नहीं होगा...।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "아직 끝이 아니야.",
						"english": "It's not over yet.",
						"japanese": "まだ終わりじゃない。",
						"chinese": "还没结束。",
						"french": "Ce n'est pas encore fini.",
						"spanish": "Todavía no ha terminado.",
						"vietnamese": "Vẫn chưa kết thúc.",
						"thai": "ยังไม่จบ",
						"hindi": "यह अभी खत्म नहीं हुआ है।"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "Asrin",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "Asrin",
					"content": {
						"korean": "…시간이… 아주 조금… 움직인 것 같아.",
						"english": "...Time... seems to have moved... just a little.",
						"japanese": "…時間が…ほんの少し…動いたような気がする。",
						"chinese": "……时间……好像……移动了一点点。",
						"french": "...Le temps... semble avoir bougé... un tout petit peu.",
						"spanish": "...El tiempo... parece haberse movido... solo un poquito.",
						"vietnamese": "...Thời gian... dường như... đã nhích đi một chút.",
						"thai": "...เวลา... เหมือนจะ... เคลื่อนไป... นิดหน่อย",
						"hindi": "...समय... थोड़ा सा... चला गया है, ऐसा लगता है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "그러나 멈춰버린 것들은, 아직 너무도 많았다.",
						"english": "But so many things remained frozen.",
						"japanese": "しかし、止まってしまったものは、まだあまりにも多かった。",
						"chinese": "然而，停滞不前的，仍然太多了。",
						"french": "Pourtant, tant de choses sont restées figées.",
						"spanish": "Sin embargo, muchas cosas permanecieron detenidas.",
						"vietnamese": "Tuy nhiên, những thứ đã dừng lại, vẫn còn quá nhiều.",
						"thai": "แต่สิ่งที่หยุดนิ่งไปแล้ว ยังคงมีมากเกินไป",
						"hindi": "परंतु, जो चीजें रुक गई थीं, वे अभी भी बहुत थीं।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		}
	]
} as const;
