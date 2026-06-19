export const scenario_modern_evan_0_04 = {
	"scenario_id": "modern_evan_0_04",
	"order": 4,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"bex": {
			"id": "mon_74e24324-3f9a-4d44-9611-1da33b654ca1",
			"name": {
				"korean": "벡스",
				"english": "Bex",
				"japanese": "ベックス",
				"chinese": "贝克斯",
				"french": "Bex",
				"spanish": "Bex",
				"vietnamese": "Bex",
				"thai": "เบ็กซ์",
				"hindi": "बेक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/09dae190-ff6b-4a9d-b656-e1a2b896aa00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5cc3c77f-72e1-416e-b346-31889b3b9300/public"
		},
		"kai": {
			"name": {
				"korean": "카이",
				"english": "Kai",
				"japanese": "カイ",
				"chinese": "凯",
				"french": "Kai",
				"spanish": "Kai",
				"vietnamese": "Kai",
				"thai": "ไค",
				"hindi": "काई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f10d9184-4155-4bb9-de2d-db61463f7c00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e41f8e03-08c9-4a4f-6f72-fa9342876f00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"또 다시, 다음 기회를 향한 시간.",
			"벡스와 함께 준비하는 반복된 과정.",
			"에반은 웃었지만, 그 눈빛은 너무나 깊었다.",
			"이 끝없는 기다림, 언제쯤 끝날까."
		],
		"english": [
			"Again, time for the next opportunity.",
			"A repeated process, preparing with Vex.",
			"Evan smiled, but his eyes were too deep.",
			"This endless waiting, when will it end?"
		],
		"japanese": [
			"また、次の機会への時間。",
			"ベックスと共に準備する繰り返しの過程。",
			"エヴァンは笑ったが、その瞳はあまりにも深かった。",
			"この終わりのない待ち時間、いつ終わるのだろうか。"
		],
		"chinese": [
			"又一次，奔向下一个机会的时间。",
			"与维克斯一起准备的重复过程。",
			"埃文笑了，但他的眼神却深邃无比。",
			"这无尽的等待，何时才能结束？"
		],
		"french": [
			"Encore une fois, l'heure de la prochaine opportunité.",
			"Un processus répété, se préparant avec Vex.",
			"Evan sourit, mais ses yeux étaient trop profonds.",
			"Cette attente interminable, quand finira-t-elle ?"
		],
		"spanish": [
			"De nuevo, es hora de la próxima oportunidad.",
			"Un proceso repetido, preparándose con Vex.",
			"Evan sonrió, pero sus ojos eran demasiado profundos.",
			"Esta espera interminable, ¿cuándo terminará?"
		],
		"vietnamese": [
			"Lại một lần nữa, thời gian cho cơ hội tiếp theo.",
			"Một quá trình lặp lại, chuẩn bị cùng Vex.",
			"Evan cười, nhưng đôi mắt anh ấy quá sâu thẳm.",
			"Sự chờ đợi vô tận này, khi nào mới kết thúc?"
		],
		"thai": [
			"อีกครั้ง เวลาสำหรับโอกาสหน้า",
			"กระบวนการซ้ำๆ เตรียมพร้อมกับเว็กซ์",
			"อีวานยิ้ม แต่ดวงตาของเขาลึกซึ้งเกินไป",
			"การรอคอยที่ไม่มีที่สิ้นสุดนี้ จะสิ้นสุดลงเมื่อใด"
		],
		"hindi": [
			"फिर से, अगले अवसर का समय।",
			"वेक्स के साथ तैयारी की एक दोहराई गई प्रक्रिया।",
			"एवन मुस्कुराया, लेकिन उसकी आँखें बहुत गहरी थीं।",
			"यह अंतहीन इंतज़ार, कब खत्म होगा?"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "다시 시작된 준비. 익숙한 대기실 풍경이 펼쳐졌다.",
						"english": "Preparations began again. The familiar waiting room unfolded.",
						"japanese": "再び始まった準備。見慣れた控え室の風景が広がった。",
						"chinese": "准备工作再次开始。熟悉的休息室景象映入眼帘。",
						"french": "Les préparatifs recommencèrent. La salle d'attente familière se déploya.",
						"spanish": "Los preparativos comenzaron de nuevo. La familiar sala de espera se desplegó.",
						"vietnamese": "Công tác chuẩn bị lại bắt đầu. Cảnh phòng chờ quen thuộc hiện ra.",
						"thai": "การเตรียมการเริ่มต้นขึ้นอีกครั้ง ภาพห้องพักรอที่คุ้นเคยปรากฏขึ้น",
						"hindi": "तैयारियाँ फिर से शुरू हुईं। परिचित प्रतीक्षा कक्ष का दृश्य सामने आया।"
					}
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "bex"
				},
				{
					"content": {
						"korean": "자, 이번엔 꼭 통과하자! 나만 믿어.",
						"english": "Alright, let's definitely pass this time! Trust me.",
						"japanese": "さあ、今度こそ合格しよう！私を信じて。",
						"chinese": "好，这次一定要通过！相信我。",
						"french": "Allez, cette fois, passons-le absolument ! Fais-moi confiance.",
						"spanish": "¡Vale, esta vez pasemos sí o sí! Confía en mí.",
						"vietnamese": "Được rồi, lần này nhất định phải qua! Tin tôi đi.",
						"thai": "เอาล่ะ ครั้งนี้ต้องผ่านให้ได้! เชื่อฉันสิ",
						"hindi": "ठीक है, इस बार ज़रूर पास करते हैं! मुझ पर भरोसा रखो।"
					},
					"speaker": "bex",
					"type": "speech",
					"emotion": "happy"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…또 다시.",
						"english": "...Again.",
						"japanese": "…またか。",
						"chinese": "…又来了。",
						"french": "...Encore.",
						"spanish": "...De nuevo.",
						"vietnamese": "...Lại nữa.",
						"thai": "...อีกแล้ว",
						"hindi": "...फिर से।"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "bex",
					"content": {
						"korean": "벌써부터 지친 거야? 에반 좀 봐. 얼마나 긍정적인데!",
						"english": "Already tired? Look at Evan. How positive he is!",
						"japanese": "もう疲れたの？エヴァンを見てごらん。どれだけ前向きなんだ！",
						"chinese": "已经累了？看看埃文。他多积极啊！",
						"french": "Déjà fatigué ? Regarde Evan. Comme il est positif !",
						"spanish": "¿Ya cansado? Mira a Evan. ¡Qué positivo es!",
						"vietnamese": "Đã mệt rồi sao? Nhìn Evan kìa. Anh ấy tích cực đến mức nào!",
						"thai": "เหนื่อยแล้วเหรอ? ดูอีวานสิ เขามีทัศนคติเชิงบวกแค่ไหน!",
						"hindi": "पहले से ही थक गए? एवन को देखो। वह कितना सकारात्मक है!"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "bex",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "bex",
					"content": {
						"korean": "에반, 이번에도 파이팅! 비결이 뭐야?",
						"english": "Evan, good luck this time too! What's your secret?",
						"japanese": "エヴァン、今回もファイト！秘訣は何？",
						"chinese": "埃文，这次也加油！有什么秘诀吗？",
						"french": "Evan, bonne chance cette fois aussi ! Quel est ton secret ?",
						"spanish": "¡Evan, ánimo también esta vez! ¿Cuál es tu secreto?",
						"vietnamese": "Evan, lần này cũng cố lên! Bí quyết của cậu là gì?",
						"thai": "อีวาน สู้ๆ ครั้งนี้ด้วยนะ! เคล็ดลับของคุณคืออะไร?",
						"hindi": "एवन, इस बार भी शुभकामनाएँ! तुम्हारा रहस्य क्या है?"
					},
					"emotion": "happy",
					"type": "speech"
				},
				{
					"action": "enter",
					"speaker": "random_boss",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "하하! 거의 다 왔어요, 우리. 조금만 더 힘내면 돼요!",
						"english": "Haha! We're almost there. Just a little more effort!",
						"japanese": "ハハ！もうすぐですよ、私たち。もう少し頑張ればいいんです！",
						"chinese": "哈哈！我们快到了。再加把劲就行了！",
						"french": "Haha ! On y est presque. Encore un petit effort !",
						"spanish": "¡Jaja! Ya casi llegamos. ¡Un poquito más de esfuerzo!",
						"vietnamese": "Haha! Chúng ta gần đến nơi rồi. Chỉ cần cố gắng thêm một chút nữa thôi!",
						"thai": "ฮ่าฮ่า! เราใกล้ถึงแล้ว แค่อีกนิดเดียวเท่านั้น!",
						"hindi": "हाहा! हम लगभग वहाँ पहुँच गए हैं। बस थोड़ी और कोशिश!"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "happy"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…저 변함없는 미소. 대단하다.",
						"english": "...That unchanging smile. Amazing.",
						"japanese": "「…その変わらない笑顔。すごいな。」",
						"chinese": "“……那不变的笑容。真厉害。”",
						"french": "...Ce sourire immuable. Incroyable.",
						"spanish": "...Esa sonrisa inmutable. Impresionante.",
						"vietnamese": "...Nụ cười không đổi đó. Thật đáng kinh ngạc.",
						"thai": "...รอยยิ้มที่ไม่เปลี่ยนแปลงนั้น ช่างน่าทึ่ง",
						"hindi": "...वह अटल मुस्कान। अद्भुत।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "찰나의 순간, 그의 눈빛에서 깊은 공허함이 스쳐 지나갔다.",
						"english": "For a fleeting moment, a deep emptiness flickered in his eyes.",
						"japanese": "「一瞬、彼の瞳に深い虚無感がよぎった。」",
						"chinese": "“刹那间，他的眼神中闪过一丝深沉的空虚。”",
						"french": "L'espace d'un instant, un vide profond traversa son regard.",
						"spanish": "Por un instante fugaz, un profundo vacío cruzó su mirada.",
						"vietnamese": "Trong khoảnh khắc chớp nhoáng, một sự trống rỗng sâu thẳm lướt qua ánh mắt anh.",
						"thai": "ชั่วพริบตา ความว่างเปล่าลึกซึ้งได้ฉายผ่านดวงตาของเขา",
						"hindi": "एक क्षण के लिए, उसकी आँखों में एक गहरी खालीपन झलक गया।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "happy",
					"type": "speech",
					"speaker": "bex",
					"content": {
						"korean": "정말 긍정적이야! 나도 저렇게 되고 싶어.",
						"english": "So positive! I wish I could be like that.",
						"japanese": "「本当にポジティブだ！私もああなりたいな。」",
						"chinese": "“真是积极！我也想变成那样。”",
						"french": "Tellement positif ! J'aimerais être comme ça.",
						"spanish": "¡Qué positivo! Ojalá pudiera ser así.",
						"vietnamese": "Thật tích cực! Tôi cũng muốn được như vậy.",
						"thai": "ช่างเป็นคนคิดบวก! ฉันอยากเป็นแบบนั้นบ้าง",
						"hindi": "बहुत सकारात्मक! काश मैं भी ऐसा होता।"
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "kai",
					"spot": [
						5,
						4
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "수고하셨습니다. 이번에도 아쉽지만… 다음 기회를.",
						"english": "Good work. A pity this time... until next time.",
						"japanese": "「お疲れ様でした。今回も残念ですが…次の機会に。」",
						"chinese": "“辛苦了。这次很遗憾……下次再努力吧。”",
						"french": "Bon travail. Dommage cette fois... à la prochaine.",
						"spanish": "Buen trabajo. Una pena esta vez... hasta la próxima.",
						"vietnamese": "Bạn đã làm tốt. Thật tiếc lần này... hẹn lần sau.",
						"thai": "ทำได้ดี. น่าเสียดายในครั้งนี้... โอกาสหน้ายังมี",
						"hindi": "अच्छा काम किया। इस बार दुख है... अगले अवसर तक।"
					},
					"speaker": "kai"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…또 다음 기회?",
						"english": "...Next time again?",
						"japanese": "「…また次の機会？」",
						"chinese": "“……又下次机会？”",
						"french": "...Encore une prochaine fois ?",
						"spanish": "...¿Otra vez 'la próxima'?",
						"vietnamese": "...Lại lần sau nữa sao?",
						"thai": "...โอกาสหน้าอีกแล้วเหรอ?",
						"hindi": "...फिर से अगला अवसर?"
					},
					"speaker": "character_any"
				},
				{
					"duration_ms": 400,
					"type": "direction",
					"speaker": "kai",
					"action": "exit"
				},
				{
					"content": {
						"korean": "괜찮아! 이번에도 정말 열심히 했잖아!",
						"english": "It's okay! You really worked hard this time too!",
						"japanese": "「大丈夫！今回も本当に頑張ったじゃないか！」",
						"chinese": "“没关系！这次你也真的很努力了！”",
						"french": "Ça va ! Tu as vraiment fait de ton mieux cette fois aussi !",
						"spanish": "¡Está bien! ¡Realmente te esforzaste mucho esta vez también!",
						"vietnamese": "Không sao đâu! Lần này bạn cũng đã rất cố gắng rồi!",
						"thai": "ไม่เป็นไรหรอก! ครั้งนี้เธอก็ตั้งใจมากเลยนะ!",
						"hindi": "ठीक है! तुमने इस बार भी बहुत मेहनत की है!"
					},
					"speaker": "bex",
					"type": "speech",
					"emotion": "happy"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "열심히…만으로는 부족한 건가.",
						"english": "Just working hard... isn't enough, I guess.",
						"japanese": "「頑張るだけでは…足りないのか。」",
						"chinese": "“光是努力……还不够吗。”",
						"french": "Travailler dur... n'est peut-être pas suffisant.",
						"spanish": "¿Solo con esforzarse... no es suficiente?",
						"vietnamese": "Chỉ cố gắng... thôi là không đủ sao.",
						"thai": "แค่ความพยายาม... คงยังไม่พอสินะ",
						"hindi": "बस मेहनत करना... काफी नहीं है, क्या?"
					},
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "bex",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "happy",
					"type": "speech",
					"speaker": "bex",
					"content": {
						"korean": "실망할 시간 없어! 다시 준비하자!",
						"english": "No time for disappointment! Let's prepare again!",
						"japanese": "「がっかりしてる暇はない！また準備しよう！」",
						"chinese": "“没有时间失望了！再准备吧！”",
						"french": "Pas le temps d'être déçu ! Préparons-nous à nouveau !",
						"spanish": "¡No hay tiempo para decepciones! ¡Volvamos a prepararnos!",
						"vietnamese": "Không có thời gian để thất vọng đâu! Hãy chuẩn bị lại!",
						"thai": "ไม่มีเวลามาผิดหวังแล้ว! เตรียมตัวใหม่กันเถอะ!",
						"hindi": "निराश होने का समय नहीं है! फिर से तैयारी करें!"
					}
				},
				{
					"content": {
						"korean": "언제까지 준비만 해야 할까.",
						"english": "How long do I just have to keep preparing?",
						"japanese": "「いつまで準備ばかりしなきゃいけないんだろう。」",
						"chinese": "“到底要准备到什么时候呢。”",
						"french": "Jusqu'à quand devrai-je seulement me préparer ?",
						"spanish": "¿Hasta cuándo tendré que seguir preparándome?",
						"vietnamese": "Tôi sẽ phải chuẩn bị đến bao giờ nữa đây.",
						"thai": "ฉันจะต้องเตรียมตัวไปอีกนานแค่ไหนกันนะ",
						"hindi": "मुझे कब तक बस तैयारी ही करनी होगी?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "다음 기회. 그 말이 더 이상 희망처럼 들리지 않았다.",
						"english": "'Next time.' That word no longer sounded like hope.",
						"japanese": "「次の機会。その言葉は、もはや希望のように聞こえなかった。」",
						"chinese": "“下次机会。这句话听起来不再像希望了。”",
						"french": "'La prochaine fois.' Ce mot ne sonnait plus comme un espoir.",
						"spanish": "'La próxima oportunidad'. Esa frase ya no sonaba a esperanza.",
						"vietnamese": "'Lần sau.' Từ đó không còn nghe như hy vọng nữa.",
						"thai": "โอกาสหน้า. คำนั้นไม่ได้ฟังดูเหมือนความหวังอีกต่อไปแล้ว",
						"hindi": "'अगला अवसर'। वह शब्द अब आशा जैसा नहीं लगा।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "우린 대체, 어디로 가고 있는 걸까.",
						"english": "Where are we even going?",
						"japanese": "一体、私たちはどこへ向かっているのだろうか。",
						"chinese": "我们到底要去哪里？",
						"french": "Où allons-nous, bon sang ?",
						"spanish": "¿A dónde se supone que vamos?",
						"vietnamese": "Chúng ta rốt cuộc đang đi đâu vậy?",
						"thai": "สรุปแล้วเรากำลังไปที่ไหนกันแน่",
						"hindi": "हम आखिर कहाँ जा रहे हैं?"
					}
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 거대한 존재가 앞을 가로막았다.",
						"english": "A colossal, unknown entity blocked our path.",
						"japanese": "正体不明の巨大な存在が道を塞いだ。",
						"chinese": "一个身份不明的巨大存在挡住了去路。",
						"french": "Une entité colossale et inconnue nous a barré la route.",
						"spanish": "Una entidad colosal y desconocida nos bloqueó el paso.",
						"vietnamese": "Một thực thể khổng lồ, không rõ danh tính đã chặn đường.",
						"thai": "สิ่งมีชีวิตขนาดมหึมาที่ไม่รู้จักได้ขวางทางไว้",
						"hindi": "एक विशाल, अज्ञात अस्तित्व ने हमारा रास्ता रोक दिया।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…어서 와라. 다음 기회는 없다.",
						"english": "...Welcome. No second chances.",
						"japanese": "…ようこそ。次の機会はないぞ。",
						"chinese": "…欢迎。没有下次机会了。",
						"french": "...Bienvenue. Il n'y aura pas de prochaine fois.",
						"spanish": "...Bienvenido. No hay próxima oportunidad.",
						"vietnamese": "...Chào mừng. Không có cơ hội nào khác đâu.",
						"thai": "...ยินดีต้อนรับ ไม่มีโอกาสครั้งต่อไปหรอก",
						"hindi": "...स्वागत है। अगली बार कोई मौका नहीं मिलेगा।"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "다음 기회? 그런 건 필요 없어. 여기서 끝낼 거야.",
						"english": "Next chance? Don't need one. I'll finish this now.",
						"japanese": "次の機会？そんなものは要らない。ここで終わらせる。",
						"chinese": "下次机会？我不需要那种东西。我会在 Gửi tại đây 结束。",
						"french": "Prochaine chance ? Je n'en ai pas besoin. Je vais en finir ici.",
						"spanish": "¿Próxima oportunidad? No la necesito. Terminaré esto aquí.",
						"vietnamese": "Cơ hội tiếp theo ư? Không cần. Tôi sẽ kết thúc chuyện này ở đây.",
						"thai": "โอกาสหน้าเหรอ? ไม่จำเป็น ฉันจะจบเรื่องนี้ที่นี่แหละ",
						"hindi": "अगला मौका? उसकी ज़रूरत नहीं। मैं इसे यहीं खत्म करूँगा।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "포기해라. 다음은 없다. 너에게도, 아무에게도.",
						"english": "Surrender. There is no tomorrow. Not for you, nor anyone else.",
						"japanese": "諦めろ。次はない。お前にも、誰にもだ。",
						"chinese": "放弃吧。没有下次了。对你，对任何人都没有。",
						"french": "Abandonne. Il n'y a pas de suite. Ni pour toi, ni pour personne.",
						"spanish": "Ríndete. No hay siguiente. Ni para ti, ni para nadie.",
						"vietnamese": "Hãy bỏ cuộc đi. Không có lần sau đâu. Không phải cho ngươi, cũng không phải cho bất cứ ai.",
						"thai": "ยอมแพ้ซะ ไม่มีครั้งหน้าหรอก ไม่ว่าจะเป็นแก หรือใครก็ตาม",
						"hindi": "छोड़ दो। अगला कुछ नहीं है। न तुम्हारे लिए, न किसी और के लिए।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "아니. 다음은 반드시 있어. 내가 만들 거야.",
						"english": "No. There will be a next. I'll create it.",
						"japanese": "いや。次は必ずある。俺が作るんだ。",
						"chinese": "不。下次一定会有。我会创造它。",
						"french": "Non. Il y aura forcément une suite. Je la créerai.",
						"spanish": "No. Habrá un siguiente. Yo lo crearé.",
						"vietnamese": "Không. Chắc chắn sẽ có lần sau. Tôi sẽ tạo ra nó.",
						"thai": "ไม่ มีครั้งหน้าแน่นอน ฉันจะสร้างมันขึ้นมาเอง",
						"hindi": "नहीं। अगला ज़रूर होगा। मैं उसे बनाऊंगा।"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "bex",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "좌절하지 마! 우린 다시 도전할 수 있어!",
						"english": "Don't despair! We can try again!",
						"japanese": "諦めないで！また挑戦できるよ！",
						"chinese": "别沮丧！我们还能再试一次！",
						"french": "Ne désespère pas ! Nous pouvons réessayer !",
						"spanish": "¡No te desanimes! ¡Podemos intentarlo de nuevo!",
						"vietnamese": "Đừng nản lòng! Chúng ta có thể thử lại!",
						"thai": "อย่าท้อนะ! เราลองอีกครั้งได้!",
						"hindi": "हिम्मत मत हारो! हम फिर कोशिश कर सकते हैं!"
					},
					"speaker": "bex"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…결국, 여기까지인가. 하지만, 너도… 영원히….",
						"english": "...Is this finally it? But you... eternally...",
						"japanese": "…結局、ここまでか。だが、お前も…永遠に…。",
						"chinese": "…终究，到此为止了吗。但是，你也会…永远…。",
						"french": "...Alors, c'est la fin, après tout. Mais toi aussi... éternellement...",
						"spanish": "...Así que, al final, es hasta aquí. Pero tú también... para siempre...",
						"vietnamese": "...Cuối cùng, đến đây là hết sao. Nhưng ngươi cũng... mãi mãi...",
						"thai": "...สุดท้ายก็แค่นี้สินะ แต่แกก็... ตลอดไป...",
						"hindi": "...आखिरकार, बस यहीं तक? लेकिन तुम भी... हमेशा के लिए..."
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "뭐라고? 무슨 소리야?",
						"english": "What? What do you mean?",
						"japanese": "何だって？どういう意味だ？",
						"chinese": "你说什么？什么意思？",
						"french": "Quoi ? Qu'est-ce que tu racontes ?",
						"spanish": "¿Qué? ¿De qué hablas?",
						"vietnamese": "Cái gì? Ngươi nói gì vậy?",
						"thai": "ว่าไงนะ? พูดอะไรน่ะ?",
						"hindi": "क्या? क्या कह रहे हो?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "bex"
				},
				{
					"emotion": "happy",
					"type": "speech",
					"speaker": "bex",
					"content": {
						"korean": "우리가… 이긴 거야? 드디어 다음으로 가는 거야?",
						"english": "We... won? Are we finally advancing?",
						"japanese": "私たちが…勝ったのか？ついに次へ進めるのか？",
						"chinese": "我们…赢了吗？终于可以去下一个地方了吗？",
						"french": "On a... gagné ? On passe enfin à la suite ?",
						"spanish": "¿Nosotros... ganamos? ¿Finalmente pasamos a lo siguiente?",
						"vietnamese": "Chúng ta... thắng rồi sao? Cuối cùng cũng đến giai đoạn tiếp theo rồi sao?",
						"thai": "เรา... ชนะแล้วเหรอ? ในที่สุดก็ไปต่อได้แล้วเหรอ?",
						"hindi": "क्या हम... जीत गए? क्या हम आखिरकार आगे बढ़ रहे हैं?"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "승리. 그러나 왠지 모를 불안감이 가슴을 짓눌렀다. 다음이… 정말 있을까.",
						"english": "Victory. But a strange anxiety crushed my chest. Will there truly be a 'next'?",
						"japanese": "勝利。しかし、なぜか不安感が胸を締め付けた。次が…本当にあるのだろうか。",
						"chinese": "胜利。然而，一种莫名的不安感压在心头。下一个…真的会有吗？",
						"french": "Victoire. Pourtant, une inquiétude indéfinissable me serrait le cœur. Y aura-t-il... vraiment une suite ?",
						"spanish": "Victoria. Sin embargo, una inquietud desconocida oprimía mi pecho. ¿Habrá... realmente un siguiente?",
						"vietnamese": "Chiến thắng. Tuy nhiên, một cảm giác bất an không tên đè nặng trong lòng. Liệu có... thực sự có tiếp theo không?",
						"thai": "ชัยชนะ แต่ความรู้สึกไม่สบายใจที่ไม่ทราบสาเหตุกลับกดดันในใจ แล้วครั้งต่อไป... มันจะมีจริงหรือเปล่า",
						"hindi": "जीत। फिर भी, एक अज्ञात बेचैनी मेरे दिल पर भारी पड़ रही थी। क्या सच में... अगला कुछ होगा?"
					}
				}
			]
		}
	]
} as const;
