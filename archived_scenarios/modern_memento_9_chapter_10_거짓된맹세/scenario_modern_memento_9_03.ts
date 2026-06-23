export const scenario_modern_memento_9_03 = {
	"scenario_id": "modern_memento_9_03",
	"order": 3,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"echo": {
			"id": "mon_57f2edb8-aa81-4ce7-beed-ab009cd2ff35",
			"name": {
				"korean": "에코",
				"english": "Echo",
				"japanese": "エコー",
				"chinese": "艾可",
				"french": "Écho",
				"spanish": "Eco",
				"vietnamese": "Echo",
				"thai": "เอคโค่",
				"hindi": "इको"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/da48e2c2-6733-4f65-f8b6-f197af4ff700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e90605b9-372f-4bf1-cdec-56a2fdef0800/public"
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
					"content": {
						"korean": "어두운 골목, 오래된 아케이드의 잔해가 스산했다.",
						"english": "A dark alley, the eerie remains of an old arcade.",
						"japanese": "暗い路地裏、古びたアーケードの残骸が不気味だった。",
						"chinese": "黑暗的巷子里，老旧街机的残骸阴森森的。",
						"french": "Une ruelle sombre, les vestiges lugubres d'une ancienne arcade.",
						"spanish": "Un callejón oscuro, los espeluznantes restos de una antigua galería.",
						"vietnamese": "Một con hẻm tối, tàn tích rùng rợn của một khu arcade cũ.",
						"thai": "ตรอกมืด ซากอาร์เคดเก่าแก่ดูน่าขนลุก",
						"hindi": "एक अंधेरी गली, एक पुराने आर्केड के डरावने अवशेष।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "메멘토는 대체 뭘 지키려는 거지?",
						"english": "What is Memento trying to protect?",
						"japanese": "メメントは一体何を護ろうとしているんだ？",
						"chinese": "记忆到底想守护什么？",
						"french": "Que Memento essaie-t-il de protéger, bon sang ?",
						"spanish": "¿Qué diablos intenta proteger Memento?",
						"vietnamese": "Rốt cuộc Memento đang cố gắng bảo vệ điều gì?",
						"thai": "เมเมนโต้กำลังพยายามปกป้องอะไรกันแน่?",
						"hindi": "मेमेंटो आखिर क्या बचाना चाहता है?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"speaker": "echo",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "그는 원래… 맹세를 지키는 자였어.",
						"english": "He was originally... an oath keeper.",
						"japanese": "彼は元々…誓いを守る者だった。",
						"chinese": "他原本是……誓言的守护者。",
						"french": "Il était à l'origine... un gardien de serment.",
						"spanish": "Originalmente, él era... un guardián del juramento.",
						"vietnamese": "Anh ta ban đầu... là người giữ lời thề.",
						"thai": "เดิมทีเขาคือ... ผู้พิทักษ์คำสาบาน",
						"hindi": "वह असल में... एक शपथ का रक्षक था।"
					},
					"speaker": "echo",
					"type": "speech"
				},
				{
					"content": {
						"korean": "과거의 동료인가?",
						"english": "A former comrade?",
						"japanese": "過去の仲間か？",
						"chinese": "过去的同伴吗？",
						"french": "Un ancien camarade ?",
						"spanish": "¿Un antiguo camarada?",
						"vietnamese": "Một đồng đội cũ sao?",
						"thai": "อดีตสหายหรือ?",
						"hindi": "अतीत का साथी?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "나는 에코. …오랫동안 숨어 지냈지.",
						"english": "I am Echo. ...I've been in hiding for a long time.",
						"japanese": "私はエコー。…長い間、隠れて暮らしていた。",
						"chinese": "我是艾可。……我躲藏了很长时间。",
						"french": "Je suis Écho. ...Je me suis cachée longtemps.",
						"spanish": "Soy Eco. ...He estado escondida durante mucho tiempo.",
						"vietnamese": "Tôi là Echo. ...Tôi đã lẩn trốn rất lâu rồi.",
						"thai": "ฉันคือเอคโค่... ฉันซ่อนตัวอยู่นานแล้ว",
						"hindi": "मैं इको हूं। ...मैं लंबे समय से छिपा हुआ था।"
					},
					"speaker": "echo",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "echo",
					"type": "speech",
					"content": {
						"korean": "그에게 접근하지 마. 위험해.",
						"english": "Don't approach him. He's dangerous.",
						"japanese": "彼に近づくな。危険だ。",
						"chinese": "别靠近他。他很危险。",
						"french": "Ne l'approche pas. Il est dangereux.",
						"spanish": "No te acerques a él. Es peligroso.",
						"vietnamese": "Đừng lại gần anh ta. Anh ta nguy hiểm đấy.",
						"thai": "อย่าเข้าใกล้เขา อันตราย",
						"hindi": "उसके पास मत जाओ। वह खतरनाक है।"
					}
				}
			]
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
					"duration_ms": 500,
					"speaker": "echo"
				},
				{
					"content": {
						"korean": "벡스… 그 정보원 말이야. 전부 믿지 마.",
						"english": "Vex... About that informant. Don't trust everything.",
						"japanese": "ベックス… その情報源のことだが。全てを信じるな。",
						"chinese": "维克斯……关于那个情报员。别全信。",
						"french": "Vex... Cet informateur. Ne crois pas tout.",
						"spanish": "Vex... Sobre ese informante. No confíes en todo.",
						"vietnamese": "Vex... Về tay mật báo đó. Đừng tin tất cả.",
						"thai": "เวกซ์... เรื่องสายสืบคนนั้นน่ะ อย่าไปเชื่อทั้งหมดนะ",
						"hindi": "वेक्स... उस मुखबिर की बात है। सब पर विश्वास मत करना।"
					},
					"speaker": "echo",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "무슨 소리야? 확실한 정보였어.",
						"english": "What are you talking about? It was solid info.",
						"japanese": "何を言ってるんだ？確かな情報だったぞ。",
						"chinese": "你说什么？那是确凿的情报。",
						"french": "De quoi tu parles ? C'était une information fiable.",
						"spanish": "¿De qué hablas? Era información sólida.",
						"vietnamese": "Cậu nói gì vậy? Đó là thông tin đáng tin cậy mà.",
						"thai": "นายพูดอะไรน่ะ? มันเป็นข้อมูลที่แน่นอนนะ",
						"hindi": "तुम क्या कह रहे हो? वह पक्की जानकारी थी।"
					}
				},
				{
					"content": {
						"korean": "맹세는… 파괴만을 의미하는 게 아니었어.",
						"english": "The oath... it didn't just mean destruction.",
						"japanese": "誓いは…破壊だけを意味するものではなかった。",
						"chinese": "那个誓言……它不只意味着毁灭。",
						"french": "Le serment... ça ne signifiait pas seulement la destruction.",
						"spanish": "El juramento... no significaba solo destrucción.",
						"vietnamese": "Lời thề... không chỉ có nghĩa là hủy diệt.",
						"thai": "คำสาบาน... ไม่ได้หมายถึงแค่การทำลายล้างเท่านั้น",
						"hindi": "शपथ... इसका मतलब सिर्फ विनाश नहीं था।"
					},
					"speaker": "echo",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"speaker": "echo",
					"type": "speech",
					"content": {
						"korean": "하지만… 말해줄 수 없어.",
						"english": "But... I can't tell you.",
						"japanese": "しかし…言えない。",
						"chinese": "但是……我不能告诉你。",
						"french": "Mais... je ne peux pas te le dire.",
						"spanish": "Pero... no puedo decírtelo.",
						"vietnamese": "Nhưng... tôi không thể nói cho cậu biết.",
						"thai": "แต่ว่า... ฉันบอกนายไม่ได้",
						"hindi": "लेकिन... मैं तुम्हें बता नहीं सकता।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "누가 널 막는 거지?",
						"english": "Who's stopping you?",
						"japanese": "誰が君を止めているんだ？",
						"chinese": "谁在阻止你？",
						"french": "Qui t'en empêche ?",
						"spanish": "¿Quién te lo impide?",
						"vietnamese": "Ai đang ngăn cản cậu?",
						"thai": "ใครเป็นคนห้ามนาย?",
						"hindi": "तुम्हें कौन रोक रहा है?"
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "echo",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "메멘토는… 이용당하고 있어. 거대한 그림자에 의해.",
						"english": "Memento... is being used. By a vast shadow.",
						"japanese": "メメントは…利用されている。巨大な影によって。",
						"chinese": "记忆……正在被利用。被一个巨大的阴影。",
						"french": "Memento... est utilisé. Par une ombre immense.",
						"spanish": "Memento... está siendo usado. Por una sombra gigantesca.",
						"vietnamese": "Memento... đang bị lợi dụng. Bởi một bóng tối khổng lồ.",
						"thai": "เมเมนโต้... กำลังถูกใช้ประโยชน์ โดยเงามืดขนาดใหญ่",
						"hindi": "मेमेंटो... का इस्तेमाल किया जा रहा है। एक विशाल छाया द्वारा।"
					},
					"speaker": "echo",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자? 그게 뭔데.",
						"english": "A vast shadow? What's that?",
						"japanese": "巨大な影？それは何だ？",
						"chinese": "巨大的阴影？那是什么？",
						"french": "Une ombre immense ? C'est quoi ?",
						"spanish": "¿Una sombra gigantesca? ¿Qué es eso?",
						"vietnamese": "Một bóng tối khổng lồ? Đó là gì?",
						"thai": "เงามืดขนาดใหญ่? มันคืออะไร?",
						"hindi": "एक विशाल छाया? वह क्या है?"
					}
				},
				{
					"content": {
						"korean": "그들이… 보고 있어.",
						"english": "They... are watching.",
						"japanese": "彼らが…見ている。",
						"chinese": "他们……正在看着。",
						"french": "Ils... regardent.",
						"spanish": "Ellos... están observando.",
						"vietnamese": "Họ... đang theo dõi.",
						"thai": "พวกเขา... กำลังจับตาดูอยู่",
						"hindi": "वे... देख रहे हैं।"
					},
					"speaker": "echo",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "벡스가 준 자료 중… 일부는 조작됐어.",
						"english": "Some of the data Vex gave... was manipulated.",
						"japanese": "ベックスがくれた資料の一部は…操作されていた。",
						"chinese": "维克斯给的资料中……有一部分被篡改了。",
						"french": "Une partie des données que Vex a données... a été manipulée.",
						"spanish": "Parte de los datos que Vex dio... fueron manipulados.",
						"vietnamese": "Một phần dữ liệu Vex đưa... đã bị thao túng.",
						"thai": "ข้อมูลบางส่วนที่เวกซ์ให้มา... ถูกบิดเบือน",
						"hindi": "वेक्स ने जो डेटा दिया था... उसमें से कुछ में हेरफेर किया गया था।"
					},
					"speaker": "echo",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "조작? 누가 왜?",
						"english": "Manipulated? Who and why?",
						"japanese": "操作？誰が、なぜ？",
						"chinese": "篡改？谁？为什么？",
						"french": "Manipulé ? Qui et pourquoi ?",
						"spanish": "¿Manipulado? ¿Quién y por qué?",
						"vietnamese": "Thao túng? Ai và tại sao?",
						"thai": "บิดเบือน? ใครทำ? ทำไม?",
						"hindi": "हेरफेर? किसने और क्यों?"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "더 이상 말하면… 나도 위험해.",
						"english": "Say more, and I'm in danger.",
						"japanese": "これ以上は…私も危ない。",
						"chinese": "再说下去…我也会有危险。",
						"french": "Si j'en dis plus... je serai aussi en danger.",
						"spanish": "Si digo más... yo también estaré en peligro.",
						"vietnamese": "Nếu nói thêm… tôi cũng gặp nguy hiểm.",
						"thai": "ถ้าพูดมากกว่านี้… ฉันก็อันตรายด้วย.",
						"hindi": "और कहा तो... मैं भी खतरे में पड़ जाऊँगा।"
					},
					"speaker": "echo",
					"type": "speech"
				},
				{
					"speaker": "echo",
					"duration_ms": 400,
					"type": "direction",
					"direction": "down",
					"action": "exit"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"content": {
						"korean": "젠장, 벡스까지 믿을 수 없다고?",
						"english": "Damn it, even Vex can't be trusted?",
						"japanese": "くそっ、ベックスまで信じられないのか？",
						"chinese": "该死，连维克斯都不能相信吗？",
						"french": "Bon sang, on ne peut même pas faire confiance à Vex ?",
						"spanish": "¡Maldita sea, ¿ni siquiera Vex es de fiar?!",
						"vietnamese": "Chết tiệt, đến cả Vex cũng không tin được sao?",
						"thai": "ให้ตายสิ, แม้แต่เว็กซ์ก็เชื่อไม่ได้เหรอ?",
						"hindi": "धिक्कार है, वेक्स पर भी भरोसा नहीं किया जा सकता?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "메멘토의 맹세… 그게 파괴가 아니라면?",
						"english": "The Memento's Oath... what if it's not destruction?",
						"japanese": "メメントの誓い…それが破壊じゃないとしたら？",
						"chinese": "遗物誓约…如果那不是毁灭呢？",
						"french": "Le serment du Memento... et si ce n'était pas la destruction ?",
						"spanish": "El juramento del Memento... ¿y si no fuera destrucción?",
						"vietnamese": "Lời thề Memento… nếu đó không phải là sự hủy diệt thì sao?",
						"thai": "คำสาบานของเมเมนโต้… ถ้ามันไม่ใช่การทำลายล่ะ?",
						"hindi": "मेमेंटो की शपथ... अगर वो विनाश न हो तो?"
					},
					"speaker": "character_1",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "누군가 이 모든 걸 조종하고 있어.",
						"english": "Someone is pulling all the strings.",
						"japanese": "誰かがこの全てを操っている。",
						"chinese": "有人在幕后操纵这一切。",
						"french": "Quelqu'un tire les ficelles.",
						"spanish": "Alguien está controlando todo esto.",
						"vietnamese": "Ai đó đang thao túng tất cả những điều này.",
						"thai": "มีคนบงการเรื่องทั้งหมดนี้อยู่.",
						"hindi": "कोई इन सब को नियंत्रित कर रहा है।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "더 이상 물러설 곳은 없어.",
						"english": "There's no turning back now.",
						"japanese": "もう後には引けない。",
						"chinese": "已无退路。",
						"french": "Il n'y a plus de retour en arrière.",
						"spanish": "No hay marcha atrás.",
						"vietnamese": "Không còn đường lùi nữa rồi.",
						"thai": "ไม่มีที่ให้ถอยอีกแล้ว.",
						"hindi": "अब और पीछे हटने की जगह नहीं है।"
					}
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자에 짓눌렸다. 몸조차 가눌 수 없었다.",
						"english": "Crushed by a massive shadow. I couldn't even move my body.",
						"japanese": "巨大な影に押し潰された。体すら動かせなかった。",
						"chinese": "被巨大的阴影压制。连身体都无法动弹。",
						"french": "Écrasé par une ombre immense. Incapable de bouger un muscle.",
						"spanish": "Aplasta por una sombra colosal. No podía ni mover mi cuerpo.",
						"vietnamese": "Bị bóng tối khổng lồ đè nát. Đến cả cơ thể cũng không thể cử động.",
						"thai": "ถูกบดขยี้ด้วยเงาขนาดมหึมา ไม่อาจแม้แต่จะขยับตัวได้",
						"hindi": "एक विशाल परछाई ने कुचल दिया। मैं अपना शरीर भी हिला नहीं पा रहा था।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "어설픈 정의는… 죽음을 부를 뿐.",
						"english": "Amateur justice... only invites death.",
						"japanese": "未熟な正義は… 死を招くだけだ。",
						"chinese": "拙劣的正义……只会招致死亡。",
						"french": "Une justice maladroite… n'attire que la mort.",
						"spanish": "Una justicia torpe... solo trae la muerte.",
						"vietnamese": "Công lý nửa vời… chỉ chuốc lấy cái chết.",
						"thai": "ความยุติธรรมที่อ่อนแอ… มีแต่จะนำมาซึ่งความตาย",
						"hindi": "अधूरा न्याय... केवल मृत्यु को आमंत्रित करता है।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…다시 일어설 거야.",
						"english": "...I'll rise again.",
						"japanese": "…また立ち上がる。",
						"chinese": "……我会再次站起来。",
						"french": "…Je me relèverai.",
						"spanish": "...Me levantaré de nuevo.",
						"vietnamese": "…Ta sẽ đứng dậy lần nữa.",
						"thai": "…ฉันจะลุกขึ้นอีกครั้ง",
						"hindi": "...मैं फिर उठूंगा।"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "어둠 속에서 거대한 형체가 드러났다. 정체 모를 보스였다.",
						"english": "A colossal figure emerged from the darkness. An unknown boss.",
						"japanese": "闇の中から巨大な影が現れた。正体不明のボスだった。",
						"chinese": "黑暗中，一个巨大的身影显现。那是一个身份不明的头目。",
						"french": "Une silhouette colossale émergea des ténèbres. C'était un boss inconnu.",
						"spanish": "Una figura colosal emergió de la oscuridad. Era un jefe desconocido.",
						"vietnamese": "Một hình thể khổng lồ hiện ra từ bóng tối. Đó là một con boss vô danh.",
						"thai": "ร่างมหึมาปรากฏขึ้นจากความมืด มันคือบอสที่ไม่รู้จัก.",
						"hindi": "अँधेरे में एक विशालकाय आकृति उभरी। वह एक अज्ञात बॉस था।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "메멘토를 지키려 하는가? 어리석은 자.",
						"english": "Do you try to protect the Memento? Foolish one.",
						"japanese": "メメントを守ろうとするのか？愚かな者よ。",
						"chinese": "试图保护遗物？真是个傻瓜。",
						"french": "Tentes-tu de protéger le Memento ? Imbécile.",
						"spanish": "¿Intentas proteger el Memento? Necio.",
						"vietnamese": "Ngươi định bảo vệ Memento sao? Kẻ ngu ngốc.",
						"thai": "เจ้าพยายามปกป้องเมเมนโต้หรือ? ช่างโง่เขลา.",
						"hindi": "मेमेंटो को बचाने की कोशिश कर रहे हो? मूर्ख।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네가 이 모든 걸 꾸민 건가!",
						"english": "Was it you who orchestrated all of this?!",
						"japanese": "お前がこの全てを企んだのか！",
						"chinese": "是你策划了这一切吗？！",
						"french": "C'est toi qui as orchestré tout cela ?!",
						"spanish": "¡¿Fuiste tú quien orquestó todo esto?!",
						"vietnamese": "Ngươi đã sắp đặt tất cả chuyện này sao!",
						"thai": "เจ้าเป็นคนจัดฉากทั้งหมดนี้งั้นหรือ!",
						"hindi": "क्या यह सब तुम्हारी साज़िश है?!"
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "진실은… 너희가 감당할 수 없을 것이다.",
						"english": "The truth... you cannot handle it.",
						"japanese": "真実はお前たちには耐えられないだろう。",
						"chinese": "真相…你们无法承受。",
						"french": "La vérité... vous ne pourrez pas la supporter.",
						"spanish": "La verdad... no podréis soportarla.",
						"vietnamese": "Sự thật… các ngươi sẽ không thể chịu đựng được đâu.",
						"thai": "ความจริง… พวกเจ้าจะรับมันไม่ได้.",
						"hindi": "सच... तुम लोग इसे संभाल नहीं पाओगे।"
					}
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "그 맹세는 너희를 파멸로 이끌 것이다.",
						"english": "That oath will lead you to ruin.",
						"japanese": "その誓いは、お前たちを破滅へと導くだろう。",
						"chinese": "那个誓约会将你们引向毁灭。",
						"french": "Ce serment vous mènera à la ruine.",
						"spanish": "Ese juramento os llevará a la ruina.",
						"vietnamese": "Lời thề đó sẽ dẫn các ngươi đến diệt vong.",
						"thai": "คำสาบานนั้นจะนำเจ้าไปสู่ความพินาศ.",
						"hindi": "वह शपथ तुम्हें विनाश की ओर ले जाएगी।"
					}
				}
			],
			"win_dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "크크… 겨우 이 정도라니. 진짜 막은 건… 아무것도 없어.",
						"english": "Heh... Is that all? You haven't truly stopped anything.",
						"japanese": "クク… この程度とはな。本当に止めたものは… 何もないぞ。",
						"chinese": "呵呵……就这点程度吗？你什么都没真正阻止。",
						"french": "Héhé… C'est tout ce que tu as ? Tu n'as rien arrêté du tout.",
						"spanish": "Jeje... ¿Eso es todo? Realmente no has detenido nada.",
						"vietnamese": "Khà khà… Chỉ thế này thôi sao. Ngươi vẫn chưa ngăn cản được gì cả.",
						"thai": "คิกๆ… แค่นี้เองเหรอ สิ่งที่ขวางได้จริงๆ… ไม่มีอะไรเลย",
						"hindi": "हह... बस इतना ही? तुमने कुछ भी नहीं रोका है।"
					}
				},
				{
					"content": {
						"korean": "아직 끝난 게 아니야.",
						"english": "It's not over yet.",
						"japanese": "まだ終わってないぞ。",
						"chinese": "还没结束。",
						"french": "Ce n'est pas encore fini.",
						"spanish": "Aún no ha terminado.",
						"vietnamese": "Chưa kết thúc đâu.",
						"thai": "ยังไม่จบหรอก",
						"hindi": "अभी खत्म नहीं हुआ है।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "쓰러진 보스 뒤로, 더 거대한 어둠이 서서히 드러나고 있었다.",
						"english": "Behind the fallen boss, a greater darkness slowly emerged.",
						"japanese": "倒れたボスの後ろから、さらに巨大な闇が徐々に姿を現していた。",
						"chinese": "在倒下的首领身后，更大的黑暗正在缓缓显现。",
						"french": "Derrière le boss vaincu, une obscurité plus grande émergeait lentement.",
						"spanish": "Detrás del jefe caído, una oscuridad aún mayor emergía lentamente.",
						"vietnamese": "Đằng sau tên trùm đã gục ngã, một bóng tối khổng lồ hơn đang dần lộ diện.",
						"thai": "เบื้องหลังบอสที่ล้มลง ความมืดมิดที่ยิ่งใหญ่กว่าก็ค่อยๆ ปรากฏขึ้น",
						"hindi": "गिरे हुए बॉस के पीछे, एक और भी बड़ी परछाई धीरे-धीरे उभर रही थी।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"메멘토, 그는 맹세를 지키는 자.",
			"그러나 그를 지키려는 순간, 오래된 그림자가 속삭였다.",
			"믿었던 진실이 뒤틀리고, 모든 것이 의심스러워졌다.",
			"이 거대한 도시, 누구도 믿을 수 없었다."
		],
		"english": [
			"Memento, the oath keeper.",
			"But the moment I tried to protect him, an ancient shadow whispered.",
			"The truth I believed twisted, and everything became doubtful.",
			"In this vast city, no one could be trusted."
		],
		"japanese": [
			"メメント、彼は誓いを守る者。",
			"しかし、彼を守ろうとした瞬間、古き影が囁いた。",
			"信じていた真実が歪み、すべてが疑わしくなった。",
			"この巨大な都市、誰も信用できなかった。"
		],
		"chinese": [
			"记忆，他是誓言的守护者。",
			"然而，当我想保护他时，一道古老的阴影低语着。",
			"曾深信不疑的真相扭曲了，一切都变得可疑起来。",
			"在这座巨大的城市里，没有人可以信任。"
		],
		"french": [
			"Memento, le gardien du serment.",
			"Mais au moment où j'ai tenté de le protéger, une ombre ancienne a chuchoté.",
			"La vérité à laquelle je croyais se tordit, et tout devint suspect.",
			"Dans cette immense ville, personne n'était digne de confiance."
		],
		"spanish": [
			"Memento, el guardián del juramento.",
			"Pero en el instante en que intenté protegerlo, una sombra antigua susurró.",
			"La verdad que creía se distorsionó, y todo se volvió dudoso.",
			"En esta vasta ciudad, no se podía confiar en nadie."
		],
		"vietnamese": [
			"Memento, người giữ lời thề.",
			"Nhưng khoảnh khắc tôi cố gắng bảo vệ anh ta, một bóng tối cổ xưa đã thì thầm.",
			"Sự thật tôi tin tưởng bị bóp méo, và mọi thứ trở nên đáng ngờ.",
			"Trong thành phố rộng lớn này, không ai có thể tin tưởng được."
		],
		"thai": [
			"เมเมนโต้ ผู้พิทักษ์คำสาบาน",
			"แต่ในนาทีที่ฉันพยายามจะปกป้องเขา เงาเก่าแก่ก็กระซิบ",
			"ความจริงที่เชื่อมั่นบิดเบี้ยวไป และทุกสิ่งก็เต็มไปด้วยข้อสงสัย",
			"ในเมืองอันกว้างใหญ่นี้ ไม่มีใครที่น่าเชื่อถือได้เลย"
		],
		"hindi": [
			"मेमेंटो, वह शपथ का रक्षक।",
			"पर जैसे ही मैंने उसे बचाने की कोशिश की, एक पुरानी परछाई फुसफुसाई।",
			"जिस सच पर विश्वास किया, वह मुड़ गया, और सब कुछ संदिग्ध हो गया।",
			"इस विशाल शहर में, किसी पर भरोसा नहीं किया जा सकता था।"
		]
	}
} as const;
