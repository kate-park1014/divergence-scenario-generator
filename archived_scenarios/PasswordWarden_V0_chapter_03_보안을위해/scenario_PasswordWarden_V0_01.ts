export const scenario_PasswordWarden_V0_01 = {
	"scenario_id": "PasswordWarden_V0_01",
	"order": 1,
	"act": "intro",
	"theme": "modern",
	"actors": {
		"dan": {
			"id": "mon_c19cd322-c98f-4619-a03f-f756ac8c4b36",
			"name": {
				"korean": "댄",
				"english": "Dan",
				"japanese": "ダン",
				"chinese": "丹",
				"french": "Dan",
				"spanish": "Dan",
				"vietnamese": "Dan",
				"thai": "แดน",
				"hindi": "डैन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/3dcb42c7-9b42-46cd-a663-c577becbb500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/c6008e6f-833a-4200-b913-87b8aed8ce00/public"
		},
		"jett": {
			"name": {
				"korean": "제트",
				"english": "Jett",
				"japanese": "ジェット",
				"chinese": "杰特",
				"french": "Jett",
				"spanish": "Jett",
				"vietnamese": "Jett",
				"thai": "เจ็ตต์",
				"hindi": "जेट"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/02a8321f-49c9-45d8-c220-28553a15db00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/6b917950-a990-478e-3874-228e44853800/public"
		},
		"nyxaria": {
			"name": {
				"korean": "닉사리아",
				"english": "Nyxaria",
				"japanese": "ニクサリア",
				"chinese": "尼克萨莉亚",
				"french": "Nyxaria",
				"spanish": "Nixaria",
				"vietnamese": "Nyxaria",
				"thai": "นิกซาเรีย",
				"hindi": "निक्सारिया"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/4f5d3331-24f0-4a5d-9150-06e65c767300/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/bb20e308-3a0a-4436-9ded-984b387dc100/public"
		},
		"aria": {
			"name": {
				"korean": "아리아",
				"english": "Aria",
				"japanese": "アリア",
				"chinese": "艾莉亚",
				"french": "Aria",
				"spanish": "Aria",
				"vietnamese": "Aria",
				"thai": "อาเรีย",
				"hindi": "आरिया"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/1f83cf93-8561-479d-5c2a-73353c055200/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9fdcd46a-c409-401c-a9ab-ae8878a8b400/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"세계는 시스템이었다. 모든 것은 코드와 규칙으로 묶여 있었다.",
			"끊없이 반복되는 '로그인' 창. 끝없는 사무실.",
			"친절한 안내자. 완벽한 절차.",
			"그러나 어딘가 삐걱이는 기분. 여기가 대체 어디인가."
		],
		"english": [
			"The world was a system. Everything was bound by code and rules.",
			"An endlessly repeating 'Login' screen. An endless office.",
			"A kind guide. A perfect procedure.",
			"But something felt off. Where exactly am I?"
		],
		"japanese": [
			"世界はシステムだった。すべてはコードと規則に縛られていた。",
			"際限なく繰り返される「ログイン」画面。終わりのないオフィス。",
			"親切な案内役。完璧な手続き。",
			"しかし、どこか軋むような感覚。ここは一体どこなのだ？"
		],
		"chinese": [
			"世界是一个系统。一切都被代码和规则束缚着。",
			"无休止重复的“登录”窗口。无尽的办公室。",
			"友好的引导者。完美的程序。",
			"但总觉得哪里不对劲。这里到底是哪里？"
		],
		"french": [
			"Le monde était un système. Tout était lié par le code et les règles.",
			"Une fenêtre de 'Connexion' qui se répète sans cesse. Un bureau sans fin.",
			"Un guide aimable. Une procédure parfaite.",
			"Mais quelque chose clochait. Où suis-je exactement ?"
		],
		"spanish": [
			"El mundo era un sistema. Todo estaba atado por códigos y reglas.",
			"Una ventana de 'Iniciar sesión' que se repite sin cesar. Una oficina interminable.",
			"Un guía amable. Un procedimiento perfecto.",
			"Pero algo no cuadraba. ¿Dónde estoy exactamente?"
		],
		"vietnamese": [
			"Thế giới là một hệ thống. Mọi thứ đều bị ràng buộc bởi mã và quy tắc.",
			"Màn hình 'Đăng nhập' lặp đi lặp lại không ngừng. Một văn phòng vô tận.",
			"Một người hướng dẫn tử tế. Một thủ tục hoàn hảo.",
			"Nhưng cảm giác như có gì đó không ổn. Rốt cuộc đây là đâu?"
		],
		"thai": [
			"โลกคือระบบ ทุกสิ่งถูกผูกมัดด้วยรหัสและกฎ",
			"หน้าจอ 'ล็อกอิน' ที่ย้ำซ้ำไม่รู้จบ. ออฟฟิศที่ไร้ที่สิ้นสุด.",
			"ผู้นำทางที่เป็นมิตร. ขั้นตอนที่สมบูรณ์แบบ.",
			"แต่รู้สึกเหมือนมีอะไรผิดปกติ. ที่นี่มันที่ไหนกันแน่?"
		],
		"hindi": [
			"दुनिया एक व्यवस्था थी। सब कुछ कोड और नियमों से बंधा हुआ था。",
			"लगातार दोहराई जाने वाली 'लॉगिन' स्क्रीन। अंतहीन कार्यालय।",
			"एक दयालु मार्गदर्शक। एक सही प्रक्रिया।",
			"लेकिन कुछ अजीब सा लग रहा था। यह जगह आखिर कहाँ है?"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "모든 화면은 멈춰 있었다. 로그인. 로그인. 로그인.",
						"english": "All screens were frozen. Login. Login. Login.",
						"japanese": "すべての画面は停止していた。ログイン。ログイン。ログイン。",
						"chinese": "所有屏幕都停住了。登录。登录。登录。",
						"french": "Tous les écrans étaient figés. Connexion. Connexion. Connexion.",
						"spanish": "Todas las pantallas estaban congeladas. Iniciar sesión. Iniciar sesión. Iniciar sesión.",
						"vietnamese": "Mọi màn hình đều đứng yên. Đăng nhập. Đăng nhập. Đăng nhập.",
						"thai": "ทุกหน้าจอค้างอยู่. ล็อกอิน. ล็อกอิน. ล็อกอิน.",
						"hindi": "सभी स्क्रीन ठप थीं। लॉगिन। लॉगिन। लॉगिन।"
					}
				},
				{
					"content": {
						"korean": "여긴 대체… 뭐야?",
						"english": "What… is this place?",
						"japanese": "ここは一体… 何だ？",
						"chinese": "这里到底… 是什么？",
						"french": "Qu'est-ce que… cet endroit ?",
						"spanish": "¿Qué… es este lugar?",
						"vietnamese": "Chỗ này… là gì vậy?",
						"thai": "ที่นี่มัน… อะไรกัน?",
						"hindi": "यह जगह आखिर… क्या है?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "dan",
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "어서 오세요, 고객님. 보안을 위해 간단한 확인만 할게요.",
						"english": "Welcome, customer. Just a quick verification for security.",
						"japanese": "ようこそ、お客様。セキュリティのため、簡単な確認だけさせていただきます。",
						"chinese": "欢迎您，客户。为了安全，我们只进行简单的确认。",
						"french": "Bienvenue, client. Juste une vérification rapide pour la sécurité.",
						"spanish": "Bienvenido, cliente. Solo una verificación rápida por seguridad.",
						"vietnamese": "Chào mừng quý khách. Để đảm bảo an ninh, chúng tôi chỉ cần một xác nhận đơn giản.",
						"thai": "ยินดีต้อนรับครับ/ค่ะ, ลูกค้า. เพื่อความปลอดภัย ขอตรวจสอบง่ายๆ เท่านั้นครับ/ค่ะ.",
						"hindi": "आपका स्वागत है, ग्राहक। सुरक्षा के लिए, हम बस एक छोटी सी पुष्टि करेंगे।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "dan"
				},
				{
					"content": {
						"korean": "…네.",
						"english": "…Yes.",
						"japanese": "…はい。",
						"chinese": "…是的。",
						"french": "…Oui.",
						"spanish": "…Sí.",
						"vietnamese": "…Vâng.",
						"thai": "…ครับ/ค่ะ.",
						"hindi": "…हाँ।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "dan",
					"content": {
						"korean": "태블릿에 절차 등록을 마치겠습니다. 다른 분들 응대를 좀 하고 올게요.",
						"english": "I'll finish registering the procedure on the tablet. I'll be back after assisting others.",
						"japanese": "タブレットへの手続き登録を完了させます。他の方々の対応をしてきますね。",
						"chinese": "我将在平板电脑上完成程序注册。我去接待其他人，马上回来。",
						"french": "Je vais terminer l'enregistrement de la procédure sur la tablette. Je reviens après avoir aidé les autres.",
						"spanish": "Terminaré de registrar el procedimiento en la tableta. Volveré después de atender a los demás.",
						"vietnamese": "Tôi sẽ hoàn tất đăng ký thủ tục trên máy tính bảng. Tôi sẽ quay lại sau khi hỗ trợ những người khác.",
						"thai": "ผม/ดิฉันจะลงทะเบียนขั้นตอนบนแท็บเล็ตให้เสร็จ. เดี๋ยวจะไปดูแลท่านอื่นแล้วกลับมานะครับ/คะ.",
						"hindi": "मैं टैबलेट पर प्रक्रिया पंजीकरण पूरा करूँगा। मैं दूसरों को जवाब देने के बाद वापस आऊँगा।"
					}
				},
				{
					"speaker": "dan",
					"action": "exit",
					"type": "direction",
					"duration_ms": 400
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "벽에는 복잡한 비밀번호 정책 안내문이 붙어 있었다. 이해하기 어려운 문장들이었다.",
						"english": "A complex password policy notice was plastered on the wall. The sentences were hard to understand.",
						"japanese": "壁には複雑なパスワードポリシーの案内文が貼ってあった。理解しがたい文章だった。",
						"chinese": "墙上贴着一张复杂的密码政策通知。那些句子很难理解。",
						"french": "Une notice complexe sur la politique de mot de passe était affichée au mur. Les phrases étaient difficiles à comprendre.",
						"spanish": "Un complejo aviso de política de contraseñas estaba pegado en la pared. Las frases eran difíciles de entender.",
						"vietnamese": "Một thông báo chính sách mật khẩu phức tạp được dán trên tường. Những câu chữ thật khó hiểu.",
						"thai": "บนผนังมีประกาศนโยบายรหัสผ่านที่ซับซ้อนติดอยู่. เป็นข้อความที่เข้าใจยาก.",
						"hindi": "दीवार पर एक जटिल पासवर्ड नीति का नोटिस चिपका हुआ था। वाक्य समझना मुश्किल थे।"
					}
				},
				{
					"content": {
						"korean": "어느새, 대기 중이던 사람들의 신청서가 꿈틀거렸다.",
						"english": "Suddenly, the waiting applicants' forms began to writhe.",
						"japanese": "いつの間にか、待機していた人々の申請書が蠢き出した。",
						"chinese": "不知不觉中，等候中的人们的申请书开始扭动起来。",
						"french": "Soudain, les formulaires des postulants en attente se mirent à frémir.",
						"spanish": "De repente, las solicitudes de los que esperaban comenzaron a retorcerse.",
						"vietnamese": "Không biết từ lúc nào, các đơn đăng ký của những người đang chờ bắt đầu cựa quậy.",
						"thai": "ทันใดนั้น ใบสมัครของผู้ที่รอคอยก็เริ่มกระตุก",
						"hindi": "अचानक, इंतज़ार कर रहे लोगों के आवेदन पत्र ऐंठने लगे।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"action": "enter",
					"speaker": "jett",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "jett",
					"content": {
						"korean": "위험해! 서류가… 사람들을 삼키고 있어!",
						"english": "Danger! The papers... they're swallowing people!",
						"japanese": "危ない！書類が…人々を飲み込んでいる！",
						"chinese": "危险！文件…正在吞噬人们！",
						"french": "Danger ! Les papiers... ils sont en train d'engloutir les gens !",
						"spanish": "¡Peligro! ¡Los documentos... están devorando a la gente!",
						"vietnamese": "Nguy hiểm! Giấy tờ... chúng đang nuốt chửng con người!",
						"thai": "อันตราย! เอกสาร... กำลังกลืนกินผู้คน!",
						"hindi": "खतरा! कागज़ात... लोगों को निगल रहे हैं!"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "크아악…! (종이 울음소리)",
						"english": "Aargh...! (Sound of paper weeping)",
						"japanese": "ぐあああっ…！(紙の鳴き声)",
						"chinese": "啊啊啊…！（纸张的哭泣声）",
						"french": "Aaaah...! (Bruit de papier qui pleure)",
						"spanish": "¡Aaarg...! (Sonido de papel que llora)",
						"vietnamese": "Ááá...! (Tiếng giấy khóc)",
						"thai": "อ๊ากกก...! (เสียงกระดาษร่ำไห้)",
						"hindi": "आर्ग...! (कागज़ के रोने की आवाज़)"
					}
				},
				{
					"content": {
						"korean": "이 사무실, 그냥 있는 게 아니야. 빨리 해치워야 해!",
						"english": "This office isn't just 'there'. We need to deal with it fast!",
						"japanese": "このオフィス、ただの場所じゃない。早く片付けないと！",
						"chinese": "这个办公室不简单。我们得赶紧解决！",
						"french": "Ce bureau n'est pas anodin. Il faut s'en débarrasser vite !",
						"spanish": "Esta oficina no es lo que parece. ¡Tenemos que acabar con esto rápido!",
						"vietnamese": "Văn phòng này không đơn giản đâu. Phải xử lý nhanh lên!",
						"thai": "สำนักงานนี้ไม่ธรรมดา ต้องรีบจัดการ!",
						"hindi": "यह दफ़्तर सिर्फ़ ऐसा ही नहीं है। हमें इसे जल्दी निपटना होगा!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "jett"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "nyxaria"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "nyxaria",
					"content": {
						"korean": "…봤어? 저런 건 처음이 아니야.",
						"english": "...Did you see that? It's not the first time.",
						"japanese": "…見た？あんなの、初めてじゃないよ。",
						"chinese": "…看到了吗？这不是第一次了。",
						"french": "...Tu as vu ? Ce n'est pas la première fois.",
						"spanish": "...¿Viste eso? No es la primera vez.",
						"vietnamese": "...Thấy chưa? Chuyện này không phải lần đầu.",
						"thai": "...เห็นไหม? นี่ไม่ใช่ครั้งแรกหรอกนะ",
						"hindi": "...देखा? यह पहली बार नहीं है।"
					}
				},
				{
					"content": {
						"korean": "무슨 소리야?",
						"english": "What do you mean?",
						"japanese": "どういうこと？",
						"chinese": "什么意思？",
						"french": "Qu'est-ce que tu veux dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ý cậu là sao?",
						"thai": "หมายความว่าไง?",
						"hindi": "क्या मतलब?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "옛날에… ID 하나 복구하려고 6개월을 날렸어.",
						"english": "Back then... I wasted six months just to recover one ID.",
						"japanese": "昔…IDを一つ復旧するのに6ヶ月を無駄にした。",
						"chinese": "以前…为了恢复一个ID，我浪费了六个月。",
						"french": "Autrefois... j'ai perdu six mois juste pour récupérer un seul ID.",
						"spanish": "Hace tiempo... perdí seis meses solo para recuperar una ID.",
						"vietnamese": "Ngày xưa... tôi đã mất 6 tháng chỉ để khôi phục một ID.",
						"thai": "เมื่อก่อน... ฉันเสียเวลาไป 6 เดือนเพื่อกู้คืน ID เดียว",
						"hindi": "पहले... मैंने एक आईडी रिकवर करने में छह महीने बर्बाद कर दिए।"
					},
					"speaker": "nyxaria",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "nyxaria",
					"content": {
						"korean": "절차. 절차. 절차… 똑같은 곳에 갇힌 것 같지 않아?",
						"english": "Procedure. Procedure. Procedure... Doesn't it feel like we're trapped in the same loop?",
						"japanese": "手順。手順。手順…同じ場所に閉じ込められているみたいじゃない？",
						"chinese": "程序。程序。程序…难道我们不是被困在同一个地方吗？",
						"french": "Procédure. Procédure. Procédure... On a l'impression d'être coincés au même endroit, non ?",
						"spanish": "Procedimiento. Procedimiento. Procedimiento... ¿No te parece que estamos atrapados en el mismo lugar?",
						"vietnamese": "Thủ tục. Thủ tục. Thủ tục... Không thấy chúng ta như đang bị mắc kẹt ở cùng một nơi sao?",
						"thai": "ขั้นตอน ขั้นตอน ขั้นตอน... ไม่รู้สึกเหมือนเราติดอยู่ในที่เดิมๆ เหรอ?",
						"hindi": "प्रक्रिया। प्रक्रिया। प्रक्रिया... क्या तुम्हें नहीं लगता कि हम एक ही जगह फँस गए हैं?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "nyxaria",
					"content": {
						"korean": "하… 다시는 안 올 줄 알았는데. (자조적인 웃음)",
						"english": "Hah... I thought I'd never come back here. (Self-deprecating laugh)",
						"japanese": "はぁ…もう二度と来ないと思ったのに。(自嘲的な笑い)",
						"chinese": "哈…我以为我再也不会回来了。（自嘲的笑）",
						"french": "Hah... Je pensais que je ne reviendrais plus jamais ici. (Rire auto-dépréciateur)",
						"spanish": "Ja... Pensé que nunca volvería aquí. (Risa autocrítica)",
						"vietnamese": "Ha... Tôi cứ nghĩ mình sẽ không bao giờ quay lại đây nữa. (Cười tự giễu)",
						"thai": "เฮ้อ... ฉันคิดว่าจะไม่กลับมาที่นี่อีกแล้วแท้ๆ (หัวเราะเยาะตัวเอง)",
						"hindi": "हा... मैंने सोचा था कि मैं फिर कभी यहां नहीं आऊँगा। (आत्म-तिरस्कार भरी हंसी)"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "dan",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "오래 기다리셨죠? 이제 마지막 단계예요.",
						"english": "You've waited a long time, haven't you? This is the final step.",
						"japanese": "ずいぶんお待たせしましたね？これで最後の段階です。",
						"chinese": "让您久等了，是吗？现在是最后一步了。",
						"french": "Vous avez longtemps attendu, n'est-ce pas ? C'est la dernière étape.",
						"spanish": "¿Ha esperado mucho, verdad? Esta es la última etapa.",
						"vietnamese": "Bạn đã chờ lâu rồi phải không? Đây là bước cuối cùng rồi.",
						"thai": "รอนานแล้วใช่ไหม? นี่คือขั้นตอนสุดท้ายแล้ว",
						"hindi": "आपने बहुत इंतज़ार किया, है ना? अब यह आखिरी कदम है।"
					},
					"type": "speech",
					"emotion": "happy",
					"speaker": "dan"
				},
				{
					"content": {
						"korean": "오토의 태블릿 화면이 잠깐 비쳤다. '지연 시간: ∞'.",
						"english": "Otto's tablet screen briefly flashed. 'Latency: ∞'.",
						"japanese": "オットーのタブレット画面が一瞬映った。「遅延時間: ∞」。",
						"chinese": "奥托的平板屏幕闪了一下。“延迟：∞”。",
						"french": "L'écran de la tablette d'Otto a brièvement clignoté. « Latence : ∞ ».",
						"spanish": "La pantalla de la tableta de Otto parpadeó brevemente. 'Latencia: ∞'.",
						"vietnamese": "Màn hình máy tính bảng của Otto lóe lên trong chốc lát. 'Độ trễ: ∞'.",
						"thai": "หน้าจอแท็บเล็ตของออตโต้ปรากฏขึ้นชั่วขณะ 'ความหน่วง: ∞'",
						"hindi": "ओटो के टैबलेट की स्क्रीन पर एक पल के लिए रोशनी चमकी। 'विलंबता: ∞'।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "dan",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "비밀번호를 입력해주세요.",
						"english": "Please enter your password.",
						"japanese": "パスワードを入力してください。",
						"chinese": "请输入密码。",
						"french": "Veuillez saisir votre mot de passe.",
						"spanish": "Por favor, introduce tu contraseña.",
						"vietnamese": "Vui lòng nhập mật khẩu.",
						"thai": "กรุณาป้อนรหัสผ่าน",
						"hindi": "कृपया पासवर्ड दर्ज करें।"
					}
				},
				{
					"content": {
						"korean": "…틀렸다고? 방금 만들었는데?",
						"english": "...Incorrect? But I just made it?",
						"japanese": "…間違ってる？今作ったばかりなのに？",
						"chinese": "……错了？我刚刚才设置的？",
						"french": "...Incorrect ? Mais je viens de le créer ?",
						"spanish": "...¿Incorrecto? ¿Pero si lo acabo de crear?",
						"vietnamese": "...Sai ư? Tôi vừa mới tạo mà?",
						"thai": "...ผิดเหรอ? ฉันเพิ่งตั้งเมื่อกี้เองนะ?",
						"hindi": "...गलत है? लेकिन मैंने इसे अभी-अभी तो बनाया है?"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "앗, 그러셨군요. 그럼 새로 만들어 볼까요? 특수문자, 숫자, 대소문자… 조건이 많습니다.",
						"english": "Oh, I see. Shall we create a new one then? Special characters, numbers, uppercase/lowercase... There are many conditions.",
						"japanese": "ああ、そうでしたか。では、新しく作ってみましょうか？特殊文字、数字、大文字小文字…条件が多いです。",
						"chinese": "哦，这样啊。那我们重新创建一个吧？特殊字符、数字、大小写字母……条件很多。",
						"french": "Oh, je vois. Alors, on en crée un nouveau ? Caractères spéciaux, chiffres, majuscules/minuscules... Il y a beaucoup de conditions.",
						"spanish": "Oh, ya veo. ¿Entonces creamos uno nuevo? Caracteres especiales, números, mayúsculas/minúsculas... Hay muchas condiciones.",
						"vietnamese": "Ồ, vậy à. Vậy chúng ta tạo cái mới nhé? Ký tự đặc biệt, số, chữ hoa/thường... Có rất nhiều điều kiện.",
						"thai": "อ๊ะ, อย่างนั้นเองเหรอคะ? งั้นเรามาสร้างใหม่กันไหมคะ? อักขระพิเศษ, ตัวเลข, ตัวพิมพ์ใหญ่/เล็ก... มีเงื่อนไขเยอะแยะเลยค่ะ",
						"hindi": "ओह, ऐसा है। तो, क्या हम एक नया बनाएँ? विशेष वर्ण, संख्याएँ, अपरकेस/लोअरकेस... बहुत सारी शर्तें हैं।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "dan"
				},
				{
					"content": {
						"korean": "휴대폰으로 인증 코드가 안 와.",
						"english": "The verification code isn't coming to my phone.",
						"japanese": "認証コードが携帯に来ない。",
						"chinese": "验证码没发到手机上。",
						"french": "Le code de vérification n'arrive pas sur mon téléphone.",
						"spanish": "El código de verificación no llega a mi teléfono.",
						"vietnamese": "Mã xác minh không đến điện thoại của tôi.",
						"thai": "รหัสยืนยันไม่มาที่โทรศัพท์เลย",
						"hindi": "मेरे फ़ोन पर सत्यापन कोड नहीं आ रहा है।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "휴대폰 화면은 텅 비어 있었다. '전송되었습니다'는 안내음만 반복될 뿐.",
						"english": "The phone screen was empty. Only the 'Sent' notification sound kept repeating.",
						"japanese": "携帯画面は真っ白だった。「送信されました」というアナウンスだけが繰り返される。",
						"chinese": "手机屏幕一片空白。只有“已发送”的提示音重复播放。",
						"french": "L'écran du téléphone était vide. Seul le son de notification « Envoyé » se répétait.",
						"spanish": "La pantalla del teléfono estaba vacía. Solo se repetía el sonido de notificación \"Enviado\".",
						"vietnamese": "Màn hình điện thoại trống rỗng. Chỉ có âm báo 'Đã gửi' cứ lặp đi lặp lại.",
						"thai": "หน้าจอโทรศัพท์ว่างเปล่า มีเพียงเสียงแจ้งเตือนว่า 'ส่งแล้ว' ซ้ำไปซ้ำมา",
						"hindi": "फ़ोन की स्क्रीन खाली थी। केवल 'भेज दिया गया' की सूचना ध्वनि बार-बार बज रही थी।"
					}
				},
				{
					"content": {
						"korean": "음… 잠시 오류인가 봅니다. 조금 더 기다려주시겠어요?",
						"english": "Hmm... It seems to be a temporary error. Could you wait a little longer?",
						"japanese": "うーん…一時的なエラーのようです。もう少しお待ちいただけますか？",
						"chinese": "嗯……好像是暂时性错误。能请您再等一会儿吗？",
						"french": "Hmm... Il semble que ce soit une erreur temporaire. Pourriez-vous patienter un peu plus ?",
						"spanish": "Hmm... Parece ser un error temporal. ¿Podría esperar un poco más?",
						"vietnamese": "Ừm... Có vẻ là lỗi tạm thời. Bạn có thể đợi thêm một chút không?",
						"thai": "อืม... น่าจะเป็นข้อผิดพลาดชั่วคราวนะคะ รบกวนรออีกหน่อยได้ไหมคะ?",
						"hindi": "हूँ... लगता है यह अस्थायी त्रुटि है। क्या आप थोड़ी देर और प्रतीक्षा कर सकते हैं?"
					},
					"speaker": "dan",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "마침내, 시스템의 심장부. 거대한 코어가 눈앞에 있었다.",
						"english": "Finally, the heart of the system. A gigantic core stood before my eyes.",
						"japanese": "ついに、システムの心臓部。巨大なコアが目の前にあった。",
						"chinese": "终于，系统的核心。一个巨大的核心出现在眼前。",
						"french": "Finalement, le cœur du système. Un gigantesque noyau se tenait devant mes yeux.",
						"spanish": "Finalmente, el corazón del sistema. Un núcleo gigantesco estaba ante mis ojos.",
						"vietnamese": "Cuối cùng, trung tâm của hệ thống. Một lõi khổng lồ hiện ra trước mắt.",
						"thai": "ในที่สุดก็มาถึงใจกลางของระบบ แกนหลักขนาดมหึมาอยู่ตรงหน้า",
						"hindi": "अंततः, सिस्टम का हृदय। एक विशाल कोर मेरी आँखों के सामने था।"
					}
				},
				{
					"content": {
						"korean": "왔군. 끝없는 루프에 오신 것을 환영한다.",
						"english": "You've arrived. Welcome to the endless loop.",
						"japanese": "来たな。終わりのないループへようこそ。",
						"chinese": "你来了。欢迎来到无尽的循环。",
						"french": "Te voilà. Bienvenue dans la boucle sans fin.",
						"spanish": "Has llegado. Bienvenido al bucle interminable.",
						"vietnamese": "Ngươi đến rồi. Chào mừng đến với vòng lặp vô tận.",
						"thai": "มาแล้วสินะ ยินดีต้อนรับสู่ห้วงวนอันไม่สิ้นสุด",
						"hindi": "तुम आ गए। अनंत लूप में तुम्हारा स्वागत है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "boss"
				},
				{
					"content": {
						"korean": "네가… 이 모든 걸 꾸몄어?",
						"english": "You... you orchestrated all of this?",
						"japanese": "お前が…この全てを仕組んだのか？",
						"chinese": "你……你策划了这一切？",
						"french": "Toi... tu as orchestré tout ça ?",
						"spanish": "¿Tú... tú orquestaste todo esto?",
						"vietnamese": "Ngươi... ngươi đã sắp đặt tất cả chuyện này sao?",
						"thai": "นาย...เป็นคนบงการเรื่องทั้งหมดนี้เหรอ?",
						"hindi": "तुमने... तुमने यह सब रचा है?"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "꾸미다니. 나는 그저 완벽한 시스템을 구현했을 뿐.",
						"english": "Decorate? I merely implemented a perfect system.",
						"japanese": "飾るだと？私はただ完璧なシステムを実装しただけだ。",
						"chinese": "装饰？我只是实现了一个完美的系统。",
						"french": "Décorer ? J'ai simplement mis en œuvre un système parfait.",
						"spanish": "¿Decorar? Simplemente implementé un sistema perfecto.",
						"vietnamese": "Trang trí ư? Ta chỉ đơn thuần thực hiện một hệ thống hoàn hảo.",
						"thai": "ตกแต่งรึ? ข้าแค่สร้างระบบที่สมบูรณ์แบบเท่านั้นเอง",
						"hindi": "सजाना? मैंने तो बस एक उत्तम प्रणाली लागू की है।"
					},
					"speaker": "boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"spot": [
						1,
						2
					],
					"action": "enter",
					"speaker": "aria",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "aria",
					"content": {
						"korean": "거짓말이야! 여긴 함정이야! 넌 모두를 가두고 있어!",
						"english": "A lie! This is a trap! You're imprisoning everyone!",
						"japanese": "嘘だ！ここは罠だ！お前は皆を閉じ込めている！",
						"chinese": "骗人！这是陷阱！你把所有人都困住了！",
						"french": "Mensonge ! C'est un piège ! Tu emprisonnes tout le monde !",
						"spanish": "¡Mentira! ¡Esto es una trampa! ¡Estás encerrando a todos!",
						"vietnamese": "Dối trá! Đây là một cái bẫy! Ngươi đang nhốt tất cả mọi người!",
						"thai": "โกหก! ที่นี่คือกับดัก! แกกำลังขังทุกคน!",
						"hindi": "झूठ! यह एक जाल है! तुम सबको फँसा रहे हो!"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "boss",
					"content": {
						"korean": "하찮은 저항. 너 역시 영원히 이곳에 갇힐 것이다.",
						"english": "Paltry resistance. You too shall be trapped here forever.",
						"japanese": "取るに足らない抵抗。お前も永遠にここに閉じ込められるだろう。",
						"chinese": "微不足道的抵抗。你也将永远被困在这里。",
						"french": "Résistance futile. Toi aussi, tu seras piégé ici pour toujours.",
						"spanish": "Resistencia insignificante. Tú también quedarás atrapado aquí para siempre.",
						"vietnamese": "Sự kháng cự yếu ớt. Ngươi cũng sẽ bị mắc kẹt ở đây mãi mãi.",
						"thai": "การต่อต้านที่ไร้ค่า เจ้าเองก็จะต้องถูกขังอยู่ที่นี่ตลอดไป",
						"hindi": "तुच्छ प्रतिरोध। तुम भी हमेशा के लिए यहीं फँस जाओगे।"
					}
				},
				{
					"content": {
						"korean": "…아직 끝나지 않았어. 절대로.",
						"english": "...It's not over yet. Never.",
						"japanese": "…まだ終わってない。絶対に。",
						"chinese": "…还没结束。绝不。",
						"french": "...Ce n'est pas encore fini. Jamais.",
						"spanish": "...Aún no ha terminado. Nunca.",
						"vietnamese": "...Chưa kết thúc đâu. Tuyệt đối không.",
						"thai": "...ยังไม่จบหรอก ไม่มีทาง",
						"hindi": "...अभी खत्म नहीं हुआ है। कभी नहीं।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"spot": [
						1,
						2
					],
					"action": "enter",
					"speaker": "aria",
					"duration_ms": 400,
					"type": "direction"
				},
				{
					"content": {
						"korean": "일어나! 포기하지 마!",
						"english": "Get up! Don't give up!",
						"japanese": "起きろ！諦めるな！",
						"chinese": "起来！别放弃！",
						"french": "Lève-toi ! N'abandonne pas !",
						"spanish": "¡Levántate! ¡No te rindas!",
						"vietnamese": "Dậy đi! Đừng bỏ cuộc!",
						"thai": "ลุกขึ้น! อย่าเพิ่งยอมแพ้!",
						"hindi": "उठो! हार मत मानो!"
					},
					"speaker": "aria",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"speaker": "boss",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "크으윽… 파괴는 일시적일 뿐… 시스템은… 영원하다…",
						"english": "Ugh... Destruction is temporary... The system... is eternal...",
						"japanese": "くぅぅ…破壊は一時的なもの…システムは…永遠だ…",
						"chinese": "呃啊…破坏只是暂时的…系统是…永恒的…",
						"french": "Argh... La destruction n'est que temporaire... Le système... est éternel...",
						"spanish": "Ugh... La destrucción es temporal... El sistema... es eterno...",
						"vietnamese": "Khụ khụ... Phá hủy chỉ là tạm thời... Hệ thống... là vĩnh cửu...",
						"thai": "อึก… การทำลายล้างเป็นเพียงชั่วคราว… ระบบ… เป็นนิรันดร์…",
						"hindi": "उफ़... विनाश क्षणिक है... प्रणाली... शाश्वत है..."
					}
				},
				{
					"content": {
						"korean": "영원히… 갇힐 줄 알았나?",
						"english": "Did you think... I'd be trapped forever?",
						"japanese": "永遠に…閉じ込められるとでも思ったか？",
						"chinese": "以为…我会永远被困住吗？",
						"french": "Tu pensais... que je serais piégé pour toujours ?",
						"spanish": "¿Pensaste... que quedaría atrapado para siempre?",
						"vietnamese": "Ngươi nghĩ... ta sẽ bị nhốt mãi mãi sao?",
						"thai": "คิดว่าจะถูกขัง... ตลอดไปงั้นรึ?",
						"hindi": "क्या सोचा था... मैं हमेशा के लिए फँस जाऊँगा?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "happy"
				},
				{
					"type": "direction",
					"duration_ms": 400,
					"action": "enter",
					"speaker": "aria",
					"spot": [
						1,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "happy",
					"speaker": "aria",
					"content": {
						"korean": "해냈어… 드디어…",
						"english": "I did it... Finally...",
						"japanese": "やった…ついに…",
						"chinese": "我做到了…终于…",
						"french": "J'ai réussi... Enfin...",
						"spanish": "Lo logré... Por fin...",
						"vietnamese": "Ta đã làm được... Cuối cùng...",
						"thai": "ทำได้แล้ว... ในที่สุด...",
						"hindi": "मैंने कर दिखाया... आखिरकार..."
					}
				},
				{
					"content": {
						"korean": "시스템 코어는 침묵했다. 그러나 사무실은 여전히 끝없이 이어지는 듯했다.",
						"english": "The system core fell silent. Yet the office still seemed to stretch endlessly.",
						"japanese": "システムコアは沈黙した。しかし、オフィスは依然として無限に続くかのようだった。",
						"chinese": "系统核心沉默了。然而，办公室似乎仍在无休止地延伸。",
						"french": "Le cœur du système s'est tu. Pourtant, le bureau semblait toujours s'étendre à l'infini.",
						"spanish": "El núcleo del sistema enmudeció. Sin embargo, la oficina aún parecía extenderse sin fin.",
						"vietnamese": "Lõi hệ thống im lặng. Nhưng văn phòng vẫn dường như kéo dài vô tận.",
						"thai": "แกนระบบเงียบลง ทว่าห้องทำงานยังคงดูเหมือนจะขยายออกไปอย่างไม่สิ้นสุด",
						"hindi": "प्रणाली का मुख्य केंद्र शांत हो गया। फिर भी, कार्यालय अनंत काल तक फैला हुआ लग रहा था।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "하나의 루프가 끝났다. 다음 루프가 시작될 뿐.",
						"english": "One loop ended. Only for the next to begin.",
						"japanese": "一つのループが終わった。次のループが始まるだけだ。",
						"chinese": "一个循环结束了。下一个循环才刚刚开始。",
						"french": "Une boucle s'est terminée. La suivante ne fait que commencer.",
						"spanish": "Un ciclo terminó. El siguiente solo está por empezar.",
						"vietnamese": "Một vòng lặp đã kết thúc. Vòng lặp tiếp theo sẽ bắt đầu mà thôi.",
						"thai": "หนึ่งลูปจบลง อีกหนึ่งลูปก็แค่เริ่มใหม่",
						"hindi": "एक चक्र समाप्त हुआ। अगला चक्र बस शुरू होगा।"
					}
				}
			]
		}
	]
} as const;
