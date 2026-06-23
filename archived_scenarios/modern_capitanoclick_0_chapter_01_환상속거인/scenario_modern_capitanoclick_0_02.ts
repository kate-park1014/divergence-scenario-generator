export const scenario_modern_capitanoclick_0_02 = {
	"scenario_id": "modern_capitanoclick_0_02",
	"order": 2,
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
	"prologue": {
		"korean": [
			"캡틴 클릭의 쇼는 완벽했다.",
			"그러나 오늘, 화면 곳곳에 균열이 보였다.",
			"버퍼링 뒤에 숨겨진 진실이 꿈틀거렸다.",
			"시스템은… 완벽하지 않았다."
		],
		"english": [
			"Captain Click's show was perfect.",
			"But today, cracks appeared all over the screen.",
			"The truth hidden behind the buffering twitched.",
			"The system… was not perfect."
		],
		"japanese": [
			"キャプテン・クリックのショーは完璧だった。",
			"しかし今日、画面のあちこちに亀裂が見えた。",
			"バッファリングの裏に隠された真実が蠢いていた。",
			"システムは…完璧ではなかった。"
		],
		"chinese": [
			"点击船长的表演完美无瑕。",
			"然而今天，屏幕各处出现了裂痕。",
			"缓冲背后隐藏的真相蠢蠢欲动。",
			"系统……并不完美。"
		],
		"french": [
			"Le spectacle du Capitaine Click était parfait.",
			"Mais aujourd'hui, des fissures apparaissaient partout sur l'écran.",
			"La vérité cachée derrière le tamponnage frémissait.",
			"Le système… n'était pas parfait."
		],
		"spanish": [
			"El show del Capitán Click era perfecto.",
			"Pero hoy, grietas aparecieron por toda la pantalla.",
			"La verdad oculta tras el búfer se retorcía.",
			"El sistema… no era perfecto."
		],
		"vietnamese": [
			"Buổi biểu diễn của Thuyền trưởng Click thật hoàn hảo.",
			"Nhưng hôm nay, các vết nứt xuất hiện khắp màn hình.",
			"Sự thật ẩn sau bộ đệm đang cựa quậy.",
			"Hệ thống… không hoàn hảo."
		],
		"thai": [
			"การแสดงของกัปตันคลิกสมบูรณ์แบบมาก",
			"แต่แล้ววันนี้ จอร้าวไปทั่ว",
			"ความจริงที่ซ่อนอยู่หลังการบัฟเฟอร์กำลังสั่นสะเทือน",
			"ระบบ… ไม่สมบูรณ์แบบ"
		],
		"hindi": [
			"कैप्टन क्लिक का शो लाजवाब था।",
			"पर आज, स्क्रीन पर हर जगह दरारें दिख रही थीं।",
			"बफ़रिंग के पीछे छिपी सच्चाई हिल रही थी।",
			"सिस्टम… सही नहीं था।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "방송이 시작됐다. 캡틴 클릭의 웃음이 울려 퍼졌다.",
						"english": "The broadcast began. Captain Click's laughter echoed.",
						"japanese": "放送が始まった。キャプテン・クリックの笑い声が響き渡った。",
						"chinese": "广播开始了。点击船长的笑声回荡着。",
						"french": "La diffusion a commencé. Le rire du Capitaine Click résonnait.",
						"spanish": "La transmisión comenzó. La risa del Capitán Click resonó.",
						"vietnamese": "Buổi phát sóng bắt đầu. Tiếng cười của Thuyền trưởng Click vang vọng.",
						"thai": "การถ่ายทอดสดเริ่มต้นขึ้น เสียงหัวเราะของกัปตันคลิกก้องกังวาน",
						"hindi": "प्रसारण शुरू हुआ। कैप्टन क्लिक की हंसी गूंज उठी।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "캡틴의 쇼가… 왜 이래? 화면이 자꾸 튀잖아.",
						"english": "Captain's show… what's wrong? The screen keeps glitching.",
						"japanese": "キャプテンのショーが…どうしたの？画面がちらつくじゃないか。",
						"chinese": "船长的表演……怎么回事？屏幕一直在闪。",
						"french": "Le spectacle du Capitaine… qu'est-ce qui ne va pas ? L'écran ne cesse de sauter.",
						"spanish": "El show del Capitán… ¿qué le pasa? La pantalla no para de saltar.",
						"vietnamese": "Chương trình của Thuyền trưởng… sao lại thế này? Màn hình cứ giật liên tục.",
						"thai": "รายการของกัปตัน… เป็นอะไรไป? จอมันกระตุกตลอดเลย",
						"hindi": "कैप्टन का शो… ये क्या हो रहा है? स्क्रीन अटक रही है।"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"action": "enter",
					"speaker": "echo",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "…조용히 해. 들켜.",
						"english": "…Be quiet. We'll be caught.",
						"japanese": "…静かにしろ。見つかるぞ。",
						"chinese": "……安静。会被发现的。",
						"french": "…Tais-toi. On va se faire prendre.",
						"spanish": "…Cállate. Nos descubrirán.",
						"vietnamese": "…Im lặng đi. Sẽ bị phát hiện đấy.",
						"thai": "…เงียบหน่อย จะถูกจับได้",
						"hindi": "…चुप रहो। पकड़े जाएंगे।"
					},
					"speaker": "echo",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "누구세요?",
						"english": "Who are you?",
						"japanese": "誰だ？",
						"chinese": "你是谁？",
						"french": "Qui êtes-vous ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Anh/Chị là ai?",
						"thai": "คุณคือใคร?",
						"hindi": "आप कौन हो?"
					}
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "에코. 시스템의 균열을 보는 자.",
						"english": "Echo. The one who sees the system's cracks.",
						"japanese": "エコー。システムの亀裂を見る者。",
						"chinese": "回声。系统裂痕的目击者。",
						"french": "Écho. Celui qui voit les failles du système.",
						"spanish": "Eco. Quien ve las grietas del sistema.",
						"vietnamese": "Echo. Người nhìn thấy những vết nứt của hệ thống.",
						"thai": "เอคโค่ ผู้เห็นรอยร้าวของระบบ",
						"hindi": "इको। सिस्टम की दरारें देखने वाला।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"content": {
						"korean": "방송 화면에 짧게 암호화된 메시지가 스쳐 지나갔다.",
						"english": "A short, encrypted message flashed across the broadcast screen.",
						"japanese": "放送画面に短い暗号化されたメッセージが瞬時に表示された。",
						"chinese": "一条简短的加密消息在广播屏幕上闪过。",
						"french": "Un court message crypté a traversé l'écran de diffusion.",
						"spanish": "Un breve mensaje encriptado apareció fugazmente en la pantalla de transmisión.",
						"vietnamese": "Một tin nhắn mã hóa ngắn gọn lướt qua màn hình phát sóng.",
						"thai": "ข้อความเข้ารหัสสั้นๆ แวบขึ้นมาบนหน้าจอถ่ายทอดสด",
						"hindi": "एक छोटा, एन्क्रिप्टेड संदेश प्रसारण स्क्रीन पर चमक उठा।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "echo",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "저건… 시스템의 복잡한 코드야.",
						"english": "That's... the system's complex code.",
						"japanese": "あれは…システムの複雑なコードだ。",
						"chinese": "那是……系统的复杂代码。",
						"french": "C'est... le code complexe du système.",
						"spanish": "Eso es... el código complejo del sistema.",
						"vietnamese": "Đó là... mã code phức tạp của hệ thống.",
						"thai": "นั่นคือ... รหัสที่ซับซ้อนของระบบ",
						"hindi": "वह… सिस्टम का जटिल कोड है।"
					},
					"speaker": "echo"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "코드? 왜 저런 게 보여?",
						"english": "Code? Why can I see something like that?",
						"japanese": "コード？なぜあんなものが見えるの？",
						"chinese": "代码？为什么会看到那种东西？",
						"french": "Code ? Pourquoi est-ce que je vois ça ?",
						"spanish": "¿Código? ¿Por qué veo algo así?",
						"vietnamese": "Mã code? Sao lại thấy cái đó?",
						"thai": "รหัสเหรอ? ทำไมถึงเห็นอะไรแบบนั้น?",
						"hindi": "कोड? ऐसा क्यों दिख रहा है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "echo",
					"content": {
						"korean": "캡틴 클릭의 방송은 겉모습일 뿐. 뒤엔 더러운 코드가 얽혀있어.",
						"english": "Captain Click's broadcast is just a facade. Dirty code is tangled behind it.",
						"japanese": "キャプテンクリックの放送は見せかけだけ。裏には汚いコードが絡み合っている。",
						"chinese": "点击船长的广播只是表面。背后缠绕着肮脏的代码。",
						"french": "L'émission du Capitaine Click n'est qu'une façade. De la sale code est emmêlée derrière.",
						"spanish": "La emisión del Capitán Click es solo una fachada. Hay código sucio enredado detrás.",
						"vietnamese": "Chương trình của Captain Click chỉ là bề ngoài. Phía sau là những đoạn mã code bẩn thỉu.",
						"thai": "การออกอากาศของกัปตันคลิกเป็นเพียงฉากหน้า มีรหัสสกปรกพัวพันอยู่เบื้องหลัง",
						"hindi": "कैप्टन क्लिक का प्रसारण सिर्फ दिखावा है। इसके पीछे गंदा कोड उलझा हुआ है।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "더러운 코드라니…",
						"english": "Dirty code, you say...",
						"japanese": "汚いコードだなんて…",
						"chinese": "肮脏的代码……",
						"french": "Du code sale, tu dis...",
						"spanish": "¿Código sucio, dices...?",
						"vietnamese": "Mã code bẩn thỉu ư...",
						"thai": "รหัสสกปรกอะไรนั่น...",
						"hindi": "गंदा कोड, क्या मतलब..."
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "'시스템 과부하' 경고와 함께 캡틴 클릭의 마스코트가 일그러졌다.",
						"english": "With a 'System Overload' warning, Captain Click's mascot distorted.",
						"japanese": "「システム過負荷」の警告と共に、キャプテンクリックのマスコットが歪んだ。",
						"chinese": "随着“系统过载”的警告，点击船长的吉祥物扭曲了。",
						"french": "Avec l'avertissement 'Surcharge Système', la mascotte du Capitaine Click s'est déformée.",
						"spanish": "Con una advertencia de 'Sobrecarga del sistema', la mascota del Capitán Click se distorsionó.",
						"vietnamese": "Với cảnh báo 'Hệ thống quá tải', linh vật của Captain Click đã bị biến dạng.",
						"thai": "พร้อมกับคำเตือน 'ระบบทำงานเกินพิกัด' มาสคอตของกัปตันคลิกก็บิดเบี้ยวไป",
						"hindi": "'सिस्टम ओवरलोड' चेतावनी के साथ, कैप्टन क्लिक का शुभंकर विकृत हो गया।"
					}
				},
				{
					"action": "enter",
					"speaker": "echo",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "균열이 커지고 있어. 곧 시스템의 잔혹성이 드러날 거야.",
						"english": "The crack is growing. Soon, the system's cruelty will be revealed.",
						"japanese": "亀裂が大きくなっている。すぐにシステムの残虐性が明らかになるだろう。",
						"chinese": "裂缝正在扩大。很快，系统的残酷性就会暴露出来。",
						"french": "La fissure s'agrandit. Bientôt, la cruauté du système sera révélée.",
						"spanish": "La grieta está creciendo. Pronto, la crueldad del sistema será revelada.",
						"vietnamese": "Vết nứt đang lớn dần. Chẳng mấy chốc, sự tàn khốc của hệ thống sẽ lộ rõ.",
						"thai": "รอยร้าวขยายใหญ่ขึ้น ไม่ช้าความโหดร้ายของระบบจะถูกเปิดเผย",
						"hindi": "दरार बढ़ रही है। जल्द ही, सिस्टम की क्रूरता सामने आ जाएगी।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "잔혹성? 도대체 이 방송의 정체가 뭐야?",
						"english": "Cruelty? What exactly is the true nature of this broadcast?",
						"japanese": "残虐性？一体この放送の正体は何なの？",
						"chinese": "残酷性？这个广播到底是什么？",
						"french": "Cruauté ? Quelle est la véritable nature de cette émission ?",
						"spanish": "¿Crueldad? ¿Cuál es la verdadera naturaleza de esta emisión?",
						"vietnamese": "Tàn khốc ư? Rốt cuộc chương trình này là gì?",
						"thai": "ความโหดร้ายเหรอ? ตกลงแล้วการออกอากาศนี้คืออะไรกันแน่?",
						"hindi": "क्रूरता? आखिर इस प्रसारण की असली पहचान क्या है?"
					}
				},
				{
					"content": {
						"korean": "이 방송은… 희생자를 만드는 게임이야.",
						"english": "This broadcast is... a game that creates victims.",
						"japanese": "この放送は…犠牲者を生み出すゲームだ。",
						"chinese": "这个广播是……一场制造受害者的游戏。",
						"french": "Cette émission est... un jeu qui crée des victimes.",
						"spanish": "Esta emisión es... un juego que crea víctimas.",
						"vietnamese": "Chương trình này là... một trò chơi tạo ra nạn nhân.",
						"thai": "การออกอากาศนี้คือ... เกมที่สร้างเหยื่อ",
						"hindi": "यह प्रसारण... पीड़ितों को बनाने वाला खेल है।"
					},
					"speaker": "echo",
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "방송 전체가 심한 버퍼링과 함께 멈췄다.",
						"english": "The entire broadcast stopped with severe buffering.",
						"japanese": "放送全体がひどいバッファリングとともに停止した。",
						"chinese": "整个广播因严重的缓冲而停止了。",
						"french": "Toute l'émission s'est arrêtée avec de graves problèmes de mise en mémoire tampon.",
						"spanish": "Toda la emisión se detuvo con un fuerte buffering.",
						"vietnamese": "Toàn bộ chương trình dừng lại với hiện tượng giật lag nghiêm trọng.",
						"thai": "การออกอากาศทั้งหมดหยุดลงพร้อมกับการบัฟเฟอร์อย่างรุนแรง",
						"hindi": "पूरा प्रसारण गंभीर बफरिंग के साथ रुक गया।"
					},
					"speaker": "narrator"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "echo",
					"action": "enter"
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "이제 피할 수 없어. 시스템의 파수꾼이 오고 있어.",
						"english": "There's no escape now. The system's guardian is coming.",
						"japanese": "もう逃げられない。システムの番人が来ている。",
						"chinese": "现在无法逃避了。系统的守卫者正在到来。",
						"french": "On ne peut plus fuir maintenant. Le gardien du système arrive.",
						"spanish": "Ya no hay escape. El guardián del sistema está llegando.",
						"vietnamese": "Không thể tránh được nữa rồi. Người canh gác của hệ thống đang đến.",
						"thai": "ตอนนี้หนีไม่พ้นแล้ว ผู้พิทักษ์ของระบบกำลังมา",
						"hindi": "अब बचा नहीं जा सकता। सिस्टम का रखवाला आ रहा है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "파수꾼? 누가?",
						"english": "A Watcher? Who?",
						"japanese": "監視者？誰が？",
						"chinese": "守望者？谁？",
						"french": "Un Gardien ? Qui ?",
						"spanish": "¿Un Vigilante? ¿Quién?",
						"vietnamese": "Kẻ giám sát? Ai?",
						"thai": "ผู้เฝ้ายาม? ใคร?",
						"hindi": "एक पहरेदार? कौन?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "너희를 '버그'라고 부를 거야. 삭제 대상.",
						"english": "I'll call you 'bugs.' Targeted for deletion.",
						"japanese": "お前たちを「バグ」と呼ぶ。削除対象だ。",
						"chinese": "我会称你们为“错误”。删除目标。",
						"french": "Je vous appellerai des 'bugs'. Cibles de suppression.",
						"spanish": "Os llamaré 'bugs'. Destinados a ser eliminados.",
						"vietnamese": "Ta sẽ gọi các ngươi là 'lỗi'. Đối tượng bị xóa.",
						"thai": "ข้าจะเรียกพวกเจ้าว่า 'บั๊ก' เป้าหมายการลบ",
						"hindi": "मैं तुम्हें 'बग्स' कहूँगा। हटाने के लिए लक्षित।"
					},
					"speaker": "echo"
				},
				{
					"content": {
						"korean": "삭제… 설마.",
						"english": "Deletion... No way.",
						"japanese": "削除… まさか。",
						"chinese": "删除… 不会吧。",
						"french": "Suppression… Impossible.",
						"spanish": "Eliminación... No puede ser.",
						"vietnamese": "Xóa... Không đời nào.",
						"thai": "ลบ... ไม่จริงน่า",
						"hindi": "हटाना... नहीं, ऐसा नहीं हो सकता।"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "시스템의 냉혹한 경고가 탐험대를 덮쳤다.",
						"english": "The System's cruel warning engulfed the expedition.",
						"japanese": "システムの冷酷な警告が探検隊を襲った。",
						"chinese": "系统无情的警告吞噬了探险队。",
						"french": "L'impitoyable avertissement du Système submergea l'expédition.",
						"spanish": "La cruel advertencia del Sistema envolvió a la expedición.",
						"vietnamese": "Lời cảnh báo tàn nhẫn của Hệ thống ập xuống đội thám hiểm.",
						"thai": "คำเตือนอันโหดร้ายของระบบถาโถมใส่คณะสำรวจ",
						"hindi": "सिस्टम की निर्मम चेतावनी ने अभियान दल को निगल लिया।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "무의미한 저항… 시스템은 오류를 허용하지 않는다.",
						"english": "Meaningless resistance... The System tolerates no errors.",
						"japanese": "無意味な抵抗… システムはエラーを許さない。",
						"chinese": "毫无意义的抵抗… 系统不容许任何错误。",
						"french": "Résistance vaine... Le Système ne tolère aucune erreur.",
						"spanish": "Resistencia inútil... El Sistema no permite errores.",
						"vietnamese": "Sự kháng cự vô nghĩa… Hệ thống không chấp nhận sai sót.",
						"thai": "การต่อต้านที่ไร้ความหมาย... ระบบไม่อนุญาตให้เกิดข้อผิดพลาด",
						"hindi": "अर्थहीन प्रतिरोध… सिस्टम किसी त्रुटि की अनुमति नहीं देता।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아니… 아직… 포기 안 해.",
						"english": "No... not yet... I won't give up.",
						"japanese": "いや… まだだ… 諦めない。",
						"chinese": "不… 还没… 我不会放弃。",
						"french": "Non... pas encore... Je n'abandonnerai pas.",
						"spanish": "No... todavía no... No me rindo.",
						"vietnamese": "Không... chưa đâu... Tôi sẽ không bỏ cuộc.",
						"thai": "ไม่... ยัง... ฉันจะไม่ยอมแพ้",
						"hindi": "नहीं… अभी नहीं… मैं हार नहीं मानूँगा।"
					}
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…버그는… 사라지지 않는다… 시스템은… 영원하다…",
						"english": "...Bugs... do not disappear... The system... is eternal...",
						"japanese": "…バグは…消滅しない…システムは…永遠だ…",
						"chinese": "…错误…不会消失…系统…是永恒的…",
						"french": "...Les bugs... ne disparaissent pas... Le système... est éternel...",
						"spanish": "...Los bugs... no desaparecen... El sistema... es eterno...",
						"vietnamese": "...Lỗi... không biến mất... Hệ thống... là vĩnh cửu...",
						"thai": "...บั๊ก...ไม่หายไป...ระบบ...เป็นนิรันดร์...",
						"hindi": "...बग्स... गायब नहीं होते... सिस्टम... शाश्वत है..."
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "영원하다고? 그럼 아직 끝이 아니야.",
						"english": "Eternal? Then it's not over yet.",
						"japanese": "永遠だと？なら、まだ終わりじゃない。",
						"chinese": "永恒？那还没结束。",
						"french": "Éternel ? Alors ce n'est pas encore la fin.",
						"spanish": "¿Eterno? Entonces aún no ha terminado.",
						"vietnamese": "Vĩnh cửu ư? Vậy thì vẫn chưa kết thúc.",
						"thai": "นิรันดร์เหรอ? ถ้างั้นก็ยังไม่จบ",
						"hindi": "शाश्वत? तो यह अभी खत्म नहीं हुआ है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "시스템의 감시는 계속될 것이다. 하지만 균열은 이미 시작되었다.",
						"english": "The System's watch continues. Yet, cracks have already begun.",
						"japanese": "システムの監視は続くだろう。だが、亀裂は既に始まった。",
						"chinese": "系统的监视将继续。然而，裂痕已现。",
						"french": "La surveillance du Système se poursuivra. Pourtant, des failles sont déjà apparues.",
						"spanish": "La vigilancia del Sistema continuará. Sin embargo, las grietas ya han comenzado.",
						"vietnamese": "Sự giám sát của Hệ thống sẽ tiếp tục. Nhưng vết nứt đã bắt đầu.",
						"thai": "การเฝ้าระวังของระบบจะดำเนินต่อไป แต่รอยร้าวได้เริ่มขึ้นแล้ว",
						"hindi": "सिस्टम की निगरानी जारी रहेगी। हालांकि, दरारें पहले ही शुरू हो चुकी हैं।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 형상이 화면을 찢고 나타났다.",
						"english": "A gigantic figure tore through the screen.",
						"japanese": "巨大な影が画面を破って現れた。",
						"chinese": "一个巨大的身影撕裂屏幕出现。",
						"french": "Une forme gigantesque a déchiré l'écran.",
						"spanish": "Una figura gigantesca apareció, desgarrando la pantalla.",
						"vietnamese": "Một hình dáng khổng lồ xé nát màn hình xuất hiện.",
						"thai": "ร่างมหึมาฉีกทะลุหน้าจอออกมา",
						"hindi": "एक विशाल आकृति ने स्क्रीन को फाड़ दिया।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "시스템에 균열을 내는 버그들…",
						"english": "Bugs creating cracks in the system…",
						"japanese": "システムに亀裂を入れるバグども…",
						"chinese": "在系统中制造裂缝的错误们…",
						"french": "Des bugs créant des failles dans le système…",
						"spanish": "Bugs creando grietas en el sistema…",
						"vietnamese": "Những lỗi đang tạo ra vết nứt trong hệ thống...",
						"thai": "บั๊กที่สร้างรอยร้าวในระบบ...",
						"hindi": "सिस्टम में दरारें पैदा करने वाले बग्स..."
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "허용된 시간은 끝났다. 즉시, 삭제한다.",
						"english": "The allotted time is over. Deleting immediately.",
						"japanese": "許された時間は終わった。即座に削除する。",
						"chinese": "允许的时间已结束。立即删除。",
						"french": "Le temps imparti est écoulé. Suppression immédiate.",
						"spanish": "El tiempo asignado ha terminado. Eliminando inmediatamente.",
						"vietnamese": "Thời gian cho phép đã hết. Xóa ngay lập tức.",
						"thai": "เวลาที่ได้รับอนุญาตหมดลงแล้ว ลบทันที",
						"hindi": "निर्धारित समय समाप्त हो गया है। तुरंत हटा रहा हूँ।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "우리는 버그가 아니야!",
						"english": "We're not bugs!",
						"japanese": "私たちはバグじゃない！",
						"chinese": "我们不是错误！",
						"french": "Nous ne sommes pas des bugs !",
						"spanish": "¡No somos bugs!",
						"vietnamese": "Chúng tôi không phải lỗi!",
						"thai": "เราไม่ใช่บั๊ก!",
						"hindi": "हम बग्स नहीं हैं!"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "데이터 오류는… 제거해야만 한다.",
						"english": "Data errors… must be eliminated.",
						"japanese": "データエラーは… 排除しなければならない。",
						"chinese": "数据错误… 必须被清除。",
						"french": "Les erreurs de données… doivent être éliminées.",
						"spanish": "Los errores de datos… deben ser eliminados.",
						"vietnamese": "Lỗi dữ liệu... phải bị loại bỏ.",
						"thai": "ข้อผิดพลาดของข้อมูล... ต้องถูกกำจัด",
						"hindi": "डेटा त्रुटियों को… समाप्त किया जाना चाहिए।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				}
			]
		}
	]
} as const;
