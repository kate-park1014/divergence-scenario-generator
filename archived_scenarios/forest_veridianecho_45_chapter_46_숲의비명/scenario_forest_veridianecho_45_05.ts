export const scenario_forest_veridianecho_45_05 = {
	"scenario_id": "forest_veridianecho_45_05",
	"order": 5,
	"act": "climax_finale",
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
		"pool_id": "pool_Parasitic_Echo_V1"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "숲의 가장 깊은 곳. 거대한 버섯 군락과 촉수들이 길을 막았다.",
						"english": "The deepest part of the forest. Giant mushroom colonies and tentacles blocked the path.",
						"japanese": "森の最も深い場所。巨大なキノコ群と触手が進路を塞いでいた。",
						"chinese": "森林最深处。巨大的蘑菇群和触手挡住了去路。",
						"french": "La partie la plus profonde de la forêt. De gigantesques colonies de champignons et des tentacules bloquaient le chemin.",
						"spanish": "La parte más profunda del bosque. Enormes colonias de hongos y tentáculos bloqueaban el camino.",
						"vietnamese": "Nơi sâu nhất của khu rừng. Những cụm nấm khổng lồ và xúc tu đã chặn đường.",
						"thai": "ส่วนที่ลึกที่สุดของป่า อาณาจักรเห็ดยักษ์และหนวดเส้นทางที่ถูกปิดกั้น",
						"hindi": "जंगल का सबसे गहरा हिस्सा। विशाल मशरूम कॉलोनियों और टेंटेकल्स ने रास्ता रोक रखा था।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "ela",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "여기까지 왔어… 드디어 에코와 마주할 때가 왔군.",
						"english": "I've come this far... It's finally time to face Echo.",
						"japanese": "ここまで来たか…ついにエコーと対峙する時が来た。",
						"chinese": "我走到这里了……终于到了面对回声的时候了。",
						"french": "Je suis arrivé jusqu'ici... Le moment est enfin venu d'affronter Echo.",
						"spanish": "He llegado hasta aquí... Por fin ha llegado el momento de enfrentarme a Echo.",
						"vietnamese": "Tôi đã đi xa đến vậy… Cuối cùng cũng đến lúc đối mặt với Echo.",
						"thai": "มาถึงจุดนี้แล้ว... ในที่สุดก็ถึงเวลาเผชิญหน้ากับเอคโค่",
						"hindi": "मैं इतनी दूर आ गया... आखिरकार इको का सामना करने का समय आ गया है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "ela"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이제… 모든 것을 끝내야 해.",
						"english": "Now... I must end everything.",
						"japanese": "もう…すべてを終わらせなければならない。",
						"chinese": "现在……我必须结束一切。",
						"french": "Maintenant... Je dois tout arrêter.",
						"spanish": "Ahora... Debo poner fin a todo.",
						"vietnamese": "Bây giờ… tôi phải chấm dứt mọi thứ.",
						"thai": "ตอนนี้... ฉันต้องจบทุกอย่าง",
						"hindi": "अब... मुझे सब कुछ खत्म करना होगा।"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "진실은 잔혹할 거야. 그래도… 알아야만 해.",
						"english": "The truth will be cruel. Still... I must know it.",
						"japanese": "真実は残酷だろう。それでも…知らなければならない。",
						"chinese": "真相会很残酷。但是……我必须知道。",
						"french": "La vérité sera cruelle. Pourtant... Je dois la connaître.",
						"spanish": "La verdad será cruel. Aun así... Debo saberla.",
						"vietnamese": "Sự thật sẽ tàn khốc. Dù vậy… tôi vẫn phải biết.",
						"thai": "ความจริงจะโหดร้าย แต่... ฉันต้องรู้มัน",
						"hindi": "सच क्रूर होगा। फिर भी... मुझे जानना ही होगा।"
					},
					"speaker": "ela",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "ela",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이 숲 전체가 고통으로 일그러져 있어.",
						"english": "This entire forest is twisted with pain.",
						"japanese": "この森全体が苦痛で歪んでいる。",
						"chinese": "整个森林都因痛苦而扭曲。",
						"french": "Toute cette forêt est déformée par la douleur.",
						"spanish": "Todo este bosque está retorcido por el dolor.",
						"vietnamese": "Cả khu rừng này đang vặn vẹo trong đau đớn.",
						"thai": "ป่าทั้งป่านี้บิดเบี้ยวด้วยความเจ็บปวด",
						"hindi": "यह पूरा जंगल दर्द से मुड़ा हुआ है।"
					},
					"type": "speech",
					"speaker": "ela"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "베리디언 에코… 대체 뭐지?",
						"english": "Veridian Echo... What exactly is it?",
						"japanese": "ヴァリディアン・エコー…一体何だ？",
						"chinese": "翡翠回声……它到底是什么？",
						"french": "Écho Viridien... Qu'est-ce que c'est exactement ?",
						"spanish": "Eco Veridiano... ¿Qué es exactamente?",
						"vietnamese": "Veridian Echo… rốt cuộc là gì vậy?",
						"thai": "เวริเดียน เอคโค่... มันคืออะไรกันแน่?",
						"hindi": "वेरिडियन इको... यह आखिर क्या है?"
					}
				},
				{
					"content": {
						"korean": "분명 단순한 괴물이 아니야. 이 파편… 오래된 주술사의 흔적과 같아.",
						"english": "It's clearly no mere monster. These fragments... they resemble traces of an ancient sorcerer.",
						"japanese": "ただの怪物ではない。この破片…古い呪術師の痕跡のようだ。",
						"chinese": "它显然不是简单的怪物。这些碎片……像是一个古老巫师的痕迹。",
						"french": "Ce n'est clairement pas un simple monstre. Ces fragments... ressemblent aux traces d'un ancien sorcier.",
						"spanish": "Claramente no es un simple monstruo. Estos fragmentos... parecen rastros de un antiguo hechicero.",
						"vietnamese": "Rõ ràng đây không phải là một con quái vật đơn thuần. Những mảnh vỡ này… giống như dấu vết của một pháp sư cổ xưa.",
						"thai": "มันไม่ใช่แค่สัตว์ประหลาดธรรมดาแน่ๆ เศษพวกนี้... เหมือนร่องรอยของนักเวทย์โบราณ",
						"hindi": "यह सिर्फ कोई राक्षस नहीं है। ये टुकड़े... किसी प्राचीन जादूगर के निशानों जैसे लगते हैं।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "ela"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "저 멀리서 들려오는… 슬픈 울림도….",
						"english": "And that sad resonance... echoing from afar.",
						"japanese": "遠くから聞こえる…悲しい響きも…",
						"chinese": "还有那遥远传来……悲伤的回响……",
						"french": "Et cette résonance triste... qui vient de loin.",
						"spanish": "Y esa triste resonancia... que se escucha desde lejos.",
						"vietnamese": "Và cả tiếng vọng buồn bã… vọng về từ xa.",
						"thai": "และเสียงสะท้อนที่เศร้าโศก... ที่ดังมาจากที่ไกลๆ",
						"hindi": "और वह उदास प्रतिध्वनि... जो दूर से आ रही है।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "ela"
				},
				{
					"type": "speech",
					"speaker": "ela",
					"emotion": "sad",
					"content": {
						"korean": "숲의 생명력이 에코에게 흡수되고 있어. 빠르게… 죽어가고 있어.",
						"english": "The forest's life force is being absorbed by Echo. It's quickly... dying.",
						"japanese": "森の生命力がエコーに吸い取られている。急速に…死んでいく。",
						"chinese": "森林的生命力正在被回声吸收。它正在迅速……死去。",
						"french": "La force vitale de la forêt est absorbée par Echo. Elle est en train de... mourir rapidement.",
						"spanish": "La fuerza vital del bosque está siendo absorbida por Echo. Está... muriendo rápidamente.",
						"vietnamese": "Sinh lực của khu rừng đang bị Echo hấp thụ. Nó đang nhanh chóng… chết dần.",
						"thai": "พลังชีวิตของป่ากำลังถูกเอคโค่ดูดกลืน มันกำลัง... ตายอย่างรวดเร็ว",
						"hindi": "जंगल की जीवन शक्ति इको द्वारा सोखी जा रही है। यह तेज़ी से... मर रहा है।"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "막아야 해. 더 이상 숲이 침식되게 둘 수 없어.",
						"english": "I have to stop it. I can't let the forest be eroded any further.",
						"japanese": "止めなければ。これ以上、森が侵食されるのを許すわけにはいかない。",
						"chinese": "我必须阻止它。不能再让森林被侵蚀了。",
						"french": "Je dois l'arrêter. Je ne peux pas laisser la forêt être érodée davantage.",
						"spanish": "Tengo que detenerlo. No puedo permitir que el bosque siga erosionándose.",
						"vietnamese": "Tôi phải ngăn chặn. Không thể để khu rừng bị xâm thực thêm nữa.",
						"thai": "ฉันต้องหยุดมัน ฉันปล่อยให้ป่าถูกกัดเซาะไปมากกว่านี้ไม่ได้แล้ว",
						"hindi": "मुझे इसे रोकना होगा। मैं अब और जंगल को नष्ट नहीं होने दे सकता।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "ela",
					"content": {
						"korean": "결국… 이곳에서 모든 비극이 시작되었고, 끝날 거야.",
						"english": "Ultimately... all tragedy began here, and it will end here.",
						"japanese": "結局…すべての悲劇はここで始まり、ここで終わるだろう。",
						"chinese": "最终……所有的悲剧都始于此，也将在此结束。",
						"french": "Finalement... toute tragédie a commencé ici, et elle se terminera ici.",
						"spanish": "Al final... toda tragedia comenzó aquí, y aquí terminará.",
						"vietnamese": "Cuối cùng… mọi bi kịch bắt đầu từ đây, và sẽ kết thúc tại đây.",
						"thai": "ในที่สุด... โศกนาฏกรรมทั้งหมดเริ่มต้นที่นี่ และจะจบลงที่นี่",
						"hindi": "अंततः... सभी त्रासदी यहीं से शुरू हुई, और यहीं समाप्त होंगी।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "거대한 존재의 그림자가 숲을 뒤덮었다. 더 이상 물러설 곳은 없었다.",
						"english": "The shadow of a colossal entity loomed over the forest. There was nowhere left to retreat.",
						"japanese": "巨大な存在の影が森を覆った。もう退路はなかった。",
						"chinese": "巨型生物的阴影笼罩了森林。已无路可退。",
						"french": "L'ombre d'une entité colossale recouvrait la forêt. Il n'y avait plus d'échappatoire.",
						"spanish": "La sombra de una entidad colosal cubrió el bosque. No había lugar para retirarse.",
						"vietnamese": "Bóng của một thực thể khổng lồ bao trùm khu rừng. Không còn đường lùi.",
						"thai": "เงาของสิ่งมีชีวิตขนาดมหึมาปกคลุมป่า ไม่มีที่ให้ถอยอีกแล้ว",
						"hindi": "एक विशालकाय सत्ता की छाया ने जंगल को ढक लिया था। पीछे हटने की अब कोई जगह नहीं थी।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "공간이 뒤틀리고, 끔찍한 비명이 숲 전체에 울려 퍼졌다.",
						"english": "Space warped, and a horrifying scream echoed throughout the forest.",
						"japanese": "空間が歪み、恐ろしい悲鳴が森全体に響き渡った。",
						"chinese": "空间扭曲，可怕的尖叫声响彻整个森林。",
						"french": "L'espace se déforma, et un hurlement terrifiant résonna à travers la forêt.",
						"spanish": "El espacio se distorsionó, y un grito horripilante resonó por todo el bosque.",
						"vietnamese": "Không gian méo mó, và một tiếng hét kinh hoàng vang vọng khắp khu rừng.",
						"thai": "มิติบิดเบี้ยว และเสียงกรีดร้องอันน่าสะพรึงกลัวก้องไปทั่วป่า",
						"hindi": "अंतरिक्ष विकृत हो गया, और एक भयावह चीख पूरे जंगल में गूँज उठी।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "여기가… 베리디언 에코의 심장부인가.",
						"english": "Is this... the heart of the Veridian Echo?",
						"japanese": "ここが… ベリディアンエコーの心臓部か。",
						"chinese": "这里是……维里迪安回声的中心吗？",
						"french": "Est-ce ici... le cœur de l'Écho Viridien ?",
						"spanish": "¿Es este... el corazón del Eco Veridiano?",
						"vietnamese": "Đây có phải... trung tâm của Veridian Echo không?",
						"thai": "ที่นี่คือ... ใจกลางของเสียงสะท้อนสีเขียวหรือ?",
						"hindi": "क्या यह... वेरिडियन इको का हृदय है?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "더 이상 망설일 시간이 없어. 여기서 끝내야 해.",
						"english": "No time for hesitation. We must end this here.",
						"japanese": "もう躊躇している時間はない。ここで終わらせるんだ。",
						"chinese": "没有时间犹豫了。必须在这里结束它。",
						"french": "Plus de temps à hésiter. Il faut en finir ici.",
						"spanish": "No hay tiempo para dudar. Debemos acabar con esto aquí.",
						"vietnamese": "Không còn thời gian để do dự nữa. Phải kết thúc chuyện này ở đây.",
						"thai": "ไม่มีเวลาลังเลแล้ว เราต้องจบเรื่องนี้ที่นี่",
						"hindi": "अब संकोच का समय नहीं। हमें इसे यहीं समाप्त करना होगा।"
					},
					"type": "speech",
					"speaker": "character_1"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "어떤 진실이 기다리든… 우린 알아야만 해.",
						"english": "Whatever truth awaits... we must know it.",
						"japanese": "どんな真実が待っていようと… 我々は知らなければならない。",
						"chinese": "无论怎样的真相在等待……我们都必须知道。",
						"french": "Quelle que soit la vérité qui nous attend... nous devons la connaître.",
						"spanish": "Cualquier verdad que nos espere... debemos conocerla.",
						"vietnamese": "Bất kể sự thật nào đang chờ đợi... chúng ta đều phải biết.",
						"thai": "ไม่ว่าความจริงอะไรจะรออยู่... เราก็ต้องรู้ให้ได้",
						"hindi": "जो भी सच्चाई इंतज़ार कर रही हो... हमें उसे जानना ही होगा।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "거대한 버섯 군락이 탐험대를 감쌌다. 핏빛 촉수들이 꿈틀거렸다.",
						"english": "A colossal mushroom colony enveloped the expedition. Blood-red tentacles writhed.",
						"japanese": "巨大なキノコの群落が探検隊を包み込んだ。血のような触手が蠢いていた。",
						"chinese": "巨大的蘑菇群落包围了探险队。血红色的触手扭动着。",
						"french": "Une colonie de champignons colossale enveloppa l'expédition. Des tentacules écarlates frémissaient.",
						"spanish": "Una colosal colonia de hongos envolvió a la expedición. Tentáculos de color sangre se retorcían.",
						"vietnamese": "Một quần thể nấm khổng lồ bao trùm đoàn thám hiểm. Những xúc tu đỏ như máu uốn lượn.",
						"thai": "อาณานิคมเห็ดยักษ์ห่อหุ้มคณะสำรวจ หนวดสีเลือดบิดไปมา",
						"hindi": "एक विशाल मशरूम कॉलोनी ने अभियान दल को घेर लिया। खून जैसे लाल टेंटेकल्स रेंग रहे थे।"
					}
				},
				{
					"speaker": "boss",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…왔는가. 나의 고통을… 멈추러….",
						"english": "...Have you come? To stop my suffering...",
						"japanese": "…来たのか。私の苦しみを… 止めるために…。",
						"chinese": "……你来了吗？来……结束我的痛苦……",
						"french": "...Es-tu venu ? Pour arrêter ma souffrance...",
						"spanish": "...¿Has venido? A detener mi sufrimiento...",
						"vietnamese": "...Ngươi đến rồi sao? Để... chấm dứt nỗi đau của ta...",
						"thai": "...มาแล้วหรือ? เพื่อหยุดความทรมานของข้า...",
						"hindi": "...क्या तुम आ गए हो? मेरी पीड़ा को... रोकने के लिए..."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "네가… 베리디언 에코인가.",
						"english": "Are you... the Veridian Echo?",
						"japanese": "お前が… ベリディアンエコーなのか。",
						"chinese": "你就是……维里迪安回声吗？",
						"french": "Es-tu... l'Écho Viridien ?",
						"spanish": "¿Eres tú... el Eco Veridiano?",
						"vietnamese": "Ngươi... là Veridian Echo sao?",
						"thai": "เจ้าคือ... เสียงสะท้อนสีเขียวหรือ?",
						"hindi": "क्या तुम... वेरिडियन इको हो?"
					}
				},
				{
					"content": {
						"korean": "나는… 버려진 영혼의 안내자… 이 숲의… 절규.",
						"english": "I am... the guide of abandoned souls... the scream of this forest.",
						"japanese": "私は… 捨てられた魂の案内者… この森の… 絶叫。",
						"chinese": "我就是……被遗弃灵魂的向导……这片森林的……哀嚎。",
						"french": "Je suis... le guide des âmes abandonnées... le cri de cette forêt.",
						"spanish": "Soy... el guía de las almas abandonadas... el grito de este bosque.",
						"vietnamese": "Ta là... người dẫn đường cho những linh hồn bị bỏ rơi... tiếng thét của khu rừng này.",
						"thai": "ข้าคือ... ผู้นำทางวิญญาณที่ถูกทอดทิ้ง... เสียงกรีดร้องของป่านี้",
						"hindi": "मैं हूँ... त्यागी आत्माओं का मार्गदर्शक... इस जंगल की... चीख।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "boss"
				},
				{
					"content": {
						"korean": "영혼 안내자…?",
						"english": "Guide of souls...?",
						"japanese": "魂の案内者…？",
						"chinese": "灵魂向导……？",
						"french": "Guide des âmes...?",
						"spanish": "¿Guía de almas...?",
						"vietnamese": "Người dẫn đường linh hồn...?",
						"thai": "ผู้นำทางวิญญาณหรือ...?",
						"hindi": "आत्माओं का मार्गदर्शक...?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "오랜 고통 속에서… 이 숲과… 하나가 되었다….",
						"english": "Through long suffering... I became one... with this forest...",
						"japanese": "長き苦痛の中… この森と… 一つになった…",
						"chinese": "在漫长痛苦中… 与这片森林… 合为一体了…",
						"french": "À travers de longues souffrances... je ne faisais qu'un... avec cette forêt...",
						"spanish": "En un largo sufrimiento... me volví uno... con este bosque...",
						"vietnamese": "Trong nỗi đau dài... ta đã hòa làm một... với khu rừng này...",
						"thai": "ท่ามกลางความเจ็บปวดอันยาวนาน... ข้าได้หลอมรวมเป็นหนึ่ง... กับป่าแห่งนี้...",
						"hindi": "लंबे दर्द में… मैं इस जंगल से… एक हो गया…"
					},
					"emotion": "sad",
					"speaker": "boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "더 이상 숲을 파괴하게 두지 않을 거야!",
						"english": "I won't let you destroy the forest any longer!",
						"japanese": "これ以上森を破壊させはしない！",
						"chinese": "我不会再让你们破坏森林了！",
						"french": "Je ne vous laisserai plus détruire la forêt !",
						"spanish": "¡No permitiré que sigan destruyendo el bosque!",
						"vietnamese": "Ta sẽ không để các ngươi phá hủy khu rừng nữa!",
						"thai": "ข้าจะไม่ยอมให้เจ้าทำลายป่าอีกต่อไป!",
						"hindi": "मैं तुम्हें अब और जंगल को नष्ट नहीं करने दूँगा!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "…멈출 수 없을 것이다… 나의 고통은… 너희가 상상하는 이상이다….",
						"english": "...You cannot stop it... My suffering... is beyond your imagination...",
						"japanese": "…止められないだろう… 私の苦痛は… お前たちが想像する以上だ…",
						"chinese": "…你们无法阻止… 我的痛苦… 超乎你们的想象…",
						"french": "...Vous ne pouvez pas l'arrêter... Ma souffrance... est au-delà de votre imagination...",
						"spanish": "...No podrás detenerlo... Mi sufrimiento... está más allá de tu imaginación...",
						"vietnamese": "...Không thể dừng lại được đâu... Nỗi đau của ta... vượt xa những gì các ngươi tưởng tượng...",
						"thai": "...เจ้าหยุดมันไม่ได้หรอก... ความเจ็บปวดของข้า... เกินกว่าที่พวกเจ้าจะจินตนาการได้...",
						"hindi": "…तुम इसे रोक नहीं सकते… मेरा दर्द… तुम्हारी कल्पना से परे है…"
					},
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "거대한 버섯 군락이 산산이 부서졌다. 검붉은 점액 속에서….",
						"english": "The gigantic mushroom colony shattered. Amidst the dark red slime...",
						"japanese": "巨大なキノコの群落が粉々に砕け散った。黒ずんだ赤い粘液の中…",
						"chinese": "巨大的蘑菇群落支离破碎。在暗红色的黏液中…",
						"french": "La gigantesque colonie de champignons s'est brisée. Au milieu de la vase rouge sombre...",
						"spanish": "La gigantesca colonia de hongos se hizo añicos. Entre el limo rojo oscuro...",
						"vietnamese": "Cụm nấm khổng lồ vỡ tan tành. Giữa lớp dịch nhầy đỏ sẫm...",
						"thai": "อาณานิคมเห็ดยักษ์แตกเป็นเสี่ยงๆ ท่ามกลางเมือกสีแดงเข้ม...",
						"hindi": "विशाल मशरूम कॉलोनी टूट गई। गहरे लाल कीचड़ के बीच…"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "왜소하고 가냘픈, 작은 영혼의 형상이 잠시 드러났다.",
						"english": "A small, delicate, dwarfish soul-form briefly appeared.",
						"japanese": "矮小でか細い、小さな魂の姿が一時的に現れた。",
						"chinese": "一个矮小纤弱的小灵魂形态短暂地显现了。",
						"french": "Une petite forme d'âme naine, délicate et frêle, apparut brièvement.",
						"spanish": "Una forma de alma pequeña, delicada y enana apareció brevemente.",
						"vietnamese": "Một hình dáng linh hồn nhỏ bé, yếu ớt và còi cọc thoáng hiện ra.",
						"thai": "ร่างวิญญาณเล็กๆ ที่แคระแกร็นและบอบบางปรากฏขึ้นชั่วขณะ",
						"hindi": "एक छोटी, नाजुक, बौनी आत्मा का रूप क्षण भर के लिए प्रकट हुआ।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "…왜… 버려졌나이까… 나의 주술사여… 이 숲이… 나를… 삼키는구나… 고통을… 멈춰… 줘어어어어!",
						"english": "...Why... was I abandoned...? My shaman... This forest... is devouring me... Stop... the painnnnnn!",
						"japanese": "…なぜ… 見捨てられたのですか… 私のシャーマンよ… この森が… 私を… 飲み込んでいる… 苦痛を… 止め… てくれええええ！",
						"chinese": "…为什么… 我被抛弃了…？我的萨满啊… 这片森林… 正在吞噬我… 停止… 这痛苦啊啊啊啊！",
						"french": "...Pourquoi... ai-je été abandonné...? Mon chaman... Cette forêt... me dévore... Arrête... la douleurrrrrr !",
						"spanish": "...¿Por qué... fui abandonado...? Mi chamán... Este bosque... me está devorando... ¡Detengan... el dolooooor!",
						"vietnamese": "...Tại sao... tôi bị bỏ rơi...? Hỡi pháp sư của ta... Khu rừng này... đang nuốt chửng ta... Dừng... cơn đau lạiiiiii!",
						"thai": "...ทำไม... ข้าถึงถูกทอดทิ้ง...? พ่อมดของข้า... ป่าแห่งนี้... กำลังกลืนกินข้า... หยุด... ความเจ็บปวดดดดดดด!",
						"hindi": "…मुझे क्यों… छोड़ दिया गया…? मेरे शमन… यह जंगल… मुझे निगल रहा है… दर्द… रोक दोOOOOO!"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이게… 베리디언 에코의… 본 모습이라고?",
						"english": "This is... Veridian Echo's... true form?",
						"japanese": "これが… ヴェリディアン・エコーの… 本当の姿だと？",
						"chinese": "这… 就是碧绿回声的… 真面目吗？",
						"french": "C'est ça... la véritable forme... de l'Écho Veridian ?",
						"spanish": "¿Esta es... la verdadera forma... del Eco Veridian?",
						"vietnamese": "Đây là... hình dạng thật của... Vọng Âm Xanh Biếc sao?",
						"thai": "นี่คือ... ร่างจริงของ... เวริเดียน เอคโค่ อย่างนั้นหรือ?",
						"hindi": "यह… वेरीडियन इको का… असली रूप है?"
					},
					"emotion": "sad"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "ela",
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"speaker": "ela",
					"type": "speech",
					"content": {
						"korean": "버려진 영혼 안내자의… 비극적인 절규였어….",
						"english": "It was the tragic cry... of the abandoned soul guide...",
						"japanese": "見捨てられた魂の導き手の… 悲劇的な叫びだった…",
						"chinese": "这是… 被遗弃的灵魂向导的… 悲剧性哀嚎…",
						"french": "C'était le cri tragique... du guide des âmes abandonnées...",
						"spanish": "Fue el trágico grito... del guía de almas abandonado...",
						"vietnamese": "Đó là tiếng kêu bi thảm... của người dẫn đường linh hồn bị bỏ rơi...",
						"thai": "มันคือเสียงกรีดร้องอันน่าเศร้า... ของผู้นำทางวิญญาณที่ถูกทอดทิ้ง...",
						"hindi": "यह… परित्यक्त आत्मा मार्गदर्शक का… दुखद रोना था…"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "숲의 평화를 되찾았지만… 이 씁쓸함은 뭐지.",
						"english": "We've regained peace in the forest... but what is this bitterness?",
						"japanese": "森の平和を取り戻したが… この苦々しさは何だ。",
						"chinese": "我们重新获得了森林的和平… 但这种苦涩感是怎么回事？",
						"french": "Nous avons retrouvé la paix dans la forêt... mais qu'est-ce que cette amertume ?",
						"spanish": "Hemos recuperado la paz en el bosque... pero ¿qué es esta amargura?",
						"vietnamese": "Chúng ta đã tìm lại được hòa bình cho khu rừng... nhưng cảm giác cay đắng này là gì?",
						"thai": "เราได้คืนความสงบสุขให้ป่าแล้ว... แต่ความขมขื่นนี้คืออะไรกัน?",
						"hindi": "हमने जंगल में शांति वापस पा ली है… लेकिन यह कड़वाहट क्या है?"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "숲은 잠시 평온을 되찾았다. 그러나… 모든 것이 끝난 것은 아니었다.",
						"english": "The forest regained a temporary calm. However... not everything was over.",
						"japanese": "森は一時的に平穏を取り戻した。しかし… 全てが終わったわけではなかった。",
						"chinese": "森林暂时恢复了平静。然而… 并非一切都已结束。",
						"french": "La forêt a retrouvé un calme temporaire. Cependant... tout n'était pas terminé.",
						"spanish": "El bosque recuperó una calma temporal. Sin embargo... no todo había terminado.",
						"vietnamese": "Khu rừng tạm thời tìm lại được sự yên bình. Tuy nhiên... mọi thứ vẫn chưa kết thúc.",
						"thai": "ป่ากลับคืนสู่ความสงบชั่วคราว ทว่า... ทุกสิ่งยังไม่จบสิ้น",
						"hindi": "जंगल में अस्थायी शांति लौट आई। हालांकि… सब कुछ खत्म नहीं हुआ था।"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "핏빛 촉수들이 탐험대를 집어삼켰다. 숲은 다시 비명으로 가득 찼다.",
						"english": "Crimson tentacles devoured the expedition. The forest was once again filled with screams.",
						"japanese": "血塗られた触手が探検隊を飲み込んだ。森は再び悲鳴に満たされた。",
						"chinese": "血色触手吞噬了探险队。森林再次充满了尖叫。",
						"french": "Des tentacules écarlates ont dévoré l'expédition. La forêt fut de nouveau remplie de cris.",
						"spanish": "Tentáculos carmesí devoraron la expedición. El bosque se llenó de gritos una vez más.",
						"vietnamese": "Những xúc tu đỏ máu nuốt chửng đoàn thám hiểm. Rừng lại ngập tràn tiếng thét.",
						"thai": "หนวดสีเลือดกลืนกินคณะสำรวจ ป่ากลับมาเต็มไปด้วยเสียงกรีดร้องอีกครั้ง",
						"hindi": "खूनी तंबूओं ने अभियान दल को निगल लिया। जंगल एक बार फिर चीखों से भर गया।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "너희는… 나의 고통을… 이해할 수 없다….",
						"english": "You… cannot… understand… my pain…",
						"japanese": "お前たちには… 私の苦痛が… 理解できないだろう…",
						"chinese": "你们… 无法… 理解… 我的痛苦…",
						"french": "Vous… ne pouvez pas… comprendre… ma douleur…",
						"spanish": "Vosotros… no podéis… entender… mi dolor…",
						"vietnamese": "Các ngươi… không thể… hiểu… nỗi đau của ta…",
						"thai": "พวกเจ้า… ไม่สามารถ… เข้าใจ… ความเจ็บปวดของข้า…",
						"hindi": "तुम… मेरी पीड़ा… समझ… नहीं सकते…"
					},
					"speaker": "boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…젠장. 아직… 끝나지 않았어!",
						"english": "...Damn it. It's not… over yet!",
						"japanese": "…くそ。まだ…終わってない！",
						"chinese": "…该死。还没…结束！",
						"french": "...Mince. Ce n'est pas… encore fini !",
						"spanish": "...Maldita sea. ¡Todavía no… ha terminado!",
						"vietnamese": "...Chết tiệt. Vẫn chưa… kết thúc!",
						"thai": "…บ้าเอ๊ย. ยัง…ไม่จบ!",
						"hindi": "...धिक्कार है। अभी… खत्म नहीं हुआ!"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"epilogue": {
		"korean": [
			"베리디언 에코의 비명이 멈추자, 숲은 기이한 침묵에 잠겼다.",
			"구원은 아니었다. 그저 또 다른 비극의 막이 내렸을 뿐.",
			"영혼 안내자의 슬픈 운명은 숲의 깊은 상흔으로 남았다.",
			"새로운 평화 속에서, 탐험대는 답을 찾아 헤맬 것이다.",
			"과연 이 고통의 숲은… 진정으로 구원받을 수 있을까?"
		],
		"english": [
			"As the Veridian Echo's scream ceased, the forest fell into an eerie silence.",
			"It wasn't salvation. Merely the curtain falling on another tragedy.",
			"The tragic fate of the Soul Guide remained a deep scar on the forest.",
			"In newfound peace, the expedition would wander, seeking answers.",
			"Could this forest of suffering truly find salvation?"
		],
		"japanese": [
			"ベリディアン・エコーの悲鳴が止むと、森は奇妙な沈黙に包まれた。",
			"それは救済ではなかった。ただ、もう一つの悲劇の幕が下りただけだった。",
			"魂の案内者の悲しい運命は、森の深い傷跡として残った。",
			"新たな平和の中で、探検隊は答えを探し求めるだろう。",
			"果たしてこの苦痛の森は… 真に救済されるのだろうか？"
		],
		"chinese": [
			"当翠绿回音的尖叫停止时，森林陷入了一种诡异的寂静。",
			"这不是救赎。只是又一场悲剧落幕了。",
			"灵魂向导的悲惨命运，作为森林深处的伤痕留下了。",
			"在新的和平中，探险队将继续徘徊，寻找答案。",
			"究竟这片痛苦之森……能否真正得到救赎？"
		],
		"french": [
			"Le cri de l'Écho Véridien cessant, la forêt tomba dans un silence étrange.",
			"Ce n'était pas le salut. Juste le rideau tombant sur une autre tragédie.",
			"Le triste destin du Guide des Âmes demeura une cicatrice profonde sur la forêt.",
			"Dans une paix nouvelle, l'expédition errerait, cherchant des réponses.",
			"Ce bois de souffrance pourrait-il vraiment trouver le salut ?"
		],
		"spanish": [
			"Cuando el grito del Eco Veridiano cesó, el bosque cayó en un silencio inquietante.",
			"No fue salvación. Solo el telón cayendo sobre otra tragedia.",
			"El trágico destino del Guía de Almas permaneció como una profunda cicatriz en el bosque.",
			"En una paz recién hallada, la expedición vagaría, buscando respuestas.",
			"¿Podrá este bosque de sufrimiento encontrar verdaderamente la salvación?"
		],
		"vietnamese": [
			"Khi tiếng hét của Tiếng Vọng Lục Bảo ngừng lại, khu rừng chìm vào sự im lặng kỳ lạ.",
			"Đó không phải là sự cứu rỗi. Chỉ là một màn bi kịch khác vừa khép lại.",
			"Số phận bi thương của Người Dẫn Dắt Linh Hồn trở thành vết sẹo sâu thẳm của khu rừng.",
			"Trong sự bình yên mới, đoàn thám hiểm sẽ lang thang tìm kiếm câu trả lời.",
			"Liệu khu rừng đầy đau khổ này... có thực sự được cứu rỗi không?"
		],
		"thai": [
			"เมื่อเสียงกรีดร้องของเสียงสะท้อนสีเขียวมรกตหยุดลง ป่าก็ตกอยู่ในความเงียบงันแปลกประหลาด",
			"ไม่ใช่การไถ่บาป เป็นเพียงการปิดฉากโศกนาฏกรรมอีกเรื่องหนึ่ง",
			"ชะตากรรมอันน่าเศร้าของผู้นำทางวิญญาณยังคงเป็นรอยแผลลึกในป่า",
			"ในความสงบสุขครั้งใหม่ คณะสำรวจจะยังคงออกเดินทางเพื่อแสวงหาคำตอบ",
			"แท้จริงแล้ว ป่าแห่งความทุกข์ระทมนี้... จะได้รับการไถ่บาปได้จริงหรือ?"
		],
		"hindi": [
			"जैसे ही वेरिडियन इको की चीख बंद हुई, जंगल एक अजीब खामोशी में डूब गया।",
			"यह मोक्ष नहीं था। केवल एक और त्रासदी का पर्दा गिर गया था।",
			"आत्मा मार्गदर्शक का दुखद भाग्य जंगल पर एक गहरा घाव बनकर रह गया।",
			"नई शांति में, अभियान दल उत्तरों की तलाश में भटकता रहेगा।",
			"क्या यह पीड़ा का जंगल... वास्तव में मुक्ति पा सकेगा?"
		]
	},
	"prologue": {
		"korean": [
			"숲의 심장부, 비명과 함께 모든 것이 뒤틀려 있었다.",
			"오랜 역사가 잠든 곳에서, 베리디언 에코가 탐험대를 기다렸다.",
			"이곳에서 모든 진실이 밝혀질 터였다. 그리고 그 진실은…",
			"숲의 비극이자, 영원한 고통의 시작이었다."
		],
		"english": [
			"In the forest's heart, everything was warped by a scream.",
			"Where ancient history slept, the Veridian Echo awaited the expedition.",
			"Here, all truth would be revealed. And that truth was...",
			"A tragedy of the forest, and the dawn of eternal suffering."
		],
		"japanese": [
			"森の心臓部、悲鳴と共に全てが歪んでいた。",
			"古い歴史が眠る場所で、ベリディアン・エコーは探検隊を待っていた。",
			"ここで全ての真実が明らかになるだろう。そしてその真実は…",
			"森の悲劇であり、永遠の苦痛の始まりだった。"
		],
		"chinese": [
			"森林深处，尖叫声中一切都扭曲了。",
			"在古老历史沉睡之地，翠绿回音等待着探险队。",
			"在这里，所有真相都将揭示。而那个真相是……",
			"这是森林的悲剧，也是永恒痛苦的开始。"
		],
		"french": [
			"Au cœur de la forêt, tout était tordu par un cri.",
			"Là où l'histoire ancienne dormait, l'Écho Véridien attendait l'expédition.",
			"Ici, toute la vérité serait révélée. Et cette vérité était...",
			"Une tragédie de la forêt, et l'aube d'une souffrance éternelle."
		],
		"spanish": [
			"En el corazón del bosque, todo estaba distorsionado por un grito.",
			"Donde la historia antigua dormía, el Eco Veridiano esperaba a la expedición.",
			"Aquí, toda la verdad sería revelada. Y esa verdad era...",
			"Una tragedia del bosque, y el inicio del sufrimiento eterno."
		],
		"vietnamese": [
			"Trong lòng rừng sâu, mọi thứ đều biến dạng cùng tiếng hét.",
			"Nơi lịch sử cổ xưa yên ngủ, Tiếng Vọng Lục Bảo chờ đợi đoàn thám hiểm.",
			"Nơi đây, mọi sự thật sẽ được phơi bày. Và sự thật đó là...",
			"Một bi kịch của rừng sâu, và là khởi đầu của nỗi đau vĩnh cửu."
		],
		"thai": [
			"ณ ใจกลางป่า ทุกสิ่งบิดเบี้ยวด้วยเสียงกรีดร้อง",
			"ณ ที่ที่ประวัติศาสตร์โบราณหลับใหล เสียงสะท้อนสีเขียวมรกตรอคอยคณะสำรวจอยู่",
			"ที่นี่ ความจริงทั้งหมดจะถูกเปิดเผย และความจริงนั้นคือ...",
			"โศกนาฏกรรมแห่งป่า และจุดเริ่มต้นของความเจ็บปวดชั่วนิรันดร์"
		],
		"hindi": [
			"जंगल के हृदय में, चीख के साथ सब कुछ विकृत हो गया था।",
			"जहाँ प्राचीन इतिहास सोया था, वहां वेरिडियन इको अभियान दल का इंतजार कर रहा था।",
			"यहाँ, सभी सत्य प्रकट होंगे। और वह सत्य था...",
			"जंगल की एक त्रासदी, और अनंत पीड़ा की शुरुआत।"
		]
	}
} as const;
