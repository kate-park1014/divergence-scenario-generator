export const scenario_modern_pixelgrim_28_01 = {
	"scenario_id": "modern_pixelgrim_28_01",
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "낡은 디지털 기기 속, 알 수 없는 코드가 화면을 가득 채웠다.",
						"english": "Inside an old digital device, unknown code filled the screen.",
						"japanese": "古いデジタル機器の中、未知のコードが画面を埋め尽くした。",
						"chinese": "在旧的数字设备里，未知的代码布满了屏幕。",
						"french": "À l'intérieur d'un vieil appareil numérique, un code inconnu remplissait l'écran.",
						"spanish": "Dentro de un viejo dispositivo digital, un código desconocido llenó la pantalla.",
						"vietnamese": "Bên trong một thiết bị kỹ thuật số cũ, mã không xác định lấp đầy màn hình.",
						"thai": "ภายในอุปกรณ์ดิจิทัลเก่า โค้ดที่ไม่รู้จักเต็มหน้าจอ",
						"hindi": "एक पुराने डिजिटल उपकरण के अंदर, अज्ञात कोड ने स्क्रीन को भर दिया।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "여긴… 대체 어디지?",
						"english": "Where... where am I?",
						"japanese": "ここ…一体どこだ？",
						"chinese": "这里…到底是哪里？",
						"french": "Où... où suis-je ?",
						"spanish": "¿Dónde... dónde estoy?",
						"vietnamese": "Đây... đây là đâu?",
						"thai": "ที่นี่... ที่ไหนกันแน่?",
						"hindi": "मैं... मैं कहाँ हूँ?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그리고 알 수 없는 카운트다운이 시작됐다.",
						"english": "And an unknown countdown began.",
						"japanese": "そして未知のカウントダウンが始まった。",
						"chinese": "未知的倒计时开始了。",
						"french": "Et un compte à rebours inconnu a commencé.",
						"spanish": "Y una cuenta regresiva desconocida comenzó.",
						"vietnamese": "Và một đồng hồ đếm ngược không xác định đã bắt đầu.",
						"thai": "และมีการนับถอยหลังที่ไม่รู้จักเริ่มต้นขึ้น",
						"hindi": "और एक अज्ञात उलटी गिनती शुरू हो गई।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"type": "direction",
					"speaker": "zoe"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "왔구나. 기다리고 있었어.",
						"english": "You've come. I've been waiting.",
						"japanese": "来たわね。待っていたわ。",
						"chinese": "你来了。我一直在等你。",
						"french": "Tu es venu. Je t'attendais.",
						"spanish": "Has venido. Te estaba esperando.",
						"vietnamese": "Bạn đã đến rồi. Tôi đã chờ đợi.",
						"thai": "มาแล้วสินะ ฉันรออยู่เลย",
						"hindi": "तुम आ गए। मैं इंतज़ार कर रहा था।"
					},
					"type": "speech",
					"speaker": "zoe"
				},
				{
					"content": {
						"korean": "당신은 누구고… 여긴 어디야?",
						"english": "Who are you... and where am I?",
						"japanese": "あなたは誰…ここはどこなの？",
						"chinese": "你是谁…这里是哪里？",
						"french": "Qui êtes-vous... et où suis-je ?",
						"spanish": "¿Quién eres... y dónde estoy?",
						"vietnamese": "Bạn là ai... và tôi đang ở đâu?",
						"thai": "คุณเป็นใคร... และฉันอยู่ที่ไหน?",
						"hindi": "तुम कौन हो... और मैं कहाँ हूँ?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "난 조이. 널 이곳으로 이끌었어.",
						"english": "I'm Joy. I led you here.",
						"japanese": "私はジョイ。あなたをここに導いたの。",
						"chinese": "我是乔伊。我引导你来到这里。",
						"french": "Je suis Joy. Je t'ai mené ici.",
						"spanish": "Soy Joy. Te traje aquí.",
						"vietnamese": "Tôi là Joy. Tôi đã dẫn bạn đến đây.",
						"thai": "ฉันคือจอย ฉันพาคุณมาที่นี่",
						"hindi": "मैं जॉय हूँ। मैं तुम्हें यहाँ ले आया।"
					},
					"type": "speech",
					"speaker": "zoe"
				},
				{
					"content": {
						"korean": "이곳은 네가 찾아야 할 진실의 문이야.",
						"english": "This is the door to the truth you must find.",
						"japanese": "ここが君が探すべき真実の扉だ。",
						"chinese": "这是你必须找到的真相之门。",
						"french": "C'est la porte de la vérité que tu dois trouver.",
						"spanish": "Esta es la puerta a la verdad que debes encontrar.",
						"vietnamese": "Đây là cánh cửa dẫn đến sự thật mà ngươi phải tìm.",
						"thai": "นี่คือประตูสู่ความจริงที่คุณต้องค้นหา",
						"hindi": "यह वह सत्य का द्वार है जिसे तुम्हें खोजना है।"
					},
					"type": "speech",
					"speaker": "zoe",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "zoe",
					"type": "direction",
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "base",
					"speaker": "zoe",
					"type": "speech",
					"content": {
						"korean": "카운트다운이 계속될수록, 시스템은 불안정해질 거야.",
						"english": "As the countdown continues, the system will become unstable.",
						"japanese": "カウントダウンが続くほど、システムは不安定になるだろう。",
						"chinese": "倒计时持续得越久，系统就会变得越不稳定。",
						"french": "Plus le compte à rebours continue, plus le système deviendra instable.",
						"spanish": "Cuanto más avance la cuenta atrás, más inestable se volverá el sistema.",
						"vietnamese": "Đếm ngược càng kéo dài, hệ thống sẽ càng bất ổn.",
						"thai": "ยิ่งนับถอยหลังต่อไป ระบบก็จะยิ่งไม่เสถียร",
						"hindi": "जैसे-जैसे उलटी गिनती जारी रहेगी, सिस्टम अस्थिर होता जाएगा।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "불안정하다고? 안정적으로 보이는데.",
						"english": "Unstable? It looks stable to me.",
						"japanese": "不安定だと？安定しているように見えるが。",
						"chinese": "不稳定？看起来很稳定啊。",
						"french": "Instable ? Ça a l'air stable.",
						"spanish": "¿Inestable? Me parece estable.",
						"vietnamese": "Bất ổn ư? Trông có vẻ ổn định mà.",
						"thai": "ไม่เสถียรเหรอ? ดูเหมือนจะเสถียรดีนะ",
						"hindi": "अस्थिर? यह तो स्थिर लग रहा है।"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "겉모습에 속으면 안 돼. 가끔씩 의미 없는 데이터 파편들이 보일 거야.",
						"english": "Don't be fooled by appearances. You'll occasionally see meaningless data fragments.",
						"japanese": "見かけに騙されてはいけない。時々、意味のないデータ断片が見えるだろう。",
						"chinese": "别被表象迷惑了。有时你会看到一些无意义的数据碎片。",
						"french": "Ne te fie pas aux apparences. Tu verras parfois des fragments de données insignifiants.",
						"spanish": "No te dejes engañar por las apariencias. De vez en cuando verás fragmentos de datos sin sentido.",
						"vietnamese": "Đừng bị vẻ bề ngoài đánh lừa. Đôi khi ngươi sẽ thấy những mảnh dữ liệu vô nghĩa.",
						"thai": "อย่าถูกหลอกด้วยรูปลักษณ์ภายนอก บางครั้งคุณจะเห็นเศษข้อมูลที่ไม่มีความหมาย",
						"hindi": "दिखावे से धोखा मत खाना। तुम्हें कभी-कभी अर्थहीन डेटा के टुकड़े दिखेंगे।"
					},
					"speaker": "zoe"
				},
				{
					"content": {
						"korean": "그게 단서일 수도 있어.",
						"english": "Those could be clues.",
						"japanese": "それが手がかりになるかもしれない。",
						"chinese": "那可能就是线索。",
						"french": "Ce pourrait être des indices.",
						"spanish": "Esos podrían ser pistas.",
						"vietnamese": "Đó có thể là manh mối.",
						"thai": "นั่นอาจเป็นเบาะแสก็ได้",
						"hindi": "वह एक सुराग हो सकता है।"
					},
					"type": "speech",
					"speaker": "zoe",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "화면에 순간적으로 의미 없는 데이터 파편들이 번쩍였다. 사라진다.",
						"english": "Meaningless data fragments flashed on the screen for a moment. Then vanished.",
						"japanese": "画面に一瞬、意味のないデータ断片が閃いた。そして消えた。",
						"chinese": "屏幕上瞬间闪过无意义的数据碎片。随即消失。",
						"french": "Des fragments de données insignifiantes ont brièvement clignoté à l'écran. Puis ont disparu.",
						"spanish": "Fragmentos de datos sin sentido destellaron en la pantalla por un momento. Luego desaparecieron.",
						"vietnamese": "Những mảnh dữ liệu vô nghĩa thoáng chốc lóe lên trên màn hình. Rồi biến mất.",
						"thai": "เศษข้อมูลที่ไม่มีความหมายกะพริบบนหน้าจอชั่วขณะ แล้วก็หายไป",
						"hindi": "स्क्रीन पर क्षण भर के लिए अर्थहीन डेटा के टुकड़े चमके। फिर गायब हो गए।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						5,
						2
					],
					"type": "direction",
					"speaker": "zoe",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "zoe",
					"content": {
						"korean": "시간이 얼마 없어. 서둘러야 해.",
						"english": "There's not much time. We need to hurry.",
						"japanese": "時間がない。急がなければ。",
						"chinese": "时间不多了。得赶紧。",
						"french": "Il n'y a plus beaucoup de temps. Il faut se dépêcher.",
						"spanish": "No queda mucho tiempo. Hay que darse prisa.",
						"vietnamese": "Không còn nhiều thời gian. Phải nhanh lên.",
						"thai": "เวลาเหลือน้อยแล้ว ต้องรีบหน่อย",
						"hindi": "समय बहुत कम है। हमें जल्दी करनी होगी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "무엇을 서두르라는 거야? 당신, 우리를 어디로 이끄는 거지?",
						"english": "Hurry for what? Where are you leading us?",
						"japanese": "何を急げと言うんだ？あなたは、私たちをどこへ導いている？",
						"chinese": "为什么要赶紧？你到底要把我们带到哪里去？",
						"french": "Se dépêcher pour quoi ? Où nous mènes-tu ?",
						"spanish": "¿Apúrate para qué? ¿Adónde nos llevas?",
						"vietnamese": "Nhanh lên cái gì? Ngươi đang dẫn chúng ta đi đâu vậy?",
						"thai": "รีบอะไร? คุณกำลังพาเราไปไหนกันแน่?",
						"hindi": "किस बात की जल्दी? तुम हमें कहाँ ले जा रहे हो?"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "zoe",
					"type": "speech",
					"content": {
						"korean": "널 구원할 곳으로. 이 감옥에서 벗어나려면, 나의 조언이 필요할 거야.",
						"english": "To a place where you'll be saved. To escape this prison, you'll need my advice.",
						"japanese": "お前を救う場所へ。この監獄から脱するには、私の助言が必要だろう。",
						"chinese": "去一个能拯救你的地方。想逃离这座监狱，你需要我的建议。",
						"french": "Vers l'endroit où tu seras sauvée. Pour t'échapper de cette prison, tu auras besoin de mes conseils.",
						"spanish": "A un lugar donde serás salvado. Para escapar de esta prisión, necesitarás mi consejo.",
						"vietnamese": "Đến nơi ngươi sẽ được cứu. Để thoát khỏi nhà tù này, ngươi sẽ cần lời khuyên của ta.",
						"thai": "ไปยังที่ที่คุณจะได้รับการช่วยเหลือ เพื่อหนีจากคุกนี้ คุณจะต้องพึ่งคำแนะนำของฉัน",
						"hindi": "तुम्हें बचाने की जगह। इस जेल से बचने के लिए, तुम्हें मेरी सलाह की ज़रूरत होगी।"
					}
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "…왠지 믿음이 안 가.",
						"english": "...Somehow, I don't trust it.",
						"japanese": "…どうも信用できない。",
						"chinese": "……不知为何，我不太相信。",
						"french": "...Je n'y crois pas vraiment.",
						"spanish": "...De alguna manera, no me fío.",
						"vietnamese": "...Sao đó, tôi không tin.",
						"thai": "…ทำไมไม่ค่อยน่าเชื่อถือเลย",
						"hindi": "...किसी तरह, मुझे विश्वास नहीं हो रहा।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "시스템은 겉으로는 안정적이었으나, 조작된 데이터의 잔상이 공포를 예고했다.",
						"english": "The system appeared stable, but traces of manipulated data foretold horror.",
						"japanese": "システムは表向きは安定していたが、操作されたデータの残像が恐怖を予兆していた。",
						"chinese": "系统表面上稳定，但被篡改数据的残影预示着恐惧。",
						"french": "Le système semblait stable, mais les rémanences de données manipulées annonçaient l'horreur.",
						"spanish": "El sistema parecía estable, pero los rastros de datos manipulados presagiaban el horror.",
						"vietnamese": "Hệ thống có vẻ ổn định, nhưng dấu vết dữ liệu bị thao túng đã báo trước nỗi kinh hoàng.",
						"thai": "ระบบดูเสถียร แต่ร่องรอยของข้อมูลที่ถูกบิดเบือนบ่งบอกถึงความสยองขวัญ",
						"hindi": "सिस्टम ऊपरी तौर पर स्थिर लग रहा था, लेकिन छेड़छाड़ किए गए डेटा के अवशेषों ने आतंक की भविष्यवाणी की।"
					},
					"speaker": "narrator"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "zoe",
					"type": "direction",
					"spot": [
						5,
						2
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이제 돌아갈 수 없어. 오직 앞으로 나아가야만 해.",
						"english": "No turning back now. We must only move forward.",
						"japanese": "もう引き返せない。ただ前へ進むしかない。",
						"chinese": "已经回不去了。只能继续前进。",
						"french": "Plus de retour en arrière possible. Nous devons seulement avancer.",
						"spanish": "Ya no hay vuelta atrás. Solo debemos avanzar.",
						"vietnamese": "Không thể quay lại nữa rồi. Chỉ có thể tiến về phía trước.",
						"thai": "ไม่มีทางย้อนกลับแล้ว มีแต่ต้องเดินหน้าต่อไป",
						"hindi": "अब पीछे नहीं हट सकते। हमें बस आगे बढ़ना होगा।"
					},
					"speaker": "zoe",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "함정이었잖아! 당신의 '구원'은 거짓이었어.",
						"english": "It was a trap! Your 'salvation' was a lie.",
						"japanese": "罠だったのか！お前の「救済」は嘘だった！",
						"chinese": "原来是陷阱！你的“救赎”是谎言。",
						"french": "C'était un piège ! Ton « salut » était un mensonge.",
						"spanish": "¡Era una trampa! Tu \"salvación\" fue una mentira.",
						"vietnamese": "Đó là một cái bẫy! 'Sự cứu rỗi' của ngươi là dối trá.",
						"thai": "มันเป็นกับดัก! 'การไถ่บาป' ของคุณคือคำโกหก",
						"hindi": "यह एक जाल था! तुम्हारी 'मुक्ति' एक झूठ थी।"
					},
					"type": "speech"
				},
				{
					"speaker": "zoe",
					"content": {
						"korean": "선택은 언제나 네 몫이었어.",
						"english": "The choice was always yours.",
						"japanese": "選択はいつだって君次第だった。",
						"chinese": "选择权一直在你手中。",
						"french": "Le choix t'a toujours appartenu.",
						"spanish": "La elección siempre fue tuya.",
						"vietnamese": "Lựa chọn luôn là của ngươi.",
						"thai": "ทางเลือกเป็นของคุณเสมอ",
						"hindi": "चुनाव हमेशा तुम्हारा था।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "시스템의 질서가 이해할 수 없는 방식으로 뒤틀리기 시작했다.",
						"english": "The system's order began to twist in incomprehensible ways.",
						"japanese": "システムの秩序が理解不能な形で歪み始めた。",
						"chinese": "系统的秩序开始以不可理解的方式扭曲。",
						"french": "L'ordre du système commença à se tordre de manière incompréhensible.",
						"spanish": "El orden del sistema comenzó a retorcerse de formas incomprensibles.",
						"vietnamese": "Trật tự của hệ thống bắt đầu biến đổi theo những cách khó hiểu.",
						"thai": "ระเบียบของระบบเริ่มบิดเบี้ยวไปในทางที่ไม่อาจเข้าใจได้",
						"hindi": "सिस्टम का क्रम समझ से परे तरीकों से मुड़ने लगा।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이런 질서는 거부한다!",
						"english": "I reject this order!",
						"japanese": "この秩序は拒否する！",
						"chinese": "我拒绝这种秩序！",
						"french": "Je refuse cet ordre !",
						"spanish": "¡Rechazo este orden!",
						"vietnamese": "Ta từ chối trật tự này!",
						"thai": "ฉันปฏิเสธระเบียบนี้!",
						"hindi": "मैं इस व्यवस्था को अस्वीकार करता हूँ!"
					}
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…겨우 이 정도로는, 나의 질서를 깨트릴 수 없어.",
						"english": "...This alone won't break my order.",
						"japanese": "...これっぽっちでは、私の秩序を壊せない。",
						"chinese": "…就凭这点，还无法打破我的秩序。",
						"french": "Ce n'est pas suffisant pour briser mon ordre.",
						"spanish": "Con esto solo, no podrás romper mi orden.",
						"vietnamese": "...Chỉ chừng này thôi, không thể phá vỡ trật tự của ta.",
						"thai": "...แค่นี้ ไม่อาจทำลายระเบียบของข้าได้หรอก",
						"hindi": "सिर्फ इतना ही, मेरे आदेश को तोड़ नहीं सकता।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "무슨 소리야? 너는 끝났어!",
						"english": "What are you talking about? You're finished!",
						"japanese": "何を言ってるんだ？お前は終わりだ！",
						"chinese": "你在说什么？你已经完了！",
						"french": "De quoi parles-tu ? C'est fini pour toi !",
						"spanish": "¡De qué hablas? ¡Estás acabado!",
						"vietnamese": "Ngươi nói gì vậy? Ngươi đã kết thúc rồi!",
						"thai": "พูดอะไรน่ะ? แกจบแล้ว!",
						"hindi": "तुम क्या कह रहे हो? तुम खत्म हो गए हो!"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "이건 시작에 불과해. 너는 아직 나의 일부거든.",
						"english": "This is just the beginning. You are still a part of me.",
						"japanese": "これは始まりに過ぎない。お前はまだ私の一部なのだから。",
						"chinese": "这只是开始。你仍然是我的一部分。",
						"french": "Ce n'est que le début. Tu fais encore partie de moi.",
						"spanish": "Esto es solo el principio. Todavía eres parte de mí.",
						"vietnamese": "Đây chỉ là khởi đầu thôi. Ngươi vẫn là một phần của ta.",
						"thai": "นี่เป็นแค่จุดเริ่มต้น แกยังเป็นส่วนหนึ่งของข้า",
						"hindi": "यह तो बस शुरुआत है। तुम अभी भी मेरे एक हिस्से हो।"
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "디지털 감옥의 알 수 없는 연결은, 끊어지지 않았다.",
						"english": "The unknown connection of the digital prison was not severed.",
						"japanese": "デジタル監獄の未知なる接続は、断ち切られていなかった。",
						"chinese": "数字监狱中未知的连接，并未被切断。",
						"french": "La connexion inconnue de la prison numérique n'a pas été rompue.",
						"spanish": "La conexión desconocida de la prisión digital no fue cortada.",
						"vietnamese": "Mối liên kết không thể hiểu được của nhà tù kỹ thuật số, vẫn chưa bị cắt đứt.",
						"thai": "การเชื่อมโยงอันลึกลับของคุกดิจิทัลยังไม่ถูกตัดขาด",
						"hindi": "डिजital जेल का अज्ञात संबंध टूटा नहीं था।"
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "다음 단계의 왜곡된 질서가, 플레이어를 기다리고 있었다.",
						"english": "The distorted order of the next stage awaited the player.",
						"japanese": "次の段階の歪んだ秩序が、プレイヤーを待ち受けていた。",
						"chinese": "下一阶段扭曲的秩序，正在等待着玩家。",
						"french": "L'ordre distordu de la prochaine étape attendait le joueur.",
						"spanish": "El orden distorsionado de la siguiente fase esperaba al jugador.",
						"vietnamese": "Trật tự méo mó của giai đoạn tiếp theo, đang chờ đợi người chơi.",
						"thai": "ระเบียบที่บิดเบี้ยวของขั้นต่อไป กำลังรอคอยผู้เล่นอยู่",
						"hindi": "अगले चरण का विकृत आदेश खिलाड़ी का इंतजार कर रहा था।"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 플레이어를 덮쳤다. 모든 것이 암전.",
						"english": "A colossal shadow engulfed the player. Everything went dark.",
						"japanese": "巨大な影がプレイヤーを覆った。全てが暗転。",
						"chinese": "巨大的阴影笼罩了玩家。一切都陷入黑暗。",
						"french": "Une ombre colossale a englouti le joueur. Tout est devenu noir.",
						"spanish": "Una sombra colosal envolvió al jugador. Todo se volvió oscuro.",
						"vietnamese": "Một bóng tối khổng lồ bao trùm người chơi. Mọi thứ chìm vào bóng tối.",
						"thai": "เงาขนาดยักษ์เข้าปกคลุมผู้เล่น ทุกอย่างมืดมิด",
						"hindi": "एक विशालकाय छाया ने खिलाड़ी को ढक लिया। सब कुछ अँधेरा हो गया।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "결국 이 정도인가. 무의미한 저항이었어.",
						"english": "Is this all you had? A futile resistance.",
						"japanese": "結局この程度か。無意味な抵抗だったな。",
						"chinese": "终究只有这点实力吗。真是毫无意义的抵抗。",
						"french": "C'est tout ce que tu avais ? Une résistance inutile.",
						"spanish": "Así que esto es todo. Una resistencia inútil.",
						"vietnamese": "Cuối cùng chỉ có thế thôi sao. Một sự kháng cự vô nghĩa.",
						"thai": "แค่นี้เองงั้นเหรอ? เป็นการต่อต้านที่ไร้ความหมาย",
						"hindi": "आखिरकार बस इतना ही? एक व्यर्थ का प्रतिरोध था।"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아직… 끝나지 않았어. 절대로.",
						"english": "It's not over yet... Never.",
						"japanese": "まだ… 終わってない。絶対に。",
						"chinese": "还没…结束。绝不。",
						"french": "Ce n'est pas encore fini... Jamais.",
						"spanish": "Todavía no ha terminado... Jamás.",
						"vietnamese": "Vẫn chưa… kết thúc. Tuyệt đối không.",
						"thai": "ยัง…ไม่จบ ไม่มีวัน",
						"hindi": "अभी… खत्म नहीं हुआ है। कभी नहीं।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "zoe",
					"spot": [
						5,
						2
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이제 모든 진실을 보여줄 시간이야.",
						"english": "It's time to reveal all truths.",
						"japanese": "今こそ、全ての真実を明かす時だ。",
						"chinese": "现在是揭示所有真相的时候了。",
						"french": "Il est temps de révéler toutes les vérités.",
						"spanish": "Es hora de revelar todas las verdades.",
						"vietnamese": "Đã đến lúc tiết lộ mọi sự thật.",
						"thai": "ถึงเวลาเปิดเผยความจริงทั้งหมดแล้ว",
						"hindi": "अब सभी सत्य दिखाने का समय है।"
					},
					"speaker": "zoe",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "진실? 당신은 우리를 배신했어!",
						"english": "Truth? You betrayed us!",
						"japanese": "真実？お前は我々を裏切った！",
						"chinese": "真相？你背叛了我们！",
						"french": "La vérité ? Tu nous as trahis !",
						"spanish": "¿Verdad? ¡Nos traicionaste!",
						"vietnamese": "Sự thật? Ngươi đã phản bội chúng ta!",
						"thai": "ความจริง? คุณทรยศพวกเรา!",
						"hindi": "सत्य? तुमने हमें धोखा दिया!"
					}
				},
				{
					"speaker": "zoe",
					"type": "speech",
					"content": {
						"korean": "난 단지 나의 주인님을 따를 뿐이야.",
						"english": "I merely follow my master.",
						"japanese": "私はただ、私の主に従うだけだ。",
						"chinese": "我只是追随我的主人。",
						"french": "Je ne fais que suivre mon maître.",
						"spanish": "Yo solo sigo a mi maestro.",
						"vietnamese": "Ta chỉ đơn thuần tuân theo chủ nhân của mình.",
						"thai": "ฉันแค่ติดตามเจ้านายของฉัน",
						"hindi": "मैं बस अपने मालिक का अनुसरण करता हूँ।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 나타나, 주변을 뒤덮었다.",
						"english": "A colossal shadow appeared, engulfing the surroundings.",
						"japanese": "巨大な影が現れ、周囲を覆い尽くした。",
						"chinese": "一个巨大的影子出现，笼罩了四周。",
						"french": "Une ombre colossale apparut, recouvrant les environs.",
						"spanish": "Una sombra colosal apareció, cubriendo los alrededores.",
						"vietnamese": "Một cái bóng khổng lồ xuất hiện, bao trùm khắp nơi.",
						"thai": "เงาขนาดมหึมาปรากฏขึ้น ปกคลุมไปทั่วบริเวณ",
						"hindi": "एक विशालकाय छाया प्रकट हुई, जिसने आसपास को ढक लिया।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "환영한다, 나의 구역에 온 것을.",
						"english": "Welcome to my domain.",
						"japanese": "ようこそ、私の領域へ。",
						"chinese": "欢迎来到我的领域。",
						"french": "Bienvenue dans mon domaine.",
						"spanish": "Bienvenido a mi dominio.",
						"vietnamese": "Chào mừng đến lãnh địa của ta.",
						"thai": "ยินดีต้อนรับสู่แดนของข้า",
						"hindi": "मेरे क्षेत्र में तुम्हारा स्वागत है।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네가 이 모든 걸 꾸민 거군!",
						"english": "So you orchestrated all of this!",
						"japanese": "お前が全て仕組んだのか！",
						"chinese": "原来这一切都是你策划的！",
						"french": "C'est donc toi qui as orchestré tout ça !",
						"spanish": "¡Así que tú orquestaste todo esto!",
						"vietnamese": "Ngươi đã sắp đặt tất cả chuyện này!",
						"thai": "แกเป็นคนจัดฉากทั้งหมดนี่เอง!",
						"hindi": "तो तुमने ही यह सब योजना बनाई है!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "이해할 수 없는 작은 반항이군.",
						"english": "A small, incomprehensible act of rebellion.",
						"japanese": "取るに足らない、理解不能な反抗だな。",
						"chinese": "真是微不足道，不可理喻的反抗。",
						"french": "Une petite rébellion incompréhensible.",
						"spanish": "Una pequeña e incomprensible rebelión.",
						"vietnamese": "Một sự phản kháng nhỏ bé, khó hiểu.",
						"thai": "การต่อต้านเล็ก ๆ ที่ไร้ความหมาย",
						"hindi": "एक छोटी, अगम्य बगावत।"
					}
				},
				{
					"direction": "right",
					"action": "exit",
					"speaker": "zoe",
					"type": "direction",
					"duration_ms": 400
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"낡은 디지털 기기가 번쩍이며, 알 수 없는 코드가 화면을 뒤덮었다.",
			"모든 것이 왜곡된 공간. 나는 갇혔다.",
			"그리고 시작된 카운트다운. 남은 시간은 단지, 파멸까지의 거리.",
			"안정적으로 보이던 시스템의 이면에서, 기묘한 그림자가 드리워진다."
		],
		"english": [
			"An old digital device flickered, unknown code covering the screen.",
			"A space where everything is distorted. I'm trapped.",
			"And the countdown began. The remaining time is merely the distance to destruction.",
			"Behind the seemingly stable system, a strange shadow falls."
		],
		"japanese": [
			"古いデジタル機器が点滅し、未知のコードが画面を覆った。",
			"すべてが歪んだ空間。私は閉じ込められた。",
			"そして始まったカウントダウン。残された時間はただ、破滅までの距離。",
			"安定しているように見えたシステムの裏側で、奇妙な影が差す。"
		],
		"chinese": [
			"老旧的数字设备闪烁着，未知的代码覆盖了屏幕。",
			"一个万物扭曲的空间。我被困住了。",
			"倒计时开始了。剩下的时间，不过是到毁灭的距离。",
			"在看似稳定的系统背后，一道奇异的阴影笼罩着。"
		],
		"french": [
			"Un vieil appareil numérique a clignoté, un code inconnu recouvrant l'écran.",
			"Un espace où tout est déformé. Je suis piégé.",
			"Et le compte à rebours a commencé. Le temps restant n'est que la distance jusqu'à la destruction.",
			"Derrière le système apparemment stable, une étrange ombre plane."
		],
		"spanish": [
			"Un viejo dispositivo digital parpadeó, código desconocido cubriendo la pantalla.",
			"Un espacio donde todo está distorsionado. Estoy atrapado.",
			"Y la cuenta regresiva comenzó. El tiempo restante es simplemente la distancia a la destrucción.",
			"Detrás del sistema aparentemente estable, una extraña sombra se cierne."
		],
		"vietnamese": [
			"Một thiết bị kỹ thuật số cũ nhấp nháy, mã không xác định bao phủ màn hình.",
			"Một không gian mọi thứ bị bóp méo. Tôi bị mắc kẹt.",
			"Và đồng hồ đếm ngược bắt đầu. Thời gian còn lại chỉ là khoảng cách đến sự hủy diệt.",
			"Đằng sau hệ thống tưởng chừng ổn định, một bóng đen kỳ lạ bao trùm."
		],
		"thai": [
			"อุปกรณ์ดิจิทัลเก่ากะพริบ โค้ดที่ไม่รู้จักปกคลุมหน้าจอ",
			"พื้นที่ที่ทุกสิ่งบิดเบี้ยว ฉันติดกับ",
			"และการนับถอยหลังก็เริ่มต้นขึ้น เวลาที่เหลือเป็นเพียงระยะทางสู่การทำลายล้าง",
			"เบื้องหลังระบบที่ดูเหมือนเสถียร เงาประหลาดทอดลงมา"
		],
		"hindi": [
			"एक पुराना डिजिटल उपकरण टिमटिमाया, अज्ञात कोड स्क्रीन पर छा गया।",
			"एक ऐसी जगह जहाँ सब कुछ विकृत है। मैं फँस गया हूँ।",
			"और उलटी गिनती शुरू हो गई। बचा हुआ समय केवल विनाश तक की दूरी है।",
			"लगभग स्थिर प्रणाली के पीछे, एक अजीब छाया पड़ती है।"
		]
	}
} as const;
