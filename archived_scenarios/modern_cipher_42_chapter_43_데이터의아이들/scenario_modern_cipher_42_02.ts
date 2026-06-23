export const scenario_modern_cipher_42_02 = {
	"scenario_id": "modern_cipher_42_02",
	"order": 2,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"kai": {
			"id": "mon_d7f29313-b8fb-49da-9a1a-01df5d13866e",
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
			"도시 네트워크, 해커 카이의 손끝에서 진실이 드러난다.",
			"이상 징후. 시스템 깊숙이 삽입된 알 수 없는 카운트다운.",
			"단순한 오류가 아니다. 도시의 운명을 뒤흔들 시한폭탄.",
			"기억을 잃은 사람들. 혼란 속에서 시간은 흐른다."
		],
		"english": [
			"City network. Truth revealed at hacker Kai's fingertips.",
			"Anomaly detected. Unknown countdown embedded deep within the system.",
			"Not a mere error. A ticking time bomb to shake the city's fate.",
			"People losing memories. Time flows amidst the chaos."
		],
		"japanese": [
			"都市ネットワーク、ハッカー、カイの指先から真実が明かされる。",
			"異常な兆候。システム奥深くに埋め込まれた未知のカウントダウン。",
			"単なるエラーではない。都市の運命を揺るがす時限爆弾だ。",
			"記憶を失った人々。混乱の中で時間は流れる。"
		],
		"chinese": [
			"城市网络，黑客凯的指尖揭示真相。",
			"异常迹象。未知倒计时深埋系统之中。",
			"不仅仅是错误。一枚撼动城市命运的定时炸弹。",
			"失去记忆的人们。混乱中时间流逝。"
		],
		"french": [
			"Réseau urbain. La vérité se révèle au bout des doigts du hacker Kai.",
			"Signe étrange. Un compte à rebours inconnu, inséré au plus profond du système.",
			"Pas une simple erreur. Une bombe à retardement qui ébranlera le destin de la ville.",
			"Des gens perdent la mémoire. Le temps s'écoule au milieu du chaos."
		],
		"spanish": [
			"Red de la ciudad. La verdad se revela en las manos del hacker Kai.",
			"Signo extraño. Una cuenta regresiva desconocida, incrustada en lo profundo del sistema.",
			"No es un simple error. Una bomba de tiempo que sacudirá el destino de la ciudad.",
			"Personas que pierden la memoria. El tiempo fluye en medio del caos."
		],
		"vietnamese": [
			"Mạng lưới thành phố. Sự thật hé lộ từ đầu ngón tay của hacker Kai.",
			"Dấu hiệu bất thường. Một đếm ngược không rõ đã được cấy sâu vào hệ thống.",
			"Không chỉ là lỗi. Một quả bom hẹn giờ sẽ rung chuyển số phận thành phố.",
			"Những người mất trí nhớ. Thời gian trôi đi giữa hỗn loạn."
		],
		"thai": [
			"เครือข่ายเมือง ความจริงเปิดเผยจากปลายนิ้วของแฮกเกอร์ไค",
			"สัญญาณผิดปกติ การนับถอยหลังที่ไม่รู้จักถูกฝังลึกในระบบ",
			"ไม่ใช่แค่ข้อผิดพลาด ระเบิดเวลาที่จะเขย่าชะตากรรมของเมือง",
			"ผู้คนสูญเสียความทรงจำ เวลาไหลไปท่ามกลางความสับสน"
		],
		"hindi": [
			"शहर का नेटवर्क। हैकर काई की उंगलियों पर सच सामने आता है।",
			"असामान्य संकेत। सिस्टम में गहराई तक एक अज्ञात उलटी गिनती।",
			"यह सिर्फ एक त्रुटि नहीं है। शहर के भाग्य को हिलाने वाला एक टाइम बम।",
			"याददाश्त खोते लोग। अराजकता के बीच समय बीतता है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"type": "direction",
					"action": "enter",
					"speaker": "kai"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "찾아냈어. 시스템 깊은 곳에 이상한 게 있어.",
						"english": "Found it. There's something strange deep within the system.",
						"japanese": "見つけた。システム奥深くに奇妙なものがある。",
						"chinese": "找到了。系统深处有异常。",
						"french": "Je l'ai trouvé. Il y a quelque chose d'étrange au plus profond du système.",
						"spanish": "Lo encontré. Hay algo extraño en lo profundo del sistema.",
						"vietnamese": "Tìm thấy rồi. Có gì đó lạ ở sâu bên trong hệ thống.",
						"thai": "เจอแล้ว มีอะไรแปลกๆ อยู่ลึกๆ ในระบบ",
						"hindi": "मिल गया। सिस्टम के अंदर गहराई में कुछ अजीब है।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이상한 거?",
						"english": "Something strange?",
						"japanese": "奇妙なもの？",
						"chinese": "异常的？",
						"french": "Quelque chose d'étrange ?",
						"spanish": "¿Algo extraño?",
						"vietnamese": "Thứ gì lạ?",
						"thai": "แปลกเหรอ?",
						"hindi": "कुछ अजीब?"
					}
				},
				{
					"content": {
						"korean": "카운트다운이야. 알 수 없는 목적지로 향하고 있어.",
						"english": "It's a countdown. Heading towards an unknown destination.",
						"japanese": "カウントダウンだ。未知の目的地に向かっている。",
						"chinese": "是个倒计时。正朝着未知目的地前进。",
						"french": "C'est un compte à rebours. Il se dirige vers une destination inconnue.",
						"spanish": "Es una cuenta regresiva. Se dirige hacia un destino desconocido.",
						"vietnamese": "Đó là một đếm ngược. Đang hướng tới một điểm đến không rõ.",
						"thai": "มันคือการนับถอยหลัง กำลังมุ่งหน้าสู่จุดหมายปลายทางที่ไม่รู้จัก",
						"hindi": "यह एक उलटी गिनती है। एक अज्ञात गंतव्य की ओर बढ़ रहा है।"
					},
					"speaker": "kai",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그게 뭔데.",
						"english": "What is it?",
						"japanese": "それは何だ。",
						"chinese": "那是什么？",
						"french": "Qu'est-ce que c'est ?",
						"spanish": "¿Qué es?",
						"vietnamese": "Nó là gì?",
						"thai": "มันคืออะไร?",
						"hindi": "वह क्या है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "모르겠어. 근데 심상치 않아. 도시 전체에 영향을 줄 거야.",
						"english": "I don't know. But it's serious. It will affect the entire city.",
						"japanese": "分からない。でも尋常じゃない。都市全体に影響するだろう。",
						"chinese": "不知道。但很不寻常。会影响整个城市。",
						"french": "Je ne sais pas. Mais c'est grave. Cela affectera toute la ville.",
						"spanish": "No lo sé. Pero es grave. Afectará a toda la ciudad.",
						"vietnamese": "Không biết. Nhưng nó rất nghiêm trọng. Nó sẽ ảnh hưởng đến toàn bộ thành phố.",
						"thai": "ไม่รู้สิ แต่มันไม่ใช่เรื่องธรรมดา มันจะส่งผลกระทบทั้งเมือง",
						"hindi": "मुझे नहीं पता। पर यह गंभीर है। यह पूरे शहर को प्रभावित करेगा।"
					},
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "kai",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "카운트다운이 진행되고 있어. 멈출 수가 없어.",
						"english": "The countdown is underway. I can't stop it.",
						"japanese": "カウントダウンが進行中だ。止められない。",
						"chinese": "倒计时正在进行。无法阻止。",
						"french": "Le compte à rebours est en cours. Je ne peux pas l'arrêter.",
						"spanish": "La cuenta regresiva está en marcha. No puedo detenerla.",
						"vietnamese": "Đếm ngược đang diễn ra. Không thể dừng lại.",
						"thai": "การนับถอยหลังกำลังดำเนินอยู่ ฉันหยุดมันไม่ได้",
						"hindi": "उलटी गिनती जारी है। मैं इसे रोक नहीं सकता।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "시간이 얼마나 남았는데.",
						"english": "How much time is left?",
						"japanese": "残り時間はどれくらいだ？",
						"chinese": "还剩下多少时间？",
						"french": "Combien de temps reste-t-il ?",
						"spanish": "¿Cuánto tiempo queda?",
						"vietnamese": "Còn bao nhiêu thời gian?",
						"thai": "เหลือเวลาอีกเท่าไหร่?",
						"hindi": "कितना समय बचा है?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "곧 핵심 기능에 영향을 줄 거야. 도시가 잠식될 거라고.",
						"english": "It'll soon affect core functions. The city will be consumed.",
						"japanese": "すぐに主要な機能に影響が出る。都市が侵食されるぞ。",
						"chinese": "它很快会影响核心功能。城市将被吞噬。",
						"french": "Cela affectera bientôt les fonctions principales. La ville sera consumée.",
						"spanish": "Pronto afectará funciones clave. La ciudad será consumida.",
						"vietnamese": "Nó sẽ sớm ảnh hưởng đến các chức năng cốt lõi. Thành phố sẽ bị nuốt chửng.",
						"thai": "อีกไม่นานมันจะส่งผลกระทบต่อฟังก์ชันหลัก เมืองจะถูกกลืนกิน",
						"hindi": "यह जल्द ही मुख्य कार्यों को प्रभावित करेगा। शहर निगल लिया जाएगा।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "더 찾아봐야 해. 원천을.",
						"english": "We need to search more. For the source.",
						"japanese": "もっと探さないと。源泉を。",
						"chinese": "我们得再找找。找源头。",
						"french": "Nous devons chercher davantage. La source.",
						"spanish": "Necesitamos buscar más. La fuente.",
						"vietnamese": "Chúng ta cần tìm thêm. Tìm nguồn gốc.",
						"thai": "เราต้องค้นหาเพิ่มเติม. หาต้นตอ.",
						"hindi": "हमें और खोजना होगा। स्रोत को।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "도시 곳곳의 전광판에 알 수 없는 숫자가 나타났다 사라지기를 반복했다.",
						"english": "Unknown numbers repeatedly appeared and vanished on billboards across the city.",
						"japanese": "都市のあちこちの電光掲示板に、未知の数字が現れては消えるのを繰り返していた。",
						"chinese": "未知数字在城市各处的广告牌上反复出现又消失。",
						"french": "Des chiffres inconnus apparaissaient et disparaissaient à plusieurs reprises sur les panneaux d'affichage de la ville.",
						"spanish": "Números desconocidos aparecían y desaparecían repetidamente en las vallas publicitarias de la ciudad.",
						"vietnamese": "Những con số không xác định liên tục xuất hiện rồi biến mất trên các biển quảng cáo khắp thành phố.",
						"thai": "ตัวเลขที่ไม่รู้จักปรากฏและหายไปซ้ำๆ บนป้ายโฆษณาทั่วเมือง",
						"hindi": "शहर भर के बिलबोर्ड पर अज्ञात संख्याएँ बार-बार दिखाई दे रही थीं और गायब हो रही थीं।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "kai"
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "봐. 카운트다운이 겉으로 드러나기 시작했어.",
						"english": "Look. The countdown has begun to reveal itself.",
						"japanese": "見ろ。カウントダウンが表面化し始めた。",
						"chinese": "看。倒计时已经开始显现了。",
						"french": "Regarde. Le compte à rebours a commencé à se révéler.",
						"spanish": "Mira. La cuenta regresiva ha comenzado a revelarse.",
						"vietnamese": "Nhìn kìa. Đồng hồ đếm ngược đã bắt đầu lộ diện.",
						"thai": "ดูสิ การนับถอยหลังเริ่มปรากฏออกมาแล้ว",
						"hindi": "देखो। उलटी गिनती खुद को प्रकट करना शुरू हो गई है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "사람들이 기억을 잃고 있어. 혼란이 커지고 있어.",
						"english": "People are losing their memories. The confusion is growing.",
						"japanese": "人々が記憶を失っている。混乱が拡大している。",
						"chinese": "人们正在失去记忆。混乱正在加剧。",
						"french": "Les gens perdent la mémoire. La confusion grandit.",
						"spanish": "La gente está perdiendo la memoria. La confusión está creciendo.",
						"vietnamese": "Mọi người đang mất trí nhớ. Sự hỗn loạn đang gia tăng.",
						"thai": "ผู้คนกำลังสูญเสียความทรงจำ ความสับสนกำลังเพิ่มขึ้น",
						"hindi": "लोग अपनी याददाश्त खो रहे हैं। भ्रम बढ़ रहा है।"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "이게 전부 연결된 거야. 시스템이 사람들을 지우고 있어.",
						"english": "It's all connected. The system is erasing people.",
						"japanese": "これはすべて繋がっている。システムが人々を消去している。",
						"chinese": "这一切都连接着。系统正在抹去人们。",
						"french": "Tout est lié. Le système efface les gens.",
						"spanish": "Todo está conectado. El sistema está borrando a la gente.",
						"vietnamese": "Tất cả đều liên quan. Hệ thống đang xóa sổ mọi người.",
						"thai": "ทั้งหมดนี้เชื่อมโยงกัน ระบบกำลังลบผู้คน",
						"hindi": "यह सब जुड़ा हुआ है। सिस्टम लोगों को मिटा रहा है।"
					},
					"speaker": "kai",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "말도 안 돼… 막아야 해.",
						"english": "Unbelievable… We have to stop it.",
						"japanese": "信じられない…止めないと。",
						"chinese": "简直胡说…我们必须阻止它。",
						"french": "Incroyable… Il faut l'arrêter.",
						"spanish": "Increíble… Debemos detenerlo.",
						"vietnamese": "Không thể tin được… Chúng ta phải ngăn chặn nó.",
						"thai": "เหลือเชื่อ… เราต้องหยุดมัน",
						"hindi": "अविश्वसनीय… हमें इसे रोकना होगा।"
					},
					"emotion": "angry",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "kai",
					"type": "direction"
				},
				{
					"content": {
						"korean": "카운트다운이 얼마 남지 않았어. 도시는 혼란 그 자체야.",
						"english": "The countdown is almost over. The city is pure chaos.",
						"japanese": "カウントダウンはもうすぐ終わりだ。都市は混沌そのものだ。",
						"chinese": "倒计时所剩无几。城市一片混乱。",
						"french": "Le compte à rebours est presque terminé. La ville est le chaos pur.",
						"spanish": "La cuenta regresiva está casi terminada. La ciudad es puro caos.",
						"vietnamese": "Đồng hồ đếm ngược sắp kết thúc. Thành phố là sự hỗn loạn tột cùng.",
						"thai": "การนับถอยหลังใกล้จะสิ้นสุดลงแล้ว เมืองคือความโกลาหลโดยแท้",
						"hindi": "उलटी गिनती लगभग खत्म हो गई है। शहर पूरी तरह से अराजक है।"
					},
					"speaker": "kai",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "막아야 해. 어서.",
						"english": "We have to stop it. Quickly.",
						"japanese": "止めないと。早く。",
						"chinese": "我们必须阻止它。快。",
						"french": "Il faut l'arrêter. Vite.",
						"spanish": "Debemos detenerlo. Rápido.",
						"vietnamese": "Chúng ta phải ngăn chặn nó. Nhanh lên.",
						"thai": "เราต้องหยุดมัน. เร็วเข้า.",
						"hindi": "हमें इसे रोकना होगा। जल्दी।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "추적 끝에 이리로 왔어. 카운트다운의 근원지.",
						"english": "Our pursuit led us here. The source of the countdown.",
						"japanese": "追跡の末、ここに辿り着いた。カウントダウンの根源地だ。",
						"chinese": "一路追查到这里。倒计时的源头。",
						"french": "La poursuite nous a menés ici. La source du compte à rebours.",
						"spanish": "Nuestra persecución nos trajo aquí. El origen de la cuenta regresiva.",
						"vietnamese": "Truy đuổi cuối cùng cũng đưa ta đến đây. Nguồn gốc của đếm ngược.",
						"thai": "การตามล่าพาเรามาที่นี่ ต้นตอของการนับถอยหลัง",
						"hindi": "पीछा करते-करते हम यहाँ आ पहुँचे। उलटी गिनती का स्रोत।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "여기가 어디야.",
						"english": "Where are we?",
						"japanese": "ここはどこだ。",
						"chinese": "这是哪儿？",
						"french": "Où sommes-nous ?",
						"spanish": "¿Dónde estamos?",
						"vietnamese": "Đây là đâu?",
						"thai": "ที่นี่ที่ไหน",
						"hindi": "यह जगह कौन-सी है?"
					}
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "시스템의 그림자. 모두의 기억이 쌓이는 곳.",
						"english": "The system's shadow. Where everyone's memories accumulate.",
						"japanese": "システムの影。皆の記憶が積み重なる場所だ。",
						"chinese": "系统的影子。所有记忆堆积之地。",
						"french": "L'ombre du système. Là où s'accumulent les souvenirs de chacun.",
						"spanish": "La sombra del sistema. Donde se acumulan los recuerdos de todos.",
						"vietnamese": "Bóng tối của hệ thống. Nơi ký ức của mọi người tích tụ.",
						"thai": "เงามืดของระบบ ที่ที่ความทรงจำของทุกคนสะสม",
						"hindi": "सिस्टम की छाया। जहाँ सभी की यादें जमा होती हैं।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…끝장을 내야 해.",
						"english": "...We have to end this.",
						"japanese": "…終わらせなければ。",
						"chinese": "……必须彻底解决。",
						"french": "...Il faut en finir.",
						"spanish": "...Tenemos que acabar con esto.",
						"vietnamese": "...Phải kết thúc chuyện này.",
						"thai": "…ต้องจบมันให้ได้",
						"hindi": "...हमें इसे खत्म करना होगा।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "데이터의 그림자가 모든 것을 집어삼켰다.",
						"english": "The shadow of data consumed everything.",
						"japanese": "「データの影が全てを飲み込んだ。」",
						"chinese": "数据之影吞噬了一切。",
						"french": "L'ombre des données a tout englouti.",
						"spanish": "La sombra de los datos lo consumió todo.",
						"vietnamese": "Bóng tối của dữ liệu đã nuốt chửng mọi thứ.",
						"thai": "เงาของข้อมูลกลืนกินทุกสิ่ง",
						"hindi": "डेटा की परछाई ने सब कुछ निगल लिया।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "너희의 기억도, 의지도 모두 사라질 것이다.",
						"english": "Your memories, your will, all will vanish.",
						"japanese": "「お前たちの記憶も、意思も、全てが消え去るだろう。」",
						"chinese": "你们的记忆和意志都将消失。",
						"french": "Vos souvenirs, votre volonté, tout disparaîtra.",
						"spanish": "Vuestras memorias, vuestra voluntad, todo desaparecerá.",
						"vietnamese": "Ký ức, ý chí của các ngươi, tất cả sẽ biến mất.",
						"thai": "ความทรงจำและเจตจำนงของพวกเจ้าจะหายไปทั้งหมด",
						"hindi": "तुम्हारी यादें, तुम्हारी इच्छाशक्ति, सब कुछ गायब हो जाएगा।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…아직, 안 끝났어.",
						"english": "...It's not over yet.",
						"japanese": "「…まだ、終わってない。」",
						"chinese": "…还没，结束。",
						"french": "...Ce n'est pas encore fini.",
						"spanish": "...Aún no ha terminado.",
						"vietnamese": "...Chưa, kết thúc đâu.",
						"thai": "...ยัง, ไม่จบหรอกนะ",
						"hindi": "...अभी, खत्म नहीं हुआ है।"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "데이터의 그림자가 실체를 드러냈다.",
						"english": "The shadow of data has taken form.",
						"japanese": "データの影が実体を現した。",
						"chinese": "数据的影子显露了实体。",
						"french": "L'ombre des données a pris forme.",
						"spanish": "La sombra de los datos ha tomado forma.",
						"vietnamese": "Bóng tối của dữ liệu đã hiện hữu.",
						"thai": "เงาของข้อมูลได้เผยตัวตนแล้ว",
						"hindi": "डेटा की छाया ने रूप ले लिया है।"
					}
				},
				{
					"content": {
						"korean": "기억은 사라지고, 혼란만 남을 것이다.",
						"english": "Memories will vanish, leaving only chaos.",
						"japanese": "記憶は消え去り、残るのは混乱だけだ。",
						"chinese": "记忆将消失，只留下混乱。",
						"french": "Les souvenirs disparaîtront, ne laissant que le chaos.",
						"spanish": "Los recuerdos se desvanecerán, dejando solo el caos.",
						"vietnamese": "Ký ức sẽ biến mất, chỉ còn lại sự hỗn loạn.",
						"thai": "ความทรงจำจะหายไป เหลือไว้เพียงความสับสนวุ่นวาย",
						"hindi": "यादें मिट जाएँगी, केवल अराजकता बचेगी।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "닥쳐!",
						"english": "Shut up!",
						"japanese": "黙れ！",
						"chinese": "闭嘴！",
						"french": "Tais-toi !",
						"spanish": "¡Cállate!",
						"vietnamese": "Im đi!",
						"thai": "หุบปาก!",
						"hindi": "चुप रहो!"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "kai",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						4
					]
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "조심해. 저건 단순한 데이터 덩어리가 아니야.",
						"english": "Be careful. That's no mere data mass.",
						"japanese": "気をつけろ。あれはただのデータ塊じゃない。",
						"chinese": "小心。那不只是简单的数据块。",
						"french": "Attention. Ce n'est pas qu'une simple masse de données.",
						"spanish": "Cuidado. Eso no es solo una masa de datos.",
						"vietnamese": "Cẩn thận. Đó không phải chỉ là một khối dữ liệu đơn thuần.",
						"thai": "ระวังนะ นั่นไม่ใช่แค่ก้อนข้อมูลธรรมดา",
						"hindi": "सावधान रहो। वह केवल डेटा का एक समूह नहीं है।"
					},
					"speaker": "kai"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "너희의 존재 자체가 오류다.",
						"english": "Your very existence is an error.",
						"japanese": "お前たちの存在自体がエラーだ。",
						"chinese": "你们的存在本身就是个错误。",
						"french": "Votre existence même est une erreur.",
						"spanish": "Vuestra propia existencia es un error.",
						"vietnamese": "Sự tồn tại của các ngươi chính là một lỗi.",
						"thai": "การมีอยู่ของพวกเจ้าคือข้อผิดพลาด",
						"hindi": "तुम्हारा अस्तित्व ही एक त्रुटि है।"
					},
					"speaker": "random_boss"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 흩어졌다. 그러나….",
						"english": "The colossal shadow dispersed. But...",
						"japanese": "巨大な影は霧散した。しかし…。",
						"chinese": "巨大的影子消散了。但是……",
						"french": "L'ombre colossale s'est dispersée. Mais...",
						"spanish": "La sombra colosal se dispersó. Pero...",
						"vietnamese": "Bóng tối khổng lồ đã tan biến. Tuy nhiên...",
						"thai": "เงาอันมหึมาสลายไปแล้ว ทว่า…",
						"hindi": "विशाल छाया बिखर गई। लेकिन..."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…이것은 시작에 불과하다. 너희는 아무것도 바꾸지 못했다.",
						"english": "...This is just the beginning. You changed nothing.",
						"japanese": "「…これは始まりに過ぎない。お前たちは何も変えられなかった。」",
						"chinese": "…这只是开始。你们什么也没改变。",
						"french": "...Ce n'est que le début. Vous n'avez rien changé.",
						"spanish": "...Esto es solo el principio. No cambiasteis nada.",
						"vietnamese": "...Đây chỉ là khởi đầu. Các ngươi chẳng thay đổi được gì.",
						"thai": "...นี่เป็นแค่จุดเริ่มต้นเท่านั้น พวกเจ้าไม่ได้เปลี่ยนแปลงอะไรเลย",
						"hindi": "...यह तो बस शुरुआत है। तुम कुछ भी नहीं बदल पाए।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…뭐라고?",
						"english": "...What?",
						"japanese": "「…何だって？」",
						"chinese": "…什么？",
						"french": "...Quoi ?",
						"spanish": "...¿Qué?",
						"vietnamese": "...Cái gì?",
						"thai": "...อะไรนะ?",
						"hindi": "...क्या?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "도시의 심장부에서 또 다른 카운트다운이 시작되고 있었다.",
						"english": "Another countdown had begun in the city's heart.",
						"japanese": "「都市の心臓部で、別のカウントダウンが始まっていた。」",
						"chinese": "在城市的中心，另一场倒计时已经开始。",
						"french": "Un autre compte à rebours avait commencé au cœur de la ville.",
						"spanish": "Otra cuenta atrás había comenzado en el corazón de la ciudad.",
						"vietnamese": "Một đợt đếm ngược khác đã bắt đầu tại trung tâm thành phố.",
						"thai": "การนับถอยหลังอีกครั้งได้เริ่มต้นขึ้นแล้วใจกลางเมือง",
						"hindi": "शहर के दिल में एक और उलटी गिनती शुरू हो चुकी थी।"
					}
				}
			]
		}
	]
} as const;
