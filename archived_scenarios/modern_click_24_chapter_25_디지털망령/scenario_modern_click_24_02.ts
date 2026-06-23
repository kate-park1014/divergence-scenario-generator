export const scenario_modern_click_24_02 = {
	"scenario_id": "modern_click_24_02",
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "도시의 핵심 시스템이 마비되었다. 네트워크 미궁의 입구가 열렸다.",
						"english": "The city's core system is down. The Network Labyrinth's entrance is open.",
						"japanese": "都市の中枢システムが麻痺した。ネットワーク迷宮の入り口が開かれた。",
						"chinese": "城市核心系统已瘫痪。网络迷宫入口已开启。",
						"french": "Le système central de la ville est paralysé. L'entrée du Labyrinthe du Réseau est ouverte.",
						"spanish": "El sistema central de la ciudad está paralizado. La entrada del Laberinto de la Red está abierta.",
						"vietnamese": "Hệ thống cốt lõi của thành phố đã tê liệt. Lối vào Mê cung Mạng lưới đã mở.",
						"thai": "ระบบหลักของเมืองเป็นอัมพาต. ทางเข้าเขาวงกตเครือข่ายเปิดแล้ว.",
						"hindi": "शहर का मुख्य सिस्टम ठप हो गया है। नेटवर्क भूलभुलैया का प्रवेश द्वार खुल गया है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "여기가… 데이터 폭주의 근원?",
						"english": "This is... the source of the data surge?",
						"japanese": "ここが… データ暴走の根源か？",
						"chinese": "这里是… 数据洪流的源头？",
						"french": "C'est ici... la source de la surcharge de données ?",
						"spanish": "¿Aquí es... el origen del desbordamiento de datos?",
						"vietnamese": "Đây là… nguồn gốc của sự cố dữ liệu?",
						"thai": "ที่นี่คือ... ต้นตอข้อมูลไหลหลาก?",
						"hindi": "क्या यह... डेटा ओवरफ्لو का स्रोत है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "kai",
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그래. 봉쇄를 풀려면 이 미궁을 해제해야 해.",
						"english": "Yes. To lift the lockdown, we must clear this labyrinth.",
						"japanese": "そうだ。封鎖を解くには、この迷宮を解除する必要がある。",
						"chinese": "对。要解除封锁，就必须破解这个迷宫。",
						"french": "Oui. Pour lever le confinement, nous devons neutraliser ce labyrinthe.",
						"spanish": "Sí. Para levantar el bloqueo, debemos desmantelar este laberinto.",
						"vietnamese": "Đúng vậy. Để phá vỡ phong tỏa, chúng ta phải giải mã mê cung này.",
						"thai": "ใช่. จะยกเลิกการปิดล้อมได้ ต้องไขปริศนาเขาวงกตนี้.",
						"hindi": "हाँ। लॉकडाउन हटाने के लिए, हमें इस भूलभुलैया को साफ करना होगा।"
					},
					"speaker": "kai"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "망설일 시간 없어. 카운트다운은 계속되고 있다고.",
						"english": "No time to hesitate. The countdown is still on.",
						"japanese": "躊躇してる暇はない。カウントダウンは続いている。",
						"chinese": "没时间犹豫了。倒计时还在继续。",
						"french": "Pas de temps à hésiter. Le compte à rebours continue.",
						"spanish": "No hay tiempo para dudar. La cuenta atrás sigue.",
						"vietnamese": "Không có thời gian do dự. Đồng hồ đếm ngược vẫn đang chạy.",
						"thai": "ไม่มีเวลาลังเลแล้ว. การนับถอยหลังยังคงดำเนินอยู่.",
						"hindi": "हिचकिचाने का समय नहीं है। उलटी गिनती जारी है।"
					},
					"speaker": "kai"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						5,
						2
					],
					"speaker": "kai",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "점점 복잡해지는군. 신흥 깡패 놈들의 짓이야.",
						"english": "It's getting more complex. This is the new gang's doing.",
						"japanese": "ますます複雑になるな。新興ギャングの仕業だ。",
						"chinese": "越来越复杂了。这是新兴帮派搞的鬼。",
						"french": "Ça devient de plus en plus complexe. C'est l'œuvre de la nouvelle bande.",
						"spanish": "Se está volviendo más complejo. Esto es obra de la nueva pandilla.",
						"vietnamese": "Càng lúc càng phức tạp. Đây là do băng đảng mới gây ra.",
						"thai": "มันเริ่มซับซ้อนขึ้นเรื่อยๆ. เป็นฝีมือของแก๊งหน้าใหม่นั่นเอง.",
						"hindi": "यह और जटिल होता जा रहा है। यह नए गिरोह का काम है।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "신흥 깡패? 놈들이 이런 걸 만들 수 있어?",
						"english": "A new gang? Can they even create something like this?",
						"japanese": "新興ギャング？奴らがこんなものを作れるのか？",
						"chinese": "新兴帮派？他们能搞出这种东西？",
						"french": "Une nouvelle bande ? Ils peuvent créer quelque chose comme ça ?",
						"spanish": "¿Una nueva pandilla? ¿Pueden crear algo así?",
						"vietnamese": "Băng đảng mới? Chúng có thể tạo ra thứ này sao?",
						"thai": "แก๊งหน้าใหม่? พวกมันสร้างอะไรแบบนี้ได้ด้วยเหรอ?",
						"hindi": "एक नया गिरोह? क्या वे ऐसा कुछ बना सकते हैं?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 조직… 단순한 깡패가 아냐. 시스템 교란에 능숙하지.",
						"english": "This organization... not just thugs. They're skilled at system disruption.",
						"japanese": "この組織…ただのチンピラじゃない。システム撹乱に長けている。",
						"chinese": "这个组织……不只是帮派。他们擅长干扰系统。",
						"french": "Cette organisation... pas de simples voyous. Ils sont experts en perturbation de systèmes.",
						"spanish": "Esta organización... no son simples matones. Son hábiles en la interrupción de sistemas.",
						"vietnamese": "Tổ chức này... không chỉ là bọn côn đồ. Chúng rất giỏi trong việc gây rối hệ thống.",
						"thai": "องค์กรนี้... ไม่ใช่แค่นักเลง พวกมันชำนาญการปั่นป่วนระบบ",
						"hindi": "यह संगठन... सिर्फ बदमाश नहीं है। ये सिस्टम को बाधित करने में माहिर हैं。"
					},
					"speaker": "kai"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그래서 봉쇄가 풀리지 않았던 거군.",
						"english": "So that's why the lockdown wasn't lifted.",
						"japanese": "だから封鎖が解除されなかったのか。",
						"chinese": "所以封锁才一直没有解除啊。",
						"french": "C'est pour ça que le confinement n'a pas été levé.",
						"spanish": "Así que por eso el bloqueo no fue levantado.",
						"vietnamese": "Thảo nào phong tỏa không được dỡ bỏ.",
						"thai": "นี่สินะ เหตุผลที่การปิดกั้นไม่ถูกยกเลิก",
						"hindi": "तो इसलिए लॉकडाउन नहीं हटा।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "kai",
					"content": {
						"korean": "놈들을 막지 못하면, 이 미궁에서 영원히 헤매게 될 거야.",
						"english": "If we can't stop them, we'll be lost in this labyrinth forever.",
						"japanese": "奴らを止められなければ、この迷宮を永遠に彷徨うことになる。",
						"chinese": "如果我们阻止不了他们，就会永远迷失在这个迷宫里。",
						"french": "Si nous ne les arrêtons pas, nous serons perdus à jamais dans ce labyrinthe.",
						"spanish": "Si no los detenemos, vagaremos por este laberinto para siempre.",
						"vietnamese": "Nếu không ngăn chặn chúng, chúng ta sẽ lạc mãi trong mê cung này.",
						"thai": "ถ้าเราหยุดพวกมันไม่ได้ เราจะหลงทางอยู่ในเขาวงกตนี้ตลอดไป",
						"hindi": "अगर हम उन्हें नहीं रोक पाए, तो इस भूलभुलैया में हमेशा के लिए भटकते रहेंगे।"
					}
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "kai",
					"spot": [
						5,
						2
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "이런… 데이터 폭주가 심해지고 있어. 시스템이 버티지 못할 거야.",
						"english": "Damn it... The data surge is getting worse. The system won't hold.",
						"japanese": "まずい…データ暴走がひどくなってる。システムが持ちこたえられない。",
						"chinese": "糟了……数据过载越来越严重。系统撑不住了。",
						"french": "Merde... La surcharge de données s'aggrave. Le système ne tiendra pas.",
						"spanish": "Maldita sea... El pico de datos está empeorando. El sistema no aguantará.",
						"vietnamese": "Chết tiệt... Tình trạng quá tải dữ liệu ngày càng nghiêm trọng. Hệ thống sẽ không trụ được.",
						"thai": "แย่แล้ว... ข้อมูลกำลังทะลักหนักขึ้น ระบบจะรับไม่ไหวแล้ว",
						"hindi": "धत्... डेटा ओवरलोड बदतर हो रहा है। सिस्टम नहीं टिक पाएगा।"
					},
					"speaker": "kai",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "뭔가 이상해. 오래된 통신망에서… 잡음이 들려와.",
						"english": "Something's wrong. I'm hearing static from an old communication network...",
						"japanese": "何かがおかしい。古い通信網から…ノイズが聞こえる。",
						"chinese": "有点不对劲。从旧的通讯网络里……传来噪音。",
						"french": "Il y a quelque chose qui cloche. J'entends du bruit provenant d'un ancien réseau de communication...",
						"spanish": "Algo está mal. Escucho estática de una antigua red de comunicaciones...",
						"vietnamese": "Có gì đó lạ. Tôi nghe thấy nhiễu từ mạng lưới thông tin cũ...",
						"thai": "มีบางอย่างผิดปกติ... ได้ยินเสียงรบกวนจากเครือข่ายสื่อสารเก่า...",
						"hindi": "कुछ गड़बड़ है। पुरानी संचार प्रणाली से... शोर आ रहा है।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "kai",
					"content": {
						"korean": "그건… 알 수 없는 고대 암호 조각 같기도 해. 처음 보는 현상이야.",
						"english": "It's... like fragments of an unknown ancient code. I've never seen this before.",
						"japanese": "それは…未知の古代暗号の断片のようだ。初めて見る現象だ。",
						"chinese": "那像是……未知古代密码的碎片。这是我从未见过的现象。",
						"french": "C'est... comme des fragments d'un ancien code inconnu. C'est un phénomène jamais vu.",
						"spanish": "Es... como fragmentos de un código antiguo desconocido. Es un fenómeno que nunca había visto.",
						"vietnamese": "Nó... giống như những mảnh mật mã cổ đại không xác định. Đây là hiện tượng tôi chưa từng thấy.",
						"thai": "มันเหมือน... ชิ้นส่วนรหัสโบราณที่ไม่รู้จัก นี่เป็นปรากฏการณ์ที่ไม่เคยเห็นมาก่อน",
						"hindi": "यह... किसी अज्ञात प्राचीन कोड के टुकड़े जैसा है। मैंने ऐसा पहले कभी नहीं देखा।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "신흥 깡패 짓이 아니라고?",
						"english": "Not the work of new thugs?",
						"japanese": "新興のチンピラの仕業じゃないのか？",
						"chinese": "不是新兴帮派干的？",
						"french": "Ce n'est pas l'œuvre de nouveaux voyous ?",
						"spanish": "¿No es obra de matones nuevos?",
						"vietnamese": "Không phải do bọn côn đồ mới nổi sao?",
						"thai": "ไม่ใช่ฝีมือของนักเลงหน้าใหม่เหรอ?",
						"hindi": "नए बदमाशों का काम नहीं है?"
					}
				},
				{
					"content": {
						"korean": "모르겠어. 하지만… 더 큰 문제가 숨어있는 것 같아.",
						"english": "I don't know. But... it feels like there's a bigger problem hidden here.",
						"japanese": "分からない。だが…もっと大きな問題が隠されている気がする。",
						"chinese": "不知道。但是……好像隐藏着更大的问题。",
						"french": "Je ne sais pas. Mais... j'ai l'impression qu'un problème plus grave se cache ici.",
						"spanish": "No lo sé. Pero... parece que hay un problema mayor oculto.",
						"vietnamese": "Tôi không biết. Nhưng... dường như có một vấn đề lớn hơn đang ẩn giấu.",
						"thai": "ไม่รู้สิ... แต่ดูเหมือนจะมีปัญหาใหญ่กว่าซ่อนอยู่",
						"hindi": "मुझे नहीं पता। लेकिन... लगता है कोई बड़ी समस्या छिपी हुई है।"
					},
					"speaker": "kai",
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						5,
						2
					],
					"speaker": "kai",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "더 이상 버틸 수 없어! 데이터 코어 과부하 임박!",
						"english": "Can't hold on any longer! Data core overload imminent!",
						"japanese": "これ以上持ちこたえられない！データコア過負荷寸前！",
						"chinese": "撑不住了！数据核心即将过载！",
						"french": "Je ne peux plus tenir ! Surcharge imminente du cœur de données !",
						"spanish": "¡No puedo aguantar más! ¡Sobrecarga inminente del núcleo de datos!",
						"vietnamese": "Không thể trụ được nữa! Lõi dữ liệu sắp quá tải!",
						"thai": "ทนไม่ไหวแล้ว! คอร์ข้อมูลจะโอเวอร์โหลดแล้ว!",
						"hindi": "अब और नहीं रुक सकता! डेटा कोर ओवरलोड होने वाला है!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "젠장, 막아야 해!",
						"english": "Damn it, we have to stop it!",
						"japanese": "くそ、止めないと！",
						"chinese": "该死，必须阻止！",
						"french": "Merde, il faut l'arrêter !",
						"spanish": "¡Maldita sea, tenemos que detenerlo!",
						"vietnamese": "Chết tiệt, phải ngăn chặn nó!",
						"thai": "บ้าจริง ต้องหยุดมัน!",
						"hindi": "धत्, इसे रोकना होगा!"
					}
				},
				{
					"content": {
						"korean": "놈들의 중간 보스가 저 너머에 있어. 시간을 끌면 안 돼!",
						"english": "Their sub-boss is beyond that. Don't waste time!",
						"japanese": "奴らの中ボスはあの先にいる。時間を無駄にするな！",
						"chinese": "他们的中头目就在那头。别浪费时间！",
						"french": "Leur sous-boss est au-delà. Ne perdons pas de temps !",
						"spanish": "Su subjefe está más allá. ¡No hay que perder el tiempo!",
						"vietnamese": "Tên trùm phụ của chúng ở phía bên kia. Không được chậm trễ!",
						"thai": "หัวหน้าย่อยของพวกมันอยู่ทางโน้น อย่าเสียเวลา!",
						"hindi": "उनका उप-बॉस उस पार है। समय बर्बाद मत करो!"
					},
					"speaker": "kai",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "미궁의 끝에서, 거대한 그림자가 탐험대를 기다리고 있었다.",
						"english": "At the end of the labyrinth, a colossal shadow awaited the expedition team.",
						"japanese": "迷宮の果てで、巨大な影が探検隊を待ち受けていた。",
						"chinese": "在迷宫的尽头，一个巨大的影子正等待着探险队。",
						"french": "Au bout du labyrinthe, une ombre colossale attendait l'équipe d'expédition.",
						"spanish": "Al final del laberinto, una sombra colosal esperaba al equipo de expedición.",
						"vietnamese": "Cuối mê cung, một bóng đen khổng lồ đang đợi đội thám hiểm.",
						"thai": "ที่ปลายสุดของเขาวงกต เงาขนาดมหึมารอกองสำรวจอยู่",
						"hindi": "भूलभुलैया के अंत में, एक विशाल छाया अभियान दल का इंतजार कर रही थी।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "저게… 중간 보스인가!",
						"english": "Is that... the sub-boss!",
						"japanese": "あれが…中ボスか！",
						"chinese": "那就是……中头目吗！",
						"french": "C'est... le sous-boss !",
						"spanish": "¡Es... el subjefe!",
						"vietnamese": "Đó... là trùm phụ sao!",
						"thai": "นั่นมัน... หัวหน้าย่อยเหรอ!",
						"hindi": "क्या वह... उप-बॉस है!"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 이럴… 리가… 하지만… 이건… 시작에 불과해… 놈은… 너희가… 뭘 아는지…",
						"english": "Ugh... This can't... be... But... this is... just the beginning... He... knows... what you know...",
						"japanese": "くぅ… まさか… そんな… しかし… これは… 始まりにすぎない… やつは… お前たちが… 何を知っているか…",
						"chinese": "呃……这不可能……但是……这……才刚刚开始……他……知道……你们知道什么……",
						"french": "Ugh... Non... Ce n'est pas possible... Mais... ce n'est... que le début... Il... sait... ce que vous savez...",
						"spanish": "Ugh... Esto no... puede... ser... Pero... esto es... solo el principio... Él... sabe... lo que sabéis...",
						"vietnamese": "Khụ... Không... thể nào... Nhưng... đây... chỉ là khởi đầu... Hắn... biết... các ngươi biết gì...",
						"thai": "อึก... ไม่จริง... นี่มัน... ไม่ใช่... แต่... นี่เป็น... แค่จุดเริ่มต้น... มัน... รู้... ว่าพวกแก... รู้อะไร...",
						"hindi": "उफ़... ऐसा... नहीं... हो सकता... लेकिन... यह... तो... बस... शुरुआत है... वह... जानता है... कि तुम... क्या जानते हो..."
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "무슨 소리야! 놈은 대체 뭘 알고 있던 거지?",
						"english": "What?! What did he know?",
						"japanese": "「何だと？！あいつ、一体何を知っていたんだ？」",
						"chinese": "什么？！他到底知道些什么？",
						"french": "Quoi ?! Qu'est-ce qu'il savait, lui ?",
						"spanish": "¡¿Qué?! ¿Qué sabía él?",
						"vietnamese": "Cái gì?! Hắn ta rốt cuộc biết điều gì?",
						"thai": "อะไรนะ! เจ้านั่นรู้เรื่องอะไรกันแน่?",
						"hindi": "क्या?! उसे क्या पता था?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"speaker": "kai",
					"action": "enter"
				},
				{
					"content": {
						"korean": "다행이다! 간신히 경로를 해제했어. 하지만… 도시 곳곳의 오래된 통신망에서 노이즈가 더 심해지고 있어.",
						"english": "Phew! Path cleared just in time. But... the noise is getting worse in the city's old comms networks.",
						"japanese": "「助かった！何とか経路を解除できた。しかし…街のあちこちの古い通信網でノイズがひどくなってる…」",
						"chinese": "太好了！勉强解除了路径。但是……城市各处的老旧通讯网中，噪音越来越严重了。",
						"french": "Ouf ! Le chemin est dégagé de justesse. Mais... le bruit s'aggrave dans les anciens réseaux de communication de la ville.",
						"spanish": "¡Uf! ¡Logré despejar la ruta por los pelos! Pero... el ruido en las viejas redes de comunicación de la ciudad está empeorando.",
						"vietnamese": "May quá! Vừa kịp thời giải phóng đường dẫn. Nhưng... nhiễu loạn đang trở nên tồi tệ hơn trong các mạng lưới thông tin cũ kỹ khắp thành phố.",
						"thai": "โล่งอก! ปลดเส้นทางได้ทันเวลาพอดี แต่... สัญญาณรบกวนในเครือข่ายสื่อสารเก่าแก่ทั่วเมืองเริ่มแย่ลงเรื่อยๆ",
						"hindi": "राहत मिली! मैंने मुश्किल से रास्ता साफ किया। लेकिन... शहर के पुराने संचार नेटवर्कों में शोर और बढ़ रहा है।"
					},
					"speaker": "kai",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "노이즈? 아까 그 암호 조각…?",
						"english": "Noise? That cipher fragment earlier...?",
						"japanese": "「ノイズ？さっきの暗号の断片…？」",
						"chinese": "噪音？刚才那个密码碎片……？",
						"french": "Bruit ? Ce fragment de code d'avant... ?",
						"spanish": "¿Ruido? ¿Ese fragmento de cifrado de antes...?",
						"vietnamese": "Nhiễu loạn? Mảnh mật mã lúc nãy...?",
						"thai": "สัญญาณรบกวน? ชิ้นส่วนรหัสเมื่อกี้...?",
						"hindi": "शोर? वह पहले वाला सिफर टुकड़ा...?"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "중간 보스는 쓰러졌지만, 데이터 폭주는 또 다른 형태로 도시를 위협하고 있었다.",
						"english": "The mid-boss fell, but the data surge continued to threaten the city in another form.",
						"japanese": "「中間ボスは倒れたが、データ暴走は別の形で都市を脅かし続けていた。」",
						"chinese": "中间Boss倒下了，但数据洪流又以另一种形式威胁着城市。",
						"french": "Le boss intermédiaire est tombé, mais la surcharge de données continuait de menacer la ville sous une autre forme.",
						"spanish": "El jefe intermedio cayó, pero la sobrecarga de datos seguía amenazando la ciudad de otra forma.",
						"vietnamese": "Trùm giữa đã gục ngã, nhưng cơn bão dữ liệu vẫn tiếp tục đe dọa thành phố dưới một hình thức khác.",
						"thai": "หัวหน้าย่อยล้มลงแล้ว แต่การไหลบ่าของข้อมูลยังคงคุกคามเมืองในรูปแบบอื่น",
						"hindi": "मिड-बॉस गिर गया, लेकिन डेटा सर्ज ने दूसरे रूप में शहर को खतरा जारी रखा।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "디지털의 그림자 속에서, 진짜 위협이 서서히 모습을 드러냈다.",
						"english": "In the digital shadows, the true threat slowly revealed itself.",
						"japanese": "「デジタルの影の中、真の脅威がゆっくりと姿を現した。」",
						"chinese": "在数字的阴影中，真正的威胁正逐渐显现。",
						"french": "Dans l'ombre numérique, la vraie menace se révélait lentement.",
						"spanish": "En las sombras digitales, la verdadera amenaza se reveló lentamente.",
						"vietnamese": "Trong bóng tối kỹ thuật số, mối đe dọa thực sự dần lộ diện.",
						"thai": "ท่ามกลางเงามืดดิจิทัล ภัยคุกคามที่แท้จริงได้เผยโฉมออกมาอย่างช้าๆ",
						"hindi": "डिजिटल छाया में, असली खतरा धीरे-धीरे सामने आया।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "시스템의 심장이 광란하는 곳. 거대한 형상이 탐험대를 내려다봤다.",
						"english": "Where the heart of the system rages. A colossal figure gazed down at the expedition team.",
						"japanese": "システムの心臓が狂乱する場所。巨大な姿が探検隊を見下ろしていた。",
						"chinese": "系统之心狂乱之处。一个巨大的身影俯视着探险队。",
						"french": "Là où le cœur du système s'emballe. Une figure colossale observait l'équipe d'expédition.",
						"spanish": "Donde el corazón del sistema enloquece. Una figura colosal observó al equipo de expedición.",
						"vietnamese": "Nơi trái tim hệ thống cuồng loạn. Một hình thể khổng lồ nhìn xuống đội thám hiểm.",
						"thai": "ที่ซึ่งหัวใจของระบบบ้าคลั่ง ร่างมหึมาจ้องมองลงมายังคณะสำรวจ",
						"hindi": "जहाँ सिस्टम का दिल उग्र होता है। एक विशाल आकृति ने अभियान दल को नीचे देखा।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "감히… 내 영역에 발을 들이다니.",
						"english": "How dare you... step into my domain.",
						"japanese": "よくも…私の領域に足を踏み入れたな。",
						"chinese": "竟敢……踏入我的领域。",
						"french": "Comment osez-vous... entrer dans mon domaine.",
						"spanish": "¿Cómo osas... entrar en mi dominio?",
						"vietnamese": "Dám... đặt chân vào lãnh địa của ta.",
						"thai": "บังอาจ... ก้าวเข้ามาในอาณาเขตของข้า",
						"hindi": "तुम्हारी हिम्मत कैसे हुई... मेरे क्षेत्र में कदम रखने की।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "네 녀석이 이 모든 걸 벌인 거군!",
						"english": "So you're the one who caused all this!",
						"japanese": "貴様がこの全ての元凶か！",
						"chinese": "原来你就是这一切的幕后黑手！",
						"french": "C'est donc toi qui as causé tout ça !",
						"spanish": "¡Así que fuiste tú quien causó todo esto!",
						"vietnamese": "Ngươi chính là kẻ đã gây ra tất cả chuyện này!",
						"thai": "แกเองสินะที่เป็นต้นเหตุของเรื่องทั้งหมดนี้!",
						"hindi": "तो, तुम ही हो जिसने यह सब किया!"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "이건 파괴가 아냐. 진정한 시대의 시작이지.",
						"english": "This isn't destruction. It's the dawn of a true era.",
						"japanese": "これは破壊ではない。真の時代の始まりだ。",
						"chinese": "这不是毁灭。这是真正时代的开始。",
						"french": "Ce n'est pas de la destruction. C'est l'aube d'une véritable ère.",
						"spanish": "Esto no es destrucción. Es el amanecer de una verdadera era.",
						"vietnamese": "Đây không phải sự hủy diệt. Mà là khởi đầu của một kỷ nguyên thực sự.",
						"thai": "นี่ไม่ใช่การทำลายล้าง แต่มันคือการเริ่มต้นของยุคสมัยที่แท้จริง",
						"hindi": "यह विनाश नहीं है। यह एक सच्चे युग की शुरुआत है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "데이터 폭주가 한계에 달했어! 내가 길을 열어줄게. 너희는 저 녀석을 막아!",
						"english": "The data surge has reached its limit! I'll clear the way. You stop that guy!",
						"japanese": "データ暴走が限界に達した！私が道を開く。お前たちはあいつを止めろ！",
						"chinese": "数据激增已达极限！我来开路。你们去阻止那个家伙！",
						"french": "La surcharge de données a atteint sa limite ! Je vais ouvrir la voie. Arrêtez ce type !",
						"spanish": "¡La avalancha de datos ha llegado a su límite! Yo despejaré el camino. ¡Detengan a ese tipo!",
						"vietnamese": "Lượng dữ liệu quá tải đã đạt giới hạn! Ta sẽ mở đường. Các ngươi hãy ngăn chặn hắn!",
						"thai": "การไหลบ่าของข้อมูลถึงขีดจำกัดแล้ว! ฉันจะเปิดทางให้ พวกนายไปหยุดมันซะ!",
						"hindi": "डेटा की बाढ़ अपनी सीमा पर पहुँच गई है! मैं रास्ता साफ करूँगा। तुम उस आदमी को रोको!"
					},
					"speaker": "kai",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "direction",
					"direction": "down",
					"duration_ms": 400,
					"speaker": "kai",
					"action": "exit"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "가소롭군. 너희에게 미래는 없어.",
						"english": "How pathetic. You have no future.",
						"japanese": "哀れだな。お前たちに未来はない。",
						"chinese": "可笑。你们没有未来。",
						"french": "Pathétique. Vous n'avez aucun avenir.",
						"spanish": "Qué patético. No tenéis futuro.",
						"vietnamese": "Thật nực cười. Các ngươi không có tương lai.",
						"thai": "น่าสมเพช พวกแกไม่มีอนาคตหรอก",
						"hindi": "कितने दयनीय हो। तुम्हारा कोई भविष्य नहीं है।"
					},
					"speaker": "random_boss"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "크하하! 어리석은 것들… 너희는 그저 허무하게 무너질 뿐이다!",
						"english": "Hahaha! Fools... You will simply crumble into nothing!",
						"japanese": "「クハハハ！愚かな者たちめ…お前たちはただ虚しく崩れ去るだけだ！」",
						"chinese": "哈哈哈！愚蠢的东西……你们只会徒劳地崩溃！",
						"french": "Hahaha ! Imbéciles... Vous ne ferez que vous effondrer en vain !",
						"spanish": "¡Jajaja! ¡Tontos...! ¡Simplemente caerán en la nada!",
						"vietnamese": "Khahaha! Lũ ngu ngốc... Các ngươi sẽ chỉ sụp đổ một cách vô ích mà thôi!",
						"thai": "ฮ่าฮ่าฮ่า! พวกโง่เอ๊ย... พวกแกจะล่มสลายไปอย่างเปล่าประโยชน์!",
						"hindi": "हाहाहा! मूर्खों... तुम बस व्यर्थ ही बिखर जाओगे!"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "happy"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "데이터 폭주는 걷잡을 수 없이 퍼져나갔다. 도시는 혼돈에 잠식되어갔다.",
						"english": "The data surge spread uncontrollably. The city was engulfed in chaos.",
						"japanese": "「データ暴走は手に負えず広がり、都市は混沌に飲み込まれていった。」",
						"chinese": "数据洪流 uncontrollably地蔓延开来。城市被混乱吞噬。",
						"french": "La surcharge de données se propagea de manière incontrôlable. La ville fut engloutie par le chaos.",
						"spanish": "La sobrecarga de datos se extendió sin control. La ciudad fue devorada por el caos.",
						"vietnamese": "Cơn bão dữ liệu lan rộng không thể kiểm soát. Thành phố bị nhấn chìm trong hỗn loạn.",
						"thai": "การไหลบ่าของข้อมูลแพร่กระจายอย่างควบคุมไม่ได้ เมืองถูกกลืนกินด้วยความสับสนวุ่นวาย",
						"hindi": "डेटा सर्ज अनियंत्रित रूप से फैल गया। शहर अराजकता में डूब गया।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "젠장… 아직… 끝나지 않았어…!",
						"english": "Damn it... It's not... over yet...!",
						"japanese": "「くそっ…まだ…終わってない…！」",
						"chinese": "该死……还没……结束……！",
						"french": "Mince... Ce n'est pas... fini... !",
						"spanish": "¡Maldita sea...! ¡Aún no... ha terminado...!",
						"vietnamese": "Chết tiệt... Vẫn chưa... kết thúc...!",
						"thai": "บ้าเอ๊ย... ยัง... ไม่จบ...!",
						"hindi": "धिक्कार है... यह अभी... खत्म नहीं हुआ है...!"
					},
					"speaker": "character_any"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"네트워크 미궁. 도시의 숨겨진 심장부.",
			"데이터는 광란하고, 시간은 째깍였다.",
			"신흥 깡패… 그들은 무엇을 노리는가?",
			"막지 못하면, 모든 것이 사라진다."
		],
		"english": [
			"Network Labyrinth. The city's hidden core.",
			"Data ran wild, time ticked on.",
			"The rising gang... what do they seek?",
			"Fail to stop them, and all will be lost."
		],
		"japanese": [
			"ネットワーク迷宮。都市の隠された心臓部。",
			"データは狂乱し、時は刻一刻と過ぎた。",
			"新興ギャング… 彼らは何を狙っているのか？",
			"止めなければ、全てが消え去る。"
		],
		"chinese": [
			"网络迷宫。城市的隐藏核心。",
			"数据狂乱，时间流逝。",
			"新兴帮派… 他们意欲何为？",
			"若不阻止，一切将消失。"
		],
		"french": [
			"Le Labyrinthe du Réseau. Le cœur caché de la ville.",
			"Les données s'emballaient, le temps s'écoulait.",
			"La nouvelle bande... que visent-ils ?",
			"Si on ne les arrête pas, tout disparaîtra."
		],
		"spanish": [
			"El Laberinto de la Red. El corazón oculto de la ciudad.",
			"Los datos se descontrolaron, el tiempo corría.",
			"La nueva pandilla... ¿qué buscan?",
			"Si no los detenemos, todo desaparecerá."
		],
		"vietnamese": [
			"Mê cung Mạng lưới. Trái tim ẩn giấu của thành phố.",
			"Dữ liệu hỗn loạn, thời gian trôi.",
			"Băng đảng mới nổi… chúng muốn gì?",
			"Nếu không ngăn chặn, mọi thứ sẽ biến mất."
		],
		"thai": [
			"เขาวงกตเครือข่าย. ใจกลางที่ซ่อนอยู่ของเมือง.",
			"ข้อมูลปั่นป่วน, เวลาเดินไป.",
			"แก๊งหน้าใหม่... พวกมันต้องการอะไร?",
			"ถ้าหยุดไม่ได้, ทุกสิ่งจะหายไป."
		],
		"hindi": [
			"नेटवर्क भूलभुलैया। शहर का छिपा हुआ केंद्र।",
			"डेटा बेकाबू हुआ, समय टिक-टिक करता रहा।",
			"उभरते बदमाश... वे क्या चाहते हैं?",
			"अगर नहीं रोका, तो सब कुछ खत्म हो जाएगा।"
		]
	}
} as const;
