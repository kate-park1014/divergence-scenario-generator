export const scenario_modern_minsu_11_05 = {
	"scenario_id": "modern_minsu_11_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "modern",
	"actors": {
		"lin": {
			"id": "mon_d036a884-3dde-472c-9fe7-c4807643860f",
			"name": {
				"korean": "린",
				"english": "Lin",
				"japanese": "リン",
				"chinese": "琳",
				"french": "Lin",
				"spanish": "Lin",
				"vietnamese": "Lin",
				"thai": "ลิน",
				"hindi": "लिन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a095dd66-1857-4f44-68b0-2ece83006d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/05b02694-f1ed-4e4c-b7ca-fb5b74a48900/public"
		}
	},
	"boss": {
		"pool_id": "pool_099"
	},
	"prologue": {
		"korean": [
			"기억은 반복되며, 모든 시도는 실패로 돌아갔다.",
			"이번엔 다를 것이라는 속삭임. 그것은 거짓된 희망이었다.",
			"끝없는 반복의 진실이 드디어 밝혀진다.",
			"과연 이 굴레에서 벗어날 수 있을까?"
		],
		"english": [
			"Memories repeat, and every attempt has failed.",
			"The whisper that this time would be different. It was a false hope.",
			"The truth of endless repetition is finally revealed.",
			"Can we truly escape this cycle?"
		],
		"japanese": [
			"記憶は繰り返され、すべての試みは失敗に終わった。",
			"今回は違うだろうという囁き。それは偽りの希望だった。",
			"終わりのない繰り返しの真実がついに明かされる。",
			"果たして、この輪廻から抜け出せるのだろうか？"
		],
		"chinese": [
			"记忆反复，所有尝试都以失败告终。",
			"低语着这次会有所不同。那是一个虚假的希望。",
			"无尽重复的真相终于揭示。",
			"究竟能否摆脱这个循环？"
		],
		"french": [
			"Les souvenirs se répètent, et chaque tentative a échoué.",
			"Le murmure que cette fois serait différente. C'était un faux espoir.",
			"La vérité de la répétition sans fin est enfin révélée.",
			"Pourrons-nous vraiment échapper à ce cycle ?"
		],
		"spanish": [
			"Los recuerdos se repiten, y cada intento ha fracasado.",
			"El susurro de que esta vez sería diferente. Era una falsa esperanza.",
			"La verdad de la repetición sin fin finalmente se revela.",
			"¿Podremos realmente escapar de este ciclo?"
		],
		"vietnamese": [
			"Ký ức lặp lại, mọi nỗ lực đều thất bại.",
			"Lời thì thầm rằng lần này sẽ khác. Đó là một hy vọng hão huyền.",
			"Sự thật về vòng lặp vô tận cuối cùng đã được tiết lộ.",
			"Liệu chúng ta có thể thoát khỏi vòng luẩn quẩn này không?"
		],
		"thai": [
			"ความทรงจำซ้ำรอย และทุกความพยายามก็ล้มเหลว",
			"เสียงกระซิบว่าคราวนี้จะต่างออกไป นั่นเป็นความหวังที่หลอกลวง",
			"ความจริงของการทำซ้ำไม่รู้จบได้ถูกเปิดเผยในที่สุด",
			"เราจะหลุดพ้นจากวัฏจักรนี้ได้จริงหรือ?"
		],
		"hindi": [
			"यादें दोहराती हैं, और हर कोशिश नाकाम रही।",
			"फुसफुसाहट कि इस बार अलग होगा। वह एक झूठी उम्मीद थी।",
			"अंतहीन दोहराव का सच आखिरकार सामने आता है।",
			"क्या वाकई हम इस बंधन से बाहर निकल पाएंगे?"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "왜곡된 과거의 기억들이 낯설게 뒤틀려 있었다. 모든 것이 어긋나 있었다.",
						"english": "Distorted memories of the past were strangely twisted. Everything was amiss.",
						"japanese": "歪んだ過去の記憶が見慣れない形でねじれていた。すべてが狂っていた。",
						"chinese": "扭曲的过去记忆陌生地交织着。一切都格格不入。",
						"french": "Des souvenirs déformés du passé étaient étrangement tordus. Tout était de travers.",
						"spanish": "Los recuerdos distorsionados del pasado estaban extrañamente retorcidos. Todo estaba mal.",
						"vietnamese": "Những ký ức méo mó về quá khứ bị biến dạng một cách lạ lùng. Mọi thứ đều sai lệch.",
						"thai": "ความทรงจำในอดีตที่บิดเบี้ยวถูกบิดผันอย่างแปลกประหลาด ทุกอย่างผิดเพี้ยนไปหมด",
						"hindi": "अतीत की विकृत यादें अजीब तरह से मुड़ी हुई थीं। सब कुछ गड़बड़ था।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"speaker": "lin"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "base",
					"content": {
						"korean": "우리가 겪었던 모든 일은… 계획된 반복이었어요.",
						"english": "Everything we went through... it was a planned repetition.",
						"japanese": "私たちが経験したことすべては…計画された繰り返しだったのね。",
						"chinese": "我们所经历的一切……都是一场计划好的重复。",
						"french": "Tout ce que nous avons vécu... c'était une répétition planifiée.",
						"spanish": "Todo lo que vivimos... fue una repetición planificada.",
						"vietnamese": "Mọi thứ chúng ta đã trải qua... đều là một sự lặp lại đã được lên kế hoạch.",
						"thai": "ทุกสิ่งที่เราประสบมา... เป็นการซ้ำรอยที่ถูกวางแผนไว้",
						"hindi": "हमने जो कुछ भी सहा... वह एक सुनियोजित दोहराव था।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "반복…?",
						"english": "Repeat...?",
						"japanese": "「繰り返し…？」",
						"chinese": "“重复...？”",
						"french": "“Répéter...?”",
						"spanish": "“¿Repetir...?”",
						"vietnamese": "“Lặp lại...?”",
						"thai": "“ซ้ำ...?”",
						"hindi": "“दोहराना...?”"
					}
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "sad",
					"content": {
						"korean": "네. 이 세계는 단순한 기억 보관소가 아니에요. 끝없이 재생되는 함정이죠.",
						"english": "Yes. This world isn't just a memory archive. It's an endlessly looping trap.",
						"japanese": "「はい。この世界は単なる記憶の保管庫ではありません。際限なく繰り返される罠なのです。」",
						"chinese": "“是的。这个世界不只是一个记忆库。它是一个无止境循环的陷阱。”",
						"french": "“Oui. Ce monde n'est pas qu'un simple dépôt de souvenirs. C'est un piège sans fin.”",
						"spanish": "“Sí. Este mundo no es solo un archivo de recuerdos. Es una trampa que se repite sin fin.”",
						"vietnamese": "“Vâng. Thế giới này không chỉ là kho lưu trữ ký ức. Nó là một cái bẫy lặp đi lặp lại không ngừng.”",
						"thai": "“ใช่ โลกนี้ไม่ใช่แค่คลังเก็บความทรงจำ แต่มันคือกับดักที่เล่นซ้ำไม่รู้จบ”",
						"hindi": "“हाँ। यह दुनिया सिर्फ यादों का संग्रह नहीं है। यह एक अंतहीन दोहराया जाने वाला जाल है।”"
					}
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "angry",
					"content": {
						"korean": "당신들의 기억, 갈등, 행복했던 순간들… 전부 모방되고 조작되었어요.",
						"english": "Your memories, conflicts, happy moments... all of it has been mimicked and manipulated.",
						"japanese": "「あなたたちの記憶、葛藤、幸せだった瞬間…すべてが模倣され、操作されています。」",
						"chinese": "“你们的记忆、冲突、幸福的瞬间……一切都被模仿和操纵了。”",
						"french": "“Vos souvenirs, conflits, moments de bonheur... tout a été simulé et manipulé.”",
						"spanish": "“Vuestros recuerdos, conflictos, momentos felices... todo ha sido imitado y manipulado.”",
						"vietnamese": "“Những ký ức, xung đột, khoảnh khắc hạnh phúc của các bạn... tất cả đều đã bị mô phỏng và thao túng.”",
						"thai": "“ความทรงจำ ความขัดแย้ง ช่วงเวลาแห่งความสุขของพวกคุณ... ทั้งหมดถูกเลียนแบบและบิดเบือน”",
						"hindi": "“आपकी यादें, संघर्ष, खुशी के पल... सब कुछ नकली और हेरफेर किया गया है।”"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "lin",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "base",
					"content": {
						"korean": "카이님, 기억하세요? 가장 행복했던 순간들이 왜 공허하게 느껴졌는지.",
						"english": "Kai, do you remember? Why your happiest moments felt hollow.",
						"japanese": "「カイ様、覚えていらっしゃいますか？どうして最も幸せだった瞬間が空虚に感じられたのか。」",
						"chinese": "“凯，你还记得吗？为什么最幸福的时刻却感觉如此空虚。”",
						"french": "“Kai, vous souvenez-vous ? Pourquoi vos moments les plus heureux vous semblaient si vides.”",
						"spanish": "“Kai, ¿recuerdas? Por qué tus momentos más felices se sentían vacíos.”",
						"vietnamese": "“Kai, anh còn nhớ không? Tại sao những khoảnh khắc hạnh phúc nhất của anh lại cảm thấy trống rỗng.”",
						"thai": "“ไค คุณจำได้ไหมว่าทำไมช่วงเวลาที่มีความสุขที่สุดของคุณถึงรู้สึกว่างเปล่า”",
						"hindi": "“काई, तुम्हें याद है? तुम्हारे सबसे खुशहाल पल खोखले क्यों लगे।”"
					}
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"emotion": "sad",
					"content": {
						"korean": "…그때로 돌아가면 괜찮을 거라고 생각했어.",
						"english": "...I thought if I went back to that time, everything would be alright.",
						"japanese": "「…あの時に戻れば、大丈夫だと思ったんだ。」",
						"chinese": "“我以为...回到那个时候，一切都会好起来的。”",
						"french": "“...Je pensais que si je retournais à ce moment-là, tout irait bien.”",
						"spanish": "“...Pensé que si volvía a ese momento, todo estaría bien.”",
						"vietnamese": "“...Tôi đã nghĩ nếu trở lại thời điểm đó, mọi chuyện sẽ ổn thôi.”",
						"thai": "“...ฉันคิดว่าถ้าได้กลับไปตอนนั้น ทุกอย่างคงจะดีขึ้น”",
						"hindi": "“...मैंने सोचा था कि अगर मैं उस समय वापस जाता, तो सब ठीक हो जाता।”"
					}
				},
				{
					"speaker": "lin",
					"emotion": "sad",
					"content": {
						"korean": "하지만 그 행복은 반복될수록 오히려 당신을 옥죄는 장치였어요.",
						"english": "But that happiness, the more it repeated, became a device that trapped you.",
						"japanese": "「しかし、その幸福は繰り返されるほど、むしろあなたを縛りつける装置だったのです。」",
						"chinese": "“然而，那份幸福，越是重复，就越是束缚你的陷阱。”",
						"french": "“Mais ce bonheur, plus il se répétait, plus il devenait un dispositif qui vous emprisonnait.”",
						"spanish": "“Pero esa felicidad, cuanto más se repetía, más se convertía en un mecanismo que te atrapaba.”",
						"vietnamese": "“Nhưng hạnh phúc đó, càng lặp lại, nó càng trở thành một thiết bị xiềng xích bạn.”",
						"thai": "“แต่ความสุขนั้น ยิ่งซ้ำซ้อนมากเท่าไหร่ ก็ยิ่งกลายเป็นกลไกที่กักขังคุณ”",
						"hindi": "“लेकिन वह खुशी, जितनी बार दोहराई गई, उतनी ही तुम्हें जकड़ने वाला एक उपकरण बन गई।”"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "기억 관리자가 그걸 노린 건가?",
						"english": "Was that what the Memory Administrator intended?",
						"japanese": "「記憶管理者はそれを狙っていたのか？」",
						"chinese": "“记忆管理者就是为了这个吗？”",
						"french": "“Est-ce ce que l'Administrateur de Mémoire visait ?”",
						"spanish": "“¿Era eso lo que el Administrador de Memorias pretendía?”",
						"vietnamese": "“Người quản lý ký ức đã nhắm vào điều đó sao?”",
						"thai": "“ผู้ดูแลความทรงจำตั้งใจทำอย่างนั้นเหรอ?”",
						"hindi": "“क्या मेमोरी एडमिनिस्ट्रेटर का यही इरादा था?”"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "네. 단순히 지켜보는 게 아니에요. 끊임없이 조작하고 있죠.",
						"english": "Yes. They're not just observing. They're constantly manipulating.",
						"japanese": "「はい。ただ見守っているだけではありません。絶えず操作しているのです。」",
						"chinese": "“是的。他们不只是在观察。他们在不断地操纵。”",
						"french": "“Oui. Ils ne se contentent pas d'observer. Ils manipulent constamment.”",
						"spanish": "“Sí. No están solo observando. Están manipulando constantemente.”",
						"vietnamese": "“Vâng. Họ không chỉ quan sát. Họ đang không ngừng thao túng.”",
						"thai": "“ใช่ พวกเขาไม่ได้แค่เฝ้าดู แต่กำลังบิดเบือนอยู่ตลอดเวลา”",
						"hindi": "“हाँ। वे सिर्फ देख नहीं रहे हैं। वे लगातार हेरफेर कर रहे हैं।”"
					},
					"speaker": "lin",
					"emotion": "angry",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"speaker": "lin"
				},
				{
					"speaker": "lin",
					"emotion": "sad",
					"content": {
						"korean": "맥스님, 당신이 겪었던 고통이 바로 이 세계의 진실이에요.",
						"english": "Max, the pain you experienced is the very truth of this world.",
						"japanese": "「マックス様、あなたが経験した苦痛こそが、この世界の真実なのです。」",
						"chinese": "“麦克斯，你所经历的痛苦，正是这个世界的真相。”",
						"french": "“Max, la douleur que vous avez ressentie est la vérité même de ce monde.”",
						"spanish": "“Max, el dolor que experimentaste es la verdad de este mundo.”",
						"vietnamese": "“Max, nỗi đau bạn đã trải qua chính là sự thật của thế giới này.”",
						"thai": "“แม็กซ์ ความเจ็บปวดที่คุณเผชิญคือความจริงของโลกใบนี้”",
						"hindi": "“मैक्स, जो दर्द तुमने अनुभव किया है, वही इस दुनिया की सच्चाई है।”"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이번엔 다를 거라고… 그렇게 믿었는데…!",
						"english": "I believed... this time it would be different...!",
						"japanese": "「今度こそ違うと…そう信じていたのに…！」",
						"chinese": "“我以为这次会不同...我曾如此相信...！”",
						"french": "“Je croyais... que cette fois, ce serait différent...!”",
						"spanish": "“Creía... que esta vez sería diferente...!”",
						"vietnamese": "“Tôi đã tin... rằng lần này sẽ khác...!”",
						"thai": "“ฉันเชื่อว่า... ครั้งนี้มันจะแตกต่างออกไป...!”",
						"hindi": "“मुझे विश्वास था... कि इस बार यह अलग होगा...!”"
					},
					"speaker": "character_2",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "음성 오류와 함께, 익숙한 비명소리가 반복된다.",
						"english": "Amidst a voice error, familiar screams repeat.",
						"japanese": "音声エラーと共に、聞き覚えのある悲鳴が繰り返される。",
						"chinese": "伴随着语音错误，熟悉的尖叫声反复出现。",
						"french": "Au milieu d'une erreur vocale, des cris familiers se répètent.",
						"spanish": "Entre un error de voz, gritos familiares se repiten.",
						"vietnamese": "Giữa lỗi giọng nói, những tiếng hét quen thuộc lặp lại.",
						"thai": "ท่ามกลางข้อผิดพลาดทางเสียง เสียงกรีดร้องที่คุ้นเคยก็ดังซ้ำ",
						"hindi": "ध्वनि त्रुटि के बीच, परिचित चीखें दोहराई जाती हैं।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "'이번엔 다를 거야.' 그 속삭임은 매번 같은 결말을 낳았어요. 항상 같았죠.",
						"english": "'This time it'll be different.' That whisper always led to the same end. Always.",
						"japanese": "「今度こそ違う。」その囁きは、いつも同じ結末を生んだ。いつも同じだった。",
						"chinese": "“这次会不同。”那低语每次都导致同样的结局。总是一样。",
						"french": "« Cette fois, ce sera différent. » Ce murmure menait toujours à la même fin. Toujours.",
						"spanish": "'Esta vez será diferente.' Ese susurro siempre llevó al mismo final. Siempre.",
						"vietnamese": "'Lần này sẽ khác.' Lời thì thầm đó luôn dẫn đến cùng một kết cục. Luôn luôn.",
						"thai": "คราวนี้มันจะต่างออกไป\" เสียงกระซิบนั้นมักจะนำไปสู่จุดจบเดิมเสมอ เหมือนเดิมทุกครั้ง",
						"hindi": "इस बार अलग होगा।\" वह फुसफुसाहट हमेशा एक ही अंत की ओर ले जाती थी। हमेशा।"
					},
					"speaker": "lin",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "우리가 계속 실패했던 이유가… 이거였구나.",
						"english": "So this was why we kept failing...",
						"japanese": "私たちが失敗し続けた理由は…これだったんだね。",
						"chinese": "原来这就是我们一直失败的原因……",
						"french": "Alors c'était pour ça qu'on n'arrêtait pas d'échouer...",
						"spanish": "Así que esta era la razón por la que seguíamos fallando...",
						"vietnamese": "Vậy ra đây là lý do chúng ta cứ thất bại...",
						"thai": "นี่สินะ คือเหตุผลที่เราล้มเหลวมาตลอด...",
						"hindi": "तो यही वजह थी कि हम बार-बार असफल होते रहे..."
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네. 벗어나려면, 이 미화된 환상과 단절해야 해요.",
						"english": "Yes. To break free, you must sever ties with this glorified illusion.",
						"japanese": "ええ。抜け出すには、この美化された幻想と決別しなければなりません。",
						"chinese": "是的。要摆脱困境，你必须切断与这个美化了的幻象的联系。",
						"french": "Oui. Pour vous libérer, vous devez rompre avec cette illusion glorifiée.",
						"spanish": "Sí. Para liberarte, debes romper con esta ilusión glorificada.",
						"vietnamese": "Vâng. Để thoát ra, bạn phải cắt đứt với ảo ảnh được tô vẽ này.",
						"thai": "ใช่แล้ว หากต้องการหลุดพ้น คุณต้องตัดขาดจากภาพลวงตาที่งดงามนี้",
						"hindi": "हाँ। मुक्त होने के लिए, आपको इस महिमामंडित भ्रम से संबंध तोड़ना होगा।"
					},
					"speaker": "lin",
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "lin",
					"action": "enter",
					"spot": [
						3,
						3
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "angry",
					"content": {
						"korean": "이제 알겠죠? 관리자는 당신들의 고통을 연료 삼아 이 반복을 유지하는 거예요.",
						"english": "You get it now, don't you? The Overseer uses your suffering as fuel to maintain this loop.",
						"japanese": "もうお分かりですね？管理者はあなたたちの苦痛を燃料に、この繰り返しを維持しているのです。",
						"chinese": "现在明白了吧？管理者以你们的痛苦为燃料，维持着这个循环。",
						"french": "Vous comprenez maintenant, n'est-ce pas ? Le Surveillant utilise votre souffrance comme carburant pour maintenir cette boucle.",
						"spanish": "¿Lo entiendes ahora, verdad? El Supervisor usa tu sufrimiento como combustible para mantener este bucle.",
						"vietnamese": "Bây giờ bạn hiểu rồi chứ? Người giám sát dùng nỗi đau của các bạn làm nhiên liệu để duy trì vòng lặp này.",
						"thai": "ตอนนี้คุณเข้าใจแล้วใช่ไหม? ผู้ดูแลใช้ความทุกข์ทรมานของคุณเป็นเชื้อเพลิงเพื่อรักษาวงจรนี้ไว้",
						"hindi": "अब आप समझते हैं, है ना? ओवरसियर आपके कष्ट को इस लूप को बनाए रखने के लिए ईंधन के रूप में उपयोग करता है।"
					}
				},
				{
					"content": {
						"korean": "우린 그저 장난감이었어?",
						"english": "Were we just toys?",
						"japanese": "私たちはただの玩具だったの？",
						"chinese": "我们只是玩具吗？",
						"french": "N'étions-nous que des jouets ?",
						"spanish": "¿Éramos solo juguetes?",
						"vietnamese": "Chúng ta chỉ là đồ chơi sao?",
						"thai": "เราเป็นแค่ของเล่นงั้นหรือ?",
						"hindi": "क्या हम सिर्फ खिलौने थे?"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "sad",
					"content": {
						"korean": "더 이상 도망칠 곳도, 돌아갈 곳도 없어요. 이곳을 끊지 못하면… 영원히 갇혀요.",
						"english": "There's nowhere left to run, nowhere to go back to. If you don't break this place... you'll be trapped forever.",
						"japanese": "もう逃げ場も、戻る場所もありません。ここを断ち切らなければ…永遠に囚われます。",
						"chinese": "没有地方可逃，也没有地方可回了。如果无法切断这里……你将永远被困。",
						"french": "Il n'y a plus nulle part où fuir, nulle part où retourner. Si vous ne brisez pas cet endroit... vous serez piégé pour toujours.",
						"spanish": "No hay dónde huir, ni dónde regresar. Si no rompes este lugar... quedarás atrapado para siempre.",
						"vietnamese": "Không còn nơi nào để chạy, không còn nơi nào để quay về. Nếu không phá vỡ nơi này... bạn sẽ bị mắc kẹt mãi mãi.",
						"thai": "ไม่มีที่ให้หนีอีกแล้ว ไม่มีที่ให้กลับไป หากคุณไม่ทำลายที่นี่... คุณจะถูกกักขังตลอดไป",
						"hindi": "अब कहीं भागने की जगह नहीं, न ही वापस जाने की। यदि आप इस जगह को नहीं तोड़ते... तो आप हमेशा के लिए फंसे रहेंगे।"
					}
				},
				{
					"content": {
						"korean": "지긋지긋한 반복이다.",
						"english": "This damned loop.",
						"japanese": "うんざりする繰り返しだ。",
						"chinese": "这该死的循环。",
						"french": "Cette boucle infernale.",
						"spanish": "Esta maldita repetición.",
						"vietnamese": "Vòng lặp đáng nguyền rủa này.",
						"thai": "วงจรที่น่าเบื่อหน่ายนี้",
						"hindi": "यह शापित दोहराव।"
					},
					"speaker": "character_1",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "더는 속지 않아.",
						"english": "I won't be fooled again.",
						"japanese": "もう騙されない。",
						"chinese": "我不会再上当了。",
						"french": "Je ne me laisserai plus berner.",
						"spanish": "No me engañarán más.",
						"vietnamese": "Tôi sẽ không bị lừa nữa.",
						"thai": "ฉันจะไม่ถูกหลอกอีกแล้ว",
						"hindi": "मैं अब और मूर्ख नहीं बनूंगा।"
					},
					"speaker": "character_2",
					"emotion": "angry",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "환영해, 나의 오랜 친구들. 다시 만나게 될 줄 알았어.",
						"english": "Welcome, my old friends. I knew we'd meet again.",
						"japanese": "ようこそ、旧友たち。また会えると思っていたよ。",
						"chinese": "欢迎，我的老朋友们。我就知道我们会再见面的。",
						"french": "Bienvenue, mes vieux amis. Je savais que nous nous reverrions.",
						"spanish": "Bienvenidos, mis viejos amigos. Sabía que nos volveríamos a encontrar.",
						"vietnamese": "Chào mừng, những người bạn cũ của tôi. Tôi biết chúng ta sẽ gặp lại.",
						"thai": "ยินดีต้อนรับ สหายเก่าแก่ของข้า ข้ารู้ว่าเราจะต้องได้พบกันอีกครั้ง",
						"hindi": "स्वागत है, मेरे पुराने दोस्तों। मुझे पता था कि हम फिर मिलेंगे।"
					},
					"speaker": "boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "기억 관리자…!",
						"english": "Memory Manager…!",
						"japanese": "記憶の管理者…！",
						"chinese": "记忆管理者…！",
						"french": "Gestionnaire de Mémoire… !",
						"spanish": "¡Gestor de Recuerdos…!",
						"vietnamese": "Kẻ quản lý ký ức…!",
						"thai": "ผู้จัดการความทรงจำ…!",
						"hindi": "स्मृति प्रबंधक…!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "'이번엔 다를 거야.' 매번 그렇게 다짐했었지. 하지만… 항상 같았어.",
						"english": "'This time it'll be different.' I vowed that every time. But… it was always the same.",
						"japanese": "「今度こそは違う」。毎回そう誓ったはずなのに…いつも同じだった。",
						"chinese": "“这次会不同。”我每次都这样发誓。但是……总是一样。",
						"french": "« Cette fois, ce sera différent. » Je me le suis juré à chaque fois. Mais… c'était toujours pareil.",
						"spanish": "\"Esta vez será diferente.\" Lo juré cada vez. Pero… siempre fue lo mismo.",
						"vietnamese": "'Lần này sẽ khác.' Tôi đã tự nhủ như vậy mỗi lần. Nhưng… mọi thứ vẫn luôn như cũ.",
						"thai": "“คราวนี้มันจะต้องไม่เหมือนเดิม” ฉันสาบานไว้แบบนั้นทุกครั้ง แต่… มันก็เหมือนเดิมตลอด",
						"hindi": "'इस बार अलग होगा।' मैंने हर बार ऐसा वादा किया था। लेकिन… यह हमेशा वही रहा।"
					},
					"speaker": "boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "가장 행복했던 순간을 되새겨봐. 그게 바로 너희의 약점이지.",
						"english": "Recall your happiest moment. That is precisely your weakness.",
						"japanese": "最も幸せだった瞬間を思い出せ。それがお前たちの弱点だ。",
						"chinese": "回想你最幸福的时刻。那正是你们的弱点。",
						"french": "Rappelez-vous votre moment le plus heureux. C'est précisément votre faiblesse.",
						"spanish": "Recuerda tu momento más feliz. Esa es precisamente vuestra debilidad.",
						"vietnamese": "Hãy nhớ lại khoảnh khắc hạnh phúc nhất của ngươi. Đó chính là điểm yếu của ngươi.",
						"thai": "ย้อนนึกถึงช่วงเวลาที่มีความสุขที่สุด นั่นแหละคือจุดอ่อนของพวกแก",
						"hindi": "अपने सबसे सुखद पल को याद करो। वही तुम्हारी कमजोरी है।"
					},
					"speaker": "boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"emotion": "angry",
					"content": {
						"korean": "그 거짓된 행복에 더는 속지 않아.",
						"english": "I won't be fooled by that false happiness anymore.",
						"japanese": "もう、その偽りの幸福には騙されない。",
						"chinese": "我不会再被那虚假的幸福欺骗了。",
						"french": "Je ne me laisserai plus tromper par ce faux bonheur.",
						"spanish": "Ya no me engañará esa falsa felicidad.",
						"vietnamese": "Ta sẽ không bị lừa bởi thứ hạnh phúc giả dối đó nữa.",
						"thai": "ฉันจะไม่ถูกหลอกด้วยความสุขจอมปลอมนั่นอีกแล้ว",
						"hindi": "मैं उस झूठी खुशी से और नहीं ठगा जाऊँगा।"
					}
				},
				{
					"speaker": "character_2",
					"emotion": "angry",
					"content": {
						"korean": "이제 네놈의 반복되는 게임을 끝낼 때다.",
						"english": "It's time to end your repetitive game.",
						"japanese": "お前の繰り返されるゲームを終わらせる時だ。",
						"chinese": "是时候结束你这重复的游戏了。",
						"french": "Il est temps de mettre fin à ton jeu répétitif.",
						"spanish": "Es hora de terminar tu juego repetitivo.",
						"vietnamese": "Đã đến lúc kết thúc trò chơi lặp đi lặp lại của ngươi rồi.",
						"thai": "ถึงเวลาที่จะหยุดเกมที่ซ้ำซากของแกแล้ว",
						"hindi": "अब तुम्हारे इस दोहराए जाने वाले खेल को खत्म करने का समय आ गया है।"
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "lin"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이제 그만하세요, 관리자. 이 순환은 끝나야 해요.",
						"english": "Stop it now, Manager. This cycle must end.",
						"japanese": "もうやめてください、管理者。この循環は終わらせるべきです。",
						"chinese": "够了，管理者。这个循环必须结束。",
						"french": "Arrêtez maintenant, Gestionnaire. Ce cycle doit prendre fin.",
						"spanish": "Deténgase ahora, Gestor. Este ciclo debe terminar.",
						"vietnamese": "Dừng lại đi, Kẻ quản lý. Vòng tuần hoàn này phải kết thúc.",
						"thai": "หยุดเถอะครับ ผู้จัดการ วงจรนี้ควรจะจบลงได้แล้ว",
						"hindi": "अब रुक जाओ, प्रबंधक। यह चक्र समाप्त होना चाहिए।"
					},
					"speaker": "lin",
					"emotion": "angry"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "크하하… 끝났다고 생각해? 이 고통은… 영원히 반복될 거야.",
						"english": "Hahaha… You think it's over? This suffering… will repeat forever.",
						"japanese": "クハハ…終わっただと？この苦痛は…永遠に繰り返されるだろう。",
						"chinese": "哈哈哈…你以为结束了吗？这份痛苦…将永远重复。",
						"french": "Hahaha… Vous pensez que c'est fini ? Cette souffrance… se répétera à jamais.",
						"spanish": "Jajaja… ¿Crees que ha terminado? Este sufrimiento… se repetirá por siempre.",
						"vietnamese": "Khà khà… Ngươi nghĩ nó kết thúc rồi sao? Nỗi đau này… sẽ lặp lại mãi mãi thôi.",
						"thai": "คิก คิก… คิดว่ามันจบแล้วงั้นเหรอ? ความเจ็บปวดนี้… จะวนซ้ำไปตลอดกาล",
						"hindi": "हाहाहा… तुम्हें लगता है कि यह खत्म हो गया? यह पीड़ा… हमेशा के लिए दोहराई जाएगी।"
					},
					"speaker": "boss",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "닥쳐! 우린 해방될 거야!",
						"english": "Shut up! We will be free!",
						"japanese": "黙れ！私たちは解放されるんだ！",
						"chinese": "闭嘴！我们会被解放的！",
						"french": "Tais-toi ! Nous serons libres !",
						"spanish": "¡Cállate! ¡Seremos libres!",
						"vietnamese": "Im đi! Chúng ta sẽ được giải thoát!",
						"thai": "หุบปาก! พวกเราจะเป็นอิสระ!",
						"hindi": "चुप रहो! हम आज़ाद होंगे!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "관리자는 사라졌지만, 기억은… 여전히 우리 안에 있어요.",
						"english": "The Manager is gone, but the memories… are still within us.",
						"japanese": "管理者は消えたが、記憶は…まだ私たちの中に残っている。",
						"chinese": "管理者消失了，但是记忆…依然在我们心中。",
						"french": "Le Gestionnaire a disparu, mais les souvenirs… sont toujours en nous.",
						"spanish": "El Gestor ha desaparecido, pero los recuerdos… siguen dentro de nosotros.",
						"vietnamese": "Kẻ quản lý đã biến mất, nhưng những ký ức… vẫn còn trong chúng ta.",
						"thai": "ผู้จัดการหายไปแล้ว แต่ความทรงจำ… ยังคงอยู่ในตัวเรา",
						"hindi": "प्रबंधक चला गया, लेकिन यादें… अभी भी हमारे अंदर हैं।"
					},
					"speaker": "lin",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "반복되던 모든 기억이 멈췄다. 하지만 침묵 속에는 새로운 시작의 여운이 감돌았다.",
						"english": "All repetitive memories ceased. But in the silence, the lingering essence of a new beginning permeated.",
						"japanese": "繰り返される全ての記憶が止まった。しかし、沈黙の中には新しい始まりの余韻が漂っていた。",
						"chinese": "所有重复的记忆都停止了。但在沉默中，一个新的开始的余韵弥漫开来。",
						"french": "Tous les souvenirs répétitifs ont cessé. Mais dans le silence, l'essence persistante d'un nouveau commencement flottait.",
						"spanish": "Todas las memorias repetitivas cesaron. Pero en el silencio, la esencia persistente de un nuevo comienzo impregnaba.",
						"vietnamese": "Mọi ký ức lặp đi lặp lại đều đã dừng lại. Nhưng trong sự im lặng, dư vị của một khởi đầu mới vẫn còn đọng lại.",
						"thai": "ทุกความทรงจำที่วนเวียนได้หยุดลงแล้ว แต่ในความเงียบงันนั้น ความรู้สึกของการเริ่มต้นใหม่ยังคงอบอวลอยู่",
						"hindi": "सभी दोहराई जाने वाली यादें थम गईं। लेकिन खामोशी में, एक नई शुरुआत की स्थायी सुगंध छा गई।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "boss",
					"emotion": "base",
					"content": {
						"korean": "하찮은 것들. 매번 똑같지. 다시 시작될 거야.",
						"english": "Insignificant creatures. Always the same. It will begin again.",
						"japanese": "くだらない者ども。いつも同じだ。また始まるだろう。",
						"chinese": "渺小的存在。每次都一样。它会再次开始。",
						"french": "Êtres insignifiants. Toujours la même chose. Ça recommencera.",
						"spanish": "Seres insignificantes. Siempre lo mismo. Volverá a empezar.",
						"vietnamese": "Lũ vô dụng. Lần nào cũng vậy. Nó sẽ lại bắt đầu thôi.",
						"thai": "พวกไร้ค่า. เหมือนเดิมทุกครั้ง. มันจะเริ่มต้นใหม่อีกครั้ง.",
						"hindi": "तुच्छ प्राणी। हर बार वही। यह फिर से शुरू होगा।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "젠장…! 또 다시…!",
						"english": "Damn it...! Not again...!",
						"japanese": "ちくしょう…！またしても…！",
						"chinese": "该死…！又来了…！",
						"french": "Bon sang… ! Encore une fois… !",
						"spanish": "¡Maldita sea...! ¡Otra vez...!",
						"vietnamese": "Chết tiệt...! Lại nữa rồi...!",
						"thai": "ให้ตายสิ...! อีกแล้ว...!",
						"hindi": "धिक्कार है...! फिर से...!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "lin",
					"action": "enter",
					"spot": [
						3,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "base",
					"content": {
						"korean": "좌절하지 마세요. 우리는 방법을 찾을 거예요.",
						"english": "Don't despair. We will find a way.",
						"japanese": "絶望しないでください。私たちは方法を見つけます。",
						"chinese": "不要气馁。我们会找到办法的。",
						"french": "Ne désespérez pas. Nous trouverons un moyen.",
						"spanish": "No desesperes. Encontraremos un camino.",
						"vietnamese": "Đừng nản lòng. Chúng ta sẽ tìm ra cách thôi.",
						"thai": "อย่าเพิ่งท้อแท้. เราจะหาวิธีได้เอง.",
						"hindi": "निराश मत होइए। हम एक रास्ता खोज लेंगे।"
					}
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"기억의 반복이 멈추자, 왜곡된 공간은 비로소 침묵했다.",
			"관리자는 사라졌지만, 그들이 겪은 고통은 여전히 선명했다.",
			"해방인가, 아니면 새로운 굴레의 시작인가.",
			"이번엔 다를 것이라는 희망. 그것만이 남아 있었다."
		],
		"english": [
			"As the repetition of memories ceased, the distorted space finally fell silent.",
			"The administrator vanished, but the pain they endured remained vivid.",
			"Is it liberation, or the beginning of a new cycle?",
			"The hope that this time would be different. Only that remained."
		],
		"japanese": [
			"記憶の繰り返しが止まると、歪んだ空間はようやく沈黙した。",
			"管理者は消えたが、彼らが味わった苦痛は依然として鮮明だった。",
			"解放か、それとも新たな輪廻の始まりか。",
			"今回は違うだろうという希望。それだけが残されていた。"
		],
		"chinese": [
			"记忆的重复停止后，扭曲的空间终于归于沉寂。",
			"管理者消失了，但他们所承受的痛苦依然清晰。",
			"是解放，还是新循环的开始？",
			"希望这次会有所不同。仅此而已。"
		],
		"french": [
			"Lorsque la répétition des souvenirs cessa, l'espace déformé finit par se taire.",
			"L'administrateur a disparu, mais la douleur qu'ils ont endurée est restée vive.",
			"Est-ce la libération, ou le début d'un nouveau cycle ?",
			"L'espoir que cette fois serait différente. Il ne restait que cela."
		],
		"spanish": [
			"Cuando la repetición de los recuerdos cesó, el espacio distorsionado finalmente guardó silencio.",
			"El administrador desapareció, pero el dolor que sufrieron seguía siendo vívido.",
			"¿Es liberación, o el comienzo de un nuevo ciclo?",
			"La esperanza de que esta vez sería diferente. Solo eso quedaba."
		],
		"vietnamese": [
			"Khi sự lặp lại của ký ức dừng lại, không gian méo mó cuối cùng cũng chìm vào im lặng.",
			"Người quản lý đã biến mất, nhưng nỗi đau mà họ phải chịu đựng vẫn còn rõ ràng.",
			"Đây là sự giải thoát, hay là khởi đầu của một vòng luẩn quẩn mới?",
			"Hy vọng rằng lần này sẽ khác. Chỉ còn lại điều đó."
		],
		"thai": [
			"เมื่อการซ้ำรอยของความทรงจำหยุดลง พื้นที่ที่บิดเบี้ยวก็เงียบงันในที่สุด",
			"ผู้ดูแลหายไปแล้ว แต่ความเจ็บปวดที่พวกเขาได้รับยังคงชัดเจน",
			"นี่คืออิสรภาพ หรือจุดเริ่มต้นของวัฏจักรใหม่?",
			"ความหวังว่าคราวนี้จะต่างออกไป มีเพียงสิ่งนั้นที่เหลืออยู่"
		],
		"hindi": [
			"जैसे ही यादों का दोहराव रुका, विकृत स्थान आखिरकार खामोश हो गया।",
			"प्रबंधक गायब हो गया, लेकिन उन्होंने जो दर्द सहा, वह अभी भी स्पष्ट था।",
			"क्या यह मुक्ति है, या एक नए बंधन की शुरुआत?",
			"यह उम्मीद कि इस बार अलग होगा। बस वही बचा था।"
		]
	}
} as const;
