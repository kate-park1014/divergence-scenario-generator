export const scenario_modern_otto_12_02 = {
	"scenario_id": "modern_otto_12_02",
	"order": 2,
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
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"Otto의 미소가 역겨웠다.",
			"끝없이 반복되는 인증, 목적은 단 하나.",
			"시스템은 완벽해 보였다.",
			"하지만 모든 시스템엔 맹점이 있는 법.",
			"우린 반드시 뚫고 나간다."
		],
		"english": [
			"Otto's smile was repulsive.",
			"Endless authentications, a single purpose.",
			"The system seemed perfect.",
			"But every system has a blind spot.",
			"We must break through."
		],
		"japanese": [
			"オットーの笑顔は嫌悪感を抱かせた。",
			"終わりのない認証の繰り返し、目的はただ一つ。",
			"システムは完璧に見えた。",
			"しかし、すべてのシステムには盲点があるものだ。",
			"我々は必ず突破する。"
		],
		"chinese": [
			"奥托的笑容令人作呕。",
			"无尽的重复认证，只有一个目的。",
			"系统看起来很完美。",
			"但每个系统都有盲点。",
			"我们必须突破。"
		],
		"french": [
			"Le sourire d'Otto était répugnant.",
			"Authentification répétée sans fin, un seul but.",
			"Le système semblait parfait.",
			"Mais chaque système a un angle mort.",
			"Nous devons percer."
		],
		"spanish": [
			"La sonrisa de Otto era repugnante.",
			"Autenticación repetida sin fin, un solo propósito.",
			"El sistema parecía perfecto.",
			"Pero todo sistema tiene un punto ciego.",
			"Debemos abrirnos paso."
		],
		"vietnamese": [
			"Nụ cười của Otto thật kinh tởm.",
			"Xác thực lặp đi lặp lại không ngừng, chỉ với một mục đích.",
			"Hệ thống dường như hoàn hảo.",
			"Nhưng mọi hệ thống đều có điểm mù.",
			"Chúng ta phải đột phá."
		],
		"thai": [
			"รอยยิ้มของออตโต้น่าขยะแขยง",
			"การยืนยันซ้ำแล้วซ้ำเล่าไม่รู้จบ มีเพียงเป้าหมายเดียว",
			"ระบบดูสมบูรณ์แบบ",
			"แต่ทุกระบบย่อมมีจุดบอด",
			"เราต้องฝ่าฟันออกไปให้ได้"
		],
		"hindi": [
			"ओटो की मुस्कान घिनौनी थी।",
			"अनंत दोहराया गया प्रमाणीकरण, एकमात्र उद्देश्य।",
			"सिस्टम सही लग रहा था।",
			"लेकिन हर सिस्टम में एक अंधा स्थान होता है।",
			"हमें अवश्य ही तोड़ना होगा।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "또다시 '처음부터 다시'라는 메시지가 떴다.",
						"english": "The 'Start over' message popped up again.",
						"japanese": "また「最初からやり直し」というメッセージが出た。",
						"chinese": "又出现了‘从头开始’的消息。",
						"french": "Le message 'Retour au début' est apparu de nouveau.",
						"spanish": "El mensaje 'Empezar de nuevo' apareció otra vez.",
						"vietnamese": "Lại xuất hiện thông báo 'Làm lại từ đầu'.",
						"thai": "ข้อความ 'เริ่มต้นใหม่' ปรากฏขึ้นอีกครั้ง",
						"hindi": "फिर से 'शुरुआत से' संदेश आया।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "장난하나? 벌써 몇 번째야!",
						"english": "Are you kidding me? How many times is this?!",
						"japanese": "ふざけてるの？これで何回目よ！",
						"chinese": "开玩笑吗？这都多少次了！",
						"french": "Tu te moques de moi ? C'est la combien de fois ?!",
						"spanish": "¿Estás bromeando? ¡¿Cuántas veces van ya?!",
						"vietnamese": "Đùa à? Đây là lần thứ mấy rồi chứ!",
						"thai": "ล้อเล่นกันเหรอ? นี่มันครั้งที่เท่าไหร่แล้ว!",
						"hindi": "मज़ाक कर रहे हो क्या? यह कितनी बार हो चुका है?!"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "계속 새로운 인증을 요구해.",
						"english": "It keeps demanding new authentication.",
						"japanese": "ずっと新しい認証を要求してくる。",
						"chinese": "它一直在要求新的认证。",
						"french": "Il demande constamment de nouvelles authentifications.",
						"spanish": "Sigue pidiendo una nueva autenticación.",
						"vietnamese": "Nó cứ đòi xác thực mới.",
						"thai": "มันเรียกการยืนยันตัวตนใหม่ตลอดเวลา",
						"hindi": "यह लगातार नया प्रमाणीकरण मांग रहा है।"
					}
				},
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "bex",
					"action": "enter"
				},
				{
					"content": {
						"korean": "잠깐만. 이 흐름 좀 이상한데.",
						"english": "Wait a minute. This flow is a bit strange.",
						"japanese": "ちょっと待って。この流れ、なんかおかしい。",
						"chinese": "等等。这个流程有点奇怪。",
						"french": "Attends. Ce déroulement est un peu étrange.",
						"spanish": "Espera un momento. Este flujo es un poco extraño.",
						"vietnamese": "Khoan đã. Luồng này hơi lạ.",
						"thai": "เดี๋ยวสิ. ลำดับนี้มันแปลกๆ นะ",
						"hindi": "एक मिनट रुको। यह प्रवाह थोड़ा अजीब है।"
					},
					"speaker": "bex",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "뭔가 놓친 게 있을 거야. 내가 찾아볼게.",
						"english": "There must be something we missed. I'll look into it.",
						"japanese": "何か見落としてるはずだ。私が探してみる。",
						"chinese": "我们一定错过了什么。我来找找看。",
						"french": "On a dû rater quelque chose. Je vais vérifier.",
						"spanish": "Debemos haber pasado algo por alto. Lo buscaré.",
						"vietnamese": "Chắc chắn có gì đó chúng ta đã bỏ lỡ. Để tôi tìm xem.",
						"thai": "ต้องมีอะไรที่เราพลาดไปแน่ ฉันจะลองหาดู",
						"hindi": "हमने कुछ तो मिस किया होगा। मैं देखूंगा।"
					},
					"speaker": "bex",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 400,
					"type": "direction",
					"speaker": "bex",
					"action": "enter"
				},
				{
					"emotion": "base",
					"speaker": "bex",
					"type": "speech",
					"content": {
						"korean": "이상해. 새로 추가된 인증 조건들이…",
						"english": "Strange. The newly added authentication conditions…",
						"japanese": "おかしい。新たに追加された認証条件が…",
						"chinese": "奇怪。新添加的认证条件…",
						"french": "Étrange. Les nouvelles conditions d'authentification ajoutées…",
						"spanish": "Extraño. Las nuevas condiciones de autenticación añadidas…",
						"vietnamese": "Lạ thật. Các điều kiện xác thực mới thêm vào…",
						"thai": "แปลกนะ เงื่อนไขการยืนยันตัวตนที่เพิ่มเข้ามาใหม่…",
						"hindi": "अजीब है। नई जोड़ी गई प्रमाणीकरण शर्तें..."
					}
				},
				{
					"content": {
						"korean": "필요 이상으로 복잡해. 의미 없는 루프만 반복하고 있어.",
						"english": "They're unnecessarily complex. Just repeating meaningless loops.",
						"japanese": "必要以上に複雑だ。意味のないループを繰り返しているだけだ。",
						"chinese": "它们过于复杂。只是在重复毫无意义的循环。",
						"french": "Elles sont inutilement complexes. Elles ne font que répéter des boucles insignifiantes.",
						"spanish": "Son innecesariamente complejas. Solo repiten bucles sin sentido.",
						"vietnamese": "Chúng phức tạp hơn mức cần thiết. Chỉ lặp lại các vòng lặp vô nghĩa.",
						"thai": "มันซับซ้อนเกินจำเป็น แค่วนซ้ำไปมาโดยไร้ความหมาย",
						"hindi": "वे अनावश्यक रूप से जटिल हैं। बस अर्थहीन लूप दोहरा रहे हैं।"
					},
					"speaker": "bex",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그럼 이게 다 헛수고라는 거야?",
						"english": "So, all this was for nothing?",
						"japanese": "じゃあ、これ全部無駄だったってこと？",
						"chinese": "所以，这一切都白费了？",
						"french": "Alors, tout ça n'a servi à rien ?",
						"spanish": "¿Entonces todo esto fue en vano?",
						"vietnamese": "Vậy, tất cả những điều này là vô ích sao?",
						"thai": "งั้นทั้งหมดนี่ก็ไร้ประโยชน์น่ะสิ?",
						"hindi": "तो, यह सब व्यर्थ था?"
					}
				},
				{
					"speaker": "bex",
					"type": "speech",
					"content": {
						"korean": "아니, 헛수고는 아니야. 하지만 목적이 불순해 보여.",
						"english": "No, not for nothing. But the motive seems impure.",
						"japanese": "いや、無駄ではない。だが、目的が不純に見える。",
						"chinese": "不，并非白费。但目的似乎不纯。",
						"french": "Non, pas pour rien. Mais le motif semble impur.",
						"spanish": "No, no en vano. Pero el motivo parece impuro.",
						"vietnamese": "Không, không phải vô ích. Nhưng động cơ có vẻ không trong sáng.",
						"thai": "ไม่หรอก ไม่ได้ไร้ประโยชน์ แต่จุดประสงค์ดูไม่บริสุทธิ์",
						"hindi": "नहीं, व्यर्थ नहीं। लेकिन इरादा अशुद्ध लगता है।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 550,
					"type": "direction",
					"speaker": "bex",
					"action": "enter"
				},
				{
					"emotion": "base",
					"speaker": "bex",
					"type": "speech",
					"content": {
						"korean": "결론은 하나야.",
						"english": "There's only one conclusion.",
						"japanese": "結論は一つだ。",
						"chinese": "只有一个结论。",
						"french": "Il n'y a qu'une seule conclusion.",
						"spanish": "Solo hay una conclusión.",
						"vietnamese": "Chỉ có một kết luận.",
						"thai": "มีข้อสรุปเดียว",
						"hindi": "केवल एक ही निष्कर्ष है।"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "이 모든 인증은… 시간 끌기였어.",
						"english": "All these authentications… were just a delay tactic.",
						"japanese": "この全ての認証は… 時間稼ぎだった。",
						"chinese": "所有这些认证……都只是拖延战术。",
						"french": "Toutes ces authentifications… n'étaient qu'une tactique pour gagner du temps.",
						"spanish": "Todas estas autenticaciones… solo eran una táctica para ganar tiempo.",
						"vietnamese": "Tất cả các xác thực này… chỉ là một chiến thuật trì hoãn.",
						"thai": "การยืนยันตัวตนทั้งหมดนี้… เป็นแค่การถ่วงเวลา",
						"hindi": "ये सभी प्रमाणीकरण… केवल समय बर्बाद करने की एक चाल थे।"
					},
					"speaker": "bex",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "Otto… 이 위선자!",
						"english": "Otto… that hypocrite!",
						"japanese": "オットー… この偽善者め！",
						"chinese": "奥托……这个伪君子！",
						"french": "Otto… cet hypocrite !",
						"spanish": "Otto… ¡ese hipócrita!",
						"vietnamese": "Otto… tên đạo đức giả đó!",
						"thai": "อ็อตโต้… ไอ้คนหน้าซื่อใจคด!",
						"hindi": "ओटो… वह पाखंडी!"
					}
				},
				{
					"content": {
						"korean": "우릴 지치게 만들려는 수작이야.",
						"english": "It's a ploy to wear us down.",
						"japanese": "私たちを疲れさせようとする企みだ。",
						"chinese": "这是想耗尽我们精力的小把戏。",
						"french": "C'est une ruse pour nous épuiser.",
						"spanish": "Es una estratagema para agotarnos.",
						"vietnamese": "Đây là một mưu mẹo để làm chúng ta kiệt sức.",
						"thai": "มันเป็นแผนการที่จะทำให้เราเหนื่อยล้า",
						"hindi": "यह हमें थकाने की एक चाल है।"
					},
					"speaker": "bex",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 450,
					"spot": [
						2,
						4
					],
					"action": "enter",
					"type": "direction",
					"speaker": "bex"
				},
				{
					"content": {
						"korean": "드디어 찾았어. 시스템 내부의 비정상적인 데이터 흐름.",
						"english": "Finally found it. Abnormal data flow within the system.",
						"japanese": "ついに見つけた。システム内部の異常なデータフロー。",
						"chinese": "终于找到了。系统内部的异常数据流。",
						"french": "Je l'ai enfin trouvé. Le flux de données anormal au sein du système.",
						"spanish": "Finalmente lo encontré. El flujo de datos anormal dentro del sistema.",
						"vietnamese": "Cuối cùng đã tìm ra. Luồng dữ liệu bất thường trong hệ thống.",
						"thai": "ในที่สุดก็เจอแล้ว การไหลของข้อมูลที่ผิดปกติภายในระบบ",
						"hindi": "आखिरकार मिल गया। सिस्टम के अंदर असामान्य डेटा प्रवाह।"
					},
					"speaker": "bex",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "bex",
					"type": "speech",
					"content": {
						"korean": "모순적인 패턴이 반복되고 있었어. 이게 바로 맹점이야.",
						"english": "Contradictory patterns were repeating. This is the blind spot.",
						"japanese": "矛盾したパターンが繰り返されていた。これこそが盲点だ。",
						"chinese": "矛盾的模式一直在重复。这就是盲点。",
						"french": "Des schémas contradictoires se répétaient. C'est le point aveugle.",
						"spanish": "Se repetían patrones contradictorios. Este es el punto ciego.",
						"vietnamese": "Các mẫu mâu thuẫn lặp đi lặp lại. Đây chính là điểm mù.",
						"thai": "รูปแบบที่ขัดแย้งกันซ้ำแล้วซ้ำอีก นี่แหละคือจุดบอด",
						"hindi": "विरोधाभासी पैटर्न दोहराए जा रहे थे। यही वह ब्लाइंड स्पॉट है।"
					},
					"emotion": "happy"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "맹점? 그럼 통과할 수 있어?",
						"english": "Blind spot? So we can pass through?",
						"japanese": "死角？じゃあ、そこを通れるの？",
						"chinese": "盲点？那我们能通过吗？",
						"french": "Angle mort ? Alors on peut passer ?",
						"spanish": "¿Punto ciego? ¿Así que podemos pasar?",
						"vietnamese": "Điểm mù? Vậy chúng ta có thể đi qua không?",
						"thai": "จุดบอดเหรอ? งั้นเราผ่านได้ใช่มั้ย?",
						"hindi": "अदृश्य स्थान? तो क्या हम पार कर सकते हैं?"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "응. 하지만 이 앞에 {random_boss}가 이 맹점을 지키고 있어.",
						"english": "Yes. But {random_boss} is guarding this blind spot up ahead.",
						"japanese": "うん。でも、この先に{random_boss}がこの死角を守ってる。",
						"chinese": "嗯。但是前面有{random_boss}守着这个盲点。",
						"french": "Oui. Mais {random_boss} garde cet angle mort devant.",
						"spanish": "Sí. Pero {random_boss} está custodiando este punto ciego más adelante.",
						"vietnamese": "Đúng vậy. Nhưng {random_boss} đang canh giữ điểm mù này phía trước.",
						"thai": "ใช่ แต่ {random_boss} กำลังเฝ้าจุดบอดนี้อยู่ข้างหน้า",
						"hindi": "हाँ। लेकिन सामने {random_boss} इस अदृश्य स्थान की रखवाली कर रहा है।"
					},
					"speaker": "bex",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "시스템의 뿌리가 모든 것을 삼켰다.",
						"english": "The roots of the System devoured everything.",
						"japanese": "システムの根がすべてを飲み込んだ。",
						"chinese": "系统的根源吞噬了一切。",
						"french": "Les racines du Système ont tout dévoré.",
						"spanish": "Las raíces del Sistema lo devoraron todo.",
						"vietnamese": "Rễ cây của Hệ thống đã nuốt chửng mọi thứ.",
						"thai": "รากของระบบกลืนกินทุกสิ่ง",
						"hindi": "प्रणाली की जड़ें सब कुछ निगल गईं।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…아직 끝나지 않았어.",
						"english": "...It's not over yet.",
						"japanese": "...まだ終わってない。",
						"chinese": "...还没结束。",
						"french": "...Ce n'est pas encore fini.",
						"spanish": "...Todavía no ha terminado.",
						"vietnamese": "...Chưa kết thúc đâu.",
						"thai": "...ยังไม่จบแค่นี้หรอก",
						"hindi": "...अभी खत्म नहीं हुआ है।"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "포기하지 않는군. …재밌어.",
						"english": "You're not giving up. ...Interesting.",
						"japanese": "諦めないね。…面白い。",
						"chinese": "你还没放弃啊。…有意思。",
						"french": "Tu n'abandonnes pas. ...Intéressant.",
						"spanish": "No te rindes. ...Interesante.",
						"vietnamese": "Ngươi không bỏ cuộc à. ...Thú vị đấy.",
						"thai": "ไม่ยอมแพ้สินะ ...น่าสนใจ",
						"hindi": "तुम हार नहीं मान रहे। ...रोचक।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 길을 막았다.",
						"english": "A colossal shadow blocked the path.",
						"japanese": "巨大な影が道を塞いだ。",
						"chinese": "一个巨大的影子挡住了路。",
						"french": "Une ombre colossale bloquait le chemin.",
						"spanish": "Una sombra colosal bloqueó el camino.",
						"vietnamese": "Một bóng tối khổng lồ đã chặn đường.",
						"thai": "เงาขนาดยักษ์ขวางทางไว้",
						"hindi": "एक विशालकाय परछाई ने रास्ता रोक दिया।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "감히 시스템에 도전하는가? 무의미한 시도.",
						"english": "Dare to challenge the System? A futile attempt.",
						"japanese": "あえてシステムに挑むか？無意味な試みだ。",
						"chinese": "竟敢挑战系统？毫无意义的尝试。",
						"french": "Oserez-vous défier le Système ? Tentative futile.",
						"spanish": "¿Osas desafiar al Sistema? Un intento inútil.",
						"vietnamese": "Dám thách thức Hệ thống? Một nỗ lực vô ích.",
						"thai": "กล้าท้าทายระบบงั้นรึ? เป็นความพยายามที่ไร้ประโยชน์",
						"hindi": "प्रणाली को चुनौती देने की हिम्मत? एक व्यर्थ प्रयास।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "네놈이 길을 막는 한, 우린 포기 안 해!",
						"english": "As long as you block our way, we won't give up!",
						"japanese": "貴様が道を塞ぐ限り、我々は諦めない！",
						"chinese": "只要你挡着路，我们就不会放弃！",
						"french": "Tant que tu nous barreras la route, nous n'abandonnerons pas !",
						"spanish": "¡Mientras nos bloquees el camino, no nos rendiremos!",
						"vietnamese": "Chừng nào ngươi còn chặn đường, chúng ta sẽ không bỏ cuộc!",
						"thai": "ตราบใดที่แกขวางทางเรา เราไม่ยอมแพ้หรอก!",
						"hindi": "जब तक तुम रास्ता रोकोगे, हम हार नहीं मानेंगे!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…어리석군.",
						"english": "...Foolish.",
						"japanese": "…愚かだな。",
						"chinese": "……愚蠢。",
						"french": "...Stupide.",
						"spanish": "...Qué necios.",
						"vietnamese": "...Thật ngu ngốc.",
						"thai": "...โง่เขลา",
						"hindi": "...मूर्खतापूर्ण।"
					},
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "…크큭. 고작 이 정도에 만족하나? 너희는 아직… 아무것도 모른다.",
						"english": "...Heh heh. Satisfied with just this? You still... know nothing.",
						"japanese": "…ククク。たかがこれしきで満足か？お前たちはまだ…何も知らない。",
						"chinese": "……呵呵。就这点程度就满足了吗？你们还……一无所知。",
						"french": "...Hé hé. Satisfaits de si peu ? Vous ne savez encore... rien du tout.",
						"spanish": "...Je je. ¿Satisfechos con esto? Todavía... no sabéis nada.",
						"vietnamese": "...Khặc khặc. Chỉ thế này mà đã thỏa mãn rồi sao? Các ngươi vẫn còn... chưa biết gì cả.",
						"thai": "...คิกคิก แค่นี้ก็พอใจแล้วรึ? พวกเจ้ายัง...ไม่รู้อะไรเลย",
						"hindi": "...हँसते हुए। बस इतने से ही संतुष्ट हो? तुम अभी भी... कुछ नहीं जानते।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "happy",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "시끄러워! 이제 길은 열렸다!",
						"english": "Quiet! The path is open now!",
						"japanese": "黙れ！もう道は開かれた！",
						"chinese": "闭嘴！现在路已经开了！",
						"french": "Silence ! Le chemin est ouvert maintenant !",
						"spanish": "¡Silencio! ¡El camino está abierto ahora!",
						"vietnamese": "Im đi! Con đường đã mở ra rồi!",
						"thai": "เงียบซะ! บัดนี้เส้นทางได้เปิดแล้ว!",
						"hindi": "चुप रहो! अब रास्ता खुल गया है!"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "시스템의 문이 열렸다. 하지만 그들의 희망은 잠시뿐이었다. 또 다른 절망이 기다리고 있었다.",
						"english": "The System's gate opened. But their hope was fleeting. Another despair awaited.",
						"japanese": "システムの扉が開かれた。しかし彼らの希望は束の間だった。別の絶望が待ち受けていた。",
						"chinese": "系统的大门打开了。但他们的希望只是短暂的。另一种绝望正在等待着。",
						"french": "La porte du Système s'ouvrit. Mais leur espoir fut éphémère. Une autre désespoir les attendait.",
						"spanish": "La puerta del Sistema se abrió. Pero su esperanza fue fugaz. Otra desesperación les esperaba.",
						"vietnamese": "Cánh cổng của Hệ thống đã mở. Nhưng hy vọng của họ chỉ là thoáng qua. Một nỗi tuyệt vọng khác đang chờ đợi.",
						"thai": "ประตูของระบบได้เปิดออกแล้ว แต่ความหวังของพวกเขานั้นชั่วคราวเท่านั้น ความสิ้นหวังอีกอย่างรอคอยอยู่",
						"hindi": "प्रणाली का द्वार खुल गया। लेकिन उनकी आशा क्षणभंगुर थी। एक और निराशा इंतजार कर रही थी।"
					},
					"emotion": "base"
				}
			]
		}
	]
} as const;
