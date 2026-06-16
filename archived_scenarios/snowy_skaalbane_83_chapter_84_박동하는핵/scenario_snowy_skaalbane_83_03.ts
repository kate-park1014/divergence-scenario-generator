export const scenario_snowy_skaalbane_83_03 = {
	"scenario_id": "snowy_skaalbane_83_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"eira": {
			"id": "mon_0c37c014-b5ca-4f2f-ad03-5d393e5b2eb1",
			"name": {
				"korean": "에이라",
				"english": "Eira",
				"japanese": "エイラ",
				"chinese": "艾拉",
				"french": "Eira",
				"spanish": "Eira",
				"vietnamese": "Eira",
				"thai": "ไอรา",
				"hindi": "ऐरा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8e2970b7-bcb1-4b1c-6bf0-93106b373500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0ca1ec09-a624-450f-054a-b98de58bdb00/public"
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
					"type": "speech",
					"content": {
						"korean": "탑의 가장 깊은 곳. 푸른빛이 멀리서 심장처럼 박동했다.",
						"english": "The deepest part of the Tower. A blue light pulsed like a heart from afar.",
						"japanese": "塔の最も深い場所。青い光が遠くで心臓のように脈動していた。",
						"chinese": "塔的最深处。远处一道蓝光如心脏般跳动。",
						"french": "Au plus profond de la Tour. Une lumière bleue pulsait au loin, tel un cœur.",
						"spanish": "La parte más profunda de la Torre. Una luz azul palpitaba a lo lejos como un corazón.",
						"vietnamese": "Nơi sâu nhất của Tháp. Một ánh sáng xanh lam từ xa nhấp nháy như trái tim.",
						"thai": "ส่วนที่ลึกที่สุดของหอคอย แสงสีน้ำเงินเต้นระริกจากที่ไกลๆ เหมือนหัวใจ",
						"hindi": "टॉवर का सबसे गहरा हिस्सा। दूर से नीली रोशनी दिल की तरह धड़क रही थी।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "심장이… 발밑에서 뛰는 것 같아.",
						"english": "The heart... it feels like it's beating beneath my feet.",
						"japanese": "心臓が…足元で脈打っているようです。",
						"chinese": "心脏……感觉就在脚下跳动。",
						"french": "Le cœur... j'ai l'impression qu'il bat sous mes pieds.",
						"spanish": "El corazón... parece que late bajo mis pies.",
						"vietnamese": "Trái tim… dường như đang đập dưới chân tôi.",
						"thai": "หัวใจ… เหมือนกำลังเต้นอยู่ใต้เท้า",
						"hindi": "दिल... मेरे पैरों के नीचे धड़क रहा है, ऐसा लगता है।"
					}
				},
				{
					"action": "enter",
					"speaker": "eira",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "기록… 시작합니다. 핵의 박동 리듬은 점차 빨라지고 있습니다.",
						"english": "Recording... beginning. The core's pulsating rhythm is gradually accelerating.",
						"japanese": "記録…開始します。核の脈動リズムは次第に速くなっています。",
						"chinese": "记录……开始。核心的跳动节奏正在逐渐加快。",
						"french": "Enregistrement... commence. Le rythme de pulsation du noyau s'accélère progressivement.",
						"spanish": "Grabación... comenzando. El ritmo de pulsación del núcleo se acelera gradualmente.",
						"vietnamese": "Ghi âm… bắt đầu. Nhịp đập của lõi đang dần tăng tốc.",
						"thai": "บันทึก… เริ่มต้น จังหวะการเต้นของแกนกลางกำลังเร็วขึ้นเรื่อยๆ",
						"hindi": "रिकॉर्डिंग... शुरू हो रही है। कोर की धड़कन की लय धीरे-धीरे तेज हो रही है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이 진동이, 흡수된 모든 존재의 염원을 담고 있는 걸까요?",
						"english": "Could this vibration be carrying the wishes of all absorbed beings?",
						"japanese": "この振動が、吸収された全ての存在の念願を宿しているのでしょうか？",
						"chinese": "这股震动，是否承载着所有被吸收存在的愿望？",
						"french": "Cette vibration contiendrait-elle les vœux de tous les êtres absorbés ?",
						"spanish": "¿Podría esta vibración contener los deseos de todos los seres absorbidos?",
						"vietnamese": "Liệu rung động này có chứa đựng ước nguyện của tất cả những sinh vật đã bị hấp thụ không?",
						"thai": "การสั่นสะเทือนนี้อาจจะบรรจุความปรารถนาของสิ่งมีชีวิตทั้งหมดที่ถูกดูดกลืนไว้หรือเปล่า?",
						"hindi": "क्या यह कंपन, सभी अवशोषित प्राणियों की इच्छाओं को समाहित किए हुए है?"
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "eira",
					"action": "enter"
				},
				{
					"content": {
						"korean": "이상하네요. 박동이 거세질 때마다…",
						"english": "It's strange. Every time the pulse intensifies...",
						"japanese": "おかしいですね。脈動が激しくなるたびに…",
						"chinese": "真奇怪。每次跳动加剧时……",
						"french": "C'est étrange. Chaque fois que le battement s'intensifie...",
						"spanish": "Es extraño. Cada vez que la pulsación se intensifica...",
						"vietnamese": "Thật kỳ lạ. Mỗi khi nhịp đập mạnh hơn…",
						"thai": "แปลกจัง ทุกครั้งที่ชีพจรเต้นแรงขึ้น…",
						"hindi": "अजीब बात है। जब भी धड़कन तेज़ होती है..."
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "얼음 속 얼굴들이 함께 들썩이는 것이 보입니다.",
						"english": "I can see the faces within the ice stirring with it.",
						"japanese": "氷の中の顔々が共に蠢いているのが見えます。",
						"chinese": "我能看到冰中的面孔随之骚动。",
						"french": "Je peux voir les visages dans la glace s'agiter avec.",
						"spanish": "Puedo ver los rostros dentro del hielo agitándose con él.",
						"vietnamese": "Tôi có thể thấy những khuôn mặt trong băng cùng rung động.",
						"thai": "ฉันเห็นใบหน้าในน้ำแข็งพากันขยับตาม",
						"hindi": "मैं बर्फ़ के भीतर के चेहरों को साथ-साथ हिलते हुए देख सकता हूँ।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "얼굴? 저건 환영 아니었어?",
						"english": "A face? Was that not a hallucination?",
						"japanese": "顔？あれは幻影じゃなかったの？",
						"chinese": "脸？那不是幻觉吗？",
						"french": "Un visage ? Ce n'était pas une hallucination ?",
						"spanish": "¿Una cara? ¿No era una alucinación?",
						"vietnamese": "Một khuôn mặt? Đó không phải là ảo ảnh sao?",
						"thai": "ใบหน้า? นั่นไม่ใช่ภาพหลอนหรือ?",
						"hindi": "चेहरा? क्या वह मतिभ्रम नहीं था?"
					}
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "아니요. 저것들은 핵에 흡수된 존재들…",
						"english": "No. Those are beings absorbed into the core...",
						"japanese": "いいえ。あれらは核に吸収された存在…",
						"chinese": "不。那些是被核心吸收的生物…",
						"french": "Non. Ce sont des êtres absorbés par le noyau...",
						"spanish": "No. Esos son seres absorbidos por el núcleo...",
						"vietnamese": "Không. Đó là những thực thể bị hấp thụ vào lõi...",
						"thai": "ไม่ใช่ สิ่งเหล่านั้นคือสิ่งมีชีวิตที่ถูกดูดซับเข้าสู่แกนกลาง...",
						"hindi": "नहीं। वे कोर में समाहित प्राणी हैं..."
					},
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "전부… 하나로 뛰고 있어요. 굶주림의 맥박이.",
						"english": "All of them... beating as one. The pulse of hunger.",
						"japanese": "全て…一つに鼓動している。飢餓の脈動が。",
						"chinese": "它们都…合为一体跳动着。饥饿的脉搏。",
						"french": "Tous... battant à l'unisson. Le pouls de la faim.",
						"spanish": "Todos... latiendo como uno. El pulso del hambre.",
						"vietnamese": "Tất cả… đập như một. Nhịp đập của sự đói khát.",
						"thai": "ทั้งหมด... เต้นเป็นหนึ่งเดียว ชีพจรแห่งความหิวโหย",
						"hindi": "सब… एक साथ धड़क रहे हैं। भूख की धड़कन।"
					},
					"emotion": "sad"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "점점 더 강해집니다. 이 리듬은…",
						"english": "It grows stronger. This rhythm...",
						"japanese": "ますます強くなる。このリズムは…",
						"chinese": "越来越强了。这个节奏…",
						"french": "Il devient plus fort. Ce rythme...",
						"spanish": "Se hace más fuerte. Este ritmo...",
						"vietnamese": "Nó ngày càng mạnh hơn. Nhịp điệu này...",
						"thai": "มันแข็งแกร่งขึ้นเรื่อยๆ จังหวะนี้...",
						"hindi": "यह और मजबूत होता जा रहा है। यह लय…"
					},
					"type": "speech",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "죽은 자들의 기억을 왜곡시키고, 하나의 의지로 강제하고 있어요.",
						"english": "Distorting the memories of the dead, forcing them into a single will.",
						"japanese": "死者の記憶を歪め、一つの意思へと強制している。",
						"chinese": "扭曲死者的记忆，强迫它们成为一个意志。",
						"french": "Distordant les souvenirs des morts, les forçant à une volonté unique.",
						"spanish": "Distorsionando los recuerdos de los muertos, forzándolos a una única voluntad.",
						"vietnamese": "Bóp méo ký ức của người chết, buộc chúng vào một ý chí duy nhất.",
						"thai": "บิดเบือนความทรงจำของผู้ตาย บังคับให้พวกเขามีเจตจำนงเดียว",
						"hindi": "मृतकों की यादों को विकृत कर रहा है, उन्हें एक ही इच्छा में मजबूर कर रहा है।"
					},
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "끔찍해. 어서 저 심장을 멈춰야 해.",
						"english": "Horrible. We must stop that heart quickly.",
						"japanese": "恐ろしい。早くあの心臓を止めなければ。",
						"chinese": "太可怕了。我们必须尽快阻止那颗心脏。",
						"french": "Horrible. Nous devons arrêter ce cœur rapidement.",
						"spanish": "Horrible. Debemos detener ese corazón rápidamente.",
						"vietnamese": "Thật kinh khủng. Chúng ta phải nhanh chóng ngăn chặn trái tim đó.",
						"thai": "น่ากลัวมาก เราต้องหยุดหัวใจนั่นให้เร็วที่สุด",
						"hindi": "भयानक। हमें उस दिल को जल्दी रोकना होगा।"
					},
					"emotion": "angry"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "eira",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "이 박동… 마치 제 심장처럼 느껴져요.",
						"english": "This beat... it feels like my own heart.",
						"japanese": "この鼓動…まるで自分の心臓のようだ。",
						"chinese": "这跳动…感觉就像我自己的心跳。",
						"french": "Ce battement... on dirait mon propre cœur.",
						"spanish": "Este latido... se siente como mi propio corazón.",
						"vietnamese": "Nhịp đập này... cảm giác như trái tim của chính tôi.",
						"thai": "จังหวะนี้...รู้สึกเหมือนหัวใจของฉันเอง",
						"hindi": "यह धड़कन… मेरे अपने दिल जैसी लग रही है।"
					},
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "우린 이미 저것의 일부가 되어가는 건가.",
						"english": "Are we already becoming part of it?",
						"japanese": "私たちはもうあれの一部になっているのか？",
						"chinese": "我们已经成为它的一部分了吗？",
						"french": "Sommes-nous déjà en train d'en faire partie ?",
						"spanish": "¿Ya nos estamos convirtiendo en parte de ello?",
						"vietnamese": "Chúng ta đã trở thành một phần của nó rồi sao?",
						"thai": "เรากำลังจะกลายเป็นส่วนหนึ่งของมันแล้วหรือ?",
						"hindi": "क्या हम पहले से ही उसका हिस्सा बनते जा रहे हैं?"
					}
				},
				{
					"content": {
						"korean": "아니요. 끝까지 기록해야 합니다. 이것이… 잊힌 모든 것의 진실이니까요.",
						"english": "No. We must record it to the end. This is... the truth of all that was forgotten.",
						"japanese": "いいえ。最後まで記録しなければなりません。これが…忘れられた全ての真実だからです。",
						"chinese": "不。我们必须记录到最后。因为这是…所有被遗忘事物的真相。",
						"french": "Non. Nous devons le consigner jusqu'à la fin. C'est... la vérité de tout ce qui a été oublié.",
						"spanish": "No. Debemos registrarlo hasta el final. Esta es... la verdad de todo lo olvidado.",
						"vietnamese": "Không. Chúng ta phải ghi lại nó cho đến cùng. Đây là... sự thật của tất cả những gì đã bị lãng quên.",
						"thai": "ไม่ใช่ เราต้องบันทึกมันจนกว่าจะจบ นี่คือ...ความจริงของทุกสิ่งที่ถูกลืม",
						"hindi": "नहीं। हमें इसे अंत तक रिकॉर्ड करना होगा। यह… भूले हुए हर चीज का सच है।"
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"emotion": "sad",
					"content": {
						"korean": "크윽… 겨우 하나의 팔을 잘랐을 뿐…",
						"english": "Ugh... Only one arm severed...",
						"japanese": "くっ… 腕を一本切り落としただけか…",
						"chinese": "呃……只不过砍掉了一条手臂……",
						"french": "Ugh... Un seul bras coupé...",
						"spanish": "Ugh... Solo un brazo cercenado...",
						"vietnamese": "Khụ... Chỉ mới chặt được một cánh tay...",
						"thai": "อึก... แค่ตัดแขนไปข้างเดียวเอง...",
						"hindi": "उफ़... केवल एक हाथ काटा गया..."
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "이 굶주림은… 멈추지 않는다…",
						"english": "This hunger... it doesn't stop...",
						"japanese": "この飢えは… 止まらない…",
						"chinese": "这份饥饿……永不停止……",
						"french": "Cette faim... elle ne s'arrête pas...",
						"spanish": "Esta hambruna... no se detiene...",
						"vietnamese": "Sự đói khát này... không ngừng lại...",
						"thai": "ความหิวกระหายนี้... มันไม่หยุดเลย...",
						"hindi": "यह भूख... रुकती नहीं..."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "뭐라고? 아직 끝이 아니라고?",
						"english": "What? It's not over yet?",
						"japanese": "なんだと？まだ終わりじゃないのか？",
						"chinese": "什么？还没结束吗？",
						"french": "Quoi ? Ce n'est pas encore fini ?",
						"spanish": "¿Qué? ¿Aún no ha terminado?",
						"vietnamese": "Cái gì? Vẫn chưa kết thúc sao?",
						"thai": "ว่าไงนะ? ยังไม่จบอีกเหรอ?",
						"hindi": "क्या? अभी खत्म नहीं हुआ?"
					}
				},
				{
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"speaker": "eira",
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "맥박의 진원이… 아직 저 너머에 있습니다.",
						"english": "The source of the pulse... is still beyond.",
						"japanese": "脈動の震源が… まだあの先にあります。",
						"chinese": "脉动的源头……还在更远的地方。",
						"french": "La source du battement... est encore au-delà.",
						"spanish": "El origen del pulso... aún está más allá.",
						"vietnamese": "Nguồn gốc của nhịp đập... vẫn còn ở phía bên kia.",
						"thai": "ต้นกำเนิดของชีพจร... ยังคงอยู่เบื้องหลัง",
						"hindi": "नब्ज का स्रोत... अभी भी उस पार है।"
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"content": {
						"korean": "핵의 박동은 잠시 잦아들었으나, 여전히 깊은 곳에서 울리고 있었다.",
						"english": "The core's pulse subsided for a moment, but still echoed from the depths.",
						"japanese": "核の鼓動は一時的に静まったが、依然として深淵から響いていた。",
						"chinese": "核心的跳动暂时减弱了，但仍旧在深处回响。",
						"french": "Le battement du cœur s'est tu un instant, mais résonnait toujours des profondeurs.",
						"spanish": "El pulso del núcleo se calmó por un momento, pero aún resonaba desde las profundidades.",
						"vietnamese": "Nhịp đập của lõi tạm thời lắng xuống, nhưng vẫn vang vọng từ sâu thẳm.",
						"thai": "ชีพจรของแกนกลางสงบลงชั่วขณะ แต่ยังคงก้องกังวานจากความลึก",
						"hindi": "कोर की धड़कन कुछ देर के लिए धीमी पड़ गई, लेकिन फिर भी गहराई से गूँज रही थी।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 길을 막아섰다.",
						"english": "A colossal shadow blocked the way.",
						"japanese": "巨大な影が道を塞いだ。",
						"chinese": "一个巨大的影子挡住了去路。",
						"french": "Une ombre colossale bloquait le chemin.",
						"spanish": "Una sombra colosal bloqueó el camino.",
						"vietnamese": "Một bóng đen khổng lồ chặn đường.",
						"thai": "เงาขนาดมหึมาขวางทางอยู่",
						"hindi": "एक विशाल छाया ने रास्ता रोक दिया।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "어리석은 자들… 이곳에 오면 무엇이든 변할 줄 알았나?",
						"english": "Fools... Did you think coming here would change anything?",
						"japanese": "愚か者どもめ… ここに来れば何かが変わるとでも思ったか？",
						"chinese": "愚蠢的家伙们……以为来到这里就能改变什么吗？",
						"french": "Fous... Pensiez-vous que venir ici changerait quoi que ce soit ?",
						"spanish": "Necios... ¿Creísteis que venir aquí cambiaría algo?",
						"vietnamese": "Những kẻ ngu ngốc... Các ngươi nghĩ đến đây sẽ thay đổi được gì sao?",
						"thai": "พวกโง่เง่า... คิดว่ามาที่นี่แล้วทุกอย่างจะเปลี่ยนไปงั้นรึ?",
						"hindi": "मूर्खों... क्या तुमने सोचा था कि यहाँ आने से कुछ बदल जाएगा?"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "비켜! 넌 이 탑의 일부일 뿐이야!",
						"english": "Get out of my way! You're just a part of this tower!",
						"japanese": "退け！お前はこの塔の一部に過ぎない！",
						"chinese": "让开！你只是这座塔的一部分！",
						"french": "Écarte-toi ! Tu n'es qu'une partie de cette tour !",
						"spanish": "¡Fuera de mi camino! ¡Solo eres parte de esta torre!",
						"vietnamese": "Tránh ra! Ngươi chỉ là một phần của tòa tháp này thôi!",
						"thai": "หลีกไป! แกเป็นแค่ส่วนหนึ่งของหอนี้เท่านั้น!",
						"hindi": "हट जाओ! तुम बस इस मीनार का एक हिस्सा हो!"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "나는 이 모든 굶주림. 너희의 심장도 곧 나의 일부가 될 것이다.",
						"english": "I am this hunger. Your hearts too shall soon be part of me.",
						"japanese": "我はこの飢え。お前たちの心臓も、やがて我の一部となるだろう。",
						"chinese": "我即是这饥饿。你们的心脏也很快会成为我的一部分。",
						"french": "Je suis cette faim. Vos cœurs aussi feront bientôt partie de moi.",
						"spanish": "Soy esta hambruna. Vuestros corazones pronto serán parte de mí.",
						"vietnamese": "Ta chính là sự đói khát này. Trái tim của các ngươi cũng sẽ sớm trở thành một phần của ta.",
						"thai": "ข้าคือความหิวกระหายนี้ หัวใจของพวกเจ้าก็จะกลายเป็นส่วนหนึ่งของข้าในไม่ช้า",
						"hindi": "मैं यह भूख हूँ। तुम्हारे दिल भी जल्द ही मेरा हिस्सा बन जाएंगे।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "핵의 굶주림은 탐험대를 집어삼켰다.",
						"english": "The core's hunger devoured the expedition.",
						"japanese": "核の飢えは探検隊を飲み込んだ。",
						"chinese": "核心的饥饿吞噬了探险队。",
						"french": "La faim du cœur dévora l'expédition.",
						"spanish": "La hambruna del núcleo devoró a la expedición.",
						"vietnamese": "Cơn đói của lõi đã nuốt chửng đội thám hiểm.",
						"thai": "ความหิวกระหายของแกนกลางกลืนกินคณะสำรวจ",
						"hindi": "कोर की भूख ने अभियान दल को निगल लिया।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "어리석은 자들… 너희의 분노도 결국 나의 양식이 될 뿐.",
						"english": "Fools... Even your rage will only become my sustenance.",
						"japanese": "愚か者どもめ… お前たちの怒りも、結局は我の糧となるだけだ。",
						"chinese": "愚蠢的家伙们……你们的愤怒最终也只会成为我的养料。",
						"french": "Fous... Même votre rage ne fera que devenir ma subsistance.",
						"spanish": "Necios... Incluso vuestra ira solo se convertirá en mi sustento.",
						"vietnamese": "Những kẻ ngu ngốc... Ngay cả sự tức giận của các ngươi cũng sẽ chỉ trở thành thức ăn của ta mà thôi.",
						"thai": "พวกโง่เง่า... แม้แต่ความโกรธของพวกเจ้าก็จะเป็นเพียงอาหารของข้าเท่านั้น",
						"hindi": "मूर्खों... तुम्हारा गुस्सा भी अंततः मेरा पोषण ही बनेगा।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "크윽… 아직… 끝나지 않았어!",
						"english": "Ugh... It's not... over yet!",
						"japanese": "くっ... まだ... 終わってない！",
						"chinese": "呃... 还没... 结束！",
						"french": "Ugh... Ce n'est pas... fini !",
						"spanish": "Ugh... ¡Aún no... ha terminado!",
						"vietnamese": "Khụ... Vẫn chưa... kết thúc đâu!",
						"thai": "อึก... ยัง... ไม่จบ!",
						"hindi": "उफ़... अभी... खत्म नहीं हुआ!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"탑의 심장이 거세게 울린다.",
			"발밑의 얼음을 타고, 맥박이 온몸으로 전해진다.",
			"그것은 굶주린 심장. 얼어붙은 얼굴들이 함께 들썩인다.",
			"에이라는 모든 죽음이 하나로 뛰는 그 리듬을 기록하려 한다."
		],
		"english": [
			"The Tower's heart beats fiercely.",
			"The pulse travels through the ice beneath my feet, spreading throughout my body.",
			"It is a hungry heart. Frozen faces stir with it.",
			"Aira seeks to record that rhythm, where all deaths beat as one."
		],
		"japanese": [
			"塔の心臓が激しく脈打つ。",
			"足元の氷を伝い、脈動が全身に伝わる。",
			"それは飢えた心臓。凍てついた顔々が共に蠢く。",
			"エイラは、全ての死が一つに脈打つそのリズムを記録しようとする。"
		],
		"chinese": [
			"塔的心脏剧烈跳动。",
			"脉搏穿透脚下的冰层，传遍全身。",
			"那是一颗饥饿的心脏。冻结的面孔随之骚动。",
			"艾拉试图记录下所有死亡合为一体跳动的那个节奏。"
		],
		"french": [
			"Le cœur de la Tour bat violemment.",
			"La pulsation traverse la glace sous mes pieds, se propageant dans tout mon corps.",
			"C'est un cœur affamé. Des visages gelés s'agitent avec lui.",
			"Aira cherche à enregistrer ce rythme où toutes les morts battent à l'unisson."
		],
		"spanish": [
			"El corazón de la Torre late con fuerza.",
			"El pulso viaja a través del hielo bajo mis pies, extendiéndose por todo mi cuerpo.",
			"Es un corazón hambriento. Rostros congelados se agitan con él.",
			"Aira intenta registrar ese ritmo, donde todas las muertes laten como una sola."
		],
		"vietnamese": [
			"Trái tim của Tháp đập dữ dội.",
			"Nhịp đập truyền qua lớp băng dưới chân, lan tỏa khắp cơ thể.",
			"Đó là một trái tim đói khát. Những khuôn mặt đóng băng cùng rung động.",
			"Aira cố gắng ghi lại nhịp điệu đó, nơi mọi cái chết cùng đập như một."
		],
		"thai": [
			"หัวใจของหอคอยเต้นแรง",
			"ชีพจรส่งผ่านน้ำแข็งใต้เท้า แผ่ซ่านไปทั่วร่าง",
			"มันคือหัวใจที่หิวโหย ใบหน้าอันเยือกแข็งพากันขยับ",
			"ไอราพยายามบันทึกจังหวะนั้น ที่ซึ่งความตายทั้งหมดเต้นเป็นหนึ่งเดียว"
		],
		"hindi": [
			"टॉवर का दिल ज़ोर से धड़क रहा है।",
			"पैरों के नीचे की बर्फ़ से, नब्ज़ पूरे शरीर में फैल जाती है।",
			"यह एक भूखा दिल है। जमे हुए चेहरे भी साथ-साथ हिलते हैं।",
			"ऐरा उस लय को रिकॉर्ड करना चाहती है, जहाँ सभी मौतें एक साथ धड़कती हैं।"
		]
	}
} as const;
