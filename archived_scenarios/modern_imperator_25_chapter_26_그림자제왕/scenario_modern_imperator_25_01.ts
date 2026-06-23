export const scenario_modern_imperator_25_01 = {
	"scenario_id": "modern_imperator_25_01",
	"order": 1,
	"act": "intro",
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
			"도시의 네온사인 아래, 진실은 그림자 속에 묻혔다.",
			"부패한 심장은 걷잡을 수 없이 퍼져나가고.",
			"그곳에서, 잊었던 분노가 다시 타오르기 시작한다.",
			"모든 것을 뒤엎을, 서막이 열렸다."
		],
		"english": [
			"Under the city's neon glow, truth lies buried in shadow.",
			"A corrupted heart spreads uncontrollably.",
			"There, a forgotten rage begins to burn anew.",
			"The overture to overturn everything has begun."
		],
		"japanese": [
			"街のネオンサインの下、真実は影の中に埋もれた。",
			"腐敗した心臓は、手に負えないほど広がる。",
			"そこで、忘れ去られた怒りが再び燃え上がり始める。",
			"全てを覆す序幕が、開かれた。"
		],
		"chinese": [
			"在城市的霓虹灯下，真相被掩埋在阴影之中。",
			"腐败的心脏肆无忌惮地蔓延开来。",
			"在那里，被遗忘的愤怒再次开始燃烧。",
			"颠覆一切的序幕，已然拉开。"
		],
		"french": [
			"Sous les néons de la ville, la vérité est enfouie dans l'ombre.",
			"Un cœur corrompu se propage sans contrôle.",
			"Là, une rage oubliée commence à brûler à nouveau.",
			"Le prélude à tout renverser a commencé."
		],
		"spanish": [
			"Bajo las luces de neón de la ciudad, la verdad yace sepultada en las sombras.",
			"Un corazón corrompido se extiende sin control.",
			"Allí, una ira olvidada comienza a arder de nuevo.",
			"El preludio para derrocarlo todo ha comenzado."
		],
		"vietnamese": [
			"Dưới ánh đèn neon của thành phố, sự thật bị chôn vùi trong bóng tối.",
			"Một trái tim thối nát lan rộng không thể kiểm soát.",
			"Ở đó, một cơn thịnh nộ bị lãng quên bắt đầu bùng cháy trở lại.",
			"Khúc dạo đầu lật đổ mọi thứ đã bắt đầu."
		],
		"thai": [
			"ใต้แสงนีออนของเมือง ความจริงถูกฝังอยู่ใต้เงา.",
			"หัวใจที่เน่าเฟะแพร่กระจายไปอย่างไร้การควบคุม.",
			"ณ ที่นั้น ความโกรธที่ถูกลืมเลือนเริ่มลุกไหม้อีกครั้ง.",
			"ม่านเปิดของบทโหมโรงเพื่อพลิกผันทุกสิ่งได้เริ่มขึ้นแล้ว."
		],
		"hindi": [
			"शहर की नियॉन रोशनी के नीचे, सच परछाई में दफन है।",
			"एक भ्रष्ट दिल बेकाबू होकर फैल रहा है।",
			"वहाँ, एक भूला हुआ क्रोध फिर से जलने लगता है।",
			"सब कुछ उलटने का प्रस्ताव शुरू हो गया है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "도시의 어두운 뒷골목. 찬란한 네온사인이 그림자를 더욱 깊게 만들었다.",
						"english": "The city's dark alley. Brilliant neon signs deepened the shadows.",
						"japanese": "街の暗い裏路地。眩いネオンサインが影を一層深くした。",
						"chinese": "城市的昏暗小巷。绚丽的霓虹灯使阴影更深。",
						"french": "La ruelle sombre de la ville. Les néons brillants ont rendu les ombres encore plus profondes.",
						"spanish": "El oscuro callejón de la ciudad. Los brillantes letreros de neón hacían las sombras aún más profundas.",
						"vietnamese": "Con hẻm tối của thành phố. Những biển hiệu neon rực rỡ làm sâu thêm bóng tối.",
						"thai": "ตรอกมืดของเมือง. แสงนีออนสว่างไสวทำให้เงาลึกขึ้นไปอีก.",
						"hindi": "शहर की अँधेरी गली। चमचमाती नियॉन लाइटों ने परछाइयों को और गहरा कर दिया।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "또 시작인가.",
						"english": "Starting again?",
						"japanese": "また始まるのか。",
						"chinese": "又来了吗？",
						"french": "Encore ?",
						"spanish": "¿Otra vez?",
						"vietnamese": "Lại nữa à?",
						"thai": "เริ่มอีกแล้วเหรอ.",
						"hindi": "फिर से शुरू?"
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "정체 모를 공격이 시작된다.",
						"english": "An unknown attack begins.",
						"japanese": "正体不明の攻撃が始まる。",
						"chinese": "身份不明的攻击开始了。",
						"french": "Une attaque inconnue commence.",
						"spanish": "Un ataque desconocido comienza.",
						"vietnamese": "Một cuộc tấn công không rõ danh tính bắt đầu.",
						"thai": "การโจมตีที่ไม่รู้จักเริ่มขึ้นแล้ว.",
						"hindi": "एक अज्ञात हमला शुरू होता है।"
					}
				},
				{
					"content": {
						"korean": "빌어먹을… 대체 누구야?!",
						"english": "Damn it... Who the hell are you?!",
						"japanese": "くそっ…一体誰だ？！",
						"chinese": "该死……你到底是谁？！",
						"french": "Merde... Qui es-tu, bon sang ?!",
						"spanish": "¡Maldita sea... ¿Quién demonios eres?!",
						"vietnamese": "Khốn kiếp... Rốt cuộc là ai?!",
						"thai": "บ้าเอ๊ย... แกเป็นใครกันแน่?!",
						"hindi": "धिक्कार है... तुम आखिर हो कौन?!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "(이를 악물며) 다시는 당하지 않아.",
						"english": "(Gritting teeth) I won't be caught off guard again.",
						"japanese": "(歯を食いしばり) 二度とやられない。",
						"chinese": "(咬紧牙关) 我不会再被抓住了。",
						"french": "(Serrant les dents) Je ne me laisserai plus prendre.",
						"spanish": "(Apretando los dientes) No me volverán a atrapar.",
						"vietnamese": "(Nghiến răng) Sẽ không bị mắc lừa lần nữa.",
						"thai": "(กัดฟัน) จะไม่โดนหลอกอีกแล้ว.",
						"hindi": "(दाँत पीसते हुए) मैं दोबारा फँसूंगा नहीं।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "bex",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "왔어? 예상보다 빠르네.",
						"english": "You're here? Faster than expected.",
						"japanese": "来たか。予想より早いな。",
						"chinese": "来了？比预想的要快。",
						"french": "Tu es là ? Plus vite que prévu.",
						"spanish": "¿Estás aquí? Más rápido de lo esperado.",
						"vietnamese": "Đến rồi à? Nhanh hơn dự kiến đấy.",
						"thai": "มาแล้วเหรอ? เร็วกว่าที่คิดนะ.",
						"hindi": "आ गए? उम्मीद से जल्दी।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "bex"
				},
				{
					"content": {
						"korean": "정보를 원해. 이 공격의 배후.",
						"english": "I need information. The mastermind behind this attack.",
						"japanese": "情報が欲しい。この攻撃の黒幕についてだ。",
						"chinese": "我需要情报。这次袭击的幕后主使。",
						"french": "Je veux des informations. Sur le cerveau derrière cette attaque.",
						"spanish": "Quiero información. Sobre el cerebro detrás de este ataque.",
						"vietnamese": "Tôi muốn thông tin. Kẻ chủ mưu đứng sau cuộc tấn công này.",
						"thai": "ฉันต้องการข้อมูล เบื้องหลังการโจมตีครั้งนี้",
						"hindi": "मुझे जानकारी चाहिए। इस हमले के पीछे का मास्टरमाइंड।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "배후? 너가 너무 많은 걸 건드렸어. 도시의 '그림자' 말이야.",
						"english": "Mastermind? You've stirred up too much. The city's 'Shadows'.",
						"japanese": "黒幕？君は触れてはいけないものに触れた。この都市の「影」にね。",
						"chinese": "幕后主使？你触碰了太多不该碰的东西。城市里的‘影子’。",
						"french": "Cerveau ? Tu as remué trop de choses. Les 'Ombres' de la ville.",
						"spanish": "¿Cerebro? Has tocado demasiadas cosas. Las 'Sombras' de la ciudad.",
						"vietnamese": "Kẻ chủ mưu? Ngươi đã động chạm quá nhiều thứ. 'Bóng tối' của thành phố.",
						"thai": "เบื้องหลัง? คุณไปยุ่งกับเรื่องมากเกินไปแล้ว 'เงามืด' ของเมืองน่ะ",
						"hindi": "मास्टरमाइंड? तुमने बहुत कुछ छेड़ा है। शहर की 'छायाएँ'।"
					},
					"type": "speech",
					"speaker": "bex",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "bex",
					"content": {
						"korean": "조심해. '오버워치'가 너를 주시하기 시작했어.",
						"english": "Be careful. 'Overwatch' has started watching you.",
						"japanese": "気をつけろ。「オーバーウォッチ」がお前を監視し始めた。",
						"chinese": "小心。‘守望者’已经开始盯上你了。",
						"french": "Fais attention. 'Overwatch' a commencé à te surveiller.",
						"spanish": "Ten cuidado. 'Overwatch' ha empezado a vigilarte.",
						"vietnamese": "Cẩn thận. 'Overwatch' đã bắt đầu để mắt đến ngươi rồi.",
						"thai": "ระวังให้ดี 'โอเวอร์วอทช์' เริ่มจับตาดูคุณแล้ว",
						"hindi": "सावधान रहो। 'ओवरवॉच' ने तुम्हें देखना शुरू कर दिया है।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "bex",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "시스템의 감시망이 촘촘해졌다. 작은 움직임도 허용되지 않는 듯했다.",
						"english": "The system's surveillance net tightened. Not even the smallest movement seemed allowed.",
						"japanese": "システムの監視網がより厳しくなった。些細な動きすら許されないかのようだ。",
						"chinese": "系统的监控网络变得更加严密。似乎连丝毫的举动都不被允许。",
						"french": "Le réseau de surveillance du système s'est resserré. Le moindre mouvement semblait interdit.",
						"spanish": "La red de vigilancia del sistema se estrechó. Ni el más mínimo movimiento parecía permitido.",
						"vietnamese": "Mạng lưới giám sát của hệ thống đã trở nên dày đặc hơn. Dường như không một cử động nhỏ nào được phép.",
						"thai": "เครือข่ายเฝ้าระวังของระบบเข้มงวดขึ้น ดูเหมือนจะไม่อนุญาตให้มีการเคลื่อนไหวเล็กน้อยเลย",
						"hindi": "सिस्टम का निगरानी जाल कस गया था। ऐसा लगता था कि छोटी सी हलचल भी स्वीकार्य नहीं थी।"
					}
				},
				{
					"content": {
						"korean": "'오버워치' 경고 레벨이 급상승했어. 보통 일이 아니야.",
						"english": "'Overwatch' alert level has surged. This isn't normal.",
						"japanese": "「オーバーウォッチ」の警戒レベルが急上昇した。これは尋常じゃない。",
						"chinese": "‘守望者’的警报级别急剧上升。这不是小事。",
						"french": "Le niveau d'alerte d''Overwatch' a monté en flèche. Ce n'est pas normal.",
						"spanish": "El nivel de alerta de 'Overwatch' se disparó. Esto no es normal.",
						"vietnamese": "Mức độ cảnh báo của 'Overwatch' đã tăng vọt. Đây không phải chuyện bình thường.",
						"thai": "ระดับการเตือนภัยของ 'โอเวอร์วอทช์' พุ่งสูงขึ้น นี่ไม่ใช่เรื่องปกติแล้ว",
						"hindi": "‘ओवरवॉच’ का अलर्ट स्तर तेजी से बढ़ गया है। यह सामान्य बात नहीं है।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "bex"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그 '그림자'가 움직인다는 증거인가.",
						"english": "Is this proof that 'Shadow' is moving?",
						"japanese": "あれらの「影」が動き出した証拠なのか。",
						"chinese": "这是‘影子’开始行动的证据吗？",
						"french": "Est-ce la preuve que 'l'Ombre' est en mouvement ?",
						"spanish": "¿Es esta la prueba de que 'la Sombra' se está moviendo?",
						"vietnamese": "Đây có phải là bằng chứng cho thấy 'Bóng tối' đang hành động?",
						"thai": "นี่คือหลักฐานที่ว่า 'เงามืด' กำลังเคลื่อนไหวอย่างนั้นหรือ",
						"hindi": "क्या यह सबूत है कि 'छाया' हिल रही है?"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "bex",
					"content": {
						"korean": "도시 외곽의 버려진 서버 룸에서 이상 징후가 포착됐어. 오래된 데이터 로그 조각… 현 시스템과는 다른 '질서'를 언급하는 것 같아.",
						"english": "Abnormal signs detected in a deserted server room on the city's outskirts. Fragments of old data logs... seem to mention a 'different order' than the current system.",
						"japanese": "都市外れの廃れたサーバー室で異常な兆候が確認された。古いデータログの断片…現在のシステムとは異なる「秩序」について言及しているようだ。",
						"chinese": "在城市郊区的一个废弃服务器机房里，发现了异常迹象。一些旧数据日志的碎片…似乎提到了一个与当前系统不同的‘秩序’。",
						"french": "Des signes anormaux ont été détectés dans une salle de serveurs abandonnée en périphérie de la ville. Des fragments d'anciens journaux de données... semblent mentionner un 'ordre différent' de celui du système actuel.",
						"spanish": "Se detectaron signos anómalos en una sala de servidores abandonada en las afueras de la ciudad. Fragmentos de antiguos registros de datos... parecen mencionar un 'orden diferente' al sistema actual.",
						"vietnamese": "Các dấu hiệu bất thường đã được phát hiện trong một phòng máy chủ bị bỏ hoang ở ngoại ô thành phố. Các mảnh nhật ký dữ liệu cũ... dường như đề cập đến một 'trật tự khác' so với hệ thống hiện tại.",
						"thai": "ตรวจพบสัญญาณผิดปกติในห้องเซิร์ฟเวอร์ร้างแถบชานเมือง เศษข้อมูลบันทึกเก่า... ดูเหมือนจะพูดถึง 'ระเบียบที่ต่างออกไป' จากระบบปัจจุบัน",
						"hindi": "शहर के बाहरी इलाके में एक परित्यक्त सर्वर रूम में असामान्य संकेत पाए गए। पुराने डेटा लॉग के टुकड़े... मौजूदा सिस्टम से 'अलग व्यवस्था' का जिक्र करते हुए लग रहे हैं।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "다른 질서?",
						"english": "Different order?",
						"japanese": "別の秩序だと？",
						"chinese": "不同的秩序？",
						"french": "Un ordre différent ?",
						"spanish": "¿Un orden diferente?",
						"vietnamese": "Trật tự khác?",
						"thai": "ระเบียบที่ต่างออกไป?",
						"hindi": "अलग व्यवस्था?"
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "버려진 서버 룸. 고철 더미 속에서 오래된 기기가 희미하게 빛나고 있었다.",
						"english": "Abandoned server room. An old device glowed faintly amidst piles of scrap metal.",
						"japanese": "廃墟と化したサーバー室。がらくたの山の中で、古い機器がかすかに光っていた。",
						"chinese": "废弃的服务器机房。在废金属堆中，一个老旧的设备发出微弱的光芒。",
						"french": "Salle de serveurs abandonnée. Un vieil appareil brillait faiblement au milieu des piles de ferraille.",
						"spanish": "Sala de servidores abandonada. Un viejo dispositivo brillaba débilmente entre montones de chatarra.",
						"vietnamese": "Phòng máy chủ bị bỏ hoang. Một thiết bị cũ kỹ phát sáng lờ mờ giữa đống phế liệu.",
						"thai": "ห้องเซิร์ฟเวอร์ร้าง ท่ามกลางกองเศษเหล็ก มีอุปกรณ์เก่าแก่กำลังเปล่งแสงเรืองรองจางๆ",
						"hindi": "परित्यक्त सर्वर रूम। कबाड़ के ढेर के बीच एक पुराना उपकरण मंद-मंद चमक रहा था।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이게… 그 데이터 로그?",
						"english": "Is this... that data log?",
						"japanese": "これが…あのデータログか？",
						"chinese": "这就是…那个数据日志？",
						"french": "C'est ça... ce journal de données ?",
						"spanish": "¿Es esto... ese registro de datos?",
						"vietnamese": "Đây... là nhật ký dữ liệu đó sao?",
						"thai": "นี่คือ... ข้อมูลบันทึกนั้นหรือเปล่า?",
						"hindi": "क्या यह... वह डेटा लॉग है?"
					}
				},
				{
					"content": {
						"korean": "시스템 노이즈가 시야를 흐린다. 흐릿한 영상이 스쳐 지나간다.",
						"english": "System noise blurs the vision. Hazy images flash by.",
						"japanese": "システムノイズが視界を遮る。ぼやけた映像が通り過ぎる。",
						"chinese": "系统噪音模糊了视线。模糊的影像一闪而过。",
						"french": "Le bruit du système brouille la vue. Des images floues défilent.",
						"spanish": "El ruido del sistema nubla la visión. Imágenes borrosas pasan fugazmente.",
						"vietnamese": "Tiếng ồn hệ thống làm mờ tầm nhìn. Những hình ảnh mờ ảo lướt qua.",
						"thai": "เสียงรบกวนของระบบทำให้การมองเห็นพร่ามัว ภาพที่ไม่ชัดเจนปรากฏขึ้นและผ่านไป",
						"hindi": "सिस्टम का शोर दृष्टि को धुंधला कर देता है। धुंधली छवियां तेजी से गुजरती हैं।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "뭐지? 이 오래된 도시 풍경은… 흑백 사진 속 사람들?",
						"english": "What is this? This old city landscape... people in black and white photos?",
						"japanese": "なんだこれは？この古い都市の風景は…白黒写真の中の人々？",
						"chinese": "这是什么？这古老的城市风景…黑白照片里的人们？",
						"french": "Qu'est-ce que c'est ? Ce vieux paysage urbain... des gens sur des photos en noir et blanc ?",
						"spanish": "¿Qué es esto? Este antiguo paisaje urbano... ¿gente en fotos en blanco y negro?",
						"vietnamese": "Gì thế này? Phong cảnh thành phố cổ này... những người trong ảnh đen trắng?",
						"thai": "นี่อะไรกัน? ทิวทัศน์เมืองเก่าแห่งนี้... ผู้คนในภาพถ่ายขาวดำ?",
						"hindi": "यह क्या है? यह पुराना शहरी परिदृश्य... श्वेत-श्याम तस्वीरों में लोग?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "이건… 내 과거와 연결된 건가?",
						"english": "Is this... connected to my past?",
						"japanese": "これは…私の過去と繋がっているのか？",
						"chinese": "这…与我的过去有关吗？",
						"french": "Est-ce... lié à mon passé ?",
						"spanish": "¿Esto... está conectado con mi pasado?",
						"vietnamese": "Đây... có phải là liên quan đến quá khứ của tôi không?",
						"thai": "นี่... เชื่อมโยงกับอดีตของฉันหรือเปล่า?",
						"hindi": "क्या यह... मेरे अतीत से जुड़ा है?"
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "알 수 없는 존재의 그림자가 탐험대를 향해 다가온다.",
						"english": "The shadow of an unknown entity approaches the expedition team.",
						"japanese": "未知の存在の影が探検隊に迫る。",
						"chinese": "未知存在的阴影正逼近探险队。",
						"french": "L'ombre d'une entité inconnue s'approche de l'équipe d'exploration.",
						"spanish": "La sombra de una entidad desconocida se acerca al equipo de expedición.",
						"vietnamese": "Bóng của một thực thể không rõ đang tiến đến đội thám hiểm.",
						"thai": "เงาของสิ่งมีชีวิตที่ไม่รู้จักกำลังเข้าใกล้ทีมสำรวจ",
						"hindi": "एक अज्ञात सत्ता की परछाई अभियान दल की ओर बढ़ रही है।"
					}
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 앞을 가로막는다. 그 존재는 기이한 기운을 뿜어냈다.",
						"english": "A colossal shadow blocks the way. The entity emitted an eerie aura.",
						"japanese": "巨大な影が道を遮る。その存在は奇妙なオーラを放っていた。",
						"chinese": "巨大的阴影挡住了去路。那个存在散发着诡异的气息。",
						"french": "Une ombre colossale bloque le chemin. L'entité émettait une aura étrange.",
						"spanish": "Una sombra colosal bloquea el camino. Esa entidad emitía un aura extraña.",
						"vietnamese": "Một bóng đen khổng lồ chặn đường. Thực thể đó phát ra một luồng khí kỳ dị.",
						"thai": "เงามหึมากีดขวางทาง สิ่งมีชีวิตนั้นแผ่พลังงานแปลกประหลาดออกมา",
						"hindi": "एक विशाल परछाई रास्ता रोकती है। वह सत्ता एक अजीब आभा छोड़ रही थी।"
					}
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "흥미롭군. 여기까지 오다니.",
						"english": "Interesting. To come this far.",
						"japanese": "面白い。ここまで来るとは。",
						"chinese": "有趣。竟然能到这里。",
						"french": "Intéressant. D'être arrivé jusqu'ici.",
						"spanish": "Interesante. Haber llegado hasta aquí.",
						"vietnamese": "Thú vị đấy. Lại đến được tận đây.",
						"thai": "น่าสนใจ. ที่มาได้ถึงนี่.",
						"hindi": "दिलचस्प। यहाँ तक पहुँचना।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네가… 그림자의 하수인인가.",
						"english": "Are you... a minion of the shadow?",
						"japanese": "お前が…影の手先か。",
						"chinese": "你是…影子的爪牙吗？",
						"french": "Es-tu... un serviteur de l'ombre ?",
						"spanish": "¿Eres... un sirviente de la sombra?",
						"vietnamese": "Ngươi... là tay sai của bóng tối sao?",
						"thai": "เจ้า... คือสมุนของเงาหรือ?",
						"hindi": "क्या तुम... परछाई के अनुयायी हो?"
					}
				},
				{
					"content": {
						"korean": "너의 분노… 아주 달콤하군.",
						"english": "Your rage... how sweet.",
						"japanese": "お前の怒り…とても甘美だ。",
						"chinese": "你的愤怒…真是甜美。",
						"french": "Ta rage... est si douce.",
						"spanish": "Tu furia... es tan dulce.",
						"vietnamese": "Sự phẫn nộ của ngươi... thật ngọt ngào.",
						"thai": "ความโกรธของเจ้า... ช่างหอมหวาน.",
						"hindi": "तुम्हारा क्रोध... कितना मधुर है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자의 압도적인 힘에 탐험대는 쓰러졌다.",
						"english": "Overwhelmed by the colossal shadow's power, the expedition fell.",
						"japanese": "「巨大な影の圧倒的な力に、探検隊は倒れた。」",
						"chinese": "“探险队在巨大阴影的压倒性力量下倒下了。”",
						"french": "Submergée par la puissance écrasante de l'ombre gigantesque, l'expédition est tombée.",
						"spanish": "Abrumada por el poder abrumador de la gigantesca sombra, la expedición cayó.",
						"vietnamese": "Đoàn thám hiểm gục ngã trước sức mạnh áp đảo của bóng tối khổng lồ.",
						"thai": "คณะสำรวจล้มลงด้วยพลังอันมหาศาลของเงาขนาดยักษ์",
						"hindi": "विशालकाय छाया की प्रचंड शक्ति से अभिभूत होकर, अभियान दल धराशायी हो गया।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 자. 분노만으로는… 아무것도 바꿀 수 없다.",
						"english": "Fool. Rage alone... changes nothing.",
						"japanese": "「愚か者め。怒りだけでは…何も変えられぬ。」",
						"chinese": "“愚蠢的家伙。光凭愤怒……什么也改变不了。”",
						"french": "Insensé. La rage seule... ne changera rien.",
						"spanish": "Necio. Solo con ira... nada puede cambiar.",
						"vietnamese": "Kẻ ngốc. Chỉ với sự tức giận... không thể thay đổi được gì.",
						"thai": "เจ้าโง่ ด้วยความโกรธเพียงอย่างเดียว... ไม่มีอะไรเปลี่ยนแปลงได้",
						"hindi": "मूर्ख। केवल क्रोध से... कुछ भी नहीं बदला जा सकता।"
					}
				},
				{
					"content": {
						"korean": "(이를 악물며) …아직… 끝나지 않았어.",
						"english": "(Gritting teeth) ...It's... not over yet.",
						"japanese": "「（歯を食いしばり）…まだ…終わってない。」",
						"chinese": "“（咬牙切齿）……还没……结束。”",
						"french": "(Serrant les dents) ...Ce n'est... pas encore fini.",
						"spanish": "(Apretando los dientes) ...Aún... no ha terminado.",
						"vietnamese": "(Nghiến răng) ...Chưa... kết thúc đâu.",
						"thai": "(กัดฟัน) ...ยัง...ไม่จบหรอก",
						"hindi": "(दांत पीसते हुए) ...अभी... खत्म नहीं हुआ है।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "다시 와라. 그때도… 결과는 같을 테지만.",
						"english": "Come again. Even then... the outcome will be the same.",
						"japanese": "「また来るがいい。その時も…結果は同じだろうがな。」",
						"chinese": "“再来吧。即便那时……结果也会一样。”",
						"french": "Reviens. Même alors... le résultat sera le même.",
						"spanish": "Vuelve. Incluso entonces... el resultado será el mismo.",
						"vietnamese": "Cứ quay lại đi. Đến lúc đó... kết quả cũng sẽ như vậy thôi.",
						"thai": "กลับมาอีกครั้งสิ ถึงตอนนั้น... ผลลัพธ์ก็คงไม่ต่างกัน",
						"hindi": "फिर आना। तब भी... परिणाम वही रहेगा।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "(쓰러지며) 크윽… 하지만… 이건… 시작일 뿐…",
						"english": "(Collapsing) Ugh... But... this is... just the beginning...",
						"japanese": "（倒れながら）ぐっ…しかし…これは…始まりに過ぎない…",
						"chinese": "(倒下) 呃…但是…这…只是开始…",
						"french": "(S'effondrant) Ugh... Mais... ce n'est... que le début...",
						"spanish": "(Cayendo) Ugh... Pero... esto es... solo el principio...",
						"vietnamese": "(Ngã xuống) Khụ... nhưng... đây... chỉ là khởi đầu...",
						"thai": "(ล้มลง) อึก... แต่นี่... เป็นเพียงจุดเริ่มต้นเท่านั้น...",
						"hindi": "(गिरते हुए) उफ़... लेकिन... यह... तो बस शुरुआत है..."
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "'{random_boss}'의… 그림자는… 사라지지 않아…",
						"english": "The shadow of '{random_boss}'... will not disappear...",
						"japanese": "「{random_boss}」の…影は…消えない…",
						"chinese": "'{random_boss}'的…影子…不会消失…",
						"french": "L'ombre de « {random_boss} »... ne disparaîtra pas...",
						"spanish": "La sombra de '{random_boss}'... no desaparecerá...",
						"vietnamese": "Bóng của '{random_boss}'... sẽ không biến mất...",
						"thai": "เงาของ '{random_boss}'... จะไม่หายไป...",
						"hindi": "'{random_boss}' की... परछाई... मिटेगी नहीं..."
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…뭐라고?",
						"english": "...What?",
						"japanese": "「…何だと？」",
						"chinese": "“……你说什么？”",
						"french": "...Quoi ?",
						"spanish": "¿...Qué dices?",
						"vietnamese": "...Cái gì?",
						"thai": "...อะไรนะ?",
						"hindi": "...क्या कहा?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "쓰러진 그림자 보스. 하지만 왠지 모를 불안감이 탐험대를 감쌌다.",
						"english": "The Shadow Boss falls. Yet an unsettling unease grips the expedition.",
						"japanese": "「シャドウボスは倒れた。だが、探検隊は言い知れぬ不安に包まれた。」",
						"chinese": "“影子首领倒下了。然而，一股莫名的不安笼罩着探险队。”",
						"french": "Le Boss Ombre est tombé. Pourtant, une inquiétude indicible enveloppe l'expédition.",
						"spanish": "El Jefe Sombrío cae. Pero una inquietud inexplicable envuelve a la expedición.",
						"vietnamese": "Trùm Bóng Tối gục ngã. Thế nhưng, một cảm giác bất an khó tả bao trùm đoàn thám hiểm.",
						"thai": "บอสเงาล้มลง ทว่า ความกังวลที่อธิบายไม่ได้ก็เข้าปกคลุมคณะสำรวจ",
						"hindi": "शैडो बॉस धराशायी हो गया। फिर भी, एक अजीब सी बेचैनी अभियान दल को घेरे हुए थी।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "도시의 어둠은 아직 끝나지 않았다. 더 깊은 곳에서, 진정한 그림자가 기다리고 있다.",
						"english": "The city's darkness hasn't ended. Deeper still, the true shadow awaits.",
						"japanese": "「街の闇はまだ終わらない。より深き場所で、真の影が待ち受けている。」",
						"chinese": "“城市的黑暗尚未结束。在更深之处，真正的阴影正在等待。”",
						"french": "Les ténèbres de la ville n'ont pas encore pris fin. Plus profond encore, la véritable ombre attend.",
						"spanish": "La oscuridad de la ciudad aún no ha terminado. En las profundidades, la verdadera sombra aguarda.",
						"vietnamese": "Bóng tối thành phố vẫn chưa kết thúc. Sâu hơn nữa, bóng tối thực sự đang chờ đợi.",
						"thai": "ความมืดมิดของเมืองยังไม่สิ้นสุด ในที่ลึกกว่านั้น เงาที่แท้จริงกำลังรออยู่",
						"hindi": "शहर का अंधेरा अभी खत्म नहीं हुआ है। और भी गहराई में, असली छाया इंतजार कर रही है।"
					}
				}
			]
		}
	]
} as const;
