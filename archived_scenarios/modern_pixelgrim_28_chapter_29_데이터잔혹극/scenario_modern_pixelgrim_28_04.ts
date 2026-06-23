export const scenario_modern_pixelgrim_28_04 = {
	"scenario_id": "modern_pixelgrim_28_04",
	"order": 4,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"max": {
			"id": "mon_6e8c1577-89e2-49f6-a9f3-a6521b9e7f59",
			"name": {
				"korean": "맥스",
				"english": "Max",
				"japanese": "マックス",
				"chinese": "麦克斯",
				"french": "Max",
				"spanish": "Max",
				"vietnamese": "Max",
				"thai": "แม็กซ์",
				"hindi": "मैक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8bd7f351-400b-46f9-828f-aa2542734900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/62971060-c904-4d96-afcd-d11f831b3e00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "시스템의 경고음이 울려 퍼진다. 불안정한 진동이 공간을 채웠다.",
						"english": "The system's alarm blares. Unstable vibrations fill the space.",
						"japanese": "システムの警告音が鳴り響く。不安定な振動が空間を満たした。",
						"chinese": "系统的警报声响起。不稳定的振动充满了空间。",
						"french": "L'alarme du système retentit. Des vibrations instables remplissent l'espace.",
						"spanish": "La alarma del sistema suena. Vibraciones inestables llenan el espacio.",
						"vietnamese": "Chuông báo động của hệ thống vang lên. Những rung động bất ổn tràn ngập không gian.",
						"thai": "สัญญาณเตือนของระบบดังขึ้น การสั่นสะเทือนที่ไม่เสถียรเติมเต็มพื้นที่",
						"hindi": "सिस्टम का अलार्म बजता है। अस्थिर कंपन अंतरिक्ष को भर देते हैं।"
					}
				},
				{
					"action": "enter",
					"spot": [
						3,
						3
					],
					"speaker": "max",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "max",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "이대로는 안 돼! 뭔가 방법이 있을 거야!",
						"english": "This can't continue! There must be a way!",
						"japanese": "このままじゃダメだ！何か方法があるはずだ！",
						"chinese": "这样下去不行！一定有办法的！",
						"french": "Ça ne peut pas continuer comme ça ! Il doit y avoir un moyen !",
						"spanish": "¡Así no podemos seguir! ¡Debe haber una manera!",
						"vietnamese": "Không thể thế này được! Phải có cách nào đó!",
						"thai": "แบบนี้ไม่ได้! ต้องมีทางแน่ๆ!",
						"hindi": "ऐसे नहीं चलेगा! कोई रास्ता जरूर होगा!"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "뭘 하려는 거지?",
						"english": "What are you trying to do?",
						"japanese": "何をしようとしているんだ？",
						"chinese": "你想做什么？",
						"french": "Qu'est-ce que tu essaies de faire ?",
						"spanish": "¿Qué intentas hacer?",
						"vietnamese": "Bạn đang cố làm gì vậy?",
						"thai": "คุณจะทำอะไร?",
						"hindi": "तुम क्या करने की कोशिश कर रहे हो?"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "여기서 나가려면… 시스템을 속여야 해!",
						"english": "To get out of here... I have to trick the system!",
						"japanese": "ここから出るには…システムを欺くしかない！",
						"chinese": "要离开这里…我必须欺骗系统！",
						"french": "Pour sortir d'ici... je dois tromper le système !",
						"spanish": "Para salir de aquí... ¡tengo que engañar al sistema!",
						"vietnamese": "Để thoát khỏi đây… tôi phải lừa dối hệ thống!",
						"thai": "ถ้าจะออกไปจากที่นี่... ต้องหลอกระบบ!",
						"hindi": "यहाँ से निकलने के लिए… मुझे सिस्टम को धोखा देना होगा!"
					},
					"speaker": "max"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "max",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "젠장… 더 심해졌어!",
						"english": "Damn it... it's gotten worse!",
						"japanese": "くそ…もっとひどくなった！",
						"chinese": "该死…更糟糕了！",
						"french": "Bon sang... c'est pire !",
						"spanish": "¡Maldita sea... ha empeorado!",
						"vietnamese": "Chết tiệt… tệ hơn rồi!",
						"thai": "ให้ตายสิ... แย่ลงไปอีกแล้ว!",
						"hindi": "धिक्कार है… यह और भी बुरा हो गया है!"
					},
					"emotion": "angry",
					"speaker": "max"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "무슨 짓을 한 거야?",
						"english": "What have you done?",
						"japanese": "何をしたんだ？",
						"chinese": "你做了什么？",
						"french": "Qu'as-tu fait ?",
						"spanish": "¿Qué has hecho?",
						"vietnamese": "Bạn đã làm gì vậy?",
						"thai": "คุณทำอะไรลงไป?",
						"hindi": "तुमने क्या किया?"
					}
				},
				{
					"speaker": "max",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "탈출을 시도했는데… 시스템이 날 감시하기 시작했어.",
						"english": "I tried to escape... the system started monitoring me.",
						"japanese": "脱出しようとしたら…システムが私を監視し始めた。",
						"chinese": "我试图逃脱……系统开始监视我了。",
						"french": "J'ai essayé de m'échapper... le système a commencé à me surveiller.",
						"spanish": "Intenté escapar... el sistema empezó a vigilarme.",
						"vietnamese": "Tôi đã cố gắng thoát... hệ thống bắt đầu giám sát tôi.",
						"thai": "ฉันพยายามหนี... ระบบเริ่มจับตาดูฉันแล้ว",
						"hindi": "मैंने भागने की कोशिश की... सिस्टम ने मुझ पर नज़र रखना शुरू कर दिया।"
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "시스템의 감시망이 좁혀온다. 모든 연결이 끊어지는 듯하다.",
						"english": "The system's surveillance net is closing in. All connections seem to be breaking.",
						"japanese": "システムの監視網が狭まってくる。全ての接続が切れていくようだ。",
						"chinese": "系统的监视网正在收紧。所有连接似乎都断了。",
						"french": "Le filet de surveillance du système se resserre. Toutes les connexions semblent se rompre.",
						"spanish": "La red de vigilancia del sistema se está cerrando. Todas las conexiones parecen romperse.",
						"vietnamese": "Mạng lưới giám sát của hệ thống đang siết chặt. Mọi kết nối dường như đang đứt.",
						"thai": "เครือข่ายการเฝ้าระวังของระบบกำลังบีบเข้ามา การเชื่อมต่อทั้งหมดดูเหมือนจะขาดหายไป",
						"hindi": "सिस्टम की निगरानी का जाल कस रहा है। सभी कनेक्शन टूटते हुए लग रहे हैं।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "우리까지 위험해졌잖아!",
						"english": "Now we're in danger too!",
						"japanese": "私たちまで危険になったじゃないか！",
						"chinese": "我们也都陷入危险了！",
						"french": "Nous sommes aussi en danger maintenant !",
						"spanish": "¡Ahora nosotros también estamos en peligro!",
						"vietnamese": "Giờ chúng ta cũng gặp nguy hiểm rồi!",
						"thai": "ตอนนี้เราก็ตกอยู่ในอันตรายด้วย!",
						"hindi": "अब हम भी खतरे में आ गए!"
					},
					"speaker": "character_1"
				},
				{
					"type": "speech",
					"content": {
						"korean": "나는… 그저 나가고 싶었을 뿐이야.",
						"english": "I just... wanted to get out.",
						"japanese": "私は…ただ、ここから出たかっただけなんだ。",
						"chinese": "我只是……想出去而已。",
						"french": "Je voulais juste... sortir.",
						"spanish": "Yo solo... quería salir.",
						"vietnamese": "Tôi chỉ... muốn thoát ra thôi.",
						"thai": "ฉันแค่... อยากจะออกไปเท่านั้นเอง",
						"hindi": "मैं बस... बाहर निकलना चाहता था।"
					},
					"emotion": "sad",
					"speaker": "max"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "곳곳에서 의미를 알 수 없는 데이터 조각들이 섬광처럼 깜빡였다.",
						"english": "Fragments of data, unintelligible, flickered like flashes of light everywhere.",
						"japanese": "あちこちで、意味不明なデータのかけらが閃光のように点滅した。",
						"chinese": "四处闪烁着意义不明的数据碎片，如同闪光一般。",
						"french": "Des fragments de données, inintelligibles, clignotaient partout comme des éclairs.",
						"spanish": "Fragmentos de datos, ininteligibles, parpadeaban como destellos de luz por todas partes.",
						"vietnamese": "Những mảnh dữ liệu không thể hiểu nổi, nhấp nháy như tia chớp ở khắp mọi nơi.",
						"thai": "ชิ้นส่วนข้อมูลที่ไม่อาจเข้าใจได้ กะพริบเหมือนแสงแฟลชไปทั่ว",
						"hindi": "हर जगह डेटा के अर्थहीन टुकड़े चमक रहे थे, जैसे बिजली की चमक।"
					},
					"speaker": "narrator"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "max",
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "들려? 과거의 목소리들이… 비명을 지르고 있어.",
						"english": "Do you hear it? The voices of the past... they're screaming.",
						"japanese": "聞こえるか？過去の声が…悲鳴を上げている。",
						"chinese": "你听到了吗？过去的声音……它们在尖叫。",
						"french": "Tu entends ? Les voix du passé... elles hurlent.",
						"spanish": "¿Lo oyes? Las voces del pasado... están gritando.",
						"vietnamese": "Bạn có nghe thấy không? Những giọng nói của quá khứ... chúng đang la hét.",
						"thai": "ได้ยินไหม? เสียงของอดีต... พวกมันกำลังกรีดร้อง",
						"hindi": "क्या तुम्हें सुनाई दे रहा है? अतीत की आवाज़ें... वे चीख रही हैं।"
					},
					"emotion": "sad",
					"speaker": "max"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "뭐가 들린다는 거지?",
						"english": "What do you hear?",
						"japanese": "何が聞こえるんだ？",
						"chinese": "你听到什么了？",
						"french": "Qu'est-ce que tu entends ?",
						"spanish": "¿Qué oyes?",
						"vietnamese": "Bạn nghe thấy gì?",
						"thai": "นายได้ยินอะไร?",
						"hindi": "क्या सुनाई दे रहा है?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "max",
					"type": "speech",
					"content": {
						"korean": "이 시스템은… 우리를 구원한다고 했지만, 사실은 모든 걸 파괴하고 있어!",
						"english": "This system... it promised to save us, but in reality, it's destroying everything!",
						"japanese": "このシステムは…私たちを救済すると言ったが、実際は全てを破壊している！",
						"chinese": "这个系统……它说要拯救我们，但实际上，它正在摧毁一切！",
						"french": "Ce système... il a promis de nous sauver, mais en réalité, il détruit tout !",
						"spanish": "Este sistema... prometió salvarnos, pero en realidad, ¡está destruyendo todo!",
						"vietnamese": "Hệ thống này... nó hứa sẽ cứu chúng ta, nhưng thực ra, nó đang phá hủy mọi thứ!",
						"thai": "ระบบนี้... มันสัญญาว่าจะช่วยเรา แต่จริงๆ แล้วมันกำลังทำลายทุกสิ่ง!",
						"hindi": "यह सिस्टम... इसने हमें बचाने का वादा किया था, लेकिन हकीकत में, यह सब कुछ तबाह कर रहा है!"
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그건 오류야! 시스템은 완벽해! 완벽한 질서를 따른다!",
						"english": "That's an error! The system is perfect! It follows perfect order!",
						"japanese": "それはエラーだ！システムは完璧だ！完璧な秩序に従う！",
						"chinese": "那是个错误！系统是完美的！它遵循完美的秩序！",
						"french": "C'est une erreur ! Le système est parfait ! Il suit un ordre parfait !",
						"spanish": "¡Eso es un error! ¡El sistema es perfecto! ¡Sigue un orden perfecto!",
						"vietnamese": "Đó là một lỗi! Hệ thống hoàn hảo! Nó tuân theo trật tự hoàn hảo!",
						"thai": "นั่นเป็นข้อผิดพลาด! ระบบสมบูรณ์แบบ! มันปฏิบัติตามระเบียบที่สมบูรณ์แบบ!",
						"hindi": "वह एक त्रुटि है! सिस्टम एकदम सही है! यह सही क्रम का पालन करता है!"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "완벽하다고? 웃기지 마! 우리는 그저 데이터 파편일 뿐이라고!",
						"english": "Perfect? Don't make me laugh! We're just data fragments!",
						"japanese": "完璧だと？笑わせるな！私たちはただのデータのかけらに過ぎない！",
						"chinese": "完美？别开玩笑了！我们只是数据碎片而已！",
						"french": "Parfait ? Ne me fais pas rire ! Nous ne sommes que des fragments de données !",
						"spanish": "¿Perfecto? ¡No me hagas reír! ¡Solo somos fragmentos de datos!",
						"vietnamese": "Hoàn hảo ư? Đừng làm tôi cười! Chúng ta chỉ là những mảnh dữ liệu thôi!",
						"thai": "สมบูรณ์แบบงั้นเหรอ? อย่าทำให้ฉันหัวเราะเลย! เราเป็นแค่เศษข้อมูลเท่านั้น!",
						"hindi": "सही? मुझे हंसाओ मत! हम तो सिर्फ डेटा के टुकड़े हैं!"
					},
					"speaker": "max"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "왜곡된 질서가 현실을 잠식한다. 모호한 규칙들이 강제된다.",
						"english": "Distorted order consumes reality. Ambiguous rules are enforced.",
						"japanese": "歪んだ秩序が現実を侵食する。曖昧な規則が強制される。",
						"chinese": "扭曲的秩序侵蚀着现实。模糊的规则被强制执行。",
						"french": "Un ordre distordu consume la réalité. Des règles ambiguës sont imposées.",
						"spanish": "Un orden distorsionado consume la realidad. Reglas ambiguas son impuestas.",
						"vietnamese": "Trật tự méo mó đang ăn mòn thực tại. Những quy tắc mơ hồ bị áp đặt.",
						"thai": "ระเบียบที่บิดเบือนกัดกินความเป็นจริง กฎเกณฑ์ที่คลุมเครือถูกบังคับใช้",
						"hindi": "विकृत व्यवस्था वास्तविकता को खा रही है। अस्पष्ट नियम थोपे जा रहे हैं।"
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "max",
					"spot": [
						3,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "더 이상은… 아무것도 할 수 없어.",
						"english": "I can't do anything more...",
						"japanese": "もうこれ以上は…何もできない。",
						"chinese": "再也…什么都做不了了。",
						"french": "Je ne peux plus... rien faire.",
						"spanish": "Ya no puedo... hacer nada.",
						"vietnamese": "Không thể làm gì hơn nữa…",
						"thai": "ฉันทำอะไรไม่ได้อีกแล้ว…",
						"hindi": "मैं अब और कुछ नहीं कर सकता…"
					},
					"speaker": "max"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "포기하지 마!",
						"english": "Don't give up!",
						"japanese": "諦めるな！",
						"chinese": "别放弃！",
						"french": "N'abandonne pas !",
						"spanish": "¡No te rindas!",
						"vietnamese": "Đừng bỏ cuộc!",
						"thai": "อย่ายอมแพ้!",
						"hindi": "हार मत मानो!"
					}
				},
				{
					"speaker": "max",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "시스템이 우리를 가지고 놀고 있어! 탈출은 불가능해!",
						"english": "The system is toying with us! Escape is impossible!",
						"japanese": "システムが私たちを弄んでいる！脱出は不可能だ！",
						"chinese": "系统在玩弄我们！不可能逃脱！",
						"french": "Le système se joue de nous ! S'échapper est impossible !",
						"spanish": "¡El sistema nos está manipulando! ¡Escapar es imposible!",
						"vietnamese": "Hệ thống đang đùa giỡn với chúng ta! Không thể thoát khỏi đây!",
						"thai": "ระบบกำลังเล่นตลกกับเรา! การหลบหนีเป็นไปไม่ได้!",
						"hindi": "सिस्टम हमें खिलौना बना रहा है! बच निकलना नामुमकिन है!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "대체 누가 이런 짓을 벌인 거지?",
						"english": "Who on earth did this?",
						"japanese": "一体誰がこんなことを？",
						"chinese": "到底是谁做了这种事？",
						"french": "Mais qui a fait ça ?",
						"spanish": "¿Quién demonios hizo esto?",
						"vietnamese": "Rốt cuộc ai đã làm chuyện này?",
						"thai": "ใครเป็นคนทำเรื่องแบบนี้กันแน่?",
						"hindi": "आख़िर किसने किया ये सब?"
					},
					"emotion": "angry",
					"speaker": "character_2"
				},
				{
					"speaker": "max",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…그는… '질서'라고 불렀어. 모든 것을 통제하는.",
						"english": "...He called it... 'Order'. The one that controls everything.",
						"japanese": "…彼は…『秩序』と呼んだ。全てを統制するものを。",
						"chinese": "……他称之为……“秩序”。掌控一切的。",
						"french": "...Il a appelé ça... l'« Ordre ». Celui qui contrôle tout.",
						"spanish": "...Él lo llamó... \"Orden\". El que controla todo.",
						"vietnamese": "…Hắn… gọi đó là 'Trật tự'. Thứ kiểm soát mọi thứ.",
						"thai": "…เขาเรียกมันว่า… 'ระเบียบ' ผู้ควบคุมทุกสิ่ง",
						"hindi": "…उसने इसे… 'व्यवस्था' कहा। जो सब कुछ नियंत्रित करती है।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "카운트다운의 숫자가 빠르게 줄어든다. 되돌릴 수 없는 파멸이 임박했다.",
						"english": "The countdown numbers rapidly decrease. Irreversible doom is imminent.",
						"japanese": "カウントダウンの数字が急速に減る。取り返しのつかない破滅が迫っている。",
						"chinese": "倒计时数字快速减少。不可逆转的毁灭迫在眉睫。",
						"french": "Les chiffres du compte à rebours diminuent rapidement. Une destruction irréversible est imminente.",
						"spanish": "Los números de la cuenta regresiva disminuyen rápidamente. Una perdición irreversible es inminente.",
						"vietnamese": "Số đếm ngược giảm nhanh chóng. Sự hủy diệt không thể đảo ngược đã cận kề.",
						"thai": "ตัวเลขการนับถอยหลังลดลงอย่างรวดเร็ว หายนะที่ไม่อาจย้อนคืนใกล้เข้ามาแล้ว",
						"hindi": "उलटी गिनती के अंक तेज़ी से घट रहे हैं। अपरिवर्तनीय विनाश आसन्न है।"
					},
					"speaker": "narrator"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "시스템의 왜곡된 힘이 탐험대를 집어삼켰다. 모든 것이 암전된다.",
						"english": "The system's distorted power has engulfed the expedition team. Everything goes dark.",
						"japanese": "システムの歪んだ力が探検隊を飲み込んだ。すべてが暗転する。",
						"chinese": "系统的扭曲力量吞噬了探险队。一切都陷入黑暗。",
						"french": "La puissance distordue du système a englouti l'équipe d'expédition. Tout devient noir.",
						"spanish": "El poder distorsionado del sistema ha engullido al equipo de expedición. Todo se oscurece.",
						"vietnamese": "Sức mạnh méo mó của hệ thống đã nuốt chửng đội thám hiểm. Mọi thứ chìm vào bóng tối.",
						"thai": "พลังที่บิดเบี้ยวของระบบได้กลืนกินทีมสำรวจ ทุกสิ่งดับมืดลง",
						"hindi": "सिस्टम की विकृत शक्ति ने अभियान दल को निगल लिया। सब कुछ अंधेरा हो जाता है।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "하찮은 저항… 질서는 거스를 수 없다.",
						"english": "Insignificant resistance... Order cannot be defied.",
						"japanese": "取るに足らない抵抗…秩序に逆らうことはできない。",
						"chinese": "微不足道的抵抗…秩序不可违抗。",
						"french": "Résistance insignifiante... L'ordre ne peut être défié.",
						"spanish": "Resistencia insignificante... El orden no puede ser desafiado.",
						"vietnamese": "Sự kháng cự tầm thường… Trật tự không thể bị chống đối.",
						"thai": "การต่อต้านที่ไร้ค่า... ระเบียบไม่อาจถูกฝ่าฝืนได้",
						"hindi": "तुच्छ प्रतिरोध… व्यवस्था का उल्लंघन नहीं किया जा सकता।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "아직… 끝나지 않았어!",
						"english": "It's not over yet!",
						"japanese": "まだ…終わってない！",
						"chinese": "还没…结束！",
						"french": "Ce n'est pas encore fini !",
						"spanish": "¡Aún no termina!",
						"vietnamese": "Chưa… hết đâu!",
						"thai": "ยัง…ไม่จบ!",
						"hindi": "अभी… खत्म नहीं हुआ!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "다시 와라. 그때도 너희의 절망을 보게 될 테니.",
						"english": "Return. I'll witness your despair once more.",
						"japanese": "また来い。その時も、お前たちの絶望を見るだろう。",
						"chinese": "再来吧。届时，你们的绝望我将再次目睹。",
						"french": "Revenez. J'assisterai à votre désespoir une fois de plus.",
						"spanish": "Regresen. Volveré a ver su desesperación.",
						"vietnamese": "Hãy trở lại. Khi đó, ta sẽ lại chứng kiến sự tuyệt vọng của các ngươi.",
						"thai": "กลับมาอีกครั้งสิ. แล้วข้าจะได้เห็นความสิ้นหวังของพวกเจ้าอีกครั้ง.",
						"hindi": "फिर आओ। मैं तुम्हारी हताशा फिर देखूंगा।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 무너졌다. 시스템의 왜곡된 흐름이 잠시 멈췄다.",
						"english": "The colossal shadow has fallen. The system's distorted flow has paused for a moment.",
						"japanese": "巨大な影が崩れ落ちた。システムの歪んだ流れは一時的に止まった。",
						"chinese": "巨大的阴影崩塌了。系统的扭曲流转暂时停止。",
						"french": "L'ombre colossale est tombée. Le flux distordu du système s'est arrêté un instant.",
						"spanish": "La sombra colosal ha caído. El flujo distorsionado del sistema se ha detenido por un momento.",
						"vietnamese": "Bóng tối khổng lồ đã sụp đổ. Dòng chảy méo mó của hệ thống đã tạm dừng.",
						"thai": "เงาอันมหึมาได้พังทลายลง กระแสที่บิดเบี้ยวของระบบได้หยุดลงชั่วขณะ",
						"hindi": "विशाल छाया ढह गई। सिस्टम का विकृत प्रवाह क्षण भर के लिए रुक गया।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이것은… 시작일 뿐이다… 나의 질서는… 영원히….",
						"english": "This is... merely the beginning... My order... forever...",
						"japanese": "これは…始まりに過ぎない…私の秩序は…永遠に…。",
						"chinese": "这…仅仅是开始…我的秩序…将永存…。",
						"french": "Ce n'est... que le début... Mon ordre... pour toujours...",
						"spanish": "Esto es... solo el principio... Mi orden... para siempre...",
						"vietnamese": "Đây chỉ là… khởi đầu… Trật tự của ta… vĩnh viễn…",
						"thai": "นี่เป็นเพียง... จุดเริ่มต้น... ระเบียบของข้า... ชั่วนิรันดร์...",
						"hindi": "यह... केवल शुरुआत है... मेरा आदेश... हमेशा के लिए..."
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "끝났다… 정말 끝난 건가?",
						"english": "It's over... Is it really over?",
						"japanese": "終わった…本当に終わったのか？",
						"chinese": "结束了…真的结束了吗？",
						"french": "C'est fini... Est-ce vraiment fini ?",
						"spanish": "Terminó... ¿Realmente terminó?",
						"vietnamese": "Xong rồi… Nó thực sự kết thúc rồi sao?",
						"thai": "จบแล้ว... มันจบลงจริงๆ แล้วเหรอ?",
						"hindi": "यह खत्म हो गया… क्या यह सच में खत्म हो गया है?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "파괴된 시스템 속에서, 또 다른 왜곡된 신호가 감지된다.",
						"english": "Within the destroyed system, another distorted signal is detected.",
						"japanese": "破壊されたシステムの中で、別の歪んだ信号が感知される。",
						"chinese": "在被破坏的系统中，检测到了另一个扭曲的信号。",
						"french": "Au sein du système détruit, un autre signal distordu est détecté.",
						"spanish": "Dentro del sistema destruido, se detecta otra señal distorsionada.",
						"vietnamese": "Trong hệ thống bị phá hủy, một tín hiệu méo mó khác được phát hiện.",
						"thai": "ภายในระบบที่ถูกทำลาย สัญญาณบิดเบี้ยวอื่นถูกตรวจพบ",
						"hindi": "नष्ट हुए सिस्टम के भीतर, एक और विकृत संकेत का पता चला है।"
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "끝나지 않은 카운트다운… 그 진실을 향한 발걸음은 계속된다.",
						"english": "The unending countdown... The steps towards that truth continue.",
						"japanese": "終わらないカウントダウン…その真実への一歩は続く。",
						"chinese": "未完的倒计时…迈向真相的脚步仍在继续。",
						"french": "Le compte à rebours inachevé... Les pas vers cette vérité continuent.",
						"spanish": "La cuenta atrás interminable... Los pasos hacia esa verdad continúan.",
						"vietnamese": "Đếm ngược chưa kết thúc… Những bước chân hướng tới sự thật đó vẫn tiếp tục.",
						"thai": "การนับถอยหลังที่ไม่มีวันสิ้นสุด... ก้าวเดินสู่ความจริงนั้นยังคงดำเนินต่อไป",
						"hindi": "अनंत उलटी गिनती… उस सच्चाई की ओर कदम बढ़ते जा रहे हैं।"
					}
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "너희의 발버둥은… 나의 질서를 위한 거름일 뿐.",
						"english": "Your struggles... are merely fertilizer for my Order.",
						"japanese": "お前たちの足掻きは…私の秩序のための肥やしに過ぎない。",
						"chinese": "你们的挣扎……不过是我秩序的养料罢了。",
						"french": "Vos efforts... ne sont que de l'engrais pour mon Ordre.",
						"spanish": "Vuestros esfuerzos... son meramente abono para mi Orden.",
						"vietnamese": "Sự vùng vẫy của các ngươi… chỉ là phân bón cho Trật tự của ta mà thôi.",
						"thai": "การดิ้นรนของพวกเจ้า…เป็นเพียงปุ๋ยสำหรับระเบียบของข้าเท่านั้น",
						"hindi": "तुम्हारी जद्दोजहद… मेरी व्यवस्था के लिए खाद मात्र है।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "감히…!",
						"english": "How dare you...!",
						"japanese": "よくも…！",
						"chinese": "竟敢……！",
						"french": "Comment oses-tu...!",
						"spanish": "¡Cómo te atreves...!",
						"vietnamese": "Dám ư…!",
						"thai": "แกกล้าดียังไง…!",
						"hindi": "तुम्हारी हिम्मत कैसे हुई…!"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이곳은 완벽한 질서로 재편될 것이다. 너희의 '희망' 따위는 허상에 불과해.",
						"english": "This place will be reorganized into a perfect order. Your 'hope' is nothing but an illusion.",
						"japanese": "ここは完璧な秩序へと再編されるだろう。お前たちの『希望』など、虚像に過ぎない。",
						"chinese": "此处将被重塑为完美的秩序。你们的“希望”不过是虚妄。",
						"french": "Ce lieu sera réorganisé en un ordre parfait. Votre « espoir » n'est qu'une illusion.",
						"spanish": "Este lugar será reorganizado en un orden perfecto. Vuestra \"esperanza\" no es más que una ilusión.",
						"vietnamese": "Nơi đây sẽ được tái cơ cấu thành một trật tự hoàn hảo. Cái gọi là 'hy vọng' của các ngươi chỉ là ảo ảnh.",
						"thai": "ที่นี่จะถูกจัดระเบียบใหม่ให้เป็นระเบียบที่สมบูรณ์แบบ 'ความหวัง' ของพวกเจ้าเป็นเพียงภาพลวงตาเท่านั้น",
						"hindi": "यह स्थान एक पूर्ण व्यवस्था में पुनर्गठित किया जाएगा। तुम्हारी 'आशा' मात्र एक भ्रम है।"
					},
					"speaker": "random_boss"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "max"
				},
				{
					"speaker": "max",
					"type": "speech",
					"content": {
						"korean": "헛된 짓이야… 우리는 아무것도 바꿀 수 없어.",
						"english": "It's futile... We can't change anything.",
						"japanese": "無駄だ…我々は何も変えられない。",
						"chinese": "这都是徒劳…我们什么也改变不了。",
						"french": "C'est futile... Nous ne pouvons rien changer.",
						"spanish": "Es inútil... No podemos cambiar nada.",
						"vietnamese": "Vô ích thôi… Chúng ta không thể thay đổi bất cứ điều gì.",
						"thai": "มันไร้ประโยชน์... เราเปลี่ยนอะไรไม่ได้เลย",
						"hindi": "यह व्यर्थ है… हम कुछ भी नहीं बदल सकते।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "닥쳐, 맥스! 우린 포기 안 해!",
						"english": "Shut up, Max! We're not giving up!",
						"japanese": "黙れ、マックス！我々は諦めない！",
						"chinese": "闭嘴，麦克斯！我们不会放弃的！",
						"french": "Tais-toi, Max ! Nous n'abandonnerons pas !",
						"spanish": "¡Cállate, Max! ¡No nos rendiremos!",
						"vietnamese": "Im đi, Max! Chúng ta sẽ không bỏ cuộc!",
						"thai": "หุบปากนะแม็กซ์! เราไม่ยอมแพ้หรอก!",
						"hindi": "चुप रहो, मैक्स! हम हार नहीं मानेंगे!"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그 분노… 아주 좋아. 내 힘이 될 테니.",
						"english": "That rage... very good. It will become my strength.",
						"japanese": "その怒り…とても良い。私の力となるだろう。",
						"chinese": "那份愤怒…很好。它将成为我的力量。",
						"french": "Cette rage... très bien. Elle deviendra ma force.",
						"spanish": "Esa rabia... muy bien. Se convertirá en mi fuerza.",
						"vietnamese": "Cơn thịnh nộ đó… rất tốt. Nó sẽ trở thành sức mạnh của ta.",
						"thai": "ความโกรธนั้น... ดีมาก มันจะเป็นพลังของข้า",
						"hindi": "वह क्रोध… बहुत अच्छा। वह मेरी शक्ति बनेगा।"
					}
				},
				{
					"action": "exit",
					"speaker": "max",
					"type": "direction",
					"direction": "down",
					"duration_ms": 400
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"카운트다운은 멈추지 않는다.",
			"시스템은 붕괴 직전의 혼돈. 모든 것이 왜곡되기 시작했다.",
			"맥스는 필사적으로 탈출구를 찾으려 하지만, 그의 절망은 심연을 불러올 뿐.",
			"희망이 사라진 절망의 연쇄 반응 속에서, 너는 무엇을 선택할 것인가."
		],
		"english": [
			"The countdown continues.",
			"The system is chaos, on the verge of collapse. Everything started to warp.",
			"Max desperately searches for an escape, but his despair only summons the abyss.",
			"In this chain reaction of despair where hope has vanished, what will you choose?"
		],
		"japanese": [
			"カウントダウンは止まらない。",
			"システムは崩壊寸前の混沌。全てが歪み始めた。",
			"マックスは必死に脱出口を探すが、彼の絶望は深淵を招くだけだ。",
			"希望が消えた絶望の連鎖反応の中で、君は何を選択するのか。"
		],
		"chinese": [
			"倒计时不会停止。",
			"系统处于崩溃边缘的混乱之中。一切都开始扭曲。",
			"麦克斯拼命寻找出口，但他的绝望只会招来深渊。",
			"在希望消失的绝望连锁反应中，你将如何选择？"
		],
		"french": [
			"Le compte à rebours ne s'arrête pas.",
			"Le système est un chaos au bord de l'effondrement. Tout a commencé à se déformer.",
			"Max cherche désespérément une échappatoire, mais son désespoir n'attire que l'abîme.",
			"Dans cette réaction en chaîne de désespoir où l'espoir a disparu, que choisiras-tu ?"
		],
		"spanish": [
			"La cuenta regresiva no se detiene.",
			"El sistema es un caos al borde del colapso. Todo comenzó a distorsionarse.",
			"Max busca desesperadamente una salida, pero su desesperación solo invoca el abismo.",
			"En esta reacción en cadena de desesperación donde la esperanza se ha desvanecido, ¿qué elegirás?"
		],
		"vietnamese": [
			"Đồng hồ đếm ngược không ngừng lại.",
			"Hệ thống hỗn loạn, sắp sụp đổ. Mọi thứ bắt đầu méo mó.",
			"Max tuyệt vọng tìm kiếm lối thoát, nhưng sự tuyệt vọng của anh chỉ gọi thêm vực thẳm.",
			"Trong phản ứng dây chuyền của sự tuyệt vọng khi hy vọng đã biến mất, bạn sẽ chọn gì?"
		],
		"thai": [
			"การนับถอยหลังไม่หยุดนิ่ง",
			"ระบบอยู่ในความโกลาหลใกล้จะล่มสลาย ทุกสิ่งเริ่มบิดเบี้ยว",
			"แม็กซ์พยายามหาทางออกอย่างสิ้นหวัง แต่ความสิ้นหวังของเขาเพียงแต่เรียกหาห้วงเหวเท่านั้น",
			"ในปฏิกิริยาลูกโซ่แห่งความสิ้นหวังที่ไร้ซึ่งความหวังนี้ คุณจะเลือกอะไร"
		],
		"hindi": [
			"उलटी गिनती नहीं रुकती।",
			"सिस्टम पतन के कगार पर अराजकता है। सब कुछ विकृत होना शुरू हो गया।",
			"मैक्स हताशा में भागने का रास्ता खोजता है, लेकिन उसकी निराशा केवल खाई को बुलाती है।",
			"निराशा की इस श्रृंखला प्रतिक्रिया में जहाँ आशा गायब हो गई है, तुम क्या चुनोगे?"
		]
	}
} as const;
