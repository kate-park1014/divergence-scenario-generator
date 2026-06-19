export const scenario_modern_otto_12_01 = {
	"scenario_id": "modern_otto_12_01",
	"order": 1,
	"act": "intro",
	"theme": "modern",
	"actors": {
		"dax": {
			"id": "mon_08d5b43e-f9ab-4469-9064-855e170b0cdc",
			"name": {
				"korean": "닥스",
				"english": "Dax",
				"japanese": "ダックス",
				"chinese": "达克斯",
				"french": "Dax",
				"spanish": "Dax",
				"vietnamese": "Dax",
				"thai": "แด็กซ์",
				"hindi": "डैक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/84bb11db-6eb4-4500-d274-222e8b100100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5d325a75-bd91-4758-7b3f-ad9a97e52700/public"
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
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "끝없이 펼쳐진 디지털 미로. 익숙한 화면이 다시 나타났다.",
						"english": "An endlessly unfolding digital labyrinth. The familiar screen reappeared.",
						"japanese": "際限なく広がるデジタル迷路。見慣れた画面が再び現れた。",
						"chinese": "无限延伸的数字迷宫。熟悉的画面再次出现。",
						"french": "Un labyrinthe numérique qui s'étend à l'infini. L'écran familier est réapparu.",
						"spanish": "Un laberinto digital que se extiende sin fin. La pantalla familiar reapareció.",
						"vietnamese": "Một mê cung số mở ra vô tận. Màn hình quen thuộc lại hiện lên.",
						"thai": "เขาวงกตดิจิทัลที่ขยายออกไปไม่สิ้นสุด หน้าจอที่คุ้นเคยปรากฏขึ้นอีกครั้ง",
						"hindi": "एक अंतहीन डिजिटल भूलभुलैया। परिचित स्क्रीन फिर से दिखाई दी।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "또... 처음부터?",
						"english": "Again... from the top?",
						"japanese": "また…最初から？",
						"chinese": "又要……从头开始？",
						"french": "Encore... depuis le début ?",
						"spanish": "¿Otra vez... desde el principio?",
						"vietnamese": "Lại... từ đầu?",
						"thai": "อีกแล้ว... จากต้น?",
						"hindi": "फिर से... शुरू से?"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "아쉽지만 그래요, 탐험대. 완벽한 보안을 위해선 반복이 필수죠.",
						"english": "Unfortunately, yes, Explorer. Repetition is essential for perfect security.",
						"japanese": "残念ですが、そうです、探検隊。完璧なセキュリティのためには繰り返しが不可欠です。",
						"chinese": "很遗憾，是的，探险队。为了完美的安全性，重复是必须的。",
						"french": "Malheureusement oui, Explorateur. La répétition est essentielle pour une sécurité parfaite.",
						"spanish": "Lamentablemente, sí, Explorador. La repetición es esencial para una seguridad perfecta.",
						"vietnamese": "Rất tiếc, đúng vậy, Đoàn thám hiểm. Lặp lại là điều cần thiết để bảo mật hoàn hảo.",
						"thai": "น่าเสียดายที่ใช่ครับ ทีมสำรวจ การทำซ้ำเป็นสิ่งจำเป็นสำหรับความปลอดภัยที่สมบูรณ์แบบ",
						"hindi": "दुर्भाग्य से, हाँ, अन्वेषक। उत्तम सुरक्षा के लिए पुनरावृत्ति आवश्यक है।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "자, 다시 시작해볼까요?",
						"english": "So, shall we start again?",
						"japanese": "さあ、また始めましょうか？",
						"chinese": "那么，我们再开始一次吧？",
						"french": "Alors, on recommence ?",
						"spanish": "¿Entonces, empezamos de nuevo?",
						"vietnamese": "Vậy, chúng ta bắt đầu lại nhé?",
						"thai": "เอาล่ะ เรามาเริ่มใหม่กันไหม?",
						"hindi": "तो, क्या हम फिर से शुरू करें?"
					}
				},
				{
					"spot": [
						4,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "dax",
					"type": "direction"
				},
				{
					"speaker": "dax",
					"content": {
						"korean": "웃기는 소리!",
						"english": "Ridiculous!",
						"japanese": "馬鹿な！",
						"chinese": "荒谬！",
						"french": "Ridicule !",
						"spanish": "¡Ridículo!",
						"vietnamese": "Thật nực cười!",
						"thai": "ไร้สาระ!",
						"hindi": "हास्यास्पद!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "완벽한 보안? 당신의 유희겠지!",
						"english": "Perfect security? It's just your game!",
						"japanese": "完璧なセキュリティ？あなたの遊びだろう！",
						"chinese": "完美的安全性？那只是你的游戏！",
						"french": "Sécurité parfaite ? C'est juste votre divertissement !",
						"spanish": "¿Seguridad perfecta? ¡Es solo tu juego!",
						"vietnamese": "Bảo mật hoàn hảo? Chỉ là trò tiêu khiển của ngươi thôi!",
						"thai": "ความปลอดภัยที่สมบูรณ์แบบ? มันก็แค่เกมของคุณ!",
						"hindi": "उत्तम सुरक्षा? यह तो बस तुम्हारा खेल है!"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "닥스!",
						"english": "Dax!",
						"japanese": "「ダックス！」",
						"chinese": "「达克斯!」",
						"french": "«Dax!»",
						"spanish": "«¡Dax!»",
						"vietnamese": "«Dax!»",
						"thai": "「แด็กซ์!」",
						"hindi": "「डैक्स!」"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "dax",
					"type": "direction"
				},
				{
					"emotion": "angry",
					"speaker": "dax",
					"content": {
						"korean": "이제 알겠군. 당신은 우리를 통과시킬 생각이 없어.",
						"english": "I see now. You have no intention of letting us through.",
						"japanese": "「分かったぞ。私たちを通す気はないな。」",
						"chinese": "「我明白了。你根本没打算让我们通过。」",
						"french": "«Je comprends maintenant. Vous n'avez aucune intention de nous laisser passer.»",
						"spanish": "«Ya veo. No tienes intención de dejarnos pasar.»",
						"vietnamese": "«Tôi hiểu rồi. Ngươi không hề có ý định cho chúng ta qua.»",
						"thai": "「ฉันเข้าใจแล้ว นายไม่มีเจตนาจะให้เราผ่านไปเลย」",
						"hindi": "「मैं अब समझ गया। तुम्हारा हमें जाने देने का कोई इरादा नहीं है。」"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "무슨 섭섭한 말씀을. 저는 그저 시스템의 규칙을 따를 뿐입니다.",
						"english": "Oh, what a hurtful thing to say. I merely follow the system's rules.",
						"japanese": "「ひどい言い草ですね。私はただシステムのルールに従っているだけです。」",
						"chinese": "「何出此言？我只是遵循系统的规则罢了。」",
						"french": "«Quelle remarque désagréable. Je ne fais que suivre les règles du système.»",
						"spanish": "«Qué palabras tan hirientes. Simplemente sigo las reglas del sistema.»",
						"vietnamese": "«Sao lại nói lời khó nghe vậy. Tôi chỉ là đang tuân theo quy tắc của hệ thống thôi.»",
						"thai": "「พูดอะไรน่ารังเกียจอย่างนั้น ผมแค่ทำตามกฎของระบบเท่านั้นเอง」",
						"hindi": "「कितनी दुखद बात है। मैं तो बस सिस्टम के नियमों का पालन कर रहा हूँ。」"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "규칙? 끝없는 재인증이 규칙이라고?",
						"english": "Rules? Endless re-authentication is a rule?",
						"japanese": "「ルール？終わりのない再認証がルールだと？」",
						"chinese": "「规则？无休止的重新认证也是规则？」",
						"french": "«Des règles? Une réauthentification sans fin est une règle?»",
						"spanish": "«¿Reglas? ¿Una reautenticación sin fin es una regla?»",
						"vietnamese": "«Quy tắc ư? Việc xác thực lại vô tận là quy tắc ư?»",
						"thai": "「กฎเหรอ? การยืนยันตัวตนซ้ำไม่รู้จบเนี่ยนะคือกฎ?」",
						"hindi": "「नियम? अंतहीन पुनः प्रमाणीकरण एक नियम है?」"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "이 모든 게 그의 의도적인 방해야.",
						"english": "All of this is his deliberate obstruction.",
						"japanese": "「これらすべて、彼の意図的な妨害だ。」",
						"chinese": "「这一切都是他故意的阻挠。」",
						"french": "«Tout cela n'est qu'une obstruction délibérée de sa part.»",
						"spanish": "«Todo esto es su obstrucción deliberada.»",
						"vietnamese": "«Tất cả những điều này đều là sự cản trở cố ý của hắn.»",
						"thai": "「ทั้งหมดนี้เป็นการขัดขวางโดยเจตนาของเขา」",
						"hindi": "「यह सब उसकी जानबूझकर की गई बाधा है。」"
					},
					"emotion": "angry"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "dax",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"emotion": "angry",
					"speaker": "dax",
					"content": {
						"korean": "이 시스템은 당신의 오락거리야, 오토!",
						"english": "This system is your plaything, Otto!",
						"japanese": "「このシステムは、お前の娯楽だ、オットー！」",
						"chinese": "「这个系统是你的消遣，奥托！」",
						"french": "«Ce système est votre jouet, Otto!»",
						"spanish": "«¡Este sistema es tu pasatiempo, Otto!»",
						"vietnamese": "«Hệ thống này là trò tiêu khiển của ngươi, Otto!»",
						"thai": "「ระบบนี้เป็นของเล่นของนาย อ็อตโต้!」",
						"hindi": "「यह सिस्टम तुम्हारा मनोरंजन है, ओटो!」"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "오락이라… 흥미로운 관점이군요.",
						"english": "A plaything... an interesting perspective.",
						"japanese": "「娯楽ですか…興味深い見方ですね。」",
						"chinese": "「消遣啊……真是个有趣的观点。」",
						"french": "«Un jouet... une perspective intéressante.»",
						"spanish": "«Un pasatiempo... una perspectiva interesante.»",
						"vietnamese": "«Tiêu khiển ư... một quan điểm thú vị đấy.»",
						"thai": "「ของเล่นเหรอ... เป็นมุมมองที่น่าสนใจนะ」",
						"hindi": "「मनोरंजन... एक दिलचस्प दृष्टिकोण。」"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "비웃는 거야 지금?",
						"english": "Are you mocking me now?",
						"japanese": "「今、私を嘲笑っているのか？」",
						"chinese": "「你现在是在嘲笑我吗？」",
						"french": "«Vous vous moquez de moi maintenant?»",
						"spanish": "«¿Te estás burlando de mí ahora?»",
						"vietnamese": "«Ngươi đang chế nhạo ta sao?»",
						"thai": "「ตอนนี้กำลังเยาะเย้ยฉันอยู่เหรอ?」",
						"hindi": "「क्या तुम अब मेरा मज़ाक उड़ा रहे हो?」"
					}
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "저 가면 뒤에 숨겨진 진실을 봐야 해!",
						"english": "You must see the truth hidden behind that mask!",
						"japanese": "「あの仮面の裏に隠された真実を見なければならない！」",
						"chinese": "「你必须看到那面具背后隐藏的真相！」",
						"french": "«Tu dois voir la vérité cachée derrière ce masque!»",
						"spanish": "«¡Debes ver la verdad oculta detrás de esa máscara!»",
						"vietnamese": "«Ngươi phải nhìn thấy sự thật ẩn giấu đằng sau chiếc mặt nạ đó!»",
						"thai": "「นายต้องเห็นความจริงที่ซ่อนอยู่เบื้องหลังหน้ากากนั้น!」",
						"hindi": "「तुम्हें उस नकाब के पीछे छिपी सच्चाई देखनी होगी!」"
					},
					"emotion": "angry"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "또 다시, 처음으로 돌아왔다. 절망감이 탐험대를 덮쳤다.",
						"english": "Once again, we're back to square one. Despair engulfed the expedition team.",
						"japanese": "「またしても、振り出しに戻った。絶望感が探検隊を襲った。」",
						"chinese": "「又一次，回到了原点。绝望笼罩了探险队。」",
						"french": "«Encore une fois, nous sommes revenus au point de départ. Le désespoir a submergé l'équipe d'expédition.»",
						"spanish": "«Una vez más, hemos vuelto al principio. La desesperación se apoderó del equipo de expedición.»",
						"vietnamese": "«Lại một lần nữa, chúng ta trở về điểm xuất phát. Sự tuyệt vọng bao trùm đội thám hiểm.»",
						"thai": "「อีกครั้งที่เรากลับมาที่จุดเริ่มต้น ความสิ้นหวังเข้าครอบงำทีมสำรวจ」",
						"hindi": "「एक बार फिर, हम वहीं आ गए जहाँ से शुरू किया था। निराशा ने अभियान दल को घेर लिया。」"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "안 돼… 또 시작이야?",
						"english": "No… not again?",
						"japanese": "だめだ…また始まった？",
						"chinese": "不…又来了？",
						"french": "Non… pas encore ?",
						"spanish": "No… ¿otra vez?",
						"vietnamese": "Không… lại nữa sao?",
						"thai": "ไม่นะ… อีกแล้วเหรอ?",
						"hindi": "नहीं… फिर से शुरू हो गया?"
					},
					"type": "speech"
				},
				{
					"speaker": "dax",
					"type": "direction",
					"spot": [
						3,
						3
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "dax",
					"content": {
						"korean": "오토! 당장 멈춰! 이 짓이 무슨 의미가 있어!",
						"english": "Otto! Stop at once! What's the point of this?",
						"japanese": "オットー！すぐにやめろ！こんなことして何の意味がある！",
						"chinese": "奥托！立刻住手！这有什么意义！",
						"french": "Otto ! Arrête tout de suite ! À quoi bon tout ça ?",
						"spanish": "¡Otto! ¡Detente ahora mismo! ¿Qué sentido tiene esto?",
						"vietnamese": "Otto! Dừng lại ngay! Chuyện này có ý nghĩa gì chứ!",
						"thai": "อ็อตโต้! หยุดเดี๋ยวนี้! เรื่องนี้มันมีประโยชน์อะไร!",
						"hindi": "ओटो! तुरंत रुक जाओ! इसका क्या मतलब है!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "글쎄요, 탐험대. 아직 해답을 찾지 못했으니 계속되어야겠죠.",
						"english": "Well, Explorer. We haven't found the answer yet, so it must continue.",
						"japanese": "さあ、探検隊。まだ答えが見つかっていないので、続けなければならないでしょう。",
						"chinese": "嗯，探险队。既然还没找到答案，就得继续下去。",
						"french": "Eh bien, explorateur. Nous n'avons pas encore trouvé la réponse, alors ça doit continuer.",
						"spanish": "Bueno, Explorador. Aún no hemos encontrado la respuesta, así que debe continuar.",
						"vietnamese": "À, Đoàn thám hiểm. Chúng ta chưa tìm thấy câu trả lời, nên nó phải tiếp tục thôi.",
						"thai": "เอาล่ะ นักสำรวจ เรายังหาคำตอบไม่พบ มันก็ต้องดำเนินต่อไป",
						"hindi": "खैर, अन्वेषक। हमें अभी तक जवाब नहीं मिला है, इसलिए इसे जारी रखना होगा।"
					},
					"emotion": "base"
				},
				{
					"speaker": "dax",
					"content": {
						"korean": "당신은… 악마야!",
						"english": "You… you're a demon!",
						"japanese": "あなたは…悪魔だ！",
						"chinese": "你…你是恶魔！",
						"french": "Tu es… un démon !",
						"spanish": "¡Tú eres… un demonio!",
						"vietnamese": "Ngươi… ngươi là quỷ dữ!",
						"thai": "แก… แกมันปีศาจ!",
						"hindi": "तुम… तुम एक राक्षस हो!"
					},
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 데이터 덩어리가 나타났다. 오토의 시스템이 만들어낸 부산물.",
						"english": "A massive data mass appeared. A byproduct of Otto's system.",
						"japanese": "巨大なデータ塊が現れた。オットーのシステムが生み出した副産物だ。",
						"chinese": "一个巨大的数据块出现了。奥托系统产生的副产品。",
						"french": "Une masse de données colossale est apparue. Un sous-produit du système d'Otto.",
						"spanish": "Una enorme masa de datos apareció. Un subproducto del sistema de Otto.",
						"vietnamese": "Một khối dữ liệu khổng lồ xuất hiện. Sản phẩm phụ do hệ thống của Otto tạo ra.",
						"thai": "มวลข้อมูลขนาดใหญ่ปรากฏขึ้น ผลพลอยได้จากระบบของอ็อตโต้",
						"hindi": "एक विशाल डेटा समूह प्रकट हुआ। ओटो के सिस्टम का एक उप-उत्पाद।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "콰앙-!",
						"english": "CRASH-!",
						"japanese": "ドカーン！",
						"chinese": "轰隆-！",
						"french": "BOUM- !",
						"spanish": "¡CRASH-!",
						"vietnamese": "RẦM-!",
						"thai": "ปัง-!",
						"hindi": "धमाका-!"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이게… 뭐야?",
						"english": "What… what is this?",
						"japanese": "これ…何だ？",
						"chinese": "这…这是什么？",
						"french": "Qu'est-ce que… c'est ?",
						"spanish": "¿Qué… qué es esto?",
						"vietnamese": "Cái này… là gì?",
						"thai": "นี่มัน… อะไร?",
						"hindi": "यह… क्या है?"
					}
				},
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction",
					"speaker": "dax"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "이놈이 당신의 수하인가, 오토! 우리를 가두기 위한 인형!",
						"english": "Is this thing your subordinate, Otto! A puppet to trap us!",
						"japanese": "こいつがお前の手下か、オットー！我々を閉じ込めるための人形め！",
						"chinese": "这是你的手下吗，奥托！一个困住我们的傀儡！",
						"french": "C'est ton subordonné, Otto ! Une marionnette pour nous piéger !",
						"spanish": "¡¿Es esta cosa tu subordinado, Otto?! ¡Una marioneta para atraparnos!",
						"vietnamese": "Kẻ này là tay sai của ngươi sao, Otto! Một con rối để nhốt chúng ta!",
						"thai": "นี่คือสมุนของแกเหรอ อ็อตโต้! หุ่นเชิดไว้ขังพวกเรา!",
						"hindi": "क्या यह तुम्हारा अधीनस्थ है, ओटो! हमें फंसाने के लिए एक कठपुतली!"
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "수하? 글쎄요, 그저 시스템의 오류를 처리하는… 보안 장치랄까?",
						"english": "Subordinate? Well, let's just say it's… a security device that handles system errors.",
						"japanese": "手下？さあ、ただのシステムエラーを処理する…セキュリティ装置とでも言いましょうか？",
						"chinese": "手下？嗯，姑且算是…一个处理系统错误的安保装置吧？",
						"french": "Subordonné ? Eh bien, disons plutôt… un dispositif de sécurité qui gère les erreurs système ?",
						"spanish": "¿Subordinado? Bueno, digamos que es… un dispositivo de seguridad que maneja los errores del sistema.",
						"vietnamese": "Tay sai? À, cứ cho là… một thiết bị bảo mật xử lý lỗi hệ thống đi?",
						"thai": "สมุนเหรอ? อืม ก็แค่… อุปกรณ์รักษาความปลอดภัยที่จัดการกับข้อผิดพลาดของระบบน่ะ?",
						"hindi": "अधीनस्थ? खैर, यह बस… एक सुरक्षा उपकरण है जो सिस्टम की त्रुटियों को संभालता है।"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "잘 해봐요, 탐험대. 이번엔 좀 더 버티기를 바라죠.",
						"english": "Good luck, Explorer. I hope you last a bit longer this time.",
						"japanese": "頑張ってください、探検隊。今回はもう少し長く持ちこたえてくれるといいのですが。",
						"chinese": "祝你好运，探险队。希望这次你能坚持得久一点。",
						"french": "Bonne chance, explorateur. J'espère que tu tiendras un peu plus longtemps cette fois.",
						"spanish": "Buena suerte, Explorador. Espero que aguantes un poco más esta vez.",
						"vietnamese": "Làm tốt nhé, Đoàn thám hiểm. Lần này tôi hy vọng các bạn sẽ trụ được lâu hơn một chút.",
						"thai": "ขอให้โชคดีนะ นักสำรวจ หวังว่าคราวนี้จะทนได้นานขึ้นหน่อย",
						"hindi": "शुभकामनाएं, अन्वेषक। मुझे उम्मीद है कि इस बार आप थोड़ी देर और टिकेंगे।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "…크윽… 시스템… 오류…",
						"english": "...Ugh... System... error...",
						"japanese": "「…ぐっ…システム…エラー…」",
						"chinese": "……呃……系统……错误……",
						"french": "...Ugh... Erreur... système...",
						"spanish": "...Ugh... Error... del sistema...",
						"vietnamese": "...Ực... Lỗi... hệ thống...",
						"thai": "...อึก... ระบบ... ผิดพลาด...",
						"hindi": "...उह... सिस्टम... त्रुटि..."
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "해치웠나?",
						"english": "Did we defeat it?",
						"japanese": "「やったか？」",
						"chinese": "解决掉了吗？",
						"french": "On l'a eu ?",
						"spanish": "¿Lo hemos derrotado?",
						"vietnamese": "Chúng ta đã xử lý nó rồi sao?",
						"thai": "เราจัดการมันได้แล้วเหรอ?",
						"hindi": "क्या हमने इसे हरा दिया?"
					}
				},
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction",
					"speaker": "dax"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "이놈을 쓰러뜨려도, 오토는 또 다른 장난감을 보낼 거야.",
						"english": "Even if we defeat this one, Otto will just send another toy.",
						"japanese": "「こいつを倒しても、オットーはまた別のオモチャを送ってくるだろう。」",
						"chinese": "即使打败了它，奥托也会送来另一个玩具。",
						"french": "Même si on le bat, Otto enverra juste un autre jouet.",
						"spanish": "Incluso si derrotamos a este, Otto enviará otro juguete.",
						"vietnamese": "Ngay cả khi đánh bại cái này, Otto sẽ lại gửi một món đồ chơi khác.",
						"thai": "ถึงแม้เราจะจัดการตัวนี้ได้ ออตโต้ก็จะส่งของเล่นตัวอื่นมาอีก",
						"hindi": "अगर हम इसे हरा भी दें, तो ओटो बस एक और खिलौना भेजेगा।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그럼 우린… 어떻게 해야 해?",
						"english": "So what... should we do?",
						"japanese": "「じゃあ、私たちは…どうすればいいの？」",
						"chinese": "那我们……该怎么办？",
						"french": "Alors... que devons-nous faire ?",
						"spanish": "Entonces... ¿qué debemos hacer?",
						"vietnamese": "Vậy chúng ta... nên làm gì?",
						"thai": "แล้วเรา... ต้องทำยังไง?",
						"hindi": "तो हम... क्या करें?"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "미로는 여전히 끝이 보이지 않았다. 또 다른 시련이 기다리고 있었다.",
						"english": "The maze still had no end in sight. Another trial awaited.",
						"japanese": "「迷路は依然として終わりが見えなかった。また別の試練が待ち受けていた。」",
						"chinese": "迷宫依然望不到尽头。另一个考验正在等待着。",
						"french": "Le labyrinthe n'avait toujours pas de fin en vue. Une autre épreuve attendait.",
						"spanish": "El laberinto aún no tenía fin a la vista. Otra prueba esperaba.",
						"vietnamese": "Mê cung vẫn không thấy hồi kết. Một thử thách khác đang chờ đợi.",
						"thai": "เขาวงกตยังไม่มีจุดสิ้นสุด การทดลองอื่นกำลังรออยู่",
						"hindi": "भूलभुलैया का अंत अभी भी नहीं दिख रहा था। एक और परीक्षा इंतज़ार कर रही थी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "하지만 오토의 친절 뒤에 숨겨진 비웃음은… 더 이상 숨겨지지 않았다.",
						"english": "But the sneer hidden behind Otto's kindness... was no longer concealed.",
						"japanese": "「だが、オットーの親切心に隠された嘲笑は…もう隠されなかった。」",
						"chinese": "然而，奥托善意背后隐藏的嘲讽……已不再掩饰。",
						"french": "Mais le ricanement caché derrière la gentillesse d'Otto... n'était plus dissimulé.",
						"spanish": "Pero la burla oculta detrás de la amabilidad de Otto... ya no se ocultaba.",
						"vietnamese": "Nhưng nụ cười khẩy ẩn sau vẻ tử tế của Otto... không còn che giấu được nữa.",
						"thai": "แต่รอยยิ้มเยาะที่ซ่อนอยู่เบื้องหลังความเมตตาของออตโต้... ก็ไม่อาจซ่อนได้อีกต่อไป",
						"hindi": "लेकिन ओटो की दयालुता के पीछे छिपी उपहास... अब और छिपी नहीं थी।"
					}
				}
			],
			"lose_dialogue": [
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "크르릉… 인증… 실패…",
						"english": "Grrr... Authentication... failed...",
						"japanese": "「グルルル…認証…失敗…」",
						"chinese": "咕噜噜……认证……失败……",
						"french": "Grrr... Authentification... échouée...",
						"spanish": "Grrr... Autenticación... fallida...",
						"vietnamese": "Gừừừ... Xác thực... thất bại...",
						"thai": "ครืน... การยืนยัน... ล้มเหลว...",
						"hindi": "गुर्र... प्रमाणीकरण... विफल..."
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "이런, 아쉽네요. 다음엔 더 좋은 결과를 기대합니다.",
						"english": "Oh dear, what a shame. I expect better results next time.",
						"japanese": "「おや、残念ですね。次回はもっと良い結果を期待していますよ。」",
						"chinese": "哎呀，真可惜。下次期待更好的结果哦。",
						"french": "Oh là là, quel dommage. J'attends de meilleurs résultats la prochaine fois.",
						"spanish": "Oh, qué pena. Espero mejores resultados la próxima vez.",
						"vietnamese": "Ôi chao, thật đáng tiếc. Lần tới tôi mong đợi kết quả tốt hơn đấy.",
						"thai": "โอ้ ไม่นะ น่าเสียดายจริงๆ ครั้งหน้าฉันหวังผลลัพธ์ที่ดีกว่านี้นะ",
						"hindi": "ओह प्रिय, क्या अफ़सोस की बात है। अगली बार बेहतर परिणामों की उम्मीद करता हूँ।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "포기할 순 없어…!",
						"english": "I can't give up...!",
						"japanese": "「諦めるわけにはいかない…！」",
						"chinese": "不能放弃……！",
						"french": "Je ne peux pas abandonner... !",
						"spanish": "¡No puedo rendirme...!",
						"vietnamese": "Không thể bỏ cuộc...!",
						"thai": "ฉันยอมแพ้ไม่ได้...!",
						"hindi": "मैं हार नहीं मान सकता...!"
					},
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction",
					"speaker": "dax"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "오토… 반드시 당신의 진짜 얼굴을 드러낼 거야!",
						"english": "Otto... I will surely reveal your true face!",
						"japanese": "「オットー…必ずお前の本当の顔を暴いてやる！」",
						"chinese": "奥托……我一定会揭露你的真面目！",
						"french": "Otto... Je révélerai ton vrai visage !",
						"spanish": "¡Otto... sin duda revelaré tu verdadera cara!",
						"vietnamese": "Otto... Tôi chắc chắn sẽ phơi bày bộ mặt thật của bạn!",
						"thai": "ออตโต้... ฉันจะเปิดเผยใบหน้าที่แท้จริงของแกให้ได้!",
						"hindi": "ओटो... मैं तुम्हारा असली चेहरा ज़रूर बेनकाब करूँगा!"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"디지털 미로, 끝없는 인증의 굴레.",
			"\"다시 처음부터.\" 오토의 친절한 목소리.",
			"그러나 그 가면 아래, 비웃음이 번지고 있었다.",
			"반복되는 절망, 그 시작."
		],
		"english": [
			"Digital labyrinth, an endless cycle of authentication.",
			"\"From the top again.\" OTO's kind voice.",
			"But beneath that mask, a sneer spread.",
			"Repeating despair, its beginning."
		],
		"japanese": [
			"デジタル迷宮、終わらない認証の輪。",
			"「また最初から。」オトの優しい声。",
			"しかし、その仮面の下では、嘲笑が広がっていた。",
			"繰り返される絶望、その始まり。"
		],
		"chinese": [
			"数字迷宫，无尽的认证循环。",
			"“再来一次。”奥托友善的声音。",
			"然而，在那面具之下，嘲笑正在蔓延。",
			"重复的绝望，它的开始。"
		],
		"french": [
			"Labyrinthe numérique, un cycle d'authentification sans fin.",
			"«Recommençons.» La voix bienveillante d'OTO.",
			"Mais sous ce masque, un ricanement se propageait.",
			"Désespoir répété, son commencement."
		],
		"spanish": [
			"Laberinto digital, un ciclo interminable de autenticación.",
			"«De nuevo desde el principio.» La amable voz de OTO.",
			"Pero bajo esa máscara, una mueca de desprecio se extendía.",
			"Desesperación repetida, su comienzo."
		],
		"vietnamese": [
			"Mê cung số, vòng lặp xác thực bất tận.",
			"«Lại từ đầu.» Giọng nói tử tế của OTO.",
			"Nhưng dưới lớp mặt nạ đó, một nụ cười khẩy đang lan rộng.",
			"Nỗi tuyệt vọng lặp đi lặp lại, sự khởi đầu của nó."
		],
		"thai": [
			"เขาวงกตดิจิทัล วงจรการยืนยันตัวตนที่ไม่สิ้นสุด",
			"«เริ่มใหม่จากต้น.» เสียงใจดีของโอโตะ",
			"แต่ภายใต้หน้ากากนั้น รอยยิ้มเยาะเย้ยก็แพร่กระจาย",
			"ความสิ้นหวังที่ซ้ำซาก จุดเริ่มต้นของมัน"
		],
		"hindi": [
			"डिजिटल भूलभुलैया, प्रमाणीकरण का अंतहीन चक्र।",
			"«फिर से शुरू से।» ओटो की मधुर आवाज़।",
			"लेकिन उस मुखौटे के नीचे, एक उपहास फैल रहा था।",
			"दोहराई जाने वाली निराशा, उसकी शुरुआत।"
		]
	}
} as const;
