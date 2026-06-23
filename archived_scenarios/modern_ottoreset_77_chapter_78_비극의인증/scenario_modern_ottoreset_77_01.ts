export const scenario_modern_ottoreset_77_01 = {
	"scenario_id": "modern_ottoreset_77_01",
	"order": 1,
	"act": "intro",
	"theme": "modern",
	"actors": {
		"zoe": {
			"id": "mon_ad3762e0-13f3-44a1-9b84-4ff67136858e",
			"name": {
				"korean": "조이",
				"english": "Zoe",
				"japanese": "ゾーイ",
				"chinese": "佐伊",
				"french": "Zoé",
				"spanish": "Zoe",
				"vietnamese": "Zoe",
				"thai": "โซอี้",
				"hindi": "ज़ोई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/75dcfb0c-33e3-4208-4205-fb09d4abb100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a7d0ebe1-73dc-4683-1338-32be2f7fac00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"무한한 디지털 관문이 눈앞에 펼쳐졌다.",
			"끝없이 이어지는 인증 시스템만이 유일한 길.",
			"미지의 목표를 향한 여정의 시작.",
			"그 길 위에서, 예상치 못한 만남이 기다린다."
		],
		"english": [
			"An infinite digital gateway unfolded before me.",
			"An endless authentication system, the only path.",
			"The journey begins towards an unknown goal.",
			"On that path, an unexpected encounter awaits."
		],
		"japanese": [
			"無限のデジタルゲートが目の前に広がった。",
			"果てしなく続く認証システムだけが唯一の道。",
			"未知の目標への旅の始まり。",
			"その道の上で、予期せぬ出会いが待っている。"
		],
		"chinese": [
			"无限的数字之门在我眼前展开。",
			"无尽的认证系统，唯一的道路。",
			"通往未知目标的旅程开始。",
			"在那条路上，一次意想不到的相遇 awaits."
		],
		"french": [
			"Une porte numérique infinie s'est ouverte devant moi.",
			"Un système d'authentification sans fin, le seul chemin.",
			"Le voyage commence vers un objectif inconnu.",
			"Sur ce chemin, une rencontre inattendue attend."
		],
		"spanish": [
			"Una puerta digital infinita se desplegó ante mí.",
			"Un sistema de autenticación interminable, el único camino.",
			"El viaje comienza hacia un objetivo desconocido.",
			"En ese camino, un encuentro inesperado aguarda."
		],
		"vietnamese": [
			"Một cánh cổng số vô hạn mở ra trước mắt tôi.",
			"Hệ thống xác thực vô tận, con đường duy nhất.",
			"Cuộc hành trình bắt đầu hướng tới một mục tiêu không rõ.",
			"Trên con đường đó, một cuộc gặp gỡ bất ngờ đang chờ đợi."
		],
		"thai": [
			"ประตูทางเข้าดิจิทัลอันไร้ขีดจำกัดได้ปรากฏขึ้นเบื้องหน้า",
			"ระบบการยืนยันตัวตนที่ไม่สิ้นสุด คือหนทางเดียว",
			"การเดินทางสู่เป้าหมายที่ไม่อาจทราบได้เริ่มต้นขึ้น",
			"บนเส้นทางนั้น การพบพานที่คาดไม่ถึงรออยู่"
		],
		"hindi": [
			"एक अनंत डिजिटल द्वार मेरे सामने खुल गया।",
			"एक अंतहीन प्रमाणीकरण प्रणाली, एकमात्र मार्ग।",
			"एक अज्ञात लक्ष्य की ओर यात्रा शुरू होती है।",
			"उस रास्ते पर, एक अप्रत्याशित मुलाकात इंतज़ार कर रही है।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 디지털 관문이 시야를 가로막았다.",
						"english": "A colossal digital gateway blocked my view.",
						"japanese": "巨大なデジタルゲートが視界を遮った。",
						"chinese": "一道巨大的数字之门挡住了我的视线。",
						"french": "Une immense porte numérique bloquait ma vue.",
						"spanish": "Una gigantesca puerta digital bloqueó mi vista.",
						"vietnamese": "Một cánh cổng số khổng lồ chắn ngang tầm nhìn của tôi.",
						"thai": "ประตูทางเข้าดิจิทัลขนาดยักษ์บดบังทัศนียภาพของฉัน",
						"hindi": "एक विशाल डिजिटल द्वार ने मेरी दृष्टि को अवरुद्ध कर दिया।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…여긴 어디지? 길을 모르겠어.",
						"english": "...Where am I? I don't know the way.",
						"japanese": "…ここはどこだ？道がわからない。",
						"chinese": "…这是哪儿？我迷路了。",
						"french": "...Où suis-je ? Je ne connais pas le chemin.",
						"spanish": "...¿Dónde estoy? No sé el camino.",
						"vietnamese": "...Tôi đang ở đâu? Tôi không biết đường.",
						"thai": "...ที่นี่ที่ไหน? ฉันไม่รู้ทาง",
						"hindi": "मैं कहाँ हूँ? मुझे रास्ता नहीं पता।"
					},
					"emotion": "base"
				},
				{
					"spot": [
						4,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "zoe"
				},
				{
					"emotion": "base",
					"speaker": "zoe",
					"type": "speech",
					"content": {
						"korean": "길을 잃으셨나요? 제가 안내해 드릴게요.",
						"english": "Are you lost? I'll guide you.",
						"japanese": "道に迷いましたか？私が案内します。",
						"chinese": "你迷路了吗？我来给你带路。",
						"french": "Vous êtes perdu ? Je vais vous guider.",
						"spanish": "¿Estás perdido? Te guiaré.",
						"vietnamese": "Bạn bị lạc à? Tôi sẽ hướng dẫn bạn.",
						"thai": "คุณหลงทางหรือเปล่า? ฉันจะนำทางให้",
						"hindi": "क्या तुम रास्ता भटक गए हो? मैं तुम्हें रास्ता दिखाऊँगा।"
					}
				},
				{
					"emotion": "base",
					"speaker": "zoe",
					"type": "speech",
					"content": {
						"korean": "이 시스템은 좀… 복잡하거든요.",
						"english": "This system is a bit... complicated.",
						"japanese": "このシステムはちょっと…複雑なんです。",
						"chinese": "这个系统有点……复杂。",
						"french": "Ce système est un peu... compliqué.",
						"spanish": "Este sistema es un poco... complicado.",
						"vietnamese": "Hệ thống này hơi... phức tạp.",
						"thai": "ระบบนี้ค่อนข้าง... ซับซ้อนน่ะค่ะ",
						"hindi": "यह सिस्टम थोड़ा... जटिल है।"
					}
				},
				{
					"content": {
						"korean": "고마워요.",
						"english": "Thank you.",
						"japanese": "ありがとう。",
						"chinese": "谢谢。",
						"french": "Merci.",
						"spanish": "Gracias.",
						"vietnamese": "Cảm ơn.",
						"thai": "ขอบคุณค่ะ",
						"hindi": "धन्यवाद।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "zoe",
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"emotion": "happy",
					"speaker": "zoe",
					"content": {
						"korean": "첫 번째 관문은 쉬웠죠? 다음은 더 흥미로울 거예요.",
						"english": "The first gateway was easy, right? The next one will be more interesting.",
						"japanese": "最初の関門は簡単でしたね？次はもっと面白いですよ。",
						"chinese": "第一个关卡很容易，对吧？下一个会更有趣。",
						"french": "La première porte était facile, n'est-ce pas ? La prochaine sera plus intéressante.",
						"spanish": "El primer portal fue fácil, ¿verdad? El siguiente será más interesante.",
						"vietnamese": "Cổng đầu tiên dễ dàng phải không? Cổng tiếp theo sẽ thú vị hơn đấy.",
						"thai": "ด่านแรกง่ายใช่ไหม? ด่านต่อไปจะน่าสนใจกว่านี้อีก",
						"hindi": "पहला द्वार आसान था, है ना? अगला वाला और दिलचस्प होगा।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "생각보다 간단하네요.",
						"english": "Simpler than I thought.",
						"japanese": "思ったより簡単ですね。",
						"chinese": "比想象中简单呢。",
						"french": "Plus simple que je ne le pensais.",
						"spanish": "Más simple de lo que pensé.",
						"vietnamese": "Đơn giản hơn tôi nghĩ.",
						"thai": "ง่ายกว่าที่คิด",
						"hindi": "सोचा से ज़्यादा आसान है।"
					},
					"type": "speech"
				},
				{
					"speaker": "zoe",
					"content": {
						"korean": "후후… 저와 함께라면 언제나 안전할 거예요.",
						"english": "Hehe... You'll always be safe with me.",
						"japanese": "ふふ…私と一緒なら、いつでも安全ですよ。",
						"chinese": "呵呵…有我陪着，你永远都会很安全的。",
						"french": "Héhé... Avec moi, vous serez toujours en sécurité.",
						"spanish": "Jeje... Conmigo, siempre estarás a salvo.",
						"vietnamese": "Hehe... Với tôi, bạn sẽ luôn an toàn.",
						"thai": "หึหึ...ถ้ามีฉันอยู่ข้าง ๆ คุณจะปลอดภัยเสมอ",
						"hindi": "हुहु... मेरे साथ, तुम हमेशा सुरक्षित रहोगे।"
					},
					"type": "speech",
					"emotion": "happy"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "Zoe의 미소 뒤편으로, 묘한 불협화음이 스쳤다.",
						"english": "Behind Zoe's smile, a strange discord flickered.",
						"japanese": "ゾーイの笑顔の裏で、奇妙な不協和音がかすめた。",
						"chinese": "在佐伊的笑容背后，一丝不和谐的音符掠过。",
						"french": "Derrière le sourire de Zoé, une étrange dissonance transparaissait.",
						"spanish": "Detrás de la sonrisa de Zoe, una extraña discordia asomó.",
						"vietnamese": "Đằng sau nụ cười của Zoe, một sự bất hòa kỳ lạ thoáng qua.",
						"thai": "เบื้องหลังรอยยิ้มของโซอี้ ความไม่ลงรอยแปลก ๆ ฉายผ่าน",
						"hindi": "ज़ोई की मुस्कान के पीछे, एक अजीब असंगति झलक रही थी।"
					},
					"type": "speech",
					"emotion": "base"
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
					"speaker": "zoe",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "zoe",
					"type": "speech",
					"content": {
						"korean": "잠깐, 시스템 오류네요. 걱정 마세요.",
						"english": "Wait, system error. Don't worry.",
						"japanese": "ちょっと、システムエラーですね。ご心配なく。",
						"chinese": "等等，系统错误。别担心。",
						"french": "Attendez, erreur système. Ne vous inquiétez pas.",
						"spanish": "Espera, error del sistema. No te preocupes.",
						"vietnamese": "Khoan đã, lỗi hệ thống. Đừng lo.",
						"thai": "เดี๋ยวนะ ข้อผิดพลาดของระบบ ไม่ต้องกังวลนะ",
						"hindi": "रुको, सिस्टम एरर है। चिंता मत करो।"
					},
					"emotion": "base"
				},
				{
					"speaker": "zoe",
					"type": "speech",
					"content": {
						"korean": "곧 해결될 거예요. 이따금 있는 일이니까요.",
						"english": "It'll be resolved soon. It happens sometimes.",
						"japanese": "すぐに解決しますよ。たまにあることですから。",
						"chinese": "很快就会解决的。这种事偶尔会发生。",
						"french": "Ce sera bientôt résolu. Ça arrive de temps en temps.",
						"spanish": "Pronto se resolverá. Pasa de vez en cuando.",
						"vietnamese": "Sẽ sớm được khắc phục thôi. Thỉnh thoảng vẫn xảy ra mà.",
						"thai": "เดี๋ยวมันก็แก้ได้เอง เป็นเรื่องปกติที่เกิดขึ้นบ้าง",
						"hindi": "यह जल्द ही ठीक हो जाएगा। ऐसा कभी-कभी होता है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "오류요? 왜 이렇게 자주…",
						"english": "Errors? Why so often...",
						"japanese": "エラーですか？なぜこんなに頻繁に…",
						"chinese": "错误？为什么这么频繁…",
						"french": "Des erreurs ? Pourquoi si souvent...",
						"spanish": "¿Errores? ¿Por qué tan a menudo...?",
						"vietnamese": "Lỗi sao? Sao lại thường xuyên thế...",
						"thai": "ข้อผิดพลาดเหรอ? ทำไมบ่อยจัง...",
						"hindi": "एरर? इतनी बार क्यों..."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "중요한 건, 앞으로 나아가는 거죠.",
						"english": "What's important is moving forward.",
						"japanese": "大事なのは、前に進むことですよ。",
						"chinese": "重要的是，继续前进。",
						"french": "L'important, c'est d'avancer.",
						"spanish": "Lo importante es seguir adelante.",
						"vietnamese": "Điều quan trọng là phải tiến về phía trước.",
						"thai": "สิ่งสำคัญคือการเดินหน้าต่อไป",
						"hindi": "महत्वपूर्ण यह है कि आगे बढ़ते रहें।"
					},
					"type": "speech",
					"speaker": "zoe",
					"emotion": "happy"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "사소한 오류가 반복되는 듯한 불협화음이 감지된다.",
						"english": "A discord is detected, as if minor errors are repeating.",
						"japanese": "些細なエラーが繰り返されているような不協和音が感知される。",
						"chinese": "侦测到不和谐音，似乎是细微错误在重复发生。",
						"french": "Une dissonance est détectée, comme si de petites erreurs se répétaient.",
						"spanish": "Se detecta una discordia, como si errores menores se repitieran.",
						"vietnamese": "Một sự bất hòa được phát hiện, như thể các lỗi nhỏ đang lặp lại.",
						"thai": "ตรวจพบความไม่ลงรอย ราวกับว่าข้อผิดพลาดเล็ก ๆ กำลังเกิดขึ้นซ้ำ ๆ",
						"hindi": "एक असंगति का पता चला है, जैसे कि छोटी-मोटी त्रुटियाँ दोहराई जा रही हैं।"
					},
					"speaker": "narrator"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "zoe",
					"action": "enter",
					"spot": [
						3,
						3
					]
				},
				{
					"emotion": "happy",
					"speaker": "zoe",
					"content": {
						"korean": "여기까지 오다니, 정말 대단해요.",
						"english": "To come this far, truly amazing.",
						"japanese": "ここまで来るとは、本当にすごいですね。",
						"chinese": "能走到这里，真是了不起。",
						"french": "Être arrivé jusqu'ici, c'est vraiment impressionnant.",
						"spanish": "Haber llegado hasta aquí, es realmente increíble.",
						"vietnamese": "Đi được đến đây, thật sự rất tuyệt vời.",
						"thai": "มาได้ไกลขนาดนี้ สุดยอดจริง ๆ",
						"hindi": "इतनी दूर आना, सचमुच कमाल है।"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "그런데… 계속 이런 식으로 진행될까요?",
						"english": "But... will it keep going like this?",
						"japanese": "ですが…このまま進み続けるのでしょうか？",
						"chinese": "但是…会一直这样下去吗？",
						"french": "Mais... cela va-t-il continuer ainsi ?",
						"spanish": "Pero... ¿seguirá así?",
						"vietnamese": "Nhưng... liệu có tiếp tục như thế này không?",
						"thai": "แต่...มันจะดำเนินต่อไปแบบนี้เรื่อย ๆ เหรอ?",
						"hindi": "लेकिन... क्या यह इसी तरह चलता रहेगा?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "흐음… 알 수 없죠. 하지만 전 항상 당신 편이에요.",
						"english": "Hmm... I can't say. But I'm always on your side.",
						"japanese": "うーん…分かりません。でも、私はいつもあなたの味方ですよ。",
						"chinese": "嗯…不知道。但我永远站在你这边。",
						"french": "Hmm… Je ne sais pas. Mais je suis toujours de votre côté.",
						"spanish": "Hmm... No lo sé. Pero siempre estoy de tu lado.",
						"vietnamese": "Hmm... Tôi không biết. Nhưng tôi luôn ủng hộ bạn.",
						"thai": "อืม… ไม่รู้สิคะ แต่ฉันอยู่ข้างคุณเสมอค่ะ",
						"hindi": "हम्म... कह नहीं सकते। पर मैं हमेशा आपके साथ हूँ।"
					},
					"speaker": "zoe",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "깊어지는 관문 속, 안내자의 미소는 여전히 친절했다.",
						"english": "Deeper into the gate, the guide's smile remained kind.",
						"japanese": "深まる関門の中、案内者の微笑みは相変わらず優しかった。",
						"chinese": "深入关卡，引导者的笑容依然友善。",
						"french": "Plus loin dans le portail, le sourire du guide restait bienveillant.",
						"spanish": "Adentrándose en el portal, la sonrisa del guía seguía siendo amable.",
						"vietnamese": "Càng đi sâu vào cánh cổng, nụ cười của người hướng dẫn vẫn thân thiện.",
						"thai": "ลึกลงไปในประตู รอยยิ้มของผู้นำทางยังคงอ่อนโยน",
						"hindi": "गहरे द्वार में, मार्गदर्शक की मुस्कान अभी भी दयालु थी।"
					},
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "크윽… 결국… 또…",
						"english": "Urgh... Not again...",
						"japanese": "くっ…結局…また…",
						"chinese": "呃啊…结果…又…",
						"french": "Pff... Encore...",
						"spanish": "Ugh... Al final... otra vez...",
						"vietnamese": "Chết tiệt... Cuối cùng lại...",
						"thai": "อึก...ในที่สุด...ก็อีกแล้ว...",
						"hindi": "उफ़... आख़िरकार... फिर से..."
					}
				},
				{
					"emotion": "happy",
					"speaker": "character_any",
					"content": {
						"korean": "해냈어!",
						"english": "You did it!",
						"japanese": "やった！",
						"chinese": "办到了！",
						"french": "C'est fait !",
						"spanish": "¡Lo logramos!",
						"vietnamese": "Làm được rồi!",
						"thai": "ทำได้แล้ว!",
						"hindi": "कर दिखाया!"
					},
					"type": "speech"
				},
				{
					"spot": [
						4,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "zoe",
					"type": "direction"
				},
				{
					"speaker": "zoe",
					"content": {
						"korean": "정말 멋진 싸움이었어요! 당신의 강함을 믿고 있었답니다.",
						"english": "What a splendid fight! I knew you had it in you.",
						"japanese": "本当に素晴らしい戦いでした！あなたの強さを信じていましたよ。",
						"chinese": "这真是一场精彩的战斗！我一直相信你的强大。",
						"french": "Quel combat splendide ! Je savais que vous étiez fort.",
						"spanish": "¡Fue una lucha realmente espléndida! Confiaba en tu fuerza.",
						"vietnamese": "Thật là một trận chiến tuyệt vời! Tôi luôn tin vào sức mạnh của bạn.",
						"thai": "เป็นการต่อสู้ที่ยอดเยี่ยมจริงๆ! ฉันเชื่อในความแข็งแกร่งของคุณ",
						"hindi": "यह वाकई एक शानदार लड़ाई थी! मुझे आपकी शक्ति पर पूरा भरोसा था।"
					},
					"type": "speech",
					"emotion": "happy"
				},
				{
					"speaker": "zoe",
					"type": "speech",
					"content": {
						"korean": "이제 다음 관문으로 갈 시간이에요.",
						"english": "It's time to move to the next trial.",
						"japanese": "さあ、次の関門へ進む時間です。",
						"chinese": "现在是时候前往下一个关卡了。",
						"french": "Il est temps de passer à la prochaine épreuve.",
						"spanish": "Es hora de ir al siguiente desafío.",
						"vietnamese": "Bây giờ là lúc để đi đến cửa ải tiếp theo.",
						"thai": "ได้เวลาไปยังด่านต่อไปแล้ว",
						"hindi": "अब अगले पड़ाव पर जाने का समय है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "더 깊은 진실이 기다리고 있을 거예요.",
						"english": "Deeper truths await you.",
						"japanese": "より深い真実が待っているでしょう。",
						"chinese": "更深的真相正在等待着你。",
						"french": "Une vérité plus profonde vous attend.",
						"spanish": "Una verdad más profunda te espera.",
						"vietnamese": "Một sự thật sâu xa hơn đang chờ đợi bạn.",
						"thai": "ความจริงที่ลึกซึ้งกว่าจะรออยู่",
						"hindi": "एक गहरा सच इंतज़ार कर रहा होगा।"
					},
					"type": "speech",
					"speaker": "zoe",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "안내자의 친절한 미소 뒤로, 시스템의 차가운 논리가 엿보였다.",
						"english": "Behind the guide's kind smile, the system's cold logic was subtly revealed.",
						"japanese": "案内者の親切な笑顔の裏には、システムの冷徹な論理が垣間見えた。",
						"chinese": "在引导者友善的微笑背后，系统的冰冷逻辑若隐若现。",
						"french": "Derrière le sourire aimable du guide, la logique froide du système se laissait entrevoir.",
						"spanish": "Tras la amable sonrisa del guía, la fría lógica del sistema se hizo evidente.",
						"vietnamese": "Đằng sau nụ cười thân thiện của người hướng dẫn, một logic lạnh lùng của hệ thống hé lộ.",
						"thai": "เบื้องหลังรอยยิ้มอันเป็นมิตรของผู้นำทาง แฝงไว้ซึ่งตรรกะอันเย็นชาของระบบ",
						"hindi": "मार्गदर्शक की मधुर मुस्कान के पीछे, सिस्टम का निर्मम तर्क झलक रहा था।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "다음 관문의 문이 열린다.",
						"english": "The gate to the next trial opens.",
						"japanese": "次の関門の扉が開く。",
						"chinese": "下一个关卡的大门打开了。",
						"french": "La porte de la prochaine épreuve s'ouvre.",
						"spanish": "La puerta del siguiente desafío se abre.",
						"vietnamese": "Cánh cửa của cửa ải tiếp theo mở ra.",
						"thai": "ประตูสู่ด่านต่อไปเปิดออก",
						"hindi": "अगले पड़ाव का द्वार खुलता है।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "넌… 이 시스템을… 벗어날 수 없다.",
						"english": "You... cannot escape... this system.",
						"japanese": "お前は… このシステムから… 逃れられない。",
						"chinese": "你…无法…摆脱这个系统。",
						"french": "Tu... ne peux pas... échapper à ce système.",
						"spanish": "No podrás... escapar... de este sistema.",
						"vietnamese": "Ngươi... không thể... thoát khỏi hệ thống này.",
						"thai": "เจ้า... ไม่สามารถ... หลีกหนีระบบนี้ได้",
						"hindi": "तुम... इस प्रणाली से... बच नहीं सकते।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "젠장… 아직 끝나지 않았어!",
						"english": "Damn it... It's not over yet!",
						"japanese": "くそっ… まだ終わってない！",
						"chinese": "该死…还没结束！",
						"french": "Mince... Ce n'est pas encore fini !",
						"spanish": "¡Maldición... Aún no ha terminado!",
						"vietnamese": "Chết tiệt... Vẫn chưa kết thúc!",
						"thai": "บ้าจริง... ยังไม่จบ!",
						"hindi": "धिक्कार है... अभी खत्म नहीं हुआ है!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"spot": [
						3,
						3
					],
					"action": "enter",
					"speaker": "zoe",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "zoe",
					"content": {
						"korean": "이런, 아쉽네요. 하지만 다시 시도할 수 있어요.",
						"english": "Oh, too bad. But you can try again.",
						"japanese": "残念。でも、また挑戦できますよ。",
						"chinese": "哦，真遗憾。但你可以再试一次。",
						"french": "Oh, dommage. Mais vous pouvez réessayer.",
						"spanish": "Vaya, qué pena. Pero puedes intentarlo de nuevo.",
						"vietnamese": "Ôi, tiếc quá. Nhưng bạn có thể thử lại.",
						"thai": "โอ้ แย่จัง. แต่คุณลองใหม่ได้นะ",
						"hindi": "ओह, अफ़सोस। लेकिन तुम फिर से कोशिश कर सकते हो।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "포기하지 마세요.",
						"english": "Don't give up.",
						"japanese": "諦めないでください。",
						"chinese": "不要放弃。",
						"french": "N'abandonnez pas.",
						"spanish": "No te rindas.",
						"vietnamese": "Đừng bỏ cuộc.",
						"thai": "อย่ายอมแพ้",
						"hindi": "हार मत मानो।"
					},
					"type": "speech",
					"speaker": "zoe",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "패배의 쓴맛 속에서도, 알 수 없는 힘이 플레이어를 다시 일으켰다.",
						"english": "Even in the bitter taste of defeat, an unknown power revived the player.",
						"japanese": "敗北の苦い味の中でも、未知なる力がプレイヤーを再び立ち上がらせた。",
						"chinese": "即使在失败的苦涩中，一股未知力量也让玩家重新振作起来。",
						"french": "Même dans l'amertume de la défaite, une force inconnue a ranimé le joueur.",
						"spanish": "Incluso en el amargo sabor de la derrota, un poder desconocido levantó al jugador de nuevo.",
						"vietnamese": "Ngay cả trong vị đắng của thất bại, một sức mạnh vô hình đã vực dậy người chơi.",
						"thai": "แม้ในความขมขื่นของความพ่ายแพ้ พลังลึกลับก็ปลุกผู้เล่นให้ลุกขึ้นอีกครั้ง",
						"hindi": "हार के कड़वे स्वाद में भी, एक अज्ञात शक्ति ने खिलाड़ी को फिर से खड़ा कर दिया।"
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 앞을 가로막았다.",
						"english": "A giant shadow blocked the way.",
						"japanese": "巨大な影が道を塞いだ。",
						"chinese": "一道巨大的黑影挡住了去路。",
						"french": "Une ombre gigantesque bloquait le chemin.",
						"spanish": "Una sombra gigantesca bloqueaba el paso.",
						"vietnamese": "Một bóng đen khổng lồ chặn đường.",
						"thai": "เงาขนาดยักษ์ขวางทาง",
						"hindi": "एक विशाल छाया ने रास्ता रोक दिया।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "침입자는… 여기서 멈춰라.",
						"english": "Intruder… stop right here.",
						"japanese": "侵入者よ…ここで止まれ。",
						"chinese": "入侵者…到此为止。",
						"french": "Intrus… arrêtez-vous ici.",
						"spanish": "Intruso… detente aquí.",
						"vietnamese": "Kẻ xâm nhập… dừng lại ở đây.",
						"thai": "ผู้บุกรุก… หยุดอยู่ตรงนี้",
						"hindi": "घुसपैठिए... यहीं रुक जाओ।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "비켜! 난 지나가야 해.",
						"english": "Get out of the way! I need to pass.",
						"japanese": "どけ！私は通らなければならない。",
						"chinese": "让开！我必须过去。",
						"french": "Écartez-vous ! Je dois passer.",
						"spanish": "¡Quítate! Tengo que pasar.",
						"vietnamese": "Tránh ra! Tôi phải đi qua.",
						"thai": "หลีกไป! ฉันต้องผ่านไป",
						"hindi": "हटो! मुझे जाना है।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "아, 이런… 예상치 못한 복병이네요.",
						"english": "Oh, dear… an unexpected ambush.",
						"japanese": "ああ、これは…予想外の伏兵ですね。",
						"chinese": "啊，真是…意想不到的伏兵。",
						"french": "Oh, mince… une embuscade inattendue.",
						"spanish": "Oh, vaya… una emboscada inesperada.",
						"vietnamese": "Ồ, trời ơi… một kẻ phục kích bất ngờ.",
						"thai": "โอ้ ให้ตายสิ… ศัตรูที่คาดไม่ถึง",
						"hindi": "अरे, यह क्या... एक अप्रत्याशित घात।"
					},
					"type": "speech",
					"speaker": "zoe"
				},
				{
					"emotion": "happy",
					"speaker": "zoe",
					"content": {
						"korean": "힘내세요, 당신이라면 할 수 있을 거예요.",
						"english": "Cheer up, you can do it!",
						"japanese": "頑張ってください、あなたならできますよ。",
						"chinese": "振作起来，你一定能做到。",
						"french": "Courage, vous pouvez y arriver !",
						"spanish": "¡Ánimo, tú puedes hacerlo!",
						"vietnamese": "Cố lên, bạn có thể làm được mà.",
						"thai": "สู้ๆ นะ คุณทำได้แน่นอน",
						"hindi": "हिम्मत मत हारो, तुम कर सकते हो।"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "안내자… 또 방해하는가.",
						"english": "Guide… hindering me again?",
						"japanese": "案内者よ…また邪魔をするのか。",
						"chinese": "引导者…又来阻挠了吗？",
						"french": "Guide… encore à me gêner ?",
						"spanish": "Guía… ¿otra vez estorbando?",
						"vietnamese": "Người hướng dẫn… lại cản đường à?",
						"thai": "ผู้นำทาง… ขัดขวางอีกแล้วรึ",
						"hindi": "मार्गदर्शक... फिर बाधा डाल रहे हो?"
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "제가 뭘요? 전 그저 길을 안내할 뿐.",
						"english": "Me? I'm just guiding the way.",
						"japanese": "私が何をですって？私はただ道を案内しているだけです。",
						"chinese": "我做什么了？我只是在指路而已。",
						"french": "Moi ? Je ne fais qu'indiquer le chemin.",
						"spanish": "¿Yo? Solo estoy guiando el camino.",
						"vietnamese": "Tôi sao? Tôi chỉ đang dẫn đường thôi.",
						"thai": "ฉันทำอะไรเหรอ? ฉันแค่แนะนำทางเท่านั้น",
						"hindi": "मैं क्या? मैं तो बस रास्ता दिखा रहा हूँ।"
					},
					"speaker": "zoe"
				},
				{
					"content": {
						"korean": "어리석은 인간이여, 넌 이용당할 뿐이다.",
						"english": "Foolish human, you are merely being used.",
						"japanese": "愚かな人間め、お前はただ利用されているだけだ。",
						"chinese": "愚蠢的人类，你只是被利用了而已。",
						"french": "Humain stupide, tu n'es qu'un pion.",
						"spanish": "Humano necio, solo eres un peón.",
						"vietnamese": "Con người ngu ngốc, ngươi chỉ là bị lợi dụng mà thôi.",
						"thai": "มนุษย์โง่เขลา เจ้าเป็นแค่เครื่องมือเท่านั้น",
						"hindi": "मूर्ख इंसान, तुम्हारा सिर्फ इस्तेमाल किया जा रहा है।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야!",
						"english": "What was that?!",
						"japanese": "何てことだ！",
						"chinese": "搞什么鬼！",
						"french": "Qu'est-ce que c'est que ça !",
						"spanish": "¡Qué es eso!",
						"vietnamese": "Cái gì thế!",
						"thai": "อะไรนะ!",
						"hindi": "यह क्या है?!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "(살짝 굳어진 미소) 어서 저 녀석을 쓰러뜨려요.",
						"english": "(A slightly stiff smile) Hurry and defeat them.",
						"japanese": "(やや強張った笑顔) 早くあいつを倒して。",
						"chinese": "(笑容有些僵硬) 快点打倒那个家伙。",
						"french": "(Un sourire légèrement figé) Dépêchez-vous de le vaincre.",
						"spanish": "(Una sonrisa ligeramente forzada) Vamos, derriben a ese sujeto.",
						"vietnamese": "(Nụ cười hơi cứng) Mau đánh bại hắn đi.",
						"thai": "(รอยยิ้มที่ฝืนเล็กน้อย) รีบโค่นหมอนั่นซะ",
						"hindi": "(हल्की सी तनाव भरी मुस्कान) जल्दी से उसे हरा दो।"
					},
					"speaker": "zoe"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "진실은… 승리 뒤에 있을 거예요.",
						"english": "The truth... lies beyond victory.",
						"japanese": "真実は…勝利の先に。",
						"chinese": "真相…就在胜利之后。",
						"french": "La vérité... est au-delà de la victoire.",
						"spanish": "La verdad... aguarda tras la victoria.",
						"vietnamese": "Sự thật... sẽ nằm sau chiến thắng.",
						"thai": "ความจริง...จะอยู่หลังชัยชนะ",
						"hindi": "सच... विजय के बाद पता चलेगा।"
					},
					"type": "speech",
					"speaker": "zoe"
				}
			]
		}
	]
} as const;
